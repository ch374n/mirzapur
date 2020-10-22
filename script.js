const grid = document.querySelector('section') 
const input = document.querySelector('input')

let characters = [
	{
		name: "Munna Bhaiyya", 
		actorName: "Pankaj Tripathi", 
		status: "Alive", 
		image: "img1.jpeg" 
	}, 
	{
		name: "Kaleen Bhaiyya", 
		actorName: "Pankaj Tripathi", 
		status: "Alive", 
		image: "img2.jpeg"
	}, 
	{
		name: "Bablu Bhaiyya", 
		actorName: "Pankaj Tripathi", 
		status: "Alive",
		image: "img3.jpeg"
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
