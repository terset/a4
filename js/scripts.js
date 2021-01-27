let inputPlastic = document.querySelector(.plastic);
inputPlastic.addEventListner('click',showPopup);

function showPopup() {
	let a = document.querySelector('.popUp');
	a.classList.add('visible');
	
}
