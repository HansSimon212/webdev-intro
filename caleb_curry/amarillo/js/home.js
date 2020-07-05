// tests pop/push, unshift/shift methods
{
    let ints = [14, 0, 2, -41];

    for(let i = 0; i < 4; i+=1) {
        ints.shift();
        console.log(ints);
    }

    ints.shift();
    console.log(ints);
}

// tests splice add/delete/replace
{
    let names = [`caleb`, `hans`, `henry`];
    let namesRemoved = names.splice(1,1);

    console.log(names);
    console.log(namesRemoved);

    let grades = [1,2,5,6,7,8,10,40];
    let gradesRemoved = grades.splice(2,4,0,0,0,0);
    console.log(grades); // should be [1,2,0,0,0,0,10,40]
    console.log(gradesRemoved); // should be [5,6,7,8]
}

