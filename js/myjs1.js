
var a_idx = 0;
jQuery(document).ready(function($) {
$("body").click(function(e) {
var a = new Array("❤富强❤","❤民主❤","❤文明❤","❤和谐❤","❤自由❤","❤平等❤","❤公正❤","❤法治❤","❤爱国❤","❤敬业❤","❤诚信❤","❤友善❤");
var $i = $("<span></span>").text(a[a_idx]);
a_idx = (a_idx + 1) % a.length;
var x = e.pageX,
y = e.pageY;
$i.css({
"z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
"top": y - 20,
"left": x,
"position": "absolute",
"font-weight": "bold",
"color": "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"
});
$("body").append($i);
$i.animate({
"top": y - 180,
"opacity": 0
},
1500,
function() {
$i.remove();
});
});
});


var binft = function (r) {
    function t() {
      return b[Math.floor(Math.random() * b.length)]
    }  
    function e() {
      return String.fromCharCode(94 * Math.random() + 33)
    }
    function n(r) {
      for (var n = document.createDocumentFragment(), i = 0; r > i; i++) {
        var l = document.createElement("span");
        l.textContent = e(), l.style.color = t(), n.appendChild(l)
      }
      return n
    }
    function i() {
      var t = o[c.skillI];
      c.step ? c.step-- : (c.step = g, c.prefixP < l.length ? (c.prefixP >= 0 && (c.text += l[c.prefixP]), c.prefixP++) : "forward" === c.direction ? c.skillP < t.length ? (c.text += t[c.skillP], c.skillP++) : c.delay ? c.delay-- : (c.direction = "backward", c.delay = a) : c.skillP > 0 ? (c.text = c.text.slice(0, -1), c.skillP--) : (c.skillI = (c.skillI + 1) % o.length, c.direction = "forward")), r.textContent = c.text, r.appendChild(n(c.prefixP < l.length ? Math.min(s, s + c.prefixP) : Math.min(s, t.length - c.skillP))), setTimeout(i, d)
    }
    var l = "",
    o = ["生活明朗,万物可爱", "人间值得,未来可期。","深山鹿不知归路","世间苦皆可自渡。"].map(function (r) {
    return r + ""
    }),
    a = 2,
    g = 1,
    s = 5,
    d = 75,
    b = ["rgb(110,64,170)", "rgb(150,61,179)", "rgb(191,60,175)", "rgb(228,65,157)", "rgb(254,75,131)", "rgb(255,94,99)", "rgb(255,120,71)", "rgb(251,150,51)", "rgb(226,183,47)", "rgb(198,214,60)", "rgb(175,240,91)", "rgb(127,246,88)", "rgb(82,246,103)", "rgb(48,239,130)", "rgb(29,223,163)", "rgb(26,199,194)", "rgb(35,171,216)", "rgb(54,140,225)", "rgb(76,110,219)", "rgb(96,84,200)"],
    c = {
      text: "",
      prefixP: -s,
      skillI: 0,
      skillP: 0,
      direction: "forward",
      delay: a,
      step: g
    };
    i()
    };
    binft(document.getElementById('binft'));
