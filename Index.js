const Firstname = "Sabelo"
const lastname = "Gumede"
let age = undefined

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
    "excel"
]

console.log(modules);