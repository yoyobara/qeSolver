var solveButton = document.getElementById('calcButton');

var click = () => {
    let a = getA();
    let b = getB();
    let c = getC();

    if (a != null && b != null && c != null) {
        let res = solveQe(a, b, c);

        setX1(rnd(res[0]).toString());
        setX2(rnd(res[1]).toString());

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