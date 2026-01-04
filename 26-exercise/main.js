function getAcces(callback) {
    setTimeout(() => {
       const great = ("Hi! you late 2 sec");
       callback(great)
    },2000)
    
}

getAcces(function(great) {
    console.log(great);
});
