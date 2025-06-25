let Firstname = document.getElementById('name')
let lastname = document.getElementById('lastname')
let age = document.getElementById('age')

let isMale=true
console.log(Firstname)
if(Firstname.trim()=="")
{
    console.log("first name is required ");
}
else
{
    console.log(Firstname);
}

//Arrays

let course =["dat structures","statistics","mathermatics"]
course.push("database design")
console.log(course);

//nested arrays

let modules =[
    "maths101",
    {newmodule:"info systems",
    newmodule1:"databases"
    },
    "excel",
    "movies"
]

console.log(modules);

Firstname=getElementById('name')