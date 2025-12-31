// for in and of array object

let people = [

    // person
    {
        name:"Abdi",
        age: 20,
        city: "mogaishu"
    },

    // person
    {
        name:"jaran",
        age: 20,
        city: "mogaishu"
    },
    {
        name:"hasan",
        age: 21,
        city: "mogaishu"
    },
]





for (let person of people) {
    // key name,age ,city
    for(key in person) {
          console.log(key+ ": " + person[key]);
    }
    console.log("---");
}
  


