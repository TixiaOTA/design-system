import * as vo from "react";
import ie, { useState as te, useEffect as ue, forwardRef as Ae, useRef as re, useImperativeHandle as Wn, useLayoutEffect as Ta, useCallback as pe, Children as wr, isValidElement as xr, cloneElement as Kn, useContext as mt, useMemo as _e, createContext as Pa } from "react";
import Hi, { createPortal as At, flushSync as Wi } from "react-dom";
import Ne from "dayjs";
import { LazyMotion as xn, AnimatePresence as Sa, m as yn } from "framer-motion";
import { useReactTable as Ki, getPaginationRowModel as Ui, getSortedRowModel as Yi, getCoreRowModel as qi, flexRender as xo } from "@tanstack/react-table";
var Ca = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ra(e) {
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
  var e = ie, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, c, u) {
    var d, f = {}, m = null, g = null;
    u !== void 0 && (m = "" + u), c.key !== void 0 && (m = "" + c.key), c.ref !== void 0 && (g = c.ref);
    for (d in c) n.call(c, d) && !a.hasOwnProperty(d) && (f[d] = c[d]);
    if (l && l.defaultProps) for (d in c = l.defaultProps, c) f[d] === void 0 && (f[d] = c[d]);
    return { $$typeof: t, type: l, key: m, ref: g, props: f, _owner: o.current };
  }
  return lr.Fragment = r, lr.jsx = s, lr.jsxs = s, lr;
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
    var e = ie, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), x = Symbol.iterator, h = "@@iterator";
    function $(v) {
      if (v === null || typeof v != "object")
        return null;
      var G = x && v[x] || v[h];
      return typeof G == "function" ? G : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function N(v) {
      {
        for (var G = arguments.length, Z = new Array(G > 1 ? G - 1 : 0), se = 1; se < G; se++)
          Z[se - 1] = arguments[se];
        C("error", v, Z);
      }
    }
    function C(v, G, Z) {
      {
        var se = E.ReactDebugCurrentFrame, we = se.getStackAddendum();
        we !== "" && (G += "%s", Z = Z.concat([we]));
        var ke = Z.map(function(he) {
          return String(he);
        });
        ke.unshift("Warning: " + G), Function.prototype.apply.call(console[v], console, ke);
      }
    }
    var O = !1, R = !1, S = !1, D = !1, A = !1, L;
    L = Symbol.for("react.module.reference");
    function P(v) {
      return !!(typeof v == "string" || typeof v == "function" || v === n || v === a || A || v === o || v === u || v === d || D || v === g || O || R || S || typeof v == "object" && v !== null && (v.$$typeof === m || v.$$typeof === f || v.$$typeof === s || v.$$typeof === l || v.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      v.$$typeof === L || v.getModuleId !== void 0));
    }
    function b(v, G, Z) {
      var se = v.displayName;
      if (se)
        return se;
      var we = G.displayName || G.name || "";
      return we !== "" ? Z + "(" + we + ")" : Z;
    }
    function k(v) {
      return v.displayName || "Context";
    }
    function j(v) {
      if (v == null)
        return null;
      if (typeof v.tag == "number" && N("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof v == "function")
        return v.displayName || v.name || null;
      if (typeof v == "string")
        return v;
      switch (v) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case l:
            var G = v;
            return k(G) + ".Consumer";
          case s:
            var Z = v;
            return k(Z._context) + ".Provider";
          case c:
            return b(v, v.render, "ForwardRef");
          case f:
            var se = v.displayName || null;
            return se !== null ? se : j(v.type) || "Memo";
          case m: {
            var we = v, ke = we._payload, he = we._init;
            try {
              return j(he(ke));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var y = Object.assign, I = 0, p, w, T, M, U, K, W;
    function ne() {
    }
    ne.__reactDisabledLog = !0;
    function B() {
      {
        if (I === 0) {
          p = console.log, w = console.info, T = console.warn, M = console.error, U = console.group, K = console.groupCollapsed, W = console.groupEnd;
          var v = {
            configurable: !0,
            enumerable: !0,
            value: ne,
            writable: !0
          };
          Object.defineProperties(console, {
            info: v,
            log: v,
            warn: v,
            error: v,
            group: v,
            groupCollapsed: v,
            groupEnd: v
          });
        }
        I++;
      }
    }
    function H() {
      {
        if (I--, I === 0) {
          var v = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: y({}, v, {
              value: p
            }),
            info: y({}, v, {
              value: w
            }),
            warn: y({}, v, {
              value: T
            }),
            error: y({}, v, {
              value: M
            }),
            group: y({}, v, {
              value: U
            }),
            groupCollapsed: y({}, v, {
              value: K
            }),
            groupEnd: y({}, v, {
              value: W
            })
          });
        }
        I < 0 && N("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = E.ReactCurrentDispatcher, z;
    function X(v, G, Z) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (we) {
            var se = we.stack.trim().match(/\n( *(at )?)/);
            z = se && se[1] || "";
          }
        return `
` + z + v;
      }
    }
    var xe = !1, fe;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new Ue();
    }
    function He(v, G) {
      if (!v || xe)
        return "";
      {
        var Z = fe.get(v);
        if (Z !== void 0)
          return Z;
      }
      var se;
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
              se = Xe;
            }
            Reflect.construct(v, [], he);
          } else {
            try {
              he.call();
            } catch (Xe) {
              se = Xe;
            }
            v.call(he.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Xe) {
            se = Xe;
          }
          v();
        }
      } catch (Xe) {
        if (Xe && se && typeof Xe.stack == "string") {
          for (var ge = Xe.stack.split(`
`), qe = se.stack.split(`
`), Re = ge.length - 1, Ie = qe.length - 1; Re >= 1 && Ie >= 0 && ge[Re] !== qe[Ie]; )
            Ie--;
          for (; Re >= 1 && Ie >= 0; Re--, Ie--)
            if (ge[Re] !== qe[Ie]) {
              if (Re !== 1 || Ie !== 1)
                do
                  if (Re--, Ie--, Ie < 0 || ge[Re] !== qe[Ie]) {
                    var rt = `
` + ge[Re].replace(" at new ", " at ");
                    return v.displayName && rt.includes("<anonymous>") && (rt = rt.replace("<anonymous>", v.displayName)), typeof v == "function" && fe.set(v, rt), rt;
                  }
                while (Re >= 1 && Ie >= 0);
              break;
            }
        }
      } finally {
        xe = !1, q.current = ke, H(), Error.prepareStackTrace = we;
      }
      var Kt = v ? v.displayName || v.name : "", _t = Kt ? X(Kt) : "";
      return typeof v == "function" && fe.set(v, _t), _t;
    }
    function Se(v, G, Z) {
      return He(v, !1);
    }
    function Ye(v) {
      var G = v.prototype;
      return !!(G && G.isReactComponent);
    }
    function Ee(v, G, Z) {
      if (v == null)
        return "";
      if (typeof v == "function")
        return He(v, Ye(v));
      if (typeof v == "string")
        return X(v);
      switch (v) {
        case u:
          return X("Suspense");
        case d:
          return X("SuspenseList");
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case c:
            return Se(v.render);
          case f:
            return Ee(v.type, G, Z);
          case m: {
            var se = v, we = se._payload, ke = se._init;
            try {
              return Ee(ke(we), G, Z);
            } catch {
            }
          }
        }
      return "";
    }
    var et = Object.prototype.hasOwnProperty, tt = {}, We = E.ReactDebugCurrentFrame;
    function ze(v) {
      if (v) {
        var G = v._owner, Z = Ee(v.type, v._source, G ? G.type : null);
        We.setExtraStackFrame(Z);
      } else
        We.setExtraStackFrame(null);
    }
    function dt(v, G, Z, se, we) {
      {
        var ke = Function.call.bind(et);
        for (var he in v)
          if (ke(v, he)) {
            var ge = void 0;
            try {
              if (typeof v[he] != "function") {
                var qe = Error((se || "React class") + ": " + Z + " type `" + he + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof v[he] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw qe.name = "Invariant Violation", qe;
              }
              ge = v[he](G, he, se, Z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Re) {
              ge = Re;
            }
            ge && !(ge instanceof Error) && (ze(we), N("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", se || "React class", Z, he, typeof ge), ze(null)), ge instanceof Error && !(ge.message in tt) && (tt[ge.message] = !0, ze(we), N("Failed %s type: %s", Z, ge.message), ze(null));
          }
      }
    }
    var ut = Array.isArray;
    function Fe(v) {
      return ut(v);
    }
    function Nt(v) {
      {
        var G = typeof Symbol == "function" && Symbol.toStringTag, Z = G && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return Z;
      }
    }
    function bt(v) {
      try {
        return V(v), !1;
      } catch {
        return !0;
      }
    }
    function V(v) {
      return "" + v;
    }
    function ee(v) {
      if (bt(v))
        return N("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Nt(v)), V(v);
    }
    var F = E.ReactCurrentOwner, oe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Y, ve;
    function le(v) {
      if (et.call(v, "ref")) {
        var G = Object.getOwnPropertyDescriptor(v, "ref").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return v.ref !== void 0;
    }
    function je(v) {
      if (et.call(v, "key")) {
        var G = Object.getOwnPropertyDescriptor(v, "key").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return v.key !== void 0;
    }
    function ct(v, G) {
      typeof v.ref == "string" && F.current;
    }
    function It(v, G) {
      {
        var Z = function() {
          Y || (Y = !0, N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        Z.isReactWarning = !0, Object.defineProperty(v, "key", {
          get: Z,
          configurable: !0
        });
      }
    }
    function Ot(v, G) {
      {
        var Z = function() {
          ve || (ve = !0, N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        Z.isReactWarning = !0, Object.defineProperty(v, "ref", {
          get: Z,
          configurable: !0
        });
      }
    }
    var ht = function(v, G, Z, se, we, ke, he) {
      var ge = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: v,
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
        value: se
      }), Object.defineProperty(ge, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: we
      }), Object.freeze && (Object.freeze(ge.props), Object.freeze(ge)), ge;
    };
    function jr(v, G, Z, se, we) {
      {
        var ke, he = {}, ge = null, qe = null;
        Z !== void 0 && (ee(Z), ge = "" + Z), je(G) && (ee(G.key), ge = "" + G.key), le(G) && (qe = G.ref, ct(G, we));
        for (ke in G)
          et.call(G, ke) && !oe.hasOwnProperty(ke) && (he[ke] = G[ke]);
        if (v && v.defaultProps) {
          var Re = v.defaultProps;
          for (ke in Re)
            he[ke] === void 0 && (he[ke] = Re[ke]);
        }
        if (ge || qe) {
          var Ie = typeof v == "function" ? v.displayName || v.name || "Unknown" : v;
          ge && It(he, Ie), qe && Ot(he, Ie);
        }
        return ht(v, ge, qe, we, se, F.current, he);
      }
    }
    var ir = E.ReactCurrentOwner, Et = E.ReactDebugCurrentFrame;
    function Wt(v) {
      if (v) {
        var G = v._owner, Z = Ee(v.type, v._source, G ? G.type : null);
        Et.setExtraStackFrame(Z);
      } else
        Et.setExtraStackFrame(null);
    }
    var Qr;
    Qr = !1;
    function en(v) {
      return typeof v == "object" && v !== null && v.$$typeof === t;
    }
    function fo() {
      {
        if (ir.current) {
          var v = j(ir.current.type);
          if (v)
            return `

Check the render method of \`` + v + "`.";
        }
        return "";
      }
    }
    function Ai(v) {
      return "";
    }
    var po = {};
    function Ii(v) {
      {
        var G = fo();
        if (!G) {
          var Z = typeof v == "string" ? v : v.displayName || v.name;
          Z && (G = `

Check the top-level render call using <` + Z + ">.");
        }
        return G;
      }
    }
    function go(v, G) {
      {
        if (!v._store || v._store.validated || v.key != null)
          return;
        v._store.validated = !0;
        var Z = Ii(G);
        if (po[Z])
          return;
        po[Z] = !0;
        var se = "";
        v && v._owner && v._owner !== ir.current && (se = " It was passed a child from " + j(v._owner.type) + "."), Wt(v), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Z, se), Wt(null);
      }
    }
    function mo(v, G) {
      {
        if (typeof v != "object")
          return;
        if (Fe(v))
          for (var Z = 0; Z < v.length; Z++) {
            var se = v[Z];
            en(se) && go(se, G);
          }
        else if (en(v))
          v._store && (v._store.validated = !0);
        else if (v) {
          var we = $(v);
          if (typeof we == "function" && we !== v.entries)
            for (var ke = we.call(v), he; !(he = ke.next()).done; )
              en(he.value) && go(he.value, G);
        }
      }
    }
    function Oi(v) {
      {
        var G = v.type;
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
          var se = j(G);
          dt(Z, v.props, "prop", se, v);
        } else if (G.PropTypes !== void 0 && !Qr) {
          Qr = !0;
          var we = j(G);
          N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", we || "Unknown");
        }
        typeof G.getDefaultProps == "function" && !G.getDefaultProps.isReactClassApproved && N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _i(v) {
      {
        for (var G = Object.keys(v.props), Z = 0; Z < G.length; Z++) {
          var se = G[Z];
          if (se !== "children" && se !== "key") {
            Wt(v), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", se), Wt(null);
            break;
          }
        }
        v.ref !== null && (Wt(v), N("Invalid attribute `ref` supplied to `React.Fragment`."), Wt(null));
      }
    }
    var bo = {};
    function ho(v, G, Z, se, we, ke) {
      {
        var he = P(v);
        if (!he) {
          var ge = "";
          (v === void 0 || typeof v == "object" && v !== null && Object.keys(v).length === 0) && (ge += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var qe = Ai();
          qe ? ge += qe : ge += fo();
          var Re;
          v === null ? Re = "null" : Fe(v) ? Re = "array" : v !== void 0 && v.$$typeof === t ? (Re = "<" + (j(v.type) || "Unknown") + " />", ge = " Did you accidentally export a JSX literal instead of a component?") : Re = typeof v, N("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Re, ge);
        }
        var Ie = jr(v, G, Z, we, ke);
        if (Ie == null)
          return Ie;
        if (he) {
          var rt = G.children;
          if (rt !== void 0)
            if (se)
              if (Fe(rt)) {
                for (var Kt = 0; Kt < rt.length; Kt++)
                  mo(rt[Kt], v);
                Object.freeze && Object.freeze(rt);
              } else
                N("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              mo(rt, v);
        }
        if (et.call(G, "key")) {
          var _t = j(v), Xe = Object.keys(G).filter(function(Gi) {
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
        return v === n ? _i(Ie) : Oi(Ie), Ie;
      }
    }
    function Di(v, G, Z) {
      return ho(v, G, Z, !0);
    }
    function zi(v, G, Z) {
      return ho(v, G, Z, !1);
    }
    var Fi = zi, Vi = Di;
    cr.Fragment = n, cr.jsx = Fi, cr.jsxs = Vi;
  }()), cr;
}
process.env.NODE_ENV === "production" ? wn.exports = Xi() : wn.exports = Zi();
var i = wn.exports;
function La(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = La(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function be() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = La(e)) && (n && (n += " "), n += t);
  return n;
}
const Un = "-", Ji = (e) => {
  const t = el(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (s) => {
      const l = s.split(Un);
      return l[0] === "" && l.length !== 1 && l.shift(), Ma(l, t) || Qi(s);
    },
    getConflictingClassGroupIds: (s, l) => {
      const c = r[s] || [];
      return l && n[s] ? [...c, ...n[s]] : c;
    }
  };
}, Ma = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? Ma(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(Un);
  return (s = t.validators.find(({
    validator: l
  }) => l(a))) == null ? void 0 : s.classGroupId;
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
  return rl(Object.entries(e.classGroups), r).forEach(([a, s]) => {
    $n(s, n, a, t);
  }), n;
}, $n = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : ko(t, o);
      a.classGroupId = r;
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
    Object.entries(o).forEach(([a, s]) => {
      $n(s, ko(t, a), r, n);
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
  const o = n.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([s, l]) => [t + s, l])) : a);
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
  const o = (a, s) => {
    r.set(a, s), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let s = r.get(a);
      if (s !== void 0)
        return s;
      if ((s = n.get(a)) !== void 0)
        return o(a, s), s;
    },
    set(a, s) {
      r.has(a) ? r.set(a, s) : o(a, s);
    }
  };
}, Aa = "!", ol = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, o = t[0], a = t.length, s = (l) => {
    const c = [];
    let u = 0, d = 0, f;
    for (let $ = 0; $ < l.length; $++) {
      let E = l[$];
      if (u === 0) {
        if (E === o && (n || l.slice($, $ + a) === t)) {
          c.push(l.slice(d, $)), d = $ + a;
          continue;
        }
        if (E === "/") {
          f = $;
          continue;
        }
      }
      E === "[" ? u++ : E === "]" && u--;
    }
    const m = c.length === 0 ? l : l.substring(d), g = m.startsWith(Aa), x = g ? m.substring(1) : m, h = f && f > d ? f - d : void 0;
    return {
      modifiers: c,
      hasImportantModifier: g,
      baseClassName: x,
      maybePostfixModifierPosition: h
    };
  };
  return r ? (l) => r({
    className: l,
    parseClassName: s
  }) : s;
}, al = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, sl = (e) => ({
  cache: nl(e.cacheSize),
  parseClassName: ol(e),
  ...Ji(e)
}), il = /\s+/, ll = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, a = [], s = e.trim().split(il);
  let l = "";
  for (let c = s.length - 1; c >= 0; c -= 1) {
    const u = s[c], {
      modifiers: d,
      hasImportantModifier: f,
      baseClassName: m,
      maybePostfixModifierPosition: g
    } = r(u);
    let x = !!g, h = n(x ? m.substring(0, g) : m);
    if (!h) {
      if (!x) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (h = n(m), !h) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      x = !1;
    }
    const $ = al(d).join(":"), E = f ? $ + Aa : $, N = E + h;
    if (a.includes(N))
      continue;
    a.push(N);
    const C = o(h, x);
    for (let O = 0; O < C.length; ++O) {
      const R = C[O];
      a.push(E + R);
    }
    l = u + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function cl() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Ia(t)) && (n && (n += " "), n += r);
  return n;
}
const Ia = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Ia(e[n])) && (r && (r += " "), r += t);
  return r;
};
function dl(e, ...t) {
  let r, n, o, a = s;
  function s(c) {
    const u = t.reduce((d, f) => f(d), e());
    return r = sl(u), n = r.cache.get, o = r.cache.set, a = l, l(c);
  }
  function l(c) {
    const u = n(c);
    if (u)
      return u;
    const d = ll(c, r);
    return o(c, d), d;
  }
  return function() {
    return a(cl.apply(null, arguments));
  };
}
const Pe = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Oa = /^\[(?:([a-z-]+):)?(.+)\]$/i, ul = /^\d+\/\d+$/, fl = /* @__PURE__ */ new Set(["px", "full", "screen"]), pl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, gl = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ml = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, bl = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, hl = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, vt = (e) => Jt(e) || fl.has(e) || ul.test(e), jt = (e) => nr(e, "length", El), Jt = (e) => !!e && !Number.isNaN(Number(e)), rn = (e) => nr(e, "number", Jt), dr = (e) => !!e && Number.isInteger(Number(e)), vl = (e) => e.endsWith("%") && Jt(e.slice(0, -1)), ce = (e) => Oa.test(e), Tt = (e) => pl.test(e), xl = /* @__PURE__ */ new Set(["length", "size", "percentage"]), yl = (e) => nr(e, xl, _a), wl = (e) => nr(e, "position", _a), $l = /* @__PURE__ */ new Set(["image", "url"]), kl = (e) => nr(e, $l, Tl), Nl = (e) => nr(e, "", jl), ur = () => !0, nr = (e, t, r) => {
  const n = Oa.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, El = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  gl.test(e) && !ml.test(e)
), _a = () => !1, jl = (e) => bl.test(e), Tl = (e) => hl.test(e), Pl = () => {
  const e = Pe("colors"), t = Pe("spacing"), r = Pe("blur"), n = Pe("brightness"), o = Pe("borderColor"), a = Pe("borderRadius"), s = Pe("borderSpacing"), l = Pe("borderWidth"), c = Pe("contrast"), u = Pe("grayscale"), d = Pe("hueRotate"), f = Pe("invert"), m = Pe("gap"), g = Pe("gradientColorStops"), x = Pe("gradientColorStopPositions"), h = Pe("inset"), $ = Pe("margin"), E = Pe("opacity"), N = Pe("padding"), C = Pe("saturate"), O = Pe("scale"), R = Pe("sepia"), S = Pe("skew"), D = Pe("space"), A = Pe("translate"), L = () => ["auto", "contain", "none"], P = () => ["auto", "hidden", "clip", "visible", "scroll"], b = () => ["auto", ce, t], k = () => [ce, t], j = () => ["", vt, jt], y = () => ["auto", Jt, ce], I = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], p = () => ["solid", "dashed", "dotted", "double", "none"], w = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], T = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], M = () => ["", "0", ce], U = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], K = () => [Jt, ce];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ur],
      spacing: [vt, jt],
      blur: ["none", "", Tt, ce],
      brightness: K(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Tt, ce],
      borderSpacing: k(),
      borderWidth: j(),
      contrast: K(),
      grayscale: M(),
      hueRotate: K(),
      invert: M(),
      gap: k(),
      gradientColorStops: [e],
      gradientColorStopPositions: [vl, jt],
      inset: b(),
      margin: b(),
      opacity: K(),
      padding: k(),
      saturate: K(),
      scale: K(),
      sepia: M(),
      skew: K(),
      space: k(),
      translate: k()
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
        columns: [Tt]
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
        z: ["auto", dr, ce]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: b()
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
        grow: M()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: M()
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
        "col-start": y()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": y()
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
        "row-start": y()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": y()
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
        justify: ["normal", ...T()]
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
        content: ["normal", ...T(), "baseline"]
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
        "place-content": [...T(), "baseline"]
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
        m: [$]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [$]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [$]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [$]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [$]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [$]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [$]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [$]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [$]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [D]
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
        "space-y": [D]
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
          screen: [Tt]
        }, Tt]
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
        text: ["base", Tt, jt]
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
        decoration: [...p(), "wavy"]
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
        indent: k()
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
        border: [...p(), "hidden"]
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
        divide: p()
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
        outline: ["", ...p()]
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
        ring: j()
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
        shadow: ["", "inner", "none", Tt, Nl]
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
        "mix-blend": [...w(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": w()
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
        "drop-shadow": ["", "none", Tt, ce]
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
        saturate: [C]
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
        "backdrop-opacity": [E]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [C]
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
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
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
        duration: K()
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
        delay: K()
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
        scale: [O]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [O]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [O]
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
        "translate-x": [A]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [A]
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
        "scroll-m": k()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": k()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": k()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": k()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": k()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": k()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": k()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": k()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": k()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": k()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": k()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": k()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": k()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": k()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": k()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": k()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": k()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": k()
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
}, gt = /* @__PURE__ */ dl(Pl);
function _(...e) {
  return gt(be(e));
}
const No = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Eo = be, De = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return Eo(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((u) => {
    const d = r == null ? void 0 : r[u], f = a == null ? void 0 : a[u];
    if (d === null) return null;
    const m = No(d) || No(f);
    return o[u][m];
  }), l = r && Object.entries(r).reduce((u, d) => {
    let [f, m] = d;
    return m === void 0 || (u[f] = m), u;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, d) => {
    let { class: f, className: m, ...g } = d;
    return Object.entries(g).every((x) => {
      let [h, $] = x;
      return Array.isArray($) ? $.includes({
        ...a,
        ...l
      }[h]) : {
        ...a,
        ...l
      }[h] === $;
    }) ? [
      ...u,
      f,
      m
    ] : u;
  }, []);
  return Eo(e, s, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, de = ({
  icon: e,
  className: t,
  size: r,
  color: n,
  rotate: o,
  flip: a,
  spin: s,
  inline: l = !0,
  mode: c = "svg",
  ...u
}) => {
  const [d, f] = te(null), [m, g] = te(!0), [x, h] = te(null);
  return ue(() => {
    let $ = !0;
    return (async () => {
      try {
        const { Icon: N } = await import("./iconify-Dqt3MVen.mjs");
        $ && (f(() => N), g(!1));
      } catch (N) {
        console.error("Failed to load icon:", N), $ && (h(N), g(!1));
      }
    })(), () => {
      $ = !1;
    };
  }, []), m ? /* @__PURE__ */ i.jsx("span", { style: { width: r, height: r } }) : x || !d ? null : /* @__PURE__ */ i.jsx(
    d,
    {
      icon: e,
      className: _(
        s && "animate-spin",
        t
      ),
      style: {
        color: n,
        transform: `rotate(${o || 0}deg)`
      },
      height: r,
      width: r,
      flip: a,
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
), Da = Ae(
  ({
    className: e,
    variant: t = "default",
    size: r = "md",
    rounded: n = "xl",
    error: o = !1,
    errorText: a,
    helperText: s,
    label: l,
    required: c = !1,
    labelPlacement: u = "top",
    fullWidth: d = !1,
    leftIcon: f,
    rightIcon: m,
    onRightIconClick: g,
    id: x,
    ...h
  }, $) => {
    const E = x || ie.useId(), N = `${E}-helper`, C = `${E}-error`, O = /* @__PURE__ */ i.jsxs("div", { className: _("relative", !d && "inline-block"), children: [
      f && /* @__PURE__ */ i.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ i.jsx(de, { icon: f, className: "w-4 h-4" }) }),
      /* @__PURE__ */ i.jsx(
        "input",
        {
          id: E,
          type: "text",
          ref: $,
          className: _(
            Sl({ variant: o ? "error" : t, size: r, rounded: n, fullWidth: d }),
            f && "pl-10",
            m && "pr-10",
            e
          ),
          "aria-describedby": o ? C : s ? N : void 0,
          "aria-invalid": o,
          "aria-required": c,
          ...h
        }
      ),
      m && /* @__PURE__ */ i.jsx(
        "div",
        {
          className: _(
            "absolute right-3 top-1/2 -translate-y-1/2 text-neutral",
            g && "cursor-pointer hover:text-primary-600"
          ),
          onClick: g,
          role: g ? "button" : void 0,
          tabIndex: g ? 0 : void 0,
          children: /* @__PURE__ */ i.jsx(de, { icon: m, className: "w-4 h-4" })
        }
      )
    ] }), R = /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      o && a && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger", id: C, children: a }),
      !o && s && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral", id: N, children: s })
    ] });
    return u === "left" ? /* @__PURE__ */ i.jsx("div", { className: _(d ? "w-full" : "inline-block", e), children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-start gap-4", children: [
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
      /* @__PURE__ */ i.jsxs("div", { className: _("flex-1", !d && "inline-block"), children: [
        O,
        R
      ] })
    ] }) }) : /* @__PURE__ */ i.jsxs("div", { className: _(d ? "w-full" : "inline-block", e), children: [
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
      O,
      R
    ] });
  }
);
Da.displayName = "Input";
const Ur = ie.forwardRef(
  ({ className: e, children: t, selected: r, disabled: n, ...o }, a) => /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: a,
      className: _(
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
const za = typeof window < "u", it = () => za ? window : {
  innerHeight: 0,
  innerWidth: 0,
  addEventListener: () => {
  },
  removeEventListener: () => {
  }
}, Ge = () => za ? document : {
  addEventListener: () => {
  },
  removeEventListener: () => {
  },
  dispatchEvent: () => {
  }
}, nn = "autocomplete-dropdown-opened", Cl = Ae(
  ({
    className: e,
    options: t,
    onSelect: r,
    isOpen: n,
    loading: o = !1,
    renderOption: a,
    variant: s = "default",
    size: l = "md",
    rounded: c = "xl",
    leftIcon: u,
    rightIcon: d,
    error: f = !1,
    errorText: m,
    helperText: g,
    label: x,
    required: h = !1,
    labelPlacement: $ = "top",
    fullWidth: E = !1,
    value: N,
    onChange: C,
    onFocus: O,
    onBlur: R,
    showClear: S = !1,
    onClear: D,
    searchType: A = "include",
    initialItemsToShow: L,
    itemsToLoad: P = 10,
    maxDropdownHeight: b = 300,
    noOptionsMessage: k = "No options found",
    scrollMoreMessage: j = "",
    allOptionsShownMessage: y = "",
    ...I
  }, p) => {
    const [w, T] = te(!1), [M, U] = te(N || ""), [K, W] = te(L || 0), ne = re(null), B = re(null), H = re(null), q = re(null), z = n !== void 0, xe = `autocomplete-${ie.useId().replace(/:/g, "")}`, fe = () => {
      if (!w || !B.current || !H.current) return;
      const { bottom: V, top: ee, left: F, width: oe } = B.current.getBoundingClientRect(), Y = H.current, ve = it(), le = ve.innerHeight - V, je = ee, ct = Math.min(b, 300), It = le < ct, Ot = je > le, ht = It && Ot;
      Object.assign(Y.style, {
        position: "fixed",
        left: `${F}px`,
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
      const V = it(), ee = Ge(), F = () => {
        w && fe();
      }, oe = () => {
        w && fe();
      }, Y = (le) => {
        le.detail.id !== xe && T(!1);
      }, ve = (le) => {
        const je = le.target;
        ne.current && !ne.current.contains(je) && H.current && !H.current.contains(je) && T(!1);
      };
      return w && (fe(), V.addEventListener("scroll", F, !0), V.addEventListener("resize", oe)), ee.addEventListener(nn, Y), ee.addEventListener("click", ve), () => {
        V.removeEventListener("scroll", F, !0), V.removeEventListener("resize", oe), ee.removeEventListener(nn, Y), ee.removeEventListener("click", ve);
      };
    }, [w, xe]), ue(() => {
      U(N || "");
    }, [N]);
    const Ue = (V) => {
      const { value: ee } = V.target;
      if (U(ee), !ee.trim()) {
        T(!1);
        return;
      }
      const F = t.some(({ label: oe }) => {
        const Y = ee.toLowerCase().trim(), ve = oe.toLowerCase();
        return A === "startsWith" ? ve.startsWith(Y) : ve.includes(Y);
      });
      T(F), C == null || C(V);
    }, He = (V) => {
      V.stopPropagation(), U(""), D == null || D();
      const ee = new Event("change");
      ee.target = { value: "" }, C == null || C(ee);
    }, Se = (V) => {
      var Y;
      if (!V) return;
      const { value: ee, label: F } = V;
      U(F), T(!1), r == null || r(ee);
      const oe = new CustomEvent("autocomplete-select", {
        detail: { selectedOption: V }
      });
      (Y = B.current) == null || Y.dispatchEvent(oe);
    }, Ye = (V) => {
      R == null || R(V);
    }, Ee = t.filter(({ label: V }) => {
      const ee = M.toLowerCase().trim(), F = V.toLowerCase();
      return A === "startsWith" ? F.startsWith(ee) : F.includes(ee);
    }), et = (V) => {
      z || (Ge().dispatchEvent(
        new CustomEvent(nn, {
          detail: { id: xe }
        })
      ), Ee.length > 0 && T(!0)), O == null || O(V);
    }, tt = () => {
      if (!q.current || L === void 0 || L <= 0) return;
      const { scrollTop: V, scrollHeight: ee, clientHeight: F } = q.current;
      V + F >= ee - 10 && W((Y) => Math.min(Y + P, Ee.length));
    };
    ue(() => {
      L !== void 0 && L > 0 && W(L);
    }, [M, L]);
    const We = L !== void 0 && L > 0 ? Ee.slice(0, K) : Ee, ze = (V, ee) => V ? V.replace(/\{(\w+)\}/g, (F, oe) => {
      var Y;
      return ((Y = ee[oe]) == null ? void 0 : Y.toString()) || F;
    }) : "", dt = z ? n : w, ut = S && M && !I.disabled && !I.readOnly, Fe = ut ? "mdi:close" : d, Nt = (V) => {
      if (!(!dt || We.length === 0))
        switch (V.key) {
          case "Enter":
            V.preventDefault(), We.length === 1 && Se(We[0]);
            break;
          case "Tab":
            We.length === 1 && (V.preventDefault(), Se(We[0]));
            break;
          case "Escape":
            V.preventDefault(), T(!1);
            break;
        }
    }, bt = () => {
      if (!dt) return null;
      const V = Ge();
      if (!("body" in V)) return null;
      const ee = /* @__PURE__ */ i.jsx(
        "div",
        {
          ref: H,
          className: "fixed z-[9999] min-w-[8rem] rounded-md border border-neutral-200 bg-white py-1 shadow-lg overflow-hidden",
          style: { maxHeight: `${b}px` },
          onClick: (F) => F.stopPropagation(),
          children: /* @__PURE__ */ i.jsx(
            "div",
            {
              ref: q,
              className: "overflow-auto",
              style: { maxHeight: `${b}px` },
              onScroll: tt,
              children: o ? /* @__PURE__ */ i.jsx("div", { className: "flex items-center justify-center py-2", children: /* @__PURE__ */ i.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" }) }) : We.length > 0 ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                We.map((F) => /* @__PURE__ */ i.jsx(
                  Ur,
                  {
                    value: F.value,
                    selected: F.label === M,
                    onClick: () => Se(F),
                    children: a ? a(F) : F.label
                  },
                  F.value
                )),
                L !== void 0 && L > 0 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                  K < Ee.length && j && /* @__PURE__ */ i.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500 text-center", children: ze(j, {
                    current: K,
                    total: Ee.length
                  }) }),
                  K >= Ee.length && Ee.length > 0 && y && /* @__PURE__ */ i.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500 text-center", children: ze(y, {
                    total: Ee.length
                  }) })
                ] })
              ] }) : /* @__PURE__ */ i.jsx("div", { className: "px-2 py-2 text-sm text-neutral", children: k })
            }
          )
        }
      );
      return At(ee, V.body);
    };
    return /* @__PURE__ */ i.jsxs("div", { ref: ne, className: _("relative", E ? "w-full" : "inline-block"), children: [
      /* @__PURE__ */ i.jsx("div", { ref: B, className: _(!E && "inline-block"), children: /* @__PURE__ */ i.jsx(
        Da,
        {
          ref: p,
          value: M,
          onChange: Ue,
          onFocus: et,
          onBlur: Ye,
          onKeyDown: Nt,
          variant: s,
          size: l,
          rounded: c,
          leftIcon: u,
          rightIcon: Fe,
          error: f,
          errorText: m,
          helperText: g,
          label: x,
          required: h,
          labelPlacement: $,
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
}, Ml = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full"
}, Ap = ({
  items: e,
  multiple: t = !1,
  defaultOpenIds: r = [],
  icon: n = "mdi:chevron-down",
  iconPosition: o = "right",
  className: a,
  contentClassName: s,
  variant: l = "primary",
  shadow: c = "none",
  rounded: u = "xl"
}) => {
  const [d, f] = te(r), m = (x) => {
    f(
      t ? (h) => h.includes(x) ? h.filter(($) => $ !== x) : [...h, x] : (h) => h.includes(x) ? [] : [x]
    );
  }, g = Rl[l];
  return /* @__PURE__ */ i.jsx("div", { className: be("w-full space-y-2", a), children: e.map((x) => {
    const h = d.includes(x.id), $ = !!x.disabled;
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: be(
          "border overflow-hidden",
          "bg-white",
          "border-gray-200",
          Ll[c],
          Ml[u],
          "transition-shadow duration-200"
        ),
        children: [
          /* @__PURE__ */ i.jsxs(
            "button",
            {
              onClick: () => !$ && m(x.id),
              disabled: $,
              className: be(
                "w-full flex items-center justify-between p-4",
                "text-left transition-colors",
                g.hover,
                h && g.active,
                g.text,
                $ && "opacity-50 cursor-not-allowed"
              ),
              children: [
                o === "left" && /* @__PURE__ */ i.jsx(
                  "div",
                  {
                    className: be(
                      "mr-3 transition-transform duration-200",
                      h && "rotate-180"
                    ),
                    children: /* @__PURE__ */ i.jsx(de, { icon: n, className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ i.jsx("div", { className: "flex-1", children: x.title }),
                o === "right" && /* @__PURE__ */ i.jsx(
                  "div",
                  {
                    className: be(
                      "ml-3 transition-transform duration-200",
                      h && "rotate-180"
                    ),
                    children: /* @__PURE__ */ i.jsx(de, { icon: n, className: "w-5 h-5" })
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
                h ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              ),
              children: /* @__PURE__ */ i.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ i.jsx(
                "div",
                {
                  className: be(
                    "p-4 border-t border-gray-200",
                    s
                  ),
                  children: x.content
                }
              ) })
            }
          )
        ]
      },
      x.id
    );
  }) });
}, Ip = ({
  src: e,
  alt: t = "avatar",
  size: r = "medium",
  shape: n = "circle",
  className: o = "",
  variant: a = "cover"
}) => {
  const s = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16"
  }, l = {
    circle: "rounded-full",
    square: "rounded-lg"
  }, c = gt(
    "inline-flex items-center justify-center overflow-hidden bg-gray-200",
    s[r],
    l[n],
    o
  );
  return /* @__PURE__ */ i.jsx("div", { className: c, children: e ? /* @__PURE__ */ i.jsx(
    "img",
    {
      src: e,
      alt: t,
      className: gt("w-full h-full", a === "cover" ? "object-cover" : "object-contain")
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
}, Op = ({
  children: e,
  variant: t = "primary",
  size: r = "medium",
  rounded: n = "xl",
  className: o = ""
}) => {
  const a = {
    primary: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800"
  }, s = {
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
    a[t],
    s[r],
    l[n],
    o
  );
  return /* @__PURE__ */ i.jsx("span", { className: c, children: e });
}, Al = De(
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
), Ke = Ae(
  ({
    className: e,
    variant: t = "primary",
    size: r = "md",
    rounded: n = "xl",
    fullWidth: o = !1,
    isLoading: a = !1,
    leftIcon: s,
    rightIcon: l,
    isIconOnly: c = !1,
    children: u,
    ...d
  }, f) => {
    const g = c || !!(s || l) && !u;
    return /* @__PURE__ */ i.jsxs(
      "button",
      {
        className: _(
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
        disabled: d.disabled || a,
        ...d,
        children: [
          a && /* @__PURE__ */ i.jsx("span", { className: "animate-spin inline-block w-4 h-4 border-2 border-current border-r-transparent rounded-full" }),
          s && !a && /* @__PURE__ */ i.jsx(de, { icon: s, className: "w-4 h-4", inline: !0 }),
          u && /* @__PURE__ */ i.jsx("span", { children: u }),
          l && !a && /* @__PURE__ */ i.jsx(de, { icon: l, className: "w-4 h-4", inline: !0 })
        ]
      }
    );
  }
);
Ke.displayName = "Button";
const Il = De(
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
), Yn = Ae(
  ({
    className: e,
    variant: t = "default",
    padding: r = "md",
    shadow: n = "none",
    rounded: o = "2xl",
    asChild: a = !1,
    ...s
  }, l) => /* @__PURE__ */ i.jsx(
    "div",
    {
      className: _(Il({ variant: t, padding: r, shadow: n, rounded: o, className: e })),
      ref: l,
      ...s
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
  variant: a = "square",
  color: s = "primary",
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
    a === "circle" ? 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=")]' : 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgM0w0LjUgOC41TDIgNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=")]',
    {
      square: "rounded",
      circle: "rounded-full"
    }[a],
    u[o],
    d[s],
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
          ref: (h) => {
            h && (h.indeterminate = n);
          },
          ...c
        }
      ),
      e && /* @__PURE__ */ i.jsx("label", { className: x, children: e })
    ] }),
    t && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-sm text-danger-600", children: t })
  ] });
}, an = De(
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
), Ol = Ae(
  ({
    className: e,
    options: t = [],
    value: r,
    defaultValue: n = [],
    onChange: o,
    layout: a = "vertical",
    size: s = "md",
    error: l = !1,
    errorText: c,
    helperText: u,
    label: d,
    required: f = !1,
    labelPlacement: m = "top",
    fullWidth: g = !1,
    disabled: x = !1,
    variant: h = "square",
    color: $ = "primary",
    checkboxSize: E = "sm",
    showSelectAll: N = !1,
    selectAllText: C = "Select All",
    indeterminateSelectAll: O = !0,
    gap: R,
    selectAllGap: S,
    id: D,
    ...A
  }, L) => {
    const P = D || ie.useId(), b = `${P}-helper`, k = `${P}-error`, j = `${P}-group`, [y, I] = ie.useState(n), p = r !== void 0 ? r : y, w = (z, X) => {
      const xe = X ? [...p, z] : p.filter((fe) => fe !== z);
      r === void 0 && I(xe), o == null || o(xe);
    }, T = (z) => {
      const X = z ? t.map((xe) => xe.value) : [];
      r === void 0 && I(X), o == null || o(X);
    }, M = t.length > 0 && p.length === t.length, U = p.length > 0 && p.length < t.length, K = O && U, W = (z) => z === "none" ? "gap-0" : z === "xs" ? "gap-1" : z === "sm" ? "gap-2" : z === "md" ? "gap-3" : z === "lg" ? "gap-4" : z === "xl" ? "gap-6" : null, ne = W(R), B = W(S), H = /* @__PURE__ */ i.jsx("div", { className: _("relative", !g && "inline-block"), children: /* @__PURE__ */ i.jsxs(
      "fieldset",
      {
        ref: L,
        id: j,
        className: _(
          an({ layout: a, size: s }),
          ne,
          e
        ),
        "aria-describedby": l ? k : u ? b : void 0,
        "aria-invalid": l,
        "aria-required": f,
        ...A,
        children: [
          N && t.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: _(
            "flex flex-col",
            B || ne || an({ layout: "vertical", size: s })
          ), children: [
            /* @__PURE__ */ i.jsx(
              on,
              {
                label: C,
                checked: M,
                indeterminate: K,
                onChange: (z) => T(z.target.checked),
                disabled: x,
                variant: h,
                color: l ? "error" : $,
                variantSize: E,
                error: l ? " " : void 0
              }
            ),
            /* @__PURE__ */ i.jsx("div", { className: _(
              "flex",
              a === "vertical" && "flex-col",
              a === "horizontal" && "flex-row flex-wrap",
              a === "grid" && "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
              ne || an({ layout: a, size: s })
            ), children: t.map((z) => /* @__PURE__ */ i.jsx(
              on,
              {
                label: z.label,
                checked: p.includes(z.value),
                onChange: (X) => w(z.value, X.target.checked),
                disabled: x || z.disabled,
                indeterminate: z.indeterminate,
                variant: h,
                color: l ? "error" : $,
                variantSize: E,
                error: l ? " " : void 0
              },
              z.value
            )) })
          ] }),
          !N && /* @__PURE__ */ i.jsx(i.Fragment, { children: t.map((z) => /* @__PURE__ */ i.jsx(
            on,
            {
              label: z.label,
              checked: p.includes(z.value),
              onChange: (X) => w(z.value, X.target.checked),
              disabled: x || z.disabled,
              indeterminate: z.indeterminate,
              variant: h,
              color: l ? "error" : $,
              variantSize: E,
              error: l ? " " : void 0
            },
            z.value
          )) })
        ]
      }
    ) }), q = /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      l && c && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger", id: k, children: c }),
      !l && u && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral", id: b, children: u })
    ] });
    return m === "left" ? /* @__PURE__ */ i.jsx("div", { className: _(g ? "w-full" : "inline-block", e), children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-start gap-4", children: [
      d && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: j,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            d,
            f && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: _("flex-1", !g && "inline-block"), children: [
        H,
        q
      ] })
    ] }) }) : /* @__PURE__ */ i.jsxs("div", { className: _(g ? "w-full" : "inline-block", e), children: [
      d && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: j,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            d,
            f && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      H,
      q
    ] });
  }
);
Ol.displayName = "CheckBoxGroup";
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
  onClose: a,
  className: s,
  icon: l
}) => /* @__PURE__ */ i.jsxs(
  "div",
  {
    className: _(
      "inline-flex items-center gap-1.5 font-medium",
      _l[t][r],
      Dl[n],
      zl[o],
      s
    ),
    children: [
      l && /* @__PURE__ */ i.jsx("span", { className: "inline-flex items-center", children: /* @__PURE__ */ i.jsx(de, { icon: l, className: "w-4 h-4" }) }),
      e,
      a && /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: a,
          className: "ml-1 rounded-full hover:bg-black/10 p-0.5",
          "aria-label": "Close",
          children: /* @__PURE__ */ i.jsx(de, { icon: "mdi:close", className: "w-3 h-3" })
        }
      )
    ]
  }
);
var Fa = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(Ca, function() {
    return function(r, n) {
      n.prototype.isSameOrAfter = function(o, a) {
        return this.isSame(o, a) || this.isAfter(o, a);
      };
    };
  });
})(Fa);
var Fl = Fa.exports;
const Vl = /* @__PURE__ */ Ra(Fl);
var Va = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(Ca, function() {
    return function(r, n) {
      n.prototype.isSameOrBefore = function(o, a) {
        return this.isSame(o, a) || this.isBefore(o, a);
      };
    };
  });
})(Va);
var Bl = Va.exports;
const Gl = /* @__PURE__ */ Ra(Bl);
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
), kn = Ae(
  ({
    value: e,
    onChange: t,
    minDate: r,
    maxDate: n,
    variant: o = "default",
    size: a = "md",
    rounded: s = "xl",
    disabled: l = !1,
    error: c = !1,
    errorText: u,
    helperText: d,
    label: f,
    required: m = !1,
    labelPlacement: g = "top",
    fullWidth: x = !1,
    className: h,
    placeholder: $ = "Select date",
    leftIcon: E,
    rightIcon: N,
    monthsToShow: C = 1,
    valueFormatter: O,
    rangeStart: R,
    rangeEnd: S,
    closeOnSelect: D = !0,
    calendarFooter: A,
    format: L = "DD-MM-YYYY",
    allowInput: P = !1,
    ...b
  }, k) => {
    const [j, y] = te(!1), [I, p] = te(e), [w, T] = te(e || /* @__PURE__ */ new Date()), [M, U] = te(!1), [K, W] = te(""), ne = re(null), B = re(null), H = re(null), q = re(null), z = re(null);
    Wn(k, () => z.current, []), ue(() => {
      p(e || void 0), W(e ? X(e, L) : "");
    }, [e, L]), ue(() => {
      W(I ? X(I, L) : "");
    }, [I, L]);
    const X = (V, ee) => {
      const F = V.getDate().toString().padStart(2, "0"), oe = (V.getMonth() + 1).toString().padStart(2, "0"), Y = V.getFullYear().toString();
      switch (ee) {
        case "DD-MM-YYYY":
          return `${F}-${oe}-${Y}`;
        case "YYYY-MM-DD":
          return `${Y}-${oe}-${F}`;
        case "MM-DD-YYYY":
          return `${oe}-${F}-${Y}`;
        default:
          return `${F}-${oe}-${Y}`;
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
      if (M && q.current) {
        const V = Ne(w).year(), ee = q.current.querySelectorAll("[data-year]"), F = Array.from(ee).find(
          (oe) => parseInt(oe.getAttribute("data-year") || "0") === V
        );
        F && F.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center"
        });
      }
    }, [M, w]);
    const fe = () => {
      if (!j || !B.current || !H.current) return;
      const { bottom: V, left: ee, width: F, top: oe } = B.current.getBoundingClientRect(), Y = H.current, ve = it(), le = ve.innerHeight - V, je = oe, It = le < (C === 2 ? 400 : 350), Ot = je > le, ht = It && Ot;
      C === 2 ? (Object.assign(Y.style, {
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
        left: `${ee + F / 2}px`,
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
      const V = it(), ee = Ge(), F = () => {
        j && fe();
      }, oe = () => {
        j && fe();
      }, Y = (ve) => {
        ve.key === "Escape" && j && (y(!1), U(!1));
      };
      return j && (fe(), V.addEventListener("scroll", F, !0), V.addEventListener("resize", oe), ee.addEventListener("keydown", Y)), () => {
        V.removeEventListener("scroll", F, !0), V.removeEventListener("resize", oe), ee.removeEventListener("keydown", Y);
      };
    }, [j]);
    const Ue = (V) => {
      if (R !== void 0 && S !== void 0)
        if (R && S)
          p(V), W(X(V, L)), t == null || t(V);
        else if (R) {
          const F = V;
          Ne(F).isBefore(R), p(F), W(X(F, L)), t == null || t(F), y(!1), U(!1);
        } else
          p(V), W(X(V, L)), t == null || t(V);
      else
        p(V), W(X(V, L)), t == null || t(V), y(!1), U(!1);
    }, He = () => {
      T(Ne(w).subtract(1, "month").toDate());
    }, Se = () => {
      T(Ne(w).add(1, "month").toDate());
    }, Ye = (V) => {
      const ee = Ne(V).startOf("month"), F = Ne(V).endOf("month"), oe = [];
      let Y = ee;
      for (; Y.isBefore(F) || Y.isSame(F, "day"); )
        oe.push(Y.toDate()), Y = Y.add(1, "day");
      return oe;
    }, Ee = (V) => !!(r && Ne(V).isBefore(r, "day") || n && Ne(V).isAfter(n, "day")), et = (V) => {
      if (!P) return;
      const F = V.target.value.replace(/[^\d-]/g, "");
      if (F.length < K.length) {
        W(F);
        return;
      }
      if (F.replace(/-/g, "").length > 8)
        return;
      let Y = F;
      L === "DD-MM-YYYY" ? (F.length === 2 && !F.includes("-") || F.length === 5 && F.split("-").length === 2) && (Y = F + "-") : L === "YYYY-MM-DD" ? (F.length === 4 && !F.includes("-") || F.length === 7 && F.split("-").length === 2) && (Y = F + "-") : L === "MM-DD-YYYY" && (F.length === 2 && !F.includes("-") || F.length === 5 && F.split("-").length === 2) && (Y = F + "-"), W(Y);
    }, tt = () => {
      if (!P) return;
      const V = xe(K, L);
      if (V) {
        if (r && V < r) {
          W(X(r, L)), p(r), t == null || t(r);
          return;
        }
        if (n && V > n) {
          W(X(n, L)), p(n), t == null || t(n);
          return;
        }
        p(V), t == null || t(V), W(X(V, L));
      } else
        W(I ? X(I, L) : "");
    }, We = () => {
      P && y(!1);
    }, ze = (V) => {
      P && V.key === "Enter" && (V.preventDefault(), tt());
    }, dt = (V) => {
      const ee = Ne(w).year(V).toDate();
      T(ee), U(!1);
    }, ut = () => {
      if (!M) return null;
      const V = Ne(w).year(), ee = 1900, oe = Array.from(
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
              className: _(
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
      if (!j) return null;
      const V = Ge();
      if (!("body" in V)) return null;
      const ee = Array.from({ length: C }).map(
        (F, oe) => Ne(w).add(oe, "month").toDate()
      );
      return At(
        /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "fixed inset-0 z-[9998]",
              onClick: () => {
                M || y(!1);
              }
            }
          ),
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: H,
              className: "fixed z-[9999] bg-white border border-gray-200 rounded-md shadow-lg",
              onClick: (F) => F.stopPropagation(),
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
                  /* @__PURE__ */ i.jsx("div", { className: "relative", children: /* @__PURE__ */ i.jsx("span", { className: "font-medium text-gray-900", children: C === 1 ? /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ i.jsx("span", { children: Ne(w).format("MMMM") }),
                    /* @__PURE__ */ i.jsxs(
                      "div",
                      {
                        className: "cursor-pointer flex items-center gap-1",
                        onClick: () => U(!M),
                        children: [
                          /* @__PURE__ */ i.jsx("span", { children: Ne(w).format("YYYY") }),
                          /* @__PURE__ */ i.jsx(Ke, { variant: "ghost", size: "sm", leftIcon: M ? "mdi:chevron-up" : "mdi:chevron-down" })
                        ]
                      }
                    )
                  ] }) : `${Ne(w).format("MMMM YYYY")} - ${Ne(
                    w
                  ).add(C - 1, "month").format("MMMM YYYY")}` }) }),
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
                M ? ut() : /* @__PURE__ */ i.jsx(
                  "div",
                  {
                    className: _(
                      C === 2 ? "flex gap-5 p-2 mx-auto w-fit" : "justify-between p-2 mx-auto w-fit"
                    ),
                    children: ee.map((F, oe) => {
                      const Y = Ye(F), ve = Ne(F).startOf("month").day();
                      return /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col", children: [
                        /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-7 gap-y-1 my-1", children: [
                          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                            (le, je) => {
                              const ct = je === 0 || je === 6;
                              return /* @__PURE__ */ i.jsx(
                                "div",
                                {
                                  className: _(
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
                            const je = I && Ne(le).isSame(I, "day"), ct = Ee(le), It = Ne(le).isSame(
                              F,
                              "month"
                            ), Ot = R && S && Ne(le).isSameOrAfter(R, "day") && Ne(le).isSameOrBefore(S, "day"), ht = R && Ne(le).isSame(R, "day"), jr = S && Ne(le).isSame(S, "day"), ir = Ne(le).day() === 0 || Ne(le).day() === 6, Et = R && S;
                            return /* @__PURE__ */ i.jsx("div", { className: "flex flex-col items-center justify-center", children: /* @__PURE__ */ i.jsx(
                              "div",
                              {
                                className: _(
                                  Ot && "rounded-none bg-primary-50",
                                  Et && ht && "rounded-l-full",
                                  Et && jr && "rounded-r-full"
                                ),
                                children: /* @__PURE__ */ i.jsx(
                                  "button",
                                  {
                                    onClick: () => !ct && Ue(le),
                                    disabled: ct,
                                    className: _(
                                      "p-2 text-sm transition-colors duration-200 w-10 h-10 rounded-full",
                                      ir && "!text-danger",
                                      je && "bg-primary !text-white hover:bg-primary-600 active:bg-primary-700",
                                      je && !Et && "rounded-full",
                                      !je && !ct && "hover:bg-primary-50 active:bg-primary-100",
                                      !It && "text-neutral-400",
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
                        A
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
        className: _("relative", !x && "inline-block"),
        ref: B,
        onClick: () => !l && !P && y(!j),
        children: [
          E && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: (V) => {
                V.stopPropagation(), l || y(!j);
              },
              children: /* @__PURE__ */ i.jsx(de, { icon: E, className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              ref: z,
              type: "text",
              value: P ? K : O ? O() : I ? X(I, L) : "",
              placeholder: P ? L : $,
              readOnly: !P,
              maxLength: P ? 10 : void 0,
              onChange: et,
              onBlur: tt,
              onFocus: We,
              onKeyDown: ze,
              className: _(
                Hl({ variant: c ? "error" : o, size: a, rounded: s, fullWidth: x }),
                E && "pl-10",
                N && "pr-10",
                h
              ),
              disabled: l,
              ...b
            }
          ),
          N && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: (V) => {
                V.stopPropagation(), l || y(!j);
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
        className: _(x ? "w-full" : "inline-block", h),
        ref: ne,
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-start gap-4", children: [
            f && /* @__PURE__ */ i.jsxs("label", { className: "block text-sm text-neutral-900 pt-2", children: [
              f,
              m && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: _("flex-1", !x && "inline-block"), children: [
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
        className: _(x ? "w-full" : "inline-block", h),
        ref: ne,
        children: [
          f && /* @__PURE__ */ i.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
            f,
            m && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
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
  error: a = !1,
  errorText: s,
  format: l = "DD-MM-YYYY",
  allowInput: c = !1,
  ...u
}) => {
  const [d, f] = te([
    void 0,
    void 0
  ]);
  if (e === "single") {
    const m = Array.isArray(t) ? t[0] : t;
    return /* @__PURE__ */ i.jsx(
      kn,
      {
        value: m === null ? void 0 : m,
        onChange: (g) => r == null ? void 0 : r(g),
        monthsToShow: n,
        calendarFooter: o,
        error: a,
        errorText: s,
        format: l,
        allowInput: c,
        ...u
      }
    );
  }
  if (e === "range") {
    let [m, g] = Array.isArray(t) ? t : d;
    const x = ($) => {
      !m || m && g ? (f([$, void 0]), r == null || r([$, void 0])) : m && !g && ($ < m ? (f([$, m]), r == null || r([$, m])) : (f([m, $]), r == null || r([m, $])));
    }, h = () => {
      if (!m) return "";
      const $ = (E) => E ? E.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }) : "";
      return m && g ? `${$(m)} - ${$(g)}` : $(m);
    };
    return /* @__PURE__ */ i.jsx(
      kn,
      {
        value: m,
        onChange: x,
        monthsToShow: n,
        placeholder: u.placeholder || "Select date range",
        valueFormatter: h,
        rangeStart: m,
        rangeEnd: g,
        closeOnSelect: !!g,
        calendarFooter: o,
        error: a,
        errorText: s,
        format: l,
        allowInput: c,
        ...u
      }
    );
  }
  return null;
};
Wl.displayName = "DatePicker";
const Ba = Ae(
  ({ children: e, onClose: t, className: r, ...n }, o) => /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: o,
      className: _("mb-4 flex items-center justify-between", r),
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
}, Ul = Ae(
  ({
    isOpen: e,
    onClose: t,
    children: r,
    className: n,
    backdrop: o = "dark",
    header: a,
    closeOnBackdropClick: s = !0,
    size: l = "md",
    sizeClassName: c,
    rounded: u = "xl",
    position: d = "center",
    scrollBehavior: f = "normal",
    animationDuration: m = 300,
    animationDelay: g = 0,
    ...x
  }, h) => {
    const [$, E] = te(e), [N, C] = te(!1), O = re(!1);
    if (Ta(() => {
      if (e) {
        E(!0), C(!1);
        const k = Ge();
        "body" in k && (f !== "outside" ? (k.body.style.overflow = "hidden", O.current = !0) : O.current = !1);
        const j = requestAnimationFrame(() => C(!0));
        return () => cancelAnimationFrame(j);
      }
      C(!1);
      const b = setTimeout(() => {
        E(!1);
        const k = Ge();
        "body" in k && O.current && (k.body.style.overflow = "", O.current = !1);
      }, m + g);
      return () => clearTimeout(b);
    }, [e, f, m, g]), ue(() => {
      const b = (k) => {
        k instanceof KeyboardEvent && k.key === "Escape" && t();
      };
      return e && Ge().addEventListener("keydown", b), () => {
        Ge().removeEventListener("keydown", b);
      };
    }, [e, t]), !$) return null;
    const R = {
      blur: "backdrop-blur-sm bg-black/30",
      dark: "bg-black/50",
      transparent: "bg-transparent"
    }, S = () => {
      s && t();
    }, D = Ge();
    if (!("body" in D)) return null;
    const A = (b) => {
      switch (b) {
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
    }, L = (() => {
      if (f === "inside")
        return l === "fullscreen" || d === "left" || d === "right" ? "overflow-y-auto" : "max-h-screen overflow-y-auto";
    })(), P = {
      transitionDuration: `${m}ms`,
      transitionDelay: `${g}ms`
    };
    return At(
      /* @__PURE__ */ i.jsx(
        "div",
        {
          className: _(
            "fixed inset-0 z-50 flex transition-opacity",
            R[o],
            N ? "opacity-100" : "opacity-0",
            d === "center" && "items-center justify-center",
            d === "top" && "items-start justify-center",
            d === "bottom" && "items-end justify-center",
            d === "left" && "items-stretch justify-start",
            d === "right" && "items-stretch justify-end"
          ),
          style: P,
          onClick: S,
          children: /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: h,
              className: _(
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
                l === "fullscreen" ? "rounded-none" : A(u),
                // Corner overrides so the edge touching the viewport is not rounded
                d === "left" && "rounded-l-none",
                d === "right" && "rounded-r-none",
                d === "top" && "rounded-t-none",
                d === "bottom" && "rounded-b-none",
                L
              ),
              style: P,
              onClick: (b) => b.stopPropagation(),
              ...x,
              children: [
                a && /* @__PURE__ */ i.jsx(Ba, { onClose: t, children: a }),
                r
              ]
            }
          )
        }
      ),
      D.body
    );
  }
), Yl = Ae(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ i.jsx(
    "h2",
    {
      ref: n,
      className: _("text-xl font-semibold text-gray-900", t),
      ...r,
      children: e
    }
  )
), ql = Ae(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ i.jsx("div", { ref: n, className: _("text-gray-600", t), ...r, children: e })
), Xl = Ae(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: n,
      className: _("mt-6 flex justify-end gap-3", t),
      ...r,
      children: e
    }
  )
);
Ul.displayName = "Dialog";
Yl.displayName = "DialogTitle";
ql.displayName = "DialogBody";
Xl.displayName = "DialogActions";
Ba.displayName = "DialogHeader";
const Zl = ({
  orientation: e = "horizontal",
  variant: t = "solid",
  color: r = "neutral",
  size: n = "sm",
  className: o = ""
}) => {
  const a = {
    horizontal: "w-full border-t-0 border-l-0 border-r-0 border-b",
    vertical: "h-full border-l border-t-0 border-r-0 border-b-0"
  }, s = {
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
    a[e],
    s[t],
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
}, To = {
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
  className: a,
  disabled: s = !1,
  placeholder: l = "Drag and drop files here or click to browse",
  variant: c = "default",
  shadow: u = "none",
  rounded: d = "lg",
  children: f,
  showFileList: m = !0,
  showPlaceholder: g = !0,
  showMaxSize: x = !0,
  icon: h = "mdi:upload"
}) => {
  const [$, E] = te(!1), [N, C] = te(null), O = re(null), R = pe((j) => {
    j.preventDefault(), s || E(!0);
  }, [s]), S = pe((j) => {
    j.preventDefault(), E(!1);
  }, []), D = pe((j) => j.size > t ? `File size exceeds ${t / (1024 * 1024)}MB limit` : e[0] !== "*" && !e.some((y) => y.startsWith(".") ? j.name.toLowerCase().endsWith(y.toLowerCase()) : j.type.startsWith(y)) ? `File type not allowed. Allowed types: ${e.join(", ")}` : null, [e, t]), A = pe((j) => {
    if (j.preventDefault(), E(!1), C(null), s) return;
    const y = Array.from(j.dataTransfer.files), I = [], p = [];
    if (y.forEach((w) => {
      const T = D(w);
      T ? p.push(`${w.name}: ${T}`) : I.push(w);
    }), p.length > 0 && C(p.join(`
`)), I.length > 0) {
      const w = r ? [...n, ...I] : I;
      o == null || o(w);
    }
  }, [s, r, o, D, n]), L = pe((j) => {
    if (C(null), s || !j.target.files) return;
    const y = Array.from(j.target.files), I = [], p = [];
    if (y.forEach((w) => {
      const T = D(w);
      T ? p.push(`${w.name}: ${T}`) : I.push(w);
    }), p.length > 0 && C(p.join(`
`)), I.length > 0) {
      const w = r ? [...n, ...I] : I;
      o == null || o(w);
    }
    O.current && (O.current.value = "");
  }, [s, r, o, D, n]), P = pe((j) => {
    const y = [...n];
    y.splice(j, 1), o == null || o(y);
  }, [o, n]), b = (j) => j.type.startsWith("image/") ? /* @__PURE__ */ i.jsx(de, { icon: "mdi:image", className: "w-5 h-5" }) : j.type.startsWith("text/") ? /* @__PURE__ */ i.jsx(de, { icon: "mdi:file-document", className: "w-5 h-5" }) : /* @__PURE__ */ i.jsx(de, { icon: "mdi:file", className: "w-5 h-5" }), k = Jl[c];
  return /* @__PURE__ */ i.jsxs("div", { className: be("w-full", a), children: [
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: be(
          "p-6 text-center transition-colors",
          !f && [
            "border-2 border-dashed",
            k.border,
            k.bg,
            $ && k.active,
            !s && k.hover
          ],
          s && "opacity-50 cursor-not-allowed",
          Ql[u],
          To[d],
          !f && "cursor-pointer"
        ),
        onDragOver: R,
        onDragLeave: S,
        onDrop: A,
        onClick: () => {
          var j;
          return !s && !f && ((j = O.current) == null ? void 0 : j.click());
        },
        children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              ref: O,
              type: "file",
              accept: e.join(","),
              multiple: r,
              onChange: L,
              className: "hidden",
              disabled: s
            }
          ),
          f ? /* @__PURE__ */ i.jsx("div", { onClick: () => {
            var j;
            return !s && ((j = O.current) == null ? void 0 : j.click());
          }, children: f }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(de, { icon: h, className: "w-12 h-12 mx-auto mb-4 text-neutral-400" }),
            g && /* @__PURE__ */ i.jsx("p", { className: be("text-neutral-600", k.text), children: l }),
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
    m && n.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "mt-4 space-y-2", children: n.map((j, y) => /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: be(
          "flex items-center justify-between p-2",
          To[d],
          k.bg
        ),
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-center space-x-2", children: [
            b(j),
            /* @__PURE__ */ i.jsx("span", { className: be("text-sm", k.text), children: j.name }),
            /* @__PURE__ */ i.jsxs("span", { className: "text-xs text-neutral", children: [
              "(",
              (j.size / 1024).toFixed(1),
              " KB)"
            ] })
          ] }),
          !s && /* @__PURE__ */ i.jsx(
            "button",
            {
              onClick: () => P(y),
              className: "p-1 text-neutral hover:text-danger",
              children: /* @__PURE__ */ i.jsx(de, { icon: "mdi:close", className: "w-4 h-4" })
            }
          )
        ]
      },
      `${j.name}-${y}`
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
  showClose: a = !1,
  onClose: s,
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
  return /* @__PURE__ */ i.jsxs("div", { className: _(ec({ variant: n, rounded: o }), l), children: [
    r && /* @__PURE__ */ i.jsx(de, { icon: u(), className: _("h-5 w-5 flex-shrink-0", c()) }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex-1", children: [
      e && /* @__PURE__ */ i.jsx("h3", { className: "text-sm font-medium text-neutral-900", children: e }),
      /* @__PURE__ */ i.jsx("div", { className: "mt-1 text-sm text-neutral", children: t })
    ] }),
    a && /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        className: "ml-auto flex-shrink-0 text-neutral-400 hover:text-neutral",
        onClick: s,
        children: /* @__PURE__ */ i.jsx(de, { icon: "mdi:close", className: "h-5 w-5" })
      }
    )
  ] });
}, sn = "select-dropdown-opened", tc = De(
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
), Ga = Ae(
  ({
    className: e,
    variant: t = "default",
    size: r = "md",
    rounded: n = "xl",
    options: o,
    label: a,
    error: s = !1,
    errorText: l,
    helperText: c,
    required: u = !1,
    placeholder: d,
    value: f,
    onChange: m,
    disabled: g = !1,
    position: x = "bottom",
    fullWidth: h = !1,
    children: $,
    leftIcon: E,
    rightIcon: N,
    ...C
  }, O) => {
    const [R, S] = te(!1), D = re(null), A = re(null), P = `select-${ie.useId().replace(/:/g, "")}`, b = () => {
      if (R && D.current && A.current) {
        const w = D.current.getBoundingClientRect(), T = A.current, M = it(), U = M.innerHeight - w.bottom, K = w.top, ne = w.bottom + T.offsetHeight + 4 >= M.innerHeight, B = K > U, H = ne && B;
        x === "bottom" || x === "top" ? (T.style.position = "fixed", T.style.left = `${w.left}px`, T.style.width = `${w.width}px`, x === "bottom" && H ? (T.style.bottom = `${M.innerHeight - w.top + 4}px`, T.style.top = "auto", T.style.maxHeight = `${K - 8}px`) : x === "bottom" ? (T.style.top = `${w.bottom + 4}px`, T.style.bottom = "auto", T.style.maxHeight = `${U - 8}px`) : x === "top" && !H ? (T.style.top = `${w.bottom + 4}px`, T.style.bottom = "auto", T.style.maxHeight = `${U - 8}px`) : (T.style.bottom = `${M.innerHeight - w.top + 4}px`, T.style.top = "auto", T.style.maxHeight = `${K - 8}px`)) : x === "left" ? (T.style.position = "fixed", T.style.right = `${M.innerWidth - w.left + 4}px`, T.style.top = `${w.top}px`, T.style.maxHeight = `${M.innerHeight - w.top - 8}px`) : x === "right" && (T.style.position = "fixed", T.style.left = `${w.right + 4}px`, T.style.top = `${w.top}px`, T.style.maxHeight = `${M.innerHeight - w.top - 8}px`);
      }
    };
    ue(() => {
      const w = it(), T = () => {
        R && b();
      }, M = () => {
        R && b();
      };
      return R && (b(), w.addEventListener("scroll", T, !0), w.addEventListener("resize", M)), () => {
        w.removeEventListener("scroll", T, !0), w.removeEventListener("resize", M);
      };
    }, [R, x]), ue(() => {
      const w = Ge(), T = (U) => {
        U.detail.id !== P && S(!1);
      }, M = (U) => {
        const K = U.target, W = D.current, ne = A.current;
        W && ne && !W.contains(K) && !ne.contains(K) && S(!1);
      };
      return w.addEventListener(sn, T), w.addEventListener("click", M), () => {
        w.removeEventListener(sn, T), w.removeEventListener("click", M);
      };
    }, [P]);
    const k = () => {
      if (g) return;
      if (R) {
        S(!1);
        return;
      }
      Ge().dispatchEvent(
        new CustomEvent(sn, {
          detail: { id: P }
        })
      ), S(!0);
    }, j = () => {
      if (o) {
        const w = o.find((T) => T.value === f);
        return w == null ? void 0 : w.label;
      }
      if ($) {
        const T = wr.toArray($).find(
          (M) => xr(M) && "value" in M.props && M.props.value === f
        );
        return xr(T) ? T.props.children : null;
      }
      return null;
    }, y = (w) => {
      g || (m == null || m(w), S(!1));
    }, I = () => o ? o.map((w) => /* @__PURE__ */ i.jsx(
      Ur,
      {
        value: w.value,
        disabled: w.disabled,
        selected: w.value === f,
        onClick: () => {
          w.onClick && w.onClick(w.value), y(w.value);
        },
        children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
          w.icon,
          w.label
        ] })
      },
      w.value
    )) : $ ? wr.map($, (w) => xr(w) && "value" in w.props ? Kn(w, {
      selected: w.props.value === f,
      onClick: () => y(w.props.value)
    }) : null) : null, p = () => {
      if (!R || g) return null;
      const w = /* @__PURE__ */ i.jsx(
        "div",
        {
          ref: A,
          className: _(
            "fixed z-[9999] min-w-[8rem] border border-neutral-200 bg-white py-1 shadow-lg rounded-lg",
            x === "left" || x === "right" ? "w-max" : "w-full"
          ),
          onClick: (M) => M.stopPropagation(),
          style: {
            overflowY: "auto"
          },
          children: I()
        }
      ), T = Ge();
      return "body" in T ? At(w, T.body) : null;
    };
    return /* @__PURE__ */ i.jsxs("div", { className: _(h ? "w-full" : "inline-block"), ref: O, ...C, children: [
      a && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: P,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            a,
            u && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "div",
        {
          className: _("relative", !h && "inline-block"),
          onClick: k,
          children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                id: P,
                ref: D,
                type: "button",
                className: _(
                  tc({ variant: s ? "error" : t, size: r, rounded: n, fullWidth: h }),
                  "flex items-center justify-between",
                  g && "cursor-not-allowed opacity-50",
                  E && "pl-10",
                  N && "pr-10",
                  e
                ),
                "aria-haspopup": "listbox",
                "aria-expanded": R,
                "aria-describedby": s ? `${P}-error` : c ? `${P}-helper` : void 0,
                disabled: g,
                children: [
                  E && /* @__PURE__ */ i.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ i.jsx(de, { icon: E, className: "w-4 h-4" }) }),
                  /* @__PURE__ */ i.jsx("span", { className: "flex items-center gap-2 min-w-0 flex-1", children: /* @__PURE__ */ i.jsx("span", { className: _(
                    "truncate text-left",
                    j() ? "text-neutral-900" : "text-neutral"
                  ), children: j() || d }) }),
                  N ? /* @__PURE__ */ i.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ i.jsx(de, { icon: N, className: "w-4 h-4" }) }) : /* @__PURE__ */ i.jsx(
                    de,
                    {
                      icon: "mdi:chevron-down",
                      className: _("transition-transform flex-shrink-0 ml-2 w-4 h-4", R && "rotate-180")
                    }
                  )
                ]
              }
            ),
            p()
          ]
        }
      ),
      s && l && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger", id: `${P}-error`, children: l }),
      !s && c && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral", id: `${P}-helper`, children: c })
    ] });
  }
);
Ga.displayName = "Select";
const rc = ({
  currentPage: e,
  totalPages: t,
  totalData: r,
  onPageChange: n,
  siblingCount: o = 1,
  className: a,
  perPageOptions: s,
  perPage: l = 10,
  label: c = "",
  onPerPageChange: u
}) => {
  const d = (g, x) => {
    const h = x - g + 1;
    return Array.from({ length: h }, ($, E) => E + g);
  }, m = (() => {
    const g = o * 2 + 3, x = g + 2;
    if (t > x) {
      const h = Math.max(2, e - o), $ = Math.min(t - 1, e + o);
      let E = d(h, $);
      const N = h > 2, C = t - $ > 1, O = g - (E.length + 1);
      if (N && !C)
        E = [...d(h - O, h - 1), ...E];
      else if (!N && C) {
        const R = d($ + 1, $ + O);
        E = [...E, ...R];
      } else N && C && (E = [...E]);
      return [1, ...E, t];
    }
    return d(1, t);
  })();
  return /* @__PURE__ */ i.jsxs(
    "nav",
    {
      className: be("flex items-center justify-between space-x-1", a),
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: "hidden sm:block text-sm text-neutral-700", children: [
          /* @__PURE__ */ i.jsx("b", { children: `${e} - ${t}` }),
          " dari ",
          r,
          " ",
          c
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
          s && s.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2 mr-4", children: [
            /* @__PURE__ */ i.jsx("span", { className: "text-neutral-700 text-sm", children: "Menampilkan" }),
            /* @__PURE__ */ i.jsx(
              Ga,
              {
                value: l == null ? void 0 : l.toString(),
                onChange: (g) => u && u(Number(g)),
                size: "sm",
                className: "w-16",
                fullWidth: !1,
                "aria-label": "Items per page",
                children: s.map((g) => /* @__PURE__ */ i.jsx(Ur, { value: g.toString(), children: g }, g))
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
          m.map((g, x) => {
            const h = g === e, $ = typeof g == "string" && g === "...";
            return /* @__PURE__ */ i.jsx(
              Ke,
              {
                variant: "ghost",
                onClick: () => !$ && n(g),
                className: be(
                  "px-3 py-1 rounded-md text-sm",
                  h ? "bg-primary text-white hover:bg-primary" : "text-gray-700",
                  $ && "cursor-default"
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
  value: a,
  error: s,
  color: l = "primary",
  variantSize: c = "sm"
}) => {
  const u = (m) => {
    n == null || n(m.target.checked);
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
            value: a,
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
              t ? "" : s ? "border-danger-600" : "border-gray-300",
              !t && s && "hover:border-danger-700",
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
              s && "text-danger-600"
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
), ac = Ae(
  ({
    className: e,
    options: t = [],
    value: r,
    defaultValue: n,
    onChange: o,
    layout: a = "vertical",
    size: s = "md",
    error: l = !1,
    errorText: c,
    helperText: u,
    label: d,
    required: f = !1,
    labelPlacement: m = "top",
    fullWidth: g = !1,
    disabled: x = !1,
    name: h,
    gap: $,
    color: E = "primary",
    radioSize: N = "sm",
    id: C,
    ...O
  }, R) => {
    const S = C || ie.useId(), D = `${S}-helper`, A = `${S}-error`, L = `${S}-group`, P = h || `radio-group-${S}`, [b, k] = ie.useState(n), j = r !== void 0 ? r : b, y = (M) => {
      r === void 0 && k(M), o == null || o(M);
    }, p = ((M) => M === "none" ? "gap-0" : M === "xs" ? "gap-1" : M === "sm" ? "gap-2" : M === "md" ? "gap-3" : M === "lg" ? "gap-4" : M === "xl" ? "gap-6" : null)($), w = /* @__PURE__ */ i.jsx("div", { className: _("relative", !g && "inline-block"), children: /* @__PURE__ */ i.jsx(
      "fieldset",
      {
        ref: R,
        id: L,
        className: _(
          oc({ layout: a, size: s }),
          p,
          e
        ),
        "aria-describedby": l ? A : u ? D : void 0,
        "aria-invalid": l,
        "aria-required": f,
        ...O,
        children: t.map((M) => /* @__PURE__ */ i.jsx(
          nc,
          {
            label: M.label,
            checked: j === M.value,
            onChange: () => y(M.value),
            disabled: x || M.disabled,
            name: P,
            value: M.value,
            color: l ? "error" : E,
            error: l ? " " : void 0,
            variantSize: N
          },
          M.value
        ))
      }
    ) }), T = /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      l && c && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger", id: A, children: c }),
      !l && u && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral", id: D, children: u })
    ] });
    return m === "left" ? /* @__PURE__ */ i.jsx("div", { className: _(g ? "w-full" : "inline-block", e), children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-start gap-4", children: [
      d && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: L,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            d,
            f && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: _("flex-1", !g && "inline-block"), children: [
        w,
        T
      ] })
    ] }) }) : /* @__PURE__ */ i.jsxs("div", { className: _(g ? "w-full" : "inline-block", e), children: [
      d && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: L,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            d,
            f && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      w,
      T
    ] });
  }
);
ac.displayName = "RadioGroup";
const Po = De("animate-pulse bg-neutral-200", {
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
}), sc = ({
  width: e,
  height: t,
  variant: r = "default",
  rounded: n = "xl",
  fullWidth: o = !1,
  pulseVariant: a = "default",
  className: s
}) => a === "left-to-right" ? /* @__PURE__ */ i.jsxs("div", { className: "relative overflow-hidden", children: [
  /* @__PURE__ */ i.jsx(
    "div",
    {
      className: _(
        Po({ variant: r, rounded: n, fullWidth: o, pulseVariant: "default" }),
        s
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
    className: _(
      Po({ variant: r, rounded: n, fullWidth: o, pulseVariant: a }),
      s
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
  onChange: a,
  className: s,
  disabled: l = !1,
  showValue: c = !1,
  marks: u = [],
  range: d = !1
}) => {
  const f = d, [m, g] = te(
    n !== void 0 ? n : o !== void 0 ? o : f ? [e, t] : e
  ), [x, h] = te(null), $ = re(null), E = n !== void 0 ? n : m, [N, C] = f ? Array.isArray(E) ? E : [e, t] : [typeof E == "number" ? E : e, t], O = (p) => Math.min(Math.max(p, e), t), R = (p) => {
    if (l) return;
    let w;
    f && Array.isArray(p) ? w = [O(p[0]), O(p[1])] : !f && typeof p == "number" ? w = O(p) : w = f ? [e, t] : e, n === void 0 && g(w), a == null || a(w);
  }, S = (p) => {
    if (!$.current) return e;
    const w = $.current.getBoundingClientRect(), M = (p - w.left) / w.width, U = e + (t - e) * M, K = Math.round(U / r) * r;
    return O(K);
  }, D = (p) => (w) => {
    l || (h(p), w.stopPropagation());
  }, A = (p) => {
    if (!l)
      if (!f)
        h(0), L(p, 0);
      else {
        const w = S(p.clientX), T = Math.abs(w - N), M = Math.abs(w - C), U = T < M ? 0 : 1;
        h(U), L(p, U);
      }
  }, L = ie.useCallback((p, w) => {
    const T = S(p.clientX);
    if (!f)
      R(T);
    else {
      let M = [N, C];
      w === 0 ? M = [Math.min(T, C - r), C] : M = [N, Math.max(T, N + r)], M[0] > M[1] && (M = [M[1], M[0]]), R(M);
    }
  }, [f, N, C, r, R, S]), P = ie.useRef(x);
  P.current = x;
  const b = ie.useCallback(function(p) {
    P.current === null || l || L(p, P.current);
  }, [l, L]), k = ie.useCallback(function() {
    h(null);
  }, []);
  ue(() => {
    if (x !== null) {
      const p = it();
      return p.addEventListener("mousemove", b), p.addEventListener("mouseup", k), () => {
        p.removeEventListener("mousemove", b), p.removeEventListener("mouseup", k);
      };
    }
  }, [x, b, k]);
  const j = (p) => (p - e) / (t - e) * 100, y = j(N), I = j(C);
  return /* @__PURE__ */ i.jsxs("div", { className: be("relative w-full", s), children: [
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        ref: $,
        className: be(
          "relative h-2 bg-gray-200 rounded-full cursor-pointer",
          l && "opacity-50 cursor-not-allowed"
        ),
        onMouseDown: A,
        children: [
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "absolute h-full bg-primary rounded-full",
              style: { left: `${f ? y : 0}%`, width: `${f ? I - y : y}%` }
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
              style: { left: `${y}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: D(0)
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
              onMouseDown: D(1)
            }
          )
        ]
      }
    ),
    u.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "flex justify-between mt-2", children: u.map((p) => /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "text-xs text-gray",
        style: { left: `${(p.value - e) / (t - e) * 100}%` },
        children: p.label
      },
      p.value
    )) }),
    c && /* @__PURE__ */ i.jsx("div", { className: "mt-2 text-sm text-gray-600", children: f ? `${N} - ${C}` : N })
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
  onRatingChange: a,
  className: s
}) => {
  const [l, c] = te(null), u = (g) => {
    o || c(g);
  }, d = () => {
    o || c(null);
  }, f = (g) => {
    !o && a && a(g);
  }, m = l !== null ? l : e;
  return /* @__PURE__ */ i.jsx("div", { className: _("flex items-center gap-1", s), children: [...Array(t)].map((g, x) => {
    const h = x + 1, $ = h <= m, E = l !== null && h <= l;
    return /* @__PURE__ */ i.jsx(
      "button",
      {
        className: _(
          "transition-colors duration-200",
          ic[r],
          $ || E ? lc[n] : "text-default-200",
          !o && "cursor-pointer"
        ),
        onMouseEnter: () => u(h),
        onMouseLeave: d,
        onClick: () => f(h),
        disabled: o,
        "aria-label": `Rate ${h} out of ${t}`,
        children: /* @__PURE__ */ i.jsx(
          de,
          {
            icon: $ || E ? "mdi:star" : "mdi:star-outline",
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
}, Bp = ({
  status: e,
  size: t = "md",
  withLabel: r = !1,
  className: n
}) => {
  const { bgColor: o, label: a } = cc[e], s = dc[t];
  return /* @__PURE__ */ i.jsxs("div", { className: _("flex items-center gap-2", n), children: [
    /* @__PURE__ */ i.jsx("div", { className: _("rounded-full animate-pulse", o, s) }),
    r && /* @__PURE__ */ i.jsx("span", { className: "text-sm", children: a })
  ] });
}, Ha = (e, t) => {
  if (t) return t;
  switch (e) {
    case "completed":
      return "mdi:check";
    case "active":
      return "mdi:circle-medium";
    default:
      return "mdi:circle-outline";
  }
}, Wa = (e) => {
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
}) => /* @__PURE__ */ i.jsx("div", { className: _("flex flex-row items-center w-full justify-between", r), children: e.map((o, a) => {
  const s = a < t ? "completed" : a === t ? "active" : "pending";
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: "flex items-center flex-1",
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: _(
          "flex flex-col items-center z-10",
          n === "default" ? "gap-4" : "gap-2",
          n === "default" ? "px-5" : "px-3"
        ), children: [
          n === "default" && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: _(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                Wa(s)
              ),
              children: /* @__PURE__ */ i.jsx(
                de,
                {
                  icon: Ha(s, o.icon),
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
                  s === "active" ? "text-primary" : s === "completed" ? "text-neutral-900" : "text-neutral"
                ),
                children: o.label
              }
            ),
            o.description && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-neutral", children: o.description })
          ] })
        ] }),
        a < e.length - 1 && /* @__PURE__ */ i.jsx(
          Zl,
          {
            className: _(
              "transition-all duration-200",
              a < t ? "bg-primary" : "bg-neutral-200"
            )
          }
        )
      ]
    },
    a
  );
}) }), fc = ({
  steps: e,
  activeStep: t,
  className: r,
  variant: n = "default"
}) => /* @__PURE__ */ i.jsx("div", { className: _("flex flex-col items-start gap-8", r), children: e.map((o, a) => {
  const s = a < t ? "completed" : a === t ? "active" : "pending";
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: "flex flex-row w-full items-center relative",
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: _(
          "flex flex-row items-center z-10",
          n === "default" ? "gap-4" : "gap-2"
        ), children: [
          n === "default" && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: _(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                Wa(s)
              ),
              children: /* @__PURE__ */ i.jsx(
                de,
                {
                  icon: Ha(s, o.icon),
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
                  s === "active" ? "text-primary00" : s === "completed" ? "text-neutral-900" : "text-neutral"
                ),
                children: o.label
              }
            ),
            o.description && /* @__PURE__ */ i.jsx("span", { className: "text-xs text-neutral", children: o.description })
          ] })
        ] }),
        a < e.length - 1 && /* @__PURE__ */ i.jsx(
          "div",
          {
            className: _(
              "absolute transition-all duration-200",
              n === "default" ? "left-4 w-[1px] top-10 bottom-[-24px]" : "left-0 w-[1px] top-6 bottom-[-24px]",
              a < t ? "bg-primary" : "bg-neutral-200"
            )
          }
        )
      ]
    },
    a
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
  const a = (c) => {
    n && n(c.target.checked);
  }, s = {
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
              onChange: a
            }
          ),
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: be(
                "block rounded-full transition-colors duration-200 ease-in-out",
                s[o],
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
  tabListClassName: a,
  tabClassName: s,
  contentClassName: l,
  onChange: c
}) => {
  var E, N;
  const [u, d] = te(t || ((E = e[0]) == null ? void 0 : E.id) || ""), f = ie.useRef(null), [m, g] = te({ left: 0, width: 0 });
  ie.useEffect(() => {
    var C;
    if (r === "active-underline" && f.current) {
      const O = f.current.getBoundingClientRect(), R = (C = f.current.parentElement) == null ? void 0 : C.getBoundingClientRect();
      R && g({
        left: O.left - R.left,
        width: O.width
      });
    }
  }, [r, e, u]), ie.useEffect(() => {
    if (r === "active-underline") {
      const C = () => {
        var O;
        if (f.current) {
          const R = f.current.getBoundingClientRect(), S = (O = f.current.parentElement) == null ? void 0 : O.getBoundingClientRect();
          S && g({
            left: R.left - S.left,
            width: R.width
          });
        }
      };
      return window.addEventListener("resize", C), () => window.removeEventListener("resize", C);
    }
  }, [r, e, u]);
  const x = pe((C) => {
    d(C), c == null || c(C);
  }, [c]), h = () => {
    switch (n) {
      case "sm":
        return "text-sm px-3 py-1.5";
      case "lg":
        return "text-lg px-6 py-3";
      default:
        return "text-base px-4 py-2";
    }
  }, $ = (C, O) => {
    const R = be(
      "flex items-center space-x-2 transition-colors",
      "font-medium",
      h(),
      O && "opacity-50 cursor-not-allowed",
      !O && "cursor-pointer"
    );
    switch (r) {
      case "pills":
        return be(
          R,
          "rounded-full",
          C ? "bg-primary text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        );
      case "underline":
        return be(
          R,
          "border-b-2",
          C ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
      case "active-underline":
        return be(
          R,
          "border-b-0",
          C ? "text-primary" : "text-gray-600 dark:text-gray-300 hover:text-primary"
        );
      default:
        return be(
          R,
          "border-b-2",
          C ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
    }
  };
  return /* @__PURE__ */ i.jsxs("div", { className: be("w-full", o), children: [
    /* @__PURE__ */ i.jsxs("div", { className: be(
      r === "active-underline" ? "relative" : "",
      "flex space-x-1",
      r === "pills" && "space-x-2 border-b-0",
      r !== "active-underline" && "border-b border-gray-200 dark:border-gray-700",
      a
    ), children: [
      e.map((C) => {
        const O = C.id === u, R = !!C.disabled;
        return /* @__PURE__ */ i.jsxs(
          "button",
          {
            ref: r === "active-underline" && O ? f : void 0,
            onClick: () => !R && x(C.id),
            disabled: R,
            className: be(
              $(O, R),
              s
            ),
            children: [
              C.icon && /* @__PURE__ */ i.jsx(
                de,
                {
                  icon: C.icon,
                  className: "w-5 h-5 flex-shrink-0"
                }
              ),
              /* @__PURE__ */ i.jsx("span", { children: C.label })
            ]
          },
          C.id
        );
      }),
      r === "active-underline" && /* @__PURE__ */ i.jsx(
        "span",
        {
          className: "absolute bottom-0 h-0.5 bg-primary transition-all duration-300",
          style: { left: m.left, width: m.width }
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: be("mt-4", l), children: (N = e.find((C) => C.id === u)) == null ? void 0 : N.content })
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
  }, s = n || ((l) => {
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
  return /* @__PURE__ */ i.jsx(s, { className: _("text-gray-900", o[e], r), children: t });
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
), Ka = Ae(
  ({
    value: e,
    onChange: t,
    use24Hour: r = !1,
    variant: n = "default",
    size: o = "md",
    rounded: a = "xl",
    disabled: s = !1,
    errorText: l,
    helperText: c,
    label: u,
    required: d = !1,
    labelPlacement: f = "top",
    fullWidth: m = !1,
    className: g,
    placeholder: x = "Select time",
    leftIcon: h,
    rightIcon: $,
    valueFormatter: E,
    closeOnSelect: N = !0,
    ...C
  }, O) => {
    const [R, S] = te(!1), [D, A] = te(e || ""), [L, P] = te(0), [b, k] = te(0), [j, y] = te(!0), I = re(null), p = re(null), w = re(null), M = `timepicker-${ie.useId().replace(/:/g, "")}`, U = () => {
      if (!R || !p.current || !w.current) return;
      const z = p.current.getBoundingClientRect(), X = w.current, fe = it().innerHeight - z.bottom;
      X.style.top = `${z.bottom + 4}px`, X.style.bottom = "auto", X.style.left = `${z.left}px`, X.style.maxHeight = `${fe - 8}px`, X.style.width = `${z.width}px`;
    };
    ue(() => {
      const z = it(), X = Ge(), xe = () => {
        R && U();
      }, fe = () => {
        R && U();
      }, Ue = (Se) => {
        Se.detail.id !== M && S(!1);
      }, He = (Se) => {
        const Ye = Se.target;
        I.current && w.current && !I.current.contains(Ye) && !w.current.contains(Ye) && S(!1);
      };
      return R && (U(), z.addEventListener("scroll", xe, !0), z.addEventListener("resize", fe)), X.addEventListener(ln, Ue), X.addEventListener("mousedown", He), () => {
        z.removeEventListener("scroll", xe, !0), z.removeEventListener("resize", fe), X.removeEventListener(ln, Ue), X.removeEventListener("mousedown", He);
      };
    }, [R, M]);
    const K = () => {
      s || (R || Ge().dispatchEvent(
        new CustomEvent(ln, {
          detail: { id: M }
        })
      ), S(!R));
    };
    ue(() => {
      if (e) {
        A(e);
        const [z, X] = e.split(":").map(Number);
        r ? P(z) : (P(z % 12 || 12), y(z < 12)), k(X);
      }
    }, [e, r]);
    const W = () => {
      const X = `${(r || j ? L : L + 12).toString().padStart(2, "0")}:${b.toString().padStart(2, "0")}`;
      A(X), t == null || t(X), N && S(!1);
    }, ne = () => r ? Array.from({ length: 24 }, (z, X) => X) : Array.from({ length: 12 }, (z, X) => X + 1), B = () => Array.from({ length: 60 }, (z, X) => X), H = E ? E(D) : D, q = Ge();
    return "body" in q ? /* @__PURE__ */ i.jsxs("div", { ref: I, className: _("relative", m && "w-full", g), children: [
      u && /* @__PURE__ */ i.jsxs(
        "label",
        {
          className: _(
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
          ref: p,
          className: "relative",
          onClick: K,
          children: [
            h && /* @__PURE__ */ i.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ i.jsx(de, { icon: h, size: 20 }) }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                ref: O,
                type: "text",
                value: H,
                placeholder: x,
                readOnly: !0,
                className: _(
                  pc({ variant: n, size: o, rounded: a, fullWidth: m }),
                  h && "pl-10",
                  $ && "pr-10",
                  "text-left"
                ),
                disabled: s,
                ...C
              }
            ),
            $ && /* @__PURE__ */ i.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ i.jsx(de, { icon: $, size: 20 }) })
          ]
        }
      ),
      R && At(
        /* @__PURE__ */ i.jsx(
          "div",
          {
            ref: w,
            className: "fixed z-[9999] w-fit rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            onClick: (z) => z.stopPropagation(),
            children: /* @__PURE__ */ i.jsxs("div", { className: "p-0", children: [
              /* @__PURE__ */ i.jsxs(Yn, { variant: "ghost", className: _(
                "flex mx-2 my-1 p-0",
                r ? "justify-start gap-8" : "justify-start gap-4"
              ), children: [
                /* @__PURE__ */ i.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ i.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ i.jsx("div", { className: "flex flex-col gap-2", children: ne().map((z) => /* @__PURE__ */ i.jsx(
                  Ke,
                  {
                    variant: "ghost",
                    onClick: () => P(z),
                    className: _(L === z && "bg-primary text-white"),
                    children: z.toString().padStart(2, "0")
                  },
                  z
                )) }) }) }),
                /* @__PURE__ */ i.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ i.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ i.jsx("div", { className: "flex flex-col gap-2", children: B().map((z) => /* @__PURE__ */ i.jsx(
                  Ke,
                  {
                    variant: "ghost",
                    onClick: () => k(z),
                    className: _(b === z && "bg-primary text-white"),
                    children: z.toString().padStart(2, "0")
                  },
                  z
                )) }) }) }),
                !r && /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ i.jsx(
                    Ke,
                    {
                      variant: "ghost",
                      onClick: () => y(!0),
                      className: _(j && "bg-primary text-white"),
                      children: "AM"
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    Ke,
                    {
                      variant: "ghost",
                      onClick: () => y(!1),
                      className: _(!j && "bg-primary text-white"),
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
Ka.displayName = "PrimitiveTimePicker";
const gc = ({
  value: e,
  onChange: t,
  valueFormatter: r,
  closeOnSelect: n,
  ...o
}) => /* @__PURE__ */ i.jsx(
  Ka,
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
), hc = Ae(
  ({
    checked: e = !1,
    onCheckedChange: t,
    variant: r = "primary",
    size: n = "md",
    label: o,
    required: a = !1,
    helperText: s,
    errorText: l,
    error: c = !1,
    className: u,
    ...d
  }, f) => {
    const m = ie.useId(), g = `${m}-helper`, x = `${m}-error`;
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
            className: _(mc({ variant: c ? "danger" : r, size: n }), u),
            "aria-describedby": c ? x : s ? g : void 0,
            "aria-invalid": c,
            "aria-required": a,
            ...d,
            children: /* @__PURE__ */ i.jsx(
              "span",
              {
                "data-state": e ? "checked" : "unchecked",
                className: _(
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
            htmlFor: m,
            className: "text-sm text-neutral-900",
            children: [
              o,
              a && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ]
          }
        )
      ] }),
      c && l && /* @__PURE__ */ i.jsx("p", { className: "text-xs text-danger", id: x, children: l }),
      !c && s && /* @__PURE__ */ i.jsx("p", { className: "text-xs text-neutral", id: g, children: s })
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
  color: a = "light",
  size: s = "md",
  isOpen: l,
  onOpenChange: c,
  trigger: u = "hover"
}) => {
  const [d, f] = te(!1), [m, g] = te({ top: 0, left: 0 }), x = re(null), h = re(null), $ = re(), E = l !== void 0, N = E ? l : d, C = () => {
    if (!x.current || !h.current) return;
    const A = h.current.getBoundingClientRect(), L = x.current.getBoundingClientRect(), P = it(), b = P.scrollX || P.pageXOffset, k = P.scrollY || P.pageYOffset;
    let j = 0, y = 0;
    const I = 8;
    switch (r) {
      case "top":
        j = A.top + k - L.height - I, y = A.left + b + (A.width - L.width) / 2;
        break;
      case "bottom":
        j = A.bottom + k + I, y = A.left + b + (A.width - L.width) / 2;
        break;
      case "left":
        j = A.top + k + (A.height - L.height) / 2, y = A.left + b - L.width - I;
        break;
      case "right":
        j = A.top + k + (A.height - L.height) / 2, y = A.right + b + I;
        break;
    }
    const p = P.innerWidth, w = P.innerHeight;
    y < 0 && (y = 0), y + L.width > p && (y = p - L.width), j < 0 && (j = 0), j + L.height > w && (j = w - L.height), g({ top: j, left: y });
  };
  ue(() => {
    if (N) {
      C();
      const A = it();
      A.addEventListener("scroll", C, !0), A.addEventListener("resize", C);
    }
    return () => {
      const A = it();
      A.removeEventListener("scroll", C, !0), A.removeEventListener("resize", C);
    };
  }, [N, r]);
  const O = () => {
    E ? c == null || c(!0) : $.current = setTimeout(() => {
      f(!0);
    }, n);
  }, R = () => {
    $.current && clearTimeout($.current), E ? c == null || c(!1) : f(!1);
  }, S = (A) => {
    A.stopPropagation(), u === "click" && (E ? c == null || c(!l) : f(!d));
  };
  ue(() => {
    const A = (L) => {
      u === "click" && x.current && !x.current.contains(L.target) && h.current && !h.current.contains(L.target) && R();
    };
    return N && document.addEventListener("click", A), () => {
      document.removeEventListener("click", A);
    };
  }, [N, u]);
  const D = () => {
    if (!N) return null;
    const A = Ge();
    return "body" in A ? At(
      /* @__PURE__ */ i.jsxs(
        "div",
        {
          ref: x,
          className: _(vc({ color: a, size: s }), o),
          style: {
            top: `${m.top}px`,
            left: `${m.left}px`
          },
          children: [
            e,
            /* @__PURE__ */ i.jsx(
              "div",
              {
                className: _(
                  xc({ color: a }),
                  r === "top" && "bottom-[-4px] left-1/2 -translate-x-1/2",
                  r === "bottom" && "top-[-4px] left-1/2 -translate-x-1/2",
                  r === "left" && "right-[-4px] top-1/2 -translate-y-1/2",
                  r === "right" && "left-[-4px] top-1/2 -translate-y-1/2",
                  a === "light" && r === "top" && "border-r border-b border-neutral-200",
                  a === "light" && r === "bottom" && "border-l border-t border-neutral-200",
                  a === "light" && r === "left" && "border-t border-r border-neutral-200",
                  a === "light" && r === "right" && "border-l border-b border-neutral-200"
                )
              }
            )
          ]
        }
      ),
      A.body
    ) : null;
  };
  return /* @__PURE__ */ i.jsx("div", { className: "relative", children: /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: h,
      className: "relative inline-block",
      onMouseEnter: u === "hover" ? O : void 0,
      onMouseLeave: u === "hover" ? R : void 0,
      onClick: S,
      children: [
        t,
        D()
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
    isIndeterminate: a = !1,
    showValue: s = !1,
    label: l,
    rounded: c = "full",
    icon: u,
    ...d
  }, f) => {
    const m = Math.min(Math.max(o, 0), 100), g = wc[n], x = n === "sm" ? 2 : n === "md" ? 3 : 4, h = (g - x) / 2, $ = 2 * Math.PI * h, E = $ - m / 100 * $;
    let N = "";
    return t === "loading" ? N = "rounded-full" : c ? N = c === "none" ? "" : `rounded-${c}` : N = "rounded-md", t === "circular" ? /* @__PURE__ */ i.jsxs("div", { className: "inline-flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "relative", style: { width: g, height: g }, children: [
        /* @__PURE__ */ i.jsxs(
          "svg",
          {
            className: _(
              "transform -rotate-90",
              a ? "animate-spin" : ""
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
                  r: h,
                  cx: g / 2,
                  cy: g / 2
                }
              ),
              /* @__PURE__ */ i.jsx(
                "circle",
                {
                  className: _(
                    "transition-all duration-300 ease-in-out",
                    a ? "animate-dash" : ""
                  ),
                  strokeWidth: x,
                  strokeDasharray: $,
                  strokeDashoffset: a ? 0 : E,
                  strokeLinecap: "round",
                  stroke: kc[r],
                  fill: "transparent",
                  r: h,
                  cx: g / 2,
                  cy: g / 2
                }
              )
            ]
          }
        ),
        u && /* @__PURE__ */ i.jsx("span", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ i.jsx(de, { icon: u, size: g * 0.5 }) }),
        s && !a && !u && /* @__PURE__ */ i.jsxs("div", { className: "absolute inset-0 flex items-center justify-center text-xs font-medium", children: [
          Math.round(m),
          "%"
        ] })
      ] }),
      l && /* @__PURE__ */ i.jsx("span", { className: "text-sm text-neutral-600", children: l })
    ] }) : /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ i.jsx(
        "div",
        {
          ref: f,
          className: _(yc({ variant: t === "loading" ? "bar" : t, size: n }), N, e),
          role: "progressbar",
          "aria-valuenow": a ? void 0 : m,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          ...d,
          children: /* @__PURE__ */ i.jsx(
            "div",
            {
              className: _(
                "h-full transition-all duration-300 ease-in-out",
                a ? "animate-progress-indeterminate" : "",
                $c[r],
                N
              ),
              style: {
                width: a ? "100%" : `${m}%`
              }
            }
          )
        }
      ),
      (s || l) && /* @__PURE__ */ i.jsxs("div", { className: "flex justify-between text-xs text-neutral-600", children: [
        l && /* @__PURE__ */ i.jsx("span", { children: l }),
        s && !a && /* @__PURE__ */ i.jsxs("span", { children: [
          Math.round(m),
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
}, jc = (e) => e.startsWith("0") && e.length >= 9 && e.length <= 12 ? "+62" + e.slice(1) : e, Tc = (e) => e.startsWith("0") && e.length >= 3, Nn = Ae(
  ({
    className: e,
    variant: t = "default",
    size: r = "md",
    rounded: n = "xl",
    error: o = !1,
    errorText: a,
    helperText: s,
    label: l,
    required: c = !1,
    fullWidth: u = !1,
    value: d = "",
    onChange: f,
    disabled: m = !1,
    defaultCountry: g = "id",
    placeholder: x = "Enter phone number",
    autoDetect: h = !0,
    ...$
  }, E) => {
    const [N, C] = te(!1), [O, R] = te(
      () => yt.find((B) => B.iso === g) || yt[0]
    ), [S, D] = te(""), [A, L] = te(() => {
      if (h && d) {
        const H = cn(d);
        if (H)
          return R(H), d;
        const q = So(d);
        return q ? (R(q), q.code + d.slice(q.code.replace("+", "").length)) : d;
      }
      const B = O.code;
      return d.startsWith(B) ? d.slice(B.length) : d;
    }), [P, b] = te(() => h && d ? !!(cn(d) || So(d)) : !1), k = re(null), j = re(null), y = ie.useId(), I = `${y}-helper`, p = `${y}-error`, w = yt.filter(
      (B) => B.name.toLowerCase().includes(S.toLowerCase()) || B.code.includes(S)
    ), T = re(null), M = () => {
      if (N && k.current && j.current) {
        const B = k.current.getBoundingClientRect(), H = j.current, q = typeof window < "u" ? window : { innerHeight: 0 }, z = q.innerHeight - B.bottom, X = B.top, fe = B.bottom + (H.offsetHeight || 0) + 4 >= q.innerHeight, Ue = X > z, He = fe && Ue;
        H.style.position = "fixed", H.style.left = `${B.left}px`, H.style.minWidth = `${B.width}px`, H.style.maxWidth = "340px", H.style.width = "auto", He ? (H.style.bottom = `${q.innerHeight - B.top + 4}px`, H.style.top = "auto", H.style.maxHeight = `${X - 8}px`) : (H.style.top = `${B.bottom + 4}px`, H.style.bottom = "auto", H.style.maxHeight = `${z - 8}px`);
      }
    };
    ue(() => {
      const B = typeof window < "u" ? window : void 0, H = () => {
        N && M();
      }, q = () => {
        N && M();
      };
      return N && (M(), B == null || B.addEventListener("scroll", H, !0), B == null || B.addEventListener("resize", q)), () => {
        B == null || B.removeEventListener("scroll", H, !0), B == null || B.removeEventListener("resize", q);
      };
    }, [N]), ue(() => {
      if (!N) return;
      const B = (H) => {
        const q = H.target;
        k.current && j.current && !k.current.contains(q) && !j.current.contains(q) && C(!1);
      };
      return document.addEventListener("click", B), () => document.removeEventListener("click", B);
    }, [N]);
    const U = (B) => {
      if (R(B), C(!1), D(""), h) {
        const H = B.code + A.replace(/^\+?\d*/, "");
        L(H);
        const q = H.replace(/[^\d]/g, "");
        f == null || f(q);
      } else {
        const q = (B.code + A).replace(/[^\d]/g, "");
        f == null || f(q);
      }
    }, K = (B) => {
      const H = B.target.value;
      if (/^[+\d]*$/.test(H))
        if (h && H.startsWith("+")) {
          const z = cn(H);
          if (z) {
            R(z), b(!0), L(H);
            const X = H.replace(/[^\d]/g, "");
            f == null || f(X);
          } else {
            L(H), b(!1);
            const X = H.replace(/[^\d]/g, "");
            f == null || f(X);
          }
        } else if (h && !H.startsWith("+") && H.length > 0) {
          const z = jc(H);
          if (z !== H) {
            L(z), R(
              yt.find((xe) => xe.iso === "id") || yt[0]
            ), b(!0);
            const X = z.replace(/[^\d]/g, "");
            f == null || f(X);
          } else if (Tc(H)) {
            const X = "+62" + H.slice(1);
            L(X), R(
              yt.find((fe) => fe.iso === "id") || yt[0]
            ), b(!0);
            const xe = X.replace(/[^\d]/g, "");
            f == null || f(xe);
          } else if (H.startsWith("0"))
            L(H), b(!1);
          else {
            const X = "+" + H;
            L(X);
            const xe = X.replace(/[^\d]/g, "");
            f == null || f(xe);
          }
        } else {
          const z = H.replace(/[^\d]/g, "");
          L(z);
          const xe = (O.code + z).replace(/[^\d]/g, "");
          f == null || f(xe);
        }
    }, W = _(
      Ec({
        variant: o ? "error" : t,
        size: r,
        rounded: n,
        fullWidth: u
      }),
      "!w-full"
    ), ne = !h || h && P;
    return Wn(E, () => T.current, []), /* @__PURE__ */ i.jsxs(
      "div",
      {
        ref: T,
        className: _(u ? "w-full" : "inline-block", e),
        ...$,
        children: [
          l && /* @__PURE__ */ i.jsxs("label", { htmlFor: y, className: "mb-1.5 block text-sm text-neutral-900", children: [
            l,
            c && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: _("relative", !u && "inline-block"), children: [
            /* @__PURE__ */ i.jsxs("div", { className: "flex", children: [
              ne && /* @__PURE__ */ i.jsxs(
                "button",
                {
                  type: "button",
                  ref: k,
                  onClick: () => !m && C(!N),
                  className: _(
                    W,
                    "flex items-center gap-2 rounded-r-none justify-between",
                    h ? "max-w-[60px]" : "max-w-[100px]",
                    m && "cursor-not-allowed opacity-50"
                  ),
                  children: [
                    /* @__PURE__ */ i.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ i.jsx(de, { icon: O.flag, className: "w-5 h-5" }),
                      !h && /* @__PURE__ */ i.jsx("span", { className: "text-sm", children: O.code })
                    ] }),
                    /* @__PURE__ */ i.jsx(
                      de,
                      {
                        icon: "mdi:chevron-down",
                        className: _("transition-transform", N && "rotate-180")
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "tel",
                  id: y,
                  value: A,
                  onChange: K,
                  disabled: m,
                  className: _(
                    W,
                    ne ? "rounded-l-none" : `rounded-l-${n}`,
                    "flex-1 min-w-0 w-full"
                  ),
                  placeholder: h ? "e.g. +6281234567890" : x
                }
              )
            ] }),
            N && At(
              /* @__PURE__ */ i.jsxs(
                "div",
                {
                  ref: j,
                  className: "border border-neutral-200 bg-white shadow-lg overflow-y-auto rounded-md",
                  children: [
                    /* @__PURE__ */ i.jsx("div", { className: "p-2 border-b border-neutral-200", children: /* @__PURE__ */ i.jsx(
                      "input",
                      {
                        type: "text",
                        value: S,
                        onChange: (B) => {
                          const H = B.target.value;
                          /^[a-zA-Z0-9\s]*$/.test(H) && D(H);
                        },
                        placeholder: "Search countries...",
                        className: "w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:border-primary-300"
                      }
                    ) }),
                    /* @__PURE__ */ i.jsx("div", { className: "max-h-[300px] overflow-y-auto", children: w.map((B) => /* @__PURE__ */ i.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => U(B),
                        className: _(
                          "w-full px-3 py-2 text-sm text-left hover:bg-primary-50 cursor-pointer",
                          O.iso === B.iso && "bg-primary-50"
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
          o && a && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger", id: p, children: a }),
          !o && s && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral", id: I, children: s })
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
  function a() {
    var s;
    const l = vo.useContext(o);
    if (!l && t) {
      const c = new Error(r);
      throw c.name = "ContextError", (s = Error.captureStackTrace) == null || s.call(Error, c, a), c;
    }
    return l;
  }
  return [o.Provider, a, o];
}
function Ua(e) {
  const t = re(null);
  return Wn(e, () => t.current), t;
}
process.env.NODE_ENV;
process.env.NODE_ENV;
var ot = (e) => e ? "true" : void 0;
function Ya(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Ya(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function Xt(...e) {
  for (var t = 0, r, n, o = ""; t < e.length; )
    (r = e[t++]) && (n = Ya(r)) && (o && (o += " "), o += n);
  return o;
}
function Pc(e) {
  return `${e}-${Math.floor(Math.random() * 1e6)}`;
}
function qa(e) {
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
function Xa(...e) {
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
      let a = t[o], s = n[o];
      typeof a == "function" && typeof s == "function" && // This is a lot faster than a regex.
      o[0] === "o" && o[1] === "n" && o.charCodeAt(2) >= /* 'A' */
      65 && o.charCodeAt(2) <= /* 'Z' */
      90 ? t[o] = Xa(a, s) : (o === "className" || o === "UNSAFE_className") && typeof a == "string" && typeof s == "string" ? t[o] = Xt(a, s) : o === "id" && a && s ? t.id = Cc(a, s) : t[o] = s !== void 0 ? s : a;
    }
  }
  return t;
}
function Rc(...e) {
  return e.length === 1 && e[0] ? e[0] : (t) => {
    let r = !1;
    const n = e.map((o) => {
      const a = Ro(o, t);
      return r || (r = typeof a == "function"), a;
    });
    if (r)
      return () => {
        n.forEach((o, a) => {
          typeof o == "function" ? o == null || o() : Ro(e[a], null);
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
  const o = (r = wr.map(e, (s) => xr(s) && s.type === t ? (n.push(s), null) : s)) == null ? void 0 : r.filter(Boolean), a = n.length >= 0 ? n : void 0;
  return [o, a];
}, Mc = /* @__PURE__ */ new Set([
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
]), Ac = /* @__PURE__ */ new Set([
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
]), Lo = /^(data-.*)$/, Ic = /^(aria-.*)$/, Tr = /^(on[A-Z].*)$/;
function Mo(e, t = {}) {
  let {
    labelable: r = !0,
    enabled: n = !0,
    propNames: o,
    omitPropNames: a,
    omitEventNames: s,
    omitDataProps: l,
    omitEventProps: c
  } = t, u = {};
  if (!n)
    return e;
  for (const d in e)
    a != null && a.has(d) || s != null && s.has(d) && Tr.test(d) || Tr.test(d) && !Ac.has(d) || l && Lo.test(d) || c && Tr.test(d) || (Object.prototype.hasOwnProperty.call(e, d) && (Mc.has(d) || r && Ic.test(d) || o != null && o.has(d) || Lo.test(d)) || Tr.test(d)) && (u[d] = e[d]);
  return u;
}
var [Yp, Xn] = qn({
  name: "ProviderContext",
  strict: !1
});
const Oc = /* @__PURE__ */ new Set([
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
    if (r.script) return Oc.has(r.script);
  }
  let t = e.split("-")[0];
  return _c.has(t);
}
const Fr = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, Za = /* @__PURE__ */ ie.createContext(Fr), zc = /* @__PURE__ */ ie.createContext(!1);
let Fc = !!(typeof window < "u" && window.document && window.document.createElement), dn = /* @__PURE__ */ new WeakMap();
function Vc(e = !1) {
  let t = mt(Za), r = re(null);
  if (r.current === null && !e) {
    var n, o;
    let a = (o = ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || o === void 0 || (n = o.ReactCurrentOwner) === null || n === void 0 ? void 0 : n.current;
    if (a) {
      let s = dn.get(a);
      s == null ? dn.set(a, {
        id: t.current,
        state: a.memoizedState
      }) : a.memoizedState !== s.state && (t.current = s.id, dn.delete(a));
    }
    r.current = ++t.current;
  }
  return r.current;
}
function Bc(e) {
  let t = mt(Za);
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
function Ja() {
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
let En = Ja(), mr = /* @__PURE__ */ new Set();
function Ao() {
  En = Ja();
  for (let e of mr) e(En);
}
function qc() {
  let e = Zn(), [t, r] = te(En);
  return ue(() => (mr.size === 0 && window.addEventListener("languagechange", Ao), mr.add(r), () => {
    mr.delete(r), mr.size === 0 && window.removeEventListener("languagechange", Ao);
  }), []), e ? {
    locale: "en-US",
    direction: "ltr"
  } : t;
}
const Xc = /* @__PURE__ */ ie.createContext(null);
function Qa() {
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
      for (let a in o) Ut[a] = new Yr({
        [r]: o[a]
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
const Io = /* @__PURE__ */ new Map(), Oo = /* @__PURE__ */ new Map();
class td {
  /** Formats a localized string for the given key with the provided variables. */
  format(t, r) {
    let n = this.strings.getStringForLocale(t, this.locale);
    return typeof n == "function" ? n(r, this) : n;
  }
  plural(t, r, n = "cardinal") {
    let o = r["=" + t];
    if (o) return typeof o == "function" ? o() : o;
    let a = this.locale + ":" + n, s = Io.get(a);
    s || (s = new Intl.PluralRules(this.locale, {
      type: n
    }), Io.set(a, s));
    let l = s.select(t);
    return o = r[l] || r.other, typeof o == "function" ? o() : o;
  }
  number(t) {
    let r = Oo.get(this.locale);
    return r || (r = new Intl.NumberFormat(this.locale), Oo.set(this.locale, r)), r.format(t);
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
  let { locale: r } = Qa(), n = nd(e, t);
  return _e(() => new td(r, n), [
    r,
    n
  ]);
}
function ad(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function sd(e, t, r) {
  ad(e, t), t.set(e, r);
}
const Me = typeof document < "u" ? ie.useLayoutEffect : () => {
};
function nt(e) {
  const t = re(null);
  return Me(() => {
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
    let s = n.current.next();
    if (s.done) {
      n.current = null;
      return;
    }
    t === s.value ? o() : r(s.value);
  });
  Me(() => {
    n.current && o();
  });
  let a = nt((s) => {
    n.current = s(t), o();
  });
  return [
    t,
    a
  ];
}
let ld = !!(typeof window < "u" && window.document && window.document.createElement), Qt = /* @__PURE__ */ new Map(), br;
typeof FinalizationRegistry < "u" && (br = new FinalizationRegistry((e) => {
  Qt.delete(e);
}));
function Jn(e) {
  let [t, r] = te(e), n = re(null), o = Hc(t), a = re(null);
  if (br && br.register(a, o), ld) {
    const s = Qt.get(o);
    s && !s.includes(n) ? s.push(n) : Qt.set(o, [
      n
    ]);
  }
  return Me(() => {
    let s = o;
    return () => {
      br && br.unregister(a), Qt.delete(s);
    };
  }, [
    o
  ]), ue(() => {
    let s = n.current;
    return s && r(s), () => {
      s && (n.current = null);
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
  return Me(o, [
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
}, st = (e) => e && "window" in e && e.window === e ? e : $e(e).defaultView || window;
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
      const s = n, l = this._doc.createTreeWalker(s, this.whatToShow, {
        acceptNode: this._acceptNode
      });
      r.push(l), l.currentNode = o, this._currentSetFor.add(l), n = o = s.host;
    } else n = n.parentNode;
    const a = this._doc.createTreeWalker(this.root, this.whatToShow, {
      acceptNode: this._acceptNode
    });
    r.push(a), a.currentNode = o, this._currentSetFor.add(a), this._walkerStack = r;
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
        let a = this.nextNode();
        return a && (this.currentNode = a), a;
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
        let a;
        if (typeof this.filter == "function" ? a = this.filter(r) : !((n = this.filter) === null || n === void 0) && n.acceptNode && (a = this.filter.acceptNode(r)), a === NodeFilter.FILTER_ACCEPT)
          return r && (this.currentNode = r), r;
        let s = this.lastChild();
        return s && (this.currentNode = s), s;
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
    this._walkerStack = [], this._currentSetFor = /* @__PURE__ */ new Set(), this._acceptNode = (s) => {
      if (s.nodeType === Node.ELEMENT_NODE) {
        const c = s.shadowRoot;
        if (c) {
          const u = this._doc.createTreeWalker(c, this.whatToShow, {
            acceptNode: this._acceptNode
          });
          return this._walkerStack.unshift(u), NodeFilter.FILTER_ACCEPT;
        } else {
          var l;
          if (typeof this.filter == "function") return this.filter(s);
          if (!((l = this.filter) === null || l === void 0) && l.acceptNode) return this.filter.acceptNode(s);
          if (this.filter === null) return NodeFilter.FILTER_ACCEPT;
        }
      }
      return NodeFilter.FILTER_SKIP;
    }, this._doc = t, this.root = r, this.filter = o ?? null, this.whatToShow = n ?? NodeFilter.SHOW_ALL, this._currentNode = r, this._walkerStack.unshift(t.createTreeWalker(r, n, this._acceptNode));
    const a = r.shadowRoot;
    if (a) {
      const s = this._doc.createTreeWalker(a, this.whatToShow, {
        acceptNode: this._acceptNode
      });
      this._walkerStack.unshift(s);
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
      let a = t[o], s = n[o];
      typeof a == "function" && typeof s == "function" && // This is a lot faster than a regex.
      o[0] === "o" && o[1] === "n" && o.charCodeAt(2) >= /* 'A' */
      65 && o.charCodeAt(2) <= /* 'Z' */
      90 ? t[o] = kr(a, s) : (o === "className" || o === "UNSAFE_className") && typeof a == "string" && typeof s == "string" ? t[o] = be(a, s) : o === "id" && a && s ? t.id = cd(a, s) : t[o] = s !== void 0 ? s : a;
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
function es(e, t = {}) {
  let { labelable: r, isLink: n, propNames: o } = t, a = {};
  for (const s in e) Object.prototype.hasOwnProperty.call(e, s) && (bd.has(s) || r && hd.has(s) || n && vd.has(s) || o != null && o.has(s) || xd.test(s)) && (a[s] = e[s]);
  return a;
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
let Pr = null;
function yd() {
  if (Pr == null) {
    Pr = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return Pr = !0, !0;
        }
      });
    } catch {
    }
  }
  return Pr;
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
}), ts = kt(function() {
  return Qn(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  rr() && navigator.maxTouchPoints > 1;
}), Zr = kt(function() {
  return kd() || ts();
});
kt(function() {
  return rr() || Zr();
});
const rs = kt(function() {
  return Xr(/AppleWebKit/i) && !ns();
}), ns = kt(function() {
  return Xr(/Chrome/i);
}), eo = kt(function() {
  return Xr(/Android/i);
}), Nd = kt(function() {
  return Xr(/Firefox/i);
});
function Nr(e, t, r = !0) {
  var n, o;
  let { metaKey: a, ctrlKey: s, altKey: l, shiftKey: c } = t;
  Nd() && (!((o = window.event) === null || o === void 0 || (n = o.type) === null || n === void 0) && n.startsWith("key")) && e.target === "_blank" && (rr() ? a = !0 : s = !0);
  let u = rs() && rr() && !ts() && process.env.NODE_ENV !== "test" ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: a,
    ctrlKey: s,
    altKey: l,
    shiftKey: c
  }) : new MouseEvent("click", {
    metaKey: a,
    ctrlKey: s,
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
      for (let a of jn) a();
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
function os(e) {
  requestAnimationFrame(() => {
    Ed(), Ct.size === 0 ? e() : jn.add(e);
  });
}
function to() {
  let e = re(/* @__PURE__ */ new Map()), t = pe((o, a, s, l) => {
    let c = l != null && l.once ? (...u) => {
      e.current.delete(s), s(...u);
    } : s;
    e.current.set(s, {
      type: a,
      eventTarget: o,
      fn: c,
      options: l
    }), o.addEventListener(a, c, l);
  }, []), r = pe((o, a, s, l) => {
    var c;
    let u = ((c = e.current.get(s)) === null || c === void 0 ? void 0 : c.fn) || s;
    o.removeEventListener(a, u, l), e.current.delete(s);
  }, []), n = pe(() => {
    e.current.forEach((o, a) => {
      r(o.eventTarget, o.type, a, o.options);
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
function Td() {
  return typeof window.ResizeObserver < "u";
}
function zo(e) {
  const { ref: t, box: r, onResize: n } = e;
  ue(() => {
    let o = t == null ? void 0 : t.current;
    if (o)
      if (Td()) {
        const a = new window.ResizeObserver((s) => {
          s.length && n();
        });
        return a.observe(o, {
          box: r
        }), () => {
          o && a.unobserve(o);
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
function as(e, t) {
  Me(() => {
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
function ss(e, t) {
  let r = e;
  for (Fo(r, t) && (r = r.parentElement); r && !Fo(r, t); ) r = r.parentElement;
  return r || document.scrollingElement || document.documentElement;
}
function Tn(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : eo() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Pd(e) {
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
function is(e) {
  return e.matches(Sd);
}
function Rd(e) {
  return e.matches(Cd);
}
function Ld(e, t, r) {
  let [n, o] = te(e || t), a = re(e !== void 0), s = e !== void 0;
  ue(() => {
    let u = a.current;
    u !== s && process.env.NODE_ENV !== "production" && console.warn(`WARN: A component changed from ${u ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}.`), a.current = s;
  }, [
    s
  ]);
  let l = s ? e : n, c = pe((u, ...d) => {
    let f = (m, ...g) => {
      r && (Object.is(l, m) || r(m, ...g)), s || (l = m);
    };
    typeof u == "function" ? (process.env.NODE_ENV !== "production" && console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), o((g, ...x) => {
      let h = u(s ? l : g, ...x);
      return f(h, ...d), s ? g : h;
    })) : (s || o(u), f(u, ...d));
  }, [
    s,
    l,
    r
  ]);
  return [
    l,
    c
  ];
}
function Pn(e, t = -1 / 0, r = 1 / 0) {
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
}, Md = {
  top: "left",
  left: "top"
}, Sn = {
  top: "height",
  left: "width"
}, ls = {
  width: "totalWidth",
  height: "totalHeight"
}, Sr = {};
let Ve = typeof document < "u" ? window.visualViewport : null;
function Vo(e) {
  let t = 0, r = 0, n = 0, o = 0, a = 0, s = 0, l = {};
  var c;
  let u = ((c = Ve == null ? void 0 : Ve.scale) !== null && c !== void 0 ? c : 1) > 1;
  if (e.tagName === "BODY") {
    let x = document.documentElement;
    n = x.clientWidth, o = x.clientHeight;
    var d;
    t = (d = Ve == null ? void 0 : Ve.width) !== null && d !== void 0 ? d : n;
    var f;
    r = (f = Ve == null ? void 0 : Ve.height) !== null && f !== void 0 ? f : o, l.top = x.scrollTop || e.scrollTop, l.left = x.scrollLeft || e.scrollLeft, Ve && (a = Ve.offsetTop, s = Ve.offsetLeft);
  } else
    ({ width: t, height: r, top: a, left: s } = er(e)), l.top = e.scrollTop, l.left = e.scrollLeft, n = t, o = r;
  if (rs() && (e.tagName === "BODY" || e.tagName === "HTML") && u) {
    l.top = 0, l.left = 0;
    var m;
    a = (m = Ve == null ? void 0 : Ve.pageTop) !== null && m !== void 0 ? m : 0;
    var g;
    s = (g = Ve == null ? void 0 : Ve.pageLeft) !== null && g !== void 0 ? g : 0;
  }
  return {
    width: t,
    height: r,
    totalWidth: n,
    totalHeight: o,
    scroll: l,
    top: a,
    left: s
  };
}
function Ad(e) {
  return {
    top: e.scrollTop,
    left: e.scrollLeft,
    width: e.scrollWidth,
    height: e.scrollHeight
  };
}
function Bo(e, t, r, n, o, a, s) {
  var l;
  let c = (l = o.scroll[e]) !== null && l !== void 0 ? l : 0, u = n[Sn[e]], d = n.scroll[pt[e]] + a, f = u + n.scroll[pt[e]] - a, m = t - c + s[e] - n[pt[e]], g = t - c + r + s[e] - n[pt[e]];
  return m < d ? d - m : g > f ? Math.max(f - g, d - m) : 0;
}
function Id(e) {
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
  let [t, r] = e.split(" "), n = pt[t] || "right", o = Md[n];
  pt[r] || (r = "center");
  let a = Sn[n], s = Sn[o];
  return Sr[e] = {
    placement: t,
    crossPlacement: r,
    axis: n,
    crossAxis: o,
    size: a,
    crossSize: s
  }, Sr[e];
}
function un(e, t, r, n, o, a, s, l, c, u) {
  let { placement: d, crossPlacement: f, axis: m, crossAxis: g, size: x, crossSize: h } = n, $ = {};
  var E;
  $[g] = (E = e[g]) !== null && E !== void 0 ? E : 0;
  var N, C, O, R;
  f === "center" ? $[g] += (((N = e[h]) !== null && N !== void 0 ? N : 0) - ((C = r[h]) !== null && C !== void 0 ? C : 0)) / 2 : f !== g && ($[g] += ((O = e[h]) !== null && O !== void 0 ? O : 0) - ((R = r[h]) !== null && R !== void 0 ? R : 0)), $[g] += a;
  const S = e[g] - r[h] + c + u, D = e[g] + e[h] - c - u;
  if ($[g] = Pn($[g], S, D), d === m) {
    const A = l ? s[x] : t[ls[x]];
    $[Vr[m]] = Math.floor(A - e[m] + o);
  } else $[m] = Math.floor(e[m] + e[x] + o);
  return $;
}
function Od(e, t, r, n, o, a, s, l) {
  const c = n ? r.height : t[ls.height];
  var u;
  let d = e.top != null ? r.top + e.top : r.top + (c - ((u = e.bottom) !== null && u !== void 0 ? u : 0) - s);
  var f, m, g, x, h, $;
  let E = l !== "top" ? (
    // We want the distance between the top of the overlay to the bottom of the boundary
    Math.max(0, t.height + t.top + ((f = t.scroll.top) !== null && f !== void 0 ? f : 0) - d - (((m = o.top) !== null && m !== void 0 ? m : 0) + ((g = o.bottom) !== null && g !== void 0 ? g : 0) + a))
  ) : Math.max(0, d + s - (t.top + ((x = t.scroll.top) !== null && x !== void 0 ? x : 0)) - (((h = o.top) !== null && h !== void 0 ? h : 0) + (($ = o.bottom) !== null && $ !== void 0 ? $ : 0) + a));
  return Math.min(t.height - a * 2, E);
}
function Ho(e, t, r, n, o, a) {
  let { placement: s, axis: l, size: c } = a;
  var u, d;
  if (s === l) return Math.max(0, r[l] - e[l] - ((u = e.scroll[l]) !== null && u !== void 0 ? u : 0) + t[l] - ((d = n[l]) !== null && d !== void 0 ? d : 0) - n[Vr[l]] - o);
  var f;
  return Math.max(0, e[c] + e[l] + e.scroll[l] - t[l] - r[l] - r[c] - ((f = n[l]) !== null && f !== void 0 ? f : 0) - n[Vr[l]] - o);
}
function _d(e, t, r, n, o, a, s, l, c, u, d, f, m, g, x, h) {
  let $ = Go(e), { size: E, crossAxis: N, crossSize: C, placement: O, crossPlacement: R } = $, S = un(t, l, r, $, d, f, u, m, x, h), D = d, A = Ho(l, u, t, o, a + d, $);
  if (s && n[E] > A) {
    let B = Go(`${Vr[O]} ${R}`), H = un(t, l, r, B, d, f, u, m, x, h);
    Ho(l, u, t, o, a + d, B) > A && ($ = B, S = H, D = d);
  }
  let L = "bottom";
  $.axis === "top" ? $.placement === "top" ? L = "top" : $.placement === "bottom" && (L = "bottom") : $.crossAxis === "top" && ($.crossPlacement === "top" ? L = "bottom" : $.crossPlacement === "bottom" && (L = "top"));
  let P = Bo(N, S[N], r[C], l, c, a, u);
  S[N] += P;
  let b = Od(S, l, u, m, o, a, r.height, L);
  g && g < b && (b = g), r.height = Math.min(r.height, b), S = un(t, l, r, $, D, f, u, m, x, h), P = Bo(N, S[N], r[C], l, c, a, u), S[N] += P;
  let k = {}, j = t[N] + 0.5 * t[C] - S[N] - o[pt[N]];
  const y = x / 2 + h;
  var I, p, w, T;
  const M = pt[N] === "left" ? ((I = o.left) !== null && I !== void 0 ? I : 0) + ((p = o.right) !== null && p !== void 0 ? p : 0) : ((w = o.top) !== null && w !== void 0 ? w : 0) + ((T = o.bottom) !== null && T !== void 0 ? T : 0), U = r[C] - M - x / 2 - h, K = t[N] + x / 2 - (S[N] + o[pt[N]]), W = t[N] + t[C] - x / 2 - (S[N] + o[pt[N]]), ne = Pn(j, K, W);
  return k[N] = Pn(ne, y, U), {
    position: S,
    maxHeight: b,
    arrowOffsetLeft: k.left,
    arrowOffsetTop: k.top,
    placement: $.placement
  };
}
function Dd(e) {
  let { placement: t, targetNode: r, overlayNode: n, scrollNode: o, padding: a, shouldFlip: s, boundaryElement: l, offset: c, crossOffset: u, maxHeight: d, arrowSize: f = 0, arrowBoundaryOffset: m = 0 } = e, g = n instanceof HTMLElement ? zd(n) : document.documentElement, x = g === document.documentElement;
  const h = window.getComputedStyle(g).position;
  let $ = !!h && h !== "static", E = x ? er(r) : Wo(r, g);
  if (!x) {
    let { marginTop: k, marginLeft: j } = window.getComputedStyle(r);
    E.top += parseInt(k, 10) || 0, E.left += parseInt(j, 10) || 0;
  }
  let N = er(n), C = Id(n);
  var O, R;
  N.width += ((O = C.left) !== null && O !== void 0 ? O : 0) + ((R = C.right) !== null && R !== void 0 ? R : 0);
  var S, D;
  N.height += ((S = C.top) !== null && S !== void 0 ? S : 0) + ((D = C.bottom) !== null && D !== void 0 ? D : 0);
  let A = Ad(o), L = Vo(l), P = Vo(g), b = l.tagName === "BODY" ? er(g) : Wo(g, l);
  return g.tagName === "HTML" && l.tagName === "BODY" && (P.scroll.top = 0, P.scroll.left = 0), _d(t, E, N, A, C, a, s, L, P, b, c, u, $, d, f, m);
}
function er(e) {
  let { top: t, left: r, width: n, height: o } = e.getBoundingClientRect(), { scrollTop: a, scrollLeft: s, clientTop: l, clientLeft: c } = document.documentElement;
  return {
    top: t + a - l,
    left: r + s - c,
    width: n,
    height: o
  };
}
function Wo(e, t) {
  let r = window.getComputedStyle(e), n;
  if (r.position === "fixed") {
    let { top: o, left: a, width: s, height: l } = e.getBoundingClientRect();
    n = {
      top: o,
      left: a,
      width: s,
      height: l
    };
  } else {
    n = er(e);
    let o = er(t), a = window.getComputedStyle(t);
    o.top += (parseInt(a.borderTopWidth, 10) || 0) - t.scrollTop, o.left += (parseInt(a.borderLeftWidth, 10) || 0) - t.scrollLeft, n.top -= o.top, n.left -= o.left;
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
const cs = /* @__PURE__ */ new WeakMap();
function Fd(e) {
  let { triggerRef: t, isOpen: r, onClose: n } = e;
  ue(() => {
    if (!r || n === null) return;
    let o = (a) => {
      let s = a.target;
      if (!t.current || s instanceof Node && !s.contains(t.current) || a.target instanceof HTMLInputElement || a.target instanceof HTMLTextAreaElement) return;
      let l = n || cs.get(t.current);
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
  let { direction: t } = Qa(), { arrowSize: r = 0, targetRef: n, overlayRef: o, scrollRef: a = o, placement: s = "bottom", containerPadding: l = 12, shouldFlip: c = !0, boundaryElement: u = typeof document < "u" ? document.body : null, offset: d = 0, crossOffset: f = 0, shouldUpdatePosition: m = !0, isOpen: g = !0, onClose: x, maxHeight: h, arrowBoundaryOffset: $ = 0 } = e, [E, N] = te(null), C = [
    m,
    s,
    o.current,
    n.current,
    a.current,
    l,
    c,
    u,
    d,
    f,
    g,
    t,
    h,
    $,
    r
  ], O = re(Le == null ? void 0 : Le.scale);
  ue(() => {
    g && (O.current = Le == null ? void 0 : Le.scale);
  }, [
    g
  ]);
  let R = pe(() => {
    if (m === !1 || !g || !o.current || !n.current || !u || (Le == null ? void 0 : Le.scale) !== O.current) return;
    let P = null;
    if (a.current && a.current.contains(document.activeElement)) {
      var b;
      let T = (b = document.activeElement) === null || b === void 0 ? void 0 : b.getBoundingClientRect(), M = a.current.getBoundingClientRect();
      var k;
      if (P = {
        type: "top",
        offset: ((k = T == null ? void 0 : T.top) !== null && k !== void 0 ? k : 0) - M.top
      }, P.offset > M.height / 2) {
        P.type = "bottom";
        var j;
        P.offset = ((j = T == null ? void 0 : T.bottom) !== null && j !== void 0 ? j : 0) - M.bottom;
      }
    }
    let y = o.current;
    if (!h && o.current) {
      var I;
      y.style.top = "0px", y.style.bottom = "";
      var p;
      y.style.maxHeight = ((p = (I = window.visualViewport) === null || I === void 0 ? void 0 : I.height) !== null && p !== void 0 ? p : window.innerHeight) + "px";
    }
    let w = Dd({
      placement: Gd(s, t),
      overlayNode: o.current,
      targetNode: n.current,
      scrollNode: a.current || o.current,
      padding: l,
      shouldFlip: c,
      boundaryElement: u,
      offset: d,
      crossOffset: f,
      maxHeight: h,
      arrowSize: r,
      arrowBoundaryOffset: $
    });
    if (w.position) {
      if (y.style.top = "", y.style.bottom = "", y.style.left = "", y.style.right = "", Object.keys(w.position).forEach((T) => y.style[T] = w.position[T] + "px"), y.style.maxHeight = w.maxHeight != null ? w.maxHeight + "px" : "", P && document.activeElement && a.current) {
        let T = document.activeElement.getBoundingClientRect(), M = a.current.getBoundingClientRect(), U = T[P.type] - M[P.type];
        a.current.scrollTop += U - P.offset;
      }
      N(w);
    }
  }, C);
  Me(R, C), Bd(R), zo({
    ref: o,
    onResize: R
  }), zo({
    ref: n,
    onResize: R
  });
  let S = re(!1);
  Me(() => {
    let P, b = () => {
      S.current = !0, clearTimeout(P), P = setTimeout(() => {
        S.current = !1;
      }, 500), R();
    }, k = () => {
      S.current && b();
    };
    return Le == null || Le.addEventListener("resize", b), Le == null || Le.addEventListener("scroll", k), () => {
      Le == null || Le.removeEventListener("resize", b), Le == null || Le.removeEventListener("scroll", k);
    };
  }, [
    R
  ]);
  let D = pe(() => {
    S.current || x == null || x();
  }, [
    x,
    S
  ]);
  Fd({
    triggerRef: n,
    isOpen: g,
    onClose: x && D
  });
  var A, L;
  return {
    overlayProps: {
      style: {
        position: "absolute",
        zIndex: 1e5,
        ...E == null ? void 0 : E.position,
        maxHeight: (A = E == null ? void 0 : E.maxHeight) !== null && A !== void 0 ? A : "100vh"
      }
    },
    placement: (L = E == null ? void 0 : E.placement) !== null && L !== void 0 ? L : null,
    arrowProps: {
      "aria-hidden": "true",
      role: "presentation",
      style: {
        left: E == null ? void 0 : E.arrowOffsetLeft,
        top: E == null ? void 0 : E.arrowOffsetTop
      }
    },
    updatePosition: R
  };
}
function Bd(e) {
  Me(() => (window.addEventListener("resize", e, !1), () => {
    window.removeEventListener("resize", e, !1);
  }), [
    e
  ]);
}
function Gd(e, t) {
  return t === "rtl" ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right");
}
function Hd(e) {
  const t = st(e);
  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
  let { display: r, visibility: n } = e.style, o = r !== "none" && n !== "hidden" && n !== "collapse";
  if (o) {
    const { getComputedStyle: a } = e.ownerDocument.defaultView;
    let { display: s, visibility: l } = a(e);
    o = s !== "none" && l !== "hidden" && l !== "collapse";
  }
  return o;
}
function Wd(e, t) {
  return !e.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function ds(e, t) {
  return e.nodeName !== "#comment" && Hd(e) && Wd(e, t) && (!e.parentElement || ds(e.parentElement, e));
}
function no(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function us(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function fs(e) {
  let t = re({
    isFocused: !1,
    observer: null
  });
  Me(() => {
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
      let o = n.target, a = (s) => {
        if (t.current.isFocused = !1, o.disabled) {
          let l = no(s);
          r(l);
        }
        t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      o.addEventListener("focusout", a, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && o.disabled) {
          var s;
          (s = t.current.observer) === null || s === void 0 || s.disconnect();
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
  for (; e && !is(e); ) e = e.parentElement;
  let t = st(e), r = t.document.activeElement;
  if (!r || r === e) return;
  Br = !0;
  let n = !1, o = (d) => {
    (d.target === r || n) && d.stopImmediatePropagation();
  }, a = (d) => {
    (d.target === r || n) && (d.stopImmediatePropagation(), !e && !n && (n = !0, tr(r), c()));
  }, s = (d) => {
    (d.target === e || n) && d.stopImmediatePropagation();
  }, l = (d) => {
    (d.target === e || n) && (d.stopImmediatePropagation(), n || (n = !0, tr(r), c()));
  };
  t.addEventListener("blur", o, !0), t.addEventListener("focusout", a, !0), t.addEventListener("focusin", l, !0), t.addEventListener("focus", s, !0);
  let c = () => {
    cancelAnimationFrame(u), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", a, !0), t.removeEventListener("focusin", l, !0), t.removeEventListener("focus", s, !0), Br = !1, n = !1;
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
      os(() => {
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
function ps(e, t, r) {
  if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
  return t.get(e);
}
function Ud(e, t) {
  var r = ps(e, t, "get");
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
  var n = ps(e, t, "set");
  return Yd(e, n, r), r;
}
function qd(e) {
  let t = mt(oo);
  if (t) {
    let { register: r, ...n } = t;
    e = Gt(n, e), r();
  }
  return as(t, e.ref), e;
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
    sd(this, Cr, {
      writable: !0,
      value: void 0
    }), qo(this, Cr, !0);
    var a;
    let s = (a = o == null ? void 0 : o.target) !== null && a !== void 0 ? a : n.currentTarget;
    const l = s == null ? void 0 : s.getBoundingClientRect();
    let c, u = 0, d, f = null;
    n.clientX != null && n.clientY != null && (d = n.clientX, f = n.clientY), l && (d != null && f != null ? (c = d - l.left, u = f - l.top) : (c = l.width / 2, u = l.height / 2)), this.type = t, this.pointerType = r, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = c, this.y = u;
  }
}
const Xo = Symbol("linkClicked"), Zo = "react-aria-pressable-style", Jo = "data-react-aria-pressable";
function Xd(e) {
  let { onPress: t, onPressChange: r, onPressStart: n, onPressEnd: o, onPressUp: a, onClick: s, isDisabled: l, isPressed: c, preventFocusOnPress: u, shouldCancelOnPointerExit: d, allowTextSelectionOnPress: f, ref: m, ...g } = qd(e), [x, h] = te(!1), $ = re({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: E, removeAllGlobalListeners: N } = to(), C = nt((b, k) => {
    let j = $.current;
    if (l || j.didFirePressStart) return !1;
    let y = !0;
    if (j.isTriggeringEvent = !0, n) {
      let I = new Rr("pressstart", k, b);
      n(I), y = I.shouldStopPropagation;
    }
    return r && r(!0), j.isTriggeringEvent = !1, j.didFirePressStart = !0, h(!0), y;
  }), O = nt((b, k, j = !0) => {
    let y = $.current;
    if (!y.didFirePressStart) return !1;
    y.didFirePressStart = !1, y.isTriggeringEvent = !0;
    let I = !0;
    if (o) {
      let p = new Rr("pressend", k, b);
      o(p), I = p.shouldStopPropagation;
    }
    if (r && r(!1), h(!1), t && j && !l) {
      let p = new Rr("press", k, b);
      t(p), I && (I = p.shouldStopPropagation);
    }
    return y.isTriggeringEvent = !1, I;
  }), R = nt((b, k) => {
    let j = $.current;
    if (l) return !1;
    if (a) {
      j.isTriggeringEvent = !0;
      let y = new Rr("pressup", k, b);
      return a(y), j.isTriggeringEvent = !1, y.shouldStopPropagation;
    }
    return !0;
  }), S = nt((b) => {
    let k = $.current;
    if (k.isPressed && k.target) {
      k.didFirePressStart && k.pointerType != null && O(Dt(k.target, b), k.pointerType, !1), k.isPressed = !1, k.isOverTarget = !1, k.activePointerId = null, k.pointerType = null, N(), f || fn(k.target);
      for (let j of k.disposables) j();
      k.disposables = [];
    }
  }), D = nt((b) => {
    d && S(b);
  }), A = nt((b) => {
    s == null || s(b);
  }), L = nt((b, k) => {
    if (s) {
      let j = new MouseEvent("click", b);
      us(j, k), s(no(j));
    }
  }), P = _e(() => {
    let b = $.current, k = {
      onKeyDown(y) {
        if (pn(y.nativeEvent, y.currentTarget) && Ce(y.currentTarget, ye(y.nativeEvent))) {
          var I;
          ta(ye(y.nativeEvent), y.key) && y.preventDefault();
          let p = !0;
          if (!b.isPressed && !y.repeat) {
            b.target = y.currentTarget, b.isPressed = !0, b.pointerType = "keyboard", p = C(y, "keyboard");
            let w = y.currentTarget, T = (M) => {
              pn(M, w) && !M.repeat && Ce(w, ye(M)) && b.target && R(Dt(b.target, M), "keyboard");
            };
            E($e(y.currentTarget), "keyup", kr(T, j), !0);
          }
          p && y.stopPropagation(), y.metaKey && rr() && ((I = b.metaKeyEvents) === null || I === void 0 || I.set(y.key, y.nativeEvent));
        } else y.key === "Meta" && (b.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(y) {
        if (!(y && !Ce(y.currentTarget, ye(y.nativeEvent))) && y && y.button === 0 && !b.isTriggeringEvent && !Nr.isOpening) {
          let I = !0;
          if (l && y.preventDefault(), !b.ignoreEmulatedMouseEvents && !b.isPressed && (b.pointerType === "virtual" || Tn(y.nativeEvent))) {
            let p = C(y, "virtual"), w = R(y, "virtual"), T = O(y, "virtual");
            A(y), I = p && w && T;
          } else if (b.isPressed && b.pointerType !== "keyboard") {
            let p = b.pointerType || y.nativeEvent.pointerType || "virtual", w = R(Dt(y.currentTarget, y), p), T = O(Dt(y.currentTarget, y), p, !0);
            I = w && T, b.isOverTarget = !1, A(y), S(y);
          }
          b.ignoreEmulatedMouseEvents = !1, I && y.stopPropagation();
        }
      }
    }, j = (y) => {
      var I;
      if (b.isPressed && b.target && pn(y, b.target)) {
        var p;
        ta(ye(y), y.key) && y.preventDefault();
        let T = ye(y), M = Ce(b.target, ye(y));
        O(Dt(b.target, y), "keyboard", M), M && L(y, b.target), N(), y.key !== "Enter" && ao(b.target) && Ce(b.target, T) && !y[Xo] && (y[Xo] = !0, Nr(b.target, y, !1)), b.isPressed = !1, (p = b.metaKeyEvents) === null || p === void 0 || p.delete(y.key);
      } else if (y.key === "Meta" && (!((I = b.metaKeyEvents) === null || I === void 0) && I.size)) {
        var w;
        let T = b.metaKeyEvents;
        b.metaKeyEvents = void 0;
        for (let M of T.values()) (w = b.target) === null || w === void 0 || w.dispatchEvent(new KeyboardEvent("keyup", M));
      }
    };
    if (typeof PointerEvent < "u") {
      k.onPointerDown = (p) => {
        if (p.button !== 0 || !Ce(p.currentTarget, ye(p.nativeEvent))) return;
        if (Pd(p.nativeEvent)) {
          b.pointerType = "virtual";
          return;
        }
        b.pointerType = p.pointerType;
        let w = !0;
        if (!b.isPressed) {
          b.isPressed = !0, b.isOverTarget = !0, b.activePointerId = p.pointerId, b.target = p.currentTarget, f || Yo(b.target), w = C(p, b.pointerType);
          let T = ye(p.nativeEvent);
          "releasePointerCapture" in T && T.releasePointerCapture(p.pointerId), E($e(p.currentTarget), "pointerup", y, !1), E($e(p.currentTarget), "pointercancel", I, !1);
        }
        w && p.stopPropagation();
      }, k.onMouseDown = (p) => {
        if (Ce(p.currentTarget, ye(p.nativeEvent)) && p.button === 0) {
          if (u) {
            let w = Uo(p.target);
            w && b.disposables.push(w);
          }
          p.stopPropagation();
        }
      }, k.onPointerUp = (p) => {
        !Ce(p.currentTarget, ye(p.nativeEvent)) || b.pointerType === "virtual" || p.button === 0 && !b.isPressed && R(p, b.pointerType || p.pointerType);
      }, k.onPointerEnter = (p) => {
        p.pointerId === b.activePointerId && b.target && !b.isOverTarget && b.pointerType != null && (b.isOverTarget = !0, C(Dt(b.target, p), b.pointerType));
      }, k.onPointerLeave = (p) => {
        p.pointerId === b.activePointerId && b.target && b.isOverTarget && b.pointerType != null && (b.isOverTarget = !1, O(Dt(b.target, p), b.pointerType, !1), D(p));
      };
      let y = (p) => {
        if (p.pointerId === b.activePointerId && b.isPressed && p.button === 0 && b.target) {
          if (Ce(b.target, ye(p)) && b.pointerType != null) {
            let w = !1, T = setTimeout(() => {
              b.isPressed && b.target instanceof HTMLElement && (w ? S(p) : (tr(b.target), b.target.click()));
            }, 80);
            E(p.currentTarget, "click", () => w = !0, !0), b.disposables.push(() => clearTimeout(T));
          } else S(p);
          b.isOverTarget = !1;
        }
      }, I = (p) => {
        S(p);
      };
      k.onDragStart = (p) => {
        Ce(p.currentTarget, ye(p.nativeEvent)) && S(p);
      };
    } else if (process.env.NODE_ENV === "test") {
      k.onMouseDown = (p) => {
        if (p.button !== 0 || !Ce(p.currentTarget, ye(p.nativeEvent))) return;
        if (b.ignoreEmulatedMouseEvents) {
          p.stopPropagation();
          return;
        }
        if (b.isPressed = !0, b.isOverTarget = !0, b.target = p.currentTarget, b.pointerType = Tn(p.nativeEvent) ? "virtual" : "mouse", Wi(() => C(p, b.pointerType)) && p.stopPropagation(), u) {
          let T = Uo(p.target);
          T && b.disposables.push(T);
        }
        E($e(p.currentTarget), "mouseup", y, !1);
      }, k.onMouseEnter = (p) => {
        if (!Ce(p.currentTarget, ye(p.nativeEvent))) return;
        let w = !0;
        b.isPressed && !b.ignoreEmulatedMouseEvents && b.pointerType != null && (b.isOverTarget = !0, w = C(p, b.pointerType)), w && p.stopPropagation();
      }, k.onMouseLeave = (p) => {
        if (!Ce(p.currentTarget, ye(p.nativeEvent))) return;
        let w = !0;
        b.isPressed && !b.ignoreEmulatedMouseEvents && b.pointerType != null && (b.isOverTarget = !1, w = O(p, b.pointerType, !1), D(p)), w && p.stopPropagation();
      }, k.onMouseUp = (p) => {
        Ce(p.currentTarget, ye(p.nativeEvent)) && !b.ignoreEmulatedMouseEvents && p.button === 0 && !b.isPressed && R(p, b.pointerType || "mouse");
      };
      let y = (p) => {
        if (p.button === 0) {
          if (b.ignoreEmulatedMouseEvents) {
            b.ignoreEmulatedMouseEvents = !1;
            return;
          }
          b.target && b.target.contains(p.target) && b.pointerType != null || S(p), b.isOverTarget = !1;
        }
      };
      k.onTouchStart = (p) => {
        if (!Ce(p.currentTarget, ye(p.nativeEvent))) return;
        let w = Zd(p.nativeEvent);
        if (!w) return;
        b.activePointerId = w.identifier, b.ignoreEmulatedMouseEvents = !0, b.isOverTarget = !0, b.isPressed = !0, b.target = p.currentTarget, b.pointerType = "touch", f || Yo(b.target), C(Pt(b.target, p), b.pointerType) && p.stopPropagation(), E(st(p.currentTarget), "scroll", I, !0);
      }, k.onTouchMove = (p) => {
        if (!Ce(p.currentTarget, ye(p.nativeEvent))) return;
        if (!b.isPressed) {
          p.stopPropagation();
          return;
        }
        let w = Qo(p.nativeEvent, b.activePointerId), T = !0;
        w && ea(w, p.currentTarget) ? !b.isOverTarget && b.pointerType != null && (b.isOverTarget = !0, T = C(Pt(b.target, p), b.pointerType)) : b.isOverTarget && b.pointerType != null && (b.isOverTarget = !1, T = O(Pt(b.target, p), b.pointerType, !1), D(Pt(b.target, p))), T && p.stopPropagation();
      }, k.onTouchEnd = (p) => {
        if (!Ce(p.currentTarget, ye(p.nativeEvent))) return;
        if (!b.isPressed) {
          p.stopPropagation();
          return;
        }
        let w = Qo(p.nativeEvent, b.activePointerId), T = !0;
        w && ea(w, p.currentTarget) && b.pointerType != null ? (R(Pt(b.target, p), b.pointerType), T = O(Pt(b.target, p), b.pointerType), L(p.nativeEvent, b.target)) : b.isOverTarget && b.pointerType != null && (T = O(Pt(b.target, p), b.pointerType, !1)), T && p.stopPropagation(), b.isPressed = !1, b.activePointerId = null, b.isOverTarget = !1, b.ignoreEmulatedMouseEvents = !0, b.target && !f && fn(b.target), N();
      }, k.onTouchCancel = (p) => {
        Ce(p.currentTarget, ye(p.nativeEvent)) && (p.stopPropagation(), b.isPressed && S(Pt(b.target, p)));
      };
      let I = (p) => {
        b.isPressed && Ce(ye(p), b.target) && S({
          currentTarget: b.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      k.onDragStart = (p) => {
        Ce(p.currentTarget, ye(p.nativeEvent)) && S(p);
      };
    }
    return k;
  }, [
    E,
    l,
    u,
    N,
    f,
    S,
    D,
    O,
    C,
    R,
    A,
    L
  ]);
  return ue(() => {
    if (!m || process.env.NODE_ENV === "test") return;
    const b = $e(m.current);
    if (!b || !b.head || b.getElementById(Zo)) return;
    const k = b.createElement("style");
    k.id = Zo, k.textContent = `
@layer {
  [${Jo}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), b.head.prepend(k);
  }, [
    m
  ]), ue(() => {
    let b = $.current;
    return () => {
      var k;
      f || fn((k = b.target) !== null && k !== void 0 ? k : void 0);
      for (let j of b.disposables) j();
      b.disposables = [];
    };
  }, [
    f
  ]), {
    isPressed: c || x,
    pressProps: Gt(g, P, {
      [Jo]: !0
    })
  };
}
function ao(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function pn(e, t) {
  const { key: r, code: n } = e, o = t, a = o.getAttribute("role");
  return (r === "Enter" || r === " " || r === "Spacebar" || n === "Space") && !(o instanceof st(o).HTMLInputElement && !gs(o, r) || o instanceof st(o).HTMLTextAreaElement || o.isContentEditable) && // Links should only trigger with Enter key
  !((a === "link" || !a && ao(o)) && r !== "Enter");
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
function Pt(e, t) {
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
function ea(e, t) {
  let r = t.getBoundingClientRect(), n = Jd(e);
  return Qd(r, n);
}
function eu(e) {
  return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !ao(e);
}
function ta(e, t) {
  return e instanceof HTMLInputElement ? !gs(e, t) : eu(e);
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
function gs(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : tu.has(e.type);
}
let or = null, Rn = /* @__PURE__ */ new Set(), yr = /* @__PURE__ */ new Map(), Ht = !1, Ln = !1;
const ru = {
  Tab: !0,
  Escape: !0
};
function so(e, t) {
  for (let r of Rn) r(e, t);
}
function nu(e) {
  return !(e.metaKey || !rr() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Gr(e) {
  Ht = !0, nu(e) && (or = "keyboard", so("keyboard", e));
}
function at(e) {
  or = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Ht = !0, so("pointer", e));
}
function ms(e) {
  Tn(e) && (Ht = !0, or = "virtual");
}
function bs(e) {
  e.target === window || e.target === document || Br || !e.isTrusted || (!Ht && !Ln && (or = "virtual", so("virtual", e)), Ht = !1, Ln = !1);
}
function hs() {
  Br || (Ht = !1, Ln = !0);
}
function Mn(e) {
  if (typeof window > "u" || typeof document > "u" || yr.get(st(e))) return;
  const t = st(e), r = $e(e);
  let n = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Ht = !0, n.apply(this, arguments);
  }, r.addEventListener("keydown", Gr, !0), r.addEventListener("keyup", Gr, !0), r.addEventListener("click", ms, !0), t.addEventListener("focus", bs, !0), t.addEventListener("blur", hs, !1), typeof PointerEvent < "u" ? (r.addEventListener("pointerdown", at, !0), r.addEventListener("pointermove", at, !0), r.addEventListener("pointerup", at, !0)) : process.env.NODE_ENV === "test" && (r.addEventListener("mousedown", at, !0), r.addEventListener("mousemove", at, !0), r.addEventListener("mouseup", at, !0)), t.addEventListener("beforeunload", () => {
    vs(e);
  }, {
    once: !0
  }), yr.set(t, {
    focus: n
  });
}
const vs = (e, t) => {
  const r = st(e), n = $e(e);
  t && n.removeEventListener("DOMContentLoaded", t), yr.has(r) && (r.HTMLElement.prototype.focus = yr.get(r).focus, n.removeEventListener("keydown", Gr, !0), n.removeEventListener("keyup", Gr, !0), n.removeEventListener("click", ms, !0), r.removeEventListener("focus", bs, !0), r.removeEventListener("blur", hs, !1), typeof PointerEvent < "u" ? (n.removeEventListener("pointerdown", at, !0), n.removeEventListener("pointermove", at, !0), n.removeEventListener("pointerup", at, !0)) : process.env.NODE_ENV === "test" && (n.removeEventListener("mousedown", at, !0), n.removeEventListener("mousemove", at, !0), n.removeEventListener("mouseup", at, !0)), yr.delete(r));
};
function ou(e) {
  const t = $e(e);
  let r;
  return t.readyState !== "loading" ? Mn(e) : (r = () => {
    Mn(e);
  }, t.addEventListener("DOMContentLoaded", r)), () => vs(e, r);
}
typeof document < "u" && ou();
function xs() {
  return or !== "pointer";
}
function ys() {
  return or;
}
const au = /* @__PURE__ */ new Set([
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
function su(e, t, r) {
  let n = $e(r == null ? void 0 : r.target);
  const o = typeof window < "u" ? st(r == null ? void 0 : r.target).HTMLInputElement : HTMLInputElement, a = typeof window < "u" ? st(r == null ? void 0 : r.target).HTMLTextAreaElement : HTMLTextAreaElement, s = typeof window < "u" ? st(r == null ? void 0 : r.target).HTMLElement : HTMLElement, l = typeof window < "u" ? st(r == null ? void 0 : r.target).KeyboardEvent : KeyboardEvent;
  return e = e || n.activeElement instanceof o && !au.has(n.activeElement.type) || n.activeElement instanceof a || n.activeElement instanceof s && n.activeElement.isContentEditable, !(e && t === "keyboard" && r instanceof l && !ru[r.key]);
}
function iu(e, t, r) {
  Mn(), ue(() => {
    let n = (o, a) => {
      su(!!(r != null && r.isTextInput), o, a) && e(xs());
    };
    return Rn.add(n), () => {
      Rn.delete(n);
    };
  }, t);
}
function Hr(e) {
  const t = $e(e), r = Qe(t);
  if (ys() === "virtual") {
    let n = r;
    os(() => {
      Qe(t) === n && e.isConnected && tr(e);
    });
  } else tr(e);
}
function ws(e) {
  let { isDisabled: t, onFocus: r, onBlur: n, onFocusChange: o } = e;
  const a = pe((c) => {
    if (c.target === c.currentTarget)
      return n && n(c), o && o(!1), !0;
  }, [
    n,
    o
  ]), s = fs(a), l = pe((c) => {
    const u = $e(c.target), d = u ? Qe(u) : Qe();
    c.target === c.currentTarget && d === ye(c.nativeEvent) && (r && r(c), o && o(!0), s(c));
  }, [
    o,
    r,
    s
  ]);
  return {
    focusProps: {
      onFocus: !t && (r || o || n) ? l : void 0,
      onBlur: !t && (n || o) ? a : void 0
    }
  };
}
function ra(e) {
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
      onKeyDown: ra(e.onKeyDown),
      onKeyUp: ra(e.onKeyUp)
    }
  };
}
let cu = /* @__PURE__ */ ie.createContext(null);
function du(e) {
  let t = mt(cu) || {};
  as(t, e);
  let { ref: r, ...n } = t;
  return n;
}
function uu(e, t) {
  let { focusProps: r } = ws(e), { keyboardProps: n } = lu(e), o = Gt(r, n), a = du(t), s = e.isDisabled ? {} : a, l = re(e.autoFocus);
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
    }, s)
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
  let { isDisabled: t, onBlurWithin: r, onFocusWithin: n, onFocusWithinChange: o } = e, a = re({
    isFocusWithin: !1
  }), { addGlobalListener: s, removeAllGlobalListeners: l } = to(), c = pe((f) => {
    f.currentTarget.contains(f.target) && a.current.isFocusWithin && !f.currentTarget.contains(f.relatedTarget) && (a.current.isFocusWithin = !1, l(), r && r(f), o && o(!1));
  }, [
    r,
    o,
    a,
    l
  ]), u = fs(c), d = pe((f) => {
    if (!f.currentTarget.contains(f.target)) return;
    const m = $e(f.target), g = Qe(m);
    if (!a.current.isFocusWithin && g === ye(f.nativeEvent)) {
      n && n(f), o && o(!0), a.current.isFocusWithin = !0, u(f);
      let x = f.currentTarget;
      s(m, "focus", (h) => {
        if (a.current.isFocusWithin && !Ce(x, h.target)) {
          let $ = new m.defaultView.FocusEvent("blur", {
            relatedTarget: h.target
          });
          us($, x);
          let E = no($);
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
    s,
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
function na(e) {
  e.pointerType === "touch" && An();
}
function pu() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", na) : process.env.NODE_ENV === "test" && document.addEventListener("touchend", An), gn++, () => {
      gn--, !(gn > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", na) : process.env.NODE_ENV === "test" && document.removeEventListener("touchend", An));
    };
}
function gu(e) {
  let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, isDisabled: o } = e, [a, s] = te(!1), l = re({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  ue(pu, []);
  let { addGlobalListener: c, removeAllGlobalListeners: u } = to(), { hoverProps: d, triggerHoverEnd: f } = _e(() => {
    let m = (h, $) => {
      if (l.pointerType = $, o || $ === "touch" || l.isHovered || !h.currentTarget.contains(h.target)) return;
      l.isHovered = !0;
      let E = h.currentTarget;
      l.target = E, c($e(h.target), "pointerover", (N) => {
        l.isHovered && l.target && !Ce(l.target, N.target) && g(N, N.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: E,
        pointerType: $
      }), r && r(!0), s(!0);
    }, g = (h, $) => {
      let E = l.target;
      l.pointerType = "", l.target = null, !($ === "touch" || !l.isHovered || !E) && (l.isHovered = !1, u(), n && n({
        type: "hoverend",
        target: E,
        pointerType: $
      }), r && r(!1), s(!1));
    }, x = {};
    return typeof PointerEvent < "u" ? (x.onPointerEnter = (h) => {
      Wr && h.pointerType === "mouse" || m(h, h.pointerType);
    }, x.onPointerLeave = (h) => {
      !o && h.currentTarget.contains(h.target) && g(h, h.pointerType);
    }) : process.env.NODE_ENV === "test" && (x.onTouchStart = () => {
      l.ignoreEmulatedMouseEvents = !0;
    }, x.onMouseEnter = (h) => {
      !l.ignoreEmulatedMouseEvents && !Wr && m(h, "mouse"), l.ignoreEmulatedMouseEvents = !1;
    }, x.onMouseLeave = (h) => {
      !o && h.currentTarget.contains(h.target) && g(h, "mouse");
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
    isHovered: a
  };
}
function mu(e) {
  let { ref: t, onInteractOutside: r, isDisabled: n, onInteractOutsideStart: o } = e, a = re({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }), s = nt((c) => {
    r && Lr(c, t) && (o && o(c), a.current.isPointerDown = !0);
  }), l = nt((c) => {
    r && r(c);
  });
  ue(() => {
    let c = a.current;
    if (n) return;
    const u = t.current, d = $e(u);
    if (typeof PointerEvent < "u") {
      let f = (m) => {
        c.isPointerDown && Lr(m, t) && l(m), c.isPointerDown = !1;
      };
      return d.addEventListener("pointerdown", s, !0), d.addEventListener("click", f, !0), () => {
        d.removeEventListener("pointerdown", s, !0), d.removeEventListener("click", f, !0);
      };
    } else if (process.env.NODE_ENV === "test") {
      let f = (g) => {
        c.ignoreEmulatedMouseEvents ? c.ignoreEmulatedMouseEvents = !1 : c.isPointerDown && Lr(g, t) && l(g), c.isPointerDown = !1;
      }, m = (g) => {
        c.ignoreEmulatedMouseEvents = !0, c.isPointerDown && Lr(g, t) && l(g), c.isPointerDown = !1;
      };
      return d.addEventListener("mousedown", s, !0), d.addEventListener("mouseup", f, !0), d.addEventListener("touchstart", s, !0), d.addEventListener("touchend", m, !0), () => {
        d.removeEventListener("mousedown", s, !0), d.removeEventListener("mouseup", f, !0), d.removeEventListener("touchstart", s, !0), d.removeEventListener("touchend", m, !0);
      };
    }
  }, [
    t,
    n,
    s,
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
const oa = /* @__PURE__ */ ie.createContext(null), In = "react-aria-focus-scope-restore";
let Te = null;
function bu(e) {
  let { children: t, contain: r, restoreFocus: n, autoFocus: o } = e, a = re(null), s = re(null), l = re([]), { parentNode: c } = mt(oa) || {}, u = _e(() => new _n({
    scopeRef: l
  }), [
    l
  ]);
  Me(() => {
    let m = c || Oe.root;
    if (Oe.getTreeNode(m.scopeRef) && Te && !Kr(Te, m.scopeRef)) {
      let g = Oe.getTreeNode(Te);
      g && (m = g);
    }
    m.addChild(u), Oe.addNode(u);
  }, [
    u,
    c
  ]), Me(() => {
    let m = Oe.getTreeNode(l);
    m && (m.contain = !!r);
  }, [
    r
  ]), Me(() => {
    var m;
    let g = (m = a.current) === null || m === void 0 ? void 0 : m.nextSibling, x = [], h = ($) => $.stopPropagation();
    for (; g && g !== s.current; )
      x.push(g), g.addEventListener(In, h), g = g.nextSibling;
    return l.current = x, () => {
      for (let $ of x) $.removeEventListener(In, h);
    };
  }, [
    t
  ]), wu(l, n, r), vu(l, r), $u(l, n, r), yu(l, o), ue(() => {
    const m = Qe($e(l.current ? l.current[0] : void 0));
    let g = null;
    if (lt(m, l.current)) {
      for (let x of Oe.traverse()) x.scopeRef && lt(m, x.scopeRef.current) && (g = x);
      g === Oe.getTreeNode(l) && (Te = g.scopeRef);
    }
  }, [
    l
  ]), Me(() => () => {
    var m, g, x;
    let h = (x = (g = Oe.getTreeNode(l)) === null || g === void 0 || (m = g.parent) === null || m === void 0 ? void 0 : m.scopeRef) !== null && x !== void 0 ? x : null;
    (l === Te || Kr(l, Te)) && (!h || Oe.getTreeNode(h)) && (Te = h), Oe.removeTreeNode(l);
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
  return /* @__PURE__ */ ie.createElement(oa.Provider, {
    value: f
  }, /* @__PURE__ */ ie.createElement("span", {
    "data-focus-scope-start": !0,
    hidden: !0,
    ref: a
  }), t, /* @__PURE__ */ ie.createElement("span", {
    "data-focus-scope-end": !0,
    hidden: !0,
    ref: s
  }));
}
function hu(e) {
  return {
    focusNext(t = {}) {
      let r = e.current, { from: n, tabbable: o, wrap: a, accept: s } = t;
      var l;
      let c = n || Qe($e((l = r[0]) !== null && l !== void 0 ? l : void 0)), u = r[0].previousElementSibling, d = Vt(r), f = Mt(d, {
        tabbable: o,
        accept: s
      }, r);
      f.currentNode = lt(c, r) ? c : u;
      let m = f.nextNode();
      return !m && a && (f.currentNode = u, m = f.nextNode()), m && $t(m, !0), m;
    },
    focusPrevious(t = {}) {
      let r = e.current, { from: n, tabbable: o, wrap: a, accept: s } = t;
      var l;
      let c = n || Qe($e((l = r[0]) !== null && l !== void 0 ? l : void 0)), u = r[r.length - 1].nextElementSibling, d = Vt(r), f = Mt(d, {
        tabbable: o,
        accept: s
      }, r);
      f.currentNode = lt(c, r) ? c : u;
      let m = f.previousNode();
      return !m && a && (f.currentNode = u, m = f.previousNode()), m && $t(m, !0), m;
    },
    focusFirst(t = {}) {
      let r = e.current, { tabbable: n, accept: o } = t, a = Vt(r), s = Mt(a, {
        tabbable: n,
        accept: o
      }, r);
      s.currentNode = r[0].previousElementSibling;
      let l = s.nextNode();
      return l && $t(l, !0), l;
    },
    focusLast(t = {}) {
      let r = e.current, { tabbable: n, accept: o } = t, a = Vt(r), s = Mt(a, {
        tabbable: n,
        accept: o
      }, r);
      s.currentNode = r[r.length - 1].nextElementSibling;
      let l = s.previousNode();
      return l && $t(l, !0), l;
    }
  };
}
function Vt(e) {
  return e[0].parentElement;
}
function hr(e) {
  let t = Oe.getTreeNode(Te);
  for (; t && t.scopeRef !== e; ) {
    if (t.contain) return !1;
    t = t.parent;
  }
  return !0;
}
function vu(e, t) {
  let r = re(void 0), n = re(void 0);
  Me(() => {
    let o = e.current;
    if (!t) {
      n.current && (cancelAnimationFrame(n.current), n.current = void 0);
      return;
    }
    const a = $e(o ? o[0] : void 0);
    let s = (u) => {
      if (u.key !== "Tab" || u.altKey || u.ctrlKey || u.metaKey || !hr(e) || u.isComposing) return;
      let d = Qe(a), f = e.current;
      if (!f || !lt(d, f)) return;
      let m = Vt(f), g = Mt(m, {
        tabbable: !0
      }, f);
      if (!d) return;
      g.currentNode = d;
      let x = u.shiftKey ? g.previousNode() : g.nextNode();
      x || (g.currentNode = u.shiftKey ? f[f.length - 1].nextElementSibling : f[0].previousElementSibling, x = u.shiftKey ? g.previousNode() : g.nextNode()), u.preventDefault(), x && $t(x, !0);
    }, l = (u) => {
      (!Te || Kr(Te, e)) && lt(ye(u), e.current) ? (Te = e, r.current = ye(u)) : hr(e) && !Lt(ye(u), e) ? r.current ? r.current.focus() : Te && Te.current && On(Te.current) : hr(e) && (r.current = ye(u));
    }, c = (u) => {
      n.current && cancelAnimationFrame(n.current), n.current = requestAnimationFrame(() => {
        let d = ys(), f = (d === "virtual" || d === null) && eo() && ns(), m = Qe(a);
        if (!f && m && hr(e) && !Lt(m, e)) {
          Te = e;
          let x = ye(u);
          if (x && x.isConnected) {
            var g;
            r.current = x, (g = r.current) === null || g === void 0 || g.focus();
          } else Te.current && On(Te.current);
        }
      });
    };
    return a.addEventListener("keydown", s, !1), a.addEventListener("focusin", l, !1), o == null || o.forEach((u) => u.addEventListener("focusin", l, !1)), o == null || o.forEach((u) => u.addEventListener("focusout", c, !1)), () => {
      a.removeEventListener("keydown", s, !1), a.removeEventListener("focusin", l, !1), o == null || o.forEach((u) => u.removeEventListener("focusin", l, !1)), o == null || o.forEach((u) => u.removeEventListener("focusout", c, !1));
    };
  }, [
    e,
    t
  ]), Me(() => () => {
    n.current && cancelAnimationFrame(n.current);
  }, [
    n
  ]);
}
function $s(e) {
  return Lt(e);
}
function lt(e, t) {
  return !e || !t ? !1 : t.some((r) => r.contains(e));
}
function Lt(e, t = null) {
  if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
  for (let { scopeRef: r } of Oe.traverse(Oe.getTreeNode(t)))
    if (r && lt(e, r.current)) return !0;
  return !1;
}
function xu(e) {
  return Lt(e, Te);
}
function Kr(e, t) {
  var r;
  let n = (r = Oe.getTreeNode(t)) === null || r === void 0 ? void 0 : r.parent;
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
function ks(e, t = !0) {
  let r = e[0].previousElementSibling, n = Vt(e), o = Mt(n, {
    tabbable: t
  }, e);
  o.currentNode = r;
  let a = o.nextNode();
  return t && !a && (n = Vt(e), o = Mt(n, {
    tabbable: !1
  }, e), o.currentNode = r, a = o.nextNode()), a;
}
function On(e, t = !0) {
  $t(ks(e, t));
}
function yu(e, t) {
  const r = ie.useRef(t);
  ue(() => {
    if (r.current) {
      Te = e;
      const n = $e(e.current ? e.current[0] : void 0);
      !lt(Qe(n), Te.current) && e.current && On(e.current);
    }
    r.current = !1;
  }, [
    e
  ]);
}
function wu(e, t, r) {
  Me(() => {
    if (t || r) return;
    let n = e.current;
    const o = $e(n ? n[0] : void 0);
    let a = (s) => {
      let l = ye(s);
      lt(l, e.current) ? Te = e : $s(l) || (Te = null);
    };
    return o.addEventListener("focusin", a, !1), n == null || n.forEach((s) => s.addEventListener("focusin", a, !1)), () => {
      o.removeEventListener("focusin", a, !1), n == null || n.forEach((s) => s.removeEventListener("focusin", a, !1));
    };
  }, [
    e,
    t,
    r
  ]);
}
function aa(e) {
  let t = Oe.getTreeNode(Te);
  for (; t && t.scopeRef !== e; ) {
    if (t.nodeToRestore) return !1;
    t = t.parent;
  }
  return (t == null ? void 0 : t.scopeRef) === e;
}
function $u(e, t, r) {
  const n = re(typeof document < "u" ? Qe($e(e.current ? e.current[0] : void 0)) : null);
  Me(() => {
    let o = e.current;
    const a = $e(o ? o[0] : void 0);
    if (!t || r) return;
    let s = () => {
      (!Te || Kr(Te, e)) && lt(Qe(a), e.current) && (Te = e);
    };
    return a.addEventListener("focusin", s, !1), o == null || o.forEach((l) => l.addEventListener("focusin", s, !1)), () => {
      a.removeEventListener("focusin", s, !1), o == null || o.forEach((l) => l.removeEventListener("focusin", s, !1));
    };
  }, [
    e,
    r
  ]), Me(() => {
    const o = $e(e.current ? e.current[0] : void 0);
    if (!t) return;
    let a = (s) => {
      if (s.key !== "Tab" || s.altKey || s.ctrlKey || s.metaKey || !hr(e) || s.isComposing) return;
      let l = o.activeElement;
      if (!Lt(l, e) || !aa(e)) return;
      let c = Oe.getTreeNode(e);
      if (!c) return;
      let u = c.nodeToRestore, d = Mt(o.body, {
        tabbable: !0
      });
      d.currentNode = l;
      let f = s.shiftKey ? d.previousNode() : d.nextNode();
      if ((!u || !u.isConnected || u === o.body) && (u = void 0, c.nodeToRestore = void 0), (!f || !Lt(f, e)) && u) {
        d.currentNode = u;
        do
          f = s.shiftKey ? d.previousNode() : d.nextNode();
        while (Lt(f, e));
        s.preventDefault(), s.stopPropagation(), f ? $t(f, !0) : $s(u) ? $t(u, !0) : l.blur();
      }
    };
    return r || o.addEventListener("keydown", a, !0), () => {
      r || o.removeEventListener("keydown", a, !0);
    };
  }, [
    e,
    t,
    r
  ]), Me(() => {
    const o = $e(e.current ? e.current[0] : void 0);
    if (!t) return;
    let a = Oe.getTreeNode(e);
    if (a) {
      var s;
      return a.nodeToRestore = (s = n.current) !== null && s !== void 0 ? s : void 0, () => {
        let l = Oe.getTreeNode(e);
        if (!l) return;
        let c = l.nodeToRestore, u = Qe(o);
        if (t && c && (u && Lt(u, e) || u === o.body && aa(e))) {
          let d = Oe.clone();
          requestAnimationFrame(() => {
            if (o.activeElement === o.body) {
              let f = d.getTreeNode(e);
              for (; f; ) {
                if (f.nodeToRestore && f.nodeToRestore.isConnected) {
                  sa(f.nodeToRestore);
                  return;
                }
                f = f.parent;
              }
              for (f = d.getTreeNode(e); f; ) {
                if (f.scopeRef && f.scopeRef.current && Oe.getTreeNode(f.scopeRef)) {
                  let m = ks(f.scopeRef.current, !0);
                  sa(m);
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
function sa(e) {
  e.dispatchEvent(new CustomEvent(In, {
    bubbles: !0,
    cancelable: !0
  })) && $t(e);
}
function Mt(e, t, r) {
  let n = t != null && t.tabbable ? Rd : is, o = (e == null ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null, a = $e(o), s = md(a, e || a, NodeFilter.SHOW_ELEMENT, {
    acceptNode(l) {
      var c;
      return !(t == null || (c = t.from) === null || c === void 0) && c.contains(l) ? NodeFilter.FILTER_REJECT : n(l) && ds(l) && (!r || lt(l, r)) && (!(t != null && t.accept) || t.accept(l)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  return t != null && t.from && (s.currentNode = t.from), s;
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
    let a = new _n({
      scopeRef: t
    });
    o.addChild(a), a.parent = o, this.fastMap.set(t, a), n && (a.nodeToRestore = n);
  }
  addNode(t) {
    this.fastMap.set(t.scopeRef, t);
  }
  removeTreeNode(t) {
    if (t === null) return;
    let r = this.fastMap.get(t);
    if (!r) return;
    let n = r.parent;
    for (let a of this.traverse()) a !== r && r.nodeToRestore && a.nodeToRestore && r.scopeRef && r.scopeRef.current && lt(a.nodeToRestore, r.scopeRef.current) && (a.nodeToRestore = r.nodeToRestore);
    let o = r.children;
    n && (n.removeChild(r), o.size > 0 && o.forEach((a) => n && n.addChild(a))), this.fastMap.delete(r.scopeRef);
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
let Oe = new lo();
function Ns(e = {}) {
  let { autoFocus: t = !1, isTextInput: r, within: n } = e, o = re({
    isFocused: !1,
    isFocusVisible: t || xs()
  }), [a, s] = te(!1), [l, c] = te(() => o.current.isFocused && o.current.isFocusVisible), u = pe(() => c(o.current.isFocused && o.current.isFocusVisible), []), d = pe((g) => {
    o.current.isFocused = g, s(g), u();
  }, [
    u
  ]);
  iu((g) => {
    o.current.isFocusVisible = g, u();
  }, [], {
    isTextInput: r
  });
  let { focusProps: f } = ws({
    isDisabled: n,
    onFocusChange: d
  }), { focusWithinProps: m } = io({
    isDisabled: !n,
    onFocusWithinChange: d
  });
  return {
    isFocused: a,
    isFocusVisible: l,
    focusProps: n ? m : f
  };
}
function ku(e, t, r) {
  let { type: n } = e, { isOpen: o } = t;
  ue(() => {
    r && r.current && cs.set(r.current, t.close);
  });
  let a;
  n === "menu" ? a = !0 : n === "listbox" && (a = "listbox");
  let s = Jn();
  return {
    triggerProps: {
      "aria-haspopup": a,
      "aria-expanded": o,
      "aria-controls": o ? s : void 0,
      onPress: t.toggle
    },
    overlayProps: {
      id: s
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
let Mr = 0, bn;
function Eu(e = {}) {
  let { isDisabled: t } = e;
  Me(() => {
    if (!t)
      return Mr++, Mr === 1 && (Zr() ? bn = Tu() : bn = ju()), () => {
        Mr--, Mr === 0 && bn();
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
function Tu() {
  let e, t, r = (u) => {
    e = ss(u.target, !0), !(e === document.documentElement && e === document.body) && e instanceof HTMLElement && window.getComputedStyle(e).overscrollBehavior === "auto" && (t = Bt(e, "overscrollBehavior", "contain"));
  }, n = (u) => {
    if (!e || e === document.documentElement || e === document.body) {
      u.preventDefault();
      return;
    }
    e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && u.preventDefault();
  }, o = () => {
    t && t();
  }, a = (u) => {
    let d = u.target;
    Pu(d) && (l(), d.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      d.style.transform = "", mn && (mn.height < window.innerHeight ? requestAnimationFrame(() => {
        ia(d);
      }) : mn.addEventListener("resize", () => ia(d), {
        once: !0
      }));
    }));
  }, s = null, l = () => {
    if (s) return;
    let u = () => {
      window.scrollTo(0, 0);
    }, d = window.pageXOffset, f = window.pageYOffset;
    s = kr(fr(window, "scroll", u), Bt(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), Bt(document.documentElement, "overflow", "hidden"), Bt(document.body, "marginTop", `-${f}px`), () => {
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
  }), fr(document, "focus", a, !0));
  return () => {
    t == null || t(), s == null || s(), c();
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
function ia(e) {
  let t = document.scrollingElement || document.documentElement, r = e;
  for (; r && r !== t; ) {
    let n = ss(r);
    if (n !== document.documentElement && n !== document.body && n !== r) {
      let o = n.getBoundingClientRect().top, a = r.getBoundingClientRect().top;
      a > o + r.clientHeight && (n.scrollTop += a - o);
    }
    r = n.parentElement;
  }
}
function Pu(e) {
  return e instanceof HTMLInputElement && !Nu.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
const Su = /* @__PURE__ */ Pa({});
function Cu() {
  var e;
  return (e = mt(Su)) !== null && e !== void 0 ? e : {};
}
var Es = {};
Es = {
  dismiss: "تجاهل"
};
var js = {};
js = {
  dismiss: "Отхвърляне"
};
var Ts = {};
Ts = {
  dismiss: "Odstranit"
};
var Ps = {};
Ps = {
  dismiss: "Luk"
};
var Ss = {};
Ss = {
  dismiss: "Schließen"
};
var Cs = {};
Cs = {
  dismiss: "Απόρριψη"
};
var Rs = {};
Rs = {
  dismiss: "Dismiss"
};
var Ls = {};
Ls = {
  dismiss: "Descartar"
};
var Ms = {};
Ms = {
  dismiss: "Lõpeta"
};
var As = {};
As = {
  dismiss: "Hylkää"
};
var Is = {};
Is = {
  dismiss: "Rejeter"
};
var Os = {};
Os = {
  dismiss: "התעלם"
};
var _s = {};
_s = {
  dismiss: "Odbaci"
};
var Ds = {};
Ds = {
  dismiss: "Elutasítás"
};
var zs = {};
zs = {
  dismiss: "Ignora"
};
var Fs = {};
Fs = {
  dismiss: "閉じる"
};
var Vs = {};
Vs = {
  dismiss: "무시"
};
var Bs = {};
Bs = {
  dismiss: "Atmesti"
};
var Gs = {};
Gs = {
  dismiss: "Nerādīt"
};
var Hs = {};
Hs = {
  dismiss: "Lukk"
};
var Ws = {};
Ws = {
  dismiss: "Negeren"
};
var Ks = {};
Ks = {
  dismiss: "Zignoruj"
};
var Us = {};
Us = {
  dismiss: "Descartar"
};
var Ys = {};
Ys = {
  dismiss: "Dispensar"
};
var qs = {};
qs = {
  dismiss: "Revocare"
};
var Xs = {};
Xs = {
  dismiss: "Пропустить"
};
var Zs = {};
Zs = {
  dismiss: "Zrušiť"
};
var Js = {};
Js = {
  dismiss: "Opusti"
};
var Qs = {};
Qs = {
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
var ai = {};
ai = {
  "ar-AE": Es,
  "bg-BG": js,
  "cs-CZ": Ts,
  "da-DK": Ps,
  "de-DE": Ss,
  "el-GR": Cs,
  "en-US": Rs,
  "es-ES": Ls,
  "et-EE": Ms,
  "fi-FI": As,
  "fr-FR": Is,
  "he-IL": Os,
  "hr-HR": _s,
  "hu-HU": Ds,
  "it-IT": zs,
  "ja-JP": Fs,
  "ko-KR": Vs,
  "lt-LT": Bs,
  "lv-LV": Gs,
  "nb-NO": Hs,
  "nl-NL": Ws,
  "pl-PL": Ks,
  "pt-BR": Us,
  "pt-PT": Ys,
  "ro-RO": qs,
  "ru-RU": Xs,
  "sk-SK": Zs,
  "sl-SI": Js,
  "sr-SP": Qs,
  "sv-SE": ei,
  "tr-TR": ti,
  "uk-UA": ri,
  "zh-CN": ni,
  "zh-TW": oi
};
const la = {
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
  let { style: t, isFocusable: r } = e, [n, o] = te(!1), { focusWithinProps: a } = io({
    isDisabled: !r,
    onFocusWithinChange: (l) => o(l)
  }), s = _e(() => n ? t : t ? {
    ...la,
    ...t
  } : la, [
    n
  ]);
  return {
    visuallyHiddenProps: {
      ...a,
      style: s
    }
  };
}
function Lu(e) {
  let { children: t, elementType: r = "div", isFocusable: n, style: o, ...a } = e, { visuallyHiddenProps: s } = Ru(e);
  return /* @__PURE__ */ ie.createElement(r, Gt(a, s), t);
}
function Mu(e) {
  return e && e.__esModule ? e.default : e;
}
function ca(e) {
  let { onDismiss: t, ...r } = e, n = od(Mu(ai), "@react-aria/overlays"), o = jd(r, n.format("dismiss")), a = () => {
    t && t();
  };
  return /* @__PURE__ */ ie.createElement(Lu, null, /* @__PURE__ */ ie.createElement("button", {
    ...o,
    tabIndex: -1,
    onClick: a,
    style: {
      width: 1,
      height: 1
    }
  }));
}
const si = /* @__PURE__ */ ie.createContext(null);
function Au(e) {
  let t = Zn(), { portalContainer: r = t ? null : document.body, isExiting: n } = e, [o, a] = te(!1), s = _e(() => ({
    contain: o,
    setContain: a
  }), [
    o,
    a
  ]), { getContainer: l } = Cu();
  if (!e.portalContainer && l && (r = l()), !r) return null;
  let c = e.children;
  return e.disableFocusManagement || (c = /* @__PURE__ */ ie.createElement(bu, {
    restoreFocus: !0,
    contain: (e.shouldContainFocus || o) && !n
  }, c)), c = /* @__PURE__ */ ie.createElement(si.Provider, {
    value: s
  }, /* @__PURE__ */ ie.createElement(fu, null, c)), /* @__PURE__ */ Hi.createPortal(c, r);
}
function Iu() {
  let e = mt(si), t = e == null ? void 0 : e.setContain;
  Me(() => {
    t == null || t(!0);
  }, [
    t
  ]);
}
function ii(e) {
  return Ae(e);
}
var Ou = (e, t, r = !0) => {
  if (!t)
    return [e, {}];
  const n = t.reduce((o, a) => a in e ? { ...o, [a]: e[a] } : o, {});
  return r ? [Object.keys(e).filter((a) => !t.includes(a)).reduce((a, s) => ({ ...a, [s]: e[s] }), {}), n] : [e, n];
}, da = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ze = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, _u = (e, t) => JSON.stringify(e) === JSON.stringify(t);
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
  for (let a of n) if (o.includes(a)) {
    let s = e[a], l = t[a];
    Array.isArray(s) || Array.isArray(l) ? r[a] = di(l, s) : typeof s == "object" && typeof l == "object" ? r[a] = ui(s, l) : r[a] = l + " " + s;
  } else r[a] = e[a];
  for (let a of o) n.includes(a) || (r[a] = t[a]);
  return r;
}, ua = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
const co = "-", Du = (e) => {
  const t = Fu(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (s) => {
      const l = s.split(co);
      return l[0] === "" && l.length !== 1 && l.shift(), fi(l, t) || zu(s);
    },
    getConflictingClassGroupIds: (s, l) => {
      const c = r[s] || [];
      return l && n[s] ? [...c, ...n[s]] : c;
    }
  };
}, fi = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? fi(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(co);
  return (s = t.validators.find(({
    validator: l
  }) => l(a))) == null ? void 0 : s.classGroupId;
}, fa = /^\[(.+)\]$/, zu = (e) => {
  if (fa.test(e)) {
    const t = fa.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
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
      const a = o === "" ? t : pa(t, o);
      a.classGroupId = r;
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
    Object.entries(o).forEach(([a, s]) => {
      Dn(s, pa(t, a), r, n);
    });
  });
}, pa = (e, t) => {
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
  const o = (a, s) => {
    r.set(a, s), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let s = r.get(a);
      if (s !== void 0)
        return s;
      if ((s = n.get(a)) !== void 0)
        return o(a, s), s;
    },
    set(a, s) {
      r.has(a) ? r.set(a, s) : o(a, s);
    }
  };
}, zn = "!", Fn = ":", Gu = Fn.length, Hu = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (o) => {
    const a = [];
    let s = 0, l = 0, c = 0, u;
    for (let x = 0; x < o.length; x++) {
      let h = o[x];
      if (s === 0 && l === 0) {
        if (h === Fn) {
          a.push(o.slice(c, x)), c = x + Gu;
          continue;
        }
        if (h === "/") {
          u = x;
          continue;
        }
      }
      h === "[" ? s++ : h === "]" ? s-- : h === "(" ? l++ : h === ")" && l--;
    }
    const d = a.length === 0 ? o : o.substring(c), f = Wu(d), m = f !== d, g = u && u > c ? u - c : void 0;
    return {
      modifiers: a,
      hasImportantModifier: m,
      baseClassName: f,
      maybePostfixModifierPosition: g
    };
  };
  if (t) {
    const o = t + Fn, a = n;
    n = (s) => s.startsWith(o) ? a(s.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: s,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const o = n;
    n = (a) => r({
      className: a,
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
    let a = [];
    return n.forEach((s) => {
      s[0] === "[" || t[s] ? (o.push(...a.sort(), s), a = []) : a.push(s);
    }), o.push(...a.sort()), o;
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
    sortModifiers: a
  } = t, s = [], l = e.trim().split(Yu);
  let c = "";
  for (let u = l.length - 1; u >= 0; u -= 1) {
    const d = l[u], {
      isExternal: f,
      modifiers: m,
      hasImportantModifier: g,
      baseClassName: x,
      maybePostfixModifierPosition: h
    } = r(d);
    if (f) {
      c = d + (c.length > 0 ? " " + c : c);
      continue;
    }
    let $ = !!h, E = n($ ? x.substring(0, h) : x);
    if (!E) {
      if (!$) {
        c = d + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (E = n(x), !E) {
        c = d + (c.length > 0 ? " " + c : c);
        continue;
      }
      $ = !1;
    }
    const N = a(m).join(":"), C = g ? N + zn : N, O = C + E;
    if (s.includes(O))
      continue;
    s.push(O);
    const R = o(E, $);
    for (let S = 0; S < R.length; ++S) {
      const D = R[S];
      s.push(C + D);
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
  let r, n, o, a = s;
  function s(c) {
    const u = t.reduce((d, f) => f(d), e());
    return r = Uu(u), n = r.cache.get, o = r.cache.set, a = l, l(c);
  }
  function l(c) {
    const u = n(c);
    if (u)
      return u;
    const d = qu(c, r);
    return o(c, d), d;
  }
  return function() {
    return a(Xu.apply(null, arguments));
  };
}
const Be = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, gi = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, mi = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Zu = /^\d+\/\d+$/, Ju = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Qu = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ef = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, tf = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, rf = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Yt = (e) => Zu.test(e), me = (e) => !!e && !Number.isNaN(Number(e)), zt = (e) => !!e && Number.isInteger(Number(e)), ga = (e) => e.endsWith("%") && me(e.slice(0, -1)), St = (e) => Ju.test(e), nf = () => !0, of = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Qu.test(e) && !ef.test(e)
), uo = () => !1, af = (e) => tf.test(e), sf = (e) => rf.test(e), lf = (e) => !J(e) && !Q(e), cf = (e) => ar(e, vi, uo), J = (e) => gi.test(e), Ft = (e) => ar(e, xi, of), hn = (e) => ar(e, yf, me), df = (e) => ar(e, bi, uo), uf = (e) => ar(e, hi, sf), ff = (e) => ar(e, uo, af), Q = (e) => mi.test(e), Ar = (e) => sr(e, xi), pf = (e) => sr(e, wf), gf = (e) => sr(e, bi), mf = (e) => sr(e, vi), bf = (e) => sr(e, hi), hf = (e) => sr(e, $f, !0), ar = (e, t, r) => {
  const n = gi.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, sr = (e, t, r = !1) => {
  const n = mi.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, bi = (e) => e === "position", vf = /* @__PURE__ */ new Set(["image", "url"]), hi = (e) => vf.has(e), xf = /* @__PURE__ */ new Set(["length", "size", "percentage"]), vi = (e) => xf.has(e), xi = (e) => e === "length", yf = (e) => e === "number", wf = (e) => e === "family-name", $f = (e) => e === "shadow", Bn = () => {
  const e = Be("color"), t = Be("font"), r = Be("text"), n = Be("font-weight"), o = Be("tracking"), a = Be("leading"), s = Be("breakpoint"), l = Be("container"), c = Be("spacing"), u = Be("radius"), d = Be("shadow"), f = Be("inset-shadow"), m = Be("drop-shadow"), g = Be("blur"), x = Be("perspective"), h = Be("aspect"), $ = Be("ease"), E = Be("animate"), N = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], C = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], O = () => ["auto", "hidden", "clip", "visible", "scroll"], R = () => ["auto", "contain", "none"], S = () => [Q, J, c], D = () => [Yt, "full", "auto", ...S()], A = () => [zt, "none", "subgrid", Q, J], L = () => ["auto", {
    span: ["full", zt, Q, J]
  }, Q, J], P = () => [zt, "auto", Q, J], b = () => ["auto", "min", "max", "fr", Q, J], k = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], j = () => ["start", "end", "center", "stretch"], y = () => ["auto", ...S()], I = () => [Yt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...S()], p = () => [e, Q, J], w = () => [ga, Ft], T = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    Q,
    J
  ], M = () => ["", me, Ar, Ft], U = () => ["solid", "dashed", "dotted", "double"], K = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    g,
    Q,
    J
  ], ne = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Q, J], B = () => ["none", me, Q, J], H = () => ["none", me, Q, J], q = () => [me, Q, J], z = () => [Yt, "full", ...S()];
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
        aspect: ["auto", "square", Yt, J, Q, h]
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
        object: [...C(), J, Q]
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
        inset: D()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": D()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": D()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: D()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: D()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: D()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: D()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: D()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: D()
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
        "grid-cols": A()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: L()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": P()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": P()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": A()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: L()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": P()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": P()
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
        "auto-cols": b()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": b()
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
        justify: [...k(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...j(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...j()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...k()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...j(), "baseline"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...j(), "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": k()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...j(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...j()]
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
        m: y()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: y()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: y()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: y()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: y()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: y()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: y()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: y()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: y()
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
            screen: [s]
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
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ga, J]
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
          a,
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
        placeholder: p()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: p()
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
        decoration: p()
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
        bg: [...C(), gf, df]
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
        bg: p()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: w()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: w()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: w()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: p()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: p()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: p()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: T()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": T()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": T()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": T()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": T()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": T()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": T()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": T()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": T()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": T()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": T()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": T()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": T()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": T()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": T()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: M()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": M()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": M()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": M()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": M()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": M()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": M()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": M()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": M()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": M()
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
        "divide-y": M()
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
        border: p()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": p()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": p()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": p()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": p()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": p()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": p()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": p()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": p()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: p()
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
          hf,
          ff
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: p()
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
        "inset-shadow": p()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: M()
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
        ring: p()
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
        "ring-offset": p()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": M()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": p()
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
        "mix-blend": [...K(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": K()
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
          m,
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
        ease: ["linear", "initial", $, Q, J]
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
        scale: H()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": H()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": H()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": H()
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
        translate: z()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": z()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": z()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": z()
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
        accent: p()
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
        caret: p()
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
        fill: ["none", ...p()]
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
        stroke: ["none", ...p()]
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
  override: a = {}
}) => (vr(e, "cacheSize", t), vr(e, "prefix", r), vr(e, "experimentalParseClassName", n), Ir(e.theme, a.theme), Ir(e.classGroups, a.classGroups), Ir(e.conflictingClassGroups, a.conflictingClassGroups), Ir(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), vr(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), Or(e.theme, o.theme), Or(e.classGroups, o.classGroups), Or(e.conflictingClassGroups, o.conflictingClassGroups), Or(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), yi(e, o, "orderSensitiveModifiers"), e), vr = (e, t, r) => {
  r !== void 0 && (e[t] = r);
}, Ir = (e, t) => {
  if (t)
    for (const r in t)
      vr(e, r, t[r]);
}, Or = (e, t) => {
  if (t)
    for (const r in t)
      yi(e, t, r);
}, yi = (e, t, r) => {
  const n = t[r];
  n !== void 0 && (e[r] = e[r] ? e[r].concat(n) : n);
}, Nf = (e, ...t) => typeof e == "function" ? Vn(Bn, e, ...t) : Vn(() => kf(Bn(), e), ...t), Ef = /* @__PURE__ */ Vn(Bn);
var jf = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, wi = (e) => e || void 0, Er = (...e) => wi(ci(e).filter(Boolean).join(" ")), vn = null, wt = {}, Gn = !1, pr = (...e) => (t) => t.twMerge ? ((!vn || Gn) && (Gn = !1, vn = Ze(wt) ? Ef : Nf({ ...wt, extend: { theme: wt.theme, classGroups: wt.classGroups, conflictingClassGroupModifiers: wt.conflictingClassGroupModifiers, conflictingClassGroups: wt.conflictingClassGroups, ...wt.extend } })), wi(vn(Er(e)))) : Er(e), ma = (e, t) => {
  for (let r in t) e.hasOwnProperty(r) ? e[r] = Er(e[r], t[r]) : e[r] = t[r];
  return e;
}, Tf = (e, t) => {
  let { extend: r = null, slots: n = {}, variants: o = {}, compoundVariants: a = [], compoundSlots: s = [], defaultVariants: l = {} } = e, c = { ...jf, ...t }, u = r != null && r.base ? Er(r.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, d = r != null && r.variants && !Ze(r.variants) ? ui(o, r.variants) : o, f = r != null && r.defaultVariants && !Ze(r.defaultVariants) ? { ...r.defaultVariants, ...l } : l;
  !Ze(c.twMergeConfig) && !_u(c.twMergeConfig, wt) && (Gn = !0, wt = c.twMergeConfig);
  let m = Ze(r == null ? void 0 : r.slots), g = Ze(n) ? {} : { base: Er(e == null ? void 0 : e.base, m && (r == null ? void 0 : r.base)), ...n }, x = m ? g : ma({ ...r == null ? void 0 : r.slots }, Ze(g) ? { base: e == null ? void 0 : e.base } : g), h = Ze(r == null ? void 0 : r.compoundVariants) ? a : di(r == null ? void 0 : r.compoundVariants, a), $ = (N) => {
    if (Ze(d) && Ze(n) && m) return pr(u, N == null ? void 0 : N.class, N == null ? void 0 : N.className)(c);
    if (h && !Array.isArray(h)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof h}`);
    if (s && !Array.isArray(s)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof s}`);
    let C = (k, j, y = [], I) => {
      let p = y;
      if (typeof j == "string") p = p.concat(ua(j).split(" ").map((w) => `${k}:${w}`));
      else if (Array.isArray(j)) p = p.concat(j.reduce((w, T) => w.concat(`${k}:${T}`), []));
      else if (typeof j == "object" && typeof I == "string") {
        for (let w in j) if (j.hasOwnProperty(w) && w === I) {
          let T = j[w];
          if (T && typeof T == "string") {
            let M = ua(T);
            p[I] ? p[I] = p[I].concat(M.split(" ").map((U) => `${k}:${U}`)) : p[I] = M.split(" ").map((U) => `${k}:${U}`);
          } else Array.isArray(T) && T.length > 0 && (p[I] = T.reduce((M, U) => M.concat(`${k}:${U}`), []));
        }
      }
      return p;
    }, O = (k, j = d, y = null, I = null) => {
      var p;
      let w = j[k];
      if (!w || Ze(w)) return null;
      let T = (p = I == null ? void 0 : I[k]) != null ? p : N == null ? void 0 : N[k];
      if (T === null) return null;
      let M = da(T), U = Array.isArray(c.responsiveVariants) && c.responsiveVariants.length > 0 || c.responsiveVariants === !0, K = f == null ? void 0 : f[k], W = [];
      if (typeof M == "object" && U) for (let [H, q] of Object.entries(M)) {
        let z = w[q];
        if (H === "initial") {
          K = q;
          continue;
        }
        Array.isArray(c.responsiveVariants) && !c.responsiveVariants.includes(H) || (W = C(H, z, W, y));
      }
      let ne = M != null && typeof M != "object" ? M : da(K), B = w[ne || "false"];
      return typeof W == "object" && typeof y == "string" && W[y] ? ma(W, B) : W.length > 0 ? (W.push(B), y === "base" ? W.join(" ") : W) : B;
    }, R = () => d ? Object.keys(d).map((k) => O(k, d)) : null, S = (k, j) => {
      if (!d || typeof d != "object") return null;
      let y = new Array();
      for (let I in d) {
        let p = O(I, d, k, j), w = k === "base" && typeof p == "string" ? p : p && p[k];
        w && (y[y.length] = w);
      }
      return y;
    }, D = {};
    for (let k in N) N[k] !== void 0 && (D[k] = N[k]);
    let A = (k, j) => {
      var y;
      let I = typeof (N == null ? void 0 : N[k]) == "object" ? { [k]: (y = N[k]) == null ? void 0 : y.initial } : {};
      return { ...f, ...D, ...I, ...j };
    }, L = (k = [], j) => {
      let y = [];
      for (let { class: I, className: p, ...w } of k) {
        let T = !0;
        for (let [M, U] of Object.entries(w)) {
          let K = A(M, j)[M];
          if (Array.isArray(U)) {
            if (!U.includes(K)) {
              T = !1;
              break;
            }
          } else {
            let W = (ne) => ne == null || ne === !1;
            if (W(U) && W(K)) continue;
            if (K !== U) {
              T = !1;
              break;
            }
          }
        }
        T && (I && y.push(I), p && y.push(p));
      }
      return y;
    }, P = (k) => {
      let j = L(h, k);
      if (!Array.isArray(j)) return j;
      let y = {};
      for (let I of j) if (typeof I == "string" && (y.base = pr(y.base, I)(c)), typeof I == "object") for (let [p, w] of Object.entries(I)) y[p] = pr(y[p], w)(c);
      return y;
    }, b = (k) => {
      if (s.length < 1) return null;
      let j = {};
      for (let { slots: y = [], class: I, className: p, ...w } of s) {
        if (!Ze(w)) {
          let T = !0;
          for (let M of Object.keys(w)) {
            let U = A(M, k)[M];
            if (U === void 0 || (Array.isArray(w[M]) ? !w[M].includes(U) : w[M] !== U)) {
              T = !1;
              break;
            }
          }
          if (!T) continue;
        }
        for (let T of y) j[T] = j[T] || [], j[T].push([I, p]);
      }
      return j;
    };
    if (!Ze(n) || !m) {
      let k = {};
      if (typeof x == "object" && !Ze(x)) for (let j of Object.keys(x)) k[j] = (y) => {
        var I, p;
        return pr(x[j], S(j, y), ((I = P(y)) != null ? I : [])[j], ((p = b(y)) != null ? p : [])[j], y == null ? void 0 : y.class, y == null ? void 0 : y.className)(c);
      };
      return k;
    }
    return pr(u, R(), L(h), N == null ? void 0 : N.class, N == null ? void 0 : N.className)(c);
  }, E = () => {
    if (!(!d || typeof d != "object")) return Object.keys(d);
  };
  return $.variantKeys = E(), $.extend = r, $.base = u, $.slots = x, $.variants = d, $.defaultVariants = f, $.compoundSlots = s, $.compoundVariants = h, $;
}, Pf = {
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
}, Mf = {
  default: "bg-transparent text-default-foreground",
  primary: "bg-transparent text-primary",
  secondary: "bg-transparent text-secondary",
  success: "bg-transparent text-success",
  warning: "bg-transparent text-warning",
  danger: "bg-transparent text-danger"
}, Af = {
  default: "border-default text-default-foreground",
  primary: "border-primary text-primary",
  secondary: "border-secondary text-secondary",
  success: "border-success text-success",
  warning: "border-warning text-warning",
  danger: "border-danger text-danger"
}, ae = {
  solid: Pf,
  shadow: Sf,
  bordered: Cf,
  flat: Rf,
  faded: Lf,
  light: Mf,
  ghost: Af
}, If = {
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
}, Of = {
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
  ...Of,
  ...zf,
  ..._f,
  ...Df,
  ...If
}, _r = ["small", "medium", "large"], ba = {
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
  return Tf(e, {
    ...t,
    twMerge: (r = void 0) != null ? r : !0,
    twMergeConfig: {
      theme: {
        ...(n = void 0) == null ? void 0 : n.theme,
        ...ba.theme
      },
      classGroups: {
        ...(o = void 0) == null ? void 0 : o.classGroups,
        ...ba.classGroups
      }
    }
  });
}, ha = Jr({
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
}, va = Jr({
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
        content: ae.solid.foreground
      },
      primary: {
        base: "before:bg-primary",
        content: ae.solid.primary
      },
      secondary: {
        base: "before:bg-secondary",
        content: ae.solid.secondary
      },
      success: {
        base: "before:bg-success",
        content: ae.solid.success
      },
      warning: {
        base: "before:bg-warning",
        content: ae.solid.warning
      },
      danger: {
        base: "before:bg-danger",
        content: ae.solid.danger
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
      class: ae.solid.default
    },
    {
      variant: "solid",
      color: "primary",
      class: ae.solid.primary
    },
    {
      variant: "solid",
      color: "secondary",
      class: ae.solid.secondary
    },
    {
      variant: "solid",
      color: "success",
      class: ae.solid.success
    },
    {
      variant: "solid",
      color: "warning",
      class: ae.solid.warning
    },
    {
      variant: "solid",
      color: "danger",
      class: ae.solid.danger
    },
    // shadow / color
    {
      variant: "shadow",
      color: "default",
      class: ae.shadow.default
    },
    {
      variant: "shadow",
      color: "primary",
      class: ae.shadow.primary
    },
    {
      variant: "shadow",
      color: "secondary",
      class: ae.shadow.secondary
    },
    {
      variant: "shadow",
      color: "success",
      class: ae.shadow.success
    },
    {
      variant: "shadow",
      color: "warning",
      class: ae.shadow.warning
    },
    {
      variant: "shadow",
      color: "danger",
      class: ae.shadow.danger
    },
    // bordered / color
    {
      variant: "bordered",
      color: "default",
      class: ae.bordered.default
    },
    {
      variant: "bordered",
      color: "primary",
      class: ae.bordered.primary
    },
    {
      variant: "bordered",
      color: "secondary",
      class: ae.bordered.secondary
    },
    {
      variant: "bordered",
      color: "success",
      class: ae.bordered.success
    },
    {
      variant: "bordered",
      color: "warning",
      class: ae.bordered.warning
    },
    {
      variant: "bordered",
      color: "danger",
      class: ae.bordered.danger
    },
    // flat / color
    {
      variant: "flat",
      color: "default",
      class: ae.flat.default
    },
    {
      variant: "flat",
      color: "primary",
      class: ae.flat.primary
    },
    {
      variant: "flat",
      color: "secondary",
      class: ae.flat.secondary
    },
    {
      variant: "flat",
      color: "success",
      class: ae.flat.success
    },
    {
      variant: "flat",
      color: "warning",
      class: ae.flat.warning
    },
    {
      variant: "flat",
      color: "danger",
      class: ae.flat.danger
    },
    // faded / color
    {
      variant: "faded",
      color: "default",
      class: ae.faded.default
    },
    {
      variant: "faded",
      color: "primary",
      class: ae.faded.primary
    },
    {
      variant: "faded",
      color: "secondary",
      class: ae.faded.secondary
    },
    {
      variant: "faded",
      color: "success",
      class: ae.faded.success
    },
    {
      variant: "faded",
      color: "warning",
      class: ae.faded.warning
    },
    {
      variant: "faded",
      color: "danger",
      class: ae.faded.danger
    },
    // light / color
    {
      variant: "light",
      color: "default",
      class: [ae.light.default, "data-[hover=true]:bg-default/40"]
    },
    {
      variant: "light",
      color: "primary",
      class: [ae.light.primary, "data-[hover=true]:bg-primary/20"]
    },
    {
      variant: "light",
      color: "secondary",
      class: [ae.light.secondary, "data-[hover=true]:bg-secondary/20"]
    },
    {
      variant: "light",
      color: "success",
      class: [ae.light.success, "data-[hover=true]:bg-success/20"]
    },
    {
      variant: "light",
      color: "warning",
      class: [ae.light.warning, "data-[hover=true]:bg-warning/20"]
    },
    {
      variant: "light",
      color: "danger",
      class: [ae.light.danger, "data-[hover=true]:bg-danger/20"]
    },
    // ghost / color
    {
      variant: "ghost",
      color: "default",
      class: [ae.ghost.default, "data-[hover=true]:!bg-default"]
    },
    {
      variant: "ghost",
      color: "primary",
      class: [
        ae.ghost.primary,
        "data-[hover=true]:!bg-primary data-[hover=true]:!text-primary-foreground"
      ]
    },
    {
      variant: "ghost",
      color: "secondary",
      class: [
        ae.ghost.secondary,
        "data-[hover=true]:!bg-secondary data-[hover=true]:!text-secondary-foreground"
      ]
    },
    {
      variant: "ghost",
      color: "success",
      class: [
        ae.ghost.success,
        "data-[hover=true]:!bg-success data-[hover=true]:!text-success-foreground"
      ]
    },
    {
      variant: "ghost",
      color: "warning",
      class: [
        ae.ghost.warning,
        "data-[hover=true]:!bg-warning data-[hover=true]:!text-warning-foreground"
      ]
    },
    {
      variant: "ghost",
      color: "danger",
      class: [
        ae.ghost.danger,
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
var xa = {
  ease: [0.36, 0.66, 0.4, 1]
}, ya = {
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
        ease: xa.ease
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: xa.ease
      }
    }
  }
};
function Bf(e) {
  return Ae(e);
}
var Gf = (e, t, r = !0) => {
  if (!t)
    return [e, {}];
  const n = t.reduce((o, a) => a in e ? { ...o, [a]: e[a] } : o, {});
  return r ? [Object.keys(e).filter((a) => !t.includes(a)).reduce((a, s) => ({ ...a, [s]: e[s] }), {}), n] : [e, n];
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
}, wa = (e, t) => {
  if (t.includes("-")) {
    const [, r] = t.split("-");
    return `${e}-${r}`;
  }
  return e;
}, gr = /* @__PURE__ */ new WeakMap(), Je = [];
function Uf(e, t = document.body) {
  let r = new Set(e), n = /* @__PURE__ */ new Set(), o = (c) => {
    for (let m of c.querySelectorAll(
      "[data-live-announcer], [data-react-aria-top-layer]"
    ))
      r.add(m);
    let u = (m) => {
      if (r.has(m) || m.parentElement && n.has(m.parentElement) && m.parentElement.getAttribute("role") !== "row")
        return NodeFilter.FILTER_REJECT;
      for (let g of r)
        if (m.contains(g))
          return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }, d = document.createTreeWalker(c, NodeFilter.SHOW_ELEMENT, { acceptNode: u }), f = u(c);
    if (f === NodeFilter.FILTER_ACCEPT && a(c), f !== NodeFilter.FILTER_REJECT) {
      let m = d.nextNode();
      for (; m != null; )
        a(m), m = d.nextNode();
    }
  }, a = (c) => {
    var u;
    let d = (u = gr.get(c)) != null ? u : 0;
    c.getAttribute("aria-hidden") === "true" && d === 0 || (d === 0 && c.setAttribute("aria-hidden", "true"), n.add(c), gr.set(c, d + 1));
  };
  Je.length && Je[Je.length - 1].disconnect(), o(t);
  let s = new MutationObserver((c) => {
    for (let u of c)
      if (!(u.type !== "childList" || u.addedNodes.length === 0) && ![...r, ...n].some((d) => d.contains(u.target))) {
        for (let d of u.removedNodes)
          d instanceof Element && (r.delete(d), n.delete(d));
        for (let d of u.addedNodes)
          (d instanceof HTMLElement || d instanceof SVGElement) && (d.dataset.liveAnnouncer === "true" || d.dataset.reactAriaTopLayer === "true") ? r.add(d) : d instanceof Element && o(d);
      }
  });
  s.observe(t, { childList: !0, subtree: !0 });
  let l = {
    visibleNodes: r,
    hiddenNodes: n,
    observe() {
      s.observe(t, { childList: !0, subtree: !0 });
    },
    disconnect() {
      s.disconnect();
    }
  };
  return Je.push(l), () => {
    s.disconnect();
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
var qf = globalThis != null && globalThis.document ? Ta : ue, [qp, Xf] = qn({
  name: "ButtonGroupContext",
  strict: !1
});
function ki(e, t) {
  let {
    elementType: r = "button",
    isDisabled: n,
    onPress: o,
    onPressStart: a,
    onPressEnd: s,
    onPressUp: l,
    onPressChange: c,
    // @ts-ignore - undocumented
    preventFocusOnPress: u,
    // @ts-ignore - undocumented
    allowFocusWhenDisabled: d,
    onClick: f,
    href: m,
    target: g,
    rel: x,
    type: h = "button",
    allowTextSelectionOnPress: $
  } = e, E;
  r === "button" ? E = {
    type: h,
    disabled: n
  } : E = {
    role: "button",
    href: r === "a" && !n ? m : void 0,
    target: r === "a" ? g : void 0,
    type: r === "input" ? h : void 0,
    disabled: r === "input" ? n : void 0,
    "aria-disabled": !n || r === "input" ? void 0 : n,
    rel: r === "a" ? x : void 0
  };
  let { pressProps: N, isPressed: C } = Xd({
    onClick: f,
    onPressStart: a,
    onPressEnd: s,
    onPressUp: l,
    onPressChange: c,
    onPress: o,
    isDisabled: n,
    preventFocusOnPress: u,
    allowTextSelectionOnPress: $,
    ref: t
  }), { focusableProps: O } = uu(e, t);
  d && (O.tabIndex = n ? -1 : O.tabIndex);
  let R = Gt(
    O,
    N,
    es(e, { labelable: !0 })
  );
  return {
    isPressed: C,
    // Used to indicate press state for visual
    buttonProps: Gt(E, R, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      "aria-current": e["aria-current"]
    })
  };
}
var Zf = () => import("./index-SfZMAM5z.mjs").then((e) => e.default), Ni = (e) => {
  const { ripples: t = [], motionProps: r, color: n = "currentColor", style: o, onClear: a } = e;
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: t.map((s) => {
    const l = Sc(0.01 * s.size, 0.2, s.size > 100 ? 0.75 : 0.5);
    return /* @__PURE__ */ i.jsx(xn, { features: Zf, children: /* @__PURE__ */ i.jsx(Sa, { mode: "popLayout", children: /* @__PURE__ */ i.jsx(
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
          top: s.y,
          left: s.x,
          width: `${s.size}px`,
          height: `${s.size}px`,
          ...o
        },
        transition: { duration: l },
        onAnimationComplete: () => {
          a(s.key);
        },
        ...r
      }
    ) }) }, s.key);
  }) });
};
Ni.displayName = "HeroUI.Ripple";
var Jf = Ni;
function Qf(e = {}) {
  const [t, r] = te([]), n = pe((a) => {
    const s = a.target, l = Math.max(s.clientWidth, s.clientHeight);
    r((c) => [
      ...c,
      {
        key: Pc(c.length.toString()),
        size: l,
        x: a.x - l / 2,
        y: a.y - l / 2
      }
    ]);
  }, []), o = pe((a) => {
    r((s) => s.filter((l) => l.key !== a));
  }, []);
  return { ripples: t, onClear: o, onPress: n, ...e };
}
function ep(e) {
  var t, r, n, o, a, s, l, c, u;
  const d = Xf(), f = Xn(), m = !!d, {
    ref: g,
    as: x,
    children: h,
    startContent: $,
    endContent: E,
    autoFocus: N,
    className: C,
    spinner: O,
    isLoading: R = !1,
    disableRipple: S = !1,
    fullWidth: D = (t = d == null ? void 0 : d.fullWidth) != null ? t : !1,
    radius: A = d == null ? void 0 : d.radius,
    size: L = (r = d == null ? void 0 : d.size) != null ? r : "md",
    color: P = (n = d == null ? void 0 : d.color) != null ? n : "default",
    variant: b = (o = d == null ? void 0 : d.variant) != null ? o : "solid",
    disableAnimation: k = (s = (a = d == null ? void 0 : d.disableAnimation) != null ? a : f == null ? void 0 : f.disableAnimation) != null ? s : !1,
    isDisabled: j = (l = d == null ? void 0 : d.isDisabled) != null ? l : !1,
    isIconOnly: y = (c = d == null ? void 0 : d.isIconOnly) != null ? c : !1,
    spinnerPlacement: I = "start",
    onPress: p,
    onClick: w,
    ...T
  } = e, M = x || "button", U = typeof M == "string", K = Ua(g), W = (u = S || (f == null ? void 0 : f.disableRipple)) != null ? u : k, { isFocusVisible: ne, isFocused: B, focusProps: H } = Ns({
    autoFocus: N
  }), q = j || R, z = _e(
    () => Vf({
      size: L,
      color: P,
      variant: b,
      radius: A,
      fullWidth: D,
      isDisabled: q,
      isInGroup: m,
      disableAnimation: k,
      isIconOnly: y,
      className: C
    }),
    [
      L,
      P,
      b,
      A,
      D,
      q,
      m,
      y,
      k,
      C
    ]
  ), { onPress: X, onClear: xe, ripples: fe } = Qf(), Ue = pe(
    (Fe) => {
      W || q || k || K.current && X(Fe);
    },
    [W, q, k, K, X]
  ), { buttonProps: He, isPressed: Se } = ki(
    {
      elementType: x,
      isDisabled: q,
      onPress: Xa(p, Ue),
      onClick: w,
      ...T
    },
    K
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
        H,
        Ee,
        Mo(T, {
          enabled: U
        }),
        Mo(Fe)
      ),
      className: z
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
      H,
      Ee,
      T,
      z
    ]
  ), tt = (Fe) => xr(Fe) ? Kn(Fe, {
    // @ts-ignore
    "aria-hidden": !0,
    focusable: !1
  }) : null, We = tt($), ze = tt(E), dt = _e(() => ({
    sm: "sm",
    md: "sm",
    lg: "md"
  })[L], [L]), ut = pe(
    () => ({ ripples: fe, onClear: xe }),
    [fe, xe]
  );
  return {
    Component: M,
    children: h,
    domRef: K,
    spinner: O,
    styles: z,
    startContent: We,
    endContent: ze,
    isLoading: R,
    spinnerPlacement: I,
    spinnerSize: dt,
    disableRipple: W,
    getButtonProps: et,
    getRippleProps: ut,
    isIconOnly: y
  };
}
function tp(e) {
  var t, r;
  const [n, o] = Gf(e, ha.variantKeys), a = Xn(), s = (r = (t = e == null ? void 0 : e.variant) != null ? t : a == null ? void 0 : a.spinnerVariant) != null ? r : "default", { children: l, className: c, classNames: u, label: d, ...f } = n, m = _e(() => ha({ ...o }), [qa(o)]), g = Xt(u == null ? void 0 : u.base, c), x = d || l, h = _e(() => x && typeof x == "string" ? x : f["aria-label"] ? "" : "Loading", [l, x, f["aria-label"]]), $ = pe(
    () => ({
      "aria-label": h,
      className: m.base({
        class: g
      }),
      ...f
    }),
    [h, m, g, f]
  );
  return { label: x, slots: m, classNames: u, variant: s, getSpinnerProps: $ };
}
var Ei = Bf((e, t) => {
  const { slots: r, classNames: n, label: o, variant: a, getSpinnerProps: s } = tp({ ...e });
  return a === "wave" || a === "dots" ? /* @__PURE__ */ i.jsxs("div", { ref: t, ...s(), children: [
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
  ] }) : a === "simple" ? /* @__PURE__ */ i.jsxs("div", { ref: t, ...s(), children: [
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
  ] }) : a === "spinner" ? /* @__PURE__ */ i.jsxs("div", { ref: t, ...s(), children: [
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
  ] }) : /* @__PURE__ */ i.jsxs("div", { ref: t, ...s(), children: [
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
    spinnerSize: a,
    spinner: s = /* @__PURE__ */ i.jsx(rp, { color: "current", size: a }),
    spinnerPlacement: l,
    startContent: c,
    endContent: u,
    isLoading: d,
    disableRipple: f,
    getButtonProps: m,
    getRippleProps: g,
    isIconOnly: x
  } = ep({ ...e, ref: t });
  return /* @__PURE__ */ i.jsxs(r, { ref: n, ...m(), children: [
    c,
    d && l === "start" && s,
    d && x ? null : o,
    d && l === "end" && s,
    u,
    !f && /* @__PURE__ */ i.jsx(Jf, { ...g() })
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
  ]), a = pe(() => {
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
    toggle: a
  };
}
var xt = [];
function ap(e, t) {
  const {
    disableOutsideEvents: r = !0,
    isDismissable: n = !1,
    isKeyboardDismissDisabled: o = !1,
    isOpen: a,
    onClose: s,
    shouldCloseOnBlur: l,
    shouldCloseOnInteractOutside: c
  } = e;
  ue(() => (a && xt.push(t), () => {
    const h = xt.indexOf(t);
    h >= 0 && xt.splice(h, 1);
  }), [a, t]);
  const u = () => {
    xt[xt.length - 1] === t && s && s();
  }, d = (h) => {
    (!c || c(h.target)) && (xt[xt.length - 1] === t && r && (h.stopPropagation(), h.preventDefault()), h.pointerType !== "touch" && u());
  }, f = (h) => {
    h.pointerType === "touch" && (!c || c(h.target)) && (xt[xt.length - 1] === t && r && (h.stopPropagation(), h.preventDefault()), u());
  }, m = (h) => {
    h.key === "Escape" && !o && !h.nativeEvent.isComposing && (h.stopPropagation(), h.preventDefault(), u());
  };
  mu({
    isDisabled: !(n && a),
    onInteractOutside: n && a ? f : void 0,
    onInteractOutsideStart: d,
    ref: t
  });
  const { focusWithinProps: g } = io({
    isDisabled: !l,
    onBlurWithin: (h) => {
      !h.relatedTarget || xu(h.relatedTarget) || (!c || c(h.relatedTarget)) && u();
    }
  }), x = (h) => {
    h.target === h.currentTarget && h.preventDefault();
  };
  return {
    overlayProps: {
      onKeyDown: m,
      ...g
    },
    underlayProps: {
      onPointerDown: x
    }
  };
}
function sp(e, t) {
  const {
    groupRef: r,
    triggerRef: n,
    popoverRef: o,
    showArrow: a,
    offset: s = 7,
    crossOffset: l = 0,
    scrollRef: c,
    shouldFlip: u,
    boundaryElement: d,
    isDismissable: f = !0,
    shouldCloseOnBlur: m = !0,
    shouldCloseOnScroll: g = !0,
    placement: x = "top",
    containerPadding: h,
    shouldCloseOnInteractOutside: $,
    isNonModal: E,
    isKeyboardDismissDisabled: N,
    updatePositionDeps: C = [],
    ...O
  } = e, R = E ?? !0, S = O.trigger === "SubmenuTrigger", { overlayProps: D, underlayProps: A } = ap(
    {
      isOpen: t.isOpen,
      onClose: t.close,
      shouldCloseOnBlur: m,
      isDismissable: f || S,
      isKeyboardDismissDisabled: N,
      shouldCloseOnInteractOutside: $ || ((j) => {
        var y;
        return !((y = n.current) != null && y.contains(j));
      }),
      disableOutsideEvents: !R
    },
    o
  ), {
    overlayProps: L,
    arrowProps: P,
    placement: b,
    updatePosition: k
  } = Vd({
    ...O,
    shouldFlip: u,
    crossOffset: l,
    targetRef: n,
    overlayRef: o,
    isOpen: t.isOpen,
    scrollRef: c,
    boundaryElement: d,
    containerPadding: h,
    placement: Wf(x),
    offset: a ? s + 3 : s,
    onClose: R && !S && g ? t.close : () => {
    }
  });
  return qf(() => {
    C.length && k();
  }, C), ue(() => {
    var j, y;
    if (t.isOpen && o.current)
      return R ? Yf((j = r == null ? void 0 : r.current) != null ? j : o.current) : Uf([(y = r == null ? void 0 : r.current) != null ? y : o.current]);
  }, [R, t.isOpen, o, r]), {
    popoverProps: Rt(D, L),
    arrowProps: P,
    underlayProps: A,
    placement: b
  };
}
var ip = "top";
function lp(e) {
  var t, r, n;
  const o = Xn(), [a, s] = Ou(e, va.variantKeys), {
    as: l,
    ref: c,
    children: u,
    state: d,
    triggerRef: f,
    scrollRef: m,
    defaultOpen: g,
    onOpenChange: x,
    isOpen: h,
    isNonModal: $ = !0,
    shouldFlip: E = !0,
    containerPadding: N = 12,
    shouldBlockScroll: C = !1,
    isDismissable: O = !0,
    shouldCloseOnBlur: R,
    portalContainer: S,
    updatePositionDeps: D,
    dialogProps: A,
    placement: L = ip,
    triggerType: P = "dialog",
    showArrow: b = !1,
    offset: k = 7,
    crossOffset: j = 0,
    boundaryElement: y,
    isKeyboardDismissDisabled: I,
    shouldCloseOnInteractOutside: p,
    shouldCloseOnScroll: w,
    motionProps: T,
    className: M,
    classNames: U,
    onClose: K,
    ...W
  } = a, ne = l || "div", B = Ua(c), H = re(null), q = re(!1), z = f || H, X = (r = (t = e.disableAnimation) != null ? t : o == null ? void 0 : o.disableAnimation) != null ? r : !1, xe = op({
    isOpen: h,
    defaultOpen: g,
    onOpenChange: (F) => {
      x == null || x(F), F || K == null || K();
    }
  }), fe = d || xe, {
    popoverProps: Ue,
    underlayProps: He,
    placement: Se
  } = sp(
    {
      triggerRef: z,
      isNonModal: $,
      popoverRef: B,
      placement: L,
      offset: k,
      scrollRef: m,
      isDismissable: O,
      shouldCloseOnBlur: R,
      boundaryElement: y,
      crossOffset: j,
      shouldFlip: E,
      containerPadding: N,
      updatePositionDeps: D,
      isKeyboardDismissDisabled: I,
      shouldCloseOnScroll: w,
      shouldCloseOnInteractOutside: p
    },
    fe
  ), Ye = _e(() => Se ? Kf(Se, L) ? Se : L : null, [Se, L]), { triggerProps: Ee } = ku({ type: P }, fe, z), { isFocusVisible: et, isFocused: tt, focusProps: We } = Ns(), ze = _e(
    () => va({
      ...s
    }),
    [qa(s)]
  ), dt = Xt(U == null ? void 0 : U.base, M);
  Eu({
    isDisabled: !(C && fe.isOpen)
  });
  const ut = (F = {}) => ({
    ref: B,
    ...Rt(Ue, W, F),
    style: Rt(Ue.style, W.style, F.style)
  }), Fe = (F = {}) => ({
    // `ref` and `dialogProps` from `useDialog` are passed from props
    // if we use `useDialog` here, dialogRef won't be focused on mount
    "data-slot": "base",
    "data-open": ot(fe.isOpen),
    "data-focus": ot(tt),
    "data-arrow": ot(b),
    "data-focus-visible": ot(et),
    "data-placement": Se ? wa(Se, L) : void 0,
    ...Rt(We, A, F),
    className: ze.base({ class: Xt(dt) }),
    style: {
      // this prevent the dialog to have a default outline
      outline: "none"
    }
  }), Nt = pe(
    (F = {}) => ({
      "data-slot": "content",
      "data-open": ot(fe.isOpen),
      "data-arrow": ot(b),
      "data-placement": Se ? wa(Se, L) : void 0,
      className: ze.content({ class: Xt(U == null ? void 0 : U.content, F.className) })
    }),
    [ze, fe.isOpen, b, Ye, L, U, Se]
  ), bt = pe(
    (F) => {
      var oe;
      let Y;
      return F.pointerType === "touch" && ((e == null ? void 0 : e.backdrop) === "blur" || (e == null ? void 0 : e.backdrop) === "opaque") ? Y = setTimeout(() => {
        q.current = !0;
      }, 100) : q.current = !0, (oe = Ee.onPress) == null || oe.call(Ee, F), () => {
        clearTimeout(Y);
      };
    },
    [Ee == null ? void 0 : Ee.onPress]
  ), V = pe(
    (F = {}, oe = null) => {
      const { isDisabled: Y, ...ve } = F;
      return {
        "data-slot": "trigger",
        ...Rt({ "aria-haspopup": "dialog" }, Ee, ve),
        onPress: bt,
        isDisabled: Y,
        className: ze.trigger({
          class: Xt(U == null ? void 0 : U.trigger, F.className),
          // apply isDisabled class names to make the trigger child disabled
          // e.g. for elements like div or HeroUI elements that don't have `isDisabled` prop
          isTriggerDisabled: Y
        }),
        ref: Rc(oe, z)
      };
    },
    [fe, Ee, bt, z]
  ), ee = pe(
    (F = {}) => ({
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
      ...F
    }),
    [ze, fe.isOpen, U, He]
  );
  return {
    state: fe,
    Component: ne,
    children: u,
    classNames: U,
    showArrow: b,
    triggerRef: z,
    placement: Ye,
    isNonModal: $,
    popoverRef: B,
    portalContainer: S,
    isOpen: fe.isOpen,
    onClose: fe.close,
    disableAnimation: X,
    shouldBlockScroll: C,
    backdrop: (n = e.backdrop) != null ? n : "transparent",
    motionProps: T,
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
      let a = setTimeout(() => {
        document.activeElement === t.current && (o.current = !0, t.current && (t.current.blur(), Hr(t.current)), o.current = !1);
      }, 500);
      return () => {
        clearTimeout(a);
      };
    }
  }, [
    t
  ]), Iu(), {
    dialogProps: {
      ...es(e, {
        labelable: !0
      }),
      role: r,
      tabIndex: -1,
      "aria-labelledby": e["aria-labelledby"] || n,
      // Prevent blur events from reaching useOverlay, which may cause
      // popovers to close. Since focus is contained within the dialog,
      // we don't want this to occur due to the above useEffect.
      onBlur: (a) => {
        o.current && a.stopPropagation();
      }
    },
    titleProps: {
      id: n
    }
  };
}
var [dp, Ti] = qn({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
}), $a = () => import("./index-SfZMAM5z.mjs").then((e) => e.default), Pi = (e) => {
  const { as: t, children: r, className: n, ...o } = e, {
    Component: a,
    placement: s,
    backdrop: l,
    motionProps: c,
    disableAnimation: u,
    getPopoverProps: d,
    getDialogProps: f,
    getBackdropProps: m,
    getContentProps: g,
    isNonModal: x,
    onClose: h
  } = Ti(), $ = re(null), { dialogProps: E, titleProps: N } = cp({}, $), C = f({
    ref: $,
    ...E,
    ...o
  }), O = t || a || "div", R = /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    !x && /* @__PURE__ */ i.jsx(ca, { onDismiss: h }),
    /* @__PURE__ */ i.jsx(O, { ...C, children: /* @__PURE__ */ i.jsx("div", { ...g({ className: n }), children: typeof r == "function" ? r(N) : r }) }),
    /* @__PURE__ */ i.jsx(ca, { onDismiss: h })
  ] }), S = _e(() => l === "transparent" ? null : u ? /* @__PURE__ */ i.jsx("div", { ...m() }) : /* @__PURE__ */ i.jsx(xn, { features: $a, children: /* @__PURE__ */ i.jsx(
    yn.div,
    {
      animate: "enter",
      exit: "exit",
      initial: "exit",
      variants: ya.fade,
      ...m()
    }
  ) }), [l, u, m]), D = s ? Hf(s === "center" ? "top" : s) : void 0, A = /* @__PURE__ */ i.jsx(i.Fragment, { children: u ? R : /* @__PURE__ */ i.jsx(xn, { features: $a, children: /* @__PURE__ */ i.jsx(
    yn.div,
    {
      animate: "enter",
      exit: "exit",
      initial: "initial",
      style: D,
      variants: ya.scaleSpringOpacity,
      ...c,
      children: R
    }
  ) }) });
  return /* @__PURE__ */ i.jsxs("div", { ...d(), children: [
    S,
    A
  ] });
};
Pi.displayName = "HeroUI.PopoverContent";
var up = Pi, Si = (e) => {
  var t;
  const { triggerRef: r, getTriggerProps: n } = Ti(), { children: o, ...a } = e, s = _e(() => typeof o == "string" ? /* @__PURE__ */ i.jsx("p", { children: o }) : wr.only(o), [o]), l = (t = s.props.ref) != null ? t : s.ref, { onPress: c, isDisabled: u, ...d } = _e(() => n(Rt(a, s.props), l), [n, s.props, a, l]), [, f] = Lc(o, np), { buttonProps: m } = ki({ onPress: c, isDisabled: u }, r), g = _e(() => (f == null ? void 0 : f[0]) !== void 0, [f]);
  return g || delete d.preventFocusOnPress, Kn(
    s,
    Rt(d, g ? { onPress: c, isDisabled: u } : m)
  );
};
Si.displayName = "HeroUI.PopoverTrigger";
var fp = Si, Ci = ii((e, t) => {
  const { children: r, ...n } = e, o = lp({ ...n, ref: t }), [a, s] = wr.toArray(r), l = /* @__PURE__ */ i.jsx(Au, { portalContainer: o.portalContainer, children: s });
  return /* @__PURE__ */ i.jsxs(dp, { value: o, children: [
    a,
    o.disableAnimation && o.isOpen ? l : /* @__PURE__ */ i.jsx(Sa, { children: o.isOpen ? l : null })
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
  color: a = "light",
  customColor: s,
  rounded: l = "lg",
  shadow: c = "md",
  className: u,
  isOpen: d,
  onOpenChange: f,
  backdrop: m = "transparent",
  disableAnimation: g = !1,
  offset: x = 7,
  isDismissable: h = !0
}) => {
  const $ = () => {
    switch (a) {
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
  }, E = () => a === "custom" && s ? { backgroundColor: s, color: "#ffffff" } : {
    info: "bg-blue-500 text-white border-blue-500",
    neutral: "bg-gray-500 text-white border-gray-500",
    light: "bg-white text-gray-900 border-gray-200"
  }[a] || "", N = () => {
    switch (m) {
      case "blur":
        return "blur";
      case "dark":
        return "opaque";
      case "transparent":
      default:
        return "transparent";
    }
  }, C = E(), O = $(), R = N(), S = {
    placement: r,
    showArrow: n,
    color: O,
    radius: l,
    shadow: c,
    isOpen: d,
    onOpenChange: f,
    backdrop: R,
    disableAnimation: g,
    offset: x,
    isDismissable: h
  };
  return Object.keys(S).forEach((D) => {
    S[D] === void 0 && delete S[D];
  }), /* @__PURE__ */ i.jsxs(pp, { ...S, children: [
    /* @__PURE__ */ i.jsx(fp, { children: t }),
    /* @__PURE__ */ i.jsx(
      up,
      {
        className: _(
          gp({ variant: o, color: a, shadow: c, rounded: l }),
          u,
          C,
          // Apply custom color styles when needed
          a === "custom" && s ? "border-0" : ""
        ),
        style: a === "custom" && s ? { backgroundColor: s, color: "#ffffff" } : void 0,
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
}), bp = Ae(
  ({
    className: e,
    variant: t = "default",
    size: r = "md",
    items: n,
    separator: o = /* @__PURE__ */ i.jsx(de, { icon: "mdi:slash-forward", className: "h-4 w-4 flex-shrink-0" }),
    activeLastItem: a = !0,
    ...s
  }, l) => /* @__PURE__ */ i.jsx(
    "nav",
    {
      ref: l,
      className: _(mp({ variant: t, size: r }), e),
      "aria-label": "Breadcrumb",
      ...s,
      children: /* @__PURE__ */ i.jsx("ol", { className: "flex flex-wrap items-center gap-1.5", children: n.map((c, u) => {
        const d = u === n.length - 1, f = d && a;
        return /* @__PURE__ */ i.jsxs(
          "li",
          {
            className: _(
              "flex items-center gap-1.5",
              f && "text-primary font-medium"
            ),
            children: [
              c.icon && /* @__PURE__ */ i.jsx(
                de,
                {
                  icon: c.icon,
                  className: _(
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
                  className: _(
                    "transition-colors duration-200",
                    "hover:text-primary hover:underline focus:outline-none",
                    "focus-visible:text-primary focus-visible:underline",
                    "active:text-primary-600"
                  ),
                  children: /* @__PURE__ */ i.jsx("span", { className: "truncate max-w-[200px] inline-block align-bottom", children: c.label })
                }
              ) : /* @__PURE__ */ i.jsx("span", { className: _(
                "truncate max-w-[200px] inline-block",
                f && "text-primary"
              ), children: c.label }),
              !d && /* @__PURE__ */ i.jsx("span", { className: _(
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
    header: t.header[e],
    row: t.row[e],
    border: t.border[e],
    stripe: t.stripe[e]
  };
}, hp = ({
  schema: e,
  variant: t = "primary"
}) => {
  const r = [
    {
      name: "no",
      label: "No.",
      accessorKey: "no",
      type: "number",
      width: 80
    },
    ...e
  ], n = Ri(t);
  return /* @__PURE__ */ i.jsx("div", { className: "bg-white rounded-md", children: /* @__PURE__ */ i.jsx("div", { className: "p-0 w-full overflow-auto rounded-t-md [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full", children: /* @__PURE__ */ i.jsxs("table", { className: "w-full border-spacing-0 border-separate min-w-full", children: [
    /* @__PURE__ */ i.jsx(
      "thead",
      {
        className: _(
          "border-2 sticky top-0 z-10 rounded-t-md",
          n.border
        ),
        children: /* @__PURE__ */ i.jsx("tr", { children: r.map((o, a) => /* @__PURE__ */ i.jsx(
          "th",
          {
            className: _(
              "text-sm text-wrap border-y p-4 text-left",
              n.header,
              {
                "rounded-tl-md": a === 0,
                "rounded-tr-md": a === r.length - 1
              }
            ),
            style: {
              width: typeof o.width == "number" ? `${o.width}px` : o.width,
              minWidth: typeof o.width == "number" ? `${o.width}px` : o.width
            },
            children: o.label
          },
          a
        )) })
      }
    ),
    /* @__PURE__ */ i.jsx("tbody", { children: [...Array(5)].map((o, a) => /* @__PURE__ */ i.jsx(
      "tr",
      {
        className: _("p-3", {
          [n.stripe]: a % 2 !== 0,
          "bg-white": a % 2 === 0
        }),
        children: r.map((s, l) => /* @__PURE__ */ i.jsx(
          "td",
          {
            className: "text-left text-nowrap text-sm p-4",
            style: {
              width: typeof s.width == "number" ? `${s.width}px` : s.width,
              minWidth: typeof s.width == "number" ? `${s.width}px` : s.width
            },
            children: /* @__PURE__ */ i.jsx(sc, { className: "h-10 w-full rounded-md" })
          },
          `${a}-${l}`
        ))
      },
      a
    )) })
  ] }) }) });
}, Zp = ({
  schema: e,
  data: t,
  className: r,
  headerClassName: n,
  rowClassName: o,
  cellClassName: a,
  emptyState: s,
  isLoading: l,
  loadingState: c,
  showIndex: u = !1,
  onPageChange: d,
  onPageSizeChange: f,
  onSortChange: m,
  onRowClick: g,
  showPagination: x = !1,
  variant: h = "primary",
  meta: $ = {
    current_page: 1,
    total_page: 1,
    total_data: 0,
    limit_number: 10
  }
}) => {
  const [E, N] = te(() => {
    const D = e.find((A) => A.sortable && A.sort);
    return D ? [
      {
        id: D.accessorKey.toString(),
        desc: D.sort === "desc"
      }
    ] : [];
  }), C = ie.useMemo(() => {
    const D = e.map((A) => ({
      accessorKey: A.accessorKey,
      header: A.label,
      enableSorting: !!A.sortable,
      cell: A.render ? ({ row: L }) => {
        var P;
        return (P = A.render) == null ? void 0 : P.call(A, L.original[A.accessorKey], L.original, L.index);
      } : ({ row: L }) => L.original[A.accessorKey] || "-",
      meta: {
        align: A.align || "left",
        width: A.width
      }
    }));
    return u ? [
      {
        accessorKey: "no",
        header: "No.",
        enableSorting: !1,
        cell: ({ row: A }) => ($.current_page - 1) * $.limit_number + A.index + 1,
        meta: {
          align: "left",
          width: 80
        }
      },
      ...D
    ] : D;
  }, [e, u, $]), O = Ki({
    data: t,
    columns: C,
    state: {
      sorting: E
    },
    onSortingChange: (D) => {
      const A = typeof D == "function" ? D(E) : D;
      N(A), A.length > 0 ? m == null || m(A[0].desc ? "desc" : "asc", A[0].id) : m == null || m("", "");
    },
    getCoreRowModel: qi(),
    getSortedRowModel: Yi(),
    getPaginationRowModel: Ui(),
    manualPagination: !0,
    pageCount: $.total_page
  }), R = Ri(h);
  if (l)
    return c || /* @__PURE__ */ i.jsx(hp, { schema: e, variant: h });
  const S = (D, A, L) => {
    const P = D.target;
    P.tagName === "BUTTON" || P.tagName === "A" || P.tagName === "INPUT" || P.tagName === "SELECT" || P.closest("button") !== null || P.closest("a") !== null || P.closest("input") !== null || P.closest("select") !== null || g == null || g(A, L);
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "bg-white rounded-md", children: [
    /* @__PURE__ */ i.jsx("div", { className: "p-0 w-full overflow-auto rounded-t-md [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full", children: /* @__PURE__ */ i.jsxs(
      "table",
      {
        className: _(
          "w-full border-spacing-0 border-separate min-w-full",
          r
        ),
        children: [
          /* @__PURE__ */ i.jsx(
            "thead",
            {
              className: _(
                "border-2 sticky top-0 z-10 rounded-t-md",
                R.border
              ),
              children: O.getHeaderGroups().map((D) => /* @__PURE__ */ i.jsx("tr", { children: D.headers.map(
                (A, L) => {
                  const P = A.column.columnDef.meta;
                  return /* @__PURE__ */ i.jsx(
                    "th",
                    {
                      className: _(
                        "text-sm text-wrap border-y p-4",
                        R.header,
                        {
                          "cursor-pointer": A.column.getCanSort(),
                          "rounded-tl-md": L === 0,
                          "rounded-tr-md": L === D.headers.length - 1,
                          "text-left": (P == null ? void 0 : P.align) === "left",
                          "text-center": (P == null ? void 0 : P.align) === "center",
                          "text-right": (P == null ? void 0 : P.align) === "right"
                        },
                        n
                      ),
                      style: {
                        width: typeof (P == null ? void 0 : P.width) == "number" ? `${P.width}px` : P == null ? void 0 : P.width,
                        minWidth: typeof (P == null ? void 0 : P.width) == "number" ? `${P.width}px` : P == null ? void 0 : P.width
                      },
                      onClick: A.column.getCanSort() ? A.column.getToggleSortingHandler() : void 0,
                      children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ i.jsx(
                          "span",
                          {
                            className: _({
                              "font-semibold": L === 0
                            }),
                            children: xo(
                              A.column.columnDef.header,
                              A.getContext()
                            )
                          }
                        ),
                        A.column.getCanSort() && /* @__PURE__ */ i.jsx(
                          de,
                          {
                            icon: A.column.getIsSorted() ? A.column.getIsSorted() === "desc" ? "mdi:keyboard-arrow-up" : "mdi:keyboard-arrow-down" : "mdi:unfold-more-horizontal",
                            className: _("h-4 w-4", {
                              "text-white": h !== "ghost",
                              "text-gray-700": h === "ghost"
                            })
                          }
                        )
                      ] })
                    },
                    A.id
                  );
                }
              ) }, D.id))
            }
          ),
          /* @__PURE__ */ i.jsx("tbody", { children: O.getRowModel().rows.length === 0 ? /* @__PURE__ */ i.jsx("tr", { children: /* @__PURE__ */ i.jsx(
            "td",
            {
              colSpan: O.getAllColumns().length,
              className: _(
                "text-center border h-full w-full rounded-b-md"
              ),
              children: s || /* @__PURE__ */ i.jsxs("div", { className: "flex mx-auto w-full text-center justify-center gap-3 items-center", children: [
                /* @__PURE__ */ i.jsx("p", { children: "Data Not Found" }),
                /* @__PURE__ */ i.jsx(de, { icon: "mdi:face-frown-open", size: 34 })
              ] })
            }
          ) }) : O.getRowModel().rows.map((D, A) => /* @__PURE__ */ i.jsx(
            "tr",
            {
              className: _(
                "p-3",
                R.row,
                {
                  [R.stripe]: A % 2 !== 0,
                  "bg-white": A % 2 === 0,
                  "cursor-pointer": g
                },
                o
              ),
              onClick: (L) => S(L, D.original, A),
              children: D.getVisibleCells().map((L) => {
                const P = L.column.columnDef.meta;
                return /* @__PURE__ */ i.jsx(
                  "td",
                  {
                    className: _(
                      "px-4 py-3 text-sm text-gray-900",
                      {
                        "text-left": (P == null ? void 0 : P.align) === "left",
                        "text-center": (P == null ? void 0 : P.align) === "center",
                        "text-right": (P == null ? void 0 : P.align) === "right"
                      },
                      a
                    ),
                    style: {
                      width: typeof (P == null ? void 0 : P.width) == "number" ? `${P.width}px` : P == null ? void 0 : P.width,
                      minWidth: typeof (P == null ? void 0 : P.width) == "number" ? `${P.width}px` : P == null ? void 0 : P.width
                    },
                    children: xo(
                      L.column.columnDef.cell,
                      L.getContext()
                    )
                  },
                  L.id
                );
              })
            },
            D.id
          )) })
        ]
      }
    ) }),
    !!t.length && x && /* @__PURE__ */ i.jsx("div", { className: "p-4 bg-white rounded-b-md", children: /* @__PURE__ */ i.jsx(
      rc,
      {
        currentPage: $.current_page,
        totalPages: $.total_page,
        totalData: $.total_data,
        onPageChange: d || (() => {
        }),
        perPage: $.limit_number,
        onPerPageChange: f || (() => {
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
}, Li = Ae(
  ({
    className: e,
    variant: t = "default",
    rounded: r = "lg",
    title: n,
    description: o,
    onClose: a,
    icon: s,
    showIcon: l = !0,
    showClose: c = !0,
    ...u
  }, d) => {
    const m = s || (l ? {
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
        className: _(
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
          m && /* @__PURE__ */ i.jsx(
            de,
            {
              icon: m,
              className: _(
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
                className: _("text-sm font-medium leading-5", {
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
                className: _(n ? "mt-1" : "", "text-sm leading-5", {
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
          c && a && /* @__PURE__ */ i.jsx(
            Ke,
            {
              variant: "ghost",
              size: "sm",
              onClick: a,
              className: _(
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
              children: /* @__PURE__ */ i.jsx(de, { icon: "mdi:close", className: _(o ? "h-5 w-5" : "h-4 w-4") })
            }
          )
        ]
      }
    );
  }
);
Li.displayName = "Toast";
const Hn = Pa(void 0), xp = {
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
    return r((m) => [...m, f]), d > 0 && setTimeout(() => {
      n(c);
    }, d), c;
  }, [n]), a = t.reduce((l, c) => (l[c.position] || (l[c.position] = []), l[c.position].push(c), l), {
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    "bottom-right": [],
    "top-center": [],
    "bottom-center": []
  }), s = Ge();
  return "body" in s ? /* @__PURE__ */ i.jsxs(Hn.Provider, { value: { showToast: o, removeToast: n }, children: [
    e,
    At(
      /* @__PURE__ */ i.jsx(i.Fragment, { children: Object.entries(a).map(([l, c]) => /* @__PURE__ */ i.jsx(
        "div",
        {
          className: _(
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
      s.body
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
}) => /* @__PURE__ */ i.jsxs(Yn, { className: _(
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
}, Mi = {
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
}, ka = {
  ...wp,
  ...Mi
}, Na = {
  image: "https://design-system-eaip.onrender.com/img/error.svg",
  message: "An unexpected error occurred. Our team is currently investigating the issue."
}, Ea = (e) => typeof e == "object" && e !== null && ("code" in e || "message" in e), eg = ({
  error: e,
  reload: t,
  children: r,
  className: n = "",
  variant: o,
  customImage: a,
  customMessage: s
}) => {
  if (!e && !o)
    return r ? /* @__PURE__ */ i.jsx(i.Fragment, { children: r }) : null;
  const c = (() => {
    if (o) {
      const f = $p[o];
      return Mi[f];
    }
    return Ea(e) && e.code && ka[e.code] ? ka[e.code] : Na;
  })(), u = a || c.image, d = s || (Ea(e) ? e.message : null) || c.message;
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
), Np = Ae(
  ({
    className: e,
    variant: t = "default",
    size: r = "md",
    rounded: n = "md",
    error: o = !1,
    errorText: a,
    helperText: s,
    label: l,
    bottomLabel: c,
    required: u = !1,
    showSubmitButton: d = !1,
    submitButtonLabel: f = "Submit",
    submitButtonVariant: m = "primary",
    length: g = 6,
    numericOnly: x = !0,
    onComplete: h,
    onChange: $,
    onSubmit: E,
    value: N,
    defaultValue: C = "",
    disabled: O = !1,
    autoFocus: R = !1,
    ...S
  }, D) => {
    const [A, L] = te(C || ""), P = re([]);
    ue(() => {
      N !== void 0 && L(N);
    }, [N]);
    const b = N !== void 0, k = b ? N : A, j = (K) => {
      b || L(K), $ == null || $(K), K.length === g && (h == null || h(K), d || E == null || E(K));
    }, y = (K) => (W) => {
      P.current[K] = W;
    }, I = (K) => {
      K.target.select();
    }, p = (K, W) => {
      var z;
      const ne = K.target.value;
      let B = "";
      if (ne.length >= 1)
        B = ne.slice(-1);
      else if (ne.length === 0) {
        const X = k.split("");
        X[W] = "", j(X.join(""));
        return;
      }
      if (x && !/^\d$/.test(B))
        return;
      const H = k.split("");
      for (; H.length <= W; )
        H.push("");
      H[W] = B;
      const q = H.join("");
      j(q), W < g - 1 && B && ((z = P.current[W + 1]) == null || z.focus());
    }, w = (K, W) => {
      var ne, B, H;
      if (K.key === "Backspace") {
        const q = k.split("");
        k[W] ? (K.preventDefault(), q[W] = "", j(q.join(""))) : W > 0 && (K.preventDefault(), q[W - 1] = "", j(q.join("")), (ne = P.current[W - 1]) == null || ne.focus());
      } else if (K.key === "Delete") {
        if (k[W]) {
          K.preventDefault();
          const q = k.split("");
          q[W] = "", j(q.join(""));
        }
      } else if (K.key === "ArrowLeft" && W > 0)
        K.preventDefault(), (B = P.current[W - 1]) == null || B.focus();
      else if (K.key === "ArrowRight" && W < g - 1)
        K.preventDefault(), (H = P.current[W + 1]) == null || H.focus();
      else if (!K.ctrlKey && !K.altKey && !K.metaKey && K.key.length === 1 && x && !/^\d$/.test(K.key)) {
        K.preventDefault();
        return;
      }
    }, T = (K) => {
      var q;
      K.preventDefault();
      const W = K.clipboardData.getData("text/plain").trim();
      if (x && !/^\d+$/.test(W))
        return;
      const B = W.slice(0, g).padEnd(k.length, "").slice(0, g);
      j(B);
      const H = B.length < g ? B.length : g - 1;
      (q = P.current[H]) == null || q.focus();
    }, M = () => {
      k.length === g && (E == null || E(k));
    }, U = k.split("").concat(Array(g - k.length).fill(""));
    return /* @__PURE__ */ i.jsxs("div", { ref: D, className: _("w-full", e), ...S, children: [
      l && /* @__PURE__ */ i.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
        l,
        u && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
        /* @__PURE__ */ i.jsx("div", { className: "flex items-center justify-center gap-2", children: Array.from({ length: g }).map((K, W) => /* @__PURE__ */ i.jsx(
          "input",
          {
            ref: y(W),
            type: x ? "tel" : "text",
            inputMode: x ? "numeric" : "text",
            maxLength: 1,
            value: U[W] || "",
            onChange: (ne) => p(ne, W),
            onKeyDown: (ne) => w(ne, W),
            onPaste: W === 0 ? T : void 0,
            onFocus: I,
            disabled: O,
            autoFocus: R && W === 0,
            className: _(
              kp({
                variant: o ? "error" : t,
                size: r,
                rounded: n
              })
            ),
            "aria-invalid": o
          },
          W
        )) }),
        o && a && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger self-start", children: a }),
        !o && s && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral self-start", children: s }),
        c && /* @__PURE__ */ i.jsx("p", { className: "text-sm text-neutral-600", children: c }),
        d && /* @__PURE__ */ i.jsx(
          Ke,
          {
            variant: m,
            disabled: k.length !== g || O,
            onClick: M,
            className: "mt-4",
            children: f
          }
        )
      ] })
    ] });
  }
);
Np.displayName = "InputOTP";
const ja = {
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
  children: a,
  ...s
}) => {
  const l = "top-0 right-0", c = typeof n == "number" && !isNaN(n);
  let u = "";
  c && (n > o ? u = `${o}+` : u = String(n));
  const d = c ? "px-2" : "", f = c ? "min-w-[20px]" : "w-2.5 h-2.5", m = c ? "h-5" : "h-2.5", g = typeof r == "string" && r in ja ? ja[r] : r;
  return /* @__PURE__ */ i.jsxs("div", { className: _("relative inline-block", t), children: [
    a || (e ? /* @__PURE__ */ i.jsx(de, { icon: e, color: g, size: 32, ...s }) : null),
    /* @__PURE__ */ i.jsx(
      "span",
      {
        className: _(
          "absolute flex items-center justify-center rounded-xl bg-[#FF4C4C] text-white text-[10px] font-semibold",
          l,
          d,
          f,
          m,
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
  widthImg: a = "w-auto",
  heightImg: s = "h-auto",
  className: l = ""
}) => {
  const c = jp[e], u = Ep[c], d = Dr(n, "w-full"), f = Dr(o, "h-full"), m = Dr(a, "w-auto"), g = Dr(s, "h-auto");
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
            className: `${m.className} ${g.className}`,
            style: { ...m.style, ...g.style }
          }
        ),
        r ? typeof r == "string" ? /* @__PURE__ */ i.jsx($r, { variant: "body1", className: "m-0", children: r }) : /* @__PURE__ */ i.jsx("div", { className: "m-0", children: r }) : /* @__PURE__ */ i.jsx($r, { variant: "body1", className: "m-0", children: u.message })
      ]
    }
  );
}, Tp = {
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
}, Pp = {
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
  width: a,
  height: s,
  className: l = ""
}) => {
  const c = Pp[e], u = Tp[c];
  return /* @__PURE__ */ i.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${l}`, children: [
    /* @__PURE__ */ i.jsx(
      "img",
      {
        src: o || u.image,
        alt: "Negative case illustration",
        className: "max-w-[300px] h-auto",
        style: { width: a, height: s }
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
}) => /* @__PURE__ */ i.jsx("div", { className: _("w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", t), children: e.map((r, n) => /* @__PURE__ */ i.jsx(yp, { ...r }, n)) });
export {
  Ap as Accordion,
  Cl as AutoComplete,
  Ip as Avatar,
  Op as Badge,
  tg as BadgeNotif,
  bp as Breadcrumbs,
  Ke as Button,
  Yn as Card,
  Ol as CheckBoxGroup,
  on as Checkbox,
  _p as Chip,
  Wl as DatePicker,
  Ul as Dialog,
  Xl as DialogActions,
  ql as DialogBody,
  Ba as DialogHeader,
  Yl as DialogTitle,
  Zl as Divider,
  eg as ErrorWrapper,
  Dp as FileUpload,
  de as Icon,
  Da as Input,
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
  ac as RadioGroup,
  Ga as Select,
  Ur as SelectItem,
  sc as Skeleton,
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
  Al as buttonVariants,
  Il as cardVariants,
  _ as cn,
  kp as inputOTPVariants,
  mc as toggleVariants,
  Qp as useToast
};
