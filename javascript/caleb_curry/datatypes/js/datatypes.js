// declaring and performing simple operations on primitives
// to see what happens
function testPrimitives() {
    let x = true;
    let y = 10;
    let z = "Hello";

    let xy = x + y;
    let yz = y + z;
    let xz = x + z;

    console.log("xy: " + xy);
    console.log("xz: " + xz);
    console.log("yz: " + yz);
    console.log(xy);
    console.log(xz);
    console.log(yz);
}

// testPrimitives();

// A Cat is the following:
let cat1 = {
    name: 'Chase',
    age: 11,
    furColor: 'Brown',
    updateFurColor:
    // String -> Void
    // SIDE EFFECT: updates the fur color of this cat
        function(newColor) {
        this.furColor = newColor;
    }
};
// and represents a terrestrial cat

// testing behavior of string methods
{
    let firstName = "hans";
    firstName = firstName.toString();
    console.log(firstName);
}

