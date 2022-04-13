var gHue = 0.0;
var gHueContainer = 0.01;
window.onload = load;

function load() {
    document.getElementById("inner_content").style.display = "none";
    document.getElementById("loader").style.display         = "block";
}
setInterval(function() {
    document.getElementById("inner_content").style.display = "block";
    document.getElementById("loader").style.display         = "none";
}, 500);
function hsvToRgb(h, s, v) {
    var r, g, b;
    var i = Math.floor(h * 6);
    var f = h * 6 - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return "rgb(" + parseInt(r * 200) + ", " + parseInt(g * 200) + ", " + parseInt(b * 200) + ")";
}
setInterval(function() {
    document.body.style.backgroundColor = hsvToRgb(gHue, 0.55, 0.75);
    document.getElementById("content").style.backgroundColor = hsvToRgb(gHueContainer, 0.55, 0.75);
    gHue = (gHue + 0.01) % 1.0;
    gHueContainer = (gHueContainer + 0.01) % 1.0;
}, 100);