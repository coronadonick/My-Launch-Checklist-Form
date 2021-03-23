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
         <li>Number of Moons: ${json[index].moons}</li>
         </ol>
         <img src="${json[index].image}">
         `
      });
   });

	let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();

      let ready = true;
      let items = document.getElementById('faultyItems');
		let launchStatus = document.getElementById('launchStatus');
		let fuelStatus = document.getElementById('fuelStatus');
		let cargoStatus = document.getElementById('cargoStatus')

		let pilotName = document.querySelector("input[name=pilotName]").value;
		let copilotName = document.querySelector("input[name=copilotName]").value;
		let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
		let cargoMass = document.querySelector("input[name=cargoMass]").value;

		if (pilotName === "" || copilotName === "" || fuelLevel === '' || isNaN(fuelLevel) || cargoMass === '' || isNaN(cargoMass) ) {

			alert("All fields are required!");
			items.style.visibility = 'hidden';

			launchStatus.style.color = 'black';
			launchStatus.innerHTML = 'Awaiting Information Before Launch';

		} else {

			items.style.visibility = 'visible';

			document.getElementById('pilotStatus').innerHTML = `Pilot ${ pilotName + ' ' }Ready`
			document.getElementById('copilotStatus').innerHTML = `Co-pilot ${ copilotName + ' ' }Ready`

			if (fuelLevel < 10000) {
				ready = false;
				fuelStatus.innerHTML = 'Not enough fuel for launch. We have ${fuelLevelInput.value}L loaded and at least 10,000L are needed.';
			} else {
				fuelStatus.innerHTML = 'Fuel level high enough for launch';
			}

			if (cargoMass > 10000) {
				ready = false;
				cargoStatus.innerHTML = 'Too much mass for the shuttle to take off. Max load is 10,000kg and we have ${cargoMassInput.value}kg.';
			} else {
				cargoStatus.innerHTML = 'Cargo mass low enough for launch';
			}

			if (ready) {
				launchStatus.style.color = 'green';
				launchStatus.innerHTML = 'Shuttle is ready for launch';
				retrieveData();
			} else {
				items.style.visibility = 'visible';
				launchStatus.style.color = 'red';
				launchStatus.innerHTML = 'Shuttle not ready for launch';
			}

      }

   });
});


