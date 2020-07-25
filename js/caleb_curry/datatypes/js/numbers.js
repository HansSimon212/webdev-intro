// testing some properties of numbers
function nums() {
    console.log(Number.MAX_SAFE_INTEGER)
    console.log(Number.MIN_SAFE_INTEGER)
    console.log(Number.MAX_SAFE_INTEGER * 2)
    console.log(Math.pow(Number.MAX_SAFE_INTEGER, 20))
    console.log(Math.pow(Number.MAX_SAFE_INTEGER, 45))
    console.log(console.log() + 2.0)
    console.log(4 / 0)
    console.log((4 / 0) + (4 / 0))
}

//nums();

// experimenting with increment/decrement operators
function inc_dec() {
    let x = 10;
    console.log(`original x: ${x}`)

    let y = x++;
    console.log(`original y: ${y}`)

    console.log(`new x: ${x}`)

    let z = ++y;
    console.log(`original z: ${z}`)
    console.log(`new y: ${y}`)

    console.log(typeof z++)
}

// inc_dec();

// experimenting with assignment statements
function assignments() {
    let y;
    console.log(y = true);
    console.log(y = 5);
    console.log(y++);
    console.log(y);
}

//assignments();

// experimenting with the parseInt/parseFloat methods
function numMethods() {
    let msg1 = `Hello, World!`
    let msg2 = `I am 5.0 years old`
    let msg3 = `15.2`

    for(let i = 1; i <= 3; i++) {
        let varName = `msg${i}`
        let varValue = eval(varName)
        console.log(`parseInt(${varName}): ${parseInt(varValue)}`)
        console.log(`parseFloat(${varName}): ${parseFloat(varValue)}`)
    }
}

//numMethods();

// interpretInBase: Int -> Int
// Interprets a decimal number in the given base
// SIDE EFFECT: updates the DOM to show result of interpretation attempt
function interpretInBase(base) {
    let interpreted;
    let txt = document.getElementById("numText").value;
    let resultTxt = document.getElementById("result").innerHTML;

    // if given number cannot be converted to an integer, outputs error message
    try{
        interpreted = parseInt(txt, base)
    } catch(err) {
        document.getElementById("result").innerHTML = `Error. Please enter an integer value.`;
        return;
    }

    // if interpretation produces NaN, print error. Else, print result.
    if(isNaN(interpreted)) {
        document.getElementById("result").innerHTML = `Error. This interpretation isn't possible.`
    } else {
        document.getElementById("result").innerHTML = `Result: ${interpreted}`
    }
}


// interpretInBase2: Void -> Void
// attempts to interpret value of text field "numText" as binary number
// SIDE EFFECT: updates the DOM to show result of interpretation attempt
function interpretInBase2() {
    interpretInBase(2);
}

// interpretInBase8: Void -> Void
// attempts to interpret value of text field "numText" an octal number
// SIDE EFFECT: updates the DOM to show result of interpretation attempt
function interpretInBase8() {
    interpretInBase(8);
}

// interpretInBase16: Void -> Void
// attempts to interpret value of text field "numText" as a hex number
// SIDE EFFECT: updates the DOM to show result of interpretation attempt
function interpretInBase16() {
    interpretInBase(16);
}

document.getElementById("binaryButton").onclick = interpretInBase2;
document.getElementById("octalButton").onclick = interpretInBase8;
document.getElementById("hexadecimalButton").onclick = interpretInBase16;
