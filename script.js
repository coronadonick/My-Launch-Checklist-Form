// Write your JavaScript code here!


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}"> */

window.addEventListener("load", function() {
   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then (function(response) {
      response.json().then(function(json) {
         let index = Math.floor(Math.random() * json.length);
         console.log(json[index].name);
         document.getElementById("missionTarget").innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
         <li>Name: ${json[index].name}</li>
         <li>Diameter: ${json[index].diameter}</li>
         <li>Star: ${json[index].star}</li>
         <li>Distance from Earth: ${json[index].distance}</li>
         <li>Number of Moons: ${json[index].image}</li>
         </ol>
         <img src="${json[index].image}">
         `
      });
   });

	let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();

      let items = document.getElementById('faultyItems');
		let launchStatus = document.getElementById('launchStatus');
		let fuelStatus = document.getElementById('fuelStatus');
		let cargoStatus = document.getElementById('cargoStatus')
		let ready = true;

		let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLeve]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      if (pilotName === "" || copilotName === "" || fuelLevel === "" || isNaN(fuelLevel) || cargoMass === "" || isNaN(cargoMass)) {
         alert("All fields required");
         items.style.visibility = "hidden";

         launchStatus.style.color = "black";
         launchStatus.innerHTML = "Awaiting Information Before Launch"
      } else {
         items.style.visibility = "visible";

         this.document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName + " "}Ready`
         this.document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilotName + " "}Ready`
      }

   });
});


