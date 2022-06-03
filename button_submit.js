document.querySelector("#button").addEventListener("click", () => {
	if (document.querySelector("#myForm").checkValidity()) {
		setTimeout(() => {
			document.querySelector("#button").classList.add("onclic");
			validate();
		}, 250);
	}
});
function validate() {
	setTimeout(() => {
		setTimeout(() => {
			document.querySelector("#button").classList.remove("onclic");
			document.querySelector("#button").classList.add("validate");
			callback();
		}, 450);
	}, 1795); // 2250
}
function callback() {
	setTimeout(() => {
		document.querySelector("#button").classList.remove("validate");
	}, 1250);
}
