import * as Nt from "react";
import Ae, { useState as ie, useEffect as we, forwardRef as ve, useRef as xe, useCallback as Ve, Children as Jt, isValidElement as ft, cloneElement as nn, createContext as sn, useContext as on } from "react";
import { createPortal as tt } from "react-dom";
var ln = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function an(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Eo(e) {
  if (e.__esModule) return e;
  var r = e.default;
  if (typeof r == "function") {
    var t = function n() {
      return this instanceof n ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    t.prototype = r.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var s = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(t, n, s.get ? s : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), t;
}
var $t = { exports: {} }, Ke = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xt;
function un() {
  if (Xt) return Ke;
  Xt = 1;
  var e = Ae, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, u, c) {
    var f, p = {}, m = null, d = null;
    c !== void 0 && (m = "" + c), u.key !== void 0 && (m = "" + u.key), u.ref !== void 0 && (d = u.ref);
    for (f in u) n.call(u, f) && !o.hasOwnProperty(f) && (p[f] = u[f]);
    if (a && a.defaultProps) for (f in u = a.defaultProps, u) p[f] === void 0 && (p[f] = u[f]);
    return { $$typeof: r, type: a, key: m, ref: d, props: p, _owner: s.current };
  }
  return Ke.Fragment = t, Ke.jsx = i, Ke.jsxs = i, Ke;
}
var Ze = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qt;
function cn() {
  return Qt || (Qt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ae, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), x = Symbol.iterator, h = "@@iterator";
    function b(g) {
      if (g === null || typeof g != "object")
        return null;
      var j = x && g[x] || g[h];
      return typeof j == "function" ? j : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(g) {
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
        var ue = D.map(function(se) {
          return String(se);
        });
        ue.unshift("Warning: " + j), Function.prototype.apply.call(console[g], console, ue);
      }
    }
    var N = !1, k = !1, P = !1, O = !1, M = !1, V;
    V = Symbol.for("react.module.reference");
    function z(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === n || g === o || M || g === s || g === c || g === f || O || g === d || N || k || P || typeof g == "object" && g !== null && (g.$$typeof === m || g.$$typeof === p || g.$$typeof === i || g.$$typeof === a || g.$$typeof === u || // This needs to include all possible module reference object
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
      if (typeof g.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
        return g.displayName || g.name || null;
      if (typeof g == "string")
        return g;
      switch (g) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case o:
          return "Profiler";
        case s:
          return "StrictMode";
        case c:
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
            var le = g, ue = le._payload, se = le._init;
            try {
              return J(se(ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, _ = 0, v, y, C, L, T, E, R;
    function H() {
    }
    H.__reactDisabledLog = !0;
    function Y() {
      {
        if (_ === 0) {
          v = console.log, y = console.info, C = console.warn, L = console.error, T = console.group, E = console.groupCollapsed, R = console.groupEnd;
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
              value: y
            }),
            warn: I({}, g, {
              value: C
            }),
            error: I({}, g, {
              value: L
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
        _ < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
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
      var ye = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new ye();
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
            } catch (Se) {
              q = Se;
            }
            Reflect.construct(g, [], se);
          } else {
            try {
              se.call();
            } catch (Se) {
              q = Se;
            }
            g.call(se.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Se) {
            q = Se;
          }
          g();
        }
      } catch (Se) {
        if (Se && q && typeof Se.stack == "string") {
          for (var ee = Se.stack.split(`
`), be = q.stack.split(`
`), ge = ee.length - 1, fe = be.length - 1; ge >= 1 && fe >= 0 && ee[ge] !== be[fe]; )
            fe--;
          for (; ge >= 1 && fe >= 0; ge--, fe--)
            if (ee[ge] !== be[fe]) {
              if (ge !== 1 || fe !== 1)
                do
                  if (ge--, fe--, fe < 0 || ee[ge] !== be[fe]) {
                    var $e = `
` + ee[ge].replace(" at new ", " at ");
                    return g.displayName && $e.includes("<anonymous>") && ($e = $e.replace("<anonymous>", g.displayName)), typeof g == "function" && ae.set(g, $e), $e;
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
        case c:
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
    var je = Object.prototype.hasOwnProperty, Oe = {}, Fe = w.ReactDebugCurrentFrame;
    function Ie(g) {
      if (g) {
        var j = g._owner, D = Me(g.type, g._source, j ? j.type : null);
        Fe.setExtraStackFrame(D);
      } else
        Fe.setExtraStackFrame(null);
    }
    function Dr(g, j, D, q, le) {
      {
        var ue = Function.call.bind(je);
        for (var se in g)
          if (ue(g, se)) {
            var ee = void 0;
            try {
              if (typeof g[se] != "function") {
                var be = Error((q || "React class") + ": " + D + " type `" + se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw be.name = "Invariant Violation", be;
              }
              ee = g[se](j, se, q, D, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ge) {
              ee = ge;
            }
            ee && !(ee instanceof Error) && (Ie(le), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", q || "React class", D, se, typeof ee), Ie(null)), ee instanceof Error && !(ee.message in Oe) && (Oe[ee.message] = !0, Ie(le), S("Failed %s type: %s", D, ee.message), Ie(null));
          }
      }
    }
    var Vr = Array.isArray;
    function at(g) {
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
        return zt(g), !1;
      } catch {
        return !0;
      }
    }
    function zt(g) {
      return "" + g;
    }
    function Lt(g) {
      if (Or(g))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ar(g)), zt(g);
    }
    var Tt = w.ReactCurrentOwner, zr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ht, Gt;
    function Lr(g) {
      if (je.call(g, "ref")) {
        var j = Object.getOwnPropertyDescriptor(g, "ref").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function Tr(g) {
      if (je.call(g, "key")) {
        var j = Object.getOwnPropertyDescriptor(g, "key").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function Hr(g, j) {
      typeof g.ref == "string" && Tt.current;
    }
    function Gr(g, j) {
      {
        var D = function() {
          Ht || (Ht = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
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
          Gt || (Gt = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        D.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: D,
          configurable: !0
        });
      }
    }
    var Ur = function(g, j, D, q, le, ue, se) {
      var ee = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: g,
        key: j,
        ref: D,
        props: se,
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
        var ue, se = {}, ee = null, be = null;
        D !== void 0 && (Lt(D), ee = "" + D), Tr(j) && (Lt(j.key), ee = "" + j.key), Lr(j) && (be = j.ref, Hr(j, le));
        for (ue in j)
          je.call(j, ue) && !zr.hasOwnProperty(ue) && (se[ue] = j[ue]);
        if (g && g.defaultProps) {
          var ge = g.defaultProps;
          for (ue in ge)
            se[ue] === void 0 && (se[ue] = ge[ue]);
        }
        if (ee || be) {
          var fe = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          ee && Gr(se, fe), be && Br(se, fe);
        }
        return Ur(g, ee, be, le, q, Tt.current, se);
      }
    }
    var ut = w.ReactCurrentOwner, Bt = w.ReactDebugCurrentFrame;
    function Be(g) {
      if (g) {
        var j = g._owner, D = Me(g.type, g._source, j ? j.type : null);
        Bt.setExtraStackFrame(D);
      } else
        Bt.setExtraStackFrame(null);
    }
    var ct;
    ct = !1;
    function dt(g) {
      return typeof g == "object" && g !== null && g.$$typeof === r;
    }
    function Ut() {
      {
        if (ut.current) {
          var g = J(ut.current.type);
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
    var Wt = {};
    function Yr(g) {
      {
        var j = Ut();
        if (!j) {
          var D = typeof g == "string" ? g : g.displayName || g.name;
          D && (j = `

Check the top-level render call using <` + D + ">.");
        }
        return j;
      }
    }
    function qt(g, j) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var D = Yr(j);
        if (Wt[D])
          return;
        Wt[D] = !0;
        var q = "";
        g && g._owner && g._owner !== ut.current && (q = " It was passed a child from " + J(g._owner.type) + "."), Be(g), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', D, q), Be(null);
      }
    }
    function Yt(g, j) {
      {
        if (typeof g != "object")
          return;
        if (at(g))
          for (var D = 0; D < g.length; D++) {
            var q = g[D];
            dt(q) && qt(q, j);
          }
        else if (dt(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var le = b(g);
          if (typeof le == "function" && le !== g.entries)
            for (var ue = le.call(g), se; !(se = ue.next()).done; )
              dt(se.value) && qt(se.value, j);
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
        } else if (j.PropTypes !== void 0 && !ct) {
          ct = !0;
          var le = J(j);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", le || "Unknown");
        }
        typeof j.getDefaultProps == "function" && !j.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Zr(g) {
      {
        for (var j = Object.keys(g.props), D = 0; D < j.length; D++) {
          var q = j[D];
          if (q !== "children" && q !== "key") {
            Be(g), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", q), Be(null);
            break;
          }
        }
        g.ref !== null && (Be(g), S("Invalid attribute `ref` supplied to `React.Fragment`."), Be(null));
      }
    }
    var Kt = {};
    function Zt(g, j, D, q, le, ue) {
      {
        var se = z(g);
        if (!se) {
          var ee = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var be = qr();
          be ? ee += be : ee += Ut();
          var ge;
          g === null ? ge = "null" : at(g) ? ge = "array" : g !== void 0 && g.$$typeof === r ? (ge = "<" + (J(g.type) || "Unknown") + " />", ee = " Did you accidentally export a JSX literal instead of a component?") : ge = typeof g, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ge, ee);
        }
        var fe = Wr(g, j, D, le, ue);
        if (fe == null)
          return fe;
        if (se) {
          var $e = j.children;
          if ($e !== void 0)
            if (q)
              if (at($e)) {
                for (var Ue = 0; Ue < $e.length; Ue++)
                  Yt($e[Ue], g);
                Object.freeze && Object.freeze($e);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Yt($e, g);
        }
        if (je.call(j, "key")) {
          var Ge = J(g), Se = Object.keys(j).filter(function(rn) {
            return rn !== "key";
          }), gt = Se.length > 0 ? "{key: someKey, " + Se.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Kt[Ge + gt]) {
            var tn = Se.length > 0 ? "{" + Se.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, gt, Ge, tn, Ge), Kt[Ge + gt] = !0;
          }
        }
        return g === n ? Zr(fe) : Kr(fe), fe;
      }
    }
    function Jr(g, j, D) {
      return Zt(g, j, D, !0);
    }
    function Xr(g, j, D) {
      return Zt(g, j, D, !1);
    }
    var Qr = Xr, en = Jr;
    Ze.Fragment = n, Ze.jsx = Qr, Ze.jsxs = en;
  }()), Ze;
}
process.env.NODE_ENV === "production" ? $t.exports = un() : $t.exports = cn();
var l = $t.exports;
function ur(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (r = 0; r < s; r++) e[r] && (t = ur(e[r])) && (n && (n += " "), n += t);
  } else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function oe() {
  for (var e, r, t = 0, n = "", s = arguments.length; t < s; t++) (e = arguments[t]) && (r = ur(e)) && (n && (n += " "), n += r);
  return n;
}
const er = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, tr = oe, Ne = (e, r) => (t) => {
  var n;
  if ((r == null ? void 0 : r.variants) == null) return tr(e, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: s, defaultVariants: o } = r, i = Object.keys(s).map((c) => {
    const f = t == null ? void 0 : t[c], p = o == null ? void 0 : o[c];
    if (f === null) return null;
    const m = er(f) || er(p);
    return s[c][m];
  }), a = t && Object.entries(t).reduce((c, f) => {
    let [p, m] = f;
    return m === void 0 || (c[p] = m), c;
  }, {}), u = r == null || (n = r.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((c, f) => {
    let { class: p, className: m, ...d } = f;
    return Object.entries(d).every((x) => {
      let [h, b] = x;
      return Array.isArray(b) ? b.includes({
        ...o,
        ...a
      }[h]) : {
        ...o,
        ...a
      }[h] === b;
    }) ? [
      ...c,
      p,
      m
    ] : c;
  }, []);
  return tr(e, i, u, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
}, Dt = "-", dn = (e) => {
  const r = fn(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(Dt);
      return a[0] === "" && a.length !== 1 && a.shift(), cr(a, r) || gn(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const u = t[i] || [];
      return a && n[i] ? [...u, ...n[i]] : u;
    }
  };
}, cr = (e, r) => {
  var i;
  if (e.length === 0)
    return r.classGroupId;
  const t = e[0], n = r.nextPart.get(t), s = n ? cr(e.slice(1), n) : void 0;
  if (s)
    return s;
  if (r.validators.length === 0)
    return;
  const o = e.join(Dt);
  return (i = r.validators.find(({
    validator: a
  }) => a(o))) == null ? void 0 : i.classGroupId;
}, rr = /^\[(.+)\]$/, gn = (e) => {
  if (rr.test(e)) {
    const r = rr.exec(e)[1], t = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, fn = (e) => {
  const {
    theme: r,
    prefix: t
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return pn(Object.entries(e.classGroups), t).forEach(([o, i]) => {
    Et(i, n, o, r);
  }), n;
}, Et = (e, r, t, n) => {
  e.forEach((s) => {
    if (typeof s == "string") {
      const o = s === "" ? r : nr(r, s);
      o.classGroupId = t;
      return;
    }
    if (typeof s == "function") {
      if (mn(s)) {
        Et(s(n), r, t, n);
        return;
      }
      r.validators.push({
        validator: s,
        classGroupId: t
      });
      return;
    }
    Object.entries(s).forEach(([o, i]) => {
      Et(i, nr(r, o), t, n);
    });
  });
}, nr = (e, r) => {
  let t = e;
  return r.split(Dt).forEach((n) => {
    t.nextPart.has(n) || t.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(n);
  }), t;
}, mn = (e) => e.isThemeGetter, pn = (e, r) => r ? e.map(([t, n]) => {
  const s = n.map((o) => typeof o == "string" ? r + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([i, a]) => [r + i, a])) : o);
  return [t, s];
}) : e, hn = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const s = (o, i) => {
    t.set(o, i), r++, r > e && (r = 0, n = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let i = t.get(o);
      if (i !== void 0)
        return i;
      if ((i = n.get(o)) !== void 0)
        return s(o, i), i;
    },
    set(o, i) {
      t.has(o) ? t.set(o, i) : s(o, i);
    }
  };
}, dr = "!", xn = (e) => {
  const {
    separator: r,
    experimentalParseClassName: t
  } = e, n = r.length === 1, s = r[0], o = r.length, i = (a) => {
    const u = [];
    let c = 0, f = 0, p;
    for (let b = 0; b < a.length; b++) {
      let w = a[b];
      if (c === 0) {
        if (w === s && (n || a.slice(b, b + o) === r)) {
          u.push(a.slice(f, b)), f = b + o;
          continue;
        }
        if (w === "/") {
          p = b;
          continue;
        }
      }
      w === "[" ? c++ : w === "]" && c--;
    }
    const m = u.length === 0 ? a : a.substring(f), d = m.startsWith(dr), x = d ? m.substring(1) : m, h = p && p > f ? p - f : void 0;
    return {
      modifiers: u,
      hasImportantModifier: d,
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
  const r = [];
  let t = [];
  return e.forEach((n) => {
    n[0] === "[" ? (r.push(...t.sort(), n), t = []) : t.push(n);
  }), r.push(...t.sort()), r;
}, bn = (e) => ({
  cache: hn(e.cacheSize),
  parseClassName: xn(e),
  ...dn(e)
}), wn = /\s+/, yn = (e, r) => {
  const {
    parseClassName: t,
    getClassGroupId: n,
    getConflictingClassGroupIds: s
  } = r, o = [], i = e.trim().split(wn);
  let a = "";
  for (let u = i.length - 1; u >= 0; u -= 1) {
    const c = i[u], {
      modifiers: f,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: d
    } = t(c);
    let x = !!d, h = n(x ? m.substring(0, d) : m);
    if (!h) {
      if (!x) {
        a = c + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (h = n(m), !h) {
        a = c + (a.length > 0 ? " " + a : a);
        continue;
      }
      x = !1;
    }
    const b = vn(f).join(":"), w = p ? b + dr : b, S = w + h;
    if (o.includes(S))
      continue;
    o.push(S);
    const G = s(h, x);
    for (let N = 0; N < G.length; ++N) {
      const k = G[N];
      o.push(w + k);
    }
    a = c + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function Sn() {
  let e = 0, r, t, n = "";
  for (; e < arguments.length; )
    (r = arguments[e++]) && (t = gr(r)) && (n && (n += " "), n += t);
  return n;
}
const gr = (e) => {
  if (typeof e == "string")
    return e;
  let r, t = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (r = gr(e[n])) && (t && (t += " "), t += r);
  return t;
};
function Cn(e, ...r) {
  let t, n, s, o = i;
  function i(u) {
    const c = r.reduce((f, p) => p(f), e());
    return t = bn(c), n = t.cache.get, s = t.cache.set, o = a, a(u);
  }
  function a(u) {
    const c = n(u);
    if (c)
      return c;
    const f = yn(u, t);
    return s(u, f), f;
  }
  return function() {
    return o(Sn.apply(null, arguments));
  };
}
const de = (e) => {
  const r = (t) => t[e] || [];
  return r.isThemeGetter = !0, r;
}, fr = /^\[(?:([a-z-]+):)?(.+)\]$/i, Rn = /^\d+\/\d+$/, jn = /* @__PURE__ */ new Set(["px", "full", "screen"]), _n = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Nn = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, $n = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, En = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Mn = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Pe = (e) => We(e) || jn.has(e) || Rn.test(e), ze = (e) => Ye(e, "length", On), We = (e) => !!e && !Number.isNaN(Number(e)), mt = (e) => Ye(e, "number", We), Je = (e) => !!e && Number.isInteger(Number(e)), kn = (e) => e.endsWith("%") && We(e.slice(0, -1)), Z = (e) => fr.test(e), Le = (e) => _n.test(e), In = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Fn = (e) => Ye(e, In, mr), Pn = (e) => Ye(e, "position", mr), Dn = /* @__PURE__ */ new Set(["image", "url"]), Vn = (e) => Ye(e, Dn, Ln), An = (e) => Ye(e, "", zn), Xe = () => !0, Ye = (e, r, t) => {
  const n = fr.exec(e);
  return n ? n[1] ? typeof r == "string" ? n[1] === r : r.has(n[1]) : t(n[2]) : !1;
}, On = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Nn.test(e) && !$n.test(e)
), mr = () => !1, zn = (e) => En.test(e), Ln = (e) => Mn.test(e), Tn = () => {
  const e = de("colors"), r = de("spacing"), t = de("blur"), n = de("brightness"), s = de("borderColor"), o = de("borderRadius"), i = de("borderSpacing"), a = de("borderWidth"), u = de("contrast"), c = de("grayscale"), f = de("hueRotate"), p = de("invert"), m = de("gap"), d = de("gradientColorStops"), x = de("gradientColorStopPositions"), h = de("inset"), b = de("margin"), w = de("opacity"), S = de("padding"), G = de("saturate"), N = de("scale"), k = de("sepia"), P = de("skew"), O = de("space"), M = de("translate"), V = () => ["auto", "contain", "none"], z = () => ["auto", "hidden", "clip", "visible", "scroll"], F = () => ["auto", Z, r], A = () => [Z, r], J = () => ["", Pe, ze], I = () => ["auto", We, Z], _ = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], v = () => ["solid", "dashed", "dotted", "double", "none"], y = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], C = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], L = () => ["", "0", Z], T = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], E = () => [We, Z];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Xe],
      spacing: [Pe, ze],
      blur: ["none", "", Le, Z],
      brightness: E(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Le, Z],
      borderSpacing: A(),
      borderWidth: J(),
      contrast: E(),
      grayscale: L(),
      hueRotate: E(),
      invert: L(),
      gap: A(),
      gradientColorStops: [e],
      gradientColorStopPositions: [kn, ze],
      inset: F(),
      margin: F(),
      opacity: E(),
      padding: A(),
      saturate: E(),
      scale: E(),
      sepia: L(),
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
        columns: [Le]
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
        z: ["auto", Je, Z]
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
        order: ["first", "last", "none", Je, Z]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Xe]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Je, Z]
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
        "grid-rows": [Xe]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Je, Z]
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
          screen: [Le]
        }, Le]
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
        text: ["base", Le, ze]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", mt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Xe]
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
        "line-clamp": ["none", We, mt]
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
        decoration: ["auto", "from-font", Pe, ze]
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
        from: [d]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [d]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [d]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [o]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [o]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [o]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [o]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [o]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [o]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [o]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [o]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [o]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [o]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [o]
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
        border: [s]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [s]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [s]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [s]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [s]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [s]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [s]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [s]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [s]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [s]
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
        outline: [Pe, ze]
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
        "ring-offset": [Pe, ze]
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
        shadow: ["", "inner", "none", Le, An]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Xe]
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
        "mix-blend": [...y(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": y()
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
        brightness: [n]
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
        "drop-shadow": ["", "none", Le, Z]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
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
        "backdrop-brightness": [n]
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
        "backdrop-grayscale": [c]
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
        rotate: [Je, Z]
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
        stroke: [Pe, ze, mt]
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
  return qe(oe(e));
}
const re = ({
  icon: e,
  className: r,
  size: t,
  color: n,
  rotate: s,
  flip: o,
  spin: i,
  ...a
}) => {
  const [u, c] = ie(null), [f, p] = ie(!1);
  return we(() => {
    if (typeof window > "u") return;
    (async () => {
      const { Icon: d } = await import("./iconify-Dqt3MVen.mjs");
      c(() => d), p(!0);
    })();
  }, []), !f || !u ? /* @__PURE__ */ l.jsx("span", { style: { width: t, height: t } }) : /* @__PURE__ */ l.jsx(
    u,
    {
      icon: e,
      className: $(
        i && "animate-spin",
        r
      ),
      style: {
        color: n,
        transform: `rotate(${s || 0}deg)`
      },
      height: t,
      width: t,
      flip: o,
      ...a
    }
  );
}, Hn = Ne(
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
    variant: r = "default",
    size: t = "md",
    rounded: n = "md",
    error: s = !1,
    errorText: o,
    helperText: i,
    label: a,
    required: u = !1,
    labelPlacement: c = "top",
    fullWidth: f = !1,
    leftIcon: p,
    rightIcon: m,
    id: d,
    ...x
  }, h) => {
    const b = d || Ae.useId(), w = `${b}-helper`, S = `${b}-error`, G = /* @__PURE__ */ l.jsxs("div", { className: $("relative", !f && "inline-block"), children: [
      p && /* @__PURE__ */ l.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500", children: /* @__PURE__ */ l.jsx(re, { icon: p, className: "w-4 h-4" }) }),
      /* @__PURE__ */ l.jsx(
        "input",
        {
          id: b,
          type: "text",
          ref: h,
          className: $(
            Hn({ variant: s ? "error" : r, size: t, rounded: n, fullWidth: f }),
            p && "pl-10",
            m && "pr-10",
            e
          ),
          "aria-describedby": s ? S : i ? w : void 0,
          "aria-invalid": s,
          "aria-required": u,
          ...x
        }
      ),
      m && /* @__PURE__ */ l.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500", children: /* @__PURE__ */ l.jsx(re, { icon: m, className: "w-4 h-4" }) })
    ] }), N = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      s && o && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger-500", id: S, children: o }),
      !s && i && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral-500", id: w, children: i })
    ] });
    return c === "left" ? /* @__PURE__ */ l.jsx("div", { className: $(f ? "w-full" : "inline-block", e), children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-start gap-4", children: [
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
const it = Ae.forwardRef(
  ({ className: e, children: r, selected: t, disabled: n, ...s }, o) => /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: o,
      className: $(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
        "hover:bg-primary-50",
        t && "bg-primary-50 text-primary-900",
        n && "pointer-events-none opacity-50",
        e
      ),
      ...s,
      children: r
    }
  )
);
it.displayName = "SelectItem";
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
}, pt = "autocomplete-dropdown-opened", Gn = Ne(
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
    options: r,
    onSelect: t,
    isOpen: n,
    dropdownPosition: s = "bottom",
    loading: o = !1,
    renderOption: i,
    variant: a = "default",
    size: u = "md",
    rounded: c = "md",
    leftIcon: f,
    rightIcon: p,
    error: m = !1,
    errorText: d,
    helperText: x,
    label: h,
    required: b = !1,
    labelPlacement: w = "top",
    fullWidth: S = !1,
    value: G,
    onChange: N,
    onFocus: k,
    onBlur: P,
    showClear: O = !1,
    onClear: M,
    ...V
  }, z) => {
    const [F, A] = ie(!1), [J, I] = ie(G || ""), _ = xe(null), v = xe(null), y = xe(null), C = n !== void 0, T = `autocomplete-${Ae.useId().replace(/:/g, "")}`, E = () => {
      if (!F || !v.current || !y.current) return;
      const { bottom: X, top: ce, left: me, width: Me } = v.current.getBoundingClientRect(), je = y.current, Oe = Ee(), Fe = {
        position: "fixed",
        left: `${me}px`,
        width: `${Me}px`
      }, Ie = s === "bottom" ? {
        ...Fe,
        top: `${X + 4}px`,
        maxHeight: `${Oe.innerHeight - X - 8}px`
      } : {
        ...Fe,
        bottom: `${Oe.innerHeight - ce + 4}px`,
        maxHeight: `${ce - 8}px`
      };
      Object.assign(je.style, Ie);
    };
    we(() => {
      const X = Ee(), ce = pe(), me = () => {
        F && E();
      }, Me = () => {
        F && E();
      }, je = (Fe) => {
        Fe.detail.id !== T && A(!1);
      }, Oe = (Fe) => {
        const Ie = Fe.target;
        _.current && !_.current.contains(Ie) && y.current && !y.current.contains(Ie) && A(!1);
      };
      return F && (E(), X.addEventListener("scroll", me, !0), X.addEventListener("resize", Me)), ce.addEventListener(pt, je), ce.addEventListener("click", Oe), () => {
        X.removeEventListener("scroll", me, !0), X.removeEventListener("resize", Me), ce.removeEventListener(pt, je), ce.removeEventListener("click", Oe);
      };
    }, [F, T]), we(() => {
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
      var je;
      if (!X) return;
      const { value: ce, label: me } = X;
      I(me), A(!1), t == null || t(ce);
      const Me = new CustomEvent("autocomplete-select", {
        detail: { selectedOption: X }
      });
      (je = v.current) == null || je.dispatchEvent(Me);
    }, te = (X) => {
      C || (pe().dispatchEvent(
        new CustomEvent(pt, {
          detail: { id: T }
        })
      ), A(!0)), k == null || k(X);
    }, B = (X) => {
      P == null || P(X);
    }, K = r.filter(
      ({ label: X }) => X.toLowerCase().includes((J || "").toLowerCase().trim())
    ), ne = C ? n : F, Q = O && J && !V.disabled && !V.readOnly, ae = Q ? "mdi:close" : p, ye = () => {
      if (!ne) return null;
      const X = pe();
      if (!("body" in X)) return null;
      const ce = /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: y,
          className: $(
            Gn({ position: s }),
            "overflow-auto"
          ),
          onClick: (me) => me.stopPropagation(),
          children: o ? /* @__PURE__ */ l.jsx("div", { className: "flex items-center justify-center py-2", children: /* @__PURE__ */ l.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary-500 border-t-transparent" }) }) : K.length > 0 ? K.map((me) => /* @__PURE__ */ l.jsx(
            it,
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
      return tt(ce, X.body);
    };
    return /* @__PURE__ */ l.jsxs("div", { ref: _, className: $("relative", S ? "w-full" : "inline-block"), children: [
      /* @__PURE__ */ l.jsx("div", { ref: v, className: $(!S && "inline-block"), children: /* @__PURE__ */ l.jsx(
        pr,
        {
          ref: z,
          value: J,
          onChange: R,
          onFocus: te,
          onBlur: B,
          variant: a,
          size: u,
          rounded: c,
          leftIcon: f,
          rightIcon: ae,
          error: m,
          errorText: d,
          helperText: x,
          label: h,
          required: b,
          labelPlacement: w,
          fullWidth: S,
          className: e,
          ...V,
          onClick: Q ? H : V.onClick
        }
      ) }),
      ye()
    ] });
  }
);
Bn.displayName = "AutoComplete";
const Mo = ({
  items: e,
  multiple: r = !1,
  defaultOpenIds: t = [],
  icon: n = "mdi:chevron-down",
  iconPosition: s = "right",
  className: o,
  itemClassName: i,
  headerClassName: a,
  contentClassName: u
}) => {
  const [c, f] = ie(t), p = (m) => {
    f(
      r ? (d) => d.includes(m) ? d.filter((x) => x !== m) : [...d, m] : (d) => d.includes(m) ? [] : [m]
    );
  };
  return /* @__PURE__ */ l.jsx("div", { className: oe("w-full space-y-2", o), children: e.map((m) => {
    const d = c.includes(m.id), x = !!m.disabled;
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: oe(
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
              className: oe(
                "w-full flex items-center justify-between p-4",
                "text-left transition-colors",
                "hover:bg-primary-50",
                x && "opacity-50 cursor-not-allowed",
                a
              ),
              children: [
                s === "left" && /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    className: oe(
                      "mr-3 transition-transform duration-200",
                      d && "rotate-180"
                    ),
                    children: /* @__PURE__ */ l.jsx(re, { icon: n, className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ l.jsx("div", { className: "flex-1", children: m.title }),
                s === "right" && /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    className: oe(
                      "ml-3 transition-transform duration-200",
                      d && "rotate-180"
                    ),
                    children: /* @__PURE__ */ l.jsx(re, { icon: n, className: "w-5 h-5" })
                  }
                )
              ]
            }
          ),
          d && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: oe(
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
}, ko = ({
  src: e,
  alt: r = "avatar",
  size: t = "medium",
  shape: n = "circle",
  className: s = ""
}) => {
  const o = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16"
  }, i = {
    circle: "rounded-full",
    square: "rounded-lg"
  }, a = qe(
    "inline-flex items-center justify-center overflow-hidden bg-gray-200",
    o[t],
    i[n],
    s
  );
  return /* @__PURE__ */ l.jsx("div", { className: a, children: e ? /* @__PURE__ */ l.jsx("img", { src: e, alt: r, className: "w-full h-full object-cover" }) : /* @__PURE__ */ l.jsx(
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
}, Io = ({
  children: e,
  variant: r = "primary",
  size: t = "medium",
  rounded: n = "md",
  className: s = ""
}) => {
  const o = {
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
    o[r],
    i[t],
    a[n],
    s
  );
  return /* @__PURE__ */ l.jsx("span", { className: u, children: e });
}, Un = Ne(
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
), Re = ve(
  ({
    className: e,
    variant: r = "primary",
    size: t = "md",
    rounded: n = "md",
    fullWidth: s = !1,
    isLoading: o = !1,
    leftIcon: i,
    rightIcon: a,
    isIconOnly: u = !1,
    children: c,
    ...f
  }, p) => {
    const d = u || !!(i || a) && !c;
    return /* @__PURE__ */ l.jsxs(
      "button",
      {
        className: $(
          Un({
            variant: r,
            size: t,
            rounded: d ? "full" : n,
            fullWidth: s,
            isIconOnly: d,
            className: e
          })
        ),
        ref: p,
        disabled: f.disabled || o,
        ...f,
        children: [
          o && /* @__PURE__ */ l.jsx("span", { className: "animate-spin inline-block w-4 h-4 border-2 border-current border-r-transparent rounded-full" }),
          !o && i && /* @__PURE__ */ l.jsx(re, { icon: i, className: "w-4 h-4" }),
          c && /* @__PURE__ */ l.jsx("span", { children: c }),
          !o && a && /* @__PURE__ */ l.jsx(re, { icon: a, className: "w-4 h-4" })
        ]
      }
    );
  }
);
Re.displayName = "Button";
const Wn = Ne(
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
    variant: r = "default",
    padding: t = "md",
    shadow: n = "none",
    rounded: s = "md",
    asChild: o = !1,
    ...i
  }, a) => /* @__PURE__ */ l.jsx(
    "div",
    {
      className: $(Wn({ variant: r, padding: t, shadow: n, rounded: s, className: e })),
      ref: a,
      ...i
    }
  )
);
xr.displayName = "Card";
const sr = {
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
}, Fo = ({
  type: e,
  series: r,
  width: t = "100%",
  height: n = 350,
  options: s = {},
  className: o
}) => {
  const [i, a] = ie(null), [u, c] = ie(!1);
  we(() => {
    if (typeof window > "u") return;
    (async () => {
      const { default: m } = await import("./react-apexcharts.min-BFGUD8Pc.mjs").then((d) => d.r);
      a(() => m), c(!0);
    })();
  }, []);
  const f = {
    ...sr,
    ...s,
    chart: {
      ...sr.chart,
      ...s.chart,
      type: e
    }
  };
  return !u || !i ? /* @__PURE__ */ l.jsx("div", { style: { width: t, height: n }, className: o }) : /* @__PURE__ */ l.jsx("div", { className: o, children: /* @__PURE__ */ l.jsx(
    i,
    {
      type: e,
      series: r,
      options: f,
      width: t,
      height: n
    }
  ) });
}, Po = ({
  label: e,
  error: r,
  disabled: t = !1,
  indeterminate: n = !1,
  variantSize: s = "sm",
  variant: o = "square",
  color: i = "primary",
  className: a = "",
  ...u
}) => {
  const c = {
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
    o === "circle" ? 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=")]' : 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgM0w0LjUgOC41TDIgNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=")]',
    {
      square: "rounded",
      circle: "rounded-full"
    }[o],
    c[s],
    f[i],
    t && "opacity-50 cursor-not-allowed",
    a
  ), d = qe(
    "ml-2 text-sm font-medium",
    t && "opacity-50 cursor-not-allowed",
    r && "text-danger-600"
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
            x && (x.indeterminate = n);
          },
          ...u
        }
      ),
      e && /* @__PURE__ */ l.jsx("label", { className: d, children: e })
    ] }),
    r && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-sm text-danger-600", children: r })
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
}, Do = ({
  children: e,
  variant: r = "solid",
  color: t = "primary",
  size: n = "md",
  rounded: s = "md",
  onClose: o,
  className: i,
  icon: a
}) => /* @__PURE__ */ l.jsxs(
  "div",
  {
    className: $(
      "inline-flex items-center gap-1.5 font-medium",
      qn[r][t],
      Yn[n],
      Kn[s],
      i
    ),
    children: [
      a && /* @__PURE__ */ l.jsx("span", { className: "inline-flex items-center", children: /* @__PURE__ */ l.jsx(re, { icon: a, className: "w-4 h-4" }) }),
      e,
      o && /* @__PURE__ */ l.jsx(
        "button",
        {
          onClick: o,
          className: "ml-1 rounded-full hover:bg-black/10 p-0.5",
          "aria-label": "Close",
          children: /* @__PURE__ */ l.jsx(re, { icon: "mdi:close", className: "w-3 h-3" })
        }
      )
    ]
  }
);
var vr = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ln, function() {
    var t = 1e3, n = 6e4, s = 36e5, o = "millisecond", i = "second", a = "minute", u = "hour", c = "day", f = "week", p = "month", m = "quarter", d = "year", x = "date", h = "Invalid Date", b = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, w = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, S = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(I) {
      var _ = ["th", "st", "nd", "rd"], v = I % 100;
      return "[" + I + (_[(v - 20) % 10] || _[v] || _[0]) + "]";
    } }, G = function(I, _, v) {
      var y = String(I);
      return !y || y.length >= _ ? I : "" + Array(_ + 1 - y.length).join(v) + I;
    }, N = { s: G, z: function(I) {
      var _ = -I.utcOffset(), v = Math.abs(_), y = Math.floor(v / 60), C = v % 60;
      return (_ <= 0 ? "+" : "-") + G(y, 2, "0") + ":" + G(C, 2, "0");
    }, m: function I(_, v) {
      if (_.date() < v.date()) return -I(v, _);
      var y = 12 * (v.year() - _.year()) + (v.month() - _.month()), C = _.clone().add(y, p), L = v - C < 0, T = _.clone().add(y + (L ? -1 : 1), p);
      return +(-(y + (v - C) / (L ? C - T : T - C)) || 0);
    }, a: function(I) {
      return I < 0 ? Math.ceil(I) || 0 : Math.floor(I);
    }, p: function(I) {
      return { M: p, y: d, w: f, d: c, D: x, h: u, m: a, s: i, ms: o, Q: m }[I] || String(I || "").toLowerCase().replace(/s$/, "");
    }, u: function(I) {
      return I === void 0;
    } }, k = "en", P = {};
    P[k] = S;
    var O = "$isDayjsObject", M = function(I) {
      return I instanceof A || !(!I || !I[O]);
    }, V = function I(_, v, y) {
      var C;
      if (!_) return k;
      if (typeof _ == "string") {
        var L = _.toLowerCase();
        P[L] && (C = L), v && (P[L] = v, C = L);
        var T = _.split("-");
        if (!C && T.length > 1) return I(T[0]);
      } else {
        var E = _.name;
        P[E] = _, C = E;
      }
      return !y && C && (k = C), C || !y && k;
    }, z = function(I, _) {
      if (M(I)) return I.clone();
      var v = typeof _ == "object" ? _ : {};
      return v.date = I, v.args = arguments, new A(v);
    }, F = N;
    F.l = V, F.i = M, F.w = function(I, _) {
      return z(I, { locale: _.$L, utc: _.$u, x: _.$x, $offset: _.$offset });
    };
    var A = function() {
      function I(v) {
        this.$L = V(v.locale, null, !0), this.parse(v), this.$x = this.$x || v.x || {}, this[O] = !0;
      }
      var _ = I.prototype;
      return _.parse = function(v) {
        this.$d = function(y) {
          var C = y.date, L = y.utc;
          if (C === null) return /* @__PURE__ */ new Date(NaN);
          if (F.u(C)) return /* @__PURE__ */ new Date();
          if (C instanceof Date) return new Date(C);
          if (typeof C == "string" && !/Z$/i.test(C)) {
            var T = C.match(b);
            if (T) {
              var E = T[2] - 1 || 0, R = (T[7] || "0").substring(0, 3);
              return L ? new Date(Date.UTC(T[1], E, T[3] || 1, T[4] || 0, T[5] || 0, T[6] || 0, R)) : new Date(T[1], E, T[3] || 1, T[4] || 0, T[5] || 0, T[6] || 0, R);
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
      }, _.isSame = function(v, y) {
        var C = z(v);
        return this.startOf(y) <= C && C <= this.endOf(y);
      }, _.isAfter = function(v, y) {
        return z(v) < this.startOf(y);
      }, _.isBefore = function(v, y) {
        return this.endOf(y) < z(v);
      }, _.$g = function(v, y, C) {
        return F.u(v) ? this[y] : this.set(C, v);
      }, _.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, _.valueOf = function() {
        return this.$d.getTime();
      }, _.startOf = function(v, y) {
        var C = this, L = !!F.u(y) || y, T = F.p(v), E = function(Q, ae) {
          var ye = F.w(C.$u ? Date.UTC(C.$y, ae, Q) : new Date(C.$y, ae, Q), C);
          return L ? ye : ye.endOf(c);
        }, R = function(Q, ae) {
          return F.w(C.toDate()[Q].apply(C.toDate("s"), (L ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ae)), C);
        }, H = this.$W, Y = this.$M, te = this.$D, B = "set" + (this.$u ? "UTC" : "");
        switch (T) {
          case d:
            return L ? E(1, 0) : E(31, 11);
          case p:
            return L ? E(1, Y) : E(0, Y + 1);
          case f:
            var K = this.$locale().weekStart || 0, ne = (H < K ? H + 7 : H) - K;
            return E(L ? te - ne : te + (6 - ne), Y);
          case c:
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
      }, _.$set = function(v, y) {
        var C, L = F.p(v), T = "set" + (this.$u ? "UTC" : ""), E = (C = {}, C[c] = T + "Date", C[x] = T + "Date", C[p] = T + "Month", C[d] = T + "FullYear", C[u] = T + "Hours", C[a] = T + "Minutes", C[i] = T + "Seconds", C[o] = T + "Milliseconds", C)[L], R = L === c ? this.$D + (y - this.$W) : y;
        if (L === p || L === d) {
          var H = this.clone().set(x, 1);
          H.$d[E](R), H.init(), this.$d = H.set(x, Math.min(this.$D, H.daysInMonth())).$d;
        } else E && this.$d[E](R);
        return this.init(), this;
      }, _.set = function(v, y) {
        return this.clone().$set(v, y);
      }, _.get = function(v) {
        return this[F.p(v)]();
      }, _.add = function(v, y) {
        var C, L = this;
        v = Number(v);
        var T = F.p(y), E = function(Y) {
          var te = z(L);
          return F.w(te.date(te.date() + Math.round(Y * v)), L);
        };
        if (T === p) return this.set(p, this.$M + v);
        if (T === d) return this.set(d, this.$y + v);
        if (T === c) return E(1);
        if (T === f) return E(7);
        var R = (C = {}, C[a] = n, C[u] = s, C[i] = t, C)[T] || 1, H = this.$d.getTime() + v * R;
        return F.w(H, this);
      }, _.subtract = function(v, y) {
        return this.add(-1 * v, y);
      }, _.format = function(v) {
        var y = this, C = this.$locale();
        if (!this.isValid()) return C.invalidDate || h;
        var L = v || "YYYY-MM-DDTHH:mm:ssZ", T = F.z(this), E = this.$H, R = this.$m, H = this.$M, Y = C.weekdays, te = C.months, B = C.meridiem, K = function(ae, ye, X, ce) {
          return ae && (ae[ye] || ae(y, L)) || X[ye].slice(0, ce);
        }, ne = function(ae) {
          return F.s(E % 12 || 12, ae, "0");
        }, Q = B || function(ae, ye, X) {
          var ce = ae < 12 ? "AM" : "PM";
          return X ? ce.toLowerCase() : ce;
        };
        return L.replace(w, function(ae, ye) {
          return ye || function(X) {
            switch (X) {
              case "YY":
                return String(y.$y).slice(-2);
              case "YYYY":
                return F.s(y.$y, 4, "0");
              case "M":
                return H + 1;
              case "MM":
                return F.s(H + 1, 2, "0");
              case "MMM":
                return K(C.monthsShort, H, te, 3);
              case "MMMM":
                return K(te, H);
              case "D":
                return y.$D;
              case "DD":
                return F.s(y.$D, 2, "0");
              case "d":
                return String(y.$W);
              case "dd":
                return K(C.weekdaysMin, y.$W, Y, 2);
              case "ddd":
                return K(C.weekdaysShort, y.$W, Y, 3);
              case "dddd":
                return Y[y.$W];
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
                return String(y.$s);
              case "ss":
                return F.s(y.$s, 2, "0");
              case "SSS":
                return F.s(y.$ms, 3, "0");
              case "Z":
                return T;
            }
            return null;
          }(ae) || T.replace(":", "");
        });
      }, _.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, _.diff = function(v, y, C) {
        var L, T = this, E = F.p(y), R = z(v), H = (R.utcOffset() - this.utcOffset()) * n, Y = this - R, te = function() {
          return F.m(T, R);
        };
        switch (E) {
          case d:
            L = te() / 12;
            break;
          case p:
            L = te();
            break;
          case m:
            L = te() / 3;
            break;
          case f:
            L = (Y - H) / 6048e5;
            break;
          case c:
            L = (Y - H) / 864e5;
            break;
          case u:
            L = Y / s;
            break;
          case a:
            L = Y / n;
            break;
          case i:
            L = Y / t;
            break;
          default:
            L = Y;
        }
        return C ? L : F.a(L);
      }, _.daysInMonth = function() {
        return this.endOf(p).$D;
      }, _.$locale = function() {
        return P[this.$L];
      }, _.locale = function(v, y) {
        if (!v) return this.$L;
        var C = this.clone(), L = V(v, y, !0);
        return L && (C.$L = L), C;
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
    return z.prototype = J, [["$ms", o], ["$s", i], ["$m", a], ["$H", u], ["$W", c], ["$M", p], ["$y", d], ["$D", x]].forEach(function(I) {
      J[I[1]] = function(_) {
        return this.$g(_, I[0], I[1]);
      };
    }), z.extend = function(I, _) {
      return I.$i || (I(_, A, z), I.$i = !0), z;
    }, z.locale = V, z.isDayjs = M, z.unix = function(I) {
      return z(1e3 * I);
    }, z.en = P[k], z.Ls = P, z.p = {}, z;
  });
})(vr);
var Zn = vr.exports;
const Ce = /* @__PURE__ */ an(Zn), Jn = Ne(
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
    endDate: r,
    onChange: t,
    onEndDateChange: n,
    isRangeSelection: s = !1,
    minDate: o,
    maxDate: i,
    variant: a = "default",
    size: u = "md",
    rounded: c = "md",
    disabled: f = !1,
    errorText: p,
    helperText: m,
    label: d,
    required: x = !1,
    labelPlacement: h = "top",
    fullWidth: b = !1,
    className: w,
    placeholder: S = "Select date",
    ...G
  }, N) => {
    const [k, P] = ie(!1), [O, M] = ie(e || null), [V, z] = ie(r || null), [F, A] = ie(e || /* @__PURE__ */ new Date()), J = xe(null), I = xe(null), _ = xe(null), v = () => {
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
    we(() => {
      const B = Ee(), K = pe(), ne = () => {
        k && v();
      }, Q = () => {
        k && v();
      }, ae = (ye) => {
        const X = ye.target;
        J.current && !J.current.contains(X) && _.current && !_.current.contains(X) && P(!1);
      };
      return k && (v(), B.addEventListener("scroll", ne, !0), B.addEventListener("resize", Q)), K.addEventListener("click", ae), () => {
        B.removeEventListener("scroll", ne, !0), B.removeEventListener("resize", Q), K.removeEventListener("click", ae);
      };
    }, [k]);
    const y = (B) => {
      s ? O ? (Ce(B).isBefore(O) ? (z(O), M(B), t == null || t(B), n == null || n(O)) : (z(B), n == null || n(B)), P(!1)) : (M(B), t == null || t(B)) : (M(B), t == null || t(B), P(!1));
    }, C = () => {
      A(Ce(F).subtract(1, "month").toDate());
    }, L = () => {
      A(Ce(F).add(1, "month").toDate());
    }, T = () => {
      const B = Ce(F).startOf("month"), K = Ce(F).endOf("month"), ne = [];
      let Q = B;
      for (; Q.isBefore(K) || Q.isSame(K, "day"); )
        ne.push(Q.toDate()), Q = Q.add(1, "day");
      return ne;
    }, E = (B) => !!(o && Ce(B).isBefore(o, "day") || i && Ce(B).isAfter(i, "day")), R = T(), H = Ce(F).startOf("month").day(), Y = () => {
      if (!O) return "";
      const B = Ce(O).format("DD MMM YYYY");
      return s && V ? `${B} - ${Ce(V).format("DD MMM YYYY")}` : B;
    }, te = () => {
      if (!k) return null;
      const B = pe();
      return "body" in B ? tt(
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
                /* @__PURE__ */ l.jsx("span", { className: "font-medium text-gray-900", children: Ce(F).format("MMMM YYYY") }),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    onClick: L,
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
                  const ne = O && Ce(K).isSame(O, "day"), Q = E(K), ae = Ce(K).isSame(F, "month");
                  return /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      onClick: () => !Q && y(K),
                      disabled: Q,
                      className: $(
                        "p-2 rounded-full text-sm transition-colors duration-200",
                        ne && "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700",
                        !ne && !Q && "hover:bg-primary-50 active:bg-primary-100",
                        !ae && "text-neutral-400",
                        Q && "opacity-50 cursor-not-allowed"
                      ),
                      children: Ce(K).format("D")
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
      d && /* @__PURE__ */ l.jsxs(
        "label",
        {
          className: $(
            "block text-sm font-medium text-gray-700 mb-1",
            h === "left" && "inline-block mr-2"
          ),
          children: [
            d,
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
          placeholder: S,
          onClick: () => !f && P(!k),
          readOnly: !0,
          className: $(Jn({ variant: a, size: u, rounded: c, fullWidth: b })),
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
  ({ children: e, onClose: r, className: t, ...n }, s) => /* @__PURE__ */ l.jsxs(
    "div",
    {
      ref: s,
      className: $("mb-4 flex items-center justify-between", t),
      ...n,
      children: [
        e,
        r && /* @__PURE__ */ l.jsx(
          "button",
          {
            onClick: r,
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
}, es = ve(
  ({
    isOpen: e,
    onClose: r,
    children: t,
    className: n,
    backdrop: s = "dark",
    header: o,
    closeOnBackdropClick: i = !0,
    size: a = "md",
    ...u
  }, c) => {
    const [f, p] = ie(!1), [m, d] = ie(!1);
    if (we(() => {
      if (e) {
        p(!0), d(!0);
        const w = pe();
        "body" in w && (w.body.style.overflow = "hidden");
      } else {
        d(!1);
        const w = setTimeout(() => {
          p(!1);
          const S = pe();
          "body" in S && (S.body.style.overflow = "");
        }, 300);
        return () => clearTimeout(w);
      }
    }, [e]), we(() => {
      const w = (S) => {
        S instanceof KeyboardEvent && S.key === "Escape" && r();
      };
      return e && pe().addEventListener("keydown", w), () => {
        pe().removeEventListener("keydown", w);
      };
    }, [e, r]), !f) return null;
    const x = {
      blur: "backdrop-blur-sm bg-black/30",
      dark: "bg-black/50",
      transparent: "bg-transparent"
    }, h = () => {
      i && r();
    }, b = pe();
    return "body" in b ? tt(
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: $(
            "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300",
            x[s],
            m ? "opacity-100" : "opacity-0",
            a === "fullscreen" && "items-start"
          ),
          onClick: h,
          children: /* @__PURE__ */ l.jsxs(
            "div",
            {
              ref: c,
              className: $(
                "relative transform rounded-lg bg-white p-6 shadow-xl transition-all duration-300",
                Qn[a],
                m ? "scale-100 opacity-100" : "scale-95 opacity-0",
                n
              ),
              onClick: (w) => w.stopPropagation(),
              ...u,
              children: [
                o && /* @__PURE__ */ l.jsx(br, { onClose: r, children: o }),
                t
              ]
            }
          )
        }
      ),
      b.body
    ) : null;
  }
), ts = ve(
  ({ children: e, className: r, ...t }, n) => /* @__PURE__ */ l.jsx(
    "h2",
    {
      ref: n,
      className: $("text-xl font-semibold text-gray-900", r),
      ...t,
      children: e
    }
  )
), rs = ve(
  ({ children: e, className: r, ...t }, n) => /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: n,
      className: $("text-gray-600", r),
      ...t,
      children: e
    }
  )
), ns = ve(
  ({ children: e, className: r, ...t }, n) => /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: n,
      className: $("mt-6 flex justify-end gap-3", r),
      ...t,
      children: e
    }
  )
);
es.displayName = "Dialog";
ts.displayName = "DialogTitle";
rs.displayName = "DialogBody";
ns.displayName = "DialogActions";
br.displayName = "DialogHeader";
const ss = ({
  orientation: e = "horizontal",
  variant: r = "solid",
  color: t = "neutral",
  size: n = "sm",
  className: s = ""
}) => {
  const o = {
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
  }, c = qe(
    "inline-block",
    o[e],
    i[r],
    a[t],
    u[n],
    s
  );
  return /* @__PURE__ */ l.jsx("div", { className: c });
}, Vo = ({
  accept: e = ["*"],
  maxSize: r = 5 * 1024 * 1024,
  // 5MB default
  multiple: t = !1,
  value: n = [],
  onChange: s,
  className: o,
  disabled: i = !1,
  placeholder: a = "Drag and drop files here or click to browse"
}) => {
  const [u, c] = ie(!1), [f, p] = ie(null), m = xe(null), d = Ve((N) => {
    N.preventDefault(), i || c(!0);
  }, [i]), x = Ve((N) => {
    N.preventDefault(), c(!1);
  }, []), h = Ve((N) => N.size > r ? `File size exceeds ${r / (1024 * 1024)}MB limit` : e[0] !== "*" && !e.some((k) => k.startsWith(".") ? N.name.toLowerCase().endsWith(k.toLowerCase()) : N.type.startsWith(k)) ? `File type not allowed. Allowed types: ${e.join(", ")}` : null, [e, r]), b = Ve((N) => {
    if (N.preventDefault(), c(!1), p(null), i) return;
    const k = Array.from(N.dataTransfer.files), P = [], O = [];
    if (k.forEach((M) => {
      const V = h(M);
      V ? O.push(`${M.name}: ${V}`) : P.push(M);
    }), O.length > 0 && p(O.join(`
`)), P.length > 0) {
      const M = t ? [...n, ...P] : P;
      s == null || s(M);
    }
  }, [i, t, s, h, n]), w = Ve((N) => {
    if (p(null), i || !N.target.files) return;
    const k = Array.from(N.target.files), P = [], O = [];
    if (k.forEach((M) => {
      const V = h(M);
      V ? O.push(`${M.name}: ${V}`) : P.push(M);
    }), O.length > 0 && p(O.join(`
`)), P.length > 0) {
      const M = t ? [...n, ...P] : P;
      s == null || s(M);
    }
    m.current && (m.current.value = "");
  }, [i, t, s, h, n]), S = Ve((N) => {
    const k = [...n];
    k.splice(N, 1), s == null || s(k);
  }, [s, n]), G = (N) => N.type.startsWith("image/") ? /* @__PURE__ */ l.jsx(re, { icon: "mdi:image", className: "w-5 h-5" }) : N.type.startsWith("text/") ? /* @__PURE__ */ l.jsx(re, { icon: "mdi:file-document", className: "w-5 h-5" }) : /* @__PURE__ */ l.jsx(re, { icon: "mdi:file", className: "w-5 h-5" });
  return /* @__PURE__ */ l.jsxs("div", { className: oe("w-full", o), children: [
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: oe(
          "border-2 border-dashed rounded-lg p-6 text-center transition-colors",
          "bg-neutral-50",
          "border-neutral-300",
          u && "border-primary bg-primary-50",
          i && "opacity-50 cursor-not-allowed",
          !i && "cursor-pointer hover:border-primary/50"
        ),
        onDragOver: d,
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
            r / (1024 * 1024),
            "MB"
          ] })
        ]
      }
    ),
    f && /* @__PURE__ */ l.jsx("p", { className: "mt-2 text-sm text-danger", children: f }),
    n.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "mt-4 space-y-2", children: n.map((N, k) => /* @__PURE__ */ l.jsxs(
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
              onClick: () => S(k),
              className: "p-1 text-neutral-500 hover:text-danger",
              children: /* @__PURE__ */ l.jsx(re, { icon: "mdi:close", className: "w-4 h-4" })
            }
          )
        ]
      },
      `${N.name}-${k}`
    )) })
  ] });
}, os = Ne(
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
), Ao = ({
  title: e,
  children: r,
  icon: t,
  variant: n = "default",
  rounded: s = "md",
  showClose: o = !1,
  onClose: i,
  className: a
}) => {
  const u = () => {
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
  }, c = () => {
    if (t) return t;
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
  return /* @__PURE__ */ l.jsxs("div", { className: $(os({ variant: n, rounded: s }), a), children: [
    t && /* @__PURE__ */ l.jsx(re, { icon: c(), className: $("h-5 w-5 flex-shrink-0", u()) }),
    /* @__PURE__ */ l.jsxs("div", { className: "flex-1", children: [
      e && /* @__PURE__ */ l.jsx("h3", { className: "text-sm font-medium text-neutral-900", children: e }),
      /* @__PURE__ */ l.jsx("div", { className: "mt-1 text-sm text-neutral-500", children: r })
    ] }),
    o && /* @__PURE__ */ l.jsx(
      "button",
      {
        type: "button",
        className: "ml-auto flex-shrink-0 text-neutral-400 hover:text-neutral-500",
        onClick: i,
        children: /* @__PURE__ */ l.jsx(re, { icon: "mdi:close", className: "h-5 w-5" })
      }
    )
  ] });
}, ht = "select-dropdown-opened", is = Ne(
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
    variant: r = "default",
    size: t = "md",
    rounded: n = "md",
    options: s,
    label: o,
    error: i = !1,
    helperText: a,
    required: u = !1,
    placeholder: c,
    value: f,
    onChange: p,
    disabled: m = !1,
    position: d = "bottom",
    fullWidth: x = !0,
    children: h,
    leftIcon: b,
    rightIcon: w,
    ...S
  }, G) => {
    const [N, k] = ie(!1), P = xe(null), O = xe(null), V = `select-${Ae.useId().replace(/:/g, "")}`, z = () => {
      if (N && P.current && O.current) {
        const v = P.current.getBoundingClientRect(), y = O.current, C = Ee(), L = C.innerHeight - v.bottom, T = v.top, R = v.bottom + y.offsetHeight + 4 >= C.innerHeight, H = T > L, Y = R && H;
        d === "bottom" || d === "top" ? (y.style.position = "fixed", y.style.left = `${v.left}px`, y.style.width = `${v.width}px`, d === "bottom" && Y ? (y.style.bottom = `${C.innerHeight - v.top + 4}px`, y.style.top = "auto", y.style.maxHeight = `${T - 8}px`) : d === "bottom" ? (y.style.top = `${v.bottom + 4}px`, y.style.bottom = "auto", y.style.maxHeight = `${L - 8}px`) : d === "top" && !Y ? (y.style.top = `${v.bottom + 4}px`, y.style.bottom = "auto", y.style.maxHeight = `${L - 8}px`) : (y.style.bottom = `${C.innerHeight - v.top + 4}px`, y.style.top = "auto", y.style.maxHeight = `${T - 8}px`)) : d === "left" ? (y.style.position = "fixed", y.style.right = `${C.innerWidth - v.left + 4}px`, y.style.top = `${v.top}px`, y.style.maxHeight = `${C.innerHeight - v.top - 8}px`) : d === "right" && (y.style.position = "fixed", y.style.left = `${v.right + 4}px`, y.style.top = `${v.top}px`, y.style.maxHeight = `${C.innerHeight - v.top - 8}px`);
      }
    };
    we(() => {
      const v = Ee(), y = () => {
        N && z();
      }, C = () => {
        N && z();
      };
      return N && (z(), v.addEventListener("scroll", y, !0), v.addEventListener("resize", C)), () => {
        v.removeEventListener("scroll", y, !0), v.removeEventListener("resize", C);
      };
    }, [N, d]), we(() => {
      const v = pe(), y = (L) => {
        L.detail.id !== V && k(!1);
      }, C = (L) => {
        const T = L.target, E = P.current, R = O.current;
        E && R && !E.contains(T) && !R.contains(T) && k(!1);
      };
      return v.addEventListener(ht, y), v.addEventListener("click", C), () => {
        v.removeEventListener(ht, y), v.removeEventListener("click", C);
      };
    }, [V]);
    const F = () => {
      if (m) return;
      if (N) {
        k(!1);
        return;
      }
      pe().dispatchEvent(
        new CustomEvent(ht, {
          detail: { id: V }
        })
      ), k(!0);
    }, A = () => {
      if (s) {
        const v = s.find((y) => y.value === f);
        return v == null ? void 0 : v.label;
      }
      if (h) {
        const y = Jt.toArray(h).find(
          (C) => ft(C) && "value" in C.props && C.props.value === f
        );
        return ft(y) ? y.props.children : null;
      }
      return null;
    }, J = (v) => {
      m || (p == null || p(v), k(!1));
    }, I = () => s ? s.map((v) => /* @__PURE__ */ l.jsx(
      it,
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
    )) : h ? Jt.map(h, (v) => ft(v) && "value" in v.props ? nn(v, {
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
              "rounded-none": n === "none",
              "rounded-sm": n === "sm",
              "rounded-md": n === "md",
              "rounded-lg": n === "lg",
              "rounded-xl": n === "full"
            },
            d === "left" || d === "right" ? "w-max" : "w-full"
          ),
          onClick: (C) => C.stopPropagation(),
          style: {
            overflowY: "auto"
          },
          children: I()
        }
      ), y = pe();
      return "body" in y ? tt(v, y.body) : null;
    };
    return /* @__PURE__ */ l.jsxs("div", { className: $(x ? "w-full" : "inline-block"), ref: G, ...S, children: [
      o && /* @__PURE__ */ l.jsxs(
        "label",
        {
          htmlFor: V,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            o,
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
              is({ variant: i ? "error" : r, size: t, rounded: n, fullWidth: x }),
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
              /* @__PURE__ */ l.jsx("span", { className: "flex items-center text-neutral-500 gap-2 min-w-0 flex-1", children: /* @__PURE__ */ l.jsx("span", { className: "truncate", children: A() || c }) }),
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
const ls = ({
  currentPage: e,
  totalPages: r,
  totalData: t,
  onPageChange: n,
  siblingCount: s = 1,
  className: o,
  perPageOptions: i,
  perPage: a = 10,
  label: u = "",
  onPerPageChange: c
}) => {
  const f = (d, x) => {
    const h = x - d + 1;
    return Array.from({ length: h }, (b, w) => w + d);
  }, m = (() => {
    const d = s * 2 + 3, x = d + 2;
    if (r > x) {
      const h = Math.max(2, e - s), b = Math.min(r - 1, e + s);
      let w = f(h, b);
      const S = h > 2, G = r - b > 1, N = d - (w.length + 1);
      if (S && !G)
        w = [...f(h - N, h - 1), ...w];
      else if (!S && G) {
        const k = f(b + 1, b + N);
        w = [...w, ...k];
      } else S && G && (w = [...w]);
      return [1, ...w, r];
    }
    return f(1, r);
  })();
  return /* @__PURE__ */ l.jsxs(
    "nav",
    {
      className: oe("flex items-center justify-between space-x-1", o),
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "hidden sm:block text-sm text-neutral-700", children: [
          /* @__PURE__ */ l.jsx("b", { children: `${e} - ${r}` }),
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
                onChange: (d) => c && c(Number(d)),
                size: "sm",
                className: "w-16",
                fullWidth: !1,
                "aria-label": "Items per page",
                children: i.map((d) => /* @__PURE__ */ l.jsx(it, { value: d.toString(), children: d }, d))
              }
            ),
            /* @__PURE__ */ l.jsx("span", { className: "text-neutral-700 text-sm", children: "data per halaman" })
          ] }),
          /* @__PURE__ */ l.jsx(
            Re,
            {
              variant: "ghost",
              onClick: () => n(e - 1),
              disabled: e === 1,
              className: oe(
                "px-3 py-1 rounded-md text-sm",
                e === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
              ),
              children: /* @__PURE__ */ l.jsx(re, { size: "18", icon: "mdi:chevron-left" })
            }
          ),
          m.map((d, x) => {
            const h = d === e, b = typeof d == "string" && d === "...";
            return /* @__PURE__ */ l.jsx(
              Re,
              {
                variant: "ghost",
                onClick: () => !b && n(d),
                className: oe(
                  "px-3 py-1 rounded-md text-sm",
                  h ? "bg-primary text-white hover:bg-primary" : "text-gray-700",
                  b && "cursor-default"
                ),
                children: d
              },
              x
            );
          }),
          /* @__PURE__ */ l.jsx(
            Re,
            {
              variant: "ghost",
              onClick: () => n(e + 1),
              disabled: e === r,
              className: oe(
                "px-3 py-1 rounded-md text-sm",
                e === r ? "text-gray-400 cursor-not-allowed" : "text-gray-700"
              ),
              children: /* @__PURE__ */ l.jsx(re, { size: "18", icon: "mdi:chevron-right" })
            }
          )
        ] })
      ]
    }
  );
}, Oo = ({
  label: e,
  checked: r = !1,
  disabled: t = !1,
  onChange: n,
  name: s,
  value: o
}) => {
  const i = (a) => {
    n && n(a.target.checked);
  };
  return /* @__PURE__ */ l.jsxs(
    "label",
    {
      className: oe(
        "inline-flex items-center cursor-pointer",
        t && "opacity-60 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "radio",
            className: oe(
              "w-5 h-5 border-2 rounded-full appearance-none",
              "focus:outline-none focus:ring-2 focus:ring-primary/25",
              r ? "border-primary bg-primary" : "border-gray-300 hover:border-primary",
              t && "cursor-not-allowed"
            ),
            checked: r,
            disabled: t,
            onChange: i,
            name: s,
            value: o
          }
        ),
        e && /* @__PURE__ */ l.jsx("span", { className: "ml-2 text-sm text-gray-700 dark:text-gray-300", children: e })
      ]
    }
  );
}, as = Ne(
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
), us = ({
  width: e,
  height: r,
  variant: t = "default",
  rounded: n = "md",
  fullWidth: s = !1,
  className: o
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: $(as({ variant: t, rounded: n, fullWidth: s }), o),
    style: {
      width: !s && typeof e == "number" ? `${e}px` : e,
      height: typeof r == "number" ? `${r}px` : r
    }
  }
), zo = ({
  min: e = 0,
  max: r = 100,
  step: t = 1,
  value: n,
  defaultValue: s = e,
  onChange: o,
  className: i,
  disabled: a = !1,
  showValue: u = !1,
  marks: c = []
}) => {
  const [f, p] = ie(s), [m, d] = ie(!1), x = xe(null), h = n !== void 0 ? n : f, b = (P) => {
    if (a) return;
    const O = Math.min(Math.max(P, e), r);
    n === void 0 && p(O), o == null || o(O);
  }, w = (P) => {
    a || (d(!0), N(P));
  }, S = (P) => {
    !m || a || N(P);
  }, G = () => {
    d(!1);
  }, N = (P) => {
    if (!x.current) return;
    const O = x.current.getBoundingClientRect(), V = (P.clientX - O.left) / O.width, z = e + (r - e) * V, F = Math.round(z / t) * t;
    b(F);
  };
  we(() => {
    if (m) {
      const P = Ee();
      P.addEventListener("mousemove", S), P.addEventListener("mouseup", G);
    }
    return () => {
      const P = Ee();
      P.removeEventListener("mousemove", S), P.removeEventListener("mouseup", G);
    };
  }, [m]);
  const k = (h - e) / (r - e) * 100;
  return /* @__PURE__ */ l.jsxs("div", { className: oe("relative w-full", i), children: [
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: x,
        className: oe(
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
              className: oe(
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
    c.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "flex justify-between mt-2", children: c.map((P) => /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "text-xs text-gray-500",
        style: { left: `${(P.value - e) / (r - e) * 100}%` },
        children: P.label
      },
      P.value
    )) }),
    u && /* @__PURE__ */ l.jsx("div", { className: "mt-2 text-sm text-gray-600", children: h })
  ] });
}, cs = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8"
}, ds = {
  primary: "text-primary",
  warning: "text-warning-500",
  default: "text-default-400"
}, Lo = ({
  rating: e,
  maxRating: r = 5,
  size: t = "md",
  color: n = "primary",
  readOnly: s = !1,
  onRatingChange: o,
  className: i
}) => {
  const [a, u] = ie(null), c = (d) => {
    s || u(d);
  }, f = () => {
    s || u(null);
  }, p = (d) => {
    !s && o && o(d);
  }, m = a !== null ? a : e;
  return /* @__PURE__ */ l.jsx("div", { className: $("flex items-center gap-1", i), children: [...Array(r)].map((d, x) => {
    const h = x + 1, b = h <= m, w = a !== null && h <= a;
    return /* @__PURE__ */ l.jsx(
      "button",
      {
        className: $(
          "transition-colors duration-200",
          cs[t],
          b || w ? ds[n] : "text-default-200",
          !s && "cursor-pointer"
        ),
        onMouseEnter: () => c(h),
        onMouseLeave: f,
        onClick: () => p(h),
        disabled: s,
        "aria-label": `Rate ${h} out of ${r}`,
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
}, gs = {
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
}, fs = {
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4"
}, To = ({
  status: e,
  size: r = "md",
  withLabel: t = !1,
  className: n
}) => {
  const { bgColor: s, label: o } = gs[e], i = fs[r];
  return /* @__PURE__ */ l.jsxs("div", { className: $("flex items-center gap-2", n), children: [
    /* @__PURE__ */ l.jsx("div", { className: $("rounded-full animate-pulse", s, i) }),
    t && /* @__PURE__ */ l.jsx("span", { className: "text-sm", children: o })
  ] });
}, yr = (e, r) => {
  if (r) return r;
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
}, ms = ({
  steps: e,
  activeStep: r,
  className: t,
  variant: n = "default"
}) => /* @__PURE__ */ l.jsx("div", { className: $("flex flex-row items-center w-full justify-between", t), children: e.map((s, o) => {
  const i = o < r ? "completed" : o === r ? "active" : "pending";
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: "flex items-center flex-1",
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: $(
          "flex flex-col items-center z-10",
          n === "default" ? "gap-4" : "gap-2",
          n === "default" ? "px-5" : "px-3"
        ), children: [
          n === "default" && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: $(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                Sr(i)
              ),
              children: /* @__PURE__ */ l.jsx(
                re,
                {
                  icon: yr(i, s.icon),
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
                children: s.label
              }
            ),
            s.description && /* @__PURE__ */ l.jsx("span", { className: "text-xs text-neutral-500", children: s.description })
          ] })
        ] }),
        o < e.length - 1 && /* @__PURE__ */ l.jsx(
          ss,
          {
            className: $(
              "transition-all duration-200",
              o < r ? "bg-primary-500" : "bg-neutral-200"
            )
          }
        )
      ]
    },
    o
  );
}) }), ps = ({
  steps: e,
  activeStep: r,
  className: t,
  variant: n = "default"
}) => /* @__PURE__ */ l.jsx("div", { className: $("flex flex-col items-start gap-8", t), children: e.map((s, o) => {
  const i = o < r ? "completed" : o === r ? "active" : "pending";
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: "flex flex-row w-full items-center relative",
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: $(
          "flex flex-row items-center z-10",
          n === "default" ? "gap-4" : "gap-2"
        ), children: [
          n === "default" && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: $(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                Sr(i)
              ),
              children: /* @__PURE__ */ l.jsx(
                re,
                {
                  icon: yr(i, s.icon),
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
                children: s.label
              }
            ),
            s.description && /* @__PURE__ */ l.jsx("span", { className: "text-xs text-neutral-500", children: s.description })
          ] })
        ] }),
        o < e.length - 1 && /* @__PURE__ */ l.jsx(
          "div",
          {
            className: $(
              "absolute transition-all duration-200",
              n === "default" ? "left-4 w-[1px] top-10 bottom-[-24px]" : "left-0 w-[1px] top-6 bottom-[-24px]",
              o < r ? "bg-primary-500" : "bg-neutral-200"
            )
          }
        )
      ]
    },
    o
  );
}) }), Ho = ({
  orientation: e = "horizontal",
  variant: r = "default",
  ...t
}) => e === "vertical" ? /* @__PURE__ */ l.jsx(ps, { variant: r, ...t }) : /* @__PURE__ */ l.jsx(ms, { variant: r, ...t }), Go = ({
  label: e,
  checked: r = !1,
  disabled: t = !1,
  onChange: n,
  size: s = "md"
}) => {
  const o = (u) => {
    n && n(u.target.checked);
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
      className: oe(
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
              checked: r,
              disabled: t,
              onChange: o
            }
          ),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: oe(
                "block rounded-full transition-colors duration-200 ease-in-out",
                i[s],
                r ? "bg-primary" : "bg-gray-200 dark:bg-gray-700",
                t && "cursor-not-allowed"
              )
            }
          ),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: oe(
                "absolute rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out",
                a[s],
                r ? s === "sm" ? "translate-x-4" : s === "md" ? "translate-x-5" : "translate-x-7" : "translate-x-0.5",
                "top-1/2 -translate-y-1/2"
              )
            }
          )
        ] }),
        e && /* @__PURE__ */ l.jsx("span", { className: "ml-3 text-sm text-gray-700 dark:text-gray-300", children: e })
      ]
    }
  );
}, Bo = ({
  items: e,
  defaultActiveId: r,
  variant: t = "default",
  size: n = "md",
  className: s,
  tabListClassName: o,
  tabClassName: i,
  contentClassName: a,
  onChange: u
}) => {
  var x, h;
  const [c, f] = ie(r || ((x = e[0]) == null ? void 0 : x.id) || ""), p = Ve((b) => {
    f(b), u == null || u(b);
  }, [u]), m = () => {
    switch (n) {
      case "sm":
        return "text-sm px-3 py-1.5";
      case "lg":
        return "text-lg px-6 py-3";
      default:
        return "text-base px-4 py-2";
    }
  }, d = (b, w) => {
    const S = oe(
      "flex items-center space-x-2 transition-colors",
      "font-medium",
      m(),
      w && "opacity-50 cursor-not-allowed",
      !w && "cursor-pointer"
    );
    switch (t) {
      case "pills":
        return oe(
          S,
          "rounded-full",
          b ? "bg-primary text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        );
      case "underline":
        return oe(
          S,
          "border-b-2",
          b ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
      default:
        return oe(
          S,
          "border-b-2",
          b ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
    }
  };
  return /* @__PURE__ */ l.jsxs("div", { className: oe("w-full", s), children: [
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: oe(
          "flex space-x-1 border-b border-gray-200 dark:border-gray-700",
          t === "pills" && "space-x-2 border-b-0",
          o
        ),
        children: e.map((b) => {
          const w = b.id === c, S = !!b.disabled;
          return /* @__PURE__ */ l.jsxs(
            "button",
            {
              onClick: () => !S && p(b.id),
              disabled: S,
              className: oe(
                d(w, S),
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
    /* @__PURE__ */ l.jsx("div", { className: oe("mt-4", a), children: (h = e.find((b) => b.id === c)) == null ? void 0 : h.content })
  ] });
}, xt = ({
  variant: e = "p",
  children: r,
  className: t,
  as: n
}) => {
  const s = {
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
  }, i = n || ((a) => {
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
  return /* @__PURE__ */ l.jsx(i, { className: $("text-gray-900", s[e], t), children: r });
}, vt = "timepicker-dropdown-opened", hs = Ne(
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
), xs = ve(
  ({
    value: e,
    onChange: r,
    use24Hour: t = !1,
    variant: n = "default",
    size: s = "md",
    rounded: o = "md",
    disabled: i = !1,
    errorText: a,
    helperText: u,
    label: c,
    required: f = !1,
    labelPlacement: p = "top",
    fullWidth: m = !1,
    className: d,
    placeholder: x = "Select time",
    ...h
  }, b) => {
    const [w, S] = ie(!1), [G, N] = ie(e || ""), [k, P] = ie(0), [O, M] = ie(0), [V, z] = ie(!0), F = xe(null), A = xe(null), J = xe(null), _ = `timepicker-${Ae.useId().replace(/:/g, "")}`, v = () => {
      if (!w || !A.current || !J.current) return;
      const R = A.current.getBoundingClientRect(), H = J.current, Y = H.offsetHeight, te = Ee(), B = te.innerHeight - R.bottom, K = R.top, ne = R.bottom + Y + 4 >= te.innerHeight, Q = K > B;
      ne && Q ? (H.style.bottom = `${te.innerHeight - R.top + 4}px`, H.style.top = "auto", H.style.maxHeight = `${K - 8}px`) : (H.style.top = `${R.bottom + 4}px`, H.style.bottom = "auto", H.style.maxHeight = `${B - 8}px`);
    };
    we(() => {
      const R = Ee(), H = pe(), Y = () => {
        w && v();
      }, te = () => {
        w && v();
      }, B = (ne) => {
        ne.detail.id !== _ && S(!1);
      }, K = (ne) => {
        const Q = ne.target;
        F.current && J.current && !F.current.contains(Q) && !J.current.contains(Q) && S(!1);
      };
      return w && (v(), R.addEventListener("scroll", Y, !0), R.addEventListener("resize", te)), H.addEventListener(vt, B), H.addEventListener("mousedown", K), () => {
        R.removeEventListener("scroll", Y, !0), R.removeEventListener("resize", te), H.removeEventListener(vt, B), H.removeEventListener("mousedown", K);
      };
    }, [w, _]);
    const y = () => {
      i || (w || pe().dispatchEvent(
        new CustomEvent(vt, {
          detail: { id: _ }
        })
      ), S(!w));
    };
    we(() => {
      if (e) {
        N(e);
        const [R, H] = e.split(":").map(Number);
        t ? P(R) : (P(R % 12 || 12), z(R < 12)), M(H);
      }
    }, [e, t]);
    const C = () => {
      const H = `${(t || V ? k : k + 12).toString().padStart(2, "0")}:${O.toString().padStart(2, "0")}`;
      N(H), r == null || r(H), S(!1);
    }, L = () => t ? Array.from({ length: 24 }, (R, H) => H) : Array.from({ length: 12 }, (R, H) => H + 1), T = () => Array.from({ length: 60 }, (R, H) => H), E = pe();
    return "body" in E ? /* @__PURE__ */ l.jsxs("div", { ref: F, className: $("relative", m && "w-full", d), children: [
      c && /* @__PURE__ */ l.jsxs(
        "label",
        {
          className: $(
            "block text-sm font-medium text-gray-700 mb-1",
            p === "left" && "inline-block mr-2"
          ),
          children: [
            c,
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
          onClick: y,
          readOnly: !0,
          className: $(hs({ variant: n, size: s, rounded: o, fullWidth: m })),
          disabled: i,
          ...h
        }
      ) }),
      w && tt(
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
                /* @__PURE__ */ l.jsx("div", { className: "w-24 flex flex-col", children: /* @__PURE__ */ l.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ l.jsx("div", { className: "flex flex-col gap-1 py-1", children: L().map((R) => /* @__PURE__ */ l.jsx(
                  Re,
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
                  Re,
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
                    Re,
                    {
                      variant: "ghost",
                      onClick: () => z(!0),
                      className: $(
                        "px-3 py-1.5 text-sm rounded hover:bg-gray-100 w-full justify-start",
                        V && "bg-primary-100 text-primary-700"
                      ),
                      children: "AM"
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    Re,
                    {
                      variant: "ghost",
                      onClick: () => z(!1),
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
                Re,
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
xs.displayName = "TimePicker";
const vs = Ne(
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
), bs = Ne(
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
), ws = ve(
  ({
    checked: e = !1,
    onCheckedChange: r,
    variant: t = "primary",
    size: n = "md",
    label: s,
    required: o = !1,
    helperText: i,
    errorText: a,
    error: u = !1,
    className: c,
    ...f
  }, p) => {
    const m = Ae.useId(), d = `${m}-helper`, x = `${m}-error`;
    return /* @__PURE__ */ l.jsxs("div", { className: "inline-flex flex-col gap-1.5", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            role: "switch",
            "aria-checked": e,
            "data-state": e ? "checked" : "unchecked",
            onClick: () => r == null ? void 0 : r(!e),
            ref: p,
            className: $(vs({ variant: u ? "danger" : t, size: n }), c),
            "aria-describedby": u ? x : i ? d : void 0,
            "aria-invalid": u,
            "aria-required": o,
            ...f,
            children: /* @__PURE__ */ l.jsx(
              "span",
              {
                "data-state": e ? "checked" : "unchecked",
                className: $(
                  bs({ size: n }),
                  e ? "translate-x-5" : "translate-x-1"
                )
              }
            )
          }
        ),
        s && /* @__PURE__ */ l.jsxs(
          "label",
          {
            htmlFor: m,
            className: "text-sm text-neutral-900",
            children: [
              s,
              o && /* @__PURE__ */ l.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
            ]
          }
        )
      ] }),
      u && a && /* @__PURE__ */ l.jsx("p", { className: "text-xs text-danger-500", id: x, children: a }),
      !u && i && /* @__PURE__ */ l.jsx("p", { className: "text-xs text-neutral-500", id: d, children: i })
    ] });
  }
);
ws.displayName = "Toggle";
const Uo = ({
  content: e,
  children: r,
  position: t = "top",
  delay: n = 0,
  className: s
}) => {
  const [o, i] = ie(!1), [a, u] = ie({ top: 0, left: 0 }), c = xe(null), f = xe(null);
  let p;
  const m = () => {
    if (!c.current || !f.current) return;
    const h = f.current.getBoundingClientRect(), b = c.current.getBoundingClientRect();
    let w = 0, S = 0;
    switch (t) {
      case "top":
        w = h.top - b.height - 8, S = h.left + (h.width - b.width) / 2;
        break;
      case "bottom":
        w = h.bottom + 8, S = h.left + (h.width - b.width) / 2;
        break;
      case "left":
        w = h.top + (h.height - b.height) / 2, S = h.left - b.width - 8;
        break;
      case "right":
        w = h.top + (h.height - b.height) / 2, S = h.right + 8;
        break;
    }
    u({ top: w, left: S });
  };
  we(() => {
    if (o) {
      m();
      const h = Ee();
      h.addEventListener("scroll", m), h.addEventListener("resize", m);
    }
    return () => {
      const h = Ee();
      h.removeEventListener("scroll", m), h.removeEventListener("resize", m);
    };
  }, [o, t]);
  const d = () => {
    p = setTimeout(() => {
      i(!0);
    }, n);
  }, x = () => {
    clearTimeout(p), i(!1);
  };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      ref: f,
      className: "relative inline-block",
      onMouseEnter: d,
      onMouseLeave: x,
      children: [
        r,
        o && /* @__PURE__ */ l.jsxs(
          "div",
          {
            ref: c,
            className: oe(
              "absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-md shadow-lg",
              "transition-opacity duration-200",
              s
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
                  className: oe(
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
}, ys = Ne("flex items-center text-sm", {
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
}), Ss = ve(
  ({
    className: e,
    variant: r = "default",
    size: t = "md",
    items: n,
    separator: s = /* @__PURE__ */ l.jsx(re, { icon: "mdi:slash-forward", className: "h-4 w-4 flex-shrink-0" }),
    activeLastItem: o = !0,
    ...i
  }, a) => /* @__PURE__ */ l.jsx(
    "nav",
    {
      ref: a,
      className: $(ys({ variant: r, size: t }), e),
      "aria-label": "Breadcrumb",
      ...i,
      children: /* @__PURE__ */ l.jsx("ol", { className: "flex flex-wrap items-center gap-1.5", children: n.map((u, c) => {
        const f = c === n.length - 1, p = f && o;
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
              ), children: s })
            ]
          },
          u.label
        );
      }) })
    }
  )
);
Ss.displayName = "Breadcrumbs";
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
function Te(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function _e(e, r) {
  return (t) => {
    r.setState((n) => ({
      ...n,
      [e]: Te(t, n[e])
    }));
  };
}
function lt(e) {
  return e instanceof Function;
}
function Cs(e) {
  return Array.isArray(e) && e.every((r) => typeof r == "number");
}
function Rs(e, r) {
  const t = [], n = (s) => {
    s.forEach((o) => {
      t.push(o);
      const i = r(o);
      i != null && i.length && n(i);
    });
  };
  return n(e), t;
}
function U(e, r, t) {
  let n = [], s;
  return (o) => {
    let i;
    t.key && t.debug && (i = Date.now());
    const a = e(o);
    if (!(a.length !== n.length || a.some((f, p) => n[p] !== f)))
      return s;
    n = a;
    let c;
    if (t.key && t.debug && (c = Date.now()), s = r(...a), t == null || t.onChange == null || t.onChange(s), t.key && t.debug && t != null && t.debug()) {
      const f = Math.round((Date.now() - i) * 100) / 100, p = Math.round((Date.now() - c) * 100) / 100, m = p / 16, d = (x, h) => {
        for (x = String(x); x.length < h; )
          x = " " + x;
        return x;
      };
      console.info(`%c⏱ ${d(p, 5)} /${d(f, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * m, 120))}deg 100% 31%);`, t == null ? void 0 : t.key);
    }
    return s;
  };
}
function W(e, r, t, n) {
  return {
    debug: () => {
      var s;
      return (s = e == null ? void 0 : e.debugAll) != null ? s : e[r];
    },
    key: process.env.NODE_ENV === "development" && t,
    onChange: n
  };
}
function js(e, r, t, n) {
  const s = () => {
    var i;
    return (i = o.getValue()) != null ? i : e.options.renderFallbackValue;
  }, o = {
    id: `${r.id}_${t.id}`,
    row: r,
    column: t,
    getValue: () => r.getValue(n),
    renderValue: s,
    getContext: U(() => [e, t, r, o], (i, a, u, c) => ({
      table: i,
      column: a,
      row: u,
      cell: c,
      getValue: c.getValue,
      renderValue: c.renderValue
    }), W(e.options, "debugCells", "cell.getContext"))
  };
  return e._features.forEach((i) => {
    i.createCell == null || i.createCell(o, t, r, e);
  }, {}), o;
}
function _s(e, r, t, n) {
  var s, o;
  const a = {
    ...e._getDefaultColumnDef(),
    ...r
  }, u = a.accessorKey;
  let c = (s = (o = a.id) != null ? o : u ? typeof String.prototype.replaceAll == "function" ? u.replaceAll(".", "_") : u.replace(/\./g, "_") : void 0) != null ? s : typeof a.header == "string" ? a.header : void 0, f;
  if (a.accessorFn ? f = a.accessorFn : u && (u.includes(".") ? f = (m) => {
    let d = m;
    for (const h of u.split(".")) {
      var x;
      d = (x = d) == null ? void 0 : x[h], process.env.NODE_ENV !== "production" && d === void 0 && console.warn(`"${h}" in deeply nested key "${u}" returned undefined.`);
    }
    return d;
  } : f = (m) => m[a.accessorKey]), !c)
    throw process.env.NODE_ENV !== "production" ? new Error(a.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header") : new Error();
  let p = {
    id: `${String(c)}`,
    accessorFn: f,
    parent: n,
    depth: t,
    columnDef: a,
    columns: [],
    getFlatColumns: U(() => [!0], () => {
      var m;
      return [p, ...(m = p.columns) == null ? void 0 : m.flatMap((d) => d.getFlatColumns())];
    }, W(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: U(() => [e._getOrderColumnsFn()], (m) => {
      var d;
      if ((d = p.columns) != null && d.length) {
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
function or(e, r, t) {
  var n;
  let o = {
    id: (n = t.id) != null ? n : r.id,
    column: r,
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
      return a(o), i;
    },
    getContext: () => ({
      table: e,
      header: o,
      column: r
    })
  };
  return e._features.forEach((i) => {
    i.createHeader == null || i.createHeader(o, e);
  }), o;
}
const Ns = {
  createTable: (e) => {
    e.getHeaderGroups = U(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (r, t, n, s) => {
      var o, i;
      const a = (o = n == null ? void 0 : n.map((p) => t.find((m) => m.id === p)).filter(Boolean)) != null ? o : [], u = (i = s == null ? void 0 : s.map((p) => t.find((m) => m.id === p)).filter(Boolean)) != null ? i : [], c = t.filter((p) => !(n != null && n.includes(p.id)) && !(s != null && s.includes(p.id)));
      return rt(r, [...a, ...c, ...u], e);
    }, W(e.options, he, "getHeaderGroups")), e.getCenterHeaderGroups = U(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (r, t, n, s) => (t = t.filter((o) => !(n != null && n.includes(o.id)) && !(s != null && s.includes(o.id))), rt(r, t, e, "center")), W(e.options, he, "getCenterHeaderGroups")), e.getLeftHeaderGroups = U(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (r, t, n) => {
      var s;
      const o = (s = n == null ? void 0 : n.map((i) => t.find((a) => a.id === i)).filter(Boolean)) != null ? s : [];
      return rt(r, o, e, "left");
    }, W(e.options, he, "getLeftHeaderGroups")), e.getRightHeaderGroups = U(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (r, t, n) => {
      var s;
      const o = (s = n == null ? void 0 : n.map((i) => t.find((a) => a.id === i)).filter(Boolean)) != null ? s : [];
      return rt(r, o, e, "right");
    }, W(e.options, he, "getRightHeaderGroups")), e.getFooterGroups = U(() => [e.getHeaderGroups()], (r) => [...r].reverse(), W(e.options, he, "getFooterGroups")), e.getLeftFooterGroups = U(() => [e.getLeftHeaderGroups()], (r) => [...r].reverse(), W(e.options, he, "getLeftFooterGroups")), e.getCenterFooterGroups = U(() => [e.getCenterHeaderGroups()], (r) => [...r].reverse(), W(e.options, he, "getCenterFooterGroups")), e.getRightFooterGroups = U(() => [e.getRightHeaderGroups()], (r) => [...r].reverse(), W(e.options, he, "getRightFooterGroups")), e.getFlatHeaders = U(() => [e.getHeaderGroups()], (r) => r.map((t) => t.headers).flat(), W(e.options, he, "getFlatHeaders")), e.getLeftFlatHeaders = U(() => [e.getLeftHeaderGroups()], (r) => r.map((t) => t.headers).flat(), W(e.options, he, "getLeftFlatHeaders")), e.getCenterFlatHeaders = U(() => [e.getCenterHeaderGroups()], (r) => r.map((t) => t.headers).flat(), W(e.options, he, "getCenterFlatHeaders")), e.getRightFlatHeaders = U(() => [e.getRightHeaderGroups()], (r) => r.map((t) => t.headers).flat(), W(e.options, he, "getRightFlatHeaders")), e.getCenterLeafHeaders = U(() => [e.getCenterFlatHeaders()], (r) => r.filter((t) => {
      var n;
      return !((n = t.subHeaders) != null && n.length);
    }), W(e.options, he, "getCenterLeafHeaders")), e.getLeftLeafHeaders = U(() => [e.getLeftFlatHeaders()], (r) => r.filter((t) => {
      var n;
      return !((n = t.subHeaders) != null && n.length);
    }), W(e.options, he, "getLeftLeafHeaders")), e.getRightLeafHeaders = U(() => [e.getRightFlatHeaders()], (r) => r.filter((t) => {
      var n;
      return !((n = t.subHeaders) != null && n.length);
    }), W(e.options, he, "getRightLeafHeaders")), e.getLeafHeaders = U(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (r, t, n) => {
      var s, o, i, a, u, c;
      return [...(s = (o = r[0]) == null ? void 0 : o.headers) != null ? s : [], ...(i = (a = t[0]) == null ? void 0 : a.headers) != null ? i : [], ...(u = (c = n[0]) == null ? void 0 : c.headers) != null ? u : []].map((f) => f.getLeafHeaders()).flat();
    }, W(e.options, he, "getLeafHeaders"));
  }
};
function rt(e, r, t, n) {
  var s, o;
  let i = 0;
  const a = function(m, d) {
    d === void 0 && (d = 1), i = Math.max(i, d), m.filter((x) => x.getIsVisible()).forEach((x) => {
      var h;
      (h = x.columns) != null && h.length && a(x.columns, d + 1);
    }, 0);
  };
  a(e);
  let u = [];
  const c = (m, d) => {
    const x = {
      depth: d,
      id: [n, `${d}`].filter(Boolean).join("_"),
      headers: []
    }, h = [];
    m.forEach((b) => {
      const w = [...h].reverse()[0], S = b.column.depth === x.depth;
      let G, N = !1;
      if (S && b.column.parent ? G = b.column.parent : (G = b.column, N = !0), w && (w == null ? void 0 : w.column) === G)
        w.subHeaders.push(b);
      else {
        const k = or(t, G, {
          id: [n, d, G.id, b == null ? void 0 : b.id].filter(Boolean).join("_"),
          isPlaceholder: N,
          placeholderId: N ? `${h.filter((P) => P.column === G).length}` : void 0,
          depth: d,
          index: h.length
        });
        k.subHeaders.push(b), h.push(k);
      }
      x.headers.push(b), b.headerGroup = x;
    }), u.push(x), d > 0 && c(h, d - 1);
  }, f = r.map((m, d) => or(t, m, {
    depth: i,
    index: d
  }));
  c(f, i - 1), u.reverse();
  const p = (m) => m.filter((x) => x.column.getIsVisible()).map((x) => {
    let h = 0, b = 0, w = [0];
    x.subHeaders && x.subHeaders.length ? (w = [], p(x.subHeaders).forEach((G) => {
      let {
        colSpan: N,
        rowSpan: k
      } = G;
      h += N, w.push(k);
    })) : h = 1;
    const S = Math.min(...w);
    return b = b + S, x.colSpan = h, x.rowSpan = b, {
      colSpan: h,
      rowSpan: b
    };
  });
  return p((s = (o = u[0]) == null ? void 0 : o.headers) != null ? s : []), u;
}
const $s = (e, r, t, n, s, o, i) => {
  let a = {
    id: r,
    index: n,
    original: t,
    depth: s,
    parentId: i,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (u) => {
      if (a._valuesCache.hasOwnProperty(u))
        return a._valuesCache[u];
      const c = e.getColumn(u);
      if (c != null && c.accessorFn)
        return a._valuesCache[u] = c.accessorFn(a.original, n), a._valuesCache[u];
    },
    getUniqueValues: (u) => {
      if (a._uniqueValuesCache.hasOwnProperty(u))
        return a._uniqueValuesCache[u];
      const c = e.getColumn(u);
      if (c != null && c.accessorFn)
        return c.columnDef.getUniqueValues ? (a._uniqueValuesCache[u] = c.columnDef.getUniqueValues(a.original, n), a._uniqueValuesCache[u]) : (a._uniqueValuesCache[u] = [a.getValue(u)], a._uniqueValuesCache[u]);
    },
    renderValue: (u) => {
      var c;
      return (c = a.getValue(u)) != null ? c : e.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => Rs(a.subRows, (u) => u.subRows),
    getParentRow: () => a.parentId ? e.getRow(a.parentId, !0) : void 0,
    getParentRows: () => {
      let u = [], c = a;
      for (; ; ) {
        const f = c.getParentRow();
        if (!f) break;
        u.push(f), c = f;
      }
      return u.reverse();
    },
    getAllCells: U(() => [e.getAllLeafColumns()], (u) => u.map((c) => js(e, a, c, c.id)), W(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: U(() => [a.getAllCells()], (u) => u.reduce((c, f) => (c[f.column.id] = f, c), {}), W(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let u = 0; u < e._features.length; u++) {
    const c = e._features[u];
    c == null || c.createRow == null || c.createRow(a, e);
  }
  return a;
}, Es = {
  createColumn: (e, r) => {
    e._getFacetedRowModel = r.options.getFacetedRowModel && r.options.getFacetedRowModel(r, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : r.getPreFilteredRowModel(), e._getFacetedUniqueValues = r.options.getFacetedUniqueValues && r.options.getFacetedUniqueValues(r, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = r.options.getFacetedMinMaxValues && r.options.getFacetedMinMaxValues(r, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, Cr = (e, r, t) => {
  var n, s;
  const o = t == null || (n = t.toString()) == null ? void 0 : n.toLowerCase();
  return !!(!((s = e.getValue(r)) == null || (s = s.toString()) == null || (s = s.toLowerCase()) == null) && s.includes(o));
};
Cr.autoRemove = (e) => ke(e);
const Rr = (e, r, t) => {
  var n;
  return !!(!((n = e.getValue(r)) == null || (n = n.toString()) == null) && n.includes(t));
};
Rr.autoRemove = (e) => ke(e);
const jr = (e, r, t) => {
  var n;
  return ((n = e.getValue(r)) == null || (n = n.toString()) == null ? void 0 : n.toLowerCase()) === (t == null ? void 0 : t.toLowerCase());
};
jr.autoRemove = (e) => ke(e);
const _r = (e, r, t) => {
  var n;
  return (n = e.getValue(r)) == null ? void 0 : n.includes(t);
};
_r.autoRemove = (e) => ke(e);
const Nr = (e, r, t) => !t.some((n) => {
  var s;
  return !((s = e.getValue(r)) != null && s.includes(n));
});
Nr.autoRemove = (e) => ke(e) || !(e != null && e.length);
const $r = (e, r, t) => t.some((n) => {
  var s;
  return (s = e.getValue(r)) == null ? void 0 : s.includes(n);
});
$r.autoRemove = (e) => ke(e) || !(e != null && e.length);
const Er = (e, r, t) => e.getValue(r) === t;
Er.autoRemove = (e) => ke(e);
const Mr = (e, r, t) => e.getValue(r) == t;
Mr.autoRemove = (e) => ke(e);
const Vt = (e, r, t) => {
  let [n, s] = t;
  const o = e.getValue(r);
  return o >= n && o <= s;
};
Vt.resolveFilterValue = (e) => {
  let [r, t] = e, n = typeof r != "number" ? parseFloat(r) : r, s = typeof t != "number" ? parseFloat(t) : t, o = r === null || Number.isNaN(n) ? -1 / 0 : n, i = t === null || Number.isNaN(s) ? 1 / 0 : s;
  if (o > i) {
    const a = o;
    o = i, i = a;
  }
  return [o, i];
};
Vt.autoRemove = (e) => ke(e) || ke(e[0]) && ke(e[1]);
const De = {
  includesString: Cr,
  includesStringSensitive: Rr,
  equalsString: jr,
  arrIncludes: _r,
  arrIncludesAll: Nr,
  arrIncludesSome: $r,
  equals: Er,
  weakEquals: Mr,
  inNumberRange: Vt
};
function ke(e) {
  return e == null || e === "";
}
const Ms = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: _e("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, r) => {
    e.getAutoFilterFn = () => {
      const t = r.getCoreRowModel().flatRows[0], n = t == null ? void 0 : t.getValue(e.id);
      return typeof n == "string" ? De.includesString : typeof n == "number" ? De.inNumberRange : typeof n == "boolean" || n !== null && typeof n == "object" ? De.equals : Array.isArray(n) ? De.arrIncludes : De.weakEquals;
    }, e.getFilterFn = () => {
      var t, n;
      return lt(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (t = (n = r.options.filterFns) == null ? void 0 : n[e.columnDef.filterFn]) != null ? t : De[e.columnDef.filterFn]
      );
    }, e.getCanFilter = () => {
      var t, n, s;
      return ((t = e.columnDef.enableColumnFilter) != null ? t : !0) && ((n = r.options.enableColumnFilters) != null ? n : !0) && ((s = r.options.enableFilters) != null ? s : !0) && !!e.accessorFn;
    }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
      var t;
      return (t = r.getState().columnFilters) == null || (t = t.find((n) => n.id === e.id)) == null ? void 0 : t.value;
    }, e.getFilterIndex = () => {
      var t, n;
      return (t = (n = r.getState().columnFilters) == null ? void 0 : n.findIndex((s) => s.id === e.id)) != null ? t : -1;
    }, e.setFilterValue = (t) => {
      r.setColumnFilters((n) => {
        const s = e.getFilterFn(), o = n == null ? void 0 : n.find((f) => f.id === e.id), i = Te(t, o ? o.value : void 0);
        if (ir(s, i, e)) {
          var a;
          return (a = n == null ? void 0 : n.filter((f) => f.id !== e.id)) != null ? a : [];
        }
        const u = {
          id: e.id,
          value: i
        };
        if (o) {
          var c;
          return (c = n == null ? void 0 : n.map((f) => f.id === e.id ? u : f)) != null ? c : [];
        }
        return n != null && n.length ? [...n, u] : [u];
      });
    };
  },
  createRow: (e, r) => {
    e.columnFilters = {}, e.columnFiltersMeta = {};
  },
  createTable: (e) => {
    e.setColumnFilters = (r) => {
      const t = e.getAllLeafColumns(), n = (s) => {
        var o;
        return (o = Te(r, s)) == null ? void 0 : o.filter((i) => {
          const a = t.find((u) => u.id === i.id);
          if (a) {
            const u = a.getFilterFn();
            if (ir(u, i.value, a))
              return !1;
          }
          return !0;
        });
      };
      e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(n);
    }, e.resetColumnFilters = (r) => {
      var t, n;
      e.setColumnFilters(r ? [] : (t = (n = e.initialState) == null ? void 0 : n.columnFilters) != null ? t : []);
    }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
  }
};
function ir(e, r, t) {
  return (e && e.autoRemove ? e.autoRemove(r, t) : !1) || typeof r > "u" || typeof r == "string" && !r;
}
const ks = (e, r, t) => t.reduce((n, s) => {
  const o = s.getValue(e);
  return n + (typeof o == "number" ? o : 0);
}, 0), Is = (e, r, t) => {
  let n;
  return t.forEach((s) => {
    const o = s.getValue(e);
    o != null && (n > o || n === void 0 && o >= o) && (n = o);
  }), n;
}, Fs = (e, r, t) => {
  let n;
  return t.forEach((s) => {
    const o = s.getValue(e);
    o != null && (n < o || n === void 0 && o >= o) && (n = o);
  }), n;
}, Ps = (e, r, t) => {
  let n, s;
  return t.forEach((o) => {
    const i = o.getValue(e);
    i != null && (n === void 0 ? i >= i && (n = s = i) : (n > i && (n = i), s < i && (s = i)));
  }), [n, s];
}, Ds = (e, r) => {
  let t = 0, n = 0;
  if (r.forEach((s) => {
    let o = s.getValue(e);
    o != null && (o = +o) >= o && (++t, n += o);
  }), t) return n / t;
}, Vs = (e, r) => {
  if (!r.length)
    return;
  const t = r.map((o) => o.getValue(e));
  if (!Cs(t))
    return;
  if (t.length === 1)
    return t[0];
  const n = Math.floor(t.length / 2), s = t.sort((o, i) => o - i);
  return t.length % 2 !== 0 ? s[n] : (s[n - 1] + s[n]) / 2;
}, As = (e, r) => Array.from(new Set(r.map((t) => t.getValue(e))).values()), Os = (e, r) => new Set(r.map((t) => t.getValue(e))).size, zs = (e, r) => r.length, bt = {
  sum: ks,
  min: Is,
  max: Fs,
  extent: Ps,
  mean: Ds,
  median: Vs,
  unique: As,
  uniqueCount: Os,
  count: zs
}, Ls = {
  getDefaultColumnDef: () => ({
    aggregatedCell: (e) => {
      var r, t;
      return (r = (t = e.getValue()) == null || t.toString == null ? void 0 : t.toString()) != null ? r : null;
    },
    aggregationFn: "auto"
  }),
  getInitialState: (e) => ({
    grouping: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGroupingChange: _e("grouping", e),
    groupedColumnMode: "reorder"
  }),
  createColumn: (e, r) => {
    e.toggleGrouping = () => {
      r.setGrouping((t) => t != null && t.includes(e.id) ? t.filter((n) => n !== e.id) : [...t ?? [], e.id]);
    }, e.getCanGroup = () => {
      var t, n;
      return ((t = e.columnDef.enableGrouping) != null ? t : !0) && ((n = r.options.enableGrouping) != null ? n : !0) && (!!e.accessorFn || !!e.columnDef.getGroupingValue);
    }, e.getIsGrouped = () => {
      var t;
      return (t = r.getState().grouping) == null ? void 0 : t.includes(e.id);
    }, e.getGroupedIndex = () => {
      var t;
      return (t = r.getState().grouping) == null ? void 0 : t.indexOf(e.id);
    }, e.getToggleGroupingHandler = () => {
      const t = e.getCanGroup();
      return () => {
        t && e.toggleGrouping();
      };
    }, e.getAutoAggregationFn = () => {
      const t = r.getCoreRowModel().flatRows[0], n = t == null ? void 0 : t.getValue(e.id);
      if (typeof n == "number")
        return bt.sum;
      if (Object.prototype.toString.call(n) === "[object Date]")
        return bt.extent;
    }, e.getAggregationFn = () => {
      var t, n;
      if (!e)
        throw new Error();
      return lt(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (t = (n = r.options.aggregationFns) == null ? void 0 : n[e.columnDef.aggregationFn]) != null ? t : bt[e.columnDef.aggregationFn];
    };
  },
  createTable: (e) => {
    e.setGrouping = (r) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(r), e.resetGrouping = (r) => {
      var t, n;
      e.setGrouping(r ? [] : (t = (n = e.initialState) == null ? void 0 : n.grouping) != null ? t : []);
    }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
  },
  createRow: (e, r) => {
    e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (t) => {
      if (e._groupingValuesCache.hasOwnProperty(t))
        return e._groupingValuesCache[t];
      const n = r.getColumn(t);
      return n != null && n.columnDef.getGroupingValue ? (e._groupingValuesCache[t] = n.columnDef.getGroupingValue(e.original), e._groupingValuesCache[t]) : e.getValue(t);
    }, e._groupingValuesCache = {};
  },
  createCell: (e, r, t, n) => {
    e.getIsGrouped = () => r.getIsGrouped() && r.id === t.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && r.getIsGrouped(), e.getIsAggregated = () => {
      var s;
      return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((s = t.subRows) != null && s.length);
    };
  }
};
function Ts(e, r, t) {
  if (!(r != null && r.length) || !t)
    return e;
  const n = e.filter((o) => !r.includes(o.id));
  return t === "remove" ? n : [...r.map((o) => e.find((i) => i.id === o)).filter(Boolean), ...n];
}
const Hs = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: _e("columnOrder", e)
  }),
  createColumn: (e, r) => {
    e.getIndex = U((t) => [et(r, t)], (t) => t.findIndex((n) => n.id === e.id), W(r.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (t) => {
      var n;
      return ((n = et(r, t)[0]) == null ? void 0 : n.id) === e.id;
    }, e.getIsLastColumn = (t) => {
      var n;
      const s = et(r, t);
      return ((n = s[s.length - 1]) == null ? void 0 : n.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (r) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(r), e.resetColumnOrder = (r) => {
      var t;
      e.setColumnOrder(r ? [] : (t = e.initialState.columnOrder) != null ? t : []);
    }, e._getOrderColumnsFn = U(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (r, t, n) => (s) => {
      let o = [];
      if (!(r != null && r.length))
        o = s;
      else {
        const i = [...r], a = [...s];
        for (; a.length && i.length; ) {
          const u = i.shift(), c = a.findIndex((f) => f.id === u);
          c > -1 && o.push(a.splice(c, 1)[0]);
        }
        o = [...o, ...a];
      }
      return Ts(o, t, n);
    }, W(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, wt = () => ({
  left: [],
  right: []
}), Gs = {
  getInitialState: (e) => ({
    columnPinning: wt(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: _e("columnPinning", e)
  }),
  createColumn: (e, r) => {
    e.pin = (t) => {
      const n = e.getLeafColumns().map((s) => s.id).filter(Boolean);
      r.setColumnPinning((s) => {
        var o, i;
        if (t === "right") {
          var a, u;
          return {
            left: ((a = s == null ? void 0 : s.left) != null ? a : []).filter((p) => !(n != null && n.includes(p))),
            right: [...((u = s == null ? void 0 : s.right) != null ? u : []).filter((p) => !(n != null && n.includes(p))), ...n]
          };
        }
        if (t === "left") {
          var c, f;
          return {
            left: [...((c = s == null ? void 0 : s.left) != null ? c : []).filter((p) => !(n != null && n.includes(p))), ...n],
            right: ((f = s == null ? void 0 : s.right) != null ? f : []).filter((p) => !(n != null && n.includes(p)))
          };
        }
        return {
          left: ((o = s == null ? void 0 : s.left) != null ? o : []).filter((p) => !(n != null && n.includes(p))),
          right: ((i = s == null ? void 0 : s.right) != null ? i : []).filter((p) => !(n != null && n.includes(p)))
        };
      });
    }, e.getCanPin = () => e.getLeafColumns().some((n) => {
      var s, o, i;
      return ((s = n.columnDef.enablePinning) != null ? s : !0) && ((o = (i = r.options.enableColumnPinning) != null ? i : r.options.enablePinning) != null ? o : !0);
    }), e.getIsPinned = () => {
      const t = e.getLeafColumns().map((a) => a.id), {
        left: n,
        right: s
      } = r.getState().columnPinning, o = t.some((a) => n == null ? void 0 : n.includes(a)), i = t.some((a) => s == null ? void 0 : s.includes(a));
      return o ? "left" : i ? "right" : !1;
    }, e.getPinnedIndex = () => {
      var t, n;
      const s = e.getIsPinned();
      return s ? (t = (n = r.getState().columnPinning) == null || (n = n[s]) == null ? void 0 : n.indexOf(e.id)) != null ? t : -1 : 0;
    };
  },
  createRow: (e, r) => {
    e.getCenterVisibleCells = U(() => [e._getAllVisibleCells(), r.getState().columnPinning.left, r.getState().columnPinning.right], (t, n, s) => {
      const o = [...n ?? [], ...s ?? []];
      return t.filter((i) => !o.includes(i.column.id));
    }, W(r.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = U(() => [e._getAllVisibleCells(), r.getState().columnPinning.left], (t, n) => (n ?? []).map((o) => t.find((i) => i.column.id === o)).filter(Boolean).map((o) => ({
      ...o,
      position: "left"
    })), W(r.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = U(() => [e._getAllVisibleCells(), r.getState().columnPinning.right], (t, n) => (n ?? []).map((o) => t.find((i) => i.column.id === o)).filter(Boolean).map((o) => ({
      ...o,
      position: "right"
    })), W(r.options, "debugRows", "getRightVisibleCells"));
  },
  createTable: (e) => {
    e.setColumnPinning = (r) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(r), e.resetColumnPinning = (r) => {
      var t, n;
      return e.setColumnPinning(r ? wt() : (t = (n = e.initialState) == null ? void 0 : n.columnPinning) != null ? t : wt());
    }, e.getIsSomeColumnsPinned = (r) => {
      var t;
      const n = e.getState().columnPinning;
      if (!r) {
        var s, o;
        return !!((s = n.left) != null && s.length || (o = n.right) != null && o.length);
      }
      return !!((t = n[r]) != null && t.length);
    }, e.getLeftLeafColumns = U(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (r, t) => (t ?? []).map((n) => r.find((s) => s.id === n)).filter(Boolean), W(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = U(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (r, t) => (t ?? []).map((n) => r.find((s) => s.id === n)).filter(Boolean), W(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = U(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (r, t, n) => {
      const s = [...t ?? [], ...n ?? []];
      return r.filter((o) => !s.includes(o.id));
    }, W(e.options, "debugColumns", "getCenterLeafColumns"));
  }
};
function Bs(e) {
  return e || (typeof document < "u" ? document : null);
}
const nt = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, yt = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), Us = {
  getDefaultColumnDef: () => nt,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: yt(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: _e("columnSizing", e),
    onColumnSizingInfoChange: _e("columnSizingInfo", e)
  }),
  createColumn: (e, r) => {
    e.getSize = () => {
      var t, n, s;
      const o = r.getState().columnSizing[e.id];
      return Math.min(Math.max((t = e.columnDef.minSize) != null ? t : nt.minSize, (n = o ?? e.columnDef.size) != null ? n : nt.size), (s = e.columnDef.maxSize) != null ? s : nt.maxSize);
    }, e.getStart = U((t) => [t, et(r, t), r.getState().columnSizing], (t, n) => n.slice(0, e.getIndex(t)).reduce((s, o) => s + o.getSize(), 0), W(r.options, "debugColumns", "getStart")), e.getAfter = U((t) => [t, et(r, t), r.getState().columnSizing], (t, n) => n.slice(e.getIndex(t) + 1).reduce((s, o) => s + o.getSize(), 0), W(r.options, "debugColumns", "getAfter")), e.resetSize = () => {
      r.setColumnSizing((t) => {
        let {
          [e.id]: n,
          ...s
        } = t;
        return s;
      });
    }, e.getCanResize = () => {
      var t, n;
      return ((t = e.columnDef.enableResizing) != null ? t : !0) && ((n = r.options.enableColumnResizing) != null ? n : !0);
    }, e.getIsResizing = () => r.getState().columnSizingInfo.isResizingColumn === e.id;
  },
  createHeader: (e, r) => {
    e.getSize = () => {
      let t = 0;
      const n = (s) => {
        if (s.subHeaders.length)
          s.subHeaders.forEach(n);
        else {
          var o;
          t += (o = s.column.getSize()) != null ? o : 0;
        }
      };
      return n(e), t;
    }, e.getStart = () => {
      if (e.index > 0) {
        const t = e.headerGroup.headers[e.index - 1];
        return t.getStart() + t.getSize();
      }
      return 0;
    }, e.getResizeHandler = (t) => {
      const n = r.getColumn(e.column.id), s = n == null ? void 0 : n.getCanResize();
      return (o) => {
        if (!n || !s || (o.persist == null || o.persist(), St(o) && o.touches && o.touches.length > 1))
          return;
        const i = e.getSize(), a = e ? e.getLeafHeaders().map((w) => [w.column.id, w.column.getSize()]) : [[n.id, n.getSize()]], u = St(o) ? Math.round(o.touches[0].clientX) : o.clientX, c = {}, f = (w, S) => {
          typeof S == "number" && (r.setColumnSizingInfo((G) => {
            var N, k;
            const P = r.options.columnResizeDirection === "rtl" ? -1 : 1, O = (S - ((N = G == null ? void 0 : G.startOffset) != null ? N : 0)) * P, M = Math.max(O / ((k = G == null ? void 0 : G.startSize) != null ? k : 0), -0.999999);
            return G.columnSizingStart.forEach((V) => {
              let [z, F] = V;
              c[z] = Math.round(Math.max(F + F * M, 0) * 100) / 100;
            }), {
              ...G,
              deltaOffset: O,
              deltaPercentage: M
            };
          }), (r.options.columnResizeMode === "onChange" || w === "end") && r.setColumnSizing((G) => ({
            ...G,
            ...c
          })));
        }, p = (w) => f("move", w), m = (w) => {
          f("end", w), r.setColumnSizingInfo((S) => ({
            ...S,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, d = Bs(t), x = {
          moveHandler: (w) => p(w.clientX),
          upHandler: (w) => {
            d == null || d.removeEventListener("mousemove", x.moveHandler), d == null || d.removeEventListener("mouseup", x.upHandler), m(w.clientX);
          }
        }, h = {
          moveHandler: (w) => (w.cancelable && (w.preventDefault(), w.stopPropagation()), p(w.touches[0].clientX), !1),
          upHandler: (w) => {
            var S;
            d == null || d.removeEventListener("touchmove", h.moveHandler), d == null || d.removeEventListener("touchend", h.upHandler), w.cancelable && (w.preventDefault(), w.stopPropagation()), m((S = w.touches[0]) == null ? void 0 : S.clientX);
          }
        }, b = Ws() ? {
          passive: !1
        } : !1;
        St(o) ? (d == null || d.addEventListener("touchmove", h.moveHandler, b), d == null || d.addEventListener("touchend", h.upHandler, b)) : (d == null || d.addEventListener("mousemove", x.moveHandler, b), d == null || d.addEventListener("mouseup", x.upHandler, b)), r.setColumnSizingInfo((w) => ({
          ...w,
          startOffset: u,
          startSize: i,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart: a,
          isResizingColumn: n.id
        }));
      };
    };
  },
  createTable: (e) => {
    e.setColumnSizing = (r) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(r), e.setColumnSizingInfo = (r) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(r), e.resetColumnSizing = (r) => {
      var t;
      e.setColumnSizing(r ? {} : (t = e.initialState.columnSizing) != null ? t : {});
    }, e.resetHeaderSizeInfo = (r) => {
      var t;
      e.setColumnSizingInfo(r ? yt() : (t = e.initialState.columnSizingInfo) != null ? t : yt());
    }, e.getTotalSize = () => {
      var r, t;
      return (r = (t = e.getHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((n, s) => n + s.getSize(), 0)) != null ? r : 0;
    }, e.getLeftTotalSize = () => {
      var r, t;
      return (r = (t = e.getLeftHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((n, s) => n + s.getSize(), 0)) != null ? r : 0;
    }, e.getCenterTotalSize = () => {
      var r, t;
      return (r = (t = e.getCenterHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((n, s) => n + s.getSize(), 0)) != null ? r : 0;
    }, e.getRightTotalSize = () => {
      var r, t;
      return (r = (t = e.getRightHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((n, s) => n + s.getSize(), 0)) != null ? r : 0;
    };
  }
};
let st = null;
function Ws() {
  if (typeof st == "boolean") return st;
  let e = !1;
  try {
    const r = {
      get passive() {
        return e = !0, !1;
      }
    }, t = () => {
    };
    window.addEventListener("test", t, r), window.removeEventListener("test", t);
  } catch {
    e = !1;
  }
  return st = e, st;
}
function St(e) {
  return e.type === "touchstart";
}
const qs = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: _e("columnVisibility", e)
  }),
  createColumn: (e, r) => {
    e.toggleVisibility = (t) => {
      e.getCanHide() && r.setColumnVisibility((n) => ({
        ...n,
        [e.id]: t ?? !e.getIsVisible()
      }));
    }, e.getIsVisible = () => {
      var t, n;
      const s = e.columns;
      return (t = s.length ? s.some((o) => o.getIsVisible()) : (n = r.getState().columnVisibility) == null ? void 0 : n[e.id]) != null ? t : !0;
    }, e.getCanHide = () => {
      var t, n;
      return ((t = e.columnDef.enableHiding) != null ? t : !0) && ((n = r.options.enableHiding) != null ? n : !0);
    }, e.getToggleVisibilityHandler = () => (t) => {
      e.toggleVisibility == null || e.toggleVisibility(t.target.checked);
    };
  },
  createRow: (e, r) => {
    e._getAllVisibleCells = U(() => [e.getAllCells(), r.getState().columnVisibility], (t) => t.filter((n) => n.column.getIsVisible()), W(r.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = U(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (t, n, s) => [...t, ...n, ...s], W(r.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const r = (t, n) => U(() => [n(), n().filter((s) => s.getIsVisible()).map((s) => s.id).join("_")], (s) => s.filter((o) => o.getIsVisible == null ? void 0 : o.getIsVisible()), W(e.options, "debugColumns", t));
    e.getVisibleFlatColumns = r("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = r("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = r("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = r("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = r("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (t) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(t), e.resetColumnVisibility = (t) => {
      var n;
      e.setColumnVisibility(t ? {} : (n = e.initialState.columnVisibility) != null ? n : {});
    }, e.toggleAllColumnsVisible = (t) => {
      var n;
      t = (n = t) != null ? n : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((s, o) => ({
        ...s,
        [o.id]: t || !(o.getCanHide != null && o.getCanHide())
      }), {}));
    }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((t) => !(t.getIsVisible != null && t.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((t) => t.getIsVisible == null ? void 0 : t.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (t) => {
      var n;
      e.toggleAllColumnsVisible((n = t.target) == null ? void 0 : n.checked);
    };
  }
};
function et(e, r) {
  return r ? r === "center" ? e.getCenterVisibleLeafColumns() : r === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const Ys = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, Ks = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: _e("globalFilter", e),
    globalFilterFn: "auto",
    getColumnCanGlobalFilter: (r) => {
      var t;
      const n = (t = e.getCoreRowModel().flatRows[0]) == null || (t = t._getAllCellsByColumnId()[r.id]) == null ? void 0 : t.getValue();
      return typeof n == "string" || typeof n == "number";
    }
  }),
  createColumn: (e, r) => {
    e.getCanGlobalFilter = () => {
      var t, n, s, o;
      return ((t = e.columnDef.enableGlobalFilter) != null ? t : !0) && ((n = r.options.enableGlobalFilter) != null ? n : !0) && ((s = r.options.enableFilters) != null ? s : !0) && ((o = r.options.getColumnCanGlobalFilter == null ? void 0 : r.options.getColumnCanGlobalFilter(e)) != null ? o : !0) && !!e.accessorFn;
    };
  },
  createTable: (e) => {
    e.getGlobalAutoFilterFn = () => De.includesString, e.getGlobalFilterFn = () => {
      var r, t;
      const {
        globalFilterFn: n
      } = e.options;
      return lt(n) ? n : n === "auto" ? e.getGlobalAutoFilterFn() : (r = (t = e.options.filterFns) == null ? void 0 : t[n]) != null ? r : De[n];
    }, e.setGlobalFilter = (r) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(r);
    }, e.resetGlobalFilter = (r) => {
      e.setGlobalFilter(r ? void 0 : e.initialState.globalFilter);
    };
  }
}, Zs = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: _e("expanded", e),
    paginateExpandedRows: !0
  }),
  createTable: (e) => {
    let r = !1, t = !1;
    e._autoResetExpanded = () => {
      var n, s;
      if (!r) {
        e._queue(() => {
          r = !0;
        });
        return;
      }
      if ((n = (s = e.options.autoResetAll) != null ? s : e.options.autoResetExpanded) != null ? n : !e.options.manualExpanding) {
        if (t) return;
        t = !0, e._queue(() => {
          e.resetExpanded(), t = !1;
        });
      }
    }, e.setExpanded = (n) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(n), e.toggleAllRowsExpanded = (n) => {
      n ?? !e.getIsAllRowsExpanded() ? e.setExpanded(!0) : e.setExpanded({});
    }, e.resetExpanded = (n) => {
      var s, o;
      e.setExpanded(n ? {} : (s = (o = e.initialState) == null ? void 0 : o.expanded) != null ? s : {});
    }, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((n) => n.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (n) => {
      n.persist == null || n.persist(), e.toggleAllRowsExpanded();
    }, e.getIsSomeRowsExpanded = () => {
      const n = e.getState().expanded;
      return n === !0 || Object.values(n).some(Boolean);
    }, e.getIsAllRowsExpanded = () => {
      const n = e.getState().expanded;
      return typeof n == "boolean" ? n === !0 : !(!Object.keys(n).length || e.getRowModel().flatRows.some((s) => !s.getIsExpanded()));
    }, e.getExpandedDepth = () => {
      let n = 0;
      return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((o) => {
        const i = o.split(".");
        n = Math.max(n, i.length);
      }), n;
    }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
  },
  createRow: (e, r) => {
    e.toggleExpanded = (t) => {
      r.setExpanded((n) => {
        var s;
        const o = n === !0 ? !0 : !!(n != null && n[e.id]);
        let i = {};
        if (n === !0 ? Object.keys(r.getRowModel().rowsById).forEach((a) => {
          i[a] = !0;
        }) : i = n, t = (s = t) != null ? s : !o, !o && t)
          return {
            ...i,
            [e.id]: !0
          };
        if (o && !t) {
          const {
            [e.id]: a,
            ...u
          } = i;
          return u;
        }
        return n;
      });
    }, e.getIsExpanded = () => {
      var t;
      const n = r.getState().expanded;
      return !!((t = r.options.getIsRowExpanded == null ? void 0 : r.options.getIsRowExpanded(e)) != null ? t : n === !0 || n != null && n[e.id]);
    }, e.getCanExpand = () => {
      var t, n, s;
      return (t = r.options.getRowCanExpand == null ? void 0 : r.options.getRowCanExpand(e)) != null ? t : ((n = r.options.enableExpanding) != null ? n : !0) && !!((s = e.subRows) != null && s.length);
    }, e.getIsAllParentsExpanded = () => {
      let t = !0, n = e;
      for (; t && n.parentId; )
        n = r.getRow(n.parentId, !0), t = n.getIsExpanded();
      return t;
    }, e.getToggleExpandedHandler = () => {
      const t = e.getCanExpand();
      return () => {
        t && e.toggleExpanded();
      };
    };
  }
}, Mt = 0, kt = 10, Ct = () => ({
  pageIndex: Mt,
  pageSize: kt
}), Js = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...Ct(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: _e("pagination", e)
  }),
  createTable: (e) => {
    let r = !1, t = !1;
    e._autoResetPageIndex = () => {
      var n, s;
      if (!r) {
        e._queue(() => {
          r = !0;
        });
        return;
      }
      if ((n = (s = e.options.autoResetAll) != null ? s : e.options.autoResetPageIndex) != null ? n : !e.options.manualPagination) {
        if (t) return;
        t = !0, e._queue(() => {
          e.resetPageIndex(), t = !1;
        });
      }
    }, e.setPagination = (n) => {
      const s = (o) => Te(n, o);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(s);
    }, e.resetPagination = (n) => {
      var s;
      e.setPagination(n ? Ct() : (s = e.initialState.pagination) != null ? s : Ct());
    }, e.setPageIndex = (n) => {
      e.setPagination((s) => {
        let o = Te(n, s.pageIndex);
        const i = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return o = Math.max(0, Math.min(o, i)), {
          ...s,
          pageIndex: o
        };
      });
    }, e.resetPageIndex = (n) => {
      var s, o;
      e.setPageIndex(n ? Mt : (s = (o = e.initialState) == null || (o = o.pagination) == null ? void 0 : o.pageIndex) != null ? s : Mt);
    }, e.resetPageSize = (n) => {
      var s, o;
      e.setPageSize(n ? kt : (s = (o = e.initialState) == null || (o = o.pagination) == null ? void 0 : o.pageSize) != null ? s : kt);
    }, e.setPageSize = (n) => {
      e.setPagination((s) => {
        const o = Math.max(1, Te(n, s.pageSize)), i = s.pageSize * s.pageIndex, a = Math.floor(i / o);
        return {
          ...s,
          pageIndex: a,
          pageSize: o
        };
      });
    }, e.setPageCount = (n) => e.setPagination((s) => {
      var o;
      let i = Te(n, (o = e.options.pageCount) != null ? o : -1);
      return typeof i == "number" && (i = Math.max(-1, i)), {
        ...s,
        pageCount: i
      };
    }), e.getPageOptions = U(() => [e.getPageCount()], (n) => {
      let s = [];
      return n && n > 0 && (s = [...new Array(n)].fill(null).map((o, i) => i)), s;
    }, W(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
      const {
        pageIndex: n
      } = e.getState().pagination, s = e.getPageCount();
      return s === -1 ? !0 : s === 0 ? !1 : n < s - 1;
    }, e.previousPage = () => e.setPageIndex((n) => n - 1), e.nextPage = () => e.setPageIndex((n) => n + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
      var n;
      return (n = e.options.pageCount) != null ? n : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
    }, e.getRowCount = () => {
      var n;
      return (n = e.options.rowCount) != null ? n : e.getPrePaginationRowModel().rows.length;
    };
  }
}, Rt = () => ({
  top: [],
  bottom: []
}), Xs = {
  getInitialState: (e) => ({
    rowPinning: Rt(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: _e("rowPinning", e)
  }),
  createRow: (e, r) => {
    e.pin = (t, n, s) => {
      const o = n ? e.getLeafRows().map((u) => {
        let {
          id: c
        } = u;
        return c;
      }) : [], i = s ? e.getParentRows().map((u) => {
        let {
          id: c
        } = u;
        return c;
      }) : [], a = /* @__PURE__ */ new Set([...i, e.id, ...o]);
      r.setRowPinning((u) => {
        var c, f;
        if (t === "bottom") {
          var p, m;
          return {
            top: ((p = u == null ? void 0 : u.top) != null ? p : []).filter((h) => !(a != null && a.has(h))),
            bottom: [...((m = u == null ? void 0 : u.bottom) != null ? m : []).filter((h) => !(a != null && a.has(h))), ...Array.from(a)]
          };
        }
        if (t === "top") {
          var d, x;
          return {
            top: [...((d = u == null ? void 0 : u.top) != null ? d : []).filter((h) => !(a != null && a.has(h))), ...Array.from(a)],
            bottom: ((x = u == null ? void 0 : u.bottom) != null ? x : []).filter((h) => !(a != null && a.has(h)))
          };
        }
        return {
          top: ((c = u == null ? void 0 : u.top) != null ? c : []).filter((h) => !(a != null && a.has(h))),
          bottom: ((f = u == null ? void 0 : u.bottom) != null ? f : []).filter((h) => !(a != null && a.has(h)))
        };
      });
    }, e.getCanPin = () => {
      var t;
      const {
        enableRowPinning: n,
        enablePinning: s
      } = r.options;
      return typeof n == "function" ? n(e) : (t = n ?? s) != null ? t : !0;
    }, e.getIsPinned = () => {
      const t = [e.id], {
        top: n,
        bottom: s
      } = r.getState().rowPinning, o = t.some((a) => n == null ? void 0 : n.includes(a)), i = t.some((a) => s == null ? void 0 : s.includes(a));
      return o ? "top" : i ? "bottom" : !1;
    }, e.getPinnedIndex = () => {
      var t, n;
      const s = e.getIsPinned();
      if (!s) return -1;
      const o = (t = s === "top" ? r.getTopRows() : r.getBottomRows()) == null ? void 0 : t.map((i) => {
        let {
          id: a
        } = i;
        return a;
      });
      return (n = o == null ? void 0 : o.indexOf(e.id)) != null ? n : -1;
    };
  },
  createTable: (e) => {
    e.setRowPinning = (r) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(r), e.resetRowPinning = (r) => {
      var t, n;
      return e.setRowPinning(r ? Rt() : (t = (n = e.initialState) == null ? void 0 : n.rowPinning) != null ? t : Rt());
    }, e.getIsSomeRowsPinned = (r) => {
      var t;
      const n = e.getState().rowPinning;
      if (!r) {
        var s, o;
        return !!((s = n.top) != null && s.length || (o = n.bottom) != null && o.length);
      }
      return !!((t = n[r]) != null && t.length);
    }, e._getPinnedRows = (r, t, n) => {
      var s;
      return ((s = e.options.keepPinnedRows) == null || s ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (t ?? []).map((i) => {
          const a = e.getRow(i, !0);
          return a.getIsAllParentsExpanded() ? a : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (t ?? []).map((i) => r.find((a) => a.id === i))
      )).filter(Boolean).map((i) => ({
        ...i,
        position: n
      }));
    }, e.getTopRows = U(() => [e.getRowModel().rows, e.getState().rowPinning.top], (r, t) => e._getPinnedRows(r, t, "top"), W(e.options, "debugRows", "getTopRows")), e.getBottomRows = U(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (r, t) => e._getPinnedRows(r, t, "bottom"), W(e.options, "debugRows", "getBottomRows")), e.getCenterRows = U(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (r, t, n) => {
      const s = /* @__PURE__ */ new Set([...t ?? [], ...n ?? []]);
      return r.filter((o) => !s.has(o.id));
    }, W(e.options, "debugRows", "getCenterRows"));
  }
}, Qs = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: _e("rowSelection", e),
    enableRowSelection: !0,
    enableMultiRowSelection: !0,
    enableSubRowSelection: !0
    // enableGroupingRowSelection: false,
    // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
    // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
  }),
  createTable: (e) => {
    e.setRowSelection = (r) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(r), e.resetRowSelection = (r) => {
      var t;
      return e.setRowSelection(r ? {} : (t = e.initialState.rowSelection) != null ? t : {});
    }, e.toggleAllRowsSelected = (r) => {
      e.setRowSelection((t) => {
        r = typeof r < "u" ? r : !e.getIsAllRowsSelected();
        const n = {
          ...t
        }, s = e.getPreGroupedRowModel().flatRows;
        return r ? s.forEach((o) => {
          o.getCanSelect() && (n[o.id] = !0);
        }) : s.forEach((o) => {
          delete n[o.id];
        }), n;
      });
    }, e.toggleAllPageRowsSelected = (r) => e.setRowSelection((t) => {
      const n = typeof r < "u" ? r : !e.getIsAllPageRowsSelected(), s = {
        ...t
      };
      return e.getRowModel().rows.forEach((o) => {
        It(s, o.id, n, !0, e);
      }), s;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = U(() => [e.getState().rowSelection, e.getCoreRowModel()], (r, t) => Object.keys(r).length ? jt(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, W(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = U(() => [e.getState().rowSelection, e.getFilteredRowModel()], (r, t) => Object.keys(r).length ? jt(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, W(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = U(() => [e.getState().rowSelection, e.getSortedRowModel()], (r, t) => Object.keys(r).length ? jt(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, W(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
      const r = e.getFilteredRowModel().flatRows, {
        rowSelection: t
      } = e.getState();
      let n = !!(r.length && Object.keys(t).length);
      return n && r.some((s) => s.getCanSelect() && !t[s.id]) && (n = !1), n;
    }, e.getIsAllPageRowsSelected = () => {
      const r = e.getPaginationRowModel().flatRows.filter((s) => s.getCanSelect()), {
        rowSelection: t
      } = e.getState();
      let n = !!r.length;
      return n && r.some((s) => !t[s.id]) && (n = !1), n;
    }, e.getIsSomeRowsSelected = () => {
      var r;
      const t = Object.keys((r = e.getState().rowSelection) != null ? r : {}).length;
      return t > 0 && t < e.getFilteredRowModel().flatRows.length;
    }, e.getIsSomePageRowsSelected = () => {
      const r = e.getPaginationRowModel().flatRows;
      return e.getIsAllPageRowsSelected() ? !1 : r.filter((t) => t.getCanSelect()).some((t) => t.getIsSelected() || t.getIsSomeSelected());
    }, e.getToggleAllRowsSelectedHandler = () => (r) => {
      e.toggleAllRowsSelected(r.target.checked);
    }, e.getToggleAllPageRowsSelectedHandler = () => (r) => {
      e.toggleAllPageRowsSelected(r.target.checked);
    };
  },
  createRow: (e, r) => {
    e.toggleSelected = (t, n) => {
      const s = e.getIsSelected();
      r.setRowSelection((o) => {
        var i;
        if (t = typeof t < "u" ? t : !s, e.getCanSelect() && s === t)
          return o;
        const a = {
          ...o
        };
        return It(a, e.id, t, (i = n == null ? void 0 : n.selectChildren) != null ? i : !0, r), a;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: t
      } = r.getState();
      return At(e, t);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: t
      } = r.getState();
      return Ft(e, t) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: t
      } = r.getState();
      return Ft(e, t) === "all";
    }, e.getCanSelect = () => {
      var t;
      return typeof r.options.enableRowSelection == "function" ? r.options.enableRowSelection(e) : (t = r.options.enableRowSelection) != null ? t : !0;
    }, e.getCanSelectSubRows = () => {
      var t;
      return typeof r.options.enableSubRowSelection == "function" ? r.options.enableSubRowSelection(e) : (t = r.options.enableSubRowSelection) != null ? t : !0;
    }, e.getCanMultiSelect = () => {
      var t;
      return typeof r.options.enableMultiRowSelection == "function" ? r.options.enableMultiRowSelection(e) : (t = r.options.enableMultiRowSelection) != null ? t : !0;
    }, e.getToggleSelectedHandler = () => {
      const t = e.getCanSelect();
      return (n) => {
        var s;
        t && e.toggleSelected((s = n.target) == null ? void 0 : s.checked);
      };
    };
  }
}, It = (e, r, t, n, s) => {
  var o;
  const i = s.getRow(r, !0);
  t ? (i.getCanMultiSelect() || Object.keys(e).forEach((a) => delete e[a]), i.getCanSelect() && (e[r] = !0)) : delete e[r], n && (o = i.subRows) != null && o.length && i.getCanSelectSubRows() && i.subRows.forEach((a) => It(e, a.id, t, n, s));
};
function jt(e, r) {
  const t = e.getState().rowSelection, n = [], s = {}, o = function(i, a) {
    return i.map((u) => {
      var c;
      const f = At(u, t);
      if (f && (n.push(u), s[u.id] = u), (c = u.subRows) != null && c.length && (u = {
        ...u,
        subRows: o(u.subRows)
      }), f)
        return u;
    }).filter(Boolean);
  };
  return {
    rows: o(r.rows),
    flatRows: n,
    rowsById: s
  };
}
function At(e, r) {
  var t;
  return (t = r[e.id]) != null ? t : !1;
}
function Ft(e, r, t) {
  var n;
  if (!((n = e.subRows) != null && n.length)) return !1;
  let s = !0, o = !1;
  return e.subRows.forEach((i) => {
    if (!(o && !s) && (i.getCanSelect() && (At(i, r) ? o = !0 : s = !1), i.subRows && i.subRows.length)) {
      const a = Ft(i, r);
      a === "all" ? o = !0 : (a === "some" && (o = !0), s = !1);
    }
  }), s ? "all" : o ? "some" : !1;
}
const Pt = /([0-9]+)/gm, eo = (e, r, t) => kr(He(e.getValue(t)).toLowerCase(), He(r.getValue(t)).toLowerCase()), to = (e, r, t) => kr(He(e.getValue(t)), He(r.getValue(t))), ro = (e, r, t) => Ot(He(e.getValue(t)).toLowerCase(), He(r.getValue(t)).toLowerCase()), no = (e, r, t) => Ot(He(e.getValue(t)), He(r.getValue(t))), so = (e, r, t) => {
  const n = e.getValue(t), s = r.getValue(t);
  return n > s ? 1 : n < s ? -1 : 0;
}, oo = (e, r, t) => Ot(e.getValue(t), r.getValue(t));
function Ot(e, r) {
  return e === r ? 0 : e > r ? 1 : -1;
}
function He(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function kr(e, r) {
  const t = e.split(Pt).filter(Boolean), n = r.split(Pt).filter(Boolean);
  for (; t.length && n.length; ) {
    const s = t.shift(), o = n.shift(), i = parseInt(s, 10), a = parseInt(o, 10), u = [i, a].sort();
    if (isNaN(u[0])) {
      if (s > o)
        return 1;
      if (o > s)
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
  return t.length - n.length;
}
const Qe = {
  alphanumeric: eo,
  alphanumericCaseSensitive: to,
  text: ro,
  textCaseSensitive: no,
  datetime: so,
  basic: oo
}, io = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: _e("sorting", e),
    isMultiSortEvent: (r) => r.shiftKey
  }),
  createColumn: (e, r) => {
    e.getAutoSortingFn = () => {
      const t = r.getFilteredRowModel().flatRows.slice(10);
      let n = !1;
      for (const s of t) {
        const o = s == null ? void 0 : s.getValue(e.id);
        if (Object.prototype.toString.call(o) === "[object Date]")
          return Qe.datetime;
        if (typeof o == "string" && (n = !0, o.split(Pt).length > 1))
          return Qe.alphanumeric;
      }
      return n ? Qe.text : Qe.basic;
    }, e.getAutoSortDir = () => {
      const t = r.getFilteredRowModel().flatRows[0];
      return typeof (t == null ? void 0 : t.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var t, n;
      if (!e)
        throw new Error();
      return lt(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (t = (n = r.options.sortingFns) == null ? void 0 : n[e.columnDef.sortingFn]) != null ? t : Qe[e.columnDef.sortingFn];
    }, e.toggleSorting = (t, n) => {
      const s = e.getNextSortingOrder(), o = typeof t < "u" && t !== null;
      r.setSorting((i) => {
        const a = i == null ? void 0 : i.find((d) => d.id === e.id), u = i == null ? void 0 : i.findIndex((d) => d.id === e.id);
        let c = [], f, p = o ? t : s === "desc";
        if (i != null && i.length && e.getCanMultiSort() && n ? a ? f = "toggle" : f = "add" : i != null && i.length && u !== i.length - 1 ? f = "replace" : a ? f = "toggle" : f = "replace", f === "toggle" && (o || s || (f = "remove")), f === "add") {
          var m;
          c = [...i, {
            id: e.id,
            desc: p
          }], c.splice(0, c.length - ((m = r.options.maxMultiSortColCount) != null ? m : Number.MAX_SAFE_INTEGER));
        } else f === "toggle" ? c = i.map((d) => d.id === e.id ? {
          ...d,
          desc: p
        } : d) : f === "remove" ? c = i.filter((d) => d.id !== e.id) : c = [{
          id: e.id,
          desc: p
        }];
        return c;
      });
    }, e.getFirstSortDir = () => {
      var t, n;
      return ((t = (n = e.columnDef.sortDescFirst) != null ? n : r.options.sortDescFirst) != null ? t : e.getAutoSortDir() === "desc") ? "desc" : "asc";
    }, e.getNextSortingOrder = (t) => {
      var n, s;
      const o = e.getFirstSortDir(), i = e.getIsSorted();
      return i ? i !== o && ((n = r.options.enableSortingRemoval) == null || n) && // If enableSortRemove, enable in general
      (!(t && (s = r.options.enableMultiRemove) != null) || s) ? !1 : i === "desc" ? "asc" : "desc" : o;
    }, e.getCanSort = () => {
      var t, n;
      return ((t = e.columnDef.enableSorting) != null ? t : !0) && ((n = r.options.enableSorting) != null ? n : !0) && !!e.accessorFn;
    }, e.getCanMultiSort = () => {
      var t, n;
      return (t = (n = e.columnDef.enableMultiSort) != null ? n : r.options.enableMultiSort) != null ? t : !!e.accessorFn;
    }, e.getIsSorted = () => {
      var t;
      const n = (t = r.getState().sorting) == null ? void 0 : t.find((s) => s.id === e.id);
      return n ? n.desc ? "desc" : "asc" : !1;
    }, e.getSortIndex = () => {
      var t, n;
      return (t = (n = r.getState().sorting) == null ? void 0 : n.findIndex((s) => s.id === e.id)) != null ? t : -1;
    }, e.clearSorting = () => {
      r.setSorting((t) => t != null && t.length ? t.filter((n) => n.id !== e.id) : []);
    }, e.getToggleSortingHandler = () => {
      const t = e.getCanSort();
      return (n) => {
        t && (n.persist == null || n.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? r.options.isMultiSortEvent == null ? void 0 : r.options.isMultiSortEvent(n) : !1));
      };
    };
  },
  createTable: (e) => {
    e.setSorting = (r) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(r), e.resetSorting = (r) => {
      var t, n;
      e.setSorting(r ? [] : (t = (n = e.initialState) == null ? void 0 : n.sorting) != null ? t : []);
    }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
  }
}, lo = [
  Ns,
  qs,
  Hs,
  Gs,
  Es,
  Ms,
  Ys,
  //depends on ColumnFaceting
  Ks,
  //depends on ColumnFiltering
  io,
  Ls,
  //depends on RowSorting
  Zs,
  Js,
  Xs,
  Qs,
  Us
];
function ao(e) {
  var r, t;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const n = [...lo, ...(r = e._features) != null ? r : []];
  let s = {
    _features: n
  };
  const o = s._features.reduce((m, d) => Object.assign(m, d.getDefaultOptions == null ? void 0 : d.getDefaultOptions(s)), {}), i = (m) => s.options.mergeOptions ? s.options.mergeOptions(o, m) : {
    ...o,
    ...m
  };
  let u = {
    ...{},
    ...(t = e.initialState) != null ? t : {}
  };
  s._features.forEach((m) => {
    var d;
    u = (d = m.getInitialState == null ? void 0 : m.getInitialState(u)) != null ? d : u;
  });
  const c = [];
  let f = !1;
  const p = {
    _features: n,
    options: {
      ...o,
      ...e
    },
    initialState: u,
    _queue: (m) => {
      c.push(m), f || (f = !0, Promise.resolve().then(() => {
        for (; c.length; )
          c.shift()();
        f = !1;
      }).catch((d) => setTimeout(() => {
        throw d;
      })));
    },
    reset: () => {
      s.setState(s.initialState);
    },
    setOptions: (m) => {
      const d = Te(m, s.options);
      s.options = i(d);
    },
    getState: () => s.options.state,
    setState: (m) => {
      s.options.onStateChange == null || s.options.onStateChange(m);
    },
    _getRowId: (m, d, x) => {
      var h;
      return (h = s.options.getRowId == null ? void 0 : s.options.getRowId(m, d, x)) != null ? h : `${x ? [x.id, d].join(".") : d}`;
    },
    getCoreRowModel: () => (s._getCoreRowModel || (s._getCoreRowModel = s.options.getCoreRowModel(s)), s._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => s.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (m, d) => {
      let x = (d ? s.getPrePaginationRowModel() : s.getRowModel()).rowsById[m];
      if (!x && (x = s.getCoreRowModel().rowsById[m], !x))
        throw process.env.NODE_ENV !== "production" ? new Error(`getRow could not find row with ID: ${m}`) : new Error();
      return x;
    },
    _getDefaultColumnDef: U(() => [s.options.defaultColumn], (m) => {
      var d;
      return m = (d = m) != null ? d : {}, {
        header: (x) => {
          const h = x.header.column.columnDef;
          return h.accessorKey ? h.accessorKey : h.accessorFn ? h.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (x) => {
          var h, b;
          return (h = (b = x.renderValue()) == null || b.toString == null ? void 0 : b.toString()) != null ? h : null;
        },
        ...s._features.reduce((x, h) => Object.assign(x, h.getDefaultColumnDef == null ? void 0 : h.getDefaultColumnDef()), {}),
        ...m
      };
    }, W(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => s.options.columns,
    getAllColumns: U(() => [s._getColumnDefs()], (m) => {
      const d = function(x, h, b) {
        return b === void 0 && (b = 0), x.map((w) => {
          const S = _s(s, w, b, h), G = w;
          return S.columns = G.columns ? d(G.columns, S, b + 1) : [], S;
        });
      };
      return d(m);
    }, W(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: U(() => [s.getAllColumns()], (m) => m.flatMap((d) => d.getFlatColumns()), W(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: U(() => [s.getAllFlatColumns()], (m) => m.reduce((d, x) => (d[x.id] = x, d), {}), W(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: U(() => [s.getAllColumns(), s._getOrderColumnsFn()], (m, d) => {
      let x = m.flatMap((h) => h.getLeafColumns());
      return d(x);
    }, W(e, "debugColumns", "getAllLeafColumns")),
    getColumn: (m) => {
      const d = s._getAllFlatColumnsById()[m];
      return process.env.NODE_ENV !== "production" && !d && console.error(`[Table] Column with id '${m}' does not exist.`), d;
    }
  };
  Object.assign(s, p);
  for (let m = 0; m < s._features.length; m++) {
    const d = s._features[m];
    d == null || d.createTable == null || d.createTable(s);
  }
  return s;
}
function uo() {
  return (e) => U(() => [e.options.data], (r) => {
    const t = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, n = function(s, o, i) {
      o === void 0 && (o = 0);
      const a = [];
      for (let c = 0; c < s.length; c++) {
        const f = $s(e, e._getRowId(s[c], c, i), s[c], c, o, void 0, i == null ? void 0 : i.id);
        if (t.flatRows.push(f), t.rowsById[f.id] = f, a.push(f), e.options.getSubRows) {
          var u;
          f.originalSubRows = e.options.getSubRows(s[c], c), (u = f.originalSubRows) != null && u.length && (f.subRows = n(f.originalSubRows, o + 1, f));
        }
      }
      return a;
    };
    return t.rows = n(r), t;
  }, W(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function co(e) {
  const r = [], t = (n) => {
    var s;
    r.push(n), (s = n.subRows) != null && s.length && n.getIsExpanded() && n.subRows.forEach(t);
  };
  return e.rows.forEach(t), {
    rows: r,
    flatRows: e.flatRows,
    rowsById: e.rowsById
  };
}
function go(e) {
  return (r) => U(() => [r.getState().pagination, r.getPrePaginationRowModel(), r.options.paginateExpandedRows ? void 0 : r.getState().expanded], (t, n) => {
    if (!n.rows.length)
      return n;
    const {
      pageSize: s,
      pageIndex: o
    } = t;
    let {
      rows: i,
      flatRows: a,
      rowsById: u
    } = n;
    const c = s * o, f = c + s;
    i = i.slice(c, f);
    let p;
    r.options.paginateExpandedRows ? p = {
      rows: i,
      flatRows: a,
      rowsById: u
    } : p = co({
      rows: i,
      flatRows: a,
      rowsById: u
    }), p.flatRows = [];
    const m = (d) => {
      p.flatRows.push(d), d.subRows.length && d.subRows.forEach(m);
    };
    return p.rows.forEach(m), p;
  }, W(r.options, "debugTable", "getPaginationRowModel"));
}
function fo() {
  return (e) => U(() => [e.getState().sorting, e.getPreSortedRowModel()], (r, t) => {
    if (!t.rows.length || !(r != null && r.length))
      return t;
    const n = e.getState().sorting, s = [], o = n.filter((u) => {
      var c;
      return (c = e.getColumn(u.id)) == null ? void 0 : c.getCanSort();
    }), i = {};
    o.forEach((u) => {
      const c = e.getColumn(u.id);
      c && (i[u.id] = {
        sortUndefined: c.columnDef.sortUndefined,
        invertSorting: c.columnDef.invertSorting,
        sortingFn: c.getSortingFn()
      });
    });
    const a = (u) => {
      const c = u.map((f) => ({
        ...f
      }));
      return c.sort((f, p) => {
        for (let d = 0; d < o.length; d += 1) {
          var m;
          const x = o[d], h = i[x.id], b = h.sortUndefined, w = (m = x == null ? void 0 : x.desc) != null ? m : !1;
          let S = 0;
          if (b) {
            const G = f.getValue(x.id), N = p.getValue(x.id), k = G === void 0, P = N === void 0;
            if (k || P) {
              if (b === "first") return k ? -1 : 1;
              if (b === "last") return k ? 1 : -1;
              S = k && P ? 0 : k ? b : -b;
            }
          }
          if (S === 0 && (S = h.sortingFn(f, p, x.id)), S !== 0)
            return w && (S *= -1), h.invertSorting && (S *= -1), S;
        }
        return f.index - p.index;
      }), c.forEach((f) => {
        var p;
        s.push(f), (p = f.subRows) != null && p.length && (f.subRows = a(f.subRows));
      }), c;
    };
    return {
      rows: a(t.rows),
      flatRows: s,
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
function lr(e, r) {
  return e ? mo(e) ? /* @__PURE__ */ Nt.createElement(e, r) : e : null;
}
function mo(e) {
  return po(e) || typeof e == "function" || ho(e);
}
function po(e) {
  return typeof e == "function" && (() => {
    const r = Object.getPrototypeOf(e);
    return r.prototype && r.prototype.isReactComponent;
  })();
}
function ho(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function xo(e) {
  const r = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [t] = Nt.useState(() => ({
    current: ao(r)
  })), [n, s] = Nt.useState(() => t.current.initialState);
  return t.current.setOptions((o) => ({
    ...o,
    ...e,
    state: {
      ...n,
      ...e.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (i) => {
      s(i), e.onStateChange == null || e.onStateChange(i);
    }
  })), t.current;
}
const Ir = (e) => {
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
    header: r.header[e],
    row: r.row[e],
    border: r.border[e],
    stripe: r.stripe[e]
  };
}, vo = ({ schema: e, variant: r = "primary" }) => {
  const t = [{ name: "no", label: "No.", accessorKey: "no", type: "number" }, ...e], n = Ir(r);
  return /* @__PURE__ */ l.jsx("div", { className: "bg-white rounded-md", children: /* @__PURE__ */ l.jsx("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ l.jsxs("table", { className: "w-full border-spacing-0 border-separate", children: [
    /* @__PURE__ */ l.jsx("thead", { className: $("border-2 sticky top-0 z-10 rounded-t-md", n.border), children: /* @__PURE__ */ l.jsx("tr", { children: t.map((s, o) => /* @__PURE__ */ l.jsx(
      "th",
      {
        className: $(
          "text-sm text-wrap border-y p-4 text-left",
          n.header,
          {
            "rounded-tl-md": o === 0,
            "rounded-tr-md": o === t.length - 1
          }
        ),
        children: s.label
      },
      o
    )) }) }),
    /* @__PURE__ */ l.jsx("tbody", { className: "max-h-[50vh]", children: [...Array(5)].map((s, o) => /* @__PURE__ */ l.jsx(
      "tr",
      {
        className: $("p-3", {
          [n.stripe]: o % 2 !== 0,
          "bg-white": o % 2 === 0
        }),
        children: t.map((i, a) => /* @__PURE__ */ l.jsx(
          "td",
          {
            className: "text-left text-nowrap text-sm p-4",
            children: /* @__PURE__ */ l.jsx(us, { className: "h-10 w-full rounded-md" })
          },
          `${o}-${a}`
        ))
      },
      o
    )) })
  ] }) }) });
}, Wo = ({
  schema: e,
  data: r,
  className: t,
  headerClassName: n,
  rowClassName: s,
  cellClassName: o,
  emptyState: i,
  isLoading: a,
  loadingState: u,
  showIndex: c = !1,
  onPageChange: f,
  onPageSizeChange: p,
  onSortChange: m,
  onRowClick: d,
  showPagination: x = !1,
  variant: h = "primary",
  meta: b = {
    current_page: 1,
    total_page: 1,
    total_data: 0,
    limit_number: 10
  }
}) => {
  const [w, S] = ie(() => {
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
        var z;
        return (z = M.render) == null ? void 0 : z.call(M, V.original[M.accessorKey], V.original, V.index);
      } : ({ row: V }) => V.original[M.accessorKey] || "-",
      meta: {
        align: M.align || "left"
      }
    }));
    return c ? [{
      accessorKey: "no",
      header: "No.",
      enableSorting: !1,
      cell: ({ row: M }) => (b.current_page - 1) * b.limit_number + M.index + 1,
      meta: {
        align: "left"
      }
    }, ...O] : O;
  }, [e, c, b]), N = xo({
    data: r,
    columns: G,
    state: {
      sorting: w
    },
    onSortingChange: (O) => {
      const M = typeof O == "function" ? O(w) : O;
      S(M), M.length > 0 ? m == null || m(M[0].desc ? "desc" : "asc", M[0].id) : m == null || m("", "");
    },
    getCoreRowModel: uo(),
    getSortedRowModel: fo(),
    getPaginationRowModel: go(),
    manualPagination: !0,
    pageCount: b.total_page
  }), k = Ir(h);
  if (a)
    return u || /* @__PURE__ */ l.jsx(vo, { schema: e, variant: h });
  const P = (O, M, V) => {
    const z = O.target;
    z.tagName === "BUTTON" || z.tagName === "A" || z.tagName === "INPUT" || z.tagName === "SELECT" || z.closest("button") !== null || z.closest("a") !== null || z.closest("input") !== null || z.closest("select") !== null || d == null || d(M, V);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "bg-white rounded-md", children: [
    /* @__PURE__ */ l.jsx("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ l.jsxs("table", { className: $("w-full border-spacing-0 border-separate", t), children: [
      /* @__PURE__ */ l.jsx("thead", { className: $("border-2 sticky top-0 z-10 rounded-t-md", k.border), children: N.getHeaderGroups().map((O) => /* @__PURE__ */ l.jsx("tr", { children: O.headers.map((M, V) => {
        var z, F, A;
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
                "text-left": ((z = M.column.columnDef.meta) == null ? void 0 : z.align) === "left",
                "text-center": ((F = M.column.columnDef.meta) == null ? void 0 : F.align) === "center",
                "text-right": ((A = M.column.columnDef.meta) == null ? void 0 : A.align) === "right"
              },
              n
            ),
            onClick: M.column.getCanSort() ? M.column.getToggleSortingHandler() : void 0,
            children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ l.jsx("span", { className: $({
                "font-semibold": V === 0
              }), children: lr(M.column.columnDef.header, M.getContext()) }),
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
              "cursor-pointer": d
            },
            s
          ),
          onClick: (V) => P(V, O.original, M),
          children: O.getVisibleCells().map((V) => {
            var z, F, A;
            return /* @__PURE__ */ l.jsx(
              "td",
              {
                className: $(
                  "px-4 py-3 text-sm text-gray-900",
                  {
                    "text-left": ((z = V.column.columnDef.meta) == null ? void 0 : z.align) === "left",
                    "text-center": ((F = V.column.columnDef.meta) == null ? void 0 : F.align) === "center",
                    "text-right": ((A = V.column.columnDef.meta) == null ? void 0 : A.align) === "right"
                  },
                  o
                ),
                children: lr(V.column.columnDef.cell, V.getContext())
              },
              V.id
            );
          })
        },
        O.id
      )) })
    ] }) }),
    !!r.length && x && /* @__PURE__ */ l.jsx("div", { className: "p-4 bg-white rounded-b-md", children: /* @__PURE__ */ l.jsx(
      ls,
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
}, bo = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}, Fr = ve(
  ({
    className: e,
    variant: r = "default",
    rounded: t = "lg",
    title: n,
    description: s,
    onClose: o,
    icon: i,
    showIcon: a = !0,
    showClose: u = !0,
    ...c
  }, f) => {
    const m = i || (a ? {
      default: "mdi:information",
      success: "mdi:check-circle",
      error: "mdi:alert-circle",
      warning: "mdi:alert",
      info: "mdi:information"
    }[r] : void 0), d = n || s;
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: f,
        className: $(
          "flex",
          s ? "items-start gap-3 p-4" : "items-center gap-2 py-2.5 px-3",
          "border border-gray-200",
          bo[t],
          {
            "bg-white": r === "default",
            "bg-success-50": r === "success",
            "bg-danger-50": r === "error",
            "bg-warning-50": r === "warning",
            "bg-info-50": r === "info"
          },
          e
        ),
        ...c,
        children: [
          m && /* @__PURE__ */ l.jsx(
            re,
            {
              icon: m,
              className: $(
                "flex-shrink-0",
                s ? "h-5 w-5 mt-0.5" : "h-4 w-4",
                {
                  "text-gray-500": r === "default",
                  "text-success-500": r === "success",
                  "text-danger-500": r === "error",
                  "text-warning-500": r === "warning",
                  "text-info-500": r === "info"
                }
              )
            }
          ),
          /* @__PURE__ */ l.jsxs("div", { className: "flex-1", children: [
            n && /* @__PURE__ */ l.jsx(
              "h3",
              {
                className: $("text-sm font-medium leading-5", {
                  "text-gray-900": r === "default",
                  "text-success-900": r === "success",
                  "text-danger-900": r === "error",
                  "text-warning-900": r === "warning",
                  "text-info-900": r === "info"
                }),
                children: n
              }
            ),
            s && /* @__PURE__ */ l.jsx(
              "p",
              {
                className: $(n ? "mt-1" : "", "text-sm leading-5", {
                  "text-gray-500": r === "default",
                  "text-success-700": r === "success",
                  "text-danger-700": r === "error",
                  "text-warning-700": r === "warning",
                  "text-info-700": r === "info"
                }),
                children: s
              }
            ),
            !d && /* @__PURE__ */ l.jsx("span", { className: "text-sm leading-5", children: c.children })
          ] }),
          u && o && /* @__PURE__ */ l.jsx(
            Re,
            {
              variant: "ghost",
              size: "sm",
              onClick: o,
              className: $(
                "flex-shrink-0 !p-1",
                s ? "ml-4" : "ml-2",
                {
                  "text-gray-400 hover:text-gray-500": r === "default",
                  "text-success-400 hover:text-success-500": r === "success",
                  "text-danger-400 hover:text-danger-500": r === "error",
                  "text-warning-400 hover:text-warning-500": r === "warning",
                  "text-info-400 hover:text-info-500": r === "info"
                }
              ),
              children: /* @__PURE__ */ l.jsx(re, { icon: "mdi:close", className: $(s ? "h-5 w-5" : "h-4 w-4") })
            }
          )
        ]
      }
    );
  }
);
Fr.displayName = "Toast";
const ot = sn(void 0), wo = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, qo = ({ children: e }) => {
  const [r, t] = ie([]), [n, s] = ie(!1);
  we(() => {
    s(!0);
  }, []);
  const o = Ve((c) => {
    t((f) => f.filter((p) => p.id !== c));
  }, []), i = Ve((c) => {
    const f = Math.random().toString(36).substr(2, 9), p = c.position || "top-right", m = c.duration || 5e3, d = {
      ...c,
      id: f,
      position: p
    };
    return t((x) => [...x, d]), m > 0 && setTimeout(() => {
      o(f);
    }, m), f;
  }, [o]), a = r.reduce((c, f) => (c[f.position] || (c[f.position] = []), c[f.position].push(f), c), {
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    "bottom-right": [],
    "top-center": [],
    "bottom-center": []
  });
  return n ? "body" in pe() ? /* @__PURE__ */ l.jsxs(ot.Provider, { value: { showToast: i, removeToast: o }, children: [
    e,
    n && /* @__PURE__ */ l.jsx("div", { className: "fixed inset-0 pointer-events-none", children: Object.entries(a).map(([c, f]) => /* @__PURE__ */ l.jsx(
      "div",
      {
        className: $(
          "fixed z-50 flex flex-col gap-2 min-w-[320px] max-w-[420px]",
          wo[c],
          c.includes("bottom") ? "flex-col-reverse" : "flex-col"
        ),
        children: f.map((p) => /* @__PURE__ */ l.jsx(
          Fr,
          {
            ...p,
            onClose: () => o(p.id),
            className: "animate-slide-in"
          },
          p.id
        ))
      },
      c
    )) })
  ] }) : /* @__PURE__ */ l.jsx(ot.Provider, { value: { showToast: i, removeToast: o }, children: e }) : /* @__PURE__ */ l.jsx(ot.Provider, { value: { showToast: i, removeToast: o }, children: e });
}, Yo = () => {
  const e = on(ot);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, yo = ({
  label: e,
  value: r,
  icon: t,
  className: n
}) => /* @__PURE__ */ l.jsxs(xr, { className: $(
  "flex items-center gap-4 rounded-lg w-full bg-white p-4 shadow-sm hover:bg-neutral-50 transition-shadow duration-200 justify-between",
  n
), children: [
  /* @__PURE__ */ l.jsxs("div", { children: [
    /* @__PURE__ */ l.jsx("p", { className: "text-sm font-medium text-gray-500", children: e }),
    /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-2xl font-semibold text-gray-900", children: r })
  ] }),
  t && /* @__PURE__ */ l.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50", children: /* @__PURE__ */ l.jsx(re, { icon: t, className: "h-6 w-6 text-primary-600" }) })
] }), So = {
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
}, Co = {
  "no-internet": "NO_INTERNET",
  "data-not-found": "DATA_NOT_FOUND",
  "under-development": "UNDER_DEVELOPMENT",
  "information-unavailable": "INFORMATION_UNAVAILABLE",
  success: "SUCCESS",
  checked: "CHECKED"
}, ar = {
  ...So,
  ...Pr
}, _t = {
  image: "/img/error.svg",
  message: "An unexpected error occurred. Our team is currently investigating the issue."
}, Ro = (e) => typeof e == "object" && e !== null && ("code" in e || "message" in e), Ko = ({ error: e, reload: r, children: t, className: n = "", variant: s }) => {
  if (s) {
    const a = Co[s], u = Pr[a];
    return /* @__PURE__ */ l.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${n}`, children: [
      /* @__PURE__ */ l.jsx(
        "img",
        {
          src: u.image,
          alt: "Error illustration",
          className: "max-w-[300px] h-auto"
        }
      ),
      /* @__PURE__ */ l.jsx(xt, { variant: "body1", className: "m-0", children: u.message }),
      r && /* @__PURE__ */ l.jsx(
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
  }
  if (!e)
    return t ? /* @__PURE__ */ l.jsx(l.Fragment, { children: t }) : null;
  if (!Ro(e))
    return /* @__PURE__ */ l.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${n}`, children: [
      /* @__PURE__ */ l.jsx(
        "img",
        {
          src: _t.image,
          alt: "Error illustration",
          className: "max-w-[300px] h-auto"
        }
      ),
      /* @__PURE__ */ l.jsx(xt, { variant: "body1", className: "m-0", children: _t.message }),
      r && /* @__PURE__ */ l.jsx(
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
  const o = e.code && ar[e.code] ? ar[e.code] : _t, i = e.message || o.message;
  return /* @__PURE__ */ l.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${n}`, children: [
    /* @__PURE__ */ l.jsx(
      "img",
      {
        src: o.image,
        alt: "Error illustration",
        className: "max-w-[300px] h-auto"
      }
    ),
    /* @__PURE__ */ l.jsx(xt, { variant: "body1", className: "m-0", children: i }),
    r && /* @__PURE__ */ l.jsx(
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
}, jo = Ne(
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
), _o = ve(
  ({
    className: e,
    variant: r = "default",
    size: t = "md",
    rounded: n = "md",
    error: s = !1,
    errorText: o,
    helperText: i,
    label: a,
    bottomLabel: u,
    required: c = !1,
    showSubmitButton: f = !1,
    submitButtonLabel: p = "Submit",
    submitButtonVariant: m = "primary",
    length: d = 6,
    numericOnly: x = !0,
    onComplete: h,
    onChange: b,
    onSubmit: w,
    value: S,
    defaultValue: G = "",
    disabled: N = !1,
    autoFocus: k = !1,
    ...P
  }, O) => {
    const [M, V] = ie(G || ""), z = xe([]);
    we(() => {
      S !== void 0 && V(S);
    }, [S]);
    const F = S !== void 0, A = F ? S : M, J = (E) => {
      F || V(E), b == null || b(E), E.length === d && (h == null || h(E), f || w == null || w(E));
    }, I = (E) => (R) => {
      z.current[E] = R;
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
      J(B), R < d - 1 && Y && ((K = z.current[R + 1]) == null || K.focus());
    }, y = (E, R) => {
      var H, Y, te;
      if (E.key === "Backspace") {
        const B = A.split("");
        A[R] ? (E.preventDefault(), B[R] = "", J(B.join(""))) : R > 0 && (E.preventDefault(), B[R - 1] = "", J(B.join("")), (H = z.current[R - 1]) == null || H.focus());
      } else if (E.key === "Delete") {
        if (A[R]) {
          E.preventDefault();
          const B = A.split("");
          B[R] = "", J(B.join(""));
        }
      } else if (E.key === "ArrowLeft" && R > 0)
        E.preventDefault(), (Y = z.current[R - 1]) == null || Y.focus();
      else if (E.key === "ArrowRight" && R < d - 1)
        E.preventDefault(), (te = z.current[R + 1]) == null || te.focus();
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
      const Y = R.slice(0, d).padEnd(A.length, "").slice(0, d);
      J(Y);
      const te = Y.length < d ? Y.length : d - 1;
      (B = z.current[te]) == null || B.focus();
    }, L = () => {
      A.length === d && (w == null || w(A));
    }, T = A.split("").concat(Array(d - A.length).fill(""));
    return /* @__PURE__ */ l.jsxs("div", { ref: O, className: $("w-full", e), ...P, children: [
      a && /* @__PURE__ */ l.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
        a,
        c && /* @__PURE__ */ l.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
        /* @__PURE__ */ l.jsx("div", { className: "flex items-center justify-center gap-2", children: Array.from({ length: d }).map((E, R) => /* @__PURE__ */ l.jsx(
          "input",
          {
            ref: I(R),
            type: x ? "tel" : "text",
            inputMode: x ? "numeric" : "text",
            maxLength: 1,
            value: T[R] || "",
            onChange: (H) => v(H, R),
            onKeyDown: (H) => y(H, R),
            onPaste: R === 0 ? C : void 0,
            onFocus: _,
            disabled: N,
            autoFocus: k && R === 0,
            className: $(
              jo({
                variant: s ? "error" : r,
                size: t,
                rounded: n
              })
            ),
            "aria-invalid": s
          },
          R
        )) }),
        s && o && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-danger-500 self-start", children: o }),
        !s && i && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs text-neutral-500 self-start", children: i }),
        u && /* @__PURE__ */ l.jsx("p", { className: "text-sm text-neutral-600", children: u }),
        f && /* @__PURE__ */ l.jsx(
          Re,
          {
            variant: m,
            disabled: A.length !== d || N,
            onClick: L,
            className: "mt-4",
            children: p
          }
        )
      ] })
    ] });
  }
);
_o.displayName = "InputOTP";
const Zo = ({
  icon: e,
  variant: r = "number",
  className: t,
  color: n = "#007C99",
  plusIcon: s,
  badgeContent: o = 10,
  position: i = "top-right",
  ...a
}) => {
  let u = "", c = "";
  switch (r === "number" && (s || o && o > 99 ? u = "w-7" : u = (typeof o == "number" ? String(o).length : 1) === 1 ? "w-5" : "w-6"), i) {
    case "top-right":
      c = r === "number" ? "-top-1 -right-2.5" : "-top-1 right-0";
      break;
    case "top-left":
      c = r === "number" ? "-top-1 -left-2.5" : "-top-1 left-0";
      break;
    case "bottom-right":
      c = r === "number" ? "bottom-0 -right-3" : "bottom-0 right-0";
      break;
    case "bottom-left":
      c = r === "number" ? "bottom-0 -left-3" : "bottom-0 left-0";
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
        color: n,
        size: 32,
        ...a
      }
    ),
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: $(
          "absolute h-5 rounded-xl flex justify-center items-center text-[10px] bg-[#FF4C4C] text-white font-semiboldbold",
          c,
          r === "number" ? `${u} h-5` : "w-2.5 h-2.5",
          r === "dot" ? "" : "p-1"
        ),
        children: [
          r === "number" && (o && o > 99 ? "99" : o),
          r === "number" && (s || o && o > 99) && "+"
        ]
      }
    )
  ] });
}, Jo = ({
  widgets: e,
  className: r
}) => /* @__PURE__ */ l.jsx("div", { className: $("w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", r), children: e.map((t, n) => /* @__PURE__ */ l.jsx(yo, { ...t }, n)) });
export {
  Bn as A,
  Io as B,
  xr as C,
  Xn as D,
  ws as E,
  Vo as F,
  vs as G,
  Uo as H,
  re as I,
  Ss as J,
  Wo as K,
  Fr as L,
  qo as M,
  Ao as N,
  Yo as O,
  ls as P,
  Ko as Q,
  Oo as R,
  wr as S,
  Bo as T,
  _o as U,
  jo as V,
  yo as W,
  Zo as X,
  Jo as Y,
  $ as Z,
  an as a,
  Mo as b,
  ko as c,
  Re as d,
  Un as e,
  Wn as f,
  Eo as g,
  Fo as h,
  Po as i,
  Do as j,
  es as k,
  ts as l,
  rs as m,
  ns as n,
  br as o,
  ss as p,
  pr as q,
  it as r,
  us as s,
  zo as t,
  Lo as u,
  To as v,
  Ho as w,
  Go as x,
  xt as y,
  xs as z
};
