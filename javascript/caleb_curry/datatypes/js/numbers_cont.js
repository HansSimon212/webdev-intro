{
    let x = 20;
    let y = x.toExponential(4);
    console.log(x, y)
}

// discerning the type of equality checked for in a switch statement
function switchTest() {
    let name = "5";

    // testing single-line if statement
    (name !== 5) ? console.log("then") : console.log("else");

    switch (name) {
        case 5:
            alert("not strict equality");
            break;
        case "5":
            alert("strict equality");
            break;
    }
}

switchTest();