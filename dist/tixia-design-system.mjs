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
  function a(l, c, f) {
    var d, p = {}, b = null, m = null;
    f !== void 0 && (b = "" + f), c.key !== void 0 && (b = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (d in c) n.call(c, d) && !s.hasOwnProperty(d) && (p[d] = c[d]);
    if (l && l.defaultProps) for (d in c = l.defaultProps, c) p[d] === void 0 && (p[d] = c[d]);
    return { $$typeof: t, type: l, key: b, ref: m, props: p, _owner: o.current };
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
    var e = ie, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), v = Symbol.iterator, h = "@@iterator";
    function k(y) {
      if (y === null || typeof y != "object")
        return null;
      var B = v && y[v] || y[h];
      return typeof B == "function" ? B : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function N(y) {
      {
        for (var B = arguments.length, Z = new Array(B > 1 ? B - 1 : 0), ae = 1; ae < B; ae++)
          Z[ae - 1] = arguments[ae];
        L("error", y, Z);
      }
    }
    function L(y, B, Z) {
      {
        var ae = E.ReactDebugCurrentFrame, we = ae.getStackAddendum();
        we !== "" && (B += "%s", Z = Z.concat([we]));
        var ke = Z.map(function(he) {
          return String(he);
        });
        ke.unshift("Warning: " + B), Function.prototype.apply.call(console[y], console, ke);
      }
    }
    var O = !1, R = !1, S = !1, K = !1, _ = !1, T;
    T = Symbol.for("react.module.reference");
    function M(y) {
      return !!(typeof y == "string" || typeof y == "function" || y === n || y === s || _ || y === o || y === f || y === d || K || y === m || O || R || S || typeof y == "object" && y !== null && (y.$$typeof === b || y.$$typeof === p || y.$$typeof === a || y.$$typeof === l || y.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      y.$$typeof === T || y.getModuleId !== void 0));
    }
    function u(y, B, Z) {
      var ae = y.displayName;
      if (ae)
        return ae;
      var we = B.displayName || B.name || "";
      return we !== "" ? Z + "(" + we + ")" : Z;
    }
    function $(y) {
      return y.displayName || "Context";
    }
    function j(y) {
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
        case f:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof y == "object")
        switch (y.$$typeof) {
          case l:
            var B = y;
            return $(B) + ".Consumer";
          case a:
            var Z = y;
            return $(Z._context) + ".Provider";
          case c:
            return u(y, y.render, "ForwardRef");
          case p:
            var ae = y.displayName || null;
            return ae !== null ? ae : j(y.type) || "Memo";
          case b: {
            var we = y, ke = we._payload, he = we._init;
            try {
              return j(he(ke));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, A = 0, g, x, P, C, U, W, H;
    function ne() {
    }
    ne.__reactDisabledLog = !0;
    function V() {
      {
        if (A === 0) {
          g = console.log, x = console.info, P = console.warn, C = console.error, U = console.group, W = console.groupCollapsed, H = console.groupEnd;
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
    function G() {
      {
        if (A--, A === 0) {
          var y = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, y, {
              value: g
            }),
            info: w({}, y, {
              value: x
            }),
            warn: w({}, y, {
              value: P
            }),
            error: w({}, y, {
              value: C
            }),
            group: w({}, y, {
              value: U
            }),
            groupCollapsed: w({}, y, {
              value: W
            }),
            groupEnd: w({}, y, {
              value: H
            })
          });
        }
        A < 0 && N("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = E.ReactCurrentDispatcher, D;
    function X(y, B, Z) {
      {
        if (D === void 0)
          try {
            throw Error();
          } catch (we) {
            var ae = we.stack.trim().match(/\n( *(at )?)/);
            D = ae && ae[1] || "";
          }
        return `
` + D + y;
      }
    }
    var xe = !1, fe;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new Ue();
    }
    function He(y, B) {
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
      ke = q.current, q.current = null, V();
      try {
        if (B) {
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
        xe = !1, q.current = ke, G(), Error.prepareStackTrace = we;
      }
      var Kt = y ? y.displayName || y.name : "", _t = Kt ? X(Kt) : "";
      return typeof y == "function" && fe.set(y, _t), _t;
    }
    function Se(y, B, Z) {
      return He(y, !1);
    }
    function Ye(y) {
      var B = y.prototype;
      return !!(B && B.isReactComponent);
    }
    function Ee(y, B, Z) {
      if (y == null)
        return "";
      if (typeof y == "function")
        return He(y, Ye(y));
      if (typeof y == "string")
        return X(y);
      switch (y) {
        case f:
          return X("Suspense");
        case d:
          return X("SuspenseList");
      }
      if (typeof y == "object")
        switch (y.$$typeof) {
          case c:
            return Se(y.render);
          case p:
            return Ee(y.type, B, Z);
          case b: {
            var ae = y, we = ae._payload, ke = ae._init;
            try {
              return Ee(ke(we), B, Z);
            } catch {
            }
          }
        }
      return "";
    }
    var et = Object.prototype.hasOwnProperty, tt = {}, We = E.ReactDebugCurrentFrame;
    function ze(y) {
      if (y) {
        var B = y._owner, Z = Ee(y.type, y._source, B ? B.type : null);
        We.setExtraStackFrame(Z);
      } else
        We.setExtraStackFrame(null);
    }
    function dt(y, B, Z, ae, we) {
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
              ge = y[he](B, he, ae, Z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
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
        var B = typeof Symbol == "function" && Symbol.toStringTag, Z = B && y[Symbol.toStringTag] || y.constructor.name || "Object";
        return Z;
      }
    }
    function bt(y) {
      try {
        return F(y), !1;
      } catch {
        return !0;
      }
    }
    function F(y) {
      return "" + y;
    }
    function ee(y) {
      if (bt(y))
        return N("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Nt(y)), F(y);
    }
    var z = E.ReactCurrentOwner, oe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Y, ve;
    function le(y) {
      if (et.call(y, "ref")) {
        var B = Object.getOwnPropertyDescriptor(y, "ref").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return y.ref !== void 0;
    }
    function je(y) {
      if (et.call(y, "key")) {
        var B = Object.getOwnPropertyDescriptor(y, "key").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return y.key !== void 0;
    }
    function ct(y, B) {
      typeof y.ref == "string" && z.current;
    }
    function Ot(y, B) {
      {
        var Z = function() {
          Y || (Y = !0, N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        Z.isReactWarning = !0, Object.defineProperty(y, "key", {
          get: Z,
          configurable: !0
        });
      }
    }
    function Mt(y, B) {
      {
        var Z = function() {
          ve || (ve = !0, N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        Z.isReactWarning = !0, Object.defineProperty(y, "ref", {
          get: Z,
          configurable: !0
        });
      }
    }
    var ht = function(y, B, Z, ae, we, ke, he) {
      var ge = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: y,
        key: B,
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
    function jr(y, B, Z, ae, we) {
      {
        var ke, he = {}, ge = null, qe = null;
        Z !== void 0 && (ee(Z), ge = "" + Z), je(B) && (ee(B.key), ge = "" + B.key), le(B) && (qe = B.ref, ct(B, we));
        for (ke in B)
          et.call(B, ke) && !oe.hasOwnProperty(ke) && (he[ke] = B[ke]);
        if (y && y.defaultProps) {
          var Re = y.defaultProps;
          for (ke in Re)
            he[ke] === void 0 && (he[ke] = Re[ke]);
        }
        if (ge || qe) {
          var Oe = typeof y == "function" ? y.displayName || y.name || "Unknown" : y;
          ge && Ot(he, Oe), qe && Mt(he, Oe);
        }
        return ht(y, ge, qe, we, ae, z.current, he);
      }
    }
    var ir = E.ReactCurrentOwner, Et = E.ReactDebugCurrentFrame;
    function Wt(y) {
      if (y) {
        var B = y._owner, Z = Ee(y.type, y._source, B ? B.type : null);
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
          var y = j(ir.current.type);
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
        var B = fo();
        if (!B) {
          var Z = typeof y == "string" ? y : y.displayName || y.name;
          Z && (B = `

Check the top-level render call using <` + Z + ">.");
        }
        return B;
      }
    }
    function go(y, B) {
      {
        if (!y._store || y._store.validated || y.key != null)
          return;
        y._store.validated = !0;
        var Z = Oi(B);
        if (po[Z])
          return;
        po[Z] = !0;
        var ae = "";
        y && y._owner && y._owner !== ir.current && (ae = " It was passed a child from " + j(y._owner.type) + "."), Wt(y), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Z, ae), Wt(null);
      }
    }
    function mo(y, B) {
      {
        if (typeof y != "object")
          return;
        if (Fe(y))
          for (var Z = 0; Z < y.length; Z++) {
            var ae = y[Z];
            en(ae) && go(ae, B);
          }
        else if (en(y))
          y._store && (y._store.validated = !0);
        else if (y) {
          var we = k(y);
          if (typeof we == "function" && we !== y.entries)
            for (var ke = we.call(y), he; !(he = ke.next()).done; )
              en(he.value) && go(he.value, B);
        }
      }
    }
    function Mi(y) {
      {
        var B = y.type;
        if (B == null || typeof B == "string")
          return;
        var Z;
        if (typeof B == "function")
          Z = B.propTypes;
        else if (typeof B == "object" && (B.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        B.$$typeof === p))
          Z = B.propTypes;
        else
          return;
        if (Z) {
          var ae = j(B);
          dt(Z, y.props, "prop", ae, y);
        } else if (B.PropTypes !== void 0 && !Qr) {
          Qr = !0;
          var we = j(B);
          N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", we || "Unknown");
        }
        typeof B.getDefaultProps == "function" && !B.getDefaultProps.isReactClassApproved && N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _i(y) {
      {
        for (var B = Object.keys(y.props), Z = 0; Z < B.length; Z++) {
          var ae = B[Z];
          if (ae !== "children" && ae !== "key") {
            Wt(y), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ae), Wt(null);
            break;
          }
        }
        y.ref !== null && (Wt(y), N("Invalid attribute `ref` supplied to `React.Fragment`."), Wt(null));
      }
    }
    var bo = {};
    function ho(y, B, Z, ae, we, ke) {
      {
        var he = M(y);
        if (!he) {
          var ge = "";
          (y === void 0 || typeof y == "object" && y !== null && Object.keys(y).length === 0) && (ge += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var qe = Ii();
          qe ? ge += qe : ge += fo();
          var Re;
          y === null ? Re = "null" : Fe(y) ? Re = "array" : y !== void 0 && y.$$typeof === t ? (Re = "<" + (j(y.type) || "Unknown") + " />", ge = " Did you accidentally export a JSX literal instead of a component?") : Re = typeof y, N("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Re, ge);
        }
        var Oe = jr(y, B, Z, we, ke);
        if (Oe == null)
          return Oe;
        if (he) {
          var rt = B.children;
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
        if (et.call(B, "key")) {
          var _t = j(y), Xe = Object.keys(B).filter(function(Gi) {
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
    function Di(y, B, Z) {
      return ho(y, B, Z, !0);
    }
    function zi(y, B, Z) {
      return ho(y, B, Z, !1);
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
    let f = 0, d = 0, p;
    for (let k = 0; k < l.length; k++) {
      let E = l[k];
      if (f === 0) {
        if (E === o && (n || l.slice(k, k + s) === t)) {
          c.push(l.slice(d, k)), d = k + s;
          continue;
        }
        if (E === "/") {
          p = k;
          continue;
        }
      }
      E === "[" ? f++ : E === "]" && f--;
    }
    const b = c.length === 0 ? l : l.substring(d), m = b.startsWith(Is), v = m ? b.substring(1) : b, h = p && p > d ? p - d : void 0;
    return {
      modifiers: c,
      hasImportantModifier: m,
      baseClassName: v,
      maybePostfixModifierPosition: h
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
    const f = a[c], {
      modifiers: d,
      hasImportantModifier: p,
      baseClassName: b,
      maybePostfixModifierPosition: m
    } = r(f);
    let v = !!m, h = n(v ? b.substring(0, m) : b);
    if (!h) {
      if (!v) {
        l = f + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (h = n(b), !h) {
        l = f + (l.length > 0 ? " " + l : l);
        continue;
      }
      v = !1;
    }
    const k = sl(d).join(":"), E = p ? k + Is : k, N = E + h;
    if (s.includes(N))
      continue;
    s.push(N);
    const L = o(h, v);
    for (let O = 0; O < L.length; ++O) {
      const R = L[O];
      s.push(E + R);
    }
    l = f + (l.length > 0 ? " " + l : l);
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
    const f = t.reduce((d, p) => p(d), e());
    return r = al(f), n = r.cache.get, o = r.cache.set, s = l, l(c);
  }
  function l(c) {
    const f = n(c);
    if (f)
      return f;
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
  const e = Te("colors"), t = Te("spacing"), r = Te("blur"), n = Te("brightness"), o = Te("borderColor"), s = Te("borderRadius"), a = Te("borderSpacing"), l = Te("borderWidth"), c = Te("contrast"), f = Te("grayscale"), d = Te("hueRotate"), p = Te("invert"), b = Te("gap"), m = Te("gradientColorStops"), v = Te("gradientColorStopPositions"), h = Te("inset"), k = Te("margin"), E = Te("opacity"), N = Te("padding"), L = Te("saturate"), O = Te("scale"), R = Te("sepia"), S = Te("skew"), K = Te("space"), _ = Te("translate"), T = () => ["auto", "contain", "none"], M = () => ["auto", "hidden", "clip", "visible", "scroll"], u = () => ["auto", ce, t], $ = () => [ce, t], j = () => ["", vt, jt], w = () => ["auto", Jt, ce], A = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], g = () => ["solid", "dashed", "dotted", "double", "none"], x = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], C = () => ["", "0", ce], U = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], W = () => [Jt, ce];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ur],
      spacing: [vt, jt],
      blur: ["none", "", Pt, ce],
      brightness: W(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Pt, ce],
      borderSpacing: $(),
      borderWidth: j(),
      contrast: W(),
      grayscale: C(),
      hueRotate: W(),
      invert: C(),
      gap: $(),
      gradientColorStops: [e],
      gradientColorStopPositions: [vl, jt],
      inset: u(),
      margin: u(),
      opacity: W(),
      padding: $(),
      saturate: W(),
      scale: W(),
      sepia: C(),
      skew: W(),
      space: $(),
      translate: $()
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
        overflow: M()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": M()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": M()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: T()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": T()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": T()
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
        basis: u()
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
        "col-start": w()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": w()
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
        "row-start": w()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": w()
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
        m: [k]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [k]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [k]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [k]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [k]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [k]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [k]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [k]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [k]
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
        indent: $()
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
        from: [v]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [v]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [m]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [m]
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
        "divide-opacity": [E]
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
        grayscale: [f]
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
        "backdrop-grayscale": [f]
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
        "backdrop-invert": [p]
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
        "backdrop-saturate": [L]
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
        duration: W()
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
        delay: W()
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
        "scroll-m": $()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": $()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": $()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": $()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": $()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": $()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": $()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": $()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": $()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": $()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": $()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": $()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": $()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": $()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": $()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": $()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": $()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": $()
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
function I(...e) {
  return gt(be(e));
}
const No = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Eo = be, De = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return Eo(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: o, defaultVariants: s } = t, a = Object.keys(o).map((f) => {
    const d = r == null ? void 0 : r[f], p = s == null ? void 0 : s[f];
    if (d === null) return null;
    const b = No(d) || No(p);
    return o[f][b];
  }), l = r && Object.entries(r).reduce((f, d) => {
    let [p, b] = d;
    return b === void 0 || (f[p] = b), f;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((f, d) => {
    let { class: p, className: b, ...m } = d;
    return Object.entries(m).every((v) => {
      let [h, k] = v;
      return Array.isArray(k) ? k.includes({
        ...s,
        ...l
      }[h]) : {
        ...s,
        ...l
      }[h] === k;
    }) ? [
      ...f,
      p,
      b
    ] : f;
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
  ...f
}) => {
  const [d, p] = te(null), [b, m] = te(!0), [v, h] = te(null);
  return ue(() => {
    let k = !0;
    return (async () => {
      try {
        const { Icon: N } = await import("./iconify-Dqt3MVen.mjs");
        k && (p(() => N), m(!1));
      } catch (N) {
        console.error("Failed to load icon:", N), k && (h(N), m(!1));
      }
    })(), () => {
      k = !1;
    };
  }, []), b ? /* @__PURE__ */ i.jsx("span", { style: { width: r, height: r } }) : v || !d ? null : /* @__PURE__ */ i.jsx(
    d,
    {
      icon: e,
      className: I(
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
      ...f
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
    labelPlacement: f = "top",
    fullWidth: d = !1,
    leftIcon: p,
    rightIcon: b,
    onRightIconClick: m,
    id: v,
    ...h
  }, k) => {
    const E = v || ie.useId(), N = `${E}-helper`, L = `${E}-error`, O = /* @__PURE__ */ i.jsxs("div", { className: I("relative", !d && "inline-block"), children: [
      p && /* @__PURE__ */ i.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ i.jsx(de, { icon: p, className: "w-4 h-4" }) }),
      /* @__PURE__ */ i.jsx(
        "input",
        {
          id: E,
          type: "text",
          ref: k,
          className: I(
            Sl({ variant: o ? "error" : t, size: r, rounded: n, fullWidth: d }),
            p && "pl-10",
            b && "pr-10",
            e
          ),
          "aria-describedby": o ? L : a ? N : void 0,
          "aria-invalid": o,
          "aria-required": c,
          ...h
        }
      ),
      b && /* @__PURE__ */ i.jsx(
        "div",
        {
          className: I(
            "absolute right-3 top-1/2 -translate-y-1/2 text-neutral",
            m && "cursor-pointer hover:text-primary-600"
          ),
          onClick: m,
          role: m ? "button" : void 0,
          tabIndex: m ? 0 : void 0,
          children: /* @__PURE__ */ i.jsx(de, { icon: b, className: "w-4 h-4" })
        }
      )
    ] }), R = /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      o && s && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger", id: L, children: s }),
      !o && a && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral", id: N, children: a })
    ] });
    return f === "left" ? /* @__PURE__ */ i.jsx("div", { className: I(d ? "w-full" : "inline-block", e), children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-start gap-4", children: [
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
      /* @__PURE__ */ i.jsxs("div", { className: I("flex-1", !d && "inline-block"), children: [
        O,
        R
      ] })
    ] }) }) : /* @__PURE__ */ i.jsxs("div", { className: I(d ? "w-full" : "inline-block", e), children: [
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
Ds.displayName = "Input";
const Ur = ie.forwardRef(
  ({ className: e, children: t, selected: r, disabled: n, ...o }, s) => /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: s,
      className: I(
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
    leftIcon: f,
    rightIcon: d,
    error: p = !1,
    errorText: b,
    helperText: m,
    label: v,
    required: h = !1,
    labelPlacement: k = "top",
    fullWidth: E = !1,
    value: N,
    onChange: L,
    onFocus: O,
    onBlur: R,
    showClear: S = !1,
    onClear: K,
    searchType: _ = "include",
    initialItemsToShow: T,
    itemsToLoad: M = 10,
    maxDropdownHeight: u = 300,
    noOptionsMessage: $ = "No options found",
    scrollMoreMessage: j = "",
    allOptionsShownMessage: w = "",
    ...A
  }, g) => {
    const [x, P] = te(!1), [C, U] = te(N || ""), [W, H] = te(T || 0), ne = re(null), V = re(null), G = re(null), q = re(null), D = n !== void 0, xe = `autocomplete-${ie.useId().replace(/:/g, "")}`, fe = () => {
      if (!x || !V.current || !G.current) return;
      const { bottom: F, top: ee, left: z, width: oe } = V.current.getBoundingClientRect(), Y = G.current, ve = it(), le = ve.innerHeight - F, je = ee, ct = Math.min(u, 300), Ot = le < ct, Mt = je > le, ht = Ot && Mt;
      Object.assign(Y.style, {
        position: "fixed",
        left: `${z}px`,
        width: `${oe}px`
      }), ht ? Object.assign(Y.style, {
        bottom: `${ve.innerHeight - ee + 4}px`,
        top: "auto",
        maxHeight: `${je - 8}px`
      }) : Object.assign(Y.style, {
        top: `${F + 4}px`,
        bottom: "auto",
        maxHeight: `${le - 8}px`
      });
    };
    ue(() => {
      const F = it(), ee = Ge(), z = () => {
        x && fe();
      }, oe = () => {
        x && fe();
      }, Y = (le) => {
        le.detail.id !== xe && P(!1);
      }, ve = (le) => {
        const je = le.target;
        ne.current && !ne.current.contains(je) && G.current && !G.current.contains(je) && P(!1);
      };
      return x && (fe(), F.addEventListener("scroll", z, !0), F.addEventListener("resize", oe)), ee.addEventListener(nn, Y), ee.addEventListener("click", ve), () => {
        F.removeEventListener("scroll", z, !0), F.removeEventListener("resize", oe), ee.removeEventListener(nn, Y), ee.removeEventListener("click", ve);
      };
    }, [x, xe]), ue(() => {
      U(N || "");
    }, [N]);
    const Ue = (F) => {
      const { value: ee } = F.target;
      if (U(ee), !ee.trim()) {
        P(!1);
        return;
      }
      const z = t.some(({ label: oe }) => {
        const Y = ee.toLowerCase().trim(), ve = oe.toLowerCase();
        return _ === "startsWith" ? ve.startsWith(Y) : ve.includes(Y);
      });
      P(z), L == null || L(F);
    }, He = (F) => {
      F.stopPropagation(), U(""), K == null || K();
      const ee = new Event("change");
      ee.target = { value: "" }, L == null || L(ee);
    }, Se = (F) => {
      var Y;
      if (!F) return;
      const { value: ee, label: z } = F;
      U(z), P(!1), r == null || r(ee);
      const oe = new CustomEvent("autocomplete-select", {
        detail: { selectedOption: F }
      });
      (Y = V.current) == null || Y.dispatchEvent(oe);
    }, Ye = (F) => {
      R == null || R(F);
    }, Ee = t.filter(({ label: F }) => {
      const ee = C.toLowerCase().trim(), z = F.toLowerCase();
      return _ === "startsWith" ? z.startsWith(ee) : z.includes(ee);
    }), et = (F) => {
      D || (Ge().dispatchEvent(
        new CustomEvent(nn, {
          detail: { id: xe }
        })
      ), Ee.length > 0 && P(!0)), O == null || O(F);
    }, tt = () => {
      if (!q.current || T === void 0 || T <= 0) return;
      const { scrollTop: F, scrollHeight: ee, clientHeight: z } = q.current;
      F + z >= ee - 10 && H((Y) => Math.min(Y + M, Ee.length));
    };
    ue(() => {
      T !== void 0 && T > 0 && H(T);
    }, [C, T]);
    const We = T !== void 0 && T > 0 ? Ee.slice(0, W) : Ee, ze = (F, ee) => F ? F.replace(/\{(\w+)\}/g, (z, oe) => {
      var Y;
      return ((Y = ee[oe]) == null ? void 0 : Y.toString()) || z;
    }) : "", dt = D ? n : x, ut = S && C && !A.disabled && !A.readOnly, Fe = ut ? "mdi:close" : d, Nt = (F) => {
      if (!(!dt || We.length === 0))
        switch (F.key) {
          case "Enter":
            F.preventDefault(), We.length === 1 && Se(We[0]);
            break;
          case "Tab":
            We.length === 1 && (F.preventDefault(), Se(We[0]));
            break;
          case "Escape":
            F.preventDefault(), P(!1);
            break;
        }
    }, bt = () => {
      if (!dt) return null;
      const F = Ge();
      if (!("body" in F)) return null;
      const ee = /* @__PURE__ */ i.jsx(
        "div",
        {
          ref: G,
          className: "fixed z-[9999] min-w-[8rem] rounded-md border border-neutral-200 bg-white py-1 shadow-lg overflow-hidden",
          style: { maxHeight: `${u}px` },
          onClick: (z) => z.stopPropagation(),
          children: /* @__PURE__ */ i.jsx(
            "div",
            {
              ref: q,
              className: "overflow-auto",
              style: { maxHeight: `${u}px` },
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
                T !== void 0 && T > 0 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                  W < Ee.length && j && /* @__PURE__ */ i.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500 text-center", children: ze(j, {
                    current: W,
                    total: Ee.length
                  }) }),
                  W >= Ee.length && Ee.length > 0 && w && /* @__PURE__ */ i.jsx("div", { className: "px-2 py-2 text-sm text-neutral-500 text-center", children: ze(w, {
                    total: Ee.length
                  }) })
                ] })
              ] }) : /* @__PURE__ */ i.jsx("div", { className: "px-2 py-2 text-sm text-neutral", children: $ })
            }
          )
        }
      );
      return It(ee, F.body);
    };
    return /* @__PURE__ */ i.jsxs("div", { ref: ne, className: I("relative", E ? "w-full" : "inline-block"), children: [
      /* @__PURE__ */ i.jsx("div", { ref: V, className: I(!E && "inline-block"), children: /* @__PURE__ */ i.jsx(
        Ds,
        {
          ref: g,
          value: C,
          onChange: Ue,
          onFocus: et,
          onBlur: Ye,
          onKeyDown: Nt,
          variant: a,
          size: l,
          rounded: c,
          leftIcon: f,
          rightIcon: Fe,
          error: p,
          errorText: b,
          helperText: m,
          label: v,
          required: h,
          labelPlacement: k,
          fullWidth: E,
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
  icon: n = "mdi:chevron-down",
  iconPosition: o = "right",
  className: s,
  contentClassName: a,
  variant: l = "primary",
  shadow: c = "none",
  rounded: f = "xl"
}) => {
  const [d, p] = te(r), b = (v) => {
    p(
      t ? (h) => h.includes(v) ? h.filter((k) => k !== v) : [...h, v] : (h) => h.includes(v) ? [] : [v]
    );
  }, m = Rl[l];
  return /* @__PURE__ */ i.jsx("div", { className: be("w-full space-y-2", s), children: e.map((v) => {
    const h = d.includes(v.id), k = !!v.disabled;
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: be(
          "border overflow-hidden",
          "bg-white",
          "border-gray-200",
          Ll[c],
          Al[f],
          "transition-shadow duration-200"
        ),
        children: [
          /* @__PURE__ */ i.jsxs(
            "button",
            {
              onClick: () => !k && b(v.id),
              disabled: k,
              className: be(
                "w-full flex items-center justify-between p-4",
                "text-left transition-colors",
                m.hover,
                h && m.active,
                m.text,
                k && "opacity-50 cursor-not-allowed"
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
                /* @__PURE__ */ i.jsx("div", { className: "flex-1", children: v.title }),
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
                    a
                  ),
                  children: v.content
                }
              ) })
            }
          )
        ]
      },
      v.id
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
    children: f,
    ...d
  }, p) => {
    const m = c || !!(a || l) && !f;
    return /* @__PURE__ */ i.jsxs(
      "button",
      {
        className: I(
          Il({
            variant: t,
            size: r,
            rounded: m ? "full" : n,
            fullWidth: o,
            isIconOnly: m,
            className: e
          })
        ),
        ref: p,
        disabled: d.disabled || s,
        ...d,
        children: [
          s && /* @__PURE__ */ i.jsx("span", { className: "animate-spin inline-block w-4 h-4 border-2 border-current border-r-transparent rounded-full" }),
          a && !s && /* @__PURE__ */ i.jsx(de, { icon: a, className: "w-4 h-4", inline: !0 }),
          f && /* @__PURE__ */ i.jsx("span", { children: f }),
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
      className: I(Ol({ variant: t, padding: r, shadow: n, rounded: o, className: e })),
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
  const f = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }, d = {
    primary: "checked:bg-primary-600 checked:border-primary-600 hover:border-primary-600",
    secondary: "checked:bg-secondary-600 checked:border-secondary-600 hover:border-secondary-600",
    success: "checked:bg-success-600 checked:border-success-600 hover:border-success-600",
    warning: "checked:bg-warning-600 checked:border-warning-600 hover:border-warning-600",
    error: "checked:bg-danger-600 checked:border-danger-600 hover:border-danger-600"
  }, p = t ? "border-danger-600 hover:border-danger-700" : "", m = gt(
    "border-2 transition-colors duration-200",
    "appearance-none cursor-pointer",
    "checked:bg-no-repeat checked:bg-center",
    s === "circle" ? 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=")]' : 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgM0w0LjUgOC41TDIgNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=")]',
    {
      square: "rounded",
      circle: "rounded-full"
    }[s],
    f[o],
    d[a],
    p,
    r && "opacity-50 cursor-not-allowed",
    l
  ), v = gt(
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
          className: m,
          disabled: r,
          ref: (h) => {
            h && (h.indeterminate = n);
          },
          ...c
        }
      ),
      e && /* @__PURE__ */ i.jsx("label", { className: v, children: e })
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
    helperText: f,
    label: d,
    required: p = !1,
    labelPlacement: b = "top",
    fullWidth: m = !1,
    disabled: v = !1,
    variant: h = "square",
    color: k = "primary",
    checkboxSize: E = "sm",
    showSelectAll: N = !1,
    selectAllText: L = "Select All",
    indeterminateSelectAll: O = !0,
    gap: R,
    selectAllGap: S,
    id: K,
    ..._
  }, T) => {
    const M = K || ie.useId(), u = `${M}-helper`, $ = `${M}-error`, j = `${M}-group`, [w, A] = ie.useState(n), g = r !== void 0 ? r : w, x = (D, X) => {
      const xe = X ? [...g, D] : g.filter((fe) => fe !== D);
      r === void 0 && A(xe), o == null || o(xe);
    }, P = (D) => {
      const X = D ? t.map((xe) => xe.value) : [];
      r === void 0 && A(X), o == null || o(X);
    }, C = t.length > 0 && g.length === t.length, U = g.length > 0 && g.length < t.length, W = O && U, H = (D) => D === "none" ? "gap-0" : D === "xs" ? "gap-1" : D === "sm" ? "gap-2" : D === "md" ? "gap-3" : D === "lg" ? "gap-4" : D === "xl" ? "gap-6" : null, ne = H(R), V = H(S), G = /* @__PURE__ */ i.jsx("div", { className: I("relative", !m && "inline-block"), children: /* @__PURE__ */ i.jsxs(
      "fieldset",
      {
        ref: T,
        id: j,
        className: I(
          sn({ layout: s, size: a }),
          ne,
          e
        ),
        "aria-describedby": l ? $ : f ? u : void 0,
        "aria-invalid": l,
        "aria-required": p,
        ..._,
        children: [
          N && t.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: I(
            "flex flex-col",
            V || ne || sn({ layout: "vertical", size: a })
          ), children: [
            /* @__PURE__ */ i.jsx(
              on,
              {
                label: L,
                checked: C,
                indeterminate: W,
                onChange: (D) => P(D.target.checked),
                disabled: v,
                variant: h,
                color: l ? "error" : k,
                variantSize: E,
                error: l ? " " : void 0
              }
            ),
            /* @__PURE__ */ i.jsx("div", { className: I(
              "flex",
              s === "vertical" && "flex-col",
              s === "horizontal" && "flex-row flex-wrap",
              s === "grid" && "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
              ne || sn({ layout: s, size: a })
            ), children: t.map((D) => /* @__PURE__ */ i.jsx(
              on,
              {
                label: D.label,
                checked: g.includes(D.value),
                onChange: (X) => x(D.value, X.target.checked),
                disabled: v || D.disabled,
                indeterminate: D.indeterminate,
                variant: h,
                color: l ? "error" : k,
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
              checked: g.includes(D.value),
              onChange: (X) => x(D.value, X.target.checked),
              disabled: v || D.disabled,
              indeterminate: D.indeterminate,
              variant: h,
              color: l ? "error" : k,
              variantSize: E,
              error: l ? " " : void 0
            },
            D.value
          )) })
        ]
      }
    ) }), q = /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      l && c && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger", id: $, children: c }),
      !l && f && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral", id: u, children: f })
    ] });
    return b === "left" ? /* @__PURE__ */ i.jsx("div", { className: I(m ? "w-full" : "inline-block", e), children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-start gap-4", children: [
      d && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: j,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            d,
            p && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: I("flex-1", !m && "inline-block"), children: [
        G,
        q
      ] })
    ] }) }) : /* @__PURE__ */ i.jsxs("div", { className: I(m ? "w-full" : "inline-block", e), children: [
      d && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: j,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            d,
            p && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      G,
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
    className: I(
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
    errorText: f,
    helperText: d,
    label: p,
    required: b = !1,
    labelPlacement: m = "top",
    fullWidth: v = !1,
    className: h,
    placeholder: k = "Select date",
    leftIcon: E,
    rightIcon: N,
    monthsToShow: L = 1,
    valueFormatter: O,
    rangeStart: R,
    rangeEnd: S,
    closeOnSelect: K = !0,
    calendarFooter: _,
    format: T = "DD-MM-YYYY",
    allowInput: M = !1,
    ...u
  }, $) => {
    const [j, w] = te(!1), [A, g] = te(e), [x, P] = te(e || /* @__PURE__ */ new Date()), [C, U] = te(!1), [W, H] = te(""), ne = re(null), V = re(null), G = re(null), q = re(null), D = re(null);
    Wn($, () => D.current, []), ue(() => {
      g(e || void 0), H(e ? X(e, T) : "");
    }, [e, T]), ue(() => {
      H(A ? X(A, T) : "");
    }, [A, T]);
    const X = (F, ee) => {
      const z = F.getDate().toString().padStart(2, "0"), oe = (F.getMonth() + 1).toString().padStart(2, "0"), Y = F.getFullYear().toString();
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
    }, xe = (F, ee) => {
      const oe = F.replace(/[^\d-]/g, "").split("-");
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
        const F = Ne(x).year(), ee = q.current.querySelectorAll("[data-year]"), z = Array.from(ee).find(
          (oe) => parseInt(oe.getAttribute("data-year") || "0") === F
        );
        z && z.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center"
        });
      }
    }, [C, x]);
    const fe = () => {
      if (!j || !V.current || !G.current) return;
      const { bottom: F, left: ee, width: z, top: oe } = V.current.getBoundingClientRect(), Y = G.current, ve = it(), le = ve.innerHeight - F, je = oe, Ot = le < (L === 2 ? 400 : 350), Mt = je > le, ht = Ot && Mt;
      L === 2 ? (Object.assign(Y.style, {
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
        top: `${F + 4}px`,
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
        top: `${F + 4}px`,
        bottom: "auto",
        maxHeight: `${le - 8}px`
      }));
    };
    ue(() => {
      const F = it(), ee = Ge(), z = () => {
        j && fe();
      }, oe = () => {
        j && fe();
      }, Y = (ve) => {
        ve.key === "Escape" && j && (w(!1), U(!1));
      };
      return j && (fe(), F.addEventListener("scroll", z, !0), F.addEventListener("resize", oe), ee.addEventListener("keydown", Y)), () => {
        F.removeEventListener("scroll", z, !0), F.removeEventListener("resize", oe), ee.removeEventListener("keydown", Y);
      };
    }, [j]);
    const Ue = (F) => {
      if (R !== void 0 && S !== void 0)
        if (R && S)
          g(F), H(X(F, T)), t == null || t(F);
        else if (R) {
          const z = F;
          Ne(z).isBefore(R), g(z), H(X(z, T)), t == null || t(z), w(!1), U(!1);
        } else
          g(F), H(X(F, T)), t == null || t(F);
      else
        g(F), H(X(F, T)), t == null || t(F), w(!1), U(!1);
    }, He = () => {
      P(Ne(x).subtract(1, "month").toDate());
    }, Se = () => {
      P(Ne(x).add(1, "month").toDate());
    }, Ye = (F) => {
      const ee = Ne(F).startOf("month"), z = Ne(F).endOf("month"), oe = [];
      let Y = ee;
      for (; Y.isBefore(z) || Y.isSame(z, "day"); )
        oe.push(Y.toDate()), Y = Y.add(1, "day");
      return oe;
    }, Ee = (F) => !!(r && Ne(F).isBefore(r, "day") || n && Ne(F).isAfter(n, "day")), et = (F) => {
      if (!M) return;
      const z = F.target.value.replace(/[^\d-]/g, "");
      if (z.length < W.length) {
        H(z);
        return;
      }
      if (z.replace(/-/g, "").length > 8)
        return;
      let Y = z;
      T === "DD-MM-YYYY" ? (z.length === 2 && !z.includes("-") || z.length === 5 && z.split("-").length === 2) && (Y = z + "-") : T === "YYYY-MM-DD" ? (z.length === 4 && !z.includes("-") || z.length === 7 && z.split("-").length === 2) && (Y = z + "-") : T === "MM-DD-YYYY" && (z.length === 2 && !z.includes("-") || z.length === 5 && z.split("-").length === 2) && (Y = z + "-"), H(Y);
    }, tt = () => {
      if (!M) return;
      const F = xe(W, T);
      if (F) {
        if (r && F < r) {
          H(X(r, T)), g(r), t == null || t(r);
          return;
        }
        if (n && F > n) {
          H(X(n, T)), g(n), t == null || t(n);
          return;
        }
        g(F), t == null || t(F), H(X(F, T));
      } else
        H(A ? X(A, T) : "");
    }, We = () => {
      M && w(!1);
    }, ze = (F) => {
      M && F.key === "Enter" && (F.preventDefault(), tt());
    }, dt = (F) => {
      const ee = Ne(x).year(F).toDate();
      P(ee), U(!1);
    }, ut = () => {
      if (!C) return null;
      const F = Ne(x).year(), ee = 1900, oe = Array.from(
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
              className: I(
                Y === F && "bg-primary-50 text-primary",
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
      const F = Ge();
      if (!("body" in F)) return null;
      const ee = Array.from({ length: L }).map(
        (z, oe) => Ne(x).add(oe, "month").toDate()
      );
      return It(
        /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "fixed inset-0 z-[9998]",
              onClick: () => {
                C || w(!1);
              }
            }
          ),
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: G,
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
                  /* @__PURE__ */ i.jsx("div", { className: "relative", children: /* @__PURE__ */ i.jsx("span", { className: "font-medium text-gray-900", children: L === 1 ? /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ i.jsx("span", { children: Ne(x).format("MMMM") }),
                    /* @__PURE__ */ i.jsxs(
                      "div",
                      {
                        className: "cursor-pointer flex items-center gap-1",
                        onClick: () => U(!C),
                        children: [
                          /* @__PURE__ */ i.jsx("span", { children: Ne(x).format("YYYY") }),
                          /* @__PURE__ */ i.jsx(Ke, { variant: "ghost", size: "sm", leftIcon: C ? "mdi:chevron-up" : "mdi:chevron-down" })
                        ]
                      }
                    )
                  ] }) : `${Ne(x).format("MMMM YYYY")} - ${Ne(
                    x
                  ).add(L - 1, "month").format("MMMM YYYY")}` }) }),
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
                    className: I(
                      L === 2 ? "flex gap-5 p-2 mx-auto w-fit" : "justify-between p-2 mx-auto w-fit"
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
                                  className: I(
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
                              z,
                              "month"
                            ), Mt = R && S && Ne(le).isSameOrAfter(R, "day") && Ne(le).isSameOrBefore(S, "day"), ht = R && Ne(le).isSame(R, "day"), jr = S && Ne(le).isSame(S, "day"), ir = Ne(le).day() === 0 || Ne(le).day() === 6, Et = R && S;
                            return /* @__PURE__ */ i.jsx("div", { className: "flex flex-col items-center justify-center", children: /* @__PURE__ */ i.jsx(
                              "div",
                              {
                                className: I(
                                  Mt && "rounded-none bg-primary-50",
                                  Et && ht && "rounded-l-full",
                                  Et && jr && "rounded-r-full"
                                ),
                                children: /* @__PURE__ */ i.jsx(
                                  "button",
                                  {
                                    onClick: () => !ct && Ue(le),
                                    disabled: ct,
                                    className: I(
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
        F.body
      );
    }, Nt = /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: I("relative", !v && "inline-block"),
        ref: V,
        onClick: () => !l && !M && w(!j),
        children: [
          E && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: (F) => {
                F.stopPropagation(), l || w(!j);
              },
              children: /* @__PURE__ */ i.jsx(de, { icon: E, className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              ref: D,
              type: "text",
              value: M ? W : O ? O() : A ? X(A, T) : "",
              placeholder: M ? T : k,
              readOnly: !M,
              maxLength: M ? 10 : void 0,
              onChange: et,
              onBlur: tt,
              onFocus: We,
              onKeyDown: ze,
              className: I(
                Hl({ variant: c ? "error" : o, size: s, rounded: a, fullWidth: v }),
                E && "pl-10",
                N && "pr-10",
                h
              ),
              disabled: l,
              ...u
            }
          ),
          N && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral cursor-pointer hover:text-primary transition-colors",
              onClick: (F) => {
                F.stopPropagation(), l || w(!j);
              },
              children: /* @__PURE__ */ i.jsx(de, { icon: N, className: "w-4 h-4" })
            }
          )
        ]
      }
    ), bt = /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      f && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger", children: f }),
      !f && d && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral", children: d })
    ] });
    return m === "left" ? /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: I(v ? "w-full" : "inline-block", h),
        ref: ne,
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-start gap-4", children: [
            p && /* @__PURE__ */ i.jsxs("label", { className: "block text-sm text-neutral-900 pt-2", children: [
              p,
              b && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: I("flex-1", !v && "inline-block"), children: [
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
        className: I(v ? "w-full" : "inline-block", h),
        ref: ne,
        children: [
          p && /* @__PURE__ */ i.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
            p,
            b && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
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
  ...f
}) => {
  const [d, p] = te([
    void 0,
    void 0
  ]);
  if (e === "single") {
    const b = Array.isArray(t) ? t[0] : t;
    return /* @__PURE__ */ i.jsx(
      kn,
      {
        value: b === null ? void 0 : b,
        onChange: (m) => r == null ? void 0 : r(m),
        monthsToShow: n,
        calendarFooter: o,
        error: s,
        errorText: a,
        format: l,
        allowInput: c,
        ...f
      }
    );
  }
  if (e === "range") {
    let [b, m] = Array.isArray(t) ? t : d;
    const v = (k) => {
      !b || b && m ? (p([k, void 0]), r == null || r([k, void 0])) : b && !m && (k < b ? (p([k, b]), r == null || r([k, b])) : (p([b, k]), r == null || r([b, k])));
    }, h = () => {
      if (!b) return "";
      const k = (E) => E ? E.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }) : "";
      return b && m ? `${k(b)} - ${k(m)}` : k(b);
    };
    return /* @__PURE__ */ i.jsx(
      kn,
      {
        value: b,
        onChange: v,
        monthsToShow: n,
        placeholder: f.placeholder || "Select date range",
        valueFormatter: h,
        rangeStart: b,
        rangeEnd: m,
        closeOnSelect: !!m,
        calendarFooter: o,
        error: s,
        errorText: a,
        format: l,
        allowInput: c,
        ...f
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
      className: I("mb-4 flex items-center justify-between", r),
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
    rounded: f = "xl",
    position: d = "center",
    scrollBehavior: p = "normal",
    animationDuration: b = 300,
    animationDelay: m = 0,
    ...v
  }, h) => {
    const [k, E] = te(e), [N, L] = te(!1), O = re(!1);
    if (Ps(() => {
      if (e) {
        E(!0), L(!1);
        const $ = Ge();
        "body" in $ && (p !== "outside" ? ($.body.style.overflow = "hidden", O.current = !0) : O.current = !1);
        const j = requestAnimationFrame(() => L(!0));
        return () => cancelAnimationFrame(j);
      }
      L(!1);
      const u = setTimeout(() => {
        E(!1);
        const $ = Ge();
        "body" in $ && O.current && ($.body.style.overflow = "", O.current = !1);
      }, b + m);
      return () => clearTimeout(u);
    }, [e, p, b, m]), ue(() => {
      const u = ($) => {
        $ instanceof KeyboardEvent && $.key === "Escape" && t();
      };
      return e && Ge().addEventListener("keydown", u), () => {
        Ge().removeEventListener("keydown", u);
      };
    }, [e, t]), !k) return null;
    const R = {
      blur: "backdrop-blur-sm bg-black/30",
      dark: "bg-black/50",
      transparent: "bg-transparent"
    }, S = () => {
      a && t();
    }, K = Ge();
    if (!("body" in K)) return null;
    const _ = (u) => {
      switch (u) {
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
    }, T = (() => {
      if (p === "inside")
        return l === "fullscreen" || d === "left" || d === "right" ? "overflow-y-auto" : "max-h-screen overflow-y-auto";
    })(), M = {
      transitionDuration: `${b}ms`,
      transitionDelay: `${m}ms`
    };
    return It(
      /* @__PURE__ */ i.jsx(
        "div",
        {
          className: I(
            "fixed inset-0 z-50 flex transition-opacity",
            R[o],
            N ? "opacity-100" : "opacity-0",
            d === "center" && "items-center justify-center",
            d === "top" && "items-start justify-center",
            d === "bottom" && "items-end justify-center",
            d === "left" && "items-stretch justify-start",
            d === "right" && "items-stretch justify-end"
          ),
          style: M,
          onClick: S,
          children: /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: h,
              className: I(
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
                l === "fullscreen" ? "rounded-none" : _(f),
                // Corner overrides so the edge touching the viewport is not rounded
                d === "left" && "rounded-l-none",
                d === "right" && "rounded-r-none",
                d === "top" && "rounded-t-none",
                d === "bottom" && "rounded-b-none",
                T
              ),
              style: M,
              onClick: (u) => u.stopPropagation(),
              ...v,
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
      className: I("text-xl font-semibold text-gray-900", t),
      ...r,
      children: e
    }
  )
), ql = Ie(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ i.jsx("div", { ref: n, className: I("text-gray-600", t), ...r, children: e })
), Xl = Ie(
  ({ children: e, className: t, ...r }, n) => /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: n,
      className: I("mt-6 flex justify-end gap-3", t),
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
  }, f = gt(
    "inline-block",
    s[e],
    a[t],
    l[r],
    c[n],
    o
  );
  return /* @__PURE__ */ i.jsx("div", { className: f });
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
  shadow: f = "none",
  rounded: d = "lg",
  children: p,
  showFileList: b = !0,
  showPlaceholder: m = !0,
  showMaxSize: v = !0,
  icon: h = "mdi:upload"
}) => {
  const [k, E] = te(!1), [N, L] = te(null), O = re(null), R = pe((j) => {
    j.preventDefault(), a || E(!0);
  }, [a]), S = pe((j) => {
    j.preventDefault(), E(!1);
  }, []), K = pe((j) => j.size > t ? `File size exceeds ${t / (1024 * 1024)}MB limit` : e[0] !== "*" && !e.some((w) => w.startsWith(".") ? j.name.toLowerCase().endsWith(w.toLowerCase()) : j.type.startsWith(w)) ? `File type not allowed. Allowed types: ${e.join(", ")}` : null, [e, t]), _ = pe((j) => {
    if (j.preventDefault(), E(!1), L(null), a) return;
    const w = Array.from(j.dataTransfer.files), A = [], g = [];
    if (w.forEach((x) => {
      const P = K(x);
      P ? g.push(`${x.name}: ${P}`) : A.push(x);
    }), g.length > 0 && L(g.join(`
`)), A.length > 0) {
      const x = r ? [...n, ...A] : A;
      o == null || o(x);
    }
  }, [a, r, o, K, n]), T = pe((j) => {
    if (L(null), a || !j.target.files) return;
    const w = Array.from(j.target.files), A = [], g = [];
    if (w.forEach((x) => {
      const P = K(x);
      P ? g.push(`${x.name}: ${P}`) : A.push(x);
    }), g.length > 0 && L(g.join(`
`)), A.length > 0) {
      const x = r ? [...n, ...A] : A;
      o == null || o(x);
    }
    O.current && (O.current.value = "");
  }, [a, r, o, K, n]), M = pe((j) => {
    const w = [...n];
    w.splice(j, 1), o == null || o(w);
  }, [o, n]), u = (j) => j.type.startsWith("image/") ? /* @__PURE__ */ i.jsx(de, { icon: "mdi:image", className: "w-5 h-5" }) : j.type.startsWith("text/") ? /* @__PURE__ */ i.jsx(de, { icon: "mdi:file-document", className: "w-5 h-5" }) : /* @__PURE__ */ i.jsx(de, { icon: "mdi:file", className: "w-5 h-5" }), $ = Jl[c];
  return /* @__PURE__ */ i.jsxs("div", { className: be("w-full", s), children: [
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: be(
          "p-6 text-center transition-colors",
          !p && [
            "border-2 border-dashed",
            $.border,
            $.bg,
            k && $.active,
            !a && $.hover
          ],
          a && "opacity-50 cursor-not-allowed",
          Ql[f],
          Po[d],
          !p && "cursor-pointer"
        ),
        onDragOver: R,
        onDragLeave: S,
        onDrop: _,
        onClick: () => {
          var j;
          return !a && !p && ((j = O.current) == null ? void 0 : j.click());
        },
        children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              ref: O,
              type: "file",
              accept: e.join(","),
              multiple: r,
              onChange: T,
              className: "hidden",
              disabled: a
            }
          ),
          p ? /* @__PURE__ */ i.jsx("div", { onClick: () => {
            var j;
            return !a && ((j = O.current) == null ? void 0 : j.click());
          }, children: p }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(de, { icon: h, className: "w-12 h-12 mx-auto mb-4 text-neutral-400" }),
            m && /* @__PURE__ */ i.jsx("p", { className: be("text-neutral-600", $.text), children: l }),
            v && /* @__PURE__ */ i.jsxs("p", { className: "text-sm text-neutral mt-2", children: [
              "Max file size: ",
              t / (1024 * 1024),
              "MB"
            ] })
          ] })
        ]
      }
    ),
    N && /* @__PURE__ */ i.jsx("p", { className: "mt-2 text-sm text-danger", children: N }),
    b && n.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "mt-4 space-y-2", children: n.map((j, w) => /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: be(
          "flex items-center justify-between p-2",
          Po[d],
          $.bg
        ),
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-center space-x-2", children: [
            u(j),
            /* @__PURE__ */ i.jsx("span", { className: be("text-sm", $.text), children: j.name }),
            /* @__PURE__ */ i.jsxs("span", { className: "text-xs text-neutral", children: [
              "(",
              (j.size / 1024).toFixed(1),
              " KB)"
            ] })
          ] }),
          !a && /* @__PURE__ */ i.jsx(
            "button",
            {
              onClick: () => M(w),
              className: "p-1 text-neutral hover:text-danger",
              children: /* @__PURE__ */ i.jsx(de, { icon: "mdi:close", className: "w-4 h-4" })
            }
          )
        ]
      },
      `${j.name}-${w}`
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
  }, f = () => {
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
  return /* @__PURE__ */ i.jsxs("div", { className: I(ec({ variant: n, rounded: o }), l), children: [
    r && /* @__PURE__ */ i.jsx(de, { icon: f(), className: I("h-5 w-5 flex-shrink-0", c()) }),
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
    required: f = !1,
    placeholder: d,
    value: p,
    onChange: b,
    disabled: m = !1,
    position: v = "bottom",
    fullWidth: h = !1,
    children: k,
    leftIcon: E,
    rightIcon: N,
    ...L
  }, O) => {
    const [R, S] = te(!1), K = re(null), _ = re(null), M = `select-${ie.useId().replace(/:/g, "")}`, u = () => {
      if (R && K.current && _.current) {
        const x = K.current.getBoundingClientRect(), P = _.current, C = it(), U = C.innerHeight - x.bottom, W = x.top, ne = x.bottom + P.offsetHeight + 4 >= C.innerHeight, V = W > U, G = ne && V;
        v === "bottom" || v === "top" ? (P.style.position = "fixed", P.style.left = `${x.left}px`, P.style.width = `${x.width}px`, v === "bottom" && G ? (P.style.bottom = `${C.innerHeight - x.top + 4}px`, P.style.top = "auto", P.style.maxHeight = `${W - 8}px`) : v === "bottom" ? (P.style.top = `${x.bottom + 4}px`, P.style.bottom = "auto", P.style.maxHeight = `${U - 8}px`) : v === "top" && !G ? (P.style.top = `${x.bottom + 4}px`, P.style.bottom = "auto", P.style.maxHeight = `${U - 8}px`) : (P.style.bottom = `${C.innerHeight - x.top + 4}px`, P.style.top = "auto", P.style.maxHeight = `${W - 8}px`)) : v === "left" ? (P.style.position = "fixed", P.style.right = `${C.innerWidth - x.left + 4}px`, P.style.top = `${x.top}px`, P.style.maxHeight = `${C.innerHeight - x.top - 8}px`) : v === "right" && (P.style.position = "fixed", P.style.left = `${x.right + 4}px`, P.style.top = `${x.top}px`, P.style.maxHeight = `${C.innerHeight - x.top - 8}px`);
      }
    };
    ue(() => {
      const x = it(), P = () => {
        R && u();
      }, C = () => {
        R && u();
      };
      return R && (u(), x.addEventListener("scroll", P, !0), x.addEventListener("resize", C)), () => {
        x.removeEventListener("scroll", P, !0), x.removeEventListener("resize", C);
      };
    }, [R, v]), ue(() => {
      const x = Ge(), P = (U) => {
        U.detail.id !== M && S(!1);
      }, C = (U) => {
        const W = U.target, H = K.current, ne = _.current;
        H && ne && !H.contains(W) && !ne.contains(W) && S(!1);
      };
      return x.addEventListener(an, P), x.addEventListener("click", C), () => {
        x.removeEventListener(an, P), x.removeEventListener("click", C);
      };
    }, [M]);
    const $ = () => {
      if (m) return;
      if (R) {
        S(!1);
        return;
      }
      Ge().dispatchEvent(
        new CustomEvent(an, {
          detail: { id: M }
        })
      ), S(!0);
    }, j = () => {
      if (o) {
        const x = o.find((P) => P.value === p);
        return x == null ? void 0 : x.label;
      }
      if (k) {
        const P = wr.toArray(k).find(
          (C) => xr(C) && "value" in C.props && C.props.value === p
        );
        return xr(P) ? P.props.children : null;
      }
      return null;
    }, w = (x) => {
      m || (b == null || b(x), S(!1));
    }, A = () => o ? o.map((x) => /* @__PURE__ */ i.jsx(
      Ur,
      {
        value: x.value,
        disabled: x.disabled,
        selected: x.value === p,
        onClick: () => {
          x.onClick && x.onClick(x.value), w(x.value);
        },
        children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
          x.icon,
          x.label
        ] })
      },
      x.value
    )) : k ? wr.map(k, (x) => xr(x) && "value" in x.props ? Kn(x, {
      selected: x.props.value === p,
      onClick: () => w(x.props.value)
    }) : null) : null, g = () => {
      if (!R || m) return null;
      const x = /* @__PURE__ */ i.jsx(
        "div",
        {
          ref: _,
          className: I(
            "fixed z-[9999] min-w-[8rem] border border-neutral-200 bg-white py-1 shadow-lg rounded-lg",
            v === "left" || v === "right" ? "w-max" : "w-full"
          ),
          onClick: (C) => C.stopPropagation(),
          style: {
            overflowY: "auto"
          },
          children: A()
        }
      ), P = Ge();
      return "body" in P ? It(x, P.body) : null;
    };
    return /* @__PURE__ */ i.jsxs("div", { className: I(h ? "w-full" : "inline-block"), ref: O, ...L, children: [
      s && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: M,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            s,
            f && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "div",
        {
          className: I("relative", !h && "inline-block"),
          onClick: $,
          children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                id: M,
                ref: K,
                type: "button",
                className: I(
                  tc({ variant: a ? "error" : t, size: r, rounded: n, fullWidth: h }),
                  "flex items-center justify-between",
                  m && "cursor-not-allowed opacity-50",
                  E && "pl-10",
                  N && "pr-10",
                  e
                ),
                "aria-haspopup": "listbox",
                "aria-expanded": R,
                "aria-describedby": a ? `${M}-error` : c ? `${M}-helper` : void 0,
                disabled: m,
                children: [
                  E && /* @__PURE__ */ i.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ i.jsx(de, { icon: E, className: "w-4 h-4" }) }),
                  /* @__PURE__ */ i.jsx("span", { className: "flex items-center gap-2 min-w-0 flex-1", children: /* @__PURE__ */ i.jsx("span", { className: I(
                    "truncate text-left",
                    j() ? "text-neutral-900" : "text-neutral"
                  ), children: j() || d }) }),
                  N ? /* @__PURE__ */ i.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center", children: /* @__PURE__ */ i.jsx(de, { icon: N, className: "w-4 h-4" }) }) : /* @__PURE__ */ i.jsx(
                    de,
                    {
                      icon: "mdi:chevron-down",
                      className: I("transition-transform flex-shrink-0 ml-2 w-4 h-4", R && "rotate-180")
                    }
                  )
                ]
              }
            ),
            g()
          ]
        }
      ),
      a && l && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-danger", id: `${M}-error`, children: l }),
      !a && c && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral", id: `${M}-helper`, children: c })
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
  onPerPageChange: f
}) => {
  const d = (m, v) => {
    const h = v - m + 1;
    return Array.from({ length: h }, (k, E) => E + m);
  }, b = (() => {
    const m = o * 2 + 3, v = m + 2;
    if (t > v) {
      const h = Math.max(2, e - o), k = Math.min(t - 1, e + o);
      let E = d(h, k);
      const N = h > 2, L = t - k > 1, O = m - (E.length + 1);
      if (N && !L)
        E = [...d(h - O, h - 1), ...E];
      else if (!N && L) {
        const R = d(k + 1, k + O);
        E = [...E, ...R];
      } else N && L && (E = [...E]);
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
                onChange: (m) => f && f(Number(m)),
                size: "sm",
                className: "w-16",
                fullWidth: !1,
                "aria-label": "Items per page",
                children: a.map((m) => /* @__PURE__ */ i.jsx(Ur, { value: m.toString(), children: m }, m))
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
          b.map((m, v) => {
            const h = m === e, k = typeof m == "string" && m === "...";
            return /* @__PURE__ */ i.jsx(
              Ke,
              {
                variant: "ghost",
                onClick: () => !k && n(m),
                className: be(
                  "px-3 py-1 rounded-md text-sm",
                  h ? "bg-primary text-white hover:bg-primary" : "text-gray-700",
                  k && "cursor-default"
                ),
                children: m
              },
              v
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
  const f = (b) => {
    n == null || n(b.target.checked);
  }, d = {
    sm: "h-4 w-4 before:h-2 before:w-2",
    md: "h-5 w-5 before:h-2.5 before:w-2.5",
    lg: "h-6 w-6 before:h-3 before:w-3"
  }, p = {
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
            onChange: f,
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
              p[l],
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
    helperText: f,
    label: d,
    required: p = !1,
    labelPlacement: b = "top",
    fullWidth: m = !1,
    disabled: v = !1,
    name: h,
    gap: k,
    color: E = "primary",
    radioSize: N = "sm",
    id: L,
    ...O
  }, R) => {
    const S = L || ie.useId(), K = `${S}-helper`, _ = `${S}-error`, T = `${S}-group`, M = h || `radio-group-${S}`, [u, $] = ie.useState(n), j = r !== void 0 ? r : u, w = (C) => {
      r === void 0 && $(C), o == null || o(C);
    }, g = ((C) => C === "none" ? "gap-0" : C === "xs" ? "gap-1" : C === "sm" ? "gap-2" : C === "md" ? "gap-3" : C === "lg" ? "gap-4" : C === "xl" ? "gap-6" : null)(k), x = /* @__PURE__ */ i.jsx("div", { className: I("relative", !m && "inline-block"), children: /* @__PURE__ */ i.jsx(
      "fieldset",
      {
        ref: R,
        id: T,
        className: I(
          oc({ layout: s, size: a }),
          g,
          e
        ),
        "aria-describedby": l ? _ : f ? K : void 0,
        "aria-invalid": l,
        "aria-required": p,
        ...O,
        children: t.map((C) => /* @__PURE__ */ i.jsx(
          nc,
          {
            label: C.label,
            checked: j === C.value,
            onChange: () => w(C.value),
            disabled: v || C.disabled,
            name: M,
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
      !l && f && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-xs text-neutral", id: K, children: f })
    ] });
    return b === "left" ? /* @__PURE__ */ i.jsx("div", { className: I(m ? "w-full" : "inline-block", e), children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-start gap-4", children: [
      d && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: T,
          className: "block text-sm text-neutral-900 pt-2",
          children: [
            d,
            p && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: I("flex-1", !m && "inline-block"), children: [
        x,
        P
      ] })
    ] }) }) : /* @__PURE__ */ i.jsxs("div", { className: I(m ? "w-full" : "inline-block", e), children: [
      d && /* @__PURE__ */ i.jsxs(
        "label",
        {
          htmlFor: T,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            d,
            p && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      x,
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
      className: I(
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
    className: I(
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
  marks: f = [],
  range: d = !1
}) => {
  const p = d, [b, m] = te(
    n !== void 0 ? n : o !== void 0 ? o : p ? [e, t] : e
  ), [v, h] = te(null), k = re(null), E = n !== void 0 ? n : b, [N, L] = p ? Array.isArray(E) ? E : [e, t] : [typeof E == "number" ? E : e, t], O = (g) => Math.min(Math.max(g, e), t), R = (g) => {
    if (l) return;
    let x;
    p && Array.isArray(g) ? x = [O(g[0]), O(g[1])] : !p && typeof g == "number" ? x = O(g) : x = p ? [e, t] : e, n === void 0 && m(x), s == null || s(x);
  }, S = (g) => {
    if (!k.current) return e;
    const x = k.current.getBoundingClientRect(), C = (g - x.left) / x.width, U = e + (t - e) * C, W = Math.round(U / r) * r;
    return O(W);
  }, K = (g) => (x) => {
    l || (h(g), x.stopPropagation());
  }, _ = (g) => {
    if (!l)
      if (!p)
        h(0), T(g, 0);
      else {
        const x = S(g.clientX), P = Math.abs(x - N), C = Math.abs(x - L), U = P < C ? 0 : 1;
        h(U), T(g, U);
      }
  }, T = ie.useCallback((g, x) => {
    const P = S(g.clientX);
    if (!p)
      R(P);
    else {
      let C = [N, L];
      x === 0 ? C = [Math.min(P, L - r), L] : C = [N, Math.max(P, N + r)], C[0] > C[1] && (C = [C[1], C[0]]), R(C);
    }
  }, [p, N, L, r, R, S]), M = ie.useRef(v);
  M.current = v;
  const u = ie.useCallback(function(g) {
    M.current === null || l || T(g, M.current);
  }, [l, T]), $ = ie.useCallback(function() {
    h(null);
  }, []);
  ue(() => {
    if (v !== null) {
      const g = it();
      return g.addEventListener("mousemove", u), g.addEventListener("mouseup", $), () => {
        g.removeEventListener("mousemove", u), g.removeEventListener("mouseup", $);
      };
    }
  }, [v, u, $]);
  const j = (g) => (g - e) / (t - e) * 100, w = j(N), A = j(L);
  return /* @__PURE__ */ i.jsxs("div", { className: be("relative w-full", a), children: [
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        ref: k,
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
              style: { left: `${p ? w : 0}%`, width: `${p ? A - w : w}%` }
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
              style: { left: `${w}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: K(0)
            }
          ),
          p && /* @__PURE__ */ i.jsx(
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
    f.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "flex justify-between mt-2", children: f.map((g) => /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "text-xs text-gray",
        style: { left: `${(g.value - e) / (t - e) * 100}%` },
        children: g.label
      },
      g.value
    )) }),
    c && /* @__PURE__ */ i.jsx("div", { className: "mt-2 text-sm text-gray-600", children: p ? `${N} - ${L}` : N })
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
  const [l, c] = te(null), f = (m) => {
    o || c(m);
  }, d = () => {
    o || c(null);
  }, p = (m) => {
    !o && s && s(m);
  }, b = l !== null ? l : e;
  return /* @__PURE__ */ i.jsx("div", { className: I("flex items-center gap-1", a), children: [...Array(t)].map((m, v) => {
    const h = v + 1, k = h <= b, E = l !== null && h <= l;
    return /* @__PURE__ */ i.jsx(
      "button",
      {
        className: I(
          "transition-colors duration-200",
          ic[r],
          k || E ? lc[n] : "text-default-200",
          !o && "cursor-pointer"
        ),
        onMouseEnter: () => f(h),
        onMouseLeave: d,
        onClick: () => p(h),
        disabled: o,
        "aria-label": `Rate ${h} out of ${t}`,
        children: /* @__PURE__ */ i.jsx(
          de,
          {
            icon: k || E ? "mdi:star" : "mdi:star-outline",
            className: "w-full h-full"
          }
        )
      },
      v
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
  return /* @__PURE__ */ i.jsxs("div", { className: I("flex items-center gap-2", n), children: [
    /* @__PURE__ */ i.jsx("div", { className: I("rounded-full animate-pulse", o, a) }),
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
}) => /* @__PURE__ */ i.jsx("div", { className: I("flex flex-row items-center w-full justify-between", r), children: e.map((o, s) => {
  const a = s < t ? "completed" : s === t ? "active" : "pending";
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: "flex items-center flex-1",
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: I(
          "flex flex-col items-center z-10",
          n === "default" ? "gap-4" : "gap-2",
          n === "default" ? "px-5" : "px-3"
        ), children: [
          n === "default" && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: I(
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
                className: I(
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
            className: I(
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
}) => /* @__PURE__ */ i.jsx("div", { className: I("flex flex-col items-start gap-8", r), children: e.map((o, s) => {
  const a = s < t ? "completed" : s === t ? "active" : "pending";
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: "flex flex-row w-full items-center relative",
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: I(
          "flex flex-row items-center z-10",
          n === "default" ? "gap-4" : "gap-2"
        ), children: [
          n === "default" && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: I(
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
                className: I(
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
            className: I(
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
  var E, N;
  const [f, d] = te(t || ((E = e[0]) == null ? void 0 : E.id) || ""), p = ie.useRef(null), [b, m] = te({ left: 0, width: 0 });
  ie.useEffect(() => {
    var L;
    if (r === "active-underline" && p.current) {
      const O = p.current.getBoundingClientRect(), R = (L = p.current.parentElement) == null ? void 0 : L.getBoundingClientRect();
      R && m({
        left: O.left - R.left,
        width: O.width
      });
    }
  }, [r, e, f]), ie.useEffect(() => {
    if (r === "active-underline") {
      const L = () => {
        var O;
        if (p.current) {
          const R = p.current.getBoundingClientRect(), S = (O = p.current.parentElement) == null ? void 0 : O.getBoundingClientRect();
          S && m({
            left: R.left - S.left,
            width: R.width
          });
        }
      };
      return window.addEventListener("resize", L), () => window.removeEventListener("resize", L);
    }
  }, [r, e, f]);
  const v = pe((L) => {
    d(L), c == null || c(L);
  }, [c]), h = () => {
    switch (n) {
      case "sm":
        return "text-sm px-3 py-1.5";
      case "lg":
        return "text-lg px-6 py-3";
      default:
        return "text-base px-4 py-2";
    }
  }, k = (L, O) => {
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
          L ? "bg-primary text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        );
      case "underline":
        return be(
          R,
          "border-b-2",
          L ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
      case "active-underline":
        return be(
          R,
          "border-b-0",
          L ? "text-primary" : "text-gray-600 dark:text-gray-300 hover:text-primary"
        );
      default:
        return be(
          R,
          "border-b-2",
          L ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
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
      e.map((L) => {
        const O = L.id === f, R = !!L.disabled;
        return /* @__PURE__ */ i.jsxs(
          "button",
          {
            ref: r === "active-underline" && O ? p : void 0,
            onClick: () => !R && v(L.id),
            disabled: R,
            className: be(
              k(O, R),
              a
            ),
            children: [
              L.icon && /* @__PURE__ */ i.jsx(
                de,
                {
                  icon: L.icon,
                  className: "w-5 h-5 flex-shrink-0"
                }
              ),
              /* @__PURE__ */ i.jsx("span", { children: L.label })
            ]
          },
          L.id
        );
      }),
      r === "active-underline" && /* @__PURE__ */ i.jsx(
        "span",
        {
          className: "absolute bottom-0 h-0.5 bg-primary transition-all duration-300",
          style: { left: b.left, width: b.width }
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: be("mt-4", l), children: (N = e.find((L) => L.id === f)) == null ? void 0 : N.content })
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
  return /* @__PURE__ */ i.jsx(a, { className: I("text-gray-900", o[e], r), children: t });
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
    label: f,
    required: d = !1,
    labelPlacement: p = "top",
    fullWidth: b = !1,
    className: m,
    placeholder: v = "Select time",
    leftIcon: h,
    rightIcon: k,
    valueFormatter: E,
    closeOnSelect: N = !0,
    ...L
  }, O) => {
    const [R, S] = te(!1), [K, _] = te(e || ""), [T, M] = te(0), [u, $] = te(0), [j, w] = te(!0), A = re(null), g = re(null), x = re(null), C = `timepicker-${ie.useId().replace(/:/g, "")}`, U = () => {
      if (!R || !g.current || !x.current) return;
      const D = g.current.getBoundingClientRect(), X = x.current, fe = it().innerHeight - D.bottom;
      X.style.top = `${D.bottom + 4}px`, X.style.bottom = "auto", X.style.left = `${D.left}px`, X.style.maxHeight = `${fe - 8}px`, X.style.width = `${D.width}px`;
    };
    ue(() => {
      const D = it(), X = Ge(), xe = () => {
        R && U();
      }, fe = () => {
        R && U();
      }, Ue = (Se) => {
        Se.detail.id !== C && S(!1);
      }, He = (Se) => {
        const Ye = Se.target;
        A.current && x.current && !A.current.contains(Ye) && !x.current.contains(Ye) && S(!1);
      };
      return R && (U(), D.addEventListener("scroll", xe, !0), D.addEventListener("resize", fe)), X.addEventListener(ln, Ue), X.addEventListener("mousedown", He), () => {
        D.removeEventListener("scroll", xe, !0), D.removeEventListener("resize", fe), X.removeEventListener(ln, Ue), X.removeEventListener("mousedown", He);
      };
    }, [R, C]);
    const W = () => {
      a || (R || Ge().dispatchEvent(
        new CustomEvent(ln, {
          detail: { id: C }
        })
      ), S(!R));
    };
    ue(() => {
      if (e) {
        _(e);
        const [D, X] = e.split(":").map(Number);
        r ? M(D) : (M(D % 12 || 12), w(D < 12)), $(X);
      }
    }, [e, r]);
    const H = () => {
      const X = `${(r || j ? T : T + 12).toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
      _(X), t == null || t(X), N && S(!1);
    }, ne = () => r ? Array.from({ length: 24 }, (D, X) => X) : Array.from({ length: 12 }, (D, X) => X + 1), V = () => Array.from({ length: 60 }, (D, X) => X), G = E ? E(K) : K, q = Ge();
    return "body" in q ? /* @__PURE__ */ i.jsxs("div", { ref: A, className: I("relative", b && "w-full", m), children: [
      f && /* @__PURE__ */ i.jsxs(
        "label",
        {
          className: I(
            "block text-sm font-medium text-gray-700 mb-1",
            p === "left" && "inline-block mr-2"
          ),
          children: [
            f,
            d && /* @__PURE__ */ i.jsx("span", { className: "text-red ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "div",
        {
          ref: g,
          className: "relative",
          onClick: W,
          children: [
            h && /* @__PURE__ */ i.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ i.jsx(de, { icon: h, size: 20 }) }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                ref: O,
                type: "text",
                value: G,
                placeholder: v,
                readOnly: !0,
                className: I(
                  pc({ variant: n, size: o, rounded: s, fullWidth: b }),
                  h && "pl-10",
                  k && "pr-10",
                  "text-left"
                ),
                disabled: a,
                ...L
              }
            ),
            k && /* @__PURE__ */ i.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ i.jsx(de, { icon: k, size: 20 }) })
          ]
        }
      ),
      R && It(
        /* @__PURE__ */ i.jsx(
          "div",
          {
            ref: x,
            className: "fixed z-[9999] w-fit rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            onClick: (D) => D.stopPropagation(),
            children: /* @__PURE__ */ i.jsxs("div", { className: "p-0", children: [
              /* @__PURE__ */ i.jsxs(Yn, { variant: "ghost", className: I(
                "flex mx-2 my-1 p-0",
                r ? "justify-start gap-8" : "justify-start gap-4"
              ), children: [
                /* @__PURE__ */ i.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ i.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ i.jsx("div", { className: "flex flex-col gap-2", children: ne().map((D) => /* @__PURE__ */ i.jsx(
                  Ke,
                  {
                    variant: "ghost",
                    onClick: () => M(D),
                    className: I(T === D && "bg-primary text-white"),
                    children: D.toString().padStart(2, "0")
                  },
                  D
                )) }) }) }),
                /* @__PURE__ */ i.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ i.jsx("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ i.jsx("div", { className: "flex flex-col gap-2", children: V().map((D) => /* @__PURE__ */ i.jsx(
                  Ke,
                  {
                    variant: "ghost",
                    onClick: () => $(D),
                    className: I(u === D && "bg-primary text-white"),
                    children: D.toString().padStart(2, "0")
                  },
                  D
                )) }) }) }),
                !r && /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ i.jsx(
                    Ke,
                    {
                      variant: "ghost",
                      onClick: () => w(!0),
                      className: I(j && "bg-primary text-white"),
                      children: "AM"
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    Ke,
                    {
                      variant: "ghost",
                      onClick: () => w(!1),
                      className: I(!j && "bg-primary text-white"),
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
    className: f,
    ...d
  }, p) => {
    const b = ie.useId(), m = `${b}-helper`, v = `${b}-error`;
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
            ref: p,
            className: I(mc({ variant: c ? "danger" : r, size: n }), f),
            "aria-describedby": c ? v : a ? m : void 0,
            "aria-invalid": c,
            "aria-required": s,
            ...d,
            children: /* @__PURE__ */ i.jsx(
              "span",
              {
                "data-state": e ? "checked" : "unchecked",
                className: I(
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
            htmlFor: b,
            className: "text-sm text-neutral-900",
            children: [
              o,
              s && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
            ]
          }
        )
      ] }),
      c && l && /* @__PURE__ */ i.jsx("p", { className: "text-xs text-danger", id: v, children: l }),
      !c && a && /* @__PURE__ */ i.jsx("p", { className: "text-xs text-neutral", id: m, children: a })
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
  trigger: f = "hover"
}) => {
  const [d, p] = te(!1), [b, m] = te({ top: 0, left: 0 }), v = re(null), h = re(null), k = re(), E = l !== void 0, N = E ? l : d, L = () => {
    if (!v.current || !h.current) return;
    const _ = h.current.getBoundingClientRect(), T = v.current.getBoundingClientRect(), M = it(), u = M.scrollX || M.pageXOffset, $ = M.scrollY || M.pageYOffset;
    let j = 0, w = 0;
    const A = 8;
    switch (r) {
      case "top":
        j = _.top + $ - T.height - A, w = _.left + u + (_.width - T.width) / 2;
        break;
      case "bottom":
        j = _.bottom + $ + A, w = _.left + u + (_.width - T.width) / 2;
        break;
      case "left":
        j = _.top + $ + (_.height - T.height) / 2, w = _.left + u - T.width - A;
        break;
      case "right":
        j = _.top + $ + (_.height - T.height) / 2, w = _.right + u + A;
        break;
    }
    const g = M.innerWidth, x = M.innerHeight;
    w < 0 && (w = 0), w + T.width > g && (w = g - T.width), j < 0 && (j = 0), j + T.height > x && (j = x - T.height), m({ top: j, left: w });
  };
  ue(() => {
    if (N) {
      L();
      const _ = it();
      _.addEventListener("scroll", L, !0), _.addEventListener("resize", L);
    }
    return () => {
      const _ = it();
      _.removeEventListener("scroll", L, !0), _.removeEventListener("resize", L);
    };
  }, [N, r]);
  const O = () => {
    E ? c == null || c(!0) : k.current = setTimeout(() => {
      p(!0);
    }, n);
  }, R = () => {
    k.current && clearTimeout(k.current), E ? c == null || c(!1) : p(!1);
  }, S = (_) => {
    _.stopPropagation(), f === "click" && (E ? c == null || c(!l) : p(!d));
  };
  ue(() => {
    const _ = (T) => {
      f === "click" && v.current && !v.current.contains(T.target) && h.current && !h.current.contains(T.target) && R();
    };
    return N && document.addEventListener("click", _), () => {
      document.removeEventListener("click", _);
    };
  }, [N, f]);
  const K = () => {
    if (!N) return null;
    const _ = Ge();
    return "body" in _ ? It(
      /* @__PURE__ */ i.jsxs(
        "div",
        {
          ref: v,
          className: I(vc({ color: s, size: a }), o),
          style: {
            top: `${b.top}px`,
            left: `${b.left}px`
          },
          children: [
            e,
            /* @__PURE__ */ i.jsx(
              "div",
              {
                className: I(
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
      _.body
    ) : null;
  };
  return /* @__PURE__ */ i.jsx("div", { className: "relative", children: /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: h,
      className: "relative inline-block",
      onMouseEnter: f === "hover" ? O : void 0,
      onMouseLeave: f === "hover" ? R : void 0,
      onClick: S,
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
    icon: f,
    ...d
  }, p) => {
    const b = Math.min(Math.max(o, 0), 100), m = wc[n], v = n === "sm" ? 2 : n === "md" ? 3 : 4, h = (m - v) / 2, k = 2 * Math.PI * h, E = k - b / 100 * k;
    let N = "";
    return t === "loading" ? N = "rounded-full" : c ? N = c === "none" ? "" : `rounded-${c}` : N = "rounded-md", t === "circular" ? /* @__PURE__ */ i.jsxs("div", { className: "inline-flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "relative", style: { width: m, height: m }, children: [
        /* @__PURE__ */ i.jsxs(
          "svg",
          {
            className: I(
              "transform -rotate-90",
              s ? "animate-spin" : ""
            ),
            width: m,
            height: m,
            children: [
              /* @__PURE__ */ i.jsx(
                "circle",
                {
                  strokeWidth: v,
                  stroke: "#e5e7eb",
                  fill: "transparent",
                  r: h,
                  cx: m / 2,
                  cy: m / 2
                }
              ),
              /* @__PURE__ */ i.jsx(
                "circle",
                {
                  className: I(
                    "transition-all duration-300 ease-in-out",
                    s ? "animate-dash" : ""
                  ),
                  strokeWidth: v,
                  strokeDasharray: k,
                  strokeDashoffset: s ? 0 : E,
                  strokeLinecap: "round",
                  stroke: kc[r],
                  fill: "transparent",
                  r: h,
                  cx: m / 2,
                  cy: m / 2
                }
              )
            ]
          }
        ),
        f && /* @__PURE__ */ i.jsx("span", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ i.jsx(de, { icon: f, size: m * 0.5 }) }),
        a && !s && !f && /* @__PURE__ */ i.jsxs("div", { className: "absolute inset-0 flex items-center justify-center text-xs font-medium", children: [
          Math.round(b),
          "%"
        ] })
      ] }),
      l && /* @__PURE__ */ i.jsx("span", { className: "text-sm text-neutral-600", children: l })
    ] }) : /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ i.jsx(
        "div",
        {
          ref: p,
          className: I(yc({ variant: t === "loading" ? "bar" : t, size: n }), N, e),
          role: "progressbar",
          "aria-valuenow": s ? void 0 : b,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          ...d,
          children: /* @__PURE__ */ i.jsx(
            "div",
            {
              className: I(
                "h-full transition-all duration-300 ease-in-out",
                s ? "animate-progress-indeterminate" : "",
                $c[r],
                N
              ),
              style: {
                width: s ? "100%" : `${b}%`
              }
            }
          )
        }
      ),
      (a || l) && /* @__PURE__ */ i.jsxs("div", { className: "flex justify-between text-xs text-neutral-600", children: [
        l && /* @__PURE__ */ i.jsx("span", { children: l }),
        a && !s && /* @__PURE__ */ i.jsxs("span", { children: [
          Math.round(b),
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
    fullWidth: f = !1,
    value: d = "",
    onChange: p,
    disabled: b = !1,
    defaultCountry: m = "id",
    placeholder: v = "Enter phone number",
    autoDetect: h = !0,
    ...k
  }, E) => {
    const [N, L] = te(!1), [O, R] = te(
      () => yt.find((V) => V.iso === m) || yt[0]
    ), [S, K] = te(""), [_, T] = te(() => {
      if (h && d) {
        const G = cn(d);
        if (G)
          return R(G), d;
        const q = So(d);
        return q ? (R(q), q.code + d.slice(q.code.replace("+", "").length)) : d;
      }
      const V = O.code;
      return d.startsWith(V) ? d.slice(V.length) : d;
    }), [M, u] = te(() => h && d ? !!(cn(d) || So(d)) : !1), $ = re(null), j = re(null), w = ie.useId(), A = `${w}-helper`, g = `${w}-error`, x = yt.filter(
      (V) => V.name.toLowerCase().includes(S.toLowerCase()) || V.code.includes(S)
    ), P = re(null), C = () => {
      if (N && $.current && j.current) {
        const V = $.current.getBoundingClientRect(), G = j.current, q = typeof window < "u" ? window : { innerHeight: 0 }, D = q.innerHeight - V.bottom, X = V.top, fe = V.bottom + (G.offsetHeight || 0) + 4 >= q.innerHeight, Ue = X > D, He = fe && Ue;
        G.style.position = "fixed", G.style.left = `${V.left}px`, G.style.minWidth = `${V.width}px`, G.style.maxWidth = "340px", G.style.width = "auto", He ? (G.style.bottom = `${q.innerHeight - V.top + 4}px`, G.style.top = "auto", G.style.maxHeight = `${X - 8}px`) : (G.style.top = `${V.bottom + 4}px`, G.style.bottom = "auto", G.style.maxHeight = `${D - 8}px`);
      }
    };
    ue(() => {
      const V = typeof window < "u" ? window : void 0, G = () => {
        N && C();
      }, q = () => {
        N && C();
      };
      return N && (C(), V == null || V.addEventListener("scroll", G, !0), V == null || V.addEventListener("resize", q)), () => {
        V == null || V.removeEventListener("scroll", G, !0), V == null || V.removeEventListener("resize", q);
      };
    }, [N]), ue(() => {
      if (!N) return;
      const V = (G) => {
        const q = G.target;
        $.current && j.current && !$.current.contains(q) && !j.current.contains(q) && L(!1);
      };
      return document.addEventListener("click", V), () => document.removeEventListener("click", V);
    }, [N]);
    const U = (V) => {
      if (R(V), L(!1), K(""), h) {
        const G = V.code + _.replace(/^\+?\d*/, "");
        T(G);
        const q = G.replace(/[^\d]/g, "");
        p == null || p(q);
      } else {
        const q = (V.code + _).replace(/[^\d]/g, "");
        p == null || p(q);
      }
    }, W = (V) => {
      const G = V.target.value;
      if (/^[+\d]*$/.test(G))
        if (h && G.startsWith("+")) {
          const D = cn(G);
          if (D) {
            R(D), u(!0), T(G);
            const X = G.replace(/[^\d]/g, "");
            p == null || p(X);
          } else {
            T(G), u(!1);
            const X = G.replace(/[^\d]/g, "");
            p == null || p(X);
          }
        } else if (h && !G.startsWith("+") && G.length > 0) {
          const D = jc(G);
          if (D !== G) {
            T(D), R(
              yt.find((xe) => xe.iso === "id") || yt[0]
            ), u(!0);
            const X = D.replace(/[^\d]/g, "");
            p == null || p(X);
          } else if (Pc(G)) {
            const X = "+62" + G.slice(1);
            T(X), R(
              yt.find((fe) => fe.iso === "id") || yt[0]
            ), u(!0);
            const xe = X.replace(/[^\d]/g, "");
            p == null || p(xe);
          } else if (G.startsWith("0"))
            T(G), u(!1);
          else {
            const X = "+" + G;
            T(X);
            const xe = X.replace(/[^\d]/g, "");
            p == null || p(xe);
          }
        } else {
          const D = G.replace(/[^\d]/g, "");
          T(D);
          const xe = (O.code + D).replace(/[^\d]/g, "");
          p == null || p(xe);
        }
    }, H = I(
      Ec({
        variant: o ? "error" : t,
        size: r,
        rounded: n,
        fullWidth: f
      }),
      "!w-full"
    ), ne = !h || h && M;
    return Wn(E, () => P.current, []), /* @__PURE__ */ i.jsxs(
      "div",
      {
        ref: P,
        className: I(f ? "w-full" : "inline-block", e),
        ...k,
        children: [
          l && /* @__PURE__ */ i.jsxs("label", { htmlFor: w, className: "mb-1.5 block text-sm text-neutral-900", children: [
            l,
            c && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: I("relative", !f && "inline-block"), children: [
            /* @__PURE__ */ i.jsxs("div", { className: "flex", children: [
              ne && /* @__PURE__ */ i.jsxs(
                "button",
                {
                  type: "button",
                  ref: $,
                  onClick: () => !b && L(!N),
                  className: I(
                    H,
                    "flex items-center gap-2 rounded-r-none justify-between",
                    h ? "max-w-[60px]" : "max-w-[100px]",
                    b && "cursor-not-allowed opacity-50"
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
                        className: I("transition-transform", N && "rotate-180")
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "tel",
                  id: w,
                  value: _,
                  onChange: W,
                  disabled: b,
                  className: I(
                    H,
                    ne ? "rounded-l-none" : `rounded-l-${n}`,
                    "flex-1 min-w-0 w-full"
                  ),
                  placeholder: h ? "e.g. +6281234567890" : v
                }
              )
            ] }),
            N && It(
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
                        onChange: (V) => {
                          const G = V.target.value;
                          /^[a-zA-Z0-9\s]*$/.test(G) && K(G);
                        },
                        placeholder: "Search countries...",
                        className: "w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:border-primary-300"
                      }
                    ) }),
                    /* @__PURE__ */ i.jsx("div", { className: "max-h-[300px] overflow-y-auto", children: x.map((V) => /* @__PURE__ */ i.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => U(V),
                        className: I(
                          "w-full px-3 py-2 text-sm text-left hover:bg-primary-50 cursor-pointer",
                          O.iso === V.iso && "bg-primary-50"
                        ),
                        children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ i.jsx(de, { icon: V.flag, className: "w-5 h-5" }),
                          /* @__PURE__ */ i.jsx("span", { className: "text-sm font-medium", children: V.code }),
                          /* @__PURE__ */ i.jsx("span", { className: "text-sm text-neutral-600", children: V.name })
                        ] })
                      },
                      V.iso + V.code
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
  } = t, f = {};
  if (!n)
    return e;
  for (const d in e)
    s != null && s.has(d) || a != null && a.has(d) && Pr.test(d) || Pr.test(d) && !Ic.has(d) || l && Lo.test(d) || c && Pr.test(d) || (Object.prototype.hasOwnProperty.call(e, d) && (Ac.has(d) || r && Oc.test(d) || o != null && o.has(d) || Lo.test(d)) || Pr.test(d)) && (f[d] = e[d]);
  return f;
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
          const f = this._doc.createTreeWalker(c, this.whatToShow, {
            acceptNode: this._acceptNode
          });
          return this._walkerStack.unshift(f), NodeFilter.FILTER_ACCEPT;
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
  let f = ra() && rr() && !ta() && process.env.NODE_ENV !== "test" ? new KeyboardEvent("keydown", {
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
  Nr.isOpening = r, tr(e), e.dispatchEvent(f), Nr.isOpening = !1;
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
    let c = l != null && l.once ? (...f) => {
      e.current.delete(a), a(...f);
    } : a;
    e.current.set(a, {
      type: s,
      eventTarget: o,
      fn: c,
      options: l
    }), o.addEventListener(s, c, l);
  }, []), r = pe((o, s, a, l) => {
    var c;
    let f = ((c = e.current.get(a)) === null || c === void 0 ? void 0 : c.fn) || a;
    o.removeEventListener(s, f, l), e.current.delete(a);
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
    let f = s.current;
    f !== a && process.env.NODE_ENV !== "production" && console.warn(`WARN: A component changed from ${f ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}.`), s.current = a;
  }, [
    a
  ]);
  let l = a ? e : n, c = pe((f, ...d) => {
    let p = (b, ...m) => {
      r && (Object.is(l, b) || r(b, ...m)), a || (l = b);
    };
    typeof f == "function" ? (process.env.NODE_ENV !== "production" && console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), o((m, ...v) => {
      let h = f(a ? l : m, ...v);
      return p(h, ...d), a ? m : h;
    })) : (a || o(f), p(f, ...d));
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
  let f = ((c = Ve == null ? void 0 : Ve.scale) !== null && c !== void 0 ? c : 1) > 1;
  if (e.tagName === "BODY") {
    let v = document.documentElement;
    n = v.clientWidth, o = v.clientHeight;
    var d;
    t = (d = Ve == null ? void 0 : Ve.width) !== null && d !== void 0 ? d : n;
    var p;
    r = (p = Ve == null ? void 0 : Ve.height) !== null && p !== void 0 ? p : o, l.top = v.scrollTop || e.scrollTop, l.left = v.scrollLeft || e.scrollLeft, Ve && (s = Ve.offsetTop, a = Ve.offsetLeft);
  } else
    ({ width: t, height: r, top: s, left: a } = er(e)), l.top = e.scrollTop, l.left = e.scrollLeft, n = t, o = r;
  if (ra() && (e.tagName === "BODY" || e.tagName === "HTML") && f) {
    l.top = 0, l.left = 0;
    var b;
    s = (b = Ve == null ? void 0 : Ve.pageTop) !== null && b !== void 0 ? b : 0;
    var m;
    a = (m = Ve == null ? void 0 : Ve.pageLeft) !== null && m !== void 0 ? m : 0;
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
  let c = (l = o.scroll[e]) !== null && l !== void 0 ? l : 0, f = n[Sn[e]], d = n.scroll[pt[e]] + s, p = f + n.scroll[pt[e]] - s, b = t - c + a[e] - n[pt[e]], m = t - c + r + a[e] - n[pt[e]];
  return b < d ? d - b : m > p ? Math.max(p - m, d - b) : 0;
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
function un(e, t, r, n, o, s, a, l, c, f) {
  let { placement: d, crossPlacement: p, axis: b, crossAxis: m, size: v, crossSize: h } = n, k = {};
  var E;
  k[m] = (E = e[m]) !== null && E !== void 0 ? E : 0;
  var N, L, O, R;
  p === "center" ? k[m] += (((N = e[h]) !== null && N !== void 0 ? N : 0) - ((L = r[h]) !== null && L !== void 0 ? L : 0)) / 2 : p !== m && (k[m] += ((O = e[h]) !== null && O !== void 0 ? O : 0) - ((R = r[h]) !== null && R !== void 0 ? R : 0)), k[m] += s;
  const S = e[m] - r[h] + c + f, K = e[m] + e[h] - c - f;
  if (k[m] = Tn(k[m], S, K), d === b) {
    const _ = l ? a[v] : t[la[v]];
    k[Vr[b]] = Math.floor(_ - e[b] + o);
  } else k[b] = Math.floor(e[b] + e[v] + o);
  return k;
}
function Md(e, t, r, n, o, s, a, l) {
  const c = n ? r.height : t[la.height];
  var f;
  let d = e.top != null ? r.top + e.top : r.top + (c - ((f = e.bottom) !== null && f !== void 0 ? f : 0) - a);
  var p, b, m, v, h, k;
  let E = l !== "top" ? (
    // We want the distance between the top of the overlay to the bottom of the boundary
    Math.max(0, t.height + t.top + ((p = t.scroll.top) !== null && p !== void 0 ? p : 0) - d - (((b = o.top) !== null && b !== void 0 ? b : 0) + ((m = o.bottom) !== null && m !== void 0 ? m : 0) + s))
  ) : Math.max(0, d + a - (t.top + ((v = t.scroll.top) !== null && v !== void 0 ? v : 0)) - (((h = o.top) !== null && h !== void 0 ? h : 0) + ((k = o.bottom) !== null && k !== void 0 ? k : 0) + s));
  return Math.min(t.height - s * 2, E);
}
function Ho(e, t, r, n, o, s) {
  let { placement: a, axis: l, size: c } = s;
  var f, d;
  if (a === l) return Math.max(0, r[l] - e[l] - ((f = e.scroll[l]) !== null && f !== void 0 ? f : 0) + t[l] - ((d = n[l]) !== null && d !== void 0 ? d : 0) - n[Vr[l]] - o);
  var p;
  return Math.max(0, e[c] + e[l] + e.scroll[l] - t[l] - r[l] - r[c] - ((p = n[l]) !== null && p !== void 0 ? p : 0) - n[Vr[l]] - o);
}
function _d(e, t, r, n, o, s, a, l, c, f, d, p, b, m, v, h) {
  let k = Go(e), { size: E, crossAxis: N, crossSize: L, placement: O, crossPlacement: R } = k, S = un(t, l, r, k, d, p, f, b, v, h), K = d, _ = Ho(l, f, t, o, s + d, k);
  if (a && n[E] > _) {
    let V = Go(`${Vr[O]} ${R}`), G = un(t, l, r, V, d, p, f, b, v, h);
    Ho(l, f, t, o, s + d, V) > _ && (k = V, S = G, K = d);
  }
  let T = "bottom";
  k.axis === "top" ? k.placement === "top" ? T = "top" : k.placement === "bottom" && (T = "bottom") : k.crossAxis === "top" && (k.crossPlacement === "top" ? T = "bottom" : k.crossPlacement === "bottom" && (T = "top"));
  let M = Bo(N, S[N], r[L], l, c, s, f);
  S[N] += M;
  let u = Md(S, l, f, b, o, s, r.height, T);
  m && m < u && (u = m), r.height = Math.min(r.height, u), S = un(t, l, r, k, K, p, f, b, v, h), M = Bo(N, S[N], r[L], l, c, s, f), S[N] += M;
  let $ = {}, j = t[N] + 0.5 * t[L] - S[N] - o[pt[N]];
  const w = v / 2 + h;
  var A, g, x, P;
  const C = pt[N] === "left" ? ((A = o.left) !== null && A !== void 0 ? A : 0) + ((g = o.right) !== null && g !== void 0 ? g : 0) : ((x = o.top) !== null && x !== void 0 ? x : 0) + ((P = o.bottom) !== null && P !== void 0 ? P : 0), U = r[L] - C - v / 2 - h, W = t[N] + v / 2 - (S[N] + o[pt[N]]), H = t[N] + t[L] - v / 2 - (S[N] + o[pt[N]]), ne = Tn(j, W, H);
  return $[N] = Tn(ne, w, U), {
    position: S,
    maxHeight: u,
    arrowOffsetLeft: $.left,
    arrowOffsetTop: $.top,
    placement: k.placement
  };
}
function Dd(e) {
  let { placement: t, targetNode: r, overlayNode: n, scrollNode: o, padding: s, shouldFlip: a, boundaryElement: l, offset: c, crossOffset: f, maxHeight: d, arrowSize: p = 0, arrowBoundaryOffset: b = 0 } = e, m = n instanceof HTMLElement ? zd(n) : document.documentElement, v = m === document.documentElement;
  const h = window.getComputedStyle(m).position;
  let k = !!h && h !== "static", E = v ? er(r) : Wo(r, m);
  if (!v) {
    let { marginTop: $, marginLeft: j } = window.getComputedStyle(r);
    E.top += parseInt($, 10) || 0, E.left += parseInt(j, 10) || 0;
  }
  let N = er(n), L = Od(n);
  var O, R;
  N.width += ((O = L.left) !== null && O !== void 0 ? O : 0) + ((R = L.right) !== null && R !== void 0 ? R : 0);
  var S, K;
  N.height += ((S = L.top) !== null && S !== void 0 ? S : 0) + ((K = L.bottom) !== null && K !== void 0 ? K : 0);
  let _ = Id(o), T = Vo(l), M = Vo(m), u = l.tagName === "BODY" ? er(m) : Wo(m, l);
  return m.tagName === "HTML" && l.tagName === "BODY" && (M.scroll.top = 0, M.scroll.left = 0), _d(t, E, N, _, L, s, a, T, M, u, c, f, k, d, p, b);
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
  let { direction: t } = Qs(), { arrowSize: r = 0, targetRef: n, overlayRef: o, scrollRef: s = o, placement: a = "bottom", containerPadding: l = 12, shouldFlip: c = !0, boundaryElement: f = typeof document < "u" ? document.body : null, offset: d = 0, crossOffset: p = 0, shouldUpdatePosition: b = !0, isOpen: m = !0, onClose: v, maxHeight: h, arrowBoundaryOffset: k = 0 } = e, [E, N] = te(null), L = [
    b,
    a,
    o.current,
    n.current,
    s.current,
    l,
    c,
    f,
    d,
    p,
    m,
    t,
    h,
    k,
    r
  ], O = re(Le == null ? void 0 : Le.scale);
  ue(() => {
    m && (O.current = Le == null ? void 0 : Le.scale);
  }, [
    m
  ]);
  let R = pe(() => {
    if (b === !1 || !m || !o.current || !n.current || !f || (Le == null ? void 0 : Le.scale) !== O.current) return;
    let M = null;
    if (s.current && s.current.contains(document.activeElement)) {
      var u;
      let P = (u = document.activeElement) === null || u === void 0 ? void 0 : u.getBoundingClientRect(), C = s.current.getBoundingClientRect();
      var $;
      if (M = {
        type: "top",
        offset: (($ = P == null ? void 0 : P.top) !== null && $ !== void 0 ? $ : 0) - C.top
      }, M.offset > C.height / 2) {
        M.type = "bottom";
        var j;
        M.offset = ((j = P == null ? void 0 : P.bottom) !== null && j !== void 0 ? j : 0) - C.bottom;
      }
    }
    let w = o.current;
    if (!h && o.current) {
      var A;
      w.style.top = "0px", w.style.bottom = "";
      var g;
      w.style.maxHeight = ((g = (A = window.visualViewport) === null || A === void 0 ? void 0 : A.height) !== null && g !== void 0 ? g : window.innerHeight) + "px";
    }
    let x = Dd({
      placement: Gd(a, t),
      overlayNode: o.current,
      targetNode: n.current,
      scrollNode: s.current || o.current,
      padding: l,
      shouldFlip: c,
      boundaryElement: f,
      offset: d,
      crossOffset: p,
      maxHeight: h,
      arrowSize: r,
      arrowBoundaryOffset: k
    });
    if (x.position) {
      if (w.style.top = "", w.style.bottom = "", w.style.left = "", w.style.right = "", Object.keys(x.position).forEach((P) => w.style[P] = x.position[P] + "px"), w.style.maxHeight = x.maxHeight != null ? x.maxHeight + "px" : "", M && document.activeElement && s.current) {
        let P = document.activeElement.getBoundingClientRect(), C = s.current.getBoundingClientRect(), U = P[M.type] - C[M.type];
        s.current.scrollTop += U - M.offset;
      }
      N(x);
    }
  }, L);
  Ae(R, L), Bd(R), zo({
    ref: o,
    onResize: R
  }), zo({
    ref: n,
    onResize: R
  });
  let S = re(!1);
  Ae(() => {
    let M, u = () => {
      S.current = !0, clearTimeout(M), M = setTimeout(() => {
        S.current = !1;
      }, 500), R();
    }, $ = () => {
      S.current && u();
    };
    return Le == null || Le.addEventListener("resize", u), Le == null || Le.addEventListener("scroll", $), () => {
      Le == null || Le.removeEventListener("resize", u), Le == null || Le.removeEventListener("scroll", $);
    };
  }, [
    R
  ]);
  let K = pe(() => {
    S.current || v == null || v();
  }, [
    v,
    S
  ]);
  Fd({
    triggerRef: n,
    isOpen: m,
    onClose: v && K
  });
  var _, T;
  return {
    overlayProps: {
      style: {
        position: "absolute",
        zIndex: 1e5,
        ...E == null ? void 0 : E.position,
        maxHeight: (_ = E == null ? void 0 : E.maxHeight) !== null && _ !== void 0 ? _ : "100vh"
      }
    },
    placement: (T = E == null ? void 0 : E.placement) !== null && T !== void 0 ? T : null,
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
    cancelAnimationFrame(f), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", s, !0), t.removeEventListener("focusin", l, !0), t.removeEventListener("focus", a, !0), Br = !1, n = !1;
  }, f = requestAnimationFrame(c);
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
    let c, f = 0, d, p = null;
    n.clientX != null && n.clientY != null && (d = n.clientX, p = n.clientY), l && (d != null && p != null ? (c = d - l.left, f = p - l.top) : (c = l.width / 2, f = l.height / 2)), this.type = t, this.pointerType = r, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = c, this.y = f;
  }
}
const Xo = Symbol("linkClicked"), Zo = "react-aria-pressable-style", Jo = "data-react-aria-pressable";
function Xd(e) {
  let { onPress: t, onPressChange: r, onPressStart: n, onPressEnd: o, onPressUp: s, onClick: a, isDisabled: l, isPressed: c, preventFocusOnPress: f, shouldCancelOnPointerExit: d, allowTextSelectionOnPress: p, ref: b, ...m } = qd(e), [v, h] = te(!1), k = re({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: E, removeAllGlobalListeners: N } = to(), L = nt((u, $) => {
    let j = k.current;
    if (l || j.didFirePressStart) return !1;
    let w = !0;
    if (j.isTriggeringEvent = !0, n) {
      let A = new Rr("pressstart", $, u);
      n(A), w = A.shouldStopPropagation;
    }
    return r && r(!0), j.isTriggeringEvent = !1, j.didFirePressStart = !0, h(!0), w;
  }), O = nt((u, $, j = !0) => {
    let w = k.current;
    if (!w.didFirePressStart) return !1;
    w.didFirePressStart = !1, w.isTriggeringEvent = !0;
    let A = !0;
    if (o) {
      let g = new Rr("pressend", $, u);
      o(g), A = g.shouldStopPropagation;
    }
    if (r && r(!1), h(!1), t && j && !l) {
      let g = new Rr("press", $, u);
      t(g), A && (A = g.shouldStopPropagation);
    }
    return w.isTriggeringEvent = !1, A;
  }), R = nt((u, $) => {
    let j = k.current;
    if (l) return !1;
    if (s) {
      j.isTriggeringEvent = !0;
      let w = new Rr("pressup", $, u);
      return s(w), j.isTriggeringEvent = !1, w.shouldStopPropagation;
    }
    return !0;
  }), S = nt((u) => {
    let $ = k.current;
    if ($.isPressed && $.target) {
      $.didFirePressStart && $.pointerType != null && O(Dt($.target, u), $.pointerType, !1), $.isPressed = !1, $.isOverTarget = !1, $.activePointerId = null, $.pointerType = null, N(), p || fn($.target);
      for (let j of $.disposables) j();
      $.disposables = [];
    }
  }), K = nt((u) => {
    d && S(u);
  }), _ = nt((u) => {
    a == null || a(u);
  }), T = nt((u, $) => {
    if (a) {
      let j = new MouseEvent("click", u);
      ua(j, $), a(no(j));
    }
  }), M = _e(() => {
    let u = k.current, $ = {
      onKeyDown(w) {
        if (pn(w.nativeEvent, w.currentTarget) && Ce(w.currentTarget, ye(w.nativeEvent))) {
          var A;
          ts(ye(w.nativeEvent), w.key) && w.preventDefault();
          let g = !0;
          if (!u.isPressed && !w.repeat) {
            u.target = w.currentTarget, u.isPressed = !0, u.pointerType = "keyboard", g = L(w, "keyboard");
            let x = w.currentTarget, P = (C) => {
              pn(C, x) && !C.repeat && Ce(x, ye(C)) && u.target && R(Dt(u.target, C), "keyboard");
            };
            E($e(w.currentTarget), "keyup", kr(P, j), !0);
          }
          g && w.stopPropagation(), w.metaKey && rr() && ((A = u.metaKeyEvents) === null || A === void 0 || A.set(w.key, w.nativeEvent));
        } else w.key === "Meta" && (u.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(w) {
        if (!(w && !Ce(w.currentTarget, ye(w.nativeEvent))) && w && w.button === 0 && !u.isTriggeringEvent && !Nr.isOpening) {
          let A = !0;
          if (l && w.preventDefault(), !u.ignoreEmulatedMouseEvents && !u.isPressed && (u.pointerType === "virtual" || Pn(w.nativeEvent))) {
            let g = L(w, "virtual"), x = R(w, "virtual"), P = O(w, "virtual");
            _(w), A = g && x && P;
          } else if (u.isPressed && u.pointerType !== "keyboard") {
            let g = u.pointerType || w.nativeEvent.pointerType || "virtual", x = R(Dt(w.currentTarget, w), g), P = O(Dt(w.currentTarget, w), g, !0);
            A = x && P, u.isOverTarget = !1, _(w), S(w);
          }
          u.ignoreEmulatedMouseEvents = !1, A && w.stopPropagation();
        }
      }
    }, j = (w) => {
      var A;
      if (u.isPressed && u.target && pn(w, u.target)) {
        var g;
        ts(ye(w), w.key) && w.preventDefault();
        let P = ye(w), C = Ce(u.target, ye(w));
        O(Dt(u.target, w), "keyboard", C), C && T(w, u.target), N(), w.key !== "Enter" && so(u.target) && Ce(u.target, P) && !w[Xo] && (w[Xo] = !0, Nr(u.target, w, !1)), u.isPressed = !1, (g = u.metaKeyEvents) === null || g === void 0 || g.delete(w.key);
      } else if (w.key === "Meta" && (!((A = u.metaKeyEvents) === null || A === void 0) && A.size)) {
        var x;
        let P = u.metaKeyEvents;
        u.metaKeyEvents = void 0;
        for (let C of P.values()) (x = u.target) === null || x === void 0 || x.dispatchEvent(new KeyboardEvent("keyup", C));
      }
    };
    if (typeof PointerEvent < "u") {
      $.onPointerDown = (g) => {
        if (g.button !== 0 || !Ce(g.currentTarget, ye(g.nativeEvent))) return;
        if (Td(g.nativeEvent)) {
          u.pointerType = "virtual";
          return;
        }
        u.pointerType = g.pointerType;
        let x = !0;
        if (!u.isPressed) {
          u.isPressed = !0, u.isOverTarget = !0, u.activePointerId = g.pointerId, u.target = g.currentTarget, p || Yo(u.target), x = L(g, u.pointerType);
          let P = ye(g.nativeEvent);
          "releasePointerCapture" in P && P.releasePointerCapture(g.pointerId), E($e(g.currentTarget), "pointerup", w, !1), E($e(g.currentTarget), "pointercancel", A, !1);
        }
        x && g.stopPropagation();
      }, $.onMouseDown = (g) => {
        if (Ce(g.currentTarget, ye(g.nativeEvent)) && g.button === 0) {
          if (f) {
            let x = Uo(g.target);
            x && u.disposables.push(x);
          }
          g.stopPropagation();
        }
      }, $.onPointerUp = (g) => {
        !Ce(g.currentTarget, ye(g.nativeEvent)) || u.pointerType === "virtual" || g.button === 0 && !u.isPressed && R(g, u.pointerType || g.pointerType);
      }, $.onPointerEnter = (g) => {
        g.pointerId === u.activePointerId && u.target && !u.isOverTarget && u.pointerType != null && (u.isOverTarget = !0, L(Dt(u.target, g), u.pointerType));
      }, $.onPointerLeave = (g) => {
        g.pointerId === u.activePointerId && u.target && u.isOverTarget && u.pointerType != null && (u.isOverTarget = !1, O(Dt(u.target, g), u.pointerType, !1), K(g));
      };
      let w = (g) => {
        if (g.pointerId === u.activePointerId && u.isPressed && g.button === 0 && u.target) {
          if (Ce(u.target, ye(g)) && u.pointerType != null) {
            let x = !1, P = setTimeout(() => {
              u.isPressed && u.target instanceof HTMLElement && (x ? S(g) : (tr(u.target), u.target.click()));
            }, 80);
            E(g.currentTarget, "click", () => x = !0, !0), u.disposables.push(() => clearTimeout(P));
          } else S(g);
          u.isOverTarget = !1;
        }
      }, A = (g) => {
        S(g);
      };
      $.onDragStart = (g) => {
        Ce(g.currentTarget, ye(g.nativeEvent)) && S(g);
      };
    } else if (process.env.NODE_ENV === "test") {
      $.onMouseDown = (g) => {
        if (g.button !== 0 || !Ce(g.currentTarget, ye(g.nativeEvent))) return;
        if (u.ignoreEmulatedMouseEvents) {
          g.stopPropagation();
          return;
        }
        if (u.isPressed = !0, u.isOverTarget = !0, u.target = g.currentTarget, u.pointerType = Pn(g.nativeEvent) ? "virtual" : "mouse", Wi(() => L(g, u.pointerType)) && g.stopPropagation(), f) {
          let P = Uo(g.target);
          P && u.disposables.push(P);
        }
        E($e(g.currentTarget), "mouseup", w, !1);
      }, $.onMouseEnter = (g) => {
        if (!Ce(g.currentTarget, ye(g.nativeEvent))) return;
        let x = !0;
        u.isPressed && !u.ignoreEmulatedMouseEvents && u.pointerType != null && (u.isOverTarget = !0, x = L(g, u.pointerType)), x && g.stopPropagation();
      }, $.onMouseLeave = (g) => {
        if (!Ce(g.currentTarget, ye(g.nativeEvent))) return;
        let x = !0;
        u.isPressed && !u.ignoreEmulatedMouseEvents && u.pointerType != null && (u.isOverTarget = !1, x = O(g, u.pointerType, !1), K(g)), x && g.stopPropagation();
      }, $.onMouseUp = (g) => {
        Ce(g.currentTarget, ye(g.nativeEvent)) && !u.ignoreEmulatedMouseEvents && g.button === 0 && !u.isPressed && R(g, u.pointerType || "mouse");
      };
      let w = (g) => {
        if (g.button === 0) {
          if (u.ignoreEmulatedMouseEvents) {
            u.ignoreEmulatedMouseEvents = !1;
            return;
          }
          u.target && u.target.contains(g.target) && u.pointerType != null || S(g), u.isOverTarget = !1;
        }
      };
      $.onTouchStart = (g) => {
        if (!Ce(g.currentTarget, ye(g.nativeEvent))) return;
        let x = Zd(g.nativeEvent);
        if (!x) return;
        u.activePointerId = x.identifier, u.ignoreEmulatedMouseEvents = !0, u.isOverTarget = !0, u.isPressed = !0, u.target = g.currentTarget, u.pointerType = "touch", p || Yo(u.target), L(Tt(u.target, g), u.pointerType) && g.stopPropagation(), E(at(g.currentTarget), "scroll", A, !0);
      }, $.onTouchMove = (g) => {
        if (!Ce(g.currentTarget, ye(g.nativeEvent))) return;
        if (!u.isPressed) {
          g.stopPropagation();
          return;
        }
        let x = Qo(g.nativeEvent, u.activePointerId), P = !0;
        x && es(x, g.currentTarget) ? !u.isOverTarget && u.pointerType != null && (u.isOverTarget = !0, P = L(Tt(u.target, g), u.pointerType)) : u.isOverTarget && u.pointerType != null && (u.isOverTarget = !1, P = O(Tt(u.target, g), u.pointerType, !1), K(Tt(u.target, g))), P && g.stopPropagation();
      }, $.onTouchEnd = (g) => {
        if (!Ce(g.currentTarget, ye(g.nativeEvent))) return;
        if (!u.isPressed) {
          g.stopPropagation();
          return;
        }
        let x = Qo(g.nativeEvent, u.activePointerId), P = !0;
        x && es(x, g.currentTarget) && u.pointerType != null ? (R(Tt(u.target, g), u.pointerType), P = O(Tt(u.target, g), u.pointerType), T(g.nativeEvent, u.target)) : u.isOverTarget && u.pointerType != null && (P = O(Tt(u.target, g), u.pointerType, !1)), P && g.stopPropagation(), u.isPressed = !1, u.activePointerId = null, u.isOverTarget = !1, u.ignoreEmulatedMouseEvents = !0, u.target && !p && fn(u.target), N();
      }, $.onTouchCancel = (g) => {
        Ce(g.currentTarget, ye(g.nativeEvent)) && (g.stopPropagation(), u.isPressed && S(Tt(u.target, g)));
      };
      let A = (g) => {
        u.isPressed && Ce(ye(g), u.target) && S({
          currentTarget: u.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      $.onDragStart = (g) => {
        Ce(g.currentTarget, ye(g.nativeEvent)) && S(g);
      };
    }
    return $;
  }, [
    E,
    l,
    f,
    N,
    p,
    S,
    K,
    O,
    L,
    R,
    _,
    T
  ]);
  return ue(() => {
    if (!b || process.env.NODE_ENV === "test") return;
    const u = $e(b.current);
    if (!u || !u.head || u.getElementById(Zo)) return;
    const $ = u.createElement("style");
    $.id = Zo, $.textContent = `
@layer {
  [${Jo}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), u.head.prepend($);
  }, [
    b
  ]), ue(() => {
    let u = k.current;
    return () => {
      var $;
      p || fn(($ = u.target) !== null && $ !== void 0 ? $ : void 0);
      for (let j of u.disposables) j();
      u.disposables = [];
    };
  }, [
    p
  ]), {
    isPressed: c || v,
    pressProps: Gt(m, M, {
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
    const f = $e(c.target), d = f ? Qe(f) : Qe();
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
  }), { addGlobalListener: a, removeAllGlobalListeners: l } = to(), c = pe((p) => {
    p.currentTarget.contains(p.target) && s.current.isFocusWithin && !p.currentTarget.contains(p.relatedTarget) && (s.current.isFocusWithin = !1, l(), r && r(p), o && o(!1));
  }, [
    r,
    o,
    s,
    l
  ]), f = fa(c), d = pe((p) => {
    if (!p.currentTarget.contains(p.target)) return;
    const b = $e(p.target), m = Qe(b);
    if (!s.current.isFocusWithin && m === ye(p.nativeEvent)) {
      n && n(p), o && o(!0), s.current.isFocusWithin = !0, f(p);
      let v = p.currentTarget;
      a(b, "focus", (h) => {
        if (s.current.isFocusWithin && !Ce(v, h.target)) {
          let k = new b.defaultView.FocusEvent("blur", {
            relatedTarget: h.target
          });
          ua(k, v);
          let E = no(k);
          c(E);
        }
      }, {
        capture: !0
      });
    }
  }, [
    n,
    o,
    f,
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
  let { addGlobalListener: c, removeAllGlobalListeners: f } = to(), { hoverProps: d, triggerHoverEnd: p } = _e(() => {
    let b = (h, k) => {
      if (l.pointerType = k, o || k === "touch" || l.isHovered || !h.currentTarget.contains(h.target)) return;
      l.isHovered = !0;
      let E = h.currentTarget;
      l.target = E, c($e(h.target), "pointerover", (N) => {
        l.isHovered && l.target && !Ce(l.target, N.target) && m(N, N.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: E,
        pointerType: k
      }), r && r(!0), a(!0);
    }, m = (h, k) => {
      let E = l.target;
      l.pointerType = "", l.target = null, !(k === "touch" || !l.isHovered || !E) && (l.isHovered = !1, f(), n && n({
        type: "hoverend",
        target: E,
        pointerType: k
      }), r && r(!1), a(!1));
    }, v = {};
    return typeof PointerEvent < "u" ? (v.onPointerEnter = (h) => {
      Wr && h.pointerType === "mouse" || b(h, h.pointerType);
    }, v.onPointerLeave = (h) => {
      !o && h.currentTarget.contains(h.target) && m(h, h.pointerType);
    }) : process.env.NODE_ENV === "test" && (v.onTouchStart = () => {
      l.ignoreEmulatedMouseEvents = !0;
    }, v.onMouseEnter = (h) => {
      !l.ignoreEmulatedMouseEvents && !Wr && b(h, "mouse"), l.ignoreEmulatedMouseEvents = !1;
    }, v.onMouseLeave = (h) => {
      !o && h.currentTarget.contains(h.target) && m(h, "mouse");
    }), {
      hoverProps: v,
      triggerHoverEnd: m
    };
  }, [
    t,
    r,
    n,
    o,
    l,
    c,
    f
  ]);
  return ue(() => {
    o && p({
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
    const f = t.current, d = $e(f);
    if (typeof PointerEvent < "u") {
      let p = (b) => {
        c.isPointerDown && Lr(b, t) && l(b), c.isPointerDown = !1;
      };
      return d.addEventListener("pointerdown", a, !0), d.addEventListener("click", p, !0), () => {
        d.removeEventListener("pointerdown", a, !0), d.removeEventListener("click", p, !0);
      };
    } else if (process.env.NODE_ENV === "test") {
      let p = (m) => {
        c.ignoreEmulatedMouseEvents ? c.ignoreEmulatedMouseEvents = !1 : c.isPointerDown && Lr(m, t) && l(m), c.isPointerDown = !1;
      }, b = (m) => {
        c.ignoreEmulatedMouseEvents = !0, c.isPointerDown && Lr(m, t) && l(m), c.isPointerDown = !1;
      };
      return d.addEventListener("mousedown", a, !0), d.addEventListener("mouseup", p, !0), d.addEventListener("touchstart", a, !0), d.addEventListener("touchend", b, !0), () => {
        d.removeEventListener("mousedown", a, !0), d.removeEventListener("mouseup", p, !0), d.removeEventListener("touchstart", a, !0), d.removeEventListener("touchend", b, !0);
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
  let { children: t, contain: r, restoreFocus: n, autoFocus: o } = e, s = re(null), a = re(null), l = re([]), { parentNode: c } = mt(os) || {}, f = _e(() => new _n({
    scopeRef: l
  }), [
    l
  ]);
  Ae(() => {
    let b = c || Me.root;
    if (Me.getTreeNode(b.scopeRef) && Pe && !Kr(Pe, b.scopeRef)) {
      let m = Me.getTreeNode(Pe);
      m && (b = m);
    }
    b.addChild(f), Me.addNode(f);
  }, [
    f,
    c
  ]), Ae(() => {
    let b = Me.getTreeNode(l);
    b && (b.contain = !!r);
  }, [
    r
  ]), Ae(() => {
    var b;
    let m = (b = s.current) === null || b === void 0 ? void 0 : b.nextSibling, v = [], h = (k) => k.stopPropagation();
    for (; m && m !== a.current; )
      v.push(m), m.addEventListener(On, h), m = m.nextSibling;
    return l.current = v, () => {
      for (let k of v) k.removeEventListener(On, h);
    };
  }, [
    t
  ]), wu(l, n, r), vu(l, r), $u(l, n, r), yu(l, o), ue(() => {
    const b = Qe($e(l.current ? l.current[0] : void 0));
    let m = null;
    if (lt(b, l.current)) {
      for (let v of Me.traverse()) v.scopeRef && lt(b, v.scopeRef.current) && (m = v);
      m === Me.getTreeNode(l) && (Pe = m.scopeRef);
    }
  }, [
    l
  ]), Ae(() => () => {
    var b, m, v;
    let h = (v = (m = Me.getTreeNode(l)) === null || m === void 0 || (b = m.parent) === null || b === void 0 ? void 0 : b.scopeRef) !== null && v !== void 0 ? v : null;
    (l === Pe || Kr(l, Pe)) && (!h || Me.getTreeNode(h)) && (Pe = h), Me.removeTreeNode(l);
  }, [
    l
  ]);
  let d = _e(() => hu(l), []), p = _e(() => ({
    focusManager: d,
    parentNode: f
  }), [
    f,
    d
  ]);
  return /* @__PURE__ */ ie.createElement(os.Provider, {
    value: p
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
      let c = n || Qe($e((l = r[0]) !== null && l !== void 0 ? l : void 0)), f = r[0].previousElementSibling, d = Vt(r), p = At(d, {
        tabbable: o,
        accept: a
      }, r);
      p.currentNode = lt(c, r) ? c : f;
      let b = p.nextNode();
      return !b && s && (p.currentNode = f, b = p.nextNode()), b && $t(b, !0), b;
    },
    focusPrevious(t = {}) {
      let r = e.current, { from: n, tabbable: o, wrap: s, accept: a } = t;
      var l;
      let c = n || Qe($e((l = r[0]) !== null && l !== void 0 ? l : void 0)), f = r[r.length - 1].nextElementSibling, d = Vt(r), p = At(d, {
        tabbable: o,
        accept: a
      }, r);
      p.currentNode = lt(c, r) ? c : f;
      let b = p.previousNode();
      return !b && s && (p.currentNode = f, b = p.previousNode()), b && $t(b, !0), b;
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
    let a = (f) => {
      if (f.key !== "Tab" || f.altKey || f.ctrlKey || f.metaKey || !hr(e) || f.isComposing) return;
      let d = Qe(s), p = e.current;
      if (!p || !lt(d, p)) return;
      let b = Vt(p), m = At(b, {
        tabbable: !0
      }, p);
      if (!d) return;
      m.currentNode = d;
      let v = f.shiftKey ? m.previousNode() : m.nextNode();
      v || (m.currentNode = f.shiftKey ? p[p.length - 1].nextElementSibling : p[0].previousElementSibling, v = f.shiftKey ? m.previousNode() : m.nextNode()), f.preventDefault(), v && $t(v, !0);
    }, l = (f) => {
      (!Pe || Kr(Pe, e)) && lt(ye(f), e.current) ? (Pe = e, r.current = ye(f)) : hr(e) && !Lt(ye(f), e) ? r.current ? r.current.focus() : Pe && Pe.current && Mn(Pe.current) : hr(e) && (r.current = ye(f));
    }, c = (f) => {
      n.current && cancelAnimationFrame(n.current), n.current = requestAnimationFrame(() => {
        let d = ya(), p = (d === "virtual" || d === null) && eo() && na(), b = Qe(s);
        if (!p && b && hr(e) && !Lt(b, e)) {
          Pe = e;
          let v = ye(f);
          if (v && v.isConnected) {
            var m;
            r.current = v, (m = r.current) === null || m === void 0 || m.focus();
          } else Pe.current && Mn(Pe.current);
        }
      });
    };
    return s.addEventListener("keydown", a, !1), s.addEventListener("focusin", l, !1), o == null || o.forEach((f) => f.addEventListener("focusin", l, !1)), o == null || o.forEach((f) => f.addEventListener("focusout", c, !1)), () => {
      s.removeEventListener("keydown", a, !1), s.removeEventListener("focusin", l, !1), o == null || o.forEach((f) => f.removeEventListener("focusin", l, !1)), o == null || o.forEach((f) => f.removeEventListener("focusout", c, !1));
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
      let f = c.nodeToRestore, d = At(o.body, {
        tabbable: !0
      });
      d.currentNode = l;
      let p = a.shiftKey ? d.previousNode() : d.nextNode();
      if ((!f || !f.isConnected || f === o.body) && (f = void 0, c.nodeToRestore = void 0), (!p || !Lt(p, e)) && f) {
        d.currentNode = f;
        do
          p = a.shiftKey ? d.previousNode() : d.nextNode();
        while (Lt(p, e));
        a.preventDefault(), a.stopPropagation(), p ? $t(p, !0) : $a(f) ? $t(f, !0) : l.blur();
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
        let c = l.nodeToRestore, f = Qe(o);
        if (t && c && (f && Lt(f, e) || f === o.body && ss(e))) {
          let d = Me.clone();
          requestAnimationFrame(() => {
            if (o.activeElement === o.body) {
              let p = d.getTreeNode(e);
              for (; p; ) {
                if (p.nodeToRestore && p.nodeToRestore.isConnected) {
                  as(p.nodeToRestore);
                  return;
                }
                p = p.parent;
              }
              for (p = d.getTreeNode(e); p; ) {
                if (p.scopeRef && p.scopeRef.current && Me.getTreeNode(p.scopeRef)) {
                  let b = ka(p.scopeRef.current, !0);
                  as(b);
                  return;
                }
                p = p.parent;
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
  }), [s, a] = te(!1), [l, c] = te(() => o.current.isFocused && o.current.isFocusVisible), f = pe(() => c(o.current.isFocused && o.current.isFocusVisible), []), d = pe((m) => {
    o.current.isFocused = m, a(m), f();
  }, [
    f
  ]);
  iu((m) => {
    o.current.isFocusVisible = m, f();
  }, [], {
    isTextInput: r
  });
  let { focusProps: p } = wa({
    isDisabled: n,
    onFocusChange: d
  }), { focusWithinProps: b } = io({
    isDisabled: !n,
    onFocusWithinChange: d
  });
  return {
    isFocused: s,
    isFocusVisible: l,
    focusProps: n ? b : p
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
  let e, t, r = (f) => {
    e = aa(f.target, !0), !(e === document.documentElement && e === document.body) && e instanceof HTMLElement && window.getComputedStyle(e).overscrollBehavior === "auto" && (t = Bt(e, "overscrollBehavior", "contain"));
  }, n = (f) => {
    if (!e || e === document.documentElement || e === document.body) {
      f.preventDefault();
      return;
    }
    e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && f.preventDefault();
  }, o = () => {
    t && t();
  }, s = (f) => {
    let d = f.target;
    Tu(d) && (l(), d.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      d.style.transform = "", mn && (mn.height < window.innerHeight ? requestAnimationFrame(() => {
        is(d);
      }) : mn.addEventListener("resize", () => is(d), {
        once: !0
      }));
    }));
  }, a = null, l = () => {
    if (a) return;
    let f = () => {
      window.scrollTo(0, 0);
    }, d = window.pageXOffset, p = window.pageYOffset;
    a = kr(fr(window, "scroll", f), Bt(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), Bt(document.documentElement, "overflow", "hidden"), Bt(document.body, "marginTop", `-${p}px`), () => {
      window.scrollTo(d, p);
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
    let a = 0, l = 0, c = 0, f;
    for (let v = 0; v < o.length; v++) {
      let h = o[v];
      if (a === 0 && l === 0) {
        if (h === Fn) {
          s.push(o.slice(c, v)), c = v + Gu;
          continue;
        }
        if (h === "/") {
          f = v;
          continue;
        }
      }
      h === "[" ? a++ : h === "]" ? a-- : h === "(" ? l++ : h === ")" && l--;
    }
    const d = s.length === 0 ? o : o.substring(c), p = Wu(d), b = p !== d, m = f && f > c ? f - c : void 0;
    return {
      modifiers: s,
      hasImportantModifier: b,
      baseClassName: p,
      maybePostfixModifierPosition: m
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
  for (let f = l.length - 1; f >= 0; f -= 1) {
    const d = l[f], {
      isExternal: p,
      modifiers: b,
      hasImportantModifier: m,
      baseClassName: v,
      maybePostfixModifierPosition: h
    } = r(d);
    if (p) {
      c = d + (c.length > 0 ? " " + c : c);
      continue;
    }
    let k = !!h, E = n(k ? v.substring(0, h) : v);
    if (!E) {
      if (!k) {
        c = d + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (E = n(v), !E) {
        c = d + (c.length > 0 ? " " + c : c);
        continue;
      }
      k = !1;
    }
    const N = s(b).join(":"), L = m ? N + zn : N, O = L + E;
    if (a.includes(O))
      continue;
    a.push(O);
    const R = o(E, k);
    for (let S = 0; S < R.length; ++S) {
      const K = R[S];
      a.push(L + K);
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
    const f = t.reduce((d, p) => p(d), e());
    return r = Uu(f), n = r.cache.get, o = r.cache.set, s = l, l(c);
  }
  function l(c) {
    const f = n(c);
    if (f)
      return f;
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
  const e = Be("color"), t = Be("font"), r = Be("text"), n = Be("font-weight"), o = Be("tracking"), s = Be("leading"), a = Be("breakpoint"), l = Be("container"), c = Be("spacing"), f = Be("radius"), d = Be("shadow"), p = Be("inset-shadow"), b = Be("drop-shadow"), m = Be("blur"), v = Be("perspective"), h = Be("aspect"), k = Be("ease"), E = Be("animate"), N = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], L = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], O = () => ["auto", "hidden", "clip", "visible", "scroll"], R = () => ["auto", "contain", "none"], S = () => [Q, J, c], K = () => [Yt, "full", "auto", ...S()], _ = () => [zt, "none", "subgrid", Q, J], T = () => ["auto", {
    span: ["full", zt, Q, J]
  }, Q, J], M = () => [zt, "auto", Q, J], u = () => ["auto", "min", "max", "fr", Q, J], $ = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], j = () => ["start", "end", "center", "stretch"], w = () => ["auto", ...S()], A = () => [Yt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...S()], g = () => [e, Q, J], x = () => [gs, Ft], P = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    f,
    Q,
    J
  ], C = () => ["", me, Ir, Ft], U = () => ["solid", "dashed", "dotted", "double"], W = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], H = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    m,
    Q,
    J
  ], ne = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Q, J], V = () => ["none", me, Q, J], G = () => ["none", me, Q, J], q = () => [me, Q, J], D = () => [Yt, "full", ...S()];
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
        object: [...L(), J, Q]
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
        col: T()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": M()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": M()
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
        row: T()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": M()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": M()
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
        "auto-cols": u()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": u()
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
        justify: [...$(), "normal"]
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
        content: ["normal", ...$()]
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
        "place-content": $()
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
        m: w()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: w()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: w()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: w()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: w()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: w()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: w()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: w()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: w()
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
        bg: [...L(), gf, df]
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
        from: x()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: x()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: x()
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
        "inset-shadow": ["none", Q, J, p]
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
        "inset-ring": C()
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
        "mix-blend": [...W(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": W()
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
          b,
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
        ease: ["linear", "initial", k, Q, J]
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
        perspective: [v, Q, J]
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
        rotate: V()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": V()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": V()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": V()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: G()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": G()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": G()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": G()
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
  let { extend: r = null, slots: n = {}, variants: o = {}, compoundVariants: s = [], compoundSlots: a = [], defaultVariants: l = {} } = e, c = { ...jf, ...t }, f = r != null && r.base ? Er(r.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, d = r != null && r.variants && !Ze(r.variants) ? ui(o, r.variants) : o, p = r != null && r.defaultVariants && !Ze(r.defaultVariants) ? { ...r.defaultVariants, ...l } : l;
  !Ze(c.twMergeConfig) && !_u(c.twMergeConfig, wt) && (Gn = !0, wt = c.twMergeConfig);
  let b = Ze(r == null ? void 0 : r.slots), m = Ze(n) ? {} : { base: Er(e == null ? void 0 : e.base, b && (r == null ? void 0 : r.base)), ...n }, v = b ? m : ms({ ...r == null ? void 0 : r.slots }, Ze(m) ? { base: e == null ? void 0 : e.base } : m), h = Ze(r == null ? void 0 : r.compoundVariants) ? s : di(r == null ? void 0 : r.compoundVariants, s), k = (N) => {
    if (Ze(d) && Ze(n) && b) return pr(f, N == null ? void 0 : N.class, N == null ? void 0 : N.className)(c);
    if (h && !Array.isArray(h)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof h}`);
    if (a && !Array.isArray(a)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof a}`);
    let L = ($, j, w = [], A) => {
      let g = w;
      if (typeof j == "string") g = g.concat(us(j).split(" ").map((x) => `${$}:${x}`));
      else if (Array.isArray(j)) g = g.concat(j.reduce((x, P) => x.concat(`${$}:${P}`), []));
      else if (typeof j == "object" && typeof A == "string") {
        for (let x in j) if (j.hasOwnProperty(x) && x === A) {
          let P = j[x];
          if (P && typeof P == "string") {
            let C = us(P);
            g[A] ? g[A] = g[A].concat(C.split(" ").map((U) => `${$}:${U}`)) : g[A] = C.split(" ").map((U) => `${$}:${U}`);
          } else Array.isArray(P) && P.length > 0 && (g[A] = P.reduce((C, U) => C.concat(`${$}:${U}`), []));
        }
      }
      return g;
    }, O = ($, j = d, w = null, A = null) => {
      var g;
      let x = j[$];
      if (!x || Ze(x)) return null;
      let P = (g = A == null ? void 0 : A[$]) != null ? g : N == null ? void 0 : N[$];
      if (P === null) return null;
      let C = ds(P), U = Array.isArray(c.responsiveVariants) && c.responsiveVariants.length > 0 || c.responsiveVariants === !0, W = p == null ? void 0 : p[$], H = [];
      if (typeof C == "object" && U) for (let [G, q] of Object.entries(C)) {
        let D = x[q];
        if (G === "initial") {
          W = q;
          continue;
        }
        Array.isArray(c.responsiveVariants) && !c.responsiveVariants.includes(G) || (H = L(G, D, H, w));
      }
      let ne = C != null && typeof C != "object" ? C : ds(W), V = x[ne || "false"];
      return typeof H == "object" && typeof w == "string" && H[w] ? ms(H, V) : H.length > 0 ? (H.push(V), w === "base" ? H.join(" ") : H) : V;
    }, R = () => d ? Object.keys(d).map(($) => O($, d)) : null, S = ($, j) => {
      if (!d || typeof d != "object") return null;
      let w = new Array();
      for (let A in d) {
        let g = O(A, d, $, j), x = $ === "base" && typeof g == "string" ? g : g && g[$];
        x && (w[w.length] = x);
      }
      return w;
    }, K = {};
    for (let $ in N) N[$] !== void 0 && (K[$] = N[$]);
    let _ = ($, j) => {
      var w;
      let A = typeof (N == null ? void 0 : N[$]) == "object" ? { [$]: (w = N[$]) == null ? void 0 : w.initial } : {};
      return { ...p, ...K, ...A, ...j };
    }, T = ($ = [], j) => {
      let w = [];
      for (let { class: A, className: g, ...x } of $) {
        let P = !0;
        for (let [C, U] of Object.entries(x)) {
          let W = _(C, j)[C];
          if (Array.isArray(U)) {
            if (!U.includes(W)) {
              P = !1;
              break;
            }
          } else {
            let H = (ne) => ne == null || ne === !1;
            if (H(U) && H(W)) continue;
            if (W !== U) {
              P = !1;
              break;
            }
          }
        }
        P && (A && w.push(A), g && w.push(g));
      }
      return w;
    }, M = ($) => {
      let j = T(h, $);
      if (!Array.isArray(j)) return j;
      let w = {};
      for (let A of j) if (typeof A == "string" && (w.base = pr(w.base, A)(c)), typeof A == "object") for (let [g, x] of Object.entries(A)) w[g] = pr(w[g], x)(c);
      return w;
    }, u = ($) => {
      if (a.length < 1) return null;
      let j = {};
      for (let { slots: w = [], class: A, className: g, ...x } of a) {
        if (!Ze(x)) {
          let P = !0;
          for (let C of Object.keys(x)) {
            let U = _(C, $)[C];
            if (U === void 0 || (Array.isArray(x[C]) ? !x[C].includes(U) : x[C] !== U)) {
              P = !1;
              break;
            }
          }
          if (!P) continue;
        }
        for (let P of w) j[P] = j[P] || [], j[P].push([A, g]);
      }
      return j;
    };
    if (!Ze(n) || !b) {
      let $ = {};
      if (typeof v == "object" && !Ze(v)) for (let j of Object.keys(v)) $[j] = (w) => {
        var A, g;
        return pr(v[j], S(j, w), ((A = M(w)) != null ? A : [])[j], ((g = u(w)) != null ? g : [])[j], w == null ? void 0 : w.class, w == null ? void 0 : w.className)(c);
      };
      return $;
    }
    return pr(f, R(), T(h), N == null ? void 0 : N.class, N == null ? void 0 : N.className)(c);
  }, E = () => {
    if (!(!d || typeof d != "object")) return Object.keys(d);
  };
  return k.variantKeys = E(), k.extend = r, k.base = f, k.slots = v, k.variants = d, k.defaultVariants = p, k.compoundSlots = a, k.compoundVariants = h, k;
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
    for (let b of c.querySelectorAll(
      "[data-live-announcer], [data-react-aria-top-layer]"
    ))
      r.add(b);
    let f = (b) => {
      if (r.has(b) || b.parentElement && n.has(b.parentElement) && b.parentElement.getAttribute("role") !== "row")
        return NodeFilter.FILTER_REJECT;
      for (let m of r)
        if (b.contains(m))
          return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }, d = document.createTreeWalker(c, NodeFilter.SHOW_ELEMENT, { acceptNode: f }), p = f(c);
    if (p === NodeFilter.FILTER_ACCEPT && s(c), p !== NodeFilter.FILTER_REJECT) {
      let b = d.nextNode();
      for (; b != null; )
        s(b), b = d.nextNode();
    }
  }, s = (c) => {
    var f;
    let d = (f = gr.get(c)) != null ? f : 0;
    c.getAttribute("aria-hidden") === "true" && d === 0 || (d === 0 && c.setAttribute("aria-hidden", "true"), n.add(c), gr.set(c, d + 1));
  };
  Je.length && Je[Je.length - 1].disconnect(), o(t);
  let a = new MutationObserver((c) => {
    for (let f of c)
      if (!(f.type !== "childList" || f.addedNodes.length === 0) && ![...r, ...n].some((d) => d.contains(f.target))) {
        for (let d of f.removedNodes)
          d instanceof Element && (r.delete(d), n.delete(d));
        for (let d of f.addedNodes)
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
      let f = gr.get(c);
      f != null && (f === 1 ? (c.removeAttribute("aria-hidden"), gr.delete(c)) : gr.set(c, f - 1));
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
    preventFocusOnPress: f,
    // @ts-ignore - undocumented
    allowFocusWhenDisabled: d,
    onClick: p,
    href: b,
    target: m,
    rel: v,
    type: h = "button",
    allowTextSelectionOnPress: k
  } = e, E;
  r === "button" ? E = {
    type: h,
    disabled: n
  } : E = {
    role: "button",
    href: r === "a" && !n ? b : void 0,
    target: r === "a" ? m : void 0,
    type: r === "input" ? h : void 0,
    disabled: r === "input" ? n : void 0,
    "aria-disabled": !n || r === "input" ? void 0 : n,
    rel: r === "a" ? v : void 0
  };
  let { pressProps: N, isPressed: L } = Xd({
    onClick: p,
    onPressStart: s,
    onPressEnd: a,
    onPressUp: l,
    onPressChange: c,
    onPress: o,
    isDisabled: n,
    preventFocusOnPress: f,
    allowTextSelectionOnPress: k,
    ref: t
  }), { focusableProps: O } = uu(e, t);
  d && (O.tabIndex = n ? -1 : O.tabIndex);
  let R = Gt(
    O,
    N,
    ea(e, { labelable: !0 })
  );
  return {
    isPressed: L,
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
  var t, r, n, o, s, a, l, c, f;
  const d = Xf(), p = Xn(), b = !!d, {
    ref: m,
    as: v,
    children: h,
    startContent: k,
    endContent: E,
    autoFocus: N,
    className: L,
    spinner: O,
    isLoading: R = !1,
    disableRipple: S = !1,
    fullWidth: K = (t = d == null ? void 0 : d.fullWidth) != null ? t : !1,
    radius: _ = d == null ? void 0 : d.radius,
    size: T = (r = d == null ? void 0 : d.size) != null ? r : "md",
    color: M = (n = d == null ? void 0 : d.color) != null ? n : "default",
    variant: u = (o = d == null ? void 0 : d.variant) != null ? o : "solid",
    disableAnimation: $ = (a = (s = d == null ? void 0 : d.disableAnimation) != null ? s : p == null ? void 0 : p.disableAnimation) != null ? a : !1,
    isDisabled: j = (l = d == null ? void 0 : d.isDisabled) != null ? l : !1,
    isIconOnly: w = (c = d == null ? void 0 : d.isIconOnly) != null ? c : !1,
    spinnerPlacement: A = "start",
    onPress: g,
    onClick: x,
    ...P
  } = e, C = v || "button", U = typeof C == "string", W = Us(m), H = (f = S || (p == null ? void 0 : p.disableRipple)) != null ? f : $, { isFocusVisible: ne, isFocused: V, focusProps: G } = Na({
    autoFocus: N
  }), q = j || R, D = _e(
    () => Vf({
      size: T,
      color: M,
      variant: u,
      radius: _,
      fullWidth: K,
      isDisabled: q,
      isInGroup: b,
      disableAnimation: $,
      isIconOnly: w,
      className: L
    }),
    [
      T,
      M,
      u,
      _,
      K,
      q,
      b,
      w,
      $,
      L
    ]
  ), { onPress: X, onClear: xe, ripples: fe } = Qf(), Ue = pe(
    (Fe) => {
      H || q || $ || W.current && X(Fe);
    },
    [H, q, $, W, X]
  ), { buttonProps: He, isPressed: Se } = ki(
    {
      elementType: v,
      isDisabled: q,
      onPress: Xs(g, Ue),
      onClick: x,
      ...P
    },
    W
  ), { isHovered: Ye, hoverProps: Ee } = gu({ isDisabled: q }), et = pe(
    (Fe = {}) => ({
      "data-disabled": ot(q),
      "data-focus": ot(V),
      "data-pressed": ot(Se),
      "data-focus-visible": ot(ne),
      "data-hover": ot(Ye),
      "data-loading": ot(R),
      ...Rt(
        He,
        G,
        Ee,
        Ao(P, {
          enabled: U
        }),
        Ao(Fe)
      ),
      className: D
    }),
    [
      R,
      q,
      V,
      Se,
      U,
      ne,
      Ye,
      He,
      G,
      Ee,
      P,
      D
    ]
  ), tt = (Fe) => xr(Fe) ? Kn(Fe, {
    // @ts-ignore
    "aria-hidden": !0,
    focusable: !1
  }) : null, We = tt(k), ze = tt(E), dt = _e(() => ({
    sm: "sm",
    md: "sm",
    lg: "md"
  })[T], [T]), ut = pe(
    () => ({ ripples: fe, onClear: xe }),
    [fe, xe]
  );
  return {
    Component: C,
    children: h,
    domRef: W,
    spinner: O,
    styles: D,
    startContent: We,
    endContent: ze,
    isLoading: R,
    spinnerPlacement: A,
    spinnerSize: dt,
    disableRipple: H,
    getButtonProps: et,
    getRippleProps: ut,
    isIconOnly: w
  };
}
function tp(e) {
  var t, r;
  const [n, o] = Gf(e, hs.variantKeys), s = Xn(), a = (r = (t = e == null ? void 0 : e.variant) != null ? t : s == null ? void 0 : s.spinnerVariant) != null ? r : "default", { children: l, className: c, classNames: f, label: d, ...p } = n, b = _e(() => hs({ ...o }), [qs(o)]), m = Xt(f == null ? void 0 : f.base, c), v = d || l, h = _e(() => v && typeof v == "string" ? v : p["aria-label"] ? "" : "Loading", [l, v, p["aria-label"]]), k = pe(
    () => ({
      "aria-label": h,
      className: b.base({
        class: m
      }),
      ...p
    }),
    [h, b, m, p]
  );
  return { label: v, slots: b, classNames: f, variant: a, getSpinnerProps: k };
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
    endContent: f,
    isLoading: d,
    disableRipple: p,
    getButtonProps: b,
    getRippleProps: m,
    isIconOnly: v
  } = ep({ ...e, ref: t });
  return /* @__PURE__ */ i.jsxs(r, { ref: n, ...b(), children: [
    c,
    d && l === "start" && a,
    d && v ? null : o,
    d && l === "end" && a,
    f,
    !p && /* @__PURE__ */ i.jsx(Jf, { ...m() })
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
    const h = xt.indexOf(t);
    h >= 0 && xt.splice(h, 1);
  }), [s, t]);
  const f = () => {
    xt[xt.length - 1] === t && a && a();
  }, d = (h) => {
    (!c || c(h.target)) && (xt[xt.length - 1] === t && r && (h.stopPropagation(), h.preventDefault()), h.pointerType !== "touch" && f());
  }, p = (h) => {
    h.pointerType === "touch" && (!c || c(h.target)) && (xt[xt.length - 1] === t && r && (h.stopPropagation(), h.preventDefault()), f());
  }, b = (h) => {
    h.key === "Escape" && !o && !h.nativeEvent.isComposing && (h.stopPropagation(), h.preventDefault(), f());
  };
  mu({
    isDisabled: !(n && s),
    onInteractOutside: n && s ? p : void 0,
    onInteractOutsideStart: d,
    ref: t
  });
  const { focusWithinProps: m } = io({
    isDisabled: !l,
    onBlurWithin: (h) => {
      !h.relatedTarget || xu(h.relatedTarget) || (!c || c(h.relatedTarget)) && f();
    }
  }), v = (h) => {
    h.target === h.currentTarget && h.preventDefault();
  };
  return {
    overlayProps: {
      onKeyDown: b,
      ...m
    },
    underlayProps: {
      onPointerDown: v
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
    shouldFlip: f,
    boundaryElement: d,
    isDismissable: p = !0,
    shouldCloseOnBlur: b = !0,
    shouldCloseOnScroll: m = !0,
    placement: v = "top",
    containerPadding: h,
    shouldCloseOnInteractOutside: k,
    isNonModal: E,
    isKeyboardDismissDisabled: N,
    updatePositionDeps: L = [],
    ...O
  } = e, R = E ?? !0, S = O.trigger === "SubmenuTrigger", { overlayProps: K, underlayProps: _ } = sp(
    {
      isOpen: t.isOpen,
      onClose: t.close,
      shouldCloseOnBlur: b,
      isDismissable: p || S,
      isKeyboardDismissDisabled: N,
      shouldCloseOnInteractOutside: k || ((j) => {
        var w;
        return !((w = n.current) != null && w.contains(j));
      }),
      disableOutsideEvents: !R
    },
    o
  ), {
    overlayProps: T,
    arrowProps: M,
    placement: u,
    updatePosition: $
  } = Vd({
    ...O,
    shouldFlip: f,
    crossOffset: l,
    targetRef: n,
    overlayRef: o,
    isOpen: t.isOpen,
    scrollRef: c,
    boundaryElement: d,
    containerPadding: h,
    placement: Wf(v),
    offset: s ? a + 3 : a,
    onClose: R && !S && m ? t.close : () => {
    }
  });
  return qf(() => {
    L.length && $();
  }, L), ue(() => {
    var j, w;
    if (t.isOpen && o.current)
      return R ? Yf((j = r == null ? void 0 : r.current) != null ? j : o.current) : Uf([(w = r == null ? void 0 : r.current) != null ? w : o.current]);
  }, [R, t.isOpen, o, r]), {
    popoverProps: Rt(K, T),
    arrowProps: M,
    underlayProps: _,
    placement: u
  };
}
var ip = "top";
function lp(e) {
  var t, r, n;
  const o = Xn(), [s, a] = Mu(e, vs.variantKeys), {
    as: l,
    ref: c,
    children: f,
    state: d,
    triggerRef: p,
    scrollRef: b,
    defaultOpen: m,
    onOpenChange: v,
    isOpen: h,
    isNonModal: k = !0,
    shouldFlip: E = !0,
    containerPadding: N = 12,
    shouldBlockScroll: L = !1,
    isDismissable: O = !0,
    shouldCloseOnBlur: R,
    portalContainer: S,
    updatePositionDeps: K,
    dialogProps: _,
    placement: T = ip,
    triggerType: M = "dialog",
    showArrow: u = !1,
    offset: $ = 7,
    crossOffset: j = 0,
    boundaryElement: w,
    isKeyboardDismissDisabled: A,
    shouldCloseOnInteractOutside: g,
    shouldCloseOnScroll: x,
    motionProps: P,
    className: C,
    classNames: U,
    onClose: W,
    ...H
  } = s, ne = l || "div", V = Us(c), G = re(null), q = re(!1), D = p || G, X = (r = (t = e.disableAnimation) != null ? t : o == null ? void 0 : o.disableAnimation) != null ? r : !1, xe = op({
    isOpen: h,
    defaultOpen: m,
    onOpenChange: (z) => {
      v == null || v(z), z || W == null || W();
    }
  }), fe = d || xe, {
    popoverProps: Ue,
    underlayProps: He,
    placement: Se
  } = ap(
    {
      triggerRef: D,
      isNonModal: k,
      popoverRef: V,
      placement: T,
      offset: $,
      scrollRef: b,
      isDismissable: O,
      shouldCloseOnBlur: R,
      boundaryElement: w,
      crossOffset: j,
      shouldFlip: E,
      containerPadding: N,
      updatePositionDeps: K,
      isKeyboardDismissDisabled: A,
      shouldCloseOnScroll: x,
      shouldCloseOnInteractOutside: g
    },
    fe
  ), Ye = _e(() => Se ? Kf(Se, T) ? Se : T : null, [Se, T]), { triggerProps: Ee } = ku({ type: M }, fe, D), { isFocusVisible: et, isFocused: tt, focusProps: We } = Na(), ze = _e(
    () => vs({
      ...a
    }),
    [qs(a)]
  ), dt = Xt(U == null ? void 0 : U.base, C);
  Eu({
    isDisabled: !(L && fe.isOpen)
  });
  const ut = (z = {}) => ({
    ref: V,
    ...Rt(Ue, H, z),
    style: Rt(Ue.style, H.style, z.style)
  }), Fe = (z = {}) => ({
    // `ref` and `dialogProps` from `useDialog` are passed from props
    // if we use `useDialog` here, dialogRef won't be focused on mount
    "data-slot": "base",
    "data-open": ot(fe.isOpen),
    "data-focus": ot(tt),
    "data-arrow": ot(u),
    "data-focus-visible": ot(et),
    "data-placement": Se ? ws(Se, T) : void 0,
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
      "data-arrow": ot(u),
      "data-placement": Se ? ws(Se, T) : void 0,
      className: ze.content({ class: Xt(U == null ? void 0 : U.content, z.className) })
    }),
    [ze, fe.isOpen, u, Ye, T, U, Se]
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
  ), F = pe(
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
        ref: Rc(oe, D)
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
    children: f,
    classNames: U,
    showArrow: u,
    triggerRef: D,
    placement: Ye,
    isNonModal: k,
    popoverRef: V,
    portalContainer: S,
    isOpen: fe.isOpen,
    onClose: fe.close,
    disableAnimation: X,
    shouldBlockScroll: L,
    backdrop: (n = e.backdrop) != null ? n : "transparent",
    motionProps: P,
    getBackdropProps: ee,
    getPopoverProps: ut,
    getTriggerProps: F,
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
    disableAnimation: f,
    getPopoverProps: d,
    getDialogProps: p,
    getBackdropProps: b,
    getContentProps: m,
    isNonModal: v,
    onClose: h
  } = Pi(), k = re(null), { dialogProps: E, titleProps: N } = cp({}, k), L = p({
    ref: k,
    ...E,
    ...o
  }), O = t || s || "div", R = /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    !v && /* @__PURE__ */ i.jsx(cs, { onDismiss: h }),
    /* @__PURE__ */ i.jsx(O, { ...L, children: /* @__PURE__ */ i.jsx("div", { ...m({ className: n }), children: typeof r == "function" ? r(N) : r }) }),
    /* @__PURE__ */ i.jsx(cs, { onDismiss: h })
  ] }), S = _e(() => l === "transparent" ? null : f ? /* @__PURE__ */ i.jsx("div", { ...b() }) : /* @__PURE__ */ i.jsx(xn, { features: $s, children: /* @__PURE__ */ i.jsx(
    yn.div,
    {
      animate: "enter",
      exit: "exit",
      initial: "exit",
      variants: ys.fade,
      ...b()
    }
  ) }), [l, f, b]), K = a ? Hf(a === "center" ? "top" : a) : void 0, _ = /* @__PURE__ */ i.jsx(i.Fragment, { children: f ? R : /* @__PURE__ */ i.jsx(xn, { features: $s, children: /* @__PURE__ */ i.jsx(
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
    S,
    _
  ] });
};
Ti.displayName = "HeroUI.PopoverContent";
var up = Ti, Si = (e) => {
  var t;
  const { triggerRef: r, getTriggerProps: n } = Pi(), { children: o, ...s } = e, a = _e(() => typeof o == "string" ? /* @__PURE__ */ i.jsx("p", { children: o }) : wr.only(o), [o]), l = (t = a.props.ref) != null ? t : a.ref, { onPress: c, isDisabled: f, ...d } = _e(() => n(Rt(s, a.props), l), [n, a.props, s, l]), [, p] = Lc(o, np), { buttonProps: b } = ki({ onPress: c, isDisabled: f }, r), m = _e(() => (p == null ? void 0 : p[0]) !== void 0, [p]);
  return m || delete d.preventFocusOnPress, Kn(
    a,
    Rt(d, m ? { onPress: c, isDisabled: f } : b)
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
  className: f,
  isOpen: d,
  onOpenChange: p,
  backdrop: b = "transparent",
  disableAnimation: m = !1,
  offset: v = 7,
  isDismissable: h = !0
}) => {
  const k = () => {
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
    switch (b) {
      case "blur":
        return "blur";
      case "dark":
        return "opaque";
      case "transparent":
      default:
        return "transparent";
    }
  }, L = E(), O = k(), R = N(), S = {
    placement: r,
    showArrow: n,
    color: O,
    radius: l,
    shadow: c,
    isOpen: d,
    onOpenChange: p,
    backdrop: R,
    disableAnimation: m,
    offset: v,
    isDismissable: h
  };
  return Object.keys(S).forEach((K) => {
    S[K] === void 0 && delete S[K];
  }), /* @__PURE__ */ i.jsxs(pp, { ...S, children: [
    /* @__PURE__ */ i.jsx(fp, { children: t }),
    /* @__PURE__ */ i.jsx(
      up,
      {
        className: I(
          gp({ variant: o, color: s, shadow: c, rounded: l }),
          f,
          L,
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
      className: I(mp({ variant: t, size: r }), e),
      "aria-label": "Breadcrumb",
      ...a,
      children: /* @__PURE__ */ i.jsx("ol", { className: "flex flex-wrap items-center gap-1.5", children: n.map((c, f) => {
        const d = f === n.length - 1, p = d && s;
        return /* @__PURE__ */ i.jsxs(
          "li",
          {
            className: I(
              "flex items-center gap-1.5",
              p && "text-primary font-medium"
            ),
            children: [
              c.icon && /* @__PURE__ */ i.jsx(
                de,
                {
                  icon: c.icon,
                  className: I(
                    "flex-shrink-0",
                    r === "sm" && "h-3.5 w-3.5",
                    r === "md" && "h-4 w-4",
                    r === "lg" && "h-5 w-5"
                  )
                }
              ),
              c.href && !p ? /* @__PURE__ */ i.jsx(
                "a",
                {
                  href: c.href,
                  className: I(
                    "transition-colors duration-200",
                    "hover:text-primary hover:underline focus:outline-none",
                    "focus-visible:text-primary focus-visible:underline",
                    "active:text-primary-600"
                  ),
                  children: /* @__PURE__ */ i.jsx("span", { className: "truncate max-w-[200px] inline-block align-bottom", children: c.label })
                }
              ) : /* @__PURE__ */ i.jsx("span", { className: I(
                "truncate max-w-[200px] inline-block",
                p && "text-primary"
              ), children: c.label }),
              !d && /* @__PURE__ */ i.jsx("span", { className: I(
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
  showIndexSticky: r = !1
}) => {
  const n = [
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
  ], o = Ri(t);
  return /* @__PURE__ */ i.jsx("div", { className: "bg-white rounded-md", children: /* @__PURE__ */ i.jsx("div", { className: "p-0 w-full overflow-auto rounded-t-md [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full", children: /* @__PURE__ */ i.jsxs("table", { className: "w-full border-spacing-0 border-separate min-w-full", children: [
    /* @__PURE__ */ i.jsx(
      "thead",
      {
        className: I(
          "border-2 sticky top-0 z-10 rounded-t-md",
          o.border
        ),
        children: /* @__PURE__ */ i.jsx("tr", { children: n.map((s, a) => {
          const l = () => {
            var f;
            if (!s.sticky || s.stickyPosition !== "left") return 0;
            let c = 0;
            for (let d = 0; d < a; d++) {
              const p = n[d];
              if (p.sticky && p.stickyPosition === "left") {
                const b = typeof p.width == "number" ? p.width : parseInt(((f = p.width) == null ? void 0 : f.toString()) || "0") || 0;
                c += b;
              }
            }
            return c;
          };
          return /* @__PURE__ */ i.jsx(
            "th",
            {
              className: I(
                "text-sm text-wrap border-y p-4 text-left",
                o.header,
                {
                  "rounded-tl-md": a === 0,
                  "rounded-tr-md": a === n.length - 1,
                  "sticky z-20": s.sticky,
                  "left-0": s.sticky && s.stickyPosition === "left",
                  "right-0": s.sticky && s.stickyPosition === "right"
                }
              ),
              style: {
                width: typeof s.width == "number" ? `${s.width}px` : s.width,
                minWidth: typeof s.width == "number" ? `${s.width}px` : s.width,
                left: s.sticky && s.stickyPosition === "left" ? `${l()}px` : void 0
              },
              children: s.label
            },
            a
          );
        }) })
      }
    ),
    /* @__PURE__ */ i.jsx("tbody", { children: [...Array(5)].map((s, a) => /* @__PURE__ */ i.jsx(
      "tr",
      {
        className: I("p-3", {
          [o.stripe]: a % 2 !== 0,
          "bg-white": a % 2 === 0
        }),
        children: n.map((l, c) => {
          const f = () => {
            var p;
            if (!l.sticky || l.stickyPosition !== "left") return 0;
            let d = 0;
            for (let b = 0; b < c; b++) {
              const m = n[b];
              if (m.sticky && m.stickyPosition === "left") {
                const v = typeof m.width == "number" ? m.width : parseInt(((p = m.width) == null ? void 0 : p.toString()) || "0") || 0;
                d += v;
              }
            }
            return d;
          };
          return /* @__PURE__ */ i.jsx(
            "td",
            {
              className: I(
                "text-left text-nowrap text-sm p-4",
                {
                  "sticky z-10": l.sticky,
                  "left-0": l.sticky && l.stickyPosition === "left",
                  "right-0": l.sticky && l.stickyPosition === "right",
                  // Ensure sticky columns have solid background that matches row
                  "bg-white": l.sticky && a % 2 === 0,
                  [o.stripe]: l.sticky && a % 2 !== 0,
                  [o.hoverStripe]: l.sticky
                }
              ),
              style: {
                width: typeof l.width == "number" ? `${l.width}px` : l.width,
                minWidth: typeof l.width == "number" ? `${l.width}px` : l.width,
                left: l.sticky && l.stickyPosition === "left" ? `${f()}px` : void 0
              },
              children: /* @__PURE__ */ i.jsx(ac, { className: "h-10 w-full rounded-md" })
            },
            `${a}-${c}`
          );
        })
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
  cellClassName: s,
  emptyState: a,
  isLoading: l,
  loadingState: c,
  showIndex: f = !1,
  showIndexSticky: d = !1,
  onPageChange: p,
  onPageSizeChange: b,
  onSortChange: m,
  onRowClick: v,
  showPagination: h = !1,
  variant: k = "primary",
  meta: E = {
    current_page: 1,
    total_page: 1,
    total_data: 0,
    limit_number: 10
  }
}) => {
  const [N, L] = te(() => {
    const _ = e.find((T) => T.sortable && T.sort);
    return _ ? [
      {
        id: _.accessorKey.toString(),
        desc: _.sort === "desc"
      }
    ] : [];
  }), O = ie.useMemo(() => {
    const _ = e.map((T) => ({
      accessorKey: T.accessorKey,
      header: T.label,
      enableSorting: !!T.sortable,
      cell: T.render ? ({ row: M }) => {
        var u;
        return (u = T.render) == null ? void 0 : u.call(T, M.original[T.accessorKey], M.original, M.index);
      } : ({ row: M }) => M.original[T.accessorKey] || "-",
      meta: {
        align: T.align || "left",
        width: T.width,
        sticky: T.sticky,
        stickyPosition: T.stickyPosition || "left"
      }
    }));
    return f ? [
      {
        accessorKey: "no",
        header: "No.",
        enableSorting: !1,
        cell: ({ row: T }) => (E.current_page - 1) * E.limit_number + T.index + 1,
        meta: {
          align: "left",
          width: 80,
          sticky: d,
          stickyPosition: "left"
        }
      },
      ..._
    ] : _;
  }, [e, f, d, E]), R = Ki({
    data: t,
    columns: O,
    state: {
      sorting: N
    },
    onSortingChange: (_) => {
      const T = typeof _ == "function" ? _(N) : _;
      L(T), T.length > 0 ? m == null || m(T[0].desc ? "desc" : "asc", T[0].id) : m == null || m("", "");
    },
    getCoreRowModel: qi(),
    getSortedRowModel: Yi(),
    getPaginationRowModel: Ui(),
    manualPagination: !0,
    pageCount: E.total_page
  }), S = Ri(k);
  if (l)
    return c || /* @__PURE__ */ i.jsx(
      hp,
      {
        schema: e,
        variant: k,
        showIndexSticky: d
      }
    );
  const K = (_, T, M) => {
    const u = _.target;
    u.tagName === "BUTTON" || u.tagName === "A" || u.tagName === "INPUT" || u.tagName === "SELECT" || u.closest("button") !== null || u.closest("a") !== null || u.closest("input") !== null || u.closest("select") !== null || v == null || v(T, M);
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "bg-white rounded-md", children: [
    /* @__PURE__ */ i.jsx("div", { className: "p-0 w-full overflow-auto rounded-t-md [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full", children: /* @__PURE__ */ i.jsxs(
      "table",
      {
        className: I(
          "w-full border-spacing-0 border-separate min-w-full",
          r
        ),
        children: [
          /* @__PURE__ */ i.jsx(
            "thead",
            {
              className: I(
                "border-2 sticky top-0 z-10 rounded-t-md",
                S.border
              ),
              children: R.getHeaderGroups().map((_) => /* @__PURE__ */ i.jsx("tr", { children: _.headers.map(
                (T, M) => {
                  const u = T.column.columnDef.meta, $ = () => {
                    var w;
                    if (!(u != null && u.sticky) || u.stickyPosition !== "left") return 0;
                    let j = 0;
                    for (let A = 0; A < M; A++) {
                      const x = _.headers[A].column.columnDef.meta;
                      if (x != null && x.sticky && x.stickyPosition === "left") {
                        const P = typeof x.width == "number" ? x.width : parseInt(((w = x.width) == null ? void 0 : w.toString()) || "0") || 0;
                        j += P;
                      }
                    }
                    return j;
                  };
                  return /* @__PURE__ */ i.jsx(
                    "th",
                    {
                      className: I(
                        "text-sm text-wrap border-y p-4",
                        S.header,
                        {
                          "cursor-pointer": T.column.getCanSort(),
                          "rounded-tl-md": M === 0,
                          "rounded-tr-md": M === _.headers.length - 1,
                          "text-left": (u == null ? void 0 : u.align) === "left",
                          "text-center": (u == null ? void 0 : u.align) === "center",
                          "text-right": (u == null ? void 0 : u.align) === "right",
                          "sticky z-20": u == null ? void 0 : u.sticky,
                          "left-0": (u == null ? void 0 : u.sticky) && u.stickyPosition === "left",
                          "right-0": (u == null ? void 0 : u.sticky) && u.stickyPosition === "right"
                        },
                        n
                      ),
                      style: {
                        width: typeof (u == null ? void 0 : u.width) == "number" ? `${u.width}px` : u == null ? void 0 : u.width,
                        minWidth: typeof (u == null ? void 0 : u.width) == "number" ? `${u.width}px` : u == null ? void 0 : u.width,
                        left: u != null && u.sticky && u.stickyPosition === "left" ? `${$()}px` : void 0
                      },
                      onClick: T.column.getCanSort() ? T.column.getToggleSortingHandler() : void 0,
                      children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ i.jsx(
                          "span",
                          {
                            className: I({
                              "font-semibold": M === 0
                            }),
                            children: xo(
                              T.column.columnDef.header,
                              T.getContext()
                            )
                          }
                        ),
                        T.column.getCanSort() && /* @__PURE__ */ i.jsx(
                          de,
                          {
                            icon: T.column.getIsSorted() ? T.column.getIsSorted() === "desc" ? "mdi:keyboard-arrow-up" : "mdi:keyboard-arrow-down" : "mdi:unfold-more-horizontal",
                            className: I("h-4 w-4", {
                              "text-white": k !== "ghost",
                              "text-gray-700": k === "ghost"
                            })
                          }
                        )
                      ] })
                    },
                    T.id
                  );
                }
              ) }, _.id))
            }
          ),
          /* @__PURE__ */ i.jsx("tbody", { children: R.getRowModel().rows.length === 0 ? /* @__PURE__ */ i.jsx("tr", { children: /* @__PURE__ */ i.jsx(
            "td",
            {
              colSpan: R.getAllColumns().length,
              className: I(
                "text-center border h-full w-full rounded-b-md"
              ),
              children: a || /* @__PURE__ */ i.jsxs("div", { className: "flex mx-auto w-full text-center justify-center gap-3 items-center", children: [
                /* @__PURE__ */ i.jsx("p", { children: "Data Not Found" }),
                /* @__PURE__ */ i.jsx(de, { icon: "mdi:face-frown-open", size: 34 })
              ] })
            }
          ) }) : R.getRowModel().rows.map((_, T) => /* @__PURE__ */ i.jsx(
            "tr",
            {
              className: I(
                "p-3 group",
                S.row,
                {
                  [S.stripe]: T % 2 !== 0,
                  "bg-white": T % 2 === 0,
                  "cursor-pointer": v
                },
                o
              ),
              onClick: (M) => K(M, _.original, T),
              children: _.getVisibleCells().map((M) => {
                const u = M.column.columnDef.meta, $ = () => {
                  var g;
                  if (!(u != null && u.sticky) || u.stickyPosition !== "left") return 0;
                  let j = 0;
                  const w = R.getAllColumns(), A = w.findIndex((x) => x.id === M.column.id);
                  for (let x = 0; x < A; x++) {
                    const C = w[x].columnDef.meta;
                    if (C != null && C.sticky && C.stickyPosition === "left") {
                      const U = typeof C.width == "number" ? C.width : parseInt(((g = C.width) == null ? void 0 : g.toString()) || "0") || 0;
                      j += U;
                    }
                  }
                  return j;
                };
                return /* @__PURE__ */ i.jsx(
                  "td",
                  {
                    className: I(
                      "px-4 py-3 text-sm text-gray-900",
                      {
                        "text-left": (u == null ? void 0 : u.align) === "left",
                        "text-center": (u == null ? void 0 : u.align) === "center",
                        "text-right": (u == null ? void 0 : u.align) === "right",
                        "sticky z-10": u == null ? void 0 : u.sticky,
                        "left-0": (u == null ? void 0 : u.sticky) && u.stickyPosition === "left",
                        "right-0": (u == null ? void 0 : u.sticky) && u.stickyPosition === "right",
                        // Ensure sticky columns have solid background that matches row
                        "bg-white": (u == null ? void 0 : u.sticky) && T % 2 === 0,
                        [S.stripe]: (u == null ? void 0 : u.sticky) && T % 2 !== 0,
                        [S.hoverStripe]: u == null ? void 0 : u.sticky
                      },
                      s
                    ),
                    style: {
                      width: typeof (u == null ? void 0 : u.width) == "number" ? `${u.width}px` : u == null ? void 0 : u.width,
                      minWidth: typeof (u == null ? void 0 : u.width) == "number" ? `${u.width}px` : u == null ? void 0 : u.width,
                      left: u != null && u.sticky && u.stickyPosition === "left" ? `${$()}px` : void 0
                    },
                    children: xo(
                      M.column.columnDef.cell,
                      M.getContext()
                    )
                  },
                  M.id
                );
              })
            },
            _.id
          )) })
        ]
      }
    ) }),
    !!t.length && h && /* @__PURE__ */ i.jsx("div", { className: "p-4 bg-white rounded-b-md", children: /* @__PURE__ */ i.jsx(
      rc,
      {
        currentPage: E.current_page,
        totalPages: E.total_page,
        totalData: E.total_data,
        onPageChange: p || (() => {
        }),
        perPage: E.limit_number,
        onPerPageChange: b || (() => {
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
    ...f
  }, d) => {
    const b = a || (l ? {
      default: "mdi:information",
      success: "mdi:check-circle",
      error: "mdi:alert-circle",
      warning: "mdi:alert",
      info: "mdi:information"
    }[t] : void 0), m = n || o;
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        ref: d,
        className: I(
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
        ...f,
        children: [
          b && /* @__PURE__ */ i.jsx(
            de,
            {
              icon: b,
              className: I(
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
                className: I("text-sm font-medium leading-5", {
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
                className: I(n ? "mt-1" : "", "text-sm leading-5", {
                  "text-gray": t === "default",
                  "text-success-700": t === "success",
                  "text-danger-700": t === "error",
                  "text-warning-700": t === "warning",
                  "text-info-700": t === "info"
                }),
                children: o
              }
            ),
            !m && /* @__PURE__ */ i.jsx("span", { className: "text-sm leading-5", children: f.children })
          ] }),
          c && s && /* @__PURE__ */ i.jsx(
            Ke,
            {
              variant: "ghost",
              size: "sm",
              onClick: s,
              className: I(
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
              children: /* @__PURE__ */ i.jsx(de, { icon: "mdi:close", className: I(o ? "h-5 w-5" : "h-4 w-4") })
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
    r((c) => c.filter((f) => f.id !== l));
  }, []), o = pe((l) => {
    const c = Math.random().toString(36).substr(2, 9), f = l.position || "top-right", d = l.duration || 5e3, p = {
      ...l,
      id: c,
      position: f
    };
    return r((b) => [...b, p]), d > 0 && setTimeout(() => {
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
          className: I(
            "fixed z-[100] flex flex-col gap-2 min-w-[320px] max-w-[420px]",
            xp[l],
            l.includes("bottom") ? "flex-col-reverse" : "flex-col"
          ),
          children: c.map((f) => /* @__PURE__ */ i.jsx(
            Li,
            {
              ...f,
              onClose: () => n(f.id),
              className: "animate-slide-in"
            },
            f.id
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
}) => /* @__PURE__ */ i.jsxs(Yn, { className: I(
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
      const p = $p[o];
      return Ai[p];
    }
    return Es(e) && e.code && ks[e.code] ? ks[e.code] : Ns;
  })(), f = s || c.image, d = a || (Es(e) ? e.message : null) || c.message;
  return /* @__PURE__ */ i.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${n}`, children: [
    /* @__PURE__ */ i.jsx(
      "img",
      {
        src: f,
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
    required: f = !1,
    showSubmitButton: d = !1,
    submitButtonLabel: p = "Submit",
    submitButtonVariant: b = "primary",
    length: m = 6,
    numericOnly: v = !0,
    onComplete: h,
    onChange: k,
    onSubmit: E,
    value: N,
    defaultValue: L = "",
    disabled: O = !1,
    autoFocus: R = !1,
    ...S
  }, K) => {
    const [_, T] = te(L || ""), M = re([]);
    ue(() => {
      N !== void 0 && T(N);
    }, [N]);
    const u = N !== void 0, $ = u ? N : _, j = (W) => {
      u || T(W), k == null || k(W), W.length === m && (h == null || h(W), d || E == null || E(W));
    }, w = (W) => (H) => {
      M.current[W] = H;
    }, A = (W) => {
      W.target.select();
    }, g = (W, H) => {
      var D;
      const ne = W.target.value;
      let V = "";
      if (ne.length >= 1)
        V = ne.slice(-1);
      else if (ne.length === 0) {
        const X = $.split("");
        X[H] = "", j(X.join(""));
        return;
      }
      if (v && !/^\d$/.test(V))
        return;
      const G = $.split("");
      for (; G.length <= H; )
        G.push("");
      G[H] = V;
      const q = G.join("");
      j(q), H < m - 1 && V && ((D = M.current[H + 1]) == null || D.focus());
    }, x = (W, H) => {
      var ne, V, G;
      if (W.key === "Backspace") {
        const q = $.split("");
        $[H] ? (W.preventDefault(), q[H] = "", j(q.join(""))) : H > 0 && (W.preventDefault(), q[H - 1] = "", j(q.join("")), (ne = M.current[H - 1]) == null || ne.focus());
      } else if (W.key === "Delete") {
        if ($[H]) {
          W.preventDefault();
          const q = $.split("");
          q[H] = "", j(q.join(""));
        }
      } else if (W.key === "ArrowLeft" && H > 0)
        W.preventDefault(), (V = M.current[H - 1]) == null || V.focus();
      else if (W.key === "ArrowRight" && H < m - 1)
        W.preventDefault(), (G = M.current[H + 1]) == null || G.focus();
      else if (!W.ctrlKey && !W.altKey && !W.metaKey && W.key.length === 1 && v && !/^\d$/.test(W.key)) {
        W.preventDefault();
        return;
      }
    }, P = (W) => {
      var q;
      W.preventDefault();
      const H = W.clipboardData.getData("text/plain").trim();
      if (v && !/^\d+$/.test(H))
        return;
      const V = H.slice(0, m).padEnd($.length, "").slice(0, m);
      j(V);
      const G = V.length < m ? V.length : m - 1;
      (q = M.current[G]) == null || q.focus();
    }, C = () => {
      $.length === m && (E == null || E($));
    }, U = $.split("").concat(Array(m - $.length).fill(""));
    return /* @__PURE__ */ i.jsxs("div", { ref: K, className: I("w-full", e), ...S, children: [
      l && /* @__PURE__ */ i.jsxs("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
        l,
        f && /* @__PURE__ */ i.jsx("span", { className: "text-danger ml-0.5", children: "*" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
        /* @__PURE__ */ i.jsx("div", { className: "flex items-center justify-center gap-2", children: Array.from({ length: m }).map((W, H) => /* @__PURE__ */ i.jsx(
          "input",
          {
            ref: w(H),
            type: v ? "tel" : "text",
            inputMode: v ? "numeric" : "text",
            maxLength: 1,
            value: U[H] || "",
            onChange: (ne) => g(ne, H),
            onKeyDown: (ne) => x(ne, H),
            onPaste: H === 0 ? P : void 0,
            onFocus: A,
            disabled: O,
            autoFocus: R && H === 0,
            className: I(
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
            variant: b,
            disabled: $.length !== m || O,
            onClick: C,
            className: "mt-4",
            children: p
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
  let f = "";
  c && (n > o ? f = `${o}+` : f = String(n));
  const d = c ? "px-2" : "", p = c ? "min-w-[20px]" : "w-2.5 h-2.5", b = c ? "h-5" : "h-2.5", m = typeof r == "string" && r in js ? js[r] : r;
  return /* @__PURE__ */ i.jsxs("div", { className: I("relative inline-block", t), children: [
    s || (e ? /* @__PURE__ */ i.jsx(de, { icon: e, color: m, size: 32, ...a }) : null),
    /* @__PURE__ */ i.jsx(
      "span",
      {
        className: I(
          "absolute flex items-center justify-center rounded-xl bg-[#FF4C4C] text-white text-[10px] font-semibold",
          l,
          d,
          p,
          b,
          !c && "p-0",
          !c && "rounded-full"
        ),
        style: {
          transform: "translate(50%,-50%)"
        },
        children: c ? f : ""
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
  const c = jp[e], f = Ep[c], d = Dr(n, "w-full"), p = Dr(o, "h-full"), b = Dr(s, "w-auto"), m = Dr(a, "h-auto");
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${d.className} ${p.className} ${l}`,
      style: { ...d.style, ...p.style },
      children: [
        /* @__PURE__ */ i.jsx(
          "img",
          {
            src: t || f.image,
            alt: "Loading animation",
            className: `${b.className} ${m.className}`,
            style: { ...b.style, ...m.style }
          }
        ),
        r ? typeof r == "string" ? /* @__PURE__ */ i.jsx($r, { variant: "body1", className: "m-0", children: r }) : /* @__PURE__ */ i.jsx("div", { className: "m-0", children: r }) : /* @__PURE__ */ i.jsx($r, { variant: "body1", className: "m-0", children: f.message })
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
  const c = Tp[e], f = Pp[c];
  return /* @__PURE__ */ i.jsxs("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${l}`, children: [
    /* @__PURE__ */ i.jsx(
      "img",
      {
        src: o || f.image,
        alt: "Negative case illustration",
        className: "max-w-[300px] h-auto",
        style: { width: s, height: a }
      }
    ),
    t ? typeof t == "string" ? /* @__PURE__ */ i.jsx($r, { variant: "body1", className: "m-0", children: t }) : /* @__PURE__ */ i.jsx("div", { className: "m-0", children: t }) : /* @__PURE__ */ i.jsx($r, { variant: "body1", className: "m-0", children: f.message }),
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
}) => /* @__PURE__ */ i.jsx("div", { className: I("w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", t), children: e.map((r, n) => /* @__PURE__ */ i.jsx(yp, { ...r }, n)) });
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
  I as cn,
  kp as inputOTPVariants,
  mc as toggleVariants,
  Qp as useToast
};
