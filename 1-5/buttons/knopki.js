function changeBackground(color) {
    document.body.style.background = color;
}
var i=0;
function changeRain() {
    if (i === 0) {
        document.body.style.background = "#ff2400";
        i++;
    } else if (i === 1) {
        document.body.style.background = "#42aaff";
        i++;
    } else if (i === 2) {
        document.body.style.background = "#00ff7f";
        i++;
    } else if (i === 3) {
        document.body.style.background = "#ffff66";
        i = 0;
    }

}

