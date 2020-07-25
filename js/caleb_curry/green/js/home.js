// renders a pyramid of the form:
// 0
// 0 1
// 0 1 2
// ...
function renderPyramid() {
    let dest = document.getElementById("destination");
    for (let i = 0; i < 10; i += 1) {
        for (let j = 0; j <= i; j += 1) {
            //console.log(`This loop has run ${i * 5 + j} times before.`);
            dest.append(j + ` `);
        }
        var br = document.createElement('br');
        dest.appendChild(br);
    }
}

// renderPyramid();

// testing properties of arrays
function testArrs() {
    let a = [1, 2, 3]
    a[5] = 20
    console.log(`Array length: ${a.length}`)
}

// testArrs();

// more testing
function testArrs2() {
    let a = [4, 16, 2, 4, 5]
    a.length = 2;
    console.log(a);
    a.length = 30;
    console.log(a);
}

// testArrs2();

/**
 * userAppendToArray: Array PosInt -> Array
 * Reads in at maximum numEls elements from user and appends to end of given array.
 * @function
 * @param {Array} arr - The array being filled.
 * @param {number} numEls - Max number of elements a user can add to the end of the array
 * @throws if a non-positive max number of elements to be added is given
 */
function userAppendToArray(arr, numEls) {
    let cnt = 0; // number of elements successfully added to given array
    while (cnt < numEls) {
        let input = prompt("Enter a number. Press 'q' to quit");
        if (!input || input === 'q') {
            break;
        }
        let parsed = Number.parseInt(input); // typeof parsed === 'number'
        if (isNaN(parsed)) {
            continue;
        }
        arr.push(parsed);
        cnt += 1;
    }
}

{
    // testing userAppendToArray function
    let empty = [];
    userAppendToArray(empty, 4);
    console.log(empty);

    let nums = [1, 2, 3];
    userAppendToArray(nums, 1);
    console.log(nums);

    // altering length, making sure append happens at end
    nums.length = 10;
    userAppendToArray(nums, 3);
    console.log(nums);
}


