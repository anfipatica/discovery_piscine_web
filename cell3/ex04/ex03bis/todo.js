$(function() {
	let n = 0;


	if (localStorage.length <= 1)
		localStorage.setItem(0, 0);
	while (++n <= localStorage.getItem(0)) {
		if (localStorage.getItem(n) != null)
			addTask(localStorage.getItem(n), n);
	}

	function addTask(task, index) {
		if (task != null) {
			let new_entry = $("<li>").text(task);
			$("#list").prepend(new_entry);
			localStorage.setItem(n,task);
			new_entry.click(function() {
				let choice = window.confirm("Are you sure you want to delete this task?");
				if (choice == true) {
					$(this).remove();
					localStorage.removeItem(index);
				}
			});
		}
	}

	$("#button").click(function() {
		let task = prompt("Write your new task");
		addTask(task, n);
		localStorage.setItem(0, n++);
	})
})