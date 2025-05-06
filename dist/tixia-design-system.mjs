import Xe, { forwardRef as Ge, useState as Ie, useRef as Be, useEffect as ot, useCallback as ht, Children as Fa, isValidElement as Ji, cloneElement as Oo, createContext as zo, useContext as No } from "react";
import { createPortal as Bt } from "react-dom";
var _o = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _r(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Do(n) {
  if (n.__esModule) return n;
  var e = n.default;
  if (typeof e == "function") {
    var t = function i() {
      return this instanceof i ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(n).forEach(function(i) {
    var s = Object.getOwnPropertyDescriptor(n, i);
    Object.defineProperty(t, i, s.get ? s : {
      enumerable: !0,
      get: function() {
        return n[i];
      }
    });
  }), t;
}
var Ls = { exports: {} }, Jt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ha;
function Yo() {
  if (Ha) return Jt;
  Ha = 1;
  var n = Xe, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function r(o, l, c) {
    var h, d = {}, u = null, g = null;
    c !== void 0 && (u = "" + c), l.key !== void 0 && (u = "" + l.key), l.ref !== void 0 && (g = l.ref);
    for (h in l) i.call(l, h) && !a.hasOwnProperty(h) && (d[h] = l[h]);
    if (o && o.defaultProps) for (h in l = o.defaultProps, l) d[h] === void 0 && (d[h] = l[h]);
    return { $$typeof: e, type: o, key: u, ref: g, props: d, _owner: s.current };
  }
  return Jt.Fragment = t, Jt.jsx = r, Jt.jsxs = r, Jt;
}
var Kt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xa;
function Fo() {
  return Xa || (Xa = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Xe, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), r = Symbol.for("react.provider"), o = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), p = Symbol.iterator, f = "@@iterator";
    function x(E) {
      if (E === null || typeof E != "object")
        return null;
      var U = p && E[p] || E[f];
      return typeof U == "function" ? U : null;
    }
    var m = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(E) {
      {
        for (var U = arguments.length, ie = new Array(U > 1 ? U - 1 : 0), le = 1; le < U; le++)
          ie[le - 1] = arguments[le];
        w("error", E, ie);
      }
    }
    function w(E, U, ie) {
      {
        var le = m.ReactDebugCurrentFrame, ve = le.getStackAddendum();
        ve !== "" && (U += "%s", ie = ie.concat([ve]));
        var Me = ie.map(function(pe) {
          return String(pe);
        });
        Me.unshift("Warning: " + U), Function.prototype.apply.call(console[E], console, Me);
      }
    }
    var y = !1, v = !1, k = !1, A = !1, S = !1, C;
    C = Symbol.for("react.module.reference");
    function L(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === i || E === a || S || E === s || E === c || E === h || A || E === g || y || v || k || typeof E == "object" && E !== null && (E.$$typeof === u || E.$$typeof === d || E.$$typeof === r || E.$$typeof === o || E.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === C || E.getModuleId !== void 0));
    }
    function P(E, U, ie) {
      var le = E.displayName;
      if (le)
        return le;
      var ve = U.displayName || U.name || "";
      return ve !== "" ? ie + "(" + ve + ")" : ie;
    }
    function R(E) {
      return E.displayName || "Context";
    }
    function I(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
        return E.displayName || E.name || null;
      if (typeof E == "string")
        return E;
      switch (E) {
        case i:
          return "Fragment";
        case t:
          return "Portal";
        case a:
          return "Profiler";
        case s:
          return "StrictMode";
        case c:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case o:
            var U = E;
            return R(U) + ".Consumer";
          case r:
            var ie = E;
            return R(ie._context) + ".Provider";
          case l:
            return P(E, E.render, "ForwardRef");
          case d:
            var le = E.displayName || null;
            return le !== null ? le : I(E.type) || "Memo";
          case u: {
            var ve = E, Me = ve._payload, pe = ve._init;
            try {
              return I(pe(Me));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, O = 0, N, D, Y, X, z, F, $;
    function Z() {
    }
    Z.__reactDisabledLog = !0;
    function H() {
      {
        if (O === 0) {
          N = console.log, D = console.info, Y = console.warn, X = console.error, z = console.group, F = console.groupCollapsed, $ = console.groupEnd;
          var E = {
            configurable: !0,
            enumerable: !0,
            value: Z,
            writable: !0
          };
          Object.defineProperties(console, {
            info: E,
            log: E,
            warn: E,
            error: E,
            group: E,
            groupCollapsed: E,
            groupEnd: E
          });
        }
        O++;
      }
    }
    function J() {
      {
        if (O--, O === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, E, {
              value: N
            }),
            info: T({}, E, {
              value: D
            }),
            warn: T({}, E, {
              value: Y
            }),
            error: T({}, E, {
              value: X
            }),
            group: T({}, E, {
              value: z
            }),
            groupCollapsed: T({}, E, {
              value: F
            }),
            groupEnd: T({}, E, {
              value: $
            })
          });
        }
        O < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = m.ReactCurrentDispatcher, V;
    function K(E, U, ie) {
      {
        if (V === void 0)
          try {
            throw Error();
          } catch (ve) {
            var le = ve.stack.trim().match(/\n( *(at )?)/);
            V = le && le[1] || "";
          }
        return `
` + V + E;
      }
    }
    var se = !1, Q;
    {
      var re = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new re();
    }
    function B(E, U) {
      if (!E || se)
        return "";
      {
        var ie = Q.get(E);
        if (ie !== void 0)
          return ie;
      }
      var le;
      se = !0;
      var ve = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Me;
      Me = G.current, G.current = null, H();
      try {
        if (U) {
          var pe = function() {
            throw Error();
          };
          if (Object.defineProperty(pe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(pe, []);
            } catch ($e) {
              le = $e;
            }
            Reflect.construct(E, [], pe);
          } else {
            try {
              pe.call();
            } catch ($e) {
              le = $e;
            }
            E.call(pe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($e) {
            le = $e;
          }
          E();
        }
      } catch ($e) {
        if ($e && le && typeof $e.stack == "string") {
          for (var ge = $e.stack.split(`
`), je = le.stack.split(`
`), ze = ge.length - 1, Ne = je.length - 1; ze >= 1 && Ne >= 0 && ge[ze] !== je[Ne]; )
            Ne--;
          for (; ze >= 1 && Ne >= 0; ze--, Ne--)
            if (ge[ze] !== je[Ne]) {
              if (ze !== 1 || Ne !== 1)
                do
                  if (ze--, Ne--, Ne < 0 || ge[ze] !== je[Ne]) {
                    var Qe = `
` + ge[ze].replace(" at new ", " at ");
                    return E.displayName && Qe.includes("<anonymous>") && (Qe = Qe.replace("<anonymous>", E.displayName)), typeof E == "function" && Q.set(E, Qe), Qe;
                  }
                while (ze >= 1 && Ne >= 0);
              break;
            }
        }
      } finally {
        se = !1, G.current = Me, J(), Error.prepareStackTrace = ve;
      }
      var zt = E ? E.displayName || E.name : "", yt = zt ? K(zt) : "";
      return typeof E == "function" && Q.set(E, yt), yt;
    }
    function ue(E, U, ie) {
      return B(E, !1);
    }
    function Ee(E) {
      var U = E.prototype;
      return !!(U && U.isReactComponent);
    }
    function De(E, U, ie) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return B(E, Ee(E));
      if (typeof E == "string")
        return K(E);
      switch (E) {
        case c:
          return K("Suspense");
        case h:
          return K("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case l:
            return ue(E.render);
          case d:
            return De(E.type, U, ie);
          case u: {
            var le = E, ve = le._payload, Me = le._init;
            try {
              return De(Me(ve), U, ie);
            } catch {
            }
          }
        }
      return "";
    }
    var Ke = Object.prototype.hasOwnProperty, ki = {}, Ma = m.ReactDebugCurrentFrame;
    function Ai(E) {
      if (E) {
        var U = E._owner, ie = De(E.type, E._source, U ? U.type : null);
        Ma.setExtraStackFrame(ie);
      } else
        Ma.setExtraStackFrame(null);
    }
    function ho(E, U, ie, le, ve) {
      {
        var Me = Function.call.bind(Ke);
        for (var pe in E)
          if (Me(E, pe)) {
            var ge = void 0;
            try {
              if (typeof E[pe] != "function") {
                var je = Error((le || "React class") + ": " + ie + " type `" + pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw je.name = "Invariant Violation", je;
              }
              ge = E[pe](U, pe, le, ie, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ze) {
              ge = ze;
            }
            ge && !(ge instanceof Error) && (Ai(ve), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", le || "React class", ie, pe, typeof ge), Ai(null)), ge instanceof Error && !(ge.message in ki) && (ki[ge.message] = !0, Ai(ve), b("Failed %s type: %s", ie, ge.message), Ai(null));
          }
      }
    }
    var uo = Array.isArray;
    function Vi(E) {
      return uo(E);
    }
    function go(E) {
      {
        var U = typeof Symbol == "function" && Symbol.toStringTag, ie = U && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return ie;
      }
    }
    function fo(E) {
      try {
        return La(E), !1;
      } catch {
        return !0;
      }
    }
    function La(E) {
      return "" + E;
    }
    function Pa(E) {
      if (fo(E))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", go(E)), La(E);
    }
    var Ta = m.ReactCurrentOwner, po = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ia, Ea;
    function xo(E) {
      if (Ke.call(E, "ref")) {
        var U = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (U && U.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function mo(E) {
      if (Ke.call(E, "key")) {
        var U = Object.getOwnPropertyDescriptor(E, "key").get;
        if (U && U.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function bo(E, U) {
      typeof E.ref == "string" && Ta.current;
    }
    function vo(E, U) {
      {
        var ie = function() {
          Ia || (Ia = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
        };
        ie.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: ie,
          configurable: !0
        });
      }
    }
    function yo(E, U) {
      {
        var ie = function() {
          Ea || (Ea = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
        };
        ie.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: ie,
          configurable: !0
        });
      }
    }
    var wo = function(E, U, ie, le, ve, Me, pe) {
      var ge = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: E,
        key: U,
        ref: ie,
        props: pe,
        // Record the component responsible for creating this element.
        _owner: Me
      };
      return ge._store = {}, Object.defineProperty(ge._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ge, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: le
      }), Object.defineProperty(ge, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ve
      }), Object.freeze && (Object.freeze(ge.props), Object.freeze(ge)), ge;
    };
    function ko(E, U, ie, le, ve) {
      {
        var Me, pe = {}, ge = null, je = null;
        ie !== void 0 && (Pa(ie), ge = "" + ie), mo(U) && (Pa(U.key), ge = "" + U.key), xo(U) && (je = U.ref, bo(U, ve));
        for (Me in U)
          Ke.call(U, Me) && !po.hasOwnProperty(Me) && (pe[Me] = U[Me]);
        if (E && E.defaultProps) {
          var ze = E.defaultProps;
          for (Me in ze)
            pe[Me] === void 0 && (pe[Me] = ze[Me]);
        }
        if (ge || je) {
          var Ne = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          ge && vo(pe, Ne), je && yo(pe, Ne);
        }
        return wo(E, ge, je, ve, le, Ta.current, pe);
      }
    }
    var $i = m.ReactCurrentOwner, Ra = m.ReactDebugCurrentFrame;
    function Ot(E) {
      if (E) {
        var U = E._owner, ie = De(E.type, E._source, U ? U.type : null);
        Ra.setExtraStackFrame(ie);
      } else
        Ra.setExtraStackFrame(null);
    }
    var Ui;
    Ui = !1;
    function qi(E) {
      return typeof E == "object" && E !== null && E.$$typeof === e;
    }
    function Oa() {
      {
        if ($i.current) {
          var E = I($i.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function Ao(E) {
      return "";
    }
    var za = {};
    function So(E) {
      {
        var U = Oa();
        if (!U) {
          var ie = typeof E == "string" ? E : E.displayName || E.name;
          ie && (U = `

Check the top-level render call using <` + ie + ">.");
        }
        return U;
      }
    }
    function Na(E, U) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var ie = So(U);
        if (za[ie])
          return;
        za[ie] = !0;
        var le = "";
        E && E._owner && E._owner !== $i.current && (le = " It was passed a child from " + I(E._owner.type) + "."), Ot(E), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ie, le), Ot(null);
      }
    }
    function _a(E, U) {
      {
        if (typeof E != "object")
          return;
        if (Vi(E))
          for (var ie = 0; ie < E.length; ie++) {
            var le = E[ie];
            qi(le) && Na(le, U);
          }
        else if (qi(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var ve = x(E);
          if (typeof ve == "function" && ve !== E.entries)
            for (var Me = ve.call(E), pe; !(pe = Me.next()).done; )
              qi(pe.value) && Na(pe.value, U);
        }
      }
    }
    function Co(E) {
      {
        var U = E.type;
        if (U == null || typeof U == "string")
          return;
        var ie;
        if (typeof U == "function")
          ie = U.propTypes;
        else if (typeof U == "object" && (U.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        U.$$typeof === d))
          ie = U.propTypes;
        else
          return;
        if (ie) {
          var le = I(U);
          ho(ie, E.props, "prop", le, E);
        } else if (U.PropTypes !== void 0 && !Ui) {
          Ui = !0;
          var ve = I(U);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ve || "Unknown");
        }
        typeof U.getDefaultProps == "function" && !U.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Mo(E) {
      {
        for (var U = Object.keys(E.props), ie = 0; ie < U.length; ie++) {
          var le = U[ie];
          if (le !== "children" && le !== "key") {
            Ot(E), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", le), Ot(null);
            break;
          }
        }
        E.ref !== null && (Ot(E), b("Invalid attribute `ref` supplied to `React.Fragment`."), Ot(null));
      }
    }
    var Da = {};
    function Ya(E, U, ie, le, ve, Me) {
      {
        var pe = L(E);
        if (!pe) {
          var ge = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (ge += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var je = Ao();
          je ? ge += je : ge += Oa();
          var ze;
          E === null ? ze = "null" : Vi(E) ? ze = "array" : E !== void 0 && E.$$typeof === e ? (ze = "<" + (I(E.type) || "Unknown") + " />", ge = " Did you accidentally export a JSX literal instead of a component?") : ze = typeof E, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ze, ge);
        }
        var Ne = ko(E, U, ie, ve, Me);
        if (Ne == null)
          return Ne;
        if (pe) {
          var Qe = U.children;
          if (Qe !== void 0)
            if (le)
              if (Vi(Qe)) {
                for (var zt = 0; zt < Qe.length; zt++)
                  _a(Qe[zt], E);
                Object.freeze && Object.freeze(Qe);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _a(Qe, E);
        }
        if (Ke.call(U, "key")) {
          var yt = I(E), $e = Object.keys(U).filter(function(Ro) {
            return Ro !== "key";
          }), Zi = $e.length > 0 ? "{key: someKey, " + $e.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Da[yt + Zi]) {
            var Eo = $e.length > 0 ? "{" + $e.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Zi, yt, Eo, yt), Da[yt + Zi] = !0;
          }
        }
        return E === i ? Mo(Ne) : Co(Ne), Ne;
      }
    }
    function Lo(E, U, ie) {
      return Ya(E, U, ie, !0);
    }
    function Po(E, U, ie) {
      return Ya(E, U, ie, !1);
    }
    var To = Po, Io = Lo;
    Kt.Fragment = i, Kt.jsx = To, Kt.jsxs = Io;
  }()), Kt;
}
process.env.NODE_ENV === "production" ? Ls.exports = Yo() : Ls.exports = Fo();
var M = Ls.exports;
function Dr(n) {
  var e, t, i = "";
  if (typeof n == "string" || typeof n == "number") i += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var s = n.length;
    for (e = 0; e < s; e++) n[e] && (t = Dr(n[e])) && (i && (i += " "), i += t);
  } else for (t in n) n[t] && (i && (i += " "), i += t);
  return i;
}
function fe() {
  for (var n, e, t = 0, i = "", s = arguments.length; t < s; t++) (n = arguments[t]) && (e = Dr(n)) && (i && (i += " "), i += e);
  return i;
}
const ja = (n) => typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n, Wa = fe, lt = (n, e) => (t) => {
  var i;
  if ((e == null ? void 0 : e.variants) == null) return Wa(n, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: s, defaultVariants: a } = e, r = Object.keys(s).map((c) => {
    const h = t == null ? void 0 : t[c], d = a == null ? void 0 : a[c];
    if (h === null) return null;
    const u = ja(h) || ja(d);
    return s[c][u];
  }), o = t && Object.entries(t).reduce((c, h) => {
    let [d, u] = h;
    return u === void 0 || (c[d] = u), c;
  }, {}), l = e == null || (i = e.compoundVariants) === null || i === void 0 ? void 0 : i.reduce((c, h) => {
    let { class: d, className: u, ...g } = h;
    return Object.entries(g).every((p) => {
      let [f, x] = p;
      return Array.isArray(x) ? x.includes({
        ...a,
        ...o
      }[f]) : {
        ...a,
        ...o
      }[f] === x;
    }) ? [
      ...c,
      d,
      u
    ] : c;
  }, []);
  return Wa(n, r, l, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
}, sa = "-", Ho = (n) => {
  const e = jo(n), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: i
  } = n;
  return {
    getClassGroupId: (r) => {
      const o = r.split(sa);
      return o[0] === "" && o.length !== 1 && o.shift(), Yr(o, e) || Xo(r);
    },
    getConflictingClassGroupIds: (r, o) => {
      const l = t[r] || [];
      return o && i[r] ? [...l, ...i[r]] : l;
    }
  };
}, Yr = (n, e) => {
  var r;
  if (n.length === 0)
    return e.classGroupId;
  const t = n[0], i = e.nextPart.get(t), s = i ? Yr(n.slice(1), i) : void 0;
  if (s)
    return s;
  if (e.validators.length === 0)
    return;
  const a = n.join(sa);
  return (r = e.validators.find(({
    validator: o
  }) => o(a))) == null ? void 0 : r.classGroupId;
}, Ba = /^\[(.+)\]$/, Xo = (n) => {
  if (Ba.test(n)) {
    const e = Ba.exec(n)[1], t = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, jo = (n) => {
  const {
    theme: e,
    prefix: t
  } = n, i = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Bo(Object.entries(n.classGroups), t).forEach(([a, r]) => {
    Ps(r, i, a, e);
  }), i;
}, Ps = (n, e, t, i) => {
  n.forEach((s) => {
    if (typeof s == "string") {
      const a = s === "" ? e : Ga(e, s);
      a.classGroupId = t;
      return;
    }
    if (typeof s == "function") {
      if (Wo(s)) {
        Ps(s(i), e, t, i);
        return;
      }
      e.validators.push({
        validator: s,
        classGroupId: t
      });
      return;
    }
    Object.entries(s).forEach(([a, r]) => {
      Ps(r, Ga(e, a), t, i);
    });
  });
}, Ga = (n, e) => {
  let t = n;
  return e.split(sa).forEach((i) => {
    t.nextPart.has(i) || t.nextPart.set(i, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(i);
  }), t;
}, Wo = (n) => n.isThemeGetter, Bo = (n, e) => e ? n.map(([t, i]) => {
  const s = i.map((a) => typeof a == "string" ? e + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([r, o]) => [e + r, o])) : a);
  return [t, s];
}) : n, Go = (n) => {
  if (n < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, t = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  const s = (a, r) => {
    t.set(a, r), e++, e > n && (e = 0, i = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let r = t.get(a);
      if (r !== void 0)
        return r;
      if ((r = i.get(a)) !== void 0)
        return s(a, r), r;
    },
    set(a, r) {
      t.has(a) ? t.set(a, r) : s(a, r);
    }
  };
}, Fr = "!", Vo = (n) => {
  const {
    separator: e,
    experimentalParseClassName: t
  } = n, i = e.length === 1, s = e[0], a = e.length, r = (o) => {
    const l = [];
    let c = 0, h = 0, d;
    for (let x = 0; x < o.length; x++) {
      let m = o[x];
      if (c === 0) {
        if (m === s && (i || o.slice(x, x + a) === e)) {
          l.push(o.slice(h, x)), h = x + a;
          continue;
        }
        if (m === "/") {
          d = x;
          continue;
        }
      }
      m === "[" ? c++ : m === "]" && c--;
    }
    const u = l.length === 0 ? o : o.substring(h), g = u.startsWith(Fr), p = g ? u.substring(1) : u, f = d && d > h ? d - h : void 0;
    return {
      modifiers: l,
      hasImportantModifier: g,
      baseClassName: p,
      maybePostfixModifierPosition: f
    };
  };
  return t ? (o) => t({
    className: o,
    parseClassName: r
  }) : r;
}, $o = (n) => {
  if (n.length <= 1)
    return n;
  const e = [];
  let t = [];
  return n.forEach((i) => {
    i[0] === "[" ? (e.push(...t.sort(), i), t = []) : t.push(i);
  }), e.push(...t.sort()), e;
}, Uo = (n) => ({
  cache: Go(n.cacheSize),
  parseClassName: Vo(n),
  ...Ho(n)
}), qo = /\s+/, Zo = (n, e) => {
  const {
    parseClassName: t,
    getClassGroupId: i,
    getConflictingClassGroupIds: s
  } = e, a = [], r = n.trim().split(qo);
  let o = "";
  for (let l = r.length - 1; l >= 0; l -= 1) {
    const c = r[l], {
      modifiers: h,
      hasImportantModifier: d,
      baseClassName: u,
      maybePostfixModifierPosition: g
    } = t(c);
    let p = !!g, f = i(p ? u.substring(0, g) : u);
    if (!f) {
      if (!p) {
        o = c + (o.length > 0 ? " " + o : o);
        continue;
      }
      if (f = i(u), !f) {
        o = c + (o.length > 0 ? " " + o : o);
        continue;
      }
      p = !1;
    }
    const x = $o(h).join(":"), m = d ? x + Fr : x, b = m + f;
    if (a.includes(b))
      continue;
    a.push(b);
    const w = s(f, p);
    for (let y = 0; y < w.length; ++y) {
      const v = w[y];
      a.push(m + v);
    }
    o = c + (o.length > 0 ? " " + o : o);
  }
  return o;
};
function Jo() {
  let n = 0, e, t, i = "";
  for (; n < arguments.length; )
    (e = arguments[n++]) && (t = Hr(e)) && (i && (i += " "), i += t);
  return i;
}
const Hr = (n) => {
  if (typeof n == "string")
    return n;
  let e, t = "";
  for (let i = 0; i < n.length; i++)
    n[i] && (e = Hr(n[i])) && (t && (t += " "), t += e);
  return t;
};
function Ko(n, ...e) {
  let t, i, s, a = r;
  function r(l) {
    const c = e.reduce((h, d) => d(h), n());
    return t = Uo(c), i = t.cache.get, s = t.cache.set, a = o, o(l);
  }
  function o(l) {
    const c = i(l);
    if (c)
      return c;
    const h = Zo(l, t);
    return s(l, h), h;
  }
  return function() {
    return a(Jo.apply(null, arguments));
  };
}
const Te = (n) => {
  const e = (t) => t[n] || [];
  return e.isThemeGetter = !0, e;
}, Xr = /^\[(?:([a-z-]+):)?(.+)\]$/i, Qo = /^\d+\/\d+$/, el = /* @__PURE__ */ new Set(["px", "full", "screen"]), tl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, il = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, sl = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, al = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, rl = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ct = (n) => Ft(n) || el.has(n) || Qo.test(n), gt = (n) => Gt(n, "length", gl), Ft = (n) => !!n && !Number.isNaN(Number(n)), Ki = (n) => Gt(n, "number", Ft), Qt = (n) => !!n && Number.isInteger(Number(n)), nl = (n) => n.endsWith("%") && Ft(n.slice(0, -1)), he = (n) => Xr.test(n), ft = (n) => tl.test(n), ol = /* @__PURE__ */ new Set(["length", "size", "percentage"]), ll = (n) => Gt(n, ol, jr), cl = (n) => Gt(n, "position", jr), hl = /* @__PURE__ */ new Set(["image", "url"]), dl = (n) => Gt(n, hl, pl), ul = (n) => Gt(n, "", fl), ei = () => !0, Gt = (n, e, t) => {
  const i = Xr.exec(n);
  return i ? i[1] ? typeof e == "string" ? i[1] === e : e.has(i[1]) : t(i[2]) : !1;
}, gl = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  il.test(n) && !sl.test(n)
), jr = () => !1, fl = (n) => al.test(n), pl = (n) => rl.test(n), xl = () => {
  const n = Te("colors"), e = Te("spacing"), t = Te("blur"), i = Te("brightness"), s = Te("borderColor"), a = Te("borderRadius"), r = Te("borderSpacing"), o = Te("borderWidth"), l = Te("contrast"), c = Te("grayscale"), h = Te("hueRotate"), d = Te("invert"), u = Te("gap"), g = Te("gradientColorStops"), p = Te("gradientColorStopPositions"), f = Te("inset"), x = Te("margin"), m = Te("opacity"), b = Te("padding"), w = Te("saturate"), y = Te("scale"), v = Te("sepia"), k = Te("skew"), A = Te("space"), S = Te("translate"), C = () => ["auto", "contain", "none"], L = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", he, e], R = () => [he, e], I = () => ["", ct, gt], T = () => ["auto", Ft, he], O = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], N = () => ["solid", "dashed", "dotted", "double", "none"], D = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Y = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], X = () => ["", "0", he], z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], F = () => [Ft, he];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ei],
      spacing: [ct, gt],
      blur: ["none", "", ft, he],
      brightness: F(),
      borderColor: [n],
      borderRadius: ["none", "", "full", ft, he],
      borderSpacing: R(),
      borderWidth: I(),
      contrast: F(),
      grayscale: X(),
      hueRotate: F(),
      invert: X(),
      gap: R(),
      gradientColorStops: [n],
      gradientColorStopPositions: [nl, gt],
      inset: P(),
      margin: P(),
      opacity: F(),
      padding: R(),
      saturate: F(),
      scale: F(),
      sepia: X(),
      skew: F(),
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
        aspect: ["auto", "square", "video", he]
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
        columns: [ft]
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
        object: [...O(), he]
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
        inset: [f]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [f]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [f]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [f]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [f]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [f]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [f]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [f]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [f]
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
        z: ["auto", Qt, he]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: P()
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
        flex: ["1", "auto", "initial", "none", he]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: X()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: X()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Qt, he]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ei]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Qt, he]
        }, he]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": T()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": T()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ei]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Qt, he]
        }, he]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": T()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": T()
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
        "auto-cols": ["auto", "min", "max", "fr", he]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", he]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [u]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [u]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [u]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...Y()]
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
        content: ["normal", ...Y(), "baseline"]
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
        "place-content": [...Y(), "baseline"]
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
        p: [b]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [b]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [b]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [b]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [b]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [b]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [b]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [b]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [b]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [x]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [x]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [x]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [x]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [x]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [x]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [x]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [x]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [x]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [A]
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
        "space-y": [A]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", he, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [he, e, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [he, e, "none", "full", "min", "max", "fit", "prose", {
          screen: [ft]
        }, ft]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [he, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [he, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [he, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [he, e, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ft, gt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ki]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ei]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", he]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ft, Ki]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ct, he]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", he]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", he]
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
        placeholder: [n]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [m]
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
        text: [n]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [m]
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
        decoration: [...N(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ct, gt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ct, he]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [n]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", he]
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
        content: ["none", he]
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
        "bg-opacity": [m]
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
        bg: [...O(), cl]
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
        bg: ["auto", "cover", "contain", ll]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, dl]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [n]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [p]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [p]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [g]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [g]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [o]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [o]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [o]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [o]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [o]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [o]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [o]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [o]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [o]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [m]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...N(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [o]
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
        "divide-y": [o]
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
        "divide-opacity": [m]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: N()
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
        outline: ["", ...N()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ct, he]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ct, gt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [n]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: I()
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
        ring: [n]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [m]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [ct, gt]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [n]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", ft, ul]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ei]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [m]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...D(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": D()
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
        brightness: [i]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", ft, he]
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
        "hue-rotate": [h]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [d]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [w]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [v]
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
        "backdrop-brightness": [i]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
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
        "backdrop-hue-rotate": [h]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [d]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [m]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [w]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [v]
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
        "border-spacing": [r]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [r]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [r]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", he]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: F()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", he]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: F()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", he]
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
        scale: [y]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [y]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [y]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Qt, he]
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
        "skew-x": [k]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [k]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", he]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", n]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", he]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [n]
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
        "will-change": ["auto", "scroll", "contents", "transform", he]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [n, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ct, gt, Ki]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [n, "none"]
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
}, Pt = /* @__PURE__ */ Ko(xl);
function ae(...n) {
  return Pt(fe(n));
}
const ai = /^[a-z0-9]+(-[a-z0-9]+)*$/, Xi = (n, e, t, i = "") => {
  const s = n.split(":");
  if (n.slice(0, 1) === "@") {
    if (s.length < 2 || s.length > 3)
      return null;
    i = s.shift().slice(1);
  }
  if (s.length > 3 || !s.length)
    return null;
  if (s.length > 1) {
    const o = s.pop(), l = s.pop(), c = {
      // Allow provider without '@': "provider:prefix:name"
      provider: s.length > 0 ? s[0] : i,
      prefix: l,
      name: o
    };
    return e && !Pi(c) ? null : c;
  }
  const a = s[0], r = a.split("-");
  if (r.length > 1) {
    const o = {
      provider: i,
      prefix: r.shift(),
      name: r.join("-")
    };
    return e && !Pi(o) ? null : o;
  }
  if (t && i === "") {
    const o = {
      provider: i,
      prefix: "",
      name: a
    };
    return e && !Pi(o, t) ? null : o;
  }
  return null;
}, Pi = (n, e) => n ? !!((n.provider === "" || n.provider.match(ai)) && (e && n.prefix === "" || n.prefix.match(ai)) && n.name.match(ai)) : !1, Wr = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Ni = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), aa = Object.freeze({
  ...Wr,
  ...Ni
}), Ts = Object.freeze({
  ...aa,
  body: "",
  hidden: !1
});
function ml(n, e) {
  const t = {};
  !n.hFlip != !e.hFlip && (t.hFlip = !0), !n.vFlip != !e.vFlip && (t.vFlip = !0);
  const i = ((n.rotate || 0) + (e.rotate || 0)) % 4;
  return i && (t.rotate = i), t;
}
function Va(n, e) {
  const t = ml(n, e);
  for (const i in Ts)
    i in Ni ? i in n && !(i in t) && (t[i] = Ni[i]) : i in e ? t[i] = e[i] : i in n && (t[i] = n[i]);
  return t;
}
function bl(n, e) {
  const t = n.icons, i = n.aliases || /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null);
  function a(r) {
    if (t[r])
      return s[r] = [];
    if (!(r in s)) {
      s[r] = null;
      const o = i[r] && i[r].parent, l = o && a(o);
      l && (s[r] = [o].concat(l));
    }
    return s[r];
  }
  return Object.keys(t).concat(Object.keys(i)).forEach(a), s;
}
function vl(n, e, t) {
  const i = n.icons, s = n.aliases || /* @__PURE__ */ Object.create(null);
  let a = {};
  function r(o) {
    a = Va(
      i[o] || s[o],
      a
    );
  }
  return r(e), t.forEach(r), Va(n, a);
}
function Br(n, e) {
  const t = [];
  if (typeof n != "object" || typeof n.icons != "object")
    return t;
  n.not_found instanceof Array && n.not_found.forEach((s) => {
    e(s, null), t.push(s);
  });
  const i = bl(n);
  for (const s in i) {
    const a = i[s];
    a && (e(s, vl(n, s, a)), t.push(s));
  }
  return t;
}
const yl = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Wr
};
function Qi(n, e) {
  for (const t in e)
    if (t in n && typeof n[t] != typeof e[t])
      return !1;
  return !0;
}
function Gr(n) {
  if (typeof n != "object" || n === null)
    return null;
  const e = n;
  if (typeof e.prefix != "string" || !n.icons || typeof n.icons != "object" || !Qi(n, yl))
    return null;
  const t = e.icons;
  for (const s in t) {
    const a = t[s];
    if (!s.match(ai) || typeof a.body != "string" || !Qi(
      a,
      Ts
    ))
      return null;
  }
  const i = e.aliases || /* @__PURE__ */ Object.create(null);
  for (const s in i) {
    const a = i[s], r = a.parent;
    if (!s.match(ai) || typeof r != "string" || !t[r] && !i[r] || !Qi(
      a,
      Ts
    ))
      return null;
  }
  return e;
}
const $a = /* @__PURE__ */ Object.create(null);
function wl(n, e) {
  return {
    provider: n,
    prefix: e,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function Tt(n, e) {
  const t = $a[n] || ($a[n] = /* @__PURE__ */ Object.create(null));
  return t[e] || (t[e] = wl(n, e));
}
function ra(n, e) {
  return Gr(e) ? Br(e, (t, i) => {
    i ? n.icons[t] = i : n.missing.add(t);
  }) : [];
}
function kl(n, e, t) {
  try {
    if (typeof t.body == "string")
      return n.icons[e] = { ...t }, !0;
  } catch {
  }
  return !1;
}
let li = !1;
function Vr(n) {
  return typeof n == "boolean" && (li = n), li;
}
function Al(n) {
  const e = typeof n == "string" ? Xi(n, !0, li) : n;
  if (e) {
    const t = Tt(e.provider, e.prefix), i = e.name;
    return t.icons[i] || (t.missing.has(i) ? null : void 0);
  }
}
function Sl(n, e) {
  const t = Xi(n, !0, li);
  if (!t)
    return !1;
  const i = Tt(t.provider, t.prefix);
  return kl(i, t.name, e);
}
function Cl(n, e) {
  if (typeof n != "object")
    return !1;
  if (typeof e != "string" && (e = n.provider || ""), li && !e && !n.prefix) {
    let s = !1;
    return Gr(n) && (n.prefix = "", Br(n, (a, r) => {
      r && Sl(a, r) && (s = !0);
    })), s;
  }
  const t = n.prefix;
  if (!Pi({
    provider: e,
    prefix: t,
    name: "a"
  }))
    return !1;
  const i = Tt(e, t);
  return !!ra(i, n);
}
const $r = Object.freeze({
  width: null,
  height: null
}), Ur = Object.freeze({
  // Dimensions
  ...$r,
  // Transformations
  ...Ni
}), Ml = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Ll = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Ua(n, e, t) {
  if (e === 1)
    return n;
  if (t = t || 100, typeof n == "number")
    return Math.ceil(n * e * t) / t;
  if (typeof n != "string")
    return n;
  const i = n.split(Ml);
  if (i === null || !i.length)
    return n;
  const s = [];
  let a = i.shift(), r = Ll.test(a);
  for (; ; ) {
    if (r) {
      const o = parseFloat(a);
      isNaN(o) ? s.push(a) : s.push(Math.ceil(o * e * t) / t);
    } else
      s.push(a);
    if (a = i.shift(), a === void 0)
      return s.join("");
    r = !r;
  }
}
const Pl = (n) => n === "unset" || n === "undefined" || n === "none";
function Tl(n, e) {
  const t = {
    ...aa,
    ...n
  }, i = {
    ...Ur,
    ...e
  }, s = {
    left: t.left,
    top: t.top,
    width: t.width,
    height: t.height
  };
  let a = t.body;
  [t, i].forEach((p) => {
    const f = [], x = p.hFlip, m = p.vFlip;
    let b = p.rotate;
    x ? m ? b += 2 : (f.push(
      "translate(" + (s.width + s.left).toString() + " " + (0 - s.top).toString() + ")"
    ), f.push("scale(-1 1)"), s.top = s.left = 0) : m && (f.push(
      "translate(" + (0 - s.left).toString() + " " + (s.height + s.top).toString() + ")"
    ), f.push("scale(1 -1)"), s.top = s.left = 0);
    let w;
    switch (b < 0 && (b -= Math.floor(b / 4) * 4), b = b % 4, b) {
      case 1:
        w = s.height / 2 + s.top, f.unshift(
          "rotate(90 " + w.toString() + " " + w.toString() + ")"
        );
        break;
      case 2:
        f.unshift(
          "rotate(180 " + (s.width / 2 + s.left).toString() + " " + (s.height / 2 + s.top).toString() + ")"
        );
        break;
      case 3:
        w = s.width / 2 + s.left, f.unshift(
          "rotate(-90 " + w.toString() + " " + w.toString() + ")"
        );
        break;
    }
    b % 2 === 1 && (s.left !== s.top && (w = s.left, s.left = s.top, s.top = w), s.width !== s.height && (w = s.width, s.width = s.height, s.height = w)), f.length && (a = '<g transform="' + f.join(" ") + '">' + a + "</g>");
  });
  const r = i.width, o = i.height, l = s.width, c = s.height;
  let h, d;
  r === null ? (d = o === null ? "1em" : o === "auto" ? c : o, h = Ua(d, l / c)) : (h = r === "auto" ? l : r, d = o === null ? Ua(h, c / l) : o === "auto" ? c : o);
  const u = {}, g = (p, f) => {
    Pl(f) || (u[p] = f.toString());
  };
  return g("width", h), g("height", d), u.viewBox = s.left.toString() + " " + s.top.toString() + " " + l.toString() + " " + c.toString(), {
    attributes: u,
    body: a
  };
}
const Il = /\sid="(\S+)"/g, El = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Rl = 0;
function Ol(n, e = El) {
  const t = [];
  let i;
  for (; i = Il.exec(n); )
    t.push(i[1]);
  if (!t.length)
    return n;
  const s = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return t.forEach((a) => {
    const r = typeof e == "function" ? e(a) : e + (Rl++).toString(), o = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    n = n.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + o + ')([")]|\\.[a-z])', "g"),
      "$1" + r + s + "$3"
    );
  }), n = n.replace(new RegExp(s, "g"), ""), n;
}
const Is = /* @__PURE__ */ Object.create(null);
function zl(n, e) {
  Is[n] = e;
}
function Es(n) {
  return Is[n] || Is[""];
}
function na(n) {
  let e;
  if (typeof n.resources == "string")
    e = [n.resources];
  else if (e = n.resources, !(e instanceof Array) || !e.length)
    return null;
  return {
    // API hosts
    resources: e,
    // Root path
    path: n.path || "/",
    // URL length limit
    maxURL: n.maxURL || 500,
    // Timeout before next host is used.
    rotate: n.rotate || 750,
    // Timeout before failing query.
    timeout: n.timeout || 5e3,
    // Randomise default API end point.
    random: n.random === !0,
    // Start index
    index: n.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: n.dataAfterTimeout !== !1
  };
}
const oa = /* @__PURE__ */ Object.create(null), ti = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Ti = [];
for (; ti.length > 0; )
  ti.length === 1 || Math.random() > 0.5 ? Ti.push(ti.shift()) : Ti.push(ti.pop());
oa[""] = na({
  resources: ["https://api.iconify.design"].concat(Ti)
});
function Nl(n, e) {
  const t = na(e);
  return t === null ? !1 : (oa[n] = t, !0);
}
function la(n) {
  return oa[n];
}
const _l = () => {
  let n;
  try {
    if (n = fetch, typeof n == "function")
      return n;
  } catch {
  }
};
let qa = _l();
function Dl(n, e) {
  const t = la(n);
  if (!t)
    return 0;
  let i;
  if (!t.maxURL)
    i = 0;
  else {
    let s = 0;
    t.resources.forEach((r) => {
      s = Math.max(s, r.length);
    });
    const a = e + ".json?icons=";
    i = t.maxURL - s - t.path.length - a.length;
  }
  return i;
}
function Yl(n) {
  return n === 404;
}
const Fl = (n, e, t) => {
  const i = [], s = Dl(n, e), a = "icons";
  let r = {
    type: a,
    provider: n,
    prefix: e,
    icons: []
  }, o = 0;
  return t.forEach((l, c) => {
    o += l.length + 1, o >= s && c > 0 && (i.push(r), r = {
      type: a,
      provider: n,
      prefix: e,
      icons: []
    }, o = l.length), r.icons.push(l);
  }), i.push(r), i;
};
function Hl(n) {
  if (typeof n == "string") {
    const e = la(n);
    if (e)
      return e.path;
  }
  return "/";
}
const Xl = (n, e, t) => {
  if (!qa) {
    t("abort", 424);
    return;
  }
  let i = Hl(e.provider);
  switch (e.type) {
    case "icons": {
      const a = e.prefix, o = e.icons.join(","), l = new URLSearchParams({
        icons: o
      });
      i += a + ".json?" + l.toString();
      break;
    }
    case "custom": {
      const a = e.uri;
      i += a.slice(0, 1) === "/" ? a.slice(1) : a;
      break;
    }
    default:
      t("abort", 400);
      return;
  }
  let s = 503;
  qa(n + i).then((a) => {
    const r = a.status;
    if (r !== 200) {
      setTimeout(() => {
        t(Yl(r) ? "abort" : "next", r);
      });
      return;
    }
    return s = 501, a.json();
  }).then((a) => {
    if (typeof a != "object" || a === null) {
      setTimeout(() => {
        a === 404 ? t("abort", a) : t("next", s);
      });
      return;
    }
    setTimeout(() => {
      t("success", a);
    });
  }).catch(() => {
    t("next", s);
  });
}, jl = {
  prepare: Fl,
  send: Xl
};
function Wl(n) {
  const e = {
    loaded: [],
    missing: [],
    pending: []
  }, t = /* @__PURE__ */ Object.create(null);
  n.sort((s, a) => s.provider !== a.provider ? s.provider.localeCompare(a.provider) : s.prefix !== a.prefix ? s.prefix.localeCompare(a.prefix) : s.name.localeCompare(a.name));
  let i = {
    provider: "",
    prefix: "",
    name: ""
  };
  return n.forEach((s) => {
    if (i.name === s.name && i.prefix === s.prefix && i.provider === s.provider)
      return;
    i = s;
    const a = s.provider, r = s.prefix, o = s.name, l = t[a] || (t[a] = /* @__PURE__ */ Object.create(null)), c = l[r] || (l[r] = Tt(a, r));
    let h;
    o in c.icons ? h = e.loaded : r === "" || c.missing.has(o) ? h = e.missing : h = e.pending;
    const d = {
      provider: a,
      prefix: r,
      name: o
    };
    h.push(d);
  }), e;
}
function qr(n, e) {
  n.forEach((t) => {
    const i = t.loaderCallbacks;
    i && (t.loaderCallbacks = i.filter((s) => s.id !== e));
  });
}
function Bl(n) {
  n.pendingCallbacksFlag || (n.pendingCallbacksFlag = !0, setTimeout(() => {
    n.pendingCallbacksFlag = !1;
    const e = n.loaderCallbacks ? n.loaderCallbacks.slice(0) : [];
    if (!e.length)
      return;
    let t = !1;
    const i = n.provider, s = n.prefix;
    e.forEach((a) => {
      const r = a.icons, o = r.pending.length;
      r.pending = r.pending.filter((l) => {
        if (l.prefix !== s)
          return !0;
        const c = l.name;
        if (n.icons[c])
          r.loaded.push({
            provider: i,
            prefix: s,
            name: c
          });
        else if (n.missing.has(c))
          r.missing.push({
            provider: i,
            prefix: s,
            name: c
          });
        else
          return t = !0, !0;
        return !1;
      }), r.pending.length !== o && (t || qr([n], a.id), a.callback(
        r.loaded.slice(0),
        r.missing.slice(0),
        r.pending.slice(0),
        a.abort
      ));
    });
  }));
}
let Gl = 0;
function Vl(n, e, t) {
  const i = Gl++, s = qr.bind(null, t, i);
  if (!e.pending.length)
    return s;
  const a = {
    id: i,
    icons: e,
    callback: n,
    abort: s
  };
  return t.forEach((r) => {
    (r.loaderCallbacks || (r.loaderCallbacks = [])).push(a);
  }), s;
}
function $l(n, e = !0, t = !1) {
  const i = [];
  return n.forEach((s) => {
    const a = typeof s == "string" ? Xi(s, e, t) : s;
    a && i.push(a);
  }), i;
}
var Ul = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function ql(n, e, t, i) {
  const s = n.resources.length, a = n.random ? Math.floor(Math.random() * s) : n.index;
  let r;
  if (n.random) {
    let k = n.resources.slice(0);
    for (r = []; k.length > 1; ) {
      const A = Math.floor(Math.random() * k.length);
      r.push(k[A]), k = k.slice(0, A).concat(k.slice(A + 1));
    }
    r = r.concat(k);
  } else
    r = n.resources.slice(a).concat(n.resources.slice(0, a));
  const o = Date.now();
  let l = "pending", c = 0, h, d = null, u = [], g = [];
  typeof i == "function" && g.push(i);
  function p() {
    d && (clearTimeout(d), d = null);
  }
  function f() {
    l === "pending" && (l = "aborted"), p(), u.forEach((k) => {
      k.status === "pending" && (k.status = "aborted");
    }), u = [];
  }
  function x(k, A) {
    A && (g = []), typeof k == "function" && g.push(k);
  }
  function m() {
    return {
      startTime: o,
      payload: e,
      status: l,
      queriesSent: c,
      queriesPending: u.length,
      subscribe: x,
      abort: f
    };
  }
  function b() {
    l = "failed", g.forEach((k) => {
      k(void 0, h);
    });
  }
  function w() {
    u.forEach((k) => {
      k.status === "pending" && (k.status = "aborted");
    }), u = [];
  }
  function y(k, A, S) {
    const C = A !== "success";
    switch (u = u.filter((L) => L !== k), l) {
      case "pending":
        break;
      case "failed":
        if (C || !n.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (A === "abort") {
      h = S, b();
      return;
    }
    if (C) {
      h = S, u.length || (r.length ? v() : b());
      return;
    }
    if (p(), w(), !n.random) {
      const L = n.resources.indexOf(k.resource);
      L !== -1 && L !== n.index && (n.index = L);
    }
    l = "completed", g.forEach((L) => {
      L(S);
    });
  }
  function v() {
    if (l !== "pending")
      return;
    p();
    const k = r.shift();
    if (k === void 0) {
      if (u.length) {
        d = setTimeout(() => {
          p(), l === "pending" && (w(), b());
        }, n.timeout);
        return;
      }
      b();
      return;
    }
    const A = {
      status: "pending",
      resource: k,
      callback: (S, C) => {
        y(A, S, C);
      }
    };
    u.push(A), c++, d = setTimeout(v, n.rotate), t(k, e, A.callback);
  }
  return setTimeout(v), m;
}
function Zr(n) {
  const e = {
    ...Ul,
    ...n
  };
  let t = [];
  function i() {
    t = t.filter((o) => o().status === "pending");
  }
  function s(o, l, c) {
    const h = ql(
      e,
      o,
      l,
      (d, u) => {
        i(), c && c(d, u);
      }
    );
    return t.push(h), h;
  }
  function a(o) {
    return t.find((l) => o(l)) || null;
  }
  return {
    query: s,
    find: a,
    setIndex: (o) => {
      e.index = o;
    },
    getIndex: () => e.index,
    cleanup: i
  };
}
function Za() {
}
const es = /* @__PURE__ */ Object.create(null);
function Zl(n) {
  if (!es[n]) {
    const e = la(n);
    if (!e)
      return;
    const t = Zr(e), i = {
      config: e,
      redundancy: t
    };
    es[n] = i;
  }
  return es[n];
}
function Jl(n, e, t) {
  let i, s;
  if (typeof n == "string") {
    const a = Es(n);
    if (!a)
      return t(void 0, 424), Za;
    s = a.send;
    const r = Zl(n);
    r && (i = r.redundancy);
  } else {
    const a = na(n);
    if (a) {
      i = Zr(a);
      const r = n.resources ? n.resources[0] : "", o = Es(r);
      o && (s = o.send);
    }
  }
  return !i || !s ? (t(void 0, 424), Za) : i.query(e, s, t)().abort;
}
const Ja = "iconify2", ci = "iconify", Jr = ci + "-count", Ka = ci + "-version", Kr = 36e5, Kl = 168;
function Rs(n, e) {
  try {
    return n.getItem(e);
  } catch {
  }
}
function ca(n, e, t) {
  try {
    return n.setItem(e, t), !0;
  } catch {
  }
}
function Qa(n, e) {
  try {
    n.removeItem(e);
  } catch {
  }
}
function Os(n, e) {
  return ca(n, Jr, e.toString());
}
function zs(n) {
  return parseInt(Rs(n, Jr)) || 0;
}
const ji = {
  local: !0,
  session: !0
}, Qr = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let ha = !1;
function Ql(n) {
  ha = n;
}
let Si = typeof window > "u" ? {} : window;
function en(n) {
  const e = n + "Storage";
  try {
    if (Si && Si[e] && typeof Si[e].length == "number")
      return Si[e];
  } catch {
  }
  ji[n] = !1;
}
function tn(n, e) {
  const t = en(n);
  if (!t)
    return;
  const i = Rs(t, Ka);
  if (i !== Ja) {
    if (i) {
      const o = zs(t);
      for (let l = 0; l < o; l++)
        Qa(t, ci + l.toString());
    }
    ca(t, Ka, Ja), Os(t, 0);
    return;
  }
  const s = Math.floor(Date.now() / Kr) - Kl, a = (o) => {
    const l = ci + o.toString(), c = Rs(t, l);
    if (typeof c == "string") {
      try {
        const h = JSON.parse(c);
        if (typeof h == "object" && typeof h.cached == "number" && h.cached > s && typeof h.provider == "string" && typeof h.data == "object" && typeof h.data.prefix == "string" && // Valid item: run callback
        e(h, o))
          return !0;
      } catch {
      }
      Qa(t, l);
    }
  };
  let r = zs(t);
  for (let o = r - 1; o >= 0; o--)
    a(o) || (o === r - 1 ? (r--, Os(t, r)) : Qr[n].add(o));
}
function sn() {
  if (!ha) {
    Ql(!0);
    for (const n in ji)
      tn(n, (e) => {
        const t = e.data, i = e.provider, s = t.prefix, a = Tt(
          i,
          s
        );
        if (!ra(a, t).length)
          return !1;
        const r = t.lastModified || -1;
        return a.lastModifiedCached = a.lastModifiedCached ? Math.min(a.lastModifiedCached, r) : r, !0;
      });
  }
}
function ec(n, e) {
  const t = n.lastModifiedCached;
  if (
    // Matches or newer
    t && t >= e
  )
    return t === e;
  if (n.lastModifiedCached = e, t)
    for (const i in ji)
      tn(i, (s) => {
        const a = s.data;
        return s.provider !== n.provider || a.prefix !== n.prefix || a.lastModified === e;
      });
  return !0;
}
function tc(n, e) {
  ha || sn();
  function t(i) {
    let s;
    if (!ji[i] || !(s = en(i)))
      return;
    const a = Qr[i];
    let r;
    if (a.size)
      a.delete(r = Array.from(a).shift());
    else if (r = zs(s), !Os(s, r + 1))
      return;
    const o = {
      cached: Math.floor(Date.now() / Kr),
      provider: n.provider,
      data: e
    };
    return ca(
      s,
      ci + r.toString(),
      JSON.stringify(o)
    );
  }
  e.lastModified && !ec(n, e.lastModified) || Object.keys(e.icons).length && (e.not_found && (e = Object.assign({}, e), delete e.not_found), t("local") || t("session"));
}
function er() {
}
function ic(n) {
  n.iconsLoaderFlag || (n.iconsLoaderFlag = !0, setTimeout(() => {
    n.iconsLoaderFlag = !1, Bl(n);
  }));
}
function sc(n, e) {
  n.iconsToLoad ? n.iconsToLoad = n.iconsToLoad.concat(e).sort() : n.iconsToLoad = e, n.iconsQueueFlag || (n.iconsQueueFlag = !0, setTimeout(() => {
    n.iconsQueueFlag = !1;
    const { provider: t, prefix: i } = n, s = n.iconsToLoad;
    delete n.iconsToLoad;
    let a;
    if (!s || !(a = Es(t)))
      return;
    a.prepare(t, i, s).forEach((o) => {
      Jl(t, o, (l) => {
        if (typeof l != "object")
          o.icons.forEach((c) => {
            n.missing.add(c);
          });
        else
          try {
            const c = ra(
              n,
              l
            );
            if (!c.length)
              return;
            const h = n.pendingIcons;
            h && c.forEach((d) => {
              h.delete(d);
            }), tc(n, l);
          } catch (c) {
            console.error(c);
          }
        ic(n);
      });
    });
  }));
}
const ac = (n, e) => {
  const t = $l(n, !0, Vr()), i = Wl(t);
  if (!i.pending.length) {
    let l = !0;
    return e && setTimeout(() => {
      l && e(
        i.loaded,
        i.missing,
        i.pending,
        er
      );
    }), () => {
      l = !1;
    };
  }
  const s = /* @__PURE__ */ Object.create(null), a = [];
  let r, o;
  return i.pending.forEach((l) => {
    const { provider: c, prefix: h } = l;
    if (h === o && c === r)
      return;
    r = c, o = h, a.push(Tt(c, h));
    const d = s[c] || (s[c] = /* @__PURE__ */ Object.create(null));
    d[h] || (d[h] = []);
  }), i.pending.forEach((l) => {
    const { provider: c, prefix: h, name: d } = l, u = Tt(c, h), g = u.pendingIcons || (u.pendingIcons = /* @__PURE__ */ new Set());
    g.has(d) || (g.add(d), s[c][h].push(d));
  }), a.forEach((l) => {
    const { provider: c, prefix: h } = l;
    s[c][h].length && sc(l, s[c][h]);
  }), e ? Vl(e, i, a) : er;
};
function rc(n, e) {
  const t = {
    ...n
  };
  for (const i in e) {
    const s = e[i], a = typeof s;
    i in $r ? (s === null || s && (a === "string" || a === "number")) && (t[i] = s) : a === typeof t[i] && (t[i] = i === "rotate" ? s % 4 : s);
  }
  return t;
}
const nc = /[\s,]+/;
function oc(n, e) {
  e.split(nc).forEach((t) => {
    switch (t.trim()) {
      case "horizontal":
        n.hFlip = !0;
        break;
      case "vertical":
        n.vFlip = !0;
        break;
    }
  });
}
function lc(n, e = 0) {
  const t = n.replace(/^-?[0-9.]*/, "");
  function i(s) {
    for (; s < 0; )
      s += 4;
    return s % 4;
  }
  if (t === "") {
    const s = parseInt(n);
    return isNaN(s) ? 0 : i(s);
  } else if (t !== n) {
    let s = 0;
    switch (t) {
      case "%":
        s = 25;
        break;
      case "deg":
        s = 90;
    }
    if (s) {
      let a = parseFloat(n.slice(0, n.length - t.length));
      return isNaN(a) ? 0 : (a = a / s, a % 1 === 0 ? i(a) : 0);
    }
  }
  return e;
}
function cc(n, e) {
  let t = n.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const i in e)
    t += " " + i + '="' + e[i] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + t + ">" + n + "</svg>";
}
function hc(n) {
  return n.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function dc(n) {
  return "data:image/svg+xml," + hc(n);
}
function uc(n) {
  return 'url("' + dc(n) + '")';
}
let ri;
function gc() {
  try {
    ri = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (n) => n
    });
  } catch {
    ri = null;
  }
}
function fc(n) {
  return ri === void 0 && gc(), ri ? ri.createHTML(n) : n;
}
const an = {
  ...Ur,
  inline: !1
}, pc = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, xc = {
  display: "inline-block"
}, Ns = {
  backgroundColor: "currentColor"
}, rn = {
  backgroundColor: "transparent"
}, tr = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, ir = {
  WebkitMask: Ns,
  mask: Ns,
  background: rn
};
for (const n in ir) {
  const e = ir[n];
  for (const t in tr)
    e[n + t] = tr[t];
}
const mc = {
  ...an,
  inline: !0
};
function sr(n) {
  return n + (n.match(/^[-0-9.]+$/) ? "px" : "");
}
const bc = (n, e, t, i) => {
  const s = t ? mc : an, a = rc(s, e), r = e.mode || "svg", o = {}, l = e.style || {}, c = {
    ...r === "svg" ? pc : {},
    ref: i
  };
  for (let m in e) {
    const b = e[m];
    if (b !== void 0)
      switch (m) {
        case "icon":
        case "style":
        case "children":
        case "onLoad":
        case "mode":
        case "_ref":
        case "_inline":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          a[m] = b === !0 || b === "true" || b === 1;
          break;
        case "flip":
          typeof b == "string" && oc(a, b);
          break;
        case "color":
          o.color = b;
          break;
        case "rotate":
          typeof b == "string" ? a[m] = lc(b) : typeof b == "number" && (a[m] = b);
          break;
        case "ariaHidden":
        case "aria-hidden":
          b !== !0 && b !== "true" && delete c["aria-hidden"];
          break;
        default:
          s[m] === void 0 && (c[m] = b);
      }
  }
  const h = Tl(n, a), d = h.attributes;
  if (a.inline && (o.verticalAlign = "-0.125em"), r === "svg") {
    c.style = {
      ...o,
      ...l
    }, Object.assign(c, d);
    let m = 0, b = e.id;
    return typeof b == "string" && (b = b.replace(/-/g, "_")), c.dangerouslySetInnerHTML = {
      __html: fc(Ol(h.body, b ? () => b + "ID" + m++ : "iconifyReact"))
    }, Xe.createElement("svg", c);
  }
  const { body: u, width: g, height: p } = n, f = r === "mask" || (r === "bg" ? !1 : u.indexOf("currentColor") !== -1), x = cc(u, {
    ...d,
    width: g + "",
    height: p + ""
  });
  return c.style = {
    ...o,
    "--svg": uc(x),
    width: sr(d.width),
    height: sr(d.height),
    ...xc,
    ...f ? Ns : rn,
    ...l
  }, Xe.createElement("span", c);
};
Vr(!0);
zl("", jl);
if (typeof document < "u" && typeof window < "u") {
  sn();
  const n = window;
  if (n.IconifyPreload !== void 0) {
    const e = n.IconifyPreload, t = "Invalid IconifyPreload syntax.";
    typeof e == "object" && e !== null && (e instanceof Array ? e : [e]).forEach((i) => {
      try {
        // Check if item is an object and not null/array
        (typeof i != "object" || i === null || i instanceof Array || // Check for 'icons' and 'prefix'
        typeof i.icons != "object" || typeof i.prefix != "string" || // Add icon set
        !Cl(i)) && console.error(t);
      } catch {
        console.error(t);
      }
    });
  }
  if (n.IconifyProviders !== void 0) {
    const e = n.IconifyProviders;
    if (typeof e == "object" && e !== null)
      for (let t in e) {
        const i = "IconifyProviders[" + t + "] is invalid.";
        try {
          const s = e[t];
          if (typeof s != "object" || !s || s.resources === void 0)
            continue;
          Nl(t, s) || console.error(i);
        } catch {
          console.error(i);
        }
      }
  }
}
class nn extends Xe.Component {
  constructor(e) {
    super(e), this.state = {
      // Render placeholder before component is mounted
      icon: null
    };
  }
  /**
   * Abort loading icon
   */
  _abortLoading() {
    this._loading && (this._loading.abort(), this._loading = null);
  }
  /**
   * Update state
   */
  _setData(e) {
    this.state.icon !== e && this.setState({
      icon: e
    });
  }
  /**
   * Check if icon should be loaded
   */
  _checkIcon(e) {
    const t = this.state, i = this.props.icon;
    if (typeof i == "object" && i !== null && typeof i.body == "string") {
      this._icon = "", this._abortLoading(), (e || t.icon === null) && this._setData({
        data: i
      });
      return;
    }
    let s;
    if (typeof i != "string" || (s = Xi(i, !1, !0)) === null) {
      this._abortLoading(), this._setData(null);
      return;
    }
    const a = Al(s);
    if (!a) {
      (!this._loading || this._loading.name !== i) && (this._abortLoading(), this._icon = "", this._setData(null), a !== null && (this._loading = {
        name: i,
        abort: ac([s], this._checkIcon.bind(this, !1))
      }));
      return;
    }
    if (this._icon !== i || t.icon === null) {
      this._abortLoading(), this._icon = i;
      const r = ["iconify"];
      s.prefix !== "" && r.push("iconify--" + s.prefix), s.provider !== "" && r.push("iconify--" + s.provider), this._setData({
        data: a,
        classes: r
      }), this.props.onLoad && this.props.onLoad(i);
    }
  }
  /**
   * Component mounted
   */
  componentDidMount() {
    this._checkIcon(!1);
  }
  /**
   * Component updated
   */
  componentDidUpdate(e) {
    e.icon !== this.props.icon && this._checkIcon(!0);
  }
  /**
   * Abort loading
   */
  componentWillUnmount() {
    this._abortLoading();
  }
  /**
   * Render
   */
  render() {
    const e = this.props, t = this.state.icon;
    if (t === null)
      return e.children ? e.children : Xe.createElement("span", {});
    let i = e;
    return t.classes && (i = {
      ...e,
      className: (typeof e.className == "string" ? e.className + " " : "") + t.classes.join(" ")
    }), bc({
      ...aa,
      ...t.data
    }, i, e._inline, e._ref);
  }
}
const Pe = Xe.forwardRef(function(e, t) {
  const i = {
    ...e,
    _ref: t,
    _inline: !1
  };
  return Xe.createElement(nn, i);
});
Xe.forwardRef(function(e, t) {
  const i = {
    ...e,
    _ref: t,
    _inline: !0
  };
  return Xe.createElement(nn, i);
});
const vc = lt(
  "rounded-md border bg-white px-3 py-2 ring-0 transition-colors placeholder:text-neutral-500 placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50",
        error: "border-danger-500 hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50",
        success: "border-success-500 hover:border-success-600 focus:border-success-600 hover:bg-success-50"
      },
      inputSize: {
        sm: "h-8 px-2 py-1 text-sm",
        md: "h-10 px-3 py-2 text-base",
        lg: "h-12 px-4 py-3 text-lg"
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit"
      }
    },
    defaultVariants: {
      variant: "default",
      inputSize: "md",
      fullWidth: !0
    }
  }
), on = Ge(
  ({
    className: n,
    wrapperClassName: e,
    variant: t = "default",
    size: i = "md",
    leftIcon: s,
    rightIcon: a,
    error: r = !1,
    errorText: o,
    helperText: l,
    label: c,
    required: h = !1,
    labelPlacement: d = "top",
    fullWidth: u = !0,
    id: g,
    ...p
  }, f) => {
    const x = g || Xe.useId(), m = `${x}-helper`, b = `${x}-error`, w = /* @__PURE__ */ M.jsxs("div", { className: ae("relative", !u && "inline-block"), children: [
      s && /* @__PURE__ */ M.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500", children: /* @__PURE__ */ M.jsx(Pe, { icon: s, className: "w-4 h-4" }) }),
      /* @__PURE__ */ M.jsx(
        "input",
        {
          id: x,
          type: "text",
          ref: f,
          className: ae(
            vc({ variant: r ? "error" : t, inputSize: i, fullWidth: u }),
            s && "pl-10",
            a && "pr-10",
            n
          ),
          "aria-describedby": r ? b : l ? m : void 0,
          "aria-invalid": r,
          "aria-required": h,
          ...p
        }
      ),
      a && /* @__PURE__ */ M.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500", children: /* @__PURE__ */ M.jsx(Pe, { icon: a, className: "w-4 h-4" }) })
    ] }), y = /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
      r && o && /* @__PURE__ */ M.jsx("p", { className: "mt-1 text-xs text-danger-500", id: b, children: o }),
      !r && l && /* @__PURE__ */ M.jsx("p", { className: "mt-1 text-xs text-neutral-500", id: m, children: l })
    ] });
    return d === "left" ? /* @__PURE__ */ M.jsx("div", { className: ae(u ? "w-full" : "inline-block", e), children: /* @__PURE__ */ M.jsxs("div", { className: "flex items-start gap-4", children: [
      c && /* @__PURE__ */ M.jsxs(
        "label",
        {
          htmlFor: x,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            c,
            h && /* @__PURE__ */ M.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ M.jsxs("div", { className: ae("flex-1", !u && "inline-block"), children: [
        w,
        y
      ] })
    ] }) }) : /* @__PURE__ */ M.jsxs("div", { className: ae(u ? "w-full" : "inline-block", e), children: [
      c && /* @__PURE__ */ M.jsxs(
        "label",
        {
          htmlFor: x,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            c,
            h && /* @__PURE__ */ M.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
          ]
        }
      ),
      w,
      y
    ] });
  }
);
on.displayName = "Input";
const Wi = Xe.forwardRef(
  ({ className: n, children: e, selected: t, disabled: i, ...s }, a) => /* @__PURE__ */ M.jsx(
    "div",
    {
      ref: a,
      className: ae(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
        "hover:bg-primary-50",
        t && "bg-primary-50 text-primary-900",
        i && "pointer-events-none opacity-50",
        n
      ),
      ...s,
      children: e
    }
  )
);
Wi.displayName = "SelectItem";
const ts = "autocomplete-dropdown-opened", yc = lt(
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
), wc = Ge(
  ({
    className: n,
    options: e,
    onSelect: t,
    isOpen: i,
    dropdownPosition: s = "bottom",
    loading: a = !1,
    renderOption: r,
    variant: o = "default",
    size: l = "md",
    leftIcon: c,
    rightIcon: h,
    error: d = !1,
    errorText: u,
    helperText: g,
    label: p,
    required: f = !1,
    labelPlacement: x = "top",
    fullWidth: m = !1,
    value: b,
    onChange: w,
    onFocus: y,
    onBlur: v,
    showClear: k = !1,
    onClear: A,
    ...S
  }, C) => {
    const [L, P] = Ie(!1), [R, I] = Ie(b || ""), T = Be(null), O = Be(null), N = Be(null), D = i !== void 0, X = `autocomplete-${Xe.useId().replace(/:/g, "")}`, z = () => {
      if (!L || !O.current || !N.current) return;
      const { bottom: re, top: B, left: ue, width: Ee } = O.current.getBoundingClientRect(), De = N.current, Ke = {
        position: "fixed",
        left: `${ue}px`,
        width: `${Ee}px`
      }, ki = s === "bottom" ? {
        ...Ke,
        top: `${re + 4}px`,
        maxHeight: `${window.innerHeight - re - 8}px`
      } : {
        ...Ke,
        bottom: `${window.innerHeight - B + 4}px`,
        maxHeight: `${B - 8}px`
      };
      Object.assign(De.style, ki);
    };
    ot(() => {
      I(b || "");
    }, [b]), ot(() => {
      const re = () => {
        L && z();
      }, B = () => {
        L && z();
      }, ue = (De) => {
        De.detail.id !== X && P(!1);
      }, Ee = (De) => {
        const Ke = De.target;
        T.current && !T.current.contains(Ke) && N.current && !N.current.contains(Ke) && P(!1);
      };
      return L && (z(), window.addEventListener("scroll", re, !0), window.addEventListener("resize", B)), document.addEventListener(ts, ue), document.addEventListener("click", Ee), () => {
        window.removeEventListener("scroll", re, !0), window.removeEventListener("resize", B), document.removeEventListener(ts, ue), document.removeEventListener("click", Ee);
      };
    }, [L, X]);
    const F = (re) => {
      const { value: B } = re.target;
      if (I(B), !B.trim()) {
        P(!1);
        return;
      }
      P(!0), w == null || w(re);
    }, $ = (re) => {
      re.stopPropagation(), I(""), A == null || A();
      const B = new Event("change");
      B.target = { value: "" }, w == null || w(B);
    }, Z = (re) => {
      var De;
      if (!re) return;
      const { value: B, label: ue } = re;
      I(ue), P(!1), t == null || t(B);
      const Ee = new CustomEvent("autocomplete-select", {
        detail: { selectedOption: re }
      });
      (De = O.current) == null || De.dispatchEvent(Ee);
    }, H = (re) => {
      D || (document.dispatchEvent(
        new CustomEvent(ts, {
          detail: { id: X }
        })
      ), P(!0)), y == null || y(re);
    }, J = (re) => {
      v == null || v(re);
    }, G = e.filter(
      ({ label: re }) => re.toLowerCase().includes((R || "").toLowerCase().trim())
    ), V = D ? i : L, K = k && R && !S.disabled && !S.readOnly, se = K ? "mdi:close" : h, Q = () => {
      if (!V) return null;
      const re = /* @__PURE__ */ M.jsx(
        "div",
        {
          ref: N,
          className: ae(
            yc({ position: s }),
            "overflow-auto"
          ),
          onClick: (B) => B.stopPropagation(),
          children: a ? /* @__PURE__ */ M.jsx("div", { className: "flex items-center justify-center py-2", children: /* @__PURE__ */ M.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary-500 border-t-transparent" }) }) : G.length > 0 ? G.map((B) => /* @__PURE__ */ M.jsx(
            Wi,
            {
              value: B.value,
              selected: B.label === R,
              onClick: () => Z(B),
              children: r ? r(B) : B.label
            },
            B.value
          )) : /* @__PURE__ */ M.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500", children: "No options found" })
        }
      );
      return Bt(re, document.body);
    };
    return /* @__PURE__ */ M.jsxs("div", { ref: T, className: ae("relative", m ? "w-full" : "inline-block"), children: [
      /* @__PURE__ */ M.jsx("div", { ref: O, className: ae(!m && "inline-block"), children: /* @__PURE__ */ M.jsx(
        on,
        {
          ref: C,
          value: R,
          onChange: F,
          onFocus: H,
          onBlur: J,
          variant: o,
          size: l,
          leftIcon: c,
          rightIcon: se,
          error: d,
          errorText: u,
          helperText: g,
          label: p,
          required: f,
          labelPlacement: x,
          fullWidth: m,
          className: n,
          ...S,
          onClick: K ? $ : S.onClick
        }
      ) }),
      Q()
    ] });
  }
);
wc.displayName = "AutoComplete";
const Ld = ({
  items: n,
  multiple: e = !1,
  defaultOpenIds: t = [],
  icon: i = "mdi:chevron-down",
  iconPosition: s = "right",
  className: a,
  itemClassName: r,
  headerClassName: o,
  contentClassName: l
}) => {
  const [c, h] = Ie(t), d = (u) => {
    h(
      e ? (g) => g.includes(u) ? g.filter((p) => p !== u) : [...g, u] : (g) => g.includes(u) ? [] : [u]
    );
  };
  return /* @__PURE__ */ M.jsx("div", { className: fe("w-full space-y-2", a), children: n.map((u) => {
    const g = c.includes(u.id), p = !!u.disabled;
    return /* @__PURE__ */ M.jsxs(
      "div",
      {
        className: fe(
          "border rounded-lg overflow-hidden",
          "bg-white",
          "border-gray-200",
          r
        ),
        children: [
          /* @__PURE__ */ M.jsxs(
            "button",
            {
              onClick: () => !p && d(u.id),
              disabled: p,
              className: fe(
                "w-full flex items-center justify-between p-4",
                "text-left transition-colors",
                "hover:bg-primary-50",
                p && "opacity-50 cursor-not-allowed",
                o
              ),
              children: [
                s === "left" && /* @__PURE__ */ M.jsx(
                  "div",
                  {
                    className: fe(
                      "mr-3 transition-transform duration-200",
                      g && "rotate-180"
                    ),
                    children: /* @__PURE__ */ M.jsx(Pe, { icon: i, className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ M.jsx("div", { className: "flex-1", children: u.title }),
                s === "right" && /* @__PURE__ */ M.jsx(
                  "div",
                  {
                    className: fe(
                      "ml-3 transition-transform duration-200",
                      g && "rotate-180"
                    ),
                    children: /* @__PURE__ */ M.jsx(Pe, { icon: i, className: "w-5 h-5" })
                  }
                )
              ]
            }
          ),
          g && /* @__PURE__ */ M.jsx(
            "div",
            {
              className: fe(
                "p-4 border-t border-gray-200",
                l
              ),
              children: u.content
            }
          )
        ]
      },
      u.id
    );
  }) });
}, Pd = ({
  src: n,
  alt: e = "avatar",
  size: t = "medium",
  shape: i = "circle",
  className: s = ""
}) => {
  const a = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16"
  }, r = {
    circle: "rounded-full",
    square: "rounded-lg"
  }, o = Pt(
    "inline-flex items-center justify-center overflow-hidden bg-gray-200",
    a[t],
    r[i],
    s
  );
  return /* @__PURE__ */ M.jsx("div", { className: o, children: n ? /* @__PURE__ */ M.jsx("img", { src: n, alt: e, className: "w-full h-full object-cover" }) : /* @__PURE__ */ M.jsx(
    "svg",
    {
      className: "w-6 h-6 text-gray-500",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ M.jsx(
        "path",
        {
          d: "M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z",
          fill: "currentColor"
        }
      )
    }
  ) });
}, Td = ({
  children: n,
  variant: e = "primary",
  size: t = "medium",
  className: i = ""
}) => {
  const s = {
    primary: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800"
  }, a = {
    small: "px-2 py-0.5 text-xs",
    medium: "px-2.5 py-1 text-sm",
    large: "px-3 py-1.5 text-base"
  }, r = Pt(
    "inline-flex items-center font-medium rounded-full",
    s[e],
    a[t],
    i
  );
  return /* @__PURE__ */ M.jsx("span", { className: r, children: n });
}, kc = lt(
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
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      rounded: "none",
      fullWidth: !1
    }
  }
), Dt = Ge(
  ({
    className: n,
    variant: e = "primary",
    size: t = "md",
    rounded: i = "md",
    fullWidth: s = !1,
    isLoading: a = !1,
    leftIcon: r,
    rightIcon: o,
    children: l,
    ...c
  }, h) => /* @__PURE__ */ M.jsxs(
    "button",
    {
      className: ae(kc({ variant: e, size: t, rounded: i, fullWidth: s, className: n })),
      ref: h,
      disabled: c.disabled || a,
      ...c,
      children: [
        a && /* @__PURE__ */ M.jsx("span", { className: "animate-spin inline-block w-4 h-4 border-2 border-current border-r-transparent rounded-full" }),
        !a && r && /* @__PURE__ */ M.jsx(Pe, { icon: r, className: "w-4 h-4" }),
        /* @__PURE__ */ M.jsx("span", { children: l }),
        !a && o && /* @__PURE__ */ M.jsx(Pe, { icon: o, className: "w-4 h-4" })
      ]
    }
  )
);
Dt.displayName = "Button";
const Ac = lt(
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
), ln = Ge(
  ({
    className: n,
    variant: e = "default",
    padding: t = "md",
    shadow: i = "none",
    rounded: s = "md",
    asChild: a = !1,
    ...r
  }, o) => /* @__PURE__ */ M.jsx(
    "div",
    {
      className: ae(Ac({ variant: e, padding: t, shadow: i, rounded: s, className: n })),
      ref: o,
      ...r
    }
  )
);
ln.displayName = "Card";
var cn = {};
/*!
 * ApexCharts v4.7.0
 * (c) 2018-2025 ApexCharts
 * Released under the MIT License.
 */
function _s(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, i = Array(e); t < e; t++) i[t] = n[t];
  return i;
}
function hn(n) {
  if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function ee(n, e) {
  if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function ar(n, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, gn(i.key), i);
  }
}
function te(n, e, t) {
  return e && ar(n.prototype, e), t && ar(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function si(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!t) {
    if (Array.isArray(n) || (t = da(n)) || e) {
      t && (n = t);
      var i = 0, s = function() {
      };
      return { s, n: function() {
        return i >= n.length ? { done: !0 } : { done: !1, value: n[i++] };
      }, e: function(l) {
        throw l;
      }, f: s };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a, r = !0, o = !1;
  return { s: function() {
    t = t.call(n);
  }, n: function() {
    var l = t.next();
    return r = l.done, l;
  }, e: function(l) {
    o = !0, a = l;
  }, f: function() {
    try {
      r || t.return == null || t.return();
    } finally {
      if (o) throw a;
    }
  } };
}
function xi(n) {
  var e = dn();
  return function() {
    var t, i = Di(n);
    if (e) {
      var s = Di(this).constructor;
      t = Reflect.construct(i, arguments, s);
    } else t = i.apply(this, arguments);
    return function(a, r) {
      if (r && (typeof r == "object" || typeof r == "function")) return r;
      if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return hn(a);
    }(this, t);
  };
}
function _i(n, e, t) {
  return (e = gn(e)) in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function Di(n) {
  return Di = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, Di(n);
}
function mi(n, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  n.prototype = Object.create(e && e.prototype, { constructor: { value: n, writable: !0, configurable: !0 } }), Object.defineProperty(n, "prototype", { writable: !1 }), e && Ds(n, e);
}
function dn() {
  try {
    var n = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (dn = function() {
    return !!n;
  })();
}
function rr(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    e && (i = i.filter(function(s) {
      return Object.getOwnPropertyDescriptor(n, s).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function q(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? rr(Object(t), !0).forEach(function(i) {
      _i(n, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : rr(Object(t)).forEach(function(i) {
      Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return n;
}
function Ds(n, e) {
  return Ds = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, i) {
    return t.__proto__ = i, t;
  }, Ds(n, e);
}
function un(n, e) {
  return function(t) {
    if (Array.isArray(t)) return t;
  }(n) || function(t, i) {
    var s = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
    if (s != null) {
      var a, r, o, l, c = [], h = !0, d = !1;
      try {
        if (o = (s = s.call(t)).next, i === 0) {
          if (Object(s) !== s) return;
          h = !1;
        } else for (; !(h = (a = o.call(s)).done) && (c.push(a.value), c.length !== i); h = !0) ;
      } catch (u) {
        d = !0, r = u;
      } finally {
        try {
          if (!h && s.return != null && (l = s.return(), Object(l) !== l)) return;
        } finally {
          if (d) throw r;
        }
      }
      return c;
    }
  }(n, e) || da(n, e) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function _e(n) {
  return function(e) {
    if (Array.isArray(e)) return _s(e);
  }(n) || function(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
  }(n) || da(n) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function gn(n) {
  var e = function(t, i) {
    if (typeof t != "object" || !t) return t;
    var s = t[Symbol.toPrimitive];
    if (s !== void 0) {
      var a = s.call(t, i);
      if (typeof a != "object") return a;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (i === "string" ? String : Number)(t);
  }(n, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Xt(n) {
  return Xt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Xt(n);
}
function da(n, e) {
  if (n) {
    if (typeof n == "string") return _s(n, e);
    var t = {}.toString.call(n).slice(8, -1);
    return t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set" ? Array.from(n) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _s(n, e) : void 0;
  }
}
var _ = function() {
  function n() {
    ee(this, n);
  }
  return te(n, [{ key: "shadeRGBColor", value: function(e, t) {
    var i = t.split(","), s = e < 0 ? 0 : 255, a = e < 0 ? -1 * e : e, r = parseInt(i[0].slice(4), 10), o = parseInt(i[1], 10), l = parseInt(i[2], 10);
    return "rgb(" + (Math.round((s - r) * a) + r) + "," + (Math.round((s - o) * a) + o) + "," + (Math.round((s - l) * a) + l) + ")";
  } }, { key: "shadeHexColor", value: function(e, t) {
    var i = parseInt(t.slice(1), 16), s = e < 0 ? 0 : 255, a = e < 0 ? -1 * e : e, r = i >> 16, o = i >> 8 & 255, l = 255 & i;
    return "#" + (16777216 + 65536 * (Math.round((s - r) * a) + r) + 256 * (Math.round((s - o) * a) + o) + (Math.round((s - l) * a) + l)).toString(16).slice(1);
  } }, { key: "shadeColor", value: function(e, t) {
    return n.isColorHex(t) ? this.shadeHexColor(e, t) : this.shadeRGBColor(e, t);
  } }], [{ key: "bind", value: function(e, t) {
    return function() {
      return e.apply(t, arguments);
    };
  } }, { key: "isObject", value: function(e) {
    return e && Xt(e) === "object" && !Array.isArray(e) && e != null;
  } }, { key: "is", value: function(e, t) {
    return Object.prototype.toString.call(t) === "[object " + e + "]";
  } }, { key: "isSafari", value: function() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  } }, { key: "listToArray", value: function(e) {
    var t, i = [];
    for (t = 0; t < e.length; t++) i[t] = e[t];
    return i;
  } }, { key: "extend", value: function(e, t) {
    var i = this;
    typeof Object.assign != "function" && (Object.assign = function(a) {
      if (a == null) throw new TypeError("Cannot convert undefined or null to object");
      for (var r = Object(a), o = 1; o < arguments.length; o++) {
        var l = arguments[o];
        if (l != null) for (var c in l) l.hasOwnProperty(c) && (r[c] = l[c]);
      }
      return r;
    });
    var s = Object.assign({}, e);
    return this.isObject(e) && this.isObject(t) && Object.keys(t).forEach(function(a) {
      i.isObject(t[a]) && a in e ? s[a] = i.extend(e[a], t[a]) : Object.assign(s, _i({}, a, t[a]));
    }), s;
  } }, { key: "extendArray", value: function(e, t) {
    var i = [];
    return e.map(function(s) {
      i.push(n.extend(t, s));
    }), e = i;
  } }, { key: "monthMod", value: function(e) {
    return e % 12;
  } }, { key: "clone", value: function(e) {
    var t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new WeakMap();
    if (e === null || Xt(e) !== "object") return e;
    if (i.has(e)) return i.get(e);
    if (Array.isArray(e)) {
      t = [], i.set(e, t);
      for (var s = 0; s < e.length; s++) t[s] = this.clone(e[s], i);
    } else if (e instanceof Date) t = new Date(e.getTime());
    else for (var a in t = {}, i.set(e, t), e) e.hasOwnProperty(a) && (t[a] = this.clone(e[a], i));
    return t;
  } }, { key: "log10", value: function(e) {
    return Math.log(e) / Math.LN10;
  } }, { key: "roundToBase10", value: function(e) {
    return Math.pow(10, Math.floor(Math.log10(e)));
  } }, { key: "roundToBase", value: function(e, t) {
    return Math.pow(t, Math.floor(Math.log(e) / Math.log(t)));
  } }, { key: "parseNumber", value: function(e) {
    return e === null ? e : parseFloat(e);
  } }, { key: "stripNumber", value: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    return Number.isInteger(e) ? e : parseFloat(e.toPrecision(t));
  } }, { key: "randomId", value: function() {
    return (Math.random() + 1).toString(36).substring(4);
  } }, { key: "noExponents", value: function(e) {
    return e.toString().includes("e") ? Math.round(e) : e;
  } }, { key: "elementExists", value: function(e) {
    return !(!e || !e.isConnected);
  } }, { key: "getDimensions", value: function(e) {
    var t = getComputedStyle(e, null), i = e.clientHeight, s = e.clientWidth;
    return i -= parseFloat(t.paddingTop) + parseFloat(t.paddingBottom), [s -= parseFloat(t.paddingLeft) + parseFloat(t.paddingRight), i];
  } }, { key: "getBoundingClientRect", value: function(e) {
    var t = e.getBoundingClientRect();
    return { top: t.top, right: t.right, bottom: t.bottom, left: t.left, width: e.clientWidth, height: e.clientHeight, x: t.left, y: t.top };
  } }, { key: "getLargestStringFromArr", value: function(e) {
    return e.reduce(function(t, i) {
      return Array.isArray(i) && (i = i.reduce(function(s, a) {
        return s.length > a.length ? s : a;
      })), t.length > i.length ? t : i;
    }, 0);
  } }, { key: "hexToRgba", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "#999999", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.6;
    e.substring(0, 1) !== "#" && (e = "#999999");
    var i = e.replace("#", "");
    i = i.match(new RegExp("(.{" + i.length / 3 + "})", "g"));
    for (var s = 0; s < i.length; s++) i[s] = parseInt(i[s].length === 1 ? i[s] + i[s] : i[s], 16);
    return t !== void 0 && i.push(t), "rgba(" + i.join(",") + ")";
  } }, { key: "getOpacityFromRGBA", value: function(e) {
    return parseFloat(e.replace(/^.*,(.+)\)/, "$1"));
  } }, { key: "rgb2hex", value: function(e) {
    return (e = e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && e.length === 4 ? "#" + ("0" + parseInt(e[1], 10).toString(16)).slice(-2) + ("0" + parseInt(e[2], 10).toString(16)).slice(-2) + ("0" + parseInt(e[3], 10).toString(16)).slice(-2) : "";
  } }, { key: "isColorHex", value: function(e) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(e);
  } }, { key: "getPolygonPos", value: function(e, t) {
    for (var i = [], s = 2 * Math.PI / t, a = 0; a < t; a++) {
      var r = {};
      r.x = e * Math.sin(a * s), r.y = -e * Math.cos(a * s), i.push(r);
    }
    return i;
  } }, { key: "polarToCartesian", value: function(e, t, i, s) {
    var a = (s - 90) * Math.PI / 180;
    return { x: e + i * Math.cos(a), y: t + i * Math.sin(a) };
  } }, { key: "escapeString", value: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "x", i = e.toString().slice();
    return i = i.replace(/[` ~!@#$%^&*()|+\=?;:'",.<>{}[\]\\/]/gi, t);
  } }, { key: "negToZero", value: function(e) {
    return e < 0 ? 0 : e;
  } }, { key: "moveIndexInArray", value: function(e, t, i) {
    if (i >= e.length) for (var s = i - e.length + 1; s--; ) e.push(void 0);
    return e.splice(i, 0, e.splice(t, 1)[0]), e;
  } }, { key: "extractNumber", value: function(e) {
    return parseFloat(e.replace(/[^\d.]*/g, ""));
  } }, { key: "findAncestor", value: function(e, t) {
    for (; (e = e.parentElement) && !e.classList.contains(t); ) ;
    return e;
  } }, { key: "setELstyles", value: function(e, t) {
    for (var i in t) t.hasOwnProperty(i) && (e.style.key = t[i]);
  } }, { key: "preciseAddition", value: function(e, t) {
    var i = (String(e).split(".")[1] || "").length, s = (String(t).split(".")[1] || "").length, a = Math.pow(10, Math.max(i, s));
    return (Math.round(e * a) + Math.round(t * a)) / a;
  } }, { key: "isNumber", value: function(e) {
    return !isNaN(e) && parseFloat(Number(e)) === e && !isNaN(parseInt(e, 10));
  } }, { key: "isFloat", value: function(e) {
    return Number(e) === e && e % 1 != 0;
  } }, { key: "isMsEdge", value: function() {
    var e = window.navigator.userAgent, t = e.indexOf("Edge/");
    return t > 0 && parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  } }, { key: "getGCD", value: function(e, t) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 7, s = Math.pow(10, i - Math.floor(Math.log10(Math.max(e, t))));
    for (e = Math.round(Math.abs(e) * s), t = Math.round(Math.abs(t) * s); t; ) {
      var a = t;
      t = e % t, e = a;
    }
    return e / s;
  } }, { key: "getPrimeFactors", value: function(e) {
    for (var t = [], i = 2; e >= 2; ) e % i == 0 ? (t.push(i), e /= i) : i++;
    return t;
  } }, { key: "mod", value: function(e, t) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 7, s = Math.pow(10, i - Math.floor(Math.log10(Math.max(e, t))));
    return (e = Math.round(Math.abs(e) * s)) % (t = Math.round(Math.abs(t) * s)) / s;
  } }]), n;
}(), Vt = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w;
  }
  return te(n, [{ key: "animateLine", value: function(e, t, i, s) {
    e.attr(t).animate(s).attr(i);
  } }, { key: "animateMarker", value: function(e, t, i, s) {
    e.attr({ opacity: 0 }).animate(t).attr({ opacity: 1 }).after(function() {
      s();
    });
  } }, { key: "animateRect", value: function(e, t, i, s, a) {
    e.attr(t).animate(s).attr(i).after(function() {
      return a();
    });
  } }, { key: "animatePathsGradually", value: function(e) {
    var t = e.el, i = e.realIndex, s = e.j, a = e.fill, r = e.pathFrom, o = e.pathTo, l = e.speed, c = e.delay, h = this.w, d = 0;
    h.config.chart.animations.animateGradually.enabled && (d = h.config.chart.animations.animateGradually.delay), h.config.chart.animations.dynamicAnimation.enabled && h.globals.dataChanged && h.config.chart.type !== "bar" && (d = 0), this.morphSVG(t, i, s, h.config.chart.type !== "line" || h.globals.comboCharts ? a : "stroke", r, o, l, c * d);
  } }, { key: "showDelayedElements", value: function() {
    this.w.globals.delayedElements.forEach(function(e) {
      var t = e.el;
      t.classList.remove("apexcharts-element-hidden"), t.classList.add("apexcharts-hidden-element-shown");
    });
  } }, { key: "animationCompleted", value: function(e) {
    var t = this.w;
    t.globals.animationEnded || (t.globals.animationEnded = !0, this.showDelayedElements(), typeof t.config.chart.events.animationEnd == "function" && t.config.chart.events.animationEnd(this.ctx, { el: e, w: t }));
  } }, { key: "morphSVG", value: function(e, t, i, s, a, r, o, l) {
    var c = this, h = this.w;
    a || (a = e.attr("pathFrom")), r || (r = e.attr("pathTo"));
    var d = function(u) {
      return h.config.chart.type === "radar" && (o = 1), "M 0 ".concat(h.globals.gridHeight);
    };
    (!a || a.indexOf("undefined") > -1 || a.indexOf("NaN") > -1) && (a = d()), (!r.trim() || r.indexOf("undefined") > -1 || r.indexOf("NaN") > -1) && (r = d()), h.globals.shouldAnimate || (o = 1), e.plot(a).animate(1, l).plot(a).animate(o, l).plot(r).after(function() {
      _.isNumber(i) ? i === h.globals.series[h.globals.maxValsInArrayIndex].length - 2 && h.globals.shouldAnimate && c.animationCompleted(e) : s !== "none" && h.globals.shouldAnimate && (!h.globals.comboCharts && t === h.globals.series.length - 1 || h.globals.comboCharts) && c.animationCompleted(e), c.showDelayedElements();
    });
  } }]), n;
}();
const Ys = {}, fn = [];
function de(n, e) {
  if (Array.isArray(n)) for (const t of n) de(t, e);
  else if (typeof n != "object") pn(Object.getOwnPropertyNames(e)), Ys[n] = Object.assign(Ys[n] || {}, e);
  else for (const t in n) de(t, n[t]);
}
function Ue(n) {
  return Ys[n] || {};
}
function pn(n) {
  fn.push(...n);
}
function ua(n, e) {
  let t;
  const i = n.length, s = [];
  for (t = 0; t < i; t++) s.push(e(n[t]));
  return s;
}
function is(n) {
  return n % 360 * Math.PI / 180;
}
function $t(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
function Ut(n, e, t, i) {
  return e != null && t != null || (i = i || n.bbox(), e == null ? e = i.width / i.height * t : t == null && (t = i.height / i.width * e)), { width: e, height: t };
}
function Fs(n, e) {
  const t = n.origin;
  let i = n.ox != null ? n.ox : n.originX != null ? n.originX : "center", s = n.oy != null ? n.oy : n.originY != null ? n.originY : "center";
  t != null && ([i, s] = Array.isArray(t) ? t : typeof t == "object" ? [t.x, t.y] : [t, t]);
  const a = typeof i == "string", r = typeof s == "string";
  if (a || r) {
    const { height: o, width: l, x: c, y: h } = e.bbox();
    a && (i = i.includes("left") ? c : i.includes("right") ? c + l : c + l / 2), r && (s = s.includes("top") ? h : s.includes("bottom") ? h + o : h + o / 2);
  }
  return [i, s];
}
const Sc = /* @__PURE__ */ new Set(["desc", "metadata", "title"]), Hs = (n) => Sc.has(n.nodeName), xn = (n, e, t = {}) => {
  const i = { ...e };
  for (const s in i) i[s].valueOf() === t[s] && delete i[s];
  Object.keys(i).length ? n.node.setAttribute("data-svgjs", JSON.stringify(i)) : (n.node.removeAttribute("data-svgjs"), n.node.removeAttribute("svgjs:data"));
}, ga = "http://www.w3.org/2000/svg", ss = "http://www.w3.org/2000/xmlns/", qt = "http://www.w3.org/1999/xlink", xe = { window: typeof window > "u" ? null : window, document: typeof document > "u" ? null : document };
function bi() {
  return xe.window;
}
let fa = class {
};
const Lt = {}, pa = "___SYMBOL___ROOT___";
function hi(n, e = ga) {
  return xe.document.createElementNS(e, n);
}
function We(n, e = !1) {
  if (n instanceof fa) return n;
  if (typeof n == "object") return as(n);
  if (n == null) return new Lt[pa]();
  if (typeof n == "string" && n.charAt(0) !== "<") return as(xe.document.querySelector(n));
  const t = e ? xe.document.createElement("div") : hi("svg");
  return t.innerHTML = n, n = as(t.firstChild), t.removeChild(t.firstChild), n;
}
function Ce(n, e) {
  return e && (e instanceof xe.window.Node || e.ownerDocument && e instanceof e.ownerDocument.defaultView.Node) ? e : hi(n);
}
function tt(n) {
  if (!n) return null;
  if (n.instance instanceof fa) return n.instance;
  if (n.nodeName === "#document-fragment") return new Lt.Fragment(n);
  let e = $t(n.nodeName || "Dom");
  return e === "LinearGradient" || e === "RadialGradient" ? e = "Gradient" : Lt[e] || (e = "Dom"), new Lt[e](n);
}
let as = tt;
function me(n, e = n.name, t = !1) {
  return Lt[e] = n, t && (Lt[pa] = n), pn(Object.getOwnPropertyNames(n.prototype)), n;
}
let Cc = 1e3;
function mn(n) {
  return "Svgjs" + $t(n) + Cc++;
}
function bn(n) {
  for (let e = n.children.length - 1; e >= 0; e--) bn(n.children[e]);
  return n.id && (n.id = mn(n.nodeName)), n;
}
function oe(n, e) {
  let t, i;
  for (i = (n = Array.isArray(n) ? n : [n]).length - 1; i >= 0; i--) for (t in e) n[i].prototype[t] = e[t];
}
function Se(n) {
  return function(...e) {
    const t = e[e.length - 1];
    return !t || t.constructor !== Object || t instanceof Array ? n.apply(this, e) : n.apply(this, e.slice(0, -1)).attr(t);
  };
}
de("Dom", { siblings: function() {
  return this.parent().children();
}, position: function() {
  return this.parent().index(this);
}, next: function() {
  return this.siblings()[this.position() + 1];
}, prev: function() {
  return this.siblings()[this.position() - 1];
}, forward: function() {
  const n = this.position();
  return this.parent().add(this.remove(), n + 1), this;
}, backward: function() {
  const n = this.position();
  return this.parent().add(this.remove(), n ? n - 1 : 0), this;
}, front: function() {
  return this.parent().add(this.remove()), this;
}, back: function() {
  return this.parent().add(this.remove(), 0), this;
}, before: function(n) {
  (n = We(n)).remove();
  const e = this.position();
  return this.parent().add(n, e), this;
}, after: function(n) {
  (n = We(n)).remove();
  const e = this.position();
  return this.parent().add(n, e + 1), this;
}, insertBefore: function(n) {
  return (n = We(n)).before(this), this;
}, insertAfter: function(n) {
  return (n = We(n)).after(this), this;
} });
const vn = /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i, Mc = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, Lc = /rgb\((\d+),(\d+),(\d+)\)/, Pc = /(#[a-z_][a-z0-9\-_]*)/i, Tc = /\)\s*,?\s*/, Ic = /\s/g, nr = /^#[a-f0-9]{3}$|^#[a-f0-9]{6}$/i, or = /^rgb\(/, lr = /^(\s+)?$/, cr = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Ec = /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i, ut = /[\s,]+/, xa = /[MLHVCSQTAZ]/i;
function Rc(n) {
  const e = Math.round(n), t = Math.max(0, Math.min(255, e)).toString(16);
  return t.length === 1 ? "0" + t : t;
}
function Nt(n, e) {
  for (let t = e.length; t--; ) if (n[e[t]] == null) return !1;
  return !0;
}
function rs(n, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? n + 6 * (e - n) * t : t < 0.5 ? e : t < 2 / 3 ? n + (e - n) * (2 / 3 - t) * 6 : n;
}
de("Dom", { classes: function() {
  const n = this.attr("class");
  return n == null ? [] : n.trim().split(ut);
}, hasClass: function(n) {
  return this.classes().indexOf(n) !== -1;
}, addClass: function(n) {
  if (!this.hasClass(n)) {
    const e = this.classes();
    e.push(n), this.attr("class", e.join(" "));
  }
  return this;
}, removeClass: function(n) {
  return this.hasClass(n) && this.attr("class", this.classes().filter(function(e) {
    return e !== n;
  }).join(" ")), this;
}, toggleClass: function(n) {
  return this.hasClass(n) ? this.removeClass(n) : this.addClass(n);
} }), de("Dom", { css: function(n, e) {
  const t = {};
  if (arguments.length === 0) return this.node.style.cssText.split(/\s*;\s*/).filter(function(i) {
    return !!i.length;
  }).forEach(function(i) {
    const s = i.split(/\s*:\s*/);
    t[s[0]] = s[1];
  }), t;
  if (arguments.length < 2) {
    if (Array.isArray(n)) {
      for (const i of n) {
        const s = i;
        t[i] = this.node.style.getPropertyValue(s);
      }
      return t;
    }
    if (typeof n == "string") return this.node.style.getPropertyValue(n);
    if (typeof n == "object") for (const i in n) this.node.style.setProperty(i, n[i] == null || lr.test(n[i]) ? "" : n[i]);
  }
  return arguments.length === 2 && this.node.style.setProperty(n, e == null || lr.test(e) ? "" : e), this;
}, show: function() {
  return this.css("display", "");
}, hide: function() {
  return this.css("display", "none");
}, visible: function() {
  return this.css("display") !== "none";
} }), de("Dom", { data: function(n, e, t) {
  if (n == null) return this.data(ua(function(i, s) {
    let a;
    const r = i.length, o = [];
    for (a = 0; a < r; a++) s(i[a]) && o.push(i[a]);
    return o;
  }(this.node.attributes, (i) => i.nodeName.indexOf("data-") === 0), (i) => i.nodeName.slice(5)));
  if (n instanceof Array) {
    const i = {};
    for (const s of n) i[s] = this.data(s);
    return i;
  }
  if (typeof n == "object") for (e in n) this.data(e, n[e]);
  else if (arguments.length < 2) try {
    return JSON.parse(this.attr("data-" + n));
  } catch {
    return this.attr("data-" + n);
  }
  else this.attr("data-" + n, e === null ? null : t === !0 || typeof e == "string" || typeof e == "number" ? e : JSON.stringify(e));
  return this;
} }), de("Dom", { remember: function(n, e) {
  if (typeof arguments[0] == "object") for (const t in n) this.remember(t, n[t]);
  else {
    if (arguments.length === 1) return this.memory()[n];
    this.memory()[n] = e;
  }
  return this;
}, forget: function() {
  if (arguments.length === 0) this._memory = {};
  else for (let n = arguments.length - 1; n >= 0; n--) delete this.memory()[arguments[n]];
  return this;
}, memory: function() {
  return this._memory = this._memory || {};
} });
class Ae {
  constructor(...e) {
    this.init(...e);
  }
  static isColor(e) {
    return e && (e instanceof Ae || this.isRgb(e) || this.test(e));
  }
  static isRgb(e) {
    return e && typeof e.r == "number" && typeof e.g == "number" && typeof e.b == "number";
  }
  static random(e = "vibrant", t) {
    const { random: i, round: s, sin: a, PI: r } = Math;
    if (e === "vibrant") {
      const o = 24 * i() + 57, l = 38 * i() + 45, c = 360 * i();
      return new Ae(o, l, c, "lch");
    }
    if (e === "sine") {
      const o = s(80 * a(2 * r * (t = t ?? i()) / 0.5 + 0.01) + 150), l = s(50 * a(2 * r * t / 0.5 + 4.6) + 200), c = s(100 * a(2 * r * t / 0.5 + 2.3) + 150);
      return new Ae(o, l, c);
    }
    if (e === "pastel") {
      const o = 8 * i() + 86, l = 17 * i() + 9, c = 360 * i();
      return new Ae(o, l, c, "lch");
    }
    if (e === "dark") {
      const o = 10 + 10 * i(), l = 50 * i() + 86, c = 360 * i();
      return new Ae(o, l, c, "lch");
    }
    if (e === "rgb") {
      const o = 255 * i(), l = 255 * i(), c = 255 * i();
      return new Ae(o, l, c);
    }
    if (e === "lab") {
      const o = 100 * i(), l = 256 * i() - 128, c = 256 * i() - 128;
      return new Ae(o, l, c, "lab");
    }
    if (e === "grey") {
      const o = 255 * i();
      return new Ae(o, o, o);
    }
    throw new Error("Unsupported random color mode");
  }
  static test(e) {
    return typeof e == "string" && (nr.test(e) || or.test(e));
  }
  cmyk() {
    const { _a: e, _b: t, _c: i } = this.rgb(), [s, a, r] = [e, t, i].map((l) => l / 255), o = Math.min(1 - s, 1 - a, 1 - r);
    return o === 1 ? new Ae(0, 0, 0, 1, "cmyk") : new Ae((1 - s - o) / (1 - o), (1 - a - o) / (1 - o), (1 - r - o) / (1 - o), o, "cmyk");
  }
  hsl() {
    const { _a: e, _b: t, _c: i } = this.rgb(), [s, a, r] = [e, t, i].map((u) => u / 255), o = Math.max(s, a, r), l = Math.min(s, a, r), c = (o + l) / 2, h = o === l, d = o - l;
    return new Ae(360 * (h ? 0 : o === s ? ((a - r) / d + (a < r ? 6 : 0)) / 6 : o === a ? ((r - s) / d + 2) / 6 : o === r ? ((s - a) / d + 4) / 6 : 0), 100 * (h ? 0 : c > 0.5 ? d / (2 - o - l) : d / (o + l)), 100 * c, "hsl");
  }
  init(e = 0, t = 0, i = 0, s = 0, a = "rgb") {
    if (e = e || 0, this.space) for (const d in this.space) delete this[this.space[d]];
    if (typeof e == "number") a = typeof s == "string" ? s : a, s = typeof s == "string" ? 0 : s, Object.assign(this, { _a: e, _b: t, _c: i, _d: s, space: a });
    else if (e instanceof Array) this.space = t || (typeof e[3] == "string" ? e[3] : e[4]) || "rgb", Object.assign(this, { _a: e[0], _b: e[1], _c: e[2], _d: e[3] || 0 });
    else if (e instanceof Object) {
      const d = function(u, g) {
        const p = Nt(u, "rgb") ? { _a: u.r, _b: u.g, _c: u.b, _d: 0, space: "rgb" } : Nt(u, "xyz") ? { _a: u.x, _b: u.y, _c: u.z, _d: 0, space: "xyz" } : Nt(u, "hsl") ? { _a: u.h, _b: u.s, _c: u.l, _d: 0, space: "hsl" } : Nt(u, "lab") ? { _a: u.l, _b: u.a, _c: u.b, _d: 0, space: "lab" } : Nt(u, "lch") ? { _a: u.l, _b: u.c, _c: u.h, _d: 0, space: "lch" } : Nt(u, "cmyk") ? { _a: u.c, _b: u.m, _c: u.y, _d: u.k, space: "cmyk" } : { _a: 0, _b: 0, _c: 0, space: "rgb" };
        return p.space = g || p.space, p;
      }(e, t);
      Object.assign(this, d);
    } else if (typeof e == "string") if (or.test(e)) {
      const d = e.replace(Ic, ""), [u, g, p] = Lc.exec(d).slice(1, 4).map((f) => parseInt(f));
      Object.assign(this, { _a: u, _b: g, _c: p, _d: 0, space: "rgb" });
    } else {
      if (!nr.test(e)) throw Error("Unsupported string format, can't construct Color");
      {
        const d = (f) => parseInt(f, 16), [, u, g, p] = Mc.exec(function(f) {
          return f.length === 4 ? ["#", f.substring(1, 2), f.substring(1, 2), f.substring(2, 3), f.substring(2, 3), f.substring(3, 4), f.substring(3, 4)].join("") : f;
        }(e)).map(d);
        Object.assign(this, { _a: u, _b: g, _c: p, _d: 0, space: "rgb" });
      }
    }
    const { _a: r, _b: o, _c: l, _d: c } = this, h = this.space === "rgb" ? { r, g: o, b: l } : this.space === "xyz" ? { x: r, y: o, z: l } : this.space === "hsl" ? { h: r, s: o, l } : this.space === "lab" ? { l: r, a: o, b: l } : this.space === "lch" ? { l: r, c: o, h: l } : this.space === "cmyk" ? { c: r, m: o, y: l, k: c } : {};
    Object.assign(this, h);
  }
  lab() {
    const { x: e, y: t, z: i } = this.xyz();
    return new Ae(116 * t - 16, 500 * (e - t), 200 * (t - i), "lab");
  }
  lch() {
    const { l: e, a: t, b: i } = this.lab(), s = Math.sqrt(t ** 2 + i ** 2);
    let a = 180 * Math.atan2(i, t) / Math.PI;
    return a < 0 && (a *= -1, a = 360 - a), new Ae(e, s, a, "lch");
  }
  rgb() {
    if (this.space === "rgb") return this;
    if ((e = this.space) === "lab" || e === "xyz" || e === "lch") {
      let { x: t, y: i, z: s } = this;
      if (this.space === "lab" || this.space === "lch") {
        let { l: g, a: p, b: f } = this;
        if (this.space === "lch") {
          const { c: k, h: A } = this, S = Math.PI / 180;
          p = k * Math.cos(S * A), f = k * Math.sin(S * A);
        }
        const x = (g + 16) / 116, m = p / 500 + x, b = x - f / 200, w = 16 / 116, y = 8856e-6, v = 7.787;
        t = 0.95047 * (m ** 3 > y ? m ** 3 : (m - w) / v), i = 1 * (x ** 3 > y ? x ** 3 : (x - w) / v), s = 1.08883 * (b ** 3 > y ? b ** 3 : (b - w) / v);
      }
      const a = 3.2406 * t + -1.5372 * i + -0.4986 * s, r = -0.9689 * t + 1.8758 * i + 0.0415 * s, o = 0.0557 * t + -0.204 * i + 1.057 * s, l = Math.pow, c = 31308e-7, h = a > c ? 1.055 * l(a, 1 / 2.4) - 0.055 : 12.92 * a, d = r > c ? 1.055 * l(r, 1 / 2.4) - 0.055 : 12.92 * r, u = o > c ? 1.055 * l(o, 1 / 2.4) - 0.055 : 12.92 * o;
      return new Ae(255 * h, 255 * d, 255 * u);
    }
    if (this.space === "hsl") {
      let { h: t, s: i, l: s } = this;
      if (t /= 360, i /= 100, s /= 100, i === 0)
        return s *= 255, new Ae(s, s, s);
      const a = s < 0.5 ? s * (1 + i) : s + i - s * i, r = 2 * s - a, o = 255 * rs(r, a, t + 1 / 3), l = 255 * rs(r, a, t), c = 255 * rs(r, a, t - 1 / 3);
      return new Ae(o, l, c);
    }
    if (this.space === "cmyk") {
      const { c: t, m: i, y: s, k: a } = this, r = 255 * (1 - Math.min(1, t * (1 - a) + a)), o = 255 * (1 - Math.min(1, i * (1 - a) + a)), l = 255 * (1 - Math.min(1, s * (1 - a) + a));
      return new Ae(r, o, l);
    }
    return this;
    var e;
  }
  toArray() {
    const { _a: e, _b: t, _c: i, _d: s, space: a } = this;
    return [e, t, i, s, a];
  }
  toHex() {
    const [e, t, i] = this._clamped().map(Rc);
    return `#${e}${t}${i}`;
  }
  toRgb() {
    const [e, t, i] = this._clamped();
    return `rgb(${e},${t},${i})`;
  }
  toString() {
    return this.toHex();
  }
  xyz() {
    const { _a: e, _b: t, _c: i } = this.rgb(), [s, a, r] = [e, t, i].map((x) => x / 255), o = s > 0.04045 ? Math.pow((s + 0.055) / 1.055, 2.4) : s / 12.92, l = a > 0.04045 ? Math.pow((a + 0.055) / 1.055, 2.4) : a / 12.92, c = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92, h = (0.4124 * o + 0.3576 * l + 0.1805 * c) / 0.95047, d = (0.2126 * o + 0.7152 * l + 0.0722 * c) / 1, u = (0.0193 * o + 0.1192 * l + 0.9505 * c) / 1.08883, g = h > 8856e-6 ? Math.pow(h, 1 / 3) : 7.787 * h + 16 / 116, p = d > 8856e-6 ? Math.pow(d, 1 / 3) : 7.787 * d + 16 / 116, f = u > 8856e-6 ? Math.pow(u, 1 / 3) : 7.787 * u + 16 / 116;
    return new Ae(g, p, f, "xyz");
  }
  _clamped() {
    const { _a: e, _b: t, _c: i } = this.rgb(), { max: s, min: a, round: r } = Math;
    return [e, t, i].map((o) => s(0, a(r(o), 255)));
  }
}
class be {
  constructor(...e) {
    this.init(...e);
  }
  clone() {
    return new be(this);
  }
  init(e, t) {
    const a = Array.isArray(e) ? { x: e[0], y: e[1] } : typeof e == "object" ? { x: e.x, y: e.y } : { x: e, y: t };
    return this.x = a.x == null ? 0 : a.x, this.y = a.y == null ? 0 : a.y, this;
  }
  toArray() {
    return [this.x, this.y];
  }
  transform(e) {
    return this.clone().transformO(e);
  }
  transformO(e) {
    ne.isMatrixLike(e) || (e = new ne(e));
    const { x: t, y: i } = this;
    return this.x = e.a * t + e.c * i + e.e, this.y = e.b * t + e.d * i + e.f, this;
  }
}
function _t(n, e, t) {
  return Math.abs(e - n) < 1e-6;
}
class ne {
  constructor(...e) {
    this.init(...e);
  }
  static formatTransforms(e) {
    const t = e.flip === "both" || e.flip === !0, i = e.flip && (t || e.flip === "x") ? -1 : 1, s = e.flip && (t || e.flip === "y") ? -1 : 1, a = e.skew && e.skew.length ? e.skew[0] : isFinite(e.skew) ? e.skew : isFinite(e.skewX) ? e.skewX : 0, r = e.skew && e.skew.length ? e.skew[1] : isFinite(e.skew) ? e.skew : isFinite(e.skewY) ? e.skewY : 0, o = e.scale && e.scale.length ? e.scale[0] * i : isFinite(e.scale) ? e.scale * i : isFinite(e.scaleX) ? e.scaleX * i : i, l = e.scale && e.scale.length ? e.scale[1] * s : isFinite(e.scale) ? e.scale * s : isFinite(e.scaleY) ? e.scaleY * s : s, c = e.shear || 0, h = e.rotate || e.theta || 0, d = new be(e.origin || e.around || e.ox || e.originX, e.oy || e.originY), u = d.x, g = d.y, p = new be(e.position || e.px || e.positionX || NaN, e.py || e.positionY || NaN), f = p.x, x = p.y, m = new be(e.translate || e.tx || e.translateX, e.ty || e.translateY), b = m.x, w = m.y, y = new be(e.relative || e.rx || e.relativeX, e.ry || e.relativeY);
    return { scaleX: o, scaleY: l, skewX: a, skewY: r, shear: c, theta: h, rx: y.x, ry: y.y, tx: b, ty: w, ox: u, oy: g, px: f, py: x };
  }
  static fromArray(e) {
    return { a: e[0], b: e[1], c: e[2], d: e[3], e: e[4], f: e[5] };
  }
  static isMatrixLike(e) {
    return e.a != null || e.b != null || e.c != null || e.d != null || e.e != null || e.f != null;
  }
  static matrixMultiply(e, t, i) {
    const s = e.a * t.a + e.c * t.b, a = e.b * t.a + e.d * t.b, r = e.a * t.c + e.c * t.d, o = e.b * t.c + e.d * t.d, l = e.e + e.a * t.e + e.c * t.f, c = e.f + e.b * t.e + e.d * t.f;
    return i.a = s, i.b = a, i.c = r, i.d = o, i.e = l, i.f = c, i;
  }
  around(e, t, i) {
    return this.clone().aroundO(e, t, i);
  }
  aroundO(e, t, i) {
    const s = e || 0, a = t || 0;
    return this.translateO(-s, -a).lmultiplyO(i).translateO(s, a);
  }
  clone() {
    return new ne(this);
  }
  decompose(e = 0, t = 0) {
    const i = this.a, s = this.b, a = this.c, r = this.d, o = this.e, l = this.f, c = i * r - s * a, h = c > 0 ? 1 : -1, d = h * Math.sqrt(i * i + s * s), u = Math.atan2(h * s, h * i), g = 180 / Math.PI * u, p = Math.cos(u), f = Math.sin(u), x = (i * a + s * r) / c, m = a * d / (x * i - s) || r * d / (x * s + i);
    return { scaleX: d, scaleY: m, shear: x, rotate: g, translateX: o - e + e * p * d + t * (x * p * d - f * m), translateY: l - t + e * f * d + t * (x * f * d + p * m), originX: e, originY: t, a: this.a, b: this.b, c: this.c, d: this.d, e: this.e, f: this.f };
  }
  equals(e) {
    if (e === this) return !0;
    const t = new ne(e);
    return _t(this.a, t.a) && _t(this.b, t.b) && _t(this.c, t.c) && _t(this.d, t.d) && _t(this.e, t.e) && _t(this.f, t.f);
  }
  flip(e, t) {
    return this.clone().flipO(e, t);
  }
  flipO(e, t) {
    return e === "x" ? this.scaleO(-1, 1, t, 0) : e === "y" ? this.scaleO(1, -1, 0, t) : this.scaleO(-1, -1, e, t || e);
  }
  init(e) {
    const t = ne.fromArray([1, 0, 0, 1, 0, 0]);
    return e = e instanceof He ? e.matrixify() : typeof e == "string" ? ne.fromArray(e.split(ut).map(parseFloat)) : Array.isArray(e) ? ne.fromArray(e) : typeof e == "object" && ne.isMatrixLike(e) ? e : typeof e == "object" ? new ne().transform(e) : arguments.length === 6 ? ne.fromArray([].slice.call(arguments)) : t, this.a = e.a != null ? e.a : t.a, this.b = e.b != null ? e.b : t.b, this.c = e.c != null ? e.c : t.c, this.d = e.d != null ? e.d : t.d, this.e = e.e != null ? e.e : t.e, this.f = e.f != null ? e.f : t.f, this;
  }
  inverse() {
    return this.clone().inverseO();
  }
  inverseO() {
    const e = this.a, t = this.b, i = this.c, s = this.d, a = this.e, r = this.f, o = e * s - t * i;
    if (!o) throw new Error("Cannot invert " + this);
    const l = s / o, c = -t / o, h = -i / o, d = e / o, u = -(l * a + h * r), g = -(c * a + d * r);
    return this.a = l, this.b = c, this.c = h, this.d = d, this.e = u, this.f = g, this;
  }
  lmultiply(e) {
    return this.clone().lmultiplyO(e);
  }
  lmultiplyO(e) {
    const t = e instanceof ne ? e : new ne(e);
    return ne.matrixMultiply(t, this, this);
  }
  multiply(e) {
    return this.clone().multiplyO(e);
  }
  multiplyO(e) {
    const t = e instanceof ne ? e : new ne(e);
    return ne.matrixMultiply(this, t, this);
  }
  rotate(e, t, i) {
    return this.clone().rotateO(e, t, i);
  }
  rotateO(e, t = 0, i = 0) {
    e = is(e);
    const s = Math.cos(e), a = Math.sin(e), { a: r, b: o, c: l, d: c, e: h, f: d } = this;
    return this.a = r * s - o * a, this.b = o * s + r * a, this.c = l * s - c * a, this.d = c * s + l * a, this.e = h * s - d * a + i * a - t * s + t, this.f = d * s + h * a - t * a - i * s + i, this;
  }
  scale() {
    return this.clone().scaleO(...arguments);
  }
  scaleO(e, t = e, i = 0, s = 0) {
    arguments.length === 3 && (s = i, i = t, t = e);
    const { a, b: r, c: o, d: l, e: c, f: h } = this;
    return this.a = a * e, this.b = r * t, this.c = o * e, this.d = l * t, this.e = c * e - i * e + i, this.f = h * t - s * t + s, this;
  }
  shear(e, t, i) {
    return this.clone().shearO(e, t, i);
  }
  shearO(e, t = 0, i = 0) {
    const { a: s, b: a, c: r, d: o, e: l, f: c } = this;
    return this.a = s + a * e, this.c = r + o * e, this.e = l + c * e - i * e, this;
  }
  skew() {
    return this.clone().skewO(...arguments);
  }
  skewO(e, t = e, i = 0, s = 0) {
    arguments.length === 3 && (s = i, i = t, t = e), e = is(e), t = is(t);
    const a = Math.tan(e), r = Math.tan(t), { a: o, b: l, c, d: h, e: d, f: u } = this;
    return this.a = o + l * a, this.b = l + o * r, this.c = c + h * a, this.d = h + c * r, this.e = d + u * a - s * a, this.f = u + d * r - i * r, this;
  }
  skewX(e, t, i) {
    return this.skew(e, 0, t, i);
  }
  skewY(e, t, i) {
    return this.skew(0, e, t, i);
  }
  toArray() {
    return [this.a, this.b, this.c, this.d, this.e, this.f];
  }
  toString() {
    return "matrix(" + this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.e + "," + this.f + ")";
  }
  transform(e) {
    if (ne.isMatrixLike(e))
      return new ne(e).multiplyO(this);
    const t = ne.formatTransforms(e), { x: i, y: s } = new be(t.ox, t.oy).transform(this), a = new ne().translateO(t.rx, t.ry).lmultiplyO(this).translateO(-i, -s).scaleO(t.scaleX, t.scaleY).skewO(t.skewX, t.skewY).shearO(t.shear).rotateO(t.theta).translateO(i, s);
    if (isFinite(t.px) || isFinite(t.py)) {
      const r = new be(i, s).transform(a), o = isFinite(t.px) ? t.px - r.x : 0, l = isFinite(t.py) ? t.py - r.y : 0;
      a.translateO(o, l);
    }
    return a.translateO(t.tx, t.ty), a;
  }
  translate(e, t) {
    return this.clone().translateO(e, t);
  }
  translateO(e, t) {
    return this.e += e || 0, this.f += t || 0, this;
  }
  valueOf() {
    return { a: this.a, b: this.b, c: this.c, d: this.d, e: this.e, f: this.f };
  }
}
function pt() {
  if (!pt.nodes) {
    const n = We().size(2, 0);
    n.node.style.cssText = ["opacity: 0", "position: absolute", "left: -100%", "top: -100%", "overflow: hidden"].join(";"), n.attr("focusable", "false"), n.attr("aria-hidden", "true");
    const e = n.path().node;
    pt.nodes = { svg: n, path: e };
  }
  if (!pt.nodes.svg.node.parentNode) {
    const n = xe.document.body || xe.document.documentElement;
    pt.nodes.svg.addTo(n);
  }
  return pt.nodes;
}
function yn(n) {
  return !(n.width || n.height || n.x || n.y);
}
me(ne, "Matrix");
class Re {
  constructor(...e) {
    this.init(...e);
  }
  addOffset() {
    return this.x += xe.window.pageXOffset, this.y += xe.window.pageYOffset, new Re(this);
  }
  init(e) {
    return e = typeof e == "string" ? e.split(ut).map(parseFloat) : Array.isArray(e) ? e : typeof e == "object" ? [e.left != null ? e.left : e.x, e.top != null ? e.top : e.y, e.width, e.height] : arguments.length === 4 ? [].slice.call(arguments) : [0, 0, 0, 0], this.x = e[0] || 0, this.y = e[1] || 0, this.width = this.w = e[2] || 0, this.height = this.h = e[3] || 0, this.x2 = this.x + this.w, this.y2 = this.y + this.h, this.cx = this.x + this.w / 2, this.cy = this.y + this.h / 2, this;
  }
  isNulled() {
    return yn(this);
  }
  merge(e) {
    const t = Math.min(this.x, e.x), i = Math.min(this.y, e.y), s = Math.max(this.x + this.width, e.x + e.width) - t, a = Math.max(this.y + this.height, e.y + e.height) - i;
    return new Re(t, i, s, a);
  }
  toArray() {
    return [this.x, this.y, this.width, this.height];
  }
  toString() {
    return this.x + " " + this.y + " " + this.width + " " + this.height;
  }
  transform(e) {
    e instanceof ne || (e = new ne(e));
    let t = 1 / 0, i = -1 / 0, s = 1 / 0, a = -1 / 0;
    return [new be(this.x, this.y), new be(this.x2, this.y), new be(this.x, this.y2), new be(this.x2, this.y2)].forEach(function(r) {
      r = r.transform(e), t = Math.min(t, r.x), i = Math.max(i, r.x), s = Math.min(s, r.y), a = Math.max(a, r.y);
    }), new Re(t, s, i - t, a - s);
  }
}
function hr(n, e, t) {
  let i;
  try {
    if (i = e(n.node), yn(i) && (s = n.node) !== xe.document && !(xe.document.documentElement.contains || function(a) {
      for (; a.parentNode; ) a = a.parentNode;
      return a === xe.document;
    }).call(xe.document.documentElement, s)) throw new Error("Element not in the dom");
  } catch {
    i = t(n);
  }
  var s;
  return i;
}
de({ viewbox: { viewbox(n, e, t, i) {
  return n == null ? new Re(this.attr("viewBox")) : this.attr("viewBox", new Re(n, e, t, i));
}, zoom(n, e) {
  let { width: t, height: i } = this.attr(["width", "height"]);
  if ((t || i) && typeof t != "string" && typeof i != "string" || (t = this.node.clientWidth, i = this.node.clientHeight), !t || !i) throw new Error("Impossible to get absolute width and height. Please provide an absolute width and height attribute on the zooming element");
  const s = this.viewbox(), a = t / s.width, r = i / s.height, o = Math.min(a, r);
  if (n == null) return o;
  let l = o / n;
  l === 1 / 0 && (l = Number.MAX_SAFE_INTEGER / 100), e = e || new be(t / 2 / a + s.x, i / 2 / r + s.y);
  const c = new Re(s).transform(new ne({ scale: l, origin: e }));
  return this.viewbox(c);
} } }), me(Re, "Box");
class It extends Array {
  constructor(e = [], ...t) {
    if (super(e, ...t), typeof e == "number") return this;
    this.length = 0, this.push(...e);
  }
}
oe([It], { each(n, ...e) {
  return typeof n == "function" ? this.map((t, i, s) => n.call(t, t, i, s)) : this.map((t) => t[n](...e));
}, toArray() {
  return Array.prototype.concat.apply([], this);
} });
const Oc = ["toArray", "constructor", "each"];
function Rt(n, e) {
  return new It(ua((e || xe.document).querySelectorAll(n), function(t) {
    return tt(t);
  }));
}
It.extend = function(n) {
  n = n.reduce((e, t) => (Oc.includes(t) || t[0] === "_" || (t in Array.prototype && (e["$" + t] = Array.prototype[t]), e[t] = function(...i) {
    return this.each(t, ...i);
  }), e), {}), oe([It], n);
};
let zc = 0;
const wn = {};
function kn(n) {
  let e = n.getEventHolder();
  return e === xe.window && (e = wn), e.events || (e.events = {}), e.events;
}
function ma(n) {
  return n.getEventTarget();
}
function dt(n, e, t, i, s) {
  const a = t.bind(i || n), r = We(n), o = kn(r), l = ma(r);
  e = Array.isArray(e) ? e : e.split(ut), t._svgjsListenerId || (t._svgjsListenerId = ++zc), e.forEach(function(c) {
    const h = c.split(".")[0], d = c.split(".")[1] || "*";
    o[h] = o[h] || {}, o[h][d] = o[h][d] || {}, o[h][d][t._svgjsListenerId] = a, l.addEventListener(h, a, s || !1);
  });
}
function it(n, e, t, i) {
  const s = We(n), a = kn(s), r = ma(s);
  (typeof t != "function" || (t = t._svgjsListenerId)) && (e = Array.isArray(e) ? e : (e || "").split(ut)).forEach(function(o) {
    const l = o && o.split(".")[0], c = o && o.split(".")[1];
    let h, d;
    if (t) a[l] && a[l][c || "*"] && (r.removeEventListener(l, a[l][c || "*"][t], i || !1), delete a[l][c || "*"][t]);
    else if (l && c) {
      if (a[l] && a[l][c]) {
        for (d in a[l][c]) it(r, [l, c].join("."), d);
        delete a[l][c];
      }
    } else if (c) for (o in a) for (h in a[o]) c === h && it(r, [o, c].join("."));
    else if (l) {
      if (a[l]) {
        for (h in a[l]) it(r, [l, h].join("."));
        delete a[l];
      }
    } else {
      for (o in a) it(r, o);
      (function(u) {
        let g = u.getEventHolder();
        g === xe.window && (g = wn), g.events && (g.events = {});
      })(s);
    }
  });
}
class vi extends fa {
  addEventListener() {
  }
  dispatch(e, t, i) {
    return function(s, a, r, o) {
      const l = ma(s);
      return a instanceof xe.window.Event || (a = new xe.window.CustomEvent(a, { detail: r, cancelable: !0, ...o })), l.dispatchEvent(a), a;
    }(this, e, t, i);
  }
  dispatchEvent(e) {
    const t = this.getEventHolder().events;
    if (!t) return !0;
    const i = t[e.type];
    for (const s in i) for (const a in i[s]) i[s][a](e);
    return !e.defaultPrevented;
  }
  fire(e, t, i) {
    return this.dispatch(e, t, i), this;
  }
  getEventHolder() {
    return this;
  }
  getEventTarget() {
    return this;
  }
  off(e, t, i) {
    return it(this, e, t, i), this;
  }
  on(e, t, i, s) {
    return dt(this, e, t, i, s), this;
  }
  removeEventListener() {
  }
}
function dr() {
}
me(vi, "EventTarget");
const ns = 400, Nc = ">", _c = 0, Dc = { "fill-opacity": 1, "stroke-opacity": 1, "stroke-width": 0, "stroke-linejoin": "miter", "stroke-linecap": "butt", fill: "#000000", stroke: "#000000", opacity: 1, x: 0, y: 0, cx: 0, cy: 0, width: 0, height: 0, r: 0, rx: 0, ry: 0, offset: 0, "stop-opacity": 1, "stop-color": "#000000", "text-anchor": "start" };
class Et extends Array {
  constructor(...e) {
    super(...e), this.init(...e);
  }
  clone() {
    return new this.constructor(this);
  }
  init(e) {
    return typeof e == "number" || (this.length = 0, this.push(...this.parse(e))), this;
  }
  parse(e = []) {
    return e instanceof Array ? e : e.trim().split(ut).map(parseFloat);
  }
  toArray() {
    return Array.prototype.concat.apply([], this);
  }
  toSet() {
    return new Set(this);
  }
  toString() {
    return this.join(" ");
  }
  valueOf() {
    const e = [];
    return e.push(...this), e;
  }
}
class ce {
  constructor(...e) {
    this.init(...e);
  }
  convert(e) {
    return new ce(this.value, e);
  }
  divide(e) {
    return e = new ce(e), new ce(this / e, this.unit || e.unit);
  }
  init(e, t) {
    return t = Array.isArray(e) ? e[1] : t, e = Array.isArray(e) ? e[0] : e, this.value = 0, this.unit = t || "", typeof e == "number" ? this.value = isNaN(e) ? 0 : isFinite(e) ? e : e < 0 ? -34e37 : 34e37 : typeof e == "string" ? (t = e.match(vn)) && (this.value = parseFloat(t[1]), t[5] === "%" ? this.value /= 100 : t[5] === "s" && (this.value *= 1e3), this.unit = t[5]) : e instanceof ce && (this.value = e.valueOf(), this.unit = e.unit), this;
  }
  minus(e) {
    return e = new ce(e), new ce(this - e, this.unit || e.unit);
  }
  plus(e) {
    return e = new ce(e), new ce(this + e, this.unit || e.unit);
  }
  times(e) {
    return e = new ce(e), new ce(this * e, this.unit || e.unit);
  }
  toArray() {
    return [this.value, this.unit];
  }
  toJSON() {
    return this.toString();
  }
  toString() {
    return (this.unit === "%" ? ~~(1e8 * this.value) / 1e6 : this.unit === "s" ? this.value / 1e3 : this.value) + this.unit;
  }
  valueOf() {
    return this.value;
  }
}
const Yc = /* @__PURE__ */ new Set(["fill", "stroke", "color", "bgcolor", "stop-color", "flood-color", "lighting-color"]), An = [];
class mt extends vi {
  constructor(e, t) {
    super(), this.node = e, this.type = e.nodeName, t && e !== t && this.attr(t);
  }
  add(e, t) {
    return (e = We(e)).removeNamespace && this.node instanceof xe.window.SVGElement && e.removeNamespace(), t == null ? this.node.appendChild(e.node) : e.node !== this.node.childNodes[t] && this.node.insertBefore(e.node, this.node.childNodes[t]), this;
  }
  addTo(e, t) {
    return We(e).put(this, t);
  }
  children() {
    return new It(ua(this.node.children, function(e) {
      return tt(e);
    }));
  }
  clear() {
    for (; this.node.hasChildNodes(); ) this.node.removeChild(this.node.lastChild);
    return this;
  }
  clone(e = !0, t = !0) {
    this.writeDataToDom();
    let i = this.node.cloneNode(e);
    return t && (i = bn(i)), new this.constructor(i);
  }
  each(e, t) {
    const i = this.children();
    let s, a;
    for (s = 0, a = i.length; s < a; s++) e.apply(i[s], [s, i]), t && i[s].each(e, t);
    return this;
  }
  element(e, t) {
    return this.put(new mt(hi(e), t));
  }
  first() {
    return tt(this.node.firstChild);
  }
  get(e) {
    return tt(this.node.childNodes[e]);
  }
  getEventHolder() {
    return this.node;
  }
  getEventTarget() {
    return this.node;
  }
  has(e) {
    return this.index(e) >= 0;
  }
  html(e, t) {
    return this.xml(e, t, "http://www.w3.org/1999/xhtml");
  }
  id(e) {
    return e !== void 0 || this.node.id || (this.node.id = mn(this.type)), this.attr("id", e);
  }
  index(e) {
    return [].slice.call(this.node.childNodes).indexOf(e.node);
  }
  last() {
    return tt(this.node.lastChild);
  }
  matches(e) {
    const t = this.node, i = t.matches || t.matchesSelector || t.msMatchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || t.oMatchesSelector || null;
    return i && i.call(t, e);
  }
  parent(e) {
    let t = this;
    if (!t.node.parentNode) return null;
    if (t = tt(t.node.parentNode), !e) return t;
    do
      if (typeof e == "string" ? t.matches(e) : t instanceof e) return t;
    while (t = tt(t.node.parentNode));
    return t;
  }
  put(e, t) {
    return e = We(e), this.add(e, t), e;
  }
  putIn(e, t) {
    return We(e).add(this, t);
  }
  remove() {
    return this.parent() && this.parent().removeElement(this), this;
  }
  removeElement(e) {
    return this.node.removeChild(e.node), this;
  }
  replace(e) {
    return e = We(e), this.node.parentNode && this.node.parentNode.replaceChild(e.node, this.node), e;
  }
  round(e = 2, t = null) {
    const i = 10 ** e, s = this.attr(t);
    for (const a in s) typeof s[a] == "number" && (s[a] = Math.round(s[a] * i) / i);
    return this.attr(s), this;
  }
  svg(e, t) {
    return this.xml(e, t, ga);
  }
  toString() {
    return this.id();
  }
  words(e) {
    return this.node.textContent = e, this;
  }
  wrap(e) {
    const t = this.parent();
    if (!t) return this.addTo(e);
    const i = t.index(this);
    return t.put(e, i).put(this);
  }
  writeDataToDom() {
    return this.each(function() {
      this.writeDataToDom();
    }), this;
  }
  xml(e, t, i) {
    if (typeof e == "boolean" && (i = t, t = e, e = null), e == null || typeof e == "function") {
      t = t == null || t, this.writeDataToDom();
      let o = this;
      if (e != null) {
        if (o = tt(o.node.cloneNode(!0)), t) {
          const l = e(o);
          if (o = l || o, l === !1) return "";
        }
        o.each(function() {
          const l = e(this), c = l || this;
          l === !1 ? this.remove() : l && this !== c && this.replace(c);
        }, !0);
      }
      return t ? o.node.outerHTML : o.node.innerHTML;
    }
    t = t != null && t;
    const s = hi("wrapper", i), a = xe.document.createDocumentFragment();
    s.innerHTML = e;
    for (let o = s.children.length; o--; ) a.appendChild(s.firstElementChild);
    const r = this.parent();
    return t ? this.replace(a) && r : this.add(a);
  }
}
oe(mt, { attr: function(n, e, t) {
  if (n == null) {
    n = {}, e = this.node.attributes;
    for (const i of e) n[i.nodeName] = cr.test(i.nodeValue) ? parseFloat(i.nodeValue) : i.nodeValue;
    return n;
  }
  if (n instanceof Array) return n.reduce((i, s) => (i[s] = this.attr(s), i), {});
  if (typeof n == "object" && n.constructor === Object) for (e in n) this.attr(e, n[e]);
  else if (e === null) this.node.removeAttribute(n);
  else {
    if (e == null) return (e = this.node.getAttribute(n)) == null ? Dc[n] : cr.test(e) ? parseFloat(e) : e;
    typeof (e = An.reduce((i, s) => s(n, i, this), e)) == "number" ? e = new ce(e) : Yc.has(n) && Ae.isColor(e) ? e = new Ae(e) : e.constructor === Array && (e = new Et(e)), n === "leading" ? this.leading && this.leading(e) : typeof t == "string" ? this.node.setAttributeNS(t, n, e.toString()) : this.node.setAttribute(n, e.toString()), !this.rebuild || n !== "font-size" && n !== "x" || this.rebuild();
  }
  return this;
}, find: function(n) {
  return Rt(n, this.node);
}, findOne: function(n) {
  return tt(this.node.querySelector(n));
} }), me(mt, "Dom");
let He = class extends mt {
  constructor(n, e) {
    super(n, e), this.dom = {}, this.node.instance = this, (n.hasAttribute("data-svgjs") || n.hasAttribute("svgjs:data")) && this.setData(JSON.parse(n.getAttribute("data-svgjs")) ?? JSON.parse(n.getAttribute("svgjs:data")) ?? {});
  }
  center(n, e) {
    return this.cx(n).cy(e);
  }
  cx(n) {
    return n == null ? this.x() + this.width() / 2 : this.x(n - this.width() / 2);
  }
  cy(n) {
    return n == null ? this.y() + this.height() / 2 : this.y(n - this.height() / 2);
  }
  defs() {
    const n = this.root();
    return n && n.defs();
  }
  dmove(n, e) {
    return this.dx(n).dy(e);
  }
  dx(n = 0) {
    return this.x(new ce(n).plus(this.x()));
  }
  dy(n = 0) {
    return this.y(new ce(n).plus(this.y()));
  }
  getEventHolder() {
    return this;
  }
  height(n) {
    return this.attr("height", n);
  }
  move(n, e) {
    return this.x(n).y(e);
  }
  parents(n = this.root()) {
    const e = typeof n == "string";
    e || (n = We(n));
    const t = new It();
    let i = this;
    for (; (i = i.parent()) && i.node !== xe.document && i.nodeName !== "#document-fragment" && (t.push(i), e || i.node !== n.node) && (!e || !i.matches(n)); ) if (i.node === this.root().node) return null;
    return t;
  }
  reference(n) {
    if (!(n = this.attr(n))) return null;
    const e = (n + "").match(Pc);
    return e ? We(e[1]) : null;
  }
  root() {
    const n = this.parent(function(e) {
      return Lt[e];
    }(pa));
    return n && n.root();
  }
  setData(n) {
    return this.dom = n, this;
  }
  size(n, e) {
    const t = Ut(this, n, e);
    return this.width(new ce(t.width)).height(new ce(t.height));
  }
  width(n) {
    return this.attr("width", n);
  }
  writeDataToDom() {
    return xn(this, this.dom), super.writeDataToDom();
  }
  x(n) {
    return this.attr("x", n);
  }
  y(n) {
    return this.attr("y", n);
  }
};
oe(He, { bbox: function() {
  const n = hr(this, (e) => e.getBBox(), (e) => {
    try {
      const t = e.clone().addTo(pt().svg).show(), i = t.node.getBBox();
      return t.remove(), i;
    } catch (t) {
      throw new Error(`Getting bbox of element "${e.node.nodeName}" is not possible: ${t.toString()}`);
    }
  });
  return new Re(n);
}, rbox: function(n) {
  const e = hr(this, (i) => i.getBoundingClientRect(), (i) => {
    throw new Error(`Getting rbox of element "${i.node.nodeName}" is not possible`);
  }), t = new Re(e);
  return n ? t.transform(n.screenCTM().inverseO()) : t.addOffset();
}, inside: function(n, e) {
  const t = this.bbox();
  return n > t.x && e > t.y && n < t.x + t.width && e < t.y + t.height;
}, point: function(n, e) {
  return new be(n, e).transformO(this.screenCTM().inverseO());
}, ctm: function() {
  return new ne(this.node.getCTM());
}, screenCTM: function() {
  try {
    if (typeof this.isRoot == "function" && !this.isRoot()) {
      const n = this.rect(1, 1), e = n.node.getScreenCTM();
      return n.remove(), new ne(e);
    }
    return new ne(this.node.getScreenCTM());
  } catch {
    return console.warn(`Cannot get CTM from SVG node ${this.node.nodeName}. Is the element rendered?`), new ne();
  }
} }), me(He, "Element");
const ii = { stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"], fill: ["color", "opacity", "rule"], prefix: function(n, e) {
  return e === "color" ? n : n + "-" + e;
} };
["fill", "stroke"].forEach(function(n) {
  const e = {};
  let t;
  e[n] = function(i) {
    if (i === void 0) return this.attr(n);
    if (typeof i == "string" || i instanceof Ae || Ae.isRgb(i) || i instanceof He) this.attr(n, i);
    else for (t = ii[n].length - 1; t >= 0; t--) i[ii[n][t]] != null && this.attr(ii.prefix(n, ii[n][t]), i[ii[n][t]]);
    return this;
  }, de(["Element", "Runner"], e);
}), de(["Element", "Runner"], { matrix: function(n, e, t, i, s, a) {
  return n == null ? new ne(this) : this.attr("transform", new ne(n, e, t, i, s, a));
}, rotate: function(n, e, t) {
  return this.transform({ rotate: n, ox: e, oy: t }, !0);
}, skew: function(n, e, t, i) {
  return arguments.length === 1 || arguments.length === 3 ? this.transform({ skew: n, ox: e, oy: t }, !0) : this.transform({ skew: [n, e], ox: t, oy: i }, !0);
}, shear: function(n, e, t) {
  return this.transform({ shear: n, ox: e, oy: t }, !0);
}, scale: function(n, e, t, i) {
  return arguments.length === 1 || arguments.length === 3 ? this.transform({ scale: n, ox: e, oy: t }, !0) : this.transform({ scale: [n, e], ox: t, oy: i }, !0);
}, translate: function(n, e) {
  return this.transform({ translate: [n, e] }, !0);
}, relative: function(n, e) {
  return this.transform({ relative: [n, e] }, !0);
}, flip: function(n = "both", e = "center") {
  return "xybothtrue".indexOf(n) === -1 && (e = n, n = "both"), this.transform({ flip: n, origin: e }, !0);
}, opacity: function(n) {
  return this.attr("opacity", n);
} }), de("radius", { radius: function(n, e = n) {
  return (this._element || this).type === "radialGradient" ? this.attr("r", new ce(n)) : this.rx(n).ry(e);
} }), de("Path", { length: function() {
  return this.node.getTotalLength();
}, pointAt: function(n) {
  return new be(this.node.getPointAtLength(n));
} }), de(["Element", "Runner"], { font: function(n, e) {
  if (typeof n == "object") {
    for (e in n) this.font(e, n[e]);
    return this;
  }
  return n === "leading" ? this.leading(e) : n === "anchor" ? this.attr("text-anchor", e) : n === "size" || n === "family" || n === "weight" || n === "stretch" || n === "variant" || n === "style" ? this.attr("font-" + n, e) : this.attr(n, e);
} });
de("Element", ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "mouseenter", "mouseleave", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel", "contextmenu", "wheel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel"].reduce(function(n, e) {
  return n[e] = function(t) {
    return t === null ? this.off(e) : this.on(e, t), this;
  }, n;
}, {})), de("Element", { untransform: function() {
  return this.attr("transform", null);
}, matrixify: function() {
  return (this.attr("transform") || "").split(Tc).slice(0, -1).map(function(e) {
    const t = e.trim().split("(");
    return [t[0], t[1].split(ut).map(function(i) {
      return parseFloat(i);
    })];
  }).reverse().reduce(function(e, t) {
    return t[0] === "matrix" ? e.lmultiply(ne.fromArray(t[1])) : e[t[0]].apply(e, t[1]);
  }, new ne());
}, toParent: function(n, e) {
  if (this === n) return this;
  if (Hs(this.node)) return this.addTo(n, e);
  const t = this.screenCTM(), i = n.screenCTM().inverse();
  return this.addTo(n, e).untransform().transform(i.multiply(t)), this;
}, toRoot: function(n) {
  return this.toParent(this.root(), n);
}, transform: function(n, e) {
  if (n == null || typeof n == "string") {
    const i = new ne(this).decompose();
    return n == null ? i : i[n];
  }
  ne.isMatrixLike(n) || (n = { ...n, origin: Fs(n, this) });
  const t = new ne(e === !0 ? this : e || !1).transform(n);
  return this.attr("transform", t);
} });
class Ve extends He {
  flatten() {
    return this.each(function() {
      if (this instanceof Ve) return this.flatten().ungroup();
    }), this;
  }
  ungroup(e = this.parent(), t = e.index(this)) {
    return t = t === -1 ? e.children().length : t, this.each(function(i, s) {
      return s[s.length - i - 1].toParent(e, t);
    }), this.remove();
  }
}
me(Ve, "Container");
class Bi extends Ve {
  constructor(e, t = e) {
    super(Ce("defs", e), t);
  }
  flatten() {
    return this;
  }
  ungroup() {
    return this;
  }
}
me(Bi, "Defs");
class Je extends He {
}
function ba(n) {
  return this.attr("rx", n);
}
function va(n) {
  return this.attr("ry", n);
}
function Sn(n) {
  return n == null ? this.cx() - this.rx() : this.cx(n + this.rx());
}
function Cn(n) {
  return n == null ? this.cy() - this.ry() : this.cy(n + this.ry());
}
function Mn(n) {
  return this.attr("cx", n);
}
function Ln(n) {
  return this.attr("cy", n);
}
function Pn(n) {
  return n == null ? 2 * this.rx() : this.rx(new ce(n).divide(2));
}
function Tn(n) {
  return n == null ? 2 * this.ry() : this.ry(new ce(n).divide(2));
}
me(Je, "Shape");
var Fc = Object.freeze({ __proto__: null, cx: Mn, cy: Ln, height: Tn, rx: ba, ry: va, width: Pn, x: Sn, y: Cn });
class Ii extends Je {
  constructor(e, t = e) {
    super(Ce("ellipse", e), t);
  }
  size(e, t) {
    const i = Ut(this, e, t);
    return this.rx(new ce(i.width).divide(2)).ry(new ce(i.height).divide(2));
  }
}
oe(Ii, Fc), de("Container", { ellipse: Se(function(n = 0, e = n) {
  return this.put(new Ii()).size(n, e).move(0, 0);
}) }), me(Ii, "Ellipse");
class In extends mt {
  constructor(e = xe.document.createDocumentFragment()) {
    super(e);
  }
  xml(e, t, i) {
    if (typeof e == "boolean" && (i = t, t = e, e = null), e == null || typeof e == "function") {
      const s = new mt(hi("wrapper", i));
      return s.add(this.node.cloneNode(!0)), s.xml(!1, i);
    }
    return super.xml(e, !1, i);
  }
}
function En(n, e) {
  return (this._element || this).type === "radialGradient" ? this.attr({ fx: new ce(n), fy: new ce(e) }) : this.attr({ x1: new ce(n), y1: new ce(e) });
}
function Rn(n, e) {
  return (this._element || this).type === "radialGradient" ? this.attr({ cx: new ce(n), cy: new ce(e) }) : this.attr({ x2: new ce(n), y2: new ce(e) });
}
me(In, "Fragment");
var Hc = Object.freeze({ __proto__: null, from: En, to: Rn });
class ni extends Ve {
  constructor(e, t) {
    super(Ce(e + "Gradient", typeof e == "string" ? null : e), t);
  }
  attr(e, t, i) {
    return e === "transform" && (e = "gradientTransform"), super.attr(e, t, i);
  }
  bbox() {
    return new Re();
  }
  targets() {
    return Rt("svg [fill*=" + this.id() + "]");
  }
  toString() {
    return this.url();
  }
  update(e) {
    return this.clear(), typeof e == "function" && e.call(this, this), this;
  }
  url() {
    return "url(#" + this.id() + ")";
  }
}
oe(ni, Hc), de({ Container: { gradient(...n) {
  return this.defs().gradient(...n);
} }, Defs: { gradient: Se(function(n, e) {
  return this.put(new ni(n)).update(e);
}) } }), me(ni, "Gradient");
class di extends Ve {
  constructor(e, t = e) {
    super(Ce("pattern", e), t);
  }
  attr(e, t, i) {
    return e === "transform" && (e = "patternTransform"), super.attr(e, t, i);
  }
  bbox() {
    return new Re();
  }
  targets() {
    return Rt("svg [fill*=" + this.id() + "]");
  }
  toString() {
    return this.url();
  }
  update(e) {
    return this.clear(), typeof e == "function" && e.call(this, this), this;
  }
  url() {
    return "url(#" + this.id() + ")";
  }
}
de({ Container: { pattern(...n) {
  return this.defs().pattern(...n);
} }, Defs: { pattern: Se(function(n, e, t) {
  return this.put(new di()).update(t).attr({ x: 0, y: 0, width: n, height: e, patternUnits: "userSpaceOnUse" });
}) } }), me(di, "Pattern");
let Ei = class extends Je {
  constructor(n, e = n) {
    super(Ce("image", n), e);
  }
  load(n, e) {
    if (!n) return this;
    const t = new xe.window.Image();
    return dt(t, "load", function(i) {
      const s = this.parent(di);
      this.width() === 0 && this.height() === 0 && this.size(t.width, t.height), s instanceof di && s.width() === 0 && s.height() === 0 && s.size(this.width(), this.height()), typeof e == "function" && e.call(this, i);
    }, this), dt(t, "load error", function() {
      it(t);
    }), this.attr("href", t.src = n, qt);
  }
};
var ur;
ur = function(n, e, t) {
  return n !== "fill" && n !== "stroke" || Ec.test(e) && (e = t.root().defs().image(e)), e instanceof Ei && (e = t.root().defs().pattern(0, 0, (i) => {
    i.add(e);
  })), e;
}, An.push(ur), de({ Container: { image: Se(function(n, e) {
  return this.put(new Ei()).size(0, 0).load(n, e);
}) } }), me(Ei, "Image");
class bt extends Et {
  bbox() {
    let e = -1 / 0, t = -1 / 0, i = 1 / 0, s = 1 / 0;
    return this.forEach(function(a) {
      e = Math.max(a[0], e), t = Math.max(a[1], t), i = Math.min(a[0], i), s = Math.min(a[1], s);
    }), new Re(i, s, e - i, t - s);
  }
  move(e, t) {
    const i = this.bbox();
    if (e -= i.x, t -= i.y, !isNaN(e) && !isNaN(t)) for (let s = this.length - 1; s >= 0; s--) this[s] = [this[s][0] + e, this[s][1] + t];
    return this;
  }
  parse(e = [0, 0]) {
    const t = [];
    (e = e instanceof Array ? Array.prototype.concat.apply([], e) : e.trim().split(ut).map(parseFloat)).length % 2 != 0 && e.pop();
    for (let i = 0, s = e.length; i < s; i += 2) t.push([e[i], e[i + 1]]);
    return t;
  }
  size(e, t) {
    let i;
    const s = this.bbox();
    for (i = this.length - 1; i >= 0; i--) s.width && (this[i][0] = (this[i][0] - s.x) * e / s.width + s.x), s.height && (this[i][1] = (this[i][1] - s.y) * t / s.height + s.y);
    return this;
  }
  toLine() {
    return { x1: this[0][0], y1: this[0][1], x2: this[1][0], y2: this[1][1] };
  }
  toString() {
    const e = [];
    for (let t = 0, i = this.length; t < i; t++) e.push(this[t].join(","));
    return e.join(" ");
  }
  transform(e) {
    return this.clone().transformO(e);
  }
  transformO(e) {
    ne.isMatrixLike(e) || (e = new ne(e));
    for (let t = this.length; t--; ) {
      const [i, s] = this[t];
      this[t][0] = e.a * i + e.c * s + e.e, this[t][1] = e.b * i + e.d * s + e.f;
    }
    return this;
  }
}
const Xc = bt;
var ya = Object.freeze({ __proto__: null, MorphArray: Xc, height: function(n) {
  const e = this.bbox();
  return n == null ? e.height : this.size(e.width, n);
}, width: function(n) {
  const e = this.bbox();
  return n == null ? e.width : this.size(n, e.height);
}, x: function(n) {
  return n == null ? this.bbox().x : this.move(n, this.bbox().y);
}, y: function(n) {
  return n == null ? this.bbox().y : this.move(this.bbox().x, n);
} });
let St = class extends Je {
  constructor(n, e = n) {
    super(Ce("line", n), e);
  }
  array() {
    return new bt([[this.attr("x1"), this.attr("y1")], [this.attr("x2"), this.attr("y2")]]);
  }
  move(n, e) {
    return this.attr(this.array().move(n, e).toLine());
  }
  plot(n, e, t, i) {
    return n == null ? this.array() : (n = e !== void 0 ? { x1: n, y1: e, x2: t, y2: i } : new bt(n).toLine(), this.attr(n));
  }
  size(n, e) {
    const t = Ut(this, n, e);
    return this.attr(this.array().size(t.width, t.height).toLine());
  }
};
oe(St, ya), de({ Container: { line: Se(function(...n) {
  return St.prototype.plot.apply(this.put(new St()), n[0] != null ? n : [0, 0, 0, 0]);
}) } }), me(St, "Line");
let Ri = class extends Ve {
  constructor(n, e = n) {
    super(Ce("marker", n), e);
  }
  height(n) {
    return this.attr("markerHeight", n);
  }
  orient(n) {
    return this.attr("orient", n);
  }
  ref(n, e) {
    return this.attr("refX", n).attr("refY", e);
  }
  toString() {
    return "url(#" + this.id() + ")";
  }
  update(n) {
    return this.clear(), typeof n == "function" && n.call(this, this), this;
  }
  width(n) {
    return this.attr("markerWidth", n);
  }
};
function Yt(n, e) {
  return function(t) {
    return t == null ? this[n] : (this[n] = t, e && e.call(this), this);
  };
}
de({ Container: { marker(...n) {
  return this.defs().marker(...n);
} }, Defs: { marker: Se(function(n, e, t) {
  return this.put(new Ri()).size(n, e).ref(n / 2, e / 2).viewbox(0, 0, n, e).attr("orient", "auto").update(t);
}) }, marker: { marker(n, e, t, i) {
  let s = ["marker"];
  return n !== "all" && s.push(n), s = s.join("-"), n = arguments[1] instanceof Ri ? arguments[1] : this.defs().marker(e, t, i), this.attr(s, n);
} } }), me(Ri, "Marker");
const jc = { "-": function(n) {
  return n;
}, "<>": function(n) {
  return -Math.cos(n * Math.PI) / 2 + 0.5;
}, ">": function(n) {
  return Math.sin(n * Math.PI / 2);
}, "<": function(n) {
  return 1 - Math.cos(n * Math.PI / 2);
}, bezier: function(n, e, t, i) {
  return function(s) {
    return s < 0 ? n > 0 ? e / n * s : t > 0 ? i / t * s : 0 : s > 1 ? t < 1 ? (1 - i) / (1 - t) * s + (i - t) / (1 - t) : n < 1 ? (1 - e) / (1 - n) * s + (e - n) / (1 - n) : 1 : 3 * s * (1 - s) ** 2 * e + 3 * s ** 2 * (1 - s) * i + s ** 3;
  };
}, steps: function(n, e = "end") {
  e = e.split("-").reverse()[0];
  let t = n;
  return e === "none" ? --t : e === "both" && ++t, (i, s = !1) => {
    let a = Math.floor(i * n);
    const r = i * a % 1 == 0;
    return e !== "start" && e !== "both" || ++a, s && r && --a, i >= 0 && a < 0 && (a = 0), i <= 1 && a > t && (a = t), a / t;
  };
} };
class wa {
  done() {
    return !1;
  }
}
class Xs extends wa {
  constructor(e = Nc) {
    super(), this.ease = jc[e] || e;
  }
  step(e, t, i) {
    return typeof e != "number" ? i < 1 ? e : t : e + (t - e) * this.ease(i);
  }
}
class Yi extends wa {
  constructor(e) {
    super(), this.stepper = e;
  }
  done(e) {
    return e.done;
  }
  step(e, t, i, s) {
    return this.stepper(e, t, i, s);
  }
}
function gr() {
  const n = (this._duration || 500) / 1e3, e = this._overshoot || 0, t = Math.PI, i = Math.log(e / 100 + 1e-10), s = -i / Math.sqrt(t * t + i * i), a = 3.9 / (s * n);
  this.d = 2 * s * a, this.k = a * a;
}
oe(class extends Yi {
  constructor(n = 500, e = 0) {
    super(), this.duration(n).overshoot(e);
  }
  step(n, e, t, i) {
    if (typeof n == "string") return n;
    if (i.done = t === 1 / 0, t === 1 / 0) return e;
    if (t === 0) return n;
    t > 100 && (t = 16), t /= 1e3;
    const s = i.velocity || 0, a = -this.d * s - this.k * (n - e), r = n + s * t + a * t * t / 2;
    return i.velocity = s + a * t, i.done = Math.abs(e - r) + Math.abs(s) < 2e-3, i.done ? e : r;
  }
}, { duration: Yt("_duration", gr), overshoot: Yt("_overshoot", gr) });
oe(class extends Yi {
  constructor(n = 0.1, e = 0.01, t = 0, i = 1e3) {
    super(), this.p(n).i(e).d(t).windup(i);
  }
  step(n, e, t, i) {
    if (typeof n == "string") return n;
    if (i.done = t === 1 / 0, t === 1 / 0) return e;
    if (t === 0) return n;
    const s = e - n;
    let a = (i.integral || 0) + s * t;
    const r = (s - (i.error || 0)) / t, o = this._windup;
    return o !== !1 && (a = Math.max(-o, Math.min(a, o))), i.error = s, i.integral = a, i.done = Math.abs(s) < 1e-3, i.done ? e : n + (this.P * s + this.I * a + this.D * r);
  }
}, { windup: Yt("_windup"), p: Yt("P"), i: Yt("I"), d: Yt("D") });
const Wc = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0 }, js = { M: function(n, e, t) {
  return e.x = t.x = n[0], e.y = t.y = n[1], ["M", e.x, e.y];
}, L: function(n, e) {
  return e.x = n[0], e.y = n[1], ["L", n[0], n[1]];
}, H: function(n, e) {
  return e.x = n[0], ["H", n[0]];
}, V: function(n, e) {
  return e.y = n[0], ["V", n[0]];
}, C: function(n, e) {
  return e.x = n[4], e.y = n[5], ["C", n[0], n[1], n[2], n[3], n[4], n[5]];
}, S: function(n, e) {
  return e.x = n[2], e.y = n[3], ["S", n[0], n[1], n[2], n[3]];
}, Q: function(n, e) {
  return e.x = n[2], e.y = n[3], ["Q", n[0], n[1], n[2], n[3]];
}, T: function(n, e) {
  return e.x = n[0], e.y = n[1], ["T", n[0], n[1]];
}, Z: function(n, e, t) {
  return e.x = t.x, e.y = t.y, ["Z"];
}, A: function(n, e) {
  return e.x = n[5], e.y = n[6], ["A", n[0], n[1], n[2], n[3], n[4], n[5], n[6]];
} }, os = "mlhvqtcsaz".split("");
for (let n = 0, e = os.length; n < e; ++n) js[os[n]] = /* @__PURE__ */ function(t) {
  return function(i, s, a) {
    if (t === "H") i[0] = i[0] + s.x;
    else if (t === "V") i[0] = i[0] + s.y;
    else if (t === "A") i[5] = i[5] + s.x, i[6] = i[6] + s.y;
    else for (let r = 0, o = i.length; r < o; ++r) i[r] = i[r] + (r % 2 ? s.y : s.x);
    return js[t](i, s, a);
  };
}(os[n].toUpperCase());
function Ws(n) {
  return n.segment.length && n.segment.length - 1 === Wc[n.segment[0].toUpperCase()];
}
function Bc(n, e) {
  n.inNumber && wt(n, !1);
  const t = xa.test(e);
  if (t) n.segment = [e];
  else {
    const i = n.lastCommand, s = i.toLowerCase(), a = i === s;
    n.segment = [s === "m" ? a ? "l" : "L" : i];
  }
  return n.inSegment = !0, n.lastCommand = n.segment[0], t;
}
function wt(n, e) {
  if (!n.inNumber) throw new Error("Parser Error");
  n.number && n.segment.push(parseFloat(n.number)), n.inNumber = e, n.number = "", n.pointSeen = !1, n.hasExponent = !1, Ws(n) && Bs(n);
}
function Bs(n) {
  n.inSegment = !1, n.absolute && (n.segment = function(e) {
    const t = e.segment[0];
    return js[t](e.segment.slice(1), e.p, e.p0);
  }(n)), n.segments.push(n.segment);
}
function Gc(n) {
  if (!n.segment.length) return !1;
  const e = n.segment[0].toUpperCase() === "A", t = n.segment.length;
  return e && (t === 4 || t === 5);
}
function Vc(n) {
  return n.lastToken.toUpperCase() === "E";
}
const $c = /* @__PURE__ */ new Set([" ", ",", "	", `
`, "\r", "\f"]);
class at extends Et {
  bbox() {
    return pt().path.setAttribute("d", this.toString()), new Re(pt.nodes.path.getBBox());
  }
  move(e, t) {
    const i = this.bbox();
    if (e -= i.x, t -= i.y, !isNaN(e) && !isNaN(t)) for (let s, a = this.length - 1; a >= 0; a--) s = this[a][0], s === "M" || s === "L" || s === "T" ? (this[a][1] += e, this[a][2] += t) : s === "H" ? this[a][1] += e : s === "V" ? this[a][1] += t : s === "C" || s === "S" || s === "Q" ? (this[a][1] += e, this[a][2] += t, this[a][3] += e, this[a][4] += t, s === "C" && (this[a][5] += e, this[a][6] += t)) : s === "A" && (this[a][6] += e, this[a][7] += t);
    return this;
  }
  parse(e = "M0 0") {
    return Array.isArray(e) && (e = Array.prototype.concat.apply([], e).toString()), function(t, i = !0) {
      let s = 0, a = "";
      const r = { segment: [], inNumber: !1, number: "", lastToken: "", inSegment: !1, segments: [], pointSeen: !1, hasExponent: !1, absolute: i, p0: new be(), p: new be() };
      for (; r.lastToken = a, a = t.charAt(s++); ) if (r.inSegment || !Bc(r, a)) if (a !== ".") if (isNaN(parseInt(a))) if ($c.has(a)) r.inNumber && wt(r, !1);
      else if (a !== "-" && a !== "+") if (a.toUpperCase() !== "E") {
        if (xa.test(a)) {
          if (r.inNumber) wt(r, !1);
          else {
            if (!Ws(r)) throw new Error("parser Error");
            Bs(r);
          }
          --s;
        }
      } else r.number += a, r.hasExponent = !0;
      else {
        if (r.inNumber && !Vc(r)) {
          wt(r, !1), --s;
          continue;
        }
        r.number += a, r.inNumber = !0;
      }
      else {
        if (r.number === "0" || Gc(r)) {
          r.inNumber = !0, r.number = a, wt(r, !0);
          continue;
        }
        r.inNumber = !0, r.number += a;
      }
      else {
        if (r.pointSeen || r.hasExponent) {
          wt(r, !1), --s;
          continue;
        }
        r.inNumber = !0, r.pointSeen = !0, r.number += a;
      }
      return r.inNumber && wt(r, !1), r.inSegment && Ws(r) && Bs(r), r.segments;
    }(e);
  }
  size(e, t) {
    const i = this.bbox();
    let s, a;
    for (i.width = i.width === 0 ? 1 : i.width, i.height = i.height === 0 ? 1 : i.height, s = this.length - 1; s >= 0; s--) a = this[s][0], a === "M" || a === "L" || a === "T" ? (this[s][1] = (this[s][1] - i.x) * e / i.width + i.x, this[s][2] = (this[s][2] - i.y) * t / i.height + i.y) : a === "H" ? this[s][1] = (this[s][1] - i.x) * e / i.width + i.x : a === "V" ? this[s][1] = (this[s][1] - i.y) * t / i.height + i.y : a === "C" || a === "S" || a === "Q" ? (this[s][1] = (this[s][1] - i.x) * e / i.width + i.x, this[s][2] = (this[s][2] - i.y) * t / i.height + i.y, this[s][3] = (this[s][3] - i.x) * e / i.width + i.x, this[s][4] = (this[s][4] - i.y) * t / i.height + i.y, a === "C" && (this[s][5] = (this[s][5] - i.x) * e / i.width + i.x, this[s][6] = (this[s][6] - i.y) * t / i.height + i.y)) : a === "A" && (this[s][1] = this[s][1] * e / i.width, this[s][2] = this[s][2] * t / i.height, this[s][6] = (this[s][6] - i.x) * e / i.width + i.x, this[s][7] = (this[s][7] - i.y) * t / i.height + i.y);
    return this;
  }
  toString() {
    return function(e) {
      let t = "";
      for (let i = 0, s = e.length; i < s; i++) t += e[i][0], e[i][1] != null && (t += e[i][1], e[i][2] != null && (t += " ", t += e[i][2], e[i][3] != null && (t += " ", t += e[i][3], t += " ", t += e[i][4], e[i][5] != null && (t += " ", t += e[i][5], t += " ", t += e[i][6], e[i][7] != null && (t += " ", t += e[i][7])))));
      return t + " ";
    }(this);
  }
}
const On = (n) => {
  const e = typeof n;
  return e === "number" ? ce : e === "string" ? Ae.isColor(n) ? Ae : ut.test(n) ? xa.test(n) ? at : Et : vn.test(n) ? ce : Gs : Vs.indexOf(n.constructor) > -1 ? n.constructor : Array.isArray(n) ? Et : e === "object" ? ui : Gs;
};
class kt {
  constructor(e) {
    this._stepper = e || new Xs("-"), this._from = null, this._to = null, this._type = null, this._context = null, this._morphObj = null;
  }
  at(e) {
    return this._morphObj.morph(this._from, this._to, e, this._stepper, this._context);
  }
  done() {
    return this._context.map(this._stepper.done).reduce(function(e, t) {
      return e && t;
    }, !0);
  }
  from(e) {
    return e == null ? this._from : (this._from = this._set(e), this);
  }
  stepper(e) {
    return e == null ? this._stepper : (this._stepper = e, this);
  }
  to(e) {
    return e == null ? this._to : (this._to = this._set(e), this);
  }
  type(e) {
    return e == null ? this._type : (this._type = e, this);
  }
  _set(e) {
    this._type || this.type(On(e));
    let t = new this._type(e);
    return this._type === Ae && (t = this._to ? t[this._to[4]]() : this._from ? t[this._from[4]]() : t), this._type === ui && (t = this._to ? t.align(this._to) : this._from ? t.align(this._from) : t), t = t.toConsumable(), this._morphObj = this._morphObj || new this._type(), this._context = this._context || Array.apply(null, Array(t.length)).map(Object).map(function(i) {
      return i.done = !0, i;
    }), t;
  }
}
class Gs {
  constructor(...e) {
    this.init(...e);
  }
  init(e) {
    return e = Array.isArray(e) ? e[0] : e, this.value = e, this;
  }
  toArray() {
    return [this.value];
  }
  valueOf() {
    return this.value;
  }
}
class yi {
  constructor(...e) {
    this.init(...e);
  }
  init(e) {
    return Array.isArray(e) && (e = { scaleX: e[0], scaleY: e[1], shear: e[2], rotate: e[3], translateX: e[4], translateY: e[5], originX: e[6], originY: e[7] }), Object.assign(this, yi.defaults, e), this;
  }
  toArray() {
    const e = this;
    return [e.scaleX, e.scaleY, e.shear, e.rotate, e.translateX, e.translateY, e.originX, e.originY];
  }
}
yi.defaults = { scaleX: 1, scaleY: 1, shear: 0, rotate: 0, translateX: 0, translateY: 0, originX: 0, originY: 0 };
const Uc = (n, e) => n[0] < e[0] ? -1 : n[0] > e[0] ? 1 : 0;
class ui {
  constructor(...e) {
    this.init(...e);
  }
  align(e) {
    const t = this.values;
    for (let i = 0, s = t.length; i < s; ++i) {
      if (t[i + 1] === e[i + 1]) {
        if (t[i + 1] === Ae && e[i + 7] !== t[i + 7]) {
          const o = e[i + 7], l = new Ae(this.values.splice(i + 3, 5))[o]().toArray();
          this.values.splice(i + 3, 0, ...l);
        }
        i += t[i + 2] + 2;
        continue;
      }
      if (!e[i + 1]) return this;
      const a = new e[i + 1]().toArray(), r = t[i + 2] + 3;
      t.splice(i, r, e[i], e[i + 1], e[i + 2], ...a), i += t[i + 2] + 2;
    }
    return this;
  }
  init(e) {
    if (this.values = [], Array.isArray(e)) return void (this.values = e.slice());
    e = e || {};
    const t = [];
    for (const i in e) {
      const s = On(e[i]), a = new s(e[i]).toArray();
      t.push([i, s, a.length, ...a]);
    }
    return t.sort(Uc), this.values = t.reduce((i, s) => i.concat(s), []), this;
  }
  toArray() {
    return this.values;
  }
  valueOf() {
    const e = {}, t = this.values;
    for (; t.length; ) {
      const i = t.shift(), s = t.shift(), a = t.shift(), r = t.splice(0, a);
      e[i] = new s(r);
    }
    return e;
  }
}
const Vs = [Gs, yi, ui];
class Ht extends Je {
  constructor(e, t = e) {
    super(Ce("path", e), t);
  }
  array() {
    return this._array || (this._array = new at(this.attr("d")));
  }
  clear() {
    return delete this._array, this;
  }
  height(e) {
    return e == null ? this.bbox().height : this.size(this.bbox().width, e);
  }
  move(e, t) {
    return this.attr("d", this.array().move(e, t));
  }
  plot(e) {
    return e == null ? this.array() : this.clear().attr("d", typeof e == "string" ? e : this._array = new at(e));
  }
  size(e, t) {
    const i = Ut(this, e, t);
    return this.attr("d", this.array().size(i.width, i.height));
  }
  width(e) {
    return e == null ? this.bbox().width : this.size(e, this.bbox().height);
  }
  x(e) {
    return e == null ? this.bbox().x : this.move(e, this.bbox().y);
  }
  y(e) {
    return e == null ? this.bbox().y : this.move(this.bbox().x, e);
  }
}
Ht.prototype.MorphArray = at, de({ Container: { path: Se(function(n) {
  return this.put(new Ht()).plot(n || new at());
}) } }), me(Ht, "Path");
var zn = Object.freeze({ __proto__: null, array: function() {
  return this._array || (this._array = new bt(this.attr("points")));
}, clear: function() {
  return delete this._array, this;
}, move: function(n, e) {
  return this.attr("points", this.array().move(n, e));
}, plot: function(n) {
  return n == null ? this.array() : this.clear().attr("points", typeof n == "string" ? n : this._array = new bt(n));
}, size: function(n, e) {
  const t = Ut(this, n, e);
  return this.attr("points", this.array().size(t.width, t.height));
} });
class Ct extends Je {
  constructor(e, t = e) {
    super(Ce("polygon", e), t);
  }
}
de({ Container: { polygon: Se(function(n) {
  return this.put(new Ct()).plot(n || new bt());
}) } }), oe(Ct, ya), oe(Ct, zn), me(Ct, "Polygon");
class Mt extends Je {
  constructor(e, t = e) {
    super(Ce("polyline", e), t);
  }
}
de({ Container: { polyline: Se(function(n) {
  return this.put(new Mt()).plot(n || new bt());
}) } }), oe(Mt, ya), oe(Mt, zn), me(Mt, "Polyline");
class Oi extends Je {
  constructor(e, t = e) {
    super(Ce("rect", e), t);
  }
}
oe(Oi, { rx: ba, ry: va }), de({ Container: { rect: Se(function(n, e) {
  return this.put(new Oi()).size(n, e);
}) } }), me(Oi, "Rect");
class ls {
  constructor() {
    this._first = null, this._last = null;
  }
  first() {
    return this._first && this._first.value;
  }
  last() {
    return this._last && this._last.value;
  }
  push(e) {
    const t = e.next !== void 0 ? e : { value: e, next: null, prev: null };
    return this._last ? (t.prev = this._last, this._last.next = t, this._last = t) : (this._last = t, this._first = t), t;
  }
  remove(e) {
    e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e === this._last && (this._last = e.prev), e === this._first && (this._first = e.next), e.prev = null, e.next = null;
  }
  shift() {
    const e = this._first;
    return e ? (this._first = e.next, this._first && (this._first.prev = null), this._last = this._first ? this._last : null, e.value) : null;
  }
}
const ke = { nextDraw: null, frames: new ls(), timeouts: new ls(), immediates: new ls(), timer: () => xe.window.performance || xe.window.Date, transforms: [], frame(n) {
  const e = ke.frames.push({ run: n });
  return ke.nextDraw === null && (ke.nextDraw = xe.window.requestAnimationFrame(ke._draw)), e;
}, timeout(n, e) {
  e = e || 0;
  const t = ke.timer().now() + e, i = ke.timeouts.push({ run: n, time: t });
  return ke.nextDraw === null && (ke.nextDraw = xe.window.requestAnimationFrame(ke._draw)), i;
}, immediate(n) {
  const e = ke.immediates.push(n);
  return ke.nextDraw === null && (ke.nextDraw = xe.window.requestAnimationFrame(ke._draw)), e;
}, cancelFrame(n) {
  n != null && ke.frames.remove(n);
}, clearTimeout(n) {
  n != null && ke.timeouts.remove(n);
}, cancelImmediate(n) {
  n != null && ke.immediates.remove(n);
}, _draw(n) {
  let e = null;
  const t = ke.timeouts.last();
  for (; (e = ke.timeouts.shift()) && (n >= e.time ? e.run() : ke.timeouts.push(e), e !== t); ) ;
  let i = null;
  const s = ke.frames.last();
  for (; i !== s && (i = ke.frames.shift()); ) i.run(n);
  let a = null;
  for (; a = ke.immediates.shift(); ) a();
  ke.nextDraw = ke.timeouts.first() || ke.frames.first() ? xe.window.requestAnimationFrame(ke._draw) : null;
} }, qc = function(n) {
  const e = n.start, t = n.runner.duration();
  return { start: e, duration: t, end: e + t, runner: n.runner };
}, Zc = function() {
  const n = xe.window;
  return (n.performance || n.Date).now();
};
class Nn extends vi {
  constructor(e = Zc) {
    super(), this._timeSource = e, this.terminate();
  }
  active() {
    return !!this._nextFrame;
  }
  finish() {
    return this.time(this.getEndTimeOfTimeline() + 1), this.pause();
  }
  getEndTime() {
    const e = this.getLastRunnerInfo(), t = e ? e.runner.duration() : 0;
    return (e ? e.start : this._time) + t;
  }
  getEndTimeOfTimeline() {
    const e = this._runners.map((t) => t.start + t.runner.duration());
    return Math.max(0, ...e);
  }
  getLastRunnerInfo() {
    return this.getRunnerInfoById(this._lastRunnerId);
  }
  getRunnerInfoById(e) {
    return this._runners[this._runnerIds.indexOf(e)] || null;
  }
  pause() {
    return this._paused = !0, this._continue();
  }
  persist(e) {
    return e == null ? this._persist : (this._persist = e, this);
  }
  play() {
    return this._paused = !1, this.updateTime()._continue();
  }
  reverse(e) {
    const t = this.speed();
    if (e == null) return this.speed(-t);
    const i = Math.abs(t);
    return this.speed(e ? -i : i);
  }
  schedule(e, t, i) {
    if (e == null) return this._runners.map(qc);
    let s = 0;
    const a = this.getEndTime();
    if (t = t || 0, i == null || i === "last" || i === "after") s = a;
    else if (i === "absolute" || i === "start") s = t, t = 0;
    else if (i === "now") s = this._time;
    else if (i === "relative") {
      const l = this.getRunnerInfoById(e.id);
      l && (s = l.start + t, t = 0);
    } else {
      if (i !== "with-last") throw new Error('Invalid value for the "when" parameter');
      {
        const l = this.getLastRunnerInfo();
        s = l ? l.start : this._time;
      }
    }
    e.unschedule(), e.timeline(this);
    const r = e.persist(), o = { persist: r === null ? this._persist : r, start: s + t, runner: e };
    return this._lastRunnerId = e.id, this._runners.push(o), this._runners.sort((l, c) => l.start - c.start), this._runnerIds = this._runners.map((l) => l.runner.id), this.updateTime()._continue(), this;
  }
  seek(e) {
    return this.time(this._time + e);
  }
  source(e) {
    return e == null ? this._timeSource : (this._timeSource = e, this);
  }
  speed(e) {
    return e == null ? this._speed : (this._speed = e, this);
  }
  stop() {
    return this.time(0), this.pause();
  }
  time(e) {
    return e == null ? this._time : (this._time = e, this._continue(!0));
  }
  unschedule(e) {
    const t = this._runnerIds.indexOf(e.id);
    return t < 0 || (this._runners.splice(t, 1), this._runnerIds.splice(t, 1), e.timeline(null)), this;
  }
  updateTime() {
    return this.active() || (this._lastSourceTime = this._timeSource()), this;
  }
  _continue(e = !1) {
    return ke.cancelFrame(this._nextFrame), this._nextFrame = null, e ? this._stepImmediate() : (this._paused || (this._nextFrame = ke.frame(this._step)), this);
  }
  _stepFn(e = !1) {
    const t = this._timeSource();
    let i = t - this._lastSourceTime;
    e && (i = 0);
    const s = this._speed * i + (this._time - this._lastStepTime);
    this._lastSourceTime = t, e || (this._time += s, this._time = this._time < 0 ? 0 : this._time), this._lastStepTime = this._time, this.fire("time", this._time);
    for (let r = this._runners.length; r--; ) {
      const o = this._runners[r], l = o.runner;
      this._time - o.start <= 0 && l.reset();
    }
    let a = !1;
    for (let r = 0, o = this._runners.length; r < o; r++) {
      const l = this._runners[r], c = l.runner;
      let h = s;
      const d = this._time - l.start;
      if (d <= 0) {
        a = !0;
        continue;
      }
      d < h && (h = d), c.active() && (c.step(h).done ? l.persist !== !0 && c.duration() - c.time() + this._time + l.persist < this._time && (c.unschedule(), --r, --o) : a = !0);
    }
    return a && !(this._speed < 0 && this._time === 0) || this._runnerIds.length && this._speed < 0 && this._time > 0 ? this._continue() : (this.pause(), this.fire("finished")), this;
  }
  terminate() {
    this._startTime = 0, this._speed = 1, this._persist = 0, this._nextFrame = null, this._paused = !0, this._runners = [], this._runnerIds = [], this._lastRunnerId = -1, this._time = 0, this._lastSourceTime = 0, this._lastStepTime = 0, this._step = this._stepFn.bind(this, !1), this._stepImmediate = this._stepFn.bind(this, !0);
  }
}
de({ Element: { timeline: function(n) {
  return n == null ? (this._timeline = this._timeline || new Nn(), this._timeline) : (this._timeline = n, this);
} } });
class Ze extends vi {
  constructor(e) {
    super(), this.id = Ze.id++, e = typeof (e = e ?? ns) == "function" ? new Yi(e) : e, this._element = null, this._timeline = null, this.done = !1, this._queue = [], this._duration = typeof e == "number" && e, this._isDeclarative = e instanceof Yi, this._stepper = this._isDeclarative ? e : new Xs(), this._history = {}, this.enabled = !0, this._time = 0, this._lastTime = 0, this._reseted = !0, this.transforms = new ne(), this.transformId = 1, this._haveReversed = !1, this._reverse = !1, this._loopsDone = 0, this._swing = !1, this._wait = 0, this._times = 1, this._frameId = null, this._persist = !!this._isDeclarative || null;
  }
  static sanitise(e, t, i) {
    let s = 1, a = !1, r = 0;
    return t = t ?? _c, i = i || "last", typeof (e = e ?? ns) != "object" || e instanceof wa || (t = e.delay ?? t, i = e.when ?? i, a = e.swing || a, s = e.times ?? s, r = e.wait ?? r, e = e.duration ?? ns), { duration: e, delay: t, swing: a, times: s, wait: r, when: i };
  }
  active(e) {
    return e == null ? this.enabled : (this.enabled = e, this);
  }
  addTransform(e) {
    return this.transforms.lmultiplyO(e), this;
  }
  after(e) {
    return this.on("finished", e);
  }
  animate(e, t, i) {
    const s = Ze.sanitise(e, t, i), a = new Ze(s.duration);
    return this._timeline && a.timeline(this._timeline), this._element && a.element(this._element), a.loop(s).schedule(s.delay, s.when);
  }
  clearTransform() {
    return this.transforms = new ne(), this;
  }
  clearTransformsFromQueue() {
    this.done && this._timeline && this._timeline._runnerIds.includes(this.id) || (this._queue = this._queue.filter((e) => !e.isTransform));
  }
  delay(e) {
    return this.animate(0, e);
  }
  duration() {
    return this._times * (this._wait + this._duration) - this._wait;
  }
  during(e) {
    return this.queue(null, e);
  }
  ease(e) {
    return this._stepper = new Xs(e), this;
  }
  element(e) {
    return e == null ? this._element : (this._element = e, e._prepareRunner(), this);
  }
  finish() {
    return this.step(1 / 0);
  }
  loop(e, t, i) {
    return typeof e == "object" && (t = e.swing, i = e.wait, e = e.times), this._times = e || 1 / 0, this._swing = t || !1, this._wait = i || 0, this._times === !0 && (this._times = 1 / 0), this;
  }
  loops(e) {
    const t = this._duration + this._wait;
    if (e == null) {
      const a = Math.floor(this._time / t), r = (this._time - a * t) / this._duration;
      return Math.min(a + r, this._times);
    }
    const i = e % 1, s = t * Math.floor(e) + this._duration * i;
    return this.time(s);
  }
  persist(e) {
    return e == null ? this._persist : (this._persist = e, this);
  }
  position(e) {
    const t = this._time, i = this._duration, s = this._wait, a = this._times, r = this._swing, o = this._reverse;
    let l;
    if (e == null) {
      const d = function(g) {
        const p = r * Math.floor(g % (2 * (s + i)) / (s + i)), f = p && !o || !p && o, x = Math.pow(-1, f) * (g % (s + i)) / i + f;
        return Math.max(Math.min(x, 1), 0);
      }, u = a * (s + i) - s;
      return l = t <= 0 ? Math.round(d(1e-5)) : t < u ? d(t) : Math.round(d(u - 1e-5)), l;
    }
    const c = Math.floor(this.loops()), h = r && c % 2 == 0;
    return l = c + (h && !o || o && h ? e : 1 - e), this.loops(l);
  }
  progress(e) {
    return e == null ? Math.min(1, this._time / this.duration()) : this.time(e * this.duration());
  }
  queue(e, t, i, s) {
    return this._queue.push({ initialiser: e || dr, runner: t || dr, retarget: i, isTransform: s, initialised: !1, finished: !1 }), this.timeline() && this.timeline()._continue(), this;
  }
  reset() {
    return this._reseted || (this.time(0), this._reseted = !0), this;
  }
  reverse(e) {
    return this._reverse = e ?? !this._reverse, this;
  }
  schedule(e, t, i) {
    if (e instanceof Nn || (i = t, t = e, e = this.timeline()), !e) throw Error("Runner cannot be scheduled without timeline");
    return e.schedule(this, t, i), this;
  }
  step(e) {
    if (!this.enabled) return this;
    e = e ?? 16, this._time += e;
    const t = this.position(), i = this._lastPosition !== t && this._time >= 0;
    this._lastPosition = t;
    const s = this.duration(), a = this._lastTime <= 0 && this._time > 0, r = this._lastTime < s && this._time >= s;
    this._lastTime = this._time, a && this.fire("start", this);
    const o = this._isDeclarative;
    this.done = !o && !r && this._time >= s, this._reseted = !1;
    let l = !1;
    return (i || o) && (this._initialise(i), this.transforms = new ne(), l = this._run(o ? e : t), this.fire("step", this)), this.done = this.done || l && o, r && this.fire("finished", this), this;
  }
  time(e) {
    if (e == null) return this._time;
    const t = e - this._time;
    return this.step(t), this;
  }
  timeline(e) {
    return e === void 0 ? this._timeline : (this._timeline = e, this);
  }
  unschedule() {
    const e = this.timeline();
    return e && e.unschedule(this), this;
  }
  _initialise(e) {
    if (e || this._isDeclarative) for (let t = 0, i = this._queue.length; t < i; ++t) {
      const s = this._queue[t], a = this._isDeclarative || !s.initialised && e;
      e = !s.finished, a && e && (s.initialiser.call(this), s.initialised = !0);
    }
  }
  _rememberMorpher(e, t) {
    if (this._history[e] = { morpher: t, caller: this._queue[this._queue.length - 1] }, this._isDeclarative) {
      const i = this.timeline();
      i && i.play();
    }
  }
  _run(e) {
    let t = !0;
    for (let i = 0, s = this._queue.length; i < s; ++i) {
      const a = this._queue[i], r = a.runner.call(this, e);
      a.finished = a.finished || r === !0, t = t && a.finished;
    }
    return t;
  }
  _tryRetarget(e, t, i) {
    if (this._history[e]) {
      if (!this._history[e].caller.initialised) {
        const a = this._queue.indexOf(this._history[e].caller);
        return this._queue.splice(a, 1), !1;
      }
      this._history[e].caller.retarget ? this._history[e].caller.retarget.call(this, t, i) : this._history[e].morpher.to(t), this._history[e].caller.finished = !1;
      const s = this.timeline();
      return s && s.play(), !0;
    }
    return !1;
  }
}
Ze.id = 0;
class Fi {
  constructor(e = new ne(), t = -1, i = !0) {
    this.transforms = e, this.id = t, this.done = i;
  }
  clearTransformsFromQueue() {
  }
}
oe([Ze, Fi], { mergeWith(n) {
  return new Fi(n.transforms.lmultiply(this.transforms), n.id);
} });
const _n = (n, e) => n.lmultiplyO(e), Dn = (n) => n.transforms;
function Jc() {
  const n = this._transformationRunners.runners.map(Dn).reduce(_n, new ne());
  this.transform(n), this._transformationRunners.merge(), this._transformationRunners.length() === 1 && (this._frameId = null);
}
class Kc {
  constructor() {
    this.runners = [], this.ids = [];
  }
  add(e) {
    if (this.runners.includes(e)) return;
    const t = e.id + 1;
    return this.runners.push(e), this.ids.push(t), this;
  }
  clearBefore(e) {
    const t = this.ids.indexOf(e + 1) || 1;
    return this.ids.splice(0, t, 0), this.runners.splice(0, t, new Fi()).forEach((i) => i.clearTransformsFromQueue()), this;
  }
  edit(e, t) {
    const i = this.ids.indexOf(e + 1);
    return this.ids.splice(i, 1, e + 1), this.runners.splice(i, 1, t), this;
  }
  getByID(e) {
    return this.runners[this.ids.indexOf(e + 1)];
  }
  length() {
    return this.ids.length;
  }
  merge() {
    let e = null;
    for (let t = 0; t < this.runners.length; ++t) {
      const i = this.runners[t];
      if (e && i.done && e.done && (!i._timeline || !i._timeline._runnerIds.includes(i.id)) && (!e._timeline || !e._timeline._runnerIds.includes(e.id))) {
        this.remove(i.id);
        const s = i.mergeWith(e);
        this.edit(e.id, s), e = s, --t;
      } else e = i;
    }
    return this;
  }
  remove(e) {
    const t = this.ids.indexOf(e + 1);
    return this.ids.splice(t, 1), this.runners.splice(t, 1), this;
  }
}
de({ Element: { animate(n, e, t) {
  const i = Ze.sanitise(n, e, t), s = this.timeline();
  return new Ze(i.duration).loop(i).element(this).timeline(s.play()).schedule(i.delay, i.when);
}, delay(n, e) {
  return this.animate(0, n, e);
}, _clearTransformRunnersBefore(n) {
  this._transformationRunners.clearBefore(n.id);
}, _currentTransform(n) {
  return this._transformationRunners.runners.filter((e) => e.id <= n.id).map(Dn).reduce(_n, new ne());
}, _addRunner(n) {
  this._transformationRunners.add(n), ke.cancelImmediate(this._frameId), this._frameId = ke.immediate(Jc.bind(this));
}, _prepareRunner() {
  this._frameId == null && (this._transformationRunners = new Kc().add(new Fi(new ne(this))));
} } });
oe(Ze, { attr(n, e) {
  return this.styleAttr("attr", n, e);
}, css(n, e) {
  return this.styleAttr("css", n, e);
}, styleAttr(n, e, t) {
  if (typeof e == "string") return this.styleAttr(n, { [e]: t });
  let i = e;
  if (this._tryRetarget(n, i)) return this;
  let s = new kt(this._stepper).to(i), a = Object.keys(i);
  return this.queue(function() {
    s = s.from(this.element()[n](a));
  }, function(r) {
    return this.element()[n](s.at(r).valueOf()), s.done();
  }, function(r) {
    const o = Object.keys(r), l = (c = a, o.filter((d) => !c.includes(d)));
    var c;
    if (l.length) {
      const d = this.element()[n](l), u = new ui(s.from()).valueOf();
      Object.assign(u, d), s.from(u);
    }
    const h = new ui(s.to()).valueOf();
    Object.assign(h, r), s.to(h), a = o, i = r;
  }), this._rememberMorpher(n, s), this;
}, zoom(n, e) {
  if (this._tryRetarget("zoom", n, e)) return this;
  let t = new kt(this._stepper).to(new ce(n));
  return this.queue(function() {
    t = t.from(this.element().zoom());
  }, function(i) {
    return this.element().zoom(t.at(i), e), t.done();
  }, function(i, s) {
    e = s, t.to(i);
  }), this._rememberMorpher("zoom", t), this;
}, transform(n, e, t) {
  if (e = n.relative || e, this._isDeclarative && !e && this._tryRetarget("transform", n)) return this;
  const i = ne.isMatrixLike(n);
  t = n.affine != null ? n.affine : t ?? !i;
  const s = new kt(this._stepper).type(t ? yi : ne);
  let a, r, o, l, c;
  return this.queue(function() {
    r = r || this.element(), a = a || Fs(n, r), c = new ne(e ? void 0 : r), r._addRunner(this), e || r._clearTransformRunnersBefore(this);
  }, function(h) {
    e || this.clearTransform();
    const { x: d, y: u } = new be(a).transform(r._currentTransform(this));
    let g = new ne({ ...n, origin: [d, u] }), p = this._isDeclarative && o ? o : c;
    if (t) {
      g = g.decompose(d, u), p = p.decompose(d, u);
      const x = g.rotate, m = p.rotate, b = [x - 360, x, x + 360], w = b.map((k) => Math.abs(k - m)), y = Math.min(...w), v = w.indexOf(y);
      g.rotate = b[v];
    }
    e && (i || (g.rotate = n.rotate || 0), this._isDeclarative && l && (p.rotate = l)), s.from(p), s.to(g);
    const f = s.at(h);
    return l = f.rotate, o = new ne(f), this.addTransform(o), r._addRunner(this), s.done();
  }, function(h) {
    (h.origin || "center").toString() !== (n.origin || "center").toString() && (a = Fs(h, r)), n = { ...h, origin: a };
  }, !0), this._isDeclarative && this._rememberMorpher("transform", s), this;
}, x(n) {
  return this._queueNumber("x", n);
}, y(n) {
  return this._queueNumber("y", n);
}, ax(n) {
  return this._queueNumber("ax", n);
}, ay(n) {
  return this._queueNumber("ay", n);
}, dx(n = 0) {
  return this._queueNumberDelta("x", n);
}, dy(n = 0) {
  return this._queueNumberDelta("y", n);
}, dmove(n, e) {
  return this.dx(n).dy(e);
}, _queueNumberDelta(n, e) {
  if (e = new ce(e), this._tryRetarget(n, e)) return this;
  const t = new kt(this._stepper).to(e);
  let i = null;
  return this.queue(function() {
    i = this.element()[n](), t.from(i), t.to(i + e);
  }, function(s) {
    return this.element()[n](t.at(s)), t.done();
  }, function(s) {
    t.to(i + new ce(s));
  }), this._rememberMorpher(n, t), this;
}, _queueObject(n, e) {
  if (this._tryRetarget(n, e)) return this;
  const t = new kt(this._stepper).to(e);
  return this.queue(function() {
    t.from(this.element()[n]());
  }, function(i) {
    return this.element()[n](t.at(i)), t.done();
  }), this._rememberMorpher(n, t), this;
}, _queueNumber(n, e) {
  return this._queueObject(n, new ce(e));
}, cx(n) {
  return this._queueNumber("cx", n);
}, cy(n) {
  return this._queueNumber("cy", n);
}, move(n, e) {
  return this.x(n).y(e);
}, amove(n, e) {
  return this.ax(n).ay(e);
}, center(n, e) {
  return this.cx(n).cy(e);
}, size(n, e) {
  let t;
  return n && e || (t = this._element.bbox()), n || (n = t.width / t.height * e), e || (e = t.height / t.width * n), this.width(n).height(e);
}, width(n) {
  return this._queueNumber("width", n);
}, height(n) {
  return this._queueNumber("height", n);
}, plot(n, e, t, i) {
  if (arguments.length === 4) return this.plot([n, e, t, i]);
  if (this._tryRetarget("plot", n)) return this;
  const s = new kt(this._stepper).type(this._element.MorphArray).to(n);
  return this.queue(function() {
    s.from(this._element.array());
  }, function(a) {
    return this._element.plot(s.at(a)), s.done();
  }), this._rememberMorpher("plot", s), this;
}, leading(n) {
  return this._queueNumber("leading", n);
}, viewbox(n, e, t, i) {
  return this._queueObject("viewbox", new Re(n, e, t, i));
}, update(n) {
  return typeof n != "object" ? this.update({ offset: arguments[0], color: arguments[1], opacity: arguments[2] }) : (n.opacity != null && this.attr("stop-opacity", n.opacity), n.color != null && this.attr("stop-color", n.color), n.offset != null && this.attr("offset", n.offset), this);
} }), oe(Ze, { rx: ba, ry: va, from: En, to: Rn }), me(Ze, "Runner");
class $s extends Ve {
  constructor(e, t = e) {
    super(Ce("svg", e), t), this.namespace();
  }
  defs() {
    return this.isRoot() ? tt(this.node.querySelector("defs")) || this.put(new Bi()) : this.root().defs();
  }
  isRoot() {
    return !this.node.parentNode || !(this.node.parentNode instanceof xe.window.SVGElement) && this.node.parentNode.nodeName !== "#document-fragment";
  }
  namespace() {
    return this.isRoot() ? this.attr({ xmlns: ga, version: "1.1" }).attr("xmlns:xlink", qt, ss) : this.root().namespace();
  }
  removeNamespace() {
    return this.attr({ xmlns: null, version: null }).attr("xmlns:xlink", null, ss).attr("xmlns:svgjs", null, ss);
  }
  root() {
    return this.isRoot() ? this : super.root();
  }
}
de({ Container: { nested: Se(function() {
  return this.put(new $s());
}) } }), me($s, "Svg", !0);
let Us = class extends Ve {
  constructor(n, e = n) {
    super(Ce("symbol", n), e);
  }
};
de({ Container: { symbol: Se(function() {
  return this.put(new Us());
}) } }), me(Us, "Symbol");
var Yn = Object.freeze({ __proto__: null, amove: function(n, e) {
  return this.ax(n).ay(e);
}, ax: function(n) {
  return this.attr("x", n);
}, ay: function(n) {
  return this.attr("y", n);
}, build: function(n) {
  return this._build = !!n, this;
}, center: function(n, e, t = this.bbox()) {
  return this.cx(n, t).cy(e, t);
}, cx: function(n, e = this.bbox()) {
  return n == null ? e.cx : this.attr("x", this.attr("x") + n - e.cx);
}, cy: function(n, e = this.bbox()) {
  return n == null ? e.cy : this.attr("y", this.attr("y") + n - e.cy);
}, length: function() {
  return this.node.getComputedTextLength();
}, move: function(n, e, t = this.bbox()) {
  return this.x(n, t).y(e, t);
}, plain: function(n) {
  return this._build === !1 && this.clear(), this.node.appendChild(xe.document.createTextNode(n)), this;
}, x: function(n, e = this.bbox()) {
  return n == null ? e.x : this.attr("x", this.attr("x") + n - e.x);
}, y: function(n, e = this.bbox()) {
  return n == null ? e.y : this.attr("y", this.attr("y") + n - e.y);
} });
class rt extends Je {
  constructor(e, t = e) {
    super(Ce("text", e), t), this.dom.leading = this.dom.leading ?? new ce(1.3), this._rebuild = !0, this._build = !1;
  }
  leading(e) {
    return e == null ? this.dom.leading : (this.dom.leading = new ce(e), this.rebuild());
  }
  rebuild(e) {
    if (typeof e == "boolean" && (this._rebuild = e), this._rebuild) {
      const t = this;
      let i = 0;
      const s = this.dom.leading;
      this.each(function(a) {
        if (Hs(this.node)) return;
        const r = xe.window.getComputedStyle(this.node).getPropertyValue("font-size"), o = s * new ce(r);
        this.dom.newLined && (this.attr("x", t.attr("x")), this.text() === `
` ? i += o : (this.attr("dy", a ? o + i : 0), i = 0));
      }), this.fire("rebuild");
    }
    return this;
  }
  setData(e) {
    return this.dom = e, this.dom.leading = new ce(e.leading || 1.3), this;
  }
  writeDataToDom() {
    return xn(this, this.dom, { leading: 1.3 }), this;
  }
  text(e) {
    if (e === void 0) {
      const t = this.node.childNodes;
      let i = 0;
      e = "";
      for (let s = 0, a = t.length; s < a; ++s) t[s].nodeName === "textPath" || Hs(t[s]) ? s === 0 && (i = s + 1) : (s !== i && t[s].nodeType !== 3 && tt(t[s]).dom.newLined === !0 && (e += `
`), e += t[s].textContent);
      return e;
    }
    if (this.clear().build(!0), typeof e == "function") e.call(this, this);
    else for (let t = 0, i = (e = (e + "").split(`
`)).length; t < i; t++) this.newLine(e[t]);
    return this.build(!1).rebuild();
  }
}
oe(rt, Yn), de({ Container: { text: Se(function(n = "") {
  return this.put(new rt()).text(n);
}), plain: Se(function(n = "") {
  return this.put(new rt()).plain(n);
}) } }), me(rt, "Text");
class zi extends Je {
  constructor(e, t = e) {
    super(Ce("tspan", e), t), this._build = !1;
  }
  dx(e) {
    return this.attr("dx", e);
  }
  dy(e) {
    return this.attr("dy", e);
  }
  newLine() {
    this.dom.newLined = !0;
    const e = this.parent();
    if (!(e instanceof rt)) return this;
    const t = e.index(this), i = xe.window.getComputedStyle(this.node).getPropertyValue("font-size"), s = e.dom.leading * new ce(i);
    return this.dy(t ? s : 0).attr("x", e.x());
  }
  text(e) {
    return e == null ? this.node.textContent + (this.dom.newLined ? `
` : "") : (typeof e == "function" ? (this.clear().build(!0), e.call(this, this), this.build(!1)) : this.plain(e), this);
  }
}
oe(zi, Yn), de({ Tspan: { tspan: Se(function(n = "") {
  const e = new zi();
  return this._build || this.clear(), this.put(e).text(n);
}) }, Text: { newLine: function(n = "") {
  return this.tspan(n).newLine();
} } }), me(zi, "Tspan");
class cs extends Je {
  constructor(e, t = e) {
    super(Ce("circle", e), t);
  }
  radius(e) {
    return this.attr("r", e);
  }
  rx(e) {
    return this.attr("r", e);
  }
  ry(e) {
    return this.rx(e);
  }
  size(e) {
    return this.radius(new ce(e).divide(2));
  }
}
oe(cs, { x: Sn, y: Cn, cx: Mn, cy: Ln, width: Pn, height: Tn }), de({ Container: { circle: Se(function(n = 0) {
  return this.put(new cs()).size(n).move(0, 0);
}) } }), me(cs, "Circle");
class hs extends Ve {
  constructor(e, t = e) {
    super(Ce("clipPath", e), t);
  }
  remove() {
    return this.targets().forEach(function(e) {
      e.unclip();
    }), super.remove();
  }
  targets() {
    return Rt("svg [clip-path*=" + this.id() + "]");
  }
}
de({ Container: { clip: Se(function() {
  return this.defs().put(new hs());
}) }, Element: { clipper() {
  return this.reference("clip-path");
}, clipWith(n) {
  const e = n instanceof hs ? n : this.parent().clip().add(n);
  return this.attr("clip-path", "url(#" + e.id() + ")");
}, unclip() {
  return this.attr("clip-path", null);
} } }), me(hs, "ClipPath");
class fr extends He {
  constructor(e, t = e) {
    super(Ce("foreignObject", e), t);
  }
}
de({ Container: { foreignObject: Se(function(n, e) {
  return this.put(new fr()).size(n, e);
}) } }), me(fr, "ForeignObject");
var Fn = Object.freeze({ __proto__: null, dmove: function(n, e) {
  return this.children().forEach((t) => {
    let i;
    try {
      i = t.node instanceof bi().SVGSVGElement ? new Re(t.attr(["x", "y", "width", "height"])) : t.bbox();
    } catch {
      return;
    }
    const s = new ne(t), a = s.translate(n, e).transform(s.inverse()), r = new be(i.x, i.y).transform(a);
    t.move(r.x, r.y);
  }), this;
}, dx: function(n) {
  return this.dmove(n, 0);
}, dy: function(n) {
  return this.dmove(0, n);
}, height: function(n, e = this.bbox()) {
  return n == null ? e.height : this.size(e.width, n, e);
}, move: function(n = 0, e = 0, t = this.bbox()) {
  const i = n - t.x, s = e - t.y;
  return this.dmove(i, s);
}, size: function(n, e, t = this.bbox()) {
  const i = Ut(this, n, e, t), s = i.width / t.width, a = i.height / t.height;
  return this.children().forEach((r) => {
    const o = new be(t).transform(new ne(r).inverse());
    r.scale(s, a, o.x, o.y);
  }), this;
}, width: function(n, e = this.bbox()) {
  return n == null ? e.width : this.size(n, e.height, e);
}, x: function(n, e = this.bbox()) {
  return n == null ? e.x : this.move(n, e.y, e);
}, y: function(n, e = this.bbox()) {
  return n == null ? e.y : this.move(e.x, n, e);
} });
class xt extends Ve {
  constructor(e, t = e) {
    super(Ce("g", e), t);
  }
}
oe(xt, Fn), de({ Container: { group: Se(function() {
  return this.put(new xt());
}) } }), me(xt, "G");
class Ci extends Ve {
  constructor(e, t = e) {
    super(Ce("a", e), t);
  }
  target(e) {
    return this.attr("target", e);
  }
  to(e) {
    return this.attr("href", e, qt);
  }
}
oe(Ci, Fn), de({ Container: { link: Se(function(n) {
  return this.put(new Ci()).to(n);
}) }, Element: { unlink() {
  const n = this.linker();
  if (!n) return this;
  const e = n.parent();
  if (!e) return this.remove();
  const t = e.index(n);
  return e.add(this, t), n.remove(), this;
}, linkTo(n) {
  let e = this.linker();
  return e || (e = new Ci(), this.wrap(e)), typeof n == "function" ? n.call(e, e) : e.to(n), this;
}, linker() {
  const n = this.parent();
  return n && n.node.nodeName.toLowerCase() === "a" ? n : null;
} } }), me(Ci, "A");
class ds extends Ve {
  constructor(e, t = e) {
    super(Ce("mask", e), t);
  }
  remove() {
    return this.targets().forEach(function(e) {
      e.unmask();
    }), super.remove();
  }
  targets() {
    return Rt("svg [mask*=" + this.id() + "]");
  }
}
de({ Container: { mask: Se(function() {
  return this.defs().put(new ds());
}) }, Element: { masker() {
  return this.reference("mask");
}, maskWith(n) {
  const e = n instanceof ds ? n : this.parent().mask().add(n);
  return this.attr("mask", "url(#" + e.id() + ")");
}, unmask() {
  return this.attr("mask", null);
} } }), me(ds, "Mask");
class pr extends He {
  constructor(e, t = e) {
    super(Ce("stop", e), t);
  }
  update(e) {
    return (typeof e == "number" || e instanceof ce) && (e = { offset: arguments[0], color: arguments[1], opacity: arguments[2] }), e.opacity != null && this.attr("stop-opacity", e.opacity), e.color != null && this.attr("stop-color", e.color), e.offset != null && this.attr("offset", new ce(e.offset)), this;
  }
}
de({ Gradient: { stop: function(n, e, t) {
  return this.put(new pr()).update(n, e, t);
} } }), me(pr, "Stop");
class us extends He {
  constructor(e, t = e) {
    super(Ce("style", e), t);
  }
  addText(e = "") {
    return this.node.textContent += e, this;
  }
  font(e, t, i = {}) {
    return this.rule("@font-face", { fontFamily: e, src: t, ...i });
  }
  rule(e, t) {
    return this.addText(function(i, s) {
      if (!i) return "";
      if (!s) return i;
      let a = i + "{";
      for (const r in s) a += r.replace(/([A-Z])/g, function(o, l) {
        return "-" + l.toLowerCase();
      }) + ":" + s[r] + ";";
      return a += "}", a;
    }(e, t));
  }
}
de("Dom", { style(n, e) {
  return this.put(new us()).rule(n, e);
}, fontface(n, e, t) {
  return this.put(new us()).font(n, e, t);
} }), me(us, "Style");
class gs extends rt {
  constructor(e, t = e) {
    super(Ce("textPath", e), t);
  }
  array() {
    const e = this.track();
    return e ? e.array() : null;
  }
  plot(e) {
    const t = this.track();
    let i = null;
    return t && (i = t.plot(e)), e == null ? i : this;
  }
  track() {
    return this.reference("href");
  }
}
de({ Container: { textPath: Se(function(n, e) {
  return n instanceof rt || (n = this.text(n)), n.path(e);
}) }, Text: { path: Se(function(n, e = !0) {
  const t = new gs();
  let i;
  if (n instanceof Ht || (n = this.defs().path(n)), t.attr("href", "#" + n, qt), e) for (; i = this.node.firstChild; ) t.node.appendChild(i);
  return this.put(t);
}), textPath() {
  return this.findOne("textPath");
} }, Path: { text: Se(function(n) {
  return n instanceof rt || (n = new rt().addTo(this.parent()).text(n)), n.path(this);
}), targets() {
  return Rt("svg textPath").filter((n) => (n.attr("href") || "").includes(this.id()));
} } }), gs.prototype.MorphArray = at, me(gs, "TextPath");
class xr extends Je {
  constructor(e, t = e) {
    super(Ce("use", e), t);
  }
  use(e, t) {
    return this.attr("href", (t || "") + "#" + e, qt);
  }
}
de({ Container: { use: Se(function(n, e) {
  return this.put(new xr()).use(n, e);
}) } }), me(xr, "Use");
const Qc = We;
oe([$s, Us, Ei, di, Ri], Ue("viewbox")), oe([St, Mt, Ct, Ht], Ue("marker")), oe(rt, Ue("Text")), oe(Ht, Ue("Path")), oe(Bi, Ue("Defs")), oe([rt, zi], Ue("Tspan")), oe([Oi, Ii, ni, Ze], Ue("radius")), oe(vi, Ue("EventTarget")), oe(mt, Ue("Dom")), oe(He, Ue("Element")), oe(Je, Ue("Shape")), oe([Ve, In], Ue("Container")), oe(ni, Ue("Gradient")), oe(Ze, Ue("Runner")), It.extend([...new Set(fn)]), function(n = []) {
  Vs.push(...[].concat(n));
}([ce, Ae, Re, ne, Et, bt, at, be]), oe(Vs, { to(n) {
  return new kt().type(this.constructor).from(this.toArray()).to(n);
}, fromArray(n) {
  return this.init(n), this;
}, toConsumable() {
  return this.toArray();
}, morph(n, e, t, i, s) {
  return this.fromArray(n.map(function(a, r) {
    return i.step(a, e[r], t, s[r], s);
  }));
} });
class Le extends He {
  constructor(e) {
    super(Ce("filter", e), e), this.$source = "SourceGraphic", this.$sourceAlpha = "SourceAlpha", this.$background = "BackgroundImage", this.$backgroundAlpha = "BackgroundAlpha", this.$fill = "FillPaint", this.$stroke = "StrokePaint", this.$autoSetIn = !0;
  }
  put(e, t) {
    return !(e = super.put(e, t)).attr("in") && this.$autoSetIn && e.attr("in", this.$source), e.attr("result") || e.attr("result", e.id()), e;
  }
  remove() {
    return this.targets().each("unfilter"), super.remove();
  }
  targets() {
    return Rt('svg [filter*="' + this.id() + '"]');
  }
  toString() {
    return "url(#" + this.id() + ")";
  }
}
class ka extends He {
  constructor(e, t) {
    super(e, t), this.result(this.id());
  }
  in(e) {
    if (e == null) {
      const t = this.attr("in");
      return this.parent() && this.parent().find(`[result="${t}"]`)[0] || t;
    }
    return this.attr("in", e);
  }
  result(e) {
    return this.attr("result", e);
  }
  toString() {
    return this.result();
  }
}
const et = (n) => function(...e) {
  for (let t = n.length; t--; ) e[t] != null && this.attr(n[t], e[t]);
}, eh = { blend: et(["in", "in2", "mode"]), colorMatrix: et(["type", "values"]), composite: et(["in", "in2", "operator"]), convolveMatrix: function(n) {
  n = new Et(n).toString(), this.attr({ order: Math.sqrt(n.split(" ").length), kernelMatrix: n });
}, diffuseLighting: et(["surfaceScale", "lightingColor", "diffuseConstant", "kernelUnitLength"]), displacementMap: et(["in", "in2", "scale", "xChannelSelector", "yChannelSelector"]), dropShadow: et(["in", "dx", "dy", "stdDeviation"]), flood: et(["flood-color", "flood-opacity"]), gaussianBlur: function(n = 0, e = n) {
  this.attr("stdDeviation", n + " " + e);
}, image: function(n) {
  this.attr("href", n, qt);
}, morphology: et(["operator", "radius"]), offset: et(["dx", "dy"]), specularLighting: et(["surfaceScale", "lightingColor", "diffuseConstant", "specularExponent", "kernelUnitLength"]), tile: et([]), turbulence: et(["baseFrequency", "numOctaves", "seed", "stitchTiles", "type"]) };
["blend", "colorMatrix", "componentTransfer", "composite", "convolveMatrix", "diffuseLighting", "displacementMap", "dropShadow", "flood", "gaussianBlur", "image", "merge", "morphology", "offset", "specularLighting", "tile", "turbulence"].forEach((n) => {
  const e = $t(n), t = eh[n];
  Le[e + "Effect"] = class extends ka {
    constructor(i) {
      super(Ce("fe" + e, i), i);
    }
    update(i) {
      return t.apply(this, i), this;
    }
  }, Le.prototype[n] = Se(function(i, ...s) {
    const a = new Le[e + "Effect"]();
    return i == null ? this.put(a) : (typeof i == "function" ? i.call(a, a) : s.unshift(i), this.put(a).update(s));
  });
}), oe(Le, { merge(n) {
  const e = this.put(new Le.MergeEffect());
  return typeof n == "function" ? (n.call(e, e), e) : ((n instanceof Array ? n : [...arguments]).forEach((t) => {
    t instanceof Le.MergeNode ? e.put(t) : e.mergeNode(t);
  }), e);
}, componentTransfer(n = {}) {
  const e = this.put(new Le.ComponentTransferEffect());
  if (typeof n == "function") return n.call(e, e), e;
  n.r || n.g || n.b || n.a || (n = { r: n, g: n, b: n, a: n });
  for (const t in n) e.add(new Le["Func" + t.toUpperCase()](n[t]));
  return e;
} });
["distantLight", "pointLight", "spotLight", "mergeNode", "FuncR", "FuncG", "FuncB", "FuncA"].forEach((n) => {
  const e = $t(n);
  Le[e] = class extends ka {
    constructor(t) {
      super(Ce("fe" + e, t), t);
    }
  };
});
["funcR", "funcG", "funcB", "funcA"].forEach(function(n) {
  const e = Le[$t(n)], t = Se(function() {
    return this.put(new e());
  });
  Le.ComponentTransferEffect.prototype[n] = t;
});
["distantLight", "pointLight", "spotLight"].forEach((n) => {
  const e = Le[$t(n)], t = Se(function() {
    return this.put(new e());
  });
  Le.DiffuseLightingEffect.prototype[n] = t, Le.SpecularLightingEffect.prototype[n] = t;
}), oe(Le.MergeEffect, { mergeNode(n) {
  return this.put(new Le.MergeNode()).attr("in", n);
} }), oe(Bi, { filter: function(n) {
  const e = this.put(new Le());
  return typeof n == "function" && n.call(e, e), e;
} }), oe(Ve, { filter: function(n) {
  return this.defs().filter(n);
} }), oe(He, { filterWith: function(n) {
  const e = n instanceof Le ? n : this.defs().filter(n);
  return this.attr("filter", e);
}, unfilter: function(n) {
  return this.attr("filter", null);
}, filterer() {
  return this.reference("filter");
} });
const th = { blend: function(n, e) {
  return this.parent() && this.parent().blend(this, n, e);
}, colorMatrix: function(n, e) {
  return this.parent() && this.parent().colorMatrix(n, e).in(this);
}, componentTransfer: function(n) {
  return this.parent() && this.parent().componentTransfer(n).in(this);
}, composite: function(n, e) {
  return this.parent() && this.parent().composite(this, n, e);
}, convolveMatrix: function(n) {
  return this.parent() && this.parent().convolveMatrix(n).in(this);
}, diffuseLighting: function(n, e, t, i) {
  return this.parent() && this.parent().diffuseLighting(n, t, i).in(this);
}, displacementMap: function(n, e, t, i) {
  return this.parent() && this.parent().displacementMap(this, n, e, t, i);
}, dropShadow: function(n, e, t) {
  return this.parent() && this.parent().dropShadow(this, n, e, t).in(this);
}, flood: function(n, e) {
  return this.parent() && this.parent().flood(n, e);
}, gaussianBlur: function(n, e) {
  return this.parent() && this.parent().gaussianBlur(n, e).in(this);
}, image: function(n) {
  return this.parent() && this.parent().image(n);
}, merge: function(n) {
  return n = n instanceof Array ? n : [...n], this.parent() && this.parent().merge(this, ...n);
}, morphology: function(n, e) {
  return this.parent() && this.parent().morphology(n, e).in(this);
}, offset: function(n, e) {
  return this.parent() && this.parent().offset(n, e).in(this);
}, specularLighting: function(n, e, t, i, s) {
  return this.parent() && this.parent().specularLighting(n, t, i, s).in(this);
}, tile: function() {
  return this.parent() && this.parent().tile().in(this);
}, turbulence: function(n, e, t, i, s) {
  return this.parent() && this.parent().turbulence(n, e, t, i, s).in(this);
} };
oe(ka, th), oe(Le.MergeEffect, { in: function(n) {
  return n instanceof Le.MergeNode ? this.add(n, 0) : this.add(new Le.MergeNode().in(n), 0), this;
} }), oe([Le.CompositeEffect, Le.BlendEffect, Le.DisplacementMapEffect], { in2: function(n) {
  if (n == null) {
    const e = this.attr("in2");
    return this.parent() && this.parent().find(`[result="${e}"]`)[0] || e;
  }
  return this.attr("in2", n);
} }), Le.filter = { sepiatone: [0.343, 0.669, 0.119, 0, 0, 0.249, 0.626, 0.13, 0, 0, 0.172, 0.334, 0.111, 0, 0, 0, 0, 0, 1, 0] };
var Fe = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w;
  }
  return te(n, [{ key: "getDefaultFilter", value: function(e, t) {
    var i = this.w;
    e.unfilter(!0), new Le().size("120%", "180%", "-5%", "-40%"), i.config.chart.dropShadow.enabled && this.dropShadow(e, i.config.chart.dropShadow, t);
  } }, { key: "applyFilter", value: function(e, t, i) {
    var s, a = this, r = this.w;
    if (e.unfilter(!0), i !== "none") {
      var o, l, c = r.config.chart.dropShadow, h = i === "lighten" ? 2 : 0.3;
      e.filterWith(function(d) {
        d.colorMatrix({ type: "matrix", values: `
          `.concat(h, ` 0 0 0 0
          0 `).concat(h, ` 0 0 0
          0 0 `).concat(h, ` 0 0
          0 0 0 1 0
        `), in: "SourceGraphic", result: "brightness" }), c.enabled && a.addShadow(d, t, c, "brightness");
      }), !c.noUserSpaceOnUse && ((o = e.filterer()) === null || o === void 0 || (l = o.node) === null || l === void 0 || l.setAttribute("filterUnits", "userSpaceOnUse")), this._scaleFilterSize((s = e.filterer()) === null || s === void 0 ? void 0 : s.node);
    } else this.getDefaultFilter(e, t);
  } }, { key: "addShadow", value: function(e, t, i, s) {
    var a, r = this.w, o = i.blur, l = i.top, c = i.left, h = i.color, d = i.opacity;
    if (h = Array.isArray(h) ? h[t] : h, ((a = r.config.chart.dropShadow.enabledOnSeries) === null || a === void 0 ? void 0 : a.length) > 0 && r.config.chart.dropShadow.enabledOnSeries.indexOf(t) === -1) return e;
    e.offset({ in: s, dx: c, dy: l, result: "offset" }), e.gaussianBlur({ in: "offset", stdDeviation: o, result: "blur" }), e.flood({ "flood-color": h, "flood-opacity": d, result: "flood" }), e.composite({ in: "flood", in2: "blur", operator: "in", result: "shadow" }), e.merge(["shadow", s]);
  } }, { key: "dropShadow", value: function(e, t) {
    var i, s, a, r, o, l = this, c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, h = this.w;
    return e.unfilter(!0), _.isMsEdge() && h.config.chart.type === "radialBar" || ((i = h.config.chart.dropShadow.enabledOnSeries) === null || i === void 0 ? void 0 : i.length) > 0 && ((a = h.config.chart.dropShadow.enabledOnSeries) === null || a === void 0 ? void 0 : a.indexOf(c)) === -1 ? e : (e.filterWith(function(d) {
      l.addShadow(d, c, t, "SourceGraphic");
    }), t.noUserSpaceOnUse || (r = e.filterer()) === null || r === void 0 || (o = r.node) === null || o === void 0 || o.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize((s = e.filterer()) === null || s === void 0 ? void 0 : s.node), e);
  } }, { key: "setSelectionFilter", value: function(e, t, i) {
    var s = this.w;
    if (s.globals.selectedDataPoints[t] !== void 0 && s.globals.selectedDataPoints[t].indexOf(i) > -1) {
      e.node.setAttribute("selected", !0);
      var a = s.config.states.active.filter;
      a !== "none" && this.applyFilter(e, t, a.type);
    }
  } }, { key: "_scaleFilterSize", value: function(e) {
    e && function(t) {
      for (var i in t) t.hasOwnProperty(i) && e.setAttribute(i, t[i]);
    }({ width: "200%", height: "200%", x: "-50%", y: "-50%" });
  } }]), n;
}(), W = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w;
  }
  return te(n, [{ key: "roundPathCorners", value: function(e, t) {
    function i(S, C, L) {
      var P = C.x - S.x, R = C.y - S.y, I = Math.sqrt(P * P + R * R);
      return s(S, C, Math.min(1, L / I));
    }
    function s(S, C, L) {
      return { x: S.x + (C.x - S.x) * L, y: S.y + (C.y - S.y) * L };
    }
    function a(S, C) {
      S.length > 2 && (S[S.length - 2] = C.x, S[S.length - 1] = C.y);
    }
    function r(S) {
      return { x: parseFloat(S[S.length - 2]), y: parseFloat(S[S.length - 1]) };
    }
    e.indexOf("NaN") > -1 && (e = "");
    var o = e.split(/[,\s]/).reduce(function(S, C) {
      var L = C.match(/^([a-zA-Z])(.+)/);
      return L ? (S.push(L[1]), S.push(L[2])) : S.push(C), S;
    }, []).reduce(function(S, C) {
      return parseFloat(C) == C && S.length ? S[S.length - 1].push(C) : S.push([C]), S;
    }, []), l = [];
    if (o.length > 1) {
      var c = r(o[0]), h = null;
      o[o.length - 1][0] == "Z" && o[0].length > 2 && (h = ["L", c.x, c.y], o[o.length - 1] = h), l.push(o[0]);
      for (var d = 1; d < o.length; d++) {
        var u = l[l.length - 1], g = o[d], p = g == h ? o[1] : o[d + 1];
        if (p && u && u.length > 2 && g[0] == "L" && p.length > 2 && p[0] == "L") {
          var f, x, m = r(u), b = r(g), w = r(p);
          f = i(b, m, t), x = i(b, w, t), a(g, f), g.origPoint = b, l.push(g);
          var y = s(f, b, 0.5), v = s(b, x, 0.5), k = ["C", y.x, y.y, v.x, v.y, x.x, x.y];
          k.origPoint = b, l.push(k);
        } else l.push(g);
      }
      if (h) {
        var A = r(l[l.length - 1]);
        l.push(["Z"]), a(l[0], A);
      }
    } else l = o;
    return l.reduce(function(S, C) {
      return S + C.join(" ") + " ";
    }, "");
  } }, { key: "drawLine", value: function(e, t, i, s) {
    var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "#a8a8a8", r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0, o = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null, l = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "butt";
    return this.w.globals.dom.Paper.line().attr({ x1: e, y1: t, x2: i, y2: s, stroke: a, "stroke-dasharray": r, "stroke-width": o, "stroke-linecap": l });
  } }, { key: "drawRect", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "#fefefe", o = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 1, l = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : null, c = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : null, h = arguments.length > 9 && arguments[9] !== void 0 ? arguments[9] : 0, d = this.w.globals.dom.Paper.rect();
    return d.attr({ x: e, y: t, width: i > 0 ? i : 0, height: s > 0 ? s : 0, rx: a, ry: a, opacity: o, "stroke-width": l !== null ? l : 0, stroke: c !== null ? c : "none", "stroke-dasharray": h }), d.node.setAttribute("fill", r), d;
  } }, { key: "drawPolygon", value: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "#e1e1e1", i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "none";
    return this.w.globals.dom.Paper.polygon(e).attr({ fill: s, stroke: t, "stroke-width": i });
  } }, { key: "drawCircle", value: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    e < 0 && (e = 0);
    var i = this.w.globals.dom.Paper.circle(2 * e);
    return t !== null && i.attr(t), i;
  } }, { key: "drawPath", value: function(e) {
    var t = e.d, i = t === void 0 ? "" : t, s = e.stroke, a = s === void 0 ? "#a8a8a8" : s, r = e.strokeWidth, o = r === void 0 ? 1 : r, l = e.fill, c = e.fillOpacity, h = c === void 0 ? 1 : c, d = e.strokeOpacity, u = d === void 0 ? 1 : d, g = e.classes, p = e.strokeLinecap, f = p === void 0 ? null : p, x = e.strokeDashArray, m = x === void 0 ? 0 : x, b = this.w;
    return f === null && (f = b.config.stroke.lineCap), (i.indexOf("undefined") > -1 || i.indexOf("NaN") > -1) && (i = "M 0 ".concat(b.globals.gridHeight)), b.globals.dom.Paper.path(i).attr({ fill: l, "fill-opacity": h, stroke: a, "stroke-opacity": u, "stroke-linecap": f, "stroke-width": o, "stroke-dasharray": m, class: g });
  } }, { key: "group", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, t = this.w.globals.dom.Paper.group();
    return e !== null && t.attr(e), t;
  } }, { key: "move", value: function(e, t) {
    var i = ["M", e, t].join(" ");
    return i;
  } }, { key: "line", value: function(e, t) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, s = null;
    return i === null ? s = [" L", e, t].join(" ") : i === "H" ? s = [" H", e].join(" ") : i === "V" && (s = [" V", t].join(" ")), s;
  } }, { key: "curve", value: function(e, t, i, s, a, r) {
    var o = ["C", e, t, i, s, a, r].join(" ");
    return o;
  } }, { key: "quadraticCurve", value: function(e, t, i, s) {
    return ["Q", e, t, i, s].join(" ");
  } }, { key: "arc", value: function(e, t, i, s, a, r, o) {
    var l = "A";
    arguments.length > 7 && arguments[7] !== void 0 && arguments[7] && (l = "a");
    var c = [l, e, t, i, s, a, r, o].join(" ");
    return c;
  } }, { key: "renderPaths", value: function(e) {
    var t, i = e.j, s = e.realIndex, a = e.pathFrom, r = e.pathTo, o = e.stroke, l = e.strokeWidth, c = e.strokeLinecap, h = e.fill, d = e.animationDelay, u = e.initialSpeed, g = e.dataChangeSpeed, p = e.className, f = e.chartType, x = e.shouldClipToGrid, m = x === void 0 || x, b = e.bindEventsOnPaths, w = b === void 0 || b, y = e.drawShadow, v = y === void 0 || y, k = this.w, A = new Fe(this.ctx), S = new Vt(this.ctx), C = this.w.config.chart.animations.enabled, L = C && this.w.config.chart.animations.dynamicAnimation.enabled;
    if (a && a.startsWith("M 0 0") && r) {
      var P = r.match(/^M\s+[\d.-]+\s+[\d.-]+/);
      P && (a = a.replace(/^M\s+0\s+0/, P[0]));
    }
    var R = !!(C && !k.globals.resized || L && k.globals.dataChanged && k.globals.shouldAnimate);
    R ? t = a : (t = r, k.globals.animationEnded = !0);
    var I = k.config.stroke.dashArray, T = 0;
    T = Array.isArray(I) ? I[s] : k.config.stroke.dashArray;
    var O = this.drawPath({ d: t, stroke: o, strokeWidth: l, fill: h, fillOpacity: 1, classes: p, strokeLinecap: c, strokeDashArray: T });
    O.attr("index", s), m && (f === "bar" && !k.globals.isHorizontal || k.globals.comboCharts ? O.attr({ "clip-path": "url(#gridRectBarMask".concat(k.globals.cuid, ")") }) : O.attr({ "clip-path": "url(#gridRectMask".concat(k.globals.cuid, ")") })), k.config.chart.dropShadow.enabled && v && A.dropShadow(O, k.config.chart.dropShadow, s), w && (O.node.addEventListener("mouseenter", this.pathMouseEnter.bind(this, O)), O.node.addEventListener("mouseleave", this.pathMouseLeave.bind(this, O)), O.node.addEventListener("mousedown", this.pathMouseDown.bind(this, O))), O.attr({ pathTo: r, pathFrom: a });
    var N = { el: O, j: i, realIndex: s, pathFrom: a, pathTo: r, fill: h, strokeWidth: l, delay: d };
    return !C || k.globals.resized || k.globals.dataChanged ? !k.globals.resized && k.globals.dataChanged || S.showDelayedElements() : S.animatePathsGradually(q(q({}, N), {}, { speed: u })), k.globals.dataChanged && L && R && S.animatePathsGradually(q(q({}, N), {}, { speed: g })), O;
  } }, { key: "drawPattern", value: function(e, t, i) {
    var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "#a8a8a8", a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    return this.w.globals.dom.Paper.pattern(t, i, function(r) {
      e === "horizontalLines" ? r.line(0, 0, i, 0).stroke({ color: s, width: a + 1 }) : e === "verticalLines" ? r.line(0, 0, 0, t).stroke({ color: s, width: a + 1 }) : e === "slantedLines" ? r.line(0, 0, t, i).stroke({ color: s, width: a }) : e === "squares" ? r.rect(t, i).fill("none").stroke({ color: s, width: a }) : e === "circles" && r.circle(t).fill("none").stroke({ color: s, width: a });
    });
  } }, { key: "drawGradient", value: function(e, t, i, s, a) {
    var r, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, l = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null, c = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [], h = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : 0, d = this.w;
    t.length < 9 && t.indexOf("#") === 0 && (t = _.hexToRgba(t, s)), i.length < 9 && i.indexOf("#") === 0 && (i = _.hexToRgba(i, a));
    var u = 0, g = 1, p = 1, f = null;
    l !== null && (u = l[0] !== void 0 ? l[0] / 100 : 0, g = l[1] !== void 0 ? l[1] / 100 : 1, p = l[2] !== void 0 ? l[2] / 100 : 1, f = l[3] !== void 0 ? l[3] / 100 : null);
    var x = !(d.config.chart.type !== "donut" && d.config.chart.type !== "pie" && d.config.chart.type !== "polarArea" && d.config.chart.type !== "bubble");
    if (r = c && c.length !== 0 ? d.globals.dom.Paper.gradient(x ? "radial" : "linear", function(w) {
      (Array.isArray(c[h]) ? c[h] : c).forEach(function(y) {
        w.stop(y.offset / 100, y.color, y.opacity);
      });
    }) : d.globals.dom.Paper.gradient(x ? "radial" : "linear", function(w) {
      w.stop(u, t, s), w.stop(g, i, a), w.stop(p, i, a), f !== null && w.stop(f, t, s);
    }), x) {
      var m = d.globals.gridWidth / 2, b = d.globals.gridHeight / 2;
      d.config.chart.type !== "bubble" ? r.attr({ gradientUnits: "userSpaceOnUse", cx: m, cy: b, r: o }) : r.attr({ cx: 0.5, cy: 0.5, r: 0.8, fx: 0.2, fy: 0.2 });
    } else e === "vertical" ? r.from(0, 0).to(0, 1) : e === "diagonal" ? r.from(0, 0).to(1, 1) : e === "horizontal" ? r.from(0, 1).to(1, 1) : e === "diagonal2" && r.from(1, 0).to(0, 1);
    return r;
  } }, { key: "getTextBasedOnMaxWidth", value: function(e) {
    var t = e.text, i = e.maxWidth, s = e.fontSize, a = e.fontFamily, r = this.getTextRects(t, s, a), o = r.width / t.length, l = Math.floor(i / o);
    return i < r.width ? t.slice(0, l - 3) + "..." : t;
  } }, { key: "drawText", value: function(e) {
    var t = this, i = e.x, s = e.y, a = e.text, r = e.textAnchor, o = e.fontSize, l = e.fontFamily, c = e.fontWeight, h = e.foreColor, d = e.opacity, u = e.maxWidth, g = e.cssClass, p = g === void 0 ? "" : g, f = e.isPlainText, x = f === void 0 || f, m = e.dominantBaseline, b = m === void 0 ? "auto" : m, w = this.w;
    a === void 0 && (a = "");
    var y = a;
    r || (r = "start"), h && h.length || (h = w.config.chart.foreColor), l = l || w.config.chart.fontFamily, c = c || "regular";
    var v, k = { maxWidth: u, fontSize: o = o || "11px", fontFamily: l };
    return Array.isArray(a) ? v = w.globals.dom.Paper.text(function(A) {
      for (var S = 0; S < a.length; S++) y = a[S], u && (y = t.getTextBasedOnMaxWidth(q({ text: a[S] }, k))), S === 0 ? A.tspan(y) : A.tspan(y).newLine();
    }) : (u && (y = this.getTextBasedOnMaxWidth(q({ text: a }, k))), v = x ? w.globals.dom.Paper.plain(a) : w.globals.dom.Paper.text(function(A) {
      return A.tspan(y);
    })), v.attr({ x: i, y: s, "text-anchor": r, "dominant-baseline": b, "font-size": o, "font-family": l, "font-weight": c, fill: h, class: "apexcharts-text " + p }), v.node.style.fontFamily = l, v.node.style.opacity = d, v;
  } }, { key: "getMarkerPath", value: function(e, t, i, s) {
    var a = "";
    switch (i) {
      case "cross":
        a = "M ".concat(e - (s /= 1.4), " ").concat(t - s, " L ").concat(e + s, " ").concat(t + s, "  M ").concat(e - s, " ").concat(t + s, " L ").concat(e + s, " ").concat(t - s);
        break;
      case "plus":
        a = "M ".concat(e - (s /= 1.12), " ").concat(t, " L ").concat(e + s, " ").concat(t, "  M ").concat(e, " ").concat(t - s, " L ").concat(e, " ").concat(t + s);
        break;
      case "star":
      case "sparkle":
        var r = 5;
        s *= 1.15, i === "sparkle" && (s /= 1.1, r = 4);
        for (var o = Math.PI / r, l = 0; l <= 2 * r; l++) {
          var c = l * o, h = l % 2 == 0 ? s : s / 2;
          a += (l === 0 ? "M" : "L") + (e + h * Math.sin(c)) + "," + (t - h * Math.cos(c));
        }
        a += "Z";
        break;
      case "triangle":
        a = "M ".concat(e, " ").concat(t - s, ` 
             L `).concat(e + s, " ").concat(t + s, ` 
             L `).concat(e - s, " ").concat(t + s, ` 
             Z`);
        break;
      case "square":
      case "rect":
        a = "M ".concat(e - (s /= 1.125), " ").concat(t - s, ` 
           L `).concat(e + s, " ").concat(t - s, ` 
           L `).concat(e + s, " ").concat(t + s, ` 
           L `).concat(e - s, " ").concat(t + s, ` 
           Z`);
        break;
      case "diamond":
        s *= 1.05, a = "M ".concat(e, " ").concat(t - s, ` 
             L `).concat(e + s, " ").concat(t, ` 
             L `).concat(e, " ").concat(t + s, ` 
             L `).concat(e - s, " ").concat(t, ` 
            Z`);
        break;
      case "line":
        a = "M ".concat(e - (s /= 1.1), " ").concat(t, ` 
           L `).concat(e + s, " ").concat(t);
        break;
      default:
        s *= 2, a = "M ".concat(e, ", ").concat(t, ` 
           m -`).concat(s / 2, `, 0 
           a `).concat(s / 2, ",").concat(s / 2, " 0 1,0 ").concat(s, `,0 
           a `).concat(s / 2, ",").concat(s / 2, " 0 1,0 -").concat(s, ",0");
    }
    return a;
  } }, { key: "drawMarkerShape", value: function(e, t, i, s, a) {
    var r = this.drawPath({ d: this.getMarkerPath(e, t, i, s, a), stroke: a.pointStrokeColor, strokeDashArray: a.pointStrokeDashArray, strokeWidth: a.pointStrokeWidth, fill: a.pointFillColor, fillOpacity: a.pointFillOpacity, strokeOpacity: a.pointStrokeOpacity });
    return r.attr({ cx: e, cy: t, shape: a.shape, class: a.class ? a.class : "" }), r;
  } }, { key: "drawMarker", value: function(e, t, i) {
    e = e || 0;
    var s = i.pSize || 0;
    return _.isNumber(t) || (s = 0, t = 0), this.drawMarkerShape(e, t, i == null ? void 0 : i.shape, s, q(q({}, i), i.shape === "line" || i.shape === "plus" || i.shape === "cross" ? { pointStrokeColor: i.pointFillColor, pointStrokeOpacity: i.pointFillOpacity } : {}));
  } }, { key: "pathMouseEnter", value: function(e, t) {
    var i = this.w, s = new Fe(this.ctx), a = parseInt(e.node.getAttribute("index"), 10), r = parseInt(e.node.getAttribute("j"), 10);
    if (typeof i.config.chart.events.dataPointMouseEnter == "function" && i.config.chart.events.dataPointMouseEnter(t, this.ctx, { seriesIndex: a, dataPointIndex: r, w: i }), this.ctx.events.fireEvent("dataPointMouseEnter", [t, this.ctx, { seriesIndex: a, dataPointIndex: r, w: i }]), (i.config.states.active.filter.type === "none" || e.node.getAttribute("selected") !== "true") && i.config.states.hover.filter.type !== "none" && !i.globals.isTouchDevice) {
      var o = i.config.states.hover.filter;
      s.applyFilter(e, a, o.type);
    }
  } }, { key: "pathMouseLeave", value: function(e, t) {
    var i = this.w, s = new Fe(this.ctx), a = parseInt(e.node.getAttribute("index"), 10), r = parseInt(e.node.getAttribute("j"), 10);
    typeof i.config.chart.events.dataPointMouseLeave == "function" && i.config.chart.events.dataPointMouseLeave(t, this.ctx, { seriesIndex: a, dataPointIndex: r, w: i }), this.ctx.events.fireEvent("dataPointMouseLeave", [t, this.ctx, { seriesIndex: a, dataPointIndex: r, w: i }]), i.config.states.active.filter.type !== "none" && e.node.getAttribute("selected") === "true" || i.config.states.hover.filter.type !== "none" && s.getDefaultFilter(e, a);
  } }, { key: "pathMouseDown", value: function(e, t) {
    var i = this.w, s = new Fe(this.ctx), a = parseInt(e.node.getAttribute("index"), 10), r = parseInt(e.node.getAttribute("j"), 10), o = "false";
    if (e.node.getAttribute("selected") === "true") {
      if (e.node.setAttribute("selected", "false"), i.globals.selectedDataPoints[a].indexOf(r) > -1) {
        var l = i.globals.selectedDataPoints[a].indexOf(r);
        i.globals.selectedDataPoints[a].splice(l, 1);
      }
    } else {
      if (!i.config.states.active.allowMultipleDataPointsSelection && i.globals.selectedDataPoints.length > 0) {
        i.globals.selectedDataPoints = [];
        var c = i.globals.dom.Paper.find(".apexcharts-series path:not(.apexcharts-decoration-element)"), h = i.globals.dom.Paper.find(".apexcharts-series circle:not(.apexcharts-decoration-element), .apexcharts-series rect:not(.apexcharts-decoration-element)"), d = function(p) {
          Array.prototype.forEach.call(p, function(f) {
            f.node.setAttribute("selected", "false"), s.getDefaultFilter(f, a);
          });
        };
        d(c), d(h);
      }
      e.node.setAttribute("selected", "true"), o = "true", i.globals.selectedDataPoints[a] === void 0 && (i.globals.selectedDataPoints[a] = []), i.globals.selectedDataPoints[a].push(r);
    }
    if (o === "true") {
      var u = i.config.states.active.filter;
      if (u !== "none") s.applyFilter(e, a, u.type);
      else if (i.config.states.hover.filter !== "none" && !i.globals.isTouchDevice) {
        var g = i.config.states.hover.filter;
        s.applyFilter(e, a, g.type);
      }
    } else i.config.states.active.filter.type !== "none" && (i.config.states.hover.filter.type === "none" || i.globals.isTouchDevice ? s.getDefaultFilter(e, a) : (g = i.config.states.hover.filter, s.applyFilter(e, a, g.type)));
    typeof i.config.chart.events.dataPointSelection == "function" && i.config.chart.events.dataPointSelection(t, this.ctx, { selectedDataPoints: i.globals.selectedDataPoints, seriesIndex: a, dataPointIndex: r, w: i }), t && this.ctx.events.fireEvent("dataPointSelection", [t, this.ctx, { selectedDataPoints: i.globals.selectedDataPoints, seriesIndex: a, dataPointIndex: r, w: i }]);
  } }, { key: "rotateAroundCenter", value: function(e) {
    var t = {};
    return e && typeof e.getBBox == "function" && (t = e.getBBox()), { x: t.x + t.width / 2, y: t.y + t.height / 2 };
  } }, { key: "getTextRects", value: function(e, t, i, s) {
    var a = !(arguments.length > 4 && arguments[4] !== void 0) || arguments[4], r = this.w, o = this.drawText({ x: -200, y: -200, text: e, textAnchor: "start", fontSize: t, fontFamily: i, foreColor: "#fff", opacity: 0 });
    s && o.attr("transform", s), r.globals.dom.Paper.add(o);
    var l = o.bbox();
    return a || (l = o.node.getBoundingClientRect()), o.remove(), { width: l.width, height: l.height };
  } }, { key: "placeTextWithEllipsis", value: function(e, t, i) {
    if (typeof e.getComputedTextLength == "function" && (e.textContent = t, t.length > 0 && e.getComputedTextLength() >= i / 1.1)) {
      for (var s = t.length - 3; s > 0; s -= 3) if (e.getSubStringLength(0, s) <= i / 1.1) return void (e.textContent = t.substring(0, s) + "...");
      e.textContent = ".";
    }
  } }], [{ key: "setAttrs", value: function(e, t) {
    for (var i in t) t.hasOwnProperty(i) && e.setAttribute(i, t[i]);
  } }]), n;
}(), Oe = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w;
  }
  return te(n, [{ key: "getStackedSeriesTotals", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = this.w, i = [];
    if (t.globals.series.length === 0) return i;
    for (var s = 0; s < t.globals.series[t.globals.maxValsInArrayIndex].length; s++) {
      for (var a = 0, r = 0; r < t.globals.series.length; r++) t.globals.series[r][s] !== void 0 && e.indexOf(r) === -1 && (a += t.globals.series[r][s]);
      i.push(a);
    }
    return i;
  } }, { key: "getSeriesTotalByIndex", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    return e === null ? this.w.config.series.reduce(function(t, i) {
      return t + i;
    }, 0) : this.w.globals.series[e].reduce(function(t, i) {
      return t + i;
    }, 0);
  } }, { key: "getStackedSeriesTotalsByGroups", value: function() {
    var e = this, t = this.w, i = [];
    return t.globals.seriesGroups.forEach(function(s) {
      var a = [];
      t.config.series.forEach(function(o, l) {
        s.indexOf(t.globals.seriesNames[l]) > -1 && a.push(l);
      });
      var r = t.globals.series.map(function(o, l) {
        return a.indexOf(l) === -1 ? l : -1;
      }).filter(function(o) {
        return o !== -1;
      });
      i.push(e.getStackedSeriesTotals(r));
    }), i;
  } }, { key: "setSeriesYAxisMappings", value: function() {
    var e = this.w.globals, t = this.w.config, i = [], s = [], a = [], r = e.series.length > t.yaxis.length || t.yaxis.some(function(d) {
      return Array.isArray(d.seriesName);
    });
    t.series.forEach(function(d, u) {
      a.push(u), s.push(null);
    }), t.yaxis.forEach(function(d, u) {
      i[u] = [];
    });
    var o = [];
    t.yaxis.forEach(function(d, u) {
      var g = !1;
      if (d.seriesName) {
        var p = [];
        Array.isArray(d.seriesName) ? p = d.seriesName : p.push(d.seriesName), p.forEach(function(f) {
          t.series.forEach(function(x, m) {
            if (x.name === f) {
              var b = m;
              u === m || r ? !r || a.indexOf(m) > -1 ? i[u].push([u, m]) : console.warn("Series '" + x.name + "' referenced more than once in what looks like the new style. That is, when using either seriesName: [], or when there are more series than yaxes.") : (i[m].push([m, u]), b = u), g = !0, (b = a.indexOf(b)) !== -1 && a.splice(b, 1);
            }
          });
        });
      }
      g || o.push(u);
    }), i = i.map(function(d, u) {
      var g = [];
      return d.forEach(function(p) {
        s[p[1]] = p[0], g.push(p[1]);
      }), g;
    });
    for (var l = t.yaxis.length - 1, c = 0; c < o.length && (l = o[c], i[l] = [], a); c++) {
      var h = a[0];
      a.shift(), i[l].push(h), s[h] = l;
    }
    a.forEach(function(d) {
      i[l].push(d), s[d] = l;
    }), e.seriesYAxisMap = i.map(function(d) {
      return d;
    }), e.seriesYAxisReverseMap = s.map(function(d) {
      return d;
    }), e.seriesYAxisMap.forEach(function(d, u) {
      d.forEach(function(g) {
        t.series[g] && t.series[g].group === void 0 && (t.series[g].group = "apexcharts-axis-".concat(u.toString()));
      });
    });
  } }, { key: "isSeriesNull", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    return (e === null ? this.w.config.series.filter(function(t) {
      return t !== null;
    }) : this.w.config.series[e].data.filter(function(t) {
      return t !== null;
    })).length === 0;
  } }, { key: "seriesHaveSameValues", value: function(e) {
    return this.w.globals.series[e].every(function(t, i, s) {
      return t === s[0];
    });
  } }, { key: "getCategoryLabels", value: function(e) {
    var t = this.w, i = e.slice();
    return t.config.xaxis.convertedCatToNumeric && (i = e.map(function(s, a) {
      return t.config.xaxis.labels.formatter(s - t.globals.minX + 1);
    })), i;
  } }, { key: "getLargestSeries", value: function() {
    var e = this.w;
    e.globals.maxValsInArrayIndex = e.globals.series.map(function(t) {
      return t.length;
    }).indexOf(Math.max.apply(Math, e.globals.series.map(function(t) {
      return t.length;
    })));
  } }, { key: "getLargestMarkerSize", value: function() {
    var e = this.w, t = 0;
    return e.globals.markers.size.forEach(function(i) {
      t = Math.max(t, i);
    }), e.config.markers.discrete && e.config.markers.discrete.length && e.config.markers.discrete.forEach(function(i) {
      t = Math.max(t, i.size);
    }), t > 0 && (e.config.markers.hover.size > 0 ? t = e.config.markers.hover.size : t += e.config.markers.hover.sizeOffset), e.globals.markers.largestSize = t, t;
  } }, { key: "getSeriesTotals", value: function() {
    var e = this.w;
    e.globals.seriesTotals = e.globals.series.map(function(t, i) {
      var s = 0;
      if (Array.isArray(t)) for (var a = 0; a < t.length; a++) s += t[a];
      else s += t;
      return s;
    });
  } }, { key: "getSeriesTotalsXRange", value: function(e, t) {
    var i = this.w;
    return i.globals.series.map(function(s, a) {
      for (var r = 0, o = 0; o < s.length; o++) i.globals.seriesX[a][o] > e && i.globals.seriesX[a][o] < t && (r += s[o]);
      return r;
    });
  } }, { key: "getPercentSeries", value: function() {
    var e = this.w;
    e.globals.seriesPercent = e.globals.series.map(function(t, i) {
      var s = [];
      if (Array.isArray(t)) for (var a = 0; a < t.length; a++) {
        var r = e.globals.stackedSeriesTotals[a], o = 0;
        r && (o = 100 * t[a] / r), s.push(o);
      }
      else {
        var l = 100 * t / e.globals.seriesTotals.reduce(function(c, h) {
          return c + h;
        }, 0);
        s.push(l);
      }
      return s;
    });
  } }, { key: "getCalculatedRatios", value: function() {
    var e, t, i, s = this, a = this.w, r = a.globals, o = [], l = 0, c = [], h = 0.1, d = 0;
    if (r.yRange = [], r.isMultipleYAxis) for (var u = 0; u < r.minYArr.length; u++) r.yRange.push(Math.abs(r.minYArr[u] - r.maxYArr[u])), c.push(0);
    else r.yRange.push(Math.abs(r.minY - r.maxY));
    r.xRange = Math.abs(r.maxX - r.minX), r.zRange = Math.abs(r.maxZ - r.minZ);
    for (var g = 0; g < r.yRange.length; g++) o.push(r.yRange[g] / r.gridHeight);
    if (t = r.xRange / r.gridWidth, e = r.yRange / r.gridWidth, i = r.xRange / r.gridHeight, (l = r.zRange / r.gridHeight * 16) || (l = 1), r.minY !== Number.MIN_VALUE && Math.abs(r.minY) !== 0 && (r.hasNegs = !0), a.globals.seriesYAxisReverseMap.length > 0) {
      var p = function(x, m) {
        var b = a.config.yaxis[a.globals.seriesYAxisReverseMap[m]], w = x < 0 ? -1 : 1;
        return x = Math.abs(x), b.logarithmic && (x = s.getBaseLog(b.logBase, x)), -w * x / o[m];
      };
      if (r.isMultipleYAxis) {
        c = [];
        for (var f = 0; f < o.length; f++) c.push(p(r.minYArr[f], f));
      } else (c = []).push(p(r.minY, 0)), r.minY !== Number.MIN_VALUE && Math.abs(r.minY) !== 0 && (h = -r.minY / e, d = r.minX / t);
    } else (c = []).push(0), h = 0, d = 0;
    return { yRatio: o, invertedYRatio: e, zRatio: l, xRatio: t, invertedXRatio: i, baseLineInvertedY: h, baseLineY: c, baseLineX: d };
  } }, { key: "getLogSeries", value: function(e) {
    var t = this, i = this.w;
    return i.globals.seriesLog = e.map(function(s, a) {
      var r = i.globals.seriesYAxisReverseMap[a];
      return i.config.yaxis[r] && i.config.yaxis[r].logarithmic ? s.map(function(o) {
        return o === null ? null : t.getLogVal(i.config.yaxis[r].logBase, o, a);
      }) : s;
    }), i.globals.invalidLogScale ? e : i.globals.seriesLog;
  } }, { key: "getLogValAtSeriesIndex", value: function(e, t) {
    if (e === null) return null;
    var i = this.w, s = i.globals.seriesYAxisReverseMap[t];
    return i.config.yaxis[s] && i.config.yaxis[s].logarithmic ? this.getLogVal(i.config.yaxis[s].logBase, e, t) : e;
  } }, { key: "getBaseLog", value: function(e, t) {
    return Math.log(t) / Math.log(e);
  } }, { key: "getLogVal", value: function(e, t, i) {
    if (t <= 0) return 0;
    var s = this.w, a = s.globals.minYArr[i] === 0 ? -1 : this.getBaseLog(e, s.globals.minYArr[i]), r = (s.globals.maxYArr[i] === 0 ? 0 : this.getBaseLog(e, s.globals.maxYArr[i])) - a;
    return t < 1 ? t / r : (this.getBaseLog(e, t) - a) / r;
  } }, { key: "getLogYRatios", value: function(e) {
    var t = this, i = this.w, s = this.w.globals;
    return s.yLogRatio = e.slice(), s.logYRange = s.yRange.map(function(a, r) {
      var o = i.globals.seriesYAxisReverseMap[r];
      if (i.config.yaxis[o] && t.w.config.yaxis[o].logarithmic) {
        var l, c = -Number.MAX_VALUE, h = Number.MIN_VALUE;
        return s.seriesLog.forEach(function(d, u) {
          d.forEach(function(g) {
            i.config.yaxis[u] && i.config.yaxis[u].logarithmic && (c = Math.max(g, c), h = Math.min(g, h));
          });
        }), l = Math.pow(s.yRange[r], Math.abs(h - c) / s.yRange[r]), s.yLogRatio[r] = l / s.gridHeight, l;
      }
    }), s.invalidLogScale ? e.slice() : s.yLogRatio;
  } }, { key: "drawSeriesByGroup", value: function(e, t, i, s) {
    var a = this.w, r = [];
    return e.series.length > 0 && t.forEach(function(o) {
      var l = [], c = [];
      e.i.forEach(function(h, d) {
        a.config.series[h].group === o && (l.push(e.series[d]), c.push(h));
      }), l.length > 0 && r.push(s.draw(l, i, c));
    }), r;
  } }], [{ key: "checkComboSeries", value: function(e, t) {
    var i = !1, s = 0, a = 0;
    return t === void 0 && (t = "line"), e.length && e[0].type !== void 0 && e.forEach(function(r) {
      r.type !== "bar" && r.type !== "column" && r.type !== "candlestick" && r.type !== "boxPlot" || s++, r.type !== void 0 && r.type !== t && a++;
    }), a > 0 && (i = !0), { comboBarCount: s, comboCharts: i };
  } }, { key: "extendArrayProps", value: function(e, t, i) {
    var s, a, r, o, l, c;
    return (s = t) !== null && s !== void 0 && s.yaxis && (t = e.extendYAxis(t, i)), (a = t) !== null && a !== void 0 && a.annotations && (t.annotations.yaxis && (t = e.extendYAxisAnnotations(t)), (r = t) !== null && r !== void 0 && (o = r.annotations) !== null && o !== void 0 && o.xaxis && (t = e.extendXAxisAnnotations(t)), (l = t) !== null && l !== void 0 && (c = l.annotations) !== null && c !== void 0 && c.points && (t = e.extendPointAnnotations(t))), t;
  } }]), n;
}(), Gi = function() {
  function n(e) {
    ee(this, n), this.w = e.w, this.annoCtx = e;
  }
  return te(n, [{ key: "setOrientations", value: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, i = this.w;
    if (e.label.orientation === "vertical") {
      var s = t !== null ? t : 0, a = i.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(s, "']"));
      if (a !== null) {
        var r = a.getBoundingClientRect();
        a.setAttribute("x", parseFloat(a.getAttribute("x")) - r.height + 4);
        var o = e.label.position === "top" ? r.width : -r.width;
        a.setAttribute("y", parseFloat(a.getAttribute("y")) + o);
        var l = this.annoCtx.graphics.rotateAroundCenter(a), c = l.x, h = l.y;
        a.setAttribute("transform", "rotate(-90 ".concat(c, " ").concat(h, ")"));
      }
    }
  } }, { key: "addBackgroundToAnno", value: function(e, t) {
    var i = this.w;
    if (!e || !t.label.text || !String(t.label.text).trim()) return null;
    var s = i.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(), a = e.getBoundingClientRect(), r = t.label.style.padding, o = r.left, l = r.right, c = r.top, h = r.bottom;
    if (t.label.orientation === "vertical") {
      var d = [o, l, c, h];
      c = d[0], h = d[1], o = d[2], l = d[3];
    }
    var u = a.left - s.left - o, g = a.top - s.top - c, p = this.annoCtx.graphics.drawRect(u - i.globals.barPadForNumericAxis, g, a.width + o + l, a.height + c + h, t.label.borderRadius, t.label.style.background, 1, t.label.borderWidth, t.label.borderColor, 0);
    return t.id && p.node.classList.add(t.id), p;
  } }, { key: "annotationsBackground", value: function() {
    var e = this, t = this.w, i = function(s, a, r) {
      var o = t.globals.dom.baseEl.querySelector(".apexcharts-".concat(r, "-annotations .apexcharts-").concat(r, "-annotation-label[rel='").concat(a, "']"));
      if (o) {
        var l = o.parentNode, c = e.addBackgroundToAnno(o, s);
        c && (l.insertBefore(c.node, o), s.label.mouseEnter && c.node.addEventListener("mouseenter", s.label.mouseEnter.bind(e, s)), s.label.mouseLeave && c.node.addEventListener("mouseleave", s.label.mouseLeave.bind(e, s)), s.label.click && c.node.addEventListener("click", s.label.click.bind(e, s)));
      }
    };
    t.config.annotations.xaxis.forEach(function(s, a) {
      return i(s, a, "xaxis");
    }), t.config.annotations.yaxis.forEach(function(s, a) {
      return i(s, a, "yaxis");
    }), t.config.annotations.points.forEach(function(s, a) {
      return i(s, a, "point");
    });
  } }, { key: "getY1Y2", value: function(e, t) {
    var i, s = this.w, a = e === "y1" ? t.y : t.y2, r = !1;
    if (this.annoCtx.invertAxis) {
      var o = s.config.xaxis.convertedCatToNumeric ? s.globals.categoryLabels : s.globals.labels, l = o.indexOf(a), c = s.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child(".concat(l + 1, ")"));
      i = c ? parseFloat(c.getAttribute("y")) : (s.globals.gridHeight / o.length - 1) * (l + 1) - s.globals.barHeight, t.seriesIndex !== void 0 && s.globals.barHeight && (i -= s.globals.barHeight / 2 * (s.globals.series.length - 1) - s.globals.barHeight * t.seriesIndex);
    } else {
      var h, d = s.globals.seriesYAxisMap[t.yAxisIndex][0], u = s.config.yaxis[t.yAxisIndex].logarithmic ? new Oe(this.annoCtx.ctx).getLogVal(s.config.yaxis[t.yAxisIndex].logBase, a, d) / s.globals.yLogRatio[d] : (a - s.globals.minYArr[d]) / (s.globals.yRange[d] / s.globals.gridHeight);
      i = s.globals.gridHeight - Math.min(Math.max(u, 0), s.globals.gridHeight), r = u > s.globals.gridHeight || u < 0, !t.marker || t.y !== void 0 && t.y !== null || (i = 0), (h = s.config.yaxis[t.yAxisIndex]) !== null && h !== void 0 && h.reversed && (i = u);
    }
    return typeof a == "string" && a.includes("px") && (i = parseFloat(a)), { yP: i, clipped: r };
  } }, { key: "getX1X2", value: function(e, t) {
    var i = this.w, s = e === "x1" ? t.x : t.x2, a = this.annoCtx.invertAxis ? i.globals.minY : i.globals.minX, r = this.annoCtx.invertAxis ? i.globals.maxY : i.globals.maxX, o = this.annoCtx.invertAxis ? i.globals.yRange[0] : i.globals.xRange, l = !1, c = this.annoCtx.inversedReversedAxis ? (r - s) / (o / i.globals.gridWidth) : (s - a) / (o / i.globals.gridWidth);
    return i.config.xaxis.type !== "category" && !i.config.xaxis.convertedCatToNumeric || this.annoCtx.invertAxis || i.globals.dataFormatXNumeric || i.config.chart.sparkline.enabled || (c = this.getStringX(s)), typeof s == "string" && s.includes("px") && (c = parseFloat(s)), s == null && t.marker && (c = i.globals.gridWidth), t.seriesIndex !== void 0 && i.globals.barWidth && !this.annoCtx.invertAxis && (c -= i.globals.barWidth / 2 * (i.globals.series.length - 1) - i.globals.barWidth * t.seriesIndex), typeof c != "number" && (c = 0, l = !0), parseFloat(c.toFixed(10)) > parseFloat(i.globals.gridWidth.toFixed(10)) ? (c = i.globals.gridWidth, l = !0) : c < 0 && (c = 0, l = !0), { x: c, clipped: l };
  } }, { key: "getStringX", value: function(e) {
    var t = this.w, i = e;
    t.config.xaxis.convertedCatToNumeric && t.globals.categoryLabels.length && (e = t.globals.categoryLabels.indexOf(e) + 1);
    var s = t.globals.labels.map(function(r) {
      return Array.isArray(r) ? r.join(" ") : r;
    }).indexOf(e), a = t.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child(".concat(s + 1, ")"));
    return a && (i = parseFloat(a.getAttribute("x"))), i;
  } }]), n;
}(), ih = function() {
  function n(e) {
    ee(this, n), this.w = e.w, this.annoCtx = e, this.invertAxis = this.annoCtx.invertAxis, this.helpers = new Gi(this.annoCtx);
  }
  return te(n, [{ key: "addXaxisAnnotation", value: function(e, t, i) {
    var s, a = this.w, r = this.helpers.getX1X2("x1", e), o = r.x, l = r.clipped, c = !0, h = e.label.text, d = e.strokeDashArray;
    if (_.isNumber(o)) {
      if (e.x2 === null || e.x2 === void 0) {
        if (!l) {
          var u = this.annoCtx.graphics.drawLine(o + e.offsetX, 0 + e.offsetY, o + e.offsetX, a.globals.gridHeight + e.offsetY, e.borderColor, d, e.borderWidth);
          t.appendChild(u.node), e.id && u.node.classList.add(e.id);
        }
      } else {
        var g = this.helpers.getX1X2("x2", e);
        if (s = g.x, c = g.clipped, s < o) {
          var p = o;
          o = s, s = p;
        }
        var f = this.annoCtx.graphics.drawRect(o + e.offsetX, 0 + e.offsetY, s - o, a.globals.gridHeight + e.offsetY, 0, e.fillColor, e.opacity, 1, e.borderColor, d);
        f.node.classList.add("apexcharts-annotation-rect"), f.attr("clip-path", "url(#gridRectMask".concat(a.globals.cuid, ")")), t.appendChild(f.node), e.id && f.node.classList.add(e.id);
      }
      if (!l || !c) {
        var x = this.annoCtx.graphics.getTextRects(h, parseFloat(e.label.style.fontSize)), m = e.label.position === "top" ? 4 : e.label.position === "center" ? a.globals.gridHeight / 2 + (e.label.orientation === "vertical" ? x.width / 2 : 0) : a.globals.gridHeight, b = this.annoCtx.graphics.drawText({ x: o + e.label.offsetX, y: m + e.label.offsetY - (e.label.orientation === "vertical" ? e.label.position === "top" ? x.width / 2 - 12 : -x.width / 2 : 0), text: h, textAnchor: e.label.textAnchor, fontSize: e.label.style.fontSize, fontFamily: e.label.style.fontFamily, fontWeight: e.label.style.fontWeight, foreColor: e.label.style.color, cssClass: "apexcharts-xaxis-annotation-label ".concat(e.label.style.cssClass, " ").concat(e.id ? e.id : "") });
        b.attr({ rel: i }), t.appendChild(b.node), this.annoCtx.helpers.setOrientations(e, i);
      }
    }
  } }, { key: "drawXAxisAnnotations", value: function() {
    var e = this, t = this.w, i = this.annoCtx.graphics.group({ class: "apexcharts-xaxis-annotations" });
    return t.config.annotations.xaxis.map(function(s, a) {
      e.addXaxisAnnotation(s, i.node, a);
    }), i;
  } }]), n;
}(), Ye = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w, this.months31 = [1, 3, 5, 7, 8, 10, 12], this.months30 = [2, 4, 6, 9, 11], this.daysCntOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  }
  return te(n, [{ key: "isValidDate", value: function(e) {
    return typeof e != "number" && !isNaN(this.parseDate(e));
  } }, { key: "getTimeStamp", value: function(e) {
    return Date.parse(e) ? this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(e).toISOString().substr(0, 25)).getTime() : new Date(e).getTime() : e;
  } }, { key: "getDate", value: function(e) {
    return this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(e).toUTCString()) : new Date(e);
  } }, { key: "parseDate", value: function(e) {
    var t = Date.parse(e);
    if (!isNaN(t)) return this.getTimeStamp(e);
    var i = Date.parse(e.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
    return i = this.getTimeStamp(i);
  } }, { key: "parseDateWithTimezone", value: function(e) {
    return Date.parse(e.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
  } }, { key: "formatDate", value: function(e, t) {
    var i = this.w.globals.locale, s = this.w.config.xaxis.labels.datetimeUTC, a = ["\0"].concat(_e(i.months)), r = [""].concat(_e(i.shortMonths)), o = [""].concat(_e(i.days)), l = [""].concat(_e(i.shortDays));
    function c(S, C) {
      var L = S + "";
      for (C = C || 2; L.length < C; ) L = "0" + L;
      return L;
    }
    var h = s ? e.getUTCFullYear() : e.getFullYear();
    t = (t = (t = t.replace(/(^|[^\\])yyyy+/g, "$1" + h)).replace(/(^|[^\\])yy/g, "$1" + h.toString().substr(2, 2))).replace(/(^|[^\\])y/g, "$1" + h);
    var d = (s ? e.getUTCMonth() : e.getMonth()) + 1;
    t = (t = (t = (t = t.replace(/(^|[^\\])MMMM+/g, "$1" + a[0])).replace(/(^|[^\\])MMM/g, "$1" + r[0])).replace(/(^|[^\\])MM/g, "$1" + c(d))).replace(/(^|[^\\])M/g, "$1" + d);
    var u = s ? e.getUTCDate() : e.getDate();
    t = (t = (t = (t = t.replace(/(^|[^\\])dddd+/g, "$1" + o[0])).replace(/(^|[^\\])ddd/g, "$1" + l[0])).replace(/(^|[^\\])dd/g, "$1" + c(u))).replace(/(^|[^\\])d/g, "$1" + u);
    var g = s ? e.getUTCHours() : e.getHours(), p = g > 12 ? g - 12 : g === 0 ? 12 : g;
    t = (t = (t = (t = t.replace(/(^|[^\\])HH+/g, "$1" + c(g))).replace(/(^|[^\\])H/g, "$1" + g)).replace(/(^|[^\\])hh+/g, "$1" + c(p))).replace(/(^|[^\\])h/g, "$1" + p);
    var f = s ? e.getUTCMinutes() : e.getMinutes();
    t = (t = t.replace(/(^|[^\\])mm+/g, "$1" + c(f))).replace(/(^|[^\\])m/g, "$1" + f);
    var x = s ? e.getUTCSeconds() : e.getSeconds();
    t = (t = t.replace(/(^|[^\\])ss+/g, "$1" + c(x))).replace(/(^|[^\\])s/g, "$1" + x);
    var m = s ? e.getUTCMilliseconds() : e.getMilliseconds();
    t = t.replace(/(^|[^\\])fff+/g, "$1" + c(m, 3)), m = Math.round(m / 10), t = t.replace(/(^|[^\\])ff/g, "$1" + c(m)), m = Math.round(m / 10);
    var b = g < 12 ? "AM" : "PM";
    t = (t = (t = t.replace(/(^|[^\\])f/g, "$1" + m)).replace(/(^|[^\\])TT+/g, "$1" + b)).replace(/(^|[^\\])T/g, "$1" + b.charAt(0));
    var w = b.toLowerCase();
    t = (t = t.replace(/(^|[^\\])tt+/g, "$1" + w)).replace(/(^|[^\\])t/g, "$1" + w.charAt(0));
    var y = -e.getTimezoneOffset(), v = s || !y ? "Z" : y > 0 ? "+" : "-";
    if (!s) {
      var k = (y = Math.abs(y)) % 60;
      v += c(Math.floor(y / 60)) + ":" + c(k);
    }
    t = t.replace(/(^|[^\\])K/g, "$1" + v);
    var A = (s ? e.getUTCDay() : e.getDay()) + 1;
    return t = (t = (t = (t = (t = t.replace(new RegExp(o[0], "g"), o[A])).replace(new RegExp(l[0], "g"), l[A])).replace(new RegExp(a[0], "g"), a[d])).replace(new RegExp(r[0], "g"), r[d])).replace(/\\(.)/g, "$1");
  } }, { key: "getTimeUnitsfromTimestamp", value: function(e, t, i) {
    var s = this.w;
    s.config.xaxis.min !== void 0 && (e = s.config.xaxis.min), s.config.xaxis.max !== void 0 && (t = s.config.xaxis.max);
    var a = this.getDate(e), r = this.getDate(t), o = this.formatDate(a, "yyyy MM dd HH mm ss fff").split(" "), l = this.formatDate(r, "yyyy MM dd HH mm ss fff").split(" ");
    return { minMillisecond: parseInt(o[6], 10), maxMillisecond: parseInt(l[6], 10), minSecond: parseInt(o[5], 10), maxSecond: parseInt(l[5], 10), minMinute: parseInt(o[4], 10), maxMinute: parseInt(l[4], 10), minHour: parseInt(o[3], 10), maxHour: parseInt(l[3], 10), minDate: parseInt(o[2], 10), maxDate: parseInt(l[2], 10), minMonth: parseInt(o[1], 10) - 1, maxMonth: parseInt(l[1], 10) - 1, minYear: parseInt(o[0], 10), maxYear: parseInt(l[0], 10) };
  } }, { key: "isLeapYear", value: function(e) {
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
  } }, { key: "calculcateLastDaysOfMonth", value: function(e, t, i) {
    return this.determineDaysOfMonths(e, t) - i;
  } }, { key: "determineDaysOfYear", value: function(e) {
    var t = 365;
    return this.isLeapYear(e) && (t = 366), t;
  } }, { key: "determineRemainingDaysOfYear", value: function(e, t, i) {
    var s = this.daysCntOfYear[t] + i;
    return t > 1 && this.isLeapYear() && s++, s;
  } }, { key: "determineDaysOfMonths", value: function(e, t) {
    var i = 30;
    switch (e = _.monthMod(e), !0) {
      case this.months30.indexOf(e) > -1:
        e === 2 && (i = this.isLeapYear(t) ? 29 : 28);
        break;
      case this.months31.indexOf(e) > -1:
      default:
        i = 31;
    }
    return i;
  } }]), n;
}(), wi = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w, this.tooltipKeyFormat = "dd MMM";
  }
  return te(n, [{ key: "xLabelFormat", value: function(e, t, i, s) {
    var a = this.w;
    if (a.config.xaxis.type === "datetime" && a.config.xaxis.labels.formatter === void 0 && a.config.tooltip.x.formatter === void 0) {
      var r = new Ye(this.ctx);
      return r.formatDate(r.getDate(t), a.config.tooltip.x.format);
    }
    return e(t, i, s);
  } }, { key: "defaultGeneralFormatter", value: function(e) {
    return Array.isArray(e) ? e.map(function(t) {
      return t;
    }) : e;
  } }, { key: "defaultYFormatter", value: function(e, t, i) {
    var s = this.w;
    if (_.isNumber(e)) if (s.globals.yValueDecimal !== 0) e = e.toFixed(t.decimalsInFloat !== void 0 ? t.decimalsInFloat : s.globals.yValueDecimal);
    else {
      var a = e.toFixed(0);
      e = e == a ? a : e.toFixed(1);
    }
    return e;
  } }, { key: "setLabelFormatters", value: function() {
    var e = this, t = this.w;
    return t.globals.xaxisTooltipFormatter = function(i) {
      return e.defaultGeneralFormatter(i);
    }, t.globals.ttKeyFormatter = function(i) {
      return e.defaultGeneralFormatter(i);
    }, t.globals.ttZFormatter = function(i) {
      return i;
    }, t.globals.legendFormatter = function(i) {
      return e.defaultGeneralFormatter(i);
    }, t.config.xaxis.labels.formatter !== void 0 ? t.globals.xLabelFormatter = t.config.xaxis.labels.formatter : t.globals.xLabelFormatter = function(i) {
      if (_.isNumber(i)) {
        if (!t.config.xaxis.convertedCatToNumeric && t.config.xaxis.type === "numeric") {
          if (_.isNumber(t.config.xaxis.decimalsInFloat)) return i.toFixed(t.config.xaxis.decimalsInFloat);
          var s = t.globals.maxX - t.globals.minX;
          return s > 0 && s < 100 ? i.toFixed(1) : i.toFixed(0);
        }
        return t.globals.isBarHorizontal && t.globals.maxY - t.globals.minYArr < 4 ? i.toFixed(1) : i.toFixed(0);
      }
      return i;
    }, typeof t.config.tooltip.x.formatter == "function" ? t.globals.ttKeyFormatter = t.config.tooltip.x.formatter : t.globals.ttKeyFormatter = t.globals.xLabelFormatter, typeof t.config.xaxis.tooltip.formatter == "function" && (t.globals.xaxisTooltipFormatter = t.config.xaxis.tooltip.formatter), (Array.isArray(t.config.tooltip.y) || t.config.tooltip.y.formatter !== void 0) && (t.globals.ttVal = t.config.tooltip.y), t.config.tooltip.z.formatter !== void 0 && (t.globals.ttZFormatter = t.config.tooltip.z.formatter), t.config.legend.formatter !== void 0 && (t.globals.legendFormatter = t.config.legend.formatter), t.config.yaxis.forEach(function(i, s) {
      i.labels.formatter !== void 0 ? t.globals.yLabelFormatters[s] = i.labels.formatter : t.globals.yLabelFormatters[s] = function(a) {
        return t.globals.xyCharts ? Array.isArray(a) ? a.map(function(r) {
          return e.defaultYFormatter(r, i, s);
        }) : e.defaultYFormatter(a, i, s) : a;
      };
    }), t.globals;
  } }, { key: "heatmapLabelFormatters", value: function() {
    var e = this.w;
    if (e.config.chart.type === "heatmap") {
      e.globals.yAxisScale[0].result = e.globals.seriesNames.slice();
      var t = e.globals.seriesNames.reduce(function(i, s) {
        return i.length > s.length ? i : s;
      }, 0);
      e.globals.yAxisScale[0].niceMax = t, e.globals.yAxisScale[0].niceMin = t;
    }
  } }]), n;
}(), vt = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w;
  }
  return te(n, [{ key: "getLabel", value: function(e, t, i, s) {
    var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "12px", o = !(arguments.length > 6 && arguments[6] !== void 0) || arguments[6], l = this.w, c = e[s] === void 0 ? "" : e[s], h = c, d = l.globals.xLabelFormatter, u = l.config.xaxis.labels.formatter, g = !1, p = new wi(this.ctx), f = c;
    o && (h = p.xLabelFormat(d, c, f, { i: s, dateFormatter: new Ye(this.ctx).formatDate, w: l }), u !== void 0 && (h = u(c, e[s], { i: s, dateFormatter: new Ye(this.ctx).formatDate, w: l })));
    var x, m;
    t.length > 0 ? (x = t[s].unit, m = null, t.forEach(function(v) {
      v.unit === "month" ? m = "year" : v.unit === "day" ? m = "month" : v.unit === "hour" ? m = "day" : v.unit === "minute" && (m = "hour");
    }), g = m === x, i = t[s].position, h = t[s].value) : l.config.xaxis.type === "datetime" && u === void 0 && (h = ""), h === void 0 && (h = ""), h = Array.isArray(h) ? h : h.toString();
    var b = new W(this.ctx), w = {};
    w = l.globals.rotateXLabels && o ? b.getTextRects(h, parseInt(r, 10), null, "rotate(".concat(l.config.xaxis.labels.rotate, " 0 0)"), !1) : b.getTextRects(h, parseInt(r, 10));
    var y = !l.config.xaxis.labels.showDuplicates && this.ctx.timeScale;
    return !Array.isArray(h) && (String(h) === "NaN" || a.indexOf(h) >= 0 && y) && (h = ""), { x: i, text: h, textRect: w, isBold: g };
  } }, { key: "checkLabelBasedOnTickamount", value: function(e, t, i) {
    var s = this.w, a = s.config.xaxis.tickAmount;
    return a === "dataPoints" && (a = Math.round(s.globals.gridWidth / 120)), a > i || e % Math.round(i / (a + 1)) == 0 || (t.text = ""), t;
  } }, { key: "checkForOverflowingLabels", value: function(e, t, i, s, a) {
    var r = this.w;
    if (e === 0 && r.globals.skipFirstTimelinelabel && (t.text = ""), e === i - 1 && r.globals.skipLastTimelinelabel && (t.text = ""), r.config.xaxis.labels.hideOverlappingLabels && s.length > 0) {
      var o = a[a.length - 1];
      t.x < o.textRect.width / (r.globals.rotateXLabels ? Math.abs(r.config.xaxis.labels.rotate) / 12 : 1.01) + o.x && (t.text = "");
    }
    return t;
  } }, { key: "checkForReversedLabels", value: function(e, t) {
    var i = this.w;
    return i.config.yaxis[e] && i.config.yaxis[e].reversed && t.reverse(), t;
  } }, { key: "yAxisAllSeriesCollapsed", value: function(e) {
    var t = this.w.globals;
    return !t.seriesYAxisMap[e].some(function(i) {
      return t.collapsedSeriesIndices.indexOf(i) === -1;
    });
  } }, { key: "translateYAxisIndex", value: function(e) {
    var t = this.w, i = t.globals, s = t.config.yaxis;
    return i.series.length > s.length || s.some(function(a) {
      return Array.isArray(a.seriesName);
    }) ? e : i.seriesYAxisReverseMap[e];
  } }, { key: "isYAxisHidden", value: function(e) {
    var t = this.w, i = t.config.yaxis[e];
    if (!i.show || this.yAxisAllSeriesCollapsed(e)) return !0;
    if (!i.showForNullSeries) {
      var s = t.globals.seriesYAxisMap[e], a = new Oe(this.ctx);
      return s.every(function(r) {
        return a.isSeriesNull(r);
      });
    }
    return !1;
  } }, { key: "getYAxisForeColor", value: function(e, t) {
    var i = this.w;
    return Array.isArray(e) && i.globals.yAxisScale[t] && this.ctx.theme.pushExtraColors(e, i.globals.yAxisScale[t].result.length, !1), e;
  } }, { key: "drawYAxisTicks", value: function(e, t, i, s, a, r, o) {
    var l = this.w, c = new W(this.ctx), h = l.globals.translateY + l.config.yaxis[a].labels.offsetY;
    if (l.globals.isBarHorizontal ? h = 0 : l.config.chart.type === "heatmap" && (h += r / 2), s.show && t > 0) {
      l.config.yaxis[a].opposite === !0 && (e += s.width);
      for (var d = t; d >= 0; d--) {
        var u = c.drawLine(e + i.offsetX - s.width + s.offsetX, h + s.offsetY, e + i.offsetX + s.offsetX, h + s.offsetY, s.color);
        o.add(u), h += r;
      }
    }
  } }]), n;
}(), sh = function() {
  function n(e) {
    ee(this, n), this.w = e.w, this.annoCtx = e, this.helpers = new Gi(this.annoCtx), this.axesUtils = new vt(this.annoCtx);
  }
  return te(n, [{ key: "addYaxisAnnotation", value: function(e, t, i) {
    var s, a = this.w, r = e.strokeDashArray, o = this.helpers.getY1Y2("y1", e), l = o.yP, c = o.clipped, h = !0, d = !1, u = e.label.text;
    if (e.y2 === null || e.y2 === void 0) {
      if (!c) {
        d = !0;
        var g = this.annoCtx.graphics.drawLine(0 + e.offsetX, l + e.offsetY, this._getYAxisAnnotationWidth(e), l + e.offsetY, e.borderColor, r, e.borderWidth);
        t.appendChild(g.node), e.id && g.node.classList.add(e.id);
      }
    } else {
      if (s = (o = this.helpers.getY1Y2("y2", e)).yP, h = o.clipped, s > l) {
        var p = l;
        l = s, s = p;
      }
      if (!c || !h) {
        d = !0;
        var f = this.annoCtx.graphics.drawRect(0 + e.offsetX, s + e.offsetY, this._getYAxisAnnotationWidth(e), l - s, 0, e.fillColor, e.opacity, 1, e.borderColor, r);
        f.node.classList.add("apexcharts-annotation-rect"), f.attr("clip-path", "url(#gridRectMask".concat(a.globals.cuid, ")")), t.appendChild(f.node), e.id && f.node.classList.add(e.id);
      }
    }
    if (d) {
      var x = e.label.position === "right" ? a.globals.gridWidth : e.label.position === "center" ? a.globals.gridWidth / 2 : 0, m = this.annoCtx.graphics.drawText({ x: x + e.label.offsetX, y: (s ?? l) + e.label.offsetY - 3, text: u, textAnchor: e.label.textAnchor, fontSize: e.label.style.fontSize, fontFamily: e.label.style.fontFamily, fontWeight: e.label.style.fontWeight, foreColor: e.label.style.color, cssClass: "apexcharts-yaxis-annotation-label ".concat(e.label.style.cssClass, " ").concat(e.id ? e.id : "") });
      m.attr({ rel: i }), t.appendChild(m.node);
    }
  } }, { key: "_getYAxisAnnotationWidth", value: function(e) {
    var t = this.w;
    return t.globals.gridWidth, (e.width.indexOf("%") > -1 ? t.globals.gridWidth * parseInt(e.width, 10) / 100 : parseInt(e.width, 10)) + e.offsetX;
  } }, { key: "drawYAxisAnnotations", value: function() {
    var e = this, t = this.w, i = this.annoCtx.graphics.group({ class: "apexcharts-yaxis-annotations" });
    return t.config.annotations.yaxis.forEach(function(s, a) {
      s.yAxisIndex = e.axesUtils.translateYAxisIndex(s.yAxisIndex), e.axesUtils.isYAxisHidden(s.yAxisIndex) && e.axesUtils.yAxisAllSeriesCollapsed(s.yAxisIndex) || e.addYaxisAnnotation(s, i.node, a);
    }), i;
  } }]), n;
}(), ah = function() {
  function n(e) {
    ee(this, n), this.w = e.w, this.annoCtx = e, this.helpers = new Gi(this.annoCtx);
  }
  return te(n, [{ key: "addPointAnnotation", value: function(e, t, i) {
    if (!(this.w.globals.collapsedSeriesIndices.indexOf(e.seriesIndex) > -1)) {
      var s = this.helpers.getX1X2("x1", e), a = s.x, r = s.clipped, o = (s = this.helpers.getY1Y2("y1", e)).yP, l = s.clipped;
      if (_.isNumber(a) && !l && !r) {
        var c = { pSize: e.marker.size, pointStrokeWidth: e.marker.strokeWidth, pointFillColor: e.marker.fillColor, pointStrokeColor: e.marker.strokeColor, shape: e.marker.shape, pRadius: e.marker.radius, class: "apexcharts-point-annotation-marker ".concat(e.marker.cssClass, " ").concat(e.id ? e.id : "") }, h = this.annoCtx.graphics.drawMarker(a + e.marker.offsetX, o + e.marker.offsetY, c);
        t.appendChild(h.node);
        var d = e.label.text ? e.label.text : "", u = this.annoCtx.graphics.drawText({ x: a + e.label.offsetX, y: o + e.label.offsetY - e.marker.size - parseFloat(e.label.style.fontSize) / 1.6, text: d, textAnchor: e.label.textAnchor, fontSize: e.label.style.fontSize, fontFamily: e.label.style.fontFamily, fontWeight: e.label.style.fontWeight, foreColor: e.label.style.color, cssClass: "apexcharts-point-annotation-label ".concat(e.label.style.cssClass, " ").concat(e.id ? e.id : "") });
        if (u.attr({ rel: i }), t.appendChild(u.node), e.customSVG.SVG) {
          var g = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations-custom-svg " + e.customSVG.cssClass });
          g.attr({ transform: "translate(".concat(a + e.customSVG.offsetX, ", ").concat(o + e.customSVG.offsetY, ")") }), g.node.innerHTML = e.customSVG.SVG, t.appendChild(g.node);
        }
        if (e.image.path) {
          var p = e.image.width ? e.image.width : 20, f = e.image.height ? e.image.height : 20;
          h = this.annoCtx.addImage({ x: a + e.image.offsetX - p / 2, y: o + e.image.offsetY - f / 2, width: p, height: f, path: e.image.path, appendTo: ".apexcharts-point-annotations" });
        }
        e.mouseEnter && h.node.addEventListener("mouseenter", e.mouseEnter.bind(this, e)), e.mouseLeave && h.node.addEventListener("mouseleave", e.mouseLeave.bind(this, e)), e.click && h.node.addEventListener("click", e.click.bind(this, e));
      }
    }
  } }, { key: "drawPointAnnotations", value: function() {
    var e = this, t = this.w, i = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations" });
    return t.config.annotations.points.map(function(s, a) {
      e.addPointAnnotation(s, i.node, a);
    }), i;
  } }]), n;
}(), Hn = { name: "en", options: { months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], toolbar: { exportToSVG: "Download SVG", exportToPNG: "Download PNG", exportToCSV: "Download CSV", menu: "Menu", selection: "Selection", selectionZoom: "Selection Zoom", zoomIn: "Zoom In", zoomOut: "Zoom Out", pan: "Panning", reset: "Reset Zoom" } } }, At = function() {
  function n() {
    ee(this, n), this.yAxis = { show: !0, showAlways: !1, showForNullSeries: !0, seriesName: void 0, opposite: !1, reversed: !1, logarithmic: !1, logBase: 10, tickAmount: void 0, stepSize: void 0, forceNiceScale: !1, max: void 0, min: void 0, floating: !1, decimalsInFloat: void 0, labels: { show: !0, showDuplicates: !1, minWidth: 0, maxWidth: 160, offsetX: 0, offsetY: 0, align: void 0, rotate: 0, padding: 20, style: { colors: [], fontSize: "11px", fontWeight: 400, fontFamily: void 0, cssClass: "" }, formatter: void 0 }, axisBorder: { show: !1, color: "#e0e0e0", width: 1, offsetX: 0, offsetY: 0 }, axisTicks: { show: !1, color: "#e0e0e0", width: 6, offsetX: 0, offsetY: 0 }, title: { text: void 0, rotate: -90, offsetY: 0, offsetX: 0, style: { color: void 0, fontSize: "11px", fontWeight: 900, fontFamily: void 0, cssClass: "" } }, tooltip: { enabled: !1, offsetX: 0 }, crosshairs: { show: !0, position: "front", stroke: { color: "#b6b6b6", width: 1, dashArray: 0 } } }, this.pointAnnotation = { id: void 0, x: 0, y: null, yAxisIndex: 0, seriesIndex: void 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, marker: { size: 4, fillColor: "#fff", strokeWidth: 2, strokeColor: "#333", shape: "circle", offsetX: 0, offsetY: 0, cssClass: "" }, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "middle", offsetX: 0, offsetY: 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } }, customSVG: { SVG: void 0, cssClass: void 0, offsetX: 0, offsetY: 0 }, image: { path: void 0, width: 20, height: 20, offsetX: 0, offsetY: 0 } }, this.yAxisAnnotation = { id: void 0, y: 0, y2: null, strokeDashArray: 1, fillColor: "#c2c2c2", borderColor: "#c2c2c2", borderWidth: 1, opacity: 0.3, offsetX: 0, offsetY: 0, width: "100%", yAxisIndex: 0, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "end", position: "right", offsetX: 0, offsetY: -3, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } } }, this.xAxisAnnotation = { id: void 0, x: 0, x2: null, strokeDashArray: 1, fillColor: "#c2c2c2", borderColor: "#c2c2c2", borderWidth: 1, opacity: 0.3, offsetX: 0, offsetY: 0, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "middle", orientation: "vertical", position: "top", offsetX: 0, offsetY: 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } } }, this.text = { x: 0, y: 0, text: "", textAnchor: "start", foreColor: void 0, fontSize: "13px", fontFamily: void 0, fontWeight: 400, appendTo: ".apexcharts-annotations", backgroundColor: "transparent", borderColor: "#c2c2c2", borderRadius: 0, borderWidth: 0, paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2 };
  }
  return te(n, [{ key: "init", value: function() {
    return { annotations: { yaxis: [this.yAxisAnnotation], xaxis: [this.xAxisAnnotation], points: [this.pointAnnotation], texts: [], images: [], shapes: [] }, chart: { animations: { enabled: !0, speed: 800, animateGradually: { delay: 150, enabled: !0 }, dynamicAnimation: { enabled: !0, speed: 350 } }, background: "", locales: [Hn], defaultLocale: "en", dropShadow: { enabled: !1, enabledOnSeries: void 0, top: 2, left: 2, blur: 4, color: "#000", opacity: 0.7 }, events: { animationEnd: void 0, beforeMount: void 0, mounted: void 0, updated: void 0, click: void 0, mouseMove: void 0, mouseLeave: void 0, xAxisLabelClick: void 0, legendClick: void 0, markerClick: void 0, selection: void 0, dataPointSelection: void 0, dataPointMouseEnter: void 0, dataPointMouseLeave: void 0, beforeZoom: void 0, beforeResetZoom: void 0, zoomed: void 0, scrolled: void 0, brushScrolled: void 0 }, foreColor: "#373d3f", fontFamily: "Helvetica, Arial, sans-serif", height: "auto", parentHeightOffset: 15, redrawOnParentResize: !0, redrawOnWindowResize: !0, id: void 0, group: void 0, nonce: void 0, offsetX: 0, offsetY: 0, selection: { enabled: !1, type: "x", fill: { color: "#24292e", opacity: 0.1 }, stroke: { width: 1, color: "#24292e", opacity: 0.4, dashArray: 3 }, xaxis: { min: void 0, max: void 0 }, yaxis: { min: void 0, max: void 0 } }, sparkline: { enabled: !1 }, brush: { enabled: !1, autoScaleYaxis: !0, target: void 0, targets: void 0 }, stacked: !1, stackOnlyBar: !0, stackType: "normal", toolbar: { show: !0, offsetX: 0, offsetY: 0, tools: { download: !0, selection: !0, zoom: !0, zoomin: !0, zoomout: !0, pan: !0, reset: !0, customIcons: [] }, export: { csv: { filename: void 0, columnDelimiter: ",", headerCategory: "category", headerValue: "value", categoryFormatter: void 0, valueFormatter: void 0 }, png: { filename: void 0 }, svg: { filename: void 0 }, scale: void 0, width: void 0 }, autoSelected: "zoom" }, type: "line", width: "100%", zoom: { enabled: !0, type: "x", autoScaleYaxis: !1, allowMouseWheelZoom: !0, zoomedArea: { fill: { color: "#90CAF9", opacity: 0.4 }, stroke: { color: "#0D47A1", opacity: 0.4, width: 1 } } } }, plotOptions: { line: { isSlopeChart: !1, colors: { threshold: 0, colorAboveThreshold: void 0, colorBelowThreshold: void 0 } }, area: { fillTo: "origin" }, bar: { horizontal: !1, columnWidth: "70%", barHeight: "70%", distributed: !1, borderRadius: 0, borderRadiusApplication: "around", borderRadiusWhenStacked: "last", rangeBarOverlap: !0, rangeBarGroupRows: !1, hideZeroBarsWhenGrouped: !1, isDumbbell: !1, dumbbellColors: void 0, isFunnel: !1, isFunnel3d: !0, colors: { ranges: [], backgroundBarColors: [], backgroundBarOpacity: 1, backgroundBarRadius: 0 }, dataLabels: { position: "top", maxItems: 100, hideOverflowingLabels: !0, orientation: "horizontal", total: { enabled: !1, formatter: void 0, offsetX: 0, offsetY: 0, style: { color: "#373d3f", fontSize: "12px", fontFamily: void 0, fontWeight: 600 } } } }, bubble: { zScaling: !0, minBubbleRadius: void 0, maxBubbleRadius: void 0 }, candlestick: { colors: { upward: "#00B746", downward: "#EF403C" }, wick: { useFillColor: !0 } }, boxPlot: { colors: { upper: "#00E396", lower: "#008FFB" } }, heatmap: { radius: 2, enableShades: !0, shadeIntensity: 0.5, reverseNegativeShade: !1, distributed: !1, useFillColorAsStroke: !1, colorScale: { inverse: !1, ranges: [], min: void 0, max: void 0 } }, treemap: { enableShades: !0, shadeIntensity: 0.5, distributed: !1, reverseNegativeShade: !1, useFillColorAsStroke: !1, borderRadius: 4, dataLabels: { format: "scale" }, colorScale: { inverse: !1, ranges: [], min: void 0, max: void 0 }, seriesTitle: { show: !0, offsetY: 1, offsetX: 1, borderColor: "#000", borderWidth: 1, borderRadius: 2, style: { background: "rgba(0, 0, 0, 0.6)", color: "#fff", fontSize: "12px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 6, right: 6, top: 2, bottom: 2 } } } }, radialBar: { inverseOrder: !1, startAngle: 0, endAngle: 360, offsetX: 0, offsetY: 0, hollow: { margin: 5, size: "50%", background: "transparent", image: void 0, imageWidth: 150, imageHeight: 150, imageOffsetX: 0, imageOffsetY: 0, imageClipped: !0, position: "front", dropShadow: { enabled: !1, top: 0, left: 0, blur: 3, color: "#000", opacity: 0.5 } }, track: { show: !0, startAngle: void 0, endAngle: void 0, background: "#f2f2f2", strokeWidth: "97%", opacity: 1, margin: 5, dropShadow: { enabled: !1, top: 0, left: 0, blur: 3, color: "#000", opacity: 0.5 } }, dataLabels: { show: !0, name: { show: !0, fontSize: "16px", fontFamily: void 0, fontWeight: 600, color: void 0, offsetY: 0, formatter: function(e) {
      return e;
    } }, value: { show: !0, fontSize: "14px", fontFamily: void 0, fontWeight: 400, color: void 0, offsetY: 16, formatter: function(e) {
      return e + "%";
    } }, total: { show: !1, label: "Total", fontSize: "16px", fontWeight: 600, fontFamily: void 0, color: void 0, formatter: function(e) {
      return e.globals.seriesTotals.reduce(function(t, i) {
        return t + i;
      }, 0) / e.globals.series.length + "%";
    } } }, barLabels: { enabled: !1, offsetX: 0, offsetY: 0, useSeriesColors: !0, fontFamily: void 0, fontWeight: 600, fontSize: "16px", formatter: function(e) {
      return e;
    }, onClick: void 0 } }, pie: { customScale: 1, offsetX: 0, offsetY: 0, startAngle: 0, endAngle: 360, expandOnClick: !0, dataLabels: { offset: 0, minAngleToShowLabel: 10 }, donut: { size: "65%", background: "transparent", labels: { show: !1, name: { show: !0, fontSize: "16px", fontFamily: void 0, fontWeight: 600, color: void 0, offsetY: -10, formatter: function(e) {
      return e;
    } }, value: { show: !0, fontSize: "20px", fontFamily: void 0, fontWeight: 400, color: void 0, offsetY: 10, formatter: function(e) {
      return e;
    } }, total: { show: !1, showAlways: !1, label: "Total", fontSize: "16px", fontWeight: 400, fontFamily: void 0, color: void 0, formatter: function(e) {
      return e.globals.seriesTotals.reduce(function(t, i) {
        return t + i;
      }, 0);
    } } } } }, polarArea: { rings: { strokeWidth: 1, strokeColor: "#e8e8e8" }, spokes: { strokeWidth: 1, connectorColors: "#e8e8e8" } }, radar: { size: void 0, offsetX: 0, offsetY: 0, polygons: { strokeWidth: 1, strokeColors: "#e8e8e8", connectorColors: "#e8e8e8", fill: { colors: void 0 } } } }, colors: void 0, dataLabels: { enabled: !0, enabledOnSeries: void 0, formatter: function(e) {
      return e !== null ? e : "";
    }, textAnchor: "middle", distributed: !1, offsetX: 0, offsetY: 0, style: { fontSize: "12px", fontFamily: void 0, fontWeight: 600, colors: void 0 }, background: { enabled: !0, foreColor: "#fff", backgroundColor: void 0, borderRadius: 2, padding: 4, opacity: 0.9, borderWidth: 1, borderColor: "#fff", dropShadow: { enabled: !1, top: 1, left: 1, blur: 1, color: "#000", opacity: 0.8 } }, dropShadow: { enabled: !1, top: 1, left: 1, blur: 1, color: "#000", opacity: 0.8 } }, fill: { type: "solid", colors: void 0, opacity: 0.85, gradient: { shade: "dark", type: "horizontal", shadeIntensity: 0.5, gradientToColors: void 0, inverseColors: !0, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 100], colorStops: [] }, image: { src: [], width: void 0, height: void 0 }, pattern: { style: "squares", width: 6, height: 6, strokeWidth: 2 } }, forecastDataPoints: { count: 0, fillOpacity: 0.5, strokeWidth: void 0, dashArray: 4 }, grid: { show: !0, borderColor: "#e0e0e0", strokeDashArray: 0, position: "back", xaxis: { lines: { show: !1 } }, yaxis: { lines: { show: !0 } }, row: { colors: void 0, opacity: 0.5 }, column: { colors: void 0, opacity: 0.5 }, padding: { top: 0, right: 10, bottom: 0, left: 12 } }, labels: [], legend: { show: !0, showForSingleSeries: !1, showForNullSeries: !0, showForZeroSeries: !0, floating: !1, position: "bottom", horizontalAlign: "center", inverseOrder: !1, fontSize: "12px", fontFamily: void 0, fontWeight: 400, width: void 0, height: void 0, formatter: void 0, tooltipHoverFormatter: void 0, offsetX: -20, offsetY: 4, customLegendItems: [], clusterGroupedSeries: !0, clusterGroupedSeriesOrientation: "vertical", labels: { colors: void 0, useSeriesColors: !1 }, markers: { size: 7, fillColors: void 0, strokeWidth: 1, shape: void 0, offsetX: 0, offsetY: 0, customHTML: void 0, onClick: void 0 }, itemMargin: { horizontal: 5, vertical: 4 }, onItemClick: { toggleDataSeries: !0 }, onItemHover: { highlightDataSeries: !0 } }, markers: { discrete: [], size: 0, colors: void 0, strokeColors: "#fff", strokeWidth: 2, strokeOpacity: 0.9, strokeDashArray: 0, fillOpacity: 1, shape: "circle", offsetX: 0, offsetY: 0, showNullDataPoints: !0, onClick: void 0, onDblClick: void 0, hover: { size: void 0, sizeOffset: 3 } }, noData: { text: void 0, align: "center", verticalAlign: "middle", offsetX: 0, offsetY: 0, style: { color: void 0, fontSize: "14px", fontFamily: void 0 } }, responsive: [], series: void 0, states: { hover: { filter: { type: "lighten" } }, active: { allowMultipleDataPointsSelection: !1, filter: { type: "darken" } } }, title: { text: void 0, align: "left", margin: 5, offsetX: 0, offsetY: 0, floating: !1, style: { fontSize: "14px", fontWeight: 900, fontFamily: void 0, color: void 0 } }, subtitle: { text: void 0, align: "left", margin: 5, offsetX: 0, offsetY: 30, floating: !1, style: { fontSize: "12px", fontWeight: 400, fontFamily: void 0, color: void 0 } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", width: 2, colors: void 0, dashArray: 0, fill: { type: "solid", colors: void 0, opacity: 0.85, gradient: { shade: "dark", type: "horizontal", shadeIntensity: 0.5, gradientToColors: void 0, inverseColors: !0, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 100], colorStops: [] } } }, tooltip: { enabled: !0, enabledOnSeries: void 0, shared: !0, hideEmptySeries: !1, followCursor: !1, intersect: !1, inverseOrder: !1, custom: void 0, fillSeriesColor: !1, theme: "light", cssClass: "", style: { fontSize: "12px", fontFamily: void 0 }, onDatasetHover: { highlightDataSeries: !1 }, x: { show: !0, format: "dd MMM", formatter: void 0 }, y: { formatter: void 0, title: { formatter: function(e) {
      return e ? e + ": " : "";
    } } }, z: { formatter: void 0, title: "Size: " }, marker: { show: !0, fillColors: void 0 }, items: { display: "flex" }, fixed: { enabled: !1, position: "topRight", offsetX: 0, offsetY: 0 } }, xaxis: { type: "category", categories: [], convertedCatToNumeric: !1, offsetX: 0, offsetY: 0, overwriteCategories: void 0, labels: { show: !0, rotate: -45, rotateAlways: !1, hideOverlappingLabels: !0, trim: !1, minHeight: void 0, maxHeight: 120, showDuplicates: !0, style: { colors: [], fontSize: "12px", fontWeight: 400, fontFamily: void 0, cssClass: "" }, offsetX: 0, offsetY: 0, format: void 0, formatter: void 0, datetimeUTC: !0, datetimeFormatter: { year: "yyyy", month: "MMM 'yy", day: "dd MMM", hour: "HH:mm", minute: "HH:mm:ss", second: "HH:mm:ss" } }, group: { groups: [], style: { colors: [], fontSize: "12px", fontWeight: 400, fontFamily: void 0, cssClass: "" } }, axisBorder: { show: !0, color: "#e0e0e0", width: "100%", height: 1, offsetX: 0, offsetY: 0 }, axisTicks: { show: !0, color: "#e0e0e0", height: 6, offsetX: 0, offsetY: 0 }, stepSize: void 0, tickAmount: void 0, tickPlacement: "on", min: void 0, max: void 0, range: void 0, floating: !1, decimalsInFloat: void 0, position: "bottom", title: { text: void 0, offsetX: 0, offsetY: 0, style: { color: void 0, fontSize: "12px", fontWeight: 900, fontFamily: void 0, cssClass: "" } }, crosshairs: { show: !0, width: 1, position: "back", opacity: 0.9, stroke: { color: "#b6b6b6", width: 1, dashArray: 3 }, fill: { type: "solid", color: "#B1B9C4", gradient: { colorFrom: "#D8E3F0", colorTo: "#BED1E6", stops: [0, 100], opacityFrom: 0.4, opacityTo: 0.5 } }, dropShadow: { enabled: !1, left: 0, top: 0, blur: 1, opacity: 0.8 } }, tooltip: { enabled: !0, offsetY: 0, formatter: void 0, style: { fontSize: "12px", fontFamily: void 0 } } }, yaxis: this.yAxis, theme: { mode: "", palette: "palette1", monochrome: { enabled: !1, color: "#008FFB", shadeTo: "light", shadeIntensity: 0.65 } } };
  } }]), n;
}(), rh = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w, this.graphics = new W(this.ctx), this.w.globals.isBarHorizontal && (this.invertAxis = !0), this.helpers = new Gi(this), this.xAxisAnnotations = new ih(this), this.yAxisAnnotations = new sh(this), this.pointsAnnotations = new ah(this), this.w.globals.isBarHorizontal && this.w.config.yaxis[0].reversed && (this.inversedReversedAxis = !0), this.xDivision = this.w.globals.gridWidth / this.w.globals.dataPoints;
  }
  return te(n, [{ key: "drawAxesAnnotations", value: function() {
    var e = this.w;
    if (e.globals.axisCharts && e.globals.dataPoints) {
      for (var t = this.yAxisAnnotations.drawYAxisAnnotations(), i = this.xAxisAnnotations.drawXAxisAnnotations(), s = this.pointsAnnotations.drawPointAnnotations(), a = e.config.chart.animations.enabled, r = [t, i, s], o = [i.node, t.node, s.node], l = 0; l < 3; l++) e.globals.dom.elGraphical.add(r[l]), !a || e.globals.resized || e.globals.dataChanged || e.config.chart.type !== "scatter" && e.config.chart.type !== "bubble" && e.globals.dataPoints > 1 && o[l].classList.add("apexcharts-element-hidden"), e.globals.delayedElements.push({ el: o[l], index: 0 });
      this.helpers.annotationsBackground();
    }
  } }, { key: "drawImageAnnos", value: function() {
    var e = this;
    this.w.config.annotations.images.map(function(t, i) {
      e.addImage(t, i);
    });
  } }, { key: "drawTextAnnos", value: function() {
    var e = this;
    this.w.config.annotations.texts.map(function(t, i) {
      e.addText(t, i);
    });
  } }, { key: "addXaxisAnnotation", value: function(e, t, i) {
    this.xAxisAnnotations.addXaxisAnnotation(e, t, i);
  } }, { key: "addYaxisAnnotation", value: function(e, t, i) {
    this.yAxisAnnotations.addYaxisAnnotation(e, t, i);
  } }, { key: "addPointAnnotation", value: function(e, t, i) {
    this.pointsAnnotations.addPointAnnotation(e, t, i);
  } }, { key: "addText", value: function(e, t) {
    var i = e.x, s = e.y, a = e.text, r = e.textAnchor, o = e.foreColor, l = e.fontSize, c = e.fontFamily, h = e.fontWeight, d = e.cssClass, u = e.backgroundColor, g = e.borderWidth, p = e.strokeDashArray, f = e.borderRadius, x = e.borderColor, m = e.appendTo, b = m === void 0 ? ".apexcharts-svg" : m, w = e.paddingLeft, y = w === void 0 ? 4 : w, v = e.paddingRight, k = v === void 0 ? 4 : v, A = e.paddingBottom, S = A === void 0 ? 2 : A, C = e.paddingTop, L = C === void 0 ? 2 : C, P = this.w, R = this.graphics.drawText({ x: i, y: s, text: a, textAnchor: r || "start", fontSize: l || "12px", fontWeight: h || "regular", fontFamily: c || P.config.chart.fontFamily, foreColor: o || P.config.chart.foreColor, cssClass: d }), I = P.globals.dom.baseEl.querySelector(b);
    I && I.appendChild(R.node);
    var T = R.bbox();
    if (a) {
      var O = this.graphics.drawRect(T.x - y, T.y - L, T.width + y + k, T.height + S + L, f, u || "transparent", 1, g, x, p);
      I.insertBefore(O.node, R.node);
    }
  } }, { key: "addImage", value: function(e, t) {
    var i = this.w, s = e.path, a = e.x, r = a === void 0 ? 0 : a, o = e.y, l = o === void 0 ? 0 : o, c = e.width, h = c === void 0 ? 20 : c, d = e.height, u = d === void 0 ? 20 : d, g = e.appendTo, p = g === void 0 ? ".apexcharts-svg" : g, f = i.globals.dom.Paper.image(s);
    f.size(h, u).move(r, l);
    var x = i.globals.dom.baseEl.querySelector(p);
    return x && x.appendChild(f.node), f;
  } }, { key: "addXaxisAnnotationExternal", value: function(e, t, i) {
    return this.addAnnotationExternal({ params: e, pushToMemory: t, context: i, type: "xaxis", contextMethod: i.addXaxisAnnotation }), i;
  } }, { key: "addYaxisAnnotationExternal", value: function(e, t, i) {
    return this.addAnnotationExternal({ params: e, pushToMemory: t, context: i, type: "yaxis", contextMethod: i.addYaxisAnnotation }), i;
  } }, { key: "addPointAnnotationExternal", value: function(e, t, i) {
    return this.invertAxis === void 0 && (this.invertAxis = i.w.globals.isBarHorizontal), this.addAnnotationExternal({ params: e, pushToMemory: t, context: i, type: "point", contextMethod: i.addPointAnnotation }), i;
  } }, { key: "addAnnotationExternal", value: function(e) {
    var t = e.params, i = e.pushToMemory, s = e.context, a = e.type, r = e.contextMethod, o = s, l = o.w, c = l.globals.dom.baseEl.querySelector(".apexcharts-".concat(a, "-annotations")), h = c.childNodes.length + 1, d = new At(), u = Object.assign({}, a === "xaxis" ? d.xAxisAnnotation : a === "yaxis" ? d.yAxisAnnotation : d.pointAnnotation), g = _.extend(u, t);
    switch (a) {
      case "xaxis":
        this.addXaxisAnnotation(g, c, h);
        break;
      case "yaxis":
        this.addYaxisAnnotation(g, c, h);
        break;
      case "point":
        this.addPointAnnotation(g, c, h);
    }
    var p = l.globals.dom.baseEl.querySelector(".apexcharts-".concat(a, "-annotations .apexcharts-").concat(a, "-annotation-label[rel='").concat(h, "']")), f = this.helpers.addBackgroundToAnno(p, g);
    return f && c.insertBefore(f.node, p), i && l.globals.memory.methodsToExec.push({ context: o, id: g.id ? g.id : _.randomId(), method: r, label: "addAnnotation", params: t }), s;
  } }, { key: "clearAnnotations", value: function(e) {
    for (var t = e.w, i = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations"), s = t.globals.memory.methodsToExec.length - 1; s >= 0; s--) t.globals.memory.methodsToExec[s].label !== "addText" && t.globals.memory.methodsToExec[s].label !== "addAnnotation" || t.globals.memory.methodsToExec.splice(s, 1);
    i = _.listToArray(i), Array.prototype.forEach.call(i, function(a) {
      for (; a.firstChild; ) a.removeChild(a.firstChild);
    });
  } }, { key: "removeAnnotation", value: function(e, t) {
    var i = e.w, s = i.globals.dom.baseEl.querySelectorAll(".".concat(t));
    s && (i.globals.memory.methodsToExec.map(function(a, r) {
      a.id === t && i.globals.memory.methodsToExec.splice(r, 1);
    }), Object.keys(i.config.annotations).forEach(function(a) {
      var r = i.config.annotations[a];
      Array.isArray(r) && (i.config.annotations[a] = r.filter(function(o) {
        return o.id !== t;
      }));
    }), Array.prototype.forEach.call(s, function(a) {
      a.parentElement.removeChild(a);
    }));
  } }]), n;
}(), fs = function(n) {
  var e, t = n.isTimeline, i = n.ctx, s = n.seriesIndex, a = n.dataPointIndex, r = n.y1, o = n.y2, l = n.w, c = l.globals.seriesRangeStart[s][a], h = l.globals.seriesRangeEnd[s][a], d = l.globals.labels[a], u = l.config.series[s].name ? l.config.series[s].name : "", g = l.globals.ttKeyFormatter, p = l.config.tooltip.y.title.formatter, f = { w: l, seriesIndex: s, dataPointIndex: a, start: c, end: h };
  typeof p == "function" && (u = p(u, f)), (e = l.config.series[s].data[a]) !== null && e !== void 0 && e.x && (d = l.config.series[s].data[a].x), t || l.config.xaxis.type === "datetime" && (d = new wi(i).xLabelFormat(l.globals.ttKeyFormatter, d, d, { i: void 0, dateFormatter: new Ye(i).formatDate, w: l })), typeof g == "function" && (d = g(d, f)), Number.isFinite(r) && Number.isFinite(o) && (c = r, h = o);
  var x = "", m = "", b = l.globals.colors[s];
  if (l.config.tooltip.x.formatter === void 0) if (l.config.xaxis.type === "datetime") {
    var w = new Ye(i);
    x = w.formatDate(w.getDate(c), l.config.tooltip.x.format), m = w.formatDate(w.getDate(h), l.config.tooltip.x.format);
  } else x = c, m = h;
  else x = l.config.tooltip.x.formatter(c), m = l.config.tooltip.x.formatter(h);
  return { start: c, end: h, startVal: x, endVal: m, ylabel: d, color: b, seriesName: u };
}, ps = function(n) {
  var e = n.color, t = n.seriesName, i = n.ylabel, s = n.start, a = n.end, r = n.seriesIndex, o = n.dataPointIndex, l = n.ctx.tooltip.tooltipLabels.getFormatters(r);
  s = l.yLbFormatter(s), a = l.yLbFormatter(a);
  var c = l.yLbFormatter(n.w.globals.series[r][o]), h = `<span class="value start-value">
  `.concat(s, `
  </span> <span class="separator">-</span> <span class="value end-value">
  `).concat(a, `
  </span>`);
  return '<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: ' + e + '">' + (t || "") + '</span></div><div> <span class="category">' + i + ": </span> " + (n.w.globals.comboCharts ? n.w.config.series[r].type === "rangeArea" || n.w.config.series[r].type === "rangeBar" ? h : "<span>".concat(c, "</span>") : h) + " </div></div>";
}, gi = function() {
  function n(e) {
    ee(this, n), this.opts = e;
  }
  return te(n, [{ key: "hideYAxis", value: function() {
    this.opts.yaxis[0].show = !1, this.opts.yaxis[0].title.text = "", this.opts.yaxis[0].axisBorder.show = !1, this.opts.yaxis[0].axisTicks.show = !1, this.opts.yaxis[0].floating = !0;
  } }, { key: "line", value: function() {
    return { dataLabels: { enabled: !1 }, stroke: { width: 5, curve: "straight" }, markers: { size: 0, hover: { sizeOffset: 6 } }, xaxis: { crosshairs: { width: 1 } } };
  } }, { key: "sparkline", value: function(e) {
    return this.hideYAxis(), _.extend(e, { grid: { show: !1, padding: { left: 0, right: 0, top: 0, bottom: 0 } }, legend: { show: !1 }, xaxis: { labels: { show: !1 }, tooltip: { enabled: !1 }, axisBorder: { show: !1 }, axisTicks: { show: !1 } }, chart: { toolbar: { show: !1 }, zoom: { enabled: !1 } }, dataLabels: { enabled: !1 } });
  } }, { key: "slope", value: function() {
    return this.hideYAxis(), { chart: { toolbar: { show: !1 }, zoom: { enabled: !1 } }, dataLabels: { enabled: !0, formatter: function(e, t) {
      var i = t.w.config.series[t.seriesIndex].name;
      return e !== null ? i + ": " + e : "";
    }, background: { enabled: !1 }, offsetX: -5 }, grid: { xaxis: { lines: { show: !0 } }, yaxis: { lines: { show: !1 } } }, xaxis: { position: "top", labels: { style: { fontSize: 14, fontWeight: 900 } }, tooltip: { enabled: !1 }, crosshairs: { show: !1 } }, markers: { size: 8, hover: { sizeOffset: 1 } }, legend: { show: !1 }, tooltip: { shared: !1, intersect: !0, followCursor: !0 }, stroke: { width: 5, curve: "straight" } };
  } }, { key: "bar", value: function() {
    return { chart: { stacked: !1 }, plotOptions: { bar: { dataLabels: { position: "center" } } }, dataLabels: { style: { colors: ["#fff"] }, background: { enabled: !1 } }, stroke: { width: 0, lineCap: "square" }, fill: { opacity: 0.85 }, legend: { markers: { shape: "square" } }, tooltip: { shared: !1, intersect: !0 }, xaxis: { tooltip: { enabled: !1 }, tickPlacement: "between", crosshairs: { width: "barWidth", position: "back", fill: { type: "gradient" }, dropShadow: { enabled: !1 }, stroke: { width: 0 } } } };
  } }, { key: "funnel", value: function() {
    return this.hideYAxis(), q(q({}, this.bar()), {}, { chart: { animations: { speed: 800, animateGradually: { enabled: !1 } } }, plotOptions: { bar: { horizontal: !0, borderRadiusApplication: "around", borderRadius: 0, dataLabels: { position: "center" } } }, grid: { show: !1, padding: { left: 0, right: 0 } }, xaxis: { labels: { show: !1 }, tooltip: { enabled: !1 }, axisBorder: { show: !1 }, axisTicks: { show: !1 } } });
  } }, { key: "candlestick", value: function() {
    var e = this;
    return { stroke: { width: 1 }, fill: { opacity: 1 }, dataLabels: { enabled: !1 }, tooltip: { shared: !0, custom: function(t) {
      var i = t.seriesIndex, s = t.dataPointIndex, a = t.w;
      return e._getBoxTooltip(a, i, s, ["Open", "High", "", "Low", "Close"], "candlestick");
    } }, states: { active: { filter: { type: "none" } } }, xaxis: { crosshairs: { width: 1 } } };
  } }, { key: "boxPlot", value: function() {
    var e = this;
    return { chart: { animations: { dynamicAnimation: { enabled: !1 } } }, stroke: { width: 1, colors: ["#24292e"] }, dataLabels: { enabled: !1 }, tooltip: { shared: !0, custom: function(t) {
      var i = t.seriesIndex, s = t.dataPointIndex, a = t.w;
      return e._getBoxTooltip(a, i, s, ["Minimum", "Q1", "Median", "Q3", "Maximum"], "boxPlot");
    } }, markers: { size: 7, strokeWidth: 1, strokeColors: "#111" }, xaxis: { crosshairs: { width: 1 } } };
  } }, { key: "rangeBar", value: function() {
    return { chart: { animations: { animateGradually: !1 } }, stroke: { width: 0, lineCap: "square" }, plotOptions: { bar: { borderRadius: 0, dataLabels: { position: "center" } } }, dataLabels: { enabled: !1, formatter: function(e, t) {
      t.ctx;
      var i = t.seriesIndex, s = t.dataPointIndex, a = t.w, r = function() {
        var o = a.globals.seriesRangeStart[i][s];
        return a.globals.seriesRangeEnd[i][s] - o;
      };
      return a.globals.comboCharts ? a.config.series[i].type === "rangeBar" || a.config.series[i].type === "rangeArea" ? r() : e : r();
    }, background: { enabled: !1 }, style: { colors: ["#fff"] } }, markers: { size: 10 }, tooltip: { shared: !1, followCursor: !0, custom: function(e) {
      return e.w.config.plotOptions && e.w.config.plotOptions.bar && e.w.config.plotOptions.bar.horizontal ? function(t) {
        var i = fs(q(q({}, t), {}, { isTimeline: !0 })), s = i.color, a = i.seriesName, r = i.ylabel, o = i.startVal, l = i.endVal;
        return ps(q(q({}, t), {}, { color: s, seriesName: a, ylabel: r, start: o, end: l }));
      }(e) : function(t) {
        var i = fs(t), s = i.color, a = i.seriesName, r = i.ylabel, o = i.start, l = i.end;
        return ps(q(q({}, t), {}, { color: s, seriesName: a, ylabel: r, start: o, end: l }));
      }(e);
    } }, xaxis: { tickPlacement: "between", tooltip: { enabled: !1 }, crosshairs: { stroke: { width: 0 } } } };
  } }, { key: "dumbbell", value: function(e) {
    var t, i;
    return (t = e.plotOptions.bar) !== null && t !== void 0 && t.barHeight || (e.plotOptions.bar.barHeight = 2), (i = e.plotOptions.bar) !== null && i !== void 0 && i.columnWidth || (e.plotOptions.bar.columnWidth = 2), e;
  } }, { key: "area", value: function() {
    return { stroke: { width: 4, fill: { type: "solid", gradient: { inverseColors: !1, shade: "light", type: "vertical", opacityFrom: 0.65, opacityTo: 0.5, stops: [0, 100, 100] } } }, fill: { type: "gradient", gradient: { inverseColors: !1, shade: "light", type: "vertical", opacityFrom: 0.65, opacityTo: 0.5, stops: [0, 100, 100] } }, markers: { size: 0, hover: { sizeOffset: 6 } }, tooltip: { followCursor: !1 } };
  } }, { key: "rangeArea", value: function() {
    return { stroke: { curve: "straight", width: 0 }, fill: { type: "solid", opacity: 0.6 }, markers: { size: 0 }, states: { hover: { filter: { type: "none" } }, active: { filter: { type: "none" } } }, tooltip: { intersect: !1, shared: !0, followCursor: !0, custom: function(e) {
      return function(t) {
        var i = fs(t), s = i.color, a = i.seriesName, r = i.ylabel, o = i.start, l = i.end;
        return ps(q(q({}, t), {}, { color: s, seriesName: a, ylabel: r, start: o, end: l }));
      }(e);
    } } };
  } }, { key: "brush", value: function(e) {
    return _.extend(e, { chart: { toolbar: { autoSelected: "selection", show: !1 }, zoom: { enabled: !1 } }, dataLabels: { enabled: !1 }, stroke: { width: 1 }, tooltip: { enabled: !1 }, xaxis: { tooltip: { enabled: !1 } } });
  } }, { key: "stacked100", value: function(e) {
    e.dataLabels = e.dataLabels || {}, e.dataLabels.formatter = e.dataLabels.formatter || void 0;
    var t = e.dataLabels.formatter;
    return e.yaxis.forEach(function(i, s) {
      e.yaxis[s].min = 0, e.yaxis[s].max = 100;
    }), e.chart.type === "bar" && (e.dataLabels.formatter = t || function(i) {
      return typeof i == "number" && i ? i.toFixed(0) + "%" : i;
    }), e;
  } }, { key: "stackedBars", value: function() {
    var e = this.bar();
    return q(q({}, e), {}, { plotOptions: q(q({}, e.plotOptions), {}, { bar: q(q({}, e.plotOptions.bar), {}, { borderRadiusApplication: "end", borderRadiusWhenStacked: "last" }) }) });
  } }, { key: "convertCatToNumeric", value: function(e) {
    return e.xaxis.convertedCatToNumeric = !0, e;
  } }, { key: "convertCatToNumericXaxis", value: function(e, t, i) {
    e.xaxis.type = "numeric", e.xaxis.labels = e.xaxis.labels || {}, e.xaxis.labels.formatter = e.xaxis.labels.formatter || function(r) {
      return _.isNumber(r) ? Math.floor(r) : r;
    };
    var s = e.xaxis.labels.formatter, a = e.xaxis.categories && e.xaxis.categories.length ? e.xaxis.categories : e.labels;
    return i && i.length && (a = i.map(function(r) {
      return Array.isArray(r) ? r : String(r);
    })), a && a.length && (e.xaxis.labels.formatter = function(r) {
      return _.isNumber(r) ? s(a[Math.floor(r) - 1]) : s(r);
    }), e.xaxis.categories = [], e.labels = [], e.xaxis.tickAmount = e.xaxis.tickAmount || "dataPoints", e;
  } }, { key: "bubble", value: function() {
    return { dataLabels: { style: { colors: ["#fff"] } }, tooltip: { shared: !1, intersect: !0 }, xaxis: { crosshairs: { width: 0 } }, fill: { type: "solid", gradient: { shade: "light", inverse: !0, shadeIntensity: 0.55, opacityFrom: 0.4, opacityTo: 0.8 } } };
  } }, { key: "scatter", value: function() {
    return { dataLabels: { enabled: !1 }, tooltip: { shared: !1, intersect: !0 }, markers: { size: 6, strokeWidth: 1, hover: { sizeOffset: 2 } } };
  } }, { key: "heatmap", value: function() {
    return { chart: { stacked: !1 }, fill: { opacity: 1 }, dataLabels: { style: { colors: ["#fff"] } }, stroke: { colors: ["#fff"] }, tooltip: { followCursor: !0, marker: { show: !1 }, x: { show: !1 } }, legend: { position: "top", markers: { shape: "square" } }, grid: { padding: { right: 20 } } };
  } }, { key: "treemap", value: function() {
    return { chart: { zoom: { enabled: !1 } }, dataLabels: { style: { fontSize: 14, fontWeight: 600, colors: ["#fff"] } }, stroke: { show: !0, width: 2, colors: ["#fff"] }, legend: { show: !1 }, fill: { opacity: 1, gradient: { stops: [0, 100] } }, tooltip: { followCursor: !0, x: { show: !1 } }, grid: { padding: { left: 0, right: 0 } }, xaxis: { crosshairs: { show: !1 }, tooltip: { enabled: !1 } } };
  } }, { key: "pie", value: function() {
    return { chart: { toolbar: { show: !1 } }, plotOptions: { pie: { donut: { labels: { show: !1 } } } }, dataLabels: { formatter: function(e) {
      return e.toFixed(1) + "%";
    }, style: { colors: ["#fff"] }, background: { enabled: !1 }, dropShadow: { enabled: !0 } }, stroke: { colors: ["#fff"] }, fill: { opacity: 1, gradient: { shade: "light", stops: [0, 100] } }, tooltip: { theme: "dark", fillSeriesColor: !0 }, legend: { position: "right" }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
  } }, { key: "donut", value: function() {
    return { chart: { toolbar: { show: !1 } }, dataLabels: { formatter: function(e) {
      return e.toFixed(1) + "%";
    }, style: { colors: ["#fff"] }, background: { enabled: !1 }, dropShadow: { enabled: !0 } }, stroke: { colors: ["#fff"] }, fill: { opacity: 1, gradient: { shade: "light", shadeIntensity: 0.35, stops: [80, 100], opacityFrom: 1, opacityTo: 1 } }, tooltip: { theme: "dark", fillSeriesColor: !0 }, legend: { position: "right" }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
  } }, { key: "polarArea", value: function() {
    return { chart: { toolbar: { show: !1 } }, dataLabels: { formatter: function(e) {
      return e.toFixed(1) + "%";
    }, enabled: !1 }, stroke: { show: !0, width: 2 }, fill: { opacity: 0.7 }, tooltip: { theme: "dark", fillSeriesColor: !0 }, legend: { position: "right" }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
  } }, { key: "radar", value: function() {
    return this.opts.yaxis[0].labels.offsetY = this.opts.yaxis[0].labels.offsetY ? this.opts.yaxis[0].labels.offsetY : 6, { dataLabels: { enabled: !1, style: { fontSize: "11px" } }, stroke: { width: 2 }, markers: { size: 5, strokeWidth: 1, strokeOpacity: 1 }, fill: { opacity: 0.2 }, tooltip: { shared: !1, intersect: !0, followCursor: !0 }, grid: { show: !1, padding: { left: 0, right: 0, top: 0, bottom: 0 } }, xaxis: { labels: { formatter: function(e) {
      return e;
    }, style: { colors: ["#a8a8a8"], fontSize: "11px" } }, tooltip: { enabled: !1 }, crosshairs: { show: !1 } } };
  } }, { key: "radialBar", value: function() {
    return { chart: { animations: { dynamicAnimation: { enabled: !0, speed: 800 } }, toolbar: { show: !1 } }, fill: { gradient: { shade: "dark", shadeIntensity: 0.4, inverseColors: !1, type: "diagonal2", opacityFrom: 1, opacityTo: 1, stops: [70, 98, 100] } }, legend: { show: !1, position: "right" }, tooltip: { enabled: !1, fillSeriesColor: !0 }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
  } }, { key: "_getBoxTooltip", value: function(e, t, i, s, a) {
    var r = e.globals.seriesCandleO[t][i], o = e.globals.seriesCandleH[t][i], l = e.globals.seriesCandleM[t][i], c = e.globals.seriesCandleL[t][i], h = e.globals.seriesCandleC[t][i];
    return e.config.series[t].type && e.config.series[t].type !== a ? `<div class="apexcharts-custom-tooltip">
          `.concat(e.config.series[t].name ? e.config.series[t].name : "series-" + (t + 1), ": <strong>").concat(e.globals.series[t][i], `</strong>
        </div>`) : '<div class="apexcharts-tooltip-box apexcharts-tooltip-'.concat(e.config.chart.type, '">') + "<div>".concat(s[0], ': <span class="value">') + r + "</span></div>" + "<div>".concat(s[1], ': <span class="value">') + o + "</span></div>" + (l ? "<div>".concat(s[2], ': <span class="value">') + l + "</span></div>" : "") + "<div>".concat(s[3], ': <span class="value">') + c + "</span></div>" + "<div>".concat(s[4], ': <span class="value">') + h + "</span></div></div>";
  } }]), n;
}(), fi = function() {
  function n(e) {
    ee(this, n), this.opts = e;
  }
  return te(n, [{ key: "init", value: function(e) {
    var t = e.responsiveOverride, i = this.opts, s = new At(), a = new gi(i);
    this.chartType = i.chart.type, i = this.extendYAxis(i), i = this.extendAnnotations(i);
    var r = s.init(), o = {};
    if (i && Xt(i) === "object") {
      var l, c, h, d, u, g, p, f, x, m, b = {};
      b = ["line", "area", "bar", "candlestick", "boxPlot", "rangeBar", "rangeArea", "bubble", "scatter", "heatmap", "treemap", "pie", "polarArea", "donut", "radar", "radialBar"].indexOf(i.chart.type) !== -1 ? a[i.chart.type]() : a.line(), (l = i.plotOptions) !== null && l !== void 0 && (c = l.bar) !== null && c !== void 0 && c.isFunnel && (b = a.funnel()), i.chart.stacked && i.chart.type === "bar" && (b = a.stackedBars()), (h = i.chart.brush) !== null && h !== void 0 && h.enabled && (b = a.brush(b)), (d = i.plotOptions) !== null && d !== void 0 && (u = d.line) !== null && u !== void 0 && u.isSlopeChart && (b = a.slope()), i.chart.stacked && i.chart.stackType === "100%" && (i = a.stacked100(i)), (g = i.plotOptions) !== null && g !== void 0 && (p = g.bar) !== null && p !== void 0 && p.isDumbbell && (i = a.dumbbell(i)), this.checkForDarkTheme(window.Apex), this.checkForDarkTheme(i), i.xaxis = i.xaxis || window.Apex.xaxis || {}, t || (i.xaxis.convertedCatToNumeric = !1), ((f = (i = this.checkForCatToNumericXAxis(this.chartType, b, i)).chart.sparkline) !== null && f !== void 0 && f.enabled || (x = window.Apex.chart) !== null && x !== void 0 && (m = x.sparkline) !== null && m !== void 0 && m.enabled) && (b = a.sparkline(b)), o = _.extend(r, b);
    }
    var w = _.extend(o, window.Apex);
    return r = _.extend(w, i), r = this.handleUserInputErrors(r);
  } }, { key: "checkForCatToNumericXAxis", value: function(e, t, i) {
    var s, a, r = new gi(i), o = (e === "bar" || e === "boxPlot") && ((s = i.plotOptions) === null || s === void 0 || (a = s.bar) === null || a === void 0 ? void 0 : a.horizontal), l = e === "pie" || e === "polarArea" || e === "donut" || e === "radar" || e === "radialBar" || e === "heatmap", c = i.xaxis.type !== "datetime" && i.xaxis.type !== "numeric", h = i.xaxis.tickPlacement ? i.xaxis.tickPlacement : t.xaxis && t.xaxis.tickPlacement;
    return o || l || !c || h === "between" || (i = r.convertCatToNumeric(i)), i;
  } }, { key: "extendYAxis", value: function(e, t) {
    var i = new At();
    (e.yaxis === void 0 || !e.yaxis || Array.isArray(e.yaxis) && e.yaxis.length === 0) && (e.yaxis = {}), e.yaxis.constructor !== Array && window.Apex.yaxis && window.Apex.yaxis.constructor !== Array && (e.yaxis = _.extend(e.yaxis, window.Apex.yaxis)), e.yaxis.constructor !== Array ? e.yaxis = [_.extend(i.yAxis, e.yaxis)] : e.yaxis = _.extendArray(e.yaxis, i.yAxis);
    var s = !1;
    e.yaxis.forEach(function(r) {
      r.logarithmic && (s = !0);
    });
    var a = e.series;
    return t && !a && (a = t.config.series), s && a.length !== e.yaxis.length && a.length && (e.yaxis = a.map(function(r, o) {
      if (r.name || (a[o].name = "series-".concat(o + 1)), e.yaxis[o]) return e.yaxis[o].seriesName = a[o].name, e.yaxis[o];
      var l = _.extend(i.yAxis, e.yaxis[0]);
      return l.show = !1, l;
    })), s && a.length > 1 && a.length !== e.yaxis.length && console.warn("A multi-series logarithmic chart should have equal number of series and y-axes"), e;
  } }, { key: "extendAnnotations", value: function(e) {
    return e.annotations === void 0 && (e.annotations = {}, e.annotations.yaxis = [], e.annotations.xaxis = [], e.annotations.points = []), e = this.extendYAxisAnnotations(e), e = this.extendXAxisAnnotations(e), e = this.extendPointAnnotations(e);
  } }, { key: "extendYAxisAnnotations", value: function(e) {
    var t = new At();
    return e.annotations.yaxis = _.extendArray(e.annotations.yaxis !== void 0 ? e.annotations.yaxis : [], t.yAxisAnnotation), e;
  } }, { key: "extendXAxisAnnotations", value: function(e) {
    var t = new At();
    return e.annotations.xaxis = _.extendArray(e.annotations.xaxis !== void 0 ? e.annotations.xaxis : [], t.xAxisAnnotation), e;
  } }, { key: "extendPointAnnotations", value: function(e) {
    var t = new At();
    return e.annotations.points = _.extendArray(e.annotations.points !== void 0 ? e.annotations.points : [], t.pointAnnotation), e;
  } }, { key: "checkForDarkTheme", value: function(e) {
    e.theme && e.theme.mode === "dark" && (e.tooltip || (e.tooltip = {}), e.tooltip.theme !== "light" && (e.tooltip.theme = "dark"), e.chart.foreColor || (e.chart.foreColor = "#f6f7f8"), e.theme.palette || (e.theme.palette = "palette4"));
  } }, { key: "handleUserInputErrors", value: function(e) {
    var t = e;
    if (t.tooltip.shared && t.tooltip.intersect) throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");
    if (t.chart.type === "bar" && t.plotOptions.bar.horizontal) {
      if (t.yaxis.length > 1) throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");
      t.yaxis[0].reversed && (t.yaxis[0].opposite = !0), t.xaxis.tooltip.enabled = !1, t.yaxis[0].tooltip.enabled = !1, t.chart.zoom.enabled = !1;
    }
    return t.chart.type !== "bar" && t.chart.type !== "rangeBar" || t.tooltip.shared && t.xaxis.crosshairs.width === "barWidth" && t.series.length > 1 && (t.xaxis.crosshairs.width = "tickWidth"), t.chart.type !== "candlestick" && t.chart.type !== "boxPlot" || t.yaxis[0].reversed && (console.warn("Reversed y-axis in ".concat(t.chart.type, " chart is not supported.")), t.yaxis[0].reversed = !1), t;
  } }]), n;
}(), Xn = function() {
  function n() {
    ee(this, n);
  }
  return te(n, [{ key: "initGlobalVars", value: function(e) {
    e.series = [], e.seriesCandleO = [], e.seriesCandleH = [], e.seriesCandleM = [], e.seriesCandleL = [], e.seriesCandleC = [], e.seriesRangeStart = [], e.seriesRangeEnd = [], e.seriesRange = [], e.seriesPercent = [], e.seriesGoals = [], e.seriesX = [], e.seriesZ = [], e.seriesNames = [], e.seriesTotals = [], e.seriesLog = [], e.seriesColors = [], e.stackedSeriesTotals = [], e.seriesXvalues = [], e.seriesYvalues = [], e.labels = [], e.hasXaxisGroups = !1, e.groups = [], e.barGroups = [], e.lineGroups = [], e.areaGroups = [], e.hasSeriesGroups = !1, e.seriesGroups = [], e.categoryLabels = [], e.timescaleLabels = [], e.noLabelsProvided = !1, e.resizeTimer = null, e.selectionResizeTimer = null, e.lastWheelExecution = 0, e.delayedElements = [], e.pointsArray = [], e.dataLabelsRects = [], e.isXNumeric = !1, e.skipLastTimelinelabel = !1, e.skipFirstTimelinelabel = !1, e.isDataXYZ = !1, e.isMultiLineX = !1, e.isMultipleYAxis = !1, e.maxY = -Number.MAX_VALUE, e.minY = Number.MIN_VALUE, e.minYArr = [], e.maxYArr = [], e.maxX = -Number.MAX_VALUE, e.minX = Number.MAX_VALUE, e.initialMaxX = -Number.MAX_VALUE, e.initialMinX = Number.MAX_VALUE, e.maxDate = 0, e.minDate = Number.MAX_VALUE, e.minZ = Number.MAX_VALUE, e.maxZ = -Number.MAX_VALUE, e.minXDiff = Number.MAX_VALUE, e.yAxisScale = [], e.xAxisScale = null, e.xAxisTicksPositions = [], e.yLabelsCoords = [], e.yTitleCoords = [], e.barPadForNumericAxis = 0, e.padHorizontal = 0, e.xRange = 0, e.yRange = [], e.zRange = 0, e.dataPoints = 0, e.xTickAmount = 0, e.multiAxisTickAmount = 0;
  } }, { key: "globalVars", value: function(e) {
    return { chartID: null, cuid: null, events: { beforeMount: [], mounted: [], updated: [], clicked: [], selection: [], dataPointSelection: [], zoomed: [], scrolled: [] }, colors: [], clientX: null, clientY: null, fill: { colors: [] }, stroke: { colors: [] }, dataLabels: { style: { colors: [] } }, radarPolygons: { fill: { colors: [] } }, markers: { colors: [], size: e.markers.size, largestSize: 0 }, animationEnded: !1, isTouchDevice: "ontouchstart" in window || navigator.msMaxTouchPoints, isDirty: !1, isExecCalled: !1, initialConfig: null, initialSeries: [], lastXAxis: [], lastYAxis: [], columnSeries: null, labels: [], timescaleLabels: [], noLabelsProvided: !1, allSeriesCollapsed: !1, collapsedSeries: [], collapsedSeriesIndices: [], ancillaryCollapsedSeries: [], ancillaryCollapsedSeriesIndices: [], risingSeries: [], dataFormatXNumeric: !1, capturedSeriesIndex: -1, capturedDataPointIndex: -1, selectedDataPoints: [], invalidLogScale: !1, ignoreYAxisIndexes: [], maxValsInArrayIndex: 0, radialSize: 0, selection: void 0, zoomEnabled: e.chart.toolbar.autoSelected === "zoom" && e.chart.toolbar.tools.zoom && e.chart.zoom.enabled, panEnabled: e.chart.toolbar.autoSelected === "pan" && e.chart.toolbar.tools.pan, selectionEnabled: e.chart.toolbar.autoSelected === "selection" && e.chart.toolbar.tools.selection, yaxis: null, mousedown: !1, lastClientPosition: {}, visibleXRange: void 0, yValueDecimal: 0, total: 0, SVGNS: "http://www.w3.org/2000/svg", svgWidth: 0, svgHeight: 0, noData: !1, locale: {}, dom: {}, memory: { methodsToExec: [] }, shouldAnimate: !0, skipLastTimelinelabel: !1, skipFirstTimelinelabel: !1, delayedElements: [], axisCharts: !0, isDataXYZ: !1, isSlopeChart: e.plotOptions.line.isSlopeChart, resized: !1, resizeTimer: null, comboCharts: !1, dataChanged: !1, previousPaths: [], allSeriesHasEqualX: !0, pointsArray: [], dataLabelsRects: [], lastDrawnDataLabelsIndexes: [], hasNullValues: !1, zoomed: !1, gridWidth: 0, gridHeight: 0, rotateXLabels: !1, defaultLabels: !1, xLabelFormatter: void 0, yLabelFormatters: [], xaxisTooltipFormatter: void 0, ttKeyFormatter: void 0, ttVal: void 0, ttZFormatter: void 0, LINE_HEIGHT_RATIO: 1.618, xAxisLabelsHeight: 0, xAxisGroupLabelsHeight: 0, xAxisLabelsWidth: 0, yAxisLabelsWidth: 0, scaleX: 1, scaleY: 1, translateX: 0, translateY: 0, translateYAxisX: [], yAxisWidths: [], translateXAxisY: 0, translateXAxisX: 0, tooltip: null, niceScaleAllowedMagMsd: [[1, 1, 2, 5, 5, 5, 10, 10, 10, 10, 10], [1, 1, 2, 5, 5, 5, 10, 10, 10, 10, 10]], niceScaleDefaultTicks: [1, 2, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 12, 12, 12, 12, 12, 12, 12, 12, 12, 24], seriesYAxisMap: [], seriesYAxisReverseMap: [] };
  } }, { key: "init", value: function(e) {
    var t = this.globalVars(e);
    return this.initGlobalVars(t), t.initialConfig = _.extend({}, e), t.initialSeries = _.clone(e.series), t.lastXAxis = _.clone(t.initialConfig.xaxis), t.lastYAxis = _.clone(t.initialConfig.yaxis), t;
  } }]), n;
}(), nh = function() {
  function n(e) {
    ee(this, n), this.opts = e;
  }
  return te(n, [{ key: "init", value: function() {
    var e = new fi(this.opts).init({ responsiveOverride: !1 });
    return { config: e, globals: new Xn().init(e) };
  } }]), n;
}(), nt = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w, this.opts = null, this.seriesIndex = 0, this.patternIDs = [];
  }
  return te(n, [{ key: "clippedImgArea", value: function(e) {
    var t = this.w, i = t.config, s = parseInt(t.globals.gridWidth, 10), a = parseInt(t.globals.gridHeight, 10), r = s > a ? s : a, o = e.image, l = 0, c = 0;
    e.width === void 0 && e.height === void 0 ? i.fill.image.width !== void 0 && i.fill.image.height !== void 0 ? (l = i.fill.image.width + 1, c = i.fill.image.height) : (l = r + 1, c = r) : (l = e.width, c = e.height);
    var h = document.createElementNS(t.globals.SVGNS, "pattern");
    W.setAttrs(h, { id: e.patternID, patternUnits: e.patternUnits ? e.patternUnits : "userSpaceOnUse", width: l + "px", height: c + "px" });
    var d = document.createElementNS(t.globals.SVGNS, "image");
    h.appendChild(d), d.setAttributeNS(window.SVG.xlink, "href", o), W.setAttrs(d, { x: 0, y: 0, preserveAspectRatio: "none", width: l + "px", height: c + "px" }), d.style.opacity = e.opacity, t.globals.dom.elDefs.node.appendChild(h);
  } }, { key: "getSeriesIndex", value: function(e) {
    var t = this.w, i = t.config.chart.type;
    return (i === "bar" || i === "rangeBar") && t.config.plotOptions.bar.distributed || i === "heatmap" || i === "treemap" ? this.seriesIndex = e.seriesNumber : this.seriesIndex = e.seriesNumber % t.globals.series.length, this.seriesIndex;
  } }, { key: "computeColorStops", value: function(e, t) {
    var i, s = this.w, a = null, r = null, o = si(e);
    try {
      for (o.s(); !(i = o.n()).done; ) {
        var l = i.value;
        l >= t.threshold ? (a === null || l > a) && (a = l) : (r === null || l < r) && (r = l);
      }
    } catch (d) {
      o.e(d);
    } finally {
      o.f();
    }
    a === null && (a = t.threshold), r === null && (r = t.threshold);
    var c = a - t.threshold + (t.threshold - r);
    c === 0 && (c = 1);
    var h = 100 - (t.threshold - r) / c * 100;
    return [{ offset: h = Math.max(0, Math.min(h, 100)), color: t.colorAboveThreshold, opacity: s.config.fill.opacity }, { offset: 0, color: t.colorBelowThreshold, opacity: s.config.fill.opacity }];
  } }, { key: "fillPath", value: function(e) {
    var t, i, s, a = this.w;
    this.opts = e;
    var r, o, l, c = this.w.config;
    this.seriesIndex = this.getSeriesIndex(e);
    var h = c.plotOptions.line.colors.colorAboveThreshold && c.plotOptions.line.colors.colorBelowThreshold, d = this.getFillColors()[this.seriesIndex];
    a.globals.seriesColors[this.seriesIndex] !== void 0 && (d = a.globals.seriesColors[this.seriesIndex]), typeof d == "function" && (d = d({ seriesIndex: this.seriesIndex, dataPointIndex: e.dataPointIndex, value: e.value, w: a }));
    var u, g, p, f = e.fillType ? e.fillType : this.getFillType(this.seriesIndex), x = Array.isArray(c.fill.opacity) ? c.fill.opacity[this.seriesIndex] : c.fill.opacity, m = f === "gradient" || h;
    e.color && (d = e.color), (t = a.config.series[this.seriesIndex]) !== null && t !== void 0 && (i = t.data) !== null && i !== void 0 && (s = i[e.dataPointIndex]) !== null && s !== void 0 && s.fillColor && (d = (u = a.config.series[this.seriesIndex]) === null || u === void 0 || (g = u.data) === null || g === void 0 || (p = g[e.dataPointIndex]) === null || p === void 0 ? void 0 : p.fillColor), d || (d = "#fff", console.warn("undefined color - ApexCharts"));
    var b = d;
    if (d.indexOf("rgb") === -1 ? d.indexOf("#") === -1 ? b = d : d.length < 9 && (b = _.hexToRgba(d, x)) : d.indexOf("rgba") > -1 ? x = _.getOpacityFromRGBA(d) : b = _.hexToRgba(_.rgb2hex(d), x), e.opacity && (x = e.opacity), f === "pattern" && (o = this.handlePatternFill({ fillConfig: e.fillConfig, patternFill: o, fillColor: d, fillOpacity: x, defaultColor: b })), m) {
      var w = _e(c.fill.gradient.colorStops) || [], y = c.fill.gradient.type;
      h && (w[this.seriesIndex] = this.computeColorStops(a.globals.series[this.seriesIndex], c.plotOptions.line.colors), y = "vertical"), l = this.handleGradientFill({ type: y, fillConfig: e.fillConfig, fillColor: d, fillOpacity: x, colorStops: w, i: this.seriesIndex });
    }
    if (f === "image") {
      var v = c.fill.image.src, k = e.patternID ? e.patternID : "", A = "pattern".concat(a.globals.cuid).concat(e.seriesNumber + 1).concat(k);
      this.patternIDs.indexOf(A) === -1 && (this.clippedImgArea({ opacity: x, image: Array.isArray(v) ? e.seriesNumber < v.length ? v[e.seriesNumber] : v[0] : v, width: e.width ? e.width : void 0, height: e.height ? e.height : void 0, patternUnits: e.patternUnits, patternID: A }), this.patternIDs.push(A)), r = "url(#".concat(A, ")");
    } else r = m ? l : f === "pattern" ? o : b;
    return e.solid && (r = b), r;
  } }, { key: "getFillType", value: function(e) {
    var t = this.w;
    return Array.isArray(t.config.fill.type) ? t.config.fill.type[e] : t.config.fill.type;
  } }, { key: "getFillColors", value: function() {
    var e = this.w, t = e.config, i = this.opts, s = [];
    return e.globals.comboCharts ? e.config.series[this.seriesIndex].type === "line" ? Array.isArray(e.globals.stroke.colors) ? s = e.globals.stroke.colors : s.push(e.globals.stroke.colors) : Array.isArray(e.globals.fill.colors) ? s = e.globals.fill.colors : s.push(e.globals.fill.colors) : t.chart.type === "line" ? Array.isArray(e.globals.stroke.colors) ? s = e.globals.stroke.colors : s.push(e.globals.stroke.colors) : Array.isArray(e.globals.fill.colors) ? s = e.globals.fill.colors : s.push(e.globals.fill.colors), i.fillColors !== void 0 && (s = [], Array.isArray(i.fillColors) ? s = i.fillColors.slice() : s.push(i.fillColors)), s;
  } }, { key: "handlePatternFill", value: function(e) {
    var t = e.fillConfig, i = e.patternFill, s = e.fillColor, a = e.fillOpacity, r = e.defaultColor, o = this.w.config.fill;
    t && (o = t);
    var l = this.opts, c = new W(this.ctx), h = Array.isArray(o.pattern.strokeWidth) ? o.pattern.strokeWidth[this.seriesIndex] : o.pattern.strokeWidth, d = s;
    return Array.isArray(o.pattern.style) ? i = o.pattern.style[l.seriesNumber] !== void 0 ? c.drawPattern(o.pattern.style[l.seriesNumber], o.pattern.width, o.pattern.height, d, h, a) : r : i = c.drawPattern(o.pattern.style, o.pattern.width, o.pattern.height, d, h, a), i;
  } }, { key: "handleGradientFill", value: function(e) {
    var t = e.type, i = e.fillColor, s = e.fillOpacity, a = e.fillConfig, r = e.colorStops, o = e.i, l = this.w.config.fill;
    a && (l = q(q({}, l), a));
    var c = this.opts, h = new W(this.ctx), d = new _();
    t = t || l.gradient.type;
    var u, g = i, p = l.gradient.opacityFrom === void 0 ? s : Array.isArray(l.gradient.opacityFrom) ? l.gradient.opacityFrom[o] : l.gradient.opacityFrom;
    g.indexOf("rgba") > -1 && (p = _.getOpacityFromRGBA(g));
    var f = l.gradient.opacityTo === void 0 ? s : Array.isArray(l.gradient.opacityTo) ? l.gradient.opacityTo[o] : l.gradient.opacityTo;
    if (l.gradient.gradientToColors === void 0 || l.gradient.gradientToColors.length === 0) u = l.gradient.shade === "dark" ? d.shadeColor(-1 * parseFloat(l.gradient.shadeIntensity), i.indexOf("rgb") > -1 ? _.rgb2hex(i) : i) : d.shadeColor(parseFloat(l.gradient.shadeIntensity), i.indexOf("rgb") > -1 ? _.rgb2hex(i) : i);
    else if (l.gradient.gradientToColors[c.seriesNumber]) {
      var x = l.gradient.gradientToColors[c.seriesNumber];
      u = x, x.indexOf("rgba") > -1 && (f = _.getOpacityFromRGBA(x));
    } else u = i;
    if (l.gradient.gradientFrom && (g = l.gradient.gradientFrom), l.gradient.gradientTo && (u = l.gradient.gradientTo), l.gradient.inverseColors) {
      var m = g;
      g = u, u = m;
    }
    return g.indexOf("rgb") > -1 && (g = _.rgb2hex(g)), u.indexOf("rgb") > -1 && (u = _.rgb2hex(u)), h.drawGradient(t, g, u, p, f, c.size, l.gradient.stops, r, o);
  } }]), n;
}(), Zt = function() {
  function n(e, t) {
    ee(this, n), this.ctx = e, this.w = e.w;
  }
  return te(n, [{ key: "setGlobalMarkerSize", value: function() {
    var e = this.w;
    if (e.globals.markers.size = Array.isArray(e.config.markers.size) ? e.config.markers.size : [e.config.markers.size], e.globals.markers.size.length > 0) {
      if (e.globals.markers.size.length < e.globals.series.length + 1) for (var t = 0; t <= e.globals.series.length; t++) e.globals.markers.size[t] === void 0 && e.globals.markers.size.push(e.globals.markers.size[0]);
    } else e.globals.markers.size = e.config.series.map(function(i) {
      return e.config.markers.size;
    });
  } }, { key: "plotChartMarkers", value: function(e) {
    var t = e.pointsPos, i = e.seriesIndex, s = e.j, a = e.pSize, r = e.alwaysDrawMarker, o = r !== void 0 && r, l = e.isVirtualPoint, c = l !== void 0 && l, h = this.w, d = i, u = t, g = null, p = new W(this.ctx), f = h.config.markers.discrete && h.config.markers.discrete.length;
    if (Array.isArray(u.x)) for (var x = 0; x < u.x.length; x++) {
      var m = void 0, b = s, w = !_.isNumber(u.y[x]);
      h.globals.markers.largestSize === 0 && h.globals.hasNullValues && h.globals.series[d][s + 1] !== null && !c && (w = !0), s === 1 && x === 0 && (b = 0), s === 1 && x === 1 && (b = 1);
      var y = "apexcharts-marker";
      if (h.config.chart.type !== "line" && h.config.chart.type !== "area" || h.globals.comboCharts || h.config.tooltip.intersect || (y += " no-pointer-events"), (Array.isArray(h.config.markers.size) ? h.globals.markers.size[i] > 0 : h.config.markers.size > 0) || o || f) {
        w || (y += " w".concat(_.randomId()));
        var v = this.getMarkerConfig({ cssClass: y, seriesIndex: i, dataPointIndex: b });
        h.config.series[d].data[b] && (h.config.series[d].data[b].fillColor && (v.pointFillColor = h.config.series[d].data[b].fillColor), h.config.series[d].data[b].strokeColor && (v.pointStrokeColor = h.config.series[d].data[b].strokeColor)), a !== void 0 && (v.pSize = a), (u.x[x] < -h.globals.markers.largestSize || u.x[x] > h.globals.gridWidth + h.globals.markers.largestSize || u.y[x] < -h.globals.markers.largestSize || u.y[x] > h.globals.gridHeight + h.globals.markers.largestSize) && (v.pSize = 0), !w && ((h.globals.markers.size[i] > 0 || o || f) && !g && (g = p.group({ class: o || f ? "" : "apexcharts-series-markers" })).attr("clip-path", "url(#gridRectMarkerMask".concat(h.globals.cuid, ")")), (m = p.drawMarker(u.x[x], u.y[x], v)).attr("rel", b), m.attr("j", b), m.attr("index", i), m.node.setAttribute("default-marker-size", v.pSize), new Fe(this.ctx).setSelectionFilter(m, i, b), this.addEvents(m), g && g.add(m));
      } else h.globals.pointsArray[i] === void 0 && (h.globals.pointsArray[i] = []), h.globals.pointsArray[i].push([u.x[x], u.y[x]]);
    }
    return g;
  } }, { key: "getMarkerConfig", value: function(e) {
    var t = e.cssClass, i = e.seriesIndex, s = e.dataPointIndex, a = s === void 0 ? null : s, r = e.radius, o = r === void 0 ? null : r, l = e.size, c = l === void 0 ? null : l, h = e.strokeWidth, d = h === void 0 ? null : h, u = this.w, g = this.getMarkerStyle(i), p = c === null ? u.globals.markers.size[i] : c, f = u.config.markers;
    return a !== null && f.discrete.length && f.discrete.map(function(x) {
      x.seriesIndex === i && x.dataPointIndex === a && (g.pointStrokeColor = x.strokeColor, g.pointFillColor = x.fillColor, p = x.size, g.pointShape = x.shape);
    }), { pSize: o === null ? p : o, pRadius: o !== null ? o : f.radius, pointStrokeWidth: d !== null ? d : Array.isArray(f.strokeWidth) ? f.strokeWidth[i] : f.strokeWidth, pointStrokeColor: g.pointStrokeColor, pointFillColor: g.pointFillColor, shape: g.pointShape || (Array.isArray(f.shape) ? f.shape[i] : f.shape), class: t, pointStrokeOpacity: Array.isArray(f.strokeOpacity) ? f.strokeOpacity[i] : f.strokeOpacity, pointStrokeDashArray: Array.isArray(f.strokeDashArray) ? f.strokeDashArray[i] : f.strokeDashArray, pointFillOpacity: Array.isArray(f.fillOpacity) ? f.fillOpacity[i] : f.fillOpacity, seriesIndex: i };
  } }, { key: "addEvents", value: function(e) {
    var t = this.w, i = new W(this.ctx);
    e.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this.ctx, e)), e.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this.ctx, e)), e.node.addEventListener("mousedown", i.pathMouseDown.bind(this.ctx, e)), e.node.addEventListener("click", t.config.markers.onClick), e.node.addEventListener("dblclick", t.config.markers.onDblClick), e.node.addEventListener("touchstart", i.pathMouseDown.bind(this.ctx, e), { passive: !0 });
  } }, { key: "getMarkerStyle", value: function(e) {
    var t = this.w, i = t.globals.markers.colors, s = t.config.markers.strokeColor || t.config.markers.strokeColors;
    return { pointStrokeColor: Array.isArray(s) ? s[e] : s, pointFillColor: Array.isArray(i) ? i[e] : i };
  } }]), n;
}(), jn = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w, this.initialAnim = this.w.config.chart.animations.enabled;
  }
  return te(n, [{ key: "draw", value: function(e, t, i) {
    var s = this.w, a = new W(this.ctx), r = i.realIndex, o = i.pointsPos, l = i.zRatio, c = i.elParent, h = a.group({ class: "apexcharts-series-markers apexcharts-series-".concat(s.config.chart.type) });
    if (h.attr("clip-path", "url(#gridRectMarkerMask".concat(s.globals.cuid, ")")), Array.isArray(o.x)) for (var d = 0; d < o.x.length; d++) {
      var u = t + 1, g = !0;
      t === 0 && d === 0 && (u = 0), t === 0 && d === 1 && (u = 1);
      var p = s.globals.markers.size[r];
      if (l !== 1 / 0) {
        var f = s.config.plotOptions.bubble;
        p = s.globals.seriesZ[r][u], f.zScaling && (p /= l), f.minBubbleRadius && p < f.minBubbleRadius && (p = f.minBubbleRadius), f.maxBubbleRadius && p > f.maxBubbleRadius && (p = f.maxBubbleRadius);
      }
      var x = o.x[d], m = o.y[d];
      if (p = p || 0, m !== null && s.globals.series[r][u] !== void 0 || (g = !1), g) {
        var b = this.drawPoint(x, m, p, r, u, t);
        h.add(b);
      }
      c.add(h);
    }
  } }, { key: "drawPoint", value: function(e, t, i, s, a, r) {
    var o = this.w, l = s, c = new Vt(this.ctx), h = new Fe(this.ctx), d = new nt(this.ctx), u = new Zt(this.ctx), g = new W(this.ctx), p = u.getMarkerConfig({ cssClass: "apexcharts-marker", seriesIndex: l, dataPointIndex: a, radius: o.config.chart.type === "bubble" || o.globals.comboCharts && o.config.series[s] && o.config.series[s].type === "bubble" ? i : null }), f = d.fillPath({ seriesNumber: s, dataPointIndex: a, color: p.pointFillColor, patternUnits: "objectBoundingBox", value: o.globals.series[s][r] }), x = g.drawMarker(e, t, p);
    if (o.config.series[l].data[a] && o.config.series[l].data[a].fillColor && (f = o.config.series[l].data[a].fillColor), x.attr({ fill: f }), o.config.chart.dropShadow.enabled) {
      var m = o.config.chart.dropShadow;
      h.dropShadow(x, m, s);
    }
    if (!this.initialAnim || o.globals.dataChanged || o.globals.resized) o.globals.animationEnded = !0;
    else {
      var b = o.config.chart.animations.speed;
      c.animateMarker(x, b, o.globals.easing, function() {
        window.setTimeout(function() {
          c.animationCompleted(x);
        }, 100);
      });
    }
    return x.attr({ rel: a, j: a, index: s, "default-marker-size": p.pSize }), h.setSelectionFilter(x, s, a), u.addEvents(x), x.node.classList.add("apexcharts-marker"), x;
  } }, { key: "centerTextInBubble", value: function(e) {
    var t = this.w;
    return { y: e += parseInt(t.config.dataLabels.style.fontSize, 10) / 4 };
  } }]), n;
}(), jt = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w;
  }
  return te(n, [{ key: "dataLabelsCorrection", value: function(e, t, i, s, a, r, o) {
    var l = this.w, c = !1, h = new W(this.ctx).getTextRects(i, o), d = h.width, u = h.height;
    t < 0 && (t = 0), t > l.globals.gridHeight + u && (t = l.globals.gridHeight + u / 2), l.globals.dataLabelsRects[s] === void 0 && (l.globals.dataLabelsRects[s] = []), l.globals.dataLabelsRects[s].push({ x: e, y: t, width: d, height: u });
    var g = l.globals.dataLabelsRects[s].length - 2, p = l.globals.lastDrawnDataLabelsIndexes[s] !== void 0 ? l.globals.lastDrawnDataLabelsIndexes[s][l.globals.lastDrawnDataLabelsIndexes[s].length - 1] : 0;
    if (l.globals.dataLabelsRects[s][g] !== void 0) {
      var f = l.globals.dataLabelsRects[s][p];
      (e > f.x + f.width || t > f.y + f.height || t + u < f.y || e + d < f.x) && (c = !0);
    }
    return (a === 0 || r) && (c = !0), { x: e, y: t, textRects: h, drawnextLabel: c };
  } }, { key: "drawDataLabel", value: function(e) {
    var t = this, i = e.type, s = e.pos, a = e.i, r = e.j, o = e.isRangeStart, l = e.strokeWidth, c = l === void 0 ? 2 : l, h = this.w, d = new W(this.ctx), u = h.config.dataLabels, g = 0, p = 0, f = r, x = null;
    if (h.globals.collapsedSeriesIndices.indexOf(a) !== -1 || !u.enabled || !Array.isArray(s.x)) return x;
    x = d.group({ class: "apexcharts-data-labels" });
    for (var m = 0; m < s.x.length; m++) if (g = s.x[m] + u.offsetX, p = s.y[m] + u.offsetY + c, !isNaN(g)) {
      r === 1 && m === 0 && (f = 0), r === 1 && m === 1 && (f = 1);
      var b = h.globals.series[a][f];
      i === "rangeArea" && (b = o ? h.globals.seriesRangeStart[a][f] : h.globals.seriesRangeEnd[a][f]);
      var w = "", y = function(k) {
        return h.config.dataLabels.formatter(k, { ctx: t.ctx, seriesIndex: a, dataPointIndex: f, w: h });
      };
      h.config.chart.type === "bubble" ? (w = y(b = h.globals.seriesZ[a][f]), p = s.y[m], p = new jn(this.ctx).centerTextInBubble(p, a, f).y) : b !== void 0 && (w = y(b));
      var v = h.config.dataLabels.textAnchor;
      h.globals.isSlopeChart && (v = f === 0 ? "end" : f === h.config.series[a].data.length - 1 ? "start" : "middle"), this.plotDataLabelsText({ x: g, y: p, text: w, i: a, j: f, parent: x, offsetCorrection: !0, dataLabelsConfig: h.config.dataLabels, textAnchor: v });
    }
    return x;
  } }, { key: "plotDataLabelsText", value: function(e) {
    var t = this.w, i = new W(this.ctx), s = e.x, a = e.y, r = e.i, o = e.j, l = e.text, c = e.textAnchor, h = e.fontSize, d = e.parent, u = e.dataLabelsConfig, g = e.color, p = e.alwaysDrawDataLabel, f = e.offsetCorrection, x = e.className, m = null;
    if (Array.isArray(t.config.dataLabels.enabledOnSeries) && t.config.dataLabels.enabledOnSeries.indexOf(r) < 0) return m;
    var b = { x: s, y: a, drawnextLabel: !0, textRects: null };
    f && (b = this.dataLabelsCorrection(s, a, l, r, o, p, parseInt(u.style.fontSize, 10))), t.globals.zoomed || (s = b.x, a = b.y), b.textRects && (s < -20 - b.textRects.width || s > t.globals.gridWidth + b.textRects.width + 30) && (l = "");
    var w = t.globals.dataLabels.style.colors[r];
    ((t.config.chart.type === "bar" || t.config.chart.type === "rangeBar") && t.config.plotOptions.bar.distributed || t.config.dataLabels.distributed) && (w = t.globals.dataLabels.style.colors[o]), typeof w == "function" && (w = w({ series: t.globals.series, seriesIndex: r, dataPointIndex: o, w: t })), g && (w = g);
    var y = u.offsetX, v = u.offsetY;
    if (t.config.chart.type !== "bar" && t.config.chart.type !== "rangeBar" || (y = 0, v = 0), t.globals.isSlopeChart && (o !== 0 && (y = -2 * u.offsetX + 5), o !== 0 && o !== t.config.series[r].data.length - 1 && (y = 0)), b.drawnextLabel) {
      if ((m = i.drawText({ width: 100, height: parseInt(u.style.fontSize, 10), x: s + y, y: a + v, foreColor: w, textAnchor: c || u.textAnchor, text: l, fontSize: h || u.style.fontSize, fontFamily: u.style.fontFamily, fontWeight: u.style.fontWeight || "normal" })).attr({ class: x || "apexcharts-datalabel", cx: s, cy: a }), u.dropShadow.enabled) {
        var k = u.dropShadow;
        new Fe(this.ctx).dropShadow(m, k);
      }
      d.add(m), t.globals.lastDrawnDataLabelsIndexes[r] === void 0 && (t.globals.lastDrawnDataLabelsIndexes[r] = []), t.globals.lastDrawnDataLabelsIndexes[r].push(o);
    }
    return m;
  } }, { key: "addBackgroundToDataLabel", value: function(e, t) {
    var i = this.w, s = i.config.dataLabels.background, a = s.padding, r = s.padding / 2, o = t.width, l = t.height, c = new W(this.ctx).drawRect(t.x - a, t.y - r / 2, o + 2 * a, l + r, s.borderRadius, i.config.chart.background !== "transparent" && i.config.chart.background ? i.config.chart.background : "#fff", s.opacity, s.borderWidth, s.borderColor);
    return s.dropShadow.enabled && new Fe(this.ctx).dropShadow(c, s.dropShadow), c;
  } }, { key: "dataLabelsBackground", value: function() {
    var e = this.w;
    if (e.config.chart.type !== "bubble") for (var t = e.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"), i = 0; i < t.length; i++) {
      var s = t[i], a = s.getBBox(), r = null;
      if (a.width && a.height && (r = this.addBackgroundToDataLabel(s, a)), r) {
        s.parentNode.insertBefore(r.node, s);
        var o = e.config.dataLabels.background.backgroundColor || s.getAttribute("fill");
        e.config.chart.animations.enabled && !e.globals.resized && !e.globals.dataChanged ? r.animate().attr({ fill: o }) : r.attr({ fill: o }), s.setAttribute("fill", e.config.dataLabels.background.foreColor);
      }
    }
  } }, { key: "bringForward", value: function() {
    for (var e = this.w, t = e.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"), i = e.globals.dom.baseEl.querySelector(".apexcharts-plot-series:last-child"), s = 0; s < t.length; s++) i && i.insertBefore(t[s], i.nextSibling);
  } }]), n;
}(), st = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w, this.legendInactiveClass = "legend-mouseover-inactive";
  }
  return te(n, [{ key: "getAllSeriesEls", value: function() {
    return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series");
  } }, { key: "getSeriesByName", value: function(e) {
    return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(_.escapeString(e), "']"));
  } }, { key: "isSeriesHidden", value: function(e) {
    var t = this.getSeriesByName(e), i = parseInt(t.getAttribute("data:realIndex"), 10);
    return { isHidden: t.classList.contains("apexcharts-series-collapsed"), realIndex: i };
  } }, { key: "addCollapsedClassToSeries", value: function(e, t) {
    var i = this.w;
    function s(a) {
      for (var r = 0; r < a.length; r++) a[r].index === t && e.node.classList.add("apexcharts-series-collapsed");
    }
    s(i.globals.collapsedSeries), s(i.globals.ancillaryCollapsedSeries);
  } }, { key: "toggleSeries", value: function(e) {
    var t = this.isSeriesHidden(e);
    return this.ctx.legend.legendHelpers.toggleDataSeries(t.realIndex, t.isHidden), t.isHidden;
  } }, { key: "showSeries", value: function(e) {
    var t = this.isSeriesHidden(e);
    t.isHidden && this.ctx.legend.legendHelpers.toggleDataSeries(t.realIndex, !0);
  } }, { key: "hideSeries", value: function(e) {
    var t = this.isSeriesHidden(e);
    t.isHidden || this.ctx.legend.legendHelpers.toggleDataSeries(t.realIndex, !1);
  } }, { key: "resetSeries", value: function() {
    var e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0], t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], s = this.w, a = _.clone(s.globals.initialSeries);
    s.globals.previousPaths = [], i ? (s.globals.collapsedSeries = [], s.globals.ancillaryCollapsedSeries = [], s.globals.collapsedSeriesIndices = [], s.globals.ancillaryCollapsedSeriesIndices = []) : a = this.emptyCollapsedSeries(a), s.config.series = a, e && (t && (s.globals.zoomed = !1, this.ctx.updateHelpers.revertDefaultAxisMinMax()), this.ctx.updateHelpers._updateSeries(a, s.config.chart.animations.dynamicAnimation.enabled));
  } }, { key: "emptyCollapsedSeries", value: function(e) {
    for (var t = this.w, i = 0; i < e.length; i++) t.globals.collapsedSeriesIndices.indexOf(i) > -1 && (e[i].data = []);
    return e;
  } }, { key: "highlightSeries", value: function(e) {
    var t = this.w, i = this.getSeriesByName(e), s = parseInt(i == null ? void 0 : i.getAttribute("data:realIndex"), 10), a = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels, .apexcharts-yaxis"), r = null, o = null, l = null;
    if (t.globals.axisCharts || t.config.chart.type === "radialBar") if (t.globals.axisCharts) {
      r = t.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(s, "']")), o = t.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(s, "']"));
      var c = t.globals.seriesYAxisReverseMap[s];
      l = t.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(c, "']"));
    } else r = t.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(s + 1, "']"));
    else r = t.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(s + 1, "'] path"));
    for (var h = 0; h < a.length; h++) a[h].classList.add(this.legendInactiveClass);
    if (r) t.globals.axisCharts || r.parentNode.classList.remove(this.legendInactiveClass), r.classList.remove(this.legendInactiveClass), o !== null && o.classList.remove(this.legendInactiveClass), l !== null && l.classList.remove(this.legendInactiveClass);
    else for (var d = 0; d < a.length; d++) a[d].classList.remove(this.legendInactiveClass);
  } }, { key: "toggleSeriesOnHover", value: function(e, t) {
    var i = this.w;
    t || (t = e.target);
    var s = i.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels, .apexcharts-yaxis");
    if (e.type === "mousemove") {
      var a = parseInt(t.getAttribute("rel"), 10) - 1;
      this.highlightSeries(i.globals.seriesNames[a]);
    } else if (e.type === "mouseout") for (var r = 0; r < s.length; r++) s[r].classList.remove(this.legendInactiveClass);
  } }, { key: "highlightRangeInSeries", value: function(e, t) {
    var i = this, s = this.w, a = s.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"), r = function(c) {
      for (var h = 0; h < a.length; h++) a[h].classList[c](i.legendInactiveClass);
    };
    if (e.type === "mousemove") {
      var o = parseInt(t.getAttribute("rel"), 10) - 1;
      r("add");
      var l = s.config.plotOptions.heatmap.colorScale.ranges;
      (function(c, h) {
        for (var d = 0; d < a.length; d++) {
          var u = Number(a[d].getAttribute("val"));
          u >= c.from && (u < c.to || c.to === h && u === h) && a[d].classList.remove(i.legendInactiveClass);
        }
      })(l[o], l.reduce(function(c, h) {
        return Math.max(c, h.to);
      }, 0));
    } else e.type === "mouseout" && r("remove");
  } }, { key: "getActiveConfigSeriesIndex", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "asc", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = this.w, s = 0;
    if (i.config.series.length > 1) {
      for (var a = i.config.series.map(function(o, l) {
        return o.data && o.data.length > 0 && i.globals.collapsedSeriesIndices.indexOf(l) === -1 && (!i.globals.comboCharts || t.length === 0 || t.length && t.indexOf(i.config.series[l].type) > -1) ? l : -1;
      }), r = e === "asc" ? 0 : a.length - 1; e === "asc" ? r < a.length : r >= 0; e === "asc" ? r++ : r--) if (a[r] !== -1) {
        s = a[r];
        break;
      }
    }
    return s;
  } }, { key: "getBarSeriesIndices", value: function() {
    return this.w.globals.comboCharts ? this.w.config.series.map(function(e, t) {
      return e.type === "bar" || e.type === "column" ? t : -1;
    }).filter(function(e) {
      return e !== -1;
    }) : this.w.config.series.map(function(e, t) {
      return t;
    });
  } }, { key: "getPreviousPaths", value: function() {
    var e = this.w;
    function t(r, o, l) {
      for (var c = r[o].childNodes, h = { type: l, paths: [], realIndex: r[o].getAttribute("data:realIndex") }, d = 0; d < c.length; d++) if (c[d].hasAttribute("pathTo")) {
        var u = c[d].getAttribute("pathTo");
        h.paths.push({ d: u });
      }
      e.globals.previousPaths.push(h);
    }
    e.globals.previousPaths = [], ["line", "area", "bar", "rangebar", "rangeArea", "candlestick", "radar"].forEach(function(r) {
      for (var o, l = (o = r, e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(o, "-series .apexcharts-series"))), c = 0; c < l.length; c++) t(l, c, r);
    });
    var i = e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(e.config.chart.type, " .apexcharts-series"));
    if (i.length > 0) for (var s = function(r) {
      for (var o = e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(e.config.chart.type, " .apexcharts-series[data\\:realIndex='").concat(r, "'] rect")), l = [], c = function(d) {
        var u = function(p) {
          return o[d].getAttribute(p);
        }, g = { x: parseFloat(u("x")), y: parseFloat(u("y")), width: parseFloat(u("width")), height: parseFloat(u("height")) };
        l.push({ rect: g, color: o[d].getAttribute("color") });
      }, h = 0; h < o.length; h++) c(h);
      e.globals.previousPaths.push(l);
    }, a = 0; a < i.length; a++) s(a);
    e.globals.axisCharts || (e.globals.previousPaths = e.globals.series);
  } }, { key: "clearPreviousPaths", value: function() {
    var e = this.w;
    e.globals.previousPaths = [], e.globals.allSeriesCollapsed = !1;
  } }, { key: "handleNoData", value: function() {
    var e = this.w, t = e.config.noData, i = new W(this.ctx), s = e.globals.svgWidth / 2, a = e.globals.svgHeight / 2, r = "middle";
    if (e.globals.noData = !0, e.globals.animationEnded = !0, t.align === "left" ? (s = 10, r = "start") : t.align === "right" && (s = e.globals.svgWidth - 10, r = "end"), t.verticalAlign === "top" ? a = 50 : t.verticalAlign === "bottom" && (a = e.globals.svgHeight - 50), s += t.offsetX, a = a + parseInt(t.style.fontSize, 10) + 2 + t.offsetY, t.text !== void 0 && t.text !== "") {
      var o = i.drawText({ x: s, y: a, text: t.text, textAnchor: r, fontSize: t.style.fontSize, fontFamily: t.style.fontFamily, foreColor: t.style.color, opacity: 1, class: "apexcharts-text-nodata" });
      e.globals.dom.Paper.add(o);
    }
  } }, { key: "setNullSeriesToZeroValues", value: function(e) {
    for (var t = this.w, i = 0; i < e.length; i++) if (e[i].length === 0) for (var s = 0; s < e[t.globals.maxValsInArrayIndex].length; s++) e[i].push(0);
    return e;
  } }, { key: "hasAllSeriesEqualX", value: function() {
    for (var e = !0, t = this.w, i = this.filteredSeriesX(), s = 0; s < i.length - 1; s++) if (i[s][0] !== i[s + 1][0]) {
      e = !1;
      break;
    }
    return t.globals.allSeriesHasEqualX = e, e;
  } }, { key: "filteredSeriesX", value: function() {
    var e = this.w.globals.seriesX.map(function(t) {
      return t.length > 0 ? t : [];
    });
    return e;
  } }]), n;
}(), Aa = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w, this.twoDSeries = [], this.threeDSeries = [], this.twoDSeriesX = [], this.seriesGoals = [], this.coreUtils = new Oe(this.ctx);
  }
  return te(n, [{ key: "isMultiFormat", value: function() {
    return this.isFormatXY() || this.isFormat2DArray();
  } }, { key: "isFormatXY", value: function() {
    var e = this.w.config.series.slice(), t = new st(this.ctx);
    if (this.activeSeriesIndex = t.getActiveConfigSeriesIndex(), e[this.activeSeriesIndex].data !== void 0 && e[this.activeSeriesIndex].data.length > 0 && e[this.activeSeriesIndex].data[0] !== null && e[this.activeSeriesIndex].data[0].x !== void 0 && e[this.activeSeriesIndex].data[0] !== null) return !0;
  } }, { key: "isFormat2DArray", value: function() {
    var e = this.w.config.series.slice(), t = new st(this.ctx);
    if (this.activeSeriesIndex = t.getActiveConfigSeriesIndex(), e[this.activeSeriesIndex].data !== void 0 && e[this.activeSeriesIndex].data.length > 0 && e[this.activeSeriesIndex].data[0] !== void 0 && e[this.activeSeriesIndex].data[0] !== null && e[this.activeSeriesIndex].data[0].constructor === Array) return !0;
  } }, { key: "handleFormat2DArray", value: function(e, t) {
    for (var i = this.w.config, s = this.w.globals, a = i.chart.type === "boxPlot" || i.series[t].type === "boxPlot", r = 0; r < e[t].data.length; r++) if (e[t].data[r][1] !== void 0 && (Array.isArray(e[t].data[r][1]) && e[t].data[r][1].length === 4 && !a ? this.twoDSeries.push(_.parseNumber(e[t].data[r][1][3])) : e[t].data[r].length >= 5 ? this.twoDSeries.push(_.parseNumber(e[t].data[r][4])) : this.twoDSeries.push(_.parseNumber(e[t].data[r][1])), s.dataFormatXNumeric = !0), i.xaxis.type === "datetime") {
      var o = new Date(e[t].data[r][0]);
      o = new Date(o).getTime(), this.twoDSeriesX.push(o);
    } else this.twoDSeriesX.push(e[t].data[r][0]);
    for (var l = 0; l < e[t].data.length; l++) e[t].data[l][2] !== void 0 && (this.threeDSeries.push(e[t].data[l][2]), s.isDataXYZ = !0);
  } }, { key: "handleFormatXY", value: function(e, t) {
    var i = this.w.config, s = this.w.globals, a = new Ye(this.ctx), r = t;
    s.collapsedSeriesIndices.indexOf(t) > -1 && (r = this.activeSeriesIndex);
    for (var o = 0; o < e[t].data.length; o++) e[t].data[o].y !== void 0 && (Array.isArray(e[t].data[o].y) ? this.twoDSeries.push(_.parseNumber(e[t].data[o].y[e[t].data[o].y.length - 1])) : this.twoDSeries.push(_.parseNumber(e[t].data[o].y))), e[t].data[o].goals !== void 0 && Array.isArray(e[t].data[o].goals) ? (this.seriesGoals[t] === void 0 && (this.seriesGoals[t] = []), this.seriesGoals[t].push(e[t].data[o].goals)) : (this.seriesGoals[t] === void 0 && (this.seriesGoals[t] = []), this.seriesGoals[t].push(null));
    for (var l = 0; l < e[r].data.length; l++) {
      var c = typeof e[r].data[l].x == "string", h = Array.isArray(e[r].data[l].x), d = !h && !!a.isValidDate(e[r].data[l].x);
      if (c || d) if (c || i.xaxis.convertedCatToNumeric) {
        var u = s.isBarHorizontal && s.isRangeData;
        i.xaxis.type !== "datetime" || u ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(e[r].data[l].x), isNaN(e[r].data[l].x) || this.w.config.xaxis.type === "category" || typeof e[r].data[l].x == "string" || (s.isXNumeric = !0)) : this.twoDSeriesX.push(a.parseDate(e[r].data[l].x));
      } else i.xaxis.type === "datetime" ? this.twoDSeriesX.push(a.parseDate(e[r].data[l].x.toString())) : (s.dataFormatXNumeric = !0, s.isXNumeric = !0, this.twoDSeriesX.push(parseFloat(e[r].data[l].x)));
      else h ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(e[r].data[l].x)) : (s.isXNumeric = !0, s.dataFormatXNumeric = !0, this.twoDSeriesX.push(e[r].data[l].x));
    }
    if (e[t].data[0] && e[t].data[0].z !== void 0) {
      for (var g = 0; g < e[t].data.length; g++) this.threeDSeries.push(e[t].data[g].z);
      s.isDataXYZ = !0;
    }
  } }, { key: "handleRangeData", value: function(e, t) {
    var i = this.w.globals, s = {};
    return this.isFormat2DArray() ? s = this.handleRangeDataFormat("array", e, t) : this.isFormatXY() && (s = this.handleRangeDataFormat("xy", e, t)), i.seriesRangeStart[t] = s.start === void 0 ? [] : s.start, i.seriesRangeEnd[t] = s.end === void 0 ? [] : s.end, i.seriesRange[t] = s.rangeUniques, i.seriesRange.forEach(function(a, r) {
      a && a.forEach(function(o, l) {
        o.y.forEach(function(c, h) {
          for (var d = 0; d < o.y.length; d++) if (h !== d) {
            var u = c.y1, g = c.y2, p = o.y[d].y1;
            u <= o.y[d].y2 && p <= g && (o.overlaps.indexOf(c.rangeName) < 0 && o.overlaps.push(c.rangeName), o.overlaps.indexOf(o.y[d].rangeName) < 0 && o.overlaps.push(o.y[d].rangeName));
          }
        });
      });
    }), s;
  } }, { key: "handleCandleStickBoxData", value: function(e, t) {
    var i = this.w.globals, s = {};
    return this.isFormat2DArray() ? s = this.handleCandleStickBoxDataFormat("array", e, t) : this.isFormatXY() && (s = this.handleCandleStickBoxDataFormat("xy", e, t)), i.seriesCandleO[t] = s.o, i.seriesCandleH[t] = s.h, i.seriesCandleM[t] = s.m, i.seriesCandleL[t] = s.l, i.seriesCandleC[t] = s.c, s;
  } }, { key: "handleRangeDataFormat", value: function(e, t, i) {
    var s = [], a = [], r = t[i].data.filter(function(h, d, u) {
      return d === u.findIndex(function(g) {
        return g.x === h.x;
      });
    }).map(function(h, d) {
      return { x: h.x, overlaps: [], y: [] };
    });
    if (e === "array") for (var o = 0; o < t[i].data.length; o++) Array.isArray(t[i].data[o]) ? (s.push(t[i].data[o][1][0]), a.push(t[i].data[o][1][1])) : (s.push(t[i].data[o]), a.push(t[i].data[o]));
    else if (e === "xy") for (var l = function(h) {
      var d = Array.isArray(t[i].data[h].y), u = _.randomId(), g = t[i].data[h].x, p = { y1: d ? t[i].data[h].y[0] : t[i].data[h].y, y2: d ? t[i].data[h].y[1] : t[i].data[h].y, rangeName: u };
      t[i].data[h].rangeName = u;
      var f = r.findIndex(function(x) {
        return x.x === g;
      });
      r[f].y.push(p), s.push(p.y1), a.push(p.y2);
    }, c = 0; c < t[i].data.length; c++) l(c);
    return { start: s, end: a, rangeUniques: r };
  } }, { key: "handleCandleStickBoxDataFormat", value: function(e, t, i) {
    var s = this.w, a = s.config.chart.type === "boxPlot" || s.config.series[i].type === "boxPlot", r = [], o = [], l = [], c = [], h = [];
    if (e === "array") if (a && t[i].data[0].length === 6 || !a && t[i].data[0].length === 5) for (var d = 0; d < t[i].data.length; d++) r.push(t[i].data[d][1]), o.push(t[i].data[d][2]), a ? (l.push(t[i].data[d][3]), c.push(t[i].data[d][4]), h.push(t[i].data[d][5])) : (c.push(t[i].data[d][3]), h.push(t[i].data[d][4]));
    else for (var u = 0; u < t[i].data.length; u++) Array.isArray(t[i].data[u][1]) && (r.push(t[i].data[u][1][0]), o.push(t[i].data[u][1][1]), a ? (l.push(t[i].data[u][1][2]), c.push(t[i].data[u][1][3]), h.push(t[i].data[u][1][4])) : (c.push(t[i].data[u][1][2]), h.push(t[i].data[u][1][3])));
    else if (e === "xy") for (var g = 0; g < t[i].data.length; g++) Array.isArray(t[i].data[g].y) && (r.push(t[i].data[g].y[0]), o.push(t[i].data[g].y[1]), a ? (l.push(t[i].data[g].y[2]), c.push(t[i].data[g].y[3]), h.push(t[i].data[g].y[4])) : (c.push(t[i].data[g].y[2]), h.push(t[i].data[g].y[3])));
    return { o: r, h: o, m: l, l: c, c: h };
  } }, { key: "parseDataAxisCharts", value: function(e) {
    var t = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.ctx, s = this.w.config, a = this.w.globals, r = new Ye(i), o = s.labels.length > 0 ? s.labels.slice() : s.xaxis.categories.slice();
    a.isRangeBar = s.chart.type === "rangeBar" && a.isBarHorizontal, a.hasXaxisGroups = s.xaxis.type === "category" && s.xaxis.group.groups.length > 0, a.hasXaxisGroups && (a.groups = s.xaxis.group.groups), e.forEach(function(g, p) {
      g.name !== void 0 ? a.seriesNames.push(g.name) : a.seriesNames.push("series-" + parseInt(p + 1, 10));
    }), this.coreUtils.setSeriesYAxisMappings();
    var l = [], c = _e(new Set(s.series.map(function(g) {
      return g.group;
    })));
    s.series.forEach(function(g, p) {
      var f = c.indexOf(g.group);
      l[f] || (l[f] = []), l[f].push(a.seriesNames[p]);
    }), a.seriesGroups = l;
    for (var h = function() {
      for (var g = 0; g < o.length; g++) if (typeof o[g] == "string") {
        if (!r.isValidDate(o[g])) throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");
        t.twoDSeriesX.push(r.parseDate(o[g]));
      } else t.twoDSeriesX.push(o[g]);
    }, d = 0; d < e.length; d++) {
      if (this.twoDSeries = [], this.twoDSeriesX = [], this.threeDSeries = [], e[d].data === void 0) return void console.error("It is a possibility that you may have not included 'data' property in series.");
      if (s.chart.type !== "rangeBar" && s.chart.type !== "rangeArea" && e[d].type !== "rangeBar" && e[d].type !== "rangeArea" || (a.isRangeData = !0, this.handleRangeData(e, d)), this.isMultiFormat()) this.isFormat2DArray() ? this.handleFormat2DArray(e, d) : this.isFormatXY() && this.handleFormatXY(e, d), s.chart.type !== "candlestick" && e[d].type !== "candlestick" && s.chart.type !== "boxPlot" && e[d].type !== "boxPlot" || this.handleCandleStickBoxData(e, d), a.series.push(this.twoDSeries), a.labels.push(this.twoDSeriesX), a.seriesX.push(this.twoDSeriesX), a.seriesGoals = this.seriesGoals, d !== this.activeSeriesIndex || this.fallbackToCategory || (a.isXNumeric = !0);
      else {
        s.xaxis.type === "datetime" ? (a.isXNumeric = !0, h(), a.seriesX.push(this.twoDSeriesX)) : s.xaxis.type === "numeric" && (a.isXNumeric = !0, o.length > 0 && (this.twoDSeriesX = o, a.seriesX.push(this.twoDSeriesX))), a.labels.push(this.twoDSeriesX);
        var u = e[d].data.map(function(g) {
          return _.parseNumber(g);
        });
        a.series.push(u);
      }
      a.seriesZ.push(this.threeDSeries), e[d].color !== void 0 ? a.seriesColors.push(e[d].color) : a.seriesColors.push(void 0);
    }
    return this.w;
  } }, { key: "parseDataNonAxisCharts", value: function(e) {
    var t = this.w.globals, i = this.w.config;
    t.series = e.slice(), t.seriesNames = i.labels.slice();
    for (var s = 0; s < t.series.length; s++) t.seriesNames[s] === void 0 && t.seriesNames.push("series-" + (s + 1));
    return this.w;
  } }, { key: "handleExternalLabelsData", value: function(e) {
    var t = this.w.config, i = this.w.globals;
    t.xaxis.categories.length > 0 ? i.labels = t.xaxis.categories : t.labels.length > 0 ? i.labels = t.labels.slice() : this.fallbackToCategory ? (i.labels = i.labels[0], i.seriesRange.length && (i.seriesRange.map(function(s) {
      s.forEach(function(a) {
        i.labels.indexOf(a.x) < 0 && a.x && i.labels.push(a.x);
      });
    }), i.labels = Array.from(new Set(i.labels.map(JSON.stringify)), JSON.parse)), t.xaxis.convertedCatToNumeric && (new gi(t).convertCatToNumericXaxis(t, this.ctx, i.seriesX[0]), this._generateExternalLabels(e))) : this._generateExternalLabels(e);
  } }, { key: "_generateExternalLabels", value: function(e) {
    var t = this.w.globals, i = this.w.config, s = [];
    if (t.axisCharts) {
      if (t.series.length > 0) if (this.isFormatXY()) for (var a = i.series.map(function(d, u) {
        return d.data.filter(function(g, p, f) {
          return f.findIndex(function(x) {
            return x.x === g.x;
          }) === p;
        });
      }), r = a.reduce(function(d, u, g, p) {
        return p[d].length > u.length ? d : g;
      }, 0), o = 0; o < a[r].length; o++) s.push(o + 1);
      else for (var l = 0; l < t.series[t.maxValsInArrayIndex].length; l++) s.push(l + 1);
      t.seriesX = [];
      for (var c = 0; c < e.length; c++) t.seriesX.push(s);
      this.w.globals.isBarHorizontal || (t.isXNumeric = !0);
    }
    if (s.length === 0) {
      s = t.axisCharts ? [] : t.series.map(function(d, u) {
        return u + 1;
      });
      for (var h = 0; h < e.length; h++) t.seriesX.push(s);
    }
    t.labels = s, i.xaxis.convertedCatToNumeric && (t.categoryLabels = s.map(function(d) {
      return i.xaxis.labels.formatter(d);
    })), t.noLabelsProvided = !0;
  } }, { key: "parseData", value: function(e) {
    var t = this.w, i = t.config, s = t.globals;
    if (this.excludeCollapsedSeriesInYAxis(), this.fallbackToCategory = !1, this.ctx.core.resetGlobals(), this.ctx.core.isMultipleY(), s.axisCharts ? (this.parseDataAxisCharts(e), this.coreUtils.getLargestSeries()) : this.parseDataNonAxisCharts(e), i.chart.stacked) {
      var a = new st(this.ctx);
      s.series = a.setNullSeriesToZeroValues(s.series);
    }
    this.coreUtils.getSeriesTotals(), s.axisCharts && (s.stackedSeriesTotals = this.coreUtils.getStackedSeriesTotals(), s.stackedSeriesTotalsByGroups = this.coreUtils.getStackedSeriesTotalsByGroups()), this.coreUtils.getPercentSeries(), s.dataFormatXNumeric || s.isXNumeric && (i.xaxis.type !== "numeric" || i.labels.length !== 0 || i.xaxis.categories.length !== 0) || this.handleExternalLabelsData(e);
    for (var r = this.coreUtils.getCategoryLabels(s.labels), o = 0; o < r.length; o++) if (Array.isArray(r[o])) {
      s.isMultiLineX = !0;
      break;
    }
  } }, { key: "excludeCollapsedSeriesInYAxis", value: function() {
    var e = this.w, t = [];
    e.globals.seriesYAxisMap.forEach(function(i, s) {
      var a = 0;
      i.forEach(function(r) {
        e.globals.collapsedSeriesIndices.indexOf(r) !== -1 && a++;
      }), a > 0 && a == i.length && t.push(s);
    }), e.globals.ignoreYAxisIndexes = t.map(function(i) {
      return i;
    });
  } }]), n;
}(), oi = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w;
  }
  return te(n, [{ key: "svgStringToNode", value: function(e) {
    return new DOMParser().parseFromString(e, "image/svg+xml").documentElement;
  } }, { key: "scaleSvgNode", value: function(e, t) {
    var i = parseFloat(e.getAttributeNS(null, "width")), s = parseFloat(e.getAttributeNS(null, "height"));
    e.setAttributeNS(null, "width", i * t), e.setAttributeNS(null, "height", s * t), e.setAttributeNS(null, "viewBox", "0 0 " + i + " " + s);
  } }, { key: "getSvgString", value: function(e) {
    var t = this;
    return new Promise(function(i) {
      var s = t.w, a = e || s.config.chart.toolbar.export.scale || s.config.chart.toolbar.export.width / s.globals.svgWidth;
      a || (a = 1);
      var r = s.globals.svgWidth * a, o = s.globals.svgHeight * a, l = s.globals.dom.elWrap.cloneNode(!0);
      l.style.width = r + "px", l.style.height = o + "px";
      var c = new XMLSerializer().serializeToString(l), h = `
        <svg xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class="apexcharts-svg"
          xmlns:data="ApexChartsNS"
          transform="translate(0, 0)"
          width="`.concat(s.globals.svgWidth, 'px" height="').concat(s.globals.svgHeight, `px">
          <foreignObject width="100%" height="100%">
            <div xmlns="http://www.w3.org/1999/xhtml" style="width:`).concat(r, "px; height:").concat(o, `px;">
            <style type="text/css">
              .apexcharts-tooltip, .apexcharts-toolbar, .apexcharts-xaxistooltip, .apexcharts-yaxistooltip, .apexcharts-xcrosshairs, .apexcharts-ycrosshairs, .apexcharts-zoom-rect, .apexcharts-selection-rect {
                display: none;
              }
            </style>
              `).concat(c, `
            </div>
          </foreignObject>
        </svg>
      `), d = t.svgStringToNode(h);
      a !== 1 && t.scaleSvgNode(d, a), t.convertImagesToBase64(d).then(function() {
        h = new XMLSerializer().serializeToString(d), i(h.replace(/&nbsp;/g, "&#160;"));
      });
    });
  } }, { key: "convertImagesToBase64", value: function(e) {
    var t = this, i = e.getElementsByTagName("image"), s = Array.from(i).map(function(a) {
      var r = a.getAttributeNS("http://www.w3.org/1999/xlink", "href");
      return r && !r.startsWith("data:") ? t.getBase64FromUrl(r).then(function(o) {
        a.setAttributeNS("http://www.w3.org/1999/xlink", "href", o);
      }).catch(function(o) {
        console.error("Error converting image to base64:", o);
      }) : Promise.resolve();
    });
    return Promise.all(s);
  } }, { key: "getBase64FromUrl", value: function(e) {
    return new Promise(function(t, i) {
      var s = new Image();
      s.crossOrigin = "Anonymous", s.onload = function() {
        var a = document.createElement("canvas");
        a.width = s.width, a.height = s.height, a.getContext("2d").drawImage(s, 0, 0), t(a.toDataURL());
      }, s.onerror = i, s.src = e;
    });
  } }, { key: "svgUrl", value: function() {
    var e = this;
    return new Promise(function(t) {
      e.getSvgString().then(function(i) {
        var s = new Blob([i], { type: "image/svg+xml;charset=utf-8" });
        t(URL.createObjectURL(s));
      });
    });
  } }, { key: "dataURI", value: function(e) {
    var t = this;
    return new Promise(function(i) {
      var s = t.w, a = e ? e.scale || e.width / s.globals.svgWidth : 1, r = document.createElement("canvas");
      r.width = s.globals.svgWidth * a, r.height = parseInt(s.globals.dom.elWrap.style.height, 10) * a;
      var o = s.config.chart.background !== "transparent" && s.config.chart.background ? s.config.chart.background : "#fff", l = r.getContext("2d");
      l.fillStyle = o, l.fillRect(0, 0, r.width * a, r.height * a), t.getSvgString(a).then(function(c) {
        var h = "data:image/svg+xml," + encodeURIComponent(c), d = new Image();
        d.crossOrigin = "anonymous", d.onload = function() {
          if (l.drawImage(d, 0, 0), r.msToBlob) {
            var u = r.msToBlob();
            i({ blob: u });
          } else {
            var g = r.toDataURL("image/png");
            i({ imgURI: g });
          }
        }, d.src = h;
      });
    });
  } }, { key: "exportToSVG", value: function() {
    var e = this;
    this.svgUrl().then(function(t) {
      e.triggerDownload(t, e.w.config.chart.toolbar.export.svg.filename, ".svg");
    });
  } }, { key: "exportToPng", value: function() {
    var e = this, t = this.w.config.chart.toolbar.export.scale, i = this.w.config.chart.toolbar.export.width, s = t ? { scale: t } : i ? { width: i } : void 0;
    this.dataURI(s).then(function(a) {
      var r = a.imgURI, o = a.blob;
      o ? navigator.msSaveOrOpenBlob(o, e.w.globals.chartID + ".png") : e.triggerDownload(r, e.w.config.chart.toolbar.export.png.filename, ".png");
    });
  } }, { key: "exportToCSV", value: function(e) {
    var t = this, i = e.series, s = e.fileName, a = e.columnDelimiter, r = a === void 0 ? "," : a, o = e.lineDelimiter, l = o === void 0 ? `
` : o, c = this.w;
    i || (i = c.config.series);
    var h = [], d = [], u = "", g = c.globals.series.map(function(v, k) {
      return c.globals.collapsedSeriesIndices.indexOf(k) === -1 ? v : [];
    }), p = function(v) {
      return typeof c.config.chart.toolbar.export.csv.categoryFormatter == "function" ? c.config.chart.toolbar.export.csv.categoryFormatter(v) : c.config.xaxis.type === "datetime" && String(v).length >= 10 ? new Date(v).toDateString() : _.isNumber(v) ? v : v.split(r).join("");
    }, f = function(v) {
      return typeof c.config.chart.toolbar.export.csv.valueFormatter == "function" ? c.config.chart.toolbar.export.csv.valueFormatter(v) : v;
    }, x = Math.max.apply(Math, _e(i.map(function(v) {
      return v.data ? v.data.length : 0;
    }))), m = new Aa(this.ctx), b = new vt(this.ctx), w = function(v) {
      var k = "";
      if (c.globals.axisCharts) {
        if (c.config.xaxis.type === "category" || c.config.xaxis.convertedCatToNumeric) if (c.globals.isBarHorizontal) {
          var A = c.globals.yLabelFormatters[0], S = new st(t.ctx).getActiveConfigSeriesIndex();
          k = A(c.globals.labels[v], { seriesIndex: S, dataPointIndex: v, w: c });
        } else k = b.getLabel(c.globals.labels, c.globals.timescaleLabels, 0, v).text;
        c.config.xaxis.type === "datetime" && (c.config.xaxis.categories.length ? k = c.config.xaxis.categories[v] : c.config.labels.length && (k = c.config.labels[v]));
      } else k = c.config.labels[v];
      return k === null ? "nullvalue" : (Array.isArray(k) && (k = k.join(" ")), _.isNumber(k) ? k : k.split(r).join(""));
    }, y = function(v, k) {
      if (h.length && k === 0 && d.push(h.join(r)), v.data) {
        v.data = v.data.length && v.data || _e(Array(x)).map(function() {
          return "";
        });
        for (var A = 0; A < v.data.length; A++) {
          h = [];
          var S = w(A);
          if (S !== "nullvalue") {
            if (S || (m.isFormatXY() ? S = i[k].data[A].x : m.isFormat2DArray() && (S = i[k].data[A] ? i[k].data[A][0] : "")), k === 0) {
              h.push(p(S));
              for (var C = 0; C < c.globals.series.length; C++) {
                var L, P = m.isFormatXY() ? (L = i[C].data[A]) === null || L === void 0 ? void 0 : L.y : g[C][A];
                h.push(f(P));
              }
            }
            (c.config.chart.type === "candlestick" || v.type && v.type === "candlestick") && (h.pop(), h.push(c.globals.seriesCandleO[k][A]), h.push(c.globals.seriesCandleH[k][A]), h.push(c.globals.seriesCandleL[k][A]), h.push(c.globals.seriesCandleC[k][A])), (c.config.chart.type === "boxPlot" || v.type && v.type === "boxPlot") && (h.pop(), h.push(c.globals.seriesCandleO[k][A]), h.push(c.globals.seriesCandleH[k][A]), h.push(c.globals.seriesCandleM[k][A]), h.push(c.globals.seriesCandleL[k][A]), h.push(c.globals.seriesCandleC[k][A])), c.config.chart.type === "rangeBar" && (h.pop(), h.push(c.globals.seriesRangeStart[k][A]), h.push(c.globals.seriesRangeEnd[k][A])), h.length && d.push(h.join(r));
          }
        }
      }
    };
    h.push(c.config.chart.toolbar.export.csv.headerCategory), c.config.chart.type === "boxPlot" ? (h.push("minimum"), h.push("q1"), h.push("median"), h.push("q3"), h.push("maximum")) : c.config.chart.type === "candlestick" ? (h.push("open"), h.push("high"), h.push("low"), h.push("close")) : c.config.chart.type === "rangeBar" ? (h.push("minimum"), h.push("maximum")) : i.map(function(v, k) {
      var A = (v.name ? v.name : "series-".concat(k)) + "";
      c.globals.axisCharts && h.push(A.split(r).join("") ? A.split(r).join("") : "series-".concat(k));
    }), c.globals.axisCharts || (h.push(c.config.chart.toolbar.export.csv.headerValue), d.push(h.join(r))), c.globals.allSeriesHasEqualX || !c.globals.axisCharts || c.config.xaxis.categories.length || c.config.labels.length ? i.map(function(v, k) {
      c.globals.axisCharts ? y(v, k) : ((h = []).push(p(c.globals.labels[k])), h.push(f(g[k])), d.push(h.join(r)));
    }) : function() {
      var v = /* @__PURE__ */ new Set(), k = {};
      i.forEach(function(A, S) {
        A == null || A.data.forEach(function(C) {
          var L, P;
          if (m.isFormatXY()) L = C.x, P = C.y;
          else {
            if (!m.isFormat2DArray()) return;
            L = C[0], P = C[1];
          }
          k[L] || (k[L] = Array(i.length).fill("")), k[L][S] = f(P), v.add(L);
        });
      }), h.length && d.push(h.join(r)), Array.from(v).sort().forEach(function(A) {
        d.push([p(A), k[A].join(r)]);
      });
    }(), u += d.join(l), this.triggerDownload("data:text/csv; charset=utf-8," + encodeURIComponent("\uFEFF" + u), s || c.config.chart.toolbar.export.csv.filename, ".csv");
  } }, { key: "triggerDownload", value: function(e, t, i) {
    var s = document.createElement("a");
    s.href = e, s.download = (t || this.w.globals.chartID) + i, document.body.appendChild(s), s.click(), document.body.removeChild(s);
  } }]), n;
}(), pi = function() {
  function n(e, t) {
    ee(this, n), this.ctx = e, this.elgrid = t, this.w = e.w;
    var i = this.w;
    this.axesUtils = new vt(e), this.xaxisLabels = i.globals.labels.slice(), i.globals.timescaleLabels.length > 0 && !i.globals.isBarHorizontal && (this.xaxisLabels = i.globals.timescaleLabels.slice()), i.config.xaxis.overwriteCategories && (this.xaxisLabels = i.config.xaxis.overwriteCategories), this.drawnLabels = [], this.drawnLabelsRects = [], i.config.xaxis.position === "top" ? this.offY = 0 : this.offY = i.globals.gridHeight, this.offY = this.offY + i.config.xaxis.axisBorder.offsetY, this.isCategoryBarHorizontal = i.config.chart.type === "bar" && i.config.plotOptions.bar.horizontal, this.xaxisFontSize = i.config.xaxis.labels.style.fontSize, this.xaxisFontFamily = i.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = i.config.xaxis.labels.style.colors, this.xaxisBorderWidth = i.config.xaxis.axisBorder.width, this.isCategoryBarHorizontal && (this.xaxisBorderWidth = i.config.yaxis[0].axisBorder.width.toString()), this.xaxisBorderWidth.indexOf("%") > -1 ? this.xaxisBorderWidth = i.globals.gridWidth * parseInt(this.xaxisBorderWidth, 10) / 100 : this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth, 10), this.xaxisBorderHeight = i.config.xaxis.axisBorder.height, this.yaxis = i.config.yaxis[0];
  }
  return te(n, [{ key: "drawXaxis", value: function() {
    var e = this.w, t = new W(this.ctx), i = t.group({ class: "apexcharts-xaxis", transform: "translate(".concat(e.config.xaxis.offsetX, ", ").concat(e.config.xaxis.offsetY, ")") }), s = t.group({ class: "apexcharts-xaxis-texts-g", transform: "translate(".concat(e.globals.translateXAxisX, ", ").concat(e.globals.translateXAxisY, ")") });
    i.add(s);
    for (var a = [], r = 0; r < this.xaxisLabels.length; r++) a.push(this.xaxisLabels[r]);
    if (this.drawXAxisLabelAndGroup(!0, t, s, a, e.globals.isXNumeric, function(p, f) {
      return f;
    }), e.globals.hasXaxisGroups) {
      var o = e.globals.groups;
      a = [];
      for (var l = 0; l < o.length; l++) a.push(o[l].title);
      var c = {};
      e.config.xaxis.group.style && (c.xaxisFontSize = e.config.xaxis.group.style.fontSize, c.xaxisFontFamily = e.config.xaxis.group.style.fontFamily, c.xaxisForeColors = e.config.xaxis.group.style.colors, c.fontWeight = e.config.xaxis.group.style.fontWeight, c.cssClass = e.config.xaxis.group.style.cssClass), this.drawXAxisLabelAndGroup(!1, t, s, a, !1, function(p, f) {
        return o[p].cols * f;
      }, c);
    }
    if (e.config.xaxis.title.text !== void 0) {
      var h = t.group({ class: "apexcharts-xaxis-title" }), d = t.drawText({ x: e.globals.gridWidth / 2 + e.config.xaxis.title.offsetX, y: this.offY + parseFloat(this.xaxisFontSize) + (e.config.xaxis.position === "bottom" ? e.globals.xAxisLabelsHeight : -e.globals.xAxisLabelsHeight - 10) + e.config.xaxis.title.offsetY, text: e.config.xaxis.title.text, textAnchor: "middle", fontSize: e.config.xaxis.title.style.fontSize, fontFamily: e.config.xaxis.title.style.fontFamily, fontWeight: e.config.xaxis.title.style.fontWeight, foreColor: e.config.xaxis.title.style.color, cssClass: "apexcharts-xaxis-title-text " + e.config.xaxis.title.style.cssClass });
      h.add(d), i.add(h);
    }
    if (e.config.xaxis.axisBorder.show) {
      var u = e.globals.barPadForNumericAxis, g = t.drawLine(e.globals.padHorizontal + e.config.xaxis.axisBorder.offsetX - u, this.offY, this.xaxisBorderWidth + u, this.offY, e.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight);
      this.elgrid && this.elgrid.elGridBorders && e.config.grid.show ? this.elgrid.elGridBorders.add(g) : i.add(g);
    }
    return i;
  } }, { key: "drawXAxisLabelAndGroup", value: function(e, t, i, s, a, r) {
    var o, l = this, c = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : {}, h = [], d = [], u = this.w, g = c.xaxisFontSize || this.xaxisFontSize, p = c.xaxisFontFamily || this.xaxisFontFamily, f = c.xaxisForeColors || this.xaxisForeColors, x = c.fontWeight || u.config.xaxis.labels.style.fontWeight, m = c.cssClass || u.config.xaxis.labels.style.cssClass, b = u.globals.padHorizontal, w = s.length, y = u.config.xaxis.type === "category" ? u.globals.dataPoints : w;
    if (y === 0 && w > y && (y = w), a) {
      var v = Math.max(Number(u.config.xaxis.tickAmount) || 1, y > 1 ? y - 1 : y);
      o = u.globals.gridWidth / Math.min(v, w - 1), b = b + r(0, o) / 2 + u.config.xaxis.labels.offsetX;
    } else o = u.globals.gridWidth / y, b = b + r(0, o) + u.config.xaxis.labels.offsetX;
    for (var k = function(S) {
      var C = b - r(S, o) / 2 + u.config.xaxis.labels.offsetX;
      S === 0 && w === 1 && o / 2 === b && y === 1 && (C = u.globals.gridWidth / 2);
      var L = l.axesUtils.getLabel(s, u.globals.timescaleLabels, C, S, h, g, e), P = 28;
      if (u.globals.rotateXLabels && e && (P = 22), u.config.xaxis.title.text && u.config.xaxis.position === "top" && (P += parseFloat(u.config.xaxis.title.style.fontSize) + 2), e || (P = P + parseFloat(g) + (u.globals.xAxisLabelsHeight - u.globals.xAxisGroupLabelsHeight) + (u.globals.rotateXLabels ? 10 : 0)), L = u.config.xaxis.tickAmount !== void 0 && u.config.xaxis.tickAmount !== "dataPoints" && u.config.xaxis.type !== "datetime" ? l.axesUtils.checkLabelBasedOnTickamount(S, L, w) : l.axesUtils.checkForOverflowingLabels(S, L, w, h, d), u.config.xaxis.labels.show) {
        var R = t.drawText({ x: L.x, y: l.offY + u.config.xaxis.labels.offsetY + P - (u.config.xaxis.position === "top" ? u.globals.xAxisHeight + u.config.xaxis.axisTicks.height - 2 : 0), text: L.text, textAnchor: "middle", fontWeight: L.isBold ? 600 : x, fontSize: g, fontFamily: p, foreColor: Array.isArray(f) ? e && u.config.xaxis.convertedCatToNumeric ? f[u.globals.minX + S - 1] : f[S] : f, isPlainText: !1, cssClass: (e ? "apexcharts-xaxis-label " : "apexcharts-xaxis-group-label ") + m });
        if (i.add(R), R.on("click", function(T) {
          if (typeof u.config.chart.events.xAxisLabelClick == "function") {
            var O = Object.assign({}, u, { labelIndex: S });
            u.config.chart.events.xAxisLabelClick(T, l.ctx, O);
          }
        }), e) {
          var I = document.createElementNS(u.globals.SVGNS, "title");
          I.textContent = Array.isArray(L.text) ? L.text.join(" ") : L.text, R.node.appendChild(I), L.text !== "" && (h.push(L.text), d.push(L));
        }
      }
      S < w - 1 && (b += r(S + 1, o));
    }, A = 0; A <= w - 1; A++) k(A);
  } }, { key: "drawXaxisInversed", value: function(e) {
    var t, i, s = this, a = this.w, r = new W(this.ctx), o = a.config.yaxis[0].opposite ? a.globals.translateYAxisX[e] : 0, l = r.group({ class: "apexcharts-yaxis apexcharts-xaxis-inversed", rel: e }), c = r.group({ class: "apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g", transform: "translate(" + o + ", 0)" });
    l.add(c);
    var h = [];
    if (a.config.yaxis[e].show) for (var d = 0; d < this.xaxisLabels.length; d++) h.push(this.xaxisLabels[d]);
    t = a.globals.gridHeight / h.length, i = -t / 2.2;
    var u = a.globals.yLabelFormatters[0], g = a.config.yaxis[0].labels;
    if (g.show) for (var p = function(v) {
      var k = h[v] === void 0 ? "" : h[v];
      k = u(k, { seriesIndex: e, dataPointIndex: v, w: a });
      var A = s.axesUtils.getYAxisForeColor(g.style.colors, e), S = 0;
      Array.isArray(k) && (S = k.length / 2 * parseInt(g.style.fontSize, 10));
      var C = g.offsetX - 15, L = "end";
      s.yaxis.opposite && (L = "start"), a.config.yaxis[0].labels.align === "left" ? (C = g.offsetX, L = "start") : a.config.yaxis[0].labels.align === "center" ? (C = g.offsetX, L = "middle") : a.config.yaxis[0].labels.align === "right" && (L = "end");
      var P = r.drawText({ x: C, y: i + t + g.offsetY - S, text: k, textAnchor: L, foreColor: Array.isArray(A) ? A[v] : A, fontSize: g.style.fontSize, fontFamily: g.style.fontFamily, fontWeight: g.style.fontWeight, isPlainText: !1, cssClass: "apexcharts-yaxis-label " + g.style.cssClass, maxWidth: g.maxWidth });
      c.add(P), P.on("click", function(T) {
        if (typeof a.config.chart.events.xAxisLabelClick == "function") {
          var O = Object.assign({}, a, { labelIndex: v });
          a.config.chart.events.xAxisLabelClick(T, s.ctx, O);
        }
      });
      var R = document.createElementNS(a.globals.SVGNS, "title");
      if (R.textContent = Array.isArray(k) ? k.join(" ") : k, P.node.appendChild(R), a.config.yaxis[e].labels.rotate !== 0) {
        var I = r.rotateAroundCenter(P.node);
        P.node.setAttribute("transform", "rotate(".concat(a.config.yaxis[e].labels.rotate, " 0 ").concat(I.y, ")"));
      }
      i += t;
    }, f = 0; f <= h.length - 1; f++) p(f);
    if (a.config.yaxis[0].title.text !== void 0) {
      var x = r.group({ class: "apexcharts-yaxis-title apexcharts-xaxis-title-inversed", transform: "translate(" + o + ", 0)" }), m = r.drawText({ x: a.config.yaxis[0].title.offsetX, y: a.globals.gridHeight / 2 + a.config.yaxis[0].title.offsetY, text: a.config.yaxis[0].title.text, textAnchor: "middle", foreColor: a.config.yaxis[0].title.style.color, fontSize: a.config.yaxis[0].title.style.fontSize, fontWeight: a.config.yaxis[0].title.style.fontWeight, fontFamily: a.config.yaxis[0].title.style.fontFamily, cssClass: "apexcharts-yaxis-title-text " + a.config.yaxis[0].title.style.cssClass });
      x.add(m), l.add(x);
    }
    var b = 0;
    this.isCategoryBarHorizontal && a.config.yaxis[0].opposite && (b = a.globals.gridWidth);
    var w = a.config.xaxis.axisBorder;
    if (w.show) {
      var y = r.drawLine(a.globals.padHorizontal + w.offsetX + b, 1 + w.offsetY, a.globals.padHorizontal + w.offsetX + b, a.globals.gridHeight + w.offsetY, w.color, 0);
      this.elgrid && this.elgrid.elGridBorders && a.config.grid.show ? this.elgrid.elGridBorders.add(y) : l.add(y);
    }
    return a.config.yaxis[0].axisTicks.show && this.axesUtils.drawYAxisTicks(b, h.length, a.config.yaxis[0].axisBorder, a.config.yaxis[0].axisTicks, 0, t, l), l;
  } }, { key: "drawXaxisTicks", value: function(e, t, i) {
    var s = this.w, a = e;
    if (!(e < 0 || e - 2 > s.globals.gridWidth)) {
      var r = this.offY + s.config.xaxis.axisTicks.offsetY;
      if (t = t + r + s.config.xaxis.axisTicks.height, s.config.xaxis.position === "top" && (t = r - s.config.xaxis.axisTicks.height), s.config.xaxis.axisTicks.show) {
        var o = new W(this.ctx).drawLine(e + s.config.xaxis.axisTicks.offsetX, r + s.config.xaxis.offsetY, a + s.config.xaxis.axisTicks.offsetX, t + s.config.xaxis.offsetY, s.config.xaxis.axisTicks.color);
        i.add(o), o.node.classList.add("apexcharts-xaxis-tick");
      }
    }
  } }, { key: "getXAxisTicksPositions", value: function() {
    var e = this.w, t = [], i = this.xaxisLabels.length, s = e.globals.padHorizontal;
    if (e.globals.timescaleLabels.length > 0) for (var a = 0; a < i; a++) s = this.xaxisLabels[a].position, t.push(s);
    else for (var r = i, o = 0; o < r; o++) {
      var l = r;
      e.globals.isXNumeric && e.config.chart.type !== "bar" && (l -= 1), s += e.globals.gridWidth / l, t.push(s);
    }
    return t;
  } }, { key: "xAxisLabelCorrections", value: function() {
    var e = this.w, t = new W(this.ctx), i = e.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"), s = e.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text:not(.apexcharts-xaxis-group-label)"), a = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"), r = e.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");
    if (e.globals.rotateXLabels || e.config.xaxis.labels.rotateAlways) for (var o = 0; o < s.length; o++) {
      var l = t.rotateAroundCenter(s[o]);
      l.y = l.y - 1, l.x = l.x + 1, s[o].setAttribute("transform", "rotate(".concat(e.config.xaxis.labels.rotate, " ").concat(l.x, " ").concat(l.y, ")")), s[o].setAttribute("text-anchor", "end"), i.setAttribute("transform", "translate(0, ".concat(-10, ")"));
      var c = s[o].childNodes;
      e.config.xaxis.labels.trim && Array.prototype.forEach.call(c, function(g) {
        t.placeTextWithEllipsis(g, g.textContent, e.globals.xAxisLabelsHeight - (e.config.legend.position === "bottom" ? 20 : 10));
      });
    }
    else (function() {
      for (var g = e.globals.gridWidth / (e.globals.labels.length + 1), p = 0; p < s.length; p++) {
        var f = s[p].childNodes;
        e.config.xaxis.labels.trim && e.config.xaxis.type !== "datetime" && Array.prototype.forEach.call(f, function(x) {
          t.placeTextWithEllipsis(x, x.textContent, g);
        });
      }
    })();
    if (a.length > 0) {
      var h = a[a.length - 1].getBBox(), d = a[0].getBBox();
      h.x < -20 && a[a.length - 1].parentNode.removeChild(a[a.length - 1]), d.x + d.width > e.globals.gridWidth && !e.globals.isBarHorizontal && a[0].parentNode.removeChild(a[0]);
      for (var u = 0; u < r.length; u++) t.placeTextWithEllipsis(r[u], r[u].textContent, e.config.yaxis[0].labels.maxWidth - (e.config.yaxis[0].title.text ? 2 * parseFloat(e.config.yaxis[0].title.style.fontSize) : 0) - 15);
    }
  } }]), n;
}(), Wn = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w;
    var t = this.w;
    this.xaxisLabels = t.globals.labels.slice(), this.axesUtils = new vt(e), this.isRangeBar = t.globals.seriesRange.length && t.globals.isBarHorizontal, t.globals.timescaleLabels.length > 0 && (this.xaxisLabels = t.globals.timescaleLabels.slice());
  }
  return te(n, [{ key: "drawGridArea", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, t = this.w, i = new W(this.ctx);
    e || (e = i.group({ class: "apexcharts-grid" }));
    var s = i.drawLine(t.globals.padHorizontal, 1, t.globals.padHorizontal, t.globals.gridHeight, "transparent"), a = i.drawLine(t.globals.padHorizontal, t.globals.gridHeight, t.globals.gridWidth, t.globals.gridHeight, "transparent");
    return e.add(a), e.add(s), e;
  } }, { key: "drawGrid", value: function() {
    if (this.w.globals.axisCharts) {
      var e = this.renderGrid();
      return this.drawGridArea(e.el), e;
    }
    return null;
  } }, { key: "createGridMask", value: function() {
    var e = this.w, t = e.globals, i = new W(this.ctx), s = Array.isArray(e.config.stroke.width) ? Math.max.apply(Math, _e(e.config.stroke.width)) : e.config.stroke.width, a = function(h) {
      var d = document.createElementNS(t.SVGNS, "clipPath");
      return d.setAttribute("id", h), d;
    };
    t.dom.elGridRectMask = a("gridRectMask".concat(t.cuid)), t.dom.elGridRectBarMask = a("gridRectBarMask".concat(t.cuid)), t.dom.elGridRectMarkerMask = a("gridRectMarkerMask".concat(t.cuid)), t.dom.elForecastMask = a("forecastMask".concat(t.cuid)), t.dom.elNonForecastMask = a("nonForecastMask".concat(t.cuid));
    var r = 0, o = 0;
    (["bar", "rangeBar", "candlestick", "boxPlot"].includes(e.config.chart.type) || e.globals.comboBarCount > 0) && e.globals.isXNumeric && !e.globals.isBarHorizontal && (r = Math.max(e.config.grid.padding.left, t.barPadForNumericAxis), o = Math.max(e.config.grid.padding.right, t.barPadForNumericAxis)), t.dom.elGridRect = i.drawRect(-s / 2 - 2, -s / 2 - 2, t.gridWidth + s + 4, t.gridHeight + s + 4, 0, "#fff"), t.dom.elGridRectBar = i.drawRect(-s / 2 - r - 2, -s / 2 - 2, t.gridWidth + s + o + r + 4, t.gridHeight + s + 4, 0, "#fff");
    var l = e.globals.markers.largestSize;
    t.dom.elGridRectMarker = i.drawRect(-l, -l, t.gridWidth + 2 * l, t.gridHeight + 2 * l, 0, "#fff"), t.dom.elGridRectMask.appendChild(t.dom.elGridRect.node), t.dom.elGridRectBarMask.appendChild(t.dom.elGridRectBar.node), t.dom.elGridRectMarkerMask.appendChild(t.dom.elGridRectMarker.node);
    var c = t.dom.baseEl.querySelector("defs");
    c.appendChild(t.dom.elGridRectMask), c.appendChild(t.dom.elGridRectBarMask), c.appendChild(t.dom.elGridRectMarkerMask), c.appendChild(t.dom.elForecastMask), c.appendChild(t.dom.elNonForecastMask);
  } }, { key: "_drawGridLines", value: function(e) {
    var t = e.i, i = e.x1, s = e.y1, a = e.x2, r = e.y2, o = e.xCount, l = e.parent, c = this.w;
    if (!(t === 0 && c.globals.skipFirstTimelinelabel || t === o - 1 && c.globals.skipLastTimelinelabel && !c.config.xaxis.labels.formatter || c.config.chart.type === "radar")) {
      c.config.grid.xaxis.lines.show && this._drawGridLine({ i: t, x1: i, y1: s, x2: a, y2: r, xCount: o, parent: l });
      var h = 0;
      if (c.globals.hasXaxisGroups && c.config.xaxis.tickPlacement === "between") {
        var d = c.globals.groups;
        if (d) {
          for (var u = 0, g = 0; u < t && g < d.length; g++) u += d[g].cols;
          u === t && (h = 0.6 * c.globals.xAxisLabelsHeight);
        }
      }
      new pi(this.ctx).drawXaxisTicks(i, h, c.globals.dom.elGraphical);
    }
  } }, { key: "_drawGridLine", value: function(e) {
    var t = e.i, i = e.x1, s = e.y1, a = e.x2, r = e.y2, o = e.xCount, l = e.parent, c = this.w, h = l.node.classList.contains("apexcharts-gridlines-horizontal"), d = c.globals.barPadForNumericAxis, u = s === 0 && r === 0 || i === 0 && a === 0 || s === c.globals.gridHeight && r === c.globals.gridHeight || c.globals.isBarHorizontal && (t === 0 || t === o - 1), g = new W(this).drawLine(i - (h ? d : 0), s, a + (h ? d : 0), r, c.config.grid.borderColor, c.config.grid.strokeDashArray);
    g.node.classList.add("apexcharts-gridline"), u && c.config.grid.show ? this.elGridBorders.add(g) : l.add(g);
  } }, { key: "_drawGridBandRect", value: function(e) {
    var t = e.c, i = e.x1, s = e.y1, a = e.x2, r = e.y2, o = e.type, l = this.w, c = new W(this.ctx), h = l.globals.barPadForNumericAxis, d = l.config.grid[o].colors[t], u = c.drawRect(i - (o === "row" ? h : 0), s, a + (o === "row" ? 2 * h : 0), r, 0, d, l.config.grid[o].opacity);
    this.elg.add(u), u.attr("clip-path", "url(#gridRectMask".concat(l.globals.cuid, ")")), u.node.classList.add("apexcharts-grid-".concat(o));
  } }, { key: "_drawXYLines", value: function(e) {
    var t = this, i = e.xCount, s = e.tickAmount, a = this.w;
    if (a.config.grid.xaxis.lines.show || a.config.xaxis.axisTicks.show) {
      var r, o = a.globals.padHorizontal, l = a.globals.gridHeight;
      a.globals.timescaleLabels.length ? function(p) {
        for (var f = p.xC, x = p.x1, m = p.y1, b = p.x2, w = p.y2, y = 0; y < f; y++) x = t.xaxisLabels[y].position, b = t.xaxisLabels[y].position, t._drawGridLines({ i: y, x1: x, y1: m, x2: b, y2: w, xCount: i, parent: t.elgridLinesV });
      }({ xC: i, x1: o, y1: 0, x2: r, y2: l }) : (a.globals.isXNumeric && (i = a.globals.xAxisScale.result.length), function(p) {
        for (var f = p.xC, x = p.x1, m = p.y1, b = p.x2, w = p.y2, y = 0; y < f + (a.globals.isXNumeric ? 0 : 1); y++) y === 0 && f === 1 && a.globals.dataPoints === 1 && (b = x = a.globals.gridWidth / 2), t._drawGridLines({ i: y, x1: x, y1: m, x2: b, y2: w, xCount: i, parent: t.elgridLinesV }), b = x += a.globals.gridWidth / (a.globals.isXNumeric ? f - 1 : f);
      }({ xC: i, x1: o, y1: 0, x2: r, y2: l }));
    }
    if (a.config.grid.yaxis.lines.show) {
      var c = 0, h = 0, d = a.globals.gridWidth, u = s + 1;
      this.isRangeBar && (u = a.globals.labels.length);
      for (var g = 0; g < u + (this.isRangeBar ? 1 : 0); g++) this._drawGridLine({ i: g, xCount: u + (this.isRangeBar ? 1 : 0), x1: 0, y1: c, x2: d, y2: h, parent: this.elgridLinesH }), h = c += a.globals.gridHeight / (this.isRangeBar ? u : s);
    }
  } }, { key: "_drawInvertedXYLines", value: function(e) {
    var t = e.xCount, i = this.w;
    if (i.config.grid.xaxis.lines.show || i.config.xaxis.axisTicks.show) for (var s, a = i.globals.padHorizontal, r = i.globals.gridHeight, o = 0; o < t + 1; o++)
      i.config.grid.xaxis.lines.show && this._drawGridLine({ i: o, xCount: t + 1, x1: a, y1: 0, x2: s, y2: r, parent: this.elgridLinesV }), new pi(this.ctx).drawXaxisTicks(a, 0, i.globals.dom.elGraphical), s = a += i.globals.gridWidth / t;
    if (i.config.grid.yaxis.lines.show) for (var l = 0, c = 0, h = i.globals.gridWidth, d = 0; d < i.globals.dataPoints + 1; d++) this._drawGridLine({ i: d, xCount: i.globals.dataPoints + 1, x1: 0, y1: l, x2: h, y2: c, parent: this.elgridLinesH }), c = l += i.globals.gridHeight / i.globals.dataPoints;
  } }, { key: "renderGrid", value: function() {
    var e = this.w, t = e.globals, i = new W(this.ctx);
    this.elg = i.group({ class: "apexcharts-grid" }), this.elgridLinesH = i.group({ class: "apexcharts-gridlines-horizontal" }), this.elgridLinesV = i.group({ class: "apexcharts-gridlines-vertical" }), this.elGridBorders = i.group({ class: "apexcharts-grid-borders" }), this.elg.add(this.elgridLinesH), this.elg.add(this.elgridLinesV), e.config.grid.show || (this.elgridLinesV.hide(), this.elgridLinesH.hide(), this.elGridBorders.hide());
    for (var s = 0; s < t.seriesYAxisMap.length && t.ignoreYAxisIndexes.includes(s); ) s++;
    s === t.seriesYAxisMap.length && (s = 0);
    var a, r = t.yAxisScale[s].result.length - 1;
    if (!t.isBarHorizontal || this.isRangeBar) {
      var o, l, c;
      a = this.xaxisLabels.length, this.isRangeBar && (r = t.labels.length, e.config.xaxis.tickAmount && e.config.xaxis.labels.formatter && (a = e.config.xaxis.tickAmount), ((o = t.yAxisScale) === null || o === void 0 || (l = o[s]) === null || l === void 0 || (c = l.result) === null || c === void 0 ? void 0 : c.length) > 0 && e.config.xaxis.type !== "datetime" && (a = t.yAxisScale[s].result.length - 1)), this._drawXYLines({ xCount: a, tickAmount: r });
    } else a = r, r = t.xTickAmount, this._drawInvertedXYLines({ xCount: a, tickAmount: r });
    return this.drawGridBands(a, r), { el: this.elg, elGridBorders: this.elGridBorders, xAxisTickWidth: t.gridWidth / a };
  } }, { key: "drawGridBands", value: function(e, t) {
    var i, s, a = this, r = this.w;
    if (((i = r.config.grid.row.colors) === null || i === void 0 ? void 0 : i.length) > 0 && function(p, f, x, m, b, w) {
      for (var y = 0, v = 0; y < f; y++, v++) v >= r.config.grid[p].colors.length && (v = 0), a._drawGridBandRect({ c: v, x1: x, y1: m, x2: b, y2: w, type: p }), m += r.globals.gridHeight / t;
    }("row", t, 0, 0, r.globals.gridWidth, r.globals.gridHeight / t), ((s = r.config.grid.column.colors) === null || s === void 0 ? void 0 : s.length) > 0) {
      var o = r.globals.isBarHorizontal || r.config.xaxis.tickPlacement !== "on" || r.config.xaxis.type !== "category" && !r.config.xaxis.convertedCatToNumeric ? e : e - 1;
      r.globals.isXNumeric && (o = r.globals.xAxisScale.result.length - 1);
      for (var l = r.globals.padHorizontal, c = r.globals.padHorizontal + r.globals.gridWidth / o, h = r.globals.gridHeight, d = 0, u = 0; d < e; d++, u++) {
        var g;
        u >= r.config.grid.column.colors.length && (u = 0), r.config.xaxis.type === "datetime" && (l = this.xaxisLabels[d].position, c = (((g = this.xaxisLabels[d + 1]) === null || g === void 0 ? void 0 : g.position) || r.globals.gridWidth) - this.xaxisLabels[d].position), this._drawGridBandRect({ c: u, x1: l, y1: 0, x2: c, y2: h, type: "column" }), l += r.globals.gridWidth / o;
      }
    }
  } }]), n;
}(), Bn = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w, this.coreUtils = new Oe(this.ctx);
  }
  return te(n, [{ key: "niceScale", value: function(e, t) {
    var i, s, a, r, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, l = 1e-11, c = this.w, h = c.globals;
    h.isBarHorizontal ? (i = c.config.xaxis, s = Math.max((h.svgWidth - 100) / 25, 2)) : (i = c.config.yaxis[o], s = Math.max((h.svgHeight - 100) / 15, 2)), _.isNumber(s) || (s = 10), a = i.min !== void 0 && i.min !== null, r = i.max !== void 0 && i.min !== null;
    var d = i.stepSize !== void 0 && i.stepSize !== null, u = i.tickAmount !== void 0 && i.tickAmount !== null, g = u ? i.tickAmount : h.niceScaleDefaultTicks[Math.min(Math.round(s / 2), h.niceScaleDefaultTicks.length - 1)];
    if (h.isMultipleYAxis && !u && h.multiAxisTickAmount > 0 && (g = h.multiAxisTickAmount, u = !0), g = g === "dataPoints" ? h.dataPoints - 1 : Math.abs(Math.round(g)), (e === Number.MIN_VALUE && t === 0 || !_.isNumber(e) && !_.isNumber(t) || e === Number.MIN_VALUE && t === -Number.MAX_VALUE) && (e = _.isNumber(i.min) ? i.min : 0, t = _.isNumber(i.max) ? i.max : e + g, h.allSeriesCollapsed = !1), e > t) {
      console.warn("axis.min cannot be greater than axis.max: swapping min and max");
      var p = t;
      t = e, e = p;
    } else e === t && (e = e === 0 ? 0 : e - 1, t = t === 0 ? 2 : t + 1);
    var f = [];
    g < 1 && (g = 1);
    var x = g, m = Math.abs(t - e);
    !a && e > 0 && e / m < 0.15 && (e = 0, a = !0), !r && t < 0 && -t / m < 0.15 && (t = 0, r = !0);
    var b = (m = Math.abs(t - e)) / x, w = b, y = Math.floor(Math.log10(w)), v = Math.pow(10, y), k = Math.ceil(w / v);
    if (b = w = (k = h.niceScaleAllowedMagMsd[h.yValueDecimal === 0 ? 0 : 1][k]) * v, h.isBarHorizontal && i.stepSize && i.type !== "datetime" ? (b = i.stepSize, d = !0) : d && (b = i.stepSize), d && i.forceNiceScale) {
      var A = Math.floor(Math.log10(b));
      b *= Math.pow(10, y - A);
    }
    if (a && r) {
      var S = m / x;
      if (u) if (d) if (_.mod(m, b) != 0) {
        var C = _.getGCD(b, S);
        b = S / C < 10 ? C : S;
      } else _.mod(b, S) == 0 ? b = S : (S = b, u = !1);
      else b = S;
      else if (d) _.mod(m, b) == 0 ? S = b : b = S;
      else if (_.mod(m, b) == 0) S = b;
      else {
        S = m / (x = Math.ceil(m / b));
        var L = _.getGCD(m, b);
        m / L < s && (S = L), b = S;
      }
      x = Math.round(m / b);
    } else {
      if (a || r) {
        if (r) if (u) e = t - b * x;
        else {
          var P = e;
          e = b * Math.floor(e / b), Math.abs(t - e) / _.getGCD(m, b) > s && (e = t - b * g, e += b * Math.floor((P - e) / b));
        }
        else if (a) if (u) t = e + b * x;
        else {
          var R = t;
          t = b * Math.ceil(t / b), Math.abs(t - e) / _.getGCD(m, b) > s && (t = e + b * g, t += b * Math.ceil((R - t) / b));
        }
      } else if (h.isMultipleYAxis && u) {
        var I = b * Math.floor(e / b), T = I + b * x;
        T < t && (b *= 2), T = t, t = (e = I) + b * x, m = Math.abs(t - e), e > 0 && e < Math.abs(T - t) && (e = 0, t = b * x), t < 0 && -t < Math.abs(I - e) && (t = 0, e = -b * x);
      } else e = b * Math.floor(e / b), t = b * Math.ceil(t / b);
      m = Math.abs(t - e), b = _.getGCD(m, b), x = Math.round(m / b);
    }
    if (u || a || r || (x = Math.ceil((m - l) / (b + l))) > 16 && _.getPrimeFactors(x).length < 2 && x++, !u && i.forceNiceScale && h.yValueDecimal === 0 && x > m && (x = m, b = Math.round(m / x)), x > s && (!u && !d || i.forceNiceScale)) {
      var O = _.getPrimeFactors(x), N = O.length - 1, D = x;
      e: for (var Y = 0; Y < N; Y++) for (var X = 0; X <= N - Y; X++) {
        for (var z = Math.min(X + Y, N), F = D, $ = 1, Z = X; Z <= z; Z++) $ *= O[Z];
        if ((F /= $) < s) {
          D = F;
          break e;
        }
      }
      b = D === x ? m : m / D, x = Math.round(m / b);
    }
    h.isMultipleYAxis && h.multiAxisTickAmount == 0 && h.ignoreYAxisIndexes.indexOf(o) < 0 && (h.multiAxisTickAmount = x);
    var H = e - b, J = b * l;
    do
      H += b, f.push(_.stripNumber(H, 7));
    while (t - H > J);
    return { result: f, niceMin: f[0], niceMax: f[f.length - 1] };
  } }, { key: "linearScale", value: function(e, t) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 10, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : void 0, r = Math.abs(t - e), o = [];
    if (e === t) return { result: o = [e], niceMin: o[0], niceMax: o[o.length - 1] };
    (i = this._adjustTicksForSmallRange(i, s, r)) === "dataPoints" && (i = this.w.globals.dataPoints - 1), a || (a = r / i), a = Math.round(100 * (a + Number.EPSILON)) / 100, i === Number.MAX_VALUE && (i = 5, a = 1);
    for (var l = e; i >= 0; ) o.push(l), l = _.preciseAddition(l, a), i -= 1;
    return { result: o, niceMin: o[0], niceMax: o[o.length - 1] };
  } }, { key: "logarithmicScaleNice", value: function(e, t, i) {
    t <= 0 && (t = Math.max(e, i)), e <= 0 && (e = Math.min(t, i));
    for (var s = [], a = Math.ceil(Math.log(t) / Math.log(i) + 1), r = Math.floor(Math.log(e) / Math.log(i)); r < a; r++) s.push(Math.pow(i, r));
    return { result: s, niceMin: s[0], niceMax: s[s.length - 1] };
  } }, { key: "logarithmicScale", value: function(e, t, i) {
    t <= 0 && (t = Math.max(e, i)), e <= 0 && (e = Math.min(t, i));
    for (var s = [], a = Math.log(t) / Math.log(i), r = Math.log(e) / Math.log(i), o = a - r, l = Math.round(o), c = o / l, h = 0, d = r; h < l; h++, d += c) s.push(Math.pow(i, d));
    return s.push(Math.pow(i, a)), { result: s, niceMin: e, niceMax: t };
  } }, { key: "_adjustTicksForSmallRange", value: function(e, t, i) {
    var s = e;
    if (t !== void 0 && this.w.config.yaxis[t].labels.formatter && this.w.config.yaxis[t].tickAmount === void 0) {
      var a = Number(this.w.config.yaxis[t].labels.formatter(1));
      _.isNumber(a) && this.w.globals.yValueDecimal === 0 && (s = Math.ceil(i));
    }
    return s < e ? s : e;
  } }, { key: "setYScaleForIndex", value: function(e, t, i) {
    var s = this.w.globals, a = this.w.config, r = s.isBarHorizontal ? a.xaxis : a.yaxis[e];
    s.yAxisScale[e] === void 0 && (s.yAxisScale[e] = []);
    var o = Math.abs(i - t);
    r.logarithmic && o <= 5 && (s.invalidLogScale = !0), r.logarithmic && o > 5 ? (s.allSeriesCollapsed = !1, s.yAxisScale[e] = r.forceNiceScale ? this.logarithmicScaleNice(t, i, r.logBase) : this.logarithmicScale(t, i, r.logBase)) : i !== -Number.MAX_VALUE && _.isNumber(i) && t !== Number.MAX_VALUE && _.isNumber(t) ? (s.allSeriesCollapsed = !1, s.yAxisScale[e] = this.niceScale(t, i, e)) : s.yAxisScale[e] = this.niceScale(Number.MIN_VALUE, 0, e);
  } }, { key: "setXScale", value: function(e, t) {
    var i = this.w, s = i.globals;
    if (t !== -Number.MAX_VALUE && _.isNumber(t)) {
      var a = s.xTickAmount;
      s.xAxisScale = this.linearScale(e, t, a, 0, i.config.xaxis.stepSize);
    } else s.xAxisScale = this.linearScale(0, 10, 10);
    return s.xAxisScale;
  } }, { key: "scaleMultipleYAxes", value: function() {
    var e = this, t = this.w.config, i = this.w.globals;
    this.coreUtils.setSeriesYAxisMappings();
    var s = i.seriesYAxisMap, a = i.minYArr, r = i.maxYArr;
    i.allSeriesCollapsed = !0, i.barGroups = [], s.forEach(function(o, l) {
      var c = [];
      o.forEach(function(h) {
        var d, u = (d = t.series[h]) === null || d === void 0 ? void 0 : d.group;
        c.indexOf(u) < 0 && c.push(u);
      }), o.length > 0 ? function() {
        var h, d, u = Number.MAX_VALUE, g = -Number.MAX_VALUE, p = u, f = g;
        if (t.chart.stacked) (function() {
          var b = new Array(i.dataPoints).fill(0), w = [], y = [], v = [];
          c.forEach(function() {
            w.push(b.map(function() {
              return Number.MIN_VALUE;
            })), y.push(b.map(function() {
              return Number.MIN_VALUE;
            })), v.push(b.map(function() {
              return Number.MIN_VALUE;
            }));
          });
          for (var k = function(S) {
            !h && t.series[o[S]].type && (h = t.series[o[S]].type);
            var C = o[S];
            d = t.series[C].group ? t.series[C].group : "axis-".concat(l), !(i.collapsedSeriesIndices.indexOf(C) < 0 && i.ancillaryCollapsedSeriesIndices.indexOf(C) < 0) || (i.allSeriesCollapsed = !1, c.forEach(function(L, P) {
              if (t.series[C].group === L) for (var R = 0; R < i.series[C].length; R++) {
                var I = i.series[C][R];
                I >= 0 ? y[P][R] += I : v[P][R] += I, w[P][R] += I, p = Math.min(p, I), f = Math.max(f, I);
              }
            })), h !== "bar" && h !== "column" || i.barGroups.push(d);
          }, A = 0; A < o.length; A++) k(A);
          h || (h = t.chart.type), h === "bar" || h === "column" ? c.forEach(function(S, C) {
            u = Math.min(u, Math.min.apply(null, v[C])), g = Math.max(g, Math.max.apply(null, y[C]));
          }) : (c.forEach(function(S, C) {
            p = Math.min(p, Math.min.apply(null, w[C])), f = Math.max(f, Math.max.apply(null, w[C]));
          }), u = p, g = f), u === Number.MIN_VALUE && g === Number.MIN_VALUE && (g = -Number.MAX_VALUE);
        })();
        else for (var x = 0; x < o.length; x++) {
          var m = o[x];
          u = Math.min(u, a[m]), g = Math.max(g, r[m]), !(i.collapsedSeriesIndices.indexOf(m) < 0 && i.ancillaryCollapsedSeriesIndices.indexOf(m) < 0) || (i.allSeriesCollapsed = !1);
        }
        t.yaxis[l].min !== void 0 && (u = typeof t.yaxis[l].min == "function" ? t.yaxis[l].min(u) : t.yaxis[l].min), t.yaxis[l].max !== void 0 && (g = typeof t.yaxis[l].max == "function" ? t.yaxis[l].max(g) : t.yaxis[l].max), i.barGroups = i.barGroups.filter(function(b, w, y) {
          return y.indexOf(b) === w;
        }), e.setYScaleForIndex(l, u, g), o.forEach(function(b) {
          a[b] = i.yAxisScale[l].niceMin, r[b] = i.yAxisScale[l].niceMax;
        });
      }() : e.setYScaleForIndex(l, 0, -Number.MAX_VALUE);
    });
  } }]), n;
}(), qs = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w, this.scales = new Bn(e);
  }
  return te(n, [{ key: "init", value: function() {
    this.setYRange(), this.setXRange(), this.setZRange();
  } }, { key: "getMinYMaxY", value: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -Number.MAX_VALUE, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, a = this.w.config, r = this.w.globals, o = -Number.MAX_VALUE, l = Number.MIN_VALUE;
    s === null && (s = e + 1);
    var c = r.series, h = c, d = c;
    a.chart.type === "candlestick" ? (h = r.seriesCandleL, d = r.seriesCandleH) : a.chart.type === "boxPlot" ? (h = r.seriesCandleO, d = r.seriesCandleC) : r.isRangeData && (h = r.seriesRangeStart, d = r.seriesRangeEnd);
    var u = !1;
    if (r.seriesX.length >= s) {
      var g, p = (g = r.brushSource) === null || g === void 0 ? void 0 : g.w.config.chart.brush;
      (a.chart.zoom.enabled && a.chart.zoom.autoScaleYaxis || p != null && p.enabled && p != null && p.autoScaleYaxis) && (u = !0);
    }
    for (var f = e; f < s; f++) {
      r.dataPoints = Math.max(r.dataPoints, c[f].length);
      var x = a.series[f].type;
      r.categoryLabels.length && (r.dataPoints = r.categoryLabels.filter(function(C) {
        return C !== void 0;
      }).length), r.labels.length && a.xaxis.type !== "datetime" && r.series.reduce(function(C, L) {
        return C + L.length;
      }, 0) !== 0 && (r.dataPoints = Math.max(r.dataPoints, r.labels.length));
      var m = 0, b = c[f].length - 1;
      if (u) {
        if (a.xaxis.min) for (; m < b && r.seriesX[f][m] < a.xaxis.min; m++) ;
        if (a.xaxis.max) for (; b > m && r.seriesX[f][b] > a.xaxis.max; b--) ;
      }
      for (var w = m; w <= b && w < r.series[f].length; w++) {
        var y = c[f][w];
        if (y !== null && _.isNumber(y)) {
          var v, k, A, S;
          switch (((v = d[f]) === null || v === void 0 ? void 0 : v[w]) !== void 0 && (o = Math.max(o, d[f][w]), t = Math.min(t, d[f][w])), ((k = h[f]) === null || k === void 0 ? void 0 : k[w]) !== void 0 && (t = Math.min(t, h[f][w]), i = Math.max(i, h[f][w])), x) {
            case "candlestick":
              r.seriesCandleC[f][w] !== void 0 && (o = Math.max(o, r.seriesCandleH[f][w]), t = Math.min(t, r.seriesCandleL[f][w]));
              break;
            case "boxPlot":
              r.seriesCandleC[f][w] !== void 0 && (o = Math.max(o, r.seriesCandleC[f][w]), t = Math.min(t, r.seriesCandleO[f][w]));
          }
          x && x !== "candlestick" && x !== "boxPlot" && x !== "rangeArea" && x !== "rangeBar" && (o = Math.max(o, r.series[f][w]), t = Math.min(t, r.series[f][w])), r.seriesGoals[f] && r.seriesGoals[f][w] && Array.isArray(r.seriesGoals[f][w]) && r.seriesGoals[f][w].forEach(function(C) {
            o = Math.max(o, C.value), t = Math.min(t, C.value);
          }), i = o, y = _.noExponents(y), _.isFloat(y) && (r.yValueDecimal = Math.max(r.yValueDecimal, y.toString().split(".")[1].length)), l > ((A = h[f]) === null || A === void 0 ? void 0 : A[w]) && ((S = h[f]) === null || S === void 0 ? void 0 : S[w]) < 0 && (l = h[f][w]);
        } else r.hasNullValues = !0;
      }
      x !== "bar" && x !== "column" || (l < 0 && o < 0 && (o = 0, i = Math.max(i, 0)), l === Number.MIN_VALUE && (l = 0, t = Math.min(t, 0)));
    }
    return a.chart.type === "rangeBar" && r.seriesRangeStart.length && r.isBarHorizontal && (l = t), a.chart.type === "bar" && (l < 0 && o < 0 && (o = 0), l === Number.MIN_VALUE && (l = 0)), { minY: l, maxY: o, lowestY: t, highestY: i };
  } }, { key: "setYRange", value: function() {
    var e = this.w.globals, t = this.w.config;
    e.maxY = -Number.MAX_VALUE, e.minY = Number.MIN_VALUE;
    var i, s = Number.MAX_VALUE;
    if (e.isMultipleYAxis) {
      s = Number.MAX_VALUE;
      for (var a = 0; a < e.series.length; a++) i = this.getMinYMaxY(a), e.minYArr[a] = i.lowestY, e.maxYArr[a] = i.highestY, s = Math.min(s, i.lowestY);
    }
    return i = this.getMinYMaxY(0, s, null, e.series.length), t.chart.type === "bar" ? (e.minY = i.minY, e.maxY = i.maxY) : (e.minY = i.lowestY, e.maxY = i.highestY), s = i.lowestY, t.chart.stacked && this._setStackedMinMax(), t.chart.type === "line" || t.chart.type === "area" || t.chart.type === "scatter" || t.chart.type === "candlestick" || t.chart.type === "boxPlot" || t.chart.type === "rangeBar" && !e.isBarHorizontal ? e.minY === Number.MIN_VALUE && s !== -Number.MAX_VALUE && s !== e.maxY && (e.minY = s) : e.minY = e.minY !== Number.MIN_VALUE ? Math.min(i.minY, e.minY) : i.minY, t.yaxis.forEach(function(r, o) {
      r.max !== void 0 && (typeof r.max == "number" ? e.maxYArr[o] = r.max : typeof r.max == "function" && (e.maxYArr[o] = r.max(e.isMultipleYAxis ? e.maxYArr[o] : e.maxY)), e.maxY = e.maxYArr[o]), r.min !== void 0 && (typeof r.min == "number" ? e.minYArr[o] = r.min : typeof r.min == "function" && (e.minYArr[o] = r.min(e.isMultipleYAxis ? e.minYArr[o] === Number.MIN_VALUE ? 0 : e.minYArr[o] : e.minY)), e.minY = e.minYArr[o]);
    }), e.isBarHorizontal && ["min", "max"].forEach(function(r) {
      t.xaxis[r] !== void 0 && typeof t.xaxis[r] == "number" && (r === "min" ? e.minY = t.xaxis[r] : e.maxY = t.xaxis[r]);
    }), e.isMultipleYAxis ? (this.scales.scaleMultipleYAxes(), e.minY = s) : (this.scales.setYScaleForIndex(0, e.minY, e.maxY), e.minY = e.yAxisScale[0].niceMin, e.maxY = e.yAxisScale[0].niceMax, e.minYArr[0] = e.minY, e.maxYArr[0] = e.maxY), e.barGroups = [], e.lineGroups = [], e.areaGroups = [], t.series.forEach(function(r) {
      switch (r.type || t.chart.type) {
        case "bar":
        case "column":
          e.barGroups.push(r.group);
          break;
        case "line":
          e.lineGroups.push(r.group);
          break;
        case "area":
          e.areaGroups.push(r.group);
      }
    }), e.barGroups = e.barGroups.filter(function(r, o, l) {
      return l.indexOf(r) === o;
    }), e.lineGroups = e.lineGroups.filter(function(r, o, l) {
      return l.indexOf(r) === o;
    }), e.areaGroups = e.areaGroups.filter(function(r, o, l) {
      return l.indexOf(r) === o;
    }), { minY: e.minY, maxY: e.maxY, minYArr: e.minYArr, maxYArr: e.maxYArr, yAxisScale: e.yAxisScale };
  } }, { key: "setXRange", value: function() {
    var e = this.w.globals, t = this.w.config, i = t.xaxis.type === "numeric" || t.xaxis.type === "datetime" || t.xaxis.type === "category" && !e.noLabelsProvided || e.noLabelsProvided || e.isXNumeric;
    if (e.isXNumeric && function() {
      for (var l = 0; l < e.series.length; l++) if (e.labels[l]) for (var c = 0; c < e.labels[l].length; c++) e.labels[l][c] !== null && _.isNumber(e.labels[l][c]) && (e.maxX = Math.max(e.maxX, e.labels[l][c]), e.initialMaxX = Math.max(e.maxX, e.labels[l][c]), e.minX = Math.min(e.minX, e.labels[l][c]), e.initialMinX = Math.min(e.minX, e.labels[l][c]));
    }(), e.noLabelsProvided && t.xaxis.categories.length === 0 && (e.maxX = e.labels[e.labels.length - 1], e.initialMaxX = e.labels[e.labels.length - 1], e.minX = 1, e.initialMinX = 1), e.isXNumeric || e.noLabelsProvided || e.dataFormatXNumeric) {
      var s = 10;
      if (t.xaxis.tickAmount === void 0) s = Math.round(e.svgWidth / 150), t.xaxis.type === "numeric" && e.dataPoints < 30 && (s = e.dataPoints - 1), s > e.dataPoints && e.dataPoints !== 0 && (s = e.dataPoints - 1);
      else if (t.xaxis.tickAmount === "dataPoints") {
        if (e.series.length > 1 && (s = e.series[e.maxValsInArrayIndex].length - 1), e.isXNumeric) {
          var a = Math.round(e.maxX - e.minX);
          a < 30 && (s = a - 1);
        }
      } else s = t.xaxis.tickAmount;
      if (e.xTickAmount = s, t.xaxis.max !== void 0 && typeof t.xaxis.max == "number" && (e.maxX = t.xaxis.max), t.xaxis.min !== void 0 && typeof t.xaxis.min == "number" && (e.minX = t.xaxis.min), t.xaxis.range !== void 0 && (e.minX = e.maxX - t.xaxis.range), e.minX !== Number.MAX_VALUE && e.maxX !== -Number.MAX_VALUE) if (t.xaxis.convertedCatToNumeric && !e.dataFormatXNumeric) {
        for (var r = [], o = e.minX - 1; o < e.maxX; o++) r.push(o + 1);
        e.xAxisScale = { result: r, niceMin: r[0], niceMax: r[r.length - 1] };
      } else e.xAxisScale = this.scales.setXScale(e.minX, e.maxX);
      else e.xAxisScale = this.scales.linearScale(0, s, s, 0, t.xaxis.stepSize), e.noLabelsProvided && e.labels.length > 0 && (e.xAxisScale = this.scales.linearScale(1, e.labels.length, s - 1, 0, t.xaxis.stepSize), e.seriesX = e.labels.slice());
      i && (e.labels = e.xAxisScale.result.slice());
    }
    return e.isBarHorizontal && e.labels.length && (e.xTickAmount = e.labels.length), this._handleSingleDataPoint(), this._getMinXDiff(), { minX: e.minX, maxX: e.maxX };
  } }, { key: "setZRange", value: function() {
    var e = this.w.globals;
    if (e.isDataXYZ) {
      for (var t = 0; t < e.series.length; t++) if (e.seriesZ[t] !== void 0) for (var i = 0; i < e.seriesZ[t].length; i++) e.seriesZ[t][i] !== null && _.isNumber(e.seriesZ[t][i]) && (e.maxZ = Math.max(e.maxZ, e.seriesZ[t][i]), e.minZ = Math.min(e.minZ, e.seriesZ[t][i]));
    }
  } }, { key: "_handleSingleDataPoint", value: function() {
    var e = this.w.globals, t = this.w.config;
    if (e.minX === e.maxX) {
      var i = new Ye(this.ctx);
      if (t.xaxis.type === "datetime") {
        var s = i.getDate(e.minX);
        t.xaxis.labels.datetimeUTC ? s.setUTCDate(s.getUTCDate() - 2) : s.setDate(s.getDate() - 2), e.minX = new Date(s).getTime();
        var a = i.getDate(e.maxX);
        t.xaxis.labels.datetimeUTC ? a.setUTCDate(a.getUTCDate() + 2) : a.setDate(a.getDate() + 2), e.maxX = new Date(a).getTime();
      } else (t.xaxis.type === "numeric" || t.xaxis.type === "category" && !e.noLabelsProvided) && (e.minX = e.minX - 2, e.initialMinX = e.minX, e.maxX = e.maxX + 2, e.initialMaxX = e.maxX);
    }
  } }, { key: "_getMinXDiff", value: function() {
    var e = this.w.globals;
    e.isXNumeric && e.seriesX.forEach(function(t, i) {
      if (t.length) {
        t.length === 1 && t.push(e.seriesX[e.maxValsInArrayIndex][e.seriesX[e.maxValsInArrayIndex].length - 1]);
        var s = t.slice();
        s.sort(function(a, r) {
          return a - r;
        }), s.forEach(function(a, r) {
          if (r > 0) {
            var o = a - s[r - 1];
            o > 0 && (e.minXDiff = Math.min(o, e.minXDiff));
          }
        }), e.dataPoints !== 1 && e.minXDiff !== Number.MAX_VALUE || (e.minXDiff = 0.5);
      }
    });
  } }, { key: "_setStackedMinMax", value: function() {
    var e = this, t = this.w.globals;
    if (t.series.length) {
      var i = t.seriesGroups;
      i.length || (i = [this.w.globals.seriesNames.map(function(r) {
        return r;
      })]);
      var s = {}, a = {};
      i.forEach(function(r) {
        s[r] = [], a[r] = [], e.w.config.series.map(function(o, l) {
          return r.indexOf(t.seriesNames[l]) > -1 ? l : null;
        }).filter(function(o) {
          return o !== null;
        }).forEach(function(o) {
          for (var l = 0; l < t.series[t.maxValsInArrayIndex].length; l++) {
            var c, h, d, u;
            s[r][l] === void 0 && (s[r][l] = 0, a[r][l] = 0), (e.w.config.chart.stacked && !t.comboCharts || e.w.config.chart.stacked && t.comboCharts && (!e.w.config.chart.stackOnlyBar || ((c = e.w.config.series) === null || c === void 0 || (h = c[o]) === null || h === void 0 ? void 0 : h.type) === "bar" || ((d = e.w.config.series) === null || d === void 0 || (u = d[o]) === null || u === void 0 ? void 0 : u.type) === "column")) && t.series[o][l] !== null && _.isNumber(t.series[o][l]) && (t.series[o][l] > 0 ? s[r][l] += parseFloat(t.series[o][l]) + 1e-4 : a[r][l] += parseFloat(t.series[o][l]));
          }
        });
      }), Object.entries(s).forEach(function(r) {
        var o = un(r, 1)[0];
        s[o].forEach(function(l, c) {
          t.maxY = Math.max(t.maxY, s[o][c]), t.minY = Math.min(t.minY, a[o][c]);
        });
      });
    }
  } }]), n;
}(), Sa = function() {
  function n(e, t) {
    ee(this, n), this.ctx = e, this.elgrid = t, this.w = e.w;
    var i = this.w;
    this.xaxisFontSize = i.config.xaxis.labels.style.fontSize, this.axisFontFamily = i.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = i.config.xaxis.labels.style.colors, this.isCategoryBarHorizontal = i.config.chart.type === "bar" && i.config.plotOptions.bar.horizontal, this.xAxisoffX = i.config.xaxis.position === "bottom" ? i.globals.gridHeight : 0, this.drawnLabels = [], this.axesUtils = new vt(e);
  }
  return te(n, [{ key: "drawYaxis", value: function(e) {
    var t = this.w, i = new W(this.ctx), s = t.config.yaxis[e].labels.style, a = s.fontSize, r = s.fontFamily, o = s.fontWeight, l = i.group({ class: "apexcharts-yaxis", rel: e, transform: "translate(".concat(t.globals.translateYAxisX[e], ", 0)") });
    if (this.axesUtils.isYAxisHidden(e)) return l;
    var c = i.group({ class: "apexcharts-yaxis-texts-g" });
    l.add(c);
    var h = t.globals.yAxisScale[e].result.length - 1, d = t.globals.gridHeight / h, u = t.globals.yLabelFormatters[e], g = this.axesUtils.checkForReversedLabels(e, t.globals.yAxisScale[e].result.slice());
    if (t.config.yaxis[e].labels.show) {
      var p = t.globals.translateY + t.config.yaxis[e].labels.offsetY;
      t.globals.isBarHorizontal ? p = 0 : t.config.chart.type === "heatmap" && (p -= d / 2), p += parseInt(a, 10) / 3;
      for (var f = h; f >= 0; f--) {
        var x = u(g[f], f, t), m = t.config.yaxis[e].labels.padding;
        t.config.yaxis[e].opposite && t.config.yaxis.length !== 0 && (m *= -1);
        var b = this.getTextAnchor(t.config.yaxis[e].labels.align, t.config.yaxis[e].opposite), w = this.axesUtils.getYAxisForeColor(s.colors, e), y = Array.isArray(w) ? w[f] : w, v = _.listToArray(t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(e, "'] .apexcharts-yaxis-label tspan"))).map(function(A) {
          return A.textContent;
        }), k = i.drawText({ x: m, y: p, text: v.includes(x) && !t.config.yaxis[e].labels.showDuplicates ? "" : x, textAnchor: b, fontSize: a, fontFamily: r, fontWeight: o, maxWidth: t.config.yaxis[e].labels.maxWidth, foreColor: y, isPlainText: !1, cssClass: "apexcharts-yaxis-label ".concat(s.cssClass) });
        c.add(k), this.addTooltip(k, x), t.config.yaxis[e].labels.rotate !== 0 && this.rotateLabel(i, k, firstLabel, t.config.yaxis[e].labels.rotate), p += d;
      }
    }
    return this.addYAxisTitle(i, l, e), this.addAxisBorder(i, l, e, h, d), l;
  } }, { key: "getTextAnchor", value: function(e, t) {
    return e === "left" ? "start" : e === "center" ? "middle" : e === "right" ? "end" : t ? "start" : "end";
  } }, { key: "addTooltip", value: function(e, t) {
    var i = document.createElementNS(this.w.globals.SVGNS, "title");
    i.textContent = Array.isArray(t) ? t.join(" ") : t, e.node.appendChild(i);
  } }, { key: "rotateLabel", value: function(e, t, i, s) {
    var a = e.rotateAroundCenter(i.node), r = e.rotateAroundCenter(t.node);
    t.node.setAttribute("transform", "rotate(".concat(s, " ").concat(a.x, " ").concat(r.y, ")"));
  } }, { key: "addYAxisTitle", value: function(e, t, i) {
    var s = this.w;
    if (s.config.yaxis[i].title.text !== void 0) {
      var a = e.group({ class: "apexcharts-yaxis-title" }), r = s.config.yaxis[i].opposite ? s.globals.translateYAxisX[i] : 0, o = e.drawText({ x: r, y: s.globals.gridHeight / 2 + s.globals.translateY + s.config.yaxis[i].title.offsetY, text: s.config.yaxis[i].title.text, textAnchor: "end", foreColor: s.config.yaxis[i].title.style.color, fontSize: s.config.yaxis[i].title.style.fontSize, fontWeight: s.config.yaxis[i].title.style.fontWeight, fontFamily: s.config.yaxis[i].title.style.fontFamily, cssClass: "apexcharts-yaxis-title-text ".concat(s.config.yaxis[i].title.style.cssClass) });
      a.add(o), t.add(a);
    }
  } }, { key: "addAxisBorder", value: function(e, t, i, s, a) {
    var r = this.w, o = r.config.yaxis[i].axisBorder, l = 31 + o.offsetX;
    if (r.config.yaxis[i].opposite && (l = -31 - o.offsetX), o.show) {
      var c = e.drawLine(l, r.globals.translateY + o.offsetY - 2, l, r.globals.gridHeight + r.globals.translateY + o.offsetY + 2, o.color, 0, o.width);
      t.add(c);
    }
    r.config.yaxis[i].axisTicks.show && this.axesUtils.drawYAxisTicks(l, s, o, r.config.yaxis[i].axisTicks, i, a, t);
  } }, { key: "drawYaxisInversed", value: function(e) {
    var t = this.w, i = new W(this.ctx), s = i.group({ class: "apexcharts-xaxis apexcharts-yaxis-inversed" }), a = i.group({ class: "apexcharts-xaxis-texts-g", transform: "translate(".concat(t.globals.translateXAxisX, ", ").concat(t.globals.translateXAxisY, ")") });
    s.add(a);
    var r = t.globals.yAxisScale[e].result.length - 1, o = t.globals.gridWidth / r + 0.1, l = o + t.config.xaxis.labels.offsetX, c = t.globals.xLabelFormatter, h = this.axesUtils.checkForReversedLabels(e, t.globals.yAxisScale[e].result.slice()), d = t.globals.timescaleLabels;
    if (d.length > 0 && (this.xaxisLabels = d.slice(), r = (h = d.slice()).length), t.config.xaxis.labels.show) for (var u = d.length ? 0 : r; d.length ? u < d.length : u >= 0; d.length ? u++ : u--) {
      var g = c(h[u], u, t), p = t.globals.gridWidth + t.globals.padHorizontal - (l - o + t.config.xaxis.labels.offsetX);
      if (d.length) {
        var f = this.axesUtils.getLabel(h, d, p, u, this.drawnLabels, this.xaxisFontSize);
        p = f.x, g = f.text, this.drawnLabels.push(f.text), u === 0 && t.globals.skipFirstTimelinelabel && (g = ""), u === h.length - 1 && t.globals.skipLastTimelinelabel && (g = "");
      }
      var x = i.drawText({ x: p, y: this.xAxisoffX + t.config.xaxis.labels.offsetY + 30 - (t.config.xaxis.position === "top" ? t.globals.xAxisHeight + t.config.xaxis.axisTicks.height - 2 : 0), text: g, textAnchor: "middle", foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[e] : this.xaxisForeColors, fontSize: this.xaxisFontSize, fontFamily: this.xaxisFontFamily, fontWeight: t.config.xaxis.labels.style.fontWeight, isPlainText: !1, cssClass: "apexcharts-xaxis-label ".concat(t.config.xaxis.labels.style.cssClass) });
      a.add(x), x.tspan(g), this.addTooltip(x, g), l += o;
    }
    return this.inversedYAxisTitleText(s), this.inversedYAxisBorder(s), s;
  } }, { key: "inversedYAxisBorder", value: function(e) {
    var t = this.w, i = new W(this.ctx), s = t.config.xaxis.axisBorder;
    if (s.show) {
      var a = 0;
      t.config.chart.type === "bar" && t.globals.isXNumeric && (a -= 15);
      var r = i.drawLine(t.globals.padHorizontal + a + s.offsetX, this.xAxisoffX, t.globals.gridWidth, this.xAxisoffX, s.color, 0, s.height);
      this.elgrid && this.elgrid.elGridBorders && t.config.grid.show ? this.elgrid.elGridBorders.add(r) : e.add(r);
    }
  } }, { key: "inversedYAxisTitleText", value: function(e) {
    var t = this.w, i = new W(this.ctx);
    if (t.config.xaxis.title.text !== void 0) {
      var s = i.group({ class: "apexcharts-xaxis-title apexcharts-yaxis-title-inversed" }), a = i.drawText({ x: t.globals.gridWidth / 2 + t.config.xaxis.title.offsetX, y: this.xAxisoffX + parseFloat(this.xaxisFontSize) + parseFloat(t.config.xaxis.title.style.fontSize) + t.config.xaxis.title.offsetY + 20, text: t.config.xaxis.title.text, textAnchor: "middle", fontSize: t.config.xaxis.title.style.fontSize, fontFamily: t.config.xaxis.title.style.fontFamily, fontWeight: t.config.xaxis.title.style.fontWeight, foreColor: t.config.xaxis.title.style.color, cssClass: "apexcharts-xaxis-title-text ".concat(t.config.xaxis.title.style.cssClass) });
      s.add(a), e.add(s);
    }
  } }, { key: "yAxisTitleRotate", value: function(e, t) {
    var i = this.w, s = new W(this.ctx), a = i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(e, "'] .apexcharts-yaxis-texts-g")), r = a ? a.getBoundingClientRect() : { width: 0, height: 0 }, o = i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(e, "'] .apexcharts-yaxis-title text")), l = o ? o.getBoundingClientRect() : { width: 0, height: 0 };
    if (o) {
      var c = this.xPaddingForYAxisTitle(e, r, l, t);
      o.setAttribute("x", c.xPos - (t ? 10 : 0));
      var h = s.rotateAroundCenter(o);
      o.setAttribute("transform", "rotate(".concat(t ? -1 * i.config.yaxis[e].title.rotate : i.config.yaxis[e].title.rotate, " ").concat(h.x, " ").concat(h.y, ")"));
    }
  } }, { key: "xPaddingForYAxisTitle", value: function(e, t, i, s) {
    var a = this.w, r = 0, o = 10;
    return a.config.yaxis[e].title.text === void 0 || e < 0 ? { xPos: r, padd: 0 } : (s ? r = t.width + a.config.yaxis[e].title.offsetX + i.width / 2 + o / 2 : (r = -1 * t.width + a.config.yaxis[e].title.offsetX + o / 2 + i.width / 2, a.globals.isBarHorizontal && (o = 25, r = -1 * t.width - a.config.yaxis[e].title.offsetX - o)), { xPos: r, padd: o });
  } }, { key: "setYAxisXPosition", value: function(e, t) {
    var i = this.w, s = 0, a = 0, r = 18, o = 1;
    i.config.yaxis.length > 1 && (this.multipleYs = !0), i.config.yaxis.forEach(function(l, c) {
      var h = i.globals.ignoreYAxisIndexes.includes(c) || !l.show || l.floating || e[c].width === 0, d = e[c].width + t[c].width;
      l.opposite ? i.globals.isBarHorizontal ? (a = i.globals.gridWidth + i.globals.translateX - 1, i.globals.translateYAxisX[c] = a - l.labels.offsetX) : (a = i.globals.gridWidth + i.globals.translateX + o, h || (o += d + 20), i.globals.translateYAxisX[c] = a - l.labels.offsetX + 20) : (s = i.globals.translateX - r, h || (r += d + 20), i.globals.translateYAxisX[c] = s + l.labels.offsetX);
    });
  } }, { key: "setYAxisTextAlignments", value: function() {
    var e = this.w;
    _.listToArray(e.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis")).forEach(function(t, i) {
      var s = e.config.yaxis[i];
      if (s && !s.floating && s.labels.align !== void 0) {
        var a = e.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(i, "'] .apexcharts-yaxis-texts-g")), r = _.listToArray(e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(i, "'] .apexcharts-yaxis-label"))), o = a.getBoundingClientRect();
        r.forEach(function(l) {
          l.setAttribute("text-anchor", s.labels.align);
        }), s.labels.align !== "left" || s.opposite ? s.labels.align === "center" ? a.setAttribute("transform", "translate(".concat(o.width / 2 * (s.opposite ? 1 : -1), ", 0)")) : s.labels.align === "right" && s.opposite && a.setAttribute("transform", "translate(".concat(o.width, ", 0)")) : a.setAttribute("transform", "translate(-".concat(o.width, ", 0)"));
      }
    });
  } }]), n;
}(), oh = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w, this.documentEvent = _.bind(this.documentEvent, this);
  }
  return te(n, [{ key: "addEventListener", value: function(e, t) {
    var i = this.w;
    i.globals.events.hasOwnProperty(e) ? i.globals.events[e].push(t) : i.globals.events[e] = [t];
  } }, { key: "removeEventListener", value: function(e, t) {
    var i = this.w;
    if (i.globals.events.hasOwnProperty(e)) {
      var s = i.globals.events[e].indexOf(t);
      s !== -1 && i.globals.events[e].splice(s, 1);
    }
  } }, { key: "fireEvent", value: function(e, t) {
    var i = this.w;
    if (i.globals.events.hasOwnProperty(e)) {
      t && t.length || (t = []);
      for (var s = i.globals.events[e], a = s.length, r = 0; r < a; r++) s[r].apply(null, t);
    }
  } }, { key: "setupEventHandlers", value: function() {
    var e = this, t = this.w, i = this.ctx, s = t.globals.dom.baseEl.querySelector(t.globals.chartClass);
    this.ctx.eventList.forEach(function(a) {
      s.addEventListener(a, function(r) {
        var o = r.target.getAttribute("i") === null && t.globals.capturedSeriesIndex !== -1 ? t.globals.capturedSeriesIndex : r.target.getAttribute("i"), l = r.target.getAttribute("j") === null && t.globals.capturedDataPointIndex !== -1 ? t.globals.capturedDataPointIndex : r.target.getAttribute("j"), c = Object.assign({}, t, { seriesIndex: t.globals.axisCharts ? o : 0, dataPointIndex: l });
        r.type === "mousemove" || r.type === "touchmove" ? typeof t.config.chart.events.mouseMove == "function" && t.config.chart.events.mouseMove(r, i, c) : r.type === "mouseleave" || r.type === "touchleave" ? typeof t.config.chart.events.mouseLeave == "function" && t.config.chart.events.mouseLeave(r, i, c) : (r.type === "mouseup" && r.which === 1 || r.type === "touchend") && (typeof t.config.chart.events.click == "function" && t.config.chart.events.click(r, i, c), i.ctx.events.fireEvent("click", [r, i, c]));
      }, { capture: !1, passive: !0 });
    }), this.ctx.eventList.forEach(function(a) {
      t.globals.dom.baseEl.addEventListener(a, e.documentEvent, { passive: !0 });
    }), this.ctx.core.setupBrushHandler();
  } }, { key: "documentEvent", value: function(e) {
    var t = this.w, i = e.target.className;
    if (e.type === "click") {
      var s = t.globals.dom.baseEl.querySelector(".apexcharts-menu");
      s && s.classList.contains("apexcharts-menu-open") && i !== "apexcharts-menu-icon" && s.classList.remove("apexcharts-menu-open");
    }
    t.globals.clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX, t.globals.clientY = e.type === "touchmove" ? e.touches[0].clientY : e.clientY;
  } }]), n;
}(), lh = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w;
  }
  return te(n, [{ key: "setCurrentLocaleValues", value: function(e) {
    var t = this.w.config.chart.locales;
    window.Apex.chart && window.Apex.chart.locales && window.Apex.chart.locales.length > 0 && (t = this.w.config.chart.locales.concat(window.Apex.chart.locales));
    var i = t.filter(function(a) {
      return a.name === e;
    })[0];
    if (!i) throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");
    var s = _.extend(Hn, i);
    this.w.globals.locale = s.options;
  } }]), n;
}(), ch = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w;
  }
  return te(n, [{ key: "drawAxis", value: function(e, t) {
    var i, s, a = this, r = this.w.globals, o = this.w.config, l = new pi(this.ctx, t), c = new Sa(this.ctx, t);
    r.axisCharts && e !== "radar" && (r.isBarHorizontal ? (s = c.drawYaxisInversed(0), i = l.drawXaxisInversed(0), r.dom.elGraphical.add(i), r.dom.elGraphical.add(s)) : (i = l.drawXaxis(), r.dom.elGraphical.add(i), o.yaxis.map(function(h, d) {
      if (r.ignoreYAxisIndexes.indexOf(d) === -1 && (s = c.drawYaxis(d), r.dom.Paper.add(s), a.w.config.grid.position === "back")) {
        var u = r.dom.Paper.children()[1];
        u.remove(), r.dom.Paper.add(u);
      }
    })));
  } }]), n;
}(), Zs = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w;
  }
  return te(n, [{ key: "drawXCrosshairs", value: function() {
    var e = this.w, t = new W(this.ctx), i = new Fe(this.ctx), s = e.config.xaxis.crosshairs.fill.gradient, a = e.config.xaxis.crosshairs.dropShadow, r = e.config.xaxis.crosshairs.fill.type, o = s.colorFrom, l = s.colorTo, c = s.opacityFrom, h = s.opacityTo, d = s.stops, u = a.enabled, g = a.left, p = a.top, f = a.blur, x = a.color, m = a.opacity, b = e.config.xaxis.crosshairs.fill.color;
    if (e.config.xaxis.crosshairs.show) {
      r === "gradient" && (b = t.drawGradient("vertical", o, l, c, h, null, d, null));
      var w = t.drawRect();
      e.config.xaxis.crosshairs.width === 1 && (w = t.drawLine());
      var y = e.globals.gridHeight;
      (!_.isNumber(y) || y < 0) && (y = 0);
      var v = e.config.xaxis.crosshairs.width;
      (!_.isNumber(v) || v < 0) && (v = 0), w.attr({ class: "apexcharts-xcrosshairs", x: 0, y: 0, y2: y, width: v, height: y, fill: b, filter: "none", "fill-opacity": e.config.xaxis.crosshairs.opacity, stroke: e.config.xaxis.crosshairs.stroke.color, "stroke-width": e.config.xaxis.crosshairs.stroke.width, "stroke-dasharray": e.config.xaxis.crosshairs.stroke.dashArray }), u && (w = i.dropShadow(w, { left: g, top: p, blur: f, color: x, opacity: m })), e.globals.dom.elGraphical.add(w);
    }
  } }, { key: "drawYCrosshairs", value: function() {
    var e = this.w, t = new W(this.ctx), i = e.config.yaxis[0].crosshairs, s = e.globals.barPadForNumericAxis;
    if (e.config.yaxis[0].crosshairs.show) {
      var a = t.drawLine(-s, 0, e.globals.gridWidth + s, 0, i.stroke.color, i.stroke.dashArray, i.stroke.width);
      a.attr({ class: "apexcharts-ycrosshairs" }), e.globals.dom.elGraphical.add(a);
    }
    var r = t.drawLine(-s, 0, e.globals.gridWidth + s, 0, i.stroke.color, 0, 0);
    r.attr({ class: "apexcharts-ycrosshairs-hidden" }), e.globals.dom.elGraphical.add(r);
  } }]), n;
}(), hh = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w;
  }
  return te(n, [{ key: "checkResponsiveConfig", value: function(e) {
    var t = this, i = this.w, s = i.config;
    if (s.responsive.length !== 0) {
      var a = s.responsive.slice();
      a.sort(function(c, h) {
        return c.breakpoint > h.breakpoint ? 1 : h.breakpoint > c.breakpoint ? -1 : 0;
      }).reverse();
      var r = new fi({}), o = function() {
        var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, h = a[0].breakpoint, d = window.innerWidth > 0 ? window.innerWidth : screen.width;
        if (d > h) {
          var u = _.clone(i.globals.initialConfig);
          u.series = _.clone(i.config.series);
          var g = Oe.extendArrayProps(r, u, i);
          c = _.extend(g, c), c = _.extend(i.config, c), t.overrideResponsiveOptions(c);
        } else for (var p = 0; p < a.length; p++) d < a[p].breakpoint && (c = Oe.extendArrayProps(r, a[p].options, i), c = _.extend(i.config, c), t.overrideResponsiveOptions(c));
      };
      if (e) {
        var l = Oe.extendArrayProps(r, e, i);
        l = _.extend(i.config, l), o(l = _.extend(l, e));
      } else o({});
    }
  } }, { key: "overrideResponsiveOptions", value: function(e) {
    var t = new fi(e).init({ responsiveOverride: !0 });
    this.w.config = t;
  } }]), n;
}(), dh = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w, this.colors = [], this.isColorFn = !1, this.isHeatmapDistributed = this.checkHeatmapDistributed(), this.isBarDistributed = this.checkBarDistributed();
  }
  return te(n, [{ key: "checkHeatmapDistributed", value: function() {
    var e = this.w.config, t = e.chart, i = e.plotOptions;
    return t.type === "treemap" && i.treemap && i.treemap.distributed || t.type === "heatmap" && i.heatmap && i.heatmap.distributed;
  } }, { key: "checkBarDistributed", value: function() {
    var e = this.w.config, t = e.chart, i = e.plotOptions;
    return i.bar && i.bar.distributed && (t.type === "bar" || t.type === "rangeBar");
  } }, { key: "init", value: function() {
    this.setDefaultColors();
  } }, { key: "setDefaultColors", value: function() {
    var e = this.w, t = new _();
    e.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(e.config.theme.mode || "light"));
    var i = _e(e.config.colors || e.config.fill.colors || []);
    e.globals.colors = this.getColors(i), this.applySeriesColors(e.globals.seriesColors, e.globals.colors), e.config.theme.monochrome.enabled && (e.globals.colors = this.getMonochromeColors(e.config.theme.monochrome, e.globals.series, t));
    var s = e.globals.colors.slice();
    this.pushExtraColors(e.globals.colors), this.applyColorTypes(["fill", "stroke"], s), this.applyDataLabelsColors(s), this.applyRadarPolygonsColors(), this.applyMarkersColors(s);
  } }, { key: "getColors", value: function(e) {
    var t = this, i = this.w;
    return e && e.length !== 0 ? Array.isArray(e) && e.length > 0 && typeof e[0] == "function" ? (this.isColorFn = !0, i.config.series.map(function(s, a) {
      var r = e[a] || e[0];
      return typeof r == "function" ? r({ value: i.globals.axisCharts ? i.globals.series[a][0] || 0 : i.globals.series[a], seriesIndex: a, dataPointIndex: a, w: t.w }) : r;
    })) : e : this.predefined();
  } }, { key: "applySeriesColors", value: function(e, t) {
    e.forEach(function(i, s) {
      i && (t[s] = i);
    });
  } }, { key: "getMonochromeColors", value: function(e, t, i) {
    var s = e.color, a = e.shadeIntensity, r = e.shadeTo, o = this.isBarDistributed || this.isHeatmapDistributed ? t[0].length * t.length : t.length, l = 1 / (o / a), c = 0;
    return Array.from({ length: o }, function() {
      var h = r === "dark" ? i.shadeColor(-1 * c, s) : i.shadeColor(c, s);
      return c += l, h;
    });
  } }, { key: "applyColorTypes", value: function(e, t) {
    var i = this, s = this.w;
    e.forEach(function(a) {
      s.globals[a].colors = s.config[a].colors === void 0 ? i.isColorFn ? s.config.colors : t : s.config[a].colors.slice(), i.pushExtraColors(s.globals[a].colors);
    });
  } }, { key: "applyDataLabelsColors", value: function(e) {
    var t = this.w;
    t.globals.dataLabels.style.colors = t.config.dataLabels.style.colors === void 0 ? e : t.config.dataLabels.style.colors.slice(), this.pushExtraColors(t.globals.dataLabels.style.colors, 50);
  } }, { key: "applyRadarPolygonsColors", value: function() {
    var e = this.w;
    e.globals.radarPolygons.fill.colors = e.config.plotOptions.radar.polygons.fill.colors === void 0 ? [e.config.theme.mode === "dark" ? "#343A3F" : "none"] : e.config.plotOptions.radar.polygons.fill.colors.slice(), this.pushExtraColors(e.globals.radarPolygons.fill.colors, 20);
  } }, { key: "applyMarkersColors", value: function(e) {
    var t = this.w;
    t.globals.markers.colors = t.config.markers.colors === void 0 ? e : t.config.markers.colors.slice(), this.pushExtraColors(t.globals.markers.colors);
  } }, { key: "pushExtraColors", value: function(e, t) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, s = this.w, a = t || s.globals.series.length;
    if (i === null && (i = this.isBarDistributed || this.isHeatmapDistributed || s.config.chart.type === "heatmap" && s.config.plotOptions.heatmap && s.config.plotOptions.heatmap.colorScale.inverse), i && s.globals.series.length && (a = s.globals.series[s.globals.maxValsInArrayIndex].length * s.globals.series.length), e.length < a) for (var r = a - e.length, o = 0; o < r; o++) e.push(e[o]);
  } }, { key: "updateThemeOptions", value: function(e) {
    e.chart = e.chart || {}, e.tooltip = e.tooltip || {};
    var t = e.theme.mode, i = t === "dark" ? "palette4" : t === "light" ? "palette1" : e.theme.palette || "palette1", s = t === "dark" ? "#f6f7f8" : t === "light" ? "#373d3f" : e.chart.foreColor || "#373d3f";
    return e.tooltip.theme = t || "light", e.chart.foreColor = s, e.theme.palette = i, e;
  } }, { key: "predefined", value: function() {
    var e = { palette1: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"], palette2: ["#3f51b5", "#03a9f4", "#4caf50", "#f9ce1d", "#FF9800"], palette3: ["#33b2df", "#546E7A", "#d4526e", "#13d8aa", "#A5978B"], palette4: ["#4ecdc4", "#c7f464", "#81D4FA", "#fd6a6a", "#546E7A"], palette5: ["#2b908f", "#f9a3a4", "#90ee7e", "#fa4443", "#69d2e7"], palette6: ["#449DD1", "#F86624", "#EA3546", "#662E9B", "#C5D86D"], palette7: ["#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"], palette8: ["#662E9B", "#F86624", "#F9C80E", "#EA3546", "#43BCCD"], palette9: ["#5C4742", "#A5978B", "#8D5B4C", "#5A2A27", "#C4BBAF"], palette10: ["#A300D6", "#7D02EB", "#5653FE", "#2983FF", "#00B1F2"], default: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"] };
    return e[this.w.config.theme.palette] || e.default;
  } }]), n;
}(), uh = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w;
  }
  return te(n, [{ key: "draw", value: function() {
    this.drawTitleSubtitle("title"), this.drawTitleSubtitle("subtitle");
  } }, { key: "drawTitleSubtitle", value: function(e) {
    var t = this.w, i = e === "title" ? t.config.title : t.config.subtitle, s = t.globals.svgWidth / 2, a = i.offsetY, r = "middle";
    if (i.align === "left" ? (s = 10, r = "start") : i.align === "right" && (s = t.globals.svgWidth - 10, r = "end"), s += i.offsetX, a = a + parseInt(i.style.fontSize, 10) + i.margin / 2, i.text !== void 0) {
      var o = new W(this.ctx).drawText({ x: s, y: a, text: i.text, textAnchor: r, fontSize: i.style.fontSize, fontFamily: i.style.fontFamily, fontWeight: i.style.fontWeight, foreColor: i.style.color, opacity: 1 });
      o.node.setAttribute("class", "apexcharts-".concat(e, "-text")), t.globals.dom.Paper.add(o);
    }
  } }]), n;
}(), gh = function() {
  function n(e) {
    ee(this, n), this.w = e.w, this.dCtx = e;
  }
  return te(n, [{ key: "getTitleSubtitleCoords", value: function(e) {
    var t = this.w, i = 0, s = 0, a = e === "title" ? t.config.title.floating : t.config.subtitle.floating, r = t.globals.dom.baseEl.querySelector(".apexcharts-".concat(e, "-text"));
    if (r !== null && !a) {
      var o = r.getBoundingClientRect();
      i = o.width, s = t.globals.axisCharts ? o.height + 5 : o.height;
    }
    return { width: i, height: s };
  } }, { key: "getLegendsRect", value: function() {
    var e = this.w, t = e.globals.dom.elLegendWrap;
    e.config.legend.height || e.config.legend.position !== "top" && e.config.legend.position !== "bottom" || (t.style.maxHeight = e.globals.svgHeight / 2 + "px");
    var i = Object.assign({}, _.getBoundingClientRect(t));
    return t !== null && !e.config.legend.floating && e.config.legend.show ? this.dCtx.lgRect = { x: i.x, y: i.y, height: i.height, width: i.height === 0 ? 0 : i.width } : this.dCtx.lgRect = { x: 0, y: 0, height: 0, width: 0 }, e.config.legend.position !== "left" && e.config.legend.position !== "right" || 1.5 * this.dCtx.lgRect.width > e.globals.svgWidth && (this.dCtx.lgRect.width = e.globals.svgWidth / 1.5), this.dCtx.lgRect;
  } }, { key: "getDatalabelsRect", value: function() {
    var e = this, t = this.w, i = [];
    t.config.series.forEach(function(l, c) {
      l.data.forEach(function(h, d) {
        var u;
        u = t.globals.series[c][d], s = t.config.dataLabels.formatter(u, { ctx: e.dCtx.ctx, seriesIndex: c, dataPointIndex: d, w: t }), i.push(s);
      });
    });
    var s = _.getLargestStringFromArr(i), a = new W(this.dCtx.ctx), r = t.config.dataLabels.style, o = a.getTextRects(s, parseInt(r.fontSize), r.fontFamily);
    return { width: 1.05 * o.width, height: o.height };
  } }, { key: "getLargestStringFromMultiArr", value: function(e, t) {
    var i = e;
    if (this.w.globals.isMultiLineX) {
      var s = t.map(function(r, o) {
        return Array.isArray(r) ? r.length : 1;
      }), a = Math.max.apply(Math, _e(s));
      i = t[s.indexOf(a)];
    }
    return i;
  } }]), n;
}(), fh = function() {
  function n(e) {
    ee(this, n), this.w = e.w, this.dCtx = e;
  }
  return te(n, [{ key: "getxAxisLabelsCoords", value: function() {
    var e, t = this.w, i = t.globals.labels.slice();
    if (t.config.xaxis.convertedCatToNumeric && i.length === 0 && (i = t.globals.categoryLabels), t.globals.timescaleLabels.length > 0) {
      var s = this.getxAxisTimeScaleLabelsCoords();
      e = { width: s.width, height: s.height }, t.globals.rotateXLabels = !1;
    } else {
      this.dCtx.lgWidthForSideLegends = t.config.legend.position !== "left" && t.config.legend.position !== "right" || t.config.legend.floating ? 0 : this.dCtx.lgRect.width;
      var a = t.globals.xLabelFormatter, r = _.getLargestStringFromArr(i), o = this.dCtx.dimHelpers.getLargestStringFromMultiArr(r, i);
      t.globals.isBarHorizontal && (o = r = t.globals.yAxisScale[0].result.reduce(function(p, f) {
        return p.length > f.length ? p : f;
      }, 0));
      var l = new wi(this.dCtx.ctx), c = r;
      r = l.xLabelFormat(a, r, c, { i: void 0, dateFormatter: new Ye(this.dCtx.ctx).formatDate, w: t }), o = l.xLabelFormat(a, o, c, { i: void 0, dateFormatter: new Ye(this.dCtx.ctx).formatDate, w: t }), (t.config.xaxis.convertedCatToNumeric && r === void 0 || String(r).trim() === "") && (o = r = "1");
      var h = new W(this.dCtx.ctx), d = h.getTextRects(r, t.config.xaxis.labels.style.fontSize), u = d;
      if (r !== o && (u = h.getTextRects(o, t.config.xaxis.labels.style.fontSize)), (e = { width: d.width >= u.width ? d.width : u.width, height: d.height >= u.height ? d.height : u.height }).width * i.length > t.globals.svgWidth - this.dCtx.lgWidthForSideLegends - this.dCtx.yAxisWidth - this.dCtx.gridPad.left - this.dCtx.gridPad.right && t.config.xaxis.labels.rotate !== 0 || t.config.xaxis.labels.rotateAlways) {
        if (!t.globals.isBarHorizontal) {
          t.globals.rotateXLabels = !0;
          var g = function(p) {
            return h.getTextRects(p, t.config.xaxis.labels.style.fontSize, t.config.xaxis.labels.style.fontFamily, "rotate(".concat(t.config.xaxis.labels.rotate, " 0 0)"), !1);
          };
          d = g(r), r !== o && (u = g(o)), e.height = (d.height > u.height ? d.height : u.height) / 1.5, e.width = d.width > u.width ? d.width : u.width;
        }
      } else t.globals.rotateXLabels = !1;
    }
    return t.config.xaxis.labels.show || (e = { width: 0, height: 0 }), { width: e.width, height: e.height };
  } }, { key: "getxAxisGroupLabelsCoords", value: function() {
    var e, t = this.w;
    if (!t.globals.hasXaxisGroups) return { width: 0, height: 0 };
    var i, s = ((e = t.config.xaxis.group.style) === null || e === void 0 ? void 0 : e.fontSize) || t.config.xaxis.labels.style.fontSize, a = t.globals.groups.map(function(d) {
      return d.title;
    }), r = _.getLargestStringFromArr(a), o = this.dCtx.dimHelpers.getLargestStringFromMultiArr(r, a), l = new W(this.dCtx.ctx), c = l.getTextRects(r, s), h = c;
    return r !== o && (h = l.getTextRects(o, s)), i = { width: c.width >= h.width ? c.width : h.width, height: c.height >= h.height ? c.height : h.height }, t.config.xaxis.labels.show || (i = { width: 0, height: 0 }), { width: i.width, height: i.height };
  } }, { key: "getxAxisTitleCoords", value: function() {
    var e = this.w, t = 0, i = 0;
    if (e.config.xaxis.title.text !== void 0) {
      var s = new W(this.dCtx.ctx).getTextRects(e.config.xaxis.title.text, e.config.xaxis.title.style.fontSize);
      t = s.width, i = s.height;
    }
    return { width: t, height: i };
  } }, { key: "getxAxisTimeScaleLabelsCoords", value: function() {
    var e, t = this.w;
    this.dCtx.timescaleLabels = t.globals.timescaleLabels.slice();
    var i = this.dCtx.timescaleLabels.map(function(a) {
      return a.value;
    }), s = i.reduce(function(a, r) {
      return a === void 0 ? (console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"), 0) : a.length > r.length ? a : r;
    }, 0);
    return 1.05 * (e = new W(this.dCtx.ctx).getTextRects(s, t.config.xaxis.labels.style.fontSize)).width * i.length > t.globals.gridWidth && t.config.xaxis.labels.rotate !== 0 && (t.globals.overlappingXLabels = !0), e;
  } }, { key: "additionalPaddingXLabels", value: function(e) {
    var t = this, i = this.w, s = i.globals, a = i.config, r = a.xaxis.type, o = e.width;
    s.skipLastTimelinelabel = !1, s.skipFirstTimelinelabel = !1;
    var l = i.config.yaxis[0].opposite && i.globals.isBarHorizontal, c = function(h, d) {
      a.yaxis.length > 1 && function(u) {
        return s.collapsedSeriesIndices.indexOf(u) !== -1;
      }(d) || function(u) {
        if (t.dCtx.timescaleLabels && t.dCtx.timescaleLabels.length) {
          var g = t.dCtx.timescaleLabels[0], p = t.dCtx.timescaleLabels[t.dCtx.timescaleLabels.length - 1].position + o / 1.75 - t.dCtx.yAxisWidthRight, f = g.position - o / 1.75 + t.dCtx.yAxisWidthLeft, x = i.config.legend.position === "right" && t.dCtx.lgRect.width > 0 ? t.dCtx.lgRect.width : 0;
          p > s.svgWidth - s.translateX - x && (s.skipLastTimelinelabel = !0), f < -(u.show && !u.floating || a.chart.type !== "bar" && a.chart.type !== "candlestick" && a.chart.type !== "rangeBar" && a.chart.type !== "boxPlot" ? 10 : o / 1.75) && (s.skipFirstTimelinelabel = !0);
        } else r === "datetime" ? t.dCtx.gridPad.right < o && !s.rotateXLabels && (s.skipLastTimelinelabel = !0) : r !== "datetime" && t.dCtx.gridPad.right < o / 2 - t.dCtx.yAxisWidthRight && !s.rotateXLabels && !i.config.xaxis.labels.trim && (t.dCtx.xPadRight = o / 2 + 1);
      }(h);
    };
    a.yaxis.forEach(function(h, d) {
      l ? (t.dCtx.gridPad.left < o && (t.dCtx.xPadLeft = o / 2 + 1), t.dCtx.xPadRight = o / 2 + 1) : c(h, d);
    });
  } }]), n;
}(), ph = function() {
  function n(e) {
    ee(this, n), this.w = e.w, this.dCtx = e;
  }
  return te(n, [{ key: "getyAxisLabelsCoords", value: function() {
    var e = this, t = this.w, i = [], s = 10, a = new vt(this.dCtx.ctx);
    return t.config.yaxis.map(function(r, o) {
      var l = { seriesIndex: o, dataPointIndex: -1, w: t }, c = t.globals.yAxisScale[o], h = 0;
      if (!a.isYAxisHidden(o) && r.labels.show && r.labels.minWidth !== void 0 && (h = r.labels.minWidth), !a.isYAxisHidden(o) && r.labels.show && c.result.length) {
        var d = t.globals.yLabelFormatters[o], u = c.niceMin === Number.MIN_VALUE ? 0 : c.niceMin, g = c.result.reduce(function(y, v) {
          var k, A;
          return ((k = String(d(y, l))) === null || k === void 0 ? void 0 : k.length) > ((A = String(d(v, l))) === null || A === void 0 ? void 0 : A.length) ? y : v;
        }, u), p = g = d(g, l);
        if (g !== void 0 && g.length !== 0 || (g = c.niceMax), t.globals.isBarHorizontal) {
          s = 0;
          var f = t.globals.labels.slice();
          g = _.getLargestStringFromArr(f), g = d(g, { seriesIndex: o, dataPointIndex: -1, w: t }), p = e.dCtx.dimHelpers.getLargestStringFromMultiArr(g, f);
        }
        var x = new W(e.dCtx.ctx), m = "rotate(".concat(r.labels.rotate, " 0 0)"), b = x.getTextRects(g, r.labels.style.fontSize, r.labels.style.fontFamily, m, !1), w = b;
        g !== p && (w = x.getTextRects(p, r.labels.style.fontSize, r.labels.style.fontFamily, m, !1)), i.push({ width: (h > w.width || h > b.width ? h : w.width > b.width ? w.width : b.width) + s, height: w.height > b.height ? w.height : b.height });
      } else i.push({ width: 0, height: 0 });
    }), i;
  } }, { key: "getyAxisTitleCoords", value: function() {
    var e = this, t = this.w, i = [];
    return t.config.yaxis.map(function(s, a) {
      if (s.show && s.title.text !== void 0) {
        var r = new W(e.dCtx.ctx), o = "rotate(".concat(s.title.rotate, " 0 0)"), l = r.getTextRects(s.title.text, s.title.style.fontSize, s.title.style.fontFamily, o, !1);
        i.push({ width: l.width, height: l.height });
      } else i.push({ width: 0, height: 0 });
    }), i;
  } }, { key: "getTotalYAxisWidth", value: function() {
    var e = this.w, t = 0, i = 0, s = 0, a = e.globals.yAxisScale.length > 1 ? 10 : 0, r = new vt(this.dCtx.ctx), o = function(l, c) {
      var h = e.config.yaxis[c].floating, d = 0;
      l.width > 0 && !h ? (d = l.width + a, function(u) {
        return e.globals.ignoreYAxisIndexes.indexOf(u) > -1;
      }(c) && (d = d - l.width - a)) : d = h || r.isYAxisHidden(c) ? 0 : 5, e.config.yaxis[c].opposite ? s += d : i += d, t += d;
    };
    return e.globals.yLabelsCoords.map(function(l, c) {
      o(l, c);
    }), e.globals.yTitleCoords.map(function(l, c) {
      o(l, c);
    }), e.globals.isBarHorizontal && !e.config.yaxis[0].floating && (t = e.globals.yLabelsCoords[0].width + e.globals.yTitleCoords[0].width + 15), this.dCtx.yAxisWidthLeft = i, this.dCtx.yAxisWidthRight = s, t;
  } }]), n;
}(), xh = function() {
  function n(e) {
    ee(this, n), this.w = e.w, this.dCtx = e;
  }
  return te(n, [{ key: "gridPadForColumnsInNumericAxis", value: function(e) {
    var t = this.w, i = t.config, s = t.globals;
    if (s.noData || s.collapsedSeries.length + s.ancillaryCollapsedSeries.length === i.series.length) return 0;
    var a = function(g) {
      return ["bar", "rangeBar", "candlestick", "boxPlot"].includes(g);
    }, r = i.chart.type, o = 0, l = a(r) ? i.series.length : 1;
    s.comboBarCount > 0 && (l = s.comboBarCount), s.collapsedSeries.forEach(function(g) {
      a(g.type) && (l -= 1);
    }), i.chart.stacked && (l = 1);
    var c = a(r) || s.comboBarCount > 0, h = Math.abs(s.initialMaxX - s.initialMinX);
    if (c && s.isXNumeric && !s.isBarHorizontal && l > 0 && h !== 0) {
      h <= 3 && (h = s.dataPoints);
      var d = h / e, u = s.minXDiff && s.minXDiff / d > 0 ? s.minXDiff / d : 0;
      u > e / 2 && (u /= 2), (o = u * parseInt(i.plotOptions.bar.columnWidth, 10) / 100) < 1 && (o = 1), s.barPadForNumericAxis = o;
    }
    return o;
  } }, { key: "gridPadFortitleSubtitle", value: function() {
    var e = this, t = this.w, i = t.globals, s = this.dCtx.isSparkline || !i.axisCharts ? 0 : 10;
    ["title", "subtitle"].forEach(function(o) {
      t.config[o].text !== void 0 ? s += t.config[o].margin : s += e.dCtx.isSparkline || !i.axisCharts ? 0 : 5;
    }), !t.config.legend.show || t.config.legend.position !== "bottom" || t.config.legend.floating || i.axisCharts || (s += 10);
    var a = this.dCtx.dimHelpers.getTitleSubtitleCoords("title"), r = this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");
    i.gridHeight -= a.height + r.height + s, i.translateY += a.height + r.height + s;
  } }, { key: "setGridXPosForDualYAxis", value: function(e, t) {
    var i = this.w, s = new vt(this.dCtx.ctx);
    i.config.yaxis.forEach(function(a, r) {
      i.globals.ignoreYAxisIndexes.indexOf(r) !== -1 || a.floating || s.isYAxisHidden(r) || (a.opposite && (i.globals.translateX -= t[r].width + e[r].width + parseInt(a.labels.style.fontSize, 10) / 1.2 + 12), i.globals.translateX < 2 && (i.globals.translateX = 2));
    });
  } }]), n;
}(), Hi = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w, this.lgRect = {}, this.yAxisWidth = 0, this.yAxisWidthLeft = 0, this.yAxisWidthRight = 0, this.xAxisHeight = 0, this.isSparkline = this.w.config.chart.sparkline.enabled, this.dimHelpers = new gh(this), this.dimYAxis = new ph(this), this.dimXAxis = new fh(this), this.dimGrid = new xh(this), this.lgWidthForSideLegends = 0, this.gridPad = this.w.config.grid.padding, this.xPadRight = 0, this.xPadLeft = 0;
  }
  return te(n, [{ key: "plotCoords", value: function() {
    var e = this, t = this.w, i = t.globals;
    this.lgRect = this.dimHelpers.getLegendsRect(), this.datalabelsCoords = { width: 0, height: 0 };
    var s = Array.isArray(t.config.stroke.width) ? Math.max.apply(Math, _e(t.config.stroke.width)) : t.config.stroke.width;
    this.isSparkline && ((t.config.markers.discrete.length > 0 || t.config.markers.size > 0) && Object.entries(this.gridPad).forEach(function(r) {
      var o = un(r, 2), l = o[0], c = o[1];
      e.gridPad[l] = Math.max(c, e.w.globals.markers.largestSize / 1.5);
    }), this.gridPad.top = Math.max(s / 2, this.gridPad.top), this.gridPad.bottom = Math.max(s / 2, this.gridPad.bottom)), i.axisCharts ? this.setDimensionsForAxisCharts() : this.setDimensionsForNonAxisCharts(), this.dimGrid.gridPadFortitleSubtitle(), i.gridHeight = i.gridHeight - this.gridPad.top - this.gridPad.bottom, i.gridWidth = i.gridWidth - this.gridPad.left - this.gridPad.right - this.xPadRight - this.xPadLeft;
    var a = this.dimGrid.gridPadForColumnsInNumericAxis(i.gridWidth);
    i.gridWidth = i.gridWidth - 2 * a, i.translateX = i.translateX + this.gridPad.left + this.xPadLeft + (a > 0 ? a : 0), i.translateY = i.translateY + this.gridPad.top;
  } }, { key: "setDimensionsForAxisCharts", value: function() {
    var e = this, t = this.w, i = t.globals, s = this.dimYAxis.getyAxisLabelsCoords(), a = this.dimYAxis.getyAxisTitleCoords();
    i.isSlopeChart && (this.datalabelsCoords = this.dimHelpers.getDatalabelsRect()), t.globals.yLabelsCoords = [], t.globals.yTitleCoords = [], t.config.yaxis.map(function(g, p) {
      t.globals.yLabelsCoords.push({ width: s[p].width, index: p }), t.globals.yTitleCoords.push({ width: a[p].width, index: p });
    }), this.yAxisWidth = this.dimYAxis.getTotalYAxisWidth();
    var r = this.dimXAxis.getxAxisLabelsCoords(), o = this.dimXAxis.getxAxisGroupLabelsCoords(), l = this.dimXAxis.getxAxisTitleCoords();
    this.conditionalChecksForAxisCoords(r, l, o), i.translateXAxisY = t.globals.rotateXLabels ? this.xAxisHeight / 8 : -4, i.translateXAxisX = t.globals.rotateXLabels && t.globals.isXNumeric && t.config.xaxis.labels.rotate <= -45 ? -this.xAxisWidth / 4 : 0, t.globals.isBarHorizontal && (i.rotateXLabels = !1, i.translateXAxisY = parseInt(t.config.xaxis.labels.style.fontSize, 10) / 1.5 * -1), i.translateXAxisY = i.translateXAxisY + t.config.xaxis.labels.offsetY, i.translateXAxisX = i.translateXAxisX + t.config.xaxis.labels.offsetX;
    var c = this.yAxisWidth, h = this.xAxisHeight;
    i.xAxisLabelsHeight = this.xAxisHeight - l.height, i.xAxisGroupLabelsHeight = i.xAxisLabelsHeight - r.height, i.xAxisLabelsWidth = this.xAxisWidth, i.xAxisHeight = this.xAxisHeight;
    var d = 10;
    (t.config.chart.type === "radar" || this.isSparkline) && (c = 0, h = 0), this.isSparkline && (this.lgRect = { height: 0, width: 0 }), (this.isSparkline || t.config.chart.type === "treemap") && (c = 0, h = 0, d = 0), this.isSparkline || t.config.chart.type === "treemap" || this.dimXAxis.additionalPaddingXLabels(r);
    var u = function() {
      i.translateX = c + e.datalabelsCoords.width, i.gridHeight = i.svgHeight - e.lgRect.height - h - (e.isSparkline || t.config.chart.type === "treemap" ? 0 : t.globals.rotateXLabels ? 10 : 15), i.gridWidth = i.svgWidth - c - 2 * e.datalabelsCoords.width;
    };
    switch (t.config.xaxis.position === "top" && (d = i.xAxisHeight - t.config.xaxis.axisTicks.height - 5), t.config.legend.position) {
      case "bottom":
        i.translateY = d, u();
        break;
      case "top":
        i.translateY = this.lgRect.height + d, u();
        break;
      case "left":
        i.translateY = d, i.translateX = this.lgRect.width + c + this.datalabelsCoords.width, i.gridHeight = i.svgHeight - h - 12, i.gridWidth = i.svgWidth - this.lgRect.width - c - 2 * this.datalabelsCoords.width;
        break;
      case "right":
        i.translateY = d, i.translateX = c + this.datalabelsCoords.width, i.gridHeight = i.svgHeight - h - 12, i.gridWidth = i.svgWidth - this.lgRect.width - c - 2 * this.datalabelsCoords.width - 5;
        break;
      default:
        throw new Error("Legend position not supported");
    }
    this.dimGrid.setGridXPosForDualYAxis(a, s), new Sa(this.ctx).setYAxisXPosition(s, a);
  } }, { key: "setDimensionsForNonAxisCharts", value: function() {
    var e = this.w, t = e.globals, i = e.config, s = 0;
    e.config.legend.show && !e.config.legend.floating && (s = 20);
    var a = i.chart.type === "pie" || i.chart.type === "polarArea" || i.chart.type === "donut" ? "pie" : "radialBar", r = i.plotOptions[a].offsetY, o = i.plotOptions[a].offsetX;
    if (!i.legend.show || i.legend.floating) {
      t.gridHeight = t.svgHeight;
      var l = t.dom.elWrap.getBoundingClientRect().width;
      return t.gridWidth = Math.min(l, t.gridHeight), t.translateY = r, void (t.translateX = o + (t.svgWidth - t.gridWidth) / 2);
    }
    switch (i.legend.position) {
      case "bottom":
        t.gridHeight = t.svgHeight - this.lgRect.height, t.gridWidth = t.svgWidth, t.translateY = r - 10, t.translateX = o + (t.svgWidth - t.gridWidth) / 2;
        break;
      case "top":
        t.gridHeight = t.svgHeight - this.lgRect.height, t.gridWidth = t.svgWidth, t.translateY = this.lgRect.height + r + 10, t.translateX = o + (t.svgWidth - t.gridWidth) / 2;
        break;
      case "left":
        t.gridWidth = t.svgWidth - this.lgRect.width - s, t.gridHeight = i.chart.height !== "auto" ? t.svgHeight : t.gridWidth, t.translateY = r, t.translateX = o + this.lgRect.width + s;
        break;
      case "right":
        t.gridWidth = t.svgWidth - this.lgRect.width - s - 5, t.gridHeight = i.chart.height !== "auto" ? t.svgHeight : t.gridWidth, t.translateY = r, t.translateX = o + 10;
        break;
      default:
        throw new Error("Legend position not supported");
    }
  } }, { key: "conditionalChecksForAxisCoords", value: function(e, t, i) {
    var s = this.w, a = s.globals.hasXaxisGroups ? 2 : 1, r = i.height + e.height + t.height, o = s.globals.isMultiLineX ? 1.2 : s.globals.LINE_HEIGHT_RATIO, l = s.globals.rotateXLabels ? 22 : 10, c = s.globals.rotateXLabels && s.config.legend.position === "bottom" ? 10 : 0;
    this.xAxisHeight = r * o + a * l + c, this.xAxisWidth = e.width, this.xAxisHeight - t.height > s.config.xaxis.labels.maxHeight && (this.xAxisHeight = s.config.xaxis.labels.maxHeight), s.config.xaxis.labels.minHeight && this.xAxisHeight < s.config.xaxis.labels.minHeight && (this.xAxisHeight = s.config.xaxis.labels.minHeight), s.config.xaxis.floating && (this.xAxisHeight = 0);
    var h = 0, d = 0;
    s.config.yaxis.forEach(function(u) {
      h += u.labels.minWidth, d += u.labels.maxWidth;
    }), this.yAxisWidth < h && (this.yAxisWidth = h), this.yAxisWidth > d && (this.yAxisWidth = d);
  } }]), n;
}(), mh = function() {
  function n(e) {
    ee(this, n), this.w = e.w, this.lgCtx = e;
  }
  return te(n, [{ key: "getLegendStyles", value: function() {
    var e, t, i, s = document.createElement("style");
    s.setAttribute("type", "text/css");
    var a = ((e = this.lgCtx.ctx) === null || e === void 0 || (t = e.opts) === null || t === void 0 || (i = t.chart) === null || i === void 0 ? void 0 : i.nonce) || this.w.config.chart.nonce;
    a && s.setAttribute("nonce", a);
    var r = document.createTextNode(`
      .apexcharts-flip-y {
        transform: scaleY(-1) translateY(-100%);
        transform-origin: top;
        transform-box: fill-box;
      }
      .apexcharts-flip-x {
        transform: scaleX(-1);
        transform-origin: center;
        transform-box: fill-box;
      }
      .apexcharts-legend {
        display: flex;
        overflow: auto;
        padding: 0 10px;
      }
      .apexcharts-legend.apexcharts-legend-group-horizontal {
        flex-direction: column;
      }
      .apexcharts-legend-group {
        display: flex;
      }
      .apexcharts-legend-group-vertical {
        flex-direction: column-reverse;
      }
      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {
        flex-wrap: wrap
      }
      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {
        flex-direction: column;
        bottom: 0;
      }
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {
        justify-content: flex-start;
        align-items: flex-start;
      }
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {
        justify-content: center;
        align-items: center;
      }
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {
        justify-content: flex-end;
        align-items: flex-end;
      }
      .apexcharts-legend-series {
        cursor: pointer;
        line-height: normal;
        display: flex;
        align-items: center;
      }
      .apexcharts-legend-text {
        position: relative;
        font-size: 14px;
      }
      .apexcharts-legend-text *, .apexcharts-legend-marker * {
        pointer-events: none;
      }
      .apexcharts-legend-marker {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-right: 1px;
      }

      .apexcharts-legend-series.apexcharts-no-click {
        cursor: auto;
      }
      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {
        display: none !important;
      }
      .apexcharts-inactive-legend {
        opacity: 0.45;
      }

    `);
    return s.appendChild(r), s;
  } }, { key: "getLegendDimensions", value: function() {
    var e = this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(), t = e.width;
    return { clwh: e.height, clww: t };
  } }, { key: "appendToForeignObject", value: function() {
    this.w.globals.dom.elLegendForeign.appendChild(this.getLegendStyles());
  } }, { key: "toggleDataSeries", value: function(e, t) {
    var i = this, s = this.w;
    if (s.globals.axisCharts || s.config.chart.type === "radialBar") {
      s.globals.resized = !0;
      var a = null, r = null;
      s.globals.risingSeries = [], s.globals.axisCharts ? (a = s.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e, "']")), r = parseInt(a.getAttribute("data:realIndex"), 10)) : (a = s.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(e + 1, "']")), r = parseInt(a.getAttribute("rel"), 10) - 1), t ? [{ cs: s.globals.collapsedSeries, csi: s.globals.collapsedSeriesIndices }, { cs: s.globals.ancillaryCollapsedSeries, csi: s.globals.ancillaryCollapsedSeriesIndices }].forEach(function(h) {
        i.riseCollapsedSeries(h.cs, h.csi, r);
      }) : this.hideSeries({ seriesEl: a, realIndex: r });
    } else {
      var o = s.globals.dom.Paper.findOne(" .apexcharts-series[rel='".concat(e + 1, "'] path")), l = s.config.chart.type;
      if (l === "pie" || l === "polarArea" || l === "donut") {
        var c = s.config.plotOptions.pie.donut.labels;
        new W(this.lgCtx.ctx).pathMouseDown(o, null), this.lgCtx.ctx.pie.printDataLabelsInner(o.node, c);
      }
      o.fire("click");
    }
  } }, { key: "getSeriesAfterCollapsing", value: function(e) {
    var t = e.realIndex, i = this.w, s = i.globals, a = _.clone(i.config.series);
    if (s.axisCharts) {
      var r = i.config.yaxis[s.seriesYAxisReverseMap[t]], o = { index: t, data: a[t].data.slice(), type: a[t].type || i.config.chart.type };
      if (r && r.show && r.showAlways) s.ancillaryCollapsedSeriesIndices.indexOf(t) < 0 && (s.ancillaryCollapsedSeries.push(o), s.ancillaryCollapsedSeriesIndices.push(t));
      else if (s.collapsedSeriesIndices.indexOf(t) < 0) {
        s.collapsedSeries.push(o), s.collapsedSeriesIndices.push(t);
        var l = s.risingSeries.indexOf(t);
        s.risingSeries.splice(l, 1);
      }
    } else s.collapsedSeries.push({ index: t, data: a[t] }), s.collapsedSeriesIndices.push(t);
    return s.allSeriesCollapsed = s.collapsedSeries.length + s.ancillaryCollapsedSeries.length === i.config.series.length, this._getSeriesBasedOnCollapsedState(a);
  } }, { key: "hideSeries", value: function(e) {
    for (var t = e.seriesEl, i = e.realIndex, s = this.w, a = this.getSeriesAfterCollapsing({ realIndex: i }), r = t.childNodes, o = 0; o < r.length; o++) r[o].classList.contains("apexcharts-series-markers-wrap") && (r[o].classList.contains("apexcharts-hide") ? r[o].classList.remove("apexcharts-hide") : r[o].classList.add("apexcharts-hide"));
    this.lgCtx.ctx.updateHelpers._updateSeries(a, s.config.chart.animations.dynamicAnimation.enabled);
  } }, { key: "riseCollapsedSeries", value: function(e, t, i) {
    var s = this.w, a = _.clone(s.config.series);
    if (e.length > 0) {
      for (var r = 0; r < e.length; r++) e[r].index === i && (s.globals.axisCharts ? a[i].data = e[r].data.slice() : a[i] = e[r].data, typeof a[i] != "number" && (a[i].hidden = !1), e.splice(r, 1), t.splice(r, 1), s.globals.risingSeries.push(i));
      a = this._getSeriesBasedOnCollapsedState(a), this.lgCtx.ctx.updateHelpers._updateSeries(a, s.config.chart.animations.dynamicAnimation.enabled);
    }
  } }, { key: "_getSeriesBasedOnCollapsedState", value: function(e) {
    var t = this.w, i = 0;
    return t.globals.axisCharts ? e.forEach(function(s, a) {
      t.globals.collapsedSeriesIndices.indexOf(a) < 0 && t.globals.ancillaryCollapsedSeriesIndices.indexOf(a) < 0 || (e[a].data = [], i++);
    }) : e.forEach(function(s, a) {
      !t.globals.collapsedSeriesIndices.indexOf(a) < 0 && (e[a] = 0, i++);
    }), t.globals.allSeriesCollapsed = i === e.length, e;
  } }]), n;
}(), Gn = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w, this.onLegendClick = this.onLegendClick.bind(this), this.onLegendHovered = this.onLegendHovered.bind(this), this.isBarsDistributed = this.w.config.chart.type === "bar" && this.w.config.plotOptions.bar.distributed && this.w.config.series.length === 1, this.legendHelpers = new mh(this);
  }
  return te(n, [{ key: "init", value: function() {
    var e = this.w, t = e.globals, i = e.config, s = i.legend.showForSingleSeries && t.series.length === 1 || this.isBarsDistributed || t.series.length > 1;
    if (this.legendHelpers.appendToForeignObject(), (s || !t.axisCharts) && i.legend.show) {
      for (; t.dom.elLegendWrap.firstChild; ) t.dom.elLegendWrap.removeChild(t.dom.elLegendWrap.firstChild);
      this.drawLegends(), i.legend.position === "bottom" || i.legend.position === "top" ? this.legendAlignHorizontal() : i.legend.position !== "right" && i.legend.position !== "left" || this.legendAlignVertical();
    }
  } }, { key: "createLegendMarker", value: function(e) {
    var t = e.i, i = e.fillcolor, s = this.w, a = document.createElement("span");
    a.classList.add("apexcharts-legend-marker");
    var r = s.config.legend.markers.shape || s.config.markers.shape, o = r;
    Array.isArray(r) && (o = r[t]);
    var l = Array.isArray(s.config.legend.markers.size) ? parseFloat(s.config.legend.markers.size[t]) : parseFloat(s.config.legend.markers.size), c = Array.isArray(s.config.legend.markers.offsetX) ? parseFloat(s.config.legend.markers.offsetX[t]) : parseFloat(s.config.legend.markers.offsetX), h = Array.isArray(s.config.legend.markers.offsetY) ? parseFloat(s.config.legend.markers.offsetY[t]) : parseFloat(s.config.legend.markers.offsetY), d = Array.isArray(s.config.legend.markers.strokeWidth) ? parseFloat(s.config.legend.markers.strokeWidth[t]) : parseFloat(s.config.legend.markers.strokeWidth), u = a.style;
    if (u.height = 2 * (l + d) + "px", u.width = 2 * (l + d) + "px", u.left = c + "px", u.top = h + "px", s.config.legend.markers.customHTML) u.background = "transparent", u.color = i[t], Array.isArray(s.config.legend.markers.customHTML) ? s.config.legend.markers.customHTML[t] && (a.innerHTML = s.config.legend.markers.customHTML[t]()) : a.innerHTML = s.config.legend.markers.customHTML();
    else {
      var g = new Zt(this.ctx).getMarkerConfig({ cssClass: "apexcharts-legend-marker apexcharts-marker apexcharts-marker-".concat(o), seriesIndex: t, strokeWidth: d, size: l }), p = window.SVG().addTo(a).size("100%", "100%"), f = new W(this.ctx).drawMarker(0, 0, q(q({}, g), {}, { pointFillColor: Array.isArray(i) ? i[t] : g.pointFillColor, shape: o }));
      s.globals.dom.Paper.find(".apexcharts-legend-marker.apexcharts-marker").forEach(function(x) {
        x.node.classList.contains("apexcharts-marker-triangle") ? x.node.style.transform = "translate(50%, 45%)" : x.node.style.transform = "translate(50%, 50%)";
      }), p.add(f);
    }
    return a;
  } }, { key: "drawLegends", value: function() {
    var e = this, t = this, i = this.w, s = i.config.legend.fontFamily, a = i.globals.seriesNames, r = i.config.legend.markers.fillColors ? i.config.legend.markers.fillColors.slice() : i.globals.colors.slice();
    if (i.config.chart.type === "heatmap") {
      var o = i.config.plotOptions.heatmap.colorScale.ranges;
      a = o.map(function(g) {
        return g.name ? g.name : g.from + " - " + g.to;
      }), r = o.map(function(g) {
        return g.color;
      });
    } else this.isBarsDistributed && (a = i.globals.labels.slice());
    i.config.legend.customLegendItems.length && (a = i.config.legend.customLegendItems);
    var l = i.globals.legendFormatter, c = i.config.legend.inverseOrder, h = [];
    i.globals.seriesGroups.length > 1 && i.config.legend.clusterGroupedSeries && i.globals.seriesGroups.forEach(function(g, p) {
      h[p] = document.createElement("div"), h[p].classList.add("apexcharts-legend-group", "apexcharts-legend-group-".concat(p)), i.config.legend.clusterGroupedSeriesOrientation === "horizontal" ? i.globals.dom.elLegendWrap.classList.add("apexcharts-legend-group-horizontal") : h[p].classList.add("apexcharts-legend-group-vertical");
    });
    for (var d = function(g) {
      var p, f = l(a[g], { seriesIndex: g, w: i }), x = !1, m = !1;
      if (i.globals.collapsedSeries.length > 0) for (var b = 0; b < i.globals.collapsedSeries.length; b++) i.globals.collapsedSeries[b].index === g && (x = !0);
      if (i.globals.ancillaryCollapsedSeriesIndices.length > 0) for (var w = 0; w < i.globals.ancillaryCollapsedSeriesIndices.length; w++) i.globals.ancillaryCollapsedSeriesIndices[w] === g && (m = !0);
      var y = e.createLegendMarker({ i: g, fillcolor: r });
      W.setAttrs(y, { rel: g + 1, "data:collapsed": x || m }), (x || m) && y.classList.add("apexcharts-inactive-legend");
      var v = document.createElement("div"), k = document.createElement("span");
      k.classList.add("apexcharts-legend-text"), k.innerHTML = Array.isArray(f) ? f.join(" ") : f;
      var A = i.config.legend.labels.useSeriesColors ? i.globals.colors[g] : Array.isArray(i.config.legend.labels.colors) ? (p = i.config.legend.labels.colors) === null || p === void 0 ? void 0 : p[g] : i.config.legend.labels.colors;
      A || (A = i.config.chart.foreColor), k.style.color = A, k.style.fontSize = parseFloat(i.config.legend.fontSize) + "px", k.style.fontWeight = i.config.legend.fontWeight, k.style.fontFamily = s || i.config.chart.fontFamily, W.setAttrs(k, { rel: g + 1, i: g, "data:default-text": encodeURIComponent(f), "data:collapsed": x || m }), v.appendChild(y), v.appendChild(k);
      var S = new Oe(e.ctx);
      i.config.legend.showForZeroSeries || S.getSeriesTotalByIndex(g) === 0 && S.seriesHaveSameValues(g) && !S.isSeriesNull(g) && i.globals.collapsedSeriesIndices.indexOf(g) === -1 && i.globals.ancillaryCollapsedSeriesIndices.indexOf(g) === -1 && v.classList.add("apexcharts-hidden-zero-series"), i.config.legend.showForNullSeries || S.isSeriesNull(g) && i.globals.collapsedSeriesIndices.indexOf(g) === -1 && i.globals.ancillaryCollapsedSeriesIndices.indexOf(g) === -1 && v.classList.add("apexcharts-hidden-null-series"), h.length ? i.globals.seriesGroups.forEach(function(C, L) {
        var P;
        C.includes((P = i.config.series[g]) === null || P === void 0 ? void 0 : P.name) && (i.globals.dom.elLegendWrap.appendChild(h[L]), h[L].appendChild(v));
      }) : i.globals.dom.elLegendWrap.appendChild(v), i.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(i.config.legend.horizontalAlign)), i.globals.dom.elLegendWrap.classList.add("apx-legend-position-" + i.config.legend.position), v.classList.add("apexcharts-legend-series"), v.style.margin = "".concat(i.config.legend.itemMargin.vertical, "px ").concat(i.config.legend.itemMargin.horizontal, "px"), i.globals.dom.elLegendWrap.style.width = i.config.legend.width ? i.config.legend.width + "px" : "", i.globals.dom.elLegendWrap.style.height = i.config.legend.height ? i.config.legend.height + "px" : "", W.setAttrs(v, { rel: g + 1, seriesName: _.escapeString(a[g]), "data:collapsed": x || m }), (x || m) && v.classList.add("apexcharts-inactive-legend"), i.config.legend.onItemClick.toggleDataSeries || v.classList.add("apexcharts-no-click");
    }, u = c ? a.length - 1 : 0; c ? u >= 0 : u <= a.length - 1; c ? u-- : u++) d(u);
    i.globals.dom.elWrap.addEventListener("click", t.onLegendClick, !0), i.config.legend.onItemHover.highlightDataSeries && i.config.legend.customLegendItems.length === 0 && (i.globals.dom.elWrap.addEventListener("mousemove", t.onLegendHovered, !0), i.globals.dom.elWrap.addEventListener("mouseout", t.onLegendHovered, !0));
  } }, { key: "setLegendWrapXY", value: function(e, t) {
    var i = this.w, s = i.globals.dom.elLegendWrap, a = s.clientHeight, r = 0, o = 0;
    if (i.config.legend.position === "bottom") o = i.globals.svgHeight - Math.min(a, i.globals.svgHeight / 2) - 5;
    else if (i.config.legend.position === "top") {
      var l = new Hi(this.ctx), c = l.dimHelpers.getTitleSubtitleCoords("title").height, h = l.dimHelpers.getTitleSubtitleCoords("subtitle").height;
      o = (c > 0 ? c - 10 : 0) + (h > 0 ? h - 10 : 0);
    }
    s.style.position = "absolute", r = r + e + i.config.legend.offsetX, o = o + t + i.config.legend.offsetY, s.style.left = r + "px", s.style.top = o + "px", i.config.legend.position === "right" && (s.style.left = "auto", s.style.right = 25 + i.config.legend.offsetX + "px"), ["width", "height"].forEach(function(d) {
      s.style[d] && (s.style[d] = parseInt(i.config.legend[d], 10) + "px");
    });
  } }, { key: "legendAlignHorizontal", value: function() {
    var e = this.w;
    e.globals.dom.elLegendWrap.style.right = 0;
    var t = new Hi(this.ctx), i = t.dimHelpers.getTitleSubtitleCoords("title"), s = t.dimHelpers.getTitleSubtitleCoords("subtitle"), a = 0;
    e.config.legend.position === "top" && (a = i.height + s.height + e.config.title.margin + e.config.subtitle.margin - 10), this.setLegendWrapXY(20, a);
  } }, { key: "legendAlignVertical", value: function() {
    var e = this.w, t = this.legendHelpers.getLegendDimensions(), i = 0;
    e.config.legend.position === "left" && (i = 20), e.config.legend.position === "right" && (i = e.globals.svgWidth - t.clww - 10), this.setLegendWrapXY(i, 20);
  } }, { key: "onLegendHovered", value: function(e) {
    var t = this.w, i = e.target.classList.contains("apexcharts-legend-series") || e.target.classList.contains("apexcharts-legend-text") || e.target.classList.contains("apexcharts-legend-marker");
    if (t.config.chart.type === "heatmap" || this.isBarsDistributed) {
      if (i) {
        var s = parseInt(e.target.getAttribute("rel"), 10) - 1;
        this.ctx.events.fireEvent("legendHover", [this.ctx, s, this.w]), new st(this.ctx).highlightRangeInSeries(e, e.target);
      }
    } else !e.target.classList.contains("apexcharts-inactive-legend") && i && new st(this.ctx).toggleSeriesOnHover(e, e.target);
  } }, { key: "onLegendClick", value: function(e) {
    var t = this.w;
    if (!t.config.legend.customLegendItems.length && (e.target.classList.contains("apexcharts-legend-series") || e.target.classList.contains("apexcharts-legend-text") || e.target.classList.contains("apexcharts-legend-marker"))) {
      var i = parseInt(e.target.getAttribute("rel"), 10) - 1, s = e.target.getAttribute("data:collapsed") === "true", a = this.w.config.chart.events.legendClick;
      typeof a == "function" && a(this.ctx, i, this.w), this.ctx.events.fireEvent("legendClick", [this.ctx, i, this.w]);
      var r = this.w.config.legend.markers.onClick;
      typeof r == "function" && e.target.classList.contains("apexcharts-legend-marker") && (r(this.ctx, i, this.w), this.ctx.events.fireEvent("legendMarkerClick", [this.ctx, i, this.w])), t.config.chart.type !== "treemap" && t.config.chart.type !== "heatmap" && !this.isBarsDistributed && t.config.legend.onItemClick.toggleDataSeries && this.legendHelpers.toggleDataSeries(i, s);
    }
  } }]), n;
}(), Vn = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w;
    var t = this.w;
    this.ev = this.w.config.chart.events, this.selectedClass = "apexcharts-selected", this.localeValues = this.w.globals.locale.toolbar, this.minX = t.globals.minX, this.maxX = t.globals.maxX;
  }
  return te(n, [{ key: "createToolbar", value: function() {
    var e = this, t = this.w, i = function() {
      return document.createElement("div");
    }, s = i();
    if (s.setAttribute("class", "apexcharts-toolbar"), s.style.top = t.config.chart.toolbar.offsetY + "px", s.style.right = 3 - t.config.chart.toolbar.offsetX + "px", t.globals.dom.elWrap.appendChild(s), this.elZoom = i(), this.elZoomIn = i(), this.elZoomOut = i(), this.elPan = i(), this.elSelection = i(), this.elZoomReset = i(), this.elMenuIcon = i(), this.elMenu = i(), this.elCustomIcons = [], this.t = t.config.chart.toolbar.tools, Array.isArray(this.t.customIcons)) for (var a = 0; a < this.t.customIcons.length; a++) this.elCustomIcons.push(i());
    var r = [], o = function(d, u, g) {
      var p = d.toLowerCase();
      e.t[p] && t.config.chart.zoom.enabled && r.push({ el: u, icon: typeof e.t[p] == "string" ? e.t[p] : g, title: e.localeValues[d], class: "apexcharts-".concat(p, "-icon") });
    };
    o("zoomIn", this.elZoomIn, `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
</svg>
`), o("zoomOut", this.elZoomOut, `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
</svg>
`);
    var l = function(d) {
      e.t[d] && t.config.chart[d].enabled && r.push({ el: d === "zoom" ? e.elZoom : e.elSelection, icon: typeof e.t[d] == "string" ? e.t[d] : d === "zoom" ? `<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>
</svg>` : `<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>
</svg>`, title: e.localeValues[d === "zoom" ? "selectionZoom" : "selection"], class: t.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-".concat(d, "-icon") });
    };
    l("zoom"), l("selection"), this.t.pan && t.config.chart.zoom.enabled && r.push({ el: this.elPan, icon: typeof this.t.pan == "string" ? this.t.pan : `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
    <defs>
        <path d="M0 0h24v24H0z" id="a"/>
    </defs>
    <clipPath id="b">
        <use overflow="visible" xlink:href="#a"/>
    </clipPath>
    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>
</svg>`, title: this.localeValues.pan, class: t.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-pan-icon" }), o("reset", this.elZoomReset, `<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>`), this.t.download && r.push({ el: this.elMenuIcon, icon: typeof this.t.download == "string" ? this.t.download : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>', title: this.localeValues.menu, class: "apexcharts-menu-icon" });
    for (var c = 0; c < this.elCustomIcons.length; c++) r.push({ el: this.elCustomIcons[c], icon: this.t.customIcons[c].icon, title: this.t.customIcons[c].title, index: this.t.customIcons[c].index, class: "apexcharts-toolbar-custom-icon " + this.t.customIcons[c].class });
    r.forEach(function(d, u) {
      d.index && _.moveIndexInArray(r, u, d.index);
    });
    for (var h = 0; h < r.length; h++) W.setAttrs(r[h].el, { class: r[h].class, title: r[h].title }), r[h].el.innerHTML = r[h].icon, s.appendChild(r[h].el);
    this._createHamburgerMenu(s), t.globals.zoomEnabled ? this.elZoom.classList.add(this.selectedClass) : t.globals.panEnabled ? this.elPan.classList.add(this.selectedClass) : t.globals.selectionEnabled && this.elSelection.classList.add(this.selectedClass), this.addToolbarEventListeners();
  } }, { key: "_createHamburgerMenu", value: function(e) {
    this.elMenuItems = [], e.appendChild(this.elMenu), W.setAttrs(this.elMenu, { class: "apexcharts-menu" });
    for (var t = [{ name: "exportSVG", title: this.localeValues.exportToSVG }, { name: "exportPNG", title: this.localeValues.exportToPNG }, { name: "exportCSV", title: this.localeValues.exportToCSV }], i = 0; i < t.length; i++) this.elMenuItems.push(document.createElement("div")), this.elMenuItems[i].innerHTML = t[i].title, W.setAttrs(this.elMenuItems[i], { class: "apexcharts-menu-item ".concat(t[i].name), title: t[i].title }), this.elMenu.appendChild(this.elMenuItems[i]);
  } }, { key: "addToolbarEventListeners", value: function() {
    var e = this;
    this.elZoomReset.addEventListener("click", this.handleZoomReset.bind(this)), this.elSelection.addEventListener("click", this.toggleZoomSelection.bind(this, "selection")), this.elZoom.addEventListener("click", this.toggleZoomSelection.bind(this, "zoom")), this.elZoomIn.addEventListener("click", this.handleZoomIn.bind(this)), this.elZoomOut.addEventListener("click", this.handleZoomOut.bind(this)), this.elPan.addEventListener("click", this.togglePanning.bind(this)), this.elMenuIcon.addEventListener("click", this.toggleMenu.bind(this)), this.elMenuItems.forEach(function(i) {
      i.classList.contains("exportSVG") ? i.addEventListener("click", e.handleDownload.bind(e, "svg")) : i.classList.contains("exportPNG") ? i.addEventListener("click", e.handleDownload.bind(e, "png")) : i.classList.contains("exportCSV") && i.addEventListener("click", e.handleDownload.bind(e, "csv"));
    });
    for (var t = 0; t < this.t.customIcons.length; t++) this.elCustomIcons[t].addEventListener("click", this.t.customIcons[t].click.bind(this, this.ctx, this.ctx.w));
  } }, { key: "toggleZoomSelection", value: function(e) {
    this.ctx.getSyncedCharts().forEach(function(t) {
      t.ctx.toolbar.toggleOtherControls();
      var i = e === "selection" ? t.ctx.toolbar.elSelection : t.ctx.toolbar.elZoom, s = e === "selection" ? "selectionEnabled" : "zoomEnabled";
      t.w.globals[s] = !t.w.globals[s], i.classList.contains(t.ctx.toolbar.selectedClass) ? i.classList.remove(t.ctx.toolbar.selectedClass) : i.classList.add(t.ctx.toolbar.selectedClass);
    });
  } }, { key: "getToolbarIconsReference", value: function() {
    var e = this.w;
    this.elZoom || (this.elZoom = e.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")), this.elPan || (this.elPan = e.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")), this.elSelection || (this.elSelection = e.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"));
  } }, { key: "enableZoomPanFromToolbar", value: function(e) {
    this.toggleOtherControls(), e === "pan" ? this.w.globals.panEnabled = !0 : this.w.globals.zoomEnabled = !0;
    var t = e === "pan" ? this.elPan : this.elZoom, i = e === "pan" ? this.elZoom : this.elPan;
    t && t.classList.add(this.selectedClass), i && i.classList.remove(this.selectedClass);
  } }, { key: "togglePanning", value: function() {
    this.ctx.getSyncedCharts().forEach(function(e) {
      e.ctx.toolbar.toggleOtherControls(), e.w.globals.panEnabled = !e.w.globals.panEnabled, e.ctx.toolbar.elPan.classList.contains(e.ctx.toolbar.selectedClass) ? e.ctx.toolbar.elPan.classList.remove(e.ctx.toolbar.selectedClass) : e.ctx.toolbar.elPan.classList.add(e.ctx.toolbar.selectedClass);
    });
  } }, { key: "toggleOtherControls", value: function() {
    var e = this, t = this.w;
    t.globals.panEnabled = !1, t.globals.zoomEnabled = !1, t.globals.selectionEnabled = !1, this.getToolbarIconsReference(), [this.elPan, this.elSelection, this.elZoom].forEach(function(i) {
      i && i.classList.remove(e.selectedClass);
    });
  } }, { key: "handleZoomIn", value: function() {
    var e = this.w;
    e.globals.isRangeBar && (this.minX = e.globals.minY, this.maxX = e.globals.maxY);
    var t = (this.minX + this.maxX) / 2, i = (this.minX + t) / 2, s = (this.maxX + t) / 2, a = this._getNewMinXMaxX(i, s);
    e.globals.disableZoomIn || this.zoomUpdateOptions(a.minX, a.maxX);
  } }, { key: "handleZoomOut", value: function() {
    var e = this.w;
    if (e.globals.isRangeBar && (this.minX = e.globals.minY, this.maxX = e.globals.maxY), !(e.config.xaxis.type === "datetime" && new Date(this.minX).getUTCFullYear() < 1e3)) {
      var t = (this.minX + this.maxX) / 2, i = this.minX - (t - this.minX), s = this.maxX - (t - this.maxX), a = this._getNewMinXMaxX(i, s);
      e.globals.disableZoomOut || this.zoomUpdateOptions(a.minX, a.maxX);
    }
  } }, { key: "_getNewMinXMaxX", value: function(e, t) {
    var i = this.w.config.xaxis.convertedCatToNumeric;
    return { minX: i ? Math.floor(e) : e, maxX: i ? Math.floor(t) : t };
  } }, { key: "zoomUpdateOptions", value: function(e, t) {
    var i = this.w;
    if (e !== void 0 || t !== void 0) {
      if (!(i.config.xaxis.convertedCatToNumeric && (e < 1 && (e = 1, t = i.globals.dataPoints), t - e < 2))) {
        var s = { min: e, max: t }, a = this.getBeforeZoomRange(s);
        a && (s = a.xaxis);
        var r = { xaxis: s }, o = _.clone(i.globals.initialConfig.yaxis);
        i.config.chart.group || (r.yaxis = o), this.w.globals.zoomed = !0, this.ctx.updateHelpers._updateOptions(r, !1, this.w.config.chart.animations.dynamicAnimation.enabled), this.zoomCallback(s, o);
      }
    } else this.handleZoomReset();
  } }, { key: "zoomCallback", value: function(e, t) {
    typeof this.ev.zoomed == "function" && (this.ev.zoomed(this.ctx, { xaxis: e, yaxis: t }), this.ctx.events.fireEvent("zoomed", { xaxis: e, yaxis: t }));
  } }, { key: "getBeforeZoomRange", value: function(e, t) {
    var i = null;
    return typeof this.ev.beforeZoom == "function" && (i = this.ev.beforeZoom(this, { xaxis: e, yaxis: t })), i;
  } }, { key: "toggleMenu", value: function() {
    var e = this;
    window.setTimeout(function() {
      e.elMenu.classList.contains("apexcharts-menu-open") ? e.elMenu.classList.remove("apexcharts-menu-open") : e.elMenu.classList.add("apexcharts-menu-open");
    }, 0);
  } }, { key: "handleDownload", value: function(e) {
    var t = this.w, i = new oi(this.ctx);
    switch (e) {
      case "svg":
        i.exportToSVG(this.ctx);
        break;
      case "png":
        i.exportToPng(this.ctx);
        break;
      case "csv":
        i.exportToCSV({ series: t.config.series, columnDelimiter: t.config.chart.toolbar.export.csv.columnDelimiter });
    }
  } }, { key: "handleZoomReset", value: function(e) {
    this.ctx.getSyncedCharts().forEach(function(t) {
      var i = t.w;
      if (i.globals.lastXAxis.min = i.globals.initialConfig.xaxis.min, i.globals.lastXAxis.max = i.globals.initialConfig.xaxis.max, t.updateHelpers.revertDefaultAxisMinMax(), typeof i.config.chart.events.beforeResetZoom == "function") {
        var s = i.config.chart.events.beforeResetZoom(t, i);
        s && t.updateHelpers.revertDefaultAxisMinMax(s);
      }
      typeof i.config.chart.events.zoomed == "function" && t.ctx.toolbar.zoomCallback({ min: i.config.xaxis.min, max: i.config.xaxis.max }), i.globals.zoomed = !1;
      var a = t.ctx.series.emptyCollapsedSeries(_.clone(i.globals.initialSeries));
      t.updateHelpers._updateSeries(a, i.config.chart.animations.dynamicAnimation.enabled);
    });
  } }, { key: "destroy", value: function() {
    this.elZoom = null, this.elZoomIn = null, this.elZoomOut = null, this.elPan = null, this.elSelection = null, this.elZoomReset = null, this.elMenuIcon = null;
  } }]), n;
}(), bh = function(n) {
  mi(t, Vn);
  var e = xi(t);
  function t(i) {
    var s;
    return ee(this, t), (s = e.call(this, i)).ctx = i, s.w = i.w, s.dragged = !1, s.graphics = new W(s.ctx), s.eventList = ["mousedown", "mouseleave", "mousemove", "touchstart", "touchmove", "mouseup", "touchend", "wheel"], s.clientX = 0, s.clientY = 0, s.startX = 0, s.endX = 0, s.dragX = 0, s.startY = 0, s.endY = 0, s.dragY = 0, s.moveDirection = "none", s.debounceTimer = null, s.debounceDelay = 100, s.wheelDelay = 400, s;
  }
  return te(t, [{ key: "init", value: function(i) {
    var s = this, a = i.xyRatios, r = this.w, o = this;
    this.xyRatios = a, this.zoomRect = this.graphics.drawRect(0, 0, 0, 0), this.selectionRect = this.graphics.drawRect(0, 0, 0, 0), this.gridRect = r.globals.dom.baseEl.querySelector(".apexcharts-grid"), this.constraints = new Re(0, 0, r.globals.gridWidth, r.globals.gridHeight), this.zoomRect.node.classList.add("apexcharts-zoom-rect"), this.selectionRect.node.classList.add("apexcharts-selection-rect"), r.globals.dom.Paper.add(this.zoomRect), r.globals.dom.Paper.add(this.selectionRect), r.config.chart.selection.type === "x" ? this.slDraggableRect = this.selectionRect.draggable({ minX: 0, minY: 0, maxX: r.globals.gridWidth, maxY: r.globals.gridHeight }).on("dragmove.namespace", this.selectionDragging.bind(this, "dragging")) : r.config.chart.selection.type === "y" ? this.slDraggableRect = this.selectionRect.draggable({ minX: 0, maxX: r.globals.gridWidth }).on("dragmove.namespace", this.selectionDragging.bind(this, "dragging")) : this.slDraggableRect = this.selectionRect.draggable().on("dragmove.namespace", this.selectionDragging.bind(this, "dragging")), this.preselectedSelection(), this.hoverArea = r.globals.dom.baseEl.querySelector("".concat(r.globals.chartClass, " .apexcharts-svg")), this.hoverArea.classList.add("apexcharts-zoomable"), this.eventList.forEach(function(l) {
      s.hoverArea.addEventListener(l, o.svgMouseEvents.bind(o, a), { capture: !1, passive: !0 });
    }), r.config.chart.zoom.enabled && r.config.chart.zoom.allowMouseWheelZoom && this.hoverArea.addEventListener("wheel", o.mouseWheelEvent.bind(o), { capture: !1, passive: !1 });
  } }, { key: "destroy", value: function() {
    this.slDraggableRect && (this.slDraggableRect.draggable(!1), this.slDraggableRect.off(), this.selectionRect.off()), this.selectionRect = null, this.zoomRect = null, this.gridRect = null;
  } }, { key: "svgMouseEvents", value: function(i, s) {
    var a = this.w, r = this.ctx.toolbar, o = a.globals.zoomEnabled ? a.config.chart.zoom.type : a.config.chart.selection.type, l = a.config.chart.toolbar.autoSelected;
    if (s.shiftKey ? (this.shiftWasPressed = !0, r.enableZoomPanFromToolbar(l === "pan" ? "zoom" : "pan")) : this.shiftWasPressed && (r.enableZoomPanFromToolbar(l), this.shiftWasPressed = !1), s.target) {
      var c, h = s.target.classList;
      if (s.target.parentNode && s.target.parentNode !== null && (c = s.target.parentNode.classList), !(h.contains("apexcharts-legend-marker") || h.contains("apexcharts-legend-text") || c && c.contains("apexcharts-toolbar"))) {
        if (this.clientX = s.type === "touchmove" || s.type === "touchstart" ? s.touches[0].clientX : s.type === "touchend" ? s.changedTouches[0].clientX : s.clientX, this.clientY = s.type === "touchmove" || s.type === "touchstart" ? s.touches[0].clientY : s.type === "touchend" ? s.changedTouches[0].clientY : s.clientY, s.type === "mousedown" && s.which === 1 || s.type === "touchstart") {
          var d = this.gridRect.getBoundingClientRect();
          this.startX = this.clientX - d.left - a.globals.barPadForNumericAxis, this.startY = this.clientY - d.top, this.dragged = !1, this.w.globals.mousedown = !0;
        }
        (s.type === "mousemove" && s.which === 1 || s.type === "touchmove") && (this.dragged = !0, a.globals.panEnabled ? (a.globals.selection = null, this.w.globals.mousedown && this.panDragging({ context: this, zoomtype: o, xyRatios: i })) : (this.w.globals.mousedown && a.globals.zoomEnabled || this.w.globals.mousedown && a.globals.selectionEnabled) && (this.selection = this.selectionDrawing({ context: this, zoomtype: o }))), s.type !== "mouseup" && s.type !== "touchend" && s.type !== "mouseleave" || this.handleMouseUp({ zoomtype: o }), this.makeSelectionRectDraggable();
      }
    }
  } }, { key: "handleMouseUp", value: function(i) {
    var s, a = i.zoomtype, r = i.isResized, o = this.w, l = (s = this.gridRect) === null || s === void 0 ? void 0 : s.getBoundingClientRect();
    l && (this.w.globals.mousedown || r) && (this.endX = this.clientX - l.left - o.globals.barPadForNumericAxis, this.endY = this.clientY - l.top, this.dragX = Math.abs(this.endX - this.startX), this.dragY = Math.abs(this.endY - this.startY), (o.globals.zoomEnabled || o.globals.selectionEnabled) && this.selectionDrawn({ context: this, zoomtype: a })), o.globals.zoomEnabled && this.hideSelectionRect(this.selectionRect), this.dragged = !1, this.w.globals.mousedown = !1;
  } }, { key: "mouseWheelEvent", value: function(i) {
    var s = this, a = this.w;
    i.preventDefault();
    var r = Date.now();
    r - a.globals.lastWheelExecution > this.wheelDelay && (this.executeMouseWheelZoom(i), a.globals.lastWheelExecution = r), this.debounceTimer && clearTimeout(this.debounceTimer), this.debounceTimer = setTimeout(function() {
      r - a.globals.lastWheelExecution > s.wheelDelay && (s.executeMouseWheelZoom(i), a.globals.lastWheelExecution = r);
    }, this.debounceDelay);
  } }, { key: "executeMouseWheelZoom", value: function(i) {
    var s, a = this.w;
    this.minX = a.globals.isRangeBar ? a.globals.minY : a.globals.minX, this.maxX = a.globals.isRangeBar ? a.globals.maxY : a.globals.maxX;
    var r = (s = this.gridRect) === null || s === void 0 ? void 0 : s.getBoundingClientRect();
    if (r) {
      var o, l, c, h = (i.clientX - r.left) / r.width, d = this.minX, u = this.maxX, g = u - d;
      if (i.deltaY < 0) {
        var p = d + h * g;
        l = p - (o = 0.5 * g) / 2, c = p + o / 2;
      } else l = d - (o = 1.5 * g) / 2, c = u + o / 2;
      if (!a.globals.isRangeBar) {
        l = Math.max(l, a.globals.initialMinX), c = Math.min(c, a.globals.initialMaxX);
        var f = 0.01 * (a.globals.initialMaxX - a.globals.initialMinX);
        if (c - l < f) {
          var x = (l + c) / 2;
          l = x - f / 2, c = x + f / 2;
        }
      }
      var m = this._getNewMinXMaxX(l, c);
      isNaN(m.minX) || isNaN(m.maxX) || this.zoomUpdateOptions(m.minX, m.maxX);
    }
  } }, { key: "makeSelectionRectDraggable", value: function() {
    var i = this, s = this.w;
    if (this.selectionRect) {
      var a = this.selectionRect.node.getBoundingClientRect();
      a.width > 0 && a.height > 0 && (this.selectionRect.select(!1).resize(!1), this.selectionRect.select({ createRot: function() {
      }, updateRot: function() {
      }, createHandle: function(r, o, l, c, h) {
        return h === "l" || h === "r" ? r.circle(8).css({ "stroke-width": 1, stroke: "#333", fill: "#fff" }) : r.circle(0);
      }, updateHandle: function(r, o) {
        return r.center(o[0], o[1]);
      } }).resize().on("resize", function() {
        var r = s.globals.zoomEnabled ? s.config.chart.zoom.type : s.config.chart.selection.type;
        i.handleMouseUp({ zoomtype: r, isResized: !0 });
      }));
    }
  } }, { key: "preselectedSelection", value: function() {
    var i = this.w, s = this.xyRatios;
    if (!i.globals.zoomEnabled) {
      if (i.globals.selection !== void 0 && i.globals.selection !== null) this.drawSelectionRect(q(q({}, i.globals.selection), {}, { translateX: i.globals.translateX, translateY: i.globals.translateY }));
      else if (i.config.chart.selection.xaxis.min !== void 0 && i.config.chart.selection.xaxis.max !== void 0) {
        var a = (i.config.chart.selection.xaxis.min - i.globals.minX) / s.xRatio, r = i.globals.gridWidth - (i.globals.maxX - i.config.chart.selection.xaxis.max) / s.xRatio - a;
        i.globals.isRangeBar && (a = (i.config.chart.selection.xaxis.min - i.globals.yAxisScale[0].niceMin) / s.invertedYRatio, r = (i.config.chart.selection.xaxis.max - i.config.chart.selection.xaxis.min) / s.invertedYRatio);
        var o = { x: a, y: 0, width: r, height: i.globals.gridHeight, translateX: i.globals.translateX, translateY: i.globals.translateY, selectionEnabled: !0 };
        this.drawSelectionRect(o), this.makeSelectionRectDraggable(), typeof i.config.chart.events.selection == "function" && i.config.chart.events.selection(this.ctx, { xaxis: { min: i.config.chart.selection.xaxis.min, max: i.config.chart.selection.xaxis.max }, yaxis: {} });
      }
    }
  } }, { key: "drawSelectionRect", value: function(i) {
    var s = i.x, a = i.y, r = i.width, o = i.height, l = i.translateX, c = l === void 0 ? 0 : l, h = i.translateY, d = h === void 0 ? 0 : h, u = this.w, g = this.zoomRect, p = this.selectionRect;
    if (this.dragged || u.globals.selection !== null) {
      var f = { transform: "translate(" + c + ", " + d + ")" };
      u.globals.zoomEnabled && this.dragged && (r < 0 && (r = 1), g.attr({ x: s, y: a, width: r, height: o, fill: u.config.chart.zoom.zoomedArea.fill.color, "fill-opacity": u.config.chart.zoom.zoomedArea.fill.opacity, stroke: u.config.chart.zoom.zoomedArea.stroke.color, "stroke-width": u.config.chart.zoom.zoomedArea.stroke.width, "stroke-opacity": u.config.chart.zoom.zoomedArea.stroke.opacity }), W.setAttrs(g.node, f)), u.globals.selectionEnabled && (p.attr({ x: s, y: a, width: r > 0 ? r : 0, height: o > 0 ? o : 0, fill: u.config.chart.selection.fill.color, "fill-opacity": u.config.chart.selection.fill.opacity, stroke: u.config.chart.selection.stroke.color, "stroke-width": u.config.chart.selection.stroke.width, "stroke-dasharray": u.config.chart.selection.stroke.dashArray, "stroke-opacity": u.config.chart.selection.stroke.opacity }), W.setAttrs(p.node, f));
    }
  } }, { key: "hideSelectionRect", value: function(i) {
    i && i.attr({ x: 0, y: 0, width: 0, height: 0 });
  } }, { key: "selectionDrawing", value: function(i) {
    var s = i.context, a = i.zoomtype, r = this.w, o = s, l = this.gridRect.getBoundingClientRect(), c = o.startX - 1, h = o.startY, d = !1, u = !1, g = o.clientX - l.left - r.globals.barPadForNumericAxis, p = o.clientY - l.top, f = g - c, x = p - h, m = { translateX: r.globals.translateX, translateY: r.globals.translateY };
    return Math.abs(f + c) > r.globals.gridWidth ? f = r.globals.gridWidth - c : g < 0 && (f = c), c > g && (d = !0, f = Math.abs(f)), h > p && (u = !0, x = Math.abs(x)), m = q(q({}, m = a === "x" ? { x: d ? c - f : c, y: 0, width: f, height: r.globals.gridHeight } : a === "y" ? { x: 0, y: u ? h - x : h, width: r.globals.gridWidth, height: x } : { x: d ? c - f : c, y: u ? h - x : h, width: f, height: x }), {}, { translateX: r.globals.translateX, translateY: r.globals.translateY }), o.drawSelectionRect(m), o.selectionDragging("resizing"), m;
  } }, { key: "selectionDragging", value: function(i, s) {
    var a = this, r = this.w;
    if (s) {
      s.preventDefault();
      var o = s.detail, l = o.handler, c = o.box, h = c.x, d = c.y;
      h < this.constraints.x && (h = this.constraints.x), d < this.constraints.y && (d = this.constraints.y), c.x2 > this.constraints.x2 && (h = this.constraints.x2 - c.w), c.y2 > this.constraints.y2 && (d = this.constraints.y2 - c.h), l.move(h, d);
      var u = this.xyRatios, g = this.selectionRect, p = 0;
      i === "resizing" && (p = 30);
      var f = function(m) {
        return parseFloat(g.node.getAttribute(m));
      }, x = { x: f("x"), y: f("y"), width: f("width"), height: f("height") };
      r.globals.selection = x, typeof r.config.chart.events.selection == "function" && r.globals.selectionEnabled && (clearTimeout(this.w.globals.selectionResizeTimer), this.w.globals.selectionResizeTimer = window.setTimeout(function() {
        var m, b, w, y, v = a.gridRect.getBoundingClientRect(), k = g.node.getBoundingClientRect();
        r.globals.isRangeBar ? (m = r.globals.yAxisScale[0].niceMin + (k.left - v.left) * u.invertedYRatio, b = r.globals.yAxisScale[0].niceMin + (k.right - v.left) * u.invertedYRatio, w = 0, y = 1) : (m = r.globals.xAxisScale.niceMin + (k.left - v.left) * u.xRatio, b = r.globals.xAxisScale.niceMin + (k.right - v.left) * u.xRatio, w = r.globals.yAxisScale[0].niceMin + (v.bottom - k.bottom) * u.yRatio[0], y = r.globals.yAxisScale[0].niceMax - (k.top - v.top) * u.yRatio[0]);
        var A = { xaxis: { min: m, max: b }, yaxis: { min: w, max: y } };
        r.config.chart.events.selection(a.ctx, A), r.config.chart.brush.enabled && r.config.chart.events.brushScrolled !== void 0 && r.config.chart.events.brushScrolled(a.ctx, A);
      }, p));
    }
  } }, { key: "selectionDrawn", value: function(i) {
    var s, a, r = i.context, o = i.zoomtype, l = this.w, c = r, h = this.xyRatios, d = this.ctx.toolbar, u = l.globals.zoomEnabled ? c.zoomRect.node.getBoundingClientRect() : c.selectionRect.node.getBoundingClientRect(), g = c.gridRect.getBoundingClientRect(), p = u.left - g.left - l.globals.barPadForNumericAxis, f = u.right - g.left - l.globals.barPadForNumericAxis, x = u.top - g.top, m = u.bottom - g.top;
    l.globals.isRangeBar ? (s = l.globals.yAxisScale[0].niceMin + p * h.invertedYRatio, a = l.globals.yAxisScale[0].niceMin + f * h.invertedYRatio) : (s = l.globals.xAxisScale.niceMin + p * h.xRatio, a = l.globals.xAxisScale.niceMin + f * h.xRatio);
    var b = [], w = [];
    if (l.config.yaxis.forEach(function(L, P) {
      var R = l.globals.seriesYAxisMap[P][0], I = l.globals.yAxisScale[P].niceMax - h.yRatio[R] * x, T = l.globals.yAxisScale[P].niceMax - h.yRatio[R] * m;
      b.push(I), w.push(T);
    }), c.dragged && (c.dragX > 10 || c.dragY > 10) && s !== a) {
      if (l.globals.zoomEnabled) {
        var y = _.clone(l.globals.initialConfig.yaxis), v = _.clone(l.globals.initialConfig.xaxis);
        if (l.globals.zoomed = !0, l.config.xaxis.convertedCatToNumeric && (s = Math.floor(s), a = Math.floor(a), s < 1 && (s = 1, a = l.globals.dataPoints), a - s < 2 && (a = s + 1)), o !== "xy" && o !== "x" || (v = { min: s, max: a }), o !== "xy" && o !== "y" || y.forEach(function(L, P) {
          y[P].min = w[P], y[P].max = b[P];
        }), d) {
          var k = d.getBeforeZoomRange(v, y);
          k && (v = k.xaxis ? k.xaxis : v, y = k.yaxis ? k.yaxis : y);
        }
        var A = { xaxis: v };
        l.config.chart.group || (A.yaxis = y), c.ctx.updateHelpers._updateOptions(A, !1, c.w.config.chart.animations.dynamicAnimation.enabled), typeof l.config.chart.events.zoomed == "function" && d.zoomCallback(v, y);
      } else if (l.globals.selectionEnabled) {
        var S, C = null;
        S = { min: s, max: a }, o !== "xy" && o !== "y" || (C = _.clone(l.config.yaxis)).forEach(function(L, P) {
          C[P].min = w[P], C[P].max = b[P];
        }), l.globals.selection = c.selection, typeof l.config.chart.events.selection == "function" && l.config.chart.events.selection(c.ctx, { xaxis: S, yaxis: C });
      }
    }
  } }, { key: "panDragging", value: function(i) {
    var s = i.context, a = this.w, r = s;
    if (a.globals.lastClientPosition.x !== void 0) {
      var o = a.globals.lastClientPosition.x - r.clientX, l = a.globals.lastClientPosition.y - r.clientY;
      Math.abs(o) > Math.abs(l) && o > 0 ? this.moveDirection = "left" : Math.abs(o) > Math.abs(l) && o < 0 ? this.moveDirection = "right" : Math.abs(l) > Math.abs(o) && l > 0 ? this.moveDirection = "up" : Math.abs(l) > Math.abs(o) && l < 0 && (this.moveDirection = "down");
    }
    a.globals.lastClientPosition = { x: r.clientX, y: r.clientY };
    var c = a.globals.isRangeBar ? a.globals.minY : a.globals.minX, h = a.globals.isRangeBar ? a.globals.maxY : a.globals.maxX;
    r.panScrolled(c, h);
  } }, { key: "panScrolled", value: function(i, s) {
    var a = this.w, r = this.xyRatios, o = _.clone(a.globals.initialConfig.yaxis), l = r.xRatio, c = a.globals.minX, h = a.globals.maxX;
    a.globals.isRangeBar && (l = r.invertedYRatio, c = a.globals.minY, h = a.globals.maxY), this.moveDirection === "left" ? (i = c + a.globals.gridWidth / 15 * l, s = h + a.globals.gridWidth / 15 * l) : this.moveDirection === "right" && (i = c - a.globals.gridWidth / 15 * l, s = h - a.globals.gridWidth / 15 * l), a.globals.isRangeBar || (i < a.globals.initialMinX || s > a.globals.initialMaxX) && (i = c, s = h);
    var d = { xaxis: { min: i, max: s } };
    a.config.chart.group || (d.yaxis = o), this.updateScrolledChart(d, i, s);
  } }, { key: "updateScrolledChart", value: function(i, s, a) {
    var r = this.w;
    if (this.ctx.updateHelpers._updateOptions(i, !1, !1), typeof r.config.chart.events.scrolled == "function") {
      var o = { xaxis: { min: s, max: a } };
      r.config.chart.events.scrolled(this.ctx, o), this.ctx.events.fireEvent("scrolled", o);
    }
  } }]), t;
}(), $n = function() {
  function n(e) {
    ee(this, n), this.w = e.w, this.ttCtx = e, this.ctx = e.ctx;
  }
  return te(n, [{ key: "getNearestValues", value: function(e) {
    var t = e.hoverArea, i = e.elGrid, s = e.clientX, a = e.clientY, r = this.w, o = i.getBoundingClientRect(), l = o.width, c = o.height, h = l / (r.globals.dataPoints - 1), d = c / r.globals.dataPoints, u = this.hasBars();
    !r.globals.comboCharts && !u || r.config.xaxis.convertedCatToNumeric || (h = l / r.globals.dataPoints);
    var g = s - o.left - r.globals.barPadForNumericAxis, p = a - o.top;
    g < 0 || p < 0 || g > l || p > c ? (t.classList.remove("hovering-zoom"), t.classList.remove("hovering-pan")) : r.globals.zoomEnabled ? (t.classList.remove("hovering-pan"), t.classList.add("hovering-zoom")) : r.globals.panEnabled && (t.classList.remove("hovering-zoom"), t.classList.add("hovering-pan"));
    var f = Math.round(g / h), x = Math.floor(p / d);
    u && !r.config.xaxis.convertedCatToNumeric && (f = Math.ceil(g / h), f -= 1);
    var m = null, b = null, w = r.globals.seriesXvalues.map(function(S) {
      return S.filter(function(C) {
        return _.isNumber(C);
      });
    }), y = r.globals.seriesYvalues.map(function(S) {
      return S.filter(function(C) {
        return _.isNumber(C);
      });
    });
    if (r.globals.isXNumeric) {
      var v = this.ttCtx.getElGrid().getBoundingClientRect(), k = g * (v.width / l), A = p * (v.height / c);
      m = (b = this.closestInMultiArray(k, A, w, y)).index, f = b.j, m !== null && r.globals.hasNullValues && (w = r.globals.seriesXvalues[m], f = (b = this.closestInArray(k, w)).j);
    }
    return r.globals.capturedSeriesIndex = m === null ? -1 : m, (!f || f < 1) && (f = 0), r.globals.isBarHorizontal ? r.globals.capturedDataPointIndex = x : r.globals.capturedDataPointIndex = f, { capturedSeries: m, j: r.globals.isBarHorizontal ? x : f, hoverX: g, hoverY: p };
  } }, { key: "getFirstActiveXArray", value: function(e) {
    for (var t = this.w, i = 0, s = e.map(function(r, o) {
      return r.length > 0 ? o : -1;
    }), a = 0; a < s.length; a++) if (s[a] !== -1 && t.globals.collapsedSeriesIndices.indexOf(a) === -1 && t.globals.ancillaryCollapsedSeriesIndices.indexOf(a) === -1) {
      i = s[a];
      break;
    }
    return i;
  } }, { key: "closestInMultiArray", value: function(e, t, i, s) {
    for (var a, r = this.w, o = 1 / 0, l = null, c = null, h = 0; h < i.length; h++) if (a = h, r.globals.collapsedSeriesIndices.indexOf(a) === -1 && r.globals.ancillaryCollapsedSeriesIndices.indexOf(a) === -1) for (var d = i[h], u = s[h], g = Math.min(d.length, u.length), p = 0; p < g; p++) {
      var f = e - d[p], x = Math.sqrt(f * f);
      if (!r.globals.allSeriesHasEqualX) {
        var m = t - u[p];
        x = Math.sqrt(f * f + m * m);
      }
      x < o && (o = x, l = h, c = p);
    }
    return { index: l, j: c };
  } }, { key: "closestInArray", value: function(e, t) {
    for (var i = t[0], s = null, a = Math.abs(e - i), r = 0; r < t.length; r++) {
      var o = Math.abs(e - t[r]);
      o < a && (a = o, s = r);
    }
    return { j: s };
  } }, { key: "isXoverlap", value: function(e) {
    var t = [], i = this.w.globals.seriesX.filter(function(a) {
      return a[0] !== void 0;
    });
    if (i.length > 0) for (var s = 0; s < i.length - 1; s++) i[s][e] !== void 0 && i[s + 1][e] !== void 0 && i[s][e] !== i[s + 1][e] && t.push("unEqual");
    return t.length === 0;
  } }, { key: "isInitialSeriesSameLen", value: function() {
    for (var e = !0, t = this.w.globals.initialSeries, i = 0; i < t.length - 1; i++) if (t[i].data.length !== t[i + 1].data.length) {
      e = !1;
      break;
    }
    return e;
  } }, { key: "getBarsHeight", value: function(e) {
    return _e(e).reduce(function(t, i) {
      return t + i.getBBox().height;
    }, 0);
  } }, { key: "getElMarkers", value: function(e) {
    return typeof e == "number" ? this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:realIndex='".concat(e, "'] .apexcharts-series-markers-wrap > *")) : this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap > *");
  } }, { key: "getAllMarkers", value: function() {
    var e = this, t = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], i = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap");
    i = _e(i), t && (i = i.filter(function(a) {
      var r = Number(a.getAttribute("data:realIndex"));
      return e.w.globals.collapsedSeriesIndices.indexOf(r) === -1;
    })), i.sort(function(a, r) {
      var o = Number(a.getAttribute("data:realIndex")), l = Number(r.getAttribute("data:realIndex"));
      return l < o ? 1 : l > o ? -1 : 0;
    });
    var s = [];
    return i.forEach(function(a) {
      s.push(a.querySelector(".apexcharts-marker"));
    }), s;
  } }, { key: "hasMarkers", value: function(e) {
    return this.getElMarkers(e).length > 0;
  } }, { key: "getPathFromPoint", value: function(e, t) {
    var i = Number(e.getAttribute("cx")), s = Number(e.getAttribute("cy")), a = e.getAttribute("shape");
    return new W(this.ctx).getMarkerPath(i, s, a, t);
  } }, { key: "getElBars", value: function() {
    return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-rangebar-series");
  } }, { key: "hasBars", value: function() {
    return this.getElBars().length > 0;
  } }, { key: "getHoverMarkerSize", value: function(e) {
    var t = this.w, i = t.config.markers.hover.size;
    return i === void 0 && (i = t.globals.markers.size[e] + t.config.markers.hover.sizeOffset), i;
  } }, { key: "toggleAllTooltipSeriesGroups", value: function(e) {
    var t = this.w, i = this.ttCtx;
    i.allTooltipSeriesGroups.length === 0 && (i.allTooltipSeriesGroups = t.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));
    for (var s = i.allTooltipSeriesGroups, a = 0; a < s.length; a++) e === "enable" ? (s[a].classList.add("apexcharts-active"), s[a].style.display = t.config.tooltip.items.display) : (s[a].classList.remove("apexcharts-active"), s[a].style.display = "none");
  } }]), n;
}(), vh = function() {
  function n(e) {
    ee(this, n), this.w = e.w, this.ctx = e.ctx, this.ttCtx = e, this.tooltipUtil = new $n(e);
  }
  return te(n, [{ key: "drawSeriesTexts", value: function(e) {
    var t = e.shared, i = t === void 0 || t, s = e.ttItems, a = e.i, r = a === void 0 ? 0 : a, o = e.j, l = o === void 0 ? null : o, c = e.y1, h = e.y2, d = e.e, u = this.w;
    u.config.tooltip.custom !== void 0 ? this.handleCustomTooltip({ i: r, j: l, y1: c, y2: h, w: u }) : this.toggleActiveInactiveSeries(i, r);
    var g = this.getValuesToPrint({ i: r, j: l });
    this.printLabels({ i: r, j: l, values: g, ttItems: s, shared: i, e: d });
    var p = this.ttCtx.getElTooltip();
    this.ttCtx.tooltipRect.ttWidth = p.getBoundingClientRect().width, this.ttCtx.tooltipRect.ttHeight = p.getBoundingClientRect().height;
  } }, { key: "printLabels", value: function(e) {
    var t, i = this, s = e.i, a = e.j, r = e.values, o = e.ttItems, l = e.shared, c = e.e, h = this.w, d = [], u = function(v) {
      return h.globals.seriesGoals[v] && h.globals.seriesGoals[v][a] && Array.isArray(h.globals.seriesGoals[v][a]);
    }, g = r.xVal, p = r.zVal, f = r.xAxisTTVal, x = "", m = h.globals.colors[s];
    a !== null && h.config.plotOptions.bar.distributed && (m = h.globals.colors[a]);
    for (var b = function(v, k) {
      var A = i.getFormatters(s);
      x = i.getSeriesName({ fn: A.yLbTitleFormatter, index: s, seriesIndex: s, j: a }), h.config.chart.type === "treemap" && (x = A.yLbTitleFormatter(String(h.config.series[s].data[a].x), { series: h.globals.series, seriesIndex: s, dataPointIndex: a, w: h }));
      var S = h.config.tooltip.inverseOrder ? k : v;
      if (h.globals.axisCharts) {
        var C = function(R) {
          var I, T, O, N;
          return h.globals.isRangeData ? A.yLbFormatter((I = h.globals.seriesRangeStart) === null || I === void 0 || (T = I[R]) === null || T === void 0 ? void 0 : T[a], { series: h.globals.seriesRangeStart, seriesIndex: R, dataPointIndex: a, w: h }) + " - " + A.yLbFormatter((O = h.globals.seriesRangeEnd) === null || O === void 0 || (N = O[R]) === null || N === void 0 ? void 0 : N[a], { series: h.globals.seriesRangeEnd, seriesIndex: R, dataPointIndex: a, w: h }) : A.yLbFormatter(h.globals.series[R][a], { series: h.globals.series, seriesIndex: R, dataPointIndex: a, w: h });
        };
        if (l) A = i.getFormatters(S), x = i.getSeriesName({ fn: A.yLbTitleFormatter, index: S, seriesIndex: s, j: a }), m = h.globals.colors[S], t = C(S), u(S) && (d = h.globals.seriesGoals[S][a].map(function(R) {
          return { attrs: R, val: A.yLbFormatter(R.value, { seriesIndex: S, dataPointIndex: a, w: h }) };
        }));
        else {
          var L, P = c == null || (L = c.target) === null || L === void 0 ? void 0 : L.getAttribute("fill");
          P && (P.indexOf("url") !== -1 ? P.indexOf("Pattern") !== -1 && (m = h.globals.dom.baseEl.querySelector(P.substr(4).slice(0, -1)).childNodes[0].getAttribute("stroke")) : m = P), t = C(s), u(s) && Array.isArray(h.globals.seriesGoals[s][a]) && (d = h.globals.seriesGoals[s][a].map(function(R) {
            return { attrs: R, val: A.yLbFormatter(R.value, { seriesIndex: s, dataPointIndex: a, w: h }) };
          }));
        }
      }
      a === null && (t = A.yLbFormatter(h.globals.series[s], q(q({}, h), {}, { seriesIndex: s, dataPointIndex: s }))), i.DOMHandling({ i: s, t: S, j: a, ttItems: o, values: { val: t, goalVals: d, xVal: g, xAxisTTVal: f, zVal: p }, seriesName: x, shared: l, pColor: m });
    }, w = 0, y = h.globals.series.length - 1; w < h.globals.series.length; w++, y--) b(w, y);
  } }, { key: "getFormatters", value: function(e) {
    var t, i = this.w, s = i.globals.yLabelFormatters[e];
    return i.globals.ttVal !== void 0 ? Array.isArray(i.globals.ttVal) ? (s = i.globals.ttVal[e] && i.globals.ttVal[e].formatter, t = i.globals.ttVal[e] && i.globals.ttVal[e].title && i.globals.ttVal[e].title.formatter) : (s = i.globals.ttVal.formatter, typeof i.globals.ttVal.title.formatter == "function" && (t = i.globals.ttVal.title.formatter)) : t = i.config.tooltip.y.title.formatter, typeof s != "function" && (s = i.globals.yLabelFormatters[0] ? i.globals.yLabelFormatters[0] : function(a) {
      return a;
    }), typeof t != "function" && (t = function(a) {
      return a ? a + ": " : "";
    }), { yLbFormatter: s, yLbTitleFormatter: t };
  } }, { key: "getSeriesName", value: function(e) {
    var t = e.fn, i = e.index, s = e.seriesIndex, a = e.j, r = this.w;
    return t(String(r.globals.seriesNames[i]), { series: r.globals.series, seriesIndex: s, dataPointIndex: a, w: r });
  } }, { key: "DOMHandling", value: function(e) {
    e.i;
    var t = e.t, i = e.j, s = e.ttItems, a = e.values, r = e.seriesName, o = e.shared, l = e.pColor, c = this.w, h = this.ttCtx, d = a.val, u = a.goalVals, g = a.xVal, p = a.xAxisTTVal, f = a.zVal, x = null;
    x = s[t].children, c.config.tooltip.fillSeriesColor && (s[t].style.backgroundColor = l, x[0].style.display = "none"), h.showTooltipTitle && (h.tooltipTitle === null && (h.tooltipTitle = c.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")), h.tooltipTitle.innerHTML = g), h.isXAxisTooltipEnabled && (h.xaxisTooltipText.innerHTML = p !== "" ? p : g);
    var m = s[t].querySelector(".apexcharts-tooltip-text-y-label");
    m && (m.innerHTML = r || "");
    var b = s[t].querySelector(".apexcharts-tooltip-text-y-value");
    b && (b.innerHTML = d !== void 0 ? d : ""), x[0] && x[0].classList.contains("apexcharts-tooltip-marker") && (c.config.tooltip.marker.fillColors && Array.isArray(c.config.tooltip.marker.fillColors) && (l = c.config.tooltip.marker.fillColors[t]), c.config.tooltip.fillSeriesColor ? x[0].style.backgroundColor = l : x[0].style.color = l), c.config.tooltip.marker.show || (x[0].style.display = "none");
    var w = s[t].querySelector(".apexcharts-tooltip-text-goals-label"), y = s[t].querySelector(".apexcharts-tooltip-text-goals-value");
    if (u.length && c.globals.seriesGoals[t]) {
      var v = function() {
        var S = "<div>", C = "<div>";
        u.forEach(function(L, P) {
          S += ' <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: '.concat(L.attrs.strokeColor, '; height: 3px; border-radius: 0; top: 5px;"></span> ').concat(L.attrs.name, "</div>"), C += "<div>".concat(L.val, "</div>");
        }), w.innerHTML = S + "</div>", y.innerHTML = C + "</div>";
      };
      o ? c.globals.seriesGoals[t][i] && Array.isArray(c.globals.seriesGoals[t][i]) ? v() : (w.innerHTML = "", y.innerHTML = "") : v();
    } else w.innerHTML = "", y.innerHTML = "";
    if (f !== null && (s[t].querySelector(".apexcharts-tooltip-text-z-label").innerHTML = c.config.tooltip.z.title, s[t].querySelector(".apexcharts-tooltip-text-z-value").innerHTML = f !== void 0 ? f : ""), o && x[0]) {
      if (c.config.tooltip.hideEmptySeries) {
        var k = s[t].querySelector(".apexcharts-tooltip-marker"), A = s[t].querySelector(".apexcharts-tooltip-text");
        parseFloat(d) == 0 ? (k.style.display = "none", A.style.display = "none") : (k.style.display = "block", A.style.display = "block");
      }
      d == null || c.globals.ancillaryCollapsedSeriesIndices.indexOf(t) > -1 || c.globals.collapsedSeriesIndices.indexOf(t) > -1 || Array.isArray(h.tConfig.enabledOnSeries) && h.tConfig.enabledOnSeries.indexOf(t) === -1 ? x[0].parentNode.style.display = "none" : x[0].parentNode.style.display = c.config.tooltip.items.display;
    } else Array.isArray(h.tConfig.enabledOnSeries) && h.tConfig.enabledOnSeries.indexOf(t) === -1 && (x[0].parentNode.style.display = "none");
  } }, { key: "toggleActiveInactiveSeries", value: function(e, t) {
    var i = this.w;
    if (e) this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");
    else {
      this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");
      var s = i.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group-".concat(t));
      s && (s.classList.add("apexcharts-active"), s.style.display = i.config.tooltip.items.display);
    }
  } }, { key: "getValuesToPrint", value: function(e) {
    var t = e.i, i = e.j, s = this.w, a = this.ctx.series.filteredSeriesX(), r = "", o = "", l = null, c = null, h = { series: s.globals.series, seriesIndex: t, dataPointIndex: i, w: s }, d = s.globals.ttZFormatter;
    i === null ? c = s.globals.series[t] : s.globals.isXNumeric && s.config.chart.type !== "treemap" ? (r = a[t][i], a[t].length === 0 && (r = a[this.tooltipUtil.getFirstActiveXArray(a)][i])) : r = new Aa(this.ctx).isFormatXY() ? s.config.series[t].data[i] !== void 0 ? s.config.series[t].data[i].x : "" : s.globals.labels[i] !== void 0 ? s.globals.labels[i] : "";
    var u = r;
    return s.globals.isXNumeric && s.config.xaxis.type === "datetime" ? r = new wi(this.ctx).xLabelFormat(s.globals.ttKeyFormatter, u, u, { i: void 0, dateFormatter: new Ye(this.ctx).formatDate, w: this.w }) : r = s.globals.isBarHorizontal ? s.globals.yLabelFormatters[0](u, h) : s.globals.xLabelFormatter(u, h), s.config.tooltip.x.formatter !== void 0 && (r = s.globals.ttKeyFormatter(u, h)), s.globals.seriesZ.length > 0 && s.globals.seriesZ[t].length > 0 && (l = d(s.globals.seriesZ[t][i], s)), o = typeof s.config.xaxis.tooltip.formatter == "function" ? s.globals.xaxisTooltipFormatter(u, h) : r, { val: Array.isArray(c) ? c.join(" ") : c, xVal: Array.isArray(r) ? r.join(" ") : r, xAxisTTVal: Array.isArray(o) ? o.join(" ") : o, zVal: l };
  } }, { key: "handleCustomTooltip", value: function(e) {
    var t = e.i, i = e.j, s = e.y1, a = e.y2, r = e.w, o = this.ttCtx.getElTooltip(), l = r.config.tooltip.custom;
    Array.isArray(l) && l[t] && (l = l[t]);
    var c = l({ ctx: this.ctx, series: r.globals.series, seriesIndex: t, dataPointIndex: i, y1: s, y2: a, w: r });
    typeof c == "string" || typeof c == "number" ? o.innerHTML = c : (c instanceof Element || typeof c.nodeName == "string") && (o.innerHTML = "", o.appendChild(c.cloneNode(!0)));
  } }]), n;
}(), Un = function() {
  function n(e) {
    ee(this, n), this.ttCtx = e, this.ctx = e.ctx, this.w = e.w;
  }
  return te(n, [{ key: "moveXCrosshairs", value: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, i = this.ttCtx, s = this.w, a = i.getElXCrosshairs(), r = e - i.xcrosshairsWidth / 2, o = s.globals.labels.slice().length;
    if (t !== null && (r = s.globals.gridWidth / o * t), a === null || s.globals.isBarHorizontal || (a.setAttribute("x", r), a.setAttribute("x1", r), a.setAttribute("x2", r), a.setAttribute("y2", s.globals.gridHeight), a.classList.add("apexcharts-active")), r < 0 && (r = 0), r > s.globals.gridWidth && (r = s.globals.gridWidth), i.isXAxisTooltipEnabled) {
      var l = r;
      s.config.xaxis.crosshairs.width !== "tickWidth" && s.config.xaxis.crosshairs.width !== "barWidth" || (l = r + i.xcrosshairsWidth / 2), this.moveXAxisTooltip(l);
    }
  } }, { key: "moveYCrosshairs", value: function(e) {
    var t = this.ttCtx;
    t.ycrosshairs !== null && W.setAttrs(t.ycrosshairs, { y1: e, y2: e }), t.ycrosshairsHidden !== null && W.setAttrs(t.ycrosshairsHidden, { y1: e, y2: e });
  } }, { key: "moveXAxisTooltip", value: function(e) {
    var t = this.w, i = this.ttCtx;
    if (i.xaxisTooltip !== null && i.xcrosshairsWidth !== 0) {
      i.xaxisTooltip.classList.add("apexcharts-active");
      var s = i.xaxisOffY + t.config.xaxis.tooltip.offsetY + t.globals.translateY + 1 + t.config.xaxis.offsetY;
      if (e -= i.xaxisTooltip.getBoundingClientRect().width / 2, !isNaN(e)) {
        e += t.globals.translateX;
        var a;
        a = new W(this.ctx).getTextRects(i.xaxisTooltipText.innerHTML), i.xaxisTooltipText.style.minWidth = a.width + "px", i.xaxisTooltip.style.left = e + "px", i.xaxisTooltip.style.top = s + "px";
      }
    }
  } }, { key: "moveYAxisTooltip", value: function(e) {
    var t = this.w, i = this.ttCtx;
    i.yaxisTTEls === null && (i.yaxisTTEls = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
    var s = parseInt(i.ycrosshairsHidden.getAttribute("y1"), 10), a = t.globals.translateY + s, r = i.yaxisTTEls[e].getBoundingClientRect(), o = r.height, l = t.globals.translateYAxisX[e] - 2;
    t.config.yaxis[e].opposite && (l -= r.width), a -= o / 2, t.globals.ignoreYAxisIndexes.indexOf(e) === -1 && a > 0 && a < t.globals.gridHeight ? (i.yaxisTTEls[e].classList.add("apexcharts-active"), i.yaxisTTEls[e].style.top = a + "px", i.yaxisTTEls[e].style.left = l + t.config.yaxis[e].tooltip.offsetX + "px") : i.yaxisTTEls[e].classList.remove("apexcharts-active");
  } }, { key: "moveTooltip", value: function(e, t) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, s = this.w, a = this.ttCtx, r = a.getElTooltip(), o = a.tooltipRect, l = i !== null ? parseFloat(i) : 1, c = parseFloat(e) + l + 5, h = parseFloat(t) + l / 2;
    if (c > s.globals.gridWidth / 2 && (c = c - o.ttWidth - l - 10), c > s.globals.gridWidth - o.ttWidth - 10 && (c = s.globals.gridWidth - o.ttWidth), c < -20 && (c = -20), s.config.tooltip.followCursor) {
      var d = a.getElGrid().getBoundingClientRect();
      (c = a.e.clientX - d.left) > s.globals.gridWidth / 2 && (c -= a.tooltipRect.ttWidth), (h = a.e.clientY + s.globals.translateY - d.top) > s.globals.gridHeight / 2 && (h -= a.tooltipRect.ttHeight);
    } else s.globals.isBarHorizontal || o.ttHeight / 2 + h > s.globals.gridHeight && (h = s.globals.gridHeight - o.ttHeight + s.globals.translateY);
    isNaN(c) || (c += s.globals.translateX, r.style.left = c + "px", r.style.top = h + "px");
  } }, { key: "moveMarkers", value: function(e, t) {
    var i = this.w, s = this.ttCtx;
    if (i.globals.markers.size[e] > 0) for (var a = i.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(e, "'] .apexcharts-marker")), r = 0; r < a.length; r++) parseInt(a[r].getAttribute("rel"), 10) === t && (s.marker.resetPointsSize(), s.marker.enlargeCurrentPoint(t, a[r]));
    else s.marker.resetPointsSize(), this.moveDynamicPointOnHover(t, e);
  } }, { key: "moveDynamicPointOnHover", value: function(e, t) {
    var i, s, a, r, o = this.w, l = this.ttCtx, c = new W(this.ctx), h = o.globals.pointsArray, d = l.tooltipUtil.getHoverMarkerSize(t), u = o.config.series[t].type;
    if (!u || u !== "column" && u !== "candlestick" && u !== "boxPlot") {
      a = (i = h[t][e]) === null || i === void 0 ? void 0 : i[0], r = ((s = h[t][e]) === null || s === void 0 ? void 0 : s[1]) || 0;
      var g = o.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t, "'] .apexcharts-series-markers path"));
      if (g && r < o.globals.gridHeight && r > 0) {
        var p = g.getAttribute("shape"), f = c.getMarkerPath(a, r, p, 1.5 * d);
        g.setAttribute("d", f);
      }
      this.moveXCrosshairs(a), l.fixedTooltip || this.moveTooltip(a, r, d);
    }
  } }, { key: "moveDynamicPointsOnHover", value: function(e) {
    var t, i = this.ttCtx, s = i.w, a = 0, r = 0, o = s.globals.pointsArray, l = new st(this.ctx), c = new W(this.ctx);
    t = l.getActiveConfigSeriesIndex("asc", ["line", "area", "scatter", "bubble"]);
    var h = i.tooltipUtil.getHoverMarkerSize(t);
    if (o[t] && (a = o[t][e][0], r = o[t][e][1]), !isNaN(a)) {
      var d = i.tooltipUtil.getAllMarkers();
      if (d.length) for (var u = 0; u < s.globals.series.length; u++) {
        var g = o[u];
        if (s.globals.comboCharts && g === void 0 && d.splice(u, 0, null), g && g.length) {
          var p = o[u][e][1], f = void 0;
          d[u].setAttribute("cx", a);
          var x = d[u].getAttribute("shape");
          if (s.config.chart.type === "rangeArea" && !s.globals.comboCharts) {
            var m = e + s.globals.series[u].length;
            f = o[u][m][1], p -= Math.abs(p - f) / 2;
          }
          if (p !== null && !isNaN(p) && p < s.globals.gridHeight + h && p + h > 0) {
            var b = c.getMarkerPath(a, p, x, h);
            d[u].setAttribute("d", b);
          } else d[u].setAttribute("d", "");
        }
      }
      this.moveXCrosshairs(a), i.fixedTooltip || this.moveTooltip(a, r || s.globals.gridHeight, h);
    }
  } }, { key: "moveStickyTooltipOverBars", value: function(e, t) {
    var i = this.w, s = this.ttCtx, a = i.globals.columnSeries ? i.globals.columnSeries.length : i.globals.series.length;
    i.config.chart.stacked && (a = i.globals.barGroups.length);
    var r = a >= 2 && a % 2 == 0 ? Math.floor(a / 2) : Math.floor(a / 2) + 1;
    i.globals.isBarHorizontal && (r = new st(this.ctx).getActiveConfigSeriesIndex("desc") + 1);
    var o = i.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(r, "'] path[j='").concat(e, "'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(r, "'] path[j='").concat(e, "'], .apexcharts-boxPlot-series .apexcharts-series[rel='").concat(r, "'] path[j='").concat(e, "'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(r, "'] path[j='").concat(e, "']"));
    o || typeof t != "number" || (o = i.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[data\\:realIndex='".concat(t, "'] path[j='").concat(e, `'],
        .apexcharts-candlestick-series .apexcharts-series[data\\:realIndex='`).concat(t, "'] path[j='").concat(e, `'],
        .apexcharts-boxPlot-series .apexcharts-series[data\\:realIndex='`).concat(t, "'] path[j='").concat(e, `'],
        .apexcharts-rangebar-series .apexcharts-series[data\\:realIndex='`).concat(t, "'] path[j='").concat(e, "']")));
    var l = o ? parseFloat(o.getAttribute("cx")) : 0, c = o ? parseFloat(o.getAttribute("cy")) : 0, h = o ? parseFloat(o.getAttribute("barWidth")) : 0, d = s.getElGrid().getBoundingClientRect(), u = o && (o.classList.contains("apexcharts-candlestick-area") || o.classList.contains("apexcharts-boxPlot-area"));
    i.globals.isXNumeric ? (o && !u && (l -= a % 2 != 0 ? h / 2 : 0), o && u && (l -= h / 2)) : i.globals.isBarHorizontal || (l = s.xAxisTicksPositions[e - 1] + s.dataPointsDividedWidth / 2, isNaN(l) && (l = s.xAxisTicksPositions[e] - s.dataPointsDividedWidth / 2)), i.globals.isBarHorizontal ? c -= s.tooltipRect.ttHeight : i.config.tooltip.followCursor ? c = s.e.clientY - d.top - s.tooltipRect.ttHeight / 2 : c + s.tooltipRect.ttHeight + 15 > i.globals.gridHeight && (c = i.globals.gridHeight), i.globals.isBarHorizontal || this.moveXCrosshairs(l), s.fixedTooltip || this.moveTooltip(l, c || i.globals.gridHeight);
  } }]), n;
}(), yh = function() {
  function n(e) {
    ee(this, n), this.w = e.w, this.ttCtx = e, this.ctx = e.ctx, this.tooltipPosition = new Un(e);
  }
  return te(n, [{ key: "drawDynamicPoints", value: function() {
    var e = this.w, t = new W(this.ctx), i = new Zt(this.ctx), s = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
    s = _e(s), e.config.chart.stacked && s.sort(function(d, u) {
      return parseFloat(d.getAttribute("data:realIndex")) - parseFloat(u.getAttribute("data:realIndex"));
    });
    for (var a = 0; a < s.length; a++) {
      var r = s[a].querySelector(".apexcharts-series-markers-wrap");
      if (r !== null) {
        var o = void 0, l = "apexcharts-marker w".concat((Math.random() + 1).toString(36).substring(4));
        e.config.chart.type !== "line" && e.config.chart.type !== "area" || e.globals.comboCharts || e.config.tooltip.intersect || (l += " no-pointer-events");
        var c = i.getMarkerConfig({ cssClass: l, seriesIndex: Number(r.getAttribute("data:realIndex")) });
        (o = t.drawMarker(0, 0, c)).node.setAttribute("default-marker-size", 0);
        var h = document.createElementNS(e.globals.SVGNS, "g");
        h.classList.add("apexcharts-series-markers"), h.appendChild(o.node), r.appendChild(h);
      }
    }
  } }, { key: "enlargeCurrentPoint", value: function(e, t) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, a = this.w;
    a.config.chart.type !== "bubble" && this.newPointSize(e, t);
    var r = t.getAttribute("cx"), o = t.getAttribute("cy");
    if (i !== null && s !== null && (r = i, o = s), this.tooltipPosition.moveXCrosshairs(r), !this.fixedTooltip) {
      if (a.config.chart.type === "radar") {
        var l = this.ttCtx.getElGrid().getBoundingClientRect();
        r = this.ttCtx.e.clientX - l.left;
      }
      this.tooltipPosition.moveTooltip(r, o, a.config.markers.hover.size);
    }
  } }, { key: "enlargePoints", value: function(e) {
    for (var t = this.w, i = this, s = this.ttCtx, a = e, r = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), o = t.config.markers.hover.size, l = 0; l < r.length; l++) {
      var c = r[l].getAttribute("rel"), h = r[l].getAttribute("index");
      if (o === void 0 && (o = t.globals.markers.size[h] + t.config.markers.hover.sizeOffset), a === parseInt(c, 10)) {
        i.newPointSize(a, r[l]);
        var d = r[l].getAttribute("cx"), u = r[l].getAttribute("cy");
        i.tooltipPosition.moveXCrosshairs(d), s.fixedTooltip || i.tooltipPosition.moveTooltip(d, u, o);
      } else i.oldPointSize(r[l]);
    }
  } }, { key: "newPointSize", value: function(e, t) {
    var i = this.w, s = i.config.markers.hover.size, a = e === 0 ? t.parentNode.firstChild : t.parentNode.lastChild;
    if (a.getAttribute("default-marker-size") !== "0") {
      var r = parseInt(a.getAttribute("index"), 10);
      s === void 0 && (s = i.globals.markers.size[r] + i.config.markers.hover.sizeOffset), s < 0 && (s = 0);
      var o = this.ttCtx.tooltipUtil.getPathFromPoint(t, s);
      t.setAttribute("d", o);
    }
  } }, { key: "oldPointSize", value: function(e) {
    var t = parseFloat(e.getAttribute("default-marker-size")), i = this.ttCtx.tooltipUtil.getPathFromPoint(e, t);
    e.setAttribute("d", i);
  } }, { key: "resetPointsSize", value: function() {
    for (var e = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), t = 0; t < e.length; t++) {
      var i = parseFloat(e[t].getAttribute("default-marker-size"));
      if (_.isNumber(i) && i > 0) {
        var s = this.ttCtx.tooltipUtil.getPathFromPoint(e[t], i);
        e[t].setAttribute("d", s);
      } else e[t].setAttribute("d", "M0,0");
    }
  } }]), n;
}(), wh = function() {
  function n(e) {
    ee(this, n), this.w = e.w;
    var t = this.w;
    this.ttCtx = e, this.isVerticalGroupedRangeBar = !t.globals.isBarHorizontal && t.config.chart.type === "rangeBar" && t.config.plotOptions.bar.rangeBarGroupRows;
  }
  return te(n, [{ key: "getAttr", value: function(e, t) {
    return parseFloat(e.target.getAttribute(t));
  } }, { key: "handleHeatTreeTooltip", value: function(e) {
    var t = e.e, i = e.opt, s = e.x, a = e.y, r = e.type, o = this.ttCtx, l = this.w;
    if (t.target.classList.contains("apexcharts-".concat(r, "-rect"))) {
      var c = this.getAttr(t, "i"), h = this.getAttr(t, "j"), d = this.getAttr(t, "cx"), u = this.getAttr(t, "cy"), g = this.getAttr(t, "width"), p = this.getAttr(t, "height");
      if (o.tooltipLabels.drawSeriesTexts({ ttItems: i.ttItems, i: c, j: h, shared: !1, e: t }), l.globals.capturedSeriesIndex = c, l.globals.capturedDataPointIndex = h, s = d + o.tooltipRect.ttWidth / 2 + g, a = u + o.tooltipRect.ttHeight / 2 - p / 2, o.tooltipPosition.moveXCrosshairs(d + g / 2), s > l.globals.gridWidth / 2 && (s = d - o.tooltipRect.ttWidth / 2 + g), o.w.config.tooltip.followCursor) {
        var f = l.globals.dom.elWrap.getBoundingClientRect();
        s = l.globals.clientX - f.left - (s > l.globals.gridWidth / 2 ? o.tooltipRect.ttWidth : 0), a = l.globals.clientY - f.top - (a > l.globals.gridHeight / 2 ? o.tooltipRect.ttHeight : 0);
      }
    }
    return { x: s, y: a };
  } }, { key: "handleMarkerTooltip", value: function(e) {
    var t, i, s = e.e, a = e.opt, r = e.x, o = e.y, l = this.w, c = this.ttCtx;
    if (s.target.classList.contains("apexcharts-marker")) {
      var h = parseInt(a.paths.getAttribute("cx"), 10), d = parseInt(a.paths.getAttribute("cy"), 10), u = parseFloat(a.paths.getAttribute("val"));
      if (i = parseInt(a.paths.getAttribute("rel"), 10), t = parseInt(a.paths.parentNode.parentNode.parentNode.getAttribute("rel"), 10) - 1, c.intersect) {
        var g = _.findAncestor(a.paths, "apexcharts-series");
        g && (t = parseInt(g.getAttribute("data:realIndex"), 10));
      }
      if (c.tooltipLabels.drawSeriesTexts({ ttItems: a.ttItems, i: t, j: i, shared: !c.showOnIntersect && l.config.tooltip.shared, e: s }), s.type === "mouseup" && c.markerClick(s, t, i), l.globals.capturedSeriesIndex = t, l.globals.capturedDataPointIndex = i, r = h, o = d + l.globals.translateY - 1.4 * c.tooltipRect.ttHeight, c.w.config.tooltip.followCursor) {
        var p = c.getElGrid().getBoundingClientRect();
        o = c.e.clientY + l.globals.translateY - p.top;
      }
      u < 0 && (o = d), c.marker.enlargeCurrentPoint(i, a.paths, r, o);
    }
    return { x: r, y: o };
  } }, { key: "handleBarTooltip", value: function(e) {
    var t, i, s = e.e, a = e.opt, r = this.w, o = this.ttCtx, l = o.getElTooltip(), c = 0, h = 0, d = 0, u = this.getBarTooltipXY({ e: s, opt: a });
    if (u.j !== null || u.barHeight !== 0 || u.barWidth !== 0) {
      t = u.i;
      var g = u.j;
      if (r.globals.capturedSeriesIndex = t, r.globals.capturedDataPointIndex = g, r.globals.isBarHorizontal && o.tooltipUtil.hasBars() || !r.config.tooltip.shared ? (h = u.x, d = u.y, i = Array.isArray(r.config.stroke.width) ? r.config.stroke.width[t] : r.config.stroke.width, c = h) : r.globals.comboCharts || r.config.tooltip.shared || (c /= 2), isNaN(d) && (d = r.globals.svgHeight - o.tooltipRect.ttHeight), parseInt(a.paths.parentNode.getAttribute("data:realIndex"), 10), h + o.tooltipRect.ttWidth > r.globals.gridWidth ? h -= o.tooltipRect.ttWidth : h < 0 && (h = 0), o.w.config.tooltip.followCursor) {
        var p = o.getElGrid().getBoundingClientRect();
        d = o.e.clientY - p.top;
      }
      o.tooltip === null && (o.tooltip = r.globals.dom.baseEl.querySelector(".apexcharts-tooltip")), r.config.tooltip.shared || (r.globals.comboBarCount > 0 ? o.tooltipPosition.moveXCrosshairs(c + i / 2) : o.tooltipPosition.moveXCrosshairs(c)), !o.fixedTooltip && (!r.config.tooltip.shared || r.globals.isBarHorizontal && o.tooltipUtil.hasBars()) && (d = d + r.globals.translateY - o.tooltipRect.ttHeight / 2, l.style.left = h + r.globals.translateX + "px", l.style.top = d + "px");
    }
  } }, { key: "getBarTooltipXY", value: function(e) {
    var t = this, i = e.e, s = e.opt, a = this.w, r = null, o = this.ttCtx, l = 0, c = 0, h = 0, d = 0, u = 0, g = i.target.classList;
    if (g.contains("apexcharts-bar-area") || g.contains("apexcharts-candlestick-area") || g.contains("apexcharts-boxPlot-area") || g.contains("apexcharts-rangebar-area")) {
      var p = i.target, f = p.getBoundingClientRect(), x = s.elGrid.getBoundingClientRect(), m = f.height;
      u = f.height;
      var b = f.width, w = parseInt(p.getAttribute("cx"), 10), y = parseInt(p.getAttribute("cy"), 10);
      d = parseFloat(p.getAttribute("barWidth"));
      var v = i.type === "touchmove" ? i.touches[0].clientX : i.clientX;
      r = parseInt(p.getAttribute("j"), 10), l = parseInt(p.parentNode.getAttribute("rel"), 10) - 1;
      var k = p.getAttribute("data-range-y1"), A = p.getAttribute("data-range-y2");
      a.globals.comboCharts && (l = parseInt(p.parentNode.getAttribute("data:realIndex"), 10));
      var S = function(L) {
        return a.globals.isXNumeric ? w - b / 2 : t.isVerticalGroupedRangeBar ? w + b / 2 : w - o.dataPointsDividedWidth + b / 2;
      }, C = function() {
        return y - o.dataPointsDividedHeight + m / 2 - o.tooltipRect.ttHeight / 2;
      };
      o.tooltipLabels.drawSeriesTexts({ ttItems: s.ttItems, i: l, j: r, y1: k ? parseInt(k, 10) : null, y2: A ? parseInt(A, 10) : null, shared: !o.showOnIntersect && a.config.tooltip.shared, e: i }), a.config.tooltip.followCursor ? a.globals.isBarHorizontal ? (c = v - x.left + 15, h = C()) : (c = S(), h = i.clientY - x.top - o.tooltipRect.ttHeight / 2 - 15) : a.globals.isBarHorizontal ? ((c = w) < o.xyRatios.baseLineInvertedY && (c = w - o.tooltipRect.ttWidth), h = C()) : (c = S(), h = y);
    }
    return { x: c, y: h, barHeight: u, barWidth: d, i: l, j: r };
  } }]), n;
}(), kh = function() {
  function n(e) {
    ee(this, n), this.w = e.w, this.ttCtx = e;
  }
  return te(n, [{ key: "drawXaxisTooltip", value: function() {
    var e = this.w, t = this.ttCtx, i = e.config.xaxis.position === "bottom";
    t.xaxisOffY = i ? e.globals.gridHeight + 1 : -e.globals.xAxisHeight - e.config.xaxis.axisTicks.height + 3;
    var s = i ? "apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom" : "apexcharts-xaxistooltip apexcharts-xaxistooltip-top", a = e.globals.dom.elWrap;
    t.isXAxisTooltipEnabled && e.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip") === null && (t.xaxisTooltip = document.createElement("div"), t.xaxisTooltip.setAttribute("class", s + " apexcharts-theme-" + e.config.tooltip.theme), a.appendChild(t.xaxisTooltip), t.xaxisTooltipText = document.createElement("div"), t.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"), t.xaxisTooltipText.style.fontFamily = e.config.xaxis.tooltip.style.fontFamily || e.config.chart.fontFamily, t.xaxisTooltipText.style.fontSize = e.config.xaxis.tooltip.style.fontSize, t.xaxisTooltip.appendChild(t.xaxisTooltipText));
  } }, { key: "drawYaxisTooltip", value: function() {
    for (var e = this.w, t = this.ttCtx, i = 0; i < e.config.yaxis.length; i++) {
      var s = e.config.yaxis[i].opposite || e.config.yaxis[i].crosshairs.opposite;
      t.yaxisOffX = s ? e.globals.gridWidth + 1 : 1;
      var a = "apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i, s ? " apexcharts-yaxistooltip-right" : " apexcharts-yaxistooltip-left"), r = e.globals.dom.elWrap;
      e.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i)) === null && (t.yaxisTooltip = document.createElement("div"), t.yaxisTooltip.setAttribute("class", a + " apexcharts-theme-" + e.config.tooltip.theme), r.appendChild(t.yaxisTooltip), i === 0 && (t.yaxisTooltipText = []), t.yaxisTooltipText[i] = document.createElement("div"), t.yaxisTooltipText[i].classList.add("apexcharts-yaxistooltip-text"), t.yaxisTooltip.appendChild(t.yaxisTooltipText[i]));
    }
  } }, { key: "setXCrosshairWidth", value: function() {
    var e = this.w, t = this.ttCtx, i = t.getElXCrosshairs();
    if (t.xcrosshairsWidth = parseInt(e.config.xaxis.crosshairs.width, 10), e.globals.comboCharts) {
      var s = e.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
      if (s !== null && e.config.xaxis.crosshairs.width === "barWidth") {
        var a = parseFloat(s.getAttribute("barWidth"));
        t.xcrosshairsWidth = a;
      } else if (e.config.xaxis.crosshairs.width === "tickWidth") {
        var r = e.globals.labels.length;
        t.xcrosshairsWidth = e.globals.gridWidth / r;
      }
    } else if (e.config.xaxis.crosshairs.width === "tickWidth") {
      var o = e.globals.labels.length;
      t.xcrosshairsWidth = e.globals.gridWidth / o;
    } else if (e.config.xaxis.crosshairs.width === "barWidth") {
      var l = e.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
      if (l !== null) {
        var c = parseFloat(l.getAttribute("barWidth"));
        t.xcrosshairsWidth = c;
      } else t.xcrosshairsWidth = 1;
    }
    e.globals.isBarHorizontal && (t.xcrosshairsWidth = 0), i !== null && t.xcrosshairsWidth > 0 && i.setAttribute("width", t.xcrosshairsWidth);
  } }, { key: "handleYCrosshair", value: function() {
    var e = this.w, t = this.ttCtx;
    t.ycrosshairs = e.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"), t.ycrosshairsHidden = e.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden");
  } }, { key: "drawYaxisTooltipText", value: function(e, t, i) {
    var s = this.ttCtx, a = this.w, r = a.globals, o = r.seriesYAxisMap[e];
    if (s.yaxisTooltips[e] && o.length > 0) {
      var l = r.yLabelFormatters[e], c = s.getElGrid().getBoundingClientRect(), h = o[0], d = 0;
      i.yRatio.length > 1 && (d = h);
      var u = (t - c.top) * i.yRatio[d], g = r.maxYArr[h] - r.minYArr[h], p = r.minYArr[h] + (g - u);
      a.config.yaxis[e].reversed && (p = r.maxYArr[h] - (g - u)), s.tooltipPosition.moveYCrosshairs(t - c.top), s.yaxisTooltipText[e].innerHTML = l(p), s.tooltipPosition.moveYAxisTooltip(e);
    }
  } }]), n;
}(), mr = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w;
    var t = this.w;
    this.tConfig = t.config.tooltip, this.tooltipUtil = new $n(this), this.tooltipLabels = new vh(this), this.tooltipPosition = new Un(this), this.marker = new yh(this), this.intersect = new wh(this), this.axesTooltip = new kh(this), this.showOnIntersect = this.tConfig.intersect, this.showTooltipTitle = this.tConfig.x.show, this.fixedTooltip = this.tConfig.fixed.enabled, this.xaxisTooltip = null, this.yaxisTTEls = null, this.isBarShared = !t.globals.isBarHorizontal && this.tConfig.shared, this.lastHoverTime = Date.now();
  }
  return te(n, [{ key: "getElTooltip", value: function(e) {
    return e || (e = this), e.w.globals.dom.baseEl ? e.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip") : null;
  } }, { key: "getElXCrosshairs", value: function() {
    return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs");
  } }, { key: "getElGrid", value: function() {
    return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid");
  } }, { key: "drawTooltip", value: function(e) {
    var t = this.w;
    this.xyRatios = e, this.isXAxisTooltipEnabled = t.config.xaxis.tooltip.enabled && t.globals.axisCharts, this.yaxisTooltips = t.config.yaxis.map(function(r, o) {
      return !!(r.show && r.tooltip.enabled && t.globals.axisCharts);
    }), this.allTooltipSeriesGroups = [], t.globals.axisCharts || (this.showTooltipTitle = !1);
    var i = document.createElement("div");
    if (i.classList.add("apexcharts-tooltip"), t.config.tooltip.cssClass && i.classList.add(t.config.tooltip.cssClass), i.classList.add("apexcharts-theme-".concat(this.tConfig.theme || "light")), t.globals.dom.elWrap.appendChild(i), t.globals.axisCharts) {
      this.axesTooltip.drawXaxisTooltip(), this.axesTooltip.drawYaxisTooltip(), this.axesTooltip.setXCrosshairWidth(), this.axesTooltip.handleYCrosshair();
      var s = new pi(this.ctx);
      this.xAxisTicksPositions = s.getXAxisTicksPositions();
    }
    if (!t.globals.comboCharts && !this.tConfig.intersect && t.config.chart.type !== "rangeBar" || this.tConfig.shared || (this.showOnIntersect = !0), t.config.markers.size !== 0 && t.globals.markers.largestSize !== 0 || this.marker.drawDynamicPoints(this), t.globals.collapsedSeries.length !== t.globals.series.length) {
      this.dataPointsDividedHeight = t.globals.gridHeight / t.globals.dataPoints, this.dataPointsDividedWidth = t.globals.gridWidth / t.globals.dataPoints, this.showTooltipTitle && (this.tooltipTitle = document.createElement("div"), this.tooltipTitle.classList.add("apexcharts-tooltip-title"), this.tooltipTitle.style.fontFamily = this.tConfig.style.fontFamily || t.config.chart.fontFamily, this.tooltipTitle.style.fontSize = this.tConfig.style.fontSize, i.appendChild(this.tooltipTitle));
      var a = t.globals.series.length;
      (t.globals.xyCharts || t.globals.comboCharts) && this.tConfig.shared && (a = this.showOnIntersect ? 1 : t.globals.series.length), this.legendLabels = t.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"), this.ttItems = this.createTTElements(a), this.addSVGEvents();
    }
  } }, { key: "createTTElements", value: function(e) {
    for (var t = this, i = this.w, s = [], a = this.getElTooltip(), r = function(l) {
      var c = document.createElement("div");
      c.classList.add("apexcharts-tooltip-series-group", "apexcharts-tooltip-series-group-".concat(l)), c.style.order = i.config.tooltip.inverseOrder ? e - l : l + 1;
      var h = document.createElement("span");
      h.classList.add("apexcharts-tooltip-marker"), i.config.tooltip.fillSeriesColor ? h.style.backgroundColor = i.globals.colors[l] : h.style.color = i.globals.colors[l];
      var d = i.config.markers.shape, u = d;
      Array.isArray(d) && (u = d[l]), h.setAttribute("shape", u), c.appendChild(h);
      var g = document.createElement("div");
      g.classList.add("apexcharts-tooltip-text"), g.style.fontFamily = t.tConfig.style.fontFamily || i.config.chart.fontFamily, g.style.fontSize = t.tConfig.style.fontSize, ["y", "goals", "z"].forEach(function(p) {
        var f = document.createElement("div");
        f.classList.add("apexcharts-tooltip-".concat(p, "-group"));
        var x = document.createElement("span");
        x.classList.add("apexcharts-tooltip-text-".concat(p, "-label")), f.appendChild(x);
        var m = document.createElement("span");
        m.classList.add("apexcharts-tooltip-text-".concat(p, "-value")), f.appendChild(m), g.appendChild(f);
      }), c.appendChild(g), a.appendChild(c), s.push(c);
    }, o = 0; o < e; o++) r(o);
    return s;
  } }, { key: "addSVGEvents", value: function() {
    var e = this.w, t = e.config.chart.type, i = this.getElTooltip(), s = !(t !== "bar" && t !== "candlestick" && t !== "boxPlot" && t !== "rangeBar"), a = t === "area" || t === "line" || t === "scatter" || t === "bubble" || t === "radar", r = e.globals.dom.Paper.node, o = this.getElGrid();
    o && (this.seriesBound = o.getBoundingClientRect());
    var l, c = [], h = [], d = { hoverArea: r, elGrid: o, tooltipEl: i, tooltipY: c, tooltipX: h, ttItems: this.ttItems };
    if (e.globals.axisCharts && (a ? l = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker") : s ? l = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area") : t !== "heatmap" && t !== "treemap" || (l = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")), l && l.length)) for (var u = 0; u < l.length; u++) c.push(l[u].getAttribute("cy")), h.push(l[u].getAttribute("cx"));
    if (e.globals.xyCharts && !this.showOnIntersect || e.globals.comboCharts && !this.showOnIntersect || s && this.tooltipUtil.hasBars() && this.tConfig.shared) this.addPathsEventListeners([r], d);
    else if (s && !e.globals.comboCharts || a && this.showOnIntersect) this.addDatapointEventsListeners(d);
    else if (!e.globals.axisCharts || t === "heatmap" || t === "treemap") {
      var g = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
      this.addPathsEventListeners(g, d);
    }
    if (this.showOnIntersect) {
      var p = e.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker");
      p.length > 0 && this.addPathsEventListeners(p, d), this.tooltipUtil.hasBars() && !this.tConfig.shared && this.addDatapointEventsListeners(d);
    }
  } }, { key: "drawFixedTooltipRect", value: function() {
    var e = this.w, t = this.getElTooltip(), i = t.getBoundingClientRect(), s = i.width + 10, a = i.height + 10, r = this.tConfig.fixed.offsetX, o = this.tConfig.fixed.offsetY, l = this.tConfig.fixed.position.toLowerCase();
    return l.indexOf("right") > -1 && (r = r + e.globals.svgWidth - s + 10), l.indexOf("bottom") > -1 && (o = o + e.globals.svgHeight - a - 10), t.style.left = r + "px", t.style.top = o + "px", { x: r, y: o, ttWidth: s, ttHeight: a };
  } }, { key: "addDatapointEventsListeners", value: function(e) {
    var t = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area");
    this.addPathsEventListeners(t, e);
  } }, { key: "addPathsEventListeners", value: function(e, t) {
    for (var i = this, s = function(r) {
      var o = { paths: e[r], tooltipEl: t.tooltipEl, tooltipY: t.tooltipY, tooltipX: t.tooltipX, elGrid: t.elGrid, hoverArea: t.hoverArea, ttItems: t.ttItems };
      ["mousemove", "mouseup", "touchmove", "mouseout", "touchend"].map(function(l) {
        return e[r].addEventListener(l, i.onSeriesHover.bind(i, o), { capture: !1, passive: !0 });
      });
    }, a = 0; a < e.length; a++) s(a);
  } }, { key: "onSeriesHover", value: function(e, t) {
    var i = this, s = Date.now() - this.lastHoverTime;
    s >= 20 ? this.seriesHover(e, t) : (clearTimeout(this.seriesHoverTimeout), this.seriesHoverTimeout = setTimeout(function() {
      i.seriesHover(e, t);
    }, 20 - s));
  } }, { key: "seriesHover", value: function(e, t) {
    var i = this;
    this.lastHoverTime = Date.now();
    var s = [], a = this.w;
    a.config.chart.group && (s = this.ctx.getGroupedCharts()), a.globals.axisCharts && (a.globals.minX === -1 / 0 && a.globals.maxX === 1 / 0 || a.globals.dataPoints === 0) || (s.length ? s.forEach(function(r) {
      var o = i.getElTooltip(r), l = { paths: e.paths, tooltipEl: o, tooltipY: e.tooltipY, tooltipX: e.tooltipX, elGrid: e.elGrid, hoverArea: e.hoverArea, ttItems: r.w.globals.tooltip.ttItems };
      r.w.globals.minX === i.w.globals.minX && r.w.globals.maxX === i.w.globals.maxX && r.w.globals.tooltip.seriesHoverByContext({ chartCtx: r, ttCtx: r.w.globals.tooltip, opt: l, e: t });
    }) : this.seriesHoverByContext({ chartCtx: this.ctx, ttCtx: this.w.globals.tooltip, opt: e, e: t }));
  } }, { key: "seriesHoverByContext", value: function(e) {
    var t = e.chartCtx, i = e.ttCtx, s = e.opt, a = e.e, r = t.w, o = this.getElTooltip(t);
    o && (i.tooltipRect = { x: 0, y: 0, ttWidth: o.getBoundingClientRect().width, ttHeight: o.getBoundingClientRect().height }, i.e = a, i.tooltipUtil.hasBars() && !r.globals.comboCharts && !i.isBarShared && this.tConfig.onDatasetHover.highlightDataSeries && new st(t).toggleSeriesOnHover(a, a.target.parentNode), r.globals.axisCharts ? i.axisChartsTooltips({ e: a, opt: s, tooltipRect: i.tooltipRect }) : i.nonAxisChartsTooltips({ e: a, opt: s, tooltipRect: i.tooltipRect }), i.fixedTooltip && i.drawFixedTooltipRect());
  } }, { key: "axisChartsTooltips", value: function(e) {
    var t, i, s = e.e, a = e.opt, r = this.w, o = a.elGrid.getBoundingClientRect(), l = s.type === "touchmove" ? s.touches[0].clientX : s.clientX, c = s.type === "touchmove" ? s.touches[0].clientY : s.clientY;
    if (this.clientY = c, this.clientX = l, r.globals.capturedSeriesIndex = -1, r.globals.capturedDataPointIndex = -1, c < o.top || c > o.top + o.height) this.handleMouseOut(a);
    else {
      if (Array.isArray(this.tConfig.enabledOnSeries) && !r.config.tooltip.shared) {
        var h = parseInt(a.paths.getAttribute("index"), 10);
        if (this.tConfig.enabledOnSeries.indexOf(h) < 0) return void this.handleMouseOut(a);
      }
      var d = this.getElTooltip(), u = this.getElXCrosshairs(), g = [];
      r.config.chart.group && (g = this.ctx.getSyncedCharts());
      var p = r.globals.xyCharts || r.config.chart.type === "bar" && !r.globals.isBarHorizontal && this.tooltipUtil.hasBars() && this.tConfig.shared || r.globals.comboCharts && this.tooltipUtil.hasBars();
      if (s.type === "mousemove" || s.type === "touchmove" || s.type === "mouseup") {
        if (r.globals.collapsedSeries.length + r.globals.ancillaryCollapsedSeries.length === r.globals.series.length) return;
        u !== null && u.classList.add("apexcharts-active");
        var f = this.yaxisTooltips.filter(function(b) {
          return b === !0;
        });
        if (this.ycrosshairs !== null && f.length && this.ycrosshairs.classList.add("apexcharts-active"), p && !this.showOnIntersect || g.length > 1) this.handleStickyTooltip(s, l, c, a);
        else if (r.config.chart.type === "heatmap" || r.config.chart.type === "treemap") {
          var x = this.intersect.handleHeatTreeTooltip({ e: s, opt: a, x: t, y: i, type: r.config.chart.type });
          t = x.x, i = x.y, d.style.left = t + "px", d.style.top = i + "px";
        } else this.tooltipUtil.hasBars() && this.intersect.handleBarTooltip({ e: s, opt: a }), this.tooltipUtil.hasMarkers() && this.intersect.handleMarkerTooltip({ e: s, opt: a, x: t, y: i });
        if (this.yaxisTooltips.length) for (var m = 0; m < r.config.yaxis.length; m++) this.axesTooltip.drawYaxisTooltipText(m, c, this.xyRatios);
        r.globals.dom.baseEl.classList.add("apexcharts-tooltip-active"), a.tooltipEl.classList.add("apexcharts-active");
      } else s.type !== "mouseout" && s.type !== "touchend" || this.handleMouseOut(a);
    }
  } }, { key: "nonAxisChartsTooltips", value: function(e) {
    var t = e.e, i = e.opt, s = e.tooltipRect, a = this.w, r = i.paths.getAttribute("rel"), o = this.getElTooltip(), l = a.globals.dom.elWrap.getBoundingClientRect();
    if (t.type === "mousemove" || t.type === "touchmove") {
      a.globals.dom.baseEl.classList.add("apexcharts-tooltip-active"), o.classList.add("apexcharts-active"), this.tooltipLabels.drawSeriesTexts({ ttItems: i.ttItems, i: parseInt(r, 10) - 1, shared: !1 });
      var c = a.globals.clientX - l.left - s.ttWidth / 2, h = a.globals.clientY - l.top - s.ttHeight - 10;
      if (o.style.left = c + "px", o.style.top = h + "px", a.config.legend.tooltipHoverFormatter) {
        var d = r - 1, u = (0, a.config.legend.tooltipHoverFormatter)(this.legendLabels[d].getAttribute("data:default-text"), { seriesIndex: d, dataPointIndex: d, w: a });
        this.legendLabels[d].innerHTML = u;
      }
    } else t.type !== "mouseout" && t.type !== "touchend" || (o.classList.remove("apexcharts-active"), a.globals.dom.baseEl.classList.remove("apexcharts-tooltip-active"), a.config.legend.tooltipHoverFormatter && this.legendLabels.forEach(function(g) {
      var p = g.getAttribute("data:default-text");
      g.innerHTML = decodeURIComponent(p);
    }));
  } }, { key: "handleStickyTooltip", value: function(e, t, i, s) {
    var a = this.w, r = this.tooltipUtil.getNearestValues({ context: this, hoverArea: s.hoverArea, elGrid: s.elGrid, clientX: t, clientY: i }), o = r.j, l = r.capturedSeries;
    a.globals.collapsedSeriesIndices.includes(l) && (l = null);
    var c = s.elGrid.getBoundingClientRect();
    if (r.hoverX < 0 || r.hoverX > c.width) this.handleMouseOut(s);
    else if (l !== null) this.handleStickyCapturedSeries(e, l, s, o);
    else if (this.tooltipUtil.isXoverlap(o) || a.globals.isBarHorizontal) {
      var h = a.globals.series.findIndex(function(d, u) {
        return !a.globals.collapsedSeriesIndices.includes(u);
      });
      this.create(e, this, h, o, s.ttItems);
    }
  } }, { key: "handleStickyCapturedSeries", value: function(e, t, i, s) {
    var a = this.w;
    if (!this.tConfig.shared && a.globals.series[t][s] === null) return void this.handleMouseOut(i);
    if (a.globals.series[t][s] !== void 0) this.tConfig.shared && this.tooltipUtil.isXoverlap(s) && this.tooltipUtil.isInitialSeriesSameLen() ? this.create(e, this, t, s, i.ttItems) : this.create(e, this, t, s, i.ttItems, !1);
    else if (this.tooltipUtil.isXoverlap(s)) {
      var r = a.globals.series.findIndex(function(o, l) {
        return !a.globals.collapsedSeriesIndices.includes(l);
      });
      this.create(e, this, r, s, i.ttItems);
    }
  } }, { key: "deactivateHoverFilter", value: function() {
    for (var e = this.w, t = new W(this.ctx), i = e.globals.dom.Paper.find(".apexcharts-bar-area"), s = 0; s < i.length; s++) t.pathMouseLeave(i[s]);
  } }, { key: "handleMouseOut", value: function(e) {
    var t = this.w, i = this.getElXCrosshairs();
    if (t.globals.dom.baseEl.classList.remove("apexcharts-tooltip-active"), e.tooltipEl.classList.remove("apexcharts-active"), this.deactivateHoverFilter(), t.config.chart.type !== "bubble" && this.marker.resetPointsSize(), i !== null && i.classList.remove("apexcharts-active"), this.ycrosshairs !== null && this.ycrosshairs.classList.remove("apexcharts-active"), this.isXAxisTooltipEnabled && this.xaxisTooltip.classList.remove("apexcharts-active"), this.yaxisTooltips.length) {
      this.yaxisTTEls === null && (this.yaxisTTEls = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
      for (var s = 0; s < this.yaxisTTEls.length; s++) this.yaxisTTEls[s].classList.remove("apexcharts-active");
    }
    t.config.legend.tooltipHoverFormatter && this.legendLabels.forEach(function(a) {
      var r = a.getAttribute("data:default-text");
      a.innerHTML = decodeURIComponent(r);
    });
  } }, { key: "markerClick", value: function(e, t, i) {
    var s = this.w;
    typeof s.config.chart.events.markerClick == "function" && s.config.chart.events.markerClick(e, this.ctx, { seriesIndex: t, dataPointIndex: i, w: s }), this.ctx.events.fireEvent("markerClick", [e, this.ctx, { seriesIndex: t, dataPointIndex: i, w: s }]);
  } }, { key: "create", value: function(e, t, i, s, a) {
    var r, o, l, c, h, d, u, g, p, f, x, m, b, w, y, v, k = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, A = this.w, S = t;
    e.type === "mouseup" && this.markerClick(e, i, s), k === null && (k = this.tConfig.shared);
    var C = this.tooltipUtil.hasMarkers(i), L = this.tooltipUtil.getElBars(), P = function() {
      A.globals.markers.largestSize > 0 ? S.marker.enlargePoints(s) : S.tooltipPosition.moveDynamicPointsOnHover(s);
    };
    if (A.config.legend.tooltipHoverFormatter) {
      var R = A.config.legend.tooltipHoverFormatter, I = Array.from(this.legendLabels);
      I.forEach(function(Z) {
        var H = Z.getAttribute("data:default-text");
        Z.innerHTML = decodeURIComponent(H);
      });
      for (var T = 0; T < I.length; T++) {
        var O = I[T], N = parseInt(O.getAttribute("i"), 10), D = decodeURIComponent(O.getAttribute("data:default-text")), Y = R(D, { seriesIndex: k ? N : i, dataPointIndex: s, w: A });
        if (k) O.innerHTML = A.globals.collapsedSeriesIndices.indexOf(N) < 0 ? Y : D;
        else if (O.innerHTML = N === i ? Y : D, i === N) break;
      }
    }
    var X = q(q({ ttItems: a, i, j: s }, ((r = A.globals.seriesRange) === null || r === void 0 || (o = r[i]) === null || o === void 0 || (l = o[s]) === null || l === void 0 || (c = l.y[0]) === null || c === void 0 ? void 0 : c.y1) !== void 0 && { y1: (h = A.globals.seriesRange) === null || h === void 0 || (d = h[i]) === null || d === void 0 || (u = d[s]) === null || u === void 0 || (g = u.y[0]) === null || g === void 0 ? void 0 : g.y1 }), ((p = A.globals.seriesRange) === null || p === void 0 || (f = p[i]) === null || f === void 0 || (x = f[s]) === null || x === void 0 || (m = x.y[0]) === null || m === void 0 ? void 0 : m.y2) !== void 0 && { y2: (b = A.globals.seriesRange) === null || b === void 0 || (w = b[i]) === null || w === void 0 || (y = w[s]) === null || y === void 0 || (v = y.y[0]) === null || v === void 0 ? void 0 : v.y2 });
    if (k) {
      if (S.tooltipLabels.drawSeriesTexts(q(q({}, X), {}, { shared: !this.showOnIntersect && this.tConfig.shared })), C) P();
      else if (this.tooltipUtil.hasBars() && (this.barSeriesHeight = this.tooltipUtil.getBarsHeight(L), this.barSeriesHeight > 0)) {
        var z = new W(this.ctx), F = A.globals.dom.Paper.find(".apexcharts-bar-area[j='".concat(s, "']"));
        this.deactivateHoverFilter(), S.tooltipUtil.getAllMarkers(!0).length && !this.barSeriesHeight && P(), S.tooltipPosition.moveStickyTooltipOverBars(s, i);
        for (var $ = 0; $ < F.length; $++) z.pathMouseEnter(F[$]);
      }
    } else S.tooltipLabels.drawSeriesTexts(q({ shared: !1 }, X)), this.tooltipUtil.hasBars() && S.tooltipPosition.moveStickyTooltipOverBars(s, i), C && S.tooltipPosition.moveMarkers(i, s);
  } }]), n;
}(), Ah = function() {
  function n(e) {
    ee(this, n), this.w = e.w, this.barCtx = e, this.totalFormatter = this.w.config.plotOptions.bar.dataLabels.total.formatter, this.totalFormatter || (this.totalFormatter = this.w.config.dataLabels.formatter);
  }
  return te(n, [{ key: "handleBarDataLabels", value: function(e) {
    var t, i, s = e.x, a = e.y, r = e.y1, o = e.y2, l = e.i, c = e.j, h = e.realIndex, d = e.columnGroupIndex, u = e.series, g = e.barHeight, p = e.barWidth, f = e.barXPosition, x = e.barYPosition, m = e.visibleSeries, b = this.w, w = new W(this.barCtx.ctx), y = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[h] : this.barCtx.strokeWidth;
    b.globals.isXNumeric && !b.globals.isBarHorizontal ? (t = s + parseFloat(p * (m + 1)), i = a + parseFloat(g * (m + 1)) - y) : (t = s + parseFloat(p * m), i = a + parseFloat(g * m));
    var v, k = null, A = s, S = a, C = {}, L = b.config.dataLabels, P = this.barCtx.barOptions.dataLabels, R = this.barCtx.barOptions.dataLabels.total;
    x !== void 0 && this.barCtx.isRangeBar && (i = x, S = x), f !== void 0 && this.barCtx.isVerticalGroupedRangeBar && (t = f, A = f);
    var I = L.offsetX, T = L.offsetY, O = { width: 0, height: 0 };
    if (b.config.dataLabels.enabled) {
      var N = b.globals.series[l][c];
      O = w.getTextRects(b.config.dataLabels.formatter ? b.config.dataLabels.formatter(N, q(q({}, b), {}, { seriesIndex: l, dataPointIndex: c, w: b })) : b.globals.yLabelFormatters[0](N), parseFloat(L.style.fontSize));
    }
    var D = { x: s, y: a, i: l, j: c, realIndex: h, columnGroupIndex: d, bcx: t, bcy: i, barHeight: g, barWidth: p, textRects: O, strokeWidth: y, dataLabelsX: A, dataLabelsY: S, dataLabelsConfig: L, barDataLabelsConfig: P, barTotalDataLabelsConfig: R, offX: I, offY: T };
    return C = this.barCtx.isHorizontal ? this.calculateBarsDataLabelsPosition(D) : this.calculateColumnsDataLabelsPosition(D), v = this.drawCalculatedDataLabels({ x: C.dataLabelsX, y: C.dataLabelsY, val: this.barCtx.isRangeBar ? [r, o] : b.config.chart.stackType === "100%" ? u[h][c] : b.globals.series[h][c], i: h, j: c, barWidth: p, barHeight: g, textRects: O, dataLabelsConfig: L }), b.config.chart.stacked && R.enabled && (k = this.drawTotalDataLabels({ x: C.totalDataLabelsX, y: C.totalDataLabelsY, barWidth: p, barHeight: g, realIndex: h, textAnchor: C.totalDataLabelsAnchor, val: this.getStackedTotalDataLabel({ realIndex: h, j: c }), dataLabelsConfig: L, barTotalDataLabelsConfig: R })), { dataLabelsPos: C, dataLabels: v, totalDataLabels: k };
  } }, { key: "getStackedTotalDataLabel", value: function(e) {
    var t = e.realIndex, i = e.j, s = this.w, a = this.barCtx.stackedSeriesTotals[i];
    return this.totalFormatter && (a = this.totalFormatter(a, q(q({}, s), {}, { seriesIndex: t, dataPointIndex: i, w: s }))), a;
  } }, { key: "calculateColumnsDataLabelsPosition", value: function(e) {
    var t = this, i = this.w, s = e.i, a = e.j, r = e.realIndex;
    e.columnGroupIndex;
    var o, l, c = e.y, h = e.bcx, d = e.barWidth, u = e.barHeight, g = e.textRects, p = e.dataLabelsX, f = e.dataLabelsY, x = e.dataLabelsConfig, m = e.barDataLabelsConfig, b = e.barTotalDataLabelsConfig, w = e.strokeWidth, y = e.offX, v = e.offY, k = h;
    u = Math.abs(u);
    var A = i.config.plotOptions.bar.dataLabels.orientation === "vertical", S = this.barCtx.barHelpers.getZeroValueEncounters({ i: s, j: a }).zeroEncounters;
    h -= w / 2;
    var C = i.globals.gridWidth / i.globals.dataPoints;
    this.barCtx.isVerticalGroupedRangeBar ? p += d / 2 : (p = i.globals.isXNumeric ? h - d / 2 + y : h - C + d / 2 + y, !i.config.chart.stacked && S > 0 && i.config.plotOptions.bar.hideZeroBarsWhenGrouped && (p -= d * S)), A && (p = p + g.height / 2 - w / 2 - 2);
    var L = i.globals.series[s][a] < 0, P = c;
    switch (this.barCtx.isReversed && (P = c + (L ? u : -u)), m.position) {
      case "center":
        f = A ? L ? P - u / 2 + v : P + u / 2 - v : L ? P - u / 2 + g.height / 2 + v : P + u / 2 + g.height / 2 - v;
        break;
      case "bottom":
        f = A ? L ? P - u + v : P + u - v : L ? P - u + g.height + w + v : P + u - g.height / 2 + w - v;
        break;
      case "top":
        f = A ? L ? P + v : P - v : L ? P - g.height / 2 - v : P + g.height + v;
    }
    var R = P;
    if (i.globals.seriesGroups.forEach(function(O) {
      var N;
      (N = t.barCtx[O.join(",")]) === null || N === void 0 || N.prevY.forEach(function(D) {
        R = L ? Math.max(D[a], R) : Math.min(D[a], R);
      });
    }), this.barCtx.lastActiveBarSerieIndex === r && b.enabled) {
      var I = new W(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({ realIndex: r, j: a }), x.fontSize);
      o = L ? R - I.height / 2 - v - b.offsetY + 18 : R + I.height + v + b.offsetY - 18;
      var T = C;
      l = k + (i.globals.isXNumeric ? -d * i.globals.barGroups.length / 2 : i.globals.barGroups.length * d / 2 - (i.globals.barGroups.length - 1) * d - T) + b.offsetX;
    }
    return i.config.chart.stacked || (f < 0 ? f = 0 + w : f + g.height / 3 > i.globals.gridHeight && (f = i.globals.gridHeight - w)), { bcx: h, bcy: c, dataLabelsX: p, dataLabelsY: f, totalDataLabelsX: l, totalDataLabelsY: o, totalDataLabelsAnchor: "middle" };
  } }, { key: "calculateBarsDataLabelsPosition", value: function(e) {
    var t = this, i = this.w, s = e.x, a = e.i, r = e.j, o = e.realIndex, l = e.bcy, c = e.barHeight, h = e.barWidth, d = e.textRects, u = e.dataLabelsX, g = e.strokeWidth, p = e.dataLabelsConfig, f = e.barDataLabelsConfig, x = e.barTotalDataLabelsConfig, m = e.offX, b = e.offY, w = i.globals.gridHeight / i.globals.dataPoints, y = this.barCtx.barHelpers.getZeroValueEncounters({ i: a, j: r }).zeroEncounters;
    h = Math.abs(h);
    var v, k, A = l - (this.barCtx.isRangeBar ? 0 : w) + c / 2 + d.height / 2 + b - 3;
    !i.config.chart.stacked && y > 0 && i.config.plotOptions.bar.hideZeroBarsWhenGrouped && (A -= c * y);
    var S = "start", C = i.globals.series[a][r] < 0, L = s;
    switch (this.barCtx.isReversed && (L = s + (C ? -h : h), S = C ? "start" : "end"), f.position) {
      case "center":
        u = C ? L + h / 2 - m : Math.max(d.width / 2, L - h / 2) + m;
        break;
      case "bottom":
        u = C ? L + h - g - m : L - h + g + m;
        break;
      case "top":
        u = C ? L - g - m : L - g + m;
    }
    var P = L;
    if (i.globals.seriesGroups.forEach(function(I) {
      var T;
      (T = t.barCtx[I.join(",")]) === null || T === void 0 || T.prevX.forEach(function(O) {
        P = C ? Math.min(O[r], P) : Math.max(O[r], P);
      });
    }), this.barCtx.lastActiveBarSerieIndex === o && x.enabled) {
      var R = new W(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({ realIndex: o, j: r }), p.fontSize);
      C ? (v = P - g - m - x.offsetX, S = "end") : v = P + m + x.offsetX + (this.barCtx.isReversed ? -(h + g) : g), k = A - d.height / 2 + R.height / 2 + x.offsetY + g, i.globals.barGroups.length > 1 && (k -= i.globals.barGroups.length / 2 * (c / 2));
    }
    return i.config.chart.stacked || (p.textAnchor === "start" ? u - d.width < 0 ? u = C ? d.width + g : g : u + d.width > i.globals.gridWidth && (u = C ? i.globals.gridWidth - g : i.globals.gridWidth - d.width - g) : p.textAnchor === "middle" ? u - d.width / 2 < 0 ? u = d.width / 2 + g : u + d.width / 2 > i.globals.gridWidth && (u = i.globals.gridWidth - d.width / 2 - g) : p.textAnchor === "end" && (u < 1 ? u = d.width + g : u + 1 > i.globals.gridWidth && (u = i.globals.gridWidth - d.width - g))), { bcx: s, bcy: l, dataLabelsX: u, dataLabelsY: A, totalDataLabelsX: v, totalDataLabelsY: k, totalDataLabelsAnchor: S };
  } }, { key: "drawCalculatedDataLabels", value: function(e) {
    var t = e.x, i = e.y, s = e.val, a = e.i, r = e.j, o = e.textRects, l = e.barHeight, c = e.barWidth, h = e.dataLabelsConfig, d = this.w, u = "rotate(0)";
    d.config.plotOptions.bar.dataLabels.orientation === "vertical" && (u = "rotate(-90, ".concat(t, ", ").concat(i, ")"));
    var g = new jt(this.barCtx.ctx), p = new W(this.barCtx.ctx), f = h.formatter, x = null, m = d.globals.collapsedSeriesIndices.indexOf(a) > -1;
    if (h.enabled && !m) {
      x = p.group({ class: "apexcharts-data-labels", transform: u });
      var b = "";
      s !== void 0 && (b = f(s, q(q({}, d), {}, { seriesIndex: a, dataPointIndex: r, w: d }))), !s && d.config.plotOptions.bar.hideZeroBarsWhenGrouped && (b = "");
      var w = d.globals.series[a][r] < 0, y = d.config.plotOptions.bar.dataLabels.position;
      d.config.plotOptions.bar.dataLabels.orientation === "vertical" && (y === "top" && (h.textAnchor = w ? "end" : "start"), y === "center" && (h.textAnchor = "middle"), y === "bottom" && (h.textAnchor = w ? "end" : "start")), this.barCtx.isRangeBar && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && c < p.getTextRects(b, parseFloat(h.style.fontSize)).width && (b = ""), d.config.chart.stacked && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && (this.barCtx.isHorizontal ? o.width / 1.6 > Math.abs(c) && (b = "") : o.height / 1.6 > Math.abs(l) && (b = ""));
      var v = q({}, h);
      this.barCtx.isHorizontal && s < 0 && (h.textAnchor === "start" ? v.textAnchor = "end" : h.textAnchor === "end" && (v.textAnchor = "start")), g.plotDataLabelsText({ x: t, y: i, text: b, i: a, j: r, parent: x, dataLabelsConfig: v, alwaysDrawDataLabel: !0, offsetCorrection: !0 });
    }
    return x;
  } }, { key: "drawTotalDataLabels", value: function(e) {
    var t = e.x, i = e.y, s = e.val, a = e.realIndex, r = e.textAnchor, o = e.barTotalDataLabelsConfig;
    this.w;
    var l, c = new W(this.barCtx.ctx);
    return o.enabled && t !== void 0 && i !== void 0 && this.barCtx.lastActiveBarSerieIndex === a && (l = c.drawText({ x: t, y: i, foreColor: o.style.color, text: s, textAnchor: r, fontFamily: o.style.fontFamily, fontSize: o.style.fontSize, fontWeight: o.style.fontWeight })), l;
  } }]), n;
}(), Sh = function() {
  function n(e) {
    ee(this, n), this.w = e.w, this.barCtx = e;
  }
  return te(n, [{ key: "initVariables", value: function(e) {
    var t = this.w;
    this.barCtx.series = e, this.barCtx.totalItems = 0, this.barCtx.seriesLen = 0, this.barCtx.visibleI = -1, this.barCtx.visibleItems = 1;
    for (var i = 0; i < e.length; i++) if (e[i].length > 0 && (this.barCtx.seriesLen = this.barCtx.seriesLen + 1, this.barCtx.totalItems += e[i].length), t.globals.isXNumeric) for (var s = 0; s < e[i].length; s++) t.globals.seriesX[i][s] > t.globals.minX && t.globals.seriesX[i][s] < t.globals.maxX && this.barCtx.visibleItems++;
    else this.barCtx.visibleItems = t.globals.dataPoints;
    this.arrBorderRadius = this.createBorderRadiusArr(t.globals.series), _.isSafari() && (this.arrBorderRadius = this.arrBorderRadius.map(function(a) {
      return a.map(function(r) {
        return "none";
      });
    })), this.barCtx.seriesLen === 0 && (this.barCtx.seriesLen = 1), this.barCtx.zeroSerieses = [], t.globals.comboCharts || this.checkZeroSeries({ series: e });
  } }, { key: "initialPositions", value: function(e) {
    var t, i, s, a, r, o, l, c, h = this.w, d = h.globals.dataPoints;
    this.barCtx.isRangeBar && (d = h.globals.labels.length);
    var u = this.barCtx.seriesLen;
    if (h.config.plotOptions.bar.rangeBarGroupRows && (u = 1), this.barCtx.isHorizontal) r = (s = h.globals.gridHeight / d) / u, h.globals.isXNumeric && (r = (s = h.globals.gridHeight / this.barCtx.totalItems) / this.barCtx.seriesLen), r = r * parseInt(this.barCtx.barOptions.barHeight, 10) / 100, String(this.barCtx.barOptions.barHeight).indexOf("%") === -1 && (r = parseInt(this.barCtx.barOptions.barHeight, 10)), c = this.barCtx.baseLineInvertedY + h.globals.padHorizontal + (this.barCtx.isReversed ? h.globals.gridWidth : 0) - (this.barCtx.isReversed ? 2 * this.barCtx.baseLineInvertedY : 0), this.barCtx.isFunnel && (c = h.globals.gridWidth / 2), i = (s - r * this.barCtx.seriesLen) / 2;
    else {
      if (a = h.globals.gridWidth / this.barCtx.visibleItems, h.config.xaxis.convertedCatToNumeric && (a = h.globals.gridWidth / h.globals.dataPoints), o = a / u * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100, h.globals.isXNumeric) {
        var g = this.barCtx.xRatio;
        h.globals.minXDiff && h.globals.minXDiff !== 0.5 && h.globals.minXDiff / g > 0 && (a = h.globals.minXDiff / g), (o = a / u * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100) < 1 && (o = 1);
      }
      String(this.barCtx.barOptions.columnWidth).indexOf("%") === -1 && (o = parseInt(this.barCtx.barOptions.columnWidth, 10)), l = h.globals.gridHeight - this.barCtx.baseLineY[this.barCtx.translationsIndex] - (this.barCtx.isReversed ? h.globals.gridHeight : 0) + (this.barCtx.isReversed ? 2 * this.barCtx.baseLineY[this.barCtx.translationsIndex] : 0), h.globals.isXNumeric ? t = this.barCtx.getBarXForNumericXAxis({ x: t, j: 0, realIndex: e, barWidth: o }).x : t = h.globals.padHorizontal + _.noExponents(a - o * this.barCtx.seriesLen) / 2;
    }
    return h.globals.barHeight = r, h.globals.barWidth = o, { x: t, y: i, yDivision: s, xDivision: a, barHeight: r, barWidth: o, zeroH: l, zeroW: c };
  } }, { key: "initializeStackedPrevVars", value: function(e) {
    e.w.globals.seriesGroups.forEach(function(t) {
      e[t] || (e[t] = {}), e[t].prevY = [], e[t].prevX = [], e[t].prevYF = [], e[t].prevXF = [], e[t].prevYVal = [], e[t].prevXVal = [];
    });
  } }, { key: "initializeStackedXYVars", value: function(e) {
    e.w.globals.seriesGroups.forEach(function(t) {
      e[t] || (e[t] = {}), e[t].xArrj = [], e[t].xArrjF = [], e[t].xArrjVal = [], e[t].yArrj = [], e[t].yArrjF = [], e[t].yArrjVal = [];
    });
  } }, { key: "getPathFillColor", value: function(e, t, i, s) {
    var a, r, o, l, c = this.w, h = this.barCtx.ctx.fill, d = null, u = this.barCtx.barOptions.distributed ? i : t, g = !1;
    return this.barCtx.barOptions.colors.ranges.length > 0 && this.barCtx.barOptions.colors.ranges.map(function(p) {
      e[t][i] >= p.from && e[t][i] <= p.to && (d = p.color, g = !0);
    }), { color: h.fillPath({ seriesNumber: this.barCtx.barOptions.distributed ? u : s, dataPointIndex: i, color: d, value: e[t][i], fillConfig: (a = c.config.series[t].data[i]) === null || a === void 0 ? void 0 : a.fill, fillType: (r = c.config.series[t].data[i]) !== null && r !== void 0 && (o = r.fill) !== null && o !== void 0 && o.type ? (l = c.config.series[t].data[i]) === null || l === void 0 ? void 0 : l.fill.type : Array.isArray(c.config.fill.type) ? c.config.fill.type[s] : c.config.fill.type }), useRangeColor: g };
  } }, { key: "getStrokeWidth", value: function(e, t, i) {
    var s = 0, a = this.w;
    return this.barCtx.series[e][t] === void 0 || this.barCtx.series[e][t] === null ? this.barCtx.isNullValue = !0 : this.barCtx.isNullValue = !1, a.config.stroke.show && (this.barCtx.isNullValue || (s = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[i] : this.barCtx.strokeWidth)), s;
  } }, { key: "createBorderRadiusArr", value: function(e) {
    var t, i = this.w, s = !this.w.config.chart.stacked || i.config.plotOptions.bar.borderRadius <= 0, a = e.length, r = 0 | ((t = e[0]) === null || t === void 0 ? void 0 : t.length), o = Array.from({ length: a }, function() {
      return Array(r).fill(s ? "top" : "none");
    });
    if (s) return o;
    for (var l = 0; l < r; l++) {
      for (var c = [], h = [], d = 0, u = 0; u < a; u++) {
        var g = e[u][l];
        g > 0 ? (c.push(u), d++) : g < 0 && (h.push(u), d++);
      }
      if (c.length > 0 && h.length === 0) if (c.length === 1) o[c[0]][l] = "both";
      else {
        var p, f = c[0], x = c[c.length - 1], m = si(c);
        try {
          for (m.s(); !(p = m.n()).done; ) {
            var b = p.value;
            o[b][l] = b === f ? "bottom" : b === x ? "top" : "none";
          }
        } catch (N) {
          m.e(N);
        } finally {
          m.f();
        }
      }
      else if (h.length > 0 && c.length === 0) if (h.length === 1) o[h[0]][l] = "both";
      else {
        var w, y = Math.max.apply(Math, h), v = Math.min.apply(Math, h), k = si(h);
        try {
          for (k.s(); !(w = k.n()).done; ) {
            var A = w.value;
            o[A][l] = A === y ? "bottom" : A === v ? "top" : "none";
          }
        } catch (N) {
          k.e(N);
        } finally {
          k.f();
        }
      }
      else if (c.length > 0 && h.length > 0) {
        var S, C = c[c.length - 1], L = si(c);
        try {
          for (L.s(); !(S = L.n()).done; ) {
            var P = S.value;
            o[P][l] = P === C ? "top" : "none";
          }
        } catch (N) {
          L.e(N);
        } finally {
          L.f();
        }
        var R, I = Math.max.apply(Math, h), T = si(h);
        try {
          for (T.s(); !(R = T.n()).done; ) {
            var O = R.value;
            o[O][l] = O === I ? "bottom" : "none";
          }
        } catch (N) {
          T.e(N);
        } finally {
          T.f();
        }
      } else d === 1 && (o[c[0] || h[0]][l] = "both");
    }
    return o;
  } }, { key: "barBackground", value: function(e) {
    var t = e.j, i = e.i, s = e.x1, a = e.x2, r = e.y1, o = e.y2, l = e.elSeries, c = this.w, h = new W(this.barCtx.ctx), d = new st(this.barCtx.ctx).getActiveConfigSeriesIndex();
    if (this.barCtx.barOptions.colors.backgroundBarColors.length > 0 && d === i) {
      t >= this.barCtx.barOptions.colors.backgroundBarColors.length && (t %= this.barCtx.barOptions.colors.backgroundBarColors.length);
      var u = this.barCtx.barOptions.colors.backgroundBarColors[t], g = h.drawRect(s !== void 0 ? s : 0, r !== void 0 ? r : 0, a !== void 0 ? a : c.globals.gridWidth, o !== void 0 ? o : c.globals.gridHeight, this.barCtx.barOptions.colors.backgroundBarRadius, u, this.barCtx.barOptions.colors.backgroundBarOpacity);
      l.add(g), g.node.classList.add("apexcharts-backgroundBar");
    }
  } }, { key: "getColumnPaths", value: function(e) {
    var t, i = e.barWidth, s = e.barXPosition, a = e.y1, r = e.y2, o = e.strokeWidth, l = e.isReversed, c = e.series, h = e.seriesGroup, d = e.realIndex, u = e.i, g = e.j, p = e.w, f = new W(this.barCtx.ctx);
    (o = Array.isArray(o) ? o[d] : o) || (o = 0);
    var x = i, m = s;
    (t = p.config.series[d].data[g]) !== null && t !== void 0 && t.columnWidthOffset && (m = s - p.config.series[d].data[g].columnWidthOffset / 2, x = i + p.config.series[d].data[g].columnWidthOffset);
    var b = o / 2, w = m + b, y = m + x - b, v = (c[u][g] >= 0 ? 1 : -1) * (l ? -1 : 1);
    a += 1e-3 - b * v, r += 1e-3 + b * v;
    var k = f.move(w, a), A = f.move(w, a), S = f.line(y, a);
    if (p.globals.previousPaths.length > 0 && (A = this.barCtx.getPreviousPath(d, g, !1)), k = k + f.line(w, r) + f.line(y, r) + S + (p.config.plotOptions.bar.borderRadiusApplication === "around" || this.arrBorderRadius[d][g] === "both" ? " Z" : " z"), A = A + f.line(w, a) + S + S + S + S + S + f.line(w, a) + (p.config.plotOptions.bar.borderRadiusApplication === "around" || this.arrBorderRadius[d][g] === "both" ? " Z" : " z"), this.arrBorderRadius[d][g] !== "none" && (k = f.roundPathCorners(k, p.config.plotOptions.bar.borderRadius)), p.config.chart.stacked) {
      var C = this.barCtx;
      (C = this.barCtx[h]).yArrj.push(r - b * v), C.yArrjF.push(Math.abs(a - r + o * v)), C.yArrjVal.push(this.barCtx.series[u][g]);
    }
    return { pathTo: k, pathFrom: A };
  } }, { key: "getBarpaths", value: function(e) {
    var t, i = e.barYPosition, s = e.barHeight, a = e.x1, r = e.x2, o = e.strokeWidth, l = e.isReversed, c = e.series, h = e.seriesGroup, d = e.realIndex, u = e.i, g = e.j, p = e.w, f = new W(this.barCtx.ctx);
    (o = Array.isArray(o) ? o[d] : o) || (o = 0);
    var x = i, m = s;
    (t = p.config.series[d].data[g]) !== null && t !== void 0 && t.barHeightOffset && (x = i - p.config.series[d].data[g].barHeightOffset / 2, m = s + p.config.series[d].data[g].barHeightOffset);
    var b = o / 2, w = x + b, y = x + m - b, v = (c[u][g] >= 0 ? 1 : -1) * (l ? -1 : 1);
    a += 1e-3 + b * v, r += 1e-3 - b * v;
    var k = f.move(a, w), A = f.move(a, w);
    p.globals.previousPaths.length > 0 && (A = this.barCtx.getPreviousPath(d, g, !1));
    var S = f.line(a, y);
    if (k = k + f.line(r, w) + f.line(r, y) + S + (p.config.plotOptions.bar.borderRadiusApplication === "around" || this.arrBorderRadius[d][g] === "both" ? " Z" : " z"), A = A + f.line(a, w) + S + S + S + S + S + f.line(a, w) + (p.config.plotOptions.bar.borderRadiusApplication === "around" || this.arrBorderRadius[d][g] === "both" ? " Z" : " z"), this.arrBorderRadius[d][g] !== "none" && (k = f.roundPathCorners(k, p.config.plotOptions.bar.borderRadius)), p.config.chart.stacked) {
      var C = this.barCtx;
      (C = this.barCtx[h]).xArrj.push(r + b * v), C.xArrjF.push(Math.abs(a - r - o * v)), C.xArrjVal.push(this.barCtx.series[u][g]);
    }
    return { pathTo: k, pathFrom: A };
  } }, { key: "checkZeroSeries", value: function(e) {
    for (var t = e.series, i = this.w, s = 0; s < t.length; s++) {
      for (var a = 0, r = 0; r < t[i.globals.maxValsInArrayIndex].length; r++) a += t[s][r];
      a === 0 && this.barCtx.zeroSerieses.push(s);
    }
  } }, { key: "getXForValue", value: function(e, t) {
    var i = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2] ? t : null;
    return e != null && (i = t + e / this.barCtx.invertedYRatio - 2 * (this.barCtx.isReversed ? e / this.barCtx.invertedYRatio : 0)), i;
  } }, { key: "getYForValue", value: function(e, t, i) {
    var s = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3] ? t : null;
    return e != null && (s = t - e / this.barCtx.yRatio[i] + 2 * (this.barCtx.isReversed ? e / this.barCtx.yRatio[i] : 0)), s;
  } }, { key: "getGoalValues", value: function(e, t, i, s, a, r) {
    var o = this, l = this.w, c = [], h = function(g, p) {
      var f;
      c.push((_i(f = {}, e, e === "x" ? o.getXForValue(g, t, !1) : o.getYForValue(g, i, r, !1)), _i(f, "attrs", p), f));
    };
    if (l.globals.seriesGoals[s] && l.globals.seriesGoals[s][a] && Array.isArray(l.globals.seriesGoals[s][a]) && l.globals.seriesGoals[s][a].forEach(function(g) {
      h(g.value, g);
    }), this.barCtx.barOptions.isDumbbell && l.globals.seriesRange.length) {
      var d = this.barCtx.barOptions.dumbbellColors ? this.barCtx.barOptions.dumbbellColors : l.globals.colors, u = { strokeHeight: e === "x" ? 0 : l.globals.markers.size[s], strokeWidth: e === "x" ? l.globals.markers.size[s] : 0, strokeDashArray: 0, strokeLineCap: "round", strokeColor: Array.isArray(d[s]) ? d[s][0] : d[s] };
      h(l.globals.seriesRangeStart[s][a], u), h(l.globals.seriesRangeEnd[s][a], q(q({}, u), {}, { strokeColor: Array.isArray(d[s]) ? d[s][1] : d[s] }));
    }
    return c;
  } }, { key: "drawGoalLine", value: function(e) {
    var t = e.barXPosition, i = e.barYPosition, s = e.goalX, a = e.goalY, r = e.barWidth, o = e.barHeight, l = new W(this.barCtx.ctx), c = l.group({ className: "apexcharts-bar-goals-groups" });
    c.node.classList.add("apexcharts-element-hidden"), this.barCtx.w.globals.delayedElements.push({ el: c.node }), c.attr("clip-path", "url(#gridRectMarkerMask".concat(this.barCtx.w.globals.cuid, ")"));
    var h = null;
    return this.barCtx.isHorizontal ? Array.isArray(s) && s.forEach(function(d) {
      if (d.x >= -1 && d.x <= l.w.globals.gridWidth + 1) {
        var u = d.attrs.strokeHeight !== void 0 ? d.attrs.strokeHeight : o / 2, g = i + u + o / 2;
        h = l.drawLine(d.x, g - 2 * u, d.x, g, d.attrs.strokeColor ? d.attrs.strokeColor : void 0, d.attrs.strokeDashArray, d.attrs.strokeWidth ? d.attrs.strokeWidth : 2, d.attrs.strokeLineCap), c.add(h);
      }
    }) : Array.isArray(a) && a.forEach(function(d) {
      if (d.y >= -1 && d.y <= l.w.globals.gridHeight + 1) {
        var u = d.attrs.strokeWidth !== void 0 ? d.attrs.strokeWidth : r / 2, g = t + u + r / 2;
        h = l.drawLine(g - 2 * u, d.y, g, d.y, d.attrs.strokeColor ? d.attrs.strokeColor : void 0, d.attrs.strokeDashArray, d.attrs.strokeHeight ? d.attrs.strokeHeight : 2, d.attrs.strokeLineCap), c.add(h);
      }
    }), c;
  } }, { key: "drawBarShadow", value: function(e) {
    var t = e.prevPaths, i = e.currPaths, s = e.color, a = this.w, r = t.x, o = t.x1, l = t.barYPosition, c = i.x, h = i.x1, d = i.barYPosition, u = l + i.barHeight, g = new W(this.barCtx.ctx), p = new _(), f = g.move(o, u) + g.line(r, u) + g.line(c, d) + g.line(h, d) + g.line(o, u) + (a.config.plotOptions.bar.borderRadiusApplication === "around" || this.arrBorderRadius[realIndex][j] === "both" ? " Z" : " z");
    return g.drawPath({ d: f, fill: p.shadeColor(0.5, _.rgb2hex(s)), stroke: "none", strokeWidth: 0, fillOpacity: 1, classes: "apexcharts-bar-shadow apexcharts-decoration-element" });
  } }, { key: "getZeroValueEncounters", value: function(e) {
    var t, i = e.i, s = e.j, a = this.w, r = 0, o = 0;
    return (a.config.plotOptions.bar.horizontal ? a.globals.series.map(function(l, c) {
      return c;
    }) : ((t = a.globals.columnSeries) === null || t === void 0 ? void 0 : t.i.map(function(l) {
      return l;
    })) || []).forEach(function(l) {
      var c = a.globals.seriesPercent[l][s];
      c && r++, l < i && c === 0 && o++;
    }), { nonZeroColumns: r, zeroEncounters: o };
  } }, { key: "getGroupIndex", value: function(e) {
    var t = this.w, i = t.globals.seriesGroups.findIndex(function(r) {
      return r.indexOf(t.globals.seriesNames[e]) > -1;
    }), s = this.barCtx.columnGroupIndices, a = s.indexOf(i);
    return a < 0 && (s.push(i), a = s.length - 1), { groupIndex: i, columnGroupIndex: a };
  } }]), n;
}(), Wt = function() {
  function n(e, t) {
    ee(this, n), this.ctx = e, this.w = e.w;
    var i = this.w;
    this.barOptions = i.config.plotOptions.bar, this.isHorizontal = this.barOptions.horizontal, this.strokeWidth = i.config.stroke.width, this.isNullValue = !1, this.isRangeBar = i.globals.seriesRange.length && this.isHorizontal, this.isVerticalGroupedRangeBar = !i.globals.isBarHorizontal && i.globals.seriesRange.length && i.config.plotOptions.bar.rangeBarGroupRows, this.isFunnel = this.barOptions.isFunnel, this.xyRatios = t, this.xyRatios !== null && (this.xRatio = t.xRatio, this.yRatio = t.yRatio, this.invertedXRatio = t.invertedXRatio, this.invertedYRatio = t.invertedYRatio, this.baseLineY = t.baseLineY, this.baseLineInvertedY = t.baseLineInvertedY), this.yaxisIndex = 0, this.translationsIndex = 0, this.seriesLen = 0, this.pathArr = [];
    var s = new st(this.ctx);
    this.lastActiveBarSerieIndex = s.getActiveConfigSeriesIndex("desc", ["bar", "column"]), this.columnGroupIndices = [];
    var a = s.getBarSeriesIndices(), r = new Oe(this.ctx);
    this.stackedSeriesTotals = r.getStackedSeriesTotals(this.w.config.series.map(function(o, l) {
      return a.indexOf(l) === -1 ? l : -1;
    }).filter(function(o) {
      return o !== -1;
    })), this.barHelpers = new Sh(this);
  }
  return te(n, [{ key: "draw", value: function(e, t) {
    var i = this.w, s = new W(this.ctx), a = new Oe(this.ctx, i);
    e = a.getLogSeries(e), this.series = e, this.yRatio = a.getLogYRatios(this.yRatio), this.barHelpers.initVariables(e);
    var r = s.group({ class: "apexcharts-bar-series apexcharts-plot-series" });
    i.config.dataLabels.enabled && this.totalItems > this.barOptions.dataLabels.maxItems && console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering - ApexCharts");
    for (var o = 0, l = 0; o < e.length; o++, l++) {
      var c, h, d, u, g = void 0, p = void 0, f = [], x = [], m = i.globals.comboCharts ? t[o] : o, b = this.barHelpers.getGroupIndex(m).columnGroupIndex, w = s.group({ class: "apexcharts-series", rel: o + 1, seriesName: _.escapeString(i.globals.seriesNames[m]), "data:realIndex": m });
      this.ctx.series.addCollapsedClassToSeries(w, m), e[o].length > 0 && (this.visibleI = this.visibleI + 1);
      var y = 0, v = 0;
      this.yRatio.length > 1 && (this.yaxisIndex = i.globals.seriesYAxisReverseMap[m], this.translationsIndex = m);
      var k = this.translationsIndex;
      this.isReversed = i.config.yaxis[this.yaxisIndex] && i.config.yaxis[this.yaxisIndex].reversed;
      var A = this.barHelpers.initialPositions(m);
      p = A.y, y = A.barHeight, h = A.yDivision, u = A.zeroW, g = A.x, v = A.barWidth, c = A.xDivision, d = A.zeroH, this.isHorizontal || x.push(g + v / 2);
      var S = s.group({ class: "apexcharts-datalabels", "data:realIndex": m });
      i.globals.delayedElements.push({ el: S.node }), S.node.classList.add("apexcharts-element-hidden");
      var C = s.group({ class: "apexcharts-bar-goals-markers" }), L = s.group({ class: "apexcharts-bar-shadows" });
      i.globals.delayedElements.push({ el: L.node }), L.node.classList.add("apexcharts-element-hidden");
      for (var P = 0; P < e[o].length; P++) {
        var R = this.barHelpers.getStrokeWidth(o, P, m), I = null, T = { indexes: { i: o, j: P, realIndex: m, translationsIndex: k, bc: l }, x: g, y: p, strokeWidth: R, elSeries: w };
        this.isHorizontal ? (I = this.drawBarPaths(q(q({}, T), {}, { barHeight: y, zeroW: u, yDivision: h })), v = this.series[o][P] / this.invertedYRatio) : (I = this.drawColumnPaths(q(q({}, T), {}, { xDivision: c, barWidth: v, zeroH: d })), y = this.series[o][P] / this.yRatio[k]);
        var O = this.barHelpers.getPathFillColor(e, o, P, m);
        if (this.isFunnel && this.barOptions.isFunnel3d && this.pathArr.length && P > 0) {
          var N, D = this.barHelpers.drawBarShadow({ color: typeof O.color == "string" && ((N = O.color) === null || N === void 0 ? void 0 : N.indexOf("url")) === -1 ? O.color : _.hexToRgba(i.globals.colors[o]), prevPaths: this.pathArr[this.pathArr.length - 1], currPaths: I });
          L.add(D), i.config.chart.dropShadow.enabled && new Fe(this.ctx).dropShadow(D, i.config.chart.dropShadow, m);
        }
        this.pathArr.push(I);
        var Y = this.barHelpers.drawGoalLine({ barXPosition: I.barXPosition, barYPosition: I.barYPosition, goalX: I.goalX, goalY: I.goalY, barHeight: y, barWidth: v });
        Y && C.add(Y), p = I.y, g = I.x, P > 0 && x.push(g + v / 2), f.push(p), this.renderSeries(q(q({ realIndex: m, pathFill: O.color }, O.useRangeColor ? { lineFill: O.color } : {}), {}, { j: P, i: o, columnGroupIndex: b, pathFrom: I.pathFrom, pathTo: I.pathTo, strokeWidth: R, elSeries: w, x: g, y: p, series: e, barHeight: Math.abs(I.barHeight ? I.barHeight : y), barWidth: Math.abs(I.barWidth ? I.barWidth : v), elDataLabelsWrap: S, elGoalsMarkers: C, elBarShadows: L, visibleSeries: this.visibleI, type: "bar" }));
      }
      i.globals.seriesXvalues[m] = x, i.globals.seriesYvalues[m] = f, r.add(w);
    }
    return r;
  } }, { key: "renderSeries", value: function(e) {
    var t = e.realIndex, i = e.pathFill, s = e.lineFill, a = e.j, r = e.i, o = e.columnGroupIndex, l = e.pathFrom, c = e.pathTo, h = e.strokeWidth, d = e.elSeries, u = e.x, g = e.y, p = e.y1, f = e.y2, x = e.series, m = e.barHeight, b = e.barWidth, w = e.barXPosition, y = e.barYPosition, v = e.elDataLabelsWrap, k = e.elGoalsMarkers, A = e.elBarShadows, S = e.visibleSeries, C = e.type, L = e.classes, P = this.w, R = new W(this.ctx), I = !1;
    if (!s) {
      var T = typeof P.globals.stroke.colors[t] == "function" ? function(X) {
        var z, F = P.config.stroke.colors;
        return Array.isArray(F) && F.length > 0 && ((z = F[X]) || (z = ""), typeof z == "function") ? z({ value: P.globals.series[X][a], dataPointIndex: a, w: P }) : z;
      }(t) : P.globals.stroke.colors[t];
      s = this.barOptions.distributed ? P.globals.stroke.colors[a] : T;
    }
    var O = new Ah(this).handleBarDataLabels({ x: u, y: g, y1: p, y2: f, i: r, j: a, series: x, realIndex: t, columnGroupIndex: o, barHeight: m, barWidth: b, barXPosition: w, barYPosition: y, visibleSeries: S });
    P.globals.isBarHorizontal || (O.dataLabelsPos.dataLabelsX + b < 0 || O.dataLabelsPos.dataLabelsX - b > P.globals.gridWidth) && (I = !0), P.config.series[r].data[a] && P.config.series[r].data[a].strokeColor && (s = P.config.series[r].data[a].strokeColor), this.isNullValue && (i = "none");
    var N = a / P.config.chart.animations.animateGradually.delay * (P.config.chart.animations.speed / P.globals.dataPoints) / 2.4;
    if (!I) {
      var D = R.renderPaths({ i: r, j: a, realIndex: t, pathFrom: l, pathTo: c, stroke: s, strokeWidth: h, strokeLineCap: P.config.stroke.lineCap, fill: i, animationDelay: N, initialSpeed: P.config.chart.animations.speed, dataChangeSpeed: P.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-".concat(C, "-area ").concat(L), chartType: C });
      D.attr("clip-path", "url(#gridRectBarMask".concat(P.globals.cuid, ")"));
      var Y = P.config.forecastDataPoints;
      Y.count > 0 && a >= P.globals.dataPoints - Y.count && (D.node.setAttribute("stroke-dasharray", Y.dashArray), D.node.setAttribute("stroke-width", Y.strokeWidth), D.node.setAttribute("fill-opacity", Y.fillOpacity)), p !== void 0 && f !== void 0 && (D.attr("data-range-y1", p), D.attr("data-range-y2", f)), new Fe(this.ctx).setSelectionFilter(D, t, a), d.add(D), D.attr({ cy: O.dataLabelsPos.bcy, cx: O.dataLabelsPos.bcx, j: a, val: P.globals.series[r][a], barHeight: m, barWidth: b }), O.dataLabels !== null && v.add(O.dataLabels), O.totalDataLabels && v.add(O.totalDataLabels), d.add(v), k && d.add(k), A && d.add(A);
    }
    return d;
  } }, { key: "drawBarPaths", value: function(e) {
    var t, i = e.indexes, s = e.barHeight, a = e.strokeWidth, r = e.zeroW, o = e.x, l = e.y, c = e.yDivision, h = e.elSeries, d = this.w, u = i.i, g = i.j;
    if (d.globals.isXNumeric) t = (l = (d.globals.seriesX[u][g] - d.globals.minX) / this.invertedXRatio - s) + s * this.visibleI;
    else if (d.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
      var p = this.barHelpers.getZeroValueEncounters({ i: u, j: g }), f = p.nonZeroColumns, x = p.zeroEncounters;
      f > 0 && (s = this.seriesLen * s / f), t = l + s * this.visibleI, t -= s * x;
    } else t = l + s * this.visibleI;
    this.isFunnel && (r -= (this.barHelpers.getXForValue(this.series[u][g], r) - r) / 2), o = this.barHelpers.getXForValue(this.series[u][g], r);
    var m = this.barHelpers.getBarpaths({ barYPosition: t, barHeight: s, x1: r, x2: o, strokeWidth: a, isReversed: this.isReversed, series: this.series, realIndex: i.realIndex, i: u, j: g, w: d });
    return d.globals.isXNumeric || (l += c), this.barHelpers.barBackground({ j: g, i: u, y1: t - s * this.visibleI, y2: s * this.seriesLen, elSeries: h }), { pathTo: m.pathTo, pathFrom: m.pathFrom, x1: r, x: o, y: l, goalX: this.barHelpers.getGoalValues("x", r, null, u, g), barYPosition: t, barHeight: s };
  } }, { key: "drawColumnPaths", value: function(e) {
    var t, i = e.indexes, s = e.x, a = e.y, r = e.xDivision, o = e.barWidth, l = e.zeroH, c = e.strokeWidth, h = e.elSeries, d = this.w, u = i.realIndex, g = i.translationsIndex, p = i.i, f = i.j, x = i.bc;
    if (d.globals.isXNumeric) {
      var m = this.getBarXForNumericXAxis({ x: s, j: f, realIndex: u, barWidth: o });
      s = m.x, t = m.barXPosition;
    } else if (d.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
      var b = this.barHelpers.getZeroValueEncounters({ i: p, j: f }), w = b.nonZeroColumns, y = b.zeroEncounters;
      w > 0 && (o = this.seriesLen * o / w), t = s + o * this.visibleI, t -= o * y;
    } else t = s + o * this.visibleI;
    a = this.barHelpers.getYForValue(this.series[p][f], l, g);
    var v = this.barHelpers.getColumnPaths({ barXPosition: t, barWidth: o, y1: l, y2: a, strokeWidth: c, isReversed: this.isReversed, series: this.series, realIndex: u, i: p, j: f, w: d });
    return d.globals.isXNumeric || (s += r), this.barHelpers.barBackground({ bc: x, j: f, i: p, x1: t - c / 2 - o * this.visibleI, x2: o * this.seriesLen + c / 2, elSeries: h }), { pathTo: v.pathTo, pathFrom: v.pathFrom, x: s, y: a, goalY: this.barHelpers.getGoalValues("y", null, l, p, f, g), barXPosition: t, barWidth: o };
  } }, { key: "getBarXForNumericXAxis", value: function(e) {
    var t = e.x, i = e.barWidth, s = e.realIndex, a = e.j, r = this.w, o = s;
    return r.globals.seriesX[s].length || (o = r.globals.maxValsInArrayIndex), _.isNumber(r.globals.seriesX[o][a]) && (t = (r.globals.seriesX[o][a] - r.globals.minX) / this.xRatio - i * this.seriesLen / 2), { barXPosition: t + i * this.visibleI, x: t };
  } }, { key: "getPreviousPath", value: function(e, t) {
    for (var i = this.w, s = "M 0 0", a = 0; a < i.globals.previousPaths.length; a++) {
      var r = i.globals.previousPaths[a];
      r.paths && r.paths.length > 0 && parseInt(r.realIndex, 10) === parseInt(e, 10) && i.globals.previousPaths[a].paths[t] !== void 0 && (s = i.globals.previousPaths[a].paths[t].d);
    }
    return s;
  } }]), n;
}(), br = function(n) {
  mi(t, Wt);
  var e = xi(t);
  function t() {
    return ee(this, t), e.apply(this, arguments);
  }
  return te(t, [{ key: "draw", value: function(i, s) {
    var a = this, r = this.w;
    this.graphics = new W(this.ctx), this.bar = new Wt(this.ctx, this.xyRatios);
    var o = new Oe(this.ctx, r);
    i = o.getLogSeries(i), this.yRatio = o.getLogYRatios(this.yRatio), this.barHelpers.initVariables(i), r.config.chart.stackType === "100%" && (i = r.globals.comboCharts ? s.map(function(p) {
      return r.globals.seriesPercent[p];
    }) : r.globals.seriesPercent.slice()), this.series = i, this.barHelpers.initializeStackedPrevVars(this);
    for (var l = this.graphics.group({ class: "apexcharts-bar-series apexcharts-plot-series" }), c = 0, h = 0, d = function(p, f) {
      var x = void 0, m = void 0, b = void 0, w = void 0, y = r.globals.comboCharts ? s[p] : p, v = a.barHelpers.getGroupIndex(y), k = v.groupIndex, A = v.columnGroupIndex;
      a.groupCtx = a[r.globals.seriesGroups[k]];
      var S = [], C = [], L = 0;
      a.yRatio.length > 1 && (a.yaxisIndex = r.globals.seriesYAxisReverseMap[y][0], L = y), a.isReversed = r.config.yaxis[a.yaxisIndex] && r.config.yaxis[a.yaxisIndex].reversed;
      var P = a.graphics.group({ class: "apexcharts-series", seriesName: _.escapeString(r.globals.seriesNames[y]), rel: p + 1, "data:realIndex": y });
      a.ctx.series.addCollapsedClassToSeries(P, y);
      var R = a.graphics.group({ class: "apexcharts-datalabels", "data:realIndex": y }), I = a.graphics.group({ class: "apexcharts-bar-goals-markers" }), T = 0, O = 0, N = a.initialPositions(c, h, x, m, b, w, L);
      h = N.y, T = N.barHeight, m = N.yDivision, w = N.zeroW, c = N.x, O = N.barWidth, x = N.xDivision, b = N.zeroH, r.globals.barHeight = T, r.globals.barWidth = O, a.barHelpers.initializeStackedXYVars(a), a.groupCtx.prevY.length === 1 && a.groupCtx.prevY[0].every(function(J) {
        return isNaN(J);
      }) && (a.groupCtx.prevY[0] = a.groupCtx.prevY[0].map(function() {
        return b;
      }), a.groupCtx.prevYF[0] = a.groupCtx.prevYF[0].map(function() {
        return 0;
      }));
      for (var D = 0; D < r.globals.dataPoints; D++) {
        var Y = a.barHelpers.getStrokeWidth(p, D, y), X = { indexes: { i: p, j: D, realIndex: y, translationsIndex: L, bc: f }, strokeWidth: Y, x: c, y: h, elSeries: P, columnGroupIndex: A, seriesGroup: r.globals.seriesGroups[k] }, z = null;
        a.isHorizontal ? (z = a.drawStackedBarPaths(q(q({}, X), {}, { zeroW: w, barHeight: T, yDivision: m })), O = a.series[p][D] / a.invertedYRatio) : (z = a.drawStackedColumnPaths(q(q({}, X), {}, { xDivision: x, barWidth: O, zeroH: b })), T = a.series[p][D] / a.yRatio[L]);
        var F = a.barHelpers.drawGoalLine({ barXPosition: z.barXPosition, barYPosition: z.barYPosition, goalX: z.goalX, goalY: z.goalY, barHeight: T, barWidth: O });
        F && I.add(F), h = z.y, c = z.x, S.push(c), C.push(h);
        var $ = a.barHelpers.getPathFillColor(i, p, D, y), Z = "", H = r.globals.isBarHorizontal ? "apexcharts-flip-x" : "apexcharts-flip-y";
        (a.barHelpers.arrBorderRadius[y][D] === "bottom" && r.globals.series[y][D] > 0 || a.barHelpers.arrBorderRadius[y][D] === "top" && r.globals.series[y][D] < 0) && (Z = H), P = a.renderSeries(q(q({ realIndex: y, pathFill: $.color }, $.useRangeColor ? { lineFill: $.color } : {}), {}, { j: D, i: p, columnGroupIndex: A, pathFrom: z.pathFrom, pathTo: z.pathTo, strokeWidth: Y, elSeries: P, x: c, y: h, series: i, barHeight: T, barWidth: O, elDataLabelsWrap: R, elGoalsMarkers: I, type: "bar", visibleSeries: A, classes: Z }));
      }
      r.globals.seriesXvalues[y] = S, r.globals.seriesYvalues[y] = C, a.groupCtx.prevY.push(a.groupCtx.yArrj), a.groupCtx.prevYF.push(a.groupCtx.yArrjF), a.groupCtx.prevYVal.push(a.groupCtx.yArrjVal), a.groupCtx.prevX.push(a.groupCtx.xArrj), a.groupCtx.prevXF.push(a.groupCtx.xArrjF), a.groupCtx.prevXVal.push(a.groupCtx.xArrjVal), l.add(P);
    }, u = 0, g = 0; u < i.length; u++, g++) d(u, g);
    return l;
  } }, { key: "initialPositions", value: function(i, s, a, r, o, l, c) {
    var h, d, u = this.w;
    if (this.isHorizontal) {
      r = u.globals.gridHeight / u.globals.dataPoints;
      var g = u.config.plotOptions.bar.barHeight;
      h = String(g).indexOf("%") === -1 ? parseInt(g, 10) : r * parseInt(g, 10) / 100, l = u.globals.padHorizontal + (this.isReversed ? u.globals.gridWidth - this.baseLineInvertedY : this.baseLineInvertedY), s = (r - h) / 2;
    } else {
      d = a = u.globals.gridWidth / u.globals.dataPoints;
      var p = u.config.plotOptions.bar.columnWidth;
      u.globals.isXNumeric && u.globals.dataPoints > 1 ? d = (a = u.globals.minXDiff / this.xRatio) * parseInt(this.barOptions.columnWidth, 10) / 100 : String(p).indexOf("%") === -1 ? d = parseInt(p, 10) : d *= parseInt(p, 10) / 100, o = this.isReversed ? this.baseLineY[c] : u.globals.gridHeight - this.baseLineY[c], i = u.globals.padHorizontal + (a - d) / 2;
    }
    var f = u.globals.barGroups.length || 1;
    return { x: i, y: s, yDivision: r, xDivision: a, barHeight: h / f, barWidth: d / f, zeroH: o, zeroW: l };
  } }, { key: "drawStackedBarPaths", value: function(i) {
    for (var s, a = i.indexes, r = i.barHeight, o = i.strokeWidth, l = i.zeroW, c = i.x, h = i.y, d = i.columnGroupIndex, u = i.seriesGroup, g = i.yDivision, p = i.elSeries, f = this.w, x = h + d * r, m = a.i, b = a.j, w = a.realIndex, y = a.translationsIndex, v = 0, k = 0; k < this.groupCtx.prevXF.length; k++) v += this.groupCtx.prevXF[k][b];
    var A = m;
    if (f.config.series[w].name && (A = u.indexOf(f.config.series[w].name)), A > 0) {
      var S = l;
      this.groupCtx.prevXVal[A - 1][b] < 0 ? S = this.series[m][b] >= 0 ? this.groupCtx.prevX[A - 1][b] + v - 2 * (this.isReversed ? v : 0) : this.groupCtx.prevX[A - 1][b] : this.groupCtx.prevXVal[A - 1][b] >= 0 && (S = this.series[m][b] >= 0 ? this.groupCtx.prevX[A - 1][b] : this.groupCtx.prevX[A - 1][b] - v + 2 * (this.isReversed ? v : 0)), s = S;
    } else s = l;
    c = this.series[m][b] === null ? s : s + this.series[m][b] / this.invertedYRatio - 2 * (this.isReversed ? this.series[m][b] / this.invertedYRatio : 0);
    var C = this.barHelpers.getBarpaths({ barYPosition: x, barHeight: r, x1: s, x2: c, strokeWidth: o, isReversed: this.isReversed, series: this.series, realIndex: a.realIndex, seriesGroup: u, i: m, j: b, w: f });
    return this.barHelpers.barBackground({ j: b, i: m, y1: x, y2: r, elSeries: p }), h += g, { pathTo: C.pathTo, pathFrom: C.pathFrom, goalX: this.barHelpers.getGoalValues("x", l, null, m, b, y), barXPosition: s, barYPosition: x, x: c, y: h };
  } }, { key: "drawStackedColumnPaths", value: function(i) {
    var s = i.indexes, a = i.x, r = i.y, o = i.xDivision, l = i.barWidth, c = i.zeroH, h = i.columnGroupIndex, d = i.seriesGroup, u = i.elSeries, g = this.w, p = s.i, f = s.j, x = s.bc, m = s.realIndex, b = s.translationsIndex;
    if (g.globals.isXNumeric) {
      var w = g.globals.seriesX[m][f];
      w || (w = 0), a = (w - g.globals.minX) / this.xRatio - l / 2 * g.globals.barGroups.length;
    }
    for (var y, v = a + h * l, k = 0, A = 0; A < this.groupCtx.prevYF.length; A++) k += isNaN(this.groupCtx.prevYF[A][f]) ? 0 : this.groupCtx.prevYF[A][f];
    var S = p;
    if (d && (S = d.indexOf(g.globals.seriesNames[m])), S > 0 && !g.globals.isXNumeric || S > 0 && g.globals.isXNumeric && g.globals.seriesX[m - 1][f] === g.globals.seriesX[m][f]) {
      var C, L, P, R = Math.min(this.yRatio.length + 1, m + 1);
      if (this.groupCtx.prevY[S - 1] !== void 0 && this.groupCtx.prevY[S - 1].length) for (var I = 1; I < R; I++) {
        var T;
        if (!isNaN((T = this.groupCtx.prevY[S - I]) === null || T === void 0 ? void 0 : T[f])) {
          P = this.groupCtx.prevY[S - I][f];
          break;
        }
      }
      for (var O = 1; O < R; O++) {
        var N, D;
        if (((N = this.groupCtx.prevYVal[S - O]) === null || N === void 0 ? void 0 : N[f]) < 0) {
          L = this.series[p][f] >= 0 ? P - k + 2 * (this.isReversed ? k : 0) : P;
          break;
        }
        if (((D = this.groupCtx.prevYVal[S - O]) === null || D === void 0 ? void 0 : D[f]) >= 0) {
          L = this.series[p][f] >= 0 ? P : P + k - 2 * (this.isReversed ? k : 0);
          break;
        }
      }
      L === void 0 && (L = g.globals.gridHeight), y = (C = this.groupCtx.prevYF[0]) !== null && C !== void 0 && C.every(function(X) {
        return X === 0;
      }) && this.groupCtx.prevYF.slice(1, S).every(function(X) {
        return X.every(function(z) {
          return isNaN(z);
        });
      }) ? c : L;
    } else y = c;
    r = this.series[p][f] ? y - this.series[p][f] / this.yRatio[b] + 2 * (this.isReversed ? this.series[p][f] / this.yRatio[b] : 0) : y;
    var Y = this.barHelpers.getColumnPaths({ barXPosition: v, barWidth: l, y1: y, y2: r, yRatio: this.yRatio[b], strokeWidth: this.strokeWidth, isReversed: this.isReversed, series: this.series, seriesGroup: d, realIndex: s.realIndex, i: p, j: f, w: g });
    return this.barHelpers.barBackground({ bc: x, j: f, i: p, x1: v, x2: l, elSeries: u }), { pathTo: Y.pathTo, pathFrom: Y.pathFrom, goalY: this.barHelpers.getGoalValues("y", null, c, p, f), barXPosition: v, x: g.globals.isXNumeric ? a : a + o, y: r };
  } }]), t;
}(), xs = function(n) {
  mi(t, Wt);
  var e = xi(t);
  function t() {
    return ee(this, t), e.apply(this, arguments);
  }
  return te(t, [{ key: "draw", value: function(i, s, a) {
    var r = this, o = this.w, l = new W(this.ctx), c = o.globals.comboCharts ? s : o.config.chart.type, h = new nt(this.ctx);
    this.candlestickOptions = this.w.config.plotOptions.candlestick, this.boxOptions = this.w.config.plotOptions.boxPlot, this.isHorizontal = o.config.plotOptions.bar.horizontal, this.isOHLC = this.candlestickOptions && this.candlestickOptions.type === "ohlc";
    var d = new Oe(this.ctx, o);
    i = d.getLogSeries(i), this.series = i, this.yRatio = d.getLogYRatios(this.yRatio), this.barHelpers.initVariables(i);
    for (var u = l.group({ class: "apexcharts-".concat(c, "-series apexcharts-plot-series") }), g = function(f) {
      r.isBoxPlot = o.config.chart.type === "boxPlot" || o.config.series[f].type === "boxPlot";
      var x, m, b, w, y = void 0, v = void 0, k = [], A = [], S = o.globals.comboCharts ? a[f] : f, C = r.barHelpers.getGroupIndex(S).columnGroupIndex, L = l.group({ class: "apexcharts-series", seriesName: _.escapeString(o.globals.seriesNames[S]), rel: f + 1, "data:realIndex": S });
      r.ctx.series.addCollapsedClassToSeries(L, S), i[f].length > 0 && (r.visibleI = r.visibleI + 1);
      var P, R, I = 0;
      r.yRatio.length > 1 && (r.yaxisIndex = o.globals.seriesYAxisReverseMap[S][0], I = S);
      var T = r.barHelpers.initialPositions(S);
      v = T.y, P = T.barHeight, m = T.yDivision, w = T.zeroW, y = T.x, R = T.barWidth, x = T.xDivision, b = T.zeroH, A.push(y + R / 2);
      for (var O = l.group({ class: "apexcharts-datalabels", "data:realIndex": S }), N = l.group({ class: "apexcharts-bar-goals-markers" }), D = function(X) {
        var z = r.barHelpers.getStrokeWidth(f, X, S), F = null, $ = { indexes: { i: f, j: X, realIndex: S, translationsIndex: I }, x: y, y: v, strokeWidth: z, elSeries: L };
        F = r.isHorizontal ? r.drawHorizontalBoxPaths(q(q({}, $), {}, { yDivision: m, barHeight: P, zeroW: w })) : r.drawVerticalBoxPaths(q(q({}, $), {}, { xDivision: x, barWidth: R, zeroH: b })), v = F.y, y = F.x;
        var Z = r.barHelpers.drawGoalLine({ barXPosition: F.barXPosition, barYPosition: F.barYPosition, goalX: F.goalX, goalY: F.goalY, barHeight: P, barWidth: R });
        Z && N.add(Z), X > 0 && A.push(y + R / 2), k.push(v), F.pathTo.forEach(function(H, J) {
          var G = !r.isBoxPlot && r.candlestickOptions.wick.useFillColor ? F.color[J] : o.globals.stroke.colors[f], V = h.fillPath({ seriesNumber: S, dataPointIndex: X, color: F.color[J], value: i[f][X] });
          r.renderSeries({ realIndex: S, pathFill: V, lineFill: G, j: X, i: f, pathFrom: F.pathFrom, pathTo: H, strokeWidth: z, elSeries: L, x: y, y: v, series: i, columnGroupIndex: C, barHeight: P, barWidth: R, elDataLabelsWrap: O, elGoalsMarkers: N, visibleSeries: r.visibleI, type: o.config.chart.type });
        });
      }, Y = 0; Y < o.globals.dataPoints; Y++) D(Y);
      o.globals.seriesXvalues[S] = A, o.globals.seriesYvalues[S] = k, u.add(L);
    }, p = 0; p < i.length; p++) g(p);
    return u;
  } }, { key: "drawVerticalBoxPaths", value: function(i) {
    var s = i.indexes, a = i.x;
    i.y;
    var r = i.xDivision, o = i.barWidth, l = i.zeroH, c = i.strokeWidth, h = this.w, d = new W(this.ctx), u = s.i, g = s.j, p = h.config.plotOptions.candlestick.colors, f = this.boxOptions.colors, x = s.realIndex, m = function(Y) {
      return Array.isArray(Y) ? Y[x] : Y;
    }, b = m(p.upward), w = m(p.downward), y = this.yRatio[s.translationsIndex], v = this.getOHLCValue(x, g), k = l, A = l, S = v.o < v.c ? [b] : [w];
    this.isBoxPlot && (S = [m(f.lower), m(f.upper)]);
    var C = Math.min(v.o, v.c), L = Math.max(v.o, v.c), P = v.m;
    h.globals.isXNumeric && (a = (h.globals.seriesX[x][g] - h.globals.minX) / this.xRatio - o / 2);
    var R = a + o * this.visibleI;
    this.series[u][g] === void 0 || this.series[u][g] === null ? (C = l, L = l) : (C = l - C / y, L = l - L / y, k = l - v.h / y, A = l - v.l / y, P = l - v.m / y);
    var I = d.move(R, l), T = d.move(R + o / 2, C);
    if (h.globals.previousPaths.length > 0 && (T = this.getPreviousPath(x, g, !0)), this.isOHLC) {
      var O = R + o / 2, N = l - v.o / y, D = l - v.c / y;
      I = [d.move(O, k) + d.line(O, A) + d.move(O, N) + d.line(R, N) + d.move(O, D) + d.line(R + o, D)];
    } else I = this.isBoxPlot ? [d.move(R, C) + d.line(R + o / 2, C) + d.line(R + o / 2, k) + d.line(R + o / 4, k) + d.line(R + o - o / 4, k) + d.line(R + o / 2, k) + d.line(R + o / 2, C) + d.line(R + o, C) + d.line(R + o, P) + d.line(R, P) + d.line(R, C + c / 2), d.move(R, P) + d.line(R + o, P) + d.line(R + o, L) + d.line(R + o / 2, L) + d.line(R + o / 2, A) + d.line(R + o - o / 4, A) + d.line(R + o / 4, A) + d.line(R + o / 2, A) + d.line(R + o / 2, L) + d.line(R, L) + d.line(R, P) + "z"] : [d.move(R, L) + d.line(R + o / 2, L) + d.line(R + o / 2, k) + d.line(R + o / 2, L) + d.line(R + o, L) + d.line(R + o, C) + d.line(R + o / 2, C) + d.line(R + o / 2, A) + d.line(R + o / 2, C) + d.line(R, C) + d.line(R, L - c / 2)];
    return T += d.move(R, C), h.globals.isXNumeric || (a += r), { pathTo: I, pathFrom: T, x: a, y: L, goalY: this.barHelpers.getGoalValues("y", null, l, u, g, s.translationsIndex), barXPosition: R, color: S };
  } }, { key: "drawHorizontalBoxPaths", value: function(i) {
    var s = i.indexes;
    i.x;
    var a = i.y, r = i.yDivision, o = i.barHeight, l = i.zeroW, c = i.strokeWidth, h = this.w, d = new W(this.ctx), u = s.i, g = s.j, p = this.boxOptions.colors.lower;
    this.isBoxPlot && (p = [this.boxOptions.colors.lower, this.boxOptions.colors.upper]);
    var f = this.invertedYRatio, x = s.realIndex, m = this.getOHLCValue(x, g), b = l, w = l, y = Math.min(m.o, m.c), v = Math.max(m.o, m.c), k = m.m;
    h.globals.isXNumeric && (a = (h.globals.seriesX[x][g] - h.globals.minX) / this.invertedXRatio - o / 2);
    var A = a + o * this.visibleI;
    this.series[u][g] === void 0 || this.series[u][g] === null ? (y = l, v = l) : (y = l + y / f, v = l + v / f, b = l + m.h / f, w = l + m.l / f, k = l + m.m / f);
    var S = d.move(l, A), C = d.move(y, A + o / 2);
    return h.globals.previousPaths.length > 0 && (C = this.getPreviousPath(x, g, !0)), S = [d.move(y, A) + d.line(y, A + o / 2) + d.line(b, A + o / 2) + d.line(b, A + o / 2 - o / 4) + d.line(b, A + o / 2 + o / 4) + d.line(b, A + o / 2) + d.line(y, A + o / 2) + d.line(y, A + o) + d.line(k, A + o) + d.line(k, A) + d.line(y + c / 2, A), d.move(k, A) + d.line(k, A + o) + d.line(v, A + o) + d.line(v, A + o / 2) + d.line(w, A + o / 2) + d.line(w, A + o - o / 4) + d.line(w, A + o / 4) + d.line(w, A + o / 2) + d.line(v, A + o / 2) + d.line(v, A) + d.line(k, A) + "z"], C += d.move(y, A), h.globals.isXNumeric || (a += r), { pathTo: S, pathFrom: C, x: v, y: a, goalX: this.barHelpers.getGoalValues("x", l, null, u, g), barYPosition: A, color: p };
  } }, { key: "getOHLCValue", value: function(i, s) {
    var a = this.w, r = new Oe(this.ctx, a), o = r.getLogValAtSeriesIndex(a.globals.seriesCandleH[i][s], i), l = r.getLogValAtSeriesIndex(a.globals.seriesCandleO[i][s], i), c = r.getLogValAtSeriesIndex(a.globals.seriesCandleM[i][s], i), h = r.getLogValAtSeriesIndex(a.globals.seriesCandleC[i][s], i), d = r.getLogValAtSeriesIndex(a.globals.seriesCandleL[i][s], i);
    return { o: this.isBoxPlot ? o : l, h: this.isBoxPlot ? l : o, m: c, l: this.isBoxPlot ? h : d, c: this.isBoxPlot ? d : h };
  } }]), t;
}(), qn = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w;
  }
  return te(n, [{ key: "checkColorRange", value: function() {
    var e = this.w, t = !1, i = e.config.plotOptions[e.config.chart.type];
    return i.colorScale.ranges.length > 0 && i.colorScale.ranges.map(function(s, a) {
      s.from <= 0 && (t = !0);
    }), t;
  } }, { key: "getShadeColor", value: function(e, t, i, s) {
    var a = this.w, r = 1, o = a.config.plotOptions[e].shadeIntensity, l = this.determineColor(e, t, i);
    a.globals.hasNegs || s ? r = a.config.plotOptions[e].reverseNegativeShade ? l.percent < 0 ? l.percent / 100 * (1.25 * o) : (1 - l.percent / 100) * (1.25 * o) : l.percent <= 0 ? 1 - (1 + l.percent / 100) * o : (1 - l.percent / 100) * o : (r = 1 - l.percent / 100, e === "treemap" && (r = (1 - l.percent / 100) * (1.25 * o)));
    var c = l.color, h = new _();
    if (a.config.plotOptions[e].enableShades) if (this.w.config.theme.mode === "dark") {
      var d = h.shadeColor(-1 * r, l.color);
      c = _.hexToRgba(_.isColorHex(d) ? d : _.rgb2hex(d), a.config.fill.opacity);
    } else {
      var u = h.shadeColor(r, l.color);
      c = _.hexToRgba(_.isColorHex(u) ? u : _.rgb2hex(u), a.config.fill.opacity);
    }
    return { color: c, colorProps: l };
  } }, { key: "determineColor", value: function(e, t, i) {
    var s = this.w, a = s.globals.series[t][i], r = s.config.plotOptions[e], o = r.colorScale.inverse ? i : t;
    r.distributed && s.config.chart.type === "treemap" && (o = i);
    var l = s.globals.colors[o], c = null, h = Math.min.apply(Math, _e(s.globals.series[t])), d = Math.max.apply(Math, _e(s.globals.series[t]));
    r.distributed || e !== "heatmap" || (h = s.globals.minY, d = s.globals.maxY), r.colorScale.min !== void 0 && (h = r.colorScale.min < s.globals.minY ? r.colorScale.min : s.globals.minY, d = r.colorScale.max > s.globals.maxY ? r.colorScale.max : s.globals.maxY);
    var u = Math.abs(d) + Math.abs(h), g = 100 * a / (u === 0 ? u - 1e-6 : u);
    return r.colorScale.ranges.length > 0 && r.colorScale.ranges.map(function(p, f) {
      if (a >= p.from && a <= p.to) {
        l = p.color, c = p.foreColor ? p.foreColor : null, h = p.from, d = p.to;
        var x = Math.abs(d) + Math.abs(h);
        g = 100 * a / (x === 0 ? x - 1e-6 : x);
      }
    }), { color: l, foreColor: c, percent: g };
  } }, { key: "calculateDataLabels", value: function(e) {
    var t = e.text, i = e.x, s = e.y, a = e.i, r = e.j, o = e.colorProps, l = e.fontSize, c = this.w.config.dataLabels, h = new W(this.ctx), d = new jt(this.ctx), u = null;
    if (c.enabled) {
      u = h.group({ class: "apexcharts-data-labels" });
      var g = c.offsetX, p = c.offsetY, f = i + g, x = s + parseFloat(c.style.fontSize) / 3 + p;
      d.plotDataLabelsText({ x: f, y: x, text: t, i: a, j: r, color: o.foreColor, parent: u, fontSize: l, dataLabelsConfig: c });
    }
    return u;
  } }, { key: "addListeners", value: function(e) {
    var t = new W(this.ctx);
    e.node.addEventListener("mouseenter", t.pathMouseEnter.bind(this, e)), e.node.addEventListener("mouseleave", t.pathMouseLeave.bind(this, e)), e.node.addEventListener("mousedown", t.pathMouseDown.bind(this, e));
  } }]), n;
}(), Ch = function() {
  function n(e, t) {
    ee(this, n), this.ctx = e, this.w = e.w, this.xRatio = t.xRatio, this.yRatio = t.yRatio, this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.helpers = new qn(e), this.rectRadius = this.w.config.plotOptions.heatmap.radius, this.strokeWidth = this.w.config.stroke.show ? this.w.config.stroke.width : 0;
  }
  return te(n, [{ key: "draw", value: function(e) {
    var t = this.w, i = new W(this.ctx), s = i.group({ class: "apexcharts-heatmap" });
    s.attr("clip-path", "url(#gridRectMask".concat(t.globals.cuid, ")"));
    var a = t.globals.gridWidth / t.globals.dataPoints, r = t.globals.gridHeight / t.globals.series.length, o = 0, l = !1;
    this.negRange = this.helpers.checkColorRange();
    var c = e.slice();
    t.config.yaxis[0].reversed && (l = !0, c.reverse());
    for (var h = l ? 0 : c.length - 1; l ? h < c.length : h >= 0; l ? h++ : h--) {
      var d = i.group({ class: "apexcharts-series apexcharts-heatmap-series", seriesName: _.escapeString(t.globals.seriesNames[h]), rel: h + 1, "data:realIndex": h });
      if (this.ctx.series.addCollapsedClassToSeries(d, h), t.config.chart.dropShadow.enabled) {
        var u = t.config.chart.dropShadow;
        new Fe(this.ctx).dropShadow(d, u, h);
      }
      for (var g = 0, p = t.config.plotOptions.heatmap.shadeIntensity, f = 0, x = 0; x < t.globals.dataPoints; x++) if (t.globals.seriesX.length && !t.globals.allSeriesHasEqualX && t.globals.minX + t.globals.minXDiff * x < t.globals.seriesX[h][f]) g += a;
      else {
        if (f >= c[h].length) break;
        var m = this.helpers.getShadeColor(t.config.chart.type, h, f, this.negRange), b = m.color, w = m.colorProps;
        t.config.fill.type === "image" && (b = new nt(this.ctx).fillPath({ seriesNumber: h, dataPointIndex: f, opacity: t.globals.hasNegs ? w.percent < 0 ? 1 - (1 + w.percent / 100) : p + w.percent / 100 : w.percent / 100, patternID: _.randomId(), width: t.config.fill.image.width ? t.config.fill.image.width : a, height: t.config.fill.image.height ? t.config.fill.image.height : r }));
        var y = this.rectRadius, v = i.drawRect(g, o, a, r, y);
        if (v.attr({ cx: g, cy: o }), v.node.classList.add("apexcharts-heatmap-rect"), d.add(v), v.attr({ fill: b, i: h, index: h, j: f, val: e[h][f], "stroke-width": this.strokeWidth, stroke: t.config.plotOptions.heatmap.useFillColorAsStroke ? b : t.globals.stroke.colors[0], color: b }), this.helpers.addListeners(v), t.config.chart.animations.enabled && !t.globals.dataChanged) {
          var k = 1;
          t.globals.resized || (k = t.config.chart.animations.speed), this.animateHeatMap(v, g, o, a, r, k);
        }
        if (t.globals.dataChanged) {
          var A = 1;
          if (this.dynamicAnim.enabled && t.globals.shouldAnimate) {
            A = this.dynamicAnim.speed;
            var S = t.globals.previousPaths[h] && t.globals.previousPaths[h][f] && t.globals.previousPaths[h][f].color;
            S || (S = "rgba(255, 255, 255, 0)"), this.animateHeatColor(v, _.isColorHex(S) ? S : _.rgb2hex(S), _.isColorHex(b) ? b : _.rgb2hex(b), A);
          }
        }
        var C = (0, t.config.dataLabels.formatter)(t.globals.series[h][f], { value: t.globals.series[h][f], seriesIndex: h, dataPointIndex: f, w: t }), L = this.helpers.calculateDataLabels({ text: C, x: g + a / 2, y: o + r / 2, i: h, j: f, colorProps: w, series: c });
        L !== null && d.add(L), g += a, f++;
      }
      o += r, s.add(d);
    }
    var P = t.globals.yAxisScale[0].result.slice();
    return t.config.yaxis[0].reversed ? P.unshift("") : P.push(""), t.globals.yAxisScale[0].result = P, s;
  } }, { key: "animateHeatMap", value: function(e, t, i, s, a, r) {
    var o = new Vt(this.ctx);
    o.animateRect(e, { x: t + s / 2, y: i + a / 2, width: 0, height: 0 }, { x: t, y: i, width: s, height: a }, r, function() {
      o.animationCompleted(e);
    });
  } }, { key: "animateHeatColor", value: function(e, t, i, s) {
    e.attr({ fill: t }).animate(s).attr({ fill: i });
  } }]), n;
}(), Zn = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w;
  }
  return te(n, [{ key: "drawYAxisTexts", value: function(e, t, i, s) {
    var a = this.w, r = a.config.yaxis[0], o = a.globals.yLabelFormatters[0];
    return new W(this.ctx).drawText({ x: e + r.labels.offsetX, y: t + r.labels.offsetY, text: o(s, i), textAnchor: "middle", fontSize: r.labels.style.fontSize, fontFamily: r.labels.style.fontFamily, foreColor: Array.isArray(r.labels.style.colors) ? r.labels.style.colors[i] : r.labels.style.colors });
  } }]), n;
}(), Jn = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w;
    var t = this.w;
    this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animBeginArr = [0], this.animDur = 0, this.donutDataLabels = this.w.config.plotOptions.pie.donut.labels, this.lineColorArr = t.globals.stroke.colors !== void 0 ? t.globals.stroke.colors : t.globals.colors, this.defaultSize = Math.min(t.globals.gridWidth, t.globals.gridHeight), this.centerY = this.defaultSize / 2, this.centerX = t.globals.gridWidth / 2, t.config.chart.type === "radialBar" ? this.fullAngle = 360 : this.fullAngle = Math.abs(t.config.plotOptions.pie.endAngle - t.config.plotOptions.pie.startAngle), this.initialAngle = t.config.plotOptions.pie.startAngle % this.fullAngle, t.globals.radialSize = this.defaultSize / 2.05 - t.config.stroke.width - (t.config.chart.sparkline.enabled ? 0 : t.config.chart.dropShadow.blur), this.donutSize = t.globals.radialSize * parseInt(t.config.plotOptions.pie.donut.size, 10) / 100;
    var i = t.config.plotOptions.pie.customScale, s = t.globals.gridWidth / 2, a = t.globals.gridHeight / 2;
    this.translateX = s - s * i, this.translateY = a - a * i, this.dataLabelsGroup = new W(this.ctx).group({ class: "apexcharts-datalabels-group", transform: "translate(".concat(this.translateX, ", ").concat(this.translateY, ") scale(").concat(i, ")") }), this.maxY = 0, this.sliceLabels = [], this.sliceSizes = [], this.prevSectorAngleArr = [];
  }
  return te(n, [{ key: "draw", value: function(e) {
    var t = this, i = this.w, s = new W(this.ctx), a = s.group({ class: "apexcharts-pie" });
    if (i.globals.noData) return a;
    for (var r = 0, o = 0; o < e.length; o++) r += _.negToZero(e[o]);
    var l = [], c = s.group();
    r === 0 && (r = 1e-5), e.forEach(function(w) {
      t.maxY = Math.max(t.maxY, w);
    }), i.config.yaxis[0].max && (this.maxY = i.config.yaxis[0].max), i.config.grid.position === "back" && this.chartType === "polarArea" && this.drawPolarElements(a);
    for (var h = 0; h < e.length; h++) {
      var d = this.fullAngle * _.negToZero(e[h]) / r;
      l.push(d), this.chartType === "polarArea" ? (l[h] = this.fullAngle / e.length, this.sliceSizes.push(i.globals.radialSize * e[h] / this.maxY)) : this.sliceSizes.push(i.globals.radialSize);
    }
    if (i.globals.dataChanged) {
      for (var u, g = 0, p = 0; p < i.globals.previousPaths.length; p++) g += _.negToZero(i.globals.previousPaths[p]);
      for (var f = 0; f < i.globals.previousPaths.length; f++) u = this.fullAngle * _.negToZero(i.globals.previousPaths[f]) / g, this.prevSectorAngleArr.push(u);
    }
    if (this.donutSize < 0 && (this.donutSize = 0), this.chartType === "donut") {
      var x = s.drawCircle(this.donutSize);
      x.attr({ cx: this.centerX, cy: this.centerY, fill: i.config.plotOptions.pie.donut.background ? i.config.plotOptions.pie.donut.background : "transparent" }), c.add(x);
    }
    var m = this.drawArcs(l, e);
    if (this.sliceLabels.forEach(function(w) {
      m.add(w);
    }), c.attr({ transform: "translate(".concat(this.translateX, ", ").concat(this.translateY, ") scale(").concat(i.config.plotOptions.pie.customScale, ")") }), c.add(m), a.add(c), this.donutDataLabels.show) {
      var b = this.renderInnerDataLabels(this.dataLabelsGroup, this.donutDataLabels, { hollowSize: this.donutSize, centerX: this.centerX, centerY: this.centerY, opacity: this.donutDataLabels.show });
      a.add(b);
    }
    return i.config.grid.position === "front" && this.chartType === "polarArea" && this.drawPolarElements(a), a;
  } }, { key: "drawArcs", value: function(e, t) {
    var i = this.w, s = new Fe(this.ctx), a = new W(this.ctx), r = new nt(this.ctx), o = a.group({ class: "apexcharts-slices" }), l = this.initialAngle, c = this.initialAngle, h = this.initialAngle, d = this.initialAngle;
    this.strokeWidth = i.config.stroke.show ? i.config.stroke.width : 0;
    for (var u = 0; u < e.length; u++) {
      var g = a.group({ class: "apexcharts-series apexcharts-pie-series", seriesName: _.escapeString(i.globals.seriesNames[u]), rel: u + 1, "data:realIndex": u });
      o.add(g), c = d, h = (l = h) + e[u], d = c + this.prevSectorAngleArr[u];
      var p = h < l ? this.fullAngle + h - l : h - l, f = r.fillPath({ seriesNumber: u, size: this.sliceSizes[u], value: t[u] }), x = this.getChangedPath(c, d), m = a.drawPath({ d: x, stroke: Array.isArray(this.lineColorArr) ? this.lineColorArr[u] : this.lineColorArr, strokeWidth: 0, fill: f, fillOpacity: i.config.fill.opacity, classes: "apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(u) });
      if (m.attr({ index: 0, j: u }), s.setSelectionFilter(m, 0, u), i.config.chart.dropShadow.enabled) {
        var b = i.config.chart.dropShadow;
        s.dropShadow(m, b, u);
      }
      this.addListeners(m, this.donutDataLabels), W.setAttrs(m.node, { "data:angle": p, "data:startAngle": l, "data:strokeWidth": this.strokeWidth, "data:value": t[u] });
      var w = { x: 0, y: 0 };
      this.chartType === "pie" || this.chartType === "polarArea" ? w = _.polarToCartesian(this.centerX, this.centerY, i.globals.radialSize / 1.25 + i.config.plotOptions.pie.dataLabels.offset, (l + p / 2) % this.fullAngle) : this.chartType === "donut" && (w = _.polarToCartesian(this.centerX, this.centerY, (i.globals.radialSize + this.donutSize) / 2 + i.config.plotOptions.pie.dataLabels.offset, (l + p / 2) % this.fullAngle)), g.add(m);
      var y = 0;
      if (!this.initialAnim || i.globals.resized || i.globals.dataChanged ? this.animBeginArr.push(0) : ((y = p / this.fullAngle * i.config.chart.animations.speed) === 0 && (y = 1), this.animDur = y + this.animDur, this.animBeginArr.push(this.animDur)), this.dynamicAnim && i.globals.dataChanged ? this.animatePaths(m, { size: this.sliceSizes[u], endAngle: h, startAngle: l, prevStartAngle: c, prevEndAngle: d, animateStartingPos: !0, i: u, animBeginArr: this.animBeginArr, shouldSetPrevPaths: !0, dur: i.config.chart.animations.dynamicAnimation.speed }) : this.animatePaths(m, { size: this.sliceSizes[u], endAngle: h, startAngle: l, i: u, totalItems: e.length - 1, animBeginArr: this.animBeginArr, dur: y }), i.config.plotOptions.pie.expandOnClick && this.chartType !== "polarArea" && m.node.addEventListener("mouseup", this.pieClicked.bind(this, u)), i.globals.selectedDataPoints[0] !== void 0 && i.globals.selectedDataPoints[0].indexOf(u) > -1 && this.pieClicked(u), i.config.dataLabels.enabled) {
        var v = w.x, k = w.y, A = 100 * p / this.fullAngle + "%";
        if (p !== 0 && i.config.plotOptions.pie.dataLabels.minAngleToShowLabel < e[u]) {
          var S = i.config.dataLabels.formatter;
          S !== void 0 && (A = S(i.globals.seriesPercent[u][0], { seriesIndex: u, w: i }));
          var C = i.globals.dataLabels.style.colors[u], L = a.group({ class: "apexcharts-datalabels" }), P = a.drawText({ x: v, y: k, text: A, textAnchor: "middle", fontSize: i.config.dataLabels.style.fontSize, fontFamily: i.config.dataLabels.style.fontFamily, fontWeight: i.config.dataLabels.style.fontWeight, foreColor: C });
          if (L.add(P), i.config.dataLabels.dropShadow.enabled) {
            var R = i.config.dataLabels.dropShadow;
            s.dropShadow(P, R);
          }
          P.node.classList.add("apexcharts-pie-label"), i.config.chart.animations.animate && i.globals.resized === !1 && (P.node.classList.add("apexcharts-pie-label-delay"), P.node.style.animationDelay = i.config.chart.animations.speed / 940 + "s"), this.sliceLabels.push(L);
        }
      }
    }
    return o;
  } }, { key: "addListeners", value: function(e, t) {
    var i = new W(this.ctx);
    e.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this, e)), e.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this, e)), e.node.addEventListener("mouseleave", this.revertDataLabelsInner.bind(this, e.node, t)), e.node.addEventListener("mousedown", i.pathMouseDown.bind(this, e)), this.donutDataLabels.total.showAlways || (e.node.addEventListener("mouseenter", this.printDataLabelsInner.bind(this, e.node, t)), e.node.addEventListener("mousedown", this.printDataLabelsInner.bind(this, e.node, t)));
  } }, { key: "animatePaths", value: function(e, t) {
    var i = this.w, s = t.endAngle < t.startAngle ? this.fullAngle + t.endAngle - t.startAngle : t.endAngle - t.startAngle, a = s, r = t.startAngle, o = t.startAngle;
    t.prevStartAngle !== void 0 && t.prevEndAngle !== void 0 && (r = t.prevEndAngle, a = t.prevEndAngle < t.prevStartAngle ? this.fullAngle + t.prevEndAngle - t.prevStartAngle : t.prevEndAngle - t.prevStartAngle), t.i === i.config.series.length - 1 && (s + o > this.fullAngle ? t.endAngle = t.endAngle - (s + o) : s + o < this.fullAngle && (t.endAngle = t.endAngle + (this.fullAngle - (s + o)))), s === this.fullAngle && (s = this.fullAngle - 0.01), this.animateArc(e, r, o, s, a, t);
  } }, { key: "animateArc", value: function(e, t, i, s, a, r) {
    var o, l = this, c = this.w, h = new Vt(this.ctx), d = r.size;
    (isNaN(t) || isNaN(a)) && (t = i, a = s, r.dur = 0);
    var u = s, g = i, p = t < i ? this.fullAngle + t - i : t - i;
    c.globals.dataChanged && r.shouldSetPrevPaths && r.prevEndAngle && (o = l.getPiePath({ me: l, startAngle: r.prevStartAngle, angle: r.prevEndAngle < r.prevStartAngle ? this.fullAngle + r.prevEndAngle - r.prevStartAngle : r.prevEndAngle - r.prevStartAngle, size: d }), e.attr({ d: o })), r.dur !== 0 ? e.animate(r.dur, r.animBeginArr[r.i]).after(function() {
      l.chartType !== "pie" && l.chartType !== "donut" && l.chartType !== "polarArea" || this.animate(c.config.chart.animations.dynamicAnimation.speed).attr({ "stroke-width": l.strokeWidth }), r.i === c.config.series.length - 1 && h.animationCompleted(e);
    }).during(function(f) {
      u = p + (s - p) * f, r.animateStartingPos && (u = a + (s - a) * f, g = t - a + (i - (t - a)) * f), o = l.getPiePath({ me: l, startAngle: g, angle: u, size: d }), e.node.setAttribute("data:pathOrig", o), e.attr({ d: o });
    }) : (o = l.getPiePath({ me: l, startAngle: g, angle: s, size: d }), r.isTrack || (c.globals.animationEnded = !0), e.node.setAttribute("data:pathOrig", o), e.attr({ d: o, "stroke-width": l.strokeWidth }));
  } }, { key: "pieClicked", value: function(e) {
    var t, i = this.w, s = this, a = s.sliceSizes[e] + (i.config.plotOptions.pie.expandOnClick ? 4 : 0), r = i.globals.dom.Paper.findOne(".apexcharts-".concat(s.chartType.toLowerCase(), "-slice-").concat(e));
    if (r.attr("data:pieClicked") !== "true") {
      var o = i.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area");
      Array.prototype.forEach.call(o, function(d) {
        d.setAttribute("data:pieClicked", "false");
        var u = d.getAttribute("data:pathOrig");
        u && d.setAttribute("d", u);
      }), i.globals.capturedDataPointIndex = e, r.attr("data:pieClicked", "true");
      var l = parseInt(r.attr("data:startAngle"), 10), c = parseInt(r.attr("data:angle"), 10);
      t = s.getPiePath({ me: s, startAngle: l, angle: c, size: a }), c !== 360 && r.plot(t);
    } else {
      r.attr({ "data:pieClicked": "false" }), this.revertDataLabelsInner(r.node, this.donutDataLabels);
      var h = r.attr("data:pathOrig");
      r.attr({ d: h });
    }
  } }, { key: "getChangedPath", value: function(e, t) {
    var i = "";
    return this.dynamicAnim && this.w.globals.dataChanged && (i = this.getPiePath({ me: this, startAngle: e, angle: t - e, size: this.size })), i;
  } }, { key: "getPiePath", value: function(e) {
    var t, i = e.me, s = e.startAngle, a = e.angle, r = e.size, o = new W(this.ctx), l = s, c = Math.PI * (l - 90) / 180, h = a + s;
    Math.ceil(h) >= this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle && (h = this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle - 0.01), Math.ceil(h) > this.fullAngle && (h -= this.fullAngle);
    var d = Math.PI * (h - 90) / 180, u = i.centerX + r * Math.cos(c), g = i.centerY + r * Math.sin(c), p = i.centerX + r * Math.cos(d), f = i.centerY + r * Math.sin(d), x = _.polarToCartesian(i.centerX, i.centerY, i.donutSize, h), m = _.polarToCartesian(i.centerX, i.centerY, i.donutSize, l), b = a > 180 ? 1 : 0, w = ["M", u, g, "A", r, r, 0, b, 1, p, f];
    return t = i.chartType === "donut" ? [].concat(w, ["L", x.x, x.y, "A", i.donutSize, i.donutSize, 0, b, 0, m.x, m.y, "L", u, g, "z"]).join(" ") : i.chartType === "pie" || i.chartType === "polarArea" ? [].concat(w, ["L", i.centerX, i.centerY, "L", u, g]).join(" ") : [].concat(w).join(" "), o.roundPathCorners(t, 2 * this.strokeWidth);
  } }, { key: "drawPolarElements", value: function(e) {
    var t = this.w, i = new Bn(this.ctx), s = new W(this.ctx), a = new Zn(this.ctx), r = s.group(), o = s.group(), l = i.niceScale(0, Math.ceil(this.maxY), 0), c = l.result.reverse(), h = l.result.length;
    this.maxY = l.niceMax;
    for (var d = t.globals.radialSize, u = d / (h - 1), g = 0; g < h - 1; g++) {
      var p = s.drawCircle(d);
      if (p.attr({ cx: this.centerX, cy: this.centerY, fill: "none", "stroke-width": t.config.plotOptions.polarArea.rings.strokeWidth, stroke: t.config.plotOptions.polarArea.rings.strokeColor }), t.config.yaxis[0].show) {
        var f = a.drawYAxisTexts(this.centerX, this.centerY - d + parseInt(t.config.yaxis[0].labels.style.fontSize, 10) / 2, g, c[g]);
        o.add(f);
      }
      r.add(p), d -= u;
    }
    this.drawSpokes(e), e.add(r), e.add(o);
  } }, { key: "renderInnerDataLabels", value: function(e, t, i) {
    var s = this.w, a = new W(this.ctx), r = t.total.show;
    e.node.innerHTML = "", e.node.style.opacity = i.opacity;
    var o, l, c = i.centerX, h = this.donutDataLabels.total.label ? i.centerY : i.centerY - i.centerY / 6;
    o = t.name.color === void 0 ? s.globals.colors[0] : t.name.color;
    var d = t.name.fontSize, u = t.name.fontFamily, g = t.name.fontWeight;
    l = t.value.color === void 0 ? s.config.chart.foreColor : t.value.color;
    var p = t.value.formatter, f = "", x = "";
    if (r ? (o = t.total.color, d = t.total.fontSize, u = t.total.fontFamily, g = t.total.fontWeight, x = this.donutDataLabels.total.label ? t.total.label : "", f = t.total.formatter(s)) : s.globals.series.length === 1 && (f = p(s.globals.series[0], s), x = s.globals.seriesNames[0]), x && (x = t.name.formatter(x, t.total.show, s)), t.name.show) {
      var m = a.drawText({ x: c, y: h + parseFloat(t.name.offsetY), text: x, textAnchor: "middle", foreColor: o, fontSize: d, fontWeight: g, fontFamily: u });
      m.node.classList.add("apexcharts-datalabel-label"), e.add(m);
    }
    if (t.value.show) {
      var b = t.name.show ? parseFloat(t.value.offsetY) + 16 : t.value.offsetY, w = a.drawText({ x: c, y: h + b, text: f, textAnchor: "middle", foreColor: l, fontWeight: t.value.fontWeight, fontSize: t.value.fontSize, fontFamily: t.value.fontFamily });
      w.node.classList.add("apexcharts-datalabel-value"), e.add(w);
    }
    return e;
  } }, { key: "printInnerLabels", value: function(e, t, i, s) {
    var a, r = this.w;
    s ? a = e.name.color === void 0 ? r.globals.colors[parseInt(s.parentNode.getAttribute("rel"), 10) - 1] : e.name.color : r.globals.series.length > 1 && e.total.show && (a = e.total.color);
    var o = r.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"), l = r.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");
    i = (0, e.value.formatter)(i, r), s || typeof e.total.formatter != "function" || (i = e.total.formatter(r));
    var c = t === e.total.label;
    t = this.donutDataLabels.total.label ? e.name.formatter(t, c, r) : "", o !== null && (o.textContent = t), l !== null && (l.textContent = i), o !== null && (o.style.fill = a);
  } }, { key: "printDataLabelsInner", value: function(e, t) {
    var i = this.w, s = e.getAttribute("data:value"), a = i.globals.seriesNames[parseInt(e.parentNode.getAttribute("rel"), 10) - 1];
    i.globals.series.length > 1 && this.printInnerLabels(t, a, s, e);
    var r = i.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");
    r !== null && (r.style.opacity = 1);
  } }, { key: "drawSpokes", value: function(e) {
    var t = this, i = this.w, s = new W(this.ctx), a = i.config.plotOptions.polarArea.spokes;
    if (a.strokeWidth !== 0) {
      for (var r = [], o = 360 / i.globals.series.length, l = 0; l < i.globals.series.length; l++) r.push(_.polarToCartesian(this.centerX, this.centerY, i.globals.radialSize, i.config.plotOptions.pie.startAngle + o * l));
      r.forEach(function(c, h) {
        var d = s.drawLine(c.x, c.y, t.centerX, t.centerY, Array.isArray(a.connectorColors) ? a.connectorColors[h] : a.connectorColors);
        e.add(d);
      });
    }
  } }, { key: "revertDataLabelsInner", value: function() {
    var e = this.w;
    if (this.donutDataLabels.show) {
      var t = e.globals.dom.Paper.findOne(".apexcharts-datalabels-group"), i = this.renderInnerDataLabels(t, this.donutDataLabels, { hollowSize: this.donutSize, centerX: this.centerX, centerY: this.centerY, opacity: this.donutDataLabels.show });
      e.globals.dom.Paper.findOne(".apexcharts-radialbar, .apexcharts-pie").add(i);
    }
  } }]), n;
}(), Mh = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animDur = 0;
    var t = this.w;
    this.graphics = new W(this.ctx), this.lineColorArr = t.globals.stroke.colors !== void 0 ? t.globals.stroke.colors : t.globals.colors, this.defaultSize = t.globals.svgHeight < t.globals.svgWidth ? t.globals.gridHeight : t.globals.gridWidth, this.isLog = t.config.yaxis[0].logarithmic, this.logBase = t.config.yaxis[0].logBase, this.coreUtils = new Oe(this.ctx), this.maxValue = this.isLog ? this.coreUtils.getLogVal(this.logBase, t.globals.maxY, 0) : t.globals.maxY, this.minValue = this.isLog ? this.coreUtils.getLogVal(this.logBase, this.w.globals.minY, 0) : t.globals.minY, this.polygons = t.config.plotOptions.radar.polygons, this.strokeWidth = t.config.stroke.show ? t.config.stroke.width : 0, this.size = this.defaultSize / 2.1 - this.strokeWidth - t.config.chart.dropShadow.blur, t.config.xaxis.labels.show && (this.size = this.size - t.globals.xAxisLabelsWidth / 1.75), t.config.plotOptions.radar.size !== void 0 && (this.size = t.config.plotOptions.radar.size), this.dataRadiusOfPercent = [], this.dataRadius = [], this.angleArr = [], this.yaxisLabelsTextsPos = [];
  }
  return te(n, [{ key: "draw", value: function(e) {
    var t = this, i = this.w, s = new nt(this.ctx), a = [], r = new jt(this.ctx);
    e.length && (this.dataPointsLen = e[i.globals.maxValsInArrayIndex].length), this.disAngle = 2 * Math.PI / this.dataPointsLen;
    var o = i.globals.gridWidth / 2, l = i.globals.gridHeight / 2, c = o + i.config.plotOptions.radar.offsetX, h = l + i.config.plotOptions.radar.offsetY, d = this.graphics.group({ class: "apexcharts-radar-series apexcharts-plot-series", transform: "translate(".concat(c || 0, ", ").concat(h || 0, ")") }), u = [], g = null, p = null;
    if (this.yaxisLabels = this.graphics.group({ class: "apexcharts-yaxis" }), e.forEach(function(x, m) {
      var b = x.length === i.globals.dataPoints, w = t.graphics.group().attr({ class: "apexcharts-series", "data:longestSeries": b, seriesName: _.escapeString(i.globals.seriesNames[m]), rel: m + 1, "data:realIndex": m });
      t.dataRadiusOfPercent[m] = [], t.dataRadius[m] = [], t.angleArr[m] = [], x.forEach(function(I, T) {
        var O = Math.abs(t.maxValue - t.minValue);
        I -= t.minValue, t.isLog && (I = t.coreUtils.getLogVal(t.logBase, I, 0)), t.dataRadiusOfPercent[m][T] = I / O, t.dataRadius[m][T] = t.dataRadiusOfPercent[m][T] * t.size, t.angleArr[m][T] = T * t.disAngle;
      }), u = t.getDataPointsPos(t.dataRadius[m], t.angleArr[m]);
      var y = t.createPaths(u, { x: 0, y: 0 });
      g = t.graphics.group({ class: "apexcharts-series-markers-wrap apexcharts-element-hidden" }), p = t.graphics.group({ class: "apexcharts-datalabels", "data:realIndex": m }), i.globals.delayedElements.push({ el: g.node, index: m });
      var v = { i: m, realIndex: m, animationDelay: m, initialSpeed: i.config.chart.animations.speed, dataChangeSpeed: i.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-radar", shouldClipToGrid: !1, bindEventsOnPaths: !1, stroke: i.globals.stroke.colors[m], strokeLineCap: i.config.stroke.lineCap }, k = null;
      i.globals.previousPaths.length > 0 && (k = t.getPreviousPath(m));
      for (var A = 0; A < y.linePathsTo.length; A++) {
        var S = t.graphics.renderPaths(q(q({}, v), {}, { pathFrom: k === null ? y.linePathsFrom[A] : k, pathTo: y.linePathsTo[A], strokeWidth: Array.isArray(t.strokeWidth) ? t.strokeWidth[m] : t.strokeWidth, fill: "none", drawShadow: !1 }));
        w.add(S);
        var C = s.fillPath({ seriesNumber: m }), L = t.graphics.renderPaths(q(q({}, v), {}, { pathFrom: k === null ? y.areaPathsFrom[A] : k, pathTo: y.areaPathsTo[A], strokeWidth: 0, fill: C, drawShadow: !1 }));
        if (i.config.chart.dropShadow.enabled) {
          var P = new Fe(t.ctx), R = i.config.chart.dropShadow;
          P.dropShadow(L, Object.assign({}, R, { noUserSpaceOnUse: !0 }), m);
        }
        w.add(L);
      }
      x.forEach(function(I, T) {
        var O = new Zt(t.ctx).getMarkerConfig({ cssClass: "apexcharts-marker", seriesIndex: m, dataPointIndex: T }), N = t.graphics.drawMarker(u[T].x, u[T].y, O);
        N.attr("rel", T), N.attr("j", T), N.attr("index", m), N.node.setAttribute("default-marker-size", O.pSize);
        var D = t.graphics.group({ class: "apexcharts-series-markers" });
        D && D.add(N), g.add(D), w.add(g);
        var Y = i.config.dataLabels;
        if (Y.enabled) {
          var X = Y.formatter(i.globals.series[m][T], { seriesIndex: m, dataPointIndex: T, w: i });
          r.plotDataLabelsText({ x: u[T].x, y: u[T].y, text: X, textAnchor: "middle", i: m, j: m, parent: p, offsetCorrection: !1, dataLabelsConfig: q({}, Y) });
        }
        w.add(p);
      }), a.push(w);
    }), this.drawPolygons({ parent: d }), i.config.xaxis.labels.show) {
      var f = this.drawXAxisTexts();
      d.add(f);
    }
    return a.forEach(function(x) {
      d.add(x);
    }), d.add(this.yaxisLabels), d;
  } }, { key: "drawPolygons", value: function(e) {
    for (var t = this, i = this.w, s = e.parent, a = new Zn(this.ctx), r = i.globals.yAxisScale[0].result.reverse(), o = r.length, l = [], c = this.size / (o - 1), h = 0; h < o; h++) l[h] = c * h;
    l.reverse();
    var d = [], u = [];
    l.forEach(function(g, p) {
      var f = _.getPolygonPos(g, t.dataPointsLen), x = "";
      f.forEach(function(m, b) {
        if (p === 0) {
          var w = t.graphics.drawLine(m.x, m.y, 0, 0, Array.isArray(t.polygons.connectorColors) ? t.polygons.connectorColors[b] : t.polygons.connectorColors);
          u.push(w);
        }
        b === 0 && t.yaxisLabelsTextsPos.push({ x: m.x, y: m.y }), x += m.x + "," + m.y + " ";
      }), d.push(x);
    }), d.forEach(function(g, p) {
      var f = t.polygons.strokeColors, x = t.polygons.strokeWidth, m = t.graphics.drawPolygon(g, Array.isArray(f) ? f[p] : f, Array.isArray(x) ? x[p] : x, i.globals.radarPolygons.fill.colors[p]);
      s.add(m);
    }), u.forEach(function(g) {
      s.add(g);
    }), i.config.yaxis[0].show && this.yaxisLabelsTextsPos.forEach(function(g, p) {
      var f = a.drawYAxisTexts(g.x, g.y, p, r[p]);
      t.yaxisLabels.add(f);
    });
  } }, { key: "drawXAxisTexts", value: function() {
    var e = this, t = this.w, i = t.config.xaxis.labels, s = this.graphics.group({ class: "apexcharts-xaxis" }), a = _.getPolygonPos(this.size, this.dataPointsLen);
    return t.globals.labels.forEach(function(r, o) {
      var l = t.config.xaxis.labels.formatter, c = new jt(e.ctx);
      if (a[o]) {
        var h = e.getTextPos(a[o], e.size), d = l(r, { seriesIndex: -1, dataPointIndex: o, w: t });
        c.plotDataLabelsText({ x: h.newX, y: h.newY, text: d, textAnchor: h.textAnchor, i: o, j: o, parent: s, className: "apexcharts-xaxis-label", color: Array.isArray(i.style.colors) && i.style.colors[o] ? i.style.colors[o] : "#a8a8a8", dataLabelsConfig: q({ textAnchor: h.textAnchor, dropShadow: { enabled: !1 } }, i), offsetCorrection: !1 }).on("click", function(u) {
          if (typeof t.config.chart.events.xAxisLabelClick == "function") {
            var g = Object.assign({}, t, { labelIndex: o });
            t.config.chart.events.xAxisLabelClick(u, e.ctx, g);
          }
        });
      }
    }), s;
  } }, { key: "createPaths", value: function(e, t) {
    var i = this, s = [], a = [], r = [], o = [];
    if (e.length) {
      a = [this.graphics.move(t.x, t.y)], o = [this.graphics.move(t.x, t.y)];
      var l = this.graphics.move(e[0].x, e[0].y), c = this.graphics.move(e[0].x, e[0].y);
      e.forEach(function(h, d) {
        l += i.graphics.line(h.x, h.y), c += i.graphics.line(h.x, h.y), d === e.length - 1 && (l += "Z", c += "Z");
      }), s.push(l), r.push(c);
    }
    return { linePathsFrom: a, linePathsTo: s, areaPathsFrom: o, areaPathsTo: r };
  } }, { key: "getTextPos", value: function(e, t) {
    var i = "middle", s = e.x, a = e.y;
    return Math.abs(e.x) >= 10 ? e.x > 0 ? (i = "start", s += 10) : e.x < 0 && (i = "end", s -= 10) : i = "middle", Math.abs(e.y) >= t - 10 && (e.y < 0 ? a -= 10 : e.y > 0 && (a += 10)), { textAnchor: i, newX: s, newY: a };
  } }, { key: "getPreviousPath", value: function(e) {
    for (var t = this.w, i = null, s = 0; s < t.globals.previousPaths.length; s++) {
      var a = t.globals.previousPaths[s];
      a.paths.length > 0 && parseInt(a.realIndex, 10) === parseInt(e, 10) && t.globals.previousPaths[s].paths[0] !== void 0 && (i = t.globals.previousPaths[s].paths[0].d);
    }
    return i;
  } }, { key: "getDataPointsPos", value: function(e, t) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.dataPointsLen;
    e = e || [], t = t || [];
    for (var s = [], a = 0; a < i; a++) {
      var r = {};
      r.x = e[a] * Math.sin(t[a]), r.y = -e[a] * Math.cos(t[a]), s.push(r);
    }
    return s;
  } }]), n;
}(), Lh = function(n) {
  mi(t, Jn);
  var e = xi(t);
  function t(i) {
    var s;
    ee(this, t), (s = e.call(this, i)).ctx = i, s.w = i.w, s.animBeginArr = [0], s.animDur = 0;
    var a = s.w;
    return s.startAngle = a.config.plotOptions.radialBar.startAngle, s.endAngle = a.config.plotOptions.radialBar.endAngle, s.totalAngle = Math.abs(a.config.plotOptions.radialBar.endAngle - a.config.plotOptions.radialBar.startAngle), s.trackStartAngle = a.config.plotOptions.radialBar.track.startAngle, s.trackEndAngle = a.config.plotOptions.radialBar.track.endAngle, s.barLabels = s.w.config.plotOptions.radialBar.barLabels, s.donutDataLabels = s.w.config.plotOptions.radialBar.dataLabels, s.radialDataLabels = s.donutDataLabels, s.trackStartAngle || (s.trackStartAngle = s.startAngle), s.trackEndAngle || (s.trackEndAngle = s.endAngle), s.endAngle === 360 && (s.endAngle = 359.99), s.margin = parseInt(a.config.plotOptions.radialBar.track.margin, 10), s.onBarLabelClick = s.onBarLabelClick.bind(hn(s)), s;
  }
  return te(t, [{ key: "draw", value: function(i) {
    var s = this.w, a = new W(this.ctx), r = a.group({ class: "apexcharts-radialbar" });
    if (s.globals.noData) return r;
    var o = a.group(), l = this.defaultSize / 2, c = s.globals.gridWidth / 2, h = this.defaultSize / 2.05;
    s.config.chart.sparkline.enabled || (h = h - s.config.stroke.width - s.config.chart.dropShadow.blur);
    var d = s.globals.fill.colors;
    if (s.config.plotOptions.radialBar.track.show) {
      var u = this.drawTracks({ size: h, centerX: c, centerY: l, colorArr: d, series: i });
      o.add(u);
    }
    var g = this.drawArcs({ size: h, centerX: c, centerY: l, colorArr: d, series: i }), p = 360;
    s.config.plotOptions.radialBar.startAngle < 0 && (p = this.totalAngle);
    var f = (360 - p) / 360;
    if (s.globals.radialSize = h - h * f, this.radialDataLabels.value.show) {
      var x = Math.max(this.radialDataLabels.value.offsetY, this.radialDataLabels.name.offsetY);
      s.globals.radialSize += x * f;
    }
    return o.add(g.g), s.config.plotOptions.radialBar.hollow.position === "front" && (g.g.add(g.elHollow), g.dataLabels && g.g.add(g.dataLabels)), r.add(o), r;
  } }, { key: "drawTracks", value: function(i) {
    var s = this.w, a = new W(this.ctx), r = a.group({ class: "apexcharts-tracks" }), o = new Fe(this.ctx), l = new nt(this.ctx), c = this.getStrokeWidth(i);
    i.size = i.size - c / 2;
    for (var h = 0; h < i.series.length; h++) {
      var d = a.group({ class: "apexcharts-radialbar-track apexcharts-track" });
      r.add(d), d.attr({ rel: h + 1 }), i.size = i.size - c - this.margin;
      var u = s.config.plotOptions.radialBar.track, g = l.fillPath({ seriesNumber: 0, size: i.size, fillColors: Array.isArray(u.background) ? u.background[h] : u.background, solid: !0 }), p = this.trackStartAngle, f = this.trackEndAngle;
      Math.abs(f) + Math.abs(p) >= 360 && (f = 360 - Math.abs(this.startAngle) - 0.1);
      var x = a.drawPath({ d: "", stroke: g, strokeWidth: c * parseInt(u.strokeWidth, 10) / 100, fill: "none", strokeOpacity: u.opacity, classes: "apexcharts-radialbar-area" });
      if (u.dropShadow.enabled) {
        var m = u.dropShadow;
        o.dropShadow(x, m);
      }
      d.add(x), x.attr("id", "apexcharts-radialbarTrack-" + h), this.animatePaths(x, { centerX: i.centerX, centerY: i.centerY, endAngle: f, startAngle: p, size: i.size, i: h, totalItems: 2, animBeginArr: 0, dur: 0, isTrack: !0 });
    }
    return r;
  } }, { key: "drawArcs", value: function(i) {
    var s = this.w, a = new W(this.ctx), r = new nt(this.ctx), o = new Fe(this.ctx), l = a.group(), c = this.getStrokeWidth(i);
    i.size = i.size - c / 2;
    var h = s.config.plotOptions.radialBar.hollow.background, d = i.size - c * i.series.length - this.margin * i.series.length - c * parseInt(s.config.plotOptions.radialBar.track.strokeWidth, 10) / 100 / 2, u = d - s.config.plotOptions.radialBar.hollow.margin;
    s.config.plotOptions.radialBar.hollow.image !== void 0 && (h = this.drawHollowImage(i, l, d, h));
    var g = this.drawHollow({ size: u, centerX: i.centerX, centerY: i.centerY, fill: h || "transparent" });
    if (s.config.plotOptions.radialBar.hollow.dropShadow.enabled) {
      var p = s.config.plotOptions.radialBar.hollow.dropShadow;
      o.dropShadow(g, p);
    }
    var f = 1;
    !this.radialDataLabels.total.show && s.globals.series.length > 1 && (f = 0);
    var x = null;
    if (this.radialDataLabels.show) {
      var m = s.globals.dom.Paper.findOne(".apexcharts-datalabels-group");
      x = this.renderInnerDataLabels(m, this.radialDataLabels, { hollowSize: d, centerX: i.centerX, centerY: i.centerY, opacity: f });
    }
    s.config.plotOptions.radialBar.hollow.position === "back" && (l.add(g), x && l.add(x));
    var b = !1;
    s.config.plotOptions.radialBar.inverseOrder && (b = !0);
    for (var w = b ? i.series.length - 1 : 0; b ? w >= 0 : w < i.series.length; b ? w-- : w++) {
      var y = a.group({ class: "apexcharts-series apexcharts-radial-series", seriesName: _.escapeString(s.globals.seriesNames[w]) });
      l.add(y), y.attr({ rel: w + 1, "data:realIndex": w }), this.ctx.series.addCollapsedClassToSeries(y, w), i.size = i.size - c - this.margin;
      var v = r.fillPath({ seriesNumber: w, size: i.size, value: i.series[w] }), k = this.startAngle, A = void 0, S = _.negToZero(i.series[w] > 100 ? 100 : i.series[w]) / 100, C = Math.round(this.totalAngle * S) + this.startAngle, L = void 0;
      s.globals.dataChanged && (A = this.startAngle, L = Math.round(this.totalAngle * _.negToZero(s.globals.previousPaths[w]) / 100) + A), Math.abs(C) + Math.abs(k) > 360 && (C -= 0.01), Math.abs(L) + Math.abs(A) > 360 && (L -= 0.01);
      var P = C - k, R = Array.isArray(s.config.stroke.dashArray) ? s.config.stroke.dashArray[w] : s.config.stroke.dashArray, I = a.drawPath({ d: "", stroke: v, strokeWidth: c, fill: "none", fillOpacity: s.config.fill.opacity, classes: "apexcharts-radialbar-area apexcharts-radialbar-slice-" + w, strokeDashArray: R });
      if (W.setAttrs(I.node, { "data:angle": P, "data:value": i.series[w] }), s.config.chart.dropShadow.enabled) {
        var T = s.config.chart.dropShadow;
        o.dropShadow(I, T, w);
      }
      if (o.setSelectionFilter(I, 0, w), this.addListeners(I, this.radialDataLabels), y.add(I), I.attr({ index: 0, j: w }), this.barLabels.enabled) {
        var O = _.polarToCartesian(i.centerX, i.centerY, i.size, k), N = this.barLabels.formatter(s.globals.seriesNames[w], { seriesIndex: w, w: s }), D = ["apexcharts-radialbar-label"];
        this.barLabels.onClick || D.push("apexcharts-no-click");
        var Y = this.barLabels.useSeriesColors ? s.globals.colors[w] : s.config.chart.foreColor;
        Y || (Y = s.config.chart.foreColor);
        var X = O.x + this.barLabels.offsetX, z = O.y + this.barLabels.offsetY, F = a.drawText({ x: X, y: z, text: N, textAnchor: "end", dominantBaseline: "middle", fontFamily: this.barLabels.fontFamily, fontWeight: this.barLabels.fontWeight, fontSize: this.barLabels.fontSize, foreColor: Y, cssClass: D.join(" ") });
        F.on("click", this.onBarLabelClick), F.attr({ rel: w + 1 }), k !== 0 && F.attr({ "transform-origin": "".concat(X, " ").concat(z), transform: "rotate(".concat(k, " 0 0)") }), y.add(F);
      }
      var $ = 0;
      !this.initialAnim || s.globals.resized || s.globals.dataChanged || ($ = s.config.chart.animations.speed), s.globals.dataChanged && ($ = s.config.chart.animations.dynamicAnimation.speed), this.animDur = $ / (1.2 * i.series.length) + this.animDur, this.animBeginArr.push(this.animDur), this.animatePaths(I, { centerX: i.centerX, centerY: i.centerY, endAngle: C, startAngle: k, prevEndAngle: L, prevStartAngle: A, size: i.size, i: w, totalItems: 2, animBeginArr: this.animBeginArr, dur: $, shouldSetPrevPaths: !0 });
    }
    return { g: l, elHollow: g, dataLabels: x };
  } }, { key: "drawHollow", value: function(i) {
    var s = new W(this.ctx).drawCircle(2 * i.size);
    return s.attr({ class: "apexcharts-radialbar-hollow", cx: i.centerX, cy: i.centerY, r: i.size, fill: i.fill }), s;
  } }, { key: "drawHollowImage", value: function(i, s, a, r) {
    var o = this.w, l = new nt(this.ctx), c = _.randomId(), h = o.config.plotOptions.radialBar.hollow.image;
    if (o.config.plotOptions.radialBar.hollow.imageClipped) l.clippedImgArea({ width: a, height: a, image: h, patternID: "pattern".concat(o.globals.cuid).concat(c) }), r = "url(#pattern".concat(o.globals.cuid).concat(c, ")");
    else {
      var d = o.config.plotOptions.radialBar.hollow.imageWidth, u = o.config.plotOptions.radialBar.hollow.imageHeight;
      if (d === void 0 && u === void 0) {
        var g = o.globals.dom.Paper.image(h, function(f) {
          this.move(i.centerX - f.width / 2 + o.config.plotOptions.radialBar.hollow.imageOffsetX, i.centerY - f.height / 2 + o.config.plotOptions.radialBar.hollow.imageOffsetY);
        });
        s.add(g);
      } else {
        var p = o.globals.dom.Paper.image(h, function(f) {
          this.move(i.centerX - d / 2 + o.config.plotOptions.radialBar.hollow.imageOffsetX, i.centerY - u / 2 + o.config.plotOptions.radialBar.hollow.imageOffsetY), this.size(d, u);
        });
        s.add(p);
      }
    }
    return r;
  } }, { key: "getStrokeWidth", value: function(i) {
    var s = this.w;
    return i.size * (100 - parseInt(s.config.plotOptions.radialBar.hollow.size, 10)) / 100 / (i.series.length + 1) - this.margin;
  } }, { key: "onBarLabelClick", value: function(i) {
    var s = parseInt(i.target.getAttribute("rel"), 10) - 1, a = this.barLabels.onClick, r = this.w;
    a && a(r.globals.seriesNames[s], { w: r, seriesIndex: s });
  } }]), t;
}(), Ph = function(n) {
  mi(t, Wt);
  var e = xi(t);
  function t() {
    return ee(this, t), e.apply(this, arguments);
  }
  return te(t, [{ key: "draw", value: function(i, s) {
    var a = this.w, r = new W(this.ctx);
    this.rangeBarOptions = this.w.config.plotOptions.rangeBar, this.series = i, this.seriesRangeStart = a.globals.seriesRangeStart, this.seriesRangeEnd = a.globals.seriesRangeEnd, this.barHelpers.initVariables(i);
    for (var o = r.group({ class: "apexcharts-rangebar-series apexcharts-plot-series" }), l = 0; l < i.length; l++) {
      var c, h, d, u, g = void 0, p = void 0, f = a.globals.comboCharts ? s[l] : l, x = this.barHelpers.getGroupIndex(f).columnGroupIndex, m = r.group({ class: "apexcharts-series", seriesName: _.escapeString(a.globals.seriesNames[f]), rel: l + 1, "data:realIndex": f });
      this.ctx.series.addCollapsedClassToSeries(m, f), i[l].length > 0 && (this.visibleI = this.visibleI + 1);
      var b = 0, w = 0, y = 0;
      this.yRatio.length > 1 && (this.yaxisIndex = a.globals.seriesYAxisReverseMap[f][0], y = f);
      var v = this.barHelpers.initialPositions(f);
      p = v.y, u = v.zeroW, g = v.x, w = v.barWidth, b = v.barHeight, c = v.xDivision, h = v.yDivision, d = v.zeroH;
      for (var k = r.group({ class: "apexcharts-datalabels", "data:realIndex": f }), A = r.group({ class: "apexcharts-rangebar-goals-markers" }), S = 0; S < a.globals.dataPoints; S++) {
        var C = this.barHelpers.getStrokeWidth(l, S, f), L = this.seriesRangeStart[l][S], P = this.seriesRangeEnd[l][S], R = null, I = null, T = null, O = { x: g, y: p, strokeWidth: C, elSeries: m }, N = this.seriesLen;
        if (a.config.plotOptions.bar.rangeBarGroupRows && (N = 1), a.config.series[l].data[S] === void 0) break;
        if (this.isHorizontal) {
          T = p + b * this.visibleI;
          var D = (h - b * N) / 2;
          if (a.config.series[l].data[S].x) {
            var Y = this.detectOverlappingBars({ i: l, j: S, barYPosition: T, srty: D, barHeight: b, yDivision: h, initPositions: v });
            b = Y.barHeight, T = Y.barYPosition;
          }
          w = (R = this.drawRangeBarPaths(q({ indexes: { i: l, j: S, realIndex: f }, barHeight: b, barYPosition: T, zeroW: u, yDivision: h, y1: L, y2: P }, O))).barWidth;
        } else {
          a.globals.isXNumeric && (g = (a.globals.seriesX[l][S] - a.globals.minX) / this.xRatio - w / 2), I = g + w * this.visibleI;
          var X = (c - w * N) / 2;
          if (a.config.series[l].data[S].x) {
            var z = this.detectOverlappingBars({ i: l, j: S, barXPosition: I, srtx: X, barWidth: w, xDivision: c, initPositions: v });
            w = z.barWidth, I = z.barXPosition;
          }
          b = (R = this.drawRangeColumnPaths(q({ indexes: { i: l, j: S, realIndex: f, translationsIndex: y }, barWidth: w, barXPosition: I, zeroH: d, xDivision: c }, O))).barHeight;
        }
        var F = this.barHelpers.drawGoalLine({ barXPosition: R.barXPosition, barYPosition: T, goalX: R.goalX, goalY: R.goalY, barHeight: b, barWidth: w });
        F && A.add(F), p = R.y, g = R.x;
        var $ = this.barHelpers.getPathFillColor(i, l, S, f);
        this.renderSeries({ realIndex: f, pathFill: $.color, lineFill: $.useRangeColor ? $.color : a.globals.stroke.colors[f], j: S, i: l, x: g, y: p, y1: L, y2: P, pathFrom: R.pathFrom, pathTo: R.pathTo, strokeWidth: C, elSeries: m, series: i, barHeight: b, barWidth: w, barXPosition: I, barYPosition: T, columnGroupIndex: x, elDataLabelsWrap: k, elGoalsMarkers: A, visibleSeries: this.visibleI, type: "rangebar" });
      }
      o.add(m);
    }
    return o;
  } }, { key: "detectOverlappingBars", value: function(i) {
    var s = i.i, a = i.j, r = i.barYPosition, o = i.barXPosition, l = i.srty, c = i.srtx, h = i.barHeight, d = i.barWidth, u = i.yDivision, g = i.xDivision, p = i.initPositions, f = this.w, x = [], m = f.config.series[s].data[a].rangeName, b = f.config.series[s].data[a].x, w = Array.isArray(b) ? b.join(" ") : b, y = f.globals.labels.map(function(k) {
      return Array.isArray(k) ? k.join(" ") : k;
    }).indexOf(w), v = f.globals.seriesRange[s].findIndex(function(k) {
      return k.x === w && k.overlaps.length > 0;
    });
    return this.isHorizontal ? (r = f.config.plotOptions.bar.rangeBarGroupRows ? l + u * y : l + h * this.visibleI + u * y, v > -1 && !f.config.plotOptions.bar.rangeBarOverlap && (x = f.globals.seriesRange[s][v].overlaps).indexOf(m) > -1 && (r = (h = p.barHeight / x.length) * this.visibleI + u * (100 - parseInt(this.barOptions.barHeight, 10)) / 100 / 2 + h * (this.visibleI + x.indexOf(m)) + u * y)) : (y > -1 && !f.globals.timescaleLabels.length && (o = f.config.plotOptions.bar.rangeBarGroupRows ? c + g * y : c + d * this.visibleI + g * y), v > -1 && !f.config.plotOptions.bar.rangeBarOverlap && (x = f.globals.seriesRange[s][v].overlaps).indexOf(m) > -1 && (o = (d = p.barWidth / x.length) * this.visibleI + g * (100 - parseInt(this.barOptions.barWidth, 10)) / 100 / 2 + d * (this.visibleI + x.indexOf(m)) + g * y)), { barYPosition: r, barXPosition: o, barHeight: h, barWidth: d };
  } }, { key: "drawRangeColumnPaths", value: function(i) {
    var s = i.indexes, a = i.x, r = i.xDivision, o = i.barWidth, l = i.barXPosition, c = i.zeroH, h = this.w, d = s.i, u = s.j, g = s.realIndex, p = s.translationsIndex, f = this.yRatio[p], x = this.getRangeValue(g, u), m = Math.min(x.start, x.end), b = Math.max(x.start, x.end);
    this.series[d][u] === void 0 || this.series[d][u] === null ? m = c : (m = c - m / f, b = c - b / f);
    var w = Math.abs(b - m), y = this.barHelpers.getColumnPaths({ barXPosition: l, barWidth: o, y1: m, y2: b, strokeWidth: this.strokeWidth, series: this.seriesRangeEnd, realIndex: g, i: g, j: u, w: h });
    if (h.globals.isXNumeric) {
      var v = this.getBarXForNumericXAxis({ x: a, j: u, realIndex: g, barWidth: o });
      a = v.x, l = v.barXPosition;
    } else a += r;
    return { pathTo: y.pathTo, pathFrom: y.pathFrom, barHeight: w, x: a, y: x.start < 0 && x.end < 0 ? m : b, goalY: this.barHelpers.getGoalValues("y", null, c, d, u, p), barXPosition: l };
  } }, { key: "preventBarOverflow", value: function(i) {
    var s = this.w;
    return i < 0 && (i = 0), i > s.globals.gridWidth && (i = s.globals.gridWidth), i;
  } }, { key: "drawRangeBarPaths", value: function(i) {
    var s = i.indexes, a = i.y, r = i.y1, o = i.y2, l = i.yDivision, c = i.barHeight, h = i.barYPosition, d = i.zeroW, u = this.w, g = s.realIndex, p = s.j, f = this.preventBarOverflow(d + r / this.invertedYRatio), x = this.preventBarOverflow(d + o / this.invertedYRatio), m = this.getRangeValue(g, p), b = Math.abs(x - f), w = this.barHelpers.getBarpaths({ barYPosition: h, barHeight: c, x1: f, x2: x, strokeWidth: this.strokeWidth, series: this.seriesRangeEnd, i: g, realIndex: g, j: p, w: u });
    return u.globals.isXNumeric || (a += l), { pathTo: w.pathTo, pathFrom: w.pathFrom, barWidth: b, x: m.start < 0 && m.end < 0 ? f : x, goalX: this.barHelpers.getGoalValues("x", d, null, g, p), y: a };
  } }, { key: "getRangeValue", value: function(i, s) {
    var a = this.w;
    return { start: a.globals.seriesRangeStart[i][s], end: a.globals.seriesRangeEnd[i][s] };
  } }]), t;
}(), Th = function() {
  function n(e) {
    ee(this, n), this.w = e.w, this.lineCtx = e;
  }
  return te(n, [{ key: "sameValueSeriesFix", value: function(e, t) {
    var i = this.w;
    if ((i.config.fill.type === "gradient" || i.config.fill.type[e] === "gradient") && new Oe(this.lineCtx.ctx, i).seriesHaveSameValues(e)) {
      var s = t[e].slice();
      s[s.length - 1] = s[s.length - 1] + 1e-6, t[e] = s;
    }
    return t;
  } }, { key: "calculatePoints", value: function(e) {
    var t = e.series, i = e.realIndex, s = e.x, a = e.y, r = e.i, o = e.j, l = e.prevY, c = this.w, h = [], d = [], u = this.lineCtx.categoryAxisCorrection + c.config.markers.offsetX;
    return c.globals.isXNumeric && (u = (c.globals.seriesX[i][0] - c.globals.minX) / this.lineCtx.xRatio + c.config.markers.offsetX), o === 0 && (h.push(u), d.push(_.isNumber(t[r][0]) ? l + c.config.markers.offsetY : null)), h.push(s + c.config.markers.offsetX), d.push(_.isNumber(t[r][o + 1]) ? a + c.config.markers.offsetY : null), { x: h, y: d };
  } }, { key: "checkPreviousPaths", value: function(e) {
    for (var t = e.pathFromLine, i = e.pathFromArea, s = e.realIndex, a = this.w, r = 0; r < a.globals.previousPaths.length; r++) {
      var o = a.globals.previousPaths[r];
      (o.type === "line" || o.type === "area") && o.paths.length > 0 && parseInt(o.realIndex, 10) === parseInt(s, 10) && (o.type === "line" ? (this.lineCtx.appendPathFrom = !1, t = a.globals.previousPaths[r].paths[0].d) : o.type === "area" && (this.lineCtx.appendPathFrom = !1, i = a.globals.previousPaths[r].paths[0].d, a.config.stroke.show && a.globals.previousPaths[r].paths[1] && (t = a.globals.previousPaths[r].paths[1].d)));
    }
    return { pathFromLine: t, pathFromArea: i };
  } }, { key: "determineFirstPrevY", value: function(e) {
    var t, i, s, a = e.i, r = e.realIndex, o = e.series, l = e.prevY, c = e.lineYPosition, h = e.translationsIndex, d = this.w, u = d.config.chart.stacked && !d.globals.comboCharts || d.config.chart.stacked && d.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || ((t = this.w.config.series[r]) === null || t === void 0 ? void 0 : t.type) === "bar" || ((i = this.w.config.series[r]) === null || i === void 0 ? void 0 : i.type) === "column");
    if (((s = o[a]) === null || s === void 0 ? void 0 : s[0]) !== void 0) l = (c = u && a > 0 ? this.lineCtx.prevSeriesY[a - 1][0] : this.lineCtx.zeroY) - o[a][0] / this.lineCtx.yRatio[h] + 2 * (this.lineCtx.isReversed ? o[a][0] / this.lineCtx.yRatio[h] : 0);
    else if (u && a > 0 && o[a][0] === void 0) {
      for (var g = a - 1; g >= 0; g--) if (o[g][0] !== null && o[g][0] !== void 0) {
        l = c = this.lineCtx.prevSeriesY[g][0];
        break;
      }
    }
    return { prevY: l, lineYPosition: c };
  } }]), n;
}(), Ih = function(n) {
  for (var e, t, i, s, a = function(h) {
    for (var d = [], u = h[0], g = h[1], p = d[0] = ms(u, g), f = 1, x = h.length - 1; f < x; f++) u = g, g = h[f + 1], d[f] = 0.5 * (p + (p = ms(u, g)));
    return d[f] = p, d;
  }(n), r = n.length - 1, o = [], l = 0; l < r; l++) i = ms(n[l], n[l + 1]), Math.abs(i) < 1e-6 ? a[l] = a[l + 1] = 0 : (s = (e = a[l] / i) * e + (t = a[l + 1] / i) * t) > 9 && (s = 3 * i / Math.sqrt(s), a[l] = s * e, a[l + 1] = s * t);
  for (var c = 0; c <= r; c++) s = (n[Math.min(r, c + 1)][0] - n[Math.max(0, c - 1)][0]) / (6 * (1 + a[c] * a[c])), o.push([s || 0, a[c] * s || 0]);
  return o;
}, Eh = function(n) {
  var e = Ih(n), t = n[1], i = n[0], s = [], a = e[1], r = e[0];
  s.push(i, [i[0] + r[0], i[1] + r[1], t[0] - a[0], t[1] - a[1], t[0], t[1]]);
  for (var o = 2, l = e.length; o < l; o++) {
    var c = n[o], h = e[o];
    s.push([c[0] - h[0], c[1] - h[1], c[0], c[1]]);
  }
  return s;
}, Rh = function(n, e, t) {
  var i = n.slice(e, t);
  if (e) {
    if (t - e > 1 && i[1].length < 6) {
      var s = i[0].length;
      i[1] = [2 * i[0][s - 2] - i[0][s - 4], 2 * i[0][s - 1] - i[0][s - 3]].concat(i[1]);
    }
    i[0] = i[0].slice(-2);
  }
  return i;
};
function ms(n, e) {
  return (e[1] - n[1]) / (e[0] - n[0]);
}
var bs = function() {
  function n(e, t, i) {
    ee(this, n), this.ctx = e, this.w = e.w, this.xyRatios = t, this.pointsChart = !(this.w.config.chart.type !== "bubble" && this.w.config.chart.type !== "scatter") || i, this.scatter = new jn(this.ctx), this.noNegatives = this.w.globals.minX === Number.MAX_VALUE, this.lineHelpers = new Th(this), this.markers = new Zt(this.ctx), this.prevSeriesY = [], this.categoryAxisCorrection = 0, this.yaxisIndex = 0;
  }
  return te(n, [{ key: "draw", value: function(e, t, i, s) {
    var a, r = this.w, o = new W(this.ctx), l = r.globals.comboCharts ? t : r.config.chart.type, c = o.group({ class: "apexcharts-".concat(l, "-series apexcharts-plot-series") }), h = new Oe(this.ctx, r);
    this.yRatio = this.xyRatios.yRatio, this.zRatio = this.xyRatios.zRatio, this.xRatio = this.xyRatios.xRatio, this.baseLineY = this.xyRatios.baseLineY, e = h.getLogSeries(e), this.yRatio = h.getLogYRatios(this.yRatio), this.prevSeriesY = [];
    for (var d = [], u = 0; u < e.length; u++) {
      e = this.lineHelpers.sameValueSeriesFix(u, e);
      var g = r.globals.comboCharts ? i[u] : u, p = this.yRatio.length > 1 ? g : 0;
      this._initSerieVariables(e, u, g);
      var f = [], x = [], m = [], b = r.globals.padHorizontal + this.categoryAxisCorrection;
      this.ctx.series.addCollapsedClassToSeries(this.elSeries, g), r.globals.isXNumeric && r.globals.seriesX.length > 0 && (b = (r.globals.seriesX[g][0] - r.globals.minX) / this.xRatio), m.push(b);
      var w, y = b, v = void 0, k = y, A = this.zeroY, S = this.zeroY;
      A = this.lineHelpers.determineFirstPrevY({ i: u, realIndex: g, series: e, prevY: A, lineYPosition: 0, translationsIndex: p }).prevY, r.config.stroke.curve === "monotoneCubic" && e[u][0] === null ? f.push(null) : f.push(A), w = A, l === "rangeArea" && (v = S = this.lineHelpers.determineFirstPrevY({ i: u, realIndex: g, series: s, prevY: S, lineYPosition: 0, translationsIndex: p }).prevY, x.push(f[0] !== null ? S : null));
      var C = this._calculatePathsFrom({ type: l, series: e, i: u, realIndex: g, translationsIndex: p, prevX: k, prevY: A, prevY2: S }), L = [f[0]], P = [x[0]], R = { type: l, series: e, realIndex: g, translationsIndex: p, i: u, x: b, y: 1, pX: y, pY: w, pathsFrom: C, linePaths: [], areaPaths: [], seriesIndex: i, lineYPosition: 0, xArrj: m, yArrj: f, y2Arrj: x, seriesRangeEnd: s }, I = this._iterateOverDataPoints(q(q({}, R), {}, { iterations: l === "rangeArea" ? e[u].length - 1 : void 0, isRangeStart: !0 }));
      if (l === "rangeArea") {
        for (var T = this._calculatePathsFrom({ series: s, i: u, realIndex: g, prevX: k, prevY: S }), O = this._iterateOverDataPoints(q(q({}, R), {}, { series: s, xArrj: [b], yArrj: L, y2Arrj: P, pY: v, areaPaths: I.areaPaths, pathsFrom: T, iterations: s[u].length - 1, isRangeStart: !1 })), N = I.linePaths.length / 2, D = 0; D < N; D++) I.linePaths[D] = O.linePaths[D + N] + I.linePaths[D];
        I.linePaths.splice(N), I.pathFromLine = O.pathFromLine + I.pathFromLine;
      } else I.pathFromArea += "z";
      this._handlePaths({ type: l, realIndex: g, i: u, paths: I }), this.elSeries.add(this.elPointsMain), this.elSeries.add(this.elDataLabelsWrap), d.push(this.elSeries);
    }
    if (((a = r.config.series[0]) === null || a === void 0 ? void 0 : a.zIndex) !== void 0 && d.sort(function(z, F) {
      return Number(z.node.getAttribute("zIndex")) - Number(F.node.getAttribute("zIndex"));
    }), r.config.chart.stacked) for (var Y = d.length - 1; Y >= 0; Y--) c.add(d[Y]);
    else for (var X = 0; X < d.length; X++) c.add(d[X]);
    return c;
  } }, { key: "_initSerieVariables", value: function(e, t, i) {
    var s = this.w, a = new W(this.ctx);
    this.xDivision = s.globals.gridWidth / (s.globals.dataPoints - (s.config.xaxis.tickPlacement === "on" ? 1 : 0)), this.strokeWidth = Array.isArray(s.config.stroke.width) ? s.config.stroke.width[i] : s.config.stroke.width;
    var r = 0;
    if (this.yRatio.length > 1 && (this.yaxisIndex = s.globals.seriesYAxisReverseMap[i], r = i), this.isReversed = s.config.yaxis[this.yaxisIndex] && s.config.yaxis[this.yaxisIndex].reversed, this.zeroY = s.globals.gridHeight - this.baseLineY[r] - (this.isReversed ? s.globals.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[r] : 0), this.areaBottomY = this.zeroY, (this.zeroY > s.globals.gridHeight || s.config.plotOptions.area.fillTo === "end") && (this.areaBottomY = s.globals.gridHeight), this.categoryAxisCorrection = this.xDivision / 2, this.elSeries = a.group({ class: "apexcharts-series", zIndex: s.config.series[i].zIndex !== void 0 ? s.config.series[i].zIndex : i, seriesName: _.escapeString(s.globals.seriesNames[i]) }), this.elPointsMain = a.group({ class: "apexcharts-series-markers-wrap", "data:realIndex": i }), s.globals.hasNullValues) {
      var o = this.markers.plotChartMarkers({ pointsPos: { x: [0], y: [s.globals.gridHeight + s.globals.markers.largestSize] }, seriesIndex: t, j: 0, pSize: 0.1, alwaysDrawMarker: !0, isVirtualPoint: !0 });
      o !== null && this.elPointsMain.add(o);
    }
    this.elDataLabelsWrap = a.group({ class: "apexcharts-datalabels", "data:realIndex": i });
    var l = e[t].length === s.globals.dataPoints;
    this.elSeries.attr({ "data:longestSeries": l, rel: t + 1, "data:realIndex": i }), this.appendPathFrom = !0;
  } }, { key: "_calculatePathsFrom", value: function(e) {
    var t, i, s, a, r = e.type, o = e.series, l = e.i, c = e.realIndex, h = e.translationsIndex, d = e.prevX, u = e.prevY, g = e.prevY2, p = this.w, f = new W(this.ctx);
    if (o[l][0] === null) {
      for (var x = 0; x < o[l].length; x++) if (o[l][x] !== null) {
        d = this.xDivision * x, u = this.zeroY - o[l][x] / this.yRatio[h], t = f.move(d, u), i = f.move(d, this.areaBottomY);
        break;
      }
    } else t = f.move(d, u), r === "rangeArea" && (t = f.move(d, g) + f.line(d, u)), i = f.move(d, this.areaBottomY) + f.line(d, u);
    if (s = f.move(0, this.areaBottomY) + f.line(0, this.areaBottomY), a = f.move(0, this.areaBottomY) + f.line(0, this.areaBottomY), p.globals.previousPaths.length > 0) {
      var m = this.lineHelpers.checkPreviousPaths({ pathFromLine: s, pathFromArea: a, realIndex: c });
      s = m.pathFromLine, a = m.pathFromArea;
    }
    return { prevX: d, prevY: u, linePath: t, areaPath: i, pathFromLine: s, pathFromArea: a };
  } }, { key: "_handlePaths", value: function(e) {
    var t = e.type, i = e.realIndex, s = e.i, a = e.paths, r = this.w, o = new W(this.ctx), l = new nt(this.ctx);
    this.prevSeriesY.push(a.yArrj), r.globals.seriesXvalues[i] = a.xArrj, r.globals.seriesYvalues[i] = a.yArrj;
    var c = r.config.forecastDataPoints;
    if (c.count > 0 && t !== "rangeArea") {
      var h = r.globals.seriesXvalues[i][r.globals.seriesXvalues[i].length - c.count - 1], d = o.drawRect(h, 0, r.globals.gridWidth, r.globals.gridHeight, 0);
      r.globals.dom.elForecastMask.appendChild(d.node);
      var u = o.drawRect(0, 0, h, r.globals.gridHeight, 0);
      r.globals.dom.elNonForecastMask.appendChild(u.node);
    }
    this.pointsChart || r.globals.delayedElements.push({ el: this.elPointsMain.node, index: i });
    var g = { i: s, realIndex: i, animationDelay: s, initialSpeed: r.config.chart.animations.speed, dataChangeSpeed: r.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-".concat(t) };
    if (t === "area") for (var p = l.fillPath({ seriesNumber: i }), f = 0; f < a.areaPaths.length; f++) {
      var x = o.renderPaths(q(q({}, g), {}, { pathFrom: a.pathFromArea, pathTo: a.areaPaths[f], stroke: "none", strokeWidth: 0, strokeLineCap: null, fill: p }));
      this.elSeries.add(x);
    }
    if (r.config.stroke.show && !this.pointsChart) {
      var m = null;
      if (t === "line") m = l.fillPath({ seriesNumber: i, i: s });
      else if (r.config.stroke.fill.type === "solid") m = r.globals.stroke.colors[i];
      else {
        var b = r.config.fill;
        r.config.fill = r.config.stroke.fill, m = l.fillPath({ seriesNumber: i, i: s }), r.config.fill = b;
      }
      for (var w = 0; w < a.linePaths.length; w++) {
        var y = m;
        t === "rangeArea" && (y = l.fillPath({ seriesNumber: i }));
        var v = q(q({}, g), {}, { pathFrom: a.pathFromLine, pathTo: a.linePaths[w], stroke: m, strokeWidth: this.strokeWidth, strokeLineCap: r.config.stroke.lineCap, fill: t === "rangeArea" ? y : "none" }), k = o.renderPaths(v);
        if (this.elSeries.add(k), k.attr("fill-rule", "evenodd"), c.count > 0 && t !== "rangeArea") {
          var A = o.renderPaths(v);
          A.node.setAttribute("stroke-dasharray", c.dashArray), c.strokeWidth && A.node.setAttribute("stroke-width", c.strokeWidth), this.elSeries.add(A), A.attr("clip-path", "url(#forecastMask".concat(r.globals.cuid, ")")), k.attr("clip-path", "url(#nonForecastMask".concat(r.globals.cuid, ")"));
        }
      }
    }
  } }, { key: "_iterateOverDataPoints", value: function(e) {
    var t, i, s = this, a = e.type, r = e.series, o = e.iterations, l = e.realIndex, c = e.translationsIndex, h = e.i, d = e.x, u = e.y, g = e.pX, p = e.pY, f = e.pathsFrom, x = e.linePaths, m = e.areaPaths, b = e.seriesIndex, w = e.lineYPosition, y = e.xArrj, v = e.yArrj, k = e.y2Arrj, A = e.isRangeStart, S = e.seriesRangeEnd, C = this.w, L = new W(this.ctx), P = this.yRatio, R = f.prevY, I = f.linePath, T = f.areaPath, O = f.pathFromLine, N = f.pathFromArea, D = _.isNumber(C.globals.minYArr[l]) ? C.globals.minYArr[l] : C.globals.minY;
    o || (o = C.globals.dataPoints > 1 ? C.globals.dataPoints - 1 : C.globals.dataPoints);
    var Y = function(se, Q) {
      return Q - se / P[c] + 2 * (s.isReversed ? se / P[c] : 0);
    }, X = u, z = C.config.chart.stacked && !C.globals.comboCharts || C.config.chart.stacked && C.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || ((t = this.w.config.series[l]) === null || t === void 0 ? void 0 : t.type) === "bar" || ((i = this.w.config.series[l]) === null || i === void 0 ? void 0 : i.type) === "column"), F = C.config.stroke.curve;
    Array.isArray(F) && (F = Array.isArray(b) ? F[b[h]] : F[h]);
    for (var $, Z = 0, H = 0; H < o && r[h].length !== 0; H++) {
      var J = r[h][H + 1] === void 0 || r[h][H + 1] === null;
      if (C.globals.isXNumeric) {
        var G = C.globals.seriesX[l][H + 1];
        C.globals.seriesX[l][H + 1] === void 0 && (G = C.globals.seriesX[l][o - 1]), d = (G - C.globals.minX) / this.xRatio;
      } else d += this.xDivision;
      z ? h > 0 && C.globals.collapsedSeries.length < C.config.series.length - 1 ? w = this.prevSeriesY[function(se) {
        for (var Q = se; Q > 0; Q--) {
          if (!(C.globals.collapsedSeriesIndices.indexOf((b == null ? void 0 : b[Q]) || Q) > -1)) return Q;
          Q--;
        }
        return 0;
      }(h - 1)][H + 1] : w = this.zeroY : w = this.zeroY, J ? u = Y(D, w) : (u = Y(r[h][H + 1], w), a === "rangeArea" && (X = Y(S[h][H + 1], w))), y.push(r[h][H + 1] === null ? null : d), !J || C.config.stroke.curve !== "smooth" && C.config.stroke.curve !== "monotoneCubic" ? (v.push(u), k.push(X)) : (v.push(null), k.push(null));
      var V = this.lineHelpers.calculatePoints({ series: r, x: d, y: u, realIndex: l, i: h, j: H, prevY: R }), K = this._createPaths({ type: a, series: r, i: h, realIndex: l, j: H, x: d, y: u, y2: X, xArrj: y, yArrj: v, y2Arrj: k, pX: g, pY: p, pathState: Z, segmentStartX: $, linePath: I, areaPath: T, linePaths: x, areaPaths: m, curve: F, isRangeStart: A });
      m = K.areaPaths, x = K.linePaths, g = K.pX, p = K.pY, Z = K.pathState, $ = K.segmentStartX, T = K.areaPath, I = K.linePath, !this.appendPathFrom || C.globals.hasNullValues || F === "monotoneCubic" && a === "rangeArea" || (O += L.line(d, this.areaBottomY), N += L.line(d, this.areaBottomY)), this.handleNullDataPoints(r, V, h, H, l), this._handleMarkersAndLabels({ type: a, pointsPos: V, i: h, j: H, realIndex: l, isRangeStart: A });
    }
    return { yArrj: v, xArrj: y, pathFromArea: N, areaPaths: m, pathFromLine: O, linePaths: x, linePath: I, areaPath: T };
  } }, { key: "_handleMarkersAndLabels", value: function(e) {
    var t = e.type, i = e.pointsPos, s = e.isRangeStart, a = e.i, r = e.j, o = e.realIndex, l = this.w, c = new jt(this.ctx);
    if (this.pointsChart) this.scatter.draw(this.elSeries, r, { realIndex: o, pointsPos: i, zRatio: this.zRatio, elParent: this.elPointsMain });
    else {
      l.globals.series[a].length > 1 && this.elPointsMain.node.classList.add("apexcharts-element-hidden");
      var h = this.markers.plotChartMarkers({ pointsPos: i, seriesIndex: o, j: r + 1 });
      h !== null && this.elPointsMain.add(h);
    }
    var d = c.drawDataLabel({ type: t, isRangeStart: s, pos: i, i: o, j: r + 1 });
    d !== null && this.elDataLabelsWrap.add(d);
  } }, { key: "_createPaths", value: function(e) {
    var t = e.type, i = e.series, s = e.i;
    e.realIndex;
    var a, r = e.j, o = e.x, l = e.y, c = e.xArrj, h = e.yArrj, d = e.y2, u = e.y2Arrj, g = e.pX, p = e.pY, f = e.pathState, x = e.segmentStartX, m = e.linePath, b = e.areaPath, w = e.linePaths, y = e.areaPaths, v = e.curve, k = e.isRangeStart, A = new W(this.ctx), S = this.areaBottomY, C = t === "rangeArea", L = t === "rangeArea" && k;
    switch (v) {
      case "monotoneCubic":
        var P = k ? h : u;
        switch (f) {
          case 0:
            if (P[r + 1] === null) break;
            f = 1;
          case 1:
            if (!(C ? c.length === i[s].length : r === i[s].length - 2)) break;
          case 2:
            var R = k ? c : c.slice().reverse(), I = k ? P : P.slice().reverse(), T = (a = I, R.map(function(G, V) {
              return [G, a[V]];
            }).filter(function(G) {
              return G[1] !== null;
            })), O = T.length > 1 ? Eh(T) : T, N = [];
            C && (L ? y = T : N = y.reverse());
            var D = 0, Y = 0;
            if (function(G, V) {
              for (var K = function(B) {
                var ue = [], Ee = 0;
                return B.forEach(function(De) {
                  De !== null ? Ee++ : Ee > 0 && (ue.push(Ee), Ee = 0);
                }), Ee > 0 && ue.push(Ee), ue;
              }(G), se = [], Q = 0, re = 0; Q < K.length; re += K[Q++]) se[Q] = Rh(V, re, re + K[Q]);
              return se;
            }(I, O).forEach(function(G) {
              D++;
              var V = function(Q) {
                for (var re = "", B = 0; B < Q.length; B++) {
                  var ue = Q[B], Ee = ue.length;
                  Ee > 4 ? (re += "C".concat(ue[0], ", ").concat(ue[1]), re += ", ".concat(ue[2], ", ").concat(ue[3]), re += ", ".concat(ue[4], ", ").concat(ue[5])) : Ee > 2 && (re += "S".concat(ue[0], ", ").concat(ue[1]), re += ", ".concat(ue[2], ", ").concat(ue[3]));
                }
                return re;
              }(G), K = Y, se = (Y += G.length) - 1;
              L ? m = A.move(T[K][0], T[K][1]) + V : C ? m = A.move(N[K][0], N[K][1]) + A.line(T[K][0], T[K][1]) + V + A.line(N[se][0], N[se][1]) : (m = A.move(T[K][0], T[K][1]) + V, b = m + A.line(T[se][0], S) + A.line(T[K][0], S) + "z", y.push(b)), w.push(m);
            }), C && D > 1 && !L) {
              var X = w.slice(D).reverse();
              w.splice(D), X.forEach(function(G) {
                return w.push(G);
              });
            }
            f = 0;
        }
        break;
      case "smooth":
        var z = 0.35 * (o - g);
        if (i[s][r] === null) f = 0;
        else switch (f) {
          case 0:
            if (x = g, m = L ? A.move(g, u[r]) + A.line(g, p) : A.move(g, p), b = A.move(g, p), i[s][r + 1] === null || i[s][r + 1] === void 0) {
              w.push(m), y.push(b);
              break;
            }
            if (f = 1, r < i[s].length - 2) {
              var F = A.curve(g + z, p, o - z, l, o, l);
              m += F, b += F;
              break;
            }
          case 1:
            if (i[s][r + 1] === null) m += L ? A.line(g, d) : A.move(g, p), b += A.line(g, S) + A.line(x, S) + "z", w.push(m), y.push(b), f = -1;
            else {
              var $ = A.curve(g + z, p, o - z, l, o, l);
              m += $, b += $, r >= i[s].length - 2 && (L && (m += A.curve(o, l, o, l, o, d) + A.move(o, d)), b += A.curve(o, l, o, l, o, S) + A.line(x, S) + "z", w.push(m), y.push(b), f = -1);
            }
        }
        g = o, p = l;
        break;
      default:
        var Z = function(G, V, K) {
          var se = [];
          switch (G) {
            case "stepline":
              se = A.line(V, null, "H") + A.line(null, K, "V");
              break;
            case "linestep":
              se = A.line(null, K, "V") + A.line(V, null, "H");
              break;
            case "straight":
              se = A.line(V, K);
          }
          return se;
        };
        if (i[s][r] === null) f = 0;
        else switch (f) {
          case 0:
            if (x = g, m = L ? A.move(g, u[r]) + A.line(g, p) : A.move(g, p), b = A.move(g, p), i[s][r + 1] === null || i[s][r + 1] === void 0) {
              w.push(m), y.push(b);
              break;
            }
            if (f = 1, r < i[s].length - 2) {
              var H = Z(v, o, l);
              m += H, b += H;
              break;
            }
          case 1:
            if (i[s][r + 1] === null) m += L ? A.line(g, d) : A.move(g, p), b += A.line(g, S) + A.line(x, S) + "z", w.push(m), y.push(b), f = -1;
            else {
              var J = Z(v, o, l);
              m += J, b += J, r >= i[s].length - 2 && (L && (m += A.line(o, d)), b += A.line(o, S) + A.line(x, S) + "z", w.push(m), y.push(b), f = -1);
            }
        }
        g = o, p = l;
    }
    return { linePaths: w, areaPaths: y, pX: g, pY: p, pathState: f, segmentStartX: x, linePath: m, areaPath: b };
  } }, { key: "handleNullDataPoints", value: function(e, t, i, s, a) {
    var r = this.w;
    if (e[i][s] === null && r.config.markers.showNullDataPoints || e[i].length === 1) {
      var o = this.strokeWidth - r.config.markers.strokeWidth / 2;
      o > 0 || (o = 0);
      var l = this.markers.plotChartMarkers({ pointsPos: t, seriesIndex: a, j: s + 1, pSize: o, alwaysDrawMarker: !0 });
      l !== null && this.elPointsMain.add(l);
    }
  } }]), n;
}();
window.TreemapSquared = {}, window.TreemapSquared.generate = /* @__PURE__ */ function() {
  function n(o, l, c, h) {
    this.xoffset = o, this.yoffset = l, this.height = h, this.width = c, this.shortestEdge = function() {
      return Math.min(this.height, this.width);
    }, this.getCoordinates = function(d) {
      var u, g = [], p = this.xoffset, f = this.yoffset, x = a(d) / this.height, m = a(d) / this.width;
      if (this.width >= this.height) for (u = 0; u < d.length; u++) g.push([p, f, p + x, f + d[u] / x]), f += d[u] / x;
      else for (u = 0; u < d.length; u++) g.push([p, f, p + d[u] / m, f + m]), p += d[u] / m;
      return g;
    }, this.cutArea = function(d) {
      var u;
      if (this.width >= this.height) {
        var g = d / this.height, p = this.width - g;
        u = new n(this.xoffset + g, this.yoffset, p, this.height);
      } else {
        var f = d / this.width, x = this.height - f;
        u = new n(this.xoffset, this.yoffset + f, this.width, x);
      }
      return u;
    };
  }
  function e(o, l, c, h, d) {
    h = h === void 0 ? 0 : h, d = d === void 0 ? 0 : d;
    var u = t(function(g, p) {
      var f, x = [], m = p / a(g);
      for (f = 0; f < g.length; f++) x[f] = g[f] * m;
      return x;
    }(o, l * c), [], new n(h, d, l, c), []);
    return function(g) {
      var p, f, x = [];
      for (p = 0; p < g.length; p++) for (f = 0; f < g[p].length; f++) x.push(g[p][f]);
      return x;
    }(u);
  }
  function t(o, l, c, h) {
    var d, u, g;
    if (o.length !== 0) return d = c.shortestEdge(), function(p, f, x) {
      var m;
      if (p.length === 0) return !0;
      (m = p.slice()).push(f);
      var b = i(p, x), w = i(m, x);
      return b >= w;
    }(l, u = o[0], d) ? (l.push(u), t(o.slice(1), l, c, h)) : (g = c.cutArea(a(l), h), h.push(c.getCoordinates(l)), t(o, [], g, h)), h;
    h.push(c.getCoordinates(l));
  }
  function i(o, l) {
    var c = Math.min.apply(Math, o), h = Math.max.apply(Math, o), d = a(o);
    return Math.max(Math.pow(l, 2) * h / Math.pow(d, 2), Math.pow(d, 2) / (Math.pow(l, 2) * c));
  }
  function s(o) {
    return o && o.constructor === Array;
  }
  function a(o) {
    var l, c = 0;
    for (l = 0; l < o.length; l++) c += o[l];
    return c;
  }
  function r(o) {
    var l, c = 0;
    if (s(o[0])) for (l = 0; l < o.length; l++) c += r(o[l]);
    else c = a(o);
    return c;
  }
  return function o(l, c, h, d, u) {
    d = d === void 0 ? 0 : d, u = u === void 0 ? 0 : u;
    var g, p, f = [], x = [];
    if (s(l[0])) {
      for (p = 0; p < l.length; p++) f[p] = r(l[p]);
      for (g = e(f, c, h, d, u), p = 0; p < l.length; p++) x.push(o(l[p], g[p][2] - g[p][0], g[p][3] - g[p][1], g[p][0], g[p][1]));
    } else x = e(l, c, h, d, u);
    return x;
  };
}();
var Oh = function() {
  function n(e, t) {
    ee(this, n), this.ctx = e, this.w = e.w, this.strokeWidth = this.w.config.stroke.width, this.helpers = new qn(e), this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.labels = [];
  }
  return te(n, [{ key: "draw", value: function(e) {
    var t = this, i = this.w, s = new W(this.ctx), a = new nt(this.ctx), r = s.group({ class: "apexcharts-treemap" });
    if (i.globals.noData) return r;
    var o = [];
    return e.forEach(function(l) {
      var c = l.map(function(h) {
        return Math.abs(h);
      });
      o.push(c);
    }), this.negRange = this.helpers.checkColorRange(), i.config.series.forEach(function(l, c) {
      l.data.forEach(function(h) {
        Array.isArray(t.labels[c]) || (t.labels[c] = []), t.labels[c].push(h.x);
      });
    }), window.TreemapSquared.generate(o, i.globals.gridWidth, i.globals.gridHeight).forEach(function(l, c) {
      var h = s.group({ class: "apexcharts-series apexcharts-treemap-series", seriesName: _.escapeString(i.globals.seriesNames[c]), rel: c + 1, "data:realIndex": c });
      if (i.config.chart.dropShadow.enabled) {
        var d = i.config.chart.dropShadow;
        new Fe(t.ctx).dropShadow(r, d, c);
      }
      var u = s.group({ class: "apexcharts-data-labels" }), g = { xMin: 1 / 0, yMin: 1 / 0, xMax: -1 / 0, yMax: -1 / 0 };
      l.forEach(function(O, N) {
        var D = O[0], Y = O[1], X = O[2], z = O[3];
        g.xMin = Math.min(g.xMin, D), g.yMin = Math.min(g.yMin, Y), g.xMax = Math.max(g.xMax, X), g.yMax = Math.max(g.yMax, z);
        var F = t.helpers.getShadeColor(i.config.chart.type, c, N, t.negRange), $ = F.color, Z = a.fillPath({ color: $, seriesNumber: c, dataPointIndex: N }), H = s.drawRect(D, Y, X - D, z - Y, i.config.plotOptions.treemap.borderRadius, "#fff", 1, t.strokeWidth, i.config.plotOptions.treemap.useFillColorAsStroke ? $ : i.globals.stroke.colors[c]);
        H.attr({ cx: D, cy: Y, index: c, i: c, j: N, width: X - D, height: z - Y, fill: Z }), H.node.classList.add("apexcharts-treemap-rect"), t.helpers.addListeners(H);
        var J = { x: D + (X - D) / 2, y: Y + (z - Y) / 2, width: 0, height: 0 }, G = { x: D, y: Y, width: X - D, height: z - Y };
        if (i.config.chart.animations.enabled && !i.globals.dataChanged) {
          var V = 1;
          i.globals.resized || (V = i.config.chart.animations.speed), t.animateTreemap(H, J, G, V);
        }
        if (i.globals.dataChanged) {
          var K = 1;
          t.dynamicAnim.enabled && i.globals.shouldAnimate && (K = t.dynamicAnim.speed, i.globals.previousPaths[c] && i.globals.previousPaths[c][N] && i.globals.previousPaths[c][N].rect && (J = i.globals.previousPaths[c][N].rect), t.animateTreemap(H, J, G, K));
        }
        var se = t.getFontSize(O), Q = i.config.dataLabels.formatter(t.labels[c][N], { value: i.globals.series[c][N], seriesIndex: c, dataPointIndex: N, w: i });
        i.config.plotOptions.treemap.dataLabels.format === "truncate" && (se = parseInt(i.config.dataLabels.style.fontSize, 10), Q = t.truncateLabels(Q, se, D, Y, X, z));
        var re = null;
        i.globals.series[c][N] && (re = t.helpers.calculateDataLabels({ text: Q, x: (D + X) / 2, y: (Y + z) / 2 + t.strokeWidth / 2 + se / 3, i: c, j: N, colorProps: F, fontSize: se, series: e })), i.config.dataLabels.enabled && re && t.rotateToFitLabel(re, se, Q, D, Y, X, z), h.add(H), re !== null && h.add(re);
      });
      var p = i.config.plotOptions.treemap.seriesTitle;
      if (i.config.series.length > 1 && p && p.show) {
        var f = i.config.series[c].name || "";
        if (f && g.xMin < 1 / 0 && g.yMin < 1 / 0) {
          var x = p.offsetX, m = p.offsetY, b = p.borderColor, w = p.borderWidth, y = p.borderRadius, v = p.style, k = v.color || i.config.chart.foreColor, A = { left: v.padding.left, right: v.padding.right, top: v.padding.top, bottom: v.padding.bottom }, S = s.getTextRects(f, v.fontSize, v.fontFamily), C = S.width + A.left + A.right, L = S.height + A.top + A.bottom, P = g.xMin + (x || 0), R = g.yMin + (m || 0), I = s.drawRect(P, R, C, L, y, v.background, 1, w, b), T = s.drawText({ x: P + A.left, y: R + A.top + 0.75 * S.height, text: f, fontSize: v.fontSize, fontFamily: v.fontFamily, fontWeight: v.fontWeight, foreColor: k, cssClass: v.cssClass || "" });
          h.add(I), h.add(T);
        }
      }
      h.add(u), r.add(h);
    }), r;
  } }, { key: "getFontSize", value: function(e) {
    var t = this.w, i = function s(a) {
      var r, o = 0;
      if (Array.isArray(a[0])) for (r = 0; r < a.length; r++) o += s(a[r]);
      else for (r = 0; r < a.length; r++) o += a[r].length;
      return o;
    }(this.labels) / function s(a) {
      var r, o = 0;
      if (Array.isArray(a[0])) for (r = 0; r < a.length; r++) o += s(a[r]);
      else for (r = 0; r < a.length; r++) o += 1;
      return o;
    }(this.labels);
    return function(s, a) {
      var r = s * a, o = Math.pow(r, 0.5);
      return Math.min(o / i, parseInt(t.config.dataLabels.style.fontSize, 10));
    }(e[2] - e[0], e[3] - e[1]);
  } }, { key: "rotateToFitLabel", value: function(e, t, i, s, a, r, o) {
    var l = new W(this.ctx), c = l.getTextRects(i, t);
    if (c.width + this.w.config.stroke.width + 5 > r - s && c.width <= o - a) {
      var h = l.rotateAroundCenter(e.node);
      e.node.setAttribute("transform", "rotate(-90 ".concat(h.x, " ").concat(h.y, ") translate(").concat(c.height / 3, ")"));
    }
  } }, { key: "truncateLabels", value: function(e, t, i, s, a, r) {
    var o = new W(this.ctx), l = o.getTextRects(e, t).width + this.w.config.stroke.width + 5 > a - i && r - s > a - i ? r - s : a - i, c = o.getTextBasedOnMaxWidth({ text: e, maxWidth: l, fontSize: t });
    return e.length !== c.length && l / t < 5 ? "" : c;
  } }, { key: "animateTreemap", value: function(e, t, i, s) {
    var a = new Vt(this.ctx);
    a.animateRect(e, t, i, s, function() {
      a.animationCompleted(e);
    });
  } }]), n;
}(), Kn = 86400, zh = 10 / Kn, Nh = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w, this.timeScaleArray = [], this.utc = this.w.config.xaxis.labels.datetimeUTC;
  }
  return te(n, [{ key: "calculateTimeScaleTicks", value: function(e, t) {
    var i = this, s = this.w;
    if (s.globals.allSeriesCollapsed) return s.globals.labels = [], s.globals.timescaleLabels = [], [];
    var a = new Ye(this.ctx), r = (t - e) / 864e5;
    this.determineInterval(r), s.globals.disableZoomIn = !1, s.globals.disableZoomOut = !1, r < zh ? s.globals.disableZoomIn = !0 : r > 5e4 && (s.globals.disableZoomOut = !0);
    var o = a.getTimeUnitsfromTimestamp(e, t, this.utc), l = s.globals.gridWidth / r, c = l / 24, h = c / 60, d = h / 60, u = Math.floor(24 * r), g = Math.floor(1440 * r), p = Math.floor(r * Kn), f = Math.floor(r), x = Math.floor(r / 30), m = Math.floor(r / 365), b = { minMillisecond: o.minMillisecond, minSecond: o.minSecond, minMinute: o.minMinute, minHour: o.minHour, minDate: o.minDate, minMonth: o.minMonth, minYear: o.minYear }, w = { firstVal: b, currentMillisecond: b.minMillisecond, currentSecond: b.minSecond, currentMinute: b.minMinute, currentHour: b.minHour, currentMonthDate: b.minDate, currentDate: b.minDate, currentMonth: b.minMonth, currentYear: b.minYear, daysWidthOnXAxis: l, hoursWidthOnXAxis: c, minutesWidthOnXAxis: h, secondsWidthOnXAxis: d, numberOfSeconds: p, numberOfMinutes: g, numberOfHours: u, numberOfDays: f, numberOfMonths: x, numberOfYears: m };
    switch (this.tickInterval) {
      case "years":
        this.generateYearScale(w);
        break;
      case "months":
      case "half_year":
        this.generateMonthScale(w);
        break;
      case "months_days":
      case "months_fortnight":
      case "days":
      case "week_days":
        this.generateDayScale(w);
        break;
      case "hours":
        this.generateHourScale(w);
        break;
      case "minutes_fives":
      case "minutes":
        this.generateMinuteScale(w);
        break;
      case "seconds_tens":
      case "seconds_fives":
      case "seconds":
        this.generateSecondScale(w);
    }
    var y = this.timeScaleArray.map(function(v) {
      var k = { position: v.position, unit: v.unit, year: v.year, day: v.day ? v.day : 1, hour: v.hour ? v.hour : 0, month: v.month + 1 };
      return v.unit === "month" ? q(q({}, k), {}, { day: 1, value: v.value + 1 }) : v.unit === "day" || v.unit === "hour" ? q(q({}, k), {}, { value: v.value }) : v.unit === "minute" ? q(q({}, k), {}, { value: v.value, minute: v.value }) : v.unit === "second" ? q(q({}, k), {}, { value: v.value, minute: v.minute, second: v.second }) : v;
    });
    return y.filter(function(v) {
      var k = 1, A = Math.ceil(s.globals.gridWidth / 120), S = v.value;
      s.config.xaxis.tickAmount !== void 0 && (A = s.config.xaxis.tickAmount), y.length > A && (k = Math.floor(y.length / A));
      var C = !1, L = !1;
      switch (i.tickInterval) {
        case "years":
          v.unit === "year" && (C = !0);
          break;
        case "half_year":
          k = 7, v.unit === "year" && (C = !0);
          break;
        case "months":
          k = 1, v.unit === "year" && (C = !0);
          break;
        case "months_fortnight":
          k = 15, v.unit !== "year" && v.unit !== "month" || (C = !0), S === 30 && (L = !0);
          break;
        case "months_days":
          k = 10, v.unit === "month" && (C = !0), S === 30 && (L = !0);
          break;
        case "week_days":
          k = 8, v.unit === "month" && (C = !0);
          break;
        case "days":
          k = 1, v.unit === "month" && (C = !0);
          break;
        case "hours":
          v.unit === "day" && (C = !0);
          break;
        case "minutes_fives":
        case "seconds_fives":
          S % 5 != 0 && (L = !0);
          break;
        case "seconds_tens":
          S % 10 != 0 && (L = !0);
      }
      if (i.tickInterval === "hours" || i.tickInterval === "minutes_fives" || i.tickInterval === "seconds_tens" || i.tickInterval === "seconds_fives") {
        if (!L) return !0;
      } else if ((S % k == 0 || C) && !L) return !0;
    });
  } }, { key: "recalcDimensionsBasedOnFormat", value: function(e, t) {
    var i = this.w, s = this.formatDates(e), a = this.removeOverlappingTS(s);
    i.globals.timescaleLabels = a.slice(), new Hi(this.ctx).plotCoords();
  } }, { key: "determineInterval", value: function(e) {
    var t = 24 * e, i = 60 * t;
    switch (!0) {
      case e / 365 > 5:
        this.tickInterval = "years";
        break;
      case e > 800:
        this.tickInterval = "half_year";
        break;
      case e > 180:
        this.tickInterval = "months";
        break;
      case e > 90:
        this.tickInterval = "months_fortnight";
        break;
      case e > 60:
        this.tickInterval = "months_days";
        break;
      case e > 30:
        this.tickInterval = "week_days";
        break;
      case e > 2:
        this.tickInterval = "days";
        break;
      case t > 2.4:
        this.tickInterval = "hours";
        break;
      case i > 15:
        this.tickInterval = "minutes_fives";
        break;
      case i > 5:
        this.tickInterval = "minutes";
        break;
      case i > 1:
        this.tickInterval = "seconds_tens";
        break;
      case 60 * i > 20:
        this.tickInterval = "seconds_fives";
        break;
      default:
        this.tickInterval = "seconds";
    }
  } }, { key: "generateYearScale", value: function(e) {
    var t = e.firstVal, i = e.currentMonth, s = e.currentYear, a = e.daysWidthOnXAxis, r = e.numberOfYears, o = t.minYear, l = 0, c = new Ye(this.ctx), h = "year";
    if (t.minDate > 1 || t.minMonth > 0) {
      var d = c.determineRemainingDaysOfYear(t.minYear, t.minMonth, t.minDate);
      l = (c.determineDaysOfYear(t.minYear) - d + 1) * a, o = t.minYear + 1, this.timeScaleArray.push({ position: l, value: o, unit: h, year: o, month: _.monthMod(i + 1) });
    } else t.minDate === 1 && t.minMonth === 0 && this.timeScaleArray.push({ position: l, value: o, unit: h, year: s, month: _.monthMod(i + 1) });
    for (var u = o, g = l, p = 0; p < r; p++) u++, g = c.determineDaysOfYear(u - 1) * a + g, this.timeScaleArray.push({ position: g, value: u, unit: h, year: u, month: 1 });
  } }, { key: "generateMonthScale", value: function(e) {
    var t = e.firstVal, i = e.currentMonthDate, s = e.currentMonth, a = e.currentYear, r = e.daysWidthOnXAxis, o = e.numberOfMonths, l = s, c = 0, h = new Ye(this.ctx), d = "month", u = 0;
    if (t.minDate > 1) {
      c = (h.determineDaysOfMonths(s + 1, t.minYear) - i + 1) * r, l = _.monthMod(s + 1);
      var g = a + u, p = _.monthMod(l), f = l;
      l === 0 && (d = "year", f = g, p = 1, g += u += 1), this.timeScaleArray.push({ position: c, value: f, unit: d, year: g, month: p });
    } else this.timeScaleArray.push({ position: c, value: l, unit: d, year: a, month: _.monthMod(s) });
    for (var x = l + 1, m = c, b = 0, w = 1; b < o; b++, w++) {
      (x = _.monthMod(x)) === 0 ? (d = "year", u += 1) : d = "month";
      var y = this._getYear(a, x, u);
      m = h.determineDaysOfMonths(x, y) * r + m;
      var v = x === 0 ? y : x;
      this.timeScaleArray.push({ position: m, value: v, unit: d, year: y, month: x === 0 ? 1 : x }), x++;
    }
  } }, { key: "generateDayScale", value: function(e) {
    var t = e.firstVal, i = e.currentMonth, s = e.currentYear, a = e.hoursWidthOnXAxis, r = e.numberOfDays, o = new Ye(this.ctx), l = "day", c = t.minDate + 1, h = c, d = function(w, y, v) {
      return w > o.determineDaysOfMonths(y + 1, v) && (h = 1, l = "month", g = y += 1), y;
    }, u = (24 - t.minHour) * a, g = c, p = d(h, i, s);
    t.minHour === 0 && t.minDate === 1 ? (u = 0, g = _.monthMod(t.minMonth), l = "month", h = t.minDate) : t.minDate !== 1 && t.minHour === 0 && t.minMinute === 0 && (u = 0, c = t.minDate, g = c, p = d(h = c, i, s), g !== 1 && (l = "day")), this.timeScaleArray.push({ position: u, value: g, unit: l, year: this._getYear(s, p, 0), month: _.monthMod(p), day: h });
    for (var f = u, x = 0; x < r; x++) {
      l = "day", p = d(h += 1, p, this._getYear(s, p, 0));
      var m = this._getYear(s, p, 0);
      f = 24 * a + f;
      var b = h === 1 ? _.monthMod(p) : h;
      this.timeScaleArray.push({ position: f, value: b, unit: l, year: m, month: _.monthMod(p), day: b });
    }
  } }, { key: "generateHourScale", value: function(e) {
    var t = e.firstVal, i = e.currentDate, s = e.currentMonth, a = e.currentYear, r = e.minutesWidthOnXAxis, o = e.numberOfHours, l = new Ye(this.ctx), c = "hour", h = function(k, A) {
      return k > l.determineDaysOfMonths(A + 1, a) && (x = 1, A += 1), { month: A, date: x };
    }, d = function(k, A) {
      return k > l.determineDaysOfMonths(A + 1, a) ? A += 1 : A;
    }, u = 60 - (t.minMinute + t.minSecond / 60), g = u * r, p = t.minHour + 1, f = p;
    u === 60 && (g = 0, f = p = t.minHour);
    var x = i;
    f >= 24 && (f = 0, c = "day", p = x += 1);
    var m = h(x, s).month;
    m = d(x, m), p > 31 && (p = x = 1), this.timeScaleArray.push({ position: g, value: p, unit: c, day: x, hour: f, year: a, month: _.monthMod(m) }), f++;
    for (var b = g, w = 0; w < o; w++) {
      c = "hour", f >= 24 && (f = 0, c = "day", m = h(x += 1, m).month, m = d(x, m));
      var y = this._getYear(a, m, 0);
      b = 60 * r + b;
      var v = f === 0 ? x : f;
      this.timeScaleArray.push({ position: b, value: v, unit: c, hour: f, day: x, year: y, month: _.monthMod(m) }), f++;
    }
  } }, { key: "generateMinuteScale", value: function(e) {
    for (var t = e.currentMillisecond, i = e.currentSecond, s = e.currentMinute, a = e.currentHour, r = e.currentDate, o = e.currentMonth, l = e.currentYear, c = e.minutesWidthOnXAxis, h = e.secondsWidthOnXAxis, d = e.numberOfMinutes, u = s + 1, g = r, p = o, f = l, x = a, m = (60 - i - t / 1e3) * h, b = 0; b < d; b++) u >= 60 && (u = 0, (x += 1) === 24 && (x = 0)), this.timeScaleArray.push({ position: m, value: u, unit: "minute", hour: x, minute: u, day: g, year: this._getYear(f, p, 0), month: _.monthMod(p) }), m += c, u++;
  } }, { key: "generateSecondScale", value: function(e) {
    for (var t = e.currentMillisecond, i = e.currentSecond, s = e.currentMinute, a = e.currentHour, r = e.currentDate, o = e.currentMonth, l = e.currentYear, c = e.secondsWidthOnXAxis, h = e.numberOfSeconds, d = i + 1, u = s, g = r, p = o, f = l, x = a, m = (1e3 - t) / 1e3 * c, b = 0; b < h; b++) d >= 60 && (d = 0, ++u >= 60 && (u = 0, ++x === 24 && (x = 0))), this.timeScaleArray.push({ position: m, value: d, unit: "second", hour: x, minute: u, second: d, day: g, year: this._getYear(f, p, 0), month: _.monthMod(p) }), m += c, d++;
  } }, { key: "createRawDateString", value: function(e, t) {
    var i = e.year;
    return e.month === 0 && (e.month = 1), i += "-" + ("0" + e.month.toString()).slice(-2), e.unit === "day" ? i += e.unit === "day" ? "-" + ("0" + t).slice(-2) : "-01" : i += "-" + ("0" + (e.day ? e.day : "1")).slice(-2), e.unit === "hour" ? i += e.unit === "hour" ? "T" + ("0" + t).slice(-2) : "T00" : i += "T" + ("0" + (e.hour ? e.hour : "0")).slice(-2), e.unit === "minute" ? i += ":" + ("0" + t).slice(-2) : i += ":" + (e.minute ? ("0" + e.minute).slice(-2) : "00"), e.unit === "second" ? i += ":" + ("0" + t).slice(-2) : i += ":00", this.utc && (i += ".000Z"), i;
  } }, { key: "formatDates", value: function(e) {
    var t = this, i = this.w;
    return e.map(function(s) {
      var a = s.value.toString(), r = new Ye(t.ctx), o = t.createRawDateString(s, a), l = r.getDate(r.parseDate(o));
      if (t.utc || (l = r.getDate(r.parseDateWithTimezone(o))), i.config.xaxis.labels.format === void 0) {
        var c = "dd MMM", h = i.config.xaxis.labels.datetimeFormatter;
        s.unit === "year" && (c = h.year), s.unit === "month" && (c = h.month), s.unit === "day" && (c = h.day), s.unit === "hour" && (c = h.hour), s.unit === "minute" && (c = h.minute), s.unit === "second" && (c = h.second), a = r.formatDate(l, c);
      } else a = r.formatDate(l, i.config.xaxis.labels.format);
      return { dateString: o, position: s.position, value: a, unit: s.unit, year: s.year, month: s.month };
    });
  } }, { key: "removeOverlappingTS", value: function(e) {
    var t, i = this, s = new W(this.ctx), a = !1;
    e.length > 0 && e[0].value && e.every(function(l) {
      return l.value.length === e[0].value.length;
    }) && (a = !0, t = s.getTextRects(e[0].value).width);
    var r = 0, o = e.map(function(l, c) {
      if (c > 0 && i.w.config.xaxis.labels.hideOverlappingLabels) {
        var h = a ? t : s.getTextRects(e[r].value).width, d = e[r].position;
        return l.position > d + h + 10 ? (r = c, l) : null;
      }
      return l;
    });
    return o = o.filter(function(l) {
      return l !== null;
    });
  } }, { key: "_getYear", value: function(e, t, i) {
    return e + Math.floor(t / 12) + i;
  } }]), n;
}(), _h = function() {
  function n(e, t) {
    ee(this, n), this.ctx = t, this.w = t.w, this.el = e;
  }
  return te(n, [{ key: "setupElements", value: function() {
    var e = this.w, t = e.globals, i = e.config, s = i.chart.type;
    t.axisCharts = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble", "radar", "heatmap", "treemap"].includes(s), t.xyCharts = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble"].includes(s), t.isBarHorizontal = ["bar", "rangeBar", "boxPlot"].includes(s) && i.plotOptions.bar.horizontal, t.chartClass = ".apexcharts".concat(t.chartID), t.dom.baseEl = this.el, t.dom.elWrap = document.createElement("div"), W.setAttrs(t.dom.elWrap, { id: t.chartClass.substring(1), class: "apexcharts-canvas ".concat(t.chartClass.substring(1)) }), this.el.appendChild(t.dom.elWrap), t.dom.Paper = window.SVG().addTo(t.dom.elWrap), t.dom.Paper.attr({ class: "apexcharts-svg", "xmlns:data": "ApexChartsNS", transform: "translate(".concat(i.chart.offsetX, ", ").concat(i.chart.offsetY, ")") }), t.dom.Paper.node.style.background = i.theme.mode !== "dark" || i.chart.background ? i.theme.mode !== "light" || i.chart.background ? i.chart.background : "#fff" : "#343A3F", this.setSVGDimensions(), t.dom.elLegendForeign = document.createElementNS(t.SVGNS, "foreignObject"), W.setAttrs(t.dom.elLegendForeign, { x: 0, y: 0, width: t.svgWidth, height: t.svgHeight }), t.dom.elLegendWrap = document.createElement("div"), t.dom.elLegendWrap.classList.add("apexcharts-legend"), t.dom.elWrap.appendChild(t.dom.elLegendWrap), t.dom.Paper.node.appendChild(t.dom.elLegendForeign), t.dom.elGraphical = t.dom.Paper.group().attr({ class: "apexcharts-inner apexcharts-graphical" }), t.dom.elDefs = t.dom.Paper.defs(), t.dom.Paper.add(t.dom.elGraphical), t.dom.elGraphical.add(t.dom.elDefs);
  } }, { key: "plotChartType", value: function(e, t) {
    var i = this.w, s = this.ctx, a = i.config, r = i.globals, o = { line: { series: [], i: [] }, area: { series: [], i: [] }, scatter: { series: [], i: [] }, bubble: { series: [], i: [] }, bar: { series: [], i: [] }, candlestick: { series: [], i: [] }, boxPlot: { series: [], i: [] }, rangeBar: { series: [], i: [] }, rangeArea: { series: [], seriesRangeEnd: [], i: [] } }, l = a.chart.type || "line", c = null, h = 0;
    r.series.forEach(function(k, A) {
      var S = e[A].type === "column" ? "bar" : e[A].type || (l === "column" ? "bar" : l);
      o[S] ? (S === "rangeArea" ? (o[S].series.push(r.seriesRangeStart[A]), o[S].seriesRangeEnd.push(r.seriesRangeEnd[A])) : o[S].series.push(k), o[S].i.push(A), S === "bar" && (i.globals.columnSeries = o.bar)) : ["heatmap", "treemap", "pie", "donut", "polarArea", "radialBar", "radar"].includes(S) ? c = S : console.warn("You have specified an unrecognized series type (".concat(S, ").")), l !== S && S !== "scatter" && h++;
    }), h > 0 && (c && console.warn("Chart or series type ".concat(c, " cannot appear with other chart or series types.")), o.bar.series.length > 0 && a.plotOptions.bar.horizontal && (h -= o.bar.series.length, o.bar = { series: [], i: [] }, i.globals.columnSeries = { series: [], i: [] }, console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"))), r.comboCharts || (r.comboCharts = h > 0);
    var d = new bs(s, t), u = new xs(s, t);
    s.pie = new Jn(s);
    var g = new Lh(s);
    s.rangeBar = new Ph(s, t);
    var p = new Mh(s), f = [];
    if (r.comboCharts) {
      var x, m, b = new Oe(s);
      if (o.area.series.length > 0 && (x = f).push.apply(x, _e(b.drawSeriesByGroup(o.area, r.areaGroups, "area", d))), o.bar.series.length > 0) if (a.chart.stacked) {
        var w = new br(s, t);
        f.push(w.draw(o.bar.series, o.bar.i));
      } else s.bar = new Wt(s, t), f.push(s.bar.draw(o.bar.series, o.bar.i));
      if (o.rangeArea.series.length > 0 && f.push(d.draw(o.rangeArea.series, "rangeArea", o.rangeArea.i, o.rangeArea.seriesRangeEnd)), o.line.series.length > 0 && (m = f).push.apply(m, _e(b.drawSeriesByGroup(o.line, r.lineGroups, "line", d))), o.candlestick.series.length > 0 && f.push(u.draw(o.candlestick.series, "candlestick", o.candlestick.i)), o.boxPlot.series.length > 0 && f.push(u.draw(o.boxPlot.series, "boxPlot", o.boxPlot.i)), o.rangeBar.series.length > 0 && f.push(s.rangeBar.draw(o.rangeBar.series, o.rangeBar.i)), o.scatter.series.length > 0) {
        var y = new bs(s, t, !0);
        f.push(y.draw(o.scatter.series, "scatter", o.scatter.i));
      }
      if (o.bubble.series.length > 0) {
        var v = new bs(s, t, !0);
        f.push(v.draw(o.bubble.series, "bubble", o.bubble.i));
      }
    } else switch (a.chart.type) {
      case "line":
        f = d.draw(r.series, "line");
        break;
      case "area":
        f = d.draw(r.series, "area");
        break;
      case "bar":
        a.chart.stacked ? f = new br(s, t).draw(r.series) : (s.bar = new Wt(s, t), f = s.bar.draw(r.series));
        break;
      case "candlestick":
        f = new xs(s, t).draw(r.series, "candlestick");
        break;
      case "boxPlot":
        f = new xs(s, t).draw(r.series, a.chart.type);
        break;
      case "rangeBar":
        f = s.rangeBar.draw(r.series);
        break;
      case "rangeArea":
        f = d.draw(r.seriesRangeStart, "rangeArea", void 0, r.seriesRangeEnd);
        break;
      case "heatmap":
        f = new Ch(s, t).draw(r.series);
        break;
      case "treemap":
        f = new Oh(s, t).draw(r.series);
        break;
      case "pie":
      case "donut":
      case "polarArea":
        f = s.pie.draw(r.series);
        break;
      case "radialBar":
        f = g.draw(r.series);
        break;
      case "radar":
        f = p.draw(r.series);
        break;
      default:
        f = d.draw(r.series);
    }
    return f;
  } }, { key: "setSVGDimensions", value: function() {
    var e = this.w, t = e.globals, i = e.config;
    i.chart.width = i.chart.width || "100%", i.chart.height = i.chart.height || "auto", t.svgWidth = i.chart.width, t.svgHeight = i.chart.height;
    var s = _.getDimensions(this.el), a = i.chart.width.toString().split(/[0-9]+/g).pop();
    a === "%" ? _.isNumber(s[0]) && (s[0].width === 0 && (s = _.getDimensions(this.el.parentNode)), t.svgWidth = s[0] * parseInt(i.chart.width, 10) / 100) : a !== "px" && a !== "" || (t.svgWidth = parseInt(i.chart.width, 10));
    var r = String(i.chart.height).toString().split(/[0-9]+/g).pop();
    if (t.svgHeight !== "auto" && t.svgHeight !== "") if (r === "%") {
      var o = _.getDimensions(this.el.parentNode);
      t.svgHeight = o[1] * parseInt(i.chart.height, 10) / 100;
    } else t.svgHeight = parseInt(i.chart.height, 10);
    else t.svgHeight = t.axisCharts ? t.svgWidth / 1.61 : t.svgWidth / 1.2;
    if (t.svgWidth = Math.max(t.svgWidth, 0), t.svgHeight = Math.max(t.svgHeight, 0), W.setAttrs(t.dom.Paper.node, { width: t.svgWidth, height: t.svgHeight }), r !== "%") {
      var l = i.chart.sparkline.enabled ? 0 : t.axisCharts ? i.chart.parentHeightOffset : 0;
      t.dom.Paper.node.parentNode.parentNode.style.minHeight = "".concat(t.svgHeight + l, "px");
    }
    t.dom.elWrap.style.width = "".concat(t.svgWidth, "px"), t.dom.elWrap.style.height = "".concat(t.svgHeight, "px");
  } }, { key: "shiftGraphPosition", value: function() {
    var e = this.w.globals, t = e.translateY, i = e.translateX;
    W.setAttrs(e.dom.elGraphical.node, { transform: "translate(".concat(i, ", ").concat(t, ")") });
  } }, { key: "resizeNonAxisCharts", value: function() {
    var e = this.w, t = e.globals, i = 0, s = e.config.chart.sparkline.enabled ? 1 : 15;
    s += e.config.grid.padding.bottom, ["top", "bottom"].includes(e.config.legend.position) && e.config.legend.show && !e.config.legend.floating && (i = new Gn(this.ctx).legendHelpers.getLegendDimensions().clwh + 7);
    var a = e.globals.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie"), r = 2.05 * e.globals.radialSize;
    if (a && !e.config.chart.sparkline.enabled && e.config.plotOptions.radialBar.startAngle !== 0) {
      var o = _.getBoundingClientRect(a);
      r = o.bottom;
      var l = o.bottom - o.top;
      r = Math.max(2.05 * e.globals.radialSize, l);
    }
    var c = Math.ceil(r + t.translateY + i + s);
    t.dom.elLegendForeign && t.dom.elLegendForeign.setAttribute("height", c), e.config.chart.height && String(e.config.chart.height).includes("%") || (t.dom.elWrap.style.height = "".concat(c, "px"), W.setAttrs(t.dom.Paper.node, { height: c }), t.dom.Paper.node.parentNode.parentNode.style.minHeight = "".concat(c, "px"));
  } }, { key: "coreCalculations", value: function() {
    new qs(this.ctx).init();
  } }, { key: "resetGlobals", value: function() {
    var e = this, t = function() {
      return e.w.config.series.map(function() {
        return [];
      });
    }, i = new Xn(), s = this.w.globals;
    i.initGlobalVars(s), s.seriesXvalues = t(), s.seriesYvalues = t();
  } }, { key: "isMultipleY", value: function() {
    return !!(Array.isArray(this.w.config.yaxis) && this.w.config.yaxis.length > 1) && (this.w.globals.isMultipleYAxis = !0, !0);
  } }, { key: "xySettings", value: function() {
    var e = this.w, t = null;
    if (e.globals.axisCharts) {
      if (e.config.xaxis.crosshairs.position === "back" && new Zs(this.ctx).drawXCrosshairs(), e.config.yaxis[0].crosshairs.position === "back" && new Zs(this.ctx).drawYCrosshairs(), e.config.xaxis.type === "datetime" && e.config.xaxis.labels.formatter === void 0) {
        this.ctx.timeScale = new Nh(this.ctx);
        var i = [];
        isFinite(e.globals.minX) && isFinite(e.globals.maxX) && !e.globals.isBarHorizontal ? i = this.ctx.timeScale.calculateTimeScaleTicks(e.globals.minX, e.globals.maxX) : e.globals.isBarHorizontal && (i = this.ctx.timeScale.calculateTimeScaleTicks(e.globals.minY, e.globals.maxY)), this.ctx.timeScale.recalcDimensionsBasedOnFormat(i);
      }
      t = new Oe(this.ctx).getCalculatedRatios();
    }
    return t;
  } }, { key: "updateSourceChart", value: function(e) {
    this.ctx.w.globals.selection = void 0, this.ctx.updateHelpers._updateOptions({ chart: { selection: { xaxis: { min: e.w.globals.minX, max: e.w.globals.maxX } } } }, !1, !1);
  } }, { key: "setupBrushHandler", value: function() {
    var e = this, t = this.ctx, i = this.w;
    if (i.config.chart.brush.enabled && typeof i.config.chart.events.selection != "function") {
      var s = Array.isArray(i.config.chart.brush.targets) ? i.config.chart.brush.targets : [i.config.chart.brush.target];
      s.forEach(function(a) {
        var r = t.constructor.getChartByID(a);
        r.w.globals.brushSource = e.ctx, typeof r.w.config.chart.events.zoomed != "function" && (r.w.config.chart.events.zoomed = function() {
          return e.updateSourceChart(r);
        }), typeof r.w.config.chart.events.scrolled != "function" && (r.w.config.chart.events.scrolled = function() {
          return e.updateSourceChart(r);
        });
      }), i.config.chart.events.selection = function(a, r) {
        s.forEach(function(o) {
          t.constructor.getChartByID(o).ctx.updateHelpers._updateOptions({ xaxis: { min: r.xaxis.min, max: r.xaxis.max } }, !1, !1, !1, !1);
        });
      };
    }
  } }]), n;
}(), Dh = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w;
  }
  return te(n, [{ key: "_updateOptions", value: function(e) {
    var t = this, i = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], s = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], a = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3], r = arguments.length > 4 && arguments[4] !== void 0 && arguments[4];
    return new Promise(function(o) {
      var l = [t.ctx];
      a && (l = t.ctx.getSyncedCharts()), t.ctx.w.globals.isExecCalled && (l = [t.ctx], t.ctx.w.globals.isExecCalled = !1), l.forEach(function(c, h) {
        var d = c.w;
        if (d.globals.shouldAnimate = s, i || (d.globals.resized = !0, d.globals.dataChanged = !0, s && c.series.getPreviousPaths()), e && Xt(e) === "object" && (c.config = new fi(e), e = Oe.extendArrayProps(c.config, e, d), c.w.globals.chartID !== t.ctx.w.globals.chartID && delete e.series, d.config = _.extend(d.config, e), r && (d.globals.lastXAxis = e.xaxis ? _.clone(e.xaxis) : [], d.globals.lastYAxis = e.yaxis ? _.clone(e.yaxis) : [], d.globals.initialConfig = _.extend({}, d.config), d.globals.initialSeries = _.clone(d.config.series), e.series))) {
          for (var u = 0; u < d.globals.collapsedSeriesIndices.length; u++) {
            var g = d.config.series[d.globals.collapsedSeriesIndices[u]];
            d.globals.collapsedSeries[u].data = d.globals.axisCharts ? g.data.slice() : g;
          }
          for (var p = 0; p < d.globals.ancillaryCollapsedSeriesIndices.length; p++) {
            var f = d.config.series[d.globals.ancillaryCollapsedSeriesIndices[p]];
            d.globals.ancillaryCollapsedSeries[p].data = d.globals.axisCharts ? f.data.slice() : f;
          }
          c.series.emptyCollapsedSeries(d.config.series);
        }
        return c.update(e).then(function() {
          h === l.length - 1 && o(c);
        });
      });
    });
  } }, { key: "_updateSeries", value: function(e, t) {
    var i = this, s = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    return new Promise(function(a) {
      var r, o = i.w;
      return o.globals.shouldAnimate = t, o.globals.dataChanged = !0, t && i.ctx.series.getPreviousPaths(), o.globals.axisCharts ? ((r = e.map(function(l, c) {
        return i._extendSeries(l, c);
      })).length === 0 && (r = [{ data: [] }]), o.config.series = r) : o.config.series = e.slice(), s && (o.globals.initialConfig.series = _.clone(o.config.series), o.globals.initialSeries = _.clone(o.config.series)), i.ctx.update().then(function() {
        a(i.ctx);
      });
    });
  } }, { key: "_extendSeries", value: function(e, t) {
    var i = this.w, s = i.config.series[t];
    return q(q({}, i.config.series[t]), {}, { name: e.name ? e.name : s == null ? void 0 : s.name, color: e.color ? e.color : s == null ? void 0 : s.color, type: e.type ? e.type : s == null ? void 0 : s.type, group: e.group ? e.group : s == null ? void 0 : s.group, hidden: e.hidden !== void 0 ? e.hidden : s == null ? void 0 : s.hidden, data: e.data ? e.data : s == null ? void 0 : s.data, zIndex: e.zIndex !== void 0 ? e.zIndex : t });
  } }, { key: "toggleDataPointSelection", value: function(e, t) {
    var i = this.w, s = null, a = ".apexcharts-series[data\\:realIndex='".concat(e, "']");
    return i.globals.axisCharts ? s = i.globals.dom.Paper.findOne("".concat(a, " path[j='").concat(t, "'], ").concat(a, " circle[j='").concat(t, "'], ").concat(a, " rect[j='").concat(t, "']")) : t === void 0 && (s = i.globals.dom.Paper.findOne("".concat(a, " path[j='").concat(e, "']")), i.config.chart.type !== "pie" && i.config.chart.type !== "polarArea" && i.config.chart.type !== "donut" || this.ctx.pie.pieClicked(e)), s ? (new W(this.ctx).pathMouseDown(s, null), s.node ? s.node : null) : (console.warn("toggleDataPointSelection: Element not found"), null);
  } }, { key: "forceXAxisUpdate", value: function(e) {
    var t = this.w;
    if (["min", "max"].forEach(function(s) {
      e.xaxis[s] !== void 0 && (t.config.xaxis[s] = e.xaxis[s], t.globals.lastXAxis[s] = e.xaxis[s]);
    }), e.xaxis.categories && e.xaxis.categories.length && (t.config.xaxis.categories = e.xaxis.categories), t.config.xaxis.convertedCatToNumeric) {
      var i = new gi(e);
      e = i.convertCatToNumericXaxis(e, this.ctx);
    }
    return e;
  } }, { key: "forceYAxisUpdate", value: function(e) {
    return e.chart && e.chart.stacked && e.chart.stackType === "100%" && (Array.isArray(e.yaxis) ? e.yaxis.forEach(function(t, i) {
      e.yaxis[i].min = 0, e.yaxis[i].max = 100;
    }) : (e.yaxis.min = 0, e.yaxis.max = 100)), e;
  } }, { key: "revertDefaultAxisMinMax", value: function(e) {
    var t = this, i = this.w, s = i.globals.lastXAxis, a = i.globals.lastYAxis;
    e && e.xaxis && (s = e.xaxis), e && e.yaxis && (a = e.yaxis), i.config.xaxis.min = s.min, i.config.xaxis.max = s.max;
    var r = function(o) {
      a[o] !== void 0 && (i.config.yaxis[o].min = a[o].min, i.config.yaxis[o].max = a[o].max);
    };
    i.config.yaxis.map(function(o, l) {
      i.globals.zoomed || a[l] !== void 0 ? r(l) : t.ctx.opts.yaxis[l] !== void 0 && (o.min = t.ctx.opts.yaxis[l].min, o.max = t.ctx.opts.yaxis[l].max);
    });
  } }]), n;
}();
(function() {
  function n() {
    for (var a = arguments.length > 0 && arguments[0] !== d ? arguments[0] : [], r = arguments.length > 1 ? arguments[1] : d, o = arguments.length > 2 ? arguments[2] : d, l = arguments.length > 3 ? arguments[3] : d, c = arguments.length > 4 ? arguments[4] : d, h = arguments.length > 5 ? arguments[5] : d, d = arguments.length > 6 ? arguments[6] : d, u = a.slice(r, o || d), g = l.slice(c, h || d), p = 0, f = { pos: [0, 0], start: [0, 0] }, x = { pos: [0, 0], start: [0, 0] }; u[p] = e.call(f, u[p]), g[p] = e.call(x, g[p]), u[p][0] != g[p][0] || u[p][0] == "M" || u[p][0] == "A" && (u[p][4] != g[p][4] || u[p][5] != g[p][5]) ? (Array.prototype.splice.apply(u, [p, 1].concat(i.call(f, u[p]))), Array.prototype.splice.apply(g, [p, 1].concat(i.call(x, g[p])))) : (u[p] = t.call(f, u[p]), g[p] = t.call(x, g[p])), !(++p == u.length && p == g.length); )
      p == u.length && u.push(["C", f.pos[0], f.pos[1], f.pos[0], f.pos[1], f.pos[0], f.pos[1]]), p == g.length && g.push(["C", x.pos[0], x.pos[1], x.pos[0], x.pos[1], x.pos[0], x.pos[1]]);
    return { start: u, dest: g };
  }
  function e(a) {
    switch (a[0]) {
      case "z":
      case "Z":
        a[0] = "L", a[1] = this.start[0], a[2] = this.start[1];
        break;
      case "H":
        a[0] = "L", a[2] = this.pos[1];
        break;
      case "V":
        a[0] = "L", a[2] = a[1], a[1] = this.pos[0];
        break;
      case "T":
        a[0] = "Q", a[3] = a[1], a[4] = a[2], a[1] = this.reflection[1], a[2] = this.reflection[0];
        break;
      case "S":
        a[0] = "C", a[6] = a[4], a[5] = a[3], a[4] = a[2], a[3] = a[1], a[2] = this.reflection[1], a[1] = this.reflection[0];
    }
    return a;
  }
  function t(a) {
    var r = a.length;
    return this.pos = [a[r - 2], a[r - 1]], "SCQT".indexOf(a[0]) != -1 && (this.reflection = [2 * this.pos[0] - a[r - 4], 2 * this.pos[1] - a[r - 3]]), a;
  }
  function i(a) {
    var r = [a];
    switch (a[0]) {
      case "M":
        return this.pos = this.start = [a[1], a[2]], r;
      case "L":
        a[5] = a[3] = a[1], a[6] = a[4] = a[2], a[1] = this.pos[0], a[2] = this.pos[1];
        break;
      case "Q":
        a[6] = a[4], a[5] = a[3], a[4] = 1 * a[4] / 3 + 2 * a[2] / 3, a[3] = 1 * a[3] / 3 + 2 * a[1] / 3, a[2] = 1 * this.pos[1] / 3 + 2 * a[2] / 3, a[1] = 1 * this.pos[0] / 3 + 2 * a[1] / 3;
        break;
      case "A":
        r = function(o, l) {
          var c, h, d, u, g, p, f, x, m, b, w, y, v, k, A, S, C, L, P, R, I, T, O, N, D, Y, X = Math.abs(l[1]), z = Math.abs(l[2]), F = l[3] % 360, $ = l[4], Z = l[5], H = l[6], J = l[7], G = new be(o), V = new be(H, J), K = [];
          if (X === 0 || z === 0 || G.x === V.x && G.y === V.y) return [["C", G.x, G.y, V.x, V.y, V.x, V.y]];
          for (c = new be((G.x - V.x) / 2, (G.y - V.y) / 2).transform(new ne().rotate(F)), h = c.x * c.x / (X * X) + c.y * c.y / (z * z), h > 1 && (X *= h = Math.sqrt(h), z *= h), d = new ne().rotate(F).scale(1 / X, 1 / z).rotate(-F), G = G.transform(d), V = V.transform(d), u = [V.x - G.x, V.y - G.y], p = u[0] * u[0] + u[1] * u[1], g = Math.sqrt(p), u[0] /= g, u[1] /= g, f = p < 4 ? Math.sqrt(1 - p / 4) : 0, $ === Z && (f *= -1), x = new be((V.x + G.x) / 2 + f * -u[1], (V.y + G.y) / 2 + f * u[0]), m = new be(G.x - x.x, G.y - x.y), b = new be(V.x - x.x, V.y - x.y), w = Math.acos(m.x / Math.sqrt(m.x * m.x + m.y * m.y)), m.y < 0 && (w *= -1), y = Math.acos(b.x / Math.sqrt(b.x * b.x + b.y * b.y)), b.y < 0 && (y *= -1), Z && w > y && (y += 2 * Math.PI), !Z && w < y && (y -= 2 * Math.PI), k = Math.ceil(2 * Math.abs(w - y) / Math.PI), S = [], C = w, v = (y - w) / k, A = 4 * Math.tan(v / 4) / 3, I = 0; I <= k; I++) P = Math.cos(C), L = Math.sin(C), R = new be(x.x + P, x.y + L), S[I] = [new be(R.x + A * L, R.y - A * P), R, new be(R.x - A * L, R.y + A * P)], C += v;
          for (S[0][0] = S[0][1].clone(), S[S.length - 1][2] = S[S.length - 1][1].clone(), d = new ne().rotate(F).scale(X, z).rotate(-F), I = 0, T = S.length; I < T; I++) S[I][0] = S[I][0].transform(d), S[I][1] = S[I][1].transform(d), S[I][2] = S[I][2].transform(d);
          for (I = 1, T = S.length; I < T; I++) O = (R = S[I - 1][2]).x, N = R.y, D = (R = S[I][0]).x, Y = R.y, H = (R = S[I][1]).x, J = R.y, K.push(["C", O, N, D, Y, H, J]);
          return K;
        }(this.pos, a), a = r[0];
    }
    return a[0] = "C", this.pos = [a[5], a[6]], this.reflection = [2 * a[5] - a[3], 2 * a[6] - a[4]], r;
  }
  function s() {
    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 ? arguments[1] : void 0;
    if (r === !1) return !1;
    for (var o = r, l = a.length; o < l; ++o) if (a[o][0] == "M") return o;
    return !1;
  }
  oe(at, { morph: function(a, r, o, l, c) {
    for (var h = this.parse(a), d = this.parse(r), u = 0, g = 0, p = !1, f = !1; u !== !1 || g !== !1; ) {
      var x;
      p = s(h, u !== !1 && u + 1), f = s(d, g !== !1 && g + 1), u === !1 && (u = (x = new at(m.start).bbox()).height == 0 || x.width == 0 ? h.push(h[0]) - 1 : h.push(["M", x.x + x.width / 2, x.y + x.height / 2]) - 1), g === !1 && (g = (x = new at(m.dest).bbox()).height == 0 || x.width == 0 ? d.push(d[0]) - 1 : d.push(["M", x.x + x.width / 2, x.y + x.height / 2]) - 1);
      var m = n(h, u, p, d, g, f);
      h = h.slice(0, u).concat(m.start, p === !1 ? [] : h.slice(p)), d = d.slice(0, g).concat(m.dest, f === !1 ? [] : d.slice(f)), u = p !== !1 && u + m.start.length, g = f !== !1 && g + m.dest.length;
    }
    this._array = h, this.destination = new at(), this.destination._array = d;
    var b = this.fromArray(h.map(function(w, y) {
      var v = d[y].map(function(k, A) {
        return A === 0 ? k : l.step(w[A], d[y][A], o, c[y], c);
      });
      return v;
    }));
    return b;
  } });
})();
const vr = (n) => (n.changedTouches && (n = n.changedTouches[0]), { x: n.clientX, y: n.clientY });
class Yh {
  constructor(e) {
    e.remember("_draggable", this), this.el = e, this.drag = this.drag.bind(this), this.startDrag = this.startDrag.bind(this), this.endDrag = this.endDrag.bind(this);
  }
  init(e) {
    e ? (this.el.on("mousedown.drag", this.startDrag), this.el.on("touchstart.drag", this.startDrag, { passive: !1 })) : (this.el.off("mousedown.drag"), this.el.off("touchstart.drag"));
  }
  startDrag(e) {
    const t = !e.type.indexOf("mouse");
    if (t && e.which !== 1 && e.buttons !== 0 || this.el.dispatch("beforedrag", { event: e, handler: this }).defaultPrevented) return;
    e.preventDefault(), e.stopPropagation(), this.init(!1), this.box = this.el.bbox(), this.lastClick = this.el.point(vr(e));
    const i = (t ? "mouseup" : "touchend") + ".drag";
    dt(window, (t ? "mousemove" : "touchmove") + ".drag", this.drag, this, { passive: !1 }), dt(window, i, this.endDrag, this, { passive: !1 }), this.el.fire("dragstart", { event: e, handler: this, box: this.box });
  }
  drag(e) {
    const { box: t, lastClick: i } = this, s = this.el.point(vr(e)), a = s.x - i.x, r = s.y - i.y;
    if (!a && !r) return t;
    const o = t.x + a, l = t.y + r;
    this.box = new Re(o, l, t.w, t.h), this.lastClick = s, this.el.dispatch("dragmove", { event: e, handler: this, box: this.box }).defaultPrevented || this.move(o, l);
  }
  move(e, t) {
    this.el.type === "svg" ? xt.prototype.move.call(this.el, e, t) : this.el.move(e, t);
  }
  endDrag(e) {
    this.drag(e), this.el.fire("dragend", { event: e, handler: this, box: this.box }), it(window, "mousemove.drag"), it(window, "touchmove.drag"), it(window, "mouseup.drag"), it(window, "touchend.drag"), this.init(!0);
  }
}
/*!
* @svgdotjs/svg.select.js - An extension of svg.js which allows to select elements with mouse
* @version 4.0.1
* https://github.com/svgdotjs/svg.select.js
*
* @copyright Ulrich-Matthias Schäfer
* @license MIT
*
* BUILT: Mon Jul 01 2024 15:04:42 GMT+0200 (Central European Summer Time)
*/
function Js(n, e, t, i = null) {
  return function(s) {
    s.preventDefault(), s.stopPropagation();
    var a = s.pageX || s.touches[0].pageX, r = s.pageY || s.touches[0].pageY;
    e.fire(n, { x: a, y: r, event: s, index: i, points: t });
  };
}
function Ks([n, e], { a: t, b: i, c: s, d: a, e: r, f: o }) {
  return [n * t + e * s + r, n * i + e * a + o];
}
oe(He, { draggable(n = !0) {
  return (this.remember("_draggable") || new Yh(this)).init(n), this;
} });
let Qn = class {
  constructor(n) {
    this.el = n, n.remember("_selectHandler", this), this.selection = new xt(), this.order = ["lt", "t", "rt", "r", "rb", "b", "lb", "l", "rot"], this.mutationHandler = this.mutationHandler.bind(this);
    const e = bi();
    this.observer = new e.MutationObserver(this.mutationHandler);
  }
  init(n) {
    this.createHandle = n.createHandle || this.createHandleFn, this.createRot = n.createRot || this.createRotFn, this.updateHandle = n.updateHandle || this.updateHandleFn, this.updateRot = n.updateRot || this.updateRotFn, this.el.root().put(this.selection), this.updatePoints(), this.createSelection(), this.createResizeHandles(), this.updateResizeHandles(), this.createRotationHandle(), this.updateRotationHandle(), this.observer.observe(this.el.node, { attributes: !0 });
  }
  active(n, e) {
    if (!n) return this.selection.clear().remove(), void this.observer.disconnect();
    this.init(e);
  }
  createSelection() {
    this.selection.polygon(this.handlePoints).addClass("svg_select_shape");
  }
  updateSelection() {
    this.selection.get(0).plot(this.handlePoints);
  }
  createResizeHandles() {
    this.handlePoints.forEach((n, e, t) => {
      const i = this.order[e];
      this.createHandle.call(this, this.selection, n, e, t, i), this.selection.get(e + 1).addClass("svg_select_handle svg_select_handle_" + i).on("mousedown.selection touchstart.selection", Js(i, this.el, this.handlePoints, e));
    });
  }
  createHandleFn(n) {
    n.polyline();
  }
  updateHandleFn(n, e, t, i) {
    const s = i.at(t - 1), a = i[(t + 1) % i.length], r = e, o = [r[0] - s[0], r[1] - s[1]], l = [r[0] - a[0], r[1] - a[1]], c = Math.sqrt(o[0] * o[0] + o[1] * o[1]), h = Math.sqrt(l[0] * l[0] + l[1] * l[1]), d = [o[0] / c, o[1] / c], u = [l[0] / h, l[1] / h], g = [r[0] - 10 * d[0], r[1] - 10 * d[1]], p = [r[0] - 10 * u[0], r[1] - 10 * u[1]];
    n.plot([g, r, p]);
  }
  updateResizeHandles() {
    this.handlePoints.forEach((n, e, t) => {
      const i = this.order[e];
      this.updateHandle.call(this, this.selection.get(e + 1), n, e, t, i);
    });
  }
  createRotFn(n) {
    n.line(), n.circle(5);
  }
  getPoint(n) {
    return this.handlePoints[this.order.indexOf(n)];
  }
  getPointHandle(n) {
    return this.selection.get(this.order.indexOf(n) + 1);
  }
  updateRotFn(n, e) {
    const t = this.getPoint("t");
    n.get(0).plot(t[0], t[1], e[0], e[1]), n.get(1).center(e[0], e[1]);
  }
  createRotationHandle() {
    const n = this.selection.group().addClass("svg_select_handle_rot").on("mousedown.selection touchstart.selection", Js("rot", this.el, this.handlePoints));
    this.createRot.call(this, n);
  }
  updateRotationHandle() {
    const n = this.selection.findOne("g.svg_select_handle_rot");
    this.updateRot(n, this.rotationPoint, this.handlePoints);
  }
  updatePoints() {
    const n = this.el.bbox(), e = this.el.parent().screenCTM().inverseO().multiplyO(this.el.screenCTM());
    this.handlePoints = this.getHandlePoints(n).map((t) => Ks(t, e)), this.rotationPoint = Ks(this.getRotationPoint(n), e);
  }
  getHandlePoints({ x: n, x2: e, y: t, y2: i, cx: s, cy: a } = this.el.bbox()) {
    return [[n, t], [s, t], [e, t], [e, a], [e, i], [s, i], [n, i], [n, a]];
  }
  getRotationPoint({ y: n, cx: e } = this.el.bbox()) {
    return [e, n - 20];
  }
  mutationHandler() {
    this.updatePoints(), this.updateSelection(), this.updateResizeHandles(), this.updateRotationHandle();
  }
};
const yr = (n) => function(e = !0, t = {}) {
  typeof e == "object" && (t = e, e = !0);
  let i = this.remember("_" + n.name);
  return i || (e.prototype instanceof Qn ? (i = new e(this), e = !0) : i = new n(this), this.remember("_" + n.name, i)), i.active(e, t), this;
};
/*!
* @svgdotjs/svg.resize.js - An extension for svg.js which allows to resize elements which are selected
* @version 2.0.4
* https://github.com/svgdotjs/svg.resize.js
*
* @copyright [object Object]
* @license MIT
*
* BUILT: Fri Sep 13 2024 12:43:14 GMT+0200 (Central European Summer Time)
*/
/*!
* @svgdotjs/svg.select.js - An extension of svg.js which allows to select elements with mouse
* @version 4.0.1
* https://github.com/svgdotjs/svg.select.js
*
* @copyright Ulrich-Matthias Schäfer
* @license MIT
*
* BUILT: Mon Jul 01 2024 15:04:42 GMT+0200 (Central European Summer Time)
*/
function Qs(n, e, t, i = null) {
  return function(s) {
    s.preventDefault(), s.stopPropagation();
    var a = s.pageX || s.touches[0].pageX, r = s.pageY || s.touches[0].pageY;
    e.fire(n, { x: a, y: r, event: s, index: i, points: t });
  };
}
function ea([n, e], { a: t, b: i, c: s, d: a, e: r, f: o }) {
  return [n * t + e * s + r, n * i + e * a + o];
}
oe(He, { select: yr(Qn) }), oe([Ct, Mt, St], { pointSelect: yr(class {
  constructor(n) {
    this.el = n, n.remember("_pointSelectHandler", this), this.selection = new xt(), this.order = ["lt", "t", "rt", "r", "rb", "b", "lb", "l", "rot"], this.mutationHandler = this.mutationHandler.bind(this);
    const e = bi();
    this.observer = new e.MutationObserver(this.mutationHandler);
  }
  init(n) {
    this.createHandle = n.createHandle || this.createHandleFn, this.updateHandle = n.updateHandle || this.updateHandleFn, this.el.root().put(this.selection), this.updatePoints(), this.createSelection(), this.createPointHandles(), this.updatePointHandles(), this.observer.observe(this.el.node, { attributes: !0 });
  }
  active(n, e) {
    if (!n) return this.selection.clear().remove(), void this.observer.disconnect();
    this.init(e);
  }
  createSelection() {
    this.selection.polygon(this.points).addClass("svg_select_shape_pointSelect");
  }
  updateSelection() {
    this.selection.get(0).plot(this.points);
  }
  createPointHandles() {
    this.points.forEach((n, e, t) => {
      this.createHandle.call(this, this.selection, n, e, t), this.selection.get(e + 1).addClass("svg_select_handle_point").on("mousedown.selection touchstart.selection", Js("point", this.el, this.points, e));
    });
  }
  createHandleFn(n) {
    n.circle(5);
  }
  updateHandleFn(n, e) {
    n.center(e[0], e[1]);
  }
  updatePointHandles() {
    this.points.forEach((n, e, t) => {
      this.updateHandle.call(this, this.selection.get(e + 1), n, e, t);
    });
  }
  updatePoints() {
    const n = this.el.parent().screenCTM().inverseO().multiplyO(this.el.screenCTM());
    this.points = this.el.array().map((e) => Ks(e, n));
  }
  mutationHandler() {
    this.updatePoints(), this.updateSelection(), this.updatePointHandles();
  }
}) });
class eo {
  constructor(e) {
    this.el = e, e.remember("_selectHandler", this), this.selection = new xt(), this.order = ["lt", "t", "rt", "r", "rb", "b", "lb", "l", "rot"], this.mutationHandler = this.mutationHandler.bind(this);
    const t = bi();
    this.observer = new t.MutationObserver(this.mutationHandler);
  }
  init(e) {
    this.createHandle = e.createHandle || this.createHandleFn, this.createRot = e.createRot || this.createRotFn, this.updateHandle = e.updateHandle || this.updateHandleFn, this.updateRot = e.updateRot || this.updateRotFn, this.el.root().put(this.selection), this.updatePoints(), this.createSelection(), this.createResizeHandles(), this.updateResizeHandles(), this.createRotationHandle(), this.updateRotationHandle(), this.observer.observe(this.el.node, { attributes: !0 });
  }
  active(e, t) {
    if (!e) return this.selection.clear().remove(), void this.observer.disconnect();
    this.init(t);
  }
  createSelection() {
    this.selection.polygon(this.handlePoints).addClass("svg_select_shape");
  }
  updateSelection() {
    this.selection.get(0).plot(this.handlePoints);
  }
  createResizeHandles() {
    this.handlePoints.forEach((e, t, i) => {
      const s = this.order[t];
      this.createHandle.call(this, this.selection, e, t, i, s), this.selection.get(t + 1).addClass("svg_select_handle svg_select_handle_" + s).on("mousedown.selection touchstart.selection", Qs(s, this.el, this.handlePoints, t));
    });
  }
  createHandleFn(e) {
    e.polyline();
  }
  updateHandleFn(e, t, i, s) {
    const a = s.at(i - 1), r = s[(i + 1) % s.length], o = t, l = [o[0] - a[0], o[1] - a[1]], c = [o[0] - r[0], o[1] - r[1]], h = Math.sqrt(l[0] * l[0] + l[1] * l[1]), d = Math.sqrt(c[0] * c[0] + c[1] * c[1]), u = [l[0] / h, l[1] / h], g = [c[0] / d, c[1] / d], p = [o[0] - 10 * u[0], o[1] - 10 * u[1]], f = [o[0] - 10 * g[0], o[1] - 10 * g[1]];
    e.plot([p, o, f]);
  }
  updateResizeHandles() {
    this.handlePoints.forEach((e, t, i) => {
      const s = this.order[t];
      this.updateHandle.call(this, this.selection.get(t + 1), e, t, i, s);
    });
  }
  createRotFn(e) {
    e.line(), e.circle(5);
  }
  getPoint(e) {
    return this.handlePoints[this.order.indexOf(e)];
  }
  getPointHandle(e) {
    return this.selection.get(this.order.indexOf(e) + 1);
  }
  updateRotFn(e, t) {
    const i = this.getPoint("t");
    e.get(0).plot(i[0], i[1], t[0], t[1]), e.get(1).center(t[0], t[1]);
  }
  createRotationHandle() {
    const e = this.selection.group().addClass("svg_select_handle_rot").on("mousedown.selection touchstart.selection", Qs("rot", this.el, this.handlePoints));
    this.createRot.call(this, e);
  }
  updateRotationHandle() {
    const e = this.selection.findOne("g.svg_select_handle_rot");
    this.updateRot(e, this.rotationPoint, this.handlePoints);
  }
  updatePoints() {
    const e = this.el.bbox(), t = this.el.parent().screenCTM().inverseO().multiplyO(this.el.screenCTM());
    this.handlePoints = this.getHandlePoints(e).map((i) => ea(i, t)), this.rotationPoint = ea(this.getRotationPoint(e), t);
  }
  getHandlePoints({ x: e, x2: t, y: i, y2: s, cx: a, cy: r } = this.el.bbox()) {
    return [[e, i], [a, i], [t, i], [t, r], [t, s], [a, s], [e, s], [e, r]];
  }
  getRotationPoint({ y: e, cx: t } = this.el.bbox()) {
    return [t, e - 20];
  }
  mutationHandler() {
    this.updatePoints(), this.updateSelection(), this.updateResizeHandles(), this.updateRotationHandle();
  }
}
const wr = (n) => function(e = !0, t = {}) {
  typeof e == "object" && (t = e, e = !0);
  let i = this.remember("_" + n.name);
  return i || (e.prototype instanceof eo ? (i = new e(this), e = !0) : i = new n(this), this.remember("_" + n.name, i)), i.active(e, t), this;
};
oe(He, { select: wr(eo) }), oe([Ct, Mt, St], { pointSelect: wr(class {
  constructor(n) {
    this.el = n, n.remember("_pointSelectHandler", this), this.selection = new xt(), this.order = ["lt", "t", "rt", "r", "rb", "b", "lb", "l", "rot"], this.mutationHandler = this.mutationHandler.bind(this);
    const e = bi();
    this.observer = new e.MutationObserver(this.mutationHandler);
  }
  init(n) {
    this.createHandle = n.createHandle || this.createHandleFn, this.updateHandle = n.updateHandle || this.updateHandleFn, this.el.root().put(this.selection), this.updatePoints(), this.createSelection(), this.createPointHandles(), this.updatePointHandles(), this.observer.observe(this.el.node, { attributes: !0 });
  }
  active(n, e) {
    if (!n) return this.selection.clear().remove(), void this.observer.disconnect();
    this.init(e);
  }
  createSelection() {
    this.selection.polygon(this.points).addClass("svg_select_shape_pointSelect");
  }
  updateSelection() {
    this.selection.get(0).plot(this.points);
  }
  createPointHandles() {
    this.points.forEach((n, e, t) => {
      this.createHandle.call(this, this.selection, n, e, t), this.selection.get(e + 1).addClass("svg_select_handle_point").on("mousedown.selection touchstart.selection", Qs("point", this.el, this.points, e));
    });
  }
  createHandleFn(n) {
    n.circle(5);
  }
  updateHandleFn(n, e) {
    n.center(e[0], e[1]);
  }
  updatePointHandles() {
    this.points.forEach((n, e, t) => {
      this.updateHandle.call(this, this.selection.get(e + 1), n, e, t);
    });
  }
  updatePoints() {
    const n = this.el.parent().screenCTM().inverseO().multiplyO(this.el.screenCTM());
    this.points = this.el.array().map((e) => ea(e, n));
  }
  mutationHandler() {
    this.updatePoints(), this.updateSelection(), this.updatePointHandles();
  }
}) });
const Mi = (n) => (n.changedTouches && (n = n.changedTouches[0]), { x: n.clientX, y: n.clientY }), kr = (n) => {
  let e = 1 / 0, t = 1 / 0, i = -1 / 0, s = -1 / 0;
  for (let a = 0; a < n.length; a++) {
    const r = n[a];
    e = Math.min(e, r[0]), t = Math.min(t, r[1]), i = Math.max(i, r[0]), s = Math.max(s, r[1]);
  }
  return new Re(e, t, i - e, s - t);
};
class Ar {
  constructor(e) {
    this.el = e, e.remember("_ResizeHandler", this), this.lastCoordinates = null, this.eventType = "", this.lastEvent = null, this.handleResize = this.handleResize.bind(this), this.resize = this.resize.bind(this), this.endResize = this.endResize.bind(this), this.rotate = this.rotate.bind(this), this.movePoint = this.movePoint.bind(this);
  }
  active(e, t) {
    this.preserveAspectRatio = t.preserveAspectRatio ?? !1, this.aroundCenter = t.aroundCenter ?? !1, this.grid = t.grid ?? 0, this.degree = t.degree ?? 0, this.el.off(".resize"), e && (this.el.on(["lt.resize", "rt.resize", "rb.resize", "lb.resize", "t.resize", "r.resize", "b.resize", "l.resize", "rot.resize", "point.resize"], this.handleResize), this.lastEvent && (this.eventType === "rot" ? this.rotate(this.lastEvent) : this.eventType === "point" ? this.movePoint(this.lastEvent) : this.resize(this.lastEvent)));
  }
  handleResize(e) {
    this.eventType = e.type;
    const { event: t, index: i, points: s } = e.detail, a = !t.type.indexOf("mouse");
    if (a && (t.which || t.buttons) !== 1 || this.el.dispatch("beforeresize", { event: e, handler: this }).defaultPrevented) return;
    this.box = this.el.bbox(), this.startPoint = this.el.point(Mi(t)), this.index = i, this.points = s.slice();
    const r = (a ? "mousemove" : "touchmove") + ".resize", o = (a ? "mouseup" : "touchcancel.resize touchend") + ".resize";
    e.type === "point" ? dt(window, r, this.movePoint) : e.type === "rot" ? dt(window, r, this.rotate) : dt(window, r, this.resize), dt(window, o, this.endResize);
  }
  resize(e) {
    this.lastEvent = e;
    const t = this.snapToGrid(this.el.point(Mi(e)));
    let i = t.x - this.startPoint.x, s = t.y - this.startPoint.y;
    this.preserveAspectRatio && this.aroundCenter && (i *= 2, s *= 2);
    const a = this.box.x + i, r = this.box.y + s, o = this.box.x2 + i, l = this.box.y2 + s;
    let c = new Re(this.box);
    if (this.eventType.includes("l") && (c.x = Math.min(a, this.box.x2), c.x2 = Math.max(a, this.box.x2)), this.eventType.includes("r") && (c.x = Math.min(o, this.box.x), c.x2 = Math.max(o, this.box.x)), this.eventType.includes("t") && (c.y = Math.min(r, this.box.y2), c.y2 = Math.max(r, this.box.y2)), this.eventType.includes("b") && (c.y = Math.min(l, this.box.y), c.y2 = Math.max(l, this.box.y)), c.width = c.x2 - c.x, c.height = c.y2 - c.y, this.preserveAspectRatio) {
      const h = c.width / this.box.width, d = c.height / this.box.height, u = ["lt", "t", "rt", "r", "rb", "b", "lb", "l"], g = (u.indexOf(this.eventType) + 4) % u.length, p = this.aroundCenter ? [this.box.cx, this.box.cy] : this.points[g];
      let f = this.eventType.includes("t") || this.eventType.includes("b") ? d : h;
      f = this.eventType.length === 2 ? Math.max(h, d) : f, c = function(x, m, b) {
        const w = [[x.x, x.y], [x.x + x.width, x.y], [x.x + x.width, x.y + x.height], [x.x, x.y + x.height]].map(([y, v]) => {
          const k = y - m[0], A = (v - m[1]) * b;
          return [k * b + m[0], A + m[1]];
        });
        return kr(w);
      }(this.box, p, f);
    }
    this.el.dispatch("resize", { box: new Re(c), angle: 0, eventType: this.eventType, event: e, handler: this }).defaultPrevented || this.el.size(c.width, c.height).move(c.x, c.y);
  }
  movePoint(e) {
    this.lastEvent = e;
    const { x: t, y: i } = this.snapToGrid(this.el.point(Mi(e))), s = this.el.array().slice();
    s[this.index] = [t, i], this.el.dispatch("resize", { box: kr(s), angle: 0, eventType: this.eventType, event: e, handler: this }).defaultPrevented || this.el.plot(s);
  }
  rotate(e) {
    this.lastEvent = e;
    const t = this.startPoint, i = this.el.point(Mi(e)), { cx: s, cy: a } = this.box, r = t.x - s, o = t.y - a, l = i.x - s, c = i.y - a, h = Math.sqrt(r * r + o * o) * Math.sqrt(l * l + c * c);
    if (h === 0) return;
    let d = Math.acos((r * l + o * c) / h) / Math.PI * 180;
    if (!d) return;
    i.x < t.x && (d = -d);
    const u = new ne(this.el), { x: g, y: p } = new be(s, a).transformO(u), { rotate: f } = u.decompose(), x = this.snapToAngle(f + d) - f;
    this.el.dispatch("resize", { box: this.box, angle: x, eventType: this.eventType, event: e, handler: this }).defaultPrevented || this.el.transform(u.rotateO(x, g, p));
  }
  endResize(e) {
    this.eventType !== "rot" && this.eventType !== "point" && this.resize(e), this.lastEvent = null, this.eventType = "", it(window, "mousemove.resize touchmove.resize"), it(window, "mouseup.resize touchend.resize");
  }
  snapToGrid(e) {
    return this.grid && (e.x = Math.round(e.x / this.grid) * this.grid, e.y = Math.round(e.y / this.grid) * this.grid), e;
  }
  snapToAngle(e) {
    return this.degree && (e = Math.round(e / this.degree) * this.degree), e;
  }
}
oe(He, { resize: function(n = !0, e = {}) {
  typeof n == "object" && (e = n, n = !0);
  let t = this.remember("_ResizeHandler");
  return t || (n.prototype instanceof Ar ? (t = new n(this), n = !0) : t = new Ar(this), this.remember("_resizeHandler", t)), t.active(n, e), this;
} }), window.SVG === void 0 && (window.SVG = Qc), window.Apex === void 0 && (window.Apex = {});
var Sr = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w;
  }
  return te(n, [{ key: "initModules", value: function() {
    this.ctx.publicMethods = ["updateOptions", "updateSeries", "appendData", "appendSeries", "isSeriesHidden", "highlightSeries", "toggleSeries", "showSeries", "hideSeries", "setLocale", "resetSeries", "zoomX", "toggleDataPointSelection", "dataURI", "exportToCSV", "addXaxisAnnotation", "addYaxisAnnotation", "addPointAnnotation", "clearAnnotations", "removeAnnotation", "paper", "destroy"], this.ctx.eventList = ["click", "mousedown", "mousemove", "mouseleave", "touchstart", "touchmove", "touchleave", "mouseup", "touchend"], this.ctx.animations = new Vt(this.ctx), this.ctx.axes = new ch(this.ctx), this.ctx.core = new _h(this.ctx.el, this.ctx), this.ctx.config = new fi({}), this.ctx.data = new Aa(this.ctx), this.ctx.grid = new Wn(this.ctx), this.ctx.graphics = new W(this.ctx), this.ctx.coreUtils = new Oe(this.ctx), this.ctx.crosshairs = new Zs(this.ctx), this.ctx.events = new oh(this.ctx), this.ctx.exports = new oi(this.ctx), this.ctx.fill = new nt(this.ctx), this.ctx.localization = new lh(this.ctx), this.ctx.options = new At(), this.ctx.responsive = new hh(this.ctx), this.ctx.series = new st(this.ctx), this.ctx.theme = new dh(this.ctx), this.ctx.formatters = new wi(this.ctx), this.ctx.titleSubtitle = new uh(this.ctx), this.ctx.legend = new Gn(this.ctx), this.ctx.toolbar = new Vn(this.ctx), this.ctx.tooltip = new mr(this.ctx), this.ctx.dimensions = new Hi(this.ctx), this.ctx.updateHelpers = new Dh(this.ctx), this.ctx.zoomPanSelection = new bh(this.ctx), this.ctx.w.globals.tooltip = new mr(this.ctx);
  } }]), n;
}(), Cr = function() {
  function n(e) {
    ee(this, n), this.ctx = e, this.w = e.w;
  }
  return te(n, [{ key: "clear", value: function(e) {
    var t = e.isUpdating;
    this.ctx.zoomPanSelection && this.ctx.zoomPanSelection.destroy(), this.ctx.toolbar && this.ctx.toolbar.destroy(), this.ctx.animations = null, this.ctx.axes = null, this.ctx.annotations = null, this.ctx.core = null, this.ctx.data = null, this.ctx.grid = null, this.ctx.series = null, this.ctx.responsive = null, this.ctx.theme = null, this.ctx.formatters = null, this.ctx.titleSubtitle = null, this.ctx.legend = null, this.ctx.dimensions = null, this.ctx.options = null, this.ctx.crosshairs = null, this.ctx.zoomPanSelection = null, this.ctx.updateHelpers = null, this.ctx.toolbar = null, this.ctx.localization = null, this.ctx.w.globals.tooltip = null, this.clearDomElements({ isUpdating: t });
  } }, { key: "killSVG", value: function(e) {
    e.each(function() {
      this.removeClass("*"), this.off();
    }, !0), e.clear();
  } }, { key: "clearDomElements", value: function(e) {
    var t = this, i = e.isUpdating, s = this.w.globals.dom.Paper.node;
    s.parentNode && s.parentNode.parentNode && !i && (s.parentNode.parentNode.style.minHeight = "unset");
    var a = this.w.globals.dom.baseEl;
    a && this.ctx.eventList.forEach(function(o) {
      a.removeEventListener(o, t.ctx.events.documentEvent);
    });
    var r = this.w.globals.dom;
    if (this.ctx.el !== null) for (; this.ctx.el.firstChild; ) this.ctx.el.removeChild(this.ctx.el.firstChild);
    this.killSVG(r.Paper), r.Paper.remove(), r.elWrap = null, r.elGraphical = null, r.elLegendWrap = null, r.elLegendForeign = null, r.baseEl = null, r.elGridRect = null, r.elGridRectMask = null, r.elGridRectBarMask = null, r.elGridRectMarkerMask = null, r.elForecastMask = null, r.elNonForecastMask = null, r.elDefs = null;
  } }]), n;
}(), vs = /* @__PURE__ */ new WeakMap(), Fh = function() {
  function n(e, t) {
    ee(this, n), this.opts = t, this.ctx = this, this.w = new nh(t).init(), this.el = e, this.w.globals.cuid = _.randomId(), this.w.globals.chartID = this.w.config.chart.id ? _.escapeString(this.w.config.chart.id) : this.w.globals.cuid, new Sr(this).initModules(), this.lastUpdateOptions = null, this.create = _.bind(this.create, this), this.windowResizeHandler = this._windowResizeHandler.bind(this), this.parentResizeHandler = this._parentResizeCallback.bind(this);
  }
  return te(n, [{ key: "render", value: function() {
    var e = this;
    return new Promise(function(t, i) {
      if (_.elementExists(e.el)) {
        Apex._chartInstances === void 0 && (Apex._chartInstances = []), e.w.config.chart.id && Apex._chartInstances.push({ id: e.w.globals.chartID, group: e.w.config.chart.group, chart: e }), e.setLocale(e.w.config.chart.defaultLocale);
        var s = e.w.config.chart.events.beforeMount;
        typeof s == "function" && s(e, e.w), e.events.fireEvent("beforeMount", [e, e.w]), window.addEventListener("resize", e.windowResizeHandler), function(u, g) {
          var p = !1;
          if (u.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
            var f = u.getBoundingClientRect();
            u.style.display !== "none" && f.width !== 0 || (p = !0);
          }
          var x = new ResizeObserver(function(m) {
            p && g.call(u, m), p = !0;
          });
          u.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? Array.from(u.children).forEach(function(m) {
            return x.observe(m);
          }) : x.observe(u), vs.set(g, x);
        }(e.el.parentNode, e.parentResizeHandler);
        var a = e.el.getRootNode && e.el.getRootNode(), r = _.is("ShadowRoot", a), o = e.el.ownerDocument, l = r ? a.getElementById("apexcharts-css") : o.getElementById("apexcharts-css");
        if (!l) {
          var c;
          (l = document.createElement("style")).id = "apexcharts-css", l.textContent = `@keyframes opaque {
  0% {
    opacity: 0
  }

  to {
    opacity: 1
  }
}

@keyframes resizeanim {

  0%,
  to {
    opacity: 0
  }
}

.apexcharts-canvas {
  position: relative;
  direction: ltr !important;
  user-select: none
}

.apexcharts-canvas ::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 6px
}

.apexcharts-canvas ::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, .5);
  box-shadow: 0 0 1px rgba(255, 255, 255, .5);
  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5)
}

.apexcharts-inner {
  position: relative
}

.apexcharts-text tspan {
  font-family: inherit
}

rect.legend-mouseover-inactive,
.legend-mouseover-inactive rect,
.legend-mouseover-inactive path,
.legend-mouseover-inactive circle,
.legend-mouseover-inactive line,
.legend-mouseover-inactive text.apexcharts-yaxis-title-text,
.legend-mouseover-inactive text.apexcharts-yaxis-label {
  transition: .15s ease all;
  opacity: .2
}

.apexcharts-legend-text {
  padding-left: 15px;
  margin-left: -15px;
}

.apexcharts-series-collapsed {
  opacity: 0
}

.apexcharts-tooltip {
  border-radius: 5px;
  box-shadow: 2px 2px 6px -4px #999;
  cursor: default;
  font-size: 14px;
  left: 62px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  white-space: nowrap;
  z-index: 12;
  transition: .15s ease all
}

.apexcharts-tooltip.apexcharts-active {
  opacity: 1;
  transition: .15s ease all
}

.apexcharts-tooltip.apexcharts-theme-light {
  border: 1px solid #e3e3e3;
  background: rgba(255, 255, 255, .96)
}

.apexcharts-tooltip.apexcharts-theme-dark {
  color: #fff;
  background: rgba(30, 30, 30, .8)
}

.apexcharts-tooltip * {
  font-family: inherit
}

.apexcharts-tooltip-title {
  padding: 6px;
  font-size: 15px;
  margin-bottom: 4px
}

.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {
  background: #eceff1;
  border-bottom: 1px solid #ddd
}

.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {
  background: rgba(0, 0, 0, .7);
  border-bottom: 1px solid #333
}

.apexcharts-tooltip-text-goals-value,
.apexcharts-tooltip-text-y-value,
.apexcharts-tooltip-text-z-value {
  display: inline-block;
  margin-left: 5px;
  font-weight: 600
}

.apexcharts-tooltip-text-goals-label:empty,
.apexcharts-tooltip-text-goals-value:empty,
.apexcharts-tooltip-text-y-label:empty,
.apexcharts-tooltip-text-y-value:empty,
.apexcharts-tooltip-text-z-value:empty,
.apexcharts-tooltip-title:empty {
  display: none
}

.apexcharts-tooltip-text-goals-label,
.apexcharts-tooltip-text-goals-value {
  padding: 6px 0 5px
}

.apexcharts-tooltip-goals-group,
.apexcharts-tooltip-text-goals-label,
.apexcharts-tooltip-text-goals-value {
  display: flex
}

.apexcharts-tooltip-text-goals-label:not(:empty),
.apexcharts-tooltip-text-goals-value:not(:empty) {
  margin-top: -6px
}

.apexcharts-tooltip-marker {
  display: inline-block;
  position: relative;
  width: 16px;
  height: 16px;
  font-size: 16px;
  line-height: 16px;
  margin-right: 4px;
  text-align: center;
  vertical-align: middle;
  color: inherit;
}

.apexcharts-tooltip-marker::before {
  content: "";
  display: inline-block;
  width: 100%;
  text-align: center;
  color: currentcolor;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  font-size: 26px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 14px;
  font-weight: 900;
}

.apexcharts-tooltip-marker[shape="circle"]::before {
  content: "\\25CF";
}

.apexcharts-tooltip-marker[shape="square"]::before,
.apexcharts-tooltip-marker[shape="rect"]::before {
  content: "\\25A0";
  transform: translate(-1px, -2px);
}

.apexcharts-tooltip-marker[shape="line"]::before {
  content: "\\2500";
}

.apexcharts-tooltip-marker[shape="diamond"]::before {
  content: "\\25C6";
  font-size: 28px;
}

.apexcharts-tooltip-marker[shape="triangle"]::before {
  content: "\\25B2";
  font-size: 22px;
}

.apexcharts-tooltip-marker[shape="cross"]::before {
  content: "\\2715";
  font-size: 18px;
}

.apexcharts-tooltip-marker[shape="plus"]::before {
  content: "\\2715";
  transform: rotate(45deg) translate(-1px, -1px);
  font-size: 18px;
}

.apexcharts-tooltip-marker[shape="star"]::before {
  content: "\\2605";
  font-size: 18px;
}

.apexcharts-tooltip-marker[shape="sparkle"]::before {
  content: "\\2726";
  font-size: 20px;
}

.apexcharts-tooltip-series-group {
  padding: 0 10px;
  display: none;
  text-align: left;
  justify-content: left;
  align-items: center
}

.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {
  opacity: 1
}

.apexcharts-tooltip-series-group.apexcharts-active,
.apexcharts-tooltip-series-group:last-child {
  padding-bottom: 4px
}

.apexcharts-tooltip-y-group {
  padding: 6px 0 5px
}

.apexcharts-custom-tooltip,
.apexcharts-tooltip-box {
  padding: 4px 8px
}

.apexcharts-tooltip-boxPlot {
  display: flex;
  flex-direction: column-reverse
}

.apexcharts-tooltip-box>div {
  margin: 4px 0
}

.apexcharts-tooltip-box span.value {
  font-weight: 700
}

.apexcharts-tooltip-rangebar {
  padding: 5px 8px
}

.apexcharts-tooltip-rangebar .category {
  font-weight: 600;
  color: #777
}

.apexcharts-tooltip-rangebar .series-name {
  font-weight: 700;
  display: block;
  margin-bottom: 5px
}

.apexcharts-xaxistooltip,
.apexcharts-yaxistooltip {
  opacity: 0;
  pointer-events: none;
  color: #373d3f;
  font-size: 13px;
  text-align: center;
  border-radius: 2px;
  position: absolute;
  z-index: 10;
  background: #eceff1;
  border: 1px solid #90a4ae
}

.apexcharts-xaxistooltip {
  padding: 9px 10px;
  transition: .15s ease all
}

.apexcharts-xaxistooltip.apexcharts-theme-dark {
  background: rgba(0, 0, 0, .7);
  border: 1px solid rgba(0, 0, 0, .5);
  color: #fff
}

.apexcharts-xaxistooltip:after,
.apexcharts-xaxistooltip:before {
  left: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none
}

.apexcharts-xaxistooltip:after {
  border-color: transparent;
  border-width: 6px;
  margin-left: -6px
}

.apexcharts-xaxistooltip:before {
  border-color: transparent;
  border-width: 7px;
  margin-left: -7px
}

.apexcharts-xaxistooltip-bottom:after,
.apexcharts-xaxistooltip-bottom:before {
  bottom: 100%
}

.apexcharts-xaxistooltip-top:after,
.apexcharts-xaxistooltip-top:before {
  top: 100%
}

.apexcharts-xaxistooltip-bottom:after {
  border-bottom-color: #eceff1
}

.apexcharts-xaxistooltip-bottom:before {
  border-bottom-color: #90a4ae
}

.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after,
.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {
  border-bottom-color: rgba(0, 0, 0, .5)
}

.apexcharts-xaxistooltip-top:after {
  border-top-color: #eceff1
}

.apexcharts-xaxistooltip-top:before {
  border-top-color: #90a4ae
}

.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after,
.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {
  border-top-color: rgba(0, 0, 0, .5)
}

.apexcharts-xaxistooltip.apexcharts-active {
  opacity: 1;
  transition: .15s ease all
}

.apexcharts-yaxistooltip {
  padding: 4px 10px
}

.apexcharts-yaxistooltip.apexcharts-theme-dark {
  background: rgba(0, 0, 0, .7);
  border: 1px solid rgba(0, 0, 0, .5);
  color: #fff
}

.apexcharts-yaxistooltip:after,
.apexcharts-yaxistooltip:before {
  top: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none
}

.apexcharts-yaxistooltip:after {
  border-color: transparent;
  border-width: 6px;
  margin-top: -6px
}

.apexcharts-yaxistooltip:before {
  border-color: transparent;
  border-width: 7px;
  margin-top: -7px
}

.apexcharts-yaxistooltip-left:after,
.apexcharts-yaxistooltip-left:before {
  left: 100%
}

.apexcharts-yaxistooltip-right:after,
.apexcharts-yaxistooltip-right:before {
  right: 100%
}

.apexcharts-yaxistooltip-left:after {
  border-left-color: #eceff1
}

.apexcharts-yaxistooltip-left:before {
  border-left-color: #90a4ae
}

.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after,
.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {
  border-left-color: rgba(0, 0, 0, .5)
}

.apexcharts-yaxistooltip-right:after {
  border-right-color: #eceff1
}

.apexcharts-yaxistooltip-right:before {
  border-right-color: #90a4ae
}

.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after,
.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {
  border-right-color: rgba(0, 0, 0, .5)
}

.apexcharts-yaxistooltip.apexcharts-active {
  opacity: 1
}

.apexcharts-yaxistooltip-hidden {
  display: none
}

.apexcharts-xcrosshairs,
.apexcharts-ycrosshairs {
  pointer-events: none;
  opacity: 0;
  transition: .15s ease all
}

.apexcharts-xcrosshairs.apexcharts-active,
.apexcharts-ycrosshairs.apexcharts-active {
  opacity: 1;
  transition: .15s ease all
}

.apexcharts-ycrosshairs-hidden {
  opacity: 0
}

.apexcharts-selection-rect {
  cursor: move
}

.svg_select_shape {
  stroke-width: 1;
  stroke-dasharray: 10 10;
  stroke: black;
  stroke-opacity: 0.1;
  pointer-events: none;
  fill: none;
}

.svg_select_handle {
  stroke-width: 3;
  stroke: black;
  fill: none;
}

.svg_select_handle_r {
  cursor: e-resize;
}

.svg_select_handle_l {
  cursor: w-resize;
}

.apexcharts-svg.apexcharts-zoomable.hovering-zoom {
  cursor: crosshair
}

.apexcharts-svg.apexcharts-zoomable.hovering-pan {
  cursor: move
}

.apexcharts-menu-icon,
.apexcharts-pan-icon,
.apexcharts-reset-icon,
.apexcharts-selection-icon,
.apexcharts-toolbar-custom-icon,
.apexcharts-zoom-icon,
.apexcharts-zoomin-icon,
.apexcharts-zoomout-icon {
  cursor: pointer;
  width: 20px;
  height: 20px;
  line-height: 24px;
  color: #6e8192;
  text-align: center
}

.apexcharts-menu-icon svg,
.apexcharts-reset-icon svg,
.apexcharts-zoom-icon svg,
.apexcharts-zoomin-icon svg,
.apexcharts-zoomout-icon svg {
  fill: #6e8192
}

.apexcharts-selection-icon svg {
  fill: #444;
  transform: scale(.76)
}

.apexcharts-theme-dark .apexcharts-menu-icon svg,
.apexcharts-theme-dark .apexcharts-pan-icon svg,
.apexcharts-theme-dark .apexcharts-reset-icon svg,
.apexcharts-theme-dark .apexcharts-selection-icon svg,
.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg,
.apexcharts-theme-dark .apexcharts-zoom-icon svg,
.apexcharts-theme-dark .apexcharts-zoomin-icon svg,
.apexcharts-theme-dark .apexcharts-zoomout-icon svg {
  fill: #f3f4f5
}

.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg,
.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,
.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg {
  fill: #008ffb
}

.apexcharts-theme-light .apexcharts-menu-icon:hover svg,
.apexcharts-theme-light .apexcharts-reset-icon:hover svg,
.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,
.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,
.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,
.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg {
  fill: #333
}

.apexcharts-menu-icon,
.apexcharts-selection-icon {
  position: relative
}

.apexcharts-reset-icon {
  margin-left: 5px
}

.apexcharts-menu-icon,
.apexcharts-reset-icon,
.apexcharts-zoom-icon {
  transform: scale(.85)
}

.apexcharts-zoomin-icon,
.apexcharts-zoomout-icon {
  transform: scale(.7)
}

.apexcharts-zoomout-icon {
  margin-right: 3px
}

.apexcharts-pan-icon {
  transform: scale(.62);
  position: relative;
  left: 1px;
  top: 0
}

.apexcharts-pan-icon svg {
  fill: #fff;
  stroke: #6e8192;
  stroke-width: 2
}

.apexcharts-pan-icon.apexcharts-selected svg {
  stroke: #008ffb
}

.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {
  stroke: #333
}

.apexcharts-toolbar {
  position: absolute;
  z-index: 11;
  max-width: 176px;
  text-align: right;
  border-radius: 3px;
  padding: 0 6px 2px;
  display: flex;
  justify-content: space-between;
  align-items: center
}

.apexcharts-menu {
  background: #fff;
  position: absolute;
  top: 100%;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 3px;
  right: 10px;
  opacity: 0;
  min-width: 110px;
  transition: .15s ease all;
  pointer-events: none
}

.apexcharts-menu.apexcharts-menu-open {
  opacity: 1;
  pointer-events: all;
  transition: .15s ease all
}

.apexcharts-menu-item {
  padding: 6px 7px;
  font-size: 12px;
  cursor: pointer
}

.apexcharts-theme-light .apexcharts-menu-item:hover {
  background: #eee
}

.apexcharts-theme-dark .apexcharts-menu {
  background: rgba(0, 0, 0, .7);
  color: #fff
}

@media screen and (min-width:768px) {
  .apexcharts-canvas:hover .apexcharts-toolbar {
    opacity: 1
  }
}

.apexcharts-canvas .apexcharts-element-hidden,
.apexcharts-datalabel.apexcharts-element-hidden,
.apexcharts-hide .apexcharts-series-points {
  opacity: 0;
}

.apexcharts-hidden-element-shown {
  opacity: 1;
  transition: 0.25s ease all;
}

.apexcharts-datalabel,
.apexcharts-datalabel-label,
.apexcharts-datalabel-value,
.apexcharts-datalabels,
.apexcharts-pie-label {
  cursor: default;
  pointer-events: none
}

.apexcharts-pie-label-delay {
  opacity: 0;
  animation-name: opaque;
  animation-duration: .3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease
}

.apexcharts-radialbar-label {
  cursor: pointer;
}

.apexcharts-annotation-rect,
.apexcharts-area-series .apexcharts-area,
.apexcharts-gridline,
.apexcharts-line,
.apexcharts-point-annotation-label,
.apexcharts-radar-series path:not(.apexcharts-marker),
.apexcharts-radar-series polygon,
.apexcharts-toolbar svg,
.apexcharts-tooltip .apexcharts-marker,
.apexcharts-xaxis-annotation-label,
.apexcharts-yaxis-annotation-label,
.apexcharts-zoom-rect,
.no-pointer-events {
  pointer-events: none
}

.apexcharts-tooltip-active .apexcharts-marker {
  transition: .15s ease all
}

.apexcharts-radar-series .apexcharts-yaxis {
  pointer-events: none;
}

.resize-triggers {
  animation: 1ms resizeanim;
  visibility: hidden;
  opacity: 0;
  height: 100%;
  width: 100%;
  overflow: hidden
}

.contract-trigger:before,
.resize-triggers,
.resize-triggers>div {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0
}

.resize-triggers>div {
  height: 100%;
  width: 100%;
  background: #eee;
  overflow: auto
}

.contract-trigger:before {
  overflow: hidden;
  width: 200%;
  height: 200%
}

.apexcharts-bar-goals-markers {
  pointer-events: none
}

.apexcharts-bar-shadows {
  pointer-events: none
}

.apexcharts-rangebar-goals-markers {
  pointer-events: none
}

.apexcharts-disable-transitions * {
  transition: none !important;
}`;
          var h = ((c = e.opts.chart) === null || c === void 0 ? void 0 : c.nonce) || e.w.config.chart.nonce;
          h && l.setAttribute("nonce", h), r ? a.prepend(l) : o.head.appendChild(l);
        }
        var d = e.create(e.w.config.series, {});
        if (!d) return t(e);
        e.mount(d).then(function() {
          typeof e.w.config.chart.events.mounted == "function" && e.w.config.chart.events.mounted(e, e.w), e.events.fireEvent("mounted", [e, e.w]), t(d);
        }).catch(function(u) {
          i(u);
        });
      } else i(new Error("Element not found"));
    });
  } }, { key: "create", value: function(e, t) {
    var i = this, s = this.w;
    new Sr(this).initModules();
    var a = this.w.globals;
    if (a.noData = !1, a.animationEnded = !1, !_.elementExists(this.el) || (this.responsive.checkResponsiveConfig(t), s.config.xaxis.convertedCatToNumeric && new gi(s.config).convertCatToNumericXaxis(s.config, this.ctx), this.core.setupElements(), s.config.chart.type === "treemap" && (s.config.grid.show = !1, s.config.yaxis[0].show = !1), a.svgWidth === 0)) return a.animationEnded = !0, null;
    var r = e;
    e.forEach(function(u, g) {
      u.hidden && (r = i.legend.legendHelpers.getSeriesAfterCollapsing({ realIndex: g }));
    });
    var o = Oe.checkComboSeries(r, s.config.chart.type);
    a.comboCharts = o.comboCharts, a.comboBarCount = o.comboBarCount;
    var l = r.every(function(u) {
      return u.data && u.data.length === 0;
    });
    (r.length === 0 || l && a.collapsedSeries.length < 1) && this.series.handleNoData(), this.events.setupEventHandlers(), this.data.parseData(r), this.theme.init(), new Zt(this).setGlobalMarkerSize(), this.formatters.setLabelFormatters(), this.titleSubtitle.draw(), a.noData && a.collapsedSeries.length !== a.series.length && !s.config.legend.showForSingleSeries || this.legend.init(), this.series.hasAllSeriesEqualX(), a.axisCharts && (this.core.coreCalculations(), s.config.xaxis.type !== "category" && this.formatters.setLabelFormatters(), this.ctx.toolbar.minX = s.globals.minX, this.ctx.toolbar.maxX = s.globals.maxX), this.formatters.heatmapLabelFormatters(), new Oe(this).getLargestMarkerSize(), this.dimensions.plotCoords();
    var c = this.core.xySettings();
    this.grid.createGridMask();
    var h = this.core.plotChartType(r, c), d = new jt(this);
    return d.bringForward(), s.config.dataLabels.background.enabled && d.dataLabelsBackground(), this.core.shiftGraphPosition(), s.globals.dataPoints > 50 && s.globals.dom.elWrap.classList.add("apexcharts-disable-transitions"), { elGraph: h, xyRatios: c, dimensions: { plot: { left: s.globals.translateX, top: s.globals.translateY, width: s.globals.gridWidth, height: s.globals.gridHeight } } };
  } }, { key: "mount", value: function() {
    var e = this, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, i = this, s = i.w;
    return new Promise(function(a, r) {
      if (i.el === null) return r(new Error("Not enough data to display or target element not found"));
      (t === null || s.globals.allSeriesCollapsed) && i.series.handleNoData(), i.grid = new Wn(i);
      var o, l, c = i.grid.drawGrid();
      if (i.annotations = new rh(i), i.annotations.drawImageAnnos(), i.annotations.drawTextAnnos(), s.config.grid.position === "back" && (c && s.globals.dom.elGraphical.add(c.el), c != null && (o = c.elGridBorders) !== null && o !== void 0 && o.node && s.globals.dom.elGraphical.add(c.elGridBorders)), Array.isArray(t.elGraph)) for (var h = 0; h < t.elGraph.length; h++) s.globals.dom.elGraphical.add(t.elGraph[h]);
      else s.globals.dom.elGraphical.add(t.elGraph);
      s.config.grid.position === "front" && (c && s.globals.dom.elGraphical.add(c.el), c != null && (l = c.elGridBorders) !== null && l !== void 0 && l.node && s.globals.dom.elGraphical.add(c.elGridBorders)), s.config.xaxis.crosshairs.position === "front" && i.crosshairs.drawXCrosshairs(), s.config.yaxis[0].crosshairs.position === "front" && i.crosshairs.drawYCrosshairs(), s.config.chart.type !== "treemap" && i.axes.drawAxis(s.config.chart.type, c);
      var d = new pi(e.ctx, c), u = new Sa(e.ctx, c);
      if (c !== null && (d.xAxisLabelCorrections(c.xAxisTickWidth), u.setYAxisTextAlignments(), s.config.yaxis.map(function(p, f) {
        s.globals.ignoreYAxisIndexes.indexOf(f) === -1 && u.yAxisTitleRotate(f, p.opposite);
      })), i.annotations.drawAxesAnnotations(), !s.globals.noData) {
        if (s.config.tooltip.enabled && !s.globals.noData && i.w.globals.tooltip.drawTooltip(t.xyRatios), s.globals.axisCharts && (s.globals.isXNumeric || s.config.xaxis.convertedCatToNumeric || s.globals.isRangeBar)) (s.config.chart.zoom.enabled || s.config.chart.selection && s.config.chart.selection.enabled || s.config.chart.pan && s.config.chart.pan.enabled) && i.zoomPanSelection.init({ xyRatios: t.xyRatios });
        else {
          var g = s.config.chart.toolbar.tools;
          ["zoom", "zoomin", "zoomout", "selection", "pan", "reset"].forEach(function(p) {
            g[p] = !1;
          });
        }
        s.config.chart.toolbar.show && !s.globals.allSeriesCollapsed && i.toolbar.createToolbar();
      }
      s.globals.memory.methodsToExec.length > 0 && s.globals.memory.methodsToExec.forEach(function(p) {
        p.method(p.params, !1, p.context);
      }), s.globals.axisCharts || s.globals.noData || i.core.resizeNonAxisCharts(), a(i);
    });
  } }, { key: "destroy", value: function() {
    window.removeEventListener("resize", this.windowResizeHandler), function(t, i) {
      var s = vs.get(i);
      s && (s.disconnect(), vs.delete(i));
    }(this.el.parentNode, this.parentResizeHandler);
    var e = this.w.config.chart.id;
    e && Apex._chartInstances.forEach(function(t, i) {
      t.id === _.escapeString(e) && Apex._chartInstances.splice(i, 1);
    }), new Cr(this.ctx).clear({ isUpdating: !1 });
  } }, { key: "updateOptions", value: function(e) {
    var t = this, i = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], s = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], a = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3], r = !(arguments.length > 4 && arguments[4] !== void 0) || arguments[4], o = this.w;
    return o.globals.selection = void 0, this.lastUpdateOptions && JSON.stringify(this.lastUpdateOptions) === JSON.stringify(e) ? this : (this.lastUpdateOptions = _.clone(e), e.series && (this.series.resetSeries(!1, !0, !1), e.series.length && e.series[0].data && (e.series = e.series.map(function(l, c) {
      return t.updateHelpers._extendSeries(l, c);
    })), this.updateHelpers.revertDefaultAxisMinMax()), e.xaxis && (e = this.updateHelpers.forceXAxisUpdate(e)), e.yaxis && (e = this.updateHelpers.forceYAxisUpdate(e)), o.globals.collapsedSeriesIndices.length > 0 && this.series.clearPreviousPaths(), e.theme && (e = this.theme.updateThemeOptions(e)), this.updateHelpers._updateOptions(e, i, s, a, r));
  } }, { key: "updateSeries", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
    return this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(e, t, i);
  } }, { key: "appendSeries", value: function(e) {
    var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], s = this.w.config.series.slice();
    return s.push(e), this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(s, t, i);
  } }, { key: "appendData", value: function(e) {
    var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = this;
    i.w.globals.dataChanged = !0, i.series.getPreviousPaths();
    for (var s = i.w.config.series.slice(), a = 0; a < s.length; a++) if (e[a] !== null && e[a] !== void 0) for (var r = 0; r < e[a].data.length; r++) s[a].data.push(e[a].data[r]);
    return i.w.config.series = s, t && (i.w.globals.initialSeries = _.clone(i.w.config.series)), this.update();
  } }, { key: "update", value: function(e) {
    var t = this;
    return new Promise(function(i, s) {
      if (t.lastUpdateOptions && JSON.stringify(t.lastUpdateOptions) === JSON.stringify(e)) return i(t);
      t.lastUpdateOptions = _.clone(e), new Cr(t.ctx).clear({ isUpdating: !0 });
      var a = t.create(t.w.config.series, e);
      if (!a) return i(t);
      t.mount(a).then(function() {
        typeof t.w.config.chart.events.updated == "function" && t.w.config.chart.events.updated(t, t.w), t.events.fireEvent("updated", [t, t.w]), t.w.globals.isDirty = !0, i(t);
      }).catch(function(r) {
        s(r);
      });
    });
  } }, { key: "getSyncedCharts", value: function() {
    var e = this.getGroupedCharts(), t = [this];
    return e.length && (t = [], e.forEach(function(i) {
      t.push(i);
    })), t;
  } }, { key: "getGroupedCharts", value: function() {
    var e = this;
    return Apex._chartInstances.filter(function(t) {
      if (t.group) return !0;
    }).map(function(t) {
      return e.w.config.chart.group === t.group ? t.chart : e;
    });
  } }, { key: "toggleSeries", value: function(e) {
    return this.series.toggleSeries(e);
  } }, { key: "highlightSeriesOnLegendHover", value: function(e, t) {
    return this.series.toggleSeriesOnHover(e, t);
  } }, { key: "showSeries", value: function(e) {
    this.series.showSeries(e);
  } }, { key: "hideSeries", value: function(e) {
    this.series.hideSeries(e);
  } }, { key: "highlightSeries", value: function(e) {
    this.series.highlightSeries(e);
  } }, { key: "isSeriesHidden", value: function(e) {
    this.series.isSeriesHidden(e);
  } }, { key: "resetSeries", value: function() {
    var e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0], t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
    this.series.resetSeries(e, t);
  } }, { key: "addEventListener", value: function(e, t) {
    this.events.addEventListener(e, t);
  } }, { key: "removeEventListener", value: function(e, t) {
    this.events.removeEventListener(e, t);
  } }, { key: "addXaxisAnnotation", value: function(e) {
    var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, s = this;
    i && (s = i), s.annotations.addXaxisAnnotationExternal(e, t, s);
  } }, { key: "addYaxisAnnotation", value: function(e) {
    var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, s = this;
    i && (s = i), s.annotations.addYaxisAnnotationExternal(e, t, s);
  } }, { key: "addPointAnnotation", value: function(e) {
    var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, s = this;
    i && (s = i), s.annotations.addPointAnnotationExternal(e, t, s);
  } }, { key: "clearAnnotations", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0, t = this;
    e && (t = e), t.annotations.clearAnnotations(t);
  } }, { key: "removeAnnotation", value: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, i = this;
    t && (i = t), i.annotations.removeAnnotation(i, e);
  } }, { key: "getChartArea", value: function() {
    return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner");
  } }, { key: "getSeriesTotalXRange", value: function(e, t) {
    return this.coreUtils.getSeriesTotalsXRange(e, t);
  } }, { key: "getHighestValueInSeries", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    return new qs(this.ctx).getMinYMaxY(e).highestY;
  } }, { key: "getLowestValueInSeries", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    return new qs(this.ctx).getMinYMaxY(e).lowestY;
  } }, { key: "getSeriesTotal", value: function() {
    return this.w.globals.seriesTotals;
  } }, { key: "toggleDataPointSelection", value: function(e, t) {
    return this.updateHelpers.toggleDataPointSelection(e, t);
  } }, { key: "zoomX", value: function(e, t) {
    this.ctx.toolbar.zoomUpdateOptions(e, t);
  } }, { key: "setLocale", value: function(e) {
    this.localization.setCurrentLocaleValues(e);
  } }, { key: "dataURI", value: function(e) {
    return new oi(this.ctx).dataURI(e);
  } }, { key: "getSvgString", value: function(e) {
    return new oi(this.ctx).getSvgString(e);
  } }, { key: "exportToCSV", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return new oi(this.ctx).exportToCSV(e);
  } }, { key: "paper", value: function() {
    return this.w.globals.dom.Paper;
  } }, { key: "_parentResizeCallback", value: function() {
    this.w.globals.animationEnded && this.w.config.chart.redrawOnParentResize && this._windowResize();
  } }, { key: "_windowResize", value: function() {
    var e = this;
    clearTimeout(this.w.globals.resizeTimer), this.w.globals.resizeTimer = window.setTimeout(function() {
      e.w.globals.resized = !0, e.w.globals.dataChanged = !1, e.ctx.update();
    }, 150);
  } }, { key: "_windowResizeHandler", value: function() {
    var e = this.w.config.chart.redrawOnWindowResize;
    typeof e == "function" && (e = e()), e && this._windowResize();
  } }], [{ key: "getChartByID", value: function(e) {
    var t = _.escapeString(e);
    if (Apex._chartInstances) {
      var i = Apex._chartInstances.filter(function(s) {
        return s.id === t;
      })[0];
      return i && i.chart;
    }
  } }, { key: "initOnLoad", value: function() {
    for (var e = document.querySelectorAll("[data-apexcharts]"), t = 0; t < e.length; t++)
      new n(e[t], JSON.parse(e[t].getAttribute("data-options"))).render();
  } }, { key: "exec", value: function(e, t) {
    var i = this.getChartByID(e);
    if (i) {
      i.w.globals.isExecCalled = !0;
      var s = null;
      if (i.publicMethods.indexOf(t) !== -1) {
        for (var a = arguments.length, r = new Array(a > 2 ? a - 2 : 0), o = 2; o < a; o++) r[o - 2] = arguments[o];
        s = i[t].apply(i, r);
      }
      return s;
    }
  } }, { key: "merge", value: function(e, t) {
    return _.extend(e, t);
  } }]), n;
}();
const Hh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fh
}, Symbol.toStringTag, { value: "Module" })), Xh = /* @__PURE__ */ Do(Hh);
var ta = { exports: {} }, Li = { exports: {} }, ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mr;
function jh() {
  if (Mr) return ye;
  Mr = 1;
  var n = typeof Symbol == "function" && Symbol.for, e = n ? Symbol.for("react.element") : 60103, t = n ? Symbol.for("react.portal") : 60106, i = n ? Symbol.for("react.fragment") : 60107, s = n ? Symbol.for("react.strict_mode") : 60108, a = n ? Symbol.for("react.profiler") : 60114, r = n ? Symbol.for("react.provider") : 60109, o = n ? Symbol.for("react.context") : 60110, l = n ? Symbol.for("react.async_mode") : 60111, c = n ? Symbol.for("react.concurrent_mode") : 60111, h = n ? Symbol.for("react.forward_ref") : 60112, d = n ? Symbol.for("react.suspense") : 60113, u = n ? Symbol.for("react.suspense_list") : 60120, g = n ? Symbol.for("react.memo") : 60115, p = n ? Symbol.for("react.lazy") : 60116, f = n ? Symbol.for("react.block") : 60121, x = n ? Symbol.for("react.fundamental") : 60117, m = n ? Symbol.for("react.responder") : 60118, b = n ? Symbol.for("react.scope") : 60119;
  function w(v) {
    if (typeof v == "object" && v !== null) {
      var k = v.$$typeof;
      switch (k) {
        case e:
          switch (v = v.type, v) {
            case l:
            case c:
            case i:
            case a:
            case s:
            case d:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case o:
                case h:
                case p:
                case g:
                case r:
                  return v;
                default:
                  return k;
              }
          }
        case t:
          return k;
      }
    }
  }
  function y(v) {
    return w(v) === c;
  }
  return ye.AsyncMode = l, ye.ConcurrentMode = c, ye.ContextConsumer = o, ye.ContextProvider = r, ye.Element = e, ye.ForwardRef = h, ye.Fragment = i, ye.Lazy = p, ye.Memo = g, ye.Portal = t, ye.Profiler = a, ye.StrictMode = s, ye.Suspense = d, ye.isAsyncMode = function(v) {
    return y(v) || w(v) === l;
  }, ye.isConcurrentMode = y, ye.isContextConsumer = function(v) {
    return w(v) === o;
  }, ye.isContextProvider = function(v) {
    return w(v) === r;
  }, ye.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, ye.isForwardRef = function(v) {
    return w(v) === h;
  }, ye.isFragment = function(v) {
    return w(v) === i;
  }, ye.isLazy = function(v) {
    return w(v) === p;
  }, ye.isMemo = function(v) {
    return w(v) === g;
  }, ye.isPortal = function(v) {
    return w(v) === t;
  }, ye.isProfiler = function(v) {
    return w(v) === a;
  }, ye.isStrictMode = function(v) {
    return w(v) === s;
  }, ye.isSuspense = function(v) {
    return w(v) === d;
  }, ye.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === i || v === c || v === a || v === s || v === d || v === u || typeof v == "object" && v !== null && (v.$$typeof === p || v.$$typeof === g || v.$$typeof === r || v.$$typeof === o || v.$$typeof === h || v.$$typeof === x || v.$$typeof === m || v.$$typeof === b || v.$$typeof === f);
  }, ye.typeOf = w, ye;
}
var we = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lr;
function Wh() {
  return Lr || (Lr = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, e = n ? Symbol.for("react.element") : 60103, t = n ? Symbol.for("react.portal") : 60106, i = n ? Symbol.for("react.fragment") : 60107, s = n ? Symbol.for("react.strict_mode") : 60108, a = n ? Symbol.for("react.profiler") : 60114, r = n ? Symbol.for("react.provider") : 60109, o = n ? Symbol.for("react.context") : 60110, l = n ? Symbol.for("react.async_mode") : 60111, c = n ? Symbol.for("react.concurrent_mode") : 60111, h = n ? Symbol.for("react.forward_ref") : 60112, d = n ? Symbol.for("react.suspense") : 60113, u = n ? Symbol.for("react.suspense_list") : 60120, g = n ? Symbol.for("react.memo") : 60115, p = n ? Symbol.for("react.lazy") : 60116, f = n ? Symbol.for("react.block") : 60121, x = n ? Symbol.for("react.fundamental") : 60117, m = n ? Symbol.for("react.responder") : 60118, b = n ? Symbol.for("react.scope") : 60119;
    function w(B) {
      return typeof B == "string" || typeof B == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      B === i || B === c || B === a || B === s || B === d || B === u || typeof B == "object" && B !== null && (B.$$typeof === p || B.$$typeof === g || B.$$typeof === r || B.$$typeof === o || B.$$typeof === h || B.$$typeof === x || B.$$typeof === m || B.$$typeof === b || B.$$typeof === f);
    }
    function y(B) {
      if (typeof B == "object" && B !== null) {
        var ue = B.$$typeof;
        switch (ue) {
          case e:
            var Ee = B.type;
            switch (Ee) {
              case l:
              case c:
              case i:
              case a:
              case s:
              case d:
                return Ee;
              default:
                var De = Ee && Ee.$$typeof;
                switch (De) {
                  case o:
                  case h:
                  case p:
                  case g:
                  case r:
                    return De;
                  default:
                    return ue;
                }
            }
          case t:
            return ue;
        }
      }
    }
    var v = l, k = c, A = o, S = r, C = e, L = h, P = i, R = p, I = g, T = t, O = a, N = s, D = d, Y = !1;
    function X(B) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(B) || y(B) === l;
    }
    function z(B) {
      return y(B) === c;
    }
    function F(B) {
      return y(B) === o;
    }
    function $(B) {
      return y(B) === r;
    }
    function Z(B) {
      return typeof B == "object" && B !== null && B.$$typeof === e;
    }
    function H(B) {
      return y(B) === h;
    }
    function J(B) {
      return y(B) === i;
    }
    function G(B) {
      return y(B) === p;
    }
    function V(B) {
      return y(B) === g;
    }
    function K(B) {
      return y(B) === t;
    }
    function se(B) {
      return y(B) === a;
    }
    function Q(B) {
      return y(B) === s;
    }
    function re(B) {
      return y(B) === d;
    }
    we.AsyncMode = v, we.ConcurrentMode = k, we.ContextConsumer = A, we.ContextProvider = S, we.Element = C, we.ForwardRef = L, we.Fragment = P, we.Lazy = R, we.Memo = I, we.Portal = T, we.Profiler = O, we.StrictMode = N, we.Suspense = D, we.isAsyncMode = X, we.isConcurrentMode = z, we.isContextConsumer = F, we.isContextProvider = $, we.isElement = Z, we.isForwardRef = H, we.isFragment = J, we.isLazy = G, we.isMemo = V, we.isPortal = K, we.isProfiler = se, we.isStrictMode = Q, we.isSuspense = re, we.isValidElementType = w, we.typeOf = y;
  }()), we;
}
var Pr;
function to() {
  return Pr || (Pr = 1, process.env.NODE_ENV === "production" ? Li.exports = jh() : Li.exports = Wh()), Li.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ys, Tr;
function Bh() {
  if (Tr) return ys;
  Tr = 1;
  var n = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function i(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var r = {}, o = 0; o < 10; o++)
        r["_" + String.fromCharCode(o)] = o;
      var l = Object.getOwnPropertyNames(r).map(function(h) {
        return r[h];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        c[h] = h;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ys = s() ? Object.assign : function(a, r) {
    for (var o, l = i(a), c, h = 1; h < arguments.length; h++) {
      o = Object(arguments[h]);
      for (var d in o)
        e.call(o, d) && (l[d] = o[d]);
      if (n) {
        c = n(o);
        for (var u = 0; u < c.length; u++)
          t.call(o, c[u]) && (l[c[u]] = o[c[u]]);
      }
    }
    return l;
  }, ys;
}
var ws, Ir;
function Ca() {
  if (Ir) return ws;
  Ir = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ws = n, ws;
}
var ks, Er;
function io() {
  return Er || (Er = 1, ks = Function.call.bind(Object.prototype.hasOwnProperty)), ks;
}
var As, Rr;
function Gh() {
  if (Rr) return As;
  Rr = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = Ca(), t = {}, i = io();
    n = function(a) {
      var r = "Warning: " + a;
      typeof console < "u" && console.error(r);
      try {
        throw new Error(r);
      } catch {
      }
    };
  }
  function s(a, r, o, l, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in a)
        if (i(a, h)) {
          var d;
          try {
            if (typeof a[h] != "function") {
              var u = Error(
                (l || "React class") + ": " + o + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw u.name = "Invariant Violation", u;
            }
            d = a[h](r, h, l, o, null, e);
          } catch (p) {
            d = p;
          }
          if (d && !(d instanceof Error) && n(
            (l || "React class") + ": type specification of " + o + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in t)) {
            t[d.message] = !0;
            var g = c ? c() : "";
            n(
              "Failed " + o + " type: " + d.message + (g ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, As = s, As;
}
var Ss, Or;
function Vh() {
  if (Or) return Ss;
  Or = 1;
  var n = to(), e = Bh(), t = Ca(), i = io(), s = Gh(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(o) {
    var l = "Warning: " + o;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function r() {
    return null;
  }
  return Ss = function(o, l) {
    var c = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function d(z) {
      var F = z && (c && z[c] || z[h]);
      if (typeof F == "function")
        return F;
    }
    var u = "<<anonymous>>", g = {
      array: m("array"),
      bigint: m("bigint"),
      bool: m("boolean"),
      func: m("function"),
      number: m("number"),
      object: m("object"),
      string: m("string"),
      symbol: m("symbol"),
      any: b(),
      arrayOf: w,
      element: y(),
      elementType: v(),
      instanceOf: k,
      node: L(),
      objectOf: S,
      oneOf: A,
      oneOfType: C,
      shape: R,
      exact: I
    };
    function p(z, F) {
      return z === F ? z !== 0 || 1 / z === 1 / F : z !== z && F !== F;
    }
    function f(z, F) {
      this.message = z, this.data = F && typeof F == "object" ? F : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function x(z) {
      if (process.env.NODE_ENV !== "production")
        var F = {}, $ = 0;
      function Z(J, G, V, K, se, Q, re) {
        if (K = K || u, Q = Q || V, re !== t) {
          if (l) {
            var B = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw B.name = "Invariant Violation", B;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ue = K + ":" + V;
            !F[ue] && // Avoid spamming the console because they are often not actionable except for lib authors
            $ < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + Q + "` prop on `" + K + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), F[ue] = !0, $++);
          }
        }
        return G[V] == null ? J ? G[V] === null ? new f("The " + se + " `" + Q + "` is marked as required " + ("in `" + K + "`, but its value is `null`.")) : new f("The " + se + " `" + Q + "` is marked as required in " + ("`" + K + "`, but its value is `undefined`.")) : null : z(G, V, K, se, Q);
      }
      var H = Z.bind(null, !1);
      return H.isRequired = Z.bind(null, !0), H;
    }
    function m(z) {
      function F($, Z, H, J, G, V) {
        var K = $[Z], se = N(K);
        if (se !== z) {
          var Q = D(K);
          return new f(
            "Invalid " + J + " `" + G + "` of type " + ("`" + Q + "` supplied to `" + H + "`, expected ") + ("`" + z + "`."),
            { expectedType: z }
          );
        }
        return null;
      }
      return x(F);
    }
    function b() {
      return x(r);
    }
    function w(z) {
      function F($, Z, H, J, G) {
        if (typeof z != "function")
          return new f("Property `" + G + "` of component `" + H + "` has invalid PropType notation inside arrayOf.");
        var V = $[Z];
        if (!Array.isArray(V)) {
          var K = N(V);
          return new f("Invalid " + J + " `" + G + "` of type " + ("`" + K + "` supplied to `" + H + "`, expected an array."));
        }
        for (var se = 0; se < V.length; se++) {
          var Q = z(V, se, H, J, G + "[" + se + "]", t);
          if (Q instanceof Error)
            return Q;
        }
        return null;
      }
      return x(F);
    }
    function y() {
      function z(F, $, Z, H, J) {
        var G = F[$];
        if (!o(G)) {
          var V = N(G);
          return new f("Invalid " + H + " `" + J + "` of type " + ("`" + V + "` supplied to `" + Z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(z);
    }
    function v() {
      function z(F, $, Z, H, J) {
        var G = F[$];
        if (!n.isValidElementType(G)) {
          var V = N(G);
          return new f("Invalid " + H + " `" + J + "` of type " + ("`" + V + "` supplied to `" + Z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(z);
    }
    function k(z) {
      function F($, Z, H, J, G) {
        if (!($[Z] instanceof z)) {
          var V = z.name || u, K = X($[Z]);
          return new f("Invalid " + J + " `" + G + "` of type " + ("`" + K + "` supplied to `" + H + "`, expected ") + ("instance of `" + V + "`."));
        }
        return null;
      }
      return x(F);
    }
    function A(z) {
      if (!Array.isArray(z))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), r;
      function F($, Z, H, J, G) {
        for (var V = $[Z], K = 0; K < z.length; K++)
          if (p(V, z[K]))
            return null;
        var se = JSON.stringify(z, function(re, B) {
          var ue = D(B);
          return ue === "symbol" ? String(B) : B;
        });
        return new f("Invalid " + J + " `" + G + "` of value `" + String(V) + "` " + ("supplied to `" + H + "`, expected one of " + se + "."));
      }
      return x(F);
    }
    function S(z) {
      function F($, Z, H, J, G) {
        if (typeof z != "function")
          return new f("Property `" + G + "` of component `" + H + "` has invalid PropType notation inside objectOf.");
        var V = $[Z], K = N(V);
        if (K !== "object")
          return new f("Invalid " + J + " `" + G + "` of type " + ("`" + K + "` supplied to `" + H + "`, expected an object."));
        for (var se in V)
          if (i(V, se)) {
            var Q = z(V, se, H, J, G + "." + se, t);
            if (Q instanceof Error)
              return Q;
          }
        return null;
      }
      return x(F);
    }
    function C(z) {
      if (!Array.isArray(z))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), r;
      for (var F = 0; F < z.length; F++) {
        var $ = z[F];
        if (typeof $ != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Y($) + " at index " + F + "."
          ), r;
      }
      function Z(H, J, G, V, K) {
        for (var se = [], Q = 0; Q < z.length; Q++) {
          var re = z[Q], B = re(H, J, G, V, K, t);
          if (B == null)
            return null;
          B.data && i(B.data, "expectedType") && se.push(B.data.expectedType);
        }
        var ue = se.length > 0 ? ", expected one of type [" + se.join(", ") + "]" : "";
        return new f("Invalid " + V + " `" + K + "` supplied to " + ("`" + G + "`" + ue + "."));
      }
      return x(Z);
    }
    function L() {
      function z(F, $, Z, H, J) {
        return T(F[$]) ? null : new f("Invalid " + H + " `" + J + "` supplied to " + ("`" + Z + "`, expected a ReactNode."));
      }
      return x(z);
    }
    function P(z, F, $, Z, H) {
      return new f(
        (z || "React class") + ": " + F + " type `" + $ + "." + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + H + "`."
      );
    }
    function R(z) {
      function F($, Z, H, J, G) {
        var V = $[Z], K = N(V);
        if (K !== "object")
          return new f("Invalid " + J + " `" + G + "` of type `" + K + "` " + ("supplied to `" + H + "`, expected `object`."));
        for (var se in z) {
          var Q = z[se];
          if (typeof Q != "function")
            return P(H, J, G, se, D(Q));
          var re = Q(V, se, H, J, G + "." + se, t);
          if (re)
            return re;
        }
        return null;
      }
      return x(F);
    }
    function I(z) {
      function F($, Z, H, J, G) {
        var V = $[Z], K = N(V);
        if (K !== "object")
          return new f("Invalid " + J + " `" + G + "` of type `" + K + "` " + ("supplied to `" + H + "`, expected `object`."));
        var se = e({}, $[Z], z);
        for (var Q in se) {
          var re = z[Q];
          if (i(z, Q) && typeof re != "function")
            return P(H, J, G, Q, D(re));
          if (!re)
            return new f(
              "Invalid " + J + " `" + G + "` key `" + Q + "` supplied to `" + H + "`.\nBad object: " + JSON.stringify($[Z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(z), null, "  ")
            );
          var B = re(V, Q, H, J, G + "." + Q, t);
          if (B)
            return B;
        }
        return null;
      }
      return x(F);
    }
    function T(z) {
      switch (typeof z) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !z;
        case "object":
          if (Array.isArray(z))
            return z.every(T);
          if (z === null || o(z))
            return !0;
          var F = d(z);
          if (F) {
            var $ = F.call(z), Z;
            if (F !== z.entries) {
              for (; !(Z = $.next()).done; )
                if (!T(Z.value))
                  return !1;
            } else
              for (; !(Z = $.next()).done; ) {
                var H = Z.value;
                if (H && !T(H[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function O(z, F) {
      return z === "symbol" ? !0 : F ? F["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && F instanceof Symbol : !1;
    }
    function N(z) {
      var F = typeof z;
      return Array.isArray(z) ? "array" : z instanceof RegExp ? "object" : O(F, z) ? "symbol" : F;
    }
    function D(z) {
      if (typeof z > "u" || z === null)
        return "" + z;
      var F = N(z);
      if (F === "object") {
        if (z instanceof Date)
          return "date";
        if (z instanceof RegExp)
          return "regexp";
      }
      return F;
    }
    function Y(z) {
      var F = D(z);
      switch (F) {
        case "array":
        case "object":
          return "an " + F;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + F;
        default:
          return F;
      }
    }
    function X(z) {
      return !z.constructor || !z.constructor.name ? u : z.constructor.name;
    }
    return g.checkPropTypes = s, g.resetWarningCache = s.resetWarningCache, g.PropTypes = g, g;
  }, Ss;
}
var Cs, zr;
function $h() {
  if (zr) return Cs;
  zr = 1;
  var n = Ca();
  function e() {
  }
  function t() {
  }
  return t.resetWarningCache = e, Cs = function() {
    function i(r, o, l, c, h, d) {
      if (d !== n) {
        var u = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw u.name = "Invariant Violation", u;
      }
    }
    i.isRequired = i;
    function s() {
      return i;
    }
    var a = {
      array: i,
      bigint: i,
      bool: i,
      func: i,
      number: i,
      object: i,
      string: i,
      symbol: i,
      any: i,
      arrayOf: s,
      element: i,
      elementType: i,
      instanceOf: s,
      node: i,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: t,
      resetWarningCache: e
    };
    return a.PropTypes = a, a;
  }, Cs;
}
if (process.env.NODE_ENV !== "production") {
  var Uh = to(), qh = !0;
  ta.exports = Vh()(Uh.isElement, qh);
} else
  ta.exports = $h()();
var Zh = ta.exports;
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.default = w;
  var e = o(Xe), t = a(Xh), i = a(Zh), s = ["type", "width", "height", "series", "options"];
  function a(y) {
    return y && y.__esModule ? y : { default: y };
  }
  function r(y) {
    var v, k;
    return typeof WeakMap != "function" ? null : (v = /* @__PURE__ */ new WeakMap(), k = /* @__PURE__ */ new WeakMap(), (r = function(A) {
      return A ? k : v;
    })(y));
  }
  function o(y, v) {
    if (!v && y && y.__esModule) return y;
    if (y === null || d(y) != "object" && typeof y != "function") return { default: y };
    if (v = r(v), v && v.has(y)) return v.get(y);
    var k, A, S = { __proto__: null }, C = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (k in y) k !== "default" && {}.hasOwnProperty.call(y, k) && ((A = C ? Object.getOwnPropertyDescriptor(y, k) : null) && (A.get || A.set) ? Object.defineProperty(S, k, A) : S[k] = y[k]);
    return S.default = y, v && v.set(y, S), S;
  }
  function l() {
    return (l = Object.assign ? Object.assign.bind() : function(y) {
      for (var v = 1; v < arguments.length; v++) {
        var k, A = arguments[v];
        for (k in A) !{}.hasOwnProperty.call(A, k) || (y[k] = A[k]);
      }
      return y;
    }).apply(null, arguments);
  }
  function c(y, v) {
    if (y == null) return {};
    var k, A = h(y, v);
    if (Object.getOwnPropertySymbols) for (var S = Object.getOwnPropertySymbols(y), C = 0; C < S.length; C++) k = S[C], v.includes(k) || {}.propertyIsEnumerable.call(y, k) && (A[k] = y[k]);
    return A;
  }
  function h(y, v) {
    if (y == null) return {};
    var k, A = {};
    for (k in y) if ({}.hasOwnProperty.call(y, k)) {
      if (v.includes(k)) continue;
      A[k] = y[k];
    }
    return A;
  }
  function d(y) {
    return (d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(v) {
      return typeof v;
    } : function(v) {
      return v && typeof Symbol == "function" && v.constructor === Symbol && v !== Symbol.prototype ? "symbol" : typeof v;
    })(y);
  }
  function u(y, v) {
    var k, A = Object.keys(y);
    return Object.getOwnPropertySymbols && (k = Object.getOwnPropertySymbols(y), v && (k = k.filter(function(S) {
      return Object.getOwnPropertyDescriptor(y, S).enumerable;
    })), A.push.apply(A, k)), A;
  }
  function g(y) {
    for (var v = 1; v < arguments.length; v++) {
      var k = arguments[v] != null ? arguments[v] : {};
      v % 2 ? u(Object(k), !0).forEach(function(A) {
        p(y, A, k[A]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(k)) : u(Object(k)).forEach(function(A) {
        Object.defineProperty(y, A, Object.getOwnPropertyDescriptor(k, A));
      });
    }
    return y;
  }
  function p(y, v, k) {
    return (v = f(v)) in y ? Object.defineProperty(y, v, { value: k, enumerable: !0, configurable: !0, writable: !0 }) : y[v] = k, y;
  }
  function f(y) {
    return y = x(y, "string"), d(y) == "symbol" ? y : y + "";
  }
  function x(y, v) {
    if (d(y) != "object" || !y) return y;
    var k = y[Symbol.toPrimitive];
    if (k === void 0) return (v === "string" ? String : Number)(y);
    if (k = k.call(y, v), d(k) != "object") return k;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  function m(y, v) {
    var k = g({}, y);
    return v.forEach(function(A) {
      delete k[A];
    }), k;
  }
  function b(y, v) {
    var k = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : /* @__PURE__ */ new WeakSet();
    if (y !== v) {
      if (d(y) !== "object" || y === null || d(v) !== "object" || v === null) return !1;
      if (!k.has(y) && !k.has(v)) {
        k.add(y), k.add(v);
        var A = Object.keys(y), S = Object.keys(v);
        if (A.length !== S.length) return !1;
        for (var C = 0, L = A; C < L.length; C++) {
          var P = L[C];
          if (!S.includes(P) || !b(y[P], v[P], k)) return !1;
        }
      }
    }
    return !0;
  }
  function w(D) {
    function v(Y) {
      return Y && d(Y) === "object" && !Array.isArray(Y);
    }
    var P = D.type, k = P === void 0 ? "line" : P, P = D.width, A = P === void 0 ? "100%" : P, P = D.height, S = P === void 0 ? "auto" : P, C = D.series, L = D.options, P = c(D, s), R = (0, e.useRef)(null), I = (0, e.useRef)(null), T = (0, e.useRef)(), O = ((0, e.useEffect)(function() {
      T.current = L;
      var Y = R.current;
      return I.current = new t.default(Y, O()), I.current.render(), function() {
        I.current && typeof I.current.destroy == "function" && I.current.destroy();
      };
    }, []), (0, e.useEffect)(function() {
      var Y = !b(I.current.w.config.series, C), X = !b(T.current, L) || S !== I.current.opts.chart.height || A !== I.current.opts.chart.width;
      (Y || X) && (!Y || X ? I.current.updateOptions(O()) : I.current.updateSeries(C)), T.current = L;
    }, [L, C, S, A]), function() {
      return N(L, { chart: { type: k, height: S, width: A }, series: C });
    }), N = function(Y, X) {
      var z = g({}, Y);
      return v(Y) && v(X) && Object.keys(X).forEach(function(F) {
        v(X[F]) && F in Y ? z[F] = N(Y[F], X[F]) : Object.assign(z, p({}, F, X[F]));
      }), z;
    }, D = m(P, Object.keys(w.propTypes));
    return e.default.createElement("div", l({ ref: R }, D));
  }
  w.propTypes = { type: i.default.string.isRequired, series: i.default.array.isRequired, options: i.default.object.isRequired, width: i.default.oneOfType([i.default.string, i.default.number]), height: i.default.oneOfType([i.default.string, i.default.number]) };
})(cn);
const Jh = /* @__PURE__ */ _r(cn), Nr = {
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
}, Id = ({
  type: n,
  series: e,
  width: t = "100%",
  height: i = 350,
  options: s = {},
  className: a
}) => {
  const r = {
    ...Nr,
    ...s,
    chart: {
      ...Nr.chart,
      ...s.chart,
      type: n
    }
  };
  return /* @__PURE__ */ M.jsx("div", { className: a, children: /* @__PURE__ */ M.jsx(
    Jh,
    {
      type: n,
      series: e,
      options: r,
      width: t,
      height: i
    }
  ) });
}, Ed = ({
  label: n,
  error: e,
  disabled: t = !1,
  indeterminate: i = !1,
  variantSize: s = "sm",
  variant: a = "square",
  color: r = "primary",
  className: o = "",
  ...l
}) => {
  const c = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }, h = {
    primary: "checked:bg-primary-600 checked:border-primary-600 hover:border-primary-600",
    secondary: "checked:bg-secondary-600 checked:border-secondary-600 hover:border-secondary-600",
    success: "checked:bg-success-600 checked:border-success-600 hover:border-success-600",
    warning: "checked:bg-warning-600 checked:border-warning-600 hover:border-warning-600",
    error: "checked:bg-danger-600 checked:border-danger-600 hover:border-danger-600"
  }, u = Pt(
    "border-2 transition-colors duration-200",
    "appearance-none cursor-pointer",
    "checked:bg-no-repeat checked:bg-center",
    a === "circle" ? 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=")]' : 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgM0w0LjUgOC41TDIgNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=")]',
    {
      square: "rounded",
      circle: "rounded-full"
    }[a],
    c[s],
    h[r],
    t && "opacity-50 cursor-not-allowed",
    o
  ), g = Pt(
    "ml-2 text-sm font-medium",
    t && "opacity-50 cursor-not-allowed",
    e && "text-danger-600"
  );
  return /* @__PURE__ */ M.jsxs("div", { className: "items-center", children: [
    /* @__PURE__ */ M.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ M.jsx(
        "input",
        {
          type: "checkbox",
          className: u,
          disabled: t,
          ref: (p) => {
            p && (p.indeterminate = i);
          },
          ...l
        }
      ),
      n && /* @__PURE__ */ M.jsx("label", { className: g, children: n })
    ] }),
    e && /* @__PURE__ */ M.jsx("p", { className: "mt-1 text-sm text-danger-600", children: e })
  ] });
}, Kh = {
  solid: {
    primary: "bg-primary-500 text-white",
    success: "bg-success-500 text-white",
    warning: "bg-warning-500 text-white",
    error: "bg-error-500 text-white",
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
}, Qh = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5"
}, Rd = ({
  children: n,
  variant: e = "solid",
  color: t = "primary",
  size: i = "md",
  onClose: s,
  className: a,
  icon: r
}) => /* @__PURE__ */ M.jsxs(
  "div",
  {
    className: ae(
      "inline-flex items-center gap-1.5 rounded-full font-medium",
      Kh[e][t],
      Qh[i],
      a
    ),
    children: [
      r && /* @__PURE__ */ M.jsx("span", { className: "inline-flex items-center", children: /* @__PURE__ */ M.jsx(Pe, { icon: r, className: "w-4 h-4" }) }),
      n,
      s && /* @__PURE__ */ M.jsx(
        "button",
        {
          onClick: s,
          className: "ml-1 rounded-full hover:bg-black/10 p-0.5",
          "aria-label": "Close",
          children: /* @__PURE__ */ M.jsx(Pe, { icon: "mdi:close", className: "w-3 h-3" })
        }
      )
    ]
  }
);
var so = { exports: {} };
(function(n, e) {
  (function(t, i) {
    n.exports = i();
  })(_o, function() {
    var t = 1e3, i = 6e4, s = 36e5, a = "millisecond", r = "second", o = "minute", l = "hour", c = "day", h = "week", d = "month", u = "quarter", g = "year", p = "date", f = "Invalid Date", x = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, b = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(T) {
      var O = ["th", "st", "nd", "rd"], N = T % 100;
      return "[" + T + (O[(N - 20) % 10] || O[N] || O[0]) + "]";
    } }, w = function(T, O, N) {
      var D = String(T);
      return !D || D.length >= O ? T : "" + Array(O + 1 - D.length).join(N) + T;
    }, y = { s: w, z: function(T) {
      var O = -T.utcOffset(), N = Math.abs(O), D = Math.floor(N / 60), Y = N % 60;
      return (O <= 0 ? "+" : "-") + w(D, 2, "0") + ":" + w(Y, 2, "0");
    }, m: function T(O, N) {
      if (O.date() < N.date()) return -T(N, O);
      var D = 12 * (N.year() - O.year()) + (N.month() - O.month()), Y = O.clone().add(D, d), X = N - Y < 0, z = O.clone().add(D + (X ? -1 : 1), d);
      return +(-(D + (N - Y) / (X ? Y - z : z - Y)) || 0);
    }, a: function(T) {
      return T < 0 ? Math.ceil(T) || 0 : Math.floor(T);
    }, p: function(T) {
      return { M: d, y: g, w: h, d: c, D: p, h: l, m: o, s: r, ms: a, Q: u }[T] || String(T || "").toLowerCase().replace(/s$/, "");
    }, u: function(T) {
      return T === void 0;
    } }, v = "en", k = {};
    k[v] = b;
    var A = "$isDayjsObject", S = function(T) {
      return T instanceof R || !(!T || !T[A]);
    }, C = function T(O, N, D) {
      var Y;
      if (!O) return v;
      if (typeof O == "string") {
        var X = O.toLowerCase();
        k[X] && (Y = X), N && (k[X] = N, Y = X);
        var z = O.split("-");
        if (!Y && z.length > 1) return T(z[0]);
      } else {
        var F = O.name;
        k[F] = O, Y = F;
      }
      return !D && Y && (v = Y), Y || !D && v;
    }, L = function(T, O) {
      if (S(T)) return T.clone();
      var N = typeof O == "object" ? O : {};
      return N.date = T, N.args = arguments, new R(N);
    }, P = y;
    P.l = C, P.i = S, P.w = function(T, O) {
      return L(T, { locale: O.$L, utc: O.$u, x: O.$x, $offset: O.$offset });
    };
    var R = function() {
      function T(N) {
        this.$L = C(N.locale, null, !0), this.parse(N), this.$x = this.$x || N.x || {}, this[A] = !0;
      }
      var O = T.prototype;
      return O.parse = function(N) {
        this.$d = function(D) {
          var Y = D.date, X = D.utc;
          if (Y === null) return /* @__PURE__ */ new Date(NaN);
          if (P.u(Y)) return /* @__PURE__ */ new Date();
          if (Y instanceof Date) return new Date(Y);
          if (typeof Y == "string" && !/Z$/i.test(Y)) {
            var z = Y.match(x);
            if (z) {
              var F = z[2] - 1 || 0, $ = (z[7] || "0").substring(0, 3);
              return X ? new Date(Date.UTC(z[1], F, z[3] || 1, z[4] || 0, z[5] || 0, z[6] || 0, $)) : new Date(z[1], F, z[3] || 1, z[4] || 0, z[5] || 0, z[6] || 0, $);
            }
          }
          return new Date(Y);
        }(N), this.init();
      }, O.init = function() {
        var N = this.$d;
        this.$y = N.getFullYear(), this.$M = N.getMonth(), this.$D = N.getDate(), this.$W = N.getDay(), this.$H = N.getHours(), this.$m = N.getMinutes(), this.$s = N.getSeconds(), this.$ms = N.getMilliseconds();
      }, O.$utils = function() {
        return P;
      }, O.isValid = function() {
        return this.$d.toString() !== f;
      }, O.isSame = function(N, D) {
        var Y = L(N);
        return this.startOf(D) <= Y && Y <= this.endOf(D);
      }, O.isAfter = function(N, D) {
        return L(N) < this.startOf(D);
      }, O.isBefore = function(N, D) {
        return this.endOf(D) < L(N);
      }, O.$g = function(N, D, Y) {
        return P.u(N) ? this[D] : this.set(Y, N);
      }, O.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, O.valueOf = function() {
        return this.$d.getTime();
      }, O.startOf = function(N, D) {
        var Y = this, X = !!P.u(D) || D, z = P.p(N), F = function(se, Q) {
          var re = P.w(Y.$u ? Date.UTC(Y.$y, Q, se) : new Date(Y.$y, Q, se), Y);
          return X ? re : re.endOf(c);
        }, $ = function(se, Q) {
          return P.w(Y.toDate()[se].apply(Y.toDate("s"), (X ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Q)), Y);
        }, Z = this.$W, H = this.$M, J = this.$D, G = "set" + (this.$u ? "UTC" : "");
        switch (z) {
          case g:
            return X ? F(1, 0) : F(31, 11);
          case d:
            return X ? F(1, H) : F(0, H + 1);
          case h:
            var V = this.$locale().weekStart || 0, K = (Z < V ? Z + 7 : Z) - V;
            return F(X ? J - K : J + (6 - K), H);
          case c:
          case p:
            return $(G + "Hours", 0);
          case l:
            return $(G + "Minutes", 1);
          case o:
            return $(G + "Seconds", 2);
          case r:
            return $(G + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, O.endOf = function(N) {
        return this.startOf(N, !1);
      }, O.$set = function(N, D) {
        var Y, X = P.p(N), z = "set" + (this.$u ? "UTC" : ""), F = (Y = {}, Y[c] = z + "Date", Y[p] = z + "Date", Y[d] = z + "Month", Y[g] = z + "FullYear", Y[l] = z + "Hours", Y[o] = z + "Minutes", Y[r] = z + "Seconds", Y[a] = z + "Milliseconds", Y)[X], $ = X === c ? this.$D + (D - this.$W) : D;
        if (X === d || X === g) {
          var Z = this.clone().set(p, 1);
          Z.$d[F]($), Z.init(), this.$d = Z.set(p, Math.min(this.$D, Z.daysInMonth())).$d;
        } else F && this.$d[F]($);
        return this.init(), this;
      }, O.set = function(N, D) {
        return this.clone().$set(N, D);
      }, O.get = function(N) {
        return this[P.p(N)]();
      }, O.add = function(N, D) {
        var Y, X = this;
        N = Number(N);
        var z = P.p(D), F = function(H) {
          var J = L(X);
          return P.w(J.date(J.date() + Math.round(H * N)), X);
        };
        if (z === d) return this.set(d, this.$M + N);
        if (z === g) return this.set(g, this.$y + N);
        if (z === c) return F(1);
        if (z === h) return F(7);
        var $ = (Y = {}, Y[o] = i, Y[l] = s, Y[r] = t, Y)[z] || 1, Z = this.$d.getTime() + N * $;
        return P.w(Z, this);
      }, O.subtract = function(N, D) {
        return this.add(-1 * N, D);
      }, O.format = function(N) {
        var D = this, Y = this.$locale();
        if (!this.isValid()) return Y.invalidDate || f;
        var X = N || "YYYY-MM-DDTHH:mm:ssZ", z = P.z(this), F = this.$H, $ = this.$m, Z = this.$M, H = Y.weekdays, J = Y.months, G = Y.meridiem, V = function(Q, re, B, ue) {
          return Q && (Q[re] || Q(D, X)) || B[re].slice(0, ue);
        }, K = function(Q) {
          return P.s(F % 12 || 12, Q, "0");
        }, se = G || function(Q, re, B) {
          var ue = Q < 12 ? "AM" : "PM";
          return B ? ue.toLowerCase() : ue;
        };
        return X.replace(m, function(Q, re) {
          return re || function(B) {
            switch (B) {
              case "YY":
                return String(D.$y).slice(-2);
              case "YYYY":
                return P.s(D.$y, 4, "0");
              case "M":
                return Z + 1;
              case "MM":
                return P.s(Z + 1, 2, "0");
              case "MMM":
                return V(Y.monthsShort, Z, J, 3);
              case "MMMM":
                return V(J, Z);
              case "D":
                return D.$D;
              case "DD":
                return P.s(D.$D, 2, "0");
              case "d":
                return String(D.$W);
              case "dd":
                return V(Y.weekdaysMin, D.$W, H, 2);
              case "ddd":
                return V(Y.weekdaysShort, D.$W, H, 3);
              case "dddd":
                return H[D.$W];
              case "H":
                return String(F);
              case "HH":
                return P.s(F, 2, "0");
              case "h":
                return K(1);
              case "hh":
                return K(2);
              case "a":
                return se(F, $, !0);
              case "A":
                return se(F, $, !1);
              case "m":
                return String($);
              case "mm":
                return P.s($, 2, "0");
              case "s":
                return String(D.$s);
              case "ss":
                return P.s(D.$s, 2, "0");
              case "SSS":
                return P.s(D.$ms, 3, "0");
              case "Z":
                return z;
            }
            return null;
          }(Q) || z.replace(":", "");
        });
      }, O.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, O.diff = function(N, D, Y) {
        var X, z = this, F = P.p(D), $ = L(N), Z = ($.utcOffset() - this.utcOffset()) * i, H = this - $, J = function() {
          return P.m(z, $);
        };
        switch (F) {
          case g:
            X = J() / 12;
            break;
          case d:
            X = J();
            break;
          case u:
            X = J() / 3;
            break;
          case h:
            X = (H - Z) / 6048e5;
            break;
          case c:
            X = (H - Z) / 864e5;
            break;
          case l:
            X = H / s;
            break;
          case o:
            X = H / i;
            break;
          case r:
            X = H / t;
            break;
          default:
            X = H;
        }
        return Y ? X : P.a(X);
      }, O.daysInMonth = function() {
        return this.endOf(d).$D;
      }, O.$locale = function() {
        return k[this.$L];
      }, O.locale = function(N, D) {
        if (!N) return this.$L;
        var Y = this.clone(), X = C(N, D, !0);
        return X && (Y.$L = X), Y;
      }, O.clone = function() {
        return P.w(this.$d, this);
      }, O.toDate = function() {
        return new Date(this.valueOf());
      }, O.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, O.toISOString = function() {
        return this.$d.toISOString();
      }, O.toString = function() {
        return this.$d.toUTCString();
      }, T;
    }(), I = R.prototype;
    return L.prototype = I, [["$ms", a], ["$s", r], ["$m", o], ["$H", l], ["$W", c], ["$M", d], ["$y", g], ["$D", p]].forEach(function(T) {
      I[T[1]] = function(O) {
        return this.$g(O, T[0], T[1]);
      };
    }), L.extend = function(T, O) {
      return T.$i || (T(O, R, L), T.$i = !0), L;
    }, L.locale = C, L.isDayjs = S, L.unix = function(T) {
      return L(1e3 * T);
    }, L.en = k[v], L.Ls = k, L.p = {}, L;
  });
})(so);
var ed = so.exports;
const qe = /* @__PURE__ */ _r(ed), td = lt(
  "rounded-md border bg-white px-3 py-2 ring-0 transition-colors placeholder:text-neutral-500 placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
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
), id = Ge(
  ({
    value: n,
    endDate: e,
    onChange: t,
    onEndDateChange: i,
    isRangeSelection: s = !1,
    minDate: a,
    maxDate: r,
    variant: o = "default",
    size: l = "md",
    disabled: c = !1,
    errorText: h,
    helperText: d,
    label: u,
    required: g = !1,
    labelPlacement: p = "top",
    fullWidth: f = !1,
    className: x,
    placeholder: m = "Select date",
    ...b
  }, w) => {
    const [y, v] = Ie(!1), [k, A] = Ie(n || null), [S, C] = Ie(e || null), [L, P] = Ie(n || /* @__PURE__ */ new Date()), R = Be(null), I = Be(null), T = Be(null), O = () => {
      if (!y || !I.current || !T.current) return;
      const { bottom: H, left: J, width: G } = I.current.getBoundingClientRect(), V = T.current;
      Object.assign(V.style, {
        position: "fixed",
        left: `${J}px`,
        top: `${H + 4}px`,
        width: `${G}px`,
        maxHeight: `${window.innerHeight - H - 8}px`
      });
    };
    ot(() => {
      const H = () => {
        y && O();
      }, J = () => {
        y && O();
      }, G = (V) => {
        const K = V.target;
        R.current && !R.current.contains(K) && T.current && !T.current.contains(K) && v(!1);
      };
      return y && (O(), window.addEventListener("scroll", H, !0), window.addEventListener("resize", J)), document.addEventListener("click", G), () => {
        window.removeEventListener("scroll", H, !0), window.removeEventListener("resize", J), document.removeEventListener("click", G);
      };
    }, [y]);
    const N = (H) => {
      s ? k ? (qe(H).isBefore(k) ? (C(k), A(H), t == null || t(H), i == null || i(k)) : (C(H), i == null || i(H)), v(!1)) : (A(H), t == null || t(H)) : (A(H), t == null || t(H), v(!1));
    }, D = () => {
      P(qe(L).subtract(1, "month").toDate());
    }, Y = () => {
      P(qe(L).add(1, "month").toDate());
    }, X = () => {
      const H = qe(L).startOf("month"), J = qe(L).endOf("month"), G = [];
      let V = H;
      for (; V.isBefore(J) || V.isSame(J, "day"); )
        G.push(V.toDate()), V = V.add(1, "day");
      return G;
    }, z = (H) => !!(a && qe(H).isBefore(a, "day") || r && qe(H).isAfter(r, "day")), F = X(), $ = qe(L).startOf("month").day(), Z = () => {
      if (!k) return "";
      const H = qe(k).format("DD MMM YYYY");
      return s && S ? `${H} - ${qe(S).format("DD MMM YYYY")}` : H;
    };
    return /* @__PURE__ */ M.jsxs("div", { ref: R, className: ae("relative", f && "w-full", x), children: [
      u && /* @__PURE__ */ M.jsxs(
        "label",
        {
          className: ae(
            "block text-sm font-medium text-gray-700 mb-1",
            p === "left" && "inline-block mr-2"
          ),
          children: [
            u,
            g && /* @__PURE__ */ M.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ M.jsx("div", { ref: I, children: /* @__PURE__ */ M.jsx(
        "input",
        {
          ref: w,
          type: "text",
          value: Z(),
          placeholder: m,
          onClick: () => !c && v(!y),
          readOnly: !0,
          className: ae(td({ variant: o, size: l, fullWidth: f })),
          disabled: c,
          ...b
        }
      ) }),
      y && Bt(
        /* @__PURE__ */ M.jsxs(
          "div",
          {
            ref: T,
            className: "fixed z-[9999] bg-white border border-gray-200 rounded-md shadow-lg",
            children: [
              /* @__PURE__ */ M.jsxs("div", { className: "flex items-center justify-between p-2 border-b border-gray-200", children: [
                /* @__PURE__ */ M.jsx(
                  "button",
                  {
                    onClick: D,
                    className: "p-1 rounded-full hover:bg-primary-50 active:bg-primary-100 transition-colors duration-200",
                    children: /* @__PURE__ */ M.jsx(
                      Pe,
                      {
                        icon: "mdi:chevron-left",
                        className: "w-5 h-5 text-neutral-600"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ M.jsx("span", { className: "font-medium text-gray-900", children: qe(L).format("MMMM YYYY") }),
                /* @__PURE__ */ M.jsx(
                  "button",
                  {
                    onClick: Y,
                    className: "p-1 rounded-full hover:bg-primary-50 active:bg-primary-100 transition-colors duration-200",
                    children: /* @__PURE__ */ M.jsx(
                      Pe,
                      {
                        icon: "mdi:chevron-right",
                        className: "w-5 h-5 text-neutral-600"
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ M.jsxs("div", { className: "grid grid-cols-7 gap-1 p-2", children: [
                ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((H) => /* @__PURE__ */ M.jsx(
                  "div",
                  {
                    className: "text-center text-sm font-medium text-gray-500",
                    children: H
                  },
                  H
                )),
                Array.from({ length: $ }).map((H, J) => /* @__PURE__ */ M.jsx("div", {}, `empty-${J}`)),
                F.map((H) => {
                  const J = k && qe(H).isSame(k, "day"), G = z(H), V = qe(H).isSame(L, "month");
                  return /* @__PURE__ */ M.jsx(
                    "button",
                    {
                      onClick: () => !G && N(H),
                      disabled: G,
                      className: ae(
                        "p-2 rounded-full text-sm transition-colors duration-200",
                        J && "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700",
                        !J && !G && "hover:bg-primary-50 active:bg-primary-100",
                        !V && "text-neutral-400",
                        G && "opacity-50 cursor-not-allowed"
                      ),
                      children: qe(H).format("D")
                    },
                    H.toString()
                  );
                })
              ] })
            ]
          }
        ),
        document.body
      ),
      h && /* @__PURE__ */ M.jsx("p", { className: "mt-1 text-sm text-red-500", children: h }),
      d && !h && /* @__PURE__ */ M.jsx("p", { className: "mt-1 text-sm text-gray-500", children: d })
    ] });
  }
);
id.displayName = "DatePicker";
const ao = Ge(
  ({ children: n, onClose: e, className: t, ...i }, s) => /* @__PURE__ */ M.jsxs(
    "div",
    {
      ref: s,
      className: ae("mb-4 flex items-center justify-between", t),
      ...i,
      children: [
        n,
        e && /* @__PURE__ */ M.jsx(
          "button",
          {
            onClick: e,
            className: "ml-4 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700",
            "aria-label": "Close dialog",
            children: /* @__PURE__ */ M.jsx(Pe, { icon: "mdi:close", className: "h-5 w-5" })
          }
        )
      ]
    }
  )
), sd = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-4xl",
  fullscreen: "w-full h-full max-w-none max-h-none rounded-none"
}, ad = Ge(
  ({
    isOpen: n,
    onClose: e,
    children: t,
    className: i,
    backdrop: s = "dark",
    header: a,
    closeOnBackdropClick: r = !0,
    size: o = "md",
    ...l
  }, c) => {
    const [h, d] = Ie(!1), [u, g] = Ie(!1);
    if (ot(() => {
      if (n)
        d(!0), g(!0), document.body.style.overflow = "hidden";
      else {
        g(!1);
        const x = setTimeout(() => {
          d(!1), document.body.style.overflow = "";
        }, 300);
        return () => clearTimeout(x);
      }
    }, [n]), ot(() => {
      const x = (m) => {
        m.key === "Escape" && e();
      };
      return n && document.addEventListener("keydown", x), () => {
        document.removeEventListener("keydown", x);
      };
    }, [n, e]), !h) return null;
    const p = {
      blur: "backdrop-blur-sm bg-black/30",
      dark: "bg-black/50",
      transparent: "bg-transparent"
    }, f = () => {
      r && e();
    };
    return Bt(
      /* @__PURE__ */ M.jsx(
        "div",
        {
          className: ae(
            "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300",
            p[s],
            u ? "opacity-100" : "opacity-0",
            o === "fullscreen" && "items-start"
          ),
          onClick: f,
          children: /* @__PURE__ */ M.jsxs(
            "div",
            {
              ref: c,
              className: ae(
                "relative transform rounded-lg bg-white p-6 shadow-xl transition-all duration-300",
                sd[o],
                u ? "scale-100 opacity-100" : "scale-95 opacity-0",
                i
              ),
              onClick: (x) => x.stopPropagation(),
              ...l,
              children: [
                a && /* @__PURE__ */ M.jsx(ao, { onClose: e, children: a }),
                t
              ]
            }
          )
        }
      ),
      document.body
    );
  }
), rd = Ge(
  ({ children: n, className: e, ...t }, i) => /* @__PURE__ */ M.jsx(
    "h2",
    {
      ref: i,
      className: ae("text-xl font-semibold text-gray-900", e),
      ...t,
      children: n
    }
  )
), nd = Ge(
  ({ children: n, className: e, ...t }, i) => /* @__PURE__ */ M.jsx(
    "div",
    {
      ref: i,
      className: ae("text-gray-600", e),
      ...t,
      children: n
    }
  )
), od = Ge(
  ({ children: n, className: e, ...t }, i) => /* @__PURE__ */ M.jsx(
    "div",
    {
      ref: i,
      className: ae("mt-6 flex justify-end gap-3", e),
      ...t,
      children: n
    }
  )
);
ad.displayName = "Dialog";
rd.displayName = "DialogTitle";
nd.displayName = "DialogBody";
od.displayName = "DialogActions";
ao.displayName = "DialogHeader";
const ld = ({
  orientation: n = "horizontal",
  variant: e = "solid",
  color: t = "neutral",
  size: i = "sm",
  className: s = ""
}) => {
  const a = {
    horizontal: "w-full border-t-0 border-l-0 border-r-0 border-b",
    vertical: "h-full border-l border-t-0 border-r-0 border-b-0"
  }, r = {
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted"
  }, o = {
    primary: "border-primary-300",
    secondary: "border-secondary-300",
    neutral: "border-neutral-300",
    success: "border-success-300",
    warning: "border-warning-300",
    error: "border-error-300"
  }, l = {
    sm: n === "horizontal" ? "border-b" : "border-l",
    md: n === "horizontal" ? "border-b-2" : "border-l-2",
    lg: n === "horizontal" ? "border-b-4" : "border-l-4"
  }, c = Pt(
    "inline-block",
    a[n],
    r[e],
    o[t],
    l[i],
    s
  );
  return /* @__PURE__ */ M.jsx("div", { className: c });
}, Od = ({
  accept: n = ["*"],
  maxSize: e = 5 * 1024 * 1024,
  // 5MB default
  multiple: t = !1,
  value: i = [],
  onChange: s,
  className: a,
  disabled: r = !1,
  placeholder: o = "Drag and drop files here or click to browse"
}) => {
  const [l, c] = Ie(!1), [h, d] = Ie(null), u = Be(null), g = ht((y) => {
    y.preventDefault(), r || c(!0);
  }, [r]), p = ht((y) => {
    y.preventDefault(), c(!1);
  }, []), f = ht((y) => y.size > e ? `File size exceeds ${e / (1024 * 1024)}MB limit` : n[0] !== "*" && !n.some((v) => v.startsWith(".") ? y.name.toLowerCase().endsWith(v.toLowerCase()) : y.type.startsWith(v)) ? `File type not allowed. Allowed types: ${n.join(", ")}` : null, [n, e]), x = ht((y) => {
    if (y.preventDefault(), c(!1), d(null), r) return;
    const v = Array.from(y.dataTransfer.files), k = [], A = [];
    if (v.forEach((S) => {
      const C = f(S);
      C ? A.push(`${S.name}: ${C}`) : k.push(S);
    }), A.length > 0 && d(A.join(`
`)), k.length > 0) {
      const S = t ? [...i, ...k] : k;
      s == null || s(S);
    }
  }, [r, t, s, f, i]), m = ht((y) => {
    if (d(null), r || !y.target.files) return;
    const v = Array.from(y.target.files), k = [], A = [];
    if (v.forEach((S) => {
      const C = f(S);
      C ? A.push(`${S.name}: ${C}`) : k.push(S);
    }), A.length > 0 && d(A.join(`
`)), k.length > 0) {
      const S = t ? [...i, ...k] : k;
      s == null || s(S);
    }
    u.current && (u.current.value = "");
  }, [r, t, s, f, i]), b = ht((y) => {
    const v = [...i];
    v.splice(y, 1), s == null || s(v);
  }, [s, i]), w = (y) => y.type.startsWith("image/") ? /* @__PURE__ */ M.jsx(Pe, { icon: "mdi:image", className: "w-5 h-5" }) : y.type.startsWith("text/") ? /* @__PURE__ */ M.jsx(Pe, { icon: "mdi:file-document", className: "w-5 h-5" }) : /* @__PURE__ */ M.jsx(Pe, { icon: "mdi:file", className: "w-5 h-5" });
  return /* @__PURE__ */ M.jsxs("div", { className: fe("w-full", a), children: [
    /* @__PURE__ */ M.jsxs(
      "div",
      {
        className: fe(
          "border-2 border-dashed rounded-lg p-6 text-center transition-colors",
          "bg-neutral-50",
          "border-neutral-300",
          l && "border-primary bg-primary-50",
          r && "opacity-50 cursor-not-allowed",
          !r && "cursor-pointer hover:border-primary/50"
        ),
        onDragOver: g,
        onDragLeave: p,
        onDrop: x,
        onClick: () => {
          var y;
          return !r && ((y = u.current) == null ? void 0 : y.click());
        },
        children: [
          /* @__PURE__ */ M.jsx(
            "input",
            {
              ref: u,
              type: "file",
              accept: n.join(","),
              multiple: t,
              onChange: m,
              className: "hidden",
              disabled: r
            }
          ),
          /* @__PURE__ */ M.jsx(Pe, { icon: "mdi:upload", className: "w-12 h-12 mx-auto mb-4 text-neutral-400" }),
          /* @__PURE__ */ M.jsx("p", { className: "text-neutral-600", children: o }),
          /* @__PURE__ */ M.jsxs("p", { className: "text-sm text-neutral-500 mt-2", children: [
            "Max file size: ",
            e / (1024 * 1024),
            "MB"
          ] })
        ]
      }
    ),
    h && /* @__PURE__ */ M.jsx("p", { className: "mt-2 text-sm text-danger", children: h }),
    i.length > 0 && /* @__PURE__ */ M.jsx("div", { className: "mt-4 space-y-2", children: i.map((y, v) => /* @__PURE__ */ M.jsxs(
      "div",
      {
        className: "flex items-center justify-between p-2 rounded-md bg-neutral-100",
        children: [
          /* @__PURE__ */ M.jsxs("div", { className: "flex items-center space-x-2", children: [
            w(y),
            /* @__PURE__ */ M.jsx("span", { className: "text-sm text-neutral-700", children: y.name }),
            /* @__PURE__ */ M.jsxs("span", { className: "text-xs text-neutral-500", children: [
              "(",
              (y.size / 1024).toFixed(1),
              " KB)"
            ] })
          ] }),
          !r && /* @__PURE__ */ M.jsx(
            "button",
            {
              onClick: () => b(v),
              className: "p-1 text-neutral-500 hover:text-danger",
              children: /* @__PURE__ */ M.jsx(Pe, { icon: "mdi:close", className: "w-4 h-4" })
            }
          )
        ]
      },
      `${y.name}-${v}`
    )) })
  ] });
}, ia = ({
  icon: n,
  className: e,
  size: t,
  color: i,
  rotate: s,
  flip: a,
  spin: r,
  ...o
}) => /* @__PURE__ */ M.jsx(
  Pe,
  {
    icon: n,
    className: ae(
      r && "animate-spin",
      e
    ),
    style: {
      color: i,
      transform: `rotate(${s || 0}deg)`
    },
    height: t,
    width: t,
    flip: a,
    ...o
  }
), zd = ({
  type: n = "info",
  title: e,
  message: t,
  icon: i,
  duration: s = 0,
  // 5000
  showClose: a = !0,
  className: r,
  onClose: o,
  actions: l = []
}) => {
  const [c, h] = Ie(!0);
  ot(() => {
    if (s > 0) {
      const p = setTimeout(() => {
        d();
      }, s);
      return () => clearTimeout(p);
    }
  }, [s]);
  const d = () => {
    h(!1), setTimeout(() => {
      o == null || o();
    }, 300);
  }, u = () => {
    if (i) return i;
    switch (n) {
      case "success":
        return "mdi:check-circle";
      case "warning":
        return "mdi:alert";
      case "error":
        return "mdi:close-circle";
      default:
        return "mdi:information";
    }
  }, g = () => {
    switch (n) {
      case "success":
        return "bg-green-50 border-green-200 text-green-800";
      case "warning":
        return "bg-yellow-50 border-yellow-200 text-yellow-800";
      case "error":
        return "bg-red-50 border-red-200 text-red-800";
      default:
        return "bg-blue-50 border-blue-200 text-blue-800";
    }
  };
  return c ? /* @__PURE__ */ M.jsx(
    "div",
    {
      className: fe(
        "relative p-4 rounded-lg border transition-all duration-300",
        "transform translate-y-0 opacity-100",
        g(),
        r
      ),
      children: /* @__PURE__ */ M.jsxs("div", { className: "flex items-start", children: [
        /* @__PURE__ */ M.jsx(
          Pe,
          {
            icon: u(),
            className: fe(
              "w-5 h-5 flex-shrink-0 mt-0.5",
              n === "success" && "text-green-500",
              n === "warning" && "text-yellow-500",
              n === "error" && "text-red-500",
              n === "info" && "text-blue-500"
            )
          }
        ),
        /* @__PURE__ */ M.jsxs("div", { className: "ml-3 flex-1", children: [
          e && /* @__PURE__ */ M.jsx("h3", { className: "text-sm font-medium mb-1", children: e }),
          /* @__PURE__ */ M.jsx("p", { className: "text-sm", children: t }),
          l.length > 0 && /* @__PURE__ */ M.jsx("div", { className: "mt-3 flex space-x-2", children: l.map((p, f) => /* @__PURE__ */ M.jsx(
            "button",
            {
              onClick: p.onClick,
              className: fe(
                "text-sm font-medium px-3 py-1 rounded-md transition-colors",
                n === "success" && "text-green-700 hover:bg-green-100",
                n === "warning" && "text-yellow-700 hover:bg-yellow-100",
                n === "error" && "text-red-700 hover:bg-red-100",
                n === "info" && "text-blue-700 hover:bg-blue-100",
                p.className
              ),
              children: p.label
            },
            f
          )) })
        ] }),
        a && /* @__PURE__ */ M.jsx(
          "button",
          {
            onClick: d,
            className: fe(
              "absolute top-4 right-4 p-1 rounded-full transition-colors",
              n === "success" && "hover:bg-green-100",
              n === "warning" && "hover:bg-yellow-100",
              n === "error" && "hover:bg-red-100",
              n === "info" && "hover:bg-blue-100"
            ),
            children: /* @__PURE__ */ M.jsx(
              Pe,
              {
                icon: "mdi:close",
                className: "w-4 h-4"
              }
            )
          }
        )
      ] })
    }
  ) : null;
}, Ms = "select-dropdown-opened", cd = lt(
  "rounded-md border bg-white px-3 py-2 text-sm ring-0 transition-colors placeholder:text-neutral-500 placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50",
        error: "border-danger-500 hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50",
        success: "border-success-500 hover:border-success-600 focus:border-success-600"
      },
      size: {
        sm: "h-8 px-2 py-1 text-sm",
        md: "h-10 px-3 py-2 text-base",
        lg: "h-12 px-4 py-3 text-lg"
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
), ro = Ge(
  ({
    className: n,
    variant: e = "default",
    size: t = "md",
    options: i,
    label: s,
    error: a = !1,
    helperText: r,
    required: o = !1,
    placeholder: l,
    value: c,
    onChange: h,
    disabled: d = !1,
    position: u = "bottom",
    fullWidth: g = !0,
    children: p,
    ...f
  }, x) => {
    const [m, b] = Ie(!1), w = Be(null), y = Be(null), k = `select-${Xe.useId().replace(/:/g, "")}`, A = () => {
      if (m && w.current && y.current) {
        const I = w.current.getBoundingClientRect(), T = y.current;
        u === "bottom" ? (T.style.position = "fixed", T.style.top = `${I.bottom + 4}px`, T.style.left = `${I.left}px`, T.style.width = `${I.width}px`, T.style.maxHeight = `${window.innerHeight - I.bottom - 8}px`) : u === "top" ? (T.style.position = "fixed", T.style.bottom = `${window.innerHeight - I.top + 4}px`, T.style.left = `${I.left}px`, T.style.width = `${I.width}px`, T.style.maxHeight = `${I.top - 8}px`) : u === "left" ? (T.style.position = "fixed", T.style.right = `${window.innerWidth - I.left + 4}px`, T.style.top = `${I.top}px`, T.style.maxHeight = `${window.innerHeight - I.top - 8}px`) : u === "right" && (T.style.position = "fixed", T.style.left = `${I.right + 4}px`, T.style.top = `${I.top}px`, T.style.maxHeight = `${window.innerHeight - I.top - 8}px`);
      }
    };
    ot(() => {
      const I = () => {
        m && A();
      }, T = () => {
        m && A();
      };
      return m && (A(), window.addEventListener("scroll", I, !0), window.addEventListener("resize", T)), () => {
        window.removeEventListener("scroll", I, !0), window.removeEventListener("resize", T);
      };
    }, [m, u]), ot(() => {
      const I = (O) => {
        O.detail.id !== k && b(!1);
      }, T = (O) => {
        const N = O.target, D = w.current, Y = y.current;
        D && Y && !D.contains(N) && !Y.contains(N) && b(!1);
      };
      return document.addEventListener(Ms, I), document.addEventListener("click", T), () => {
        document.removeEventListener(Ms, I), document.removeEventListener("click", T);
      };
    }, [k]);
    const S = () => {
      if (!d) {
        if (m) {
          b(!1);
          return;
        }
        document.dispatchEvent(
          new CustomEvent(Ms, {
            detail: { id: k }
          })
        ), b(!0);
      }
    }, C = () => {
      if (i) {
        const I = i.find((T) => T.value === c);
        return I == null ? void 0 : I.label;
      }
      if (p) {
        const T = Fa.toArray(p).find(
          (O) => Ji(O) && "value" in O.props && O.props.value === c
        );
        return Ji(T) ? T.props.children : null;
      }
      return null;
    }, L = (I) => {
      d || (console.log({ value: I }), h == null || h(I), b(!1));
    }, P = () => i ? i.map((I) => /* @__PURE__ */ M.jsx(
      Wi,
      {
        value: I.value,
        disabled: I.disabled,
        selected: I.value === c,
        onClick: () => L(I.value),
        children: /* @__PURE__ */ M.jsxs("div", { className: "flex items-center gap-2", children: [
          I.icon,
          I.label
        ] })
      },
      I.value
    )) : p ? Fa.map(p, (I) => Ji(I) && "value" in I.props ? Oo(I, {
      selected: I.props.value === c,
      onClick: () => L(I.props.value)
    }) : null) : null, R = () => {
      if (!m || d) return null;
      const I = /* @__PURE__ */ M.jsx(
        "div",
        {
          ref: y,
          className: ae(
            "fixed z-[9999] min-w-[8rem] rounded-md border border-neutral-200 bg-white py-1 shadow-lg",
            u === "left" || u === "right" ? "w-max" : "w-full"
          ),
          onClick: (T) => T.stopPropagation(),
          style: {
            overflowY: "auto"
          },
          children: P()
        }
      );
      return Bt(I, document.body);
    };
    return /* @__PURE__ */ M.jsxs("div", { className: ae(g ? "w-full" : "inline-block"), ref: x, ...f, children: [
      s && /* @__PURE__ */ M.jsxs(
        "label",
        {
          htmlFor: k,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            s,
            o && /* @__PURE__ */ M.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ M.jsxs("div", { className: ae("relative", !g && "inline-block"), children: [
        /* @__PURE__ */ M.jsxs(
          "button",
          {
            id: k,
            ref: w,
            type: "button",
            className: ae(
              cd({ variant: a ? "error" : e, size: t, fullWidth: g }),
              "flex items-center justify-between",
              d && "cursor-not-allowed opacity-50",
              n
            ),
            onClick: S,
            "aria-haspopup": "listbox",
            "aria-expanded": m,
            "aria-describedby": a ? `${k}-error` : r ? `${k}-helper` : void 0,
            disabled: d,
            children: [
              /* @__PURE__ */ M.jsx("span", { className: "flex items-center text-neutral-500 gap-2 min-w-0 flex-1", children: /* @__PURE__ */ M.jsx("span", { className: "truncate", children: C() || l }) }),
              /* @__PURE__ */ M.jsx(
                ia,
                {
                  icon: "mdi:chevron-down",
                  className: ae("transition-transform flex-shrink-0 ml-2", m && "rotate-180")
                }
              )
            ]
          }
        ),
        R()
      ] }),
      a && /* @__PURE__ */ M.jsx("p", { className: "mt-1 text-xs text-danger-500", id: `${k}-error`, children: a }),
      !a && r && /* @__PURE__ */ M.jsx("p", { className: "mt-1 text-xs text-neutral-500", id: `${k}-helper`, children: r })
    ] });
  }
);
ro.displayName = "Select";
const Nd = ({
  currentPage: n,
  totalPages: e,
  onPageChange: t,
  siblingCount: i = 1,
  className: s,
  perPageOptions: a,
  perPage: r,
  onPerPageChange: o
}) => {
  const l = (d, u) => {
    const g = u - d + 1;
    return Array.from({ length: g }, (p, f) => f + d);
  }, h = (() => {
    const d = i * 2 + 3, u = d + 2;
    if (e > u) {
      const g = Math.max(2, n - i), p = Math.min(e - 1, n + i);
      let f = l(g, p);
      const x = g > 2, m = e - p > 1, b = d - (f.length + 1);
      if (x && !m)
        f = [...l(g - b, g - 1), ...f];
      else if (!x && m) {
        const w = l(p + 1, p + b);
        f = [...f, ...w];
      } else x && m && (f = [...f]);
      return [1, ...f, e];
    }
    return l(1, e);
  })();
  return /* @__PURE__ */ M.jsxs("nav", { className: fe("flex items-center justify-center space-x-1", s), children: [
    a && a.length > 0 && /* @__PURE__ */ M.jsxs("div", { className: "flex items-center gap-2 mr-4", children: [
      /* @__PURE__ */ M.jsx("span", { className: "text-neutral-700 text-sm", children: "Menampilkan" }),
      /* @__PURE__ */ M.jsx(
        ro,
        {
          value: r == null ? void 0 : r.toString(),
          onChange: (d) => o && o(Number(d)),
          size: "sm",
          className: "w-16",
          fullWidth: !1,
          "aria-label": "Items per page",
          children: a.map((d) => /* @__PURE__ */ M.jsx(Wi, { value: d.toString(), children: d }, d))
        }
      ),
      /* @__PURE__ */ M.jsx("span", { className: "text-neutral-700 text-sm", children: "data per halaman" })
    ] }),
    /* @__PURE__ */ M.jsx(
      "button",
      {
        onClick: () => t(n - 1),
        disabled: n === 1,
        className: fe(
          "px-3 py-1 rounded-md text-sm",
          n === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
        ),
        children: "Previous"
      }
    ),
    h.map((d, u) => {
      const g = d === n, p = typeof d == "string" && d === "...";
      return /* @__PURE__ */ M.jsx(
        "button",
        {
          onClick: () => !p && t(d),
          className: fe(
            "px-3 py-1 rounded-md text-sm",
            g ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100",
            p && "cursor-default"
          ),
          children: d
        },
        u
      );
    }),
    /* @__PURE__ */ M.jsx(
      "button",
      {
        onClick: () => t(n + 1),
        disabled: n === e,
        className: fe(
          "px-3 py-1 rounded-md text-sm",
          n === e ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
        ),
        children: "Next"
      }
    )
  ] });
}, _d = ({
  label: n,
  checked: e = !1,
  disabled: t = !1,
  onChange: i,
  name: s,
  value: a
}) => {
  const r = (o) => {
    i && i(o.target.checked);
  };
  return /* @__PURE__ */ M.jsxs(
    "label",
    {
      className: fe(
        "inline-flex items-center cursor-pointer",
        t && "opacity-60 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ M.jsx(
          "input",
          {
            type: "radio",
            className: fe(
              "w-5 h-5 border-2 rounded-full appearance-none",
              "focus:outline-none focus:ring-2 focus:ring-primary/25",
              e ? "border-primary bg-primary" : "border-gray-300 hover:border-primary",
              t && "cursor-not-allowed"
            ),
            checked: e,
            disabled: t,
            onChange: r,
            name: s,
            value: a
          }
        ),
        n && /* @__PURE__ */ M.jsx("span", { className: "ml-2 text-sm text-gray-700 dark:text-gray-300", children: n })
      ]
    }
  );
}, Dd = ({
  className: n = "",
  variant: e = "text",
  animation: t = "pulse",
  height: i,
  width: s,
  color: a = "neutral"
}) => {
  const r = "bg-gray-200 dark:bg-gray-700", o = {
    text: "h-4 rounded",
    circular: "rounded-full",
    rectangular: "rounded"
  }, l = {
    pulse: "animate-pulse",
    wave: "animate-wave"
  }, c = {
    primary: "bg-blue-100 dark:bg-blue-900",
    secondary: "bg-gray-100 dark:bg-gray-700",
    success: "bg-green-100 dark:bg-green-900",
    warning: "bg-yellow-100 dark:bg-yellow-900",
    error: "bg-red-100 dark:bg-red-900",
    info: "bg-cyan-100 dark:bg-cyan-900",
    neutral: "bg-gray-200 dark:bg-gray-600"
  }, h = Pt(
    r,
    o[e],
    l[t],
    c[a],
    n
  ), d = {
    ...i && { height: i },
    ...s && { width: s }
  };
  return /* @__PURE__ */ M.jsx(
    "div",
    {
      className: h,
      style: d,
      role: "status",
      "aria-label": "Loading"
    }
  );
}, Yd = ({
  min: n = 0,
  max: e = 100,
  step: t = 1,
  value: i,
  defaultValue: s = n,
  onChange: a,
  className: r,
  disabled: o = !1,
  showValue: l = !1,
  marks: c = []
}) => {
  const [h, d] = Ie(s), [u, g] = Ie(!1), p = Be(null), f = i !== void 0 ? i : h, x = (k) => {
    if (o) return;
    const A = Math.min(Math.max(k, n), e);
    i === void 0 && d(A), a == null || a(A);
  }, m = (k) => {
    o || (g(!0), y(k));
  }, b = (k) => {
    !u || o || y(k);
  }, w = () => {
    g(!1);
  }, y = (k) => {
    if (!p.current) return;
    const A = p.current.getBoundingClientRect(), C = (k.clientX - A.left) / A.width, L = n + (e - n) * C, P = Math.round(L / t) * t;
    x(P);
  };
  ot(() => (u && (window.addEventListener("mousemove", b), window.addEventListener("mouseup", w)), () => {
    window.removeEventListener("mousemove", b), window.removeEventListener("mouseup", w);
  }), [u]);
  const v = (f - n) / (e - n) * 100;
  return /* @__PURE__ */ M.jsxs("div", { className: fe("relative w-full", r), children: [
    /* @__PURE__ */ M.jsxs(
      "div",
      {
        ref: p,
        className: fe(
          "relative h-2 bg-gray-200 rounded-full cursor-pointer",
          o && "opacity-50 cursor-not-allowed"
        ),
        onMouseDown: m,
        children: [
          /* @__PURE__ */ M.jsx(
            "div",
            {
              className: "absolute h-full bg-primary rounded-full",
              style: { width: `${v}%` }
            }
          ),
          /* @__PURE__ */ M.jsx(
            "div",
            {
              className: fe(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                o && "cursor-not-allowed"
              ),
              style: { left: `${v}%`, transform: "translate(-50%, -50%)" }
            }
          )
        ]
      }
    ),
    c.length > 0 && /* @__PURE__ */ M.jsx("div", { className: "flex justify-between mt-2", children: c.map((k) => /* @__PURE__ */ M.jsx(
      "div",
      {
        className: "text-xs text-gray-500",
        style: { left: `${(k.value - n) / (e - n) * 100}%` },
        children: k.label
      },
      k.value
    )) }),
    l && /* @__PURE__ */ M.jsx("div", { className: "mt-2 text-sm text-gray-600", children: f })
  ] });
}, hd = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8"
}, dd = {
  primary: "text-primary",
  warning: "text-warning-500",
  default: "text-default-400"
}, Fd = ({
  rating: n,
  maxRating: e = 5,
  size: t = "md",
  color: i = "primary",
  readOnly: s = !1,
  onRatingChange: a,
  className: r
}) => {
  const [o, l] = Ie(null), c = (g) => {
    s || l(g);
  }, h = () => {
    s || l(null);
  }, d = (g) => {
    !s && a && a(g);
  }, u = o !== null ? o : n;
  return /* @__PURE__ */ M.jsx("div", { className: ae("flex items-center gap-1", r), children: [...Array(e)].map((g, p) => {
    const f = p + 1, x = f <= u, m = o !== null && f <= o;
    return /* @__PURE__ */ M.jsx(
      "button",
      {
        className: ae(
          "transition-colors duration-200",
          hd[t],
          x || m ? dd[i] : "text-default-200",
          !s && "cursor-pointer"
        ),
        onMouseEnter: () => c(f),
        onMouseLeave: h,
        onClick: () => d(f),
        disabled: s,
        "aria-label": `Rate ${f} out of ${e}`,
        children: /* @__PURE__ */ M.jsx(
          Pe,
          {
            icon: x || m ? "mdi:star" : "mdi:star-outline",
            className: "w-full h-full"
          }
        )
      },
      p
    );
  }) });
}, ud = {
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
}, gd = {
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4"
}, Hd = ({
  status: n,
  size: e = "md",
  withLabel: t = !1,
  className: i
}) => {
  const { bgColor: s, label: a } = ud[n], r = gd[e];
  return /* @__PURE__ */ M.jsxs("div", { className: ae("flex items-center gap-2", i), children: [
    /* @__PURE__ */ M.jsx("div", { className: ae("rounded-full animate-pulse", s, r) }),
    t && /* @__PURE__ */ M.jsx("span", { className: "text-sm", children: a })
  ] });
}, no = (n, e) => {
  if (e) return e;
  switch (n) {
    case "completed":
      return "mdi:check";
    case "active":
      return "mdi:circle-medium";
    default:
      return "mdi:circle-outline";
  }
}, oo = (n) => {
  switch (n) {
    case "completed":
      return "text-white bg-primary-500 ring-4 ring-primary-50";
    case "active":
      return "text-primary-500 bg-primary-50 ring-4 ring-primary-50";
    default:
      return "text-neutral-400 bg-neutral-50 ring-4 ring-neutral-50";
  }
}, fd = ({
  steps: n,
  activeStep: e,
  className: t,
  variant: i = "default"
}) => /* @__PURE__ */ M.jsx("div", { className: ae("flex flex-row items-center w-full justify-between", t), children: n.map((s, a) => {
  const r = a < e ? "completed" : a === e ? "active" : "pending";
  return /* @__PURE__ */ M.jsxs(
    "div",
    {
      className: "flex items-center flex-1",
      children: [
        /* @__PURE__ */ M.jsxs("div", { className: ae(
          "flex flex-col items-center z-10",
          i === "default" ? "gap-4" : "gap-2",
          i === "default" ? "px-5" : "px-3"
        ), children: [
          i === "default" && /* @__PURE__ */ M.jsx(
            "div",
            {
              className: ae(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                oo(r)
              ),
              children: /* @__PURE__ */ M.jsx(
                Pe,
                {
                  icon: no(r, s.icon),
                  className: "h-5 w-5"
                }
              )
            }
          ),
          /* @__PURE__ */ M.jsxs("div", { className: "flex flex-col items-center text-center", children: [
            /* @__PURE__ */ M.jsx(
              "span",
              {
                className: ae(
                  "text-sm font-medium",
                  r === "active" ? "text-primary-500" : r === "completed" ? "text-neutral-900" : "text-neutral-500"
                ),
                children: s.label
              }
            ),
            s.description && /* @__PURE__ */ M.jsx("span", { className: "text-xs text-neutral-500", children: s.description })
          ] })
        ] }),
        a < n.length - 1 && /* @__PURE__ */ M.jsx(
          ld,
          {
            className: ae(
              "transition-all duration-200",
              a < e ? "bg-primary-500" : "bg-neutral-200"
            )
          }
        )
      ]
    },
    a
  );
}) }), pd = ({
  steps: n,
  activeStep: e,
  className: t,
  variant: i = "default"
}) => /* @__PURE__ */ M.jsx("div", { className: ae("flex flex-col items-start gap-8", t), children: n.map((s, a) => {
  const r = a < e ? "completed" : a === e ? "active" : "pending";
  return /* @__PURE__ */ M.jsxs(
    "div",
    {
      className: "flex flex-row w-full items-center relative",
      children: [
        /* @__PURE__ */ M.jsxs("div", { className: ae(
          "flex flex-row items-center z-10",
          i === "default" ? "gap-4" : "gap-2"
        ), children: [
          i === "default" && /* @__PURE__ */ M.jsx(
            "div",
            {
              className: ae(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                oo(r)
              ),
              children: /* @__PURE__ */ M.jsx(
                Pe,
                {
                  icon: no(r, s.icon),
                  className: "h-5 w-5"
                }
              )
            }
          ),
          /* @__PURE__ */ M.jsxs("div", { className: "flex flex-col items-start", children: [
            /* @__PURE__ */ M.jsx(
              "span",
              {
                className: ae(
                  "text-sm font-medium",
                  r === "active" ? "text-primary-500" : r === "completed" ? "text-neutral-900" : "text-neutral-500"
                ),
                children: s.label
              }
            ),
            s.description && /* @__PURE__ */ M.jsx("span", { className: "text-xs text-neutral-500", children: s.description })
          ] })
        ] }),
        a < n.length - 1 && /* @__PURE__ */ M.jsx(
          "div",
          {
            className: ae(
              "absolute transition-all duration-200",
              i === "default" ? "left-4 w-[1px] top-10 bottom-[-24px]" : "left-0 w-[1px] top-6 bottom-[-24px]",
              a < e ? "bg-primary-500" : "bg-neutral-200"
            )
          }
        )
      ]
    },
    a
  );
}) }), Xd = ({
  orientation: n = "horizontal",
  variant: e = "default",
  ...t
}) => n === "vertical" ? /* @__PURE__ */ M.jsx(pd, { variant: e, ...t }) : /* @__PURE__ */ M.jsx(fd, { variant: e, ...t }), jd = ({
  label: n,
  checked: e = !1,
  disabled: t = !1,
  onChange: i,
  size: s = "md"
}) => {
  const a = (l) => {
    i && i(l.target.checked);
  }, r = {
    sm: "w-8 h-4",
    md: "w-11 h-6",
    lg: "w-14 h-7"
  }, o = {
    sm: "w-3 h-3",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };
  return /* @__PURE__ */ M.jsxs(
    "label",
    {
      className: fe(
        "inline-flex items-center cursor-pointer",
        t && "opacity-60 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ M.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ M.jsx(
            "input",
            {
              type: "checkbox",
              className: "sr-only",
              checked: e,
              disabled: t,
              onChange: a
            }
          ),
          /* @__PURE__ */ M.jsx(
            "div",
            {
              className: fe(
                "block rounded-full transition-colors duration-200 ease-in-out",
                r[s],
                e ? "bg-primary" : "bg-gray-200 dark:bg-gray-700",
                t && "cursor-not-allowed"
              )
            }
          ),
          /* @__PURE__ */ M.jsx(
            "div",
            {
              className: fe(
                "absolute rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out",
                o[s],
                e ? s === "sm" ? "translate-x-4" : s === "md" ? "translate-x-5" : "translate-x-7" : "translate-x-0.5",
                "top-1/2 -translate-y-1/2"
              )
            }
          )
        ] }),
        n && /* @__PURE__ */ M.jsx("span", { className: "ml-3 text-sm text-gray-700 dark:text-gray-300", children: n })
      ]
    }
  );
}, Wd = ({
  items: n,
  defaultActiveId: e,
  variant: t = "default",
  size: i = "md",
  className: s,
  tabListClassName: a,
  tabClassName: r,
  contentClassName: o,
  onChange: l
}) => {
  var p, f;
  const [c, h] = Ie(e || ((p = n[0]) == null ? void 0 : p.id) || ""), d = ht((x) => {
    h(x), l == null || l(x);
  }, [l]), u = () => {
    switch (i) {
      case "sm":
        return "text-sm px-3 py-1.5";
      case "lg":
        return "text-lg px-6 py-3";
      default:
        return "text-base px-4 py-2";
    }
  }, g = (x, m) => {
    const b = fe(
      "flex items-center space-x-2 transition-colors",
      "font-medium",
      u(),
      m && "opacity-50 cursor-not-allowed",
      !m && "cursor-pointer"
    );
    switch (t) {
      case "pills":
        return fe(
          b,
          "rounded-full",
          x ? "bg-primary text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        );
      case "underline":
        return fe(
          b,
          "border-b-2",
          x ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
      default:
        return fe(
          b,
          "border-b-2",
          x ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
    }
  };
  return /* @__PURE__ */ M.jsxs("div", { className: fe("w-full", s), children: [
    /* @__PURE__ */ M.jsx(
      "div",
      {
        className: fe(
          "flex space-x-1 border-b border-gray-200 dark:border-gray-700",
          t === "pills" && "space-x-2 border-b-0",
          a
        ),
        children: n.map((x) => {
          const m = x.id === c, b = !!x.disabled;
          return /* @__PURE__ */ M.jsxs(
            "button",
            {
              onClick: () => !b && d(x.id),
              disabled: b,
              className: fe(
                g(m, b),
                r
              ),
              children: [
                x.icon && /* @__PURE__ */ M.jsx(
                  Pe,
                  {
                    icon: x.icon,
                    className: "w-5 h-5 flex-shrink-0"
                  }
                ),
                /* @__PURE__ */ M.jsx("span", { children: x.label })
              ]
            },
            x.id
          );
        })
      }
    ),
    /* @__PURE__ */ M.jsx("div", { className: fe("mt-4", o), children: (f = n.find((x) => x.id === c)) == null ? void 0 : f.content })
  ] });
}, Bd = ({
  variant: n = "p",
  children: e,
  className: t,
  as: i
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
  }, r = i || ((o) => {
    switch (o) {
      case "display1":
      case "display2":
      case "heading1":
      case "heading2":
      case "heading3":
      case "heading4":
        return "h" + o.slice(-1);
      case "body1":
      case "body2":
      case "subtitle1":
      case "subtitle2":
        return "p";
      case "caption":
      case "value":
        return "span";
      default:
        return o;
    }
  })(n);
  return /* @__PURE__ */ M.jsx(r, { className: ae("text-gray-900", s[n], t), children: e });
}, xd = lt(
  "rounded-md border bg-white px-3 py-2 ring-0 transition-colors placeholder:text-neutral-500 placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
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
), md = Ge(
  ({
    value: n,
    onChange: e,
    format: t = "12h",
    variant: i = "default",
    size: s = "md",
    disabled: a = !1,
    errorText: r,
    helperText: o,
    label: l,
    required: c = !1,
    labelPlacement: h = "top",
    fullWidth: d = !1,
    className: u,
    placeholder: g = "Select time",
    ...p
  }, f) => {
    const [x, m] = Ie(!1), [b, w] = Ie(n || null), [y, v] = Ie(0), [k, A] = Ie(0), [S, C] = Ie(!0), L = Be(null), P = Be(null), R = Be(null), I = () => {
      if (!x || !P.current || !R.current) return;
      const { bottom: D, left: Y, width: X } = P.current.getBoundingClientRect(), z = R.current;
      Object.assign(z.style, {
        position: "fixed",
        left: `${Y}px`,
        top: `${D + 4}px`,
        width: `${X}px`,
        maxHeight: `${window.innerHeight - D - 8}px`
      });
    };
    ot(() => {
      const D = () => {
        x && I();
      }, Y = () => {
        x && I();
      }, X = (z) => {
        const F = z.target;
        L.current && !L.current.contains(F) && R.current && !R.current.contains(F) && m(!1);
      };
      return x && (I(), window.addEventListener("scroll", D, !0), window.addEventListener("resize", Y)), document.addEventListener("click", X), () => {
        window.removeEventListener("scroll", D, !0), window.removeEventListener("resize", Y), document.removeEventListener("click", X);
      };
    }, [x]);
    const T = () => {
      const Y = `${(t === "12h" ? S ? y : y + 12 : y).toString().padStart(2, "0")}:${k.toString().padStart(2, "0")}`;
      w(Y), e == null || e(Y), m(!1);
    }, O = () => t === "12h" ? Array.from({ length: 12 }, (D, Y) => Y + 1) : Array.from({ length: 24 }, (D, Y) => Y), N = () => Array.from({ length: 60 }, (D, Y) => Y);
    return /* @__PURE__ */ M.jsxs("div", { ref: L, className: ae("relative", d && "w-full", u), children: [
      l && /* @__PURE__ */ M.jsxs(
        "label",
        {
          className: ae(
            "block text-sm font-medium text-gray-700 mb-1",
            h === "left" && "inline-block mr-2"
          ),
          children: [
            l,
            c && /* @__PURE__ */ M.jsx("span", { className: "text-red-500 ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ M.jsx("div", { ref: P, children: /* @__PURE__ */ M.jsx(
        "input",
        {
          ref: f,
          type: "text",
          value: b || "",
          placeholder: g,
          onClick: () => !a && m(!x),
          readOnly: !0,
          className: ae(xd({ variant: i, size: s, fullWidth: d })),
          disabled: a,
          ...p
        }
      ) }),
      x && Bt(
        /* @__PURE__ */ M.jsxs(
          "div",
          {
            ref: R,
            className: "fixed z-[9999] bg-white border border-neutral-200 rounded-md shadow-lg w-[280px]",
            children: [
              /* @__PURE__ */ M.jsx("div", { className: "p-4", children: /* @__PURE__ */ M.jsxs("div", { className: "flex flex-col gap-4", children: [
                /* @__PURE__ */ M.jsxs("div", { className: "flex justify-between text-sm font-medium text-neutral-900", children: [
                  /* @__PURE__ */ M.jsx("span", { children: "Hours" }),
                  /* @__PURE__ */ M.jsx("span", { children: "Minutes" }),
                  t === "12h" && /* @__PURE__ */ M.jsx("span", { children: "AM/PM" })
                ] }),
                /* @__PURE__ */ M.jsxs("div", { className: "flex justify-between gap-2", children: [
                  /* @__PURE__ */ M.jsx("div", { className: "w-20 h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-200 scrollbar-track-neutral-50", children: O().map((D) => /* @__PURE__ */ M.jsx(
                    Dt,
                    {
                      variant: y === D ? "primary" : "ghost",
                      size: "sm",
                      className: "w-full justify-center",
                      onClick: () => v(D),
                      children: D.toString().padStart(2, "0")
                    },
                    D
                  )) }),
                  /* @__PURE__ */ M.jsx("div", { className: "w-20 h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-200 scrollbar-track-neutral-50", children: N().map((D) => /* @__PURE__ */ M.jsx(
                    Dt,
                    {
                      variant: k === D ? "primary" : "ghost",
                      size: "sm",
                      className: "w-full justify-center",
                      onClick: () => A(D),
                      children: D.toString().padStart(2, "0")
                    },
                    D
                  )) }),
                  t === "12h" && /* @__PURE__ */ M.jsxs("div", { className: "w-20 flex flex-col gap-2", children: [
                    /* @__PURE__ */ M.jsx(
                      Dt,
                      {
                        variant: S ? "primary" : "ghost",
                        size: "sm",
                        className: "w-full justify-center",
                        onClick: () => C(!0),
                        children: "AM"
                      }
                    ),
                    /* @__PURE__ */ M.jsx(
                      Dt,
                      {
                        variant: S ? "ghost" : "primary",
                        size: "sm",
                        className: "w-full justify-center",
                        onClick: () => C(!1),
                        children: "PM"
                      }
                    )
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ M.jsx("div", { className: "flex justify-end p-4 border-t border-neutral-200", children: /* @__PURE__ */ M.jsx(
                Dt,
                {
                  variant: "primary",
                  size: "sm",
                  onClick: T,
                  children: "Select"
                }
              ) })
            ]
          }
        ),
        document.body
      ),
      r && /* @__PURE__ */ M.jsx("p", { className: "mt-1 text-sm text-red-500", children: r }),
      o && !r && /* @__PURE__ */ M.jsx("p", { className: "mt-1 text-sm text-gray-500", children: o })
    ] });
  }
);
md.displayName = "TimePicker";
const bd = lt(
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
), vd = lt(
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
), yd = Ge(
  ({
    checked: n = !1,
    onCheckedChange: e,
    variant: t = "primary",
    size: i = "md",
    label: s,
    required: a = !1,
    helperText: r,
    errorText: o,
    error: l = !1,
    className: c,
    ...h
  }, d) => {
    const u = Xe.useId(), g = `${u}-helper`, p = `${u}-error`;
    return /* @__PURE__ */ M.jsxs("div", { className: "inline-flex flex-col gap-1.5", children: [
      /* @__PURE__ */ M.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ M.jsx(
          "button",
          {
            type: "button",
            role: "switch",
            "aria-checked": n,
            "data-state": n ? "checked" : "unchecked",
            onClick: () => e == null ? void 0 : e(!n),
            ref: d,
            className: ae(bd({ variant: l ? "danger" : t, size: i }), c),
            "aria-describedby": l ? p : r ? g : void 0,
            "aria-invalid": l,
            "aria-required": a,
            ...h,
            children: /* @__PURE__ */ M.jsx(
              "span",
              {
                "data-state": n ? "checked" : "unchecked",
                className: ae(
                  vd({ size: i }),
                  n ? "translate-x-5" : "translate-x-1"
                )
              }
            )
          }
        ),
        s && /* @__PURE__ */ M.jsxs(
          "label",
          {
            htmlFor: u,
            className: "text-sm text-neutral-900",
            children: [
              s,
              a && /* @__PURE__ */ M.jsx("span", { className: "text-danger-500 ml-0.5", children: "*" })
            ]
          }
        )
      ] }),
      l && o && /* @__PURE__ */ M.jsx("p", { className: "text-xs text-danger-500", id: p, children: o }),
      !l && r && /* @__PURE__ */ M.jsx("p", { className: "text-xs text-neutral-500", id: g, children: r })
    ] });
  }
);
yd.displayName = "Toggle";
const Gd = ({
  content: n,
  children: e,
  position: t = "top",
  delay: i = 0,
  className: s
}) => {
  const [a, r] = Ie(!1), [o, l] = Ie({ top: 0, left: 0 }), c = Be(null), h = Be(null);
  let d;
  const u = () => {
    if (!c.current || !h.current) return;
    const f = h.current.getBoundingClientRect(), x = c.current.getBoundingClientRect();
    let m = 0, b = 0;
    switch (t) {
      case "top":
        m = f.top - x.height - 8, b = f.left + (f.width - x.width) / 2;
        break;
      case "bottom":
        m = f.bottom + 8, b = f.left + (f.width - x.width) / 2;
        break;
      case "left":
        m = f.top + (f.height - x.height) / 2, b = f.left - x.width - 8;
        break;
      case "right":
        m = f.top + (f.height - x.height) / 2, b = f.right + 8;
        break;
    }
    l({ top: m, left: b });
  };
  ot(() => (a && (u(), window.addEventListener("scroll", u), window.addEventListener("resize", u)), () => {
    window.removeEventListener("scroll", u), window.removeEventListener("resize", u);
  }), [a, t]);
  const g = () => {
    d = setTimeout(() => {
      r(!0);
    }, i);
  }, p = () => {
    clearTimeout(d), r(!1);
  };
  return /* @__PURE__ */ M.jsxs(
    "div",
    {
      ref: h,
      className: "relative inline-block",
      onMouseEnter: g,
      onMouseLeave: p,
      children: [
        e,
        a && /* @__PURE__ */ M.jsxs(
          "div",
          {
            ref: c,
            className: fe(
              "absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-md shadow-lg",
              "transition-opacity duration-200",
              s
            ),
            style: {
              top: `${o.top}px`,
              left: `${o.left}px`
            },
            children: [
              n,
              /* @__PURE__ */ M.jsx(
                "div",
                {
                  className: fe(
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
}, wd = lt("flex items-center text-sm", {
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
}), kd = Ge(
  ({
    className: n,
    variant: e = "default",
    size: t = "md",
    items: i,
    separator: s = /* @__PURE__ */ M.jsx(ia, { icon: "mdi:slash-forward", className: "h-4 w-4 flex-shrink-0" }),
    activeLastItem: a = !0,
    ...r
  }, o) => /* @__PURE__ */ M.jsx(
    "nav",
    {
      ref: o,
      className: ae(wd({ variant: e, size: t }), n),
      "aria-label": "Breadcrumb",
      ...r,
      children: /* @__PURE__ */ M.jsx("ol", { className: "flex flex-wrap items-center gap-1.5", children: i.map((l, c) => {
        const h = c === i.length - 1, d = h && a;
        return /* @__PURE__ */ M.jsxs(
          "li",
          {
            className: ae(
              "flex items-center gap-1.5",
              d && "text-primary-500 font-medium"
            ),
            children: [
              l.icon && /* @__PURE__ */ M.jsx(
                ia,
                {
                  icon: l.icon,
                  className: ae(
                    "flex-shrink-0",
                    t === "sm" && "h-3.5 w-3.5",
                    t === "md" && "h-4 w-4",
                    t === "lg" && "h-5 w-5"
                  )
                }
              ),
              l.href && !d ? /* @__PURE__ */ M.jsx(
                "a",
                {
                  href: l.href,
                  className: ae(
                    "transition-colors duration-200",
                    "hover:text-primary-500 hover:underline focus:outline-none",
                    "focus-visible:text-primary-500 focus-visible:underline",
                    "active:text-primary-600"
                  ),
                  children: /* @__PURE__ */ M.jsx("span", { className: "truncate max-w-[200px] inline-block align-bottom", children: l.label })
                }
              ) : /* @__PURE__ */ M.jsx("span", { className: ae(
                "truncate max-w-[200px] inline-block",
                d && "text-primary-500"
              ), children: l.label }),
              !h && /* @__PURE__ */ M.jsx("span", { className: ae(
                "text-neutral-400 flex-shrink-0",
                t === "sm" && "scale-90",
                t === "lg" && "scale-110"
              ), children: s })
            ]
          },
          l.label
        );
      }) })
    }
  )
);
kd.displayName = "Breadcrumbs";
const Vd = ({
  columns: n,
  data: e,
  className: t,
  headerClassName: i,
  rowClassName: s,
  cellClassName: a,
  emptyState: r,
  isLoading: o,
  loadingState: l
}) => o && l ? l : /* @__PURE__ */ M.jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ M.jsxs("table", { className: ae("w-full border-spacing-0 border-separate", t), children: [
  /* @__PURE__ */ M.jsx("thead", { className: "bg-primary-500 sticky top-0 z-10", children: /* @__PURE__ */ M.jsx("tr", { children: n.map((c, h) => /* @__PURE__ */ M.jsx(
    "th",
    {
      className: ae(
        "text-sm text-wrap border-y bg-primary",
        "border-primary text-white p-4 text-center",
        i
      ),
      children: c.header
    },
    h
  )) }) }),
  /* @__PURE__ */ M.jsx("tbody", { children: e.length === 0 ? /* @__PURE__ */ M.jsx("tr", { children: /* @__PURE__ */ M.jsx(
    "td",
    {
      colSpan: n.length,
      className: "text-center py-28 border border-primary h-full font-bold text-3xl text-default-400 w-full",
      children: r || "No data available"
    }
  ) }) : e.map((c, h) => /* @__PURE__ */ M.jsx(
    "tr",
    {
      className: ae(
        "p-3 text-center hover:bg-slate-100",
        {
          "bg-[#F8F8F8]": h % 2 !== 0,
          "bg-white": h % 2 === 0
        },
        s
      ),
      children: n.map((d, u) => /* @__PURE__ */ M.jsx(
        "td",
        {
          className: ae(
            "text-center text-nowrap text-sm p-4",
            a
          ),
          children: d.render ? d.render(c[d.accessor], c) : c[d.accessor] || "-"
        },
        `${h}-${u}`
      ))
    },
    h
  )) })
] }) }), lo = Ge(
  ({
    className: n,
    variant: e = "default",
    title: t,
    description: i,
    onClose: s,
    icon: a,
    showIcon: r = !0,
    showClose: o = !0,
    ...l
  }, c) => {
    const d = a || (r ? {
      default: "mdi:information",
      success: "mdi:check-circle",
      error: "mdi:alert-circle",
      warning: "mdi:alert",
      info: "mdi:information"
    }[e] : void 0);
    return /* @__PURE__ */ M.jsxs(
      "div",
      {
        ref: c,
        className: ae(
          "flex items-start gap-3 rounded-lg p-4 shadow-lg",
          "border border-gray-200",
          {
            "bg-white": e === "default",
            "bg-success-50": e === "success",
            "bg-danger-50": e === "error",
            "bg-warning-50": e === "warning",
            "bg-info-50": e === "info"
          },
          n
        ),
        ...l,
        children: [
          d && /* @__PURE__ */ M.jsx(
            Pe,
            {
              icon: d,
              className: ae("h-5 w-5 flex-shrink-0", {
                "text-gray-500": e === "default",
                "text-success-500": e === "success",
                "text-danger-500": e === "error",
                "text-warning-500": e === "warning",
                "text-info-500": e === "info"
              })
            }
          ),
          /* @__PURE__ */ M.jsxs("div", { className: "flex-1", children: [
            t && /* @__PURE__ */ M.jsx(
              "h3",
              {
                className: ae("text-sm font-medium", {
                  "text-gray-900": e === "default",
                  "text-success-900": e === "success",
                  "text-danger-900": e === "error",
                  "text-warning-900": e === "warning",
                  "text-info-900": e === "info"
                }),
                children: t
              }
            ),
            i && /* @__PURE__ */ M.jsx(
              "p",
              {
                className: ae("mt-1 text-sm", {
                  "text-gray-500": e === "default",
                  "text-success-700": e === "success",
                  "text-danger-700": e === "error",
                  "text-warning-700": e === "warning",
                  "text-info-700": e === "info"
                }),
                children: i
              }
            )
          ] }),
          o && s && /* @__PURE__ */ M.jsx(
            "button",
            {
              type: "button",
              onClick: s,
              className: ae(
                "ml-4 flex-shrink-0 rounded-md p-1 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2",
                {
                  "text-gray-400 hover:text-gray-500": e === "default",
                  "text-success-400 hover:text-success-500": e === "success",
                  "text-danger-400 hover:text-danger-500": e === "error",
                  "text-warning-400 hover:text-warning-500": e === "warning",
                  "text-info-400 hover:text-info-500": e === "info"
                }
              ),
              children: /* @__PURE__ */ M.jsx(Pe, { icon: "mdi:close", className: "h-5 w-5" })
            }
          )
        ]
      }
    );
  }
);
lo.displayName = "Toast";
const co = zo(void 0), Ad = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, $d = ({ children: n }) => {
  const [e, t] = Ie([]), i = ht((r) => {
    t((o) => o.filter((l) => l.id !== r));
  }, []), s = ht((r) => {
    const o = Math.random().toString(36).substr(2, 9), l = r.position || "top-right", c = r.duration || 5e3, h = {
      ...r,
      id: o,
      position: l
    };
    return t((d) => [...d, h]), c > 0 && setTimeout(() => {
      i(o);
    }, c), o;
  }, [i]), a = e.reduce((r, o) => (r[o.position] || (r[o.position] = []), r[o.position].push(o), r), {
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    "bottom-right": [],
    "top-center": [],
    "bottom-center": []
  });
  return /* @__PURE__ */ M.jsxs(co.Provider, { value: { showToast: s, removeToast: i }, children: [
    n,
    Bt(
      /* @__PURE__ */ M.jsx(M.Fragment, { children: Object.entries(a).map(([r, o]) => /* @__PURE__ */ M.jsx(
        "div",
        {
          className: ae(
            "fixed z-50 flex flex-col gap-2 min-w-[320px] max-w-[420px]",
            Ad[r],
            r.includes("bottom") ? "flex-col-reverse" : "flex-col"
          ),
          children: o.map((l) => /* @__PURE__ */ M.jsx(
            lo,
            {
              ...l,
              onClose: () => i(l.id),
              className: "animate-slide-in"
            },
            l.id
          ))
        },
        r
      )) }),
      document.body
    )
  ] });
}, Ud = () => {
  const n = No(co);
  if (!n)
    throw new Error("useToast must be used within a ToastProvider");
  return n;
}, Sd = ({
  label: n,
  value: e,
  icon: t,
  className: i
}) => /* @__PURE__ */ M.jsxs(ln, { className: ae(
  "flex items-center gap-4 rounded-lg w-full bg-white p-4 shadow-sm hover:bg-neutral-50 transition-shadow duration-200",
  i
), children: [
  /* @__PURE__ */ M.jsxs("div", { children: [
    /* @__PURE__ */ M.jsx("p", { className: "text-sm font-medium text-gray-500", children: n }),
    /* @__PURE__ */ M.jsx("p", { className: "mt-1 text-2xl font-semibold text-gray-900", children: e })
  ] }),
  t && /* @__PURE__ */ M.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50", children: /* @__PURE__ */ M.jsx(Pe, { icon: t, className: "h-6 w-6 text-primary-600" }) })
] }), qd = ({
  widgets: n,
  className: e
}) => /* @__PURE__ */ M.jsx("div", { className: ae("w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", e), children: n.map((t, i) => /* @__PURE__ */ M.jsx(Sd, { ...t }, i)) });
export {
  Ld as Accordion,
  wc as AutoComplete,
  Pd as Avatar,
  Td as Badge,
  kd as Breadcrumbs,
  Dt as Button,
  ln as Card,
  Id as Chart,
  Ed as Checkbox,
  Rd as Chip,
  id as DatePicker,
  ad as Dialog,
  od as DialogActions,
  nd as DialogBody,
  ao as DialogHeader,
  rd as DialogTitle,
  ld as Divider,
  Od as FileUpload,
  ia as Icon,
  on as Input,
  zd as Notification,
  Nd as Pagination,
  _d as Radio,
  ro as Select,
  Wi as SelectItem,
  Dd as Skeleton,
  Yd as Slider,
  Fd as StarRating,
  Hd as StatusIndicator,
  Xd as Stepper,
  jd as Switch,
  Vd as Table,
  Wd as Tabs,
  Bd as Text,
  md as TimePicker,
  lo as Toast,
  $d as ToastProvider,
  yd as Toggle,
  Gd as Tooltip,
  Sd as WidgetCard,
  qd as WidgetCardGroup,
  kc as buttonVariants,
  Ac as cardVariants,
  ae as cn,
  bd as toggleVariants,
  Ud as useToast
};
