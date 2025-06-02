import * as Nt from "react";
import De, { useState as ae, useEffect as je, forwardRef as Se, useRef as ye, useCallback as Oe, Children as tr, isValidElement as pt, cloneElement as cn, createContext as dn, useContext as gn } from "react";
import { createPortal as Ke } from "react-dom";
var At = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ot(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ho(e) {
  if (e.__esModule) return e;
  var n = e.default;
  if (typeof n == "function") {
    var t = function r() {
      return this instanceof r ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments);
    };
    t.prototype = n.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var s = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(t, r, s.get ? s : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), t;
}
var $t = { exports: {} }, Je = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rr;
function fn() {
  if (rr) return Je;
  rr = 1;
  var e = De, n = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, u, d) {
    var m, p = {}, f = null, c = null;
    d !== void 0 && (f = "" + d), u.key !== void 0 && (f = "" + u.key), u.ref !== void 0 && (c = u.ref);
    for (m in u) r.call(u, m) && !o.hasOwnProperty(m) && (p[m] = u[m]);
    if (l && l.defaultProps) for (m in u = l.defaultProps, u) p[m] === void 0 && (p[m] = u[m]);
    return { $$typeof: n, type: l, key: f, ref: c, props: p, _owner: s.current };
  }
  return Je.Fragment = t, Je.jsx = a, Je.jsxs = a, Je;
}
var Qe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nr;
function mn() {
  return nr || (nr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = De, n = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), c = Symbol.for("react.offscreen"), x = Symbol.iterator, h = "@@iterator";
    function v(g) {
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
        H("error", g, D);
      }
    }
    function H(g, j, D) {
      {
        var q = w.ReactDebugCurrentFrame, le = q.getStackAddendum();
        le !== "" && (j += "%s", D = D.concat([le]));
        var ue = D.map(function(ne) {
          return String(ne);
        });
        ue.unshift("Warning: " + j), Function.prototype.apply.call(console[g], console, ue);
      }
    }
    var N = !1, k = !1, A = !1, G = !1, M = !1, O;
    O = Symbol.for("react.module.reference");
    function P(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === r || g === o || M || g === s || g === d || g === m || G || g === c || N || k || A || typeof g == "object" && g !== null && (g.$$typeof === f || g.$$typeof === p || g.$$typeof === a || g.$$typeof === l || g.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === O || g.getModuleId !== void 0));
    }
    function L(g, j, D) {
      var q = g.displayName;
      if (q)
        return q;
      var le = j.displayName || j.name || "";
      return le !== "" ? D + "(" + le + ")" : D;
    }
    function I(g) {
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
        case o:
          return "Profiler";
        case s:
          return "StrictMode";
        case d:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case l:
            var j = g;
            return I(j) + ".Consumer";
          case a:
            var D = g;
            return I(D._context) + ".Provider";
          case u:
            return L(g, g.render, "ForwardRef");
          case p:
            var q = g.displayName || null;
            return q !== null ? q : J(g.type) || "Memo";
          case f: {
            var le = g, ue = le._payload, ne = le._init;
            try {
              return J(ne(ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, $ = 0, b, S, C, V, z, E, R;
    function T() {
    }
    T.__reactDisabledLog = !0;
    function Y() {
      {
        if ($ === 0) {
          b = console.log, S = console.info, C = console.warn, V = console.error, z = console.group, E = console.groupCollapsed, R = console.groupEnd;
          var g = {
            configurable: !0,
            enumerable: !0,
            value: T,
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
        $++;
      }
    }
    function te() {
      {
        if ($--, $ === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, g, {
              value: b
            }),
            info: F({}, g, {
              value: S
            }),
            warn: F({}, g, {
              value: C
            }),
            error: F({}, g, {
              value: V
            }),
            group: F({}, g, {
              value: z
            }),
            groupCollapsed: F({}, g, {
              value: E
            }),
            groupEnd: F({}, g, {
              value: R
            })
          });
        }
        $ < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = w.ReactCurrentDispatcher, ce;
    function fe(g, j, D) {
      {
        if (ce === void 0)
          try {
            throw Error();
          } catch (le) {
            var q = le.stack.trim().match(/\n( *(at )?)/);
            ce = q && q[1] || "";
          }
        return `
` + ce + g;
      }
    }
    var K = !1, se;
    {
      var de = typeof WeakMap == "function" ? WeakMap : Map;
      se = new de();
    }
    function W(g, j) {
      if (!g || K)
        return "";
      {
        var D = se.get(g);
        if (D !== void 0)
          return D;
      }
      var q;
      K = !0;
      var le = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ue;
      ue = re.current, re.current = null, Y();
      try {
        if (j) {
          var ne = function() {
            throw Error();
          };
          if (Object.defineProperty(ne.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ne, []);
            } catch (_e) {
              q = _e;
            }
            Reflect.construct(g, [], ne);
          } else {
            try {
              ne.call();
            } catch (_e) {
              q = _e;
            }
            g.call(ne.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_e) {
            q = _e;
          }
          g();
        }
      } catch (_e) {
        if (_e && q && typeof _e.stack == "string") {
          for (var ee = _e.stack.split(`
`), Re = q.stack.split(`
`), xe = ee.length - 1, ve = Re.length - 1; xe >= 1 && ve >= 0 && ee[xe] !== Re[ve]; )
            ve--;
          for (; xe >= 1 && ve >= 0; xe--, ve--)
            if (ee[xe] !== Re[ve]) {
              if (xe !== 1 || ve !== 1)
                do
                  if (xe--, ve--, ve < 0 || ee[xe] !== Re[ve]) {
                    var Me = `
` + ee[xe].replace(" at new ", " at ");
                    return g.displayName && Me.includes("<anonymous>") && (Me = Me.replace("<anonymous>", g.displayName)), typeof g == "function" && se.set(g, Me), Me;
                  }
                while (xe >= 1 && ve >= 0);
              break;
            }
        }
      } finally {
        K = !1, re.current = ue, te(), Error.prepareStackTrace = le;
      }
      var We = g ? g.displayName || g.name : "", Be = We ? fe(We) : "";
      return typeof g == "function" && se.set(g, Be), Be;
    }
    function X(g, j, D) {
      return W(g, !1);
    }
    function he(g) {
      var j = g.prototype;
      return !!(j && j.isReactComponent);
    }
    function ie(g, j, D) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return W(g, he(g));
      if (typeof g == "string")
        return fe(g);
      switch (g) {
        case d:
          return fe("Suspense");
        case m:
          return fe("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case u:
            return X(g.render);
          case p:
            return ie(g.type, j, D);
          case f: {
            var q = g, le = q._payload, ue = q._init;
            try {
              return ie(ue(le), j, D);
            } catch {
            }
          }
        }
      return "";
    }
    var pe = Object.prototype.hasOwnProperty, Ce = {}, Pe = w.ReactDebugCurrentFrame;
    function Ee(g) {
      if (g) {
        var j = g._owner, D = ie(g.type, g._source, j ? j.type : null);
        Pe.setExtraStackFrame(D);
      } else
        Pe.setExtraStackFrame(null);
    }
    function st(g, j, D, q, le) {
      {
        var ue = Function.call.bind(pe);
        for (var ne in g)
          if (ue(g, ne)) {
            var ee = void 0;
            try {
              if (typeof g[ne] != "function") {
                var Re = Error((q || "React class") + ": " + D + " type `" + ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Re.name = "Invariant Violation", Re;
              }
              ee = g[ne](j, ne, q, D, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (xe) {
              ee = xe;
            }
            ee && !(ee instanceof Error) && (Ee(le), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", q || "React class", D, ne, typeof ee), Ee(null)), ee instanceof Error && !(ee.message in Ce) && (Ce[ee.message] = !0, Ee(le), y("Failed %s type: %s", D, ee.message), Ee(null));
          }
      }
    }
    var ot = Array.isArray;
    function Xe(g) {
      return ot(g);
    }
    function Ge(g) {
      {
        var j = typeof Symbol == "function" && Symbol.toStringTag, D = j && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return D;
      }
    }
    function Br(g) {
      try {
        return Gt(g), !1;
      } catch {
        return !0;
      }
    }
    function Gt(g) {
      return "" + g;
    }
    function Bt(g) {
      if (Br(g))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(g)), Gt(g);
    }
    var Ut = w.ReactCurrentOwner, Ur = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Wt, qt;
    function Wr(g) {
      if (pe.call(g, "ref")) {
        var j = Object.getOwnPropertyDescriptor(g, "ref").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function qr(g) {
      if (pe.call(g, "key")) {
        var j = Object.getOwnPropertyDescriptor(g, "key").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function Yr(g, j) {
      typeof g.ref == "string" && Ut.current;
    }
    function Kr(g, j) {
      {
        var D = function() {
          Wt || (Wt = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        D.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: D,
          configurable: !0
        });
      }
    }
    function Zr(g, j) {
      {
        var D = function() {
          qt || (qt = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        D.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: D,
          configurable: !0
        });
      }
    }
    var Xr = function(g, j, D, q, le, ue, ne) {
      var ee = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: g,
        key: j,
        ref: D,
        props: ne,
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
    function Jr(g, j, D, q, le) {
      {
        var ue, ne = {}, ee = null, Re = null;
        D !== void 0 && (Bt(D), ee = "" + D), qr(j) && (Bt(j.key), ee = "" + j.key), Wr(j) && (Re = j.ref, Yr(j, le));
        for (ue in j)
          pe.call(j, ue) && !Ur.hasOwnProperty(ue) && (ne[ue] = j[ue]);
        if (g && g.defaultProps) {
          var xe = g.defaultProps;
          for (ue in xe)
            ne[ue] === void 0 && (ne[ue] = xe[ue]);
        }
        if (ee || Re) {
          var ve = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          ee && Kr(ne, ve), Re && Zr(ne, ve);
        }
        return Xr(g, ee, Re, le, q, Ut.current, ne);
      }
    }
    var dt = w.ReactCurrentOwner, Yt = w.ReactDebugCurrentFrame;
    function Ue(g) {
      if (g) {
        var j = g._owner, D = ie(g.type, g._source, j ? j.type : null);
        Yt.setExtraStackFrame(D);
      } else
        Yt.setExtraStackFrame(null);
    }
    var gt;
    gt = !1;
    function ft(g) {
      return typeof g == "object" && g !== null && g.$$typeof === n;
    }
    function Kt() {
      {
        if (dt.current) {
          var g = J(dt.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
    }
    function Qr(g) {
      return "";
    }
    var Zt = {};
    function en(g) {
      {
        var j = Kt();
        if (!j) {
          var D = typeof g == "string" ? g : g.displayName || g.name;
          D && (j = `

Check the top-level render call using <` + D + ">.");
        }
        return j;
      }
    }
    function Xt(g, j) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var D = en(j);
        if (Zt[D])
          return;
        Zt[D] = !0;
        var q = "";
        g && g._owner && g._owner !== dt.current && (q = " It was passed a child from " + J(g._owner.type) + "."), Ue(g), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', D, q), Ue(null);
      }
    }
    function Jt(g, j) {
      {
        if (typeof g != "object")
          return;
        if (Xe(g))
          for (var D = 0; D < g.length; D++) {
            var q = g[D];
            ft(q) && Xt(q, j);
          }
        else if (ft(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var le = v(g);
          if (typeof le == "function" && le !== g.entries)
            for (var ue = le.call(g), ne; !(ne = ue.next()).done; )
              ft(ne.value) && Xt(ne.value, j);
        }
      }
    }
    function tn(g) {
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
          st(D, g.props, "prop", q, g);
        } else if (j.PropTypes !== void 0 && !gt) {
          gt = !0;
          var le = J(j);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", le || "Unknown");
        }
        typeof j.getDefaultProps == "function" && !j.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rn(g) {
      {
        for (var j = Object.keys(g.props), D = 0; D < j.length; D++) {
          var q = j[D];
          if (q !== "children" && q !== "key") {
            Ue(g), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", q), Ue(null);
            break;
          }
        }
        g.ref !== null && (Ue(g), y("Invalid attribute `ref` supplied to `React.Fragment`."), Ue(null));
      }
    }
    var Qt = {};
    function er(g, j, D, q, le, ue) {
      {
        var ne = P(g);
        if (!ne) {
          var ee = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Re = Qr();
          Re ? ee += Re : ee += Kt();
          var xe;
          g === null ? xe = "null" : Xe(g) ? xe = "array" : g !== void 0 && g.$$typeof === n ? (xe = "<" + (J(g.type) || "Unknown") + " />", ee = " Did you accidentally export a JSX literal instead of a component?") : xe = typeof g, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", xe, ee);
        }
        var ve = Jr(g, j, D, le, ue);
        if (ve == null)
          return ve;
        if (ne) {
          var Me = j.children;
          if (Me !== void 0)
            if (q)
              if (Xe(Me)) {
                for (var We = 0; We < Me.length; We++)
                  Jt(Me[We], g);
                Object.freeze && Object.freeze(Me);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Jt(Me, g);
        }
        if (pe.call(j, "key")) {
          var Be = J(g), _e = Object.keys(j).filter(function(un) {
            return un !== "key";
          }), mt = _e.length > 0 ? "{key: someKey, " + _e.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Qt[Be + mt]) {
            var ln = _e.length > 0 ? "{" + _e.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, mt, Be, ln, Be), Qt[Be + mt] = !0;
          }
        }
        return g === r ? rn(ve) : tn(ve), ve;
      }
    }
    function nn(g, j, D) {
      return er(g, j, D, !0);
    }
    function sn(g, j, D) {
      return er(g, j, D, !1);
    }
    var on = sn, an = nn;
    Qe.Fragment = r, Qe.jsx = on, Qe.jsxs = an;
  }()), Qe;
}
process.env.NODE_ENV === "production" ? $t.exports = fn() : $t.exports = mn();
var i = $t.exports;
function hr(e) {
  var n, t, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (n = 0; n < s; n++) e[n] && (t = hr(e[n])) && (r && (r += " "), r += t);
  } else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function oe() {
  for (var e, n, t = 0, r = "", s = arguments.length; t < s; t++) (e = arguments[t]) && (n = hr(e)) && (r && (r += " "), r += n);
  return r;
}
const sr = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, or = oe, Ne = (e, n) => (t) => {
  var r;
  if ((n == null ? void 0 : n.variants) == null) return or(e, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: s, defaultVariants: o } = n, a = Object.keys(s).map((d) => {
    const m = t == null ? void 0 : t[d], p = o == null ? void 0 : o[d];
    if (m === null) return null;
    const f = sr(m) || sr(p);
    return s[d][f];
  }), l = t && Object.entries(t).reduce((d, m) => {
    let [p, f] = m;
    return f === void 0 || (d[p] = f), d;
  }, {}), u = n == null || (r = n.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((d, m) => {
    let { class: p, className: f, ...c } = m;
    return Object.entries(c).every((x) => {
      let [h, v] = x;
      return Array.isArray(v) ? v.includes({
        ...o,
        ...l
      }[h]) : {
        ...o,
        ...l
      }[h] === v;
    }) ? [
      ...d,
      p,
      f
    ] : d;
  }, []);
  return or(e, a, u, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
}, Lt = "-", pn = (e) => {
  const n = xn(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      const l = a.split(Lt);
      return l[0] === "" && l.length !== 1 && l.shift(), xr(l, n) || hn(a);
    },
    getConflictingClassGroupIds: (a, l) => {
      const u = t[a] || [];
      return l && r[a] ? [...u, ...r[a]] : u;
    }
  };
}, xr = (e, n) => {
  var a;
  if (e.length === 0)
    return n.classGroupId;
  const t = e[0], r = n.nextPart.get(t), s = r ? xr(e.slice(1), r) : void 0;
  if (s)
    return s;
  if (n.validators.length === 0)
    return;
  const o = e.join(Lt);
  return (a = n.validators.find(({
    validator: l
  }) => l(o))) == null ? void 0 : a.classGroupId;
}, ir = /^\[(.+)\]$/, hn = (e) => {
  if (ir.test(e)) {
    const n = ir.exec(e)[1], t = n == null ? void 0 : n.substring(0, n.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, xn = (e) => {
  const {
    theme: n,
    prefix: t
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return bn(Object.entries(e.classGroups), t).forEach(([o, a]) => {
    Et(a, r, o, n);
  }), r;
}, Et = (e, n, t, r) => {
  e.forEach((s) => {
    if (typeof s == "string") {
      const o = s === "" ? n : ar(n, s);
      o.classGroupId = t;
      return;
    }
    if (typeof s == "function") {
      if (vn(s)) {
        Et(s(r), n, t, r);
        return;
      }
      n.validators.push({
        validator: s,
        classGroupId: t
      });
      return;
    }
    Object.entries(s).forEach(([o, a]) => {
      Et(a, ar(n, o), t, r);
    });
  });
}, ar = (e, n) => {
  let t = e;
  return n.split(Lt).forEach((r) => {
    t.nextPart.has(r) || t.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(r);
  }), t;
}, vn = (e) => e.isThemeGetter, bn = (e, n) => n ? e.map(([t, r]) => {
  const s = r.map((o) => typeof o == "string" ? n + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([a, l]) => [n + a, l])) : o);
  return [t, s];
}) : e, wn = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const s = (o, a) => {
    t.set(o, a), n++, n > e && (n = 0, r = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let a = t.get(o);
      if (a !== void 0)
        return a;
      if ((a = r.get(o)) !== void 0)
        return s(o, a), a;
    },
    set(o, a) {
      t.has(o) ? t.set(o, a) : s(o, a);
    }
  };
}, vr = "!", yn = (e) => {
  const {
    separator: n,
    experimentalParseClassName: t
  } = e, r = n.length === 1, s = n[0], o = n.length, a = (l) => {
    const u = [];
    let d = 0, m = 0, p;
    for (let v = 0; v < l.length; v++) {
      let w = l[v];
      if (d === 0) {
        if (w === s && (r || l.slice(v, v + o) === n)) {
          u.push(l.slice(m, v)), m = v + o;
          continue;
        }
        if (w === "/") {
          p = v;
          continue;
        }
      }
      w === "[" ? d++ : w === "]" && d--;
    }
    const f = u.length === 0 ? l : l.substring(m), c = f.startsWith(vr), x = c ? f.substring(1) : f, h = p && p > m ? p - m : void 0;
    return {
      modifiers: u,
      hasImportantModifier: c,
      baseClassName: x,
      maybePostfixModifierPosition: h
    };
  };
  return t ? (l) => t({
    className: l,
    parseClassName: a
  }) : a;
}, Sn = (e) => {
  if (e.length <= 1)
    return e;
  const n = [];
  let t = [];
  return e.forEach((r) => {
    r[0] === "[" ? (n.push(...t.sort(), r), t = []) : t.push(r);
  }), n.push(...t.sort()), n;
}, Cn = (e) => ({
  cache: wn(e.cacheSize),
  parseClassName: yn(e),
  ...pn(e)
}), Rn = /\s+/, jn = (e, n) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: s
  } = n, o = [], a = e.trim().split(Rn);
  let l = "";
  for (let u = a.length - 1; u >= 0; u -= 1) {
    const d = a[u], {
      modifiers: m,
      hasImportantModifier: p,
      baseClassName: f,
      maybePostfixModifierPosition: c
    } = t(d);
    let x = !!c, h = r(x ? f.substring(0, c) : f);
    if (!h) {
      if (!x) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (h = r(f), !h) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      x = !1;
    }
    const v = Sn(m).join(":"), w = p ? v + vr : v, y = w + h;
    if (o.includes(y))
      continue;
    o.push(y);
    const H = s(h, x);
    for (let N = 0; N < H.length; ++N) {
      const k = H[N];
      o.push(w + k);
    }
    l = d + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function _n() {
  let e = 0, n, t, r = "";
  for (; e < arguments.length; )
    (n = arguments[e++]) && (t = br(n)) && (r && (r += " "), r += t);
  return r;
}
const br = (e) => {
  if (typeof e == "string")
    return e;
  let n, t = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (n = br(e[r])) && (t && (t += " "), t += n);
  return t;
};
function Nn(e, ...n) {
  let t, r, s, o = a;
  function a(u) {
    const d = n.reduce((m, p) => p(m), e());
    return t = Cn(d), r = t.cache.get, s = t.cache.set, o = l, l(u);
  }
  function l(u) {
    const d = r(u);
    if (d)
      return d;
    const m = jn(u, t);
    return s(u, m), m;
  }
  return function() {
    return o(_n.apply(null, arguments));
  };
}
const ge = (e) => {
  const n = (t) => t[e] || [];
  return n.isThemeGetter = !0, n;
}, wr = /^\[(?:([a-z-]+):)?(.+)\]$/i, $n = /^\d+\/\d+$/, En = /* @__PURE__ */ new Set(["px", "full", "screen"]), Mn = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, kn = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Fn = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Pn = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, In = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ve = (e) => qe(e) || En.has(e) || $n.test(e), Le = (e) => Ze(e, "length", Hn), qe = (e) => !!e && !Number.isNaN(Number(e)), ht = (e) => Ze(e, "number", qe), et = (e) => !!e && Number.isInteger(Number(e)), Dn = (e) => e.endsWith("%") && qe(e.slice(0, -1)), Z = (e) => wr.test(e), ze = (e) => Mn.test(e), Vn = /* @__PURE__ */ new Set(["length", "size", "percentage"]), An = (e) => Ze(e, Vn, yr), On = (e) => Ze(e, "position", yr), Ln = /* @__PURE__ */ new Set(["image", "url"]), zn = (e) => Ze(e, Ln, Bn), Tn = (e) => Ze(e, "", Gn), tt = () => !0, Ze = (e, n, t) => {
  const r = wr.exec(e);
  return r ? r[1] ? typeof n == "string" ? r[1] === n : n.has(r[1]) : t(r[2]) : !1;
}, Hn = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  kn.test(e) && !Fn.test(e)
), yr = () => !1, Gn = (e) => Pn.test(e), Bn = (e) => In.test(e), Un = () => {
  const e = ge("colors"), n = ge("spacing"), t = ge("blur"), r = ge("brightness"), s = ge("borderColor"), o = ge("borderRadius"), a = ge("borderSpacing"), l = ge("borderWidth"), u = ge("contrast"), d = ge("grayscale"), m = ge("hueRotate"), p = ge("invert"), f = ge("gap"), c = ge("gradientColorStops"), x = ge("gradientColorStopPositions"), h = ge("inset"), v = ge("margin"), w = ge("opacity"), y = ge("padding"), H = ge("saturate"), N = ge("scale"), k = ge("sepia"), A = ge("skew"), G = ge("space"), M = ge("translate"), O = () => ["auto", "contain", "none"], P = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", Z, n], I = () => [Z, n], J = () => ["", Ve, Le], F = () => ["auto", qe, Z], $ = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], b = () => ["solid", "dashed", "dotted", "double", "none"], S = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], C = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], V = () => ["", "0", Z], z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], E = () => [qe, Z];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [tt],
      spacing: [Ve, Le],
      blur: ["none", "", ze, Z],
      brightness: E(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ze, Z],
      borderSpacing: I(),
      borderWidth: J(),
      contrast: E(),
      grayscale: V(),
      hueRotate: E(),
      invert: V(),
      gap: I(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Dn, Le],
      inset: L(),
      margin: L(),
      opacity: E(),
      padding: I(),
      saturate: E(),
      scale: E(),
      sepia: V(),
      skew: E(),
      space: I(),
      translate: I()
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
        "break-after": z()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": z()
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
        overflow: P()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": P()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": P()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: O()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": O()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": O()
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
        z: ["auto", et, Z]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: L()
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
        grow: V()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: V()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", et, Z]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [tt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", et, Z]
        }, Z]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": F()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": F()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [tt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [et, Z]
        }, Z]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": F()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": F()
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
        gap: [f]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [f]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [f]
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
        m: [v]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [v]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [v]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [v]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [v]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [v]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [v]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [v]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [v]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ht]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [tt]
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
        "line-clamp": ["none", qe, ht]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ve, Z]
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
        decoration: [...b(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ve, Le]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ve, Z]
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
        indent: I()
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
        bg: [...$(), On]
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
        bg: ["auto", "cover", "contain", An]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, zn]
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
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
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
        border: [...b(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
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
        "divide-y": [l]
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
        divide: b()
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
        outline: ["", ...b()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ve, Z]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ve, Le]
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
        "ring-offset": [Ve, Le]
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
        shadow: ["", "inner", "none", ze, Tn]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [tt]
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
        "hue-rotate": [m]
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
        saturate: [H]
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
        "backdrop-hue-rotate": [m]
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
        "backdrop-saturate": [H]
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
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
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
        rotate: [et, Z]
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
        "skew-x": [A]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [A]
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
        "scroll-m": I()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": I()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": I()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": I()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": I()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": I()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": I()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": I()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": I()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": I()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": I()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": I()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": I()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": I()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": I()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": I()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": I()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": I()
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
        stroke: [Ve, Le, ht]
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
}, Ye = /* @__PURE__ */ Nn(Un);
function _(...e) {
  return Ye(oe(e));
}
const Q = ({
  icon: e,
  className: n,
  size: t,
  color: r,
  rotate: s,
  flip: o,
  spin: a,
  inline: l = !0,
  mode: u = "svg",
  ...d
}) => {
  const [m, p] = ae(null), [f, c] = ae(!0), [x, h] = ae(null);
  return je(() => {
    let v = !0;
    return (async () => {
      try {
        const { Icon: y } = await import("./iconify-Dqt3MVen.mjs");
        v && (p(() => y), c(!1));
      } catch (y) {
        console.error("Failed to load icon:", y), v && (h(y), c(!1));
      }
    })(), () => {
      v = !1;
    };
  }, []), f ? /* @__PURE__ */ i.jsx("span", { style: { width: t, height: t } }) : x || !m ? null : /* @__PURE__ */ i.jsx(
    m,
    {
      icon: e,
      className: _(
        a && "animate-spin",
        n
      ),
      style: {
        color: r,
        transform: `rotate(${s || 0}deg)`
      },
      height: t,
      width: t,
      flip: o,
      inline: l,
      mode: u,
      ...d
    }
  );
}, Wn = Ne(
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
), Sr = Se(
  ({
    className: e,
    variant: n = "default",
    size: t = "md",
    rounded: r = "md",
    error: s = !1,
    errorText: o,
    helperText: a,
    label: l,
    required: u = !1,
    labelPlacement: d = "top",
    fullWidth: m = !1,
    leftIcon: p,
    rightIcon: f,
    id: c,
    ...x
  }, h) => {
    const v = c || De.useId(), w = `${v}-helper`, y = `${v}-error`, H = /* @__PURE__ */ i.jsxs("div", { className: _("relative", !m && "inline-block"), children: [
      p && /* @__PURE__ */ i.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500", children: /* @__PURE__ */ i.jsx(Q, { icon: p, className: "w-4 h-4" }) }),
      /* @__PURE__ */ i.jsx(
        "input",
        {
          id: v,
          type: "text",
          ref: h,
          className: _(
            Wn({ variant: s ? "error" : n, size: t, rounded: r, fullWidth: m }),
            p && "pl-10",
            f && "pr-10",
            e
          ),
          "aria-describedby": s ? y : a ? w : void 0,
          "aria-invalid": s,
          "aria-required": u,
          ...x
        }
      ),
      f && /* @__PURE__ */ i.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500", children: /* @__PURE__ */ i.jsx(Q, { icon: f, className: "w-4 h-4" }) })
    ] }), N = /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      s && o && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger-500", id: y, children: o }),
      !s && a && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral-500", id: w, children: a })
    ] });
    return d === "left" ? /* @__PURE__ */ i.jsx("div", { className: _(m ? "w-full" : "inline-block", e), children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-start gap-4", children: [
      l && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: v,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            l,
            u && /* @__PURE__ */ i.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: _("flex-1", !m && "inline-block"), children: [
        H,
        N
      ] })
    ] }) }) : /* @__PURE__ */ i.jsxs("div", { className: _(m ? "w-full" : "inline-block", e), children: [
      l && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: v,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            l,
            u && /* @__PURE__ */ i.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
          ]
        }
      ),
      H,
      N
    ] });
  }
);
Sr.displayName = "Input";
const ut = De.forwardRef(
  ({ className: e, children: n, selected: t, disabled: r, ...s }, o) => /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: o,
      className: _(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
        "hover:bg-primary-50",
        t && "bg-primary-50 text-primary-900",
        r && "pointer-events-none opacity-50",
        e
      ),
      ...s,
      children: n
    }
  )
);
ut.displayName = "SelectItem";
const Cr = typeof window < "u", Fe = () => Cr ? window : {
  innerHeight: 0,
  innerWidth: 0,
  addEventListener: () => {
  },
  removeEventListener: () => {
  }
}, be = () => Cr ? document : {
  addEventListener: () => {
  },
  removeEventListener: () => {
  },
  dispatchEvent: () => {
  }
}, xt = "autocomplete-dropdown-opened", qn = Ne(
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
), Yn = Se(
  ({
    className: e,
    options: n,
    onSelect: t,
    isOpen: r,
    dropdownPosition: s = "bottom",
    loading: o = !1,
    renderOption: a,
    variant: l = "default",
    size: u = "md",
    rounded: d = "md",
    leftIcon: m,
    rightIcon: p,
    error: f = !1,
    errorText: c,
    helperText: x,
    label: h,
    required: v = !1,
    labelPlacement: w = "top",
    fullWidth: y = !1,
    value: H,
    onChange: N,
    onFocus: k,
    onBlur: A,
    showClear: G = !1,
    onClear: M,
    ...O
  }, P) => {
    const [L, I] = ae(!1), [J, F] = ae(H || ""), $ = ye(null), b = ye(null), S = ye(null), C = r !== void 0, z = `autocomplete-${De.useId().replace(/:/g, "")}`, E = () => {
      if (!L || !b.current || !S.current) return;
      const { bottom: W, top: X, left: he, width: ie } = b.current.getBoundingClientRect(), pe = S.current, Ce = Fe(), Pe = {
        position: "fixed",
        left: `${he}px`,
        width: `${ie}px`
      }, Ee = s === "bottom" ? {
        ...Pe,
        top: `${W + 4}px`,
        maxHeight: `${Ce.innerHeight - W - 8}px`
      } : {
        ...Pe,
        bottom: `${Ce.innerHeight - X + 4}px`,
        maxHeight: `${X - 8}px`
      };
      Object.assign(pe.style, Ee);
    };
    je(() => {
      const W = Fe(), X = be(), he = () => {
        L && E();
      }, ie = () => {
        L && E();
      }, pe = (Pe) => {
        Pe.detail.id !== z && I(!1);
      }, Ce = (Pe) => {
        const Ee = Pe.target;
        $.current && !$.current.contains(Ee) && S.current && !S.current.contains(Ee) && I(!1);
      };
      return L && (E(), W.addEventListener("scroll", he, !0), W.addEventListener("resize", ie)), X.addEventListener(xt, pe), X.addEventListener("click", Ce), () => {
        W.removeEventListener("scroll", he, !0), W.removeEventListener("resize", ie), X.removeEventListener(xt, pe), X.removeEventListener("click", Ce);
      };
    }, [L, z]), je(() => {
      F(H || "");
    }, [H]);
    const R = (W) => {
      const { value: X } = W.target;
      if (F(X), !X.trim()) {
        I(!1);
        return;
      }
      I(!0), N == null || N(W);
    }, T = (W) => {
      W.stopPropagation(), F(""), M == null || M();
      const X = new Event("change");
      X.target = { value: "" }, N == null || N(X);
    }, Y = (W) => {
      var pe;
      if (!W) return;
      const { value: X, label: he } = W;
      F(he), I(!1), t == null || t(X);
      const ie = new CustomEvent("autocomplete-select", {
        detail: { selectedOption: W }
      });
      (pe = b.current) == null || pe.dispatchEvent(ie);
    }, te = (W) => {
      C || (be().dispatchEvent(
        new CustomEvent(xt, {
          detail: { id: z }
        })
      ), I(!0)), k == null || k(W);
    }, re = (W) => {
      A == null || A(W);
    }, ce = n.filter(
      ({ label: W }) => W.toLowerCase().includes((J || "").toLowerCase().trim())
    ), fe = C ? r : L, K = G && J && !O.disabled && !O.readOnly, se = K ? "mdi:close" : p, de = () => {
      if (!fe) return null;
      const W = be();
      if (!("body" in W)) return null;
      const X = /* @__PURE__ */ i.jsx(
        "div",
        {
          ref: S,
          className: _(
            qn({ position: s }),
            "overflow-auto"
          ),
          onClick: (he) => he.stopPropagation(),
          children: o ? /* @__PURE__ */ i.jsx("div", { className: "flex items-center justify-center py-2", children: /* @__PURE__ */ i.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary-500 border-t-transparent" }) }) : ce.length > 0 ? ce.map((he) => /* @__PURE__ */ i.jsx(
            ut,
            {
              value: he.value,
              selected: he.label === J,
              onClick: () => Y(he),
              children: a ? a(he) : he.label
            },
            he.value
          )) : /* @__PURE__ */ i.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500", children: "No options found" })
        }
      );
      return Ke(X, W.body);
    };
    return /* @__PURE__ */ i.jsxs("div", { ref: $, className: _("relative", y ? "w-full" : "inline-block"), children: [
      /* @__PURE__ */ i.jsx("div", { ref: b, className: _(!y && "inline-block"), children: /* @__PURE__ */ i.jsx(
        Sr,
        {
          ref: P,
          value: J,
          onChange: R,
          onFocus: te,
          onBlur: re,
          variant: l,
          size: u,
          rounded: d,
          leftIcon: m,
          rightIcon: se,
          error: f,
          errorText: c,
          helperText: x,
          label: h,
          required: v,
          labelPlacement: w,
          fullWidth: y,
          className: e,
          ...O,
          onClick: K ? T : O.onClick
        }
      ) }),
      de()
    ] });
  }
);
Yn.displayName = "AutoComplete";
const Go = ({
  items: e,
  multiple: n = !1,
  defaultOpenIds: t = [],
  icon: r = "mdi:chevron-down",
  iconPosition: s = "right",
  className: o,
  itemClassName: a,
  headerClassName: l,
  contentClassName: u
}) => {
  const [d, m] = ae(t), p = (f) => {
    m(
      n ? (c) => c.includes(f) ? c.filter((x) => x !== f) : [...c, f] : (c) => c.includes(f) ? [] : [f]
    );
  };
  return /* @__PURE__ */ i.jsx("div", { className: oe("w-full space-y-2", o), children: e.map((f) => {
    const c = d.includes(f.id), x = !!f.disabled;
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: oe(
          "border rounded-lg overflow-hidden",
          "bg-white",
          "border-gray-200",
          a
        ),
        children: [
          /* @__PURE__ */ i.jsxs(
            "button",
            {
              onClick: () => !x && p(f.id),
              disabled: x,
              className: oe(
                "w-full flex items-center justify-between p-4",
                "text-left transition-colors",
                "hover:bg-primary-50",
                x && "opacity-50 cursor-not-allowed",
                l
              ),
              children: [
                s === "left" && /* @__PURE__ */ i.jsx(
                  "div",
                  {
                    className: oe(
                      "mr-3 transition-transform duration-200",
                      c && "rotate-180"
                    ),
                    children: /* @__PURE__ */ i.jsx(Q, { icon: r, className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ i.jsx("div", { className: "flex-1", children: f.title }),
                s === "right" && /* @__PURE__ */ i.jsx(
                  "div",
                  {
                    className: oe(
                      "ml-3 transition-transform duration-200",
                      c && "rotate-180"
                    ),
                    children: /* @__PURE__ */ i.jsx(Q, { icon: r, className: "w-5 h-5" })
                  }
                )
              ]
            }
          ),
          c && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: oe(
                "p-4 border-t border-gray-200",
                u
              ),
              children: f.content
            }
          )
        ]
      },
      f.id
    );
  }) });
}, Bo = ({
  src: e,
  alt: n = "avatar",
  size: t = "medium",
  shape: r = "circle",
  className: s = ""
}) => {
  const o = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16"
  }, a = {
    circle: "rounded-full",
    square: "rounded-lg"
  }, l = Ye(
    "inline-flex items-center justify-center overflow-hidden bg-gray-200",
    o[t],
    a[r],
    s
  );
  return /* @__PURE__ */ i.jsx("div", { className: l, children: e ? /* @__PURE__ */ i.jsx("img", { src: e, alt: n, className: "w-full h-full object-cover" }) : /* @__PURE__ */ i.jsx(
    "svg",
    {
      className: "w-6 h-6 text-gray-500",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z",
          fill: "currentColor"
        }
      )
    }
  ) });
}, Uo = ({
  children: e,
  variant: n = "primary",
  size: t = "medium",
  rounded: r = "md",
  className: s = ""
}) => {
  const o = {
    primary: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800"
  }, a = {
    small: "px-2 py-0.5 text-xs",
    medium: "px-2.5 py-1 text-sm",
    large: "px-3 py-1.5 text-base"
  }, l = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full"
  }, u = Ye(
    "inline-flex items-center font-medium",
    o[n],
    a[t],
    l[r],
    s
  );
  return /* @__PURE__ */ i.jsx("span", { className: u, children: e });
}, Kn = Ne(
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
), ke = Se(
  ({
    className: e,
    variant: n = "primary",
    size: t = "md",
    rounded: r = "md",
    fullWidth: s = !1,
    isLoading: o = !1,
    leftIcon: a,
    rightIcon: l,
    isIconOnly: u = !1,
    children: d,
    ...m
  }, p) => {
    const c = u || !!(a || l) && !d;
    return /* @__PURE__ */ i.jsxs(
      "button",
      {
        className: _(
          Kn({
            variant: n,
            size: t,
            rounded: c ? "full" : r,
            fullWidth: s,
            isIconOnly: c,
            className: e
          })
        ),
        ref: p,
        disabled: m.disabled || o,
        ...m,
        children: [
          o && /* @__PURE__ */ i.jsx("span", { className: "animate-spin inline-block w-4 h-4 border-2 border-current border-r-transparent rounded-full" }),
          a && !o && /* @__PURE__ */ i.jsx(Q, { icon: a, className: "w-4 h-4", inline: !0 }),
          d && /* @__PURE__ */ i.jsx("span", { children: d }),
          l && !o && /* @__PURE__ */ i.jsx(Q, { icon: l, className: "w-4 h-4", inline: !0 })
        ]
      }
    );
  }
);
ke.displayName = "Button";
const Zn = Ne(
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
), Rr = Se(
  ({
    className: e,
    variant: n = "default",
    padding: t = "md",
    shadow: r = "none",
    rounded: s = "md",
    asChild: o = !1,
    ...a
  }, l) => /* @__PURE__ */ i.jsx(
    "div",
    {
      className: _(Zn({ variant: n, padding: t, shadow: r, rounded: s, className: e })),
      ref: l,
      ...a
    }
  )
);
Rr.displayName = "Card";
const lr = {
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
}, Wo = ({
  type: e,
  series: n,
  width: t = "100%",
  height: r = 350,
  options: s = {},
  className: o
}) => {
  const [a, l] = ae(null), [u, d] = ae(!1);
  je(() => {
    if (typeof window > "u") return;
    (async () => {
      const { default: f } = await import("./react-apexcharts.min-jCJj7gJD.mjs").then((c) => c.r);
      l(() => f), d(!0);
    })();
  }, []);
  const m = {
    ...lr,
    ...s,
    chart: {
      ...lr.chart,
      ...s.chart,
      type: e
    }
  };
  return !u || !a ? /* @__PURE__ */ i.jsx("div", { style: { width: t, height: r }, className: o }) : /* @__PURE__ */ i.jsx("div", { className: o, children: /* @__PURE__ */ i.jsx(
    a,
    {
      type: e,
      series: n,
      options: m,
      width: t,
      height: r
    }
  ) });
}, qo = ({
  label: e,
  error: n,
  disabled: t = !1,
  indeterminate: r = !1,
  variantSize: s = "sm",
  variant: o = "square",
  color: a = "primary",
  className: l = "",
  ...u
}) => {
  const d = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }, m = {
    primary: "checked:bg-primary-600 checked:border-primary-600 hover:border-primary-600",
    secondary: "checked:bg-secondary-600 checked:border-secondary-600 hover:border-secondary-600",
    success: "checked:bg-success-600 checked:border-success-600 hover:border-success-600",
    warning: "checked:bg-warning-600 checked:border-warning-600 hover:border-warning-600",
    error: "checked:bg-danger-600 checked:border-danger-600 hover:border-danger-600"
  }, f = Ye(
    "border-2 transition-colors duration-200",
    "appearance-none cursor-pointer",
    "checked:bg-no-repeat checked:bg-center",
    o === "circle" ? 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=")]' : 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgM0w0LjUgOC41TDIgNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=")]',
    {
      square: "rounded",
      circle: "rounded-full"
    }[o],
    d[s],
    m[a],
    t && "opacity-50 cursor-not-allowed",
    l
  ), c = Ye(
    "ml-2 text-sm font-medium",
    t && "opacity-50 cursor-not-allowed",
    n && "text-danger-600"
  );
  return /* @__PURE__ */ i.jsxs("div", { className: "items-center", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "checkbox",
          className: f,
          disabled: t,
          ref: (x) => {
            x && (x.indeterminate = r);
          },
          ...u
        }
      ),
      e && /* @__PURE__ */ i.jsx("label", { className: c, children: e })
    ] }),
    n && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-sm text-danger-600", children: n })
  ] });
}, Xn = {
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
}, Jn = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5"
}, Qn = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}, Yo = ({
  children: e,
  variant: n = "solid",
  color: t = "primary",
  size: r = "md",
  rounded: s = "md",
  onClose: o,
  className: a,
  icon: l
}) => /* @__PURE__ */ i.jsxs(
  "div",
  {
    className: _(
      "inline-flex items-center gap-1.5 font-medium",
      Xn[n][t],
      Jn[r],
      Qn[s],
      a
    ),
    children: [
      l && /* @__PURE__ */ i.jsx("span", { className: "inline-flex items-center", children: /* @__PURE__ */ i.jsx(Q, { icon: l, className: "w-4 h-4" }) }),
      e,
      o && /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: o,
          className: "ml-1 rounded-full hover:bg-black/10 p-0.5",
          "aria-label": "Close",
          children: /* @__PURE__ */ i.jsx(Q, { icon: "mdi:close", className: "w-3 h-3" })
        }
      )
    ]
  }
);
var jr = { exports: {} };
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(At, function() {
    var t = 1e3, r = 6e4, s = 36e5, o = "millisecond", a = "second", l = "minute", u = "hour", d = "day", m = "week", p = "month", f = "quarter", c = "year", x = "date", h = "Invalid Date", v = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, w = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, y = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(F) {
      var $ = ["th", "st", "nd", "rd"], b = F % 100;
      return "[" + F + ($[(b - 20) % 10] || $[b] || $[0]) + "]";
    } }, H = function(F, $, b) {
      var S = String(F);
      return !S || S.length >= $ ? F : "" + Array($ + 1 - S.length).join(b) + F;
    }, N = { s: H, z: function(F) {
      var $ = -F.utcOffset(), b = Math.abs($), S = Math.floor(b / 60), C = b % 60;
      return ($ <= 0 ? "+" : "-") + H(S, 2, "0") + ":" + H(C, 2, "0");
    }, m: function F($, b) {
      if ($.date() < b.date()) return -F(b, $);
      var S = 12 * (b.year() - $.year()) + (b.month() - $.month()), C = $.clone().add(S, p), V = b - C < 0, z = $.clone().add(S + (V ? -1 : 1), p);
      return +(-(S + (b - C) / (V ? C - z : z - C)) || 0);
    }, a: function(F) {
      return F < 0 ? Math.ceil(F) || 0 : Math.floor(F);
    }, p: function(F) {
      return { M: p, y: c, w: m, d, D: x, h: u, m: l, s: a, ms: o, Q: f }[F] || String(F || "").toLowerCase().replace(/s$/, "");
    }, u: function(F) {
      return F === void 0;
    } }, k = "en", A = {};
    A[k] = y;
    var G = "$isDayjsObject", M = function(F) {
      return F instanceof I || !(!F || !F[G]);
    }, O = function F($, b, S) {
      var C;
      if (!$) return k;
      if (typeof $ == "string") {
        var V = $.toLowerCase();
        A[V] && (C = V), b && (A[V] = b, C = V);
        var z = $.split("-");
        if (!C && z.length > 1) return F(z[0]);
      } else {
        var E = $.name;
        A[E] = $, C = E;
      }
      return !S && C && (k = C), C || !S && k;
    }, P = function(F, $) {
      if (M(F)) return F.clone();
      var b = typeof $ == "object" ? $ : {};
      return b.date = F, b.args = arguments, new I(b);
    }, L = N;
    L.l = O, L.i = M, L.w = function(F, $) {
      return P(F, { locale: $.$L, utc: $.$u, x: $.$x, $offset: $.$offset });
    };
    var I = function() {
      function F(b) {
        this.$L = O(b.locale, null, !0), this.parse(b), this.$x = this.$x || b.x || {}, this[G] = !0;
      }
      var $ = F.prototype;
      return $.parse = function(b) {
        this.$d = function(S) {
          var C = S.date, V = S.utc;
          if (C === null) return /* @__PURE__ */ new Date(NaN);
          if (L.u(C)) return /* @__PURE__ */ new Date();
          if (C instanceof Date) return new Date(C);
          if (typeof C == "string" && !/Z$/i.test(C)) {
            var z = C.match(v);
            if (z) {
              var E = z[2] - 1 || 0, R = (z[7] || "0").substring(0, 3);
              return V ? new Date(Date.UTC(z[1], E, z[3] || 1, z[4] || 0, z[5] || 0, z[6] || 0, R)) : new Date(z[1], E, z[3] || 1, z[4] || 0, z[5] || 0, z[6] || 0, R);
            }
          }
          return new Date(C);
        }(b), this.init();
      }, $.init = function() {
        var b = this.$d;
        this.$y = b.getFullYear(), this.$M = b.getMonth(), this.$D = b.getDate(), this.$W = b.getDay(), this.$H = b.getHours(), this.$m = b.getMinutes(), this.$s = b.getSeconds(), this.$ms = b.getMilliseconds();
      }, $.$utils = function() {
        return L;
      }, $.isValid = function() {
        return this.$d.toString() !== h;
      }, $.isSame = function(b, S) {
        var C = P(b);
        return this.startOf(S) <= C && C <= this.endOf(S);
      }, $.isAfter = function(b, S) {
        return P(b) < this.startOf(S);
      }, $.isBefore = function(b, S) {
        return this.endOf(S) < P(b);
      }, $.$g = function(b, S, C) {
        return L.u(b) ? this[S] : this.set(C, b);
      }, $.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, $.valueOf = function() {
        return this.$d.getTime();
      }, $.startOf = function(b, S) {
        var C = this, V = !!L.u(S) || S, z = L.p(b), E = function(K, se) {
          var de = L.w(C.$u ? Date.UTC(C.$y, se, K) : new Date(C.$y, se, K), C);
          return V ? de : de.endOf(d);
        }, R = function(K, se) {
          return L.w(C.toDate()[K].apply(C.toDate("s"), (V ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(se)), C);
        }, T = this.$W, Y = this.$M, te = this.$D, re = "set" + (this.$u ? "UTC" : "");
        switch (z) {
          case c:
            return V ? E(1, 0) : E(31, 11);
          case p:
            return V ? E(1, Y) : E(0, Y + 1);
          case m:
            var ce = this.$locale().weekStart || 0, fe = (T < ce ? T + 7 : T) - ce;
            return E(V ? te - fe : te + (6 - fe), Y);
          case d:
          case x:
            return R(re + "Hours", 0);
          case u:
            return R(re + "Minutes", 1);
          case l:
            return R(re + "Seconds", 2);
          case a:
            return R(re + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, $.endOf = function(b) {
        return this.startOf(b, !1);
      }, $.$set = function(b, S) {
        var C, V = L.p(b), z = "set" + (this.$u ? "UTC" : ""), E = (C = {}, C[d] = z + "Date", C[x] = z + "Date", C[p] = z + "Month", C[c] = z + "FullYear", C[u] = z + "Hours", C[l] = z + "Minutes", C[a] = z + "Seconds", C[o] = z + "Milliseconds", C)[V], R = V === d ? this.$D + (S - this.$W) : S;
        if (V === p || V === c) {
          var T = this.clone().set(x, 1);
          T.$d[E](R), T.init(), this.$d = T.set(x, Math.min(this.$D, T.daysInMonth())).$d;
        } else E && this.$d[E](R);
        return this.init(), this;
      }, $.set = function(b, S) {
        return this.clone().$set(b, S);
      }, $.get = function(b) {
        return this[L.p(b)]();
      }, $.add = function(b, S) {
        var C, V = this;
        b = Number(b);
        var z = L.p(S), E = function(Y) {
          var te = P(V);
          return L.w(te.date(te.date() + Math.round(Y * b)), V);
        };
        if (z === p) return this.set(p, this.$M + b);
        if (z === c) return this.set(c, this.$y + b);
        if (z === d) return E(1);
        if (z === m) return E(7);
        var R = (C = {}, C[l] = r, C[u] = s, C[a] = t, C)[z] || 1, T = this.$d.getTime() + b * R;
        return L.w(T, this);
      }, $.subtract = function(b, S) {
        return this.add(-1 * b, S);
      }, $.format = function(b) {
        var S = this, C = this.$locale();
        if (!this.isValid()) return C.invalidDate || h;
        var V = b || "YYYY-MM-DDTHH:mm:ssZ", z = L.z(this), E = this.$H, R = this.$m, T = this.$M, Y = C.weekdays, te = C.months, re = C.meridiem, ce = function(se, de, W, X) {
          return se && (se[de] || se(S, V)) || W[de].slice(0, X);
        }, fe = function(se) {
          return L.s(E % 12 || 12, se, "0");
        }, K = re || function(se, de, W) {
          var X = se < 12 ? "AM" : "PM";
          return W ? X.toLowerCase() : X;
        };
        return V.replace(w, function(se, de) {
          return de || function(W) {
            switch (W) {
              case "YY":
                return String(S.$y).slice(-2);
              case "YYYY":
                return L.s(S.$y, 4, "0");
              case "M":
                return T + 1;
              case "MM":
                return L.s(T + 1, 2, "0");
              case "MMM":
                return ce(C.monthsShort, T, te, 3);
              case "MMMM":
                return ce(te, T);
              case "D":
                return S.$D;
              case "DD":
                return L.s(S.$D, 2, "0");
              case "d":
                return String(S.$W);
              case "dd":
                return ce(C.weekdaysMin, S.$W, Y, 2);
              case "ddd":
                return ce(C.weekdaysShort, S.$W, Y, 3);
              case "dddd":
                return Y[S.$W];
              case "H":
                return String(E);
              case "HH":
                return L.s(E, 2, "0");
              case "h":
                return fe(1);
              case "hh":
                return fe(2);
              case "a":
                return K(E, R, !0);
              case "A":
                return K(E, R, !1);
              case "m":
                return String(R);
              case "mm":
                return L.s(R, 2, "0");
              case "s":
                return String(S.$s);
              case "ss":
                return L.s(S.$s, 2, "0");
              case "SSS":
                return L.s(S.$ms, 3, "0");
              case "Z":
                return z;
            }
            return null;
          }(se) || z.replace(":", "");
        });
      }, $.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, $.diff = function(b, S, C) {
        var V, z = this, E = L.p(S), R = P(b), T = (R.utcOffset() - this.utcOffset()) * r, Y = this - R, te = function() {
          return L.m(z, R);
        };
        switch (E) {
          case c:
            V = te() / 12;
            break;
          case p:
            V = te();
            break;
          case f:
            V = te() / 3;
            break;
          case m:
            V = (Y - T) / 6048e5;
            break;
          case d:
            V = (Y - T) / 864e5;
            break;
          case u:
            V = Y / s;
            break;
          case l:
            V = Y / r;
            break;
          case a:
            V = Y / t;
            break;
          default:
            V = Y;
        }
        return C ? V : L.a(V);
      }, $.daysInMonth = function() {
        return this.endOf(p).$D;
      }, $.$locale = function() {
        return A[this.$L];
      }, $.locale = function(b, S) {
        if (!b) return this.$L;
        var C = this.clone(), V = O(b, S, !0);
        return V && (C.$L = V), C;
      }, $.clone = function() {
        return L.w(this.$d, this);
      }, $.toDate = function() {
        return new Date(this.valueOf());
      }, $.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, $.toISOString = function() {
        return this.$d.toISOString();
      }, $.toString = function() {
        return this.$d.toUTCString();
      }, F;
    }(), J = I.prototype;
    return P.prototype = J, [["$ms", o], ["$s", a], ["$m", l], ["$H", u], ["$W", d], ["$M", p], ["$y", c], ["$D", x]].forEach(function(F) {
      J[F[1]] = function($) {
        return this.$g($, F[0], F[1]);
      };
    }), P.extend = function(F, $) {
      return F.$i || (F($, I, P), F.$i = !0), P;
    }, P.locale = O, P.isDayjs = M, P.unix = function(F) {
      return P(1e3 * F);
    }, P.en = A[k], P.Ls = A, P.p = {}, P;
  });
})(jr);
var es = jr.exports;
const me = /* @__PURE__ */ Ot(es);
var _r = { exports: {} };
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(At, function() {
    return function(t, r) {
      r.prototype.isSameOrAfter = function(s, o) {
        return this.isSame(s, o) || this.isAfter(s, o);
      };
    };
  });
})(_r);
var ts = _r.exports;
const rs = /* @__PURE__ */ Ot(ts);
var Nr = { exports: {} };
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(At, function() {
    return function(t, r) {
      r.prototype.isSameOrBefore = function(s, o) {
        return this.isSame(s, o) || this.isBefore(s, o);
      };
    };
  });
})(Nr);
var ns = Nr.exports;
const ss = /* @__PURE__ */ Ot(ns);
me.extend(rs);
me.extend(ss);
const os = Ne(
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
), Mt = Se(
  ({
    value: e,
    onChange: n,
    minDate: t,
    maxDate: r,
    variant: s = "default",
    size: o = "md",
    rounded: a = "md",
    disabled: l = !1,
    errorText: u,
    helperText: d,
    label: m,
    required: p = !1,
    labelPlacement: f = "top",
    fullWidth: c = !1,
    className: x,
    placeholder: h = "Select date",
    leftIcon: v,
    rightIcon: w,
    monthsToShow: y = 1,
    valueFormatter: H,
    rangeStart: N,
    rangeEnd: k,
    closeOnSelect: A = !0,
    calendarFooter: G,
    ...M
  }, O) => {
    const [P, L] = ae(!1), [I, J] = ae(e), [F, $] = ae(e || /* @__PURE__ */ new Date()), b = ye(null), S = ye(null), C = ye(null);
    je(() => {
      J(e || void 0);
    }, [e]);
    const V = () => {
      if (!P || !S.current || !C.current) return;
      const { bottom: K, left: se, width: de } = S.current.getBoundingClientRect(), W = C.current, X = Fe();
      y === 2 ? Object.assign(W.style, {
        position: "fixed",
        left: `${se}px`,
        top: `${K + 4}px`,
        minWidth: "500px",
        width: "auto",
        maxHeight: `${X.innerHeight - K - 8}px`,
        transform: ""
      }) : Object.assign(W.style, {
        position: "fixed",
        left: `${se + de / 2}px`,
        top: `${K + 4}px`,
        width: "320px",
        maxWidth: "100vw",
        maxHeight: `${X.innerHeight - K - 8}px`,
        transform: "translateX(-50%)"
      });
    };
    je(() => {
      const K = Fe(), se = be(), de = () => {
        P && V();
      }, W = () => {
        P && V();
      }, X = (he) => {
        const ie = he.target;
        b.current && !b.current.contains(ie) && C.current && !C.current.contains(ie) && L(!1);
      };
      return P && (V(), K.addEventListener("scroll", de, !0), K.addEventListener("resize", W)), se.addEventListener("click", X), () => {
        K.removeEventListener("scroll", de, !0), K.removeEventListener("resize", W), se.removeEventListener("click", X);
      };
    }, [P]);
    const z = (K) => {
      J(K), n == null || n(K), A !== !1 && L(!1);
    }, E = () => {
      $(me(F).subtract(1, "month").toDate());
    }, R = () => {
      $(me(F).add(1, "month").toDate());
    }, T = (K) => {
      const se = me(K).startOf("month"), de = me(K).endOf("month"), W = [];
      let X = se;
      for (; X.isBefore(de) || X.isSame(de, "day"); )
        W.push(X.toDate()), X = X.add(1, "day");
      return W;
    }, Y = (K) => !!(t && me(K).isBefore(t, "day") || r && me(K).isAfter(r, "day")), te = () => I ? me(I).format("DD MMM YYYY") : "", re = () => {
      if (!P) return null;
      const K = be();
      if (!("body" in K)) return null;
      const se = Array.from({ length: y }).map(
        (de, W) => me(F).add(W, "month").toDate()
      );
      return Ke(
        /* @__PURE__ */ i.jsxs(
          "div",
          {
            ref: C,
            className: "fixed z-[9999] bg-white border border-gray-200 rounded-md shadow-lg",
            children: [
              /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between p-2 border-b border-gray-200", children: [
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    onClick: E,
                    className: "p-1 rounded-full hover:bg-primary-50 active:bg-primary-100 transition-colors duration-200",
                    children: /* @__PURE__ */ i.jsx(Q, { icon: "mdi:chevron-left", className: "w-5 h-5 text-primary" })
                  }
                ),
                /* @__PURE__ */ i.jsx("span", { className: "font-medium text-gray-900", children: y === 1 ? me(F).format("MMMM YYYY") : `${me(F).format("MMMM YYYY")} - ${me(
                  F
                ).add(y - 1, "month").format("MMMM YYYY")}` }),
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    onClick: R,
                    className: "p-1 rounded-full hover:bg-primary-50 active:bg-primary-100 transition-colors duration-200",
                    children: /* @__PURE__ */ i.jsx(Q, { icon: "mdi:chevron-right", className: "w-5 h-5 text-primary" })
                  }
                )
              ] }),
              /* @__PURE__ */ i.jsx(
                "div",
                {
                  className: _(
                    y === 2 ? "flex gap-5 p-2" : "justify-between p-4"
                  ),
                  children: se.map((de, W) => {
                    const X = T(de), he = me(de).startOf("month").day();
                    return /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col", children: [
                      /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-7 gap-y-1 mb-1", children: [
                        ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                          (ie, pe) => {
                            const Ce = pe === 0 || pe === 6;
                            return /* @__PURE__ */ i.jsx(
                              "div",
                              {
                                className: _(
                                  "text-center text-xs font-medium text-neutral-500",
                                  Ce && "text-danger-500"
                                ),
                                children: ie
                              },
                              ie
                            );
                          }
                        ),
                        Array.from({ length: he }).map((ie, pe) => /* @__PURE__ */ i.jsx("div", {}, `empty-${pe}`)),
                        X.map((ie) => {
                          const pe = I && me(ie).isSame(I, "day"), Ce = Y(ie), Pe = me(ie).isSame(de, "month"), Ee = N && k && me(ie).isSameOrAfter(N, "day") && me(ie).isSameOrBefore(k, "day"), st = N && me(ie).isSame(N, "day"), ot = k && me(ie).isSame(k, "day"), Xe = me(ie).day() === 0 || me(ie).day() === 6, Ge = N && k;
                          return /* @__PURE__ */ i.jsx("div", { className: "flex flex-col items-center justify-center", children: /* @__PURE__ */ i.jsx(
                            "div",
                            {
                              className: _(
                                Ee && "rounded-none bg-primary-50",
                                Ge && st && "rounded-l-full",
                                Ge && ot && "rounded-r-full"
                              ),
                              children: /* @__PURE__ */ i.jsx(
                                "button",
                                {
                                  onClick: () => !Ce && z(ie),
                                  disabled: Ce,
                                  className: _(
                                    "p-2 text-sm transition-colors duration-200 w-10 h-10 rounded-full",
                                    Xe && "!text-danger",
                                    pe && "bg-primary-500 !text-white hover:bg-primary-600 active:bg-primary-700",
                                    pe && !Ge && "rounded-full",
                                    !pe && !Ce && "hover:bg-primary-50 active:bg-primary-100",
                                    !Pe && "text-neutral-400",
                                    Ce && "opacity-50 cursor-not-allowed",
                                    // inRange && "bg-primary-50 text-primary-900 rounded-none",
                                    Ge && st && "!bg-primary-500 !text-white !rounded-full",
                                    Ge && ot && "!bg-primary-500 !text-white !rounded-full"
                                  ),
                                  children: me(ie).format("D")
                                },
                                ie.toString()
                              )
                            }
                          ) });
                        })
                      ] }),
                      G
                    ] }, W);
                  })
                }
              )
            ]
          }
        ),
        K.body
      );
    }, ce = /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: _("relative", !c && "inline-block"),
        ref: S,
        children: [
          v && /* @__PURE__ */ i.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500", children: /* @__PURE__ */ i.jsx(Q, { icon: v, className: "w-4 h-4" }) }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              ref: O,
              type: "text",
              value: H ? H() : te(),
              placeholder: h,
              onClick: () => !l && L(!P),
              readOnly: !0,
              className: _(
                os({ variant: s, size: o, rounded: a, fullWidth: c }),
                v && "pl-10",
                w && "pr-10",
                x
              ),
              disabled: l,
              ...M
            }
          ),
          w && /* @__PURE__ */ i.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500", children: /* @__PURE__ */ i.jsx(Q, { icon: w, className: "w-4 h-4" }) })
        ]
      }
    ), fe = /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      u && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger-500", children: u }),
      !u && d && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral-500", children: d })
    ] });
    return f === "left" ? /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: _(c ? "w-full" : "inline-block", x),
        ref: b,
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-start gap-4", children: [
            m && /* @__PURE__ */ i.jsxs("label", { className: "block text-sm text-neutral-900 pt-2", children: [
              m,
              p && /* @__PURE__ */ i.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: _("flex-1", !c && "inline-block"), children: [
              ce,
              fe
            ] })
          ] }),
          re()
        ]
      }
    ) : /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: _(c ? "w-full" : "inline-block", x),
        ref: b,
        children: [
          m && /* @__PURE__ */ i.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
            m,
            p && /* @__PURE__ */ i.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
          ] }),
          ce,
          fe,
          re()
        ]
      }
    );
  }
);
Mt.displayName = "PrimitiveDatePicker";
const is = ({
  mode: e = "single",
  value: n,
  onChange: t,
  monthsToShow: r = 1,
  calendarFooter: s,
  ...o
}) => {
  const [a, l] = ae([
    void 0,
    void 0
  ]);
  if (e === "single") {
    const u = Array.isArray(n) ? n[0] : n;
    return /* @__PURE__ */ i.jsx(
      Mt,
      {
        value: u === null ? void 0 : u,
        onChange: (d) => t == null ? void 0 : t(d),
        monthsToShow: r,
        calendarFooter: s,
        ...o
      }
    );
  }
  if (e === "range") {
    let [u, d] = Array.isArray(n) ? n : a;
    const m = (f) => {
      !u || u && d ? (l([f, void 0]), t == null || t([f, void 0])) : u && !d && (f < u ? (l([f, u]), t == null || t([f, u])) : (l([u, f]), t == null || t([u, f])));
    }, p = () => {
      if (!u) return "";
      const f = (c) => c ? c.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }) : "";
      return u && d ? `${f(u)} - ${f(d)}` : f(u);
    };
    return /* @__PURE__ */ i.jsx(
      Mt,
      {
        value: u,
        onChange: m,
        monthsToShow: r,
        placeholder: o.placeholder || "Select date range",
        valueFormatter: p,
        rangeStart: u,
        rangeEnd: d,
        closeOnSelect: !!d,
        calendarFooter: s,
        ...o
      }
    );
  }
  return null;
};
is.displayName = "DatePicker";
const $r = Se(
  ({ children: e, onClose: n, className: t, ...r }, s) => /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: s,
      className: _("mb-4 flex items-center justify-between", t),
      ...r,
      children: [
        e,
        n && /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: n,
            className: "ml-4 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700",
            "aria-label": "Close dialog",
            children: /* @__PURE__ */ i.jsx(Q, { icon: "mdi:close", className: "h-5 w-5" })
          }
        )
      ]
    }
  )
), as = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-4xl",
  fullscreen: "w-full h-full max-w-none max-h-none rounded-none"
}, ls = Se(
  ({
    isOpen: e,
    onClose: n,
    children: t,
    className: r,
    backdrop: s = "dark",
    header: o,
    closeOnBackdropClick: a = !0,
    size: l = "md",
    ...u
  }, d) => {
    const [m, p] = ae(!1), [f, c] = ae(!1);
    if (je(() => {
      if (e) {
        p(!0), c(!0);
        const w = be();
        "body" in w && (w.body.style.overflow = "hidden");
      } else {
        c(!1);
        const w = setTimeout(() => {
          p(!1);
          const y = be();
          "body" in y && (y.body.style.overflow = "");
        }, 300);
        return () => clearTimeout(w);
      }
    }, [e]), je(() => {
      const w = (y) => {
        y instanceof KeyboardEvent && y.key === "Escape" && n();
      };
      return e && be().addEventListener("keydown", w), () => {
        be().removeEventListener("keydown", w);
      };
    }, [e, n]), !m) return null;
    const x = {
      blur: "backdrop-blur-sm bg-black/30",
      dark: "bg-black/50",
      transparent: "bg-transparent"
    }, h = () => {
      a && n();
    }, v = be();
    return "body" in v ? Ke(
      /* @__PURE__ */ i.jsx(
        "div",
        {
          className: _(
            "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300",
            x[s],
            f ? "opacity-100" : "opacity-0",
            l === "fullscreen" && "items-start"
          ),
          onClick: h,
          children: /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: d,
              className: _(
                "relative transform rounded-lg bg-white p-6 shadow-xl transition-all duration-300",
                as[l],
                f ? "scale-100 opacity-100" : "scale-95 opacity-0",
                r
              ),
              onClick: (w) => w.stopPropagation(),
              ...u,
              children: [
                o && /* @__PURE__ */ i.jsx($r, { onClose: n, children: o }),
                t
              ]
            }
          )
        }
      ),
      v.body
    ) : null;
  }
), us = Se(
  ({ children: e, className: n, ...t }, r) => /* @__PURE__ */ i.jsx(
    "h2",
    {
      ref: r,
      className: _("text-xl font-semibold text-gray-900", n),
      ...t,
      children: e
    }
  )
), cs = Se(
  ({ children: e, className: n, ...t }, r) => /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: r,
      className: _("text-gray-600", n),
      ...t,
      children: e
    }
  )
), ds = Se(
  ({ children: e, className: n, ...t }, r) => /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: r,
      className: _("mt-6 flex justify-end gap-3", n),
      ...t,
      children: e
    }
  )
);
ls.displayName = "Dialog";
us.displayName = "DialogTitle";
cs.displayName = "DialogBody";
ds.displayName = "DialogActions";
$r.displayName = "DialogHeader";
const gs = ({
  orientation: e = "horizontal",
  variant: n = "solid",
  color: t = "neutral",
  size: r = "sm",
  className: s = ""
}) => {
  const o = {
    horizontal: "w-full border-t-0 border-l-0 border-r-0 border-b",
    vertical: "h-full border-l border-t-0 border-r-0 border-b-0"
  }, a = {
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted"
  }, l = {
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
  }, d = Ye(
    "inline-block",
    o[e],
    a[n],
    l[t],
    u[r],
    s
  );
  return /* @__PURE__ */ i.jsx("div", { className: d });
}, Ko = ({
  accept: e = ["*"],
  maxSize: n = 5 * 1024 * 1024,
  // 5MB default
  multiple: t = !1,
  value: r = [],
  onChange: s,
  className: o,
  disabled: a = !1,
  placeholder: l = "Drag and drop files here or click to browse"
}) => {
  const [u, d] = ae(!1), [m, p] = ae(null), f = ye(null), c = Oe((N) => {
    N.preventDefault(), a || d(!0);
  }, [a]), x = Oe((N) => {
    N.preventDefault(), d(!1);
  }, []), h = Oe((N) => N.size > n ? `File size exceeds ${n / (1024 * 1024)}MB limit` : e[0] !== "*" && !e.some((k) => k.startsWith(".") ? N.name.toLowerCase().endsWith(k.toLowerCase()) : N.type.startsWith(k)) ? `File type not allowed. Allowed types: ${e.join(", ")}` : null, [e, n]), v = Oe((N) => {
    if (N.preventDefault(), d(!1), p(null), a) return;
    const k = Array.from(N.dataTransfer.files), A = [], G = [];
    if (k.forEach((M) => {
      const O = h(M);
      O ? G.push(`${M.name}: ${O}`) : A.push(M);
    }), G.length > 0 && p(G.join(`
`)), A.length > 0) {
      const M = t ? [...r, ...A] : A;
      s == null || s(M);
    }
  }, [a, t, s, h, r]), w = Oe((N) => {
    if (p(null), a || !N.target.files) return;
    const k = Array.from(N.target.files), A = [], G = [];
    if (k.forEach((M) => {
      const O = h(M);
      O ? G.push(`${M.name}: ${O}`) : A.push(M);
    }), G.length > 0 && p(G.join(`
`)), A.length > 0) {
      const M = t ? [...r, ...A] : A;
      s == null || s(M);
    }
    f.current && (f.current.value = "");
  }, [a, t, s, h, r]), y = Oe((N) => {
    const k = [...r];
    k.splice(N, 1), s == null || s(k);
  }, [s, r]), H = (N) => N.type.startsWith("image/") ? /* @__PURE__ */ i.jsx(Q, { icon: "mdi:image", className: "w-5 h-5" }) : N.type.startsWith("text/") ? /* @__PURE__ */ i.jsx(Q, { icon: "mdi:file-document", className: "w-5 h-5" }) : /* @__PURE__ */ i.jsx(Q, { icon: "mdi:file", className: "w-5 h-5" });
  return /* @__PURE__ */ i.jsxs("div", { className: oe("w-full", o), children: [
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: oe(
          "border-2 border-dashed rounded-lg p-6 text-center transition-colors",
          "bg-neutral-50",
          "border-neutral-300",
          u && "border-primary bg-primary-50",
          a && "opacity-50 cursor-not-allowed",
          !a && "cursor-pointer hover:border-primary/50"
        ),
        onDragOver: c,
        onDragLeave: x,
        onDrop: v,
        onClick: () => {
          var N;
          return !a && ((N = f.current) == null ? void 0 : N.click());
        },
        children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              ref: f,
              type: "file",
              accept: e.join(","),
              multiple: t,
              onChange: w,
              className: "hidden",
              disabled: a
            }
          ),
          /* @__PURE__ */ i.jsx(Q, { icon: "mdi:upload", className: "w-12 h-12 mx-auto mb-4 text-neutral-400" }),
          /* @__PURE__ */ i.jsx("p", { className: "text-neutral-600", children: l }),
          /* @__PURE__ */ i.jsxs("p", { className: "text-sm text-neutral-500 mt-2", children: [
            "Max file size: ",
            n / (1024 * 1024),
            "MB"
          ] })
        ]
      }
    ),
    m && /* @__PURE__ */ i.jsx("p", { className: "mt-2 text-sm text-danger", children: m }),
    r.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "mt-4 space-y-2", children: r.map((N, k) => /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "flex items-center justify-between p-2 rounded-md bg-neutral-100",
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-center space-x-2", children: [
            H(N),
            /* @__PURE__ */ i.jsx("span", { className: "text-sm text-neutral-700", children: N.name }),
            /* @__PURE__ */ i.jsxs("span", { className: "text-xs text-neutral-500", children: [
              "(",
              (N.size / 1024).toFixed(1),
              " KB)"
            ] })
          ] }),
          !a && /* @__PURE__ */ i.jsx(
            "button",
            {
              onClick: () => y(k),
              className: "p-1 text-neutral-500 hover:text-danger",
              children: /* @__PURE__ */ i.jsx(Q, { icon: "mdi:close", className: "w-4 h-4" })
            }
          )
        ]
      },
      `${N.name}-${k}`
    )) })
  ] });
}, fs = Ne(
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
), Zo = ({
  title: e,
  children: n,
  icon: t,
  variant: r = "default",
  rounded: s = "md",
  showClose: o = !1,
  onClose: a,
  className: l
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
  return /* @__PURE__ */ i.jsxs("div", { className: _(fs({ variant: r, rounded: s }), l), children: [
    t && /* @__PURE__ */ i.jsx(Q, { icon: d(), className: _("h-5 w-5 flex-shrink-0", u()) }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex-1", children: [
      e && /* @__PURE__ */ i.jsx("h3", { className: "text-sm font-medium text-neutral-900", children: e }),
      /* @__PURE__ */ i.jsx("div", { className: "mt-1 text-sm text-neutral-500", children: n })
    ] }),
    o && /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        className: "ml-auto flex-shrink-0 text-neutral-400 hover:text-neutral-500",
        onClick: a,
        children: /* @__PURE__ */ i.jsx(Q, { icon: "mdi:close", className: "h-5 w-5" })
      }
    )
  ] });
}, vt = "select-dropdown-opened", ms = Ne(
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
), Er = Se(
  ({
    className: e,
    variant: n = "default",
    size: t = "md",
    rounded: r = "md",
    options: s,
    label: o,
    error: a = !1,
    helperText: l,
    required: u = !1,
    placeholder: d,
    value: m,
    onChange: p,
    disabled: f = !1,
    position: c = "bottom",
    fullWidth: x = !0,
    children: h,
    leftIcon: v,
    rightIcon: w,
    ...y
  }, H) => {
    const [N, k] = ae(!1), A = ye(null), G = ye(null), O = `select-${De.useId().replace(/:/g, "")}`, P = () => {
      if (N && A.current && G.current) {
        const b = A.current.getBoundingClientRect(), S = G.current, C = Fe(), V = C.innerHeight - b.bottom, z = b.top, R = b.bottom + S.offsetHeight + 4 >= C.innerHeight, T = z > V, Y = R && T;
        c === "bottom" || c === "top" ? (S.style.position = "fixed", S.style.left = `${b.left}px`, S.style.width = `${b.width}px`, c === "bottom" && Y ? (S.style.bottom = `${C.innerHeight - b.top + 4}px`, S.style.top = "auto", S.style.maxHeight = `${z - 8}px`) : c === "bottom" ? (S.style.top = `${b.bottom + 4}px`, S.style.bottom = "auto", S.style.maxHeight = `${V - 8}px`) : c === "top" && !Y ? (S.style.top = `${b.bottom + 4}px`, S.style.bottom = "auto", S.style.maxHeight = `${V - 8}px`) : (S.style.bottom = `${C.innerHeight - b.top + 4}px`, S.style.top = "auto", S.style.maxHeight = `${z - 8}px`)) : c === "left" ? (S.style.position = "fixed", S.style.right = `${C.innerWidth - b.left + 4}px`, S.style.top = `${b.top}px`, S.style.maxHeight = `${C.innerHeight - b.top - 8}px`) : c === "right" && (S.style.position = "fixed", S.style.left = `${b.right + 4}px`, S.style.top = `${b.top}px`, S.style.maxHeight = `${C.innerHeight - b.top - 8}px`);
      }
    };
    je(() => {
      const b = Fe(), S = () => {
        N && P();
      }, C = () => {
        N && P();
      };
      return N && (P(), b.addEventListener("scroll", S, !0), b.addEventListener("resize", C)), () => {
        b.removeEventListener("scroll", S, !0), b.removeEventListener("resize", C);
      };
    }, [N, c]), je(() => {
      const b = be(), S = (V) => {
        V.detail.id !== O && k(!1);
      }, C = (V) => {
        const z = V.target, E = A.current, R = G.current;
        E && R && !E.contains(z) && !R.contains(z) && k(!1);
      };
      return b.addEventListener(vt, S), b.addEventListener("click", C), () => {
        b.removeEventListener(vt, S), b.removeEventListener("click", C);
      };
    }, [O]);
    const L = () => {
      if (f) return;
      if (N) {
        k(!1);
        return;
      }
      be().dispatchEvent(
        new CustomEvent(vt, {
          detail: { id: O }
        })
      ), k(!0);
    }, I = () => {
      if (s) {
        const b = s.find((S) => S.value === m);
        return b == null ? void 0 : b.label;
      }
      if (h) {
        const S = tr.toArray(h).find(
          (C) => pt(C) && "value" in C.props && C.props.value === m
        );
        return pt(S) ? S.props.children : null;
      }
      return null;
    }, J = (b) => {
      f || (p == null || p(b), k(!1));
    }, F = () => s ? s.map((b) => /* @__PURE__ */ i.jsx(
      ut,
      {
        value: b.value,
        disabled: b.disabled,
        selected: b.value === m,
        onClick: () => J(b.value),
        children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
          b.icon,
          b.label
        ] })
      },
      b.value
    )) : h ? tr.map(h, (b) => pt(b) && "value" in b.props ? cn(b, {
      selected: b.props.value === m,
      onClick: () => J(b.props.value)
    }) : null) : null, $ = () => {
      if (!N || f) return null;
      const b = /* @__PURE__ */ i.jsx(
        "div",
        {
          ref: G,
          className: _(
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
          children: F()
        }
      ), S = be();
      return "body" in S ? Ke(b, S.body) : null;
    };
    return /* @__PURE__ */ i.jsxs("div", { className: _(x ? "w-full" : "inline-block"), ref: H, ...y, children: [
      o && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: O,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            o,
            u && /* @__PURE__ */ i.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: _("relative", !x && "inline-block"), children: [
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            id: O,
            ref: A,
            type: "button",
            className: _(
              ms({ variant: a ? "error" : n, size: t, rounded: r, fullWidth: x }),
              "flex items-center justify-between",
              f && "cursor-not-allowed opacity-50",
              v && "pl-10",
              w && "pr-10",
              e
            ),
            onClick: L,
            "aria-haspopup": "listbox",
            "aria-expanded": N,
            "aria-describedby": a ? `${O}-error` : l ? `${O}-helper` : void 0,
            disabled: f,
            children: [
              v && /* @__PURE__ */ i.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500", children: /* @__PURE__ */ i.jsx(Q, { icon: v, className: "w-4 h-4" }) }),
              /* @__PURE__ */ i.jsx("span", { className: "flex items-center text-neutral-500 gap-2 min-w-0 flex-1", children: /* @__PURE__ */ i.jsx("span", { className: "truncate", children: I() || d }) }),
              w ? /* @__PURE__ */ i.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500", children: /* @__PURE__ */ i.jsx(Q, { icon: w, className: "w-4 h-4" }) }) : /* @__PURE__ */ i.jsx(
                Q,
                {
                  icon: "mdi:chevron-down",
                  className: _("transition-transform flex-shrink-0 ml-2", N && "rotate-180")
                }
              )
            ]
          }
        ),
        $()
      ] }),
      a && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger-500", id: `${O}-error`, children: a }),
      !a && l && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral-500", id: `${O}-helper`, children: l })
    ] });
  }
);
Er.displayName = "Select";
const ps = ({
  currentPage: e,
  totalPages: n,
  totalData: t,
  onPageChange: r,
  siblingCount: s = 1,
  className: o,
  perPageOptions: a,
  perPage: l = 10,
  label: u = "",
  onPerPageChange: d
}) => {
  const m = (c, x) => {
    const h = x - c + 1;
    return Array.from({ length: h }, (v, w) => w + c);
  }, f = (() => {
    const c = s * 2 + 3, x = c + 2;
    if (n > x) {
      const h = Math.max(2, e - s), v = Math.min(n - 1, e + s);
      let w = m(h, v);
      const y = h > 2, H = n - v > 1, N = c - (w.length + 1);
      if (y && !H)
        w = [...m(h - N, h - 1), ...w];
      else if (!y && H) {
        const k = m(v + 1, v + N);
        w = [...w, ...k];
      } else y && H && (w = [...w]);
      return [1, ...w, n];
    }
    return m(1, n);
  })();
  return /* @__PURE__ */ i.jsxs(
    "nav",
    {
      className: oe("flex items-center justify-between space-x-1", o),
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: "hidden sm:block text-sm text-neutral-700", children: [
          /* @__PURE__ */ i.jsx("b", { children: `${e} - ${n}` }),
          " dari ",
          t,
          " ",
          u
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
          a && a.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2 mr-4", children: [
            /* @__PURE__ */ i.jsx("span", { className: "text-neutral-700 text-sm", children: "Menampilkan" }),
            /* @__PURE__ */ i.jsx(
              Er,
              {
                value: l == null ? void 0 : l.toString(),
                onChange: (c) => d && d(Number(c)),
                size: "sm",
                className: "w-16",
                fullWidth: !1,
                "aria-label": "Items per page",
                children: a.map((c) => /* @__PURE__ */ i.jsx(ut, { value: c.toString(), children: c }, c))
              }
            ),
            /* @__PURE__ */ i.jsx("span", { className: "text-neutral-700 text-sm", children: "data per halaman" })
          ] }),
          /* @__PURE__ */ i.jsx(
            ke,
            {
              variant: "ghost",
              onClick: () => r(e - 1),
              disabled: e === 1,
              className: oe(
                "px-3 py-1 rounded-md text-sm",
                e === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
              ),
              children: /* @__PURE__ */ i.jsx(Q, { size: "18", icon: "mdi:chevron-left" })
            }
          ),
          f.map((c, x) => {
            const h = c === e, v = typeof c == "string" && c === "...";
            return /* @__PURE__ */ i.jsx(
              ke,
              {
                variant: "ghost",
                onClick: () => !v && r(c),
                className: oe(
                  "px-3 py-1 rounded-md text-sm",
                  h ? "bg-primary text-white hover:bg-primary" : "text-gray-700",
                  v && "cursor-default"
                ),
                children: c
              },
              x
            );
          }),
          /* @__PURE__ */ i.jsx(
            ke,
            {
              variant: "ghost",
              onClick: () => r(e + 1),
              disabled: e === n,
              className: oe(
                "px-3 py-1 rounded-md text-sm",
                e === n ? "text-gray-400 cursor-not-allowed" : "text-gray-700"
              ),
              children: /* @__PURE__ */ i.jsx(Q, { size: "18", icon: "mdi:chevron-right" })
            }
          )
        ] })
      ]
    }
  );
}, Xo = ({
  label: e,
  checked: n = !1,
  disabled: t = !1,
  onChange: r,
  name: s,
  value: o
}) => {
  const a = (l) => {
    r && r(l.target.checked);
  };
  return /* @__PURE__ */ i.jsxs(
    "label",
    {
      className: oe(
        "inline-flex items-center cursor-pointer",
        t && "opacity-60 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "radio",
            className: oe(
              "w-5 h-5 border-2 rounded-full appearance-none",
              "focus:outline-none focus:ring-2 focus:ring-primary/25",
              n ? "border-primary bg-primary" : "border-gray-300 hover:border-primary",
              t && "cursor-not-allowed"
            ),
            checked: n,
            disabled: t,
            onChange: a,
            name: s,
            value: o
          }
        ),
        e && /* @__PURE__ */ i.jsx("span", { className: "ml-2 text-sm text-gray-700 dark:text-gray-300", children: e })
      ]
    }
  );
}, hs = Ne(
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
), xs = ({
  width: e,
  height: n,
  variant: t = "default",
  rounded: r = "md",
  fullWidth: s = !1,
  className: o
}) => /* @__PURE__ */ i.jsx(
  "div",
  {
    className: _(hs({ variant: t, rounded: r, fullWidth: s }), o),
    style: {
      width: !s && typeof e == "number" ? `${e}px` : e,
      height: typeof n == "number" ? `${n}px` : n
    }
  }
), Jo = ({
  min: e = 0,
  max: n = 100,
  step: t = 1,
  value: r,
  defaultValue: s = e,
  onChange: o,
  className: a,
  disabled: l = !1,
  showValue: u = !1,
  marks: d = []
}) => {
  const [m, p] = ae(s), [f, c] = ae(!1), x = ye(null), h = r !== void 0 ? r : m, v = (A) => {
    if (l) return;
    const G = Math.min(Math.max(A, e), n);
    r === void 0 && p(G), o == null || o(G);
  }, w = (A) => {
    l || (c(!0), N(A));
  }, y = (A) => {
    !f || l || N(A);
  }, H = () => {
    c(!1);
  }, N = (A) => {
    if (!x.current) return;
    const G = x.current.getBoundingClientRect(), O = (A.clientX - G.left) / G.width, P = e + (n - e) * O, L = Math.round(P / t) * t;
    v(L);
  };
  je(() => {
    if (f) {
      const A = Fe();
      A.addEventListener("mousemove", y), A.addEventListener("mouseup", H);
    }
    return () => {
      const A = Fe();
      A.removeEventListener("mousemove", y), A.removeEventListener("mouseup", H);
    };
  }, [f]);
  const k = (h - e) / (n - e) * 100;
  return /* @__PURE__ */ i.jsxs("div", { className: oe("relative w-full", a), children: [
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        ref: x,
        className: oe(
          "relative h-2 bg-gray-200 rounded-full cursor-pointer",
          l && "opacity-50 cursor-not-allowed"
        ),
        onMouseDown: w,
        children: [
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "absolute h-full bg-primary rounded-full",
              style: { width: `${k}%` }
            }
          ),
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: oe(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                l && "cursor-not-allowed"
              ),
              style: { left: `${k}%`, transform: "translate(-50%, -50%)" }
            }
          )
        ]
      }
    ),
    d.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "flex justify-between mt-2", children: d.map((A) => /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "text-xs text-gray-500",
        style: { left: `${(A.value - e) / (n - e) * 100}%` },
        children: A.label
      },
      A.value
    )) }),
    u && /* @__PURE__ */ i.jsx("div", { className: "mt-2 text-sm text-gray-600", children: h })
  ] });
}, vs = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8"
}, bs = {
  primary: "text-primary",
  warning: "text-warning-500",
  default: "text-default-400"
}, Qo = ({
  rating: e,
  maxRating: n = 5,
  size: t = "md",
  color: r = "primary",
  readOnly: s = !1,
  onRatingChange: o,
  className: a
}) => {
  const [l, u] = ae(null), d = (c) => {
    s || u(c);
  }, m = () => {
    s || u(null);
  }, p = (c) => {
    !s && o && o(c);
  }, f = l !== null ? l : e;
  return /* @__PURE__ */ i.jsx("div", { className: _("flex items-center gap-1", a), children: [...Array(n)].map((c, x) => {
    const h = x + 1, v = h <= f, w = l !== null && h <= l;
    return /* @__PURE__ */ i.jsx(
      "button",
      {
        className: _(
          "transition-colors duration-200",
          vs[t],
          v || w ? bs[r] : "text-default-200",
          !s && "cursor-pointer"
        ),
        onMouseEnter: () => d(h),
        onMouseLeave: m,
        onClick: () => p(h),
        disabled: s,
        "aria-label": `Rate ${h} out of ${n}`,
        children: /* @__PURE__ */ i.jsx(
          Q,
          {
            icon: v || w ? "mdi:star" : "mdi:star-outline",
            className: "w-full h-full"
          }
        )
      },
      x
    );
  }) });
}, ws = {
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
}, ys = {
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4"
}, ei = ({
  status: e,
  size: n = "md",
  withLabel: t = !1,
  className: r
}) => {
  const { bgColor: s, label: o } = ws[e], a = ys[n];
  return /* @__PURE__ */ i.jsxs("div", { className: _("flex items-center gap-2", r), children: [
    /* @__PURE__ */ i.jsx("div", { className: _("rounded-full animate-pulse", s, a) }),
    t && /* @__PURE__ */ i.jsx("span", { className: "text-sm", children: o })
  ] });
}, Mr = (e, n) => {
  if (n) return n;
  switch (e) {
    case "completed":
      return "mdi:check";
    case "active":
      return "mdi:circle-medium";
    default:
      return "mdi:circle-outline";
  }
}, kr = (e) => {
  switch (e) {
    case "completed":
      return "text-white bg-primary-500 ring-4 ring-primary-50";
    case "active":
      return "text-primary-500 bg-primary-50 ring-4 ring-primary-50";
    default:
      return "text-neutral-400 bg-neutral-50 ring-4 ring-neutral-50";
  }
}, Ss = ({
  steps: e,
  activeStep: n,
  className: t,
  variant: r = "default"
}) => /* @__PURE__ */ i.jsx("div", { className: _("flex flex-row items-center w-full justify-between", t), children: e.map((s, o) => {
  const a = o < n ? "completed" : o === n ? "active" : "pending";
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: "flex items-center flex-1",
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: _(
          "flex flex-col items-center z-10",
          r === "default" ? "gap-4" : "gap-2",
          r === "default" ? "px-5" : "px-3"
        ), children: [
          r === "default" && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: _(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                kr(a)
              ),
              children: /* @__PURE__ */ i.jsx(
                Q,
                {
                  icon: Mr(a, s.icon),
                  className: "h-5 w-5"
                }
              )
            }
          ),
          /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col items-center text-center", children: [
            /* @__PURE__ */ i.jsx(
              "span",
              {
                className: _(
                  "text-sm font-medium",
                  a === "active" ? "text-primary-500" : a === "completed" ? "text-neutral-900" : "text-neutral-500"
                ),
                children: s.label
              }
            ),
            s.description && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-neutral-500", children: s.description })
          ] })
        ] }),
        o < e.length - 1 && /* @__PURE__ */ i.jsx(
          gs,
          {
            className: _(
              "transition-all duration-200",
              o < n ? "bg-primary-500" : "bg-neutral-200"
            )
          }
        )
      ]
    },
    o
  );
}) }), Cs = ({
  steps: e,
  activeStep: n,
  className: t,
  variant: r = "default"
}) => /* @__PURE__ */ i.jsx("div", { className: _("flex flex-col items-start gap-8", t), children: e.map((s, o) => {
  const a = o < n ? "completed" : o === n ? "active" : "pending";
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: "flex flex-row w-full items-center relative",
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: _(
          "flex flex-row items-center z-10",
          r === "default" ? "gap-4" : "gap-2"
        ), children: [
          r === "default" && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: _(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                kr(a)
              ),
              children: /* @__PURE__ */ i.jsx(
                Q,
                {
                  icon: Mr(a, s.icon),
                  className: "h-5 w-5"
                }
              )
            }
          ),
          /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col items-start", children: [
            /* @__PURE__ */ i.jsx(
              "span",
              {
                className: _(
                  "text-sm font-medium",
                  a === "active" ? "text-primary-500" : a === "completed" ? "text-neutral-900" : "text-neutral-500"
                ),
                children: s.label
              }
            ),
            s.description && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-neutral-500", children: s.description })
          ] })
        ] }),
        o < e.length - 1 && /* @__PURE__ */ i.jsx(
          "div",
          {
            className: _(
              "absolute transition-all duration-200",
              r === "default" ? "left-4 w-[1px] top-10 bottom-[-24px]" : "left-0 w-[1px] top-6 bottom-[-24px]",
              o < n ? "bg-primary-500" : "bg-neutral-200"
            )
          }
        )
      ]
    },
    o
  );
}) }), ti = ({
  orientation: e = "horizontal",
  variant: n = "default",
  ...t
}) => e === "vertical" ? /* @__PURE__ */ i.jsx(Cs, { variant: n, ...t }) : /* @__PURE__ */ i.jsx(Ss, { variant: n, ...t }), ri = ({
  label: e,
  checked: n = !1,
  disabled: t = !1,
  onChange: r,
  size: s = "md"
}) => {
  const o = (u) => {
    r && r(u.target.checked);
  }, a = {
    sm: "w-8 h-4",
    md: "w-11 h-6",
    lg: "w-14 h-7"
  }, l = {
    sm: "w-3 h-3",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };
  return /* @__PURE__ */ i.jsxs(
    "label",
    {
      className: oe(
        "inline-flex items-center cursor-pointer",
        t && "opacity-60 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "checkbox",
              className: "sr-only",
              checked: n,
              disabled: t,
              onChange: o
            }
          ),
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: oe(
                "block rounded-full transition-colors duration-200 ease-in-out",
                a[s],
                n ? "bg-primary" : "bg-gray-200 dark:bg-gray-700",
                t && "cursor-not-allowed"
              )
            }
          ),
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: oe(
                "absolute rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out",
                l[s],
                n ? s === "sm" ? "translate-x-4" : s === "md" ? "translate-x-5" : "translate-x-7" : "translate-x-0.5",
                "top-1/2 -translate-y-1/2"
              )
            }
          )
        ] }),
        e && /* @__PURE__ */ i.jsx("span", { className: "ml-3 text-sm text-gray-700 dark:text-gray-300", children: e })
      ]
    }
  );
}, ni = ({
  items: e,
  defaultActiveId: n,
  variant: t = "default",
  size: r = "md",
  className: s,
  tabListClassName: o,
  tabClassName: a,
  contentClassName: l,
  onChange: u
}) => {
  var x, h;
  const [d, m] = ae(n || ((x = e[0]) == null ? void 0 : x.id) || ""), p = Oe((v) => {
    m(v), u == null || u(v);
  }, [u]), f = () => {
    switch (r) {
      case "sm":
        return "text-sm px-3 py-1.5";
      case "lg":
        return "text-lg px-6 py-3";
      default:
        return "text-base px-4 py-2";
    }
  }, c = (v, w) => {
    const y = oe(
      "flex items-center space-x-2 transition-colors",
      "font-medium",
      f(),
      w && "opacity-50 cursor-not-allowed",
      !w && "cursor-pointer"
    );
    switch (t) {
      case "pills":
        return oe(
          y,
          "rounded-full",
          v ? "bg-primary text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        );
      case "underline":
        return oe(
          y,
          "border-b-2",
          v ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
      default:
        return oe(
          y,
          "border-b-2",
          v ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
    }
  };
  return /* @__PURE__ */ i.jsxs("div", { className: oe("w-full", s), children: [
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: oe(
          "flex space-x-1 border-b border-gray-200 dark:border-gray-700",
          t === "pills" && "space-x-2 border-b-0",
          o
        ),
        children: e.map((v) => {
          const w = v.id === d, y = !!v.disabled;
          return /* @__PURE__ */ i.jsxs(
            "button",
            {
              onClick: () => !y && p(v.id),
              disabled: y,
              className: oe(
                c(w, y),
                a
              ),
              children: [
                v.icon && /* @__PURE__ */ i.jsx(
                  Q,
                  {
                    icon: v.icon,
                    className: "w-5 h-5 flex-shrink-0"
                  }
                ),
                /* @__PURE__ */ i.jsx("span", { children: v.label })
              ]
            },
            v.id
          );
        })
      }
    ),
    /* @__PURE__ */ i.jsx("div", { className: oe("mt-4", l), children: (h = e.find((v) => v.id === d)) == null ? void 0 : h.content })
  ] });
}, Rs = ({
  variant: e = "p",
  children: n,
  className: t,
  as: r
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
  }, a = r || ((l) => {
    switch (l) {
      case "display1":
      case "display2":
      case "heading1":
      case "heading2":
      case "heading3":
      case "heading4":
        return "h" + l.slice(-1);
      case "body1":
      case "body2":
      case "subtitle1":
      case "subtitle2":
        return "p";
      case "caption":
      case "value":
        return "span";
      default:
        return l;
    }
  })(e);
  return /* @__PURE__ */ i.jsx(a, { className: _("text-gray-900", s[e], t), children: n });
}, bt = "timepicker-dropdown-opened", js = Ne(
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
), _s = Se(
  ({
    value: e,
    onChange: n,
    use24Hour: t = !1,
    variant: r = "default",
    size: s = "md",
    rounded: o = "md",
    disabled: a = !1,
    errorText: l,
    helperText: u,
    label: d,
    required: m = !1,
    labelPlacement: p = "top",
    fullWidth: f = !1,
    className: c,
    placeholder: x = "Select time",
    ...h
  }, v) => {
    const [w, y] = ae(!1), [H, N] = ae(e || ""), [k, A] = ae(0), [G, M] = ae(0), [O, P] = ae(!0), L = ye(null), I = ye(null), J = ye(null), $ = `timepicker-${De.useId().replace(/:/g, "")}`, b = () => {
      if (!w || !I.current || !J.current) return;
      const R = I.current.getBoundingClientRect(), T = J.current, Y = T.offsetHeight, te = Fe(), re = te.innerHeight - R.bottom, ce = R.top, fe = R.bottom + Y + 4 >= te.innerHeight, K = ce > re;
      fe && K ? (T.style.bottom = `${te.innerHeight - R.top + 4}px`, T.style.top = "auto", T.style.maxHeight = `${ce - 8}px`) : (T.style.top = `${R.bottom + 4}px`, T.style.bottom = "auto", T.style.maxHeight = `${re - 8}px`);
    };
    je(() => {
      const R = Fe(), T = be(), Y = () => {
        w && b();
      }, te = () => {
        w && b();
      }, re = (fe) => {
        fe.detail.id !== $ && y(!1);
      }, ce = (fe) => {
        const K = fe.target;
        L.current && J.current && !L.current.contains(K) && !J.current.contains(K) && y(!1);
      };
      return w && (b(), R.addEventListener("scroll", Y, !0), R.addEventListener("resize", te)), T.addEventListener(bt, re), T.addEventListener("mousedown", ce), () => {
        R.removeEventListener("scroll", Y, !0), R.removeEventListener("resize", te), T.removeEventListener(bt, re), T.removeEventListener("mousedown", ce);
      };
    }, [w, $]);
    const S = () => {
      a || (w || be().dispatchEvent(
        new CustomEvent(bt, {
          detail: { id: $ }
        })
      ), y(!w));
    };
    je(() => {
      if (e) {
        N(e);
        const [R, T] = e.split(":").map(Number);
        t ? A(R) : (A(R % 12 || 12), P(R < 12)), M(T);
      }
    }, [e, t]);
    const C = () => {
      const T = `${(t || O ? k : k + 12).toString().padStart(2, "0")}:${G.toString().padStart(2, "0")}`;
      N(T), n == null || n(T), y(!1);
    }, V = () => t ? Array.from({ length: 24 }, (R, T) => T) : Array.from({ length: 12 }, (R, T) => T + 1), z = () => Array.from({ length: 60 }, (R, T) => T), E = be();
    return "body" in E ? /* @__PURE__ */ i.jsxs("div", { ref: L, className: _("relative", f && "w-full", c), children: [
      d && /* @__PURE__ */ i.jsxs(
        "label",
        {
          className: _(
            "block text-sm font-medium text-gray-700 mb-1",
            p === "left" && "inline-block mr-2"
          ),
          children: [
            d,
            m && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ i.jsx("div", { ref: I, children: /* @__PURE__ */ i.jsx(
        "input",
        {
          ref: v,
          type: "text",
          value: H,
          placeholder: x,
          onClick: S,
          readOnly: !0,
          className: _(js({ variant: r, size: s, rounded: o, fullWidth: f })),
          disabled: a,
          ...h
        }
      ) }),
      w && Ke(
        /* @__PURE__ */ i.jsx(
          "div",
          {
            ref: J,
            className: "fixed z-[9999] min-w-[320px] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            onClick: (R) => R.stopPropagation(),
            children: /* @__PURE__ */ i.jsxs("div", { className: "p-4", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-3 gap-4 text-sm font-medium text-gray-500", children: [
                /* @__PURE__ */ i.jsx("span", { children: "Hours" }),
                /* @__PURE__ */ i.jsx("span", { children: "Minutes" }),
                !t && /* @__PURE__ */ i.jsx("span", { children: "AM/PM" })
              ] }),
              /* @__PURE__ */ i.jsxs("div", { className: "flex justify-between gap-4 mt-2", children: [
                /* @__PURE__ */ i.jsx("div", { className: "w-24 flex flex-col", children: /* @__PURE__ */ i.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ i.jsx("div", { className: "flex flex-col gap-1 py-1", children: V().map((R) => /* @__PURE__ */ i.jsx(
                  ke,
                  {
                    variant: "ghost",
                    onClick: () => A(R),
                    className: _(
                      "px-3 py-1.5 text-sm rounded hover:bg-gray-100 w-full justify-start",
                      k === R && "bg-primary-100 text-primary-700"
                    ),
                    children: R.toString().padStart(2, "0")
                  },
                  R
                )) }) }) }),
                /* @__PURE__ */ i.jsx("div", { className: "w-24 flex flex-col", children: /* @__PURE__ */ i.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ i.jsx("div", { className: "flex flex-col gap-1 py-1", children: z().map((R) => /* @__PURE__ */ i.jsx(
                  ke,
                  {
                    variant: "ghost",
                    onClick: () => M(R),
                    className: _(
                      "px-3 py-1.5 text-sm rounded hover:bg-gray-100 w-full justify-start",
                      G === R && "bg-primary-100 text-primary-700"
                    ),
                    children: R.toString().padStart(2, "0")
                  },
                  R
                )) }) }) }),
                !t && /* @__PURE__ */ i.jsxs("div", { className: "w-24 flex flex-col gap-2", children: [
                  /* @__PURE__ */ i.jsx(
                    ke,
                    {
                      variant: "ghost",
                      onClick: () => P(!0),
                      className: _(
                        "px-3 py-1.5 text-sm rounded hover:bg-gray-100 w-full justify-start",
                        O && "bg-primary-100 text-primary-700"
                      ),
                      children: "AM"
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    ke,
                    {
                      variant: "ghost",
                      onClick: () => P(!1),
                      className: _(
                        "px-3 py-1.5 text-sm rounded hover:bg-gray-100 w-full justify-start",
                        !O && "bg-primary-100 text-primary-700"
                      ),
                      children: "PM"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ i.jsx("div", { className: "mt-4 flex justify-end", children: /* @__PURE__ */ i.jsx(
                ke,
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
      l && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-sm text-danger-600", children: l }),
      u && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-sm text-gray-500", children: u })
    ] }) : null;
  }
);
_s.displayName = "TimePicker";
const Ns = Ne(
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
), $s = Ne(
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
), Es = Se(
  ({
    checked: e = !1,
    onCheckedChange: n,
    variant: t = "primary",
    size: r = "md",
    label: s,
    required: o = !1,
    helperText: a,
    errorText: l,
    error: u = !1,
    className: d,
    ...m
  }, p) => {
    const f = De.useId(), c = `${f}-helper`, x = `${f}-error`;
    return /* @__PURE__ */ i.jsxs("div", { className: "inline-flex flex-col gap-1.5", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            role: "switch",
            "aria-checked": e,
            "data-state": e ? "checked" : "unchecked",
            onClick: () => n == null ? void 0 : n(!e),
            ref: p,
            className: _(Ns({ variant: u ? "danger" : t, size: r }), d),
            "aria-describedby": u ? x : a ? c : void 0,
            "aria-invalid": u,
            "aria-required": o,
            ...m,
            children: /* @__PURE__ */ i.jsx(
              "span",
              {
                "data-state": e ? "checked" : "unchecked",
                className: _(
                  $s({ size: r }),
                  e ? "translate-x-5" : "translate-x-1"
                )
              }
            )
          }
        ),
        s && /* @__PURE__ */ i.jsxs(
          "label",
          {
            htmlFor: f,
            className: "text-sm text-neutral-900",
            children: [
              s,
              o && /* @__PURE__ */ i.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
            ]
          }
        )
      ] }),
      u && l && /* @__PURE__ */ i.jsx("p", { className: "text-xs text-danger-500", id: x, children: l }),
      !u && a && /* @__PURE__ */ i.jsx("p", { className: "text-xs text-neutral-500", id: c, children: a })
    ] });
  }
);
Es.displayName = "Toggle";
const si = ({
  content: e,
  children: n,
  position: t = "top",
  delay: r = 0,
  className: s
}) => {
  const [o, a] = ae(!1), [l, u] = ae({ top: 0, left: 0 }), d = ye(null), m = ye(null);
  let p;
  const f = () => {
    if (!d.current || !m.current) return;
    const h = m.current.getBoundingClientRect(), v = d.current.getBoundingClientRect();
    let w = 0, y = 0;
    switch (t) {
      case "top":
        w = h.top - v.height - 8, y = h.left + (h.width - v.width) / 2;
        break;
      case "bottom":
        w = h.bottom + 8, y = h.left + (h.width - v.width) / 2;
        break;
      case "left":
        w = h.top + (h.height - v.height) / 2, y = h.left - v.width - 8;
        break;
      case "right":
        w = h.top + (h.height - v.height) / 2, y = h.right + 8;
        break;
    }
    u({ top: w, left: y });
  };
  je(() => {
    if (o) {
      f();
      const h = Fe();
      h.addEventListener("scroll", f), h.addEventListener("resize", f);
    }
    return () => {
      const h = Fe();
      h.removeEventListener("scroll", f), h.removeEventListener("resize", f);
    };
  }, [o, t]);
  const c = () => {
    p = setTimeout(() => {
      a(!0);
    }, r);
  }, x = () => {
    clearTimeout(p), a(!1);
  };
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: m,
      className: "relative inline-block",
      onMouseEnter: c,
      onMouseLeave: x,
      children: [
        n,
        o && /* @__PURE__ */ i.jsxs(
          "div",
          {
            ref: d,
            className: oe(
              "absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-md shadow-lg",
              "transition-opacity duration-200",
              s
            ),
            style: {
              top: `${l.top}px`,
              left: `${l.left}px`
            },
            children: [
              e,
              /* @__PURE__ */ i.jsx(
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
}, Ms = Ne(
  "relative overflow-hidden",
  {
    variants: {
      variant: {
        bar: "w-full bg-neutral-100",
        circular: "inline-block"
      },
      color: {
        primary: "text-primary-500",
        secondary: "text-secondary-500",
        success: "text-success-500",
        warning: "text-warning-500",
        danger: "text-danger-500",
        info: "text-info-500"
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
), ks = {
  sm: 24,
  md: 36,
  lg: 48
}, Fs = {
  primary: "bg-primary-500",
  secondary: "bg-secondary-500",
  success: "bg-success-500",
  warning: "bg-warning-500",
  danger: "bg-danger-500",
  info: "bg-info-500"
}, Ps = {
  primary: "#007C99",
  // Tailwind primary-500
  secondary: "#CEEAE7",
  success: "#00B37D",
  warning: "#F59E0B",
  danger: "#EF4444",
  info: "#0EA5E9"
}, Is = De.forwardRef(
  ({
    className: e,
    variant: n = "bar",
    color: t = "primary",
    size: r = "md",
    value: s = 0,
    isIndeterminate: o = !1,
    showValue: a = !1,
    label: l,
    rounded: u = "full",
    icon: d,
    ...m
  }, p) => {
    const f = Math.min(Math.max(s, 0), 100), c = ks[r], x = r === "sm" ? 2 : r === "md" ? 3 : 4, h = (c - x) / 2, v = 2 * Math.PI * h, w = v - f / 100 * v;
    let y = "";
    return n === "loading" ? y = "rounded-full" : u ? y = u === "none" ? "" : `rounded-${u}` : y = "rounded-md", n === "circular" ? /* @__PURE__ */ i.jsxs("div", { className: "inline-flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "relative", style: { width: c, height: c }, children: [
        /* @__PURE__ */ i.jsxs(
          "svg",
          {
            className: _(
              "transform -rotate-90",
              o ? "animate-spin" : ""
            ),
            width: c,
            height: c,
            children: [
              /* @__PURE__ */ i.jsx(
                "circle",
                {
                  strokeWidth: x,
                  stroke: "#e5e7eb",
                  fill: "transparent",
                  r: h,
                  cx: c / 2,
                  cy: c / 2
                }
              ),
              /* @__PURE__ */ i.jsx(
                "circle",
                {
                  className: _(
                    "transition-all duration-300 ease-in-out",
                    o ? "animate-dash" : ""
                  ),
                  strokeWidth: x,
                  strokeDasharray: v,
                  strokeDashoffset: o ? 0 : w,
                  strokeLinecap: "round",
                  stroke: Ps[t],
                  fill: "transparent",
                  r: h,
                  cx: c / 2,
                  cy: c / 2
                }
              )
            ]
          }
        ),
        d && /* @__PURE__ */ i.jsx("span", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ i.jsx(Q, { icon: d, size: c * 0.5 }) }),
        a && !o && !d && /* @__PURE__ */ i.jsxs("div", { className: "absolute inset-0 flex items-center justify-center text-xs font-medium", children: [
          Math.round(f),
          "%"
        ] })
      ] }),
      l && /* @__PURE__ */ i.jsx("span", { className: "text-sm text-neutral-600", children: l })
    ] }) : /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ i.jsx(
        "div",
        {
          ref: p,
          className: _(Ms({ variant: n === "loading" ? "bar" : n, size: r }), y, e),
          role: "progressbar",
          "aria-valuenow": o ? void 0 : f,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          ...m,
          children: /* @__PURE__ */ i.jsx(
            "div",
            {
              className: _(
                "h-full transition-all duration-300 ease-in-out",
                o ? "animate-progress-indeterminate" : "",
                Fs[t],
                y
              ),
              style: {
                width: o ? "100%" : `${f}%`
              }
            }
          )
        }
      ),
      (a || l) && /* @__PURE__ */ i.jsxs("div", { className: "flex justify-between text-xs text-neutral-600", children: [
        l && /* @__PURE__ */ i.jsx("span", { children: l }),
        a && !o && /* @__PURE__ */ i.jsxs("span", { children: [
          Math.round(f),
          "%"
        ] })
      ] })
    ] });
  }
);
Is.displayName = "Progress";
const Ds = Ne("flex items-center text-sm", {
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
}), Vs = Se(
  ({
    className: e,
    variant: n = "default",
    size: t = "md",
    items: r,
    separator: s = /* @__PURE__ */ i.jsx(Q, { icon: "mdi:slash-forward", className: "h-4 w-4 flex-shrink-0" }),
    activeLastItem: o = !0,
    ...a
  }, l) => /* @__PURE__ */ i.jsx(
    "nav",
    {
      ref: l,
      className: _(Ds({ variant: n, size: t }), e),
      "aria-label": "Breadcrumb",
      ...a,
      children: /* @__PURE__ */ i.jsx("ol", { className: "flex flex-wrap items-center gap-1.5", children: r.map((u, d) => {
        const m = d === r.length - 1, p = m && o;
        return /* @__PURE__ */ i.jsxs(
          "li",
          {
            className: _(
              "flex items-center gap-1.5",
              p && "text-primary-500 font-medium"
            ),
            children: [
              u.icon && /* @__PURE__ */ i.jsx(
                Q,
                {
                  icon: u.icon,
                  className: _(
                    "flex-shrink-0",
                    t === "sm" && "h-3.5 w-3.5",
                    t === "md" && "h-4 w-4",
                    t === "lg" && "h-5 w-5"
                  )
                }
              ),
              u.href && !p ? /* @__PURE__ */ i.jsx(
                "a",
                {
                  href: u.href,
                  className: _(
                    "transition-colors duration-200",
                    "hover:text-primary-500 hover:underline focus:outline-none",
                    "focus-visible:text-primary-500 focus-visible:underline",
                    "active:text-primary-600"
                  ),
                  children: /* @__PURE__ */ i.jsx("span", { className: "truncate max-w-[200px] inline-block align-bottom", children: u.label })
                }
              ) : /* @__PURE__ */ i.jsx("span", { className: _(
                "truncate max-w-[200px] inline-block",
                p && "text-primary-500"
              ), children: u.label }),
              !m && /* @__PURE__ */ i.jsx("span", { className: _(
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
Vs.displayName = "Breadcrumbs";
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
function $e(e, n) {
  return (t) => {
    n.setState((r) => ({
      ...r,
      [e]: Te(t, r[e])
    }));
  };
}
function ct(e) {
  return e instanceof Function;
}
function As(e) {
  return Array.isArray(e) && e.every((n) => typeof n == "number");
}
function Os(e, n) {
  const t = [], r = (s) => {
    s.forEach((o) => {
      t.push(o);
      const a = n(o);
      a != null && a.length && r(a);
    });
  };
  return r(e), t;
}
function B(e, n, t) {
  let r = [], s;
  return (o) => {
    let a;
    t.key && t.debug && (a = Date.now());
    const l = e(o);
    if (!(l.length !== r.length || l.some((m, p) => r[p] !== m)))
      return s;
    r = l;
    let d;
    if (t.key && t.debug && (d = Date.now()), s = n(...l), t == null || t.onChange == null || t.onChange(s), t.key && t.debug && t != null && t.debug()) {
      const m = Math.round((Date.now() - a) * 100) / 100, p = Math.round((Date.now() - d) * 100) / 100, f = p / 16, c = (x, h) => {
        for (x = String(x); x.length < h; )
          x = " " + x;
        return x;
      };
      console.info(`%c⏱ ${c(p, 5)} /${c(m, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * f, 120))}deg 100% 31%);`, t == null ? void 0 : t.key);
    }
    return s;
  };
}
function U(e, n, t, r) {
  return {
    debug: () => {
      var s;
      return (s = e == null ? void 0 : e.debugAll) != null ? s : e[n];
    },
    key: process.env.NODE_ENV === "development" && t,
    onChange: r
  };
}
function Ls(e, n, t, r) {
  const s = () => {
    var a;
    return (a = o.getValue()) != null ? a : e.options.renderFallbackValue;
  }, o = {
    id: `${n.id}_${t.id}`,
    row: n,
    column: t,
    getValue: () => n.getValue(r),
    renderValue: s,
    getContext: B(() => [e, t, n, o], (a, l, u, d) => ({
      table: a,
      column: l,
      row: u,
      cell: d,
      getValue: d.getValue,
      renderValue: d.renderValue
    }), U(e.options, "debugCells", "cell.getContext"))
  };
  return e._features.forEach((a) => {
    a.createCell == null || a.createCell(o, t, n, e);
  }, {}), o;
}
function zs(e, n, t, r) {
  var s, o;
  const l = {
    ...e._getDefaultColumnDef(),
    ...n
  }, u = l.accessorKey;
  let d = (s = (o = l.id) != null ? o : u ? typeof String.prototype.replaceAll == "function" ? u.replaceAll(".", "_") : u.replace(/\./g, "_") : void 0) != null ? s : typeof l.header == "string" ? l.header : void 0, m;
  if (l.accessorFn ? m = l.accessorFn : u && (u.includes(".") ? m = (f) => {
    let c = f;
    for (const h of u.split(".")) {
      var x;
      c = (x = c) == null ? void 0 : x[h], process.env.NODE_ENV !== "production" && c === void 0 && console.warn(`"${h}" in deeply nested key "${u}" returned undefined.`);
    }
    return c;
  } : m = (f) => f[l.accessorKey]), !d)
    throw process.env.NODE_ENV !== "production" ? new Error(l.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header") : new Error();
  let p = {
    id: `${String(d)}`,
    accessorFn: m,
    parent: r,
    depth: t,
    columnDef: l,
    columns: [],
    getFlatColumns: B(() => [!0], () => {
      var f;
      return [p, ...(f = p.columns) == null ? void 0 : f.flatMap((c) => c.getFlatColumns())];
    }, U(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: B(() => [e._getOrderColumnsFn()], (f) => {
      var c;
      if ((c = p.columns) != null && c.length) {
        let x = p.columns.flatMap((h) => h.getLeafColumns());
        return f(x);
      }
      return [p];
    }, U(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const f of e._features)
    f.createColumn == null || f.createColumn(p, e);
  return p;
}
const we = "debugHeaders";
function ur(e, n, t) {
  var r;
  let o = {
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
      const a = [], l = (u) => {
        u.subHeaders && u.subHeaders.length && u.subHeaders.map(l), a.push(u);
      };
      return l(o), a;
    },
    getContext: () => ({
      table: e,
      header: o,
      column: n
    })
  };
  return e._features.forEach((a) => {
    a.createHeader == null || a.createHeader(o, e);
  }), o;
}
const Ts = {
  createTable: (e) => {
    e.getHeaderGroups = B(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, r, s) => {
      var o, a;
      const l = (o = r == null ? void 0 : r.map((p) => t.find((f) => f.id === p)).filter(Boolean)) != null ? o : [], u = (a = s == null ? void 0 : s.map((p) => t.find((f) => f.id === p)).filter(Boolean)) != null ? a : [], d = t.filter((p) => !(r != null && r.includes(p.id)) && !(s != null && s.includes(p.id)));
      return it(n, [...l, ...d, ...u], e);
    }, U(e.options, we, "getHeaderGroups")), e.getCenterHeaderGroups = B(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, r, s) => (t = t.filter((o) => !(r != null && r.includes(o.id)) && !(s != null && s.includes(o.id))), it(n, t, e, "center")), U(e.options, we, "getCenterHeaderGroups")), e.getLeftHeaderGroups = B(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (n, t, r) => {
      var s;
      const o = (s = r == null ? void 0 : r.map((a) => t.find((l) => l.id === a)).filter(Boolean)) != null ? s : [];
      return it(n, o, e, "left");
    }, U(e.options, we, "getLeftHeaderGroups")), e.getRightHeaderGroups = B(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (n, t, r) => {
      var s;
      const o = (s = r == null ? void 0 : r.map((a) => t.find((l) => l.id === a)).filter(Boolean)) != null ? s : [];
      return it(n, o, e, "right");
    }, U(e.options, we, "getRightHeaderGroups")), e.getFooterGroups = B(() => [e.getHeaderGroups()], (n) => [...n].reverse(), U(e.options, we, "getFooterGroups")), e.getLeftFooterGroups = B(() => [e.getLeftHeaderGroups()], (n) => [...n].reverse(), U(e.options, we, "getLeftFooterGroups")), e.getCenterFooterGroups = B(() => [e.getCenterHeaderGroups()], (n) => [...n].reverse(), U(e.options, we, "getCenterFooterGroups")), e.getRightFooterGroups = B(() => [e.getRightHeaderGroups()], (n) => [...n].reverse(), U(e.options, we, "getRightFooterGroups")), e.getFlatHeaders = B(() => [e.getHeaderGroups()], (n) => n.map((t) => t.headers).flat(), U(e.options, we, "getFlatHeaders")), e.getLeftFlatHeaders = B(() => [e.getLeftHeaderGroups()], (n) => n.map((t) => t.headers).flat(), U(e.options, we, "getLeftFlatHeaders")), e.getCenterFlatHeaders = B(() => [e.getCenterHeaderGroups()], (n) => n.map((t) => t.headers).flat(), U(e.options, we, "getCenterFlatHeaders")), e.getRightFlatHeaders = B(() => [e.getRightHeaderGroups()], (n) => n.map((t) => t.headers).flat(), U(e.options, we, "getRightFlatHeaders")), e.getCenterLeafHeaders = B(() => [e.getCenterFlatHeaders()], (n) => n.filter((t) => {
      var r;
      return !((r = t.subHeaders) != null && r.length);
    }), U(e.options, we, "getCenterLeafHeaders")), e.getLeftLeafHeaders = B(() => [e.getLeftFlatHeaders()], (n) => n.filter((t) => {
      var r;
      return !((r = t.subHeaders) != null && r.length);
    }), U(e.options, we, "getLeftLeafHeaders")), e.getRightLeafHeaders = B(() => [e.getRightFlatHeaders()], (n) => n.filter((t) => {
      var r;
      return !((r = t.subHeaders) != null && r.length);
    }), U(e.options, we, "getRightLeafHeaders")), e.getLeafHeaders = B(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (n, t, r) => {
      var s, o, a, l, u, d;
      return [...(s = (o = n[0]) == null ? void 0 : o.headers) != null ? s : [], ...(a = (l = t[0]) == null ? void 0 : l.headers) != null ? a : [], ...(u = (d = r[0]) == null ? void 0 : d.headers) != null ? u : []].map((m) => m.getLeafHeaders()).flat();
    }, U(e.options, we, "getLeafHeaders"));
  }
};
function it(e, n, t, r) {
  var s, o;
  let a = 0;
  const l = function(f, c) {
    c === void 0 && (c = 1), a = Math.max(a, c), f.filter((x) => x.getIsVisible()).forEach((x) => {
      var h;
      (h = x.columns) != null && h.length && l(x.columns, c + 1);
    }, 0);
  };
  l(e);
  let u = [];
  const d = (f, c) => {
    const x = {
      depth: c,
      id: [r, `${c}`].filter(Boolean).join("_"),
      headers: []
    }, h = [];
    f.forEach((v) => {
      const w = [...h].reverse()[0], y = v.column.depth === x.depth;
      let H, N = !1;
      if (y && v.column.parent ? H = v.column.parent : (H = v.column, N = !0), w && (w == null ? void 0 : w.column) === H)
        w.subHeaders.push(v);
      else {
        const k = ur(t, H, {
          id: [r, c, H.id, v == null ? void 0 : v.id].filter(Boolean).join("_"),
          isPlaceholder: N,
          placeholderId: N ? `${h.filter((A) => A.column === H).length}` : void 0,
          depth: c,
          index: h.length
        });
        k.subHeaders.push(v), h.push(k);
      }
      x.headers.push(v), v.headerGroup = x;
    }), u.push(x), c > 0 && d(h, c - 1);
  }, m = n.map((f, c) => ur(t, f, {
    depth: a,
    index: c
  }));
  d(m, a - 1), u.reverse();
  const p = (f) => f.filter((x) => x.column.getIsVisible()).map((x) => {
    let h = 0, v = 0, w = [0];
    x.subHeaders && x.subHeaders.length ? (w = [], p(x.subHeaders).forEach((H) => {
      let {
        colSpan: N,
        rowSpan: k
      } = H;
      h += N, w.push(k);
    })) : h = 1;
    const y = Math.min(...w);
    return v = v + y, x.colSpan = h, x.rowSpan = v, {
      colSpan: h,
      rowSpan: v
    };
  });
  return p((s = (o = u[0]) == null ? void 0 : o.headers) != null ? s : []), u;
}
const Hs = (e, n, t, r, s, o, a) => {
  let l = {
    id: n,
    index: r,
    original: t,
    depth: s,
    parentId: a,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (u) => {
      if (l._valuesCache.hasOwnProperty(u))
        return l._valuesCache[u];
      const d = e.getColumn(u);
      if (d != null && d.accessorFn)
        return l._valuesCache[u] = d.accessorFn(l.original, r), l._valuesCache[u];
    },
    getUniqueValues: (u) => {
      if (l._uniqueValuesCache.hasOwnProperty(u))
        return l._uniqueValuesCache[u];
      const d = e.getColumn(u);
      if (d != null && d.accessorFn)
        return d.columnDef.getUniqueValues ? (l._uniqueValuesCache[u] = d.columnDef.getUniqueValues(l.original, r), l._uniqueValuesCache[u]) : (l._uniqueValuesCache[u] = [l.getValue(u)], l._uniqueValuesCache[u]);
    },
    renderValue: (u) => {
      var d;
      return (d = l.getValue(u)) != null ? d : e.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => Os(l.subRows, (u) => u.subRows),
    getParentRow: () => l.parentId ? e.getRow(l.parentId, !0) : void 0,
    getParentRows: () => {
      let u = [], d = l;
      for (; ; ) {
        const m = d.getParentRow();
        if (!m) break;
        u.push(m), d = m;
      }
      return u.reverse();
    },
    getAllCells: B(() => [e.getAllLeafColumns()], (u) => u.map((d) => Ls(e, l, d, d.id)), U(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: B(() => [l.getAllCells()], (u) => u.reduce((d, m) => (d[m.column.id] = m, d), {}), U(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let u = 0; u < e._features.length; u++) {
    const d = e._features[u];
    d == null || d.createRow == null || d.createRow(l, e);
  }
  return l;
}, Gs = {
  createColumn: (e, n) => {
    e._getFacetedRowModel = n.options.getFacetedRowModel && n.options.getFacetedRowModel(n, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : n.getPreFilteredRowModel(), e._getFacetedUniqueValues = n.options.getFacetedUniqueValues && n.options.getFacetedUniqueValues(n, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = n.options.getFacetedMinMaxValues && n.options.getFacetedMinMaxValues(n, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, Fr = (e, n, t) => {
  var r, s;
  const o = t == null || (r = t.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((s = e.getValue(n)) == null || (s = s.toString()) == null || (s = s.toLowerCase()) == null) && s.includes(o));
};
Fr.autoRemove = (e) => Ie(e);
const Pr = (e, n, t) => {
  var r;
  return !!(!((r = e.getValue(n)) == null || (r = r.toString()) == null) && r.includes(t));
};
Pr.autoRemove = (e) => Ie(e);
const Ir = (e, n, t) => {
  var r;
  return ((r = e.getValue(n)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (t == null ? void 0 : t.toLowerCase());
};
Ir.autoRemove = (e) => Ie(e);
const Dr = (e, n, t) => {
  var r;
  return (r = e.getValue(n)) == null ? void 0 : r.includes(t);
};
Dr.autoRemove = (e) => Ie(e);
const Vr = (e, n, t) => !t.some((r) => {
  var s;
  return !((s = e.getValue(n)) != null && s.includes(r));
});
Vr.autoRemove = (e) => Ie(e) || !(e != null && e.length);
const Ar = (e, n, t) => t.some((r) => {
  var s;
  return (s = e.getValue(n)) == null ? void 0 : s.includes(r);
});
Ar.autoRemove = (e) => Ie(e) || !(e != null && e.length);
const Or = (e, n, t) => e.getValue(n) === t;
Or.autoRemove = (e) => Ie(e);
const Lr = (e, n, t) => e.getValue(n) == t;
Lr.autoRemove = (e) => Ie(e);
const zt = (e, n, t) => {
  let [r, s] = t;
  const o = e.getValue(n);
  return o >= r && o <= s;
};
zt.resolveFilterValue = (e) => {
  let [n, t] = e, r = typeof n != "number" ? parseFloat(n) : n, s = typeof t != "number" ? parseFloat(t) : t, o = n === null || Number.isNaN(r) ? -1 / 0 : r, a = t === null || Number.isNaN(s) ? 1 / 0 : s;
  if (o > a) {
    const l = o;
    o = a, a = l;
  }
  return [o, a];
};
zt.autoRemove = (e) => Ie(e) || Ie(e[0]) && Ie(e[1]);
const Ae = {
  includesString: Fr,
  includesStringSensitive: Pr,
  equalsString: Ir,
  arrIncludes: Dr,
  arrIncludesAll: Vr,
  arrIncludesSome: Ar,
  equals: Or,
  weakEquals: Lr,
  inNumberRange: zt
};
function Ie(e) {
  return e == null || e === "";
}
const Bs = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: $e("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, n) => {
    e.getAutoFilterFn = () => {
      const t = n.getCoreRowModel().flatRows[0], r = t == null ? void 0 : t.getValue(e.id);
      return typeof r == "string" ? Ae.includesString : typeof r == "number" ? Ae.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? Ae.equals : Array.isArray(r) ? Ae.arrIncludes : Ae.weakEquals;
    }, e.getFilterFn = () => {
      var t, r;
      return ct(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (t = (r = n.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? t : Ae[e.columnDef.filterFn]
      );
    }, e.getCanFilter = () => {
      var t, r, s;
      return ((t = e.columnDef.enableColumnFilter) != null ? t : !0) && ((r = n.options.enableColumnFilters) != null ? r : !0) && ((s = n.options.enableFilters) != null ? s : !0) && !!e.accessorFn;
    }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
      var t;
      return (t = n.getState().columnFilters) == null || (t = t.find((r) => r.id === e.id)) == null ? void 0 : t.value;
    }, e.getFilterIndex = () => {
      var t, r;
      return (t = (r = n.getState().columnFilters) == null ? void 0 : r.findIndex((s) => s.id === e.id)) != null ? t : -1;
    }, e.setFilterValue = (t) => {
      n.setColumnFilters((r) => {
        const s = e.getFilterFn(), o = r == null ? void 0 : r.find((m) => m.id === e.id), a = Te(t, o ? o.value : void 0);
        if (cr(s, a, e)) {
          var l;
          return (l = r == null ? void 0 : r.filter((m) => m.id !== e.id)) != null ? l : [];
        }
        const u = {
          id: e.id,
          value: a
        };
        if (o) {
          var d;
          return (d = r == null ? void 0 : r.map((m) => m.id === e.id ? u : m)) != null ? d : [];
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
      const t = e.getAllLeafColumns(), r = (s) => {
        var o;
        return (o = Te(n, s)) == null ? void 0 : o.filter((a) => {
          const l = t.find((u) => u.id === a.id);
          if (l) {
            const u = l.getFilterFn();
            if (cr(u, a.value, l))
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
function cr(e, n, t) {
  return (e && e.autoRemove ? e.autoRemove(n, t) : !1) || typeof n > "u" || typeof n == "string" && !n;
}
const Us = (e, n, t) => t.reduce((r, s) => {
  const o = s.getValue(e);
  return r + (typeof o == "number" ? o : 0);
}, 0), Ws = (e, n, t) => {
  let r;
  return t.forEach((s) => {
    const o = s.getValue(e);
    o != null && (r > o || r === void 0 && o >= o) && (r = o);
  }), r;
}, qs = (e, n, t) => {
  let r;
  return t.forEach((s) => {
    const o = s.getValue(e);
    o != null && (r < o || r === void 0 && o >= o) && (r = o);
  }), r;
}, Ys = (e, n, t) => {
  let r, s;
  return t.forEach((o) => {
    const a = o.getValue(e);
    a != null && (r === void 0 ? a >= a && (r = s = a) : (r > a && (r = a), s < a && (s = a)));
  }), [r, s];
}, Ks = (e, n) => {
  let t = 0, r = 0;
  if (n.forEach((s) => {
    let o = s.getValue(e);
    o != null && (o = +o) >= o && (++t, r += o);
  }), t) return r / t;
}, Zs = (e, n) => {
  if (!n.length)
    return;
  const t = n.map((o) => o.getValue(e));
  if (!As(t))
    return;
  if (t.length === 1)
    return t[0];
  const r = Math.floor(t.length / 2), s = t.sort((o, a) => o - a);
  return t.length % 2 !== 0 ? s[r] : (s[r - 1] + s[r]) / 2;
}, Xs = (e, n) => Array.from(new Set(n.map((t) => t.getValue(e))).values()), Js = (e, n) => new Set(n.map((t) => t.getValue(e))).size, Qs = (e, n) => n.length, wt = {
  sum: Us,
  min: Ws,
  max: qs,
  extent: Ys,
  mean: Ks,
  median: Zs,
  unique: Xs,
  uniqueCount: Js,
  count: Qs
}, eo = {
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
    onGroupingChange: $e("grouping", e),
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
        return wt.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return wt.extent;
    }, e.getAggregationFn = () => {
      var t, r;
      if (!e)
        throw new Error();
      return ct(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (t = (r = n.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? t : wt[e.columnDef.aggregationFn];
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
      var s;
      return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((s = t.subRows) != null && s.length);
    };
  }
};
function to(e, n, t) {
  if (!(n != null && n.length) || !t)
    return e;
  const r = e.filter((o) => !n.includes(o.id));
  return t === "remove" ? r : [...n.map((o) => e.find((a) => a.id === o)).filter(Boolean), ...r];
}
const ro = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: $e("columnOrder", e)
  }),
  createColumn: (e, n) => {
    e.getIndex = B((t) => [nt(n, t)], (t) => t.findIndex((r) => r.id === e.id), U(n.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (t) => {
      var r;
      return ((r = nt(n, t)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (t) => {
      var r;
      const s = nt(n, t);
      return ((r = s[s.length - 1]) == null ? void 0 : r.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (n) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(n), e.resetColumnOrder = (n) => {
      var t;
      e.setColumnOrder(n ? [] : (t = e.initialState.columnOrder) != null ? t : []);
    }, e._getOrderColumnsFn = B(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (n, t, r) => (s) => {
      let o = [];
      if (!(n != null && n.length))
        o = s;
      else {
        const a = [...n], l = [...s];
        for (; l.length && a.length; ) {
          const u = a.shift(), d = l.findIndex((m) => m.id === u);
          d > -1 && o.push(l.splice(d, 1)[0]);
        }
        o = [...o, ...l];
      }
      return to(o, t, r);
    }, U(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, yt = () => ({
  left: [],
  right: []
}), no = {
  getInitialState: (e) => ({
    columnPinning: yt(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: $e("columnPinning", e)
  }),
  createColumn: (e, n) => {
    e.pin = (t) => {
      const r = e.getLeafColumns().map((s) => s.id).filter(Boolean);
      n.setColumnPinning((s) => {
        var o, a;
        if (t === "right") {
          var l, u;
          return {
            left: ((l = s == null ? void 0 : s.left) != null ? l : []).filter((p) => !(r != null && r.includes(p))),
            right: [...((u = s == null ? void 0 : s.right) != null ? u : []).filter((p) => !(r != null && r.includes(p))), ...r]
          };
        }
        if (t === "left") {
          var d, m;
          return {
            left: [...((d = s == null ? void 0 : s.left) != null ? d : []).filter((p) => !(r != null && r.includes(p))), ...r],
            right: ((m = s == null ? void 0 : s.right) != null ? m : []).filter((p) => !(r != null && r.includes(p)))
          };
        }
        return {
          left: ((o = s == null ? void 0 : s.left) != null ? o : []).filter((p) => !(r != null && r.includes(p))),
          right: ((a = s == null ? void 0 : s.right) != null ? a : []).filter((p) => !(r != null && r.includes(p)))
        };
      });
    }, e.getCanPin = () => e.getLeafColumns().some((r) => {
      var s, o, a;
      return ((s = r.columnDef.enablePinning) != null ? s : !0) && ((o = (a = n.options.enableColumnPinning) != null ? a : n.options.enablePinning) != null ? o : !0);
    }), e.getIsPinned = () => {
      const t = e.getLeafColumns().map((l) => l.id), {
        left: r,
        right: s
      } = n.getState().columnPinning, o = t.some((l) => r == null ? void 0 : r.includes(l)), a = t.some((l) => s == null ? void 0 : s.includes(l));
      return o ? "left" : a ? "right" : !1;
    }, e.getPinnedIndex = () => {
      var t, r;
      const s = e.getIsPinned();
      return s ? (t = (r = n.getState().columnPinning) == null || (r = r[s]) == null ? void 0 : r.indexOf(e.id)) != null ? t : -1 : 0;
    };
  },
  createRow: (e, n) => {
    e.getCenterVisibleCells = B(() => [e._getAllVisibleCells(), n.getState().columnPinning.left, n.getState().columnPinning.right], (t, r, s) => {
      const o = [...r ?? [], ...s ?? []];
      return t.filter((a) => !o.includes(a.column.id));
    }, U(n.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = B(() => [e._getAllVisibleCells(), n.getState().columnPinning.left], (t, r) => (r ?? []).map((o) => t.find((a) => a.column.id === o)).filter(Boolean).map((o) => ({
      ...o,
      position: "left"
    })), U(n.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = B(() => [e._getAllVisibleCells(), n.getState().columnPinning.right], (t, r) => (r ?? []).map((o) => t.find((a) => a.column.id === o)).filter(Boolean).map((o) => ({
      ...o,
      position: "right"
    })), U(n.options, "debugRows", "getRightVisibleCells"));
  },
  createTable: (e) => {
    e.setColumnPinning = (n) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(n), e.resetColumnPinning = (n) => {
      var t, r;
      return e.setColumnPinning(n ? yt() : (t = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? t : yt());
    }, e.getIsSomeColumnsPinned = (n) => {
      var t;
      const r = e.getState().columnPinning;
      if (!n) {
        var s, o;
        return !!((s = r.left) != null && s.length || (o = r.right) != null && o.length);
      }
      return !!((t = r[n]) != null && t.length);
    }, e.getLeftLeafColumns = B(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (n, t) => (t ?? []).map((r) => n.find((s) => s.id === r)).filter(Boolean), U(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = B(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (n, t) => (t ?? []).map((r) => n.find((s) => s.id === r)).filter(Boolean), U(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = B(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, r) => {
      const s = [...t ?? [], ...r ?? []];
      return n.filter((o) => !s.includes(o.id));
    }, U(e.options, "debugColumns", "getCenterLeafColumns"));
  }
};
function so(e) {
  return e || (typeof document < "u" ? document : null);
}
const at = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, St = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), oo = {
  getDefaultColumnDef: () => at,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: St(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: $e("columnSizing", e),
    onColumnSizingInfoChange: $e("columnSizingInfo", e)
  }),
  createColumn: (e, n) => {
    e.getSize = () => {
      var t, r, s;
      const o = n.getState().columnSizing[e.id];
      return Math.min(Math.max((t = e.columnDef.minSize) != null ? t : at.minSize, (r = o ?? e.columnDef.size) != null ? r : at.size), (s = e.columnDef.maxSize) != null ? s : at.maxSize);
    }, e.getStart = B((t) => [t, nt(n, t), n.getState().columnSizing], (t, r) => r.slice(0, e.getIndex(t)).reduce((s, o) => s + o.getSize(), 0), U(n.options, "debugColumns", "getStart")), e.getAfter = B((t) => [t, nt(n, t), n.getState().columnSizing], (t, r) => r.slice(e.getIndex(t) + 1).reduce((s, o) => s + o.getSize(), 0), U(n.options, "debugColumns", "getAfter")), e.resetSize = () => {
      n.setColumnSizing((t) => {
        let {
          [e.id]: r,
          ...s
        } = t;
        return s;
      });
    }, e.getCanResize = () => {
      var t, r;
      return ((t = e.columnDef.enableResizing) != null ? t : !0) && ((r = n.options.enableColumnResizing) != null ? r : !0);
    }, e.getIsResizing = () => n.getState().columnSizingInfo.isResizingColumn === e.id;
  },
  createHeader: (e, n) => {
    e.getSize = () => {
      let t = 0;
      const r = (s) => {
        if (s.subHeaders.length)
          s.subHeaders.forEach(r);
        else {
          var o;
          t += (o = s.column.getSize()) != null ? o : 0;
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
      const r = n.getColumn(e.column.id), s = r == null ? void 0 : r.getCanResize();
      return (o) => {
        if (!r || !s || (o.persist == null || o.persist(), Ct(o) && o.touches && o.touches.length > 1))
          return;
        const a = e.getSize(), l = e ? e.getLeafHeaders().map((w) => [w.column.id, w.column.getSize()]) : [[r.id, r.getSize()]], u = Ct(o) ? Math.round(o.touches[0].clientX) : o.clientX, d = {}, m = (w, y) => {
          typeof y == "number" && (n.setColumnSizingInfo((H) => {
            var N, k;
            const A = n.options.columnResizeDirection === "rtl" ? -1 : 1, G = (y - ((N = H == null ? void 0 : H.startOffset) != null ? N : 0)) * A, M = Math.max(G / ((k = H == null ? void 0 : H.startSize) != null ? k : 0), -0.999999);
            return H.columnSizingStart.forEach((O) => {
              let [P, L] = O;
              d[P] = Math.round(Math.max(L + L * M, 0) * 100) / 100;
            }), {
              ...H,
              deltaOffset: G,
              deltaPercentage: M
            };
          }), (n.options.columnResizeMode === "onChange" || w === "end") && n.setColumnSizing((H) => ({
            ...H,
            ...d
          })));
        }, p = (w) => m("move", w), f = (w) => {
          m("end", w), n.setColumnSizingInfo((y) => ({
            ...y,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, c = so(t), x = {
          moveHandler: (w) => p(w.clientX),
          upHandler: (w) => {
            c == null || c.removeEventListener("mousemove", x.moveHandler), c == null || c.removeEventListener("mouseup", x.upHandler), f(w.clientX);
          }
        }, h = {
          moveHandler: (w) => (w.cancelable && (w.preventDefault(), w.stopPropagation()), p(w.touches[0].clientX), !1),
          upHandler: (w) => {
            var y;
            c == null || c.removeEventListener("touchmove", h.moveHandler), c == null || c.removeEventListener("touchend", h.upHandler), w.cancelable && (w.preventDefault(), w.stopPropagation()), f((y = w.touches[0]) == null ? void 0 : y.clientX);
          }
        }, v = io() ? {
          passive: !1
        } : !1;
        Ct(o) ? (c == null || c.addEventListener("touchmove", h.moveHandler, v), c == null || c.addEventListener("touchend", h.upHandler, v)) : (c == null || c.addEventListener("mousemove", x.moveHandler, v), c == null || c.addEventListener("mouseup", x.upHandler, v)), n.setColumnSizingInfo((w) => ({
          ...w,
          startOffset: u,
          startSize: a,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart: l,
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
      e.setColumnSizingInfo(n ? St() : (t = e.initialState.columnSizingInfo) != null ? t : St());
    }, e.getTotalSize = () => {
      var n, t;
      return (n = (t = e.getHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((r, s) => r + s.getSize(), 0)) != null ? n : 0;
    }, e.getLeftTotalSize = () => {
      var n, t;
      return (n = (t = e.getLeftHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((r, s) => r + s.getSize(), 0)) != null ? n : 0;
    }, e.getCenterTotalSize = () => {
      var n, t;
      return (n = (t = e.getCenterHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((r, s) => r + s.getSize(), 0)) != null ? n : 0;
    }, e.getRightTotalSize = () => {
      var n, t;
      return (n = (t = e.getRightHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((r, s) => r + s.getSize(), 0)) != null ? n : 0;
    };
  }
};
let lt = null;
function io() {
  if (typeof lt == "boolean") return lt;
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
  return lt = e, lt;
}
function Ct(e) {
  return e.type === "touchstart";
}
const ao = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: $e("columnVisibility", e)
  }),
  createColumn: (e, n) => {
    e.toggleVisibility = (t) => {
      e.getCanHide() && n.setColumnVisibility((r) => ({
        ...r,
        [e.id]: t ?? !e.getIsVisible()
      }));
    }, e.getIsVisible = () => {
      var t, r;
      const s = e.columns;
      return (t = s.length ? s.some((o) => o.getIsVisible()) : (r = n.getState().columnVisibility) == null ? void 0 : r[e.id]) != null ? t : !0;
    }, e.getCanHide = () => {
      var t, r;
      return ((t = e.columnDef.enableHiding) != null ? t : !0) && ((r = n.options.enableHiding) != null ? r : !0);
    }, e.getToggleVisibilityHandler = () => (t) => {
      e.toggleVisibility == null || e.toggleVisibility(t.target.checked);
    };
  },
  createRow: (e, n) => {
    e._getAllVisibleCells = B(() => [e.getAllCells(), n.getState().columnVisibility], (t) => t.filter((r) => r.column.getIsVisible()), U(n.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = B(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (t, r, s) => [...t, ...r, ...s], U(n.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const n = (t, r) => B(() => [r(), r().filter((s) => s.getIsVisible()).map((s) => s.id).join("_")], (s) => s.filter((o) => o.getIsVisible == null ? void 0 : o.getIsVisible()), U(e.options, "debugColumns", t));
    e.getVisibleFlatColumns = n("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = n("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = n("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = n("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = n("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (t) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(t), e.resetColumnVisibility = (t) => {
      var r;
      e.setColumnVisibility(t ? {} : (r = e.initialState.columnVisibility) != null ? r : {});
    }, e.toggleAllColumnsVisible = (t) => {
      var r;
      t = (r = t) != null ? r : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((s, o) => ({
        ...s,
        [o.id]: t || !(o.getCanHide != null && o.getCanHide())
      }), {}));
    }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((t) => !(t.getIsVisible != null && t.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((t) => t.getIsVisible == null ? void 0 : t.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (t) => {
      var r;
      e.toggleAllColumnsVisible((r = t.target) == null ? void 0 : r.checked);
    };
  }
};
function nt(e, n) {
  return n ? n === "center" ? e.getCenterVisibleLeafColumns() : n === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const lo = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, uo = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: $e("globalFilter", e),
    globalFilterFn: "auto",
    getColumnCanGlobalFilter: (n) => {
      var t;
      const r = (t = e.getCoreRowModel().flatRows[0]) == null || (t = t._getAllCellsByColumnId()[n.id]) == null ? void 0 : t.getValue();
      return typeof r == "string" || typeof r == "number";
    }
  }),
  createColumn: (e, n) => {
    e.getCanGlobalFilter = () => {
      var t, r, s, o;
      return ((t = e.columnDef.enableGlobalFilter) != null ? t : !0) && ((r = n.options.enableGlobalFilter) != null ? r : !0) && ((s = n.options.enableFilters) != null ? s : !0) && ((o = n.options.getColumnCanGlobalFilter == null ? void 0 : n.options.getColumnCanGlobalFilter(e)) != null ? o : !0) && !!e.accessorFn;
    };
  },
  createTable: (e) => {
    e.getGlobalAutoFilterFn = () => Ae.includesString, e.getGlobalFilterFn = () => {
      var n, t;
      const {
        globalFilterFn: r
      } = e.options;
      return ct(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (n = (t = e.options.filterFns) == null ? void 0 : t[r]) != null ? n : Ae[r];
    }, e.setGlobalFilter = (n) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(n);
    }, e.resetGlobalFilter = (n) => {
      e.setGlobalFilter(n ? void 0 : e.initialState.globalFilter);
    };
  }
}, co = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: $e("expanded", e),
    paginateExpandedRows: !0
  }),
  createTable: (e) => {
    let n = !1, t = !1;
    e._autoResetExpanded = () => {
      var r, s;
      if (!n) {
        e._queue(() => {
          n = !0;
        });
        return;
      }
      if ((r = (s = e.options.autoResetAll) != null ? s : e.options.autoResetExpanded) != null ? r : !e.options.manualExpanding) {
        if (t) return;
        t = !0, e._queue(() => {
          e.resetExpanded(), t = !1;
        });
      }
    }, e.setExpanded = (r) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(r), e.toggleAllRowsExpanded = (r) => {
      r ?? !e.getIsAllRowsExpanded() ? e.setExpanded(!0) : e.setExpanded({});
    }, e.resetExpanded = (r) => {
      var s, o;
      e.setExpanded(r ? {} : (s = (o = e.initialState) == null ? void 0 : o.expanded) != null ? s : {});
    }, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((r) => r.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (r) => {
      r.persist == null || r.persist(), e.toggleAllRowsExpanded();
    }, e.getIsSomeRowsExpanded = () => {
      const r = e.getState().expanded;
      return r === !0 || Object.values(r).some(Boolean);
    }, e.getIsAllRowsExpanded = () => {
      const r = e.getState().expanded;
      return typeof r == "boolean" ? r === !0 : !(!Object.keys(r).length || e.getRowModel().flatRows.some((s) => !s.getIsExpanded()));
    }, e.getExpandedDepth = () => {
      let r = 0;
      return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((o) => {
        const a = o.split(".");
        r = Math.max(r, a.length);
      }), r;
    }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
  },
  createRow: (e, n) => {
    e.toggleExpanded = (t) => {
      n.setExpanded((r) => {
        var s;
        const o = r === !0 ? !0 : !!(r != null && r[e.id]);
        let a = {};
        if (r === !0 ? Object.keys(n.getRowModel().rowsById).forEach((l) => {
          a[l] = !0;
        }) : a = r, t = (s = t) != null ? s : !o, !o && t)
          return {
            ...a,
            [e.id]: !0
          };
        if (o && !t) {
          const {
            [e.id]: l,
            ...u
          } = a;
          return u;
        }
        return r;
      });
    }, e.getIsExpanded = () => {
      var t;
      const r = n.getState().expanded;
      return !!((t = n.options.getIsRowExpanded == null ? void 0 : n.options.getIsRowExpanded(e)) != null ? t : r === !0 || r != null && r[e.id]);
    }, e.getCanExpand = () => {
      var t, r, s;
      return (t = n.options.getRowCanExpand == null ? void 0 : n.options.getRowCanExpand(e)) != null ? t : ((r = n.options.enableExpanding) != null ? r : !0) && !!((s = e.subRows) != null && s.length);
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
}, kt = 0, Ft = 10, Rt = () => ({
  pageIndex: kt,
  pageSize: Ft
}), go = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...Rt(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: $e("pagination", e)
  }),
  createTable: (e) => {
    let n = !1, t = !1;
    e._autoResetPageIndex = () => {
      var r, s;
      if (!n) {
        e._queue(() => {
          n = !0;
        });
        return;
      }
      if ((r = (s = e.options.autoResetAll) != null ? s : e.options.autoResetPageIndex) != null ? r : !e.options.manualPagination) {
        if (t) return;
        t = !0, e._queue(() => {
          e.resetPageIndex(), t = !1;
        });
      }
    }, e.setPagination = (r) => {
      const s = (o) => Te(r, o);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(s);
    }, e.resetPagination = (r) => {
      var s;
      e.setPagination(r ? Rt() : (s = e.initialState.pagination) != null ? s : Rt());
    }, e.setPageIndex = (r) => {
      e.setPagination((s) => {
        let o = Te(r, s.pageIndex);
        const a = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return o = Math.max(0, Math.min(o, a)), {
          ...s,
          pageIndex: o
        };
      });
    }, e.resetPageIndex = (r) => {
      var s, o;
      e.setPageIndex(r ? kt : (s = (o = e.initialState) == null || (o = o.pagination) == null ? void 0 : o.pageIndex) != null ? s : kt);
    }, e.resetPageSize = (r) => {
      var s, o;
      e.setPageSize(r ? Ft : (s = (o = e.initialState) == null || (o = o.pagination) == null ? void 0 : o.pageSize) != null ? s : Ft);
    }, e.setPageSize = (r) => {
      e.setPagination((s) => {
        const o = Math.max(1, Te(r, s.pageSize)), a = s.pageSize * s.pageIndex, l = Math.floor(a / o);
        return {
          ...s,
          pageIndex: l,
          pageSize: o
        };
      });
    }, e.setPageCount = (r) => e.setPagination((s) => {
      var o;
      let a = Te(r, (o = e.options.pageCount) != null ? o : -1);
      return typeof a == "number" && (a = Math.max(-1, a)), {
        ...s,
        pageCount: a
      };
    }), e.getPageOptions = B(() => [e.getPageCount()], (r) => {
      let s = [];
      return r && r > 0 && (s = [...new Array(r)].fill(null).map((o, a) => a)), s;
    }, U(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
      const {
        pageIndex: r
      } = e.getState().pagination, s = e.getPageCount();
      return s === -1 ? !0 : s === 0 ? !1 : r < s - 1;
    }, e.previousPage = () => e.setPageIndex((r) => r - 1), e.nextPage = () => e.setPageIndex((r) => r + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
      var r;
      return (r = e.options.pageCount) != null ? r : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
    }, e.getRowCount = () => {
      var r;
      return (r = e.options.rowCount) != null ? r : e.getPrePaginationRowModel().rows.length;
    };
  }
}, jt = () => ({
  top: [],
  bottom: []
}), fo = {
  getInitialState: (e) => ({
    rowPinning: jt(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: $e("rowPinning", e)
  }),
  createRow: (e, n) => {
    e.pin = (t, r, s) => {
      const o = r ? e.getLeafRows().map((u) => {
        let {
          id: d
        } = u;
        return d;
      }) : [], a = s ? e.getParentRows().map((u) => {
        let {
          id: d
        } = u;
        return d;
      }) : [], l = /* @__PURE__ */ new Set([...a, e.id, ...o]);
      n.setRowPinning((u) => {
        var d, m;
        if (t === "bottom") {
          var p, f;
          return {
            top: ((p = u == null ? void 0 : u.top) != null ? p : []).filter((h) => !(l != null && l.has(h))),
            bottom: [...((f = u == null ? void 0 : u.bottom) != null ? f : []).filter((h) => !(l != null && l.has(h))), ...Array.from(l)]
          };
        }
        if (t === "top") {
          var c, x;
          return {
            top: [...((c = u == null ? void 0 : u.top) != null ? c : []).filter((h) => !(l != null && l.has(h))), ...Array.from(l)],
            bottom: ((x = u == null ? void 0 : u.bottom) != null ? x : []).filter((h) => !(l != null && l.has(h)))
          };
        }
        return {
          top: ((d = u == null ? void 0 : u.top) != null ? d : []).filter((h) => !(l != null && l.has(h))),
          bottom: ((m = u == null ? void 0 : u.bottom) != null ? m : []).filter((h) => !(l != null && l.has(h)))
        };
      });
    }, e.getCanPin = () => {
      var t;
      const {
        enableRowPinning: r,
        enablePinning: s
      } = n.options;
      return typeof r == "function" ? r(e) : (t = r ?? s) != null ? t : !0;
    }, e.getIsPinned = () => {
      const t = [e.id], {
        top: r,
        bottom: s
      } = n.getState().rowPinning, o = t.some((l) => r == null ? void 0 : r.includes(l)), a = t.some((l) => s == null ? void 0 : s.includes(l));
      return o ? "top" : a ? "bottom" : !1;
    }, e.getPinnedIndex = () => {
      var t, r;
      const s = e.getIsPinned();
      if (!s) return -1;
      const o = (t = s === "top" ? n.getTopRows() : n.getBottomRows()) == null ? void 0 : t.map((a) => {
        let {
          id: l
        } = a;
        return l;
      });
      return (r = o == null ? void 0 : o.indexOf(e.id)) != null ? r : -1;
    };
  },
  createTable: (e) => {
    e.setRowPinning = (n) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(n), e.resetRowPinning = (n) => {
      var t, r;
      return e.setRowPinning(n ? jt() : (t = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? t : jt());
    }, e.getIsSomeRowsPinned = (n) => {
      var t;
      const r = e.getState().rowPinning;
      if (!n) {
        var s, o;
        return !!((s = r.top) != null && s.length || (o = r.bottom) != null && o.length);
      }
      return !!((t = r[n]) != null && t.length);
    }, e._getPinnedRows = (n, t, r) => {
      var s;
      return ((s = e.options.keepPinnedRows) == null || s ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (t ?? []).map((a) => {
          const l = e.getRow(a, !0);
          return l.getIsAllParentsExpanded() ? l : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (t ?? []).map((a) => n.find((l) => l.id === a))
      )).filter(Boolean).map((a) => ({
        ...a,
        position: r
      }));
    }, e.getTopRows = B(() => [e.getRowModel().rows, e.getState().rowPinning.top], (n, t) => e._getPinnedRows(n, t, "top"), U(e.options, "debugRows", "getTopRows")), e.getBottomRows = B(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (n, t) => e._getPinnedRows(n, t, "bottom"), U(e.options, "debugRows", "getBottomRows")), e.getCenterRows = B(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (n, t, r) => {
      const s = /* @__PURE__ */ new Set([...t ?? [], ...r ?? []]);
      return n.filter((o) => !s.has(o.id));
    }, U(e.options, "debugRows", "getCenterRows"));
  }
}, mo = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: $e("rowSelection", e),
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
        }, s = e.getPreGroupedRowModel().flatRows;
        return n ? s.forEach((o) => {
          o.getCanSelect() && (r[o.id] = !0);
        }) : s.forEach((o) => {
          delete r[o.id];
        }), r;
      });
    }, e.toggleAllPageRowsSelected = (n) => e.setRowSelection((t) => {
      const r = typeof n < "u" ? n : !e.getIsAllPageRowsSelected(), s = {
        ...t
      };
      return e.getRowModel().rows.forEach((o) => {
        Pt(s, o.id, r, !0, e);
      }), s;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = B(() => [e.getState().rowSelection, e.getCoreRowModel()], (n, t) => Object.keys(n).length ? _t(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, U(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = B(() => [e.getState().rowSelection, e.getFilteredRowModel()], (n, t) => Object.keys(n).length ? _t(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, U(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = B(() => [e.getState().rowSelection, e.getSortedRowModel()], (n, t) => Object.keys(n).length ? _t(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, U(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
      const n = e.getFilteredRowModel().flatRows, {
        rowSelection: t
      } = e.getState();
      let r = !!(n.length && Object.keys(t).length);
      return r && n.some((s) => s.getCanSelect() && !t[s.id]) && (r = !1), r;
    }, e.getIsAllPageRowsSelected = () => {
      const n = e.getPaginationRowModel().flatRows.filter((s) => s.getCanSelect()), {
        rowSelection: t
      } = e.getState();
      let r = !!n.length;
      return r && n.some((s) => !t[s.id]) && (r = !1), r;
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
      const s = e.getIsSelected();
      n.setRowSelection((o) => {
        var a;
        if (t = typeof t < "u" ? t : !s, e.getCanSelect() && s === t)
          return o;
        const l = {
          ...o
        };
        return Pt(l, e.id, t, (a = r == null ? void 0 : r.selectChildren) != null ? a : !0, n), l;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return Tt(e, t);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return It(e, t) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return It(e, t) === "all";
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
        var s;
        t && e.toggleSelected((s = r.target) == null ? void 0 : s.checked);
      };
    };
  }
}, Pt = (e, n, t, r, s) => {
  var o;
  const a = s.getRow(n, !0);
  t ? (a.getCanMultiSelect() || Object.keys(e).forEach((l) => delete e[l]), a.getCanSelect() && (e[n] = !0)) : delete e[n], r && (o = a.subRows) != null && o.length && a.getCanSelectSubRows() && a.subRows.forEach((l) => Pt(e, l.id, t, r, s));
};
function _t(e, n) {
  const t = e.getState().rowSelection, r = [], s = {}, o = function(a, l) {
    return a.map((u) => {
      var d;
      const m = Tt(u, t);
      if (m && (r.push(u), s[u.id] = u), (d = u.subRows) != null && d.length && (u = {
        ...u,
        subRows: o(u.subRows)
      }), m)
        return u;
    }).filter(Boolean);
  };
  return {
    rows: o(n.rows),
    flatRows: r,
    rowsById: s
  };
}
function Tt(e, n) {
  var t;
  return (t = n[e.id]) != null ? t : !1;
}
function It(e, n, t) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let s = !0, o = !1;
  return e.subRows.forEach((a) => {
    if (!(o && !s) && (a.getCanSelect() && (Tt(a, n) ? o = !0 : s = !1), a.subRows && a.subRows.length)) {
      const l = It(a, n);
      l === "all" ? o = !0 : (l === "some" && (o = !0), s = !1);
    }
  }), s ? "all" : o ? "some" : !1;
}
const Dt = /([0-9]+)/gm, po = (e, n, t) => zr(He(e.getValue(t)).toLowerCase(), He(n.getValue(t)).toLowerCase()), ho = (e, n, t) => zr(He(e.getValue(t)), He(n.getValue(t))), xo = (e, n, t) => Ht(He(e.getValue(t)).toLowerCase(), He(n.getValue(t)).toLowerCase()), vo = (e, n, t) => Ht(He(e.getValue(t)), He(n.getValue(t))), bo = (e, n, t) => {
  const r = e.getValue(t), s = n.getValue(t);
  return r > s ? 1 : r < s ? -1 : 0;
}, wo = (e, n, t) => Ht(e.getValue(t), n.getValue(t));
function Ht(e, n) {
  return e === n ? 0 : e > n ? 1 : -1;
}
function He(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function zr(e, n) {
  const t = e.split(Dt).filter(Boolean), r = n.split(Dt).filter(Boolean);
  for (; t.length && r.length; ) {
    const s = t.shift(), o = r.shift(), a = parseInt(s, 10), l = parseInt(o, 10), u = [a, l].sort();
    if (isNaN(u[0])) {
      if (s > o)
        return 1;
      if (o > s)
        return -1;
      continue;
    }
    if (isNaN(u[1]))
      return isNaN(a) ? -1 : 1;
    if (a > l)
      return 1;
    if (l > a)
      return -1;
  }
  return t.length - r.length;
}
const rt = {
  alphanumeric: po,
  alphanumericCaseSensitive: ho,
  text: xo,
  textCaseSensitive: vo,
  datetime: bo,
  basic: wo
}, yo = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: $e("sorting", e),
    isMultiSortEvent: (n) => n.shiftKey
  }),
  createColumn: (e, n) => {
    e.getAutoSortingFn = () => {
      const t = n.getFilteredRowModel().flatRows.slice(10);
      let r = !1;
      for (const s of t) {
        const o = s == null ? void 0 : s.getValue(e.id);
        if (Object.prototype.toString.call(o) === "[object Date]")
          return rt.datetime;
        if (typeof o == "string" && (r = !0, o.split(Dt).length > 1))
          return rt.alphanumeric;
      }
      return r ? rt.text : rt.basic;
    }, e.getAutoSortDir = () => {
      const t = n.getFilteredRowModel().flatRows[0];
      return typeof (t == null ? void 0 : t.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var t, r;
      if (!e)
        throw new Error();
      return ct(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (t = (r = n.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? t : rt[e.columnDef.sortingFn];
    }, e.toggleSorting = (t, r) => {
      const s = e.getNextSortingOrder(), o = typeof t < "u" && t !== null;
      n.setSorting((a) => {
        const l = a == null ? void 0 : a.find((c) => c.id === e.id), u = a == null ? void 0 : a.findIndex((c) => c.id === e.id);
        let d = [], m, p = o ? t : s === "desc";
        if (a != null && a.length && e.getCanMultiSort() && r ? l ? m = "toggle" : m = "add" : a != null && a.length && u !== a.length - 1 ? m = "replace" : l ? m = "toggle" : m = "replace", m === "toggle" && (o || s || (m = "remove")), m === "add") {
          var f;
          d = [...a, {
            id: e.id,
            desc: p
          }], d.splice(0, d.length - ((f = n.options.maxMultiSortColCount) != null ? f : Number.MAX_SAFE_INTEGER));
        } else m === "toggle" ? d = a.map((c) => c.id === e.id ? {
          ...c,
          desc: p
        } : c) : m === "remove" ? d = a.filter((c) => c.id !== e.id) : d = [{
          id: e.id,
          desc: p
        }];
        return d;
      });
    }, e.getFirstSortDir = () => {
      var t, r;
      return ((t = (r = e.columnDef.sortDescFirst) != null ? r : n.options.sortDescFirst) != null ? t : e.getAutoSortDir() === "desc") ? "desc" : "asc";
    }, e.getNextSortingOrder = (t) => {
      var r, s;
      const o = e.getFirstSortDir(), a = e.getIsSorted();
      return a ? a !== o && ((r = n.options.enableSortingRemoval) == null || r) && // If enableSortRemove, enable in general
      (!(t && (s = n.options.enableMultiRemove) != null) || s) ? !1 : a === "desc" ? "asc" : "desc" : o;
    }, e.getCanSort = () => {
      var t, r;
      return ((t = e.columnDef.enableSorting) != null ? t : !0) && ((r = n.options.enableSorting) != null ? r : !0) && !!e.accessorFn;
    }, e.getCanMultiSort = () => {
      var t, r;
      return (t = (r = e.columnDef.enableMultiSort) != null ? r : n.options.enableMultiSort) != null ? t : !!e.accessorFn;
    }, e.getIsSorted = () => {
      var t;
      const r = (t = n.getState().sorting) == null ? void 0 : t.find((s) => s.id === e.id);
      return r ? r.desc ? "desc" : "asc" : !1;
    }, e.getSortIndex = () => {
      var t, r;
      return (t = (r = n.getState().sorting) == null ? void 0 : r.findIndex((s) => s.id === e.id)) != null ? t : -1;
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
}, So = [
  Ts,
  ao,
  ro,
  no,
  Gs,
  Bs,
  lo,
  //depends on ColumnFaceting
  uo,
  //depends on ColumnFiltering
  yo,
  eo,
  //depends on RowSorting
  co,
  go,
  fo,
  mo,
  oo
];
function Co(e) {
  var n, t;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const r = [...So, ...(n = e._features) != null ? n : []];
  let s = {
    _features: r
  };
  const o = s._features.reduce((f, c) => Object.assign(f, c.getDefaultOptions == null ? void 0 : c.getDefaultOptions(s)), {}), a = (f) => s.options.mergeOptions ? s.options.mergeOptions(o, f) : {
    ...o,
    ...f
  };
  let u = {
    ...{},
    ...(t = e.initialState) != null ? t : {}
  };
  s._features.forEach((f) => {
    var c;
    u = (c = f.getInitialState == null ? void 0 : f.getInitialState(u)) != null ? c : u;
  });
  const d = [];
  let m = !1;
  const p = {
    _features: r,
    options: {
      ...o,
      ...e
    },
    initialState: u,
    _queue: (f) => {
      d.push(f), m || (m = !0, Promise.resolve().then(() => {
        for (; d.length; )
          d.shift()();
        m = !1;
      }).catch((c) => setTimeout(() => {
        throw c;
      })));
    },
    reset: () => {
      s.setState(s.initialState);
    },
    setOptions: (f) => {
      const c = Te(f, s.options);
      s.options = a(c);
    },
    getState: () => s.options.state,
    setState: (f) => {
      s.options.onStateChange == null || s.options.onStateChange(f);
    },
    _getRowId: (f, c, x) => {
      var h;
      return (h = s.options.getRowId == null ? void 0 : s.options.getRowId(f, c, x)) != null ? h : `${x ? [x.id, c].join(".") : c}`;
    },
    getCoreRowModel: () => (s._getCoreRowModel || (s._getCoreRowModel = s.options.getCoreRowModel(s)), s._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => s.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (f, c) => {
      let x = (c ? s.getPrePaginationRowModel() : s.getRowModel()).rowsById[f];
      if (!x && (x = s.getCoreRowModel().rowsById[f], !x))
        throw process.env.NODE_ENV !== "production" ? new Error(`getRow could not find row with ID: ${f}`) : new Error();
      return x;
    },
    _getDefaultColumnDef: B(() => [s.options.defaultColumn], (f) => {
      var c;
      return f = (c = f) != null ? c : {}, {
        header: (x) => {
          const h = x.header.column.columnDef;
          return h.accessorKey ? h.accessorKey : h.accessorFn ? h.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (x) => {
          var h, v;
          return (h = (v = x.renderValue()) == null || v.toString == null ? void 0 : v.toString()) != null ? h : null;
        },
        ...s._features.reduce((x, h) => Object.assign(x, h.getDefaultColumnDef == null ? void 0 : h.getDefaultColumnDef()), {}),
        ...f
      };
    }, U(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => s.options.columns,
    getAllColumns: B(() => [s._getColumnDefs()], (f) => {
      const c = function(x, h, v) {
        return v === void 0 && (v = 0), x.map((w) => {
          const y = zs(s, w, v, h), H = w;
          return y.columns = H.columns ? c(H.columns, y, v + 1) : [], y;
        });
      };
      return c(f);
    }, U(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: B(() => [s.getAllColumns()], (f) => f.flatMap((c) => c.getFlatColumns()), U(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: B(() => [s.getAllFlatColumns()], (f) => f.reduce((c, x) => (c[x.id] = x, c), {}), U(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: B(() => [s.getAllColumns(), s._getOrderColumnsFn()], (f, c) => {
      let x = f.flatMap((h) => h.getLeafColumns());
      return c(x);
    }, U(e, "debugColumns", "getAllLeafColumns")),
    getColumn: (f) => {
      const c = s._getAllFlatColumnsById()[f];
      return process.env.NODE_ENV !== "production" && !c && console.error(`[Table] Column with id '${f}' does not exist.`), c;
    }
  };
  Object.assign(s, p);
  for (let f = 0; f < s._features.length; f++) {
    const c = s._features[f];
    c == null || c.createTable == null || c.createTable(s);
  }
  return s;
}
function Ro() {
  return (e) => B(() => [e.options.data], (n) => {
    const t = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(s, o, a) {
      o === void 0 && (o = 0);
      const l = [];
      for (let d = 0; d < s.length; d++) {
        const m = Hs(e, e._getRowId(s[d], d, a), s[d], d, o, void 0, a == null ? void 0 : a.id);
        if (t.flatRows.push(m), t.rowsById[m.id] = m, l.push(m), e.options.getSubRows) {
          var u;
          m.originalSubRows = e.options.getSubRows(s[d], d), (u = m.originalSubRows) != null && u.length && (m.subRows = r(m.originalSubRows, o + 1, m));
        }
      }
      return l;
    };
    return t.rows = r(n), t;
  }, U(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function jo(e) {
  const n = [], t = (r) => {
    var s;
    n.push(r), (s = r.subRows) != null && s.length && r.getIsExpanded() && r.subRows.forEach(t);
  };
  return e.rows.forEach(t), {
    rows: n,
    flatRows: e.flatRows,
    rowsById: e.rowsById
  };
}
function _o(e) {
  return (n) => B(() => [n.getState().pagination, n.getPrePaginationRowModel(), n.options.paginateExpandedRows ? void 0 : n.getState().expanded], (t, r) => {
    if (!r.rows.length)
      return r;
    const {
      pageSize: s,
      pageIndex: o
    } = t;
    let {
      rows: a,
      flatRows: l,
      rowsById: u
    } = r;
    const d = s * o, m = d + s;
    a = a.slice(d, m);
    let p;
    n.options.paginateExpandedRows ? p = {
      rows: a,
      flatRows: l,
      rowsById: u
    } : p = jo({
      rows: a,
      flatRows: l,
      rowsById: u
    }), p.flatRows = [];
    const f = (c) => {
      p.flatRows.push(c), c.subRows.length && c.subRows.forEach(f);
    };
    return p.rows.forEach(f), p;
  }, U(n.options, "debugTable", "getPaginationRowModel"));
}
function No() {
  return (e) => B(() => [e.getState().sorting, e.getPreSortedRowModel()], (n, t) => {
    if (!t.rows.length || !(n != null && n.length))
      return t;
    const r = e.getState().sorting, s = [], o = r.filter((u) => {
      var d;
      return (d = e.getColumn(u.id)) == null ? void 0 : d.getCanSort();
    }), a = {};
    o.forEach((u) => {
      const d = e.getColumn(u.id);
      d && (a[u.id] = {
        sortUndefined: d.columnDef.sortUndefined,
        invertSorting: d.columnDef.invertSorting,
        sortingFn: d.getSortingFn()
      });
    });
    const l = (u) => {
      const d = u.map((m) => ({
        ...m
      }));
      return d.sort((m, p) => {
        for (let c = 0; c < o.length; c += 1) {
          var f;
          const x = o[c], h = a[x.id], v = h.sortUndefined, w = (f = x == null ? void 0 : x.desc) != null ? f : !1;
          let y = 0;
          if (v) {
            const H = m.getValue(x.id), N = p.getValue(x.id), k = H === void 0, A = N === void 0;
            if (k || A) {
              if (v === "first") return k ? -1 : 1;
              if (v === "last") return k ? 1 : -1;
              y = k && A ? 0 : k ? v : -v;
            }
          }
          if (y === 0 && (y = h.sortingFn(m, p, x.id)), y !== 0)
            return w && (y *= -1), h.invertSorting && (y *= -1), y;
        }
        return m.index - p.index;
      }), d.forEach((m) => {
        var p;
        s.push(m), (p = m.subRows) != null && p.length && (m.subRows = l(m.subRows));
      }), d;
    };
    return {
      rows: l(t.rows),
      flatRows: s,
      rowsById: t.rowsById
    };
  }, U(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
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
function dr(e, n) {
  return e ? $o(e) ? /* @__PURE__ */ Nt.createElement(e, n) : e : null;
}
function $o(e) {
  return Eo(e) || typeof e == "function" || Mo(e);
}
function Eo(e) {
  return typeof e == "function" && (() => {
    const n = Object.getPrototypeOf(e);
    return n.prototype && n.prototype.isReactComponent;
  })();
}
function Mo(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function ko(e) {
  const n = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [t] = Nt.useState(() => ({
    current: Co(n)
  })), [r, s] = Nt.useState(() => t.current.initialState);
  return t.current.setOptions((o) => ({
    ...o,
    ...e,
    state: {
      ...r,
      ...e.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (a) => {
      s(a), e.onStateChange == null || e.onStateChange(a);
    }
  })), t.current;
}
const Tr = (e) => {
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
}, Fo = ({ schema: e, variant: n = "primary" }) => {
  const t = [{ name: "no", label: "No.", accessorKey: "no", type: "number" }, ...e], r = Tr(n);
  return /* @__PURE__ */ i.jsx("div", { className: "bg-white rounded-md", children: /* @__PURE__ */ i.jsx("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ i.jsxs("table", { className: "w-full border-spacing-0 border-separate", children: [
    /* @__PURE__ */ i.jsx("thead", { className: _("border-2 sticky top-0 z-10 rounded-t-md", r.border), children: /* @__PURE__ */ i.jsx("tr", { children: t.map((s, o) => /* @__PURE__ */ i.jsx(
      "th",
      {
        className: _(
          "text-sm text-wrap border-y p-4 text-left",
          r.header,
          {
            "rounded-tl-md": o === 0,
            "rounded-tr-md": o === t.length - 1
          }
        ),
        children: s.label
      },
      o
    )) }) }),
    /* @__PURE__ */ i.jsx("tbody", { className: "max-h-[50vh]", children: [...Array(5)].map((s, o) => /* @__PURE__ */ i.jsx(
      "tr",
      {
        className: _("p-3", {
          [r.stripe]: o % 2 !== 0,
          "bg-white": o % 2 === 0
        }),
        children: t.map((a, l) => /* @__PURE__ */ i.jsx(
          "td",
          {
            className: "text-left text-nowrap text-sm p-4",
            children: /* @__PURE__ */ i.jsx(xs, { className: "h-10 w-full rounded-md" })
          },
          `${o}-${l}`
        ))
      },
      o
    )) })
  ] }) }) });
}, oi = ({
  schema: e,
  data: n,
  className: t,
  headerClassName: r,
  rowClassName: s,
  cellClassName: o,
  emptyState: a,
  isLoading: l,
  loadingState: u,
  showIndex: d = !1,
  onPageChange: m,
  onPageSizeChange: p,
  onSortChange: f,
  onRowClick: c,
  showPagination: x = !1,
  variant: h = "primary",
  meta: v = {
    current_page: 1,
    total_page: 1,
    total_data: 0,
    limit_number: 10
  }
}) => {
  const [w, y] = ae(() => {
    const G = e.find((M) => M.sortable && M.sort);
    return G ? [{
      id: G.accessorKey.toString(),
      desc: G.sort === "desc"
    }] : [];
  }), H = De.useMemo(() => {
    const G = e.map((M) => ({
      accessorKey: M.accessorKey,
      header: M.label,
      enableSorting: !!M.sortable,
      cell: M.render ? ({ row: O }) => {
        var P;
        return (P = M.render) == null ? void 0 : P.call(M, O.original[M.accessorKey], O.original, O.index);
      } : ({ row: O }) => O.original[M.accessorKey] || "-",
      meta: {
        align: M.align || "left"
      }
    }));
    return d ? [{
      accessorKey: "no",
      header: "No.",
      enableSorting: !1,
      cell: ({ row: M }) => (v.current_page - 1) * v.limit_number + M.index + 1,
      meta: {
        align: "left"
      }
    }, ...G] : G;
  }, [e, d, v]), N = ko({
    data: n,
    columns: H,
    state: {
      sorting: w
    },
    onSortingChange: (G) => {
      const M = typeof G == "function" ? G(w) : G;
      y(M), M.length > 0 ? f == null || f(M[0].desc ? "desc" : "asc", M[0].id) : f == null || f("", "");
    },
    getCoreRowModel: Ro(),
    getSortedRowModel: No(),
    getPaginationRowModel: _o(),
    manualPagination: !0,
    pageCount: v.total_page
  }), k = Tr(h);
  if (l)
    return u || /* @__PURE__ */ i.jsx(Fo, { schema: e, variant: h });
  const A = (G, M, O) => {
    const P = G.target;
    P.tagName === "BUTTON" || P.tagName === "A" || P.tagName === "INPUT" || P.tagName === "SELECT" || P.closest("button") !== null || P.closest("a") !== null || P.closest("input") !== null || P.closest("select") !== null || c == null || c(M, O);
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "bg-white rounded-md", children: [
    /* @__PURE__ */ i.jsx("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ i.jsxs("table", { className: _("w-full border-spacing-0 border-separate", t), children: [
      /* @__PURE__ */ i.jsx("thead", { className: _("border-2 sticky top-0 z-10 rounded-t-md", k.border), children: N.getHeaderGroups().map((G) => /* @__PURE__ */ i.jsx("tr", { children: G.headers.map((M, O) => {
        var P, L, I;
        return /* @__PURE__ */ i.jsx(
          "th",
          {
            className: _(
              "text-sm text-wrap border-y p-4",
              k.header,
              {
                "cursor-pointer": M.column.getCanSort(),
                "rounded-tl-md": O === 0,
                "rounded-tr-md": O === G.headers.length - 1,
                "text-left": ((P = M.column.columnDef.meta) == null ? void 0 : P.align) === "left",
                "text-center": ((L = M.column.columnDef.meta) == null ? void 0 : L.align) === "center",
                "text-right": ((I = M.column.columnDef.meta) == null ? void 0 : I.align) === "right"
              },
              r
            ),
            onClick: M.column.getCanSort() ? M.column.getToggleSortingHandler() : void 0,
            children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ i.jsx("span", { className: _({
                "font-semibold": O === 0
              }), children: dr(M.column.columnDef.header, M.getContext()) }),
              M.column.getCanSort() && /* @__PURE__ */ i.jsx(
                Q,
                {
                  icon: M.column.getIsSorted() ? M.column.getIsSorted() === "desc" ? "mdi:keyboard-arrow-up" : "mdi:keyboard-arrow-down" : "mdi:unfold-more-horizontal",
                  className: _("h-4 w-4", {
                    "text-white": h !== "ghost",
                    "text-gray-700": h === "ghost"
                  })
                }
              )
            ] })
          },
          M.id
        );
      }) }, G.id)) }),
      /* @__PURE__ */ i.jsx("tbody", { className: "max-h-[50vh]", children: N.getRowModel().rows.length === 0 ? /* @__PURE__ */ i.jsx("tr", { children: /* @__PURE__ */ i.jsx(
        "td",
        {
          colSpan: N.getAllColumns().length,
          className: _(
            "text-center border h-full w-full rounded-b-md"
          ),
          children: a || /* @__PURE__ */ i.jsxs("div", { className: "flex mx-auto w-full text-center justify-center gap-3 items-center", children: [
            /* @__PURE__ */ i.jsx("p", { children: "Data Not Found" }),
            /* @__PURE__ */ i.jsx(Q, { icon: "mdi:face-frown-open", size: 34 })
          ] })
        }
      ) }) : N.getRowModel().rows.map((G, M) => /* @__PURE__ */ i.jsx(
        "tr",
        {
          className: _(
            "p-3",
            k.row,
            {
              [k.stripe]: M % 2 !== 0,
              "bg-white": M % 2 === 0,
              "cursor-pointer": c
            },
            s
          ),
          onClick: (O) => A(O, G.original, M),
          children: G.getVisibleCells().map((O) => {
            var P, L, I;
            return /* @__PURE__ */ i.jsx(
              "td",
              {
                className: _(
                  "px-4 py-3 text-sm text-gray-900",
                  {
                    "text-left": ((P = O.column.columnDef.meta) == null ? void 0 : P.align) === "left",
                    "text-center": ((L = O.column.columnDef.meta) == null ? void 0 : L.align) === "center",
                    "text-right": ((I = O.column.columnDef.meta) == null ? void 0 : I.align) === "right"
                  },
                  o
                ),
                children: dr(O.column.columnDef.cell, O.getContext())
              },
              O.id
            );
          })
        },
        G.id
      )) })
    ] }) }),
    !!n.length && x && /* @__PURE__ */ i.jsx("div", { className: "p-4 bg-white rounded-b-md", children: /* @__PURE__ */ i.jsx(
      ps,
      {
        currentPage: v.current_page,
        totalPages: v.total_page,
        totalData: v.total_data,
        onPageChange: m || (() => {
        }),
        perPage: v.limit_number,
        onPerPageChange: p || (() => {
        }),
        perPageOptions: [5, 10, 20, 50, 100],
        siblingCount: 1
      }
    ) })
  ] });
}, Po = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}, Hr = Se(
  ({
    className: e,
    variant: n = "default",
    rounded: t = "lg",
    title: r,
    description: s,
    onClose: o,
    icon: a,
    showIcon: l = !0,
    showClose: u = !0,
    ...d
  }, m) => {
    const f = a || (l ? {
      default: "mdi:information",
      success: "mdi:check-circle",
      error: "mdi:alert-circle",
      warning: "mdi:alert",
      info: "mdi:information"
    }[n] : void 0), c = r || s;
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        ref: m,
        className: _(
          "flex",
          s ? "items-start gap-3 p-4" : "items-center gap-2 py-2.5 px-3",
          "border border-gray-200",
          Po[t],
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
          f && /* @__PURE__ */ i.jsx(
            Q,
            {
              icon: f,
              className: _(
                "flex-shrink-0",
                s ? "h-5 w-5 mt-0.5" : "h-4 w-4",
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
          /* @__PURE__ */ i.jsxs("div", { className: "flex-1", children: [
            r && /* @__PURE__ */ i.jsx(
              "h3",
              {
                className: _("text-sm font-medium leading-5", {
                  "text-gray-900": n === "default",
                  "text-success-900": n === "success",
                  "text-danger-900": n === "error",
                  "text-warning-900": n === "warning",
                  "text-info-900": n === "info"
                }),
                children: r
              }
            ),
            s && /* @__PURE__ */ i.jsx(
              "p",
              {
                className: _(r ? "mt-1" : "", "text-sm leading-5", {
                  "text-gray-500": n === "default",
                  "text-success-700": n === "success",
                  "text-danger-700": n === "error",
                  "text-warning-700": n === "warning",
                  "text-info-700": n === "info"
                }),
                children: s
              }
            ),
            !c && /* @__PURE__ */ i.jsx("span", { className: "text-sm leading-5", children: d.children })
          ] }),
          u && o && /* @__PURE__ */ i.jsx(
            ke,
            {
              variant: "ghost",
              size: "sm",
              onClick: o,
              className: _(
                "flex-shrink-0 !p-1",
                s ? "ml-4" : "ml-2",
                {
                  "text-gray-400 hover:text-gray-500": n === "default",
                  "text-success-400 hover:text-success-500": n === "success",
                  "text-danger-400 hover:text-danger-500": n === "error",
                  "text-warning-400 hover:text-warning-500": n === "warning",
                  "text-info-400 hover:text-info-500": n === "info"
                }
              ),
              children: /* @__PURE__ */ i.jsx(Q, { icon: "mdi:close", className: _(s ? "h-5 w-5" : "h-4 w-4") })
            }
          )
        ]
      }
    );
  }
);
Hr.displayName = "Toast";
const Vt = dn(void 0), Io = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, ii = ({ children: e }) => {
  const [n, t] = ae([]), r = Oe((l) => {
    t((u) => u.filter((d) => d.id !== l));
  }, []), s = Oe((l) => {
    const u = Math.random().toString(36).substr(2, 9), d = l.position || "top-right", m = l.duration || 5e3, p = {
      ...l,
      id: u,
      position: d
    };
    return t((f) => [...f, p]), m > 0 && setTimeout(() => {
      r(u);
    }, m), u;
  }, [r]), o = n.reduce((l, u) => (l[u.position] || (l[u.position] = []), l[u.position].push(u), l), {
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    "bottom-right": [],
    "top-center": [],
    "bottom-center": []
  }), a = be();
  return "body" in a ? /* @__PURE__ */ i.jsxs(Vt.Provider, { value: { showToast: s, removeToast: r }, children: [
    e,
    Ke(
      /* @__PURE__ */ i.jsx(i.Fragment, { children: Object.entries(o).map(([l, u]) => /* @__PURE__ */ i.jsx(
        "div",
        {
          className: _(
            "fixed z-[100] flex flex-col gap-2 min-w-[320px] max-w-[420px]",
            Io[l],
            l.includes("bottom") ? "flex-col-reverse" : "flex-col"
          ),
          children: u.map((d) => /* @__PURE__ */ i.jsx(
            Hr,
            {
              ...d,
              onClose: () => r(d.id),
              className: "animate-slide-in"
            },
            d.id
          ))
        },
        l
      )) }),
      a.body
    )
  ] }) : /* @__PURE__ */ i.jsx(Vt.Provider, { value: { showToast: s, removeToast: r }, children: e });
}, ai = () => {
  const e = gn(Vt);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, Do = ({
  label: e,
  value: n,
  icon: t,
  className: r
}) => /* @__PURE__ */ i.jsxs(Rr, { className: _(
  "flex items-center gap-4 rounded-lg w-full bg-white p-4 shadow-sm hover:bg-neutral-50 transition-shadow duration-200 justify-between",
  r
), children: [
  /* @__PURE__ */ i.jsxs("div", { children: [
    /* @__PURE__ */ i.jsx("p", { className: "text-sm font-medium text-gray-500", children: e }),
    /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-2xl font-semibold text-gray-900", children: n })
  ] }),
  t && /* @__PURE__ */ i.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50", children: /* @__PURE__ */ i.jsx(Q, { icon: t, className: "h-6 w-6 text-primary-600" }) })
] }), Vo = {
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
}, Gr = {
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
}, Ao = {
  "no-internet": "NO_INTERNET",
  "data-not-found": "DATA_NOT_FOUND",
  "under-development": "UNDER_DEVELOPMENT",
  "information-unavailable": "INFORMATION_UNAVAILABLE",
  success: "SUCCESS",
  checked: "CHECKED"
}, gr = {
  ...Vo,
  ...Gr
}, fr = {
  image: "/img/error.svg",
  message: "An unexpected error occurred. Our team is currently investigating the issue."
}, mr = (e) => typeof e == "object" && e !== null && ("code" in e || "message" in e), li = ({
  error: e,
  reload: n,
  children: t,
  className: r = "",
  variant: s,
  customImage: o,
  customMessage: a
}) => {
  if (!e && !s)
    return t ? /* @__PURE__ */ i.jsx(i.Fragment, { children: t }) : null;
  const u = (() => {
    if (s) {
      const p = Ao[s];
      return Gr[p];
    }
    return mr(e) && e.code && gr[e.code] ? gr[e.code] : fr;
  })(), d = o || u.image, m = a || (mr(e) ? e.message : null) || u.message;
  return /* @__PURE__ */ i.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${r}`, children: [
    /* @__PURE__ */ i.jsx(
      "img",
      {
        src: d,
        alt: "Error illustration",
        className: "max-w-[300px] h-auto"
      }
    ),
    /* @__PURE__ */ i.jsx(Rs, { variant: "body1", className: "m-0", children: m }),
    n && /* @__PURE__ */ i.jsx(
      ke,
      {
        onClick: n,
        rounded: "full",
        variant: "primary",
        size: "md",
        children: "Try Again"
      }
    )
  ] });
}, Oo = Ne(
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
), Lo = Se(
  ({
    className: e,
    variant: n = "default",
    size: t = "md",
    rounded: r = "md",
    error: s = !1,
    errorText: o,
    helperText: a,
    label: l,
    bottomLabel: u,
    required: d = !1,
    showSubmitButton: m = !1,
    submitButtonLabel: p = "Submit",
    submitButtonVariant: f = "primary",
    length: c = 6,
    numericOnly: x = !0,
    onComplete: h,
    onChange: v,
    onSubmit: w,
    value: y,
    defaultValue: H = "",
    disabled: N = !1,
    autoFocus: k = !1,
    ...A
  }, G) => {
    const [M, O] = ae(H || ""), P = ye([]);
    je(() => {
      y !== void 0 && O(y);
    }, [y]);
    const L = y !== void 0, I = L ? y : M, J = (E) => {
      L || O(E), v == null || v(E), E.length === c && (h == null || h(E), m || w == null || w(E));
    }, F = (E) => (R) => {
      P.current[E] = R;
    }, $ = (E) => {
      E.target.select();
    }, b = (E, R) => {
      var ce;
      const T = E.target.value;
      let Y = "";
      if (T.length >= 1)
        Y = T.slice(-1);
      else if (T.length === 0) {
        const fe = I.split("");
        fe[R] = "", J(fe.join(""));
        return;
      }
      if (x && !/^\d$/.test(Y))
        return;
      const te = I.split("");
      for (; te.length <= R; )
        te.push("");
      te[R] = Y;
      const re = te.join("");
      J(re), R < c - 1 && Y && ((ce = P.current[R + 1]) == null || ce.focus());
    }, S = (E, R) => {
      var T, Y, te;
      if (E.key === "Backspace") {
        const re = I.split("");
        I[R] ? (E.preventDefault(), re[R] = "", J(re.join(""))) : R > 0 && (E.preventDefault(), re[R - 1] = "", J(re.join("")), (T = P.current[R - 1]) == null || T.focus());
      } else if (E.key === "Delete") {
        if (I[R]) {
          E.preventDefault();
          const re = I.split("");
          re[R] = "", J(re.join(""));
        }
      } else if (E.key === "ArrowLeft" && R > 0)
        E.preventDefault(), (Y = P.current[R - 1]) == null || Y.focus();
      else if (E.key === "ArrowRight" && R < c - 1)
        E.preventDefault(), (te = P.current[R + 1]) == null || te.focus();
      else if (!E.ctrlKey && !E.altKey && !E.metaKey && E.key.length === 1 && x && !/^\d$/.test(E.key)) {
        E.preventDefault();
        return;
      }
    }, C = (E) => {
      var re;
      E.preventDefault();
      const R = E.clipboardData.getData("text/plain").trim();
      if (x && !/^\d+$/.test(R))
        return;
      const Y = R.slice(0, c).padEnd(I.length, "").slice(0, c);
      J(Y);
      const te = Y.length < c ? Y.length : c - 1;
      (re = P.current[te]) == null || re.focus();
    }, V = () => {
      I.length === c && (w == null || w(I));
    }, z = I.split("").concat(Array(c - I.length).fill(""));
    return /* @__PURE__ */ i.jsxs("div", { ref: G, className: _("w-full", e), ...A, children: [
      l && /* @__PURE__ */ i.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
        l,
        d && /* @__PURE__ */ i.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
        /* @__PURE__ */ i.jsx("div", { className: "flex items-center justify-center gap-2", children: Array.from({ length: c }).map((E, R) => /* @__PURE__ */ i.jsx(
          "input",
          {
            ref: F(R),
            type: x ? "tel" : "text",
            inputMode: x ? "numeric" : "text",
            maxLength: 1,
            value: z[R] || "",
            onChange: (T) => b(T, R),
            onKeyDown: (T) => S(T, R),
            onPaste: R === 0 ? C : void 0,
            onFocus: $,
            disabled: N,
            autoFocus: k && R === 0,
            className: _(
              Oo({
                variant: s ? "error" : n,
                size: t,
                rounded: r
              })
            ),
            "aria-invalid": s
          },
          R
        )) }),
        s && o && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger-500 self-start", children: o }),
        !s && a && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral-500 self-start", children: a }),
        u && /* @__PURE__ */ i.jsx("p", { className: "text-sm text-neutral-600", children: u }),
        m && /* @__PURE__ */ i.jsx(
          ke,
          {
            variant: f,
            disabled: I.length !== c || N,
            onClick: V,
            className: "mt-4",
            children: p
          }
        )
      ] })
    ] });
  }
);
Lo.displayName = "InputOTP";
const pr = {
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
}, ui = ({
  icon: e,
  className: n,
  color: t = "primary",
  value: r,
  maxValue: s = 99,
  children: o,
  ...a
}) => {
  const l = "top-0 right-0", u = typeof r == "number" && !isNaN(r);
  let d = "";
  u && (r > s ? d = `${s}+` : d = String(r));
  const m = u ? "px-2" : "", p = u ? "min-w-[20px]" : "w-2.5 h-2.5", f = u ? "h-5" : "h-2.5", c = typeof t == "string" && t in pr ? pr[t] : t;
  return /* @__PURE__ */ i.jsxs("div", { className: _("relative inline-block", n), children: [
    o || (e ? /* @__PURE__ */ i.jsx(Q, { icon: e, color: c, size: 32, ...a }) : null),
    /* @__PURE__ */ i.jsx(
      "span",
      {
        className: _(
          "absolute flex items-center justify-center rounded-xl bg-[#FF4C4C] text-white text-[10px] font-semibold",
          l,
          m,
          p,
          f,
          !u && "p-0",
          !u && "rounded-full"
        ),
        style: {
          transform: "translate(50%,-50%)"
        },
        children: u ? d : ""
      }
    )
  ] });
}, ci = ({
  widgets: e,
  className: n
}) => /* @__PURE__ */ i.jsx("div", { className: _("w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", n), children: e.map((t, r) => /* @__PURE__ */ i.jsx(Do, { ...t }, r)) });
export {
  _ as $,
  Yn as A,
  Uo as B,
  Rr as C,
  is as D,
  _s as E,
  Ko as F,
  Es as G,
  Ns as H,
  Q as I,
  si as J,
  Is as K,
  Vs as L,
  oi as M,
  Zo as N,
  Hr as O,
  Mt as P,
  ii as Q,
  Xo as R,
  Er as S,
  ni as T,
  ai as U,
  li as V,
  Do as W,
  Lo as X,
  Oo as Y,
  ui as Z,
  ci as _,
  Ot as a,
  Go as b,
  Bo as c,
  ke as d,
  Kn as e,
  Zn as f,
  Ho as g,
  Wo as h,
  qo as i,
  Yo as j,
  ls as k,
  us as l,
  cs as m,
  ds as n,
  $r as o,
  gs as p,
  Sr as q,
  ps as r,
  ut as s,
  xs as t,
  Jo as u,
  Qo as v,
  ei as w,
  ti as x,
  ri as y,
  Rs as z
};
