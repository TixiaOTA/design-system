import * as Nt from "react";
import De, { useState as ce, useEffect as _e, forwardRef as Se, useRef as we, useCallback as Oe, Children as tr, isValidElement as pt, cloneElement as cn, createContext as dn, useContext as gn } from "react";
import { createPortal as Ue } from "react-dom";
var At = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ot(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
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
    var f, p = {}, m = null, c = null;
    d !== void 0 && (m = "" + d), u.key !== void 0 && (m = "" + u.key), u.ref !== void 0 && (c = u.ref);
    for (f in u) r.call(u, f) && !o.hasOwnProperty(f) && (p[f] = u[f]);
    if (l && l.defaultProps) for (f in u = l.defaultProps, u) p[f] === void 0 && (p[f] = u[f]);
    return { $$typeof: n, type: l, key: m, ref: c, props: p, _owner: s.current };
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
    var e = De, n = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), c = Symbol.for("react.offscreen"), h = Symbol.iterator, x = "@@iterator";
    function v(g) {
      if (g === null || typeof g != "object")
        return null;
      var _ = h && g[h] || g[x];
      return typeof _ == "function" ? _ : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(g) {
      {
        for (var _ = arguments.length, O = new Array(_ > 1 ? _ - 1 : 0), q = 1; q < _; q++)
          O[q - 1] = arguments[q];
        L("error", g, O);
      }
    }
    function L(g, _, O) {
      {
        var q = w.ReactDebugCurrentFrame, ue = q.getStackAddendum();
        ue !== "" && (_ += "%s", O = O.concat([ue]));
        var ge = O.map(function(se) {
          return String(se);
        });
        ge.unshift("Warning: " + _), Function.prototype.apply.call(console[g], console, ge);
      }
    }
    var N = !1, k = !1, V = !1, H = !1, R = !1, P;
    P = Symbol.for("react.module.reference");
    function F(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === r || g === o || R || g === s || g === d || g === f || H || g === c || N || k || V || typeof g == "object" && g !== null && (g.$$typeof === m || g.$$typeof === p || g.$$typeof === a || g.$$typeof === l || g.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === P || g.getModuleId !== void 0));
    }
    function D(g, _, O) {
      var q = g.displayName;
      if (q)
        return q;
      var ue = _.displayName || _.name || "";
      return ue !== "" ? O + "(" + ue + ")" : O;
    }
    function I(g) {
      return g.displayName || "Context";
    }
    function Y(g) {
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
        case f:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case l:
            var _ = g;
            return I(_) + ".Consumer";
          case a:
            var O = g;
            return I(O._context) + ".Provider";
          case u:
            return D(g, g.render, "ForwardRef");
          case p:
            var q = g.displayName || null;
            return q !== null ? q : Y(g.type) || "Memo";
          case m: {
            var ue = g, ge = ue._payload, se = ue._init;
            try {
              return Y(se(ge));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var E = Object.assign, $ = 0, b, S, C, A, z, M, T;
    function Z() {
    }
    Z.__reactDisabledLog = !0;
    function te() {
      {
        if ($ === 0) {
          b = console.log, S = console.info, C = console.warn, A = console.error, z = console.group, M = console.groupCollapsed, T = console.groupEnd;
          var g = {
            configurable: !0,
            enumerable: !0,
            value: Z,
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
    function le() {
      {
        if ($--, $ === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: E({}, g, {
              value: b
            }),
            info: E({}, g, {
              value: S
            }),
            warn: E({}, g, {
              value: C
            }),
            error: E({}, g, {
              value: A
            }),
            group: E({}, g, {
              value: z
            }),
            groupCollapsed: E({}, g, {
              value: M
            }),
            groupEnd: E({}, g, {
              value: T
            })
          });
        }
        $ < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = w.ReactCurrentDispatcher, G;
    function J(g, _, O) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (ue) {
            var q = ue.stack.trim().match(/\n( *(at )?)/);
            G = q && q[1] || "";
          }
        return `
` + G + g;
      }
    }
    var Q = !1, re;
    {
      var de = typeof WeakMap == "function" ? WeakMap : Map;
      re = new de();
    }
    function B(g, _) {
      if (!g || Q)
        return "";
      {
        var O = re.get(g);
        if (O !== void 0)
          return O;
      }
      var q;
      Q = !0;
      var ue = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ge;
      ge = oe.current, oe.current = null, te();
      try {
        if (_) {
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
            } catch (Ne) {
              q = Ne;
            }
            Reflect.construct(g, [], se);
          } else {
            try {
              se.call();
            } catch (Ne) {
              q = Ne;
            }
            g.call(se.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ne) {
            q = Ne;
          }
          g();
        }
      } catch (Ne) {
        if (Ne && q && typeof Ne.stack == "string") {
          for (var ne = Ne.stack.split(`
`), je = q.stack.split(`
`), xe = ne.length - 1, ve = je.length - 1; xe >= 1 && ve >= 0 && ne[xe] !== je[ve]; )
            ve--;
          for (; xe >= 1 && ve >= 0; xe--, ve--)
            if (ne[xe] !== je[ve]) {
              if (xe !== 1 || ve !== 1)
                do
                  if (xe--, ve--, ve < 0 || ne[xe] !== je[ve]) {
                    var ke = `
` + ne[xe].replace(" at new ", " at ");
                    return g.displayName && ke.includes("<anonymous>") && (ke = ke.replace("<anonymous>", g.displayName)), typeof g == "function" && re.set(g, ke), ke;
                  }
                while (xe >= 1 && ve >= 0);
              break;
            }
        }
      } finally {
        Q = !1, oe.current = ge, le(), Error.prepareStackTrace = ue;
      }
      var Ye = g ? g.displayName || g.name : "", Be = Ye ? J(Ye) : "";
      return typeof g == "function" && re.set(g, Be), Be;
    }
    function K(g, _, O) {
      return B(g, !1);
    }
    function fe(g) {
      var _ = g.prototype;
      return !!(_ && _.isReactComponent);
    }
    function ie(g, _, O) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return B(g, fe(g));
      if (typeof g == "string")
        return J(g);
      switch (g) {
        case d:
          return J("Suspense");
        case f:
          return J("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case u:
            return K(g.render);
          case p:
            return ie(g.type, _, O);
          case m: {
            var q = g, ue = q._payload, ge = q._init;
            try {
              return ie(ge(ue), _, O);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, Re = {}, Fe = w.ReactDebugCurrentFrame;
    function Me(g) {
      if (g) {
        var _ = g._owner, O = ie(g.type, g._source, _ ? _.type : null);
        Fe.setExtraStackFrame(O);
      } else
        Fe.setExtraStackFrame(null);
    }
    function st(g, _, O, q, ue) {
      {
        var ge = Function.call.bind(he);
        for (var se in g)
          if (ge(g, se)) {
            var ne = void 0;
            try {
              if (typeof g[se] != "function") {
                var je = Error((q || "React class") + ": " + O + " type `" + se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw je.name = "Invariant Violation", je;
              }
              ne = g[se](_, se, q, O, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (xe) {
              ne = xe;
            }
            ne && !(ne instanceof Error) && (Me(ue), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", q || "React class", O, se, typeof ne), Me(null)), ne instanceof Error && !(ne.message in Re) && (Re[ne.message] = !0, Me(ue), y("Failed %s type: %s", O, ne.message), Me(null));
          }
      }
    }
    var ot = Array.isArray;
    function Xe(g) {
      return ot(g);
    }
    function Ge(g) {
      {
        var _ = typeof Symbol == "function" && Symbol.toStringTag, O = _ && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return O;
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
    }, Wt, Yt;
    function Wr(g) {
      if (he.call(g, "ref")) {
        var _ = Object.getOwnPropertyDescriptor(g, "ref").get;
        if (_ && _.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function Yr(g) {
      if (he.call(g, "key")) {
        var _ = Object.getOwnPropertyDescriptor(g, "key").get;
        if (_ && _.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function qr(g, _) {
      typeof g.ref == "string" && Ut.current;
    }
    function Kr(g, _) {
      {
        var O = function() {
          Wt || (Wt = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        O.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: O,
          configurable: !0
        });
      }
    }
    function Zr(g, _) {
      {
        var O = function() {
          Yt || (Yt = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        O.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: O,
          configurable: !0
        });
      }
    }
    var Xr = function(g, _, O, q, ue, ge, se) {
      var ne = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: g,
        key: _,
        ref: O,
        props: se,
        // Record the component responsible for creating this element.
        _owner: ge
      };
      return ne._store = {}, Object.defineProperty(ne._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ne, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: q
      }), Object.defineProperty(ne, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ue
      }), Object.freeze && (Object.freeze(ne.props), Object.freeze(ne)), ne;
    };
    function Jr(g, _, O, q, ue) {
      {
        var ge, se = {}, ne = null, je = null;
        O !== void 0 && (Bt(O), ne = "" + O), Yr(_) && (Bt(_.key), ne = "" + _.key), Wr(_) && (je = _.ref, qr(_, ue));
        for (ge in _)
          he.call(_, ge) && !Ur.hasOwnProperty(ge) && (se[ge] = _[ge]);
        if (g && g.defaultProps) {
          var xe = g.defaultProps;
          for (ge in xe)
            se[ge] === void 0 && (se[ge] = xe[ge]);
        }
        if (ne || je) {
          var ve = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          ne && Kr(se, ve), je && Zr(se, ve);
        }
        return Xr(g, ne, je, ue, q, Ut.current, se);
      }
    }
    var dt = w.ReactCurrentOwner, qt = w.ReactDebugCurrentFrame;
    function We(g) {
      if (g) {
        var _ = g._owner, O = ie(g.type, g._source, _ ? _.type : null);
        qt.setExtraStackFrame(O);
      } else
        qt.setExtraStackFrame(null);
    }
    var gt;
    gt = !1;
    function ft(g) {
      return typeof g == "object" && g !== null && g.$$typeof === n;
    }
    function Kt() {
      {
        if (dt.current) {
          var g = Y(dt.current.type);
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
        var _ = Kt();
        if (!_) {
          var O = typeof g == "string" ? g : g.displayName || g.name;
          O && (_ = `

Check the top-level render call using <` + O + ">.");
        }
        return _;
      }
    }
    function Xt(g, _) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var O = en(_);
        if (Zt[O])
          return;
        Zt[O] = !0;
        var q = "";
        g && g._owner && g._owner !== dt.current && (q = " It was passed a child from " + Y(g._owner.type) + "."), We(g), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', O, q), We(null);
      }
    }
    function Jt(g, _) {
      {
        if (typeof g != "object")
          return;
        if (Xe(g))
          for (var O = 0; O < g.length; O++) {
            var q = g[O];
            ft(q) && Xt(q, _);
          }
        else if (ft(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var ue = v(g);
          if (typeof ue == "function" && ue !== g.entries)
            for (var ge = ue.call(g), se; !(se = ge.next()).done; )
              ft(se.value) && Xt(se.value, _);
        }
      }
    }
    function tn(g) {
      {
        var _ = g.type;
        if (_ == null || typeof _ == "string")
          return;
        var O;
        if (typeof _ == "function")
          O = _.propTypes;
        else if (typeof _ == "object" && (_.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        _.$$typeof === p))
          O = _.propTypes;
        else
          return;
        if (O) {
          var q = Y(_);
          st(O, g.props, "prop", q, g);
        } else if (_.PropTypes !== void 0 && !gt) {
          gt = !0;
          var ue = Y(_);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ue || "Unknown");
        }
        typeof _.getDefaultProps == "function" && !_.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rn(g) {
      {
        for (var _ = Object.keys(g.props), O = 0; O < _.length; O++) {
          var q = _[O];
          if (q !== "children" && q !== "key") {
            We(g), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", q), We(null);
            break;
          }
        }
        g.ref !== null && (We(g), y("Invalid attribute `ref` supplied to `React.Fragment`."), We(null));
      }
    }
    var Qt = {};
    function er(g, _, O, q, ue, ge) {
      {
        var se = F(g);
        if (!se) {
          var ne = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var je = Qr();
          je ? ne += je : ne += Kt();
          var xe;
          g === null ? xe = "null" : Xe(g) ? xe = "array" : g !== void 0 && g.$$typeof === n ? (xe = "<" + (Y(g.type) || "Unknown") + " />", ne = " Did you accidentally export a JSX literal instead of a component?") : xe = typeof g, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", xe, ne);
        }
        var ve = Jr(g, _, O, ue, ge);
        if (ve == null)
          return ve;
        if (se) {
          var ke = _.children;
          if (ke !== void 0)
            if (q)
              if (Xe(ke)) {
                for (var Ye = 0; Ye < ke.length; Ye++)
                  Jt(ke[Ye], g);
                Object.freeze && Object.freeze(ke);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Jt(ke, g);
        }
        if (he.call(_, "key")) {
          var Be = Y(g), Ne = Object.keys(_).filter(function(un) {
            return un !== "key";
          }), mt = Ne.length > 0 ? "{key: someKey, " + Ne.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Qt[Be + mt]) {
            var ln = Ne.length > 0 ? "{" + Ne.join(": ..., ") + ": ...}" : "{}";
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
    function nn(g, _, O) {
      return er(g, _, O, !0);
    }
    function sn(g, _, O) {
      return er(g, _, O, !1);
    }
    var on = sn, an = nn;
    Qe.Fragment = r, Qe.jsx = on, Qe.jsxs = an;
  }()), Qe;
}
process.env.NODE_ENV === "production" ? $t.exports = fn() : $t.exports = mn();
var i = $t.exports;
function pr(e) {
  var n, t, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (n = 0; n < s; n++) e[n] && (t = pr(e[n])) && (r && (r += " "), r += t);
  } else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function ae() {
  for (var e, n, t = 0, r = "", s = arguments.length; t < s; t++) (e = arguments[t]) && (n = pr(e)) && (r && (r += " "), r += n);
  return r;
}
const sr = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, or = ae, Ce = (e, n) => (t) => {
  var r;
  if ((n == null ? void 0 : n.variants) == null) return or(e, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: s, defaultVariants: o } = n, a = Object.keys(s).map((d) => {
    const f = t == null ? void 0 : t[d], p = o == null ? void 0 : o[d];
    if (f === null) return null;
    const m = sr(f) || sr(p);
    return s[d][m];
  }), l = t && Object.entries(t).reduce((d, f) => {
    let [p, m] = f;
    return m === void 0 || (d[p] = m), d;
  }, {}), u = n == null || (r = n.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((d, f) => {
    let { class: p, className: m, ...c } = f;
    return Object.entries(c).every((h) => {
      let [x, v] = h;
      return Array.isArray(v) ? v.includes({
        ...o,
        ...l
      }[x]) : {
        ...o,
        ...l
      }[x] === v;
    }) ? [
      ...d,
      p,
      m
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
      return l[0] === "" && l.length !== 1 && l.shift(), hr(l, n) || hn(a);
    },
    getConflictingClassGroupIds: (a, l) => {
      const u = t[a] || [];
      return l && r[a] ? [...u, ...r[a]] : u;
    }
  };
}, hr = (e, n) => {
  var a;
  if (e.length === 0)
    return n.classGroupId;
  const t = e[0], r = n.nextPart.get(t), s = r ? hr(e.slice(1), r) : void 0;
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
}, xr = "!", yn = (e) => {
  const {
    separator: n,
    experimentalParseClassName: t
  } = e, r = n.length === 1, s = n[0], o = n.length, a = (l) => {
    const u = [];
    let d = 0, f = 0, p;
    for (let v = 0; v < l.length; v++) {
      let w = l[v];
      if (d === 0) {
        if (w === s && (r || l.slice(v, v + o) === n)) {
          u.push(l.slice(f, v)), f = v + o;
          continue;
        }
        if (w === "/") {
          p = v;
          continue;
        }
      }
      w === "[" ? d++ : w === "]" && d--;
    }
    const m = u.length === 0 ? l : l.substring(f), c = m.startsWith(xr), h = c ? m.substring(1) : m, x = p && p > f ? p - f : void 0;
    return {
      modifiers: u,
      hasImportantModifier: c,
      baseClassName: h,
      maybePostfixModifierPosition: x
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
      modifiers: f,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: c
    } = t(d);
    let h = !!c, x = r(h ? m.substring(0, c) : m);
    if (!x) {
      if (!h) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (x = r(m), !x) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      h = !1;
    }
    const v = Sn(f).join(":"), w = p ? v + xr : v, y = w + x;
    if (o.includes(y))
      continue;
    o.push(y);
    const L = s(x, h);
    for (let N = 0; N < L.length; ++N) {
      const k = L[N];
      o.push(w + k);
    }
    l = d + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function _n() {
  let e = 0, n, t, r = "";
  for (; e < arguments.length; )
    (n = arguments[e++]) && (t = vr(n)) && (r && (r += " "), r += t);
  return r;
}
const vr = (e) => {
  if (typeof e == "string")
    return e;
  let n, t = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (n = vr(e[r])) && (t && (t += " "), t += n);
  return t;
};
function Nn(e, ...n) {
  let t, r, s, o = a;
  function a(u) {
    const d = n.reduce((f, p) => p(f), e());
    return t = Cn(d), r = t.cache.get, s = t.cache.set, o = l, l(u);
  }
  function l(u) {
    const d = r(u);
    if (d)
      return d;
    const f = jn(u, t);
    return s(u, f), f;
  }
  return function() {
    return o(_n.apply(null, arguments));
  };
}
const me = (e) => {
  const n = (t) => t[e] || [];
  return n.isThemeGetter = !0, n;
}, br = /^\[(?:([a-z-]+):)?(.+)\]$/i, $n = /^\d+\/\d+$/, En = /* @__PURE__ */ new Set(["px", "full", "screen"]), Mn = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, kn = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Pn = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Fn = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, In = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ve = (e) => qe(e) || En.has(e) || $n.test(e), Le = (e) => Ze(e, "length", Hn), qe = (e) => !!e && !Number.isNaN(Number(e)), ht = (e) => Ze(e, "number", qe), et = (e) => !!e && Number.isInteger(Number(e)), Dn = (e) => e.endsWith("%") && qe(e.slice(0, -1)), X = (e) => br.test(e), ze = (e) => Mn.test(e), Vn = /* @__PURE__ */ new Set(["length", "size", "percentage"]), An = (e) => Ze(e, Vn, wr), On = (e) => Ze(e, "position", wr), Ln = /* @__PURE__ */ new Set(["image", "url"]), zn = (e) => Ze(e, Ln, Bn), Tn = (e) => Ze(e, "", Gn), tt = () => !0, Ze = (e, n, t) => {
  const r = br.exec(e);
  return r ? r[1] ? typeof n == "string" ? r[1] === n : n.has(r[1]) : t(r[2]) : !1;
}, Hn = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  kn.test(e) && !Pn.test(e)
), wr = () => !1, Gn = (e) => Fn.test(e), Bn = (e) => In.test(e), Un = () => {
  const e = me("colors"), n = me("spacing"), t = me("blur"), r = me("brightness"), s = me("borderColor"), o = me("borderRadius"), a = me("borderSpacing"), l = me("borderWidth"), u = me("contrast"), d = me("grayscale"), f = me("hueRotate"), p = me("invert"), m = me("gap"), c = me("gradientColorStops"), h = me("gradientColorStopPositions"), x = me("inset"), v = me("margin"), w = me("opacity"), y = me("padding"), L = me("saturate"), N = me("scale"), k = me("sepia"), V = me("skew"), H = me("space"), R = me("translate"), P = () => ["auto", "contain", "none"], F = () => ["auto", "hidden", "clip", "visible", "scroll"], D = () => ["auto", X, n], I = () => [X, n], Y = () => ["", Ve, Le], E = () => ["auto", qe, X], $ = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], b = () => ["solid", "dashed", "dotted", "double", "none"], S = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], C = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], A = () => ["", "0", X], z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], M = () => [qe, X];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [tt],
      spacing: [Ve, Le],
      blur: ["none", "", ze, X],
      brightness: M(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ze, X],
      borderSpacing: I(),
      borderWidth: Y(),
      contrast: M(),
      grayscale: A(),
      hueRotate: M(),
      invert: A(),
      gap: I(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Dn, Le],
      inset: D(),
      margin: D(),
      opacity: M(),
      padding: I(),
      saturate: M(),
      scale: M(),
      sepia: A(),
      skew: M(),
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
        object: [...$(), X]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: F()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": F()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": F()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: P()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": P()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": P()
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
        z: ["auto", et, X]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: D()
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
        grow: A()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: A()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", et, X]
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
          span: ["full", et, X]
        }, X]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": E()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": E()
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
          span: [et, X]
        }, X]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": E()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": E()
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
        "space-x": [H]
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
        "space-y": [H]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", X, n]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [X, n, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [X, n, "none", "full", "min", "max", "fit", "prose", {
          screen: [ze]
        }, ze]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [X, n, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [X, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [X, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [X, n, "auto", "min", "max", "fit"]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", X]
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
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ve, X]
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
        "underline-offset": ["auto", Ve, X]
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
        from: [h]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [h]
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
        "outline-offset": [Ve, X]
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
        ring: Y()
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
        "drop-shadow": ["", "none", ze, X]
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
        saturate: [L]
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
        "backdrop-saturate": [L]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", X]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: M()
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
        delay: M()
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
        rotate: [et, X]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [R]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [R]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [V]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [V]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", X]
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
        "will-change": ["auto", "scroll", "contents", "transform", X]
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
}, Ke = /* @__PURE__ */ Nn(Un);
function j(...e) {
  return Ke(ae(e));
}
const ee = ({
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
  const [f, p] = ce(null), [m, c] = ce(!0), [h, x] = ce(null);
  return _e(() => {
    let v = !0;
    return (async () => {
      try {
        const { Icon: y } = await import("./iconify-Dqt3MVen.mjs");
        v && (p(() => y), c(!1));
      } catch (y) {
        console.error("Failed to load icon:", y), v && (x(y), c(!1));
      }
    })(), () => {
      v = !1;
    };
  }, []), m ? /* @__PURE__ */ i.jsx("span", { style: { width: t, height: t } }) : h || !f ? null : /* @__PURE__ */ i.jsx(
    f,
    {
      icon: e,
      className: j(
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
}, Wn = Ce(
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
), yr = Se(
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
    fullWidth: f = !1,
    leftIcon: p,
    rightIcon: m,
    id: c,
    ...h
  }, x) => {
    const v = c || De.useId(), w = `${v}-helper`, y = `${v}-error`, L = /* @__PURE__ */ i.jsxs("div", { className: j("relative", !f && "inline-block"), children: [
      p && /* @__PURE__ */ i.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500", children: /* @__PURE__ */ i.jsx(ee, { icon: p, className: "w-4 h-4" }) }),
      /* @__PURE__ */ i.jsx(
        "input",
        {
          id: v,
          type: "text",
          ref: x,
          className: j(
            Wn({ variant: s ? "error" : n, size: t, rounded: r, fullWidth: f }),
            p && "pl-10",
            m && "pr-10",
            e
          ),
          "aria-describedby": s ? y : a ? w : void 0,
          "aria-invalid": s,
          "aria-required": u,
          ...h
        }
      ),
      m && /* @__PURE__ */ i.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500", children: /* @__PURE__ */ i.jsx(ee, { icon: m, className: "w-4 h-4" }) })
    ] }), N = /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      s && o && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger-500", id: y, children: o }),
      !s && a && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral-500", id: w, children: a })
    ] });
    return d === "left" ? /* @__PURE__ */ i.jsx("div", { className: j(f ? "w-full" : "inline-block", e), children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-start gap-4", children: [
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
      /* @__PURE__ */ i.jsxs("div", { className: j("flex-1", !f && "inline-block"), children: [
        L,
        N
      ] })
    ] }) }) : /* @__PURE__ */ i.jsxs("div", { className: j(f ? "w-full" : "inline-block", e), children: [
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
      L,
      N
    ] });
  }
);
yr.displayName = "Input";
const ut = De.forwardRef(
  ({ className: e, children: n, selected: t, disabled: r, ...s }, o) => /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: o,
      className: j(
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
const Sr = typeof window < "u", $e = () => Sr ? window : {
  innerHeight: 0,
  innerWidth: 0,
  addEventListener: () => {
  },
  removeEventListener: () => {
  }
}, be = () => Sr ? document : {
  addEventListener: () => {
  },
  removeEventListener: () => {
  },
  dispatchEvent: () => {
  }
}, xt = "autocomplete-dropdown-opened", Yn = Ce(
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
), qn = Se(
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
    leftIcon: f,
    rightIcon: p,
    error: m = !1,
    errorText: c,
    helperText: h,
    label: x,
    required: v = !1,
    labelPlacement: w = "top",
    fullWidth: y = !1,
    value: L,
    onChange: N,
    onFocus: k,
    onBlur: V,
    showClear: H = !1,
    onClear: R,
    ...P
  }, F) => {
    const [D, I] = ce(!1), [Y, E] = ce(L || ""), $ = we(null), b = we(null), S = we(null), C = r !== void 0, z = `autocomplete-${De.useId().replace(/:/g, "")}`, M = () => {
      if (!D || !b.current || !S.current) return;
      const { bottom: B, top: K, left: fe, width: ie } = b.current.getBoundingClientRect(), he = S.current, Re = $e(), Fe = {
        position: "fixed",
        left: `${fe}px`,
        width: `${ie}px`
      }, Me = s === "bottom" ? {
        ...Fe,
        top: `${B + 4}px`,
        maxHeight: `${Re.innerHeight - B - 8}px`
      } : {
        ...Fe,
        bottom: `${Re.innerHeight - K + 4}px`,
        maxHeight: `${K - 8}px`
      };
      Object.assign(he.style, Me);
    };
    _e(() => {
      const B = $e(), K = be(), fe = () => {
        D && M();
      }, ie = () => {
        D && M();
      }, he = (Fe) => {
        Fe.detail.id !== z && I(!1);
      }, Re = (Fe) => {
        const Me = Fe.target;
        $.current && !$.current.contains(Me) && S.current && !S.current.contains(Me) && I(!1);
      };
      return D && (M(), B.addEventListener("scroll", fe, !0), B.addEventListener("resize", ie)), K.addEventListener(xt, he), K.addEventListener("click", Re), () => {
        B.removeEventListener("scroll", fe, !0), B.removeEventListener("resize", ie), K.removeEventListener(xt, he), K.removeEventListener("click", Re);
      };
    }, [D, z]), _e(() => {
      E(L || "");
    }, [L]);
    const T = (B) => {
      const { value: K } = B.target;
      if (E(K), !K.trim()) {
        I(!1);
        return;
      }
      I(!0), N == null || N(B);
    }, Z = (B) => {
      B.stopPropagation(), E(""), R == null || R();
      const K = new Event("change");
      K.target = { value: "" }, N == null || N(K);
    }, te = (B) => {
      var he;
      if (!B) return;
      const { value: K, label: fe } = B;
      E(fe), I(!1), t == null || t(K);
      const ie = new CustomEvent("autocomplete-select", {
        detail: { selectedOption: B }
      });
      (he = b.current) == null || he.dispatchEvent(ie);
    }, le = (B) => {
      C || (be().dispatchEvent(
        new CustomEvent(xt, {
          detail: { id: z }
        })
      ), I(!0)), k == null || k(B);
    }, oe = (B) => {
      V == null || V(B);
    }, G = n.filter(
      ({ label: B }) => B.toLowerCase().includes((Y || "").toLowerCase().trim())
    ), J = C ? r : D, Q = H && Y && !P.disabled && !P.readOnly, re = Q ? "mdi:close" : p, de = () => {
      if (!J) return null;
      const B = be();
      if (!("body" in B)) return null;
      const K = /* @__PURE__ */ i.jsx(
        "div",
        {
          ref: S,
          className: j(
            Yn({ position: s }),
            "overflow-auto"
          ),
          onClick: (fe) => fe.stopPropagation(),
          children: o ? /* @__PURE__ */ i.jsx("div", { className: "flex items-center justify-center py-2", children: /* @__PURE__ */ i.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary-500 border-t-transparent" }) }) : G.length > 0 ? G.map((fe) => /* @__PURE__ */ i.jsx(
            ut,
            {
              value: fe.value,
              selected: fe.label === Y,
              onClick: () => te(fe),
              children: a ? a(fe) : fe.label
            },
            fe.value
          )) : /* @__PURE__ */ i.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500", children: "No options found" })
        }
      );
      return Ue(K, B.body);
    };
    return /* @__PURE__ */ i.jsxs("div", { ref: $, className: j("relative", y ? "w-full" : "inline-block"), children: [
      /* @__PURE__ */ i.jsx("div", { ref: b, className: j(!y && "inline-block"), children: /* @__PURE__ */ i.jsx(
        yr,
        {
          ref: F,
          value: Y,
          onChange: T,
          onFocus: le,
          onBlur: oe,
          variant: l,
          size: u,
          rounded: d,
          leftIcon: f,
          rightIcon: re,
          error: m,
          errorText: c,
          helperText: h,
          label: x,
          required: v,
          labelPlacement: w,
          fullWidth: y,
          className: e,
          ...P,
          onClick: Q ? Z : P.onClick
        }
      ) }),
      de()
    ] });
  }
);
qn.displayName = "AutoComplete";
const Kn = {
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
}, Zn = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
}, Xn = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
}, Yo = ({
  items: e,
  multiple: n = !1,
  defaultOpenIds: t = [],
  icon: r = "mdi:chevron-down",
  iconPosition: s = "right",
  className: o,
  contentClassName: a,
  variant: l = "primary",
  shadow: u = "none",
  rounded: d = "lg"
}) => {
  const [f, p] = ce(t), m = (h) => {
    p(
      n ? (x) => x.includes(h) ? x.filter((v) => v !== h) : [...x, h] : (x) => x.includes(h) ? [] : [h]
    );
  }, c = Kn[l];
  return /* @__PURE__ */ i.jsx("div", { className: ae("w-full space-y-2", o), children: e.map((h) => {
    const x = f.includes(h.id), v = !!h.disabled;
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: ae(
          "border overflow-hidden",
          "bg-white",
          "border-gray-200",
          Zn[u],
          Xn[d],
          "transition-shadow duration-200"
        ),
        children: [
          /* @__PURE__ */ i.jsxs(
            "button",
            {
              onClick: () => !v && m(h.id),
              disabled: v,
              className: ae(
                "w-full flex items-center justify-between p-4",
                "text-left transition-colors",
                c.hover,
                x && c.active,
                c.text,
                v && "opacity-50 cursor-not-allowed"
              ),
              children: [
                s === "left" && /* @__PURE__ */ i.jsx(
                  "div",
                  {
                    className: ae(
                      "mr-3 transition-transform duration-200",
                      x && "rotate-180"
                    ),
                    children: /* @__PURE__ */ i.jsx(ee, { icon: r, className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ i.jsx("div", { className: "flex-1", children: h.title }),
                s === "right" && /* @__PURE__ */ i.jsx(
                  "div",
                  {
                    className: ae(
                      "ml-3 transition-transform duration-200",
                      x && "rotate-180"
                    ),
                    children: /* @__PURE__ */ i.jsx(ee, { icon: r, className: "w-5 h-5" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: ae(
                "grid transition-all duration-200 ease-in-out",
                x ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              ),
              children: /* @__PURE__ */ i.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ i.jsx(
                "div",
                {
                  className: ae(
                    "p-4 border-t border-gray-200",
                    a
                  ),
                  children: h.content
                }
              ) })
            }
          )
        ]
      },
      h.id
    );
  }) });
}, qo = ({
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
  }, l = Ke(
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
}, Ko = ({
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
  }, u = Ke(
    "inline-flex items-center font-medium",
    o[n],
    a[t],
    l[r],
    s
  );
  return /* @__PURE__ */ i.jsx("span", { className: u, children: e });
}, Jn = Ce(
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
), Pe = Se(
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
    ...f
  }, p) => {
    const c = u || !!(a || l) && !d;
    return /* @__PURE__ */ i.jsxs(
      "button",
      {
        className: j(
          Jn({
            variant: n,
            size: t,
            rounded: c ? "full" : r,
            fullWidth: s,
            isIconOnly: c,
            className: e
          })
        ),
        ref: p,
        disabled: f.disabled || o,
        ...f,
        children: [
          o && /* @__PURE__ */ i.jsx("span", { className: "animate-spin inline-block w-4 h-4 border-2 border-current border-r-transparent rounded-full" }),
          a && !o && /* @__PURE__ */ i.jsx(ee, { icon: a, className: "w-4 h-4", inline: !0 }),
          d && /* @__PURE__ */ i.jsx("span", { children: d }),
          l && !o && /* @__PURE__ */ i.jsx(ee, { icon: l, className: "w-4 h-4", inline: !0 })
        ]
      }
    );
  }
);
Pe.displayName = "Button";
const Qn = Ce(
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
), Cr = Se(
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
      className: j(Qn({ variant: n, padding: t, shadow: r, rounded: s, className: e })),
      ref: l,
      ...a
    }
  )
);
Cr.displayName = "Card";
const Zo = ({
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
  }, f = {
    primary: "checked:bg-primary-600 checked:border-primary-600 hover:border-primary-600",
    secondary: "checked:bg-secondary-600 checked:border-secondary-600 hover:border-secondary-600",
    success: "checked:bg-success-600 checked:border-success-600 hover:border-success-600",
    warning: "checked:bg-warning-600 checked:border-warning-600 hover:border-warning-600",
    error: "checked:bg-danger-600 checked:border-danger-600 hover:border-danger-600"
  }, m = Ke(
    "border-2 transition-colors duration-200",
    "appearance-none cursor-pointer",
    "checked:bg-no-repeat checked:bg-center",
    o === "circle" ? 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=")]' : 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgM0w0LjUgOC41TDIgNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=")]',
    {
      square: "rounded",
      circle: "rounded-full"
    }[o],
    d[s],
    f[a],
    t && "opacity-50 cursor-not-allowed",
    l
  ), c = Ke(
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
          className: m,
          disabled: t,
          ref: (h) => {
            h && (h.indeterminate = r);
          },
          ...u
        }
      ),
      e && /* @__PURE__ */ i.jsx("label", { className: c, children: e })
    ] }),
    n && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-sm text-danger-600", children: n })
  ] });
}, es = {
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
}, ts = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5"
}, rs = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}, Xo = ({
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
    className: j(
      "inline-flex items-center gap-1.5 font-medium",
      es[n][t],
      ts[r],
      rs[s],
      a
    ),
    children: [
      l && /* @__PURE__ */ i.jsx("span", { className: "inline-flex items-center", children: /* @__PURE__ */ i.jsx(ee, { icon: l, className: "w-4 h-4" }) }),
      e,
      o && /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: o,
          className: "ml-1 rounded-full hover:bg-black/10 p-0.5",
          "aria-label": "Close",
          children: /* @__PURE__ */ i.jsx(ee, { icon: "mdi:close", className: "w-3 h-3" })
        }
      )
    ]
  }
);
var Rr = { exports: {} };
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(At, function() {
    var t = 1e3, r = 6e4, s = 36e5, o = "millisecond", a = "second", l = "minute", u = "hour", d = "day", f = "week", p = "month", m = "quarter", c = "year", h = "date", x = "Invalid Date", v = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, w = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, y = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(E) {
      var $ = ["th", "st", "nd", "rd"], b = E % 100;
      return "[" + E + ($[(b - 20) % 10] || $[b] || $[0]) + "]";
    } }, L = function(E, $, b) {
      var S = String(E);
      return !S || S.length >= $ ? E : "" + Array($ + 1 - S.length).join(b) + E;
    }, N = { s: L, z: function(E) {
      var $ = -E.utcOffset(), b = Math.abs($), S = Math.floor(b / 60), C = b % 60;
      return ($ <= 0 ? "+" : "-") + L(S, 2, "0") + ":" + L(C, 2, "0");
    }, m: function E($, b) {
      if ($.date() < b.date()) return -E(b, $);
      var S = 12 * (b.year() - $.year()) + (b.month() - $.month()), C = $.clone().add(S, p), A = b - C < 0, z = $.clone().add(S + (A ? -1 : 1), p);
      return +(-(S + (b - C) / (A ? C - z : z - C)) || 0);
    }, a: function(E) {
      return E < 0 ? Math.ceil(E) || 0 : Math.floor(E);
    }, p: function(E) {
      return { M: p, y: c, w: f, d, D: h, h: u, m: l, s: a, ms: o, Q: m }[E] || String(E || "").toLowerCase().replace(/s$/, "");
    }, u: function(E) {
      return E === void 0;
    } }, k = "en", V = {};
    V[k] = y;
    var H = "$isDayjsObject", R = function(E) {
      return E instanceof I || !(!E || !E[H]);
    }, P = function E($, b, S) {
      var C;
      if (!$) return k;
      if (typeof $ == "string") {
        var A = $.toLowerCase();
        V[A] && (C = A), b && (V[A] = b, C = A);
        var z = $.split("-");
        if (!C && z.length > 1) return E(z[0]);
      } else {
        var M = $.name;
        V[M] = $, C = M;
      }
      return !S && C && (k = C), C || !S && k;
    }, F = function(E, $) {
      if (R(E)) return E.clone();
      var b = typeof $ == "object" ? $ : {};
      return b.date = E, b.args = arguments, new I(b);
    }, D = N;
    D.l = P, D.i = R, D.w = function(E, $) {
      return F(E, { locale: $.$L, utc: $.$u, x: $.$x, $offset: $.$offset });
    };
    var I = function() {
      function E(b) {
        this.$L = P(b.locale, null, !0), this.parse(b), this.$x = this.$x || b.x || {}, this[H] = !0;
      }
      var $ = E.prototype;
      return $.parse = function(b) {
        this.$d = function(S) {
          var C = S.date, A = S.utc;
          if (C === null) return /* @__PURE__ */ new Date(NaN);
          if (D.u(C)) return /* @__PURE__ */ new Date();
          if (C instanceof Date) return new Date(C);
          if (typeof C == "string" && !/Z$/i.test(C)) {
            var z = C.match(v);
            if (z) {
              var M = z[2] - 1 || 0, T = (z[7] || "0").substring(0, 3);
              return A ? new Date(Date.UTC(z[1], M, z[3] || 1, z[4] || 0, z[5] || 0, z[6] || 0, T)) : new Date(z[1], M, z[3] || 1, z[4] || 0, z[5] || 0, z[6] || 0, T);
            }
          }
          return new Date(C);
        }(b), this.init();
      }, $.init = function() {
        var b = this.$d;
        this.$y = b.getFullYear(), this.$M = b.getMonth(), this.$D = b.getDate(), this.$W = b.getDay(), this.$H = b.getHours(), this.$m = b.getMinutes(), this.$s = b.getSeconds(), this.$ms = b.getMilliseconds();
      }, $.$utils = function() {
        return D;
      }, $.isValid = function() {
        return this.$d.toString() !== x;
      }, $.isSame = function(b, S) {
        var C = F(b);
        return this.startOf(S) <= C && C <= this.endOf(S);
      }, $.isAfter = function(b, S) {
        return F(b) < this.startOf(S);
      }, $.isBefore = function(b, S) {
        return this.endOf(S) < F(b);
      }, $.$g = function(b, S, C) {
        return D.u(b) ? this[S] : this.set(C, b);
      }, $.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, $.valueOf = function() {
        return this.$d.getTime();
      }, $.startOf = function(b, S) {
        var C = this, A = !!D.u(S) || S, z = D.p(b), M = function(Q, re) {
          var de = D.w(C.$u ? Date.UTC(C.$y, re, Q) : new Date(C.$y, re, Q), C);
          return A ? de : de.endOf(d);
        }, T = function(Q, re) {
          return D.w(C.toDate()[Q].apply(C.toDate("s"), (A ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(re)), C);
        }, Z = this.$W, te = this.$M, le = this.$D, oe = "set" + (this.$u ? "UTC" : "");
        switch (z) {
          case c:
            return A ? M(1, 0) : M(31, 11);
          case p:
            return A ? M(1, te) : M(0, te + 1);
          case f:
            var G = this.$locale().weekStart || 0, J = (Z < G ? Z + 7 : Z) - G;
            return M(A ? le - J : le + (6 - J), te);
          case d:
          case h:
            return T(oe + "Hours", 0);
          case u:
            return T(oe + "Minutes", 1);
          case l:
            return T(oe + "Seconds", 2);
          case a:
            return T(oe + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, $.endOf = function(b) {
        return this.startOf(b, !1);
      }, $.$set = function(b, S) {
        var C, A = D.p(b), z = "set" + (this.$u ? "UTC" : ""), M = (C = {}, C[d] = z + "Date", C[h] = z + "Date", C[p] = z + "Month", C[c] = z + "FullYear", C[u] = z + "Hours", C[l] = z + "Minutes", C[a] = z + "Seconds", C[o] = z + "Milliseconds", C)[A], T = A === d ? this.$D + (S - this.$W) : S;
        if (A === p || A === c) {
          var Z = this.clone().set(h, 1);
          Z.$d[M](T), Z.init(), this.$d = Z.set(h, Math.min(this.$D, Z.daysInMonth())).$d;
        } else M && this.$d[M](T);
        return this.init(), this;
      }, $.set = function(b, S) {
        return this.clone().$set(b, S);
      }, $.get = function(b) {
        return this[D.p(b)]();
      }, $.add = function(b, S) {
        var C, A = this;
        b = Number(b);
        var z = D.p(S), M = function(te) {
          var le = F(A);
          return D.w(le.date(le.date() + Math.round(te * b)), A);
        };
        if (z === p) return this.set(p, this.$M + b);
        if (z === c) return this.set(c, this.$y + b);
        if (z === d) return M(1);
        if (z === f) return M(7);
        var T = (C = {}, C[l] = r, C[u] = s, C[a] = t, C)[z] || 1, Z = this.$d.getTime() + b * T;
        return D.w(Z, this);
      }, $.subtract = function(b, S) {
        return this.add(-1 * b, S);
      }, $.format = function(b) {
        var S = this, C = this.$locale();
        if (!this.isValid()) return C.invalidDate || x;
        var A = b || "YYYY-MM-DDTHH:mm:ssZ", z = D.z(this), M = this.$H, T = this.$m, Z = this.$M, te = C.weekdays, le = C.months, oe = C.meridiem, G = function(re, de, B, K) {
          return re && (re[de] || re(S, A)) || B[de].slice(0, K);
        }, J = function(re) {
          return D.s(M % 12 || 12, re, "0");
        }, Q = oe || function(re, de, B) {
          var K = re < 12 ? "AM" : "PM";
          return B ? K.toLowerCase() : K;
        };
        return A.replace(w, function(re, de) {
          return de || function(B) {
            switch (B) {
              case "YY":
                return String(S.$y).slice(-2);
              case "YYYY":
                return D.s(S.$y, 4, "0");
              case "M":
                return Z + 1;
              case "MM":
                return D.s(Z + 1, 2, "0");
              case "MMM":
                return G(C.monthsShort, Z, le, 3);
              case "MMMM":
                return G(le, Z);
              case "D":
                return S.$D;
              case "DD":
                return D.s(S.$D, 2, "0");
              case "d":
                return String(S.$W);
              case "dd":
                return G(C.weekdaysMin, S.$W, te, 2);
              case "ddd":
                return G(C.weekdaysShort, S.$W, te, 3);
              case "dddd":
                return te[S.$W];
              case "H":
                return String(M);
              case "HH":
                return D.s(M, 2, "0");
              case "h":
                return J(1);
              case "hh":
                return J(2);
              case "a":
                return Q(M, T, !0);
              case "A":
                return Q(M, T, !1);
              case "m":
                return String(T);
              case "mm":
                return D.s(T, 2, "0");
              case "s":
                return String(S.$s);
              case "ss":
                return D.s(S.$s, 2, "0");
              case "SSS":
                return D.s(S.$ms, 3, "0");
              case "Z":
                return z;
            }
            return null;
          }(re) || z.replace(":", "");
        });
      }, $.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, $.diff = function(b, S, C) {
        var A, z = this, M = D.p(S), T = F(b), Z = (T.utcOffset() - this.utcOffset()) * r, te = this - T, le = function() {
          return D.m(z, T);
        };
        switch (M) {
          case c:
            A = le() / 12;
            break;
          case p:
            A = le();
            break;
          case m:
            A = le() / 3;
            break;
          case f:
            A = (te - Z) / 6048e5;
            break;
          case d:
            A = (te - Z) / 864e5;
            break;
          case u:
            A = te / s;
            break;
          case l:
            A = te / r;
            break;
          case a:
            A = te / t;
            break;
          default:
            A = te;
        }
        return C ? A : D.a(A);
      }, $.daysInMonth = function() {
        return this.endOf(p).$D;
      }, $.$locale = function() {
        return V[this.$L];
      }, $.locale = function(b, S) {
        if (!b) return this.$L;
        var C = this.clone(), A = P(b, S, !0);
        return A && (C.$L = A), C;
      }, $.clone = function() {
        return D.w(this.$d, this);
      }, $.toDate = function() {
        return new Date(this.valueOf());
      }, $.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, $.toISOString = function() {
        return this.$d.toISOString();
      }, $.toString = function() {
        return this.$d.toUTCString();
      }, E;
    }(), Y = I.prototype;
    return F.prototype = Y, [["$ms", o], ["$s", a], ["$m", l], ["$H", u], ["$W", d], ["$M", p], ["$y", c], ["$D", h]].forEach(function(E) {
      Y[E[1]] = function($) {
        return this.$g($, E[0], E[1]);
      };
    }), F.extend = function(E, $) {
      return E.$i || (E($, I, F), E.$i = !0), F;
    }, F.locale = P, F.isDayjs = R, F.unix = function(E) {
      return F(1e3 * E);
    }, F.en = V[k], F.Ls = V, F.p = {}, F;
  });
})(Rr);
var ns = Rr.exports;
const pe = /* @__PURE__ */ Ot(ns);
var jr = { exports: {} };
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
})(jr);
var ss = jr.exports;
const os = /* @__PURE__ */ Ot(ss);
var _r = { exports: {} };
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
})(_r);
var is = _r.exports;
const as = /* @__PURE__ */ Ot(is);
pe.extend(os);
pe.extend(as);
const ls = Ce(
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
    label: f,
    required: p = !1,
    labelPlacement: m = "top",
    fullWidth: c = !1,
    className: h,
    placeholder: x = "Select date",
    leftIcon: v,
    rightIcon: w,
    monthsToShow: y = 1,
    valueFormatter: L,
    rangeStart: N,
    rangeEnd: k,
    closeOnSelect: V = !0,
    calendarFooter: H,
    ...R
  }, P) => {
    const [F, D] = ce(!1), [I, Y] = ce(e), [E, $] = ce(e || /* @__PURE__ */ new Date()), b = we(null), S = we(null), C = we(null);
    _e(() => {
      Y(e || void 0);
    }, [e]);
    const A = () => {
      if (!F || !S.current || !C.current) return;
      const { bottom: Q, left: re, width: de } = S.current.getBoundingClientRect(), B = C.current, K = $e();
      y === 2 ? Object.assign(B.style, {
        position: "fixed",
        left: `${re}px`,
        top: `${Q + 4}px`,
        minWidth: "500px",
        width: "auto",
        maxHeight: `${K.innerHeight - Q - 8}px`,
        transform: ""
      }) : Object.assign(B.style, {
        position: "fixed",
        left: `${re + de / 2}px`,
        top: `${Q + 4}px`,
        width: "320px",
        maxWidth: "100vw",
        maxHeight: `${K.innerHeight - Q - 8}px`,
        transform: "translateX(-50%)"
      });
    };
    _e(() => {
      const Q = $e(), re = be(), de = () => {
        F && A();
      }, B = () => {
        F && A();
      }, K = (fe) => {
        const ie = fe.target;
        b.current && !b.current.contains(ie) && C.current && !C.current.contains(ie) && D(!1);
      };
      return F && (A(), Q.addEventListener("scroll", de, !0), Q.addEventListener("resize", B)), re.addEventListener("click", K), () => {
        Q.removeEventListener("scroll", de, !0), Q.removeEventListener("resize", B), re.removeEventListener("click", K);
      };
    }, [F]);
    const z = (Q) => {
      Y(Q), n == null || n(Q), V !== !1 && D(!1);
    }, M = () => {
      $(pe(E).subtract(1, "month").toDate());
    }, T = () => {
      $(pe(E).add(1, "month").toDate());
    }, Z = (Q) => {
      const re = pe(Q).startOf("month"), de = pe(Q).endOf("month"), B = [];
      let K = re;
      for (; K.isBefore(de) || K.isSame(de, "day"); )
        B.push(K.toDate()), K = K.add(1, "day");
      return B;
    }, te = (Q) => !!(t && pe(Q).isBefore(t, "day") || r && pe(Q).isAfter(r, "day")), le = () => I ? pe(I).format("DD MMM YYYY") : "", oe = () => {
      if (!F) return null;
      const Q = be();
      if (!("body" in Q)) return null;
      const re = Array.from({ length: y }).map(
        (de, B) => pe(E).add(B, "month").toDate()
      );
      return Ue(
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
                    onClick: M,
                    className: "p-1 rounded-full hover:bg-primary-50 active:bg-primary-100 transition-colors duration-200",
                    children: /* @__PURE__ */ i.jsx(ee, { icon: "mdi:chevron-left", className: "w-5 h-5 text-primary" })
                  }
                ),
                /* @__PURE__ */ i.jsx("span", { className: "font-medium text-gray-900", children: y === 1 ? pe(E).format("MMMM YYYY") : `${pe(E).format("MMMM YYYY")} - ${pe(
                  E
                ).add(y - 1, "month").format("MMMM YYYY")}` }),
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    onClick: T,
                    className: "p-1 rounded-full hover:bg-primary-50 active:bg-primary-100 transition-colors duration-200",
                    children: /* @__PURE__ */ i.jsx(ee, { icon: "mdi:chevron-right", className: "w-5 h-5 text-primary" })
                  }
                )
              ] }),
              /* @__PURE__ */ i.jsx(
                "div",
                {
                  className: j(
                    y === 2 ? "flex gap-5 p-2" : "justify-between p-4"
                  ),
                  children: re.map((de, B) => {
                    const K = Z(de), fe = pe(de).startOf("month").day();
                    return /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col", children: [
                      /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-7 gap-y-1 mb-1", children: [
                        ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                          (ie, he) => {
                            const Re = he === 0 || he === 6;
                            return /* @__PURE__ */ i.jsx(
                              "div",
                              {
                                className: j(
                                  "text-center text-xs font-medium text-neutral-500",
                                  Re && "text-danger-500"
                                ),
                                children: ie
                              },
                              ie
                            );
                          }
                        ),
                        Array.from({ length: fe }).map((ie, he) => /* @__PURE__ */ i.jsx("div", {}, `empty-${he}`)),
                        K.map((ie) => {
                          const he = I && pe(ie).isSame(I, "day"), Re = te(ie), Fe = pe(ie).isSame(de, "month"), Me = N && k && pe(ie).isSameOrAfter(N, "day") && pe(ie).isSameOrBefore(k, "day"), st = N && pe(ie).isSame(N, "day"), ot = k && pe(ie).isSame(k, "day"), Xe = pe(ie).day() === 0 || pe(ie).day() === 6, Ge = N && k;
                          return /* @__PURE__ */ i.jsx("div", { className: "flex flex-col items-center justify-center", children: /* @__PURE__ */ i.jsx(
                            "div",
                            {
                              className: j(
                                Me && "rounded-none bg-primary-50",
                                Ge && st && "rounded-l-full",
                                Ge && ot && "rounded-r-full"
                              ),
                              children: /* @__PURE__ */ i.jsx(
                                "button",
                                {
                                  onClick: () => !Re && z(ie),
                                  disabled: Re,
                                  className: j(
                                    "p-2 text-sm transition-colors duration-200 w-10 h-10 rounded-full",
                                    Xe && "!text-danger",
                                    he && "bg-primary-500 !text-white hover:bg-primary-600 active:bg-primary-700",
                                    he && !Ge && "rounded-full",
                                    !he && !Re && "hover:bg-primary-50 active:bg-primary-100",
                                    !Fe && "text-neutral-400",
                                    Re && "opacity-50 cursor-not-allowed",
                                    // inRange && "bg-primary-50 text-primary-900 rounded-none",
                                    Ge && st && "!bg-primary-500 !text-white !rounded-full",
                                    Ge && ot && "!bg-primary-500 !text-white !rounded-full"
                                  ),
                                  children: pe(ie).format("D")
                                },
                                ie.toString()
                              )
                            }
                          ) });
                        })
                      ] }),
                      H
                    ] }, B);
                  })
                }
              )
            ]
          }
        ),
        Q.body
      );
    }, G = /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: j("relative", !c && "inline-block"),
        ref: S,
        children: [
          v && /* @__PURE__ */ i.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500", children: /* @__PURE__ */ i.jsx(ee, { icon: v, className: "w-4 h-4" }) }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              ref: P,
              type: "text",
              value: L ? L() : le(),
              placeholder: x,
              onClick: () => !l && D(!F),
              readOnly: !0,
              className: j(
                ls({ variant: s, size: o, rounded: a, fullWidth: c }),
                v && "pl-10",
                w && "pr-10",
                h
              ),
              disabled: l,
              ...R
            }
          ),
          w && /* @__PURE__ */ i.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500", children: /* @__PURE__ */ i.jsx(ee, { icon: w, className: "w-4 h-4" }) })
        ]
      }
    ), J = /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      u && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger-500", children: u }),
      !u && d && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral-500", children: d })
    ] });
    return m === "left" ? /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: j(c ? "w-full" : "inline-block", h),
        ref: b,
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-start gap-4", children: [
            f && /* @__PURE__ */ i.jsxs("label", { className: "block text-sm text-neutral-900 pt-2", children: [
              f,
              p && /* @__PURE__ */ i.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: j("flex-1", !c && "inline-block"), children: [
              G,
              J
            ] })
          ] }),
          oe()
        ]
      }
    ) : /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: j(c ? "w-full" : "inline-block", h),
        ref: b,
        children: [
          f && /* @__PURE__ */ i.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
            f,
            p && /* @__PURE__ */ i.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
          ] }),
          G,
          J,
          oe()
        ]
      }
    );
  }
);
Mt.displayName = "PrimitiveDatePicker";
const us = ({
  mode: e = "single",
  value: n,
  onChange: t,
  monthsToShow: r = 1,
  calendarFooter: s,
  ...o
}) => {
  const [a, l] = ce([
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
    const f = (m) => {
      !u || u && d ? (l([m, void 0]), t == null || t([m, void 0])) : u && !d && (m < u ? (l([m, u]), t == null || t([m, u])) : (l([u, m]), t == null || t([u, m])));
    }, p = () => {
      if (!u) return "";
      const m = (c) => c ? c.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }) : "";
      return u && d ? `${m(u)} - ${m(d)}` : m(u);
    };
    return /* @__PURE__ */ i.jsx(
      Mt,
      {
        value: u,
        onChange: f,
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
us.displayName = "DatePicker";
const Nr = Se(
  ({ children: e, onClose: n, className: t, ...r }, s) => /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: s,
      className: j("mb-4 flex items-center justify-between", t),
      ...r,
      children: [
        e,
        n && /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: n,
            className: "ml-4 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700",
            "aria-label": "Close dialog",
            children: /* @__PURE__ */ i.jsx(ee, { icon: "mdi:close", className: "h-5 w-5" })
          }
        )
      ]
    }
  )
), cs = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-4xl",
  fullscreen: "w-full h-full max-w-none max-h-none rounded-none"
}, ds = Se(
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
    const [f, p] = ce(!1), [m, c] = ce(!1);
    if (_e(() => {
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
    }, [e]), _e(() => {
      const w = (y) => {
        y instanceof KeyboardEvent && y.key === "Escape" && n();
      };
      return e && be().addEventListener("keydown", w), () => {
        be().removeEventListener("keydown", w);
      };
    }, [e, n]), !f) return null;
    const h = {
      blur: "backdrop-blur-sm bg-black/30",
      dark: "bg-black/50",
      transparent: "bg-transparent"
    }, x = () => {
      a && n();
    }, v = be();
    return "body" in v ? Ue(
      /* @__PURE__ */ i.jsx(
        "div",
        {
          className: j(
            "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300",
            h[s],
            m ? "opacity-100" : "opacity-0",
            l === "fullscreen" && "items-start"
          ),
          onClick: x,
          children: /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: d,
              className: j(
                "relative transform rounded-lg bg-white p-6 shadow-xl transition-all duration-300",
                cs[l],
                m ? "scale-100 opacity-100" : "scale-95 opacity-0",
                r
              ),
              onClick: (w) => w.stopPropagation(),
              ...u,
              children: [
                o && /* @__PURE__ */ i.jsx(Nr, { onClose: n, children: o }),
                t
              ]
            }
          )
        }
      ),
      v.body
    ) : null;
  }
), gs = Se(
  ({ children: e, className: n, ...t }, r) => /* @__PURE__ */ i.jsx(
    "h2",
    {
      ref: r,
      className: j("text-xl font-semibold text-gray-900", n),
      ...t,
      children: e
    }
  )
), fs = Se(
  ({ children: e, className: n, ...t }, r) => /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: r,
      className: j("text-gray-600", n),
      ...t,
      children: e
    }
  )
), ms = Se(
  ({ children: e, className: n, ...t }, r) => /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: r,
      className: j("mt-6 flex justify-end gap-3", n),
      ...t,
      children: e
    }
  )
);
ds.displayName = "Dialog";
gs.displayName = "DialogTitle";
fs.displayName = "DialogBody";
ms.displayName = "DialogActions";
Nr.displayName = "DialogHeader";
const ps = ({
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
  }, d = Ke(
    "inline-block",
    o[e],
    a[n],
    l[t],
    u[r],
    s
  );
  return /* @__PURE__ */ i.jsx("div", { className: d });
}, Jo = ({
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
  const [u, d] = ce(!1), [f, p] = ce(null), m = we(null), c = Oe((N) => {
    N.preventDefault(), a || d(!0);
  }, [a]), h = Oe((N) => {
    N.preventDefault(), d(!1);
  }, []), x = Oe((N) => N.size > n ? `File size exceeds ${n / (1024 * 1024)}MB limit` : e[0] !== "*" && !e.some((k) => k.startsWith(".") ? N.name.toLowerCase().endsWith(k.toLowerCase()) : N.type.startsWith(k)) ? `File type not allowed. Allowed types: ${e.join(", ")}` : null, [e, n]), v = Oe((N) => {
    if (N.preventDefault(), d(!1), p(null), a) return;
    const k = Array.from(N.dataTransfer.files), V = [], H = [];
    if (k.forEach((R) => {
      const P = x(R);
      P ? H.push(`${R.name}: ${P}`) : V.push(R);
    }), H.length > 0 && p(H.join(`
`)), V.length > 0) {
      const R = t ? [...r, ...V] : V;
      s == null || s(R);
    }
  }, [a, t, s, x, r]), w = Oe((N) => {
    if (p(null), a || !N.target.files) return;
    const k = Array.from(N.target.files), V = [], H = [];
    if (k.forEach((R) => {
      const P = x(R);
      P ? H.push(`${R.name}: ${P}`) : V.push(R);
    }), H.length > 0 && p(H.join(`
`)), V.length > 0) {
      const R = t ? [...r, ...V] : V;
      s == null || s(R);
    }
    m.current && (m.current.value = "");
  }, [a, t, s, x, r]), y = Oe((N) => {
    const k = [...r];
    k.splice(N, 1), s == null || s(k);
  }, [s, r]), L = (N) => N.type.startsWith("image/") ? /* @__PURE__ */ i.jsx(ee, { icon: "mdi:image", className: "w-5 h-5" }) : N.type.startsWith("text/") ? /* @__PURE__ */ i.jsx(ee, { icon: "mdi:file-document", className: "w-5 h-5" }) : /* @__PURE__ */ i.jsx(ee, { icon: "mdi:file", className: "w-5 h-5" });
  return /* @__PURE__ */ i.jsxs("div", { className: ae("w-full", o), children: [
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: ae(
          "border-2 border-dashed rounded-lg p-6 text-center transition-colors",
          "bg-neutral-50",
          "border-neutral-300",
          u && "border-primary bg-primary-50",
          a && "opacity-50 cursor-not-allowed",
          !a && "cursor-pointer hover:border-primary/50"
        ),
        onDragOver: c,
        onDragLeave: h,
        onDrop: v,
        onClick: () => {
          var N;
          return !a && ((N = m.current) == null ? void 0 : N.click());
        },
        children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              ref: m,
              type: "file",
              accept: e.join(","),
              multiple: t,
              onChange: w,
              className: "hidden",
              disabled: a
            }
          ),
          /* @__PURE__ */ i.jsx(ee, { icon: "mdi:upload", className: "w-12 h-12 mx-auto mb-4 text-neutral-400" }),
          /* @__PURE__ */ i.jsx("p", { className: "text-neutral-600", children: l }),
          /* @__PURE__ */ i.jsxs("p", { className: "text-sm text-neutral-500 mt-2", children: [
            "Max file size: ",
            n / (1024 * 1024),
            "MB"
          ] })
        ]
      }
    ),
    f && /* @__PURE__ */ i.jsx("p", { className: "mt-2 text-sm text-danger", children: f }),
    r.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "mt-4 space-y-2", children: r.map((N, k) => /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "flex items-center justify-between p-2 rounded-md bg-neutral-100",
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-center space-x-2", children: [
            L(N),
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
              children: /* @__PURE__ */ i.jsx(ee, { icon: "mdi:close", className: "w-4 h-4" })
            }
          )
        ]
      },
      `${N.name}-${k}`
    )) })
  ] });
}, hs = Ce(
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
), Qo = ({
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
  return /* @__PURE__ */ i.jsxs("div", { className: j(hs({ variant: r, rounded: s }), l), children: [
    t && /* @__PURE__ */ i.jsx(ee, { icon: d(), className: j("h-5 w-5 flex-shrink-0", u()) }),
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
        children: /* @__PURE__ */ i.jsx(ee, { icon: "mdi:close", className: "h-5 w-5" })
      }
    )
  ] });
}, vt = "select-dropdown-opened", xs = Ce(
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
), $r = Se(
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
    value: f,
    onChange: p,
    disabled: m = !1,
    position: c = "bottom",
    fullWidth: h = !0,
    children: x,
    leftIcon: v,
    rightIcon: w,
    ...y
  }, L) => {
    const [N, k] = ce(!1), V = we(null), H = we(null), P = `select-${De.useId().replace(/:/g, "")}`, F = () => {
      if (N && V.current && H.current) {
        const b = V.current.getBoundingClientRect(), S = H.current, C = $e(), A = C.innerHeight - b.bottom, z = b.top, T = b.bottom + S.offsetHeight + 4 >= C.innerHeight, Z = z > A, te = T && Z;
        c === "bottom" || c === "top" ? (S.style.position = "fixed", S.style.left = `${b.left}px`, S.style.width = `${b.width}px`, c === "bottom" && te ? (S.style.bottom = `${C.innerHeight - b.top + 4}px`, S.style.top = "auto", S.style.maxHeight = `${z - 8}px`) : c === "bottom" ? (S.style.top = `${b.bottom + 4}px`, S.style.bottom = "auto", S.style.maxHeight = `${A - 8}px`) : c === "top" && !te ? (S.style.top = `${b.bottom + 4}px`, S.style.bottom = "auto", S.style.maxHeight = `${A - 8}px`) : (S.style.bottom = `${C.innerHeight - b.top + 4}px`, S.style.top = "auto", S.style.maxHeight = `${z - 8}px`)) : c === "left" ? (S.style.position = "fixed", S.style.right = `${C.innerWidth - b.left + 4}px`, S.style.top = `${b.top}px`, S.style.maxHeight = `${C.innerHeight - b.top - 8}px`) : c === "right" && (S.style.position = "fixed", S.style.left = `${b.right + 4}px`, S.style.top = `${b.top}px`, S.style.maxHeight = `${C.innerHeight - b.top - 8}px`);
      }
    };
    _e(() => {
      const b = $e(), S = () => {
        N && F();
      }, C = () => {
        N && F();
      };
      return N && (F(), b.addEventListener("scroll", S, !0), b.addEventListener("resize", C)), () => {
        b.removeEventListener("scroll", S, !0), b.removeEventListener("resize", C);
      };
    }, [N, c]), _e(() => {
      const b = be(), S = (A) => {
        A.detail.id !== P && k(!1);
      }, C = (A) => {
        const z = A.target, M = V.current, T = H.current;
        M && T && !M.contains(z) && !T.contains(z) && k(!1);
      };
      return b.addEventListener(vt, S), b.addEventListener("click", C), () => {
        b.removeEventListener(vt, S), b.removeEventListener("click", C);
      };
    }, [P]);
    const D = () => {
      if (m) return;
      if (N) {
        k(!1);
        return;
      }
      be().dispatchEvent(
        new CustomEvent(vt, {
          detail: { id: P }
        })
      ), k(!0);
    }, I = () => {
      if (s) {
        const b = s.find((S) => S.value === f);
        return b == null ? void 0 : b.label;
      }
      if (x) {
        const S = tr.toArray(x).find(
          (C) => pt(C) && "value" in C.props && C.props.value === f
        );
        return pt(S) ? S.props.children : null;
      }
      return null;
    }, Y = (b) => {
      m || (p == null || p(b), k(!1));
    }, E = () => s ? s.map((b) => /* @__PURE__ */ i.jsx(
      ut,
      {
        value: b.value,
        disabled: b.disabled,
        selected: b.value === f,
        onClick: () => Y(b.value),
        children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
          b.icon,
          b.label
        ] })
      },
      b.value
    )) : x ? tr.map(x, (b) => pt(b) && "value" in b.props ? cn(b, {
      selected: b.props.value === f,
      onClick: () => Y(b.props.value)
    }) : null) : null, $ = () => {
      if (!N || m) return null;
      const b = /* @__PURE__ */ i.jsx(
        "div",
        {
          ref: H,
          className: j(
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
          children: E()
        }
      ), S = be();
      return "body" in S ? Ue(b, S.body) : null;
    };
    return /* @__PURE__ */ i.jsxs("div", { className: j(h ? "w-full" : "inline-block"), ref: L, ...y, children: [
      o && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: P,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            o,
            u && /* @__PURE__ */ i.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: j("relative", !h && "inline-block"), children: [
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            id: P,
            ref: V,
            type: "button",
            className: j(
              xs({ variant: a ? "error" : n, size: t, rounded: r, fullWidth: h }),
              "flex items-center justify-between",
              m && "cursor-not-allowed opacity-50",
              v && "pl-10",
              w && "pr-10",
              e
            ),
            onClick: D,
            "aria-haspopup": "listbox",
            "aria-expanded": N,
            "aria-describedby": a ? `${P}-error` : l ? `${P}-helper` : void 0,
            disabled: m,
            children: [
              v && /* @__PURE__ */ i.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500", children: /* @__PURE__ */ i.jsx(ee, { icon: v, className: "w-4 h-4" }) }),
              /* @__PURE__ */ i.jsx("span", { className: "flex items-center text-neutral-500 gap-2 min-w-0 flex-1", children: /* @__PURE__ */ i.jsx("span", { className: "truncate", children: I() || d }) }),
              w ? /* @__PURE__ */ i.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500", children: /* @__PURE__ */ i.jsx(ee, { icon: w, className: "w-4 h-4" }) }) : /* @__PURE__ */ i.jsx(
                ee,
                {
                  icon: "mdi:chevron-down",
                  className: j("transition-transform flex-shrink-0 ml-2", N && "rotate-180")
                }
              )
            ]
          }
        ),
        $()
      ] }),
      a && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger-500", id: `${P}-error`, children: a }),
      !a && l && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral-500", id: `${P}-helper`, children: l })
    ] });
  }
);
$r.displayName = "Select";
const vs = ({
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
  const f = (c, h) => {
    const x = h - c + 1;
    return Array.from({ length: x }, (v, w) => w + c);
  }, m = (() => {
    const c = s * 2 + 3, h = c + 2;
    if (n > h) {
      const x = Math.max(2, e - s), v = Math.min(n - 1, e + s);
      let w = f(x, v);
      const y = x > 2, L = n - v > 1, N = c - (w.length + 1);
      if (y && !L)
        w = [...f(x - N, x - 1), ...w];
      else if (!y && L) {
        const k = f(v + 1, v + N);
        w = [...w, ...k];
      } else y && L && (w = [...w]);
      return [1, ...w, n];
    }
    return f(1, n);
  })();
  return /* @__PURE__ */ i.jsxs(
    "nav",
    {
      className: ae("flex items-center justify-between space-x-1", o),
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
              $r,
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
            Pe,
            {
              variant: "ghost",
              onClick: () => r(e - 1),
              disabled: e === 1,
              className: ae(
                "px-3 py-1 rounded-md text-sm",
                e === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
              ),
              children: /* @__PURE__ */ i.jsx(ee, { size: "18", icon: "mdi:chevron-left" })
            }
          ),
          m.map((c, h) => {
            const x = c === e, v = typeof c == "string" && c === "...";
            return /* @__PURE__ */ i.jsx(
              Pe,
              {
                variant: "ghost",
                onClick: () => !v && r(c),
                className: ae(
                  "px-3 py-1 rounded-md text-sm",
                  x ? "bg-primary text-white hover:bg-primary" : "text-gray-700",
                  v && "cursor-default"
                ),
                children: c
              },
              h
            );
          }),
          /* @__PURE__ */ i.jsx(
            Pe,
            {
              variant: "ghost",
              onClick: () => r(e + 1),
              disabled: e === n,
              className: ae(
                "px-3 py-1 rounded-md text-sm",
                e === n ? "text-gray-400 cursor-not-allowed" : "text-gray-700"
              ),
              children: /* @__PURE__ */ i.jsx(ee, { size: "18", icon: "mdi:chevron-right" })
            }
          )
        ] })
      ]
    }
  );
}, ei = ({
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
      className: ae(
        "inline-flex items-center cursor-pointer",
        t && "opacity-60 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "radio",
            className: ae(
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
}, bs = Ce(
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
), ws = ({
  width: e,
  height: n,
  variant: t = "default",
  rounded: r = "md",
  fullWidth: s = !1,
  className: o
}) => /* @__PURE__ */ i.jsx(
  "div",
  {
    className: j(bs({ variant: t, rounded: r, fullWidth: s }), o),
    style: {
      width: !s && typeof e == "number" ? `${e}px` : e,
      height: typeof n == "number" ? `${n}px` : n
    }
  }
), ti = ({
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
  const [f, p] = ce(s), [m, c] = ce(!1), h = we(null), x = r !== void 0 ? r : f, v = (V) => {
    if (l) return;
    const H = Math.min(Math.max(V, e), n);
    r === void 0 && p(H), o == null || o(H);
  }, w = (V) => {
    l || (c(!0), N(V));
  }, y = (V) => {
    !m || l || N(V);
  }, L = () => {
    c(!1);
  }, N = (V) => {
    if (!h.current) return;
    const H = h.current.getBoundingClientRect(), P = (V.clientX - H.left) / H.width, F = e + (n - e) * P, D = Math.round(F / t) * t;
    v(D);
  };
  _e(() => {
    if (m) {
      const V = $e();
      V.addEventListener("mousemove", y), V.addEventListener("mouseup", L);
    }
    return () => {
      const V = $e();
      V.removeEventListener("mousemove", y), V.removeEventListener("mouseup", L);
    };
  }, [m]);
  const k = (x - e) / (n - e) * 100;
  return /* @__PURE__ */ i.jsxs("div", { className: ae("relative w-full", a), children: [
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        ref: h,
        className: ae(
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
              className: ae(
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
    d.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "flex justify-between mt-2", children: d.map((V) => /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "text-xs text-gray-500",
        style: { left: `${(V.value - e) / (n - e) * 100}%` },
        children: V.label
      },
      V.value
    )) }),
    u && /* @__PURE__ */ i.jsx("div", { className: "mt-2 text-sm text-gray-600", children: x })
  ] });
}, ys = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8"
}, Ss = {
  primary: "text-primary",
  warning: "text-warning-500",
  default: "text-default-400"
}, ri = ({
  rating: e,
  maxRating: n = 5,
  size: t = "md",
  color: r = "primary",
  readOnly: s = !1,
  onRatingChange: o,
  className: a
}) => {
  const [l, u] = ce(null), d = (c) => {
    s || u(c);
  }, f = () => {
    s || u(null);
  }, p = (c) => {
    !s && o && o(c);
  }, m = l !== null ? l : e;
  return /* @__PURE__ */ i.jsx("div", { className: j("flex items-center gap-1", a), children: [...Array(n)].map((c, h) => {
    const x = h + 1, v = x <= m, w = l !== null && x <= l;
    return /* @__PURE__ */ i.jsx(
      "button",
      {
        className: j(
          "transition-colors duration-200",
          ys[t],
          v || w ? Ss[r] : "text-default-200",
          !s && "cursor-pointer"
        ),
        onMouseEnter: () => d(x),
        onMouseLeave: f,
        onClick: () => p(x),
        disabled: s,
        "aria-label": `Rate ${x} out of ${n}`,
        children: /* @__PURE__ */ i.jsx(
          ee,
          {
            icon: v || w ? "mdi:star" : "mdi:star-outline",
            className: "w-full h-full"
          }
        )
      },
      h
    );
  }) });
}, Cs = {
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
}, Rs = {
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4"
}, ni = ({
  status: e,
  size: n = "md",
  withLabel: t = !1,
  className: r
}) => {
  const { bgColor: s, label: o } = Cs[e], a = Rs[n];
  return /* @__PURE__ */ i.jsxs("div", { className: j("flex items-center gap-2", r), children: [
    /* @__PURE__ */ i.jsx("div", { className: j("rounded-full animate-pulse", s, a) }),
    t && /* @__PURE__ */ i.jsx("span", { className: "text-sm", children: o })
  ] });
}, Er = (e, n) => {
  if (n) return n;
  switch (e) {
    case "completed":
      return "mdi:check";
    case "active":
      return "mdi:circle-medium";
    default:
      return "mdi:circle-outline";
  }
}, Mr = (e) => {
  switch (e) {
    case "completed":
      return "text-white bg-primary-500 ring-4 ring-primary-50";
    case "active":
      return "text-primary-500 bg-primary-50 ring-4 ring-primary-50";
    default:
      return "text-neutral-400 bg-neutral-50 ring-4 ring-neutral-50";
  }
}, js = ({
  steps: e,
  activeStep: n,
  className: t,
  variant: r = "default"
}) => /* @__PURE__ */ i.jsx("div", { className: j("flex flex-row items-center w-full justify-between", t), children: e.map((s, o) => {
  const a = o < n ? "completed" : o === n ? "active" : "pending";
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: "flex items-center flex-1",
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: j(
          "flex flex-col items-center z-10",
          r === "default" ? "gap-4" : "gap-2",
          r === "default" ? "px-5" : "px-3"
        ), children: [
          r === "default" && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: j(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                Mr(a)
              ),
              children: /* @__PURE__ */ i.jsx(
                ee,
                {
                  icon: Er(a, s.icon),
                  className: "h-5 w-5"
                }
              )
            }
          ),
          /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col items-center text-center", children: [
            /* @__PURE__ */ i.jsx(
              "span",
              {
                className: j(
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
          ps,
          {
            className: j(
              "transition-all duration-200",
              o < n ? "bg-primary-500" : "bg-neutral-200"
            )
          }
        )
      ]
    },
    o
  );
}) }), _s = ({
  steps: e,
  activeStep: n,
  className: t,
  variant: r = "default"
}) => /* @__PURE__ */ i.jsx("div", { className: j("flex flex-col items-start gap-8", t), children: e.map((s, o) => {
  const a = o < n ? "completed" : o === n ? "active" : "pending";
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: "flex flex-row w-full items-center relative",
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: j(
          "flex flex-row items-center z-10",
          r === "default" ? "gap-4" : "gap-2"
        ), children: [
          r === "default" && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: j(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                Mr(a)
              ),
              children: /* @__PURE__ */ i.jsx(
                ee,
                {
                  icon: Er(a, s.icon),
                  className: "h-5 w-5"
                }
              )
            }
          ),
          /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col items-start", children: [
            /* @__PURE__ */ i.jsx(
              "span",
              {
                className: j(
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
            className: j(
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
}) }), si = ({
  orientation: e = "horizontal",
  variant: n = "default",
  ...t
}) => e === "vertical" ? /* @__PURE__ */ i.jsx(_s, { variant: n, ...t }) : /* @__PURE__ */ i.jsx(js, { variant: n, ...t }), oi = ({
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
      className: ae(
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
              className: ae(
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
              className: ae(
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
}, ii = ({
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
  var h, x;
  const [d, f] = ce(n || ((h = e[0]) == null ? void 0 : h.id) || ""), p = Oe((v) => {
    f(v), u == null || u(v);
  }, [u]), m = () => {
    switch (r) {
      case "sm":
        return "text-sm px-3 py-1.5";
      case "lg":
        return "text-lg px-6 py-3";
      default:
        return "text-base px-4 py-2";
    }
  }, c = (v, w) => {
    const y = ae(
      "flex items-center space-x-2 transition-colors",
      "font-medium",
      m(),
      w && "opacity-50 cursor-not-allowed",
      !w && "cursor-pointer"
    );
    switch (t) {
      case "pills":
        return ae(
          y,
          "rounded-full",
          v ? "bg-primary text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        );
      case "underline":
        return ae(
          y,
          "border-b-2",
          v ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
      default:
        return ae(
          y,
          "border-b-2",
          v ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
    }
  };
  return /* @__PURE__ */ i.jsxs("div", { className: ae("w-full", s), children: [
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: ae(
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
              className: ae(
                c(w, y),
                a
              ),
              children: [
                v.icon && /* @__PURE__ */ i.jsx(
                  ee,
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
    /* @__PURE__ */ i.jsx("div", { className: ae("mt-4", l), children: (x = e.find((v) => v.id === d)) == null ? void 0 : x.content })
  ] });
}, Ns = ({
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
  return /* @__PURE__ */ i.jsx(a, { className: j("text-gray-900", s[e], t), children: n });
}, bt = "timepicker-dropdown-opened", $s = Ce(
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
), kr = Se(
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
    required: f = !1,
    labelPlacement: p = "top",
    fullWidth: m = !1,
    className: c,
    placeholder: h = "Select time",
    leftIcon: x,
    rightIcon: v,
    valueFormatter: w,
    closeOnSelect: y = !0,
    ...L
  }, N) => {
    const [k, V] = ce(!1), [H, R] = ce(e || ""), [P, F] = ce(0), [D, I] = ce(0), [Y, E] = ce(!0), $ = we(null), b = we(null), S = we(null), A = `timepicker-${De.useId().replace(/:/g, "")}`, z = () => {
      if (!k || !b.current || !S.current) return;
      const G = b.current.getBoundingClientRect(), J = S.current, re = $e().innerHeight - G.bottom;
      J.style.top = `${G.bottom + 4}px`, J.style.bottom = "auto", J.style.left = `${G.left}px`, J.style.maxHeight = `${re - 8}px`, J.style.width = `${G.width}px`;
    };
    _e(() => {
      const G = $e(), J = be(), Q = () => {
        k && z();
      }, re = () => {
        k && z();
      }, de = (K) => {
        K.detail.id !== A && V(!1);
      }, B = (K) => {
        const fe = K.target;
        $.current && S.current && !$.current.contains(fe) && !S.current.contains(fe) && V(!1);
      };
      return k && (z(), G.addEventListener("scroll", Q, !0), G.addEventListener("resize", re)), J.addEventListener(bt, de), J.addEventListener("mousedown", B), () => {
        G.removeEventListener("scroll", Q, !0), G.removeEventListener("resize", re), J.removeEventListener(bt, de), J.removeEventListener("mousedown", B);
      };
    }, [k, A]);
    const M = () => {
      a || (k || be().dispatchEvent(
        new CustomEvent(bt, {
          detail: { id: A }
        })
      ), V(!k));
    };
    _e(() => {
      if (e) {
        R(e);
        const [G, J] = e.split(":").map(Number);
        t ? F(G) : (F(G % 12 || 12), E(G < 12)), I(J);
      }
    }, [e, t]);
    const T = () => {
      const J = `${(t || Y ? P : P + 12).toString().padStart(2, "0")}:${D.toString().padStart(2, "0")}`;
      R(J), n == null || n(J), y && V(!1);
    }, Z = () => t ? Array.from({ length: 24 }, (G, J) => J) : Array.from({ length: 12 }, (G, J) => J + 1), te = () => Array.from({ length: 60 }, (G, J) => J), le = w ? w(H) : H, oe = be();
    return "body" in oe ? /* @__PURE__ */ i.jsxs("div", { ref: $, className: j("relative", m && "w-full", c), children: [
      d && /* @__PURE__ */ i.jsxs(
        "label",
        {
          className: j(
            "block text-sm font-medium text-gray-700 mb-1",
            p === "left" && "inline-block mr-2"
          ),
          children: [
            d,
            f && /* @__PURE__ */ i.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { ref: b, className: "relative", children: [
        x && /* @__PURE__ */ i.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 flex items-center justify-center", children: /* @__PURE__ */ i.jsx(ee, { icon: x, size: 20 }) }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            ref: N,
            type: "text",
            value: le,
            placeholder: h,
            onClick: M,
            readOnly: !0,
            className: j(
              $s({ variant: r, size: s, rounded: o, fullWidth: m }),
              x && "pl-10",
              v && "pr-10",
              "text-left"
            ),
            disabled: a,
            ...L
          }
        ),
        v && /* @__PURE__ */ i.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 flex items-center justify-center", children: /* @__PURE__ */ i.jsx(ee, { icon: v, size: 20 }) })
      ] }),
      k && Ue(
        /* @__PURE__ */ i.jsx(
          "div",
          {
            ref: S,
            className: "fixed z-[9999] min-w-[320px] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            onClick: (G) => G.stopPropagation(),
            children: /* @__PURE__ */ i.jsxs("div", { className: "p-4", children: [
              /* @__PURE__ */ i.jsxs("div", { className: j(
                "grid gap-4 text-sm font-medium text-gray-500",
                t ? "grid-cols-2" : "grid-cols-3"
              ), children: [
                /* @__PURE__ */ i.jsx("span", { children: "Hours" }),
                /* @__PURE__ */ i.jsx("span", { children: "Minutes" }),
                !t && /* @__PURE__ */ i.jsx("span", { children: "AM/PM" })
              ] }),
              /* @__PURE__ */ i.jsxs("div", { className: j(
                "flex mt-2",
                t ? "justify-center gap-8" : "justify-center gap-4"
              ), children: [
                /* @__PURE__ */ i.jsx("div", { className: "w-24 flex flex-col", children: /* @__PURE__ */ i.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ i.jsx("div", { className: "flex flex-col gap-1 py-1", children: Z().map((G) => /* @__PURE__ */ i.jsx(
                  Pe,
                  {
                    variant: "ghost",
                    onClick: () => F(G),
                    className: j(
                      "px-3 py-1.5 text-sm rounded hover:bg-gray-100 w-full justify-start",
                      P === G && "bg-primary-100 text-primary-700"
                    ),
                    children: G.toString().padStart(2, "0")
                  },
                  G
                )) }) }) }),
                /* @__PURE__ */ i.jsx("div", { className: "w-24 flex flex-col", children: /* @__PURE__ */ i.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ i.jsx("div", { className: "flex flex-col gap-1 py-1", children: te().map((G) => /* @__PURE__ */ i.jsx(
                  Pe,
                  {
                    variant: "ghost",
                    onClick: () => I(G),
                    className: j(
                      "px-3 py-1.5 text-sm rounded hover:bg-gray-100 w-full justify-start",
                      D === G && "bg-primary-100 text-primary-700"
                    ),
                    children: G.toString().padStart(2, "0")
                  },
                  G
                )) }) }) }),
                !t && /* @__PURE__ */ i.jsxs("div", { className: "w-24 flex flex-col gap-2", children: [
                  /* @__PURE__ */ i.jsx(
                    Pe,
                    {
                      variant: "ghost",
                      onClick: () => E(!0),
                      className: j(
                        "px-3 py-1.5 text-sm rounded hover:bg-gray-100 w-full justify-start",
                        Y && "bg-primary-100 text-primary-700"
                      ),
                      children: "AM"
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    Pe,
                    {
                      variant: "ghost",
                      onClick: () => E(!1),
                      className: j(
                        "px-3 py-1.5 text-sm rounded hover:bg-gray-100 w-full justify-start",
                        !Y && "bg-primary-100 text-primary-700"
                      ),
                      children: "PM"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ i.jsx("div", { className: "mt-4 flex justify-end", children: /* @__PURE__ */ i.jsx(
                Pe,
                {
                  variant: "primary",
                  onClick: T,
                  size: "sm",
                  children: "Select"
                }
              ) })
            ] })
          }
        ),
        oe.body
      ),
      l && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-sm text-danger-600", children: l }),
      u && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-sm text-gray-500", children: u })
    ] }) : null;
  }
);
kr.displayName = "PrimitiveTimePicker";
const Es = ({
  value: e,
  onChange: n,
  valueFormatter: t,
  closeOnSelect: r,
  ...s
}) => /* @__PURE__ */ i.jsx(
  kr,
  {
    value: e,
    onChange: n,
    valueFormatter: t,
    closeOnSelect: r,
    ...s
  }
);
Es.displayName = "TimePicker";
const Ms = Ce(
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
), ks = Ce(
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
), Ps = Se(
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
    ...f
  }, p) => {
    const m = De.useId(), c = `${m}-helper`, h = `${m}-error`;
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
            className: j(Ms({ variant: u ? "danger" : t, size: r }), d),
            "aria-describedby": u ? h : a ? c : void 0,
            "aria-invalid": u,
            "aria-required": o,
            ...f,
            children: /* @__PURE__ */ i.jsx(
              "span",
              {
                "data-state": e ? "checked" : "unchecked",
                className: j(
                  ks({ size: r }),
                  e ? "translate-x-5" : "translate-x-1"
                )
              }
            )
          }
        ),
        s && /* @__PURE__ */ i.jsxs(
          "label",
          {
            htmlFor: m,
            className: "text-sm text-neutral-900",
            children: [
              s,
              o && /* @__PURE__ */ i.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
            ]
          }
        )
      ] }),
      u && l && /* @__PURE__ */ i.jsx("p", { className: "text-xs text-danger-500", id: h, children: l }),
      !u && a && /* @__PURE__ */ i.jsx("p", { className: "text-xs text-neutral-500", id: c, children: a })
    ] });
  }
);
Ps.displayName = "Toggle";
const Fs = Ce(
  "absolute z-50 px-3 py-2 text-sm rounded-md shadow-lg transition-opacity duration-200",
  {
    variants: {
      color: {
        primary: "bg-primary-500 text-white",
        secondary: "bg-secondary-500 text-white",
        success: "bg-success-500 text-white",
        warning: "bg-warning-500 text-white",
        danger: "bg-danger-500 text-white",
        info: "bg-info-500 text-white",
        neutral: "bg-neutral-500 text-white",
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
), Is = Ce("absolute w-2 h-2 transform rotate-45", {
  variants: {
    color: {
      primary: "bg-primary-500",
      secondary: "bg-secondary-500",
      success: "bg-success-500",
      warning: "bg-warning-500",
      danger: "bg-danger-500",
      info: "bg-info-500",
      neutral: "bg-neutral-500",
      light: "bg-white border-r border-b border-neutral-200"
    }
  },
  defaultVariants: {
    color: "primary"
  }
}), ai = ({
  content: e,
  children: n,
  position: t = "top",
  delay: r = 0,
  className: s,
  color: o = "light",
  size: a = "md",
  isOpen: l,
  onOpenChange: u,
  trigger: d = "hover"
}) => {
  const [f, p] = ce(!1), [m, c] = ce({ top: 0, left: 0 }), h = we(null), x = we(null), v = we(), w = l !== void 0, y = w ? l : f, L = () => {
    if (!h.current || !x.current) return;
    const R = x.current.getBoundingClientRect(), P = h.current.getBoundingClientRect(), F = $e(), D = F.scrollX || F.pageXOffset, I = F.scrollY || F.pageYOffset;
    let Y = 0, E = 0;
    const $ = 8;
    switch (t) {
      case "top":
        Y = R.top + I - P.height - $, E = R.left + D + (R.width - P.width) / 2;
        break;
      case "bottom":
        Y = R.bottom + I + $, E = R.left + D + (R.width - P.width) / 2;
        break;
      case "left":
        Y = R.top + I + (R.height - P.height) / 2, E = R.left + D - P.width - $;
        break;
      case "right":
        Y = R.top + I + (R.height - P.height) / 2, E = R.right + D + $;
        break;
    }
    const b = F.innerWidth, S = F.innerHeight;
    E < 0 && (E = 0), E + P.width > b && (E = b - P.width), Y < 0 && (Y = 0), Y + P.height > S && (Y = S - P.height), c({ top: Y, left: E });
  };
  _e(() => {
    if (y) {
      L();
      const R = $e();
      R.addEventListener("scroll", L, !0), R.addEventListener("resize", L);
    }
    return () => {
      const R = $e();
      R.removeEventListener("scroll", L, !0), R.removeEventListener("resize", L);
    };
  }, [y, t]);
  const N = () => {
    w ? u == null || u(!0) : v.current = setTimeout(() => {
      p(!0);
    }, r);
  }, k = () => {
    v.current && clearTimeout(v.current), w ? u == null || u(!1) : p(!1);
  }, V = (R) => {
    R.stopPropagation(), d === "click" && (w ? u == null || u(!l) : p(!f));
  };
  _e(() => {
    const R = (P) => {
      d === "click" && h.current && !h.current.contains(P.target) && x.current && !x.current.contains(P.target) && k();
    };
    return y && document.addEventListener("click", R), () => {
      document.removeEventListener("click", R);
    };
  }, [y, d]);
  const H = () => {
    if (!y) return null;
    const R = be();
    return "body" in R ? Ue(
      /* @__PURE__ */ i.jsxs(
        "div",
        {
          ref: h,
          className: j(Fs({ color: o, size: a }), s),
          style: {
            top: `${m.top}px`,
            left: `${m.left}px`
          },
          children: [
            e,
            /* @__PURE__ */ i.jsx(
              "div",
              {
                className: j(
                  Is({ color: o }),
                  t === "top" && "bottom-[-4px] left-1/2 -translate-x-1/2",
                  t === "bottom" && "top-[-4px] left-1/2 -translate-x-1/2",
                  t === "left" && "right-[-4px] top-1/2 -translate-y-1/2",
                  t === "right" && "left-[-4px] top-1/2 -translate-y-1/2"
                )
              }
            )
          ]
        }
      ),
      R.body
    ) : null;
  };
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: x,
      className: "relative inline-block",
      onMouseEnter: d === "hover" ? N : void 0,
      onMouseLeave: d === "hover" ? k : void 0,
      onClick: V,
      children: [
        n,
        H()
      ]
    }
  );
}, Ds = Ce(
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
), Vs = {
  sm: 24,
  md: 36,
  lg: 48
}, As = {
  primary: "bg-primary-500",
  secondary: "bg-secondary-500",
  success: "bg-success-500",
  warning: "bg-warning-500",
  danger: "bg-danger-500",
  info: "bg-info-500"
}, Os = {
  primary: "#007C99",
  // Tailwind primary-500
  secondary: "#CEEAE7",
  success: "#00B37D",
  warning: "#F59E0B",
  danger: "#EF4444",
  info: "#0EA5E9"
}, Ls = De.forwardRef(
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
    ...f
  }, p) => {
    const m = Math.min(Math.max(s, 0), 100), c = Vs[r], h = r === "sm" ? 2 : r === "md" ? 3 : 4, x = (c - h) / 2, v = 2 * Math.PI * x, w = v - m / 100 * v;
    let y = "";
    return n === "loading" ? y = "rounded-full" : u ? y = u === "none" ? "" : `rounded-${u}` : y = "rounded-md", n === "circular" ? /* @__PURE__ */ i.jsxs("div", { className: "inline-flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "relative", style: { width: c, height: c }, children: [
        /* @__PURE__ */ i.jsxs(
          "svg",
          {
            className: j(
              "transform -rotate-90",
              o ? "animate-spin" : ""
            ),
            width: c,
            height: c,
            children: [
              /* @__PURE__ */ i.jsx(
                "circle",
                {
                  strokeWidth: h,
                  stroke: "#e5e7eb",
                  fill: "transparent",
                  r: x,
                  cx: c / 2,
                  cy: c / 2
                }
              ),
              /* @__PURE__ */ i.jsx(
                "circle",
                {
                  className: j(
                    "transition-all duration-300 ease-in-out",
                    o ? "animate-dash" : ""
                  ),
                  strokeWidth: h,
                  strokeDasharray: v,
                  strokeDashoffset: o ? 0 : w,
                  strokeLinecap: "round",
                  stroke: Os[t],
                  fill: "transparent",
                  r: x,
                  cx: c / 2,
                  cy: c / 2
                }
              )
            ]
          }
        ),
        d && /* @__PURE__ */ i.jsx("span", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ i.jsx(ee, { icon: d, size: c * 0.5 }) }),
        a && !o && !d && /* @__PURE__ */ i.jsxs("div", { className: "absolute inset-0 flex items-center justify-center text-xs font-medium", children: [
          Math.round(m),
          "%"
        ] })
      ] }),
      l && /* @__PURE__ */ i.jsx("span", { className: "text-sm text-neutral-600", children: l })
    ] }) : /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ i.jsx(
        "div",
        {
          ref: p,
          className: j(Ds({ variant: n === "loading" ? "bar" : n, size: r }), y, e),
          role: "progressbar",
          "aria-valuenow": o ? void 0 : m,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          ...f,
          children: /* @__PURE__ */ i.jsx(
            "div",
            {
              className: j(
                "h-full transition-all duration-300 ease-in-out",
                o ? "animate-progress-indeterminate" : "",
                As[t],
                y
              ),
              style: {
                width: o ? "100%" : `${m}%`
              }
            }
          )
        }
      ),
      (a || l) && /* @__PURE__ */ i.jsxs("div", { className: "flex justify-between text-xs text-neutral-600", children: [
        l && /* @__PURE__ */ i.jsx("span", { children: l }),
        a && !o && /* @__PURE__ */ i.jsxs("span", { children: [
          Math.round(m),
          "%"
        ] })
      ] })
    ] });
  }
);
Ls.displayName = "Progress";
const zs = Ce("flex items-center text-sm", {
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
}), Ts = Se(
  ({
    className: e,
    variant: n = "default",
    size: t = "md",
    items: r,
    separator: s = /* @__PURE__ */ i.jsx(ee, { icon: "mdi:slash-forward", className: "h-4 w-4 flex-shrink-0" }),
    activeLastItem: o = !0,
    ...a
  }, l) => /* @__PURE__ */ i.jsx(
    "nav",
    {
      ref: l,
      className: j(zs({ variant: n, size: t }), e),
      "aria-label": "Breadcrumb",
      ...a,
      children: /* @__PURE__ */ i.jsx("ol", { className: "flex flex-wrap items-center gap-1.5", children: r.map((u, d) => {
        const f = d === r.length - 1, p = f && o;
        return /* @__PURE__ */ i.jsxs(
          "li",
          {
            className: j(
              "flex items-center gap-1.5",
              p && "text-primary-500 font-medium"
            ),
            children: [
              u.icon && /* @__PURE__ */ i.jsx(
                ee,
                {
                  icon: u.icon,
                  className: j(
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
                  className: j(
                    "transition-colors duration-200",
                    "hover:text-primary-500 hover:underline focus:outline-none",
                    "focus-visible:text-primary-500 focus-visible:underline",
                    "active:text-primary-600"
                  ),
                  children: /* @__PURE__ */ i.jsx("span", { className: "truncate max-w-[200px] inline-block align-bottom", children: u.label })
                }
              ) : /* @__PURE__ */ i.jsx("span", { className: j(
                "truncate max-w-[200px] inline-block",
                p && "text-primary-500"
              ), children: u.label }),
              !f && /* @__PURE__ */ i.jsx("span", { className: j(
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
Ts.displayName = "Breadcrumbs";
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
function Ee(e, n) {
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
function Hs(e) {
  return Array.isArray(e) && e.every((n) => typeof n == "number");
}
function Gs(e, n) {
  const t = [], r = (s) => {
    s.forEach((o) => {
      t.push(o);
      const a = n(o);
      a != null && a.length && r(a);
    });
  };
  return r(e), t;
}
function U(e, n, t) {
  let r = [], s;
  return (o) => {
    let a;
    t.key && t.debug && (a = Date.now());
    const l = e(o);
    if (!(l.length !== r.length || l.some((f, p) => r[p] !== f)))
      return s;
    r = l;
    let d;
    if (t.key && t.debug && (d = Date.now()), s = n(...l), t == null || t.onChange == null || t.onChange(s), t.key && t.debug && t != null && t.debug()) {
      const f = Math.round((Date.now() - a) * 100) / 100, p = Math.round((Date.now() - d) * 100) / 100, m = p / 16, c = (h, x) => {
        for (h = String(h); h.length < x; )
          h = " " + h;
        return h;
      };
      console.info(`%c⏱ ${c(p, 5)} /${c(f, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * m, 120))}deg 100% 31%);`, t == null ? void 0 : t.key);
    }
    return s;
  };
}
function W(e, n, t, r) {
  return {
    debug: () => {
      var s;
      return (s = e == null ? void 0 : e.debugAll) != null ? s : e[n];
    },
    key: process.env.NODE_ENV === "development" && t,
    onChange: r
  };
}
function Bs(e, n, t, r) {
  const s = () => {
    var a;
    return (a = o.getValue()) != null ? a : e.options.renderFallbackValue;
  }, o = {
    id: `${n.id}_${t.id}`,
    row: n,
    column: t,
    getValue: () => n.getValue(r),
    renderValue: s,
    getContext: U(() => [e, t, n, o], (a, l, u, d) => ({
      table: a,
      column: l,
      row: u,
      cell: d,
      getValue: d.getValue,
      renderValue: d.renderValue
    }), W(e.options, "debugCells", "cell.getContext"))
  };
  return e._features.forEach((a) => {
    a.createCell == null || a.createCell(o, t, n, e);
  }, {}), o;
}
function Us(e, n, t, r) {
  var s, o;
  const l = {
    ...e._getDefaultColumnDef(),
    ...n
  }, u = l.accessorKey;
  let d = (s = (o = l.id) != null ? o : u ? typeof String.prototype.replaceAll == "function" ? u.replaceAll(".", "_") : u.replace(/\./g, "_") : void 0) != null ? s : typeof l.header == "string" ? l.header : void 0, f;
  if (l.accessorFn ? f = l.accessorFn : u && (u.includes(".") ? f = (m) => {
    let c = m;
    for (const x of u.split(".")) {
      var h;
      c = (h = c) == null ? void 0 : h[x], process.env.NODE_ENV !== "production" && c === void 0 && console.warn(`"${x}" in deeply nested key "${u}" returned undefined.`);
    }
    return c;
  } : f = (m) => m[l.accessorKey]), !d)
    throw process.env.NODE_ENV !== "production" ? new Error(l.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header") : new Error();
  let p = {
    id: `${String(d)}`,
    accessorFn: f,
    parent: r,
    depth: t,
    columnDef: l,
    columns: [],
    getFlatColumns: U(() => [!0], () => {
      var m;
      return [p, ...(m = p.columns) == null ? void 0 : m.flatMap((c) => c.getFlatColumns())];
    }, W(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: U(() => [e._getOrderColumnsFn()], (m) => {
      var c;
      if ((c = p.columns) != null && c.length) {
        let h = p.columns.flatMap((x) => x.getLeafColumns());
        return m(h);
      }
      return [p];
    }, W(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const m of e._features)
    m.createColumn == null || m.createColumn(p, e);
  return p;
}
const ye = "debugHeaders";
function lr(e, n, t) {
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
const Ws = {
  createTable: (e) => {
    e.getHeaderGroups = U(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, r, s) => {
      var o, a;
      const l = (o = r == null ? void 0 : r.map((p) => t.find((m) => m.id === p)).filter(Boolean)) != null ? o : [], u = (a = s == null ? void 0 : s.map((p) => t.find((m) => m.id === p)).filter(Boolean)) != null ? a : [], d = t.filter((p) => !(r != null && r.includes(p.id)) && !(s != null && s.includes(p.id)));
      return it(n, [...l, ...d, ...u], e);
    }, W(e.options, ye, "getHeaderGroups")), e.getCenterHeaderGroups = U(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, r, s) => (t = t.filter((o) => !(r != null && r.includes(o.id)) && !(s != null && s.includes(o.id))), it(n, t, e, "center")), W(e.options, ye, "getCenterHeaderGroups")), e.getLeftHeaderGroups = U(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (n, t, r) => {
      var s;
      const o = (s = r == null ? void 0 : r.map((a) => t.find((l) => l.id === a)).filter(Boolean)) != null ? s : [];
      return it(n, o, e, "left");
    }, W(e.options, ye, "getLeftHeaderGroups")), e.getRightHeaderGroups = U(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (n, t, r) => {
      var s;
      const o = (s = r == null ? void 0 : r.map((a) => t.find((l) => l.id === a)).filter(Boolean)) != null ? s : [];
      return it(n, o, e, "right");
    }, W(e.options, ye, "getRightHeaderGroups")), e.getFooterGroups = U(() => [e.getHeaderGroups()], (n) => [...n].reverse(), W(e.options, ye, "getFooterGroups")), e.getLeftFooterGroups = U(() => [e.getLeftHeaderGroups()], (n) => [...n].reverse(), W(e.options, ye, "getLeftFooterGroups")), e.getCenterFooterGroups = U(() => [e.getCenterHeaderGroups()], (n) => [...n].reverse(), W(e.options, ye, "getCenterFooterGroups")), e.getRightFooterGroups = U(() => [e.getRightHeaderGroups()], (n) => [...n].reverse(), W(e.options, ye, "getRightFooterGroups")), e.getFlatHeaders = U(() => [e.getHeaderGroups()], (n) => n.map((t) => t.headers).flat(), W(e.options, ye, "getFlatHeaders")), e.getLeftFlatHeaders = U(() => [e.getLeftHeaderGroups()], (n) => n.map((t) => t.headers).flat(), W(e.options, ye, "getLeftFlatHeaders")), e.getCenterFlatHeaders = U(() => [e.getCenterHeaderGroups()], (n) => n.map((t) => t.headers).flat(), W(e.options, ye, "getCenterFlatHeaders")), e.getRightFlatHeaders = U(() => [e.getRightHeaderGroups()], (n) => n.map((t) => t.headers).flat(), W(e.options, ye, "getRightFlatHeaders")), e.getCenterLeafHeaders = U(() => [e.getCenterFlatHeaders()], (n) => n.filter((t) => {
      var r;
      return !((r = t.subHeaders) != null && r.length);
    }), W(e.options, ye, "getCenterLeafHeaders")), e.getLeftLeafHeaders = U(() => [e.getLeftFlatHeaders()], (n) => n.filter((t) => {
      var r;
      return !((r = t.subHeaders) != null && r.length);
    }), W(e.options, ye, "getLeftLeafHeaders")), e.getRightLeafHeaders = U(() => [e.getRightFlatHeaders()], (n) => n.filter((t) => {
      var r;
      return !((r = t.subHeaders) != null && r.length);
    }), W(e.options, ye, "getRightLeafHeaders")), e.getLeafHeaders = U(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (n, t, r) => {
      var s, o, a, l, u, d;
      return [...(s = (o = n[0]) == null ? void 0 : o.headers) != null ? s : [], ...(a = (l = t[0]) == null ? void 0 : l.headers) != null ? a : [], ...(u = (d = r[0]) == null ? void 0 : d.headers) != null ? u : []].map((f) => f.getLeafHeaders()).flat();
    }, W(e.options, ye, "getLeafHeaders"));
  }
};
function it(e, n, t, r) {
  var s, o;
  let a = 0;
  const l = function(m, c) {
    c === void 0 && (c = 1), a = Math.max(a, c), m.filter((h) => h.getIsVisible()).forEach((h) => {
      var x;
      (x = h.columns) != null && x.length && l(h.columns, c + 1);
    }, 0);
  };
  l(e);
  let u = [];
  const d = (m, c) => {
    const h = {
      depth: c,
      id: [r, `${c}`].filter(Boolean).join("_"),
      headers: []
    }, x = [];
    m.forEach((v) => {
      const w = [...x].reverse()[0], y = v.column.depth === h.depth;
      let L, N = !1;
      if (y && v.column.parent ? L = v.column.parent : (L = v.column, N = !0), w && (w == null ? void 0 : w.column) === L)
        w.subHeaders.push(v);
      else {
        const k = lr(t, L, {
          id: [r, c, L.id, v == null ? void 0 : v.id].filter(Boolean).join("_"),
          isPlaceholder: N,
          placeholderId: N ? `${x.filter((V) => V.column === L).length}` : void 0,
          depth: c,
          index: x.length
        });
        k.subHeaders.push(v), x.push(k);
      }
      h.headers.push(v), v.headerGroup = h;
    }), u.push(h), c > 0 && d(x, c - 1);
  }, f = n.map((m, c) => lr(t, m, {
    depth: a,
    index: c
  }));
  d(f, a - 1), u.reverse();
  const p = (m) => m.filter((h) => h.column.getIsVisible()).map((h) => {
    let x = 0, v = 0, w = [0];
    h.subHeaders && h.subHeaders.length ? (w = [], p(h.subHeaders).forEach((L) => {
      let {
        colSpan: N,
        rowSpan: k
      } = L;
      x += N, w.push(k);
    })) : x = 1;
    const y = Math.min(...w);
    return v = v + y, h.colSpan = x, h.rowSpan = v, {
      colSpan: x,
      rowSpan: v
    };
  });
  return p((s = (o = u[0]) == null ? void 0 : o.headers) != null ? s : []), u;
}
const Ys = (e, n, t, r, s, o, a) => {
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
    getLeafRows: () => Gs(l.subRows, (u) => u.subRows),
    getParentRow: () => l.parentId ? e.getRow(l.parentId, !0) : void 0,
    getParentRows: () => {
      let u = [], d = l;
      for (; ; ) {
        const f = d.getParentRow();
        if (!f) break;
        u.push(f), d = f;
      }
      return u.reverse();
    },
    getAllCells: U(() => [e.getAllLeafColumns()], (u) => u.map((d) => Bs(e, l, d, d.id)), W(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: U(() => [l.getAllCells()], (u) => u.reduce((d, f) => (d[f.column.id] = f, d), {}), W(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let u = 0; u < e._features.length; u++) {
    const d = e._features[u];
    d == null || d.createRow == null || d.createRow(l, e);
  }
  return l;
}, qs = {
  createColumn: (e, n) => {
    e._getFacetedRowModel = n.options.getFacetedRowModel && n.options.getFacetedRowModel(n, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : n.getPreFilteredRowModel(), e._getFacetedUniqueValues = n.options.getFacetedUniqueValues && n.options.getFacetedUniqueValues(n, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = n.options.getFacetedMinMaxValues && n.options.getFacetedMinMaxValues(n, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, Pr = (e, n, t) => {
  var r, s;
  const o = t == null || (r = t.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((s = e.getValue(n)) == null || (s = s.toString()) == null || (s = s.toLowerCase()) == null) && s.includes(o));
};
Pr.autoRemove = (e) => Ie(e);
const Fr = (e, n, t) => {
  var r;
  return !!(!((r = e.getValue(n)) == null || (r = r.toString()) == null) && r.includes(t));
};
Fr.autoRemove = (e) => Ie(e);
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
  includesString: Pr,
  includesStringSensitive: Fr,
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
const Ks = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: Ee("columnFilters", e),
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
        const s = e.getFilterFn(), o = r == null ? void 0 : r.find((f) => f.id === e.id), a = Te(t, o ? o.value : void 0);
        if (ur(s, a, e)) {
          var l;
          return (l = r == null ? void 0 : r.filter((f) => f.id !== e.id)) != null ? l : [];
        }
        const u = {
          id: e.id,
          value: a
        };
        if (o) {
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
      const t = e.getAllLeafColumns(), r = (s) => {
        var o;
        return (o = Te(n, s)) == null ? void 0 : o.filter((a) => {
          const l = t.find((u) => u.id === a.id);
          if (l) {
            const u = l.getFilterFn();
            if (ur(u, a.value, l))
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
function ur(e, n, t) {
  return (e && e.autoRemove ? e.autoRemove(n, t) : !1) || typeof n > "u" || typeof n == "string" && !n;
}
const Zs = (e, n, t) => t.reduce((r, s) => {
  const o = s.getValue(e);
  return r + (typeof o == "number" ? o : 0);
}, 0), Xs = (e, n, t) => {
  let r;
  return t.forEach((s) => {
    const o = s.getValue(e);
    o != null && (r > o || r === void 0 && o >= o) && (r = o);
  }), r;
}, Js = (e, n, t) => {
  let r;
  return t.forEach((s) => {
    const o = s.getValue(e);
    o != null && (r < o || r === void 0 && o >= o) && (r = o);
  }), r;
}, Qs = (e, n, t) => {
  let r, s;
  return t.forEach((o) => {
    const a = o.getValue(e);
    a != null && (r === void 0 ? a >= a && (r = s = a) : (r > a && (r = a), s < a && (s = a)));
  }), [r, s];
}, eo = (e, n) => {
  let t = 0, r = 0;
  if (n.forEach((s) => {
    let o = s.getValue(e);
    o != null && (o = +o) >= o && (++t, r += o);
  }), t) return r / t;
}, to = (e, n) => {
  if (!n.length)
    return;
  const t = n.map((o) => o.getValue(e));
  if (!Hs(t))
    return;
  if (t.length === 1)
    return t[0];
  const r = Math.floor(t.length / 2), s = t.sort((o, a) => o - a);
  return t.length % 2 !== 0 ? s[r] : (s[r - 1] + s[r]) / 2;
}, ro = (e, n) => Array.from(new Set(n.map((t) => t.getValue(e))).values()), no = (e, n) => new Set(n.map((t) => t.getValue(e))).size, so = (e, n) => n.length, wt = {
  sum: Zs,
  min: Xs,
  max: Js,
  extent: Qs,
  mean: eo,
  median: to,
  unique: ro,
  uniqueCount: no,
  count: so
}, oo = {
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
    onGroupingChange: Ee("grouping", e),
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
function io(e, n, t) {
  if (!(n != null && n.length) || !t)
    return e;
  const r = e.filter((o) => !n.includes(o.id));
  return t === "remove" ? r : [...n.map((o) => e.find((a) => a.id === o)).filter(Boolean), ...r];
}
const ao = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: Ee("columnOrder", e)
  }),
  createColumn: (e, n) => {
    e.getIndex = U((t) => [nt(n, t)], (t) => t.findIndex((r) => r.id === e.id), W(n.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (t) => {
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
    }, e._getOrderColumnsFn = U(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (n, t, r) => (s) => {
      let o = [];
      if (!(n != null && n.length))
        o = s;
      else {
        const a = [...n], l = [...s];
        for (; l.length && a.length; ) {
          const u = a.shift(), d = l.findIndex((f) => f.id === u);
          d > -1 && o.push(l.splice(d, 1)[0]);
        }
        o = [...o, ...l];
      }
      return io(o, t, r);
    }, W(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, yt = () => ({
  left: [],
  right: []
}), lo = {
  getInitialState: (e) => ({
    columnPinning: yt(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: Ee("columnPinning", e)
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
          var d, f;
          return {
            left: [...((d = s == null ? void 0 : s.left) != null ? d : []).filter((p) => !(r != null && r.includes(p))), ...r],
            right: ((f = s == null ? void 0 : s.right) != null ? f : []).filter((p) => !(r != null && r.includes(p)))
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
    e.getCenterVisibleCells = U(() => [e._getAllVisibleCells(), n.getState().columnPinning.left, n.getState().columnPinning.right], (t, r, s) => {
      const o = [...r ?? [], ...s ?? []];
      return t.filter((a) => !o.includes(a.column.id));
    }, W(n.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = U(() => [e._getAllVisibleCells(), n.getState().columnPinning.left], (t, r) => (r ?? []).map((o) => t.find((a) => a.column.id === o)).filter(Boolean).map((o) => ({
      ...o,
      position: "left"
    })), W(n.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = U(() => [e._getAllVisibleCells(), n.getState().columnPinning.right], (t, r) => (r ?? []).map((o) => t.find((a) => a.column.id === o)).filter(Boolean).map((o) => ({
      ...o,
      position: "right"
    })), W(n.options, "debugRows", "getRightVisibleCells"));
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
    }, e.getLeftLeafColumns = U(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (n, t) => (t ?? []).map((r) => n.find((s) => s.id === r)).filter(Boolean), W(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = U(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (n, t) => (t ?? []).map((r) => n.find((s) => s.id === r)).filter(Boolean), W(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = U(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, r) => {
      const s = [...t ?? [], ...r ?? []];
      return n.filter((o) => !s.includes(o.id));
    }, W(e.options, "debugColumns", "getCenterLeafColumns"));
  }
};
function uo(e) {
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
}), co = {
  getDefaultColumnDef: () => at,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: St(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: Ee("columnSizing", e),
    onColumnSizingInfoChange: Ee("columnSizingInfo", e)
  }),
  createColumn: (e, n) => {
    e.getSize = () => {
      var t, r, s;
      const o = n.getState().columnSizing[e.id];
      return Math.min(Math.max((t = e.columnDef.minSize) != null ? t : at.minSize, (r = o ?? e.columnDef.size) != null ? r : at.size), (s = e.columnDef.maxSize) != null ? s : at.maxSize);
    }, e.getStart = U((t) => [t, nt(n, t), n.getState().columnSizing], (t, r) => r.slice(0, e.getIndex(t)).reduce((s, o) => s + o.getSize(), 0), W(n.options, "debugColumns", "getStart")), e.getAfter = U((t) => [t, nt(n, t), n.getState().columnSizing], (t, r) => r.slice(e.getIndex(t) + 1).reduce((s, o) => s + o.getSize(), 0), W(n.options, "debugColumns", "getAfter")), e.resetSize = () => {
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
        const a = e.getSize(), l = e ? e.getLeafHeaders().map((w) => [w.column.id, w.column.getSize()]) : [[r.id, r.getSize()]], u = Ct(o) ? Math.round(o.touches[0].clientX) : o.clientX, d = {}, f = (w, y) => {
          typeof y == "number" && (n.setColumnSizingInfo((L) => {
            var N, k;
            const V = n.options.columnResizeDirection === "rtl" ? -1 : 1, H = (y - ((N = L == null ? void 0 : L.startOffset) != null ? N : 0)) * V, R = Math.max(H / ((k = L == null ? void 0 : L.startSize) != null ? k : 0), -0.999999);
            return L.columnSizingStart.forEach((P) => {
              let [F, D] = P;
              d[F] = Math.round(Math.max(D + D * R, 0) * 100) / 100;
            }), {
              ...L,
              deltaOffset: H,
              deltaPercentage: R
            };
          }), (n.options.columnResizeMode === "onChange" || w === "end") && n.setColumnSizing((L) => ({
            ...L,
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
        }, c = uo(t), h = {
          moveHandler: (w) => p(w.clientX),
          upHandler: (w) => {
            c == null || c.removeEventListener("mousemove", h.moveHandler), c == null || c.removeEventListener("mouseup", h.upHandler), m(w.clientX);
          }
        }, x = {
          moveHandler: (w) => (w.cancelable && (w.preventDefault(), w.stopPropagation()), p(w.touches[0].clientX), !1),
          upHandler: (w) => {
            var y;
            c == null || c.removeEventListener("touchmove", x.moveHandler), c == null || c.removeEventListener("touchend", x.upHandler), w.cancelable && (w.preventDefault(), w.stopPropagation()), m((y = w.touches[0]) == null ? void 0 : y.clientX);
          }
        }, v = go() ? {
          passive: !1
        } : !1;
        Ct(o) ? (c == null || c.addEventListener("touchmove", x.moveHandler, v), c == null || c.addEventListener("touchend", x.upHandler, v)) : (c == null || c.addEventListener("mousemove", h.moveHandler, v), c == null || c.addEventListener("mouseup", h.upHandler, v)), n.setColumnSizingInfo((w) => ({
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
function go() {
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
const fo = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: Ee("columnVisibility", e)
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
    e._getAllVisibleCells = U(() => [e.getAllCells(), n.getState().columnVisibility], (t) => t.filter((r) => r.column.getIsVisible()), W(n.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = U(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (t, r, s) => [...t, ...r, ...s], W(n.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const n = (t, r) => U(() => [r(), r().filter((s) => s.getIsVisible()).map((s) => s.id).join("_")], (s) => s.filter((o) => o.getIsVisible == null ? void 0 : o.getIsVisible()), W(e.options, "debugColumns", t));
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
const mo = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, po = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: Ee("globalFilter", e),
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
}, ho = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: Ee("expanded", e),
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
}, kt = 0, Pt = 10, Rt = () => ({
  pageIndex: kt,
  pageSize: Pt
}), xo = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...Rt(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: Ee("pagination", e)
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
      e.setPageSize(r ? Pt : (s = (o = e.initialState) == null || (o = o.pagination) == null ? void 0 : o.pageSize) != null ? s : Pt);
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
    }), e.getPageOptions = U(() => [e.getPageCount()], (r) => {
      let s = [];
      return r && r > 0 && (s = [...new Array(r)].fill(null).map((o, a) => a)), s;
    }, W(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
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
}), vo = {
  getInitialState: (e) => ({
    rowPinning: jt(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: Ee("rowPinning", e)
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
        var d, f;
        if (t === "bottom") {
          var p, m;
          return {
            top: ((p = u == null ? void 0 : u.top) != null ? p : []).filter((x) => !(l != null && l.has(x))),
            bottom: [...((m = u == null ? void 0 : u.bottom) != null ? m : []).filter((x) => !(l != null && l.has(x))), ...Array.from(l)]
          };
        }
        if (t === "top") {
          var c, h;
          return {
            top: [...((c = u == null ? void 0 : u.top) != null ? c : []).filter((x) => !(l != null && l.has(x))), ...Array.from(l)],
            bottom: ((h = u == null ? void 0 : u.bottom) != null ? h : []).filter((x) => !(l != null && l.has(x)))
          };
        }
        return {
          top: ((d = u == null ? void 0 : u.top) != null ? d : []).filter((x) => !(l != null && l.has(x))),
          bottom: ((f = u == null ? void 0 : u.bottom) != null ? f : []).filter((x) => !(l != null && l.has(x)))
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
    }, e.getTopRows = U(() => [e.getRowModel().rows, e.getState().rowPinning.top], (n, t) => e._getPinnedRows(n, t, "top"), W(e.options, "debugRows", "getTopRows")), e.getBottomRows = U(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (n, t) => e._getPinnedRows(n, t, "bottom"), W(e.options, "debugRows", "getBottomRows")), e.getCenterRows = U(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (n, t, r) => {
      const s = /* @__PURE__ */ new Set([...t ?? [], ...r ?? []]);
      return n.filter((o) => !s.has(o.id));
    }, W(e.options, "debugRows", "getCenterRows"));
  }
}, bo = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: Ee("rowSelection", e),
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
        Ft(s, o.id, r, !0, e);
      }), s;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = U(() => [e.getState().rowSelection, e.getCoreRowModel()], (n, t) => Object.keys(n).length ? _t(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, W(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = U(() => [e.getState().rowSelection, e.getFilteredRowModel()], (n, t) => Object.keys(n).length ? _t(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, W(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = U(() => [e.getState().rowSelection, e.getSortedRowModel()], (n, t) => Object.keys(n).length ? _t(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, W(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
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
        return Ft(l, e.id, t, (a = r == null ? void 0 : r.selectChildren) != null ? a : !0, n), l;
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
}, Ft = (e, n, t, r, s) => {
  var o;
  const a = s.getRow(n, !0);
  t ? (a.getCanMultiSelect() || Object.keys(e).forEach((l) => delete e[l]), a.getCanSelect() && (e[n] = !0)) : delete e[n], r && (o = a.subRows) != null && o.length && a.getCanSelectSubRows() && a.subRows.forEach((l) => Ft(e, l.id, t, r, s));
};
function _t(e, n) {
  const t = e.getState().rowSelection, r = [], s = {}, o = function(a, l) {
    return a.map((u) => {
      var d;
      const f = Tt(u, t);
      if (f && (r.push(u), s[u.id] = u), (d = u.subRows) != null && d.length && (u = {
        ...u,
        subRows: o(u.subRows)
      }), f)
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
const Dt = /([0-9]+)/gm, wo = (e, n, t) => zr(He(e.getValue(t)).toLowerCase(), He(n.getValue(t)).toLowerCase()), yo = (e, n, t) => zr(He(e.getValue(t)), He(n.getValue(t))), So = (e, n, t) => Ht(He(e.getValue(t)).toLowerCase(), He(n.getValue(t)).toLowerCase()), Co = (e, n, t) => Ht(He(e.getValue(t)), He(n.getValue(t))), Ro = (e, n, t) => {
  const r = e.getValue(t), s = n.getValue(t);
  return r > s ? 1 : r < s ? -1 : 0;
}, jo = (e, n, t) => Ht(e.getValue(t), n.getValue(t));
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
  alphanumeric: wo,
  alphanumericCaseSensitive: yo,
  text: So,
  textCaseSensitive: Co,
  datetime: Ro,
  basic: jo
}, _o = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: Ee("sorting", e),
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
        let d = [], f, p = o ? t : s === "desc";
        if (a != null && a.length && e.getCanMultiSort() && r ? l ? f = "toggle" : f = "add" : a != null && a.length && u !== a.length - 1 ? f = "replace" : l ? f = "toggle" : f = "replace", f === "toggle" && (o || s || (f = "remove")), f === "add") {
          var m;
          d = [...a, {
            id: e.id,
            desc: p
          }], d.splice(0, d.length - ((m = n.options.maxMultiSortColCount) != null ? m : Number.MAX_SAFE_INTEGER));
        } else f === "toggle" ? d = a.map((c) => c.id === e.id ? {
          ...c,
          desc: p
        } : c) : f === "remove" ? d = a.filter((c) => c.id !== e.id) : d = [{
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
}, No = [
  Ws,
  fo,
  ao,
  lo,
  qs,
  Ks,
  mo,
  //depends on ColumnFaceting
  po,
  //depends on ColumnFiltering
  _o,
  oo,
  //depends on RowSorting
  ho,
  xo,
  vo,
  bo,
  co
];
function $o(e) {
  var n, t;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const r = [...No, ...(n = e._features) != null ? n : []];
  let s = {
    _features: r
  };
  const o = s._features.reduce((m, c) => Object.assign(m, c.getDefaultOptions == null ? void 0 : c.getDefaultOptions(s)), {}), a = (m) => s.options.mergeOptions ? s.options.mergeOptions(o, m) : {
    ...o,
    ...m
  };
  let u = {
    ...{},
    ...(t = e.initialState) != null ? t : {}
  };
  s._features.forEach((m) => {
    var c;
    u = (c = m.getInitialState == null ? void 0 : m.getInitialState(u)) != null ? c : u;
  });
  const d = [];
  let f = !1;
  const p = {
    _features: r,
    options: {
      ...o,
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
      s.setState(s.initialState);
    },
    setOptions: (m) => {
      const c = Te(m, s.options);
      s.options = a(c);
    },
    getState: () => s.options.state,
    setState: (m) => {
      s.options.onStateChange == null || s.options.onStateChange(m);
    },
    _getRowId: (m, c, h) => {
      var x;
      return (x = s.options.getRowId == null ? void 0 : s.options.getRowId(m, c, h)) != null ? x : `${h ? [h.id, c].join(".") : c}`;
    },
    getCoreRowModel: () => (s._getCoreRowModel || (s._getCoreRowModel = s.options.getCoreRowModel(s)), s._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => s.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (m, c) => {
      let h = (c ? s.getPrePaginationRowModel() : s.getRowModel()).rowsById[m];
      if (!h && (h = s.getCoreRowModel().rowsById[m], !h))
        throw process.env.NODE_ENV !== "production" ? new Error(`getRow could not find row with ID: ${m}`) : new Error();
      return h;
    },
    _getDefaultColumnDef: U(() => [s.options.defaultColumn], (m) => {
      var c;
      return m = (c = m) != null ? c : {}, {
        header: (h) => {
          const x = h.header.column.columnDef;
          return x.accessorKey ? x.accessorKey : x.accessorFn ? x.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (h) => {
          var x, v;
          return (x = (v = h.renderValue()) == null || v.toString == null ? void 0 : v.toString()) != null ? x : null;
        },
        ...s._features.reduce((h, x) => Object.assign(h, x.getDefaultColumnDef == null ? void 0 : x.getDefaultColumnDef()), {}),
        ...m
      };
    }, W(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => s.options.columns,
    getAllColumns: U(() => [s._getColumnDefs()], (m) => {
      const c = function(h, x, v) {
        return v === void 0 && (v = 0), h.map((w) => {
          const y = Us(s, w, v, x), L = w;
          return y.columns = L.columns ? c(L.columns, y, v + 1) : [], y;
        });
      };
      return c(m);
    }, W(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: U(() => [s.getAllColumns()], (m) => m.flatMap((c) => c.getFlatColumns()), W(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: U(() => [s.getAllFlatColumns()], (m) => m.reduce((c, h) => (c[h.id] = h, c), {}), W(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: U(() => [s.getAllColumns(), s._getOrderColumnsFn()], (m, c) => {
      let h = m.flatMap((x) => x.getLeafColumns());
      return c(h);
    }, W(e, "debugColumns", "getAllLeafColumns")),
    getColumn: (m) => {
      const c = s._getAllFlatColumnsById()[m];
      return process.env.NODE_ENV !== "production" && !c && console.error(`[Table] Column with id '${m}' does not exist.`), c;
    }
  };
  Object.assign(s, p);
  for (let m = 0; m < s._features.length; m++) {
    const c = s._features[m];
    c == null || c.createTable == null || c.createTable(s);
  }
  return s;
}
function Eo() {
  return (e) => U(() => [e.options.data], (n) => {
    const t = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(s, o, a) {
      o === void 0 && (o = 0);
      const l = [];
      for (let d = 0; d < s.length; d++) {
        const f = Ys(e, e._getRowId(s[d], d, a), s[d], d, o, void 0, a == null ? void 0 : a.id);
        if (t.flatRows.push(f), t.rowsById[f.id] = f, l.push(f), e.options.getSubRows) {
          var u;
          f.originalSubRows = e.options.getSubRows(s[d], d), (u = f.originalSubRows) != null && u.length && (f.subRows = r(f.originalSubRows, o + 1, f));
        }
      }
      return l;
    };
    return t.rows = r(n), t;
  }, W(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function Mo(e) {
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
function ko(e) {
  return (n) => U(() => [n.getState().pagination, n.getPrePaginationRowModel(), n.options.paginateExpandedRows ? void 0 : n.getState().expanded], (t, r) => {
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
    const d = s * o, f = d + s;
    a = a.slice(d, f);
    let p;
    n.options.paginateExpandedRows ? p = {
      rows: a,
      flatRows: l,
      rowsById: u
    } : p = Mo({
      rows: a,
      flatRows: l,
      rowsById: u
    }), p.flatRows = [];
    const m = (c) => {
      p.flatRows.push(c), c.subRows.length && c.subRows.forEach(m);
    };
    return p.rows.forEach(m), p;
  }, W(n.options, "debugTable", "getPaginationRowModel"));
}
function Po() {
  return (e) => U(() => [e.getState().sorting, e.getPreSortedRowModel()], (n, t) => {
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
      const d = u.map((f) => ({
        ...f
      }));
      return d.sort((f, p) => {
        for (let c = 0; c < o.length; c += 1) {
          var m;
          const h = o[c], x = a[h.id], v = x.sortUndefined, w = (m = h == null ? void 0 : h.desc) != null ? m : !1;
          let y = 0;
          if (v) {
            const L = f.getValue(h.id), N = p.getValue(h.id), k = L === void 0, V = N === void 0;
            if (k || V) {
              if (v === "first") return k ? -1 : 1;
              if (v === "last") return k ? 1 : -1;
              y = k && V ? 0 : k ? v : -v;
            }
          }
          if (y === 0 && (y = x.sortingFn(f, p, h.id)), y !== 0)
            return w && (y *= -1), x.invertSorting && (y *= -1), y;
        }
        return f.index - p.index;
      }), d.forEach((f) => {
        var p;
        s.push(f), (p = f.subRows) != null && p.length && (f.subRows = l(f.subRows));
      }), d;
    };
    return {
      rows: l(t.rows),
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
function cr(e, n) {
  return e ? Fo(e) ? /* @__PURE__ */ Nt.createElement(e, n) : e : null;
}
function Fo(e) {
  return Io(e) || typeof e == "function" || Do(e);
}
function Io(e) {
  return typeof e == "function" && (() => {
    const n = Object.getPrototypeOf(e);
    return n.prototype && n.prototype.isReactComponent;
  })();
}
function Do(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function Vo(e) {
  const n = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [t] = Nt.useState(() => ({
    current: $o(n)
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
}, Ao = ({ schema: e, variant: n = "primary" }) => {
  const t = [{ name: "no", label: "No.", accessorKey: "no", type: "number" }, ...e], r = Tr(n);
  return /* @__PURE__ */ i.jsx("div", { className: "bg-white rounded-md", children: /* @__PURE__ */ i.jsx("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ i.jsxs("table", { className: "w-full border-spacing-0 border-separate", children: [
    /* @__PURE__ */ i.jsx("thead", { className: j("border-2 sticky top-0 z-10 rounded-t-md", r.border), children: /* @__PURE__ */ i.jsx("tr", { children: t.map((s, o) => /* @__PURE__ */ i.jsx(
      "th",
      {
        className: j(
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
        className: j("p-3", {
          [r.stripe]: o % 2 !== 0,
          "bg-white": o % 2 === 0
        }),
        children: t.map((a, l) => /* @__PURE__ */ i.jsx(
          "td",
          {
            className: "text-left text-nowrap text-sm p-4",
            children: /* @__PURE__ */ i.jsx(ws, { className: "h-10 w-full rounded-md" })
          },
          `${o}-${l}`
        ))
      },
      o
    )) })
  ] }) }) });
}, li = ({
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
  onPageChange: f,
  onPageSizeChange: p,
  onSortChange: m,
  onRowClick: c,
  showPagination: h = !1,
  variant: x = "primary",
  meta: v = {
    current_page: 1,
    total_page: 1,
    total_data: 0,
    limit_number: 10
  }
}) => {
  const [w, y] = ce(() => {
    const H = e.find((R) => R.sortable && R.sort);
    return H ? [{
      id: H.accessorKey.toString(),
      desc: H.sort === "desc"
    }] : [];
  }), L = De.useMemo(() => {
    const H = e.map((R) => ({
      accessorKey: R.accessorKey,
      header: R.label,
      enableSorting: !!R.sortable,
      cell: R.render ? ({ row: P }) => {
        var F;
        return (F = R.render) == null ? void 0 : F.call(R, P.original[R.accessorKey], P.original, P.index);
      } : ({ row: P }) => P.original[R.accessorKey] || "-",
      meta: {
        align: R.align || "left"
      }
    }));
    return d ? [{
      accessorKey: "no",
      header: "No.",
      enableSorting: !1,
      cell: ({ row: R }) => (v.current_page - 1) * v.limit_number + R.index + 1,
      meta: {
        align: "left"
      }
    }, ...H] : H;
  }, [e, d, v]), N = Vo({
    data: n,
    columns: L,
    state: {
      sorting: w
    },
    onSortingChange: (H) => {
      const R = typeof H == "function" ? H(w) : H;
      y(R), R.length > 0 ? m == null || m(R[0].desc ? "desc" : "asc", R[0].id) : m == null || m("", "");
    },
    getCoreRowModel: Eo(),
    getSortedRowModel: Po(),
    getPaginationRowModel: ko(),
    manualPagination: !0,
    pageCount: v.total_page
  }), k = Tr(x);
  if (l)
    return u || /* @__PURE__ */ i.jsx(Ao, { schema: e, variant: x });
  const V = (H, R, P) => {
    const F = H.target;
    F.tagName === "BUTTON" || F.tagName === "A" || F.tagName === "INPUT" || F.tagName === "SELECT" || F.closest("button") !== null || F.closest("a") !== null || F.closest("input") !== null || F.closest("select") !== null || c == null || c(R, P);
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "bg-white rounded-md", children: [
    /* @__PURE__ */ i.jsx("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ i.jsxs("table", { className: j("w-full border-spacing-0 border-separate", t), children: [
      /* @__PURE__ */ i.jsx("thead", { className: j("border-2 sticky top-0 z-10 rounded-t-md", k.border), children: N.getHeaderGroups().map((H) => /* @__PURE__ */ i.jsx("tr", { children: H.headers.map((R, P) => {
        var F, D, I;
        return /* @__PURE__ */ i.jsx(
          "th",
          {
            className: j(
              "text-sm text-wrap border-y p-4",
              k.header,
              {
                "cursor-pointer": R.column.getCanSort(),
                "rounded-tl-md": P === 0,
                "rounded-tr-md": P === H.headers.length - 1,
                "text-left": ((F = R.column.columnDef.meta) == null ? void 0 : F.align) === "left",
                "text-center": ((D = R.column.columnDef.meta) == null ? void 0 : D.align) === "center",
                "text-right": ((I = R.column.columnDef.meta) == null ? void 0 : I.align) === "right"
              },
              r
            ),
            onClick: R.column.getCanSort() ? R.column.getToggleSortingHandler() : void 0,
            children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ i.jsx("span", { className: j({
                "font-semibold": P === 0
              }), children: cr(R.column.columnDef.header, R.getContext()) }),
              R.column.getCanSort() && /* @__PURE__ */ i.jsx(
                ee,
                {
                  icon: R.column.getIsSorted() ? R.column.getIsSorted() === "desc" ? "mdi:keyboard-arrow-up" : "mdi:keyboard-arrow-down" : "mdi:unfold-more-horizontal",
                  className: j("h-4 w-4", {
                    "text-white": x !== "ghost",
                    "text-gray-700": x === "ghost"
                  })
                }
              )
            ] })
          },
          R.id
        );
      }) }, H.id)) }),
      /* @__PURE__ */ i.jsx("tbody", { className: "max-h-[50vh]", children: N.getRowModel().rows.length === 0 ? /* @__PURE__ */ i.jsx("tr", { children: /* @__PURE__ */ i.jsx(
        "td",
        {
          colSpan: N.getAllColumns().length,
          className: j(
            "text-center border h-full w-full rounded-b-md"
          ),
          children: a || /* @__PURE__ */ i.jsxs("div", { className: "flex mx-auto w-full text-center justify-center gap-3 items-center", children: [
            /* @__PURE__ */ i.jsx("p", { children: "Data Not Found" }),
            /* @__PURE__ */ i.jsx(ee, { icon: "mdi:face-frown-open", size: 34 })
          ] })
        }
      ) }) : N.getRowModel().rows.map((H, R) => /* @__PURE__ */ i.jsx(
        "tr",
        {
          className: j(
            "p-3",
            k.row,
            {
              [k.stripe]: R % 2 !== 0,
              "bg-white": R % 2 === 0,
              "cursor-pointer": c
            },
            s
          ),
          onClick: (P) => V(P, H.original, R),
          children: H.getVisibleCells().map((P) => {
            var F, D, I;
            return /* @__PURE__ */ i.jsx(
              "td",
              {
                className: j(
                  "px-4 py-3 text-sm text-gray-900",
                  {
                    "text-left": ((F = P.column.columnDef.meta) == null ? void 0 : F.align) === "left",
                    "text-center": ((D = P.column.columnDef.meta) == null ? void 0 : D.align) === "center",
                    "text-right": ((I = P.column.columnDef.meta) == null ? void 0 : I.align) === "right"
                  },
                  o
                ),
                children: cr(P.column.columnDef.cell, P.getContext())
              },
              P.id
            );
          })
        },
        H.id
      )) })
    ] }) }),
    !!n.length && h && /* @__PURE__ */ i.jsx("div", { className: "p-4 bg-white rounded-b-md", children: /* @__PURE__ */ i.jsx(
      vs,
      {
        currentPage: v.current_page,
        totalPages: v.total_page,
        totalData: v.total_data,
        onPageChange: f || (() => {
        }),
        perPage: v.limit_number,
        onPerPageChange: p || (() => {
        }),
        perPageOptions: [5, 10, 20, 50, 100],
        siblingCount: 1
      }
    ) })
  ] });
}, Oo = {
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
  }, f) => {
    const m = a || (l ? {
      default: "mdi:information",
      success: "mdi:check-circle",
      error: "mdi:alert-circle",
      warning: "mdi:alert",
      info: "mdi:information"
    }[n] : void 0), c = r || s;
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        ref: f,
        className: j(
          "flex",
          s ? "items-start gap-3 p-4" : "items-center gap-2 py-2.5 px-3",
          "border border-gray-200",
          Oo[t],
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
          m && /* @__PURE__ */ i.jsx(
            ee,
            {
              icon: m,
              className: j(
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
                className: j("text-sm font-medium leading-5", {
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
                className: j(r ? "mt-1" : "", "text-sm leading-5", {
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
            Pe,
            {
              variant: "ghost",
              size: "sm",
              onClick: o,
              className: j(
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
              children: /* @__PURE__ */ i.jsx(ee, { icon: "mdi:close", className: j(s ? "h-5 w-5" : "h-4 w-4") })
            }
          )
        ]
      }
    );
  }
);
Hr.displayName = "Toast";
const Vt = dn(void 0), Lo = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, ui = ({ children: e }) => {
  const [n, t] = ce([]), r = Oe((l) => {
    t((u) => u.filter((d) => d.id !== l));
  }, []), s = Oe((l) => {
    const u = Math.random().toString(36).substr(2, 9), d = l.position || "top-right", f = l.duration || 5e3, p = {
      ...l,
      id: u,
      position: d
    };
    return t((m) => [...m, p]), f > 0 && setTimeout(() => {
      r(u);
    }, f), u;
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
    Ue(
      /* @__PURE__ */ i.jsx(i.Fragment, { children: Object.entries(o).map(([l, u]) => /* @__PURE__ */ i.jsx(
        "div",
        {
          className: j(
            "fixed z-[100] flex flex-col gap-2 min-w-[320px] max-w-[420px]",
            Lo[l],
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
}, ci = () => {
  const e = gn(Vt);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, zo = ({
  label: e,
  value: n,
  icon: t,
  className: r
}) => /* @__PURE__ */ i.jsxs(Cr, { className: j(
  "flex items-center gap-4 rounded-lg w-full bg-white p-4 shadow-sm hover:bg-neutral-50 transition-shadow duration-200 justify-between",
  r
), children: [
  /* @__PURE__ */ i.jsxs("div", { children: [
    /* @__PURE__ */ i.jsx("p", { className: "text-sm font-medium text-gray-500", children: e }),
    /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-2xl font-semibold text-gray-900", children: n })
  ] }),
  t && /* @__PURE__ */ i.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50", children: /* @__PURE__ */ i.jsx(ee, { icon: t, className: "h-6 w-6 text-primary-600" }) })
] }), To = {
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
}, Ho = {
  "no-internet": "NO_INTERNET",
  "data-not-found": "DATA_NOT_FOUND",
  "under-development": "UNDER_DEVELOPMENT",
  "information-unavailable": "INFORMATION_UNAVAILABLE",
  success: "SUCCESS",
  checked: "CHECKED"
}, dr = {
  ...To,
  ...Gr
}, gr = {
  image: "/img/error.svg",
  message: "An unexpected error occurred. Our team is currently investigating the issue."
}, fr = (e) => typeof e == "object" && e !== null && ("code" in e || "message" in e), di = ({
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
      const p = Ho[s];
      return Gr[p];
    }
    return fr(e) && e.code && dr[e.code] ? dr[e.code] : gr;
  })(), d = o || u.image, f = a || (fr(e) ? e.message : null) || u.message;
  return /* @__PURE__ */ i.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${r}`, children: [
    /* @__PURE__ */ i.jsx(
      "img",
      {
        src: d,
        alt: "Error illustration",
        className: "max-w-[300px] h-auto"
      }
    ),
    /* @__PURE__ */ i.jsx(Ns, { variant: "body1", className: "m-0", children: f }),
    n && /* @__PURE__ */ i.jsx(
      Pe,
      {
        onClick: n,
        rounded: "full",
        variant: "primary",
        size: "md",
        children: "Try Again"
      }
    )
  ] });
}, Go = Ce(
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
), Bo = Se(
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
    showSubmitButton: f = !1,
    submitButtonLabel: p = "Submit",
    submitButtonVariant: m = "primary",
    length: c = 6,
    numericOnly: h = !0,
    onComplete: x,
    onChange: v,
    onSubmit: w,
    value: y,
    defaultValue: L = "",
    disabled: N = !1,
    autoFocus: k = !1,
    ...V
  }, H) => {
    const [R, P] = ce(L || ""), F = we([]);
    _e(() => {
      y !== void 0 && P(y);
    }, [y]);
    const D = y !== void 0, I = D ? y : R, Y = (M) => {
      D || P(M), v == null || v(M), M.length === c && (x == null || x(M), f || w == null || w(M));
    }, E = (M) => (T) => {
      F.current[M] = T;
    }, $ = (M) => {
      M.target.select();
    }, b = (M, T) => {
      var G;
      const Z = M.target.value;
      let te = "";
      if (Z.length >= 1)
        te = Z.slice(-1);
      else if (Z.length === 0) {
        const J = I.split("");
        J[T] = "", Y(J.join(""));
        return;
      }
      if (h && !/^\d$/.test(te))
        return;
      const le = I.split("");
      for (; le.length <= T; )
        le.push("");
      le[T] = te;
      const oe = le.join("");
      Y(oe), T < c - 1 && te && ((G = F.current[T + 1]) == null || G.focus());
    }, S = (M, T) => {
      var Z, te, le;
      if (M.key === "Backspace") {
        const oe = I.split("");
        I[T] ? (M.preventDefault(), oe[T] = "", Y(oe.join(""))) : T > 0 && (M.preventDefault(), oe[T - 1] = "", Y(oe.join("")), (Z = F.current[T - 1]) == null || Z.focus());
      } else if (M.key === "Delete") {
        if (I[T]) {
          M.preventDefault();
          const oe = I.split("");
          oe[T] = "", Y(oe.join(""));
        }
      } else if (M.key === "ArrowLeft" && T > 0)
        M.preventDefault(), (te = F.current[T - 1]) == null || te.focus();
      else if (M.key === "ArrowRight" && T < c - 1)
        M.preventDefault(), (le = F.current[T + 1]) == null || le.focus();
      else if (!M.ctrlKey && !M.altKey && !M.metaKey && M.key.length === 1 && h && !/^\d$/.test(M.key)) {
        M.preventDefault();
        return;
      }
    }, C = (M) => {
      var oe;
      M.preventDefault();
      const T = M.clipboardData.getData("text/plain").trim();
      if (h && !/^\d+$/.test(T))
        return;
      const te = T.slice(0, c).padEnd(I.length, "").slice(0, c);
      Y(te);
      const le = te.length < c ? te.length : c - 1;
      (oe = F.current[le]) == null || oe.focus();
    }, A = () => {
      I.length === c && (w == null || w(I));
    }, z = I.split("").concat(Array(c - I.length).fill(""));
    return /* @__PURE__ */ i.jsxs("div", { ref: H, className: j("w-full", e), ...V, children: [
      l && /* @__PURE__ */ i.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
        l,
        d && /* @__PURE__ */ i.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
        /* @__PURE__ */ i.jsx("div", { className: "flex items-center justify-center gap-2", children: Array.from({ length: c }).map((M, T) => /* @__PURE__ */ i.jsx(
          "input",
          {
            ref: E(T),
            type: h ? "tel" : "text",
            inputMode: h ? "numeric" : "text",
            maxLength: 1,
            value: z[T] || "",
            onChange: (Z) => b(Z, T),
            onKeyDown: (Z) => S(Z, T),
            onPaste: T === 0 ? C : void 0,
            onFocus: $,
            disabled: N,
            autoFocus: k && T === 0,
            className: j(
              Go({
                variant: s ? "error" : n,
                size: t,
                rounded: r
              })
            ),
            "aria-invalid": s
          },
          T
        )) }),
        s && o && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger-500 self-start", children: o }),
        !s && a && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral-500 self-start", children: a }),
        u && /* @__PURE__ */ i.jsx("p", { className: "text-sm text-neutral-600", children: u }),
        f && /* @__PURE__ */ i.jsx(
          Pe,
          {
            variant: m,
            disabled: I.length !== c || N,
            onClick: A,
            className: "mt-4",
            children: p
          }
        )
      ] })
    ] });
  }
);
Bo.displayName = "InputOTP";
const mr = {
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
}, gi = ({
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
  const f = u ? "px-2" : "", p = u ? "min-w-[20px]" : "w-2.5 h-2.5", m = u ? "h-5" : "h-2.5", c = typeof t == "string" && t in mr ? mr[t] : t;
  return /* @__PURE__ */ i.jsxs("div", { className: j("relative inline-block", n), children: [
    o || (e ? /* @__PURE__ */ i.jsx(ee, { icon: e, color: c, size: 32, ...a }) : null),
    /* @__PURE__ */ i.jsx(
      "span",
      {
        className: j(
          "absolute flex items-center justify-center rounded-xl bg-[#FF4C4C] text-white text-[10px] font-semibold",
          l,
          f,
          p,
          m,
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
}, fi = ({
  widgets: e,
  className: n
}) => /* @__PURE__ */ i.jsx("div", { className: j("w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", n), children: e.map((t, r) => /* @__PURE__ */ i.jsx(zo, { ...t }, r)) });
export {
  Yo as Accordion,
  qn as AutoComplete,
  qo as Avatar,
  Ko as Badge,
  gi as BadgeNotif,
  Ts as Breadcrumbs,
  Pe as Button,
  Cr as Card,
  Zo as Checkbox,
  Xo as Chip,
  us as DatePicker,
  ds as Dialog,
  ms as DialogActions,
  fs as DialogBody,
  Nr as DialogHeader,
  gs as DialogTitle,
  ps as Divider,
  di as ErrorWrapper,
  Jo as FileUpload,
  ee as Icon,
  yr as Input,
  Bo as InputOTP,
  Qo as Notification,
  vs as Pagination,
  Mt as PrimitiveDatePicker,
  Ls as Progress,
  ei as Radio,
  $r as Select,
  ut as SelectItem,
  ws as Skeleton,
  ti as Slider,
  ri as StarRating,
  ni as StatusIndicator,
  si as Stepper,
  oi as Switch,
  li as Table,
  ii as Tabs,
  Ns as Text,
  Es as TimePicker,
  Hr as Toast,
  ui as ToastProvider,
  Ps as Toggle,
  ai as Tooltip,
  zo as WidgetCard,
  fi as WidgetCardGroup,
  Jn as buttonVariants,
  Qn as cardVariants,
  j as cn,
  Go as inputOTPVariants,
  Ms as toggleVariants,
  ci as useToast
};
