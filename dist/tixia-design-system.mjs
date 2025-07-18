import ke, { useState as J, useEffect as be, forwardRef as Ne, useRef as ge, useCallback as Fe, Children as It, isValidElement as bt, cloneElement as Nr, createContext as Er, useContext as Sr } from "react";
import { createPortal as Ve } from "react-dom";
import ie from "dayjs";
import { useReactTable as Rr, getPaginationRowModel as Mr, getSortedRowModel as Tr, getCoreRowModel as Cr, flexRender as zt } from "@tanstack/react-table";
var Kt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function qt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var kt = { exports: {} }, Qe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ot;
function Ar() {
  if (Ot) return Qe;
  Ot = 1;
  var t = ke, r = Symbol.for("react.element"), a = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(i, d, g) {
    var h, m = {}, b = null, f = null;
    g !== void 0 && (b = "" + g), d.key !== void 0 && (b = "" + d.key), d.ref !== void 0 && (f = d.ref);
    for (h in d) s.call(d, h) && !l.hasOwnProperty(h) && (m[h] = d[h]);
    if (i && i.defaultProps) for (h in d = i.defaultProps, d) m[h] === void 0 && (m[h] = d[h]);
    return { $$typeof: r, type: i, key: b, ref: f, props: m, _owner: o.current };
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
var Lt;
function Pr() {
  return Lt || (Lt = 1, process.env.NODE_ENV !== "production" && function() {
    var t = ke, r = Symbol.for("react.element"), a = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), i = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), N = Symbol.iterator, w = "@@iterator";
    function p(n) {
      if (n === null || typeof n != "object")
        return null;
      var M = N && n[N] || n[w];
      return typeof M == "function" ? M : null;
    }
    var x = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(n) {
      {
        for (var M = arguments.length, z = new Array(M > 1 ? M - 1 : 0), U = 1; U < M; U++)
          z[U - 1] = arguments[U];
        P("error", n, z);
      }
    }
    function P(n, M, z) {
      {
        var U = x.ReactDebugCurrentFrame, se = U.getStackAddendum();
        se !== "" && (M += "%s", z = z.concat([se]));
        var le = z.map(function(ee) {
          return String(ee);
        });
        le.unshift("Warning: " + M), Function.prototype.apply.call(console[n], console, le);
      }
    }
    var D = !1, _ = !1, W = !1, G = !1, S = !1, j;
    j = Symbol.for("react.module.reference");
    function E(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === s || n === l || S || n === o || n === g || n === h || G || n === f || D || _ || W || typeof n == "object" && n !== null && (n.$$typeof === b || n.$$typeof === m || n.$$typeof === c || n.$$typeof === i || n.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === j || n.getModuleId !== void 0));
    }
    function V(n, M, z) {
      var U = n.displayName;
      if (U)
        return U;
      var se = M.displayName || M.name || "";
      return se !== "" ? z + "(" + se + ")" : z;
    }
    function R(n) {
      return n.displayName || "Context";
    }
    function C(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case s:
          return "Fragment";
        case a:
          return "Portal";
        case l:
          return "Profiler";
        case o:
          return "StrictMode";
        case g:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case i:
            var M = n;
            return R(M) + ".Consumer";
          case c:
            var z = n;
            return R(z._context) + ".Provider";
          case d:
            return V(n, n.render, "ForwardRef");
          case m:
            var U = n.displayName || null;
            return U !== null ? U : C(n.type) || "Memo";
          case b: {
            var se = n, le = se._payload, ee = se._init;
            try {
              return C(ee(le));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, O = 0, u, k, L, T, Y, A, H;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function de() {
      {
        if (O === 0) {
          u = console.log, k = console.info, L = console.warn, T = console.error, Y = console.group, A = console.groupCollapsed, H = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: oe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        O++;
      }
    }
    function he() {
      {
        if (O--, O === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, n, {
              value: u
            }),
            info: I({}, n, {
              value: k
            }),
            warn: I({}, n, {
              value: L
            }),
            error: I({}, n, {
              value: T
            }),
            group: I({}, n, {
              value: Y
            }),
            groupCollapsed: I({}, n, {
              value: A
            }),
            groupEnd: I({}, n, {
              value: H
            })
          });
        }
        O < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ue = x.ReactCurrentDispatcher, B;
    function te(n, M, z) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (se) {
            var U = se.stack.trim().match(/\n( *(at )?)/);
            B = U && U[1] || "";
          }
        return `
` + B + n;
      }
    }
    var Ce = !1, Pe;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      Pe = new Ye();
    }
    function re(n, M) {
      if (!n || Ce)
        return "";
      {
        var z = Pe.get(n);
        if (z !== void 0)
          return z;
      }
      var U;
      Ce = !0;
      var se = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var le;
      le = ue.current, ue.current = null, de();
      try {
        if (M) {
          var ee = function() {
            throw Error();
          };
          if (Object.defineProperty(ee.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ee, []);
            } catch (Ae) {
              U = Ae;
            }
            Reflect.construct(n, [], ee);
          } else {
            try {
              ee.call();
            } catch (Ae) {
              U = Ae;
            }
            n.call(ee.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ae) {
            U = Ae;
          }
          n();
        }
      } catch (Ae) {
        if (Ae && U && typeof Ae.stack == "string") {
          for (var X = Ae.stack.split(`
`), Me = U.stack.split(`
`), xe = X.length - 1, ve = Me.length - 1; xe >= 1 && ve >= 0 && X[xe] !== Me[ve]; )
            ve--;
          for (; xe >= 1 && ve >= 0; xe--, ve--)
            if (X[xe] !== Me[ve]) {
              if (xe !== 1 || ve !== 1)
                do
                  if (xe--, ve--, ve < 0 || X[xe] !== Me[ve]) {
                    var Ie = `
` + X[xe].replace(" at new ", " at ");
                    return n.displayName && Ie.includes("<anonymous>") && (Ie = Ie.replace("<anonymous>", n.displayName)), typeof n == "function" && Pe.set(n, Ie), Ie;
                  }
                while (xe >= 1 && ve >= 0);
              break;
            }
        }
      } finally {
        Ce = !1, ue.current = le, he(), Error.prepareStackTrace = se;
      }
      var Ze = n ? n.displayName || n.name : "", We = Ze ? te(Ze) : "";
      return typeof n == "function" && Pe.set(n, We), We;
    }
    function ce(n, M, z) {
      return re(n, !1);
    }
    function pe(n) {
      var M = n.prototype;
      return !!(M && M.isReactComponent);
    }
    function De(n, M, z) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return re(n, pe(n));
      if (typeof n == "string")
        return te(n);
      switch (n) {
        case g:
          return te("Suspense");
        case h:
          return te("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case d:
            return ce(n.render);
          case m:
            return De(n.type, M, z);
          case b: {
            var U = n, se = U._payload, le = U._init;
            try {
              return De(le(se), M, z);
            } catch {
            }
          }
        }
      return "";
    }
    var Ee = Object.prototype.hasOwnProperty, Oe = {}, ze = x.ReactDebugCurrentFrame;
    function _e(n) {
      if (n) {
        var M = n._owner, z = De(n.type, n._source, M ? M.type : null);
        ze.setExtraStackFrame(z);
      } else
        ze.setExtraStackFrame(null);
    }
    function ct(n, M, z, U, se) {
      {
        var le = Function.call.bind(Ee);
        for (var ee in n)
          if (le(n, ee)) {
            var X = void 0;
            try {
              if (typeof n[ee] != "function") {
                var Me = Error((U || "React class") + ": " + z + " type `" + ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Me.name = "Invariant Violation", Me;
              }
              X = n[ee](M, ee, U, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (xe) {
              X = xe;
            }
            X && !(X instanceof Error) && (_e(se), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", U || "React class", z, ee, typeof X), _e(null)), X instanceof Error && !(X.message in Oe) && (Oe[X.message] = !0, _e(se), y("Failed %s type: %s", z, X.message), _e(null));
          }
      }
    }
    var st = Array.isArray;
    function Ke(n) {
      return st(n);
    }
    function nt(n) {
      {
        var M = typeof Symbol == "function" && Symbol.toStringTag, z = M && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return z;
      }
    }
    function $(n) {
      try {
        return fe(n), !1;
      } catch {
        return !0;
      }
    }
    function fe(n) {
      return "" + n;
    }
    function F(n) {
      if ($(n))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nt(n)), fe(n);
    }
    var ae = x.ReactCurrentOwner, K = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, ne;
    function Re(n) {
      if (Ee.call(n, "ref")) {
        var M = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function Be(n) {
      if (Ee.call(n, "key")) {
        var M = Object.getOwnPropertyDescriptor(n, "key").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function dt(n, M) {
      typeof n.ref == "string" && ae.current;
    }
    function ut(n, M) {
      {
        var z = function() {
          we || (we = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        z.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: z,
          configurable: !0
        });
      }
    }
    function ot(n, M) {
      {
        var z = function() {
          ne || (ne = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        z.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: z,
          configurable: !0
        });
      }
    }
    var lt = function(n, M, z, U, se, le, ee) {
      var X = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: n,
        key: M,
        ref: z,
        props: ee,
        // Record the component responsible for creating this element.
        _owner: le
      };
      return X._store = {}, Object.defineProperty(X._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(X, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: U
      }), Object.defineProperty(X, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: se
      }), Object.freeze && (Object.freeze(X.props), Object.freeze(X)), X;
    };
    function ft(n, M, z, U, se) {
      {
        var le, ee = {}, X = null, Me = null;
        z !== void 0 && (F(z), X = "" + z), Be(M) && (F(M.key), X = "" + M.key), Re(M) && (Me = M.ref, dt(M, se));
        for (le in M)
          Ee.call(M, le) && !K.hasOwnProperty(le) && (ee[le] = M[le]);
        if (n && n.defaultProps) {
          var xe = n.defaultProps;
          for (le in xe)
            ee[le] === void 0 && (ee[le] = xe[le]);
        }
        if (X || Me) {
          var ve = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          X && ut(ee, ve), Me && ot(ee, ve);
        }
        return lt(n, X, Me, se, U, ae.current, ee);
      }
    }
    var Le = x.ReactCurrentOwner, Mt = x.ReactDebugCurrentFrame;
    function qe(n) {
      if (n) {
        var M = n._owner, z = De(n.type, n._source, M ? M.type : null);
        Mt.setExtraStackFrame(z);
      } else
        Mt.setExtraStackFrame(null);
    }
    var mt;
    mt = !1;
    function gt(n) {
      return typeof n == "object" && n !== null && n.$$typeof === r;
    }
    function Tt() {
      {
        if (Le.current) {
          var n = C(Le.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function gr(n) {
      return "";
    }
    var Ct = {};
    function pr(n) {
      {
        var M = Tt();
        if (!M) {
          var z = typeof n == "string" ? n : n.displayName || n.name;
          z && (M = `

Check the top-level render call using <` + z + ">.");
        }
        return M;
      }
    }
    function At(n, M) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var z = pr(M);
        if (Ct[z])
          return;
        Ct[z] = !0;
        var U = "";
        n && n._owner && n._owner !== Le.current && (U = " It was passed a child from " + C(n._owner.type) + "."), qe(n), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, U), qe(null);
      }
    }
    function Pt(n, M) {
      {
        if (typeof n != "object")
          return;
        if (Ke(n))
          for (var z = 0; z < n.length; z++) {
            var U = n[z];
            gt(U) && At(U, M);
          }
        else if (gt(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var se = p(n);
          if (typeof se == "function" && se !== n.entries)
            for (var le = se.call(n), ee; !(ee = le.next()).done; )
              gt(ee.value) && At(ee.value, M);
        }
      }
    }
    function br(n) {
      {
        var M = n.type;
        if (M == null || typeof M == "string")
          return;
        var z;
        if (typeof M == "function")
          z = M.propTypes;
        else if (typeof M == "object" && (M.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        M.$$typeof === m))
          z = M.propTypes;
        else
          return;
        if (z) {
          var U = C(M);
          ct(z, n.props, "prop", U, n);
        } else if (M.PropTypes !== void 0 && !mt) {
          mt = !0;
          var se = C(M);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", se || "Unknown");
        }
        typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(n) {
      {
        for (var M = Object.keys(n.props), z = 0; z < M.length; z++) {
          var U = M[z];
          if (U !== "children" && U !== "key") {
            qe(n), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", U), qe(null);
            break;
          }
        }
        n.ref !== null && (qe(n), y("Invalid attribute `ref` supplied to `React.Fragment`."), qe(null));
      }
    }
    var Dt = {};
    function _t(n, M, z, U, se, le) {
      {
        var ee = E(n);
        if (!ee) {
          var X = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (X += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Me = gr();
          Me ? X += Me : X += Tt();
          var xe;
          n === null ? xe = "null" : Ke(n) ? xe = "array" : n !== void 0 && n.$$typeof === r ? (xe = "<" + (C(n.type) || "Unknown") + " />", X = " Did you accidentally export a JSX literal instead of a component?") : xe = typeof n, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", xe, X);
        }
        var ve = ft(n, M, z, se, le);
        if (ve == null)
          return ve;
        if (ee) {
          var Ie = M.children;
          if (Ie !== void 0)
            if (U)
              if (Ke(Ie)) {
                for (var Ze = 0; Ze < Ie.length; Ze++)
                  Pt(Ie[Ze], n);
                Object.freeze && Object.freeze(Ie);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pt(Ie, n);
        }
        if (Ee.call(M, "key")) {
          var We = C(n), Ae = Object.keys(M).filter(function(jr) {
            return jr !== "key";
          }), pt = Ae.length > 0 ? "{key: someKey, " + Ae.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Dt[We + pt]) {
            var kr = Ae.length > 0 ? "{" + Ae.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, pt, We, kr, We), Dt[We + pt] = !0;
          }
        }
        return n === s ? hr(ve) : br(ve), ve;
      }
    }
    function xr(n, M, z) {
      return _t(n, M, z, !0);
    }
    function vr(n, M, z) {
      return _t(n, M, z, !1);
    }
    var yr = vr, wr = xr;
    et.Fragment = s, et.jsx = yr, et.jsxs = wr;
  }()), et;
}
process.env.NODE_ENV === "production" ? kt.exports = Ar() : kt.exports = Pr();
var e = kt.exports;
function Zt(t) {
  var r, a, s = "";
  if (typeof t == "string" || typeof t == "number") s += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (r = 0; r < o; r++) t[r] && (a = Zt(t[r])) && (s && (s += " "), s += a);
  } else for (a in t) t[a] && (s && (s += " "), s += a);
  return s;
}
function Q() {
  for (var t, r, a = 0, s = "", o = arguments.length; a < o; a++) (t = arguments[a]) && (r = Zt(t)) && (s && (s += " "), s += r);
  return s;
}
const $t = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, Ft = Q, je = (t, r) => (a) => {
  var s;
  if ((r == null ? void 0 : r.variants) == null) return Ft(t, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: o, defaultVariants: l } = r, c = Object.keys(o).map((g) => {
    const h = a == null ? void 0 : a[g], m = l == null ? void 0 : l[g];
    if (h === null) return null;
    const b = $t(h) || $t(m);
    return o[g][b];
  }), i = a && Object.entries(a).reduce((g, h) => {
    let [m, b] = h;
    return b === void 0 || (g[m] = b), g;
  }, {}), d = r == null || (s = r.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((g, h) => {
    let { class: m, className: b, ...f } = h;
    return Object.entries(f).every((N) => {
      let [w, p] = N;
      return Array.isArray(p) ? p.includes({
        ...l,
        ...i
      }[w]) : {
        ...l,
        ...i
      }[w] === p;
    }) ? [
      ...g,
      m,
      b
    ] : g;
  }, []);
  return Ft(t, c, d, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, St = "-", Dr = (t) => {
  const r = Ir(t), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: s
  } = t;
  return {
    getClassGroupId: (c) => {
      const i = c.split(St);
      return i[0] === "" && i.length !== 1 && i.shift(), Jt(i, r) || _r(c);
    },
    getConflictingClassGroupIds: (c, i) => {
      const d = a[c] || [];
      return i && s[c] ? [...d, ...s[c]] : d;
    }
  };
}, Jt = (t, r) => {
  var c;
  if (t.length === 0)
    return r.classGroupId;
  const a = t[0], s = r.nextPart.get(a), o = s ? Jt(t.slice(1), s) : void 0;
  if (o)
    return o;
  if (r.validators.length === 0)
    return;
  const l = t.join(St);
  return (c = r.validators.find(({
    validator: i
  }) => i(l))) == null ? void 0 : c.classGroupId;
}, Vt = /^\[(.+)\]$/, _r = (t) => {
  if (Vt.test(t)) {
    const r = Vt.exec(t)[1], a = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, Ir = (t) => {
  const {
    theme: r,
    prefix: a
  } = t, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Or(Object.entries(t.classGroups), a).forEach(([l, c]) => {
    jt(c, s, l, r);
  }), s;
}, jt = (t, r, a, s) => {
  t.forEach((o) => {
    if (typeof o == "string") {
      const l = o === "" ? r : Yt(r, o);
      l.classGroupId = a;
      return;
    }
    if (typeof o == "function") {
      if (zr(o)) {
        jt(o(s), r, a, s);
        return;
      }
      r.validators.push({
        validator: o,
        classGroupId: a
      });
      return;
    }
    Object.entries(o).forEach(([l, c]) => {
      jt(c, Yt(r, l), a, s);
    });
  });
}, Yt = (t, r) => {
  let a = t;
  return r.split(St).forEach((s) => {
    a.nextPart.has(s) || a.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(s);
  }), a;
}, zr = (t) => t.isThemeGetter, Or = (t, r) => r ? t.map(([a, s]) => {
  const o = s.map((l) => typeof l == "string" ? r + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(([c, i]) => [r + c, i])) : l);
  return [a, o];
}) : t, Lr = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, a = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  const o = (l, c) => {
    a.set(l, c), r++, r > t && (r = 0, s = a, a = /* @__PURE__ */ new Map());
  };
  return {
    get(l) {
      let c = a.get(l);
      if (c !== void 0)
        return c;
      if ((c = s.get(l)) !== void 0)
        return o(l, c), c;
    },
    set(l, c) {
      a.has(l) ? a.set(l, c) : o(l, c);
    }
  };
}, Xt = "!", $r = (t) => {
  const {
    separator: r,
    experimentalParseClassName: a
  } = t, s = r.length === 1, o = r[0], l = r.length, c = (i) => {
    const d = [];
    let g = 0, h = 0, m;
    for (let p = 0; p < i.length; p++) {
      let x = i[p];
      if (g === 0) {
        if (x === o && (s || i.slice(p, p + l) === r)) {
          d.push(i.slice(h, p)), h = p + l;
          continue;
        }
        if (x === "/") {
          m = p;
          continue;
        }
      }
      x === "[" ? g++ : x === "]" && g--;
    }
    const b = d.length === 0 ? i : i.substring(h), f = b.startsWith(Xt), N = f ? b.substring(1) : b, w = m && m > h ? m - h : void 0;
    return {
      modifiers: d,
      hasImportantModifier: f,
      baseClassName: N,
      maybePostfixModifierPosition: w
    };
  };
  return a ? (i) => a({
    className: i,
    parseClassName: c
  }) : c;
}, Fr = (t) => {
  if (t.length <= 1)
    return t;
  const r = [];
  let a = [];
  return t.forEach((s) => {
    s[0] === "[" ? (r.push(...a.sort(), s), a = []) : a.push(s);
  }), r.push(...a.sort()), r;
}, Vr = (t) => ({
  cache: Lr(t.cacheSize),
  parseClassName: $r(t),
  ...Dr(t)
}), Yr = /\s+/, Br = (t, r) => {
  const {
    parseClassName: a,
    getClassGroupId: s,
    getConflictingClassGroupIds: o
  } = r, l = [], c = t.trim().split(Yr);
  let i = "";
  for (let d = c.length - 1; d >= 0; d -= 1) {
    const g = c[d], {
      modifiers: h,
      hasImportantModifier: m,
      baseClassName: b,
      maybePostfixModifierPosition: f
    } = a(g);
    let N = !!f, w = s(N ? b.substring(0, f) : b);
    if (!w) {
      if (!N) {
        i = g + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (w = s(b), !w) {
        i = g + (i.length > 0 ? " " + i : i);
        continue;
      }
      N = !1;
    }
    const p = Fr(h).join(":"), x = m ? p + Xt : p, y = x + w;
    if (l.includes(y))
      continue;
    l.push(y);
    const P = o(w, N);
    for (let D = 0; D < P.length; ++D) {
      const _ = P[D];
      l.push(x + _);
    }
    i = g + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Gr() {
  let t = 0, r, a, s = "";
  for (; t < arguments.length; )
    (r = arguments[t++]) && (a = Qt(r)) && (s && (s += " "), s += a);
  return s;
}
const Qt = (t) => {
  if (typeof t == "string")
    return t;
  let r, a = "";
  for (let s = 0; s < t.length; s++)
    t[s] && (r = Qt(t[s])) && (a && (a += " "), a += r);
  return a;
};
function Hr(t, ...r) {
  let a, s, o, l = c;
  function c(d) {
    const g = r.reduce((h, m) => m(h), t());
    return a = Vr(g), s = a.cache.get, o = a.cache.set, l = i, i(d);
  }
  function i(d) {
    const g = s(d);
    if (g)
      return g;
    const h = Br(d, a);
    return o(d, h), h;
  }
  return function() {
    return l(Gr.apply(null, arguments));
  };
}
const me = (t) => {
  const r = (a) => a[t] || [];
  return r.isThemeGetter = !0, r;
}, er = /^\[(?:([a-z-]+):)?(.+)\]$/i, Wr = /^\d+\/\d+$/, Ur = /* @__PURE__ */ new Set(["px", "full", "screen"]), Kr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, qr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Zr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Jr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Xr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, $e = (t) => Je(t) || Ur.has(t) || Wr.test(t), Ge = (t) => Xe(t, "length", oa), Je = (t) => !!t && !Number.isNaN(Number(t)), ht = (t) => Xe(t, "number", Je), tt = (t) => !!t && Number.isInteger(Number(t)), Qr = (t) => t.endsWith("%") && Je(t.slice(0, -1)), q = (t) => er.test(t), He = (t) => Kr.test(t), ea = /* @__PURE__ */ new Set(["length", "size", "percentage"]), ta = (t) => Xe(t, ea, tr), ra = (t) => Xe(t, "position", tr), aa = /* @__PURE__ */ new Set(["image", "url"]), sa = (t) => Xe(t, aa, ia), na = (t) => Xe(t, "", la), rt = () => !0, Xe = (t, r, a) => {
  const s = er.exec(t);
  return s ? s[1] ? typeof r == "string" ? s[1] === r : r.has(s[1]) : a(s[2]) : !1;
}, oa = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  qr.test(t) && !Zr.test(t)
), tr = () => !1, la = (t) => Jr.test(t), ia = (t) => Xr.test(t), ca = () => {
  const t = me("colors"), r = me("spacing"), a = me("blur"), s = me("brightness"), o = me("borderColor"), l = me("borderRadius"), c = me("borderSpacing"), i = me("borderWidth"), d = me("contrast"), g = me("grayscale"), h = me("hueRotate"), m = me("invert"), b = me("gap"), f = me("gradientColorStops"), N = me("gradientColorStopPositions"), w = me("inset"), p = me("margin"), x = me("opacity"), y = me("padding"), P = me("saturate"), D = me("scale"), _ = me("sepia"), W = me("skew"), G = me("space"), S = me("translate"), j = () => ["auto", "contain", "none"], E = () => ["auto", "hidden", "clip", "visible", "scroll"], V = () => ["auto", q, r], R = () => [q, r], C = () => ["", $e, Ge], I = () => ["auto", Je, q], O = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], u = () => ["solid", "dashed", "dotted", "double", "none"], k = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], L = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], T = () => ["", "0", q], Y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], A = () => [Je, q];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [rt],
      spacing: [$e, Ge],
      blur: ["none", "", He, q],
      brightness: A(),
      borderColor: [t],
      borderRadius: ["none", "", "full", He, q],
      borderSpacing: R(),
      borderWidth: C(),
      contrast: A(),
      grayscale: T(),
      hueRotate: A(),
      invert: T(),
      gap: R(),
      gradientColorStops: [t],
      gradientColorStopPositions: [Qr, Ge],
      inset: V(),
      margin: V(),
      opacity: A(),
      padding: R(),
      saturate: A(),
      scale: A(),
      sepia: T(),
      skew: A(),
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
        aspect: ["auto", "square", "video", q]
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
        columns: [He]
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
        object: [...O(), q]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: E()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": E()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": E()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: j()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": j()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": j()
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
        z: ["auto", tt, q]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: V()
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
        flex: ["1", "auto", "initial", "none", q]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: T()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: T()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", tt, q]
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
          span: ["full", tt, q]
        }, q]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": I()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": I()
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
          span: [tt, q]
        }, q]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": I()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": I()
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
        "auto-cols": ["auto", "min", "max", "fr", q]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", q]
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
        justify: ["normal", ...L()]
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
        content: ["normal", ...L(), "baseline"]
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
        "place-content": [...L(), "baseline"]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", q, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [q, r, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [q, r, "none", "full", "min", "max", "fit", "prose", {
          screen: [He]
        }, He]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [q, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [q, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [q, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [q, r, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", He, Ge]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", q]
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
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", $e, q]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", q]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", q]
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
        "placeholder-opacity": [x]
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
        "text-opacity": [x]
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
        decoration: [...u(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", $e, Ge]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", $e, q]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", q]
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
        content: ["none", q]
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
        "bg-opacity": [x]
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
        bg: [...O(), ra]
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
        bg: ["auto", "cover", "contain", ta]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, sa]
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
        "border-opacity": [x]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...u(), "hidden"]
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
        "divide-opacity": [x]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: u()
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
        outline: ["", ...u()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [$e, q]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [$e, Ge]
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
        "ring-opacity": [x]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [$e, Ge]
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
        shadow: ["", "inner", "none", He, na]
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
        opacity: [x]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...k(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": k()
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
        "drop-shadow": ["", "none", He, q]
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
        "hue-rotate": [h]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [m]
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
        "backdrop-grayscale": [g]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [h]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [m]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [x]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", q]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: A()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", q]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: A()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", q]
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
        scale: [D]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [D]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [D]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [tt, q]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", q]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", q]
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
        "will-change": ["auto", "scroll", "contents", "transform", q]
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
        stroke: [$e, Ge, ht]
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
}, Ue = /* @__PURE__ */ Hr(ca);
function v(...t) {
  return Ue(Q(t));
}
const Z = ({
  icon: t,
  className: r,
  size: a,
  color: s,
  rotate: o,
  flip: l,
  spin: c,
  inline: i = !0,
  mode: d = "svg",
  ...g
}) => {
  const [h, m] = J(null), [b, f] = J(!0), [N, w] = J(null);
  return be(() => {
    let p = !0;
    return (async () => {
      try {
        const { Icon: y } = await import("./iconify-Dqt3MVen.mjs");
        p && (m(() => y), f(!1));
      } catch (y) {
        console.error("Failed to load icon:", y), p && (w(y), f(!1));
      }
    })(), () => {
      p = !1;
    };
  }, []), b ? /* @__PURE__ */ e.jsx("span", { style: { width: a, height: a } }) : N || !h ? null : /* @__PURE__ */ e.jsx(
    h,
    {
      icon: t,
      className: v(
        c && "animate-spin",
        r
      ),
      style: {
        color: s,
        transform: `rotate(${o || 0}deg)`
      },
      height: a,
      width: a,
      flip: l,
      inline: i,
      mode: d,
      ...g
    }
  );
}, da = je(
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
), rr = Ne(
  ({
    className: t,
    variant: r = "default",
    size: a = "md",
    rounded: s = "md",
    error: o = !1,
    errorText: l,
    helperText: c,
    label: i,
    required: d = !1,
    labelPlacement: g = "top",
    fullWidth: h = !1,
    leftIcon: m,
    rightIcon: b,
    onRightIconClick: f,
    id: N,
    ...w
  }, p) => {
    const x = N || ke.useId(), y = `${x}-helper`, P = `${x}-error`, D = /* @__PURE__ */ e.jsxs("div", { className: v("relative", !h && "inline-block"), children: [
      m && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ e.jsx(Z, { icon: m, className: "w-4 h-4" }) }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          id: x,
          type: "text",
          ref: p,
          className: v(
            da({ variant: o ? "error" : r, size: a, rounded: s, fullWidth: h }),
            m && "pl-10",
            b && "pr-10",
            t
          ),
          "aria-describedby": o ? P : c ? y : void 0,
          "aria-invalid": o,
          "aria-required": d,
          ...w
        }
      ),
      b && /* @__PURE__ */ e.jsx(
        "div",
        {
          className: v(
            "absolute right-3 top-1/2 -translate-y-1/2 text-neutral",
            f && "cursor-pointer hover:text-primary-600"
          ),
          onClick: f,
          role: f ? "button" : void 0,
          tabIndex: f ? 0 : void 0,
          children: /* @__PURE__ */ e.jsx(Z, { icon: b, className: "w-4 h-4" })
        }
      )
    ] }), _ = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      o && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: P, children: l }),
      !o && c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: y, children: c })
    ] });
    return g === "left" ? /* @__PURE__ */ e.jsx("div", { className: v(h ? "w-full" : "inline-block", t), children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
      i && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: x,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            i,
            d && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: v("flex-1", !h && "inline-block"), children: [
        D,
        _
      ] })
    ] }) }) : /* @__PURE__ */ e.jsxs("div", { className: v(h ? "w-full" : "inline-block", t), children: [
      i && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: x,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            i,
            d && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      D,
      _
    ] });
  }
);
rr.displayName = "Input";
const it = ke.forwardRef(
  ({ className: t, children: r, selected: a, disabled: s, ...o }, l) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: l,
      className: v(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
        "hover:bg-primary-50",
        a && "bg-primary-50 text-primary-900",
        s && "pointer-events-none opacity-50",
        t
      ),
      ...o,
      children: r
    }
  )
);
it.displayName = "SelectItem";
const ar = typeof window < "u", Te = () => ar ? window : {
  innerHeight: 0,
  innerWidth: 0,
  addEventListener: () => {
  },
  removeEventListener: () => {
  }
}, ye = () => ar ? document : {
  addEventListener: () => {
  },
  removeEventListener: () => {
  },
  dispatchEvent: () => {
  }
}, xt = "autocomplete-dropdown-opened", ua = je(
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
), fa = Ne(
  ({
    className: t,
    options: r,
    onSelect: a,
    isOpen: s,
    dropdownPosition: o = "bottom",
    loading: l = !1,
    renderOption: c,
    variant: i = "default",
    size: d = "md",
    rounded: g = "md",
    leftIcon: h,
    rightIcon: m,
    error: b = !1,
    errorText: f,
    helperText: N,
    label: w,
    required: p = !1,
    labelPlacement: x = "top",
    fullWidth: y = !1,
    value: P,
    onChange: D,
    onFocus: _,
    onBlur: W,
    showClear: G = !1,
    onClear: S,
    ...j
  }, E) => {
    const [V, R] = J(!1), [C, I] = J(P || ""), O = ge(null), u = ge(null), k = ge(null), L = s !== void 0, Y = `autocomplete-${ke.useId().replace(/:/g, "")}`, A = () => {
      if (!V || !u.current || !k.current) return;
      const { bottom: re, top: ce, left: pe, width: De } = u.current.getBoundingClientRect(), Ee = k.current, Oe = Te(), ze = {
        position: "fixed",
        left: `${pe}px`,
        width: `${De}px`
      }, _e = o === "bottom" ? {
        ...ze,
        top: `${re + 4}px`,
        maxHeight: `${Oe.innerHeight - re - 8}px`
      } : {
        ...ze,
        bottom: `${Oe.innerHeight - ce + 4}px`,
        maxHeight: `${ce - 8}px`
      };
      Object.assign(Ee.style, _e);
    };
    be(() => {
      const re = Te(), ce = ye(), pe = () => {
        V && A();
      }, De = () => {
        V && A();
      }, Ee = (ze) => {
        ze.detail.id !== Y && R(!1);
      }, Oe = (ze) => {
        const _e = ze.target;
        O.current && !O.current.contains(_e) && k.current && !k.current.contains(_e) && R(!1);
      };
      return V && (A(), re.addEventListener("scroll", pe, !0), re.addEventListener("resize", De)), ce.addEventListener(xt, Ee), ce.addEventListener("click", Oe), () => {
        re.removeEventListener("scroll", pe, !0), re.removeEventListener("resize", De), ce.removeEventListener(xt, Ee), ce.removeEventListener("click", Oe);
      };
    }, [V, Y]), be(() => {
      I(P || "");
    }, [P]);
    const H = (re) => {
      const { value: ce } = re.target;
      if (I(ce), !ce.trim()) {
        R(!1);
        return;
      }
      R(!0), D == null || D(re);
    }, oe = (re) => {
      re.stopPropagation(), I(""), S == null || S();
      const ce = new Event("change");
      ce.target = { value: "" }, D == null || D(ce);
    }, de = (re) => {
      var Ee;
      if (!re) return;
      const { value: ce, label: pe } = re;
      I(pe), R(!1), a == null || a(ce);
      const De = new CustomEvent("autocomplete-select", {
        detail: { selectedOption: re }
      });
      (Ee = u.current) == null || Ee.dispatchEvent(De);
    }, he = (re) => {
      L || (ye().dispatchEvent(
        new CustomEvent(xt, {
          detail: { id: Y }
        })
      ), R(!0)), _ == null || _(re);
    }, ue = (re) => {
      W == null || W(re);
    }, B = r.filter(
      ({ label: re }) => re.toLowerCase().includes((C || "").toLowerCase().trim())
    ), te = L ? s : V, Ce = G && C && !j.disabled && !j.readOnly, Pe = Ce ? "mdi:close" : m, Ye = () => {
      if (!te) return null;
      const re = ye();
      if (!("body" in re)) return null;
      const ce = /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: k,
          className: v(
            ua({ position: o }),
            "overflow-auto"
          ),
          onClick: (pe) => pe.stopPropagation(),
          children: l ? /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center py-2", children: /* @__PURE__ */ e.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" }) }) : B.length > 0 ? B.map((pe) => /* @__PURE__ */ e.jsx(
            it,
            {
              value: pe.value,
              selected: pe.label === C,
              onClick: () => de(pe),
              children: c ? c(pe) : pe.label
            },
            pe.value
          )) : /* @__PURE__ */ e.jsx("div", { className: "px-2 py-2 text-sm text-neutral", children: "No options found" })
        }
      );
      return Ve(ce, re.body);
    };
    return /* @__PURE__ */ e.jsxs("div", { ref: O, className: v("relative", y ? "w-full" : "inline-block"), children: [
      /* @__PURE__ */ e.jsx("div", { ref: u, className: v(!y && "inline-block"), children: /* @__PURE__ */ e.jsx(
        rr,
        {
          ref: E,
          value: C,
          onChange: H,
          onFocus: he,
          onBlur: ue,
          variant: i,
          size: d,
          rounded: g,
          leftIcon: h,
          rightIcon: Pe,
          error: b,
          errorText: f,
          helperText: N,
          label: w,
          required: p,
          labelPlacement: x,
          fullWidth: y,
          className: t,
          ...j,
          onClick: Ce ? oe : j.onClick
        }
      ) }),
      Ye()
    ] });
  }
);
fa.displayName = "AutoComplete";
const ma = {
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
}, ga = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
}, pa = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
}, Es = ({
  items: t,
  multiple: r = !1,
  defaultOpenIds: a = [],
  icon: s = "mdi:chevron-down",
  iconPosition: o = "right",
  className: l,
  contentClassName: c,
  variant: i = "primary",
  shadow: d = "none",
  rounded: g = "lg"
}) => {
  const [h, m] = J(a), b = (N) => {
    m(
      r ? (w) => w.includes(N) ? w.filter((p) => p !== N) : [...w, N] : (w) => w.includes(N) ? [] : [N]
    );
  }, f = ma[i];
  return /* @__PURE__ */ e.jsx("div", { className: Q("w-full space-y-2", l), children: t.map((N) => {
    const w = h.includes(N.id), p = !!N.disabled;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: Q(
          "border overflow-hidden",
          "bg-white",
          "border-gray-200",
          ga[d],
          pa[g],
          "transition-shadow duration-200"
        ),
        children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => !p && b(N.id),
              disabled: p,
              className: Q(
                "w-full flex items-center justify-between p-4",
                "text-left transition-colors",
                f.hover,
                w && f.active,
                f.text,
                p && "opacity-50 cursor-not-allowed"
              ),
              children: [
                o === "left" && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: Q(
                      "mr-3 transition-transform duration-200",
                      w && "rotate-180"
                    ),
                    children: /* @__PURE__ */ e.jsx(Z, { icon: s, className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ e.jsx("div", { className: "flex-1", children: N.title }),
                o === "right" && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: Q(
                      "ml-3 transition-transform duration-200",
                      w && "rotate-180"
                    ),
                    children: /* @__PURE__ */ e.jsx(Z, { icon: s, className: "w-5 h-5" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: Q(
                "grid transition-all duration-200 ease-in-out",
                w ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              ),
              children: /* @__PURE__ */ e.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: Q(
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
}, Ss = ({
  src: t,
  alt: r = "avatar",
  size: a = "medium",
  shape: s = "circle",
  className: o = "",
  variant: l = "cover"
}) => {
  const c = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16"
  }, i = {
    circle: "rounded-full",
    square: "rounded-lg"
  }, d = Ue(
    "inline-flex items-center justify-center overflow-hidden bg-gray-200",
    c[a],
    i[s],
    o
  );
  return /* @__PURE__ */ e.jsx("div", { className: d, children: t ? /* @__PURE__ */ e.jsx(
    "img",
    {
      src: t,
      alt: r,
      className: Ue("w-full h-full", l === "cover" ? "object-cover" : "object-contain")
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
}, Rs = ({
  children: t,
  variant: r = "primary",
  size: a = "medium",
  rounded: s = "md",
  className: o = ""
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
  }, d = Ue(
    "inline-flex items-center font-medium",
    l[r],
    c[a],
    i[s],
    o
  );
  return /* @__PURE__ */ e.jsx("span", { className: d, children: t });
}, ba = je(
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
), Se = Ne(
  ({
    className: t,
    variant: r = "primary",
    size: a = "md",
    rounded: s = "md",
    fullWidth: o = !1,
    isLoading: l = !1,
    leftIcon: c,
    rightIcon: i,
    isIconOnly: d = !1,
    children: g,
    ...h
  }, m) => {
    const f = d || !!(c || i) && !g;
    return /* @__PURE__ */ e.jsxs(
      "button",
      {
        className: v(
          ba({
            variant: r,
            size: a,
            rounded: f ? "full" : s,
            fullWidth: o,
            isIconOnly: f,
            className: t
          })
        ),
        ref: m,
        disabled: h.disabled || l,
        ...h,
        children: [
          l && /* @__PURE__ */ e.jsx("span", { className: "animate-spin inline-block w-4 h-4 border-2 border-current border-r-transparent rounded-full" }),
          c && !l && /* @__PURE__ */ e.jsx(Z, { icon: c, className: "w-4 h-4", inline: !0 }),
          g && /* @__PURE__ */ e.jsx("span", { children: g }),
          i && !l && /* @__PURE__ */ e.jsx(Z, { icon: i, className: "w-4 h-4", inline: !0 })
        ]
      }
    );
  }
);
Se.displayName = "Button";
const ha = je(
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
), Rt = Ne(
  ({
    className: t,
    variant: r = "default",
    padding: a = "md",
    shadow: s = "none",
    rounded: o = "md",
    asChild: l = !1,
    ...c
  }, i) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: v(ha({ variant: r, padding: a, shadow: s, rounded: o, className: t })),
      ref: i,
      ...c
    }
  )
);
Rt.displayName = "Card";
const Ms = ({
  label: t,
  error: r,
  disabled: a = !1,
  indeterminate: s = !1,
  variantSize: o = "sm",
  variant: l = "square",
  color: c = "primary",
  className: i = "",
  ...d
}) => {
  const g = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }, h = {
    primary: "checked:bg-primary-600 checked:border-primary-600 hover:border-primary-600",
    secondary: "checked:bg-secondary-600 checked:border-secondary-600 hover:border-secondary-600",
    success: "checked:bg-success-600 checked:border-success-600 hover:border-success-600",
    warning: "checked:bg-warning-600 checked:border-warning-600 hover:border-warning-600",
    error: "checked:bg-danger-600 checked:border-danger-600 hover:border-danger-600"
  }, b = Ue(
    "border-2 transition-colors duration-200",
    "appearance-none cursor-pointer",
    "checked:bg-no-repeat checked:bg-center",
    l === "circle" ? 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=")]' : 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgM0w0LjUgOC41TDIgNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=")]',
    {
      square: "rounded",
      circle: "rounded-full"
    }[l],
    g[o],
    h[c],
    a && "opacity-50 cursor-not-allowed",
    i
  ), f = Ue(
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
          className: b,
          disabled: a,
          ref: (N) => {
            N && (N.indeterminate = s);
          },
          ...d
        }
      ),
      t && /* @__PURE__ */ e.jsx("label", { className: f, children: t })
    ] }),
    r && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-danger-600", children: r })
  ] });
}, xa = {
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
}, va = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5"
}, ya = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}, Ts = ({
  children: t,
  variant: r = "solid",
  color: a = "primary",
  size: s = "md",
  rounded: o = "md",
  onClose: l,
  className: c,
  icon: i
}) => /* @__PURE__ */ e.jsxs(
  "div",
  {
    className: v(
      "inline-flex items-center gap-1.5 font-medium",
      xa[r][a],
      va[s],
      ya[o],
      c
    ),
    children: [
      i && /* @__PURE__ */ e.jsx("span", { className: "inline-flex items-center", children: /* @__PURE__ */ e.jsx(Z, { icon: i, className: "w-4 h-4" }) }),
      t,
      l && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: l,
          className: "ml-1 rounded-full hover:bg-black/10 p-0.5",
          "aria-label": "Close",
          children: /* @__PURE__ */ e.jsx(Z, { icon: "mdi:close", className: "w-3 h-3" })
        }
      )
    ]
  }
);
var sr = { exports: {} };
(function(t, r) {
  (function(a, s) {
    t.exports = s();
  })(Kt, function() {
    return function(a, s) {
      s.prototype.isSameOrAfter = function(o, l) {
        return this.isSame(o, l) || this.isAfter(o, l);
      };
    };
  });
})(sr);
var wa = sr.exports;
const ka = /* @__PURE__ */ qt(wa);
var nr = { exports: {} };
(function(t, r) {
  (function(a, s) {
    t.exports = s();
  })(Kt, function() {
    return function(a, s) {
      s.prototype.isSameOrBefore = function(o, l) {
        return this.isSame(o, l) || this.isBefore(o, l);
      };
    };
  });
})(nr);
var ja = nr.exports;
const Na = /* @__PURE__ */ qt(ja);
ie.extend(ka);
ie.extend(Na);
const Ea = je(
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
), Nt = Ne(
  ({
    value: t,
    onChange: r,
    minDate: a,
    maxDate: s,
    variant: o = "default",
    size: l = "md",
    rounded: c = "md",
    disabled: i = !1,
    error: d = !1,
    errorText: g,
    helperText: h,
    label: m,
    required: b = !1,
    labelPlacement: f = "top",
    fullWidth: N = !1,
    className: w,
    placeholder: p = "Select date",
    leftIcon: x,
    rightIcon: y,
    monthsToShow: P = 1,
    valueFormatter: D,
    rangeStart: _,
    rangeEnd: W,
    closeOnSelect: G = !0,
    calendarFooter: S,
    format: j = "DD-MM-YYYY",
    allowInput: E = !1,
    ...V
  }) => {
    const [R, C] = J(!1), [I, O] = J(t), [u, k] = J(t || /* @__PURE__ */ new Date()), [L, T] = J(!1), [Y, A] = J(""), H = ge(null), oe = ge(null), de = ge(null), he = ge(null), ue = ge(null);
    be(() => {
      O(t || void 0), A(t ? B(t, j) : "");
    }, [t, j]), be(() => {
      A(I ? B(I, j) : "");
    }, [I, j]);
    const B = ($, fe) => {
      const F = $.getDate().toString().padStart(2, "0"), ae = ($.getMonth() + 1).toString().padStart(2, "0"), K = $.getFullYear().toString();
      switch (fe) {
        case "DD-MM-YYYY":
          return `${F}-${ae}-${K}`;
        case "YYYY-MM-DD":
          return `${K}-${ae}-${F}`;
        case "MM-DD-YYYY":
          return `${ae}-${F}-${K}`;
        default:
          return `${F}-${ae}-${K}`;
      }
    }, te = ($, fe) => {
      const ae = $.replace(/[^\d-]/g, "").split("-");
      if (ae.length !== 3) return null;
      let K, we, ne;
      switch (fe) {
        case "DD-MM-YYYY":
          [K, we, ne] = ae.map(Number);
          break;
        case "YYYY-MM-DD":
          [ne, we, K] = ae.map(Number);
          break;
        case "MM-DD-YYYY":
          [we, K, ne] = ae.map(Number);
          break;
        default:
          [K, we, ne] = ae.map(Number);
      }
      if (isNaN(K) || isNaN(we) || isNaN(ne) || we < 1 || we > 12 || K < 1 || K > 31 || ne < 1900 || ne > 2099) return null;
      const Re = new Date(ne, we - 1, K);
      return Re.getDate() !== K || Re.getMonth() !== we - 1 || Re.getFullYear() !== ne ? null : Re;
    };
    be(() => {
      if (L && he.current) {
        const $ = ie(u).year(), fe = he.current.querySelectorAll("[data-year]"), F = Array.from(fe).find(
          (ae) => parseInt(ae.getAttribute("data-year") || "0") === $
        );
        F && F.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center"
        });
      }
    }, [L, u]);
    const Ce = () => {
      if (!R || !oe.current || !de.current) return;
      const { bottom: $, left: fe, width: F } = oe.current.getBoundingClientRect(), ae = de.current, K = Te();
      P === 2 ? Object.assign(ae.style, {
        position: "fixed",
        left: `${fe}px`,
        top: `${$ + 4}px`,
        minWidth: "500px",
        width: "auto",
        maxHeight: `${K.innerHeight - $ - 8}px`,
        transform: ""
      }) : Object.assign(ae.style, {
        position: "fixed",
        left: `${fe + F / 2}px`,
        top: `${$ + 4}px`,
        width: "320px",
        maxWidth: "100vw",
        maxHeight: `${K.innerHeight - $ - 8}px`,
        transform: "translateX(-50%)"
      });
    };
    be(() => {
      const $ = Te(), fe = ye(), F = () => {
        R && Ce();
      }, ae = () => {
        R && Ce();
      }, K = (we) => {
        we.key === "Escape" && R && (C(!1), T(!1));
      };
      return R && (Ce(), $.addEventListener("scroll", F, !0), $.addEventListener("resize", ae), fe.addEventListener("keydown", K)), () => {
        $.removeEventListener("scroll", F, !0), $.removeEventListener("resize", ae), fe.removeEventListener("keydown", K);
      };
    }, [R]);
    const Pe = ($) => {
      if (_ !== void 0 && W !== void 0)
        if (_ && W)
          O($), A(B($, j)), r == null || r($);
        else if (_) {
          const F = $;
          ie(F).isBefore(_), O(F), A(B(F, j)), r == null || r(F), C(!1), T(!1);
        } else
          O($), A(B($, j)), r == null || r($);
      else
        O($), A(B($, j)), r == null || r($), C(!1), T(!1);
    }, Ye = () => {
      k(ie(u).subtract(1, "month").toDate());
    }, re = () => {
      k(ie(u).add(1, "month").toDate());
    }, ce = ($) => {
      const fe = ie($).startOf("month"), F = ie($).endOf("month"), ae = [];
      let K = fe;
      for (; K.isBefore(F) || K.isSame(F, "day"); )
        ae.push(K.toDate()), K = K.add(1, "day");
      return ae;
    }, pe = ($) => !!(a && ie($).isBefore(a, "day") || s && ie($).isAfter(s, "day")), De = ($) => {
      if (!E) return;
      const F = $.target.value.replace(/[^\d-]/g, "");
      if (F.length < Y.length) {
        A(F);
        return;
      }
      if (F.replace(/-/g, "").length > 8)
        return;
      let K = F;
      j === "DD-MM-YYYY" ? (F.length === 2 && !F.includes("-") || F.length === 5 && F.split("-").length === 2) && (K = F + "-") : j === "YYYY-MM-DD" ? (F.length === 4 && !F.includes("-") || F.length === 7 && F.split("-").length === 2) && (K = F + "-") : j === "MM-DD-YYYY" && (F.length === 2 && !F.includes("-") || F.length === 5 && F.split("-").length === 2) && (K = F + "-"), A(K);
    }, Ee = () => {
      if (!E) return;
      const $ = te(Y, j);
      if ($) {
        if (a && $ < a) {
          A(B(a, j)), O(a), r == null || r(a);
          return;
        }
        if (s && $ > s) {
          A(B(s, j)), O(s), r == null || r(s);
          return;
        }
        O($), r == null || r($), A(B($, j));
      } else
        A(I ? B(I, j) : "");
    }, Oe = () => {
      E && C(!1);
    }, ze = ($) => {
      E && $.key === "Enter" && ($.preventDefault(), Ee());
    }, _e = ($) => {
      const fe = ie(u).year($).toDate();
      k(fe), T(!1);
    }, ct = () => {
      if (!L) return null;
      const $ = ie(u).year(), fe = 1900, ae = Array.from(
        { length: 2099 - fe + 1 },
        (K, we) => fe + we
      );
      return /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: he,
          className: "grid grid-cols-5 gap-2 p-2 overflow-y-auto max-h-[300px]",
          children: ae.map((K) => /* @__PURE__ */ e.jsx(
            "div",
            {
              "data-year": K,
              onClick: () => _e(K),
              className: v(
                K === $ && "bg-primary-50 text-primary",
                "text-sm cursor-pointer p-2"
              ),
              children: K
            },
            K
          ))
        }
      );
    }, st = () => {
      if (!R) return null;
      const $ = ye();
      if (!("body" in $)) return null;
      const fe = Array.from({ length: P }).map(
        (F, ae) => ie(u).add(ae, "month").toDate()
      );
      return Ve(
        /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "fixed inset-0 z-[9998]",
              onClick: () => {
                L || C(!1);
              }
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: de,
              className: "fixed z-[9999] bg-white border border-gray-200 rounded-md shadow-lg",
              onClick: (F) => F.stopPropagation(),
              children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between p-2 border-b border-gray-200", children: [
                  /* @__PURE__ */ e.jsx(
                    Se,
                    {
                      onClick: Ye,
                      variant: "ghost",
                      size: "sm",
                      leftIcon: "mdi:chevron-left"
                    }
                  ),
                  /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx("span", { className: "font-medium text-gray-900", children: P === 1 ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e.jsx("span", { children: ie(u).format("MMMM") }),
                    /* @__PURE__ */ e.jsxs(
                      "div",
                      {
                        className: "cursor-pointer flex items-center gap-1",
                        onClick: () => T(!L),
                        children: [
                          /* @__PURE__ */ e.jsx("span", { children: ie(u).format("YYYY") }),
                          /* @__PURE__ */ e.jsx(Se, { variant: "ghost", size: "sm", leftIcon: L ? "mdi:chevron-up" : "mdi:chevron-down" })
                        ]
                      }
                    )
                  ] }) : `${ie(u).format("MMMM YYYY")} - ${ie(
                    u
                  ).add(P - 1, "month").format("MMMM YYYY")}` }) }),
                  /* @__PURE__ */ e.jsx(
                    Se,
                    {
                      onClick: re,
                      variant: "ghost",
                      size: "sm",
                      rightIcon: "mdi:chevron-right"
                    }
                  )
                ] }),
                L ? ct() : /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: v(
                      P === 2 ? "flex gap-5 p-2 mx-auto w-fit" : "justify-between p-2 mx-auto w-fit"
                    ),
                    children: fe.map((F, ae) => {
                      const K = ce(F), we = ie(F).startOf("month").day();
                      return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col", children: [
                        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-7 gap-y-1 my-1", children: [
                          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                            (ne, Re) => {
                              const Be = Re === 0 || Re === 6;
                              return /* @__PURE__ */ e.jsx(
                                "div",
                                {
                                  className: v(
                                    "text-center text-xs font-medium text-neutral",
                                    Be && "text-danger"
                                  ),
                                  children: ne
                                },
                                ne
                              );
                            }
                          ),
                          Array.from({ length: we }).map(
                            (ne, Re) => /* @__PURE__ */ e.jsx("div", {}, `empty-${Re}`)
                          ),
                          K.map((ne) => {
                            const Re = I && ie(ne).isSame(I, "day"), Be = pe(ne), dt = ie(ne).isSame(
                              F,
                              "month"
                            ), ut = _ && W && ie(ne).isSameOrAfter(_, "day") && ie(ne).isSameOrBefore(W, "day"), ot = _ && ie(ne).isSame(_, "day"), lt = W && ie(ne).isSame(W, "day"), ft = ie(ne).day() === 0 || ie(ne).day() === 6, Le = _ && W;
                            return /* @__PURE__ */ e.jsx("div", { className: "flex flex-col items-center justify-center", children: /* @__PURE__ */ e.jsx(
                              "div",
                              {
                                className: v(
                                  ut && "rounded-none bg-primary-50",
                                  Le && ot && "rounded-l-full",
                                  Le && lt && "rounded-r-full"
                                ),
                                children: /* @__PURE__ */ e.jsx(
                                  "button",
                                  {
                                    onClick: () => !Be && Pe(ne),
                                    disabled: Be,
                                    className: v(
                                      "p-2 text-sm transition-colors duration-200 w-10 h-10 rounded-full",
                                      ft && "!text-danger",
                                      Re && "bg-primary !text-white hover:bg-primary-600 active:bg-primary-700",
                                      Re && !Le && "rounded-full",
                                      !Re && !Be && "hover:bg-primary-50 active:bg-primary-100",
                                      !dt && "text-neutral-400",
                                      Be && "opacity-50 cursor-not-allowed",
                                      // inRange && "bg-primary-50 text-primary-900 rounded-none",
                                      Le && ot && "!bg-primary !text-white !rounded-full",
                                      Le && lt && "!bg-primary !text-white !rounded-full"
                                    ),
                                    children: ie(ne).format("D")
                                  },
                                  ne.toString()
                                )
                              }
                            ) });
                          })
                        ] }),
                        S
                      ] }, ae);
                    })
                  }
                )
              ]
            }
          )
        ] }),
        $.body
      );
    }, Ke = /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: v("relative", !N && "inline-block"),
        ref: oe,
        onClick: () => !i && !E && C(!R),
        children: [
          x && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: ($) => {
                $.stopPropagation(), i || C(!R);
              },
              children: /* @__PURE__ */ e.jsx(Z, { icon: x, className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: ue,
              type: "text",
              value: E ? Y : D ? D() : I ? B(I, j) : "",
              placeholder: E ? j : p,
              readOnly: !E,
              maxLength: E ? 10 : void 0,
              onChange: De,
              onBlur: Ee,
              onFocus: Oe,
              onKeyDown: ze,
              className: v(
                Ea({ variant: d ? "error" : o, size: l, rounded: c, fullWidth: N }),
                x && "pl-10",
                y && "pr-10",
                w
              ),
              disabled: i,
              ...V
            }
          ),
          y && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: ($) => {
                $.stopPropagation(), i || C(!R);
              },
              children: /* @__PURE__ */ e.jsx(Z, { icon: y, className: "w-4 h-4" })
            }
          )
        ]
      }
    ), nt = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      g && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", children: g }),
      !g && h && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", children: h })
    ] });
    return f === "left" ? /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: v(N ? "w-full" : "inline-block", w),
        ref: H,
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-4", children: [
            m && /* @__PURE__ */ e.jsxs("label", { className: "block text-sm text-neutral-900 pt-2", children: [
              m,
              b && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: v("flex-1", !N && "inline-block"), children: [
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
        className: v(N ? "w-full" : "inline-block", w),
        ref: H,
        children: [
          m && /* @__PURE__ */ e.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
            m,
            b && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          Ke,
          nt,
          st()
        ]
      }
    );
  }
);
Nt.displayName = "PrimitiveDatePicker";
const Sa = ({
  mode: t = "single",
  value: r,
  onChange: a,
  monthsToShow: s = 1,
  calendarFooter: o,
  error: l = !1,
  errorText: c,
  format: i = "DD-MM-YYYY",
  allowInput: d = !1,
  ...g
}) => {
  const [h, m] = J([
    void 0,
    void 0
  ]);
  if (t === "single") {
    const b = Array.isArray(r) ? r[0] : r;
    return /* @__PURE__ */ e.jsx(
      Nt,
      {
        value: b === null ? void 0 : b,
        onChange: (f) => a == null ? void 0 : a(f),
        monthsToShow: s,
        calendarFooter: o,
        error: l,
        errorText: c,
        format: i,
        allowInput: d,
        ...g
      }
    );
  }
  if (t === "range") {
    let [b, f] = Array.isArray(r) ? r : h;
    const N = (p) => {
      !b || b && f ? (m([p, void 0]), a == null || a([p, void 0])) : b && !f && (p < b ? (m([p, b]), a == null || a([p, b])) : (m([b, p]), a == null || a([b, p])));
    }, w = () => {
      if (!b) return "";
      const p = (x) => x ? x.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }) : "";
      return b && f ? `${p(b)} - ${p(f)}` : p(b);
    };
    return /* @__PURE__ */ e.jsx(
      Nt,
      {
        value: b,
        onChange: N,
        monthsToShow: s,
        placeholder: g.placeholder || "Select date range",
        valueFormatter: w,
        rangeStart: b,
        rangeEnd: f,
        closeOnSelect: !!f,
        calendarFooter: o,
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
Sa.displayName = "DatePicker";
const or = Ne(
  ({ children: t, onClose: r, className: a, ...s }, o) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: o,
      className: v("mb-4 flex items-center justify-between", a),
      ...s,
      children: [
        t,
        r && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: r,
            className: "ml-4 rounded-full p-1 text-gray hover:bg-gray-100 hover:text-gray-700",
            "aria-label": "Close dialog",
            children: /* @__PURE__ */ e.jsx(Z, { icon: "mdi:close", className: "h-5 w-5" })
          }
        )
      ]
    }
  )
), Ra = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-4xl",
  fullscreen: "w-full h-full max-w-none max-h-none rounded-none"
}, Ma = Ne(
  ({
    isOpen: t,
    onClose: r,
    children: a,
    className: s,
    backdrop: o = "dark",
    header: l,
    closeOnBackdropClick: c = !0,
    size: i = "md",
    ...d
  }, g) => {
    const [h, m] = J(!1), [b, f] = J(!1);
    if (be(() => {
      if (t) {
        m(!0), f(!0);
        const x = ye();
        "body" in x && (x.body.style.overflow = "hidden");
      } else {
        f(!1);
        const x = setTimeout(() => {
          m(!1);
          const y = ye();
          "body" in y && (y.body.style.overflow = "");
        }, 300);
        return () => clearTimeout(x);
      }
    }, [t]), be(() => {
      const x = (y) => {
        y instanceof KeyboardEvent && y.key === "Escape" && r();
      };
      return t && ye().addEventListener("keydown", x), () => {
        ye().removeEventListener("keydown", x);
      };
    }, [t, r]), !h) return null;
    const N = {
      blur: "backdrop-blur-sm bg-black/30",
      dark: "bg-black/50",
      transparent: "bg-transparent"
    }, w = () => {
      c && r();
    }, p = ye();
    return "body" in p ? Ve(
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: v(
            "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300",
            N[o],
            b ? "opacity-100" : "opacity-0",
            i === "fullscreen" && "items-start"
          ),
          onClick: w,
          children: /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: g,
              className: v(
                "relative transform rounded-lg bg-white p-6 shadow-xl transition-all duration-300",
                Ra[i],
                b ? "scale-100 opacity-100" : "scale-95 opacity-0",
                s
              ),
              onClick: (x) => x.stopPropagation(),
              ...d,
              children: [
                l && /* @__PURE__ */ e.jsx(or, { onClose: r, children: l }),
                a
              ]
            }
          )
        }
      ),
      p.body
    ) : null;
  }
), Ta = Ne(
  ({ children: t, className: r, ...a }, s) => /* @__PURE__ */ e.jsx(
    "h2",
    {
      ref: s,
      className: v("text-xl font-semibold text-gray-900", r),
      ...a,
      children: t
    }
  )
), Ca = Ne(
  ({ children: t, className: r, ...a }, s) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: s,
      className: v("text-gray-600", r),
      ...a,
      children: t
    }
  )
), Aa = Ne(
  ({ children: t, className: r, ...a }, s) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: s,
      className: v("mt-6 flex justify-end gap-3", r),
      ...a,
      children: t
    }
  )
);
Ma.displayName = "Dialog";
Ta.displayName = "DialogTitle";
Ca.displayName = "DialogBody";
Aa.displayName = "DialogActions";
or.displayName = "DialogHeader";
const Pa = ({
  orientation: t = "horizontal",
  variant: r = "solid",
  color: a = "neutral",
  size: s = "sm",
  className: o = ""
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
  }, g = Ue(
    "inline-block",
    l[t],
    c[r],
    i[a],
    d[s],
    o
  );
  return /* @__PURE__ */ e.jsx("div", { className: g });
}, Da = {
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
}, _a = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
}, Bt = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
}, Cs = ({
  accept: t = ["*"],
  maxSize: r = 5 * 1024 * 1024,
  // 5MB default
  multiple: a = !1,
  value: s = [],
  onChange: o,
  className: l,
  disabled: c = !1,
  placeholder: i = "Drag and drop files here or click to browse",
  variant: d = "default",
  shadow: g = "none",
  rounded: h = "lg",
  children: m,
  showFileList: b = !0,
  showPlaceholder: f = !0,
  showMaxSize: N = !0,
  icon: w = "mdi:upload"
}) => {
  const [p, x] = J(!1), [y, P] = J(null), D = ge(null), _ = Fe((C) => {
    C.preventDefault(), c || x(!0);
  }, [c]), W = Fe((C) => {
    C.preventDefault(), x(!1);
  }, []), G = Fe((C) => C.size > r ? `File size exceeds ${r / (1024 * 1024)}MB limit` : t[0] !== "*" && !t.some((I) => I.startsWith(".") ? C.name.toLowerCase().endsWith(I.toLowerCase()) : C.type.startsWith(I)) ? `File type not allowed. Allowed types: ${t.join(", ")}` : null, [t, r]), S = Fe((C) => {
    if (C.preventDefault(), x(!1), P(null), c) return;
    const I = Array.from(C.dataTransfer.files), O = [], u = [];
    if (I.forEach((k) => {
      const L = G(k);
      L ? u.push(`${k.name}: ${L}`) : O.push(k);
    }), u.length > 0 && P(u.join(`
`)), O.length > 0) {
      const k = a ? [...s, ...O] : O;
      o == null || o(k);
    }
  }, [c, a, o, G, s]), j = Fe((C) => {
    if (P(null), c || !C.target.files) return;
    const I = Array.from(C.target.files), O = [], u = [];
    if (I.forEach((k) => {
      const L = G(k);
      L ? u.push(`${k.name}: ${L}`) : O.push(k);
    }), u.length > 0 && P(u.join(`
`)), O.length > 0) {
      const k = a ? [...s, ...O] : O;
      o == null || o(k);
    }
    D.current && (D.current.value = "");
  }, [c, a, o, G, s]), E = Fe((C) => {
    const I = [...s];
    I.splice(C, 1), o == null || o(I);
  }, [o, s]), V = (C) => C.type.startsWith("image/") ? /* @__PURE__ */ e.jsx(Z, { icon: "mdi:image", className: "w-5 h-5" }) : C.type.startsWith("text/") ? /* @__PURE__ */ e.jsx(Z, { icon: "mdi:file-document", className: "w-5 h-5" }) : /* @__PURE__ */ e.jsx(Z, { icon: "mdi:file", className: "w-5 h-5" }), R = Da[d];
  return /* @__PURE__ */ e.jsxs("div", { className: Q("w-full", l), children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: Q(
          "p-6 text-center transition-colors",
          !m && [
            "border-2 border-dashed",
            R.border,
            R.bg,
            p && R.active,
            !c && R.hover
          ],
          c && "opacity-50 cursor-not-allowed",
          _a[g],
          Bt[h],
          !m && "cursor-pointer"
        ),
        onDragOver: _,
        onDragLeave: W,
        onDrop: S,
        onClick: () => {
          var C;
          return !c && !m && ((C = D.current) == null ? void 0 : C.click());
        },
        children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: D,
              type: "file",
              accept: t.join(","),
              multiple: a,
              onChange: j,
              className: "hidden",
              disabled: c
            }
          ),
          m ? /* @__PURE__ */ e.jsx("div", { onClick: () => {
            var C;
            return !c && ((C = D.current) == null ? void 0 : C.click());
          }, children: m }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(Z, { icon: w, className: "w-12 h-12 mx-auto mb-4 text-neutral-400" }),
            f && /* @__PURE__ */ e.jsx("p", { className: Q("text-neutral-600", R.text), children: i }),
            N && /* @__PURE__ */ e.jsxs("p", { className: "text-sm text-neutral mt-2", children: [
              "Max file size: ",
              r / (1024 * 1024),
              "MB"
            ] })
          ] })
        ]
      }
    ),
    y && /* @__PURE__ */ e.jsx("p", { className: "mt-2 text-sm text-danger", children: y }),
    b && s.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "mt-4 space-y-2", children: s.map((C, I) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: Q(
          "flex items-center justify-between p-2",
          Bt[h],
          R.bg
        ),
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
            V(C),
            /* @__PURE__ */ e.jsx("span", { className: Q("text-sm", R.text), children: C.name }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-neutral", children: [
              "(",
              (C.size / 1024).toFixed(1),
              " KB)"
            ] })
          ] }),
          !c && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => E(I),
              className: "p-1 text-neutral hover:text-danger",
              children: /* @__PURE__ */ e.jsx(Z, { icon: "mdi:close", className: "w-4 h-4" })
            }
          )
        ]
      },
      `${C.name}-${I}`
    )) })
  ] });
}, Ia = je(
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
), As = ({
  title: t,
  children: r,
  icon: a,
  variant: s = "default",
  rounded: o = "md",
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
  }, g = () => {
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
  return /* @__PURE__ */ e.jsxs("div", { className: v(Ia({ variant: s, rounded: o }), i), children: [
    a && /* @__PURE__ */ e.jsx(Z, { icon: g(), className: v("h-5 w-5 flex-shrink-0", d()) }),
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
        children: /* @__PURE__ */ e.jsx(Z, { icon: "mdi:close", className: "h-5 w-5" })
      }
    )
  ] });
}, vt = "select-dropdown-opened", za = je(
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
), lr = Ne(
  ({
    className: t,
    variant: r = "default",
    size: a = "md",
    rounded: s = "md",
    options: o,
    label: l,
    error: c = !1,
    helperText: i,
    required: d = !1,
    placeholder: g,
    value: h,
    onChange: m,
    disabled: b = !1,
    position: f = "bottom",
    fullWidth: N = !1,
    children: w,
    leftIcon: p,
    rightIcon: x,
    ...y
  }, P) => {
    const [D, _] = J(!1), W = ge(null), G = ge(null), j = `select-${ke.useId().replace(/:/g, "")}`, E = () => {
      if (D && W.current && G.current) {
        const u = W.current.getBoundingClientRect(), k = G.current, L = Te(), T = L.innerHeight - u.bottom, Y = u.top, H = u.bottom + k.offsetHeight + 4 >= L.innerHeight, oe = Y > T, de = H && oe;
        f === "bottom" || f === "top" ? (k.style.position = "fixed", k.style.left = `${u.left}px`, k.style.width = `${u.width}px`, f === "bottom" && de ? (k.style.bottom = `${L.innerHeight - u.top + 4}px`, k.style.top = "auto", k.style.maxHeight = `${Y - 8}px`) : f === "bottom" ? (k.style.top = `${u.bottom + 4}px`, k.style.bottom = "auto", k.style.maxHeight = `${T - 8}px`) : f === "top" && !de ? (k.style.top = `${u.bottom + 4}px`, k.style.bottom = "auto", k.style.maxHeight = `${T - 8}px`) : (k.style.bottom = `${L.innerHeight - u.top + 4}px`, k.style.top = "auto", k.style.maxHeight = `${Y - 8}px`)) : f === "left" ? (k.style.position = "fixed", k.style.right = `${L.innerWidth - u.left + 4}px`, k.style.top = `${u.top}px`, k.style.maxHeight = `${L.innerHeight - u.top - 8}px`) : f === "right" && (k.style.position = "fixed", k.style.left = `${u.right + 4}px`, k.style.top = `${u.top}px`, k.style.maxHeight = `${L.innerHeight - u.top - 8}px`);
      }
    };
    be(() => {
      const u = Te(), k = () => {
        D && E();
      }, L = () => {
        D && E();
      };
      return D && (E(), u.addEventListener("scroll", k, !0), u.addEventListener("resize", L)), () => {
        u.removeEventListener("scroll", k, !0), u.removeEventListener("resize", L);
      };
    }, [D, f]), be(() => {
      const u = ye(), k = (T) => {
        T.detail.id !== j && _(!1);
      }, L = (T) => {
        const Y = T.target, A = W.current, H = G.current;
        A && H && !A.contains(Y) && !H.contains(Y) && _(!1);
      };
      return u.addEventListener(vt, k), u.addEventListener("click", L), () => {
        u.removeEventListener(vt, k), u.removeEventListener("click", L);
      };
    }, [j]);
    const V = () => {
      if (b) return;
      if (D) {
        _(!1);
        return;
      }
      ye().dispatchEvent(
        new CustomEvent(vt, {
          detail: { id: j }
        })
      ), _(!0);
    }, R = () => {
      if (o) {
        const u = o.find((k) => k.value === h);
        return u == null ? void 0 : u.label;
      }
      if (w) {
        const k = It.toArray(w).find(
          (L) => bt(L) && "value" in L.props && L.props.value === h
        );
        return bt(k) ? k.props.children : null;
      }
      return null;
    }, C = (u) => {
      b || (m == null || m(u), _(!1));
    }, I = () => o ? o.map((u) => /* @__PURE__ */ e.jsx(
      it,
      {
        value: u.value,
        disabled: u.disabled,
        selected: u.value === h,
        onClick: () => {
          u.onClick && u.onClick(u.value), C(u.value);
        },
        children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          u.icon,
          u.label
        ] })
      },
      u.value
    )) : w ? It.map(w, (u) => bt(u) && "value" in u.props ? Nr(u, {
      selected: u.props.value === h,
      onClick: () => C(u.props.value)
    }) : null) : null, O = () => {
      if (!D || b) return null;
      const u = /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: G,
          className: v(
            "fixed z-[9999] min-w-[8rem] border border-neutral-200 bg-white py-1 shadow-lg rounded-lg",
            f === "left" || f === "right" ? "w-max" : "w-full"
          ),
          onClick: (L) => L.stopPropagation(),
          style: {
            overflowY: "auto"
          },
          children: I()
        }
      ), k = ye();
      return "body" in k ? Ve(u, k.body) : null;
    };
    return /* @__PURE__ */ e.jsxs("div", { className: v(N ? "w-full" : "inline-block"), ref: P, ...y, children: [
      l && /* @__PURE__ */ e.jsxs(
        "label",
        {
          htmlFor: j,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            l,
            d && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: v("relative", !N && "inline-block"),
          onClick: V,
          children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                id: j,
                ref: W,
                type: "button",
                className: v(
                  za({ variant: c ? "error" : r, size: a, rounded: s, fullWidth: N }),
                  "flex items-center justify-between",
                  b && "cursor-not-allowed opacity-50",
                  p && "pl-10",
                  x && "pr-10",
                  t
                ),
                "aria-haspopup": "listbox",
                "aria-expanded": D,
                "aria-describedby": c ? `${j}-error` : i ? `${j}-helper` : void 0,
                disabled: b,
                children: [
                  p && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ e.jsx(Z, { icon: p, className: "w-4 h-4" }) }),
                  /* @__PURE__ */ e.jsx("span", { className: "flex items-center justify-center text-neutral gap-2 min-w-0 flex-1", children: /* @__PURE__ */ e.jsx("span", { className: "truncate", children: R() || g }) }),
                  x ? /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ e.jsx(Z, { icon: x, className: "w-4 h-4" }) }) : /* @__PURE__ */ e.jsx(
                    Z,
                    {
                      icon: "mdi:chevron-down",
                      className: v("transition-transform flex-shrink-0 ml-2 w-4 h-4", D && "rotate-180")
                    }
                  )
                ]
              }
            ),
            O()
          ]
        }
      ),
      c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: `${j}-error`, children: c }),
      !c && i && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: `${j}-helper`, children: i })
    ] });
  }
);
lr.displayName = "Select";
const Oa = ({
  currentPage: t,
  totalPages: r,
  totalData: a,
  onPageChange: s,
  siblingCount: o = 1,
  className: l,
  perPageOptions: c,
  perPage: i = 10,
  label: d = "",
  onPerPageChange: g
}) => {
  const h = (f, N) => {
    const w = N - f + 1;
    return Array.from({ length: w }, (p, x) => x + f);
  }, b = (() => {
    const f = o * 2 + 3, N = f + 2;
    if (r > N) {
      const w = Math.max(2, t - o), p = Math.min(r - 1, t + o);
      let x = h(w, p);
      const y = w > 2, P = r - p > 1, D = f - (x.length + 1);
      if (y && !P)
        x = [...h(w - D, w - 1), ...x];
      else if (!y && P) {
        const _ = h(p + 1, p + D);
        x = [...x, ..._];
      } else y && P && (x = [...x]);
      return [1, ...x, r];
    }
    return h(1, r);
  })();
  return /* @__PURE__ */ e.jsxs(
    "nav",
    {
      className: Q("flex items-center justify-between space-x-1", l),
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
              lr,
              {
                value: i == null ? void 0 : i.toString(),
                onChange: (f) => g && g(Number(f)),
                size: "sm",
                className: "w-16",
                fullWidth: !1,
                "aria-label": "Items per page",
                children: c.map((f) => /* @__PURE__ */ e.jsx(it, { value: f.toString(), children: f }, f))
              }
            ),
            /* @__PURE__ */ e.jsx("span", { className: "text-neutral-700 text-sm", children: "data per halaman" })
          ] }),
          /* @__PURE__ */ e.jsx(
            Se,
            {
              variant: "ghost",
              onClick: () => s(t - 1),
              disabled: t === 1,
              className: Q(
                "px-3 py-1 rounded-md text-sm",
                t === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
              ),
              children: /* @__PURE__ */ e.jsx(Z, { size: "18", icon: "mdi:chevron-left" })
            }
          ),
          b.map((f, N) => {
            const w = f === t, p = typeof f == "string" && f === "...";
            return /* @__PURE__ */ e.jsx(
              Se,
              {
                variant: "ghost",
                onClick: () => !p && s(f),
                className: Q(
                  "px-3 py-1 rounded-md text-sm",
                  w ? "bg-primary text-white hover:bg-primary" : "text-gray-700",
                  p && "cursor-default"
                ),
                children: f
              },
              N
            );
          }),
          /* @__PURE__ */ e.jsx(
            Se,
            {
              variant: "ghost",
              onClick: () => s(t + 1),
              disabled: t === r,
              className: Q(
                "px-3 py-1 rounded-md text-sm",
                t === r ? "text-gray-400 cursor-not-allowed" : "text-gray-700"
              ),
              children: /* @__PURE__ */ e.jsx(Z, { size: "18", icon: "mdi:chevron-right" })
            }
          )
        ] })
      ]
    }
  );
}, Ps = ({
  label: t,
  checked: r = !1,
  disabled: a = !1,
  onChange: s,
  name: o,
  value: l
}) => {
  const c = (i) => {
    s && s(i.target.checked);
  };
  return /* @__PURE__ */ e.jsxs(
    "label",
    {
      className: Q(
        "inline-flex items-center cursor-pointer",
        a && "opacity-60 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "radio",
            className: Q(
              "w-5 h-5 border-2 rounded-full appearance-none",
              "focus:outline-none focus:ring-2 focus:ring-primary/25",
              r ? "border-primary bg-primary" : "border-gray-300 hover:border-primary",
              a && "cursor-not-allowed"
            ),
            checked: r,
            disabled: a,
            onChange: c,
            name: o,
            value: l
          }
        ),
        t && /* @__PURE__ */ e.jsx("span", { className: "ml-2 text-sm text-gray-700 dark:text-gray-300", children: t })
      ]
    }
  );
}, La = je(
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
), $a = ({
  width: t,
  height: r,
  variant: a = "default",
  rounded: s = "md",
  fullWidth: o = !1,
  className: l
}) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: v(La({ variant: a, rounded: s, fullWidth: o }), l),
    style: {
      width: !o && typeof t == "number" ? `${t}px` : t,
      height: typeof r == "number" ? `${r}px` : r
    }
  }
), Ds = ({
  min: t = 0,
  max: r = 100,
  step: a = 1,
  value: s,
  defaultValue: o = t,
  onChange: l,
  className: c,
  disabled: i = !1,
  showValue: d = !1,
  marks: g = [],
  range: h = !1
}) => {
  const m = h, [b, f] = J(
    s !== void 0 ? s : o !== void 0 ? o : m ? [t, r] : t
  ), [N, w] = J(null), p = ge(null), x = s !== void 0 ? s : b, [y, P] = m ? Array.isArray(x) ? x : [t, r] : [typeof x == "number" ? x : t, r], D = (u) => Math.min(Math.max(u, t), r), _ = (u) => {
    if (i) return;
    let k;
    m && Array.isArray(u) ? k = [D(u[0]), D(u[1])] : !m && typeof u == "number" ? k = D(u) : k = m ? [t, r] : t, s === void 0 && f(k), l == null || l(k);
  }, W = (u) => {
    if (!p.current) return t;
    const k = p.current.getBoundingClientRect(), T = (u - k.left) / k.width, Y = t + (r - t) * T, A = Math.round(Y / a) * a;
    return D(A);
  }, G = (u) => (k) => {
    i || (w(u), k.stopPropagation());
  }, S = (u) => {
    if (!i)
      if (!m)
        w(0), j(u, 0);
      else {
        const k = W(u.clientX), L = Math.abs(k - y), T = Math.abs(k - P), Y = L < T ? 0 : 1;
        w(Y), j(u, Y);
      }
  }, j = ke.useCallback((u, k) => {
    const L = W(u.clientX);
    if (!m)
      _(L);
    else {
      let T = [y, P];
      k === 0 ? T = [Math.min(L, P - a), P] : T = [y, Math.max(L, y + a)], T[0] > T[1] && (T = [T[1], T[0]]), _(T);
    }
  }, [m, y, P, a, _, W]), E = ke.useRef(N);
  E.current = N;
  const V = ke.useCallback(function(u) {
    E.current === null || i || j(u, E.current);
  }, [i, j]), R = ke.useCallback(function() {
    w(null);
  }, []);
  be(() => {
    if (N !== null) {
      const u = Te();
      return u.addEventListener("mousemove", V), u.addEventListener("mouseup", R), () => {
        u.removeEventListener("mousemove", V), u.removeEventListener("mouseup", R);
      };
    }
  }, [N, V, R]);
  const C = (u) => (u - t) / (r - t) * 100, I = C(y), O = C(P);
  return /* @__PURE__ */ e.jsxs("div", { className: Q("relative w-full", c), children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: p,
        className: Q(
          "relative h-2 bg-gray-200 rounded-full cursor-pointer",
          i && "opacity-50 cursor-not-allowed"
        ),
        onMouseDown: S,
        children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute h-full bg-primary rounded-full",
              style: { left: `${m ? I : 0}%`, width: `${m ? O - I : I}%` }
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: Q(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                i && "cursor-not-allowed"
              ),
              style: { left: `${I}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: G(0)
            }
          ),
          m && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: Q(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                i && "cursor-not-allowed"
              ),
              style: { left: `${O}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: G(1)
            }
          )
        ]
      }
    ),
    g.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex justify-between mt-2", children: g.map((u) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "text-xs text-gray",
        style: { left: `${(u.value - t) / (r - t) * 100}%` },
        children: u.label
      },
      u.value
    )) }),
    d && /* @__PURE__ */ e.jsx("div", { className: "mt-2 text-sm text-gray-600", children: m ? `${y} - ${P}` : y })
  ] });
}, Fa = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8"
}, Va = {
  primary: "text-primary",
  warning: "text-warning",
  default: "text-default-400"
}, _s = ({
  rating: t,
  maxRating: r = 5,
  size: a = "md",
  color: s = "primary",
  readOnly: o = !1,
  onRatingChange: l,
  className: c
}) => {
  const [i, d] = J(null), g = (f) => {
    o || d(f);
  }, h = () => {
    o || d(null);
  }, m = (f) => {
    !o && l && l(f);
  }, b = i !== null ? i : t;
  return /* @__PURE__ */ e.jsx("div", { className: v("flex items-center gap-1", c), children: [...Array(r)].map((f, N) => {
    const w = N + 1, p = w <= b, x = i !== null && w <= i;
    return /* @__PURE__ */ e.jsx(
      "button",
      {
        className: v(
          "transition-colors duration-200",
          Fa[a],
          p || x ? Va[s] : "text-default-200",
          !o && "cursor-pointer"
        ),
        onMouseEnter: () => g(w),
        onMouseLeave: h,
        onClick: () => m(w),
        disabled: o,
        "aria-label": `Rate ${w} out of ${r}`,
        children: /* @__PURE__ */ e.jsx(
          Z,
          {
            icon: p || x ? "mdi:star" : "mdi:star-outline",
            className: "w-full h-full"
          }
        )
      },
      N
    );
  }) });
}, Ya = {
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
}, Ba = {
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4"
}, Is = ({
  status: t,
  size: r = "md",
  withLabel: a = !1,
  className: s
}) => {
  const { bgColor: o, label: l } = Ya[t], c = Ba[r];
  return /* @__PURE__ */ e.jsxs("div", { className: v("flex items-center gap-2", s), children: [
    /* @__PURE__ */ e.jsx("div", { className: v("rounded-full animate-pulse", o, c) }),
    a && /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: l })
  ] });
}, ir = (t, r) => {
  if (r) return r;
  switch (t) {
    case "completed":
      return "mdi:check";
    case "active":
      return "mdi:circle-medium";
    default:
      return "mdi:circle-outline";
  }
}, cr = (t) => {
  switch (t) {
    case "completed":
      return "text-white bg-primary ring-4 ring-primary-50";
    case "active":
      return "text-primary bg-primary-50 ring-4 ring-primary-50";
    default:
      return "text-neutral bg-neutral-50 ring-4 ring-neutral-50";
  }
}, Ga = ({
  steps: t,
  activeStep: r,
  className: a,
  variant: s = "default"
}) => /* @__PURE__ */ e.jsx("div", { className: v("flex flex-row items-center w-full justify-between", a), children: t.map((o, l) => {
  const c = l < r ? "completed" : l === r ? "active" : "pending";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "flex items-center flex-1",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: v(
          "flex flex-col items-center z-10",
          s === "default" ? "gap-4" : "gap-2",
          s === "default" ? "px-5" : "px-3"
        ), children: [
          s === "default" && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: v(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                cr(c)
              ),
              children: /* @__PURE__ */ e.jsx(
                Z,
                {
                  icon: ir(c, o.icon),
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
                children: o.label
              }
            ),
            o.description && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-neutral", children: o.description })
          ] })
        ] }),
        l < t.length - 1 && /* @__PURE__ */ e.jsx(
          Pa,
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
}) }), Ha = ({
  steps: t,
  activeStep: r,
  className: a,
  variant: s = "default"
}) => /* @__PURE__ */ e.jsx("div", { className: v("flex flex-col items-start gap-8", a), children: t.map((o, l) => {
  const c = l < r ? "completed" : l === r ? "active" : "pending";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "flex flex-row w-full items-center relative",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: v(
          "flex flex-row items-center z-10",
          s === "default" ? "gap-4" : "gap-2"
        ), children: [
          s === "default" && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: v(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                cr(c)
              ),
              children: /* @__PURE__ */ e.jsx(
                Z,
                {
                  icon: ir(c, o.icon),
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
                children: o.label
              }
            ),
            o.description && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-neutral", children: o.description })
          ] })
        ] }),
        l < t.length - 1 && /* @__PURE__ */ e.jsx(
          "div",
          {
            className: v(
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
}) }), zs = ({
  orientation: t = "horizontal",
  variant: r = "default",
  ...a
}) => t === "vertical" ? /* @__PURE__ */ e.jsx(Ha, { variant: r, ...a }) : /* @__PURE__ */ e.jsx(Ga, { variant: r, ...a }), Os = ({
  label: t,
  checked: r = !1,
  disabled: a = !1,
  onChange: s,
  size: o = "md"
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
      className: Q(
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
              className: Q(
                "block rounded-full transition-colors duration-200 ease-in-out",
                c[o],
                r ? "bg-primary" : "bg-gray-200 dark:bg-gray-700",
                a && "cursor-not-allowed"
              )
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: Q(
                "absolute rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out",
                i[o],
                r ? o === "sm" ? "translate-x-4" : o === "md" ? "translate-x-5" : "translate-x-7" : "translate-x-0.5",
                "top-1/2 -translate-y-1/2"
              )
            }
          )
        ] }),
        t && /* @__PURE__ */ e.jsx("span", { className: "ml-3 text-sm text-gray-700 dark:text-gray-300", children: t })
      ]
    }
  );
}, Ls = ({
  items: t,
  defaultActiveId: r,
  variant: a = "default",
  size: s = "md",
  className: o,
  tabListClassName: l,
  tabClassName: c,
  contentClassName: i,
  onChange: d
}) => {
  var x, y;
  const [g, h] = J(r || ((x = t[0]) == null ? void 0 : x.id) || ""), m = ke.useRef(null), [b, f] = J({ left: 0, width: 0 });
  ke.useEffect(() => {
    var P;
    if (a === "active-underline" && m.current) {
      const D = m.current.getBoundingClientRect(), _ = (P = m.current.parentElement) == null ? void 0 : P.getBoundingClientRect();
      _ && f({
        left: D.left - _.left,
        width: D.width
      });
    }
  }, [a, t, g]), ke.useEffect(() => {
    if (a === "active-underline") {
      const P = () => {
        var D;
        if (m.current) {
          const _ = m.current.getBoundingClientRect(), W = (D = m.current.parentElement) == null ? void 0 : D.getBoundingClientRect();
          W && f({
            left: _.left - W.left,
            width: _.width
          });
        }
      };
      return window.addEventListener("resize", P), () => window.removeEventListener("resize", P);
    }
  }, [a, t, g]);
  const N = Fe((P) => {
    h(P), d == null || d(P);
  }, [d]), w = () => {
    switch (s) {
      case "sm":
        return "text-sm px-3 py-1.5";
      case "lg":
        return "text-lg px-6 py-3";
      default:
        return "text-base px-4 py-2";
    }
  }, p = (P, D) => {
    const _ = Q(
      "flex items-center space-x-2 transition-colors",
      "font-medium",
      w(),
      D && "opacity-50 cursor-not-allowed",
      !D && "cursor-pointer"
    );
    switch (a) {
      case "pills":
        return Q(
          _,
          "rounded-full",
          P ? "bg-primary text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        );
      case "underline":
        return Q(
          _,
          "border-b-2",
          P ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
      case "active-underline":
        return Q(
          _,
          "border-b-0",
          P ? "text-primary" : "text-gray-600 dark:text-gray-300 hover:text-primary"
        );
      default:
        return Q(
          _,
          "border-b-2",
          P ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: Q("w-full", o), children: [
    /* @__PURE__ */ e.jsxs("div", { className: Q(
      a === "active-underline" ? "relative" : "",
      "flex space-x-1",
      a === "pills" && "space-x-2 border-b-0",
      a !== "active-underline" && "border-b border-gray-200 dark:border-gray-700",
      l
    ), children: [
      t.map((P) => {
        const D = P.id === g, _ = !!P.disabled;
        return /* @__PURE__ */ e.jsxs(
          "button",
          {
            ref: a === "active-underline" && D ? m : void 0,
            onClick: () => !_ && N(P.id),
            disabled: _,
            className: Q(
              p(D, _),
              c
            ),
            children: [
              P.icon && /* @__PURE__ */ e.jsx(
                Z,
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
          style: { left: b.left, width: b.width }
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: Q("mt-4", i), children: (y = t.find((P) => P.id === g)) == null ? void 0 : y.content })
  ] });
}, at = ({
  variant: t = "p",
  children: r,
  className: a,
  as: s
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
  return /* @__PURE__ */ e.jsx(c, { className: v("text-gray-900", o[t], a), children: r });
}, yt = "timepicker-dropdown-opened", Wa = je(
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
), dr = Ne(
  ({
    value: t,
    onChange: r,
    use24Hour: a = !1,
    variant: s = "default",
    size: o = "md",
    rounded: l = "md",
    disabled: c = !1,
    errorText: i,
    helperText: d,
    label: g,
    required: h = !1,
    labelPlacement: m = "top",
    fullWidth: b = !1,
    className: f,
    placeholder: N = "Select time",
    leftIcon: w,
    rightIcon: p,
    valueFormatter: x,
    closeOnSelect: y = !0,
    ...P
  }, D) => {
    const [_, W] = J(!1), [G, S] = J(t || ""), [j, E] = J(0), [V, R] = J(0), [C, I] = J(!0), O = ge(null), u = ge(null), k = ge(null), T = `timepicker-${ke.useId().replace(/:/g, "")}`, Y = () => {
      if (!_ || !u.current || !k.current) return;
      const B = u.current.getBoundingClientRect(), te = k.current, Pe = Te().innerHeight - B.bottom;
      te.style.top = `${B.bottom + 4}px`, te.style.bottom = "auto", te.style.left = `${B.left}px`, te.style.maxHeight = `${Pe - 8}px`, te.style.width = `${B.width}px`;
    };
    be(() => {
      const B = Te(), te = ye(), Ce = () => {
        _ && Y();
      }, Pe = () => {
        _ && Y();
      }, Ye = (ce) => {
        ce.detail.id !== T && W(!1);
      }, re = (ce) => {
        const pe = ce.target;
        O.current && k.current && !O.current.contains(pe) && !k.current.contains(pe) && W(!1);
      };
      return _ && (Y(), B.addEventListener("scroll", Ce, !0), B.addEventListener("resize", Pe)), te.addEventListener(yt, Ye), te.addEventListener("mousedown", re), () => {
        B.removeEventListener("scroll", Ce, !0), B.removeEventListener("resize", Pe), te.removeEventListener(yt, Ye), te.removeEventListener("mousedown", re);
      };
    }, [_, T]);
    const A = () => {
      c || (_ || ye().dispatchEvent(
        new CustomEvent(yt, {
          detail: { id: T }
        })
      ), W(!_));
    };
    be(() => {
      if (t) {
        S(t);
        const [B, te] = t.split(":").map(Number);
        a ? E(B) : (E(B % 12 || 12), I(B < 12)), R(te);
      }
    }, [t, a]);
    const H = () => {
      const te = `${(a || C ? j : j + 12).toString().padStart(2, "0")}:${V.toString().padStart(2, "0")}`;
      S(te), r == null || r(te), y && W(!1);
    }, oe = () => a ? Array.from({ length: 24 }, (B, te) => te) : Array.from({ length: 12 }, (B, te) => te + 1), de = () => Array.from({ length: 60 }, (B, te) => te), he = x ? x(G) : G, ue = ye();
    return "body" in ue ? /* @__PURE__ */ e.jsxs("div", { ref: O, className: v("relative", b && "w-full", f), children: [
      g && /* @__PURE__ */ e.jsxs(
        "label",
        {
          className: v(
            "block text-sm font-medium text-gray-700 mb-1",
            m === "left" && "inline-block mr-2"
          ),
          children: [
            g,
            h && /* @__PURE__ */ e.jsx("span", { className: "text-red ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: u,
          className: "relative",
          onClick: A,
          children: [
            w && /* @__PURE__ */ e.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ e.jsx(Z, { icon: w, size: 20 }) }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                ref: D,
                type: "text",
                value: he,
                placeholder: N,
                readOnly: !0,
                className: v(
                  Wa({ variant: s, size: o, rounded: l, fullWidth: b }),
                  w && "pl-10",
                  p && "pr-10",
                  "text-left"
                ),
                disabled: c,
                ...P
              }
            ),
            p && /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ e.jsx(Z, { icon: p, size: 20 }) })
          ]
        }
      ),
      _ && Ve(
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: k,
            className: "fixed z-[9999] w-fit rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            onClick: (B) => B.stopPropagation(),
            children: /* @__PURE__ */ e.jsxs("div", { className: "p-0", children: [
              /* @__PURE__ */ e.jsxs(Rt, { variant: "ghost", className: v(
                "flex mx-2 my-1 p-0",
                a ? "justify-start gap-8" : "justify-start gap-4"
              ), children: [
                /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2", children: oe().map((B) => /* @__PURE__ */ e.jsx(
                  Se,
                  {
                    variant: "ghost",
                    onClick: () => E(B),
                    className: v(j === B && "bg-primary text-white"),
                    children: B.toString().padStart(2, "0")
                  },
                  B
                )) }) }) }),
                /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-2", children: de().map((B) => /* @__PURE__ */ e.jsx(
                  Se,
                  {
                    variant: "ghost",
                    onClick: () => R(B),
                    className: v(V === B && "bg-primary text-white"),
                    children: B.toString().padStart(2, "0")
                  },
                  B
                )) }) }) }),
                !a && /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ e.jsx(
                    Se,
                    {
                      variant: "ghost",
                      onClick: () => I(!0),
                      className: v(C && "bg-primary text-white"),
                      children: "AM"
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    Se,
                    {
                      variant: "ghost",
                      onClick: () => I(!1),
                      className: v(!C && "bg-primary text-white"),
                      children: "PM"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx("div", { className: "mb-2 mx-2", children: /* @__PURE__ */ e.jsx(
                Se,
                {
                  variant: "primary",
                  onClick: H,
                  size: "sm",
                  fullWidth: !0,
                  children: "Select"
                }
              ) })
            ] })
          }
        ),
        ue.body
      ),
      i && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-danger-600", children: i }),
      d && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-gray", children: d })
    ] }) : null;
  }
);
dr.displayName = "PrimitiveTimePicker";
const Ua = ({
  value: t,
  onChange: r,
  valueFormatter: a,
  closeOnSelect: s,
  ...o
}) => /* @__PURE__ */ e.jsx(
  dr,
  {
    value: t,
    onChange: r,
    valueFormatter: a,
    closeOnSelect: s,
    ...o
  }
);
Ua.displayName = "TimePicker";
const Ka = je(
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
), qa = je(
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
), Za = Ne(
  ({
    checked: t = !1,
    onCheckedChange: r,
    variant: a = "primary",
    size: s = "md",
    label: o,
    required: l = !1,
    helperText: c,
    errorText: i,
    error: d = !1,
    className: g,
    ...h
  }, m) => {
    const b = ke.useId(), f = `${b}-helper`, N = `${b}-error`;
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
            ref: m,
            className: v(Ka({ variant: d ? "danger" : a, size: s }), g),
            "aria-describedby": d ? N : c ? f : void 0,
            "aria-invalid": d,
            "aria-required": l,
            ...h,
            children: /* @__PURE__ */ e.jsx(
              "span",
              {
                "data-state": t ? "checked" : "unchecked",
                className: v(
                  qa({ size: s }),
                  t ? "translate-x-5" : "translate-x-1"
                )
              }
            )
          }
        ),
        o && /* @__PURE__ */ e.jsxs(
          "label",
          {
            htmlFor: b,
            className: "text-sm text-neutral-900",
            children: [
              o,
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
Za.displayName = "Toggle";
const Ja = je(
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
), Xa = je("absolute w-2 h-2 transform rotate-45", {
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
}), $s = ({
  content: t,
  children: r,
  position: a = "top",
  delay: s = 0,
  className: o,
  color: l = "light",
  size: c = "md",
  isOpen: i,
  onOpenChange: d,
  trigger: g = "hover"
}) => {
  const [h, m] = J(!1), [b, f] = J({ top: 0, left: 0 }), N = ge(null), w = ge(null), p = ge(), x = i !== void 0, y = x ? i : h, P = () => {
    if (!N.current || !w.current) return;
    const S = w.current.getBoundingClientRect(), j = N.current.getBoundingClientRect(), E = Te(), V = E.scrollX || E.pageXOffset, R = E.scrollY || E.pageYOffset;
    let C = 0, I = 0;
    const O = 8;
    switch (a) {
      case "top":
        C = S.top + R - j.height - O, I = S.left + V + (S.width - j.width) / 2;
        break;
      case "bottom":
        C = S.bottom + R + O, I = S.left + V + (S.width - j.width) / 2;
        break;
      case "left":
        C = S.top + R + (S.height - j.height) / 2, I = S.left + V - j.width - O;
        break;
      case "right":
        C = S.top + R + (S.height - j.height) / 2, I = S.right + V + O;
        break;
    }
    const u = E.innerWidth, k = E.innerHeight;
    I < 0 && (I = 0), I + j.width > u && (I = u - j.width), C < 0 && (C = 0), C + j.height > k && (C = k - j.height), f({ top: C, left: I });
  };
  be(() => {
    if (y) {
      P();
      const S = Te();
      S.addEventListener("scroll", P, !0), S.addEventListener("resize", P);
    }
    return () => {
      const S = Te();
      S.removeEventListener("scroll", P, !0), S.removeEventListener("resize", P);
    };
  }, [y, a]);
  const D = () => {
    x ? d == null || d(!0) : p.current = setTimeout(() => {
      m(!0);
    }, s);
  }, _ = () => {
    p.current && clearTimeout(p.current), x ? d == null || d(!1) : m(!1);
  }, W = (S) => {
    S.stopPropagation(), g === "click" && (x ? d == null || d(!i) : m(!h));
  };
  be(() => {
    const S = (j) => {
      g === "click" && N.current && !N.current.contains(j.target) && w.current && !w.current.contains(j.target) && _();
    };
    return y && document.addEventListener("click", S), () => {
      document.removeEventListener("click", S);
    };
  }, [y, g]);
  const G = () => {
    if (!y) return null;
    const S = ye();
    return "body" in S ? Ve(
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: N,
          className: v(Ja({ color: l, size: c }), o),
          style: {
            top: `${b.top}px`,
            left: `${b.left}px`
          },
          children: [
            t,
            /* @__PURE__ */ e.jsx(
              "div",
              {
                className: v(
                  Xa({ color: l }),
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
      S.body
    ) : null;
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: w,
      className: "relative inline-block",
      onMouseEnter: g === "hover" ? D : void 0,
      onMouseLeave: g === "hover" ? _ : void 0,
      onClick: W,
      children: [
        r,
        G()
      ]
    }
  ) });
}, Qa = je(
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
), es = {
  sm: 24,
  md: 36,
  lg: 48
}, ts = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
  info: "bg-info"
}, rs = {
  primary: "#007C99",
  // Tailwind primary
  secondary: "#CEEAE7",
  success: "#00B37D",
  warning: "#F59E0B",
  danger: "#EF4444",
  info: "#0EA5E9"
}, as = ke.forwardRef(
  ({
    className: t,
    variant: r = "bar",
    color: a = "primary",
    size: s = "md",
    value: o = 0,
    isIndeterminate: l = !1,
    showValue: c = !1,
    label: i,
    rounded: d = "full",
    icon: g,
    ...h
  }, m) => {
    const b = Math.min(Math.max(o, 0), 100), f = es[s], N = s === "sm" ? 2 : s === "md" ? 3 : 4, w = (f - N) / 2, p = 2 * Math.PI * w, x = p - b / 100 * p;
    let y = "";
    return r === "loading" ? y = "rounded-full" : d ? y = d === "none" ? "" : `rounded-${d}` : y = "rounded-md", r === "circular" ? /* @__PURE__ */ e.jsxs("div", { className: "inline-flex flex-col items-center gap-2", children: [
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
                  strokeWidth: N,
                  stroke: "#e5e7eb",
                  fill: "transparent",
                  r: w,
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
                  strokeWidth: N,
                  strokeDasharray: p,
                  strokeDashoffset: l ? 0 : x,
                  strokeLinecap: "round",
                  stroke: rs[a],
                  fill: "transparent",
                  r: w,
                  cx: f / 2,
                  cy: f / 2
                }
              )
            ]
          }
        ),
        g && /* @__PURE__ */ e.jsx("span", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ e.jsx(Z, { icon: g, size: f * 0.5 }) }),
        c && !l && !g && /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 flex items-center justify-center text-xs font-medium", children: [
          Math.round(b),
          "%"
        ] })
      ] }),
      i && /* @__PURE__ */ e.jsx("span", { className: "text-sm text-neutral-600", children: i })
    ] }) : /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: m,
          className: v(Qa({ variant: r === "loading" ? "bar" : r, size: s }), y, t),
          role: "progressbar",
          "aria-valuenow": l ? void 0 : b,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          ...h,
          children: /* @__PURE__ */ e.jsx(
            "div",
            {
              className: v(
                "h-full transition-all duration-300 ease-in-out",
                l ? "animate-progress-indeterminate" : "",
                ts[a],
                y
              ),
              style: {
                width: l ? "100%" : `${b}%`
              }
            }
          )
        }
      ),
      (c || i) && /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between text-xs text-neutral-600", children: [
        i && /* @__PURE__ */ e.jsx("span", { children: i }),
        c && !l && /* @__PURE__ */ e.jsxs("span", { children: [
          Math.round(b),
          "%"
        ] })
      ] })
    ] });
  }
);
as.displayName = "Progress";
const wt = [
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
], ss = je(
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
), ns = Ne(
  ({
    className: t,
    variant: r = "default",
    size: a = "md",
    rounded: s = "md",
    error: o = !1,
    errorText: l,
    helperText: c,
    label: i,
    required: d = !1,
    fullWidth: g = !1,
    value: h = "",
    onChange: m,
    disabled: b = !1,
    defaultCountry: f = "id",
    placeholder: N = "Enter phone number",
    ...w
  }) => {
    const [p, x] = J(!1), [y, P] = J(
      () => wt.find((T) => T.iso === f) || wt[0]
    ), [D, _] = J(""), [W, G] = J(() => {
      const T = y.code;
      return h.startsWith(T) ? h.slice(T.length) : h;
    }), S = ge(null), j = ge(null), E = ke.useId(), V = `${E}-helper`, R = `${E}-error`, C = wt.filter(
      (T) => T.name.toLowerCase().includes(D.toLowerCase()) || T.code.includes(D)
    ), I = ge(null), O = () => {
      if (p && S.current && j.current) {
        const T = S.current.getBoundingClientRect(), Y = j.current, A = typeof window < "u" ? window : { innerHeight: 0 }, H = A.innerHeight - T.bottom, oe = T.top, he = T.bottom + (Y.offsetHeight || 0) + 4 >= A.innerHeight, ue = oe > H, B = he && ue;
        Y.style.position = "fixed", Y.style.left = `${T.left}px`, Y.style.minWidth = `${T.width}px`, Y.style.maxWidth = "340px", Y.style.width = "auto", B ? (Y.style.bottom = `${A.innerHeight - T.top + 4}px`, Y.style.top = "auto", Y.style.maxHeight = `${oe - 8}px`) : (Y.style.top = `${T.bottom + 4}px`, Y.style.bottom = "auto", Y.style.maxHeight = `${H - 8}px`);
      }
    };
    be(() => {
      const T = typeof window < "u" ? window : void 0, Y = () => {
        p && O();
      }, A = () => {
        p && O();
      };
      return p && (O(), T == null || T.addEventListener("scroll", Y, !0), T == null || T.addEventListener("resize", A)), () => {
        T == null || T.removeEventListener("scroll", Y, !0), T == null || T.removeEventListener("resize", A);
      };
    }, [p]), be(() => {
      if (!p) return;
      const T = (Y) => {
        const A = Y.target;
        S.current && j.current && !S.current.contains(A) && !j.current.contains(A) && x(!1);
      };
      return document.addEventListener("click", T), () => document.removeEventListener("click", T);
    }, [p]);
    const u = (T) => {
      P(T), x(!1), _("");
      const Y = T.code + W;
      m == null || m(Y);
    }, k = (T) => {
      const Y = T.target.value.replace(/[^\d]/g, "");
      G(Y);
      const A = y.code + Y;
      m == null || m(A);
    }, L = v(
      ss({
        variant: o ? "error" : r,
        size: a,
        rounded: s,
        fullWidth: g
      }),
      "!w-full"
    );
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: I,
        className: v(g ? "w-full" : "inline-block", t),
        ...w,
        children: [
          i && /* @__PURE__ */ e.jsxs("label", { htmlFor: E, className: "mb-1.5 block text-sm text-neutral-900", children: [
            i,
            d && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: v("relative", !g && "inline-block"), children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex", children: [
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  ref: S,
                  onClick: () => !b && x(!p),
                  className: v(
                    L,
                    "flex items-center gap-2 rounded-r-none justify-between max-w-[100px]",
                    b && "cursor-not-allowed opacity-50"
                  ),
                  children: [
                    /* @__PURE__ */ e.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ e.jsx(Z, { icon: y.flag, className: "w-5 h-5" }),
                      /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: y.code })
                    ] }),
                    /* @__PURE__ */ e.jsx(
                      Z,
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
                  id: E,
                  value: W,
                  onChange: k,
                  disabled: b,
                  className: v(
                    L,
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
                  ref: j,
                  className: v(
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
                        value: D,
                        onChange: (T) => _(T.target.value),
                        placeholder: "Search countries...",
                        className: "w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:border-primary-300"
                      }
                    ) }),
                    /* @__PURE__ */ e.jsx("div", { className: "max-h-[300px] overflow-y-auto", children: C.map((T) => /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => u(T),
                        className: v(
                          "w-full px-3 py-2 text-sm text-left hover:bg-primary-50 cursor-pointer",
                          y.iso === T.iso && "bg-primary-50"
                        ),
                        children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ e.jsx(Z, { icon: T.flag, className: "w-5 h-5" }),
                          /* @__PURE__ */ e.jsx("span", { className: "text-sm font-medium", children: T.code }),
                          /* @__PURE__ */ e.jsx("span", { className: "text-sm text-neutral-600", children: T.name })
                        ] })
                      },
                      T.iso + T.code
                    )) })
                  ]
                }
              ),
              typeof document < "u" ? document.body : document
            )
          ] }),
          o && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger", id: R, children: l }),
          !o && c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral", id: V, children: c })
        ]
      }
    );
  }
);
ns.displayName = "PhoneInput";
const os = je(
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
), Fs = ({
  content: t,
  children: r,
  position: a = "bottom",
  color: s = "light",
  customColor: o,
  rounded: l = "md",
  shadow: c = "md",
  className: i,
  trigger: d = "click",
  autoFocus: g = !1,
  isOpen: h,
  onOpenChange: m,
  closeOnClickOutside: b = !0
}) => {
  const [f, N] = J(!1), [w, p] = J({ top: 0, left: 0 }), x = ge(null), y = ge(null), P = h !== void 0, D = P ? h : f, _ = () => {
    if (!x.current || !y.current) return;
    const E = y.current.getBoundingClientRect(), V = x.current.getBoundingClientRect(), R = Te(), C = R.scrollX || R.pageXOffset, I = R.scrollY || R.pageYOffset;
    let O = 0, u = 0;
    const k = 8;
    switch (a) {
      case "top":
        O = E.top + I - V.height - k, u = E.left + C + (E.width - V.width) / 2;
        break;
      case "bottom":
        O = E.bottom + I + k, u = E.left + C + (E.width - V.width) / 2;
        break;
      case "left":
        O = E.top + I + (E.height - V.height) / 2, u = E.left + C - V.width - k;
        break;
      case "right":
        O = E.top + I + (E.height - V.height) / 2, u = E.right + C + k;
        break;
    }
    const L = R.innerWidth, T = R.innerHeight;
    u < 0 && (u = 0), u + V.width > L && (u = L - V.width), O < 0 && (O = 0), O + V.height > T && (O = T - V.height), p({ top: O, left: u });
  };
  be(() => {
    if (D) {
      _();
      const E = Te();
      E.addEventListener("scroll", _, !0), E.addEventListener("resize", _);
    }
    return () => {
      const E = Te();
      E.removeEventListener("scroll", _, !0), E.removeEventListener("resize", _);
    };
  }, [D, a]), be(() => {
    if (D && g && x.current) {
      const E = x.current.querySelector(
        "input, select, textarea, button, [tabindex]:not([tabindex='-1'])"
      );
      E && E.focus();
    }
  }, [D, g]);
  const W = () => {
    P ? m == null || m(!0) : N(!0);
  }, G = () => {
    P ? m == null || m(!1) : N(!1);
  }, S = (E) => {
    E.stopPropagation(), d === "click" && (P ? m == null || m(!h) : N(!f));
  };
  be(() => {
    if (!b) return;
    const E = (V) => {
      d === "click" && x.current && !x.current.contains(V.target) && y.current && !y.current.contains(V.target) && G();
    };
    return D && document.addEventListener("pointerdown", E, !0), () => {
      document.removeEventListener("pointerdown", E, !0);
    };
  }, [D, d, b]);
  const j = () => {
    if (!D) return null;
    const E = ye();
    return "body" in E ? Ve(
      /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: x,
          className: v(
            os({ color: s, rounded: l, shadow: c }),
            s === "custom" && o ? o : "",
            i
          ),
          style: {
            top: `${w.top}px`,
            left: `${w.left}px`,
            background: s === "custom" && o ? o : void 0
          },
          tabIndex: -1,
          children: t
        }
      ),
      E.body
    ) : null;
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: y,
      className: "relative inline-block",
      onMouseEnter: d === "hover" ? W : void 0,
      onMouseLeave: d === "hover" ? G : void 0,
      onClick: S,
      tabIndex: 0,
      children: [
        r,
        j()
      ]
    }
  ) });
}, ls = je("flex items-center text-sm", {
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
}), is = Ne(
  ({
    className: t,
    variant: r = "default",
    size: a = "md",
    items: s,
    separator: o = /* @__PURE__ */ e.jsx(Z, { icon: "mdi:slash-forward", className: "h-4 w-4 flex-shrink-0" }),
    activeLastItem: l = !0,
    ...c
  }, i) => /* @__PURE__ */ e.jsx(
    "nav",
    {
      ref: i,
      className: v(ls({ variant: r, size: a }), t),
      "aria-label": "Breadcrumb",
      ...c,
      children: /* @__PURE__ */ e.jsx("ol", { className: "flex flex-wrap items-center gap-1.5", children: s.map((d, g) => {
        const h = g === s.length - 1, m = h && l;
        return /* @__PURE__ */ e.jsxs(
          "li",
          {
            className: v(
              "flex items-center gap-1.5",
              m && "text-primary font-medium"
            ),
            children: [
              d.icon && /* @__PURE__ */ e.jsx(
                Z,
                {
                  icon: d.icon,
                  className: v(
                    "flex-shrink-0",
                    a === "sm" && "h-3.5 w-3.5",
                    a === "md" && "h-4 w-4",
                    a === "lg" && "h-5 w-5"
                  )
                }
              ),
              d.href && !m ? /* @__PURE__ */ e.jsx(
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
                m && "text-primary"
              ), children: d.label }),
              !h && /* @__PURE__ */ e.jsx("span", { className: v(
                "text-neutral-400 flex-shrink-0",
                a === "sm" && "scale-90",
                a === "lg" && "scale-110"
              ), children: o })
            ]
          },
          d.label
        );
      }) })
    }
  )
);
is.displayName = "Breadcrumbs";
const ur = (t) => {
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
}, cs = ({ schema: t, variant: r = "primary" }) => {
  const a = [{ name: "no", label: "No.", accessorKey: "no", type: "number" }, ...t], s = ur(r);
  return /* @__PURE__ */ e.jsx("div", { className: "bg-white rounded-md", children: /* @__PURE__ */ e.jsx("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full border-spacing-0 border-separate", children: [
    /* @__PURE__ */ e.jsx("thead", { className: v("border-2 sticky top-0 z-10 rounded-t-md", s.border), children: /* @__PURE__ */ e.jsx("tr", { children: a.map((o, l) => /* @__PURE__ */ e.jsx(
      "th",
      {
        className: v(
          "text-sm text-wrap border-y p-4 text-left",
          s.header,
          {
            "rounded-tl-md": l === 0,
            "rounded-tr-md": l === a.length - 1
          }
        ),
        children: o.label
      },
      l
    )) }) }),
    /* @__PURE__ */ e.jsx("tbody", { className: "max-h-[50vh]", children: [...Array(5)].map((o, l) => /* @__PURE__ */ e.jsx(
      "tr",
      {
        className: v("p-3", {
          [s.stripe]: l % 2 !== 0,
          "bg-white": l % 2 === 0
        }),
        children: a.map((c, i) => /* @__PURE__ */ e.jsx(
          "td",
          {
            className: "text-left text-nowrap text-sm p-4",
            children: /* @__PURE__ */ e.jsx($a, { className: "h-10 w-full rounded-md" })
          },
          `${l}-${i}`
        ))
      },
      l
    )) })
  ] }) }) });
}, Vs = ({
  schema: t,
  data: r,
  className: a,
  headerClassName: s,
  rowClassName: o,
  cellClassName: l,
  emptyState: c,
  isLoading: i,
  loadingState: d,
  showIndex: g = !1,
  onPageChange: h,
  onPageSizeChange: m,
  onSortChange: b,
  onRowClick: f,
  showPagination: N = !1,
  variant: w = "primary",
  meta: p = {
    current_page: 1,
    total_page: 1,
    total_data: 0,
    limit_number: 10
  }
}) => {
  const [x, y] = J(() => {
    const G = t.find((S) => S.sortable && S.sort);
    return G ? [{
      id: G.accessorKey.toString(),
      desc: G.sort === "desc"
    }] : [];
  }), P = ke.useMemo(() => {
    const G = t.map((S) => ({
      accessorKey: S.accessorKey,
      header: S.label,
      enableSorting: !!S.sortable,
      cell: S.render ? ({ row: j }) => {
        var E;
        return (E = S.render) == null ? void 0 : E.call(S, j.original[S.accessorKey], j.original, j.index);
      } : ({ row: j }) => j.original[S.accessorKey] || "-",
      meta: {
        align: S.align || "left"
      }
    }));
    return g ? [{
      accessorKey: "no",
      header: "No.",
      enableSorting: !1,
      cell: ({ row: S }) => (p.current_page - 1) * p.limit_number + S.index + 1,
      meta: {
        align: "left"
      }
    }, ...G] : G;
  }, [t, g, p]), D = Rr({
    data: r,
    columns: P,
    state: {
      sorting: x
    },
    onSortingChange: (G) => {
      const S = typeof G == "function" ? G(x) : G;
      y(S), S.length > 0 ? b == null || b(S[0].desc ? "desc" : "asc", S[0].id) : b == null || b("", "");
    },
    getCoreRowModel: Cr(),
    getSortedRowModel: Tr(),
    getPaginationRowModel: Mr(),
    manualPagination: !0,
    pageCount: p.total_page
  }), _ = ur(w);
  if (i)
    return d || /* @__PURE__ */ e.jsx(cs, { schema: t, variant: w });
  const W = (G, S, j) => {
    const E = G.target;
    E.tagName === "BUTTON" || E.tagName === "A" || E.tagName === "INPUT" || E.tagName === "SELECT" || E.closest("button") !== null || E.closest("a") !== null || E.closest("input") !== null || E.closest("select") !== null || f == null || f(S, j);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "bg-white rounded-md", children: [
    /* @__PURE__ */ e.jsx("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ e.jsxs("table", { className: v("w-full border-spacing-0 border-separate", a), children: [
      /* @__PURE__ */ e.jsx("thead", { className: v("border-2 sticky top-0 z-10 rounded-t-md", _.border), children: D.getHeaderGroups().map((G) => /* @__PURE__ */ e.jsx("tr", { children: G.headers.map((S, j) => {
        var E, V, R;
        return /* @__PURE__ */ e.jsx(
          "th",
          {
            className: v(
              "text-sm text-wrap border-y p-4",
              _.header,
              {
                "cursor-pointer": S.column.getCanSort(),
                "rounded-tl-md": j === 0,
                "rounded-tr-md": j === G.headers.length - 1,
                "text-left": ((E = S.column.columnDef.meta) == null ? void 0 : E.align) === "left",
                "text-center": ((V = S.column.columnDef.meta) == null ? void 0 : V.align) === "center",
                "text-right": ((R = S.column.columnDef.meta) == null ? void 0 : R.align) === "right"
              },
              s
            ),
            onClick: S.column.getCanSort() ? S.column.getToggleSortingHandler() : void 0,
            children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e.jsx("span", { className: v({
                "font-semibold": j === 0
              }), children: zt(S.column.columnDef.header, S.getContext()) }),
              S.column.getCanSort() && /* @__PURE__ */ e.jsx(
                Z,
                {
                  icon: S.column.getIsSorted() ? S.column.getIsSorted() === "desc" ? "mdi:keyboard-arrow-up" : "mdi:keyboard-arrow-down" : "mdi:unfold-more-horizontal",
                  className: v("h-4 w-4", {
                    "text-white": w !== "ghost",
                    "text-gray-700": w === "ghost"
                  })
                }
              )
            ] })
          },
          S.id
        );
      }) }, G.id)) }),
      /* @__PURE__ */ e.jsx("tbody", { className: "max-h-[50vh]", children: D.getRowModel().rows.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx(
        "td",
        {
          colSpan: D.getAllColumns().length,
          className: v(
            "text-center border h-full w-full rounded-b-md"
          ),
          children: c || /* @__PURE__ */ e.jsxs("div", { className: "flex mx-auto w-full text-center justify-center gap-3 items-center", children: [
            /* @__PURE__ */ e.jsx("p", { children: "Data Not Found" }),
            /* @__PURE__ */ e.jsx(Z, { icon: "mdi:face-frown-open", size: 34 })
          ] })
        }
      ) }) : D.getRowModel().rows.map((G, S) => /* @__PURE__ */ e.jsx(
        "tr",
        {
          className: v(
            "p-3",
            _.row,
            {
              [_.stripe]: S % 2 !== 0,
              "bg-white": S % 2 === 0,
              "cursor-pointer": f
            },
            o
          ),
          onClick: (j) => W(j, G.original, S),
          children: G.getVisibleCells().map((j) => {
            var E, V, R;
            return /* @__PURE__ */ e.jsx(
              "td",
              {
                className: v(
                  "px-4 py-3 text-sm text-gray-900",
                  {
                    "text-left": ((E = j.column.columnDef.meta) == null ? void 0 : E.align) === "left",
                    "text-center": ((V = j.column.columnDef.meta) == null ? void 0 : V.align) === "center",
                    "text-right": ((R = j.column.columnDef.meta) == null ? void 0 : R.align) === "right"
                  },
                  l
                ),
                children: zt(j.column.columnDef.cell, j.getContext())
              },
              j.id
            );
          })
        },
        G.id
      )) })
    ] }) }),
    !!r.length && N && /* @__PURE__ */ e.jsx("div", { className: "p-4 bg-white rounded-b-md", children: /* @__PURE__ */ e.jsx(
      Oa,
      {
        currentPage: p.current_page,
        totalPages: p.total_page,
        totalData: p.total_data,
        onPageChange: h || (() => {
        }),
        perPage: p.limit_number,
        onPerPageChange: m || (() => {
        }),
        perPageOptions: [5, 10, 20, 50, 100],
        siblingCount: 1
      }
    ) })
  ] });
}, ds = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}, fr = Ne(
  ({
    className: t,
    variant: r = "default",
    rounded: a = "lg",
    title: s,
    description: o,
    onClose: l,
    icon: c,
    showIcon: i = !0,
    showClose: d = !0,
    ...g
  }, h) => {
    const b = c || (i ? {
      default: "mdi:information",
      success: "mdi:check-circle",
      error: "mdi:alert-circle",
      warning: "mdi:alert",
      info: "mdi:information"
    }[r] : void 0), f = s || o;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: h,
        className: v(
          "flex",
          o ? "items-start gap-3 p-4" : "items-center gap-2 py-2.5 px-3",
          "border border-gray-200",
          ds[a],
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
          b && /* @__PURE__ */ e.jsx(
            Z,
            {
              icon: b,
              className: v(
                "flex-shrink-0",
                o ? "h-5 w-5 mt-0.5" : "h-4 w-4",
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
                className: v("text-sm font-medium leading-5", {
                  "text-gray-900": r === "default",
                  "text-success-900": r === "success",
                  "text-danger-900": r === "error",
                  "text-warning-900": r === "warning",
                  "text-info-900": r === "info"
                }),
                children: s
              }
            ),
            o && /* @__PURE__ */ e.jsx(
              "p",
              {
                className: v(s ? "mt-1" : "", "text-sm leading-5", {
                  "text-gray": r === "default",
                  "text-success-700": r === "success",
                  "text-danger-700": r === "error",
                  "text-warning-700": r === "warning",
                  "text-info-700": r === "info"
                }),
                children: o
              }
            ),
            !f && /* @__PURE__ */ e.jsx("span", { className: "text-sm leading-5", children: g.children })
          ] }),
          d && l && /* @__PURE__ */ e.jsx(
            Se,
            {
              variant: "ghost",
              size: "sm",
              onClick: l,
              className: v(
                "flex-shrink-0 !p-1",
                o ? "ml-4" : "ml-2",
                {
                  "text-gray-400 hover:text-gray": r === "default",
                  "text-success-400 hover:text-success": r === "success",
                  "text-danger-400 hover:text-danger": r === "error",
                  "text-warning-400 hover:text-warning": r === "warning",
                  "text-info-400 hover:text-info": r === "info"
                }
              ),
              children: /* @__PURE__ */ e.jsx(Z, { icon: "mdi:close", className: v(o ? "h-5 w-5" : "h-4 w-4") })
            }
          )
        ]
      }
    );
  }
);
fr.displayName = "Toast";
const Et = Er(void 0), us = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, Ys = ({ children: t }) => {
  const [r, a] = J([]), s = Fe((i) => {
    a((d) => d.filter((g) => g.id !== i));
  }, []), o = Fe((i) => {
    const d = Math.random().toString(36).substr(2, 9), g = i.position || "top-right", h = i.duration || 5e3, m = {
      ...i,
      id: d,
      position: g
    };
    return a((b) => [...b, m]), h > 0 && setTimeout(() => {
      s(d);
    }, h), d;
  }, [s]), l = r.reduce((i, d) => (i[d.position] || (i[d.position] = []), i[d.position].push(d), i), {
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    "bottom-right": [],
    "top-center": [],
    "bottom-center": []
  }), c = ye();
  return "body" in c ? /* @__PURE__ */ e.jsxs(Et.Provider, { value: { showToast: o, removeToast: s }, children: [
    t,
    Ve(
      /* @__PURE__ */ e.jsx(e.Fragment, { children: Object.entries(l).map(([i, d]) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: v(
            "fixed z-[100] flex flex-col gap-2 min-w-[320px] max-w-[420px]",
            us[i],
            i.includes("bottom") ? "flex-col-reverse" : "flex-col"
          ),
          children: d.map((g) => /* @__PURE__ */ e.jsx(
            fr,
            {
              ...g,
              onClose: () => s(g.id),
              className: "animate-slide-in"
            },
            g.id
          ))
        },
        i
      )) }),
      c.body
    )
  ] }) : /* @__PURE__ */ e.jsx(Et.Provider, { value: { showToast: o, removeToast: s }, children: t });
}, Bs = () => {
  const t = Sr(Et);
  if (!t)
    throw new Error("useToast must be used within a ToastProvider");
  return t;
}, fs = ({
  label: t,
  value: r,
  icon: a,
  className: s
}) => /* @__PURE__ */ e.jsxs(Rt, { className: v(
  "flex items-center gap-4 rounded-lg w-full bg-white p-4 shadow-sm hover:bg-neutral-50 transition-shadow duration-200 justify-between",
  s
), children: [
  /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium text-gray", children: t }),
    /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-2xl font-semibold text-gray-900", children: r })
  ] }),
  a && /* @__PURE__ */ e.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50", children: /* @__PURE__ */ e.jsx(Z, { icon: a, className: "h-6 w-6 text-primary-600" }) })
] }), ms = {
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
}, mr = {
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
}, gs = {
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
}, Gt = {
  ...ms,
  ...mr
}, Ht = {
  image: "https://design-system-eaip.onrender.com/img/error.svg",
  message: "An unexpected error occurred. Our team is currently investigating the issue."
}, Wt = (t) => typeof t == "object" && t !== null && ("code" in t || "message" in t), Gs = ({
  error: t,
  reload: r,
  children: a,
  className: s = "",
  variant: o,
  customImage: l,
  customMessage: c
}) => {
  if (!t && !o)
    return a ? /* @__PURE__ */ e.jsx(e.Fragment, { children: a }) : null;
  const d = (() => {
    if (o) {
      const m = gs[o];
      return mr[m];
    }
    return Wt(t) && t.code && Gt[t.code] ? Gt[t.code] : Ht;
  })(), g = l || d.image, h = c || (Wt(t) ? t.message : null) || d.message;
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${s}`, children: [
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: g,
        alt: "Error illustration",
        className: "max-w-[300px] h-auto"
      }
    ),
    typeof h == "string" ? /* @__PURE__ */ e.jsx(at, { variant: "body1", className: "m-0", children: h }) : /* @__PURE__ */ e.jsx("div", { className: "m-0", children: h }),
    r && /* @__PURE__ */ e.jsx(
      Se,
      {
        onClick: r,
        rounded: "full",
        variant: "primary",
        size: "md",
        children: "Try Again"
      }
    )
  ] });
}, ps = je(
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
), bs = Ne(
  ({
    className: t,
    variant: r = "default",
    size: a = "md",
    rounded: s = "md",
    error: o = !1,
    errorText: l,
    helperText: c,
    label: i,
    bottomLabel: d,
    required: g = !1,
    showSubmitButton: h = !1,
    submitButtonLabel: m = "Submit",
    submitButtonVariant: b = "primary",
    length: f = 6,
    numericOnly: N = !0,
    onComplete: w,
    onChange: p,
    onSubmit: x,
    value: y,
    defaultValue: P = "",
    disabled: D = !1,
    autoFocus: _ = !1,
    ...W
  }, G) => {
    const [S, j] = J(P || ""), E = ge([]);
    be(() => {
      y !== void 0 && j(y);
    }, [y]);
    const V = y !== void 0, R = V ? y : S, C = (A) => {
      V || j(A), p == null || p(A), A.length === f && (w == null || w(A), h || x == null || x(A));
    }, I = (A) => (H) => {
      E.current[A] = H;
    }, O = (A) => {
      A.target.select();
    }, u = (A, H) => {
      var B;
      const oe = A.target.value;
      let de = "";
      if (oe.length >= 1)
        de = oe.slice(-1);
      else if (oe.length === 0) {
        const te = R.split("");
        te[H] = "", C(te.join(""));
        return;
      }
      if (N && !/^\d$/.test(de))
        return;
      const he = R.split("");
      for (; he.length <= H; )
        he.push("");
      he[H] = de;
      const ue = he.join("");
      C(ue), H < f - 1 && de && ((B = E.current[H + 1]) == null || B.focus());
    }, k = (A, H) => {
      var oe, de, he;
      if (A.key === "Backspace") {
        const ue = R.split("");
        R[H] ? (A.preventDefault(), ue[H] = "", C(ue.join(""))) : H > 0 && (A.preventDefault(), ue[H - 1] = "", C(ue.join("")), (oe = E.current[H - 1]) == null || oe.focus());
      } else if (A.key === "Delete") {
        if (R[H]) {
          A.preventDefault();
          const ue = R.split("");
          ue[H] = "", C(ue.join(""));
        }
      } else if (A.key === "ArrowLeft" && H > 0)
        A.preventDefault(), (de = E.current[H - 1]) == null || de.focus();
      else if (A.key === "ArrowRight" && H < f - 1)
        A.preventDefault(), (he = E.current[H + 1]) == null || he.focus();
      else if (!A.ctrlKey && !A.altKey && !A.metaKey && A.key.length === 1 && N && !/^\d$/.test(A.key)) {
        A.preventDefault();
        return;
      }
    }, L = (A) => {
      var ue;
      A.preventDefault();
      const H = A.clipboardData.getData("text/plain").trim();
      if (N && !/^\d+$/.test(H))
        return;
      const de = H.slice(0, f).padEnd(R.length, "").slice(0, f);
      C(de);
      const he = de.length < f ? de.length : f - 1;
      (ue = E.current[he]) == null || ue.focus();
    }, T = () => {
      R.length === f && (x == null || x(R));
    }, Y = R.split("").concat(Array(f - R.length).fill(""));
    return /* @__PURE__ */ e.jsxs("div", { ref: G, className: v("w-full", t), ...W, children: [
      i && /* @__PURE__ */ e.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
        i,
        g && /* @__PURE__ */ e.jsx("span", { className: "text-danger ml-0.5", children: "*" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center gap-2", children: Array.from({ length: f }).map((A, H) => /* @__PURE__ */ e.jsx(
          "input",
          {
            ref: I(H),
            type: N ? "tel" : "text",
            inputMode: N ? "numeric" : "text",
            maxLength: 1,
            value: Y[H] || "",
            onChange: (oe) => u(oe, H),
            onKeyDown: (oe) => k(oe, H),
            onPaste: H === 0 ? L : void 0,
            onFocus: O,
            disabled: D,
            autoFocus: _ && H === 0,
            className: v(
              ps({
                variant: o ? "error" : r,
                size: a,
                rounded: s
              })
            ),
            "aria-invalid": o
          },
          H
        )) }),
        o && l && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-danger self-start", children: l }),
        !o && c && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-neutral self-start", children: c }),
        d && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-neutral-600", children: d }),
        h && /* @__PURE__ */ e.jsx(
          Se,
          {
            variant: b,
            disabled: R.length !== f || D,
            onClick: T,
            className: "mt-4",
            children: m
          }
        )
      ] })
    ] });
  }
);
bs.displayName = "InputOTP";
const Ut = {
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
}, Hs = ({
  icon: t,
  className: r,
  color: a = "primary",
  value: s,
  maxValue: o = 99,
  children: l,
  ...c
}) => {
  const i = "top-0 right-0", d = typeof s == "number" && !isNaN(s);
  let g = "";
  d && (s > o ? g = `${o}+` : g = String(s));
  const h = d ? "px-2" : "", m = d ? "min-w-[20px]" : "w-2.5 h-2.5", b = d ? "h-5" : "h-2.5", f = typeof a == "string" && a in Ut ? Ut[a] : a;
  return /* @__PURE__ */ e.jsxs("div", { className: v("relative inline-block", r), children: [
    l || (t ? /* @__PURE__ */ e.jsx(Z, { icon: t, color: f, size: 32, ...c }) : null),
    /* @__PURE__ */ e.jsx(
      "span",
      {
        className: v(
          "absolute flex items-center justify-center rounded-xl bg-[#FF4C4C] text-white text-[10px] font-semibold",
          i,
          h,
          m,
          b,
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
}, hs = {
  FLIGHT_LIGHT: {
    image: "https://design-system-eaip.onrender.com/img/flight-loader-light.gif",
    message: "Loading, please wait..."
  },
  FLIGHT_DARK: {
    image: "https://design-system-eaip.onrender.com/img/flight-loader-dark.gif",
    message: "Loading, please wait..."
  }
}, xs = {
  "flight-light": "FLIGHT_LIGHT",
  "flight-dark": "FLIGHT_DARK"
}, Ws = ({
  variant: t,
  customImage: r,
  customMessage: a,
  width: s,
  height: o,
  className: l = ""
}) => {
  const c = xs[t], i = hs[c];
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${l}`, children: [
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: r || i.image,
        alt: "Loading animation",
        className: "max-w-[200px] h-auto",
        style: { width: s, height: o }
      }
    ),
    a ? typeof a == "string" ? /* @__PURE__ */ e.jsx(at, { variant: "body1", className: "m-0", children: a }) : /* @__PURE__ */ e.jsx("div", { className: "m-0", children: a }) : /* @__PURE__ */ e.jsx(at, { variant: "body1", className: "m-0", children: i.message })
  ] });
}, vs = {
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
}, Us = ({
  variant: t,
  customMessage: r,
  reload: a,
  reloadText: s = "Try Again",
  customImage: o,
  width: l,
  height: c,
  className: i = ""
}) => {
  const d = ys[t], g = vs[d];
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${i}`, children: [
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: o || g.image,
        alt: "Negative case illustration",
        className: "max-w-[300px] h-auto",
        style: { width: l, height: c }
      }
    ),
    r ? typeof r == "string" ? /* @__PURE__ */ e.jsx(at, { variant: "body1", className: "m-0", children: r }) : /* @__PURE__ */ e.jsx("div", { className: "m-0", children: r }) : /* @__PURE__ */ e.jsx(at, { variant: "body1", className: "m-0", children: g.message }),
    a && /* @__PURE__ */ e.jsx(
      Se,
      {
        onClick: a,
        rounded: "full",
        variant: "primary",
        size: "md",
        children: s
      }
    )
  ] });
}, Ks = ({
  widgets: t,
  className: r
}) => /* @__PURE__ */ e.jsx("div", { className: v("w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", r), children: t.map((a, s) => /* @__PURE__ */ e.jsx(fs, { ...a }, s)) });
export {
  Es as Accordion,
  fa as AutoComplete,
  Ss as Avatar,
  Rs as Badge,
  Hs as BadgeNotif,
  is as Breadcrumbs,
  Se as Button,
  Rt as Card,
  Ms as Checkbox,
  Ts as Chip,
  Sa as DatePicker,
  Ma as Dialog,
  Aa as DialogActions,
  Ca as DialogBody,
  or as DialogHeader,
  Ta as DialogTitle,
  Pa as Divider,
  Gs as ErrorWrapper,
  Cs as FileUpload,
  Z as Icon,
  rr as Input,
  bs as InputOTP,
  Ws as Loader,
  Us as NegativeCase,
  As as Notification,
  Oa as Pagination,
  ns as PhoneInput,
  Fs as Popover,
  Nt as PrimitiveDatePicker,
  as as Progress,
  Ps as Radio,
  lr as Select,
  it as SelectItem,
  $a as Skeleton,
  Ds as Slider,
  _s as StarRating,
  Is as StatusIndicator,
  zs as Stepper,
  Os as Switch,
  Vs as Table,
  Ls as Tabs,
  at as Text,
  Ua as TimePicker,
  fr as Toast,
  Ys as ToastProvider,
  Za as Toggle,
  $s as Tooltip,
  fs as WidgetCard,
  Ks as WidgetCardGroup,
  ba as buttonVariants,
  ha as cardVariants,
  v as cn,
  ps as inputOTPVariants,
  Ka as toggleVariants,
  Bs as useToast
};
