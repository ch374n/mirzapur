const grid = document.querySelector('section') 
const input = document.querySelector('input')

let characters = [
	{
		name: "Munna Bhaiyya", 
		actorName: "Divyendu Sharma", 
		status: "Alive", 
		image: "images/Munna.jpg" 
	}, 
	{
		name: "Kaleen Bhaiyya", 
		actorName: "Pankaj Tripathi", 
		status: "Alive", 
		image: "images/kalin.jpg"
	}, 
	{
		name: "Bablu Bhaiyya", 
		actorName: "Vikrant Massey", 
		status: "Dead",
		image: "images/babalu.jpg"
	},
	{
		name: "Beena Tripathi", 
		actorName: "Rasika Dugal", 
		status: "Alive",
		image: "images/Beena.jpg"
	},
	{
		name: "Sweety Gupta", 
		actorName: "Shiriya Pilgaonkar", 
		status: "Dead",
		image: "images/GudduGF.jpg"
	},
	{
		name: "Guddu Bhaiyya", 
		actorName: "Ali Fazal's", 
		status: "Alive",
		image: "images/Guddu.jpg"
	},
	{
		name: "Ramakant Pandit", 
		actorName: "Rajesh Tailang", 
		status: "Alive",
		image: "images/Ramakant.jpg"
	},
	{
		name: "Satyanand Tripathi", 
		actorName: "KulBhushan Kharbanda", 
		status: "Alive",
		image: "images/KalinsFather.jpg"
	},  
	{
		name: "Vasudha", 
		actorName: "Sheeba Chaddha", 
		status: "Alive",
		image: "images/GuddusMonther.jpg"
	},
	{
		name: "Golu", 
		actorName: "Shweta Tripathi", 
		status: "Alive",
		image: "images/Golu.jpg"
	}, 
	{
		name: "Dimpy", 
		actorName: "Harshita Gaur", 
		status: "Alive",
		image: "images/GuddusSister.jpg"
	}, 
	{
		name: "Maqbool Khan", 
		actorName: "Shaji Chaudhary", 
		status: "Alive",
		image: "images/Maqbool.jpg"
	},    
]


function init(characters) {
	const code = [] 
	// number of characters 

	characters.forEach(({ name, actorName, image, status }) => {
		code.push(`
			<div class="card">
	            <div class="card-container">
	               <div class="card-front" style="background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url(./${image}); background-repeat: no-repeat; background-size: cover; background-position: center center;">
	               </div>
	               <div class="card-back">
	                  	<div class="name">${name}</div> 
	                  	<div class="actor_name">Actor name: ${actorName}</div> 
	                  	<div class="status">Status: ${status}</div> 
	               </div>
	            </div>
	         </div>
		`)
	})

	grid.innerHTML = code.join('')  		
}

window.addEventListener('DOMContentLoaded', () => {
	init(characters) 
	console.log("loaded", characters)
})



input.addEventListener("keyup", (e) => {
	const { value } = e.target 
	console.log(value)
	const filtered = characters.filter(({ name }) => name.toLowerCase().includes(value.toLowerCase()))
	console.log(filtered)
	init(filtered) 
})
