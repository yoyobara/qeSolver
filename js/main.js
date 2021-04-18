var solveButton = document.getElementById('calcButton');

var click = () => {
    let a = getA();
    let b = getB();
    let c = getC();

    if (a != null && b != null && c != null) {
        let res = solveQe(a, b, c);
        setX1(res[0].toFixed(4)); setX2(res[1].toFixed(4));
        show_output();
    } else {
        alert("Fill all fields with valid numbers!!");
    }
}

solveButton.addEventListener('click', click);

// in case the user touches the field again, the output will hide itself.
document.getElementById('a').addEventListener('input', hide_output);
document.getElementById('b').addEventListener('input', hide_output);
document.getElementById('c').addEventListener('input', hide_output);

// if enter is pressed, treat it as clicking the solve button
document.body.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
        click();
    }
});