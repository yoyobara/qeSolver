const PLUS_MINUS = [+1, -1];
const sqrt = Math.sqrt;
const pow = Math.pow;

var solveQe = (a, b, c) => {
    let res = new Array(2);
    let ic = 0;

    let root = pow(b, 2) - 4 * a * c;
    if (root < 0) return res.fill(NaN);

    for (const n of PLUS_MINUS) { // +1, -1
        res[ic++] = (-b + sqrt(root) * n) / 2 * a;
    }

    return res;
}

var rnd = (num) => parseFloat(num.toFixed(4));