var getA = () => {
    let inp = document.getElementById("a").value;
    let parsed = parseFloat(inp);
    if (parsed == 0 || isNaN(parsed)) {
        return null;
    } else {
        return parsed;
    }
}

var getB = () => {
    let inp = document.getElementById("b").value;
    let parsed = parseFloat(inp);
    if (isNaN(parsed)) {
        return null;
    } else {
        return parsed;
    }
}

var getC = () => {
    let inp = document.getElementById("c").value;
    let parsed = parseFloat(inp);
    if (isNaN(parsed)) {
        return null;
    } else {
        return parsed;
    }
}

var setX1 = (value) => {
    document.getElementById('x1').innerHTML = value.toString();
}

var setX2 = (value) => {
    document.getElementById('x2').innerHTML = value.toString();
}

var show_output = () => { document.getElementById("outputDiv").classList.remove("hidden"); }
var hide_output = () => { document.getElementById("outputDiv").classList.add("hidden"); }