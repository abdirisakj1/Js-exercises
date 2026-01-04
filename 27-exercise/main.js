function fetchStudentData() {
    return new Promise((resolv,reject) => {
          
        setTimeout(() => {
            const succes = true;
            //  if(succes == true)
            if(succes) {
                resolv({
                    id:1,
                    name:"jaamac",
                    class:"f21s",
                    age:20
                })
            }  else{
                reject("Failed to fetch student data!😔")
            }
        },2000)
    })
}

fetchStudentData()
.then((data)=> {
    console.log("Student data📈", data);
})
.catch((err) => {err})