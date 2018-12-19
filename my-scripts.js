//set count
if(localStorage.getItem("count") == null )  {
localStorage.setItem ("count", 0)
}

// update count
function update() {
	document.getElementById ("count").innerHTML = localStorage.getItem("count")
}

update()

//add 1 to count
function plusOne() {
	localStorage.setItem ("count", Number ( localStorage.getItem ("count")) + 1 )
	update()
}

//Rest
function reset() {
	if(confirm("Did you really mediatate?")){
		localStorage.setItem ("count", 0)
		update()

	}
}