import * as vo from "react";
import ie, { useState as te, useEffect as ue, forwardRef as Ie, useRef as re, useImperativeHandle as Wn, useLayoutEffect as Ps, useCallback as pe, Children as wr, isValidElement as xr, cloneElement as Kn, useContext as mt, useMemo as _e, createContext as Ts } from "react";
import Hi, { createPortal as It, flushSync as Wi } from "react-dom";
import Ne from "dayjs";
import { LazyMotion as xn, AnimatePresence as Ss, m as yn } from "framer-motion";
import { useReactTable as Ki, getPaginationRowModel as Ui, getSortedRowModel as Yi, getCoreRowModel as qi, flexRender as xo } from "@tanstack/react-table";
var Cs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Rs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wn = { exports: {} }, lr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yo;
function Xi() {
  if (yo) return lr;
  yo = 1;
  var e = ie, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, c, u) {
    var d, f = {}, h = null, b = null;
    u !== void 0 && (h = "" + u), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (b = c.ref);
    for (d in c) n.call(c, d) && !s.hasOwnProperty(d) && (f[d] = c[d]);
    if (l && l.defaultProps) for (d in c = l.defaultProps, c) f[d] === void 0 && (f[d] = c[d]);
    return { $$typeof: t, type: l, key: h, ref: b, props: f, _owner: o.current };
  }
  return lr.Fragment = r, lr.jsx = a, lr.jsxs = a, lr;
}
var cr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wo;
function Zi() {
  return wo || (wo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ie, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), w = Symbol.iterator, v = "@@iterator";
    function E(y) {
      if (y === null || typeof y != "object")
        return null;
      var G = w && y[w] || y[v];
      return typeof G == "function" ? G : null;
    }
    var j = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function N(y) {
      {
        for (var G = arguments.length, Z = new Array(G > 1 ? G - 1 : 0), ae = 1; ae < G; ae++)
          Z[ae - 1] = arguments[ae];
        S("error", y, Z);
      }
    }
    function S(y, G, Z) {
      {
        var ae = j.ReactDebugCurrentFrame, we = ae.getStackAddendum();
        we !== "" && (G += "%s", Z = Z.concat([we]));
        var ke = Z.map(function(he) {
          return String(he);
        });
        ke.unshift("Warning: " + G), Function.prototype.apply.call(console[y], console, ke);
      }
    }
    var L = !1, R = !1, C = !1, K = !1, z = !1, I;
    I = Symbol.for("react.module.reference");
    function O(y) {
      return !!(typeof y == "string" || typeof y == "function" || y === n || y === s || z || y === o || y === u || y === d || K || y === b || L || R || C || typeof y == "object" && y !== null && (y.$$typeof === h || y.$$typeof === f || y.$$typeof === a || y.$$typeof === l || y.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      y.$$typeof === I || y.getModuleId !== void 0));
    }
    function p(y, G, Z) {
      var ae = y.displayName;
      if (ae)
        return ae;
      var we = G.displayName || G.name || "";
      return we !== "" ? Z + "(" + we + ")" : Z;
    }
    function x(y) {
      return y.displayName || "Context";
    }
    function m(y) {
      if (y == null)
        return null;
      if (typeof y.tag == "number" && N("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof y == "function")
        return y.displayName || y.name || null;
      if (typeof y == "string")
        return y;
      switch (y) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof y == "object")
        switch (y.$$typeof) {
          case l:
            var G = y;
            return x(G) + ".Consumer";
          case a:
            var Z = y;
            return x(Z._context) + ".Provider";
          case c:
            return p(y, y.render, "ForwardRef");
          case f:
            var ae = y.displayName || null;
            return ae !== null ? ae : m(y.type) || "Memo";
          case h: {
            var we = y, ke = we._payload, he = we._init;
            try {
              return m(he(ke));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, A = 0, g, k, P, T, U, F, H;
    function ne() {
    }
    ne.__reactDisabledLog = !0;
    function B() {
      {
        if (A === 0) {
          g = console.log, k = console.info, P = console.warn, T = console.error, U = console.group, F = console.groupCollapsed, H = console.groupEnd;
          var y = {
            configurable: !0,
            enumerable: !0,
            value: ne,
            writable: !0
          };
          Object.defineProperties(console, {
            info: y,
            log: y,
            warn: y,
            error: y,
            group: y,
            groupCollapsed: y,
            groupEnd: y
          });
        }
        A++;
      }
    }
    function W() {
      {
        if (A--, A === 0) {
          var y = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, y, {
              value: g
            }),
            info: $({}, y, {
              value: k
            }),
            warn: $({}, y, {
              value: P
            }),
            error: $({}, y, {
              value: T
            }),
            group: $({}, y, {
              value: U
            }),
            groupCollapsed: $({}, y, {
              value: F
            }),
            groupEnd: $({}, y, {
              value: H
            })
          });
        }
        A < 0 && N("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = j.ReactCurrentDispatcher, _;
    function X(y, G, Z) {
      {
        if (_ === void 0)
          try {
            throw Error();
          } catch (we) {
            var ae = we.stack.trim().match(/\n( *(at )?)/);
            _ = ae && ae[1] || "";
          }
        return `
` + _ + y;
      }
    }
    var xe = !1, fe;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new Ue();
    }
    function He(y, G) {
      if (!y || xe)
        return "";
      {
        var Z = fe.get(y);
        if (Z !== void 0)
          return Z;
      }
      var ae;
      xe = !0;
      var we = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ke;
      ke = q.current, q.current = null, B();
      try {
        if (G) {
          var he = function() {
            throw Error();
          };
          if (Object.defineProperty(he.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(he, []);
            } catch (Xe) {
              ae = Xe;
            }
            Reflect.construct(y, [], he);
          } else {
            try {
              he.call();
            } catch (Xe) {
              ae = Xe;
            }
            y.call(he.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Xe) {
            ae = Xe;
          }
          y();
        }
      } catch (Xe) {
        if (Xe && ae && typeof Xe.stack == "string") {
          for (var ge = Xe.stack.split(`
`), qe = ae.stack.split(`
`), Re = ge.length - 1, Oe = qe.length - 1; Re >= 1 && Oe >= 0 && ge[Re] !== qe[Oe]; )
            Oe--;
          for (; Re >= 1 && Oe >= 0; Re--, Oe--)
            if (ge[Re] !== qe[Oe]) {
              if (Re !== 1 || Oe !== 1)
                do
                  if (Re--, Oe--, Oe < 0 || ge[Re] !== qe[Oe]) {
                    var rt = `
` + ge[Re].replace(" at new ", " at ");
                    return y.displayName && rt.includes("<anonymous>") && (rt = rt.replace("<anonymous>", y.displayName)), typeof y == "function" && fe.set(y, rt), rt;
                  }
                while (Re >= 1 && Oe >= 0);
              break;
            }
        }
      } finally {
        xe = !1, q.current = ke, W(), Error.prepareStackTrace = we;
      }
      var Kt = y ? y.displayName || y.name : "", _t = Kt ? X(Kt) : "";
      return typeof y == "function" && fe.set(y, _t), _t;
    }
    function Se(y, G, Z) {
      return He(y, !1);
    }
    function Ye(y) {
      var G = y.prototype;
      return !!(G && G.isReactComponent);
    }
    function Ee(y, G, Z) {
      if (y == null)
        return "";
      if (typeof y == "function")
        return He(y, Ye(y));
      if (typeof y == "string")
        return X(y);
      switch (y) {
        case u:
          return X("Suspense");
        case d:
          return X("SuspenseList");
      }
      if (typeof y == "object")
        switch (y.$$typeof) {
          case c:
            return Se(y.render);
          case f:
            return Ee(y.type, G, Z);
          case h: {
            var ae = y, we = ae._payload, ke = ae._init;
            try {
              return Ee(ke(we), G, Z);
            } catch {
            }
          }
        }
      return "";
    }
    var et = Object.prototype.hasOwnProperty, tt = {}, We = j.ReactDebugCurrentFrame;
    function ze(y) {
      if (y) {
        var G = y._owner, Z = Ee(y.type, y._source, G ? G.type : null);
        We.setExtraStackFrame(Z);
      } else
        We.setExtraStackFrame(null);
    }
    function dt(y, G, Z, ae, we) {
      {
        var ke = Function.call.bind(et);
        for (var he in y)
          if (ke(y, he)) {
            var ge = void 0;
            try {
              if (typeof y[he] != "function") {
                var qe = Error((ae || "React class") + ": " + Z + " type `" + he + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof y[he] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw qe.name = "Invariant Violation", qe;
              }
              ge = y[he](G, he, ae, Z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Re) {
              ge = Re;
            }
            ge && !(ge instanceof Error) && (ze(we), N("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ae || "React class", Z, he, typeof ge), ze(null)), ge instanceof Error && !(ge.message in tt) && (tt[ge.message] = !0, ze(we), N("Failed %s type: %s", Z, ge.message), ze(null));
          }
      }
    }
    var ut = Array.isArray;
    function Fe(y) {
      return ut(y);
    }
    function Nt(y) {
      {
        var G = typeof Symbol == "function" && Symbol.toStringTag, Z = G && y[Symbol.toStringTag] || y.constructor.name || "Object";
        return Z;
      }
    }
    function bt(y) {
      try {
        return V(y), !1;
      } catch {
        return !0;
      }
    }
    function V(y) {
      return "" + y;
    }
    function ee(y) {
      if (bt(y))
        return N("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Nt(y)), V(y);
    }
    var D = j.ReactCurrentOwner, oe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Y, ve;
    function le(y) {
      if (et.call(y, "ref")) {
        var G = Object.getOwnPropertyDescriptor(y, "ref").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return y.ref !== void 0;
    }
    function je(y) {
      if (et.call(y, "key")) {
        var G = Object.getOwnPropertyDescriptor(y, "key").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return y.key !== void 0;
    }
    function ct(y, G) {
      typeof y.ref == "string" && D.current;
    }
    function Ot(y, G) {
      {
        var Z = function() {
          Y || (Y = !0, N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        Z.isReactWarning = !0, Object.defineProperty(y, "key", {
          get: Z,
          configurable: !0
        });
      }
    }
    function Mt(y, G) {
      {
        var Z = function() {
          ve || (ve = !0, N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        Z.isReactWarning = !0, Object.defineProperty(y, "ref", {
          get: Z,
          configurable: !0
        });
      }
    }
    var ht = function(y, G, Z, ae, we, ke, he) {
      var ge = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: y,
        key: G,
        ref: Z,
        props: he,
        // Record the component responsible for creating this element.
        _owner: ke
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
        value: ae
      }), Object.defineProperty(ge, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: we
      }), Object.freeze && (Object.freeze(ge.props), Object.freeze(ge)), ge;
    };
    function jr(y, G, Z, ae, we) {
      {
        var ke, he = {}, ge = null, qe = null;
        Z !== void 0 && (ee(Z), ge = "" + Z), je(G) && (ee(G.key), ge = "" + G.key), le(G) && (qe = G.ref, ct(G, we));
        for (ke in G)
          et.call(G, ke) && !oe.hasOwnProperty(ke) && (he[ke] = G[ke]);
        if (y && y.defaultProps) {
          var Re = y.defaultProps;
          for (ke in Re)
            he[ke] === void 0 && (he[ke] = Re[ke]);
        }
        if (ge || qe) {
          var Oe = typeof y == "function" ? y.displayName || y.name || "Unknown" : y;
          ge && Ot(he, Oe), qe && Mt(he, Oe);
        }
        return ht(y, ge, qe, we, ae, D.current, he);
      }
    }
    var ir = j.ReactCurrentOwner, Et = j.ReactDebugCurrentFrame;
    function Wt(y) {
      if (y) {
        var G = y._owner, Z = Ee(y.type, y._source, G ? G.type : null);
        Et.setExtraStackFrame(Z);
      } else
        Et.setExtraStackFrame(null);
    }
    var Qr;
    Qr = !1;
    function en(y) {
      return typeof y == "object" && y !== null && y.$$typeof === t;
    }
    function fo() {
      {
        if (ir.current) {
          var y = m(ir.current.type);
          if (y)
            return `

Check the render method of \`` + y + "`.";
        }
        return "";
      }
    }
    function Ii(y) {
      return "";
    }
    var po = {};
    function Oi(y) {
      {
        var G = fo();
        if (!G) {
          var Z = typeof y == "string" ? y : y.displayName || y.name;
          Z && (G = `

Check the top-level render call using <` + Z + ">.");
        }
        return G;
      }
    }
    function go(y, G) {
      {
        if (!y._store || y._store.validated || y.key != null)
          return;
        y._store.validated = !0;
        var Z = Oi(G);
        if (po[Z])
          return;
        po[Z] = !0;
        var ae = "";
        y && y._owner && y._owner !== ir.current && (ae = " It was passed a child from " + m(y._owner.type) + "."), Wt(y), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Z, ae), Wt(null);
      }
    }
    function mo(y, G) {
      {
        if (typeof y != "object")
          return;
        if (Fe(y))
          for (var Z = 0; Z < y.length; Z++) {
            var ae = y[Z];
            en(ae) && go(ae, G);
          }
        else if (en(y))
          y._store && (y._store.validated = !0);
        else if (y) {
          var we = E(y);
          if (typeof we == "function" && we !== y.entries)
            for (var ke = we.call(y), he; !(he = ke.next()).done; )
              en(he.value) && go(he.value, G);
        }
      }
    }
    function Mi(y) {
      {
        var G = y.type;
        if (G == null || typeof G == "string")
          return;
        var Z;
        if (typeof G == "function")
          Z = G.propTypes;
        else if (typeof G == "object" && (G.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        G.$$typeof === f))
          Z = G.propTypes;
        else
          return;
        if (Z) {
          var ae = m(G);
          dt(Z, y.props, "prop", ae, y);
        } else if (G.PropTypes !== void 0 && !Qr) {
          Qr = !0;
          var we = m(G);
          N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", we || "Unknown");
        }
        typeof G.getDefaultProps == "function" && !G.getDefaultProps.isReactClassApproved && N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _i(y) {
      {
        for (var G = Object.keys(y.props), Z = 0; Z < G.length; Z++) {
          var ae = G[Z];
          if (ae !== "children" && ae !== "key") {
            Wt(y), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ae), Wt(null);
            break;
          }
        }
        y.ref !== null && (Wt(y), N("Invalid attribute `ref` supplied to `React.Fragment`."), Wt(null));
      }
    }
    var bo = {};
    function ho(y, G, Z, ae, we, ke) {
      {
        var he = O(y);
        if (!he) {
          var ge = "";
          (y === void 0 || typeof y == "object" && y !== null && Object.keys(y).length === 0) && (ge += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var qe = Ii();
          qe ? ge += qe : ge += fo();
          var Re;
          y === null ? Re = "null" : Fe(y) ? Re = "array" : y !== void 0 && y.$$typeof === t ? (Re = "<" + (m(y.type) || "Unknown") + " />", ge = " Did you accidentally export a JSX literal instead of a component?") : Re = typeof y, N("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Re, ge);
        }
        var Oe = jr(y, G, Z, we, ke);
        if (Oe == null)
          return Oe;
        if (he) {
          var rt = G.children;
          if (rt !== void 0)
            if (ae)
              if (Fe(rt)) {
                for (var Kt = 0; Kt < rt.length; Kt++)
                  mo(rt[Kt], y);
                Object.freeze && Object.freeze(rt);
              } else
                N("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              mo(rt, y);
        }
        if (et.call(G, "key")) {
          var _t = m(y), Xe = Object.keys(G).filter(function(Gi) {
            return Gi !== "key";
          }), tn = Xe.length > 0 ? "{key: someKey, " + Xe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!bo[_t + tn]) {
            var Bi = Xe.length > 0 ? "{" + Xe.join(": ..., ") + ": ...}" : "{}";
            N(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, tn, _t, Bi, _t), bo[_t + tn] = !0;
          }
        }
        return y === n ? _i(Oe) : Mi(Oe), Oe;
      }
    }
    function Di(y, G, Z) {
      return ho(y, G, Z, !0);
    }
    function zi(y, G, Z) {
      return ho(y, G, Z, !1);
    }
    var Fi = zi, Vi = Di;
    cr.Fragment = n, cr.jsx = Fi, cr.jsxs = Vi;
  }()), cr;
}
process.env.NODE_ENV === "production" ? wn.exports = Xi() : wn.exports = Zi();
var i = wn.exports;
function Ls(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Ls(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function be() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Ls(e)) && (n && (n += " "), n += t);
  return n;
}
const Un = "-", Ji = (e) => {
  const t = el(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      const l = a.split(Un);
      return l[0] === "" && l.length !== 1 && l.shift(), As(l, t) || Qi(a);
    },
    getConflictingClassGroupIds: (a, l) => {
      const c = r[a] || [];
      return l && n[a] ? [...c, ...n[a]] : c;
    }
  };
}, As = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? As(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(Un);
  return (a = t.validators.find(({
    validator: l
  }) => l(s))) == null ? void 0 : a.classGroupId;
}, $o = /^\[(.+)\]$/, Qi = (e) => {
  if ($o.test(e)) {
    const t = $o.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, el = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return rl(Object.entries(e.classGroups), r).forEach(([s, a]) => {
    $n(a, n, s, t);
  }), n;
}, $n = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : ko(t, o);
      s.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (tl(o)) {
        $n(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([s, a]) => {
      $n(a, ko(t, s), r, n);
    });
  });
}, ko = (e, t) => {
  let r = e;
  return t.split(Un).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, tl = (e) => e.isThemeGetter, rl = (e, t) => t ? e.map(([r, n]) => {
  const o = n.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([a, l]) => [t + a, l])) : s);
  return [r, o];
}) : e, nl = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (s, a) => {
    r.set(s, a), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let a = r.get(s);
      if (a !== void 0)
        return a;
      if ((a = n.get(s)) !== void 0)
        return o(s, a), a;
    },
    set(s, a) {
      r.has(s) ? r.set(s, a) : o(s, a);
    }
  };
}, Is = "!", ol = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, o = t[0], s = t.length, a = (l) => {
    const c = [];
    let u = 0, d = 0, f;
    for (let E = 0; E < l.length; E++) {
      let j = l[E];
      if (u === 0) {
        if (j === o && (n || l.slice(E, E + s) === t)) {
          c.push(l.slice(d, E)), d = E + s;
          continue;
        }
        if (j === "/") {
          f = E;
          continue;
        }
      }
      j === "[" ? u++ : j === "]" && u--;
    }
    const h = c.length === 0 ? l : l.substring(d), b = h.startsWith(Is), w = b ? h.substring(1) : h, v = f && f > d ? f - d : void 0;
    return {
      modifiers: c,
      hasImportantModifier: b,
      baseClassName: w,
      maybePostfixModifierPosition: v
    };
  };
  return r ? (l) => r({
    className: l,
    parseClassName: a
  }) : a;
}, sl = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, al = (e) => ({
  cache: nl(e.cacheSize),
  parseClassName: ol(e),
  ...Ji(e)
}), il = /\s+/, ll = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, s = [], a = e.trim().split(il);
  let l = "";
  for (let c = a.length - 1; c >= 0; c -= 1) {
    const u = a[c], {
      modifiers: d,
      hasImportantModifier: f,
      baseClassName: h,
      maybePostfixModifierPosition: b
    } = r(u);
    let w = !!b, v = n(w ? h.substring(0, b) : h);
    if (!v) {
      if (!w) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (v = n(h), !v) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      w = !1;
    }
    const E = sl(d).join(":"), j = f ? E + Is : E, N = j + v;
    if (s.includes(N))
      continue;
    s.push(N);
    const S = o(v, w);
    for (let L = 0; L < S.length; ++L) {
      const R = S[L];
      s.push(j + R);
    }
    l = u + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function cl() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Os(t)) && (n && (n += " "), n += r);
  return n;
}
const Os = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Os(e[n])) && (r && (r += " "), r += t);
  return r;
};
function dl(e, ...t) {
  let r, n, o, s = a;
  function a(c) {
    const u = t.reduce((d, f) => f(d), e());
    return r = al(u), n = r.cache.get, o = r.cache.set, s = l, l(c);
  }
  function l(c) {
    const u = n(c);
    if (u)
      return u;
    const d = ll(c, r);
    return o(c, d), d;
  }
  return function() {
    return s(cl.apply(null, arguments));
  };
}
const Te = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Ms = /^\[(?:([a-z-]+):)?(.+)\]$/i, ul = /^\d+\/\d+$/, fl = /* @__PURE__ */ new Set(["px", "full", "screen"]), pl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, gl = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ml = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, bl = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, hl = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, vt = (e) => Jt(e) || fl.has(e) || ul.test(e), jt = (e) => nr(e, "length", El), Jt = (e) => !!e && !Number.isNaN(Number(e)), rn = (e) => nr(e, "number", Jt), dr = (e) => !!e && Number.isInteger(Number(e)), vl = (e) => e.endsWith("%") && Jt(e.slice(0, -1)), ce = (e) => Ms.test(e), Pt = (e) => pl.test(e), xl = /* @__PURE__ */ new Set(["length", "size", "percentage"]), yl = (e) => nr(e, xl, _s), wl = (e) => nr(e, "position", _s), $l = /* @__PURE__ */ new Set(["image", "url"]), kl = (e) => nr(e, $l, Pl), Nl = (e) => nr(e, "", jl), ur = () => !0, nr = (e, t, r) => {
  const n = Ms.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, El = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  gl.test(e) && !ml.test(e)
), _s = () => !1, jl = (e) => bl.test(e), Pl = (e) => hl.test(e), Tl = () => {
  const e = Te("colors"), t = Te("spacing"), r = Te("blur"), n = Te("brightness"), o = Te("borderColor"), s = Te("borderRadius"), a = Te("borderSpacing"), l = Te("borderWidth"), c = Te("contrast"), u = Te("grayscale"), d = Te("hueRotate"), f = Te("invert"), h = Te("gap"), b = Te("gradientColorStops"), w = Te("gradientColorStopPositions"), v = Te("inset"), E = Te("margin"), j = Te("opacity"), N = Te("padding"), S = Te("saturate"), L = Te("scale"), R = Te("sepia"), C = Te("skew"), K = Te("space"), z = Te("translate"), I = () => ["auto", "contain", "none"], O = () => ["auto", "hidden", "clip", "visible", "scroll"], p = () => ["auto", ce, t], x = () => [ce, t], m = () => ["", vt, jt], $ = () => ["auto", Jt, ce], A = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], g = () => ["solid", "dashed", "dotted", "double", "none"], k = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], T = () => ["", "0", ce], U = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], F = () => [Jt, ce];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ur],
      spacing: [vt, jt],
      blur: ["none", "", Pt, ce],
      brightness: F(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Pt, ce],
      borderSpacing: x(),
      borderWidth: m(),
      contrast: F(),
      grayscale: T(),
      hueRotate: F(),
      invert: T(),
      gap: x(),
      gradientColorStops: [e],
      gradientColorStopPositions: [vl, jt],
      inset: p(),
      margin: p(),
      opacity: F(),
      padding: x(),
      saturate: F(),
      scale: F(),
      sepia: T(),
      skew: F(),
      space: x(),
      translate: x()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ce]
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
        columns: [Pt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": U()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": U()
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
        object: [...A(), ce]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: O()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": O()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": O()
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
        z: ["auto", dr, ce]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: p()
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
        flex: ["1", "auto", "initial", "none", ce]
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
        order: ["first", "last", "none", dr, ce]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ur]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", dr, ce]
        }, ce]
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
        "grid-rows": [ur]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [dr, ce]
        }, ce]
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
        "auto-cols": ["auto", "min", "max", "fr", ce]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ce]
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
        justify: ["normal", ...P()]
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
        content: ["normal", ...P(), "baseline"]
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
        "place-content": [...P(), "baseline"]
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
        p: [N]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [N]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [N]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [N]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [N]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [N]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [N]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [N]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [N]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [E]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [E]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [E]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [E]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [E]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [E]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [E]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [E]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [E]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [K]
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
        "space-y": [K]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ce, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ce, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ce, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Pt]
        }, Pt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ce, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ce, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ce, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ce, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Pt, jt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", rn]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ur]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ce]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Jt, rn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", vt, ce]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ce]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ce]
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
        "placeholder-opacity": [j]
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
        "text-opacity": [j]
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
        decoration: [...g(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", vt, jt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", vt, ce]
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
        indent: x()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ce]
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
        content: ["none", ce]
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
        "bg-opacity": [j]
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
        bg: [...A(), wl]
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
        bg: ["auto", "cover", "contain", yl]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, kl]
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
        from: [w]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [w]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [w]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [b]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [b]
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
        "border-opacity": [j]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...g(), "hidden"]
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
        "divide-opacity": [j]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: g()
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
        outline: ["", ...g()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [vt, ce]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [vt, jt]
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
        ring: m()
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
        "ring-opacity": [j]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [vt, jt]
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
        shadow: ["", "inner", "none", Pt, Nl]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ur]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [j]
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
        blur: [r]
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
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Pt, ce]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [S]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [R]
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
        "backdrop-blur": [r]
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
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [j]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [S]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [R]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ce]
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
        ease: ["linear", "in", "out", "in-out", ce]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", ce]
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
        rotate: [dr, ce]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [z]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [z]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [C]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [C]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ce]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ce]
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
        "scroll-m": x()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": x()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": x()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": x()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": x()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": x()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": x()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": x()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": x()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": x()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": x()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": x()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": x()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": x()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": x()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": x()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": x()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": x()
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
        "will-change": ["auto", "scroll", "contents", "transform", ce]
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
        stroke: [vt, jt, rn]
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
}, gt = /* @__PURE__ */ dl(Tl);
function M(...e) {
  return gt(be(e));
}
const No = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Eo = be, De = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return Eo(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: o, defaultVariants: s } = t, a = Object.keys(o).map((u) => {
    const d = r == null ? void 0 : r[u], f = s == null ? void 0 : s[u];
    if (d === null) return null;
    const h = No(d) || No(f);
    return o[u][h];
  }), l = r && Object.entries(r).reduce((u, d) => {
    let [f, h] = d;
    return h === void 0 || (u[f] = h), u;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, d) => {
    let { class: f, className: h, ...b } = d;
    return Object.entries(b).every((w) => {
      let [v, E] = w;
      return Array.isArray(E) ? E.includes({
        ...s,
        ...l
      }[v]) : {
        ...s,
        ...l
      }[v] === E;
    }) ? [
      ...u,
      f,
      h
    ] : u;
  }, []);
  return Eo(e, a, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, de = ({
  icon: e,
  className: t,
  size: r,
  color: n,
  rotate: o,
  flip: s,
  spin: a,
  inline: l = !0,
  mode: c = "svg",
  ...u
}) => {
  const [d, f] = te(null), [h, b] = te(!0), [w, v] = te(null);
  return ue(() => {
    let E = !0;
    return (async () => {
      try {
        const { Icon: N } = await import("./iconify-Dqt3MVen.mjs");
        E && (f(() => N), b(!1));
      } catch (N) {
        console.error("Failed to load icon:", N), E && (v(N), b(!1));
      }
    })(), () => {
      E = !1;
    };
  }, []), h ? /* @__PURE__ */ i.jsx("span", { style: { width: r, height: r } }) : w || !d ? null : /* @__PURE__ */ i.jsx(
    d,
    {
      icon: e,
      className: M(
        a && "animate-spin",
        t
      ),
      style: {
        color: n,
        transform: `rotate(${o || 0}deg)`
      },
      height: r,
      width: r,
      flip: s,
      inline: l,
      mode: c,
      ...u
    }
  );
}, Sl = De(
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
), Ds = Ie(
  ({
    className: e,
    variant: t = "default",
    size: r = "md",
    rounded: n = "xl",
    error: o = !1,
    errorText: s,
    helperText: a,
    label: l,
    required: c = !1,
    labelPlacement: u = "top",
    fullWidth: d = !1,
    leftIcon: f,
    rightIcon: h,
    onRightIconClick: b,
    id: w,
    ...v
  }, E) => {
    const j = w || ie.useId(), N = `${j}-helper`, S = `${j}-error`, L = /* @__PURE__ */ i.jsxs("div", { className: M("relative", !d && "inline-block"), children: [
      f && /* @__PURE__ */ i.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ i.jsx(de, { icon: f, className: "w-4 h-4" }) }),
      /* @__PURE__ */ i.jsx(
        "input",
        {
          id: j,
          type: "text",
          ref: E,
          className: M(
            Sl({ variant: o ? "error" : t, size: r, rounded: n, fullWidth: d }),
            f && "pl-10",
            h && "pr-10",
            e
          ),
          "aria-describedby": o ? S : a ? N : void 0,
          "aria-invalid": o,
          "aria-required": c,
          ...v
        }
      ),
      h && /* @__PURE__ */ i.jsx(
        "div",
        {
          className: M(
            "absolute right-3 top-1/2 -translate-y-1/2 text-neutral",
            b && "cursor-pointer hover:text-primary-600"
          ),
          onClick: b,
          role: b ? "button" : void 0,
          tabIndex: b ? 0 : void 0,
          children: /* @__PURE__ */ i.jsx(de, { icon: h, className: "w-4 h-4" })
        }
      )
    ] }), R = /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      o && s && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger", id: S, children: s }),
      !o && a && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral", id: N, children: a })
    ] });
    return u === "left" ? /* @__PURE__ */ i.jsx("div", { className: M(d ? "w-full" : "inline-block", e), children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-start gap-4", children: [
      l && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: j,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            l,
            c && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: M("flex-1", !d && "inline-block"), children: [
        L,
        R
      ] })
    ] }) }) : /* @__PURE__ */ i.jsxs("div", { className: M(d ? "w-full" : "inline-block", e), children: [
      l && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: j,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            l,
            c && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      L,
      R
    ] });
  }
);
Ds.displayName = "Input";
const Ur = ie.forwardRef(
  ({ className: e, children: t, selected: r, disabled: n, ...o }, s) => /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: s,
      className: M(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
        "hover:bg-primary-50",
        r && "bg-primary-50 text-primary-900",
        n && "pointer-events-none opacity-50",
        e
      ),
      ...o,
      children: t
    }
  )
);
Ur.displayName = "SelectItem";
const zs = typeof window < "u", it = () => zs ? window : {
  innerHeight: 0,
  innerWidth: 0,
  addEventListener: () => {
  },
  removeEventListener: () => {
  }
}, Ge = () => zs ? document : {
  addEventListener: () => {
  },
  removeEventListener: () => {
  },
  dispatchEvent: () => {
  }
}, nn = "autocomplete-dropdown-opened", Cl = Ie(
  ({
    className: e,
    options: t,
    onSelect: r,
    isOpen: n,
    loading: o = !1,
    renderOption: s,
    variant: a = "default",
    size: l = "md",
    rounded: c = "xl",
    leftIcon: u,
    rightIcon: d,
    error: f = !1,
    errorText: h,
    helperText: b,
    label: w,
    required: v = !1,
    labelPlacement: E = "top",
    fullWidth: j = !1,
    value: N,
    onChange: S,
    onFocus: L,
    onBlur: R,
    showClear: C = !1,
    onClear: K,
    searchType: z = "include",
    initialItemsToShow: I,
    itemsToLoad: O = 10,
    maxDropdownHeight: p = 300,
    noOptionsMessage: x = "No options found",
    scrollMoreMessage: m = "",
    allOptionsShownMessage: $ = "",
    ...A
  }, g) => {
    const [k, P] = te(!1), [T, U] = te(N || ""), [F, H] = te(I || 0), ne = re(null), B = re(null), W = re(null), q = re(null), _ = n !== void 0, xe = `autocomplete-${ie.useId().replace(/:/g, "")}`, fe = () => {
      if (!k || !B.current || !W.current) return;
      const { bottom: V, top: ee, left: D, width: oe } = B.current.getBoundingClientRect(), Y = W.current, ve = it(), le = ve.innerHeight - V, je = ee, ct = Math.min(p, 300), Ot = le < ct, Mt = je > le, ht = Ot && Mt;
      Object.assign(Y.style, {
        position: "fixed",
        left: `${D}px`,
        width: `${oe}px`
      }), ht ? Object.assign(Y.style, {
        bottom: `${ve.innerHeight - ee + 4}px`,
        top: "auto",
        maxHeight: `${je - 8}px`
      }) : Object.assign(Y.style, {
        top: `${V + 4}px`,
        bottom: "auto",
        maxHeight: `${le - 8}px`
      });
    };
    ue(() => {
      const V = it(), ee = Ge(), D = () => {
        k && fe();
      }, oe = () => {
        k && fe();
      }, Y = (le) => {
        le.detail.id !== xe && P(!1);
      }, ve = (le) => {
        const je = le.target;
        ne.current && !ne.current.contains(je) && W.current && !W.current.contains(je) && P(!1);
      };
      return k && (fe(), V.addEventListener("scroll", D, !0), V.addEventListener("resize", oe)), ee.addEventListener(nn, Y), ee.addEventListener("click", ve), () => {
        V.removeEventListener("scroll", D, !0), V.removeEventListener("resize", oe), ee.removeEventListener(nn, Y), ee.removeEventListener("click", ve);
      };
    }, [k, xe]), ue(() => {
      U(N || "");
    }, [N]);
    const Ue = (V) => {
      const { value: ee } = V.target;
      if (U(ee), !ee.trim()) {
        P(!1);
        return;
      }
      const D = t.some(({ label: oe }) => {
        const Y = ee.toLowerCase().trim(), ve = oe.toLowerCase();
        return z === "startsWith" ? ve.startsWith(Y) : ve.includes(Y);
      });
      P(D), S == null || S(V);
    }, He = (V) => {
      V.stopPropagation(), U(""), K == null || K();
      const ee = new Event("change");
      ee.target = { value: "" }, S == null || S(ee);
    }, Se = (V) => {
      var Y;
      if (!V) return;
      const { value: ee, label: D } = V;
      U(D), P(!1), r == null || r(ee);
      const oe = new CustomEvent("autocomplete-select", {
        detail: { selectedOption: V }
      });
      (Y = B.current) == null || Y.dispatchEvent(oe);
    }, Ye = (V) => {
      R == null || R(V);
    }, Ee = t.filter(({ label: V }) => {
      const ee = T.toLowerCase().trim(), D = V.toLowerCase();
      return z === "startsWith" ? D.startsWith(ee) : D.includes(ee);
    }), et = (V) => {
      _ || (Ge().dispatchEvent(
        new CustomEvent(nn, {
          detail: { id: xe }
        })
      ), Ee.length > 0 && P(!0)), L == null || L(V);
    }, tt = () => {
      if (!q.current || I === void 0 || I <= 0) return;
      const { scrollTop: V, scrollHeight: ee, clientHeight: D } = q.current;
      V + D >= ee - 10 && H((Y) => Math.min(Y + O, Ee.length));
    };
    ue(() => {
      I !== void 0 && I > 0 && H(I);
    }, [T, I]);
    const We = I !== void 0 && I > 0 ? Ee.slice(0, F) : Ee, ze = (V, ee) => V ? V.replace(/\{(\w+)\}/g, (D, oe) => {
      var Y;
      return ((Y = ee[oe]) == null ? void 0 : Y.toString()) || D;
    }) : "", dt = _ ? n : k, ut = C && T && !A.disabled && !A.readOnly, Fe = ut ? "mdi:close" : d, Nt = (V) => {
      if (!(!dt || We.length === 0))
        switch (V.key) {
          case "Enter":
            V.preventDefault(), We.length === 1 && Se(We[0]);
            break;
          case "Tab":
            We.length === 1 && (V.preventDefault(), Se(We[0]));
            break;
          case "Escape":
            V.preventDefault(), P(!1);
            break;
        }
    }, bt = () => {
      if (!dt) return null;
      const V = Ge();
      if (!("body" in V)) return null;
      const ee = /* @__PURE__ */ i.jsx(
        "div",
        {
          ref: W,
          className: "fixed z-[9999] min-w-[8rem] rounded-md border border-neutral-200 bg-white py-1 shadow-lg overflow-hidden",
          style: { maxHeight: `${p}px` },
          onClick: (D) => D.stopPropagation(),
          children: /* @__PURE__ */ i.jsx(
            "div",
            {
              ref: q,
              className: "overflow-auto",
              style: { maxHeight: `${p}px` },
              onScroll: tt,
              children: o ? /* @__PURE__ */ i.jsx("div", { className: "flex items-center justify-center py-2", children: /* @__PURE__ */ i.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" }) }) : We.length > 0 ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                We.map((D) => /* @__PURE__ */ i.jsx(
                  Ur,
                  {
                    value: D.value,
                    selected: D.label === T,
                    onClick: () => Se(D),
                    children: s ? s(D) : D.label
                  },
                  D.value
                )),
                I !== void 0 && I > 0 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                  F < Ee.length && m && /* @__PURE__ */ i.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500 text-center", children: ze(m, {
                    current: F,
                    total: Ee.length
                  }) }),
                  F >= Ee.length && Ee.length > 0 && $ && /* @__PURE__ */ i.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500 text-center", children: ze($, {
                    total: Ee.length
                  }) })
                ] })
              ] }) : /* @__PURE__ */ i.jsx("div", { className: "px-2 py-2 text-sm text-neutral", children: x })
            }
          )
        }
      );
      return It(ee, V.body);
    };
    return /* @__PURE__ */ i.jsxs("div", { ref: ne, className: M("relative", j ? "w-full" : "inline-block"), children: [
      /* @__PURE__ */ i.jsx("div", { ref: B, className: M(!j && "inline-block"), children: /* @__PURE__ */ i.jsx(
        Ds,
        {
          ref: g,
          value: T,
          onChange: Ue,
          onFocus: et,
          onBlur: Ye,
          onKeyDown: Nt,
          variant: a,
          size: l,
          rounded: c,
          leftIcon: u,
          rightIcon: Fe,
          error: f,
          errorText: h,
          helperText: b,
          label: w,
          required: v,
          labelPlacement: E,
          fullWidth: j,
          className: e,
          ...A,
          onClick: ut ? He : A.onClick
        }
      ) }),
      bt()
    ] });
  }
);
Cl.displayName = "AutoComplete";
const Rl = {
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
}, Ll = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
}, Al = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full"
}, Ip = ({
  items: e,
  multiple: t = !1,
  defaultOpenIds: r = [],
  openIds: n,
  onOpenChange: o,
  icon: s = "mdi:chevron-down",
  iconPosition: a = "right",
  className: l,
  contentClassName: c,
  variant: u = "primary",
  shadow: d = "none",
  rounded: f = "xl"
}) => {
  const [h, b] = te(r), w = n !== void 0 ? n : h, v = n !== void 0, E = (N) => {
    let S;
    t ? S = w.includes(N) ? w.filter((L) => L !== N) : [...w, N] : S = w.includes(N) ? [] : [N], v ? o == null || o(S) : b(S);
  }, j = Rl[u];
  return /* @__PURE__ */ i.jsx("div", { className: be("w-full space-y-2", l), children: e.map((N) => {
    const S = w.includes(N.id), L = !!N.disabled;
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: be(
          "border overflow-hidden",
          "bg-white",
          "border-gray-200",
          Ll[d],
          Al[f],
          "transition-shadow duration-200"
        ),
        children: [
          /* @__PURE__ */ i.jsxs(
            "button",
            {
              onClick: () => !L && E(N.id),
              disabled: L,
              className: be(
                "w-full flex items-center justify-between p-4",
                "text-left transition-colors",
                j.hover,
                S && j.active,
                j.text,
                L && "opacity-50 cursor-not-allowed"
              ),
              children: [
                a === "left" && /* @__PURE__ */ i.jsx(
                  "div",
                  {
                    className: be(
                      "mr-3 transition-transform duration-200",
                      S && "rotate-180"
                    ),
                    children: /* @__PURE__ */ i.jsx(de, { icon: s, className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ i.jsx("div", { className: "flex-1", children: N.title }),
                a === "right" && /* @__PURE__ */ i.jsx(
                  "div",
                  {
                    className: be(
                      "ml-3 transition-transform duration-200",
                      S && "rotate-180"
                    ),
                    children: /* @__PURE__ */ i.jsx(de, { icon: s, className: "w-5 h-5" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: be(
                "grid transition-all duration-200 ease-in-out",
                S ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              ),
              children: /* @__PURE__ */ i.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ i.jsx(
                "div",
                {
                  className: be(
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
}, Op = ({
  src: e,
  alt: t = "avatar",
  size: r = "medium",
  shape: n = "circle",
  className: o = "",
  variant: s = "cover"
}) => {
  const a = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16"
  }, l = {
    circle: "rounded-full",
    square: "rounded-lg"
  }, c = gt(
    "inline-flex items-center justify-center overflow-hidden bg-gray-200",
    a[r],
    l[n],
    o
  );
  return /* @__PURE__ */ i.jsx("div", { className: c, children: e ? /* @__PURE__ */ i.jsx(
    "img",
    {
      src: e,
      alt: t,
      className: gt("w-full h-full", s === "cover" ? "object-cover" : "object-contain")
    }
  ) : /* @__PURE__ */ i.jsx(
    "svg",
    {
      className: "w-6 h-6 text-gray",
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
}, Mp = ({
  children: e,
  variant: t = "primary",
  size: r = "medium",
  rounded: n = "xl",
  className: o = ""
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
  }, l = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full"
  }, c = gt(
    "inline-flex items-center font-medium",
    s[t],
    a[r],
    l[n],
    o
  );
  return /* @__PURE__ */ i.jsx("span", { className: c, children: e });
}, Il = De(
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
), Ke = Ie(
  ({
    className: e,
    variant: t = "primary",
    size: r = "md",
    rounded: n = "xl",
    fullWidth: o = !1,
    isLoading: s = !1,
    leftIcon: a,
    rightIcon: l,
    isIconOnly: c = !1,
    children: u,
    ...d
  }, f) => {
    const b = c || !!(a || l) && !u;
    return /* @__PURE__ */ i.jsxs(
      "button",
      {
        className: M(
          Il({
            variant: t,
            size: r,
            rounded: b ? "full" : n,
            fullWidth: o,
            isIconOnly: b,
            className: e
          })
        ),
        ref: f,
        disabled: d.disabled || s,
        ...d,
        children: [
          s && /* @__PURE__ */ i.jsx("span", { className: "animate-spin inline-block w-4 h-4 border-2 border-current border-r-transparent rounded-full" }),
          a && !s && /* @__PURE__ */ i.jsx(de, { icon: a, className: "w-4 h-4", inline: !0 }),
          u && /* @__PURE__ */ i.jsx("span", { children: u }),
          l && !s && /* @__PURE__ */ i.jsx(de, { icon: l, className: "w-4 h-4", inline: !0 })
        ]
      }
    );
  }
);
Ke.displayName = "Button";
const Ol = De(
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
), Yn = Ie(
  ({
    className: e,
    variant: t = "default",
    padding: r = "md",
    shadow: n = "none",
    rounded: o = "2xl",
    asChild: s = !1,
    ...a
  }, l) => /* @__PURE__ */ i.jsx(
    "div",
    {
      className: M(Ol({ variant: t, padding: r, shadow: n, rounded: o, className: e })),
      ref: l,
      ...a
    }
  )
);
Yn.displayName = "Card";
const on = ({
  label: e,
  error: t,
  disabled: r = !1,
  indeterminate: n = !1,
  variantSize: o = "sm",
  variant: s = "square",
  color: a = "primary",
  className: l = "",
  ...c
}) => {
  const u = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }, d = {
    primary: "checked:bg-primary-600 checked:border-primary-600 hover:border-primary-600",
    secondary: "checked:bg-secondary-600 checked:border-secondary-600 hover:border-secondary-600",
    success: "checked:bg-success-600 checked:border-success-600 hover:border-success-600",
    warning: "checked:bg-warning-600 checked:border-warning-600 hover:border-warning-600",
    error: "checked:bg-danger-600 checked:border-danger-600 hover:border-danger-600"
  }, f = t ? "border-danger-600 hover:border-danger-700" : "", b = gt(
    "border-2 transition-colors duration-200",
    "appearance-none cursor-pointer",
    "checked:bg-no-repeat checked:bg-center",
    s === "circle" ? 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=")]' : 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgM0w0LjUgOC41TDIgNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=")]',
    {
      square: "rounded",
      circle: "rounded-full"
    }[s],
    u[o],
    d[a],
    f,
    r && "opacity-50 cursor-not-allowed",
    l
  ), w = gt(
    "ml-2 text-sm font-medium",
    r && "opacity-50 cursor-not-allowed",
    t && "text-danger-600"
  );
  return /* @__PURE__ */ i.jsxs("div", { className: "items-center", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "checkbox",
          className: b,
          disabled: r,
          ref: (v) => {
            v && (v.indeterminate = n);
          },
          ...c
        }
      ),
      e && /* @__PURE__ */ i.jsx("label", { className: w, children: e })
    ] }),
    t && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-sm text-danger-600", children: t })
  ] });
}, sn = De(
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
), Ml = Ie(
  ({
    className: e,
    options: t = [],
    value: r,
    defaultValue: n = [],
    onChange: o,
    layout: s = "vertical",
    size: a = "md",
    error: l = !1,
    errorText: c,
    helperText: u,
    label: d,
    required: f = !1,
    labelPlacement: h = "top",
    fullWidth: b = !1,
    disabled: w = !1,
    variant: v = "square",
    color: E = "primary",
    checkboxSize: j = "sm",
    showSelectAll: N = !1,
    selectAllText: S = "Select All",
    indeterminateSelectAll: L = !0,
    gap: R,
    selectAllGap: C,
    id: K,
    ...z
  }, I) => {
    const O = K || ie.useId(), p = `${O}-helper`, x = `${O}-error`, m = `${O}-group`, [$, A] = ie.useState(n), g = r !== void 0 ? r : $, k = (_, X) => {
      const xe = X ? [...g, _] : g.filter((fe) => fe !== _);
      r === void 0 && A(xe), o == null || o(xe);
    }, P = (_) => {
      const X = _ ? t.map((xe) => xe.value) : [];
      r === void 0 && A(X), o == null || o(X);
    }, T = t.length > 0 && g.length === t.length, U = g.length > 0 && g.length < t.length, F = L && U, H = (_) => _ === "none" ? "gap-0" : _ === "xs" ? "gap-1" : _ === "sm" ? "gap-2" : _ === "md" ? "gap-3" : _ === "lg" ? "gap-4" : _ === "xl" ? "gap-6" : null, ne = H(R), B = H(C), W = /* @__PURE__ */ i.jsx("div", { className: M("relative", !b && "inline-block"), children: /* @__PURE__ */ i.jsxs(
      "fieldset",
      {
        ref: I,
        id: m,
        className: M(
          sn({ layout: s, size: a }),
          ne,
          e
        ),
        "aria-describedby": l ? x : u ? p : void 0,
        "aria-invalid": l,
        "aria-required": f,
        ...z,
        children: [
          N && t.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: M(
            "flex flex-col",
            B || ne || sn({ layout: "vertical", size: a })
          ), children: [
            /* @__PURE__ */ i.jsx(
              on,
              {
                label: S,
                checked: T,
                indeterminate: F,
                onChange: (_) => P(_.target.checked),
                disabled: w,
                variant: v,
                color: l ? "error" : E,
                variantSize: j,
                error: l ? " " : void 0
              }
            ),
            /* @__PURE__ */ i.jsx("div", { className: M(
              "flex",
              s === "vertical" && "flex-col",
              s === "horizontal" && "flex-row flex-wrap",
              s === "grid" && "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
              ne || sn({ layout: s, size: a })
            ), children: t.map((_) => /* @__PURE__ */ i.jsx(
              on,
              {
                label: _.label,
                checked: g.includes(_.value),
                onChange: (X) => k(_.value, X.target.checked),
                disabled: w || _.disabled,
                indeterminate: _.indeterminate,
                variant: v,
                color: l ? "error" : E,
                variantSize: j,
                error: l ? " " : void 0
              },
              _.value
            )) })
          ] }),
          !N && /* @__PURE__ */ i.jsx(i.Fragment, { children: t.map((_) => /* @__PURE__ */ i.jsx(
            on,
            {
              label: _.label,
              checked: g.includes(_.value),
              onChange: (X) => k(_.value, X.target.checked),
              disabled: w || _.disabled,
              indeterminate: _.indeterminate,
              variant: v,
              color: l ? "error" : E,
              variantSize: j,
              error: l ? " " : void 0
            },
            _.value
          )) })
        ]
      }
    ) }), q = /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      l && c && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger", id: x, children: c }),
      !l && u && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral", id: p, children: u })
    ] });
    return h === "left" ? /* @__PURE__ */ i.jsx("div", { className: M(b ? "w-full" : "inline-block", e), children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-start gap-4", children: [
      d && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: m,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            d,
            f && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: M("flex-1", !b && "inline-block"), children: [
        W,
        q
      ] })
    ] }) }) : /* @__PURE__ */ i.jsxs("div", { className: M(b ? "w-full" : "inline-block", e), children: [
      d && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: m,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            d,
            f && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      W,
      q
    ] });
  }
);
Ml.displayName = "CheckBoxGroup";
const _l = {
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
}, Dl = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5"
}, zl = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full"
}, _p = ({
  children: e,
  variant: t = "solid",
  color: r = "primary",
  size: n = "md",
  rounded: o = "xl",
  onClose: s,
  className: a,
  icon: l
}) => /* @__PURE__ */ i.jsxs(
  "div",
  {
    className: M(
      "inline-flex items-center gap-1.5 font-medium",
      _l[t][r],
      Dl[n],
      zl[o],
      a
    ),
    children: [
      l && /* @__PURE__ */ i.jsx("span", { className: "inline-flex items-center", children: /* @__PURE__ */ i.jsx(de, { icon: l, className: "w-4 h-4" }) }),
      e,
      s && /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: s,
          className: "ml-1 rounded-full hover:bg-black/10 p-0.5",
          "aria-label": "Close",
          children: /* @__PURE__ */ i.jsx(de, { icon: "mdi:close", className: "w-3 h-3" })
        }
      )
    ]
  }
);
var Fs = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(Cs, function() {
    return function(r, n) {
      n.prototype.isSameOrAfter = function(o, s) {
        return this.isSame(o, s) || this.isAfter(o, s);
      };
    };
  });
})(Fs);
var Fl = Fs.exports;
const Vl = /* @__PURE__ */ Rs(Fl);
var Vs = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(Cs, function() {
    return function(r, n) {
      n.prototype.isSameOrBefore = function(o, s) {
        return this.isSame(o, s) || this.isBefore(o, s);
      };
    };
  });
})(Vs);
var Bl = Vs.exports;
const Gl = /* @__PURE__ */ Rs(Bl);
Ne.extend(Vl);
Ne.extend(Gl);
const Hl = De(
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
), kn = Ie(
  ({
    value: e,
    onChange: t,
    minDate: r,
    maxDate: n,
    variant: o = "default",
    size: s = "md",
    rounded: a = "xl",
    disabled: l = !1,
    error: c = !1,
    errorText: u,
    helperText: d,
    label: f,
    required: h = !1,
    labelPlacement: b = "top",
    fullWidth: w = !1,
    className: v,
    placeholder: E = "Select date",
    leftIcon: j,
    rightIcon: N,
    monthsToShow: S = 1,
    valueFormatter: L,
    rangeStart: R,
    rangeEnd: C,
    closeOnSelect: K = !0,
    calendarFooter: z,
    format: I = "DD-MM-YYYY",
    allowInput: O = !1,
    ...p
  }, x) => {
    const [m, $] = te(!1), [A, g] = te(e), [k, P] = te(e || /* @__PURE__ */ new Date()), [T, U] = te(!1), [F, H] = te(""), ne = re(null), B = re(null), W = re(null), q = re(null), _ = re(null);
    Wn(x, () => _.current, []), ue(() => {
      g(e || void 0), H(e ? X(e, I) : "");
    }, [e, I]), ue(() => {
      H(A ? X(A, I) : "");
    }, [A, I]);
    const X = (V, ee) => {
      const D = V.getDate().toString().padStart(2, "0"), oe = (V.getMonth() + 1).toString().padStart(2, "0"), Y = V.getFullYear().toString();
      switch (ee) {
        case "DD-MM-YYYY":
          return `${D}-${oe}-${Y}`;
        case "YYYY-MM-DD":
          return `${Y}-${oe}-${D}`;
        case "MM-DD-YYYY":
          return `${oe}-${D}-${Y}`;
        default:
          return `${D}-${oe}-${Y}`;
      }
    }, xe = (V, ee) => {
      const oe = V.replace(/[^\d-]/g, "").split("-");
      if (oe.length !== 3) return null;
      let Y, ve, le;
      switch (ee) {
        case "DD-MM-YYYY":
          [Y, ve, le] = oe.map(Number);
          break;
        case "YYYY-MM-DD":
          [le, ve, Y] = oe.map(Number);
          break;
        case "MM-DD-YYYY":
          [ve, Y, le] = oe.map(Number);
          break;
        default:
          [Y, ve, le] = oe.map(Number);
      }
      if (isNaN(Y) || isNaN(ve) || isNaN(le) || ve < 1 || ve > 12 || Y < 1 || Y > 31 || le < 1900 || le > 2099) return null;
      const je = new Date(le, ve - 1, Y);
      return je.getDate() !== Y || je.getMonth() !== ve - 1 || je.getFullYear() !== le ? null : je;
    };
    ue(() => {
      if (T && q.current) {
        const V = Ne(k).year(), ee = q.current.querySelectorAll("[data-year]"), D = Array.from(ee).find(
          (oe) => parseInt(oe.getAttribute("data-year") || "0") === V
        );
        D && D.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center"
        });
      }
    }, [T, k]);
    const fe = () => {
      if (!m || !B.current || !W.current) return;
      const { bottom: V, left: ee, width: D, top: oe } = B.current.getBoundingClientRect(), Y = W.current, ve = it(), le = ve.innerHeight - V, je = oe, Ot = le < (S === 2 ? 400 : 350), Mt = je > le, ht = Ot && Mt;
      S === 2 ? (Object.assign(Y.style, {
        position: "fixed",
        left: `${ee}px`,
        minWidth: "500px",
        width: "auto",
        transform: ""
      }), ht ? Object.assign(Y.style, {
        bottom: `${ve.innerHeight - oe + 4}px`,
        top: "auto",
        maxHeight: `${je - 8}px`
      }) : Object.assign(Y.style, {
        top: `${V + 4}px`,
        bottom: "auto",
        maxHeight: `${le - 8}px`
      })) : (Object.assign(Y.style, {
        position: "fixed",
        left: `${ee + D / 2}px`,
        width: "320px",
        maxWidth: "100vw",
        transform: "translateX(-50%)"
      }), ht ? Object.assign(Y.style, {
        bottom: `${ve.innerHeight - oe + 4}px`,
        top: "auto",
        maxHeight: `${je - 8}px`
      }) : Object.assign(Y.style, {
        top: `${V + 4}px`,
        bottom: "auto",
        maxHeight: `${le - 8}px`
      }));
    };
    ue(() => {
      const V = it(), ee = Ge(), D = () => {
        m && fe();
      }, oe = () => {
        m && fe();
      }, Y = (ve) => {
        ve.key === "Escape" && m && ($(!1), U(!1));
      };
      return m && (fe(), V.addEventListener("scroll", D, !0), V.addEventListener("resize", oe), ee.addEventListener("keydown", Y)), () => {
        V.removeEventListener("scroll", D, !0), V.removeEventListener("resize", oe), ee.removeEventListener("keydown", Y);
      };
    }, [m]);
    const Ue = (V) => {
      if (R !== void 0 && C !== void 0)
        if (R && C)
          g(V), H(X(V, I)), t == null || t(V);
        else if (R) {
          const D = V;
          Ne(D).isBefore(R), g(D), H(X(D, I)), t == null || t(D), $(!1), U(!1);
        } else
          g(V), H(X(V, I)), t == null || t(V);
      else
        g(V), H(X(V, I)), t == null || t(V), $(!1), U(!1);
    }, He = () => {
      P(Ne(k).subtract(1, "month").toDate());
    }, Se = () => {
      P(Ne(k).add(1, "month").toDate());
    }, Ye = (V) => {
      const ee = Ne(V).startOf("month"), D = Ne(V).endOf("month"), oe = [];
      let Y = ee;
      for (; Y.isBefore(D) || Y.isSame(D, "day"); )
        oe.push(Y.toDate()), Y = Y.add(1, "day");
      return oe;
    }, Ee = (V) => !!(r && Ne(V).isBefore(r, "day") || n && Ne(V).isAfter(n, "day")), et = (V) => {
      if (!O) return;
      const D = V.target.value.replace(/[^\d-]/g, "");
      if (D.length < F.length) {
        H(D);
        return;
      }
      if (D.replace(/-/g, "").length > 8)
        return;
      let Y = D;
      I === "DD-MM-YYYY" ? (D.length === 2 && !D.includes("-") || D.length === 5 && D.split("-").length === 2) && (Y = D + "-") : I === "YYYY-MM-DD" ? (D.length === 4 && !D.includes("-") || D.length === 7 && D.split("-").length === 2) && (Y = D + "-") : I === "MM-DD-YYYY" && (D.length === 2 && !D.includes("-") || D.length === 5 && D.split("-").length === 2) && (Y = D + "-"), H(Y);
    }, tt = () => {
      if (!O) return;
      const V = xe(F, I);
      if (V) {
        if (r && V < r) {
          H(X(r, I)), g(r), t == null || t(r);
          return;
        }
        if (n && V > n) {
          H(X(n, I)), g(n), t == null || t(n);
          return;
        }
        g(V), t == null || t(V), H(X(V, I));
      } else
        H(A ? X(A, I) : "");
    }, We = () => {
      O && $(!1);
    }, ze = (V) => {
      O && V.key === "Enter" && (V.preventDefault(), tt());
    }, dt = (V) => {
      const ee = Ne(k).year(V).toDate();
      P(ee), U(!1);
    }, ut = () => {
      if (!T) return null;
      const V = Ne(k).year(), ee = 1900, oe = Array.from(
        { length: 2099 - ee + 1 },
        (Y, ve) => ee + ve
      );
      return /* @__PURE__ */ i.jsx(
        "div",
        {
          ref: q,
          className: "grid grid-cols-5 gap-2 p-2 overflow-y-auto max-h-[300px]",
          children: oe.map((Y) => /* @__PURE__ */ i.jsx(
            "div",
            {
              "data-year": Y,
              onClick: () => dt(Y),
              className: M(
                Y === V && "bg-primary-50 text-primary",
                "text-sm cursor-pointer p-2"
              ),
              children: Y
            },
            Y
          ))
        }
      );
    }, Fe = () => {
      if (!m) return null;
      const V = Ge();
      if (!("body" in V)) return null;
      const ee = Array.from({ length: S }).map(
        (D, oe) => Ne(k).add(oe, "month").toDate()
      );
      return It(
        /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "fixed inset-0 z-[9998]",
              onClick: () => {
                T || $(!1);
              }
            }
          ),
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: W,
              className: "fixed z-[9999] bg-white border border-gray-200 rounded-md shadow-lg",
              onClick: (D) => D.stopPropagation(),
              children: [
                /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between p-2 border-b border-gray-200", children: [
                  /* @__PURE__ */ i.jsx(
                    Ke,
                    {
                      onClick: He,
                      variant: "ghost",
                      size: "sm",
                      leftIcon: "mdi:chevron-left"
                    }
                  ),
                  /* @__PURE__ */ i.jsx("div", { className: "relative", children: /* @__PURE__ */ i.jsx("span", { className: "font-medium text-gray-900", children: S === 1 ? /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ i.jsx("span", { children: Ne(k).format("MMMM") }),
                    /* @__PURE__ */ i.jsxs(
                      "div",
                      {
                        className: "cursor-pointer flex items-center gap-1",
                        onClick: () => U(!T),
                        children: [
                          /* @__PURE__ */ i.jsx("span", { children: Ne(k).format("YYYY") }),
                          /* @__PURE__ */ i.jsx(Ke, { variant: "ghost", size: "sm", leftIcon: T ? "mdi:chevron-up" : "mdi:chevron-down" })
                        ]
                      }
                    )
                  ] }) : `${Ne(k).format("MMMM YYYY")} - ${Ne(
                    k
                  ).add(S - 1, "month").format("MMMM YYYY")}` }) }),
                  /* @__PURE__ */ i.jsx(
                    Ke,
                    {
                      onClick: Se,
                      variant: "ghost",
                      size: "sm",
                      rightIcon: "mdi:chevron-right"
                    }
                  )
                ] }),
                T ? ut() : /* @__PURE__ */ i.jsx(
                  "div",
                  {
                    className: M(
                      S === 2 ? "flex gap-5 p-2 mx-auto w-fit" : "justify-between p-2 mx-auto w-fit"
                    ),
                    children: ee.map((D, oe) => {
                      const Y = Ye(D), ve = Ne(D).startOf("month").day();
                      return /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col", children: [
                        /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-7 gap-y-1 my-1", children: [
                          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                            (le, je) => {
                              const ct = je === 0 || je === 6;
                              return /* @__PURE__ */ i.jsx(
                                "div",
                                {
                                  className: M(
                                    "text-center text-xs font-medium text-neutral",
                                    ct && "text-danger"
                                  ),
                                  children: le
                                },
                                le
                              );
                            }
                          ),
                          Array.from({ length: ve }).map(
                            (le, je) => /* @__PURE__ */ i.jsx("div", {}, `empty-${je}`)
                          ),
                          Y.map((le) => {
                            const je = A && Ne(le).isSame(A, "day"), ct = Ee(le), Ot = Ne(le).isSame(
                              D,
                              "month"
                            ), Mt = R && C && Ne(le).isSameOrAfter(R, "day") && Ne(le).isSameOrBefore(C, "day"), ht = R && Ne(le).isSame(R, "day"), jr = C && Ne(le).isSame(C, "day"), ir = Ne(le).day() === 0 || Ne(le).day() === 6, Et = R && C;
                            return /* @__PURE__ */ i.jsx("div", { className: "flex flex-col items-center justify-center", children: /* @__PURE__ */ i.jsx(
                              "div",
                              {
                                className: M(
                                  Mt && "rounded-none bg-primary-50",
                                  Et && ht && "rounded-l-full",
                                  Et && jr && "rounded-r-full"
                                ),
                                children: /* @__PURE__ */ i.jsx(
                                  "button",
                                  {
                                    onClick: () => !ct && Ue(le),
                                    disabled: ct,
                                    className: M(
                                      "p-2 text-sm transition-colors duration-200 w-10 h-10 rounded-full",
                                      ir && "!text-danger",
                                      je && "bg-primary !text-white hover:bg-primary-600 active:bg-primary-700",
                                      je && !Et && "rounded-full",
                                      !je && !ct && "hover:bg-primary-50 active:bg-primary-100",
                                      !Ot && "text-neutral-400",
                                      ct && "opacity-50 cursor-not-allowed",
                                      // inRange && "bg-primary-50 text-primary-900 rounded-none",
                                      Et && ht && "!bg-primary !text-white !rounded-full",
                                      Et && jr && "!bg-primary !text-white !rounded-full"
                                    ),
                                    children: Ne(le).format("D")
                                  },
                                  le.toString()
                                )
                              }
                            ) });
                          })
                        ] }),
                        z
                      ] }, oe);
                    })
                  }
                )
              ]
            }
          )
        ] }),
        V.body
      );
    }, Nt = /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: M("relative", !w && "inline-block"),
        ref: B,
        onClick: () => !l && !O && $(!m),
        children: [
          j && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: (V) => {
                V.stopPropagation(), l || $(!m);
              },
              children: /* @__PURE__ */ i.jsx(de, { icon: j, className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              ref: _,
              type: "text",
              value: O ? F : L ? L() : A ? X(A, I) : "",
              placeholder: O ? I : E,
              readOnly: !O,
              maxLength: O ? 10 : void 0,
              onChange: et,
              onBlur: tt,
              onFocus: We,
              onKeyDown: ze,
              className: M(
                Hl({ variant: c ? "error" : o, size: s, rounded: a, fullWidth: w }),
                j && "pl-10",
                N && "pr-10",
                v
              ),
              disabled: l,
              ...p
            }
          ),
          N && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: (V) => {
                V.stopPropagation(), l || $(!m);
              },
              children: /* @__PURE__ */ i.jsx(de, { icon: N, className: "w-4 h-4" })
            }
          )
        ]
      }
    ), bt = /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      u && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger", children: u }),
      !u && d && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral", children: d })
    ] });
    return b === "left" ? /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: M(w ? "w-full" : "inline-block", v),
        ref: ne,
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-start gap-4", children: [
            f && /* @__PURE__ */ i.jsxs("label", { className: "block text-sm text-neutral-900 pt-2", children: [
              f,
              h && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: M("flex-1", !w && "inline-block"), children: [
              Nt,
              bt
            ] })
          ] }),
          Fe()
        ]
      }
    ) : /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: M(w ? "w-full" : "inline-block", v),
        ref: ne,
        children: [
          f && /* @__PURE__ */ i.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
            f,
            h && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          Nt,
          bt,
          Fe()
        ]
      }
    );
  }
);
kn.displayName = "PrimitiveDatePicker";
const Wl = ({
  mode: e = "single",
  value: t,
  onChange: r,
  monthsToShow: n = 1,
  calendarFooter: o,
  error: s = !1,
  errorText: a,
  format: l = "DD-MM-YYYY",
  allowInput: c = !1,
  ...u
}) => {
  const [d, f] = te([
    void 0,
    void 0
  ]);
  if (e === "single") {
    const h = Array.isArray(t) ? t[0] : t;
    return /* @__PURE__ */ i.jsx(
      kn,
      {
        value: h === null ? void 0 : h,
        onChange: (b) => r == null ? void 0 : r(b),
        monthsToShow: n,
        calendarFooter: o,
        error: s,
        errorText: a,
        format: l,
        allowInput: c,
        ...u
      }
    );
  }
  if (e === "range") {
    let [h, b] = Array.isArray(t) ? t : d;
    const w = (E) => {
      !h || h && b ? (f([E, void 0]), r == null || r([E, void 0])) : h && !b && (E < h ? (f([E, h]), r == null || r([E, h])) : (f([h, E]), r == null || r([h, E])));
    }, v = () => {
      if (!h) return "";
      const E = (j) => j ? j.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }) : "";
      return h && b ? `${E(h)} - ${E(b)}` : E(h);
    };
    return /* @__PURE__ */ i.jsx(
      kn,
      {
        value: h,
        onChange: w,
        monthsToShow: n,
        placeholder: u.placeholder || "Select date range",
        valueFormatter: v,
        rangeStart: h,
        rangeEnd: b,
        closeOnSelect: !!b,
        calendarFooter: o,
        error: s,
        errorText: a,
        format: l,
        allowInput: c,
        ...u
      }
    );
  }
  return null;
};
Wl.displayName = "DatePicker";
const Bs = Ie(
  ({ children: e, onClose: t, className: r, ...n }, o) => /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: o,
      className: M("mb-4 flex items-center justify-between", r),
      ...n,
      children: [
        /* @__PURE__ */ i.jsx("div", { className: "flex-1", children: e }),
        t && /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: t,
            className: "rounded-full p-1 text-gray hover:bg-gray-100 hover:text-gray-700",
            "aria-label": "Close dialog",
            children: /* @__PURE__ */ i.jsx(de, { icon: "mdi:close", className: "h-5 w-5" })
          }
        )
      ]
    }
  )
), jo = {
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
}, Kl = {
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
}, Ul = Ie(
  ({
    isOpen: e,
    onClose: t,
    children: r,
    className: n,
    backdrop: o = "dark",
    header: s,
    closeOnBackdropClick: a = !0,
    size: l = "md",
    sizeClassName: c,
    rounded: u = "xl",
    position: d = "center",
    scrollBehavior: f = "normal",
    animationDuration: h = 300,
    animationDelay: b = 0,
    ...w
  }, v) => {
    const [E, j] = te(e), [N, S] = te(!1), L = re(!1);
    if (Ps(() => {
      if (e) {
        j(!0), S(!1);
        const x = Ge();
        "body" in x && (f !== "outside" ? (x.body.style.overflow = "hidden", L.current = !0) : L.current = !1);
        const m = requestAnimationFrame(() => S(!0));
        return () => cancelAnimationFrame(m);
      }
      S(!1);
      const p = setTimeout(() => {
        j(!1);
        const x = Ge();
        "body" in x && L.current && (x.body.style.overflow = "", L.current = !1);
      }, h + b);
      return () => clearTimeout(p);
    }, [e, f, h, b]), ue(() => {
      const p = (x) => {
        x instanceof KeyboardEvent && x.key === "Escape" && t();
      };
      return e && Ge().addEventListener("keydown", p), () => {
        Ge().removeEventListener("keydown", p);
      };
    }, [e, t]), !E) return null;
    const R = {
      blur: "backdrop-blur-sm bg-black/30",
      dark: "bg-black/50",
      transparent: "bg-transparent"
    }, C = () => {
      a && t();
    }, K = Ge();
    if (!("body" in K)) return null;
    const z = (p) => {
      switch (p) {
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
      if (f === "inside")
        return l === "fullscreen" || d === "left" || d === "right" ? "overflow-y-auto" : "max-h-screen overflow-y-auto";
    })(), O = {
      transitionDuration: `${h}ms`,
      transitionDelay: `${b}ms`
    };
    return It(
      /* @__PURE__ */ i.jsx(
        "div",
        {
          className: M(
            "fixed inset-0 z-50 flex transition-opacity",
            R[o],
            N ? "opacity-100" : "opacity-0",
            d === "center" && "items-center justify-center",
            d === "top" && "items-start justify-center",
            d === "bottom" && "items-end justify-center",
            d === "left" && "items-stretch justify-start",
            d === "right" && "items-stretch justify-end"
          ),
          style: O,
          onClick: C,
          children: /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: v,
              className: M(
                "relative transform bg-white p-6 shadow-xl transition-all",
                // Width/Max-width behavior depends on position.
                // If `sizeClassName` is provided, it takes precedence except in fullscreen mode.
                l === "fullscreen" ? jo.fullscreen : c ?? (d === "left" || d === "right" ? Kl[l] : jo[l]),
                // Position-based animations
                d === "center" && (N ? "scale-100 opacity-100" : "scale-95 opacity-0"),
                d === "left" && (N ? "translate-x-0 h-full" : "-translate-x-full h-full"),
                d === "right" && (N ? "translate-x-0 h-full" : "translate-x-full h-full"),
                d === "top" && (N ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"),
                d === "bottom" && (N ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"),
                n,
                l === "fullscreen" ? "rounded-none" : z(u),
                // Corner overrides so the edge touching the viewport is not rounded
                d === "left" && "rounded-l-none",
                d === "right" && "rounded-r-none",
                d === "top" && "rounded-t-none",
                d === "bottom" && "rounded-b-none",
                I
              ),
              style: O,
              onClick: (p) => p.stopPropagation(),
              ...w,
              children: [
                s && /* @__PURE__ */ i.jsx(Bs, { onClose: t, children: s }),
                r
              ]
            }
          )
        }
      ),
      K.body
    );
  }
), Yl = Ie(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ i.jsx(
    "h2",
    {
      ref: n,
      className: M("text-xl font-semibold text-gray-900", t),
      ...r,
      children: e
    }
  )
), ql = Ie(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ i.jsx("div", { ref: n, className: M("text-gray-600", t), ...r, children: e })
), Xl = Ie(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: n,
      className: M("mt-6 flex justify-end gap-3", t),
      ...r,
      children: e
    }
  )
);
Ul.displayName = "Dialog";
Yl.displayName = "DialogTitle";
ql.displayName = "DialogBody";
Xl.displayName = "DialogActions";
Bs.displayName = "DialogHeader";
const Zl = ({
  orientation: e = "horizontal",
  variant: t = "solid",
  color: r = "neutral",
  size: n = "sm",
  className: o = ""
}) => {
  const s = {
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
  }, c = {
    sm: e === "horizontal" ? "border-b" : "border-l",
    md: e === "horizontal" ? "border-b-2" : "border-l-2",
    lg: e === "horizontal" ? "border-b-4" : "border-l-4"
  }, u = gt(
    "inline-block",
    s[e],
    a[t],
    l[r],
    c[n],
    o
  );
  return /* @__PURE__ */ i.jsx("div", { className: u });
}, Jl = {
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
}, Ql = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
}, Po = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
}, Dp = ({
  accept: e = ["*"],
  maxSize: t = 5 * 1024 * 1024,
  // 5MB default
  multiple: r = !1,
  value: n = [],
  onChange: o,
  className: s,
  disabled: a = !1,
  placeholder: l = "Drag and drop files here or click to browse",
  variant: c = "default",
  shadow: u = "none",
  rounded: d = "lg",
  children: f,
  showFileList: h = !0,
  showPlaceholder: b = !0,
  showMaxSize: w = !0,
  icon: v = "mdi:upload"
}) => {
  const [E, j] = te(!1), [N, S] = te(null), L = re(null), R = pe((m) => {
    m.preventDefault(), a || j(!0);
  }, [a]), C = pe((m) => {
    m.preventDefault(), j(!1);
  }, []), K = pe((m) => m.size > t ? `File size exceeds ${t / (1024 * 1024)}MB limit` : e[0] !== "*" && !e.some(($) => $.startsWith(".") ? m.name.toLowerCase().endsWith($.toLowerCase()) : m.type.startsWith($)) ? `File type not allowed. Allowed types: ${e.join(", ")}` : null, [e, t]), z = pe((m) => {
    if (m.preventDefault(), j(!1), S(null), a) return;
    const $ = Array.from(m.dataTransfer.files), A = [], g = [];
    if ($.forEach((k) => {
      const P = K(k);
      P ? g.push(`${k.name}: ${P}`) : A.push(k);
    }), g.length > 0 && S(g.join(`
`)), A.length > 0) {
      const k = r ? [...n, ...A] : A;
      o == null || o(k);
    }
  }, [a, r, o, K, n]), I = pe((m) => {
    if (S(null), a || !m.target.files) return;
    const $ = Array.from(m.target.files), A = [], g = [];
    if ($.forEach((k) => {
      const P = K(k);
      P ? g.push(`${k.name}: ${P}`) : A.push(k);
    }), g.length > 0 && S(g.join(`
`)), A.length > 0) {
      const k = r ? [...n, ...A] : A;
      o == null || o(k);
    }
    L.current && (L.current.value = "");
  }, [a, r, o, K, n]), O = pe((m) => {
    const $ = [...n];
    $.splice(m, 1), o == null || o($);
  }, [o, n]), p = (m) => m.type.startsWith("image/") ? /* @__PURE__ */ i.jsx(de, { icon: "mdi:image", className: "w-5 h-5" }) : m.type.startsWith("text/") ? /* @__PURE__ */ i.jsx(de, { icon: "mdi:file-document", className: "w-5 h-5" }) : /* @__PURE__ */ i.jsx(de, { icon: "mdi:file", className: "w-5 h-5" }), x = Jl[c];
  return /* @__PURE__ */ i.jsxs("div", { className: be("w-full", s), children: [
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: be(
          "p-6 text-center transition-colors",
          !f && [
            "border-2 border-dashed",
            x.border,
            x.bg,
            E && x.active,
            !a && x.hover
          ],
          a && "opacity-50 cursor-not-allowed",
          Ql[u],
          Po[d],
          !f && "cursor-pointer"
        ),
        onDragOver: R,
        onDragLeave: C,
        onDrop: z,
        onClick: () => {
          var m;
          return !a && !f && ((m = L.current) == null ? void 0 : m.click());
        },
        children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              ref: L,
              type: "file",
              accept: e.join(","),
              multiple: r,
              onChange: I,
              className: "hidden",
              disabled: a
            }
          ),
          f ? /* @__PURE__ */ i.jsx("div", { onClick: () => {
            var m;
            return !a && ((m = L.current) == null ? void 0 : m.click());
          }, children: f }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(de, { icon: v, className: "w-12 h-12 mx-auto mb-4 text-neutral-400" }),
            b && /* @__PURE__ */ i.jsx("p", { className: be("text-neutral-600", x.text), children: l }),
            w && /* @__PURE__ */ i.jsxs("p", { className: "text-sm text-neutral mt-2", children: [
              "Max file size: ",
              t / (1024 * 1024),
              "MB"
            ] })
          ] })
        ]
      }
    ),
    N && /* @__PURE__ */ i.jsx("p", { className: "mt-2 text-sm text-danger", children: N }),
    h && n.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "mt-4 space-y-2", children: n.map((m, $) => /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: be(
          "flex items-center justify-between p-2",
          Po[d],
          x.bg
        ),
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-center space-x-2", children: [
            p(m),
            /* @__PURE__ */ i.jsx("span", { className: be("text-sm", x.text), children: m.name }),
            /* @__PURE__ */ i.jsxs("span", { className: "text-xs text-neutral", children: [
              "(",
              (m.size / 1024).toFixed(1),
              " KB)"
            ] })
          ] }),
          !a && /* @__PURE__ */ i.jsx(
            "button",
            {
              onClick: () => O($),
              className: "p-1 text-neutral hover:text-danger",
              children: /* @__PURE__ */ i.jsx(de, { icon: "mdi:close", className: "w-4 h-4" })
            }
          )
        ]
      },
      `${m.name}-${$}`
    )) })
  ] });
}, ec = De(
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
), zp = ({
  title: e,
  children: t,
  icon: r,
  variant: n = "default",
  rounded: o = "xl",
  showClose: s = !1,
  onClose: a,
  className: l
}) => {
  const c = () => {
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
  }, u = () => {
    if (r) return r;
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
  return /* @__PURE__ */ i.jsxs("div", { className: M(ec({ variant: n, rounded: o }), l), children: [
    r && /* @__PURE__ */ i.jsx(de, { icon: u(), className: M("h-5 w-5 flex-shrink-0", c()) }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex-1", children: [
      e && /* @__PURE__ */ i.jsx("h3", { className: "text-sm font-medium text-neutral-900", children: e }),
      /* @__PURE__ */ i.jsx("div", { className: "mt-1 text-sm text-neutral", children: t })
    ] }),
    s && /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        className: "ml-auto flex-shrink-0 text-neutral-400 hover:text-neutral",
        onClick: a,
        children: /* @__PURE__ */ i.jsx(de, { icon: "mdi:close", className: "h-5 w-5" })
      }
    )
  ] });
}, an = "select-dropdown-opened", tc = De(
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
), Gs = Ie(
  ({
    className: e,
    variant: t = "default",
    size: r = "md",
    rounded: n = "xl",
    options: o,
    label: s,
    error: a = !1,
    errorText: l,
    helperText: c,
    required: u = !1,
    placeholder: d,
    value: f,
    onChange: h,
    disabled: b = !1,
    position: w = "bottom",
    fullWidth: v = !1,
    children: E,
    leftIcon: j,
    rightIcon: N,
    ...S
  }, L) => {
    const [R, C] = te(!1), K = re(null), z = re(null), O = `select-${ie.useId().replace(/:/g, "")}`, p = () => {
      if (R && K.current && z.current) {
        const k = K.current.getBoundingClientRect(), P = z.current, T = it(), U = T.innerHeight - k.bottom, F = k.top, ne = k.bottom + P.offsetHeight + 4 >= T.innerHeight, B = F > U, W = ne && B;
        w === "bottom" || w === "top" ? (P.style.position = "fixed", P.style.left = `${k.left}px`, P.style.width = `${k.width}px`, w === "bottom" && W ? (P.style.bottom = `${T.innerHeight - k.top + 4}px`, P.style.top = "auto", P.style.maxHeight = `${F - 8}px`) : w === "bottom" ? (P.style.top = `${k.bottom + 4}px`, P.style.bottom = "auto", P.style.maxHeight = `${U - 8}px`) : w === "top" && !W ? (P.style.top = `${k.bottom + 4}px`, P.style.bottom = "auto", P.style.maxHeight = `${U - 8}px`) : (P.style.bottom = `${T.innerHeight - k.top + 4}px`, P.style.top = "auto", P.style.maxHeight = `${F - 8}px`)) : w === "left" ? (P.style.position = "fixed", P.style.right = `${T.innerWidth - k.left + 4}px`, P.style.top = `${k.top}px`, P.style.maxHeight = `${T.innerHeight - k.top - 8}px`) : w === "right" && (P.style.position = "fixed", P.style.left = `${k.right + 4}px`, P.style.top = `${k.top}px`, P.style.maxHeight = `${T.innerHeight - k.top - 8}px`);
      }
    };
    ue(() => {
      const k = it(), P = () => {
        R && p();
      }, T = () => {
        R && p();
      };
      return R && (p(), k.addEventListener("scroll", P, !0), k.addEventListener("resize", T)), () => {
        k.removeEventListener("scroll", P, !0), k.removeEventListener("resize", T);
      };
    }, [R, w]), ue(() => {
      const k = Ge(), P = (U) => {
        U.detail.id !== O && C(!1);
      }, T = (U) => {
        const F = U.target, H = K.current, ne = z.current;
        H && ne && !H.contains(F) && !ne.contains(F) && C(!1);
      };
      return k.addEventListener(an, P), k.addEventListener("click", T), () => {
        k.removeEventListener(an, P), k.removeEventListener("click", T);
      };
    }, [O]);
    const x = () => {
      if (b) return;
      if (R) {
        C(!1);
        return;
      }
      Ge().dispatchEvent(
        new CustomEvent(an, {
          detail: { id: O }
        })
      ), C(!0);
    }, m = () => {
      if (o) {
        const k = o.find((P) => P.value === f);
        return k == null ? void 0 : k.label;
      }
      if (E) {
        const P = wr.toArray(E).find(
          (T) => xr(T) && "value" in T.props && T.props.value === f
        );
        return xr(P) ? P.props.children : null;
      }
      return null;
    }, $ = (k) => {
      b || (h == null || h(k), C(!1));
    }, A = () => o ? o.map((k) => /* @__PURE__ */ i.jsx(
      Ur,
      {
        value: k.value,
        disabled: k.disabled,
        selected: k.value === f,
        onClick: () => {
          k.onClick && k.onClick(k.value), $(k.value);
        },
        children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
          k.icon,
          k.label
        ] })
      },
      k.value
    )) : E ? wr.map(E, (k) => xr(k) && "value" in k.props ? Kn(k, {
      selected: k.props.value === f,
      onClick: () => $(k.props.value)
    }) : null) : null, g = () => {
      if (!R || b) return null;
      const k = /* @__PURE__ */ i.jsx(
        "div",
        {
          ref: z,
          className: M(
            "fixed z-[9999] min-w-[8rem] border border-neutral-200 bg-white py-1 shadow-lg rounded-lg",
            w === "left" || w === "right" ? "w-max" : "w-full"
          ),
          onClick: (T) => T.stopPropagation(),
          style: {
            overflowY: "auto"
          },
          children: A()
        }
      ), P = Ge();
      return "body" in P ? It(k, P.body) : null;
    };
    return /* @__PURE__ */ i.jsxs("div", { className: M(v ? "w-full" : "inline-block"), ref: L, ...S, children: [
      s && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: O,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            s,
            u && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "div",
        {
          className: M("relative", !v && "inline-block"),
          onClick: x,
          children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                id: O,
                ref: K,
                type: "button",
                className: M(
                  tc({ variant: a ? "error" : t, size: r, rounded: n, fullWidth: v }),
                  "flex items-center justify-between",
                  b && "cursor-not-allowed opacity-50",
                  j && "pl-10",
                  N && "pr-10",
                  e
                ),
                "aria-haspopup": "listbox",
                "aria-expanded": R,
                "aria-describedby": a ? `${O}-error` : c ? `${O}-helper` : void 0,
                disabled: b,
                children: [
                  j && /* @__PURE__ */ i.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ i.jsx(de, { icon: j, className: "w-4 h-4" }) }),
                  /* @__PURE__ */ i.jsx("span", { className: "flex items-center gap-2 min-w-0 flex-1", children: /* @__PURE__ */ i.jsx("span", { className: M(
                    "truncate text-left",
                    m() ? "text-neutral-900" : "text-neutral"
                  ), children: m() || d }) }),
                  N ? /* @__PURE__ */ i.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ i.jsx(de, { icon: N, className: "w-4 h-4" }) }) : /* @__PURE__ */ i.jsx(
                    de,
                    {
                      icon: "mdi:chevron-down",
                      className: M("transition-transform flex-shrink-0 ml-2 w-4 h-4", R && "rotate-180")
                    }
                  )
                ]
              }
            ),
            g()
          ]
        }
      ),
      a && l && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger", id: `${O}-error`, children: l }),
      !a && c && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral", id: `${O}-helper`, children: c })
    ] });
  }
);
Gs.displayName = "Select";
const rc = ({
  currentPage: e,
  totalPages: t,
  totalData: r,
  onPageChange: n,
  siblingCount: o = 1,
  className: s,
  perPageOptions: a,
  perPage: l = 10,
  label: c = "",
  onPerPageChange: u
}) => {
  const d = (b, w) => {
    const v = w - b + 1;
    return Array.from({ length: v }, (E, j) => j + b);
  }, h = (() => {
    const b = o * 2 + 3, w = b + 2;
    if (t > w) {
      const v = Math.max(2, e - o), E = Math.min(t - 1, e + o);
      let j = d(v, E);
      const N = v > 2, S = t - E > 1, L = b - (j.length + 1);
      if (N && !S)
        j = [...d(v - L, v - 1), ...j];
      else if (!N && S) {
        const R = d(E + 1, E + L);
        j = [...j, ...R];
      } else N && S && (j = [...j]);
      return [1, ...j, t];
    }
    return d(1, t);
  })();
  return /* @__PURE__ */ i.jsxs(
    "nav",
    {
      className: be("flex items-center justify-between space-x-1", s),
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: "hidden sm:block text-sm text-neutral-700", children: [
          /* @__PURE__ */ i.jsx("b", { children: `${e} - ${t}` }),
          " dari ",
          r,
          " ",
          c
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
          a && a.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2 mr-4", children: [
            /* @__PURE__ */ i.jsx("span", { className: "text-neutral-700 text-sm", children: "Menampilkan" }),
            /* @__PURE__ */ i.jsx(
              Gs,
              {
                value: l == null ? void 0 : l.toString(),
                onChange: (b) => u && u(Number(b)),
                size: "sm",
                className: "w-16",
                fullWidth: !1,
                "aria-label": "Items per page",
                children: a.map((b) => /* @__PURE__ */ i.jsx(Ur, { value: b.toString(), children: b }, b))
              }
            ),
            /* @__PURE__ */ i.jsx("span", { className: "text-neutral-700 text-sm", children: "data per halaman" })
          ] }),
          /* @__PURE__ */ i.jsx(
            Ke,
            {
              variant: "ghost",
              onClick: () => n(e - 1),
              disabled: e === 1,
              className: be(
                "px-3 py-1 rounded-md text-sm",
                e === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
              ),
              children: /* @__PURE__ */ i.jsx(de, { size: "18", icon: "mdi:chevron-left" })
            }
          ),
          h.map((b, w) => {
            const v = b === e, E = typeof b == "string" && b === "...";
            return /* @__PURE__ */ i.jsx(
              Ke,
              {
                variant: "ghost",
                onClick: () => !E && n(b),
                className: be(
                  "px-3 py-1 rounded-md text-sm",
                  v ? "bg-primary text-white hover:bg-primary" : "text-gray-700",
                  E && "cursor-default"
                ),
                children: b
              },
              w
            );
          }),
          /* @__PURE__ */ i.jsx(
            Ke,
            {
              variant: "ghost",
              onClick: () => n(e + 1),
              disabled: e === t,
              className: be(
                "px-3 py-1 rounded-md text-sm",
                e === t ? "text-gray-400 cursor-not-allowed" : "text-gray-700"
              ),
              children: /* @__PURE__ */ i.jsx(de, { size: "18", icon: "mdi:chevron-right" })
            }
          )
        ] })
      ]
    }
  );
}, nc = ({
  label: e,
  checked: t = !1,
  disabled: r = !1,
  onChange: n,
  name: o,
  value: s,
  error: a,
  color: l = "primary",
  variantSize: c = "sm"
}) => {
  const u = (h) => {
    n == null || n(h.target.checked);
  }, d = {
    sm: "h-4 w-4 before:h-2 before:w-2",
    md: "h-5 w-5 before:h-2.5 before:w-2.5",
    lg: "h-6 w-6 before:h-3 before:w-3"
  }, f = {
    primary: "text-primary-600 checked:border-primary-600 hover:border-primary-600",
    secondary: "text-secondary-600 checked:border-secondary-600 hover:border-secondary-600",
    success: "text-success-600 checked:border-success-600 hover:border-success-600",
    warning: "text-warning-600 checked:border-warning-600 hover:border-warning-600",
    error: "text-danger-600 checked:border-danger-600 hover:border-danger-600"
  };
  return /* @__PURE__ */ i.jsxs(
    "label",
    {
      className: gt(
        "inline-flex items-center gap-2 cursor-pointer select-none",
        r && "opacity-60 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "radio",
            name: o,
            value: s,
            checked: t,
            disabled: r,
            onChange: u,
            className: gt(
              // Base control
              "appearance-none rounded-full border-2 bg-white shrink-0",
              // Center a pseudo-element dot
              "grid place-items-center",
              // Inner dot (smooth, perfectly centered)
              "before:content-[''] before:rounded-full before:bg-current before:scale-0",
              "before:transition-transform before:duration-150 before:ease-out",
              "checked:before:scale-100",
              // Sizes
              d[c],
              // Colors (currentColor + checked border color)
              f[l],
              t ? "" : a ? "border-danger-600" : "border-gray-300",
              !t && a && "hover:border-danger-700",
              // Focus only when keyboard navigating (prevents extra “ring” on click)
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-current"
            )
          }
        ),
        e && /* @__PURE__ */ i.jsx(
          "span",
          {
            className: gt(
              "text-sm font-medium leading-none",
              a && "text-danger-600"
            ),
            children: e
          }
        )
      ]
    }
  );
}, oc = De(
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
), sc = Ie(
  ({
    className: e,
    options: t = [],
    value: r,
    defaultValue: n,
    onChange: o,
    layout: s = "vertical",
    size: a = "md",
    error: l = !1,
    errorText: c,
    helperText: u,
    label: d,
    required: f = !1,
    labelPlacement: h = "top",
    fullWidth: b = !1,
    disabled: w = !1,
    name: v,
    gap: E,
    color: j = "primary",
    radioSize: N = "sm",
    id: S,
    ...L
  }, R) => {
    const C = S || ie.useId(), K = `${C}-helper`, z = `${C}-error`, I = `${C}-group`, O = v || `radio-group-${C}`, [p, x] = ie.useState(n), m = r !== void 0 ? r : p, $ = (T) => {
      r === void 0 && x(T), o == null || o(T);
    }, g = ((T) => T === "none" ? "gap-0" : T === "xs" ? "gap-1" : T === "sm" ? "gap-2" : T === "md" ? "gap-3" : T === "lg" ? "gap-4" : T === "xl" ? "gap-6" : null)(E), k = /* @__PURE__ */ i.jsx("div", { className: M("relative", !b && "inline-block"), children: /* @__PURE__ */ i.jsx(
      "fieldset",
      {
        ref: R,
        id: I,
        className: M(
          oc({ layout: s, size: a }),
          g,
          e
        ),
        "aria-describedby": l ? z : u ? K : void 0,
        "aria-invalid": l,
        "aria-required": f,
        ...L,
        children: t.map((T) => /* @__PURE__ */ i.jsx(
          nc,
          {
            label: T.label,
            checked: m === T.value,
            onChange: () => $(T.value),
            disabled: w || T.disabled,
            name: O,
            value: T.value,
            color: l ? "error" : j,
            error: l ? " " : void 0,
            variantSize: N
          },
          T.value
        ))
      }
    ) }), P = /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      l && c && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger", id: z, children: c }),
      !l && u && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral", id: K, children: u })
    ] });
    return h === "left" ? /* @__PURE__ */ i.jsx("div", { className: M(b ? "w-full" : "inline-block", e), children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-start gap-4", children: [
      d && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: I,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            d,
            f && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: M("flex-1", !b && "inline-block"), children: [
        k,
        P
      ] })
    ] }) }) : /* @__PURE__ */ i.jsxs("div", { className: M(b ? "w-full" : "inline-block", e), children: [
      d && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: I,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            d,
            f && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      k,
      P
    ] });
  }
);
sc.displayName = "RadioGroup";
const To = De("animate-pulse bg-neutral-200", {
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
    },
    pulseVariant: {
      default: "",
      "left-to-right": "relative overflow-hidden"
    }
  },
  defaultVariants: {
    variant: "default",
    rounded: "md",
    fullWidth: !1,
    pulseVariant: "default"
  }
}), ac = ({
  width: e,
  height: t,
  variant: r = "default",
  rounded: n = "xl",
  fullWidth: o = !1,
  pulseVariant: s = "default",
  className: a
}) => s === "left-to-right" ? /* @__PURE__ */ i.jsxs("div", { className: "relative overflow-hidden", children: [
  /* @__PURE__ */ i.jsx(
    "div",
    {
      className: M(
        To({ variant: r, rounded: n, fullWidth: o, pulseVariant: "default" }),
        a
      ),
      style: {
        width: !o && typeof e == "number" ? `${e}px` : e,
        height: typeof t == "number" ? `${t}px` : t
      }
    }
  ),
  /* @__PURE__ */ i.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-pulse-left-to-right pointer-events-none" })
] }) : /* @__PURE__ */ i.jsx(
  "div",
  {
    className: M(
      To({ variant: r, rounded: n, fullWidth: o, pulseVariant: s }),
      a
    ),
    style: {
      width: !o && typeof e == "number" ? `${e}px` : e,
      height: typeof t == "number" ? `${t}px` : t
    }
  }
), Fp = ({
  min: e = 0,
  max: t = 100,
  step: r = 1,
  value: n,
  defaultValue: o = e,
  onChange: s,
  className: a,
  disabled: l = !1,
  showValue: c = !1,
  marks: u = [],
  range: d = !1
}) => {
  const f = d, [h, b] = te(
    n !== void 0 ? n : o !== void 0 ? o : f ? [e, t] : e
  ), [w, v] = te(null), E = re(null), j = n !== void 0 ? n : h, [N, S] = f ? Array.isArray(j) ? j : [e, t] : [typeof j == "number" ? j : e, t], L = (g) => Math.min(Math.max(g, e), t), R = (g) => {
    if (l) return;
    let k;
    f && Array.isArray(g) ? k = [L(g[0]), L(g[1])] : !f && typeof g == "number" ? k = L(g) : k = f ? [e, t] : e, n === void 0 && b(k), s == null || s(k);
  }, C = (g) => {
    if (!E.current) return e;
    const k = E.current.getBoundingClientRect(), T = (g - k.left) / k.width, U = e + (t - e) * T, F = Math.round(U / r) * r;
    return L(F);
  }, K = (g) => (k) => {
    l || (v(g), k.stopPropagation());
  }, z = (g) => {
    if (!l)
      if (!f)
        v(0), I(g, 0);
      else {
        const k = C(g.clientX), P = Math.abs(k - N), T = Math.abs(k - S), U = P < T ? 0 : 1;
        v(U), I(g, U);
      }
  }, I = ie.useCallback((g, k) => {
    const P = C(g.clientX);
    if (!f)
      R(P);
    else {
      let T = [N, S];
      k === 0 ? T = [Math.min(P, S - r), S] : T = [N, Math.max(P, N + r)], T[0] > T[1] && (T = [T[1], T[0]]), R(T);
    }
  }, [f, N, S, r, R, C]), O = ie.useRef(w);
  O.current = w;
  const p = ie.useCallback(function(g) {
    O.current === null || l || I(g, O.current);
  }, [l, I]), x = ie.useCallback(function() {
    v(null);
  }, []);
  ue(() => {
    if (w !== null) {
      const g = it();
      return g.addEventListener("mousemove", p), g.addEventListener("mouseup", x), () => {
        g.removeEventListener("mousemove", p), g.removeEventListener("mouseup", x);
      };
    }
  }, [w, p, x]);
  const m = (g) => (g - e) / (t - e) * 100, $ = m(N), A = m(S);
  return /* @__PURE__ */ i.jsxs("div", { className: be("relative w-full", a), children: [
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        ref: E,
        className: be(
          "relative h-2 bg-gray-200 rounded-full cursor-pointer",
          l && "opacity-50 cursor-not-allowed"
        ),
        onMouseDown: z,
        children: [
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "absolute h-full bg-primary rounded-full",
              style: { left: `${f ? $ : 0}%`, width: `${f ? A - $ : $}%` }
            }
          ),
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: be(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                l && "cursor-not-allowed"
              ),
              style: { left: `${$}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: K(0)
            }
          ),
          f && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: be(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                l && "cursor-not-allowed"
              ),
              style: { left: `${A}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: K(1)
            }
          )
        ]
      }
    ),
    u.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "flex justify-between mt-2", children: u.map((g) => /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "text-xs text-gray",
        style: { left: `${(g.value - e) / (t - e) * 100}%` },
        children: g.label
      },
      g.value
    )) }),
    c && /* @__PURE__ */ i.jsx("div", { className: "mt-2 text-sm text-gray-600", children: f ? `${N} - ${S}` : N })
  ] });
}, ic = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8"
}, lc = {
  primary: "text-primary",
  warning: "text-warning",
  default: "text-default-400"
}, Vp = ({
  rating: e,
  maxRating: t = 5,
  size: r = "md",
  color: n = "primary",
  readOnly: o = !1,
  onRatingChange: s,
  className: a
}) => {
  const [l, c] = te(null), u = (b) => {
    o || c(b);
  }, d = () => {
    o || c(null);
  }, f = (b) => {
    !o && s && s(b);
  }, h = l !== null ? l : e;
  return /* @__PURE__ */ i.jsx("div", { className: M("flex items-center gap-1", a), children: [...Array(t)].map((b, w) => {
    const v = w + 1, E = v <= h, j = l !== null && v <= l;
    return /* @__PURE__ */ i.jsx(
      "button",
      {
        className: M(
          "transition-colors duration-200",
          ic[r],
          E || j ? lc[n] : "text-default-200",
          !o && "cursor-pointer"
        ),
        onMouseEnter: () => u(v),
        onMouseLeave: d,
        onClick: () => f(v),
        disabled: o,
        "aria-label": `Rate ${v} out of ${t}`,
        children: /* @__PURE__ */ i.jsx(
          de,
          {
            icon: E || j ? "mdi:star" : "mdi:star-outline",
            className: "w-full h-full"
          }
        )
      },
      w
    );
  }) });
}, cc = {
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
}, dc = {
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4"
}, Bp = ({
  status: e,
  size: t = "md",
  withLabel: r = !1,
  className: n
}) => {
  const { bgColor: o, label: s } = cc[e], a = dc[t];
  return /* @__PURE__ */ i.jsxs("div", { className: M("flex items-center gap-2", n), children: [
    /* @__PURE__ */ i.jsx("div", { className: M("rounded-full animate-pulse", o, a) }),
    r && /* @__PURE__ */ i.jsx("span", { className: "text-sm", children: s })
  ] });
}, Hs = (e, t) => {
  if (t) return t;
  switch (e) {
    case "completed":
      return "mdi:check";
    case "active":
      return "mdi:circle-medium";
    default:
      return "mdi:circle-outline";
  }
}, Ws = (e) => {
  switch (e) {
    case "completed":
      return "text-white bg-primary ring-4 ring-primary-50";
    case "active":
      return "text-primary bg-primary-50 ring-4 ring-primary-50";
    default:
      return "text-neutral bg-neutral-50 ring-4 ring-neutral-50";
  }
}, uc = ({
  steps: e,
  activeStep: t,
  className: r,
  variant: n = "default"
}) => /* @__PURE__ */ i.jsx("div", { className: M("flex flex-row items-center w-full justify-between", r), children: e.map((o, s) => {
  const a = s < t ? "completed" : s === t ? "active" : "pending";
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: "flex items-center flex-1",
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: M(
          "flex flex-col items-center z-10",
          n === "default" ? "gap-4" : "gap-2",
          n === "default" ? "px-5" : "px-3"
        ), children: [
          n === "default" && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: M(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                Ws(a)
              ),
              children: /* @__PURE__ */ i.jsx(
                de,
                {
                  icon: Hs(a, o.icon),
                  className: "h-5 w-5"
                }
              )
            }
          ),
          /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col items-center text-center", children: [
            /* @__PURE__ */ i.jsx(
              "span",
              {
                className: M(
                  "text-sm font-medium",
                  a === "active" ? "text-primary" : a === "completed" ? "text-neutral-900" : "text-neutral"
                ),
                children: o.label
              }
            ),
            o.description && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-neutral", children: o.description })
          ] })
        ] }),
        s < e.length - 1 && /* @__PURE__ */ i.jsx(
          Zl,
          {
            className: M(
              "transition-all duration-200",
              s < t ? "bg-primary" : "bg-neutral-200"
            )
          }
        )
      ]
    },
    s
  );
}) }), fc = ({
  steps: e,
  activeStep: t,
  className: r,
  variant: n = "default"
}) => /* @__PURE__ */ i.jsx("div", { className: M("flex flex-col items-start gap-8", r), children: e.map((o, s) => {
  const a = s < t ? "completed" : s === t ? "active" : "pending";
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: "flex flex-row w-full items-center relative",
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: M(
          "flex flex-row items-center z-10",
          n === "default" ? "gap-4" : "gap-2"
        ), children: [
          n === "default" && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: M(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                Ws(a)
              ),
              children: /* @__PURE__ */ i.jsx(
                de,
                {
                  icon: Hs(a, o.icon),
                  className: "h-5 w-5"
                }
              )
            }
          ),
          /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col items-start", children: [
            /* @__PURE__ */ i.jsx(
              "span",
              {
                className: M(
                  "text-sm font-medium",
                  a === "active" ? "text-primary00" : a === "completed" ? "text-neutral-900" : "text-neutral"
                ),
                children: o.label
              }
            ),
            o.description && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-neutral", children: o.description })
          ] })
        ] }),
        s < e.length - 1 && /* @__PURE__ */ i.jsx(
          "div",
          {
            className: M(
              "absolute transition-all duration-200",
              n === "default" ? "left-4 w-[1px] top-10 bottom-[-24px]" : "left-0 w-[1px] top-6 bottom-[-24px]",
              s < t ? "bg-primary" : "bg-neutral-200"
            )
          }
        )
      ]
    },
    s
  );
}) }), Gp = ({
  orientation: e = "horizontal",
  variant: t = "default",
  ...r
}) => e === "vertical" ? /* @__PURE__ */ i.jsx(fc, { variant: t, ...r }) : /* @__PURE__ */ i.jsx(uc, { variant: t, ...r }), Hp = ({
  label: e,
  checked: t = !1,
  disabled: r = !1,
  onChange: n,
  size: o = "md"
}) => {
  const s = (c) => {
    n && n(c.target.checked);
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
      className: be(
        "inline-flex items-center cursor-pointer",
        r && "opacity-60 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "checkbox",
              className: "sr-only",
              checked: t,
              disabled: r,
              onChange: s
            }
          ),
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: be(
                "block rounded-full transition-colors duration-200 ease-in-out",
                a[o],
                t ? "bg-primary" : "bg-gray-200 dark:bg-gray-700",
                r && "cursor-not-allowed"
              )
            }
          ),
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: be(
                "absolute rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out",
                l[o],
                t ? o === "sm" ? "translate-x-4" : o === "md" ? "translate-x-5" : "translate-x-7" : "translate-x-0.5",
                "top-1/2 -translate-y-1/2"
              )
            }
          )
        ] }),
        e && /* @__PURE__ */ i.jsx("span", { className: "ml-3 text-sm text-gray-700 dark:text-gray-300", children: e })
      ]
    }
  );
}, Wp = ({
  items: e,
  defaultActiveId: t,
  variant: r = "default",
  size: n = "md",
  className: o,
  tabListClassName: s,
  tabClassName: a,
  contentClassName: l,
  onChange: c
}) => {
  var j, N;
  const [u, d] = te(t || ((j = e[0]) == null ? void 0 : j.id) || ""), f = ie.useRef(null), [h, b] = te({ left: 0, width: 0 });
  ie.useEffect(() => {
    var S;
    if (r === "active-underline" && f.current) {
      const L = f.current.getBoundingClientRect(), R = (S = f.current.parentElement) == null ? void 0 : S.getBoundingClientRect();
      R && b({
        left: L.left - R.left,
        width: L.width
      });
    }
  }, [r, e, u]), ie.useEffect(() => {
    if (r === "active-underline") {
      const S = () => {
        var L;
        if (f.current) {
          const R = f.current.getBoundingClientRect(), C = (L = f.current.parentElement) == null ? void 0 : L.getBoundingClientRect();
          C && b({
            left: R.left - C.left,
            width: R.width
          });
        }
      };
      return window.addEventListener("resize", S), () => window.removeEventListener("resize", S);
    }
  }, [r, e, u]);
  const w = pe((S) => {
    d(S), c == null || c(S);
  }, [c]), v = () => {
    switch (n) {
      case "sm":
        return "text-sm px-3 py-1.5";
      case "lg":
        return "text-lg px-6 py-3";
      default:
        return "text-base px-4 py-2";
    }
  }, E = (S, L) => {
    const R = be(
      "flex items-center space-x-2 transition-colors",
      "font-medium",
      v(),
      L && "opacity-50 cursor-not-allowed",
      !L && "cursor-pointer"
    );
    switch (r) {
      case "pills":
        return be(
          R,
          "rounded-full",
          S ? "bg-primary text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        );
      case "underline":
        return be(
          R,
          "border-b-2",
          S ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
      case "active-underline":
        return be(
          R,
          "border-b-0",
          S ? "text-primary" : "text-gray-600 dark:text-gray-300 hover:text-primary"
        );
      default:
        return be(
          R,
          "border-b-2",
          S ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
    }
  };
  return /* @__PURE__ */ i.jsxs("div", { className: be("w-full", o), children: [
    /* @__PURE__ */ i.jsxs("div", { className: be(
      r === "active-underline" ? "relative" : "",
      "flex space-x-1",
      r === "pills" && "space-x-2 border-b-0",
      r !== "active-underline" && "border-b border-gray-200 dark:border-gray-700",
      s
    ), children: [
      e.map((S) => {
        const L = S.id === u, R = !!S.disabled;
        return /* @__PURE__ */ i.jsxs(
          "button",
          {
            ref: r === "active-underline" && L ? f : void 0,
            onClick: () => !R && w(S.id),
            disabled: R,
            className: be(
              E(L, R),
              a
            ),
            children: [
              S.icon && /* @__PURE__ */ i.jsx(
                de,
                {
                  icon: S.icon,
                  className: "w-5 h-5 flex-shrink-0"
                }
              ),
              /* @__PURE__ */ i.jsx("span", { children: S.label })
            ]
          },
          S.id
        );
      }),
      r === "active-underline" && /* @__PURE__ */ i.jsx(
        "span",
        {
          className: "absolute bottom-0 h-0.5 bg-primary transition-all duration-300",
          style: { left: h.left, width: h.width }
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: be("mt-4", l), children: (N = e.find((S) => S.id === u)) == null ? void 0 : N.content })
  ] });
}, $r = ({
  variant: e = "p",
  children: t,
  className: r,
  as: n
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
  }, a = n || ((l) => {
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
  return /* @__PURE__ */ i.jsx(a, { className: M("text-gray-900", o[e], r), children: t });
}, ln = "timepicker-dropdown-opened", pc = De(
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
), Ks = Ie(
  ({
    value: e,
    onChange: t,
    use24Hour: r = !1,
    variant: n = "default",
    size: o = "md",
    rounded: s = "xl",
    disabled: a = !1,
    errorText: l,
    helperText: c,
    label: u,
    required: d = !1,
    labelPlacement: f = "top",
    fullWidth: h = !1,
    className: b,
    placeholder: w = "Select time",
    leftIcon: v,
    rightIcon: E,
    valueFormatter: j,
    closeOnSelect: N = !0,
    ...S
  }, L) => {
    const [R, C] = te(!1), [K, z] = te(e || ""), [I, O] = te(0), [p, x] = te(0), [m, $] = te(!0), A = re(null), g = re(null), k = re(null), T = `timepicker-${ie.useId().replace(/:/g, "")}`, U = () => {
      if (!R || !g.current || !k.current) return;
      const _ = g.current.getBoundingClientRect(), X = k.current, fe = it().innerHeight - _.bottom;
      X.style.top = `${_.bottom + 4}px`, X.style.bottom = "auto", X.style.left = `${_.left}px`, X.style.maxHeight = `${fe - 8}px`, X.style.width = `${_.width}px`;
    };
    ue(() => {
      const _ = it(), X = Ge(), xe = () => {
        R && U();
      }, fe = () => {
        R && U();
      }, Ue = (Se) => {
        Se.detail.id !== T && C(!1);
      }, He = (Se) => {
        const Ye = Se.target;
        A.current && k.current && !A.current.contains(Ye) && !k.current.contains(Ye) && C(!1);
      };
      return R && (U(), _.addEventListener("scroll", xe, !0), _.addEventListener("resize", fe)), X.addEventListener(ln, Ue), X.addEventListener("mousedown", He), () => {
        _.removeEventListener("scroll", xe, !0), _.removeEventListener("resize", fe), X.removeEventListener(ln, Ue), X.removeEventListener("mousedown", He);
      };
    }, [R, T]);
    const F = () => {
      a || (R || Ge().dispatchEvent(
        new CustomEvent(ln, {
          detail: { id: T }
        })
      ), C(!R));
    };
    ue(() => {
      if (e) {
        z(e);
        const [_, X] = e.split(":").map(Number);
        r ? O(_) : (O(_ % 12 || 12), $(_ < 12)), x(X);
      }
    }, [e, r]);
    const H = () => {
      const X = `${(r || m ? I : I + 12).toString().padStart(2, "0")}:${p.toString().padStart(2, "0")}`;
      z(X), t == null || t(X), N && C(!1);
    }, ne = () => r ? Array.from({ length: 24 }, (_, X) => X) : Array.from({ length: 12 }, (_, X) => X + 1), B = () => Array.from({ length: 60 }, (_, X) => X), W = j ? j(K) : K, q = Ge();
    return "body" in q ? /* @__PURE__ */ i.jsxs("div", { ref: A, className: M("relative", h && "w-full", b), children: [
      u && /* @__PURE__ */ i.jsxs(
        "label",
        {
          className: M(
            "block text-sm font-medium text-gray-700 mb-1",
            f === "left" && "inline-block mr-2"
          ),
          children: [
            u,
            d && /* @__PURE__ */ i.jsx("span", { className: "text-red ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "div",
        {
          ref: g,
          className: "relative",
          onClick: F,
          children: [
            v && /* @__PURE__ */ i.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ i.jsx(de, { icon: v, size: 20 }) }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                ref: L,
                type: "text",
                value: W,
                placeholder: w,
                readOnly: !0,
                className: M(
                  pc({ variant: n, size: o, rounded: s, fullWidth: h }),
                  v && "pl-10",
                  E && "pr-10",
                  "text-left"
                ),
                disabled: a,
                ...S
              }
            ),
            E && /* @__PURE__ */ i.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ i.jsx(de, { icon: E, size: 20 }) })
          ]
        }
      ),
      R && It(
        /* @__PURE__ */ i.jsx(
          "div",
          {
            ref: k,
            className: "fixed z-[9999] w-fit rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            onClick: (_) => _.stopPropagation(),
            children: /* @__PURE__ */ i.jsxs("div", { className: "p-0", children: [
              /* @__PURE__ */ i.jsxs(Yn, { variant: "ghost", className: M(
                "flex mx-2 my-1 p-0",
                r ? "justify-start gap-8" : "justify-start gap-4"
              ), children: [
                /* @__PURE__ */ i.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ i.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ i.jsx("div", { className: "flex flex-col gap-2", children: ne().map((_) => /* @__PURE__ */ i.jsx(
                  Ke,
                  {
                    variant: "ghost",
                    onClick: () => O(_),
                    className: M(I === _ && "bg-primary text-white"),
                    children: _.toString().padStart(2, "0")
                  },
                  _
                )) }) }) }),
                /* @__PURE__ */ i.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ i.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ i.jsx("div", { className: "flex flex-col gap-2", children: B().map((_) => /* @__PURE__ */ i.jsx(
                  Ke,
                  {
                    variant: "ghost",
                    onClick: () => x(_),
                    className: M(p === _ && "bg-primary text-white"),
                    children: _.toString().padStart(2, "0")
                  },
                  _
                )) }) }) }),
                !r && /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ i.jsx(
                    Ke,
                    {
                      variant: "ghost",
                      onClick: () => $(!0),
                      className: M(m && "bg-primary text-white"),
                      children: "AM"
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    Ke,
                    {
                      variant: "ghost",
                      onClick: () => $(!1),
                      className: M(!m && "bg-primary text-white"),
                      children: "PM"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ i.jsx("div", { className: "mb-2 mx-2", children: /* @__PURE__ */ i.jsx(
                Ke,
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
        q.body
      ),
      l && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-sm text-danger-600", children: l }),
      c && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-sm text-gray", children: c })
    ] }) : null;
  }
);
Ks.displayName = "PrimitiveTimePicker";
const gc = ({
  value: e,
  onChange: t,
  valueFormatter: r,
  closeOnSelect: n,
  ...o
}) => /* @__PURE__ */ i.jsx(
  Ks,
  {
    value: e,
    onChange: t,
    valueFormatter: r,
    closeOnSelect: n,
    ...o
  }
);
gc.displayName = "TimePicker";
const mc = De(
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
), bc = De(
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
), hc = Ie(
  ({
    checked: e = !1,
    onCheckedChange: t,
    variant: r = "primary",
    size: n = "md",
    label: o,
    required: s = !1,
    helperText: a,
    errorText: l,
    error: c = !1,
    className: u,
    ...d
  }, f) => {
    const h = ie.useId(), b = `${h}-helper`, w = `${h}-error`;
    return /* @__PURE__ */ i.jsxs("div", { className: "inline-flex flex-col gap-1.5", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            role: "switch",
            "aria-checked": e,
            "data-state": e ? "checked" : "unchecked",
            onClick: () => t == null ? void 0 : t(!e),
            ref: f,
            className: M(mc({ variant: c ? "danger" : r, size: n }), u),
            "aria-describedby": c ? w : a ? b : void 0,
            "aria-invalid": c,
            "aria-required": s,
            ...d,
            children: /* @__PURE__ */ i.jsx(
              "span",
              {
                "data-state": e ? "checked" : "unchecked",
                className: M(
                  bc({ size: n }),
                  e ? "translate-x-5" : "translate-x-1"
                )
              }
            )
          }
        ),
        o && /* @__PURE__ */ i.jsxs(
          "label",
          {
            htmlFor: h,
            className: "text-sm text-neutral-900",
            children: [
              o,
              s && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ]
          }
        )
      ] }),
      c && l && /* @__PURE__ */ i.jsx("p", { className: "text-xs text-danger", id: w, children: l }),
      !c && a && /* @__PURE__ */ i.jsx("p", { className: "text-xs text-neutral", id: b, children: a })
    ] });
  }
);
hc.displayName = "Toggle";
const vc = De(
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
), xc = De("absolute w-2 h-2 transform rotate-45", {
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
}), Kp = ({
  content: e,
  children: t,
  position: r = "top",
  delay: n = 0,
  className: o,
  color: s = "light",
  size: a = "md",
  isOpen: l,
  onOpenChange: c,
  trigger: u = "hover"
}) => {
  const [d, f] = te(!1), [h, b] = te({ top: 0, left: 0 }), w = re(null), v = re(null), E = re(), j = l !== void 0, N = j ? l : d, S = () => {
    if (!w.current || !v.current) return;
    const z = v.current.getBoundingClientRect(), I = w.current.getBoundingClientRect(), O = it(), p = O.scrollX || O.pageXOffset, x = O.scrollY || O.pageYOffset;
    let m = 0, $ = 0;
    const A = 8;
    switch (r) {
      case "top":
        m = z.top + x - I.height - A, $ = z.left + p + (z.width - I.width) / 2;
        break;
      case "bottom":
        m = z.bottom + x + A, $ = z.left + p + (z.width - I.width) / 2;
        break;
      case "left":
        m = z.top + x + (z.height - I.height) / 2, $ = z.left + p - I.width - A;
        break;
      case "right":
        m = z.top + x + (z.height - I.height) / 2, $ = z.right + p + A;
        break;
    }
    const g = O.innerWidth, k = O.innerHeight;
    $ < 0 && ($ = 0), $ + I.width > g && ($ = g - I.width), m < 0 && (m = 0), m + I.height > k && (m = k - I.height), b({ top: m, left: $ });
  };
  ue(() => {
    if (N) {
      S();
      const z = it();
      z.addEventListener("scroll", S, !0), z.addEventListener("resize", S);
    }
    return () => {
      const z = it();
      z.removeEventListener("scroll", S, !0), z.removeEventListener("resize", S);
    };
  }, [N, r]);
  const L = () => {
    j ? c == null || c(!0) : E.current = setTimeout(() => {
      f(!0);
    }, n);
  }, R = () => {
    E.current && clearTimeout(E.current), j ? c == null || c(!1) : f(!1);
  }, C = (z) => {
    z.stopPropagation(), u === "click" && (j ? c == null || c(!l) : f(!d));
  };
  ue(() => {
    const z = (I) => {
      u === "click" && w.current && !w.current.contains(I.target) && v.current && !v.current.contains(I.target) && R();
    };
    return N && document.addEventListener("click", z), () => {
      document.removeEventListener("click", z);
    };
  }, [N, u]);
  const K = () => {
    if (!N) return null;
    const z = Ge();
    return "body" in z ? It(
      /* @__PURE__ */ i.jsxs(
        "div",
        {
          ref: w,
          className: M(vc({ color: s, size: a }), o),
          style: {
            top: `${h.top}px`,
            left: `${h.left}px`
          },
          children: [
            e,
            /* @__PURE__ */ i.jsx(
              "div",
              {
                className: M(
                  xc({ color: s }),
                  r === "top" && "bottom-[-4px] left-1/2 -translate-x-1/2",
                  r === "bottom" && "top-[-4px] left-1/2 -translate-x-1/2",
                  r === "left" && "right-[-4px] top-1/2 -translate-y-1/2",
                  r === "right" && "left-[-4px] top-1/2 -translate-y-1/2",
                  s === "light" && r === "top" && "border-r border-b border-neutral-200",
                  s === "light" && r === "bottom" && "border-l border-t border-neutral-200",
                  s === "light" && r === "left" && "border-t border-r border-neutral-200",
                  s === "light" && r === "right" && "border-l border-b border-neutral-200"
                )
              }
            )
          ]
        }
      ),
      z.body
    ) : null;
  };
  return /* @__PURE__ */ i.jsx("div", { className: "relative", children: /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: v,
      className: "relative inline-block",
      onMouseEnter: u === "hover" ? L : void 0,
      onMouseLeave: u === "hover" ? R : void 0,
      onClick: C,
      children: [
        t,
        K()
      ]
    }
  ) });
}, yc = De(
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
), wc = {
  sm: 24,
  md: 36,
  lg: 48
}, $c = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
  info: "bg-info"
}, kc = {
  primary: "#007C99",
  // Tailwind primary
  secondary: "#CEEAE7",
  success: "#00B37D",
  warning: "#F59E0B",
  danger: "#EF4444",
  info: "#0EA5E9"
}, Nc = ie.forwardRef(
  ({
    className: e,
    variant: t = "bar",
    color: r = "primary",
    size: n = "md",
    value: o = 0,
    isIndeterminate: s = !1,
    showValue: a = !1,
    label: l,
    rounded: c = "full",
    icon: u,
    ...d
  }, f) => {
    const h = Math.min(Math.max(o, 0), 100), b = wc[n], w = n === "sm" ? 2 : n === "md" ? 3 : 4, v = (b - w) / 2, E = 2 * Math.PI * v, j = E - h / 100 * E;
    let N = "";
    return t === "loading" ? N = "rounded-full" : c ? N = c === "none" ? "" : `rounded-${c}` : N = "rounded-md", t === "circular" ? /* @__PURE__ */ i.jsxs("div", { className: "inline-flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "relative", style: { width: b, height: b }, children: [
        /* @__PURE__ */ i.jsxs(
          "svg",
          {
            className: M(
              "transform -rotate-90",
              s ? "animate-spin" : ""
            ),
            width: b,
            height: b,
            children: [
              /* @__PURE__ */ i.jsx(
                "circle",
                {
                  strokeWidth: w,
                  stroke: "#e5e7eb",
                  fill: "transparent",
                  r: v,
                  cx: b / 2,
                  cy: b / 2
                }
              ),
              /* @__PURE__ */ i.jsx(
                "circle",
                {
                  className: M(
                    "transition-all duration-300 ease-in-out",
                    s ? "animate-dash" : ""
                  ),
                  strokeWidth: w,
                  strokeDasharray: E,
                  strokeDashoffset: s ? 0 : j,
                  strokeLinecap: "round",
                  stroke: kc[r],
                  fill: "transparent",
                  r: v,
                  cx: b / 2,
                  cy: b / 2
                }
              )
            ]
          }
        ),
        u && /* @__PURE__ */ i.jsx("span", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ i.jsx(de, { icon: u, size: b * 0.5 }) }),
        a && !s && !u && /* @__PURE__ */ i.jsxs("div", { className: "absolute inset-0 flex items-center justify-center text-xs font-medium", children: [
          Math.round(h),
          "%"
        ] })
      ] }),
      l && /* @__PURE__ */ i.jsx("span", { className: "text-sm text-neutral-600", children: l })
    ] }) : /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ i.jsx(
        "div",
        {
          ref: f,
          className: M(yc({ variant: t === "loading" ? "bar" : t, size: n }), N, e),
          role: "progressbar",
          "aria-valuenow": s ? void 0 : h,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          ...d,
          children: /* @__PURE__ */ i.jsx(
            "div",
            {
              className: M(
                "h-full transition-all duration-300 ease-in-out",
                s ? "animate-progress-indeterminate" : "",
                $c[r],
                N
              ),
              style: {
                width: s ? "100%" : `${h}%`
              }
            }
          )
        }
      ),
      (a || l) && /* @__PURE__ */ i.jsxs("div", { className: "flex justify-between text-xs text-neutral-600", children: [
        l && /* @__PURE__ */ i.jsx("span", { children: l }),
        a && !s && /* @__PURE__ */ i.jsxs("span", { children: [
          Math.round(h),
          "%"
        ] })
      ] })
    ] });
  }
);
Nc.displayName = "Progress";
const yt = [
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
], Ec = De(
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
), cn = (e) => {
  if (!e || !e.startsWith("+"))
    return null;
  const t = [...yt].sort(
    (r, n) => n.code.length - r.code.length
  );
  for (const r of t)
    if (e.startsWith(r.code))
      return r;
  return null;
}, So = (e) => {
  if (!e || e.startsWith("+"))
    return null;
  const t = [...yt].sort(
    (r, n) => n.code.length - r.code.length
  );
  for (const r of t) {
    const n = r.code.replace("+", "");
    if (e.startsWith(n))
      return r;
  }
  return null;
}, jc = (e) => e.startsWith("0") && e.length >= 9 && e.length <= 12 ? "+62" + e.slice(1) : e, Pc = (e) => e.startsWith("0") && e.length >= 3, Nn = Ie(
  ({
    className: e,
    variant: t = "default",
    size: r = "md",
    rounded: n = "xl",
    error: o = !1,
    errorText: s,
    helperText: a,
    label: l,
    required: c = !1,
    fullWidth: u = !1,
    value: d = "",
    onChange: f,
    disabled: h = !1,
    defaultCountry: b = "id",
    placeholder: w = "Enter phone number",
    autoDetect: v = !0,
    ...E
  }, j) => {
    const [N, S] = te(!1), [L, R] = te(
      () => yt.find((B) => B.iso === b) || yt[0]
    ), [C, K] = te(""), [z, I] = te(() => {
      if (v && d) {
        const W = cn(d);
        if (W)
          return R(W), d;
        const q = So(d);
        return q ? (R(q), q.code + d.slice(q.code.replace("+", "").length)) : d;
      }
      const B = L.code;
      return d.startsWith(B) ? d.slice(B.length) : d;
    }), [O, p] = te(() => v && d ? !!(cn(d) || So(d)) : !1), x = re(null), m = re(null), $ = ie.useId(), A = `${$}-helper`, g = `${$}-error`, k = yt.filter(
      (B) => B.name.toLowerCase().includes(C.toLowerCase()) || B.code.includes(C)
    ), P = re(null), T = () => {
      if (N && x.current && m.current) {
        const B = x.current.getBoundingClientRect(), W = m.current, q = typeof window < "u" ? window : { innerHeight: 0 }, _ = q.innerHeight - B.bottom, X = B.top, fe = B.bottom + (W.offsetHeight || 0) + 4 >= q.innerHeight, Ue = X > _, He = fe && Ue;
        W.style.position = "fixed", W.style.left = `${B.left}px`, W.style.minWidth = `${B.width}px`, W.style.maxWidth = "340px", W.style.width = "auto", He ? (W.style.bottom = `${q.innerHeight - B.top + 4}px`, W.style.top = "auto", W.style.maxHeight = `${X - 8}px`) : (W.style.top = `${B.bottom + 4}px`, W.style.bottom = "auto", W.style.maxHeight = `${_ - 8}px`);
      }
    };
    ue(() => {
      const B = typeof window < "u" ? window : void 0, W = () => {
        N && T();
      }, q = () => {
        N && T();
      };
      return N && (T(), B == null || B.addEventListener("scroll", W, !0), B == null || B.addEventListener("resize", q)), () => {
        B == null || B.removeEventListener("scroll", W, !0), B == null || B.removeEventListener("resize", q);
      };
    }, [N]), ue(() => {
      if (!N) return;
      const B = (W) => {
        const q = W.target;
        x.current && m.current && !x.current.contains(q) && !m.current.contains(q) && S(!1);
      };
      return document.addEventListener("click", B), () => document.removeEventListener("click", B);
    }, [N]);
    const U = (B) => {
      if (R(B), S(!1), K(""), v) {
        const W = B.code + z.replace(/^\+?\d*/, "");
        I(W);
        const q = W.replace(/[^\d]/g, "");
        f == null || f(q);
      } else {
        const q = (B.code + z).replace(/[^\d]/g, "");
        f == null || f(q);
      }
    }, F = (B) => {
      const W = B.target.value;
      if (/^[+\d]*$/.test(W))
        if (v && W.startsWith("+")) {
          const _ = cn(W);
          if (_) {
            R(_), p(!0), I(W);
            const X = W.replace(/[^\d]/g, "");
            f == null || f(X);
          } else {
            I(W), p(!1);
            const X = W.replace(/[^\d]/g, "");
            f == null || f(X);
          }
        } else if (v && !W.startsWith("+") && W.length > 0) {
          const _ = jc(W);
          if (_ !== W) {
            I(_), R(
              yt.find((xe) => xe.iso === "id") || yt[0]
            ), p(!0);
            const X = _.replace(/[^\d]/g, "");
            f == null || f(X);
          } else if (Pc(W)) {
            const X = "+62" + W.slice(1);
            I(X), R(
              yt.find((fe) => fe.iso === "id") || yt[0]
            ), p(!0);
            const xe = X.replace(/[^\d]/g, "");
            f == null || f(xe);
          } else if (W.startsWith("0"))
            I(W), p(!1);
          else {
            const X = "+" + W;
            I(X);
            const xe = X.replace(/[^\d]/g, "");
            f == null || f(xe);
          }
        } else {
          const _ = W.replace(/[^\d]/g, "");
          I(_);
          const xe = (L.code + _).replace(/[^\d]/g, "");
          f == null || f(xe);
        }
    }, H = M(
      Ec({
        variant: o ? "error" : t,
        size: r,
        rounded: n,
        fullWidth: u
      }),
      "!w-full"
    ), ne = !v || v && O;
    return Wn(j, () => P.current, []), /* @__PURE__ */ i.jsxs(
      "div",
      {
        ref: P,
        className: M(u ? "w-full" : "inline-block", e),
        ...E,
        children: [
          l && /* @__PURE__ */ i.jsxs("label", { htmlFor: $, className: "mb-1.5 block text-sm text-neutral-900", children: [
            l,
            c && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: M("relative", !u && "inline-block"), children: [
            /* @__PURE__ */ i.jsxs("div", { className: "flex", children: [
              ne && /* @__PURE__ */ i.jsxs(
                "button",
                {
                  type: "button",
                  ref: x,
                  onClick: () => !h && S(!N),
                  className: M(
                    H,
                    "flex items-center gap-2 rounded-r-none justify-between",
                    v ? "max-w-[60px]" : "max-w-[100px]",
                    h && "cursor-not-allowed opacity-50"
                  ),
                  children: [
                    /* @__PURE__ */ i.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ i.jsx(de, { icon: L.flag, className: "w-5 h-5" }),
                      !v && /* @__PURE__ */ i.jsx("span", { className: "text-sm", children: L.code })
                    ] }),
                    /* @__PURE__ */ i.jsx(
                      de,
                      {
                        icon: "mdi:chevron-down",
                        className: M("transition-transform", N && "rotate-180")
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "tel",
                  id: $,
                  value: z,
                  onChange: F,
                  disabled: h,
                  className: M(
                    H,
                    ne ? "rounded-l-none" : `rounded-l-${n}`,
                    "flex-1 min-w-0 w-full"
                  ),
                  placeholder: v ? "e.g. +6281234567890" : w
                }
              )
            ] }),
            N && It(
              /* @__PURE__ */ i.jsxs(
                "div",
                {
                  ref: m,
                  className: "border border-neutral-200 bg-white shadow-lg overflow-y-auto rounded-md",
                  children: [
                    /* @__PURE__ */ i.jsx("div", { className: "p-2 border-b border-neutral-200", children: /* @__PURE__ */ i.jsx(
                      "input",
                      {
                        type: "text",
                        value: C,
                        onChange: (B) => {
                          const W = B.target.value;
                          /^[a-zA-Z0-9\s]*$/.test(W) && K(W);
                        },
                        placeholder: "Search countries...",
                        className: "w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:border-primary-300"
                      }
                    ) }),
                    /* @__PURE__ */ i.jsx("div", { className: "max-h-[300px] overflow-y-auto", children: k.map((B) => /* @__PURE__ */ i.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => U(B),
                        className: M(
                          "w-full px-3 py-2 text-sm text-left hover:bg-primary-50 cursor-pointer",
                          L.iso === B.iso && "bg-primary-50"
                        ),
                        children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ i.jsx(de, { icon: B.flag, className: "w-5 h-5" }),
                          /* @__PURE__ */ i.jsx("span", { className: "text-sm font-medium", children: B.code }),
                          /* @__PURE__ */ i.jsx("span", { className: "text-sm text-neutral-600", children: B.name })
                        ] })
                      },
                      B.iso + B.code
                    )) })
                  ]
                }
              ),
              typeof document < "u" ? document.body : document
            )
          ] }),
          o && s && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger", id: g, children: s }),
          !o && a && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral", id: A, children: a })
        ]
      }
    );
  }
);
Nn.displayName = "PhoneInput";
const Up = () => {
  const [e, t] = te(""), [r, n] = te("");
  return /* @__PURE__ */ i.jsxs("div", { className: "p-6 space-y-8", children: [
    /* @__PURE__ */ i.jsxs("div", { children: [
      /* @__PURE__ */ i.jsx("h2", { className: "text-2xl font-bold mb-4", children: "PhoneInput Component Demo" }),
      /* @__PURE__ */ i.jsx("p", { className: "text-gray-600 mb-6", children: "This demo showcases both manual country selection and automatic country detection modes." })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ i.jsx("h3", { className: "text-xl font-semibold", children: "Manual Selection Mode" }),
        /* @__PURE__ */ i.jsx("p", { className: "text-sm text-gray-500", children: "Select country from dropdown first, then type the phone number." }),
        /* @__PURE__ */ i.jsx(
          Nn,
          {
            label: "Phone Number (Manual)",
            value: e,
            onChange: t,
            helperText: "Select country first, then type number"
          }
        ),
        /* @__PURE__ */ i.jsxs("div", { className: "p-3 bg-gray-50 rounded", children: [
          /* @__PURE__ */ i.jsx("p", { className: "text-sm font-medium", children: "Current Value (Clean Numeric):" }),
          /* @__PURE__ */ i.jsx("p", { className: "text-sm text-gray-600", children: e || "No input yet" })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ i.jsx("h3", { className: "text-xl font-semibold", children: "Auto Detect Mode" }),
        /* @__PURE__ */ i.jsx("p", { className: "text-sm text-gray-500", children: "Start with a single input field. Type + and country code, then the country selector (flag only) will appear." }),
        /* @__PURE__ */ i.jsx(
          Nn,
          {
            label: "Phone Number (Auto Detect)",
            autoDetect: !0,
            value: r,
            onChange: n,
            helperText: "Start typing with + and country code. Country selector (flag only) will appear after detection."
          }
        ),
        /* @__PURE__ */ i.jsxs("div", { className: "p-3 bg-gray-50 rounded", children: [
          /* @__PURE__ */ i.jsx("p", { className: "text-sm font-medium", children: "Current Value (Clean Numeric):" }),
          /* @__PURE__ */ i.jsx("p", { className: "text-sm text-gray-600", children: r || "No input yet" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ i.jsx("h3", { className: "text-xl font-semibold", children: "Auto Detect Examples" }),
      /* @__PURE__ */ i.jsx("p", { className: "text-sm text-gray-500", children: "Try typing these numbers in the Auto Detect mode. Start with + and the country selector (flag only) will appear:" }),
      /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "p-3 border rounded", children: [
          /* @__PURE__ */ i.jsx("p", { className: "text-sm font-medium", children: "US Number" }),
          /* @__PURE__ */ i.jsx("p", { className: "text-xs text-gray-500", children: "+1234567890" }),
          /* @__PURE__ */ i.jsx("p", { className: "text-xs text-gray-400", children: "Detects United States (+1)" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "p-3 border rounded", children: [
          /* @__PURE__ */ i.jsx("p", { className: "text-sm font-medium", children: "UK Number" }),
          /* @__PURE__ */ i.jsx("p", { className: "text-xs text-gray-500", children: "+447911123456" }),
          /* @__PURE__ */ i.jsx("p", { className: "text-xs text-gray-400", children: "Detects United Kingdom (+44)" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "p-3 border rounded", children: [
          /* @__PURE__ */ i.jsx("p", { className: "text-sm font-medium", children: "Indonesian Number" }),
          /* @__PURE__ */ i.jsx("p", { className: "text-xs text-gray-500", children: "+6281234567890" }),
          /* @__PURE__ */ i.jsx("p", { className: "text-xs text-gray-400", children: "Detects Indonesia (+62)" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "p-3 border rounded", children: [
          /* @__PURE__ */ i.jsx("p", { className: "text-sm font-medium", children: "German Number" }),
          /* @__PURE__ */ i.jsx("p", { className: "text-xs text-gray-500", children: "+49123456789" }),
          /* @__PURE__ */ i.jsx("p", { className: "text-xs text-gray-400", children: "Detects Germany (+49)" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ i.jsx("h3", { className: "text-xl font-semibold", children: "Indonesian Number Special Handling" }),
      /* @__PURE__ */ i.jsx("p", { className: "text-sm text-gray-500", children: "Indonesian numbers starting with 0 are automatically converted to +62 format:" }),
      /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "p-3 border rounded bg-green-50", children: [
          /* @__PURE__ */ i.jsx("p", { className: "text-sm font-medium", children: "Auto-Conversion" }),
          /* @__PURE__ */ i.jsx("p", { className: "text-xs text-gray-500", children: "081327368782" }),
          /* @__PURE__ */ i.jsx("p", { className: "text-xs text-gray-400", children: "→ +6281327368782 (0 → +62)" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "p-3 border rounded bg-blue-50", children: [
          /* @__PURE__ */ i.jsx("p", { className: "text-sm font-medium", children: "Explicit Format" }),
          /* @__PURE__ */ i.jsx("p", { className: "text-xs text-gray-500", children: "+6281327368782" }),
          /* @__PURE__ */ i.jsx("p", { className: "text-xs text-gray-400", children: "No conversion needed" })
        ] })
      ] })
    ] })
  ] });
};
function qn(e = {}) {
  const {
    strict: t = !0,
    errorMessage: r = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: n
  } = e, o = vo.createContext(void 0);
  o.displayName = n;
  function s() {
    var a;
    const l = vo.useContext(o);
    if (!l && t) {
      const c = new Error(r);
      throw c.name = "ContextError", (a = Error.captureStackTrace) == null || a.call(Error, c, s), c;
    }
    return l;
  }
  return [o.Provider, s, o];
}
function Us(e) {
  const t = re(null);
  return Wn(e, () => t.current), t;
}
process.env.NODE_ENV;
process.env.NODE_ENV;
var ot = (e) => e ? "true" : void 0;
function Ys(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Ys(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function Xt(...e) {
  for (var t = 0, r, n, o = ""; t < e.length; )
    (r = e[t++]) && (n = Ys(r)) && (o && (o += " "), o += n);
  return o;
}
function Tc(e) {
  return `${e}-${Math.floor(Math.random() * 1e6)}`;
}
function qs(e) {
  if (!e || typeof e != "object")
    return "";
  try {
    return JSON.stringify(e);
  } catch {
    return "";
  }
}
function Sc(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function Xs(...e) {
  return (...t) => {
    for (let r of e)
      typeof r == "function" && r(...t);
  };
}
var Co = /* @__PURE__ */ new Map();
function Cc(e, t) {
  if (e === t)
    return e;
  let r = Co.get(e);
  if (r)
    return r.forEach((o) => o.current = t), t;
  let n = Co.get(t);
  return n ? (n.forEach((o) => o.current = e), e) : t;
}
function Rt(...e) {
  let t = { ...e[0] };
  for (let r = 1; r < e.length; r++) {
    let n = e[r];
    for (let o in n) {
      let s = t[o], a = n[o];
      typeof s == "function" && typeof a == "function" && // This is a lot faster than a regex.
      o[0] === "o" && o[1] === "n" && o.charCodeAt(2) >= /* 'A' */
      65 && o.charCodeAt(2) <= /* 'Z' */
      90 ? t[o] = Xs(s, a) : (o === "className" || o === "UNSAFE_className") && typeof s == "string" && typeof a == "string" ? t[o] = Xt(s, a) : o === "id" && s && a ? t.id = Cc(s, a) : t[o] = a !== void 0 ? a : s;
    }
  }
  return t;
}
function Rc(...e) {
  return e.length === 1 && e[0] ? e[0] : (t) => {
    let r = !1;
    const n = e.map((o) => {
      const s = Ro(o, t);
      return r || (r = typeof s == "function"), s;
    });
    if (r)
      return () => {
        n.forEach((o, s) => {
          typeof o == "function" ? o == null || o() : Ro(e[s], null);
        });
      };
  };
}
function Ro(e, t) {
  if (typeof e == "function")
    return () => e(t);
  e != null && "current" in e && (e.current = t);
}
var Lc = (e, t) => {
  var r;
  let n = [];
  const o = (r = wr.map(e, (a) => xr(a) && a.type === t ? (n.push(a), null) : a)) == null ? void 0 : r.filter(Boolean), s = n.length >= 0 ? n : void 0;
  return [o, s];
}, Ac = /* @__PURE__ */ new Set([
  "id",
  "type",
  "style",
  "title",
  "role",
  "tabIndex",
  "htmlFor",
  "width",
  "height",
  "abbr",
  "accept",
  "acceptCharset",
  "accessKey",
  "action",
  "allowFullScreen",
  "allowTransparency",
  "alt",
  "async",
  "autoComplete",
  "autoFocus",
  "autoPlay",
  "cellPadding",
  "cellSpacing",
  "challenge",
  "charset",
  "checked",
  "cite",
  "class",
  "className",
  "cols",
  "colSpan",
  "command",
  "content",
  "contentEditable",
  "contextMenu",
  "controls",
  "coords",
  "crossOrigin",
  "data",
  "dateTime",
  "default",
  "defer",
  "dir",
  "disabled",
  "download",
  "draggable",
  "dropzone",
  "encType",
  "enterKeyHint",
  "for",
  "form",
  "formAction",
  "formEncType",
  "formMethod",
  "formNoValidate",
  "formTarget",
  "frameBorder",
  "headers",
  "hidden",
  "high",
  "href",
  "hrefLang",
  "httpEquiv",
  "icon",
  "inputMode",
  "isMap",
  "itemId",
  "itemProp",
  "itemRef",
  "itemScope",
  "itemType",
  "kind",
  "label",
  "lang",
  "list",
  "loop",
  "manifest",
  "max",
  "maxLength",
  "media",
  "mediaGroup",
  "method",
  "min",
  "minLength",
  "multiple",
  "muted",
  "name",
  "noValidate",
  "open",
  "optimum",
  "pattern",
  "ping",
  "placeholder",
  "poster",
  "preload",
  "radioGroup",
  "referrerPolicy",
  "readOnly",
  "rel",
  "required",
  "rows",
  "rowSpan",
  "sandbox",
  "scope",
  "scoped",
  "scrolling",
  "seamless",
  "selected",
  "shape",
  "size",
  "sizes",
  "slot",
  "sortable",
  "span",
  "spellCheck",
  "src",
  "srcDoc",
  "srcSet",
  "start",
  "step",
  "target",
  "translate",
  "typeMustMatch",
  "useMap",
  "value",
  "wmode",
  "wrap"
]), Ic = /* @__PURE__ */ new Set([
  "onCopy",
  "onCut",
  "onPaste",
  "onLoad",
  "onError",
  "onWheel",
  "onScroll",
  "onCompositionEnd",
  "onCompositionStart",
  "onCompositionUpdate",
  "onKeyDown",
  "onKeyPress",
  "onKeyUp",
  "onFocus",
  "onBlur",
  "onChange",
  "onInput",
  "onSubmit",
  "onClick",
  "onContextMenu",
  "onDoubleClick",
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp",
  "onPointerDown",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerUp",
  "onSelect",
  "onTouchCancel",
  "onTouchEnd",
  "onTouchMove",
  "onTouchStart",
  "onAnimationStart",
  "onAnimationEnd",
  "onAnimationIteration",
  "onTransitionEnd"
]), Lo = /^(data-.*)$/, Oc = /^(aria-.*)$/, Pr = /^(on[A-Z].*)$/;
function Ao(e, t = {}) {
  let {
    labelable: r = !0,
    enabled: n = !0,
    propNames: o,
    omitPropNames: s,
    omitEventNames: a,
    omitDataProps: l,
    omitEventProps: c
  } = t, u = {};
  if (!n)
    return e;
  for (const d in e)
    s != null && s.has(d) || a != null && a.has(d) && Pr.test(d) || Pr.test(d) && !Ic.has(d) || l && Lo.test(d) || c && Pr.test(d) || (Object.prototype.hasOwnProperty.call(e, d) && (Ac.has(d) || r && Oc.test(d) || o != null && o.has(d) || Lo.test(d)) || Pr.test(d)) && (u[d] = e[d]);
  return u;
}
var [Yp, Xn] = qn({
  name: "ProviderContext",
  strict: !1
});
const Mc = /* @__PURE__ */ new Set([
  "Arab",
  "Syrc",
  "Samr",
  "Mand",
  "Thaa",
  "Mend",
  "Nkoo",
  "Adlm",
  "Rohg",
  "Hebr"
]), _c = /* @__PURE__ */ new Set([
  "ae",
  "ar",
  "arc",
  "bcc",
  "bqi",
  "ckb",
  "dv",
  "fa",
  "glk",
  "he",
  "ku",
  "mzn",
  "nqo",
  "pnb",
  "ps",
  "sd",
  "ug",
  "ur",
  "yi"
]);
function Dc(e) {
  if (Intl.Locale) {
    let r = new Intl.Locale(e).maximize(), n = typeof r.getTextInfo == "function" ? r.getTextInfo() : r.textInfo;
    if (n) return n.direction === "rtl";
    if (r.script) return Mc.has(r.script);
  }
  let t = e.split("-")[0];
  return _c.has(t);
}
const Fr = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, Zs = /* @__PURE__ */ ie.createContext(Fr), zc = /* @__PURE__ */ ie.createContext(!1);
let Fc = !!(typeof window < "u" && window.document && window.document.createElement), dn = /* @__PURE__ */ new WeakMap();
function Vc(e = !1) {
  let t = mt(Zs), r = re(null);
  if (r.current === null && !e) {
    var n, o;
    let s = (o = ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || o === void 0 || (n = o.ReactCurrentOwner) === null || n === void 0 ? void 0 : n.current;
    if (s) {
      let a = dn.get(s);
      a == null ? dn.set(s, {
        id: t.current,
        state: s.memoizedState
      }) : s.memoizedState !== a.state && (t.current = a.id, dn.delete(s));
    }
    r.current = ++t.current;
  }
  return r.current;
}
function Bc(e) {
  let t = mt(Zs);
  t === Fr && !Fc && process.env.NODE_ENV !== "production" && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let r = Vc(!!e), n = t === Fr && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${n}-${r}`;
}
function Gc(e) {
  let t = ie.useId(), [r] = te(Zn()), n = r || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${Fr.prefix}`;
  return e || `${n}-${t}`;
}
const Hc = typeof ie.useId == "function" ? Gc : Bc;
function Wc() {
  return !1;
}
function Kc() {
  return !0;
}
function Uc(e) {
  return () => {
  };
}
function Zn() {
  return typeof ie.useSyncExternalStore == "function" ? ie.useSyncExternalStore(Uc, Wc, Kc) : mt(zc);
}
const Yc = Symbol.for("react-aria.i18n.locale");
function Js() {
  let e = typeof window < "u" && window[Yc] || typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([
      e
    ]);
  } catch {
    e = "en-US";
  }
  return {
    locale: e,
    direction: Dc(e) ? "rtl" : "ltr"
  };
}
let En = Js(), mr = /* @__PURE__ */ new Set();
function Io() {
  En = Js();
  for (let e of mr) e(En);
}
function qc() {
  let e = Zn(), [t, r] = te(En);
  return ue(() => (mr.size === 0 && window.addEventListener("languagechange", Io), mr.add(r), () => {
    mr.delete(r), mr.size === 0 && window.removeEventListener("languagechange", Io);
  }), []), e ? {
    locale: "en-US",
    direction: "ltr"
  } : t;
}
const Xc = /* @__PURE__ */ ie.createContext(null);
function Qs() {
  let e = qc();
  return mt(Xc) || e;
}
const Zc = Symbol.for("react-aria.i18n.locale"), Jc = Symbol.for("react-aria.i18n.strings");
let Ut;
class Yr {
  /** Returns a localized string for the given key and locale. */
  getStringForLocale(t, r) {
    let o = this.getStringsForLocale(r)[t];
    if (!o) throw new Error(`Could not find intl message ${t} in ${r} locale`);
    return o;
  }
  /** Returns all localized strings for the given locale. */
  getStringsForLocale(t) {
    let r = this.strings[t];
    return r || (r = Qc(t, this.strings, this.defaultLocale), this.strings[t] = r), r;
  }
  static getGlobalDictionaryForPackage(t) {
    if (typeof window > "u") return null;
    let r = window[Zc];
    if (Ut === void 0) {
      let o = window[Jc];
      if (!o) return null;
      Ut = {};
      for (let s in o) Ut[s] = new Yr({
        [r]: o[s]
      }, r);
    }
    let n = Ut == null ? void 0 : Ut[t];
    if (!n) throw new Error(`Strings for package "${t}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
    return n;
  }
  constructor(t, r = "en-US") {
    this.strings = Object.fromEntries(Object.entries(t).filter(([, n]) => n)), this.defaultLocale = r;
  }
}
function Qc(e, t, r = "en-US") {
  if (t[e]) return t[e];
  let n = ed(e);
  if (t[n]) return t[n];
  for (let o in t)
    if (o.startsWith(n + "-")) return t[o];
  return t[r];
}
function ed(e) {
  return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
}
const Oo = /* @__PURE__ */ new Map(), Mo = /* @__PURE__ */ new Map();
class td {
  /** Formats a localized string for the given key with the provided variables. */
  format(t, r) {
    let n = this.strings.getStringForLocale(t, this.locale);
    return typeof n == "function" ? n(r, this) : n;
  }
  plural(t, r, n = "cardinal") {
    let o = r["=" + t];
    if (o) return typeof o == "function" ? o() : o;
    let s = this.locale + ":" + n, a = Oo.get(s);
    a || (a = new Intl.PluralRules(this.locale, {
      type: n
    }), Oo.set(s, a));
    let l = a.select(t);
    return o = r[l] || r.other, typeof o == "function" ? o() : o;
  }
  number(t) {
    let r = Mo.get(this.locale);
    return r || (r = new Intl.NumberFormat(this.locale), Mo.set(this.locale, r)), r.format(t);
  }
  select(t, r) {
    let n = t[r] || t.other;
    return typeof n == "function" ? n() : n;
  }
  constructor(t, r) {
    this.locale = t, this.strings = r;
  }
}
const _o = /* @__PURE__ */ new WeakMap();
function rd(e) {
  let t = _o.get(e);
  return t || (t = new Yr(e), _o.set(e, t)), t;
}
function nd(e, t) {
  return t && Yr.getGlobalDictionaryForPackage(t) || rd(e);
}
function od(e, t) {
  let { locale: r } = Qs(), n = nd(e, t);
  return _e(() => new td(r, n), [
    r,
    n
  ]);
}
function sd(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function ad(e, t, r) {
  sd(e, t), t.set(e, r);
}
const Ae = typeof document < "u" ? ie.useLayoutEffect : () => {
};
function nt(e) {
  const t = re(null);
  return Ae(() => {
    t.current = e;
  }, [
    e
  ]), pe((...r) => {
    const n = t.current;
    return n == null ? void 0 : n(...r);
  }, []);
}
function id(e) {
  let [t, r] = te(e), n = re(null), o = nt(() => {
    if (!n.current) return;
    let a = n.current.next();
    if (a.done) {
      n.current = null;
      return;
    }
    t === a.value ? o() : r(a.value);
  });
  Ae(() => {
    n.current && o();
  });
  let s = nt((a) => {
    n.current = a(t), o();
  });
  return [
    t,
    s
  ];
}
let ld = !!(typeof window < "u" && window.document && window.document.createElement), Qt = /* @__PURE__ */ new Map(), br;
typeof FinalizationRegistry < "u" && (br = new FinalizationRegistry((e) => {
  Qt.delete(e);
}));
function Jn(e) {
  let [t, r] = te(e), n = re(null), o = Hc(t), s = re(null);
  if (br && br.register(s, o), ld) {
    const a = Qt.get(o);
    a && !a.includes(n) ? a.push(n) : Qt.set(o, [
      n
    ]);
  }
  return Ae(() => {
    let a = o;
    return () => {
      br && br.unregister(s), Qt.delete(a);
    };
  }, [
    o
  ]), ue(() => {
    let a = n.current;
    return a && r(a), () => {
      a && (n.current = null);
    };
  }), o;
}
function cd(e, t) {
  if (e === t) return e;
  let r = Qt.get(e);
  if (r)
    return r.forEach((o) => o.current = t), t;
  let n = Qt.get(t);
  return n ? (n.forEach((o) => o.current = e), e) : t;
}
function dd(e = []) {
  let t = Jn(), [r, n] = id(t), o = pe(() => {
    n(function* () {
      yield t, yield document.getElementById(t) ? t : void 0;
    });
  }, [
    t,
    n
  ]);
  return Ae(o, [
    t,
    o,
    ...e
  ]), r;
}
function kr(...e) {
  return (...t) => {
    for (let r of e) typeof r == "function" && r(...t);
  };
}
const $e = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, at = (e) => e && "window" in e && e.window === e ? e : $e(e).defaultView || window;
function ud(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function fd(e) {
  return ud(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
let pd = !1;
function qr() {
  return pd;
}
function Ce(e, t) {
  if (!qr()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let r = t;
  for (; r !== null; ) {
    if (r === e) return !0;
    r.tagName === "SLOT" && r.assignedSlot ? r = r.assignedSlot.parentNode : fd(r) ? r = r.host : r = r.parentNode;
  }
  return !1;
}
const Qe = (e = document) => {
  var t;
  if (!qr()) return e.activeElement;
  let r = e.activeElement;
  for (; r && "shadowRoot" in r && (!((t = r.shadowRoot) === null || t === void 0) && t.activeElement); ) r = r.shadowRoot.activeElement;
  return r;
};
function ye(e) {
  return qr() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
class gd {
  get currentNode() {
    return this._currentNode;
  }
  set currentNode(t) {
    if (!Ce(this.root, t)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
    const r = [];
    let n = t, o = t;
    for (this._currentNode = t; n && n !== this.root; ) if (n.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      const a = n, l = this._doc.createTreeWalker(a, this.whatToShow, {
        acceptNode: this._acceptNode
      });
      r.push(l), l.currentNode = o, this._currentSetFor.add(l), n = o = a.host;
    } else n = n.parentNode;
    const s = this._doc.createTreeWalker(this.root, this.whatToShow, {
      acceptNode: this._acceptNode
    });
    r.push(s), s.currentNode = o, this._currentSetFor.add(s), this._walkerStack = r;
  }
  get doc() {
    return this._doc;
  }
  firstChild() {
    let t = this.currentNode, r = this.nextNode();
    return Ce(t, r) ? (r && (this.currentNode = r), r) : (this.currentNode = t, null);
  }
  lastChild() {
    let r = this._walkerStack[0].lastChild();
    return r && (this.currentNode = r), r;
  }
  nextNode() {
    const t = this._walkerStack[0].nextNode();
    if (t) {
      if (t.shadowRoot) {
        var r;
        let o;
        if (typeof this.filter == "function" ? o = this.filter(t) : !((r = this.filter) === null || r === void 0) && r.acceptNode && (o = this.filter.acceptNode(t)), o === NodeFilter.FILTER_ACCEPT)
          return this.currentNode = t, t;
        let s = this.nextNode();
        return s && (this.currentNode = s), s;
      }
      return t && (this.currentNode = t), t;
    } else if (this._walkerStack.length > 1) {
      this._walkerStack.shift();
      let n = this.nextNode();
      return n && (this.currentNode = n), n;
    } else return null;
  }
  previousNode() {
    const t = this._walkerStack[0];
    if (t.currentNode === t.root) {
      if (this._currentSetFor.has(t))
        if (this._currentSetFor.delete(t), this._walkerStack.length > 1) {
          this._walkerStack.shift();
          let o = this.previousNode();
          return o && (this.currentNode = o), o;
        } else return null;
      return null;
    }
    const r = t.previousNode();
    if (r) {
      if (r.shadowRoot) {
        var n;
        let s;
        if (typeof this.filter == "function" ? s = this.filter(r) : !((n = this.filter) === null || n === void 0) && n.acceptNode && (s = this.filter.acceptNode(r)), s === NodeFilter.FILTER_ACCEPT)
          return r && (this.currentNode = r), r;
        let a = this.lastChild();
        return a && (this.currentNode = a), a;
      }
      return r && (this.currentNode = r), r;
    } else if (this._walkerStack.length > 1) {
      this._walkerStack.shift();
      let o = this.previousNode();
      return o && (this.currentNode = o), o;
    } else return null;
  }
  /**
   * @deprecated
   */
  nextSibling() {
    return null;
  }
  /**
   * @deprecated
   */
  previousSibling() {
    return null;
  }
  /**
   * @deprecated
   */
  parentNode() {
    return null;
  }
  constructor(t, r, n, o) {
    this._walkerStack = [], this._currentSetFor = /* @__PURE__ */ new Set(), this._acceptNode = (a) => {
      if (a.nodeType === Node.ELEMENT_NODE) {
        const c = a.shadowRoot;
        if (c) {
          const u = this._doc.createTreeWalker(c, this.whatToShow, {
            acceptNode: this._acceptNode
          });
          return this._walkerStack.unshift(u), NodeFilter.FILTER_ACCEPT;
        } else {
          var l;
          if (typeof this.filter == "function") return this.filter(a);
          if (!((l = this.filter) === null || l === void 0) && l.acceptNode) return this.filter.acceptNode(a);
          if (this.filter === null) return NodeFilter.FILTER_ACCEPT;
        }
      }
      return NodeFilter.FILTER_SKIP;
    }, this._doc = t, this.root = r, this.filter = o ?? null, this.whatToShow = n ?? NodeFilter.SHOW_ALL, this._currentNode = r, this._walkerStack.unshift(t.createTreeWalker(r, n, this._acceptNode));
    const s = r.shadowRoot;
    if (s) {
      const a = this._doc.createTreeWalker(s, this.whatToShow, {
        acceptNode: this._acceptNode
      });
      this._walkerStack.unshift(a);
    }
  }
}
function md(e, t, r, n) {
  return qr() ? new gd(e, t, r, n) : e.createTreeWalker(t, r, n);
}
function Gt(...e) {
  let t = {
    ...e[0]
  };
  for (let r = 1; r < e.length; r++) {
    let n = e[r];
    for (let o in n) {
      let s = t[o], a = n[o];
      typeof s == "function" && typeof a == "function" && // This is a lot faster than a regex.
      o[0] === "o" && o[1] === "n" && o.charCodeAt(2) >= /* 'A' */
      65 && o.charCodeAt(2) <= /* 'Z' */
      90 ? t[o] = kr(s, a) : (o === "className" || o === "UNSAFE_className") && typeof s == "string" && typeof a == "string" ? t[o] = be(s, a) : o === "id" && s && a ? t.id = cd(s, a) : t[o] = a !== void 0 ? a : s;
    }
  }
  return t;
}
const bd = /* @__PURE__ */ new Set([
  "id"
]), hd = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), vd = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), xd = /^(data-.*)$/;
function ea(e, t = {}) {
  let { labelable: r, isLink: n, propNames: o } = t, s = {};
  for (const a in e) Object.prototype.hasOwnProperty.call(e, a) && (bd.has(a) || r && hd.has(a) || n && vd.has(a) || o != null && o.has(a) || xd.test(a)) && (s[a] = e[a]);
  return s;
}
function tr(e) {
  if (yd()) e.focus({
    preventScroll: !0
  });
  else {
    let t = wd(e);
    e.focus(), $d(t);
  }
}
let Tr = null;
function yd() {
  if (Tr == null) {
    Tr = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return Tr = !0, !0;
        }
      });
    } catch {
    }
  }
  return Tr;
}
function wd(e) {
  let t = e.parentNode, r = [], n = document.scrollingElement || document.documentElement;
  for (; t instanceof HTMLElement && t !== n; )
    (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && r.push({
      element: t,
      scrollTop: t.scrollTop,
      scrollLeft: t.scrollLeft
    }), t = t.parentNode;
  return n instanceof HTMLElement && r.push({
    element: n,
    scrollTop: n.scrollTop,
    scrollLeft: n.scrollLeft
  }), r;
}
function $d(e) {
  for (let { element: t, scrollTop: r, scrollLeft: n } of e)
    t.scrollTop = r, t.scrollLeft = n;
}
function Xr(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((r) => e.test(r.brand))) || e.test(window.navigator.userAgent);
}
function Qn(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function kt(e) {
  if (process.env.NODE_ENV === "test") return e;
  let t = null;
  return () => (t == null && (t = e()), t);
}
const rr = kt(function() {
  return Qn(/^Mac/i);
}), kd = kt(function() {
  return Qn(/^iPhone/i);
}), ta = kt(function() {
  return Qn(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  rr() && navigator.maxTouchPoints > 1;
}), Zr = kt(function() {
  return kd() || ta();
});
kt(function() {
  return rr() || Zr();
});
const ra = kt(function() {
  return Xr(/AppleWebKit/i) && !na();
}), na = kt(function() {
  return Xr(/Chrome/i);
}), eo = kt(function() {
  return Xr(/Android/i);
}), Nd = kt(function() {
  return Xr(/Firefox/i);
});
function Nr(e, t, r = !0) {
  var n, o;
  let { metaKey: s, ctrlKey: a, altKey: l, shiftKey: c } = t;
  Nd() && (!((o = window.event) === null || o === void 0 || (n = o.type) === null || n === void 0) && n.startsWith("key")) && e.target === "_blank" && (rr() ? s = !0 : a = !0);
  let u = ra() && rr() && !ta() && process.env.NODE_ENV !== "test" ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: s,
    ctrlKey: a,
    altKey: l,
    shiftKey: c
  }) : new MouseEvent("click", {
    metaKey: s,
    ctrlKey: a,
    altKey: l,
    shiftKey: c,
    bubbles: !0,
    cancelable: !0
  });
  Nr.isOpening = r, tr(e), e.dispatchEvent(u), Nr.isOpening = !1;
}
Nr.isOpening = !1;
let Ct = /* @__PURE__ */ new Map(), jn = /* @__PURE__ */ new Set();
function Do() {
  if (typeof window > "u") return;
  function e(n) {
    return "propertyName" in n;
  }
  let t = (n) => {
    if (!e(n) || !n.target) return;
    let o = Ct.get(n.target);
    o || (o = /* @__PURE__ */ new Set(), Ct.set(n.target, o), n.target.addEventListener("transitioncancel", r, {
      once: !0
    })), o.add(n.propertyName);
  }, r = (n) => {
    if (!e(n) || !n.target) return;
    let o = Ct.get(n.target);
    if (o && (o.delete(n.propertyName), o.size === 0 && (n.target.removeEventListener("transitioncancel", r), Ct.delete(n.target)), Ct.size === 0)) {
      for (let s of jn) s();
      jn.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", r);
}
typeof document < "u" && (document.readyState !== "loading" ? Do() : document.addEventListener("DOMContentLoaded", Do));
function Ed() {
  for (const [e] of Ct)
    "isConnected" in e && !e.isConnected && Ct.delete(e);
}
function oa(e) {
  requestAnimationFrame(() => {
    Ed(), Ct.size === 0 ? e() : jn.add(e);
  });
}
function to() {
  let e = re(/* @__PURE__ */ new Map()), t = pe((o, s, a, l) => {
    let c = l != null && l.once ? (...u) => {
      e.current.delete(a), a(...u);
    } : a;
    e.current.set(a, {
      type: s,
      eventTarget: o,
      fn: c,
      options: l
    }), o.addEventListener(s, c, l);
  }, []), r = pe((o, s, a, l) => {
    var c;
    let u = ((c = e.current.get(a)) === null || c === void 0 ? void 0 : c.fn) || a;
    o.removeEventListener(s, u, l), e.current.delete(a);
  }, []), n = pe(() => {
    e.current.forEach((o, s) => {
      r(o.eventTarget, o.type, s, o.options);
    });
  }, [
    r
  ]);
  return ue(() => n, [
    n
  ]), {
    addGlobalListener: t,
    removeGlobalListener: r,
    removeAllGlobalListeners: n
  };
}
function jd(e, t) {
  let { id: r, "aria-label": n, "aria-labelledby": o } = e;
  return r = Jn(r), o && n ? o = [
    .../* @__PURE__ */ new Set([
      r,
      ...o.trim().split(/\s+/)
    ])
  ].join(" ") : o && (o = o.trim().split(/\s+/).join(" ")), !n && !o && t && (n = t), {
    id: r,
    "aria-label": n,
    "aria-labelledby": o
  };
}
function Pd() {
  return typeof window.ResizeObserver < "u";
}
function zo(e) {
  const { ref: t, box: r, onResize: n } = e;
  ue(() => {
    let o = t == null ? void 0 : t.current;
    if (o)
      if (Pd()) {
        const s = new window.ResizeObserver((a) => {
          a.length && n();
        });
        return s.observe(o, {
          box: r
        }), () => {
          o && s.unobserve(o);
        };
      } else
        return window.addEventListener("resize", n, !1), () => {
          window.removeEventListener("resize", n, !1);
        };
  }, [
    n,
    t,
    r
  ]);
}
function sa(e, t) {
  Ae(() => {
    if (e && e.ref && t)
      return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function Fo(e, t) {
  if (!e) return !1;
  let r = window.getComputedStyle(e), n = /(auto|scroll)/.test(r.overflow + r.overflowX + r.overflowY);
  return n && t && (n = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), n;
}
function aa(e, t) {
  let r = e;
  for (Fo(r, t) && (r = r.parentElement); r && !Fo(r, t); ) r = r.parentElement;
  return r || document.scrollingElement || document.documentElement;
}
function Pn(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : eo() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Td(e) {
  return !eo() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
const ro = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable^="false"])'
], Sd = ro.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
ro.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const Cd = ro.join(':not([hidden]):not([tabindex="-1"]),');
function ia(e) {
  return e.matches(Sd);
}
function Rd(e) {
  return e.matches(Cd);
}
function Ld(e, t, r) {
  let [n, o] = te(e || t), s = re(e !== void 0), a = e !== void 0;
  ue(() => {
    let u = s.current;
    u !== a && process.env.NODE_ENV !== "production" && console.warn(`WARN: A component changed from ${u ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}.`), s.current = a;
  }, [
    a
  ]);
  let l = a ? e : n, c = pe((u, ...d) => {
    let f = (h, ...b) => {
      r && (Object.is(l, h) || r(h, ...b)), a || (l = h);
    };
    typeof u == "function" ? (process.env.NODE_ENV !== "production" && console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), o((b, ...w) => {
      let v = u(a ? l : b, ...w);
      return f(v, ...d), a ? b : v;
    })) : (a || o(u), f(u, ...d));
  }, [
    a,
    l,
    r
  ]);
  return [
    l,
    c
  ];
}
function Tn(e, t = -1 / 0, r = 1 / 0) {
  return Math.min(Math.max(e, t), r);
}
const pt = {
  top: "top",
  bottom: "top",
  left: "left",
  right: "left"
}, Vr = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Ad = {
  top: "left",
  left: "top"
}, Sn = {
  top: "height",
  left: "width"
}, la = {
  width: "totalWidth",
  height: "totalHeight"
}, Sr = {};
let Ve = typeof document < "u" ? window.visualViewport : null;
function Vo(e) {
  let t = 0, r = 0, n = 0, o = 0, s = 0, a = 0, l = {};
  var c;
  let u = ((c = Ve == null ? void 0 : Ve.scale) !== null && c !== void 0 ? c : 1) > 1;
  if (e.tagName === "BODY") {
    let w = document.documentElement;
    n = w.clientWidth, o = w.clientHeight;
    var d;
    t = (d = Ve == null ? void 0 : Ve.width) !== null && d !== void 0 ? d : n;
    var f;
    r = (f = Ve == null ? void 0 : Ve.height) !== null && f !== void 0 ? f : o, l.top = w.scrollTop || e.scrollTop, l.left = w.scrollLeft || e.scrollLeft, Ve && (s = Ve.offsetTop, a = Ve.offsetLeft);
  } else
    ({ width: t, height: r, top: s, left: a } = er(e)), l.top = e.scrollTop, l.left = e.scrollLeft, n = t, o = r;
  if (ra() && (e.tagName === "BODY" || e.tagName === "HTML") && u) {
    l.top = 0, l.left = 0;
    var h;
    s = (h = Ve == null ? void 0 : Ve.pageTop) !== null && h !== void 0 ? h : 0;
    var b;
    a = (b = Ve == null ? void 0 : Ve.pageLeft) !== null && b !== void 0 ? b : 0;
  }
  return {
    width: t,
    height: r,
    totalWidth: n,
    totalHeight: o,
    scroll: l,
    top: s,
    left: a
  };
}
function Id(e) {
  return {
    top: e.scrollTop,
    left: e.scrollLeft,
    width: e.scrollWidth,
    height: e.scrollHeight
  };
}
function Bo(e, t, r, n, o, s, a) {
  var l;
  let c = (l = o.scroll[e]) !== null && l !== void 0 ? l : 0, u = n[Sn[e]], d = n.scroll[pt[e]] + s, f = u + n.scroll[pt[e]] - s, h = t - c + a[e] - n[pt[e]], b = t - c + r + a[e] - n[pt[e]];
  return h < d ? d - h : b > f ? Math.max(f - b, d - h) : 0;
}
function Od(e) {
  let t = window.getComputedStyle(e);
  return {
    top: parseInt(t.marginTop, 10) || 0,
    bottom: parseInt(t.marginBottom, 10) || 0,
    left: parseInt(t.marginLeft, 10) || 0,
    right: parseInt(t.marginRight, 10) || 0
  };
}
function Go(e) {
  if (Sr[e]) return Sr[e];
  let [t, r] = e.split(" "), n = pt[t] || "right", o = Ad[n];
  pt[r] || (r = "center");
  let s = Sn[n], a = Sn[o];
  return Sr[e] = {
    placement: t,
    crossPlacement: r,
    axis: n,
    crossAxis: o,
    size: s,
    crossSize: a
  }, Sr[e];
}
function un(e, t, r, n, o, s, a, l, c, u) {
  let { placement: d, crossPlacement: f, axis: h, crossAxis: b, size: w, crossSize: v } = n, E = {};
  var j;
  E[b] = (j = e[b]) !== null && j !== void 0 ? j : 0;
  var N, S, L, R;
  f === "center" ? E[b] += (((N = e[v]) !== null && N !== void 0 ? N : 0) - ((S = r[v]) !== null && S !== void 0 ? S : 0)) / 2 : f !== b && (E[b] += ((L = e[v]) !== null && L !== void 0 ? L : 0) - ((R = r[v]) !== null && R !== void 0 ? R : 0)), E[b] += s;
  const C = e[b] - r[v] + c + u, K = e[b] + e[v] - c - u;
  if (E[b] = Tn(E[b], C, K), d === h) {
    const z = l ? a[w] : t[la[w]];
    E[Vr[h]] = Math.floor(z - e[h] + o);
  } else E[h] = Math.floor(e[h] + e[w] + o);
  return E;
}
function Md(e, t, r, n, o, s, a, l) {
  const c = n ? r.height : t[la.height];
  var u;
  let d = e.top != null ? r.top + e.top : r.top + (c - ((u = e.bottom) !== null && u !== void 0 ? u : 0) - a);
  var f, h, b, w, v, E;
  let j = l !== "top" ? (
    // We want the distance between the top of the overlay to the bottom of the boundary
    Math.max(0, t.height + t.top + ((f = t.scroll.top) !== null && f !== void 0 ? f : 0) - d - (((h = o.top) !== null && h !== void 0 ? h : 0) + ((b = o.bottom) !== null && b !== void 0 ? b : 0) + s))
  ) : Math.max(0, d + a - (t.top + ((w = t.scroll.top) !== null && w !== void 0 ? w : 0)) - (((v = o.top) !== null && v !== void 0 ? v : 0) + ((E = o.bottom) !== null && E !== void 0 ? E : 0) + s));
  return Math.min(t.height - s * 2, j);
}
function Ho(e, t, r, n, o, s) {
  let { placement: a, axis: l, size: c } = s;
  var u, d;
  if (a === l) return Math.max(0, r[l] - e[l] - ((u = e.scroll[l]) !== null && u !== void 0 ? u : 0) + t[l] - ((d = n[l]) !== null && d !== void 0 ? d : 0) - n[Vr[l]] - o);
  var f;
  return Math.max(0, e[c] + e[l] + e.scroll[l] - t[l] - r[l] - r[c] - ((f = n[l]) !== null && f !== void 0 ? f : 0) - n[Vr[l]] - o);
}
function _d(e, t, r, n, o, s, a, l, c, u, d, f, h, b, w, v) {
  let E = Go(e), { size: j, crossAxis: N, crossSize: S, placement: L, crossPlacement: R } = E, C = un(t, l, r, E, d, f, u, h, w, v), K = d, z = Ho(l, u, t, o, s + d, E);
  if (a && n[j] > z) {
    let B = Go(`${Vr[L]} ${R}`), W = un(t, l, r, B, d, f, u, h, w, v);
    Ho(l, u, t, o, s + d, B) > z && (E = B, C = W, K = d);
  }
  let I = "bottom";
  E.axis === "top" ? E.placement === "top" ? I = "top" : E.placement === "bottom" && (I = "bottom") : E.crossAxis === "top" && (E.crossPlacement === "top" ? I = "bottom" : E.crossPlacement === "bottom" && (I = "top"));
  let O = Bo(N, C[N], r[S], l, c, s, u);
  C[N] += O;
  let p = Md(C, l, u, h, o, s, r.height, I);
  b && b < p && (p = b), r.height = Math.min(r.height, p), C = un(t, l, r, E, K, f, u, h, w, v), O = Bo(N, C[N], r[S], l, c, s, u), C[N] += O;
  let x = {}, m = t[N] + 0.5 * t[S] - C[N] - o[pt[N]];
  const $ = w / 2 + v;
  var A, g, k, P;
  const T = pt[N] === "left" ? ((A = o.left) !== null && A !== void 0 ? A : 0) + ((g = o.right) !== null && g !== void 0 ? g : 0) : ((k = o.top) !== null && k !== void 0 ? k : 0) + ((P = o.bottom) !== null && P !== void 0 ? P : 0), U = r[S] - T - w / 2 - v, F = t[N] + w / 2 - (C[N] + o[pt[N]]), H = t[N] + t[S] - w / 2 - (C[N] + o[pt[N]]), ne = Tn(m, F, H);
  return x[N] = Tn(ne, $, U), {
    position: C,
    maxHeight: p,
    arrowOffsetLeft: x.left,
    arrowOffsetTop: x.top,
    placement: E.placement
  };
}
function Dd(e) {
  let { placement: t, targetNode: r, overlayNode: n, scrollNode: o, padding: s, shouldFlip: a, boundaryElement: l, offset: c, crossOffset: u, maxHeight: d, arrowSize: f = 0, arrowBoundaryOffset: h = 0 } = e, b = n instanceof HTMLElement ? zd(n) : document.documentElement, w = b === document.documentElement;
  const v = window.getComputedStyle(b).position;
  let E = !!v && v !== "static", j = w ? er(r) : Wo(r, b);
  if (!w) {
    let { marginTop: x, marginLeft: m } = window.getComputedStyle(r);
    j.top += parseInt(x, 10) || 0, j.left += parseInt(m, 10) || 0;
  }
  let N = er(n), S = Od(n);
  var L, R;
  N.width += ((L = S.left) !== null && L !== void 0 ? L : 0) + ((R = S.right) !== null && R !== void 0 ? R : 0);
  var C, K;
  N.height += ((C = S.top) !== null && C !== void 0 ? C : 0) + ((K = S.bottom) !== null && K !== void 0 ? K : 0);
  let z = Id(o), I = Vo(l), O = Vo(b), p = l.tagName === "BODY" ? er(b) : Wo(b, l);
  return b.tagName === "HTML" && l.tagName === "BODY" && (O.scroll.top = 0, O.scroll.left = 0), _d(t, j, N, z, S, s, a, I, O, p, c, u, E, d, f, h);
}
function er(e) {
  let { top: t, left: r, width: n, height: o } = e.getBoundingClientRect(), { scrollTop: s, scrollLeft: a, clientTop: l, clientLeft: c } = document.documentElement;
  return {
    top: t + s - l,
    left: r + a - c,
    width: n,
    height: o
  };
}
function Wo(e, t) {
  let r = window.getComputedStyle(e), n;
  if (r.position === "fixed") {
    let { top: o, left: s, width: a, height: l } = e.getBoundingClientRect();
    n = {
      top: o,
      left: s,
      width: a,
      height: l
    };
  } else {
    n = er(e);
    let o = er(t), s = window.getComputedStyle(t);
    o.top += (parseInt(s.borderTopWidth, 10) || 0) - t.scrollTop, o.left += (parseInt(s.borderLeftWidth, 10) || 0) - t.scrollLeft, n.top -= o.top, n.left -= o.left;
  }
  return n.top -= parseInt(r.marginTop, 10) || 0, n.left -= parseInt(r.marginLeft, 10) || 0, n;
}
function zd(e) {
  let t = e.offsetParent;
  if (t && t === document.body && window.getComputedStyle(t).position === "static" && !Ko(t) && (t = document.documentElement), t == null)
    for (t = e.parentElement; t && !Ko(t); ) t = t.parentElement;
  return t || document.documentElement;
}
function Ko(e) {
  let t = window.getComputedStyle(e);
  return t.transform !== "none" || /transform|perspective/.test(t.willChange) || t.filter !== "none" || t.contain === "paint" || "backdropFilter" in t && t.backdropFilter !== "none" || "WebkitBackdropFilter" in t && t.WebkitBackdropFilter !== "none";
}
const ca = /* @__PURE__ */ new WeakMap();
function Fd(e) {
  let { triggerRef: t, isOpen: r, onClose: n } = e;
  ue(() => {
    if (!r || n === null) return;
    let o = (s) => {
      let a = s.target;
      if (!t.current || a instanceof Node && !a.contains(t.current) || s.target instanceof HTMLInputElement || s.target instanceof HTMLTextAreaElement) return;
      let l = n || ca.get(t.current);
      l && l();
    };
    return window.addEventListener("scroll", o, !0), () => {
      window.removeEventListener("scroll", o, !0);
    };
  }, [
    r,
    n,
    t
  ]);
}
let Le = typeof document < "u" ? window.visualViewport : null;
function Vd(e) {
  let { direction: t } = Qs(), { arrowSize: r = 0, targetRef: n, overlayRef: o, scrollRef: s = o, placement: a = "bottom", containerPadding: l = 12, shouldFlip: c = !0, boundaryElement: u = typeof document < "u" ? document.body : null, offset: d = 0, crossOffset: f = 0, shouldUpdatePosition: h = !0, isOpen: b = !0, onClose: w, maxHeight: v, arrowBoundaryOffset: E = 0 } = e, [j, N] = te(null), S = [
    h,
    a,
    o.current,
    n.current,
    s.current,
    l,
    c,
    u,
    d,
    f,
    b,
    t,
    v,
    E,
    r
  ], L = re(Le == null ? void 0 : Le.scale);
  ue(() => {
    b && (L.current = Le == null ? void 0 : Le.scale);
  }, [
    b
  ]);
  let R = pe(() => {
    if (h === !1 || !b || !o.current || !n.current || !u || (Le == null ? void 0 : Le.scale) !== L.current) return;
    let O = null;
    if (s.current && s.current.contains(document.activeElement)) {
      var p;
      let P = (p = document.activeElement) === null || p === void 0 ? void 0 : p.getBoundingClientRect(), T = s.current.getBoundingClientRect();
      var x;
      if (O = {
        type: "top",
        offset: ((x = P == null ? void 0 : P.top) !== null && x !== void 0 ? x : 0) - T.top
      }, O.offset > T.height / 2) {
        O.type = "bottom";
        var m;
        O.offset = ((m = P == null ? void 0 : P.bottom) !== null && m !== void 0 ? m : 0) - T.bottom;
      }
    }
    let $ = o.current;
    if (!v && o.current) {
      var A;
      $.style.top = "0px", $.style.bottom = "";
      var g;
      $.style.maxHeight = ((g = (A = window.visualViewport) === null || A === void 0 ? void 0 : A.height) !== null && g !== void 0 ? g : window.innerHeight) + "px";
    }
    let k = Dd({
      placement: Gd(a, t),
      overlayNode: o.current,
      targetNode: n.current,
      scrollNode: s.current || o.current,
      padding: l,
      shouldFlip: c,
      boundaryElement: u,
      offset: d,
      crossOffset: f,
      maxHeight: v,
      arrowSize: r,
      arrowBoundaryOffset: E
    });
    if (k.position) {
      if ($.style.top = "", $.style.bottom = "", $.style.left = "", $.style.right = "", Object.keys(k.position).forEach((P) => $.style[P] = k.position[P] + "px"), $.style.maxHeight = k.maxHeight != null ? k.maxHeight + "px" : "", O && document.activeElement && s.current) {
        let P = document.activeElement.getBoundingClientRect(), T = s.current.getBoundingClientRect(), U = P[O.type] - T[O.type];
        s.current.scrollTop += U - O.offset;
      }
      N(k);
    }
  }, S);
  Ae(R, S), Bd(R), zo({
    ref: o,
    onResize: R
  }), zo({
    ref: n,
    onResize: R
  });
  let C = re(!1);
  Ae(() => {
    let O, p = () => {
      C.current = !0, clearTimeout(O), O = setTimeout(() => {
        C.current = !1;
      }, 500), R();
    }, x = () => {
      C.current && p();
    };
    return Le == null || Le.addEventListener("resize", p), Le == null || Le.addEventListener("scroll", x), () => {
      Le == null || Le.removeEventListener("resize", p), Le == null || Le.removeEventListener("scroll", x);
    };
  }, [
    R
  ]);
  let K = pe(() => {
    C.current || w == null || w();
  }, [
    w,
    C
  ]);
  Fd({
    triggerRef: n,
    isOpen: b,
    onClose: w && K
  });
  var z, I;
  return {
    overlayProps: {
      style: {
        position: "absolute",
        zIndex: 1e5,
        ...j == null ? void 0 : j.position,
        maxHeight: (z = j == null ? void 0 : j.maxHeight) !== null && z !== void 0 ? z : "100vh"
      }
    },
    placement: (I = j == null ? void 0 : j.placement) !== null && I !== void 0 ? I : null,
    arrowProps: {
      "aria-hidden": "true",
      role: "presentation",
      style: {
        left: j == null ? void 0 : j.arrowOffsetLeft,
        top: j == null ? void 0 : j.arrowOffsetTop
      }
    },
    updatePosition: R
  };
}
function Bd(e) {
  Ae(() => (window.addEventListener("resize", e, !1), () => {
    window.removeEventListener("resize", e, !1);
  }), [
    e
  ]);
}
function Gd(e, t) {
  return t === "rtl" ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right");
}
function Hd(e) {
  const t = at(e);
  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
  let { display: r, visibility: n } = e.style, o = r !== "none" && n !== "hidden" && n !== "collapse";
  if (o) {
    const { getComputedStyle: s } = e.ownerDocument.defaultView;
    let { display: a, visibility: l } = s(e);
    o = a !== "none" && l !== "hidden" && l !== "collapse";
  }
  return o;
}
function Wd(e, t) {
  return !e.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function da(e, t) {
  return e.nodeName !== "#comment" && Hd(e) && Wd(e, t) && (!e.parentElement || da(e.parentElement, e));
}
function no(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function ua(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function fa(e) {
  let t = re({
    isFocused: !1,
    observer: null
  });
  Ae(() => {
    const n = t.current;
    return () => {
      n.observer && (n.observer.disconnect(), n.observer = null);
    };
  }, []);
  let r = nt((n) => {
    e == null || e(n);
  });
  return pe((n) => {
    if (n.target instanceof HTMLButtonElement || n.target instanceof HTMLInputElement || n.target instanceof HTMLTextAreaElement || n.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let o = n.target, s = (a) => {
        if (t.current.isFocused = !1, o.disabled) {
          let l = no(a);
          r(l);
        }
        t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      o.addEventListener("focusout", s, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && o.disabled) {
          var a;
          (a = t.current.observer) === null || a === void 0 || a.disconnect();
          let l = o === document.activeElement ? null : document.activeElement;
          o.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: l
          })), o.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: l
          }));
        }
      }), t.current.observer.observe(o, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    r
  ]);
}
let Br = !1;
function Uo(e) {
  for (; e && !ia(e); ) e = e.parentElement;
  let t = at(e), r = t.document.activeElement;
  if (!r || r === e) return;
  Br = !0;
  let n = !1, o = (d) => {
    (d.target === r || n) && d.stopImmediatePropagation();
  }, s = (d) => {
    (d.target === r || n) && (d.stopImmediatePropagation(), !e && !n && (n = !0, tr(r), c()));
  }, a = (d) => {
    (d.target === e || n) && d.stopImmediatePropagation();
  }, l = (d) => {
    (d.target === e || n) && (d.stopImmediatePropagation(), n || (n = !0, tr(r), c()));
  };
  t.addEventListener("blur", o, !0), t.addEventListener("focusout", s, !0), t.addEventListener("focusin", l, !0), t.addEventListener("focus", a, !0);
  let c = () => {
    cancelAnimationFrame(u), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", s, !0), t.removeEventListener("focusin", l, !0), t.removeEventListener("focus", a, !0), Br = !1, n = !1;
  }, u = requestAnimationFrame(c);
  return c;
}
let Zt = "default", Cn = "", zr = /* @__PURE__ */ new WeakMap();
function Yo(e) {
  if (Zr()) {
    if (Zt === "default") {
      const t = $e(e);
      Cn = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    Zt = "disabled";
  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    zr.set(e, e.style[t]), e.style[t] = "none";
  }
}
function fn(e) {
  if (Zr()) {
    if (Zt !== "disabled") return;
    Zt = "restoring", setTimeout(() => {
      oa(() => {
        if (Zt === "restoring") {
          const t = $e(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = Cn || ""), Cn = "", Zt = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && zr.has(e)) {
    let t = zr.get(e), r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    e.style[r] === "none" && (e.style[r] = t), e.getAttribute("style") === "" && e.removeAttribute("style"), zr.delete(e);
  }
}
const oo = ie.createContext({
  register: () => {
  }
});
oo.displayName = "PressResponderContext";
function Kd(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function pa(e, t, r) {
  if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
  return t.get(e);
}
function Ud(e, t) {
  var r = pa(e, t, "get");
  return Kd(e, r);
}
function Yd(e, t, r) {
  if (t.set) t.set.call(e, r);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = r;
  }
}
function qo(e, t, r) {
  var n = pa(e, t, "set");
  return Yd(e, n, r), r;
}
function qd(e) {
  let t = mt(oo);
  if (t) {
    let { register: r, ...n } = t;
    e = Gt(n, e), r();
  }
  return sa(t, e.ref), e;
}
var Cr = /* @__PURE__ */ new WeakMap();
class Rr {
  continuePropagation() {
    qo(this, Cr, !1);
  }
  get shouldStopPropagation() {
    return Ud(this, Cr);
  }
  constructor(t, r, n, o) {
    ad(this, Cr, {
      writable: !0,
      value: void 0
    }), qo(this, Cr, !0);
    var s;
    let a = (s = o == null ? void 0 : o.target) !== null && s !== void 0 ? s : n.currentTarget;
    const l = a == null ? void 0 : a.getBoundingClientRect();
    let c, u = 0, d, f = null;
    n.clientX != null && n.clientY != null && (d = n.clientX, f = n.clientY), l && (d != null && f != null ? (c = d - l.left, u = f - l.top) : (c = l.width / 2, u = l.height / 2)), this.type = t, this.pointerType = r, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = c, this.y = u;
  }
}
const Xo = Symbol("linkClicked"), Zo = "react-aria-pressable-style", Jo = "data-react-aria-pressable";
function Xd(e) {
  let { onPress: t, onPressChange: r, onPressStart: n, onPressEnd: o, onPressUp: s, onClick: a, isDisabled: l, isPressed: c, preventFocusOnPress: u, shouldCancelOnPointerExit: d, allowTextSelectionOnPress: f, ref: h, ...b } = qd(e), [w, v] = te(!1), E = re({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: j, removeAllGlobalListeners: N } = to(), S = nt((p, x) => {
    let m = E.current;
    if (l || m.didFirePressStart) return !1;
    let $ = !0;
    if (m.isTriggeringEvent = !0, n) {
      let A = new Rr("pressstart", x, p);
      n(A), $ = A.shouldStopPropagation;
    }
    return r && r(!0), m.isTriggeringEvent = !1, m.didFirePressStart = !0, v(!0), $;
  }), L = nt((p, x, m = !0) => {
    let $ = E.current;
    if (!$.didFirePressStart) return !1;
    $.didFirePressStart = !1, $.isTriggeringEvent = !0;
    let A = !0;
    if (o) {
      let g = new Rr("pressend", x, p);
      o(g), A = g.shouldStopPropagation;
    }
    if (r && r(!1), v(!1), t && m && !l) {
      let g = new Rr("press", x, p);
      t(g), A && (A = g.shouldStopPropagation);
    }
    return $.isTriggeringEvent = !1, A;
  }), R = nt((p, x) => {
    let m = E.current;
    if (l) return !1;
    if (s) {
      m.isTriggeringEvent = !0;
      let $ = new Rr("pressup", x, p);
      return s($), m.isTriggeringEvent = !1, $.shouldStopPropagation;
    }
    return !0;
  }), C = nt((p) => {
    let x = E.current;
    if (x.isPressed && x.target) {
      x.didFirePressStart && x.pointerType != null && L(Dt(x.target, p), x.pointerType, !1), x.isPressed = !1, x.isOverTarget = !1, x.activePointerId = null, x.pointerType = null, N(), f || fn(x.target);
      for (let m of x.disposables) m();
      x.disposables = [];
    }
  }), K = nt((p) => {
    d && C(p);
  }), z = nt((p) => {
    a == null || a(p);
  }), I = nt((p, x) => {
    if (a) {
      let m = new MouseEvent("click", p);
      ua(m, x), a(no(m));
    }
  }), O = _e(() => {
    let p = E.current, x = {
      onKeyDown($) {
        if (pn($.nativeEvent, $.currentTarget) && Ce($.currentTarget, ye($.nativeEvent))) {
          var A;
          ts(ye($.nativeEvent), $.key) && $.preventDefault();
          let g = !0;
          if (!p.isPressed && !$.repeat) {
            p.target = $.currentTarget, p.isPressed = !0, p.pointerType = "keyboard", g = S($, "keyboard");
            let k = $.currentTarget, P = (T) => {
              pn(T, k) && !T.repeat && Ce(k, ye(T)) && p.target && R(Dt(p.target, T), "keyboard");
            };
            j($e($.currentTarget), "keyup", kr(P, m), !0);
          }
          g && $.stopPropagation(), $.metaKey && rr() && ((A = p.metaKeyEvents) === null || A === void 0 || A.set($.key, $.nativeEvent));
        } else $.key === "Meta" && (p.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick($) {
        if (!($ && !Ce($.currentTarget, ye($.nativeEvent))) && $ && $.button === 0 && !p.isTriggeringEvent && !Nr.isOpening) {
          let A = !0;
          if (l && $.preventDefault(), !p.ignoreEmulatedMouseEvents && !p.isPressed && (p.pointerType === "virtual" || Pn($.nativeEvent))) {
            let g = S($, "virtual"), k = R($, "virtual"), P = L($, "virtual");
            z($), A = g && k && P;
          } else if (p.isPressed && p.pointerType !== "keyboard") {
            let g = p.pointerType || $.nativeEvent.pointerType || "virtual", k = R(Dt($.currentTarget, $), g), P = L(Dt($.currentTarget, $), g, !0);
            A = k && P, p.isOverTarget = !1, z($), C($);
          }
          p.ignoreEmulatedMouseEvents = !1, A && $.stopPropagation();
        }
      }
    }, m = ($) => {
      var A;
      if (p.isPressed && p.target && pn($, p.target)) {
        var g;
        ts(ye($), $.key) && $.preventDefault();
        let P = ye($), T = Ce(p.target, ye($));
        L(Dt(p.target, $), "keyboard", T), T && I($, p.target), N(), $.key !== "Enter" && so(p.target) && Ce(p.target, P) && !$[Xo] && ($[Xo] = !0, Nr(p.target, $, !1)), p.isPressed = !1, (g = p.metaKeyEvents) === null || g === void 0 || g.delete($.key);
      } else if ($.key === "Meta" && (!((A = p.metaKeyEvents) === null || A === void 0) && A.size)) {
        var k;
        let P = p.metaKeyEvents;
        p.metaKeyEvents = void 0;
        for (let T of P.values()) (k = p.target) === null || k === void 0 || k.dispatchEvent(new KeyboardEvent("keyup", T));
      }
    };
    if (typeof PointerEvent < "u") {
      x.onPointerDown = (g) => {
        if (g.button !== 0 || !Ce(g.currentTarget, ye(g.nativeEvent))) return;
        if (Td(g.nativeEvent)) {
          p.pointerType = "virtual";
          return;
        }
        p.pointerType = g.pointerType;
        let k = !0;
        if (!p.isPressed) {
          p.isPressed = !0, p.isOverTarget = !0, p.activePointerId = g.pointerId, p.target = g.currentTarget, f || Yo(p.target), k = S(g, p.pointerType);
          let P = ye(g.nativeEvent);
          "releasePointerCapture" in P && P.releasePointerCapture(g.pointerId), j($e(g.currentTarget), "pointerup", $, !1), j($e(g.currentTarget), "pointercancel", A, !1);
        }
        k && g.stopPropagation();
      }, x.onMouseDown = (g) => {
        if (Ce(g.currentTarget, ye(g.nativeEvent)) && g.button === 0) {
          if (u) {
            let k = Uo(g.target);
            k && p.disposables.push(k);
          }
          g.stopPropagation();
        }
      }, x.onPointerUp = (g) => {
        !Ce(g.currentTarget, ye(g.nativeEvent)) || p.pointerType === "virtual" || g.button === 0 && !p.isPressed && R(g, p.pointerType || g.pointerType);
      }, x.onPointerEnter = (g) => {
        g.pointerId === p.activePointerId && p.target && !p.isOverTarget && p.pointerType != null && (p.isOverTarget = !0, S(Dt(p.target, g), p.pointerType));
      }, x.onPointerLeave = (g) => {
        g.pointerId === p.activePointerId && p.target && p.isOverTarget && p.pointerType != null && (p.isOverTarget = !1, L(Dt(p.target, g), p.pointerType, !1), K(g));
      };
      let $ = (g) => {
        if (g.pointerId === p.activePointerId && p.isPressed && g.button === 0 && p.target) {
          if (Ce(p.target, ye(g)) && p.pointerType != null) {
            let k = !1, P = setTimeout(() => {
              p.isPressed && p.target instanceof HTMLElement && (k ? C(g) : (tr(p.target), p.target.click()));
            }, 80);
            j(g.currentTarget, "click", () => k = !0, !0), p.disposables.push(() => clearTimeout(P));
          } else C(g);
          p.isOverTarget = !1;
        }
      }, A = (g) => {
        C(g);
      };
      x.onDragStart = (g) => {
        Ce(g.currentTarget, ye(g.nativeEvent)) && C(g);
      };
    } else if (process.env.NODE_ENV === "test") {
      x.onMouseDown = (g) => {
        if (g.button !== 0 || !Ce(g.currentTarget, ye(g.nativeEvent))) return;
        if (p.ignoreEmulatedMouseEvents) {
          g.stopPropagation();
          return;
        }
        if (p.isPressed = !0, p.isOverTarget = !0, p.target = g.currentTarget, p.pointerType = Pn(g.nativeEvent) ? "virtual" : "mouse", Wi(() => S(g, p.pointerType)) && g.stopPropagation(), u) {
          let P = Uo(g.target);
          P && p.disposables.push(P);
        }
        j($e(g.currentTarget), "mouseup", $, !1);
      }, x.onMouseEnter = (g) => {
        if (!Ce(g.currentTarget, ye(g.nativeEvent))) return;
        let k = !0;
        p.isPressed && !p.ignoreEmulatedMouseEvents && p.pointerType != null && (p.isOverTarget = !0, k = S(g, p.pointerType)), k && g.stopPropagation();
      }, x.onMouseLeave = (g) => {
        if (!Ce(g.currentTarget, ye(g.nativeEvent))) return;
        let k = !0;
        p.isPressed && !p.ignoreEmulatedMouseEvents && p.pointerType != null && (p.isOverTarget = !1, k = L(g, p.pointerType, !1), K(g)), k && g.stopPropagation();
      }, x.onMouseUp = (g) => {
        Ce(g.currentTarget, ye(g.nativeEvent)) && !p.ignoreEmulatedMouseEvents && g.button === 0 && !p.isPressed && R(g, p.pointerType || "mouse");
      };
      let $ = (g) => {
        if (g.button === 0) {
          if (p.ignoreEmulatedMouseEvents) {
            p.ignoreEmulatedMouseEvents = !1;
            return;
          }
          p.target && p.target.contains(g.target) && p.pointerType != null || C(g), p.isOverTarget = !1;
        }
      };
      x.onTouchStart = (g) => {
        if (!Ce(g.currentTarget, ye(g.nativeEvent))) return;
        let k = Zd(g.nativeEvent);
        if (!k) return;
        p.activePointerId = k.identifier, p.ignoreEmulatedMouseEvents = !0, p.isOverTarget = !0, p.isPressed = !0, p.target = g.currentTarget, p.pointerType = "touch", f || Yo(p.target), S(Tt(p.target, g), p.pointerType) && g.stopPropagation(), j(at(g.currentTarget), "scroll", A, !0);
      }, x.onTouchMove = (g) => {
        if (!Ce(g.currentTarget, ye(g.nativeEvent))) return;
        if (!p.isPressed) {
          g.stopPropagation();
          return;
        }
        let k = Qo(g.nativeEvent, p.activePointerId), P = !0;
        k && es(k, g.currentTarget) ? !p.isOverTarget && p.pointerType != null && (p.isOverTarget = !0, P = S(Tt(p.target, g), p.pointerType)) : p.isOverTarget && p.pointerType != null && (p.isOverTarget = !1, P = L(Tt(p.target, g), p.pointerType, !1), K(Tt(p.target, g))), P && g.stopPropagation();
      }, x.onTouchEnd = (g) => {
        if (!Ce(g.currentTarget, ye(g.nativeEvent))) return;
        if (!p.isPressed) {
          g.stopPropagation();
          return;
        }
        let k = Qo(g.nativeEvent, p.activePointerId), P = !0;
        k && es(k, g.currentTarget) && p.pointerType != null ? (R(Tt(p.target, g), p.pointerType), P = L(Tt(p.target, g), p.pointerType), I(g.nativeEvent, p.target)) : p.isOverTarget && p.pointerType != null && (P = L(Tt(p.target, g), p.pointerType, !1)), P && g.stopPropagation(), p.isPressed = !1, p.activePointerId = null, p.isOverTarget = !1, p.ignoreEmulatedMouseEvents = !0, p.target && !f && fn(p.target), N();
      }, x.onTouchCancel = (g) => {
        Ce(g.currentTarget, ye(g.nativeEvent)) && (g.stopPropagation(), p.isPressed && C(Tt(p.target, g)));
      };
      let A = (g) => {
        p.isPressed && Ce(ye(g), p.target) && C({
          currentTarget: p.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      x.onDragStart = (g) => {
        Ce(g.currentTarget, ye(g.nativeEvent)) && C(g);
      };
    }
    return x;
  }, [
    j,
    l,
    u,
    N,
    f,
    C,
    K,
    L,
    S,
    R,
    z,
    I
  ]);
  return ue(() => {
    if (!h || process.env.NODE_ENV === "test") return;
    const p = $e(h.current);
    if (!p || !p.head || p.getElementById(Zo)) return;
    const x = p.createElement("style");
    x.id = Zo, x.textContent = `
@layer {
  [${Jo}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), p.head.prepend(x);
  }, [
    h
  ]), ue(() => {
    let p = E.current;
    return () => {
      var x;
      f || fn((x = p.target) !== null && x !== void 0 ? x : void 0);
      for (let m of p.disposables) m();
      p.disposables = [];
    };
  }, [
    f
  ]), {
    isPressed: c || w,
    pressProps: Gt(b, O, {
      [Jo]: !0
    })
  };
}
function so(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function pn(e, t) {
  const { key: r, code: n } = e, o = t, s = o.getAttribute("role");
  return (r === "Enter" || r === " " || r === "Spacebar" || n === "Space") && !(o instanceof at(o).HTMLInputElement && !ga(o, r) || o instanceof at(o).HTMLTextAreaElement || o.isContentEditable) && // Links should only trigger with Enter key
  !((s === "link" || !s && so(o)) && r !== "Enter");
}
function Zd(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function Qo(e, t) {
  const r = e.changedTouches;
  for (let n = 0; n < r.length; n++) {
    const o = r[n];
    if (o.identifier === t) return o;
  }
  return null;
}
function Tt(e, t) {
  let r = 0, n = 0;
  return t.targetTouches && t.targetTouches.length === 1 && (r = t.targetTouches[0].clientX, n = t.targetTouches[0].clientY), {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey,
    clientX: r,
    clientY: n
  };
}
function Dt(e, t) {
  let r = t.clientX, n = t.clientY;
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey,
    clientX: r,
    clientY: n
  };
}
function Jd(e) {
  let t = 0, r = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? r = e.height / 2 : e.radiusY !== void 0 && (r = e.radiusY), {
    top: e.clientY - r,
    right: e.clientX + t,
    bottom: e.clientY + r,
    left: e.clientX - t
  };
}
function Qd(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function es(e, t) {
  let r = t.getBoundingClientRect(), n = Jd(e);
  return Qd(r, n);
}
function eu(e) {
  return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !so(e);
}
function ts(e, t) {
  return e instanceof HTMLInputElement ? !ga(e, t) : eu(e);
}
const tu = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function ga(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : tu.has(e.type);
}
let or = null, Rn = /* @__PURE__ */ new Set(), yr = /* @__PURE__ */ new Map(), Ht = !1, Ln = !1;
const ru = {
  Tab: !0,
  Escape: !0
};
function ao(e, t) {
  for (let r of Rn) r(e, t);
}
function nu(e) {
  return !(e.metaKey || !rr() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Gr(e) {
  Ht = !0, nu(e) && (or = "keyboard", ao("keyboard", e));
}
function st(e) {
  or = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Ht = !0, ao("pointer", e));
}
function ma(e) {
  Pn(e) && (Ht = !0, or = "virtual");
}
function ba(e) {
  e.target === window || e.target === document || Br || !e.isTrusted || (!Ht && !Ln && (or = "virtual", ao("virtual", e)), Ht = !1, Ln = !1);
}
function ha() {
  Br || (Ht = !1, Ln = !0);
}
function An(e) {
  if (typeof window > "u" || typeof document > "u" || yr.get(at(e))) return;
  const t = at(e), r = $e(e);
  let n = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Ht = !0, n.apply(this, arguments);
  }, r.addEventListener("keydown", Gr, !0), r.addEventListener("keyup", Gr, !0), r.addEventListener("click", ma, !0), t.addEventListener("focus", ba, !0), t.addEventListener("blur", ha, !1), typeof PointerEvent < "u" ? (r.addEventListener("pointerdown", st, !0), r.addEventListener("pointermove", st, !0), r.addEventListener("pointerup", st, !0)) : process.env.NODE_ENV === "test" && (r.addEventListener("mousedown", st, !0), r.addEventListener("mousemove", st, !0), r.addEventListener("mouseup", st, !0)), t.addEventListener("beforeunload", () => {
    va(e);
  }, {
    once: !0
  }), yr.set(t, {
    focus: n
  });
}
const va = (e, t) => {
  const r = at(e), n = $e(e);
  t && n.removeEventListener("DOMContentLoaded", t), yr.has(r) && (r.HTMLElement.prototype.focus = yr.get(r).focus, n.removeEventListener("keydown", Gr, !0), n.removeEventListener("keyup", Gr, !0), n.removeEventListener("click", ma, !0), r.removeEventListener("focus", ba, !0), r.removeEventListener("blur", ha, !1), typeof PointerEvent < "u" ? (n.removeEventListener("pointerdown", st, !0), n.removeEventListener("pointermove", st, !0), n.removeEventListener("pointerup", st, !0)) : process.env.NODE_ENV === "test" && (n.removeEventListener("mousedown", st, !0), n.removeEventListener("mousemove", st, !0), n.removeEventListener("mouseup", st, !0)), yr.delete(r));
};
function ou(e) {
  const t = $e(e);
  let r;
  return t.readyState !== "loading" ? An(e) : (r = () => {
    An(e);
  }, t.addEventListener("DOMContentLoaded", r)), () => va(e, r);
}
typeof document < "u" && ou();
function xa() {
  return or !== "pointer";
}
function ya() {
  return or;
}
const su = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function au(e, t, r) {
  let n = $e(r == null ? void 0 : r.target);
  const o = typeof window < "u" ? at(r == null ? void 0 : r.target).HTMLInputElement : HTMLInputElement, s = typeof window < "u" ? at(r == null ? void 0 : r.target).HTMLTextAreaElement : HTMLTextAreaElement, a = typeof window < "u" ? at(r == null ? void 0 : r.target).HTMLElement : HTMLElement, l = typeof window < "u" ? at(r == null ? void 0 : r.target).KeyboardEvent : KeyboardEvent;
  return e = e || n.activeElement instanceof o && !su.has(n.activeElement.type) || n.activeElement instanceof s || n.activeElement instanceof a && n.activeElement.isContentEditable, !(e && t === "keyboard" && r instanceof l && !ru[r.key]);
}
function iu(e, t, r) {
  An(), ue(() => {
    let n = (o, s) => {
      au(!!(r != null && r.isTextInput), o, s) && e(xa());
    };
    return Rn.add(n), () => {
      Rn.delete(n);
    };
  }, t);
}
function Hr(e) {
  const t = $e(e), r = Qe(t);
  if (ya() === "virtual") {
    let n = r;
    oa(() => {
      Qe(t) === n && e.isConnected && tr(e);
    });
  } else tr(e);
}
function wa(e) {
  let { isDisabled: t, onFocus: r, onBlur: n, onFocusChange: o } = e;
  const s = pe((c) => {
    if (c.target === c.currentTarget)
      return n && n(c), o && o(!1), !0;
  }, [
    n,
    o
  ]), a = fa(s), l = pe((c) => {
    const u = $e(c.target), d = u ? Qe(u) : Qe();
    c.target === c.currentTarget && d === ye(c.nativeEvent) && (r && r(c), o && o(!0), a(c));
  }, [
    o,
    r,
    a
  ]);
  return {
    focusProps: {
      onFocus: !t && (r || o || n) ? l : void 0,
      onBlur: !t && (n || o) ? s : void 0
    }
  };
}
function rs(e) {
  if (!e) return;
  let t = !0;
  return (r) => {
    let n = {
      ...r,
      preventDefault() {
        r.preventDefault();
      },
      isDefaultPrevented() {
        return r.isDefaultPrevented();
      },
      stopPropagation() {
        t && process.env.NODE_ENV !== "production" ? console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.") : t = !0;
      },
      continuePropagation() {
        t = !1;
      },
      isPropagationStopped() {
        return t;
      }
    };
    e(n), t && r.stopPropagation();
  };
}
function lu(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: rs(e.onKeyDown),
      onKeyUp: rs(e.onKeyUp)
    }
  };
}
let cu = /* @__PURE__ */ ie.createContext(null);
function du(e) {
  let t = mt(cu) || {};
  sa(t, e);
  let { ref: r, ...n } = t;
  return n;
}
function uu(e, t) {
  let { focusProps: r } = wa(e), { keyboardProps: n } = lu(e), o = Gt(r, n), s = du(t), a = e.isDisabled ? {} : s, l = re(e.autoFocus);
  ue(() => {
    l.current && t.current && Hr(t.current), l.current = !1;
  }, [
    t
  ]);
  let c = e.excludeFromTabOrder ? -1 : 0;
  return e.isDisabled && (c = void 0), {
    focusableProps: Gt({
      ...o,
      tabIndex: c
    }, a)
  };
}
function fu({ children: e }) {
  let t = _e(() => ({
    register: () => {
    }
  }), []);
  return /* @__PURE__ */ ie.createElement(oo.Provider, {
    value: t
  }, e);
}
function io(e) {
  let { isDisabled: t, onBlurWithin: r, onFocusWithin: n, onFocusWithinChange: o } = e, s = re({
    isFocusWithin: !1
  }), { addGlobalListener: a, removeAllGlobalListeners: l } = to(), c = pe((f) => {
    f.currentTarget.contains(f.target) && s.current.isFocusWithin && !f.currentTarget.contains(f.relatedTarget) && (s.current.isFocusWithin = !1, l(), r && r(f), o && o(!1));
  }, [
    r,
    o,
    s,
    l
  ]), u = fa(c), d = pe((f) => {
    if (!f.currentTarget.contains(f.target)) return;
    const h = $e(f.target), b = Qe(h);
    if (!s.current.isFocusWithin && b === ye(f.nativeEvent)) {
      n && n(f), o && o(!0), s.current.isFocusWithin = !0, u(f);
      let w = f.currentTarget;
      a(h, "focus", (v) => {
        if (s.current.isFocusWithin && !Ce(w, v.target)) {
          let E = new h.defaultView.FocusEvent("blur", {
            relatedTarget: v.target
          });
          ua(E, w);
          let j = no(E);
          c(j);
        }
      }, {
        capture: !0
      });
    }
  }, [
    n,
    o,
    u,
    a,
    c
  ]);
  return t ? {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: d,
      onBlur: c
    }
  };
}
let Wr = !1, gn = 0;
function In() {
  Wr = !0, setTimeout(() => {
    Wr = !1;
  }, 50);
}
function ns(e) {
  e.pointerType === "touch" && In();
}
function pu() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", ns) : process.env.NODE_ENV === "test" && document.addEventListener("touchend", In), gn++, () => {
      gn--, !(gn > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", ns) : process.env.NODE_ENV === "test" && document.removeEventListener("touchend", In));
    };
}
function gu(e) {
  let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, isDisabled: o } = e, [s, a] = te(!1), l = re({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  ue(pu, []);
  let { addGlobalListener: c, removeAllGlobalListeners: u } = to(), { hoverProps: d, triggerHoverEnd: f } = _e(() => {
    let h = (v, E) => {
      if (l.pointerType = E, o || E === "touch" || l.isHovered || !v.currentTarget.contains(v.target)) return;
      l.isHovered = !0;
      let j = v.currentTarget;
      l.target = j, c($e(v.target), "pointerover", (N) => {
        l.isHovered && l.target && !Ce(l.target, N.target) && b(N, N.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: j,
        pointerType: E
      }), r && r(!0), a(!0);
    }, b = (v, E) => {
      let j = l.target;
      l.pointerType = "", l.target = null, !(E === "touch" || !l.isHovered || !j) && (l.isHovered = !1, u(), n && n({
        type: "hoverend",
        target: j,
        pointerType: E
      }), r && r(!1), a(!1));
    }, w = {};
    return typeof PointerEvent < "u" ? (w.onPointerEnter = (v) => {
      Wr && v.pointerType === "mouse" || h(v, v.pointerType);
    }, w.onPointerLeave = (v) => {
      !o && v.currentTarget.contains(v.target) && b(v, v.pointerType);
    }) : process.env.NODE_ENV === "test" && (w.onTouchStart = () => {
      l.ignoreEmulatedMouseEvents = !0;
    }, w.onMouseEnter = (v) => {
      !l.ignoreEmulatedMouseEvents && !Wr && h(v, "mouse"), l.ignoreEmulatedMouseEvents = !1;
    }, w.onMouseLeave = (v) => {
      !o && v.currentTarget.contains(v.target) && b(v, "mouse");
    }), {
      hoverProps: w,
      triggerHoverEnd: b
    };
  }, [
    t,
    r,
    n,
    o,
    l,
    c,
    u
  ]);
  return ue(() => {
    o && f({
      currentTarget: l.target
    }, l.pointerType);
  }, [
    o
  ]), {
    hoverProps: d,
    isHovered: s
  };
}
function mu(e) {
  let { ref: t, onInteractOutside: r, isDisabled: n, onInteractOutsideStart: o } = e, s = re({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }), a = nt((c) => {
    r && Lr(c, t) && (o && o(c), s.current.isPointerDown = !0);
  }), l = nt((c) => {
    r && r(c);
  });
  ue(() => {
    let c = s.current;
    if (n) return;
    const u = t.current, d = $e(u);
    if (typeof PointerEvent < "u") {
      let f = (h) => {
        c.isPointerDown && Lr(h, t) && l(h), c.isPointerDown = !1;
      };
      return d.addEventListener("pointerdown", a, !0), d.addEventListener("click", f, !0), () => {
        d.removeEventListener("pointerdown", a, !0), d.removeEventListener("click", f, !0);
      };
    } else if (process.env.NODE_ENV === "test") {
      let f = (b) => {
        c.ignoreEmulatedMouseEvents ? c.ignoreEmulatedMouseEvents = !1 : c.isPointerDown && Lr(b, t) && l(b), c.isPointerDown = !1;
      }, h = (b) => {
        c.ignoreEmulatedMouseEvents = !0, c.isPointerDown && Lr(b, t) && l(b), c.isPointerDown = !1;
      };
      return d.addEventListener("mousedown", a, !0), d.addEventListener("mouseup", f, !0), d.addEventListener("touchstart", a, !0), d.addEventListener("touchend", h, !0), () => {
        d.removeEventListener("mousedown", a, !0), d.removeEventListener("mouseup", f, !0), d.removeEventListener("touchstart", a, !0), d.removeEventListener("touchend", h, !0);
      };
    }
  }, [
    t,
    n,
    a,
    l
  ]);
}
function Lr(e, t) {
  if (e.button > 0) return !1;
  if (e.target) {
    const r = e.target.ownerDocument;
    if (!r || !r.documentElement.contains(e.target) || e.target.closest("[data-react-aria-top-layer]")) return !1;
  }
  return t.current ? !e.composedPath().includes(t.current) : !1;
}
const os = /* @__PURE__ */ ie.createContext(null), On = "react-aria-focus-scope-restore";
let Pe = null;
function bu(e) {
  let { children: t, contain: r, restoreFocus: n, autoFocus: o } = e, s = re(null), a = re(null), l = re([]), { parentNode: c } = mt(os) || {}, u = _e(() => new _n({
    scopeRef: l
  }), [
    l
  ]);
  Ae(() => {
    let h = c || Me.root;
    if (Me.getTreeNode(h.scopeRef) && Pe && !Kr(Pe, h.scopeRef)) {
      let b = Me.getTreeNode(Pe);
      b && (h = b);
    }
    h.addChild(u), Me.addNode(u);
  }, [
    u,
    c
  ]), Ae(() => {
    let h = Me.getTreeNode(l);
    h && (h.contain = !!r);
  }, [
    r
  ]), Ae(() => {
    var h;
    let b = (h = s.current) === null || h === void 0 ? void 0 : h.nextSibling, w = [], v = (E) => E.stopPropagation();
    for (; b && b !== a.current; )
      w.push(b), b.addEventListener(On, v), b = b.nextSibling;
    return l.current = w, () => {
      for (let E of w) E.removeEventListener(On, v);
    };
  }, [
    t
  ]), wu(l, n, r), vu(l, r), $u(l, n, r), yu(l, o), ue(() => {
    const h = Qe($e(l.current ? l.current[0] : void 0));
    let b = null;
    if (lt(h, l.current)) {
      for (let w of Me.traverse()) w.scopeRef && lt(h, w.scopeRef.current) && (b = w);
      b === Me.getTreeNode(l) && (Pe = b.scopeRef);
    }
  }, [
    l
  ]), Ae(() => () => {
    var h, b, w;
    let v = (w = (b = Me.getTreeNode(l)) === null || b === void 0 || (h = b.parent) === null || h === void 0 ? void 0 : h.scopeRef) !== null && w !== void 0 ? w : null;
    (l === Pe || Kr(l, Pe)) && (!v || Me.getTreeNode(v)) && (Pe = v), Me.removeTreeNode(l);
  }, [
    l
  ]);
  let d = _e(() => hu(l), []), f = _e(() => ({
    focusManager: d,
    parentNode: u
  }), [
    u,
    d
  ]);
  return /* @__PURE__ */ ie.createElement(os.Provider, {
    value: f
  }, /* @__PURE__ */ ie.createElement("span", {
    "data-focus-scope-start": !0,
    hidden: !0,
    ref: s
  }), t, /* @__PURE__ */ ie.createElement("span", {
    "data-focus-scope-end": !0,
    hidden: !0,
    ref: a
  }));
}
function hu(e) {
  return {
    focusNext(t = {}) {
      let r = e.current, { from: n, tabbable: o, wrap: s, accept: a } = t;
      var l;
      let c = n || Qe($e((l = r[0]) !== null && l !== void 0 ? l : void 0)), u = r[0].previousElementSibling, d = Vt(r), f = At(d, {
        tabbable: o,
        accept: a
      }, r);
      f.currentNode = lt(c, r) ? c : u;
      let h = f.nextNode();
      return !h && s && (f.currentNode = u, h = f.nextNode()), h && $t(h, !0), h;
    },
    focusPrevious(t = {}) {
      let r = e.current, { from: n, tabbable: o, wrap: s, accept: a } = t;
      var l;
      let c = n || Qe($e((l = r[0]) !== null && l !== void 0 ? l : void 0)), u = r[r.length - 1].nextElementSibling, d = Vt(r), f = At(d, {
        tabbable: o,
        accept: a
      }, r);
      f.currentNode = lt(c, r) ? c : u;
      let h = f.previousNode();
      return !h && s && (f.currentNode = u, h = f.previousNode()), h && $t(h, !0), h;
    },
    focusFirst(t = {}) {
      let r = e.current, { tabbable: n, accept: o } = t, s = Vt(r), a = At(s, {
        tabbable: n,
        accept: o
      }, r);
      a.currentNode = r[0].previousElementSibling;
      let l = a.nextNode();
      return l && $t(l, !0), l;
    },
    focusLast(t = {}) {
      let r = e.current, { tabbable: n, accept: o } = t, s = Vt(r), a = At(s, {
        tabbable: n,
        accept: o
      }, r);
      a.currentNode = r[r.length - 1].nextElementSibling;
      let l = a.previousNode();
      return l && $t(l, !0), l;
    }
  };
}
function Vt(e) {
  return e[0].parentElement;
}
function hr(e) {
  let t = Me.getTreeNode(Pe);
  for (; t && t.scopeRef !== e; ) {
    if (t.contain) return !1;
    t = t.parent;
  }
  return !0;
}
function vu(e, t) {
  let r = re(void 0), n = re(void 0);
  Ae(() => {
    let o = e.current;
    if (!t) {
      n.current && (cancelAnimationFrame(n.current), n.current = void 0);
      return;
    }
    const s = $e(o ? o[0] : void 0);
    let a = (u) => {
      if (u.key !== "Tab" || u.altKey || u.ctrlKey || u.metaKey || !hr(e) || u.isComposing) return;
      let d = Qe(s), f = e.current;
      if (!f || !lt(d, f)) return;
      let h = Vt(f), b = At(h, {
        tabbable: !0
      }, f);
      if (!d) return;
      b.currentNode = d;
      let w = u.shiftKey ? b.previousNode() : b.nextNode();
      w || (b.currentNode = u.shiftKey ? f[f.length - 1].nextElementSibling : f[0].previousElementSibling, w = u.shiftKey ? b.previousNode() : b.nextNode()), u.preventDefault(), w && $t(w, !0);
    }, l = (u) => {
      (!Pe || Kr(Pe, e)) && lt(ye(u), e.current) ? (Pe = e, r.current = ye(u)) : hr(e) && !Lt(ye(u), e) ? r.current ? r.current.focus() : Pe && Pe.current && Mn(Pe.current) : hr(e) && (r.current = ye(u));
    }, c = (u) => {
      n.current && cancelAnimationFrame(n.current), n.current = requestAnimationFrame(() => {
        let d = ya(), f = (d === "virtual" || d === null) && eo() && na(), h = Qe(s);
        if (!f && h && hr(e) && !Lt(h, e)) {
          Pe = e;
          let w = ye(u);
          if (w && w.isConnected) {
            var b;
            r.current = w, (b = r.current) === null || b === void 0 || b.focus();
          } else Pe.current && Mn(Pe.current);
        }
      });
    };
    return s.addEventListener("keydown", a, !1), s.addEventListener("focusin", l, !1), o == null || o.forEach((u) => u.addEventListener("focusin", l, !1)), o == null || o.forEach((u) => u.addEventListener("focusout", c, !1)), () => {
      s.removeEventListener("keydown", a, !1), s.removeEventListener("focusin", l, !1), o == null || o.forEach((u) => u.removeEventListener("focusin", l, !1)), o == null || o.forEach((u) => u.removeEventListener("focusout", c, !1));
    };
  }, [
    e,
    t
  ]), Ae(() => () => {
    n.current && cancelAnimationFrame(n.current);
  }, [
    n
  ]);
}
function $a(e) {
  return Lt(e);
}
function lt(e, t) {
  return !e || !t ? !1 : t.some((r) => r.contains(e));
}
function Lt(e, t = null) {
  if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
  for (let { scopeRef: r } of Me.traverse(Me.getTreeNode(t)))
    if (r && lt(e, r.current)) return !0;
  return !1;
}
function xu(e) {
  return Lt(e, Pe);
}
function Kr(e, t) {
  var r;
  let n = (r = Me.getTreeNode(t)) === null || r === void 0 ? void 0 : r.parent;
  for (; n; ) {
    if (n.scopeRef === e) return !0;
    n = n.parent;
  }
  return !1;
}
function $t(e, t = !1) {
  if (e != null && !t) try {
    Hr(e);
  } catch {
  }
  else if (e != null) try {
    e.focus();
  } catch {
  }
}
function ka(e, t = !0) {
  let r = e[0].previousElementSibling, n = Vt(e), o = At(n, {
    tabbable: t
  }, e);
  o.currentNode = r;
  let s = o.nextNode();
  return t && !s && (n = Vt(e), o = At(n, {
    tabbable: !1
  }, e), o.currentNode = r, s = o.nextNode()), s;
}
function Mn(e, t = !0) {
  $t(ka(e, t));
}
function yu(e, t) {
  const r = ie.useRef(t);
  ue(() => {
    if (r.current) {
      Pe = e;
      const n = $e(e.current ? e.current[0] : void 0);
      !lt(Qe(n), Pe.current) && e.current && Mn(e.current);
    }
    r.current = !1;
  }, [
    e
  ]);
}
function wu(e, t, r) {
  Ae(() => {
    if (t || r) return;
    let n = e.current;
    const o = $e(n ? n[0] : void 0);
    let s = (a) => {
      let l = ye(a);
      lt(l, e.current) ? Pe = e : $a(l) || (Pe = null);
    };
    return o.addEventListener("focusin", s, !1), n == null || n.forEach((a) => a.addEventListener("focusin", s, !1)), () => {
      o.removeEventListener("focusin", s, !1), n == null || n.forEach((a) => a.removeEventListener("focusin", s, !1));
    };
  }, [
    e,
    t,
    r
  ]);
}
function ss(e) {
  let t = Me.getTreeNode(Pe);
  for (; t && t.scopeRef !== e; ) {
    if (t.nodeToRestore) return !1;
    t = t.parent;
  }
  return (t == null ? void 0 : t.scopeRef) === e;
}
function $u(e, t, r) {
  const n = re(typeof document < "u" ? Qe($e(e.current ? e.current[0] : void 0)) : null);
  Ae(() => {
    let o = e.current;
    const s = $e(o ? o[0] : void 0);
    if (!t || r) return;
    let a = () => {
      (!Pe || Kr(Pe, e)) && lt(Qe(s), e.current) && (Pe = e);
    };
    return s.addEventListener("focusin", a, !1), o == null || o.forEach((l) => l.addEventListener("focusin", a, !1)), () => {
      s.removeEventListener("focusin", a, !1), o == null || o.forEach((l) => l.removeEventListener("focusin", a, !1));
    };
  }, [
    e,
    r
  ]), Ae(() => {
    const o = $e(e.current ? e.current[0] : void 0);
    if (!t) return;
    let s = (a) => {
      if (a.key !== "Tab" || a.altKey || a.ctrlKey || a.metaKey || !hr(e) || a.isComposing) return;
      let l = o.activeElement;
      if (!Lt(l, e) || !ss(e)) return;
      let c = Me.getTreeNode(e);
      if (!c) return;
      let u = c.nodeToRestore, d = At(o.body, {
        tabbable: !0
      });
      d.currentNode = l;
      let f = a.shiftKey ? d.previousNode() : d.nextNode();
      if ((!u || !u.isConnected || u === o.body) && (u = void 0, c.nodeToRestore = void 0), (!f || !Lt(f, e)) && u) {
        d.currentNode = u;
        do
          f = a.shiftKey ? d.previousNode() : d.nextNode();
        while (Lt(f, e));
        a.preventDefault(), a.stopPropagation(), f ? $t(f, !0) : $a(u) ? $t(u, !0) : l.blur();
      }
    };
    return r || o.addEventListener("keydown", s, !0), () => {
      r || o.removeEventListener("keydown", s, !0);
    };
  }, [
    e,
    t,
    r
  ]), Ae(() => {
    const o = $e(e.current ? e.current[0] : void 0);
    if (!t) return;
    let s = Me.getTreeNode(e);
    if (s) {
      var a;
      return s.nodeToRestore = (a = n.current) !== null && a !== void 0 ? a : void 0, () => {
        let l = Me.getTreeNode(e);
        if (!l) return;
        let c = l.nodeToRestore, u = Qe(o);
        if (t && c && (u && Lt(u, e) || u === o.body && ss(e))) {
          let d = Me.clone();
          requestAnimationFrame(() => {
            if (o.activeElement === o.body) {
              let f = d.getTreeNode(e);
              for (; f; ) {
                if (f.nodeToRestore && f.nodeToRestore.isConnected) {
                  as(f.nodeToRestore);
                  return;
                }
                f = f.parent;
              }
              for (f = d.getTreeNode(e); f; ) {
                if (f.scopeRef && f.scopeRef.current && Me.getTreeNode(f.scopeRef)) {
                  let h = ka(f.scopeRef.current, !0);
                  as(h);
                  return;
                }
                f = f.parent;
              }
            }
          });
        }
      };
    }
  }, [
    e,
    t
  ]);
}
function as(e) {
  e.dispatchEvent(new CustomEvent(On, {
    bubbles: !0,
    cancelable: !0
  })) && $t(e);
}
function At(e, t, r) {
  let n = t != null && t.tabbable ? Rd : ia, o = (e == null ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null, s = $e(o), a = md(s, e || s, NodeFilter.SHOW_ELEMENT, {
    acceptNode(l) {
      var c;
      return !(t == null || (c = t.from) === null || c === void 0) && c.contains(l) ? NodeFilter.FILTER_REJECT : n(l) && da(l) && (!r || lt(l, r)) && (!(t != null && t.accept) || t.accept(l)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  return t != null && t.from && (a.currentNode = t.from), a;
}
class lo {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(t) {
    return this.fastMap.get(t);
  }
  addTreeNode(t, r, n) {
    let o = this.fastMap.get(r ?? null);
    if (!o) return;
    let s = new _n({
      scopeRef: t
    });
    o.addChild(s), s.parent = o, this.fastMap.set(t, s), n && (s.nodeToRestore = n);
  }
  addNode(t) {
    this.fastMap.set(t.scopeRef, t);
  }
  removeTreeNode(t) {
    if (t === null) return;
    let r = this.fastMap.get(t);
    if (!r) return;
    let n = r.parent;
    for (let s of this.traverse()) s !== r && r.nodeToRestore && s.nodeToRestore && r.scopeRef && r.scopeRef.current && lt(s.nodeToRestore, r.scopeRef.current) && (s.nodeToRestore = r.nodeToRestore);
    let o = r.children;
    n && (n.removeChild(r), o.size > 0 && o.forEach((s) => n && n.addChild(s))), this.fastMap.delete(r.scopeRef);
  }
  // Pre Order Depth First
  *traverse(t = this.root) {
    if (t.scopeRef != null && (yield t), t.children.size > 0) for (let r of t.children) yield* this.traverse(r);
  }
  clone() {
    var t;
    let r = new lo();
    var n;
    for (let o of this.traverse()) r.addTreeNode(o.scopeRef, (n = (t = o.parent) === null || t === void 0 ? void 0 : t.scopeRef) !== null && n !== void 0 ? n : null, o.nodeToRestore);
    return r;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map(), this.root = new _n({
      scopeRef: null
    }), this.fastMap.set(null, this.root);
  }
}
class _n {
  addChild(t) {
    this.children.add(t), t.parent = this;
  }
  removeChild(t) {
    this.children.delete(t), t.parent = void 0;
  }
  constructor(t) {
    this.children = /* @__PURE__ */ new Set(), this.contain = !1, this.scopeRef = t.scopeRef;
  }
}
let Me = new lo();
function Na(e = {}) {
  let { autoFocus: t = !1, isTextInput: r, within: n } = e, o = re({
    isFocused: !1,
    isFocusVisible: t || xa()
  }), [s, a] = te(!1), [l, c] = te(() => o.current.isFocused && o.current.isFocusVisible), u = pe(() => c(o.current.isFocused && o.current.isFocusVisible), []), d = pe((b) => {
    o.current.isFocused = b, a(b), u();
  }, [
    u
  ]);
  iu((b) => {
    o.current.isFocusVisible = b, u();
  }, [], {
    isTextInput: r
  });
  let { focusProps: f } = wa({
    isDisabled: n,
    onFocusChange: d
  }), { focusWithinProps: h } = io({
    isDisabled: !n,
    onFocusWithinChange: d
  });
  return {
    isFocused: s,
    isFocusVisible: l,
    focusProps: n ? h : f
  };
}
function ku(e, t, r) {
  let { type: n } = e, { isOpen: o } = t;
  ue(() => {
    r && r.current && ca.set(r.current, t.close);
  });
  let s;
  n === "menu" ? s = !0 : n === "listbox" && (s = "listbox");
  let a = Jn();
  return {
    triggerProps: {
      "aria-haspopup": s,
      "aria-expanded": o,
      "aria-controls": o ? a : void 0,
      onPress: t.toggle
    },
    overlayProps: {
      id: a
    }
  };
}
const mn = typeof document < "u" && window.visualViewport, Nu = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
let Ar = 0, bn;
function Eu(e = {}) {
  let { isDisabled: t } = e;
  Ae(() => {
    if (!t)
      return Ar++, Ar === 1 && (Zr() ? bn = Pu() : bn = ju()), () => {
        Ar--, Ar === 0 && bn();
      };
  }, [
    t
  ]);
}
function ju() {
  let e = window.innerWidth - document.documentElement.clientWidth;
  return kr(e > 0 && // Use scrollbar-gutter when supported because it also works for fixed positioned elements.
  ("scrollbarGutter" in document.documentElement.style ? Bt(document.documentElement, "scrollbarGutter", "stable") : Bt(document.documentElement, "paddingRight", `${e}px`)), Bt(document.documentElement, "overflow", "hidden"));
}
function Pu() {
  let e, t, r = (u) => {
    e = aa(u.target, !0), !(e === document.documentElement && e === document.body) && e instanceof HTMLElement && window.getComputedStyle(e).overscrollBehavior === "auto" && (t = Bt(e, "overscrollBehavior", "contain"));
  }, n = (u) => {
    if (!e || e === document.documentElement || e === document.body) {
      u.preventDefault();
      return;
    }
    e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && u.preventDefault();
  }, o = () => {
    t && t();
  }, s = (u) => {
    let d = u.target;
    Tu(d) && (l(), d.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      d.style.transform = "", mn && (mn.height < window.innerHeight ? requestAnimationFrame(() => {
        is(d);
      }) : mn.addEventListener("resize", () => is(d), {
        once: !0
      }));
    }));
  }, a = null, l = () => {
    if (a) return;
    let u = () => {
      window.scrollTo(0, 0);
    }, d = window.pageXOffset, f = window.pageYOffset;
    a = kr(fr(window, "scroll", u), Bt(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), Bt(document.documentElement, "overflow", "hidden"), Bt(document.body, "marginTop", `-${f}px`), () => {
      window.scrollTo(d, f);
    }), window.scrollTo(0, 0);
  }, c = kr(fr(document, "touchstart", r, {
    passive: !1,
    capture: !0
  }), fr(document, "touchmove", n, {
    passive: !1,
    capture: !0
  }), fr(document, "touchend", o, {
    passive: !1,
    capture: !0
  }), fr(document, "focus", s, !0));
  return () => {
    t == null || t(), a == null || a(), c();
  };
}
function Bt(e, t, r) {
  let n = e.style[t];
  return e.style[t] = r, () => {
    e.style[t] = n;
  };
}
function fr(e, t, r, n) {
  return e.addEventListener(t, r, n), () => {
    e.removeEventListener(t, r, n);
  };
}
function is(e) {
  let t = document.scrollingElement || document.documentElement, r = e;
  for (; r && r !== t; ) {
    let n = aa(r);
    if (n !== document.documentElement && n !== document.body && n !== r) {
      let o = n.getBoundingClientRect().top, s = r.getBoundingClientRect().top;
      s > o + r.clientHeight && (n.scrollTop += s - o);
    }
    r = n.parentElement;
  }
}
function Tu(e) {
  return e instanceof HTMLInputElement && !Nu.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
const Su = /* @__PURE__ */ Ts({});
function Cu() {
  var e;
  return (e = mt(Su)) !== null && e !== void 0 ? e : {};
}
var Ea = {};
Ea = {
  dismiss: "تجاهل"
};
var ja = {};
ja = {
  dismiss: "Отхвърляне"
};
var Pa = {};
Pa = {
  dismiss: "Odstranit"
};
var Ta = {};
Ta = {
  dismiss: "Luk"
};
var Sa = {};
Sa = {
  dismiss: "Schließen"
};
var Ca = {};
Ca = {
  dismiss: "Απόρριψη"
};
var Ra = {};
Ra = {
  dismiss: "Dismiss"
};
var La = {};
La = {
  dismiss: "Descartar"
};
var Aa = {};
Aa = {
  dismiss: "Lõpeta"
};
var Ia = {};
Ia = {
  dismiss: "Hylkää"
};
var Oa = {};
Oa = {
  dismiss: "Rejeter"
};
var Ma = {};
Ma = {
  dismiss: "התעלם"
};
var _a = {};
_a = {
  dismiss: "Odbaci"
};
var Da = {};
Da = {
  dismiss: "Elutasítás"
};
var za = {};
za = {
  dismiss: "Ignora"
};
var Fa = {};
Fa = {
  dismiss: "閉じる"
};
var Va = {};
Va = {
  dismiss: "무시"
};
var Ba = {};
Ba = {
  dismiss: "Atmesti"
};
var Ga = {};
Ga = {
  dismiss: "Nerādīt"
};
var Ha = {};
Ha = {
  dismiss: "Lukk"
};
var Wa = {};
Wa = {
  dismiss: "Negeren"
};
var Ka = {};
Ka = {
  dismiss: "Zignoruj"
};
var Ua = {};
Ua = {
  dismiss: "Descartar"
};
var Ya = {};
Ya = {
  dismiss: "Dispensar"
};
var qa = {};
qa = {
  dismiss: "Revocare"
};
var Xa = {};
Xa = {
  dismiss: "Пропустить"
};
var Za = {};
Za = {
  dismiss: "Zrušiť"
};
var Ja = {};
Ja = {
  dismiss: "Opusti"
};
var Qa = {};
Qa = {
  dismiss: "Odbaci"
};
var ei = {};
ei = {
  dismiss: "Avvisa"
};
var ti = {};
ti = {
  dismiss: "Kapat"
};
var ri = {};
ri = {
  dismiss: "Скасувати"
};
var ni = {};
ni = {
  dismiss: "取消"
};
var oi = {};
oi = {
  dismiss: "關閉"
};
var si = {};
si = {
  "ar-AE": Ea,
  "bg-BG": ja,
  "cs-CZ": Pa,
  "da-DK": Ta,
  "de-DE": Sa,
  "el-GR": Ca,
  "en-US": Ra,
  "es-ES": La,
  "et-EE": Aa,
  "fi-FI": Ia,
  "fr-FR": Oa,
  "he-IL": Ma,
  "hr-HR": _a,
  "hu-HU": Da,
  "it-IT": za,
  "ja-JP": Fa,
  "ko-KR": Va,
  "lt-LT": Ba,
  "lv-LV": Ga,
  "nb-NO": Ha,
  "nl-NL": Wa,
  "pl-PL": Ka,
  "pt-BR": Ua,
  "pt-PT": Ya,
  "ro-RO": qa,
  "ru-RU": Xa,
  "sk-SK": Za,
  "sl-SI": Ja,
  "sr-SP": Qa,
  "sv-SE": ei,
  "tr-TR": ti,
  "uk-UA": ri,
  "zh-CN": ni,
  "zh-TW": oi
};
const ls = {
  border: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap"
};
function Ru(e = {}) {
  let { style: t, isFocusable: r } = e, [n, o] = te(!1), { focusWithinProps: s } = io({
    isDisabled: !r,
    onFocusWithinChange: (l) => o(l)
  }), a = _e(() => n ? t : t ? {
    ...ls,
    ...t
  } : ls, [
    n
  ]);
  return {
    visuallyHiddenProps: {
      ...s,
      style: a
    }
  };
}
function Lu(e) {
  let { children: t, elementType: r = "div", isFocusable: n, style: o, ...s } = e, { visuallyHiddenProps: a } = Ru(e);
  return /* @__PURE__ */ ie.createElement(r, Gt(s, a), t);
}
function Au(e) {
  return e && e.__esModule ? e.default : e;
}
function cs(e) {
  let { onDismiss: t, ...r } = e, n = od(Au(si), "@react-aria/overlays"), o = jd(r, n.format("dismiss")), s = () => {
    t && t();
  };
  return /* @__PURE__ */ ie.createElement(Lu, null, /* @__PURE__ */ ie.createElement("button", {
    ...o,
    tabIndex: -1,
    onClick: s,
    style: {
      width: 1,
      height: 1
    }
  }));
}
const ai = /* @__PURE__ */ ie.createContext(null);
function Iu(e) {
  let t = Zn(), { portalContainer: r = t ? null : document.body, isExiting: n } = e, [o, s] = te(!1), a = _e(() => ({
    contain: o,
    setContain: s
  }), [
    o,
    s
  ]), { getContainer: l } = Cu();
  if (!e.portalContainer && l && (r = l()), !r) return null;
  let c = e.children;
  return e.disableFocusManagement || (c = /* @__PURE__ */ ie.createElement(bu, {
    restoreFocus: !0,
    contain: (e.shouldContainFocus || o) && !n
  }, c)), c = /* @__PURE__ */ ie.createElement(ai.Provider, {
    value: a
  }, /* @__PURE__ */ ie.createElement(fu, null, c)), /* @__PURE__ */ Hi.createPortal(c, r);
}
function Ou() {
  let e = mt(ai), t = e == null ? void 0 : e.setContain;
  Ae(() => {
    t == null || t(!0);
  }, [
    t
  ]);
}
function ii(e) {
  return Ie(e);
}
var Mu = (e, t, r = !0) => {
  if (!t)
    return [e, {}];
  const n = t.reduce((o, s) => s in e ? { ...o, [s]: e[s] } : o, {});
  return r ? [Object.keys(e).filter((s) => !t.includes(s)).reduce((s, a) => ({ ...s, [a]: e[a] }), {}), n] : [e, n];
}, ds = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ze = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, _u = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function li(e, t) {
  e.forEach(function(r) {
    Array.isArray(r) ? li(r, t) : t.push(r);
  });
}
function ci(e) {
  let t = [];
  return li(e, t), t;
}
var di = (...e) => ci(e).filter(Boolean), ui = (e, t) => {
  let r = {}, n = Object.keys(e), o = Object.keys(t);
  for (let s of n) if (o.includes(s)) {
    let a = e[s], l = t[s];
    Array.isArray(a) || Array.isArray(l) ? r[s] = di(l, a) : typeof a == "object" && typeof l == "object" ? r[s] = ui(a, l) : r[s] = l + " " + a;
  } else r[s] = e[s];
  for (let s of o) n.includes(s) || (r[s] = t[s]);
  return r;
}, us = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
const co = "-", Du = (e) => {
  const t = Fu(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      const l = a.split(co);
      return l[0] === "" && l.length !== 1 && l.shift(), fi(l, t) || zu(a);
    },
    getConflictingClassGroupIds: (a, l) => {
      const c = r[a] || [];
      return l && n[a] ? [...c, ...n[a]] : c;
    }
  };
}, fi = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? fi(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(co);
  return (a = t.validators.find(({
    validator: l
  }) => l(s))) == null ? void 0 : a.classGroupId;
}, fs = /^\[(.+)\]$/, zu = (e) => {
  if (fs.test(e)) {
    const t = fs.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Fu = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in r)
    Dn(r[o], n, o, t);
  return n;
}, Dn = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : ps(t, o);
      s.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (Vu(o)) {
        Dn(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([s, a]) => {
      Dn(a, ps(t, s), r, n);
    });
  });
}, ps = (e, t) => {
  let r = e;
  return t.split(co).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, Vu = (e) => e.isThemeGetter, Bu = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (s, a) => {
    r.set(s, a), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let a = r.get(s);
      if (a !== void 0)
        return a;
      if ((a = n.get(s)) !== void 0)
        return o(s, a), a;
    },
    set(s, a) {
      r.has(s) ? r.set(s, a) : o(s, a);
    }
  };
}, zn = "!", Fn = ":", Gu = Fn.length, Hu = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (o) => {
    const s = [];
    let a = 0, l = 0, c = 0, u;
    for (let w = 0; w < o.length; w++) {
      let v = o[w];
      if (a === 0 && l === 0) {
        if (v === Fn) {
          s.push(o.slice(c, w)), c = w + Gu;
          continue;
        }
        if (v === "/") {
          u = w;
          continue;
        }
      }
      v === "[" ? a++ : v === "]" ? a-- : v === "(" ? l++ : v === ")" && l--;
    }
    const d = s.length === 0 ? o : o.substring(c), f = Wu(d), h = f !== d, b = u && u > c ? u - c : void 0;
    return {
      modifiers: s,
      hasImportantModifier: h,
      baseClassName: f,
      maybePostfixModifierPosition: b
    };
  };
  if (t) {
    const o = t + Fn, s = n;
    n = (a) => a.startsWith(o) ? s(a.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: a,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const o = n;
    n = (s) => r({
      className: s,
      parseClassName: o
    });
  }
  return n;
}, Wu = (e) => e.endsWith(zn) ? e.substring(0, e.length - 1) : e.startsWith(zn) ? e.substring(1) : e, Ku = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((n) => [n, !0]));
  return (n) => {
    if (n.length <= 1)
      return n;
    const o = [];
    let s = [];
    return n.forEach((a) => {
      a[0] === "[" || t[a] ? (o.push(...s.sort(), a), s = []) : s.push(a);
    }), o.push(...s.sort()), o;
  };
}, Uu = (e) => ({
  cache: Bu(e.cacheSize),
  parseClassName: Hu(e),
  sortModifiers: Ku(e),
  ...Du(e)
}), Yu = /\s+/, qu = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, a = [], l = e.trim().split(Yu);
  let c = "";
  for (let u = l.length - 1; u >= 0; u -= 1) {
    const d = l[u], {
      isExternal: f,
      modifiers: h,
      hasImportantModifier: b,
      baseClassName: w,
      maybePostfixModifierPosition: v
    } = r(d);
    if (f) {
      c = d + (c.length > 0 ? " " + c : c);
      continue;
    }
    let E = !!v, j = n(E ? w.substring(0, v) : w);
    if (!j) {
      if (!E) {
        c = d + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (j = n(w), !j) {
        c = d + (c.length > 0 ? " " + c : c);
        continue;
      }
      E = !1;
    }
    const N = s(h).join(":"), S = b ? N + zn : N, L = S + j;
    if (a.includes(L))
      continue;
    a.push(L);
    const R = o(j, E);
    for (let C = 0; C < R.length; ++C) {
      const K = R[C];
      a.push(S + K);
    }
    c = d + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function Xu() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = pi(t)) && (n && (n += " "), n += r);
  return n;
}
const pi = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = pi(e[n])) && (r && (r += " "), r += t);
  return r;
};
function Vn(e, ...t) {
  let r, n, o, s = a;
  function a(c) {
    const u = t.reduce((d, f) => f(d), e());
    return r = Uu(u), n = r.cache.get, o = r.cache.set, s = l, l(c);
  }
  function l(c) {
    const u = n(c);
    if (u)
      return u;
    const d = qu(c, r);
    return o(c, d), d;
  }
  return function() {
    return s(Xu.apply(null, arguments));
  };
}
const Be = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, gi = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, mi = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Zu = /^\d+\/\d+$/, Ju = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Qu = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ef = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, tf = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, rf = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Yt = (e) => Zu.test(e), me = (e) => !!e && !Number.isNaN(Number(e)), zt = (e) => !!e && Number.isInteger(Number(e)), gs = (e) => e.endsWith("%") && me(e.slice(0, -1)), St = (e) => Ju.test(e), nf = () => !0, of = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Qu.test(e) && !ef.test(e)
), uo = () => !1, sf = (e) => tf.test(e), af = (e) => rf.test(e), lf = (e) => !J(e) && !Q(e), cf = (e) => sr(e, vi, uo), J = (e) => gi.test(e), Ft = (e) => sr(e, xi, of), hn = (e) => sr(e, yf, me), df = (e) => sr(e, bi, uo), uf = (e) => sr(e, hi, af), ff = (e) => sr(e, uo, sf), Q = (e) => mi.test(e), Ir = (e) => ar(e, xi), pf = (e) => ar(e, wf), gf = (e) => ar(e, bi), mf = (e) => ar(e, vi), bf = (e) => ar(e, hi), hf = (e) => ar(e, $f, !0), sr = (e, t, r) => {
  const n = gi.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, ar = (e, t, r = !1) => {
  const n = mi.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, bi = (e) => e === "position", vf = /* @__PURE__ */ new Set(["image", "url"]), hi = (e) => vf.has(e), xf = /* @__PURE__ */ new Set(["length", "size", "percentage"]), vi = (e) => xf.has(e), xi = (e) => e === "length", yf = (e) => e === "number", wf = (e) => e === "family-name", $f = (e) => e === "shadow", Bn = () => {
  const e = Be("color"), t = Be("font"), r = Be("text"), n = Be("font-weight"), o = Be("tracking"), s = Be("leading"), a = Be("breakpoint"), l = Be("container"), c = Be("spacing"), u = Be("radius"), d = Be("shadow"), f = Be("inset-shadow"), h = Be("drop-shadow"), b = Be("blur"), w = Be("perspective"), v = Be("aspect"), E = Be("ease"), j = Be("animate"), N = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], L = () => ["auto", "hidden", "clip", "visible", "scroll"], R = () => ["auto", "contain", "none"], C = () => [Q, J, c], K = () => [Yt, "full", "auto", ...C()], z = () => [zt, "none", "subgrid", Q, J], I = () => ["auto", {
    span: ["full", zt, Q, J]
  }, Q, J], O = () => [zt, "auto", Q, J], p = () => ["auto", "min", "max", "fr", Q, J], x = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], m = () => ["start", "end", "center", "stretch"], $ = () => ["auto", ...C()], A = () => [Yt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...C()], g = () => [e, Q, J], k = () => [gs, Ft], P = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    Q,
    J
  ], T = () => ["", me, Ir, Ft], U = () => ["solid", "dashed", "dotted", "double"], F = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], H = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    b,
    Q,
    J
  ], ne = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Q, J], B = () => ["none", me, Q, J], W = () => ["none", me, Q, J], q = () => [me, Q, J], _ = () => [Yt, "full", ...C()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [St],
      breakpoint: [St],
      color: [nf],
      container: [St],
      "drop-shadow": [St],
      ease: ["in", "out", "in-out"],
      font: [lf],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [St],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [St],
      shadow: [St],
      spacing: ["px", me],
      text: [St],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Yt, J, Q, v]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [me, J, Q, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": N()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": N()
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
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
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
        object: [...S(), J, Q]
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
        inset: K()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": K()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": K()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: K()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: K()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: K()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: K()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: K()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: K()
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
        z: [zt, "auto", Q, J]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Yt, "full", "auto", l, ...C()]
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
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [me, Yt, "auto", "initial", "none", J]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", me, Q, J]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", me, Q, J]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [zt, "first", "last", "none", Q, J]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": z()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: I()
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
        "grid-rows": z()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: I()
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
        "auto-cols": p()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": p()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: C()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": C()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": C()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...x(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...m(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...m()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...x()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...m(), "baseline"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...m(), "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": x()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...m(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...m()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: C()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: C()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: C()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: C()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: C()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: C()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: C()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: C()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: C()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: $()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: $()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: $()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: $()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: $()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: $()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: $()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: $()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: $()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": C()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": C()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: A()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...A()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          l,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...A()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          l,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [a]
          },
          ...A()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...A()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...A()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...A()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Ir, Ft]
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
        font: [n, Q, hn]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", gs, J]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [pf, J, t]
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
        tracking: [o, Q, J]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [me, "none", Q, hn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...C()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Q, J]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", Q, J]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: g()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: g()
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
        decoration: [...U(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [me, "from-font", "auto", Q, Ft]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: g()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [me, "auto", Q, J]
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
        indent: C()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Q, J]
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
        content: ["none", Q, J]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
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
        bg: [...S(), gf, df]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "space", "round"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", mf, cf]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, zt, Q, J],
          radial: ["", Q, J],
          conic: [zt, Q, J]
        }, bf, uf]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: g()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: k()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: k()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: k()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: g()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: g()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: g()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: P()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": P()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": P()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": P()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": P()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": P()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": P()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": P()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": P()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": P()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": P()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": P()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": P()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": P()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": P()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: T()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": T()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": T()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": T()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": T()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": T()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": T()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": T()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": T()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": T()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": T()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...U(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...U(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: g()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": g()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": g()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": g()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": g()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": g()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": g()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": g()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": g()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: g()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...U(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [me, Q, J]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", me, Ir, Ft]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          d,
          hf,
          ff
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: g()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", Q, J, f]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": g()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: T()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: g()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [me, Ft]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": g()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": T()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": g()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [me, Q, J]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...F(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": F()
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          Q,
          J
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: H()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [me, Q, J]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [me, Q, J]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          h,
          Q,
          J
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", me, Q, J]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [me, Q, J]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", me, Q, J]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [me, Q, J]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", me, Q, J]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          Q,
          J
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": H()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [me, Q, J]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [me, Q, J]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", me, Q, J]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [me, Q, J]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", me, Q, J]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [me, Q, J]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [me, Q, J]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", me, Q, J]
      }],
      // --------------
      // --- Tables ---
      // --------------
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
        "border-spacing": C()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": C()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": C()
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
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", Q, J]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [me, "initial", Q, J]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", E, Q, J]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [me, Q, J]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", j, Q, J]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [w, Q, J]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": ne()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: B()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": B()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": B()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": B()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: W()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": W()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": W()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": W()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: q()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": q()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": q()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [Q, J, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ne()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: _()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": _()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": _()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": _()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: g()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: g()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Q, J]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
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
        "scroll-m": C()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": C()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": C()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": C()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": C()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": C()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": C()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": C()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": C()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": C()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": C()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": C()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": C()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": C()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": C()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": C()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": C()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": C()
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
        "will-change": ["auto", "scroll", "contents", "transform", Q, J]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...g()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [me, Ir, Ft, hn]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...g()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
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
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
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
    },
    orderSensitiveModifiers: ["before", "after", "placeholder", "file", "marker", "selection", "first-line", "first-letter", "backdrop", "*", "**"]
  };
}, kf = (e, {
  cacheSize: t,
  prefix: r,
  experimentalParseClassName: n,
  extend: o = {},
  override: s = {}
}) => (vr(e, "cacheSize", t), vr(e, "prefix", r), vr(e, "experimentalParseClassName", n), Or(e.theme, s.theme), Or(e.classGroups, s.classGroups), Or(e.conflictingClassGroups, s.conflictingClassGroups), Or(e.conflictingClassGroupModifiers, s.conflictingClassGroupModifiers), vr(e, "orderSensitiveModifiers", s.orderSensitiveModifiers), Mr(e.theme, o.theme), Mr(e.classGroups, o.classGroups), Mr(e.conflictingClassGroups, o.conflictingClassGroups), Mr(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), yi(e, o, "orderSensitiveModifiers"), e), vr = (e, t, r) => {
  r !== void 0 && (e[t] = r);
}, Or = (e, t) => {
  if (t)
    for (const r in t)
      vr(e, r, t[r]);
}, Mr = (e, t) => {
  if (t)
    for (const r in t)
      yi(e, t, r);
}, yi = (e, t, r) => {
  const n = t[r];
  n !== void 0 && (e[r] = e[r] ? e[r].concat(n) : n);
}, Nf = (e, ...t) => typeof e == "function" ? Vn(Bn, e, ...t) : Vn(() => kf(Bn(), e), ...t), Ef = /* @__PURE__ */ Vn(Bn);
var jf = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, wi = (e) => e || void 0, Er = (...e) => wi(ci(e).filter(Boolean).join(" ")), vn = null, wt = {}, Gn = !1, pr = (...e) => (t) => t.twMerge ? ((!vn || Gn) && (Gn = !1, vn = Ze(wt) ? Ef : Nf({ ...wt, extend: { theme: wt.theme, classGroups: wt.classGroups, conflictingClassGroupModifiers: wt.conflictingClassGroupModifiers, conflictingClassGroups: wt.conflictingClassGroups, ...wt.extend } })), wi(vn(Er(e)))) : Er(e), ms = (e, t) => {
  for (let r in t) e.hasOwnProperty(r) ? e[r] = Er(e[r], t[r]) : e[r] = t[r];
  return e;
}, Pf = (e, t) => {
  let { extend: r = null, slots: n = {}, variants: o = {}, compoundVariants: s = [], compoundSlots: a = [], defaultVariants: l = {} } = e, c = { ...jf, ...t }, u = r != null && r.base ? Er(r.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, d = r != null && r.variants && !Ze(r.variants) ? ui(o, r.variants) : o, f = r != null && r.defaultVariants && !Ze(r.defaultVariants) ? { ...r.defaultVariants, ...l } : l;
  !Ze(c.twMergeConfig) && !_u(c.twMergeConfig, wt) && (Gn = !0, wt = c.twMergeConfig);
  let h = Ze(r == null ? void 0 : r.slots), b = Ze(n) ? {} : { base: Er(e == null ? void 0 : e.base, h && (r == null ? void 0 : r.base)), ...n }, w = h ? b : ms({ ...r == null ? void 0 : r.slots }, Ze(b) ? { base: e == null ? void 0 : e.base } : b), v = Ze(r == null ? void 0 : r.compoundVariants) ? s : di(r == null ? void 0 : r.compoundVariants, s), E = (N) => {
    if (Ze(d) && Ze(n) && h) return pr(u, N == null ? void 0 : N.class, N == null ? void 0 : N.className)(c);
    if (v && !Array.isArray(v)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof v}`);
    if (a && !Array.isArray(a)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof a}`);
    let S = (x, m, $ = [], A) => {
      let g = $;
      if (typeof m == "string") g = g.concat(us(m).split(" ").map((k) => `${x}:${k}`));
      else if (Array.isArray(m)) g = g.concat(m.reduce((k, P) => k.concat(`${x}:${P}`), []));
      else if (typeof m == "object" && typeof A == "string") {
        for (let k in m) if (m.hasOwnProperty(k) && k === A) {
          let P = m[k];
          if (P && typeof P == "string") {
            let T = us(P);
            g[A] ? g[A] = g[A].concat(T.split(" ").map((U) => `${x}:${U}`)) : g[A] = T.split(" ").map((U) => `${x}:${U}`);
          } else Array.isArray(P) && P.length > 0 && (g[A] = P.reduce((T, U) => T.concat(`${x}:${U}`), []));
        }
      }
      return g;
    }, L = (x, m = d, $ = null, A = null) => {
      var g;
      let k = m[x];
      if (!k || Ze(k)) return null;
      let P = (g = A == null ? void 0 : A[x]) != null ? g : N == null ? void 0 : N[x];
      if (P === null) return null;
      let T = ds(P), U = Array.isArray(c.responsiveVariants) && c.responsiveVariants.length > 0 || c.responsiveVariants === !0, F = f == null ? void 0 : f[x], H = [];
      if (typeof T == "object" && U) for (let [W, q] of Object.entries(T)) {
        let _ = k[q];
        if (W === "initial") {
          F = q;
          continue;
        }
        Array.isArray(c.responsiveVariants) && !c.responsiveVariants.includes(W) || (H = S(W, _, H, $));
      }
      let ne = T != null && typeof T != "object" ? T : ds(F), B = k[ne || "false"];
      return typeof H == "object" && typeof $ == "string" && H[$] ? ms(H, B) : H.length > 0 ? (H.push(B), $ === "base" ? H.join(" ") : H) : B;
    }, R = () => d ? Object.keys(d).map((x) => L(x, d)) : null, C = (x, m) => {
      if (!d || typeof d != "object") return null;
      let $ = new Array();
      for (let A in d) {
        let g = L(A, d, x, m), k = x === "base" && typeof g == "string" ? g : g && g[x];
        k && ($[$.length] = k);
      }
      return $;
    }, K = {};
    for (let x in N) N[x] !== void 0 && (K[x] = N[x]);
    let z = (x, m) => {
      var $;
      let A = typeof (N == null ? void 0 : N[x]) == "object" ? { [x]: ($ = N[x]) == null ? void 0 : $.initial } : {};
      return { ...f, ...K, ...A, ...m };
    }, I = (x = [], m) => {
      let $ = [];
      for (let { class: A, className: g, ...k } of x) {
        let P = !0;
        for (let [T, U] of Object.entries(k)) {
          let F = z(T, m)[T];
          if (Array.isArray(U)) {
            if (!U.includes(F)) {
              P = !1;
              break;
            }
          } else {
            let H = (ne) => ne == null || ne === !1;
            if (H(U) && H(F)) continue;
            if (F !== U) {
              P = !1;
              break;
            }
          }
        }
        P && (A && $.push(A), g && $.push(g));
      }
      return $;
    }, O = (x) => {
      let m = I(v, x);
      if (!Array.isArray(m)) return m;
      let $ = {};
      for (let A of m) if (typeof A == "string" && ($.base = pr($.base, A)(c)), typeof A == "object") for (let [g, k] of Object.entries(A)) $[g] = pr($[g], k)(c);
      return $;
    }, p = (x) => {
      if (a.length < 1) return null;
      let m = {};
      for (let { slots: $ = [], class: A, className: g, ...k } of a) {
        if (!Ze(k)) {
          let P = !0;
          for (let T of Object.keys(k)) {
            let U = z(T, x)[T];
            if (U === void 0 || (Array.isArray(k[T]) ? !k[T].includes(U) : k[T] !== U)) {
              P = !1;
              break;
            }
          }
          if (!P) continue;
        }
        for (let P of $) m[P] = m[P] || [], m[P].push([A, g]);
      }
      return m;
    };
    if (!Ze(n) || !h) {
      let x = {};
      if (typeof w == "object" && !Ze(w)) for (let m of Object.keys(w)) x[m] = ($) => {
        var A, g;
        return pr(w[m], C(m, $), ((A = O($)) != null ? A : [])[m], ((g = p($)) != null ? g : [])[m], $ == null ? void 0 : $.class, $ == null ? void 0 : $.className)(c);
      };
      return x;
    }
    return pr(u, R(), I(v), N == null ? void 0 : N.class, N == null ? void 0 : N.className)(c);
  }, j = () => {
    if (!(!d || typeof d != "object")) return Object.keys(d);
  };
  return E.variantKeys = j(), E.extend = r, E.base = u, E.slots = w, E.variants = d, E.defaultVariants = f, E.compoundSlots = a, E.compoundVariants = v, E;
}, Tf = {
  default: "bg-default text-default-foreground",
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  success: "bg-success text-success-foreground",
  warning: "bg-warning text-warning-foreground",
  danger: "bg-danger text-danger-foreground",
  foreground: "bg-foreground text-background"
}, Sf = {
  default: "shadow-lg shadow-default/50 bg-default text-default-foreground",
  primary: "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
  secondary: "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
  success: "shadow-lg shadow-success/40 bg-success text-success-foreground",
  warning: "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
  danger: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground"
}, Cf = {
  default: "bg-transparent border-default text-foreground",
  primary: "bg-transparent border-primary text-primary",
  secondary: "bg-transparent border-secondary text-secondary",
  success: "bg-transparent border-success text-success",
  warning: "bg-transparent border-warning text-warning",
  danger: "bg-transparent border-danger text-danger"
}, Rf = {
  default: "bg-default/40 text-default-700",
  primary: "bg-primary/20 text-primary-600",
  secondary: "bg-secondary/20 text-secondary-600",
  success: "bg-success/20 text-success-700 dark:text-success",
  warning: "bg-warning/20 text-warning-700 dark:text-warning",
  danger: "bg-danger/20 text-danger-600 dark:text-danger-500"
}, Lf = {
  default: "border-default bg-default-100 text-default-foreground",
  primary: "border-default bg-default-100 text-primary",
  secondary: "border-default bg-default-100 text-secondary",
  success: "border-default bg-default-100 text-success",
  warning: "border-default bg-default-100 text-warning",
  danger: "border-default bg-default-100 text-danger"
}, Af = {
  default: "bg-transparent text-default-foreground",
  primary: "bg-transparent text-primary",
  secondary: "bg-transparent text-secondary",
  success: "bg-transparent text-success",
  warning: "bg-transparent text-warning",
  danger: "bg-transparent text-danger"
}, If = {
  default: "border-default text-default-foreground",
  primary: "border-primary text-primary",
  secondary: "border-secondary text-secondary",
  success: "border-success text-success",
  warning: "border-warning text-warning",
  danger: "border-danger text-danger"
}, se = {
  solid: Tf,
  shadow: Sf,
  bordered: Cf,
  flat: Rf,
  faded: Lf,
  light: Af,
  ghost: If
}, Of = {
  /** Animation Utilities */
  ".spinner-bar-animation": {
    "animation-delay": "calc(-1.2s + (0.1s * var(--bar-index)))",
    transform: "rotate(calc(30deg * var(--bar-index)))translate(140%)"
  },
  ".spinner-dot-animation": {
    "animation-delay": "calc(250ms * var(--dot-index))"
  },
  ".spinner-dot-blink-animation": {
    "animation-delay": "calc(200ms * var(--dot-index))"
  }
}, Mf = {
  /**
   * Custom utilities
   */
  ".leading-inherit": {
    "line-height": "inherit"
  },
  ".bg-img-inherit": {
    "background-image": "inherit"
  },
  ".bg-clip-inherit": {
    "background-clip": "inherit"
  },
  ".text-fill-inherit": {
    "-webkit-text-fill-color": "inherit"
  },
  ".tap-highlight-transparent": {
    "-webkit-tap-highlight-color": "transparent"
  },
  ".input-search-cancel-button-none": {
    "&::-webkit-search-cancel-button": {
      "-webkit-appearance": "none"
    }
  }
}, _f = {
  /**
   * Scroll Hide
   */
  ".scrollbar-hide": {
    /* IE and Edge */
    "-ms-overflow-style": "none",
    /* Firefox */
    "scrollbar-width": "none",
    /* Safari and Chrome */
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },
  ".scrollbar-default": {
    /* IE and Edge */
    "-ms-overflow-style": "auto",
    /* Firefox */
    "scrollbar-width": "auto",
    /* Safari and Chrome */
    "&::-webkit-scrollbar": {
      display: "block"
    }
  }
}, Df = {
  /**
   * Text utilities
   */
  ".text-tiny": {
    "font-size": "var(--heroui-font-size-tiny)",
    "line-height": "var(--heroui-line-height-tiny)"
  },
  ".text-small": {
    "font-size": "var(--heroui-font-size-small)",
    "line-height": "var(--heroui-line-height-small)"
  },
  ".text-medium": {
    "font-size": "var(--heroui-font-size-medium)",
    "line-height": "var(--heroui-line-height-medium)"
  },
  ".text-large": {
    "font-size": "var(--heroui-font-size-large)",
    "line-height": "var(--heroui-line-height-large)"
  }
}, ft = "250ms", zf = {
  /**
   * Transition utilities
   */
  ".transition-background": {
    "transition-property": "background",
    "transition-timing-function": "ease",
    "transition-duration": ft
  },
  ".transition-colors-opacity": {
    "transition-property": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity",
    "transition-timing-function": "ease",
    "transition-duration": ft
  },
  ".transition-width": {
    "transition-property": "width",
    "transition-timing-function": "ease",
    "transition-duration": ft
  },
  ".transition-height": {
    "transition-property": "height",
    "transition-timing-function": "ease",
    "transition-duration": ft
  },
  ".transition-size": {
    "transition-property": "width, height",
    "transition-timing-function": "ease",
    "transition-duration": ft
  },
  ".transition-left": {
    "transition-property": "left",
    "transition-timing-function": "ease",
    "transition-duration": ft
  },
  ".transition-transform-opacity": {
    "transition-property": "transform, scale, opacity rotate",
    "transition-timing-function": "ease",
    "transition-duration": ft
  },
  ".transition-transform-background": {
    "transition-property": "transform, scale, background",
    "transition-timing-function": "ease",
    "transition-duration": ft
  },
  ".transition-transform-colors": {
    "transition-property": "transform, scale, color, background, background-color, border-color, text-decoration-color, fill, stroke",
    "transition-timing-function": "ease",
    "transition-duration": ft
  },
  ".transition-transform-colors-opacity": {
    "transition-property": "transform, scale, color, background, background-color, border-color, text-decoration-color, fill, stroke, opacity",
    "transition-timing-function": "ease",
    "transition-duration": ft
  }
}, Ff = {
  ...Mf,
  ...zf,
  ..._f,
  ...Df,
  ...Of
}, _r = ["small", "medium", "large"], bs = {
  theme: {
    spacing: ["divider"],
    radius: _r
  },
  classGroups: {
    shadow: [{ shadow: _r }],
    opacity: [{ opacity: ["disabled"] }],
    "font-size": [{ text: ["tiny", ..._r] }],
    "border-w": [{ border: _r }],
    "bg-image": [
      "bg-stripe-gradient-default",
      "bg-stripe-gradient-primary",
      "bg-stripe-gradient-secondary",
      "bg-stripe-gradient-success",
      "bg-stripe-gradient-warning",
      "bg-stripe-gradient-danger"
    ],
    transition: Object.keys(Ff).filter((e) => e.includes(".transition")).map((e) => e.replace(".", ""))
    // remove the dot from the key, .transition-background -> transition-background
  }
}, Jr = (e, t) => {
  var r, n, o;
  return Pf(e, {
    ...t,
    twMerge: (r = void 0) != null ? r : !0,
    twMergeConfig: {
      theme: {
        ...(n = void 0) == null ? void 0 : n.theme,
        ...bs.theme
      },
      classGroups: {
        ...(o = void 0) == null ? void 0 : o.classGroups,
        ...bs.classGroups
      }
    }
  });
}, hs = Jr({
  slots: {
    base: "relative inline-flex flex-col gap-2 items-center justify-center",
    wrapper: "relative flex",
    label: "text-foreground dark:text-foreground-dark font-regular",
    circle1: "absolute w-full h-full rounded-full",
    circle2: "absolute w-full h-full rounded-full",
    dots: "relative rounded-full mx-auto",
    spinnerBars: [
      "absolute",
      "animate-fade-out",
      "rounded-full",
      "w-[25%]",
      "h-[8%]",
      "left-[calc(37.5%)]",
      "top-[calc(46%)]",
      "spinner-bar-animation"
    ]
  },
  variants: {
    size: {
      sm: {
        wrapper: "w-5 h-5",
        circle1: "border-2",
        circle2: "border-2",
        dots: "size-1",
        label: "text-small"
      },
      md: {
        wrapper: "w-8 h-8",
        circle1: "border-3",
        circle2: "border-3",
        dots: "size-1.5",
        label: "text-medium"
      },
      lg: {
        wrapper: "w-10 h-10",
        circle1: "border-3",
        circle2: "border-3",
        dots: "size-2",
        label: "text-large"
      }
    },
    color: {
      current: {
        circle1: "border-b-current",
        circle2: "border-b-current",
        dots: "bg-current",
        spinnerBars: "bg-current"
      },
      white: {
        circle1: "border-b-white",
        circle2: "border-b-white",
        dots: "bg-white",
        spinnerBars: "bg-white"
      },
      default: {
        circle1: "border-b-default",
        circle2: "border-b-default",
        dots: "bg-default",
        spinnerBars: "bg-default"
      },
      primary: {
        circle1: "border-b-primary",
        circle2: "border-b-primary",
        dots: "bg-primary",
        spinnerBars: "bg-primary"
      },
      secondary: {
        circle1: "border-b-secondary",
        circle2: "border-b-secondary",
        dots: "bg-secondary",
        spinnerBars: "bg-secondary"
      },
      success: {
        circle1: "border-b-success",
        circle2: "border-b-success",
        dots: "bg-success",
        spinnerBars: "bg-success"
      },
      warning: {
        circle1: "border-b-warning",
        circle2: "border-b-warning",
        dots: "bg-warning",
        spinnerBars: "bg-warning"
      },
      danger: {
        circle1: "border-b-danger",
        circle2: "border-b-danger",
        dots: "bg-danger",
        spinnerBars: "bg-danger"
      }
    },
    labelColor: {
      foreground: {
        label: "text-foreground"
      },
      primary: {
        label: "text-primary"
      },
      secondary: {
        label: "text-secondary"
      },
      success: {
        label: "text-success"
      },
      warning: {
        label: "text-warning"
      },
      danger: {
        label: "text-danger"
      }
    },
    variant: {
      default: {
        circle1: [
          "animate-spinner-ease-spin",
          "border-solid",
          "border-t-transparent",
          "border-l-transparent",
          "border-r-transparent"
        ],
        circle2: [
          "opacity-75",
          "animate-spinner-linear-spin",
          "border-dotted",
          "border-t-transparent",
          "border-l-transparent",
          "border-r-transparent"
        ]
      },
      gradient: {
        circle1: [
          "border-0",
          "bg-gradient-to-b",
          "from-transparent",
          "via-transparent",
          "to-primary",
          "animate-spinner-linear-spin",
          "[animation-duration:1s]",
          "[-webkit-mask:radial-gradient(closest-side,rgba(0,0,0,0.0)calc(100%-3px),rgba(0,0,0,1)calc(100%-3px))]"
        ],
        circle2: ["hidden"]
      },
      wave: {
        wrapper: "translate-y-3/4",
        dots: ["animate-sway", "spinner-dot-animation"]
      },
      dots: {
        wrapper: "translate-y-2/4",
        dots: ["animate-blink", "spinner-dot-blink-animation"]
      },
      spinner: {},
      simple: {
        wrapper: "text-foreground h-5 w-5 animate-spin",
        circle1: "opacity-25",
        circle2: "opacity-75"
      }
    }
  },
  defaultVariants: {
    size: "md",
    color: "primary",
    labelColor: "foreground",
    variant: "default"
  },
  compoundVariants: [
    { variant: "gradient", color: "current", class: { circle1: "to-current" } },
    { variant: "gradient", color: "white", class: { circle1: "to-white" } },
    { variant: "gradient", color: "default", class: { circle1: "to-default" } },
    { variant: "gradient", color: "primary", class: { circle1: "to-primary" } },
    { variant: "gradient", color: "secondary", class: { circle1: "to-secondary" } },
    { variant: "gradient", color: "success", class: { circle1: "to-success" } },
    { variant: "gradient", color: "warning", class: { circle1: "to-warning" } },
    { variant: "gradient", color: "danger", class: { circle1: "to-danger" } },
    {
      variant: "wave",
      size: "sm",
      class: {
        wrapper: "w-5 h-5"
      }
    },
    {
      variant: "wave",
      size: "md",
      class: {
        wrapper: "w-8 h-8"
      }
    },
    {
      variant: "wave",
      size: "lg",
      class: {
        wrapper: "w-12 h-12"
      }
    },
    {
      variant: "dots",
      size: "sm",
      class: {
        wrapper: "w-5 h-5"
      }
    },
    {
      variant: "dots",
      size: "md",
      class: {
        wrapper: "w-8 h-8"
      }
    },
    {
      variant: "dots",
      size: "lg",
      class: {
        wrapper: "w-12 h-12"
      }
    },
    // Simple variants
    // Size
    {
      variant: "simple",
      size: "sm",
      class: {
        wrapper: "w-5 h-5"
      }
    },
    {
      variant: "simple",
      size: "md",
      class: {
        wrapper: "w-8 h-8"
      }
    },
    {
      variant: "simple",
      size: "lg",
      class: {
        wrapper: "w-12 h-12"
      }
    },
    // Color
    {
      variant: "simple",
      color: "current",
      class: {
        wrapper: "text-current"
      }
    },
    {
      variant: "simple",
      color: "white",
      class: {
        wrapper: "text-white"
      }
    },
    {
      variant: "simple",
      color: "default",
      class: {
        wrapper: "text-default"
      }
    },
    {
      variant: "simple",
      color: "primary",
      class: {
        wrapper: "text-primary"
      }
    },
    {
      variant: "simple",
      color: "secondary",
      class: {
        wrapper: "text-secondary"
      }
    },
    {
      variant: "simple",
      color: "success",
      class: {
        wrapper: "text-success"
      }
    },
    {
      variant: "simple",
      color: "warning",
      class: {
        wrapper: "text-warning"
      }
    },
    {
      variant: "simple",
      color: "danger",
      class: {
        wrapper: "text-danger"
      }
    }
  ]
}), $i = [
  "outline-hidden",
  "data-[focus-visible=true]:z-10",
  "data-[focus-visible=true]:outline-2",
  "data-[focus-visible=true]:outline-focus",
  "data-[focus-visible=true]:outline-offset-2"
], qt = {
  default: ["[&+.border-medium.border-default]:ms-[calc(var(--heroui-border-width-medium)*-1)]"],
  primary: ["[&+.border-medium.border-primary]:ms-[calc(var(--heroui-border-width-medium)*-1)]"],
  secondary: [
    "[&+.border-medium.border-secondary]:ms-[calc(var(--heroui-border-width-medium)*-1)]"
  ],
  success: ["[&+.border-medium.border-success]:ms-[calc(var(--heroui-border-width-medium)*-1)]"],
  warning: ["[&+.border-medium.border-warning]:ms-[calc(var(--heroui-border-width-medium)*-1)]"],
  danger: ["[&+.border-medium.border-danger]:ms-[calc(var(--heroui-border-width-medium)*-1)]"]
}, vs = Jr({
  slots: {
    base: [
      "z-0",
      "relative",
      "bg-transparent",
      // arrow
      "before:content-['']",
      "before:hidden",
      "before:z-[-1]",
      "before:absolute",
      "before:rotate-45",
      "before:w-2.5",
      "before:h-2.5",
      "before:rounded-sm",
      // visibility
      "data-[arrow=true]:before:block",
      // top
      "data-[placement=top]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
      "data-[placement=top]:before:left-1/2",
      "data-[placement=top]:before:-translate-x-1/2",
      "data-[placement=top-start]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
      "data-[placement=top-start]:before:left-3",
      "data-[placement=top-end]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
      "data-[placement=top-end]:before:right-3",
      // bottom
      "data-[placement=bottom]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
      "data-[placement=bottom]:before:left-1/2",
      "data-[placement=bottom]:before:-translate-x-1/2",
      "data-[placement=bottom-start]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
      "data-[placement=bottom-start]:before:left-3",
      "data-[placement=bottom-end]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
      "data-[placement=bottom-end]:before:right-3",
      // left
      "data-[placement=left]:before:-right-[calc(theme(spacing.5)/4_-_2px)]",
      "data-[placement=left]:before:top-1/2",
      "data-[placement=left]:before:-translate-y-1/2",
      "data-[placement=left-start]:before:-right-[calc(theme(spacing.5)/4_-_3px)]",
      "data-[placement=left-start]:before:top-1/4",
      "data-[placement=left-end]:before:-right-[calc(theme(spacing.5)/4_-_3px)]",
      "data-[placement=left-end]:before:bottom-1/4",
      // right
      "data-[placement=right]:before:-left-[calc(theme(spacing.5)/4_-_2px)]",
      "data-[placement=right]:before:top-1/2",
      "data-[placement=right]:before:-translate-y-1/2",
      "data-[placement=right-start]:before:-left-[calc(theme(spacing.5)/4_-_3px)]",
      "data-[placement=right-start]:before:top-1/4",
      "data-[placement=right-end]:before:-left-[calc(theme(spacing.5)/4_-_3px)]",
      "data-[placement=right-end]:before:bottom-1/4",
      // focus ring
      ...$i
    ],
    content: [
      "z-10",
      "px-2.5",
      "py-1",
      "w-full",
      "inline-flex",
      "flex-col",
      "items-center",
      "justify-center",
      "box-border",
      "subpixel-antialiased",
      "outline-hidden",
      "box-border"
    ],
    trigger: ["z-10"],
    backdrop: ["hidden"],
    arrow: []
  },
  variants: {
    size: {
      sm: { content: "text-tiny" },
      md: { content: "text-small" },
      lg: { content: "text-medium" }
    },
    color: {
      default: {
        base: "before:bg-content1 before:shadow-small",
        content: "bg-content1"
      },
      foreground: {
        base: "before:bg-foreground",
        content: se.solid.foreground
      },
      primary: {
        base: "before:bg-primary",
        content: se.solid.primary
      },
      secondary: {
        base: "before:bg-secondary",
        content: se.solid.secondary
      },
      success: {
        base: "before:bg-success",
        content: se.solid.success
      },
      warning: {
        base: "before:bg-warning",
        content: se.solid.warning
      },
      danger: {
        base: "before:bg-danger",
        content: se.solid.danger
      }
    },
    radius: {
      none: { content: "rounded-none" },
      sm: { content: "rounded-small" },
      md: { content: "rounded-medium" },
      lg: { content: "rounded-large" },
      full: { content: "rounded-full" }
    },
    shadow: {
      none: {
        content: "shadow-none"
      },
      sm: {
        content: "shadow-small"
      },
      md: {
        content: "shadow-medium"
      },
      lg: {
        content: "shadow-large"
      }
    },
    backdrop: {
      transparent: {},
      opaque: {
        backdrop: "bg-overlay/50 backdrop-opacity-disabled"
      },
      blur: {
        backdrop: "backdrop-blur-sm backdrop-saturate-150 bg-overlay/30"
      }
    },
    triggerScaleOnOpen: {
      true: {
        trigger: ["aria-expanded:scale-[0.97]", "aria-expanded:opacity-70", "subpixel-antialiased"]
      },
      false: {}
    },
    disableAnimation: {
      true: {
        base: "animate-none"
      }
    },
    isTriggerDisabled: {
      true: {
        trigger: "opacity-disabled pointer-events-none"
      },
      false: {}
    }
  },
  defaultVariants: {
    color: "default",
    radius: "lg",
    size: "md",
    shadow: "md",
    backdrop: "transparent",
    triggerScaleOnOpen: !0
  },
  compoundVariants: [
    // backdrop (opaque/blur)
    {
      backdrop: ["opaque", "blur"],
      class: {
        backdrop: "block w-full h-full fixed inset-0 -z-30"
      }
    }
  ]
}), Vf = Jr({
  base: [
    "z-0",
    "group",
    "relative",
    "inline-flex",
    "items-center",
    "justify-center",
    "box-border",
    "appearance-none",
    "outline-hidden",
    "select-none",
    "whitespace-nowrap",
    "min-w-max",
    "font-normal",
    "subpixel-antialiased",
    "overflow-hidden",
    "tap-highlight-transparent",
    "transform-gpu data-[pressed=true]:scale-[0.97]",
    "cursor-pointer",
    // focus ring
    ...$i
  ],
  variants: {
    variant: {
      solid: "",
      bordered: "border-medium bg-transparent",
      light: "bg-transparent",
      flat: "",
      faded: "border-medium",
      shadow: "",
      ghost: "border-medium bg-transparent"
    },
    size: {
      sm: "px-3 min-w-16 h-8 text-tiny gap-2 rounded-small",
      md: "px-4 min-w-20 h-10 text-small gap-2 rounded-medium",
      lg: "px-6 min-w-24 h-12 text-medium gap-3 rounded-large"
    },
    color: {
      default: "",
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      danger: ""
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-small",
      md: "rounded-medium",
      lg: "rounded-large",
      full: "rounded-full"
    },
    fullWidth: {
      true: "w-full"
    },
    isDisabled: {
      true: "opacity-disabled pointer-events-none"
    },
    isInGroup: {
      true: "[&:not(:first-child):not(:last-child)]:rounded-none"
    },
    isIconOnly: {
      true: "px-0 !gap-0",
      false: "[&>svg]:max-w-[theme(spacing.8)]"
    },
    disableAnimation: {
      true: "!transition-none data-[pressed=true]:scale-100",
      false: "transition-transform-colors-opacity motion-reduce:transition-none"
    }
  },
  defaultVariants: {
    size: "md",
    variant: "solid",
    color: "default",
    fullWidth: !1,
    isDisabled: !1,
    isInGroup: !1
  },
  compoundVariants: [
    // solid / color
    {
      variant: "solid",
      color: "default",
      class: se.solid.default
    },
    {
      variant: "solid",
      color: "primary",
      class: se.solid.primary
    },
    {
      variant: "solid",
      color: "secondary",
      class: se.solid.secondary
    },
    {
      variant: "solid",
      color: "success",
      class: se.solid.success
    },
    {
      variant: "solid",
      color: "warning",
      class: se.solid.warning
    },
    {
      variant: "solid",
      color: "danger",
      class: se.solid.danger
    },
    // shadow / color
    {
      variant: "shadow",
      color: "default",
      class: se.shadow.default
    },
    {
      variant: "shadow",
      color: "primary",
      class: se.shadow.primary
    },
    {
      variant: "shadow",
      color: "secondary",
      class: se.shadow.secondary
    },
    {
      variant: "shadow",
      color: "success",
      class: se.shadow.success
    },
    {
      variant: "shadow",
      color: "warning",
      class: se.shadow.warning
    },
    {
      variant: "shadow",
      color: "danger",
      class: se.shadow.danger
    },
    // bordered / color
    {
      variant: "bordered",
      color: "default",
      class: se.bordered.default
    },
    {
      variant: "bordered",
      color: "primary",
      class: se.bordered.primary
    },
    {
      variant: "bordered",
      color: "secondary",
      class: se.bordered.secondary
    },
    {
      variant: "bordered",
      color: "success",
      class: se.bordered.success
    },
    {
      variant: "bordered",
      color: "warning",
      class: se.bordered.warning
    },
    {
      variant: "bordered",
      color: "danger",
      class: se.bordered.danger
    },
    // flat / color
    {
      variant: "flat",
      color: "default",
      class: se.flat.default
    },
    {
      variant: "flat",
      color: "primary",
      class: se.flat.primary
    },
    {
      variant: "flat",
      color: "secondary",
      class: se.flat.secondary
    },
    {
      variant: "flat",
      color: "success",
      class: se.flat.success
    },
    {
      variant: "flat",
      color: "warning",
      class: se.flat.warning
    },
    {
      variant: "flat",
      color: "danger",
      class: se.flat.danger
    },
    // faded / color
    {
      variant: "faded",
      color: "default",
      class: se.faded.default
    },
    {
      variant: "faded",
      color: "primary",
      class: se.faded.primary
    },
    {
      variant: "faded",
      color: "secondary",
      class: se.faded.secondary
    },
    {
      variant: "faded",
      color: "success",
      class: se.faded.success
    },
    {
      variant: "faded",
      color: "warning",
      class: se.faded.warning
    },
    {
      variant: "faded",
      color: "danger",
      class: se.faded.danger
    },
    // light / color
    {
      variant: "light",
      color: "default",
      class: [se.light.default, "data-[hover=true]:bg-default/40"]
    },
    {
      variant: "light",
      color: "primary",
      class: [se.light.primary, "data-[hover=true]:bg-primary/20"]
    },
    {
      variant: "light",
      color: "secondary",
      class: [se.light.secondary, "data-[hover=true]:bg-secondary/20"]
    },
    {
      variant: "light",
      color: "success",
      class: [se.light.success, "data-[hover=true]:bg-success/20"]
    },
    {
      variant: "light",
      color: "warning",
      class: [se.light.warning, "data-[hover=true]:bg-warning/20"]
    },
    {
      variant: "light",
      color: "danger",
      class: [se.light.danger, "data-[hover=true]:bg-danger/20"]
    },
    // ghost / color
    {
      variant: "ghost",
      color: "default",
      class: [se.ghost.default, "data-[hover=true]:!bg-default"]
    },
    {
      variant: "ghost",
      color: "primary",
      class: [
        se.ghost.primary,
        "data-[hover=true]:!bg-primary data-[hover=true]:!text-primary-foreground"
      ]
    },
    {
      variant: "ghost",
      color: "secondary",
      class: [
        se.ghost.secondary,
        "data-[hover=true]:!bg-secondary data-[hover=true]:!text-secondary-foreground"
      ]
    },
    {
      variant: "ghost",
      color: "success",
      class: [
        se.ghost.success,
        "data-[hover=true]:!bg-success data-[hover=true]:!text-success-foreground"
      ]
    },
    {
      variant: "ghost",
      color: "warning",
      class: [
        se.ghost.warning,
        "data-[hover=true]:!bg-warning data-[hover=true]:!text-warning-foreground"
      ]
    },
    {
      variant: "ghost",
      color: "danger",
      class: [
        se.ghost.danger,
        "data-[hover=true]:!bg-danger data-[hover=true]:!text-danger-foreground"
      ]
    },
    // isInGroup / radius / size <-- radius not provided
    {
      isInGroup: !0,
      class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
    },
    {
      isInGroup: !0,
      size: "sm",
      class: "rounded-none first:rounded-s-small last:rounded-e-small"
    },
    {
      isInGroup: !0,
      size: "md",
      class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
    },
    {
      isInGroup: !0,
      size: "lg",
      class: "rounded-none first:rounded-s-large last:rounded-e-large"
    },
    {
      isInGroup: !0,
      isRounded: !0,
      class: "rounded-none first:rounded-s-full last:rounded-e-full"
    },
    // isInGroup / radius <-- radius provided
    {
      isInGroup: !0,
      radius: "none",
      class: "rounded-none first:rounded-s-none last:rounded-e-none"
    },
    {
      isInGroup: !0,
      radius: "sm",
      class: "rounded-none first:rounded-s-small last:rounded-e-small"
    },
    {
      isInGroup: !0,
      radius: "md",
      class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
    },
    {
      isInGroup: !0,
      radius: "lg",
      class: "rounded-none first:rounded-s-large last:rounded-e-large"
    },
    {
      isInGroup: !0,
      radius: "full",
      class: "rounded-none first:rounded-s-full last:rounded-e-full"
    },
    // isInGroup / bordered / ghost
    {
      isInGroup: !0,
      variant: ["ghost", "bordered"],
      color: "default",
      className: qt.default
    },
    {
      isInGroup: !0,
      variant: ["ghost", "bordered"],
      color: "primary",
      className: qt.primary
    },
    {
      isInGroup: !0,
      variant: ["ghost", "bordered"],
      color: "secondary",
      className: qt.secondary
    },
    {
      isInGroup: !0,
      variant: ["ghost", "bordered"],
      color: "success",
      className: qt.success
    },
    {
      isInGroup: !0,
      variant: ["ghost", "bordered"],
      color: "warning",
      className: qt.warning
    },
    {
      isInGroup: !0,
      variant: ["ghost", "bordered"],
      color: "danger",
      className: qt.danger
    },
    {
      isIconOnly: !0,
      size: "sm",
      class: "min-w-8 w-8 h-8"
    },
    {
      isIconOnly: !0,
      size: "md",
      class: "min-w-10 w-10 h-10"
    },
    {
      isIconOnly: !0,
      size: "lg",
      class: "min-w-12 w-12 h-12"
    },
    // variant / hover
    {
      variant: ["solid", "faded", "flat", "bordered", "shadow"],
      class: "data-[hover=true]:opacity-hover"
    }
  ]
});
Jr({
  base: "inline-flex items-center justify-center h-auto",
  variants: {
    fullWidth: {
      true: "w-full"
    }
  },
  defaultVariants: {
    fullWidth: !1
  }
});
var xs = {
  ease: [0.36, 0.66, 0.4, 1]
}, ys = {
  scaleSpringOpacity: {
    initial: {
      opacity: 0,
      transform: "scale(0.8)"
    },
    enter: {
      opacity: 1,
      transform: "scale(1)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      transform: "scale(0.96)",
      transition: {
        type: "easeOut",
        bounce: 0,
        duration: 0.15
      }
    }
  },
  fade: {
    enter: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: xs.ease
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: xs.ease
      }
    }
  }
};
function Bf(e) {
  return Ie(e);
}
var Gf = (e, t, r = !0) => {
  if (!t)
    return [e, {}];
  const n = t.reduce((o, s) => s in e ? { ...o, [s]: e[s] } : o, {});
  return r ? [Object.keys(e).filter((s) => !t.includes(s)).reduce((s, a) => ({ ...s, [a]: e[a] }), {}), n] : [e, n];
}, Hf = (e) => {
  const t = {
    top: {
      originY: 1
    },
    bottom: {
      originY: 0
    },
    left: {
      originX: 1
    },
    right: {
      originX: 0
    },
    "top-start": {
      originX: 0,
      originY: 1
    },
    "top-end": {
      originX: 1,
      originY: 1
    },
    "bottom-start": {
      originX: 0,
      originY: 0
    },
    "bottom-end": {
      originX: 1,
      originY: 0
    },
    "right-start": {
      originX: 0,
      originY: 0
    },
    "right-end": {
      originX: 0,
      originY: 1
    },
    "left-start": {
      originX: 1,
      originY: 0
    },
    "left-end": {
      originX: 1,
      originY: 1
    }
  };
  return (t == null ? void 0 : t[e]) || {};
}, Wf = (e) => ({
  top: "top",
  bottom: "bottom",
  left: "left",
  right: "right",
  "top-start": "top start",
  "top-end": "top end",
  "bottom-start": "bottom start",
  "bottom-end": "bottom end",
  "left-start": "left top",
  "left-end": "left bottom",
  "right-start": "right top",
  "right-end": "right bottom"
})[e], Kf = (e, t) => {
  if (t.includes("-")) {
    const [r] = t.split("-");
    if (r.includes(e))
      return !1;
  }
  return !0;
}, ws = (e, t) => {
  if (t.includes("-")) {
    const [, r] = t.split("-");
    return `${e}-${r}`;
  }
  return e;
}, gr = /* @__PURE__ */ new WeakMap(), Je = [];
function Uf(e, t = document.body) {
  let r = new Set(e), n = /* @__PURE__ */ new Set(), o = (c) => {
    for (let h of c.querySelectorAll(
      "[data-live-announcer], [data-react-aria-top-layer]"
    ))
      r.add(h);
    let u = (h) => {
      if (r.has(h) || h.parentElement && n.has(h.parentElement) && h.parentElement.getAttribute("role") !== "row")
        return NodeFilter.FILTER_REJECT;
      for (let b of r)
        if (h.contains(b))
          return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }, d = document.createTreeWalker(c, NodeFilter.SHOW_ELEMENT, { acceptNode: u }), f = u(c);
    if (f === NodeFilter.FILTER_ACCEPT && s(c), f !== NodeFilter.FILTER_REJECT) {
      let h = d.nextNode();
      for (; h != null; )
        s(h), h = d.nextNode();
    }
  }, s = (c) => {
    var u;
    let d = (u = gr.get(c)) != null ? u : 0;
    c.getAttribute("aria-hidden") === "true" && d === 0 || (d === 0 && c.setAttribute("aria-hidden", "true"), n.add(c), gr.set(c, d + 1));
  };
  Je.length && Je[Je.length - 1].disconnect(), o(t);
  let a = new MutationObserver((c) => {
    for (let u of c)
      if (!(u.type !== "childList" || u.addedNodes.length === 0) && ![...r, ...n].some((d) => d.contains(u.target))) {
        for (let d of u.removedNodes)
          d instanceof Element && (r.delete(d), n.delete(d));
        for (let d of u.addedNodes)
          (d instanceof HTMLElement || d instanceof SVGElement) && (d.dataset.liveAnnouncer === "true" || d.dataset.reactAriaTopLayer === "true") ? r.add(d) : d instanceof Element && o(d);
      }
  });
  a.observe(t, { childList: !0, subtree: !0 });
  let l = {
    visibleNodes: r,
    hiddenNodes: n,
    observe() {
      a.observe(t, { childList: !0, subtree: !0 });
    },
    disconnect() {
      a.disconnect();
    }
  };
  return Je.push(l), () => {
    a.disconnect();
    for (let c of n) {
      let u = gr.get(c);
      u != null && (u === 1 ? (c.removeAttribute("aria-hidden"), gr.delete(c)) : gr.set(c, u - 1));
    }
    l === Je[Je.length - 1] ? (Je.pop(), Je.length && Je[Je.length - 1].observe()) : Je.splice(Je.indexOf(l), 1);
  };
}
function Yf(e) {
  let t = Je[Je.length - 1];
  if (t && !t.visibleNodes.has(e))
    return t.visibleNodes.add(e), () => {
      t.visibleNodes.delete(e);
    };
}
var qf = globalThis != null && globalThis.document ? Ps : ue, [qp, Xf] = qn({
  name: "ButtonGroupContext",
  strict: !1
});
function ki(e, t) {
  let {
    elementType: r = "button",
    isDisabled: n,
    onPress: o,
    onPressStart: s,
    onPressEnd: a,
    onPressUp: l,
    onPressChange: c,
    // @ts-ignore - undocumented
    preventFocusOnPress: u,
    // @ts-ignore - undocumented
    allowFocusWhenDisabled: d,
    onClick: f,
    href: h,
    target: b,
    rel: w,
    type: v = "button",
    allowTextSelectionOnPress: E
  } = e, j;
  r === "button" ? j = {
    type: v,
    disabled: n
  } : j = {
    role: "button",
    href: r === "a" && !n ? h : void 0,
    target: r === "a" ? b : void 0,
    type: r === "input" ? v : void 0,
    disabled: r === "input" ? n : void 0,
    "aria-disabled": !n || r === "input" ? void 0 : n,
    rel: r === "a" ? w : void 0
  };
  let { pressProps: N, isPressed: S } = Xd({
    onClick: f,
    onPressStart: s,
    onPressEnd: a,
    onPressUp: l,
    onPressChange: c,
    onPress: o,
    isDisabled: n,
    preventFocusOnPress: u,
    allowTextSelectionOnPress: E,
    ref: t
  }), { focusableProps: L } = uu(e, t);
  d && (L.tabIndex = n ? -1 : L.tabIndex);
  let R = Gt(
    L,
    N,
    ea(e, { labelable: !0 })
  );
  return {
    isPressed: S,
    // Used to indicate press state for visual
    buttonProps: Gt(j, R, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      "aria-current": e["aria-current"]
    })
  };
}
var Zf = () => import("./index-SfZMAM5z.mjs").then((e) => e.default), Ni = (e) => {
  const { ripples: t = [], motionProps: r, color: n = "currentColor", style: o, onClear: s } = e;
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: t.map((a) => {
    const l = Sc(0.01 * a.size, 0.2, a.size > 100 ? 0.75 : 0.5);
    return /* @__PURE__ */ i.jsx(xn, { features: Zf, children: /* @__PURE__ */ i.jsx(Ss, { mode: "popLayout", children: /* @__PURE__ */ i.jsx(
      yn.span,
      {
        animate: { transform: "scale(2)", opacity: 0 },
        className: "heroui-ripple",
        exit: { opacity: 0 },
        initial: { transform: "scale(0)", opacity: 0.35 },
        style: {
          position: "absolute",
          backgroundColor: n,
          borderRadius: "100%",
          transformOrigin: "center",
          pointerEvents: "none",
          overflow: "hidden",
          inset: 0,
          zIndex: 0,
          top: a.y,
          left: a.x,
          width: `${a.size}px`,
          height: `${a.size}px`,
          ...o
        },
        transition: { duration: l },
        onAnimationComplete: () => {
          s(a.key);
        },
        ...r
      }
    ) }) }, a.key);
  }) });
};
Ni.displayName = "HeroUI.Ripple";
var Jf = Ni;
function Qf(e = {}) {
  const [t, r] = te([]), n = pe((s) => {
    const a = s.target, l = Math.max(a.clientWidth, a.clientHeight);
    r((c) => [
      ...c,
      {
        key: Tc(c.length.toString()),
        size: l,
        x: s.x - l / 2,
        y: s.y - l / 2
      }
    ]);
  }, []), o = pe((s) => {
    r((a) => a.filter((l) => l.key !== s));
  }, []);
  return { ripples: t, onClear: o, onPress: n, ...e };
}
function ep(e) {
  var t, r, n, o, s, a, l, c, u;
  const d = Xf(), f = Xn(), h = !!d, {
    ref: b,
    as: w,
    children: v,
    startContent: E,
    endContent: j,
    autoFocus: N,
    className: S,
    spinner: L,
    isLoading: R = !1,
    disableRipple: C = !1,
    fullWidth: K = (t = d == null ? void 0 : d.fullWidth) != null ? t : !1,
    radius: z = d == null ? void 0 : d.radius,
    size: I = (r = d == null ? void 0 : d.size) != null ? r : "md",
    color: O = (n = d == null ? void 0 : d.color) != null ? n : "default",
    variant: p = (o = d == null ? void 0 : d.variant) != null ? o : "solid",
    disableAnimation: x = (a = (s = d == null ? void 0 : d.disableAnimation) != null ? s : f == null ? void 0 : f.disableAnimation) != null ? a : !1,
    isDisabled: m = (l = d == null ? void 0 : d.isDisabled) != null ? l : !1,
    isIconOnly: $ = (c = d == null ? void 0 : d.isIconOnly) != null ? c : !1,
    spinnerPlacement: A = "start",
    onPress: g,
    onClick: k,
    ...P
  } = e, T = w || "button", U = typeof T == "string", F = Us(b), H = (u = C || (f == null ? void 0 : f.disableRipple)) != null ? u : x, { isFocusVisible: ne, isFocused: B, focusProps: W } = Na({
    autoFocus: N
  }), q = m || R, _ = _e(
    () => Vf({
      size: I,
      color: O,
      variant: p,
      radius: z,
      fullWidth: K,
      isDisabled: q,
      isInGroup: h,
      disableAnimation: x,
      isIconOnly: $,
      className: S
    }),
    [
      I,
      O,
      p,
      z,
      K,
      q,
      h,
      $,
      x,
      S
    ]
  ), { onPress: X, onClear: xe, ripples: fe } = Qf(), Ue = pe(
    (Fe) => {
      H || q || x || F.current && X(Fe);
    },
    [H, q, x, F, X]
  ), { buttonProps: He, isPressed: Se } = ki(
    {
      elementType: w,
      isDisabled: q,
      onPress: Xs(g, Ue),
      onClick: k,
      ...P
    },
    F
  ), { isHovered: Ye, hoverProps: Ee } = gu({ isDisabled: q }), et = pe(
    (Fe = {}) => ({
      "data-disabled": ot(q),
      "data-focus": ot(B),
      "data-pressed": ot(Se),
      "data-focus-visible": ot(ne),
      "data-hover": ot(Ye),
      "data-loading": ot(R),
      ...Rt(
        He,
        W,
        Ee,
        Ao(P, {
          enabled: U
        }),
        Ao(Fe)
      ),
      className: _
    }),
    [
      R,
      q,
      B,
      Se,
      U,
      ne,
      Ye,
      He,
      W,
      Ee,
      P,
      _
    ]
  ), tt = (Fe) => xr(Fe) ? Kn(Fe, {
    // @ts-ignore
    "aria-hidden": !0,
    focusable: !1
  }) : null, We = tt(E), ze = tt(j), dt = _e(() => ({
    sm: "sm",
    md: "sm",
    lg: "md"
  })[I], [I]), ut = pe(
    () => ({ ripples: fe, onClear: xe }),
    [fe, xe]
  );
  return {
    Component: T,
    children: v,
    domRef: F,
    spinner: L,
    styles: _,
    startContent: We,
    endContent: ze,
    isLoading: R,
    spinnerPlacement: A,
    spinnerSize: dt,
    disableRipple: H,
    getButtonProps: et,
    getRippleProps: ut,
    isIconOnly: $
  };
}
function tp(e) {
  var t, r;
  const [n, o] = Gf(e, hs.variantKeys), s = Xn(), a = (r = (t = e == null ? void 0 : e.variant) != null ? t : s == null ? void 0 : s.spinnerVariant) != null ? r : "default", { children: l, className: c, classNames: u, label: d, ...f } = n, h = _e(() => hs({ ...o }), [qs(o)]), b = Xt(u == null ? void 0 : u.base, c), w = d || l, v = _e(() => w && typeof w == "string" ? w : f["aria-label"] ? "" : "Loading", [l, w, f["aria-label"]]), E = pe(
    () => ({
      "aria-label": v,
      className: h.base({
        class: b
      }),
      ...f
    }),
    [v, h, b, f]
  );
  return { label: w, slots: h, classNames: u, variant: a, getSpinnerProps: E };
}
var Ei = Bf((e, t) => {
  const { slots: r, classNames: n, label: o, variant: s, getSpinnerProps: a } = tp({ ...e });
  return s === "wave" || s === "dots" ? /* @__PURE__ */ i.jsxs("div", { ref: t, ...a(), children: [
    /* @__PURE__ */ i.jsx("div", { className: r.wrapper({ class: n == null ? void 0 : n.wrapper }), children: [...new Array(3)].map((l, c) => /* @__PURE__ */ i.jsx(
      "i",
      {
        className: r.dots({ class: n == null ? void 0 : n.dots }),
        style: {
          "--dot-index": c
        }
      },
      `dot-${c}`
    )) }),
    o && /* @__PURE__ */ i.jsx("span", { className: r.label({ class: n == null ? void 0 : n.label }), children: o })
  ] }) : s === "simple" ? /* @__PURE__ */ i.jsxs("div", { ref: t, ...a(), children: [
    /* @__PURE__ */ i.jsxs(
      "svg",
      {
        className: r.wrapper({ class: n == null ? void 0 : n.wrapper }),
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
          /* @__PURE__ */ i.jsx(
            "circle",
            {
              className: r.circle1({ class: n == null ? void 0 : n.circle1 }),
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              strokeWidth: "4"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              className: r.circle2({ class: n == null ? void 0 : n.circle2 }),
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
              fill: "currentColor"
            }
          )
        ]
      }
    ),
    o && /* @__PURE__ */ i.jsx("span", { className: r.label({ class: n == null ? void 0 : n.label }), children: o })
  ] }) : s === "spinner" ? /* @__PURE__ */ i.jsxs("div", { ref: t, ...a(), children: [
    /* @__PURE__ */ i.jsx("div", { className: r.wrapper({ class: n == null ? void 0 : n.wrapper }), children: [...new Array(12)].map((l, c) => /* @__PURE__ */ i.jsx(
      "i",
      {
        className: r.spinnerBars({ class: n == null ? void 0 : n.spinnerBars }),
        style: {
          "--bar-index": c
        }
      },
      `star-${c}`
    )) }),
    o && /* @__PURE__ */ i.jsx("span", { className: r.label({ class: n == null ? void 0 : n.label }), children: o })
  ] }) : /* @__PURE__ */ i.jsxs("div", { ref: t, ...a(), children: [
    /* @__PURE__ */ i.jsxs("div", { className: r.wrapper({ class: n == null ? void 0 : n.wrapper }), children: [
      /* @__PURE__ */ i.jsx("i", { className: r.circle1({ class: n == null ? void 0 : n.circle1 }) }),
      /* @__PURE__ */ i.jsx("i", { className: r.circle2({ class: n == null ? void 0 : n.circle2 }) })
    ] }),
    o && /* @__PURE__ */ i.jsx("span", { className: r.label({ class: n == null ? void 0 : n.label }), children: o })
  ] });
});
Ei.displayName = "HeroUI.Spinner";
var rp = Ei, ji = ii((e, t) => {
  const {
    Component: r,
    domRef: n,
    children: o,
    spinnerSize: s,
    spinner: a = /* @__PURE__ */ i.jsx(rp, { color: "current", size: s }),
    spinnerPlacement: l,
    startContent: c,
    endContent: u,
    isLoading: d,
    disableRipple: f,
    getButtonProps: h,
    getRippleProps: b,
    isIconOnly: w
  } = ep({ ...e, ref: t });
  return /* @__PURE__ */ i.jsxs(r, { ref: n, ...h(), children: [
    c,
    d && l === "start" && a,
    d && w ? null : o,
    d && l === "end" && a,
    u,
    !f && /* @__PURE__ */ i.jsx(Jf, { ...b() })
  ] });
});
ji.displayName = "HeroUI.Button";
var np = ji;
function op(e) {
  let [t, r] = Ld(e.isOpen, e.defaultOpen || !1, e.onOpenChange);
  const n = pe(() => {
    r(!0);
  }, [
    r
  ]), o = pe(() => {
    r(!1);
  }, [
    r
  ]), s = pe(() => {
    r(!t);
  }, [
    r,
    t
  ]);
  return {
    isOpen: t,
    setOpen: r,
    open: n,
    close: o,
    toggle: s
  };
}
var xt = [];
function sp(e, t) {
  const {
    disableOutsideEvents: r = !0,
    isDismissable: n = !1,
    isKeyboardDismissDisabled: o = !1,
    isOpen: s,
    onClose: a,
    shouldCloseOnBlur: l,
    shouldCloseOnInteractOutside: c
  } = e;
  ue(() => (s && xt.push(t), () => {
    const v = xt.indexOf(t);
    v >= 0 && xt.splice(v, 1);
  }), [s, t]);
  const u = () => {
    xt[xt.length - 1] === t && a && a();
  }, d = (v) => {
    (!c || c(v.target)) && (xt[xt.length - 1] === t && r && (v.stopPropagation(), v.preventDefault()), v.pointerType !== "touch" && u());
  }, f = (v) => {
    v.pointerType === "touch" && (!c || c(v.target)) && (xt[xt.length - 1] === t && r && (v.stopPropagation(), v.preventDefault()), u());
  }, h = (v) => {
    v.key === "Escape" && !o && !v.nativeEvent.isComposing && (v.stopPropagation(), v.preventDefault(), u());
  };
  mu({
    isDisabled: !(n && s),
    onInteractOutside: n && s ? f : void 0,
    onInteractOutsideStart: d,
    ref: t
  });
  const { focusWithinProps: b } = io({
    isDisabled: !l,
    onBlurWithin: (v) => {
      !v.relatedTarget || xu(v.relatedTarget) || (!c || c(v.relatedTarget)) && u();
    }
  }), w = (v) => {
    v.target === v.currentTarget && v.preventDefault();
  };
  return {
    overlayProps: {
      onKeyDown: h,
      ...b
    },
    underlayProps: {
      onPointerDown: w
    }
  };
}
function ap(e, t) {
  const {
    groupRef: r,
    triggerRef: n,
    popoverRef: o,
    showArrow: s,
    offset: a = 7,
    crossOffset: l = 0,
    scrollRef: c,
    shouldFlip: u,
    boundaryElement: d,
    isDismissable: f = !0,
    shouldCloseOnBlur: h = !0,
    shouldCloseOnScroll: b = !0,
    placement: w = "top",
    containerPadding: v,
    shouldCloseOnInteractOutside: E,
    isNonModal: j,
    isKeyboardDismissDisabled: N,
    updatePositionDeps: S = [],
    ...L
  } = e, R = j ?? !0, C = L.trigger === "SubmenuTrigger", { overlayProps: K, underlayProps: z } = sp(
    {
      isOpen: t.isOpen,
      onClose: t.close,
      shouldCloseOnBlur: h,
      isDismissable: f || C,
      isKeyboardDismissDisabled: N,
      shouldCloseOnInteractOutside: E || ((m) => {
        var $;
        return !(($ = n.current) != null && $.contains(m));
      }),
      disableOutsideEvents: !R
    },
    o
  ), {
    overlayProps: I,
    arrowProps: O,
    placement: p,
    updatePosition: x
  } = Vd({
    ...L,
    shouldFlip: u,
    crossOffset: l,
    targetRef: n,
    overlayRef: o,
    isOpen: t.isOpen,
    scrollRef: c,
    boundaryElement: d,
    containerPadding: v,
    placement: Wf(w),
    offset: s ? a + 3 : a,
    onClose: R && !C && b ? t.close : () => {
    }
  });
  return qf(() => {
    S.length && x();
  }, S), ue(() => {
    var m, $;
    if (t.isOpen && o.current)
      return R ? Yf((m = r == null ? void 0 : r.current) != null ? m : o.current) : Uf([($ = r == null ? void 0 : r.current) != null ? $ : o.current]);
  }, [R, t.isOpen, o, r]), {
    popoverProps: Rt(K, I),
    arrowProps: O,
    underlayProps: z,
    placement: p
  };
}
var ip = "top";
function lp(e) {
  var t, r, n;
  const o = Xn(), [s, a] = Mu(e, vs.variantKeys), {
    as: l,
    ref: c,
    children: u,
    state: d,
    triggerRef: f,
    scrollRef: h,
    defaultOpen: b,
    onOpenChange: w,
    isOpen: v,
    isNonModal: E = !0,
    shouldFlip: j = !0,
    containerPadding: N = 12,
    shouldBlockScroll: S = !1,
    isDismissable: L = !0,
    shouldCloseOnBlur: R,
    portalContainer: C,
    updatePositionDeps: K,
    dialogProps: z,
    placement: I = ip,
    triggerType: O = "dialog",
    showArrow: p = !1,
    offset: x = 7,
    crossOffset: m = 0,
    boundaryElement: $,
    isKeyboardDismissDisabled: A,
    shouldCloseOnInteractOutside: g,
    shouldCloseOnScroll: k,
    motionProps: P,
    className: T,
    classNames: U,
    onClose: F,
    ...H
  } = s, ne = l || "div", B = Us(c), W = re(null), q = re(!1), _ = f || W, X = (r = (t = e.disableAnimation) != null ? t : o == null ? void 0 : o.disableAnimation) != null ? r : !1, xe = op({
    isOpen: v,
    defaultOpen: b,
    onOpenChange: (D) => {
      w == null || w(D), D || F == null || F();
    }
  }), fe = d || xe, {
    popoverProps: Ue,
    underlayProps: He,
    placement: Se
  } = ap(
    {
      triggerRef: _,
      isNonModal: E,
      popoverRef: B,
      placement: I,
      offset: x,
      scrollRef: h,
      isDismissable: L,
      shouldCloseOnBlur: R,
      boundaryElement: $,
      crossOffset: m,
      shouldFlip: j,
      containerPadding: N,
      updatePositionDeps: K,
      isKeyboardDismissDisabled: A,
      shouldCloseOnScroll: k,
      shouldCloseOnInteractOutside: g
    },
    fe
  ), Ye = _e(() => Se ? Kf(Se, I) ? Se : I : null, [Se, I]), { triggerProps: Ee } = ku({ type: O }, fe, _), { isFocusVisible: et, isFocused: tt, focusProps: We } = Na(), ze = _e(
    () => vs({
      ...a
    }),
    [qs(a)]
  ), dt = Xt(U == null ? void 0 : U.base, T);
  Eu({
    isDisabled: !(S && fe.isOpen)
  });
  const ut = (D = {}) => ({
    ref: B,
    ...Rt(Ue, H, D),
    style: Rt(Ue.style, H.style, D.style)
  }), Fe = (D = {}) => ({
    // `ref` and `dialogProps` from `useDialog` are passed from props
    // if we use `useDialog` here, dialogRef won't be focused on mount
    "data-slot": "base",
    "data-open": ot(fe.isOpen),
    "data-focus": ot(tt),
    "data-arrow": ot(p),
    "data-focus-visible": ot(et),
    "data-placement": Se ? ws(Se, I) : void 0,
    ...Rt(We, z, D),
    className: ze.base({ class: Xt(dt) }),
    style: {
      // this prevent the dialog to have a default outline
      outline: "none"
    }
  }), Nt = pe(
    (D = {}) => ({
      "data-slot": "content",
      "data-open": ot(fe.isOpen),
      "data-arrow": ot(p),
      "data-placement": Se ? ws(Se, I) : void 0,
      className: ze.content({ class: Xt(U == null ? void 0 : U.content, D.className) })
    }),
    [ze, fe.isOpen, p, Ye, I, U, Se]
  ), bt = pe(
    (D) => {
      var oe;
      let Y;
      return D.pointerType === "touch" && ((e == null ? void 0 : e.backdrop) === "blur" || (e == null ? void 0 : e.backdrop) === "opaque") ? Y = setTimeout(() => {
        q.current = !0;
      }, 100) : q.current = !0, (oe = Ee.onPress) == null || oe.call(Ee, D), () => {
        clearTimeout(Y);
      };
    },
    [Ee == null ? void 0 : Ee.onPress]
  ), V = pe(
    (D = {}, oe = null) => {
      const { isDisabled: Y, ...ve } = D;
      return {
        "data-slot": "trigger",
        ...Rt({ "aria-haspopup": "dialog" }, Ee, ve),
        onPress: bt,
        isDisabled: Y,
        className: ze.trigger({
          class: Xt(U == null ? void 0 : U.trigger, D.className),
          // apply isDisabled class names to make the trigger child disabled
          // e.g. for elements like div or HeroUI elements that don't have `isDisabled` prop
          isTriggerDisabled: Y
        }),
        ref: Rc(oe, _)
      };
    },
    [fe, Ee, bt, _]
  ), ee = pe(
    (D = {}) => ({
      "data-slot": "backdrop",
      className: ze.backdrop({ class: U == null ? void 0 : U.backdrop }),
      onClick: (oe) => {
        if (!q.current) {
          oe.preventDefault();
          return;
        }
        fe.close(), q.current = !1;
      },
      ...He,
      ...D
    }),
    [ze, fe.isOpen, U, He]
  );
  return {
    state: fe,
    Component: ne,
    children: u,
    classNames: U,
    showArrow: p,
    triggerRef: _,
    placement: Ye,
    isNonModal: E,
    popoverRef: B,
    portalContainer: C,
    isOpen: fe.isOpen,
    onClose: fe.close,
    disableAnimation: X,
    shouldBlockScroll: S,
    backdrop: (n = e.backdrop) != null ? n : "transparent",
    motionProps: P,
    getBackdropProps: ee,
    getPopoverProps: ut,
    getTriggerProps: V,
    getDialogProps: Fe,
    getContentProps: Nt
  };
}
function cp(e, t) {
  let { role: r = "dialog" } = e, n = dd();
  n = e["aria-label"] ? void 0 : n;
  let o = re(!1);
  return ue(() => {
    if (t.current && !t.current.contains(document.activeElement)) {
      Hr(t.current);
      let s = setTimeout(() => {
        document.activeElement === t.current && (o.current = !0, t.current && (t.current.blur(), Hr(t.current)), o.current = !1);
      }, 500);
      return () => {
        clearTimeout(s);
      };
    }
  }, [
    t
  ]), Ou(), {
    dialogProps: {
      ...ea(e, {
        labelable: !0
      }),
      role: r,
      tabIndex: -1,
      "aria-labelledby": e["aria-labelledby"] || n,
      // Prevent blur events from reaching useOverlay, which may cause
      // popovers to close. Since focus is contained within the dialog,
      // we don't want this to occur due to the above useEffect.
      onBlur: (s) => {
        o.current && s.stopPropagation();
      }
    },
    titleProps: {
      id: n
    }
  };
}
var [dp, Pi] = qn({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
}), $s = () => import("./index-SfZMAM5z.mjs").then((e) => e.default), Ti = (e) => {
  const { as: t, children: r, className: n, ...o } = e, {
    Component: s,
    placement: a,
    backdrop: l,
    motionProps: c,
    disableAnimation: u,
    getPopoverProps: d,
    getDialogProps: f,
    getBackdropProps: h,
    getContentProps: b,
    isNonModal: w,
    onClose: v
  } = Pi(), E = re(null), { dialogProps: j, titleProps: N } = cp({}, E), S = f({
    ref: E,
    ...j,
    ...o
  }), L = t || s || "div", R = /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    !w && /* @__PURE__ */ i.jsx(cs, { onDismiss: v }),
    /* @__PURE__ */ i.jsx(L, { ...S, children: /* @__PURE__ */ i.jsx("div", { ...b({ className: n }), children: typeof r == "function" ? r(N) : r }) }),
    /* @__PURE__ */ i.jsx(cs, { onDismiss: v })
  ] }), C = _e(() => l === "transparent" ? null : u ? /* @__PURE__ */ i.jsx("div", { ...h() }) : /* @__PURE__ */ i.jsx(xn, { features: $s, children: /* @__PURE__ */ i.jsx(
    yn.div,
    {
      animate: "enter",
      exit: "exit",
      initial: "exit",
      variants: ys.fade,
      ...h()
    }
  ) }), [l, u, h]), K = a ? Hf(a === "center" ? "top" : a) : void 0, z = /* @__PURE__ */ i.jsx(i.Fragment, { children: u ? R : /* @__PURE__ */ i.jsx(xn, { features: $s, children: /* @__PURE__ */ i.jsx(
    yn.div,
    {
      animate: "enter",
      exit: "exit",
      initial: "initial",
      style: K,
      variants: ys.scaleSpringOpacity,
      ...c,
      children: R
    }
  ) }) });
  return /* @__PURE__ */ i.jsxs("div", { ...d(), children: [
    C,
    z
  ] });
};
Ti.displayName = "HeroUI.PopoverContent";
var up = Ti, Si = (e) => {
  var t;
  const { triggerRef: r, getTriggerProps: n } = Pi(), { children: o, ...s } = e, a = _e(() => typeof o == "string" ? /* @__PURE__ */ i.jsx("p", { children: o }) : wr.only(o), [o]), l = (t = a.props.ref) != null ? t : a.ref, { onPress: c, isDisabled: u, ...d } = _e(() => n(Rt(s, a.props), l), [n, a.props, s, l]), [, f] = Lc(o, np), { buttonProps: h } = ki({ onPress: c, isDisabled: u }, r), b = _e(() => (f == null ? void 0 : f[0]) !== void 0, [f]);
  return b || delete d.preventFocusOnPress, Kn(
    a,
    Rt(d, b ? { onPress: c, isDisabled: u } : h)
  );
};
Si.displayName = "HeroUI.PopoverTrigger";
var fp = Si, Ci = ii((e, t) => {
  const { children: r, ...n } = e, o = lp({ ...n, ref: t }), [s, a] = wr.toArray(r), l = /* @__PURE__ */ i.jsx(Iu, { portalContainer: o.portalContainer, children: a });
  return /* @__PURE__ */ i.jsxs(dp, { value: o, children: [
    s,
    o.disableAnimation && o.isOpen ? l : /* @__PURE__ */ i.jsx(Ss, { children: o.isOpen ? l : null })
  ] });
});
Ci.displayName = "HeroUI.Popover";
var pp = Ci;
const gp = De("border bg-popover text-popover-foreground", {
  variants: {
    variant: {
      default: "border-border shadow-sm",
      elevated: "border-border shadow-lg",
      outline: "border-border bg-transparent",
      ghost: "border-transparent bg-transparent"
    },
    color: {
      primary: "border-primary bg-primary text-primary-foreground",
      secondary: "border-secondary bg-secondary text-secondary-foreground",
      success: "border-success bg-success text-success-foreground",
      warning: "border-warning bg-warning text-warning-foreground",
      danger: "border-danger bg-danger text-danger-foreground",
      info: "border-info bg-info text-info-foreground",
      neutral: "border-neutral bg-neutral text-neutral-foreground",
      light: "border-gray-200 bg-white text-gray-900",
      custom: ""
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
    color: "light",
    shadow: "md",
    rounded: "lg"
  }
}), Xp = ({
  content: e,
  children: t,
  placement: r = "bottom",
  showArrow: n = !1,
  variant: o = "default",
  color: s = "light",
  customColor: a,
  rounded: l = "lg",
  shadow: c = "md",
  className: u,
  isOpen: d,
  onOpenChange: f,
  backdrop: h = "transparent",
  disableAnimation: b = !1,
  offset: w = 7,
  isDismissable: v = !0
}) => {
  const E = () => {
    switch (s) {
      case "primary":
        return "primary";
      case "secondary":
        return "secondary";
      case "success":
        return "success";
      case "warning":
        return "warning";
      case "danger":
        return "danger";
      case "info":
      case "neutral":
        return "default";
      case "light":
        return "default";
      case "custom":
        return "default";
      default:
        return "default";
    }
  }, j = () => s === "custom" && a ? { backgroundColor: a, color: "#ffffff" } : {
    info: "bg-blue-500 text-white border-blue-500",
    neutral: "bg-gray-500 text-white border-gray-500",
    light: "bg-white text-gray-900 border-gray-200"
  }[s] || "", N = () => {
    switch (h) {
      case "blur":
        return "blur";
      case "dark":
        return "opaque";
      case "transparent":
      default:
        return "transparent";
    }
  }, S = j(), L = E(), R = N(), C = {
    placement: r,
    showArrow: n,
    color: L,
    radius: l,
    shadow: c,
    isOpen: d,
    onOpenChange: f,
    backdrop: R,
    disableAnimation: b,
    offset: w,
    isDismissable: v
  };
  return Object.keys(C).forEach((K) => {
    C[K] === void 0 && delete C[K];
  }), /* @__PURE__ */ i.jsxs(pp, { ...C, children: [
    /* @__PURE__ */ i.jsx(fp, { children: t }),
    /* @__PURE__ */ i.jsx(
      up,
      {
        className: M(
          gp({ variant: o, color: s, shadow: c, rounded: l }),
          u,
          S,
          // Apply custom color styles when needed
          s === "custom" && a ? "border-0" : ""
        ),
        style: s === "custom" && a ? { backgroundColor: a, color: "#ffffff" } : void 0,
        children: e
      }
    )
  ] });
}, mp = De("flex items-center text-sm", {
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
}), bp = Ie(
  ({
    className: e,
    variant: t = "default",
    size: r = "md",
    items: n,
    separator: o = /* @__PURE__ */ i.jsx(de, { icon: "mdi:slash-forward", className: "h-4 w-4 flex-shrink-0" }),
    activeLastItem: s = !0,
    ...a
  }, l) => /* @__PURE__ */ i.jsx(
    "nav",
    {
      ref: l,
      className: M(mp({ variant: t, size: r }), e),
      "aria-label": "Breadcrumb",
      ...a,
      children: /* @__PURE__ */ i.jsx("ol", { className: "flex flex-wrap items-center gap-1.5", children: n.map((c, u) => {
        const d = u === n.length - 1, f = d && s;
        return /* @__PURE__ */ i.jsxs(
          "li",
          {
            className: M(
              "flex items-center gap-1.5",
              f && "text-primary font-medium"
            ),
            children: [
              c.icon && /* @__PURE__ */ i.jsx(
                de,
                {
                  icon: c.icon,
                  className: M(
                    "flex-shrink-0",
                    r === "sm" && "h-3.5 w-3.5",
                    r === "md" && "h-4 w-4",
                    r === "lg" && "h-5 w-5"
                  )
                }
              ),
              c.href && !f ? /* @__PURE__ */ i.jsx(
                "a",
                {
                  href: c.href,
                  className: M(
                    "transition-colors duration-200",
                    "hover:text-primary hover:underline focus:outline-none",
                    "focus-visible:text-primary focus-visible:underline",
                    "active:text-primary-600"
                  ),
                  children: /* @__PURE__ */ i.jsx("span", { className: "truncate max-w-[200px] inline-block align-bottom", children: c.label })
                }
              ) : /* @__PURE__ */ i.jsx("span", { className: M(
                "truncate max-w-[200px] inline-block",
                f && "text-primary"
              ), children: c.label }),
              !d && /* @__PURE__ */ i.jsx("span", { className: M(
                "text-neutral-400 flex-shrink-0",
                r === "sm" && "scale-90",
                r === "lg" && "scale-110"
              ), children: o })
            ]
          },
          c.label
        );
      }) })
    }
  )
);
bp.displayName = "Breadcrumbs";
const Ri = (e) => {
  const t = {
    header: {
      primary: "bg-primary text-white",
      secondary: "bg-secondary text-white",
      warning: "bg-warning text-white",
      danger: "bg-danger text-white",
      ghost: "bg-gray-100 text-gray-700",
      success: "bg-success text-white"
    },
    row: {
      primary: "hover:bg-primary-50",
      secondary: "hover:bg-secondary-50",
      warning: "hover:bg-warning-50",
      danger: "hover:bg-danger-50",
      ghost: "hover:bg-gray-50",
      success: "hover:bg-success-50"
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
      primary: "bg-primary-50",
      secondary: "bg-secondary-50",
      warning: "bg-warning-50",
      danger: "bg-danger-50",
      ghost: "bg-gray-50",
      success: "bg-success-50"
    },
    hoverStripe: {
      primary: "group-hover:bg-primary-50",
      secondary: "group-hover:bg-secondary-50",
      warning: "group-hover:bg-warning-50",
      danger: "group-hover:bg-danger-50",
      ghost: "group-hover:bg-gray-50",
      success: "group-hover:bg-success-50"
    }
  };
  return {
    header: t.header[e],
    row: t.row[e],
    border: t.border[e],
    stripe: t.stripe[e],
    hoverStripe: t.hoverStripe[e]
  };
}, hp = ({
  schema: e,
  variant: t = "primary",
  showIndexSticky: r = !1,
  isMobile: n = !1
}) => {
  const o = [
    {
      name: "no",
      label: "No.",
      accessorKey: "no",
      type: "number",
      width: 80,
      sticky: r,
      stickyPosition: "left"
    },
    ...e
  ], s = Ri(t);
  return /* @__PURE__ */ i.jsx("div", { className: "bg-white rounded-md", children: /* @__PURE__ */ i.jsx("div", { className: "p-0 w-full overflow-auto rounded-t-md [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full", children: /* @__PURE__ */ i.jsxs("table", { className: "w-full border-spacing-0 border-separate min-w-full", children: [
    /* @__PURE__ */ i.jsx(
      "thead",
      {
        className: M(
          "border-2 sticky top-0 z-10 rounded-t-md",
          s.border
        ),
        children: /* @__PURE__ */ i.jsx("tr", { children: o.map((a, l) => {
          const c = () => {
            var d;
            if (n || !a.sticky || a.stickyPosition !== "left") return 0;
            let u = 0;
            for (let f = 0; f < l; f++) {
              const h = o[f];
              if (h.sticky && h.stickyPosition === "left") {
                const b = typeof h.width == "number" ? h.width : parseInt(((d = h.width) == null ? void 0 : d.toString()) || "0") || 0;
                u += b;
              }
            }
            return u;
          };
          return /* @__PURE__ */ i.jsx(
            "th",
            {
              className: M(
                "text-sm text-wrap border-y p-4 text-left",
                s.header,
                {
                  "rounded-tl-md": l === 0,
                  "rounded-tr-md": l === o.length - 1,
                  "sticky z-20": !n && a.sticky,
                  "left-0": !n && a.sticky && a.stickyPosition === "left",
                  "right-0": !n && a.sticky && a.stickyPosition === "right"
                }
              ),
              style: {
                width: typeof a.width == "number" ? `${a.width}px` : a.width,
                minWidth: typeof a.width == "number" ? `${a.width}px` : a.width,
                left: !n && a.sticky && a.stickyPosition === "left" ? `${c()}px` : void 0
              },
              children: a.label
            },
            l
          );
        }) })
      }
    ),
    /* @__PURE__ */ i.jsx("tbody", { children: [...Array(5)].map((a, l) => /* @__PURE__ */ i.jsx(
      "tr",
      {
        className: M("p-3", {
          [s.stripe]: l % 2 !== 0,
          "bg-white": l % 2 === 0
        }),
        children: o.map((c, u) => {
          const d = () => {
            var h;
            if (!c.sticky || c.stickyPosition !== "left") return 0;
            let f = 0;
            for (let b = 0; b < u; b++) {
              const w = o[b];
              if (w.sticky && w.stickyPosition === "left") {
                const v = typeof w.width == "number" ? w.width : parseInt(((h = w.width) == null ? void 0 : h.toString()) || "0") || 0;
                f += v;
              }
            }
            return f;
          };
          return /* @__PURE__ */ i.jsx(
            "td",
            {
              className: M(
                "text-left text-nowrap text-sm p-4",
                {
                  "sticky z-10": c.sticky,
                  "left-0": c.sticky && c.stickyPosition === "left",
                  "right-0": c.sticky && c.stickyPosition === "right",
                  // Ensure sticky columns have solid background that matches row
                  "bg-white": c.sticky && l % 2 === 0,
                  [s.stripe]: c.sticky && l % 2 !== 0,
                  [s.hoverStripe]: c.sticky
                }
              ),
              style: {
                width: typeof c.width == "number" ? `${c.width}px` : c.width,
                minWidth: typeof c.width == "number" ? `${c.width}px` : c.width,
                left: c.sticky && c.stickyPosition === "left" ? `${d()}px` : void 0
              },
              children: /* @__PURE__ */ i.jsx(ac, { className: "h-10 w-full rounded-md" })
            },
            `${l}-${u}`
          );
        })
      },
      l
    )) })
  ] }) }) });
}, Zp = ({
  schema: e,
  data: t,
  className: r,
  headerClassName: n,
  rowClassName: o,
  cellClassName: s,
  emptyState: a,
  isLoading: l,
  loadingState: c,
  showIndex: u = !1,
  showIndexSticky: d = !1,
  onPageChange: f,
  onPageSizeChange: h,
  onSortChange: b,
  onRowClick: w,
  showPagination: v = !1,
  variant: E = "primary",
  meta: j = {
    current_page: 1,
    total_page: 1,
    total_data: 0,
    limit_number: 10
  }
}) => {
  const [N, S] = te(() => {
    const O = e.find((p) => p.sortable && p.sort);
    return O ? [
      {
        id: O.accessorKey.toString(),
        desc: O.sort === "desc"
      }
    ] : [];
  }), [L, R] = te(!1);
  ue(() => {
    const O = () => R(window.innerWidth < 768);
    return O(), window.addEventListener("resize", O), () => window.removeEventListener("resize", O);
  }, []);
  const C = ie.useMemo(() => {
    const O = e.map((p) => ({
      accessorKey: p.accessorKey,
      header: p.label,
      enableSorting: !!p.sortable,
      cell: p.render ? ({ row: x }) => {
        var m;
        return (m = p.render) == null ? void 0 : m.call(p, x.original[p.accessorKey], x.original, x.index);
      } : ({ row: x }) => x.original[p.accessorKey] || "-",
      meta: {
        align: p.align || "left",
        width: p.width,
        sticky: p.sticky,
        stickyPosition: p.stickyPosition || "left"
      }
    }));
    return u ? [
      {
        accessorKey: "no",
        header: "No.",
        enableSorting: !1,
        cell: ({ row: p }) => (j.current_page - 1) * j.limit_number + p.index + 1,
        meta: {
          align: "left",
          width: 80,
          sticky: d,
          stickyPosition: "left"
        }
      },
      ...O
    ] : O;
  }, [e, u, d, j]), K = Ki({
    data: t,
    columns: C,
    state: {
      sorting: N
    },
    onSortingChange: (O) => {
      const p = typeof O == "function" ? O(N) : O;
      S(p), p.length > 0 ? b == null || b(p[0].desc ? "desc" : "asc", p[0].id) : b == null || b("", "");
    },
    getCoreRowModel: qi(),
    getSortedRowModel: Yi(),
    getPaginationRowModel: Ui(),
    manualPagination: !0,
    pageCount: j.total_page
  }), z = Ri(E);
  if (l)
    return c || /* @__PURE__ */ i.jsx(
      hp,
      {
        schema: e,
        variant: E,
        showIndexSticky: d,
        isMobile: L
      }
    );
  const I = (O, p, x) => {
    const m = O.target;
    m.tagName === "BUTTON" || m.tagName === "A" || m.tagName === "INPUT" || m.tagName === "SELECT" || m.closest("button") !== null || m.closest("a") !== null || m.closest("input") !== null || m.closest("select") !== null || w == null || w(p, x);
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "bg-white rounded-md", children: [
    /* @__PURE__ */ i.jsx("div", { className: "p-0 w-full overflow-auto rounded-t-md [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full", children: /* @__PURE__ */ i.jsxs(
      "table",
      {
        className: M(
          "w-full border-spacing-0 border-separate min-w-full",
          r
        ),
        children: [
          /* @__PURE__ */ i.jsx(
            "thead",
            {
              className: M(
                "border-2 sticky top-0 z-10 rounded-t-md",
                z.border
              ),
              children: K.getHeaderGroups().map((O) => /* @__PURE__ */ i.jsx("tr", { children: O.headers.map(
                (p, x) => {
                  const m = p.column.columnDef.meta, $ = () => {
                    var g;
                    if (L || !(m != null && m.sticky) || m.stickyPosition !== "left") return 0;
                    let A = 0;
                    for (let k = 0; k < x; k++) {
                      const T = O.headers[k].column.columnDef.meta;
                      if (T != null && T.sticky && T.stickyPosition === "left") {
                        const U = typeof T.width == "number" ? T.width : parseInt(((g = T.width) == null ? void 0 : g.toString()) || "0") || 0;
                        A += U;
                      }
                    }
                    return A;
                  };
                  return /* @__PURE__ */ i.jsx(
                    "th",
                    {
                      className: M(
                        "text-sm text-wrap border-y p-4",
                        z.header,
                        {
                          "cursor-pointer": p.column.getCanSort(),
                          "rounded-tl-md": x === 0,
                          "rounded-tr-md": x === O.headers.length - 1,
                          "text-left": (m == null ? void 0 : m.align) === "left",
                          "text-center": (m == null ? void 0 : m.align) === "center",
                          "text-right": (m == null ? void 0 : m.align) === "right",
                          "sticky z-20": !L && (m == null ? void 0 : m.sticky),
                          "left-0": !L && (m == null ? void 0 : m.sticky) && m.stickyPosition === "left",
                          "right-0": !L && (m == null ? void 0 : m.sticky) && m.stickyPosition === "right"
                        },
                        n
                      ),
                      style: {
                        width: typeof (m == null ? void 0 : m.width) == "number" ? `${m.width}px` : m == null ? void 0 : m.width,
                        minWidth: typeof (m == null ? void 0 : m.width) == "number" ? `${m.width}px` : m == null ? void 0 : m.width,
                        left: !L && (m != null && m.sticky) && m.stickyPosition === "left" ? `${$()}px` : void 0
                      },
                      onClick: p.column.getCanSort() ? p.column.getToggleSortingHandler() : void 0,
                      children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ i.jsx(
                          "span",
                          {
                            className: M({
                              "font-semibold": x === 0
                            }),
                            children: xo(
                              p.column.columnDef.header,
                              p.getContext()
                            )
                          }
                        ),
                        p.column.getCanSort() && /* @__PURE__ */ i.jsx(
                          de,
                          {
                            icon: p.column.getIsSorted() ? p.column.getIsSorted() === "desc" ? "mdi:keyboard-arrow-up" : "mdi:keyboard-arrow-down" : "mdi:unfold-more-horizontal",
                            className: M("h-4 w-4", {
                              "text-white": E !== "ghost",
                              "text-gray-700": E === "ghost"
                            })
                          }
                        )
                      ] })
                    },
                    p.id
                  );
                }
              ) }, O.id))
            }
          ),
          /* @__PURE__ */ i.jsx("tbody", { children: K.getRowModel().rows.length === 0 ? /* @__PURE__ */ i.jsx("tr", { children: /* @__PURE__ */ i.jsx(
            "td",
            {
              colSpan: K.getAllColumns().length,
              className: M(
                "text-center border h-full w-full rounded-b-md"
              ),
              children: a || /* @__PURE__ */ i.jsxs("div", { className: "flex mx-auto w-full text-center justify-center gap-3 items-center", children: [
                /* @__PURE__ */ i.jsx("p", { children: "Data Not Found" }),
                /* @__PURE__ */ i.jsx(de, { icon: "mdi:face-frown-open", size: 34 })
              ] })
            }
          ) }) : K.getRowModel().rows.map((O, p) => /* @__PURE__ */ i.jsx(
            "tr",
            {
              className: M(
                "p-3 group",
                z.row,
                {
                  [z.stripe]: p % 2 !== 0,
                  "bg-white": p % 2 === 0,
                  "cursor-pointer": w
                },
                o
              ),
              onClick: (x) => I(x, O.original, p),
              children: O.getVisibleCells().map((x) => {
                const m = x.column.columnDef.meta, $ = () => {
                  var P;
                  if (L || !(m != null && m.sticky) || m.stickyPosition !== "left") return 0;
                  let A = 0;
                  const g = K.getAllColumns(), k = g.findIndex((T) => T.id === x.column.id);
                  for (let T = 0; T < k; T++) {
                    const F = g[T].columnDef.meta;
                    if (F != null && F.sticky && F.stickyPosition === "left") {
                      const H = typeof F.width == "number" ? F.width : parseInt(((P = F.width) == null ? void 0 : P.toString()) || "0") || 0;
                      A += H;
                    }
                  }
                  return A;
                };
                return /* @__PURE__ */ i.jsx(
                  "td",
                  {
                    className: M(
                      "px-4 py-3 text-sm text-gray-900",
                      {
                        "text-left": (m == null ? void 0 : m.align) === "left",
                        "text-center": (m == null ? void 0 : m.align) === "center",
                        "text-right": (m == null ? void 0 : m.align) === "right",
                        "sticky z-10": !L && (m == null ? void 0 : m.sticky),
                        "left-0": !L && (m == null ? void 0 : m.sticky) && m.stickyPosition === "left",
                        "right-0": !L && (m == null ? void 0 : m.sticky) && m.stickyPosition === "right",
                        // Ensure sticky columns have solid background that matches row
                        "bg-white": !L && (m == null ? void 0 : m.sticky) && p % 2 === 0,
                        [z.stripe]: !L && (m == null ? void 0 : m.sticky) && p % 2 !== 0,
                        [z.hoverStripe]: !L && (m == null ? void 0 : m.sticky)
                      },
                      s
                    ),
                    style: {
                      width: typeof (m == null ? void 0 : m.width) == "number" ? `${m.width}px` : m == null ? void 0 : m.width,
                      minWidth: typeof (m == null ? void 0 : m.width) == "number" ? `${m.width}px` : m == null ? void 0 : m.width,
                      left: !L && (m != null && m.sticky) && m.stickyPosition === "left" ? `${$()}px` : void 0
                    },
                    children: xo(
                      x.column.columnDef.cell,
                      x.getContext()
                    )
                  },
                  x.id
                );
              })
            },
            O.id
          )) })
        ]
      }
    ) }),
    !!t.length && v && /* @__PURE__ */ i.jsx("div", { className: "p-4 bg-white rounded-b-md", children: /* @__PURE__ */ i.jsx(
      rc,
      {
        currentPage: j.current_page,
        totalPages: j.total_page,
        totalData: j.total_data,
        onPageChange: f || (() => {
        }),
        perPage: j.limit_number,
        onPerPageChange: h || (() => {
        }),
        perPageOptions: [5, 10, 20, 50, 100],
        siblingCount: 1
      }
    ) })
  ] });
}, vp = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}, Li = Ie(
  ({
    className: e,
    variant: t = "default",
    rounded: r = "lg",
    title: n,
    description: o,
    onClose: s,
    icon: a,
    showIcon: l = !0,
    showClose: c = !0,
    ...u
  }, d) => {
    const h = a || (l ? {
      default: "mdi:information",
      success: "mdi:check-circle",
      error: "mdi:alert-circle",
      warning: "mdi:alert",
      info: "mdi:information"
    }[t] : void 0), b = n || o;
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        ref: d,
        className: M(
          "flex",
          o ? "items-start gap-3 p-4" : "items-center gap-2 py-2.5 px-3",
          "border border-gray-200",
          vp[r],
          {
            "bg-white": t === "default",
            "bg-success-50": t === "success",
            "bg-danger-50": t === "error",
            "bg-warning-50": t === "warning",
            "bg-info-50": t === "info"
          },
          e
        ),
        ...u,
        children: [
          h && /* @__PURE__ */ i.jsx(
            de,
            {
              icon: h,
              className: M(
                "flex-shrink-0",
                o ? "h-5 w-5 mt-0.5" : "h-4 w-4",
                {
                  "text-gray": t === "default",
                  "text-success": t === "success",
                  "text-danger": t === "error",
                  "text-warning": t === "warning",
                  "text-info": t === "info"
                }
              )
            }
          ),
          /* @__PURE__ */ i.jsxs("div", { className: "flex-1", children: [
            n && /* @__PURE__ */ i.jsx(
              "h3",
              {
                className: M("text-sm font-medium leading-5", {
                  "text-gray-900": t === "default",
                  "text-success-900": t === "success",
                  "text-danger-900": t === "error",
                  "text-warning-900": t === "warning",
                  "text-info-900": t === "info"
                }),
                children: n
              }
            ),
            o && /* @__PURE__ */ i.jsx(
              "p",
              {
                className: M(n ? "mt-1" : "", "text-sm leading-5", {
                  "text-gray": t === "default",
                  "text-success-700": t === "success",
                  "text-danger-700": t === "error",
                  "text-warning-700": t === "warning",
                  "text-info-700": t === "info"
                }),
                children: o
              }
            ),
            !b && /* @__PURE__ */ i.jsx("span", { className: "text-sm leading-5", children: u.children })
          ] }),
          c && s && /* @__PURE__ */ i.jsx(
            Ke,
            {
              variant: "ghost",
              size: "sm",
              onClick: s,
              className: M(
                "flex-shrink-0 !p-1",
                o ? "ml-4" : "ml-2",
                {
                  "text-gray-400 hover:text-gray": t === "default",
                  "text-success-400 hover:text-success": t === "success",
                  "text-danger-400 hover:text-danger": t === "error",
                  "text-warning-400 hover:text-warning": t === "warning",
                  "text-info-400 hover:text-info": t === "info"
                }
              ),
              children: /* @__PURE__ */ i.jsx(de, { icon: "mdi:close", className: M(o ? "h-5 w-5" : "h-4 w-4") })
            }
          )
        ]
      }
    );
  }
);
Li.displayName = "Toast";
const Hn = Ts(void 0), xp = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, Jp = ({ children: e }) => {
  const [t, r] = te([]), n = pe((l) => {
    r((c) => c.filter((u) => u.id !== l));
  }, []), o = pe((l) => {
    const c = Math.random().toString(36).substr(2, 9), u = l.position || "top-right", d = l.duration || 5e3, f = {
      ...l,
      id: c,
      position: u
    };
    return r((h) => [...h, f]), d > 0 && setTimeout(() => {
      n(c);
    }, d), c;
  }, [n]), s = t.reduce((l, c) => (l[c.position] || (l[c.position] = []), l[c.position].push(c), l), {
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    "bottom-right": [],
    "top-center": [],
    "bottom-center": []
  }), a = Ge();
  return "body" in a ? /* @__PURE__ */ i.jsxs(Hn.Provider, { value: { showToast: o, removeToast: n }, children: [
    e,
    It(
      /* @__PURE__ */ i.jsx(i.Fragment, { children: Object.entries(s).map(([l, c]) => /* @__PURE__ */ i.jsx(
        "div",
        {
          className: M(
            "fixed z-[100] flex flex-col gap-2 min-w-[320px] max-w-[420px]",
            xp[l],
            l.includes("bottom") ? "flex-col-reverse" : "flex-col"
          ),
          children: c.map((u) => /* @__PURE__ */ i.jsx(
            Li,
            {
              ...u,
              onClose: () => n(u.id),
              className: "animate-slide-in"
            },
            u.id
          ))
        },
        l
      )) }),
      a.body
    )
  ] }) : /* @__PURE__ */ i.jsx(Hn.Provider, { value: { showToast: o, removeToast: n }, children: e });
}, Qp = () => {
  const e = mt(Hn);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, yp = ({
  label: e,
  value: t,
  icon: r,
  className: n
}) => /* @__PURE__ */ i.jsxs(Yn, { className: M(
  "flex items-center gap-4 rounded-lg w-full bg-white p-4 shadow-sm hover:bg-neutral-50 transition-shadow duration-200 justify-between",
  n
), children: [
  /* @__PURE__ */ i.jsxs("div", { children: [
    /* @__PURE__ */ i.jsx("p", { className: "text-sm font-medium text-gray", children: e }),
    /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-2xl font-semibold text-gray-900", children: t })
  ] }),
  r && /* @__PURE__ */ i.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50", children: /* @__PURE__ */ i.jsx(de, { icon: r, className: "h-6 w-6 text-primary-600" }) })
] }), wp = {
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
}, Ai = {
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
}, $p = {
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
}, ks = {
  ...wp,
  ...Ai
}, Ns = {
  image: "https://design-system-eaip.onrender.com/img/error.svg",
  message: "An unexpected error occurred. Our team is currently investigating the issue."
}, Es = (e) => typeof e == "object" && e !== null && ("code" in e || "message" in e), eg = ({
  error: e,
  reload: t,
  children: r,
  className: n = "",
  variant: o,
  customImage: s,
  customMessage: a
}) => {
  if (!e && !o)
    return r ? /* @__PURE__ */ i.jsx(i.Fragment, { children: r }) : null;
  const c = (() => {
    if (o) {
      const f = $p[o];
      return Ai[f];
    }
    return Es(e) && e.code && ks[e.code] ? ks[e.code] : Ns;
  })(), u = s || c.image, d = a || (Es(e) ? e.message : null) || c.message;
  return /* @__PURE__ */ i.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${n}`, children: [
    /* @__PURE__ */ i.jsx(
      "img",
      {
        src: u,
        alt: "Error illustration",
        className: "max-w-[300px] h-auto"
      }
    ),
    typeof d == "string" ? /* @__PURE__ */ i.jsx($r, { variant: "body1", className: "m-0", children: d }) : /* @__PURE__ */ i.jsx("div", { className: "m-0", children: d }),
    t && /* @__PURE__ */ i.jsx(
      Ke,
      {
        onClick: t,
        rounded: "full",
        variant: "primary",
        size: "md",
        children: "Try Again"
      }
    )
  ] });
}, kp = De(
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
), Np = Ie(
  ({
    className: e,
    variant: t = "default",
    size: r = "md",
    rounded: n = "md",
    error: o = !1,
    errorText: s,
    helperText: a,
    label: l,
    bottomLabel: c,
    required: u = !1,
    showSubmitButton: d = !1,
    submitButtonLabel: f = "Submit",
    submitButtonVariant: h = "primary",
    length: b = 6,
    numericOnly: w = !0,
    onComplete: v,
    onChange: E,
    onSubmit: j,
    value: N,
    defaultValue: S = "",
    disabled: L = !1,
    autoFocus: R = !1,
    ...C
  }, K) => {
    const [z, I] = te(S || ""), O = re([]);
    ue(() => {
      N !== void 0 && I(N);
    }, [N]);
    const p = N !== void 0, x = p ? N : z, m = (F) => {
      p || I(F), E == null || E(F), F.length === b && (v == null || v(F), d || j == null || j(F));
    }, $ = (F) => (H) => {
      O.current[F] = H;
    }, A = (F) => {
      F.target.select();
    }, g = (F, H) => {
      var _;
      const ne = F.target.value;
      let B = "";
      if (ne.length >= 1)
        B = ne.slice(-1);
      else if (ne.length === 0) {
        const X = x.split("");
        X[H] = "", m(X.join(""));
        return;
      }
      if (w && !/^\d$/.test(B))
        return;
      const W = x.split("");
      for (; W.length <= H; )
        W.push("");
      W[H] = B;
      const q = W.join("");
      m(q), H < b - 1 && B && ((_ = O.current[H + 1]) == null || _.focus());
    }, k = (F, H) => {
      var ne, B, W;
      if (F.key === "Backspace") {
        const q = x.split("");
        x[H] ? (F.preventDefault(), q[H] = "", m(q.join(""))) : H > 0 && (F.preventDefault(), q[H - 1] = "", m(q.join("")), (ne = O.current[H - 1]) == null || ne.focus());
      } else if (F.key === "Delete") {
        if (x[H]) {
          F.preventDefault();
          const q = x.split("");
          q[H] = "", m(q.join(""));
        }
      } else if (F.key === "ArrowLeft" && H > 0)
        F.preventDefault(), (B = O.current[H - 1]) == null || B.focus();
      else if (F.key === "ArrowRight" && H < b - 1)
        F.preventDefault(), (W = O.current[H + 1]) == null || W.focus();
      else if (!F.ctrlKey && !F.altKey && !F.metaKey && F.key.length === 1 && w && !/^\d$/.test(F.key)) {
        F.preventDefault();
        return;
      }
    }, P = (F) => {
      var q;
      F.preventDefault();
      const H = F.clipboardData.getData("text/plain").trim();
      if (w && !/^\d+$/.test(H))
        return;
      const B = H.slice(0, b).padEnd(x.length, "").slice(0, b);
      m(B);
      const W = B.length < b ? B.length : b - 1;
      (q = O.current[W]) == null || q.focus();
    }, T = () => {
      x.length === b && (j == null || j(x));
    }, U = x.split("").concat(Array(b - x.length).fill(""));
    return /* @__PURE__ */ i.jsxs("div", { ref: K, className: M("w-full", e), ...C, children: [
      l && /* @__PURE__ */ i.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
        l,
        u && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
        /* @__PURE__ */ i.jsx("div", { className: "flex items-center justify-center gap-2", children: Array.from({ length: b }).map((F, H) => /* @__PURE__ */ i.jsx(
          "input",
          {
            ref: $(H),
            type: w ? "tel" : "text",
            inputMode: w ? "numeric" : "text",
            maxLength: 1,
            value: U[H] || "",
            onChange: (ne) => g(ne, H),
            onKeyDown: (ne) => k(ne, H),
            onPaste: H === 0 ? P : void 0,
            onFocus: A,
            disabled: L,
            autoFocus: R && H === 0,
            className: M(
              kp({
                variant: o ? "error" : t,
                size: r,
                rounded: n
              })
            ),
            "aria-invalid": o
          },
          H
        )) }),
        o && s && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger self-start", children: s }),
        !o && a && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral self-start", children: a }),
        c && /* @__PURE__ */ i.jsx("p", { className: "text-sm text-neutral-600", children: c }),
        d && /* @__PURE__ */ i.jsx(
          Ke,
          {
            variant: h,
            disabled: x.length !== b || L,
            onClick: T,
            className: "mt-4",
            children: f
          }
        )
      ] })
    ] });
  }
);
Np.displayName = "InputOTP";
const js = {
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
}, tg = ({
  icon: e,
  className: t,
  color: r = "primary",
  value: n,
  maxValue: o = 99,
  children: s,
  ...a
}) => {
  const l = "top-0 right-0", c = typeof n == "number" && !isNaN(n);
  let u = "";
  c && (n > o ? u = `${o}+` : u = String(n));
  const d = c ? "px-2" : "", f = c ? "min-w-[20px]" : "w-2.5 h-2.5", h = c ? "h-5" : "h-2.5", b = typeof r == "string" && r in js ? js[r] : r;
  return /* @__PURE__ */ i.jsxs("div", { className: M("relative inline-block", t), children: [
    s || (e ? /* @__PURE__ */ i.jsx(de, { icon: e, color: b, size: 32, ...a }) : null),
    /* @__PURE__ */ i.jsx(
      "span",
      {
        className: M(
          "absolute flex items-center justify-center rounded-xl bg-[#FF4C4C] text-white text-[10px] font-semibold",
          l,
          d,
          f,
          h,
          !c && "p-0",
          !c && "rounded-full"
        ),
        style: {
          transform: "translate(50%,-50%)"
        },
        children: c ? u : ""
      }
    )
  ] });
}, Ep = {
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
}, jp = {
  "flight-light": "FLIGHT_LIGHT",
  "flight-dark": "FLIGHT_DARK",
  "tixia-circular": "TIXIA-CIRCULAR",
  "tixia-linear": "TIXIA-LINEAR"
}, Dr = (e, t) => e === void 0 ? { className: t } : typeof e == "number" ? {
  className: "",
  style: { width: `${e}px`, height: `${e}px` }
} : { className: e }, rg = ({
  variant: e,
  customImage: t,
  customMessage: r,
  width: n = "w-full",
  height: o = "h-full",
  widthImg: s = "w-auto",
  heightImg: a = "h-auto",
  className: l = ""
}) => {
  const c = jp[e], u = Ep[c], d = Dr(n, "w-full"), f = Dr(o, "h-full"), h = Dr(s, "w-auto"), b = Dr(a, "h-auto");
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${d.className} ${f.className} ${l}`,
      style: { ...d.style, ...f.style },
      children: [
        /* @__PURE__ */ i.jsx(
          "img",
          {
            src: t || u.image,
            alt: "Loading animation",
            className: `${h.className} ${b.className}`,
            style: { ...h.style, ...b.style }
          }
        ),
        r ? typeof r == "string" ? /* @__PURE__ */ i.jsx($r, { variant: "body1", className: "m-0", children: r }) : /* @__PURE__ */ i.jsx("div", { className: "m-0", children: r }) : /* @__PURE__ */ i.jsx($r, { variant: "body1", className: "m-0", children: u.message })
      ]
    }
  );
}, Pp = {
  PAGE_NOT_FOUND: {
    image: "https://design-system-eaip.onrender.com/img/page-not-found.svg",
    message: "The page you are looking for does not exist."
  },
  PAGE_NOT_FOUND_V2: {
    image: "https://design-system-eaip.onrender.com/img/page-not-found-v2.svg",
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
}, Tp = {
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
  "page-not-found-v2": "PAGE_NOT_FOUND_V2",
  "no-seat-available": "NO_SEAT_AVAILABLE",
  "change-price": "CHANGE_PRICE",
  "help-desk": "HELP_DESK"
}, ng = ({
  variant: e,
  customMessage: t,
  reload: r,
  reloadText: n = "Try Again",
  customImage: o,
  width: s,
  height: a,
  className: l = ""
}) => {
  const c = Tp[e], u = Pp[c];
  return /* @__PURE__ */ i.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${l}`, children: [
    /* @__PURE__ */ i.jsx(
      "img",
      {
        src: o || u.image,
        alt: "Negative case illustration",
        className: "max-w-[300px] h-auto",
        style: { width: s, height: a }
      }
    ),
    t ? typeof t == "string" ? /* @__PURE__ */ i.jsx($r, { variant: "body1", className: "m-0", children: t }) : /* @__PURE__ */ i.jsx("div", { className: "m-0", children: t }) : /* @__PURE__ */ i.jsx($r, { variant: "body1", className: "m-0", children: u.message }),
    r && /* @__PURE__ */ i.jsx(
      Ke,
      {
        onClick: r,
        rounded: "full",
        variant: "primary",
        size: "md",
        children: n
      }
    )
  ] });
}, og = ({
  widgets: e,
  className: t
}) => /* @__PURE__ */ i.jsx("div", { className: M("w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", t), children: e.map((r, n) => /* @__PURE__ */ i.jsx(yp, { ...r }, n)) });
export {
  Ip as Accordion,
  Cl as AutoComplete,
  Op as Avatar,
  Mp as Badge,
  tg as BadgeNotif,
  bp as Breadcrumbs,
  Ke as Button,
  Yn as Card,
  Ml as CheckBoxGroup,
  on as Checkbox,
  _p as Chip,
  Wl as DatePicker,
  Ul as Dialog,
  Xl as DialogActions,
  ql as DialogBody,
  Bs as DialogHeader,
  Yl as DialogTitle,
  Zl as Divider,
  eg as ErrorWrapper,
  Dp as FileUpload,
  de as Icon,
  Ds as Input,
  Np as InputOTP,
  rg as Loader,
  ng as NegativeCase,
  zp as Notification,
  rc as Pagination,
  Nn as PhoneInput,
  Up as PhoneInputDemo,
  Xp as Popover,
  kn as PrimitiveDatePicker,
  Nc as Progress,
  nc as Radio,
  sc as RadioGroup,
  Gs as Select,
  Ur as SelectItem,
  ac as Skeleton,
  Fp as Slider,
  Vp as StarRating,
  Bp as StatusIndicator,
  Gp as Stepper,
  Hp as Switch,
  Zp as Table,
  Wp as Tabs,
  $r as Text,
  gc as TimePicker,
  Li as Toast,
  Jp as ToastProvider,
  hc as Toggle,
  Kp as Tooltip,
  yp as WidgetCard,
  og as WidgetCardGroup,
  Il as buttonVariants,
  Ol as cardVariants,
  M as cn,
  kp as inputOTPVariants,
  mc as toggleVariants,
  Qp as useToast
};
