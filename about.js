console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let duckPic = document.querySelector('#duckPic')

duckPic.addEventListener('mouseover', () => {
	alert("Hey good lookin!")
})

