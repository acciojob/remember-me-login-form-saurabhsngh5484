//your JS code here. If required.
const form = document.querySelector("form")
const formElements = Array.from(form.elements);

let username = document.getElementById("username")
let password = document.getElementById("password")
let existing = document.getElementById("existing")
if(localStorage.getItem("username")){
	existing.style.display = "inline"
}
form.addEventListener("submit", (event) => {
	event.preventDefault()
	
	let username = formElements[0]
	let password = formElements[1]
	let check = formElements[2]

	if(check.checked === true){
		localStorage.setItem("username", username.value)
		localStorage.setItem("password", password.value)
	}
	else{
        localStorage.removeItem("username")
		localStorage.removeItem("password")
	}
	alert("Logged in as " + username.value)
})