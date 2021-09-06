const boxes = document.querySelectorAll(".box"); //Will select all the class boxes and put them in a node list.
window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
	const triggerBottom = (window.innerHeight / 5) * 4;

	boxes.forEach((box) => {
		const boxTop = box.getBoundingClientRect().top;

		if (boxTop < triggerBottom) {
			box.classList.add("show");
		} else {
			box.classList.remove("show");
		}
	});
}
