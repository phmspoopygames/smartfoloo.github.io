! function(t) {
    function n(n) {
        for (var e, r, o = n[0], a = n[1], s = 0, A = []; s < o.length; s++) r = o[s], Object.prototype.hasOwnProperty.call(i, r) && i[r] && A.push(i[r][0]), i[r] = 0;
        for (e in a) Object.prototype.hasOwnProperty.call(a, e) && (t[e] = a[e]);
        for (d && d(n); A.length;) A.shift()()
    }
    var e = {},
        i = {
            0: 0
        };

    function r(n) {
        if (e[n]) return e[n].exports;
        var i = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
    }
    r.e = function(t) {
        var n = [],
            e = i[t];
        if (0 !== e)
            if (e) n.push(e[2]);
            else {
                var o = new Promise((function(n, r) {
                    e = i[t] = [n, r]
                }));
                n.push(e[2] = o);
                var a, s = document.createElement("script");
                s.charset = "utf-8", s.timeout = 120, r.nc && s.setAttribute("nonce", r.nc), s.src = function(t) {
                    return r.p + "" + ({
                        1: "prebid"
                    }[t] || t) + ".5e7130feaa1ebf2233db.js"
                }(t);
                var d = new Error;
                a = function(n) {
                    s.onerror = s.onload = null, clearTimeout(A);
                    var e = i[t];
                    if (0 !== e) {
                        if (e) {
                            var r = n && ("load" === n.type ? "missing" : n.type),
                                o = n && n.target && n.target.src;
                            d.message = "Loading chunk " + t + " failed.\n(" + r + ": " + o + ")", d.name = "ChunkLoadError", d.type = r, d.request = o, e[1](d)
                        }
                        i[t] = void 0
                    }
                };
                var A = setTimeout((function() {
                    a({
                        type: "timeout",
                        target: s
                    })
                }), 12e4);
                s.onerror = s.onload = a, document.head.appendChild(s)
            }
        return Promise.all(n)
    }, r.m = t, r.c = e, r.d = function(t, n, e) {
        r.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: e
        })
    }, r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function(t, n) {
        if (1 & n && (t = r(t)), 8 & n) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (r.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            }), 2 & n && "string" != typeof t)
            for (var i in t) r.d(e, i, function(n) {
                return t[n]
            }.bind(null, i));
        return e
    }, r.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return r.d(n, "a", n), n
    }, r.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, r.p = "//game-cdn.poki.com/scripts/v2/", r.oe = function(t) {
        throw console.error(t), t
    };
    var o = window.webpackJsonp = window.webpackJsonp || [],
        a = o.push.bind(o);
    o.push = n, o = o.slice();
    for (var s = 0; s < o.length; s++) n(o[s]);
    var d = a;
    r(r.s = 107)
}([function(t, n, e) {
    (function(n) {
        var e = function(t) {
            return t && t.Math == Math && t
        };
        t.exports = e("object" == typeof globalThis && globalThis) || e("object" == typeof window && window) || e("object" == typeof self && self) || e("object" == typeof n && n) || Function("return this")()
    }).call(this, e(67))
}, function(t, n, e) {
    var i = e(0),
        r = e(41),
        o = e(3),
        a = e(42),
        s = e(49),
        d = e(77),
        A = r("wks"),
        c = i.Symbol,
        u = d ? c : a;
    t.exports = function(t) {
        return o(A, t) || (s && o(c, t) ? A[t] = c[t] : A[t] = u("Symbol." + t)), A[t]
    }
}, function(t, n) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, n) {
    var e = {}.hasOwnProperty;
    t.exports = function(t, n) {
        return e.call(t, n)
    }
}, function(t, n, e) {
    var i = e(7),
        r = e(10),
        o = e(18);
    t.exports = i ? function(t, n, e) {
        return r.f(t, n, o(1, e))
    } : function(t, n, e) {
        return t[n] = e, t
    }
}, function(t, n, e) {
    var i = e(8);
    t.exports = function(t) {
        if (!i(t)) throw TypeError(String(t) + " is not an object");
        return t
    }
}, function(t, n, e) {
    var i = e(0),
        r = e(22).f,
        o = e(4),
        a = e(11),
        s = e(25),
        d = e(69),
        A = e(46);
    t.exports = function(t, n) {
        var e, c, u, m, l, f = t.target,
            p = t.global,
            g = t.stat;
        if (e = p ? i : g ? i[f] || s(f, {}) : (i[f] || {}).prototype)
            for (c in n) {
                if (m = n[c], u = t.noTargetGet ? (l = r(e, c)) && l.value : e[c], !A(p ? c : f + (g ? "." : "#") + c, t.forced) && void 0 !== u) {
                    if (typeof m == typeof u) continue;
                    d(m, u)
                }(t.sham || u && u.sham) && o(m, "sham", !0), a(e, c, m, t)
            }
    }
}, function(t, n, e) {
    var i = e(2);
    t.exports = !i((function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(t, n) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, n, e) {
    var i = e(29),
        r = e(0),
        o = function(t) {
            return "function" == typeof t ? t : void 0
        };
    t.exports = function(t, n) {
        return arguments.length < 2 ? o(i[t]) || o(r[t]) : i[t] && i[t][n] || r[t] && r[t][n]
    }
}, function(t, n, e) {
    var i = e(7),
        r = e(39),
        o = e(5),
        a = e(38),
        s = Object.defineProperty;
    n.f = i ? s : function(t, n, e) {
        if (o(t), n = a(n, !0), o(e), r) try {
            return s(t, n, e)
        } catch (t) {}
        if ("get" in e || "set" in e) throw TypeError("Accessors not supported");
        return "value" in e && (t[n] = e.value), t
    }
}, function(t, n, e) {
    var i = e(0),
        r = e(4),
        o = e(3),
        a = e(25),
        s = e(26),
        d = e(14),
        A = d.get,
        c = d.enforce,
        u = String(String).split("String");
    (t.exports = function(t, n, e, s) {
        var d = !!s && !!s.unsafe,
            A = !!s && !!s.enumerable,
            m = !!s && !!s.noTargetGet;
        "function" == typeof e && ("string" != typeof n || o(e, "name") || r(e, "name", n), c(e).source = u.join("string" == typeof n ? n : "")), t !== i ? (d ? !m && t[n] && (A = !0) : delete t[n], A ? t[n] = e : r(t, n, e)) : A ? t[n] = e : a(n, e)
    })(Function.prototype, "toString", (function() {
        return "function" == typeof this && A(this).source || s(this)
    }))
}, function(t, n) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
        return t
    }
}, function(t, n) {
    var e = {}.toString;
    t.exports = function(t) {
        return e.call(t).slice(8, -1)
    }
}, function(t, n, e) {
    var i, r, o, a = e(68),
        s = e(0),
        d = e(8),
        A = e(4),
        c = e(3),
        u = e(27),
        m = e(28),
        l = s.WeakMap;
    if (a) {
        var f = new l,
            p = f.get,
            g = f.has,
            h = f.set;
        i = function(t, n) {
            return h.call(f, t, n), n
        }, r = function(t) {
            return p.call(f, t) || {}
        }, o = function(t) {
            return g.call(f, t)
        }
    } else {
        var w = u("state");
        m[w] = !0, i = function(t, n) {
            return A(t, w, n), n
        }, r = function(t) {
            return c(t, w) ? t[w] : {}
        }, o = function(t) {
            return c(t, w)
        }
    }
    t.exports = {
        set: i,
        get: r,
        has: o,
        enforce: function(t) {
            return o(t) ? r(t) : i(t, {})
        },
        getterFor: function(t) {
            return function(n) {
                var e;
                if (!d(n) || (e = r(n)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                return e
            }
        }
    }
}, function(t, n) {
    t.exports = !1
}, function(t, n) {
    t.exports = {}
}, function(t, n, e) {
    "use strict";
    var i = e(12),
        r = function(t) {
            var n, e;
            this.promise = new t((function(t, i) {
                if (void 0 !== n || void 0 !== e) throw TypeError("Bad Promise constructor");
                n = t, e = i
            })), this.resolve = i(n), this.reject = i(e)
        };
    t.exports.f = function(t) {
        return new r(t)
    }
}, function(t, n) {
    t.exports = function(t, n) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: n
        }
    }
}, function(t, n, e) {
    var i = e(37),
        r = e(23);
    t.exports = function(t) {
        return i(r(t))
    }
}, function(t, n, e) {
    var i = e(5),
        r = e(93),
        o = e(44),
        a = e(56),
        s = e(94),
        d = e(95),
        A = function(t, n) {
            this.stopped = t, this.result = n
        };
    (t.exports = function(t, n, e, c, u) {
        var m, l, f, p, g, h, w, y = a(n, e, c ? 2 : 1);
        if (u) m = t;
        else {
            if ("function" != typeof(l = s(t))) throw TypeError("Target is not iterable");
            if (r(l)) {
                for (f = 0, p = o(t.length); p > f; f++)
                    if ((g = c ? y(i(w = t[f])[0], w[1]) : y(t[f])) && g instanceof A) return g;
                return new A(!1)
            }
            m = l.call(t)
        }
        for (h = m.next; !(w = h.call(m)).done;)
            if ("object" == typeof(g = d(m, y, w.value, c)) && g && g instanceof A) return g;
        return new A(!1)
    }).stop = function(t) {
        return new A(!0, t)
    }
}, function(t, n) {
    t.exports = function(t) {
        try {
            return {
                error: !1,
                value: t()
            }
        } catch (t) {
            return {
                error: !0,
                value: t
            }
        }
    }
}, function(t, n, e) {
    var i = e(7),
        r = e(36),
        o = e(18),
        a = e(19),
        s = e(38),
        d = e(3),
        A = e(39),
        c = Object.getOwnPropertyDescriptor;
    n.f = i ? c : function(t, n) {
        if (t = a(t), n = s(n, !0), A) try {
            return c(t, n)
        } catch (t) {}
        if (d(t, n)) return o(!r.f.call(t, n), t[n])
    }
}, function(t, n) {
    t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on " + t);
        return t
    }
}, function(t, n, e) {
    var i = e(0),
        r = e(8),
        o = i.document,
        a = r(o) && r(o.createElement);
    t.exports = function(t) {
        return a ? o.createElement(t) : {}
    }
}, function(t, n, e) {
    var i = e(0),
        r = e(4);
    t.exports = function(t, n) {
        try {
            r(i, t, n)
        } catch (e) {
            i[t] = n
        }
        return n
    }
}, function(t, n, e) {
    var i = e(40),
        r = Function.toString;
    "function" != typeof i.inspectSource && (i.inspectSource = function(t) {
        return r.call(t)
    }), t.exports = i.inspectSource
}, function(t, n, e) {
    var i = e(41),
        r = e(42),
        o = i("keys");
    t.exports = function(t) {
        return o[t] || (o[t] = r(t))
    }
}, function(t, n) {
    t.exports = {}
}, function(t, n, e) {
    var i = e(0);
    t.exports = i
}, function(t, n) {
    var e = Math.ceil,
        i = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? i : e)(t)
    }
}, function(t, n) {
    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function(t, n, e) {
    var i = {};
    i[e(1)("toStringTag")] = "z", t.exports = "[object z]" === String(i)
}, function(t, n, e) {
    var i = e(3),
        r = e(48),
        o = e(27),
        a = e(82),
        s = o("IE_PROTO"),
        d = Object.prototype;
    t.exports = a ? Object.getPrototypeOf : function(t) {
        return t = r(t), i(t, s) ? t[s] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? d : null
    }
}, function(t, n, e) {
    var i = e(5),
        r = e(83),
        o = e(31),
        a = e(28),
        s = e(53),
        d = e(24),
        A = e(27)("IE_PROTO"),
        c = function() {},
        u = function() {
            var t, n = d("iframe"),
                e = o.length;
            for (n.style.display = "none", s.appendChild(n), n.src = String("javascript:"), (t = n.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; e--;) delete u.prototype[o[e]];
            return u()
        };
    t.exports = Object.create || function(t, n) {
        var e;
        return null !== t ? (c.prototype = i(t), e = new c, c.prototype = null, e[A] = t) : e = u(), void 0 === n ? e : r(e, n)
    }, a[A] = !0
}, function(t, n, e) {
    var i = e(10).f,
        r = e(3),
        o = e(1)("toStringTag");
    t.exports = function(t, n, e) {
        t && !r(t = e ? t : t.prototype, o) && i(t, o, {
            configurable: !0,
            value: n
        })
    }
}, function(t, n, e) {
    "use strict";
    var i = {}.propertyIsEnumerable,
        r = Object.getOwnPropertyDescriptor,
        o = r && !i.call({
            1: 2
        }, 1);
    n.f = o ? function(t) {
        var n = r(this, t);
        return !!n && n.enumerable
    } : i
}, function(t, n, e) {
    var i = e(2),
        r = e(13),
        o = "".split;
    t.exports = i((function() {
        return !Object("z").propertyIsEnumerable(0)
    })) ? function(t) {
        return "String" == r(t) ? o.call(t, "") : Object(t)
    } : Object
}, function(t, n, e) {
    var i = e(8);
    t.exports = function(t, n) {
        if (!i(t)) return t;
        var e, r;
        if (n && "function" == typeof(e = t.toString) && !i(r = e.call(t))) return r;
        if ("function" == typeof(e = t.valueOf) && !i(r = e.call(t))) return r;
        if (!n && "function" == typeof(e = t.toString) && !i(r = e.call(t))) return r;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, n, e) {
    var i = e(7),
        r = e(2),
        o = e(24);
    t.exports = !i && !r((function() {
        return 7 != Object.defineProperty(o("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(t, n, e) {
    var i = e(0),
        r = e(25),
        o = i["__core-js_shared__"] || r("__core-js_shared__", {});
    t.exports = o
}, function(t, n, e) {
    var i = e(15),
        r = e(40);
    (t.exports = function(t, n) {
        return r[t] || (r[t] = void 0 !== n ? n : {})
    })("versions", []).push({
        version: "3.5.0",
        mode: i ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function(t, n) {
    var e = 0,
        i = Math.random();
    t.exports = function(t) {
        return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++e + i).toString(36)
    }
}, function(t, n, e) {
    var i = e(3),
        r = e(19),
        o = e(72).indexOf,
        a = e(28);
    t.exports = function(t, n) {
        var e, s = r(t),
            d = 0,
            A = [];
        for (e in s) !i(a, e) && i(s, e) && A.push(e);
        for (; n.length > d;) i(s, e = n[d++]) && (~o(A, e) || A.push(e));
        return A
    }
}, function(t, n, e) {
    var i = e(30),
        r = Math.min;
    t.exports = function(t) {
        return t > 0 ? r(i(t), 9007199254740991) : 0
    }
}, function(t, n) {
    n.f = Object.getOwnPropertySymbols
}, function(t, n, e) {
    var i = e(2),
        r = /#|\.prototype\./,
        o = function(t, n) {
            var e = s[a(t)];
            return e == A || e != d && ("function" == typeof n ? i(n) : !!n)
        },
        a = o.normalize = function(t) {
            return String(t).replace(r, ".").toLowerCase()
        },
        s = o.data = {},
        d = o.NATIVE = "N",
        A = o.POLYFILL = "P";
    t.exports = o
}, function(t, n, e) {
    var i = e(43),
        r = e(31);
    t.exports = Object.keys || function(t) {
        return i(t, r)
    }
}, function(t, n, e) {
    var i = e(23);
    t.exports = function(t) {
        return Object(i(t))
    }
}, function(t, n, e) {
    var i = e(2);
    t.exports = !!Object.getOwnPropertySymbols && !i((function() {
        return !String(Symbol())
    }))
}, function(t, n, e) {
    var i = e(32),
        r = e(13),
        o = e(1)("toStringTag"),
        a = "Arguments" == r(function() {
            return arguments
        }());
    t.exports = i ? r : function(t) {
        var n, e, i;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(e = function(t, n) {
            try {
                return t[n]
            } catch (t) {}
        }(n = Object(t), o)) ? e : a ? r(n) : "Object" == (i = r(n)) && "function" == typeof n.callee ? "Arguments" : i
    }
}, function(t, n, e) {
    "use strict";
    var i = e(6),
        r = e(81),
        o = e(33),
        a = e(54),
        s = e(35),
        d = e(4),
        A = e(11),
        c = e(1),
        u = e(15),
        m = e(16),
        l = e(52),
        f = l.IteratorPrototype,
        p = l.BUGGY_SAFARI_ITERATORS,
        g = c("iterator"),
        h = function() {
            return this
        };
    t.exports = function(t, n, e, c, l, w, y) {
        r(e, n, c);
        var k, b, v, S = function(t) {
                if (t === l && C) return C;
                if (!p && t in x) return x[t];
                switch (t) {
                    case "keys":
                    case "values":
                    case "entries":
                        return function() {
                            return new e(this, t)
                        }
                }
                return function() {
                    return new e(this)
                }
            },
            E = n + " Iterator",
            z = !1,
            x = t.prototype,
            T = x[g] || x["@@iterator"] || l && x[l],
            C = !p && T || S(l),
            B = "Array" == n && x.entries || T;
        if (B && (k = o(B.call(new t)), f !== Object.prototype && k.next && (u || o(k) === f || (a ? a(k, f) : "function" != typeof k[g] && d(k, g, h)), s(k, E, !0, !0), u && (m[E] = h))), "values" == l && T && "values" !== T.name && (z = !0, C = function() {
                return T.call(this)
            }), u && !y || x[g] === C || d(x, g, C), m[n] = C, l)
            if (b = {
                    values: S("values"),
                    keys: w ? C : S("keys"),
                    entries: S("entries")
                }, y)
                for (v in b) !p && !z && v in x || A(x, v, b[v]);
            else i({
                target: n,
                proto: !0,
                forced: p || z
            }, b);
        return b
    }
}, function(t, n, e) {
    "use strict";
    var i, r, o, a = e(33),
        s = e(4),
        d = e(3),
        A = e(1),
        c = e(15),
        u = A("iterator"),
        m = !1;
    [].keys && ("next" in (o = [].keys()) ? (r = a(a(o))) !== Object.prototype && (i = r) : m = !0), null == i && (i = {}), c || d(i, u) || s(i, u, (function() {
        return this
    })), t.exports = {
        IteratorPrototype: i,
        BUGGY_SAFARI_ITERATORS: m
    }
}, function(t, n, e) {
    var i = e(9);
    t.exports = i("document", "documentElement")
}, function(t, n, e) {
    var i = e(5),
        r = e(84);
    t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var t, n = !1,
            e = {};
        try {
            (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e, []), n = e instanceof Array
        } catch (t) {}
        return function(e, o) {
            return i(e), r(o), n ? t.call(e, o) : e.__proto__ = o, e
        }
    }() : void 0)
}, function(t, n, e) {
    var i = e(0);
    t.exports = i.Promise
}, function(t, n, e) {
    var i = e(12);
    t.exports = function(t, n, e) {
        if (i(t), void 0 === n) return t;
        switch (e) {
            case 0:
                return function() {
                    return t.call(n)
                };
            case 1:
                return function(e) {
                    return t.call(n, e)
                };
            case 2:
                return function(e, i) {
                    return t.call(n, e, i)
                };
            case 3:
                return function(e, i, r) {
                    return t.call(n, e, i, r)
                }
        }
        return function() {
            return t.apply(n, arguments)
        }
    }
}, function(t, n, e) {
    var i = e(5),
        r = e(12),
        o = e(1)("species");
    t.exports = function(t, n) {
        var e, a = i(t).constructor;
        return void 0 === a || null == (e = i(a)[o]) ? n : r(e)
    }
}, function(t, n, e) {
    var i, r, o, a = e(0),
        s = e(2),
        d = e(13),
        A = e(56),
        c = e(53),
        u = e(24),
        m = e(59),
        l = a.location,
        f = a.setImmediate,
        p = a.clearImmediate,
        g = a.process,
        h = a.MessageChannel,
        w = a.Dispatch,
        y = 0,
        k = {},
        b = function(t) {
            if (k.hasOwnProperty(t)) {
                var n = k[t];
                delete k[t], n()
            }
        },
        v = function(t) {
            return function() {
                b(t)
            }
        },
        S = function(t) {
            b(t.data)
        },
        E = function(t) {
            a.postMessage(t + "", l.protocol + "//" + l.host)
        };
    f && p || (f = function(t) {
        for (var n = [], e = 1; arguments.length > e;) n.push(arguments[e++]);
        return k[++y] = function() {
            ("function" == typeof t ? t : Function(t)).apply(void 0, n)
        }, i(y), y
    }, p = function(t) {
        delete k[t]
    }, "process" == d(g) ? i = function(t) {
        g.nextTick(v(t))
    } : w && w.now ? i = function(t) {
        w.now(v(t))
    } : h && !m ? (o = (r = new h).port2, r.port1.onmessage = S, i = A(o.postMessage, o, 1)) : !a.addEventListener || "function" != typeof postMessage || a.importScripts || s(E) ? i = "onreadystatechange" in u("script") ? function(t) {
        c.appendChild(u("script")).onreadystatechange = function() {
            c.removeChild(this), b(t)
        }
    } : function(t) {
        setTimeout(v(t), 0)
    } : (i = E, a.addEventListener("message", S, !1))), t.exports = {
        set: f,
        clear: p
    }
}, function(t, n, e) {
    var i = e(60);
    t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(i)
}, function(t, n, e) {
    var i = e(9);
    t.exports = i("navigator", "userAgent") || ""
}, function(t, n, e) {
    var i = e(5),
        r = e(8),
        o = e(17);
    t.exports = function(t, n) {
        if (i(t), r(n) && n.constructor === t) return n;
        var e = o.f(t);
        return (0, e.resolve)(n), e.promise
    }
}, function(t, n, e) {
    "use strict";
    var i = e(6),
        r = e(12),
        o = e(17),
        a = e(21),
        s = e(20);
    i({
        target: "Promise",
        stat: !0
    }, {
        allSettled: function(t) {
            var n = this,
                e = o.f(n),
                i = e.resolve,
                d = e.reject,
                A = a((function() {
                    var e = r(n.resolve),
                        o = [],
                        a = 0,
                        d = 1;
                    s(t, (function(t) {
                        var r = a++,
                            s = !1;
                        o.push(void 0), d++, e.call(n, t).then((function(t) {
                            s || (s = !0, o[r] = {
                                status: "fulfilled",
                                value: t
                            }, --d || i(o))
                        }), (function(t) {
                            s || (s = !0, o[r] = {
                                status: "rejected",
                                reason: t
                            }, --d || i(o))
                        }))
                    })), --d || i(o)
                }));
            return A.error && d(A.value), e.promise
        }
    })
}, function(t, n, e) {
    var i = e(65);
    t.exports = i
}, function(t, n, e) {
    var i = e(75);
    e(101), e(102), e(103), e(104), t.exports = i
}, function(t, n, e) {
    e(66);
    var i = e(29);
    t.exports = i.Object.assign
}, function(t, n, e) {
    var i = e(6),
        r = e(74);
    i({
        target: "Object",
        stat: !0,
        forced: Object.assign !== r
    }, {
        assign: r
    })
}, function(t, n) {
    var e;
    e = function() {
        return this
    }();
    try {
        e = e || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (e = window)
    }
    t.exports = e
}, function(t, n, e) {
    var i = e(0),
        r = e(26),
        o = i.WeakMap;
    t.exports = "function" == typeof o && /native code/.test(r(o))
}, function(t, n, e) {
    var i = e(3),
        r = e(70),
        o = e(22),
        a = e(10);
    t.exports = function(t, n) {
        for (var e = r(n), s = a.f, d = o.f, A = 0; A < e.length; A++) {
            var c = e[A];
            i(t, c) || s(t, c, d(n, c))
        }
    }
}, function(t, n, e) {
    var i = e(9),
        r = e(71),
        o = e(45),
        a = e(5);
    t.exports = i("Reflect", "ownKeys") || function(t) {
        var n = r.f(a(t)),
            e = o.f;
        return e ? n.concat(e(t)) : n
    }
}, function(t, n, e) {
    var i = e(43),
        r = e(31).concat("length", "prototype");
    n.f = Object.getOwnPropertyNames || function(t) {
        return i(t, r)
    }
}, function(t, n, e) {
    var i = e(19),
        r = e(44),
        o = e(73),
        a = function(t) {
            return function(n, e, a) {
                var s, d = i(n),
                    A = r(d.length),
                    c = o(a, A);
                if (t && e != e) {
                    for (; A > c;)
                        if ((s = d[c++]) != s) return !0
                } else
                    for (; A > c; c++)
                        if ((t || c in d) && d[c] === e) return t || c || 0;
                return !t && -1
            }
        };
    t.exports = {
        includes: a(!0),
        indexOf: a(!1)
    }
}, function(t, n, e) {
    var i = e(30),
        r = Math.max,
        o = Math.min;
    t.exports = function(t, n) {
        var e = i(t);
        return e < 0 ? r(e + n, 0) : o(e, n)
    }
}, function(t, n, e) {
    "use strict";
    var i = e(7),
        r = e(2),
        o = e(47),
        a = e(45),
        s = e(36),
        d = e(48),
        A = e(37),
        c = Object.assign,
        u = Object.defineProperty;
    t.exports = !c || r((function() {
        if (i && 1 !== c({
                b: 1
            }, c(u({}, "a", {
                enumerable: !0,
                get: function() {
                    u(this, "b", {
                        value: 3,
                        enumerable: !1
                    })
                }
            }), {
                b: 2
            })).b) return !0;
        var t = {},
            n = {},
            e = Symbol();
        return t[e] = 7, "abcdefghijklmnopqrst".split("").forEach((function(t) {
            n[t] = t
        })), 7 != c({}, t)[e] || "abcdefghijklmnopqrst" != o(c({}, n)).join("")
    })) ? function(t, n) {
        for (var e = d(t), r = arguments.length, c = 1, u = a.f, m = s.f; r > c;)
            for (var l, f = A(arguments[c++]), p = u ? o(f).concat(u(f)) : o(f), g = p.length, h = 0; g > h;) l = p[h++], i && !m.call(f, l) || (e[l] = f[l]);
        return e
    } : c
}, function(t, n, e) {
    e(76), e(79), e(85), e(89), e(62), e(100);
    var i = e(29);
    t.exports = i.Promise
}, function(t, n, e) {
    var i = e(32),
        r = e(11),
        o = e(78);
    i || r(Object.prototype, "toString", o, {
        unsafe: !0
    })
}, function(t, n, e) {
    var i = e(49);
    t.exports = i && !Symbol.sham && "symbol" == typeof Symbol()
}, function(t, n, e) {
    "use strict";
    var i = e(32),
        r = e(50);
    t.exports = i ? {}.toString : function() {
        return "[object " + r(this) + "]"
    }
}, function(t, n, e) {
    "use strict";
    var i = e(80).charAt,
        r = e(14),
        o = e(51),
        a = r.set,
        s = r.getterFor("String Iterator");
    o(String, "String", (function(t) {
        a(this, {
            type: "String Iterator",
            string: String(t),
            index: 0
        })
    }), (function() {
        var t, n = s(this),
            e = n.string,
            r = n.index;
        return r >= e.length ? {
            value: void 0,
            done: !0
        } : (t = i(e, r), n.index += t.length, {
            value: t,
            done: !1
        })
    }))
}, function(t, n, e) {
    var i = e(30),
        r = e(23),
        o = function(t) {
            return function(n, e) {
                var o, a, s = String(r(n)),
                    d = i(e),
                    A = s.length;
                return d < 0 || d >= A ? t ? "" : void 0 : (o = s.charCodeAt(d)) < 55296 || o > 56319 || d + 1 === A || (a = s.charCodeAt(d + 1)) < 56320 || a > 57343 ? t ? s.charAt(d) : o : t ? s.slice(d, d + 2) : a - 56320 + (o - 55296 << 10) + 65536
            }
        };
    t.exports = {
        codeAt: o(!1),
        charAt: o(!0)
    }
}, function(t, n, e) {
    "use strict";
    var i = e(52).IteratorPrototype,
        r = e(34),
        o = e(18),
        a = e(35),
        s = e(16),
        d = function() {
            return this
        };
    t.exports = function(t, n, e) {
        var A = n + " Iterator";
        return t.prototype = r(i, {
            next: o(1, e)
        }), a(t, A, !1, !0), s[A] = d, t
    }
}, function(t, n, e) {
    var i = e(2);
    t.exports = !i((function() {
        function t() {}
        return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
    }))
}, function(t, n, e) {
    var i = e(7),
        r = e(10),
        o = e(5),
        a = e(47);
    t.exports = i ? Object.defineProperties : function(t, n) {
        o(t);
        for (var e, i = a(n), s = i.length, d = 0; s > d;) r.f(t, e = i[d++], n[e]);
        return t
    }
}, function(t, n, e) {
    var i = e(8);
    t.exports = function(t) {
        if (!i(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
        return t
    }
}, function(t, n, e) {
    var i = e(0),
        r = e(86),
        o = e(87),
        a = e(4),
        s = e(1),
        d = s("iterator"),
        A = s("toStringTag"),
        c = o.values;
    for (var u in r) {
        var m = i[u],
            l = m && m.prototype;
        if (l) {
            if (l[d] !== c) try {
                a(l, d, c)
            } catch (t) {
                l[d] = c
            }
            if (l[A] || a(l, A, u), r[u])
                for (var f in o)
                    if (l[f] !== o[f]) try {
                        a(l, f, o[f])
                    } catch (t) {
                        l[f] = o[f]
                    }
        }
    }
}, function(t, n) {
    t.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }
}, function(t, n, e) {
    "use strict";
    var i = e(19),
        r = e(88),
        o = e(16),
        a = e(14),
        s = e(51),
        d = a.set,
        A = a.getterFor("Array Iterator");
    t.exports = s(Array, "Array", (function(t, n) {
        d(this, {
            type: "Array Iterator",
            target: i(t),
            index: 0,
            kind: n
        })
    }), (function() {
        var t = A(this),
            n = t.target,
            e = t.kind,
            i = t.index++;
        return !n || i >= n.length ? (t.target = void 0, {
            value: void 0,
            done: !0
        }) : "keys" == e ? {
            value: i,
            done: !1
        } : "values" == e ? {
            value: n[i],
            done: !1
        } : {
            value: [i, n[i]],
            done: !1
        }
    }), "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
}, function(t, n, e) {
    var i = e(1),
        r = e(34),
        o = e(4),
        a = i("unscopables"),
        s = Array.prototype;
    null == s[a] && o(s, a, r(null)), t.exports = function(t) {
        s[a][t] = !0
    }
}, function(t, n, e) {
    "use strict";
    var i, r, o, a, s = e(6),
        d = e(15),
        A = e(0),
        c = e(9),
        u = e(55),
        m = e(11),
        l = e(90),
        f = e(35),
        p = e(91),
        g = e(8),
        h = e(12),
        w = e(92),
        y = e(13),
        k = e(26),
        b = e(20),
        v = e(96),
        S = e(57),
        E = e(58).set,
        z = e(97),
        x = e(61),
        T = e(98),
        C = e(17),
        B = e(21),
        P = e(14),
        I = e(46),
        _ = e(1),
        D = e(99),
        L = _("species"),
        O = "Promise",
        j = P.get,
        M = P.set,
        R = P.getterFor(O),
        Z = u,
        G = A.TypeError,
        F = A.document,
        Q = A.process,
        X = c("fetch"),
        N = C.f,
        U = N,
        H = "process" == y(Q),
        W = !!(F && F.createEvent && A.dispatchEvent),
        V = I(O, (function() {
            if (!(k(Z) !== String(Z))) {
                if (66 === D) return !0;
                if (!H && "function" != typeof PromiseRejectionEvent) return !0
            }
            if (d && !Z.prototype.finally) return !0;
            if (D >= 51 && /native code/.test(Z)) return !1;
            var t = Z.resolve(1),
                n = function(t) {
                    t((function() {}), (function() {}))
                };
            return (t.constructor = {})[L] = n, !(t.then((function() {})) instanceof n)
        })),
        K = V || !v((function(t) {
            Z.all(t).catch((function() {}))
        })),
        q = function(t) {
            var n;
            return !(!g(t) || "function" != typeof(n = t.then)) && n
        },
        J = function(t, n, e) {
            if (!n.notified) {
                n.notified = !0;
                var i = n.reactions;
                z((function() {
                    for (var r = n.value, o = 1 == n.state, a = 0; i.length > a;) {
                        var s, d, A, c = i[a++],
                            u = o ? c.ok : c.fail,
                            m = c.resolve,
                            l = c.reject,
                            f = c.domain;
                        try {
                            u ? (o || (2 === n.rejection && nt(t, n), n.rejection = 1), !0 === u ? s = r : (f && f.enter(), s = u(r), f && (f.exit(), A = !0)), s === c.promise ? l(G("Promise-chain cycle")) : (d = q(s)) ? d.call(s, m, l) : m(s)) : l(r)
                        } catch (t) {
                            f && !A && f.exit(), l(t)
                        }
                    }
                    n.reactions = [], n.notified = !1, e && !n.rejection && $(t, n)
                }))
            }
        },
        Y = function(t, n, e) {
            var i, r;
            W ? ((i = F.createEvent("Event")).promise = n, i.reason = e, i.initEvent(t, !1, !0), A.dispatchEvent(i)) : i = {
                promise: n,
                reason: e
            }, (r = A["on" + t]) ? r(i) : "unhandledrejection" === t && T("Unhandled promise rejection", e)
        },
        $ = function(t, n) {
            E.call(A, (function() {
                var e, i = n.value;
                if (tt(n) && (e = B((function() {
                        H ? Q.emit("unhandledRejection", i, t) : Y("unhandledrejection", t, i)
                    })), n.rejection = H || tt(n) ? 2 : 1, e.error)) throw e.value
            }))
        },
        tt = function(t) {
            return 1 !== t.rejection && !t.parent
        },
        nt = function(t, n) {
            E.call(A, (function() {
                H ? Q.emit("rejectionHandled", t) : Y("rejectionhandled", t, n.value)
            }))
        },
        et = function(t, n, e, i) {
            return function(r) {
                t(n, e, r, i)
            }
        },
        it = function(t, n, e, i) {
            n.done || (n.done = !0, i && (n = i), n.value = e, n.state = 2, J(t, n, !0))
        },
        rt = function(t, n, e, i) {
            if (!n.done) {
                n.done = !0, i && (n = i);
                try {
                    if (t === e) throw G("Promise can't be resolved itself");
                    var r = q(e);
                    r ? z((function() {
                        var i = {
                            done: !1
                        };
                        try {
                            r.call(e, et(rt, t, i, n), et(it, t, i, n))
                        } catch (e) {
                            it(t, i, e, n)
                        }
                    })) : (n.value = e, n.state = 1, J(t, n, !1))
                } catch (e) {
                    it(t, {
                        done: !1
                    }, e, n)
                }
            }
        };
    V && (Z = function(t) {
        w(this, Z, O), h(t), i.call(this);
        var n = j(this);
        try {
            t(et(rt, this, n), et(it, this, n))
        } catch (t) {
            it(this, n, t)
        }
    }, (i = function(t) {
        M(this, {
            type: O,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0
        })
    }).prototype = l(Z.prototype, {
        then: function(t, n) {
            var e = R(this),
                i = N(S(this, Z));
            return i.ok = "function" != typeof t || t, i.fail = "function" == typeof n && n, i.domain = H ? Q.domain : void 0, e.parent = !0, e.reactions.push(i), 0 != e.state && J(this, e, !1), i.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }), r = function() {
        var t = new i,
            n = j(t);
        this.promise = t, this.resolve = et(rt, t, n), this.reject = et(it, t, n)
    }, C.f = N = function(t) {
        return t === Z || t === o ? new r(t) : U(t)
    }, d || "function" != typeof u || (a = u.prototype.then, m(u.prototype, "then", (function(t, n) {
        var e = this;
        return new Z((function(t, n) {
            a.call(e, t, n)
        })).then(t, n)
    }), {
        unsafe: !0
    }), "function" == typeof X && s({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(t) {
            return x(Z, X.apply(A, arguments))
        }
    }))), s({
        global: !0,
        wrap: !0,
        forced: V
    }, {
        Promise: Z
    }), f(Z, O, !1, !0), p(O), o = c(O), s({
        target: O,
        stat: !0,
        forced: V
    }, {
        reject: function(t) {
            var n = N(this);
            return n.reject.call(void 0, t), n.promise
        }
    }), s({
        target: O,
        stat: !0,
        forced: d || V
    }, {
        resolve: function(t) {
            return x(d && this === o ? Z : this, t)
        }
    }), s({
        target: O,
        stat: !0,
        forced: K
    }, {
        all: function(t) {
            var n = this,
                e = N(n),
                i = e.resolve,
                r = e.reject,
                o = B((function() {
                    var e = h(n.resolve),
                        o = [],
                        a = 0,
                        s = 1;
                    b(t, (function(t) {
                        var d = a++,
                            A = !1;
                        o.push(void 0), s++, e.call(n, t).then((function(t) {
                            A || (A = !0, o[d] = t, --s || i(o))
                        }), r)
                    })), --s || i(o)
                }));
            return o.error && r(o.value), e.promise
        },
        race: function(t) {
            var n = this,
                e = N(n),
                i = e.reject,
                r = B((function() {
                    var r = h(n.resolve);
                    b(t, (function(t) {
                        r.call(n, t).then(e.resolve, i)
                    }))
                }));
            return r.error && i(r.value), e.promise
        }
    })
}, function(t, n, e) {
    var i = e(11);
    t.exports = function(t, n, e) {
        for (var r in n) i(t, r, n[r], e);
        return t
    }
}, function(t, n, e) {
    "use strict";
    var i = e(9),
        r = e(10),
        o = e(1),
        a = e(7),
        s = o("species");
    t.exports = function(t) {
        var n = i(t),
            e = r.f;
        a && n && !n[s] && e(n, s, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(t, n) {
    t.exports = function(t, n, e) {
        if (!(t instanceof n)) throw TypeError("Incorrect " + (e ? e + " " : "") + "invocation");
        return t
    }
}, function(t, n, e) {
    var i = e(1),
        r = e(16),
        o = i("iterator"),
        a = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (r.Array === t || a[o] === t)
    }
}, function(t, n, e) {
    var i = e(50),
        r = e(16),
        o = e(1)("iterator");
    t.exports = function(t) {
        if (null != t) return t[o] || t["@@iterator"] || r[i(t)]
    }
}, function(t, n, e) {
    var i = e(5);
    t.exports = function(t, n, e, r) {
        try {
            return r ? n(i(e)[0], e[1]) : n(e)
        } catch (n) {
            var o = t.return;
            throw void 0 !== o && i(o.call(t)), n
        }
    }
}, function(t, n, e) {
    var i = e(1)("iterator"),
        r = !1;
    try {
        var o = 0,
            a = {
                next: function() {
                    return {
                        done: !!o++
                    }
                },
                return: function() {
                    r = !0
                }
            };
        a[i] = function() {
            return this
        }, Array.from(a, (function() {
            throw 2
        }))
    } catch (t) {}
    t.exports = function(t, n) {
        if (!n && !r) return !1;
        var e = !1;
        try {
            var o = {};
            o[i] = function() {
                return {
                    next: function() {
                        return {
                            done: e = !0
                        }
                    }
                }
            }, t(o)
        } catch (t) {}
        return e
    }
}, function(t, n, e) {
    var i, r, o, a, s, d, A, c, u = e(0),
        m = e(22).f,
        l = e(13),
        f = e(58).set,
        p = e(59),
        g = u.MutationObserver || u.WebKitMutationObserver,
        h = u.process,
        w = u.Promise,
        y = "process" == l(h),
        k = m(u, "queueMicrotask"),
        b = k && k.value;
    b || (i = function() {
        var t, n;
        for (y && (t = h.domain) && t.exit(); r;) {
            n = r.fn, r = r.next;
            try {
                n()
            } catch (t) {
                throw r ? a() : o = void 0, t
            }
        }
        o = void 0, t && t.enter()
    }, y ? a = function() {
        h.nextTick(i)
    } : g && !p ? (s = !0, d = document.createTextNode(""), new g(i).observe(d, {
        characterData: !0
    }), a = function() {
        d.data = s = !s
    }) : w && w.resolve ? (A = w.resolve(void 0), c = A.then, a = function() {
        c.call(A, i)
    }) : a = function() {
        f.call(u, i)
    }), t.exports = b || function(t) {
        var n = {
            fn: t,
            next: void 0
        };
        o && (o.next = n), r || (r = n, a()), o = n
    }
}, function(t, n, e) {
    var i = e(0);
    t.exports = function(t, n) {
        var e = i.console;
        e && e.error && (1 === arguments.length ? e.error(t) : e.error(t, n))
    }
}, function(t, n, e) {
    var i, r, o = e(0),
        a = e(60),
        s = o.process,
        d = s && s.versions,
        A = d && d.v8;
    A ? r = (i = A.split("."))[0] + i[1] : a && (!(i = a.match(/Edge\/(\d+)/)) || i[1] >= 74) && (i = a.match(/Chrome\/(\d+)/)) && (r = i[1]), t.exports = r && +r
}, function(t, n, e) {
    "use strict";
    var i = e(6),
        r = e(15),
        o = e(55),
        a = e(2),
        s = e(9),
        d = e(57),
        A = e(61),
        c = e(11);
    i({
        target: "Promise",
        proto: !0,
        real: !0,
        forced: !!o && a((function() {
            o.prototype.finally.call({
                then: function() {}
            }, (function() {}))
        }))
    }, {
        finally: function(t) {
            var n = d(this, s("Promise")),
                e = "function" == typeof t;
            return this.then(e ? function(e) {
                return A(n, t()).then((function() {
                    return e
                }))
            } : t, e ? function(e) {
                return A(n, t()).then((function() {
                    throw e
                }))
            } : t)
        }
    }), r || "function" != typeof o || o.prototype.finally || c(o.prototype, "finally", s("Promise").prototype.finally)
}, function(t, n, e) {
    "use strict";
    var i = e(6),
        r = e(7),
        o = e(33),
        a = e(54),
        s = e(34),
        d = e(10),
        A = e(18),
        c = e(20),
        u = e(4),
        m = e(14),
        l = m.set,
        f = m.getterFor("AggregateError"),
        p = function(t, n) {
            var e = this;
            if (!(e instanceof p)) return new p(t, n);
            a && (e = a(new Error(n), o(e)));
            var i = [];
            return c(t, i.push, i), r ? l(e, {
                errors: i,
                type: "AggregateError"
            }) : e.errors = i, void 0 !== n && u(e, "message", String(n)), e
        };
    p.prototype = s(Error.prototype, {
        constructor: A(5, p),
        message: A(5, ""),
        name: A(5, "AggregateError")
    }), r && d.f(p.prototype, "errors", {
        get: function() {
            return f(this).errors
        },
        configurable: !0
    }), i({
        global: !0
    }, {
        AggregateError: p
    })
}, function(t, n, e) {
    e(62)
}, function(t, n, e) {
    "use strict";
    var i = e(6),
        r = e(17),
        o = e(21);
    i({
        target: "Promise",
        stat: !0
    }, {
        try: function(t) {
            var n = r.f(this),
                e = o(t);
            return (e.error ? n.reject : n.resolve)(e.value), n.promise
        }
    })
}, function(t, n, e) {
    "use strict";
    var i = e(6),
        r = e(12),
        o = e(9),
        a = e(17),
        s = e(21),
        d = e(20);
    i({
        target: "Promise",
        stat: !0
    }, {
        any: function(t) {
            var n = this,
                e = a.f(n),
                i = e.resolve,
                A = e.reject,
                c = s((function() {
                    var e = r(n.resolve),
                        a = [],
                        s = 0,
                        c = 1,
                        u = !1;
                    d(t, (function(t) {
                        var r = s++,
                            d = !1;
                        a.push(void 0), c++, e.call(n, t).then((function(t) {
                            d || u || (u = !0, i(t))
                        }), (function(t) {
                            d || u || (d = !0, a[r] = t, --c || A(new(o("AggregateError"))(a, "No one promise resolved")))
                        }))
                    })), --c || A(new(o("AggregateError"))(a, "No one promise resolved"))
                }));
            return c.error && A(c.value), e.promise
        }
    })
}, function(t, n) {
    ! function(t) {
        "use strict";
        if (!t.fetch) {
            var n = {
                searchParams: "URLSearchParams" in t,
                iterable: "Symbol" in t && "iterator" in Symbol,
                blob: "FileReader" in t && "Blob" in t && function() {
                    try {
                        return new Blob, !0
                    } catch (t) {
                        return !1
                    }
                }(),
                formData: "FormData" in t,
                arrayBuffer: "ArrayBuffer" in t
            };
            if (n.arrayBuffer) var e = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                i = function(t) {
                    return t && DataView.prototype.isPrototypeOf(t)
                },
                r = ArrayBuffer.isView || function(t) {
                    return t && e.indexOf(Object.prototype.toString.call(t)) > -1
                };
            c.prototype.append = function(t, n) {
                t = s(t), n = d(n);
                var e = this.map[t];
                this.map[t] = e ? e + "," + n : n
            }, c.prototype.delete = function(t) {
                delete this.map[s(t)]
            }, c.prototype.get = function(t) {
                return t = s(t), this.has(t) ? this.map[t] : null
            }, c.prototype.has = function(t) {
                return this.map.hasOwnProperty(s(t))
            }, c.prototype.set = function(t, n) {
                this.map[s(t)] = d(n)
            }, c.prototype.forEach = function(t, n) {
                for (var e in this.map) this.map.hasOwnProperty(e) && t.call(n, this.map[e], e, this)
            }, c.prototype.keys = function() {
                var t = [];
                return this.forEach((function(n, e) {
                    t.push(e)
                })), A(t)
            }, c.prototype.values = function() {
                var t = [];
                return this.forEach((function(n) {
                    t.push(n)
                })), A(t)
            }, c.prototype.entries = function() {
                var t = [];
                return this.forEach((function(n, e) {
                    t.push([e, n])
                })), A(t)
            }, n.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
            var o = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            g.prototype.clone = function() {
                return new g(this, {
                    body: this._bodyInit
                })
            }, p.call(g.prototype), p.call(w.prototype), w.prototype.clone = function() {
                return new w(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new c(this.headers),
                    url: this.url
                })
            }, w.error = function() {
                var t = new w(null, {
                    status: 0,
                    statusText: ""
                });
                return t.type = "error", t
            };
            var a = [301, 302, 303, 307, 308];
            w.redirect = function(t, n) {
                if (-1 === a.indexOf(n)) throw new RangeError("Invalid status code");
                return new w(null, {
                    status: n,
                    headers: {
                        location: t
                    }
                })
            }, t.Headers = c, t.Request = g, t.Response = w, t.fetch = function(t, e) {
                return new Promise((function(i, r) {
                    var o = new g(t, e),
                        a = new XMLHttpRequest;
                    a.onload = function() {
                        var t, n, e = {
                            status: a.status,
                            statusText: a.statusText,
                            headers: (t = a.getAllResponseHeaders() || "", n = new c, t.split(/\r?\n/).forEach((function(t) {
                                var e = t.split(":"),
                                    i = e.shift().trim();
                                if (i) {
                                    var r = e.join(":").trim();
                                    n.append(i, r)
                                }
                            })), n)
                        };
                        e.url = "responseURL" in a ? a.responseURL : e.headers.get("X-Request-URL");
                        var r = "response" in a ? a.response : a.responseText;
                        i(new w(r, e))
                    }, a.onerror = function() {
                        r(new TypeError("Network request failed"))
                    }, a.ontimeout = function() {
                        r(new TypeError("Network request failed"))
                    }, a.open(o.method, o.url, !0), "include" === o.credentials && (a.withCredentials = !0), "responseType" in a && n.blob && (a.responseType = "blob"), o.headers.forEach((function(t, n) {
                        a.setRequestHeader(n, t)
                    })), a.send(void 0 === o._bodyInit ? null : o._bodyInit)
                }))
            }, t.fetch.polyfill = !0
        }

        function s(t) {
            if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
            return t.toLowerCase()
        }

        function d(t) {
            return "string" != typeof t && (t = String(t)), t
        }

        function A(t) {
            var e = {
                next: function() {
                    var n = t.shift();
                    return {
                        done: void 0 === n,
                        value: n
                    }
                }
            };
            return n.iterable && (e[Symbol.iterator] = function() {
                return e
            }), e
        }

        function c(t) {
            this.map = {}, t instanceof c ? t.forEach((function(t, n) {
                this.append(n, t)
            }), this) : Array.isArray(t) ? t.forEach((function(t) {
                this.append(t[0], t[1])
            }), this) : t && Object.getOwnPropertyNames(t).forEach((function(n) {
                this.append(n, t[n])
            }), this)
        }

        function u(t) {
            if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0
        }

        function m(t) {
            return new Promise((function(n, e) {
                t.onload = function() {
                    n(t.result)
                }, t.onerror = function() {
                    e(t.error)
                }
            }))
        }

        function l(t) {
            var n = new FileReader,
                e = m(n);
            return n.readAsArrayBuffer(t), e
        }

        function f(t) {
            if (t.slice) return t.slice(0);
            var n = new Uint8Array(t.byteLength);
            return n.set(new Uint8Array(t)), n.buffer
        }

        function p() {
            return this.bodyUsed = !1, this._initBody = function(t) {
                if (this._bodyInit = t, t)
                    if ("string" == typeof t) this._bodyText = t;
                    else if (n.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                else if (n.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                else if (n.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
                else if (n.arrayBuffer && n.blob && i(t)) this._bodyArrayBuffer = f(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                else {
                    if (!n.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !r(t)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = f(t)
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : n.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, n.blob && (this.blob = function() {
                var t = u(this);
                if (t) return t;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? u(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(l)
            }), this.text = function() {
                var t, n, e, i = u(this);
                if (i) return i;
                if (this._bodyBlob) return t = this._bodyBlob, n = new FileReader, e = m(n), n.readAsText(t), e;
                if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                    for (var n = new Uint8Array(t), e = new Array(n.length), i = 0; i < n.length; i++) e[i] = String.fromCharCode(n[i]);
                    return e.join("")
                }(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, n.formData && (this.formData = function() {
                return this.text().then(h)
            }), this.json = function() {
                return this.text().then(JSON.parse)
            }, this
        }

        function g(t, n) {
            var e, i, r = (n = n || {}).body;
            if (t instanceof g) {
                if (t.bodyUsed) throw new TypeError("Already read");
                this.url = t.url, this.credentials = t.credentials, n.headers || (this.headers = new c(t.headers)), this.method = t.method, this.mode = t.mode, r || null == t._bodyInit || (r = t._bodyInit, t.bodyUsed = !0)
            } else this.url = String(t);
            if (this.credentials = n.credentials || this.credentials || "omit", !n.headers && this.headers || (this.headers = new c(n.headers)), this.method = (e = n.method || this.method || "GET", i = e.toUpperCase(), o.indexOf(i) > -1 ? i : e), this.mode = n.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(r)
        }

        function h(t) {
            var n = new FormData;
            return t.trim().split("&").forEach((function(t) {
                if (t) {
                    var e = t.split("="),
                        i = e.shift().replace(/\+/g, " "),
                        r = e.join("=").replace(/\+/g, " ");
                    n.append(decodeURIComponent(i), decodeURIComponent(r))
                }
            })), n
        }

        function w(t, n) {
            n || (n = {}), this.type = "default", this.status = "status" in n ? n.status : 200, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in n ? n.statusText : "OK", this.headers = new c(n.headers), this.url = n.url || "", this._initBody(t)
        }
    }("undefined" != typeof self ? self : this)
}, function(t, n) { /*!@source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
    "document" in window.self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || function(t) {
        "use strict";
        if ("Element" in t) {
            var n = t.Element.prototype,
                e = Object,
                i = String.prototype.trim || function() {
                    return this.replace(/^\s+|\s+$/g, "")
                },
                r = Array.prototype.indexOf || function(t) {
                    for (var n = 0, e = this.length; n < e; n++)
                        if (n in this && this[n] === t) return n;
                    return -1
                },
                o = function(t, n) {
                    this.name = t, this.code = DOMException[t], this.message = n
                },
                a = function(t, n) {
                    if ("" === n) throw new o("SYNTAX_ERR", "An invalid or illegal string was specified");
                    if (/\s/.test(n)) throw new o("INVALID_CHARACTER_ERR", "String contains an invalid character");
                    return r.call(t, n)
                },
                s = function(t) {
                    for (var n = i.call(t.getAttribute("class") || ""), e = n ? n.split(/\s+/) : [], r = 0, o = e.length; r < o; r++) this.push(e[r]);
                    this._updateClassName = function() {
                        t.setAttribute("class", this.toString())
                    }
                },
                d = s.prototype = [],
                A = function() {
                    return new s(this)
                };
            if (o.prototype = Error.prototype, d.item = function(t) {
                    return this[t] || null
                }, d.contains = function(t) {
                    return -1 !== a(this, t += "")
                }, d.add = function() {
                    var t, n = arguments,
                        e = 0,
                        i = n.length,
                        r = !1;
                    do {
                        t = n[e] + "", -1 === a(this, t) && (this.push(t), r = !0)
                    } while (++e < i);
                    r && this._updateClassName()
                }, d.remove = function() {
                    var t, n, e = arguments,
                        i = 0,
                        r = e.length,
                        o = !1;
                    do {
                        for (t = e[i] + "", n = a(this, t); - 1 !== n;) this.splice(n, 1), o = !0, n = a(this, t)
                    } while (++i < r);
                    o && this._updateClassName()
                }, d.toggle = function(t, n) {
                    t += "";
                    var e = this.contains(t),
                        i = e ? !0 !== n && "remove" : !1 !== n && "add";
                    return i && this[i](t), !0 === n || !1 === n ? n : !e
                }, d.toString = function() {
                    return this.join(" ")
                }, e.defineProperty) {
                var c = {
                    get: A,
                    enumerable: !0,
                    configurable: !0
                };
                try {
                    e.defineProperty(n, "classList", c)
                } catch (t) {
                    void 0 !== t.number && -2146823252 !== t.number || (c.enumerable = !1, e.defineProperty(n, "classList", c))
                }
            } else e.prototype.__defineGetter__ && n.__defineGetter__("classList", A)
        }
    }(window.self), function() {
        "use strict";
        var t = document.createElement("_");
        if (t.classList.add("c1", "c2"), !t.classList.contains("c2")) {
            var n = function(t) {
                var n = DOMTokenList.prototype[t];
                DOMTokenList.prototype[t] = function(t) {
                    var e, i = arguments.length;
                    for (e = 0; e < i; e++) t = arguments[e], n.call(this, t)
                }
            };
            n("add"), n("remove")
        }
        if (t.classList.toggle("c3", !1), t.classList.contains("c3")) {
            var e = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(t, n) {
                return 1 in arguments && !this.contains(t) == !n ? n : e.call(this, t)
            }
        }
        t = null
    }())
}, function(t, n, e) {
    "use strict";
    e.r(n);
    var i = e(63),
        r = e.n(i),
        o = e(64),
        a = e.n(o);
    e(105), e(106);
    void 0 === Object.assign && (Object.assign = r.a), "undefined" == typeof Promise && (window.Promise = a.a);
    var s = {
            ready: "pokiAppReady",
            adblocked: "pokiAppAdblocked",
            ads: {
                completed: "pokiAdsCompleted",
                error: "pokiAdsError",
                displayError: "pokiAdsDisplayError",
                impression: "pokiAdsImpression",
                durationChange: "pokiAdsDurationChange",
                limit: "pokiAdsLimit",
                ready: "pokiAdsReady",
                requested: "pokiAdsRequested",
                skipped: "pokiAdsSkipped",
                started: "pokiAdsStarted",
                stopped: "pokiAdsStopped",
                busy: "pokiAdsBusy",
                pushedToPlatform: "pokiPushedToPlatform",
                position: {
                    preroll: "PP",
                    midroll: "PM",
                    rewarded: "PR"
                },
                video: {
                    clicked: "pokiVideoAdsClicked",
                    firstQuartile: "pokiVideoAdsFirstQuartile",
                    midPoint: "pokiVideoAdsMidPoint",
                    thirdQuartile: "pokiVideoAdsThirdQuartile",
                    error: "pokiVideoAdsError",
                    paused: "pokiVideoAdsPauseTriggered",
                    resumed: "pokiVideoAdsResumedTriggered",
                    progress: "pokiVideoAdsProgress"
                }
            },
            info: {
                messages: {
                    timeLimit: "The ad-request was not processed, because of a time constraint",
                    prerollLimit: "The ad-request was cancelled, because we're not allowed to show a preroll"
                }
            },
            message: {
                event: "pokiMessageEvent",
                sdkDetails: "pokiMessageSdkDetails",
                toggleProgrammaticAds: "pokiMessageToggleProgrammaticAds",
                runAdOnPlatform: "pokiMessageRunAdOnPlatform",
                minimizeAd: "pokiMessageMinimizeAd"
            },
            tracking: {
                custom: "pokiTrackingCustom",
                setPlayerAge: "pokiTrackingSetPlayerAge",
                togglePlayerAdvertisingConsent: "pokiTrackingTogglePlayerAdvertisingConsent",
                manualSkipButton: "pokiTrackingManualSkipButton",
                minimizeButton: "pokiTrackingMinimizeButton",
                screen: {
                    gameplayStart: "pokiTrackingScreenGameplayStart",
                    gameplayStop: "pokiTrackingScreenGameplayStop",
                    gameLoadingStarted: "pokiTrackingScreenGameLoadingStarted",
                    gameLoadingProgress: "pokiTrackingScreenGameLoadingProgress",
                    gameLoadingFinished: "pokiTrackingScreenGameLoadingFinished",
                    commercialBreak: "pokiTrackingScreenCommercialBreak",
                    rewardedBreak: "pokiTrackingScreenRewardedBreak",
                    happyTime: "pokiTrackingScreenHappyTime",
                    firstRound: "pokiTrackingScreenFirstRound",
                    roundStart: "pokiTrackingScreenRoundStart",
                    roundEnd: "pokiTrackingScreenRoundEnd",
                    gameInteractive: "pokiTrackingScreenGameInteractive",
                    displayAd: "pokiTrackingScreenDisplayAdRequest",
                    destroyAd: "pokiTrackingScreenDisplayAdDestroy"
                },
                sdk: {
                    status: {
                        initialized: "pokiTrackingSdkStatusInitialized",
                        failed: "pokiTrackingSdkStatusFailed"
                    }
                },
                ads: {
                    status: {
                        busy: "pokiTrackingAdsStatusBusy",
                        completed: "pokiTrackingAdsStatusCompleted",
                        error: "pokiTrackingAdsStatusError",
                        displayError: "pokiTrackingAdsStatusDisplayError",
                        impression: "pokiTrackingAdsStatusImpression",
                        limit: "pokiTrackingAdsStatusLimit",
                        ready: "pokiTrackingAdsStatusReady",
                        requested: "pokiTrackingAdsStatusRequested",
                        skipped: "pokiTrackingAdsStatusSkipped",
                        started: "pokiTrackingAdsStatusStarted"
                    },
                    video: {
                        clicked: "pokiTrackingAdsVideoClicked"
                    }
                }
            }
        },
        d = function() {
            return (d = Object.assign || function(t) {
                for (var n, e = 1, i = arguments.length; e < i; e++)
                    for (var r in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                return t
            }).apply(this, arguments)
        },
        A = function() {
            function t() {}
            return t.clearEventListeners = function() {
                this.listeners = {}
            }, t.removeEventListener = function(t, n) {
                if (Object.prototype.hasOwnProperty.call(this.listeners, t)) {
                    var e = this.listeners[t].indexOf(n); - 1 !== e && this.listeners[t].splice(e, 1)
                }
            }, t.addEventListener = function(t, n, e) {
                var i = this;
                if (void 0 === e && (e = !1), e = !!e, Object.prototype.hasOwnProperty.call(this.listeners, t) || (this.listeners[t] = []), e) {
                    var r = function(e) {
                        i.removeEventListener.bind(i)(t, r), n(e)
                    };
                    this.listeners[t].push(r)
                } else this.listeners[t].push(n)
            }, t.dispatchEvent = function(t, n) {
                void 0 === n && (n = {}), !this.debug || window.process && window.process.env && "test" === window.process.env.NODE_ENV || console.info(t, n);
                for (var e = Object.keys(this.listeners), i = 0; i < e.length; i++) {
                    var r = e[i];
                    if (t === r)
                        for (var o = this.listeners[r], a = 0; a < o.length; a++) o[a](d(d({}, this.dataAnnotations), n))
                }
            }, t.setDebug = function(t) {
                this.debug = t
            }, t.setDataAnnotations = function(t) {
                this.dataAnnotations = d(d({}, this.dataAnnotations), t)
            }, t.clearAnnotations = function() {
                this.dataAnnotations = {}
            }, t.listeners = {}, t.debug = !1, t.dataAnnotations = {}, t
        }(),
        c = function(t, n) {
            var e = !1;
            return Object.keys(n).forEach((function(i) {
                n[i] === t && (e = !0)
            })), e
        },
        u = function() {
            function t() {}
            return t.sendMessage = function(t, n) {
                void 0 === n && (n = {});
                var e = window.parent;
                if (!c(t, s.message)) {
                    var i = Object.keys(s.message).map((function(t) {
                        return "poki.message." + t
                    }));
                    throw new TypeError("Argument 'type' must be one of " + i.join(", "))
                }
                e.postMessage({
                    type: t,
                    content: n
                }, "*")
            }, t
        }(),
        m = function(t) {
            var n = new Array;
            return Object.keys(t).forEach((function(e) {
                "object" == typeof t[e] ? n = n.concat(m(t[e])) : n.push(t[e])
            })), n
        },
        l = m(s.tracking),
        f = function() {
            function t() {}
            return t.setDebug = function(t) {
                this.debug = t
            }, t.track = function(t, n) {
                if (void 0 === n && (n = {}), -1 === l.indexOf(t)) throw new TypeError("Invalid 'event', must be one of " + l.join(", "));
                if ("object" != typeof n) throw new TypeError("Invalid data, must be an object");
                if (this.debug) {
                    if (window.process && window.process.env && "test" === window.process.env.NODE_ENV) return;
                    Object.keys(n).length ? console.info("%cPOKI_TRACKER: %cTracked event '" + t + "' with data:", "font-weight: bold", "", n) : console.info("%cPOKI_TRACKER: %cTracked event '" + t + "'", "font-weight: bold", "")
                }
                u.sendMessage(s.message.event, {
                    event: t,
                    data: n
                })
            }, t.setupDefaultEvents = function() {
                var n, e = ((n = {})[s.ready] = s.tracking.sdk.status.initialized, n[s.adblocked] = s.tracking.sdk.status.failed, n[s.ads.busy] = s.tracking.ads.status.busy, n[s.ads.completed] = s.tracking.ads.status.completed, n[s.ads.error] = s.tracking.ads.status.error, n[s.ads.displayError] = s.tracking.ads.status.displayError, n[s.ads.impression] = s.tracking.ads.status.impression, n[s.ads.limit] = s.tracking.ads.status.limit, n[s.ads.ready] = s.tracking.ads.status.ready, n[s.ads.requested] = s.tracking.ads.status.requested, n[s.ads.skipped] = s.tracking.ads.status.skipped, n[s.ads.started] = s.tracking.ads.status.started, n[s.ads.video.clicked] = s.tracking.ads.video.clicked, n[s.tracking.screen.gameplayStart] = s.tracking.screen.gameplayStart, n[s.tracking.screen.gameplayStop] = s.tracking.screen.gameplayStop, n[s.tracking.screen.loadingProgress] = s.tracking.screen.loadingProgress, n[s.tracking.screen.commercialBreak] = s.tracking.screen.commercialBreak, n[s.tracking.screen.rewardedBreak] = s.tracking.screen.rewardedBreak, n[s.tracking.screen.happyTime] = s.tracking.screen.happyTime, n);
                Object.keys(e).forEach((function(n) {
                    A.addEventListener(n, (function(i) {
                        t.track(e[n], i)
                    }))
                }))
            }, t.debug = !1, t
        }(),
        p = {
            hash: "G1L1",
            adTagUrl: "//pubads.g.doubleclick.net/gampad/ads?sz=640x360|640x480&iu=/1053551/Pub-Poki-Generic&ciu_szs&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&url={url}&description_url={descriptionUrl}&correlator={timestamp}",
            adTiming: {
                preroll: !1,
                timeBetweenAds: 12e4,
                timePerTry: 7e3,
                startAdsAfter: 12e4
            },
            waterfallRetries: 2,
            country: "NL"
        },
        g = function(t) {
            return t instanceof Array ? t : [t]
        },
        h = function() {
            function t(t) {
                void 0 === t && (t = {}), this.setTimings(t), this.timingIdx = {
                    timePerTry: 0
                }, this.timers = {
                    timePerTry: void 0,
                    timeBetweenAds: void 0,
                    startAdsAfter: void 0
                }, A.addEventListener(s.ads.requested, this.startTimeBetweenAdsTimer.bind(this)), A.addEventListener(s.ads.completed, this.startTimeBetweenAdsTimer.bind(this)), A.addEventListener(s.ads.stopped, this.startTimeBetweenAdsTimer.bind(this))
            }
            return t.prototype.setTimings = function(t) {
                var n = p.adTiming,
                    e = t.preroll,
                    i = void 0 === e ? n.preroll : e,
                    r = t.timePerTry,
                    o = void 0 === r ? n.timePerTry : r,
                    a = t.timeBetweenAds,
                    s = void 0 === a ? n.timeBetweenAds : a,
                    d = t.startAdsAfter,
                    A = void 0 === d ? n.startAdsAfter : d;
                this.timings = {
                    preroll: !1 !== i,
                    timePerTry: g(o),
                    timeBetweenAds: s,
                    startAdsAfter: A
                }
            }, t.prototype.startTimeBetweenAdsTimer = function() {
                this.startTimer("timeBetweenAds")
            }, t.prototype.startStartAdsAfterTimer = function() {
                this.startTimer("startAdsAfter")
            }, t.prototype.requestPossible = function() {
                return !this.timers.timeBetweenAds && !this.timers.startAdsAfter
            }, t.prototype.startWaterfallTimer = function(t) {
                this.startTimer("timePerTry", t)
            }, t.prototype.stopWaterfallTimer = function() {
                this.stopTimer("timePerTry")
            }, t.prototype.nextWaterfallTimer = function() {
                this.nextTiming("timePerTry")
            }, t.prototype.resetWaterfallTimerIdx = function() {
                this.resetTimingIdx("timePerTry")
            }, t.prototype.stopTimer = function(t) {
                this.timers[t] && (clearTimeout(this.timers[t]), this.timers[t] = void 0)
            }, t.prototype.startTimer = function(t, n) {
                var e = this;
                void 0 === n && (n = function() {}), this.getTiming(t) <= 0 ? n() : (this.timers[t] && clearTimeout(this.timers[t]), this.timers[t] = setTimeout((function() {
                    e.stopTimer(t), n()
                }), this.getTiming(t)))
            }, t.prototype.getTiming = function(t) {
                var n = this.timings[t];
                return n instanceof Array ? n[this.timingIdx[t]] : n
            }, t.prototype.nextTiming = function(t) {
                if (void 0 === this.timingIdx[t]) throw new Error("AdTimings Error: " + t + " does not have multiple timers");
                this.timingIdx[t] = (this.timingIdx[t] + 1) % this.timings[t].length
            }, t.prototype.resetTimingIdx = function(t) {
                if (void 0 === this.timingIdx[t]) throw new Error("AdTimings Error: " + t + " does not have multiple timers");
                this.timingIdx[t] = 0
            }, t.prototype.prerollPossible = function() {
                return this.timings.preroll
            }, t
        }(),
        w = function() {
            return window.location.href
        },
        y = function() {
            return "undefined" != typeof navigator && /(?:phone|windows\s+phone|ipod|blackberry|(?:android|bb\d+|meego|silk|googlebot) .+? mobile|palm|windows\s+ce|opera\smini|avantgo|mobilesafari|docomo)/i.test(navigator.userAgent)
        },
        k = function() {
            return "undefined" != typeof navigator && /(?:ipad|playbook|(?:android|bb\d+|meego|silk)(?! .+? mobile))/i.test(navigator.userAgent)
        },
        b = function(t, n) {
            t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var e = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(n || window.location.search);
            return null === e ? "" : decodeURIComponent(e[1].replace(/\+/g, " "))
        },
        v = function() {
            return (v = Object.assign || function(t) {
                for (var n, e = 1, i = arguments.length; e < i; e++)
                    for (var r in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                return t
            }).apply(this, arguments)
        },
        S = function() {
            for (var t = 0, n = 0, e = arguments.length; n < e; n++) t += arguments[n].length;
            var i = Array(t),
                r = 0;
            for (n = 0; n < e; n++)
                for (var o = arguments[n], a = 0, s = o.length; a < s; a++, r++) i[r] = o[a];
            return i
        },
        E = "rewarded",
        z = "video",
        x = {
            allowSmallerSizes: !0,
            frameworks: [2],
            h: 480,
            maxduration: 15,
            mimes: "undefined" != typeof navigator && /MSIE \\d|Trident.*rv:/i.test(navigator.userAgent) || y() || k() ? ["video/mp4"] : ["video/mp4", "video/webm", "video/ogg"],
            startdelay: 0,
            w: 640,
            video: {
                playback_method: ["auto_play_sound_on", "auto_play_sound_off", "auto_play_sound_unknown"]
            }
        },
        T = [{
            bidder: "appnexus",
            params: v(v({
                placementId: 13184250
            }, x), {
                video: v(v({}, x.video), {
                    skippable: !0
                })
            })
        }, {
            bidder: "appnexus",
            params: v(v({
                placementId: 13184309
            }, x), {
                video: v(v({}, x.video), {
                    skippable: !1,
                    maxduration: 15
                })
            })
        }, {
            bidder: "openx",
            params: {
                unit: "540105196",
                delDomain: "poki-d.openx.net",
                openrtb: {
                    imp: [{
                        video: {
                            mimes: [x.mimes.join(",")],
                            protocols: [2, 3, 5, 6, 7, 8],
                            maxduration: 15,
                            skip: 1,
                            skipafter: 5,
                            w: 640,
                            h: 480
                        }
                    }]
                }
            }
        }, {
            bidder: "openx",
            params: {
                unit: "540719065",
                delDomain: "poki-d.openx.net",
                openrtb: {
                    imp: [{
                        video: {
                            mimes: [x.mimes.join(",")],
                            protocols: [2, 3, 5, 6, 7, 8],
                            maxduration: 15,
                            skip: 0,
                            w: 640,
                            h: 480
                        }
                    }]
                }
            }
        }, {
            bidder: "districtm",
            params: v(v({
                placementId: 12906789
            }, x), {
                video: v(v({}, x.video), {
                    skippable: !1,
                    maxduration: 15
                })
            })
        }, {
            bidder: "spotx",
            params: {
                channel_id: "265590",
                ad_unit: "instream",
                secure: !0,
                mimes: x.mimes,
                hide_skin: !0
            }
        }, {
            bidder: "ix",
            params: {
                siteId: "436284",
                size: [640, 480],
                video: {
                    mimes: x.mimes,
                    protocols: [2, 3, 5, 6, 7, 8],
                    minduration: 0,
                    maxduration: 15
                }
            }
        }],
        C = {
            video: {
                context: "instream",
                playerSize: [640, 480],
                mimes: x.mimes,
                protocols: [2, 3, 5, 6, 7, 8],
                maxduration: 15,
                skip: 1,
                linearity: 1,
                api: [2]
            }
        },
        B = [{
            code: z,
            mediaTypes: C,
            bids: S(T, [{
                bidder: "rubicon",
                params: {
                    accountId: "18608",
                    siteId: "266914",
                    zoneId: "1322034",
                    video: {
                        size_id: 204
                    }
                }
            }])
        }, {
            code: E,
            mediaTypes: C,
            bids: S(T, [{
                bidder: "rubicon",
                params: {
                    accountId: "18608",
                    siteId: "266916",
                    zoneId: "1322048",
                    video: {
                        size_id: 202
                    }
                }
            }])
        }],
        P = {
            EUR: {
                EUR: 1,
                GBP: .858595,
                USD: 1.13151
            },
            GBP: {
                EUR: 1.164693481792929,
                GBP: 1,
                USD: 1.3178623215835172
            },
            USD: {
                EUR: .8837747788353616,
                GBP: .7588046062341472,
                USD: 1
            }
        },
        I = {
            debug: !1,
            enableSendAllBids: !0,
            usePrebidCache: !0,
            bidderTimeout: 1e3,
            priceGranularity: "dense",
            currency: {
                adServerCurrency: "EUR",
                rates: P,
                defaultRates: P,
                bidderCurrencyDefault: {
                    openx: "EUR"
                }
            },
            cache: {
                url: "https://prebid.adnxs.com/pbc/v1/cache"
            },
            userSync: {
                iframeEnabled: !0
            }
        };
    var _ = function() {
            function t(t, n) {
                void 0 === n && (n = {}), this.retries = 0, this.running = !1, this.ima = t, this.siteID = n.siteID || 3, 0 === n.siteID && (n.siteID = 3), this.totalRetries = n.totalRetries || p.waterfallRetries || 1, this.timing = n.timing || new h(p.adTiming), this.overwriteAdTagUrls = n.adTagUrl ? g(n.adTagUrl) : [], this.disableHB = n.disableHB || !1, this.opportunityId = "", A.addEventListener(s.ads.video.error, this.moveThroughWaterfall.bind(this)), A.addEventListener(s.ads.ready, this.timing.stopWaterfallTimer.bind(this.timing)), A.addEventListener(s.ads.started, this.stopWaterfall.bind(this))
            }
            return t.prototype.moveThroughWaterfall = function() {
                if (!1 !== this.running) {
                    if (this.timing.stopWaterfallTimer(), this.retries < this.totalRetries) return this.timing.nextWaterfallTimer(), void this.requestAd();
                    this.running = !1, this.timing.resetWaterfallTimerIdx(), A.dispatchEvent(s.ads.error, {
                        message: "No ads"
                    })
                }
            }, t.prototype.cutOffWaterfall = function() {
                this.ima.stopPlayback(), this.moveThroughWaterfall()
            }, t.prototype.buildAdTagUrls = function(t) {
                if (this.debug) return ["https://pubads.g.doubleclick.net/gampad/ads?sz=640x360|640x480&iu=/1053551/Pub-Poki-Generic&ciu_szs&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url={url}&description_url={descriptionUrl}&correlator={timestamp}"];
                if (this.overwriteAdTagUrls.length > 0 && at.GetIsPokiPlatform()) return this.overwriteAdTagUrls;
                var n = "desktop",
                    e = "midroll";
                y() ? n = "mobile" : k() && (n = "tablet"), t === s.ads.position.rewarded && (e = "rewarded");
                var i = "https://pubads.g.doubleclick.net/gampad/ads?sz=640x360|640x480&iu=/21682198607/",
                    r = "&ciu_szs&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url={url}&description_url={descriptionUrl}&correlator={timestamp}";
                return at.GetIsPokiIFrame() ? ["" + i + n + "_ingame_" + e + "_1/" + this.siteID + "_" + n + "_ingame_" + e + "_1" + r, "" + i + n + "_ingame_" + e + "_2/" + this.siteID + "_" + n + "_ingame_" + e + "_2" + r] : [i + "external_" + n + "_video_1/external_" + n + "_ingame_" + e + "_1" + r, i + "external_" + n + "_video_2/external_" + n + "_ingame_" + e + "_2" + r]
            }, t.prototype.start = function(t, n, e, i) {
                void 0 === t && (t = {}), this.running = !0, this.retries = 0, this.criteria = t, this.timing.resetWaterfallTimerIdx(), (e || []).length > 0 && (this.overwriteAdTagUrls = e || []), this.opportunityId = Math.random().toString(36).substring(2), this.rewarded = n === s.ads.position.rewarded, this.runAdOnPlatform = i || !1, this.adTagUrls = this.buildAdTagUrls(n), this.requestAd()
            }, t.prototype.requestAd = function() {
                this.timing.startWaterfallTimer(this.cutOffWaterfall.bind(this)), this.retries++, at.GetIsPokiPlatform() || (this.criteria.waterfall = this.retries);
                var t = (this.retries - 1) % this.adTagUrls.length,
                    n = this.adTagUrls[t],
                    e = this.criteria ? this.criteria.position : void 0;
                if (at.consentString && at.consentString.length > 0 && (this.criteria.consent_string = at.consentString), this.runAdOnPlatform) return u.sendMessage(s.message.runAdOnPlatform, {
                    position: e,
                    adTagUrls: this.adTagUrls,
                    criteria: this.criteria
                }), this.stopWaterfall(), void A.dispatchEvent(s.ads.pushedToPlatform);
                var i, r, o = function(t) {
                    var n = w().split("?"),
                        e = encodeURIComponent(n[0]);
                    return t = (t = t.split("{descriptionUrl}").join(e)).split("{timestamp}").join((new Date).getTime().toString())
                }(n) + (i = this.criteria, r = "", Object.keys(i).forEach((function(t) {
                    if (Object.prototype.hasOwnProperty.call(i, t)) {
                        var n = i[t];
                        Array.isArray(n) && (n = n.join()), r += t + "=" + n + "&"
                    }
                })), "&cust_params=" + (r = encodeURIComponent(r)) + "&");
                at.childDirected && (o += "&tfcd=1"), at.nonPersonalized && (o += "&npa=1"), A.setDataAnnotations({
                    adTagUrl: o,
                    opportunityId: this.opportunityId,
                    position: e,
                    waterfall: this.retries
                }), A.dispatchEvent(s.ads.requested), 1 !== this.retries || y() || k() || this.disableHB ? (console.debug("adRequest started in plain mode"), this.ima.requestAd(o)) : (console.debug("adRequest started with Prebid Video enabled"), function(t, n, e, i) {
                    if (window.pbjs && window.pbjs.que && window.pbjs.getConfig) {
                        var r = w().split("?"),
                            o = encodeURIComponent(r[0]),
                            a = i ? E : z;
                        window.pbjs.que.push((function() {
                            window.pbjs.requestBids({
                                adUnitCodes: [a],
                                bidsBackHandler: function() {
                                    try {
                                        var i = window.pbjs.adUnits.filter((function(t) {
                                            return t.code === a
                                        }))[0];
                                        if ("undefined" === i) return console.error("Video-ad-unit not found, did you give it the adunit.code='video' value?"), void t.requestAd(n);
                                        var r = window.pbjs.adServers.dfp.buildVideoUrl({
                                            adUnit: i,
                                            params: {
                                                iu: b("iu", n),
                                                sz: "640x360|640x480",
                                                output: "vast",
                                                cust_params: e,
                                                description_url: o
                                            }
                                        });
                                        window.pbjs.markWinningBidAsUsed({
                                            adUnitCode: a
                                        }), t.requestAd(r)
                                    } catch (e) {
                                        t.requestAd(n)
                                    }
                                }
                            })
                        }))
                    } else t.requestAd(n)
                }(this.ima, o, this.criteria, this.rewarded))
            }, t.prototype.isRunning = function() {
                return this.running
            }, t.prototype.stopWaterfall = function() {
                this.running = !1, this.timing.stopWaterfallTimer(), this.timing.resetWaterfallTimerIdx()
            }, t.prototype.setDebug = function(t) {
                this.debug = t
            }, t
        }(),
        D = "pokiSdkSkipCountdownContainer",
        L = "pokiSdkHidden",
        O = "pokiSdkPauseButton",
        j = "pokiSdkProgressBar",
        M = "pokiSdkSkipContainer",
        R = "pokiSdkSpinnerContainer",
        Z = "pokiSdkVisible",
        G = "\n@font-face {\n\tfont-display: swap;\n\tfont-family: 'Proxima Nova';\n\tfont-weight: 700;\n\tsrc: url(https://a.poki.com/fonts/proxima-nova-bold-latin.woff2) format('woff2'), url(https://a.poki.com/fonts/proxima-nova-bold-latin.woff) format('woff');\n\tunicode-range: U+0020-007F, U+00A0-00FF\n}\n\n@font-face {\n\tfont-display: swap;\n\tfont-family: 'Proxima Nova';\n\tfont-weight: 700;\n\tsrc: url(https://a.poki.com/fonts/proxima-nova-bold-latin-ext-a.woff2) format('woff2'), url(https://a.poki.com/fonts/proxima-nova-bold-latin-ext-a.woff) format('woff');\n\tunicode-range: U+0100-017F\n}\n\n@font-face {\n\tfont-display: swap;\n\tfont-family: 'Proxima Nova';\n\tfont-weight: 700;\n\tsrc: url(https://a.poki.com/fonts/proxima-nova-bold-latin-ext-b.woff2) format('woff2'), url(https://a.poki.com/fonts/proxima-nova-bold-latin-ext-b.woff) format('woff');\n\tunicode-range: U+0180-024F\n}\n\n.pokiSdkContainer {\n\toverflow: hidden;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 1000;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.pokiSdkContainer.pokiSdkFixed {\n\tposition: fixed;\n}\n\n.pokiSdkContainer." + Z + " {\n\tdisplay: block;\n}\n\n.pokiSdkContainer." + L + ", ." + R + "." + L + " {\n\tdisplay: none;\n}\n\n.pokiSdkContainer." + L + ", ." + R + ", ." + R + " div, ." + R + " img {\n\tpointer-events: none;\n}\n\n.pokiSdkInsideContainer {\n\tbackground: #000;\n\tposition: relative;\n\tz-index: 1;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\n\topacity: 0;\n\t-webkit-transition: opacity 0.5s ease-in-out;\n\t-moz-transition: opacity 0.5s ease-in-out;\n\t-ms-transition: opacity 0.5s ease-in-out;\n\t-o-transition: opacity 0.5s ease-in-out;\n\ttransition: opacity 0.5s ease-in-out;\n}\n\n.pokiSdkContainer." + Z + " .pokiSdkInsideContainer {\n\topacity: 1;\n}\n\n.pokiSDKAdContainer, .pokiSdkVideoContainer {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.pokiSdkStartAdButton, ." + O + " {\n\tposition: absolute;\n\tz-index: 9999;\n\ttop: 0;\n\n\tpadding-top: 10%;\n\twidth: 100%;\n\theight: 100%;\n\ttext-align: center;\n\tcolor: #FFF;\n\n\tfont: 700 16pt 'Proxima Nova', sans-serif;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n\ttransition: 0.1s ease-in-out;\n\tline-height: 1em;\n}\n\n.pokiSdkProgressContainer {\n\tbackground: #002B50;\n\twidth: 100%;\n\theight: 5px;\n\tposition: absolute;\n\tbottom: 0;\n\tz-index: 9999;\n}\n\n." + j + " {\n\tposition:relative;\n\tbottom:0px;\n\tbackground: #009CFF;\n\theight: 100%;\n\twidth: 0%;\n\ttransition: width 0.5s;\n\ttransition-timing-function: linear;\n}\n\n." + M + " {\n\tbackground: #009cff;\n\tborder-bottom-left-radius: 16px;\n\tborder-top-left-radius: 16px;\n\tbottom: 10%;\n\tbox-shadow: 0 6px 12px 0 rgba(0,0,0,.24);\n\tcolor: #FFF;\n\tcursor: pointer;\n\tfont: 700 16pt 'Proxima Nova', sans-serif;\n\theight: 42px;\n\tline-height: 42px;\n\topacity: 0.6;\n\tpadding-left: 15px;\n\tposition: absolute;\n\tright: 0;\n\ttransition: opacity 0.2s;\n\twidth: 115px;\n\tz-index: 9999;\n}\n\n." + M + ".complete {\n\topacity: 1;\n}\n\n." + M + " ." + D + " {\n\t-webkit-touch-callout: none;\n\t-webkit-user-select: none;\n\t-khtml-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\tcursor: pointer;\n}\n\n." + M + "." + Z + ":hover {\n\topacity: 1;\n}\n\n." + j + "." + Z + ", ." + O + "." + Z + ", ." + M + "." + Z + ", .pokiSdkStartAdButton." + Z + " {\n\tdisplay: block;\n\tpointer-events: auto;\n}\n\n." + j + "." + L + ", ." + O + "." + L + ", ." + M + "." + L + ", .pokiSdkStartAdButton." + L + " {\n\tdisplay: none;\n\tpointer-events: none;\n}\n\n\n@keyframes gwd-gen-no02gwdanimation_gwd-keyframes{0%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}25%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}35%{opacity:1;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}40%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}100%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-no02gwdanimation_gwd-keyframes{0%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}25%{-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}35%{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}40%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}100%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-no02gwdanimation_gwd-keyframes{0%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}25%{-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}35%{opacity:1;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}40%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}100%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-no02gwdanimation{animation:gwd-gen-no02gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-no02gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-moz-animation:gwd-gen-no02gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards}@keyframes gwd-gen-4pvrgwdanimation_gwd-keyframes{0%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}25%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}40%{opacity:1;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}45%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}100%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-4pvrgwdanimation_gwd-keyframes{0%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}25%{-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}40%{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}45%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}100%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-4pvrgwdanimation_gwd-keyframes{0%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}25%{-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}40%{opacity:1;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}45%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}100%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-4pvrgwdanimation{animation:gwd-gen-4pvrgwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-4pvrgwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-moz-animation:gwd-gen-4pvrgwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards}@keyframes gwd-gen-kw40gwdanimation_gwd-keyframes{0%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}25%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}45%{opacity:1;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}50%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}100%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-kw40gwdanimation_gwd-keyframes{0%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}25%{-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}45%{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}50%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}100%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-kw40gwdanimation_gwd-keyframes{0%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}25%{-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}45%{opacity:1;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}50%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}100%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-kw40gwdanimation{animation:gwd-gen-kw40gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-kw40gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-moz-animation:gwd-gen-kw40gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards}@keyframes gwd-gen-2uv8gwdanimation_gwd-keyframes{0%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}25%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}50%{opacity:1;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}55%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}100%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-2uv8gwdanimation_gwd-keyframes{0%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}25%{-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}50%{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}55%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}100%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-2uv8gwdanimation_gwd-keyframes{0%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}25%{-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}50%{opacity:1;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}55%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}100%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-2uv8gwdanimation{animation:gwd-gen-2uv8gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-2uv8gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-moz-animation:gwd-gen-2uv8gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards}@keyframes gwd-gen-1x97gwdanimation_gwd-keyframes{0%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}25%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}55%{opacity:1;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}60%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}100%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-1x97gwdanimation_gwd-keyframes{0%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}25%{-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}55%{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}60%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}100%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-1x97gwdanimation_gwd-keyframes{0%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}25%{-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}55%{opacity:1;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}60%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}100%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-1x97gwdanimation{animation:gwd-gen-1x97gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-1x97gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-moz-animation:gwd-gen-1x97gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards}@keyframes gwd-gen-1i1egwdanimation_gwd-keyframes{0%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}25%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}60%{opacity:1;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}65%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}100%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-1i1egwdanimation_gwd-keyframes{0%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}25%{-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}60%{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}65%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}100%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-1i1egwdanimation_gwd-keyframes{0%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}25%{-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}60%{opacity:1;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}65%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}100%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-1i1egwdanimation{animation:gwd-gen-1i1egwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-1i1egwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-moz-animation:gwd-gen-1i1egwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards}@keyframes gwd-gen-1sapgwdanimation_gwd-keyframes{0%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}25%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}65%{opacity:1;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}70%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}100%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-1sapgwdanimation_gwd-keyframes{0%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}25%{-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}65%{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}70%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}100%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-1sapgwdanimation_gwd-keyframes{0%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}25%{-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}65%{opacity:1;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}70%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}100%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-1sapgwdanimation{animation:gwd-gen-1sapgwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-1sapgwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-moz-animation:gwd-gen-1sapgwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards}@keyframes gwd-gen-5qotgwdanimation_gwd-keyframes{0%{transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);animation-timing-function:cubic-bezier(1,0,.58,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}12.5%{transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);animation-timing-function:cubic-bezier(.42,0,0,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}25%{transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);animation-timing-function:cubic-bezier(1,0,.58,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}37.5%{transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);animation-timing-function:cubic-bezier(.42,0,0,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}50%{transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);animation-timing-function:cubic-bezier(1,0,.58,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}62.5%{transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);animation-timing-function:cubic-bezier(.42,0,0,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}75%{transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);animation-timing-function:cubic-bezier(1,0,.58,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}87.5%{transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);animation-timing-function:cubic-bezier(.42,0,0,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}100%{transform:translate3d(0,0,0) rotateZ(360deg) scale3d(1,1,1);-webkit-transform:translate3d(0,0,0) rotateZ(360deg) scale3d(1,1,1);-moz-transform:translate3d(0,0,0) rotateZ(360deg) scale3d(1,1,1);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-5qotgwdanimation_gwd-keyframes{0%{-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1)}12.5%{-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1)}25%{-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1)}37.5%{-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1)}50%{-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1)}62.5%{-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1)}75%{-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1)}87.5%{-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1)}100%{-webkit-transform:translate3d(0,0,0) rotateZ(360deg) scale3d(1,1,1);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-5qotgwdanimation_gwd-keyframes{0%{-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}12.5%{-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}25%{-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}37.5%{-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}50%{-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}62.5%{-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}75%{-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}87.5%{-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}100%{-moz-transform:translate3d(0,0,0) rotateZ(360deg) scale3d(1,1,1);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-5qotgwdanimation{animation:gwd-gen-5qotgwdanimation_gwd-keyframes 4s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-5qotgwdanimation_gwd-keyframes 4s linear 0s infinite normal forwards;-moz-animation:gwd-gen-5qotgwdanimation_gwd-keyframes 4s linear 0s infinite normal forwards}@keyframes gwd-gen-faadgwdanimation_gwd-keyframes{0%{opacity:.2;transform:scale3d(.5,.8,1);-webkit-transform:scale3d(.5,.8,1);-moz-transform:scale3d(.5,.8,1);animation-timing-function:cubic-bezier(1,0,.58,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}50%{opacity:.5;transform:scale3d(1,.8,1);-webkit-transform:scale3d(1,.8,1);-moz-transform:scale3d(1,.8,1);animation-timing-function:cubic-bezier(.42,0,0,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}100%{opacity:.2;transform:scale3d(.5,.8,1);-webkit-transform:scale3d(.5,.8,1);-moz-transform:scale3d(.5,.8,1);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-faadgwdanimation_gwd-keyframes{0%{opacity:.2;-webkit-transform:scale3d(.5,.8,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1)}50%{opacity:.5;-webkit-transform:scale3d(1,.8,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1)}100%{opacity:.2;-webkit-transform:scale3d(.5,.8,1);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-faadgwdanimation_gwd-keyframes{0%{opacity:.2;-moz-transform:scale3d(.5,.8,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}50%{opacity:.5;-moz-transform:scale3d(1,.8,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}100%{opacity:.2;-moz-transform:scale3d(.5,.8,1);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-faadgwdanimation{animation:gwd-gen-faadgwdanimation_gwd-keyframes 1s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-faadgwdanimation_gwd-keyframes 1s linear 0s infinite normal forwards;-moz-animation:gwd-gen-faadgwdanimation_gwd-keyframes 1s linear 0s infinite normal forwards}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-1653{position:absolute;top:0;width:612px;height:568px;opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-alsm{position:absolute;top:0;width:612px;height:568px;opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-f0mu{position:absolute;top:0;width:612px;height:568px;opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-1sr3{position:absolute;top:0;width:612px;height:568px;opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-1ffn{position:absolute;top:0;width:612px;height:568px;opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-16f3{position:absolute;top:0;width:612px;height:568px;opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-1rrs{position:absolute;top:0;width:612px;height:568px;opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-1dhi{position:absolute;transform-origin:283.711px 283.516px 0;-webkit-transform-origin:283.711px 283.516px 0;-moz-transform-origin:283.711px 283.516px 0;height:568px;width:568px;top:0;transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);transform-style:preserve-3d;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-1izg{position:absolute;width:568px;height:604.02px;opacity:.2;transform-style:preserve-3d;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform:scale3d(.5,.8,1);-webkit-transform:scale3d(.5,.8,1);-moz-transform:scale3d(.5,.8,1);top:55px;left:0}[data-gwd-group=SpinnerGroup]{width:611.979px;height:598.605px}.gwd-div-1v1s{transform:scale(.5,.5)}\n",
        F = function() {
            function t(t) {
                var n = this;
                if (this.hideElement = function(t) {
                        t.classList.add(L), t.classList.remove(Z)
                    }, this.showElement = function(t) {
                        t.classList.add(Z), t.classList.remove(L)
                    }, this.wrapper = t.wrapper, this.skipFeature = t.skipFeature, this.minimizeFeature = t.minimizeFeature, A.addEventListener(s.ads.video.progress, (function(t) {
                        var e = t.currentTime / t.duration * 100;
                        e < 100 && (n.progressBar.style.width = e + "%")
                    })), A.addEventListener(s.ads.started, (function(e) {
                        var i = e.adSystem.toLowerCase();
                        if ((n.skipFeature || n.minimizeFeature) && "adsense" !== i && "bdm" !== i && e.remainingTime > 14e3) {
                            n.adSkippable = !1, n.countdownValue = t.countdownStart || 15, n.skipContainer.classList.remove("complete");
                            var r = at.GetIsMinimizeTestCountry() || n.minimizeFeature;
                            n.countdownDiv.innerHTML = r ? "Skip in " + n.countdownValue : (t.renderSkipButton ? "Skip in " : "Play in ") + n.countdownValue, n.skipCountdown = window.setInterval((function() {
                                if (n.countdownValue > 1) return n.countdownValue--, void(n.countdownDiv.innerHTML = r ? "Skip in " + n.countdownValue : (t.renderSkipButton ? "Skip in " : "Play in ") + n.countdownValue);
                                t.renderSkipButton && (n.adSkippable = !0, n.countdownDiv.innerHTML = r ? "Skip" : "Skip Ad"), n.skipContainer.classList.add("complete"), window.clearInterval(n.skipCountdown)
                            }), 1e3), n.showSkipButton()
                        }
                    })), this.wrapper instanceof HTMLElement || (console.error("POKI-SDK: wrapper is not a HTMLElement, falling back to document.body"), this.wrapper = document.body), this.createElements(), "undefined" != typeof window && document) {
                    var e = document.createElement("style");
                    e.innerHTML = G, document.head.appendChild(e)
                }
            }
            return t.prototype.setPosition = function(t) {
                this.position = t
            }, t.prototype.skipAdCheck = function() {
                this.adSkippable && (at.GetIsMinimizeTestCountry() || this.minimizeFeature ? (this.hideElement(this.skipContainer), f.track(s.tracking.minimizeButton, {
                    position: this.position
                }), u.sendMessage(s.message.minimizeAd)) : (f.track(s.tracking.manualSkipButton, {
                    position: this.position
                }), this.internalSDK.skipAd()))
            }, t.prototype.setupEvents = function(t) {
                this.internalSDK = t, this.skipContainer.addEventListener("click", this.skipAdCheck.bind(this))
            }, t.prototype.hide = function() {
                window.clearTimeout(this.skipTimeout), window.clearInterval(this.skipCountdown), this.hideElement(this.containerDiv), this.hideElement(this.progressContainer), this.hideSkipButton(), this.hidePauseButton(), this.hideElement(this.startAdButton), this.containerDiv.classList.remove("pokiSdkOverlay"), this.progressBar.style.width = "0%"
            }, t.prototype.hideSpinner = function() {
                this.hideElement(this.spinnerContainer)
            }, t.prototype.showWithOpacity = function() {
                this.showElement(this.spinnerContainer), this.showElement(this.containerDiv), this.showElement(this.progressContainer)
            }, t.prototype.show = function() {
                this.containerDiv.classList.add("pokiSdkOverlay"), this.showElement(this.containerDiv), this.showElement(this.progressContainer)
            }, t.prototype.getVideoBounds = function() {
                return this.adContainer.getBoundingClientRect()
            }, t.prototype.getAdContainer = function() {
                return this.adContainer
            }, t.prototype.getVideoContainer = function() {
                return this.videoContainer
            }, t.prototype.showPauseButton = function() {
                this.showElement(this.pauseButton), this.internalSDK && this.pauseButton.addEventListener("click", this.internalSDK.resumeAd.bind(this.internalSDK))
            }, t.prototype.hidePauseButton = function() {
                this.hideElement(this.pauseButton), this.internalSDK && this.pauseButton.removeEventListener("click", this.internalSDK.resumeAd.bind(this.internalSDK))
            }, t.prototype.showStartAdButton = function() {
                this.showElement(this.startAdButton), this.internalSDK && this.startAdButton.addEventListener("click", this.internalSDK.startAdClicked.bind(this.internalSDK))
            }, t.prototype.hideStartAdButton = function() {
                this.hideElement(this.startAdButton), this.internalSDK && this.startAdButton.removeEventListener("click", this.internalSDK.startAdClicked.bind(this.internalSDK))
            }, t.prototype.showSkipButton = function() {
                this.showElement(this.skipContainer)
            }, t.prototype.hideSkipButton = function() {
                this.hideElement(this.skipContainer)
            }, t.prototype.createElements = function() {
                if (this.containerDiv = document.createElement("div"), this.countdownDiv = document.createElement("div"), this.insideContainer = document.createElement("div"), this.pauseButton = document.createElement("div"), this.startAdButton = document.createElement("div"), this.progressBar = document.createElement("div"), this.progressContainer = document.createElement("div"), this.skipContainer = document.createElement("div"), this.spinnerContainer = document.createElement("div"), this.adContainer = document.createElement("div"), this.videoContainer = document.createElement("video"), this.adContainer.id = "pokiSDKAdContainer", this.videoContainer.id = "pokiSDKVideoContainer", this.containerDiv.className = "pokiSdkContainer", this.countdownDiv.className = D, this.insideContainer.className = "pokiSdkInsideContainer", this.pauseButton.className = O, this.pauseButton.innerHTML = "Tap anywhere to ▶️", this.startAdButton.className = "pokiSdkStartAdButton", this.startAdButton.innerHTML = "Tap anywhere to play ad", this.progressBar.className = j, this.progressContainer.className = "pokiSdkProgressContainer", this.skipContainer.className = M, this.spinnerContainer.className = R, this.adContainer.className = "pokiSDKAdContainer", this.videoContainer.className = "pokiSdkVideoContainer", this.spinnerContainer.innerHTML = '\n\t\t\t<div id="new-progress-spinner" style="z-index:10;position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) scale3d(0.5, 0.5, 0.5);">\n\t\t\t\t<div class="gwd-div-1v1s" data-gwd-group="SpinnerGroup">\n\t\t\t\t\t<img src="https://game-cdn.poki.com/loaders/v2/static/spinner/Sparkle_1.svg" class="gwd-img-1653 gwd-gen-no02gwdanimation gwd-grp-13td" data-gwd-grp-id="Sparkle_1">\n\t\t\t\t\t<img src="https://game-cdn.poki.com/loaders/v2/static/spinner/Sparkle_2.svg" class="gwd-img-alsm gwd-gen-4pvrgwdanimation gwd-grp-13td" data-gwd-grp-id="Sparkle_2">\n\t\t\t\t\t<img src="https://game-cdn.poki.com/loaders/v2/static/spinner/Sparkle_3.svg" class="gwd-img-f0mu gwd-gen-kw40gwdanimation gwd-grp-13td" data-gwd-grp-id="Sparkle_3">\n\t\t\t\t\t<img src="https://game-cdn.poki.com/loaders/v2/static/spinner/Sparkle_4.svg" class="gwd-img-1sr3 gwd-gen-2uv8gwdanimation gwd-grp-13td" data-gwd-grp-id="Sparkle_4">\n\t\t\t\t\t<img src="https://game-cdn.poki.com/loaders/v2/static/spinner/Sparkle_5.svg" class="gwd-img-1ffn gwd-gen-1x97gwdanimation gwd-grp-13td" data-gwd-grp-id="Sparkle_5">\n\t\t\t\t\t<img src="https://game-cdn.poki.com/loaders/v2/static/spinner/Sparkle_6.svg" class="gwd-img-16f3 gwd-gen-1i1egwdanimation gwd-grp-13td" data-gwd-grp-id="Sparkle_6">\n\t\t\t\t\t<img src="https://game-cdn.poki.com/loaders/v2/static/spinner/Sparkle_7.svg" class="gwd-img-1rrs gwd-gen-1sapgwdanimation gwd-grp-13td" data-gwd-grp-id="Sparkle_7">\n\t\t\t\t\t<img src="https://game-cdn.poki.com/loaders/v2.0/static/hand_fingers_isolated.svg" class="gwd-img-1dhi gwd-gen-5qotgwdanimation gwd-grp-13td" data-gwd-grp-id="heart">\n\t\t\t\t\t<img src="https://game-cdn.poki.com/loaders/v2/static/spinner/shadow_new_3.svg" class="gwd-img-1izg gwd-gen-faadgwdanimation gwd-grp-13td" data-gwd-grp-id="shadow_new_3">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t', this.hide(), this.videoContainer.setAttribute("playsinline", "playsinline"), this.videoContainer.setAttribute("muted", "muted"), this.containerDiv.appendChild(this.insideContainer), this.containerDiv.appendChild(this.skipContainer), this.containerDiv.appendChild(this.spinnerContainer), this.insideContainer.appendChild(this.progressContainer), this.insideContainer.appendChild(this.videoContainer), this.insideContainer.appendChild(this.adContainer), this.containerDiv.appendChild(this.pauseButton), this.containerDiv.appendChild(this.startAdButton), this.progressContainer.appendChild(this.progressBar), this.wrapper.appendChild(this.containerDiv), this.skipContainer.appendChild(this.countdownDiv), this.wrapper === document.body) this.containerDiv.classList.add("pokiSdkFixed");
                else {
                    var t = window.getComputedStyle(this.wrapper).position;
                    t && -1 !== ["absolute", "fixed", "relative"].indexOf(t) || (this.wrapper.style.position = "relative")
                }
            }, t
        }(),
        Q = !0,
        X = {};
    var N = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB", "IS", "LI", "NO"],
        U = ["US"],
        H = ["ZZ"];

    function W(t) {
        return H.includes(t)
    }
    var V = function(t, n, e, i) {
            return new(e || (e = Promise))((function(r, o) {
                function a(t) {
                    try {
                        d(i.next(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function s(t) {
                    try {
                        d(i.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function d(t) {
                    var n;
                    t.done ? r(t.value) : (n = t.value, n instanceof e ? n : new e((function(t) {
                        t(n)
                    }))).then(a, s)
                }
                d((i = i.apply(t, n || [])).next())
            }))
        },
        K = function(t, n) {
            var e, i, r, o, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function s(o) {
                return function(s) {
                    return function(o) {
                        if (e) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (e = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < r[1]) {
                                        a.label = r[1], r = o;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2], a.ops.push(o);
                                        break
                                    }
                                    r[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            o = n.call(t, a)
                        } catch (t) {
                            o = [6, t], i = 0
                        } finally {
                            e = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        },
        q = function() {
            function t() {
                var t = this;
                this.bannerTimeout = null, this.allowedToPlayAd = !1, this.runningAd = !1, this.currentWidth = 640, this.currentHeight = 480, this.currentRequestIsMuted = !1, this.canWeAutoPlayWithSound = function() {
                    return V(t, void 0, void 0, (function() {
                        return K(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    if (!this.blankVideo) return [2, !1];
                                    t.label = 1;
                                case 1:
                                    return t.trys.push([1, 3, , 4]), [4, this.blankVideo.play()];
                                case 2:
                                    return t.sent(), [2, !0];
                                case 3:
                                    return t.sent(), [2, !1];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }, this.videoElement = document.getElementById("pokiSDKVideoContainer"), this.adsManager = null, this.initAdDisplayContainer(), this.initBlankVideo(), this.initAdsLoader()
            }
            return t.prototype.initAdDisplayContainer = function() {
                this.adDisplayContainer || (this.adDisplayContainer = new google.ima.AdDisplayContainer(document.getElementById("pokiSDKAdContainer"), this.videoElement))
            }, t.prototype.initBlankVideo = function() {
                this.blankVideo = document.createElement("video"), this.blankVideo.setAttribute("playsinline", "playsinline");
                var t = document.createElement("source");
                t.src = "data:video/mp4;base64, AAAAHGZ0eXBNNFYgAAACAGlzb21pc28yYXZjMQAAAAhmcmVlAAAGF21kYXTeBAAAbGliZmFhYyAxLjI4AABCAJMgBDIARwAAArEGBf//rdxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxNDIgcjIgOTU2YzhkOCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTQgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0wIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDE6MHgxMTEgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz02IGxvb2thaGVhZF90aHJlYWRzPTEgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTI1MCBrZXlpbnRfbWluPTI1IHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCB2YnZfbWF4cmF0ZT03NjggdmJ2X2J1ZnNpemU9MzAwMCBjcmZfbWF4PTAuMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAFZliIQL8mKAAKvMnJycnJycnJycnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXiEASZACGQAjgCEASZACGQAjgAAAAAdBmjgX4GSAIQBJkAIZACOAAAAAB0GaVAX4GSAhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGagC/AySEASZACGQAjgAAAAAZBmqAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZrAL8DJIQBJkAIZACOAAAAABkGa4C/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmwAvwMkhAEmQAhkAI4AAAAAGQZsgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGbQC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm2AvwMkhAEmQAhkAI4AAAAAGQZuAL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGboC/AySEASZACGQAjgAAAAAZBm8AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZvgL8DJIQBJkAIZACOAAAAABkGaAC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmiAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpAL8DJIQBJkAIZACOAAAAABkGaYC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmoAvwMkhAEmQAhkAI4AAAAAGQZqgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGawC/AySEASZACGQAjgAAAAAZBmuAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZsAL8DJIQBJkAIZACOAAAAABkGbIC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm0AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZtgL8DJIQBJkAIZACOAAAAABkGbgCvAySEASZACGQAjgCEASZACGQAjgAAAAAZBm6AnwMkhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AAAAhubW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAABDcAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAzB0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAA+kAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAALAAAACQAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPpAAAAAAABAAAAAAKobWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAB1MAAAdU5VxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAACU21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAhNzdGJsAAAAr3N0c2QAAAAAAAAAAQAAAJ9hdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAALAAkABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAALWF2Y0MBQsAN/+EAFWdCwA3ZAsTsBEAAAPpAADqYA8UKkgEABWjLg8sgAAAAHHV1aWRraEDyXyRPxbo5pRvPAyPzAAAAAAAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAABRzdHNzAAAAAAAAAAEAAAABAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAAIxzdHN6AAAAAAAAAAAAAAAeAAADDwAAAAsAAAALAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAAiHN0Y28AAAAAAAAAHgAAAEYAAANnAAADewAAA5gAAAO0AAADxwAAA+MAAAP2AAAEEgAABCUAAARBAAAEXQAABHAAAASMAAAEnwAABLsAAATOAAAE6gAABQYAAAUZAAAFNQAABUgAAAVkAAAFdwAABZMAAAWmAAAFwgAABd4AAAXxAAAGDQAABGh0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAACAAAAAAAABDcAAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAQkAAADcAABAAAAAAPgbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAC7gAAAykBVxAAAAAAALWhkbHIAAAAAAAAAAHNvdW4AAAAAAAAAAAAAAABTb3VuZEhhbmRsZXIAAAADi21pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAADT3N0YmwAAABnc3RzZAAAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAAAAA4CAgCIAAgAEgICAFEAVBbjYAAu4AAAADcoFgICAAhGQBoCAgAECAAAAIHN0dHMAAAAAAAAAAgAAADIAAAQAAAAAAQAAAkAAAAFUc3RzYwAAAAAAAAAbAAAAAQAAAAEAAAABAAAAAgAAAAIAAAABAAAAAwAAAAEAAAABAAAABAAAAAIAAAABAAAABgAAAAEAAAABAAAABwAAAAIAAAABAAAACAAAAAEAAAABAAAACQAAAAIAAAABAAAACgAAAAEAAAABAAAACwAAAAIAAAABAAAADQAAAAEAAAABAAAADgAAAAIAAAABAAAADwAAAAEAAAABAAAAEAAAAAIAAAABAAAAEQAAAAEAAAABAAAAEgAAAAIAAAABAAAAFAAAAAEAAAABAAAAFQAAAAIAAAABAAAAFgAAAAEAAAABAAAAFwAAAAIAAAABAAAAGAAAAAEAAAABAAAAGQAAAAIAAAABAAAAGgAAAAEAAAABAAAAGwAAAAIAAAABAAAAHQAAAAEAAAABAAAAHgAAAAIAAAABAAAAHwAAAAQAAAABAAAA4HN0c3oAAAAAAAAAAAAAADMAAAAaAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAACMc3RjbwAAAAAAAAAfAAAALAAAA1UAAANyAAADhgAAA6IAAAO+AAAD0QAAA+0AAAQAAAAEHAAABC8AAARLAAAEZwAABHoAAASWAAAEqQAABMUAAATYAAAE9AAABRAAAAUjAAAFPwAABVIAAAVuAAAFgQAABZ0AAAWwAAAFzAAABegAAAX7AAAGFwAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTUuMzMuMTAw", this.blankVideo.appendChild(t)
            }, t.prototype.initAdsLoader = function() {
                var t = this;
                this.adsLoader || (this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer), this.adsLoader.getSettings().setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.INSECURE), this.adsLoader.getSettings().setDisableCustomPlaybackForIOS10Plus(!0), this.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.onAdsManagerLoaded, !1, this), this.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError, !1, this), this.videoElement.addEventListener("onended", (function() {
                    return t.adsLoader.contentComplete()
                })))
            }, t.prototype.requestAd = function(t) {
                return V(this, void 0, void 0, (function() {
                    var n;
                    return K(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return this.runningAd ? [2] : (this.runningAd = !0, this.adDisplayContainer.initialize(), this.videoElement.src = "", (n = new google.ima.AdsRequest).adTagUrl = t, n.linearAdSlotWidth = this.currentWidth, n.linearAdSlotHeight = this.currentHeight, n.nonLinearAdSlotWidth = this.currentWidth, n.nonLinearAdSlotHeight = this.currentHeight, n.forceNonLinearFullSlot = !0, [4, this.canWeAutoPlayWithSound()]);
                            case 1:
                                return e.sent() ? (n.setAdWillPlayMuted(!1), this.currentRequestIsMuted = !1) : (n.setAdWillPlayMuted(!0), this.currentRequestIsMuted = !0), this.allowedToPlayAd = !0, this.adsLoader.requestAds(n), [2]
                        }
                    }))
                }))
            }, t.prototype.resize = function(t, n, e) {
                void 0 === e && (e = google.ima.ViewMode.NORMAL), this.currentWidth = t, this.currentHeight = n, this.adsManager && this.adsManager.resize(t, n, e)
            }, t.prototype.onAdsManagerLoaded = function(t) {
                var n = new google.ima.AdsRenderingSettings;
                n.enablePreloading = !0, n.restoreCustomPlaybackStateOnAdBreakComplete = !0, this.adsManager = t.getAdsManager(this.videoElement, n), this.currentRequestIsMuted && this.adsManager.setVolume(0), this.allowedToPlayAd ? (this.attachAdEvents(), A.dispatchEvent(s.ads.ready)) : this.tearDown()
            }, t.prototype.startPlayback = function() {
                try {
                    this.adsManager.init(this.currentWidth, this.currentHeight, google.ima.ViewMode.NORMAL), this.adsManager.start()
                } catch (t) {
                    this.videoElement.play()
                }
            }, t.prototype.startIOSPlayback = function() {
                this.adsManager.start()
            }, t.prototype.stopPlayback = function() {
                A.dispatchEvent(s.ads.stopped), this.tearDown()
            }, t.prototype.resumeAd = function() {
                A.dispatchEvent(s.ads.video.resumed), this.adsManager && this.adsManager.resume()
            }, t.prototype.tearDown = function() {
                this.adsManager && (this.adsManager.stop(), this.adsManager.destroy(), this.adsManager = null), null !== this.bannerTimeout && (clearTimeout(this.bannerTimeout), this.bannerTimeout = null), this.adsLoader && (this.adsLoader.contentComplete(), this.adsLoader.destroy(), this.adsLoader = null, this.initAdsLoader()), this.runningAd = !1
            }, t.prototype.attachAdEvents = function() {
                var t = this,
                    n = google.ima.AdEvent.Type;
                this.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError, !1, this), [n.AD_PROGRESS, n.ALL_ADS_COMPLETED, n.CLICK, n.COMPLETE, n.IMPRESSION, n.PAUSED, n.SKIPPED, n.STARTED, n.USER_CLOSE].forEach((function(n) {
                    t.adsManager.addEventListener(n, t.onAdEvent, !1, t)
                }))
            }, t.prototype.onAdEvent = function(t) {
                var n = this,
                    e = t.getAd();
                switch (t.type) {
                    case google.ima.AdEvent.Type.AD_PROGRESS:
                        A.dispatchEvent(s.ads.video.progress, t.getAdData());
                        break;
                    case google.ima.AdEvent.Type.STARTED:
                        t.remainingTime = this.adsManager.getRemainingTime(), t.remainingTime <= 0 && (t.remainingTime = 15), e.isLinear() || (this.bannerTimeout = window.setTimeout((function() {
                            A.dispatchEvent(s.ads.completed, {
                                rewardAllowed: !!t.rewardAllowed
                            }), n.tearDown()
                        }), 1e3 * (t.remainingTime + 1))), A.dispatchEvent(s.ads.started, {
                            remainingTime: 1e3 * (t.remainingTime || 0),
                            adId: e.getAdId(),
                            adSystem: e.getAdSystem(),
                            advertiserName: e.getAdvertiserName(),
                            apiFramework: e.getApiFramework(),
                            creativeAdId: e.getCreativeAdId(),
                            creativeId: e.getCreativeId(),
                            description: e.getDescription(),
                            mediaUrl: e.getMediaUrl(),
                            title: e.getTitle()
                        });
                        break;
                    case google.ima.AdEvent.Type.COMPLETE:
                        A.dispatchEvent(s.ads.completed, {
                            rewardAllowed: !0
                        }), this.tearDown();
                        break;
                    case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                    case google.ima.AdEvent.Type.USER_CLOSE:
                        this.tearDown();
                        break;
                    case google.ima.AdEvent.Type.PAUSED:
                        this.adsManager.pause(), A.dispatchEvent(s.ads.video.paused);
                        break;
                    case google.ima.AdEvent.Type.CLICK:
                        A.dispatchEvent(s.ads.video.clicked);
                        break;
                    case google.ima.AdEvent.Type.SKIPPED:
                        A.dispatchEvent(s.ads.skipped), A.dispatchEvent(s.ads.completed);
                        break;
                    case google.ima.AdEvent.Type.IMPRESSION:
                        A.dispatchEvent(s.ads.impression)
                }
            }, t.prototype.onAdError = function(t) {
                var n = t.getError && t.getError().toString() || "Unknown";
                A.dispatchEvent(s.ads.video.error, {
                    message: n
                }), this.tearDown()
            }, t.prototype.muteAd = function() {
                void 0 !== this.adsManager && null != this.adsManager && this.adsManager.setVolume(0)
            }, t.prototype.isAdRunning = function() {
                return this.runningAd
            }, t
        }(),
        J = function(t) {
            return new Promise((function(n, e) {
                var i = document.createElement("script");
                i.type = "text/javascript", i.async = !0, i.src = t;
                var r = function() {
                    i.readyState && "loaded" !== i.readyState && "complete" !== i.readyState || (n(), i.onload = null, i.onreadystatechange = null)
                };
                i.onload = r, i.onreadystatechange = r, i.onerror = e, document.head.appendChild(i)
            }))
        },
        Y = function() {
            return (Y = Object.assign || function(t) {
                for (var n, e = 1, i = arguments.length; e < i; e++)
                    for (var r in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                return t
            }).apply(this, arguments)
        },
        $ = function(t, n, e, i) {
            return new(e || (e = Promise))((function(r, o) {
                function a(t) {
                    try {
                        d(i.next(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function s(t) {
                    try {
                        d(i.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function d(t) {
                    var n;
                    t.done ? r(t.value) : (n = t.value, n instanceof e ? n : new e((function(t) {
                        t(n)
                    }))).then(a, s)
                }
                d((i = i.apply(t, n || [])).next())
            }))
        },
        tt = function(t, n) {
            var e, i, r, o, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function s(o) {
                return function(s) {
                    return function(o) {
                        if (e) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (e = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < r[1]) {
                                        a.label = r[1], r = o;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2], a.ops.push(o);
                                        break
                                    }
                                    r[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            o = n.call(t, a)
                        } catch (t) {
                            o = [6, t], i = 0
                        } finally {
                            e = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        },
        nt = function() {
            var t, n = (t = {
                host: window.location.host || window.location.hostname,
                href: window.location.href,
                pathname: window.location.pathname,
                referrer: document.referrer,
                "ref-id": b("ref")
            }, Object.keys(t).map((function(n) {
                return encodeURIComponent(n) + "=" + encodeURIComponent(t[n])
            })).join("&"));
            return fetch("//publishing-api.poki.com/game/hit", {
                method: "POST",
                body: n,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                }
            }).then((function(t) {
                return $(void 0, void 0, void 0, (function() {
                    var n;
                    return tt(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return t.status >= 200 && t.status < 400 ? [4, t.json()] : [3, 2];
                            case 1:
                                return n = e.sent(), [2, Y(Y({}, n), {
                                    hash: 1 === n.distributorId || 2 === n.distributorId ? n.hash : n.hash.replace(/(G[0-9]+L)([0-9]*)/gi, "$11")
                                })];
                            case 2:
                                throw new Error("Bad Request")
                        }
                    }))
                }))
            })).catch((function() {}))
        },
        et = function() {
            return (et = Object.assign || function(t) {
                for (var n, e = 1, i = arguments.length; e < i; e++)
                    for (var r in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                return t
            }).apply(this, arguments)
        },
        it = {},
        rt = function(t) {
            return "poki-display-" + t[0] + "x" + t[1] + "-" + document.body.querySelectorAll('[data-poki-ad-size="' + t.join("x") + '"] .poki-ad-slot').length
        },
        ot = function() {
            function t() {
                var n = this;
                this.autoStartOnReady = !1, this.criteria = {}, this.debug = !1, this.debugIsOverwritten = !1, this.handlers = {}, this.isInitialized = !1, this.programmaticAdsEnabled = !0, this.sdkBooted = !1, this.sdkImaError = !1, this.startAdEnabled = !1, this.adReady = !1, this.setPlayerAge = function(t) {
                    t && function(t, n) {
                        if (Q) try {
                            localStorage.setItem(t, n)
                        } catch (e) {
                            Q = !1, X[t] = n
                        } else X[t] = n
                    }("playerAge", t)
                }, this.toggleNonPersonalized = function(n) {
                    t.nonPersonalized = n
                }, this.setConsentString = function(n) {
                    t.consentString = n
                }, this.sdkNotBootedButCalled = function() {
                    console.error("The Poki SDK has not yet been initialized")
                }, this.defineSlot = function(t) {
                    var e = rt(t.size),
                        i = n.googletag.defineSlot("/21682198607/" + t.id, t.size, e);
                    return i.addService(n.googletag.pubads()), it[e] = i, n.googletag.enableServices(), i
                }
            }
            return t.prototype.init = function(n) {
                var i = this;
                if (void 0 === n && (n = {}), "undefined" != typeof window) {
                    if (this.isInitialized) return console.error("Poki SDK has already been initialized");
                    var r = n.adTagUrl,
                        o = n.adTiming,
                        a = void 0 === o ? {} : o,
                        d = n.customCriteria,
                        c = void 0 === d ? {} : d,
                        u = n.debug,
                        m = void 0 !== u && u,
                        l = n.onReady,
                        g = void 0 === l ? null : l,
                        h = n.onAdblocked,
                        w = void 0 === h ? null : h,
                        y = n.prebid,
                        k = void 0 === y ? {} : y,
                        S = n.waterfallRetries,
                        E = n.wrapper,
                        z = void 0 === E ? document.body : E,
                        x = n.skipFeature,
                        T = void 0 !== x && x,
                        C = n.minimizeFeature,
                        P = void 0 !== C && C,
                        D = n.countdownStart,
                        L = void 0 === D ? 15 : D,
                        O = n.renderSkipButton,
                        j = void 0 !== O && O,
                        M = n.forceDisableHB,
                        R = void 0 !== M && M,
                        Z = e.e(1).then(e.t.bind(null, 108, 7)).then((function() {
                            var t;
                            t = k, window.pbjs = window.pbjs || {}, window.pbjs.que = window.pbjs.que || [], window.pbjs.que.push((function() {
                                window.pbjs.addAdUnits(t.adUnits || B), window.pbjs.setConfig(v(v({}, I), t.config))
                            }))
                        }));
                    g && this.registerHandler("onReady", g), w && this.registerHandler("onAdblocked", w);
                    var G = parseInt(b("site_id"), 10) || 0;
                    this.setupDefaultEvents(), this.debug = !!m;
                    var Q = et({}, p);
                    r ? (t.isPokiPlatform = !0, Q = et(et({}, Q), {
                        adTagUrl: r,
                        customCriteria: c,
                        adTiming: a
                    })) : t.isPokiPlatform = !1;
                    var X = nt;
                    (t.isPokiPlatform || this.debug) && (X = function() {
                        return Promise.resolve(Q)
                    }), window.addEventListener("resize", this.resize.bind(this), !1), window.addEventListener("message", this.onMessage.bind(this), !1), f.setupDefaultEvents();
                    var N = b("pokiDebug");
                    return N ? (this.setDebug("true" === N), this.debugIsOverwritten = !0) : this.setDebug(m), Promise.all([X(), J("https://imasdk.googleapis.comr/js/sdkloader/ima3.js"), J("https://securepubads.g.doubleclick.net/tag/js/gpt.js"), Z]).catch((function() {
                        A.dispatchEvent(s.adblocked)
                    })).then((function(n) {
                        if (void 0 !== n) {
                            var e = n[0],
                                r = et(et({}, p), e);
                            i.enableSettings(r), i.adTimings.startStartAdsAfterTimer(), (T || P) && t.isPokiPlatform ? i.playerSkin = new F({
                                wrapper: z,
                                minimizeFeature: P,
                                skipFeature: T,
                                countdownStart: L,
                                renderSkipButton: j
                            }) : i.playerSkin = new F({
                                wrapper: z,
                                minimizeFeature: !1,
                                skipFeature: !1
                            }), i.ima = new q, i.playerSkin.setupEvents(i), i.waterfall = new _(i.ima, {
                                timing: i.adTimings,
                                totalRetries: S,
                                adTagUrl: r.adTagUrl,
                                siteID: G,
                                disableHB: 21 === G || R
                            }), i.googletag = window.googletag || {
                                cmd: []
                            }, A.dispatchEvent(s.ready)
                        }
                    }))
                }
            }, t.prototype.requestAd = function(n) {
                void 0 === n && (n = {});
                var e = n.autoStart,
                    i = void 0 === e || e,
                    r = n.customCriteria,
                    o = void 0 === r ? {} : r,
                    a = n.onFinish,
                    d = void 0 === a ? null : a,
                    u = n.onStart,
                    m = void 0 === u ? null : u,
                    l = n.position,
                    f = void 0 === l ? null : l,
                    p = n.runOnPlatform,
                    g = void 0 !== p && p,
                    h = n.overwriteAdTag,
                    w = void 0 === h ? void 0 : h;
                if (A.clearAnnotations(), this.autoStartOnReady = !1 !== i, d && this.registerHandler("onFinish", d), m && this.registerHandler("onStart", m), !this.sdkBooted) return A.dispatchEvent(s.ads.error, {
                    message: "Requesting ad on unbooted SDK"
                }), void this.sdkNotBootedButCalled();
                if (this.sdkImaError) A.dispatchEvent(s.ads.error, {
                    message: "Adblocker has been detected"
                });
                else {
                    if ((y() || k()) && f !== s.ads.position.rewarded) return A.dispatchEvent(s.ads.error, {
                        reason: "Interstitials are disabled on mobile"
                    });
                    if (null === f || !c(f, s.ads.position)) return console.error("POKI-SDK: Invalid position");
                    if (this.ima.isAdRunning() || this.waterfall.isRunning()) return A.dispatchEvent(s.ads.busy);
                    if (this.adReady) return A.dispatchEvent(s.ads.ready);
                    if (f === s.ads.position.preroll && !this.adTimings.prerollPossible()) return A.dispatchEvent(s.ads.limit, {
                        reason: s.info.messages.prerollLimit
                    });
                    if (f !== s.ads.position.rewarded && !this.adTimings.requestPossible()) return A.dispatchEvent(s.ads.limit, {
                        reason: s.info.messages.timeLimit
                    });
                    var b = et(et({}, this.criteria), {
                        position: f
                    });
                    this.debug && (f === s.ads.position.rewarded ? b.debug = "ad-sdk-test-rewarded" : b.debug = "ad-sdk-test-video"), (t.isPokiPlatform || f === s.ads.position.rewarded) && (b = et(et({}, b), o)), b = et(et({}, b), this.genericCriteria()), this.resize(), this.playerSkin.showWithOpacity(), this.playerSkin.setPosition(f), this.waterfall.start(b, f, w ? [w] : [], g)
                }
            }, t.prototype.runWaterfallChain = function(t) {
                void 0 === t && (t = {});
                var n = t.customCriteria,
                    e = void 0 === n ? {} : n,
                    i = t.onFinish,
                    r = void 0 === i ? null : i,
                    o = t.onStart,
                    a = void 0 === o ? null : o,
                    d = t.overwriteAdTags,
                    u = void 0 === d ? [] : d,
                    m = t.position,
                    l = void 0 === m ? null : m;
                if (A.clearAnnotations(), r && this.registerHandler("onFinish", r), a && this.registerHandler("onStart", a), !this.sdkBooted) return A.dispatchEvent(s.ads.error, {
                    message: "Requesting ad on unbooted SDK"
                }), void this.sdkNotBootedButCalled();
                if (this.sdkImaError) A.dispatchEvent(s.ads.error, {
                    message: "Adblocker has been detected"
                });
                else {
                    if (null === l || !c(l, s.ads.position)) return console.error("POKI-SDK: Invalid position");
                    if (this.ima.isAdRunning() || this.waterfall.isRunning()) return A.dispatchEvent(s.ads.busy);
                    if (this.adReady) return A.dispatchEvent(s.ads.ready);
                    this.autoStartOnReady = !0;
                    var f = et(et(et(et({}, this.criteria), {
                        position: l
                    }), e), this.genericCriteria());
                    this.resize(), this.playerSkin.showWithOpacity(), this.playerSkin.setPosition(l), this.waterfall.start(f, l, u, !1)
                }
            }, t.prototype.displayAd = function(t, n) {
                var e = this;
                if (n) {
                    if (!this.sdkBooted) return A.dispatchEvent(s.ads.displayError, {
                        message: "Requesting ad on unbooted SDK"
                    }), void this.sdkNotBootedButCalled();
                    if (t)
                        if (this.sdkImaError) A.dispatchEvent(s.ads.displayError, {
                            message: "Adblocker has been detected"
                        });
                        else {
                            var i = function(t) {
                                if ((y() || k() || ["970x250", "300x250", "728x90", "160x600"].includes(t)) && (!y() && !k() || ["320x50"].includes(t))) {
                                    var n = "desktop";
                                    y() && (n = "mobile"), k() && (n = "tablet");
                                    var e = parseInt(b("site_id"), 10) || 0;
                                    return {
                                        id: ot.GetIsPokiIFrame() ? n + "_ingame_" + t + "/" + e + "_" + n + "_ingame_" + t : "external_" + n + "_display_ingame/external_" + n + "_ingame_" + t,
                                        size: t.split("x").map((function(t) {
                                            return parseInt(t, 10)
                                        }))
                                    }
                                }
                            }(n);
                            if (!i) return A.dispatchEvent(s.ads.displayError, {
                                reason: "Display size " + n + " is not supported on this device"
                            });
                            var r = et(et(et({}, this.criteria), this.genericCriteria()), {
                                debug: this.debug ? "ad-sdk-test-display" : void 0
                            });
                            t.getAttribute("data-poki-ad-size") && (console.warn("Poki-SDK: Container already has a display ad in it. Destroying."), this.destroyAd(t)), this.googletag.cmd.push((function() {
                                var t = e.defineSlot(i);
                                t.clearTargeting(), Object.keys(r).forEach((function(n) {
                                    t.setTargeting(n, r[n])
                                }))
                            })), this.googletag.cmd.push((function() {
                                var n = document.createElement("div");
                                n.id = rt(i.size), n.className = "poki-ad-slot", n.style.width = i.size[0] + "px", n.style.height = i.size[1] + "px", t.appendChild(n), t.setAttribute("data-poki-ad-size", i.size.join("x")), e.googletag.display(n.id)
                            }))
                        }
                    else A.dispatchEvent(s.ads.displayError, {
                        message: "Provided container does not exist"
                    })
                } else A.dispatchEvent(s.ads.displayError, {
                    message: "No ad size given, usage: displayAd(<container>, <size>)"
                })
            }, t.prototype.destroyAd = function(t) {
                var n = this;
                if (!this.sdkBooted) return A.dispatchEvent(s.ads.displayError, {
                    message: "Attempting destroyAd on unbooted SDK"
                }), void this.sdkNotBootedButCalled();
                this.sdkImaError ? A.dispatchEvent(s.ads.displayError, {
                    message: "Adblocker has been detected"
                }) : (t || (t = document.body), Array.from(t.getElementsByClassName("poki-ad-slot")).filter((function(t) {
                    return it[t.id]
                })).forEach((function(t) {
                    var e = it[t.id];
                    n.googletag.cmd.push((function() {
                        t.parentElement && t.parentElement.removeChild(t), n.googletag.destroySlots([e])
                    }))
                })))
            }, t.prototype.enableSettings = function(n) {
                this.criteria = et({}, n.customCriteria), t.isPokiPlatform || (this.criteria.pdata = n.hash);
                var e = window.location.href.match(/\.poki-gdn\.com\/([^/]+)\//);
                e && 2 === e.length && (this.criteria.p4d_version_id = e[1]), this.adTimings = new h(n.adTiming), this.gameId = Number(n.gameId), this.distributorId = Number(n.distributorId), this.country = n.country, 412 === this.gameId ? this.criteria.p4d_version_id = "5dd30ab2-015f-11ea-ad56-9cb6d0d995f7" : 424 === this.gameId ? this.criteria.p4d_version_id = "5dd312f7-015f-11ea-ad56-9cb6d0d995f7" : 228 === this.gameId ? this.criteria.p4d_version_id = "5dd2e1e0-015f-11ea-ad56-9cb6d0d995f7" : 348 === this.gameId && (this.criteria.p4d_version_id = "5dd2a3a9-015f-11ea-ad56-9cb6d0d995f7")
            }, t.prototype.togglePlayerAdvertisingConsent = function(t) {
                if (t) {
                    var n, e = parseInt(function(t) {
                            if (!Q) return X[t];
                            try {
                                return localStorage.getItem(t)
                            } catch (n) {
                                return X[t]
                            }
                        }("playerAge"), 10) || 0,
                        i = this.country,
                        r = (n = i, N.includes(n)),
                        o = function(t) {
                            return U.includes(t)
                        }(i),
                        a = W(i);
                    (r || o || W) && (r && e <= 12 || o && e <= 16 || a && e <= 16) ? this.disableProgrammatic(): this.enableProgrammatic()
                } else this.disableProgrammatic()
            }, t.prototype.disableProgrammatic = function() {
                t.childDirected = !0, this.programmaticAdsEnabled = !1
            }, t.prototype.enableProgrammatic = function() {
                t.childDirected = !1, this.programmaticAdsEnabled = !0
            }, t.prototype.getProgrammaticAdsEnabled = function() {
                return this.programmaticAdsEnabled
            }, t.prototype.setDebug = function(t) {
                var n = this;
                this.debugIsOverwritten || (f.setDebug(t), A.setDebug(t), this.waterfall ? this.waterfall.setDebug(t) : A.addEventListener(s.ready, (function() {
                    n.waterfall && n.waterfall.setDebug(t)
                })), this.debug = t)
            }, t.prototype.resize = function() {
                if (!this.sdkBooted) return this.sdkNotBootedButCalled();
                if (!this.sdkImaError) {
                    var t = this.playerSkin.getVideoBounds();
                    this.ima.resize(t.width, t.height)
                }
            }, t.prototype.onMessage = function(t) {
                if ("string" == typeof t.data.type) switch (t.data.type) {
                    case "toggleNonPersonalized":
                        this.toggleNonPersonalized(!(!t.data.content || !t.data.content.nonPersonalized));
                        break;
                    case "setPersonalizedADConsent":
                        this.toggleNonPersonalized(!(t.data.content && t.data.content.consent)), this.setConsentString(t.data.content ? t.data.content.consentString : "")
                }
            }, t.prototype.startAd = function() {
                if (!this.sdkBooted) return this.sdkNotBootedButCalled();
                this.sdkImaError || (this.adReady ? (this.resize(), this.playerSkin.show(), this.ima.startPlayback()) : A.dispatchEvent(s.ads.error, {
                    message: "No ads ready to start"
                }))
            }, t.prototype.startAdClicked = function() {
                "undefined" != typeof navigator && /(iPad|iPhone|iPod)/gi.test(navigator.userAgent) && this.startAdEnabled && (this.startAdEnabled = !1, this.playerSkin.hideStartAdButton(), this.ima.startIOSPlayback())
            }, t.prototype.stopAd = function() {
                if (!this.sdkBooted) return this.sdkNotBootedButCalled();
                this.sdkImaError || (this.waterfall.stopWaterfall(), this.ima.stopPlayback(), this.playerSkin.hide())
            }, t.prototype.resumeAd = function() {
                if (!this.sdkBooted) return this.sdkNotBootedButCalled();
                this.sdkImaError || (this.playerSkin.hidePauseButton(), this.ima.resumeAd())
            }, t.prototype.skipAd = function() {
                this.stopAd(), this.callHandler("onFinish", {
                    type: s.ads.completed,
                    rewardAllowed: !0
                })
            }, t.prototype.muteAd = function() {
                if (!this.sdkBooted) return this.sdkNotBootedButCalled();
                this.sdkImaError || this.ima.muteAd()
            }, t.prototype.registerHandler = function(t, n) {
                this.handlers[t] = n
            }, t.prototype.callHandler = function(t) {
                for (var n = [], e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
                "function" == typeof this.handlers[t] && this.handlers[t](n)
            }, t.prototype.setupDefaultEvents = function() {
                var t = this;
                A.addEventListener(s.ready, (function() {
                    t.sdkBooted = !0, t.callHandler("onReady")
                })), A.addEventListener(s.adblocked, (function() {
                    t.sdkBooted = !0, t.sdkImaError = !0, t.callHandler("onAdblocked")
                })), A.addEventListener(s.ads.ready, (function() {
                    t.adReady = !0, t.autoStartOnReady && t.startAd()
                })), A.addEventListener(s.ads.started, (function() {
                    t.playerSkin.hideSpinner(), t.callHandler("onStart", {
                        type: s.ads.limit
                    })
                })), A.addEventListener(s.ads.video.paused, (function() {
                    t.playerSkin.showPauseButton()
                })), A.addEventListener(s.ads.limit, (function() {
                    t.callHandler("onFinish", {
                        type: s.ads.limit,
                        rewardAllowed: !1
                    })
                })), A.addEventListener(s.ads.stopped, (function() {
                    t.callHandler("onFinish", {
                        type: s.ads.stopped,
                        rewardAllowed: !1
                    })
                })), A.addEventListener(s.ads.error, (function() {
                    t.callHandler("onFinish", {
                        type: s.ads.error,
                        rewardAllowed: !1
                    })
                })), A.addEventListener(s.ads.busy, (function() {
                    t.callHandler("onFinish", {
                        type: s.ads.busy,
                        rewardAllowed: !1
                    })
                })), A.addEventListener(s.ads.completed, (function(n) {
                    t.callHandler("onFinish", {
                        type: s.ads.completed,
                        rewardAllowed: !!n.rewardAllowed
                    })
                })), A.addEventListener(s.ads.pushedToPlatform, (function() {
                    t.callHandler("onFinish", {
                        type: s.ads.pushedToPlatform,
                        rewardAllowed: !1
                    })
                })), [s.ads.limit, s.ads.stopped, s.ads.error, s.ads.busy, s.ads.completed, s.ads.pushedToPlatform].forEach((function(n) {
                    A.addEventListener(n, (function() {
                        t.playerSkin && t.playerSkin.hide(), t.adReady = !1
                    }))
                }))
            }, t.prototype.genericCriteria = function() {
                var t = {};
                if (this.distributorId && 2 === Number(this.distributorId)) {
                    var n = encodeURIComponent(b("tag") || ""),
                        e = encodeURIComponent(b("site_id") || ""),
                        i = encodeURIComponent(b("categories") || "");
                    t.tag = n, t.tag_site = n + "|" + e, t.site_id = e, t.categories = i, n.includes("exp-countdown-1") ? t.coutdown_test = 1 : n.includes("exp-countdown-2") ? t.coutdown_test = 2 : n.includes("exp-countdown-3") ? t.coutdown_test = 3 : n.includes("exp-countdown-4") && (t.coutdown_test = 4)
                }
                return this.programmaticAdsEnabled || (t.disable_programmatic = 1), t
            }, t.GetIsPokiPlatform = function() {
                return t.isPokiPlatform
            }, t.GetIsPokiIFrame = function() {
                return (parseInt(b("site_id"), 10) || 0) > 0
            }, t.GetIsMinimizeTestCountry = function() {
                var t = parseInt(b("site_id"), 10) || 0,
                    n = encodeURIComponent(b("tag") || ""),
                    e = y() || k();
                return (26 === t || 2 === t || 5 === t) && n.includes("-exp-minimize-ads.") && !e
            }, t.childDirected = !1, t.isPokiPlatform = !1, t.nonPersonalized = !1, t.consentString = "", t
        }(),
        at = ot,
        st = function() {
            return (st = Object.assign || function(t) {
                for (var n, e = 1, i = arguments.length; e < i; e++)
                    for (var r in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                return t
            }).apply(this, arguments)
        },
        dt = function() {
            function t() {
                var t = this;
                this.gameStarted = !1, this.SDK = new at, this.init = function() {
                    return new Promise((function(n, e) {
                        t.SDK.init({
                            onReady: n,
                            onAdblocked: e
                        }), u.sendMessage(s.message.sdkDetails, {
                            version: "2.65.1"
                        })
                    }))
                }, this.initWithVideoHB = function() {
                    return t.init()
                }, this.gameLoadingProgress = function() {}, this.gameLoadingStart = function() {
                    f.track(s.tracking.screen.gameLoadingStarted)
                }, this.gameLoadingFinished = function() {
                    f.track(s.tracking.screen.gameLoadingFinished)
                }, this.gameplayStart = function() {
                    t.gameStarted || (t.gameStarted = !0, f.track(s.tracking.screen.firstRound)), f.track(s.tracking.screen.gameplayStart)
                }, this.gameInteractive = function() {
                    f.track(s.tracking.screen.gameInteractive)
                }, this.gameplayStop = function() {
                    f.track(s.tracking.screen.gameplayStop)
                }, this.roundStart = function(t) {
                    void 0 === t && (t = ""), t = String(t), f.track(s.tracking.screen.roundStart, {
                        identifier: t
                    })
                }, this.roundEnd = function(t) {
                    void 0 === t && (t = ""), t = String(t), f.track(s.tracking.screen.roundEnd, {
                        identifier: t
                    })
                }, this.customEvent = function(n, e, i) {
                    if (void 0 === i && (i = {}), !n || !e) return t.error("customEvent", "customEvent needs at least a noun and a verb");
                    n = String(n), e = String(e), i = st({}, i), f.track(s.tracking.custom, {
                        eventNoun: n,
                        eventVerb: e,
                        eventData: i
                    })
                }, this.commercialBreak = function() {
                    return new Promise((function(n) {
                        f.track(s.tracking.screen.commercialBreak);
                        var e = t.gameStarted ? s.ads.position.midroll : s.ads.position.preroll;
                        at.GetIsMinimizeTestCountry() ? t.runPlatformVideo(e).then((function() {
                            return n()
                        })) : t.SDK.requestAd({
                            position: e,
                            onFinish: n
                        })
                    }))
                }, this.rewardedBreak = function() {
                    return new Promise((function(n) {
                        f.track(s.tracking.screen.rewardedBreak), at.GetIsMinimizeTestCountry() ? t.runPlatformVideo(s.ads.position.rewarded).then(n) : t.SDK.requestAd({
                            position: s.ads.position.rewarded,
                            onFinish: function(t) {
                                t.length > 0 ? n(t[0].rewardAllowed) : n(!1)
                            }
                        })
                    }))
                }, this.runPlatformVideo = function(n) {
                    return new Promise((function(e) {
                        if ("undefined" != typeof window) {
                            var i = function(t) {
                                if ("string" == typeof t.data.type) switch (t.data.type) {
                                    case "videoAdResult":
                                        window.removeEventListener("message", i, !1), e(t.data.content && t.data.content.rewardAllowed)
                                }
                            };
                            window.addEventListener("message", i, !1), t.SDK.requestAd({
                                position: n,
                                runOnPlatform: !0
                            })
                        } else e()
                    }))
                }, this.happyTime = function(n) {
                    void 0 === n && (n = 1), ((n = Number(n)) < 0 || n > 1) && (n = Math.max(0, Math.min(1, n)), t.warning("happyTime", "Intensity should be a value between 0 and 1, adjusted to " + n)), f.track(s.tracking.screen.happyTime, {
                        intensity: n
                    })
                }, this.muteAd = function() {
                    t.SDK.muteAd()
                }, this.setPlayerAge = function(n) {
                    f.track(s.tracking.setPlayerAge, {
                        age: n
                    }), n && t.SDK.setPlayerAge(n)
                }, this.togglePlayerAdvertisingConsent = function(n) {
                    f.track(s.tracking.togglePlayerAdvertisingConsent, {
                        didConsent: n
                    }), t.SDK.togglePlayerAdvertisingConsent(n), u.sendMessage(s.message.toggleProgrammaticAds, {
                        enabled: t.SDK.getProgrammaticAdsEnabled()
                    })
                }, this.warning = function(t, n) {
                    console.warn("PokiSDK." + t + ": " + n)
                }, this.error = function(t, n) {
                    console.error("PokiSDK." + t + ": " + n)
                }
            }
            return t.prototype.setDebug = function(t) {
                void 0 === t && (t = !0), this.SDK.setDebug(t)
            }, t.prototype.disableProgrammatic = function() {
                this.SDK.disableProgrammatic()
            }, t.prototype.toggleNonPersonalized = function(t) {
                void 0 === t && (t = !1), this.SDK.toggleNonPersonalized(t)
            }, t.prototype.setConsentString = function(t) {
                this.SDK.setConsentString(t)
            }, t.prototype.displayAd = function(t, n) {
                f.track(s.tracking.screen.displayAd, {
                    size: n
                }), this.SDK.displayAd(t, n)
            }, t.prototype.destroyAd = function(t) {
                f.track(s.tracking.screen.destroyAd), this.SDK.destroyAd(t)
            }, t
        }();
    window.PokiSDK = new dt
}]);