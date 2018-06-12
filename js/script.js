let btn = document.querySelector('.btn');
console.log(btn)
function myAnimation() {
	let elem = document.querySelector('.rocket'),
			pos = 0,
			id = setInterval(frame, 10);

	function frame() {

		if (pos == -800) {
			clearInterval(id);
		} else {
			pos--;
			elem.style.marginTop = pos + 'px';
			elem.style.marginLeft = pos + 'px';
		} 
	}

}

btn.addEventListener('click', myAnimation);