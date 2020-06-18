function testPrimitives() {
    // declaring and performing simple operations on primitives
    // to see what happens
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

// cat object
let cat = {
    name: 'Kitty',
    age: 11,
    furColor: 'brown',
    updateFurColor: function (newColor) {
        this.furColor = newColor;
    }
};

function update() {
    cat.updateFurColor(15);
    console.log(cat.furColor);
}

//update();

// prototype chain: in effect JS inheritance

{
    let firstName = "hans";
    firstName = firstName.toString();
    console.log(firstName);
}