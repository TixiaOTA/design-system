import * as Rt from "react";
import Ae, { useState as ie, useEffect as Ce, forwardRef as ve, useRef as xe, useCallback as Ve, Children as Kt, isValidElement as gt, cloneElement as nn, createContext as on, useContext as sn } from "react";
import { createPortal as Ye } from "react-dom";
var ln = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function an(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Es(e) {
  if (e.__esModule) return e;
  var n = e.default;
  if (typeof n == "function") {
    var t = function r() {
      return this instanceof r ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments);
    };
    t.prototype = n.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(t, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), t;
}
var jt = { exports: {} }, Ze = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zt;
function un() {
  if (Zt) return Ze;
  Zt = 1;
  var e = Ae, n = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, u, d) {
    var f, p = {}, m = null, c = null;
    d !== void 0 && (m = "" + d), u.key !== void 0 && (m = "" + u.key), u.ref !== void 0 && (c = u.ref);
    for (f in u) r.call(u, f) && !s.hasOwnProperty(f) && (p[f] = u[f]);
    if (a && a.defaultProps) for (f in u = a.defaultProps, u) p[f] === void 0 && (p[f] = u[f]);
    return { $$typeof: n, type: a, key: m, ref: c, props: p, _owner: o.current };
  }
  return Ze.Fragment = t, Ze.jsx = i, Ze.jsxs = i, Ze;
}
var Je = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jt;
function cn() {
  return Jt || (Jt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ae, n = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), c = Symbol.for("react.offscreen"), x = Symbol.iterator, h = "@@iterator";
    function b(g) {
      if (g === null || typeof g != "object")
        return null;
      var j = x && g[x] || g[h];
      return typeof j == "function" ? j : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(g) {
      {
        for (var j = arguments.length, D = new Array(j > 1 ? j - 1 : 0), q = 1; q < j; q++)
          D[q - 1] = arguments[q];
        G("error", g, D);
      }
    }
    function G(g, j, D) {
      {
        var q = w.ReactDebugCurrentFrame, le = q.getStackAddendum();
        le !== "" && (j += "%s", D = D.concat([le]));
        var ue = D.map(function(oe) {
          return String(oe);
        });
        ue.unshift("Warning: " + j), Function.prototype.apply.call(console[g], console, ue);
      }
    }
    var N = !1, k = !1, P = !1, O = !1, M = !1, V;
    V = Symbol.for("react.module.reference");
    function L(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === r || g === s || M || g === o || g === d || g === f || O || g === c || N || k || P || typeof g == "object" && g !== null && (g.$$typeof === m || g.$$typeof === p || g.$$typeof === i || g.$$typeof === a || g.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === V || g.getModuleId !== void 0));
    }
    function F(g, j, D) {
      var q = g.displayName;
      if (q)
        return q;
      var le = j.displayName || j.name || "";
      return le !== "" ? D + "(" + le + ")" : D;
    }
    function A(g) {
      return g.displayName || "Context";
    }
    function J(g) {
      if (g == null)
        return null;
      if (typeof g.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
        return g.displayName || g.name || null;
      if (typeof g == "string")
        return g;
      switch (g) {
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case d:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case a:
            var j = g;
            return A(j) + ".Consumer";
          case i:
            var D = g;
            return A(D._context) + ".Provider";
          case u:
            return F(g, g.render, "ForwardRef");
          case p:
            var q = g.displayName || null;
            return q !== null ? q : J(g.type) || "Memo";
          case m: {
            var le = g, ue = le._payload, oe = le._init;
            try {
              return J(oe(ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, _ = 0, v, S, C, z, T, E, R;
    function H() {
    }
    H.__reactDisabledLog = !0;
    function Y() {
      {
        if (_ === 0) {
          v = console.log, S = console.info, C = console.warn, z = console.error, T = console.group, E = console.groupCollapsed, R = console.groupEnd;
          var g = {
            configurable: !0,
            enumerable: !0,
            value: H,
            writable: !0
          };
          Object.defineProperties(console, {
            info: g,
            log: g,
            warn: g,
            error: g,
            group: g,
            groupCollapsed: g,
            groupEnd: g
          });
        }
        _++;
      }
    }
    function te() {
      {
        if (_--, _ === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, g, {
              value: v
            }),
            info: I({}, g, {
              value: S
            }),
            warn: I({}, g, {
              value: C
            }),
            error: I({}, g, {
              value: z
            }),
            group: I({}, g, {
              value: T
            }),
            groupCollapsed: I({}, g, {
              value: E
            }),
            groupEnd: I({}, g, {
              value: R
            })
          });
        }
        _ < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = w.ReactCurrentDispatcher, K;
    function ne(g, j, D) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (le) {
            var q = le.stack.trim().match(/\n( *(at )?)/);
            K = q && q[1] || "";
          }
        return `
` + K + g;
      }
    }
    var Q = !1, ae;
    {
      var we = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new we();
    }
    function X(g, j) {
      if (!g || Q)
        return "";
      {
        var D = ae.get(g);
        if (D !== void 0)
          return D;
      }
      var q;
      Q = !0;
      var le = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ue;
      ue = B.current, B.current = null, Y();
      try {
        if (j) {
          var oe = function() {
            throw Error();
          };
          if (Object.defineProperty(oe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(oe, []);
            } catch (ye) {
              q = ye;
            }
            Reflect.construct(g, [], oe);
          } else {
            try {
              oe.call();
            } catch (ye) {
              q = ye;
            }
            g.call(oe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ye) {
            q = ye;
          }
          g();
        }
      } catch (ye) {
        if (ye && q && typeof ye.stack == "string") {
          for (var ee = ye.stack.split(`
`), be = q.stack.split(`
`), ge = ee.length - 1, fe = be.length - 1; ge >= 1 && fe >= 0 && ee[ge] !== be[fe]; )
            fe--;
          for (; ge >= 1 && fe >= 0; ge--, fe--)
            if (ee[ge] !== be[fe]) {
              if (ge !== 1 || fe !== 1)
                do
                  if (ge--, fe--, fe < 0 || ee[ge] !== be[fe]) {
                    var Ne = `
` + ee[ge].replace(" at new ", " at ");
                    return g.displayName && Ne.includes("<anonymous>") && (Ne = Ne.replace("<anonymous>", g.displayName)), typeof g == "function" && ae.set(g, Ne), Ne;
                  }
                while (ge >= 1 && fe >= 0);
              break;
            }
        }
      } finally {
        Q = !1, B.current = ue, te(), Error.prepareStackTrace = le;
      }
      var Ue = g ? g.displayName || g.name : "", Ge = Ue ? ne(Ue) : "";
      return typeof g == "function" && ae.set(g, Ge), Ge;
    }
    function ce(g, j, D) {
      return X(g, !1);
    }
    function me(g) {
      var j = g.prototype;
      return !!(j && j.isReactComponent);
    }
    function Me(g, j, D) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return X(g, me(g));
      if (typeof g == "string")
        return ne(g);
      switch (g) {
        case d:
          return ne("Suspense");
        case f:
          return ne("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case u:
            return ce(g.render);
          case p:
            return Me(g.type, j, D);
          case m: {
            var q = g, le = q._payload, ue = q._init;
            try {
              return Me(ue(le), j, D);
            } catch {
            }
          }
        }
      return "";
    }
    var Re = Object.prototype.hasOwnProperty, Oe = {}, Fe = w.ReactDebugCurrentFrame;
    function Ie(g) {
      if (g) {
        var j = g._owner, D = Me(g.type, g._source, j ? j.type : null);
        Fe.setExtraStackFrame(D);
      } else
        Fe.setExtraStackFrame(null);
    }
    function Dr(g, j, D, q, le) {
      {
        var ue = Function.call.bind(Re);
        for (var oe in g)
          if (ue(g, oe)) {
            var ee = void 0;
            try {
              if (typeof g[oe] != "function") {
                var be = Error((q || "React class") + ": " + D + " type `" + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw be.name = "Invariant Violation", be;
              }
              ee = g[oe](j, oe, q, D, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ge) {
              ee = ge;
            }
            ee && !(ee instanceof Error) && (Ie(le), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", q || "React class", D, oe, typeof ee), Ie(null)), ee instanceof Error && !(ee.message in Oe) && (Oe[ee.message] = !0, Ie(le), y("Failed %s type: %s", D, ee.message), Ie(null));
          }
      }
    }
    var Vr = Array.isArray;
    function lt(g) {
      return Vr(g);
    }
    function Ar(g) {
      {
        var j = typeof Symbol == "function" && Symbol.toStringTag, D = j && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return D;
      }
    }
    function Or(g) {
      try {
        return At(g), !1;
      } catch {
        return !0;
      }
    }
    function At(g) {
      return "" + g;
    }
    function Ot(g) {
      if (Or(g))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ar(g)), At(g);
    }
    var Lt = w.ReactCurrentOwner, Lr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, zt, Tt;
    function zr(g) {
      if (Re.call(g, "ref")) {
        var j = Object.getOwnPropertyDescriptor(g, "ref").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function Tr(g) {
      if (Re.call(g, "key")) {
        var j = Object.getOwnPropertyDescriptor(g, "key").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function Hr(g, j) {
      typeof g.ref == "string" && Lt.current;
    }
    function Gr(g, j) {
      {
        var D = function() {
          zt || (zt = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        D.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: D,
          configurable: !0
        });
      }
    }
    function Br(g, j) {
      {
        var D = function() {
          Tt || (Tt = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        D.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: D,
          configurable: !0
        });
      }
    }
    var Ur = function(g, j, D, q, le, ue, oe) {
      var ee = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: g,
        key: j,
        ref: D,
        props: oe,
        // Record the component responsible for creating this element.
        _owner: ue
      };
      return ee._store = {}, Object.defineProperty(ee._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ee, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: q
      }), Object.defineProperty(ee, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: le
      }), Object.freeze && (Object.freeze(ee.props), Object.freeze(ee)), ee;
    };
    function Wr(g, j, D, q, le) {
      {
        var ue, oe = {}, ee = null, be = null;
        D !== void 0 && (Ot(D), ee = "" + D), Tr(j) && (Ot(j.key), ee = "" + j.key), zr(j) && (be = j.ref, Hr(j, le));
        for (ue in j)
          Re.call(j, ue) && !Lr.hasOwnProperty(ue) && (oe[ue] = j[ue]);
        if (g && g.defaultProps) {
          var ge = g.defaultProps;
          for (ue in ge)
            oe[ue] === void 0 && (oe[ue] = ge[ue]);
        }
        if (ee || be) {
          var fe = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          ee && Gr(oe, fe), be && Br(oe, fe);
        }
        return Ur(g, ee, be, le, q, Lt.current, oe);
      }
    }
    var at = w.ReactCurrentOwner, Ht = w.ReactDebugCurrentFrame;
    function Be(g) {
      if (g) {
        var j = g._owner, D = Me(g.type, g._source, j ? j.type : null);
        Ht.setExtraStackFrame(D);
      } else
        Ht.setExtraStackFrame(null);
    }
    var ut;
    ut = !1;
    function ct(g) {
      return typeof g == "object" && g !== null && g.$$typeof === n;
    }
    function Gt() {
      {
        if (at.current) {
          var g = J(at.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
    }
    function qr(g) {
      return "";
    }
    var Bt = {};
    function Yr(g) {
      {
        var j = Gt();
        if (!j) {
          var D = typeof g == "string" ? g : g.displayName || g.name;
          D && (j = `

Check the top-level render call using <` + D + ">.");
        }
        return j;
      }
    }
    function Ut(g, j) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var D = Yr(j);
        if (Bt[D])
          return;
        Bt[D] = !0;
        var q = "";
        g && g._owner && g._owner !== at.current && (q = " It was passed a child from " + J(g._owner.type) + "."), Be(g), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', D, q), Be(null);
      }
    }
    function Wt(g, j) {
      {
        if (typeof g != "object")
          return;
        if (lt(g))
          for (var D = 0; D < g.length; D++) {
            var q = g[D];
            ct(q) && Ut(q, j);
          }
        else if (ct(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var le = b(g);
          if (typeof le == "function" && le !== g.entries)
            for (var ue = le.call(g), oe; !(oe = ue.next()).done; )
              ct(oe.value) && Ut(oe.value, j);
        }
      }
    }
    function Kr(g) {
      {
        var j = g.type;
        if (j == null || typeof j == "string")
          return;
        var D;
        if (typeof j == "function")
          D = j.propTypes;
        else if (typeof j == "object" && (j.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        j.$$typeof === p))
          D = j.propTypes;
        else
          return;
        if (D) {
          var q = J(j);
          Dr(D, g.props, "prop", q, g);
        } else if (j.PropTypes !== void 0 && !ut) {
          ut = !0;
          var le = J(j);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", le || "Unknown");
        }
        typeof j.getDefaultProps == "function" && !j.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Zr(g) {
      {
        for (var j = Object.keys(g.props), D = 0; D < j.length; D++) {
          var q = j[D];
          if (q !== "children" && q !== "key") {
            Be(g), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", q), Be(null);
            break;
          }
        }
        g.ref !== null && (Be(g), y("Invalid attribute `ref` supplied to `React.Fragment`."), Be(null));
      }
    }
    var qt = {};
    function Yt(g, j, D, q, le, ue) {
      {
        var oe = L(g);
        if (!oe) {
          var ee = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var be = qr();
          be ? ee += be : ee += Gt();
          var ge;
          g === null ? ge = "null" : lt(g) ? ge = "array" : g !== void 0 && g.$$typeof === n ? (ge = "<" + (J(g.type) || "Unknown") + " />", ee = " Did you accidentally export a JSX literal instead of a component?") : ge = typeof g, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ge, ee);
        }
        var fe = Wr(g, j, D, le, ue);
        if (fe == null)
          return fe;
        if (oe) {
          var Ne = j.children;
          if (Ne !== void 0)
            if (q)
              if (lt(Ne)) {
                for (var Ue = 0; Ue < Ne.length; Ue++)
                  Wt(Ne[Ue], g);
                Object.freeze && Object.freeze(Ne);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Wt(Ne, g);
        }
        if (Re.call(j, "key")) {
          var Ge = J(g), ye = Object.keys(j).filter(function(rn) {
            return rn !== "key";
          }), dt = ye.length > 0 ? "{key: someKey, " + ye.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!qt[Ge + dt]) {
            var tn = ye.length > 0 ? "{" + ye.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, dt, Ge, tn, Ge), qt[Ge + dt] = !0;
          }
        }
        return g === r ? Zr(fe) : Kr(fe), fe;
      }
    }
    function Jr(g, j, D) {
      return Yt(g, j, D, !0);
    }
    function Xr(g, j, D) {
      return Yt(g, j, D, !1);
    }
    var Qr = Xr, en = Jr;
    Je.Fragment = r, Je.jsx = Qr, Je.jsxs = en;
  }()), Je;
}
process.env.NODE_ENV === "production" ? jt.exports = un() : jt.exports = cn();
var l = jt.exports;
function ur(e) {
  var n, t, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (n = 0; n < o; n++) e[n] && (t = ur(e[n])) && (r && (r += " "), r += t);
  } else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function se() {
  for (var e, n, t = 0, r = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (n = ur(e)) && (r && (r += " "), r += n);
  return r;
}
const Xt = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Qt = se, _e = (e, n) => (t) => {
  var r;
  if ((n == null ? void 0 : n.variants) == null) return Qt(e, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: o, defaultVariants: s } = n, i = Object.keys(o).map((d) => {
    const f = t == null ? void 0 : t[d], p = s == null ? void 0 : s[d];
    if (f === null) return null;
    const m = Xt(f) || Xt(p);
    return o[d][m];
  }), a = t && Object.entries(t).reduce((d, f) => {
    let [p, m] = f;
    return m === void 0 || (d[p] = m), d;
  }, {}), u = n == null || (r = n.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((d, f) => {
    let { class: p, className: m, ...c } = f;
    return Object.entries(c).every((x) => {
      let [h, b] = x;
      return Array.isArray(b) ? b.includes({
        ...s,
        ...a
      }[h]) : {
        ...s,
        ...a
      }[h] === b;
    }) ? [
      ...d,
      p,
      m
    ] : d;
  }, []);
  return Qt(e, i, u, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
}, Ft = "-", dn = (e) => {
  const n = fn(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(Ft);
      return a[0] === "" && a.length !== 1 && a.shift(), cr(a, n) || gn(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const u = t[i] || [];
      return a && r[i] ? [...u, ...r[i]] : u;
    }
  };
}, cr = (e, n) => {
  var i;
  if (e.length === 0)
    return n.classGroupId;
  const t = e[0], r = n.nextPart.get(t), o = r ? cr(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (n.validators.length === 0)
    return;
  const s = e.join(Ft);
  return (i = n.validators.find(({
    validator: a
  }) => a(s))) == null ? void 0 : i.classGroupId;
}, er = /^\[(.+)\]$/, gn = (e) => {
  if (er.test(e)) {
    const n = er.exec(e)[1], t = n == null ? void 0 : n.substring(0, n.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, fn = (e) => {
  const {
    theme: n,
    prefix: t
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return pn(Object.entries(e.classGroups), t).forEach(([s, i]) => {
    _t(i, r, s, n);
  }), r;
}, _t = (e, n, t, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? n : tr(n, o);
      s.classGroupId = t;
      return;
    }
    if (typeof o == "function") {
      if (mn(o)) {
        _t(o(r), n, t, r);
        return;
      }
      n.validators.push({
        validator: o,
        classGroupId: t
      });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      _t(i, tr(n, s), t, r);
    });
  });
}, tr = (e, n) => {
  let t = e;
  return n.split(Ft).forEach((r) => {
    t.nextPart.has(r) || t.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(r);
  }), t;
}, mn = (e) => e.isThemeGetter, pn = (e, n) => n ? e.map(([t, r]) => {
  const o = r.map((s) => typeof s == "string" ? n + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, a]) => [n + i, a])) : s);
  return [t, o];
}) : e, hn = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (s, i) => {
    t.set(s, i), n++, n > e && (n = 0, r = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let i = t.get(s);
      if (i !== void 0)
        return i;
      if ((i = r.get(s)) !== void 0)
        return o(s, i), i;
    },
    set(s, i) {
      t.has(s) ? t.set(s, i) : o(s, i);
    }
  };
}, dr = "!", xn = (e) => {
  const {
    separator: n,
    experimentalParseClassName: t
  } = e, r = n.length === 1, o = n[0], s = n.length, i = (a) => {
    const u = [];
    let d = 0, f = 0, p;
    for (let b = 0; b < a.length; b++) {
      let w = a[b];
      if (d === 0) {
        if (w === o && (r || a.slice(b, b + s) === n)) {
          u.push(a.slice(f, b)), f = b + s;
          continue;
        }
        if (w === "/") {
          p = b;
          continue;
        }
      }
      w === "[" ? d++ : w === "]" && d--;
    }
    const m = u.length === 0 ? a : a.substring(f), c = m.startsWith(dr), x = c ? m.substring(1) : m, h = p && p > f ? p - f : void 0;
    return {
      modifiers: u,
      hasImportantModifier: c,
      baseClassName: x,
      maybePostfixModifierPosition: h
    };
  };
  return t ? (a) => t({
    className: a,
    parseClassName: i
  }) : i;
}, vn = (e) => {
  if (e.length <= 1)
    return e;
  const n = [];
  let t = [];
  return e.forEach((r) => {
    r[0] === "[" ? (n.push(...t.sort(), r), t = []) : t.push(r);
  }), n.push(...t.sort()), n;
}, bn = (e) => ({
  cache: hn(e.cacheSize),
  parseClassName: xn(e),
  ...dn(e)
}), wn = /\s+/, yn = (e, n) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = n, s = [], i = e.trim().split(wn);
  let a = "";
  for (let u = i.length - 1; u >= 0; u -= 1) {
    const d = i[u], {
      modifiers: f,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: c
    } = t(d);
    let x = !!c, h = r(x ? m.substring(0, c) : m);
    if (!h) {
      if (!x) {
        a = d + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (h = r(m), !h) {
        a = d + (a.length > 0 ? " " + a : a);
        continue;
      }
      x = !1;
    }
    const b = vn(f).join(":"), w = p ? b + dr : b, y = w + h;
    if (s.includes(y))
      continue;
    s.push(y);
    const G = o(h, x);
    for (let N = 0; N < G.length; ++N) {
      const k = G[N];
      s.push(w + k);
    }
    a = d + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function Sn() {
  let e = 0, n, t, r = "";
  for (; e < arguments.length; )
    (n = arguments[e++]) && (t = gr(n)) && (r && (r += " "), r += t);
  return r;
}
const gr = (e) => {
  if (typeof e == "string")
    return e;
  let n, t = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (n = gr(e[r])) && (t && (t += " "), t += n);
  return t;
};
function Cn(e, ...n) {
  let t, r, o, s = i;
  function i(u) {
    const d = n.reduce((f, p) => p(f), e());
    return t = bn(d), r = t.cache.get, o = t.cache.set, s = a, a(u);
  }
  function a(u) {
    const d = r(u);
    if (d)
      return d;
    const f = yn(u, t);
    return o(u, f), f;
  }
  return function() {
    return s(Sn.apply(null, arguments));
  };
}
const de = (e) => {
  const n = (t) => t[e] || [];
  return n.isThemeGetter = !0, n;
}, fr = /^\[(?:([a-z-]+):)?(.+)\]$/i, Rn = /^\d+\/\d+$/, jn = /* @__PURE__ */ new Set(["px", "full", "screen"]), _n = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Nn = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, $n = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, En = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Mn = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Pe = (e) => We(e) || jn.has(e) || Rn.test(e), Le = (e) => Ke(e, "length", On), We = (e) => !!e && !Number.isNaN(Number(e)), ft = (e) => Ke(e, "number", We), Xe = (e) => !!e && Number.isInteger(Number(e)), kn = (e) => e.endsWith("%") && We(e.slice(0, -1)), Z = (e) => fr.test(e), ze = (e) => _n.test(e), In = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Fn = (e) => Ke(e, In, mr), Pn = (e) => Ke(e, "position", mr), Dn = /* @__PURE__ */ new Set(["image", "url"]), Vn = (e) => Ke(e, Dn, zn), An = (e) => Ke(e, "", Ln), Qe = () => !0, Ke = (e, n, t) => {
  const r = fr.exec(e);
  return r ? r[1] ? typeof n == "string" ? r[1] === n : n.has(r[1]) : t(r[2]) : !1;
}, On = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Nn.test(e) && !$n.test(e)
), mr = () => !1, Ln = (e) => En.test(e), zn = (e) => Mn.test(e), Tn = () => {
  const e = de("colors"), n = de("spacing"), t = de("blur"), r = de("brightness"), o = de("borderColor"), s = de("borderRadius"), i = de("borderSpacing"), a = de("borderWidth"), u = de("contrast"), d = de("grayscale"), f = de("hueRotate"), p = de("invert"), m = de("gap"), c = de("gradientColorStops"), x = de("gradientColorStopPositions"), h = de("inset"), b = de("margin"), w = de("opacity"), y = de("padding"), G = de("saturate"), N = de("scale"), k = de("sepia"), P = de("skew"), O = de("space"), M = de("translate"), V = () => ["auto", "contain", "none"], L = () => ["auto", "hidden", "clip", "visible", "scroll"], F = () => ["auto", Z, n], A = () => [Z, n], J = () => ["", Pe, Le], I = () => ["auto", We, Z], _ = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], v = () => ["solid", "dashed", "dotted", "double", "none"], S = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], C = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], z = () => ["", "0", Z], T = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], E = () => [We, Z];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Qe],
      spacing: [Pe, Le],
      blur: ["none", "", ze, Z],
      brightness: E(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ze, Z],
      borderSpacing: A(),
      borderWidth: J(),
      contrast: E(),
      grayscale: z(),
      hueRotate: E(),
      invert: z(),
      gap: A(),
      gradientColorStops: [e],
      gradientColorStopPositions: [kn, Le],
      inset: F(),
      margin: F(),
      opacity: E(),
      padding: A(),
      saturate: E(),
      scale: E(),
      sepia: z(),
      skew: E(),
      space: A(),
      translate: A()
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
        columns: [ze]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": T()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": T()
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
        object: [..._(), Z]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: L()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": L()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": L()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: V()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": V()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": V()
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
        inset: [h]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [h]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [h]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [h]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [h]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [h]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [h]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [h]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [h]
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
        z: ["auto", Xe, Z]
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
        order: ["first", "last", "none", Xe, Z]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Qe]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Xe, Z]
        }, Z]
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
        "grid-rows": [Qe]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Xe, Z]
        }, Z]
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
        gap: [m]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [m]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [m]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...C()]
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
        content: ["normal", ...C(), "baseline"]
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
        "place-content": [...C(), "baseline"]
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
        "space-x": [O]
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
        "space-y": [O]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Z, n]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Z, n, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Z, n, "none", "full", "min", "max", "fit", "prose", {
          screen: [ze]
        }, ze]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Z, n, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Z, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Z, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Z, n, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ze, Le]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ft]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Qe]
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
        "line-clamp": ["none", We, ft]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Pe, Z]
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
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [w]
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
        "text-opacity": [w]
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
        decoration: [...v(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Pe, Le]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Pe, Z]
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
        indent: A()
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
        "bg-opacity": [w]
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
        bg: [..._(), Pn]
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
        bg: ["auto", "cover", "contain", Fn]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Vn]
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
        from: [x]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [x]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [x]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [c]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [c]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [c]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [w]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...v(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
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
        "divide-y": [a]
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
        "divide-opacity": [w]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: v()
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
        outline: ["", ...v()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Pe, Z]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Pe, Le]
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
        ring: J()
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
        "ring-opacity": [w]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Pe, Le]
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
        shadow: ["", "inner", "none", ze, An]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Qe]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [w]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...S(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": S()
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
        blur: [t]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [u]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", ze, Z]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [d]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [p]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [G]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [k]
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
        "backdrop-blur": [t]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [u]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [d]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [p]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [w]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [G]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [k]
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
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
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
        duration: E()
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
        delay: E()
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
        scale: [N]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [N]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [N]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Xe, Z]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [M]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [M]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [P]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [P]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Z]
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
        "will-change": ["auto", "scroll", "contents", "transform", Z]
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
        stroke: [Pe, Le, ft]
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
}, qe = /* @__PURE__ */ Cn(Tn);
function $(...e) {
  return qe(se(e));
}
const re = ({
  icon: e,
  className: n,
  size: t,
  color: r,
  rotate: o,
  flip: s,
  spin: i,
  inline: a = !0,
  mode: u = "svg",
  ...d
}) => {
  const [f, p] = ie(null), [m, c] = ie(!0), [x, h] = ie(null);
  return Ce(() => {
    let b = !0;
    return (async () => {
      try {
        const { Icon: y } = await import("./iconify-Dqt3MVen.mjs");
        b && (p(() => y), c(!1));
      } catch (y) {
        console.error("Failed to load icon:", y), b && (h(y), c(!1));
      }
    })(), () => {
      b = !1;
    };
  }, []), m ? /* @__PURE__ */ l.jsx("span", { style: { width: t, height: t } }) : x || !f ? null : /* @__PURE__ */ l.jsx(
    f,
    {
      icon: e,
      className: $(
        i && "animate-spin",
        n
      ),
      style: {
        color: r,
        transform: `rotate(${o || 0}deg)`
      },
      height: t,
      width: t,
      flip: s,
      inline: a,
      mode: u,
      ...d
    }
  );
}, Hn = _e(
  "border bg-white px-3 py-2 ring-0 transition-colors placeholder:text-neutral-500 placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50",
        error: "border-danger-500 hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50",
        success: "border-success-500 hover:border-success-600 focus:border-success-600 hover:bg-success-50",
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
), pr = ve(
  ({
    className: e,
    variant: n = "default",
    size: t = "md",
    rounded: r = "md",
    error: o = !1,
    errorText: s,
    helperText: i,
    label: a,
    required: u = !1,
    labelPlacement: d = "top",
    fullWidth: f = !1,
    leftIcon: p,
    rightIcon: m,
    id: c,
    ...x
  }, h) => {
    const b = c || Ae.useId(), w = `${b}-helper`, y = `${b}-error`, G = /* @__PURE__ */ l.jsxs("div", { className: $("relative", !f && "inline-block"), children: [
      p && /* @__PURE__ */ l.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500", children: /* @__PURE__ */ l.jsx(re, { icon: p, className: "w-4 h-4" }) }),
      /* @__PURE__ */ l.jsx(
        "input",
        {
          id: b,
          type: "text",
          ref: h,
          className: $(
            Hn({ variant: o ? "error" : n, size: t, rounded: r, fullWidth: f }),
            p && "pl-10",
            m && "pr-10",
            e
          ),
          "aria-describedby": o ? y : i ? w : void 0,
          "aria-invalid": o,
          "aria-required": u,
          ...x
        }
      ),
      m && /* @__PURE__ */ l.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500", children: /* @__PURE__ */ l.jsx(re, { icon: m, className: "w-4 h-4" }) })
    ] }), N = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      o && s && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger-500", id: y, children: s }),
      !o && i && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral-500", id: w, children: i })
    ] });
    return d === "left" ? /* @__PURE__ */ l.jsx("div", { className: $(f ? "w-full" : "inline-block", e), children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-start gap-4", children: [
      a && /* @__PURE__ */ l.jsxs(
        "label",
        {
          htmlFor: b,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            a,
            u && /* @__PURE__ */ l.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: $("flex-1", !f && "inline-block"), children: [
        G,
        N
      ] })
    ] }) }) : /* @__PURE__ */ l.jsxs("div", { className: $(f ? "w-full" : "inline-block", e), children: [
      a && /* @__PURE__ */ l.jsxs(
        "label",
        {
          htmlFor: b,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            a,
            u && /* @__PURE__ */ l.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
          ]
        }
      ),
      G,
      N
    ] });
  }
);
pr.displayName = "Input";
const st = Ae.forwardRef(
  ({ className: e, children: n, selected: t, disabled: r, ...o }, s) => /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: s,
      className: $(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
        "hover:bg-primary-50",
        t && "bg-primary-50 text-primary-900",
        r && "pointer-events-none opacity-50",
        e
      ),
      ...o,
      children: n
    }
  )
);
st.displayName = "SelectItem";
const hr = typeof window < "u", Ee = () => hr ? window : {
  innerHeight: 0,
  innerWidth: 0,
  addEventListener: () => {
  },
  removeEventListener: () => {
  }
}, pe = () => hr ? document : {
  addEventListener: () => {
  },
  removeEventListener: () => {
  },
  dispatchEvent: () => {
  }
}, mt = "autocomplete-dropdown-opened", Gn = _e(
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
), Bn = ve(
  ({
    className: e,
    options: n,
    onSelect: t,
    isOpen: r,
    dropdownPosition: o = "bottom",
    loading: s = !1,
    renderOption: i,
    variant: a = "default",
    size: u = "md",
    rounded: d = "md",
    leftIcon: f,
    rightIcon: p,
    error: m = !1,
    errorText: c,
    helperText: x,
    label: h,
    required: b = !1,
    labelPlacement: w = "top",
    fullWidth: y = !1,
    value: G,
    onChange: N,
    onFocus: k,
    onBlur: P,
    showClear: O = !1,
    onClear: M,
    ...V
  }, L) => {
    const [F, A] = ie(!1), [J, I] = ie(G || ""), _ = xe(null), v = xe(null), S = xe(null), C = r !== void 0, T = `autocomplete-${Ae.useId().replace(/:/g, "")}`, E = () => {
      if (!F || !v.current || !S.current) return;
      const { bottom: X, top: ce, left: me, width: Me } = v.current.getBoundingClientRect(), Re = S.current, Oe = Ee(), Fe = {
        position: "fixed",
        left: `${me}px`,
        width: `${Me}px`
      }, Ie = o === "bottom" ? {
        ...Fe,
        top: `${X + 4}px`,
        maxHeight: `${Oe.innerHeight - X - 8}px`
      } : {
        ...Fe,
        bottom: `${Oe.innerHeight - ce + 4}px`,
        maxHeight: `${ce - 8}px`
      };
      Object.assign(Re.style, Ie);
    };
    Ce(() => {
      const X = Ee(), ce = pe(), me = () => {
        F && E();
      }, Me = () => {
        F && E();
      }, Re = (Fe) => {
        Fe.detail.id !== T && A(!1);
      }, Oe = (Fe) => {
        const Ie = Fe.target;
        _.current && !_.current.contains(Ie) && S.current && !S.current.contains(Ie) && A(!1);
      };
      return F && (E(), X.addEventListener("scroll", me, !0), X.addEventListener("resize", Me)), ce.addEventListener(mt, Re), ce.addEventListener("click", Oe), () => {
        X.removeEventListener("scroll", me, !0), X.removeEventListener("resize", Me), ce.removeEventListener(mt, Re), ce.removeEventListener("click", Oe);
      };
    }, [F, T]), Ce(() => {
      I(G || "");
    }, [G]);
    const R = (X) => {
      const { value: ce } = X.target;
      if (I(ce), !ce.trim()) {
        A(!1);
        return;
      }
      A(!0), N == null || N(X);
    }, H = (X) => {
      X.stopPropagation(), I(""), M == null || M();
      const ce = new Event("change");
      ce.target = { value: "" }, N == null || N(ce);
    }, Y = (X) => {
      var Re;
      if (!X) return;
      const { value: ce, label: me } = X;
      I(me), A(!1), t == null || t(ce);
      const Me = new CustomEvent("autocomplete-select", {
        detail: { selectedOption: X }
      });
      (Re = v.current) == null || Re.dispatchEvent(Me);
    }, te = (X) => {
      C || (pe().dispatchEvent(
        new CustomEvent(mt, {
          detail: { id: T }
        })
      ), A(!0)), k == null || k(X);
    }, B = (X) => {
      P == null || P(X);
    }, K = n.filter(
      ({ label: X }) => X.toLowerCase().includes((J || "").toLowerCase().trim())
    ), ne = C ? r : F, Q = O && J && !V.disabled && !V.readOnly, ae = Q ? "mdi:close" : p, we = () => {
      if (!ne) return null;
      const X = pe();
      if (!("body" in X)) return null;
      const ce = /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: S,
          className: $(
            Gn({ position: o }),
            "overflow-auto"
          ),
          onClick: (me) => me.stopPropagation(),
          children: s ? /* @__PURE__ */ l.jsx("div", { className: "flex items-center justify-center py-2", children: /* @__PURE__ */ l.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary-500 border-t-transparent" }) }) : K.length > 0 ? K.map((me) => /* @__PURE__ */ l.jsx(
            st,
            {
              value: me.value,
              selected: me.label === J,
              onClick: () => Y(me),
              children: i ? i(me) : me.label
            },
            me.value
          )) : /* @__PURE__ */ l.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500", children: "No options found" })
        }
      );
      return Ye(ce, X.body);
    };
    return /* @__PURE__ */ l.jsxs("div", { ref: _, className: $("relative", y ? "w-full" : "inline-block"), children: [
      /* @__PURE__ */ l.jsx("div", { ref: v, className: $(!y && "inline-block"), children: /* @__PURE__ */ l.jsx(
        pr,
        {
          ref: L,
          value: J,
          onChange: R,
          onFocus: te,
          onBlur: B,
          variant: a,
          size: u,
          rounded: d,
          leftIcon: f,
          rightIcon: ae,
          error: m,
          errorText: c,
          helperText: x,
          label: h,
          required: b,
          labelPlacement: w,
          fullWidth: y,
          className: e,
          ...V,
          onClick: Q ? H : V.onClick
        }
      ) }),
      we()
    ] });
  }
);
Bn.displayName = "AutoComplete";
const Ms = ({
  items: e,
  multiple: n = !1,
  defaultOpenIds: t = [],
  icon: r = "mdi:chevron-down",
  iconPosition: o = "right",
  className: s,
  itemClassName: i,
  headerClassName: a,
  contentClassName: u
}) => {
  const [d, f] = ie(t), p = (m) => {
    f(
      n ? (c) => c.includes(m) ? c.filter((x) => x !== m) : [...c, m] : (c) => c.includes(m) ? [] : [m]
    );
  };
  return /* @__PURE__ */ l.jsx("div", { className: se("w-full space-y-2", s), children: e.map((m) => {
    const c = d.includes(m.id), x = !!m.disabled;
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: se(
          "border rounded-lg overflow-hidden",
          "bg-white",
          "border-gray-200",
          i
        ),
        children: [
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              onClick: () => !x && p(m.id),
              disabled: x,
              className: se(
                "w-full flex items-center justify-between p-4",
                "text-left transition-colors",
                "hover:bg-primary-50",
                x && "opacity-50 cursor-not-allowed",
                a
              ),
              children: [
                o === "left" && /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    className: se(
                      "mr-3 transition-transform duration-200",
                      c && "rotate-180"
                    ),
                    children: /* @__PURE__ */ l.jsx(re, { icon: r, className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ l.jsx("div", { className: "flex-1", children: m.title }),
                o === "right" && /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    className: se(
                      "ml-3 transition-transform duration-200",
                      c && "rotate-180"
                    ),
                    children: /* @__PURE__ */ l.jsx(re, { icon: r, className: "w-5 h-5" })
                  }
                )
              ]
            }
          ),
          c && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: se(
                "p-4 border-t border-gray-200",
                u
              ),
              children: m.content
            }
          )
        ]
      },
      m.id
    );
  }) });
}, ks = ({
  src: e,
  alt: n = "avatar",
  size: t = "medium",
  shape: r = "circle",
  className: o = ""
}) => {
  const s = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16"
  }, i = {
    circle: "rounded-full",
    square: "rounded-lg"
  }, a = qe(
    "inline-flex items-center justify-center overflow-hidden bg-gray-200",
    s[t],
    i[r],
    o
  );
  return /* @__PURE__ */ l.jsx("div", { className: a, children: e ? /* @__PURE__ */ l.jsx("img", { src: e, alt: n, className: "w-full h-full object-cover" }) : /* @__PURE__ */ l.jsx(
    "svg",
    {
      className: "w-6 h-6 text-gray-500",
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
}, Is = ({
  children: e,
  variant: n = "primary",
  size: t = "medium",
  rounded: r = "md",
  className: o = ""
}) => {
  const s = {
    primary: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800"
  }, i = {
    small: "px-2 py-0.5 text-xs",
    medium: "px-2.5 py-1 text-sm",
    large: "px-3 py-1.5 text-base"
  }, a = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full"
  }, u = qe(
    "inline-flex items-center font-medium",
    s[n],
    i[t],
    a[r],
    o
  );
  return /* @__PURE__ */ l.jsx("span", { className: u, children: e });
}, Un = _e(
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 shadow-sm hover:shadow-md active:shadow-none",
        secondary: "bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 shadow-sm hover:shadow-md active:shadow-none",
        outline: "border border-neutral-300 text-primary-500 hover:bg-primary-50 active:bg-primary-100 hover:border-primary-500",
        "outline-primary": "border border-primary-600 text-primary-600 hover:bg-primary-50",
        "outline-secondary": "border border-secondary-600 text-secondary-600 hover:bg-secondary-50",
        "outline-success": "border border-success-600 text-success-600 hover:bg-success-50",
        "outline-warning": "border border-warning-600 text-warning-600 hover:bg-warning-50",
        "outline-danger": "border border-danger-600 text-danger-600 hover:bg-danger-50",
        ghost: "text-primary-500 hover:bg-primary-50 active:bg-primary-100",
        link: "text-primary-500 hover:underline p-0",
        success: "bg-success-500 text-white hover:bg-success-600 active:bg-success-700 shadow-sm hover:shadow-md active:shadow-none",
        warning: "bg-warning-500 text-white hover:bg-warning-600 active:bg-warning-700 shadow-sm hover:shadow-md active:shadow-none",
        danger: "bg-danger-500 text-white hover:bg-danger-600 active:bg-danger-700 shadow-sm hover:shadow-md active:shadow-none"
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
), $e = ve(
  ({
    className: e,
    variant: n = "primary",
    size: t = "md",
    rounded: r = "md",
    fullWidth: o = !1,
    isLoading: s = !1,
    leftIcon: i,
    rightIcon: a,
    isIconOnly: u = !1,
    children: d,
    ...f
  }, p) => {
    const c = u || !!(i || a) && !d;
    return /* @__PURE__ */ l.jsxs(
      "button",
      {
        className: $(
          Un({
            variant: n,
            size: t,
            rounded: c ? "full" : r,
            fullWidth: o,
            isIconOnly: c,
            className: e
          })
        ),
        ref: p,
        disabled: f.disabled || s,
        ...f,
        children: [
          s && /* @__PURE__ */ l.jsx("span", { className: "animate-spin inline-block w-4 h-4 border-2 border-current border-r-transparent rounded-full" }),
          i && !s && /* @__PURE__ */ l.jsx(re, { icon: i, className: "w-4 h-4", inline: !0 }),
          d && /* @__PURE__ */ l.jsx("span", { children: d }),
          a && !s && /* @__PURE__ */ l.jsx(re, { icon: a, className: "w-4 h-4", inline: !0 })
        ]
      }
    );
  }
);
$e.displayName = "Button";
const Wn = _e(
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
), xr = ve(
  ({
    className: e,
    variant: n = "default",
    padding: t = "md",
    shadow: r = "none",
    rounded: o = "md",
    asChild: s = !1,
    ...i
  }, a) => /* @__PURE__ */ l.jsx(
    "div",
    {
      className: $(Wn({ variant: n, padding: t, shadow: r, rounded: o, className: e })),
      ref: a,
      ...i
    }
  )
);
xr.displayName = "Card";
const rr = {
  chart: {
    toolbar: {
      show: !1
    },
    zoom: {
      enabled: !1
    }
  },
  colors: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"],
  grid: {
    borderColor: "#E5E7EB",
    strokeDashArray: 4,
    xaxis: {
      lines: {
        show: !0
      }
    },
    yaxis: {
      lines: {
        show: !0
      }
    }
  },
  stroke: {
    curve: "smooth",
    width: 2
  },
  tooltip: {
    theme: "light",
    x: {
      show: !0
    }
  }
}, Fs = ({
  type: e,
  series: n,
  width: t = "100%",
  height: r = 350,
  options: o = {},
  className: s
}) => {
  const [i, a] = ie(null), [u, d] = ie(!1);
  Ce(() => {
    if (typeof window > "u") return;
    (async () => {
      const { default: m } = await import("./react-apexcharts.min-D7Mpsvnz.mjs").then((c) => c.r);
      a(() => m), d(!0);
    })();
  }, []);
  const f = {
    ...rr,
    ...o,
    chart: {
      ...rr.chart,
      ...o.chart,
      type: e
    }
  };
  return !u || !i ? /* @__PURE__ */ l.jsx("div", { style: { width: t, height: r }, className: s }) : /* @__PURE__ */ l.jsx("div", { className: s, children: /* @__PURE__ */ l.jsx(
    i,
    {
      type: e,
      series: n,
      options: f,
      width: t,
      height: r
    }
  ) });
}, Ps = ({
  label: e,
  error: n,
  disabled: t = !1,
  indeterminate: r = !1,
  variantSize: o = "sm",
  variant: s = "square",
  color: i = "primary",
  className: a = "",
  ...u
}) => {
  const d = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }, f = {
    primary: "checked:bg-primary-600 checked:border-primary-600 hover:border-primary-600",
    secondary: "checked:bg-secondary-600 checked:border-secondary-600 hover:border-secondary-600",
    success: "checked:bg-success-600 checked:border-success-600 hover:border-success-600",
    warning: "checked:bg-warning-600 checked:border-warning-600 hover:border-warning-600",
    error: "checked:bg-danger-600 checked:border-danger-600 hover:border-danger-600"
  }, m = qe(
    "border-2 transition-colors duration-200",
    "appearance-none cursor-pointer",
    "checked:bg-no-repeat checked:bg-center",
    s === "circle" ? 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=")]' : 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgM0w0LjUgOC41TDIgNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=")]',
    {
      square: "rounded",
      circle: "rounded-full"
    }[s],
    d[o],
    f[i],
    t && "opacity-50 cursor-not-allowed",
    a
  ), c = qe(
    "ml-2 text-sm font-medium",
    t && "opacity-50 cursor-not-allowed",
    n && "text-danger-600"
  );
  return /* @__PURE__ */ l.jsxs("div", { className: "items-center", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ l.jsx(
        "input",
        {
          type: "checkbox",
          className: m,
          disabled: t,
          ref: (x) => {
            x && (x.indeterminate = r);
          },
          ...u
        }
      ),
      e && /* @__PURE__ */ l.jsx("label", { className: c, children: e })
    ] }),
    n && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-sm text-danger-600", children: n })
  ] });
}, qn = {
  solid: {
    primary: "bg-primary-500 text-white",
    success: "bg-success-500 text-white",
    warning: "bg-warning-500 text-white",
    error: "bg-danger-500 text-white",
    info: "bg-info-500 text-white",
    danger: "bg-danger-500 text-white",
    default: "bg-neutral-500 text-white"
  },
  outline: {
    primary: "border border-primary-500 text-primary-500",
    success: "border border-success-500 text-success-500",
    warning: "border border-warning-500 text-warning-500",
    error: "border border-error-500 text-error-500",
    info: "border border-info-500 text-info-500",
    danger: "border border-danger-500 text-danger-500",
    default: "border border-neutral-500 text-neutral-500"
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
}, Yn = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5"
}, Kn = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}, Ds = ({
  children: e,
  variant: n = "solid",
  color: t = "primary",
  size: r = "md",
  rounded: o = "md",
  onClose: s,
  className: i,
  icon: a
}) => /* @__PURE__ */ l.jsxs(
  "div",
  {
    className: $(
      "inline-flex items-center gap-1.5 font-medium",
      qn[n][t],
      Yn[r],
      Kn[o],
      i
    ),
    children: [
      a && /* @__PURE__ */ l.jsx("span", { className: "inline-flex items-center", children: /* @__PURE__ */ l.jsx(re, { icon: a, className: "w-4 h-4" }) }),
      e,
      s && /* @__PURE__ */ l.jsx(
        "button",
        {
          onClick: s,
          className: "ml-1 rounded-full hover:bg-black/10 p-0.5",
          "aria-label": "Close",
          children: /* @__PURE__ */ l.jsx(re, { icon: "mdi:close", className: "w-3 h-3" })
        }
      )
    ]
  }
);
var vr = { exports: {} };
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(ln, function() {
    var t = 1e3, r = 6e4, o = 36e5, s = "millisecond", i = "second", a = "minute", u = "hour", d = "day", f = "week", p = "month", m = "quarter", c = "year", x = "date", h = "Invalid Date", b = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, w = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, y = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(I) {
      var _ = ["th", "st", "nd", "rd"], v = I % 100;
      return "[" + I + (_[(v - 20) % 10] || _[v] || _[0]) + "]";
    } }, G = function(I, _, v) {
      var S = String(I);
      return !S || S.length >= _ ? I : "" + Array(_ + 1 - S.length).join(v) + I;
    }, N = { s: G, z: function(I) {
      var _ = -I.utcOffset(), v = Math.abs(_), S = Math.floor(v / 60), C = v % 60;
      return (_ <= 0 ? "+" : "-") + G(S, 2, "0") + ":" + G(C, 2, "0");
    }, m: function I(_, v) {
      if (_.date() < v.date()) return -I(v, _);
      var S = 12 * (v.year() - _.year()) + (v.month() - _.month()), C = _.clone().add(S, p), z = v - C < 0, T = _.clone().add(S + (z ? -1 : 1), p);
      return +(-(S + (v - C) / (z ? C - T : T - C)) || 0);
    }, a: function(I) {
      return I < 0 ? Math.ceil(I) || 0 : Math.floor(I);
    }, p: function(I) {
      return { M: p, y: c, w: f, d, D: x, h: u, m: a, s: i, ms: s, Q: m }[I] || String(I || "").toLowerCase().replace(/s$/, "");
    }, u: function(I) {
      return I === void 0;
    } }, k = "en", P = {};
    P[k] = y;
    var O = "$isDayjsObject", M = function(I) {
      return I instanceof A || !(!I || !I[O]);
    }, V = function I(_, v, S) {
      var C;
      if (!_) return k;
      if (typeof _ == "string") {
        var z = _.toLowerCase();
        P[z] && (C = z), v && (P[z] = v, C = z);
        var T = _.split("-");
        if (!C && T.length > 1) return I(T[0]);
      } else {
        var E = _.name;
        P[E] = _, C = E;
      }
      return !S && C && (k = C), C || !S && k;
    }, L = function(I, _) {
      if (M(I)) return I.clone();
      var v = typeof _ == "object" ? _ : {};
      return v.date = I, v.args = arguments, new A(v);
    }, F = N;
    F.l = V, F.i = M, F.w = function(I, _) {
      return L(I, { locale: _.$L, utc: _.$u, x: _.$x, $offset: _.$offset });
    };
    var A = function() {
      function I(v) {
        this.$L = V(v.locale, null, !0), this.parse(v), this.$x = this.$x || v.x || {}, this[O] = !0;
      }
      var _ = I.prototype;
      return _.parse = function(v) {
        this.$d = function(S) {
          var C = S.date, z = S.utc;
          if (C === null) return /* @__PURE__ */ new Date(NaN);
          if (F.u(C)) return /* @__PURE__ */ new Date();
          if (C instanceof Date) return new Date(C);
          if (typeof C == "string" && !/Z$/i.test(C)) {
            var T = C.match(b);
            if (T) {
              var E = T[2] - 1 || 0, R = (T[7] || "0").substring(0, 3);
              return z ? new Date(Date.UTC(T[1], E, T[3] || 1, T[4] || 0, T[5] || 0, T[6] || 0, R)) : new Date(T[1], E, T[3] || 1, T[4] || 0, T[5] || 0, T[6] || 0, R);
            }
          }
          return new Date(C);
        }(v), this.init();
      }, _.init = function() {
        var v = this.$d;
        this.$y = v.getFullYear(), this.$M = v.getMonth(), this.$D = v.getDate(), this.$W = v.getDay(), this.$H = v.getHours(), this.$m = v.getMinutes(), this.$s = v.getSeconds(), this.$ms = v.getMilliseconds();
      }, _.$utils = function() {
        return F;
      }, _.isValid = function() {
        return this.$d.toString() !== h;
      }, _.isSame = function(v, S) {
        var C = L(v);
        return this.startOf(S) <= C && C <= this.endOf(S);
      }, _.isAfter = function(v, S) {
        return L(v) < this.startOf(S);
      }, _.isBefore = function(v, S) {
        return this.endOf(S) < L(v);
      }, _.$g = function(v, S, C) {
        return F.u(v) ? this[S] : this.set(C, v);
      }, _.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, _.valueOf = function() {
        return this.$d.getTime();
      }, _.startOf = function(v, S) {
        var C = this, z = !!F.u(S) || S, T = F.p(v), E = function(Q, ae) {
          var we = F.w(C.$u ? Date.UTC(C.$y, ae, Q) : new Date(C.$y, ae, Q), C);
          return z ? we : we.endOf(d);
        }, R = function(Q, ae) {
          return F.w(C.toDate()[Q].apply(C.toDate("s"), (z ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ae)), C);
        }, H = this.$W, Y = this.$M, te = this.$D, B = "set" + (this.$u ? "UTC" : "");
        switch (T) {
          case c:
            return z ? E(1, 0) : E(31, 11);
          case p:
            return z ? E(1, Y) : E(0, Y + 1);
          case f:
            var K = this.$locale().weekStart || 0, ne = (H < K ? H + 7 : H) - K;
            return E(z ? te - ne : te + (6 - ne), Y);
          case d:
          case x:
            return R(B + "Hours", 0);
          case u:
            return R(B + "Minutes", 1);
          case a:
            return R(B + "Seconds", 2);
          case i:
            return R(B + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, _.endOf = function(v) {
        return this.startOf(v, !1);
      }, _.$set = function(v, S) {
        var C, z = F.p(v), T = "set" + (this.$u ? "UTC" : ""), E = (C = {}, C[d] = T + "Date", C[x] = T + "Date", C[p] = T + "Month", C[c] = T + "FullYear", C[u] = T + "Hours", C[a] = T + "Minutes", C[i] = T + "Seconds", C[s] = T + "Milliseconds", C)[z], R = z === d ? this.$D + (S - this.$W) : S;
        if (z === p || z === c) {
          var H = this.clone().set(x, 1);
          H.$d[E](R), H.init(), this.$d = H.set(x, Math.min(this.$D, H.daysInMonth())).$d;
        } else E && this.$d[E](R);
        return this.init(), this;
      }, _.set = function(v, S) {
        return this.clone().$set(v, S);
      }, _.get = function(v) {
        return this[F.p(v)]();
      }, _.add = function(v, S) {
        var C, z = this;
        v = Number(v);
        var T = F.p(S), E = function(Y) {
          var te = L(z);
          return F.w(te.date(te.date() + Math.round(Y * v)), z);
        };
        if (T === p) return this.set(p, this.$M + v);
        if (T === c) return this.set(c, this.$y + v);
        if (T === d) return E(1);
        if (T === f) return E(7);
        var R = (C = {}, C[a] = r, C[u] = o, C[i] = t, C)[T] || 1, H = this.$d.getTime() + v * R;
        return F.w(H, this);
      }, _.subtract = function(v, S) {
        return this.add(-1 * v, S);
      }, _.format = function(v) {
        var S = this, C = this.$locale();
        if (!this.isValid()) return C.invalidDate || h;
        var z = v || "YYYY-MM-DDTHH:mm:ssZ", T = F.z(this), E = this.$H, R = this.$m, H = this.$M, Y = C.weekdays, te = C.months, B = C.meridiem, K = function(ae, we, X, ce) {
          return ae && (ae[we] || ae(S, z)) || X[we].slice(0, ce);
        }, ne = function(ae) {
          return F.s(E % 12 || 12, ae, "0");
        }, Q = B || function(ae, we, X) {
          var ce = ae < 12 ? "AM" : "PM";
          return X ? ce.toLowerCase() : ce;
        };
        return z.replace(w, function(ae, we) {
          return we || function(X) {
            switch (X) {
              case "YY":
                return String(S.$y).slice(-2);
              case "YYYY":
                return F.s(S.$y, 4, "0");
              case "M":
                return H + 1;
              case "MM":
                return F.s(H + 1, 2, "0");
              case "MMM":
                return K(C.monthsShort, H, te, 3);
              case "MMMM":
                return K(te, H);
              case "D":
                return S.$D;
              case "DD":
                return F.s(S.$D, 2, "0");
              case "d":
                return String(S.$W);
              case "dd":
                return K(C.weekdaysMin, S.$W, Y, 2);
              case "ddd":
                return K(C.weekdaysShort, S.$W, Y, 3);
              case "dddd":
                return Y[S.$W];
              case "H":
                return String(E);
              case "HH":
                return F.s(E, 2, "0");
              case "h":
                return ne(1);
              case "hh":
                return ne(2);
              case "a":
                return Q(E, R, !0);
              case "A":
                return Q(E, R, !1);
              case "m":
                return String(R);
              case "mm":
                return F.s(R, 2, "0");
              case "s":
                return String(S.$s);
              case "ss":
                return F.s(S.$s, 2, "0");
              case "SSS":
                return F.s(S.$ms, 3, "0");
              case "Z":
                return T;
            }
            return null;
          }(ae) || T.replace(":", "");
        });
      }, _.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, _.diff = function(v, S, C) {
        var z, T = this, E = F.p(S), R = L(v), H = (R.utcOffset() - this.utcOffset()) * r, Y = this - R, te = function() {
          return F.m(T, R);
        };
        switch (E) {
          case c:
            z = te() / 12;
            break;
          case p:
            z = te();
            break;
          case m:
            z = te() / 3;
            break;
          case f:
            z = (Y - H) / 6048e5;
            break;
          case d:
            z = (Y - H) / 864e5;
            break;
          case u:
            z = Y / o;
            break;
          case a:
            z = Y / r;
            break;
          case i:
            z = Y / t;
            break;
          default:
            z = Y;
        }
        return C ? z : F.a(z);
      }, _.daysInMonth = function() {
        return this.endOf(p).$D;
      }, _.$locale = function() {
        return P[this.$L];
      }, _.locale = function(v, S) {
        if (!v) return this.$L;
        var C = this.clone(), z = V(v, S, !0);
        return z && (C.$L = z), C;
      }, _.clone = function() {
        return F.w(this.$d, this);
      }, _.toDate = function() {
        return new Date(this.valueOf());
      }, _.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, _.toISOString = function() {
        return this.$d.toISOString();
      }, _.toString = function() {
        return this.$d.toUTCString();
      }, I;
    }(), J = A.prototype;
    return L.prototype = J, [["$ms", s], ["$s", i], ["$m", a], ["$H", u], ["$W", d], ["$M", p], ["$y", c], ["$D", x]].forEach(function(I) {
      J[I[1]] = function(_) {
        return this.$g(_, I[0], I[1]);
      };
    }), L.extend = function(I, _) {
      return I.$i || (I(_, A, L), I.$i = !0), L;
    }, L.locale = V, L.isDayjs = M, L.unix = function(I) {
      return L(1e3 * I);
    }, L.en = P[k], L.Ls = P, L.p = {}, L;
  });
})(vr);
var Zn = vr.exports;
const Se = /* @__PURE__ */ an(Zn), Jn = _e(
  "border bg-white px-3 py-2 ring-0 transition-colors placeholder:text-neutral-500 placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50",
        error: "border-danger-500 hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50",
        success: "border-success-500 hover:border-success-600 focus:border-success-600 hover:bg-success-50"
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
), Xn = ve(
  ({
    value: e,
    endDate: n,
    onChange: t,
    onEndDateChange: r,
    isRangeSelection: o = !1,
    minDate: s,
    maxDate: i,
    variant: a = "default",
    size: u = "md",
    rounded: d = "md",
    disabled: f = !1,
    errorText: p,
    helperText: m,
    label: c,
    required: x = !1,
    labelPlacement: h = "top",
    fullWidth: b = !1,
    className: w,
    placeholder: y = "Select date",
    ...G
  }, N) => {
    const [k, P] = ie(!1), [O, M] = ie(e || null), [V, L] = ie(n || null), [F, A] = ie(e || /* @__PURE__ */ new Date()), J = xe(null), I = xe(null), _ = xe(null), v = () => {
      if (!k || !I.current || !_.current) return;
      const { bottom: B, left: K, width: ne } = I.current.getBoundingClientRect(), Q = _.current, ae = Ee();
      Object.assign(Q.style, {
        position: "fixed",
        left: `${K}px`,
        top: `${B + 4}px`,
        width: `${ne}px`,
        maxHeight: `${ae.innerHeight - B - 8}px`
      });
    };
    Ce(() => {
      const B = Ee(), K = pe(), ne = () => {
        k && v();
      }, Q = () => {
        k && v();
      }, ae = (we) => {
        const X = we.target;
        J.current && !J.current.contains(X) && _.current && !_.current.contains(X) && P(!1);
      };
      return k && (v(), B.addEventListener("scroll", ne, !0), B.addEventListener("resize", Q)), K.addEventListener("click", ae), () => {
        B.removeEventListener("scroll", ne, !0), B.removeEventListener("resize", Q), K.removeEventListener("click", ae);
      };
    }, [k]);
    const S = (B) => {
      o ? O ? (Se(B).isBefore(O) ? (L(O), M(B), t == null || t(B), r == null || r(O)) : (L(B), r == null || r(B)), P(!1)) : (M(B), t == null || t(B)) : (M(B), t == null || t(B), P(!1));
    }, C = () => {
      A(Se(F).subtract(1, "month").toDate());
    }, z = () => {
      A(Se(F).add(1, "month").toDate());
    }, T = () => {
      const B = Se(F).startOf("month"), K = Se(F).endOf("month"), ne = [];
      let Q = B;
      for (; Q.isBefore(K) || Q.isSame(K, "day"); )
        ne.push(Q.toDate()), Q = Q.add(1, "day");
      return ne;
    }, E = (B) => !!(s && Se(B).isBefore(s, "day") || i && Se(B).isAfter(i, "day")), R = T(), H = Se(F).startOf("month").day(), Y = () => {
      if (!O) return "";
      const B = Se(O).format("DD MMM YYYY");
      return o && V ? `${B} - ${Se(V).format("DD MMM YYYY")}` : B;
    }, te = () => {
      if (!k) return null;
      const B = pe();
      return "body" in B ? Ye(
        /* @__PURE__ */ l.jsxs(
          "div",
          {
            ref: _,
            className: "fixed z-[9999] bg-white border border-gray-200 rounded-md shadow-lg",
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-between p-2 border-b border-gray-200", children: [
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    onClick: C,
                    className: "p-1 rounded-full hover:bg-primary-50 active:bg-primary-100 transition-colors duration-200",
                    children: /* @__PURE__ */ l.jsx(
                      re,
                      {
                        icon: "mdi:chevron-left",
                        className: "w-5 h-5 text-neutral-600"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ l.jsx("span", { className: "font-medium text-gray-900", children: Se(F).format("MMMM YYYY") }),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    onClick: z,
                    className: "p-1 rounded-full hover:bg-primary-50 active:bg-primary-100 transition-colors duration-200",
                    children: /* @__PURE__ */ l.jsx(
                      re,
                      {
                        icon: "mdi:chevron-right",
                        className: "w-5 h-5 text-neutral-600"
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "grid grid-cols-7 gap-1 p-2", children: [
                ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((K) => /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    className: "text-center text-sm font-medium text-gray-500",
                    children: K
                  },
                  K
                )),
                Array.from({ length: H }).map((K, ne) => /* @__PURE__ */ l.jsx("div", {}, `empty-${ne}`)),
                R.map((K) => {
                  const ne = O && Se(K).isSame(O, "day"), Q = E(K), ae = Se(K).isSame(F, "month");
                  return /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      onClick: () => !Q && S(K),
                      disabled: Q,
                      className: $(
                        "p-2 rounded-full text-sm transition-colors duration-200",
                        ne && "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700",
                        !ne && !Q && "hover:bg-primary-50 active:bg-primary-100",
                        !ae && "text-neutral-400",
                        Q && "opacity-50 cursor-not-allowed"
                      ),
                      children: Se(K).format("D")
                    },
                    K.toString()
                  );
                })
              ] })
            ]
          }
        ),
        B.body
      ) : null;
    };
    return /* @__PURE__ */ l.jsxs("div", { ref: J, className: $("relative", b && "w-full", w), children: [
      c && /* @__PURE__ */ l.jsxs(
        "label",
        {
          className: $(
            "block text-sm font-medium text-gray-700 mb-1",
            h === "left" && "inline-block mr-2"
          ),
          children: [
            c,
            x && /* @__PURE__ */ l.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ l.jsx("div", { ref: I, children: /* @__PURE__ */ l.jsx(
        "input",
        {
          ref: N,
          type: "text",
          value: Y(),
          placeholder: y,
          onClick: () => !f && P(!k),
          readOnly: !0,
          className: $(Jn({ variant: a, size: u, rounded: d, fullWidth: b })),
          disabled: f,
          ...G
        }
      ) }),
      te(),
      p && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-sm text-red-500", children: p }),
      m && !p && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-sm text-gray-500", children: m })
    ] });
  }
);
Xn.displayName = "DatePicker";
const br = ve(
  ({ children: e, onClose: n, className: t, ...r }, o) => /* @__PURE__ */ l.jsxs(
    "div",
    {
      ref: o,
      className: $("mb-4 flex items-center justify-between", t),
      ...r,
      children: [
        e,
        n && /* @__PURE__ */ l.jsx(
          "button",
          {
            onClick: n,
            className: "ml-4 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700",
            "aria-label": "Close dialog",
            children: /* @__PURE__ */ l.jsx(re, { icon: "mdi:close", className: "h-5 w-5" })
          }
        )
      ]
    }
  )
), Qn = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-4xl",
  fullscreen: "w-full h-full max-w-none max-h-none rounded-none"
}, eo = ve(
  ({
    isOpen: e,
    onClose: n,
    children: t,
    className: r,
    backdrop: o = "dark",
    header: s,
    closeOnBackdropClick: i = !0,
    size: a = "md",
    ...u
  }, d) => {
    const [f, p] = ie(!1), [m, c] = ie(!1);
    if (Ce(() => {
      if (e) {
        p(!0), c(!0);
        const w = pe();
        "body" in w && (w.body.style.overflow = "hidden");
      } else {
        c(!1);
        const w = setTimeout(() => {
          p(!1);
          const y = pe();
          "body" in y && (y.body.style.overflow = "");
        }, 300);
        return () => clearTimeout(w);
      }
    }, [e]), Ce(() => {
      const w = (y) => {
        y instanceof KeyboardEvent && y.key === "Escape" && n();
      };
      return e && pe().addEventListener("keydown", w), () => {
        pe().removeEventListener("keydown", w);
      };
    }, [e, n]), !f) return null;
    const x = {
      blur: "backdrop-blur-sm bg-black/30",
      dark: "bg-black/50",
      transparent: "bg-transparent"
    }, h = () => {
      i && n();
    }, b = pe();
    return "body" in b ? Ye(
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: $(
            "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300",
            x[o],
            m ? "opacity-100" : "opacity-0",
            a === "fullscreen" && "items-start"
          ),
          onClick: h,
          children: /* @__PURE__ */ l.jsxs(
            "div",
            {
              ref: d,
              className: $(
                "relative transform rounded-lg bg-white p-6 shadow-xl transition-all duration-300",
                Qn[a],
                m ? "scale-100 opacity-100" : "scale-95 opacity-0",
                r
              ),
              onClick: (w) => w.stopPropagation(),
              ...u,
              children: [
                s && /* @__PURE__ */ l.jsx(br, { onClose: n, children: s }),
                t
              ]
            }
          )
        }
      ),
      b.body
    ) : null;
  }
), to = ve(
  ({ children: e, className: n, ...t }, r) => /* @__PURE__ */ l.jsx(
    "h2",
    {
      ref: r,
      className: $("text-xl font-semibold text-gray-900", n),
      ...t,
      children: e
    }
  )
), ro = ve(
  ({ children: e, className: n, ...t }, r) => /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: r,
      className: $("text-gray-600", n),
      ...t,
      children: e
    }
  )
), no = ve(
  ({ children: e, className: n, ...t }, r) => /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: r,
      className: $("mt-6 flex justify-end gap-3", n),
      ...t,
      children: e
    }
  )
);
eo.displayName = "Dialog";
to.displayName = "DialogTitle";
ro.displayName = "DialogBody";
no.displayName = "DialogActions";
br.displayName = "DialogHeader";
const oo = ({
  orientation: e = "horizontal",
  variant: n = "solid",
  color: t = "neutral",
  size: r = "sm",
  className: o = ""
}) => {
  const s = {
    horizontal: "w-full border-t-0 border-l-0 border-r-0 border-b",
    vertical: "h-full border-l border-t-0 border-r-0 border-b-0"
  }, i = {
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted"
  }, a = {
    primary: "border-primary-300",
    secondary: "border-secondary-300",
    neutral: "border-neutral-300",
    success: "border-success-300",
    warning: "border-warning-300",
    error: "border-error-300"
  }, u = {
    sm: e === "horizontal" ? "border-b" : "border-l",
    md: e === "horizontal" ? "border-b-2" : "border-l-2",
    lg: e === "horizontal" ? "border-b-4" : "border-l-4"
  }, d = qe(
    "inline-block",
    s[e],
    i[n],
    a[t],
    u[r],
    o
  );
  return /* @__PURE__ */ l.jsx("div", { className: d });
}, Vs = ({
  accept: e = ["*"],
  maxSize: n = 5 * 1024 * 1024,
  // 5MB default
  multiple: t = !1,
  value: r = [],
  onChange: o,
  className: s,
  disabled: i = !1,
  placeholder: a = "Drag and drop files here or click to browse"
}) => {
  const [u, d] = ie(!1), [f, p] = ie(null), m = xe(null), c = Ve((N) => {
    N.preventDefault(), i || d(!0);
  }, [i]), x = Ve((N) => {
    N.preventDefault(), d(!1);
  }, []), h = Ve((N) => N.size > n ? `File size exceeds ${n / (1024 * 1024)}MB limit` : e[0] !== "*" && !e.some((k) => k.startsWith(".") ? N.name.toLowerCase().endsWith(k.toLowerCase()) : N.type.startsWith(k)) ? `File type not allowed. Allowed types: ${e.join(", ")}` : null, [e, n]), b = Ve((N) => {
    if (N.preventDefault(), d(!1), p(null), i) return;
    const k = Array.from(N.dataTransfer.files), P = [], O = [];
    if (k.forEach((M) => {
      const V = h(M);
      V ? O.push(`${M.name}: ${V}`) : P.push(M);
    }), O.length > 0 && p(O.join(`
`)), P.length > 0) {
      const M = t ? [...r, ...P] : P;
      o == null || o(M);
    }
  }, [i, t, o, h, r]), w = Ve((N) => {
    if (p(null), i || !N.target.files) return;
    const k = Array.from(N.target.files), P = [], O = [];
    if (k.forEach((M) => {
      const V = h(M);
      V ? O.push(`${M.name}: ${V}`) : P.push(M);
    }), O.length > 0 && p(O.join(`
`)), P.length > 0) {
      const M = t ? [...r, ...P] : P;
      o == null || o(M);
    }
    m.current && (m.current.value = "");
  }, [i, t, o, h, r]), y = Ve((N) => {
    const k = [...r];
    k.splice(N, 1), o == null || o(k);
  }, [o, r]), G = (N) => N.type.startsWith("image/") ? /* @__PURE__ */ l.jsx(re, { icon: "mdi:image", className: "w-5 h-5" }) : N.type.startsWith("text/") ? /* @__PURE__ */ l.jsx(re, { icon: "mdi:file-document", className: "w-5 h-5" }) : /* @__PURE__ */ l.jsx(re, { icon: "mdi:file", className: "w-5 h-5" });
  return /* @__PURE__ */ l.jsxs("div", { className: se("w-full", s), children: [
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: se(
          "border-2 border-dashed rounded-lg p-6 text-center transition-colors",
          "bg-neutral-50",
          "border-neutral-300",
          u && "border-primary bg-primary-50",
          i && "opacity-50 cursor-not-allowed",
          !i && "cursor-pointer hover:border-primary/50"
        ),
        onDragOver: c,
        onDragLeave: x,
        onDrop: b,
        onClick: () => {
          var N;
          return !i && ((N = m.current) == null ? void 0 : N.click());
        },
        children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              ref: m,
              type: "file",
              accept: e.join(","),
              multiple: t,
              onChange: w,
              className: "hidden",
              disabled: i
            }
          ),
          /* @__PURE__ */ l.jsx(re, { icon: "mdi:upload", className: "w-12 h-12 mx-auto mb-4 text-neutral-400" }),
          /* @__PURE__ */ l.jsx("p", { className: "text-neutral-600", children: a }),
          /* @__PURE__ */ l.jsxs("p", { className: "text-sm text-neutral-500 mt-2", children: [
            "Max file size: ",
            n / (1024 * 1024),
            "MB"
          ] })
        ]
      }
    ),
    f && /* @__PURE__ */ l.jsx("p", { className: "mt-2 text-sm text-danger", children: f }),
    r.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "mt-4 space-y-2", children: r.map((N, k) => /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: "flex items-center justify-between p-2 rounded-md bg-neutral-100",
        children: [
          /* @__PURE__ */ l.jsxs("div", { className: "flex items-center space-x-2", children: [
            G(N),
            /* @__PURE__ */ l.jsx("span", { className: "text-sm text-neutral-700", children: N.name }),
            /* @__PURE__ */ l.jsxs("span", { className: "text-xs text-neutral-500", children: [
              "(",
              (N.size / 1024).toFixed(1),
              " KB)"
            ] })
          ] }),
          !i && /* @__PURE__ */ l.jsx(
            "button",
            {
              onClick: () => y(k),
              className: "p-1 text-neutral-500 hover:text-danger",
              children: /* @__PURE__ */ l.jsx(re, { icon: "mdi:close", className: "w-4 h-4" })
            }
          )
        ]
      },
      `${N.name}-${k}`
    )) })
  ] });
}, so = _e(
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
  title: e,
  children: n,
  icon: t,
  variant: r = "default",
  rounded: o = "md",
  showClose: s = !1,
  onClose: i,
  className: a
}) => {
  const u = () => {
    switch (r) {
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
  }, d = () => {
    if (t) return t;
    switch (r) {
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
  return /* @__PURE__ */ l.jsxs("div", { className: $(so({ variant: r, rounded: o }), a), children: [
    t && /* @__PURE__ */ l.jsx(re, { icon: d(), className: $("h-5 w-5 flex-shrink-0", u()) }),
    /* @__PURE__ */ l.jsxs("div", { className: "flex-1", children: [
      e && /* @__PURE__ */ l.jsx("h3", { className: "text-sm font-medium text-neutral-900", children: e }),
      /* @__PURE__ */ l.jsx("div", { className: "mt-1 text-sm text-neutral-500", children: n })
    ] }),
    s && /* @__PURE__ */ l.jsx(
      "button",
      {
        type: "button",
        className: "ml-auto flex-shrink-0 text-neutral-400 hover:text-neutral-500",
        onClick: i,
        children: /* @__PURE__ */ l.jsx(re, { icon: "mdi:close", className: "h-5 w-5" })
      }
    )
  ] });
}, pt = "select-dropdown-opened", io = _e(
  "rounded-md px-3 py-2 text-sm ring-0 transition-colors placeholder:text-neutral-500 placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50 bg-white",
        error: "border border-danger-500 hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50 bg-white",
        success: "border border-success-500 hover:border-success-600 focus:border-success-600 bg-white",
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
), wr = ve(
  ({
    className: e,
    variant: n = "default",
    size: t = "md",
    rounded: r = "md",
    options: o,
    label: s,
    error: i = !1,
    helperText: a,
    required: u = !1,
    placeholder: d,
    value: f,
    onChange: p,
    disabled: m = !1,
    position: c = "bottom",
    fullWidth: x = !0,
    children: h,
    leftIcon: b,
    rightIcon: w,
    ...y
  }, G) => {
    const [N, k] = ie(!1), P = xe(null), O = xe(null), V = `select-${Ae.useId().replace(/:/g, "")}`, L = () => {
      if (N && P.current && O.current) {
        const v = P.current.getBoundingClientRect(), S = O.current, C = Ee(), z = C.innerHeight - v.bottom, T = v.top, R = v.bottom + S.offsetHeight + 4 >= C.innerHeight, H = T > z, Y = R && H;
        c === "bottom" || c === "top" ? (S.style.position = "fixed", S.style.left = `${v.left}px`, S.style.width = `${v.width}px`, c === "bottom" && Y ? (S.style.bottom = `${C.innerHeight - v.top + 4}px`, S.style.top = "auto", S.style.maxHeight = `${T - 8}px`) : c === "bottom" ? (S.style.top = `${v.bottom + 4}px`, S.style.bottom = "auto", S.style.maxHeight = `${z - 8}px`) : c === "top" && !Y ? (S.style.top = `${v.bottom + 4}px`, S.style.bottom = "auto", S.style.maxHeight = `${z - 8}px`) : (S.style.bottom = `${C.innerHeight - v.top + 4}px`, S.style.top = "auto", S.style.maxHeight = `${T - 8}px`)) : c === "left" ? (S.style.position = "fixed", S.style.right = `${C.innerWidth - v.left + 4}px`, S.style.top = `${v.top}px`, S.style.maxHeight = `${C.innerHeight - v.top - 8}px`) : c === "right" && (S.style.position = "fixed", S.style.left = `${v.right + 4}px`, S.style.top = `${v.top}px`, S.style.maxHeight = `${C.innerHeight - v.top - 8}px`);
      }
    };
    Ce(() => {
      const v = Ee(), S = () => {
        N && L();
      }, C = () => {
        N && L();
      };
      return N && (L(), v.addEventListener("scroll", S, !0), v.addEventListener("resize", C)), () => {
        v.removeEventListener("scroll", S, !0), v.removeEventListener("resize", C);
      };
    }, [N, c]), Ce(() => {
      const v = pe(), S = (z) => {
        z.detail.id !== V && k(!1);
      }, C = (z) => {
        const T = z.target, E = P.current, R = O.current;
        E && R && !E.contains(T) && !R.contains(T) && k(!1);
      };
      return v.addEventListener(pt, S), v.addEventListener("click", C), () => {
        v.removeEventListener(pt, S), v.removeEventListener("click", C);
      };
    }, [V]);
    const F = () => {
      if (m) return;
      if (N) {
        k(!1);
        return;
      }
      pe().dispatchEvent(
        new CustomEvent(pt, {
          detail: { id: V }
        })
      ), k(!0);
    }, A = () => {
      if (o) {
        const v = o.find((S) => S.value === f);
        return v == null ? void 0 : v.label;
      }
      if (h) {
        const S = Kt.toArray(h).find(
          (C) => gt(C) && "value" in C.props && C.props.value === f
        );
        return gt(S) ? S.props.children : null;
      }
      return null;
    }, J = (v) => {
      m || (p == null || p(v), k(!1));
    }, I = () => o ? o.map((v) => /* @__PURE__ */ l.jsx(
      st,
      {
        value: v.value,
        disabled: v.disabled,
        selected: v.value === f,
        onClick: () => J(v.value),
        children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
          v.icon,
          v.label
        ] })
      },
      v.value
    )) : h ? Kt.map(h, (v) => gt(v) && "value" in v.props ? nn(v, {
      selected: v.props.value === f,
      onClick: () => J(v.props.value)
    }) : null) : null, _ = () => {
      if (!N || m) return null;
      const v = /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: O,
          className: $(
            "fixed z-[9999] min-w-[8rem] border border-neutral-200 bg-white py-1 shadow-lg",
            {
              "rounded-none": r === "none",
              "rounded-sm": r === "sm",
              "rounded-md": r === "md",
              "rounded-lg": r === "lg",
              "rounded-xl": r === "full"
            },
            c === "left" || c === "right" ? "w-max" : "w-full"
          ),
          onClick: (C) => C.stopPropagation(),
          style: {
            overflowY: "auto"
          },
          children: I()
        }
      ), S = pe();
      return "body" in S ? Ye(v, S.body) : null;
    };
    return /* @__PURE__ */ l.jsxs("div", { className: $(x ? "w-full" : "inline-block"), ref: G, ...y, children: [
      s && /* @__PURE__ */ l.jsxs(
        "label",
        {
          htmlFor: V,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            s,
            u && /* @__PURE__ */ l.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: $("relative", !x && "inline-block"), children: [
        /* @__PURE__ */ l.jsxs(
          "button",
          {
            id: V,
            ref: P,
            type: "button",
            className: $(
              io({ variant: i ? "error" : n, size: t, rounded: r, fullWidth: x }),
              "flex items-center justify-between",
              m && "cursor-not-allowed opacity-50",
              b && "pl-10",
              w && "pr-10",
              e
            ),
            onClick: F,
            "aria-haspopup": "listbox",
            "aria-expanded": N,
            "aria-describedby": i ? `${V}-error` : a ? `${V}-helper` : void 0,
            disabled: m,
            children: [
              b && /* @__PURE__ */ l.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500", children: /* @__PURE__ */ l.jsx(re, { icon: b, className: "w-4 h-4" }) }),
              /* @__PURE__ */ l.jsx("span", { className: "flex items-center text-neutral-500 gap-2 min-w-0 flex-1", children: /* @__PURE__ */ l.jsx("span", { className: "truncate", children: A() || d }) }),
              w ? /* @__PURE__ */ l.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500", children: /* @__PURE__ */ l.jsx(re, { icon: w, className: "w-4 h-4" }) }) : /* @__PURE__ */ l.jsx(
                re,
                {
                  icon: "mdi:chevron-down",
                  className: $("transition-transform flex-shrink-0 ml-2", N && "rotate-180")
                }
              )
            ]
          }
        ),
        _()
      ] }),
      i && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger-500", id: `${V}-error`, children: i }),
      !i && a && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral-500", id: `${V}-helper`, children: a })
    ] });
  }
);
wr.displayName = "Select";
const lo = ({
  currentPage: e,
  totalPages: n,
  totalData: t,
  onPageChange: r,
  siblingCount: o = 1,
  className: s,
  perPageOptions: i,
  perPage: a = 10,
  label: u = "",
  onPerPageChange: d
}) => {
  const f = (c, x) => {
    const h = x - c + 1;
    return Array.from({ length: h }, (b, w) => w + c);
  }, m = (() => {
    const c = o * 2 + 3, x = c + 2;
    if (n > x) {
      const h = Math.max(2, e - o), b = Math.min(n - 1, e + o);
      let w = f(h, b);
      const y = h > 2, G = n - b > 1, N = c - (w.length + 1);
      if (y && !G)
        w = [...f(h - N, h - 1), ...w];
      else if (!y && G) {
        const k = f(b + 1, b + N);
        w = [...w, ...k];
      } else y && G && (w = [...w]);
      return [1, ...w, n];
    }
    return f(1, n);
  })();
  return /* @__PURE__ */ l.jsxs(
    "nav",
    {
      className: se("flex items-center justify-between space-x-1", s),
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "hidden sm:block text-sm text-neutral-700", children: [
          /* @__PURE__ */ l.jsx("b", { children: `${e} - ${n}` }),
          " dari ",
          t,
          " ",
          u
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
          i && i.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2 mr-4", children: [
            /* @__PURE__ */ l.jsx("span", { className: "text-neutral-700 text-sm", children: "Menampilkan" }),
            /* @__PURE__ */ l.jsx(
              wr,
              {
                value: a == null ? void 0 : a.toString(),
                onChange: (c) => d && d(Number(c)),
                size: "sm",
                className: "w-16",
                fullWidth: !1,
                "aria-label": "Items per page",
                children: i.map((c) => /* @__PURE__ */ l.jsx(st, { value: c.toString(), children: c }, c))
              }
            ),
            /* @__PURE__ */ l.jsx("span", { className: "text-neutral-700 text-sm", children: "data per halaman" })
          ] }),
          /* @__PURE__ */ l.jsx(
            $e,
            {
              variant: "ghost",
              onClick: () => r(e - 1),
              disabled: e === 1,
              className: se(
                "px-3 py-1 rounded-md text-sm",
                e === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
              ),
              children: /* @__PURE__ */ l.jsx(re, { size: "18", icon: "mdi:chevron-left" })
            }
          ),
          m.map((c, x) => {
            const h = c === e, b = typeof c == "string" && c === "...";
            return /* @__PURE__ */ l.jsx(
              $e,
              {
                variant: "ghost",
                onClick: () => !b && r(c),
                className: se(
                  "px-3 py-1 rounded-md text-sm",
                  h ? "bg-primary text-white hover:bg-primary" : "text-gray-700",
                  b && "cursor-default"
                ),
                children: c
              },
              x
            );
          }),
          /* @__PURE__ */ l.jsx(
            $e,
            {
              variant: "ghost",
              onClick: () => r(e + 1),
              disabled: e === n,
              className: se(
                "px-3 py-1 rounded-md text-sm",
                e === n ? "text-gray-400 cursor-not-allowed" : "text-gray-700"
              ),
              children: /* @__PURE__ */ l.jsx(re, { size: "18", icon: "mdi:chevron-right" })
            }
          )
        ] })
      ]
    }
  );
}, Os = ({
  label: e,
  checked: n = !1,
  disabled: t = !1,
  onChange: r,
  name: o,
  value: s
}) => {
  const i = (a) => {
    r && r(a.target.checked);
  };
  return /* @__PURE__ */ l.jsxs(
    "label",
    {
      className: se(
        "inline-flex items-center cursor-pointer",
        t && "opacity-60 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "radio",
            className: se(
              "w-5 h-5 border-2 rounded-full appearance-none",
              "focus:outline-none focus:ring-2 focus:ring-primary/25",
              n ? "border-primary bg-primary" : "border-gray-300 hover:border-primary",
              t && "cursor-not-allowed"
            ),
            checked: n,
            disabled: t,
            onChange: i,
            name: o,
            value: s
          }
        ),
        e && /* @__PURE__ */ l.jsx("span", { className: "ml-2 text-sm text-gray-700 dark:text-gray-300", children: e })
      ]
    }
  );
}, ao = _e(
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
), uo = ({
  width: e,
  height: n,
  variant: t = "default",
  rounded: r = "md",
  fullWidth: o = !1,
  className: s
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: $(ao({ variant: t, rounded: r, fullWidth: o }), s),
    style: {
      width: !o && typeof e == "number" ? `${e}px` : e,
      height: typeof n == "number" ? `${n}px` : n
    }
  }
), Ls = ({
  min: e = 0,
  max: n = 100,
  step: t = 1,
  value: r,
  defaultValue: o = e,
  onChange: s,
  className: i,
  disabled: a = !1,
  showValue: u = !1,
  marks: d = []
}) => {
  const [f, p] = ie(o), [m, c] = ie(!1), x = xe(null), h = r !== void 0 ? r : f, b = (P) => {
    if (a) return;
    const O = Math.min(Math.max(P, e), n);
    r === void 0 && p(O), s == null || s(O);
  }, w = (P) => {
    a || (c(!0), N(P));
  }, y = (P) => {
    !m || a || N(P);
  }, G = () => {
    c(!1);
  }, N = (P) => {
    if (!x.current) return;
    const O = x.current.getBoundingClientRect(), V = (P.clientX - O.left) / O.width, L = e + (n - e) * V, F = Math.round(L / t) * t;
    b(F);
  };
  Ce(() => {
    if (m) {
      const P = Ee();
      P.addEventListener("mousemove", y), P.addEventListener("mouseup", G);
    }
    return () => {
      const P = Ee();
      P.removeEventListener("mousemove", y), P.removeEventListener("mouseup", G);
    };
  }, [m]);
  const k = (h - e) / (n - e) * 100;
  return /* @__PURE__ */ l.jsxs("div", { className: se("relative w-full", i), children: [
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: x,
        className: se(
          "relative h-2 bg-gray-200 rounded-full cursor-pointer",
          a && "opacity-50 cursor-not-allowed"
        ),
        onMouseDown: w,
        children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "absolute h-full bg-primary rounded-full",
              style: { width: `${k}%` }
            }
          ),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: se(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                a && "cursor-not-allowed"
              ),
              style: { left: `${k}%`, transform: "translate(-50%, -50%)" }
            }
          )
        ]
      }
    ),
    d.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "flex justify-between mt-2", children: d.map((P) => /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "text-xs text-gray-500",
        style: { left: `${(P.value - e) / (n - e) * 100}%` },
        children: P.label
      },
      P.value
    )) }),
    u && /* @__PURE__ */ l.jsx("div", { className: "mt-2 text-sm text-gray-600", children: h })
  ] });
}, co = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8"
}, go = {
  primary: "text-primary",
  warning: "text-warning-500",
  default: "text-default-400"
}, zs = ({
  rating: e,
  maxRating: n = 5,
  size: t = "md",
  color: r = "primary",
  readOnly: o = !1,
  onRatingChange: s,
  className: i
}) => {
  const [a, u] = ie(null), d = (c) => {
    o || u(c);
  }, f = () => {
    o || u(null);
  }, p = (c) => {
    !o && s && s(c);
  }, m = a !== null ? a : e;
  return /* @__PURE__ */ l.jsx("div", { className: $("flex items-center gap-1", i), children: [...Array(n)].map((c, x) => {
    const h = x + 1, b = h <= m, w = a !== null && h <= a;
    return /* @__PURE__ */ l.jsx(
      "button",
      {
        className: $(
          "transition-colors duration-200",
          co[t],
          b || w ? go[r] : "text-default-200",
          !o && "cursor-pointer"
        ),
        onMouseEnter: () => d(h),
        onMouseLeave: f,
        onClick: () => p(h),
        disabled: o,
        "aria-label": `Rate ${h} out of ${n}`,
        children: /* @__PURE__ */ l.jsx(
          re,
          {
            icon: b || w ? "mdi:star" : "mdi:star-outline",
            className: "w-full h-full"
          }
        )
      },
      x
    );
  }) });
}, fo = {
  active: {
    bgColor: "bg-success-500",
    label: "Active"
  },
  inactive: {
    bgColor: "bg-default-400",
    label: "Inactive"
  },
  pending: {
    bgColor: "bg-warning-500",
    label: "Pending"
  },
  warning: {
    bgColor: "bg-warning-500",
    label: "Warning"
  },
  error: {
    bgColor: "bg-danger-500",
    label: "Error"
  }
}, mo = {
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4"
}, Ts = ({
  status: e,
  size: n = "md",
  withLabel: t = !1,
  className: r
}) => {
  const { bgColor: o, label: s } = fo[e], i = mo[n];
  return /* @__PURE__ */ l.jsxs("div", { className: $("flex items-center gap-2", r), children: [
    /* @__PURE__ */ l.jsx("div", { className: $("rounded-full animate-pulse", o, i) }),
    t && /* @__PURE__ */ l.jsx("span", { className: "text-sm", children: s })
  ] });
}, yr = (e, n) => {
  if (n) return n;
  switch (e) {
    case "completed":
      return "mdi:check";
    case "active":
      return "mdi:circle-medium";
    default:
      return "mdi:circle-outline";
  }
}, Sr = (e) => {
  switch (e) {
    case "completed":
      return "text-white bg-primary-500 ring-4 ring-primary-50";
    case "active":
      return "text-primary-500 bg-primary-50 ring-4 ring-primary-50";
    default:
      return "text-neutral-400 bg-neutral-50 ring-4 ring-neutral-50";
  }
}, po = ({
  steps: e,
  activeStep: n,
  className: t,
  variant: r = "default"
}) => /* @__PURE__ */ l.jsx("div", { className: $("flex flex-row items-center w-full justify-between", t), children: e.map((o, s) => {
  const i = s < n ? "completed" : s === n ? "active" : "pending";
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: "flex items-center flex-1",
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: $(
          "flex flex-col items-center z-10",
          r === "default" ? "gap-4" : "gap-2",
          r === "default" ? "px-5" : "px-3"
        ), children: [
          r === "default" && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: $(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                Sr(i)
              ),
              children: /* @__PURE__ */ l.jsx(
                re,
                {
                  icon: yr(i, o.icon),
                  className: "h-5 w-5"
                }
              )
            }
          ),
          /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-center text-center", children: [
            /* @__PURE__ */ l.jsx(
              "span",
              {
                className: $(
                  "text-sm font-medium",
                  i === "active" ? "text-primary-500" : i === "completed" ? "text-neutral-900" : "text-neutral-500"
                ),
                children: o.label
              }
            ),
            o.description && /* @__PURE__ */ l.jsx("span", { className: "text-xs text-neutral-500", children: o.description })
          ] })
        ] }),
        s < e.length - 1 && /* @__PURE__ */ l.jsx(
          oo,
          {
            className: $(
              "transition-all duration-200",
              s < n ? "bg-primary-500" : "bg-neutral-200"
            )
          }
        )
      ]
    },
    s
  );
}) }), ho = ({
  steps: e,
  activeStep: n,
  className: t,
  variant: r = "default"
}) => /* @__PURE__ */ l.jsx("div", { className: $("flex flex-col items-start gap-8", t), children: e.map((o, s) => {
  const i = s < n ? "completed" : s === n ? "active" : "pending";
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: "flex flex-row w-full items-center relative",
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: $(
          "flex flex-row items-center z-10",
          r === "default" ? "gap-4" : "gap-2"
        ), children: [
          r === "default" && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: $(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                Sr(i)
              ),
              children: /* @__PURE__ */ l.jsx(
                re,
                {
                  icon: yr(i, o.icon),
                  className: "h-5 w-5"
                }
              )
            }
          ),
          /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-start", children: [
            /* @__PURE__ */ l.jsx(
              "span",
              {
                className: $(
                  "text-sm font-medium",
                  i === "active" ? "text-primary-500" : i === "completed" ? "text-neutral-900" : "text-neutral-500"
                ),
                children: o.label
              }
            ),
            o.description && /* @__PURE__ */ l.jsx("span", { className: "text-xs text-neutral-500", children: o.description })
          ] })
        ] }),
        s < e.length - 1 && /* @__PURE__ */ l.jsx(
          "div",
          {
            className: $(
              "absolute transition-all duration-200",
              r === "default" ? "left-4 w-[1px] top-10 bottom-[-24px]" : "left-0 w-[1px] top-6 bottom-[-24px]",
              s < n ? "bg-primary-500" : "bg-neutral-200"
            )
          }
        )
      ]
    },
    s
  );
}) }), Hs = ({
  orientation: e = "horizontal",
  variant: n = "default",
  ...t
}) => e === "vertical" ? /* @__PURE__ */ l.jsx(ho, { variant: n, ...t }) : /* @__PURE__ */ l.jsx(po, { variant: n, ...t }), Gs = ({
  label: e,
  checked: n = !1,
  disabled: t = !1,
  onChange: r,
  size: o = "md"
}) => {
  const s = (u) => {
    r && r(u.target.checked);
  }, i = {
    sm: "w-8 h-4",
    md: "w-11 h-6",
    lg: "w-14 h-7"
  }, a = {
    sm: "w-3 h-3",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };
  return /* @__PURE__ */ l.jsxs(
    "label",
    {
      className: se(
        "inline-flex items-center cursor-pointer",
        t && "opacity-60 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              className: "sr-only",
              checked: n,
              disabled: t,
              onChange: s
            }
          ),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: se(
                "block rounded-full transition-colors duration-200 ease-in-out",
                i[o],
                n ? "bg-primary" : "bg-gray-200 dark:bg-gray-700",
                t && "cursor-not-allowed"
              )
            }
          ),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: se(
                "absolute rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out",
                a[o],
                n ? o === "sm" ? "translate-x-4" : o === "md" ? "translate-x-5" : "translate-x-7" : "translate-x-0.5",
                "top-1/2 -translate-y-1/2"
              )
            }
          )
        ] }),
        e && /* @__PURE__ */ l.jsx("span", { className: "ml-3 text-sm text-gray-700 dark:text-gray-300", children: e })
      ]
    }
  );
}, Bs = ({
  items: e,
  defaultActiveId: n,
  variant: t = "default",
  size: r = "md",
  className: o,
  tabListClassName: s,
  tabClassName: i,
  contentClassName: a,
  onChange: u
}) => {
  var x, h;
  const [d, f] = ie(n || ((x = e[0]) == null ? void 0 : x.id) || ""), p = Ve((b) => {
    f(b), u == null || u(b);
  }, [u]), m = () => {
    switch (r) {
      case "sm":
        return "text-sm px-3 py-1.5";
      case "lg":
        return "text-lg px-6 py-3";
      default:
        return "text-base px-4 py-2";
    }
  }, c = (b, w) => {
    const y = se(
      "flex items-center space-x-2 transition-colors",
      "font-medium",
      m(),
      w && "opacity-50 cursor-not-allowed",
      !w && "cursor-pointer"
    );
    switch (t) {
      case "pills":
        return se(
          y,
          "rounded-full",
          b ? "bg-primary text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        );
      case "underline":
        return se(
          y,
          "border-b-2",
          b ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
      default:
        return se(
          y,
          "border-b-2",
          b ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
    }
  };
  return /* @__PURE__ */ l.jsxs("div", { className: se("w-full", o), children: [
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: se(
          "flex space-x-1 border-b border-gray-200 dark:border-gray-700",
          t === "pills" && "space-x-2 border-b-0",
          s
        ),
        children: e.map((b) => {
          const w = b.id === d, y = !!b.disabled;
          return /* @__PURE__ */ l.jsxs(
            "button",
            {
              onClick: () => !y && p(b.id),
              disabled: y,
              className: se(
                c(w, y),
                i
              ),
              children: [
                b.icon && /* @__PURE__ */ l.jsx(
                  re,
                  {
                    icon: b.icon,
                    className: "w-5 h-5 flex-shrink-0"
                  }
                ),
                /* @__PURE__ */ l.jsx("span", { children: b.label })
              ]
            },
            b.id
          );
        })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: se("mt-4", a), children: (h = e.find((b) => b.id === d)) == null ? void 0 : h.content })
  ] });
}, xo = ({
  variant: e = "p",
  children: n,
  className: t,
  as: r
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
  }, i = r || ((a) => {
    switch (a) {
      case "display1":
      case "display2":
      case "heading1":
      case "heading2":
      case "heading3":
      case "heading4":
        return "h" + a.slice(-1);
      case "body1":
      case "body2":
      case "subtitle1":
      case "subtitle2":
        return "p";
      case "caption":
      case "value":
        return "span";
      default:
        return a;
    }
  })(e);
  return /* @__PURE__ */ l.jsx(i, { className: $("text-gray-900", o[e], t), children: n });
}, ht = "timepicker-dropdown-opened", vo = _e(
  "border bg-white px-3 py-2 ring-0 transition-colors placeholder:text-neutral-500 placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50",
        error: "border-danger-500 hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50",
        success: "border-success-500 hover:border-success-600 focus:border-success-600 hover:bg-success-50"
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
), bo = ve(
  ({
    value: e,
    onChange: n,
    use24Hour: t = !1,
    variant: r = "default",
    size: o = "md",
    rounded: s = "md",
    disabled: i = !1,
    errorText: a,
    helperText: u,
    label: d,
    required: f = !1,
    labelPlacement: p = "top",
    fullWidth: m = !1,
    className: c,
    placeholder: x = "Select time",
    ...h
  }, b) => {
    const [w, y] = ie(!1), [G, N] = ie(e || ""), [k, P] = ie(0), [O, M] = ie(0), [V, L] = ie(!0), F = xe(null), A = xe(null), J = xe(null), _ = `timepicker-${Ae.useId().replace(/:/g, "")}`, v = () => {
      if (!w || !A.current || !J.current) return;
      const R = A.current.getBoundingClientRect(), H = J.current, Y = H.offsetHeight, te = Ee(), B = te.innerHeight - R.bottom, K = R.top, ne = R.bottom + Y + 4 >= te.innerHeight, Q = K > B;
      ne && Q ? (H.style.bottom = `${te.innerHeight - R.top + 4}px`, H.style.top = "auto", H.style.maxHeight = `${K - 8}px`) : (H.style.top = `${R.bottom + 4}px`, H.style.bottom = "auto", H.style.maxHeight = `${B - 8}px`);
    };
    Ce(() => {
      const R = Ee(), H = pe(), Y = () => {
        w && v();
      }, te = () => {
        w && v();
      }, B = (ne) => {
        ne.detail.id !== _ && y(!1);
      }, K = (ne) => {
        const Q = ne.target;
        F.current && J.current && !F.current.contains(Q) && !J.current.contains(Q) && y(!1);
      };
      return w && (v(), R.addEventListener("scroll", Y, !0), R.addEventListener("resize", te)), H.addEventListener(ht, B), H.addEventListener("mousedown", K), () => {
        R.removeEventListener("scroll", Y, !0), R.removeEventListener("resize", te), H.removeEventListener(ht, B), H.removeEventListener("mousedown", K);
      };
    }, [w, _]);
    const S = () => {
      i || (w || pe().dispatchEvent(
        new CustomEvent(ht, {
          detail: { id: _ }
        })
      ), y(!w));
    };
    Ce(() => {
      if (e) {
        N(e);
        const [R, H] = e.split(":").map(Number);
        t ? P(R) : (P(R % 12 || 12), L(R < 12)), M(H);
      }
    }, [e, t]);
    const C = () => {
      const H = `${(t || V ? k : k + 12).toString().padStart(2, "0")}:${O.toString().padStart(2, "0")}`;
      N(H), n == null || n(H), y(!1);
    }, z = () => t ? Array.from({ length: 24 }, (R, H) => H) : Array.from({ length: 12 }, (R, H) => H + 1), T = () => Array.from({ length: 60 }, (R, H) => H), E = pe();
    return "body" in E ? /* @__PURE__ */ l.jsxs("div", { ref: F, className: $("relative", m && "w-full", c), children: [
      d && /* @__PURE__ */ l.jsxs(
        "label",
        {
          className: $(
            "block text-sm font-medium text-gray-700 mb-1",
            p === "left" && "inline-block mr-2"
          ),
          children: [
            d,
            f && /* @__PURE__ */ l.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ l.jsx("div", { ref: A, children: /* @__PURE__ */ l.jsx(
        "input",
        {
          ref: b,
          type: "text",
          value: G,
          placeholder: x,
          onClick: S,
          readOnly: !0,
          className: $(vo({ variant: r, size: o, rounded: s, fullWidth: m })),
          disabled: i,
          ...h
        }
      ) }),
      w && Ye(
        /* @__PURE__ */ l.jsx(
          "div",
          {
            ref: J,
            className: "fixed z-[9999] min-w-[320px] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            onClick: (R) => R.stopPropagation(),
            children: /* @__PURE__ */ l.jsxs("div", { className: "p-4", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "grid grid-cols-3 gap-4 text-sm font-medium text-gray-500", children: [
                /* @__PURE__ */ l.jsx("span", { children: "Hours" }),
                /* @__PURE__ */ l.jsx("span", { children: "Minutes" }),
                !t && /* @__PURE__ */ l.jsx("span", { children: "AM/PM" })
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "flex justify-between gap-4 mt-2", children: [
                /* @__PURE__ */ l.jsx("div", { className: "w-24 flex flex-col", children: /* @__PURE__ */ l.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ l.jsx("div", { className: "flex flex-col gap-1 py-1", children: z().map((R) => /* @__PURE__ */ l.jsx(
                  $e,
                  {
                    variant: "ghost",
                    onClick: () => P(R),
                    className: $(
                      "px-3 py-1.5 text-sm rounded hover:bg-gray-100 w-full justify-start",
                      k === R && "bg-primary-100 text-primary-700"
                    ),
                    children: R.toString().padStart(2, "0")
                  },
                  R
                )) }) }) }),
                /* @__PURE__ */ l.jsx("div", { className: "w-24 flex flex-col", children: /* @__PURE__ */ l.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ l.jsx("div", { className: "flex flex-col gap-1 py-1", children: T().map((R) => /* @__PURE__ */ l.jsx(
                  $e,
                  {
                    variant: "ghost",
                    onClick: () => M(R),
                    className: $(
                      "px-3 py-1.5 text-sm rounded hover:bg-gray-100 w-full justify-start",
                      O === R && "bg-primary-100 text-primary-700"
                    ),
                    children: R.toString().padStart(2, "0")
                  },
                  R
                )) }) }) }),
                !t && /* @__PURE__ */ l.jsxs("div", { className: "w-24 flex flex-col gap-2", children: [
                  /* @__PURE__ */ l.jsx(
                    $e,
                    {
                      variant: "ghost",
                      onClick: () => L(!0),
                      className: $(
                        "px-3 py-1.5 text-sm rounded hover:bg-gray-100 w-full justify-start",
                        V && "bg-primary-100 text-primary-700"
                      ),
                      children: "AM"
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    $e,
                    {
                      variant: "ghost",
                      onClick: () => L(!1),
                      className: $(
                        "px-3 py-1.5 text-sm rounded hover:bg-gray-100 w-full justify-start",
                        !V && "bg-primary-100 text-primary-700"
                      ),
                      children: "PM"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "mt-4 flex justify-end", children: /* @__PURE__ */ l.jsx(
                $e,
                {
                  variant: "primary",
                  onClick: C,
                  size: "sm",
                  children: "Select"
                }
              ) })
            ] })
          }
        ),
        E.body
      ),
      a && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-sm text-danger-600", children: a }),
      u && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-sm text-gray-500", children: u })
    ] }) : null;
  }
);
bo.displayName = "TimePicker";
const wo = _e(
  "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-neutral-200 data-[state=checked]:bg-primary-500 focus-visible:ring-primary-500",
        success: "bg-neutral-200 data-[state=checked]:bg-success-500 focus-visible:ring-success-500",
        warning: "bg-neutral-200 data-[state=checked]:bg-warning-500 focus-visible:ring-warning-500",
        danger: "bg-neutral-200 data-[state=checked]:bg-danger-500 focus-visible:ring-danger-500"
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
), yo = _e(
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
), So = ve(
  ({
    checked: e = !1,
    onCheckedChange: n,
    variant: t = "primary",
    size: r = "md",
    label: o,
    required: s = !1,
    helperText: i,
    errorText: a,
    error: u = !1,
    className: d,
    ...f
  }, p) => {
    const m = Ae.useId(), c = `${m}-helper`, x = `${m}-error`;
    return /* @__PURE__ */ l.jsxs("div", { className: "inline-flex flex-col gap-1.5", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            role: "switch",
            "aria-checked": e,
            "data-state": e ? "checked" : "unchecked",
            onClick: () => n == null ? void 0 : n(!e),
            ref: p,
            className: $(wo({ variant: u ? "danger" : t, size: r }), d),
            "aria-describedby": u ? x : i ? c : void 0,
            "aria-invalid": u,
            "aria-required": s,
            ...f,
            children: /* @__PURE__ */ l.jsx(
              "span",
              {
                "data-state": e ? "checked" : "unchecked",
                className: $(
                  yo({ size: r }),
                  e ? "translate-x-5" : "translate-x-1"
                )
              }
            )
          }
        ),
        o && /* @__PURE__ */ l.jsxs(
          "label",
          {
            htmlFor: m,
            className: "text-sm text-neutral-900",
            children: [
              o,
              s && /* @__PURE__ */ l.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
            ]
          }
        )
      ] }),
      u && a && /* @__PURE__ */ l.jsx("p", { className: "text-xs text-danger-500", id: x, children: a }),
      !u && i && /* @__PURE__ */ l.jsx("p", { className: "text-xs text-neutral-500", id: c, children: i })
    ] });
  }
);
So.displayName = "Toggle";
const Us = ({
  content: e,
  children: n,
  position: t = "top",
  delay: r = 0,
  className: o
}) => {
  const [s, i] = ie(!1), [a, u] = ie({ top: 0, left: 0 }), d = xe(null), f = xe(null);
  let p;
  const m = () => {
    if (!d.current || !f.current) return;
    const h = f.current.getBoundingClientRect(), b = d.current.getBoundingClientRect();
    let w = 0, y = 0;
    switch (t) {
      case "top":
        w = h.top - b.height - 8, y = h.left + (h.width - b.width) / 2;
        break;
      case "bottom":
        w = h.bottom + 8, y = h.left + (h.width - b.width) / 2;
        break;
      case "left":
        w = h.top + (h.height - b.height) / 2, y = h.left - b.width - 8;
        break;
      case "right":
        w = h.top + (h.height - b.height) / 2, y = h.right + 8;
        break;
    }
    u({ top: w, left: y });
  };
  Ce(() => {
    if (s) {
      m();
      const h = Ee();
      h.addEventListener("scroll", m), h.addEventListener("resize", m);
    }
    return () => {
      const h = Ee();
      h.removeEventListener("scroll", m), h.removeEventListener("resize", m);
    };
  }, [s, t]);
  const c = () => {
    p = setTimeout(() => {
      i(!0);
    }, r);
  }, x = () => {
    clearTimeout(p), i(!1);
  };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      ref: f,
      className: "relative inline-block",
      onMouseEnter: c,
      onMouseLeave: x,
      children: [
        n,
        s && /* @__PURE__ */ l.jsxs(
          "div",
          {
            ref: d,
            className: se(
              "absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-md shadow-lg",
              "transition-opacity duration-200",
              o
            ),
            style: {
              top: `${a.top}px`,
              left: `${a.left}px`
            },
            children: [
              e,
              /* @__PURE__ */ l.jsx(
                "div",
                {
                  className: se(
                    "absolute w-2 h-2 bg-gray-900 transform rotate-45",
                    t === "top" && "bottom-[-4px] left-1/2 -translate-x-1/2",
                    t === "bottom" && "top-[-4px] left-1/2 -translate-x-1/2",
                    t === "left" && "right-[-4px] top-1/2 -translate-y-1/2",
                    t === "right" && "left-[-4px] top-1/2 -translate-y-1/2"
                  )
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Co = _e("flex items-center text-sm", {
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
}), Ro = ve(
  ({
    className: e,
    variant: n = "default",
    size: t = "md",
    items: r,
    separator: o = /* @__PURE__ */ l.jsx(re, { icon: "mdi:slash-forward", className: "h-4 w-4 flex-shrink-0" }),
    activeLastItem: s = !0,
    ...i
  }, a) => /* @__PURE__ */ l.jsx(
    "nav",
    {
      ref: a,
      className: $(Co({ variant: n, size: t }), e),
      "aria-label": "Breadcrumb",
      ...i,
      children: /* @__PURE__ */ l.jsx("ol", { className: "flex flex-wrap items-center gap-1.5", children: r.map((u, d) => {
        const f = d === r.length - 1, p = f && s;
        return /* @__PURE__ */ l.jsxs(
          "li",
          {
            className: $(
              "flex items-center gap-1.5",
              p && "text-primary-500 font-medium"
            ),
            children: [
              u.icon && /* @__PURE__ */ l.jsx(
                re,
                {
                  icon: u.icon,
                  className: $(
                    "flex-shrink-0",
                    t === "sm" && "h-3.5 w-3.5",
                    t === "md" && "h-4 w-4",
                    t === "lg" && "h-5 w-5"
                  )
                }
              ),
              u.href && !p ? /* @__PURE__ */ l.jsx(
                "a",
                {
                  href: u.href,
                  className: $(
                    "transition-colors duration-200",
                    "hover:text-primary-500 hover:underline focus:outline-none",
                    "focus-visible:text-primary-500 focus-visible:underline",
                    "active:text-primary-600"
                  ),
                  children: /* @__PURE__ */ l.jsx("span", { className: "truncate max-w-[200px] inline-block align-bottom", children: u.label })
                }
              ) : /* @__PURE__ */ l.jsx("span", { className: $(
                "truncate max-w-[200px] inline-block",
                p && "text-primary-500"
              ), children: u.label }),
              !f && /* @__PURE__ */ l.jsx("span", { className: $(
                "text-neutral-400 flex-shrink-0",
                t === "sm" && "scale-90",
                t === "lg" && "scale-110"
              ), children: o })
            ]
          },
          u.label
        );
      }) })
    }
  )
);
Ro.displayName = "Breadcrumbs";
/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function Te(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function je(e, n) {
  return (t) => {
    n.setState((r) => ({
      ...r,
      [e]: Te(t, r[e])
    }));
  };
}
function it(e) {
  return e instanceof Function;
}
function jo(e) {
  return Array.isArray(e) && e.every((n) => typeof n == "number");
}
function _o(e, n) {
  const t = [], r = (o) => {
    o.forEach((s) => {
      t.push(s);
      const i = n(s);
      i != null && i.length && r(i);
    });
  };
  return r(e), t;
}
function U(e, n, t) {
  let r = [], o;
  return (s) => {
    let i;
    t.key && t.debug && (i = Date.now());
    const a = e(s);
    if (!(a.length !== r.length || a.some((f, p) => r[p] !== f)))
      return o;
    r = a;
    let d;
    if (t.key && t.debug && (d = Date.now()), o = n(...a), t == null || t.onChange == null || t.onChange(o), t.key && t.debug && t != null && t.debug()) {
      const f = Math.round((Date.now() - i) * 100) / 100, p = Math.round((Date.now() - d) * 100) / 100, m = p / 16, c = (x, h) => {
        for (x = String(x); x.length < h; )
          x = " " + x;
        return x;
      };
      console.info(`%c⏱ ${c(p, 5)} /${c(f, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * m, 120))}deg 100% 31%);`, t == null ? void 0 : t.key);
    }
    return o;
  };
}
function W(e, n, t, r) {
  return {
    debug: () => {
      var o;
      return (o = e == null ? void 0 : e.debugAll) != null ? o : e[n];
    },
    key: process.env.NODE_ENV === "development" && t,
    onChange: r
  };
}
function No(e, n, t, r) {
  const o = () => {
    var i;
    return (i = s.getValue()) != null ? i : e.options.renderFallbackValue;
  }, s = {
    id: `${n.id}_${t.id}`,
    row: n,
    column: t,
    getValue: () => n.getValue(r),
    renderValue: o,
    getContext: U(() => [e, t, n, s], (i, a, u, d) => ({
      table: i,
      column: a,
      row: u,
      cell: d,
      getValue: d.getValue,
      renderValue: d.renderValue
    }), W(e.options, "debugCells", "cell.getContext"))
  };
  return e._features.forEach((i) => {
    i.createCell == null || i.createCell(s, t, n, e);
  }, {}), s;
}
function $o(e, n, t, r) {
  var o, s;
  const a = {
    ...e._getDefaultColumnDef(),
    ...n
  }, u = a.accessorKey;
  let d = (o = (s = a.id) != null ? s : u ? typeof String.prototype.replaceAll == "function" ? u.replaceAll(".", "_") : u.replace(/\./g, "_") : void 0) != null ? o : typeof a.header == "string" ? a.header : void 0, f;
  if (a.accessorFn ? f = a.accessorFn : u && (u.includes(".") ? f = (m) => {
    let c = m;
    for (const h of u.split(".")) {
      var x;
      c = (x = c) == null ? void 0 : x[h], process.env.NODE_ENV !== "production" && c === void 0 && console.warn(`"${h}" in deeply nested key "${u}" returned undefined.`);
    }
    return c;
  } : f = (m) => m[a.accessorKey]), !d)
    throw process.env.NODE_ENV !== "production" ? new Error(a.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header") : new Error();
  let p = {
    id: `${String(d)}`,
    accessorFn: f,
    parent: r,
    depth: t,
    columnDef: a,
    columns: [],
    getFlatColumns: U(() => [!0], () => {
      var m;
      return [p, ...(m = p.columns) == null ? void 0 : m.flatMap((c) => c.getFlatColumns())];
    }, W(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: U(() => [e._getOrderColumnsFn()], (m) => {
      var c;
      if ((c = p.columns) != null && c.length) {
        let x = p.columns.flatMap((h) => h.getLeafColumns());
        return m(x);
      }
      return [p];
    }, W(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const m of e._features)
    m.createColumn == null || m.createColumn(p, e);
  return p;
}
const he = "debugHeaders";
function nr(e, n, t) {
  var r;
  let s = {
    id: (r = t.id) != null ? r : n.id,
    column: n,
    index: t.index,
    isPlaceholder: !!t.isPlaceholder,
    placeholderId: t.placeholderId,
    depth: t.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const i = [], a = (u) => {
        u.subHeaders && u.subHeaders.length && u.subHeaders.map(a), i.push(u);
      };
      return a(s), i;
    },
    getContext: () => ({
      table: e,
      header: s,
      column: n
    })
  };
  return e._features.forEach((i) => {
    i.createHeader == null || i.createHeader(s, e);
  }), s;
}
const Eo = {
  createTable: (e) => {
    e.getHeaderGroups = U(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, r, o) => {
      var s, i;
      const a = (s = r == null ? void 0 : r.map((p) => t.find((m) => m.id === p)).filter(Boolean)) != null ? s : [], u = (i = o == null ? void 0 : o.map((p) => t.find((m) => m.id === p)).filter(Boolean)) != null ? i : [], d = t.filter((p) => !(r != null && r.includes(p.id)) && !(o != null && o.includes(p.id)));
      return rt(n, [...a, ...d, ...u], e);
    }, W(e.options, he, "getHeaderGroups")), e.getCenterHeaderGroups = U(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, r, o) => (t = t.filter((s) => !(r != null && r.includes(s.id)) && !(o != null && o.includes(s.id))), rt(n, t, e, "center")), W(e.options, he, "getCenterHeaderGroups")), e.getLeftHeaderGroups = U(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (n, t, r) => {
      var o;
      const s = (o = r == null ? void 0 : r.map((i) => t.find((a) => a.id === i)).filter(Boolean)) != null ? o : [];
      return rt(n, s, e, "left");
    }, W(e.options, he, "getLeftHeaderGroups")), e.getRightHeaderGroups = U(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (n, t, r) => {
      var o;
      const s = (o = r == null ? void 0 : r.map((i) => t.find((a) => a.id === i)).filter(Boolean)) != null ? o : [];
      return rt(n, s, e, "right");
    }, W(e.options, he, "getRightHeaderGroups")), e.getFooterGroups = U(() => [e.getHeaderGroups()], (n) => [...n].reverse(), W(e.options, he, "getFooterGroups")), e.getLeftFooterGroups = U(() => [e.getLeftHeaderGroups()], (n) => [...n].reverse(), W(e.options, he, "getLeftFooterGroups")), e.getCenterFooterGroups = U(() => [e.getCenterHeaderGroups()], (n) => [...n].reverse(), W(e.options, he, "getCenterFooterGroups")), e.getRightFooterGroups = U(() => [e.getRightHeaderGroups()], (n) => [...n].reverse(), W(e.options, he, "getRightFooterGroups")), e.getFlatHeaders = U(() => [e.getHeaderGroups()], (n) => n.map((t) => t.headers).flat(), W(e.options, he, "getFlatHeaders")), e.getLeftFlatHeaders = U(() => [e.getLeftHeaderGroups()], (n) => n.map((t) => t.headers).flat(), W(e.options, he, "getLeftFlatHeaders")), e.getCenterFlatHeaders = U(() => [e.getCenterHeaderGroups()], (n) => n.map((t) => t.headers).flat(), W(e.options, he, "getCenterFlatHeaders")), e.getRightFlatHeaders = U(() => [e.getRightHeaderGroups()], (n) => n.map((t) => t.headers).flat(), W(e.options, he, "getRightFlatHeaders")), e.getCenterLeafHeaders = U(() => [e.getCenterFlatHeaders()], (n) => n.filter((t) => {
      var r;
      return !((r = t.subHeaders) != null && r.length);
    }), W(e.options, he, "getCenterLeafHeaders")), e.getLeftLeafHeaders = U(() => [e.getLeftFlatHeaders()], (n) => n.filter((t) => {
      var r;
      return !((r = t.subHeaders) != null && r.length);
    }), W(e.options, he, "getLeftLeafHeaders")), e.getRightLeafHeaders = U(() => [e.getRightFlatHeaders()], (n) => n.filter((t) => {
      var r;
      return !((r = t.subHeaders) != null && r.length);
    }), W(e.options, he, "getRightLeafHeaders")), e.getLeafHeaders = U(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (n, t, r) => {
      var o, s, i, a, u, d;
      return [...(o = (s = n[0]) == null ? void 0 : s.headers) != null ? o : [], ...(i = (a = t[0]) == null ? void 0 : a.headers) != null ? i : [], ...(u = (d = r[0]) == null ? void 0 : d.headers) != null ? u : []].map((f) => f.getLeafHeaders()).flat();
    }, W(e.options, he, "getLeafHeaders"));
  }
};
function rt(e, n, t, r) {
  var o, s;
  let i = 0;
  const a = function(m, c) {
    c === void 0 && (c = 1), i = Math.max(i, c), m.filter((x) => x.getIsVisible()).forEach((x) => {
      var h;
      (h = x.columns) != null && h.length && a(x.columns, c + 1);
    }, 0);
  };
  a(e);
  let u = [];
  const d = (m, c) => {
    const x = {
      depth: c,
      id: [r, `${c}`].filter(Boolean).join("_"),
      headers: []
    }, h = [];
    m.forEach((b) => {
      const w = [...h].reverse()[0], y = b.column.depth === x.depth;
      let G, N = !1;
      if (y && b.column.parent ? G = b.column.parent : (G = b.column, N = !0), w && (w == null ? void 0 : w.column) === G)
        w.subHeaders.push(b);
      else {
        const k = nr(t, G, {
          id: [r, c, G.id, b == null ? void 0 : b.id].filter(Boolean).join("_"),
          isPlaceholder: N,
          placeholderId: N ? `${h.filter((P) => P.column === G).length}` : void 0,
          depth: c,
          index: h.length
        });
        k.subHeaders.push(b), h.push(k);
      }
      x.headers.push(b), b.headerGroup = x;
    }), u.push(x), c > 0 && d(h, c - 1);
  }, f = n.map((m, c) => nr(t, m, {
    depth: i,
    index: c
  }));
  d(f, i - 1), u.reverse();
  const p = (m) => m.filter((x) => x.column.getIsVisible()).map((x) => {
    let h = 0, b = 0, w = [0];
    x.subHeaders && x.subHeaders.length ? (w = [], p(x.subHeaders).forEach((G) => {
      let {
        colSpan: N,
        rowSpan: k
      } = G;
      h += N, w.push(k);
    })) : h = 1;
    const y = Math.min(...w);
    return b = b + y, x.colSpan = h, x.rowSpan = b, {
      colSpan: h,
      rowSpan: b
    };
  });
  return p((o = (s = u[0]) == null ? void 0 : s.headers) != null ? o : []), u;
}
const Mo = (e, n, t, r, o, s, i) => {
  let a = {
    id: n,
    index: r,
    original: t,
    depth: o,
    parentId: i,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (u) => {
      if (a._valuesCache.hasOwnProperty(u))
        return a._valuesCache[u];
      const d = e.getColumn(u);
      if (d != null && d.accessorFn)
        return a._valuesCache[u] = d.accessorFn(a.original, r), a._valuesCache[u];
    },
    getUniqueValues: (u) => {
      if (a._uniqueValuesCache.hasOwnProperty(u))
        return a._uniqueValuesCache[u];
      const d = e.getColumn(u);
      if (d != null && d.accessorFn)
        return d.columnDef.getUniqueValues ? (a._uniqueValuesCache[u] = d.columnDef.getUniqueValues(a.original, r), a._uniqueValuesCache[u]) : (a._uniqueValuesCache[u] = [a.getValue(u)], a._uniqueValuesCache[u]);
    },
    renderValue: (u) => {
      var d;
      return (d = a.getValue(u)) != null ? d : e.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => _o(a.subRows, (u) => u.subRows),
    getParentRow: () => a.parentId ? e.getRow(a.parentId, !0) : void 0,
    getParentRows: () => {
      let u = [], d = a;
      for (; ; ) {
        const f = d.getParentRow();
        if (!f) break;
        u.push(f), d = f;
      }
      return u.reverse();
    },
    getAllCells: U(() => [e.getAllLeafColumns()], (u) => u.map((d) => No(e, a, d, d.id)), W(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: U(() => [a.getAllCells()], (u) => u.reduce((d, f) => (d[f.column.id] = f, d), {}), W(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let u = 0; u < e._features.length; u++) {
    const d = e._features[u];
    d == null || d.createRow == null || d.createRow(a, e);
  }
  return a;
}, ko = {
  createColumn: (e, n) => {
    e._getFacetedRowModel = n.options.getFacetedRowModel && n.options.getFacetedRowModel(n, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : n.getPreFilteredRowModel(), e._getFacetedUniqueValues = n.options.getFacetedUniqueValues && n.options.getFacetedUniqueValues(n, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = n.options.getFacetedMinMaxValues && n.options.getFacetedMinMaxValues(n, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, Cr = (e, n, t) => {
  var r, o;
  const s = t == null || (r = t.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(n)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(s));
};
Cr.autoRemove = (e) => ke(e);
const Rr = (e, n, t) => {
  var r;
  return !!(!((r = e.getValue(n)) == null || (r = r.toString()) == null) && r.includes(t));
};
Rr.autoRemove = (e) => ke(e);
const jr = (e, n, t) => {
  var r;
  return ((r = e.getValue(n)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (t == null ? void 0 : t.toLowerCase());
};
jr.autoRemove = (e) => ke(e);
const _r = (e, n, t) => {
  var r;
  return (r = e.getValue(n)) == null ? void 0 : r.includes(t);
};
_r.autoRemove = (e) => ke(e);
const Nr = (e, n, t) => !t.some((r) => {
  var o;
  return !((o = e.getValue(n)) != null && o.includes(r));
});
Nr.autoRemove = (e) => ke(e) || !(e != null && e.length);
const $r = (e, n, t) => t.some((r) => {
  var o;
  return (o = e.getValue(n)) == null ? void 0 : o.includes(r);
});
$r.autoRemove = (e) => ke(e) || !(e != null && e.length);
const Er = (e, n, t) => e.getValue(n) === t;
Er.autoRemove = (e) => ke(e);
const Mr = (e, n, t) => e.getValue(n) == t;
Mr.autoRemove = (e) => ke(e);
const Pt = (e, n, t) => {
  let [r, o] = t;
  const s = e.getValue(n);
  return s >= r && s <= o;
};
Pt.resolveFilterValue = (e) => {
  let [n, t] = e, r = typeof n != "number" ? parseFloat(n) : n, o = typeof t != "number" ? parseFloat(t) : t, s = n === null || Number.isNaN(r) ? -1 / 0 : r, i = t === null || Number.isNaN(o) ? 1 / 0 : o;
  if (s > i) {
    const a = s;
    s = i, i = a;
  }
  return [s, i];
};
Pt.autoRemove = (e) => ke(e) || ke(e[0]) && ke(e[1]);
const De = {
  includesString: Cr,
  includesStringSensitive: Rr,
  equalsString: jr,
  arrIncludes: _r,
  arrIncludesAll: Nr,
  arrIncludesSome: $r,
  equals: Er,
  weakEquals: Mr,
  inNumberRange: Pt
};
function ke(e) {
  return e == null || e === "";
}
const Io = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: je("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, n) => {
    e.getAutoFilterFn = () => {
      const t = n.getCoreRowModel().flatRows[0], r = t == null ? void 0 : t.getValue(e.id);
      return typeof r == "string" ? De.includesString : typeof r == "number" ? De.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? De.equals : Array.isArray(r) ? De.arrIncludes : De.weakEquals;
    }, e.getFilterFn = () => {
      var t, r;
      return it(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (t = (r = n.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? t : De[e.columnDef.filterFn]
      );
    }, e.getCanFilter = () => {
      var t, r, o;
      return ((t = e.columnDef.enableColumnFilter) != null ? t : !0) && ((r = n.options.enableColumnFilters) != null ? r : !0) && ((o = n.options.enableFilters) != null ? o : !0) && !!e.accessorFn;
    }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
      var t;
      return (t = n.getState().columnFilters) == null || (t = t.find((r) => r.id === e.id)) == null ? void 0 : t.value;
    }, e.getFilterIndex = () => {
      var t, r;
      return (t = (r = n.getState().columnFilters) == null ? void 0 : r.findIndex((o) => o.id === e.id)) != null ? t : -1;
    }, e.setFilterValue = (t) => {
      n.setColumnFilters((r) => {
        const o = e.getFilterFn(), s = r == null ? void 0 : r.find((f) => f.id === e.id), i = Te(t, s ? s.value : void 0);
        if (or(o, i, e)) {
          var a;
          return (a = r == null ? void 0 : r.filter((f) => f.id !== e.id)) != null ? a : [];
        }
        const u = {
          id: e.id,
          value: i
        };
        if (s) {
          var d;
          return (d = r == null ? void 0 : r.map((f) => f.id === e.id ? u : f)) != null ? d : [];
        }
        return r != null && r.length ? [...r, u] : [u];
      });
    };
  },
  createRow: (e, n) => {
    e.columnFilters = {}, e.columnFiltersMeta = {};
  },
  createTable: (e) => {
    e.setColumnFilters = (n) => {
      const t = e.getAllLeafColumns(), r = (o) => {
        var s;
        return (s = Te(n, o)) == null ? void 0 : s.filter((i) => {
          const a = t.find((u) => u.id === i.id);
          if (a) {
            const u = a.getFilterFn();
            if (or(u, i.value, a))
              return !1;
          }
          return !0;
        });
      };
      e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(r);
    }, e.resetColumnFilters = (n) => {
      var t, r;
      e.setColumnFilters(n ? [] : (t = (r = e.initialState) == null ? void 0 : r.columnFilters) != null ? t : []);
    }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
  }
};
function or(e, n, t) {
  return (e && e.autoRemove ? e.autoRemove(n, t) : !1) || typeof n > "u" || typeof n == "string" && !n;
}
const Fo = (e, n, t) => t.reduce((r, o) => {
  const s = o.getValue(e);
  return r + (typeof s == "number" ? s : 0);
}, 0), Po = (e, n, t) => {
  let r;
  return t.forEach((o) => {
    const s = o.getValue(e);
    s != null && (r > s || r === void 0 && s >= s) && (r = s);
  }), r;
}, Do = (e, n, t) => {
  let r;
  return t.forEach((o) => {
    const s = o.getValue(e);
    s != null && (r < s || r === void 0 && s >= s) && (r = s);
  }), r;
}, Vo = (e, n, t) => {
  let r, o;
  return t.forEach((s) => {
    const i = s.getValue(e);
    i != null && (r === void 0 ? i >= i && (r = o = i) : (r > i && (r = i), o < i && (o = i)));
  }), [r, o];
}, Ao = (e, n) => {
  let t = 0, r = 0;
  if (n.forEach((o) => {
    let s = o.getValue(e);
    s != null && (s = +s) >= s && (++t, r += s);
  }), t) return r / t;
}, Oo = (e, n) => {
  if (!n.length)
    return;
  const t = n.map((s) => s.getValue(e));
  if (!jo(t))
    return;
  if (t.length === 1)
    return t[0];
  const r = Math.floor(t.length / 2), o = t.sort((s, i) => s - i);
  return t.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, Lo = (e, n) => Array.from(new Set(n.map((t) => t.getValue(e))).values()), zo = (e, n) => new Set(n.map((t) => t.getValue(e))).size, To = (e, n) => n.length, xt = {
  sum: Fo,
  min: Po,
  max: Do,
  extent: Vo,
  mean: Ao,
  median: Oo,
  unique: Lo,
  uniqueCount: zo,
  count: To
}, Ho = {
  getDefaultColumnDef: () => ({
    aggregatedCell: (e) => {
      var n, t;
      return (n = (t = e.getValue()) == null || t.toString == null ? void 0 : t.toString()) != null ? n : null;
    },
    aggregationFn: "auto"
  }),
  getInitialState: (e) => ({
    grouping: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGroupingChange: je("grouping", e),
    groupedColumnMode: "reorder"
  }),
  createColumn: (e, n) => {
    e.toggleGrouping = () => {
      n.setGrouping((t) => t != null && t.includes(e.id) ? t.filter((r) => r !== e.id) : [...t ?? [], e.id]);
    }, e.getCanGroup = () => {
      var t, r;
      return ((t = e.columnDef.enableGrouping) != null ? t : !0) && ((r = n.options.enableGrouping) != null ? r : !0) && (!!e.accessorFn || !!e.columnDef.getGroupingValue);
    }, e.getIsGrouped = () => {
      var t;
      return (t = n.getState().grouping) == null ? void 0 : t.includes(e.id);
    }, e.getGroupedIndex = () => {
      var t;
      return (t = n.getState().grouping) == null ? void 0 : t.indexOf(e.id);
    }, e.getToggleGroupingHandler = () => {
      const t = e.getCanGroup();
      return () => {
        t && e.toggleGrouping();
      };
    }, e.getAutoAggregationFn = () => {
      const t = n.getCoreRowModel().flatRows[0], r = t == null ? void 0 : t.getValue(e.id);
      if (typeof r == "number")
        return xt.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return xt.extent;
    }, e.getAggregationFn = () => {
      var t, r;
      if (!e)
        throw new Error();
      return it(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (t = (r = n.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? t : xt[e.columnDef.aggregationFn];
    };
  },
  createTable: (e) => {
    e.setGrouping = (n) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(n), e.resetGrouping = (n) => {
      var t, r;
      e.setGrouping(n ? [] : (t = (r = e.initialState) == null ? void 0 : r.grouping) != null ? t : []);
    }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
  },
  createRow: (e, n) => {
    e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (t) => {
      if (e._groupingValuesCache.hasOwnProperty(t))
        return e._groupingValuesCache[t];
      const r = n.getColumn(t);
      return r != null && r.columnDef.getGroupingValue ? (e._groupingValuesCache[t] = r.columnDef.getGroupingValue(e.original), e._groupingValuesCache[t]) : e.getValue(t);
    }, e._groupingValuesCache = {};
  },
  createCell: (e, n, t, r) => {
    e.getIsGrouped = () => n.getIsGrouped() && n.id === t.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && n.getIsGrouped(), e.getIsAggregated = () => {
      var o;
      return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((o = t.subRows) != null && o.length);
    };
  }
};
function Go(e, n, t) {
  if (!(n != null && n.length) || !t)
    return e;
  const r = e.filter((s) => !n.includes(s.id));
  return t === "remove" ? r : [...n.map((s) => e.find((i) => i.id === s)).filter(Boolean), ...r];
}
const Bo = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: je("columnOrder", e)
  }),
  createColumn: (e, n) => {
    e.getIndex = U((t) => [tt(n, t)], (t) => t.findIndex((r) => r.id === e.id), W(n.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (t) => {
      var r;
      return ((r = tt(n, t)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (t) => {
      var r;
      const o = tt(n, t);
      return ((r = o[o.length - 1]) == null ? void 0 : r.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (n) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(n), e.resetColumnOrder = (n) => {
      var t;
      e.setColumnOrder(n ? [] : (t = e.initialState.columnOrder) != null ? t : []);
    }, e._getOrderColumnsFn = U(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (n, t, r) => (o) => {
      let s = [];
      if (!(n != null && n.length))
        s = o;
      else {
        const i = [...n], a = [...o];
        for (; a.length && i.length; ) {
          const u = i.shift(), d = a.findIndex((f) => f.id === u);
          d > -1 && s.push(a.splice(d, 1)[0]);
        }
        s = [...s, ...a];
      }
      return Go(s, t, r);
    }, W(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, vt = () => ({
  left: [],
  right: []
}), Uo = {
  getInitialState: (e) => ({
    columnPinning: vt(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: je("columnPinning", e)
  }),
  createColumn: (e, n) => {
    e.pin = (t) => {
      const r = e.getLeafColumns().map((o) => o.id).filter(Boolean);
      n.setColumnPinning((o) => {
        var s, i;
        if (t === "right") {
          var a, u;
          return {
            left: ((a = o == null ? void 0 : o.left) != null ? a : []).filter((p) => !(r != null && r.includes(p))),
            right: [...((u = o == null ? void 0 : o.right) != null ? u : []).filter((p) => !(r != null && r.includes(p))), ...r]
          };
        }
        if (t === "left") {
          var d, f;
          return {
            left: [...((d = o == null ? void 0 : o.left) != null ? d : []).filter((p) => !(r != null && r.includes(p))), ...r],
            right: ((f = o == null ? void 0 : o.right) != null ? f : []).filter((p) => !(r != null && r.includes(p)))
          };
        }
        return {
          left: ((s = o == null ? void 0 : o.left) != null ? s : []).filter((p) => !(r != null && r.includes(p))),
          right: ((i = o == null ? void 0 : o.right) != null ? i : []).filter((p) => !(r != null && r.includes(p)))
        };
      });
    }, e.getCanPin = () => e.getLeafColumns().some((r) => {
      var o, s, i;
      return ((o = r.columnDef.enablePinning) != null ? o : !0) && ((s = (i = n.options.enableColumnPinning) != null ? i : n.options.enablePinning) != null ? s : !0);
    }), e.getIsPinned = () => {
      const t = e.getLeafColumns().map((a) => a.id), {
        left: r,
        right: o
      } = n.getState().columnPinning, s = t.some((a) => r == null ? void 0 : r.includes(a)), i = t.some((a) => o == null ? void 0 : o.includes(a));
      return s ? "left" : i ? "right" : !1;
    }, e.getPinnedIndex = () => {
      var t, r;
      const o = e.getIsPinned();
      return o ? (t = (r = n.getState().columnPinning) == null || (r = r[o]) == null ? void 0 : r.indexOf(e.id)) != null ? t : -1 : 0;
    };
  },
  createRow: (e, n) => {
    e.getCenterVisibleCells = U(() => [e._getAllVisibleCells(), n.getState().columnPinning.left, n.getState().columnPinning.right], (t, r, o) => {
      const s = [...r ?? [], ...o ?? []];
      return t.filter((i) => !s.includes(i.column.id));
    }, W(n.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = U(() => [e._getAllVisibleCells(), n.getState().columnPinning.left], (t, r) => (r ?? []).map((s) => t.find((i) => i.column.id === s)).filter(Boolean).map((s) => ({
      ...s,
      position: "left"
    })), W(n.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = U(() => [e._getAllVisibleCells(), n.getState().columnPinning.right], (t, r) => (r ?? []).map((s) => t.find((i) => i.column.id === s)).filter(Boolean).map((s) => ({
      ...s,
      position: "right"
    })), W(n.options, "debugRows", "getRightVisibleCells"));
  },
  createTable: (e) => {
    e.setColumnPinning = (n) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(n), e.resetColumnPinning = (n) => {
      var t, r;
      return e.setColumnPinning(n ? vt() : (t = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? t : vt());
    }, e.getIsSomeColumnsPinned = (n) => {
      var t;
      const r = e.getState().columnPinning;
      if (!n) {
        var o, s;
        return !!((o = r.left) != null && o.length || (s = r.right) != null && s.length);
      }
      return !!((t = r[n]) != null && t.length);
    }, e.getLeftLeafColumns = U(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (n, t) => (t ?? []).map((r) => n.find((o) => o.id === r)).filter(Boolean), W(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = U(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (n, t) => (t ?? []).map((r) => n.find((o) => o.id === r)).filter(Boolean), W(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = U(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, r) => {
      const o = [...t ?? [], ...r ?? []];
      return n.filter((s) => !o.includes(s.id));
    }, W(e.options, "debugColumns", "getCenterLeafColumns"));
  }
};
function Wo(e) {
  return e || (typeof document < "u" ? document : null);
}
const nt = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, bt = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), qo = {
  getDefaultColumnDef: () => nt,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: bt(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: je("columnSizing", e),
    onColumnSizingInfoChange: je("columnSizingInfo", e)
  }),
  createColumn: (e, n) => {
    e.getSize = () => {
      var t, r, o;
      const s = n.getState().columnSizing[e.id];
      return Math.min(Math.max((t = e.columnDef.minSize) != null ? t : nt.minSize, (r = s ?? e.columnDef.size) != null ? r : nt.size), (o = e.columnDef.maxSize) != null ? o : nt.maxSize);
    }, e.getStart = U((t) => [t, tt(n, t), n.getState().columnSizing], (t, r) => r.slice(0, e.getIndex(t)).reduce((o, s) => o + s.getSize(), 0), W(n.options, "debugColumns", "getStart")), e.getAfter = U((t) => [t, tt(n, t), n.getState().columnSizing], (t, r) => r.slice(e.getIndex(t) + 1).reduce((o, s) => o + s.getSize(), 0), W(n.options, "debugColumns", "getAfter")), e.resetSize = () => {
      n.setColumnSizing((t) => {
        let {
          [e.id]: r,
          ...o
        } = t;
        return o;
      });
    }, e.getCanResize = () => {
      var t, r;
      return ((t = e.columnDef.enableResizing) != null ? t : !0) && ((r = n.options.enableColumnResizing) != null ? r : !0);
    }, e.getIsResizing = () => n.getState().columnSizingInfo.isResizingColumn === e.id;
  },
  createHeader: (e, n) => {
    e.getSize = () => {
      let t = 0;
      const r = (o) => {
        if (o.subHeaders.length)
          o.subHeaders.forEach(r);
        else {
          var s;
          t += (s = o.column.getSize()) != null ? s : 0;
        }
      };
      return r(e), t;
    }, e.getStart = () => {
      if (e.index > 0) {
        const t = e.headerGroup.headers[e.index - 1];
        return t.getStart() + t.getSize();
      }
      return 0;
    }, e.getResizeHandler = (t) => {
      const r = n.getColumn(e.column.id), o = r == null ? void 0 : r.getCanResize();
      return (s) => {
        if (!r || !o || (s.persist == null || s.persist(), wt(s) && s.touches && s.touches.length > 1))
          return;
        const i = e.getSize(), a = e ? e.getLeafHeaders().map((w) => [w.column.id, w.column.getSize()]) : [[r.id, r.getSize()]], u = wt(s) ? Math.round(s.touches[0].clientX) : s.clientX, d = {}, f = (w, y) => {
          typeof y == "number" && (n.setColumnSizingInfo((G) => {
            var N, k;
            const P = n.options.columnResizeDirection === "rtl" ? -1 : 1, O = (y - ((N = G == null ? void 0 : G.startOffset) != null ? N : 0)) * P, M = Math.max(O / ((k = G == null ? void 0 : G.startSize) != null ? k : 0), -0.999999);
            return G.columnSizingStart.forEach((V) => {
              let [L, F] = V;
              d[L] = Math.round(Math.max(F + F * M, 0) * 100) / 100;
            }), {
              ...G,
              deltaOffset: O,
              deltaPercentage: M
            };
          }), (n.options.columnResizeMode === "onChange" || w === "end") && n.setColumnSizing((G) => ({
            ...G,
            ...d
          })));
        }, p = (w) => f("move", w), m = (w) => {
          f("end", w), n.setColumnSizingInfo((y) => ({
            ...y,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, c = Wo(t), x = {
          moveHandler: (w) => p(w.clientX),
          upHandler: (w) => {
            c == null || c.removeEventListener("mousemove", x.moveHandler), c == null || c.removeEventListener("mouseup", x.upHandler), m(w.clientX);
          }
        }, h = {
          moveHandler: (w) => (w.cancelable && (w.preventDefault(), w.stopPropagation()), p(w.touches[0].clientX), !1),
          upHandler: (w) => {
            var y;
            c == null || c.removeEventListener("touchmove", h.moveHandler), c == null || c.removeEventListener("touchend", h.upHandler), w.cancelable && (w.preventDefault(), w.stopPropagation()), m((y = w.touches[0]) == null ? void 0 : y.clientX);
          }
        }, b = Yo() ? {
          passive: !1
        } : !1;
        wt(s) ? (c == null || c.addEventListener("touchmove", h.moveHandler, b), c == null || c.addEventListener("touchend", h.upHandler, b)) : (c == null || c.addEventListener("mousemove", x.moveHandler, b), c == null || c.addEventListener("mouseup", x.upHandler, b)), n.setColumnSizingInfo((w) => ({
          ...w,
          startOffset: u,
          startSize: i,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart: a,
          isResizingColumn: r.id
        }));
      };
    };
  },
  createTable: (e) => {
    e.setColumnSizing = (n) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(n), e.setColumnSizingInfo = (n) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(n), e.resetColumnSizing = (n) => {
      var t;
      e.setColumnSizing(n ? {} : (t = e.initialState.columnSizing) != null ? t : {});
    }, e.resetHeaderSizeInfo = (n) => {
      var t;
      e.setColumnSizingInfo(n ? bt() : (t = e.initialState.columnSizingInfo) != null ? t : bt());
    }, e.getTotalSize = () => {
      var n, t;
      return (n = (t = e.getHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? n : 0;
    }, e.getLeftTotalSize = () => {
      var n, t;
      return (n = (t = e.getLeftHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? n : 0;
    }, e.getCenterTotalSize = () => {
      var n, t;
      return (n = (t = e.getCenterHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? n : 0;
    }, e.getRightTotalSize = () => {
      var n, t;
      return (n = (t = e.getRightHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? n : 0;
    };
  }
};
let ot = null;
function Yo() {
  if (typeof ot == "boolean") return ot;
  let e = !1;
  try {
    const n = {
      get passive() {
        return e = !0, !1;
      }
    }, t = () => {
    };
    window.addEventListener("test", t, n), window.removeEventListener("test", t);
  } catch {
    e = !1;
  }
  return ot = e, ot;
}
function wt(e) {
  return e.type === "touchstart";
}
const Ko = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: je("columnVisibility", e)
  }),
  createColumn: (e, n) => {
    e.toggleVisibility = (t) => {
      e.getCanHide() && n.setColumnVisibility((r) => ({
        ...r,
        [e.id]: t ?? !e.getIsVisible()
      }));
    }, e.getIsVisible = () => {
      var t, r;
      const o = e.columns;
      return (t = o.length ? o.some((s) => s.getIsVisible()) : (r = n.getState().columnVisibility) == null ? void 0 : r[e.id]) != null ? t : !0;
    }, e.getCanHide = () => {
      var t, r;
      return ((t = e.columnDef.enableHiding) != null ? t : !0) && ((r = n.options.enableHiding) != null ? r : !0);
    }, e.getToggleVisibilityHandler = () => (t) => {
      e.toggleVisibility == null || e.toggleVisibility(t.target.checked);
    };
  },
  createRow: (e, n) => {
    e._getAllVisibleCells = U(() => [e.getAllCells(), n.getState().columnVisibility], (t) => t.filter((r) => r.column.getIsVisible()), W(n.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = U(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (t, r, o) => [...t, ...r, ...o], W(n.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const n = (t, r) => U(() => [r(), r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")], (o) => o.filter((s) => s.getIsVisible == null ? void 0 : s.getIsVisible()), W(e.options, "debugColumns", t));
    e.getVisibleFlatColumns = n("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = n("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = n("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = n("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = n("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (t) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(t), e.resetColumnVisibility = (t) => {
      var r;
      e.setColumnVisibility(t ? {} : (r = e.initialState.columnVisibility) != null ? r : {});
    }, e.toggleAllColumnsVisible = (t) => {
      var r;
      t = (r = t) != null ? r : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((o, s) => ({
        ...o,
        [s.id]: t || !(s.getCanHide != null && s.getCanHide())
      }), {}));
    }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((t) => !(t.getIsVisible != null && t.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((t) => t.getIsVisible == null ? void 0 : t.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (t) => {
      var r;
      e.toggleAllColumnsVisible((r = t.target) == null ? void 0 : r.checked);
    };
  }
};
function tt(e, n) {
  return n ? n === "center" ? e.getCenterVisibleLeafColumns() : n === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const Zo = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, Jo = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: je("globalFilter", e),
    globalFilterFn: "auto",
    getColumnCanGlobalFilter: (n) => {
      var t;
      const r = (t = e.getCoreRowModel().flatRows[0]) == null || (t = t._getAllCellsByColumnId()[n.id]) == null ? void 0 : t.getValue();
      return typeof r == "string" || typeof r == "number";
    }
  }),
  createColumn: (e, n) => {
    e.getCanGlobalFilter = () => {
      var t, r, o, s;
      return ((t = e.columnDef.enableGlobalFilter) != null ? t : !0) && ((r = n.options.enableGlobalFilter) != null ? r : !0) && ((o = n.options.enableFilters) != null ? o : !0) && ((s = n.options.getColumnCanGlobalFilter == null ? void 0 : n.options.getColumnCanGlobalFilter(e)) != null ? s : !0) && !!e.accessorFn;
    };
  },
  createTable: (e) => {
    e.getGlobalAutoFilterFn = () => De.includesString, e.getGlobalFilterFn = () => {
      var n, t;
      const {
        globalFilterFn: r
      } = e.options;
      return it(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (n = (t = e.options.filterFns) == null ? void 0 : t[r]) != null ? n : De[r];
    }, e.setGlobalFilter = (n) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(n);
    }, e.resetGlobalFilter = (n) => {
      e.setGlobalFilter(n ? void 0 : e.initialState.globalFilter);
    };
  }
}, Xo = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: je("expanded", e),
    paginateExpandedRows: !0
  }),
  createTable: (e) => {
    let n = !1, t = !1;
    e._autoResetExpanded = () => {
      var r, o;
      if (!n) {
        e._queue(() => {
          n = !0;
        });
        return;
      }
      if ((r = (o = e.options.autoResetAll) != null ? o : e.options.autoResetExpanded) != null ? r : !e.options.manualExpanding) {
        if (t) return;
        t = !0, e._queue(() => {
          e.resetExpanded(), t = !1;
        });
      }
    }, e.setExpanded = (r) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(r), e.toggleAllRowsExpanded = (r) => {
      r ?? !e.getIsAllRowsExpanded() ? e.setExpanded(!0) : e.setExpanded({});
    }, e.resetExpanded = (r) => {
      var o, s;
      e.setExpanded(r ? {} : (o = (s = e.initialState) == null ? void 0 : s.expanded) != null ? o : {});
    }, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((r) => r.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (r) => {
      r.persist == null || r.persist(), e.toggleAllRowsExpanded();
    }, e.getIsSomeRowsExpanded = () => {
      const r = e.getState().expanded;
      return r === !0 || Object.values(r).some(Boolean);
    }, e.getIsAllRowsExpanded = () => {
      const r = e.getState().expanded;
      return typeof r == "boolean" ? r === !0 : !(!Object.keys(r).length || e.getRowModel().flatRows.some((o) => !o.getIsExpanded()));
    }, e.getExpandedDepth = () => {
      let r = 0;
      return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((s) => {
        const i = s.split(".");
        r = Math.max(r, i.length);
      }), r;
    }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
  },
  createRow: (e, n) => {
    e.toggleExpanded = (t) => {
      n.setExpanded((r) => {
        var o;
        const s = r === !0 ? !0 : !!(r != null && r[e.id]);
        let i = {};
        if (r === !0 ? Object.keys(n.getRowModel().rowsById).forEach((a) => {
          i[a] = !0;
        }) : i = r, t = (o = t) != null ? o : !s, !s && t)
          return {
            ...i,
            [e.id]: !0
          };
        if (s && !t) {
          const {
            [e.id]: a,
            ...u
          } = i;
          return u;
        }
        return r;
      });
    }, e.getIsExpanded = () => {
      var t;
      const r = n.getState().expanded;
      return !!((t = n.options.getIsRowExpanded == null ? void 0 : n.options.getIsRowExpanded(e)) != null ? t : r === !0 || r != null && r[e.id]);
    }, e.getCanExpand = () => {
      var t, r, o;
      return (t = n.options.getRowCanExpand == null ? void 0 : n.options.getRowCanExpand(e)) != null ? t : ((r = n.options.enableExpanding) != null ? r : !0) && !!((o = e.subRows) != null && o.length);
    }, e.getIsAllParentsExpanded = () => {
      let t = !0, r = e;
      for (; t && r.parentId; )
        r = n.getRow(r.parentId, !0), t = r.getIsExpanded();
      return t;
    }, e.getToggleExpandedHandler = () => {
      const t = e.getCanExpand();
      return () => {
        t && e.toggleExpanded();
      };
    };
  }
}, Nt = 0, $t = 10, yt = () => ({
  pageIndex: Nt,
  pageSize: $t
}), Qo = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...yt(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: je("pagination", e)
  }),
  createTable: (e) => {
    let n = !1, t = !1;
    e._autoResetPageIndex = () => {
      var r, o;
      if (!n) {
        e._queue(() => {
          n = !0;
        });
        return;
      }
      if ((r = (o = e.options.autoResetAll) != null ? o : e.options.autoResetPageIndex) != null ? r : !e.options.manualPagination) {
        if (t) return;
        t = !0, e._queue(() => {
          e.resetPageIndex(), t = !1;
        });
      }
    }, e.setPagination = (r) => {
      const o = (s) => Te(r, s);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
    }, e.resetPagination = (r) => {
      var o;
      e.setPagination(r ? yt() : (o = e.initialState.pagination) != null ? o : yt());
    }, e.setPageIndex = (r) => {
      e.setPagination((o) => {
        let s = Te(r, o.pageIndex);
        const i = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return s = Math.max(0, Math.min(s, i)), {
          ...o,
          pageIndex: s
        };
      });
    }, e.resetPageIndex = (r) => {
      var o, s;
      e.setPageIndex(r ? Nt : (o = (s = e.initialState) == null || (s = s.pagination) == null ? void 0 : s.pageIndex) != null ? o : Nt);
    }, e.resetPageSize = (r) => {
      var o, s;
      e.setPageSize(r ? $t : (o = (s = e.initialState) == null || (s = s.pagination) == null ? void 0 : s.pageSize) != null ? o : $t);
    }, e.setPageSize = (r) => {
      e.setPagination((o) => {
        const s = Math.max(1, Te(r, o.pageSize)), i = o.pageSize * o.pageIndex, a = Math.floor(i / s);
        return {
          ...o,
          pageIndex: a,
          pageSize: s
        };
      });
    }, e.setPageCount = (r) => e.setPagination((o) => {
      var s;
      let i = Te(r, (s = e.options.pageCount) != null ? s : -1);
      return typeof i == "number" && (i = Math.max(-1, i)), {
        ...o,
        pageCount: i
      };
    }), e.getPageOptions = U(() => [e.getPageCount()], (r) => {
      let o = [];
      return r && r > 0 && (o = [...new Array(r)].fill(null).map((s, i) => i)), o;
    }, W(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
      const {
        pageIndex: r
      } = e.getState().pagination, o = e.getPageCount();
      return o === -1 ? !0 : o === 0 ? !1 : r < o - 1;
    }, e.previousPage = () => e.setPageIndex((r) => r - 1), e.nextPage = () => e.setPageIndex((r) => r + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
      var r;
      return (r = e.options.pageCount) != null ? r : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
    }, e.getRowCount = () => {
      var r;
      return (r = e.options.rowCount) != null ? r : e.getPrePaginationRowModel().rows.length;
    };
  }
}, St = () => ({
  top: [],
  bottom: []
}), es = {
  getInitialState: (e) => ({
    rowPinning: St(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: je("rowPinning", e)
  }),
  createRow: (e, n) => {
    e.pin = (t, r, o) => {
      const s = r ? e.getLeafRows().map((u) => {
        let {
          id: d
        } = u;
        return d;
      }) : [], i = o ? e.getParentRows().map((u) => {
        let {
          id: d
        } = u;
        return d;
      }) : [], a = /* @__PURE__ */ new Set([...i, e.id, ...s]);
      n.setRowPinning((u) => {
        var d, f;
        if (t === "bottom") {
          var p, m;
          return {
            top: ((p = u == null ? void 0 : u.top) != null ? p : []).filter((h) => !(a != null && a.has(h))),
            bottom: [...((m = u == null ? void 0 : u.bottom) != null ? m : []).filter((h) => !(a != null && a.has(h))), ...Array.from(a)]
          };
        }
        if (t === "top") {
          var c, x;
          return {
            top: [...((c = u == null ? void 0 : u.top) != null ? c : []).filter((h) => !(a != null && a.has(h))), ...Array.from(a)],
            bottom: ((x = u == null ? void 0 : u.bottom) != null ? x : []).filter((h) => !(a != null && a.has(h)))
          };
        }
        return {
          top: ((d = u == null ? void 0 : u.top) != null ? d : []).filter((h) => !(a != null && a.has(h))),
          bottom: ((f = u == null ? void 0 : u.bottom) != null ? f : []).filter((h) => !(a != null && a.has(h)))
        };
      });
    }, e.getCanPin = () => {
      var t;
      const {
        enableRowPinning: r,
        enablePinning: o
      } = n.options;
      return typeof r == "function" ? r(e) : (t = r ?? o) != null ? t : !0;
    }, e.getIsPinned = () => {
      const t = [e.id], {
        top: r,
        bottom: o
      } = n.getState().rowPinning, s = t.some((a) => r == null ? void 0 : r.includes(a)), i = t.some((a) => o == null ? void 0 : o.includes(a));
      return s ? "top" : i ? "bottom" : !1;
    }, e.getPinnedIndex = () => {
      var t, r;
      const o = e.getIsPinned();
      if (!o) return -1;
      const s = (t = o === "top" ? n.getTopRows() : n.getBottomRows()) == null ? void 0 : t.map((i) => {
        let {
          id: a
        } = i;
        return a;
      });
      return (r = s == null ? void 0 : s.indexOf(e.id)) != null ? r : -1;
    };
  },
  createTable: (e) => {
    e.setRowPinning = (n) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(n), e.resetRowPinning = (n) => {
      var t, r;
      return e.setRowPinning(n ? St() : (t = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? t : St());
    }, e.getIsSomeRowsPinned = (n) => {
      var t;
      const r = e.getState().rowPinning;
      if (!n) {
        var o, s;
        return !!((o = r.top) != null && o.length || (s = r.bottom) != null && s.length);
      }
      return !!((t = r[n]) != null && t.length);
    }, e._getPinnedRows = (n, t, r) => {
      var o;
      return ((o = e.options.keepPinnedRows) == null || o ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (t ?? []).map((i) => {
          const a = e.getRow(i, !0);
          return a.getIsAllParentsExpanded() ? a : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (t ?? []).map((i) => n.find((a) => a.id === i))
      )).filter(Boolean).map((i) => ({
        ...i,
        position: r
      }));
    }, e.getTopRows = U(() => [e.getRowModel().rows, e.getState().rowPinning.top], (n, t) => e._getPinnedRows(n, t, "top"), W(e.options, "debugRows", "getTopRows")), e.getBottomRows = U(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (n, t) => e._getPinnedRows(n, t, "bottom"), W(e.options, "debugRows", "getBottomRows")), e.getCenterRows = U(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (n, t, r) => {
      const o = /* @__PURE__ */ new Set([...t ?? [], ...r ?? []]);
      return n.filter((s) => !o.has(s.id));
    }, W(e.options, "debugRows", "getCenterRows"));
  }
}, ts = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: je("rowSelection", e),
    enableRowSelection: !0,
    enableMultiRowSelection: !0,
    enableSubRowSelection: !0
    // enableGroupingRowSelection: false,
    // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
    // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
  }),
  createTable: (e) => {
    e.setRowSelection = (n) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(n), e.resetRowSelection = (n) => {
      var t;
      return e.setRowSelection(n ? {} : (t = e.initialState.rowSelection) != null ? t : {});
    }, e.toggleAllRowsSelected = (n) => {
      e.setRowSelection((t) => {
        n = typeof n < "u" ? n : !e.getIsAllRowsSelected();
        const r = {
          ...t
        }, o = e.getPreGroupedRowModel().flatRows;
        return n ? o.forEach((s) => {
          s.getCanSelect() && (r[s.id] = !0);
        }) : o.forEach((s) => {
          delete r[s.id];
        }), r;
      });
    }, e.toggleAllPageRowsSelected = (n) => e.setRowSelection((t) => {
      const r = typeof n < "u" ? n : !e.getIsAllPageRowsSelected(), o = {
        ...t
      };
      return e.getRowModel().rows.forEach((s) => {
        Et(o, s.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = U(() => [e.getState().rowSelection, e.getCoreRowModel()], (n, t) => Object.keys(n).length ? Ct(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, W(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = U(() => [e.getState().rowSelection, e.getFilteredRowModel()], (n, t) => Object.keys(n).length ? Ct(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, W(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = U(() => [e.getState().rowSelection, e.getSortedRowModel()], (n, t) => Object.keys(n).length ? Ct(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, W(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
      const n = e.getFilteredRowModel().flatRows, {
        rowSelection: t
      } = e.getState();
      let r = !!(n.length && Object.keys(t).length);
      return r && n.some((o) => o.getCanSelect() && !t[o.id]) && (r = !1), r;
    }, e.getIsAllPageRowsSelected = () => {
      const n = e.getPaginationRowModel().flatRows.filter((o) => o.getCanSelect()), {
        rowSelection: t
      } = e.getState();
      let r = !!n.length;
      return r && n.some((o) => !t[o.id]) && (r = !1), r;
    }, e.getIsSomeRowsSelected = () => {
      var n;
      const t = Object.keys((n = e.getState().rowSelection) != null ? n : {}).length;
      return t > 0 && t < e.getFilteredRowModel().flatRows.length;
    }, e.getIsSomePageRowsSelected = () => {
      const n = e.getPaginationRowModel().flatRows;
      return e.getIsAllPageRowsSelected() ? !1 : n.filter((t) => t.getCanSelect()).some((t) => t.getIsSelected() || t.getIsSomeSelected());
    }, e.getToggleAllRowsSelectedHandler = () => (n) => {
      e.toggleAllRowsSelected(n.target.checked);
    }, e.getToggleAllPageRowsSelectedHandler = () => (n) => {
      e.toggleAllPageRowsSelected(n.target.checked);
    };
  },
  createRow: (e, n) => {
    e.toggleSelected = (t, r) => {
      const o = e.getIsSelected();
      n.setRowSelection((s) => {
        var i;
        if (t = typeof t < "u" ? t : !o, e.getCanSelect() && o === t)
          return s;
        const a = {
          ...s
        };
        return Et(a, e.id, t, (i = r == null ? void 0 : r.selectChildren) != null ? i : !0, n), a;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return Dt(e, t);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return Mt(e, t) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return Mt(e, t) === "all";
    }, e.getCanSelect = () => {
      var t;
      return typeof n.options.enableRowSelection == "function" ? n.options.enableRowSelection(e) : (t = n.options.enableRowSelection) != null ? t : !0;
    }, e.getCanSelectSubRows = () => {
      var t;
      return typeof n.options.enableSubRowSelection == "function" ? n.options.enableSubRowSelection(e) : (t = n.options.enableSubRowSelection) != null ? t : !0;
    }, e.getCanMultiSelect = () => {
      var t;
      return typeof n.options.enableMultiRowSelection == "function" ? n.options.enableMultiRowSelection(e) : (t = n.options.enableMultiRowSelection) != null ? t : !0;
    }, e.getToggleSelectedHandler = () => {
      const t = e.getCanSelect();
      return (r) => {
        var o;
        t && e.toggleSelected((o = r.target) == null ? void 0 : o.checked);
      };
    };
  }
}, Et = (e, n, t, r, o) => {
  var s;
  const i = o.getRow(n, !0);
  t ? (i.getCanMultiSelect() || Object.keys(e).forEach((a) => delete e[a]), i.getCanSelect() && (e[n] = !0)) : delete e[n], r && (s = i.subRows) != null && s.length && i.getCanSelectSubRows() && i.subRows.forEach((a) => Et(e, a.id, t, r, o));
};
function Ct(e, n) {
  const t = e.getState().rowSelection, r = [], o = {}, s = function(i, a) {
    return i.map((u) => {
      var d;
      const f = Dt(u, t);
      if (f && (r.push(u), o[u.id] = u), (d = u.subRows) != null && d.length && (u = {
        ...u,
        subRows: s(u.subRows)
      }), f)
        return u;
    }).filter(Boolean);
  };
  return {
    rows: s(n.rows),
    flatRows: r,
    rowsById: o
  };
}
function Dt(e, n) {
  var t;
  return (t = n[e.id]) != null ? t : !1;
}
function Mt(e, n, t) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, s = !1;
  return e.subRows.forEach((i) => {
    if (!(s && !o) && (i.getCanSelect() && (Dt(i, n) ? s = !0 : o = !1), i.subRows && i.subRows.length)) {
      const a = Mt(i, n);
      a === "all" ? s = !0 : (a === "some" && (s = !0), o = !1);
    }
  }), o ? "all" : s ? "some" : !1;
}
const kt = /([0-9]+)/gm, rs = (e, n, t) => kr(He(e.getValue(t)).toLowerCase(), He(n.getValue(t)).toLowerCase()), ns = (e, n, t) => kr(He(e.getValue(t)), He(n.getValue(t))), os = (e, n, t) => Vt(He(e.getValue(t)).toLowerCase(), He(n.getValue(t)).toLowerCase()), ss = (e, n, t) => Vt(He(e.getValue(t)), He(n.getValue(t))), is = (e, n, t) => {
  const r = e.getValue(t), o = n.getValue(t);
  return r > o ? 1 : r < o ? -1 : 0;
}, ls = (e, n, t) => Vt(e.getValue(t), n.getValue(t));
function Vt(e, n) {
  return e === n ? 0 : e > n ? 1 : -1;
}
function He(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function kr(e, n) {
  const t = e.split(kt).filter(Boolean), r = n.split(kt).filter(Boolean);
  for (; t.length && r.length; ) {
    const o = t.shift(), s = r.shift(), i = parseInt(o, 10), a = parseInt(s, 10), u = [i, a].sort();
    if (isNaN(u[0])) {
      if (o > s)
        return 1;
      if (s > o)
        return -1;
      continue;
    }
    if (isNaN(u[1]))
      return isNaN(i) ? -1 : 1;
    if (i > a)
      return 1;
    if (a > i)
      return -1;
  }
  return t.length - r.length;
}
const et = {
  alphanumeric: rs,
  alphanumericCaseSensitive: ns,
  text: os,
  textCaseSensitive: ss,
  datetime: is,
  basic: ls
}, as = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: je("sorting", e),
    isMultiSortEvent: (n) => n.shiftKey
  }),
  createColumn: (e, n) => {
    e.getAutoSortingFn = () => {
      const t = n.getFilteredRowModel().flatRows.slice(10);
      let r = !1;
      for (const o of t) {
        const s = o == null ? void 0 : o.getValue(e.id);
        if (Object.prototype.toString.call(s) === "[object Date]")
          return et.datetime;
        if (typeof s == "string" && (r = !0, s.split(kt).length > 1))
          return et.alphanumeric;
      }
      return r ? et.text : et.basic;
    }, e.getAutoSortDir = () => {
      const t = n.getFilteredRowModel().flatRows[0];
      return typeof (t == null ? void 0 : t.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var t, r;
      if (!e)
        throw new Error();
      return it(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (t = (r = n.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? t : et[e.columnDef.sortingFn];
    }, e.toggleSorting = (t, r) => {
      const o = e.getNextSortingOrder(), s = typeof t < "u" && t !== null;
      n.setSorting((i) => {
        const a = i == null ? void 0 : i.find((c) => c.id === e.id), u = i == null ? void 0 : i.findIndex((c) => c.id === e.id);
        let d = [], f, p = s ? t : o === "desc";
        if (i != null && i.length && e.getCanMultiSort() && r ? a ? f = "toggle" : f = "add" : i != null && i.length && u !== i.length - 1 ? f = "replace" : a ? f = "toggle" : f = "replace", f === "toggle" && (s || o || (f = "remove")), f === "add") {
          var m;
          d = [...i, {
            id: e.id,
            desc: p
          }], d.splice(0, d.length - ((m = n.options.maxMultiSortColCount) != null ? m : Number.MAX_SAFE_INTEGER));
        } else f === "toggle" ? d = i.map((c) => c.id === e.id ? {
          ...c,
          desc: p
        } : c) : f === "remove" ? d = i.filter((c) => c.id !== e.id) : d = [{
          id: e.id,
          desc: p
        }];
        return d;
      });
    }, e.getFirstSortDir = () => {
      var t, r;
      return ((t = (r = e.columnDef.sortDescFirst) != null ? r : n.options.sortDescFirst) != null ? t : e.getAutoSortDir() === "desc") ? "desc" : "asc";
    }, e.getNextSortingOrder = (t) => {
      var r, o;
      const s = e.getFirstSortDir(), i = e.getIsSorted();
      return i ? i !== s && ((r = n.options.enableSortingRemoval) == null || r) && // If enableSortRemove, enable in general
      (!(t && (o = n.options.enableMultiRemove) != null) || o) ? !1 : i === "desc" ? "asc" : "desc" : s;
    }, e.getCanSort = () => {
      var t, r;
      return ((t = e.columnDef.enableSorting) != null ? t : !0) && ((r = n.options.enableSorting) != null ? r : !0) && !!e.accessorFn;
    }, e.getCanMultiSort = () => {
      var t, r;
      return (t = (r = e.columnDef.enableMultiSort) != null ? r : n.options.enableMultiSort) != null ? t : !!e.accessorFn;
    }, e.getIsSorted = () => {
      var t;
      const r = (t = n.getState().sorting) == null ? void 0 : t.find((o) => o.id === e.id);
      return r ? r.desc ? "desc" : "asc" : !1;
    }, e.getSortIndex = () => {
      var t, r;
      return (t = (r = n.getState().sorting) == null ? void 0 : r.findIndex((o) => o.id === e.id)) != null ? t : -1;
    }, e.clearSorting = () => {
      n.setSorting((t) => t != null && t.length ? t.filter((r) => r.id !== e.id) : []);
    }, e.getToggleSortingHandler = () => {
      const t = e.getCanSort();
      return (r) => {
        t && (r.persist == null || r.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? n.options.isMultiSortEvent == null ? void 0 : n.options.isMultiSortEvent(r) : !1));
      };
    };
  },
  createTable: (e) => {
    e.setSorting = (n) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(n), e.resetSorting = (n) => {
      var t, r;
      e.setSorting(n ? [] : (t = (r = e.initialState) == null ? void 0 : r.sorting) != null ? t : []);
    }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
  }
}, us = [
  Eo,
  Ko,
  Bo,
  Uo,
  ko,
  Io,
  Zo,
  //depends on ColumnFaceting
  Jo,
  //depends on ColumnFiltering
  as,
  Ho,
  //depends on RowSorting
  Xo,
  Qo,
  es,
  ts,
  qo
];
function cs(e) {
  var n, t;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const r = [...us, ...(n = e._features) != null ? n : []];
  let o = {
    _features: r
  };
  const s = o._features.reduce((m, c) => Object.assign(m, c.getDefaultOptions == null ? void 0 : c.getDefaultOptions(o)), {}), i = (m) => o.options.mergeOptions ? o.options.mergeOptions(s, m) : {
    ...s,
    ...m
  };
  let u = {
    ...{},
    ...(t = e.initialState) != null ? t : {}
  };
  o._features.forEach((m) => {
    var c;
    u = (c = m.getInitialState == null ? void 0 : m.getInitialState(u)) != null ? c : u;
  });
  const d = [];
  let f = !1;
  const p = {
    _features: r,
    options: {
      ...s,
      ...e
    },
    initialState: u,
    _queue: (m) => {
      d.push(m), f || (f = !0, Promise.resolve().then(() => {
        for (; d.length; )
          d.shift()();
        f = !1;
      }).catch((c) => setTimeout(() => {
        throw c;
      })));
    },
    reset: () => {
      o.setState(o.initialState);
    },
    setOptions: (m) => {
      const c = Te(m, o.options);
      o.options = i(c);
    },
    getState: () => o.options.state,
    setState: (m) => {
      o.options.onStateChange == null || o.options.onStateChange(m);
    },
    _getRowId: (m, c, x) => {
      var h;
      return (h = o.options.getRowId == null ? void 0 : o.options.getRowId(m, c, x)) != null ? h : `${x ? [x.id, c].join(".") : c}`;
    },
    getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => o.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (m, c) => {
      let x = (c ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[m];
      if (!x && (x = o.getCoreRowModel().rowsById[m], !x))
        throw process.env.NODE_ENV !== "production" ? new Error(`getRow could not find row with ID: ${m}`) : new Error();
      return x;
    },
    _getDefaultColumnDef: U(() => [o.options.defaultColumn], (m) => {
      var c;
      return m = (c = m) != null ? c : {}, {
        header: (x) => {
          const h = x.header.column.columnDef;
          return h.accessorKey ? h.accessorKey : h.accessorFn ? h.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (x) => {
          var h, b;
          return (h = (b = x.renderValue()) == null || b.toString == null ? void 0 : b.toString()) != null ? h : null;
        },
        ...o._features.reduce((x, h) => Object.assign(x, h.getDefaultColumnDef == null ? void 0 : h.getDefaultColumnDef()), {}),
        ...m
      };
    }, W(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: U(() => [o._getColumnDefs()], (m) => {
      const c = function(x, h, b) {
        return b === void 0 && (b = 0), x.map((w) => {
          const y = $o(o, w, b, h), G = w;
          return y.columns = G.columns ? c(G.columns, y, b + 1) : [], y;
        });
      };
      return c(m);
    }, W(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: U(() => [o.getAllColumns()], (m) => m.flatMap((c) => c.getFlatColumns()), W(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: U(() => [o.getAllFlatColumns()], (m) => m.reduce((c, x) => (c[x.id] = x, c), {}), W(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: U(() => [o.getAllColumns(), o._getOrderColumnsFn()], (m, c) => {
      let x = m.flatMap((h) => h.getLeafColumns());
      return c(x);
    }, W(e, "debugColumns", "getAllLeafColumns")),
    getColumn: (m) => {
      const c = o._getAllFlatColumnsById()[m];
      return process.env.NODE_ENV !== "production" && !c && console.error(`[Table] Column with id '${m}' does not exist.`), c;
    }
  };
  Object.assign(o, p);
  for (let m = 0; m < o._features.length; m++) {
    const c = o._features[m];
    c == null || c.createTable == null || c.createTable(o);
  }
  return o;
}
function ds() {
  return (e) => U(() => [e.options.data], (n) => {
    const t = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, s, i) {
      s === void 0 && (s = 0);
      const a = [];
      for (let d = 0; d < o.length; d++) {
        const f = Mo(e, e._getRowId(o[d], d, i), o[d], d, s, void 0, i == null ? void 0 : i.id);
        if (t.flatRows.push(f), t.rowsById[f.id] = f, a.push(f), e.options.getSubRows) {
          var u;
          f.originalSubRows = e.options.getSubRows(o[d], d), (u = f.originalSubRows) != null && u.length && (f.subRows = r(f.originalSubRows, s + 1, f));
        }
      }
      return a;
    };
    return t.rows = r(n), t;
  }, W(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function gs(e) {
  const n = [], t = (r) => {
    var o;
    n.push(r), (o = r.subRows) != null && o.length && r.getIsExpanded() && r.subRows.forEach(t);
  };
  return e.rows.forEach(t), {
    rows: n,
    flatRows: e.flatRows,
    rowsById: e.rowsById
  };
}
function fs(e) {
  return (n) => U(() => [n.getState().pagination, n.getPrePaginationRowModel(), n.options.paginateExpandedRows ? void 0 : n.getState().expanded], (t, r) => {
    if (!r.rows.length)
      return r;
    const {
      pageSize: o,
      pageIndex: s
    } = t;
    let {
      rows: i,
      flatRows: a,
      rowsById: u
    } = r;
    const d = o * s, f = d + o;
    i = i.slice(d, f);
    let p;
    n.options.paginateExpandedRows ? p = {
      rows: i,
      flatRows: a,
      rowsById: u
    } : p = gs({
      rows: i,
      flatRows: a,
      rowsById: u
    }), p.flatRows = [];
    const m = (c) => {
      p.flatRows.push(c), c.subRows.length && c.subRows.forEach(m);
    };
    return p.rows.forEach(m), p;
  }, W(n.options, "debugTable", "getPaginationRowModel"));
}
function ms() {
  return (e) => U(() => [e.getState().sorting, e.getPreSortedRowModel()], (n, t) => {
    if (!t.rows.length || !(n != null && n.length))
      return t;
    const r = e.getState().sorting, o = [], s = r.filter((u) => {
      var d;
      return (d = e.getColumn(u.id)) == null ? void 0 : d.getCanSort();
    }), i = {};
    s.forEach((u) => {
      const d = e.getColumn(u.id);
      d && (i[u.id] = {
        sortUndefined: d.columnDef.sortUndefined,
        invertSorting: d.columnDef.invertSorting,
        sortingFn: d.getSortingFn()
      });
    });
    const a = (u) => {
      const d = u.map((f) => ({
        ...f
      }));
      return d.sort((f, p) => {
        for (let c = 0; c < s.length; c += 1) {
          var m;
          const x = s[c], h = i[x.id], b = h.sortUndefined, w = (m = x == null ? void 0 : x.desc) != null ? m : !1;
          let y = 0;
          if (b) {
            const G = f.getValue(x.id), N = p.getValue(x.id), k = G === void 0, P = N === void 0;
            if (k || P) {
              if (b === "first") return k ? -1 : 1;
              if (b === "last") return k ? 1 : -1;
              y = k && P ? 0 : k ? b : -b;
            }
          }
          if (y === 0 && (y = h.sortingFn(f, p, x.id)), y !== 0)
            return w && (y *= -1), h.invertSorting && (y *= -1), y;
        }
        return f.index - p.index;
      }), d.forEach((f) => {
        var p;
        o.push(f), (p = f.subRows) != null && p.length && (f.subRows = a(f.subRows));
      }), d;
    };
    return {
      rows: a(t.rows),
      flatRows: o,
      rowsById: t.rowsById
    };
  }, W(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
}
/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function sr(e, n) {
  return e ? ps(e) ? /* @__PURE__ */ Rt.createElement(e, n) : e : null;
}
function ps(e) {
  return hs(e) || typeof e == "function" || xs(e);
}
function hs(e) {
  return typeof e == "function" && (() => {
    const n = Object.getPrototypeOf(e);
    return n.prototype && n.prototype.isReactComponent;
  })();
}
function xs(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function vs(e) {
  const n = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [t] = Rt.useState(() => ({
    current: cs(n)
  })), [r, o] = Rt.useState(() => t.current.initialState);
  return t.current.setOptions((s) => ({
    ...s,
    ...e,
    state: {
      ...r,
      ...e.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (i) => {
      o(i), e.onStateChange == null || e.onStateChange(i);
    }
  })), t.current;
}
const Ir = (e) => {
  const n = {
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
    header: n.header[e],
    row: n.row[e],
    border: n.border[e],
    stripe: n.stripe[e]
  };
}, bs = ({ schema: e, variant: n = "primary" }) => {
  const t = [{ name: "no", label: "No.", accessorKey: "no", type: "number" }, ...e], r = Ir(n);
  return /* @__PURE__ */ l.jsx("div", { className: "bg-white rounded-md", children: /* @__PURE__ */ l.jsx("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ l.jsxs("table", { className: "w-full border-spacing-0 border-separate", children: [
    /* @__PURE__ */ l.jsx("thead", { className: $("border-2 sticky top-0 z-10 rounded-t-md", r.border), children: /* @__PURE__ */ l.jsx("tr", { children: t.map((o, s) => /* @__PURE__ */ l.jsx(
      "th",
      {
        className: $(
          "text-sm text-wrap border-y p-4 text-left",
          r.header,
          {
            "rounded-tl-md": s === 0,
            "rounded-tr-md": s === t.length - 1
          }
        ),
        children: o.label
      },
      s
    )) }) }),
    /* @__PURE__ */ l.jsx("tbody", { className: "max-h-[50vh]", children: [...Array(5)].map((o, s) => /* @__PURE__ */ l.jsx(
      "tr",
      {
        className: $("p-3", {
          [r.stripe]: s % 2 !== 0,
          "bg-white": s % 2 === 0
        }),
        children: t.map((i, a) => /* @__PURE__ */ l.jsx(
          "td",
          {
            className: "text-left text-nowrap text-sm p-4",
            children: /* @__PURE__ */ l.jsx(uo, { className: "h-10 w-full rounded-md" })
          },
          `${s}-${a}`
        ))
      },
      s
    )) })
  ] }) }) });
}, Ws = ({
  schema: e,
  data: n,
  className: t,
  headerClassName: r,
  rowClassName: o,
  cellClassName: s,
  emptyState: i,
  isLoading: a,
  loadingState: u,
  showIndex: d = !1,
  onPageChange: f,
  onPageSizeChange: p,
  onSortChange: m,
  onRowClick: c,
  showPagination: x = !1,
  variant: h = "primary",
  meta: b = {
    current_page: 1,
    total_page: 1,
    total_data: 0,
    limit_number: 10
  }
}) => {
  const [w, y] = ie(() => {
    const O = e.find((M) => M.sortable && M.sort);
    return O ? [{
      id: O.accessorKey.toString(),
      desc: O.sort === "desc"
    }] : [];
  }), G = Ae.useMemo(() => {
    const O = e.map((M) => ({
      accessorKey: M.accessorKey,
      header: M.label,
      enableSorting: !!M.sortable,
      cell: M.render ? ({ row: V }) => {
        var L;
        return (L = M.render) == null ? void 0 : L.call(M, V.original[M.accessorKey], V.original, V.index);
      } : ({ row: V }) => V.original[M.accessorKey] || "-",
      meta: {
        align: M.align || "left"
      }
    }));
    return d ? [{
      accessorKey: "no",
      header: "No.",
      enableSorting: !1,
      cell: ({ row: M }) => (b.current_page - 1) * b.limit_number + M.index + 1,
      meta: {
        align: "left"
      }
    }, ...O] : O;
  }, [e, d, b]), N = vs({
    data: n,
    columns: G,
    state: {
      sorting: w
    },
    onSortingChange: (O) => {
      const M = typeof O == "function" ? O(w) : O;
      y(M), M.length > 0 ? m == null || m(M[0].desc ? "desc" : "asc", M[0].id) : m == null || m("", "");
    },
    getCoreRowModel: ds(),
    getSortedRowModel: ms(),
    getPaginationRowModel: fs(),
    manualPagination: !0,
    pageCount: b.total_page
  }), k = Ir(h);
  if (a)
    return u || /* @__PURE__ */ l.jsx(bs, { schema: e, variant: h });
  const P = (O, M, V) => {
    const L = O.target;
    L.tagName === "BUTTON" || L.tagName === "A" || L.tagName === "INPUT" || L.tagName === "SELECT" || L.closest("button") !== null || L.closest("a") !== null || L.closest("input") !== null || L.closest("select") !== null || c == null || c(M, V);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "bg-white rounded-md", children: [
    /* @__PURE__ */ l.jsx("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ l.jsxs("table", { className: $("w-full border-spacing-0 border-separate", t), children: [
      /* @__PURE__ */ l.jsx("thead", { className: $("border-2 sticky top-0 z-10 rounded-t-md", k.border), children: N.getHeaderGroups().map((O) => /* @__PURE__ */ l.jsx("tr", { children: O.headers.map((M, V) => {
        var L, F, A;
        return /* @__PURE__ */ l.jsx(
          "th",
          {
            className: $(
              "text-sm text-wrap border-y p-4",
              k.header,
              {
                "cursor-pointer": M.column.getCanSort(),
                "rounded-tl-md": V === 0,
                "rounded-tr-md": V === O.headers.length - 1,
                "text-left": ((L = M.column.columnDef.meta) == null ? void 0 : L.align) === "left",
                "text-center": ((F = M.column.columnDef.meta) == null ? void 0 : F.align) === "center",
                "text-right": ((A = M.column.columnDef.meta) == null ? void 0 : A.align) === "right"
              },
              r
            ),
            onClick: M.column.getCanSort() ? M.column.getToggleSortingHandler() : void 0,
            children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ l.jsx("span", { className: $({
                "font-semibold": V === 0
              }), children: sr(M.column.columnDef.header, M.getContext()) }),
              M.column.getCanSort() && /* @__PURE__ */ l.jsx(
                re,
                {
                  icon: M.column.getIsSorted() ? M.column.getIsSorted() === "desc" ? "mdi:keyboard-arrow-up" : "mdi:keyboard-arrow-down" : "mdi:unfold-more-horizontal",
                  className: $("h-4 w-4", {
                    "text-white": h !== "ghost",
                    "text-gray-700": h === "ghost"
                  })
                }
              )
            ] })
          },
          M.id
        );
      }) }, O.id)) }),
      /* @__PURE__ */ l.jsx("tbody", { className: "max-h-[50vh]", children: N.getRowModel().rows.length === 0 ? /* @__PURE__ */ l.jsx("tr", { children: /* @__PURE__ */ l.jsx(
        "td",
        {
          colSpan: N.getAllColumns().length,
          className: $(
            "text-center border h-full w-full rounded-b-md"
          ),
          children: i || /* @__PURE__ */ l.jsxs("div", { className: "flex mx-auto w-full text-center justify-center gap-3 items-center", children: [
            /* @__PURE__ */ l.jsx("p", { children: "Data Not Found" }),
            /* @__PURE__ */ l.jsx(re, { icon: "mdi:face-frown-open", size: 34 })
          ] })
        }
      ) }) : N.getRowModel().rows.map((O, M) => /* @__PURE__ */ l.jsx(
        "tr",
        {
          className: $(
            "p-3",
            k.row,
            {
              [k.stripe]: M % 2 !== 0,
              "bg-white": M % 2 === 0,
              "cursor-pointer": c
            },
            o
          ),
          onClick: (V) => P(V, O.original, M),
          children: O.getVisibleCells().map((V) => {
            var L, F, A;
            return /* @__PURE__ */ l.jsx(
              "td",
              {
                className: $(
                  "px-4 py-3 text-sm text-gray-900",
                  {
                    "text-left": ((L = V.column.columnDef.meta) == null ? void 0 : L.align) === "left",
                    "text-center": ((F = V.column.columnDef.meta) == null ? void 0 : F.align) === "center",
                    "text-right": ((A = V.column.columnDef.meta) == null ? void 0 : A.align) === "right"
                  },
                  s
                ),
                children: sr(V.column.columnDef.cell, V.getContext())
              },
              V.id
            );
          })
        },
        O.id
      )) })
    ] }) }),
    !!n.length && x && /* @__PURE__ */ l.jsx("div", { className: "p-4 bg-white rounded-b-md", children: /* @__PURE__ */ l.jsx(
      lo,
      {
        currentPage: b.current_page,
        totalPages: b.total_page,
        totalData: b.total_data,
        onPageChange: f || (() => {
        }),
        perPage: b.limit_number,
        onPerPageChange: p || (() => {
        }),
        perPageOptions: [5, 10, 20, 50, 100],
        siblingCount: 1
      }
    ) })
  ] });
}, ws = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}, Fr = ve(
  ({
    className: e,
    variant: n = "default",
    rounded: t = "lg",
    title: r,
    description: o,
    onClose: s,
    icon: i,
    showIcon: a = !0,
    showClose: u = !0,
    ...d
  }, f) => {
    const m = i || (a ? {
      default: "mdi:information",
      success: "mdi:check-circle",
      error: "mdi:alert-circle",
      warning: "mdi:alert",
      info: "mdi:information"
    }[n] : void 0), c = r || o;
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: f,
        className: $(
          "flex",
          o ? "items-start gap-3 p-4" : "items-center gap-2 py-2.5 px-3",
          "border border-gray-200",
          ws[t],
          {
            "bg-white": n === "default",
            "bg-success-50": n === "success",
            "bg-danger-50": n === "error",
            "bg-warning-50": n === "warning",
            "bg-info-50": n === "info"
          },
          e
        ),
        ...d,
        children: [
          m && /* @__PURE__ */ l.jsx(
            re,
            {
              icon: m,
              className: $(
                "flex-shrink-0",
                o ? "h-5 w-5 mt-0.5" : "h-4 w-4",
                {
                  "text-gray-500": n === "default",
                  "text-success-500": n === "success",
                  "text-danger-500": n === "error",
                  "text-warning-500": n === "warning",
                  "text-info-500": n === "info"
                }
              )
            }
          ),
          /* @__PURE__ */ l.jsxs("div", { className: "flex-1", children: [
            r && /* @__PURE__ */ l.jsx(
              "h3",
              {
                className: $("text-sm font-medium leading-5", {
                  "text-gray-900": n === "default",
                  "text-success-900": n === "success",
                  "text-danger-900": n === "error",
                  "text-warning-900": n === "warning",
                  "text-info-900": n === "info"
                }),
                children: r
              }
            ),
            o && /* @__PURE__ */ l.jsx(
              "p",
              {
                className: $(r ? "mt-1" : "", "text-sm leading-5", {
                  "text-gray-500": n === "default",
                  "text-success-700": n === "success",
                  "text-danger-700": n === "error",
                  "text-warning-700": n === "warning",
                  "text-info-700": n === "info"
                }),
                children: o
              }
            ),
            !c && /* @__PURE__ */ l.jsx("span", { className: "text-sm leading-5", children: d.children })
          ] }),
          u && s && /* @__PURE__ */ l.jsx(
            $e,
            {
              variant: "ghost",
              size: "sm",
              onClick: s,
              className: $(
                "flex-shrink-0 !p-1",
                o ? "ml-4" : "ml-2",
                {
                  "text-gray-400 hover:text-gray-500": n === "default",
                  "text-success-400 hover:text-success-500": n === "success",
                  "text-danger-400 hover:text-danger-500": n === "error",
                  "text-warning-400 hover:text-warning-500": n === "warning",
                  "text-info-400 hover:text-info-500": n === "info"
                }
              ),
              children: /* @__PURE__ */ l.jsx(re, { icon: "mdi:close", className: $(o ? "h-5 w-5" : "h-4 w-4") })
            }
          )
        ]
      }
    );
  }
);
Fr.displayName = "Toast";
const It = on(void 0), ys = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, qs = ({ children: e }) => {
  const [n, t] = ie([]), r = Ve((a) => {
    t((u) => u.filter((d) => d.id !== a));
  }, []), o = Ve((a) => {
    const u = Math.random().toString(36).substr(2, 9), d = a.position || "top-right", f = a.duration || 5e3, p = {
      ...a,
      id: u,
      position: d
    };
    return t((m) => [...m, p]), f > 0 && setTimeout(() => {
      r(u);
    }, f), u;
  }, [r]), s = n.reduce((a, u) => (a[u.position] || (a[u.position] = []), a[u.position].push(u), a), {
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    "bottom-right": [],
    "top-center": [],
    "bottom-center": []
  }), i = pe();
  return "body" in i ? /* @__PURE__ */ l.jsxs(It.Provider, { value: { showToast: o, removeToast: r }, children: [
    e,
    Ye(
      /* @__PURE__ */ l.jsx(l.Fragment, { children: Object.entries(s).map(([a, u]) => /* @__PURE__ */ l.jsx(
        "div",
        {
          className: $(
            "fixed z-[100] flex flex-col gap-2 min-w-[320px] max-w-[420px]",
            ys[a],
            a.includes("bottom") ? "flex-col-reverse" : "flex-col"
          ),
          children: u.map((d) => /* @__PURE__ */ l.jsx(
            Fr,
            {
              ...d,
              onClose: () => r(d.id),
              className: "animate-slide-in"
            },
            d.id
          ))
        },
        a
      )) }),
      i.body
    )
  ] }) : /* @__PURE__ */ l.jsx(It.Provider, { value: { showToast: o, removeToast: r }, children: e });
}, Ys = () => {
  const e = sn(It);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, Ss = ({
  label: e,
  value: n,
  icon: t,
  className: r
}) => /* @__PURE__ */ l.jsxs(xr, { className: $(
  "flex items-center gap-4 rounded-lg w-full bg-white p-4 shadow-sm hover:bg-neutral-50 transition-shadow duration-200 justify-between",
  r
), children: [
  /* @__PURE__ */ l.jsxs("div", { children: [
    /* @__PURE__ */ l.jsx("p", { className: "text-sm font-medium text-gray-500", children: e }),
    /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-2xl font-semibold text-gray-900", children: n })
  ] }),
  t && /* @__PURE__ */ l.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50", children: /* @__PURE__ */ l.jsx(re, { icon: t, className: "h-6 w-6 text-primary-600" }) })
] }), Cs = {
  400: {
    image: "/img/error.svg",
    message: "Bad request. Please check your input and try again."
  },
  401: {
    image: "/img/error.svg",
    message: "Please sign in to access this resource."
  },
  403: {
    image: "/img/error.svg",
    message: "You do not have permission to access this resource."
  },
  404: {
    image: "/img/page-not-found.svg",
    message: "The page you are looking for does not exist."
  },
  500: {
    image: "/img/error.svg",
    message: "Something went wrong on our end. Please try again later."
  },
  502: {
    image: "/img/error.svg",
    message: "Bad gateway. Our servers are having trouble connecting."
  },
  503: {
    image: "/img/error.svg",
    message: "Service unavailable. We are currently performing maintenance."
  },
  504: {
    image: "/img/error.svg",
    message: "Gateway timeout. The server took too long to respond."
  }
}, Pr = {
  NO_INTERNET: {
    image: "/img/no-internet.svg",
    message: "Please check your internet connection and try again."
  },
  DATA_NOT_FOUND: {
    image: "/img/search-not-found.svg",
    message: "No data available for your request."
  },
  UNDER_DEVELOPMENT: {
    image: "/img/under-development.svg",
    message: "This feature is currently under development."
  },
  INFORMATION_UNAVAILABLE: {
    image: "/img/search-not-found.svg",
    message: "The requested information is currently unavailable."
  },
  SUCCESS: {
    image: "/img/payment-success.svg",
    message: "Operation completed successfully."
  },
  CHECKED: {
    image: "/img/payment-success.svg",
    message: "All checks have passed successfully."
  }
}, Rs = {
  "no-internet": "NO_INTERNET",
  "data-not-found": "DATA_NOT_FOUND",
  "under-development": "UNDER_DEVELOPMENT",
  "information-unavailable": "INFORMATION_UNAVAILABLE",
  success: "SUCCESS",
  checked: "CHECKED"
}, ir = {
  ...Cs,
  ...Pr
}, lr = {
  image: "/img/error.svg",
  message: "An unexpected error occurred. Our team is currently investigating the issue."
}, ar = (e) => typeof e == "object" && e !== null && ("code" in e || "message" in e), Ks = ({
  error: e,
  reload: n,
  children: t,
  className: r = "",
  variant: o,
  customImage: s,
  customMessage: i
}) => {
  if (!e && !o)
    return t ? /* @__PURE__ */ l.jsx(l.Fragment, { children: t }) : null;
  const u = (() => {
    if (o) {
      const p = Rs[o];
      return Pr[p];
    }
    return ar(e) && e.code && ir[e.code] ? ir[e.code] : lr;
  })(), d = s || u.image, f = i || (ar(e) ? e.message : null) || u.message;
  return /* @__PURE__ */ l.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${r}`, children: [
    /* @__PURE__ */ l.jsx(
      "img",
      {
        src: d,
        alt: "Error illustration",
        className: "max-w-[300px] h-auto"
      }
    ),
    /* @__PURE__ */ l.jsx(xo, { variant: "body1", className: "m-0", children: f }),
    n && /* @__PURE__ */ l.jsx(
      $e,
      {
        onClick: n,
        rounded: "full",
        variant: "primary",
        size: "md",
        children: "Try Again"
      }
    )
  ] });
}, js = _e(
  "border bg-white flex items-center justify-center aspect-square transition-colors placeholder:text-neutral-500 placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-center",
  {
    variants: {
      variant: {
        default: "border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50",
        error: "border-danger-500 hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50",
        success: "border-success-500 hover:border-success-600 focus:border-success-600 hover:bg-success-50",
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
), _s = ve(
  ({
    className: e,
    variant: n = "default",
    size: t = "md",
    rounded: r = "md",
    error: o = !1,
    errorText: s,
    helperText: i,
    label: a,
    bottomLabel: u,
    required: d = !1,
    showSubmitButton: f = !1,
    submitButtonLabel: p = "Submit",
    submitButtonVariant: m = "primary",
    length: c = 6,
    numericOnly: x = !0,
    onComplete: h,
    onChange: b,
    onSubmit: w,
    value: y,
    defaultValue: G = "",
    disabled: N = !1,
    autoFocus: k = !1,
    ...P
  }, O) => {
    const [M, V] = ie(G || ""), L = xe([]);
    Ce(() => {
      y !== void 0 && V(y);
    }, [y]);
    const F = y !== void 0, A = F ? y : M, J = (E) => {
      F || V(E), b == null || b(E), E.length === c && (h == null || h(E), f || w == null || w(E));
    }, I = (E) => (R) => {
      L.current[E] = R;
    }, _ = (E) => {
      E.target.select();
    }, v = (E, R) => {
      var K;
      const H = E.target.value;
      let Y = "";
      if (H.length >= 1)
        Y = H.slice(-1);
      else if (H.length === 0) {
        const ne = A.split("");
        ne[R] = "", J(ne.join(""));
        return;
      }
      if (x && !/^\d$/.test(Y))
        return;
      const te = A.split("");
      for (; te.length <= R; )
        te.push("");
      te[R] = Y;
      const B = te.join("");
      J(B), R < c - 1 && Y && ((K = L.current[R + 1]) == null || K.focus());
    }, S = (E, R) => {
      var H, Y, te;
      if (E.key === "Backspace") {
        const B = A.split("");
        A[R] ? (E.preventDefault(), B[R] = "", J(B.join(""))) : R > 0 && (E.preventDefault(), B[R - 1] = "", J(B.join("")), (H = L.current[R - 1]) == null || H.focus());
      } else if (E.key === "Delete") {
        if (A[R]) {
          E.preventDefault();
          const B = A.split("");
          B[R] = "", J(B.join(""));
        }
      } else if (E.key === "ArrowLeft" && R > 0)
        E.preventDefault(), (Y = L.current[R - 1]) == null || Y.focus();
      else if (E.key === "ArrowRight" && R < c - 1)
        E.preventDefault(), (te = L.current[R + 1]) == null || te.focus();
      else if (!E.ctrlKey && !E.altKey && !E.metaKey && E.key.length === 1 && x && !/^\d$/.test(E.key)) {
        E.preventDefault();
        return;
      }
    }, C = (E) => {
      var B;
      E.preventDefault();
      const R = E.clipboardData.getData("text/plain").trim();
      if (x && !/^\d+$/.test(R))
        return;
      const Y = R.slice(0, c).padEnd(A.length, "").slice(0, c);
      J(Y);
      const te = Y.length < c ? Y.length : c - 1;
      (B = L.current[te]) == null || B.focus();
    }, z = () => {
      A.length === c && (w == null || w(A));
    }, T = A.split("").concat(Array(c - A.length).fill(""));
    return /* @__PURE__ */ l.jsxs("div", { ref: O, className: $("w-full", e), ...P, children: [
      a && /* @__PURE__ */ l.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
        a,
        d && /* @__PURE__ */ l.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
        /* @__PURE__ */ l.jsx("div", { className: "flex items-center justify-center gap-2", children: Array.from({ length: c }).map((E, R) => /* @__PURE__ */ l.jsx(
          "input",
          {
            ref: I(R),
            type: x ? "tel" : "text",
            inputMode: x ? "numeric" : "text",
            maxLength: 1,
            value: T[R] || "",
            onChange: (H) => v(H, R),
            onKeyDown: (H) => S(H, R),
            onPaste: R === 0 ? C : void 0,
            onFocus: _,
            disabled: N,
            autoFocus: k && R === 0,
            className: $(
              js({
                variant: o ? "error" : n,
                size: t,
                rounded: r
              })
            ),
            "aria-invalid": o
          },
          R
        )) }),
        o && s && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger-500 self-start", children: s }),
        !o && i && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral-500 self-start", children: i }),
        u && /* @__PURE__ */ l.jsx("p", { className: "text-sm text-neutral-600", children: u }),
        f && /* @__PURE__ */ l.jsx(
          $e,
          {
            variant: m,
            disabled: A.length !== c || N,
            onClick: z,
            className: "mt-4",
            children: p
          }
        )
      ] })
    ] });
  }
);
_s.displayName = "InputOTP";
const Zs = ({
  icon: e,
  variant: n = "number",
  className: t,
  color: r = "#007C99",
  plusIcon: o,
  badgeContent: s = 10,
  position: i = "top-right",
  ...a
}) => {
  let u = "", d = "";
  switch (n === "number" && (o || s && s > 99 ? u = "w-7" : u = (typeof s == "number" ? String(s).length : 1) === 1 ? "w-5" : "w-6"), i) {
    case "top-right":
      d = n === "number" ? "-top-1 -right-2.5" : "-top-1 right-0";
      break;
    case "top-left":
      d = n === "number" ? "-top-1 -left-2.5" : "-top-1 left-0";
      break;
    case "bottom-right":
      d = n === "number" ? "bottom-0 -right-3" : "bottom-0 right-0";
      break;
    case "bottom-left":
      d = n === "number" ? "bottom-0 -left-3" : "bottom-0 left-0";
      break;
  }
  return /* @__PURE__ */ l.jsxs("div", { className: "relative inline-block", children: [
    /* @__PURE__ */ l.jsx(
      re,
      {
        icon: e,
        className: $(
          t
        ),
        color: r,
        size: 32,
        ...a
      }
    ),
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: $(
          "absolute h-5 rounded-xl flex justify-center items-center text-[10px] bg-[#FF4C4C] text-white font-semiboldbold",
          d,
          n === "number" ? `${u} h-5` : "w-2.5 h-2.5",
          n === "dot" ? "" : "p-1"
        ),
        children: [
          n === "number" && (s && s > 99 ? "99" : s),
          n === "number" && (o || s && s > 99) && "+"
        ]
      }
    )
  ] });
}, Js = ({
  widgets: e,
  className: n
}) => /* @__PURE__ */ l.jsx("div", { className: $("w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", n), children: e.map((t, r) => /* @__PURE__ */ l.jsx(Ss, { ...t }, r)) });
export {
  Bn as A,
  Is as B,
  xr as C,
  Xn as D,
  So as E,
  Vs as F,
  wo as G,
  Us as H,
  re as I,
  Ro as J,
  Ws as K,
  Fr as L,
  qs as M,
  As as N,
  Ys as O,
  lo as P,
  Ks as Q,
  Os as R,
  wr as S,
  Bs as T,
  _s as U,
  js as V,
  Ss as W,
  Zs as X,
  Js as Y,
  $ as Z,
  an as a,
  Ms as b,
  ks as c,
  $e as d,
  Un as e,
  Wn as f,
  Es as g,
  Fs as h,
  Ps as i,
  Ds as j,
  eo as k,
  to as l,
  ro as m,
  no as n,
  br as o,
  oo as p,
  pr as q,
  st as r,
  uo as s,
  Ls as t,
  zs as u,
  Ts as v,
  Hs as w,
  Gs as x,
  xo as y,
  bo as z
};
