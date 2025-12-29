let car = {
   make: "Toyoto",
   model: "Hilux",
   year: "2021",
   start: function() {
    console.log("the car has started!", this.make);
   }
}

console.log(car.start());

