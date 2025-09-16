import * as vo from "react";
import ae, { useState as te, useEffect as ue, forwardRef as Re, useRef as re, useImperativeHandle as Wn, useLayoutEffect as Ps, useCallback as pe, Children as wr, isValidElement as xr, cloneElement as Kn, useContext as mt, useMemo as De, createContext as Ts } from "react";
import Hi, { createPortal as At, flushSync as Wi } from "react-dom";
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
  var e = ae, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, c, u) {
    var d, f = {}, h = null, g = null;
    u !== void 0 && (h = "" + u), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (g = c.ref);
    for (d in c) n.call(c, d) && !s.hasOwnProperty(d) && (f[d] = c[d]);
    if (l && l.defaultProps) for (d in c = l.defaultProps, c) f[d] === void 0 && (f[d] = c[d]);
    return { $$typeof: t, type: l, key: h, ref: g, props: f, _owner: o.current };
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
    var e = ae, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), x = Symbol.iterator, v = "@@iterator";
    function j(w) {
      if (w === null || typeof w != "object")
        return null;
      var G = x && w[x] || w[v];
      return typeof G == "function" ? G : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function N(w) {
      {
        for (var G = arguments.length, Z = new Array(G > 1 ? G - 1 : 0), ie = 1; ie < G; ie++)
          Z[ie - 1] = arguments[ie];
        T("error", w, Z);
      }
    }
    function T(w, G, Z) {
      {
        var ie = E.ReactDebugCurrentFrame, we = ie.getStackAddendum();
        we !== "" && (G += "%s", Z = Z.concat([we]));
        var ke = Z.map(function(he) {
          return String(he);
        });
        ke.unshift("Warning: " + G), Function.prototype.apply.call(console[w], console, ke);
      }
    }
    var R = !1, L = !1, S = !1, H = !1, _ = !1, M;
    M = Symbol.for("react.module.reference");
    function A(w) {
      return !!(typeof w == "string" || typeof w == "function" || w === n || w === s || _ || w === o || w === u || w === d || H || w === g || R || L || S || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === f || w.$$typeof === a || w.$$typeof === l || w.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      w.$$typeof === M || w.getModuleId !== void 0));
    }
    function p(w, G, Z) {
      var ie = w.displayName;
      if (ie)
        return ie;
      var we = G.displayName || G.name || "";
      return we !== "" ? Z + "(" + we + ")" : Z;
    }
    function y(w) {
      return w.displayName || "Context";
    }
    function b(w) {
      if (w == null)
        return null;
      if (typeof w.tag == "number" && N("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof w == "function")
        return w.displayName || w.name || null;
      if (typeof w == "string")
        return w;
      switch (w) {
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
      if (typeof w == "object")
        switch (w.$$typeof) {
          case l:
            var G = w;
            return y(G) + ".Consumer";
          case a:
            var Z = w;
            return y(Z._context) + ".Provider";
          case c:
            return p(w, w.render, "ForwardRef");
          case f:
            var ie = w.displayName || null;
            return ie !== null ? ie : b(w.type) || "Memo";
          case h: {
            var we = w, ke = we._payload, he = we._init;
            try {
              return b(he(ke));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, I = 0, m, k, P, C, U, F, W;
    function ne() {
    }
    ne.__reactDisabledLog = !0;
    function B() {
      {
        if (I === 0) {
          m = console.log, k = console.info, P = console.warn, C = console.error, U = console.group, F = console.groupCollapsed, W = console.groupEnd;
          var w = {
            configurable: !0,
            enumerable: !0,
            value: ne,
            writable: !0
          };
          Object.defineProperties(console, {
            info: w,
            log: w,
            warn: w,
            error: w,
            group: w,
            groupCollapsed: w,
            groupEnd: w
          });
        }
        I++;
      }
    }
    function K() {
      {
        if (I--, I === 0) {
          var w = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, w, {
              value: m
            }),
            info: $({}, w, {
              value: k
            }),
            warn: $({}, w, {
              value: P
            }),
            error: $({}, w, {
              value: C
            }),
            group: $({}, w, {
              value: U
            }),
            groupCollapsed: $({}, w, {
              value: F
            }),
            groupEnd: $({}, w, {
              value: W
            })
          });
        }
        I < 0 && N("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = E.ReactCurrentDispatcher, D;
    function X(w, G, Z) {
      {
        if (D === void 0)
          try {
            throw Error();
          } catch (we) {
            var ie = we.stack.trim().match(/\n( *(at )?)/);
            D = ie && ie[1] || "";
          }
        return `
` + D + w;
      }
    }
    var xe = !1, fe;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new Ue();
    }
    function He(w, G) {
      if (!w || xe)
        return "";
      {
        var Z = fe.get(w);
        if (Z !== void 0)
          return Z;
      }
      var ie;
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
              ie = Xe;
            }
            Reflect.construct(w, [], he);
          } else {
            try {
              he.call();
            } catch (Xe) {
              ie = Xe;
            }
            w.call(he.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Xe) {
            ie = Xe;
          }
          w();
        }
      } catch (Xe) {
        if (Xe && ie && typeof Xe.stack == "string") {
          for (var ge = Xe.stack.split(`
`), qe = ie.stack.split(`
`), Le = ge.length - 1, Oe = qe.length - 1; Le >= 1 && Oe >= 0 && ge[Le] !== qe[Oe]; )
            Oe--;
          for (; Le >= 1 && Oe >= 0; Le--, Oe--)
            if (ge[Le] !== qe[Oe]) {
              if (Le !== 1 || Oe !== 1)
                do
                  if (Le--, Oe--, Oe < 0 || ge[Le] !== qe[Oe]) {
                    var rt = `
` + ge[Le].replace(" at new ", " at ");
                    return w.displayName && rt.includes("<anonymous>") && (rt = rt.replace("<anonymous>", w.displayName)), typeof w == "function" && fe.set(w, rt), rt;
                  }
                while (Le >= 1 && Oe >= 0);
              break;
            }
        }
      } finally {
        xe = !1, q.current = ke, K(), Error.prepareStackTrace = we;
      }
      var Kt = w ? w.displayName || w.name : "", _t = Kt ? X(Kt) : "";
      return typeof w == "function" && fe.set(w, _t), _t;
    }
    function Se(w, G, Z) {
      return He(w, !1);
    }
    function Ye(w) {
      var G = w.prototype;
      return !!(G && G.isReactComponent);
    }
    function Ee(w, G, Z) {
      if (w == null)
        return "";
      if (typeof w == "function")
        return He(w, Ye(w));
      if (typeof w == "string")
        return X(w);
      switch (w) {
        case u:
          return X("Suspense");
        case d:
          return X("SuspenseList");
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case c:
            return Se(w.render);
          case f:
            return Ee(w.type, G, Z);
          case h: {
            var ie = w, we = ie._payload, ke = ie._init;
            try {
              return Ee(ke(we), G, Z);
            } catch {
            }
          }
        }
      return "";
    }
    var et = Object.prototype.hasOwnProperty, tt = {}, We = E.ReactDebugCurrentFrame;
    function ze(w) {
      if (w) {
        var G = w._owner, Z = Ee(w.type, w._source, G ? G.type : null);
        We.setExtraStackFrame(Z);
      } else
        We.setExtraStackFrame(null);
    }
    function dt(w, G, Z, ie, we) {
      {
        var ke = Function.call.bind(et);
        for (var he in w)
          if (ke(w, he)) {
            var ge = void 0;
            try {
              if (typeof w[he] != "function") {
                var qe = Error((ie || "React class") + ": " + Z + " type `" + he + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof w[he] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw qe.name = "Invariant Violation", qe;
              }
              ge = w[he](G, he, ie, Z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Le) {
              ge = Le;
            }
            ge && !(ge instanceof Error) && (ze(we), N("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ie || "React class", Z, he, typeof ge), ze(null)), ge instanceof Error && !(ge.message in tt) && (tt[ge.message] = !0, ze(we), N("Failed %s type: %s", Z, ge.message), ze(null));
          }
      }
    }
    var ut = Array.isArray;
    function Fe(w) {
      return ut(w);
    }
    function Nt(w) {
      {
        var G = typeof Symbol == "function" && Symbol.toStringTag, Z = G && w[Symbol.toStringTag] || w.constructor.name || "Object";
        return Z;
      }
    }
    function bt(w) {
      try {
        return V(w), !1;
      } catch {
        return !0;
      }
    }
    function V(w) {
      return "" + w;
    }
    function ee(w) {
      if (bt(w))
        return N("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Nt(w)), V(w);
    }
    var z = E.ReactCurrentOwner, oe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Y, ve;
    function le(w) {
      if (et.call(w, "ref")) {
        var G = Object.getOwnPropertyDescriptor(w, "ref").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return w.ref !== void 0;
    }
    function je(w) {
      if (et.call(w, "key")) {
        var G = Object.getOwnPropertyDescriptor(w, "key").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return w.key !== void 0;
    }
    function ct(w, G) {
      typeof w.ref == "string" && z.current;
    }
    function Ot(w, G) {
      {
        var Z = function() {
          Y || (Y = !0, N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        Z.isReactWarning = !0, Object.defineProperty(w, "key", {
          get: Z,
          configurable: !0
        });
      }
    }
    function Mt(w, G) {
      {
        var Z = function() {
          ve || (ve = !0, N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        Z.isReactWarning = !0, Object.defineProperty(w, "ref", {
          get: Z,
          configurable: !0
        });
      }
    }
    var ht = function(w, G, Z, ie, we, ke, he) {
      var ge = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: w,
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
        value: ie
      }), Object.defineProperty(ge, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: we
      }), Object.freeze && (Object.freeze(ge.props), Object.freeze(ge)), ge;
    };
    function jr(w, G, Z, ie, we) {
      {
        var ke, he = {}, ge = null, qe = null;
        Z !== void 0 && (ee(Z), ge = "" + Z), je(G) && (ee(G.key), ge = "" + G.key), le(G) && (qe = G.ref, ct(G, we));
        for (ke in G)
          et.call(G, ke) && !oe.hasOwnProperty(ke) && (he[ke] = G[ke]);
        if (w && w.defaultProps) {
          var Le = w.defaultProps;
          for (ke in Le)
            he[ke] === void 0 && (he[ke] = Le[ke]);
        }
        if (ge || qe) {
          var Oe = typeof w == "function" ? w.displayName || w.name || "Unknown" : w;
          ge && Ot(he, Oe), qe && Mt(he, Oe);
        }
        return ht(w, ge, qe, we, ie, z.current, he);
      }
    }
    var ir = E.ReactCurrentOwner, Et = E.ReactDebugCurrentFrame;
    function Wt(w) {
      if (w) {
        var G = w._owner, Z = Ee(w.type, w._source, G ? G.type : null);
        Et.setExtraStackFrame(Z);
      } else
        Et.setExtraStackFrame(null);
    }
    var Qr;
    Qr = !1;
    function en(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function fo() {
      {
        if (ir.current) {
          var w = b(ir.current.type);
          if (w)
            return `

Check the render method of \`` + w + "`.";
        }
        return "";
      }
    }
    function Ai(w) {
      return "";
    }
    var po = {};
    function Oi(w) {
      {
        var G = fo();
        if (!G) {
          var Z = typeof w == "string" ? w : w.displayName || w.name;
          Z && (G = `

Check the top-level render call using <` + Z + ">.");
        }
        return G;
      }
    }
    function go(w, G) {
      {
        if (!w._store || w._store.validated || w.key != null)
          return;
        w._store.validated = !0;
        var Z = Oi(G);
        if (po[Z])
          return;
        po[Z] = !0;
        var ie = "";
        w && w._owner && w._owner !== ir.current && (ie = " It was passed a child from " + b(w._owner.type) + "."), Wt(w), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Z, ie), Wt(null);
      }
    }
    function mo(w, G) {
      {
        if (typeof w != "object")
          return;
        if (Fe(w))
          for (var Z = 0; Z < w.length; Z++) {
            var ie = w[Z];
            en(ie) && go(ie, G);
          }
        else if (en(w))
          w._store && (w._store.validated = !0);
        else if (w) {
          var we = j(w);
          if (typeof we == "function" && we !== w.entries)
            for (var ke = we.call(w), he; !(he = ke.next()).done; )
              en(he.value) && go(he.value, G);
        }
      }
    }
    function Mi(w) {
      {
        var G = w.type;
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
          var ie = b(G);
          dt(Z, w.props, "prop", ie, w);
        } else if (G.PropTypes !== void 0 && !Qr) {
          Qr = !0;
          var we = b(G);
          N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", we || "Unknown");
        }
        typeof G.getDefaultProps == "function" && !G.getDefaultProps.isReactClassApproved && N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _i(w) {
      {
        for (var G = Object.keys(w.props), Z = 0; Z < G.length; Z++) {
          var ie = G[Z];
          if (ie !== "children" && ie !== "key") {
            Wt(w), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ie), Wt(null);
            break;
          }
        }
        w.ref !== null && (Wt(w), N("Invalid attribute `ref` supplied to `React.Fragment`."), Wt(null));
      }
    }
    var bo = {};
    function ho(w, G, Z, ie, we, ke) {
      {
        var he = A(w);
        if (!he) {
          var ge = "";
          (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (ge += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var qe = Ai();
          qe ? ge += qe : ge += fo();
          var Le;
          w === null ? Le = "null" : Fe(w) ? Le = "array" : w !== void 0 && w.$$typeof === t ? (Le = "<" + (b(w.type) || "Unknown") + " />", ge = " Did you accidentally export a JSX literal instead of a component?") : Le = typeof w, N("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Le, ge);
        }
        var Oe = jr(w, G, Z, we, ke);
        if (Oe == null)
          return Oe;
        if (he) {
          var rt = G.children;
          if (rt !== void 0)
            if (ie)
              if (Fe(rt)) {
                for (var Kt = 0; Kt < rt.length; Kt++)
                  mo(rt[Kt], w);
                Object.freeze && Object.freeze(rt);
              } else
                N("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              mo(rt, w);
        }
        if (et.call(G, "key")) {
          var _t = b(w), Xe = Object.keys(G).filter(function(Gi) {
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
        return w === n ? _i(Oe) : Mi(Oe), Oe;
      }
    }
    function Di(w, G, Z) {
      return ho(w, G, Z, !0);
    }
    function zi(w, G, Z) {
      return ho(w, G, Z, !1);
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
      return l[0] === "" && l.length !== 1 && l.shift(), Is(l, t) || Qi(a);
    },
    getConflictingClassGroupIds: (a, l) => {
      const c = r[a] || [];
      return l && n[a] ? [...c, ...n[a]] : c;
    }
  };
}, Is = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? Is(e.slice(1), n) : void 0;
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
}, As = "!", ol = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, o = t[0], s = t.length, a = (l) => {
    const c = [];
    let u = 0, d = 0, f;
    for (let j = 0; j < l.length; j++) {
      let E = l[j];
      if (u === 0) {
        if (E === o && (n || l.slice(j, j + s) === t)) {
          c.push(l.slice(d, j)), d = j + s;
          continue;
        }
        if (E === "/") {
          f = j;
          continue;
        }
      }
      E === "[" ? u++ : E === "]" && u--;
    }
    const h = c.length === 0 ? l : l.substring(d), g = h.startsWith(As), x = g ? h.substring(1) : h, v = f && f > d ? f - d : void 0;
    return {
      modifiers: c,
      hasImportantModifier: g,
      baseClassName: x,
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
      maybePostfixModifierPosition: g
    } = r(u);
    let x = !!g, v = n(x ? h.substring(0, g) : h);
    if (!v) {
      if (!x) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (v = n(h), !v) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      x = !1;
    }
    const j = sl(d).join(":"), E = f ? j + As : j, N = E + v;
    if (s.includes(N))
      continue;
    s.push(N);
    const T = o(v, x);
    for (let R = 0; R < T.length; ++R) {
      const L = T[R];
      s.push(E + L);
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
  const e = Te("colors"), t = Te("spacing"), r = Te("blur"), n = Te("brightness"), o = Te("borderColor"), s = Te("borderRadius"), a = Te("borderSpacing"), l = Te("borderWidth"), c = Te("contrast"), u = Te("grayscale"), d = Te("hueRotate"), f = Te("invert"), h = Te("gap"), g = Te("gradientColorStops"), x = Te("gradientColorStopPositions"), v = Te("inset"), j = Te("margin"), E = Te("opacity"), N = Te("padding"), T = Te("saturate"), R = Te("scale"), L = Te("sepia"), S = Te("skew"), H = Te("space"), _ = Te("translate"), M = () => ["auto", "contain", "none"], A = () => ["auto", "hidden", "clip", "visible", "scroll"], p = () => ["auto", ce, t], y = () => [ce, t], b = () => ["", vt, jt], $ = () => ["auto", Jt, ce], I = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], m = () => ["solid", "dashed", "dotted", "double", "none"], k = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], C = () => ["", "0", ce], U = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], F = () => [Jt, ce];
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
      borderSpacing: y(),
      borderWidth: b(),
      contrast: F(),
      grayscale: C(),
      hueRotate: F(),
      invert: C(),
      gap: y(),
      gradientColorStops: [e],
      gradientColorStopPositions: [vl, jt],
      inset: p(),
      margin: p(),
      opacity: F(),
      padding: y(),
      saturate: F(),
      scale: F(),
      sepia: C(),
      skew: F(),
      space: y(),
      translate: y()
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
        object: [...I(), ce]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: A()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": A()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": A()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: M()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": M()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": M()
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
        grow: C()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: C()
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
        m: [j]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [j]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [j]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [j]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [j]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [j]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [j]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [j]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [j]
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
        "placeholder-opacity": [E]
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
        "text-opacity": [E]
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
        decoration: [...m(), "wavy"]
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
        indent: y()
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
        "bg-opacity": [E]
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
        bg: [...I(), wl]
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
        "border-opacity": [E]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...m(), "hidden"]
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
        "divide-opacity": [E]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: m()
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
        outline: ["", ...m()]
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
        ring: b()
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
        "ring-opacity": [E]
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
        opacity: [E]
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
        saturate: [T]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [L]
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
        "backdrop-opacity": [E]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [T]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [L]
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
        scale: [R]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [R]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [R]
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
        "translate-x": [_]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [_]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [S]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [S]
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
        "scroll-m": y()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": y()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": y()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": y()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": y()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": y()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": y()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": y()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": y()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": y()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": y()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": y()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": y()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": y()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": y()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": y()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": y()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": y()
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
function O(...e) {
  return gt(be(e));
}
const No = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Eo = be, _e = (e, t) => (r) => {
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
    let { class: f, className: h, ...g } = d;
    return Object.entries(g).every((x) => {
      let [v, j] = x;
      return Array.isArray(j) ? j.includes({
        ...s,
        ...l
      }[v]) : {
        ...s,
        ...l
      }[v] === j;
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
  const [d, f] = te(null), [h, g] = te(!0), [x, v] = te(null);
  return ue(() => {
    let j = !0;
    return (async () => {
      try {
        const { Icon: N } = await import("./iconify-Dqt3MVen.mjs");
        j && (f(() => N), g(!1));
      } catch (N) {
        console.error("Failed to load icon:", N), j && (v(N), g(!1));
      }
    })(), () => {
      j = !1;
    };
  }, []), h ? /* @__PURE__ */ i.jsx("span", { style: { width: r, height: r } }) : x || !d ? null : /* @__PURE__ */ i.jsx(
    d,
    {
      icon: e,
      className: O(
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
}, Sl = _e(
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
), Ds = Re(
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
    onRightIconClick: g,
    id: x,
    ...v
  }, j) => {
    const E = x || ae.useId(), N = `${E}-helper`, T = `${E}-error`, R = /* @__PURE__ */ i.jsxs("div", { className: O("relative", !d && "inline-block"), children: [
      f && /* @__PURE__ */ i.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ i.jsx(de, { icon: f, className: "w-4 h-4" }) }),
      /* @__PURE__ */ i.jsx(
        "input",
        {
          id: E,
          type: "text",
          ref: j,
          className: O(
            Sl({ variant: o ? "error" : t, size: r, rounded: n, fullWidth: d }),
            f && "pl-10",
            h && "pr-10",
            e
          ),
          "aria-describedby": o ? T : a ? N : void 0,
          "aria-invalid": o,
          "aria-required": c,
          ...v
        }
      ),
      h && /* @__PURE__ */ i.jsx(
        "div",
        {
          className: O(
            "absolute right-3 top-1/2 -translate-y-1/2 text-neutral",
            g && "cursor-pointer hover:text-primary-600"
          ),
          onClick: g,
          role: g ? "button" : void 0,
          tabIndex: g ? 0 : void 0,
          children: /* @__PURE__ */ i.jsx(de, { icon: h, className: "w-4 h-4" })
        }
      )
    ] }), L = /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      o && s && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger", id: T, children: s }),
      !o && a && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral", id: N, children: a })
    ] });
    return u === "left" ? /* @__PURE__ */ i.jsx("div", { className: O(d ? "w-full" : "inline-block", e), children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-start gap-4", children: [
      l && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: E,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            l,
            c && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: O("flex-1", !d && "inline-block"), children: [
        R,
        L
      ] })
    ] }) }) : /* @__PURE__ */ i.jsxs("div", { className: O(d ? "w-full" : "inline-block", e), children: [
      l && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: E,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            l,
            c && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      R,
      L
    ] });
  }
);
Ds.displayName = "Input";
const Ur = ae.forwardRef(
  ({ className: e, children: t, selected: r, disabled: n, ...o }, s) => /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: s,
      className: O(
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
}, nn = "autocomplete-dropdown-opened", Cl = Re(
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
    helperText: g,
    label: x,
    required: v = !1,
    labelPlacement: j = "top",
    fullWidth: E = !1,
    value: N,
    onChange: T,
    onFocus: R,
    onBlur: L,
    showClear: S = !1,
    onClear: H,
    searchType: _ = "include",
    initialItemsToShow: M,
    itemsToLoad: A = 10,
    maxDropdownHeight: p = 300,
    noOptionsMessage: y = "No options found",
    scrollMoreMessage: b = "",
    allOptionsShownMessage: $ = "",
    ...I
  }, m) => {
    const [k, P] = te(!1), [C, U] = te(N || ""), [F, W] = te(M || 0), ne = re(null), B = re(null), K = re(null), q = re(null), D = n !== void 0, xe = `autocomplete-${ae.useId().replace(/:/g, "")}`, fe = () => {
      if (!k || !B.current || !K.current) return;
      const { bottom: V, top: ee, left: z, width: oe } = B.current.getBoundingClientRect(), Y = K.current, ve = it(), le = ve.innerHeight - V, je = ee, ct = Math.min(p, 300), Ot = le < ct, Mt = je > le, ht = Ot && Mt;
      Object.assign(Y.style, {
        position: "fixed",
        left: `${z}px`,
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
      const V = it(), ee = Ge(), z = () => {
        k && fe();
      }, oe = () => {
        k && fe();
      }, Y = (le) => {
        le.detail.id !== xe && P(!1);
      }, ve = (le) => {
        const je = le.target;
        ne.current && !ne.current.contains(je) && K.current && !K.current.contains(je) && P(!1);
      };
      return k && (fe(), V.addEventListener("scroll", z, !0), V.addEventListener("resize", oe)), ee.addEventListener(nn, Y), ee.addEventListener("click", ve), () => {
        V.removeEventListener("scroll", z, !0), V.removeEventListener("resize", oe), ee.removeEventListener(nn, Y), ee.removeEventListener("click", ve);
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
      const z = t.some(({ label: oe }) => {
        const Y = ee.toLowerCase().trim(), ve = oe.toLowerCase();
        return _ === "startsWith" ? ve.startsWith(Y) : ve.includes(Y);
      });
      P(z), T == null || T(V);
    }, He = (V) => {
      V.stopPropagation(), U(""), H == null || H();
      const ee = new Event("change");
      ee.target = { value: "" }, T == null || T(ee);
    }, Se = (V) => {
      var Y;
      if (!V) return;
      const { value: ee, label: z } = V;
      U(z), P(!1), r == null || r(ee);
      const oe = new CustomEvent("autocomplete-select", {
        detail: { selectedOption: V }
      });
      (Y = B.current) == null || Y.dispatchEvent(oe);
    }, Ye = (V) => {
      L == null || L(V);
    }, Ee = t.filter(({ label: V }) => {
      const ee = C.toLowerCase().trim(), z = V.toLowerCase();
      return _ === "startsWith" ? z.startsWith(ee) : z.includes(ee);
    }), et = (V) => {
      D || (Ge().dispatchEvent(
        new CustomEvent(nn, {
          detail: { id: xe }
        })
      ), Ee.length > 0 && P(!0)), R == null || R(V);
    }, tt = () => {
      if (!q.current || M === void 0 || M <= 0) return;
      const { scrollTop: V, scrollHeight: ee, clientHeight: z } = q.current;
      V + z >= ee - 10 && W((Y) => Math.min(Y + A, Ee.length));
    };
    ue(() => {
      M !== void 0 && M > 0 && W(M);
    }, [C, M]);
    const We = M !== void 0 && M > 0 ? Ee.slice(0, F) : Ee, ze = (V, ee) => V ? V.replace(/\{(\w+)\}/g, (z, oe) => {
      var Y;
      return ((Y = ee[oe]) == null ? void 0 : Y.toString()) || z;
    }) : "", dt = D ? n : k, ut = S && C && !I.disabled && !I.readOnly, Fe = ut ? "mdi:close" : d, Nt = (V) => {
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
          ref: K,
          className: "fixed z-[9999] min-w-[8rem] rounded-md border border-neutral-200 bg-white py-1 shadow-lg overflow-hidden",
          style: { maxHeight: `${p}px` },
          onClick: (z) => z.stopPropagation(),
          children: /* @__PURE__ */ i.jsx(
            "div",
            {
              ref: q,
              className: "overflow-auto",
              style: { maxHeight: `${p}px` },
              onScroll: tt,
              children: o ? /* @__PURE__ */ i.jsx("div", { className: "flex items-center justify-center py-2", children: /* @__PURE__ */ i.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" }) }) : We.length > 0 ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                We.map((z) => /* @__PURE__ */ i.jsx(
                  Ur,
                  {
                    value: z.value,
                    selected: z.label === C,
                    onClick: () => Se(z),
                    children: s ? s(z) : z.label
                  },
                  z.value
                )),
                M !== void 0 && M > 0 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                  F < Ee.length && b && /* @__PURE__ */ i.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500 text-center", children: ze(b, {
                    current: F,
                    total: Ee.length
                  }) }),
                  F >= Ee.length && Ee.length > 0 && $ && /* @__PURE__ */ i.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500 text-center", children: ze($, {
                    total: Ee.length
                  }) })
                ] })
              ] }) : /* @__PURE__ */ i.jsx("div", { className: "px-2 py-2 text-sm text-neutral", children: y })
            }
          )
        }
      );
      return At(ee, V.body);
    };
    return /* @__PURE__ */ i.jsxs("div", { ref: ne, className: O("relative", E ? "w-full" : "inline-block"), children: [
      /* @__PURE__ */ i.jsx("div", { ref: B, className: O(!E && "inline-block"), children: /* @__PURE__ */ i.jsx(
        Ds,
        {
          ref: m,
          value: C,
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
          helperText: g,
          label: x,
          required: v,
          labelPlacement: j,
          fullWidth: E,
          className: e,
          ...I,
          onClick: ut ? He : I.onClick
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
}, Il = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full"
}, Mp = ({
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
  const [h, g] = te(r), x = n !== void 0 ? n : h, v = n !== void 0, j = (N) => {
    let T;
    t ? T = x.includes(N) ? x.filter((R) => R !== N) : [...x, N] : T = x.includes(N) ? [] : [N], v ? o == null || o(T) : g(T);
  }, E = Rl[u];
  return /* @__PURE__ */ i.jsx("div", { className: be("w-full space-y-2", l), children: e.map((N) => {
    const T = x.includes(N.id), R = !!N.disabled;
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: be(
          "border overflow-hidden",
          "bg-white",
          "border-gray-200",
          Ll[d],
          Il[f],
          "transition-shadow duration-200"
        ),
        children: [
          /* @__PURE__ */ i.jsxs(
            "button",
            {
              onClick: () => !R && j(N.id),
              disabled: R,
              className: be(
                "w-full flex items-center justify-between p-4",
                "text-left transition-colors",
                E.hover,
                T && E.active,
                E.text,
                R && "opacity-50 cursor-not-allowed"
              ),
              children: [
                a === "left" && /* @__PURE__ */ i.jsx(
                  "div",
                  {
                    className: be(
                      "mr-3 transition-transform duration-200",
                      T && "rotate-180"
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
                      T && "rotate-180"
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
                T ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
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
}, _p = ({
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
}, Dp = ({
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
}, Al = _e(
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
), Ke = Re(
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
    const g = c || !!(a || l) && !u;
    return /* @__PURE__ */ i.jsxs(
      "button",
      {
        className: O(
          Al({
            variant: t,
            size: r,
            rounded: g ? "full" : n,
            fullWidth: o,
            isIconOnly: g,
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
const Ol = _e(
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
), Yn = Re(
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
      className: O(Ol({ variant: t, padding: r, shadow: n, rounded: o, className: e })),
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
  }, f = t ? "border-danger-600 hover:border-danger-700" : "", g = gt(
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
  ), x = gt(
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
          className: g,
          disabled: r,
          ref: (v) => {
            v && (v.indeterminate = n);
          },
          ...c
        }
      ),
      e && /* @__PURE__ */ i.jsx("label", { className: x, children: e })
    ] }),
    t && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-sm text-danger-600", children: t })
  ] });
}, sn = _e(
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
), Ml = Re(
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
    fullWidth: g = !1,
    disabled: x = !1,
    variant: v = "square",
    color: j = "primary",
    checkboxSize: E = "sm",
    showSelectAll: N = !1,
    selectAllText: T = "Select All",
    indeterminateSelectAll: R = !0,
    gap: L,
    selectAllGap: S,
    id: H,
    ..._
  }, M) => {
    const A = H || ae.useId(), p = `${A}-helper`, y = `${A}-error`, b = `${A}-group`, [$, I] = ae.useState(n), m = r !== void 0 ? r : $, k = (D, X) => {
      const xe = X ? [...m, D] : m.filter((fe) => fe !== D);
      r === void 0 && I(xe), o == null || o(xe);
    }, P = (D) => {
      const X = D ? t.map((xe) => xe.value) : [];
      r === void 0 && I(X), o == null || o(X);
    }, C = t.length > 0 && m.length === t.length, U = m.length > 0 && m.length < t.length, F = R && U, W = (D) => D === "none" ? "gap-0" : D === "xs" ? "gap-1" : D === "sm" ? "gap-2" : D === "md" ? "gap-3" : D === "lg" ? "gap-4" : D === "xl" ? "gap-6" : null, ne = W(L), B = W(S), K = /* @__PURE__ */ i.jsx("div", { className: O("relative", !g && "inline-block"), children: /* @__PURE__ */ i.jsxs(
      "fieldset",
      {
        ref: M,
        id: b,
        className: O(
          sn({ layout: s, size: a }),
          ne,
          e
        ),
        "aria-describedby": l ? y : u ? p : void 0,
        "aria-invalid": l,
        "aria-required": f,
        ..._,
        children: [
          N && t.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: O(
            "flex flex-col",
            B || ne || sn({ layout: "vertical", size: a })
          ), children: [
            /* @__PURE__ */ i.jsx(
              on,
              {
                label: T,
                checked: C,
                indeterminate: F,
                onChange: (D) => P(D.target.checked),
                disabled: x,
                variant: v,
                color: l ? "error" : j,
                variantSize: E,
                error: l ? " " : void 0
              }
            ),
            /* @__PURE__ */ i.jsx("div", { className: O(
              "flex",
              s === "vertical" && "flex-col",
              s === "horizontal" && "flex-row flex-wrap",
              s === "grid" && "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
              ne || sn({ layout: s, size: a })
            ), children: t.map((D) => /* @__PURE__ */ i.jsx(
              on,
              {
                label: D.label,
                checked: m.includes(D.value),
                onChange: (X) => k(D.value, X.target.checked),
                disabled: x || D.disabled,
                indeterminate: D.indeterminate,
                variant: v,
                color: l ? "error" : j,
                variantSize: E,
                error: l ? " " : void 0
              },
              D.value
            )) })
          ] }),
          !N && /* @__PURE__ */ i.jsx(i.Fragment, { children: t.map((D) => /* @__PURE__ */ i.jsx(
            on,
            {
              label: D.label,
              checked: m.includes(D.value),
              onChange: (X) => k(D.value, X.target.checked),
              disabled: x || D.disabled,
              indeterminate: D.indeterminate,
              variant: v,
              color: l ? "error" : j,
              variantSize: E,
              error: l ? " " : void 0
            },
            D.value
          )) })
        ]
      }
    ) }), q = /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      l && c && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger", id: y, children: c }),
      !l && u && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral", id: p, children: u })
    ] });
    return h === "left" ? /* @__PURE__ */ i.jsx("div", { className: O(g ? "w-full" : "inline-block", e), children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-start gap-4", children: [
      d && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: b,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            d,
            f && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: O("flex-1", !g && "inline-block"), children: [
        K,
        q
      ] })
    ] }) }) : /* @__PURE__ */ i.jsxs("div", { className: O(g ? "w-full" : "inline-block", e), children: [
      d && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: b,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            d,
            f && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      K,
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
}, zp = ({
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
    className: O(
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
const Hl = _e(
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
), kn = Re(
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
    labelPlacement: g = "top",
    fullWidth: x = !1,
    className: v,
    placeholder: j = "Select date",
    leftIcon: E,
    rightIcon: N,
    monthsToShow: T = 1,
    valueFormatter: R,
    rangeStart: L,
    rangeEnd: S,
    closeOnSelect: H = !0,
    calendarFooter: _,
    format: M = "DD-MM-YYYY",
    allowInput: A = !1,
    ...p
  }, y) => {
    const [b, $] = te(!1), [I, m] = te(e), [k, P] = te(e || /* @__PURE__ */ new Date()), [C, U] = te(!1), [F, W] = te(""), ne = re(null), B = re(null), K = re(null), q = re(null), D = re(null);
    Wn(y, () => D.current, []), ue(() => {
      m(e || void 0), W(e ? X(e, M) : "");
    }, [e, M]), ue(() => {
      W(I ? X(I, M) : "");
    }, [I, M]);
    const X = (V, ee) => {
      const z = V.getDate().toString().padStart(2, "0"), oe = (V.getMonth() + 1).toString().padStart(2, "0"), Y = V.getFullYear().toString();
      switch (ee) {
        case "DD-MM-YYYY":
          return `${z}-${oe}-${Y}`;
        case "YYYY-MM-DD":
          return `${Y}-${oe}-${z}`;
        case "MM-DD-YYYY":
          return `${oe}-${z}-${Y}`;
        default:
          return `${z}-${oe}-${Y}`;
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
      if (C && q.current) {
        const V = Ne(k).year(), ee = q.current.querySelectorAll("[data-year]"), z = Array.from(ee).find(
          (oe) => parseInt(oe.getAttribute("data-year") || "0") === V
        );
        z && z.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center"
        });
      }
    }, [C, k]);
    const fe = () => {
      if (!b || !B.current || !K.current) return;
      const { bottom: V, left: ee, width: z, top: oe } = B.current.getBoundingClientRect(), Y = K.current, ve = it(), le = ve.innerHeight - V, je = oe, Ot = le < (T === 2 ? 400 : 350), Mt = je > le, ht = Ot && Mt;
      T === 2 ? (Object.assign(Y.style, {
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
        left: `${ee + z / 2}px`,
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
      const V = it(), ee = Ge(), z = () => {
        b && fe();
      }, oe = () => {
        b && fe();
      }, Y = (ve) => {
        ve.key === "Escape" && b && ($(!1), U(!1));
      };
      return b && (fe(), V.addEventListener("scroll", z, !0), V.addEventListener("resize", oe), ee.addEventListener("keydown", Y)), () => {
        V.removeEventListener("scroll", z, !0), V.removeEventListener("resize", oe), ee.removeEventListener("keydown", Y);
      };
    }, [b]);
    const Ue = (V) => {
      if (L !== void 0 && S !== void 0)
        if (L && S)
          m(V), W(X(V, M)), t == null || t(V);
        else if (L) {
          const z = V;
          Ne(z).isBefore(L), m(z), W(X(z, M)), t == null || t(z), $(!1), U(!1);
        } else
          m(V), W(X(V, M)), t == null || t(V);
      else
        m(V), W(X(V, M)), t == null || t(V), $(!1), U(!1);
    }, He = () => {
      P(Ne(k).subtract(1, "month").toDate());
    }, Se = () => {
      P(Ne(k).add(1, "month").toDate());
    }, Ye = (V) => {
      const ee = Ne(V).startOf("month"), z = Ne(V).endOf("month"), oe = [];
      let Y = ee;
      for (; Y.isBefore(z) || Y.isSame(z, "day"); )
        oe.push(Y.toDate()), Y = Y.add(1, "day");
      return oe;
    }, Ee = (V) => !!(r && Ne(V).isBefore(r, "day") || n && Ne(V).isAfter(n, "day")), et = (V) => {
      if (!A) return;
      const z = V.target.value.replace(/[^\d-]/g, "");
      if (z.length < F.length) {
        W(z);
        return;
      }
      if (z.replace(/-/g, "").length > 8)
        return;
      let Y = z;
      M === "DD-MM-YYYY" ? (z.length === 2 && !z.includes("-") || z.length === 5 && z.split("-").length === 2) && (Y = z + "-") : M === "YYYY-MM-DD" ? (z.length === 4 && !z.includes("-") || z.length === 7 && z.split("-").length === 2) && (Y = z + "-") : M === "MM-DD-YYYY" && (z.length === 2 && !z.includes("-") || z.length === 5 && z.split("-").length === 2) && (Y = z + "-"), W(Y);
    }, tt = () => {
      if (!A) return;
      const V = xe(F, M);
      if (V) {
        if (r && V < r) {
          W(X(r, M)), m(r), t == null || t(r);
          return;
        }
        if (n && V > n) {
          W(X(n, M)), m(n), t == null || t(n);
          return;
        }
        m(V), t == null || t(V), W(X(V, M));
      } else
        W(I ? X(I, M) : "");
    }, We = () => {
      A && $(!1);
    }, ze = (V) => {
      A && V.key === "Enter" && (V.preventDefault(), tt());
    }, dt = (V) => {
      const ee = Ne(k).year(V).toDate();
      P(ee), U(!1);
    }, ut = () => {
      if (!C) return null;
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
              className: O(
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
      if (!b) return null;
      const V = Ge();
      if (!("body" in V)) return null;
      const ee = Array.from({ length: T }).map(
        (z, oe) => Ne(k).add(oe, "month").toDate()
      );
      return At(
        /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "fixed inset-0 z-[9998]",
              onClick: () => {
                C || $(!1);
              }
            }
          ),
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: K,
              className: "fixed z-[9999] bg-white border border-gray-200 rounded-md shadow-lg",
              onClick: (z) => z.stopPropagation(),
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
                  /* @__PURE__ */ i.jsx("div", { className: "relative", children: /* @__PURE__ */ i.jsx("span", { className: "font-medium text-gray-900", children: T === 1 ? /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ i.jsx("span", { children: Ne(k).format("MMMM") }),
                    /* @__PURE__ */ i.jsxs(
                      "div",
                      {
                        className: "cursor-pointer flex items-center gap-1",
                        onClick: () => U(!C),
                        children: [
                          /* @__PURE__ */ i.jsx("span", { children: Ne(k).format("YYYY") }),
                          /* @__PURE__ */ i.jsx(Ke, { variant: "ghost", size: "sm", leftIcon: C ? "mdi:chevron-up" : "mdi:chevron-down" })
                        ]
                      }
                    )
                  ] }) : `${Ne(k).format("MMMM YYYY")} - ${Ne(
                    k
                  ).add(T - 1, "month").format("MMMM YYYY")}` }) }),
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
                C ? ut() : /* @__PURE__ */ i.jsx(
                  "div",
                  {
                    className: O(
                      T === 2 ? "flex gap-5 p-2 mx-auto w-fit" : "justify-between p-2 mx-auto w-fit"
                    ),
                    children: ee.map((z, oe) => {
                      const Y = Ye(z), ve = Ne(z).startOf("month").day();
                      return /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col", children: [
                        /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-7 gap-y-1 my-1", children: [
                          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                            (le, je) => {
                              const ct = je === 0 || je === 6;
                              return /* @__PURE__ */ i.jsx(
                                "div",
                                {
                                  className: O(
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
                            const je = I && Ne(le).isSame(I, "day"), ct = Ee(le), Ot = Ne(le).isSame(
                              z,
                              "month"
                            ), Mt = L && S && Ne(le).isSameOrAfter(L, "day") && Ne(le).isSameOrBefore(S, "day"), ht = L && Ne(le).isSame(L, "day"), jr = S && Ne(le).isSame(S, "day"), ir = Ne(le).day() === 0 || Ne(le).day() === 6, Et = L && S;
                            return /* @__PURE__ */ i.jsx("div", { className: "flex flex-col items-center justify-center", children: /* @__PURE__ */ i.jsx(
                              "div",
                              {
                                className: O(
                                  Mt && "rounded-none bg-primary-50",
                                  Et && ht && "rounded-l-full",
                                  Et && jr && "rounded-r-full"
                                ),
                                children: /* @__PURE__ */ i.jsx(
                                  "button",
                                  {
                                    onClick: () => !ct && Ue(le),
                                    disabled: ct,
                                    className: O(
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
                        _
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
        className: O("relative", !x && "inline-block"),
        ref: B,
        onClick: () => !l && !A && $(!b),
        children: [
          E && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: (V) => {
                V.stopPropagation(), l || $(!b);
              },
              children: /* @__PURE__ */ i.jsx(de, { icon: E, className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              ref: D,
              type: "text",
              value: A ? F : R ? R() : I ? X(I, M) : "",
              placeholder: A ? M : j,
              readOnly: !A,
              maxLength: A ? 10 : void 0,
              onChange: et,
              onBlur: tt,
              onFocus: We,
              onKeyDown: ze,
              className: O(
                Hl({ variant: c ? "error" : o, size: s, rounded: a, fullWidth: x }),
                E && "pl-10",
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
                V.stopPropagation(), l || $(!b);
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
    return g === "left" ? /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: O(x ? "w-full" : "inline-block", v),
        ref: ne,
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-start gap-4", children: [
            f && /* @__PURE__ */ i.jsxs("label", { className: "block text-sm text-neutral-900 pt-2", children: [
              f,
              h && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: O("flex-1", !x && "inline-block"), children: [
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
        className: O(x ? "w-full" : "inline-block", v),
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
const Wl = Re(
  ({
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
  }, d) => {
    const [f, h] = te([
      void 0,
      void 0
    ]);
    if (e === "single") {
      const g = Array.isArray(t) ? t[0] : t;
      return /* @__PURE__ */ i.jsx(
        kn,
        {
          ref: d,
          value: g === null ? void 0 : g,
          onChange: (x) => r == null ? void 0 : r(x),
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
      let [g, x] = Array.isArray(t) ? t : f;
      const v = (E) => {
        !g || g && x ? (h([E, void 0]), r == null || r([E, void 0])) : g && !x && (E < g ? (h([E, g]), r == null || r([E, g])) : (h([g, E]), r == null || r([g, E])));
      }, j = () => {
        if (!g) return "";
        const E = (N) => N ? N.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric"
        }) : "";
        return g && x ? `${E(g)} - ${E(x)}` : E(g);
      };
      return /* @__PURE__ */ i.jsx(
        kn,
        {
          ref: d,
          value: g,
          onChange: v,
          monthsToShow: n,
          placeholder: u.placeholder || "Select date range",
          valueFormatter: j,
          rangeStart: g,
          rangeEnd: x,
          closeOnSelect: !!x,
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
  }
);
Wl.displayName = "DatePicker";
const Bs = Re(
  ({ children: e, onClose: t, className: r, ...n }, o) => /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: o,
      className: O("mb-4 flex items-center justify-between", r),
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
}, Ul = Re(
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
    animationDelay: g = 0,
    ...x
  }, v) => {
    const [j, E] = te(e), [N, T] = te(!1), R = re(!1);
    if (Ps(() => {
      if (e) {
        E(!0), T(!1);
        const y = Ge();
        "body" in y && (f !== "outside" ? (y.body.style.overflow = "hidden", R.current = !0) : R.current = !1);
        const b = requestAnimationFrame(() => T(!0));
        return () => cancelAnimationFrame(b);
      }
      T(!1);
      const p = setTimeout(() => {
        E(!1);
        const y = Ge();
        "body" in y && R.current && (y.body.style.overflow = "", R.current = !1);
      }, h + g);
      return () => clearTimeout(p);
    }, [e, f, h, g]), ue(() => {
      const p = (y) => {
        y instanceof KeyboardEvent && y.key === "Escape" && t();
      };
      return e && Ge().addEventListener("keydown", p), () => {
        Ge().removeEventListener("keydown", p);
      };
    }, [e, t]), !j) return null;
    const L = {
      blur: "backdrop-blur-sm bg-black/30",
      dark: "bg-black/50",
      transparent: "bg-transparent"
    }, S = () => {
      a && t();
    }, H = Ge();
    if (!("body" in H)) return null;
    const _ = (p) => {
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
    }, M = (() => {
      if (f === "inside")
        return l === "fullscreen" || d === "left" || d === "right" ? "overflow-y-auto" : "max-h-screen overflow-y-auto";
    })(), A = {
      transitionDuration: `${h}ms`,
      transitionDelay: `${g}ms`
    };
    return At(
      /* @__PURE__ */ i.jsx(
        "div",
        {
          className: O(
            "fixed inset-0 z-50 flex transition-opacity",
            L[o],
            N ? "opacity-100" : "opacity-0",
            d === "center" && "items-center justify-center",
            d === "top" && "items-start justify-center",
            d === "bottom" && "items-end justify-center",
            d === "left" && "items-stretch justify-start",
            d === "right" && "items-stretch justify-end"
          ),
          style: A,
          onClick: S,
          children: /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: v,
              className: O(
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
                l === "fullscreen" ? "rounded-none" : _(u),
                // Corner overrides so the edge touching the viewport is not rounded
                d === "left" && "rounded-l-none",
                d === "right" && "rounded-r-none",
                d === "top" && "rounded-t-none",
                d === "bottom" && "rounded-b-none",
                M
              ),
              style: A,
              onClick: (p) => p.stopPropagation(),
              ...x,
              children: [
                s && /* @__PURE__ */ i.jsx(Bs, { onClose: t, children: s }),
                r
              ]
            }
          )
        }
      ),
      H.body
    );
  }
), Yl = Re(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ i.jsx(
    "h2",
    {
      ref: n,
      className: O("text-xl font-semibold text-gray-900", t),
      ...r,
      children: e
    }
  )
), ql = Re(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ i.jsx("div", { ref: n, className: O("text-gray-600", t), ...r, children: e })
), Xl = Re(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: n,
      className: O("mt-6 flex justify-end gap-3", t),
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
}, Fp = ({
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
  showPlaceholder: g = !0,
  showMaxSize: x = !0,
  icon: v = "mdi:upload"
}) => {
  const [j, E] = te(!1), [N, T] = te(null), R = re(null), L = pe((b) => {
    b.preventDefault(), a || E(!0);
  }, [a]), S = pe((b) => {
    b.preventDefault(), E(!1);
  }, []), H = pe((b) => b.size > t ? `File size exceeds ${t / (1024 * 1024)}MB limit` : e[0] !== "*" && !e.some(($) => $.startsWith(".") ? b.name.toLowerCase().endsWith($.toLowerCase()) : b.type.startsWith($)) ? `File type not allowed. Allowed types: ${e.join(", ")}` : null, [e, t]), _ = pe((b) => {
    if (b.preventDefault(), E(!1), T(null), a) return;
    const $ = Array.from(b.dataTransfer.files), I = [], m = [];
    if ($.forEach((k) => {
      const P = H(k);
      P ? m.push(`${k.name}: ${P}`) : I.push(k);
    }), m.length > 0 && T(m.join(`
`)), I.length > 0) {
      const k = r ? [...n, ...I] : I;
      o == null || o(k);
    }
  }, [a, r, o, H, n]), M = pe((b) => {
    if (T(null), a || !b.target.files) return;
    const $ = Array.from(b.target.files), I = [], m = [];
    if ($.forEach((k) => {
      const P = H(k);
      P ? m.push(`${k.name}: ${P}`) : I.push(k);
    }), m.length > 0 && T(m.join(`
`)), I.length > 0) {
      const k = r ? [...n, ...I] : I;
      o == null || o(k);
    }
    R.current && (R.current.value = "");
  }, [a, r, o, H, n]), A = pe((b) => {
    const $ = [...n];
    $.splice(b, 1), o == null || o($);
  }, [o, n]), p = (b) => b.type.startsWith("image/") ? /* @__PURE__ */ i.jsx(de, { icon: "mdi:image", className: "w-5 h-5" }) : b.type.startsWith("text/") ? /* @__PURE__ */ i.jsx(de, { icon: "mdi:file-document", className: "w-5 h-5" }) : /* @__PURE__ */ i.jsx(de, { icon: "mdi:file", className: "w-5 h-5" }), y = Jl[c];
  return /* @__PURE__ */ i.jsxs("div", { className: be("w-full", s), children: [
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: be(
          "p-6 text-center transition-colors",
          !f && [
            "border-2 border-dashed",
            y.border,
            y.bg,
            j && y.active,
            !a && y.hover
          ],
          a && "opacity-50 cursor-not-allowed",
          Ql[u],
          Po[d],
          !f && "cursor-pointer"
        ),
        onDragOver: L,
        onDragLeave: S,
        onDrop: _,
        onClick: () => {
          var b;
          return !a && !f && ((b = R.current) == null ? void 0 : b.click());
        },
        children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              ref: R,
              type: "file",
              accept: e.join(","),
              multiple: r,
              onChange: M,
              className: "hidden",
              disabled: a
            }
          ),
          f ? /* @__PURE__ */ i.jsx("div", { onClick: () => {
            var b;
            return !a && ((b = R.current) == null ? void 0 : b.click());
          }, children: f }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(de, { icon: v, className: "w-12 h-12 mx-auto mb-4 text-neutral-400" }),
            g && /* @__PURE__ */ i.jsx("p", { className: be("text-neutral-600", y.text), children: l }),
            x && /* @__PURE__ */ i.jsxs("p", { className: "text-sm text-neutral mt-2", children: [
              "Max file size: ",
              t / (1024 * 1024),
              "MB"
            ] })
          ] })
        ]
      }
    ),
    N && /* @__PURE__ */ i.jsx("p", { className: "mt-2 text-sm text-danger", children: N }),
    h && n.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "mt-4 space-y-2", children: n.map((b, $) => /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: be(
          "flex items-center justify-between p-2",
          Po[d],
          y.bg
        ),
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-center space-x-2", children: [
            p(b),
            /* @__PURE__ */ i.jsx("span", { className: be("text-sm", y.text), children: b.name }),
            /* @__PURE__ */ i.jsxs("span", { className: "text-xs text-neutral", children: [
              "(",
              (b.size / 1024).toFixed(1),
              " KB)"
            ] })
          ] }),
          !a && /* @__PURE__ */ i.jsx(
            "button",
            {
              onClick: () => A($),
              className: "p-1 text-neutral hover:text-danger",
              children: /* @__PURE__ */ i.jsx(de, { icon: "mdi:close", className: "w-4 h-4" })
            }
          )
        ]
      },
      `${b.name}-${$}`
    )) })
  ] });
}, ec = _e(
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
), Vp = ({
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
  return /* @__PURE__ */ i.jsxs("div", { className: O(ec({ variant: n, rounded: o }), l), children: [
    r && /* @__PURE__ */ i.jsx(de, { icon: u(), className: O("h-5 w-5 flex-shrink-0", c()) }),
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
}, an = "select-dropdown-opened", tc = _e(
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
), Gs = Re(
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
    disabled: g = !1,
    position: x = "bottom",
    fullWidth: v = !1,
    children: j,
    leftIcon: E,
    rightIcon: N,
    ...T
  }, R) => {
    const [L, S] = te(!1), H = re(null), _ = re(null), A = `select-${ae.useId().replace(/:/g, "")}`, p = () => {
      if (L && H.current && _.current) {
        const k = H.current.getBoundingClientRect(), P = _.current, C = it(), U = C.innerHeight - k.bottom, F = k.top, ne = k.bottom + P.offsetHeight + 4 >= C.innerHeight, B = F > U, K = ne && B;
        x === "bottom" || x === "top" ? (P.style.position = "fixed", P.style.left = `${k.left}px`, P.style.width = `${k.width}px`, x === "bottom" && K ? (P.style.bottom = `${C.innerHeight - k.top + 4}px`, P.style.top = "auto", P.style.maxHeight = `${F - 8}px`) : x === "bottom" ? (P.style.top = `${k.bottom + 4}px`, P.style.bottom = "auto", P.style.maxHeight = `${U - 8}px`) : x === "top" && !K ? (P.style.top = `${k.bottom + 4}px`, P.style.bottom = "auto", P.style.maxHeight = `${U - 8}px`) : (P.style.bottom = `${C.innerHeight - k.top + 4}px`, P.style.top = "auto", P.style.maxHeight = `${F - 8}px`)) : x === "left" ? (P.style.position = "fixed", P.style.right = `${C.innerWidth - k.left + 4}px`, P.style.top = `${k.top}px`, P.style.maxHeight = `${C.innerHeight - k.top - 8}px`) : x === "right" && (P.style.position = "fixed", P.style.left = `${k.right + 4}px`, P.style.top = `${k.top}px`, P.style.maxHeight = `${C.innerHeight - k.top - 8}px`);
      }
    };
    ue(() => {
      const k = it(), P = () => {
        L && p();
      }, C = () => {
        L && p();
      };
      return L && (p(), k.addEventListener("scroll", P, !0), k.addEventListener("resize", C)), () => {
        k.removeEventListener("scroll", P, !0), k.removeEventListener("resize", C);
      };
    }, [L, x]), ue(() => {
      const k = Ge(), P = (U) => {
        U.detail.id !== A && S(!1);
      }, C = (U) => {
        const F = U.target, W = H.current, ne = _.current;
        W && ne && !W.contains(F) && !ne.contains(F) && S(!1);
      };
      return k.addEventListener(an, P), k.addEventListener("click", C), () => {
        k.removeEventListener(an, P), k.removeEventListener("click", C);
      };
    }, [A]);
    const y = () => {
      if (g) return;
      if (L) {
        S(!1);
        return;
      }
      Ge().dispatchEvent(
        new CustomEvent(an, {
          detail: { id: A }
        })
      ), S(!0);
    }, b = () => {
      if (o) {
        const k = o.find((P) => P.value === f);
        return k == null ? void 0 : k.label;
      }
      if (j) {
        const P = wr.toArray(j).find(
          (C) => xr(C) && "value" in C.props && C.props.value === f
        );
        return xr(P) ? P.props.children : null;
      }
      return null;
    }, $ = (k) => {
      g || (h == null || h(k), S(!1));
    }, I = () => o ? o.map((k) => /* @__PURE__ */ i.jsx(
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
    )) : j ? wr.map(j, (k) => xr(k) && "value" in k.props ? Kn(k, {
      selected: k.props.value === f,
      onClick: () => $(k.props.value)
    }) : null) : null, m = () => {
      if (!L || g) return null;
      const k = /* @__PURE__ */ i.jsx(
        "div",
        {
          ref: _,
          className: O(
            "fixed z-[9999] min-w-[8rem] border border-neutral-200 bg-white py-1 shadow-lg rounded-lg",
            x === "left" || x === "right" ? "w-max" : "w-full"
          ),
          onClick: (C) => C.stopPropagation(),
          style: {
            overflowY: "auto"
          },
          children: I()
        }
      ), P = Ge();
      return "body" in P ? At(k, P.body) : null;
    };
    return /* @__PURE__ */ i.jsxs("div", { className: O(v ? "w-full" : "inline-block"), ref: R, ...T, children: [
      s && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: A,
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
          className: O("relative", !v && "inline-block"),
          onClick: y,
          children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                id: A,
                ref: H,
                type: "button",
                className: O(
                  tc({ variant: a ? "error" : t, size: r, rounded: n, fullWidth: v }),
                  "flex items-center justify-between",
                  g && "cursor-not-allowed opacity-50",
                  E && "pl-10",
                  N && "pr-10",
                  e
                ),
                "aria-haspopup": "listbox",
                "aria-expanded": L,
                "aria-describedby": a ? `${A}-error` : c ? `${A}-helper` : void 0,
                disabled: g,
                children: [
                  E && /* @__PURE__ */ i.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ i.jsx(de, { icon: E, className: "w-4 h-4" }) }),
                  /* @__PURE__ */ i.jsx("span", { className: "flex items-center gap-2 min-w-0 flex-1", children: /* @__PURE__ */ i.jsx("span", { className: O(
                    "truncate text-left",
                    b() ? "text-neutral-900" : "text-neutral"
                  ), children: b() || d }) }),
                  N ? /* @__PURE__ */ i.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ i.jsx(de, { icon: N, className: "w-4 h-4" }) }) : /* @__PURE__ */ i.jsx(
                    de,
                    {
                      icon: "mdi:chevron-down",
                      className: O("transition-transform flex-shrink-0 ml-2 w-4 h-4", L && "rotate-180")
                    }
                  )
                ]
              }
            ),
            m()
          ]
        }
      ),
      a && l && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger", id: `${A}-error`, children: l }),
      !a && c && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral", id: `${A}-helper`, children: c })
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
  const d = (g, x) => {
    const v = x - g + 1;
    return Array.from({ length: v }, (j, E) => E + g);
  }, h = (() => {
    const g = o * 2 + 3, x = g + 2;
    if (t > x) {
      const v = Math.max(2, e - o), j = Math.min(t - 1, e + o);
      let E = d(v, j);
      const N = v > 2, T = t - j > 1, R = g - (E.length + 1);
      if (N && !T)
        E = [...d(v - R, v - 1), ...E];
      else if (!N && T) {
        const L = d(j + 1, j + R);
        E = [...E, ...L];
      } else N && T && (E = [...E]);
      return [1, ...E, t];
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
                onChange: (g) => u && u(Number(g)),
                size: "sm",
                className: "w-16",
                fullWidth: !1,
                "aria-label": "Items per page",
                children: a.map((g) => /* @__PURE__ */ i.jsx(Ur, { value: g.toString(), children: g }, g))
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
          h.map((g, x) => {
            const v = g === e, j = typeof g == "string" && g === "...";
            return /* @__PURE__ */ i.jsx(
              Ke,
              {
                variant: "ghost",
                onClick: () => !j && n(g),
                className: be(
                  "px-3 py-1 rounded-md text-sm",
                  v ? "bg-primary text-white hover:bg-primary" : "text-gray-700",
                  j && "cursor-default"
                ),
                children: g
              },
              x
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
}, oc = _e(
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
), sc = Re(
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
    fullWidth: g = !1,
    disabled: x = !1,
    name: v,
    gap: j,
    color: E = "primary",
    radioSize: N = "sm",
    id: T,
    ...R
  }, L) => {
    const S = T || ae.useId(), H = `${S}-helper`, _ = `${S}-error`, M = `${S}-group`, A = v || `radio-group-${S}`, [p, y] = ae.useState(n), b = r !== void 0 ? r : p, $ = (C) => {
      r === void 0 && y(C), o == null || o(C);
    }, m = ((C) => C === "none" ? "gap-0" : C === "xs" ? "gap-1" : C === "sm" ? "gap-2" : C === "md" ? "gap-3" : C === "lg" ? "gap-4" : C === "xl" ? "gap-6" : null)(j), k = /* @__PURE__ */ i.jsx("div", { className: O("relative", !g && "inline-block"), children: /* @__PURE__ */ i.jsx(
      "fieldset",
      {
        ref: L,
        id: M,
        className: O(
          oc({ layout: s, size: a }),
          m,
          e
        ),
        "aria-describedby": l ? _ : u ? H : void 0,
        "aria-invalid": l,
        "aria-required": f,
        ...R,
        children: t.map((C) => /* @__PURE__ */ i.jsx(
          nc,
          {
            label: C.label,
            checked: b === C.value,
            onChange: () => $(C.value),
            disabled: x || C.disabled,
            name: A,
            value: C.value,
            color: l ? "error" : E,
            error: l ? " " : void 0,
            variantSize: N
          },
          C.value
        ))
      }
    ) }), P = /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      l && c && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger", id: _, children: c }),
      !l && u && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral", id: H, children: u })
    ] });
    return h === "left" ? /* @__PURE__ */ i.jsx("div", { className: O(g ? "w-full" : "inline-block", e), children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-start gap-4", children: [
      d && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: M,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            d,
            f && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: O("flex-1", !g && "inline-block"), children: [
        k,
        P
      ] })
    ] }) }) : /* @__PURE__ */ i.jsxs("div", { className: O(g ? "w-full" : "inline-block", e), children: [
      d && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: M,
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
const To = _e("animate-pulse bg-neutral-200", {
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
      className: O(
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
    className: O(
      To({ variant: r, rounded: n, fullWidth: o, pulseVariant: s }),
      a
    ),
    style: {
      width: !o && typeof e == "number" ? `${e}px` : e,
      height: typeof t == "number" ? `${t}px` : t
    }
  }
), Bp = ({
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
  const f = d, [h, g] = te(
    n !== void 0 ? n : o !== void 0 ? o : f ? [e, t] : e
  ), [x, v] = te(null), j = re(null), E = n !== void 0 ? n : h, [N, T] = f ? Array.isArray(E) ? E : [e, t] : [typeof E == "number" ? E : e, t], R = (m) => Math.min(Math.max(m, e), t), L = (m) => {
    if (l) return;
    let k;
    f && Array.isArray(m) ? k = [R(m[0]), R(m[1])] : !f && typeof m == "number" ? k = R(m) : k = f ? [e, t] : e, n === void 0 && g(k), s == null || s(k);
  }, S = (m) => {
    if (!j.current) return e;
    const k = j.current.getBoundingClientRect(), C = (m - k.left) / k.width, U = e + (t - e) * C, F = Math.round(U / r) * r;
    return R(F);
  }, H = (m) => (k) => {
    l || (v(m), k.stopPropagation());
  }, _ = (m) => {
    if (!l)
      if (!f)
        v(0), M(m, 0);
      else {
        const k = S(m.clientX), P = Math.abs(k - N), C = Math.abs(k - T), U = P < C ? 0 : 1;
        v(U), M(m, U);
      }
  }, M = ae.useCallback((m, k) => {
    const P = S(m.clientX);
    if (!f)
      L(P);
    else {
      let C = [N, T];
      k === 0 ? C = [Math.min(P, T - r), T] : C = [N, Math.max(P, N + r)], C[0] > C[1] && (C = [C[1], C[0]]), L(C);
    }
  }, [f, N, T, r, L, S]), A = ae.useRef(x);
  A.current = x;
  const p = ae.useCallback(function(m) {
    A.current === null || l || M(m, A.current);
  }, [l, M]), y = ae.useCallback(function() {
    v(null);
  }, []);
  ue(() => {
    if (x !== null) {
      const m = it();
      return m.addEventListener("mousemove", p), m.addEventListener("mouseup", y), () => {
        m.removeEventListener("mousemove", p), m.removeEventListener("mouseup", y);
      };
    }
  }, [x, p, y]);
  const b = (m) => (m - e) / (t - e) * 100, $ = b(N), I = b(T);
  return /* @__PURE__ */ i.jsxs("div", { className: be("relative w-full", a), children: [
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        ref: j,
        className: be(
          "relative h-2 bg-gray-200 rounded-full cursor-pointer",
          l && "opacity-50 cursor-not-allowed"
        ),
        onMouseDown: _,
        children: [
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "absolute h-full bg-primary rounded-full",
              style: { left: `${f ? $ : 0}%`, width: `${f ? I - $ : $}%` }
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
              onMouseDown: H(0)
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
              style: { left: `${I}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: H(1)
            }
          )
        ]
      }
    ),
    u.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "flex justify-between mt-2", children: u.map((m) => /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "text-xs text-gray",
        style: { left: `${(m.value - e) / (t - e) * 100}%` },
        children: m.label
      },
      m.value
    )) }),
    c && /* @__PURE__ */ i.jsx("div", { className: "mt-2 text-sm text-gray-600", children: f ? `${N} - ${T}` : N })
  ] });
}, ic = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8"
}, lc = {
  primary: "text-primary",
  warning: "text-warning",
  default: "text-default-400"
}, Gp = ({
  rating: e,
  maxRating: t = 5,
  size: r = "md",
  color: n = "primary",
  readOnly: o = !1,
  onRatingChange: s,
  className: a
}) => {
  const [l, c] = te(null), u = (g) => {
    o || c(g);
  }, d = () => {
    o || c(null);
  }, f = (g) => {
    !o && s && s(g);
  }, h = l !== null ? l : e;
  return /* @__PURE__ */ i.jsx("div", { className: O("flex items-center gap-1", a), children: [...Array(t)].map((g, x) => {
    const v = x + 1, j = v <= h, E = l !== null && v <= l;
    return /* @__PURE__ */ i.jsx(
      "button",
      {
        className: O(
          "transition-colors duration-200",
          ic[r],
          j || E ? lc[n] : "text-default-200",
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
            icon: j || E ? "mdi:star" : "mdi:star-outline",
            className: "w-full h-full"
          }
        )
      },
      x
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
}, Hp = ({
  status: e,
  size: t = "md",
  withLabel: r = !1,
  className: n
}) => {
  const { bgColor: o, label: s } = cc[e], a = dc[t];
  return /* @__PURE__ */ i.jsxs("div", { className: O("flex items-center gap-2", n), children: [
    /* @__PURE__ */ i.jsx("div", { className: O("rounded-full animate-pulse", o, a) }),
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
}) => /* @__PURE__ */ i.jsx("div", { className: O("flex flex-row items-center w-full justify-between", r), children: e.map((o, s) => {
  const a = s < t ? "completed" : s === t ? "active" : "pending";
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: "flex items-center flex-1",
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: O(
          "flex flex-col items-center z-10",
          n === "default" ? "gap-4" : "gap-2",
          n === "default" ? "px-5" : "px-3"
        ), children: [
          n === "default" && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: O(
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
                className: O(
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
            className: O(
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
}) => /* @__PURE__ */ i.jsx("div", { className: O("flex flex-col items-start gap-8", r), children: e.map((o, s) => {
  const a = s < t ? "completed" : s === t ? "active" : "pending";
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: "flex flex-row w-full items-center relative",
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: O(
          "flex flex-row items-center z-10",
          n === "default" ? "gap-4" : "gap-2"
        ), children: [
          n === "default" && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: O(
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
                className: O(
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
            className: O(
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
}) }), Wp = ({
  orientation: e = "horizontal",
  variant: t = "default",
  ...r
}) => e === "vertical" ? /* @__PURE__ */ i.jsx(fc, { variant: t, ...r }) : /* @__PURE__ */ i.jsx(uc, { variant: t, ...r }), Kp = ({
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
}, Up = ({
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
  var E, N;
  const [u, d] = te(t || ((E = e[0]) == null ? void 0 : E.id) || ""), f = ae.useRef(null), [h, g] = te({ left: 0, width: 0 });
  ae.useEffect(() => {
    var T;
    if (r === "active-underline" && f.current) {
      const R = f.current.getBoundingClientRect(), L = (T = f.current.parentElement) == null ? void 0 : T.getBoundingClientRect();
      L && g({
        left: R.left - L.left,
        width: R.width
      });
    }
  }, [r, e, u]), ae.useEffect(() => {
    if (r === "active-underline") {
      const T = () => {
        var R;
        if (f.current) {
          const L = f.current.getBoundingClientRect(), S = (R = f.current.parentElement) == null ? void 0 : R.getBoundingClientRect();
          S && g({
            left: L.left - S.left,
            width: L.width
          });
        }
      };
      return window.addEventListener("resize", T), () => window.removeEventListener("resize", T);
    }
  }, [r, e, u]);
  const x = pe((T) => {
    d(T), c == null || c(T);
  }, [c]), v = () => {
    switch (n) {
      case "sm":
        return "text-sm px-3 py-1.5";
      case "lg":
        return "text-lg px-6 py-3";
      default:
        return "text-base px-4 py-2";
    }
  }, j = (T, R) => {
    const L = be(
      "flex items-center space-x-2 transition-colors",
      "font-medium",
      v(),
      R && "opacity-50 cursor-not-allowed",
      !R && "cursor-pointer"
    );
    switch (r) {
      case "pills":
        return be(
          L,
          "rounded-full",
          T ? "bg-primary text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        );
      case "underline":
        return be(
          L,
          "border-b-2",
          T ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
      case "active-underline":
        return be(
          L,
          "border-b-0",
          T ? "text-primary" : "text-gray-600 dark:text-gray-300 hover:text-primary"
        );
      default:
        return be(
          L,
          "border-b-2",
          T ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
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
      e.map((T) => {
        const R = T.id === u, L = !!T.disabled;
        return /* @__PURE__ */ i.jsxs(
          "button",
          {
            ref: r === "active-underline" && R ? f : void 0,
            onClick: () => !L && x(T.id),
            disabled: L,
            className: be(
              j(R, L),
              a
            ),
            children: [
              T.icon && /* @__PURE__ */ i.jsx(
                de,
                {
                  icon: T.icon,
                  className: "w-5 h-5 flex-shrink-0"
                }
              ),
              /* @__PURE__ */ i.jsx("span", { children: T.label })
            ]
          },
          T.id
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
    /* @__PURE__ */ i.jsx("div", { className: be("mt-4", l), children: (N = e.find((T) => T.id === u)) == null ? void 0 : N.content })
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
  return /* @__PURE__ */ i.jsx(a, { className: O("text-gray-900", o[e], r), children: t });
}, pc = _e(
  "border bg-white px-3 py-2 ring-0 transition-colors placeholder:text-neutral placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 resize-none",
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
        sm: "min-h-[60px] px-2 py-1 text-sm",
        md: "min-h-[80px] px-3 py-2 text-base",
        lg: "min-h-[100px] px-4 py-3 text-lg"
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
      resize: {
        none: "resize-none",
        vertical: "resize-y",
        horizontal: "resize-x",
        both: "resize"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "xl",
      fullWidth: !0,
      resize: "vertical"
    }
  }
), gc = Re(
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
    resize: f = "vertical",
    showCharCount: h = !1,
    maxLength: g,
    minRows: x = 3,
    maxRows: v = 10,
    id: j,
    value: E,
    ...N
  }, T) => {
    const R = j || ae.useId(), L = `${R}-helper`, S = `${R}-error`, H = `${R}-char-count`, _ = typeof E == "string" ? E.length : 0, M = g && _ > g, A = /* @__PURE__ */ i.jsxs("div", { className: O("relative", !d && "inline-block"), children: [
      /* @__PURE__ */ i.jsx(
        "textarea",
        {
          id: R,
          ref: T,
          rows: x,
          maxLength: g,
          className: O(
            pc({
              variant: o ? "error" : t,
              size: r,
              rounded: n,
              fullWidth: d,
              resize: f === "none" ? "none" : f
            }),
            e
          ),
          "aria-describedby": O(
            o ? S : a ? L : void 0,
            h ? H : void 0
          ),
          "aria-invalid": o,
          "aria-required": c,
          style: {
            minHeight: `${x * 1.5}em`,
            maxHeight: `${v * 1.5}em`
          },
          value: E,
          ...N
        }
      ),
      h && g && /* @__PURE__ */ i.jsx("div", { className: "absolute bottom-2 right-2 text-xs text-neutral-500 bg-white px-1 rounded", children: /* @__PURE__ */ i.jsxs("span", { id: H, className: M ? "text-danger" : "", children: [
        _,
        "/",
        g
      ] }) })
    ] }), p = /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      o && s && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger", id: S, children: s }),
      !o && a && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral", id: L, children: a }),
      h && g && !o && !a && /* @__PURE__ */ i.jsxs("p", { className: "mt-1 text-xs text-neutral", id: H, children: [
        _,
        " of ",
        g,
        " characters"
      ] })
    ] });
    return u === "left" ? /* @__PURE__ */ i.jsx("div", { className: O(d ? "w-full" : "inline-block", e), children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-start gap-4", children: [
      l && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: R,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            l,
            c && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: O("flex-1", !d && "inline-block"), children: [
        A,
        p
      ] })
    ] }) }) : /* @__PURE__ */ i.jsxs("div", { className: O(d ? "w-full" : "inline-block", e), children: [
      l && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: R,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            l,
            c && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      A,
      p
    ] });
  }
);
gc.displayName = "Textarea";
const ln = "timepicker-dropdown-opened", mc = _e(
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
), Ks = Re(
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
    className: g,
    placeholder: x = "Select time",
    leftIcon: v,
    rightIcon: j,
    valueFormatter: E,
    closeOnSelect: N = !0,
    ...T
  }, R) => {
    const [L, S] = te(!1), [H, _] = te(e || ""), [M, A] = te(0), [p, y] = te(0), [b, $] = te(!0), I = re(null), m = re(null), k = re(null), C = `timepicker-${ae.useId().replace(/:/g, "")}`, U = () => {
      if (!L || !m.current || !k.current) return;
      const D = m.current.getBoundingClientRect(), X = k.current, fe = it().innerHeight - D.bottom;
      X.style.top = `${D.bottom + 4}px`, X.style.bottom = "auto", X.style.left = `${D.left}px`, X.style.maxHeight = `${fe - 8}px`, X.style.width = `${D.width}px`;
    };
    ue(() => {
      const D = it(), X = Ge(), xe = () => {
        L && U();
      }, fe = () => {
        L && U();
      }, Ue = (Se) => {
        Se.detail.id !== C && S(!1);
      }, He = (Se) => {
        const Ye = Se.target;
        I.current && k.current && !I.current.contains(Ye) && !k.current.contains(Ye) && S(!1);
      };
      return L && (U(), D.addEventListener("scroll", xe, !0), D.addEventListener("resize", fe)), X.addEventListener(ln, Ue), X.addEventListener("mousedown", He), () => {
        D.removeEventListener("scroll", xe, !0), D.removeEventListener("resize", fe), X.removeEventListener(ln, Ue), X.removeEventListener("mousedown", He);
      };
    }, [L, C]);
    const F = () => {
      a || (L || Ge().dispatchEvent(
        new CustomEvent(ln, {
          detail: { id: C }
        })
      ), S(!L));
    };
    ue(() => {
      if (e) {
        _(e);
        const [D, X] = e.split(":").map(Number);
        r ? A(D) : (A(D % 12 || 12), $(D < 12)), y(X);
      }
    }, [e, r]);
    const W = () => {
      const X = `${(r || b ? M : M + 12).toString().padStart(2, "0")}:${p.toString().padStart(2, "0")}`;
      _(X), t == null || t(X), N && S(!1);
    }, ne = () => r ? Array.from({ length: 24 }, (D, X) => X) : Array.from({ length: 12 }, (D, X) => X + 1), B = () => Array.from({ length: 60 }, (D, X) => X), K = E ? E(H) : H, q = Ge();
    return "body" in q ? /* @__PURE__ */ i.jsxs("div", { ref: I, className: O("relative", h && "w-full", g), children: [
      u && /* @__PURE__ */ i.jsxs(
        "label",
        {
          className: O(
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
          ref: m,
          className: "relative",
          onClick: F,
          children: [
            v && /* @__PURE__ */ i.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ i.jsx(de, { icon: v, size: 20 }) }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                ref: R,
                type: "text",
                value: K,
                placeholder: x,
                readOnly: !0,
                className: O(
                  mc({ variant: n, size: o, rounded: s, fullWidth: h }),
                  v && "pl-10",
                  j && "pr-10",
                  "text-left"
                ),
                disabled: a,
                ...T
              }
            ),
            j && /* @__PURE__ */ i.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ i.jsx(de, { icon: j, size: 20 }) })
          ]
        }
      ),
      L && At(
        /* @__PURE__ */ i.jsx(
          "div",
          {
            ref: k,
            className: "fixed z-[9999] w-fit rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            onClick: (D) => D.stopPropagation(),
            children: /* @__PURE__ */ i.jsxs("div", { className: "p-0", children: [
              /* @__PURE__ */ i.jsxs(Yn, { variant: "ghost", className: O(
                "flex mx-2 my-1 p-0",
                r ? "justify-start gap-8" : "justify-start gap-4"
              ), children: [
                /* @__PURE__ */ i.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ i.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ i.jsx("div", { className: "flex flex-col gap-2", children: ne().map((D) => /* @__PURE__ */ i.jsx(
                  Ke,
                  {
                    variant: "ghost",
                    onClick: () => A(D),
                    className: O(M === D && "bg-primary text-white"),
                    children: D.toString().padStart(2, "0")
                  },
                  D
                )) }) }) }),
                /* @__PURE__ */ i.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ i.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ i.jsx("div", { className: "flex flex-col gap-2", children: B().map((D) => /* @__PURE__ */ i.jsx(
                  Ke,
                  {
                    variant: "ghost",
                    onClick: () => y(D),
                    className: O(p === D && "bg-primary text-white"),
                    children: D.toString().padStart(2, "0")
                  },
                  D
                )) }) }) }),
                !r && /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ i.jsx(
                    Ke,
                    {
                      variant: "ghost",
                      onClick: () => $(!0),
                      className: O(b && "bg-primary text-white"),
                      children: "AM"
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    Ke,
                    {
                      variant: "ghost",
                      onClick: () => $(!1),
                      className: O(!b && "bg-primary text-white"),
                      children: "PM"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ i.jsx("div", { className: "mb-2 mx-2", children: /* @__PURE__ */ i.jsx(
                Ke,
                {
                  variant: "primary",
                  onClick: W,
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
const bc = ({
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
bc.displayName = "TimePicker";
const hc = _e(
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
), vc = _e(
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
), xc = Re(
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
    const h = ae.useId(), g = `${h}-helper`, x = `${h}-error`;
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
            className: O(hc({ variant: c ? "danger" : r, size: n }), u),
            "aria-describedby": c ? x : a ? g : void 0,
            "aria-invalid": c,
            "aria-required": s,
            ...d,
            children: /* @__PURE__ */ i.jsx(
              "span",
              {
                "data-state": e ? "checked" : "unchecked",
                className: O(
                  vc({ size: n }),
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
      c && l && /* @__PURE__ */ i.jsx("p", { className: "text-xs text-danger", id: x, children: l }),
      !c && a && /* @__PURE__ */ i.jsx("p", { className: "text-xs text-neutral", id: g, children: a })
    ] });
  }
);
xc.displayName = "Toggle";
const yc = _e(
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
), wc = _e("absolute w-2 h-2 transform rotate-45", {
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
}), Yp = ({
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
  const [d, f] = te(!1), [h, g] = te({ top: 0, left: 0 }), x = re(null), v = re(null), j = re(), E = l !== void 0, N = E ? l : d, T = () => {
    if (!x.current || !v.current) return;
    const _ = v.current.getBoundingClientRect(), M = x.current.getBoundingClientRect(), A = it(), p = A.scrollX || A.pageXOffset, y = A.scrollY || A.pageYOffset;
    let b = 0, $ = 0;
    const I = 8;
    switch (r) {
      case "top":
        b = _.top + y - M.height - I, $ = _.left + p + (_.width - M.width) / 2;
        break;
      case "bottom":
        b = _.bottom + y + I, $ = _.left + p + (_.width - M.width) / 2;
        break;
      case "left":
        b = _.top + y + (_.height - M.height) / 2, $ = _.left + p - M.width - I;
        break;
      case "right":
        b = _.top + y + (_.height - M.height) / 2, $ = _.right + p + I;
        break;
    }
    const m = A.innerWidth, k = A.innerHeight;
    $ < 0 && ($ = 0), $ + M.width > m && ($ = m - M.width), b < 0 && (b = 0), b + M.height > k && (b = k - M.height), g({ top: b, left: $ });
  };
  ue(() => {
    if (N) {
      T();
      const _ = it();
      _.addEventListener("scroll", T, !0), _.addEventListener("resize", T);
    }
    return () => {
      const _ = it();
      _.removeEventListener("scroll", T, !0), _.removeEventListener("resize", T);
    };
  }, [N, r]);
  const R = () => {
    E ? c == null || c(!0) : j.current = setTimeout(() => {
      f(!0);
    }, n);
  }, L = () => {
    j.current && clearTimeout(j.current), E ? c == null || c(!1) : f(!1);
  }, S = (_) => {
    _.stopPropagation(), u === "click" && (E ? c == null || c(!l) : f(!d));
  };
  ue(() => {
    const _ = (M) => {
      u === "click" && x.current && !x.current.contains(M.target) && v.current && !v.current.contains(M.target) && L();
    };
    return N && document.addEventListener("click", _), () => {
      document.removeEventListener("click", _);
    };
  }, [N, u]);
  const H = () => {
    if (!N) return null;
    const _ = Ge();
    return "body" in _ ? At(
      /* @__PURE__ */ i.jsxs(
        "div",
        {
          ref: x,
          className: O(yc({ color: s, size: a }), o),
          style: {
            top: `${h.top}px`,
            left: `${h.left}px`
          },
          children: [
            e,
            /* @__PURE__ */ i.jsx(
              "div",
              {
                className: O(
                  wc({ color: s }),
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
      _.body
    ) : null;
  };
  return /* @__PURE__ */ i.jsx("div", { className: "relative", children: /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: v,
      className: "relative inline-block",
      onMouseEnter: u === "hover" ? R : void 0,
      onMouseLeave: u === "hover" ? L : void 0,
      onClick: S,
      children: [
        t,
        H()
      ]
    }
  ) });
}, $c = _e(
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
), kc = {
  sm: 24,
  md: 36,
  lg: 48
}, Nc = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
  info: "bg-info"
}, Ec = {
  primary: "#007C99",
  // Tailwind primary
  secondary: "#CEEAE7",
  success: "#00B37D",
  warning: "#F59E0B",
  danger: "#EF4444",
  info: "#0EA5E9"
}, jc = ae.forwardRef(
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
    const h = Math.min(Math.max(o, 0), 100), g = kc[n], x = n === "sm" ? 2 : n === "md" ? 3 : 4, v = (g - x) / 2, j = 2 * Math.PI * v, E = j - h / 100 * j;
    let N = "";
    return t === "loading" ? N = "rounded-full" : c ? N = c === "none" ? "" : `rounded-${c}` : N = "rounded-md", t === "circular" ? /* @__PURE__ */ i.jsxs("div", { className: "inline-flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "relative", style: { width: g, height: g }, children: [
        /* @__PURE__ */ i.jsxs(
          "svg",
          {
            className: O(
              "transform -rotate-90",
              s ? "animate-spin" : ""
            ),
            width: g,
            height: g,
            children: [
              /* @__PURE__ */ i.jsx(
                "circle",
                {
                  strokeWidth: x,
                  stroke: "#e5e7eb",
                  fill: "transparent",
                  r: v,
                  cx: g / 2,
                  cy: g / 2
                }
              ),
              /* @__PURE__ */ i.jsx(
                "circle",
                {
                  className: O(
                    "transition-all duration-300 ease-in-out",
                    s ? "animate-dash" : ""
                  ),
                  strokeWidth: x,
                  strokeDasharray: j,
                  strokeDashoffset: s ? 0 : E,
                  strokeLinecap: "round",
                  stroke: Ec[r],
                  fill: "transparent",
                  r: v,
                  cx: g / 2,
                  cy: g / 2
                }
              )
            ]
          }
        ),
        u && /* @__PURE__ */ i.jsx("span", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ i.jsx(de, { icon: u, size: g * 0.5 }) }),
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
          className: O($c({ variant: t === "loading" ? "bar" : t, size: n }), N, e),
          role: "progressbar",
          "aria-valuenow": s ? void 0 : h,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          ...d,
          children: /* @__PURE__ */ i.jsx(
            "div",
            {
              className: O(
                "h-full transition-all duration-300 ease-in-out",
                s ? "animate-progress-indeterminate" : "",
                Nc[r],
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
jc.displayName = "Progress";
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
], Pc = _e(
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
}, Tc = (e) => e.startsWith("0") && e.length >= 9 && e.length <= 12 ? "+62" + e.slice(1) : e, Sc = (e) => e.startsWith("0") && e.length >= 3, Nn = Re(
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
    defaultCountry: g = "id",
    placeholder: x = "Enter phone number",
    autoDetect: v = !0,
    ...j
  }, E) => {
    const [N, T] = te(!1), [R, L] = te(
      () => yt.find((B) => B.iso === g) || yt[0]
    ), [S, H] = te(""), [_, M] = te(() => {
      if (v && d) {
        const K = cn(d);
        if (K)
          return L(K), d;
        const q = So(d);
        return q ? (L(q), q.code + d.slice(q.code.replace("+", "").length)) : d;
      }
      const B = R.code;
      return d.startsWith(B) ? d.slice(B.length) : d;
    }), [A, p] = te(() => v && d ? !!(cn(d) || So(d)) : !1), y = re(null), b = re(null), $ = ae.useId(), I = `${$}-helper`, m = `${$}-error`, k = yt.filter(
      (B) => B.name.toLowerCase().includes(S.toLowerCase()) || B.code.includes(S)
    ), P = re(null), C = () => {
      if (N && y.current && b.current) {
        const B = y.current.getBoundingClientRect(), K = b.current, q = typeof window < "u" ? window : { innerHeight: 0 }, D = q.innerHeight - B.bottom, X = B.top, fe = B.bottom + (K.offsetHeight || 0) + 4 >= q.innerHeight, Ue = X > D, He = fe && Ue;
        K.style.position = "fixed", K.style.left = `${B.left}px`, K.style.minWidth = `${B.width}px`, K.style.maxWidth = "340px", K.style.width = "auto", He ? (K.style.bottom = `${q.innerHeight - B.top + 4}px`, K.style.top = "auto", K.style.maxHeight = `${X - 8}px`) : (K.style.top = `${B.bottom + 4}px`, K.style.bottom = "auto", K.style.maxHeight = `${D - 8}px`);
      }
    };
    ue(() => {
      const B = typeof window < "u" ? window : void 0, K = () => {
        N && C();
      }, q = () => {
        N && C();
      };
      return N && (C(), B == null || B.addEventListener("scroll", K, !0), B == null || B.addEventListener("resize", q)), () => {
        B == null || B.removeEventListener("scroll", K, !0), B == null || B.removeEventListener("resize", q);
      };
    }, [N]), ue(() => {
      if (!N) return;
      const B = (K) => {
        const q = K.target;
        y.current && b.current && !y.current.contains(q) && !b.current.contains(q) && T(!1);
      };
      return document.addEventListener("click", B), () => document.removeEventListener("click", B);
    }, [N]);
    const U = (B) => {
      if (L(B), T(!1), H(""), v) {
        const K = B.code + _.replace(/^\+?\d*/, "");
        M(K);
        const q = K.replace(/[^\d]/g, "");
        f == null || f(q);
      } else {
        const q = (B.code + _).replace(/[^\d]/g, "");
        f == null || f(q);
      }
    }, F = (B) => {
      const K = B.target.value;
      if (/^[+\d]*$/.test(K))
        if (v && K.startsWith("+")) {
          const D = cn(K);
          if (D) {
            L(D), p(!0), M(K);
            const X = K.replace(/[^\d]/g, "");
            f == null || f(X);
          } else {
            M(K), p(!1);
            const X = K.replace(/[^\d]/g, "");
            f == null || f(X);
          }
        } else if (v && !K.startsWith("+") && K.length > 0) {
          const D = Tc(K);
          if (D !== K) {
            M(D), L(
              yt.find((xe) => xe.iso === "id") || yt[0]
            ), p(!0);
            const X = D.replace(/[^\d]/g, "");
            f == null || f(X);
          } else if (Sc(K)) {
            const X = "+62" + K.slice(1);
            M(X), L(
              yt.find((fe) => fe.iso === "id") || yt[0]
            ), p(!0);
            const xe = X.replace(/[^\d]/g, "");
            f == null || f(xe);
          } else if (K.startsWith("0"))
            M(K), p(!1);
          else {
            const X = "+" + K;
            M(X);
            const xe = X.replace(/[^\d]/g, "");
            f == null || f(xe);
          }
        } else {
          const D = K.replace(/[^\d]/g, "");
          M(D);
          const xe = (R.code + D).replace(/[^\d]/g, "");
          f == null || f(xe);
        }
    }, W = O(
      Pc({
        variant: o ? "error" : t,
        size: r,
        rounded: n,
        fullWidth: u
      }),
      "!w-full"
    ), ne = !v || v && A;
    return Wn(E, () => P.current, []), /* @__PURE__ */ i.jsxs(
      "div",
      {
        ref: P,
        className: O(u ? "w-full" : "inline-block", e),
        ...j,
        children: [
          l && /* @__PURE__ */ i.jsxs("label", { htmlFor: $, className: "mb-1.5 block text-sm text-neutral-900", children: [
            l,
            c && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: O("relative", !u && "inline-block"), children: [
            /* @__PURE__ */ i.jsxs("div", { className: "flex", children: [
              ne && /* @__PURE__ */ i.jsxs(
                "button",
                {
                  type: "button",
                  ref: y,
                  onClick: () => !h && T(!N),
                  className: O(
                    W,
                    "flex items-center gap-2 rounded-r-none justify-between",
                    v ? "max-w-[60px]" : "max-w-[100px]",
                    h && "cursor-not-allowed opacity-50"
                  ),
                  children: [
                    /* @__PURE__ */ i.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ i.jsx(de, { icon: R.flag, className: "w-5 h-5" }),
                      !v && /* @__PURE__ */ i.jsx("span", { className: "text-sm", children: R.code })
                    ] }),
                    /* @__PURE__ */ i.jsx(
                      de,
                      {
                        icon: "mdi:chevron-down",
                        className: O("transition-transform", N && "rotate-180")
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
                  value: _,
                  onChange: F,
                  disabled: h,
                  className: O(
                    W,
                    ne ? "rounded-l-none" : `rounded-l-${n}`,
                    "flex-1 min-w-0 w-full"
                  ),
                  placeholder: v ? "e.g. +6281234567890" : x
                }
              )
            ] }),
            N && At(
              /* @__PURE__ */ i.jsxs(
                "div",
                {
                  ref: b,
                  className: "border border-neutral-200 bg-white shadow-lg overflow-y-auto rounded-md",
                  children: [
                    /* @__PURE__ */ i.jsx("div", { className: "p-2 border-b border-neutral-200", children: /* @__PURE__ */ i.jsx(
                      "input",
                      {
                        type: "text",
                        value: S,
                        onChange: (B) => {
                          const K = B.target.value;
                          /^[a-zA-Z0-9\s]*$/.test(K) && H(K);
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
                        className: O(
                          "w-full px-3 py-2 text-sm text-left hover:bg-primary-50 cursor-pointer",
                          R.iso === B.iso && "bg-primary-50"
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
          o && s && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger", id: m, children: s }),
          !o && a && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral", id: I, children: a })
        ]
      }
    );
  }
);
Nn.displayName = "PhoneInput";
const qp = () => {
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
function Cc(e) {
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
function Rc(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function Xs(...e) {
  return (...t) => {
    for (let r of e)
      typeof r == "function" && r(...t);
  };
}
var Co = /* @__PURE__ */ new Map();
function Lc(e, t) {
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
      90 ? t[o] = Xs(s, a) : (o === "className" || o === "UNSAFE_className") && typeof s == "string" && typeof a == "string" ? t[o] = Xt(s, a) : o === "id" && s && a ? t.id = Lc(s, a) : t[o] = a !== void 0 ? a : s;
    }
  }
  return t;
}
function Ic(...e) {
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
var Ac = (e, t) => {
  var r;
  let n = [];
  const o = (r = wr.map(e, (a) => xr(a) && a.type === t ? (n.push(a), null) : a)) == null ? void 0 : r.filter(Boolean), s = n.length >= 0 ? n : void 0;
  return [o, s];
}, Oc = /* @__PURE__ */ new Set([
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
]), Mc = /* @__PURE__ */ new Set([
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
]), Lo = /^(data-.*)$/, _c = /^(aria-.*)$/, Pr = /^(on[A-Z].*)$/;
function Io(e, t = {}) {
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
    s != null && s.has(d) || a != null && a.has(d) && Pr.test(d) || Pr.test(d) && !Mc.has(d) || l && Lo.test(d) || c && Pr.test(d) || (Object.prototype.hasOwnProperty.call(e, d) && (Oc.has(d) || r && _c.test(d) || o != null && o.has(d) || Lo.test(d)) || Pr.test(d)) && (u[d] = e[d]);
  return u;
}
var [Xp, Xn] = qn({
  name: "ProviderContext",
  strict: !1
});
const Dc = /* @__PURE__ */ new Set([
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
]), zc = /* @__PURE__ */ new Set([
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
function Fc(e) {
  if (Intl.Locale) {
    let r = new Intl.Locale(e).maximize(), n = typeof r.getTextInfo == "function" ? r.getTextInfo() : r.textInfo;
    if (n) return n.direction === "rtl";
    if (r.script) return Dc.has(r.script);
  }
  let t = e.split("-")[0];
  return zc.has(t);
}
const Fr = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, Zs = /* @__PURE__ */ ae.createContext(Fr), Vc = /* @__PURE__ */ ae.createContext(!1);
let Bc = !!(typeof window < "u" && window.document && window.document.createElement), dn = /* @__PURE__ */ new WeakMap();
function Gc(e = !1) {
  let t = mt(Zs), r = re(null);
  if (r.current === null && !e) {
    var n, o;
    let s = (o = ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || o === void 0 || (n = o.ReactCurrentOwner) === null || n === void 0 ? void 0 : n.current;
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
function Hc(e) {
  let t = mt(Zs);
  t === Fr && !Bc && process.env.NODE_ENV !== "production" && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let r = Gc(!!e), n = t === Fr && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${n}-${r}`;
}
function Wc(e) {
  let t = ae.useId(), [r] = te(Zn()), n = r || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${Fr.prefix}`;
  return e || `${n}-${t}`;
}
const Kc = typeof ae.useId == "function" ? Wc : Hc;
function Uc() {
  return !1;
}
function Yc() {
  return !0;
}
function qc(e) {
  return () => {
  };
}
function Zn() {
  return typeof ae.useSyncExternalStore == "function" ? ae.useSyncExternalStore(qc, Uc, Yc) : mt(Vc);
}
const Xc = Symbol.for("react-aria.i18n.locale");
function Js() {
  let e = typeof window < "u" && window[Xc] || typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([
      e
    ]);
  } catch {
    e = "en-US";
  }
  return {
    locale: e,
    direction: Fc(e) ? "rtl" : "ltr"
  };
}
let En = Js(), mr = /* @__PURE__ */ new Set();
function Ao() {
  En = Js();
  for (let e of mr) e(En);
}
function Zc() {
  let e = Zn(), [t, r] = te(En);
  return ue(() => (mr.size === 0 && window.addEventListener("languagechange", Ao), mr.add(r), () => {
    mr.delete(r), mr.size === 0 && window.removeEventListener("languagechange", Ao);
  }), []), e ? {
    locale: "en-US",
    direction: "ltr"
  } : t;
}
const Jc = /* @__PURE__ */ ae.createContext(null);
function Qs() {
  let e = Zc();
  return mt(Jc) || e;
}
const Qc = Symbol.for("react-aria.i18n.locale"), ed = Symbol.for("react-aria.i18n.strings");
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
    return r || (r = td(t, this.strings, this.defaultLocale), this.strings[t] = r), r;
  }
  static getGlobalDictionaryForPackage(t) {
    if (typeof window > "u") return null;
    let r = window[Qc];
    if (Ut === void 0) {
      let o = window[ed];
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
function td(e, t, r = "en-US") {
  if (t[e]) return t[e];
  let n = rd(e);
  if (t[n]) return t[n];
  for (let o in t)
    if (o.startsWith(n + "-")) return t[o];
  return t[r];
}
function rd(e) {
  return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
}
const Oo = /* @__PURE__ */ new Map(), Mo = /* @__PURE__ */ new Map();
class nd {
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
function od(e) {
  let t = _o.get(e);
  return t || (t = new Yr(e), _o.set(e, t)), t;
}
function sd(e, t) {
  return t && Yr.getGlobalDictionaryForPackage(t) || od(e);
}
function ad(e, t) {
  let { locale: r } = Qs(), n = sd(e, t);
  return De(() => new nd(r, n), [
    r,
    n
  ]);
}
function id(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function ld(e, t, r) {
  id(e, t), t.set(e, r);
}
const Ae = typeof document < "u" ? ae.useLayoutEffect : () => {
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
function cd(e) {
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
let dd = !!(typeof window < "u" && window.document && window.document.createElement), Qt = /* @__PURE__ */ new Map(), br;
typeof FinalizationRegistry < "u" && (br = new FinalizationRegistry((e) => {
  Qt.delete(e);
}));
function Jn(e) {
  let [t, r] = te(e), n = re(null), o = Kc(t), s = re(null);
  if (br && br.register(s, o), dd) {
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
function ud(e, t) {
  if (e === t) return e;
  let r = Qt.get(e);
  if (r)
    return r.forEach((o) => o.current = t), t;
  let n = Qt.get(t);
  return n ? (n.forEach((o) => o.current = e), e) : t;
}
function fd(e = []) {
  let t = Jn(), [r, n] = cd(t), o = pe(() => {
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
function pd(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function gd(e) {
  return pd(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
let md = !1;
function qr() {
  return md;
}
function Ce(e, t) {
  if (!qr()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let r = t;
  for (; r !== null; ) {
    if (r === e) return !0;
    r.tagName === "SLOT" && r.assignedSlot ? r = r.assignedSlot.parentNode : gd(r) ? r = r.host : r = r.parentNode;
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
class bd {
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
function hd(e, t, r, n) {
  return qr() ? new bd(e, t, r, n) : e.createTreeWalker(t, r, n);
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
      90 ? t[o] = kr(s, a) : (o === "className" || o === "UNSAFE_className") && typeof s == "string" && typeof a == "string" ? t[o] = be(s, a) : o === "id" && s && a ? t.id = ud(s, a) : t[o] = a !== void 0 ? a : s;
    }
  }
  return t;
}
const vd = /* @__PURE__ */ new Set([
  "id"
]), xd = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), yd = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), wd = /^(data-.*)$/;
function ea(e, t = {}) {
  let { labelable: r, isLink: n, propNames: o } = t, s = {};
  for (const a in e) Object.prototype.hasOwnProperty.call(e, a) && (vd.has(a) || r && xd.has(a) || n && yd.has(a) || o != null && o.has(a) || wd.test(a)) && (s[a] = e[a]);
  return s;
}
function tr(e) {
  if ($d()) e.focus({
    preventScroll: !0
  });
  else {
    let t = kd(e);
    e.focus(), Nd(t);
  }
}
let Tr = null;
function $d() {
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
function kd(e) {
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
function Nd(e) {
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
}), Ed = kt(function() {
  return Qn(/^iPhone/i);
}), ta = kt(function() {
  return Qn(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  rr() && navigator.maxTouchPoints > 1;
}), Zr = kt(function() {
  return Ed() || ta();
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
}), jd = kt(function() {
  return Xr(/Firefox/i);
});
function Nr(e, t, r = !0) {
  var n, o;
  let { metaKey: s, ctrlKey: a, altKey: l, shiftKey: c } = t;
  jd() && (!((o = window.event) === null || o === void 0 || (n = o.type) === null || n === void 0) && n.startsWith("key")) && e.target === "_blank" && (rr() ? s = !0 : a = !0);
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
function Pd() {
  for (const [e] of Ct)
    "isConnected" in e && !e.isConnected && Ct.delete(e);
}
function oa(e) {
  requestAnimationFrame(() => {
    Pd(), Ct.size === 0 ? e() : jn.add(e);
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
function Td(e, t) {
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
function Sd() {
  return typeof window.ResizeObserver < "u";
}
function zo(e) {
  const { ref: t, box: r, onResize: n } = e;
  ue(() => {
    let o = t == null ? void 0 : t.current;
    if (o)
      if (Sd()) {
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
function Cd(e) {
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
], Rd = ro.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
ro.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const Ld = ro.join(':not([hidden]):not([tabindex="-1"]),');
function ia(e) {
  return e.matches(Rd);
}
function Id(e) {
  return e.matches(Ld);
}
function Ad(e, t, r) {
  let [n, o] = te(e || t), s = re(e !== void 0), a = e !== void 0;
  ue(() => {
    let u = s.current;
    u !== a && process.env.NODE_ENV !== "production" && console.warn(`WARN: A component changed from ${u ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}.`), s.current = a;
  }, [
    a
  ]);
  let l = a ? e : n, c = pe((u, ...d) => {
    let f = (h, ...g) => {
      r && (Object.is(l, h) || r(h, ...g)), a || (l = h);
    };
    typeof u == "function" ? (process.env.NODE_ENV !== "production" && console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), o((g, ...x) => {
      let v = u(a ? l : g, ...x);
      return f(v, ...d), a ? g : v;
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
}, Od = {
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
    let x = document.documentElement;
    n = x.clientWidth, o = x.clientHeight;
    var d;
    t = (d = Ve == null ? void 0 : Ve.width) !== null && d !== void 0 ? d : n;
    var f;
    r = (f = Ve == null ? void 0 : Ve.height) !== null && f !== void 0 ? f : o, l.top = x.scrollTop || e.scrollTop, l.left = x.scrollLeft || e.scrollLeft, Ve && (s = Ve.offsetTop, a = Ve.offsetLeft);
  } else
    ({ width: t, height: r, top: s, left: a } = er(e)), l.top = e.scrollTop, l.left = e.scrollLeft, n = t, o = r;
  if (ra() && (e.tagName === "BODY" || e.tagName === "HTML") && u) {
    l.top = 0, l.left = 0;
    var h;
    s = (h = Ve == null ? void 0 : Ve.pageTop) !== null && h !== void 0 ? h : 0;
    var g;
    a = (g = Ve == null ? void 0 : Ve.pageLeft) !== null && g !== void 0 ? g : 0;
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
function Md(e) {
  return {
    top: e.scrollTop,
    left: e.scrollLeft,
    width: e.scrollWidth,
    height: e.scrollHeight
  };
}
function Bo(e, t, r, n, o, s, a) {
  var l;
  let c = (l = o.scroll[e]) !== null && l !== void 0 ? l : 0, u = n[Sn[e]], d = n.scroll[pt[e]] + s, f = u + n.scroll[pt[e]] - s, h = t - c + a[e] - n[pt[e]], g = t - c + r + a[e] - n[pt[e]];
  return h < d ? d - h : g > f ? Math.max(f - g, d - h) : 0;
}
function _d(e) {
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
  let [t, r] = e.split(" "), n = pt[t] || "right", o = Od[n];
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
  let { placement: d, crossPlacement: f, axis: h, crossAxis: g, size: x, crossSize: v } = n, j = {};
  var E;
  j[g] = (E = e[g]) !== null && E !== void 0 ? E : 0;
  var N, T, R, L;
  f === "center" ? j[g] += (((N = e[v]) !== null && N !== void 0 ? N : 0) - ((T = r[v]) !== null && T !== void 0 ? T : 0)) / 2 : f !== g && (j[g] += ((R = e[v]) !== null && R !== void 0 ? R : 0) - ((L = r[v]) !== null && L !== void 0 ? L : 0)), j[g] += s;
  const S = e[g] - r[v] + c + u, H = e[g] + e[v] - c - u;
  if (j[g] = Tn(j[g], S, H), d === h) {
    const _ = l ? a[x] : t[la[x]];
    j[Vr[h]] = Math.floor(_ - e[h] + o);
  } else j[h] = Math.floor(e[h] + e[x] + o);
  return j;
}
function Dd(e, t, r, n, o, s, a, l) {
  const c = n ? r.height : t[la.height];
  var u;
  let d = e.top != null ? r.top + e.top : r.top + (c - ((u = e.bottom) !== null && u !== void 0 ? u : 0) - a);
  var f, h, g, x, v, j;
  let E = l !== "top" ? (
    // We want the distance between the top of the overlay to the bottom of the boundary
    Math.max(0, t.height + t.top + ((f = t.scroll.top) !== null && f !== void 0 ? f : 0) - d - (((h = o.top) !== null && h !== void 0 ? h : 0) + ((g = o.bottom) !== null && g !== void 0 ? g : 0) + s))
  ) : Math.max(0, d + a - (t.top + ((x = t.scroll.top) !== null && x !== void 0 ? x : 0)) - (((v = o.top) !== null && v !== void 0 ? v : 0) + ((j = o.bottom) !== null && j !== void 0 ? j : 0) + s));
  return Math.min(t.height - s * 2, E);
}
function Ho(e, t, r, n, o, s) {
  let { placement: a, axis: l, size: c } = s;
  var u, d;
  if (a === l) return Math.max(0, r[l] - e[l] - ((u = e.scroll[l]) !== null && u !== void 0 ? u : 0) + t[l] - ((d = n[l]) !== null && d !== void 0 ? d : 0) - n[Vr[l]] - o);
  var f;
  return Math.max(0, e[c] + e[l] + e.scroll[l] - t[l] - r[l] - r[c] - ((f = n[l]) !== null && f !== void 0 ? f : 0) - n[Vr[l]] - o);
}
function zd(e, t, r, n, o, s, a, l, c, u, d, f, h, g, x, v) {
  let j = Go(e), { size: E, crossAxis: N, crossSize: T, placement: R, crossPlacement: L } = j, S = un(t, l, r, j, d, f, u, h, x, v), H = d, _ = Ho(l, u, t, o, s + d, j);
  if (a && n[E] > _) {
    let B = Go(`${Vr[R]} ${L}`), K = un(t, l, r, B, d, f, u, h, x, v);
    Ho(l, u, t, o, s + d, B) > _ && (j = B, S = K, H = d);
  }
  let M = "bottom";
  j.axis === "top" ? j.placement === "top" ? M = "top" : j.placement === "bottom" && (M = "bottom") : j.crossAxis === "top" && (j.crossPlacement === "top" ? M = "bottom" : j.crossPlacement === "bottom" && (M = "top"));
  let A = Bo(N, S[N], r[T], l, c, s, u);
  S[N] += A;
  let p = Dd(S, l, u, h, o, s, r.height, M);
  g && g < p && (p = g), r.height = Math.min(r.height, p), S = un(t, l, r, j, H, f, u, h, x, v), A = Bo(N, S[N], r[T], l, c, s, u), S[N] += A;
  let y = {}, b = t[N] + 0.5 * t[T] - S[N] - o[pt[N]];
  const $ = x / 2 + v;
  var I, m, k, P;
  const C = pt[N] === "left" ? ((I = o.left) !== null && I !== void 0 ? I : 0) + ((m = o.right) !== null && m !== void 0 ? m : 0) : ((k = o.top) !== null && k !== void 0 ? k : 0) + ((P = o.bottom) !== null && P !== void 0 ? P : 0), U = r[T] - C - x / 2 - v, F = t[N] + x / 2 - (S[N] + o[pt[N]]), W = t[N] + t[T] - x / 2 - (S[N] + o[pt[N]]), ne = Tn(b, F, W);
  return y[N] = Tn(ne, $, U), {
    position: S,
    maxHeight: p,
    arrowOffsetLeft: y.left,
    arrowOffsetTop: y.top,
    placement: j.placement
  };
}
function Fd(e) {
  let { placement: t, targetNode: r, overlayNode: n, scrollNode: o, padding: s, shouldFlip: a, boundaryElement: l, offset: c, crossOffset: u, maxHeight: d, arrowSize: f = 0, arrowBoundaryOffset: h = 0 } = e, g = n instanceof HTMLElement ? Vd(n) : document.documentElement, x = g === document.documentElement;
  const v = window.getComputedStyle(g).position;
  let j = !!v && v !== "static", E = x ? er(r) : Wo(r, g);
  if (!x) {
    let { marginTop: y, marginLeft: b } = window.getComputedStyle(r);
    E.top += parseInt(y, 10) || 0, E.left += parseInt(b, 10) || 0;
  }
  let N = er(n), T = _d(n);
  var R, L;
  N.width += ((R = T.left) !== null && R !== void 0 ? R : 0) + ((L = T.right) !== null && L !== void 0 ? L : 0);
  var S, H;
  N.height += ((S = T.top) !== null && S !== void 0 ? S : 0) + ((H = T.bottom) !== null && H !== void 0 ? H : 0);
  let _ = Md(o), M = Vo(l), A = Vo(g), p = l.tagName === "BODY" ? er(g) : Wo(g, l);
  return g.tagName === "HTML" && l.tagName === "BODY" && (A.scroll.top = 0, A.scroll.left = 0), zd(t, E, N, _, T, s, a, M, A, p, c, u, j, d, f, h);
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
function Vd(e) {
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
function Bd(e) {
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
let Ie = typeof document < "u" ? window.visualViewport : null;
function Gd(e) {
  let { direction: t } = Qs(), { arrowSize: r = 0, targetRef: n, overlayRef: o, scrollRef: s = o, placement: a = "bottom", containerPadding: l = 12, shouldFlip: c = !0, boundaryElement: u = typeof document < "u" ? document.body : null, offset: d = 0, crossOffset: f = 0, shouldUpdatePosition: h = !0, isOpen: g = !0, onClose: x, maxHeight: v, arrowBoundaryOffset: j = 0 } = e, [E, N] = te(null), T = [
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
    g,
    t,
    v,
    j,
    r
  ], R = re(Ie == null ? void 0 : Ie.scale);
  ue(() => {
    g && (R.current = Ie == null ? void 0 : Ie.scale);
  }, [
    g
  ]);
  let L = pe(() => {
    if (h === !1 || !g || !o.current || !n.current || !u || (Ie == null ? void 0 : Ie.scale) !== R.current) return;
    let A = null;
    if (s.current && s.current.contains(document.activeElement)) {
      var p;
      let P = (p = document.activeElement) === null || p === void 0 ? void 0 : p.getBoundingClientRect(), C = s.current.getBoundingClientRect();
      var y;
      if (A = {
        type: "top",
        offset: ((y = P == null ? void 0 : P.top) !== null && y !== void 0 ? y : 0) - C.top
      }, A.offset > C.height / 2) {
        A.type = "bottom";
        var b;
        A.offset = ((b = P == null ? void 0 : P.bottom) !== null && b !== void 0 ? b : 0) - C.bottom;
      }
    }
    let $ = o.current;
    if (!v && o.current) {
      var I;
      $.style.top = "0px", $.style.bottom = "";
      var m;
      $.style.maxHeight = ((m = (I = window.visualViewport) === null || I === void 0 ? void 0 : I.height) !== null && m !== void 0 ? m : window.innerHeight) + "px";
    }
    let k = Fd({
      placement: Wd(a, t),
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
      arrowBoundaryOffset: j
    });
    if (k.position) {
      if ($.style.top = "", $.style.bottom = "", $.style.left = "", $.style.right = "", Object.keys(k.position).forEach((P) => $.style[P] = k.position[P] + "px"), $.style.maxHeight = k.maxHeight != null ? k.maxHeight + "px" : "", A && document.activeElement && s.current) {
        let P = document.activeElement.getBoundingClientRect(), C = s.current.getBoundingClientRect(), U = P[A.type] - C[A.type];
        s.current.scrollTop += U - A.offset;
      }
      N(k);
    }
  }, T);
  Ae(L, T), Hd(L), zo({
    ref: o,
    onResize: L
  }), zo({
    ref: n,
    onResize: L
  });
  let S = re(!1);
  Ae(() => {
    let A, p = () => {
      S.current = !0, clearTimeout(A), A = setTimeout(() => {
        S.current = !1;
      }, 500), L();
    }, y = () => {
      S.current && p();
    };
    return Ie == null || Ie.addEventListener("resize", p), Ie == null || Ie.addEventListener("scroll", y), () => {
      Ie == null || Ie.removeEventListener("resize", p), Ie == null || Ie.removeEventListener("scroll", y);
    };
  }, [
    L
  ]);
  let H = pe(() => {
    S.current || x == null || x();
  }, [
    x,
    S
  ]);
  Bd({
    triggerRef: n,
    isOpen: g,
    onClose: x && H
  });
  var _, M;
  return {
    overlayProps: {
      style: {
        position: "absolute",
        zIndex: 1e5,
        ...E == null ? void 0 : E.position,
        maxHeight: (_ = E == null ? void 0 : E.maxHeight) !== null && _ !== void 0 ? _ : "100vh"
      }
    },
    placement: (M = E == null ? void 0 : E.placement) !== null && M !== void 0 ? M : null,
    arrowProps: {
      "aria-hidden": "true",
      role: "presentation",
      style: {
        left: E == null ? void 0 : E.arrowOffsetLeft,
        top: E == null ? void 0 : E.arrowOffsetTop
      }
    },
    updatePosition: L
  };
}
function Hd(e) {
  Ae(() => (window.addEventListener("resize", e, !1), () => {
    window.removeEventListener("resize", e, !1);
  }), [
    e
  ]);
}
function Wd(e, t) {
  return t === "rtl" ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right");
}
function Kd(e) {
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
function Ud(e, t) {
  return !e.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function da(e, t) {
  return e.nodeName !== "#comment" && Kd(e) && Ud(e, t) && (!e.parentElement || da(e.parentElement, e));
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
const oo = ae.createContext({
  register: () => {
  }
});
oo.displayName = "PressResponderContext";
function Yd(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function pa(e, t, r) {
  if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
  return t.get(e);
}
function qd(e, t) {
  var r = pa(e, t, "get");
  return Yd(e, r);
}
function Xd(e, t, r) {
  if (t.set) t.set.call(e, r);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = r;
  }
}
function qo(e, t, r) {
  var n = pa(e, t, "set");
  return Xd(e, n, r), r;
}
function Zd(e) {
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
    return qd(this, Cr);
  }
  constructor(t, r, n, o) {
    ld(this, Cr, {
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
function Jd(e) {
  let { onPress: t, onPressChange: r, onPressStart: n, onPressEnd: o, onPressUp: s, onClick: a, isDisabled: l, isPressed: c, preventFocusOnPress: u, shouldCancelOnPointerExit: d, allowTextSelectionOnPress: f, ref: h, ...g } = Zd(e), [x, v] = te(!1), j = re({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: E, removeAllGlobalListeners: N } = to(), T = nt((p, y) => {
    let b = j.current;
    if (l || b.didFirePressStart) return !1;
    let $ = !0;
    if (b.isTriggeringEvent = !0, n) {
      let I = new Rr("pressstart", y, p);
      n(I), $ = I.shouldStopPropagation;
    }
    return r && r(!0), b.isTriggeringEvent = !1, b.didFirePressStart = !0, v(!0), $;
  }), R = nt((p, y, b = !0) => {
    let $ = j.current;
    if (!$.didFirePressStart) return !1;
    $.didFirePressStart = !1, $.isTriggeringEvent = !0;
    let I = !0;
    if (o) {
      let m = new Rr("pressend", y, p);
      o(m), I = m.shouldStopPropagation;
    }
    if (r && r(!1), v(!1), t && b && !l) {
      let m = new Rr("press", y, p);
      t(m), I && (I = m.shouldStopPropagation);
    }
    return $.isTriggeringEvent = !1, I;
  }), L = nt((p, y) => {
    let b = j.current;
    if (l) return !1;
    if (s) {
      b.isTriggeringEvent = !0;
      let $ = new Rr("pressup", y, p);
      return s($), b.isTriggeringEvent = !1, $.shouldStopPropagation;
    }
    return !0;
  }), S = nt((p) => {
    let y = j.current;
    if (y.isPressed && y.target) {
      y.didFirePressStart && y.pointerType != null && R(Dt(y.target, p), y.pointerType, !1), y.isPressed = !1, y.isOverTarget = !1, y.activePointerId = null, y.pointerType = null, N(), f || fn(y.target);
      for (let b of y.disposables) b();
      y.disposables = [];
    }
  }), H = nt((p) => {
    d && S(p);
  }), _ = nt((p) => {
    a == null || a(p);
  }), M = nt((p, y) => {
    if (a) {
      let b = new MouseEvent("click", p);
      ua(b, y), a(no(b));
    }
  }), A = De(() => {
    let p = j.current, y = {
      onKeyDown($) {
        if (pn($.nativeEvent, $.currentTarget) && Ce($.currentTarget, ye($.nativeEvent))) {
          var I;
          ts(ye($.nativeEvent), $.key) && $.preventDefault();
          let m = !0;
          if (!p.isPressed && !$.repeat) {
            p.target = $.currentTarget, p.isPressed = !0, p.pointerType = "keyboard", m = T($, "keyboard");
            let k = $.currentTarget, P = (C) => {
              pn(C, k) && !C.repeat && Ce(k, ye(C)) && p.target && L(Dt(p.target, C), "keyboard");
            };
            E($e($.currentTarget), "keyup", kr(P, b), !0);
          }
          m && $.stopPropagation(), $.metaKey && rr() && ((I = p.metaKeyEvents) === null || I === void 0 || I.set($.key, $.nativeEvent));
        } else $.key === "Meta" && (p.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick($) {
        if (!($ && !Ce($.currentTarget, ye($.nativeEvent))) && $ && $.button === 0 && !p.isTriggeringEvent && !Nr.isOpening) {
          let I = !0;
          if (l && $.preventDefault(), !p.ignoreEmulatedMouseEvents && !p.isPressed && (p.pointerType === "virtual" || Pn($.nativeEvent))) {
            let m = T($, "virtual"), k = L($, "virtual"), P = R($, "virtual");
            _($), I = m && k && P;
          } else if (p.isPressed && p.pointerType !== "keyboard") {
            let m = p.pointerType || $.nativeEvent.pointerType || "virtual", k = L(Dt($.currentTarget, $), m), P = R(Dt($.currentTarget, $), m, !0);
            I = k && P, p.isOverTarget = !1, _($), S($);
          }
          p.ignoreEmulatedMouseEvents = !1, I && $.stopPropagation();
        }
      }
    }, b = ($) => {
      var I;
      if (p.isPressed && p.target && pn($, p.target)) {
        var m;
        ts(ye($), $.key) && $.preventDefault();
        let P = ye($), C = Ce(p.target, ye($));
        R(Dt(p.target, $), "keyboard", C), C && M($, p.target), N(), $.key !== "Enter" && so(p.target) && Ce(p.target, P) && !$[Xo] && ($[Xo] = !0, Nr(p.target, $, !1)), p.isPressed = !1, (m = p.metaKeyEvents) === null || m === void 0 || m.delete($.key);
      } else if ($.key === "Meta" && (!((I = p.metaKeyEvents) === null || I === void 0) && I.size)) {
        var k;
        let P = p.metaKeyEvents;
        p.metaKeyEvents = void 0;
        for (let C of P.values()) (k = p.target) === null || k === void 0 || k.dispatchEvent(new KeyboardEvent("keyup", C));
      }
    };
    if (typeof PointerEvent < "u") {
      y.onPointerDown = (m) => {
        if (m.button !== 0 || !Ce(m.currentTarget, ye(m.nativeEvent))) return;
        if (Cd(m.nativeEvent)) {
          p.pointerType = "virtual";
          return;
        }
        p.pointerType = m.pointerType;
        let k = !0;
        if (!p.isPressed) {
          p.isPressed = !0, p.isOverTarget = !0, p.activePointerId = m.pointerId, p.target = m.currentTarget, f || Yo(p.target), k = T(m, p.pointerType);
          let P = ye(m.nativeEvent);
          "releasePointerCapture" in P && P.releasePointerCapture(m.pointerId), E($e(m.currentTarget), "pointerup", $, !1), E($e(m.currentTarget), "pointercancel", I, !1);
        }
        k && m.stopPropagation();
      }, y.onMouseDown = (m) => {
        if (Ce(m.currentTarget, ye(m.nativeEvent)) && m.button === 0) {
          if (u) {
            let k = Uo(m.target);
            k && p.disposables.push(k);
          }
          m.stopPropagation();
        }
      }, y.onPointerUp = (m) => {
        !Ce(m.currentTarget, ye(m.nativeEvent)) || p.pointerType === "virtual" || m.button === 0 && !p.isPressed && L(m, p.pointerType || m.pointerType);
      }, y.onPointerEnter = (m) => {
        m.pointerId === p.activePointerId && p.target && !p.isOverTarget && p.pointerType != null && (p.isOverTarget = !0, T(Dt(p.target, m), p.pointerType));
      }, y.onPointerLeave = (m) => {
        m.pointerId === p.activePointerId && p.target && p.isOverTarget && p.pointerType != null && (p.isOverTarget = !1, R(Dt(p.target, m), p.pointerType, !1), H(m));
      };
      let $ = (m) => {
        if (m.pointerId === p.activePointerId && p.isPressed && m.button === 0 && p.target) {
          if (Ce(p.target, ye(m)) && p.pointerType != null) {
            let k = !1, P = setTimeout(() => {
              p.isPressed && p.target instanceof HTMLElement && (k ? S(m) : (tr(p.target), p.target.click()));
            }, 80);
            E(m.currentTarget, "click", () => k = !0, !0), p.disposables.push(() => clearTimeout(P));
          } else S(m);
          p.isOverTarget = !1;
        }
      }, I = (m) => {
        S(m);
      };
      y.onDragStart = (m) => {
        Ce(m.currentTarget, ye(m.nativeEvent)) && S(m);
      };
    } else if (process.env.NODE_ENV === "test") {
      y.onMouseDown = (m) => {
        if (m.button !== 0 || !Ce(m.currentTarget, ye(m.nativeEvent))) return;
        if (p.ignoreEmulatedMouseEvents) {
          m.stopPropagation();
          return;
        }
        if (p.isPressed = !0, p.isOverTarget = !0, p.target = m.currentTarget, p.pointerType = Pn(m.nativeEvent) ? "virtual" : "mouse", Wi(() => T(m, p.pointerType)) && m.stopPropagation(), u) {
          let P = Uo(m.target);
          P && p.disposables.push(P);
        }
        E($e(m.currentTarget), "mouseup", $, !1);
      }, y.onMouseEnter = (m) => {
        if (!Ce(m.currentTarget, ye(m.nativeEvent))) return;
        let k = !0;
        p.isPressed && !p.ignoreEmulatedMouseEvents && p.pointerType != null && (p.isOverTarget = !0, k = T(m, p.pointerType)), k && m.stopPropagation();
      }, y.onMouseLeave = (m) => {
        if (!Ce(m.currentTarget, ye(m.nativeEvent))) return;
        let k = !0;
        p.isPressed && !p.ignoreEmulatedMouseEvents && p.pointerType != null && (p.isOverTarget = !1, k = R(m, p.pointerType, !1), H(m)), k && m.stopPropagation();
      }, y.onMouseUp = (m) => {
        Ce(m.currentTarget, ye(m.nativeEvent)) && !p.ignoreEmulatedMouseEvents && m.button === 0 && !p.isPressed && L(m, p.pointerType || "mouse");
      };
      let $ = (m) => {
        if (m.button === 0) {
          if (p.ignoreEmulatedMouseEvents) {
            p.ignoreEmulatedMouseEvents = !1;
            return;
          }
          p.target && p.target.contains(m.target) && p.pointerType != null || S(m), p.isOverTarget = !1;
        }
      };
      y.onTouchStart = (m) => {
        if (!Ce(m.currentTarget, ye(m.nativeEvent))) return;
        let k = Qd(m.nativeEvent);
        if (!k) return;
        p.activePointerId = k.identifier, p.ignoreEmulatedMouseEvents = !0, p.isOverTarget = !0, p.isPressed = !0, p.target = m.currentTarget, p.pointerType = "touch", f || Yo(p.target), T(Tt(p.target, m), p.pointerType) && m.stopPropagation(), E(at(m.currentTarget), "scroll", I, !0);
      }, y.onTouchMove = (m) => {
        if (!Ce(m.currentTarget, ye(m.nativeEvent))) return;
        if (!p.isPressed) {
          m.stopPropagation();
          return;
        }
        let k = Qo(m.nativeEvent, p.activePointerId), P = !0;
        k && es(k, m.currentTarget) ? !p.isOverTarget && p.pointerType != null && (p.isOverTarget = !0, P = T(Tt(p.target, m), p.pointerType)) : p.isOverTarget && p.pointerType != null && (p.isOverTarget = !1, P = R(Tt(p.target, m), p.pointerType, !1), H(Tt(p.target, m))), P && m.stopPropagation();
      }, y.onTouchEnd = (m) => {
        if (!Ce(m.currentTarget, ye(m.nativeEvent))) return;
        if (!p.isPressed) {
          m.stopPropagation();
          return;
        }
        let k = Qo(m.nativeEvent, p.activePointerId), P = !0;
        k && es(k, m.currentTarget) && p.pointerType != null ? (L(Tt(p.target, m), p.pointerType), P = R(Tt(p.target, m), p.pointerType), M(m.nativeEvent, p.target)) : p.isOverTarget && p.pointerType != null && (P = R(Tt(p.target, m), p.pointerType, !1)), P && m.stopPropagation(), p.isPressed = !1, p.activePointerId = null, p.isOverTarget = !1, p.ignoreEmulatedMouseEvents = !0, p.target && !f && fn(p.target), N();
      }, y.onTouchCancel = (m) => {
        Ce(m.currentTarget, ye(m.nativeEvent)) && (m.stopPropagation(), p.isPressed && S(Tt(p.target, m)));
      };
      let I = (m) => {
        p.isPressed && Ce(ye(m), p.target) && S({
          currentTarget: p.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      y.onDragStart = (m) => {
        Ce(m.currentTarget, ye(m.nativeEvent)) && S(m);
      };
    }
    return y;
  }, [
    E,
    l,
    u,
    N,
    f,
    S,
    H,
    R,
    T,
    L,
    _,
    M
  ]);
  return ue(() => {
    if (!h || process.env.NODE_ENV === "test") return;
    const p = $e(h.current);
    if (!p || !p.head || p.getElementById(Zo)) return;
    const y = p.createElement("style");
    y.id = Zo, y.textContent = `
@layer {
  [${Jo}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), p.head.prepend(y);
  }, [
    h
  ]), ue(() => {
    let p = j.current;
    return () => {
      var y;
      f || fn((y = p.target) !== null && y !== void 0 ? y : void 0);
      for (let b of p.disposables) b();
      p.disposables = [];
    };
  }, [
    f
  ]), {
    isPressed: c || x,
    pressProps: Gt(g, A, {
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
function Qd(e) {
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
function eu(e) {
  let t = 0, r = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? r = e.height / 2 : e.radiusY !== void 0 && (r = e.radiusY), {
    top: e.clientY - r,
    right: e.clientX + t,
    bottom: e.clientY + r,
    left: e.clientX - t
  };
}
function tu(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function es(e, t) {
  let r = t.getBoundingClientRect(), n = eu(e);
  return tu(r, n);
}
function ru(e) {
  return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !so(e);
}
function ts(e, t) {
  return e instanceof HTMLInputElement ? !ga(e, t) : ru(e);
}
const nu = /* @__PURE__ */ new Set([
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
  return e.type === "checkbox" || e.type === "radio" ? t === " " : nu.has(e.type);
}
let or = null, Rn = /* @__PURE__ */ new Set(), yr = /* @__PURE__ */ new Map(), Ht = !1, Ln = !1;
const ou = {
  Tab: !0,
  Escape: !0
};
function ao(e, t) {
  for (let r of Rn) r(e, t);
}
function su(e) {
  return !(e.metaKey || !rr() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Gr(e) {
  Ht = !0, su(e) && (or = "keyboard", ao("keyboard", e));
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
function In(e) {
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
function au(e) {
  const t = $e(e);
  let r;
  return t.readyState !== "loading" ? In(e) : (r = () => {
    In(e);
  }, t.addEventListener("DOMContentLoaded", r)), () => va(e, r);
}
typeof document < "u" && au();
function xa() {
  return or !== "pointer";
}
function ya() {
  return or;
}
const iu = /* @__PURE__ */ new Set([
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
function lu(e, t, r) {
  let n = $e(r == null ? void 0 : r.target);
  const o = typeof window < "u" ? at(r == null ? void 0 : r.target).HTMLInputElement : HTMLInputElement, s = typeof window < "u" ? at(r == null ? void 0 : r.target).HTMLTextAreaElement : HTMLTextAreaElement, a = typeof window < "u" ? at(r == null ? void 0 : r.target).HTMLElement : HTMLElement, l = typeof window < "u" ? at(r == null ? void 0 : r.target).KeyboardEvent : KeyboardEvent;
  return e = e || n.activeElement instanceof o && !iu.has(n.activeElement.type) || n.activeElement instanceof s || n.activeElement instanceof a && n.activeElement.isContentEditable, !(e && t === "keyboard" && r instanceof l && !ou[r.key]);
}
function cu(e, t, r) {
  In(), ue(() => {
    let n = (o, s) => {
      lu(!!(r != null && r.isTextInput), o, s) && e(xa());
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
function du(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: rs(e.onKeyDown),
      onKeyUp: rs(e.onKeyUp)
    }
  };
}
let uu = /* @__PURE__ */ ae.createContext(null);
function fu(e) {
  let t = mt(uu) || {};
  sa(t, e);
  let { ref: r, ...n } = t;
  return n;
}
function pu(e, t) {
  let { focusProps: r } = wa(e), { keyboardProps: n } = du(e), o = Gt(r, n), s = fu(t), a = e.isDisabled ? {} : s, l = re(e.autoFocus);
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
function gu({ children: e }) {
  let t = De(() => ({
    register: () => {
    }
  }), []);
  return /* @__PURE__ */ ae.createElement(oo.Provider, {
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
    const h = $e(f.target), g = Qe(h);
    if (!s.current.isFocusWithin && g === ye(f.nativeEvent)) {
      n && n(f), o && o(!0), s.current.isFocusWithin = !0, u(f);
      let x = f.currentTarget;
      a(h, "focus", (v) => {
        if (s.current.isFocusWithin && !Ce(x, v.target)) {
          let j = new h.defaultView.FocusEvent("blur", {
            relatedTarget: v.target
          });
          ua(j, x);
          let E = no(j);
          c(E);
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
function An() {
  Wr = !0, setTimeout(() => {
    Wr = !1;
  }, 50);
}
function ns(e) {
  e.pointerType === "touch" && An();
}
function mu() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", ns) : process.env.NODE_ENV === "test" && document.addEventListener("touchend", An), gn++, () => {
      gn--, !(gn > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", ns) : process.env.NODE_ENV === "test" && document.removeEventListener("touchend", An));
    };
}
function bu(e) {
  let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, isDisabled: o } = e, [s, a] = te(!1), l = re({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  ue(mu, []);
  let { addGlobalListener: c, removeAllGlobalListeners: u } = to(), { hoverProps: d, triggerHoverEnd: f } = De(() => {
    let h = (v, j) => {
      if (l.pointerType = j, o || j === "touch" || l.isHovered || !v.currentTarget.contains(v.target)) return;
      l.isHovered = !0;
      let E = v.currentTarget;
      l.target = E, c($e(v.target), "pointerover", (N) => {
        l.isHovered && l.target && !Ce(l.target, N.target) && g(N, N.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: E,
        pointerType: j
      }), r && r(!0), a(!0);
    }, g = (v, j) => {
      let E = l.target;
      l.pointerType = "", l.target = null, !(j === "touch" || !l.isHovered || !E) && (l.isHovered = !1, u(), n && n({
        type: "hoverend",
        target: E,
        pointerType: j
      }), r && r(!1), a(!1));
    }, x = {};
    return typeof PointerEvent < "u" ? (x.onPointerEnter = (v) => {
      Wr && v.pointerType === "mouse" || h(v, v.pointerType);
    }, x.onPointerLeave = (v) => {
      !o && v.currentTarget.contains(v.target) && g(v, v.pointerType);
    }) : process.env.NODE_ENV === "test" && (x.onTouchStart = () => {
      l.ignoreEmulatedMouseEvents = !0;
    }, x.onMouseEnter = (v) => {
      !l.ignoreEmulatedMouseEvents && !Wr && h(v, "mouse"), l.ignoreEmulatedMouseEvents = !1;
    }, x.onMouseLeave = (v) => {
      !o && v.currentTarget.contains(v.target) && g(v, "mouse");
    }), {
      hoverProps: x,
      triggerHoverEnd: g
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
function hu(e) {
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
      let f = (g) => {
        c.ignoreEmulatedMouseEvents ? c.ignoreEmulatedMouseEvents = !1 : c.isPointerDown && Lr(g, t) && l(g), c.isPointerDown = !1;
      }, h = (g) => {
        c.ignoreEmulatedMouseEvents = !0, c.isPointerDown && Lr(g, t) && l(g), c.isPointerDown = !1;
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
const os = /* @__PURE__ */ ae.createContext(null), On = "react-aria-focus-scope-restore";
let Pe = null;
function vu(e) {
  let { children: t, contain: r, restoreFocus: n, autoFocus: o } = e, s = re(null), a = re(null), l = re([]), { parentNode: c } = mt(os) || {}, u = De(() => new _n({
    scopeRef: l
  }), [
    l
  ]);
  Ae(() => {
    let h = c || Me.root;
    if (Me.getTreeNode(h.scopeRef) && Pe && !Kr(Pe, h.scopeRef)) {
      let g = Me.getTreeNode(Pe);
      g && (h = g);
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
    let g = (h = s.current) === null || h === void 0 ? void 0 : h.nextSibling, x = [], v = (j) => j.stopPropagation();
    for (; g && g !== a.current; )
      x.push(g), g.addEventListener(On, v), g = g.nextSibling;
    return l.current = x, () => {
      for (let j of x) j.removeEventListener(On, v);
    };
  }, [
    t
  ]), ku(l, n, r), yu(l, r), Nu(l, n, r), $u(l, o), ue(() => {
    const h = Qe($e(l.current ? l.current[0] : void 0));
    let g = null;
    if (lt(h, l.current)) {
      for (let x of Me.traverse()) x.scopeRef && lt(h, x.scopeRef.current) && (g = x);
      g === Me.getTreeNode(l) && (Pe = g.scopeRef);
    }
  }, [
    l
  ]), Ae(() => () => {
    var h, g, x;
    let v = (x = (g = Me.getTreeNode(l)) === null || g === void 0 || (h = g.parent) === null || h === void 0 ? void 0 : h.scopeRef) !== null && x !== void 0 ? x : null;
    (l === Pe || Kr(l, Pe)) && (!v || Me.getTreeNode(v)) && (Pe = v), Me.removeTreeNode(l);
  }, [
    l
  ]);
  let d = De(() => xu(l), []), f = De(() => ({
    focusManager: d,
    parentNode: u
  }), [
    u,
    d
  ]);
  return /* @__PURE__ */ ae.createElement(os.Provider, {
    value: f
  }, /* @__PURE__ */ ae.createElement("span", {
    "data-focus-scope-start": !0,
    hidden: !0,
    ref: s
  }), t, /* @__PURE__ */ ae.createElement("span", {
    "data-focus-scope-end": !0,
    hidden: !0,
    ref: a
  }));
}
function xu(e) {
  return {
    focusNext(t = {}) {
      let r = e.current, { from: n, tabbable: o, wrap: s, accept: a } = t;
      var l;
      let c = n || Qe($e((l = r[0]) !== null && l !== void 0 ? l : void 0)), u = r[0].previousElementSibling, d = Vt(r), f = It(d, {
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
      let c = n || Qe($e((l = r[0]) !== null && l !== void 0 ? l : void 0)), u = r[r.length - 1].nextElementSibling, d = Vt(r), f = It(d, {
        tabbable: o,
        accept: a
      }, r);
      f.currentNode = lt(c, r) ? c : u;
      let h = f.previousNode();
      return !h && s && (f.currentNode = u, h = f.previousNode()), h && $t(h, !0), h;
    },
    focusFirst(t = {}) {
      let r = e.current, { tabbable: n, accept: o } = t, s = Vt(r), a = It(s, {
        tabbable: n,
        accept: o
      }, r);
      a.currentNode = r[0].previousElementSibling;
      let l = a.nextNode();
      return l && $t(l, !0), l;
    },
    focusLast(t = {}) {
      let r = e.current, { tabbable: n, accept: o } = t, s = Vt(r), a = It(s, {
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
function yu(e, t) {
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
      let h = Vt(f), g = It(h, {
        tabbable: !0
      }, f);
      if (!d) return;
      g.currentNode = d;
      let x = u.shiftKey ? g.previousNode() : g.nextNode();
      x || (g.currentNode = u.shiftKey ? f[f.length - 1].nextElementSibling : f[0].previousElementSibling, x = u.shiftKey ? g.previousNode() : g.nextNode()), u.preventDefault(), x && $t(x, !0);
    }, l = (u) => {
      (!Pe || Kr(Pe, e)) && lt(ye(u), e.current) ? (Pe = e, r.current = ye(u)) : hr(e) && !Lt(ye(u), e) ? r.current ? r.current.focus() : Pe && Pe.current && Mn(Pe.current) : hr(e) && (r.current = ye(u));
    }, c = (u) => {
      n.current && cancelAnimationFrame(n.current), n.current = requestAnimationFrame(() => {
        let d = ya(), f = (d === "virtual" || d === null) && eo() && na(), h = Qe(s);
        if (!f && h && hr(e) && !Lt(h, e)) {
          Pe = e;
          let x = ye(u);
          if (x && x.isConnected) {
            var g;
            r.current = x, (g = r.current) === null || g === void 0 || g.focus();
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
function wu(e) {
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
  let r = e[0].previousElementSibling, n = Vt(e), o = It(n, {
    tabbable: t
  }, e);
  o.currentNode = r;
  let s = o.nextNode();
  return t && !s && (n = Vt(e), o = It(n, {
    tabbable: !1
  }, e), o.currentNode = r, s = o.nextNode()), s;
}
function Mn(e, t = !0) {
  $t(ka(e, t));
}
function $u(e, t) {
  const r = ae.useRef(t);
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
function ku(e, t, r) {
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
function Nu(e, t, r) {
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
      let u = c.nodeToRestore, d = It(o.body, {
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
function It(e, t, r) {
  let n = t != null && t.tabbable ? Id : ia, o = (e == null ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null, s = $e(o), a = hd(s, e || s, NodeFilter.SHOW_ELEMENT, {
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
  }), [s, a] = te(!1), [l, c] = te(() => o.current.isFocused && o.current.isFocusVisible), u = pe(() => c(o.current.isFocused && o.current.isFocusVisible), []), d = pe((g) => {
    o.current.isFocused = g, a(g), u();
  }, [
    u
  ]);
  cu((g) => {
    o.current.isFocusVisible = g, u();
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
function Eu(e, t, r) {
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
const mn = typeof document < "u" && window.visualViewport, ju = /* @__PURE__ */ new Set([
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
let Ir = 0, bn;
function Pu(e = {}) {
  let { isDisabled: t } = e;
  Ae(() => {
    if (!t)
      return Ir++, Ir === 1 && (Zr() ? bn = Su() : bn = Tu()), () => {
        Ir--, Ir === 0 && bn();
      };
  }, [
    t
  ]);
}
function Tu() {
  let e = window.innerWidth - document.documentElement.clientWidth;
  return kr(e > 0 && // Use scrollbar-gutter when supported because it also works for fixed positioned elements.
  ("scrollbarGutter" in document.documentElement.style ? Bt(document.documentElement, "scrollbarGutter", "stable") : Bt(document.documentElement, "paddingRight", `${e}px`)), Bt(document.documentElement, "overflow", "hidden"));
}
function Su() {
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
    Cu(d) && (l(), d.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
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
function Cu(e) {
  return e instanceof HTMLInputElement && !ju.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
const Ru = /* @__PURE__ */ Ts({});
function Lu() {
  var e;
  return (e = mt(Ru)) !== null && e !== void 0 ? e : {};
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
var Ia = {};
Ia = {
  dismiss: "Lõpeta"
};
var Aa = {};
Aa = {
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
  "et-EE": Ia,
  "fi-FI": Aa,
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
function Iu(e = {}) {
  let { style: t, isFocusable: r } = e, [n, o] = te(!1), { focusWithinProps: s } = io({
    isDisabled: !r,
    onFocusWithinChange: (l) => o(l)
  }), a = De(() => n ? t : t ? {
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
function Au(e) {
  let { children: t, elementType: r = "div", isFocusable: n, style: o, ...s } = e, { visuallyHiddenProps: a } = Iu(e);
  return /* @__PURE__ */ ae.createElement(r, Gt(s, a), t);
}
function Ou(e) {
  return e && e.__esModule ? e.default : e;
}
function cs(e) {
  let { onDismiss: t, ...r } = e, n = ad(Ou(si), "@react-aria/overlays"), o = Td(r, n.format("dismiss")), s = () => {
    t && t();
  };
  return /* @__PURE__ */ ae.createElement(Au, null, /* @__PURE__ */ ae.createElement("button", {
    ...o,
    tabIndex: -1,
    onClick: s,
    style: {
      width: 1,
      height: 1
    }
  }));
}
const ai = /* @__PURE__ */ ae.createContext(null);
function Mu(e) {
  let t = Zn(), { portalContainer: r = t ? null : document.body, isExiting: n } = e, [o, s] = te(!1), a = De(() => ({
    contain: o,
    setContain: s
  }), [
    o,
    s
  ]), { getContainer: l } = Lu();
  if (!e.portalContainer && l && (r = l()), !r) return null;
  let c = e.children;
  return e.disableFocusManagement || (c = /* @__PURE__ */ ae.createElement(vu, {
    restoreFocus: !0,
    contain: (e.shouldContainFocus || o) && !n
  }, c)), c = /* @__PURE__ */ ae.createElement(ai.Provider, {
    value: a
  }, /* @__PURE__ */ ae.createElement(gu, null, c)), /* @__PURE__ */ Hi.createPortal(c, r);
}
function _u() {
  let e = mt(ai), t = e == null ? void 0 : e.setContain;
  Ae(() => {
    t == null || t(!0);
  }, [
    t
  ]);
}
function ii(e) {
  return Re(e);
}
var Du = (e, t, r = !0) => {
  if (!t)
    return [e, {}];
  const n = t.reduce((o, s) => s in e ? { ...o, [s]: e[s] } : o, {});
  return r ? [Object.keys(e).filter((s) => !t.includes(s)).reduce((s, a) => ({ ...s, [a]: e[a] }), {}), n] : [e, n];
}, ds = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ze = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, zu = (e, t) => JSON.stringify(e) === JSON.stringify(t);
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
const co = "-", Fu = (e) => {
  const t = Bu(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      const l = a.split(co);
      return l[0] === "" && l.length !== 1 && l.shift(), fi(l, t) || Vu(a);
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
}, fs = /^\[(.+)\]$/, Vu = (e) => {
  if (fs.test(e)) {
    const t = fs.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Bu = (e) => {
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
      if (Gu(o)) {
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
}, Gu = (e) => e.isThemeGetter, Hu = (e) => {
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
}, zn = "!", Fn = ":", Wu = Fn.length, Ku = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (o) => {
    const s = [];
    let a = 0, l = 0, c = 0, u;
    for (let x = 0; x < o.length; x++) {
      let v = o[x];
      if (a === 0 && l === 0) {
        if (v === Fn) {
          s.push(o.slice(c, x)), c = x + Wu;
          continue;
        }
        if (v === "/") {
          u = x;
          continue;
        }
      }
      v === "[" ? a++ : v === "]" ? a-- : v === "(" ? l++ : v === ")" && l--;
    }
    const d = s.length === 0 ? o : o.substring(c), f = Uu(d), h = f !== d, g = u && u > c ? u - c : void 0;
    return {
      modifiers: s,
      hasImportantModifier: h,
      baseClassName: f,
      maybePostfixModifierPosition: g
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
}, Uu = (e) => e.endsWith(zn) ? e.substring(0, e.length - 1) : e.startsWith(zn) ? e.substring(1) : e, Yu = (e) => {
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
}, qu = (e) => ({
  cache: Hu(e.cacheSize),
  parseClassName: Ku(e),
  sortModifiers: Yu(e),
  ...Fu(e)
}), Xu = /\s+/, Zu = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, a = [], l = e.trim().split(Xu);
  let c = "";
  for (let u = l.length - 1; u >= 0; u -= 1) {
    const d = l[u], {
      isExternal: f,
      modifiers: h,
      hasImportantModifier: g,
      baseClassName: x,
      maybePostfixModifierPosition: v
    } = r(d);
    if (f) {
      c = d + (c.length > 0 ? " " + c : c);
      continue;
    }
    let j = !!v, E = n(j ? x.substring(0, v) : x);
    if (!E) {
      if (!j) {
        c = d + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (E = n(x), !E) {
        c = d + (c.length > 0 ? " " + c : c);
        continue;
      }
      j = !1;
    }
    const N = s(h).join(":"), T = g ? N + zn : N, R = T + E;
    if (a.includes(R))
      continue;
    a.push(R);
    const L = o(E, j);
    for (let S = 0; S < L.length; ++S) {
      const H = L[S];
      a.push(T + H);
    }
    c = d + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function Ju() {
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
    return r = qu(u), n = r.cache.get, o = r.cache.set, s = l, l(c);
  }
  function l(c) {
    const u = n(c);
    if (u)
      return u;
    const d = Zu(c, r);
    return o(c, d), d;
  }
  return function() {
    return s(Ju.apply(null, arguments));
  };
}
const Be = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, gi = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, mi = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Qu = /^\d+\/\d+$/, ef = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, tf = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, rf = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, nf = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, of = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Yt = (e) => Qu.test(e), me = (e) => !!e && !Number.isNaN(Number(e)), zt = (e) => !!e && Number.isInteger(Number(e)), gs = (e) => e.endsWith("%") && me(e.slice(0, -1)), St = (e) => ef.test(e), sf = () => !0, af = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  tf.test(e) && !rf.test(e)
), uo = () => !1, lf = (e) => nf.test(e), cf = (e) => of.test(e), df = (e) => !J(e) && !Q(e), uf = (e) => sr(e, vi, uo), J = (e) => gi.test(e), Ft = (e) => sr(e, xi, af), hn = (e) => sr(e, $f, me), ff = (e) => sr(e, bi, uo), pf = (e) => sr(e, hi, cf), gf = (e) => sr(e, uo, lf), Q = (e) => mi.test(e), Ar = (e) => ar(e, xi), mf = (e) => ar(e, kf), bf = (e) => ar(e, bi), hf = (e) => ar(e, vi), vf = (e) => ar(e, hi), xf = (e) => ar(e, Nf, !0), sr = (e, t, r) => {
  const n = gi.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, ar = (e, t, r = !1) => {
  const n = mi.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, bi = (e) => e === "position", yf = /* @__PURE__ */ new Set(["image", "url"]), hi = (e) => yf.has(e), wf = /* @__PURE__ */ new Set(["length", "size", "percentage"]), vi = (e) => wf.has(e), xi = (e) => e === "length", $f = (e) => e === "number", kf = (e) => e === "family-name", Nf = (e) => e === "shadow", Bn = () => {
  const e = Be("color"), t = Be("font"), r = Be("text"), n = Be("font-weight"), o = Be("tracking"), s = Be("leading"), a = Be("breakpoint"), l = Be("container"), c = Be("spacing"), u = Be("radius"), d = Be("shadow"), f = Be("inset-shadow"), h = Be("drop-shadow"), g = Be("blur"), x = Be("perspective"), v = Be("aspect"), j = Be("ease"), E = Be("animate"), N = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], T = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], R = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", "contain", "none"], S = () => [Q, J, c], H = () => [Yt, "full", "auto", ...S()], _ = () => [zt, "none", "subgrid", Q, J], M = () => ["auto", {
    span: ["full", zt, Q, J]
  }, Q, J], A = () => [zt, "auto", Q, J], p = () => ["auto", "min", "max", "fr", Q, J], y = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], b = () => ["start", "end", "center", "stretch"], $ = () => ["auto", ...S()], I = () => [Yt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...S()], m = () => [e, Q, J], k = () => [gs, Ft], P = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    Q,
    J
  ], C = () => ["", me, Ar, Ft], U = () => ["solid", "dashed", "dotted", "double"], F = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    g,
    Q,
    J
  ], ne = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Q, J], B = () => ["none", me, Q, J], K = () => ["none", me, Q, J], q = () => [me, Q, J], D = () => [Yt, "full", ...S()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [St],
      breakpoint: [St],
      color: [sf],
      container: [St],
      "drop-shadow": [St],
      ease: ["in", "out", "in-out"],
      font: [df],
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
        object: [...T(), J, Q]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: R()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": R()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": R()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: L()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": L()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": L()
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
        inset: H()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": H()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": H()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: H()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: H()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: H()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: H()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: H()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: H()
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
        basis: [Yt, "full", "auto", l, ...S()]
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
        "grid-cols": _()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: M()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": A()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": A()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": _()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: M()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": A()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": A()
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
        gap: S()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": S()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": S()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...y(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...b(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...b()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...y()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...b(), "baseline"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...b(), "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": y()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...b(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...b()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: S()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: S()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: S()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: S()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: S()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: S()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: S()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: S()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: S()
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
        "space-x": S()
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
        "space-y": S()
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
        size: I()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...I()]
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
          ...I()
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
          ...I()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...I()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...I()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...I()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Ar, Ft]
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
        font: [mf, J, t]
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
          ...S()
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
        placeholder: m()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: m()
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
        decoration: m()
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
        indent: S()
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
        bg: [...T(), bf, ff]
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
        bg: ["auto", "cover", "contain", hf, uf]
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
        }, vf, pf]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: m()
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
        from: m()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: m()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: m()
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
        border: C()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": C()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": C()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": C()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": C()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": C()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": C()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": C()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": C()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": C()
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
        "divide-y": C()
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
        border: m()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": m()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": m()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": m()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": m()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": m()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": m()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": m()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": m()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: m()
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
        outline: ["", me, Ar, Ft]
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
          xf,
          gf
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: m()
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
        "inset-shadow": m()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: C()
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
        ring: m()
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
        "ring-offset": m()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": C()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": m()
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
        blur: W()
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
        "backdrop-blur": W()
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
        "border-spacing": S()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": S()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": S()
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
        ease: ["linear", "initial", j, Q, J]
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
        animate: ["none", E, Q, J]
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
        perspective: [x, Q, J]
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
        scale: K()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": K()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": K()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": K()
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
        translate: D()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": D()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": D()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": D()
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
        accent: m()
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
        caret: m()
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
        fill: ["none", ...m()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [me, Ar, Ft, hn]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...m()]
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
}, Ef = (e, {
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
}, jf = (e, ...t) => typeof e == "function" ? Vn(Bn, e, ...t) : Vn(() => Ef(Bn(), e), ...t), Pf = /* @__PURE__ */ Vn(Bn);
var Tf = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, wi = (e) => e || void 0, Er = (...e) => wi(ci(e).filter(Boolean).join(" ")), vn = null, wt = {}, Gn = !1, pr = (...e) => (t) => t.twMerge ? ((!vn || Gn) && (Gn = !1, vn = Ze(wt) ? Pf : jf({ ...wt, extend: { theme: wt.theme, classGroups: wt.classGroups, conflictingClassGroupModifiers: wt.conflictingClassGroupModifiers, conflictingClassGroups: wt.conflictingClassGroups, ...wt.extend } })), wi(vn(Er(e)))) : Er(e), ms = (e, t) => {
  for (let r in t) e.hasOwnProperty(r) ? e[r] = Er(e[r], t[r]) : e[r] = t[r];
  return e;
}, Sf = (e, t) => {
  let { extend: r = null, slots: n = {}, variants: o = {}, compoundVariants: s = [], compoundSlots: a = [], defaultVariants: l = {} } = e, c = { ...Tf, ...t }, u = r != null && r.base ? Er(r.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, d = r != null && r.variants && !Ze(r.variants) ? ui(o, r.variants) : o, f = r != null && r.defaultVariants && !Ze(r.defaultVariants) ? { ...r.defaultVariants, ...l } : l;
  !Ze(c.twMergeConfig) && !zu(c.twMergeConfig, wt) && (Gn = !0, wt = c.twMergeConfig);
  let h = Ze(r == null ? void 0 : r.slots), g = Ze(n) ? {} : { base: Er(e == null ? void 0 : e.base, h && (r == null ? void 0 : r.base)), ...n }, x = h ? g : ms({ ...r == null ? void 0 : r.slots }, Ze(g) ? { base: e == null ? void 0 : e.base } : g), v = Ze(r == null ? void 0 : r.compoundVariants) ? s : di(r == null ? void 0 : r.compoundVariants, s), j = (N) => {
    if (Ze(d) && Ze(n) && h) return pr(u, N == null ? void 0 : N.class, N == null ? void 0 : N.className)(c);
    if (v && !Array.isArray(v)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof v}`);
    if (a && !Array.isArray(a)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof a}`);
    let T = (y, b, $ = [], I) => {
      let m = $;
      if (typeof b == "string") m = m.concat(us(b).split(" ").map((k) => `${y}:${k}`));
      else if (Array.isArray(b)) m = m.concat(b.reduce((k, P) => k.concat(`${y}:${P}`), []));
      else if (typeof b == "object" && typeof I == "string") {
        for (let k in b) if (b.hasOwnProperty(k) && k === I) {
          let P = b[k];
          if (P && typeof P == "string") {
            let C = us(P);
            m[I] ? m[I] = m[I].concat(C.split(" ").map((U) => `${y}:${U}`)) : m[I] = C.split(" ").map((U) => `${y}:${U}`);
          } else Array.isArray(P) && P.length > 0 && (m[I] = P.reduce((C, U) => C.concat(`${y}:${U}`), []));
        }
      }
      return m;
    }, R = (y, b = d, $ = null, I = null) => {
      var m;
      let k = b[y];
      if (!k || Ze(k)) return null;
      let P = (m = I == null ? void 0 : I[y]) != null ? m : N == null ? void 0 : N[y];
      if (P === null) return null;
      let C = ds(P), U = Array.isArray(c.responsiveVariants) && c.responsiveVariants.length > 0 || c.responsiveVariants === !0, F = f == null ? void 0 : f[y], W = [];
      if (typeof C == "object" && U) for (let [K, q] of Object.entries(C)) {
        let D = k[q];
        if (K === "initial") {
          F = q;
          continue;
        }
        Array.isArray(c.responsiveVariants) && !c.responsiveVariants.includes(K) || (W = T(K, D, W, $));
      }
      let ne = C != null && typeof C != "object" ? C : ds(F), B = k[ne || "false"];
      return typeof W == "object" && typeof $ == "string" && W[$] ? ms(W, B) : W.length > 0 ? (W.push(B), $ === "base" ? W.join(" ") : W) : B;
    }, L = () => d ? Object.keys(d).map((y) => R(y, d)) : null, S = (y, b) => {
      if (!d || typeof d != "object") return null;
      let $ = new Array();
      for (let I in d) {
        let m = R(I, d, y, b), k = y === "base" && typeof m == "string" ? m : m && m[y];
        k && ($[$.length] = k);
      }
      return $;
    }, H = {};
    for (let y in N) N[y] !== void 0 && (H[y] = N[y]);
    let _ = (y, b) => {
      var $;
      let I = typeof (N == null ? void 0 : N[y]) == "object" ? { [y]: ($ = N[y]) == null ? void 0 : $.initial } : {};
      return { ...f, ...H, ...I, ...b };
    }, M = (y = [], b) => {
      let $ = [];
      for (let { class: I, className: m, ...k } of y) {
        let P = !0;
        for (let [C, U] of Object.entries(k)) {
          let F = _(C, b)[C];
          if (Array.isArray(U)) {
            if (!U.includes(F)) {
              P = !1;
              break;
            }
          } else {
            let W = (ne) => ne == null || ne === !1;
            if (W(U) && W(F)) continue;
            if (F !== U) {
              P = !1;
              break;
            }
          }
        }
        P && (I && $.push(I), m && $.push(m));
      }
      return $;
    }, A = (y) => {
      let b = M(v, y);
      if (!Array.isArray(b)) return b;
      let $ = {};
      for (let I of b) if (typeof I == "string" && ($.base = pr($.base, I)(c)), typeof I == "object") for (let [m, k] of Object.entries(I)) $[m] = pr($[m], k)(c);
      return $;
    }, p = (y) => {
      if (a.length < 1) return null;
      let b = {};
      for (let { slots: $ = [], class: I, className: m, ...k } of a) {
        if (!Ze(k)) {
          let P = !0;
          for (let C of Object.keys(k)) {
            let U = _(C, y)[C];
            if (U === void 0 || (Array.isArray(k[C]) ? !k[C].includes(U) : k[C] !== U)) {
              P = !1;
              break;
            }
          }
          if (!P) continue;
        }
        for (let P of $) b[P] = b[P] || [], b[P].push([I, m]);
      }
      return b;
    };
    if (!Ze(n) || !h) {
      let y = {};
      if (typeof x == "object" && !Ze(x)) for (let b of Object.keys(x)) y[b] = ($) => {
        var I, m;
        return pr(x[b], S(b, $), ((I = A($)) != null ? I : [])[b], ((m = p($)) != null ? m : [])[b], $ == null ? void 0 : $.class, $ == null ? void 0 : $.className)(c);
      };
      return y;
    }
    return pr(u, L(), M(v), N == null ? void 0 : N.class, N == null ? void 0 : N.className)(c);
  }, E = () => {
    if (!(!d || typeof d != "object")) return Object.keys(d);
  };
  return j.variantKeys = E(), j.extend = r, j.base = u, j.slots = x, j.variants = d, j.defaultVariants = f, j.compoundSlots = a, j.compoundVariants = v, j;
}, Cf = {
  default: "bg-default text-default-foreground",
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  success: "bg-success text-success-foreground",
  warning: "bg-warning text-warning-foreground",
  danger: "bg-danger text-danger-foreground",
  foreground: "bg-foreground text-background"
}, Rf = {
  default: "shadow-lg shadow-default/50 bg-default text-default-foreground",
  primary: "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
  secondary: "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
  success: "shadow-lg shadow-success/40 bg-success text-success-foreground",
  warning: "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
  danger: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground"
}, Lf = {
  default: "bg-transparent border-default text-foreground",
  primary: "bg-transparent border-primary text-primary",
  secondary: "bg-transparent border-secondary text-secondary",
  success: "bg-transparent border-success text-success",
  warning: "bg-transparent border-warning text-warning",
  danger: "bg-transparent border-danger text-danger"
}, If = {
  default: "bg-default/40 text-default-700",
  primary: "bg-primary/20 text-primary-600",
  secondary: "bg-secondary/20 text-secondary-600",
  success: "bg-success/20 text-success-700 dark:text-success",
  warning: "bg-warning/20 text-warning-700 dark:text-warning",
  danger: "bg-danger/20 text-danger-600 dark:text-danger-500"
}, Af = {
  default: "border-default bg-default-100 text-default-foreground",
  primary: "border-default bg-default-100 text-primary",
  secondary: "border-default bg-default-100 text-secondary",
  success: "border-default bg-default-100 text-success",
  warning: "border-default bg-default-100 text-warning",
  danger: "border-default bg-default-100 text-danger"
}, Of = {
  default: "bg-transparent text-default-foreground",
  primary: "bg-transparent text-primary",
  secondary: "bg-transparent text-secondary",
  success: "bg-transparent text-success",
  warning: "bg-transparent text-warning",
  danger: "bg-transparent text-danger"
}, Mf = {
  default: "border-default text-default-foreground",
  primary: "border-primary text-primary",
  secondary: "border-secondary text-secondary",
  success: "border-success text-success",
  warning: "border-warning text-warning",
  danger: "border-danger text-danger"
}, se = {
  solid: Cf,
  shadow: Rf,
  bordered: Lf,
  flat: If,
  faded: Af,
  light: Of,
  ghost: Mf
}, _f = {
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
}, Df = {
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
}, zf = {
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
}, Ff = {
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
}, ft = "250ms", Vf = {
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
}, Bf = {
  ...Df,
  ...Vf,
  ...zf,
  ...Ff,
  ..._f
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
    transition: Object.keys(Bf).filter((e) => e.includes(".transition")).map((e) => e.replace(".", ""))
    // remove the dot from the key, .transition-background -> transition-background
  }
}, Jr = (e, t) => {
  var r, n, o;
  return Sf(e, {
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
}), Gf = Jr({
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
function Hf(e) {
  return Re(e);
}
var Wf = (e, t, r = !0) => {
  if (!t)
    return [e, {}];
  const n = t.reduce((o, s) => s in e ? { ...o, [s]: e[s] } : o, {});
  return r ? [Object.keys(e).filter((s) => !t.includes(s)).reduce((s, a) => ({ ...s, [a]: e[a] }), {}), n] : [e, n];
}, Kf = (e) => {
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
}, Uf = (e) => ({
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
})[e], Yf = (e, t) => {
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
function qf(e, t = document.body) {
  let r = new Set(e), n = /* @__PURE__ */ new Set(), o = (c) => {
    for (let h of c.querySelectorAll(
      "[data-live-announcer], [data-react-aria-top-layer]"
    ))
      r.add(h);
    let u = (h) => {
      if (r.has(h) || h.parentElement && n.has(h.parentElement) && h.parentElement.getAttribute("role") !== "row")
        return NodeFilter.FILTER_REJECT;
      for (let g of r)
        if (h.contains(g))
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
function Xf(e) {
  let t = Je[Je.length - 1];
  if (t && !t.visibleNodes.has(e))
    return t.visibleNodes.add(e), () => {
      t.visibleNodes.delete(e);
    };
}
var Zf = globalThis != null && globalThis.document ? Ps : ue, [Zp, Jf] = qn({
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
    target: g,
    rel: x,
    type: v = "button",
    allowTextSelectionOnPress: j
  } = e, E;
  r === "button" ? E = {
    type: v,
    disabled: n
  } : E = {
    role: "button",
    href: r === "a" && !n ? h : void 0,
    target: r === "a" ? g : void 0,
    type: r === "input" ? v : void 0,
    disabled: r === "input" ? n : void 0,
    "aria-disabled": !n || r === "input" ? void 0 : n,
    rel: r === "a" ? x : void 0
  };
  let { pressProps: N, isPressed: T } = Jd({
    onClick: f,
    onPressStart: s,
    onPressEnd: a,
    onPressUp: l,
    onPressChange: c,
    onPress: o,
    isDisabled: n,
    preventFocusOnPress: u,
    allowTextSelectionOnPress: j,
    ref: t
  }), { focusableProps: R } = pu(e, t);
  d && (R.tabIndex = n ? -1 : R.tabIndex);
  let L = Gt(
    R,
    N,
    ea(e, { labelable: !0 })
  );
  return {
    isPressed: T,
    // Used to indicate press state for visual
    buttonProps: Gt(E, L, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      "aria-current": e["aria-current"]
    })
  };
}
var Qf = () => import("./index-SfZMAM5z.mjs").then((e) => e.default), Ni = (e) => {
  const { ripples: t = [], motionProps: r, color: n = "currentColor", style: o, onClear: s } = e;
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: t.map((a) => {
    const l = Rc(0.01 * a.size, 0.2, a.size > 100 ? 0.75 : 0.5);
    return /* @__PURE__ */ i.jsx(xn, { features: Qf, children: /* @__PURE__ */ i.jsx(Ss, { mode: "popLayout", children: /* @__PURE__ */ i.jsx(
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
var ep = Ni;
function tp(e = {}) {
  const [t, r] = te([]), n = pe((s) => {
    const a = s.target, l = Math.max(a.clientWidth, a.clientHeight);
    r((c) => [
      ...c,
      {
        key: Cc(c.length.toString()),
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
function rp(e) {
  var t, r, n, o, s, a, l, c, u;
  const d = Jf(), f = Xn(), h = !!d, {
    ref: g,
    as: x,
    children: v,
    startContent: j,
    endContent: E,
    autoFocus: N,
    className: T,
    spinner: R,
    isLoading: L = !1,
    disableRipple: S = !1,
    fullWidth: H = (t = d == null ? void 0 : d.fullWidth) != null ? t : !1,
    radius: _ = d == null ? void 0 : d.radius,
    size: M = (r = d == null ? void 0 : d.size) != null ? r : "md",
    color: A = (n = d == null ? void 0 : d.color) != null ? n : "default",
    variant: p = (o = d == null ? void 0 : d.variant) != null ? o : "solid",
    disableAnimation: y = (a = (s = d == null ? void 0 : d.disableAnimation) != null ? s : f == null ? void 0 : f.disableAnimation) != null ? a : !1,
    isDisabled: b = (l = d == null ? void 0 : d.isDisabled) != null ? l : !1,
    isIconOnly: $ = (c = d == null ? void 0 : d.isIconOnly) != null ? c : !1,
    spinnerPlacement: I = "start",
    onPress: m,
    onClick: k,
    ...P
  } = e, C = x || "button", U = typeof C == "string", F = Us(g), W = (u = S || (f == null ? void 0 : f.disableRipple)) != null ? u : y, { isFocusVisible: ne, isFocused: B, focusProps: K } = Na({
    autoFocus: N
  }), q = b || L, D = De(
    () => Gf({
      size: M,
      color: A,
      variant: p,
      radius: _,
      fullWidth: H,
      isDisabled: q,
      isInGroup: h,
      disableAnimation: y,
      isIconOnly: $,
      className: T
    }),
    [
      M,
      A,
      p,
      _,
      H,
      q,
      h,
      $,
      y,
      T
    ]
  ), { onPress: X, onClear: xe, ripples: fe } = tp(), Ue = pe(
    (Fe) => {
      W || q || y || F.current && X(Fe);
    },
    [W, q, y, F, X]
  ), { buttonProps: He, isPressed: Se } = ki(
    {
      elementType: x,
      isDisabled: q,
      onPress: Xs(m, Ue),
      onClick: k,
      ...P
    },
    F
  ), { isHovered: Ye, hoverProps: Ee } = bu({ isDisabled: q }), et = pe(
    (Fe = {}) => ({
      "data-disabled": ot(q),
      "data-focus": ot(B),
      "data-pressed": ot(Se),
      "data-focus-visible": ot(ne),
      "data-hover": ot(Ye),
      "data-loading": ot(L),
      ...Rt(
        He,
        K,
        Ee,
        Io(P, {
          enabled: U
        }),
        Io(Fe)
      ),
      className: D
    }),
    [
      L,
      q,
      B,
      Se,
      U,
      ne,
      Ye,
      He,
      K,
      Ee,
      P,
      D
    ]
  ), tt = (Fe) => xr(Fe) ? Kn(Fe, {
    // @ts-ignore
    "aria-hidden": !0,
    focusable: !1
  }) : null, We = tt(j), ze = tt(E), dt = De(() => ({
    sm: "sm",
    md: "sm",
    lg: "md"
  })[M], [M]), ut = pe(
    () => ({ ripples: fe, onClear: xe }),
    [fe, xe]
  );
  return {
    Component: C,
    children: v,
    domRef: F,
    spinner: R,
    styles: D,
    startContent: We,
    endContent: ze,
    isLoading: L,
    spinnerPlacement: I,
    spinnerSize: dt,
    disableRipple: W,
    getButtonProps: et,
    getRippleProps: ut,
    isIconOnly: $
  };
}
function np(e) {
  var t, r;
  const [n, o] = Wf(e, hs.variantKeys), s = Xn(), a = (r = (t = e == null ? void 0 : e.variant) != null ? t : s == null ? void 0 : s.spinnerVariant) != null ? r : "default", { children: l, className: c, classNames: u, label: d, ...f } = n, h = De(() => hs({ ...o }), [qs(o)]), g = Xt(u == null ? void 0 : u.base, c), x = d || l, v = De(() => x && typeof x == "string" ? x : f["aria-label"] ? "" : "Loading", [l, x, f["aria-label"]]), j = pe(
    () => ({
      "aria-label": v,
      className: h.base({
        class: g
      }),
      ...f
    }),
    [v, h, g, f]
  );
  return { label: x, slots: h, classNames: u, variant: a, getSpinnerProps: j };
}
var Ei = Hf((e, t) => {
  const { slots: r, classNames: n, label: o, variant: s, getSpinnerProps: a } = np({ ...e });
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
var op = Ei, ji = ii((e, t) => {
  const {
    Component: r,
    domRef: n,
    children: o,
    spinnerSize: s,
    spinner: a = /* @__PURE__ */ i.jsx(op, { color: "current", size: s }),
    spinnerPlacement: l,
    startContent: c,
    endContent: u,
    isLoading: d,
    disableRipple: f,
    getButtonProps: h,
    getRippleProps: g,
    isIconOnly: x
  } = rp({ ...e, ref: t });
  return /* @__PURE__ */ i.jsxs(r, { ref: n, ...h(), children: [
    c,
    d && l === "start" && a,
    d && x ? null : o,
    d && l === "end" && a,
    u,
    !f && /* @__PURE__ */ i.jsx(ep, { ...g() })
  ] });
});
ji.displayName = "HeroUI.Button";
var sp = ji;
function ap(e) {
  let [t, r] = Ad(e.isOpen, e.defaultOpen || !1, e.onOpenChange);
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
function ip(e, t) {
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
  hu({
    isDisabled: !(n && s),
    onInteractOutside: n && s ? f : void 0,
    onInteractOutsideStart: d,
    ref: t
  });
  const { focusWithinProps: g } = io({
    isDisabled: !l,
    onBlurWithin: (v) => {
      !v.relatedTarget || wu(v.relatedTarget) || (!c || c(v.relatedTarget)) && u();
    }
  }), x = (v) => {
    v.target === v.currentTarget && v.preventDefault();
  };
  return {
    overlayProps: {
      onKeyDown: h,
      ...g
    },
    underlayProps: {
      onPointerDown: x
    }
  };
}
function lp(e, t) {
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
    shouldCloseOnScroll: g = !0,
    placement: x = "top",
    containerPadding: v,
    shouldCloseOnInteractOutside: j,
    isNonModal: E,
    isKeyboardDismissDisabled: N,
    updatePositionDeps: T = [],
    ...R
  } = e, L = E ?? !0, S = R.trigger === "SubmenuTrigger", { overlayProps: H, underlayProps: _ } = ip(
    {
      isOpen: t.isOpen,
      onClose: t.close,
      shouldCloseOnBlur: h,
      isDismissable: f || S,
      isKeyboardDismissDisabled: N,
      shouldCloseOnInteractOutside: j || ((b) => {
        var $;
        return !(($ = n.current) != null && $.contains(b));
      }),
      disableOutsideEvents: !L
    },
    o
  ), {
    overlayProps: M,
    arrowProps: A,
    placement: p,
    updatePosition: y
  } = Gd({
    ...R,
    shouldFlip: u,
    crossOffset: l,
    targetRef: n,
    overlayRef: o,
    isOpen: t.isOpen,
    scrollRef: c,
    boundaryElement: d,
    containerPadding: v,
    placement: Uf(x),
    offset: s ? a + 3 : a,
    onClose: L && !S && g ? t.close : () => {
    }
  });
  return Zf(() => {
    T.length && y();
  }, T), ue(() => {
    var b, $;
    if (t.isOpen && o.current)
      return L ? Xf((b = r == null ? void 0 : r.current) != null ? b : o.current) : qf([($ = r == null ? void 0 : r.current) != null ? $ : o.current]);
  }, [L, t.isOpen, o, r]), {
    popoverProps: Rt(H, M),
    arrowProps: A,
    underlayProps: _,
    placement: p
  };
}
var cp = "top";
function dp(e) {
  var t, r, n;
  const o = Xn(), [s, a] = Du(e, vs.variantKeys), {
    as: l,
    ref: c,
    children: u,
    state: d,
    triggerRef: f,
    scrollRef: h,
    defaultOpen: g,
    onOpenChange: x,
    isOpen: v,
    isNonModal: j = !0,
    shouldFlip: E = !0,
    containerPadding: N = 12,
    shouldBlockScroll: T = !1,
    isDismissable: R = !0,
    shouldCloseOnBlur: L,
    portalContainer: S,
    updatePositionDeps: H,
    dialogProps: _,
    placement: M = cp,
    triggerType: A = "dialog",
    showArrow: p = !1,
    offset: y = 7,
    crossOffset: b = 0,
    boundaryElement: $,
    isKeyboardDismissDisabled: I,
    shouldCloseOnInteractOutside: m,
    shouldCloseOnScroll: k,
    motionProps: P,
    className: C,
    classNames: U,
    onClose: F,
    ...W
  } = s, ne = l || "div", B = Us(c), K = re(null), q = re(!1), D = f || K, X = (r = (t = e.disableAnimation) != null ? t : o == null ? void 0 : o.disableAnimation) != null ? r : !1, xe = ap({
    isOpen: v,
    defaultOpen: g,
    onOpenChange: (z) => {
      x == null || x(z), z || F == null || F();
    }
  }), fe = d || xe, {
    popoverProps: Ue,
    underlayProps: He,
    placement: Se
  } = lp(
    {
      triggerRef: D,
      isNonModal: j,
      popoverRef: B,
      placement: M,
      offset: y,
      scrollRef: h,
      isDismissable: R,
      shouldCloseOnBlur: L,
      boundaryElement: $,
      crossOffset: b,
      shouldFlip: E,
      containerPadding: N,
      updatePositionDeps: H,
      isKeyboardDismissDisabled: I,
      shouldCloseOnScroll: k,
      shouldCloseOnInteractOutside: m
    },
    fe
  ), Ye = De(() => Se ? Yf(Se, M) ? Se : M : null, [Se, M]), { triggerProps: Ee } = Eu({ type: A }, fe, D), { isFocusVisible: et, isFocused: tt, focusProps: We } = Na(), ze = De(
    () => vs({
      ...a
    }),
    [qs(a)]
  ), dt = Xt(U == null ? void 0 : U.base, C);
  Pu({
    isDisabled: !(T && fe.isOpen)
  });
  const ut = (z = {}) => ({
    ref: B,
    ...Rt(Ue, W, z),
    style: Rt(Ue.style, W.style, z.style)
  }), Fe = (z = {}) => ({
    // `ref` and `dialogProps` from `useDialog` are passed from props
    // if we use `useDialog` here, dialogRef won't be focused on mount
    "data-slot": "base",
    "data-open": ot(fe.isOpen),
    "data-focus": ot(tt),
    "data-arrow": ot(p),
    "data-focus-visible": ot(et),
    "data-placement": Se ? ws(Se, M) : void 0,
    ...Rt(We, _, z),
    className: ze.base({ class: Xt(dt) }),
    style: {
      // this prevent the dialog to have a default outline
      outline: "none"
    }
  }), Nt = pe(
    (z = {}) => ({
      "data-slot": "content",
      "data-open": ot(fe.isOpen),
      "data-arrow": ot(p),
      "data-placement": Se ? ws(Se, M) : void 0,
      className: ze.content({ class: Xt(U == null ? void 0 : U.content, z.className) })
    }),
    [ze, fe.isOpen, p, Ye, M, U, Se]
  ), bt = pe(
    (z) => {
      var oe;
      let Y;
      return z.pointerType === "touch" && ((e == null ? void 0 : e.backdrop) === "blur" || (e == null ? void 0 : e.backdrop) === "opaque") ? Y = setTimeout(() => {
        q.current = !0;
      }, 100) : q.current = !0, (oe = Ee.onPress) == null || oe.call(Ee, z), () => {
        clearTimeout(Y);
      };
    },
    [Ee == null ? void 0 : Ee.onPress]
  ), V = pe(
    (z = {}, oe = null) => {
      const { isDisabled: Y, ...ve } = z;
      return {
        "data-slot": "trigger",
        ...Rt({ "aria-haspopup": "dialog" }, Ee, ve),
        onPress: bt,
        isDisabled: Y,
        className: ze.trigger({
          class: Xt(U == null ? void 0 : U.trigger, z.className),
          // apply isDisabled class names to make the trigger child disabled
          // e.g. for elements like div or HeroUI elements that don't have `isDisabled` prop
          isTriggerDisabled: Y
        }),
        ref: Ic(oe, D)
      };
    },
    [fe, Ee, bt, D]
  ), ee = pe(
    (z = {}) => ({
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
      ...z
    }),
    [ze, fe.isOpen, U, He]
  );
  return {
    state: fe,
    Component: ne,
    children: u,
    classNames: U,
    showArrow: p,
    triggerRef: D,
    placement: Ye,
    isNonModal: j,
    popoverRef: B,
    portalContainer: S,
    isOpen: fe.isOpen,
    onClose: fe.close,
    disableAnimation: X,
    shouldBlockScroll: T,
    backdrop: (n = e.backdrop) != null ? n : "transparent",
    motionProps: P,
    getBackdropProps: ee,
    getPopoverProps: ut,
    getTriggerProps: V,
    getDialogProps: Fe,
    getContentProps: Nt
  };
}
function up(e, t) {
  let { role: r = "dialog" } = e, n = fd();
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
  ]), _u(), {
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
var [fp, Pi] = qn({
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
    getContentProps: g,
    isNonModal: x,
    onClose: v
  } = Pi(), j = re(null), { dialogProps: E, titleProps: N } = up({}, j), T = f({
    ref: j,
    ...E,
    ...o
  }), R = t || s || "div", L = /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    !x && /* @__PURE__ */ i.jsx(cs, { onDismiss: v }),
    /* @__PURE__ */ i.jsx(R, { ...T, children: /* @__PURE__ */ i.jsx("div", { ...g({ className: n }), children: typeof r == "function" ? r(N) : r }) }),
    /* @__PURE__ */ i.jsx(cs, { onDismiss: v })
  ] }), S = De(() => l === "transparent" ? null : u ? /* @__PURE__ */ i.jsx("div", { ...h() }) : /* @__PURE__ */ i.jsx(xn, { features: $s, children: /* @__PURE__ */ i.jsx(
    yn.div,
    {
      animate: "enter",
      exit: "exit",
      initial: "exit",
      variants: ys.fade,
      ...h()
    }
  ) }), [l, u, h]), H = a ? Kf(a === "center" ? "top" : a) : void 0, _ = /* @__PURE__ */ i.jsx(i.Fragment, { children: u ? L : /* @__PURE__ */ i.jsx(xn, { features: $s, children: /* @__PURE__ */ i.jsx(
    yn.div,
    {
      animate: "enter",
      exit: "exit",
      initial: "initial",
      style: H,
      variants: ys.scaleSpringOpacity,
      ...c,
      children: L
    }
  ) }) });
  return /* @__PURE__ */ i.jsxs("div", { ...d(), children: [
    S,
    _
  ] });
};
Ti.displayName = "HeroUI.PopoverContent";
var pp = Ti, Si = (e) => {
  var t;
  const { triggerRef: r, getTriggerProps: n } = Pi(), { children: o, ...s } = e, a = De(() => typeof o == "string" ? /* @__PURE__ */ i.jsx("p", { children: o }) : wr.only(o), [o]), l = (t = a.props.ref) != null ? t : a.ref, { onPress: c, isDisabled: u, ...d } = De(() => n(Rt(s, a.props), l), [n, a.props, s, l]), [, f] = Ac(o, sp), { buttonProps: h } = ki({ onPress: c, isDisabled: u }, r), g = De(() => (f == null ? void 0 : f[0]) !== void 0, [f]);
  return g || delete d.preventFocusOnPress, Kn(
    a,
    Rt(d, g ? { onPress: c, isDisabled: u } : h)
  );
};
Si.displayName = "HeroUI.PopoverTrigger";
var gp = Si, Ci = ii((e, t) => {
  const { children: r, ...n } = e, o = dp({ ...n, ref: t }), [s, a] = wr.toArray(r), l = /* @__PURE__ */ i.jsx(Mu, { portalContainer: o.portalContainer, children: a });
  return /* @__PURE__ */ i.jsxs(fp, { value: o, children: [
    s,
    o.disableAnimation && o.isOpen ? l : /* @__PURE__ */ i.jsx(Ss, { children: o.isOpen ? l : null })
  ] });
});
Ci.displayName = "HeroUI.Popover";
var mp = Ci;
const bp = _e("border bg-popover text-popover-foreground", {
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
}), Jp = ({
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
  disableAnimation: g = !1,
  offset: x = 7,
  isDismissable: v = !0
}) => {
  const j = () => {
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
  }, E = () => s === "custom" && a ? { backgroundColor: a, color: "#ffffff" } : {
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
  }, T = E(), R = j(), L = N(), S = {
    placement: r,
    showArrow: n,
    color: R,
    radius: l,
    shadow: c,
    isOpen: d,
    onOpenChange: f,
    backdrop: L,
    disableAnimation: g,
    offset: x,
    isDismissable: v
  };
  return Object.keys(S).forEach((H) => {
    S[H] === void 0 && delete S[H];
  }), /* @__PURE__ */ i.jsxs(mp, { ...S, children: [
    /* @__PURE__ */ i.jsx(gp, { children: t }),
    /* @__PURE__ */ i.jsx(
      pp,
      {
        className: O(
          bp({ variant: o, color: s, shadow: c, rounded: l }),
          u,
          T,
          // Apply custom color styles when needed
          s === "custom" && a ? "border-0" : ""
        ),
        style: s === "custom" && a ? { backgroundColor: a, color: "#ffffff" } : void 0,
        children: e
      }
    )
  ] });
}, hp = _e("flex items-center text-sm", {
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
}), vp = Re(
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
      className: O(hp({ variant: t, size: r }), e),
      "aria-label": "Breadcrumb",
      ...a,
      children: /* @__PURE__ */ i.jsx("ol", { className: "flex flex-wrap items-center gap-1.5", children: n.map((c, u) => {
        const d = u === n.length - 1, f = d && s;
        return /* @__PURE__ */ i.jsxs(
          "li",
          {
            className: O(
              "flex items-center gap-1.5",
              f && "text-primary font-medium"
            ),
            children: [
              c.icon && /* @__PURE__ */ i.jsx(
                de,
                {
                  icon: c.icon,
                  className: O(
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
                  className: O(
                    "transition-colors duration-200",
                    "hover:text-primary hover:underline focus:outline-none",
                    "focus-visible:text-primary focus-visible:underline",
                    "active:text-primary-600"
                  ),
                  children: /* @__PURE__ */ i.jsx("span", { className: "truncate max-w-[200px] inline-block align-bottom", children: c.label })
                }
              ) : /* @__PURE__ */ i.jsx("span", { className: O(
                "truncate max-w-[200px] inline-block",
                f && "text-primary"
              ), children: c.label }),
              !d && /* @__PURE__ */ i.jsx("span", { className: O(
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
vp.displayName = "Breadcrumbs";
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
}, xp = ({
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
        className: O(
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
                const g = typeof h.width == "number" ? h.width : parseInt(((d = h.width) == null ? void 0 : d.toString()) || "0") || 0;
                u += g;
              }
            }
            return u;
          };
          return /* @__PURE__ */ i.jsx(
            "th",
            {
              className: O(
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
        className: O("p-3", {
          [s.stripe]: l % 2 !== 0,
          "bg-white": l % 2 === 0
        }),
        children: o.map((c, u) => {
          const d = () => {
            var h;
            if (!c.sticky || c.stickyPosition !== "left") return 0;
            let f = 0;
            for (let g = 0; g < u; g++) {
              const x = o[g];
              if (x.sticky && x.stickyPosition === "left") {
                const v = typeof x.width == "number" ? x.width : parseInt(((h = x.width) == null ? void 0 : h.toString()) || "0") || 0;
                f += v;
              }
            }
            return f;
          };
          return /* @__PURE__ */ i.jsx(
            "td",
            {
              className: O(
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
}, Qp = ({
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
  onSortChange: g,
  onRowClick: x,
  showPagination: v = !1,
  variant: j = "primary",
  meta: E = {
    current_page: 1,
    total_page: 1,
    total_data: 0,
    limit_number: 10
  }
}) => {
  const [N, T] = te(() => {
    const A = e.find((p) => p.sortable && p.sort);
    return A ? [
      {
        id: A.accessorKey.toString(),
        desc: A.sort === "desc"
      }
    ] : [];
  }), [R, L] = te(!1);
  ue(() => {
    const A = () => L(window.innerWidth < 768);
    return A(), window.addEventListener("resize", A), () => window.removeEventListener("resize", A);
  }, []);
  const S = ae.useMemo(() => {
    const A = e.map((p) => ({
      accessorKey: p.accessorKey,
      header: p.label,
      enableSorting: !!p.sortable,
      cell: p.render ? ({ row: y }) => {
        var b;
        return (b = p.render) == null ? void 0 : b.call(p, y.original[p.accessorKey], y.original, y.index);
      } : ({ row: y }) => y.original[p.accessorKey] || "-",
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
        cell: ({ row: p }) => (E.current_page - 1) * E.limit_number + p.index + 1,
        meta: {
          align: "left",
          width: 80,
          sticky: d,
          stickyPosition: "left"
        }
      },
      ...A
    ] : A;
  }, [e, u, d, E]), H = Ki({
    data: t,
    columns: S,
    state: {
      sorting: N
    },
    onSortingChange: (A) => {
      const p = typeof A == "function" ? A(N) : A;
      T(p), p.length > 0 ? g == null || g(p[0].desc ? "desc" : "asc", p[0].id) : g == null || g("", "");
    },
    getCoreRowModel: qi(),
    getSortedRowModel: Yi(),
    getPaginationRowModel: Ui(),
    manualPagination: !0,
    pageCount: E.total_page
  }), _ = Ri(j);
  if (l)
    return c || /* @__PURE__ */ i.jsx(
      xp,
      {
        schema: e,
        variant: j,
        showIndexSticky: d,
        isMobile: R
      }
    );
  const M = (A, p, y) => {
    const b = A.target;
    b.tagName === "BUTTON" || b.tagName === "A" || b.tagName === "INPUT" || b.tagName === "SELECT" || b.closest("button") !== null || b.closest("a") !== null || b.closest("input") !== null || b.closest("select") !== null || x == null || x(p, y);
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "bg-white rounded-md", children: [
    /* @__PURE__ */ i.jsx("div", { className: "p-0 w-full overflow-auto rounded-t-md [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full", children: /* @__PURE__ */ i.jsxs(
      "table",
      {
        className: O(
          "w-full border-spacing-0 border-separate min-w-full",
          r
        ),
        children: [
          /* @__PURE__ */ i.jsx(
            "thead",
            {
              className: O(
                "border-2 sticky top-0 z-10 rounded-t-md",
                _.border
              ),
              children: H.getHeaderGroups().map((A) => /* @__PURE__ */ i.jsx("tr", { children: A.headers.map(
                (p, y) => {
                  const b = p.column.columnDef.meta, $ = () => {
                    var m;
                    if (R || !(b != null && b.sticky) || b.stickyPosition !== "left") return 0;
                    let I = 0;
                    for (let k = 0; k < y; k++) {
                      const C = A.headers[k].column.columnDef.meta;
                      if (C != null && C.sticky && C.stickyPosition === "left") {
                        const U = typeof C.width == "number" ? C.width : parseInt(((m = C.width) == null ? void 0 : m.toString()) || "0") || 0;
                        I += U;
                      }
                    }
                    return I;
                  };
                  return /* @__PURE__ */ i.jsx(
                    "th",
                    {
                      className: O(
                        "text-sm text-wrap border-y p-4",
                        _.header,
                        {
                          "cursor-pointer": p.column.getCanSort(),
                          "rounded-tl-md": y === 0,
                          "rounded-tr-md": y === A.headers.length - 1,
                          "text-left": (b == null ? void 0 : b.align) === "left",
                          "text-center": (b == null ? void 0 : b.align) === "center",
                          "text-right": (b == null ? void 0 : b.align) === "right",
                          "sticky z-20": !R && (b == null ? void 0 : b.sticky),
                          "left-0": !R && (b == null ? void 0 : b.sticky) && b.stickyPosition === "left",
                          "right-0": !R && (b == null ? void 0 : b.sticky) && b.stickyPosition === "right"
                        },
                        n
                      ),
                      style: {
                        width: typeof (b == null ? void 0 : b.width) == "number" ? `${b.width}px` : b == null ? void 0 : b.width,
                        minWidth: typeof (b == null ? void 0 : b.width) == "number" ? `${b.width}px` : b == null ? void 0 : b.width,
                        left: !R && (b != null && b.sticky) && b.stickyPosition === "left" ? `${$()}px` : void 0
                      },
                      onClick: p.column.getCanSort() ? p.column.getToggleSortingHandler() : void 0,
                      children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ i.jsx(
                          "span",
                          {
                            className: O({
                              "font-semibold": y === 0
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
                            className: O("h-4 w-4", {
                              "text-white": j !== "ghost",
                              "text-gray-700": j === "ghost"
                            })
                          }
                        )
                      ] })
                    },
                    p.id
                  );
                }
              ) }, A.id))
            }
          ),
          /* @__PURE__ */ i.jsx("tbody", { children: H.getRowModel().rows.length === 0 ? /* @__PURE__ */ i.jsx("tr", { children: /* @__PURE__ */ i.jsx(
            "td",
            {
              colSpan: H.getAllColumns().length,
              className: O(
                "text-center border h-full w-full rounded-b-md"
              ),
              children: a || /* @__PURE__ */ i.jsxs("div", { className: "flex mx-auto w-full text-center justify-center gap-3 items-center", children: [
                /* @__PURE__ */ i.jsx("p", { children: "Data Not Found" }),
                /* @__PURE__ */ i.jsx(de, { icon: "mdi:face-frown-open", size: 34 })
              ] })
            }
          ) }) : H.getRowModel().rows.map((A, p) => /* @__PURE__ */ i.jsx(
            "tr",
            {
              className: O(
                "p-3 group",
                _.row,
                {
                  [_.stripe]: p % 2 !== 0,
                  "bg-white": p % 2 === 0,
                  "cursor-pointer": x
                },
                o
              ),
              onClick: (y) => M(y, A.original, p),
              children: A.getVisibleCells().map((y) => {
                const b = y.column.columnDef.meta, $ = () => {
                  var P;
                  if (R || !(b != null && b.sticky) || b.stickyPosition !== "left") return 0;
                  let I = 0;
                  const m = H.getAllColumns(), k = m.findIndex((C) => C.id === y.column.id);
                  for (let C = 0; C < k; C++) {
                    const F = m[C].columnDef.meta;
                    if (F != null && F.sticky && F.stickyPosition === "left") {
                      const W = typeof F.width == "number" ? F.width : parseInt(((P = F.width) == null ? void 0 : P.toString()) || "0") || 0;
                      I += W;
                    }
                  }
                  return I;
                };
                return /* @__PURE__ */ i.jsx(
                  "td",
                  {
                    className: O(
                      "px-4 py-3 text-sm text-gray-900",
                      {
                        "text-left": (b == null ? void 0 : b.align) === "left",
                        "text-center": (b == null ? void 0 : b.align) === "center",
                        "text-right": (b == null ? void 0 : b.align) === "right",
                        "sticky z-10": !R && (b == null ? void 0 : b.sticky),
                        "left-0": !R && (b == null ? void 0 : b.sticky) && b.stickyPosition === "left",
                        "right-0": !R && (b == null ? void 0 : b.sticky) && b.stickyPosition === "right",
                        // Ensure sticky columns have solid background that matches row
                        "bg-white": !R && (b == null ? void 0 : b.sticky) && p % 2 === 0,
                        [_.stripe]: !R && (b == null ? void 0 : b.sticky) && p % 2 !== 0,
                        [_.hoverStripe]: !R && (b == null ? void 0 : b.sticky)
                      },
                      s
                    ),
                    style: {
                      width: typeof (b == null ? void 0 : b.width) == "number" ? `${b.width}px` : b == null ? void 0 : b.width,
                      minWidth: typeof (b == null ? void 0 : b.width) == "number" ? `${b.width}px` : b == null ? void 0 : b.width,
                      left: !R && (b != null && b.sticky) && b.stickyPosition === "left" ? `${$()}px` : void 0
                    },
                    children: xo(
                      y.column.columnDef.cell,
                      y.getContext()
                    )
                  },
                  y.id
                );
              })
            },
            A.id
          )) })
        ]
      }
    ) }),
    !!t.length && v && /* @__PURE__ */ i.jsx("div", { className: "p-4 bg-white rounded-b-md", children: /* @__PURE__ */ i.jsx(
      rc,
      {
        currentPage: E.current_page,
        totalPages: E.total_page,
        totalData: E.total_data,
        onPageChange: f || (() => {
        }),
        perPage: E.limit_number,
        onPerPageChange: h || (() => {
        }),
        perPageOptions: [5, 10, 20, 50, 100],
        siblingCount: 1
      }
    ) })
  ] });
}, yp = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
}, Li = Re(
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
    }[t] : void 0), g = n || o;
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        ref: d,
        className: O(
          "flex",
          o ? "items-start gap-3 p-4" : "items-center gap-2 py-2.5 px-3",
          "border border-gray-200",
          yp[r],
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
              className: O(
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
                className: O("text-sm font-medium leading-5", {
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
                className: O(n ? "mt-1" : "", "text-sm leading-5", {
                  "text-gray": t === "default",
                  "text-success-700": t === "success",
                  "text-danger-700": t === "error",
                  "text-warning-700": t === "warning",
                  "text-info-700": t === "info"
                }),
                children: o
              }
            ),
            !g && /* @__PURE__ */ i.jsx("span", { className: "text-sm leading-5", children: u.children })
          ] }),
          c && s && /* @__PURE__ */ i.jsx(
            Ke,
            {
              variant: "ghost",
              size: "sm",
              onClick: s,
              className: O(
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
              children: /* @__PURE__ */ i.jsx(de, { icon: "mdi:close", className: O(o ? "h-5 w-5" : "h-4 w-4") })
            }
          )
        ]
      }
    );
  }
);
Li.displayName = "Toast";
const Hn = Ts(void 0), wp = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
}, eg = ({ children: e }) => {
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
    At(
      /* @__PURE__ */ i.jsx(i.Fragment, { children: Object.entries(s).map(([l, c]) => /* @__PURE__ */ i.jsx(
        "div",
        {
          className: O(
            "fixed z-[100] flex flex-col gap-2 min-w-[320px] max-w-[420px]",
            wp[l],
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
}, tg = () => {
  const e = mt(Hn);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, $p = ({
  label: e,
  value: t,
  icon: r,
  className: n
}) => /* @__PURE__ */ i.jsxs(Yn, { className: O(
  "flex items-center gap-4 rounded-lg w-full bg-white p-4 shadow-sm hover:bg-neutral-50 transition-shadow duration-200 justify-between",
  n
), children: [
  /* @__PURE__ */ i.jsxs("div", { children: [
    /* @__PURE__ */ i.jsx("p", { className: "text-sm font-medium text-gray", children: e }),
    /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-2xl font-semibold text-gray-900", children: t })
  ] }),
  r && /* @__PURE__ */ i.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50", children: /* @__PURE__ */ i.jsx(de, { icon: r, className: "h-6 w-6 text-primary-600" }) })
] }), kp = {
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
}, Ii = {
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
}, Np = {
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
  ...kp,
  ...Ii
}, Ns = {
  image: "https://design-system-eaip.onrender.com/img/error.svg",
  message: "An unexpected error occurred. Our team is currently investigating the issue."
}, Es = (e) => typeof e == "object" && e !== null && ("code" in e || "message" in e), rg = ({
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
      const f = Np[o];
      return Ii[f];
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
}, Ep = _e(
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
), jp = Re(
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
    length: g = 6,
    numericOnly: x = !0,
    onComplete: v,
    onChange: j,
    onSubmit: E,
    value: N,
    defaultValue: T = "",
    disabled: R = !1,
    autoFocus: L = !1,
    ...S
  }, H) => {
    const [_, M] = te(T || ""), A = re([]);
    ue(() => {
      N !== void 0 && M(N);
    }, [N]);
    const p = N !== void 0, y = p ? N : _, b = (F) => {
      p || M(F), j == null || j(F), F.length === g && (v == null || v(F), d || E == null || E(F));
    }, $ = (F) => (W) => {
      A.current[F] = W;
    }, I = (F) => {
      F.target.select();
    }, m = (F, W) => {
      var D;
      const ne = F.target.value;
      let B = "";
      if (ne.length >= 1)
        B = ne.slice(-1);
      else if (ne.length === 0) {
        const X = y.split("");
        X[W] = "", b(X.join(""));
        return;
      }
      if (x && !/^\d$/.test(B))
        return;
      const K = y.split("");
      for (; K.length <= W; )
        K.push("");
      K[W] = B;
      const q = K.join("");
      b(q), W < g - 1 && B && ((D = A.current[W + 1]) == null || D.focus());
    }, k = (F, W) => {
      var ne, B, K;
      if (F.key === "Backspace") {
        const q = y.split("");
        y[W] ? (F.preventDefault(), q[W] = "", b(q.join(""))) : W > 0 && (F.preventDefault(), q[W - 1] = "", b(q.join("")), (ne = A.current[W - 1]) == null || ne.focus());
      } else if (F.key === "Delete") {
        if (y[W]) {
          F.preventDefault();
          const q = y.split("");
          q[W] = "", b(q.join(""));
        }
      } else if (F.key === "ArrowLeft" && W > 0)
        F.preventDefault(), (B = A.current[W - 1]) == null || B.focus();
      else if (F.key === "ArrowRight" && W < g - 1)
        F.preventDefault(), (K = A.current[W + 1]) == null || K.focus();
      else if (!F.ctrlKey && !F.altKey && !F.metaKey && F.key.length === 1 && x && !/^\d$/.test(F.key)) {
        F.preventDefault();
        return;
      }
    }, P = (F) => {
      var q;
      F.preventDefault();
      const W = F.clipboardData.getData("text/plain").trim();
      if (x && !/^\d+$/.test(W))
        return;
      const B = W.slice(0, g).padEnd(y.length, "").slice(0, g);
      b(B);
      const K = B.length < g ? B.length : g - 1;
      (q = A.current[K]) == null || q.focus();
    }, C = () => {
      y.length === g && (E == null || E(y));
    }, U = y.split("").concat(Array(g - y.length).fill(""));
    return /* @__PURE__ */ i.jsxs("div", { ref: H, className: O("w-full", e), ...S, children: [
      l && /* @__PURE__ */ i.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
        l,
        u && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
        /* @__PURE__ */ i.jsx("div", { className: "flex items-center justify-center gap-2", children: Array.from({ length: g }).map((F, W) => /* @__PURE__ */ i.jsx(
          "input",
          {
            ref: $(W),
            type: x ? "tel" : "text",
            inputMode: x ? "numeric" : "text",
            maxLength: 1,
            value: U[W] || "",
            onChange: (ne) => m(ne, W),
            onKeyDown: (ne) => k(ne, W),
            onPaste: W === 0 ? P : void 0,
            onFocus: I,
            disabled: R,
            autoFocus: L && W === 0,
            className: O(
              Ep({
                variant: o ? "error" : t,
                size: r,
                rounded: n
              })
            ),
            "aria-invalid": o
          },
          W
        )) }),
        o && s && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger self-start", children: s }),
        !o && a && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral self-start", children: a }),
        c && /* @__PURE__ */ i.jsx("p", { className: "text-sm text-neutral-600", children: c }),
        d && /* @__PURE__ */ i.jsx(
          Ke,
          {
            variant: h,
            disabled: y.length !== g || R,
            onClick: C,
            className: "mt-4",
            children: f
          }
        )
      ] })
    ] });
  }
);
jp.displayName = "InputOTP";
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
}, ng = ({
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
  const d = c ? "px-2" : "", f = c ? "min-w-[20px]" : "w-2.5 h-2.5", h = c ? "h-5" : "h-2.5", g = typeof r == "string" && r in js ? js[r] : r;
  return /* @__PURE__ */ i.jsxs("div", { className: O("relative inline-block", t), children: [
    s || (e ? /* @__PURE__ */ i.jsx(de, { icon: e, color: g, size: 32, ...a }) : null),
    /* @__PURE__ */ i.jsx(
      "span",
      {
        className: O(
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
}, Pp = {
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
}, Tp = {
  "flight-light": "FLIGHT_LIGHT",
  "flight-dark": "FLIGHT_DARK",
  "tixia-circular": "TIXIA-CIRCULAR",
  "tixia-linear": "TIXIA-LINEAR"
}, Dr = (e, t) => e === void 0 ? { className: t } : typeof e == "number" ? {
  className: "",
  style: { width: `${e}px`, height: `${e}px` }
} : { className: e }, og = ({
  variant: e,
  customImage: t,
  customMessage: r,
  width: n = "w-full",
  height: o = "h-full",
  widthImg: s = "w-auto",
  heightImg: a = "h-auto",
  className: l = ""
}) => {
  const c = Tp[e], u = Pp[c], d = Dr(n, "w-full"), f = Dr(o, "h-full"), h = Dr(s, "w-auto"), g = Dr(a, "h-auto");
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
            className: `${h.className} ${g.className}`,
            style: { ...h.style, ...g.style }
          }
        ),
        r ? typeof r == "string" ? /* @__PURE__ */ i.jsx($r, { variant: "body1", className: "m-0", children: r }) : /* @__PURE__ */ i.jsx("div", { className: "m-0", children: r }) : /* @__PURE__ */ i.jsx($r, { variant: "body1", className: "m-0", children: u.message })
      ]
    }
  );
}, Sp = {
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
}, Cp = {
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
}, sg = ({
  variant: e,
  customMessage: t,
  reload: r,
  reloadText: n = "Try Again",
  customImage: o,
  width: s,
  height: a,
  className: l = ""
}) => {
  const c = Cp[e], u = Sp[c];
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
}, ag = ({
  widgets: e,
  className: t
}) => /* @__PURE__ */ i.jsx("div", { className: O("w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", t), children: e.map((r, n) => /* @__PURE__ */ i.jsx($p, { ...r }, n)) });
export {
  Mp as Accordion,
  Cl as AutoComplete,
  _p as Avatar,
  Dp as Badge,
  ng as BadgeNotif,
  vp as Breadcrumbs,
  Ke as Button,
  Yn as Card,
  Ml as CheckBoxGroup,
  on as Checkbox,
  zp as Chip,
  Wl as DatePicker,
  Ul as Dialog,
  Xl as DialogActions,
  ql as DialogBody,
  Bs as DialogHeader,
  Yl as DialogTitle,
  Zl as Divider,
  rg as ErrorWrapper,
  Fp as FileUpload,
  de as Icon,
  Ds as Input,
  jp as InputOTP,
  og as Loader,
  sg as NegativeCase,
  Vp as Notification,
  rc as Pagination,
  Nn as PhoneInput,
  qp as PhoneInputDemo,
  Jp as Popover,
  kn as PrimitiveDatePicker,
  jc as Progress,
  nc as Radio,
  sc as RadioGroup,
  Gs as Select,
  Ur as SelectItem,
  ac as Skeleton,
  Bp as Slider,
  Gp as StarRating,
  Hp as StatusIndicator,
  Wp as Stepper,
  Kp as Switch,
  Qp as Table,
  Up as Tabs,
  $r as Text,
  gc as Textarea,
  bc as TimePicker,
  Li as Toast,
  eg as ToastProvider,
  xc as Toggle,
  Yp as Tooltip,
  $p as WidgetCard,
  ag as WidgetCardGroup,
  Al as buttonVariants,
  Ol as cardVariants,
  O as cn,
  Ep as inputOTPVariants,
  hc as toggleVariants,
  tg as useToast
};
