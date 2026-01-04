function fetchStudentData() {
    return new Promise((resolv,reject) => {
       
        setTimeout(() => {
            const succes = true;
            if(succes) {
                resolv({
                    id:1,
                    name:"ahmed",
                    class:"f32",
                    age:21
                }) 
            }
        },2000)
    })
}

// async and await

async function displayStudentData() {
   try {
    // succes msg
    const student = await fetchStudentData();
    console.log("user data", student);
   } catch (err) {
    // error msg
      console.log(err);
   }
}

displayStudentData()
