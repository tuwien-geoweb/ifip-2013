// OpenLayers 3. see http://ol3js.org/
(function() {
    function k(a) {
        return function() {
            return this[a]
        }
    }
    function aa(a) {
        return function() {
            return a
        }
    }
    var m, da = da || {}, p = this;
    function ea() {}
    function fa(a) {
        a.Za = function() {
            return a.$d ? a.$d : a.$d = new a
        }
    }
    function ga(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array)
                    return "array";
                    if (a instanceof Object)
                        return b;
                        var c = Object.prototype.toString.call(a);
                        if ("[object Window]" == c)
                            return "object";
                            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))
                                return "array";
                                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))
                                    return "function"
            } else 
                return "null";
                else if ("function" == b && "undefined" == typeof a.call)
                    return "object";
return b
}
function s(a) {
    return void 0 !== a
}
function ia(a) {
    return "array" == ga(a)
}
function ja(a) {
    var b = ga(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}
function t(a) {
    return "string" == typeof a
}
function la(a) {
    return "number" == typeof a
}
function ma(a) {
    return "function" == ga(a)
}
function na(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}
function u(a) {
    return a[oa] || (a[oa]=++pa)
}
var oa = "closure_uid_" + (1E9 * Math.random()>>>0), pa = 0;
function qa(a, b, c) {
    return a.call.apply(a.bind, arguments)
}
function ra(a, b, c) {
    if (!a)
        throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}
function x(a, b, c) {
    x = Function.prototype.bind&&-1 != Function.prototype.bind.toString().indexOf("native code") ? qa : ra;
    return x.apply(null, arguments)
}
function sa(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var b = Array.prototype.slice.call(arguments);
        b.unshift.apply(b, c);
        return a.apply(this, b)
    }
}
var ta = Date.now || function() {
    return + new Date
};
function A(a, b) {
    var c = a.split("."), d = p;
    c[0]in d ||!d.execScript || d.execScript("var " + c[0]);
    for (var e; c.length && (e = c.shift());)
        c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
}
function D(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.D = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a
};
function wa(a) {
    Error.captureStackTrace ? Error.captureStackTrace(this, wa) : this.stack = Error().stack || "";
    a && (this.message = String(a))
}
D(wa, Error);
wa.prototype.name = "CustomError";
function xa(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
function ya(a) {
    if (!za.test(a))
        return a;
    -1 != a.indexOf("\x26") && (a = a.replace(Aa, "\x26amp;"));
    -1 != a.indexOf("\x3c") && (a = a.replace(Ba, "\x26lt;"));
    -1 != a.indexOf("\x3e") && (a = a.replace(Ca, "\x26gt;"));
    -1 != a.indexOf('"') && (a = a.replace(Da, "\x26quot;"));
    return a
}
var Aa = /&/g, Ba = /</g, Ca = />/g, Da = /\"/g, za = /[&<>\"]/;
function Ea(a) {
    a = s(void 0) ? a.toFixed(void 0) : String(a);
    var b = a.indexOf(".");
    -1 == b && (b = a.length);
    b = Math.max(0, 2 - b);
    return Array(b + 1).join("0") + a
};
var Fa = Array.prototype, Ha = Fa.indexOf ? function(a, b, c) {
    return Fa.indexOf.call(a, b, c)
}
: function(a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (t(a))
        return t(b) && 1 == b.length ? a.indexOf(b, c) : -1;
    for (; c < a.length; c++)
        if (c in a && a[c] === b)
            return c;
    return -1
}, Ia = Fa.forEach ? function(a, b, c) {
    Fa.forEach.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = t(a) ? a.split("") : a, f = 0; f < d; f++)
        f in e && b.call(c, e[f], f, a)
}, La = Fa.filter ? function(a, b, c) {
    return Fa.filter.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = [], f =
    0, g = t(a) ? a.split("") : a, h = 0; h < d; h++)
        if (h in g) {
            var l = g[h];
            b.call(c, l, h, a) && (e[f++] = l)
        }
    return e
}, Ma = Fa.map ? function(a, b, c) {
    return Fa.map.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = Array(d), f = t(a) ? a.split("") : a, g = 0; g < d; g++)
        g in f && (e[g] = b.call(c, f[g], g, a));
    return e
}, Na = Fa.some ? function(a, b, c) {
    return Fa.some.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = t(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && b.call(c, e[f], f, a))
            return !0;
    return !1
};
function Oa(a, b) {
    var c = Pa(a, b, void 0);
    return 0 > c ? null : t(a) ? a.charAt(c) : a[c]
}
function Pa(a, b, c) {
    for (var d = a.length, e = t(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && b.call(c, e[f], f, a))
            return f;
    return -1
}
function Qa(a, b) {
    var c = Ha(a, b), d;
    (d = 0 <= c) && Fa.splice.call(a, c, 1);
    return d
}
function Ra(a) {
    return Fa.concat.apply(Fa, arguments)
}
function Sa(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)
            c[d] = a[d];
        return c
    }
    return []
}
function Ta(a, b, c, d) {
    Fa.splice.apply(a, Ua(arguments, 1))
}
function Ua(a, b, c) {
    return 2 >= arguments.length ? Fa.slice.call(a, b) : Fa.slice.call(a, b, c)
}
function Wa(a, b) {
    Fa.sort.call(a, b || Ya)
}
function Ya(a, b) {
    return a > b ? 1 : a < b?-1 : 0
}
function Za(a, b) {
    for (var c = {}, d = 0; d < a.length; d++) {
        var e = a[d], f = b.call(void 0, e, d, a);
        s(f) && (c[f] || (c[f] = [])).push(e)
    }
    return c
};
function $a(a, b, c) {
    this.z = a;
    this.x = b;
    this.y = c
}
function ab(a) {
    a = a.split("/");
    a = Ma(a, function(a) {
        return parseInt(a, 10)
    });
    return new $a(a[0], a[1], a[2])
}
function bb(a, b, c) {
    return a + "/" + b + "/" + c
}
$a.prototype.a = function(a) {
    return s(a) ? (a[0] = this.z, a[1] = this.x, a[2] = this.y, a) : [this.z, this.x, this.y]
};
function cb(a) {
    var b = Array(a.z), c = 1<<a.z-1, d, e;
    for (d = 0; d < a.z; ++d)
        e = 48, a.x & c && (e += 1), a.y & c && (e += 2), b[d] = String.fromCharCode(e), c>>=1;
    return b.join("")
}
$a.prototype.toString = function() {
    return bb(this.z, this.x, this.y)
};
function db(a, b, c, d) {
    this.a = a;
    this.d = b;
    this.c = c;
    this.b = d
}
function eb(a, b, c, d, e) {
    return s(e) ? (e.a = a, e.d = b, e.c = c, e.b = d, e) : new db(a, b, c, d)
}
db.prototype.contains = function(a) {
    return this.a <= a.x && a.x <= this.d && this.c <= a.y && a.y <= this.b
};
function fb(a) {
    this.b = a.html;
    this.a = s(a.tileRanges) ? a.tileRanges : null
};
function gb() {
    0 != hb && (this.ph = Error().stack, ib[u(this)] = this)
}
var hb = 0, ib = {};
gb.prototype.ac=!1;
gb.prototype.pc = function() {
    if (!this.ac && (this.ac=!0, this.B(), 0 != hb)
        ) {
        var a = u(this);
        delete ib[a]
    }
};
function jb(a, b) {
    var c = sa(kb, b);
    a.Ra || (a.Ra = []);
    a.Ra.push(x(c, void 0))
}
gb.prototype.B = function() {
    if (this.Ra)
        for (; this.Ra.length;)
            this.Ra.shift()()
};
function kb(a) {
    a && "function" == typeof a.pc && a.pc()
};
function lb(a, b) {
    this.type = a;
    this.d = this.target = b
}
m = lb.prototype;
m.pc = function() {};
m.eb=!1;
m.ef=!1;
m.qe=!0;
m.ob = function() {
    this.eb=!0
};
m.P = function() {
    this.ef=!0;
    this.qe=!1
};
function mb(a) {
    a.ob()
}
function nb(a) {
    a.P()
};
var ob, pb, qb, rb, sb, tb, wb;
function xb() {
    return p.navigator ? p.navigator.userAgent : null
}
function yb() {
    return p.navigator
}
rb = qb = pb = ob=!1;
var zb;
if (zb = xb()) {
    var Ab = yb();
    ob = 0 == zb.lastIndexOf("Opera", 0);
    pb=!ob && (-1 != zb.indexOf("MSIE")||-1 != zb.indexOf("Trident"));
    qb=!ob&&-1 != zb.indexOf("WebKit");
    rb=!ob&&!qb&&!pb && "Gecko" == Ab.product
}
var Bb = ob, E = pb, Cb = rb, Db = qb, Eb, Gb = yb();
Eb = Gb && Gb.platform || "";
sb =- 1 != Eb.indexOf("Mac");
tb =- 1 != Eb.indexOf("Win");
wb =- 1 != Eb.indexOf("Linux");
var Hb=!!yb()&&-1 != (yb().appVersion || "").indexOf("X11");
function Ib() {
    var a = p.document;
    return a ? a.documentMode : void 0
}
var Jb;
a: {
    var Kb = "", Mb;
    if (Bb && p.opera)
        var Nb = p.opera.version, Kb = "function" == typeof Nb ? Nb(): Nb;
    else if (Cb ? Mb = /rv\:([^\);]+)(\)|;)/ : E ? Mb = /\b(?:MSIE|rv)\s+([^\);]+)(\)|;)/ : Db && (Mb = /WebKit\/(\S+)/), Mb)
        var Ob = Mb.exec(xb()), Kb = Ob ? Ob[1]: "";
    if (E) {
        var Pb = Ib();
        if (Pb > parseFloat(Kb)) {
            Jb = String(Pb);
            break a
        }
    }
    Jb = Kb
}
var Qb = {};
function Rb(a) {
    var b;
    if (!(b = Qb[a])) {
        b = 0;
        for (var c = xa(String(Jb)).split("."), d = xa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
            var g = c[f] || "", h = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), n = RegExp("(\\d*)(\\D*)", "g");
            do {
                var q = l.exec(g) || ["", "", ""], r = n.exec(h) || ["", "", ""];
                if (0 == q[0].length && 0 == r[0].length)
                    break;
                b = ((0 == q[1].length ? 0 : parseInt(q[1], 10)) < (0 == r[1].length ? 0 : parseInt(r[1], 10))?-1 : (0 == q[1].length ? 0 : parseInt(q[1], 10)) > (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? 1 : 0) || ((0 == q[2].length) <
                (0 == r[2].length)?-1 : (0 == q[2].length) > (0 == r[2].length) ? 1 : 0) || (q[2] < r[2]?-1 : q[2] > r[2] ? 1 : 0)
            }
            while (0 == b)
            }
        b = Qb[a] = 0 <= b
    }
    return b
}
var Sb = p.document, Tb = Sb && E ? Ib() || ("CSS1Compat" == Sb.compatMode ? parseInt(Jb, 10) : 5): void 0;
var Ub=!E || E && 9 <= Tb, Vb=!E || E && 9 <= Tb, Wb = E&&!Rb("9");
!Db || Rb("528");
Cb && Rb("1.9b") || E && Rb("8") || Bb && Rb("9.5") || Db && Rb("528");
Cb&&!Rb("8") || E && Rb("9");
function Xb(a) {
    Xb[" "](a);
    return a
}
Xb[" "] = ea;
function Yb(a, b) {
    a && Zb(this, a, b)
}
D(Yb, lb);
var $b = [1, 4, 2];
m = Yb.prototype;
m.target = null;
m.df = null;
m.bf = 0;
m.cf = 0;
m.clientX = 0;
m.clientY = 0;
m.gd = 0;
m.hd = 0;
m.af = 0;
m.Pa = 0;
m.ed = 0;
m.Tb=!1;
m.qa=!1;
m.Qa=!1;
m.fd=!1;
m.Jb=!1;
m.$ = null;
function Zb(a, b, c) {
    var d = a.type = b.type;
    lb.call(a, d);
    a.target = b.target || b.srcElement;
    a.d = c;
    if (c = b.relatedTarget) {
        if (Cb) {
            var e;
            a:
            {
                try {
                    Xb(c.nodeName);
                    e=!0;
                    break a
                } catch (f) {}
                e=!1
            }
            e || (c = null)
        }
    } else 
        "mouseover" == d ? c = b.fromElement : "mouseout" == d && (c = b.toElement);
    a.df = c;
    a.bf = Db || void 0 !== b.offsetX ? b.offsetX : b.layerX;
    a.cf = Db || void 0 !== b.offsetY ? b.offsetY : b.layerY;
    a.clientX = void 0 !== b.clientX ? b.clientX : b.pageX;
    a.clientY = void 0 !== b.clientY ? b.clientY : b.pageY;
    a.gd = b.screenX || 0;
    a.hd = b.screenY || 0;
    a.af = b.button;
    a.Pa =
    b.keyCode || 0;
    a.ed = b.charCode || ("keypress" == d ? b.keyCode : 0);
    a.Tb = b.ctrlKey;
    a.qa = b.altKey;
    a.Qa = b.shiftKey;
    a.fd = b.metaKey;
    a.Jb = sb ? b.metaKey : b.ctrlKey;
    a.state = b.state;
    a.$ = b;
    b.defaultPrevented && a.P();
    delete a.eb
}
function ac(a) {
    return (Ub ? 0 == a.$.button : "click" == a.type?!0 : !!(a.$.button & $b[0]))&&!(Db && sb && a.Tb)
}
m.ob = function() {
    Yb.D.ob.call(this);
    this.$.stopPropagation ? this.$.stopPropagation() : this.$.cancelBubble=!0
};
m.P = function() {
    Yb.D.P.call(this);
    var a = this.$;
    if (a.preventDefault)
        a.preventDefault();
    else if (a.returnValue=!1, Wb)
        try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                a.keyCode =- 1
    } catch (b) {}
};
m.Pe = k("$");
var bc = "closure_listenable_" + (1E6 * Math.random() | 0);
function cc(a) {
    return !(!a ||!a[bc])
}
var kc = 0;
function lc(a, b, c, d, e, f) {
    this.Ja = a;
    this.a = b;
    this.src = c;
    this.type = d;
    this.capture=!!e;
    this.qb = f;
    this.key=++kc;
    this.Ua = this.yb=!1
}
function mc(a) {
    a.Ua=!0;
    a.Ja = null;
    a.a = null;
    a.src = null;
    a.qb = null
};
function nc(a, b) {
    for (var c in a)
        b.call(void 0, a[c], c, a)
}
function oc(a) {
    var b = 0, c;
    for (c in a)
        b++;
    return b
}
function pc(a) {
    for (var b in a)
        return b
}
function qc(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = a[d];
    return b
}
function rc(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = d;
    return b
}
function sc(a) {
    var b = tc, c;
    for (c in b)
        if (a.call(void 0, b[c], c, b))
            return c
}
function uc(a) {
    for (var b in a)
        return !1;
    return !0
}
function vc(a) {
    var b = {}, c;
    for (c in a)
        b[c] = a[c];
    return b
}
function wc(a) {
    var b = ga(a);
    if ("object" == b || "array" == b) {
        if (a.U)
            return a.U();
        var b = "array" == b ? []: {}, c;
        for (c in a)
            b[c] = wc(a[c]);
        return b
    }
    return a
}
var zc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ac(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)
            a[c] = d[c];
        for (var f = 0; f < zc.length; f++)
            c = zc[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};
var Bc = {}, Cc = {}, Dc = {}, Ec = {};
function G(a, b, c, d, e) {
    if (ia(b)) {
        for (var f = 0; f < b.length; f++)
            G(a, b[f], c, d, e);
        return null
    }
    c = Fc(c);
    return cc(a) ? a.wa(b, c, d, e) : Gc(a, b, c, !1, d, e)
}
function Gc(a, b, c, d, e, f) {
    if (!b)
        throw Error("Invalid event type");
    e=!!e;
    var g = Cc;
    b in g || (g[b] = {
        v: 0
    });
    g = g[b];
    e in g || (g[e] = {
        v: 0
    }, g.v++);
    var g = g[e], h = u(a), l;
    if (g[h]) {
        l = g[h];
        for (var n = 0; n < l.length; n++)
            if (g = l[n], g.Ja == c && g.qb == f) {
                if (g.Ua)
                    break;
                    d || (l[n].yb=!1);
                    return l[n]
            }
    } else 
        l = g[h] = [], g.v++;
    n = Hc();
    g = new lc(c, n, a, b, e, f);
    g.yb = d;
    n.src = a;
    n.Ja = g;
    l.push(g);
    Dc[h] || (Dc[h] = []);
    Dc[h].push(g);
    a.addEventListener ? a.addEventListener(b, n, e) : a.attachEvent(b in Ec ? Ec[b] : Ec[b] = "on" + b, n);
    return Bc[g.key] = g
}
function Hc() {
    var a = Ic, b = Vb ? function(c) {
        return a.call(b.src, b.Ja, c)
    }
    : function(c) {
        c = a.call(b.src, b.Ja, c);
        if (!c)
            return c
    };
    return b
}
function Jc(a, b, c, d, e) {
    if (ia(b)) {
        for (var f = 0; f < b.length; f++)
            Jc(a, b[f], c, d, e);
        return null
    }
    c = Fc(c);
    return cc(a) ? a.Ea.add(b, c, !0, d, e) : Gc(a, b, c, !0, d, e)
}
function Kc(a, b, c, d, e) {
    if (ia(b))
        for (var f = 0; f < b.length; f++)
            Kc(a, b[f], c, d, e);
    else if (c = Fc(c), cc(a)
        )a.gc(b, c, d, e);
    else if (d=!!d, a = Lc(a, b, d)
        )for (f = 0; f < a.length; f++)
        if (a[f].Ja == c && a[f].capture == d && a[f].qb == e) {
            H(a[f]);
            break
        }
}
function H(a) {
    if (la(a) ||!a || a.Ua)
        return !1;
    var b = a.src;
    if (cc(b))
        return Mc(b.Ea, a);
    var c = a.type, d = a.a, e = a.capture;
    b.removeEventListener ? b.removeEventListener(c, d, e) : b.detachEvent && b.detachEvent(c in Ec ? Ec[c] : Ec[c] = "on" + c, d);
    b = u(b);
    Dc[b] && (d = Dc[b], Qa(d, a), 0 == d.length && delete Dc[b]);
    mc(a);
    if (d = Cc[c][e][b])
        Qa(d, a), 0 == d.length && (delete Cc[c][e][b], Cc[c][e].v--), 0 == Cc[c][e].v && (delete Cc[c][e], Cc[c].v--), 0 == Cc[c].v && delete Cc[c];
    delete Bc[a.key];
    return !0
}
function Lc(a, b, c) {
    var d = Cc;
    return b in d && (d = d[b], c in d && (d = d[c], a = u(a), d[a])) ? d[a] : null
}
function Nc(a, b, c) {
    var d = 1;
    b = u(b);
    if (a[b])
        for (a = Sa(a[b]), b = 0; b < a.length; b++) {
            var e = a[b];
            e&&!e.Ua && (d&=!1 !== Oc(e, c))
        }
    return Boolean(d)
}
function Oc(a, b) {
    var c = a.Ja, d = a.qb || a.src;
    a.yb && H(a);
    return c.call(d, b)
}
function Ic(a, b) {
    if (a.Ua)
        return !0;
    var c = a.type, d = Cc;
    if (!(c in d))
        return !0;
    var d = d[c], e, f;
    if (!Vb) {
        if (!(c = b))
            a: {
            for (var c = ["window", "event"], g = p; e = c.shift();)
                if (null != g[e])
                    g = g[e];
                else {
                    c = null;
                    break a
                }
                c = g
        }
        e = c;
        c=!0 in d;
        g=!1 in d;
        if (c) {
            if (0 > e.keyCode || void 0 != e.returnValue)
                return !0;
            a:
            {
                var h=!1;
                if (0 == e.keyCode)
                    try {
                        e.keyCode =- 1;
                        break a
                } catch (l) {
                    h=!0
                }
                if (h || void 0 == e.returnValue)
                    e.returnValue=!0
            }
        }
        h = new Yb;
        Zb(h, e, this);
        e=!0;
        try {
            if (c) {
                for (var n = [], q = h.d; q; q = q.parentNode)
                    n.push(q);
                f = d[!0];
                for (var r = n.length -
                1; !h.eb && 0 <= r; r--)
                    h.d = n[r], e&=Nc(f, n[r], h);
                if (g)
                    for (f = d[!1], r = 0; !h.eb && r < n.length; r++)
                        h.d = n[r], e&=Nc(f, n[r], h)
            } else 
                e = Oc(a, h)
            } finally {
            n && (n.length = 0)
        }
        return e
    }
    d = new Yb(b, this);
    return e = Oc(a, d)
}
var Pc = "__closure_events_fn_" + (1E9 * Math.random()>>>0);
function Fc(a) {
    return ma(a) ? a : a[Pc] || (a[Pc] = function(b) {
        return a.handleEvent(b)
    })
};
function Qc(a) {
    this.src = a;
    this.a = {};
    this.b = 0
}
Qc.prototype.add = function(a, b, c, d, e) {
    var f = this.a[a];
    f || (f = this.a[a] = [], this.b++);
    var g = Rc(f, b, d, e);
    -1 < g ? (a = f[g], c || (a.yb=!1)) : (a = new lc(b, null, this.src, a, !!d, e), a.yb = c, f.push(a));
    return a
};
Qc.prototype.remove = function(a, b, c, d) {
    if (!(a in this.a))
        return !1;
    var e = this.a[a];
    b = Rc(e, b, c, d);
    return -1 < b ? (mc(e[b]), Fa.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0) : !1
};
function Mc(a, b) {
    var c = b.type;
    if (!(c in a.a))
        return !1;
    var d = Qa(a.a[c], b);
    d && (mc(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
    return d
}
function Rc(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.Ua && f.Ja == b && f.capture==!!c && f.qb == d)
            return e
    }
    return -1
};
function I() {
    gb.call(this);
    this.Ea = new Qc(this);
    this.Qc = this
}
D(I, gb);
I.prototype[bc]=!0;
m = I.prototype;
m.rd = null;
m.addEventListener = function(a, b, c, d) {
    G(this, a, b, c, d)
};
m.removeEventListener = function(a, b, c, d) {
    Kc(this, a, b, c, d)
};
function K(a, b) {
    var c, d = a.rd;
    if (d)
        for (c = [];
        d;
        d = d.rd)c.push(d);
        var d = a.Qc, e = b, f = e.type || e;
        if (t(e))e = new lb(e, d);
    else if (e instanceof lb)e.target = e.target || d;
    else {
        var g = e, e = new lb(f, d);
        Ac(e, g)
    }
    var g=!0, h;
    if (c)for (var l = c.length-1;
    !e.eb && 0 <= l;
    l--)h = e.d = c[l], g = Sc(h, f, !0, e) && g; e.eb || (h = e.d = d, g = Sc(h, f, !0, e) 
        && g, e.eb || (g = Sc(h, f, !1, e) && g));
    if (c)
        for (l = 0; !e.eb && l < c.length; l++)
            h = e.d = c[l], g = Sc(h, f, !1, e) && g;
    return g
}
m.B = function() {
    I.D.B.call(this);
    if (this.Ea) {
        var a = this.Ea, b = 0, c;
        for (c in a.a) {
            for (var d = a.a[c], e = 0; e < d.length; e++)
                ++b, d[e].Ua=!0;
            delete a.a[c];
            a.b--
        }
    }
    this.rd = null
};
m.wa = function(a, b, c, d) {
    return this.Ea.add(a, b, !1, c, d)
};
m.gc = function(a, b, c, d) {
    return this.Ea.remove(a, b, c, d)
};
function Sc(a, b, c, d) {
    b = a.Ea.a[b];
    if (!b)
        return !0;
    b = Sa(b);
    for (var e=!0, f = 0; f < b.length; ++f) {
        var g = b[f];
        if (g&&!g.Ua && g.capture == c) {
            var h = g.Ja, l = g.qb || g.src;
            g.yb && Mc(a.Ea, g);
            e=!1 !== h.call(l, d) && e
        }
    }
    return e&&!1 != d.qe
};
function Tc(a) {
    return function() {
        return a
    }
}
var Uc = Tc(!1), Vc = Tc(!0), Wc = Tc(null);
function Xc(a) {
    return a
}
function Yc(a) {
    return function() {
        throw a;
    }
}
function Zc(a) {
    var b;
    b = b || 0;
    return function() {
        return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
    }
}
function $c(a) {
    var b = arguments, c = b.length;
    return function() {
        for (var a, e = 0; e < c; e++)
            a = b[e].apply(this, arguments);
        return a
    }
}
function ad(a) {
    var b = arguments, c = b.length;
    return function() {
        for (var a = 0; a < c; a++)
            if (!b[a].apply(this, arguments))
                return !1;
        return !0
    }
};
function bd(a, b) {
    this.target = a;
    this.key = b;
    this.b = this.a = Xc
}
bd.prototype.transform = function(a, b) {
    this.a = a;
    this.b = b;
    this.target.kd(this.key)
};
function L(a) {
    I.call(this);
    this.f = {};
    s(a) && this.$b(a)
}
D(L, I);
var cd = {}, dd = {}, ed = {};
function fd(a) {
    return a.substr(0, 1).toUpperCase() + a.substr(1)
}
function gd(a) {
    return a.ol_accessors_ || (a.ol_accessors_ = {})
}
function hd(a) {
    return cd.hasOwnProperty(a) ? cd[a] : cd[a] = "change:" + a.toLowerCase()
}
function id(a) {
    return a.ol_bindings_ || (a.ol_bindings_ = {})
}
m = L.prototype;
m.Je = function(a, b, c) {
    c = c || a;
    this.wd(a);
    var d = hd(c);
    id(this)[a] = G(b, d, function() {
        jd(this, a)
    }, void 0, this);
    b = new bd(b, c);
    gd(this)[a] = b;
    jd(this, a);
    return b
};
m.get = function(a) {
    var b, c = gd(this);
    if (c.hasOwnProperty(a)) {
        a = c[a];
        b = a.target;
        var c = a.key, d = dd.hasOwnProperty(c) ? dd[c]: dd[c] = "get" + fd(c);
        b = b[d] ? b[d]() : b.get(c);
        b = a.b(b)
    } else 
        this.f.hasOwnProperty(a) && (b = this.f[a]);
    return b
};
m.Ga = function() {
    var a = gd(this), b;
    if (uc(this.f)) {
        if (uc(a))
            return [];
        b = a
    } else if (uc(a))
        b = this.f;
    else {
        b = {};
        for (var c in this.f)
            b[c]=!0;
            for (c in a)
                b[c]=!0
    }
    return rc(b)
};
m.kd = function(a) {
    var b = gd(this);
    b.hasOwnProperty(a) ? (a = b[a], a.target.kd(a.key)) : jd(this, a)
};
function jd(a, b) {
    var c = hd(b);
    K(a, c);
    K(a, "change")
}
m.Wf = function(a, b, c) {
    return G(this, a, b, !1, c)
};
m.Yf = function(a, b, c) {
    return Jc(this, a, b, !1, c)
};
m.o = function(a, b) {
    var c = gd(this);
    if (c.hasOwnProperty(a)) {
        var c = c[a], d = c.target, e = c.key, f = ed.hasOwnProperty(e) ? ed[e]: ed[e] = "set" + fd(e);
        b = c.a(b);
        if (d[f])
            d[f](b);
        else 
            d.o(e, b)
    } else 
        this.f[a] = b, jd(this, a)
};
m.$b = function(a) {
    var b, c, d;
    for (b in a)
        if (c = a[b], d = ed.hasOwnProperty(b) ? ed[b]: ed[b] = "set" + fd(b)
            , this[d])this[d](c);
    else 
        this.o(b, c)
};
m.wd = function(a) {
    var b = id(this), c = b[a];
    c && (delete b[a], H(c), b = this.get(a), delete gd(this)[a], this.f[a] = b)
};
m.og = function(a, b, c) {
    Kc(this, a, b, !1, c)
};
m.pg = function(a) {
    H(a)
};
m.qg = function() {
    for (var a in id(this))
        this.wd(a)
};
function kd(a, b, c) {
    lb.call(this, a, c);
    this.a = b
}
D(kd, lb);
kd.prototype.b = k("a");
function M(a) {
    L.call(this);
    this.a = a || [];
    od(this)
}
D(M, L);
m = M.prototype;
m.clear = function() {
    for (; 0 < this.yc();)
        this.pop()
};
m.Rf = function(a) {
    var b, c;
    b = 0;
    for (c = a.length; b < c; ++b)
        this.push(a[b]);
    return this
};
m.forEach = function(a, b) {
    Ia(this.a, a, b)
};
m.Sf = k("a");
m.Oe = function(a) {
    return this.a[a]
};
m.yc = function() {
    return this.get("length")
};
m.Ec = function(a, b) {
    Ta(this.a, a, 0, b);
    od(this);
    K(this, new kd("add", b, this))
};
m.pop = function() {
    return this.sd(this.yc()-1)
};
m.push = function(a) {
    var b = this.a.length;
    this.Ec(b, a);
    return b
};
m.remove = function(a) {
    var b = this.a, c, d;
    c = 0;
    for (d = b.length; c < d; ++c)
        if (b[c] === a)
            return this.sd(c)
};
m.sd = function(a) {
    var b = this.a[a];
    Fa.splice.call(this.a, a, 1);
    od(this);
    K(this, new kd("remove", b, this));
    return b
};
m.hg = function(a, b) {
    var c = this.yc();
    if (a < c)
        c = this.a[a], this.a[a] = b, K(this, new kd("remove", c, this)), K(this, new kd("add", b, this));
    else {
        for (; c < a; ++c)
            this.Ec(c, void 0);
        this.Ec(a, b)
    }
};
function od(a) {
    a.o("length", a.a.length)
};
function pd(a, b, c) {
    return Math.min(Math.max(a, b), c)
}
function qd(a, b) {
    var c = a%b;
    return 0 > c * b ? c + b : c
}
function rd(a) {
    return a * Math.PI / 180
};
function sd(a) {
    L.call(this);
    a = s(a) ? a : {};
    this.a = null;
    G(this, hd("tracking"), this.j, !1, this);
    this.b(s(a.tracking) ? a.tracking : !1)
}
D(sd, L);
sd.prototype.B = function() {
    this.b(!1);
    sd.D.B.call(this)
};
var td = "DeviceOrientationEvent"in p;
sd.prototype.n = function(a) {
    a = a.$;
    if (null != a.alpha) {
        var b = rd(a.alpha);
        this.o("alpha", b);
        "boolean" == typeof a.absolute && a.absolute ? this.o("heading", b) : null != a.webkitCompassHeading && (null != a.webkitCompassAccuracy&&-1 != a.webkitCompassAccuracy) && this.o("heading", rd(a.webkitCompassHeading))
    }
    null != a.beta && this.o("beta", rd(a.beta));
    null != a.gamma && this.o("gamma", rd(a.gamma))
};
sd.prototype.d = function() {
    return this.get("alpha")
};
sd.prototype.getAlpha = sd.prototype.d;
sd.prototype.e = function() {
    return this.get("beta")
};
sd.prototype.getBeta = sd.prototype.e;
sd.prototype.g = function() {
    return this.get("gamma")
};
sd.prototype.getGamma = sd.prototype.g;
sd.prototype.i = function() {
    return this.get("heading")
};
sd.prototype.getHeading = sd.prototype.i;
sd.prototype.c = function() {
    return this.get("tracking")
};
sd.prototype.getTracking = sd.prototype.c;
sd.prototype.j = function() {
    if (td) {
        var a = this.c();
        a && null === this.a ? this.a = G(p, "deviceorientation", this.n, !1, this) : a || null === this.a || (H(this.a), this.a = null)
    }
};
sd.prototype.b = function(a) {
    this.o("tracking", a)
};
sd.prototype.setTracking = sd.prototype.b;
function ud(a, b) {
    a[0] += b[0];
    a[1] += b[1]
}
function vd(a, b) {
    var c = a[0], d = a[1], e = b[0], f = b[1], g = e[0], e = e[1], h = f[0], f = f[1], l = h - g, n = f - e, c = 0 == l && 0 == n ? 0: (l * (c - g) + n * (d - e)) / (l * l + n * n || 0);
    0 >= c || (1 <= c ? (g = h, e = f) : (g += c * l, e += c * n));
    return [g, e]
}
function wd(a, b) {
    var c = qd(a + 180, 360)-180, d = Math.abs(Math.round(3600 * c));
    return Math.floor(d / 3600) + "\u00b0 " + Math.floor(d / 60%60) + "\u2032 " + Math.floor(d%60) + "\u2033 " + b.charAt(0 > c ? 1 : 0)
}
function xd(a, b, c) {
    return s(a) ? b.replace("{x}", a[0].toFixed(c)).replace("{y}", a[1].toFixed(c)) : ""
}
function yd(a, b) {
    for (var c=!0, d = a.length-1; 0 <= d; --d)
        if (a[d] != b[d]) {
            c=!1;
            break
        }
    return c
}
function zd(a, b) {
    var c = Math.cos(b), d = Math.sin(b), e = a[1] * c + a[0] * d;
    a[0] = a[0] * c - a[1] * d;
    a[1] = e;
    return a
}
function Ad(a, b) {
    var c = a[0] - b[0], d = a[1] - b[1];
    return c * c + d * d
}
function Bd(a, b) {
    return xd(a, "{x}, {y}", b)
}
function Cd(a, b) {
    var c = b.charAt(0);
    return "n" === c || "s" === c ? [a[1], a[0]] : a
};
function Dd(a) {
    for (var b = Ed(), c = 0, d = a.length; c < d; ++c)
        Fd(b, a[c]);
    return b
}
function Gd(a, b, c) {
    var d = Math.min.apply(null, a);
    a = Math.max.apply(null, a);
    var e = Math.min.apply(null, b);
    b = Math.max.apply(null, b);
    return Hd(d, a, e, b, c)
}
function Id(a, b) {
    return a[0] <= b[0] && b[0] <= a[2] && a[1] <= b[1] && b[1] <= a[3]
}
function Jd(a, b) {
    return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3]
}
function Ed() {
    return [Infinity, Infinity, - Infinity, - Infinity]
}
function Hd(a, b, c, d, e) {
    return s(e) ? (e[0] = a, e[2] = b, e[1] = c, e[3] = d, e) : [a, c, b, d]
}
function Kd(a, b) {
    return a[0] == b[0] && a[2] == b[2] && a[1] == b[1] && a[3] == b[3]
}
function Ld(a, b) {
    b[0] < a[0] && (a[0] = b[0]);
    b[2] > a[2] && (a[2] = b[2]);
    b[1] < a[1] && (a[1] = b[1]);
    b[3] > a[3] && (a[3] = b[3])
}
function Fd(a, b) {
    b[0] < a[0] && (a[0] = b[0]);
    b[0] > a[2] && (a[2] = b[0]);
    b[1] < a[1] && (a[1] = b[1]);
    b[1] > a[3] && (a[3] = b[1])
}
function Md(a) {
    return [a[0], a[1]]
}
function Nd(a) {
    return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]
}
function Od(a, b, c, d) {
    var e = b * d[0] / 2;
    d = b * d[1] / 2;
    b = Math.cos(c);
    c = Math.sin(c);
    e = [ - e, - e, e, e];
    d = [ - d, d, - d, d];
    var f, g, h;
    for (f = 0; 4 > f; ++f)
        g = e[f], h = d[f], e[f] = a[0] + g * b - h * c, d[f] = a[1] + g * c + h * b;
    return Gd(e, d, void 0)
}
function Pd(a) {
    return [a[0], a[3]]
}
function Qd(a, b) {
    return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1]
}
function Rd(a, b) {
    return Qd(a, b) && (a[0] == b[2] || a[2] == b[0] || a[1] == b[3] || a[3] == b[1])
}
function Sd(a, b, c) {
    a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]];
    b(a, a, 2);
    return Gd([a[0], a[2], a[4], a[6]], [a[1], a[3], a[5], a[7]], c)
};
function Td() {
    I.call(this)
}
D(Td, I);
Td.prototype.U = function() {
    return new this.constructor(wc(this.k()))
};
function Ud(a, b, c) {
    lb.call(this, a, b);
    this.a = c
}
D(Ud, lb);
var Vd = {
    nh: "point",
    Zg: "linestring",
    Yg: "linearring",
    oh: "polygon",
    ih: "multipoint",
    gh: "multilinestring",
    jh: "multipolygon",
    Sg: "geometrycollection"
};
function N(a) {
    L.call(this, a);
    this.qd = null;
    this.na = "default";
    this.b = null
}
D(N, L);
m = N.prototype;
m.kb = function(a) {
    var b = this.Ga();
    a=!a;
    var c = b.length, d = {}, e, f, g;
    for (e = 0; e < c; ++e)
        g = b[e], f = this.get(g), !a && f instanceof Td || (d[g] = f);
    return d
};
m.Se = k("Fa");
m.s = function() {
    return s(this.a) ? this.get(this.a) : null
};
m.Bb = k("b");
m.Vd = function(a) {
    K(this, new Wd(Xd, this, a.a))
};
m.o = function(a, b) {
    var c = this.s(), d = null;
    null != c && (d = c.R(), a === this.a && Kc(c, "change", this.Vd, !1, this));
    b instanceof Td && (s(this.a) || (this.a = a), a === this.a && G(b, "change", this.Vd, !1, this));
    N.D.o.call(this, a, b);
    K(this, new Wd(Xd, this, d))
};
m.aa = function(a) {
    s(this.a) || (this.a = "geometry");
    this.o(this.a, a)
};
function Yd(a, b) {
    a.na = b;
    var c = a.s();
    null === c || K(a, new Wd(Zd, a, c.R()))
}
var Xd = "featurechange", Zd = "featureintentchange";
function Wd(a, b, c) {
    lb.call(this, a, b);
    this.a = c
}
D(Wd, lb); /*

 Latitude/longitude spherical geodesy formulae taken from
 http://www.movable-type.co.uk/scripts/latlong.html
 Licenced under CC-BY-3.0.
*/
function $d(a, b, c) {
    var d = rd(b[1]), e = rd(c[1]), f = (e - d) / 2;
    b = rd(c[0] - b[0]) / 2;
    d = Math.sin(f) * Math.sin(f) + Math.sin(b) * Math.sin(b) * Math.cos(d) * Math.cos(e);
    return 2 * a.a * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d))
};
var ae = new function() {
    this.a = 6370997
};
var be = "object" == typeof Proj4js, ce = {
    xe: "degrees",
    Rg: "ft",
    bh: "m"
}, de = {};
de.degrees = 2 * Math.PI * ae.a / 360;
de.ft = 0.3048;
de.m = 1;
function ee(a) {
    this.Oa = a.code;
    this.Ob = a.units;
    this.i = s(a.extent) ? a.extent : null;
    this.d = s(a.axisOrientation) ? a.axisOrientation : "enu";
    this.Od = s(a.global) ? a.global : !1;
    this.f = null
}
ee.prototype.g = k("Oa");
ee.prototype.ca = k("i");
ee.prototype.a = function() {
    return de[this.Ob]
};
function fe(a) {
    return a.d
}
function ge(a, b) {
    var c = {
        units: a.units,
        axisOrientation: a.axis
    };
    Ac(c, b);
    ee.call(this, c);
    this.e = a;
    this.c = null
}
D(ge, ee);
ge.prototype.a = function() {
    var a = this.e.to_meter;
    s(a) || (a = de[this.Ob]);
    return a
};
ge.prototype.b = function(a, b) {
    if ("degrees" == this.Ob)
        return a;
    null === this.c && (this.c = he(this, re({
        code: "EPSG:4326",
        extent: null
    })));
    var c = [b[0] - a / 2, b[1], b[0] + a / 2, b[1], b[0], b[1] - a / 2, b[0], b[1] + a / 2], c = this.c(c, c, 2), d = $d(ae, c.slice(0, 2), c.slice(2, 4)), c = $d(ae, c.slice(4, 6), c.slice(6, 8)), d = (d + c) / 2;
    "ft" == this.Ob && (d/=0.3048);
    return d
};
function se(a) {
    return a.e
}
var te = {}, ue = {}, ve = {};
function we(a) {
    xe(a);
    Ia(a, function(b) {
        Ia(a, function(a) {
            b !== a && ye(b, a, ze)
        })
    })
}
function Ae() {
    var a = Be, b = Ce, c = De;
    Ia(Ee, function(d) {
        Ia(a, function(a) {
            ye(d, a, b);
            ye(a, d, c)
        })
    })
}
function Fe(a) {
    ue[a.Oa] = a;
    ye(a, a, ze)
}
function xe(a) {
    Ia(a, function(a) {
        Fe(a)
    })
}
function Ge(a) {
    return null != a ? t(a) ? He(a) : a : He("EPSG:3857")
}
function ye(a, b, c) {
    a = a.Oa;
    b = b.Oa;
    a in ve || (ve[a] = {});
    ve[a][b] = c
}
function He(a) {
    var b;
    a instanceof ee ? b = a : t(a) ? (b = ue[a], be&&!s(b) && (b = re({
        code: a,
        extent: null
    })), s(b) || (b = null)) : b = null;
    return b
}
function re(a) {
    var b = a.code, c = te[b];
    if (!s(c)) {
        var d = new Proj4js.Proj(b), e = d.srsCode, c = te[e];
        s(c) || (a = vc(a), a.code = e, c = new ge(d, a), te[e] = c);
        te[b] = c
    }
    return c
}
function Ie(a, b) {
    var c = He(a), d = He(b);
    return he(c, d)
}
function he(a, b) {
    var c = a.Oa, d = b.Oa, e;
    c in ve && d in ve[c] && (e = ve[c][d]);
    if (be&&!s(e)) {
        var f = se(a instanceof ge ? a : re({
            code: c,
            extent: null
        })), g = se(b instanceof ge ? b : re({
            code: d,
            extent: null
        }));
        e = function(a, b, c) {
            var d = a.length;
            c = 1 < c ? c : 2;
            s(b) || (b = 2 < c ? a.slice() : Array(d));
            for (var e, y = 0; y < d; y += c)
                e = new Proj4js.Point(a[y], a[y + 1]), e = Proj4js.transform(f, g, e), b[y] = e.x, b[y + 1] = e.y;
            return b
        };
        ye(a, b, e)
    }
    s(e) || (e = Je);
    return e
}
function Je(a, b) {
    if (s(b) && a !== b) {
        for (var c = 0, d = a.length; c < d; ++c)
            b[c] = a[c];
        a = b
    }
    return a
}
function ze(a, b) {
    var c;
    if (s(b)) {
        c = 0;
        for (var d = a.length; c < d; ++c)
            b[c] = a[c];
        c = b
    } else 
        c = a.slice();
    return c
};
function P(a) {
    L.call(this);
    a = s(a) ? a : {};
    this.a = null;
    this.c = Je;
    this.b = void 0;
    G(this, hd("projection"), this.O, !1, this);
    G(this, hd("tracking"), this.W, !1, this);
    s(a.projection) && this.i(He(a.projection));
    s(a.trackingOptions) && this.j(a.trackingOptions);
    this.d(s(a.tracking) ? a.tracking : !1)
}
D(P, L);
P.prototype.B = function() {
    this.d(!1);
    P.D.B.call(this)
};
P.prototype.O = function() {
    var a = this.da();
    null != a && (this.c = he(He("EPSG:4326"), a), null === this.a || this.o("position", this.c(this.a)))
};
P.prototype.W = function() {
    if (Ke) {
        var a = this.g();
        a&&!s(this.b) ? this.b = p.navigator.geolocation.watchPosition(x(this.ga, this), x(this.ea, this), this.e()) : !a && s(this.b) && (p.navigator.geolocation.clearWatch(this.b), this.b = void 0)
    }
};
var Ke = "geolocation"in p.navigator;
P.prototype.ga = function(a) {
    a = a.coords;
    this.o("accuracy", a.accuracy);
    this.o("altitude", null === a.altitude ? void 0 : a.altitude);
    this.o("altitudeAccuracy", null === a.altitudeAccuracy ? void 0 : a.altitudeAccuracy);
    this.o("heading", null === a.heading ? void 0 : rd(a.heading));
    null === this.a ? this.a = [a.longitude, a.latitude] : (this.a[0] = a.longitude, this.a[1] = a.latitude);
    this.o("position", this.c(this.a));
    this.o("speed", null === a.speed ? void 0 : a.speed)
};
P.prototype.ea = function(a) {
    a.type = "error";
    K(this, a)
};
P.prototype.n = function() {
    return this.get("accuracy")
};
P.prototype.getAccuracy = P.prototype.n;
P.prototype.q = function() {
    return this.get("altitude")
};
P.prototype.getAltitude = P.prototype.q;
P.prototype.r = function() {
    return this.get("altitudeAccuracy")
};
P.prototype.getAltitudeAccuracy = P.prototype.r;
P.prototype.A = function() {
    return this.get("heading")
};
P.prototype.getHeading = P.prototype.A;
P.prototype.H = function() {
    return this.get("position")
};
P.prototype.getPosition = P.prototype.H;
P.prototype.da = function() {
    return this.get("projection")
};
P.prototype.getProjection = P.prototype.da;
P.prototype.t = function() {
    return this.get("speed")
};
P.prototype.getSpeed = P.prototype.t;
P.prototype.g = function() {
    return this.get("tracking")
};
P.prototype.getTracking = P.prototype.g;
P.prototype.e = function() {
    return this.get("trackingOptions")
};
P.prototype.getTrackingOptions = P.prototype.e;
P.prototype.i = function(a) {
    this.o("projection", a)
};
P.prototype.setProjection = P.prototype.i;
P.prototype.d = function(a) {
    this.o("tracking", a)
};
P.prototype.setTracking = P.prototype.d;
P.prototype.j = function(a) {
    this.o("trackingOptions", a)
};
P.prototype.setTrackingOptions = P.prototype.j;
function Le(a, b) {
    I.call(this);
    this.a = a;
    this.state = b
}
D(Le, I);
Le.prototype.b = function() {
    return u(this).toString()
};
Le.prototype.i = k("a");
function Me(a, b, c, d, e) {
    Le.call(this, a, b);
    this.g = c;
    this.c = new Image;
    null !== d && (this.c.crossOrigin = d);
    this.e = {};
    this.f = null;
    this.j = e
}
D(Me, Le);
Me.prototype.d = function(a) {
    if (s(a)) {
        var b = u(a);
        if (b in this.e)
            return this.e[b];
        a = uc(this.e) ? this.c : this.c.cloneNode(!1);
        return this.e[b] = a
    }
    return this.c
};
Me.prototype.b = k("g");
Me.prototype.n = function() {
    this.state = 3;
    Ia(this.f, H);
    this.f = null;
    K(this, "change")
};
Me.prototype.q = function() {
    this.state = this.c.naturalWidth && this.c.naturalHeight ? 2 : 4;
    Ia(this.f, H);
    this.f = null;
    K(this, "change")
};
function Ne(a) {
    this.length = a.length || a;
    for (var b = 0; b < this.length; b++)
        this[b] = a[b] || 0
}
Ne.prototype.a = 4;
Ne.prototype.b = function(a, b) {
    b = b || 0;
    for (var c = 0; c < a.length && b + c < this.length; c++)
        this[b + c] = a[c]
};
Ne.prototype.toString = Array.prototype.join;
"undefined" == typeof Float32Array && (Ne.BYTES_PER_ELEMENT = 4, Ne.prototype.BYTES_PER_ELEMENT = Ne.prototype.a, Ne.prototype.set = Ne.prototype.b, Ne.prototype.toString = Ne.prototype.toString, A("Float32Array", Ne));
function Oe(a) {
    this.length = a.length || a;
    for (var b = 0; b < this.length; b++)
        this[b] = a[b] || 0
}
Oe.prototype.a = 8;
Oe.prototype.b = function(a, b) {
    b = b || 0;
    for (var c = 0; c < a.length && b + c < this.length; c++)
        this[b + c] = a[c]
};
Oe.prototype.toString = Array.prototype.join;
if ("undefined" == typeof Float64Array) {
    try {
        Oe.BYTES_PER_ELEMENT = 8
    } catch (Pe) {}
    Oe.prototype.BYTES_PER_ELEMENT = Oe.prototype.a;
    Oe.prototype.set = Oe.prototype.b;
    Oe.prototype.toString = Oe.prototype.toString;
    A("Float64Array", Oe)
};
function Qe(a, b, c, d, e) {
    a[0] = b;
    a[1] = c;
    a[2] = d;
    a[3] = e
};
function Re() {
    var a = Array(16);
    Se(a, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    return a
}
function Te() {
    var a = Array(16);
    Se(a, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return a
}
function Se(a, b, c, d, e, f, g, h, l, n, q, r, y, v, B, C, w) {
    a[0] = b;
    a[1] = c;
    a[2] = d;
    a[3] = e;
    a[4] = f;
    a[5] = g;
    a[6] = h;
    a[7] = l;
    a[8] = n;
    a[9] = q;
    a[10] = r;
    a[11] = y;
    a[12] = v;
    a[13] = B;
    a[14] = C;
    a[15] = w
}
function Ue(a, b) {
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
    a[3] = b[3];
    a[4] = b[4];
    a[5] = b[5];
    a[6] = b[6];
    a[7] = b[7];
    a[8] = b[8];
    a[9] = b[9];
    a[10] = b[10];
    a[11] = b[11];
    a[12] = b[12];
    a[13] = b[13];
    a[14] = b[14];
    a[15] = b[15]
}
function Ve(a) {
    a[0] = 1;
    a[1] = 0;
    a[2] = 0;
    a[3] = 0;
    a[4] = 0;
    a[5] = 1;
    a[6] = 0;
    a[7] = 0;
    a[8] = 0;
    a[9] = 0;
    a[10] = 1;
    a[11] = 0;
    a[12] = 0;
    a[13] = 0;
    a[14] = 0;
    a[15] = 1
}
function We(a, b, c) {
    var d = a[0], e = a[1], f = a[2], g = a[3], h = a[4], l = a[5], n = a[6], q = a[7], r = a[8], y = a[9], v = a[10], B = a[11], C = a[12], w = a[13], z = a[14];
    a = a[15];
    var O = b[0], F = b[1], V = b[2], Y = b[3], ba = b[4], J = b[5], Q = b[6], ua = b[7], va = b[8], ha = b[9], ka = b[10], ca = b[11], Xa = b[12], Ga = b[13], Fb = b[14];
    b = b[15];
    c[0] = d * O + h * F + r * V + C * Y;
    c[1] = e * O + l * F + y * V + w * Y;
    c[2] = f * O + n * F + v * V + z * Y;
    c[3] = g * O + q * F + B * V + a * Y;
    c[4] = d * ba + h * J + r * Q + C * ua;
    c[5] = e * ba + l * J + y * Q + w * ua;
    c[6] = f * ba + n * J + v * Q + z * ua;
    c[7] = g * ba + q * J + B * Q + a * ua;
    c[8] = d * va + h * ha + r * ka + C * ca;
    c[9] = e * va + l * ha + y * ka + w * ca;
    c[10] =
    f * va + n * ha + v * ka + z * ca;
    c[11] = g * va + q * ha + B * ka + a * ca;
    c[12] = d * Xa + h * Ga + r * Fb + C * b;
    c[13] = e * Xa + l * Ga + y * Fb + w * b;
    c[14] = f * Xa + n * Ga + v * Fb + z * b;
    c[15] = g * Xa + q * Ga + B * Fb + a * b
}
function Xe(a, b) {
    return a.length == b.length && a[0] == b[0] && a[1] == b[1] && a[2] == b[2] && a[3] == b[3] && a[4] == b[4] && a[5] == b[5] && a[6] == b[6] && a[7] == b[7] && a[8] == b[8] && a[9] == b[9] && a[10] == b[10] && a[11] == b[11] && a[12] == b[12] && a[13] == b[13] && a[14] == b[14] && a[15] == b[15]
}
function Ye(a, b, c) {
    var d = b[0], e = b[1];
    b = b[2];
    c[0] = d * a[0] + e * a[4] + b * a[8] + a[12];
    c[1] = d * a[1] + e * a[5] + b * a[9] + a[13];
    c[2] = d * a[2] + e * a[6] + b * a[10] + a[14]
}
function Ze(a, b, c) {
    var d = a[1] * b + a[5] * c + 0 * a[9] + a[13], e = a[2] * b + a[6] * c + 0 * a[10] + a[14], f = a[3] * b + a[7] * c + 0 * a[11] + a[15];
    a[12] = a[0] * b + a[4] * c + 0 * a[8] + a[12];
    a[13] = d;
    a[14] = e;
    a[15] = f
}
function $e(a, b, c) {
    Se(a, a[0] * b, a[1] * b, a[2] * b, a[3] * b, a[4] * c, a[5] * c, a[6] * c, a[7] * c, 1 * a[8], 1 * a[9], 1 * a[10], 1 * a[11], a[12], a[13], a[14], a[15])
}
function af(a, b) {
    var c = a[0], d = a[1], e = a[2], f = a[3], g = a[4], h = a[5], l = a[6], n = a[7], q = Math.cos(b), r = Math.sin(b);
    a[0] = c * q + g * r;
    a[1] = d * q + h * r;
    a[2] = e * q + l * r;
    a[3] = f * q + n * r;
    a[4] = c*-r + g * q;
    a[5] = d*-r + h * q;
    a[6] = e*-r + l * q;
    a[7] = f*-r + n * q
}
new Float64Array(3);
new Float64Array(3);
new Float64Array(4);
new Float64Array(4);
new Float64Array(4);
new Float64Array(16);
function bf(a, b) {
    this.e = a;
    this.f = b;
    this.a = [];
    this.b = [];
    this.c = {}
}
bf.prototype.clear = function() {
    this.a.length = 0;
    this.b.length = 0;
    var a = this.c, b;
    for (b in a)
        delete a[b]
};
function cf(a) {
    var b = a.a, c = a.b, d = b[0];
    1 == b.length ? (b.length = 0, c.length = 0) : (b[0] = b.pop(), c[0] = c.pop(), df(a, 0));
    b = a.f(d);
    delete a.c[b];
    return d
}
function ef(a, b) {
    var c = a.e(b);
    Infinity != c && (a.a.push(b), a.b.push(c), a.c[a.f(b)]=!0, ff(a, 0, a.a.length-1))
}
bf.prototype.ka = function() {
    return this.a.length
};
bf.prototype.sb = function() {
    return 0 === this.a.length
};
function df(a, b) {
    for (var c = a.a, d = a.b, e = c.length, f = c[b], g = d[b], h = b; b < e>>1;) {
        var l = 2 * b + 1, n = 2 * b + 2, l = n < e && d[n] < d[l] ? n: l;
        c[b] = c[l];
        d[b] = d[l];
        b = l
    }
    c[b] = f;
    d[b] = g;
    ff(a, h, b)
}
function ff(a, b, c) {
    var d = a.a;
    a = a.b;
    for (var e = d[c], f = a[c]; c > b;) {
        var g = c-1>>1;
        if (a[g] > f)
            d[c] = d[g], a[c] = a[g], c = g;
        else 
            break
    }
    d[c] = e;
    a[c] = f
}
function gf(a) {
    var b = a.e, c = a.a, d = a.b, e = 0, f = c.length, g, h, l;
    for (h = 0; h < f; ++h)
        g = c[h], l = b(g), Infinity == l ? delete a.c[a.f(g)] : (d[e] = l, c[e++] = g);
    c.length = e;
    d.length = e;
    for (b = (a.a.length>>1)-1; 0 <= b; b--)
        df(a, b)
};
function hf(a, b) {
    bf.call(this, function(b) {
        return a.apply(null, b)
    }, function(a) {
        return a[0].b()
    });
    this.i = b;
    this.d = 0
}
D(hf, bf);
hf.prototype.g = function() {
    --this.d;
    this.i()
};
function jf(a) {
    I.call(this);
    this.n = He(a.projection);
    this.j = s(a.extent) ? a.extent : s(a.projection) ? this.n.ca() : null;
    this.d = s(a.attributions) ? a.attributions : null;
    this.i = a.logo;
    this.f = s(a.state) ? a.state : 1;
    this.c = 0
}
D(jf, I);
function kf(a) {
    ++a.c;
    K(a, "change")
}
jf.prototype.ca = k("j");
jf.prototype.da = k("n");
function R(a) {
    L.call(this);
    a = vc(a);
    a.brightness = s(a.brightness) ? a.brightness : 0;
    a.contrast = s(a.contrast) ? a.contrast : 1;
    a.hue = s(a.hue) ? a.hue : 0;
    a.opacity = s(a.opacity) ? a.opacity : 1;
    a.saturation = s(a.saturation) ? a.saturation : 1;
    a.visible = s(a.visible) ? a.visible : !0;
    a.maxResolution = s(a.maxResolution) ? a.maxResolution : Infinity;
    a.minResolution = s(a.minResolution) ? a.minResolution : 0;
    this.$b(a);
    G(this, [hd("brightness"), hd("contrast"), hd("hue"), hd("opacity"), hd("saturation"), hd("maxResolution"), hd("minResolution")],
    this.Cc, !1, this);
    G(this, hd("visible"), this.Yd, !1, this)
}
D(R, L);
function lf(a) {
    K(a, "change")
}
R.prototype.e = function() {
    return this.get("brightness")
};
R.prototype.getBrightness = R.prototype.e;
R.prototype.g = function() {
    return this.get("contrast")
};
R.prototype.getContrast = R.prototype.g;
R.prototype.i = function() {
    return this.get("hue")
};
R.prototype.getHue = R.prototype.i;
function mf(a) {
    var b = a.e(), c = a.g(), d = a.i(), e = a.t(), f = a.q(), g = a.lb(), h = a.c(), l = a.j();
    a = a.n();
    return {
        brightness: s(b) ? pd(b, -1, 1): 0,
        contrast: s(c) ? Math.max(c, 0): 1,
        hue: s(d) ? d: 0,
        opacity: s(e) ? pd(e, 0, 1): 1,
        saturation: s(f) ? Math.max(f, 0): 1,
        dc: g,
        visible: s(h)?!!h: !0,
        maxResolution: s(l) ? l: Infinity,
        minResolution: s(a) ? Math.max(a,
        0): 0
    }
}
R.prototype.j = function() {
    return this.get("maxResolution")
};
R.prototype.getMaxResolution = R.prototype.j;
R.prototype.n = function() {
    return this.get("minResolution")
};
R.prototype.getMinResolution = R.prototype.n;
R.prototype.t = function() {
    return this.get("opacity")
};
R.prototype.getOpacity = R.prototype.t;
R.prototype.q = function() {
    return this.get("saturation")
};
R.prototype.getSaturation = R.prototype.q;
R.prototype.c = function() {
    return this.get("visible")
};
R.prototype.getVisible = R.prototype.c;
R.prototype.Cc = function() {
    this.c() && 1 == this.lb() && lf(this)
};
R.prototype.Yd = function() {
    1 == this.lb() && lf(this)
};
R.prototype.W = function(a) {
    this.o("brightness", a)
};
R.prototype.setBrightness = R.prototype.W;
R.prototype.ga = function(a) {
    this.o("contrast", a)
};
R.prototype.setContrast = R.prototype.ga;
R.prototype.ea = function(a) {
    this.o("hue", a)
};
R.prototype.setHue = R.prototype.ea;
R.prototype.Aa = function(a) {
    this.o("maxResolution", a)
};
R.prototype.setMaxResolution = R.prototype.Aa;
R.prototype.Na = function(a) {
    this.o("minResolution", a)
};
R.prototype.setMinResolution = R.prototype.Na;
R.prototype.O = function(a) {
    this.o("opacity", a)
};
R.prototype.setOpacity = R.prototype.O;
R.prototype.gb = function(a) {
    this.o("saturation", a)
};
R.prototype.setSaturation = R.prototype.gb;
R.prototype.xb = function(a) {
    this.o("visible", a)
};
R.prototype.setVisible = R.prototype.xb;
function nf(a) {
    var b = vc(a);
    delete b.source;
    R.call(this, b);
    this.A = a.source;
    G(this.A, "change", this.Bf, !1, this)
}
D(nf, R);
m = nf.prototype;
m.Rb = function(a) {
    a = s(a) ? a : [];
    a.push(this);
    return a
};
m.cd = function(a) {
    a = s(a) ? a : {
        layers: [],
        ma: []
    };
    a.layers.push(this);
    a.ma.push(mf(this));
    return a
};
m.ha = k("A");
m.lb = function() {
    return this.ha().f
};
m.Bf = function() {
    lf(this)
};
function of() {
    L.call(this);
    this.c = [0, 0]
}
D(of, L);
function pf(a, b) {
    a.c[1] += b
};
function qf(a) {
    return 1 - Math.pow(1 - a, 3)
};
function rf(a) {
    return 3 * a * a-2 * a * a * a
}
function sf(a) {
    return a
}
function tf(a) {
    return 0.5 > a ? rf(2 * a) : 1 - rf(2 * (a-0.5))
};
function uf(a) {
    var b = a.resolution, c = s(a.start) ? a.start: ta(), d = s(a.duration) ? a.duration: 1E3, e = s(a.easing) ? a.easing: tf;
    return function(a, g) {
        if (g.time < c)
            return g.pa=!0, g.K[0] += 1, !0;
        if (g.time < c + d) {
            var h = e((g.time - c) / d), l = b - g.F.resolution;
            g.pa=!0;
            g.F.resolution += h * l;
            g.K[0] += 1;
            return !0
        }
        return !1
    }
}
function vf(a) {
    var b = a.source, c = s(a.start) ? a.start: ta(), d = b[0], e = b[1], f = s(a.duration) ? a.duration: 1E3, g = s(a.easing) ? a.easing: rf;
    return function(a, b) {
        if (b.time < c)
            return b.pa=!0, b.K[0] += 1, !0;
        if (b.time < c + f) {
            var n = 1 - g((b.time - c) / f), q = d - b.F.center[0], r = e - b.F.center[1];
            b.pa=!0;
            b.F.center[0] += n * q;
            b.F.center[1] += n * r;
            b.K[0] += 1;
            return !0
        }
        return !1
    }
}
function wf(a) {
    var b = a.rotation, c = s(a.start) ? a.start: ta(), d = s(a.duration) ? a.duration: 1E3, e = s(a.easing) ? a.easing: rf;
    return function(a, g) {
        if (g.time < c)
            return g.pa=!0, g.K[0] += 1, !0;
        if (g.time < c + d) {
            var h = 1 - e((g.time - c) / d), l = b - g.F.rotation;
            g.pa=!0;
            g.F.rotation += h * l;
            g.K[0] += 1;
            return !0
        }
        return !1
    }
}
function xf(a) {
    var b = a.resolution, c = s(a.start) ? a.start: ta(), d = s(a.duration) ? a.duration: 1E3, e = s(a.easing) ? a.easing: rf;
    return function(a, g) {
        if (g.time < c)
            return g.pa=!0, g.K[0] += 1, !0;
        if (g.time < c + d) {
            var h = 1 - e((g.time - c) / d), l = b - g.F.resolution;
            g.pa=!0;
            g.F.resolution += h * l;
            g.K[0] += 1;
            return !0
        }
        return !1
    }
};
function yf(a, b, c) {
    this.f = a;
    this.d = b;
    this.e = c;
    this.a = [];
    this.b = this.c = 0
}
function zf(a) {
    var b = ta() - a.e, c = a.a.length-3;
    if (a.a[c + 2] < b)
        return !1;
    for (var d = c-3; 0 <= d && a.a[d + 2] > b;)
        d -= 3;
    if (0 <= d) {
        var b = a.a[c + 2] - a.a[d + 2], e = a.a[c] - a.a[d], c = a.a[c + 1] - a.a[d + 1];
        a.c = Math.atan2(c, e);
        a.b = Math.sqrt(e * e + c * c) / b;
        return a.b > a.d
    }
    return !1
}
function Nf(a, b) {
    var c = a.f, d = a.b, e = a.d, f = Math.log(a.d / a.b) / a.f;
    return vf({
        source: b,
        duration: f,
        easing: function(a) {
            return d * (Math.exp(c * a * f)-1) / (e - d)
        }
    })
};
function Of(a) {
    if ("function" == typeof a.Ha)
        return a.Ha();
    if (t(a))
        return a.split("");
    if (ja(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++)
            b.push(a[d]);
        return b
    }
    return qc(a)
}
function Pf(a, b, c) {
    if ("function" == typeof a.forEach)
        a.forEach(b, c);
    else if (ja(a) || t(a))
        Ia(a, b, c);
    else {
        var d;
        if ("function" == typeof a.Ga)
            d = a.Ga();
        else if ("function" != typeof a.Ha)
            if (ja(a) || t(a)) {
                d = [];
                for (var e = a.length, f = 0; f < e; f++)
                    d.push(f)
            } else 
                d = rc(a);
        else 
            d = void 0;
            for (var e = Of(a), f = e.length, g = 0; g < f; g++)
                b.call(c, e[g], d && d[g], a)
    }
};
function Qf(a, b) {
    this.b = {};
    this.a = [];
    var c = arguments.length;
    if (1 < c) {
        if (c%2)
            throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2)
            Rf(this, arguments[d], arguments[d + 1])
    } else if (a) {
        a instanceof Qf ? (c = a.Ga(), d = a.Ha()) : (c = rc(a), d = qc(a));
        for (var e = 0; e < c.length; e++)
            Rf(this, c[e], d[e])
    }
}
m = Qf.prototype;
m.v = 0;
m.zd = 0;
m.ka = k("v");
m.Ha = function() {
    Sf(this);
    for (var a = [], b = 0; b < this.a.length; b++)
        a.push(this.b[this.a[b]]);
    return a
};
m.Ga = function() {
    Sf(this);
    return this.a.concat()
};
m.sb = function() {
    return 0 == this.v
};
m.clear = function() {
    this.b = {};
    this.zd = this.v = this.a.length = 0
};
m.remove = function(a) {
    return Tf(this.b, a) ? (delete this.b[a], this.v--, this.zd++, this.a.length > 2 * this.v && Sf(this), !0) : !1
};
function Sf(a) {
    if (a.v != a.a.length) {
        for (var b = 0, c = 0; b < a.a.length;) {
            var d = a.a[b];
            Tf(a.b, d) && (a.a[c++] = d);
            b++
        }
        a.a.length = c
    }
    if (a.v != a.a.length) {
        for (var e = {}, c = b = 0; b < a.a.length;)
            d = a.a[b], Tf(e, d) || (a.a[c++] = d, e[d] = 1), b++;
        a.a.length = c
    }
}
m.get = function(a, b) {
    return Tf(this.b, a) ? this.b[a] : b
};
function Rf(a, b, c) {
    Tf(a.b, b) || (a.v++, a.a.push(b), a.zd++);
    a.b[b] = c
}
m.U = function() {
    return new Qf(this)
};
function Tf(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
var Uf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?\x3d[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Vf(a) {
    if (Wf) {
        Wf=!1;
        var b = p.location;
        if (b) {
            var c = b.href;
            if (c && (c = (c = Vf(c)[3] || null) && decodeURIComponent(c)) && c != b.hostname)
                throw Wf=!0, Error();
        }
    }
    return a.match(Uf)
}
var Wf = Db;
function Xf(a) {
    if (a[1]) {
        var b = a[0], c = b.indexOf("#");
        0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
        c = b.indexOf("?");
        0 > c ? a[1] = "?" : c == b.length-1 && (a[1] = void 0)
    }
    return a.join("")
}
function Yf(a, b, c) {
    if (ia(b))
        for (var d = 0; d < b.length; d++)
            Yf(a, String(b[d]), c);
    else 
        null != b && c.push("\x26", a, "" === b ? "" : "\x3d", encodeURIComponent(String(b)))
}
function Zf(a, b) {
    for (var c in b)
        Yf(c, b[c], a);
    return a
};
function $f(a, b) {
    var c;
    if (a instanceof $f)
        this.mb = s(b) ? b : a.mb, ag(this, a.Mb), c = a.Pc, bg(this), this.Pc = c, c = a.Qb, bg(this), this.Qb = c, cg(this, a.Lc), c = a.Kc, bg(this), this.Kc = c, dg(this, a.a.U()), c = a.vc, bg(this), this.vc = c;
    else if (a && (c = Vf(String(a)))) {
        this.mb=!!b;
        ag(this, c[1] || "", !0);
        var d = c[2] || "";
        bg(this);
        this.Pc = d ? decodeURIComponent(d) : "";
        d = c[3] || "";
        bg(this);
        this.Qb = d ? decodeURIComponent(d) : "";
        cg(this, c[4]);
        d = c[5] || "";
        bg(this);
        this.Kc = d ? decodeURIComponent(d) : "";
        dg(this, c[6] || "", !0);
        c = c[7] || "";
        bg(this);
        this.vc =
        c ? decodeURIComponent(c) : ""
    } else 
        this.mb=!!b, this.a = new eg(null, 0, this.mb)
}
m = $f.prototype;
m.Mb = "";
m.Pc = "";
m.Qb = "";
m.Lc = null;
m.Kc = "";
m.vc = "";
m.Nf=!1;
m.mb=!1;
m.toString = function() {
    var a = [], b = this.Mb;
    b && a.push(fg(b, gg), ":");
    if (b = this.Qb) {
        a.push("//");
        var c = this.Pc;
        c && a.push(fg(c, gg), "@");
        a.push(encodeURIComponent(String(b)));
        b = this.Lc;
        null != b && a.push(":", String(b))
    }
    if (b = this.Kc)
        this.Qb && "/" != b.charAt(0) && a.push("/"), a.push(fg(b, "/" == b.charAt(0) ? hg : ig));
    (b = this.a.toString()) && a.push("?", b);
    (b = this.vc) && a.push("#", fg(b, jg));
    return a.join("")
};
m.U = function() {
    return new $f(this)
};
function ag(a, b, c) {
    bg(a);
    a.Mb = c ? b ? decodeURIComponent(b) : "" : b;
    a.Mb && (a.Mb = a.Mb.replace(/:$/, ""))
}
function cg(a, b) {
    bg(a);
    if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b)
            throw Error("Bad port number " + b);
        a.Lc = b
    } else 
        a.Lc = null
}
function dg(a, b, c) {
    bg(a);
    b instanceof eg ? (a.a = b, kg(a.a, a.mb)) : (c || (b = fg(b, lg)), a.a = new eg(b, 0, a.mb))
}
function mg(a, b, c) {
    bg(a);
    ia(c) || (c = [String(c)]);
    ng(a.a, b, c)
}
function bg(a) {
    if (a.Nf)
        throw Error("Tried to modify a read-only Uri");
}
function fg(a, b) {
    return t(a) ? encodeURI(a).replace(b, og) : null
}
function og(a) {
    a = a.charCodeAt(0);
    return "%" + (a>>4 & 15).toString(16) + (a & 15).toString(16)
}
var gg = /[#\/\?@]/g, ig = /[\#\?:]/g, hg = /[\#\?]/g, lg = /[\#\?@]/g, jg = /#/g;
function eg(a, b, c) {
    this.a = a || null;
    this.b=!!c
}
function pg(a) {
    if (!a.V && (a.V = new Qf, a.v = 0, a.a))
        for (var b = a.a.split("\x26"), c = 0; c < b.length; c++) {
            var d = b[c].indexOf("\x3d"), e = null, f = null;
            0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
            e = decodeURIComponent(e.replace(/\+/g, " "));
            e = qg(a, e);
            a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
        }
}
m = eg.prototype;
m.V = null;
m.v = null;
m.ka = function() {
    pg(this);
    return this.v
};
m.add = function(a, b) {
    pg(this);
    this.a = null;
    a = qg(this, a);
    var c = this.V.get(a);
    c || Rf(this.V, a, c = []);
    c.push(b);
    this.v++;
    return this
};
m.remove = function(a) {
    pg(this);
    a = qg(this, a);
    return Tf(this.V.b, a) ? (this.a = null, this.v -= this.V.get(a).length, this.V.remove(a)) : !1
};
m.clear = function() {
    this.V = this.a = null;
    this.v = 0
};
m.sb = function() {
    pg(this);
    return 0 == this.v
};
function rg(a, b) {
    pg(a);
    b = qg(a, b);
    return Tf(a.V.b, b)
}
m.Ga = function() {
    pg(this);
    for (var a = this.V.Ha(), b = this.V.Ga(), c = [], d = 0; d < b.length; d++)
        for (var e = a[d], f = 0; f < e.length; f++)
            c.push(b[d]);
    return c
};
m.Ha = function(a) {
    pg(this);
    var b = [];
    if (a)
        rg(this, a) && (b = Ra(b, this.V.get(qg(this, a))));
    else {
        a = this.V.Ha();
        for (var c = 0; c < a.length; c++)
            b = Ra(b, a[c])
    }
    return b
};
m.get = function(a, b) {
    var c = a ? this.Ha(a): [];
    return 0 < c.length ? String(c[0]) : b
};
function ng(a, b, c) {
    a.remove(b);
    0 < c.length && (a.a = null, Rf(a.V, qg(a, b), Sa(c)), a.v += c.length)
}
m.toString = function() {
    if (this.a)
        return this.a;
    if (!this.V)
        return "";
    for (var a = [], b = this.V.Ga(), c = 0; c < b.length; c++)
        for (var d = b[c], e = encodeURIComponent(String(d)), d = this.Ha(d), f = 0; f < d.length; f++) {
            var g = e;
            "" !== d[f] && (g += "\x3d" + encodeURIComponent(String(d[f])));
            a.push(g)
        }
    return this.a = a.join("\x26")
};
m.U = function() {
    var a = new eg;
    a.a = this.a;
    this.V && (a.V = this.V.U(), a.v = this.v);
    return a
};
function qg(a, b) {
    var c = String(b);
    a.b && (c = c.toLowerCase());
    return c
}
function kg(a, b) {
    b&&!a.b && (pg(a), a.a = null, Pf(a.V, function(a, b) {
        var e = b.toLowerCase();
        b != e && (this.remove(b), ng(this, e, a))
    }, a));
    a.b = b
};
function sg(a, b, c) {
    gb.call(this);
    this.d = a;
    this.c = c;
    this.a = b || window;
    this.b = x(this.Xc, this)
}
D(sg, gb);
m = sg.prototype;
m.ia = null;
m.yd=!1;
m.start = function() {
    tg(this);
    this.yd=!1;
    var a = ug(this), b = vg(this);
    a&&!b && this.a.mozRequestAnimationFrame ? (this.ia = G(this.a, "MozBeforePaint", this.b), this.a.mozRequestAnimationFrame(null), this.yd=!0) : this.ia = a && b ? a.call(this.a, this.b) : this.a.setTimeout(Zc(this.b), 20)
};
function tg(a) {
    if (null != a.ia) {
        var b = ug(a), c = vg(a);
        b&&!c && a.a.mozRequestAnimationFrame ? H(a.ia) : b && c ? c.call(a.a, a.ia) : a.a.clearTimeout(a.ia)
    }
    a.ia = null
}
m.Xc = function() {
    this.yd && this.ia && H(this.ia);
    this.ia = null;
    this.d.call(this.c, ta())
};
m.B = function() {
    tg(this);
    sg.D.B.call(this)
};
function ug(a) {
    a = a.a;
    return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || null
}
function vg(a) {
    a = a.a;
    return a.cancelRequestAnimationFrame || a.webkitCancelRequestAnimationFrame || a.mozCancelRequestAnimationFrame || a.oCancelRequestAnimationFrame || a.msCancelRequestAnimationFrame || null
};
var wg;
function xg() {
    var a = p.MessageChannel;
    "undefined" === typeof a && ("undefined" !== typeof window && window.postMessage && window.addEventListener) && (a = function() {
        var a = document.createElement("iframe");
        a.style.display = "none";
        a.src = "";
        document.body.appendChild(a);
        var b = a.contentWindow, a = b.document;
        a.open();
        a.write("");
        a.close();
        var c = "callImmediate" + Math.random(), d = b.location.protocol + "//" + b.location.host, a = x(function(a) {
            if (a.origin == d || a.data == c)
                this.port1.onmessage()
        }, this);
        b.addEventListener("message", a, !1);
        this.port1 = {};
        this.port2 = {
            postMessage: function() {
                b.postMessage(c, d)
            }
        }
    });
    if ("undefined" !== typeof a) {
        var b = new a, c = {}, d = c;
        b.port1.onmessage = function() {
            c = c.next;
            var a = c.Ed;
            c.Ed = null;
            a()
        };
        return function(a) {
            d.next = {
                Ed: a
            };
            d = d.next;
            b.port2.postMessage(0)
        }
    }
    return "undefined" !== typeof document && "onreadystatechange"in document.createElement("script") ? function(a) {
        var b = document.createElement("script");
        b.onreadystatechange = function() {
            b.onreadystatechange = null;
            b.parentNode.removeChild(b);
            b = null;
            a();
            a = null
        };
        document.documentElement.appendChild(b)
    } :
    function(a) {
        p.setTimeout(a, 0)
    }
};
var yg, zg=!E || E && 9 <= Tb;
!Cb&&!E || E && E && 9 <= Tb || Cb && Rb("1.9.1");
E && Rb("9");
function Ag(a) {
    a = a.className;
    return t(a) && a.match(/\S+/g) || []
}
function Bg(a, b) {
    for (var c = Ag(a), d = Ua(arguments, 1), e = c.length + d.length, f = c, g = 0; g < d.length; g++)
        0 <= Ha(f, d[g]) || f.push(d[g]);
    a.className = c.join(" ");
    return c.length == e
}
function Cg(a, b, c) {
    for (var d = Ag(a), e=!1, f = 0; f < d.length; f++)
        d[f] == b && (Ta(d, f--, 1), e=!0);
    e && (d.push(c), a.className = d.join(" "))
};
function Dg(a, b) {
    this.x = s(a) ? a : 0;
    this.y = s(b) ? b : 0
}
m = Dg.prototype;
m.U = function() {
    return new Dg(this.x, this.y)
};
m.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
m.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
m.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
m.scale = function(a, b) {
    var c = la(b) ? b: a;
    this.x*=a;
    this.y*=c;
    return this
};
function Eg(a, b) {
    this.width = a;
    this.height = b
}
m = Eg.prototype;
m.U = function() {
    return new Eg(this.width, this.height)
};
m.sb = function() {
    return !(this.width * this.height)
};
m.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
m.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
m.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
m.scale = function(a, b) {
    var c = la(b) ? b: a;
    this.width*=a;
    this.height*=c;
    return this
};
function Fg(a) {
    return a ? new Gg(Hg(a)) : yg || (yg = new Gg)
}
function Ig(a, b) {
    nc(b, function(b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Jg ? a.setAttribute(Jg[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
}
var Jg = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
};
function Kg(a) {
    a = a.document.documentElement;
    return new Eg(a.clientWidth, a.clientHeight)
}
function Lg(a, b, c) {
    var d = arguments, e = document, f = d[0], g = d[1];
    if (!zg && g && (g.name || g.type)) {
        f = ["\x3c", f];
        g.name && f.push(' name\x3d"', ya(g.name), '"');
        if (g.type) {
            f.push(' type\x3d"', ya(g.type), '"');
            var h = {};
            Ac(h, g);
            delete h.type;
            g = h
        }
        f.push("\x3e");
        f = f.join("")
    }
    f = e.createElement(f);
    g && (t(g) ? f.className = g : ia(g) ? Bg.apply(null, [f].concat(g)) : Ig(f, g));
    2 < d.length && Mg(e, f, d, 2);
    return f
}
function Mg(a, b, c, d) {
    function e(c) {
        c && b.appendChild(t(c) ? a.createTextNode(c) : c)
    }
    for (; d < c.length; d++) {
        var f = c[d];
        !ja(f) || na(f) && 0 < f.nodeType ? e(f) : Ia(Ng(f) ? Sa(f) : f, e)
    }
}
function Og(a) {
    return document.createElement(a)
}
function Pg(a, b) {
    Mg(Hg(a), a, arguments, 1)
}
function Qg(a) {
    for (var b; b = a.firstChild;)
        a.removeChild(b)
}
function Rg(a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
}
function Sg(a, b) {
    a.insertBefore(b, a.childNodes[0] || null)
}
function Tg(a) {
    a && a.parentNode && a.parentNode.removeChild(a)
}
function Ug(a) {
    if (void 0 != a.firstElementChild)
        a = a.firstElementChild;
    else 
        for (a = a.firstChild; a && 1 != a.nodeType;)
            a = a.nextSibling;
    return a
}
function Hg(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function Ng(a) {
    if (a && "number" == typeof a.length) {
        if (na(a))
            return "function" == typeof a.item || "string" == typeof a.item;
        if (ma(a))
            return "function" == typeof a.item
    }
    return !1
}
function Gg(a) {
    this.a = a || p.document || document
}
Gg.prototype.createTextNode = function(a) {
    return this.a.createTextNode(String(a))
};
function Vg() {
    return !0
}
function Wg(a) {
    var b = a.a;
    a = Db ? b.body : b.documentElement;
    b = b.parentWindow || b.defaultView;
    return E && Rb("10") && b.pageYOffset != a.scrollTop ? new Dg(a.scrollLeft, a.scrollTop) : new Dg(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
}
Gg.prototype.appendChild = function(a, b) {
    a.appendChild(b)
};
Gg.prototype.contains = function(a, b) {
    if (a.contains && 1 == b.nodeType)
        return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)
        return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;)
        b = b.parentNode;
    return b == a
};
function Xg(a) {
    I.call(this);
    this.ic = a || window;
    this.Bc = G(this.ic, "resize", this.yf, !1, this);
    this.nb = Kg(this.ic || window)
}
D(Xg, I);
m = Xg.prototype;
m.Bc = null;
m.ic = null;
m.nb = null;
m.B = function() {
    Xg.D.B.call(this);
    this.Bc && (H(this.Bc), this.Bc = null);
    this.nb = this.ic = null
};
m.yf = function() {
    var a = Kg(this.ic || window);
    a == this.nb || a && this.nb && a.width == this.nb.width && a.height == this.nb.height || (this.nb = a, K(this, "resize"))
};
function Yg(a, b, c, d, e) {
    if (!(E || Db && Rb("525")))
        return !0;
    if (sb && e)
        return Zg(a);
    if (e&&!d ||!c && (17 == b || 18 == b || sb && 91 == b))
        return !1;
    if (Db && d && c)
        switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
            return !1
        }
    if (E && d && b == a)
        return !1;
    switch (a) {
    case 13:
        return !(E && E && 9 <= Tb);
    case 27:
        return !Db
    }
    return Zg(a)
}
function Zg(a) {
    if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || Db && 0 == a)
        return !0;
    switch (a) {
    case 32:
    case 63:
    case 107:
    case 109:
    case 110:
    case 111:
    case 186:
    case 59:
    case 189:
    case 187:
    case 61:
    case 188:
    case 190:
    case 191:
    case 192:
    case 222:
    case 219:
    case 220:
    case 221:
        return !0;
    default:
        return !1
    }
}
function $g(a) {
    switch (a) {
    case 61:
        return 187;
    case 59:
        return 186;
    case 224:
        return 91;
    case 0:
        return 224;
    default:
        return a
    }
};
function ah(a, b) {
    I.call(this);
    a && ch(this, a, b)
}
D(ah, I);
m = ah.prototype;
m.Ub = null;
m.Fc = null;
m.jd = null;
m.Gc = null;
m.la =- 1;
m.ab =- 1;
m.Tc=!1;
var dh = {
    3: 13,
    12: 144,
    63232: 38,
    63233: 40,
    63234: 37,
    63235: 39,
    63236: 112,
    63237: 113,
    63238: 114,
    63239: 115,
    63240: 116,
    63241: 117,
    63242: 118,
    63243: 119,
    63244: 120,
    63245: 121,
    63246: 122,
    63247: 123,
    63248: 44,
    63272: 46,
    63273: 36,
    63275: 35,
    63276: 33,
    63277: 34,
    63289: 144,
    63302: 45
}, eh = {
    Up: 38,
    Down: 40,
    Left: 37,
    Right: 39,
    Enter: 13,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    "U+007F": 46,
    Home: 36,
    End: 35,
    PageUp: 33,
    PageDown: 34,
    Insert: 45
}, Gh = E || Db && Rb("525"), Hh = sb && Cb;
ah.prototype.a = function(a) {
    Db && (17 == this.la&&!a.Tb || 18 == this.la&&!a.qa || sb && 91 == this.la&&!a.fd) && (this.ab = this.la =- 1);
    -1 == this.la && (a.Tb && 17 != a.Pa ? this.la = 17 : a.qa && 18 != a.Pa ? this.la = 18 : a.fd && 91 != a.Pa && (this.la = 91));
    Gh&&!Yg(a.Pa, this.la, a.Qa, a.Tb, a.qa) ? this.handleEvent(a) : (this.ab = Cb ? $g(a.Pa) : a.Pa, Hh && (this.Tc = a.qa))
};
ah.prototype.b = function(a) {
    this.ab = this.la =- 1;
    this.Tc = a.qa
};
ah.prototype.handleEvent = function(a) {
    var b = a.$, c, d, e = b.altKey;
    E && "keypress" == a.type ? (c = this.ab, d = 13 != c && 27 != c ? b.keyCode : 0) : Db && "keypress" == a.type ? (c = this.ab, d = 0 <= b.charCode && 63232 > b.charCode && Zg(c) ? b.charCode : 0) : Bb ? (c = this.ab, d = Zg(c) ? b.keyCode : 0) : (c = b.keyCode || this.ab, d = b.charCode || 0, Hh && (e = this.Tc), sb && (63 == d && 224 == c) && (c = 191));
    var f = c, g = b.keyIdentifier;
    c ? 63232 <= c && c in dh ? f = dh[c] : 25 == c && a.Qa && (f = 9) : g && g in eh && (f = eh[g]);
    a = f == this.la;
    this.la = f;
    b = new Ih(f, d, a, b);
    b.qa = e;
    K(this, b)
};
function ch(a, b, c) {
    a.Gc && Jh(a);
    a.Ub = b;
    a.Fc = G(a.Ub, "keypress", a, c);
    a.jd = G(a.Ub, "keydown", a.a, c, a);
    a.Gc = G(a.Ub, "keyup", a.b, c, a)
}
function Jh(a) {
    a.Fc && (H(a.Fc), H(a.jd), H(a.Gc), a.Fc = null, a.jd = null, a.Gc = null);
    a.Ub = null;
    a.la =- 1;
    a.ab =- 1
}
ah.prototype.B = function() {
    ah.D.B.call(this);
    Jh(this)
};
function Ih(a, b, c, d) {
    d && Zb(this, d, void 0);
    this.type = "key";
    this.Pa = a;
    this.ed = b;
    this.a = c
}
D(Ih, Yb);
function Kh(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
}
m = Kh.prototype;
m.U = function() {
    return new Kh(this.top, this.right, this.bottom, this.left)
};
m.contains = function(a) {
    return this && a ? a instanceof Kh ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
m.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
m.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
m.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
m.scale = function(a, b) {
    var c = la(b) ? b: a;
    this.left*=a;
    this.right*=a;
    this.top*=c;
    this.bottom*=c;
    return this
};
function Lh(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
}
m = Lh.prototype;
m.U = function() {
    return new Lh(this.left, this.top, this.width, this.height)
};
m.contains = function(a) {
    return a instanceof Lh ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
m.ceil = function() {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
m.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
m.round = function() {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
m.scale = function(a, b) {
    var c = la(b) ? b: a;
    this.left*=a;
    this.width*=a;
    this.top*=c;
    this.height*=c;
    return this
};
function Mh(a, b) {
    var c = Hg(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
}
function Nh(a, b) {
    return Mh(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}
function Oh(a, b, c) {
    var d, e = Cb && (sb || Hb) && Rb("1.9");
    b instanceof Dg ? (d = b.x, b = b.y) : (d = b, b = c);
    a.style.left = Ph(d, e);
    a.style.top = Ph(b, e)
}
function Qh(a) {
    var b;
    try {
        b = a.getBoundingClientRect()
    } catch (c) {
        return {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
    }
    E && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}
function Rh(a) {
    if (E&&!(E && 8 <= Tb))
        return a.offsetParent;
    var b = Hg(a), c = Nh(a, "position"), d = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (c = Nh(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)
            )return a;
    return null
}
function Sh(a) {
    var b, c = Hg(a), d = Nh(a, "position"), e = Cb && c.getBoxObjectFor&&!a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), f = new Dg(0, 0), g;
    b = c ? Hg(c) : document;
    g=!E || E && 9 <= Tb || Vg(Fg(b)) ? b.documentElement : b.body;
    if (a == g)
        return f;
    if (a.getBoundingClientRect)
        b = Qh(a), a = Wg(Fg(c)), f.x = b.left + a.x, f.y = b.top + a.y;
    else if (c.getBoxObjectFor&&!e)
        b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(g), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY;
    else {
        b = a;
        do {
            f.x += b.offsetLeft;
            f.y +=
            b.offsetTop;
            b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop || 0);
            if (Db && "fixed" == Nh(b, "position")) {
                f.x += c.body.scrollLeft;
                f.y += c.body.scrollTop;
                break
            }
            b = b.offsetParent
        }
        while (b && b != a);
        if (Bb || Db && "absolute" == d)
            f.y -= c.body.offsetTop;
        for (b = a; (b = Rh(b)) && b != c.body && b != g;)
            f.x -= b.scrollLeft, Bb && "TR" == b.tagName || (f.y -= b.scrollTop)
    }
    return f
}
function Th(a, b) {
    var c = Uh(a), d = Uh(b);
    return new Dg(c.x - d.x, c.y - d.y)
}
function Uh(a) {
    if (1 == a.nodeType) {
        var b;
        if (a.getBoundingClientRect)
            b = Qh(a), b = new Dg(b.left, b.top);
        else {
            b = Wg(Fg(a));
            var c = Sh(a);
            b = new Dg(c.x - b.x, c.y - b.y)
        }
        if (Cb&&!Rb(12)) {
            var d;
            E ? d = "-ms-transform" : Db ? d = "-webkit-transform" : Bb ? d = "-o-transform" : Cb && (d = "-moz-transform");
            var e;
            d && (e = Nh(a, d));
            e || (e = Nh(a, "transform"));
            a = e ? (a = e.match(Vh)) ? new Dg(parseFloat(a[1]), parseFloat(a[2])) : new Dg(0, 0) : new Dg(0, 0);
            a = new Dg(b.x + a.x, b.y + a.y)
        } else 
            a = b;
        return a
    }
    d = ma(a.Pe);
    e = a;
    a.targetTouches ? e = a.targetTouches[0] : d && a.$.targetTouches &&
    (e = a.$.targetTouches[0]);
    return new Dg(e.clientX, e.clientY)
}
function Ph(a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a
}
function Wh(a) {
    var b = Xh;
    if ("none" != Nh(a, "display"))
        return b(a);
    var c = a.style, d = c.display, e = c.visibility, f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a
}
function Xh(a) {
    var b = a.offsetWidth, c = a.offsetHeight, d = Db&&!b&&!c;
    return s(b)&&!d ||!a.getBoundingClientRect ? new Eg(b, c) : (a = Qh(a), new Eg(a.right - a.left, a.bottom - a.top))
}
function Yh(a, b) {
    var c = a.style;
    "opacity"in c ? c.opacity = b : "MozOpacity"in c ? c.MozOpacity = b : "filter"in c && (c.filter = "" === b ? "" : "alpha(opacity\x3d" + 100 * b + ")")
}
function Zh(a, b) {
    a.style.display = b ? "" : "none"
}
function $h(a) {
    return "rtl" == Nh(a, "direction")
}
function ai(a, b) {
    var c = Vg(Fg(Hg(a)));
    if (!E || c && Rb("8")) {
        var d = a.style;
        Cb ? d.MozBoxSizing = "border-box" : Db ? d.WebkitBoxSizing = "border-box" : d.boxSizing = "border-box";
        d.width = Math.max(b.width, 0) + "px";
        d.height = Math.max(b.height, 0) + "px"
    } else if (d = a.style, c) {
        var c = bi(a, "padding"), e = ci(a);
        d.pixelWidth = b.width - e.left - c.left - c.right - e.right;
        d.pixelHeight = b.height - e.top - c.top - c.bottom - e.bottom
    } else 
        d.pixelWidth = b.width, d.pixelHeight = b.height
}
function di(a, b, c, d) {
    if (/^\d+px?$/.test(b))
        return parseInt(b, 10);
    var e = a.style[c], f = a.runtimeStyle[c];
    a.runtimeStyle[c] = a.currentStyle[c];
    a.style[c] = b;
    b = a.style[d];
    a.style[c] = e;
    a.runtimeStyle[c] = f;
    return b
}
function ei(a, b) {
    var c = a.currentStyle ? a.currentStyle[b]: null;
    return c ? di(a, c, "left", "pixelLeft") : 0
}
function bi(a, b) {
    if (E) {
        var c = ei(a, b + "Left"), d = ei(a, b + "Right"), e = ei(a, b + "Top"), f = ei(a, b + "Bottom");
        return new Kh(e, d, f, c)
    }
    c = Mh(a, b + "Left");
    d = Mh(a, b + "Right");
    e = Mh(a, b + "Top");
    f = Mh(a, b + "Bottom");
    return new Kh(parseFloat(e), parseFloat(d), parseFloat(f), parseFloat(c))
}
var fi = {
    thin: 2,
    medium: 4,
    thick: 6
};
function gi(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))
        return 0;
    var c = a.currentStyle ? a.currentStyle[b + "Width"]: null;
    return c in fi ? fi[c] : di(a, c, "left", "pixelLeft")
}
function ci(a) {
    if (E) {
        var b = gi(a, "borderLeft"), c = gi(a, "borderRight"), d = gi(a, "borderTop");
        a = gi(a, "borderBottom");
        return new Kh(d, c, a, b)
    }
    b = Mh(a, "borderLeftWidth");
    c = Mh(a, "borderRightWidth");
    d = Mh(a, "borderTopWidth");
    a = Mh(a, "borderBottomWidth");
    return new Kh(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
}
var Vh = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
function hi(a, b) {
    I.call(this);
    this.a = a;
    var c = na(this.a) && 1 == this.a.nodeType ? this.a: this.a ? this.a.body: null;
    this.f=!!c && $h(c);
    this.b = G(this.a, Cb ? "DOMMouseScroll" : "mousewheel", this, b)
}
D(hi, I);
hi.prototype.handleEvent = function(a) {
    var b = 0, c = 0, d = 0;
    a = a.$;
    if ("mousewheel" == a.type) {
        c = 1;
        if (E || Db && (tb || Rb("532.0")))
            c = 40;
        d = ii( - a.wheelDelta, c);
        s(a.wheelDeltaX) ? (b = ii( - a.wheelDeltaX, c), c = ii( - a.wheelDeltaY, c)) : c = d
    } else 
        d = a.detail, 100 < d ? d = 3 : -100 > d && (d =- 3), s(a.axis) && a.axis === a.HORIZONTAL_AXIS ? b = d : c = d;
    la(this.c) && (b = pd(b, - this.c, this.c));
    la(this.d) && (c = pd(c, - this.d, this.d));
    this.f && (b =- b);
    b = new ji(d, a, b, c);
    K(this, b)
};
function ii(a, b) {
    return Db && (sb || wb) && 0 != a%b ? a : a / b
}
hi.prototype.B = function() {
    hi.D.B.call(this);
    H(this.b);
    this.b = null
};
function ji(a, b, c, d) {
    b && Zb(this, b, void 0);
    this.type = "mousewheel";
    this.c = a;
    this.b = c;
    this.a = d
}
D(ji, Yb);
var ki = p.document && "ontouchstart"in p.document.documentElement||!!p.navigator.msPointerEnabled;
function li(a, b, c) {
    lb.call(this, a);
    this.map = b;
    this.c = s(c) ? c : null
}
D(li, lb);
function mi(a, b, c, d) {
    li.call(this, a, b, d);
    this.a = c;
    this.g = this.e = null
}
D(mi, li);
mi.prototype.b = function() {
    null === this.e && (this.e = this.map.Nd(this.a.$));
    return this.e
};
mi.prototype.f = function() {
    null === this.g && (this.g = this.map.xc(this.a.$));
    return this.g
};
mi.prototype.P = function() {
    mi.D.P.call(this);
    this.a.P()
};
mi.prototype.ob = function() {
    mi.D.ob.call(this);
    this.a.ob()
};
function ni(a) {
    I.call(this);
    this.a = a;
    this.g = 0;
    this.c=!1;
    this.Da = this.e = this.f = this.d = this.b = null;
    a = this.a.b;
    this.i = [G(a, "mousemove", this.oe, !1, this), G(a, "click", this.oe, !1, this)];
    this.d = G(a, "mousedown", this.qf, !1, this);
    this.f = G(a, "MSPointerDown", this.sf, !1, this);
    this.e = G(a, "touchstart", this.Gf, !1, this)
}
D(ni, I);
function oi(a, b) {
    0 !== a.g ? (p.clearTimeout(a.g), a.g = 0, K(a, new mi(pi, a.a, b))) : a.g = p.setTimeout(x(function() {
        this.g = 0;
        K(this, new mi(qi, this.a, b))
    }, a), 250)
}
m = ni.prototype;
m.rf = function(a) {
    this.Da && (Ia(this.b, H), this.b = null, this.c ? K(this, new mi(ri, this.a, a)) : ac(a) && oi(this, a))
};
m.qf = function(a) {
    null !== this.f && (H(this.f), this.f = null, H(this.e), this.e = null);
    K(this, new mi(si, this.a, a));
    this.Da = a;
    this.c=!1;
    this.b = [G(p.document, "mousemove", this.Tf, !1, this), G(p.document, "mouseup", this.rf, !1, this)];
    a.P()
};
m.Tf = function(a) {
    var b;
    this.c || (this.c=!0, b = new mi(ti, this.a, this.Da), K(this, b));
    b = new mi(ui, this.a, a);
    K(this, b)
};
m.sf = function(a) {
    null !== this.d && (H(this.d), this.d = null, H(this.e), this.e = null);
    K(this, new mi(vi, this.a, a));
    this.Da = a;
    this.c=!1;
    this.b = [G(p.document, "MSPointerMove", this.tf, !1, this), G(p.document, "MSPointerUp", this.uf, !1, this)];
    a.P()
};
m.tf = function(a) {
    if (a.clientX != this.Da.clientX || a.clientY != this.Da.clientY)
        this.c=!0, K(this, new mi(wi, this.a, a))
};
m.uf = function(a) {
    K(this, new mi(xi, this.a, a));
    Ia(this.b, H);
    !this.c && ac(a) && oi(this, this.Da)
};
m.Gf = function(a) {
    null !== this.d && (H(this.d), this.d = null, H(this.f), this.f = null);
    K(this, new mi(vi, this.a, a));
    this.Da = a;
    this.c=!1;
    this.b = [G(p.document, "touchmove", this.Ff, !1, this), G(p.document, "touchend", this.Ef, !1, this)];
    a.P()
};
m.Ff = function(a) {
    this.c=!0;
    K(this, new mi(wi, this.a, a))
};
m.Ef = function(a) {
    K(this, new mi(xi, this.a, a));
    Ia(this.b, H);
    this.c || oi(this, this.Da)
};
m.B = function() {
    null !== this.i && (Ia(this.i, H), this.i = null);
    null !== this.d && (H(this.d), this.d = null);
    null !== this.f && (H(this.f), this.f = null);
    null !== this.e && (H(this.e), this.e = null);
    null !== this.b && (Ia(this.b, H), this.b = null);
    ni.D.B.call(this)
};
m.oe = function(a) {
    K(this, new mi(a.type, this.a, a))
};
var pi = "dblclick", si = "down", ti = "dragstart", ui = "drag", ri = "dragend", qi = "singleclick", vi = "touchstart", wi = "touchmove", xi = "touchend", yi = {
    Hg: "click",
    Ig: pi,
    fh: "mousemove",
    Lg: si,
    Og: ti,
    Mg: ui,
    Ng: ri,
    qh: qi,
    zh: vi,
    yh: wi,
    xh: xi
};
function zi(a) {
    return function(b) {
        if (s(b))
            return [pd(b[0], a[0], a[2]), pd(b[1], a[1], a[3])]
    }
}
function Ai(a) {
    return a
};
function Bi(a, b, c) {
    var d = a.length;
    if (a[0] <= b)
        return 0;
    if (!(b <= a[d-1]))
        if (0 < c)
            for (c = 1; c < d; ++c) {
                if (a[c] < b)
                    return c-1
            } else if (0 > c)
                for (c = 1; c < d; ++c) {
                    if (a[c] <= b)
                        return c
                } else 
                    for (c = 1; c < d; ++c) {
                        if (a[c] == b)
                            return c;
                            if (a[c] < b)
                                return a[c-1] - b < b - a[c] ? c-1 : c
                    }
    return d-1
};
function Ci(a) {
    return function(b, c, d) {
        if (s(b))
            return b = Bi(a, b, d), b = pd(b + c, 0, a.length-1), a[b]
    }
}
function Di(a, b, c) {
    return function(d, e, f) {
        if (s(d))
            return f = 0 < f ? 0 : 0 > f ? 1 : 0.5, d = Math.floor(Math.log(b / d) / Math.log(a) + f), e = Math.max(d + e, 0), s(c) && (e = Math.min(e, c)), b / Math.pow(a, e)
    }
};
function Ei() {
    return function(a, b) {
        if (s(a))
            return 0.1 >= Math.abs(a + b) ? 0 : a + b
    }
};
function Fi(a, b) {
    var c = Ei();
    this.center = a;
    this.resolution = b;
    this.rotation = c
};
function S(a) {
    of.call(this);
    a = a || {};
    var b = {};
    b.center = s(a.center) ? a.center : null;
    b.projection = Ge(a.projection);
    var c, d, e;
    if (s(a.resolutions))
        c = a.resolutions, d = c[0], e = c[c.length-1], c = Ci(c);
    else {
        d = a.maxResolution;
        s(d) || (d = a.projection, e = Ge(d).ca(), d = (null === e ? 360 * de.degrees / de[d.Ob] : Math.max(e[2] - e[0], e[3] - e[1])) / 256);
        c = a.maxZoom;
        s(c) || (c = 28);
        var f = a.zoomFactor;
        s(f) || (f = 2);
        e = d / Math.pow(f, c);
        c = Di(f, d, c)
    }
    this.b = d;
    this.g = e;
    this.hb = new Fi(s(a.extent) ? zi(a.extent) : Ai, c);
    s(a.resolution) ? b.resolution = a.resolution :
    s(a.zoom) && (b.resolution = this.Ca(this.b, a.zoom));
    b.rotation = s(a.rotation) ? a.rotation : 0;
    this.$b(b)
}
D(S, of);
function Gi(a, b, c) {
    var d, e = a.a();
    s(e) && (d = [e[0] - c[0], e[1] - c[1]], zd(d, b - a.d()), ud(d, c));
    return d
}
function Hi(a, b, c) {
    var d, e = a.a();
    a = a.G();
    s(e) && s(a) && (d = [c[0] - b * (c[0] - e[0]) / a, c[1] - b * (c[1] - e[1]) / a]);
    return d
}
S.prototype.Ca = function(a, b, c) {
    return this.hb.resolution(a, b || 0, c || 0)
};
S.prototype.lc = function(a, b) {
    return this.hb.rotation(a, b || 0)
};
S.prototype.a = function() {
    return this.get("center")
};
S.prototype.getCenter = S.prototype.a;
S.prototype.Cd = function(a) {
    var b = this.a(), c = this.G();
    return [b[0] - c * a[0] / 2, b[1] - c * a[1] / 2, b[0] + c * a[0] / 2, b[1] + c * a[1] / 2]
};
S.prototype.da = function() {
    return this.get("projection")
};
S.prototype.getProjection = S.prototype.da;
S.prototype.G = function() {
    return this.get("resolution")
};
S.prototype.getResolution = S.prototype.G;
function Ii(a) {
    var b = a.b, c = Math.log(b / a.g) / Math.log(2);
    return function(a) {
        return b / Math.pow(2, a * c)
    }
}
S.prototype.d = function() {
    return this.get("rotation")
};
S.prototype.getRotation = S.prototype.d;
function Ji(a) {
    var b = a.b, c = Math.log(b / a.g) / Math.log(2);
    return function(a) {
        return Math.log(b / a) / Math.log(2) / c
    }
}
m = S.prototype;
m.N = function() {
    return this
};
function Ki(a) {
    var b = a.a(), c = a.da(), d = a.G();
    a = a.d();
    return {
        center: b.slice(),
        projection: s(c) ? c: null,
        resolution: d,
        rotation: s(a) ? a: 0
    }
}
m.$e = function() {
    var a, b = this.G();
    if (s(b)) {
        var c, d = 0;
        do {
            c = this.Ca(this.b, d);
            if (c == b) {
                a = d;
                break
            }
            ++d
        }
        while (c > this.g)
        }
    return a
};
m.ad = function(a, b) {
    this.za(Nd(a));
    var c = Math.max((a[2] - a[0]) / b[0], (a[3] - a[1]) / b[1]), c = this.Ca(c, 0, 0);
    this.fb(c)
};
m.Hb = function() {
    return null != this.a() && s(this.G())
};
m.za = function(a) {
    this.o("center", a)
};
S.prototype.setCenter = S.prototype.za;
S.prototype.i = function(a) {
    this.o("projection", a)
};
S.prototype.setProjection = S.prototype.i;
S.prototype.fb = function(a) {
    this.o("resolution", a)
};
S.prototype.setResolution = S.prototype.fb;
S.prototype.e = function(a) {
    this.o("rotation", a)
};
S.prototype.setRotation = S.prototype.e;
S.prototype.j = function(a) {
    a = this.Ca(this.b, a, 0);
    this.fb(a)
};
function Li(a) {
    L.call(this);
    this.element = s(a.element) ? a.element : null;
    this.q = a.target;
    this.a = null;
    this.e = []
}
D(Li, L);
Li.prototype.B = function() {
    Tg(this.element);
    Li.D.B.call(this)
};
Li.prototype.W = k("a");
Li.prototype.d = ea;
Li.prototype.setMap = function(a) {
    null === this.a || Tg(this.element);
    0 != this.e.length && (Ia(this.e, H), this.e.length = 0);
    this.a = a;
    null !== this.a && ((s(this.q) ? this.q : a.H).appendChild(this.element), this.d !== ea && this.e.push(G(a, "postrender", this.d, !1, this)))
};
function Mi(a) {
    a = s(a) ? a : {};
    this.i = Og("UL");
    var b = Lg("DIV", {
        "class": (s(a.className) ? a.className : "ol-attribution") + " ol-unselectable"
    }, this.i);
    Li.call(this, {
        element: b,
        target: a.target
    });
    this.g=!0;
    this.c = {};
    this.b = {}
}
D(Mi, Li);
Mi.prototype.d = function(a) {
    a = a.c;
    if (null === a)
        this.g && (Zh(this.element, !1), this.g=!1);
    else {
        var b, c, d, e, f, g, h, l, n, q = a.Hc, r = vc(a.attributions), y = {};
        b = 0;
        for (c = q.length; b < c; b++)
            if (d = q[b].ha(), n = u(d).toString()
                , l = d.d, null !== l)for (d = 0, e = l.length; d < e; d++)
            if (g = l[d], h = u(g).toString()
                , !(h in r)) {
            f = a.hc[n];
            var v;
            if (v = s(f))
                a: if (null === g.a)
                v=!0;
            else {
                var B = v = void 0, C = void 0, w = void 0;
                for (w in f)
                    if (w in g.a)
                        for (C = f[w], v = 0, B = g.a[w].length; v < B; ++v)
                            if (g.a[w][v].a <= C.d && g.a[w][v].d >= C.a && g.a[w][v].c <= C.b && g.a[w][v].b >=
                            C.c) {
                                v=!0;
                                break a
                            }
                            v=!1
            }
            v ? (h in y && delete y[h], r[h] = g) : y[h] = g
        }
        b = [r, y];
        a = b[0];
        b = b[1];
        for (var z in this.c)
            z in a ? (this.b[z] || (Zh(this.c[z], !0), this.b[z]=!0), delete a[z]) : z in b ? (this.b[z] && (Zh(this.c[z], !1), delete this.b[z]), delete b[z]) : (Tg(this.c[z]), delete this.c[z], delete this.b[z]);
        for (z in a)
            c = Og("LI"), c.innerHTML = a[z].b, this.i.appendChild(c), this.c[z] = c, this.b[z]=!0;
        for (z in b)
            c = Og("LI"), c.innerHTML = b[z].b, Zh(c, !1), this.i.appendChild(c), this.c[z] = c;
        z=!uc(this.b);
        this.g != z && (Zh(this.element, z),
        this.g = z)
    }
};
function Ni(a) {
    a = s(a) ? a : {};
    this.c = Og("UL");
    var b = Lg("DIV", {
        "class": (s(a.className) ? a.className : "ol-logo") + " ol-unselectable"
    }, this.c);
    Li.call(this, {
        element: b,
        target: a.target
    });
    this.b=!0;
    this.g = {}
}
D(Ni, Li);
Ni.prototype.d = function(a) {
    a = a.c;
    if (null === a)
        this.b && (Zh(this.element, !1), this.b=!1);
    else {
        var b;
        a = a.ae;
        var c = this.g;
        for (b in c)
            b in a || (Tg(c[b]), delete c[b]);
        var d, e;
        for (b in a)
            b in c || (d = new Image, d.src = b, e = Og("LI"), e.appendChild(d), this.c.appendChild(e), c[b] = e);
        b=!uc(a);
        this.b != b && (Zh(this.element, b), this.b = b)
    }
};
function Oi(a) {
    a = s(a) ? a : {};
    var b = s(a.className) ? a.className: "ol-zoom", c = s(a.delta) ? a.delta: 1, d = Lg("A", {
        href: "#zoomIn",
        "class": b + "-in"
    });
    G(d, ["touchend", "click"], sa(Oi.prototype.c, c), !1, this);
    var e = Lg("A", {
        href: "#zoomOut",
        "class": b + "-out"
    });
    G(e, ["touchend", "click"], sa(Oi.prototype.c, - c), !1, this);
    b = Lg("DIV", b + " ol-unselectable", d, e);
    Li.call(this, {
        element: b,
        target: a.target
    });
    this.b = s(a.duration) ? a.duration : 250
}
D(Oi, Li);
Oi.prototype.c = function(a, b) {
    b.P();
    var c = this.a, d = c.a().N(), e = d.G();
    s(e) && (0 < this.b && c.Ba(xf({
        resolution: e,
        duration: this.b,
        easing: qf
    })), c = d.Ca(e, a), d.fb(c))
};
function Pi(a) {
    a = s(a) ? a : {};
    var b = new M;
    (s(a.attribution) ? a.attribution : 1) && b.push(new Mi(s(a.attributionOptions) ? a.attributionOptions : void 0));
    (s(a.logo) ? a.logo : 1) && b.push(new Ni(s(a.logoOptions) ? a.logoOptions : void 0));
    (s(a.zoom) ? a.zoom : 1) && b.push(new Oi(s(a.zoomOptions) ? a.zoomOptions : void 0));
    return b
};
function Qi() {
    I.call(this);
    this.r = null
}
D(Qi, I);
Qi.prototype.ub = function(a) {
    this.r = a
};
function Ri(a, b, c, d, e) {
    if (null != c) {
        var f = b.d(), g = b.a();
        s(f) && (s(g) && s(e) && 0 < e) && (a.Ba(wf({
            rotation: f,
            duration: e,
            easing: qf
        })), s(d) && a.Ba(vf({
            source: g,
            duration: e,
            easing: qf
        })));
        if (null != d) {
            var h = Gi(b, c, d);
            Si(a, function() {
                b.za(h);
                b.e(c)
            })
        } else 
            b.e(c)
    }
}
function Ti(a, b, c, d, e) {
    var f = b.G();
    c = b.Ca(f, c, 0);
    Ui(a, b, c, d, e)
}
function Ui(a, b, c, d, e) {
    if (null != c) {
        var f = b.G(), g = b.a();
        s(f) && (s(g) && s(e) && 0 < e) && (a.Ba(xf({
            resolution: f,
            duration: e,
            easing: qf
        })), s(d) && a.Ba(vf({
            source: g,
            duration: e,
            easing: qf
        })));
        if (null != d) {
            var h = Hi(b, c, d);
            Si(a, function() {
                b.za(h);
                b.fb(c)
            })
        } else 
            b.fb(c)
    }
};
function Vi(a) {
    a = s(a) ? a : {};
    this.a = s(a.delta) ? a.delta : 1;
    Qi.call(this);
    this.b = s(a.duration) ? a.duration : 250
}
D(Vi, Qi);
Vi.prototype.Ka = function(a) {
    var b=!1, c = a.a;
    if (a.type == pi) {
        var b = a.map, d = a.b(), c = c.Qa?-this.a : this.a, e = b.a().N();
        Ti(b, e, c, d, this.b);
        a.P();
        b=!0
    }
    return !b
};
function Wi(a) {
    a = a.a;
    return a.qa&&!a.Jb && a.Qa
}
function Xi(a) {
    return a.type == qi
}
function Yi(a) {
    a = a.a;
    return !a.qa&&!a.Jb&&!a.Qa
}
function Zi(a) {
    a = a.a;
    return !a.qa&&!a.Jb && a.Qa
}
function $i(a) {
    a = a.a.target.tagName;
    return "INPUT" !== a && "SELECT" !== a && "TEXTAREA" !== a
};
function aj() {
    Qi.call(this);
    this.i=!1;
    this.f = this.d = this.q = this.n = 0;
    this.ec = this.A = null
}
D(aj, Qi);
m = aj.prototype;
m.Wb = ea;
m.Xb = ea;
m.Fb = Uc;
m.Ud = ea;
m.Ka = function(a) {
    var b = a.map;
    if (!b.Hb())
        return !0;
    var c=!1, d = b.a(), b = a.a;
    a.type == si && this.Ud(a);
    this.i ? a.type == ui ? (this.d = b.clientX - this.n, this.f = b.clientY - this.q, this.Wb(a)) : a.type == ri && (this.d = b.clientX - this.n, this.f = b.clientY - this.q, this.i=!1, this.Xb(a)) : a.type == ti && (d = Ki(d.N()), this.n = b.clientX, this.q = b.clientY, this.f = this.d = 0, this.A = d.center, this.ec = a.b(), this.Fb(a) && (this.i=!0, a.P(), c=!0));
    return !c
};
function bj(a) {
    aj.call(this);
    a = s(a) ? a : {};
    this.c = s(a.condition) ? a.condition : Yi;
    this.a = a.kinetic;
    this.b = null
}
D(bj, aj);
bj.prototype.Wb = function(a) {
    this.a && this.a.a.push(a.a.clientX, a.a.clientY, ta());
    a = a.map;
    var b = a.a(), c = Ki(b), d = [ - c.resolution * this.d, c.resolution * this.f];
    zd(d, c.rotation);
    ud(d, this.A);
    d = b.hb.center(d);
    cj(a);
    b.za(d)
};
bj.prototype.Xb = function(a) {
    a = a.map;
    var b = a.a().N();
    pf(b, -1);
    if (this.a && zf(this.a)) {
        var c = Ki(b), d = (this.a.d - this.a.b) / this.a.f, e = this.a.c;
        this.b = Nf(this.a, c.center);
        a.Ba(this.b);
        c = dj(a, c.center);
        d = ej(a, [c[0] - d * Math.cos(e), c[1] - d * Math.sin(e)]);
        d = b.hb.center(d);
        b.za(d)
    }
    cj(a)
};
bj.prototype.Fb = function(a) {
    var b = a.a;
    if (ac(b) && this.c(a)) {
        if (this.a) {
            var c = this.a;
            c.a.length = 0;
            c.c = 0;
            c.b = 0;
            this.a.a.push(b.clientX, b.clientY, ta())
        }
        a = a.map;
        pf(a.a(), 1);
        cj(a);
        return !0
    }
    return !1
};
bj.prototype.Ud = function(a) {
    var b = a.map, c = b.a();
    null !== this.b && Qa(b.j, this.b) && (cj(b), c.za(a.c.F.center), this.b = null)
};
function fj(a) {
    a = s(a) ? a : {};
    aj.call(this);
    this.b = s(a.condition) ? a.condition : Wi;
    this.a = void 0
}
D(fj, aj);
fj.prototype.Wb = function(a) {
    var b = a.map, c = b.c();
    a = a.f();
    c = Math.atan2(c[1] / 2 - a[1], a[0] - c[0] / 2);
    if (s(this.a)) {
        a = c - this.a;
        var d = b.a().N(), e = Ki(d);
        cj(b);
        Ri(b, d, e.rotation - a)
    }
    this.a = c
};
fj.prototype.Xb = function(a) {
    a = a.map;
    var b = a.a().N();
    pf(b, -1);
    var c = Ki(b).rotation, c = b.lc(c, 0);
    Ri(a, b, c, void 0, 250)
};
fj.prototype.Fb = function(a) {
    return ac(a.a) && this.b(a) ? (a = a.map, pf(a.a(), 1), cj(a), this.a = void 0, !0) : !1
};
function gj(a) {
    var b = Lg("DIV", "ol-dragbox");
    this.c = s(a.condition) ? a.condition : Vc;
    this.b = null;
    this.g = a.ec;
    Li.call(this, {
        element: b
    })
}
D(gj, Li);
gj.prototype.setMap = function(a) {
    gj.D.setMap.call(this, a);
    null !== a && (this.b = dj(a, this.g), Oh(this.element, this.b[0], this.b[1]), ai(this.element, new Eg(0, 0)), this.e.push(G(a, ui, this.i, !1, this)))
};
gj.prototype.i = function(a) {
    if (this.c(a)) {
        var b = this.a;
        a = a.b();
        b = dj(b, a);
        Oh(this.element, Math.min(b[0], this.b[0]), Math.min(b[1], this.b[1]));
        ai(this.element, new Eg(Math.abs(b[0] - this.b[0]), Math.abs(b[1] - this.b[1])))
    }
};
function hj(a) {
    aj.call(this);
    a = s(a) ? a : {};
    this.b = s(a.condition) ? a.condition : Zi;
    this.a = null
}
D(hj, aj);
hj.prototype.Xb = function(a) {
    this.a.setMap(null);
    this.a = null;
    if (64 <= this.d * this.d + this.f * this.f) {
        var b = a.map, c = Dd([this.ec, a.b()]);
        Si(b, function() {
            var a = b.a(), e = b.c();
            a.ad(c, e);
            a.e(0)
        })
    }
};
hj.prototype.Fb = function(a) {
    return ac(a.a) && this.b(a) ? (this.a = new gj({
        ec: this.ec
    }), this.a.setMap(a.map), !0) : !1
};
function ij(a) {
    Qi.call(this);
    a = s(a) ? a : {};
    this.a = s(a.condition) ? a.condition : ad(Yi, $i);
    this.b = s(a.delta) ? a.delta : 128
}
D(ij, Qi);
ij.prototype.Ka = function(a) {
    var b=!1;
    if ("key" == a.type) {
        var c = a.a.Pa;
        if (this.a(a) && (40 == c || 37 == c || 39 == c || 38 == c)) {
            var d = a.map, b = d.a(), e = Ki(b), f = e.resolution * this.b, g = 0, h = 0;
            40 == c ? h =- f : 37 == c ? g =- f : 39 == c ? g = f : h = f;
            c = [g, h];
            zd(c, e.rotation);
            e = b.a();
            s(e) && (s(100) && d.Ba(vf({
                source: e,
                duration: 100,
                easing: sf
            })), d = b.hb.center([e[0] + c[0], e[1] + c[1]]), b.za(d));
            a.P();
            b=!0
        }
    }
    return !b
};
function jj(a) {
    Qi.call(this);
    a = s(a) ? a : {};
    this.b = s(a.condition) ? a.condition : $i;
    this.a = s(a.delta) ? a.delta : 1;
    this.c = s(a.duration) ? a.duration : 100
}
D(jj, Qi);
jj.prototype.Ka = function(a) {
    var b=!1;
    if ("key" == a.type) {
        var c = a.a.ed;
        if (this.b(a) && (43 == c || 45 == c)) {
            b = a.map;
            c = 43 == c ? this.a : - this.a;
            cj(b);
            var d = b.a().N();
            Ti(b, d, c, void 0, this.c);
            a.P();
            b=!0
        }
    }
    return !b
};
function kj(a) {
    a = s(a) ? a : {};
    Qi.call(this);
    this.a = 0;
    this.e = s(a.duration) ? a.duration : 250;
    this.c = null;
    this.d = this.b = void 0
}
D(kj, Qi);
kj.prototype.Ka = function(a) {
    var b=!1;
    if ("mousewheel" == a.type) {
        var b = a.map, c = a.a;
        this.c = a.b();
        this.a += c.a / 3;
        s(this.b) || (this.b = ta());
        c = Math.max(80 - (ta() - this.b), 0);
        p.clearTimeout(this.d);
        this.d = p.setTimeout(x(this.f, this, b), c);
        a.P();
        b=!0
    }
    return !b
};
kj.prototype.f = function(a) {
    var b = pd(this.a, -1, 1), c = a.a().N();
    cj(a);
    Ti(a, c, - b, this.c, this.e);
    this.a = 0;
    this.c = null;
    this.d = this.b = void 0
};
function lj() {
    Qi.call(this);
    this.c=!1;
    this.j = {};
    this.targetTouches = []
}
D(lj, Qi);
function mj(a) {
    for (var b = a.length, c = 0, d = 0, e = 0; e < b; e++)
        c += a[e].clientX, d += a[e].clientY;
    return [c / b, d / b]
}
lj.prototype.e = ea;
lj.prototype.f = Uc;
lj.prototype.g = Uc;
lj.prototype.Ka = function(a) {
    var b = a.map.a(), c = a.type;
    if (c === vi || c === wi || c === xi)
        c = a.a.$, s(c.targetTouches) ? this.targetTouches = c.targetTouches : s(c.pointerId) && (a.type == xi ? delete this.j[c.pointerId] : this.j[c.pointerId] = c, this.targetTouches = qc(this.j));
    this.c && (a.type == wi ? this.e(a) : a.type == xi && ((this.c = this.f(a)) || pf(b, -1)));
    a.type == vi && (a = this.g(a), !this.c && a && pf(b, 1), this.c = a);
    return !0
};
function nj(a) {
    lj.call(this);
    this.a = (s(a) ? a : {}).kinetic;
    this.b = this.d = null;
    this.i=!1
}
D(nj, lj);
nj.prototype.e = function(a) {
    var b = mj(this.targetTouches);
    if (null !== this.b) {
        this.a && this.a.a.push(b[0], b[1], ta());
        var c = this.b[0] - b[0], d = b[1] - this.b[1];
        a = a.map;
        var e = a.a().N(), f = Ki(e), d = c = [c, d], g = f.resolution;
        d[0]*=g;
        d[1]*=g;
        zd(c, f.rotation);
        ud(c, f.center);
        c = e.hb.center(c);
        cj(a);
        e.za(c)
    }
    this.b = b
};
nj.prototype.f = function(a) {
    a = a.map;
    var b = a.a();
    if (0 === this.targetTouches.length) {
        if (!this.i && this.a && zf(this.a)) {
            var c = (this.a.d - this.a.b) / this.a.f, d = this.a.c, e = b.a();
            this.d = Nf(this.a, e);
            a.Ba(this.d);
            e = dj(a, e);
            c = ej(a, [e[0] - c * Math.cos(d), e[1] - c * Math.sin(d)]);
            c = b.hb.center(c);
            b.za(c)
        }
        cj(a);
        return !1
    }
    this.b = null;
    return !0
};
nj.prototype.g = function(a) {
    if (0 < this.targetTouches.length) {
        var b = a.map, c = b.a();
        this.b = null;
        cj(b);
        null !== this.d && Qa(b.j, this.d) && (c.za(a.c.F.center), this.d = null);
        this.a && (a = this.a, a.a.length = 0, a.c = 0, a.b = 0);
        this.i = 1 < this.targetTouches.length;
        return !0
    }
    return !1
};
function oj(a) {
    lj.call(this);
    a = s(a) ? a : {};
    this.b = null;
    this.d = void 0;
    this.a=!1;
    this.i = 0;
    this.n = s(a.threshold) ? a.threshold : 0.3
}
D(oj, lj);
oj.prototype.e = function(a) {
    var b = 0, c = this.targetTouches[0], d = this.targetTouches[1], c = Math.atan2(d.clientY - c.clientY, d.clientX - c.clientX);
    s(this.d) && (b = c - this.d, this.i += b, !this.a && Math.abs(this.i) > this.n && (this.a=!0));
    this.d = c;
    a = a.map;
    c = Uh(a.b);
    d = mj(this.targetTouches);
    d[0] -= c.x;
    d[1] -= c.y;
    this.b = ej(a, d);
    this.a && (c = a.a().N(), d = Ki(c), cj(a), Ri(a, c, d.rotation + b, this.b))
};
oj.prototype.f = function(a) {
    if (2 > this.targetTouches.length) {
        a = a.map;
        var b = a.a().N(), c = Ki(b);
        if (this.a) {
            var c = c.rotation, d = this.b, c = b.lc(c, 0);
            Ri(a, b, c, d, 250)
        }
        return !1
    }
    return !0
};
oj.prototype.g = function(a) {
    return 2 <= this.targetTouches.length ? (a = a.map, this.b = null, this.d = void 0, this.a=!1, this.i = 0, cj(a), !0) : !1
};
function pj(a) {
    a = s(a) ? a : {};
    lj.call(this);
    this.b = null;
    this.i = s(a.duration) ? a.duration : 400;
    this.a = void 0;
    this.d = 1
}
D(pj, lj);
pj.prototype.e = function(a) {
    var b = 1, c = this.targetTouches[0], d = this.targetTouches[1], e = c.clientX - d.clientX, c = c.clientY - d.clientY, e = Math.sqrt(e * e + c * c);
    s(this.a) && (b = this.a / e);
    this.a = e;
    1 != b && (this.d = b);
    a = a.map;
    var e = a.a().N(), c = Ki(e), d = Uh(a.b), f = mj(this.targetTouches);
    f[0] -= d.x;
    f[1] -= d.y;
    this.b = ej(a, f);
    cj(a);
    Ui(a, e, c.resolution * b, this.b)
};
pj.prototype.f = function(a) {
    if (2 > this.targetTouches.length) {
        a = a.map;
        var b = a.a().N(), c = Ki(b).resolution, d = this.b, e = this.i, c = b.Ca(c, 0, this.d-1);
        Ui(a, b, c, d, e);
        return !1
    }
    return !0
};
pj.prototype.g = function(a) {
    return 2 <= this.targetTouches.length ? (a = a.map, this.b = null, this.a = void 0, this.d = 1, cj(a), !0) : !1
};
function qj(a) {
    a = s(a) ? a : {};
    var b = new M, c = new yf(-0.005, 0.05, 100);
    (s(a.altShiftDragRotate) ? a.altShiftDragRotate : 1) && b.push(new fj);
    (s(a.doubleClickZoom) ? a.doubleClickZoom : 1) && b.push(new Vi({
        delta: a.zoomDelta,
        duration: a.zoomDuration
    }));
    (s(a.touchPan) ? a.touchPan : 1) && b.push(new nj({
        kinetic: c
    }));
    (s(a.touchRotate) ? a.touchRotate : 1) && b.push(new oj);
    (s(a.touchZoom) ? a.touchZoom : 1) && b.push(new pj({
        duration: a.zoomDuration
    }));
    (s(a.dragPan) ? a.dragPan : 1) && b.push(new bj({
        kinetic: c
    }));
    if (s(a.keyboard) ? a.keyboard :
    1)
        b.push(new ij), b.push(new jj({
        delta: a.zoomDelta,
        duration: a.zoomDuration
    }));
    (s(a.mouseWheelZoom) ? a.mouseWheelZoom : 1) && b.push(new kj({
        duration: a.zoomDuration
    }));
    (s(a.shiftDragZoom) ? a.shiftDragZoom : 1) && b.push(new hj);
    return b
};
function rj(a) {
    var b = s(a) ? a: {};
    a = vc(b);
    delete a.layers;
    b = b.layers;
    R.call(this, a);
    this.a = null;
    G(this, hd("layers"), this.nf, !1, this);
    s(b) ? ia(b) && (b = new M(Sa(b))) : b = new M;
    this.b(b)
}
D(rj, R);
m = rj.prototype;
m.Cc = function() {
    this.c() && lf(this)
};
m.Yd = function() {
    lf(this)
};
m.nf = function() {
    null !== this.a && (Ia(qc(this.a), H), this.a = null);
    var a = this.La();
    if (null != a) {
        this.a = {
            add: G(a, "add", this.mf, !1, this),
            remove: G(a, "remove", this.of, !1, this)
        };
        var a = a.a, b, c, d;
        b = 0;
        for (c = a.length; b < c; b++)
            d = a[b], this.a[u(d).toString()] = G(d, "change", this.Cc, !1, this)
    }
    lf(this)
};
m.mf = function(a) {
    a = a.a;
    this.a[u(a).toString()] = G(a, "change", this.Cc, !1, this);
    lf(this)
};
m.of = function(a) {
    a = u(a.a).toString();
    H(this.a[a]);
    delete this.a[a];
    lf(this)
};
m.La = function() {
    return this.get("layers")
};
rj.prototype.getLayers = rj.prototype.La;
rj.prototype.b = function(a) {
    this.o("layers", a)
};
rj.prototype.setLayers = rj.prototype.b;
rj.prototype.Rb = function(a) {
    var b = s(a) ? a: [];
    this.La().forEach(function(a) {
        a.Rb(b)
    });
    return b
};
rj.prototype.cd = function(a) {
    var b = s(a) ? a: {
        layers: [],
        ma: []
    }, c = b.layers.length;
    this.La().forEach(function(a) {
        a.cd(b)
    });
    a = mf(this);
    var d, e;
    for (d = b.ma.length; c < d; c++)
        e = b.ma[c], e.brightness = pd(e.brightness + a.brightness, -1, 1), e.contrast*=a.contrast, e.hue += a.hue, e.opacity*=a.opacity, e.saturation*=a.saturation, e.dc = this.lb(), e.visible = e.visible && a.visible, e.maxResolution = Math.min(e.maxResolution, a.maxResolution), e.minResolution = Math.max(e.minResolution, a.minResolution);
    return b
};
rj.prototype.lb = function() {
    var a = [0, 0, 0], b = this.La().a, c = b.length, d;
    for (d = 0; d < c; ++d) {
        var e = b[d].lb();
        ++a[e]
    }
    return a[1] ? 1 : a[0] ? 0 : a[2] ? 2 : 1
};
function sj(a) {
    ee.call(this, {
        code: a,
        units: "m",
        extent: tj,
        global: !0
    })
}
D(sj, ee);
var uj = 6378137 * Math.PI, tj = [ - uj, - uj, uj, uj], Be = Ma(["EPSG:3857", "EPSG:102100", "EPSG:102113", "EPSG:900913", "urn:ogc:def:crs:EPSG:6.18:3:3857"], function(a) {
    return new sj(a)
});
function Ce(a, b, c) {
    var d = a.length;
    c = 1 < c ? c : 2;
    s(b) || (b = 2 < c ? a.slice() : Array(d));
    for (var e = 0; e < d; e += c)
        b[e] = 6378137 * Math.PI * a[e] / 180, b[e + 1] = 6378137 * Math.log(Math.tan(Math.PI * (a[e + 1] + 90) / 360));
    return b
}
function De(a, b, c) {
    var d = a.length;
    c = 1 < c ? c : 2;
    s(b) || (b = 2 < c ? a.slice() : Array(d));
    for (var e = 0; e < d; e += c)
        b[e] = 180 * a[e] / (6378137 * Math.PI), b[e + 1] = 360 * Math.atan(Math.exp(a[e + 1] / 6378137)) / Math.PI-90;
    return b
}
sj.prototype.b = function(a, b) {
    return a / ((Math.exp(b[1] / 6378137) + Math.exp( - (b[1] / 6378137))) / 2)
};
function vj(a, b) {
    ee.call(this, {
        code: a,
        units: "degrees",
        extent: wj,
        axisOrientation: b,
        global: !0
    })
}
D(vj, ee);
var wj = [-180, -90, 180, 90], Ee = [new vj("CRS:84"), new vj("EPSG:4326", "neu"), new vj("urn:ogc:def:crs:EPSG:6.6:4326", "neu"), new vj("urn:ogc:def:crs:OGC:1.3:CRS84"), new vj("urn:ogc:def:crs:OGC:2:84"), new vj("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"), new vj("urn:x-ogc:def:crs:EPSG:4326", "neu")];
vj.prototype.b = function(a) {
    return a
};
function xj() {
    we(Be);
    we(Ee);
    Ae()
};
function yj(a, b, c, d, e) {
    I.call(this);
    this.d = e;
    this.f = a;
    this.g = c;
    this.e = b;
    this.a = new Image;
    null !== d && (this.a.crossOrigin = d);
    this.c = {};
    this.b = null;
    this.state = 0
}
D(yj, I);
yj.prototype.ca = k("f");
function zj(a, b) {
    if (s(b)) {
        var c, d = u(b);
        if (d in a.c)
            return a.c[d];
        c = uc(a.c) ? a.a : a.a.cloneNode(!1);
        return a.c[d] = c
    }
    return a.a
}
yj.prototype.G = k("e");
yj.prototype.i = function() {
    this.state = 3;
    Ia(this.b, H);
    this.b = null;
    K(this, "change")
};
yj.prototype.j = function() {
    this.state = 2;
    Ia(this.b, H);
    this.b = null;
    K(this, "change")
};
function Aj(a) {
    0 == a.state && (a.state = 1, a.b = [Jc(a.a, "error", a.i, !1, a), Jc(a.a, "load", a.j, !1, a)], a.a.src = a.g)
};
function Bj(a) {
    this.minZoom = s(a.minZoom) ? a.minZoom : 0;
    this.a = a.resolutions;
    this.maxZoom = this.a.length-1;
    this.d = s(a.origin) ? a.origin : null;
    this.e = null;
    s(a.origins) && (this.e = a.origins);
    this.b = null;
    s(a.tileSizes) && (this.b = a.tileSizes);
    this.f = s(a.tileSize) ? a.tileSize : null === this.b ? [256, 256] : null
}
var Cj = new $a(0, 0, 0);
m = Bj.prototype;
m.uc = function(a, b, c, d, e) {
    e = Dj(this, a, e);
    for (a = a.z-1; a >= this.minZoom;) {
        if (b.call(c, a, Ej(this, e, a, d)))
            return !0;
        --a
    }
    return !1
};
m.Ue = k("minZoom");
m.Ib = function(a) {
    return null === this.d ? this.e[a] : this.d
};
m.G = function(a) {
    return this.a[a]
};
m.Sb = k("a");
m.zc = function(a, b, c) {
    return a.z < this.maxZoom ? (c = Dj(this, a, c), Ej(this, c, a.z + 1, b)) : null
};
function Fj(a, b, c, d) {
    Gj(a, b[0], b[1], c, !1, Cj);
    var e = Cj.x, f = Cj.y;
    Gj(a, b[2], b[3], c, !0, Cj);
    return eb(e, Cj.x, f, Cj.y, d)
}
function Ej(a, b, c, d) {
    c = a.G(c);
    return Fj(a, b, c, d)
}
function Hj(a, b) {
    var c = a.Ib(b.z), d = a.G(b.z), e = a.va(b.z);
    return [c[0] + (b.x + 0.5) * e[0] * d, c[1] + (b.y + 0.5) * e[1] * d]
}
function Dj(a, b, c) {
    var d = a.Ib(b.z), e = a.G(b.z);
    a = a.va(b.z);
    var f = d[0] + b.x * a[0] * e;
    b = d[1] + b.y * a[1] * e;
    return Hd(f, f + a[0] * e, b, b + a[1] * e, c)
}
function Gj(a, b, c, d, e, f) {
    var g = Bi(a.a, d, 0), h = d / a.G(g), l = a.Ib(g);
    a = a.va(g);
    b = h * (b - l[0]) / (d * a[0]);
    c = h * (c - l[1]) / (d * a[1]);
    e ? (b = Math.ceil(b)-1, c = Math.ceil(c)-1) : (b = Math.floor(b), c = Math.floor(c));
    e = b;
    s(f) ? (f.z = g, f.x = e, f.y = c) : f = new $a(g, e, c);
    return f
}
function Ij(a, b, c) {
    c = a.G(c);
    return Gj(a, b[0], b[1], c, !1, void 0)
}
m.va = function(a) {
    return null === this.f ? this.b[a] : this.f
};
function Jj(a) {
    var b = a.f;
    if (null === b) {
        for (var b = a.ca(), c = null === b ? 360 * de.degrees / a.a() : Math.max(b[2] - b[0], b[3] - b[1]), d = s(void 0) ? void 0 : [256, 256], e = Array((s(void 0) ? NaN : 42) + 1), c = c / Math.max(d[0], d[1]), f = 0, g = e.length; f < g; ++f)
            e[f] = c / Math.pow(2, f);
        b = new Bj({
            origin: null === b ? [0, 0]: Md(b),
            resolutions: e,
            tileSize: d
        });
        a.f = b
    }
    return b
};
function nk(a) {
    jf.call(this, {
        attributions: a.attributions,
        extent: a.extent,
        logo: a.logo,
        projection: a.projection
    });
    this.H = s(a.opaque) ? a.opaque : !1;
    this.tileGrid = s(a.tileGrid) ? a.tileGrid : null
}
D(nk, jf);
m = nk.prototype;
m.pd = Uc;
m.$c = function(a, b, c, d) {
    var e=!0, f, g, h, l;
    for (h = d.a; h <= d.d; ++h)
        for (l = d.c; l <= d.b; ++l)
            g = this.$a(c, h, l), a[c] && a[c][g] || (f = b(c, h, l), null === f ? e=!1 : (a[c] || (a[c] = {}), a[c][g] = f));
    return e
};
m.$a = bb;
m.Sb = function() {
    return this.tileGrid.Sb()
};
m.Xe = k("tileGrid");
m.we = ea;
function ok(a, b) {
    gb.call(this);
    this.c = a;
    this.b = b
}
D(ok, gb);
ok.prototype.Ya = function(a, b, c) {
    var d = this.b, e = d.ha(), f=!1;
    ma(e.Ya) && (e.Ya(a, this.c.e, function(a) {
        b(a, d)
    }, c), f=!0);
    return f
};
ok.prototype.g = function(a) {
    2 === a.target.state && (a = this.b, a.c() && 1 == a.lb() && pk(this.c.e))
};
function qk(a, b) {
    b.pd() && a.cb.push(sa(function(a, b, e) {
        b = u(a).toString();
        a.je(e.hc[b])
    }, b))
}
function rk(a, b) {
    if (null != b) {
        var c, d, e;
        d = 0;
        for (e = b.length; d < e; ++d)
            c = b[d], a[u(c).toString()] = c
    }
}
function sk(a, b) {
    var c = b.i;
    s(c) && (a.ae[c]=!0)
}
function tk(a, b, c, d) {
    b = u(b).toString();
    c = c.toString();
    b in a ? c in a[b] ? (a = a[b][c], d.a < a.a && (a.a = d.a), d.d > a.d && (a.d = d.d), d.c < a.c && (a.c = d.c), d.b > a.b && (a.b = d.b)) : a[b][c] = d : (a[b] = {}, a[b][c] = d)
}
function uk(a, b, c) {
    return function(d, e, f) {
        d = b.Cb(d, e, f, c);
        return a(d) ? d : null
    }
}
function vk(a, b, c) {
    return [b * (Math.round(a[0] / b) + c[0]%2 / 2), b * (Math.round(a[1] / b) + c[1]%2 / 2)]
}
function wk(a, b, c, d, e, f, g, h, l) {
    var n = u(b).toString();
    n in a.Pb || (a.Pb[n] = {});
    var q = a.Pb[n];
    a = a.mg;
    var r = c.minZoom, y, v, B, C, w, z;
    for (z = f; z >= r; --z)
        for (v = Ej(c, e, z), B = c.G(z)
            , C = v.a;
    C <= v.d;
    ++C)for (w = v.c; w <= v.b; ++w)
        f - z <= g ? (y = b.Cb(z, C, w, d), 0 == y.state && (q[y.a.toString()]=!0, y.b()in a.c || ef(a, [y, n, Hj(c, y.a), B])), s(h) && h.call(l, y)) : b.we(z, C, w)
};
function xk(a, b) {
    gb.call(this);
    this.e = b;
    this.d = {}
}
D(xk, gb);
function yk(a) {
    var b = a.F, c = a.Hd;
    Ve(c);
    Ze(c, a.size[0] / 2, a.size[1] / 2);
    $e(c, 1 / b.resolution, -1 / b.resolution);
    af(c, - b.rotation);
    Ze(c, - b.center[0], - b.center[1]);
    a = a.le;
    var b = c[0], d = c[1], e = c[2], f = c[3], g = c[4], h = c[5], l = c[6], n = c[7], q = c[8], r = c[9], y = c[10], v = c[11], B = c[12], C = c[13], w = c[14], c = c[15], z = b * h - d * g, O = b * l - e * g, F = b * n - f * g, V = d * l - e * h, Y = d * n - f * h, ba = e * n - f * l, J = q * C - r * B, Q = q * w - y * B, ua = q * c - v * B, va = r * w - y * C, ha = r * c - v * C, ka = y * c - v * w, ca = z * ka - O * ha + F * va + V * ua - Y * Q + ba * J;
    0 != ca && (ca = 1 / ca, a[0] = (h * ka - l * ha + n * va) * ca, a[1] = ( - d * ka + e * ha - f *
    va) * ca, a[2] = (C * ba - w * Y + c * V) * ca, a[3] = ( - r * ba + y * Y - v * V) * ca, a[4] = ( - g * ka + l * ua - n * Q) * ca, a[5] = (b * ka - e * ua + f * Q) * ca, a[6] = ( - B * ba + w * F - c * O) * ca, a[7] = (q * ba - y * F + v * O) * ca, a[8] = (g * ha - h * ua + n * J) * ca, a[9] = ( - b * ha + d * ua - f * J) * ca, a[10] = (B * Y - C * F + c * z) * ca, a[11] = ( - q * Y + r * F - v * z) * ca, a[12] = ( - g * va + h * Q - l * J) * ca, a[13] = (b * va - d * Q + e * J) * ca, a[14] = ( - B * V + C * O - w * z) * ca, a[15] = (q * V - r * O + y * z) * ca)
}
m = xk.prototype;
m.mc = function(a) {
    return new ok(this, a)
};
m.B = function() {
    nc(this.d, function(a) {
        kb(a)
    });
    xk.D.B.call(this)
};
m.wc = Wc;
m.Ya = function(a, b, c, d) {
    function e(a, d) {
        g[Ha(b, d)] = a;
        --h;
        0 >= h && c(g)
    }
    for (var f = b.length, g = Array(f), h = 0, l, n = 0; n < f; ++n)
        l = zk(this, b[n]), l.Ya(a, e, d)&&++h
};
function Ak(a, b, c, d, e) {
    function f(a, b) {
        h[Ha(c, b)] = a;
        --l;
        0 >= l && d(h)
    }
    for (var g = c.length, h = Array(g), l = 0, n, q = 0; q < g; ++q)
        n = c[q], n = zk(a, n), ma(n.od) && (++l, n.od(b, f, e))
}
function zk(a, b) {
    var c = u(b).toString();
    if (c in a.d)
        return a.d[c];
    var d = a.mc(b);
    return a.d[c] = d
}
m.Jc = ea;
m.eg = function(a, b) {
    for (var c in this.d)
        if (!(null !== b && c in b.ma)) {
            var d = this.d[c];
            delete this.d[c];
            kb(d)
        }
};
function Bk(a, b) {
    for (var c in a.d)
        if (!(c in b.ma)) {
            b.cb.push(x(a.eg, a));
            break
        }
};
var Ck = function() {
    if (!("HTMLCanvasElement"in p))
        return !1;
    try {
        return null !== Og("CANVAS").getContext("2d")
    } catch (a) {
        return !1
    }
}();
function Dk(a, b) {
    var c = Ek;
    return function(d, e, f) {
        return c(a, b, d, e, f)
    }
}
function Fk() {};
function Gk(a) {
    jf.call(this, {
        attributions: a.attributions,
        extent: a.extent,
        logo: a.logo,
        projection: a.projection
    });
    this.Gb = s(a.Gb) ? a.Gb : Fk;
    this.q = s(a.crossOrigin) ? a.crossOrigin : null;
    this.e = s(a.resolutions) ? a.resolutions : null
}
D(Gk, jf);
function Hk(a, b, c, d, e) {
    var f = null;
    d = a.Gb(b, d, e);
    s(d) && (f = new yj(b, c, d, a.q, a.d));
    return f
};
function Ik(a) {
    nf.call(this, a)
}
D(Ik, nf);
function Jk(a) {
    nf.call(this, a);
    this.b(s(a.preload) ? a.preload : 0)
}
D(Jk, nf);
Jk.prototype.a = function() {
    return this.get("preload")
};
Jk.prototype.getPreload = Jk.prototype.a;
Jk.prototype.b = function(a) {
    this.o("preload", a)
};
Jk.prototype.setPreload = Jk.prototype.b;
function Kk(a, b, c) {
    if (ma(a))
        c && (a = x(a, c));
    else if (a && "function" == typeof a.handleEvent)
        a = x(a.handleEvent, a);
    else 
        throw Error("Invalid listener argument");
    return 2147483647 < b?-1 : p.setTimeout(a, b || 0)
};
function Lk() {}
Lk.prototype.a = null;
function Mk(a) {
    var b;
    (b = a.a) || (b = {}, Nk(a) && (b[0]=!0, b[1]=!0), b = a.a = b);
    return b
};
var Ok;
function Pk() {}
D(Pk, Lk);
function Qk(a) {
    return (a = Nk(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Nk(a) {
    if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
            var d = b[c];
            try {
                return new ActiveXObject(d), a.b = d
            } catch (e) {}
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    return a.b
}
Ok = new Pk;
function Rk(a) {
    I.call(this);
    this.ga = new Qf;
    this.j = a || null;
    this.b=!1;
    this.i = this.a = null;
    this.ea = this.r = "";
    this.d = 0;
    this.e = "";
    this.c = this.A = this.q = this.n=!1;
    this.g = 0;
    this.f = null;
    this.O = Sk;
    this.t = this.Aa=!1
}
D(Rk, I);
var Sk = "", Tk = /^https?$/i, Uk = ["POST", "PUT"], Vk = [];
function Wk(a, b) {
    var c = new Rk;
    Vk.push(c);
    b && c.wa("complete", b);
    c.Ea.add("ready", c.W, !0, void 0, void 0);
    Xk(c, a, void 0, void 0, void 0)
}
Rk.prototype.W = function() {
    this.pc();
    Qa(Vk, this)
};
function Xk(a, b, c, d, e) {
    if (a.a)
        throw Error("[goog.net.XhrIo] Object is active with another request\x3d" + a.r + "; newUri\x3d" + b);
    c = c ? c.toUpperCase() : "GET";
    a.r = b;
    a.e = "";
    a.d = 0;
    a.ea = c;
    a.n=!1;
    a.b=!0;
    a.a = a.j ? Qk(a.j) : Qk(Ok);
    a.i = a.j ? Mk(a.j) : Mk(Ok);
    a.a.onreadystatechange = x(a.H, a);
    try {
        a.A=!0, a.a.open(c, b, !0), a.A=!1
    } catch (f) {
        Yk(a, f);
        return 
    }
    b = d || "";
    var g = a.ga.U();
    e && Pf(e, function(a, b) {
        Rf(g, b, a)
    });
    e = Oa(g.Ga(), Zk);
    d = p.FormData && b instanceof p.FormData;
    !(0 <= Ha(Uk, c)) || (e || d) || Rf(g, "Content-Type", "application/x-www-form-urlencoded;charset\x3dutf-8");
    Pf(g, function(a, b) {
        this.a.setRequestHeader(b, a)
    }, a);
    a.O && (a.a.responseType = a.O);
    "withCredentials"in a.a && (a.a.withCredentials = a.Aa);
    try {
        $k(a), 0 < a.g && (a.t = E && Rb(9) && la(a.a.timeout) && s(a.a.ontimeout), a.t ? (a.a.timeout = a.g, a.a.ontimeout = x(a.vb, a)) : a.f = Kk(a.vb, a.g, a)), a.q=!0, a.a.send(b), a.q=!1
    } catch (h) {
        Yk(a, h)
    }
}
function Zk(a) {
    return "content-type" == a.toLowerCase()
}
Rk.prototype.vb = function() {
    "undefined" != typeof da && this.a && (this.e = "Timed out after " + this.g + "ms, aborting", this.d = 8, K(this, "timeout"), this.a && this.b && (this.b=!1, this.c=!0, this.a.abort(), this.c=!1, this.d = 8, K(this, "complete"), K(this, "abort"), al(this)))
};
function Yk(a, b) {
    a.b=!1;
    a.a && (a.c=!0, a.a.abort(), a.c=!1);
    a.e = b;
    a.d = 5;
    bl(a);
    al(a)
}
function bl(a) {
    a.n || (a.n=!0, K(a, "complete"), K(a, "error"))
}
Rk.prototype.B = function() {
    this.a && (this.b && (this.b=!1, this.c=!0, this.a.abort(), this.c=!1), al(this, !0));
    Rk.D.B.call(this)
};
Rk.prototype.H = function() {
    if (!this.ac && this.b && "undefined" != typeof da && (!this.i[1] || 4 != cl(this) || 2 != dl(this)))
        if (this.q && 4 == cl(this))
            Kk(this.H, 0, this);
        else if (K(this, "readystatechange"), 4 == cl(this)
            ) {
        this.b=!1;
        try {
            if (el(this))
                K(this, "complete"), K(this, "success");
            else {
                this.d = 6;
                var a;
                try {
                    a = 2 < cl(this) ? this.a.statusText : ""
                } catch (b) {
                    a = ""
                }
                this.e = a + " [" + dl(this) + "]";
                bl(this)
            }
        } finally {
            al(this)
        }
    }
};
function al(a, b) {
    if (a.a) {
        $k(a);
        var c = a.a, d = a.i[0] ? ea: null;
        a.a = null;
        a.i = null;
        b || K(a, "ready");
        try {
            c.onreadystatechange = d
        } catch (e) {}
    }
}
function $k(a) {
    a.a && a.t && (a.a.ontimeout = null);
    la(a.f) && (p.clearTimeout(a.f), a.f = null)
}
function el(a) {
    var b = dl(a), c;
    a: switch (b) {
    case 200:
    case 201:
    case 202:
    case 204:
    case 206:
    case 304:
    case 1223:
        c=!0;
        break a;
    default:
        c=!1
    }
    if (!c) {
        if (b = 0 === b)
            a = Vf(String(a.r))[1] || null, !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length-1)), b=!Tk.test(a ? a.toLowerCase() : "");
        c = b
    }
    return c
}
function cl(a) {
    return a.a ? a.a.readyState : 0
}
function dl(a) {
    try {
        return 2 < cl(a) ? a.a.status : -1
    } catch (b) {
        return -1
    }
}
function fl(a) {
    try {
        return a.a ? a.a.responseText : ""
    } catch (b) {
        return ""
    }
};
function gl(a) {
    this.b = s(a.data) ? a.data : null;
    this.a = 0;
    this.g = s(a.parser) ? a.parser : null;
    this.e = a.url;
    jf.call(this, {
        attributions: a.attributions,
        extent: a.extent,
        logo: a.logo,
        projection: a.projection
    })
}
D(gl, jf);
function hl(a, b, c, d) {
    s(a.e) && 0 == a.a ? (a.a = 1, Wk(a.e, x(function(a) {
        a = a.target;
        el(a) ? (il(b, fl(a), this.g, c), this.a = 2, s(d) && d()) : this.a = 3
    }, a))) : null !== a.b && (il(b, a.b, a.g, c), a.b = null, a.a = 2);
    return a.a
};
function jl(a) {
    this.c = s(a) ? a : 6;
    this.a = Math.floor(this.c / 2);
    this.b = {
        extent: Ed(),
        p: []
    }
}
function kl(a) {
    var b = a.p.length, c = a.extent;
    if (0 === b)
        c[0] = c[1] = Infinity, c[2] = c[3] =- Infinity;
    else {
        var d = a.p[0].extent;
        c[0] = d[0];
        c[2] = d[2];
        c[1] = d[1];
        c[3] = d[3];
        for (d = 1; d < b; ++d)
            Ld(c, a.p[d].extent)
    }
}
function ll(a, b, c) {
    var d = (a + b) / 2;
    a*=b;
    return a * c / (a / (d * d))
}
function ml(a, b, c, d) {
    b = {
        extent: b,
        tb: c
    };
    s(d) && (b.type = d);
    nl(a, b, a.b)
}
function nl(a, b, c) {
    var d;
    if (0 === c.p.length)
        c.extent = b.extent.slice(), c.p.push(b);
    else {
        var e =- 1, f = [], g;
        f.push(c);
        c = c.p;
        do {
            -1 != e && (f.push(c[e]), c = c[e].p, e =- 1);
            for (var h = c.length-1; 0 <= h; --h) {
                var l = c[h];
                if (s(l.tb)) {
                    e =- 1;
                    break
                }
                var n = ll(l.extent[2] - l.extent[0], l.extent[3] - l.extent[1], l.p.length + 1), l = ll((l.extent[2] > b.extent[2] ? l.extent[2] : b.extent[2]) - (l.extent[0] < b.extent[0] ? l.extent[0] : b.extent[0]), (l.extent[3] > b.extent[3] ? l.extent[3] : b.extent[3]) - (l.extent[1] < b.extent[1] ? l.extent[1] : b.extent[1]), l.p.length +
                2);
                if (0 > e || Math.abs(l - n) < g)
                    g = Math.abs(l - n), e = h
            }
        }
        while (-1 != e);
        do {
            if (d && s(d.p) && 0 === d.p.length)
                for (e = d, d = f.pop()
                    , g = 0, c = d.p.length;
            g < c;
            ++g) {
                if (d.p[g] === e || 0 === d.p[g].p.length) {
                    d.p.splice(g, 1);
                    break
                }
            } else 
                d = f.pop();
            e = ia(b);
            if (s(b.tb) || s(b.p) || e) {
                if (e) {
                    e = 0;
                    for (g = b.length; e < g; ++e)
                        Ld(d.extent, b[e].extent);
                    d.p = d.p.concat(b)
                } else 
                    Ld(d.extent, b.extent), d.p.push(b);
                if (d.p.length <= a.c)
                    b = {
                        extent: d.extent.slice()
                    };
                else {
                    b = a;
                    g = e = d.p;
                    c = g.length-1;
                    for (var h = 0, n = g.length-1, l = 0, q = void 0, r = void 0, q = g.length-2; 0 <= q; --q)
                        r =
                        g[q], r.extent[0] > g[h].extent[0] ? h = q : r.extent[2] < g[c].extent[1] && (c = q), r.extent[1] > g[l].extent[1] ? l = q : r.extent[3] < g[n].extent[3] && (n = q);
                    Math.abs(g[c].extent[2] - g[h].extent[0]) > Math.abs(g[n].extent[3] - g[l].extent[1]) ? c > h ? (q = g.splice(c, 1)[0], r = g.splice(h, 1)[0]) : (r = g.splice(h, 1)[0], q = g.splice(c, 1)[0]) : n > l ? (q = g.splice(n, 1)[0], r = g.splice(l, 1)[0]) : (r = g.splice(l, 1)[0], q = g.splice(n, 1)[0]);
                    for (g = [{
                        extent: q.extent.slice(),
                        p: [q]
                    }, {
                        extent: r.extent.slice(), p: [r]
                    }
                    ]; 0 < e.length;) {
                        c = b;
                        for (var h = e, n = g[0], l = g[1], r = ll(n.extent[2] -
                        n.extent[0], n.extent[3] - n.extent[1], n.p.length + 1), y = ll(l.extent[2] - l.extent[0], l.extent[3] - l.extent[1], l.p.length + 1), v = void 0, B = void 0, q = void 0, C = h.length-1; 0 <= C; --C) {
                            var w = h[C], z = [n.extent[0] < w.extent[0] ? n.extent[0]: w.extent[0], n.extent[2] > w.extent[2] ? n.extent[2]: w.extent[2], n.extent[1] < w.extent[1] ? n.extent[1]: w.extent[1], n.extent[3] > w.extent[3] ? n.extent[3]: w.extent[3]], z = Math.abs(ll(z[1] - z[0], z[3] - z[2], n.p.length + 2) - r), w = [l.extent[0] < w.extent[0] ? l.extent[0]: w.extent[0], l.extent[2] > w.extent[2] ? l.extent[2]:
                            w.extent[2], l.extent[1] < w.extent[1] ? l.extent[1]: w.extent[1], l.extent[3] > w.extent[3] ? l.extent[3]: w.extent[3]], w = Math.abs(ll(w[1] - w[0], w[3] - w[2], l.p.length + 2) - y), O = Math.abs(w - z);
                            if (!B ||!v || O < v)
                                B = C, v = O, q = w < z ? l : n
                        }
                        r = h.splice(B, 1)[0];
                        n.p.length + h.length + 1 <= c.a ? (n.p.push(r), Ld(n.extent, r.extent)) : l.p.length + h.length + 1 <= c.a ? (l.p.push(r), Ld(l.extent, r.extent)) : (q.p.push(r), Ld(q.extent, r.extent))
                    }
                    b = e = g;
                    1 > f.length && (d.p.push(e[0]), f.push(d), b = e[1])
                }
            } else 
                Ld(d.extent, b.extent), b = {
                extent: d.extent.slice()
            }
        }
        while (0 <
        f.length)
        }
}
jl.prototype.remove = function(a, b) {
    arguments[0] = {
        extent: a
    };
    switch (arguments.length) {
    case 1:
        arguments[1]=!1;
    case 2:
        arguments[2] = this.b;
    default:
        arguments.length = 3
    }
    if (!1 === arguments[1]) {
        var c = 0, d = [];
        do 
            c = d.length, d = d.concat(this.d.apply(this, arguments));
        while (c != d.length);
        return d
    }
    return this.d.apply(this, arguments)
};
jl.prototype.d = function(a, b, c) {
    var d = [], e = [], f = [];
    if (!a ||!Qd(a.extent, c.extent))
        return f;
    a = a.extent.slice();
    var g;
    e.push(c.p.length);
    d.push(c);
    do {
        c = d.pop();
        var h = e.pop()-1;
        if (s(b))
            for (; 0 <= h;) {
                var l = c.p[h];
                if (Qd(a, l.extent))
                    if (b && s(l.tb) && l.tb === b ||!b && (s(l.tb) || Jd(a, l.extent))) {
                        s(l.p) ? (f = pl(l, !0, [], l), c.p.splice(h, 1)) : f = c.p.splice(h, 1);
                        kl(c);
                        b = void 0;
                        c.p.length < this.a && (g = pl(c, !0, [], c));
                        break
                    } else 
                        s(l.p) && (e.push(h), d.push(c), c = l, h = l.p.length);
                        h -= 1
            } else if (s(g)) {
                c.p.splice(h + 1, 1);
                0 < c.p.length && kl(c);
                h = 0;
                for (l = g.length; h < l; ++h)
                    nl(this, g[h], c);
                    g.length = 0;
                    0 === d.length && 1 >= c.p.length ? (g = pl(c, !0, g, c), c.p.length = 0, d.push(c), e.push(1)) : 0 < d.length && c.p.length < this.a ? (g = pl(c, !0, g, c), c.p.length = 0) : g = void 0
            } else 
                kl(c)
    }
    while (0 < d.length);
    return f
};
jl.prototype.search = function(a, b) {
    return pl({
        extent: a
    }, !1, [], this.b, b)
};
function pl(a, b, c, d, e, f) {
    var g = {}, h = [];
    if (!Qd(a.extent, d.extent))
        return c;
    h.push(d.p);
    do {
        d = h.pop();
        for (var l = d.length-1; 0 <= l; --l) {
            var n = d[l];
            Qd(a.extent, n.extent) && (s(n.p) ? h.push(n.p) : s(n.tb) && (b ? c.push(n) : s(e) && n.type != e || (n = n.tb, s(f) ? g[u(n).toString()] = n : c.push(n))))
        }
    }
    while (0 < h.length);
    return s(f) ? g : c
};
function ql() {}
function rl(a, b) {
    this.c = a;
    this.b = b
}
D(rl, ql);
rl.prototype.a = function(a, b, c) {
    var d = this.c.a(null != b ? b : a);
    if (!d ||!ma(d))
        throw Error("Expected function but found " + d);
    for (var e = s(c) ? c : {}, f = this.b.length, g = Array(f), h = 0; h < f; ++h)
        g[h] = this.b[h].a(a, b, c);
    return d.apply(e, g)
};
var sl = {
    Qg: "\x3d\x3d",
    lh: "!\x3d",
    rh: "\x3d\x3d\x3d",
    sh: "!\x3d\x3d",
    Tg: "\x3e",
    $g: "\x3c",
    Ug: "\x3e\x3d",
    ah: "\x3c\x3d"
};
function tl(a, b, c) {
    this.b = a;
    this.Ia = b;
    this.Ma = c
}
D(tl, ql);
var ul = function() {
    var a = {}, b;
    for (b in sl)
        a[sl[b]]=!0;
    return function(b) {
        return !!a[b]
    }
}();
tl.prototype.a = function(a, b, c) {
    var d;
    d = this.Ma.a(a, b, c);
    a = this.Ia.a(a, b, c);
    b = this.b;
    if ("\x3d\x3d" === b)
        d = a == d;
    else if ("!\x3d" === b)
        d = a != d;
    else if ("\x3d\x3d\x3d" === b)
        d = a === d;
    else if ("!\x3d\x3d" === b)
        d = a !== d;
    else if ("\x3e" === b)
        d = a > d;
    else if ("\x3c" === b)
        d = a < d;
    else if ("\x3e\x3d" === b)
        d = a >= d;
    else if ("\x3c\x3d" === b)
        d = a <= d;
    else 
        throw Error("Unsupported comparison operator: " + this.b);
    return d
};
function vl(a) {
    this.b = a
}
D(vl, ql);
vl.prototype.a = function(a) {
    if (null == a)
        throw Error("Attempt to evaluate identifier with no scope");
    return a[this.b]
};
function T(a) {
    this.Va = a
}
D(T, ql);
T.prototype.a = k("Va");
var wl = {
    yg: "\x26\x26",
    mh: "||"
};
function xl(a, b, c) {
    this.b = a;
    this.Ia = b;
    this.Ma = c
}
D(xl, ql);
var yl = function() {
    var a = {}, b;
    for (b in wl)
        a[wl[b]]=!0;
    return function(b) {
        return !!a[b]
    }
}();
xl.prototype.a = function(a, b, c) {
    var d;
    d = this.Ma.a(a, b, c);
    a = this.Ia.a(a, b, c);
    if ("\x26\x26" === this.b)
        d = a && d;
    else if ("||" === this.b)
        d = a || d;
    else 
        throw Error("Unsupported logical operator: " + this.b);
    return d
};
var zl = {
    xg: "+",
    th: "-",
    hh: "*",
    Jg: "/",
    eh: "%"
};
function Al(a, b, c) {
    this.b = a;
    this.Ia = b;
    this.Ma = c
}
D(Al, ql);
var Bl = function() {
    var a = {}, b;
    for (b in zl)
        a[zl[b]]=!0;
    return function(b) {
        return !!a[b]
    }
}();
Al.prototype.a = function(a, b, c) {
    var d;
    d = this.Ma.a(a, b, c);
    a = this.Ia.a(a, b, c);
    b = this.b;
    if ("+" === b)
        d = a + d;
    else if ("-" === b)
        d = Number(a) - Number(d);
    else if ("*" === b)
        d = Number(a) * Number(d);
    else if ("/" === b)
        d = Number(a) / Number(d);
    else if ("%" === b)
        d = Number(a)%Number(d);
    else 
        throw Error("Unsupported math operator: " + this.b);
    return d
};
function Cl(a, b) {
    this.b = a;
    this.c = b
}
D(Cl, ql);
Cl.prototype.a = function(a, b, c) {
    a = this.b.a(a, b, c);
    if (!na(a))
        throw Error("Expected member expression to evaluate to an object but got " + a);
    return this.c.a(a)
};
function Dl(a) {
    this.b = a
}
D(Dl, ql);
Dl.prototype.a = function(a, b, c) {
    return !this.b.a(a, b, c)
};
function El(a) {
    this.b = a;
    this.c = a.length;
    this.d = this.a = 0
}
function Fl(a, b) {
    if (!a.match(b))
        throw new Gl({
            type: "Unknown",
            value: a.b[a.a],
            index: a.a
        });
    a.a = a.d
}
function Hl(a, b) {
    a.a += b
}
function Il(a) {
    return 48 <= a && 57 >= a
}
function Jl(a) {
    return 36 === a || 95 === a || 65 <= a && 90 >= a || 97 <= a && 122 >= a
}
function Kl(a) {
    return a.b.charCodeAt(a.a + 0)
}
El.prototype.match = function(a) {
    var b = Ll(this);
    return "Punctuator" === b.type && b.value === a
};
El.prototype.next = function() {
    var a;
    for (a = NaN; this.a < this.c;)
        if (a = Kl(this), 32 === a || 9 === a || 11 === a || 12 === a || 160 === a || 5760 <= a && 0 < "\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005" + "\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\ufeff".indexOf(String.fromCharCode(a)
            ))Hl(this, 1);
    else 
        break;
    if (this.a >= this.c)
        a = {
            type: "\x3cend\x3e",
            value: null,
            index: this.a
        };
    else if (40 === a || 41 === a)
        a = Ml(this, a);
    else if (39 === a || 34 === a) {
        var b = this.a;
        Hl(this, 1);
        for (var c = "", d; this.a < this.c;) {
            d = Kl(this);
            Hl(this, 1);
            if (d === a) {
                a =
                0;
                break
            }
            92 === d ? (c += this.b[this.a], Hl(this, 1)) : c += String.fromCharCode(d)
        }
        if (0 !== a)
            throw new Gl(Ll(this));
            a = {
                type: "String",
                value: c,
                index: b
            }
    } else if (Jl(a)) {
        b = a;
        a = this.a;
        for (Hl(this, 1);
        this.a < this.c;
        )if (b = Kl(this), Jl(b) || 48 <= b && 57 >= b)Hl(this, 1);
        else 
            break;
            b = this.b.slice(a, this.a);
            a = {
                type: 1 === b.length ? "Identifier": "break" === b || "case" === b || "catch" === b || "continue" === b || "debugger" === b || "default" === b || "delete" === b || "do" === b || "else" === b || "finally" === b || "for" === b || "function" === b || "if" === b || "in" === b || "instanceof" ===
                b || "new" === b || "return" === b || "switch" === b || "this" === b || "throw" === b || "try" === b || "typeof" === b || "var" === b || "void" === b || "while" === b || "with" === b ? "Keyword": "null" === b ? "Null": "true" === b || "false" === b ? "Boolean": "Identifier",
                value: b,
                index: a
            }
    } else 
        a = 46 === a ? Il(this.b.charCodeAt(this.a + 1)) ? Nl(this, a) : Ml(this, a) : Il(a) ? Nl(this, a) : Ml(this, a);
    return a
};
function Ll(a) {
    var b = a.a, c = a.next();
    a.d = a.a;
    a.a = b;
    return c
}
function Nl(a, b) {
    var c = "", d = a.a;
    if (46 !== b) {
        if (48 === b) {
            var e = a.b.charCodeAt(a.a + 1);
            if (88 === e || 120 === e) {
                Hl(a, 2);
                c = Kl(a);
                d = "";
                for (e = a.a-2; a.a < a.c && (Il(c) 
                    || 97 <= c && 102 >= c || 65 <= c && 70 >= c);
                )d += String.fromCharCode(c), Hl(a, 1), c = Kl(a);
                if (0 === d.length || Jl(c))
                    throw new Gl({
                        type: "Unknown",
                        value: String.fromCharCode(c),
                        index: a.a
                    });
                return {
                    type: "Numeric",
                    value: parseInt("0x" + d, 16),
                    index: e
                }
            }
            if (48 <= e && 55 >= e) {
                Hl(a, 1);
                d = "0" + String.fromCharCode(e);
                e = a.a-1;
                for (Hl(a, 1);
                a.a < a.c;
                ) {
                    c = Kl(a);
                    if (!(48 <= c && 55 >= c))
                        break;
                    d += String.fromCharCode(c);
                    Hl(a, 1)
                }
                c = Kl(a);
                if (Jl(c) || Il(c))
                    throw new Gl({
                        type: "Unknown",
                        value: String.fromCharCode(c),
                        index: a.a
                    });
                return {
                    type: "Numeric",
                    value: parseInt(d, 8),
                    index: e
                }
            }
            if (Il(e))
                throw new Gl({
                    type: "Unknown",
                    value: String.fromCharCode(e),
                    index: a.a
                });
        }
        for (; Il(b);)
            c += String.fromCharCode(b), Hl(a, 1), b = Kl(a)
    }
    if (46 === b)
        for (c += String.fromCharCode(b), Hl(a, 1)
            , b = Kl(a);
    Il(b);
    )c += String.fromCharCode(b), Hl(a, 1), b = Kl(a);
    if (69 === b || 101 === b) {
        c += "E";
        Hl(a, 1);
        b = Kl(a);
        if (43 === b || 45 === b)
            c += String.fromCharCode(b), Hl(a, 1), b = Kl(a);
        if (!Il(b))
            throw new Gl({
                type: "Unknown",
                value: String.fromCharCode(b),
                index: a.a
            });
        for (; Il(b);)
            c += String.fromCharCode(b), Hl(a, 1), b = Kl(a)
    }
    if (Jl(b))
        throw new Gl({
            type: "Unknown",
            value: String.fromCharCode(b),
            index: a.a
        });
    return {
        type: "Numeric",
        value: parseFloat(c),
        index: d
    }
}
function Ml(a, b) {
    var c = a.a;
    if (46 === b || 40 === b || 41 === b || 44 === b || 43 === b || 45 === b || 42 === b || 47 === b || 37 === b || 126 === b)
        return Hl(a, 1), {
        type: "Punctuator", value: String.fromCharCode(b), index: c
    };
    var d = a.b.charCodeAt(a.a + 1);
    if (61 === d) {
        if (33 === b || 61 === b)
            return Hl(a, 2), 61 === Kl(a) ? (Hl(a, 1), {
            type : "Punctuator", value : String.fromCharCode(b) + "\x3d\x3d", index : c
        }) : {
            type: "Punctuator", value: String.fromCharCode(b) + "\x3d", index: c
        };
        if (62 === b || 60 === b)
            return Hl(a, 2), {
            type: "Punctuator", value: String.fromCharCode(b) + "\x3d", index: c
        }
    }
    if (b ===
    d && (124 === b || 38 === b))
        return Hl(a, 2), d = String.fromCharCode(b), {
        type: "Punctuator", value: d + d, index: c
    };
    if (62 === b || 60 === b || 33 === b || 38 === b || 124 === b)
        return Hl(a, 1), {
        type: "Punctuator", value: String.fromCharCode(b), index: c
    };
    throw new Gl({
        type: "Unknown",
        value: String.fromCharCode(b),
        index: a.a
    });
}
function Gl(a, b) {
    wa.call(this, s(b) ? b : "Unexpected token " + a.value + " at index " + a.index);
    this.a = a
}
D(Gl, wa);
Gl.prototype.name = "UnexpectedToken";
function Ol() {}
function Pl(a) {
    var b = 0;
    if ("Punctuator" !== a.type)
        return b;
    switch (a.value) {
    case "||":
        b = 1;
        break;
    case "\x26\x26":
        b = 2;
        break;
    case "\x3d\x3d":
    case "!\x3d":
    case "\x3d\x3d\x3d":
    case "!\x3d\x3d":
        b = 3;
        break;
    case "\x3e":
    case "\x3c":
    case "\x3e\x3d":
    case "\x3c\x3d":
        b = 4;
        break;
    case "+":
    case "-":
        b = 5;
        break;
    case "*":
    case "/":
    case "%":
        b = 6
    }
    return b
}
function Ql(a, b, c) {
    if (ul(a))
        a = new tl(a, b, c);
    else if (yl(a))
        a = new xl(a, b, c);
    else if (Bl(a))
        a = new Al(a, b, c);
    else 
        throw Error("Unsupported binary operator: " + a);
    return a
}
function Rl(a) {
    return new T(a)
}
function Sl(a) {
    var b = new El(a);
    a = Tl(new Ol, b);
    b = Ll(b);
    if ("\x3cend\x3e" !== b.type)
        throw new Gl(b);
    return a
}
function Tl(a, b) {
    var c = Ul(a, b), d = Ll(b), e = Pl(d);
    if (0 === e)
        return c;
    b.a = b.d;
    for (var f = Ul(a, b), g = [c, d, f], e = Pl(Ll(b)); 0 < e;) {
        for (; 2 < g.length && e <= Pl(g[g.length-2]);)
            f = g.pop(), d = g.pop(), c = g.pop(), g.push(Ql(d.value, c, f));
        g.push(b.next());
        g.push(Ul(a, b));
        e = Pl(Ll(b))
    }
    c = g.length-1;
    for (d = g[c]; 1 < c;)
        d = Ql(g[c-1].value, g[c-2], d), c -= 2;
    return d
}
function Vl(a, b) {
    var c;
    c = Ll(b);
    if ("(" === c.value)
        Fl(b, "("), c = Tl(a, b), Fl(b, ")");
    else {
        b.a = b.d;
        var d = c.type;
        if ("Identifier" === d)
            c = new vl(c.value);
        else if ("String" === d || "Numeric" === d)
            c = Rl(c.value);
        else if ("Boolean" === d)
            c = Rl("true" === c.value);
        else if ("Null" === d)
            c = Rl(null);
        else 
            throw new Gl(c);
    }
    d = Ll(b);
    if ("(" === d.value) {
        if (!(c instanceof vl))
            throw new Gl(d);
        d = [];
        Fl(b, "(");
        if (!b.match(")"))
            for (; ;) {
                d.push(Tl(a, b));
                if (b.match(")"))
                    break;
                    Fl(b, ",")
                }
        b.a = b.d;
        c = new rl(c, d)
    } else 
        for (; "." === d.value;) {
            d = b;
            Fl(d, ".");
            d = d.next();
            if ("Identifier" !== d.type && "Keyword" !== d.type && "Boolean" !== d.type && "Null" !== d.type)
                throw new Gl(d);
                c = new Cl(c, new vl(String(d.value)));
                d = Ll(b)
        }
    return c
}
function Ul(a, b) {
    var c, d = Ll(b);
    if ("Punctuator" !== d.type)
        c = Vl(a, b);
    else if ("!" === d.value || "-" === d.value || "+" === d.value) {
        b.a = b.d;
        c = Ul(a, b);
        if ("!" === d.value)
            d = new Dl(c);
        else if (c instanceof T)
            d = "+" === d.value ? Rl( + c.a()) : Rl( - c.a());
        else 
            throw new Gl(d);
            c = d
    } else 
        c = Vl(a, b);
    return c
};
function U(a, b) {
    var c;
    s(b) && (c = b.kb());
    return a.a(c, Wl, b)
}
var Wl = {
    concat: function(a) {
        for (var b = "", c = 0, d = arguments.length; c < d; ++c)
            b += String(arguments[c]);
        return b
    }
};
Wl.counter = function() {
    var a = 0;
    return function(b) {
        var c=++a;
        s(b) && (c += b);
        return c
    }
}();
Wl.extent = function(a, b, c, d, e, f) {
    e=!1;
    (f = s(f) ? this.get(f) : this.s()) && (e = Qd(f.R(), [a, b, c, d]));
    return e
};
Wl.fid = function(a) {
    var b=!1, c = this.Fa;
    if (s(c))
        for (var d = 0, e = arguments.length; d < e; ++d)
            if (arguments[d] === c) {
                b=!0;
                break
            }
    return b
};
Wl.like = function(a, b, c, d, e, f) {
    if ("." == c)
        throw Error('"." is an unsupported wildCard character for the "like" function');
    c = s(c) ? c : "*";
    d = s(d) ? d : ".";
    e = s(e) ? e : "!";
    b = b.replace(RegExp("\\" + e + "(.|$)", "g"), "\\$1");
    b = b.replace(RegExp("\\" + d, "g"), ".");
    b = b.replace(RegExp("\\" + c, "g"), ".*");
    b = b.replace(RegExp("\\\\.\\*", "g"), "\\" + c);
    b = b.replace(RegExp("\\\\\\.", "g"), "\\" + d);
    return RegExp(b, !1 === f ? "gi" : "g").test(a)
};
Wl.ieq = function(a, b) {
    return t(a) && t(b) ? a.toUpperCase() == b.toUpperCase() : a == b
};
Wl.ineq = function(a, b) {
    return t(a) && t(b) ? a.toUpperCase() != b.toUpperCase() : a != b
};
Wl.geometryType = function(a) {
    var b=!1, c = this.s();
    c && (b = c.S() === a);
    return b
};
Wl.renderIntent = function(a) {
    return this.na == a
};
Wl.intersects = function() {
    throw Error("Spatial function not implemented: intersects");
};
Wl.within = function() {
    throw Error("Spatial function not implemented: within");
};
Wl.contains = function() {
    throw Error("Spatial function not implemented: contains");
};
Wl.dwithin = function() {
    throw Error("Spatial function not implemented: dwithin");
};
function Xl() {};
function Yl(a) {
    this.fillColor = a.fillColor;
    this.ja = a.ja;
    this.strokeColor = a.strokeColor;
    this.T = a.T;
    this.ba = a.ba;
    this.zIndex = a.zIndex
}
D(Yl, Xl);
Yl.prototype.a = function(a) {
    return this.fillColor == a.fillColor && this.ja == a.ja && this.strokeColor == a.strokeColor && this.T == a.T && this.ba == a.ba && this.zIndex == a.zIndex
};
function Zl() {};
function $l(a) {
    a = a || {};
    this.a = null != a.color ? a.color instanceof ql ? a.color : new T(a.color) : new T(am);
    this.b = null != a.opacity ? a.opacity instanceof ql ? a.opacity : new T(a.opacity) : new T(bm);
    this.c = null != a.zIndex ? a.zIndex instanceof ql ? a.zIndex : new T(a.zIndex) : new T(cm)
}
D($l, Zl);
$l.prototype.Xa = function(a) {
    var b;
    a instanceof N && (b = a, a = (a = b.s()) ? a.S() : null);
    var c = null;
    if ("polygon" === a || "multipolygon" === a)
        a = U(this.a, b), c = Number(U(this.b, b)), b = Number(U(this.c, b)), c = new Yl({
        fillColor: a,
        ja: c,
        zIndex: b
    });
    return c
};
var am = "#ffffff", bm = 0.4, cm = 0;
function dm(a) {
    var b = null;
    s(a.filter) && (b = t(a.filter) ? Sl(a.filter) : a.filter);
    this.a = b;
    this.d = s(a.symbolizers) ? a.symbolizers : [];
    this.c = s(a.minResolution) ? a.minResolution : 0;
    this.b = s(a.maxResolution) ? a.maxResolution : Infinity
}
dm.prototype.Bb = k("d");
function em() {}
D(em, Zl);
function fm() {}
D(fm, Xl);
var gm = {
    Gg: "circle"
};
function hm(a) {
    this.type = a.type;
    this.size = a.size;
    this.fillColor = a.fillColor;
    this.ja = a.ja;
    this.strokeColor = a.strokeColor;
    this.T = a.T;
    this.ba = a.ba;
    this.zIndex = a.zIndex
}
D(hm, fm);
hm.prototype.a = function(a) {
    return this.type == a.type && this.size == a.size && this.fillColor == a.fillColor && this.ja == a.ja && this.strokeColor == a.strokeColor && this.T == a.T && this.ba == a.ba && this.zIndex == a.zIndex
};
function im(a) {
    this.color = a.color;
    this.opacity = a.opacity;
    this.width = a.width;
    this.zIndex = a.zIndex
}
D(im, Xl);
im.prototype.a = function(a) {
    return this.color == a.color && this.opacity == a.opacity && this.width == a.width && this.zIndex == a.zIndex
};
function jm(a) {
    a = a || {};
    this.a = null != a.color ? a.color instanceof ql ? a.color : new T(a.color) : new T(km);
    this.b = null != a.opacity ? a.opacity instanceof ql ? a.opacity : new T(a.opacity) : new T(lm);
    this.c = null != a.width ? a.width instanceof ql ? a.width : new T(a.width) : new T(mm);
    this.d = null != a.zIndex ? a.zIndex instanceof ql ? a.zIndex : new T(a.zIndex) : new T(nm)
}
D(jm, Zl);
jm.prototype.Xa = function(a) {
    var b;
    a instanceof N && (b = a, a = (a = b.s()) ? a.S() : null);
    var c = U(this.a, b), d = Number(U(this.b, b)), e = Number(U(this.c, b));
    b = Number(U(this.d, b));
    var f = null;
    if ("linestring" === a || "multilinestring" === a)
        f = new im({
            color: c,
            opacity: d,
            width: e,
            zIndex: b
        });
    else if ("polygon" === a || "multipolygon" === a)
        f = new Yl({
            strokeColor: c,
            T: d,
            ba: e,
            zIndex: b
        });
    return f
};
var km = "#696969", lm = 0.75, mm = 1.5, nm = 0;
function om(a) {
    this.c = s(a.type) ? a.type : pm;
    this.d = null != a.size ? a.size instanceof ql ? a.size : new T(a.size) : new T(qm);
    this.b = null != a.fill ? a.fill : null;
    this.a = null != a.stroke ? a.stroke : null;
    this.f = null != a.zIndex ? a.zIndex instanceof ql ? a.zIndex : new T(a.zIndex) : new T(rm)
}
D(om, em);
om.prototype.Xa = function(a) {
    var b;
    a instanceof N && (b = a, a = (a = b.s()) ? a.S() : null);
    var c = null;
    if ("point" === a || "multipoint" === a) {
        a = Number(U(this.d, b));
        var d, e;
        null !== this.b && (d = U(this.b.a, b), e = Number(U(this.b.b, b)));
        var f, g, h;
        null !== this.a && (f = U(this.a.a, b), g = Number(U(this.a.b, b)), h = Number(U(this.a.c, b)));
        b = Number(U(this.f, b));
        c = new hm({
            type: this.c,
            size: a,
            fillColor: d,
            ja: e,
            strokeColor: f,
            T: g,
            ba: h,
            zIndex: b
        })
    }
    return c
};
om.prototype.S = k("c");
var pm = "circle", qm = 5, rm = 0;
function sm(a) {
    this.b = s(a.rules) ? a.rules : [];
    this.a = s(a.symbolizers) ? a.symbolizers : []
}
var tm = null;
function um(a, b) {
    for (var c = a.length, d = Array(c), e = 0; e < c; ++e)
        d[e] = a[e].Xa(b);
    for (var c = [], f, g, h, l, n = 0, q = d.length; n < q; ++n)
        if (e = d[n], e instanceof Yl)
            if (s(e.strokeColor)&&!s(e.fillColor))
                if (g) {
                    for (h in e)
                        l = e[h], s(l) && (g[h] = l);
                        g = null
                } else 
                    f = e, c.push(f);
    else if (s(e.fillColor)&&!s(e.strokeColor))
        if (f) {
            for (h in e)
                l = e[h], s(l) && (f[h] = l);
                f = null
        } else 
            g = e, c.push(g);
    else 
        c.push(e);
    else 
        e && c.push(e);
    return c
};
function vm(a) {
    this.color = a.color;
    this.fontFamily = a.fontFamily;
    this.fontSize = a.fontSize;
    this.fontWeight = a.fontWeight;
    this.text = a.text;
    this.opacity = a.opacity;
    this.strokeColor = a.strokeColor;
    this.T = a.T;
    this.ba = a.ba;
    this.zIndex = a.zIndex
}
D(vm, Xl);
vm.prototype.a = function(a) {
    return this.color == a.color && this.fontFamily == a.fontFamily && this.fontSize == a.fontSize && this.fontWeight == a.fontWeight && this.opacity == a.opacity && this.strokeColor == a.strokeColor && this.T == a.T && this.ba == a.ba && this.zIndex == a.zIndex
};
function wm() {
    this.clear()
}
wm.prototype.clear = function() {
    this.a = {};
    this.b = new jl
};
wm.prototype.add = function(a) {
    var b = u(a).toString(), c = a.s();
    this.a[b] = a;
    null === c || ml(this.b, c.R(), a)
};
wm.prototype.remove = function(a, b) {
    var c = u(a).toString(), d = a.s();
    delete this.a[c];
    null !== d && (c = s(b) ? b : d.R(), this.b.remove(c, a))
};
function xm(a) {
    nf.call(this, a);
    this.b = s(a.style) ? a.style : null;
    this.a = new wm;
    this.ng = s(a.transformFeatureInfo) ? a.transformFeatureInfo : ym;
    this.d=!1
}
D(xm, nf);
function zm(a, b) {
    for (var c = Ed(), d, e, f = 0, g = b.length; f < g; ++f)
        d = b[f], a.a.add(d), e = d.s(), null === e || Ld(c, e.R()), G(d, Xd, a.r, !1, a), G(d, Zd, a.H, !1, a);
    K(a, new Am(Bm, b, [c]))
}
xm.prototype.r = function(a) {
    var b = a.target, c = [];
    null === a.a || c.push(a.a);
    var d = b.s();
    null !== d && (this.a.remove(b, a.a), this.a.add(b), c.push(d.R()));
    K(this, new Am(Cm, [b], c))
};
xm.prototype.H = function(a) {
    a = a.target;
    var b = a.s();
    null === b || K(this, new Am(Dm, [a], [b.R()]))
};
xm.prototype.clear = function() {
    this.a.clear();
    K(this, new Am(Em, [], []))
};
function Fm(a) {
    var b = Gm, c = a.a.a;
    if (s(b)) {
        a = [];
        for (var d in c)
            !0 === b(c[d]) && a.push(c[d])
    } else 
        a = qc(c);
    return a
}
function Hm(a, b, c, d) {
    return 1 == hl(a.ha(), a, c, d) ? null : pl({
        extent: b
    }, !1, [], a.a.b.b, void 0, !0)
}
function il(a, b, c, d) {
    function e(a) {
        var b = a.features, c = this.ha().da();
        null === c && (c = a.metadata.projection);
        a = Ie(c, d);
        for (var c = null, e = 0, n = b.length; e < n; ++e)
            c = b[e].s(), null === c || c.transform(a);
        zm(this, b)
    }
    if (t(b))
        ma(c.ne) ? c.ne(b, x(e, a)) : (b = c.Lb(b), e.call(a, b));
    else if (na(b))
        ma(c.me) ? c.me(b, x(e, a)) : (b = c.bc(b), e.call(a, b));
    else 
        throw Error("Data type not supported: " + b);
}
xm.prototype.Rc = function(a, b) {
    return a[1].zIndex - b[1].zIndex
};
function ym(a) {
    return Ma(a, function(a) {
        return u(a)
    }).join(", ")
}
function Gm(a) {
    return "selected" == a.na
}
function Am(a, b, c) {
    lb.call(this, a);
    this.features = b;
    this.a = c
}
D(Am, lb);
var Bm = "featureadd", Cm = "featurechange", Dm = "featureintentchange", Em = "featureremove";
function Im(a, b) {
    ok.call(this, a, b)
}
D(Im, ok);
function Jm(a, b) {
    ok.call(this, a, b);
    this.a = null;
    this.d = Re()
}
D(Jm, Im);
Jm.prototype.nd = function() {
    return null === this.a ? null : zj(this.a)
};
Jm.prototype.dd = k("d");
Jm.prototype.Sa = function(a) {
    var b = a.F, c = b.center, d = b.resolution, e = b.rotation, f = this.b.ha(), g = a.K;
    g[0] || g[1] || (b = f.b(a.extent, d, b.projection), null !== b && (g = b.state, 0 == g ? (Jc(b, "change", this.g, !1, this), Aj(b)) : 2 == g && (this.a = b)));
    if (null !== this.a) {
        var b = this.a, g = b.ca(), h = b.G(), l = this.d;
        Ve(l);
        Ze(l, a.size[0] / 2, a.size[1] / 2);
        af(l, e);
        $e(l, h / d, h / d);
        Ze(l, (g[0] - c[0]) / h, (c[1] - g[3]) / h);
        rk(a.attributions, b.d);
        sk(a, f)
    }
};
function Km(a, b) {
    ok.call(this, a, b);
    this.i = this.d = this.f = null;
    this.j = Re();
    this.q = NaN;
    this.e = this.a = null
}
D(Km, Im);
Km.prototype.nd = k("f");
Km.prototype.dd = k("j");
Km.prototype.Sa = function(a) {
    var b = a.F, c = b.projection, d = this.b, e = d.ha(), f = e.tileGrid;
    null === f && (f = Jj(c));
    var g = Bi(f.a, b.resolution, 0), h = f.va(g), l = f.G(g), n = b.center, q;
    l == b.resolution ? (n = vk(n, l, a.size), q = Od(n, l, b.rotation, a.size)) : q = a.extent;
    var r = Fj(f, q, l), y = h[0] * (r.d - r.a + 1), v = h[1] * (r.b - r.c + 1), B, C;
    null === this.f ? (B = Og("CANVAS"), B.width = y, B.height = v, C = B.getContext("2d"), this.f = B, this.d = [y, v], this.i = C) : (B = this.f, C = this.i, this.d[0] < y || this.d[1] < v ? (B.width = y, B.height = v, this.d = [y, v], this.a = null) : (y = this.d[0],
    v = this.d[1], g == this.q && this.a.a <= r.a && r.d <= this.a.d && this.a.c <= r.c && r.b <= this.a.b || (this.a = null)));
    var w, z;
    null === this.a ? (y/=h[0], v/=h[1], w = r.a - Math.floor((y - (r.d - r.a + 1)) / 2), z = r.c - Math.floor((v - (r.b - r.c + 1)) / 2), this.q = g, this.a = new db(w, w + y-1, z, z + v-1), this.e = Array(y * v), v = this.a) : (v = this.a, y = v.d - v.a + 1);
    B = {};
    B[g] = {};
    var O = [], F = x(e.$c, e, B, uk(function(a) {
        return null !== a && 2 == a.state
    }, e, c)), V = Ed(), Y = new db(0, 0, 0, 0), ba, J, Q;
    for (z = r.a; z <= r.d; ++z)
        for (Q = r.c; Q <= r.b; ++Q)
            J = e.Cb(g, z, Q, c), w = J.state, 2 == w || 4 == w || 3 ==
    w ? B[g][J.a.toString()] = J : (ba = f.uc(J.a, F, null, Y, V), ba || (O.push(J), ba = f.zc(J.a, Y, V), null === ba || F(g + 1, ba)));
    F = 0;
    for (ba = O.length; F < ba; ++F)
        J = O[F], z = h[0] * (J.a.x - v.a), Q = h[1] * (v.b - J.a.y), C.clearRect(z, Q, h[0], h[1]);
    var ua = Ma(rc(B), Number);
    Wa(ua);
    var va = e.H, O = Pd(Dj(f, new $a(g, v.a, v.b), V)), ha, ka, ca, Xa, Ga, Fb, F = 0;
    for (ba = ua.length; F < ba; ++F)
        if (ha = ua[F], h = f.va(ha)
            , Xa = B[ha], ha == g)for (ca in Xa)
        J = Xa[ca], ka = (J.a.y - v.c) * y + (J.a.x - v.a), this.e[ka] != J && (z = h[0] * (J.a.x - v.a), Q = h[1] * (v.b - J.a.y), w = J.state, 4 != w && 3 != w && va || C.clearRect(z,
    Q, h[0], h[1]), 2 == w && C.drawImage(J.d(), z, Q), this.e[ka] = J);
    else 
        for (ca in ha = f.G(ha) / l, Xa)
            for (J = Xa[ca], ka = Dj(f, J.a, V)
                , z = (ka[0] - O[0]) / l, Q = (O[1] - ka[3]) / l, Fb = ha * h[0], Ga = ha * h[1], w = J.state, 4 != w && va || C.clearRect(z, Q, Fb, Ga), 2 == w && C.drawImage(J.d(), z, Q, Fb, Ga), J = Ej(f, ka, g, Y), w = Math.max(J.a, v.a), Q = Math.min(J.d, v.d), z = Math.max(J.c, v.c), J = Math.min(J.b, v.b);
    w <= Q;
    ++w)for (Ga = z; Ga <= J; ++Ga)
        ka = (Ga - v.c) * y + (w - v.a), this.e[ka] = void 0;
    tk(a.hc, e, g, r);
    wk(a, e, f, c, q, g, d.a());
    qk(a, e);
    sk(a, e);
    c = this.j;
    Ve(c);
    Ze(c, a.size[0] / 2, a.size[1] /
    2);
    af(c, b.rotation);
    $e(c, l / b.resolution, l / b.resolution);
    Ze(c, (O[0] - n[0]) / l, (n[1] - O[1]) / l)
};
function Lm() {
    this.v = 0;
    this.c = {};
    this.b = this.a = null
}
m = Lm.prototype;
m.clear = function() {
    this.v = 0;
    this.c = {};
    this.b = this.a = null
};
function Mm(a, b) {
    return a.c.hasOwnProperty(b)
}
m.forEach = function(a, b) {
    for (var c = this.a; null !== c;)
        a.call(b, c.Va, c.Zb, this), c = c.xa
};
m.get = function(a) {
    a = this.c[a];
    if (a === this.b)
        return a.Va;
    a === this.a ? (this.a = this.a.xa, this.a.bb = null) : (a.xa.bb = a.bb, a.bb.xa = a.xa);
    a.xa = null;
    a.bb = this.b;
    this.b = this.b.xa = a;
    return a.Va
};
m.ka = k("v");
m.Ga = function() {
    var a = Array(this.v), b = 0, c;
    for (c = this.b; null !== c; c = c.bb)
        a[b++] = c.Zb;
    return a
};
m.Ha = function() {
    var a = Array(this.v), b = 0, c;
    for (c = this.b; null !== c; c = c.bb)
        a[b++] = c.Va;
    return a
};
m.pop = function() {
    var a = this.a;
    delete this.c[a.Zb];
    null !== a.xa && (a.xa.bb = null);
    this.a = a.xa;
    null === this.a && (this.b = null);
    --this.v;
    return a.Va
};
function Nm(a, b, c) {
    c = {
        Zb: b,
        xa: null,
        bb: a.b,
        Va: c
    };
    null === a.b ? a.a = c : a.b.xa = c;
    a.b = c;
    a.c[b] = c;
    ++a.v
};
function Om(a) {
    Lm.call(this);
    this.d = s(a) ? a : 2048
}
D(Om, Lm);
function Pm(a, b) {
    for (var c, d; a.ka() > a.d&&!(c = a.a.Va, d = c.a.z.toString(), d in b && b[d].contains(c.a)
        );
    )a.pop()
};
function Qm() {
    I.call(this);
    this.bounds = this.u = null
}
D(Qm, Td);
Qm.prototype.R = function() {
    if (null === this.bounds) {
        for (var a = Ed(), b = this.u, c = 0, d = b.length; c < d; ++c)
            Ld(a, b[c].R());
        this.bounds = a
    }
    return this.bounds
};
Qm.prototype.k = function() {
    for (var a = this.u.length, b = Array(a), c = 0; c < a; ++c)
        b[c] = this.u[c].k();
    return b
};
Qm.prototype.b = function(a) {
    this.bounds = null;
    for (var b = Ed(), c = this.u, d = c.length-1; 0 <= d; --d) {
        var e = c[d];
        Ld(b, e !== a.target || null === a.a ? e.R() : a.a)
    }
    K(this, new Ud("change", this, b))
};
Qm.prototype.transform = function(a) {
    for (var b = this.u, c = 0, d = b.length; c < d; ++c)
        b[c].transform(a);
    this.bounds = null
};
function Rm(a) {
    I.call(this);
    this.d = a;
    this.b = null
}
D(Rm, Td);
m = Rm.prototype;
m.get = function(a, b) {
    return this.k()[a][b]
};
m.k = k("d");
m.ka = function() {
    return this.k().length
};
m.R = function() {
    if (null === this.b) {
        for (var a = this.k(), b = Ed(), c = 0, d = a.length; c < d; ++c)
            Fd(b, a[c]);
        this.b = b
    }
    return this.b
};
m.S = aa("linestring");
m.qc = function(a) {
    for (var b = this.k(), c = Infinity, d = 0, e = 1, f = b.length; e < f; d = e++)
        c = Math.min(c, Ad(a, vd(a, [b[d], b[e]])));
    return Math.sqrt(c)
};
m.oa = function(a) {
    var b = this.b;
    this.b = null;
    this.d = a;
    K(this, new Ud("change", this, b))
};
m.transform = function(a) {
    for (var b = this.k(), c, d = 0, e = b.length; d < e; ++d)
        c = b[d], a(c, c, c.length);
    this.oa(b)
};
function Sm(a) {
    Qm.call(this);
    var b = a.length;
    this.u = Array(b);
    for (var c = 0; c < b; ++c) {
        var d = new Rm(a[c]);
        this.u[c] = d;
        G(d, "change", this.b, !1, this)
    }
}
D(Sm, Qm);
Sm.prototype.S = aa("multilinestring");
Sm.prototype.qc = function(a) {
    for (var b = Infinity, c = 0, d = this.u.length; c < d; ++c)
        b = Math.min(b, this.u[c].qc(a));
    return b
};
function Tm(a) {
    I.call(this);
    this.d = a;
    this.b = null
}
D(Tm, Td);
m = Tm.prototype;
m.get = function(a) {
    return this.k()[a]
};
m.R = function() {
    if (null === this.b) {
        var a = this.get(0), b = this.get(1);
        this.b = [a, b, a, b]
    }
    return this.b
};
m.k = k("d");
m.S = aa("point");
m.oa = function(a) {
    var b = this.b;
    this.b = null;
    this.d = a;
    K(this, new Ud("change", this, b))
};
m.transform = function(a) {
    var b = this.k();
    a(b, b, b.length);
    this.oa(b)
};
function Um(a) {
    Qm.call(this);
    var b = a.length;
    this.u = Array(b);
    for (var c = 0; c < b; ++c) {
        var d = new Tm(a[c]);
        this.u[c] = d;
        G(d, "change", this.b, !1, this)
    }
}
D(Um, Qm);
Um.prototype.S = aa("multipoint");
function Vm(a) {
    Rm.call(this, a)
}
D(Vm, Rm);
function Wm(a) {
    for (var b = a.length, c = 0, d = a[b-1], e = d[0], d = d[1], f, g, h = 0; h < b; ++h)
        g = a[h], f = g[0], g = g[1], c += (f - e) * (g + d), e = f, d = g;
    return 0 < c
}
Vm.prototype.S = aa("linearring");
Vm.prototype.ib = function(a) {
    var b = a[0];
    a = a[1];
    var c = this.k(), d=!1, e, f, g, h, l = c.length, n = 0;
    for (h = l-1; n < l; h = n++)
        e = c[n][0], f = c[n][1], g = c[h][0], h = c[h][1], (e = f > a != h > a && b < (g - e) * (a - f) / (h - f) + e) && (d=!d);
    return d
};
function Xm(a) {
    I.call(this);
    this.c = null;
    var b = a.length;
    this.a = Array(b);
    for (var c, d = 0; d < b; ++d)
        c = a[d], 0 === d ? Wm(c) || c.reverse() : Wm(c) && c.reverse(), c = new Vm(c), G(c, "change", this.zf, !1, this), this.a[d] = c
}
D(Xm, Td);
m = Xm.prototype;
m.R = function() {
    return this.a[0].R()
};
m.k = function() {
    for (var a = this.a.length, b = Array(a), c = 0; c < a; ++c)
        b[c] = this.a[c].k();
    return b
};
m.S = aa("polygon");
m.zf = function(a) {
    var b = null, b = a.target === this.a[0] ? a.a: this.R();
    K(this, new Ud("change", this, b))
};
m.ib = function(a) {
    for (var b = this.a, c, d = 0, e = b.length; d < e && (c = b[d].ib(a), 0 < d && (c=!c), c);
    ++d);
    return c
};
m.transform = function(a) {
    for (var b = this.a, c = 0, d = b.length; c < d; ++c)
        b[c].transform(a)
};
function Ym(a) {
    Qm.call(this);
    var b = a.length;
    this.u = Array(b);
    for (var c = 0; c < b; ++c) {
        var d = new Xm(a[c]);
        this.u[c] = d;
        G(d, "change", this.b, !1, this)
    }
}
D(Ym, Qm);
Ym.prototype.S = aa("multipolygon");
Ym.prototype.ib = function(a) {
    for (var b=!1, c = 0, d = this.u.length; c < d; ++c)
        if (this.u[c].ib(a)) {
            b=!0;
            break
        }
    return b
};
function Zm(a) {
    this.url = a.url;
    this.width = a.width;
    this.height = a.height;
    this.opacity = a.opacity;
    this.rotation = a.rotation;
    this.xOffset = a.xOffset;
    this.yOffset = a.yOffset;
    this.zIndex = a.zIndex
}
D(Zm, fm);
Zm.prototype.a = function(a) {
    return this.url == a.url && this.width == a.width && this.height == a.height && this.opacity == a.opacity && this.rotation == a.rotation && this.xOffset == a.xOffset && this.yOffset == a.yOffset && this.zIndex == a.zIndex
};
function $m(a, b, c) {
    a = a.getContext("2d");
    this.f = b;
    var d = [1, 0, 0], e = d[0], f = d[1], g = d[2];
    d[0] = e * b[0] + f * b[4] + g * b[8];
    d[1] = e * b[1] + f * b[5] + g * b[9];
    d[2] = e * b[2] + f * b[6] + g * b[10];
    this.b = 1 / Math.sqrt(d[0] * d[0] + d[1] * d[1]);
    this.d = a;
    this.g = c;
    this.a = {};
    this.e = {};
    this.c = [0, 0]
}
function an(a) {
    if (a instanceof Qm) {
        a = a.u;
        for (var b = a.length, c = [], d = 0; d < b; ++d)
            c.push.apply(c, an(a[d]));
        return c
    }
    c = a.S();
    if ("point" == c)
        return [[a.get(0), a.get(1), 0]];
    if ("polygon" == c) {
        if (null === a.c) {
            var c = Nd(a.R())[1], e = a.a[0].k(), d = [], f = 0, g, h, l;
            for (g = e.length-1; 1 <= g; --g)
                if (h = e[g], l = e[g-1], h[1] >= c && l[1] <= c || h[1] <= c && l[1] >= c)
                    h = (c - h[1]) / (l[1] - h[1]) * (l[0] - h[0]) + h[0], d.push(h);
            d.sort();
            for (g = d.length-1; 1 <= g; --g)
                e = Math.abs(d[g] - d[g-1]), e > f && (h = (d[g] + d[g-1]) / 2, a.ib([h, c]) && (f = e, b = h));
            a.c = [b, c]
        }
        a = a.c;
        return [[a[0],
        a[1], 0]]
    }
    throw Error("Label rendering not implemented for geometry type: " + c);
}
function bn(a, b) {
    var c = a.url, d = cn[c], e=!1;
    if (!s(d))
        e=!0, d = Og("IMG"), Jc(d, "error", x(dn, null, b), !1, bn), Jc(d, "load", x(en, null, b), !1, bn), d.setAttribute("src", c);
    else if (null !== d) {
        var c = a.width, f = a.height;
        s(c) && s(f) ? (d.width = c, d.height = f) : s(c) ? (d.height*=c / d.width, d.width = c) : s(f) && (d.width*=f / d.height, d.height = f)
    }
    return e ? null : d
}
var cn = {};
function dn(a, b) {
    if (s(b)) {
        var c = b.target.getAttribute("src");
        cn[c] = null;
        en(a, b)
    }
}
function en(a, b) {
    if (s(b)) {
        var c = b.target.getAttribute("src");
        cn[c] = b.target
    }
    s(a) && a()
};
function fn(a, b) {
    ok.call(this, a, b);
    this.i = Og("CANVAS");
    this.ga = this.i.getContext("2d");
    this.H = Re();
    this.ea = Og("CANVAS");
    this.Na = Re();
    this.a = new Om(gn);
    G(b, [Bm, Cm, Em, Dm], this.jf, !1, this);
    this.d = null;
    this.A = 0;
    this.O = null;
    this.q = this.j=!1;
    this.f = null;
    this.W = new db(NaN, NaN, NaN, NaN);
    this.r = x(function() {
        this.j=!0;
        cj(a.e)
    }, this)
}
D(fn, Im);
m = fn.prototype;
m.nd = k("i");
m.dd = k("H");
m.Ya = function(a, b) {
    this.od(a, function(a, d) {
        b((0, d.ng)(a), d)
    })
};
m.od = function(a, b, c) {
    var d = this.c.e, e = [], f = this.b;
    a = ej(d, a);
    var g = Ij(this.f, a, 0).toString();
    if (Mm(this.a, g)) {
        var h = this.a.get(g), g = h[1], l = h[2], h = h[3], n = l[0] / 2, l = l[1] / 2, l = Dd([[a[0] - n, a[1] - l], [a[0] + n, a[1] + l]]), d = Hm(f, l, d.a().N().da());
        if (null === d) {
            s(c) && p.setTimeout(function() {
                c()
            }, 0);
            return 
        }
        var q, r, y, v;
        for (v in d)
            if (l = d[v], "hidden" != l.na)
                if (n = l.s(), q = n.S()
                    , "point" === q || "multipoint" === q)for (r = u(l), q = g[r], r = h[r], y = q[0] / 2, q = q[1] / 2, q = Dd([[a[0] - y - r[0], a[1] - q + r[1]], [a[0] + y - r[0], a[1] + q + r[1]]])
            , n = n.k(), ia(n[0]) ||
        (n = [n]), r = n.length-1;
        0 <= r;
        --r) {
            if (Id(q, n[r])) {
                e.push(l);
                break
            }
        } else 
            ma(n.ib) ? n.ib(a) && e.push(l) : ma(n.qc) && 2 * n.qc(a) <= g[u(l)][0] && e.push(l)
    }
    p.setTimeout(function() {
        b(e, f)
    }, 0)
};
m.jf = function(a) {
    if (s(this.e)) {
        a = a.a;
        var b = this.e, c = this.a, d = a.length, e;
        if (0 < d)
            for (var f = 0; f < d; ++f) {
                var g = e = a[f].slice(), h = this.A * b / 2;
                g[0] -= h;
                g[1] -= h;
                g[2] += h;
                g[3] += h;
                g = c;
                e = Ej(this.f, e, 0);
                for (var h = g.ka(), l = void 0; h--;)
                    l = g.a.Zb, e.contains(ab(l)) ? g.pop() : g.get(l)
                } else 
                    c.clear()
        }
    this.r()
};
m.Sa = function(a) {
    var b = a.F, c = b.resolution, d = b.projection, e = a.extent, f = this.b, g = this.f, h = [512, 512], l=!a.K[0]&&!a.K[1];
    if (l) {
        var n = 0.14929107086948487, q = d.a();
        q && (n/=q);
        var r = Math.max(c, n);
        r !== this.e && (g = new Bj({
            origin: [0, 0],
            projection: d,
            resolutions: [r],
            tileSize: h
        }), this.a.clear(), this.f = g)
    }
    if (null !== g) {
        var y = g.G(0);
        l && Fj(g, e, y, this.W);
        var v = this.H, B = this.W, C, w = g, z = w.Ib(0), O = w.G(0), F = w.va(0);
        C = Hd(z[0] + B.a * F[0] * O, z[0] + (B.d + 1) * F[0] * O, z[1] + B.c * F[1] * O, z[1] + (B.b + 1) * F[1] * O, void 0);
        var V = Pd(C);
        Ve(v);
        Ze(v,
        a.size[0] / 2, a.size[1] / 2);
        $e(v, y / c, y / c);
        af(v, b.rotation);
        Ze(v, (V[0] - b.center[0]) / y, (b.center[1] - V[1]) / y);
        if (this.j || this.e !== y ||!Kd(this.O, C)) {
            null === this.d && (this.d = Og("CANVAS"), this.d.width = h[0], this.d.height = h[1]);
            var Y = this.ea, ba = h[0] * (B.d - B.a + 1), J = h[1] * (B.b - B.c + 1), Q = this.Na, ua = ba / 2, va = J / 2;
            Ve(Q);
            Ze(Q, ua, va);
            $e(Q, 1 / y, -1 / y);
            Ze(Q, - (V[0] + ua * y), - (V[1] - va * y));
            Y.width = ba;
            Y.height = J;
            var ha = new $m(Y, Q, this.r), ka = this.i;
            ka.width = ba;
            ka.height = J;
            var ca = this.ga, Xa = {}, Ga = {}, Fb = {}, bh = 15 * y, Af, dc, xc, fh, gh, Kj=!1,
            En=!1, ec, hh, ih, Fn, jh, kh;
            fh = B.a;
            a:
            for (; fh <= B.d; ++fh)
                for (gh = B.c; gh <= B.b; ++gh)
                    if (dc = new $a(0, fh, gh), xc = dc.toString()
                        , Mm(this.a, xc))Ga[xc] = dc;
            else if (l) {
                ec = Dj(g, dc);
                ec[0] -= bh;
                ec[2] += bh;
                ec[1] -= bh;
                ec[3] += bh;
                kh=!1;
                jh = Hm(f, ec, d, this.r);
                if (null === jh) {
                    Kj=!0;
                    break a
                }
                kh = kh ||!uc(jh);
                Ac(Xa, jh);
                kh && (Fb[xc] = dc)
            } else 
                En=!0;
            this.j = En;
            var Bf = {}, ld = [], Lj = f.b, Gn, Cf, Hn, Df, Mj, Ef, In, ie, Nj, lh, Oj;
            for (Gn in Xa) {
                Df = Xa[Gn];
                Mj = Df.Bb();
                if (null === Mj) {
                    null === Lj && (null === tm && (tm = new sm({
                        rules: [new dm({
                            filter: new rl(new vl("renderIntent"),
                            [new T("select")]),
                            symbolizers: [new om({
                                fill: new $l({
                                    color: "#ffffff",
                                    opacity: 0.7
                                }),
                                stroke: new jm({
                                    color: "#696969",
                                    opacity: 0.9,
                                    width: 2
                                })
                            }), new $l({
                                color: "#ffffff",
                                opacity: 0.7
                            }), new jm({
                                color: "#696969",
                                opacity: 0.9,
                                width: 2
                            })]
                        })],
                        symbolizers: [new om({
                            fill: new $l,
                            stroke: new jm
                        }), new $l, new jm]
                    })), Lj = tm);
                    for (var Jn = Lj, Kn = Df, Ln = y, Mn = Jn.b, mh = [], Nn=!1, je = void 0, Pj = 0, ks = Mn.length; Pj < ks; ++Pj) {
                        var je = Mn[Pj], Qj = Ln >= je.c && Ln < je.b;
                        Qj && null !== je.a && (Qj=!!U(je.a, Kn));
                        Qj && (Nn=!0, mh.push.apply(mh, je.Bb()))
                    }
                    Nn || (mh =
                    Jn.a);
                    Ef = um(mh, Kn)
                } else 
                    Ef = um(Mj, Df);
                In = Ef.length;
                for (Cf = 0; Cf < In; ++Cf) {
                    ie = Ef[Cf];
                    for (Hn in Bf)
                        if (Nj = ld[Bf[Hn]][1], ie.a(Nj)
                            ) {
                        ie = Nj;
                        break
                    }
                    lh = u(ie);
                    lh in Bf || (Bf[lh] = ld.length, ld.push([[], ie, []]));
                    Oj = ld[Bf[lh]];
                    Oj[0].push(Df);
                    ie instanceof vm && Oj[2].push(Ef[Cf].text)
                }
            }
            ld.sort(f.Rc);
            Fn = ld.length;
            for (ih = 0; ih < Fn; ++ih) {
                hh = ld[ih];
                var nh = ha, oh = hh[0], ub = hh[1], ls = hh[2], Rj=!1;
                if (ub instanceof fm) {
                    var Ja = nh, On = oh, fc = ub, Ff = Ja.d, gc = void 0, Sj = void 0, ph = void 0, Pn = void 0, qh = void 0, ke = void 0, rh = void 0, sh = void 0, Tj =
                    void 0, th = void 0, Qn = void 0, Uj = void 0, Gf = void 0, uh = 0, vh = 0;
                    if (fc instanceof hm) {
                        var Rn = void 0;
                        if ("circle" === fc.type) {
                            var md = fc, Sn = md.ba || 0, Vj = md.size + 2 * Sn + 1, Tn = Vj / 2, wh = Og("CANVAS"), Lb = wh.getContext("2d"), Wj = md.fillColor, Xj = md.strokeColor, ms = 2 * Math.PI;
                            wh.height = Vj;
                            wh.width = Vj;
                            Wj && (Lb.fillStyle = Wj);
                            Xj && (Lb.lineWidth = Sn, Lb.strokeStyle = Xj, Lb.lineCap = "round", Lb.lineJoin = "round");
                            Lb.beginPath();
                            Lb.arc(Tn, Tn, md.size / 2, 0, ms, !0);
                            Wj && (Lb.globalAlpha = md.ja, Lb.fill());
                            Xj && (Lb.globalAlpha = md.T, Lb.stroke());
                            Rn = wh
                        } else 
                            throw Error("Unsupported shape type: " +
                            fc);
                        gc = Rn;
                        Sj = 1
                    } else if (fc instanceof Zm)
                        gc = bn(fc, Ja.g), Sj = fc.opacity, uh = fc.xOffset, vh = fc.yOffset;
                    else 
                        throw Error("Unsupported symbolizer: " + fc);
                    if (null === gc)
                        Rj=!0;
                    else {
                        var ns = Math.floor(gc.width / 2), os = Math.floor(gc.height / 2), Un = gc.width * Ja.b, Vn = gc.height * Ja.b, ps = uh * Ja.b, qs = vh * Ja.b;
                        Ff.save();
                        Ff.setTransform(1, 0, 0, 1, - ns, - os);
                        Ff.globalAlpha = Sj;
                        ph = 0;
                        for (Pn = On.length; ph < Pn; ++ph)
                            if (qh = On[ph], "hidden" != qh.na)
                                for (ke = u(qh), rh = Ja.a[ke], Ja.a[ke] = s(rh) 
                                    ? [Math.max(rh[0], Un), Math.max(rh[1], Vn)] : [Un, Vn], Ja.e[ke] =
                        [uh * Ja.b, vh * Ja.b], Ja.c = [Math.max(Ja.c[0], Ja.a[ke][0] + 2 * Math.abs(ps)), Math.max(Ja.c[1], Ja.a[ke][1] + 2 * Math.abs(qs))], sh = qh.s(), Tj = sh instanceof Tm ? [sh] : sh.u, th = 0, Qn = Tj.length;
                        th < Qn;
                        ++th)Uj = Tj[th], Gf = [Uj.get(0), Uj.get(1), 0], Ye(Ja.f, Gf, Gf), Ff.drawImage(gc, Math.round(Gf[0] + uh), Math.round(Gf[1] + vh), gc.width, gc.height);
                        Ff.restore();
                        Rj=!1
                    }
                } else if (ub instanceof im) {
                    var yc = nh, Wn = oh, Yj = ub, hc = yc.d, xh = void 0, Xn = void 0, yh = void 0, zh = void 0, le = void 0, Ah = void 0, Zj = void 0, Bh = void 0, Yn = void 0, ak = void 0, bk = void 0, Hf =
                    void 0, Zn = void 0, $n = void 0, ic = [NaN, NaN, 0], me = [NaN, NaN], ne = [NaN, NaN];
                    hc.globalAlpha = Yj.opacity;
                    hc.strokeStyle = Yj.color;
                    hc.lineWidth = Yj.width;
                    hc.lineCap = "round";
                    hc.lineJoin = "round";
                    $n = hc.lineWidth * yc.b;
                    hc.beginPath();
                    xh = 0;
                    for (Xn = Wn.length; xh < Xn; ++xh)
                        if (yh = Wn[xh], "hidden" != yh.na)
                            for (zh = u(yh), le = s(yc.a[zh]) 
                                ? yc.a[zh] : [0], le[0] = Math.max(le[0], $n), yc.a[zh] = le, yc.c = [Math.max(le[0], yc.c[0]), Math.max(le[0], yc.c[1])], Ah = yh.s(), Zj = Ah instanceof Rm ? [Ah] : Ah.u, Bh = 0, Yn = Zj.length;
                                Bh < Yn;
                                ++Bh)for (ak = Zj[Bh].k(), Hf = 0,
                                Zn = ak.length; Hf < Zn; ++Hf)
                                    if (bk = ak[Hf], ic[0] = bk[0], ic[1] = bk[1], Ye(yc.f, ic, ic)
                                        , 0 === Hf)ne[0] = NaN, ne[1] = NaN, hc.moveTo(ic[0], ic[1]);
                                    else if (me[0] = Math.round(ic[0]), me[1] = Math.round(ic[1])
                                        , me[0] !== ne[0] || me[1] !== ne[1])hc.lineTo(ic[0], ic[1]), ne[0] = me[0], ne[1] = me[1];
                                        hc.stroke()
                } else if (ub instanceof Yl) {
                    var ao = nh, bo = oh, Ka = ao.d, Ch = ub.strokeColor, co = ub.ba, Dh = ub.T, If = ub.fillColor, Eh = ub.ja, oe = void 0, Jf = void 0, ck = void 0, Fh = void 0, dk = void 0, Kf = void 0, ek = void 0, eo = void 0, fk = void 0, fo = void 0, gk = void 0, hk = void 0, Lf =
                    void 0, go = void 0, ik = void 0, jc = [NaN, NaN, 0], pe = [NaN, NaN], qe = [NaN, NaN];
                    Ch && (Ka.strokeStyle = Ch, co && (Ka.lineWidth = co), Ka.lineCap = "round", Ka.lineJoin = "round");
                    If && (Ka.fillStyle = If);
                    Ka.beginPath();
                    Jf = 0;
                    for (ck = bo.length; Jf < ck; ++Jf)
                        if (ik = bo[Jf], "hidden" != ik.na)
                            for (Fh = ik.s(), dk = Fh instanceof Xm ? [Fh] : Fh.u, Kf = 0, ek = dk.length; Kf < ek; ++Kf)
                                if (eo = dk[Kf], fk = eo.a, fo = fk.length, 0 < fo) {
                                    gk = fk[0].k();
                                    Lf = 0;
                                    for (go = gk.length; Lf < go; ++Lf)
                                        if (hk = gk[Lf], jc[0] = hk[0], jc[1] = hk[1], Ye(ao.f, jc, jc)
                                            , 0 === Lf)qe[0] = NaN, qe[1] = NaN, Ka.moveTo(jc[0],
                                            jc[1]);
                                        else if (pe[0] = Math.round(jc[0]), pe[1] = Math.round(jc[1])
                                            , pe[0] !== qe[0] || pe[1] !== qe[1])Ka.lineTo(jc[0], jc[1]), qe[0] = pe[0], qe[1] = pe[1];
                                            If && Ch && (Eh !== oe && (oe = Ka.globalAlpha = Eh), Ka.fill(), Dh !== oe && (oe = Ka.globalAlpha = Dh), Ka.stroke(), (Jf < ck-1 || Kf < ek-1) && Ka.beginPath())
                                }
                                If && Ch || (If ? (Eh !== oe && (Ka.globalAlpha = Eh), Ka.fill()) : (Dh !== oe && (Ka.globalAlpha = Dh), Ka.stroke()))
                } else if (ub instanceof vm) {
                    var ho = nh, io = oh, Va = ub, jo = ls, vb = ho.d, jk = void 0, kk = void 0, nd = void 0;
                    vb.fillStyle !== Va.color && (vb.fillStyle = Va.color);
                    vb.font = Va.fontWeight + " " + Va.fontSize + "px " + Va.fontFamily;
                    vb.globalAlpha = Va.opacity;
                    vb.textAlign = "center";
                    vb.textBaseline = "middle";
                    var ko=!1;
                    s(Va.strokeColor) && (ko=!0, vb.strokeStyle = Va.strokeColor, vb.lineWidth = Va.ba);
                    for (var Mf = 0, rs = io.length; Mf < rs; ++Mf)
                        if (jk = io[Mf], "hidden" != jk.na)
                            for (var kk = an(jk.s()), lk = 0, ss = kk.length; lk < ss; ++lk)
                                nd = kk[lk], Ye(ho.f, nd, nd), ko && (Va.T !== Va.opacity && (vb.globalAlpha = Va.T), vb.strokeText(jo[Mf], nd[0], nd[1]), Va.T !== Va.opacity && (vb.globalAlpha = Va.opacity)), vb.fillText(jo[Mf],
                                nd[0], nd[1])
                }
                if (Kj = Rj)
                    break
            }
            Kj || Ac(Ga, Fb);
            var ts = ha.a, mk = ha.c, us = ha.e;
            this.A = Math.max(mk[0] / y, mk[1] / y);
            for (xc in Ga)
                dc = Ga[xc], Mm(this.a, xc) ? Af = this.a.get(xc)[0] : (Af = this.d.cloneNode(!1), Af.getContext("2d").drawImage(Y, (B.a - dc.x) * h[0], (dc.y - B.b) * h[1]), Nm(this.a, xc, [Af, ts, mk, us])), ca.drawImage(Af, h[0] * (dc.x - B.a), h[1] * (B.b - dc.y));
            this.e = y;
            this.O = C;
            this.q || (this.q=!0, a.cb.push(x(this.$f, this)))
        }
    }
};
m.$f = function() {
    for (; this.a.ka() > this.a.d;)
        this.a.pop();
    this.q=!1
};
var gn = 128;
function hn(a, b) {
    xk.call(this, 0, b);
    this.a = Og("CANVAS");
    this.a.className = "ol-unselectable";
    Sg(a, this.a);
    this.c=!0;
    this.f = this.a.getContext("2d")
}
D(hn, xk);
hn.prototype.mc = function(a) {
    return a instanceof Ik ? new Jm(this, a) : a instanceof Jk ? new Km(this, a) : a instanceof xm ? new fn(this, a) : null
};
hn.prototype.wc = k("a");
hn.prototype.Jc = function(a) {
    if (null === a)
        this.c && (Zh(this.a, !1), this.c=!1);
    else {
        var b = a.size;
        if (this.a.width != b[0] || this.a.height != b[1])
            this.a.width = b[0], this.a.height = b[1];
        var c = this.f;
        c.clearRect(0, 0, b[0], b[1]);
        yk(a);
        var b = a.ma, d = a.Hc, e = a.F.resolution, f, g, h, l, n;
        f = 0;
        for (g = d.length; f < g; ++f)
            if (h = d[f], l = zk(this, h)
                , n = b[u(h)], n.visible&&!(1 != n.dc || e >= n.maxResolution || e < n.minResolution) && (l.Sa(a, n), h = l.nd(), null !== h))if (l = l.dd(), c.globalAlpha = n.opacity, 0 === a.F.rotation) {
            n = l[13];
            var q = h.width * l[0], r = h.height *
            l[5];
            c.drawImage(h, 0, 0, h.width, h.height, Math.round(l[12]), Math.round(n), Math.round(q), Math.round(r))
        } else 
            c.setTransform(l[0], l[1], l[4], l[5], l[12], l[13]), c.drawImage(h, 0, 0), c.setTransform(1, 0, 0, 1, 0, 0);
        this.c || (Zh(this.a, !0), this.c=!0);
        Bk(this, a)
    }
};
function jn(a, b) {
    var c;
    if (s(6)) {
        var d = Array(16);
        for (c = 0; 16 > c; ++c)
            d[c] = b[c].toFixed(6);
        c = d.join(",")
    } else 
        c = b.join(",");
    c = "matrix3d(" + c + ")";
    d = a.style;
    d.WebkitTransform = c;
    d.MozTransform = c;
    d.a = c;
    d.transform = c
};
function kn(a, b, c) {
    ok.call(this, a, b);
    this.target = c
}
D(kn, ok);
function ln(a, b) {
    var c = Og("DIV");
    c.style.position = "absolute";
    kn.call(this, a, b, c);
    this.a = null;
    this.d = Te()
}
D(ln, kn);
ln.prototype.Sa = function(a) {
    var b = a.F, c = b.center, d = b.resolution, e = b.rotation, f = this.a, g = this.b.ha(), h = a.K;
    h[0] || h[1] || (b = g.b(a.extent, d, b.projection), null !== b && (h = b.state, 0 == h ? (Jc(b, "change", this.g, !1, this), Aj(b)) : 2 == h && (f = b)));
    if (null !== f) {
        var h = f.ca(), l = f.G(), b = Re();
        Ve(b);
        Ze(b, a.size[0] / 2, a.size[1] / 2);
        af(b, e);
        $e(b, l / d, l / d);
        Ze(b, (h[0] - c[0]) / l, (c[1] - h[3]) / l);
        f != this.a && (c = zj(f, this), c.style.maxWidth = "none", c.style.position = "absolute", Qg(this.target), this.target.appendChild(c), this.a = f);
        Xe(b, this.d) ||
        (jn(this.target, b), Ue(this.d, b));
        rk(a.attributions, f.d);
        sk(a, g)
    }
};
function mn(a, b) {
    var c = Og("DIV");
    c.style.position = "absolute";
    kn.call(this, a, b, c);
    this.d=!0;
    this.e = 1;
    this.f = 0;
    this.a = {}
}
D(mn, kn);
mn.prototype.Sa = function(a, b) {
    if (b.visible) {
        var c = a.F, d = c.projection, e = this.b, f = e.ha(), g = f.tileGrid;
        null === g && (g = Jj(d));
        var h = Bi(g.a, c.resolution, 0), l = g.G(h), n = c.center, q;
        l == c.resolution ? (n = vk(n, l, a.size), q = Od(n, l, c.rotation, a.size)) : q = a.extent;
        var l = Fj(g, q, l), r = {};
        r[h] = {};
        var y = x(f.$c, f, r, uk(function(a) {
            return null !== a && 2 == a.state
        }, f, d)), v = Ed(), B = new db(0, 0, 0, 0), C, w, z, O;
        for (z = l.a; z <= l.d; ++z)
            for (O = l.c; O <= l.b; ++O)
                C = f.Cb(h, z, O, d), w = C.state, 2 == w ? r[h][C.a.toString()] = C : 3 != w && 4 != w && (w = g.uc(C.a, y, null,
        B, v), w || (C = g.zc(C.a, B, v), null === C || y(h + 1, C)));
        var F;
        if (this.f != f.c) {
            for (F in this.a)
                v = this.a[ + F], Tg(v.target);
            this.a = {};
            this.f = f.c
        }
        z = Ma(rc(r), Number);
        Wa(z);
        var y = {}, V;
        O = 0;
        for (C = z.length; O < C; ++O) {
            F = z[O];
            F in this.a ? v = this.a[F] : (v = Ij(g, n, F), v = new nn(g, v), y[F]=!0, this.a[F] = v);
            F = r[F];
            for (V in F)
                on(v, F[V]);
            pn(v)
        }
        V = Ma(rc(this.a), Number);
        Wa(V);
        var Y;
        C = Re();
        z = 0;
        for (O = V.length; z < O; ++z)
            if (F = V[z], v = this.a[F], F in r)
                if (Y = v.G(), w = v.e, Ve(C)
                    , Ze(C, a.size[0] / 2, a.size[1] / 2), af(C, c.rotation), $e(C, Y / c.resolution, Y / c.resolution),
        Ze(C, (w[0] - n[0]) / Y, (n[1] - w[1]) / Y), qn(v, C), F in y) {
            for (F -= 1; 0 <= F; --F)
                if (F in this.a) {
                    Rg(v.target, this.a[F].target);
                    break
                }
            0 > F && Sg(this.target, v.target)
        } else 
            a.K[0] || a.K[1] || rn(v, q, B);
            else 
                Tg(v.target), delete this.a[F];
    b.opacity != this.e && (Yh(this.target, b.opacity), this.e = b.opacity);
    b.visible&&!this.d && (Zh(this.target, !0), this.d=!0);
    tk(a.hc, f, h, l);
    wk(a, f, g, d, q, h, e.a());
    qk(a, f);
    sk(a, f)
} else 
    this.d && (Zh(this.target, !1), this.d=!1)
};
function nn(a, b) {
    this.target = Og("DIV");
    this.target.style.position = "absolute";
    this.d = a;
    this.c = b;
    this.e = Pd(Dj(a, b));
    this.g = a.G(b.z);
    this.b = {};
    this.a = null;
    this.f = Te()
}
function on(a, b) {
    var c = b.a, d = c.toString();
    if (!(d in a.b)) {
        var e = a.d.va(c.z), f = b.d(a), g = f.style;
        g.maxWidth = "none";
        g.position = "absolute";
        g.left = (c.x - a.c.x) * e[0] + "px";
        g.top = (a.c.y - c.y) * e[1] + "px";
        null === a.a && (a.a = document.createDocumentFragment());
        a.a.appendChild(f);
        a.b[d] = b
    }
}
function pn(a) {
    null !== a.a && (a.target.appendChild(a.a), a.a = null)
}
nn.prototype.G = k("g");
function rn(a, b, c) {
    var d = Ej(a.d, b, a.c.z, c);
    b = [];
    for (var e in a.b)
        c = a.b[e], d.contains(c.a) || b.push(c);
    var f, d = 0;
    for (f = b.length; d < f; ++d)
        c = b[d], e = c.a.toString(), Tg(c.d(a)), delete a.b[e]
}
function qn(a, b) {
    Xe(b, a.f) || (jn(a.target, b), Ue(a.f, b))
};
function sn(a, b) {
    xk.call(this, 0, b);
    this.a = Og("DIV");
    this.a.className = "ol-unselectable";
    var c = this.a.style;
    c.position = "absolute";
    c.width = "100%";
    c.height = "100%";
    Sg(a, this.a);
    this.c=!0
}
D(sn, xk);
sn.prototype.mc = function(a) {
    if (a instanceof Jk)
        a = new mn(this, a);
    else if (a instanceof Ik)
        a = new ln(this, a);
    else 
        return null;
    this.a.appendChild(a.target);
    return a
};
sn.prototype.Jc = function(a) {
    if (null === a)
        this.c && (Zh(this.a, !1), this.c=!1);
    else {
        var b = a.ma, c = a.Hc, d, e, f, g;
        d = 0;
        for (e = c.length; d < e; ++d)
            f = c[d], g = zk(this, f), f = a.ma[u(f)], 1 == f.dc && g.Sa(a, f);
        for (var h in this.d)
            h in b || (g = this.d[h], Tg(g.target));
        this.c || (Zh(this.a, !0), this.c=!0);
        yk(a);
        Bk(this, a)
    }
};
var tn = ["experimental-webgl", "webgl", "webkit-3d", "moz-webgl"];
function un(a, b) {
    var c, d, e = tn.length;
    for (d = 0; d < e; ++d)
        try {
            if (c = a.getContext(tn[d], b), null !== c)
                return c
    } catch (f) {}
    return null
}
var vn = function() {
    if (!("WebGLRenderingContext"in p))
        return !1;
    try {
        var a = Og("CANVAS");
        return null !== un(a)
    } catch (b) {
        return !1
    }
}();
function wn(a, b, c) {
    var d = b[0];
    b = b[1];
    c[0] = d * a[0] + b * a[4] + a[12];
    c[1] = d * a[1] + b * a[5] + a[13];
    return c
};
function xn(a, b) {
    ok.call(this, a, b);
    this.f = this.ra = null;
    this.e = void 0;
    this.t = Re();
    this.Aa = Te();
    this.A = new Float32Array(16);
    this.r = void 0;
    this.q = new Float32Array(16);
    this.O = void 0;
    this.H = new Float32Array(16);
    this.ga = void 0;
    this.W = new Float32Array(16);
    this.gb = void 0;
    this.Na = new Float32Array(16)
}
D(xn, ok);
function yn(a, b, c) {
    var d = a.c.b;
    if (s(a.e) && a.e == c)
        d.bindFramebuffer(36160, a.f);
    else {
        b.cb.push(sa(function(a, b, c) {
            a.isContextLost() || (a.deleteFramebuffer(b), a.deleteTexture(c))
        }, d, a.f, a.ra));
        b = d.createTexture();
        d.bindTexture(3553, b);
        d.texImage2D(3553, 0, 6408, c, c, 0, 6408, 5121, null);
        d.texParameteri(3553, 10240, 9729);
        d.texParameteri(3553, 10241, 9729);
        var e = d.createFramebuffer();
        d.bindFramebuffer(36160, e);
        d.framebufferTexture2D(36160, 36064, 3553, b, 0);
        a.ra = b;
        a.f = e;
        a.e = c
    }
}
function zn(a, b, c, d, e) {
    var f=!1;
    b !== a.r && (f = a.q, Ve(f), f[12] = b, f[13] = b, f[14] = b, f[15] = 1, a.r = b, f=!0);
    c !== a.O && (b = a.H, Ve(b), b[0] = c, b[5] = c, b[10] = c, b[15] = 1, f =- 0.5 * c + 0.5, b[12] = f, b[13] = f, b[14] = f, b[15] = 1, a.O = c, f=!0);
    d !== a.ga && (c = Math.cos(d), b = Math.sin(d), Se(a.W, 0.213 + 0.787 * c-0.213 * b, 0.213-0.213 * c + 0.143 * b, 0.213-0.213 * c-0.787 * b, 0, 0.715-0.715 * c-0.715 * b, 0.715 + 0.285 * c + 0.14 * b, 0.715-0.715 * c + 0.715 * b, 0, 0.072-0.072 * c + 0.928 * b, 0.072-0.072 * c-0.283 * b, 0.072 + 0.928 * c + 0.072 * b, 0, 0, 0, 0, 1), a.ga = d, f=!0);
    e !== a.gb && (Se(a.Na, 0.213 +
    0.787 * e, 0.213-0.213 * e, 0.213-0.213 * e, 0, 0.715-0.715 * e, 0.715 + 0.285 * e, 0.715-0.715 * e, 0, 0.072-0.072 * e, 0.072-0.072 * e, 0.072 + 0.928 * e, 0, 0, 0, 0, 1), a.gb = e, f=!0);
    f && (d = a.A, Ve(d), We(d, a.H, d), We(d, a.q, d), We(d, a.Na, d), We(d, a.W, d));
    return a.A
}
xn.prototype.n = function() {
    this.f = this.ra = null;
    this.e = void 0
};
function An(a, b) {
    xn.call(this, a, b);
    this.a = null
}
D(An, xn);
function Bn(a, b) {
    var c = zj(b), d = a.c.b, e = d.createTexture();
    d.bindTexture(3553, e);
    d.texImage2D(3553, 0, 6408, 6408, 5121, c);
    d.texParameteri(3553, 10242, 33071);
    d.texParameteri(3553, 10243, 33071);
    d.texParameteri(3553, 10241, 9729);
    d.texParameteri(3553, 10240, 9729);
    return e
}
An.prototype.Sa = function(a) {
    var b = this.c.b, c = a.F, d = c.center, e = c.resolution, f = c.rotation, g = this.a, h = this.ra, l = this.b.ha(), n = a.K;
    n[0] || n[1] || (c = l.b(a.extent, e, c.projection), null !== c && (n = c.state, 0 == n ? (Jc(c, "change", this.g, !1, this), Aj(c)) : 2 == n && (g = c, h = Bn(this, c), null === this.ra || a.cb.push(sa(function(a, b) {
        a.isContextLost() || a.deleteTexture(b)
    }, b, this.ra)))));
    null !== g && (b = this.c.wc(), Cn(this, b.width, b.height, d, e, f, g.ca()), d = this.t, Ve(d), $e(d, 1, -1), Ze(d, 0, -1), this.a = g, this.ra = h, rk(a.attributions, g.d), sk(a,
    l))
};
function Cn(a, b, c, d, e, f, g) {
    b*=e;
    c*=e;
    a = a.Aa;
    Ve(a);
    $e(a, 2 / b, 2 / c);
    af(a, - f);
    Ze(a, g[0] - d[0], g[1] - d[1]);
    $e(a, (g[2] - g[0]) / 2, (g[3] - g[1]) / 2);
    Ze(a, 1, 1)
};
function Dn(a) {
    this.a = a
}
Dn.prototype.ha = k("a");
function lo(a) {
    this.a = a
}
D(lo, Dn);
lo.prototype.S = aa(35632);
function mo(a) {
    this.a = a
}
D(mo, Dn);
mo.prototype.S = aa(35633);
function no() {
    this.a = "precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor\x3dtexture2D(e,a);}"
}
D(no, lo);
fa(no);
function oo() {
    this.a = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position\x3dvec4(b*d.xy+d.zw,0.,1.);a\x3dc;}"
}
D(oo, mo);
fa(oo);
function po(a, b) {
    this.c = a.getUniformLocation(b, "e");
    this.d = a.getUniformLocation(b, "d");
    this.a = a.getAttribLocation(b, "b");
    this.b = a.getAttribLocation(b, "c")
};
function qo(a) {
    this.a = s(a) ? a : []
}
function ro(a, b, c) {
    if (b != c) {
        var d = a.a, e = d.length, f;
        for (f = 0; f < e; f += 2)
            if (b <= d[f]) {
                d.splice(f, 0, b, c);
                so(a);
                return 
            }
        d.push(b, c);
        so(a)
    }
}
qo.prototype.clear = function() {
    this.a.length = 0
};
function so(a) {
    a = a.a;
    var b = a.length, c = 0, d;
    for (d = 0; d < b; d += 2)
        a[d] != a[d + 1] && (0 < c && a[c-2] <= a[d] && a[d] <= a[c-1] ? a[c-1] = Math.max(a[c-1], a[d + 1]) : (a[c++] = a[d], a[c++] = a[d + 1]));
    a.length = c
}
function to(a, b) {
    var c = a.a, d = c.length, e;
    for (e = 0; e < d; e += 2)
        b.call(void 0, c[e], c[e + 1])
}
qo.prototype.sb = function() {
    return 0 === this.a.length
};
function uo(a, b, c) {
    var d = a.a, e = d.length, f;
    for (f = 0; f < e; f += 2)
        if (!(c < d[f] || d[f + 1] < b)) {
            if (d[f] > c)
                break;
                if (b < d[f])
                    if (c == d[f])
                        break;
                    else if (c < d[f + 1]) {
                        d[f] = Math.max(d[f], c);
                        break
                    } else 
                        d.splice(f, 2), f -= 2, e -= 2;
        else if (b == d[f])
            if (c < d[f + 1]) {
                d[f] = c;
                break
            } else if (c == d[f + 1]) {
                d.splice(f, 2);
                break
            } else 
                d.splice(f, 2), f -= 2, e -= 2;
        else if (c < d[f + 1]) {
            d.splice(f, 2, d[f], b, c, d[f + 1]);
            break
        } else if (c == d[f + 1]) {
            d[f + 1] = b;
            break
        } else 
            d[f + 1] = b
    }
    so(a)
};
function vo(a, b, c) {
    this.b = s(a) ? a : [];
    this.a = [];
    this.c = new qo;
    a = s(b) ? b : this.b.length;
    a < this.b.length && ro(this.c, a, this.b.length);
    this.f = this.e = null;
    this.d = s(c) ? c : 35044
}
vo.prototype.add = function(a) {
    var b = a.length, c;
    a: {
        c = this.c.a;
        var d = c.length, e =- 1, f, g, h;
        for (g = 0; g < d; g += 2) {
            h = c[g + 1] - c[g];
            if (h == b) {
                c = c[g];
                break a
            }
            h > b && (-1 == e || h < f) && (e = c[g], f = h)
        }
        c = e
    }
    uo(this.c, c, c + b);
    for (d = 0; d < b; ++d)
        this.b[c + d] = a[d];
    a = 0;
    for (d = this.a.length; a < d; ++a)
        ro(this.a[a], c, c + b);
    return c
};
vo.prototype.ka = function() {
    var a = this.c.a, b = a.length, c = 0, d;
    for (d = 0; d < b; d += 2)
        c += a[d + 1] - a[d];
    return this.b.length - c
};
vo.prototype.remove = function(a, b) {
    var c, d;
    ro(this.c, b, b + a);
    c = 0;
    for (d = this.a.length; c < d; ++c)
        uo(this.a[c], b, b + a)
};
function wo(a, b) {
    xn.call(this, a, b);
    this.xb = no.Za();
    this.Qc = oo.Za();
    this.a = null;
    this.ea = new vo([0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0]);
    this.j = this.d = null;
    this.i =- 1
}
D(wo, xn);
wo.prototype.B = function() {
    var a = this.c, b = a.b, c = u(this.ea), d = a.f[c];
    Qa(d.Bd.a, d.oc);
    b.isContextLost() || b.deleteBuffer(d.buffer);
    delete a.f[c];
    wo.D.B.call(this)
};
wo.prototype.n = function() {
    wo.D.n.call(this);
    this.a = null
};
wo.prototype.Sa = function(a) {
    var b = this.c, c = b.b, d = a.F, e = d.projection, f = this.b, g = f.ha(), h = g.tileGrid;
    null === h && (h = Jj(e));
    var l = Bi(h.a, d.resolution, 0), n = h.G(l), q = d.center, r;
    n == d.resolution ? (q = vk(q, n, a.size), r = Od(q, n, d.rotation, a.size)) : r = a.extent;
    var y = Fj(h, r, n);
    if (null !== this.d && this.d.a == y.a && (this.d.c == y.c && this.d.d == y.d && this.d.b == y.b) && this.i == g.c)
        n = this.j;
    else {
        var v = [y.d - y.a + 1, y.b - y.c + 1], B = h.va(l), v = Math.max(v[0] * B[0], v[1] * B[1]), C = Math.pow(2, Math.ceil(Math.log(v) / Math.LN2)), v = n * C, w = h.Ib(l), z = w[0] +
        y.a * B[0] * n, n = w[1] + y.c * B[1] * n, n = [z, n, z + v, n + v];
        yn(this, a, C);
        c.viewport(0, 0, C, C);
        c.clearColor(0, 0, 0, 0);
        c.clear(16384);
        c.disable(3042);
        B = xo(b, this.xb, this.Qc);
        c.useProgram(B);
        null === this.a && (this.a = new po(c, B));
        yo(b, this.ea);
        c.enableVertexAttribArray(this.a.a);
        c.vertexAttribPointer(this.a.a, 2, 5126, !1, 16, 0);
        c.enableVertexAttribArray(this.a.b);
        c.vertexAttribPointer(this.a.b, 2, 5126, !1, 16, 8);
        c.uniform1i(this.a.c, 0);
        B = {};
        B[l] = {};
        var O = x(g.$c, g, B, uk(function(a) {
            return null !== a && 2 == a.state && Mm(b.a, a.b())
        }, g,
        e)), C=!0, z = Ed(), F = new db(0, 0, 0, 0), V, Y, ba;
        for (Y = y.a; Y <= y.d; ++Y)
            for (ba = y.c; ba <= y.b; ++ba) {
                w = g.Cb(l, Y, ba, e);
                V = w.state;
                if (2 == V) {
                    if (Mm(b.a, w.b())) {
                        B[l][w.a.toString()] = w;
                        continue
                    }
                } else if (3 == V || 4 == V)
                    continue;
                    C=!1;
                    V = h.uc(w.a, O, null, F, z);
                    V || (w = h.zc(w.a, F, z), null === w || O(l + 1, w))
                }
        O = Ma(rc(B), Number);
        Wa(O);
        var F = new Float32Array(4), J, Q, ua, va, ha;
        Y = 0;
        for (ba = O.length; Y < ba; ++Y)
            for (ua in va = B[O[Y]], va)
                w = va[ua], Q = Dj(h, w.a, z), V = 2 * (Q[2] - Q[0]) / v, J = 2 * (Q[3] - Q[1]) / v, ha = 2 * (Q[0] - n[0]) / v-1, Q = 2 * (Q[1] - n[1]) / v-1, Qe(F, V, J, ha, Q),
        c.uniform4fv(this.a.d, F), zo(b, w), c.drawArrays(5, 0, 4);
        C ? (this.d = y, this.j = n, this.i = g.c) : (this.j = this.d = null, this.i =- 1, a.pa=!0)
    }
    tk(a.hc, g, l, y);
    var ka = b.n;
    wk(a, g, h, e, r, l, f.a(), function(a) {
        var c;
        (c = 2 != a.state) || (c = Mm(b.a, a.b())) || (c = a.b()in ka.c);
        c || ef(ka, [a, Hj(h, a.a), h.G(a.a.z)])
    }, this);
    qk(a, g);
    sk(a, g);
    c = this.t;
    Ve(c);
    Ze(c, (q[0] - n[0]) / (n[2] - n[0]), (q[1] - n[1]) / (n[3] - n[1]));
    af(c, d.rotation);
    $e(c, a.size[0] * d.resolution / (n[2] - n[0]), a.size[1] * d.resolution / (n[3] - n[1]));
    Ze(c, -0.5, -0.5)
};
function Ao() {
    this.a = "precision mediump float;varying vec2 a;uniform mat4 f;uniform float g;uniform sampler2D h;void main(void){vec4 texColor\x3dtexture2D(h,a);gl_FragColor.rgb\x3d(f*vec4(texColor.rgb,1.)).rgb;gl_FragColor.a\x3dtexColor.a*g;}"
}
D(Ao, lo);
fa(Ao);
function Bo() {
    this.a = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position\x3de*vec4(b,0.,1.);a\x3d(d*vec4(c,0.,1.)).st;}"
}
D(Bo, mo);
fa(Bo);
function Co(a, b) {
    this.g = a.getUniformLocation(b, "f");
    this.d = a.getUniformLocation(b, "g");
    this.f = a.getUniformLocation(b, "e");
    this.e = a.getUniformLocation(b, "d");
    this.c = a.getUniformLocation(b, "h");
    this.a = a.getAttribLocation(b, "b");
    this.b = a.getAttribLocation(b, "c")
};
function Do() {
    this.a = "precision mediump float;varying vec2 a;uniform float f;uniform sampler2D g;void main(void){vec4 texColor\x3dtexture2D(g,a);gl_FragColor.rgb\x3dtexColor.rgb;gl_FragColor.a\x3dtexColor.a*f;}"
}
D(Do, lo);
fa(Do);
function Eo() {
    this.a = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position\x3de*vec4(b,0.,1.);a\x3d(d*vec4(c,0.,1.)).st;}"
}
D(Eo, mo);
fa(Eo);
function Fo(a, b) {
    this.d = a.getUniformLocation(b, "f");
    this.f = a.getUniformLocation(b, "e");
    this.e = a.getUniformLocation(b, "d");
    this.c = a.getUniformLocation(b, "g");
    this.a = a.getAttribLocation(b, "b");
    this.b = a.getAttribLocation(b, "c")
};
function Go(a, b) {
    xk.call(this, 0, b);
    this.c = Og("CANVAS");
    this.c.className = "ol-unselectable";
    Sg(a, this.c);
    this.t=!0;
    this.b = un(this.c, {
        antialias: !0,
        depth: !1,
        preserveDrawingBuffer: !1,
        stencil: !1
    });
    G(this.c, "webglcontextlost", this.Vf, !1, this);
    G(this.c, "webglcontextrestored", this.Jf, !1, this);
    this.r = this.q = null;
    this.O = new vo([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]);
    this.f = {};
    this.i = {};
    this.g = {};
    this.a = new Lm;
    this.A = null;
    this.n = new bf(x(function(a) {
        var b = a[1];
        a = a[2];
        var e = b[0] - this.A[0], b = b[1] - this.A[1];
        return 65536 *
        Math.log(a) + Math.sqrt(e * e + b * b) / a
    }, this), function(a) {
        return a[0].b()
    });
    this.H = x(function() {
        if (!this.n.sb()) {
            gf(this.n);
            var a = cf(this.n)[0];
            zo(this, a)
        }
    }, this);
    this.j = 0;
    Ho(this)
}
D(Go, xk);
function yo(a, b) {
    var c = a.b, d = b.b, e = u(b);
    if (e in a.f)
        e = a.f[e], c.bindBuffer(34962, e.buffer), to(e.oc, function(a, b) {
        var e = d.slice(a, b);
        c.bufferSubData(34962, a, new Float32Array(e))
    }), e.oc.clear();
    else {
        var f = c.createBuffer();
        c.bindBuffer(34962, f);
        c.bufferData(34962, new Float32Array(d), b.d);
        var g = new qo;
        b.a.push(g);
        a.f[e] = {
            Bd: b,
            buffer: f,
            oc: g
        }
    }
}
function zo(a, b) {
    var c = a.b, d = b.b();
    if (Mm(a.a, d))
        d = a.a.get(d), c.bindTexture(3553, d.ra), 9729 != d.be && (c.texParameteri(3553, 10240, 9729), d.be = 9729), 9729 != d.ce && (c.texParameteri(3553, 10240, 9729), d.ce = 9729);
    else {
        var e = c.createTexture();
        c.bindTexture(3553, e);
        c.texImage2D(3553, 0, 6408, 6408, 5121, b.d());
        c.texParameteri(3553, 10240, 9729);
        c.texParameteri(3553, 10241, 9729);
        c.texParameteri(3553, 10242, 33071);
        c.texParameteri(3553, 10243, 33071);
        Nm(a.a, d, {
            ra: e,
            be: 9729,
            ce: 9729
        })
    }
}
m = Go.prototype;
m.mc = function(a) {
    return a instanceof Jk ? new wo(this, a) : a instanceof Ik ? new An(this, a) : null
};
m.B = function() {
    var a = this.b;
    nc(this.f, function(a) {
        Qa(a.Bd.a, a.oc)
    });
    a.isContextLost() || (nc(this.f, function(b) {
        a.deleteBuffer(b.buffer)
    }), nc(this.g, function(b) {
        a.deleteProgram(b)
    }), nc(this.i, function(b) {
        a.deleteShader(b)
    }), this.a.forEach(function(b) {
        null === b || a.deleteTexture(b.ra)
    }));
    Go.D.B.call(this)
};
m.Me = function(a, b) {
    for (var c = this.b, d; 1024 < this.a.ka() - this.j;) {
        d = this.a.a.Va;
        if (null === d)
            if ( + this.a.a.Zb == b.index)
                break;
            else 
                --this.j;
        else 
            c.deleteTexture(d.ra);
        this.a.pop()
    }
};
m.wc = k("c");
function xo(a, b, c) {
    var d = u(b) + "/" + u(c);
    if (d in a.g)
        return a.g[d];
    var e = a.b, f = e.createProgram();
    e.attachShader(f, Io(a, b));
    e.attachShader(f, Io(a, c));
    e.linkProgram(f);
    return a.g[d] = f
}
function Io(a, b) {
    var c = u(b);
    if (c in a.i)
        return a.i[c];
    var d = a.b, e = d.createShader(b.S());
    d.shaderSource(e, b.ha());
    d.compileShader(e);
    return a.i[c] = e
}
m.Vf = function(a) {
    a.P();
    this.r = this.q = null;
    this.f = {};
    this.i = {};
    this.g = {};
    this.a.clear();
    this.j = 0;
    nc(this.d, function(a) {
        a.n()
    })
};
m.Jf = function() {
    Ho(this);
    pk(this.e)
};
function Ho(a) {
    a = a.b;
    a.activeTexture(33984);
    a.blendFuncSeparate(770, 771, 1, 771);
    a.disable(2884);
    a.disable(2929);
    a.disable(3089)
}
m.Jc = function(a) {
    var b = this.b;
    if (b.isContextLost())
        return !1;
    if (null === a)
        return this.t && (Zh(this.c, !1), this.t=!1), !1;
    this.A = a.focus;
    Nm(this.a, ( - a.index).toString(), null);
    ++this.j;
    var c = a.Hc, d = a.F.resolution, e, f, g, h, l;
    e = 0;
    for (f = c.length; e < f; ++e)
        g = c[e], h = zk(this, g), l = a.ma[u(g)], l.visible && (1 == l.dc && d < l.maxResolution && d >= l.minResolution) && h.Sa(a, l);
    e = a.size;
    if (this.c.width != e[0] || this.c.height != e[1])
        this.c.width = e[0], this.c.height = e[1];
    b.bindFramebuffer(36160, null);
    b.clearColor(0, 0, 0, 0);
    b.clear(16384);
    b.enable(3042);
    b.viewport(0, 0, e[0], e[1]);
    yo(this, this.O);
    var n = null, q;
    e = 0;
    for (f = c.length; e < f; ++e)
        if (g = c[e], l = a.ma[u(g)
            ], l.visible&&!(1 != l.dc || d >= l.maxResolution || d < l.minResolution)) {
        var r = l.brightness || 1 != l.contrast || l.hue || 1 != l.saturation, y;
        r ? (h = Ao.Za(), y = Bo.Za()) : (h = Do.Za(), y = Eo.Za());
        h = xo(this, h, y);
        h != n && (b.useProgram(h), n = h, r ? null === this.q ? this.q = q = new Co(b, h) : q = this.q : null === this.r ? this.r = q = new Fo(b, h) : q = this.r, b.enableVertexAttribArray(q.a), b.vertexAttribPointer(q.a, 2, 5126, !1, 16, 0), b.enableVertexAttribArray(q.b),
        b.vertexAttribPointer(q.b, 2, 5126, !1, 16, 8), b.uniform1i(q.c, 0));
        h = zk(this, g);
        b.uniformMatrix4fv(q.e, !1, h.t);
        b.uniformMatrix4fv(q.f, !1, h.Aa);
        r && b.uniformMatrix4fv(q.g, !1, zn(h, l.brightness, l.contrast, l.hue, l.saturation));
        b.uniform1f(q.d, l.opacity);
        b.bindTexture(3553, h.ra);
        b.drawArrays(5, 0, 4)
    }
    this.t || (Zh(this.c, !0), this.t=!0);
    yk(a);
    1024 < this.a.ka() - this.j && a.cb.push(x(this.Me, this));
    this.n.sb() || (a.cb.push(this.H), a.pa=!0);
    Bk(this, a)
};
var Jo = {}, Ko = {
    Cg: "canvas",
    Kg: "dom",
    Ch: "webgl"
}, Lo = ["webgl", "canvas", "dom"];
function W(a) {
    L.call(this);
    a = Mo(a);
    this.e = new sg(this.fg, void 0, this);
    jb(this, this.e);
    this.Rc = Re();
    this.Ce = Re();
    this.Ae = 0;
    this.d = null;
    this.g = 0;
    this.A=!1;
    this.t = this.W = null;
    this.b = Lg("DIV", "ol-viewport");
    this.b.style.position = "relative";
    this.b.style.overflow = "hidden";
    this.b.style.width = "100%";
    this.b.style.height = "100%";
    this.b.style.msTouchAction = "none";
    ki && (this.b.className = "ol-touch");
    this.Na = Lg("DIV", "ol-overlaycontainer");
    this.b.appendChild(this.Na);
    this.H = Lg("DIV", "ol-overlaycontainer-stopevent");
    G(this.H, "click dblclick mousedown mouseup touchstart touchend MSPointerDown MSPointerUp".split(" "), mb);
    this.b.appendChild(this.H);
    var b = new ni(this);
    G(b, qc(yi), this.ee, !1, this);
    jb(this, b);
    this.r = new ah;
    G(this.r, "key", this.Td, !1, this);
    jb(this, this.r);
    b = new hi(this.b);
    G(b, "mousewheel", this.Td, !1, this);
    jb(this, b);
    this.q = a.controls;
    this.i = a.interactions;
    this.O = a.overlays;
    this.n = new a.gg(this.b, this);
    jb(this, this.n);
    this.Fe = new Xg;
    G(this.Fe, "resize", this.Aa, !1, this);
    this.ga = null;
    this.j = [];
    this.gb = [];
    this.xb = new hf(x(this.Ye, this), x(this.Df, this));
    G(this, hd("layergroup"), this.kf, !1, this);
    G(this, hd("view"), this.Hf, !1, this);
    G(this, hd("size"), this.Af, !1, this);
    G(this, hd("target"), this.Cf, !1, this);
    this.$b(a.rg);
    this.q.forEach(function(a) {
        a.setMap(this)
    }, this);
    this.i.forEach(function(a) {
        a.ub(this)
    }, this);
    this.O.forEach(function(a) {
        a.d(this)
    }, this)
}
D(W, L);
m = W.prototype;
m.Ge = function(a) {
    this.q.push(a);
    a.setMap(this)
};
m.He = function(a) {
    this.i.push(a);
    a.ub(this)
};
m.Sc = function(a) {
    this.ua().La().push(a)
};
m.Ie = function(a) {
    this.O.push(a);
    a.d(this)
};
m.Ba = function(a) {
    cj(this);
    Array.prototype.push.apply(this.j, arguments)
};
m.B = function() {
    Tg(this.b);
    W.D.B.call(this)
};
m.Nd = function(a) {
    return ej(this, this.xc(a))
};
m.xc = function(a) {
    if (s(a.changedTouches)) {
        a = a.changedTouches.item(0);
        var b = Uh(this.b);
        return [a.clientX - b.x, a.clientY - b.y]
    }
    a = Th(a, this.b);
    return [a.x, a.y]
};
m.We = k("n");
m.Ic = function() {
    return this.get("target")
};
W.prototype.getTarget = W.prototype.Ic;
function ej(a, b) {
    var c = a.d;
    if (null === c)
        return null;
    var d = b.slice();
    return wn(c.le, d, d)
}
m = W.prototype;
m.Qe = k("q");
m.Ve = k("O");
m.Re = function(a) {
    var b = null != a.layers ? a.layers: this.ua().Rb();
    this.n.Ya(a.pixel, b, a.success, a.error)
};
m.de = function(a) {
    var b = null != a.layers ? a.layers: this.ua().Rb();
    Ak(this.n, a.pixel, b, a.success, a.error)
};
m.Te = k("i");
m.ua = function() {
    return this.get("layergroup")
};
W.prototype.getLayerGroup = W.prototype.ua;
W.prototype.Be = function() {
    return this.ua().La()
};
function dj(a, b) {
    var c = a.d;
    if (null === c)
        return null;
    var d = b.slice(0, 2);
    return wn(c.Hd, d, d)
}
W.prototype.c = function() {
    return this.get("size")
};
W.prototype.getSize = W.prototype.c;
W.prototype.a = function() {
    return this.get("view")
};
W.prototype.getView = W.prototype.a;
m = W.prototype;
m.Ze = k("b");
m.Ye = function(a, b, c, d) {
    var e = this.d;
    if (!(null !== e && b in e.Pb && e.Pb[b][a.a.toString()]))
        return Infinity;
    a = c[0] - e.focus[0];
    c = c[1] - e.focus[1];
    return 65536 * Math.log(d) + Math.sqrt(a * a + c * c) / d
};
m.Td = function(a, b) {
    this.ee(new mi(b || a.type, this, a))
};
m.ee = function(a) {
    if (null !== this.d) {
        this.ga = a.b();
        a.c = this.d;
        var b = this.i.a, c;
        if (!1 !== K(this, a))
            for (c = b.length-1; 0 <= c && b[c].Ka(a);
        c--);
    }
};
m.xf = function() {
    var a = this.d, b = this.xb;
    if (!b.sb()) {
        var c = 16, d = c, e = 0;
        if (null !== a) {
            e = a.K;
            if (e[0] || e[1])
                c = 8, d = 2;
            e = oc(a.Pb)
        }
        c*=e;
        d*=e;
        if (b.d < c) {
            gf(b);
            c = Math.min(c - b.d, d, b.ka());
            for (d = 0; d < c; ++d)
                e = cf(b)[0], Jc(e, "change", b.g, !1, b), 0 == e.state && (e.state = 1, e.f = [Jc(e.c, "error", e.n, !1, e), Jc(e.c, "load", e.q, !1, e)], e.j(e, e.g));
            b.d += c
        }
    }
    b = this.gb;
    c = 0;
    for (d = b.length; c < d; ++c)
        b[c](this, a);
    b.length = 0
};
m.Af = function() {
    pk(this)
};
m.Cf = function() {
    var a = this.Ic(), a = s(a) ? t(a) ? document.getElementById(a): a: null;
    Jh(this.r);
    null === a ? Tg(this.b) : (a.appendChild(this.b), ch(this.r, a));
    this.Aa()
};
m.Df = function() {
    cj(this)
};
m.If = function() {
    pk(this)
};
m.Hf = function() {
    null !== this.W && (H(this.W), this.W = null);
    var a = this.a();
    null != a && (this.W = G(a, "change", this.If, !1, this));
    pk(this)
};
m.lf = function() {
    pk(this)
};
m.kf = function() {
    null !== this.t && (H(this.t), this.t = null);
    var a = this.ua();
    null != a && (this.t = G(a, "change", this.lf, !1, this));
    pk(this)
};
m.Hb = function() {
    var a = this.a(), b;
    if (b = s(a)) {
        if (a = a.Hb())
            a = null != this.c();
        b = a
    }
    return b
};
function pk(a) {
    null == a.e.ia && (0 === a.g ? (a = a.e, tg(a), a.Xc()) : a.A=!0)
}
function cj(a) {
    0 === a.g ? null != a.e.ia || a.e.start() : a.A=!0
}
m.ag = function(a) {
    if (s(this.q.remove(a)))
        return a.setMap(null), a
};
m.bg = function(a) {
    var b;
    s(this.i.remove(a)) && (a.ub(null), b = a);
    return b
};
m.td = function(a) {
    return this.ua().La().remove(a)
};
m.cg = function(a) {
    if (s(this.O.remove(a)))
        return a.d(null), a
};
m.fg = function(a) {
    var b, c, d;
    if (0 === this.g) {
        var e = this.c();
        b = this.a();
        var f = s(b) ? this.a().N(): void 0, g = null;
        if (s(e) && s(f) && f.Hb()) {
            g = Sa(b.c);
            b = this.ua().cd();
            var h = b.layers;
            d = b.ma;
            var l = {}, n;
            b = 0;
            for (c = h.length; b < c; ++b)
                n = h[b], l[u(n)] = d[b];
            d = Ki(f);
            g = {
                pa: !1,
                attributions: {},
                Hd: this.Rc,
                extent: null,
                focus: null === this.ga ? d.center: this.ga,
                index: this.Ae++,
                Hc: h,
                ma: l,
                ae: {},
                le: this.Ce,
                cb: [],
                size: e,
                mg: this.xb,
                time: a,
                hc: {},
                F: d,
                K: g,
                Pb: {}
            }
        }
        a = this.j;
        b = e = 0;
        for (c = a.length; b < c; ++b)
            f = a[b], f(this, g) && (a[e++] = f);
        a.length =
        e;
        null !== g && (g.extent = Od(d.center, d.resolution, d.rotation, g.size));
        this.d = g;
        this.n.Jc(g);
        this.A=!1;
        null !== g && (g.pa && cj(this), Array.prototype.push.apply(this.gb, g.cb), 0 != this.j.length || (g.pa || g.K[0] || g.K[1]) || K(this, new li("moveend", this)));
        K(this, new li("postrender", this, g));
        c = b = this.xf;
        this && (c = x(b, this));
        ma(p.setImmediate) ? p.setImmediate(c) : (wg || (wg = xg()), wg(c))
    }
};
m.ig = function(a) {
    this.o("layergroup", a)
};
W.prototype.setLayerGroup = W.prototype.ig;
W.prototype.ea = function(a) {
    this.o("size", a)
};
W.prototype.setSize = W.prototype.ea;
W.prototype.De = function(a) {
    this.o("target", a)
};
W.prototype.setTarget = W.prototype.De;
W.prototype.Ee = function(a) {
    this.o("view", a)
};
W.prototype.setView = W.prototype.Ee;
W.prototype.Aa = function() {
    var a = this.Ic(), a = s(a) ? t(a) ? document.getElementById(a): a: null;
    null === a ? this.ea(void 0) : (a = Wh(a), this.ea([a.width, a.height]))
};
function Si(a, b) {
    ++a.g;
    try {
        b.call(void 0)
    } finally {
        if (0===--a.g && a.A) {
            var c = a.e;
            tg(c);
            c.Xc()
        }
    }
}
function Mo(a) {
    var b = {}, c = a.layers instanceof rj ? a.layers: new rj({
        layers: a.layers
    });
    b.layergroup = c;
    b.target = a.target;
    b.view = s(a.view) ? a.view : new S;
    var c = xk, d;
    d = s(a.renderers) ? a.renderers : s(a.renderer) ? [a.renderer] : Lo;
    var e = d.length, f, g;
    for (f = 0; f < e; ++f)
        if (g = d[f], "canvas" == g) {
            if (Ck) {
                c = hn;
                break
            }
        } else if ("dom" == g) {
            c = sn;
            break
        } else if ("webgl" == g && vn) {
            c = Go;
            break
        }
    d = s(a.controls) ? ia(a.controls) ? new M(Sa(a.controls)) : a.controls : Pi();
    e = s(a.interactions) ? ia(a.interactions) ? new M(Sa(a.interactions)) : a.interactions :
    qj();
    a = s(a.overlays) ? ia(a.overlays) ? new M(Sa(a.overlays)) : a.overlays : new M;
    return {
        controls: d,
        interactions: e,
        overlays: a,
        gg: c,
        rg: b
    }
}
Jo.Le = function(a) {
    var b = p.location.search.substring(1);
    a = s(a) ? a : new eg(b);
    return rg(a, "renderers") ? a.get("renderers").split(",") : rg(a, "renderer") ? [a.get("renderer")] : Lo
};
xj();
var No = {
    Ag: "bottom-left",
    zg: "bottom-center",
    Bg: "bottom-right",
    Eg: "center-left",
    Dg: "center-center",
    Fg: "center-right",
    vh: "top-left",
    uh: "top-center",
    wh: "top-right"
};
function Oo(a) {
    L.call(this);
    this.r = s(a.insertFirst) ? a.insertFirst : !0;
    this.t = s(a.stopEvent) ? a.stopEvent : !0;
    this.b = Og("DIV");
    this.b.style.position = "absolute";
    this.a = {
        kc: "",
        Ia: "",
        Ma: "",
        Oc: "",
        visible: !0
    };
    this.c = null;
    G(this, hd("element"), this.hf, !1, this);
    G(this, hd("map"), this.pf, !1, this);
    G(this, hd("position"), this.vf, !1, this);
    G(this, hd("positioning"), this.wf, !1, this);
    s(a.element) && this.se(a.element);
    s(a.position) && this.n(a.position);
    s(a.positioning) && this.q(a.positioning)
}
D(Oo, L);
Oo.prototype.i = function() {
    return this.get("element")
};
Oo.prototype.getElement = Oo.prototype.i;
Oo.prototype.e = function() {
    return this.get("map")
};
Oo.prototype.getMap = Oo.prototype.e;
Oo.prototype.j = function() {
    return this.get("position")
};
Oo.prototype.getPosition = Oo.prototype.j;
Oo.prototype.g = function() {
    return this.get("positioning")
};
Oo.prototype.getPositioning = Oo.prototype.g;
m = Oo.prototype;
m.hf = function() {
    Qg(this.b);
    var a = this.i();
    null != a && Pg(this.b, a)
};
m.pf = function() {
    null !== this.c && (Tg(this.b), H(this.c), this.c = null);
    var a = this.e();
    null != a && (this.c = G(a, "postrender", this.Uf, !1, this), Po(this), a = this.t ? a.H : a.Na, this.r ? Sg(a, this.b) : Pg(a, this.b))
};
m.Uf = function() {
    Po(this)
};
m.vf = function() {
    Po(this)
};
m.wf = function() {
    Po(this)
};
m.se = function(a) {
    this.o("element", a)
};
Oo.prototype.setElement = Oo.prototype.se;
Oo.prototype.d = function(a) {
    this.o("map", a)
};
Oo.prototype.setMap = Oo.prototype.d;
Oo.prototype.n = function(a) {
    this.o("position", a)
};
Oo.prototype.setPosition = Oo.prototype.n;
Oo.prototype.q = function(a) {
    this.o("positioning", a)
};
Oo.prototype.setPositioning = Oo.prototype.q;
function Po(a) {
    var b = a.e(), c = a.j();
    if (s(b) && b.Hb() && s(c)) {
        var c = dj(b, c), d = b.c(), b = a.b.style, e = a.g();
        if ("bottom-right" == e || "center-right" == e || "top-right" == e) {
            "" !== a.a.Ia && (a.a.Ia = b.left = "");
            var f = Math.round(d[0] - c[0]) + "px";
            a.a.Ma != f && (a.a.Ma = b.right = f)
        } else {
            "" !== a.a.Ma && (a.a.Ma = b.right = "");
            f = 0;
            if ("bottom-center" == e || "center-center" == e || "top-center" == e)
                f = Wh(a.b).width / 2;
            f = Math.round(c[0] - f) + "px";
            a.a.Ia != f && (a.a.Ia = b.left = f)
        }
        if ("bottom-left" == e || "bottom-center" == e || "bottom-right" == e)
            "" !== a.a.Oc && (a.a.Oc =
            b.top = ""), c = Math.round(d[1] - c[1]) + "px", a.a.kc != c && (a.a.kc = b.bottom = c);
        else {
            "" !== a.a.kc && (a.a.kc = b.bottom = "");
            d = 0;
            if ("center-left" == e || "center-center" == e || "center-right" == e)
                d = Wh(a.b).height / 2;
            c = Math.round(c[1] - d) + "px";
            a.a.Oc != c && (a.a.Oc = b.top = c)
        }
        a.a.visible || (Zh(a.b, !0), a.a.visible=!0)
    } else 
        a.a.visible && (Zh(a.b, !1), a.a.visible=!1)
};
var Qo;
Qo=!1;
var Ro = xb();
Ro && (-1 != Ro.indexOf("Firefox")||-1 != Ro.indexOf("Camino")||-1 != Ro.indexOf("iPhone")||-1 != Ro.indexOf("iPod")||-1 != Ro.indexOf("iPad")||-1 != Ro.indexOf("Android")||-1 != Ro.indexOf("Chrome") && (Qo=!0));
var So = Qo;
var To = Db ? "webkitfullscreenchange": "mozfullscreenchange";
function Uo() {
    var a = Fg().a, b = a.body;
    return !!b.webkitRequestFullScreen||!!b.mozRequestFullScreen && a.mozFullScreenEnabled
}
function Vo() {
    var a = Fg().a;
    return !!a.webkitIsFullScreen||!!a.mozFullScreen
};
function Wo(a) {
    a = s(a) ? a : {};
    this.b = s(a.className) ? a.className : "ol-full-screen";
    var b = Lg("A", {
        href: "#fullScreen",
        "class": this.b + "-" + Vo()
    });
    G(b, ["click", "touchend"], this.i, !1, this);
    G(p.document, To, this.c, !1, this);
    b = Lg("DIV", {
        "class": this.b + " ol-unselectable " + (Uo() ? "" : "ol-unsupported")
    }, b);
    Li.call(this, {
        element: b,
        target: a.target
    });
    this.g = s(a.keys) ? a.keys : !1
}
D(Wo, Li);
Wo.prototype.i = function(a) {
    Uo() && (a.P(), a = this.a, null !== a && (Vo() ? (a = Fg().a, a.webkitCancelFullScreen ? a.webkitCancelFullScreen() : a.mozCancelFullScreen && a.mozCancelFullScreen()) : (a = a.Ic(), a = t(a) ? document.getElementById(a) : a, this.g ? a.mozRequestFullScreenWithKeys ? a.mozRequestFullScreenWithKeys() : a.webkitRequestFullScreen && a.ALLOW_KEYBOARD_INPUT && So ? a.webkitRequestFullScreen(a.ALLOW_KEYBOARD_INPUT) : a.webkitRequestFullScreen ? a.webkitRequestFullScreen() : a.mozRequestFullScreen && a.mozRequestFullScreen() : a.webkitRequestFullScreen ?
    a.webkitRequestFullScreen() : a.mozRequestFullScreen && a.mozRequestFullScreen())))
};
Wo.prototype.c = function() {
    var a = this.b + "-true", b = this.b + "-false", c = Ug(this.element);
    Vo() ? Cg(c, b, a) : Cg(c, a, b)
};
function Xo(a) {
    a = s(a) ? a : {};
    var b = Lg("DIV", {
        "class": s(a.className) ? a.className: "ol-mouse-position"
    });
    Li.call(this, {
        element: b,
        target: a.target
    });
    G(this, hd("projection"), this.H, !1, this);
    s(a.coordinateFormat) && this.r(a.coordinateFormat);
    s(a.projection) && this.n(He(a.projection));
    this.O = s(a.undefinedHTML) ? a.undefinedHTML : "";
    this.i = b.innerHTML;
    this.g = this.c = this.b = null
}
D(Xo, Li);
Xo.prototype.d = function(a) {
    a = a.c;
    null === a ? this.b = null : this.b != a.F.projection && (this.b = a.F.projection, this.c = null);
    Yo(this, this.g)
};
Xo.prototype.H = function() {
    this.c = null
};
Xo.prototype.j = function() {
    return this.get("coordinateFormat")
};
Xo.prototype.getCoordinateFormat = Xo.prototype.j;
Xo.prototype.da = function() {
    return this.get("projection")
};
Xo.prototype.getProjection = Xo.prototype.da;
Xo.prototype.t = function(a) {
    a = Th(a, this.a.b);
    this.g = [a.x, a.y];
    Yo(this, this.g)
};
Xo.prototype.A = function() {
    Yo(this, null);
    this.g = null
};
Xo.prototype.setMap = function(a) {
    Xo.D.setMap.call(this, a);
    null !== a && (a = a.b, this.e.push(G(a, "mousemove", this.t, !1, this), G(a, "mouseout", this.A, !1, this)))
};
Xo.prototype.r = function(a) {
    this.o("coordinateFormat", a)
};
Xo.prototype.setCoordinateFormat = Xo.prototype.r;
Xo.prototype.n = function(a) {
    this.o("projection", a)
};
Xo.prototype.setProjection = Xo.prototype.n;
function Yo(a, b) {
    var c = a.O;
    if (null !== b && null !== a.b) {
        if (null === a.c) {
            var d = a.da();
            a.c = s(d) ? he(a.b, d) : Je
        }
        d = ej(a.a, b);
        null !== d && (a.c(d, d), c = a.j(), c = s(c) ? c(d) : d.toString())
    }
    s(a.i) && c == a.i || (a.element.innerHTML = c, a.i = c)
};
var Zo = {
    xe: "degrees",
    Xg: "imperial",
    kh: "nautical",
    dh: "metric",
    Ah: "us"
};
function $o(a) {
    a = a || {};
    var b = s(a.className) ? a.className: "ol-scale-line";
    this.g = Lg("DIV", {
        "class": b + "-inner"
    });
    this.i = Lg("DIV", {
        "class": b + " ol-unselectable"
    }, this.g);
    this.n = null;
    this.j = s(a.minWidth) ? a.minWidth : 64;
    this.c=!1;
    this.A = void 0;
    this.r = "";
    this.b = null;
    Li.call(this, {
        element: this.i,
        target: a.target
    });
    G(this, hd("units"), this.O, !1, this);
    this.H(a.units || "metric")
}
D($o, Li);
var ap = [1, 2, 5];
$o.prototype.t = function() {
    return this.get("units")
};
$o.prototype.getUnits = $o.prototype.t;
$o.prototype.d = function(a) {
    a = a.c;
    null === a ? this.n = null : this.n = a.F;
    bp(this)
};
$o.prototype.O = function() {
    bp(this)
};
$o.prototype.H = function(a) {
    this.o("units", a)
};
$o.prototype.setUnits = $o.prototype.H;
function bp(a) {
    var b = a.n;
    if (null === b)
        a.c && (Zh(a.i, !1), a.c=!1);
    else {
        var c = b.center, d = b.projection, b = d.b(b.resolution, c), e = d.Ob, f = a.t();
        "degrees" != e || "metric" != f && "imperial" != f ? "ft" != e && "m" != e || "degrees" != f ? a.b = null : (null === a.b && (a.b = he(d, He("EPSG:4326"))), c = Math.cos(rd(a.b(c)[1])), d = ae.a, "ft" == e && (d/=0.3048), b*=180 / (Math.PI * c * d)) : (a.b = null, c = Math.cos(rd(c[1])), b*=Math.PI * c * ae.a / 180);
        c = a.j * b;
        e = "";
        "degrees" == f ? c < 1 / 60 ? (e = "\u2033", b*=3600) : 1 > c ? (e = "\u2032", b*=60) : e = "\u00b0" : "imperial" == f ? 0.9144 > c ? (e = "in",
        b/=0.0254) : 1609.344 > c ? (e = "ft", b/=0.3048) : (e = "mi", b/=1609.344) : "nautical" == f ? (b/=1852, e = "nm") : "metric" == f ? 1 > c ? (e = "mm", b*=1E3) : 1E3 > c ? e = "m" : (e = "km", b/=1E3) : "us" == f && (0.9144 > c ? (e = "in", b*=39.37) : 1609.344 > c ? (e = "ft", b/=0.30480061) : (e = "mi", b/=1609.3472));
        for (var f = 3 * Math.floor(Math.log(a.j * b) / Math.log(10)), g, h; ;) {
            g = ap[f%3] * Math.pow(10, Math.floor(f / 3));
            h = Math.round(g / b);
            if (h >= a.j)
                break;
            ++f
        }
        g = g + e;
        a.r != g && (a.g.innerHTML = g, a.r = g);
        a.A != h && (a.g.style.width = h + "px", a.A = h);
        a.c || (Zh(a.i, !0), a.c=!0)
    }
};
function cp(a) {
    gb.call(this);
    this.b = a;
    this.a = {}
}
D(cp, gb);
var dp = [];
cp.prototype.wa = function(a, b, c, d, e) {
    ia(b) || (dp[0] = b, b = dp);
    for (var f = 0; f < b.length; f++) {
        var g = G(a, b[f], c || this, d ||!1, e || this.b || this);
        this.a[g.key] = g
    }
    return this
};
cp.prototype.gc = function(a, b, c, d, e) {
    if (ia(b))
        for (var f = 0; f < b.length; f++)
            this.gc(a, b[f], c, d, e);
    else {
        a:
        if (e = e || this.b || this, d=!!d, c = Fc(c || this)
            , cc(a))a = a.Ea.a[b], b =- 1, a && (b = Rc(a, c, d, e)), e =- 1 < b ? a[b] : null;
        else {
            if (a = Lc(a, b, d))
                for (b = 0; b < a.length; b++)
                    if (!a[b].Ua && a[b].Ja == c && a[b].capture == d && a[b].qb == e) {
                        e = a[b];
                        break a
                    }
            e = null
        }
        e && (H(e), delete this.a[e.key])
    }
    return this
};
function ep(a) {
    nc(a.a, H);
    a.a = {}
}
cp.prototype.B = function() {
    cp.D.B.call(this);
    ep(this)
};
cp.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
};
function fp(a, b, c) {
    I.call(this);
    this.target = a;
    this.d = b || a;
    this.b = c || new Lh(NaN, NaN, NaN, NaN);
    this.c = Hg(a);
    this.a = new cp(this);
    jb(this, this.a);
    G(this.d, ["touchstart", "mousedown"], this.ue, !1, this)
}
D(fp, I);
var gp = E || Cb && Rb("1.9.3");
m = fp.prototype;
m.clientX = 0;
m.clientY = 0;
m.Pd = 0;
m.Qd = 0;
m.Rd = 0;
m.Sd = 0;
m.Db = 0;
m.Eb = 0;
m.Id=!0;
m.pb=!1;
m.Zd = 0;
m.Qf = 0;
m.Lf=!1;
m.xd=!1;
m.B = function() {
    fp.D.B.call(this);
    Kc(this.d, ["touchstart", "mousedown"], this.ue, !1, this);
    ep(this.a);
    gp && this.c.releaseCapture();
    this.d = this.target = null
};
function hp(a) {
    s(a.e) || (a.e = $h(a.target));
    return a.e
}
m.ue = function(a) {
    var b = "mousedown" == a.type;
    if (!this.Id || this.pb || b&&!ac(a))
        K(this, "earlycancel");
    else {
        ip(a);
        if (0 == this.Zd)
            if (K(this, new jp("start", this, a.clientX, a.clientY, a)))
                this.pb=!0, a.P();
        else 
            return;
            else 
                a.P();
        var b = this.c, c = b.documentElement, d=!gp;
        this.a.wa(b, ["touchmove", "mousemove"], this.ff, d);
        this.a.wa(b, ["touchend", "mouseup"], this.rc, d);
        gp ? (c.setCapture(!1), this.a.wa(c, "losecapture", this.rc)) : this.a.wa(b ? b.parentWindow || b.defaultView : window, "blur", this.rc);
        E && this.Lf && this.a.wa(b, "dragstart",
        nb);
        this.g && this.a.wa(this.g, "scroll", this.Xf, d);
        this.clientX = this.Rd = a.clientX;
        this.clientY = this.Sd = a.clientY;
        this.Pd = a.gd;
        this.Qd = a.hd;
        this.xd ? (a = this.target, b = a.offsetLeft, c = a.offsetParent, c || "fixed" != Nh(a, "position") || (c = Hg(a).documentElement), c ? (Cb ? (d = ci(c), b += d.left) : E && 8 <= Tb && (d = ci(c), b -= d.left), a = $h(c) ? c.clientWidth - (b + a.offsetWidth) : b) : a = b) : a = this.target.offsetLeft;
        this.Db = a;
        this.Eb = this.target.offsetTop;
        this.f = Wg(Fg(this.c));
        this.Qf = ta()
    }
};
m.rc = function(a, b) {
    ep(this.a);
    gp && this.c.releaseCapture();
    if (this.pb) {
        ip(a);
        this.pb=!1;
        var c = kp(this, this.Db), d = lp(this, this.Eb);
        K(this, new jp("end", this, a.clientX, a.clientY, a, c, d, b || "touchcancel" == a.type))
    } else 
        K(this, "earlycancel")
};
function ip(a) {
    var b = a.type;
    "touchstart" == b || "touchmove" == b ? Zb(a, a.$.targetTouches[0], a.d) : "touchend" != b && "touchcancel" != b || Zb(a, a.$.changedTouches[0], a.d)
}
m.ff = function(a) {
    if (this.Id) {
        ip(a);
        var b = (this.xd && hp(this)?-1 : 1) * (a.clientX - this.clientX), c = a.clientY - this.clientY;
        this.clientX = a.clientX;
        this.clientY = a.clientY;
        this.Pd = a.gd;
        this.Qd = a.hd;
        if (!this.pb) {
            var d = this.Rd - this.clientX, e = this.Sd - this.clientY;
            if (d * d + e * e > this.Zd)
                if (K(this, new jp("start", this, a.clientX, a.clientY, a)))
                    this.pb=!0;
                else {
                    this.ac || this.rc(a);
                    return 
                }
        }
        c = mp(this, b, c);
        b = c.x;
        c = c.y;
        this.pb && K(this, new jp("beforedrag", this, a.clientX, a.clientY, a, b, c)) && (np(this, a, b, c), a.P())
    }
};
function mp(a, b, c) {
    var d = Wg(Fg(a.c));
    b += d.x - a.f.x;
    c += d.y - a.f.y;
    a.f = d;
    a.Db += b;
    a.Eb += c;
    b = kp(a, a.Db);
    a = lp(a, a.Eb);
    return new Dg(b, a)
}
m.Xf = function(a) {
    var b = mp(this, 0, 0);
    a.clientX = this.clientX;
    a.clientY = this.clientY;
    np(this, a, b.x, b.y)
};
function np(a, b, c, d) {
    a.xd && hp(a) ? a.target.style.right = c + "px" : a.target.style.left = c + "px";
    a.target.style.top = d + "px";
    K(a, new jp("drag", a, b.clientX, b.clientY, b, c, d))
}
function kp(a, b) {
    var c = a.b, d = isNaN(c.left) ? null: c.left, c = isNaN(c.width) ? 0: c.width;
    return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : - Infinity, b))
}
function lp(a, b) {
    var c = a.b, d = isNaN(c.top) ? null: c.top, c = isNaN(c.height) ? 0: c.height;
    return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : - Infinity, b))
}
function jp(a, b, c, d, e, f, g, h) {
    lb.call(this, a);
    this.clientX = c;
    this.clientY = d;
    this.c = e;
    this.left = s(f) ? f : b.Db;
    this.top = s(g) ? g : b.Eb;
    this.b = b;
    this.a=!!h
}
D(jp, lb);
function op(a) {
    a = s(a) ? a : {};
    this.b = void 0;
    this.c = pp;
    this.j=!1;
    this.g = null;
    a = s(a.className) ? a.className : "ol-zoomslider";
    a = Lg("DIV", a + " ol-unselectable", Lg("DIV", a + "-thumb ol-unselectable"));
    null !== this.g && (Ia(this.g, H), this.g = null);
    var b = new fp(a.childNodes[0]);
    this.g = [G(b, ["drag", "end"], this.r, void 0, this)];
    this.i = b;
    G(a, ["touchend", "click"], this.n, !1, this);
    Li.call(this, {
        element: a
    })
}
D(op, Li);
var pp = 0;
op.prototype.setMap = function(a) {
    op.D.setMap.call(this, a);
    null === a || pk(a)
};
op.prototype.d = function(a) {
    if (null !== a.c) {
        if (!this.j) {
            var b = this.element, c = Ug(b);
            var d = Hg(b), e = E && b.currentStyle;
            e && Vg(Fg(d)) && "auto" != e.width && "auto" != e.height&&!e.boxSizing ? (d = di(b, e.width, "width", "pixelWidth"), b = di(b, e.height, "height", "pixelHeight"), b = new Eg(d, b)) : (e = new Eg(b.offsetWidth, b.offsetHeight), d = bi(b, "padding"), b = ci(b), b = new Eg(e.width - b.left - d.left - d.right - b.right, e.height - b.top - d.top - d.bottom - b.bottom));
            var e = Sh(c), d = Wh(c), e = new Lh(e.x, e.y, d.width, d.height), d = bi(c, "margin"), f = ci(c),
            c = b.width - d.left - d.right - f.left - f.right - e.width, e = b.height - d.top - d.bottom - f.top - f.bottom - e.height;
            b.width > b.height ? (this.c = 1, c = new Lh(0, 0, c, 0)) : (this.c = pp, c = new Lh(0, 0, 0, e));
            this.i.b = c || new Lh(NaN, NaN, NaN, NaN);
            this.j=!0
        }
        a = a.c.F.resolution;
        a !== this.b && (this.b = a, a =- 1 * (Ji(this.a.a().N())(a)-1), c = this.i, b = Ug(this.element), 1 == this.c ? Oh(b, c.b.left + c.b.width * a) : Oh(b, c.b.left, c.b.top + c.b.height * a))
    }
};
op.prototype.n = function() {};
op.prototype.r = function(a) {
    var b = this.a, c = b.a().N();
    if ("drag" === a.type) {
        var b = this.i.b, d = 0, d = 1 === this.c ? (a.left - b.left) / b.width: (a.top - b.top) / b.height;
        a =- 1 * (pd(d, 0, 1)-1);
        a = Ii(this.a.a().N())(a);
        a !== this.b && (this.b = a, c.fb(a))
    } else 
        b.Ba(xf({
            resolution: this.b,
            duration: 200,
            easing: qf
        })), a = c.Ca(this.b), c.fb(a)
};
function qp(a) {
    a = s(a) ? a : {};
    this.b = s(a.extent) ? a.extent : null;
    var b = Lg("DIV", {
        "class": (s(a.className) ? a.className : "ol-zoom-extent") + " ol-unselectable"
    }), c = Lg("A", {
        href: "#zoomExtent"
    });
    b.appendChild(c);
    G(b, ["touchend", "click"], this.c, !1, this);
    Li.call(this, {
        element: b,
        target: a.target
    })
}
D(qp, Li);
qp.prototype.c = function(a) {
    a.P();
    a = this.a;
    var b = a.a().N(), c = null === this.b ? b.da().ca(): this.b;
    b.ad(c, a.c())
};
function rp(a) {
    L.call(this);
    this.a = a;
    G(this.a, "change", this.i, !1, this);
    G(this, hd("value"), this.j, !1, this);
    G(this, hd("checked"), this.g, !1, this)
}
D(rp, L);
rp.prototype.b = function() {
    return this.get("checked")
};
rp.prototype.getChecked = rp.prototype.b;
rp.prototype.c = function() {
    return this.get("value")
};
rp.prototype.getValue = rp.prototype.c;
rp.prototype.e = function(a) {
    this.o("value", a)
};
rp.prototype.setValue = rp.prototype.e;
rp.prototype.d = function(a) {
    this.o("checked", a)
};
rp.prototype.setChecked = rp.prototype.d;
rp.prototype.i = function() {
    "checkbox" === this.a.type || "radio" === this.a.type ? this.d(this.a.checked) : this.e(this.a.value)
};
rp.prototype.g = function() {
    this.a.checked = this.b()
};
rp.prototype.j = function() {
    this.a.value = this.c()
};
function sp(a, b) {
    this.x = a;
    this.y = b
}
D(sp, Dg);
sp.prototype.U = function() {
    return new sp(this.x, this.y)
};
sp.prototype.scale = Dg.prototype.scale;
sp.prototype.add = function(a) {
    this.x += a.x;
    this.y += a.y;
    return this
};
function tp(a) {
    a = s(a) ? a : {};
    aj.call(this);
    this.e = s(a.condition) ? a.condition : Zi;
    this.a = this.b = void 0;
    this.c = 0
}
D(tp, aj);
tp.prototype.Wb = function(a) {
    var b = a.map, c = b.c();
    a = a.f();
    a = new sp(a[0] - c[0] / 2, c[1] / 2 - a[1]);
    c = Math.atan2(a.y, a.x);
    a = Math.sqrt(a.x * a.x + a.y * a.y);
    var d = b.a().N(), e = Ki(d);
    cj(b);
    s(this.b) && Ri(b, d, e.rotation - (c - this.b));
    this.b = c;
    s(this.a) && Ui(b, d, this.a * (e.resolution / a));
    s(this.a) && (this.c = this.a / a);
    this.a = a
};
tp.prototype.Xb = function(a) {
    var b = a.map, c = b.a().N();
    pf(c, -1);
    var d = Ki(c), e = this.c-1;
    Si(b, function() {
        var a = d.rotation, a = c.lc(a, 0);
        Ri(b, c, a, void 0, void 0);
        a = d.resolution;
        a = c.Ca(a, 0, e);
        Ui(b, c, a, void 0, 400)
    });
    this.c = 0;
    return !0
};
tp.prototype.Fb = function(a) {
    return this.e(a) ? (pf(a.map.a(), 1), this.a = this.b = void 0, !0) : !1
};
function up(a) {
    Qi.call(this);
    this.g = a.layer;
    this.c = null;
    this.i = s(a.snapTolerance) ? a.snapTolerance : 12;
    a = this.f = a.type;
    var b;
    if ("point" === a || "multipoint" === a)
        b = vp;
    else if ("linestring" === a || "multilinestring" === a)
        b = wp;
    else if ("polygon" === a || "multipolygon" === a)
        b = xp;
    this.a = b;
    this.e = this.d = this.b = null;
    this.j = 4
}
D(up, Qi);
up.prototype.ub = function(a) {
    var b = this.r;
    null === b || b.td(this.c);
    null === a ? (yp(this), this.c = null) : (null === this.c && (b = new xm({
        source: new gl({
            parser: null
        }),
        style: this.g.b
    }), b.d=!0, this.c = b), a.Sc(this.c));
    up.D.ub.call(this, a)
};
up.prototype.Ka = function(a) {
    if (!a.map.Hb())
        return !0;
    var b=!0;
    if ("click" === a.type) {
        var b = a.map.xc(a.target.Da), c = a.f(), d = b[0] - c[0], b = b[1] - c[1], c=!0;
        d * d + b * b <= this.j && (null === this.b ? zp(this, a) : this.a === vp || Ap(this, a) ? (a = yp(this), Yd(a, "default"), d = a.s(), b = d.k(), this.a === wp ? (b.pop(), d.oa(b)) : this.a === xp && a.aa(new Xm(b)), "multipoint" === this.f ? a.aa(new Um([b])) : "multilinestring" === this.f ? a.aa(new Sm([b])) : "multipolygon" === this.f && a.aa(new Ym([b])), zm(this.g, [a])) : (a = a.b(), b = this.d.s(), this.a === wp ? (this.b =
        a.slice(), d = b.k(), d.push(a.slice()), b.oa(d)) : this.a === xp && (b = b.a[0], d = b.k(), d.push(a.slice()), b.oa(d))), c=!1);
        b = c
    } else 
        "mousemove" === a.type ? (this.a === vp && null === this.b ? zp(this, a) : null !== this.b && (b = a.b(), c = this.d.s(), this.a === vp ? (a = c.k(), a[0] = b[0], a[1] = b[1], c.oa(a)) : (this.a === wp ? d = c.k() : this.a === xp && (c = c.a[0], d = c.k()), Ap(this, a) && (b = this.b.slice()), this.e.s().oa(b), a = d[d.length-1], a[0] = b[0], a[1] = b[1], c.oa(d))), b=!0) : a.type === pi && (b=!1);
    return b
};
function Ap(a, b) {
    var c=!1;
    if (a.d) {
        var d = a.d.s(), e=!1;
        a.a === wp ? e = 2 < d.k().length : a.a === xp && (e = 3 < d.a[0].k().length);
        e && (d = dj(b.map, a.b), e = b.f(), c = e[0] - d[0], d = e[1] - d[1], c = Math.sqrt(c * c + d * d) <= a.i)
    }
    return c
}
function zp(a, b) {
    var c = b.b();
    a.b = c;
    var d = new N;
    Yd(d, "selected");
    var e = [d], f;
    if (a.a === vp)
        f = new Tm(c.slice());
    else {
        var g = new N({
            e: new Tm(c.slice())
        });
        Yd(g, "temporary");
        a.e = g;
        e.push(g);
        a.a === wp ? f = new Rm([c.slice(), c.slice()]) : a.a === xp && (f = new Xm([[c.slice(), c.slice()]]))
    }
    d.aa(f);
    a.d = d;
    zm(a.c, e)
}
function yp(a) {
    a.b = null;
    var b = a.d;
    if (null !== b) {
        var c = [b];
        a.d = null;
        a.a !== vp && (c.push(a.e), a.e = null);
        a = a.c;
        for (var d = Ed(), e, f, g = 0, h = c.length; g < h; ++g)
            e = c[g], a.a.remove(e), f = e.s(), null === f || Ld(d, f.R()), Kc(e, Xd, a.r, !1, a), Kc(e, Zd, a.H, !1, a);
        K(a, new Am(Em, c, [d]))
    }
    return b
}
var vp = "point", wp = "linestring", xp = "polygon";
function Bp(a) {
    aj.call(this);
    var b = s(a) ? a: {};
    a = b.layers;
    s(a) ? ia(a) && (a = function(a) {
        return -1 < b.layers.indexOf(a)
    }) : a = Vc;
    this.t = a;
    this.j = this.c = null;
    this.g=!1;
    this.a = null;
    this.e = s(b.pixelTolerance) ? b.pixelTolerance : 20;
    this.b = null
}
D(Bp, aj);
m = Bp.prototype;
m.ub = function(a) {
    var b = this.r;
    null !== b && (b.td(this.c), b = b.ua().La(), b.forEach(x(this.pe, this)), b.gc("add", this.Wd, !1, this), b.gc("remove", this.Xd, !1, this));
    null === a ? this.c = this.a = null : (null === this.a && (this.a = new jl), null === this.c && (this.c = b = new xm({
        source : new gl({
            parser : null
        })
    }), b.d=!0, a.Sc(b)), b = a.ua().La(), b.forEach(x(this.Ad, this)), b.wa("add", this.Wd, !1, this), b.wa("remove", this.Xd, !1, this));
    Bp.D.ub.call(this, a)
};
m.Wd = function(a) {
    this.Ad(a.a)
};
m.Ad = function(a) {
    this.t(a) && (a instanceof xm&&!a.d) && (Cp(this, Fm(a), a), G(a, Dm, this.fe, !1, this))
};
m.Xd = function(a) {
    this.pe(a.a)
};
m.pe = function(a) {
    this.t(a) && (a instanceof xm&&!a.d) && (Dp(this, Fm(a)), Kc(a, Dm, this.fe, !1, this))
};
function Cp(a, b, c) {
    for (var d = 0, e = b.length; d < e; ++d) {
        var f = b[d], g = f.s();
        if (g instanceof Qm)
            for (var g = g.u, h = 0, l = g.length; h < l; ++h)
                Ep(a, f, g[h], c);
        else 
            Ep(a, f, g, c)
    }
}
function Dp(a, b) {
    for (var c = a.a, d = 0, e = b.length; d < e; ++d)
        for (var f = b[d], f = c.search(f.s().R(), u(f)), g = f.length-1; 0 <= g; --g) {
            var h = f[g];
            c.remove(Dd(h.ya), h)
        }
}
m.fe = function(a) {
    var b = a.target;
    a = a.features;
    for (var c = 0, d = a.length; c < d; ++c) {
        var e = a[c];
        "selected" == e.na ? Cp(this, [e], b) : Dp(this, [e])
    }
};
function Ep(a, b, c, d) {
    var e = u(b), f = a.a, g, h;
    if (c instanceof Tm)
        g = {
            Ab: b,
            geometry: c,
            style: d.b
        }, ml(f, c.R(), g, e);
    else if (c instanceof Rm || c instanceof Vm) {
        h = c.k();
        for (var l = 0, n = h.length-1; l < n; ++l)
            a = h.slice(l, l + 2), g = {
                Ab: b,
                geometry: c,
                index: l,
                style: d.b,
                ya: a
            }, ml(f, Dd(a), g, e)
    } else if (c instanceof Xm)
        for (c = c.a, e = 0, f = c.length; e < f; ++e)
            Ep(a, b, c[e], d)
}
function Fp(a, b, c) {
    var d = a.j;
    null === d ? (d = new N({
        f: new Tm(c)
    }), a.j = d, zm(a.c, [d])) : d.s().oa(c);
    a.c.b !== b && (a = a.c, a.b = b, K(a, new Am(Cm, [], [])));
    return d
}
m.Fb = function() {
    this.b = [];
    var a = this.j;
    if (null !== a && "hidden" != a.na) {
        for (var b = a.na, c = [], a = a.s().k(), d = Dd([a]), d = this.a.search(d), e = {}, f = 0, g = d.length; f < g; ++f) {
            var h = d[f], l = h.ya;
            if (!(u(h.Ab)in e)) {
                var n = h.Ab;
                e[u(n)]=!0;
                var q = new N(n.kb());
                q.aa(n.s().U());
                q.Fa = n.Fa;
                q.qd = n.qd;
                q.b = n.Bb();
                n.qd = q
            }
            "temporary" == b ? yd(l[0], a) ? this.b.push([h, 0]) : yd(l[1], a) && this.b.push([h, 1]) : 0 === Ad(a, vd(a, l)) && c.push([h, a])
        }
        for (f = c.length-1; 0 <= f; --f)
            this.Mf.apply(this, c[f])
    }
    return this.g
};
m.Wb = function(a) {
    a = a.b();
    for (var b = 0, c = this.b.length; b < c; ++b) {
        var d = this.b[b], e = d[0], f = e.Ab, g = e.geometry, h = g.k();
        g instanceof Tm ? (h = g.R(), g.oa(a), g = g.R()) : (d = d[1], h[e.index + d] = a, g.oa(h), g = e.ya, h = Dd(g), g[d] = a, g = Dd(g));
        Fp(this, e.style, a);
        this.a.remove(h, e);
        ml(this.a, g, e, u(f))
    }
};
m.Ka = function(a) {
    var b = a.map.a();
    Sa(b.c)[1] || (this.i || "mousemove" != a.type) || Gp(this, a);
    Bp.D.Ka.call(this, a);
    return !this.g
};
function Gp(a, b) {
    function c(a, b) {
        return Ad(f, vd(f, a.ya)) - Ad(f, vd(f, b.ya))
    }
    var d = b.map, e = b.f(), f = ej(d, e), g = ej(d, [e[0] - a.e, e[1] + a.e]), h = ej(d, [e[0] + a.e, e[1] - a.e]), g = Dd([g, h]);
    a.g=!1;
    var l = a.j, g = a.a.search(g), n = "hidden";
    if (0 < g.length) {
        g.sort(c);
        var g = g[0], h = g.ya, q = vd(f, h), r = dj(d, q);
        Math.sqrt(Ad(e, r)) <= a.e && (e = dj(d, h[0]), n = dj(d, h[1]), d = Ad(r, e), e = Ad(r, n), r = Math.sqrt(Math.min(d, e)), n = "future", 10 >= r && (q = d > e ? h[1] : h[0], n = "temporary"), l = Fp(a, g.style, q), a.g=!0)
    }
    null === l || n == l.na || Yd(l, n)
}
m.Mf = function(a, b) {
    var c = a.ya, d = a.Ab, e = a.geometry, f = a.index, g = e.k();
    g.splice(f + 1, 0, b);
    e.oa(g);
    g = this.a;
    g.remove(Dd(c), a);
    for (var h = u(d), l = this.a.search(e.R(), h), n = 0, q = l.length; n < q; ++n) {
        var r = l[n];
        r.geometry === e && r.index > f&&++r.index
    }
    d = {
        style: a.style,
        ya: [c[0], b],
        Ab: d,
        geometry: e,
        index: f
    };
    ml(g, Dd(d.ya), d, h);
    this.b.push([d, 1]);
    d = vc(d);
    d.ya = [b, c[1]];
    d.index += 1;
    ml(g, Dd(d.ya), d, h);
    this.b.push([d, 0])
};
function Hp(a) {
    var b = s(a) ? a: {};
    this.b = s(b.condition) ? b.condition : Xi;
    this.a = s(b.addCondition) ? b.addCondition : Zi;
    a = b.layers;
    s(a) ? ia(a) && (a = function(a) {
        return -1 < b.layers.indexOf(a)
    }) : a = Vc;
    this.c = a;
    Qi.call(this)
}
D(Hp, Qi);
Hp.prototype.Ka = function(a) {
    if (this.b(a)) {
        var b = a.map, c = La(b.ua().Rb(), this.c), d=!this.a(a);
        b.de({
            layers: c,
            pixel: a.f(),
            success: function(a) {
                for (var b = 0, g = a.length; b < g; ++b) {
                    var h = c[b];
                    if (h instanceof xm) {
                        var l = a[b], n = Fm(h);
                        if (d)
                            for (h = n.length-1; 0 <= h; --h)
                                Yd(n[h], "default");
                        for (h = l.length-1; 0 <= h; --h)
                            n = l[h], Yd(n, "selected" == n.na ? "default" : "selected")
                    }
                }
            }
        })
    }
    return !0
};
function Ip(a) {
    if ("undefined" != typeof DOMParser)
        return (new DOMParser).parseFromString(a, "application/xml");
    if ("undefined" != typeof ActiveXObject) {
        var b = new ActiveXObject("MSXML2.DOMDocument");
        if (b) {
            b.resolveExternals=!1;
            b.validateOnParse=!1;
            try {
                b.setProperty("ProhibitDTD", !0), b.setProperty("MaxXMLSize", 2048), b.setProperty("MaxElementDepth", 256)
            } catch (c) {}
        }
        b.loadXML(a);
        return b
    }
    throw Error("Your browser does not support loading xml documents");
}
function Jp(a) {
    if ("undefined" != typeof XMLSerializer)
        return (new XMLSerializer).serializeToString(a);
    if (a = a.xml)
        return a;
    throw Error("Your browser does not support serializing XML documents");
};
function Kp() {};
function Lp() {
    p.ActiveXObject && (this.b = new ActiveXObject("Microsoft.XMLDOM"));
    this.Q = {
        sa: /^\s*|\s*$/g,
        dg: /\s*/g,
        Nb: /\s+/,
        vd: /\s*,\s*/g
    }
}
D(Lp, Kp);
m = Lp.prototype;
m.Ta = function(a, b) {
    b || (b = {});
    var c = this.l[a.namespaceURI] || this.l[this.C];
    if (c) {
        var d = a.localName || a.nodeName.split(":").pop();
        (c = c[d] || c["*"]) && c.apply(this, [a, b])
    }
    return b
};
function X(a, b, c) {
    c || (c = {});
    b = b.childNodes;
    for (var d, e = 0, f = b.length; e < f; ++e)
        d = b[e], 1 == d.nodeType && a.Ta(d, c)
}
function Z(a) {
    var b = "";
    if (a)
        for (a = a.firstChild; a; a = a.nextSibling)
            switch (a.nodeType) {
            case 3:
            case 4:
                b += a.nodeValue
            }
    return b
}
m.getAttributeNS = function(a, b, c) {
    var d = "";
    if (a.getAttributeNS)
        d = a.getAttributeNS(b, c) || "";
    else {
        var e = null;
        if (a.getAttributeNodeNS)
            e = a.getAttributeNodeNS(b, c);
        else {
            a = a.attributes;
            for (var f, g, h = 0, l = a.length; h < l; ++h)
                if (f = a[h], f.namespaceURI == b && (g = f.prefix ? f.prefix + ":" + c : c, g == f.nodeName)
                    ) {
                e = f;
                break
            }
        }
        if (b = e)
            d = b.nodeValue
    }
    return d
};
m.createElementNS = function(a, b) {
    var c = b ? b: this.C;
    return this.b ? this.b.createNode(1, a, c) : document.createElementNS(c, a)
};
function $(a, b, c, d, e) {
    var f = null;
    s(a.a) && (f = a.a[d ? d: a.C][b].apply(a, [c]), e && f && e.appendChild(f));
    return f
}
m.createTextNode = function(a) {
    return this.b ? this.b.createTextNode(a) : document.createTextNode(a)
};
m.setAttributeNS = function(a, b, c, d) {
    if (a.setAttributeNS)
        a.setAttributeNS(b, c, d);
    else if (this.b)
        b ? (b = a.ownerDocument.createNode(2, c, b), b.nodeValue = d, a.setAttributeNode(b)) : a.setAttribute(c, d);
    else 
        throw Error("setAttributeNS not implemented");
};
function Mp(a, b) {
    if (a.b)
        return b.xml;
    if (1 == b.nodeType) {
        var c = document.implementation.createDocument("", "", null);
        c.importNode ? c.appendChild(c.importNode(b, !0)) : c.appendChild(b);
        return Jp(c)
    }
    return Jp(b)
}
m.createDocumentFragment = function() {
    return this.b ? this.b.createDocumentFragment() : document.createDocumentFragment()
};
function Np(a) {
    a = s(a) ? a : {};
    this.extractAttributes = s(a.extractAttributes) ? a.extractAttributes : !0;
    this.extractWaypoints = s(a.extractWaypoints) ? a.extractWaypoints : !0;
    this.extractTracks = s(a.extractTracks) ? a.extractTracks : !0;
    this.extractRoutes = s(a.extractRoutes) ? a.extractRoutes : !0;
    this.creator = s(a.creator) ? a.creator : "OpenLayers";
    this.defaultDesc = s(a.defaultDesc) ? a.defaultDesc : "No description available";
    this.C = "http://www.topografix.com/GPX/1/1";
    this.schemaLocation = "http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd";
    this.l = {
        "http://www.topografix.com/GPX/1/1": {
            gpx: function(a, c) {
                s(c.features) || (c.features = []);
                X(this, a, c)
            },
            wpt: function(a, c) {
                if (this.extractWaypoints) {
                    var d = {}, e = [parseFloat(a.getAttribute("lon")), parseFloat(a.getAttribute("lat"))];
                    X(this, a, d);
                    d = new N(d);
                    e = new Tm(e);
                    d.aa(e);
                    c.features.push(d)
                }
            },
            rte: function(a, c) {
                if (this.extractRoutes || c.Ne) {
                    var d = {
                        properties: {},
                        geometry: {
                            type: "linestring",
                            coordinates: []
                        }
                    };
                    X(this, a, d);
                    var e = new N(d.properties), d = new Rm(d.geometry.coordinates);
                    e.aa(d);
                    c.features.push(e)
                }
            },
            rtept: function(a, c) {
                var d = [parseFloat(a.getAttribute("lon")), parseFloat(a.getAttribute("lat"))];
                c.geometry.coordinates.push(d)
            },
            trk: function(a, c) {
                if (this.extractTracks) {
                    var d = this.l[this.C];
                    c.Ne=!0;
                    d.rte.apply(this, arguments)
                }
            },
            trkseg: function(a, c) {
                X(this, a, c)
            },
            trkpt: function(a, c) {
                this.l[this.C].rtept.apply(this, arguments)
            },
            "*": function(a, c) {
                if (!0 === this.extractAttributes) {
                    var d = a.childNodes.length;
                    1 !== d && 2 !== d || 3 !== a.firstChild.nodeType && 4 !== a.firstChild.nodeType || this.l[this.C]._attribute.apply(this,
                    arguments)
                }
            },
            _attribute: function(a, c) {
                var d = a.localName || a.nodeName.split(":").pop(), e = Z(a);
                c.properties ? c.properties[d] = e.replace(this.Q.sa, "") : c[d] = e.replace(this.Q.sa, "")
            }
        }
    };
    this.l["http://www.topografix.com/GPX/1/0"] = this.l[this.C];
    this.a = {
        "http://www.topografix.com/GPX/1/1": {
            _feature: function(a) {
                var c = a.s();
                if (c instanceof Tm)
                    return $(this, "wpt", a);
                if (c instanceof Rm || c instanceof Sm || c instanceof Xm)
                    return $(this, "trk", a)
            },
            wpt: function(a) {
                var c = this.createElementNS("wpt"), d = a.s().k();
                c.setAttribute("lon",
                d[0]);
                c.setAttribute("lat", d[1]);
                d = a.kb();
                a = d.name || u(a).toString();
                $(this, "name", a, void 0, c);
                $(this, "desc", d.description || this.defaultDesc, void 0, c);
                return c
            },
            trk: function(a) {
                var c = a.kb(), d = this.createElementNS("trk"), e = c.name || u(a).toString();
                $(this, "name", e, void 0, d);
                $(this, "desc", c.description || this.defaultDesc, void 0, d);
                c = a.s();
                if (c instanceof Rm)
                    $(this, "trkseg", a.s(), void 0, d);
                else if (c instanceof Sm)
                    for (e = c.u, a = 0, c = e.length; a < c; ++a)
                        $(this, "trkseg", e[a], void 0, d);
                else if (c instanceof Xm)
                    for (e =
                    c.a, a = 0, c = e.length; a < c; ++a)
                        $(this, "trkseg", e[a], void 0, d);
                return d
            },
            trkseg: function(a) {
                var c = this.createElementNS("trkseg");
                a = a.k();
                for (var d = 0, e = a.length; d < e; ++d)
                    $(this, "trkpt", a[d], void 0, c);
                return c
            },
            trkpt: function(a) {
                var c = this.createElementNS("trkpt");
                c.setAttribute("lon", a[0]);
                c.setAttribute("lat", a[1]);
                return c
            },
            metadata: function(a) {
                var c = this.createElementNS("metadata");
                s(a.name) && $(this, "name", a.name, void 0, c);
                s(a.desc) && $(this, "desc", a.desc, void 0, c);
                s(a.author) && $(this, "author", a.author,
                void 0, c);
                return c
            },
            name: function(a) {
                var c = this.createElementNS("name");
                c.appendChild(this.createTextNode(a));
                return c
            },
            desc: function(a) {
                var c = this.createElementNS("desc");
                c.appendChild(this.createTextNode(a));
                return c
            },
            author: function(a) {
                var c = this.createElementNS("author");
                c.appendChild(this.createTextNode(a));
                return c
            }
        }
    };
    Lp.call(this)
}
D(Np, Lp);
Np.prototype.M = function(a) {
    t(a) && (a = Ip(a));
    a && 9 == a.nodeType && (a = a.documentElement);
    var b = {
        metadata: {
            projection: "EPSG:4326"
        }
    };
    this.Ta(a, b);
    return b
};
Np.prototype.Lb = function(a) {
    return this.M(a)
};
Np.prototype.bc = function(a) {
    return this.M(a)
};
Np.prototype.write = function(a) {
    var b = ia(a.features) ? a.features: [a.features], c = this.createElementNS("gpx");
    c.setAttribute("version", "1.1");
    c.setAttribute("creator", this.creator);
    this.setAttributeNS(c, "http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.schemaLocation);
    s(a.metadata) && $(this, "metadata", a.metadata, void 0, c);
    a = 0;
    for (var d = b.length; a < d; a++)
        $(this, "_feature", b[a], void 0, c);
    return Mp(this, c)
};
function Op(a) {
    Qm.call(this);
    for (var b = a.length-1; 0 <= b; --b)
        G(a[b], "change", this.b, !1, this);
    this.u = a
}
D(Op, Qm);
Op.prototype.U = function() {
    for (var a = this.u.length, b = Array(a), c = 0; c < a; ++c)
        b[c] = this.u[c].U();
    return new Op(b)
};
Op.prototype.S = aa("geometrycollection");
function Pp() {}
D(Pp, Kp);
fa(Pp);
Pp.prototype.M = function(a) {
    a = JSON.parse(a);
    return Qp(this, a)
};
Pp.prototype.Lb = function(a) {
    a = JSON.parse(a);
    return Rp(this, a)
};
Pp.prototype.bc = function(a) {
    return Rp(this, a)
};
function Qp(a, b) {
    var c;
    if ("FeatureCollection" === b.type) {
        c = b.features;
        var d = c.length, e = Array(d), f;
        for (f = 0; f < d; ++f)
            e[f] = Sp(c[f]);
        c = e
    } else if ("Feature" === b.type)
        c = Sp(b);
    else if ("GeometryCollection" === b.type) {
        c = b.geometries;
        d = c.length;
        e = Array(d);
        for (f = 0; f < d; ++f)
            e[f] = Qp(a, c[f]);
            c = e
    } else 
        c = Sp({
            type: "Feature",
            geometry: b
        }).s();
    return c
}
function Rp(a, b) {
    var c = Qp(a, b), d = [], e;
    if (c instanceof N)
        d = [c];
    else if (c instanceof Td)
        e = new N, e.aa(c), d = [e];
    else if (ia(c))
        for (var f, g, h = 0, l = c.length; h < l; ++h)
            if (f = c[h], g = g || f instanceof Td)
                e = new N, e.aa(f), d[h] = e;
    else {
        d = c;
        break
    }
    c = "EPSG:4326";
    null != b.crs && (e = b.crs, "name" === e.type && (c = e.properties.name));
    return {
        features: d,
        metadata: {
            projection: c
        }
    }
}
function Sp(a) {
    var b = a.geometry, c = null, d = new N(a.properties);
    s(a.id) && (d.Fa = a.id);
    if (b) {
        a = b.type;
        switch (a) {
        case "Point":
            c = new Tm(b.coordinates);
            break;
        case "LineString":
            c = new Rm(b.coordinates);
            break;
        case "Polygon":
            c = new Xm(b.coordinates);
            break;
        case "MultiPoint":
            c = new Um(b.coordinates);
            break;
        case "MultiLineString":
            c = new Sm(b.coordinates);
            break;
        case "MultiPolygon":
            c = new Ym(b.coordinates);
            break;
        default:
            throw Error("Bad geometry type: " + a);
        }
        d.aa(c)
    }
    return d
}
function Tp(a) {
    var b = a.S();
    return {
        type: sc(function(a) {
            return a === b
        }),
        coordinates: a.k()
    }
}
function Up(a) {
    var b = a.s();
    return {
        type: "Feature",
        properties: a.kb(!0),
        geometry: Tp(b)
    }
}
Pp.prototype.write = function(a) {
    var b;
    if (a instanceof Op) {
        b = [];
        a = a.u;
        for (var c = 0, d = a.length; c < d; ++c)
            b.push(Tp(a[c]));
        b = {
            type: "GeometryCollection",
            geometries: b
        }
    } else if (a instanceof Td)
        b = Tp(a);
    else if (a instanceof N)
        b = Up(a);
    else if (ia(a)) {
        b = [];
        c = 0;
        for (d = a.length; c < d; ++c)
            b.push(Up(a[c]));
            b = {
                type: "FeatureCollection",
                features: b
            }
    }
    return JSON.stringify(b)
};
var tc = {
    Point: "point",
    LineString: "linestring",
    Polygon: "polygon",
    MultiPoint: "multipoint",
    MultiLineString: "multilinestring",
    MultiPolygon: "multipolygon",
    GeometryCollection: "geometrycollection"
}; /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Vp(a, b) {
    this.c = [];
    this.n = a;
    this.g = b || null
}
m = Vp.prototype;
m.jb=!1;
m.Vb=!1;
m.Uc=!1;
m.Ke=!1;
m.ud=!1;
m.Vc = 0;
m.cancel = function(a) {
    if (this.jb)
        this.b instanceof Vp && this.b.cancel();
    else {
        if (this.a) {
            var b = this.a;
            delete this.a;
            a ? b.cancel(a) : (b.Vc--, 0 >= b.Vc && b.cancel())
        }
        this.n ? this.n.call(this.g, this) : this.ud=!0;
        this.jb || this.zb(new Wp(this))
    }
};
m.Gd = function(a, b) {
    this.Uc=!1;
    Xp(this, a, b)
};
function Xp(a, b, c) {
    a.jb=!0;
    a.b = c;
    a.Vb=!b;
    Yp(a)
}
function Zp(a) {
    if (a.jb) {
        if (!a.ud)
            throw new $p(a);
        a.ud=!1
    }
}
function aq(a, b) {
    Zp(a);
    Xp(a, !0, b)
}
m.zb = function(a) {
    Zp(this);
    Xp(this, !1, a)
};
function bq(a, b, c) {
    return cq(a, b, null, c)
}
function cq(a, b, c, d) {
    a.c.push([b, c, d]);
    a.jb && Yp(a);
    return a
}
function dq(a) {
    return Na(a.c, function(a) {
        return ma(a[1])
    })
}
function Yp(a) {
    a.e && (a.jb && dq(a)) && (p.clearTimeout(a.e), delete a.e);
    a.a && (a.a.Vc--, delete a.a);
    for (var b = a.b, c=!1, d=!1; a.c.length&&!a.Uc;) {
        var e = a.c.shift(), f = e[0], g = e[1], e = e[2];
        if (f = a.Vb ? g : f)
            try {
                var h = f.call(e || a.g, b);
                s(h) && (a.Vb = a.Vb && (h == b || h instanceof Error), a.b = b = h);
                b instanceof Vp && (d=!0, a.Uc=!0)
            } catch (l) {
            b = l, a.Vb=!0, dq(a) || (c=!0)
        }
    }
    a.b = b;
    d && (cq(b, x(a.Gd, a, !0), x(a.Gd, a, !1)), b.Ke=!0);
    c && (a.e = p.setTimeout(Yc(b), 0))
}
function $p(a) {
    wa.call(this);
    this.a = a
}
D($p, wa);
$p.prototype.message = "Deferred has already fired";
$p.prototype.name = "AlreadyCalledError";
function Wp(a) {
    wa.call(this);
    this.a = a
}
D(Wp, wa);
Wp.prototype.message = "Deferred was canceled";
Wp.prototype.name = "CanceledError";
function eq(a, b, c, d, e, f) {
    Vp.call(this, e, f);
    this.f = a;
    this.d = [];
    this.i=!!b;
    this.r=!!c;
    this.q=!!d;
    for (b = this.j = 0; b < a.length; b++)
        cq(a[b], x(this.Ra, this, b, !0), x(this.Ra, this, b, !1));
    0 != a.length || this.i || aq(this, this.d)
}
D(eq, Vp);
eq.prototype.Ra = function(a, b, c) {
    this.j++;
    this.d[a] = [b, c];
    this.jb || (this.i && b ? aq(this, [a, c]) : this.r&&!b ? this.zb(c) : this.j == this.f.length && aq(this, this.d));
    this.q&&!b && (c = null);
    return c
};
eq.prototype.zb = function(a) {
    eq.D.zb.call(this, a);
    for (a = 0; a < this.f.length; a++)
        this.f[a].cancel()
};
function fq(a) {
    return bq(new eq(a, !1, !0), function(a) {
        for (var c = [], d = 0; d < a.length; d++)
            c[d] = a[d][1];
        return c
    })
};
var gq;
gq = {
    f: ["BC", "AD"],
    d: ["Before Christ", "Anno Domini"],
    g: "JFMAMJJASOND".split(""),
    ac: "JFMAMJJASOND".split(""),
    e: "January February March April May June July August September October November December".split(" "),
    r: "January February March April May June July August September October November December".split(" "),
    j: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    A: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    ga: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    O: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    q: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    H: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    i: "SMTWTFS".split(""),
    t: "SMTWTFS".split(""),
    n: ["Q1", "Q2", "Q3", "Q4"],
    Ra: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    a: ["AM", "PM"],
    b: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
    W: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    c: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
    ye: 6,
    ea: [5, 6],
    ze: 5
};
var hq = /^(\d{4})(?:(?:-?(\d{2})(?:-?(\d{2}))?)|(?:-?(\d{3}))|(?:-?W(\d{2})(?:-?([1-7]))?))?$/, iq = /^(\d{2})(?::?(\d{2})(?::?(\d{2})(\.\d+)?)?)?$/, jq = /Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$/;
function kq(a, b, c, d, e, f) {
    t(a) ? (this.e = a == lq ? b : 0, this.d = a == mq ? b : 0, this.a = a == nq ? b : 0, this.b = a == oq ? b : 0, this.c = a == pq ? b : 0, this.f = a == qq ? b : 0) : (this.e = a || 0, this.d = b || 0, this.a = c || 0, this.b = d || 0, this.c = e || 0, this.f = f || 0)
}
kq.prototype.U = function() {
    return new kq(this.e, this.d, this.a, this.b, this.c, this.f)
};
var lq = "y", mq = "m", nq = "d", oq = "h", pq = "n", qq = "s";
kq.prototype.add = function(a) {
    this.e += a.e;
    this.d += a.d;
    this.a += a.a;
    this.b += a.b;
    this.c += a.c;
    this.f += a.f
};
function rq(a, b, c) {
    la(a) ? (this.a = new Date(a, b || 0, c || 1), sq(this, c || 1)) : na(a) ? (this.a = new Date(a.getFullYear(), a.getMonth(), a.getDate()), sq(this, a.getDate())) : (this.a = new Date(ta()), this.a.setHours(0), this.a.setMinutes(0), this.a.setSeconds(0), this.a.setMilliseconds(0))
}
m = rq.prototype;
m.sc = gq.ye;
m.tc = gq.ze;
m.U = function() {
    var a = new rq(this.a);
    a.sc = this.sc;
    a.tc = this.tc;
    return a
};
m.getFullYear = function() {
    return this.a.getFullYear()
};
m.getMonth = function() {
    return this.a.getMonth()
};
m.getDate = function() {
    return this.a.getDate()
};
m.getTime = function() {
    return this.a.getTime()
};
function tq(a) {
    a = a.a.getTimezoneOffset();
    if (0 == a)
        a = "Z";
    else {
        var b = Math.abs(a) / 60, c = Math.floor(b), b = 60 * (b - c);
        a = (0 < a ? "-" : "+") + Ea(c) + ":" + Ea(b)
    }
    return a
}
m.add = function(a) {
    if (a.e || a.d) {
        var b = this.getMonth() + a.d + 12 * a.e, c = this.getFullYear() + Math.floor(b / 12), b = b%12;
        0 > b && (b += 12);
        var d;
        a:
        {
            switch (b) {
            case 1:
                d = 0 != c%4 || 0 == c%100 && 0 != c%400 ? 28 : 29;
                break a;
            case 5:
            case 8:
            case 10:
            case 3:
                d = 30;
                break a
            }
            d = 31
        }
        d = Math.min(d, this.getDate());
        this.a.setDate(1);
        this.a.setFullYear(c);
        this.a.setMonth(b);
        this.a.setDate(d)
    }
    a.a && (a = new Date((new Date(this.getFullYear(), this.getMonth(), this.getDate(), 12)).getTime() + 864E5 * a.a), this.a.setDate(1), this.a.setFullYear(a.getFullYear()),
    this.a.setMonth(a.getMonth()), this.a.setDate(a.getDate()), sq(this, a.getDate()))
};
m.Ac = function(a, b) {
    return [this.getFullYear(), Ea(this.getMonth() + 1), Ea(this.getDate())].join(a ? "-" : "") + (b ? tq(this) : "")
};
m.toString = function() {
    return this.Ac()
};
function sq(a, b) {
    a.getDate() != b && a.a.setUTCHours(a.a.getUTCHours() + (a.getDate() < b ? 1 : -1))
}
m.valueOf = function() {
    return this.a.valueOf()
};
function uq(a, b, c, d, e, f, g) {
    this.a = la(a) ? new Date(a, b || 0, c || 1, d || 0, e || 0, f || 0, g || 0) : new Date(a ? a.getTime() : ta())
}
D(uq, rq);
uq.prototype.add = function(a) {
    rq.prototype.add.call(this, a);
    a.b && this.a.setHours(this.a.getHours() + a.b);
    a.c && this.a.setMinutes(this.a.getMinutes() + a.c);
    a.f && this.a.setSeconds(this.a.getSeconds() + a.f)
};
uq.prototype.Ac = function(a, b) {
    var c = rq.prototype.Ac.call(this, a);
    return a ? c + " " + Ea(this.a.getHours()) + ":" + Ea(this.a.getMinutes()) + ":" + Ea(this.a.getSeconds()) + (b ? tq(this) : "") : c + "T" + Ea(this.a.getHours()) + Ea(this.a.getMinutes()) + Ea(this.a.getSeconds()) + (b ? tq(this) : "")
};
uq.prototype.toString = function() {
    return this.Ac()
};
uq.prototype.U = function() {
    var a = new uq(this.a);
    a.sc = this.sc;
    a.tc = this.tc;
    return a
};
function vq(a) {
    this.d = a.url instanceof ql ? a.url : new T(a.url);
    this.b = s(a.width) ? a.width instanceof ql ? a.width : new T(a.width) : null;
    this.a = s(a.height) ? a.height instanceof ql ? a.height : new T(a.height) : null;
    this.c = s(a.opacity) ? a.opacity instanceof ql ? a.opacity : new T(a.opacity) : new T(wq);
    this.e = s(a.rotation) ? a.rotation instanceof ql ? a.rotation : new T(a.rotation) : new T(xq);
    this.g = s(a.xOffset) ? a.xOffset instanceof ql ? a.xOffset : new T(a.xOffset) : new T(yq);
    this.i = s(a.yOffset) ? a.yOffset instanceof ql ? a.yOffset :
    new T(a.yOffset) : new T(zq);
    this.f = null != a.zIndex ? a.zIndex instanceof ql ? a.zIndex : new T(a.zIndex) : new T(Aq)
}
D(vq, em);
vq.prototype.Xa = function(a) {
    var b;
    a instanceof N && (b = a, a = (a = b.s()) ? a.S() : null);
    var c = null;
    if ("point" === a || "multipoint" === a) {
        a = U(this.d, b);
        var d;
        null === this.b || (d = Number(U(this.b, b)));
        var e;
        null === this.a || (e = Number(U(this.a, b)));
        var c = Number(U(this.c, b)), f = Number(U(this.e, b)), g = Number(U(this.g, b)), h = Number(U(this.i, b));
        b = Number(U(this.f, b));
        c = new Zm({
            url: a,
            width: d,
            height: e,
            opacity: c,
            rotation: f,
            xOffset: g,
            yOffset: h,
            zIndex: b
        })
    }
    return c
};
var wq = 1, xq = 0, yq = 0, zq = 0, Aq = 0;
function Bq(a) {
    a = s(a) ? a : {};
    this.extractAttributes = s(a.extractAttributes) ? a.extractAttributes : !0;
    this.extractStyles = s(a.extractStyles) ? a.extractStyles : !1;
    this.schemaLocation = "http://www.opengis.net/kml/2.2 http://schemas.opengis.net/kml/2.2.0/ogckml22.xsd";
    this.maxDepth = s(a.maxDepth) ? a.maxDepth : 0;
    this.trackAttributes = s(a.trackAttributes) ? a.trackAttributes : null;
    this.C = "http://www.opengis.net/kml/2.2";
    this.l = {
        "http://www.opengis.net/kml/2.2": {
            kml: function(a, c) {
                s(c.features) || (c.features = []);
                s(c.links) ||
                (c.links = []);
                X(this, a, c)
            },
            Document: function(a, c) {
                X(this, a, c)
            },
            "*": function(a, c) {
                if (!0 === this.extractAttributes) {
                    var d = a.childNodes.length;
                    1 !== d && 2 !== d || 3 !== a.firstChild.nodeType && 4 !== a.firstChild.nodeType || this.l[this.C]._attribute.apply(this, arguments)
                }
            },
            NetworkLink: function(a, c) {
                var d = {};
                X(this, a, d);
                c.links.push(d)
            },
            Link: function(a, c) {
                X(this, a, c)
            },
            _attribute: function(a, c) {
                var d = a.localName || a.nodeName.split(":").pop(), e = Z(a);
                c.properties ? c.properties[d] = e.replace(this.Q.sa, "") : c[d] = e.replace(this.Q.sa,
                "")
            },
            Placemark: function(a, c) {
                var d = {
                    properties: {}
                }, e = a.getAttribute("id");
                X(this, a, d);
                if (s(d.fa)) {
                    var f = d.fa, g, h;
                    delete d.fa;
                    for (var l = 0, n = f.wb.length; l < n; ++l) {
                        if (this.trackAttributes)
                            for (g = 0, h = this.trackAttributes.length; g < h; ++g) {
                                var q = this.trackAttributes[g];
                                d.properties[q] = f.attributes[q][l]
                            }
                        d.properties.when = f.wb[l];
                        s(f.Wa[l]) && (d.properties.heading = parseFloat(f.Wa[l][0]), d.properties.tilt = parseFloat(f.Wa[l][1]), d.properties.roll = parseFloat(f.Wa[l][2]));
                        3 === f.Kb[l].coordinates.length && (d.properties.altitude =
                        f.Kb[l].coordinates[2]);
                        g = new N(d.properties);
                        null !== e && (g.Fa = e);
                        if (h = f.Kb[l])
                            h = Cq(this, {
                                geometry: h
                            }), s(h) && g.aa(h);
                        c.features.push(g)
                    }
                } else if (s(d.geometry)) {
                    Dq(c, d.properties.styleUrl);
                    g = new N(d.properties);
                    null !== e && (g.Fa = e);
                    d.geometry && (h = Cq(this, d), s(h) && g.aa(h));
                    e = void 0;
                    if (s(d.styles))
                        e = d.styles[0].symbolizers;
                    else if (s(d.styleMaps))
                        for (d = d.styleMaps[0], l = 0, n = d.pairs.length; l < n; l++)
                            f = d.pairs[l], "normal" === f.key && (s(f.styleUrl) ? (Dq(c, f.styleUrl), g.o("styleUrl", f.styleUrl)) : s(f.styles) && (e = f.styles[0].symbolizers));
                            Eq(g, c.styles, c.styleMaps, e);
                            c.features.push(g)
                }
            },
            MultiGeometry: function(a, c) {
                var d = [];
                X(this, a, d);
                var e = Za(d, function(a) {
                    return a.type
                }), f;
                if (1 === oc(e))
                    switch (pc(e)) {
                    case "point":
                        f = {
                            type: "multipoint",
                            L: d
                        };
                        break;
                    case "linestring":
                        f = {
                            type: "multilinestring",
                            L: d
                        };
                        break;
                    case "polygon":
                        f = {
                            type: "multipolygon",
                            L: d
                        }
                    } else 
                        f = {
                            type: "geometrycollection",
                            L: d
                        };
                ia(c) ? c.push(f) : c.geometry = f
            },
            Point: function(a, c) {
                var d = [];
                X(this, a, d);
                d = {
                    type: "point",
                    coordinates: d[0][0]
                };
                ia(c) ? c.push(d) : c.geometry = d
            },
            Polygon: function(a,
            c) {
                var d = [];
                X(this, a, d);
                d = {
                    type: "polygon",
                    coordinates: d
                };
                ia(c) ? c.push(d) : c.geometry = d
            },
            LineString: function(a, c) {
                var d = [];
                X(this, a, d);
                d = {
                    type: "linestring",
                    coordinates: d[0]
                };
                ia(c) ? c.push(d) : c.geometry = d
            },
            outerBoundaryIs: function(a, c) {
                X(this, a, c)
            },
            LinearRing: function(a, c) {
                X(this, a, c)
            },
            coordinates: function(a, c) {
                for (var d = this.Q, e = Z(a).replace(d.sa, "").split(d.Nb), f = [], g = 0, h = e.length; g < h; g++) {
                    for (var l = e[g].replace(d.dg, "").split(","), n = [], q = 0, r = l.length; q < r; q++)
                        n.push(parseFloat(l[q]));
                    f.push(n)
                }
                c.push(f)
            },
            innerBoundaryIs: function(a, c) {
                X(this, a, c)
            },
            Folder: function(a, c) {
                X(this, a, c)
            },
            ExtendedData: function(a, c) {
                X(this, a, c.properties)
            },
            SchemaData: function(a, c) {
                X(this, a, c)
            },
            SimpleData: function(a, c) {
                c[a.getAttribute("name")] = Z(a)
            },
            Data: function(a, c) {
                var d = {};
                X(this, a, d);
                c[a.getAttribute("name")] = d.value
            },
            when: function(a, c) {
                var d = Z(a), e = d.split("T");
                2 === e.length && 2 === e[1].split("-").length && (d += ":00");
                var e = d, d = new uq(2E3), e = xa(e), e = e.split(-1 == e.indexOf("T") ? " " : "T"), f;
                var g = e[0].match(hq);
                if (g) {
                    var h = Number(g[2]),
                    l = Number(g[3]), n = Number(g[4]);
                    f = Number(g[5]);
                    var q = Number(g[6]) || 1;
                    d.a.setFullYear(Number(g[1]));
                    n ? (d.a.setDate(1), d.a.setMonth(0), d.add(new kq(nq, n-1))) : f ? (d.a.setMonth(0), d.a.setDate(1), g = d.a.getDay() || 7, d.add(new kq(nq, (4 >= g ? 1 - g : 8 - g) + (Number(q) + 7 * (Number(f)-1))-1))) : (h && (d.a.setDate(1), d.a.setMonth(h-1)), l && d.a.setDate(l));
                    f=!0
                } else 
                    f=!1;
                f&&!(f = 2 > e.length) && (e = e[1], f = e.match(jq), q = 0, f && ("Z" != f[0] && (q = 60 * f[2] + Number(f[3]), q*="-" == f[1] ? 1 : -1), q -= d.a.getTimezoneOffset(), e = e.substr(0, e.length - f[0].length)),
                (f = e.match(iq)) ? (d.a.setHours(Number(f[1])), d.a.setMinutes(Number(f[2]) || 0), d.a.setSeconds(Number(f[3]) || 0), d.a.setMilliseconds(f[4] ? 1E3 * f[4] : 0), 0 != q && d.a.setTime(d.getTime() + 6E4 * q), f=!0) : f=!1);
                d = f ? d : null;
                null === d || (d = new Date(d.getTime()));
                c.wb.push(d)
            },
            _trackPointAttribute: function(a, c) {
                var d = a.nodeName.split(":").pop();
                c.attributes[d].push(Z(a))
            },
            StyleMap: function(a, c) {
                if (!0 === this.extractStyles) {
                    c.styleMaps || (c.styleMaps = []);
                    var d = {
                        pairs: []
                    }, e = a.getAttribute("id");
                    null === e || (d.id = e);
                    X(this, a,
                    d);
                    c.styleMaps.push(d)
                }
            },
            Pair: function(a, c) {
                var d = {}, e = a.getAttribute("id");
                null === e || (d.id = e);
                X(this, a, d);
                c.pairs.push(d)
            },
            Style: function(a, c) {
                if (!0 === this.extractStyles) {
                    c.styles || (c.styles = []);
                    var d = {
                        symbolizers: [],
                        ids: []
                    }, e = a.getAttribute("id");
                    null === e || (d.id = e);
                    X(this, a, d);
                    c.styles.push(d)
                }
            },
            LineStyle: function(a, c) {
                var d = {}, e = {};
                X(this, a, d);
                d.color && (e.color = d.color.color, e.opacity = d.color.opacity);
                d.width && (e.width = parseFloat(d.width));
                c.ids.push(a.getAttribute("id"));
                c.symbolizers.push(new jm(e))
            },
            PolyStyle: function(a, c) {
                var d = {}, e = {};
                X(this, a, d);
                "0" !== d.fill && "false" !== d.fill && (d.color ? (e.color = d.color.color, e.opacity = d.color.opacity) : (e.color = "#ffffff", e.opacity = 1), c.symbolizers.push(new $l(e)));
                "0" !== d.outline && "false" !== d.outline && (d.color ? (e.color = d.color.color, e.opacity = d.color.opacity) : (e.color = "#ffffff", e.opacity = 1), c.symbolizers.push(new jm(e)));
                c.ids.push(a.getAttribute("id"))
            },
            fill: function(a, c) {
                c.fill = Z(a)
            },
            outline: function(a, c) {
                c.outline = Z(a)
            },
            scale: function(a, c) {
                c.scale = parseFloat(Z(a))
            },
            Icon: function(a, c) {
                c.rb = {};
                X(this, a, c.rb)
            },
            href: function(a, c) {
                c.href = Z(a)
            },
            w: function(a, c) {
                c.tg = Z(a)
            },
            h: function(a, c) {
                c.gf = Z(a)
            },
            x: function(a, c) {
                c.x = Z(a)
            },
            y: function(a, c) {
                c.y = Z(a)
            },
            hotSpot: function(a, c) {
                c.Yb = {
                    x: parseFloat(a.getAttribute("x")),
                    y: parseFloat(a.getAttribute("y")),
                    vg: a.getAttribute("xunits"),
                    wg: a.getAttribute("yunits")
                }
            },
            IconStyle: function(a, c) {
                var d = {}, e = {};
                X(this, a, d);
                var f = d.scale || 1, g = 32 * f, h = 32 * f, l, n;
                if (s(d.rb) && (l = d.rb.href, s(l))
                    ) {
                    n = d.rb.tg;
                    var q = d.rb.gf;
                    0 != l.lastIndexOf("http://maps.google.com/mapfiles/kml",
                    0) || (s(n) || s(q)) || (q = n = 64, f/=2);
                    n = n || q;
                    q = q || n;
                    n && (g = parseInt(n, 10) * f);
                    q && (h = parseInt(q, 10) * f);
                    if (n = l.match(this.Q.Pf)) {
                        var q = n[1], r = n[2];
                        l = d.rb.x;
                        n = d.rb.y;
                        l = "http://maps.google.com/mapfiles/kml/pal" + q + "/icon" + (8 * (n ? 7 - n / 32 : 7) + (l ? l / 32 : 0)) + r
                    }
                    e.opacity = 1;
                    e.url = l
                }
                s(d.Yb) && (l = d.Yb.x, n = d.Yb.y, q = d.Yb.vg, d = d.Yb.wg, "pixels" === q ? e.xOffset =- l * f : "insetPixels" === q ? e.xOffset =- g + l * f : "fraction" === q && (e.xOffset =- g * l), "pixels" == d ? e.yOffset =- h + n * f + 1 : "insetPixels" == d ? e.yOffset =- (n * f) + 1 : "fraction" == d && (e.yOffset =- h * (1 -
                n) + 1));
                e.width = g;
                e.height = h;
                c.ids.push(a.getAttribute("id"));
                c.symbolizers.push(new vq(e))
            },
            color: function(a, c) {
                var d = Z(a);
                d && (d = d.match(this.Q.Of)) && (c.color = {
                    color: "#" + d[4] + d[3] + d[2],
                    opacity: parseInt(d[1], 16) / 255
                })
            },
            width: function(a, c) {
                c.width = Z(a)
            }
        },
        "http://www.google.com/kml/ext/2.2": {
            Track: function(a, c) {
                c.fa = {
                    wb: [],
                    Kb: [],
                    Wa: []
                };
                if (this.trackAttributes) {
                    var d;
                    c.fa.attributes = {};
                    for (var e = 0, f = this.trackAttributes.length; e < f; ++e) {
                        d = this.trackAttributes[e];
                        c.fa.attributes[d] = [];
                        var g = this.l[this.C];
                        d in g || (g[d] = g._trackPointAttribute)
                    }
                }
                X(this, a, c.fa);
                if (c.fa.wb.length !== c.fa.Kb.length)
                    throw Error("gx:Track with unequal number of when (" + c.fa.wb.length + ") and gx:coord (" + c.fa.Kb.length + ") elements.");
                if (0 < c.fa.Wa.length && c.fa.wb.length !== c.fa.Wa.length)
                    throw Error("gx:Track with unequal number of when (" + c.fa.wb.length + ") and gx:angles (" + c.fa.Wa.length + ") elements.");
            },
            coord: function(a, c) {
                for (var d = Z(a).replace(this.Q.sa, "").split(/\s+/), e = 0, f = d.length; e < f; ++e)
                    d[e] = parseFloat(d[e]);
                c.Kb.push({
                    type: "point",
                    coordinates: d
                })
            },
            angles: function(a, c) {
                var d = Z(a).replace(this.Q.sa, "").split(/\s+/);
                c.Wa.push(d)
            }
        }
    };
    this.a = {
        "http://www.opengis.net/kml/2.2": {
            kml: function(a) {
                var c = this.createElementNS("kml");
                $(this, "Document", a, null, c);
                return c
            },
            Document: function(a) {
                var c = this.createElementNS("Document"), d;
                for (d in a)
                    if (a.hasOwnProperty(d) && t(a[d])) {
                        var e = this.createElementNS(d);
                        e.appendChild(this.createTextNode(a[d]));
                        c.appendChild(e)
                    }
                if (s(a.fc))
                    for (d = 0, e = a.fc.length; d < e; ++d)
                        $(this, "_style", a.fc[d], null, c);
                if (s(a.ve))
                    for (d =
                    0, e = a.ve.length; d < e; ++d)
                        $(this, "_styleMap", a.ve[d], null, c);
                d = 0;
                for (e = a.features.length; d < e; ++d)
                    $(this, "_feature", a.features[d], null, c);
                return c
            },
            _style: function(a) {
                var c = this.createElementNS("Style");
                s(a.id) && this.setAttributeNS(c, null, "id", a.id);
                for (var d = 0, e = a.symbolizers.length; d < e; ++d)
                    $(this, "_symbolizer", {
                        Nc: a.symbolizers[d],
                        id: a.Kf ? a.Kf[d]: void 0
                    }, null, c);
                return c
            },
            _styleMap: function(a) {
                var c = this.createElementNS("StyleMap");
                s(a.id) && this.setAttributeNS(c, null, "id", a.id);
                for (var d = 0, e = a.Zf.length; d <
                e; ++d)
                    $(this, "Pair", a.Zf[d], null, c);
                return c
            },
            _symbolizer: function(a) {
                var c = a.Nc;
                if (c instanceof vq)
                    return $(this, "IconStyle", a);
                if (c instanceof jm)
                    return $(this, "LineStyle", a);
                if (c instanceof $l)
                    return $(this, "PolyStyle", a)
            },
            Pair: function(a) {
                var c = this.createElementNS("Pair");
                s(a.id) && this.setAttributeNS(c, null, "id", a.id);
                s(a.key) && $(this, "key", a.key, null, c);
                if (s(a.kg))
                    $(this, "styleUrl", a.kg, null, c);
                else if (s(a.fc))
                    for (var d = 0, e = a.fc.length; d < e; ++d)
                        $(this, "_style", a.fc[d], null, c);
                return c
            },
            key: function(a) {
                var c =
                this.createElementNS("key");
                c.appendChild(this.createTextNode(a));
                return c
            },
            PolyStyle: function(a) {
                var c = this.createElementNS("PolyStyle");
                a.id && this.setAttributeNS(c, null, "id", a.id);
                a = a.Nc.Xa("polygon");
                var d, e;
                0 !== a.ja ? ($(this, "fill", "1", null, c), d = a.fillColor, e = a.ja) : $(this, "fill", "0", null, c);
                a.T ? ($(this, "outline", "1", null, c), d = d || a.strokeColor, e = e || a.T) : $(this, "outline", "0", null, c);
                d && e && $(this, "color", {
                    color: d.substring(1),
                    opacity: e
                }, null, c);
                return c
            },
            fill: function(a) {
                var c = this.createElementNS("fill");
                c.appendChild(this.createTextNode(a));
                return c
            },
            outline: function(a) {
                var c = this.createElementNS("outline");
                c.appendChild(this.createTextNode(a));
                return c
            },
            LineStyle: function(a) {
                var c = this.createElementNS("LineStyle");
                a.id && this.setAttributeNS(c, null, "id", a.id);
                a = a.Nc.Xa("linestring");
                $(this, "color", {
                    color: a.color.substring(1),
                    opacity: a.opacity
                }, null, c);
                $(this, "width", a.width, null, c);
                return c
            },
            color: function(a) {
                var c = a.color;
                a = (255 * a.opacity).toString(16) + c.substring(4, 6) + c.substring(2, 4) + c.substring(0,
                2);
                c = this.createElementNS("color");
                c.appendChild(this.createTextNode(a));
                return c
            },
            width: function(a) {
                var c = this.createElementNS("width");
                c.appendChild(this.createTextNode(a));
                return c
            },
            IconStyle: function(a) {
                var c = this.createElementNS("IconStyle");
                this.setAttributeNS(c, null, "id", a.id);
                $(this, "Icon", a.Nc.Xa("point").url, null, c);
                return c
            },
            Icon: function(a) {
                var c = this.createElementNS("Icon");
                $(this, "href", a, null, c);
                return c
            },
            href: function(a) {
                var c = this.createElementNS("href");
                c.appendChild(this.createTextNode(a));
                return c
            },
            _feature: function(a) {
                var c = this.createElementNS("Placemark"), d = a.Fa;
                s(d) && c.setAttribute("id", d);
                $(this, "name", a, null, c);
                $(this, "description", a, null, c);
                s(a.get("styleUrl")) ? $(this, "styleUrl", a.get("styleUrl"), null, c) : (d = a.Bb(), null === d || $(this, "_style", {
                    symbolizers : d
                }, null, c));
                $(this, "_geometry", a.s(), null, c);
                return c
            },
            name: function(a) {
                a = a.get("name");
                if (s(a)) {
                    var c = this.createElementNS("name");
                    c.appendChild(this.createTextNode(a));
                    return c
                }
            },
            description: function(a) {
                a = a.get("description");
                if (s(a)) {
                    var c = this.createElementNS("description");
                    c.appendChild(this.createTextNode(a));
                    return c
                }
            },
            styleUrl: function(a) {
                var c = this.createElementNS("styleUrl");
                c.appendChild(this.createTextNode(a));
                return c
            },
            _geometry: function(a) {
                if (a instanceof Tm)
                    return $(this, "Point", a);
                if (a instanceof Rm)
                    return $(this, "LineString", a);
                if (a instanceof Xm)
                    return $(this, "Polygon", a);
                if (a instanceof Qm)
                    return $(this, "MultiGeometry", a)
            },
            MultiGeometry: function(a) {
                var c = this.createElementNS("MultiGeometry");
                a = a.u;
                for (var d =
                0, e = a.length; d < e; ++d)
                    $(this, "_geometry", a[d], null, c);
                return c
            },
            Point: function(a) {
                var c = this.createElementNS("Point");
                a = a.k();
                $(this, "coordinates", [a], null, c);
                return c
            },
            LineString: function(a) {
                var c = this.createElementNS("LineString");
                $(this, "coordinates", a.k(), null, c);
                return c
            },
            Polygon: function(a) {
                var c = this.createElementNS("Polygon");
                a = a.k();
                $(this, "outerBoundaryIs", a[0], null, c);
                for (var d = 1, e = a.length; d < e; ++d)
                    $(this, "innerBoundaryIs", a[d], null, c);
                return c
            },
            outerBoundaryIs: function(a) {
                var c = this.createElementNS("outerBoundaryIs");
                $(this, "LinearRing", a, null, c);
                return c
            },
            innerBoundaryIs: function(a) {
                var c = this.createElementNS("innerBoundaryIs");
                $(this, "LinearRing", a, null, c);
                return c
            },
            LinearRing: function(a) {
                var c = this.createElementNS("LinearRing");
                $(this, "coordinates", a, null, c);
                return c
            },
            coordinates: function(a) {
                for (var c = this.createElementNS("coordinates"), d = "", e = 0, f = a.length; e < f; ++e) {
                    for (var g = 0, h = a[e].length; g < h; ++g)
                        d += a[e][g], g < h-1 && (d += ",");
                    e < f-1 && (d += " ")
                }
                c.appendChild(this.createTextNode(d));
                return c
            }
        }
    };
    Lp.call(this);
    Ac(this.Q,
    {
        Of: /(\w{2})(\w{2})(\w{2})(\w{2})/,
        Pf: /root:\/\/icons\/palette-(\d+)(\.\w+)/,
        a: /\$\[(.*?)\]/g
    })
}
D(Bq, Lp);
m = Bq.prototype;
m.me = function(a, b) {
    this.M(a, b)
};
m.ne = function(a, b) {
    this.M(a, b)
};
m.Lb = function(a) {
    return this.M(a)
};
m.bc = function(a) {
    return this.M(a)
};
function Dq(a, b) {
    s(b) && (0 == b.lastIndexOf("#", 0) || a.links.push({
        href: b
    }))
}
function Fq(a, b, c, d) {
    var e;
    if (a.c < a.maxDepth) {
        a.c++;
        for (var f = 0, g = c.links.length; f < g; ++f) {
            var h = c.links[f];
            if (!0 !== h.sg) {
                e=!0;
                var l = new Vp, n = new Rk, q = a;
                G(n, "complete", function(a) {
                    if (el(a.target)) {
                        var e;
                        var f = a.target;
                        try {
                            e = f.a ? f.a.responseXML : null
                        } catch (g) {
                            e = null
                        }
                        e = e || fl(a.target);
                        t(e) && (e = Ip(e));
                        kb(a.target);
                        e && (9 == e.nodeType && (e = e.documentElement), q.Ta(e, c));
                        Fq(q, b, c, d);
                        aq(this, e)
                    }
                }, !1, l);
                b.push(l);
                Xk(n, h.href);
                h.sg=!0
            }
        }
    }
    !0 !== e&&!0 !== a.Dd && d.call(a)
}
m.M = function(a, b) {
    t(a) && (a = Ip(a));
    a && 9 == a.nodeType && (a = a.documentElement);
    var c = {
        metadata: {
            projection: "EPSG:4326"
        }
    };
    this.Ta(a, c);
    if (s(b)) {
        var d = [];
        this.c = 0;
        this.Dd=!1;
        Fq(this, d, c, function() {
            this.Dd=!0;
            cq(fq(d), function() {
                for (var a = 0, d = c.features.length; a < d; ++a)
                    Eq(c.features[a], c.styles, c.styleMaps);
                b.call(null, c)
            }, function() {
                throw Error("KML: parsing of NetworkLinks failed");
            }, this)
        })
    } else 
        return c
};
function Eq(a, b, c, d) {
    var e, f;
    if (a.get("styleUrl") && null === a.Bb()) {
        var g = a.get("styleUrl"), g = g.substring(g.indexOf("#") + 1);
        if (s(c))
            for (e = 0, f = c.length; e < f; ++e) {
                var h = c[e];
                if (h.id === g) {
                    c = 0;
                    for (e = h.pairs.length; c < e; c++)
                        f = h.pairs[c], "normal" === f.key && (s(f.styleUrl) ? (g = f.styleUrl, g = g.substring(g.indexOf("#") + 1)) : s(f.styles) && (d = f.styles[0].symbolizers));
                        break
                }
            }
        if (!s(d) && s(b))
            for (e = 0, f = b.length; e < f; ++e)
                if (b[e].id === g) {
                    d = b[e].symbolizers;
                    break
                }
    }
    s(d) && (a.b = d)
}
function Cq(a, b) {
    var c = null, d, e;
    switch (b.geometry.type) {
    case "point":
        c = new Tm(b.geometry.coordinates);
        break;
    case "linestring":
        c = new Rm(b.geometry.coordinates);
        break;
    case "polygon":
        c = new Xm(b.geometry.coordinates);
        break;
    case "multipoint":
        d = [];
        c = 0;
        for (e = b.geometry.L.length; c < e; c++)
            d.push(b.geometry.L[c].coordinates);
        c = new Um(d);
        break;
    case "multilinestring":
        d = [];
        c = 0;
        for (e = b.geometry.L.length; c < e; c++)
            d.push(b.geometry.L[c].coordinates);
        c = new Sm(d);
        break;
    case "multipolygon":
        d = [];
        c = 0;
        for (e = b.geometry.L.length; c <
        e; c++)
            d.push(b.geometry.L[c].coordinates);
        c = new Ym(d);
        break;
    case "geometrycollection":
        d = [];
        c = 0;
        for (e = b.geometry.L.length; c < e; c++)
            d.push(Cq(a, {
                geometry: b.geometry.L[c]
            }));
        c = new Op(d)
    }
    return c
}
m.write = function(a) {
    a = $(this, "kml", a);
    this.setAttributeNS(a, "http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.schemaLocation);
    return Mp(this, a)
};
function Gq() {}
D(Gq, Kp);
fa(Gq);
function Hq(a, b) {
    for (var c = [], d, e = 0, f = a.length; e < f; ++e)
        d = a[e], 0 < e && c.pop(), d = 0 <= d ? b[d] : b[~d].slice().reverse(), c.push.apply(c, d);
    e = 0;
    for (f = c.length; e < f; ++e)
        c[e] = c[e].slice();
    return c
}
Gq.prototype.M = function(a) {
    a = JSON.parse(a);
    return this.bc(a).features
};
Gq.prototype.Lb = function(a) {
    a = JSON.parse(a);
    if ("Topology" !== a.type)
        throw Error('Not a "Topology" type object');
    return {
        features: Iq(a),
        metadata: {
            projection: "EPSG:4326"
        }
    }
};
Gq.prototype.bc = function(a) {
    if ("Topology" !== a.type)
        throw Error('Not a "Topology" type object');
    return {
        features: Iq(a),
        metadata: {
            projection: "EPSG:4326"
        }
    }
};
function Jq(a, b, c, d) {
    var e = a.type;
    if ("Point" === e)
        b = a.coordinates, Kq(b, c, d), b = new Tm(b);
    else if ("LineString" === e)
        b = Hq(a.arcs, b), b = new Rm(b);
    else if ("Polygon" === e) {
        c = a.arcs;
        d = c.length;
        for (var e = Array(d), f = 0; f < d; ++f)
            e[f] = Hq(c[f], b);
            b = new Xm(e)
    } else if ("MultiPoint" === e) {
        b = a.coordinates;
        e = 0;
        for (f = b.length; e < f; ++e)
            Kq(b[e], c, d);
            b = new Um(b)
    } else if ("MultiLineString" === e) {
        c = a.arcs;
        d = c.length;
        e = Array(d);
        for (f = 0; f < d; ++f)
            e[f] = Hq(c[f], b);
            b = new Sm(e)
    } else if ("MultiPolygon" === e) {
        c = a.arcs;
        d = c.length;
        for (var e = Array(d),
        g, h, l, n = 0; n < d; ++n) {
            f = c[n];
            g = f.length;
            h = Array(g);
            for (l = 0; l < g; ++l)
                h[l] = Hq(f[l], b);
                e[n] = h
        }
        b = new Ym(e)
    } else 
        throw Error("Unsupported geometry type: " + e);
    c = new N;
    c.aa(b);
    s(a.id) && (c.Fa = String(a.id));
    return c
}
function Lq(a, b, c, d) {
    a = a.geometries;
    for (var e = a.length, f = Array(e), g = 0; g < e; ++g)
        f[g] = Jq(a[g], b, c, d);
    return f
}
function Iq(a) {
    for (var b = a.transform, c = b.scale, b = b.translate, d = a.arcs, e = 0, f = d.length; e < f; ++e)
        for (var g = d[e], h = c, l = b, n = 0, q = 0, r = void 0, y = 0, v = g.length; y < v; ++y)
            r = g[y], n += r[0], q += r[1], r[0] = n, r[1] = q, Kq(r, h, l);
    a = a.objects;
    var e = [], B;
    for (B in a)
        "GeometryCollection" === a[B].type ? e.push.apply(e, Lq(a[B], d, c, b)) : e.push(Jq(a[B], d, c, b));
    return e
}
function Kq(a, b, c) {
    a[0] = a[0] * b[0] + c[0];
    a[1] = a[1] * b[1] + c[1]
};
function Mq() {}
D(Mq, Kp);
fa(Mq);
var Nq = /^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/, Oq = /\s+/, Pq = /\)\s*,\s*\(/, Qq = /\)\s*\)\s*,\s*\(\s*\(/, Rq = /^\s*\(?(.*?)\)?\s*$/, Sq = /,\s*([A-Za-z])/g, Tq = /[\n\r]/g;
m = Mq.prototype;
m.md = function(a) {
    a = xa(a).split(Oq);
    return new Tm(Ma(a, parseFloat))
};
m.ld = function(a) {
    a = xa(a).split(",");
    for (var b = [], c = 0, d = a.length; c < d; ++c)
        b.push(this.md.apply(this, [a[c]]).k());
    return new Rm(b)
};
m.he = function(a) {
    var b;
    a = xa(a).split(Pq);
    for (var c = [], d = 0, e = a.length; d < e; ++d)
        b = a[d].replace(Rq, "$1"), b = this.ld.apply(this, [b]).k(), c.push(b);
    return new Xm(c)
};
m.Jd = function(a) {
    a = a.k();
    return a[0] + " " + a[1]
};
m.Yc = function(a) {
    a = a.k();
    for (var b = [], c = 0, d = a.length; c < d; ++c)
        b.push(a[c][0] + " " + a[c][1]);
    return b.join(",")
};
m.Kd = function(a) {
    var b = [];
    a = a.a;
    for (var c = 0, d = a.length; c < d; ++c)
        b.push("(" + this.Yc.apply(this, [a[c]]) + ")");
    return b.join(",")
};
m.ie = function(a) {
    a = a.replace(Tq, " ");
    a = Nq.exec(a);
    var b;
    if (a)
        switch (b = a[1].toLowerCase(), a = a[2], b) {
        case "point":
            b = this.md(a);
            break;
        case "multipoint":
            var c = xa(a).split(",");
            a = [];
            for (var d = 0, e = c.length; d < e; ++d)
                b = c[d].replace(Rq, "$1"), a.push(this.md.apply(this, [b]));
                b = a.length;
                c = Array(b);
                for (d = 0; d < b; ++d)
                    c[d] = a[d].k();
                    b = new Um(c);
                    break;
                case "linestring":
                    b = this.ld(a);
                    break;
                case "multilinestring":
                    c = xa(a).split(Pq);
                    a = [];
                    d = 0;
                    for (e = c.length; d < e; ++d)
                        b = c[d].replace(Rq, "$1"), a.push(this.ld.apply(this, [b]));
                        b =
                        a.length;
                        c = Array(b);
                        for (d = 0; d < b; ++d)
                            c[d] = a[d].k();
                            b = new Sm(c);
                            break;
                        case "polygon":
                            b = this.he(a);
                            break;
                        case "multipolygon":
                            c = xa(a).split(Qq);
                            a = [];
                            d = 0;
                            for (e = c.length; d < e; ++d)
                                b = c[d].replace(Rq, "$1"), a.push(this.he.apply(this, [b]));
                                b = a.length;
                                c = Array(b);
                                for (d = 0; d < b; ++d)
                                    c[d] = a[d].k();
                                    b = new Ym(c);
                                    break;
                                case "geometrycollection":
                                    a = a.replace(Sq, "|$1");
                                    a = xa(a).split("|");
                                    b = [];
                                    c = 0;
                                    for (d = a.length; c < d; ++c)
                                        b.push(this.ie.apply(this, [a[c]]));
                                        b = new Op(b);
                                        break;
                                    default:
                                        throw Error("Bad geometry type: " + b);
        }
    return b
};
m.ge = function(a) {
    var b = a.S(), c = b.toUpperCase() + "(";
    if (a instanceof Tm)
        c += this.Jd(a);
    else if (a instanceof Um) {
        b = c;
        c = [];
        a = a.u;
        for (var d = 0, e = a.length; d < e; ++d)
            c.push("(" + this.Jd.apply(this, [a[d]]) + ")");
            c = b + c.join(",")
    } else if (a instanceof Rm)
        c += this.Yc(a);
    else if (a instanceof Sm) {
        b = c;
        c = [];
        a = a.u;
        d = 0;
        for (e = a.length; d < e; ++d)
            c.push("(" + this.Yc.apply(this, [a[d]]) + ")");
            c = b + c.join(",")
    } else if (a instanceof Xm)
        c += this.Kd(a);
    else if (a instanceof Ym) {
        b = c;
        c = [];
        a = a.u;
        d = 0;
        for (e = a.length; d < e; ++d)
            c.push("(" + this.Kd.apply(this,
            [a[d]]) + ")");
            c = b + c.join(",")
    } else if (a instanceof Op) {
        b = c;
        c = [];
        a = a.u;
        d = 0;
        for (e = a.length; d < e; ++d)
            c.push(this.ge.apply(this, [a[d]]));
            c = b + c.join(",")
    } else 
        throw Error("Bad geometry type: " + b);
    return c + ")"
};
m.M = function(a) {
    return this.ie(a)
};
m.Lb = function(a) {
    a = this.M(a);
    var b = {};
    if (s(a)) {
        var c = new N;
        c.aa(a);
        b.features = [c]
    }
    return b
};
m.write = function(a) {
    return this.ge(a)
};
function Uq(a) {
    var b = s(a) ? a: {};
    this.extractAttributes = s(b.extractAttributes) ? b.extractAttributes : !0;
    this.surface = s(b.surface) ? b.surface : !1;
    this.curve = s(b.curve) ? b.curve : !1;
    this.multiCurve = s(b.multiCurve) ? b.multiCurve : !0;
    this.multiSurface = s(b.multiSurface) ? b.multiSurface : !0;
    this.readOptions = b.readOptions;
    this.writeOptions = b.writeOptions;
    s(b.schemaLocation) && (this.schemaLocation = b.schemaLocation);
    s(b.featureNS) && (this.featureNS = b.featureNS);
    s(b.featureType) && (this.featureType = b.featureType);
    this.jg =
    !s(a) || t(a.featureType);
    this.C = "http://www.opengis.net/gml";
    this.l = {
        "http://www.opengis.net/wfs": {
            FeatureCollection: function(a, b) {
                X(this, a, b)
            }
        },
        "http://www.opengis.net/gml": {
            _inherit: function(a) {
                var b;
                s(this.srsName) || (b = this.srsName = a.getAttribute("srsName"));
                s(this.axisOrientation) || (this.axisOrientation = null != b ? fe(He(b)) : "enu")
            },
            name: function(a, b) {
                b.name = Z(a)
            },
            featureMember: function(a, b) {
                X(this, a, b)
            },
            featureMembers: function(a, b) {
                X(this, a, b)
            },
            GeometryCollection: function(a, b) {
                var e = [];
                this.l[this.C]._inherit.apply(this,
                [a, e, b]);
                X(this, a, e);
                b.geometry = {
                    type: "geometrycollection",
                    L: e
                }
            },
            geometryMember: function(a, b) {
                X(this, a, b)
            },
            MultiPoint: function(a, b) {
                var e = [];
                this.l[this.C]._inherit.apply(this, [a, e, b]);
                X(this, a, e);
                b.geometry = {
                    type: "multipoint",
                    L: e
                }
            },
            pointMember: function(a, b) {
                X(this, a, b)
            },
            MultiLineString: function(a, b) {
                var e = [];
                this.l[this.C]._inherit.apply(this, [a, e, b]);
                X(this, a, e);
                b.geometry = {
                    type: "multilinestring",
                    L: e
                }
            },
            lineStringMember: function(a, b) {
                X(this, a, b)
            },
            MultiPolygon: function(a, b) {
                var e = [];
                this.l[this.C]._inherit.apply(this,
                [a, e, b]);
                X(this, a, e);
                b.geometry = {
                    type: "multipolygon",
                    L: e
                }
            },
            polygonMember: function(a, b) {
                X(this, a, b)
            },
            Point: function(a, b) {
                var e = [];
                this.l[this.C]._inherit.apply(this, [a, e, b]);
                X(this, a, e);
                e = {
                    type: "point",
                    coordinates: e[0][0]
                };
                ia(b) ? b.push(e) : b.geometry = e
            },
            LineString: function(a, b) {
                var e = [];
                this.l[this.C]._inherit.apply(this, [a, e, b]);
                X(this, a, e);
                e = {
                    type: "linestring",
                    coordinates: e[0]
                };
                ia(b) ? b.push(e) : b.geometry = e
            },
            Polygon: function(a, b) {
                var e = {
                    ke: null,
                    Dc: []
                };
                this.l[this.C]._inherit.apply(this, [a, e, b]);
                X(this,
                a, e);
                e.Dc.unshift(e.ke);
                e = {
                    type: "polygon",
                    coordinates: e.Dc
                };
                ia(b) ? b.push(e) : b.geometry = e
            },
            LinearRing: function(a, b) {
                var e = [];
                this.l[this.C]._inherit.apply(this, [a, e, b]);
                X(this, a, e);
                ia(b) ? b.push(e) : b.geometry = {
                    type: "linearring",
                    coordinates: e[0]
                }
            },
            coordinates: function(a, b) {
                for (var e = Z(a).replace(this.Q.sa, ""), e = e.replace(this.Q.vd, ","), f = a.getAttribute("cs") || ",", g = a.getAttribute("ts") || this.Q.Nb, g = e.split(g), h = g.length, l = Array(h), n = 0; n < h; ++n)
                    e = Ma(g[n].split(f), parseFloat), "en" === this.axisOrientation.substr(0,
                2) ? l[n] = e : 2 === e.length ? l[n] = e.reverse() : 3 === e.length && (l[n] = [e[1], e[0], e[2]]);
                b.push(l)
            },
            coord: function(a, b) {
                var e = {};
                0 === b.length && b.push([]);
                X(this, a, e);
                s(e.z) ? b.push([e.x, e.y, e.z]) : b[0].push([e.x, e.y])
            },
            X: function(a, b) {
                b.x = parseFloat(Z(a))
            },
            Y: function(a, b) {
                b.y = parseFloat(Z(a))
            },
            Z: function(a, b) {
                b.z = parseFloat(Z(a))
            }
        }
    };
    this.d = {
        "*": function(a, b) {
            var e, f = a.localName || a.nodeName.split(":").pop();
            b.features ? this.jg||-1 === Ha(this.featureType, f) ? f === this.featureType && (e = "_typeName") : e = "_typeName" : 0 ===
            a.childNodes.length || 1 === a.childNodes.length && 3 === a.firstChild.nodeType ? this.extractAttributes && (e = "_attribute") : e = "_geometry";
            e && this.l[this.featureNS][e].apply(this, [a, b])
        },
        _typeName: function(a, b) {
            var e = {
                properties: {}
            };
            X(this, a, e);
            e.name && (e.properties.name = e.name);
            var f = new N(e.properties);
            if (e = e.geometry)
                e = Vq(this, {
                    geometry: e
                }), s(e) && f.aa(e);
            e = a.getAttribute("fid") || this.getAttributeNS(a, this.C, "id");
            null !== e && (f.Fa = e);
            b.features.push(f)
        },
        _geometry: function(a, b) {
            this.geometryName || (this.geometryName =
            a.nodeName.split(":").pop());
            X(this, a, b)
        },
        _attribute: function(a, b) {
            var e = a.localName || a.nodeName.split(":").pop();
            b.properties[e] = Z(a)
        }
    };
    s(this.featureNS) && (this.l[this.featureNS] = this.d);
    this.a = {
        "http://www.opengis.net/gml": {
            featureMember: function(a) {
                var b = this.createElementNS("gml:featureMember");
                $(this, "_typeName", a, this.featureNS, b);
                return b
            },
            MultiPoint: function(a) {
                var b = this.createElementNS("gml:MultiPoint");
                a = a.u;
                for (var e = 0, f = a.length; e < f; ++e)
                    $(this, "pointMember", a[e], null, b);
                return b
            },
            pointMember: function(a) {
                var b =
                this.createElementNS("gml:pointMember");
                $(this, "Point", a, null, b);
                return b
            },
            MultiLineString: function(a) {
                var b = this.createElementNS("gml:MultiLineString");
                a = a.u;
                for (var e = 0, f = a.length; e < f; ++e)
                    $(this, "lineStringMember", a[e], null, b);
                return b
            },
            lineStringMember: function(a) {
                var b = this.createElementNS("gml:lineStringMember");
                $(this, "LineString", a, null, b);
                return b
            },
            MultiPolygon: function(a) {
                var b = this.createElementNS("gml:MultiPolygon");
                a = a.u;
                for (var e = 0, f = a.length; e < f; ++e)
                    $(this, "polygonMember", a[e], null,
                    b);
                return b
            },
            polygonMember: function(a) {
                var b = this.createElementNS("gml:polygonMember");
                $(this, "Polygon", a, null, b);
                return b
            },
            GeometryCollection: function(a) {
                var b = this.createElementNS("gml:GeometryCollection");
                a = a.u;
                for (var e = 0, f = a.length; e < f; ++e)
                    $(this, "geometryMember", a[e], null, b);
                return b
            },
            geometryMember: function(a) {
                var b = this.createElementNS("gml:geometryMember");
                a = $(this, "_geometry", a, this.featureNS);
                b.appendChild(a.firstChild);
                return b
            }
        },
        "http://www.opengis.net/wfs": {
            FeatureCollection: function(a) {
                for (var b =
                this.createElementNS("wfs:FeatureCollection", "http://www.opengis.net/wfs"), e = 0, f = a.length; e < f; ++e)
                    $(this, "featureMember", a[e], null, b);
                return b
            }
        }
    };
    this.c = {
        _typeName: function(a) {
            var b = this.createElementNS("feature:" + this.featureType, this.featureNS), e = a.Fa;
            s(e) && this.setAttributeNS(b, this.C, "fid", e);
            null !== a.s() && $(this, "_geometry", a.s(), this.featureNS, b);
            a = a.kb(!0);
            for (var f in a)
                e = a[f], null != e && $(this, "_attribute", {
                name: f,
                value: e
            }, this.featureNS, b);
            return b
        },
        _geometry: function(a) {
            var b = this.createElementNS("feature:" +
            this.geometryName, this.featureNS), e = a.S(), f;
            "point" === e ? f = $(this, "Point", a, null, b) : "multipoint" === e ? f = $(this, "MultiPoint", a, null, b) : "linearring" === e ? f = $(this, "LinearRing", a.k(), null, b) : "linestring" === e ? f = $(this, "LineString", a, null, b) : "multilinestring" === e ? f = $(this, "MultiLineString", a, null, b) : "polygon" === e ? f = $(this, "Polygon", a, null, b) : "multipolygon" === e ? f = $(this, "MultiPolygon", a, null, b) : "geometrycollection" === e && (f = $(this, "GeometryCollection", a, null, b));
            null != this.srsName && this.setAttributeNS(f, null,
            "srsName", this.srsName);
            return b
        },
        _attribute: function(a) {
            var b = this.createElementNS("feature:" + a.name, this.featureNS);
            b.appendChild(this.createTextNode(a.value));
            return b
        }
    };
    s(this.featureNS) && (this.a[this.featureNS] = this.c);
    Lp.call(this)
}
D(Uq, Lp);
Uq.prototype.M = function(a, b) {
    var c;
    s(b) && s(b.srsName) ? c = b.srsName : s(this.readOptions) && s(this.readOptions.srsName) && (c = this.readOptions.srsName);
    s(c) && (this.srsName = t(c) ? c : c.Oa);
    s(b) && s(b.axisOrientation) ? this.axisOrientation = b.axisOrientation : s(this.readOptions) && s(this.readOptions.axisOrientation) && (this.axisOrientation = this.readOptions.axisOrientation);
    "string" == typeof a && (a = Ip(a));
    a && 9 == a.nodeType && (a = a.documentElement);
    c = {
        features: [],
        metadata: {}
    };
    this.Ta(a, c, !0);
    c.metadata.projection = this.srsName;
    delete this.srsName;
    delete this.axisOrientation;
    return c
};
Uq.prototype.Ta = function(a, b, c) {
    !0 === c&&!0 === this.f && (this.featureType = null, delete this.l[this.featureNS], delete this.a[this.featureNS], this.featureNS = null);
    this.featureNS || (a.namespaceURI in this.l || a.parentNode.namespaceURI != this.C ||!/^(.*:)?featureMembers?$/.test(a.parentNode.nodeName)) || (this.featureType = a.nodeName.split(":").pop(), this.l[a.namespaceURI] = this.d, this.a[a.namespaceURI] = this.c, this.featureNS = a.namespaceURI, this.f=!0);
    return Lp.prototype.Ta.apply(this, [a, b])
};
function Vq(a, b) {
    var c = null, d, e;
    switch (b.geometry.type) {
    case "point":
        c = new Tm(b.geometry.coordinates);
        break;
    case "linearring":
        c = new Vm(b.geometry.coordinates);
        break;
    case "linestring":
        c = new Rm(b.geometry.coordinates);
        break;
    case "polygon":
        c = new Xm(b.geometry.coordinates);
        break;
    case "multipoint":
        d = [];
        c = 0;
        for (e = b.geometry.L.length; c < e; c++)
            d.push(b.geometry.L[c].coordinates);
        c = new Um(d);
        break;
    case "multilinestring":
        d = [];
        c = 0;
        for (e = b.geometry.L.length; c < e; c++)
            d.push(b.geometry.L[c].coordinates);
        c = new Sm(d);
        break;
    case "multipolygon":
        d = [];
        c = 0;
        for (e = b.geometry.L.length; c < e; c++)
            d.push(b.geometry.L[c].coordinates);
        c = new Ym(d);
        break;
    case "geometrycollection":
        d = [];
        c = 0;
        for (e = b.geometry.L.length; c < e; c++)
            d.push(Vq(a, {
                geometry: b.geometry.L[c]
            }));
        c = new Op(d)
    }
    return c
}
Uq.prototype.Lb = function(a) {
    return this.M(a)
};
function Wq(a, b, c) {
    var d;
    s(c) && s(c.srsName) ? d = c.srsName : s(a.writeOptions) && s(a.writeOptions.srsName) ? d = a.writeOptions.srsName : s(b.metadata) && (d = b.metadata.projection);
    a.srsName = t(d) ? d : d.Oa;
    a.axisOrientation = s(c) && s(c.axisOrientation) ? c.axisOrientation : s(a.writeOptions) && s(a.writeOptions.axisOrientation) ? a.writeOptions.axisOrientation : fe(He(a.srsName))
};
function Xq(a) {
    this.schemaLocation = "http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd";
    Uq.call(this, a);
    Ac(this.l["http://www.opengis.net/gml"], {
        outerBoundaryIs: function(a, c) {
            var d = [];
            X(this, a, d);
            c.outer = d[0][0]
        },
        innerBoundaryIs: function(a, c) {
            var d = [];
            X(this, a, d);
            c.Dc.push(d[0][0])
        },
        Box: function(a, c) {
            var d = [];
            this.l[this.C]._inherit.apply(this, [a, d, c]);
            X(this, a, d);
            c.projection = a.getAttribute("srsName");
            c.bounds = [d[0][0][0], d[0][0][1], d[0][1][0], d[0][1][1]]
        }
    });
    Ac(this.a["http://www.opengis.net/gml"],
    {
        Point: function(a) {
            var c = this.createElementNS("gml:Point");
            $(this, "coordinates", [a.k()], null, c);
            return c
        },
        coordinates: function(a) {
            for (var c = a.length, d = Array(c), e = 0; e < c; ++e) {
                var f = a[e], g = Ra(f);
                "en" !== this.axisOrientation.substr(0, 2) && (g[0] = f[1], g[1] = f[0]);
                d[e] = g.join(",")
            }
            a = d.join(" ");
            c = this.createElementNS("gml:coordinates");
            this.setAttributeNS(c, null, "decimal", ".");
            this.setAttributeNS(c, null, "cs", ",");
            this.setAttributeNS(c, null, "ts", " ");
            c.appendChild(this.createTextNode(a));
            return c
        },
        LineString: function(a) {
            var c =
            this.createElementNS("gml:LineString");
            $(this, "coordinates", a.k(), null, c);
            return c
        },
        Polygon: function(a) {
            var c = this.createElementNS("gml:Polygon");
            a = a.k();
            $(this, "outerBoundaryIs", a[0].reverse(), null, c);
            for (var d = 1; d < a.length; ++d)
                $(this, "innerBoundaryIs", a[d].reverse(), null, c);
            return c
        },
        outerBoundaryIs: function(a) {
            var c = this.createElementNS("gml:outerBoundaryIs");
            $(this, "LinearRing", a, null, c);
            return c
        },
        innerBoundaryIs: function(a) {
            var c = this.createElementNS("gml:innerBoundaryIs");
            $(this, "LinearRing",
            a, null, c);
            return c
        },
        LinearRing: function(a) {
            var c = this.createElementNS("gml:LinearRing");
            $(this, "coordinates", a, null, c);
            return c
        },
        Box: function(a) {
            var c = this.createElementNS("gml:Box");
            $(this, "coordinates", [[a[0], a[1]], [a[2], a[3]]], null, c);
            null != this.srsName && c.setAttribute("srsName", this.srsName);
            return c
        }
    })
}
D(Xq, Uq);
Xq.prototype.write = function(a, b) {
    Wq(this, a, b);
    var c = $(this, "FeatureCollection", a.features, "http://www.opengis.net/wfs");
    this.setAttributeNS(c, "http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.schemaLocation);
    c = Mp(this, c);
    delete this.srsName;
    delete this.axisOrientation;
    return c
};
function Yq(a) {
    this.schemaLocation = "http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd";
    Uq.call(this, a);
    this.c._geometry = function(a) {
        var c = this.createElementNS("feature:" + this.geometryName, this.featureNS), d = a.S(), e;
        "point" === d ? e = $(this, "Point", a, null, c) : "multipoint" === d ? e = $(this, "MultiPoint", a, null, c) : "linestring" === d ? e=!0 === this.curve ? $(this, "Curve", a, null, c) : $(this, "LineString", a, null, c) : "linearring" === d ? e = $(this, "LinearRing", a.k(), null, c) : "multilinestring" ===
        d ? e=!1 === this.multiCurve ? $(this, "MultiLineString", a, null, c) : $(this, "MultiCurve", a, null, c) : "polygon" === d ? e=!0 === this.surface ? $(this, "Surface", a, null, c) : $(this, "Polygon", a, null, c) : "multipolygon" === d ? e=!1 === this.multiSurface ? $(this, "MultiPolygon", a, null, c) : $(this, "MultiSurface", a, null, c) : "geometrycollection" === d && (e = $(this, "MultiGeometry", a, null, c));
        null != this.srsName && this.setAttributeNS(e, null, "srsName", this.srsName);
        return c
    };
    Ac(this.l["http://www.opengis.net/gml"], {
        _inherit: $c(this.l["http://www.opengis.net/gml"]._inherit,
        function(a, c, d) {
            if (a = parseInt(a.getAttribute("srsDimension"), 10) || d && d.te)
                c.te = a
        }),
        featureMembers: function(a, c) {
            X(this, a, c)
        },
        Curve: function(a, c) {
            var d = [];
            this.l[this.C]._inherit.apply(this, [a, d, c]);
            X(this, a, d);
            d = {
                type: "linestring",
                coordinates: d[0]
            };
            ia(c) ? c.push(d) : c.geometry = d
        },
        segments: function(a, c) {
            X(this, a, c)
        },
        LineStringSegment: function(a, c) {
            var d = [];
            X(this, a, d);
            c.push(d[0])
        },
        pos: function(a, c) {
            var d = Z(a).replace(this.Q.sa, ""), d = Ma(d.split(this.Q.Nb), parseFloat);
            "en" === this.axisOrientation.substr(0,
            2) ? c.push([d]) : 2 === d.length ? c.push([d.reverse()]) : 3 === d.length && c.push([[d[1], d[0], d[2]]])
        },
        posList: function(a, c) {
            for (var d = Z(a).replace(this.Q.sa, "").split(this.Q.Nb), e = c.te || parseInt(a.getAttribute("srsDimension") || a.getAttribute("dimension"), 10) || 2, f, g, h = Array(d.length / e), l = 0, n = d.length; l < n; l += e) {
                f = parseFloat(d[l]);
                g = parseFloat(d[l + 1]);
                var q = "en" === this.axisOrientation.substr(0, 2);
                3 === e ? h[l / e] = q ? [f, g, parseFloat(d[l + 2])] : [g, f, parseFloat(d[l + 2])] : 2 === e && (h[l / e] = q ? [f, g] : [g, f])
            }
            c.push(h)
        },
        Surface: function(a,
        c) {
            X(this, a, c)
        },
        patches: function(a, c) {
            X(this, a, c)
        },
        PolygonPatch: function(a, c) {
            this.l[this.C].Polygon.apply(this, [a, c])
        },
        exterior: function(a, c) {
            var d = [];
            X(this, a, d);
            c.ke = d[0][0]
        },
        interior: function(a, c) {
            var d = [];
            X(this, a, d);
            c.Dc.push(d[0][0])
        },
        MultiCurve: function(a, c) {
            var d = [];
            this.l[this.C]._inherit.apply(this, [a, d, c]);
            X(this, a, d);
            c.geometry = {
                type: "multilinestring",
                L: d
            }
        },
        curveMember: function(a, c) {
            X(this, a, c)
        },
        MultiSurface: function(a, c) {
            var d = [];
            this.l[this.C]._inherit.apply(this, [a, d, c]);
            X(this, a,
            d);
            c.geometry = {
                type: "multipolygon",
                L: d
            }
        },
        surfaceMember: function(a, c) {
            X(this, a, c)
        },
        surfaceMembers: function(a, c) {
            X(this, a, c)
        },
        pointMembers: function(a, c) {
            X(this, a, c)
        },
        lineStringMembers: function(a, c) {
            X(this, a, c)
        },
        polygonMembers: function(a, c) {
            X(this, a, c)
        },
        geometryMembers: function(a, c) {
            X(this, a, c)
        },
        Envelope: function(a, c) {
            var d = [];
            this.l[this.C]._inherit.apply(this, [a, d, c]);
            X(this, a, d);
            c.projection = a.getAttribute("srsName");
            c.bounds = [d[0][0], d[0][1], d[1][0], d[1][1]]
        },
        lowerCorner: function(a, c) {
            var d = [];
            this.l[this.C].pos.apply(this,
            [a, d]);
            c.push(d[0][0])
        },
        upperCorner: function(a, c) {
            var d = [];
            this.l[this.C].pos.apply(this, [a, d]);
            c.push(d[0][0])
        }
    });
    Ac(this.a["http://www.opengis.net/gml"], {
        featureMembers: function(a) {
            for (var c = this.createElementNS("gml:featureMembers"), d = 0, e = a.length; d < e; ++d)
                $(this, "_typeName", a[d], this.featureNS, c);
            return c
        },
        Point: function(a) {
            var c = this.createElementNS("gml:Point");
            $(this, "pos", a.k(), null, c);
            return c
        },
        pos: function(a) {
            a = "en" === this.axisOrientation.substr(0, 2) ? a[0] + " " + a[1] : a[1] + " " + a[0];
            var c = this.createElementNS("gml:pos");
            c.appendChild(this.createTextNode(a));
            return c
        },
        LineString: function(a) {
            var c = this.createElementNS("gml:LineString");
            $(this, "posList", a.k(), null, c);
            return c
        },
        Curve: function(a) {
            var c = this.createElementNS("gml:Curve");
            $(this, "segments", a, null, c);
            return c
        },
        segments: function(a) {
            var c = this.createElementNS("gml:segments");
            $(this, "LineStringSegment", a, null, c);
            return c
        },
        LineStringSegment: function(a) {
            var c = this.createElementNS("gml:LineStringSegment");
            $(this, "posList", a.k(), null, c);
            return c
        },
        posList: function(a) {
            for (var c =
            a.length, d = Array(c), e, f = 0; f < c; ++f)
                e = a[f], d[f] = "en" === this.axisOrientation.substr(0, 2) ? e[0] + " " + e[1] : e[1] + " " + e[0];
            a = this.createElementNS("gml:posList");
            a.appendChild(this.createTextNode(d.join(" ")));
            return a
        },
        Surface: function(a) {
            var c = this.createElementNS("gml:Surface");
            $(this, "patches", a, null, c);
            return c
        },
        patches: function(a) {
            var c = this.createElementNS("gml:patches");
            $(this, "PolygonPatch", a, null, c);
            return c
        },
        PolygonPatch: function(a) {
            var c = this.createElementNS("gml:PolygonPatch");
            c.setAttribute("interpolation",
            "planar");
            a = a.k();
            $(this, "exterior", a[0].reverse(), null, c);
            for (var d = 1, e = a.length; d < e; ++d)
                $(this, "interior", a[d].reverse(), null, c);
            return c
        },
        Polygon: function(a) {
            var c = this.createElementNS("gml:Polygon");
            a = a.k();
            $(this, "exterior", a[0].reverse(), null, c);
            for (var d = 1, e = a.length; d < e; ++d)
                $(this, "interior", a[d].reverse(), null, c);
            return c
        },
        exterior: function(a) {
            var c = this.createElementNS("gml:exterior");
            $(this, "LinearRing", a, null, c);
            return c
        },
        interior: function(a) {
            var c = this.createElementNS("gml:interior");
            $(this, "LinearRing", a, null, c);
            return c
        },
        LinearRing: function(a) {
            var c = this.createElementNS("gml:LinearRing");
            $(this, "posList", a, null, c);
            return c
        },
        MultiCurve: function(a) {
            var c = this.createElementNS("gml:MultiCurve");
            a = a.u;
            for (var d = 0, e = a.length; d < e; ++d)
                $(this, "curveMember", a[d], null, c);
            return c
        },
        curveMember: function(a) {
            var c = this.createElementNS("gml:curveMember");
            this.curve ? $(this, "Curve", a, null, c) : $(this, "LineString", a, null, c);
            return c
        },
        MultiSurface: function(a) {
            var c = this.createElementNS("gml:MultiSurface");
            a = a.u;
            for (var d = 0, e = a.length; d < e; ++d)
                $(this, "surfaceMember", a[d], null, c);
            return c
        },
        surfaceMember: function(a) {
            var c = this.createElementNS("gml:surfaceMember");
            this.surface ? $(this, "Surface", a, null, c) : $(this, "Polygon", a, null, c);
            return c
        },
        Envelope: function(a) {
            var c = this.createElementNS("gml:Envelope");
            $(this, "lowerCorner", a, null, c);
            $(this, "upperCorner", a, null, c);
            s(this.srsName) && c.setAttribute("srsName", this.srsName);
            return c
        },
        lowerCorner: function(a) {
            a = "en" === this.axisOrientation.substr(0, 2) ? a[0] + " " +
            a[1] : a[1] + " " + a[0];
            var c = this.createElementNS("gml:lowerCorner");
            c.appendChild(this.createTextNode(a));
            return c
        },
        upperCorner: function(a) {
            a = "en" === this.axisOrientation.substr(0, 2) ? a[2] + " " + a[3] : a[3] + " " + a[2];
            var c = this.createElementNS("gml:upperCorner");
            c.appendChild(this.createTextNode(a));
            return c
        }
    })
}
D(Yq, Uq);
Yq.prototype.write = function(a, b) {
    Wq(this, a, b);
    var c = $(this, "featureMembers", a.features);
    this.setAttributeNS(c, "http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.schemaLocation);
    c = Mp(this, c);
    delete this.srsName;
    delete this.axisOrientation;
    return c
};
function Zq() {
    function a(a, b) {
        b.lg.push(Z(a))
    }
    function b(a, b) {
        var e = {
            code: a.getAttribute("exceptionCode"),
            Eh: a.getAttribute("locator"),
            lg: []
        };
        b.Md.push(e);
        X(this, a, e)
    }
    this.l = {
        "http://www.opengis.net/ogc": {
            ServiceExceptionReport: function(a, b) {
                b.exceptionReport = {};
                b.exceptionReport.exceptions = [];
                X(this, a, b.exceptionReport)
            },
            ServiceException: function(a, b) {
                var e = {};
                e.code = a.getAttribute("code");
                e.locator = a.getAttribute("locator");
                e.text = Z(a);
                b.exceptions.push(e)
            }
        },
        "http://www.opengis.net/ows": {
            ExceptionReport: function(a,
            b) {
                b.success=!1;
                b.Zc = {
                    version: a.getAttribute("version"),
                    language: a.getAttribute("language"),
                    Md: []
                };
                X(this, a, b.Zc)
            },
            Exception: function(a, d) {
                b.apply(this, arguments)
            },
            ExceptionText: function(b, d) {
                a.apply(this, arguments)
            }
        },
        "http://www.opengis.net/ows/1.1": {
            ExceptionReport: function(a, b) {
                b.Zc = {
                    version: a.getAttribute("version"),
                    language: a.getAttribute("xml:lang"),
                    Md: []
                };
                X(this, a, b.Zc)
            },
            Exception: function(a, d) {
                b.apply(this, arguments)
            },
            ExceptionText: function(b, d) {
                a.apply(this, arguments)
            }
        }
    };
    Lp.call(this)
}
D(Zq, Lp);
Zq.prototype.M = function(a) {
    t(a) && (a = Ip(a));
    var b = {
        exceptionReport: null
    };
    a && X(this, a, b);
    return b
};
function $q(a) {
    this.b = a = s(a) ? a : {};
    this.nc = a.nc || null;
    this.version = a.version;
    this.profile = a.profile;
    s(a.jc) ? this.jc = a.jc : this.jc=!1;
    s(a.Mc) ? this.Mc = a.Mc : this.Mc=!1
}
function ar(a, b, c) {
    b ? (c = a.version, c || (c = b.getAttribute("version"), c || (c = a.nc))) : c = c && c.version || a.version || a.nc;
    return c
}
function br(a, b) {
    b = b || a.nc;
    var c = a.profile ? "_" + a.profile: "";
    if (!a.parser || a.parser.VERSION != b) {
        var d = a.a["v" + b.replace(/\./g, "_") + c];
        if (!d && ("" !== c && a.jc && (c = "", d = a.a["v" + b.replace(/\./g, "_") + c]), !d)
            )throw "Can't find a parser for version " + b + c;
        a.parser = new d(a.b)
    }
    return a.parser
}
$q.prototype.write = function(a, b) {
    var c = ar(this, null, b);
    this.parser = br(this, c);
    c = this.parser.write(a, b);
    return !1 === this.Mc ? c : Jp(c)
};
$q.prototype.M = function(a, b) {
    t(a) && (a = Ip(a));
    var c = ar(this, a.documentElement);
    this.parser = br(this, c);
    var d = this.parser.M(a, b), e = this.parser.Ld || null;
    null !== e && void 0 === d[e] && (e = new Zq, d.error = e.M(a));
    d.version = c;
    return d
};
function cr() {
    this.C = "http://www.opengis.net/wms";
    this.Ld = "service";
    this.l = {
        "http://www.opengis.net/wms": {
            Service: function(a, b) {
                b.service = {};
                X(this, a, b.service)
            },
            Name: function(a, b) {
                b.name = Z(a)
            },
            Title: function(a, b) {
                b.title = Z(a)
            },
            Abstract: function(a, b) {
                b["abstract"] = Z(a)
            },
            BoundingBox: function(a) {
                var b = {};
                b.bbox = [parseFloat(a.getAttribute("minx")), parseFloat(a.getAttribute("miny")), parseFloat(a.getAttribute("maxx")), parseFloat(a.getAttribute("maxy"))];
                a = {
                    x: parseFloat(a.getAttribute("resx")),
                    y: parseFloat(a.getAttribute("resy"))
                };
                isNaN(a.x) && isNaN(a.y) || (b.res = a);
                return b
            },
            OnlineResource: function(a, b) {
                b.href = this.getAttributeNS(a, "http://www.w3.org/1999/xlink", "href")
            },
            ContactInformation: function(a, b) {
                b.contactInformation = {};
                X(this, a, b.contactInformation)
            },
            ContactPersonPrimary: function(a, b) {
                b.personPrimary = {};
                X(this, a, b.personPrimary)
            },
            ContactPerson: function(a, b) {
                b.person = Z(a)
            },
            ContactOrganization: function(a, b) {
                b.organization = Z(a)
            },
            ContactPosition: function(a, b) {
                b.position = Z(a)
            },
            ContactAddress: function(a, b) {
                b.contactAddress =
                {};
                X(this, a, b.contactAddress)
            },
            AddressType: function(a, b) {
                b.type = Z(a)
            },
            Address: function(a, b) {
                b.address = Z(a)
            },
            City: function(a, b) {
                b.city = Z(a)
            },
            StateOrProvince: function(a, b) {
                b.stateOrProvince = Z(a)
            },
            PostCode: function(a, b) {
                b.postcode = Z(a)
            },
            Country: function(a, b) {
                b.country = Z(a)
            },
            ContactVoiceTelephone: function(a, b) {
                b.phone = Z(a)
            },
            ContactFacsimileTelephone: function(a, b) {
                b.fax = Z(a)
            },
            ContactElectronicMailAddress: function(a, b) {
                b.email = Z(a)
            },
            Fees: function(a, b) {
                var c = Z(a);
                c && "none" != c.toLowerCase() && (b.fees = c)
            },
            AccessConstraints: function(a, b) {
                var c = Z(a);
                c && "none" != c.toLowerCase() && (b.accessConstraints = c)
            },
            Capability: function(a, b) {
                b.capability = {};
                b.capability.nestedLayers = [];
                b.capability.layers = [];
                X(this, a, b.capability)
            },
            Request: function(a, b) {
                b.request = {};
                X(this, a, b.request)
            },
            GetCapabilities: function(a, b) {
                b.getcapabilities = {};
                b.getcapabilities.formats = [];
                X(this, a, b.getcapabilities)
            },
            Format: function(a, b) {
                ia(b.formats) ? b.formats.push(Z(a)) : b.format = Z(a)
            },
            DCPType: function(a, b) {
                X(this, a, b)
            },
            HTTP: function(a, b) {
                X(this,
                a, b)
            },
            Get: function(a, b) {
                b.get = {};
                X(this, a, b.get)
            },
            Post: function(a, b) {
                b.post = {};
                X(this, a, b.post)
            },
            GetMap: function(a, b) {
                b.getmap = {};
                b.getmap.formats = [];
                X(this, a, b.getmap)
            },
            GetFeatureInfo: function(a, b) {
                b.getfeatureinfo = {};
                b.getfeatureinfo.formats = [];
                X(this, a, b.getfeatureinfo)
            },
            Exception: function(a, b) {
                b.exception = {};
                b.exception.formats = [];
                X(this, a, b.exception)
            },
            Layer: function(a, b) {
                var c, d;
                b.capability ? (d = b.capability, c = b) : d = b;
                var e = a.getAttributeNode("queryable"), f = e && e.specified ? a.getAttribute("queryable"):
                null, g = (e = a.getAttributeNode("cascaded")) && e.specified ? a.getAttribute("cascaded"): null, h = (e = a.getAttributeNode("opaque")) && e.specified ? a.getAttribute("opaque"): null, l = a.getAttribute("noSubsets"), n = a.getAttribute("fixedWidth"), q = a.getAttribute("fixedHeight"), e = c || {}, f = {
                    nestedLayers: [],
                    styles: c ? [].concat(c.styles): [],
                    srs: {},
                    metadataURLs: [],
                    bbox: {},
                    llbbox: e.llbbox,
                    dimensions: {},
                    authorityURLs: {},
                    identifiers: {},
                    keywords: [],
                    queryable: f && "" !== f ? "1" === f || "true" === f: e.queryable ||!1,
                    cascaded: null !== g ? parseInt(g,
                    10): e.cascaded || 0,
                    opaque: h ? "1" === h || "true" === h: e.opaque ||!1,
                    noSubsets: null !== l ? "1" === l || "true" === l: e.noSubsets ||!1,
                    fixedWidth: null !== n ? parseInt(n, 10): e.fixedWidth || 0,
                    fixedHeight: null !== q ? parseInt(q, 10): e.fixedHeight || 0,
                    minScale: e.minScale,
                    maxScale: e.maxScale,
                    attribution: e.attribution
                };
                c && (Ac(f.srs, e.srs), Ac(f.bbox, e.bbox), Ac(f.dimensions, e.dimensions), Ac(f.authorityURLs, e.authorityURLs));
                b.nestedLayers.push(f);
                f.capability = d;
                X(this, a, f);
                delete f.capability;
                f.name && (c = f.name.split(":"), g = d.request,
                e = g.getfeatureinfo, 0 < c.length && (f.prefix = c[0]), d.layers.push(f), s(f.formats) || (f.formats = g.getmap.formats), !s(f.infoFormats) && e && (f.infoFormats = e.formats))
            },
            Attribution: function(a, b) {
                b.attribution = {};
                X(this, a, b.attribution)
            },
            LogoURL: function(a, b) {
                b.logo = {
                    width: a.getAttribute("width"),
                    height: a.getAttribute("height")
                };
                X(this, a, b.logo)
            },
            Style: function(a, b) {
                var c = {};
                b.styles.push(c);
                X(this, a, c)
            },
            LegendURL: function(a, b) {
                var c = {
                    width: a.getAttribute("width"),
                    height: a.getAttribute("height")
                };
                b.legend = c;
                X(this,
                a, c)
            },
            MetadataURL: function(a, b) {
                var c = {
                    type: a.getAttribute("type")
                };
                b.metadataURLs.push(c);
                X(this, a, c)
            },
            DataURL: function(a, b) {
                b.dataURL = {};
                X(this, a, b.dataURL)
            },
            FeatureListURL: function(a, b) {
                b.featureListURL = {};
                X(this, a, b.featureListURL)
            },
            AuthorityURL: function(a, b) {
                var c = a.getAttribute("name"), d = {};
                X(this, a, d);
                b.authorityURLs[c] = d.href
            },
            Identifier: function(a, b) {
                var c = a.getAttribute("authority");
                b.identifiers[c] = Z(a)
            },
            KeywordList: function(a, b) {
                X(this, a, b)
            },
            SRS: function(a, b) {
                b.srs[Z(a)]=!0
            }
        }
    };
    Lp.call(this)
}
D(cr, Lp);
cr.prototype.M = function(a) {
    t(a) && (a = Ip(a));
    a && 9 == a.nodeType && (a = a.documentElement);
    var b = {};
    this.Ta(a, b);
    return b
};
function dr() {
    cr.call(this);
    var a = this.l["http://www.opengis.net/wms"].BoundingBox;
    Ac(this.l["http://www.opengis.net/wms"], {
        WMT_MS_Capabilities: function(a, c) {
            X(this, a, c)
        },
        Keyword: function(a, c) {
            c.keywords && c.keywords.push({
                value: Z(a)
            })
        },
        DescribeLayer: function(a, c) {
            c.describelayer = {
                formats: []
            };
            X(this, a, c.describelayer)
        },
        GetLegendGraphic: function(a, c) {
            c.getlegendgraphic = {
                formats: []
            };
            X(this, a, c.getlegendgraphic)
        },
        GetStyles: function(a, c) {
            c.getstyles = {
                formats: []
            };
            X(this, a, c.getstyles)
        },
        PutStyles: function(a,
        c) {
            c.putstyles = {
                formats: []
            };
            X(this, a, c.putstyles)
        },
        UserDefinedSymbolization: function(a, c) {
            var d = {
                supportSLD: 1 == parseInt(a.getAttribute("SupportSLD"), 10),
                userLayer: 1 == parseInt(a.getAttribute("UserLayer"), 10),
                userStyle: 1 == parseInt(a.getAttribute("UserStyle"), 10),
                remoteWFS: 1 == parseInt(a.getAttribute("RemoteWFS"), 10)
            };
            c.userSymbols = d
        },
        LatLonBoundingBox: function(a, c) {
            c.llbbox = [parseFloat(a.getAttribute("minx")), parseFloat(a.getAttribute("miny")), parseFloat(a.getAttribute("maxx")), parseFloat(a.getAttribute("maxy"))]
        },
        BoundingBox: function(b, c) {
            var d = a.apply(this, arguments);
            d.srs = b.getAttribute("SRS");
            c.bbox[d.srs] = d
        },
        ScaleHint: function(a, c) {
            var d = parseFloat(a.getAttribute("min")), e = parseFloat(a.getAttribute("max")), f = Math.pow(2, 0.5), g = 25.4 / 0.28;
            0 !== d && (c.maxScale = parseFloat(39.37 * (d / f) * g));
            Infinity != e && (c.minScale = parseFloat(39.37 * (e / f) * g))
        },
        Dimension: function(a, c) {
            var d = {
                name: a.getAttribute("name").toLowerCase(),
                units: a.getAttribute("units"),
                unitsymbol: a.getAttribute("unitSymbol")
            };
            c.dimensions[d.name] = d
        },
        Extent: function(a,
        c) {
            var d = a.getAttribute("name").toLowerCase();
            d in c.dimensions && (d = c.dimensions[d], d.nearestVal = "1" === a.getAttribute("nearestValue"), d.multipleVal = "1" === a.getAttribute("multipleValues"), d.current = "1" === a.getAttribute("current"), d["default"] = a.getAttribute("default") || "", d.values = Z(a).split(","))
        }
    })
}
D(dr, cr);
function er() {
    dr.call(this);
    this.version = "1.1.0";
    Ac(this.l["http://www.opengis.net/wms"], {
        SRS: function(a, b) {
            for (var c = Z(a).split(/ +/), d = 0, e = c.length; d < e; d++)
                b.srs[c[d]]=!0
        }
    })
}
D(er, dr);
function fr() {
    dr.call(this);
    this.version = "1.1.1";
    Ac(this.l["http://www.opengis.net/wms"], {
        SRS: function(a, b) {
            b.srs[Z(a)]=!0
        }
    })
}
D(fr, dr);
function gr() {
    fr.call(this);
    this.profile = "WMSC";
    Ac(this.l["http://www.opengis.net/wms"], {
        VendorSpecificCapabilities: function(a, b) {
            b.vendorSpecific = {
                tileSets: []
            };
            X(this, a, b.vendorSpecific)
        },
        TileSet: function(a, b) {
            var c = {
                srs: {},
                bbox: {},
                resolutions: []
            };
            X(this, a, c);
            b.Fh.push(c)
        },
        Resolutions: function(a, b) {
            for (var c = Z(a).split(" "), d = 0, e = c.length; d < e; d++)
                "" !== c[d] && b.resolutions.push(parseFloat(c[d]))
        },
        Width: function(a, b) {
            b.width = parseInt(Z(a), 10)
        },
        Height: function(a, b) {
            b.height = parseInt(Z(a), 10)
        },
        Layers: function(a,
        b) {
            b.layers = Z(a)
        },
        Styles: function(a, b) {
            b.styles = Z(a)
        }
    })
}
D(gr, fr);
function hr() {
    cr.call(this);
    var a = this.l["http://www.opengis.net/wms"].BoundingBox;
    Ac(this.l["http://www.opengis.net/wms"], {
        WMS_Capabilities: function(a, c) {
            X(this, a, c)
        },
        LayerLimit: function(a, c) {
            c.layerLimit = parseInt(Z(a), 10)
        },
        MaxWidth: function(a, c) {
            c.maxWidth = parseInt(Z(a), 10)
        },
        MaxHeight: function(a, c) {
            c.maxHeight = parseInt(Z(a), 10)
        },
        BoundingBox: function(b, c) {
            var d = a.apply(this, arguments);
            d.srs = b.getAttribute("CRS");
            c.bbox[d.srs] = d
        },
        CRS: function(a, c) {
            this.l["http://www.opengis.net/wms"].SRS.apply(this,
            arguments)
        },
        EX_GeographicBoundingBox: function(a, c) {
            c.llbbox = [];
            X(this, a, c.llbbox)
        },
        westBoundLongitude: function(a, c) {
            c[0] = Z(a)
        },
        eastBoundLongitude: function(a, c) {
            c[2] = Z(a)
        },
        southBoundLatitude: function(a, c) {
            c[1] = Z(a)
        },
        northBoundLatitude: function(a, c) {
            c[3] = Z(a)
        },
        MinScaleDenominator: function(a, c) {
            c.maxScale = parseFloat(Z(a)).toPrecision(16)
        },
        MaxScaleDenominator: function(a, c) {
            c.minScale = parseFloat(Z(a)).toPrecision(16)
        },
        Dimension: function(a, c) {
            var d = {
                name: a.getAttribute("name").toLowerCase(),
                units: a.getAttribute("units"),
                unitsymbol: a.getAttribute("unitSymbol"),
                nearestVal: "1" === a.getAttribute("nearestValue"),
                multipleVal: "1" === a.getAttribute("multipleValues"),
                "default": a.getAttribute("default") || "",
                current: "1" === a.getAttribute("current"),
                values: Z(a).split(",")
            };
            c.dimensions[d.name] = d
        },
        Keyword: function(a, c) {
            var d = {
                value: Z(a),
                vocabulary: a.getAttribute("vocabulary")
            };
            c.keywords && c.keywords.push(d)
        }
    });
    this.l.sld = {
        UserDefinedSymbolization: function(a, c) {
            this.l["http://www.opengis.net/wms"].Bh.apply(this, arguments);
            var d =
            a.getAttribute("InlineFeature");
            c.userSymbols.inlineFeature = 1 == parseInt(d, 10);
            d = a.getAttribute("RemoteWCS");
            c.userSymbols.remoteWCS = 1 == parseInt(d, 10)
        },
        DescribeLayer: function(a, c) {
            this.l["http://www.opengis.net/wms"].Pg.apply(this, arguments)
        },
        GetLegendGraphic: function(a, c) {
            this.l["http://www.opengis.net/wms"].Vg.apply(this, arguments)
        }
    }
}
D(hr, cr);
function ir(a) {
    a = a || {};
    a.defaultVersion = "1.1.1";
    this.a = {};
    this.a.v1_1_0 = er;
    this.a.v1_1_1 = fr;
    this.a.v1_1_1_WMSC = gr;
    this.a.v1_3_0 = hr;
    $q.call(this, a)
}
D(ir, $q);
function jr() {
    this.l = {
        "http://www.opengis.net/ows": {
            ServiceIdentification: function(a, b) {
                b.serviceIdentification = {};
                X(this, a, b.serviceIdentification)
            },
            Title: function(a, b) {
                b.title = Z(a)
            },
            Abstract: function(a, b) {
                b["abstract"] = Z(a)
            },
            Keywords: function(a, b) {
                b.keywords = {};
                X(this, a, b.keywords)
            },
            Keyword: function(a, b) {
                b[Z(a)]=!0
            },
            ServiceType: function(a, b) {
                b.serviceType = {
                    codeSpace: a.getAttribute("codeSpace"),
                    value: Z(a)
                }
            },
            ServiceTypeVersion: function(a, b) {
                b.serviceTypeVersion = Z(a)
            },
            Fees: function(a, b) {
                b.fees = Z(a)
            },
            AccessConstraints: function(a, b) {
                b.accessConstraints = Z(a)
            },
            ServiceProvider: function(a, b) {
                b.serviceProvider = {};
                X(this, a, b.serviceProvider)
            },
            ProviderName: function(a, b) {
                b.providerName = Z(a)
            },
            ProviderSite: function(a, b) {
                b.providerSite = this.getAttributeNS(a, "http://www.w3.org/1999/xlink", "href")
            },
            ServiceContact: function(a, b) {
                b.serviceContact = {};
                X(this, a, b.serviceContact)
            },
            IndividualName: function(a, b) {
                b.individualName = Z(a)
            },
            PositionName: function(a, b) {
                b.positionName = Z(a)
            },
            ContactInfo: function(a, b) {
                b.contactInfo =
                {};
                X(this, a, b.contactInfo)
            },
            Phone: function(a, b) {
                b.phone = {};
                X(this, a, b.phone)
            },
            Voice: function(a, b) {
                b.voice = Z(a)
            },
            Address: function(a, b) {
                b.address = {};
                X(this, a, b.address)
            },
            DeliveryPoint: function(a, b) {
                b.deliveryPoint = Z(a)
            },
            City: function(a, b) {
                b.city = Z(a)
            },
            AdministrativeArea: function(a, b) {
                b.administrativeArea = Z(a)
            },
            PostalCode: function(a, b) {
                b.postalCode = Z(a)
            },
            Country: function(a, b) {
                b.country = Z(a)
            },
            ElectronicMailAddress: function(a, b) {
                b.electronicMailAddress = Z(a)
            },
            Role: function(a, b) {
                b.role = Z(a)
            },
            OperationsMetadata: function(a,
            b) {
                b.operationsMetadata = {};
                X(this, a, b.operationsMetadata)
            },
            Operation: function(a, b) {
                var c = a.getAttribute("name");
                b[c] = {};
                X(this, a, b[c])
            },
            DCP: function(a, b) {
                b.dcp = {};
                X(this, a, b.dcp)
            },
            HTTP: function(a, b) {
                b.http = {};
                X(this, a, b.http)
            },
            Get: function(a, b) {
                b.get || (b.get = []);
                var c = {
                    url: this.getAttributeNS(a, "http://www.w3.org/1999/xlink", "href")
                };
                X(this, a, c);
                b.get.push(c)
            },
            Post: function(a, b) {
                b.post || (b.post = []);
                var c = {
                    url: this.getAttributeNS(a, "http://www.w3.org/1999/xlink", "href")
                };
                X(this, a, c);
                b.post.push(c)
            },
            Parameter: function(a, b) {
                b.parameters || (b.parameters = {});
                var c = a.getAttribute("name");
                b.parameters[c] = {};
                X(this, a, b.parameters[c])
            },
            Constraint: function(a, b) {
                b.constraints || (b.constraints = {});
                var c = a.getAttribute("name");
                b.constraints[c] = {};
                X(this, a, b.constraints[c])
            },
            Value: function(a, b) {
                b[Z(a)]=!0
            },
            OutputFormat: function(a, b) {
                b.formats.push({
                    value: Z(a)
                });
                X(this, a, b)
            },
            WGS84BoundingBox: function(a, b) {
                var c = {};
                c.crs = a.getAttribute("crs");
                b.BoundingBox ? b.BoundingBox.push(c) : (b.projection = c.crs, c = b);
                X(this,
                a, c)
            },
            BoundingBox: function(a, b) {
                this.l[a.namespaceURI].WGS84BoundingBox.apply(this, [a, b])
            },
            LowerCorner: function(a, b) {
                var c = Z(a).replace(this.Q.sa, ""), c = c.replace(this.Q.vd, ","), c = c.split(this.Q.Nb);
                b.left = c[0];
                b.bottom = c[1]
            },
            UpperCorner: function(a, b) {
                var c = Z(a).replace(this.Q.sa, ""), c = c.replace(this.Q.vd, ","), c = c.split(this.Q.Nb);
                b.right = c[0];
                b.top = c[1];
                b.bounds = [parseFloat(b.left), parseFloat(b.right), parseFloat(b.bottom), parseFloat(b.top)];
                delete b.left;
                delete b.bottom;
                delete b.right;
                delete b.top
            },
            Language: function(a, b) {
                b.language = Z(a)
            }
        }
    };
    Lp.call(this)
}
D(jr, Lp);
function kr() {
    jr.call(this);
    this.l["http://www.opengis.net/ows/1.1"] = this.l["http://www.opengis.net/ows"];
    Ac(this.l["http://www.opengis.net/ows/1.1"], {
        AllowedValues: function(a, b) {
            b.allowedValues = {};
            X(this, a, b.allowedValues)
        },
        AnyValue: function(a, b) {
            b.anyValue=!0
        },
        DataType: function(a, b) {
            b.dataType = Z(a)
        },
        Range: function(a, b) {
            b.range = {};
            X(this, a, b.range)
        },
        MinimumValue: function(a, b) {
            b.minValue = Z(a)
        },
        MaximumValue: function(a, b) {
            b.maxValue = Z(a)
        },
        Identifier: function(a, b) {
            b.identifier = Z(a)
        },
        SupportedCRS: function(a,
        b) {
            b.supportedCRS = Z(a)
        }
    })
}
D(kr, jr);
function lr() {
    this.C = "http://www.opengis.net/wmts/1.0";
    this.Ld = "serviceIdentification";
    this.l = {
        "http://www.opengis.net/wmts/1.0": {
            Capabilities: function(a, c) {
                X(this, a, c)
            },
            Contents: function(a, c) {
                c.contents = {};
                c.contents.layers = [];
                c.contents.tileMatrixSets = {};
                X(this, a, c.contents)
            },
            Layer: function(a, c) {
                var d = {
                    styles: [],
                    formats: [],
                    dimensions: [],
                    tileMatrixSetLinks: [],
                    layers: []
                };
                X(this, a, d);
                c.layers.push(d)
            },
            Style: function(a, c) {
                var d = {};
                d.isDefault = "true" === a.getAttribute("isDefault");
                X(this, a, d);
                c.styles.push(d)
            },
            Format: function(a, c) {
                c.formats.push(Z(a))
            },
            TileMatrixSetLink: function(a, c) {
                var d = {};
                X(this, a, d);
                c.tileMatrixSetLinks.push(d)
            },
            TileMatrixSet: function(a, c) {
                if (c.layers) {
                    var d = {
                        matrixIds: []
                    };
                    X(this, a, d);
                    c.tileMatrixSets[d.identifier] = d
                } else 
                    c.tileMatrixSet = Z(a)
            },
            TileMatrix: function(a, c) {
                var d = {
                    supportedCRS: c.supportedCRS
                };
                X(this, a, d);
                c.matrixIds.push(d)
            },
            ScaleDenominator: function(a, c) {
                c.scaleDenominator = parseFloat(Z(a))
            },
            TopLeftCorner: function(a, c) {
                var d = Z(a).split(" "), e = fe(He(c.supportedCRS));
                c.topLeftCorner =
                Cd([parseFloat(d[0]), parseFloat(d[1])], e)
            },
            TileWidth: function(a, c) {
                c.tileWidth = parseInt(Z(a), 10)
            },
            TileHeight: function(a, c) {
                c.tileHeight = parseInt(Z(a), 10)
            },
            MatrixWidth: function(a, c) {
                c.matrixWidth = parseInt(Z(a), 10)
            },
            MatrixHeight: function(a, c) {
                c.matrixHeight = parseInt(Z(a), 10)
            },
            ResourceURL: function(a, c) {
                var d = a.getAttribute("resourceType"), e = a.getAttribute("format"), f = a.getAttribute("template");
                c.resourceUrls || (c.resourceUrls = {});
                c.resourceUrls[d] || (c.resourceUrls[d] = {});
                c.resourceUrls[d][e] || (c.resourceUrls[d][e] =
                []);
                c.resourceUrls[d][e].push(f)
            },
            WSDL: function(a, c) {
                c.wsdl = {};
                c.wsdl.href = this.getAttributeNS(a, "http://www.w3.org/1999/xlink", "href")
            },
            ServiceMetadataURL: function(a, c) {
                c.serviceMetadataUrl = {};
                c.serviceMetadataUrl.href = this.getAttributeNS(a, "http://www.w3.org/1999/xlink", "href")
            },
            LegendURL: function(a, c) {
                c.legend = {};
                c.legend.href = this.getAttributeNS(a, "http://www.w3.org/1999/xlink", "href");
                c.legend.format = a.getAttribute("format")
            },
            Dimension: function(a, c) {
                var d = {
                    values: []
                };
                X(this, a, d);
                c.dimensions.push(d)
            },
            Default: function(a, c) {
                c["default"] = Z(a)
            },
            Value: function(a, c) {
                c.values.push(Z(a))
            }
        }
    };
    var a = new kr;
    this.l["http://www.opengis.net/ows/1.1"] = a.l["http://www.opengis.net/ows/1.1"];
    Lp.call(this)
}
D(lr, Lp);
lr.prototype.M = function(a) {
    t(a) && (a = Ip(a));
    a && 9 == a.nodeType && (a = a.documentElement);
    var b = {};
    this.Ta(a, b);
    return b
};
function mr(a) {
    a = a || {};
    a.defaultVersion = "1.0.0";
    this.a = {};
    this.a.v1_0_0 = lr;
    $q.call(this, a)
}
D(mr, $q);
function nr(a, b) {
    var c = b || {}, d = c.document || document, e = Og("SCRIPT"), f = {
        re: e,
        vb: void 0
    }, g = new Vp(or, f), h = null, l = null != c.timeout ? c.timeout: 5E3;
    0 < l && (h = window.setTimeout(function() {
        pr(e, !0);
        g.zb(new qr(rr, "Timeout reached for loading script " + a))
    }, l), f.vb = h);
    e.onload = e.onreadystatechange = function() {
        e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (pr(e, c.Fd ||!1, h), aq(g, null))
    };
    e.onerror = function() {
        pr(e, !0, h);
        g.zb(new qr(sr, "Error while loading script " + a))
    };
    Ig(e, {
        type: "text/javascript",
        charset: "UTF-8",
        src: a
    });
    tr(d).appendChild(e);
    return g
}
function tr(a) {
    var b = a.getElementsByTagName("HEAD");
    return b && 0 != b.length ? b[0] : a.documentElement
}
function or() {
    if (this && this.re) {
        var a = this.re;
        a && "SCRIPT" == a.tagName && pr(a, !0, this.vb)
    }
}
function pr(a, b, c) {
    null != c && p.clearTimeout(c);
    a.onload = ea;
    a.onerror = ea;
    a.onreadystatechange = ea;
    b && window.setTimeout(function() {
        Tg(a)
    }, 0)
}
var sr = 0, rr = 1;
function qr(a, b) {
    var c = "Jsloader error (code #" + a + ")";
    b && (c += ": " + b);
    wa.call(this, c);
    this.code = a
}
D(qr, wa);
function ur(a, b) {
    this.b = new $f(a);
    this.a = b ? b : "callback";
    this.vb = 5E3
}
var vr = 0;
ur.prototype.cancel = function(a) {
    a && (a.Wc && a.Wc.cancel(), a.ia && wr(a.ia, !1))
};
function xr(a) {
    return function() {
        wr(a, !1)
    }
}
function yr(a, b) {
    return function(c) {
        wr(a, !0);
        b.apply(void 0, arguments)
    }
}
function wr(a, b) {
    p._callbacks_[a] && (b ? delete p._callbacks_[a] : p._callbacks_[a] = ea)
};
function zr(a) {
    return function(b) {
        return null === b ? void 0 : a.replace("{z}", "" + b.z).replace("{x}", "" + b.x).replace("{y}", "" + b.y)
    }
}
function Ar(a) {
    return Br(Ma(a, zr))
}
function Br(a) {
    return 1 === a.length ? a[0] : function(b, c) {
        return null === b ? void 0 : a[qd((b.x<<b.z) + b.y, a.length)].call(this, b, c)
    }
}
function Cr(a, b) {
    var c = Ek, d = Ed();
    return function(e, f) {
        if (null !== e) {
            var g = this.tileGrid;
            null === g && (g = Jj(f));
            var h = g.va(e.z), g = Dj(g, e, d);
            return c.call(this, a, b, g, h, f)
        }
    }
}
function Dr() {}
function Er(a, b) {
    var c = new $a(0, 0, 0);
    return function(d, e) {
        return null === d ? void 0 : b.call(this, a.call(this, d, e, c), e)
    }
}
function Fr(a) {
    var b = [], c = /\{(\d)-(\d)\}/.exec(a) || /\{([a-z])-([a-z])\}/.exec(a);
    if (c) {
        var d = c[2].charCodeAt(0), e;
        for (e = c[1].charCodeAt(0); e <= d; ++e)
            b.push(a.replace(c[0], String.fromCharCode(e)))
    } else 
        b.push(a);
    return b
};
function Gr(a) {
    nk.call(this, {
        attributions: a.attributions,
        extent: a.extent,
        logo: a.logo,
        opaque: a.opaque,
        projection: a.projection,
        tileGrid: a.tileGrid
    });
    this.tileUrlFunction = s(a.tileUrlFunction) ? a.tileUrlFunction : Dr;
    this.q = s(a.crossOrigin) ? a.crossOrigin : null;
    this.a = new Om;
    this.r = s(a.tileLoadFunction) ? a.tileLoadFunction : Hr
}
D(Gr, nk);
function Hr(a, b) {
    a.d().src = b
}
m = Gr.prototype;
m.pd = function() {
    return this.a.ka() > this.a.d
};
m.je = function(a) {
    Pm(this.a, a)
};
m.Cb = function(a, b, c, d) {
    var e = this.$a(a, b, c);
    if (Mm(this.a, e))
        return this.a.get(e);
    a = new $a(a, b, c);
    d = this.tileUrlFunction(a, d);
    d = new Me(a, s(d) ? 0 : 4, s(d) ? d : "", this.q, this.r);
    Nm(this.a, e, d);
    return d
};
m.cc = function(a) {
    this.a.clear();
    this.tileUrlFunction = a;
    kf(this)
};
m.we = function(a, b, c) {
    a = this.$a(a, b, c);
    Mm(this.a, a) && this.a.get(a)
};
function Ir(a) {
    var b = Array(a.maxZoom + 1), c, d = 2 * uj / 256;
    for (c = 0; c <= a.maxZoom; ++c)
        b[c] = d / Math.pow(2, c);
    Bj.call(this, {
        minZoom: a.minZoom,
        origin: [ - uj, uj],
        resolutions: b,
        tileSize: [256, 256]
    })
}
D(Ir, Bj);
function Jr(a, b) {
    var c = s(b) ? b: {}, d = a.minZoom, e = a.maxZoom, f = s(c.ug) ? c.ug: !0, g = new $a(0, 0, 0), h = null;
    if (s(c.extent)) {
        var h = Array(e + 1), l;
        for (l = 0; l <= e; ++l)
            h[l] = l < d ? null : Ej(a, c.extent, l)
    }
    return function(a, b, c) {
        b = a.z;
        if (b < d || e < b)
            return null;
        var l = Math.pow(2, b), v = a.x;
        if (f)
            v = qd(v, l);
        else if (0 > v || l <= v)
            return null;
        a = a.y;
        return a<-l||-1 < a || null !== h && (g.z = b, g.x = v, g.y = a, !h[b].contains(g)) ? null : s(c) ? (c.z = b, c.x = v, c.y =- a-1, c) : new $a(b, v, - a-1)
    }
}
Ir.prototype.zc = function(a, b) {
    return a.z < this.maxZoom ? eb(2 * a.x, 2 * (a.x + 1), 2 * a.y, 2 * (a.y + 1), b) : null
};
Ir.prototype.uc = function(a, b, c, d) {
    d = eb(0, a.x, 0, a.y, d);
    for (a = a.z-1; a >= this.minZoom; --a)
        if (d.a = d.d>>=1, d.c = d.b>>=1, b.call(c, a, d)
            )return !0;
    return !1
};
function Kr(a) {
    Gr.call(this, {
        crossOrigin: "anonymous",
        opaque: !0,
        projection: He("EPSG:3857"),
        state: 0,
        tileLoadFunction: a.tileLoadFunction
    });
    this.b = s(a.culture) ? a.culture : "en-us";
    var b = new $f("//dev.virtualearth.net/REST/v1/Imagery/Metadata/" + a.imagerySet), b = new ur(b, "jsonp"), c = {
        include: "ImageryProviders",
        key: a.key
    };
    a = x(this.e, this);
    var d = c || null, c = "_" + (vr++).toString(36) + ta().toString(36);
    p._callbacks_ || (p._callbacks_ = {});
    var e = b.b.U();
    if (d)
        for (var f in d)
            d.hasOwnProperty&&!d.hasOwnProperty(f) || mg(e,
            f, d[f]);
    a && (p._callbacks_[c] = yr(c, a), mg(e, b.a, "_callbacks_." + c));
    f = nr(e.toString(), {
        timeout: b.vb,
        Fd: !0
    });
    cq(f, null, xr(c), void 0)
}
D(Kr, Gr);
var Lr = new fb({
    html: '\x3ca class\x3d"ol-attribution-bing-tos" target\x3d"_blank" href\x3d"http://www.microsoft.com/maps/product/terms.html"\x3eTerms of Use\x3c/a\x3e'
});
Kr.prototype.e = function(a) {
    if (200 != a.statusCode || "OK" != a.statusDescription || "ValidCredentials" != a.authenticationResultCode || 1 != a.resourceSets.length || 1 != a.resourceSets[0].resources.length)
        this.f = 2;
    else {
        var b = a.brandLogoUri, c = a.resourceSets[0].resources[0], d = new Ir({
            minZoom: c.zoomMin,
            maxZoom: c.zoomMax,
            tileSize: [c.imageWidth, c.imageHeight]
        });
        this.tileGrid = d;
        var e = this.b;
        this.tileUrlFunction = Er(Jr(d), Br(Ma(c.imageUrlSubdomains, function(a) {
            var b = c.imageUrl.replace("{subdomain}", a).replace("{culture}",
            e);
            return function(a) {
                return null === a ? void 0 : b.replace("{quadkey}", cb(a))
            }
        })));
        var f = he(He("EPSG:4326"), this.da());
        a = Ma(c.imageryProviders, function(a) {
            var b = a.attribution, c = {};
            Ia(a.coverageAreas, function(a) {
                var b = a.zoomMin, e = a.zoomMax;
                a = a.bbox;
                a = Sd([a[1], a[0], a[3], a[2]], f);
                var g, h;
                for (g = b; g <= e; ++g)
                    h = g.toString(), b = Ej(d, a, g), h in c ? c[h].push(b) : c[h] = [b]
            });
            return new fb({
                html: b,
                tileRanges: c
            })
        });
        a.push(Lr);
        this.d = a;
        this.i = b;
        this.f = 1
    }
    kf(this)
};
function Mr(a) {
    var b = Nr(a.url), c = a.imageExtent, d = a.imageSize, e = (c[3] - c[1]) / d[1], f = He(a.projection);
    Gk.call(this, {
        attributions: a.attributions,
        crossOrigin: a.crossOrigin,
        extent: a.extent,
        projection: a.projection,
        Gb: b,
        resolutions: [e]
    });
    this.a = Hk(this, c, e, d, f)
}
D(Mr, Gk);
Mr.prototype.b = function(a) {
    return Qd(a, this.a.ca()) ? this.a : null
};
function Nr(a) {
    return function() {
        return a
    }
};
function Ek(a, b, c, d, e) {
    d = {
        SERVICE: "WMS",
        VERSION: "1.3.0",
        REQUEST: "GetMap",
        FORMAT: "image/png",
        TRANSPARENT: !0,
        WIDTH: Math.round(d[0]),
        HEIGHT: Math.round(d[1])
    };
    Ac(d, b);
    d.STYLES = b.STYLES || new String("");
    b = "1.3" < d.VERSION;
    d[b ? "CRS": "SRS"] = e.Oa;
    e = e.d;
    d.BBOX = (b && "ne" == e.substr(0, 2) ? [c[1], c[0], c[3], c[2]] : [c[0], c[1], c[2], c[3]]).join(",");
    return Xf(Zf([a], d))
}
function Or(a, b, c, d, e) {
    a = a.replace("REQUEST\x3dGetMap", "REQUEST\x3dGetFeatureInfo").replace(Pr, "LAYERS\x3d$1\x26QUERY_LAYERS\x3d$1");
    c = s(c) ? vc(c) : {};
    var f = {
        method: "iframe",
        params: {}
    };
    Ac(f, c);
    c = {
        INFO_FORMAT: "text/html"
    };
    var g = parseFloat(a.match(Qr)[1]), h = Math.round(b[0]);
    b = Math.round(b[1]);
    1.3 <= g ? Ac(c, {
        I: h,
        J: b
    }) : Ac(c, {
        X: h,
        Y: b
    });
    Ac(c, f.params);
    a = Xf(Zf([a], c));
    "iframe" == f.method ? p.setTimeout(function() {
        d('\x3ciframe seamless src\x3d"' + a + '"\x3e\x3c/iframe\x3e')
    }, 0) : "xhr_get" == f.method && Wk(a, function(a) {
        a =
        a.target;
        el(a) ? d(fl(a)) : s(e) && e()
    })
}
var Pr = /LAYERS=([^&]+)/, Qr = /VERSION=([^&]+)/;
function Rr(a) {
    this.g = a.params;
    Gk.call(this, {
        attributions: a.attributions,
        crossOrigin: a.crossOrigin,
        extent: a.extent,
        projection: a.projection,
        resolutions: a.resolutions,
        Gb: s(a.url) ? Dk(a.url, this.g): Fk
    });
    this.r = s(a.bd) ? a.bd : {};
    this.a = null;
    this.H = s(a.ratio) ? a.ratio : 1.5
}
D(Rr, Gk);
Rr.prototype.t = k("g");
Rr.prototype.b = function(a, b, c) {
    null === this.e || (b = this.e[Bi(this.e, b, 0)]);
    var d = this.a;
    if (null !== d && d.G() == b && Jd(d.ca(), a))
        return d;
    var d = a = a.slice(), e = this.H, f = (d[2] - d[0]) / 2 * (e-1), e = (d[3] - d[1]) / 2 * (e-1);
    d[0] -= f;
    d[2] += f;
    d[1] -= e;
    d[3] += e;
    return this.a = Hk(this, a, b, [(a[2] - a[0]) / b, (a[3] - a[1]) / b], c)
};
Rr.prototype.Ya = function(a, b, c, d) {
    var e = b.a().N();
    b = b.c();
    var f = e.Cd(b), e = this.Gb(f, b, e.da());
    Or(e, a, this.r, c, d)
};
Rr.prototype.A = function(a) {
    Ac(this.g, a);
    this.a = null;
    kf(this)
};
function Sr(a) {
    var b = a.projection || He("EPSG:3857"), c = new Ir({
        maxZoom: s(a.maxZoom) ? a.maxZoom: 18
    });
    Gr.call(this, {
        attributions: a.attributions,
        crossOrigin: a.crossOrigin,
        extent: a.extent,
        logo: a.logo,
        projection: b,
        tileGrid: c,
        tileLoadFunction: a.tileLoadFunction,
        tileUrlFunction: Dr
    });
    this.e = Jr(c, {
        extent: a.extent
    });
    s(a.tileUrlFunction) ? this.cc(a.tileUrlFunction) : s(a.urls) ? this.cc(Ar(a.urls)) : s(a.url) && this.b(a.url)
}
D(Sr, Gr);
Sr.prototype.cc = function(a) {
    Sr.D.cc.call(this, Er(this.e, a))
};
Sr.prototype.b = function(a) {
    this.cc(Ar(Fr(a)))
};
function Tr(a) {
    a = s(a) ? a : {};
    Sr.call(this, {
        attributions: s(a.attributions) ? a.attributions: Ur,
        crossOrigin: "anonymous",
        opaque: !0,
        maxZoom: a.maxZoom,
        tileLoadFunction: a.tileLoadFunction,
        url: s(a.url) ? a.url: "http://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    })
}
D(Tr, Sr);
var Vr = new fb({
    html: 'Data \x26copy; \x3ca href\x3d"http://www.openstreetmap.org/"\x3eOpenStreetMap\x3c/a\x3e contributors, \x3ca href\x3d"http://www.openstreetmap.org/copyright"\x3eODbL\x3c/a\x3e'
}), Wr = new fb({
    html: 'Tiles \x26copy; \x3ca href\x3d"http://www.openstreetmap.org/"\x3eOpenStreetMap\x3c/a\x3e contributors, \x3ca href\x3d"http://creativecommons.org/licenses/by-sa/2.0/"\x3eCC BY-SA\x3c/a\x3e'
}), Ur = [Wr, Vr];
function Xr(a) {
    Sr.call(this, {
        attributions: [new fb({
            html: 'Tiles Courtesy of \x3ca href\x3d"http://www.mapquest.com/" target\x3d"_blank"\x3eMapQuest\x3c/a\x3e'
        }), Vr],
        crossOrigin: "anonymous",
        logo: "http://developer.mapquest.com/content/osm/mq_logo.png",
        opaque: !0,
        maxZoom: 28,
        tileLoadFunction: (s(a) ? a : {}).tileLoadFunction,
        url: "http://otile{1-4}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.jpg"
    })
}
D(Xr, Sr);
function Yr(a) {
    Sr.call(this, {
        attributions: [new fb({
            html: 'Tiles Courtesy of \x3ca href\x3d"http://www.mapquest.com/" target\x3d"_blank"\x3eMapQuest\x3c/a\x3e'
        }), new fb({
            html: "Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency"
        })],
        crossOrigin: "anonymous",
        logo: "http://developer.mapquest.com/content/osm/mq_logo.png",
        maxZoom: 18,
        opaque: !0,
        tileLoadFunction: (s(a) ? a : {}).tileLoadFunction,
        url: "http://oatile{1-4}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg"
    })
}
D(Yr, Sr);
var Zr = {
    terrain: {
        ta: "jpg",
        opaque: !0
    },
    "terrain-background": {
        ta: "jpg",
        opaque: !0
    },
    "terrain-labels": {
        ta: "png",
        opaque: !1
    },
    "terrain-lines": {
        ta: "png",
        opaque: !1
    },
    "toner-background": {
        ta: "png",
        opaque: !0
    },
    toner: {
        ta: "png",
        opaque: !0
    },
    "toner-hybrid": {
        ta: "png",
        opaque: !1
    },
    "toner-labels": {
        ta: "png",
        opaque: !1
    },
    "toner-lines": {
        ta: "png",
        opaque: !1
    },
    "toner-lite": {
        ta: "png",
        opaque: !0
    },
    watercolor: {
        ta: "jpg",
        opaque: !0
    }
}, $r = {
    terrain: {
        minZoom: 4,
        maxZoom: 18
    },
    toner: {
        minZoom: 0,
        maxZoom: 20
    },
    watercolor: {
        minZoom: 3,
        maxZoom: 16
    }
};
function as(a) {
    var b = a.layer.indexOf("-"), b =- 1 == b ? a.layer : a.layer.slice(0, b), c = Zr[a.layer];
    Sr.call(this, {
        attributions: bs,
        crossOrigin: "anonymous",
        maxZoom: $r[b].maxZoom,
        opaque: c.opaque,
        tileLoadFunction: a.tileLoadFunction,
        url: s(a.url) ? a.url: "http://{a-d}.tile.stamen.com/" + a.layer + "/{z}/{x}/{y}." + c.ta
    })
}
D(as, Sr);
var bs = [new fb({
    html: 'Map tiles by \x3ca href\x3d"http://stamen.com/"\x3eStamen Design\x3c/a\x3e, under \x3ca href\x3d"http://creativecommons.org/licenses/by/3.0/"\x3eCC BY 3.0\x3c/a\x3e.'
}), Vr];
function cs(a, b) {
    Le.call(this, a, 2);
    this.e = a;
    this.f = b.va(a.z);
    this.c = {}
}
D(cs, Le);
cs.prototype.d = function(a) {
    a = s(a) ? u(a) : -1;
    if (a in this.c)
        return this.c[a];
    var b = this.f, c = Og("CANVAS");
    c.width = b[0];
    c.height = b[1];
    var d = c.getContext("2d");
    d.strokeStyle = "black";
    d.strokeRect(0.5, 0.5, b[0] + 0.5, b[1] + 0.5);
    d.fillStyle = "black";
    d.textAlign = "center";
    d.textBaseline = "middle";
    d.font = "24px sans-serif";
    d.fillText(this.e.toString(), b[0] / 2, b[1] / 2);
    return this.c[a] = c
};
function ds(a) {
    nk.call(this, {
        extent: a.extent,
        opaque: !1,
        projection: a.projection,
        tileGrid: a.tileGrid
    });
    this.a = new Om
}
D(ds, nk);
ds.prototype.pd = function() {
    return this.a.ka() > this.a.d
};
ds.prototype.je = function(a) {
    Pm(this.a, a)
};
ds.prototype.Cb = function(a, b, c) {
    var d = this.$a(a, b, c);
    if (Mm(this.a, d))
        return this.a.get(d);
    a = new cs(new $a(a, b, c), this.tileGrid);
    Nm(this.a, d, a);
    return a
};
var es = [];
A("grid", function(a) {
    es.push(a)
});
function fs(a) {
    Gr.call(this, {
        crossOrigin: a.crossOrigin,
        projection: He("EPSG:3857"),
        state: 0,
        tileLoadFunction: a.tileLoadFunction
    });
    this.Wc = nr(a.url, {
        Fd: !0
    });
    bq(this.Wc, this.b, this)
}
D(fs, Gr);
fs.prototype.b = function() {
    var a = es.pop(), b = He("EPSG:4326"), c;
    if (s(a.bounds)) {
        var d = he(b, this.da());
        this.j = c = Sd(a.bounds, d)
    }
    var e = a.minzoom || 0, d = a.maxzoom || 22, f = new Ir({
        maxZoom: d,
        minZoom: e
    });
    this.tileGrid = f;
    this.tileUrlFunction = Er(Jr(f, {
        extent: c
    }), Ar(a.tiles));
    if (s(a.attribution)) {
        b = s(c) ? c : b.ca();
        c = {};
        for (var g; e <= d; ++e)
            g = e.toString(), c[g] = [Ej(f, b, e)];
        this.d = [new fb({
            html: a.attribution,
            tileRanges: c
        })]
    }
    this.f = 1;
    kf(this)
};
function gs(a) {
    var b = Dr, c = a.urls;
    !s(c) && s(a.url) && (c = Fr(a.url));
    this.b = a.params;
    this.e = "";
    hs(this);
    s(c) && (b = Ma(c, function(a) {
        return Cr(a, this.b)
    }, this), b = Br(b));
    var d = a.extent;
    Gr.call(this, {
        attributions: a.attributions,
        crossOrigin: a.crossOrigin,
        extent: d,
        logo: a.logo,
        tileGrid: a.tileGrid,
        opaque: !(s(a.params.TRANSPARENT) ? a.params.TRANSPARENT : 1),
        projection: a.projection,
        tileLoadFunction: a.tileLoadFunction,
        tileUrlFunction: Er(function(a, b) {
            var c = this.tileGrid;
            null === c && (c = Jj(b));
            if (c.Sb().length <= a.z)
                return null;
            var h = a.x, l = Dj(c, a), n = b.ca();
            d = s(d) ? d : n;
            null !== d && (b.Od && d[0] === n[0] && d[2] === n[2]) && (l = Math.ceil((d[2] - d[0]) / (l[2] - l[0])), h = qd(h, l), l = Dj(c, new $a(a.z, h, a.y)));
            return null === d || Qd(l, d)&&!Rd(l, d) ? new $a(a.z, h, a.y) : null
        }, b)
    });
    this.g = s(a.bd) ? a.bd : {}
}
D(gs, Gr);
gs.prototype.$a = function(a, b, c) {
    return this.e + gs.D.$a.call(this, a, b, c)
};
gs.prototype.t = k("b");
gs.prototype.Ya = function(a, b, c, d) {
    var e = ej(b, a), f = b.a().N(), g = f.da(), h = null === this.tileGrid ? Jj(g): this.tileGrid, f = f.G(), e = Gj(h, e[0], e[1], f, !1, void 0), h = Dj(h, e);
    b = dj(b, Pd(h));
    g = this.tileUrlFunction(e, g);
    Or(g, [a[0] - b[0], a[1] - b[1]], this.g, c, d)
};
function hs(a) {
    var b = 0, c = [], d;
    for (d in a.b)
        c[b++] = d + "-" + a.b[d];
    a.e = c.join("/")
}
gs.prototype.A = function(a) {
    Ac(this.b, a);
    hs(this);
    kf(this)
};
function is(a) {
    this.c = a.matrixIds;
    Bj.call(this, {
        origin: a.origin,
        origins: a.origins,
        resolutions: a.resolutions,
        tileSize: a.tileSize,
        tileSizes: a.tileSizes
    })
}
D(is, Bj);
is.prototype.g = k("c");
function js(a) {
    var b = [], c = [], d = [], e = [], f = He(a.supportedCRS).a();
    Wa(a.matrixIds, function(a, b) {
        return b.scaleDenominator - a.scaleDenominator
    });
    Ia(a.matrixIds, function(a) {
        c.push(a.identifier);
        d.push(a.topLeftCorner);
        b.push(2.8E-4 * a.scaleDenominator / f);
        e.push([a.tileWidth, a.tileHeight])
    });
    return new is({
        origins: d,
        resolutions: b,
        matrixIds: c,
        tileSizes: e
    })
};
var vs = "KVP";
function ws(a) {
    function b(a) {
        a = e == vs ? Xf(Zf([a], g)) : a.replace(/\{(\w+?)\}/g, function(a, b) {
            return b in g ? g[b] : a
        });
        return function(b) {
            if (null !== b) {
                var c = {
                    TileMatrix: f.c[b.z],
                    TileCol: b.x,
                    TileRow: b.y
                };
                Ac(c, this.b);
                b = a;
                return b = e == vs ? Xf(Zf([b], c)) : b.replace(/\{(\w+?)\}/g, function(a, b) {
                    return c[b]
                })
            }
        }
    }
    var c = s(a.version) ? a.version: "1.0.0", d = s(a.format) ? a.format: "image/jpeg";
    this.b = a.dimensions || {};
    this.e = "";
    xs(this);
    var e = s(a.requestEncoding) ? a.requestEncoding: vs, f = a.tileGrid, g = {
        Layer: a.layer,
        style: a.style,
        Style: a.style,
        TileMatrixSet: a.matrixSet
    };
    e == vs && Ac(g, {
        Service: "WMTS",
        Request: "GetTile",
        Version: c,
        Format: d
    });
    c = Dr;
    d = a.urls;
    !s(d) && s(a.url) && (d = Fr(a.url));
    s(d) && (c = Br(Ma(d, b)));
    var h = Ed(), l = new $a(0, 0, 0), c = Er(function(b, c) {
        var d = this.tileGrid;
        if (d.Sb().length <= b.z)
            return null;
        var e = b.x, f =- b.y-1, g = Dj(d, b), C = c.ca(), w = s(a.extent) ? a.extent : C;
        null !== w && (c.Od && w[0] === C[0] && w[2] === C[2]) && (g = Math.ceil((w[2] - w[0]) / (g[2] - g[0])), e = qd(e, g), l.z = b.z, l.x = e, l.y = b.y, g = Dj(d, l, h));
        return !Qd(g, w) || Rd(g, w) ? null : new $a(b.z,
        e, f)
    }, c);
    Gr.call(this, {
        attributions: a.attributions,
        crossOrigin: a.crossOrigin,
        extent: a.extent,
        logo: a.logo,
        projection: a.projection,
        tileGrid: f,
        tileLoadFunction: a.tileLoadFunction,
        tileUrlFunction: c
    })
}
D(ws, Gr);
ws.prototype.g = k("b");
ws.prototype.$a = function(a, b, c) {
    return this.e + ws.D.$a.call(this, a, b, c)
};
function xs(a) {
    var b = 0, c = [], d;
    for (d in a.b)
        c[b++] = d + "-" + a.b[d];
    a.e = c.join("/")
}
ws.prototype.t = function(a) {
    Ac(this.b, a);
    xs(this);
    kf(this)
};
function ys(a) {
    this.f = s(a.color) ? a.color instanceof ql ? a.color : new T(a.color) : new T(zs);
    this.b = s(a.fontFamily) ? a.fontFamily instanceof ql ? a.fontFamily : new T(a.fontFamily) : new T(As);
    this.c = s(a.fontSize) ? a.fontSize instanceof ql ? a.fontSize : new T(a.fontSize) : new T(Bs);
    this.d = s(a.fontWeight) ? a.fontWeight instanceof ql ? a.fontWeight : new T(a.fontWeight) : new T(Cs);
    this.i = a.text instanceof ql ? a.text : new T(a.text);
    this.e = s(a.opacity) ? a.opacity instanceof ql ? a.opacity : new T(a.opacity) : new T(Ds);
    this.a = null !=
    a.stroke ? a.stroke : null;
    this.g = null != a.zIndex ? a.zIndex instanceof ql ? a.zIndex : new T(a.zIndex) : new T(Es)
}
D(ys, Zl);
ys.prototype.Xa = function(a) {
    var b;
    a instanceof N && (b = a, b.s());
    a = U(this.f, b);
    var c = U(this.b, b), d = Number(U(this.c, b)), e = U(this.d, b), f = U(this.i, b), g = Number(U(this.e, b)), h, l, n;
    null !== this.a && (h = U(this.a.a, b), l = Number(U(this.a.b, b)), n = Number(U(this.a.c, b)));
    b = Number(U(this.g, b));
    return new vm({
        color: a,
        fontFamily: c,
        fontSize: d,
        fontWeight: e,
        text: f,
        opacity: g,
        strokeColor: h,
        T: l,
        ba: n,
        zIndex: b
    })
};
var zs = "#000", As = "sans-serif", Bs = 10, Cs = "normal", Ds = 1, Es = 0;
function Fs(a) {
    null != a && (a.html = a.html, a.tileRanges = a.tileRanges);
    fb.call(this, a)
}
D(Fs, fb);
A("ol.Attribution", Fs);
A("ol.Collection", M);
M.prototype.clear = M.prototype.clear;
M.prototype.extend = M.prototype.Rf;
M.prototype.forEach = M.prototype.forEach;
M.prototype.getArray = M.prototype.Sf;
M.prototype.getAt = M.prototype.Oe;
M.prototype.getLength = M.prototype.yc;
M.prototype.insertAt = M.prototype.Ec;
M.prototype.pop = M.prototype.pop;
M.prototype.push = M.prototype.push;
M.prototype.remove = M.prototype.remove;
M.prototype.removeAt = M.prototype.sd;
M.prototype.setAt = M.prototype.hg;
kd.prototype.getElement = kd.prototype.b;
function Gs(a) {
    null != a && (a.tracking = a.tracking);
    sd.call(this, a)
}
D(Gs, sd);
A("ol.DeviceOrientation", Gs);
A("ol.DeviceOrientation.SUPPORTED", td);
A("ol.Feature", N);
N.prototype.getAttributes = N.prototype.kb;
N.prototype.getGeometry = N.prototype.s;
N.prototype.getId = N.prototype.Se;
N.prototype.set = N.prototype.o;
N.prototype.setGeometry = N.prototype.aa;
function Hs(a) {
    null != a && (a.projection = a.projection, a.tracking = a.tracking, a.trackingOptions = a.trackingOptions);
    P.call(this, a)
}
D(Hs, P);
A("ol.Geolocation", Hs);
A("ol.Geolocation.SUPPORTED", Ke);
Me.prototype.getImage = Me.prototype.d;
A("ol.Kinetic", yf);
function Is(a) {
    null != a && (a.controls = a.controls, a.interactions = a.interactions, a.layers = a.layers, a.overlays = a.overlays, a.renderer = a.renderer, a.renderers = a.renderers, a.target = a.target, a.view = a.view);
    W.call(this, a)
}
D(Is, W);
A("ol.Map", Is);
W.prototype.addControl = W.prototype.Ge;
W.prototype.addInteraction = W.prototype.He;
W.prototype.addLayer = W.prototype.Sc;
W.prototype.addOverlay = W.prototype.Ie;
W.prototype.beforeRender = W.prototype.Ba;
W.prototype.getControls = W.prototype.Qe;
W.prototype.getEventCoordinate = W.prototype.Nd;
W.prototype.getEventPixel = W.prototype.xc;
W.prototype.getFeatureInfo = W.prototype.Re;
W.prototype.getFeatures = W.prototype.de;
W.prototype.getInteractions = W.prototype.Te;
W.prototype.getLayers = W.prototype.Be;
W.prototype.getOverlays = W.prototype.Ve;
W.prototype.getRenderer = W.prototype.We;
W.prototype.getViewport = W.prototype.Ze;
W.prototype.removeControl = W.prototype.ag;
W.prototype.removeInteraction = W.prototype.bg;
W.prototype.removeLayer = W.prototype.td;
W.prototype.removeOverlay = W.prototype.cg;
W.prototype.updateSize = W.prototype.Aa;
mi.prototype.getCoordinate = mi.prototype.b;
mi.prototype.getPixel = mi.prototype.f;
mi.prototype.preventDefault = mi.prototype.P;
mi.prototype.stopPropagation = mi.prototype.ob;
A("ol.Object", L);
L.prototype.bindTo = L.prototype.Je;
L.prototype.get = L.prototype.get;
L.prototype.notify = L.prototype.kd;
L.prototype.on = L.prototype.Wf;
L.prototype.once = L.prototype.Yf;
L.prototype.set = L.prototype.o;
L.prototype.setValues = L.prototype.$b;
L.prototype.un = L.prototype.og;
L.prototype.unByKey = L.prototype.pg;
L.prototype.unbind = L.prototype.wd;
L.prototype.unbindAll = L.prototype.qg;
function Js(a) {
    null != a && (a.element = a.element, a.insertFirst = a.insertFirst, a.position = a.position, a.positioning = a.positioning, a.stopEvent = a.stopEvent);
    Oo.call(this, a)
}
D(Js, Oo);
A("ol.Overlay", Js);
A("ol.OverlayPositioning", No);
No.BOTTOM_CENTER = "bottom-center";
No.BOTTOM_LEFT = "bottom-left";
No.BOTTOM_RIGHT = "bottom-right";
No.CENTER_CENTER = "center-center";
No.CENTER_LEFT = "center-left";
No.CENTER_RIGHT = "center-right";
No.TOP_CENTER = "top-center";
No.TOP_LEFT = "top-left";
No.TOP_RIGHT = "top-right";
A("ol.RendererHint", Ko);
Ko.CANVAS = "canvas";
Ko.DOM = "dom";
Ko.WEBGL = "webgl";
A("ol.RendererHints", Jo);
Jo.createFromQueryData = Jo.Le;
Le.prototype.getTileCoord = Le.prototype.i;
$a.prototype.getZXY = $a.prototype.a;
function Ks(a) {
    null != a && (a.center = a.center, a.extent = a.extent, a.maxResolution = a.maxResolution, a.maxZoom = a.maxZoom, a.projection = a.projection, a.resolution = a.resolution, a.resolutions = a.resolutions, a.rotation = a.rotation, a.zoom = a.zoom, a.zoomFactor = a.zoomFactor);
    S.call(this, a)
}
D(Ks, S);
A("ol.View2D", Ks);
S.prototype.calculateExtent = S.prototype.Cd;
S.prototype.constrainResolution = S.prototype.Ca;
S.prototype.constrainRotation = S.prototype.lc;
S.prototype.fitExtent = S.prototype.ad;
S.prototype.getView2D = S.prototype.N;
S.prototype.getZoom = S.prototype.$e;
S.prototype.setZoom = S.prototype.j;
A("ol.animation.bounce", function(a) {
    null != a && (a.duration = a.duration, a.easing = a.easing, a.resolution = a.resolution, a.start = a.start);
    return uf(a)
});
A("ol.animation.pan", function(a) {
    null != a && (a.duration = a.duration, a.easing = a.easing, a.source = a.source, a.start = a.start);
    return vf(a)
});
A("ol.animation.rotate", function(a) {
    null != a && (a.duration = a.duration, a.easing = a.easing, a.rotation = a.rotation, a.start = a.start);
    return wf(a)
});
A("ol.animation.zoom", function(a) {
    null != a && (a.duration = a.duration, a.easing = a.easing, a.resolution = a.resolution, a.start = a.start);
    return xf(a)
});
function Ls(a) {
    null != a && (a.className = a.className, a.target = a.target);
    Mi.call(this, a)
}
D(Ls, Mi);
A("ol.control.Attribution", Ls);
Mi.prototype.setMap = Mi.prototype.setMap;
function Ms(a) {
    null != a && (a.element = a.element, a.target = a.target);
    Li.call(this, a)
}
D(Ms, Li);
A("ol.control.Control", Ms);
Li.prototype.getMap = Li.prototype.W;
Li.prototype.setMap = Li.prototype.setMap;
function Ns(a) {
    null != a && (a.className = a.className, a.keys = a.keys, a.target = a.target);
    Wo.call(this, a)
}
D(Ns, Wo);
A("ol.control.FullScreen", Ns);
function Os(a) {
    null != a && (a.className = a.className, a.target = a.target);
    Ni.call(this, a)
}
D(Os, Ni);
A("ol.control.Logo", Os);
Ni.prototype.setMap = Ni.prototype.setMap;
function Ps(a) {
    null != a && (a.className = a.className, a.coordinateFormat = a.coordinateFormat, a.projection = a.projection, a.target = a.target, a.undefinedHTML = a.undefinedHTML);
    Xo.call(this, a)
}
D(Ps, Xo);
A("ol.control.MousePosition", Ps);
Xo.prototype.setMap = Xo.prototype.setMap;
function Qs(a) {
    null != a && (a.className = a.className, a.minWidth = a.minWidth, a.target = a.target, a.units = a.units);
    $o.call(this, a)
}
D(Qs, $o);
A("ol.control.ScaleLine", Qs);
$o.prototype.setMap = $o.prototype.setMap;
A("ol.control.ScaleLineUnits", Zo);
Zo.DEGREES = "degrees";
Zo.IMPERIAL = "imperial";
Zo.METRIC = "metric";
Zo.NAUTICAL = "nautical";
Zo.US = "us";
function Rs(a) {
    null != a && (a.className = a.className, a.delta = a.delta, a.duration = a.duration, a.target = a.target);
    Oi.call(this, a)
}
D(Rs, Oi);
A("ol.control.Zoom", Rs);
Oi.prototype.setMap = Oi.prototype.setMap;
function Ss(a) {
    null != a && (a.className = a.className, a.maxResolution = a.maxResolution, a.minResolution = a.minResolution);
    op.call(this, a)
}
D(Ss, op);
A("ol.control.ZoomSlider", Ss);
function Ts(a) {
    null != a && (a.className = a.className, a.extent = a.extent, a.target = a.target);
    qp.call(this, a)
}
D(Ts, qp);
A("ol.control.ZoomToExtent", Ts);
A("ol.control.defaults", function(a) {
    if (null != a) {
        a.attribution = a.attribution;
        var b = a.attributionOptions;
        null != a.attributionOptions && (b.className = a.attributionOptions.className, b.target = a.attributionOptions.target);
        a.attributionOptions = b;
        a.logo = a.logo;
        b = a.logoOptions;
        null != a.logoOptions && (b.className = a.logoOptions.className, b.target = a.logoOptions.target);
        a.logoOptions = b;
        a.zoom = a.zoom;
        b = a.zoomOptions;
        null != a.zoomOptions && (b.className = a.zoomOptions.className, b.delta = a.zoomOptions.delta, b.duration = a.zoomOptions.duration,
        b.target = a.zoomOptions.target);
        a.zoomOptions = b
    }
    return Pi(a)
});
A("ol.coordinate.createStringXY", function(a) {
    return function(b) {
        return Bd(b, a)
    }
});
A("ol.coordinate.format", xd);
A("ol.coordinate.fromProjectedArray", Cd);
A("ol.coordinate.rotate", zd);
A("ol.coordinate.toStringHDMS", function(a) {
    return s(a) ? wd(a[1], "NS") + " " + wd(a[0], "EW") : ""
});
A("ol.coordinate.toStringXY", Bd);
A("ol.dom.Input", rp);
A("ol.easing.bounce", function(a) {
    a < 1 / 2.75 ? a*=7.5625 * a : a < 2 / 2.75 ? (a -= 1.5 / 2.75, a = 7.5625 * a * a + 0.75) : a < 2.5 / 2.75 ? (a -= 2.25 / 2.75, a = 7.5625 * a * a + 0.9375) : (a -= 2.625 / 2.75, a = 7.5625 * a * a + 0.984375);
    return a
});
A("ol.easing.easeIn", function(a) {
    return a * a * a
});
A("ol.easing.easeOut", qf);
A("ol.easing.elastic", function(a) {
    return Math.pow(2, -10 * a) * Math.sin((a-0.075) * 2 * Math.PI / 0.3) + 1
});
A("ol.easing.inAndOut", rf);
A("ol.easing.linear", sf);
A("ol.easing.upAndDown", tf);
A("ol.events.condition.altKeyOnly", function(a) {
    a = a.a;
    return a.qa&&!a.Jb&&!a.Qa
});
A("ol.events.condition.altShiftKeysOnly", Wi);
A("ol.events.condition.always", Vc);
A("ol.events.condition.noModifierKeys", Yi);
A("ol.events.condition.platformModifierKeyOnly", function(a) {
    a = a.a;
    return !a.qa && a.Jb&&!a.Qa
});
A("ol.events.condition.shiftKeyOnly", Zi);
A("ol.events.condition.targetNotEditable", $i);
A("ol.expr.parse", function(a) {
    return Sl(a)
});
A("ol.expr.register", function(a, b) {
    Wl[a] = b
});
A("ol.extent.boundingExtent", Dd);
A("ol.extent.containsCoordinate", Id);
A("ol.extent.containsExtent", Jd);
A("ol.extent.createEmpty", Ed);
A("ol.extent.equals", Kd);
A("ol.extent.extend", Ld);
A("ol.extent.getBottomLeft", Md);
A("ol.extent.getBottomRight", function(a) {
    return [a[2], a[1]]
});
A("ol.extent.getCenter", Nd);
A("ol.extent.getHeight", function(a) {
    return a[3] - a[1]
});
A("ol.extent.getSize", function(a) {
    return [a[2] - a[0], a[3] - a[1]]
});
A("ol.extent.getTopLeft", Pd);
A("ol.extent.getTopRight", function(a) {
    return [a[2], a[3]]
});
A("ol.extent.getWidth", function(a) {
    return a[2] - a[0]
});
A("ol.extent.intersects", Qd);
A("ol.extent.isEmpty", function(a) {
    return a[2] < a[0] || a[3] < a[1]
});
A("ol.extent.transform", Sd);
A("ol.geom.Geometry", Td);
A("ol.geom.GeometryType", Vd);
Vd.GEOMETRYCOLLECTION = "geometrycollection";
Vd.LINEARRING = "linearring";
Vd.LINESTRING = "linestring";
Vd.MULTILINESTRING = "multilinestring";
Vd.MULTIPOINT = "multipoint";
Vd.MULTIPOLYGON = "multipolygon";
Vd.POINT = "point";
Vd.POLYGON = "polygon";
A("ol.geom.LineString", Rm);
Rm.prototype.getCoordinates = Rm.prototype.k;
A("ol.geom.MultiLineString", Sm);
Sm.prototype.getCoordinates = Sm.prototype.k;
A("ol.geom.MultiPoint", Um);
Um.prototype.getCoordinates = Um.prototype.k;
A("ol.geom.MultiPolygon", Ym);
Ym.prototype.getCoordinates = Ym.prototype.k;
A("ol.geom.Point", Tm);
Tm.prototype.getCoordinates = Tm.prototype.k;
A("ol.geom.Polygon", Xm);
Xm.prototype.getCoordinates = Xm.prototype.k;
A("ol.inherits", D);
function Us(a) {
    null != a && (a.delta = a.delta, a.duration = a.duration);
    Vi.call(this, a)
}
D(Us, Vi);
A("ol.interaction.DoubleClickZoom", Us);
function Vs(a) {
    null != a && (a.condition = a.condition, a.kinetic = a.kinetic);
    bj.call(this, a)
}
D(Vs, bj);
A("ol.interaction.DragPan", Vs);
function Ws(a) {
    null != a && (a.condition = a.condition);
    fj.call(this, a)
}
D(Ws, fj);
A("ol.interaction.DragRotate", Ws);
function Xs(a) {
    null != a && (a.condition = a.condition);
    tp.call(this, a)
}
D(Xs, tp);
A("ol.interaction.DragRotateAndZoom", Xs);
function Ys(a) {
    null != a && (a.condition = a.condition);
    hj.call(this, a)
}
D(Ys, hj);
A("ol.interaction.DragZoom", Ys);
function Zs(a) {
    null != a && (a.layer = a.layer, a.snapTolerance = a.snapTolerance, a.type = a.type);
    up.call(this, a)
}
D(Zs, up);
A("ol.interaction.Draw", Zs);
function $s(a) {
    null != a && (a.condition = a.condition, a.pixelDelta = a.pixelDelta);
    ij.call(this, a)
}
D($s, ij);
A("ol.interaction.KeyboardPan", $s);
function at(a) {
    null != a && (a.condition = a.condition, a.delta = a.delta, a.duration = a.duration);
    jj.call(this, a)
}
D(at, jj);
A("ol.interaction.KeyboardZoom", at);
function bt(a) {
    null != a && (a.layers = a.layers, a.pixelTolerance = a.pixelTolerance);
    Bp.call(this, a)
}
D(bt, Bp);
A("ol.interaction.Modify", bt);
A("ol.interaction.MouseWheelZoom", kj);
function ct(a) {
    null != a && (a.addCondition = a.addCondition, a.condition = a.condition, a.layers = a.layers);
    Hp.call(this, a)
}
D(ct, Hp);
A("ol.interaction.Select", ct);
function dt(a) {
    null != a && (a.kinetic = a.kinetic);
    nj.call(this, a)
}
D(dt, nj);
A("ol.interaction.TouchPan", dt);
function et(a) {
    null != a && (a.threshold = a.threshold);
    oj.call(this, a)
}
D(et, oj);
A("ol.interaction.TouchRotate", et);
A("ol.interaction.TouchZoom", pj);
A("ol.interaction.defaults", function(a) {
    null != a && (a.altShiftDragRotate = a.altShiftDragRotate, a.doubleClickZoom = a.doubleClickZoom, a.dragPan = a.dragPan, a.keyboard = a.keyboard, a.mouseWheelZoom = a.mouseWheelZoom, a.shiftDragZoom = a.shiftDragZoom, a.touchPan = a.touchPan, a.touchRotate = a.touchRotate, a.touchZoom = a.touchZoom, a.zoomDelta = a.zoomDelta, a.zoomDuration = a.zoomDuration);
    return qj(a)
});
function ft(a) {
    null != a && (a.brightness = a.brightness, a.contrast = a.contrast, a.hue = a.hue, a.layers = a.layers, a.maxResolution = a.maxResolution, a.minResolution = a.minResolution, a.opacity = a.opacity, a.saturation = a.saturation, a.visible = a.visible);
    rj.call(this, a)
}
D(ft, rj);
A("ol.layer.Group", ft);
function gt(a) {
    null != a && (a.brightness = a.brightness, a.contrast = a.contrast, a.hue = a.hue, a.maxResolution = a.maxResolution, a.minResolution = a.minResolution, a.opacity = a.opacity, a.saturation = a.saturation, a.source = a.source, a.visible = a.visible);
    nf.call(this, a)
}
D(gt, Ik);
A("ol.layer.Image", gt);
A("ol.layer.Layer", nf);
nf.prototype.getSource = nf.prototype.ha;
function ht(a) {
    null != a && (a.brightness = a.brightness, a.contrast = a.contrast, a.hue = a.hue, a.maxResolution = a.maxResolution, a.minResolution = a.minResolution, a.opacity = a.opacity, a.preload = a.preload, a.saturation = a.saturation, a.source = a.source, a.visible = a.visible);
    Jk.call(this, a)
}
D(ht, Jk);
A("ol.layer.Tile", ht);
function it(a) {
    null != a && (a.maxResolution = a.maxResolution, a.minResolution = a.minResolution, a.opacity = a.opacity, a.source = a.source, a.style = a.style, a.transformFeatureInfo = a.transformFeatureInfo, a.visible = a.visible);
    xm.call(this, a)
}
D(it, xm);
A("ol.layer.Vector", it);
A("ol.parser.GPX", Np);
A("ol.parser.GeoJSON", Pp);
A("ol.parser.KML", Bq);
A("ol.parser.TopoJSON", Gq);
A("ol.parser.WKT", Mq);
Mq.read = function(a) {
    return Mq.Za().M(a)
};
Mq.write = function(a) {
    return Mq.Za().write(a)
};
Mq.prototype.read = Mq.prototype.M;
Mq.prototype.write = Mq.prototype.write;
A("ol.parser.ogc.GML_v2", Xq);
Xq.prototype.read = Xq.prototype.M;
Xq.prototype.write = Xq.prototype.write;
A("ol.parser.ogc.GML_v3", Yq);
Yq.prototype.read = Yq.prototype.M;
Yq.prototype.write = Yq.prototype.write;
A("ol.parser.ogc.WMSCapabilities", ir);
ir.prototype.read = ir.prototype.M;
A("ol.parser.ogc.WMTSCapabilities", mr);
mr.prototype.read = mr.prototype.M;
function jt(a) {
    null != a && (a.axisOrientation = a.axisOrientation, a.code = a.code, a.extent = a.extent, a.global = a.global, a.units = a.units);
    ee.call(this, a)
}
D(jt, ee);
A("ol.proj.Projection", jt);
ee.prototype.getCode = ee.prototype.g;
ee.prototype.getExtent = ee.prototype.ca;
A("ol.proj.Units", ce);
ce.DEGREES = "degrees";
ce.FEET = "ft";
ce.METERS = "m";
A("ol.proj.addProjection", Fe);
A("ol.proj.common.add", xj);
A("ol.proj.configureProj4jsProjection", function(a) {
    return re(a)
});
A("ol.proj.get", He);
A("ol.proj.getTransform", Ie);
A("ol.proj.getTransformFromProjections", he);
A("ol.proj.transform", function(a, b, c) {
    return Ie(b, c)(a)
});
A("ol.proj.transformWithProjections", function(a, b, c) {
    return he(b, c)(a)
});
hn.prototype.getCanvas = hn.prototype.wc;
function kt(a) {
    null != a && (a.culture = a.culture, a.imagerySet = a.imagerySet, a.key = a.key, a.tileLoadFunction = a.tileLoadFunction);
    Kr.call(this, a)
}
D(kt, Kr);
A("ol.source.BingMaps", kt);
Kr.TOS_ATTRIBUTION = Lr;
function lt(a) {
    null != a && (a.attributions = a.attributions, a.crossOrigin = a.crossOrigin, a.extent = a.extent, a.imageExtent = a.imageExtent, a.imageSize = a.imageSize, a.projection = a.projection, a.url = a.url);
    Mr.call(this, a)
}
D(lt, Mr);
A("ol.source.ImageStatic", lt);
function mt(a) {
    null != a && (a.attributions = a.attributions, a.crossOrigin = a.crossOrigin, a.extent = a.extent, a.params = a.params, a.projection = a.projection, a.ratio = a.ratio, a.resolutions = a.resolutions, a.url = a.url);
    Rr.call(this, a)
}
D(mt, Rr);
A("ol.source.ImageWMS", mt);
Rr.prototype.getParams = Rr.prototype.t;
Rr.prototype.updateParams = Rr.prototype.A;
A("ol.source.MapQuestOSM", Xr);
A("ol.source.MapQuestOpenAerial", Yr);
A("ol.source.OSM", Tr);
Tr.DATA_ATTRIBUTION = Vr;
Tr.TILE_ATTRIBUTION = Wr;
jf.prototype.getExtent = jf.prototype.ca;
function nt(a) {
    null != a && (a.layer = a.layer, a.maxZoom = a.maxZoom, a.minZoom = a.minZoom, a.opaque = a.opaque, a.tileLoadFunction = a.tileLoadFunction, a.url = a.url);
    as.call(this, a)
}
D(nt, as);
A("ol.source.Stamen", nt);
A("ol.source.Tile", nk);
nk.prototype.getTileGrid = nk.prototype.Xe;
function ot(a) {
    null != a && (a.extent = a.extent, a.projection = a.projection, a.tileGrid = a.tileGrid);
    ds.call(this, a)
}
D(ot, ds);
A("ol.source.TileDebug", ot);
function pt(a) {
    null != a && (a.crossOrigin = a.crossOrigin, a.tileLoadFunction = a.tileLoadFunction, a.url = a.url);
    fs.call(this, a)
}
D(pt, fs);
A("ol.source.TileJSON", pt);
function qt(a) {
    null != a && (a.attributions = a.attributions, a.crossOrigin = a.crossOrigin, a.extent = a.extent, a.logo = a.logo, a.maxZoom = a.maxZoom, a.params = a.params, a.projection = a.projection, a.tileGrid = a.tileGrid, a.tileLoadFunction = a.tileLoadFunction, a.url = a.url, a.urls = a.urls);
    gs.call(this, a)
}
D(qt, gs);
A("ol.source.TileWMS", qt);
gs.prototype.getParams = gs.prototype.t;
gs.prototype.updateParams = gs.prototype.A;
function rt(a) {
    null != a && (a.attributions = a.attributions, a.data = a.data, a.extent = a.extent, a.logo = a.logo, a.parser = a.parser, a.projection = a.projection, a.url = a.url);
    gl.call(this, a)
}
D(rt, gl);
A("ol.source.Vector", rt);
A("ol.source.WMSGetFeatureInfoMethod", {
    Wg: "iframe",
    Dh: "xhr_get"
});
function st(a) {
    null != a && (a.attributions = a.attributions, a.crossOrigin = a.crossOrigin, a.dimensions = a.dimensions, a.extent = a.extent, a.format = a.format, a.layer = a.layer, a.logo = a.logo, a.matrixSet = a.matrixSet, a.maxZoom = a.maxZoom, a.projection = a.projection, a.requestEncoding = a.requestEncoding, a.style = a.style, a.tileGrid = a.tileGrid, a.tileLoadFunction = a.tileLoadFunction, a.url = a.url, a.urls = a.urls, a.version = a.version);
    ws.call(this, a)
}
D(st, ws);
A("ol.source.WMTS", st);
A("ol.source.WMTS.optionsFromCapabilities", function(a, b) {
    var c = Oa(a.contents.layers, function(a) {
        return a.identifier == b
    }), d = c.tileMatrixSetLinks[0].tileMatrixSet, e = c.formats[0], f = Pa(c.styles, function(a) {
        return a.isDefault
    });
    0 > f && (f = 0);
    var f = c.styles[f].identifier, g = {};
    Ia(c.dimensions, function(a) {
        var b = a.identifier, c = a["default"];
        s(c) || (c = a.values[0]);
        g[b] = c
    });
    var h = a.contents.tileMatrixSets[d], l = js(h), h = He(h.supportedCRS), n = a.operationsMetadata.GetTile.dcp.http.get, q, r;
    switch (rc(n[0].constraints.GetEncoding.allowedValues)[0]) {
    case "REST":
    case "RESTful":
        r =
        "REST";
        q = c.resourceUrls.tile[e];
        break;
    case "KVP":
        r = vs, q = [], Ia(n, function(a) {
            a.constraints.GetEncoding.allowedValues.hasOwnProperty(vs) && q.push(a.url)
        })
    }
    return {
        urls: q,
        layer: b,
        matrixSet: d,
        format: e,
        projection: h,
        requestEncoding: r,
        tileGrid: l,
        style: f,
        dimensions: g
    }
});
ws.prototype.getDimensions = ws.prototype.g;
ws.prototype.updateDimensions = ws.prototype.t;
function tt(a) {
    null != a && (a.attributions = a.attributions, a.crossOrigin = a.crossOrigin, a.extent = a.extent, a.logo = a.logo, a.maxZoom = a.maxZoom, a.minZoom = a.minZoom, a.projection = a.projection, a.tileLoadFunction = a.tileLoadFunction, a.tileUrlFunction = a.tileUrlFunction, a.url = a.url, a.urls = a.urls);
    Sr.call(this, a)
}
D(tt, Sr);
A("ol.source.XYZ", tt);
Sr.prototype.setUrl = Sr.prototype.b;
function ut(a) {
    null != a && (a.color = a.color, a.opacity = a.opacity, a.zIndex = a.zIndex);
    $l.call(this, a)
}
D(ut, $l);
A("ol.style.Fill", ut);
function vt(a) {
    null != a && (a.height = a.height, a.opacity = a.opacity, a.rotation = a.rotation, a.url = a.url, a.width = a.width, a.xOffset = a.xOffset, a.yOffset = a.yOffset, a.zIndex = a.zIndex);
    vq.call(this, a)
}
D(vt, vq);
A("ol.style.Icon", vt);
function wt(a) {
    null != a && (a.filter = a.filter, a.maxResolution = a.maxResolution, a.minResolution = a.minResolution, a.symbolizers = a.symbolizers);
    dm.call(this, a)
}
D(wt, dm);
A("ol.style.Rule", wt);
function xt(a) {
    null != a && (a.fill = a.fill, a.size = a.size, a.stroke = a.stroke, a.type = a.type, a.zIndex = a.zIndex);
    om.call(this, a)
}
D(xt, om);
A("ol.style.Shape", xt);
A("ol.style.ShapeType", gm);
gm.CIRCLE = "circle";
function yt(a) {
    null != a && (a.color = a.color, a.opacity = a.opacity, a.width = a.width, a.zIndex = a.zIndex);
    jm.call(this, a)
}
D(yt, jm);
A("ol.style.Stroke", yt);
function zt(a) {
    null != a && (a.rules = a.rules, a.symbolizers = a.symbolizers);
    sm.call(this, a)
}
D(zt, sm);
A("ol.style.Style", zt);
function At(a) {
    null != a && (a.color = a.color, a.fontFamily = a.fontFamily, a.fontSize = a.fontSize, a.fontWeight = a.fontWeight, a.opacity = a.opacity, a.stroke = a.stroke, a.text = a.text, a.zIndex = a.zIndex);
    ys.call(this, a)
}
D(At, ys);
A("ol.style.Text", At);
function Bt(a) {
    null != a && (a.minZoom = a.minZoom, a.origin = a.origin, a.origins = a.origins, a.resolutions = a.resolutions, a.tileSize = a.tileSize, a.tileSizes = a.tileSizes);
    Bj.call(this, a)
}
D(Bt, Bj);
A("ol.tilegrid.TileGrid", Bt);
Bj.prototype.getMinZoom = Bj.prototype.Ue;
Bj.prototype.getOrigin = Bj.prototype.Ib;
Bj.prototype.getResolutions = Bj.prototype.Sb;
Bj.prototype.getTileSize = Bj.prototype.va;
function Ct(a) {
    null != a && (a.matrixIds = a.matrixIds, a.origin = a.origin, a.origins = a.origins, a.resolutions = a.resolutions, a.tileSize = a.tileSize, a.tileSizes = a.tileSizes);
    is.call(this, a)
}
D(Ct, is);
A("ol.tilegrid.WMTS", Ct);
is.prototype.getMatrixIds = is.prototype.g;
function Dt(a) {
    null != a && (a.maxZoom = a.maxZoom);
    Ir.call(this, a)
}
D(Dt, Ir);
A("ol.tilegrid.XYZ", Dt);
A("ol.webgl.SUPPORTED", vn);
})();
