const button = document.getElementById("button");
let list = document.getElementById("list");
let n = 0;


function remove_div(div,index) {
	if (window.confirm("Are you sure you want to delete the task ") == true) {
		div.remove();
		localStorage.removeItem(index);
		console.log(index +" - "+div.textContent);
	}
}

function enclose_remove_div(div, index) {
	return function() {
		remove_div(div, index);
	}
}

function add_div() {
	let new_entry = document.createElement("li");
	let div = document.createElement("div");
	let task = document.createTextNode(prompt("Enter your new TO DO: "));
	if (!task.textContent || task.textContent == "null")
		return (null);
	new_entry.appendChild(task);
	div.prepend(new_entry);
	list.prepend(div);
	localStorage.setItem(n, new_entry.textContent);
	div.addEventListener("click", enclose_remove_div(div,n));
	localStorage.setItem(0, n++);
}

function add_div_on_load() {
	if (localStorage.length <= 1)
		localStorage.setItem(0, 0);
	while (++n <= localStorage.getItem(0)) {
		if (localStorage.getItem(n) != null)
		{
			let new_entry = document.createElement("li");
			let div = document.createElement("div");
			new_entry.appendChild(document.createTextNode(localStorage.getItem(n)));
			div.prepend(new_entry);
			list.prepend(div);
			div.addEventListener("click", enclose_remove_div(div, n));
		}
	}
}

window.addEventListener("load", add_div_on_load);
button.addEventListener("click", add_div);