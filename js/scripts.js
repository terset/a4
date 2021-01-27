let inputPlastic = document.querySelector(.plastic);
inputPlastic.addEventListner('click',showPopup);

function showPopup() {
	let popUp = document.querySelector('.popUp');
	popUp.classList.add('visible')
}
