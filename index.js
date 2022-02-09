function rasuol() {
	let sajjad1 = "Hi this is Const, 10 + 10 = ?";
	const x = 10;
	const z = 10;
	let y = x + z;

	document.getElementById("demo").innerHTML = sajjad1 + "<h2>" + y;
}

function sajjad() {
	let sajjad2 = "this is Date";
	document.getElementById("demo1").innerHTML = sajjad2 + "<h2>" + Date();
}

var age = prompt("Whats Your Age?");

if (age == 18) {
	alert("Welcome to my page");
} else if (age >= 18) {
	alert("Welcome to my project");
} else {
	alert("Sorry can't access the page!");
}

//mix = confirm("hhuhih");
//alert(mix)

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml10");
textWrapper.innerHTML = textWrapper.textContent.replace(
	/\S/g,
	"<span class='letter'>$&</span>"
);

anime
	.timeline({loop: true})
	.add({
		targets: ".ml10 .letter",
		opacity: [0, 1],
		easing: "easeInOutQuad",
		duration: 1250,
		delay: (el, i) => 150 * (i + 1),
	})
	.add({
		targets: ".ml10",
		opacity: 0,
		duration: 100000,
		easing: "easeOutExpo",
		delay: 100000,
	});
