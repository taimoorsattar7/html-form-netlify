// grap all the input reference. 

const errorMessage = document.getElementById('error-message');

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const message = document.getElementById('message');
const avatar = document.getElementById("avatar");
const positions = document.getElementById("positions");

let arrayInputs = [firstName, lastName, email, message];

const button = document.getElementById('btn');

const form = document.getElementById("myForm");

// define the regex pattern to validate user input.
let pattern = {
	text: /^[a-z0-9\d\s\W]+$/i,
	email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
	url: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g,
	userName: /^[a-z][a-z0-9]{7,50}$/i,
	tags: /^[\a-z]+(?:,[\a-z]+){0,4}$/g,
	password: /^[\w@-]{8,20}$/
};

// Avatar 

document.addEventListener("DOMContentLoaded", function(event) {
   document.querySelectorAll('img').forEach(function(img){
   	if(!img.src){
   		img.style.display='none';
   	}
   })
});

function imagePreview(e) {
	const blob = new Blob([e.files[0]], { type: "image/jpeg" });
	const blobURL = URL.createObjectURL(blob);
	avatar.style.display='block'
	avatar.src = blobURL;
}

function valudateInput(type, value){
	if(!pattern[type]) return true;
	return pattern[type] ? pattern[type].test(value): "";	
}

function handleSubmit(e) {
	e.preventDefault();

	errorMessage.innerText = "";

	// Disable the button during form submission 
	button.disabled = true;

	// You can also loop the arrayInputs for e varible
	// let inputs = Array.from(e.target);
	
	// Loop through Input arrays
	let isError = false;
	arrayInputs.forEach(function (input) {
		// input.value, input.name, input.type

		if(!valudateInput(input.type, input.value)){
			errorMessage.innerText = "Please Fill the inputs!!!";
			errorMessage.scrollIntoView();
			isError = true;
		}
	});

	button.disabled = false;

	if(!isError){
		form.submit();
	}else{
		return false;
	}

}