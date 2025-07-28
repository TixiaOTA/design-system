import he, { useState as te, useEffect as be, forwardRef as ke, useRef as pe, useCallback as Be, Children as Ot, isValidElement as bt, cloneElement as Sr, createContext as Rr, useContext as Mr } from "react";
import { createPortal as Ye } from "react-dom";
import fe from "dayjs";
import { useReactTable as Cr, getPaginationRowModel as Ar, getSortedRowModel as Pr, getCoreRowModel as Dr, flexRender as Lt } from "@tanstack/react-table";
var Zt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Jt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Nt = { exports: {} }, nt = {};
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
function Tr() {
  if ($t) return nt;
  $t = 1;
  var t = he, r = Symbol.for("react.element"), s = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(i, d, m) {
    var b, u = {}, h = null, f = null;
    m !== void 0 && (h = "" + m), d.key !== void 0 && (h = "" + d.key), d.ref !== void 0 && (f = d.ref);
    for (b in d) a.call(d, b) && !l.hasOwnProperty(b) && (u[b] = d[b]);
    if (i && i.defaultProps) for (b in d = i.defaultProps, d) u[b] === void 0 && (u[b] = d[b]);
    return { $$typeof: r, type: i, key: h, ref: f, props: u, _owner: n.current };
  }
  return nt.Fragment = s, nt.jsx = c, nt.jsxs = c, nt;
}
var ot = {};
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
function Ir() {
  return Ft || (Ft = 1, process.env.NODE_ENV !== "production" && function() {
    var t = he, r = Symbol.for("react.element"), s = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), i = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), j = Symbol.iterator, k = "@@iterator";
    function p(o) {
      if (o === null || typeof o != "object")
        return null;
      var M = j && o[j] || o[k];
      return typeof M == "function" ? M : null;
    }
    var y = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(o) {
      {
        for (var M = arguments.length, F = new Array(M > 1 ? M - 1 : 0), q = 1; q < M; q++)
          F[q - 1] = arguments[q];
        D("error", o, F);
      }
    }
    function D(o, M, F) {
      {
        var q = y.ReactDebugCurrentFrame, ie = q.getStackAddendum();
        ie !== "" && (M += "%s", F = F.concat([ie]));
        var ue = F.map(function(ae) {
          return String(ae);
        });
        ue.unshift("Warning: " + M), Function.prototype.apply.call(console[o], console, ue);
      }
    }
    var L = !1, T = !1, W = !1, V = !1, S = !1, E;
    E = Symbol.for("react.module.reference");
    function N(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === a || o === l || S || o === n || o === m || o === b || V || o === f || L || T || W || typeof o == "object" && o !== null && (o.$$typeof === h || o.$$typeof === u || o.$$typeof === c || o.$$typeof === i || o.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === E || o.getModuleId !== void 0));
    }
    function G(o, M, F) {
      var q = o.displayName;
      if (q)
        return q;
      var ie = M.displayName || M.name || "";
      return ie !== "" ? F + "(" + ie + ")" : F;
    }
    function R(o) {
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
        case a:
          return "Fragment";
        case s:
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
            return R(M) + ".Consumer";
          case c:
            var F = o;
            return R(F._context) + ".Provider";
          case d:
            return G(o, o.render, "ForwardRef");
          case u:
            var q = o.displayName || null;
            return q !== null ? q : C(o.type) || "Memo";
          case h: {
            var ie = o, ue = ie._payload, ae = ie._init;
            try {
              return C(ae(ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, B = 0, A, x, _, g, H, P, U;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function ce() {
      {
        if (B === 0) {
          A = console.log, x = console.info, _ = console.warn, g = console.error, H = console.group, P = console.groupCollapsed, U = console.groupEnd;
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
        B++;
      }
    }
    function oe() {
      {
        if (B--, B === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, o, {
              value: A
            }),
            info: $({}, o, {
              value: x
            }),
            warn: $({}, o, {
              value: _
            }),
            error: $({}, o, {
              value: g
            }),
            group: $({}, o, {
              value: H
            }),
            groupCollapsed: $({}, o, {
              value: P
            }),
            groupEnd: $({}, o, {
              value: U
            })
          });
        }
        B < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = y.ReactCurrentDispatcher, z;
    function X(o, M, F) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (ie) {
            var q = ie.stack.trim().match(/\n( *(at )?)/);
            z = q && q[1] || "";
          }
        return `
` + z + o;
      }
    }
    var ve = !1, Ne;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      Ne = new Ve();
    }
    function Ie(o, M) {
      if (!o || ve)
        return "";
      {
        var F = Ne.get(o);
        if (F !== void 0)
          return F;
      }
      var q;
      ve = !0;
      var ie = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ue;
      ue = le.current, le.current = null, ce();
      try {
        if (M) {
          var ae = function() {
            throw Error();
          };
          if (Object.defineProperty(ae.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ae, []);
            } catch (Me) {
              q = Me;
            }
            Reflect.construct(o, [], ae);
          } else {
            try {
              ae.call();
            } catch (Me) {
              q = Me;
            }
            o.call(ae.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Me) {
            q = Me;
          }
          o();
        }
      } catch (Me) {
        if (Me && q && typeof Me.stack == "string") {
          for (var se = Me.stack.split(`
`), Se = q.stack.split(`
`), xe = se.length - 1, ye = Se.length - 1; xe >= 1 && ye >= 0 && se[xe] !== Se[ye]; )
            ye--;
          for (; xe >= 1 && ye >= 0; xe--, ye--)
            if (se[xe] !== Se[ye]) {
              if (xe !== 1 || ye !== 1)
                do
                  if (xe--, ye--, ye < 0 || se[xe] !== Se[ye]) {
                    var Ae = `
` + se[xe].replace(" at new ", " at ");
                    return o.displayName && Ae.includes("<anonymous>") && (Ae = Ae.replace("<anonymous>", o.displayName)), typeof o == "function" && Ne.set(o, Ae), Ae;
                  }
                while (xe >= 1 && ye >= 0);
              break;
            }
        }
      } finally {
        ve = !1, le.current = ue, oe(), Error.prepareStackTrace = ie;
      }
      var tt = o ? o.displayName || o.name : "", Xe = tt ? X(tt) : "";
      return typeof o == "function" && Ne.set(o, Xe), Xe;
    }
    function _e(o, M, F) {
      return Ie(o, !1);
    }
    function ze(o) {
      var M = o.prototype;
      return !!(M && M.isReactComponent);
    }
    function Ge(o, M, F) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return Ie(o, ze(o));
      if (typeof o == "string")
        return X(o);
      switch (o) {
        case m:
          return X("Suspense");
        case b:
          return X("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case d:
            return _e(o.render);
          case u:
            return Ge(o.type, M, F);
          case h: {
            var q = o, ie = q._payload, ue = q._init;
            try {
              return Ge(ue(ie), M, F);
            } catch {
            }
          }
        }
      return "";
    }
    var De = Object.prototype.hasOwnProperty, Ce = {}, Ke = y.ReactDebugCurrentFrame;
    function Oe(o) {
      if (o) {
        var M = o._owner, F = Ge(o.type, o._source, M ? M.type : null);
        Ke.setExtraStackFrame(F);
      } else
        Ke.setExtraStackFrame(null);
    }
    function at(o, M, F, q, ie) {
      {
        var ue = Function.call.bind(De);
        for (var ae in o)
          if (ue(o, ae)) {
            var se = void 0;
            try {
              if (typeof o[ae] != "function") {
                var Se = Error((q || "React class") + ": " + F + " type `" + ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Se.name = "Invariant Violation", Se;
              }
              se = o[ae](M, ae, q, F, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (xe) {
              se = xe;
            }
            se && !(se instanceof Error) && (Oe(ie), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", q || "React class", F, ae, typeof se), Oe(null)), se instanceof Error && !(se.message in Ce) && (Ce[se.message] = !0, Oe(ie), w("Failed %s type: %s", F, se.message), Oe(null));
          }
      }
    }
    var qe = Array.isArray;
    function He(o) {
      return qe(o);
    }
    function Qe(o) {
      {
        var M = typeof Symbol == "function" && Symbol.toStringTag, F = M && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return F;
      }
    }
    function I(o) {
      try {
        return K(o), !1;
      } catch {
        return !0;
      }
    }
    function K(o) {
      return "" + o;
    }
    function O(o) {
      if (I(o))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(o)), K(o);
    }
    var Z = y.ReactCurrentOwner, Y = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, de, J;
    function me(o) {
      if (De.call(o, "ref")) {
        var M = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Pe(o) {
      if (De.call(o, "key")) {
        var M = Object.getOwnPropertyDescriptor(o, "key").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Ze(o, M) {
      typeof o.ref == "string" && Z.current;
    }
    function Je(o, M) {
      {
        var F = function() {
          de || (de = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        F.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: F,
          configurable: !0
        });
      }
    }
    function Le(o, M) {
      {
        var F = function() {
          J || (J = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        F.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: F,
          configurable: !0
        });
      }
    }
    var dt = function(o, M, F, q, ie, ue, ae) {
      var se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: o,
        key: M,
        ref: F,
        props: ae,
        // Record the component responsible for creating this element.
        _owner: ue
      };
      return se._store = {}, Object.defineProperty(se._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(se, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: q
      }), Object.defineProperty(se, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
    };
    function ft(o, M, F, q, ie) {
      {
        var ue, ae = {}, se = null, Se = null;
        F !== void 0 && (O(F), se = "" + F), Pe(M) && (O(M.key), se = "" + M.key), me(M) && (Se = M.ref, Ze(M, ie));
        for (ue in M)
          De.call(M, ue) && !Y.hasOwnProperty(ue) && (ae[ue] = M[ue]);
        if (o && o.defaultProps) {
          var xe = o.defaultProps;
          for (ue in xe)
            ae[ue] === void 0 && (ae[ue] = xe[ue]);
        }
        if (se || Se) {
          var ye = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          se && Je(ae, ye), Se && Le(ae, ye);
        }
        return dt(o, se, Se, ie, q, Z.current, ae);
      }
    }
    var $e = y.ReactCurrentOwner, At = y.ReactDebugCurrentFrame;
    function et(o) {
      if (o) {
        var M = o._owner, F = Ge(o.type, o._source, M ? M.type : null);
        At.setExtraStackFrame(F);
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
    var Dt = {};
    function hr(o) {
      {
        var M = Pt();
        if (!M) {
          var F = typeof o == "string" ? o : o.displayName || o.name;
          F && (M = `

Check the top-level render call using <` + F + ">.");
        }
        return M;
      }
    }
    function Tt(o, M) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var F = hr(M);
        if (Dt[F])
          return;
        Dt[F] = !0;
        var q = "";
        o && o._owner && o._owner !== $e.current && (q = " It was passed a child from " + C(o._owner.type) + "."), et(o), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', F, q), et(null);
      }
    }
    function It(o, M) {
      {
        if (typeof o != "object")
          return;
        if (He(o))
          for (var F = 0; F < o.length; F++) {
            var q = o[F];
            gt(q) && Tt(q, M);
          }
        else if (gt(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var ie = p(o);
          if (typeof ie == "function" && ie !== o.entries)
            for (var ue = ie.call(o), ae; !(ae = ue.next()).done; )
              gt(ae.value) && Tt(ae.value, M);
        }
      }
    }
    function xr(o) {
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
          var q = C(M);
          at(F, o.props, "prop", q, o);
        } else if (M.PropTypes !== void 0 && !mt) {
          mt = !0;
          var ie = C(M);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ie || "Unknown");
        }
        typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(o) {
      {
        for (var M = Object.keys(o.props), F = 0; F < M.length; F++) {
          var q = M[F];
          if (q !== "children" && q !== "key") {
            et(o), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", q), et(null);
            break;
          }
        }
        o.ref !== null && (et(o), w("Invalid attribute `ref` supplied to `React.Fragment`."), et(null));
      }
    }
    var _t = {};
    function zt(o, M, F, q, ie, ue) {
      {
        var ae = N(o);
        if (!ae) {
          var se = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Se = br();
          Se ? se += Se : se += Pt();
          var xe;
          o === null ? xe = "null" : He(o) ? xe = "array" : o !== void 0 && o.$$typeof === r ? (xe = "<" + (C(o.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : xe = typeof o, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", xe, se);
        }
        var ye = ft(o, M, F, ie, ue);
        if (ye == null)
          return ye;
        if (ae) {
          var Ae = M.children;
          if (Ae !== void 0)
            if (q)
              if (He(Ae)) {
                for (var tt = 0; tt < Ae.length; tt++)
                  It(Ae[tt], o);
                Object.freeze && Object.freeze(Ae);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              It(Ae, o);
        }
        if (De.call(M, "key")) {
          var Xe = C(o), Me = Object.keys(M).filter(function(Er) {
            return Er !== "key";
          }), pt = Me.length > 0 ? "{key: someKey, " + Me.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!_t[Xe + pt]) {
            var Nr = Me.length > 0 ? "{" + Me.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, pt, Xe, Nr, Xe), _t[Xe + pt] = !0;
          }
        }
        return o === a ? vr(ye) : xr(ye), ye;
      }
    }
    function yr(o, M, F) {
      return zt(o, M, F, !0);
    }
    function wr(o, M, F) {
      return zt(o, M, F, !1);
    }
    var kr = wr, jr = yr;
    ot.Fragment = a, ot.jsx = kr, ot.jsxs = jr;
  }()), ot;
}
process.env.NODE_ENV === "production" ? Nt.exports = Tr() : Nt.exports = Ir();
var e = Nt.exports;
function Xt(t) {
  var r, s, a = "";
  if (typeof t == "string" || typeof t == "number") a += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var n = t.length;
    for (r = 0; r < n; r++) t[r] && (s = Xt(t[r])) && (a && (a += " "), a += s);
  } else for (s in t) t[s] && (a && (a += " "), a += s);
  return a;
}
function ne() {
  for (var t, r, s = 0, a = "", n = arguments.length; s < n; s++) (t = arguments[s]) && (r = Xt(t)) && (a && (a += " "), a += r);
  return a;
}
const Mt = "-", _r = (t) => {
  const r = Or(t), {
    conflictingClassGroups: s,
    conflictingClassGroupModifiers: a
  } = t;
  return {
    getClassGroupId: (c) => {
      const i = c.split(Mt);
      return i[0] === "" && i.length !== 1 && i.shift(), Qt(i, r) || zr(c);
    },
    getConflictingClassGroupIds: (c, i) => {
      const d = s[c] || [];
      return i && a[c] ? [...d, ...a[c]] : d;
    }
  };
}, Qt = (t, r) => {
  var c;
  if (t.length === 0)
    return r.classGroupId;
  const s = t[0], a = r.nextPart.get(s), n = a ? Qt(t.slice(1), a) : void 0;
  if (n)
    return n;
  if (r.validators.length === 0)
    return;
  const l = t.join(Mt);
  return (c = r.validators.find(({
    validator: i
  }) => i(l))) == null ? void 0 : c.classGroupId;
}, Bt = /^\[(.+)\]$/, zr = (t) => {
  if (Bt.test(t)) {
    const r = Bt.exec(t)[1], s = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (s)
      return "arbitrary.." + s;
  }
}, Or = (t) => {
  const {
    theme: r,
    prefix: s
  } = t, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return $r(Object.entries(t.classGroups), s).forEach(([l, c]) => {
    Et(c, a, l, r);
  }), a;
}, Et = (t, r, s, a) => {
  t.forEach((n) => {
    if (typeof n == "string") {
      const l = n === "" ? r : Yt(r, n);
      l.classGroupId = s;
      return;
    }
    if (typeof n == "function") {
      if (Lr(n)) {
        Et(n(a), r, s, a);
        return;
      }
      r.validators.push({
        validator: n,
        classGroupId: s
      });
      return;
    }
    Object.entries(n).forEach(([l, c]) => {
      Et(c, Yt(r, l), s, a);
    });
  });
}, Yt = (t, r) => {
  let s = t;
  return r.split(Mt).forEach((a) => {
    s.nextPart.has(a) || s.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), s = s.nextPart.get(a);
  }), s;
}, Lr = (t) => t.isThemeGetter, $r = (t, r) => r ? t.map(([s, a]) => {
  const n = a.map((l) => typeof l == "string" ? r + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(([c, i]) => [r + c, i])) : l);
  return [s, n];
}) : t, Fr = (t) => {
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
}, er = "!", Br = (t) => {
  const {
    separator: r,
    experimentalParseClassName: s
  } = t, a = r.length === 1, n = r[0], l = r.length, c = (i) => {
    const d = [];
    let m = 0, b = 0, u;
    for (let p = 0; p < i.length; p++) {
      let y = i[p];
      if (m === 0) {
        if (y === n && (a || i.slice(p, p + l) === r)) {
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
    const h = d.length === 0 ? i : i.substring(b), f = h.startsWith(er), j = f ? h.substring(1) : h, k = u && u > b ? u - b : void 0;
    return {
      modifiers: d,
      hasImportantModifier: f,
      baseClassName: j,
      maybePostfixModifierPosition: k
    };
  };
  return s ? (i) => s({
    className: i,
    parseClassName: c
  }) : c;
}, Yr = (t) => {
  if (t.length <= 1)
    return t;
  const r = [];
  let s = [];
  return t.forEach((a) => {
    a[0] === "[" ? (r.push(...s.sort(), a), s = []) : s.push(a);
  }), r.push(...s.sort()), r;
}, Vr = (t) => ({
  cache: Fr(t.cacheSize),
  parseClassName: Br(t),
  ..._r(t)
}), Gr = /\s+/, Hr = (t, r) => {
  const {
    parseClassName: s,
    getClassGroupId: a,
    getConflictingClassGroupIds: n
  } = r, l = [], c = t.trim().split(Gr);
  let i = "";
  for (let d = c.length - 1; d >= 0; d -= 1) {
    const m = c[d], {
      modifiers: b,
      hasImportantModifier: u,
      baseClassName: h,
      maybePostfixModifierPosition: f
    } = s(m);
    let j = !!f, k = a(j ? h.substring(0, f) : h);
    if (!k) {
      if (!j) {
        i = m + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (k = a(h), !k) {
        i = m + (i.length > 0 ? " " + i : i);
        continue;
      }
      j = !1;
    }
    const p = Yr(b).join(":"), y = u ? p + er : p, w = y + k;
    if (l.includes(w))
      continue;
    l.push(w);
    const D = n(k, j);
    for (let L = 0; L < D.length; ++L) {
      const T = D[L];
      l.push(y + T);
    }
    i = m + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Wr() {
  let t = 0, r, s, a = "";
  for (; t < arguments.length; )
    (r = arguments[t++]) && (s = tr(r)) && (a && (a += " "), a += s);
  return a;
}
const tr = (t) => {
  if (typeof t == "string")
    return t;
  let r, s = "";
  for (let a = 0; a < t.length; a++)
    t[a] && (r = tr(t[a])) && (s && (s += " "), s += r);
  return s;
};
function Ur(t, ...r) {
  let s, a, n, l = c;
  function c(d) {
    const m = r.reduce((b, u) => u(b), t());
    return s = Vr(m), a = s.cache.get, n = s.cache.set, l = i, i(d);
  }
  function i(d) {
    const m = a(d);
    if (m)
      return m;
    const b = Hr(d, s);
    return n(d, b), b;
  }
  return function() {
    return l(Wr.apply(null, arguments));
  };
}
const ge = (t) => {
  const r = (s) => s[t] || [];
  return r.isThemeGetter = !0, r;
}, rr = /^\[(?:([a-z-]+):)?(.+)\]$/i, Kr = /^\d+\/\d+$/, qr = /* @__PURE__ */ new Set(["px", "full", "screen"]), Zr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Jr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Xr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Qr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, es = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Fe = (t) => rt(t) || qr.has(t) || Kr.test(t), We = (t) => st(t, "length", is), rt = (t) => !!t && !Number.isNaN(Number(t)), ht = (t) => st(t, "number", rt), lt = (t) => !!t && Number.isInteger(Number(t)), ts = (t) => t.endsWith("%") && rt(t.slice(0, -1)), Q = (t) => rr.test(t), Ue = (t) => Zr.test(t), rs = /* @__PURE__ */ new Set(["length", "size", "percentage"]), ss = (t) => st(t, rs, sr), as = (t) => st(t, "position", sr), ns = /* @__PURE__ */ new Set(["image", "url"]), os = (t) => st(t, ns, ds), ls = (t) => st(t, "", cs), it = () => !0, st = (t, r, s) => {
  const a = rr.exec(t);
  return a ? a[1] ? typeof r == "string" ? a[1] === r : r.has(a[1]) : s(a[2]) : !1;
}, is = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Jr.test(t) && !Xr.test(t)
), sr = () => !1, cs = (t) => Qr.test(t), ds = (t) => es.test(t), us = () => {
  const t = ge("colors"), r = ge("spacing"), s = ge("blur"), a = ge("brightness"), n = ge("borderColor"), l = ge("borderRadius"), c = ge("borderSpacing"), i = ge("borderWidth"), d = ge("contrast"), m = ge("grayscale"), b = ge("hueRotate"), u = ge("invert"), h = ge("gap"), f = ge("gradientColorStops"), j = ge("gradientColorStopPositions"), k = ge("inset"), p = ge("margin"), y = ge("opacity"), w = ge("padding"), D = ge("saturate"), L = ge("scale"), T = ge("sepia"), W = ge("skew"), V = ge("space"), S = ge("translate"), E = () => ["auto", "contain", "none"], N = () => ["auto", "hidden", "clip", "visible", "scroll"], G = () => ["auto", Q, r], R = () => [Q, r], C = () => ["", Fe, We], $ = () => ["auto", rt, Q], B = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], A = () => ["solid", "dashed", "dotted", "double", "none"], x = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], _ = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], g = () => ["", "0", Q], H = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], P = () => [rt, Q];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [it],
      spacing: [Fe, We],
      blur: ["none", "", Ue, Q],
      brightness: P(),
      borderColor: [t],
      borderRadius: ["none", "", "full", Ue, Q],
      borderSpacing: R(),
      borderWidth: C(),
      contrast: P(),
      grayscale: g(),
      hueRotate: P(),
      invert: g(),
      gap: R(),
      gradientColorStops: [t],
      gradientColorStopPositions: [ts, We],
      inset: G(),
      margin: G(),
      opacity: P(),
      padding: R(),
      saturate: P(),
      scale: P(),
      sepia: g(),
      skew: P(),
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
        aspect: ["auto", "square", "video", Q]
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
        "break-after": H()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": H()
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
        object: [...B(), Q]
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
        z: ["auto", lt, Q]
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
        flex: ["1", "auto", "initial", "none", Q]
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
        order: ["first", "last", "none", lt, Q]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [it]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", lt, Q]
        }, Q]
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
        "grid-rows": [it]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [lt, Q]
        }, Q]
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
        "auto-cols": ["auto", "min", "max", "fr", Q]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Q]
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
        justify: ["normal", ..._()]
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
        content: ["normal", ..._(), "baseline"]
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
        "place-content": [..._(), "baseline"]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Q, r, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Q, r, "none", "full", "min", "max", "fit", "prose", {
          screen: [Ue]
        }, Ue]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Q, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Q, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Q, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Q, r, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Ue, We]
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
        font: [it]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Q]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", rt, ht]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Fe, Q]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Q]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Q]
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
        decoration: [...A(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Fe, We]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Fe, Q]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Q]
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
        content: ["none", Q]
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
        bg: [...B(), as]
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
        bg: ["auto", "cover", "contain", ss]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, os]
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
        border: [...A(), "hidden"]
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
        divide: A()
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
        outline: ["", ...A()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Fe, Q]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Fe, We]
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
        "ring-offset": [Fe, We]
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
        shadow: ["", "inner", "none", Ue, ls]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [it]
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
        "drop-shadow": ["", "none", Ue, Q]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Q]
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
        ease: ["linear", "in", "out", "in-out", Q]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", Q]
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
        rotate: [lt, Q]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [S]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [S]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [W]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [W]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Q]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Q]
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
        "will-change": ["auto", "scroll", "contents", "transform", Q]
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
        stroke: [Fe, We, ht]
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
}, Te = /* @__PURE__ */ Ur(us);
function v(...t) {
  return Te(ne(t));
}
const Vt = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, Gt = ne, je = (t, r) => (s) => {
  var a;
  if ((r == null ? void 0 : r.variants) == null) return Gt(t, s == null ? void 0 : s.class, s == null ? void 0 : s.className);
  const { variants: n, defaultVariants: l } = r, c = Object.keys(n).map((m) => {
    const b = s == null ? void 0 : s[m], u = l == null ? void 0 : l[m];
    if (b === null) return null;
    const h = Vt(b) || Vt(u);
    return n[m][h];
  }), i = s && Object.entries(s).reduce((m, b) => {
    let [u, h] = b;
    return h === void 0 || (m[u] = h), m;
  }, {}), d = r == null || (a = r.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((m, b) => {
    let { class: u, className: h, ...f } = b;
    return Object.entries(f).every((j) => {
      let [k, p] = j;
      return Array.isArray(p) ? p.includes({
        ...l,
        ...i
      }[k]) : {
        ...l,
        ...i
      }[k] === p;
    }) ? [
      ...m,
      u,
      h
    ] : m;
  }, []);
  return Gt(t, c, d, s == null ? void 0 : s.class, s == null ? void 0 : s.className);
}, ee = ({
  icon: t,
  className: r,
  size: s,
  color: a,
  rotate: n,
  flip: l,
  spin: c,
  inline: i = !0,
  mode: d = "svg",
  ...m
}) => {
  const [b, u] = te(null), [h, f] = te(!0), [j, k] = te(null);
  return be(() => {
    let p = !0;
    return (async () => {
      try {
        const { Icon: w } = await import("./iconify-Dqt3MVen.mjs");
        p && (u(() => w), f(!1));
      } catch (w) {
        console.error("Failed to load icon:", w), p && (k(w), f(!1));
      }
    })(), () => {
      p = !1;
    };
  }, []), h ? /* @__PURE__ */ e.jsx("span", { style: { width: s, height: s } }) : j || !b ? null : /* @__PURE__ */ e.jsx(
    b,
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
      ...m
    }
  );
}, fs = je(
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
), ar = ke(
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
    labelPlacement: m = "top",
    fullWidth: b = !1,
    leftIcon: u,
    rightIcon: h,
    onRightIconClick: f,
    id: j,
    ...k
  }, p) => {
    const y = j || he.useId(), w = `${y}-helper`, D = `${y}-error`, L = /* @__PURE__ */ e.jsxs("div", { className: v("relative", !b && "inline-block"), children: [
      u && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ e.jsx(ee, { icon: u, className: "w-4 h-4" }) }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          id: y,
          type: "text",
          ref: p,
          className: v(
            fs({ variant: n ? "error" : r, size: s, rounded: a, fullWidth: b }),
            u && "pl-10",
            h && "pr-10",
            t
          ),
          "aria-describedby": n ? D : c ? w : void 0,
          "aria-invalid": n,
          "aria-required": d,
          ...k
        }
      ),
      h && /* @__PURE__ */ e.jsx(
        "div",
        {
          className: v(
            "absolute right-3 top-1/2 -translate-y-1/2 text-neutral",
            f && "cursor-pointer hover:text-primary-600"
          ),
          onClick: f,
          role: f ? "button" : void 0,
          tabIndex: f ? 0 : void 0,
          children: /* @__PURE__ */ e.jsx(ee, { icon: h, className: "w-4 h-4" })
        }
      )
    ] }), T = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      n && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: D, children: l }),
      !n && c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: w, children: c })
    ] });
    return m === "left" ? /* @__PURE__ */ e.jsx("div", { className: v(b ? "w-full" : "inline-block", t), children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
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
      /* @__PURE__ */ e.jsxs("div", { className: v("flex-1", !b && "inline-block"), children: [
        L,
        T
      ] })
    ] }) }) : /* @__PURE__ */ e.jsxs("div", { className: v(b ? "w-full" : "inline-block", t), children: [
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
      T
    ] });
  }
);
ar.displayName = "Input";
const ut = he.forwardRef(
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
ut.displayName = "SelectItem";
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
}, xt = "autocomplete-dropdown-opened", ms = ke(
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
    leftIcon: m,
    rightIcon: b,
    error: u = !1,
    errorText: h,
    helperText: f,
    label: j,
    required: k = !1,
    labelPlacement: p = "top",
    fullWidth: y = !1,
    value: w,
    onChange: D,
    onFocus: L,
    onBlur: T,
    showClear: W = !1,
    onClear: V,
    searchType: S = "include",
    initialItemsToShow: E,
    itemsToLoad: N = 10,
    maxDropdownHeight: G = 300,
    noOptionsMessage: R = "No options found",
    scrollMoreMessage: C = "",
    allOptionsShownMessage: $ = "",
    ...B
  }, A) => {
    const [x, _] = te(!1), [g, H] = te(w || ""), [P, U] = te(E || 0), re = pe(null), ce = pe(null), oe = pe(null), le = pe(null), z = a !== void 0, ve = `autocomplete-${he.useId().replace(/:/g, "")}`, Ne = () => {
      if (!x || !ce.current || !oe.current) return;
      const { bottom: I, top: K, left: O, width: Z } = ce.current.getBoundingClientRect(), Y = oe.current, de = Re(), J = de.innerHeight - I, me = K, Pe = Math.min(G, 300), Ze = J < Pe, Je = me > J, Le = Ze && Je;
      Object.assign(Y.style, {
        position: "fixed",
        left: `${O}px`,
        width: `${Z}px`
      }), Le ? Object.assign(Y.style, {
        bottom: `${de.innerHeight - K + 4}px`,
        top: "auto",
        maxHeight: `${me - 8}px`
      }) : Object.assign(Y.style, {
        top: `${I + 4}px`,
        bottom: "auto",
        maxHeight: `${J - 8}px`
      });
    };
    be(() => {
      const I = Re(), K = we(), O = () => {
        x && Ne();
      }, Z = () => {
        x && Ne();
      }, Y = (J) => {
        J.detail.id !== ve && _(!1);
      }, de = (J) => {
        const me = J.target;
        re.current && !re.current.contains(me) && oe.current && !oe.current.contains(me) && _(!1);
      };
      return x && (Ne(), I.addEventListener("scroll", O, !0), I.addEventListener("resize", Z)), K.addEventListener(xt, Y), K.addEventListener("click", de), () => {
        I.removeEventListener("scroll", O, !0), I.removeEventListener("resize", Z), K.removeEventListener(xt, Y), K.removeEventListener("click", de);
      };
    }, [x, ve]), be(() => {
      H(w || "");
    }, [w]);
    const Ve = (I) => {
      const { value: K } = I.target;
      if (H(K), !K.trim()) {
        _(!1);
        return;
      }
      _(!0), D == null || D(I);
    }, Ie = (I) => {
      I.stopPropagation(), H(""), V == null || V();
      const K = new Event("change");
      K.target = { value: "" }, D == null || D(K);
    }, _e = (I) => {
      var Y;
      if (!I) return;
      const { value: K, label: O } = I;
      H(O), _(!1), s == null || s(K);
      const Z = new CustomEvent("autocomplete-select", {
        detail: { selectedOption: I }
      });
      (Y = ce.current) == null || Y.dispatchEvent(Z);
    }, ze = (I) => {
      z || (we().dispatchEvent(
        new CustomEvent(xt, {
          detail: { id: ve }
        })
      ), _(!0)), L == null || L(I);
    }, Ge = (I) => {
      T == null || T(I);
    }, De = () => {
      if (!le.current || E === void 0 || E <= 0) return;
      const { scrollTop: I, scrollHeight: K, clientHeight: O } = le.current;
      I + O >= K - 10 && U((Y) => Math.min(Y + N, Ce.length));
    }, Ce = r.filter(({ label: I }) => {
      const K = g.toLowerCase().trim(), O = I.toLowerCase();
      return S === "startsWith" ? O.startsWith(K) : O.includes(K);
    });
    be(() => {
      E !== void 0 && E > 0 && U(E);
    }, [g, E]);
    const Ke = E !== void 0 && E > 0 ? Ce.slice(0, P) : Ce, Oe = (I, K) => I ? I.replace(/\{(\w+)\}/g, (O, Z) => {
      var Y;
      return ((Y = K[Z]) == null ? void 0 : Y.toString()) || O;
    }) : "", at = z ? a : x, qe = W && g && !B.disabled && !B.readOnly, He = qe ? "mdi:close" : b, Qe = () => {
      if (!at) return null;
      const I = we();
      if (!("body" in I)) return null;
      const K = /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: oe,
          className: "fixed z-[9999] min-w-[8rem] rounded-md border border-neutral-200 bg-white py-1 shadow-lg overflow-hidden",
          style: { maxHeight: `${G}px` },
          onClick: (O) => O.stopPropagation(),
          children: /* @__PURE__ */ e.jsx(
            "div",
            {
              ref: le,
              className: "overflow-auto",
              style: { maxHeight: `${G}px` },
              onScroll: De,
              children: n ? /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center py-2", children: /* @__PURE__ */ e.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" }) }) : Ke.length > 0 ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                Ke.map((O) => /* @__PURE__ */ e.jsx(
                  ut,
                  {
                    value: O.value,
                    selected: O.label === g,
                    onClick: () => _e(O),
                    children: l ? l(O) : O.label
                  },
                  O.value
                )),
                E !== void 0 && E > 0 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                  P < Ce.length && C && /* @__PURE__ */ e.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500 text-center", children: Oe(C, {
                    current: P,
                    total: Ce.length
                  }) }),
                  P >= Ce.length && Ce.length > 0 && $ && /* @__PURE__ */ e.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500 text-center", children: Oe($, {
                    total: Ce.length
                  }) })
                ] })
              ] }) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-2 text-sm text-neutral", children: R })
            }
          )
        }
      );
      return Ye(K, I.body);
    };
    return /* @__PURE__ */ e.jsxs("div", { ref: re, className: v("relative", y ? "w-full" : "inline-block"), children: [
      /* @__PURE__ */ e.jsx("div", { ref: ce, className: v(!y && "inline-block"), children: /* @__PURE__ */ e.jsx(
        ar,
        {
          ref: A,
          value: g,
          onChange: Ve,
          onFocus: ze,
          onBlur: Ge,
          variant: c,
          size: i,
          rounded: d,
          leftIcon: m,
          rightIcon: He,
          error: u,
          errorText: h,
          helperText: f,
          label: j,
          required: k,
          labelPlacement: p,
          fullWidth: y,
          className: t,
          ...B,
          onClick: qe ? Ie : B.onClick
        }
      ) }),
      Qe()
    ] });
  }
);
ms.displayName = "AutoComplete";
const gs = {
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
}, ps = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
}, bs = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
}, Aa = ({
  items: t,
  multiple: r = !1,
  defaultOpenIds: s = [],
  icon: a = "mdi:chevron-down",
  iconPosition: n = "right",
  className: l,
  contentClassName: c,
  variant: i = "primary",
  shadow: d = "none",
  rounded: m = "lg"
}) => {
  const [b, u] = te(s), h = (j) => {
    u(
      r ? (k) => k.includes(j) ? k.filter((p) => p !== j) : [...k, j] : (k) => k.includes(j) ? [] : [j]
    );
  }, f = gs[i];
  return /* @__PURE__ */ e.jsx("div", { className: ne("w-full space-y-2", l), children: t.map((j) => {
    const k = b.includes(j.id), p = !!j.disabled;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: ne(
          "border overflow-hidden",
          "bg-white",
          "border-gray-200",
          ps[d],
          bs[m],
          "transition-shadow duration-200"
        ),
        children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => !p && h(j.id),
              disabled: p,
              className: ne(
                "w-full flex items-center justify-between p-4",
                "text-left transition-colors",
                f.hover,
                k && f.active,
                f.text,
                p && "opacity-50 cursor-not-allowed"
              ),
              children: [
                n === "left" && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: ne(
                      "mr-3 transition-transform duration-200",
                      k && "rotate-180"
                    ),
                    children: /* @__PURE__ */ e.jsx(ee, { icon: a, className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ e.jsx("div", { className: "flex-1", children: j.title }),
                n === "right" && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: ne(
                      "ml-3 transition-transform duration-200",
                      k && "rotate-180"
                    ),
                    children: /* @__PURE__ */ e.jsx(ee, { icon: a, className: "w-5 h-5" })
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
                k ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              ),
              children: /* @__PURE__ */ e.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: ne(
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
}, Pa = ({
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
  }, d = Te(
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
      className: Te("w-full h-full", l === "cover" ? "object-cover" : "object-contain")
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
}, Da = ({
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
  }, d = Te(
    "inline-flex items-center font-medium",
    l[r],
    c[s],
    i[a],
    n
  );
  return /* @__PURE__ */ e.jsx("span", { className: d, children: t });
}, hs = je(
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
    size: s = "md",
    rounded: a = "md",
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
        className: v(
          hs({
            variant: r,
            size: s,
            rounded: f ? "full" : a,
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
          c && !l && /* @__PURE__ */ e.jsx(ee, { icon: c, className: "w-4 h-4", inline: !0 }),
          m && /* @__PURE__ */ e.jsx("span", { children: m }),
          i && !l && /* @__PURE__ */ e.jsx(ee, { icon: i, className: "w-4 h-4", inline: !0 })
        ]
      }
    );
  }
);
Ee.displayName = "Button";
const xs = je(
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
    padding: s = "md",
    shadow: a = "none",
    rounded: n = "md",
    asChild: l = !1,
    ...c
  }, i) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: v(xs({ variant: r, padding: s, shadow: a, rounded: n, className: t })),
      ref: i,
      ...c
    }
  )
);
Ct.displayName = "Card";
const vt = ({
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
  }, u = r ? "border-danger-600 hover:border-danger-700" : "", f = Te(
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
    s && "opacity-50 cursor-not-allowed",
    i
  ), j = Te(
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
          ref: (k) => {
            k && (k.indeterminate = a);
          },
          ...d
        }
      ),
      t && /* @__PURE__ */ e.jsx("label", { className: j, children: t })
    ] }),
    r && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-danger-600", children: r })
  ] });
}, yt = je(
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
), vs = ke(
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
    helperText: m,
    label: b,
    required: u = !1,
    labelPlacement: h = "top",
    fullWidth: f = !1,
    disabled: j = !1,
    variant: k = "square",
    color: p = "primary",
    checkboxSize: y = "sm",
    showSelectAll: w = !1,
    selectAllText: D = "Select All",
    indeterminateSelectAll: L = !0,
    gap: T,
    selectAllGap: W,
    id: V,
    ...S
  }, E) => {
    const N = V || he.useId(), G = `${N}-helper`, R = `${N}-error`, C = `${N}-group`, [$, B] = he.useState(a), A = s !== void 0 ? s : $, x = (z, X) => {
      const ve = X ? [...A, z] : A.filter((Ne) => Ne !== z);
      s === void 0 && B(ve), n == null || n(ve);
    }, _ = (z) => {
      const X = z ? r.map((ve) => ve.value) : [];
      s === void 0 && B(X), n == null || n(X);
    }, g = r.length > 0 && A.length === r.length, H = A.length > 0 && A.length < r.length, P = L && H, U = (z) => z === "none" ? "gap-0" : z === "xs" ? "gap-1" : z === "sm" ? "gap-2" : z === "md" ? "gap-3" : z === "lg" ? "gap-4" : z === "xl" ? "gap-6" : null, re = U(T), ce = U(W), oe = /* @__PURE__ */ e.jsx("div", { className: v("relative", !f && "inline-block"), children: /* @__PURE__ */ e.jsxs(
      "fieldset",
      {
        ref: E,
        id: C,
        className: v(
          yt({ layout: l, size: c }),
          re,
          t
        ),
        "aria-describedby": i ? R : m ? G : void 0,
        "aria-invalid": i,
        "aria-required": u,
        ...S,
        children: [
          w && r.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: v(
            "flex flex-col",
            ce || re || yt({ layout: "vertical", size: c })
          ), children: [
            /* @__PURE__ */ e.jsx(
              vt,
              {
                label: D,
                checked: g,
                indeterminate: P,
                onChange: (z) => _(z.target.checked),
                disabled: j,
                variant: k,
                color: i ? "error" : p,
                variantSize: y,
                error: i ? " " : void 0
              }
            ),
            /* @__PURE__ */ e.jsx("div", { className: v(
              "flex",
              l === "vertical" && "flex-col",
              l === "horizontal" && "flex-row flex-wrap",
              l === "grid" && "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
              re || yt({ layout: l, size: c })
            ), children: r.map((z) => /* @__PURE__ */ e.jsx(
              vt,
              {
                label: z.label,
                checked: A.includes(z.value),
                onChange: (X) => x(z.value, X.target.checked),
                disabled: j || z.disabled,
                indeterminate: z.indeterminate,
                variant: k,
                color: i ? "error" : p,
                variantSize: y,
                error: i ? " " : void 0
              },
              z.value
            )) })
          ] }),
          !w && /* @__PURE__ */ e.jsx(e.Fragment, { children: r.map((z) => /* @__PURE__ */ e.jsx(
            vt,
            {
              label: z.label,
              checked: A.includes(z.value),
              onChange: (X) => x(z.value, X.target.checked),
              disabled: j || z.disabled,
              indeterminate: z.indeterminate,
              variant: k,
              color: i ? "error" : p,
              variantSize: y,
              error: i ? " " : void 0
            },
            z.value
          )) })
        ]
      }
    ) }), le = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      i && d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: R, children: d }),
      !i && m && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: G, children: m })
    ] });
    return h === "left" ? /* @__PURE__ */ e.jsx("div", { className: v(f ? "w-full" : "inline-block", t), children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
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
      /* @__PURE__ */ e.jsxs("div", { className: v("flex-1", !f && "inline-block"), children: [
        oe,
        le
      ] })
    ] }) }) : /* @__PURE__ */ e.jsxs("div", { className: v(f ? "w-full" : "inline-block", t), children: [
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
      oe,
      le
    ] });
  }
);
vs.displayName = "CheckBoxGroup";
const ys = {
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
}, ws = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5"
}, ks = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}, Ta = ({
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
      ys[r][s],
      ws[a],
      ks[n],
      c
    ),
    children: [
      i && /* @__PURE__ */ e.jsx("span", { className: "inline-flex items-center", children: /* @__PURE__ */ e.jsx(ee, { icon: i, className: "w-4 h-4" }) }),
      t,
      l && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: l,
          className: "ml-1 rounded-full hover:bg-black/10 p-0.5",
          "aria-label": "Close",
          children: /* @__PURE__ */ e.jsx(ee, { icon: "mdi:close", className: "w-3 h-3" })
        }
      )
    ]
  }
);
var or = { exports: {} };
(function(t, r) {
  (function(s, a) {
    t.exports = a();
  })(Zt, function() {
    return function(s, a) {
      a.prototype.isSameOrAfter = function(n, l) {
        return this.isSame(n, l) || this.isAfter(n, l);
      };
    };
  });
})(or);
var js = or.exports;
const Ns = /* @__PURE__ */ Jt(js);
var lr = { exports: {} };
(function(t, r) {
  (function(s, a) {
    t.exports = a();
  })(Zt, function() {
    return function(s, a) {
      a.prototype.isSameOrBefore = function(n, l) {
        return this.isSame(n, l) || this.isBefore(n, l);
      };
    };
  });
})(lr);
var Es = lr.exports;
const Ss = /* @__PURE__ */ Jt(Es);
fe.extend(Ns);
fe.extend(Ss);
const Rs = je(
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
    minDate: s,
    maxDate: a,
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
    fullWidth: j = !1,
    className: k,
    placeholder: p = "Select date",
    leftIcon: y,
    rightIcon: w,
    monthsToShow: D = 1,
    valueFormatter: L,
    rangeStart: T,
    rangeEnd: W,
    closeOnSelect: V = !0,
    calendarFooter: S,
    format: E = "DD-MM-YYYY",
    allowInput: N = !1,
    ...G
  }) => {
    const [R, C] = te(!1), [$, B] = te(t), [A, x] = te(t || /* @__PURE__ */ new Date()), [_, g] = te(!1), [H, P] = te(""), U = pe(null), re = pe(null), ce = pe(null), oe = pe(null), le = pe(null);
    be(() => {
      B(t || void 0), P(t ? z(t, E) : "");
    }, [t, E]), be(() => {
      P($ ? z($, E) : "");
    }, [$, E]);
    const z = (I, K) => {
      const O = I.getDate().toString().padStart(2, "0"), Z = (I.getMonth() + 1).toString().padStart(2, "0"), Y = I.getFullYear().toString();
      switch (K) {
        case "DD-MM-YYYY":
          return `${O}-${Z}-${Y}`;
        case "YYYY-MM-DD":
          return `${Y}-${Z}-${O}`;
        case "MM-DD-YYYY":
          return `${Z}-${O}-${Y}`;
        default:
          return `${O}-${Z}-${Y}`;
      }
    }, X = (I, K) => {
      const Z = I.replace(/[^\d-]/g, "").split("-");
      if (Z.length !== 3) return null;
      let Y, de, J;
      switch (K) {
        case "DD-MM-YYYY":
          [Y, de, J] = Z.map(Number);
          break;
        case "YYYY-MM-DD":
          [J, de, Y] = Z.map(Number);
          break;
        case "MM-DD-YYYY":
          [de, Y, J] = Z.map(Number);
          break;
        default:
          [Y, de, J] = Z.map(Number);
      }
      if (isNaN(Y) || isNaN(de) || isNaN(J) || de < 1 || de > 12 || Y < 1 || Y > 31 || J < 1900 || J > 2099) return null;
      const me = new Date(J, de - 1, Y);
      return me.getDate() !== Y || me.getMonth() !== de - 1 || me.getFullYear() !== J ? null : me;
    };
    be(() => {
      if (_ && oe.current) {
        const I = fe(A).year(), K = oe.current.querySelectorAll("[data-year]"), O = Array.from(K).find(
          (Z) => parseInt(Z.getAttribute("data-year") || "0") === I
        );
        O && O.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center"
        });
      }
    }, [_, A]);
    const ve = () => {
      if (!R || !re.current || !ce.current) return;
      const { bottom: I, left: K, width: O, top: Z } = re.current.getBoundingClientRect(), Y = ce.current, de = Re(), J = de.innerHeight - I, me = Z, Ze = J < (D === 2 ? 400 : 350), Je = me > J, Le = Ze && Je;
      D === 2 ? (Object.assign(Y.style, {
        position: "fixed",
        left: `${K}px`,
        minWidth: "500px",
        width: "auto",
        transform: ""
      }), Le ? Object.assign(Y.style, {
        bottom: `${de.innerHeight - Z + 4}px`,
        top: "auto",
        maxHeight: `${me - 8}px`
      }) : Object.assign(Y.style, {
        top: `${I + 4}px`,
        bottom: "auto",
        maxHeight: `${J - 8}px`
      })) : (Object.assign(Y.style, {
        position: "fixed",
        left: `${K + O / 2}px`,
        width: "320px",
        maxWidth: "100vw",
        transform: "translateX(-50%)"
      }), Le ? Object.assign(Y.style, {
        bottom: `${de.innerHeight - Z + 4}px`,
        top: "auto",
        maxHeight: `${me - 8}px`
      }) : Object.assign(Y.style, {
        top: `${I + 4}px`,
        bottom: "auto",
        maxHeight: `${J - 8}px`
      }));
    };
    be(() => {
      const I = Re(), K = we(), O = () => {
        R && ve();
      }, Z = () => {
        R && ve();
      }, Y = (de) => {
        de.key === "Escape" && R && (C(!1), g(!1));
      };
      return R && (ve(), I.addEventListener("scroll", O, !0), I.addEventListener("resize", Z), K.addEventListener("keydown", Y)), () => {
        I.removeEventListener("scroll", O, !0), I.removeEventListener("resize", Z), K.removeEventListener("keydown", Y);
      };
    }, [R]);
    const Ne = (I) => {
      if (T !== void 0 && W !== void 0)
        if (T && W)
          B(I), P(z(I, E)), r == null || r(I);
        else if (T) {
          const O = I;
          fe(O).isBefore(T), B(O), P(z(O, E)), r == null || r(O), C(!1), g(!1);
        } else
          B(I), P(z(I, E)), r == null || r(I);
      else
        B(I), P(z(I, E)), r == null || r(I), C(!1), g(!1);
    }, Ve = () => {
      x(fe(A).subtract(1, "month").toDate());
    }, Ie = () => {
      x(fe(A).add(1, "month").toDate());
    }, _e = (I) => {
      const K = fe(I).startOf("month"), O = fe(I).endOf("month"), Z = [];
      let Y = K;
      for (; Y.isBefore(O) || Y.isSame(O, "day"); )
        Z.push(Y.toDate()), Y = Y.add(1, "day");
      return Z;
    }, ze = (I) => !!(s && fe(I).isBefore(s, "day") || a && fe(I).isAfter(a, "day")), Ge = (I) => {
      if (!N) return;
      const O = I.target.value.replace(/[^\d-]/g, "");
      if (O.length < H.length) {
        P(O);
        return;
      }
      if (O.replace(/-/g, "").length > 8)
        return;
      let Y = O;
      E === "DD-MM-YYYY" ? (O.length === 2 && !O.includes("-") || O.length === 5 && O.split("-").length === 2) && (Y = O + "-") : E === "YYYY-MM-DD" ? (O.length === 4 && !O.includes("-") || O.length === 7 && O.split("-").length === 2) && (Y = O + "-") : E === "MM-DD-YYYY" && (O.length === 2 && !O.includes("-") || O.length === 5 && O.split("-").length === 2) && (Y = O + "-"), P(Y);
    }, De = () => {
      if (!N) return;
      const I = X(H, E);
      if (I) {
        if (s && I < s) {
          P(z(s, E)), B(s), r == null || r(s);
          return;
        }
        if (a && I > a) {
          P(z(a, E)), B(a), r == null || r(a);
          return;
        }
        B(I), r == null || r(I), P(z(I, E));
      } else
        P($ ? z($, E) : "");
    }, Ce = () => {
      N && C(!1);
    }, Ke = (I) => {
      N && I.key === "Enter" && (I.preventDefault(), De());
    }, Oe = (I) => {
      const K = fe(A).year(I).toDate();
      x(K), g(!1);
    }, at = () => {
      if (!_) return null;
      const I = fe(A).year(), K = 1900, Z = Array.from(
        { length: 2099 - K + 1 },
        (Y, de) => K + de
      );
      return /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: oe,
          className: "grid grid-cols-5 gap-2 p-2 overflow-y-auto max-h-[300px]",
          children: Z.map((Y) => /* @__PURE__ */ e.jsx(
            "div",
            {
              "data-year": Y,
              onClick: () => Oe(Y),
              className: v(
                Y === I && "bg-primary-50 text-primary",
                "text-sm cursor-pointer p-2"
              ),
              children: Y
            },
            Y
          ))
        }
      );
    }, qe = () => {
      if (!R) return null;
      const I = we();
      if (!("body" in I)) return null;
      const K = Array.from({ length: D }).map(
        (O, Z) => fe(A).add(Z, "month").toDate()
      );
      return Ye(
        /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "fixed inset-0 z-[9998]",
              onClick: () => {
                _ || C(!1);
              }
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: ce,
              className: "fixed z-[9999] bg-white border border-gray-200 rounded-md shadow-lg",
              onClick: (O) => O.stopPropagation(),
              children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between p-2 border-b border-gray-200", children: [
                  /* @__PURE__ */ e.jsx(
                    Ee,
                    {
                      onClick: Ve,
                      variant: "ghost",
                      size: "sm",
                      leftIcon: "mdi:chevron-left"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx("span", { className: "font-medium text-gray-900", children: D === 1 ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e.jsx("span", { children: fe(A).format("MMMM") }),
                    /* @__PURE__ */ e.jsxs(
                      "div",
                      {
                        className: "cursor-pointer flex items-center gap-1",
                        onClick: () => g(!_),
                        children: [
                          /* @__PURE__ */ e.jsx("span", { children: fe(A).format("YYYY") }),
                          /* @__PURE__ */ e.jsx(Ee, { variant: "ghost", size: "sm", leftIcon: _ ? "mdi:chevron-up" : "mdi:chevron-down" })
                        ]
                      }
                    )
                  ] }) : `${fe(A).format("MMMM YYYY")} - ${fe(
                    A
                  ).add(D - 1, "month").format("MMMM YYYY")}` }) }),
                  /* @__PURE__ */ e.jsx(
                    Ee,
                    {
                      onClick: Ie,
                      variant: "ghost",
                      size: "sm",
                      rightIcon: "mdi:chevron-right"
                    }
                  )
                ] }),
                _ ? at() : /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: v(
                      D === 2 ? "flex gap-5 p-2 mx-auto w-fit" : "justify-between p-2 mx-auto w-fit"
                    ),
                    children: K.map((O, Z) => {
                      const Y = _e(O), de = fe(O).startOf("month").day();
                      return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col", children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-7 gap-y-1 my-1", children: [
                          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                            (J, me) => {
                              const Pe = me === 0 || me === 6;
                              return /* @__PURE__ */ e.jsx(
                                "div",
                                {
                                  className: v(
                                    "text-center text-xs font-medium text-neutral",
                                    Pe && "text-danger"
                                  ),
                                  children: J
                                },
                                J
                              );
                            }
                          ),
                          Array.from({ length: de }).map(
                            (J, me) => /* @__PURE__ */ e.jsx("div", {}, `empty-${me}`)
                          ),
                          Y.map((J) => {
                            const me = $ && fe(J).isSame($, "day"), Pe = ze(J), Ze = fe(J).isSame(
                              O,
                              "month"
                            ), Je = T && W && fe(J).isSameOrAfter(T, "day") && fe(J).isSameOrBefore(W, "day"), Le = T && fe(J).isSame(T, "day"), dt = W && fe(J).isSame(W, "day"), ft = fe(J).day() === 0 || fe(J).day() === 6, $e = T && W;
                            return /* @__PURE__ */ e.jsx("div", { className: "flex flex-col items-center justify-center", children: /* @__PURE__ */ e.jsx(
                              "div",
                              {
                                className: v(
                                  Je && "rounded-none bg-primary-50",
                                  $e && Le && "rounded-l-full",
                                  $e && dt && "rounded-r-full"
                                ),
                                children: /* @__PURE__ */ e.jsx(
                                  "button",
                                  {
                                    onClick: () => !Pe && Ne(J),
                                    disabled: Pe,
                                    className: v(
                                      "p-2 text-sm transition-colors duration-200 w-10 h-10 rounded-full",
                                      ft && "!text-danger",
                                      me && "bg-primary !text-white hover:bg-primary-600 active:bg-primary-700",
                                      me && !$e && "rounded-full",
                                      !me && !Pe && "hover:bg-primary-50 active:bg-primary-100",
                                      !Ze && "text-neutral-400",
                                      Pe && "opacity-50 cursor-not-allowed",
                                      // inRange && "bg-primary-50 text-primary-900 rounded-none",
                                      $e && Le && "!bg-primary !text-white !rounded-full",
                                      $e && dt && "!bg-primary !text-white !rounded-full"
                                    ),
                                    children: fe(J).format("D")
                                  },
                                  J.toString()
                                )
                              }
                            ) });
                          })
                        ] }),
                        S
                      ] }, Z);
                    })
                  }
                )
              ]
            }
          )
        ] }),
        I.body
      );
    }, He = /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: v("relative", !j && "inline-block"),
        ref: re,
        onClick: () => !i && !N && C(!R),
        children: [
          y && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: (I) => {
                I.stopPropagation(), i || C(!R);
              },
              children: /* @__PURE__ */ e.jsx(ee, { icon: y, className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: le,
              type: "text",
              value: N ? H : L ? L() : $ ? z($, E) : "",
              placeholder: N ? E : p,
              readOnly: !N,
              maxLength: N ? 10 : void 0,
              onChange: Ge,
              onBlur: De,
              onFocus: Ce,
              onKeyDown: Ke,
              className: v(
                Rs({ variant: d ? "error" : n, size: l, rounded: c, fullWidth: j }),
                y && "pl-10",
                w && "pr-10",
                k
              ),
              disabled: i,
              ...G
            }
          ),
          w && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: (I) => {
                I.stopPropagation(), i || C(!R);
              },
              children: /* @__PURE__ */ e.jsx(ee, { icon: w, className: "w-4 h-4" })
            }
          )
        ]
      }
    ), Qe = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      m && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", children: m }),
      !m && b && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", children: b })
    ] });
    return f === "left" ? /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: v(j ? "w-full" : "inline-block", k),
        ref: U,
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
            u && /* @__PURE__ */ e.jsxs("label", { className: "block text-sm text-neutral-900 pt-2", children: [
              u,
              h && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: v("flex-1", !j && "inline-block"), children: [
              He,
              Qe
            ] })
          ] }),
          qe()
        ]
      }
    ) : /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: v(j ? "w-full" : "inline-block", k),
        ref: U,
        children: [
          u && /* @__PURE__ */ e.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
            u,
            h && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          He,
          Qe,
          qe()
        ]
      }
    );
  }
);
St.displayName = "PrimitiveDatePicker";
const Ms = ({
  mode: t = "single",
  value: r,
  onChange: s,
  monthsToShow: a = 1,
  calendarFooter: n,
  error: l = !1,
  errorText: c,
  format: i = "DD-MM-YYYY",
  allowInput: d = !1,
  ...m
}) => {
  const [b, u] = te([
    void 0,
    void 0
  ]);
  if (t === "single") {
    const h = Array.isArray(r) ? r[0] : r;
    return /* @__PURE__ */ e.jsx(
      St,
      {
        value: h === null ? void 0 : h,
        onChange: (f) => s == null ? void 0 : s(f),
        monthsToShow: a,
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
    const j = (p) => {
      !h || h && f ? (u([p, void 0]), s == null || s([p, void 0])) : h && !f && (p < h ? (u([p, h]), s == null || s([p, h])) : (u([h, p]), s == null || s([h, p])));
    }, k = () => {
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
        onChange: j,
        monthsToShow: a,
        placeholder: m.placeholder || "Select date range",
        valueFormatter: k,
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
Ms.displayName = "DatePicker";
const ir = ke(
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
            children: /* @__PURE__ */ e.jsx(ee, { icon: "mdi:close", className: "h-5 w-5" })
          }
        )
      ]
    }
  )
), Cs = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-4xl",
  fullscreen: "w-full h-full max-w-none max-h-none rounded-none"
}, As = ke(
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
  }, m) => {
    const [b, u] = te(!1), [h, f] = te(!1);
    if (be(() => {
      if (t) {
        u(!0), f(!0);
        const y = we();
        "body" in y && (y.body.style.overflow = "hidden");
      } else {
        f(!1);
        const y = setTimeout(() => {
          u(!1);
          const w = we();
          "body" in w && (w.body.style.overflow = "");
        }, 300);
        return () => clearTimeout(y);
      }
    }, [t]), be(() => {
      const y = (w) => {
        w instanceof KeyboardEvent && w.key === "Escape" && r();
      };
      return t && we().addEventListener("keydown", y), () => {
        we().removeEventListener("keydown", y);
      };
    }, [t, r]), !b) return null;
    const j = {
      blur: "backdrop-blur-sm bg-black/30",
      dark: "bg-black/50",
      transparent: "bg-transparent"
    }, k = () => {
      c && r();
    }, p = we();
    return "body" in p ? Ye(
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: v(
            "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300",
            j[n],
            h ? "opacity-100" : "opacity-0",
            i === "fullscreen" && "items-start"
          ),
          onClick: k,
          children: /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: m,
              className: v(
                "relative transform rounded-lg bg-white p-6 shadow-xl transition-all duration-300",
                Cs[i],
                h ? "scale-100 opacity-100" : "scale-95 opacity-0",
                a
              ),
              onClick: (y) => y.stopPropagation(),
              ...d,
              children: [
                l && /* @__PURE__ */ e.jsx(ir, { onClose: r, children: l }),
                s
              ]
            }
          )
        }
      ),
      p.body
    ) : null;
  }
), Ps = ke(
  ({ children: t, className: r, ...s }, a) => /* @__PURE__ */ e.jsx(
    "h2",
    {
      ref: a,
      className: v("text-xl font-semibold text-gray-900", r),
      ...s,
      children: t
    }
  )
), Ds = ke(
  ({ children: t, className: r, ...s }, a) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: a,
      className: v("text-gray-600", r),
      ...s,
      children: t
    }
  )
), Ts = ke(
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
As.displayName = "Dialog";
Ps.displayName = "DialogTitle";
Ds.displayName = "DialogBody";
Ts.displayName = "DialogActions";
ir.displayName = "DialogHeader";
const Is = ({
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
  }, m = Te(
    "inline-block",
    l[t],
    c[r],
    i[s],
    d[a],
    n
  );
  return /* @__PURE__ */ e.jsx("div", { className: m });
}, _s = {
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
}, zs = {
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
}, Ia = ({
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
  shadow: m = "none",
  rounded: b = "lg",
  children: u,
  showFileList: h = !0,
  showPlaceholder: f = !0,
  showMaxSize: j = !0,
  icon: k = "mdi:upload"
}) => {
  const [p, y] = te(!1), [w, D] = te(null), L = pe(null), T = Be((C) => {
    C.preventDefault(), c || y(!0);
  }, [c]), W = Be((C) => {
    C.preventDefault(), y(!1);
  }, []), V = Be((C) => C.size > r ? `File size exceeds ${r / (1024 * 1024)}MB limit` : t[0] !== "*" && !t.some(($) => $.startsWith(".") ? C.name.toLowerCase().endsWith($.toLowerCase()) : C.type.startsWith($)) ? `File type not allowed. Allowed types: ${t.join(", ")}` : null, [t, r]), S = Be((C) => {
    if (C.preventDefault(), y(!1), D(null), c) return;
    const $ = Array.from(C.dataTransfer.files), B = [], A = [];
    if ($.forEach((x) => {
      const _ = V(x);
      _ ? A.push(`${x.name}: ${_}`) : B.push(x);
    }), A.length > 0 && D(A.join(`
`)), B.length > 0) {
      const x = s ? [...a, ...B] : B;
      n == null || n(x);
    }
  }, [c, s, n, V, a]), E = Be((C) => {
    if (D(null), c || !C.target.files) return;
    const $ = Array.from(C.target.files), B = [], A = [];
    if ($.forEach((x) => {
      const _ = V(x);
      _ ? A.push(`${x.name}: ${_}`) : B.push(x);
    }), A.length > 0 && D(A.join(`
`)), B.length > 0) {
      const x = s ? [...a, ...B] : B;
      n == null || n(x);
    }
    L.current && (L.current.value = "");
  }, [c, s, n, V, a]), N = Be((C) => {
    const $ = [...a];
    $.splice(C, 1), n == null || n($);
  }, [n, a]), G = (C) => C.type.startsWith("image/") ? /* @__PURE__ */ e.jsx(ee, { icon: "mdi:image", className: "w-5 h-5" }) : C.type.startsWith("text/") ? /* @__PURE__ */ e.jsx(ee, { icon: "mdi:file-document", className: "w-5 h-5" }) : /* @__PURE__ */ e.jsx(ee, { icon: "mdi:file", className: "w-5 h-5" }), R = _s[d];
  return /* @__PURE__ */ e.jsxs("div", { className: ne("w-full", l), children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: ne(
          "p-6 text-center transition-colors",
          !u && [
            "border-2 border-dashed",
            R.border,
            R.bg,
            p && R.active,
            !c && R.hover
          ],
          c && "opacity-50 cursor-not-allowed",
          zs[m],
          Ht[b],
          !u && "cursor-pointer"
        ),
        onDragOver: T,
        onDragLeave: W,
        onDrop: S,
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
              onChange: E,
              className: "hidden",
              disabled: c
            }
          ),
          u ? /* @__PURE__ */ e.jsx("div", { onClick: () => {
            var C;
            return !c && ((C = L.current) == null ? void 0 : C.click());
          }, children: u }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(ee, { icon: k, className: "w-12 h-12 mx-auto mb-4 text-neutral-400" }),
            f && /* @__PURE__ */ e.jsx("p", { className: ne("text-neutral-600", R.text), children: i }),
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
    h && a.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "mt-4 space-y-2", children: a.map((C, $) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: ne(
          "flex items-center justify-between p-2",
          Ht[b],
          R.bg
        ),
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
            G(C),
            /* @__PURE__ */ e.jsx("span", { className: ne("text-sm", R.text), children: C.name }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-neutral", children: [
              "(",
              (C.size / 1024).toFixed(1),
              " KB)"
            ] })
          ] }),
          !c && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => N($),
              className: "p-1 text-neutral hover:text-danger",
              children: /* @__PURE__ */ e.jsx(ee, { icon: "mdi:close", className: "w-4 h-4" })
            }
          )
        ]
      },
      `${C.name}-${$}`
    )) })
  ] });
}, Os = je(
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
), _a = ({
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
  }, m = () => {
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
  return /* @__PURE__ */ e.jsxs("div", { className: v(Os({ variant: a, rounded: n }), i), children: [
    s && /* @__PURE__ */ e.jsx(ee, { icon: m(), className: v("h-5 w-5 flex-shrink-0", d()) }),
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
        children: /* @__PURE__ */ e.jsx(ee, { icon: "mdi:close", className: "h-5 w-5" })
      }
    )
  ] });
}, wt = "select-dropdown-opened", Ls = je(
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
    size: s = "md",
    rounded: a = "md",
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
    position: j = "bottom",
    fullWidth: k = !1,
    children: p,
    leftIcon: y,
    rightIcon: w,
    ...D
  }, L) => {
    const [T, W] = te(!1), V = pe(null), S = pe(null), N = `select-${he.useId().replace(/:/g, "")}`, G = () => {
      if (T && V.current && S.current) {
        const x = V.current.getBoundingClientRect(), _ = S.current, g = Re(), H = g.innerHeight - x.bottom, P = x.top, re = x.bottom + _.offsetHeight + 4 >= g.innerHeight, ce = P > H, oe = re && ce;
        j === "bottom" || j === "top" ? (_.style.position = "fixed", _.style.left = `${x.left}px`, _.style.width = `${x.width}px`, j === "bottom" && oe ? (_.style.bottom = `${g.innerHeight - x.top + 4}px`, _.style.top = "auto", _.style.maxHeight = `${P - 8}px`) : j === "bottom" ? (_.style.top = `${x.bottom + 4}px`, _.style.bottom = "auto", _.style.maxHeight = `${H - 8}px`) : j === "top" && !oe ? (_.style.top = `${x.bottom + 4}px`, _.style.bottom = "auto", _.style.maxHeight = `${H - 8}px`) : (_.style.bottom = `${g.innerHeight - x.top + 4}px`, _.style.top = "auto", _.style.maxHeight = `${P - 8}px`)) : j === "left" ? (_.style.position = "fixed", _.style.right = `${g.innerWidth - x.left + 4}px`, _.style.top = `${x.top}px`, _.style.maxHeight = `${g.innerHeight - x.top - 8}px`) : j === "right" && (_.style.position = "fixed", _.style.left = `${x.right + 4}px`, _.style.top = `${x.top}px`, _.style.maxHeight = `${g.innerHeight - x.top - 8}px`);
      }
    };
    be(() => {
      const x = Re(), _ = () => {
        T && G();
      }, g = () => {
        T && G();
      };
      return T && (G(), x.addEventListener("scroll", _, !0), x.addEventListener("resize", g)), () => {
        x.removeEventListener("scroll", _, !0), x.removeEventListener("resize", g);
      };
    }, [T, j]), be(() => {
      const x = we(), _ = (H) => {
        H.detail.id !== N && W(!1);
      }, g = (H) => {
        const P = H.target, U = V.current, re = S.current;
        U && re && !U.contains(P) && !re.contains(P) && W(!1);
      };
      return x.addEventListener(wt, _), x.addEventListener("click", g), () => {
        x.removeEventListener(wt, _), x.removeEventListener("click", g);
      };
    }, [N]);
    const R = () => {
      if (f) return;
      if (T) {
        W(!1);
        return;
      }
      we().dispatchEvent(
        new CustomEvent(wt, {
          detail: { id: N }
        })
      ), W(!0);
    }, C = () => {
      if (n) {
        const x = n.find((_) => _.value === u);
        return x == null ? void 0 : x.label;
      }
      if (p) {
        const _ = Ot.toArray(p).find(
          (g) => bt(g) && "value" in g.props && g.props.value === u
        );
        return bt(_) ? _.props.children : null;
      }
      return null;
    }, $ = (x) => {
      f || (h == null || h(x), W(!1));
    }, B = () => n ? n.map((x) => /* @__PURE__ */ e.jsx(
      ut,
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
    )) : p ? Ot.map(p, (x) => bt(x) && "value" in x.props ? Sr(x, {
      selected: x.props.value === u,
      onClick: () => $(x.props.value)
    }) : null) : null, A = () => {
      if (!T || f) return null;
      const x = /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: S,
          className: v(
            "fixed z-[9999] min-w-[8rem] border border-neutral-200 bg-white py-1 shadow-lg rounded-lg",
            j === "left" || j === "right" ? "w-max" : "w-full"
          ),
          onClick: (g) => g.stopPropagation(),
          style: {
            overflowY: "auto"
          },
          children: B()
        }
      ), _ = we();
      return "body" in _ ? Ye(x, _.body) : null;
    };
    return /* @__PURE__ */ e.jsxs("div", { className: v(k ? "w-full" : "inline-block"), ref: L, ...D, children: [
      l && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: N,
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
          className: v("relative", !k && "inline-block"),
          onClick: R,
          children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                id: N,
                ref: V,
                type: "button",
                className: v(
                  Ls({ variant: c ? "error" : r, size: s, rounded: a, fullWidth: k }),
                  "flex items-center justify-between",
                  f && "cursor-not-allowed opacity-50",
                  y && "pl-10",
                  w && "pr-10",
                  t
                ),
                "aria-haspopup": "listbox",
                "aria-expanded": T,
                "aria-describedby": c ? `${N}-error` : d ? `${N}-helper` : void 0,
                disabled: f,
                children: [
                  y && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ e.jsx(ee, { icon: y, className: "w-4 h-4" }) }),
                  /* @__PURE__ */ e.jsx("span", { className: "flex items-center gap-2 min-w-0 flex-1", children: /* @__PURE__ */ e.jsx("span", { className: v(
                    "truncate text-left",
                    C() ? "text-neutral-900" : "text-neutral"
                  ), children: C() || b }) }),
                  w ? /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ e.jsx(ee, { icon: w, className: "w-4 h-4" }) }) : /* @__PURE__ */ e.jsx(
                    ee,
                    {
                      icon: "mdi:chevron-down",
                      className: v("transition-transform flex-shrink-0 ml-2 w-4 h-4", T && "rotate-180")
                    }
                  )
                ]
              }
            ),
            A()
          ]
        }
      ),
      c && i && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: `${N}-error`, children: i }),
      !c && d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: `${N}-helper`, children: d })
    ] });
  }
);
cr.displayName = "Select";
const $s = ({
  currentPage: t,
  totalPages: r,
  totalData: s,
  onPageChange: a,
  siblingCount: n = 1,
  className: l,
  perPageOptions: c,
  perPage: i = 10,
  label: d = "",
  onPerPageChange: m
}) => {
  const b = (f, j) => {
    const k = j - f + 1;
    return Array.from({ length: k }, (p, y) => y + f);
  }, h = (() => {
    const f = n * 2 + 3, j = f + 2;
    if (r > j) {
      const k = Math.max(2, t - n), p = Math.min(r - 1, t + n);
      let y = b(k, p);
      const w = k > 2, D = r - p > 1, L = f - (y.length + 1);
      if (w && !D)
        y = [...b(k - L, k - 1), ...y];
      else if (!w && D) {
        const T = b(p + 1, p + L);
        y = [...y, ...T];
      } else w && D && (y = [...y]);
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
          s,
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
                children: c.map((f) => /* @__PURE__ */ e.jsx(ut, { value: f.toString(), children: f }, f))
              }
            ),
            /* @__PURE__ */ e.jsx("span", { className: "text-neutral-700 text-sm", children: "data per halaman" })
          ] }),
          /* @__PURE__ */ e.jsx(
            Ee,
            {
              variant: "ghost",
              onClick: () => a(t - 1),
              disabled: t === 1,
              className: ne(
                "px-3 py-1 rounded-md text-sm",
                t === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
              ),
              children: /* @__PURE__ */ e.jsx(ee, { size: "18", icon: "mdi:chevron-left" })
            }
          ),
          h.map((f, j) => {
            const k = f === t, p = typeof f == "string" && f === "...";
            return /* @__PURE__ */ e.jsx(
              Ee,
              {
                variant: "ghost",
                onClick: () => !p && a(f),
                className: ne(
                  "px-3 py-1 rounded-md text-sm",
                  k ? "bg-primary text-white hover:bg-primary" : "text-gray-700",
                  p && "cursor-default"
                ),
                children: f
              },
              j
            );
          }),
          /* @__PURE__ */ e.jsx(
            Ee,
            {
              variant: "ghost",
              onClick: () => a(t + 1),
              disabled: t === r,
              className: ne(
                "px-3 py-1 rounded-md text-sm",
                t === r ? "text-gray-400 cursor-not-allowed" : "text-gray-700"
              ),
              children: /* @__PURE__ */ e.jsx(ee, { size: "18", icon: "mdi:chevron-right" })
            }
          )
        ] })
      ]
    }
  );
}, Fs = ({
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
  const m = (h) => {
    a && a(h.target.checked);
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
      className: Te(
        "inline-flex items-center cursor-pointer",
        s && "opacity-60 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "radio",
            className: Te(
              "border-2 rounded-full appearance-none",
              "focus:outline-none focus:ring-2 focus:ring-primary/25",
              "transition-colors duration-200",
              "checked:bg-no-repeat checked:bg-center",
              'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=")]',
              b[d],
              r ? u[i] : c ? "border-danger-600" : "border-gray-300",
              c && !r && "hover:border-danger-700",
              s && "cursor-not-allowed"
            ),
            checked: r,
            disabled: s,
            onChange: m,
            name: n,
            value: l
          }
        ),
        t && /* @__PURE__ */ e.jsx("label", { className: Te(
          "ml-2 text-sm font-medium",
          s && "opacity-50 cursor-not-allowed",
          c && "text-danger-600"
        ), children: t })
      ]
    }
  );
}, Bs = je(
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
), Ys = ke(
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
    helperText: m,
    label: b,
    required: u = !1,
    labelPlacement: h = "top",
    fullWidth: f = !1,
    disabled: j = !1,
    name: k,
    gap: p,
    color: y = "primary",
    radioSize: w = "sm",
    id: D,
    ...L
  }, T) => {
    const W = D || he.useId(), V = `${W}-helper`, S = `${W}-error`, E = `${W}-group`, N = k || `radio-group-${W}`, [G, R] = he.useState(a), C = s !== void 0 ? s : G, $ = (g) => {
      s === void 0 && R(g), n == null || n(g);
    }, A = ((g) => g === "none" ? "gap-0" : g === "xs" ? "gap-1" : g === "sm" ? "gap-2" : g === "md" ? "gap-3" : g === "lg" ? "gap-4" : g === "xl" ? "gap-6" : null)(p), x = /* @__PURE__ */ e.jsx("div", { className: v("relative", !f && "inline-block"), children: /* @__PURE__ */ e.jsx(
      "fieldset",
      {
        ref: T,
        id: E,
        className: v(
          Bs({ layout: l, size: c }),
          A,
          t
        ),
        "aria-describedby": i ? S : m ? V : void 0,
        "aria-invalid": i,
        "aria-required": u,
        ...L,
        children: r.map((g) => /* @__PURE__ */ e.jsx(
          Fs,
          {
            label: g.label,
            checked: C === g.value,
            onChange: () => $(g.value),
            disabled: j || g.disabled,
            name: N,
            value: g.value,
            color: i ? "error" : y,
            error: i ? " " : void 0,
            variantSize: w
          },
          g.value
        ))
      }
    ) }), _ = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      i && d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: S, children: d }),
      !i && m && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: V, children: m })
    ] });
    return h === "left" ? /* @__PURE__ */ e.jsx("div", { className: v(f ? "w-full" : "inline-block", t), children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
      b && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: E,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            b,
            u && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: v("flex-1", !f && "inline-block"), children: [
        x,
        _
      ] })
    ] }) }) : /* @__PURE__ */ e.jsxs("div", { className: v(f ? "w-full" : "inline-block", t), children: [
      b && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: E,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            b,
            u && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      x,
      _
    ] });
  }
);
Ys.displayName = "RadioGroup";
const Vs = je(
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
), Gs = ({
  width: t,
  height: r,
  variant: s = "default",
  rounded: a = "md",
  fullWidth: n = !1,
  className: l
}) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: v(Vs({ variant: s, rounded: a, fullWidth: n }), l),
    style: {
      width: !n && typeof t == "number" ? `${t}px` : t,
      height: typeof r == "number" ? `${r}px` : r
    }
  }
), za = ({
  min: t = 0,
  max: r = 100,
  step: s = 1,
  value: a,
  defaultValue: n = t,
  onChange: l,
  className: c,
  disabled: i = !1,
  showValue: d = !1,
  marks: m = [],
  range: b = !1
}) => {
  const u = b, [h, f] = te(
    a !== void 0 ? a : n !== void 0 ? n : u ? [t, r] : t
  ), [j, k] = te(null), p = pe(null), y = a !== void 0 ? a : h, [w, D] = u ? Array.isArray(y) ? y : [t, r] : [typeof y == "number" ? y : t, r], L = (A) => Math.min(Math.max(A, t), r), T = (A) => {
    if (i) return;
    let x;
    u && Array.isArray(A) ? x = [L(A[0]), L(A[1])] : !u && typeof A == "number" ? x = L(A) : x = u ? [t, r] : t, a === void 0 && f(x), l == null || l(x);
  }, W = (A) => {
    if (!p.current) return t;
    const x = p.current.getBoundingClientRect(), g = (A - x.left) / x.width, H = t + (r - t) * g, P = Math.round(H / s) * s;
    return L(P);
  }, V = (A) => (x) => {
    i || (k(A), x.stopPropagation());
  }, S = (A) => {
    if (!i)
      if (!u)
        k(0), E(A, 0);
      else {
        const x = W(A.clientX), _ = Math.abs(x - w), g = Math.abs(x - D), H = _ < g ? 0 : 1;
        k(H), E(A, H);
      }
  }, E = he.useCallback((A, x) => {
    const _ = W(A.clientX);
    if (!u)
      T(_);
    else {
      let g = [w, D];
      x === 0 ? g = [Math.min(_, D - s), D] : g = [w, Math.max(_, w + s)], g[0] > g[1] && (g = [g[1], g[0]]), T(g);
    }
  }, [u, w, D, s, T, W]), N = he.useRef(j);
  N.current = j;
  const G = he.useCallback(function(A) {
    N.current === null || i || E(A, N.current);
  }, [i, E]), R = he.useCallback(function() {
    k(null);
  }, []);
  be(() => {
    if (j !== null) {
      const A = Re();
      return A.addEventListener("mousemove", G), A.addEventListener("mouseup", R), () => {
        A.removeEventListener("mousemove", G), A.removeEventListener("mouseup", R);
      };
    }
  }, [j, G, R]);
  const C = (A) => (A - t) / (r - t) * 100, $ = C(w), B = C(D);
  return /* @__PURE__ */ e.jsxs("div", { className: ne("relative w-full", c), children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: p,
        className: ne(
          "relative h-2 bg-gray-200 rounded-full cursor-pointer",
          i && "opacity-50 cursor-not-allowed"
        ),
        onMouseDown: S,
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
              className: ne(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                i && "cursor-not-allowed"
              ),
              style: { left: `${$}%`, transform: "translate(-50%, -50%)" },
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
              style: { left: `${B}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: V(1)
            }
          )
        ]
      }
    ),
    m.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex justify-between mt-2", children: m.map((A) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "text-xs text-gray",
        style: { left: `${(A.value - t) / (r - t) * 100}%` },
        children: A.label
      },
      A.value
    )) }),
    d && /* @__PURE__ */ e.jsx("div", { className: "mt-2 text-sm text-gray-600", children: u ? `${w} - ${D}` : w })
  ] });
}, Hs = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8"
}, Ws = {
  primary: "text-primary",
  warning: "text-warning",
  default: "text-default-400"
}, Oa = ({
  rating: t,
  maxRating: r = 5,
  size: s = "md",
  color: a = "primary",
  readOnly: n = !1,
  onRatingChange: l,
  className: c
}) => {
  const [i, d] = te(null), m = (f) => {
    n || d(f);
  }, b = () => {
    n || d(null);
  }, u = (f) => {
    !n && l && l(f);
  }, h = i !== null ? i : t;
  return /* @__PURE__ */ e.jsx("div", { className: v("flex items-center gap-1", c), children: [...Array(r)].map((f, j) => {
    const k = j + 1, p = k <= h, y = i !== null && k <= i;
    return /* @__PURE__ */ e.jsx(
      "button",
      {
        className: v(
          "transition-colors duration-200",
          Hs[s],
          p || y ? Ws[a] : "text-default-200",
          !n && "cursor-pointer"
        ),
        onMouseEnter: () => m(k),
        onMouseLeave: b,
        onClick: () => u(k),
        disabled: n,
        "aria-label": `Rate ${k} out of ${r}`,
        children: /* @__PURE__ */ e.jsx(
          ee,
          {
            icon: p || y ? "mdi:star" : "mdi:star-outline",
            className: "w-full h-full"
          }
        )
      },
      j
    );
  }) });
}, Us = {
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
}, Ks = {
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4"
}, La = ({
  status: t,
  size: r = "md",
  withLabel: s = !1,
  className: a
}) => {
  const { bgColor: n, label: l } = Us[t], c = Ks[r];
  return /* @__PURE__ */ e.jsxs("div", { className: v("flex items-center gap-2", a), children: [
    /* @__PURE__ */ e.jsx("div", { className: v("rounded-full animate-pulse", n, c) }),
    s && /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: l })
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
}, qs = ({
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
                ur(c)
              ),
              children: /* @__PURE__ */ e.jsx(
                ee,
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
          Is,
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
}) }), Zs = ({
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
                ur(c)
              ),
              children: /* @__PURE__ */ e.jsx(
                ee,
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
}) }), $a = ({
  orientation: t = "horizontal",
  variant: r = "default",
  ...s
}) => t === "vertical" ? /* @__PURE__ */ e.jsx(Zs, { variant: r, ...s }) : /* @__PURE__ */ e.jsx(qs, { variant: r, ...s }), Fa = ({
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
      className: ne(
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
              className: ne(
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
}, Ba = ({
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
  var y, w;
  const [m, b] = te(r || ((y = t[0]) == null ? void 0 : y.id) || ""), u = he.useRef(null), [h, f] = te({ left: 0, width: 0 });
  he.useEffect(() => {
    var D;
    if (s === "active-underline" && u.current) {
      const L = u.current.getBoundingClientRect(), T = (D = u.current.parentElement) == null ? void 0 : D.getBoundingClientRect();
      T && f({
        left: L.left - T.left,
        width: L.width
      });
    }
  }, [s, t, m]), he.useEffect(() => {
    if (s === "active-underline") {
      const D = () => {
        var L;
        if (u.current) {
          const T = u.current.getBoundingClientRect(), W = (L = u.current.parentElement) == null ? void 0 : L.getBoundingClientRect();
          W && f({
            left: T.left - W.left,
            width: T.width
          });
        }
      };
      return window.addEventListener("resize", D), () => window.removeEventListener("resize", D);
    }
  }, [s, t, m]);
  const j = Be((D) => {
    b(D), d == null || d(D);
  }, [d]), k = () => {
    switch (a) {
      case "sm":
        return "text-sm px-3 py-1.5";
      case "lg":
        return "text-lg px-6 py-3";
      default:
        return "text-base px-4 py-2";
    }
  }, p = (D, L) => {
    const T = ne(
      "flex items-center space-x-2 transition-colors",
      "font-medium",
      k(),
      L && "opacity-50 cursor-not-allowed",
      !L && "cursor-pointer"
    );
    switch (s) {
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
      s === "active-underline" ? "relative" : "",
      "flex space-x-1",
      s === "pills" && "space-x-2 border-b-0",
      s !== "active-underline" && "border-b border-gray-200 dark:border-gray-700",
      l
    ), children: [
      t.map((D) => {
        const L = D.id === m, T = !!D.disabled;
        return /* @__PURE__ */ e.jsxs(
          "button",
          {
            ref: s === "active-underline" && L ? u : void 0,
            onClick: () => !T && j(D.id),
            disabled: T,
            className: ne(
              p(L, T),
              c
            ),
            children: [
              D.icon && /* @__PURE__ */ e.jsx(
                ee,
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
      s === "active-underline" && /* @__PURE__ */ e.jsx(
        "span",
        {
          className: "absolute bottom-0 h-0.5 bg-primary transition-all duration-300",
          style: { left: h.left, width: h.width }
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: ne("mt-4", i), children: (w = t.find((D) => D.id === m)) == null ? void 0 : w.content })
  ] });
}, ct = ({
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
}, kt = "timepicker-dropdown-opened", Js = je(
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
    use24Hour: s = !1,
    variant: a = "default",
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
    placeholder: j = "Select time",
    leftIcon: k,
    rightIcon: p,
    valueFormatter: y,
    closeOnSelect: w = !0,
    ...D
  }, L) => {
    const [T, W] = te(!1), [V, S] = te(t || ""), [E, N] = te(0), [G, R] = te(0), [C, $] = te(!0), B = pe(null), A = pe(null), x = pe(null), g = `timepicker-${he.useId().replace(/:/g, "")}`, H = () => {
      if (!T || !A.current || !x.current) return;
      const z = A.current.getBoundingClientRect(), X = x.current, Ne = Re().innerHeight - z.bottom;
      X.style.top = `${z.bottom + 4}px`, X.style.bottom = "auto", X.style.left = `${z.left}px`, X.style.maxHeight = `${Ne - 8}px`, X.style.width = `${z.width}px`;
    };
    be(() => {
      const z = Re(), X = we(), ve = () => {
        T && H();
      }, Ne = () => {
        T && H();
      }, Ve = (_e) => {
        _e.detail.id !== g && W(!1);
      }, Ie = (_e) => {
        const ze = _e.target;
        B.current && x.current && !B.current.contains(ze) && !x.current.contains(ze) && W(!1);
      };
      return T && (H(), z.addEventListener("scroll", ve, !0), z.addEventListener("resize", Ne)), X.addEventListener(kt, Ve), X.addEventListener("mousedown", Ie), () => {
        z.removeEventListener("scroll", ve, !0), z.removeEventListener("resize", Ne), X.removeEventListener(kt, Ve), X.removeEventListener("mousedown", Ie);
      };
    }, [T, g]);
    const P = () => {
      c || (T || we().dispatchEvent(
        new CustomEvent(kt, {
          detail: { id: g }
        })
      ), W(!T));
    };
    be(() => {
      if (t) {
        S(t);
        const [z, X] = t.split(":").map(Number);
        s ? N(z) : (N(z % 12 || 12), $(z < 12)), R(X);
      }
    }, [t, s]);
    const U = () => {
      const X = `${(s || C ? E : E + 12).toString().padStart(2, "0")}:${G.toString().padStart(2, "0")}`;
      S(X), r == null || r(X), w && W(!1);
    }, re = () => s ? Array.from({ length: 24 }, (z, X) => X) : Array.from({ length: 12 }, (z, X) => X + 1), ce = () => Array.from({ length: 60 }, (z, X) => X), oe = y ? y(V) : V, le = we();
    return "body" in le ? /* @__PURE__ */ e.jsxs("div", { ref: B, className: v("relative", h && "w-full", f), children: [
      m && /* @__PURE__ */ e.jsxs(
        "label",
        {
          className: v(
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
          ref: A,
          className: "relative",
          onClick: P,
          children: [
            k && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ e.jsx(ee, { icon: k, size: 20 }) }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                ref: L,
                type: "text",
                value: oe,
                placeholder: j,
                readOnly: !0,
                className: v(
                  Js({ variant: a, size: n, rounded: l, fullWidth: h }),
                  k && "pl-10",
                  p && "pr-10",
                  "text-left"
                ),
                disabled: c,
                ...D
              }
            ),
            p && /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ e.jsx(ee, { icon: p, size: 20 }) })
          ]
        }
      ),
      T && Ye(
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: x,
            className: "fixed z-[9999] w-fit rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            onClick: (z) => z.stopPropagation(),
            children: /* @__PURE__ */ e.jsxs("div", { className: "p-0", children: [
              /* @__PURE__ */ e.jsxs(Ct, { variant: "ghost", className: v(
                "flex mx-2 my-1 p-0",
                s ? "justify-start gap-8" : "justify-start gap-4"
              ), children: [
                /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2", children: re().map((z) => /* @__PURE__ */ e.jsx(
                  Ee,
                  {
                    variant: "ghost",
                    onClick: () => N(z),
                    className: v(E === z && "bg-primary text-white"),
                    children: z.toString().padStart(2, "0")
                  },
                  z
                )) }) }) }),
                /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2", children: ce().map((z) => /* @__PURE__ */ e.jsx(
                  Ee,
                  {
                    variant: "ghost",
                    onClick: () => R(z),
                    className: v(G === z && "bg-primary text-white"),
                    children: z.toString().padStart(2, "0")
                  },
                  z
                )) }) }) }),
                !s && /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ e.jsx(
                    Ee,
                    {
                      variant: "ghost",
                      onClick: () => $(!0),
                      className: v(C && "bg-primary text-white"),
                      children: "AM"
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    Ee,
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
                Ee,
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
fr.displayName = "PrimitiveTimePicker";
const Xs = ({
  value: t,
  onChange: r,
  valueFormatter: s,
  closeOnSelect: a,
  ...n
}) => /* @__PURE__ */ e.jsx(
  fr,
  {
    value: t,
    onChange: r,
    valueFormatter: s,
    closeOnSelect: a,
    ...n
  }
);
Xs.displayName = "TimePicker";
const Qs = je(
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
), ea = je(
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
), ta = ke(
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
    className: m,
    ...b
  }, u) => {
    const h = he.useId(), f = `${h}-helper`, j = `${h}-error`;
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
            className: v(Qs({ variant: d ? "danger" : s, size: a }), m),
            "aria-describedby": d ? j : c ? f : void 0,
            "aria-invalid": d,
            "aria-required": l,
            ...b,
            children: /* @__PURE__ */ e.jsx(
              "span",
              {
                "data-state": t ? "checked" : "unchecked",
                className: v(
                  ea({ size: a }),
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
      !d && c && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-neutral", id: f, children: c })
    ] });
  }
);
ta.displayName = "Toggle";
const ra = je(
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
), sa = je("absolute w-2 h-2 transform rotate-45", {
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
}), Ya = ({
  content: t,
  children: r,
  position: s = "top",
  delay: a = 0,
  className: n,
  color: l = "light",
  size: c = "md",
  isOpen: i,
  onOpenChange: d,
  trigger: m = "hover"
}) => {
  const [b, u] = te(!1), [h, f] = te({ top: 0, left: 0 }), j = pe(null), k = pe(null), p = pe(), y = i !== void 0, w = y ? i : b, D = () => {
    if (!j.current || !k.current) return;
    const S = k.current.getBoundingClientRect(), E = j.current.getBoundingClientRect(), N = Re(), G = N.scrollX || N.pageXOffset, R = N.scrollY || N.pageYOffset;
    let C = 0, $ = 0;
    const B = 8;
    switch (s) {
      case "top":
        C = S.top + R - E.height - B, $ = S.left + G + (S.width - E.width) / 2;
        break;
      case "bottom":
        C = S.bottom + R + B, $ = S.left + G + (S.width - E.width) / 2;
        break;
      case "left":
        C = S.top + R + (S.height - E.height) / 2, $ = S.left + G - E.width - B;
        break;
      case "right":
        C = S.top + R + (S.height - E.height) / 2, $ = S.right + G + B;
        break;
    }
    const A = N.innerWidth, x = N.innerHeight;
    $ < 0 && ($ = 0), $ + E.width > A && ($ = A - E.width), C < 0 && (C = 0), C + E.height > x && (C = x - E.height), f({ top: C, left: $ });
  };
  be(() => {
    if (w) {
      D();
      const S = Re();
      S.addEventListener("scroll", D, !0), S.addEventListener("resize", D);
    }
    return () => {
      const S = Re();
      S.removeEventListener("scroll", D, !0), S.removeEventListener("resize", D);
    };
  }, [w, s]);
  const L = () => {
    y ? d == null || d(!0) : p.current = setTimeout(() => {
      u(!0);
    }, a);
  }, T = () => {
    p.current && clearTimeout(p.current), y ? d == null || d(!1) : u(!1);
  }, W = (S) => {
    S.stopPropagation(), m === "click" && (y ? d == null || d(!i) : u(!b));
  };
  be(() => {
    const S = (E) => {
      m === "click" && j.current && !j.current.contains(E.target) && k.current && !k.current.contains(E.target) && T();
    };
    return w && document.addEventListener("click", S), () => {
      document.removeEventListener("click", S);
    };
  }, [w, m]);
  const V = () => {
    if (!w) return null;
    const S = we();
    return "body" in S ? Ye(
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: j,
          className: v(ra({ color: l, size: c }), n),
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
                  sa({ color: l }),
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
      S.body
    ) : null;
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: k,
      className: "relative inline-block",
      onMouseEnter: m === "hover" ? L : void 0,
      onMouseLeave: m === "hover" ? T : void 0,
      onClick: W,
      children: [
        r,
        V()
      ]
    }
  ) });
}, aa = je(
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
), na = {
  sm: 24,
  md: 36,
  lg: 48
}, oa = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
  info: "bg-info"
}, la = {
  primary: "#007C99",
  // Tailwind primary
  secondary: "#CEEAE7",
  success: "#00B37D",
  warning: "#F59E0B",
  danger: "#EF4444",
  info: "#0EA5E9"
}, ia = he.forwardRef(
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
    icon: m,
    ...b
  }, u) => {
    const h = Math.min(Math.max(n, 0), 100), f = na[a], j = a === "sm" ? 2 : a === "md" ? 3 : 4, k = (f - j) / 2, p = 2 * Math.PI * k, y = p - h / 100 * p;
    let w = "";
    return r === "loading" ? w = "rounded-full" : d ? w = d === "none" ? "" : `rounded-${d}` : w = "rounded-md", r === "circular" ? /* @__PURE__ */ e.jsxs("div", { className: "inline-flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "relative", style: { width: f, height: f }, children: [
        /* @__PURE__ */ e.jsxs(
          "svg",
          {
            className: v(
              "transform -rotate-90",
              l ? "animate-spin" : ""
            ),
            width: f,
            height: f,
            children: [
              /* @__PURE__ */ e.jsx(
                "circle",
                {
                  strokeWidth: j,
                  stroke: "#e5e7eb",
                  fill: "transparent",
                  r: k,
                  cx: f / 2,
                  cy: f / 2
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
                  strokeDasharray: p,
                  strokeDashoffset: l ? 0 : y,
                  strokeLinecap: "round",
                  stroke: la[s],
                  fill: "transparent",
                  r: k,
                  cx: f / 2,
                  cy: f / 2
                }
              )
            ]
          }
        ),
        m && /* @__PURE__ */ e.jsx("span", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ e.jsx(ee, { icon: m, size: f * 0.5 }) }),
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
          className: v(aa({ variant: r === "loading" ? "bar" : r, size: a }), w, t),
          role: "progressbar",
          "aria-valuenow": l ? void 0 : h,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          ...b,
          children: /* @__PURE__ */ e.jsx(
            "div",
            {
              className: v(
                "h-full transition-all duration-300 ease-in-out",
                l ? "animate-progress-indeterminate" : "",
                oa[s],
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
ia.displayName = "Progress";
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
], ca = je(
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
), da = ke(
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
    fullWidth: m = !1,
    value: b = "",
    onChange: u,
    disabled: h = !1,
    defaultCountry: f = "id",
    placeholder: j = "Enter phone number",
    ...k
  }) => {
    const [p, y] = te(!1), [w, D] = te(
      () => jt.find((g) => g.iso === f) || jt[0]
    ), [L, T] = te(""), [W, V] = te(() => {
      const g = w.code;
      return b.startsWith(g) ? b.slice(g.length) : b;
    }), S = pe(null), E = pe(null), N = he.useId(), G = `${N}-helper`, R = `${N}-error`, C = jt.filter(
      (g) => g.name.toLowerCase().includes(L.toLowerCase()) || g.code.includes(L)
    ), $ = pe(null), B = () => {
      if (p && S.current && E.current) {
        const g = S.current.getBoundingClientRect(), H = E.current, P = typeof window < "u" ? window : { innerHeight: 0 }, U = P.innerHeight - g.bottom, re = g.top, oe = g.bottom + (H.offsetHeight || 0) + 4 >= P.innerHeight, le = re > U, z = oe && le;
        H.style.position = "fixed", H.style.left = `${g.left}px`, H.style.minWidth = `${g.width}px`, H.style.maxWidth = "340px", H.style.width = "auto", z ? (H.style.bottom = `${P.innerHeight - g.top + 4}px`, H.style.top = "auto", H.style.maxHeight = `${re - 8}px`) : (H.style.top = `${g.bottom + 4}px`, H.style.bottom = "auto", H.style.maxHeight = `${U - 8}px`);
      }
    };
    be(() => {
      const g = typeof window < "u" ? window : void 0, H = () => {
        p && B();
      }, P = () => {
        p && B();
      };
      return p && (B(), g == null || g.addEventListener("scroll", H, !0), g == null || g.addEventListener("resize", P)), () => {
        g == null || g.removeEventListener("scroll", H, !0), g == null || g.removeEventListener("resize", P);
      };
    }, [p]), be(() => {
      if (!p) return;
      const g = (H) => {
        const P = H.target;
        S.current && E.current && !S.current.contains(P) && !E.current.contains(P) && y(!1);
      };
      return document.addEventListener("click", g), () => document.removeEventListener("click", g);
    }, [p]);
    const A = (g) => {
      D(g), y(!1), T("");
      const H = g.code + W;
      u == null || u(H);
    }, x = (g) => {
      const H = g.target.value.replace(/[^\d]/g, "");
      V(H);
      const P = w.code + H;
      u == null || u(P);
    }, _ = v(
      ca({
        variant: n ? "error" : r,
        size: s,
        rounded: a,
        fullWidth: m
      }),
      "!w-full"
    );
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: $,
        className: v(m ? "w-full" : "inline-block", t),
        ...k,
        children: [
          i && /* @__PURE__ */ e.jsxs("label", { htmlFor: N, className: "mb-1.5 block text-sm text-neutral-900", children: [
            i,
            d && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: v("relative", !m && "inline-block"), children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex", children: [
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  ref: S,
                  onClick: () => !h && y(!p),
                  className: v(
                    _,
                    "flex items-center gap-2 rounded-r-none justify-between max-w-[100px]",
                    h && "cursor-not-allowed opacity-50"
                  ),
                  children: [
                    /* @__PURE__ */ e.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ e.jsx(ee, { icon: w.flag, className: "w-5 h-5" }),
                      /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: w.code })
                    ] }),
                    /* @__PURE__ */ e.jsx(
                      ee,
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
                  id: N,
                  value: W,
                  onChange: x,
                  disabled: h,
                  className: v(
                    _,
                    "rounded-l-none flex-1 min-w-0 w-full"
                  ),
                  placeholder: j
                }
              )
            ] }),
            p && Ye(
              /* @__PURE__ */ e.jsxs(
                "div",
                {
                  ref: E,
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
                        value: L,
                        onChange: (g) => T(g.target.value),
                        placeholder: "Search countries...",
                        className: "w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:border-primary-300"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "max-h-[300px] overflow-y-auto", children: C.map((g) => /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => A(g),
                        className: v(
                          "w-full px-3 py-2 text-sm text-left hover:bg-primary-50 cursor-pointer",
                          w.iso === g.iso && "bg-primary-50"
                        ),
                        children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ e.jsx(ee, { icon: g.flag, className: "w-5 h-5" }),
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
          n && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: R, children: l }),
          !n && c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: G, children: c })
        ]
      }
    );
  }
);
da.displayName = "PhoneInput";
const ua = je(
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
), Va = ({
  content: t,
  children: r,
  position: s = "bottom",
  color: a = "light",
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
  const [f, j] = te(!1), [k, p] = te({ top: 0, left: 0 }), y = pe(null), w = pe(null), D = b !== void 0, L = D ? b : f, T = () => {
    if (!y.current || !w.current) return;
    const N = w.current.getBoundingClientRect(), G = y.current.getBoundingClientRect(), R = Re(), C = R.scrollX || R.pageXOffset, $ = R.scrollY || R.pageYOffset;
    let B = 0, A = 0;
    const x = 8;
    switch (s) {
      case "top":
        B = N.top + $ - G.height - x, A = N.left + C + (N.width - G.width) / 2;
        break;
      case "bottom":
        B = N.bottom + $ + x, A = N.left + C + (N.width - G.width) / 2;
        break;
      case "left":
        B = N.top + $ + (N.height - G.height) / 2, A = N.left + C - G.width - x;
        break;
      case "right":
        B = N.top + $ + (N.height - G.height) / 2, A = N.right + C + x;
        break;
    }
    const _ = R.innerWidth, g = R.innerHeight;
    A < 0 && (A = 0), A + G.width > _ && (A = _ - G.width), B < 0 && (B = 0), B + G.height > g && (B = g - G.height), p({ top: B, left: A });
  };
  be(() => {
    if (L) {
      T();
      const N = Re();
      N.addEventListener("scroll", T, !0), N.addEventListener("resize", T);
    }
    return () => {
      const N = Re();
      N.removeEventListener("scroll", T, !0), N.removeEventListener("resize", T);
    };
  }, [L, s]), be(() => {
    if (L && m && y.current) {
      const N = y.current.querySelector(
        "input, select, textarea, button, [tabindex]:not([tabindex='-1'])"
      );
      N && N.focus();
    }
  }, [L, m]);
  const W = () => {
    D ? u == null || u(!0) : j(!0);
  }, V = () => {
    D ? u == null || u(!1) : j(!1);
  }, S = (N) => {
    N.stopPropagation(), d === "click" && (D ? u == null || u(!b) : j(!f));
  };
  be(() => {
    if (!h) return;
    const N = (G) => {
      d === "click" && y.current && !y.current.contains(G.target) && w.current && !w.current.contains(G.target) && V();
    };
    return L && document.addEventListener("pointerdown", N, !0), () => {
      document.removeEventListener("pointerdown", N, !0);
    };
  }, [L, d, h]);
  const E = () => {
    if (!L) return null;
    const N = we();
    return "body" in N ? Ye(
      /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: y,
          className: v(
            ua({ color: a, rounded: l, shadow: c }),
            a === "custom" && n ? n : "",
            i
          ),
          style: {
            top: `${k.top}px`,
            left: `${k.left}px`,
            background: a === "custom" && n ? n : void 0
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
      onMouseEnter: d === "hover" ? W : void 0,
      onMouseLeave: d === "hover" ? V : void 0,
      onClick: S,
      tabIndex: 0,
      children: [
        r,
        E()
      ]
    }
  ) });
}, fa = je("flex items-center text-sm", {
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
}), ma = ke(
  ({
    className: t,
    variant: r = "default",
    size: s = "md",
    items: a,
    separator: n = /* @__PURE__ */ e.jsx(ee, { icon: "mdi:slash-forward", className: "h-4 w-4 flex-shrink-0" }),
    activeLastItem: l = !0,
    ...c
  }, i) => /* @__PURE__ */ e.jsx(
    "nav",
    {
      ref: i,
      className: v(fa({ variant: r, size: s }), t),
      "aria-label": "Breadcrumb",
      ...c,
      children: /* @__PURE__ */ e.jsx("ol", { className: "flex flex-wrap items-center gap-1.5", children: a.map((d, m) => {
        const b = m === a.length - 1, u = b && l;
        return /* @__PURE__ */ e.jsxs(
          "li",
          {
            className: v(
              "flex items-center gap-1.5",
              u && "text-primary font-medium"
            ),
            children: [
              d.icon && /* @__PURE__ */ e.jsx(
                ee,
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
              !b && /* @__PURE__ */ e.jsx("span", { className: v(
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
ma.displayName = "Breadcrumbs";
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
}, ga = ({ schema: t, variant: r = "primary" }) => {
  const s = [{ name: "no", label: "No.", accessorKey: "no", type: "number" }, ...t], a = mr(r);
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
            children: /* @__PURE__ */ e.jsx(Gs, { className: "h-10 w-full rounded-md" })
          },
          `${l}-${i}`
        ))
      },
      l
    )) })
  ] }) }) });
}, Ga = ({
  schema: t,
  data: r,
  className: s,
  headerClassName: a,
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
  showPagination: j = !1,
  variant: k = "primary",
  meta: p = {
    current_page: 1,
    total_page: 1,
    total_data: 0,
    limit_number: 10
  }
}) => {
  const [y, w] = te(() => {
    const V = t.find((S) => S.sortable && S.sort);
    return V ? [{
      id: V.accessorKey.toString(),
      desc: V.sort === "desc"
    }] : [];
  }), D = he.useMemo(() => {
    const V = t.map((S) => ({
      accessorKey: S.accessorKey,
      header: S.label,
      enableSorting: !!S.sortable,
      cell: S.render ? ({ row: E }) => {
        var N;
        return (N = S.render) == null ? void 0 : N.call(S, E.original[S.accessorKey], E.original, E.index);
      } : ({ row: E }) => E.original[S.accessorKey] || "-",
      meta: {
        align: S.align || "left"
      }
    }));
    return m ? [{
      accessorKey: "no",
      header: "No.",
      enableSorting: !1,
      cell: ({ row: S }) => (p.current_page - 1) * p.limit_number + S.index + 1,
      meta: {
        align: "left"
      }
    }, ...V] : V;
  }, [t, m, p]), L = Cr({
    data: r,
    columns: D,
    state: {
      sorting: y
    },
    onSortingChange: (V) => {
      const S = typeof V == "function" ? V(y) : V;
      w(S), S.length > 0 ? h == null || h(S[0].desc ? "desc" : "asc", S[0].id) : h == null || h("", "");
    },
    getCoreRowModel: Dr(),
    getSortedRowModel: Pr(),
    getPaginationRowModel: Ar(),
    manualPagination: !0,
    pageCount: p.total_page
  }), T = mr(k);
  if (i)
    return d || /* @__PURE__ */ e.jsx(ga, { schema: t, variant: k });
  const W = (V, S, E) => {
    const N = V.target;
    N.tagName === "BUTTON" || N.tagName === "A" || N.tagName === "INPUT" || N.tagName === "SELECT" || N.closest("button") !== null || N.closest("a") !== null || N.closest("input") !== null || N.closest("select") !== null || f == null || f(S, E);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "bg-white rounded-md", children: [
    /* @__PURE__ */ e.jsx("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ e.jsxs("table", { className: v("w-full border-spacing-0 border-separate", s), children: [
      /* @__PURE__ */ e.jsx("thead", { className: v("border-2 sticky top-0 z-10 rounded-t-md", T.border), children: L.getHeaderGroups().map((V) => /* @__PURE__ */ e.jsx("tr", { children: V.headers.map((S, E) => {
        var N, G, R;
        return /* @__PURE__ */ e.jsx(
          "th",
          {
            className: v(
              "text-sm text-wrap border-y p-4",
              T.header,
              {
                "cursor-pointer": S.column.getCanSort(),
                "rounded-tl-md": E === 0,
                "rounded-tr-md": E === V.headers.length - 1,
                "text-left": ((N = S.column.columnDef.meta) == null ? void 0 : N.align) === "left",
                "text-center": ((G = S.column.columnDef.meta) == null ? void 0 : G.align) === "center",
                "text-right": ((R = S.column.columnDef.meta) == null ? void 0 : R.align) === "right"
              },
              a
            ),
            onClick: S.column.getCanSort() ? S.column.getToggleSortingHandler() : void 0,
            children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e.jsx("span", { className: v({
                "font-semibold": E === 0
              }), children: Lt(S.column.columnDef.header, S.getContext()) }),
              S.column.getCanSort() && /* @__PURE__ */ e.jsx(
                ee,
                {
                  icon: S.column.getIsSorted() ? S.column.getIsSorted() === "desc" ? "mdi:keyboard-arrow-up" : "mdi:keyboard-arrow-down" : "mdi:unfold-more-horizontal",
                  className: v("h-4 w-4", {
                    "text-white": k !== "ghost",
                    "text-gray-700": k === "ghost"
                  })
                }
              )
            ] })
          },
          S.id
        );
      }) }, V.id)) }),
      /* @__PURE__ */ e.jsx("tbody", { className: "max-h-[50vh]", children: L.getRowModel().rows.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx(
        "td",
        {
          colSpan: L.getAllColumns().length,
          className: v(
            "text-center border h-full w-full rounded-b-md"
          ),
          children: c || /* @__PURE__ */ e.jsxs("div", { className: "flex mx-auto w-full text-center justify-center gap-3 items-center", children: [
            /* @__PURE__ */ e.jsx("p", { children: "Data Not Found" }),
            /* @__PURE__ */ e.jsx(ee, { icon: "mdi:face-frown-open", size: 34 })
          ] })
        }
      ) }) : L.getRowModel().rows.map((V, S) => /* @__PURE__ */ e.jsx(
        "tr",
        {
          className: v(
            "p-3",
            T.row,
            {
              [T.stripe]: S % 2 !== 0,
              "bg-white": S % 2 === 0,
              "cursor-pointer": f
            },
            n
          ),
          onClick: (E) => W(E, V.original, S),
          children: V.getVisibleCells().map((E) => {
            var N, G, R;
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: v(
                  "px-4 py-3 text-sm text-gray-900",
                  {
                    "text-left": ((N = E.column.columnDef.meta) == null ? void 0 : N.align) === "left",
                    "text-center": ((G = E.column.columnDef.meta) == null ? void 0 : G.align) === "center",
                    "text-right": ((R = E.column.columnDef.meta) == null ? void 0 : R.align) === "right"
                  },
                  l
                ),
                children: Lt(E.column.columnDef.cell, E.getContext())
              },
              E.id
            );
          })
        },
        V.id
      )) })
    ] }) }),
    !!r.length && j && /* @__PURE__ */ e.jsx("div", { className: "p-4 bg-white rounded-b-md", children: /* @__PURE__ */ e.jsx(
      $s,
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
}, pa = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}, gr = ke(
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
    ...m
  }, b) => {
    const h = c || (i ? {
      default: "mdi:information",
      success: "mdi:check-circle",
      error: "mdi:alert-circle",
      warning: "mdi:alert",
      info: "mdi:information"
    }[r] : void 0), f = a || n;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: b,
        className: v(
          "flex",
          n ? "items-start gap-3 p-4" : "items-center gap-2 py-2.5 px-3",
          "border border-gray-200",
          pa[s],
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
            ee,
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
            !f && /* @__PURE__ */ e.jsx("span", { className: "text-sm leading-5", children: m.children })
          ] }),
          d && l && /* @__PURE__ */ e.jsx(
            Ee,
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
              children: /* @__PURE__ */ e.jsx(ee, { icon: "mdi:close", className: v(n ? "h-5 w-5" : "h-4 w-4") })
            }
          )
        ]
      }
    );
  }
);
gr.displayName = "Toast";
const Rt = Rr(void 0), ba = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, Ha = ({ children: t }) => {
  const [r, s] = te([]), a = Be((i) => {
    s((d) => d.filter((m) => m.id !== i));
  }, []), n = Be((i) => {
    const d = Math.random().toString(36).substr(2, 9), m = i.position || "top-right", b = i.duration || 5e3, u = {
      ...i,
      id: d,
      position: m
    };
    return s((h) => [...h, u]), b > 0 && setTimeout(() => {
      a(d);
    }, b), d;
  }, [a]), l = r.reduce((i, d) => (i[d.position] || (i[d.position] = []), i[d.position].push(d), i), {
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    "bottom-right": [],
    "top-center": [],
    "bottom-center": []
  }), c = we();
  return "body" in c ? /* @__PURE__ */ e.jsxs(Rt.Provider, { value: { showToast: n, removeToast: a }, children: [
    t,
    Ye(
      /* @__PURE__ */ e.jsx(e.Fragment, { children: Object.entries(l).map(([i, d]) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: v(
            "fixed z-[100] flex flex-col gap-2 min-w-[320px] max-w-[420px]",
            ba[i],
            i.includes("bottom") ? "flex-col-reverse" : "flex-col"
          ),
          children: d.map((m) => /* @__PURE__ */ e.jsx(
            gr,
            {
              ...m,
              onClose: () => a(m.id),
              className: "animate-slide-in"
            },
            m.id
          ))
        },
        i
      )) }),
      c.body
    )
  ] }) : /* @__PURE__ */ e.jsx(Rt.Provider, { value: { showToast: n, removeToast: a }, children: t });
}, Wa = () => {
  const t = Mr(Rt);
  if (!t)
    throw new Error("useToast must be used within a ToastProvider");
  return t;
}, ha = ({
  label: t,
  value: r,
  icon: s,
  className: a
}) => /* @__PURE__ */ e.jsxs(Ct, { className: v(
  "flex items-center gap-4 rounded-lg w-full bg-white p-4 shadow-sm hover:bg-neutral-50 transition-shadow duration-200 justify-between",
  a
), children: [
  /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium text-gray", children: t }),
    /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-2xl font-semibold text-gray-900", children: r })
  ] }),
  s && /* @__PURE__ */ e.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50", children: /* @__PURE__ */ e.jsx(ee, { icon: s, className: "h-6 w-6 text-primary-600" }) })
] }), xa = {
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
}, va = {
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
  ...xa,
  ...pr
}, Ut = {
  image: "https://design-system-eaip.onrender.com/img/error.svg",
  message: "An unexpected error occurred. Our team is currently investigating the issue."
}, Kt = (t) => typeof t == "object" && t !== null && ("code" in t || "message" in t), Ua = ({
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
      const u = va[n];
      return pr[u];
    }
    return Kt(t) && t.code && Wt[t.code] ? Wt[t.code] : Ut;
  })(), m = l || d.image, b = c || (Kt(t) ? t.message : null) || d.message;
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${a}`, children: [
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: m,
        alt: "Error illustration",
        className: "max-w-[300px] h-auto"
      }
    ),
    typeof b == "string" ? /* @__PURE__ */ e.jsx(ct, { variant: "body1", className: "m-0", children: b }) : /* @__PURE__ */ e.jsx("div", { className: "m-0", children: b }),
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
}, ya = je(
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
), wa = ke(
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
    required: m = !1,
    showSubmitButton: b = !1,
    submitButtonLabel: u = "Submit",
    submitButtonVariant: h = "primary",
    length: f = 6,
    numericOnly: j = !0,
    onComplete: k,
    onChange: p,
    onSubmit: y,
    value: w,
    defaultValue: D = "",
    disabled: L = !1,
    autoFocus: T = !1,
    ...W
  }, V) => {
    const [S, E] = te(D || ""), N = pe([]);
    be(() => {
      w !== void 0 && E(w);
    }, [w]);
    const G = w !== void 0, R = G ? w : S, C = (P) => {
      G || E(P), p == null || p(P), P.length === f && (k == null || k(P), b || y == null || y(P));
    }, $ = (P) => (U) => {
      N.current[P] = U;
    }, B = (P) => {
      P.target.select();
    }, A = (P, U) => {
      var z;
      const re = P.target.value;
      let ce = "";
      if (re.length >= 1)
        ce = re.slice(-1);
      else if (re.length === 0) {
        const X = R.split("");
        X[U] = "", C(X.join(""));
        return;
      }
      if (j && !/^\d$/.test(ce))
        return;
      const oe = R.split("");
      for (; oe.length <= U; )
        oe.push("");
      oe[U] = ce;
      const le = oe.join("");
      C(le), U < f - 1 && ce && ((z = N.current[U + 1]) == null || z.focus());
    }, x = (P, U) => {
      var re, ce, oe;
      if (P.key === "Backspace") {
        const le = R.split("");
        R[U] ? (P.preventDefault(), le[U] = "", C(le.join(""))) : U > 0 && (P.preventDefault(), le[U - 1] = "", C(le.join("")), (re = N.current[U - 1]) == null || re.focus());
      } else if (P.key === "Delete") {
        if (R[U]) {
          P.preventDefault();
          const le = R.split("");
          le[U] = "", C(le.join(""));
        }
      } else if (P.key === "ArrowLeft" && U > 0)
        P.preventDefault(), (ce = N.current[U - 1]) == null || ce.focus();
      else if (P.key === "ArrowRight" && U < f - 1)
        P.preventDefault(), (oe = N.current[U + 1]) == null || oe.focus();
      else if (!P.ctrlKey && !P.altKey && !P.metaKey && P.key.length === 1 && j && !/^\d$/.test(P.key)) {
        P.preventDefault();
        return;
      }
    }, _ = (P) => {
      var le;
      P.preventDefault();
      const U = P.clipboardData.getData("text/plain").trim();
      if (j && !/^\d+$/.test(U))
        return;
      const ce = U.slice(0, f).padEnd(R.length, "").slice(0, f);
      C(ce);
      const oe = ce.length < f ? ce.length : f - 1;
      (le = N.current[oe]) == null || le.focus();
    }, g = () => {
      R.length === f && (y == null || y(R));
    }, H = R.split("").concat(Array(f - R.length).fill(""));
    return /* @__PURE__ */ e.jsxs("div", { ref: V, className: v("w-full", t), ...W, children: [
      i && /* @__PURE__ */ e.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
        i,
        m && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center gap-2", children: Array.from({ length: f }).map((P, U) => /* @__PURE__ */ e.jsx(
          "input",
          {
            ref: $(U),
            type: j ? "tel" : "text",
            inputMode: j ? "numeric" : "text",
            maxLength: 1,
            value: H[U] || "",
            onChange: (re) => A(re, U),
            onKeyDown: (re) => x(re, U),
            onPaste: U === 0 ? _ : void 0,
            onFocus: B,
            disabled: L,
            autoFocus: T && U === 0,
            className: v(
              ya({
                variant: n ? "error" : r,
                size: s,
                rounded: a
              })
            ),
            "aria-invalid": n
          },
          U
        )) }),
        n && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger self-start", children: l }),
        !n && c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral self-start", children: c }),
        d && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-neutral-600", children: d }),
        b && /* @__PURE__ */ e.jsx(
          Ee,
          {
            variant: h,
            disabled: R.length !== f || L,
            onClick: g,
            className: "mt-4",
            children: u
          }
        )
      ] })
    ] });
  }
);
wa.displayName = "InputOTP";
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
}, Ka = ({
  icon: t,
  className: r,
  color: s = "primary",
  value: a,
  maxValue: n = 99,
  children: l,
  ...c
}) => {
  const i = "top-0 right-0", d = typeof a == "number" && !isNaN(a);
  let m = "";
  d && (a > n ? m = `${n}+` : m = String(a));
  const b = d ? "px-2" : "", u = d ? "min-w-[20px]" : "w-2.5 h-2.5", h = d ? "h-5" : "h-2.5", f = typeof s == "string" && s in qt ? qt[s] : s;
  return /* @__PURE__ */ e.jsxs("div", { className: v("relative inline-block", r), children: [
    l || (t ? /* @__PURE__ */ e.jsx(ee, { icon: t, color: f, size: 32, ...c }) : null),
    /* @__PURE__ */ e.jsx(
      "span",
      {
        className: v(
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
}, ka = {
  FLIGHT_LIGHT: {
    image: "https://design-system-eaip.onrender.com/img/flight-loader-light.gif",
    message: "Loading, please wait..."
  },
  FLIGHT_DARK: {
    image: "https://design-system-eaip.onrender.com/img/flight-loader-dark.gif",
    message: "Loading, please wait..."
  }
}, ja = {
  "flight-light": "FLIGHT_LIGHT",
  "flight-dark": "FLIGHT_DARK"
}, qa = ({
  variant: t,
  customImage: r,
  customMessage: s,
  width: a,
  height: n,
  className: l = ""
}) => {
  const c = ja[t], i = ka[c];
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${l}`, children: [
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: r || i.image,
        alt: "Loading animation",
        className: "max-w-[200px] h-auto",
        style: { width: a, height: n }
      }
    ),
    s ? typeof s == "string" ? /* @__PURE__ */ e.jsx(ct, { variant: "body1", className: "m-0", children: s }) : /* @__PURE__ */ e.jsx("div", { className: "m-0", children: s }) : /* @__PURE__ */ e.jsx(ct, { variant: "body1", className: "m-0", children: i.message })
  ] });
}, Na = {
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
}, Ea = {
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
}, Za = ({
  variant: t,
  customMessage: r,
  reload: s,
  reloadText: a = "Try Again",
  customImage: n,
  width: l,
  height: c,
  className: i = ""
}) => {
  const d = Ea[t], m = Na[d];
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
    r ? typeof r == "string" ? /* @__PURE__ */ e.jsx(ct, { variant: "body1", className: "m-0", children: r }) : /* @__PURE__ */ e.jsx("div", { className: "m-0", children: r }) : /* @__PURE__ */ e.jsx(ct, { variant: "body1", className: "m-0", children: m.message }),
    s && /* @__PURE__ */ e.jsx(
      Ee,
      {
        onClick: s,
        rounded: "full",
        variant: "primary",
        size: "md",
        children: a
      }
    )
  ] });
}, Ja = ({
  widgets: t,
  className: r
}) => /* @__PURE__ */ e.jsx("div", { className: v("w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", r), children: t.map((s, a) => /* @__PURE__ */ e.jsx(ha, { ...s }, a)) });
export {
  Aa as Accordion,
  ms as AutoComplete,
  Pa as Avatar,
  Da as Badge,
  Ka as BadgeNotif,
  ma as Breadcrumbs,
  Ee as Button,
  Ct as Card,
  vs as CheckBoxGroup,
  vt as Checkbox,
  Ta as Chip,
  Ms as DatePicker,
  As as Dialog,
  Ts as DialogActions,
  Ds as DialogBody,
  ir as DialogHeader,
  Ps as DialogTitle,
  Is as Divider,
  Ua as ErrorWrapper,
  Ia as FileUpload,
  ee as Icon,
  ar as Input,
  wa as InputOTP,
  qa as Loader,
  Za as NegativeCase,
  _a as Notification,
  $s as Pagination,
  da as PhoneInput,
  Va as Popover,
  St as PrimitiveDatePicker,
  ia as Progress,
  Fs as Radio,
  Ys as RadioGroup,
  cr as Select,
  ut as SelectItem,
  Gs as Skeleton,
  za as Slider,
  Oa as StarRating,
  La as StatusIndicator,
  $a as Stepper,
  Fa as Switch,
  Ga as Table,
  Ba as Tabs,
  ct as Text,
  Xs as TimePicker,
  gr as Toast,
  Ha as ToastProvider,
  ta as Toggle,
  Ya as Tooltip,
  ha as WidgetCard,
  Ja as WidgetCardGroup,
  hs as buttonVariants,
  xs as cardVariants,
  v as cn,
  ya as inputOTPVariants,
  Qs as toggleVariants,
  Wa as useToast
};
