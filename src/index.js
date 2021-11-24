console.log(data);

// WRITE YOUR CODE BELOW!

/*     <h2>Mr. Bonkers</h2>
        <img
          src="https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
          alt=""
        />
        <div class="main__dog-section__desc">
          <h3>Bio</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
            minima voluptates libero cumque rerum consequatur optio aliquid sint
            eum maxime illo laborum omnis quo ab rem cupiditate nulla
            perspiciatis ipsum!
          </p>
        </div class="main__dog-section__btn">
        <p><em>Is naughty?</em> yes!</p>
        <button>Good dog!</button> */

function updateDogCard(dog) {
	const dogsListButton = document.createElement("li");
	//create the list item
	dogsListButton.setAttribute("class", "dogs-list__button");
	dogsListButton.textContent = dog.name;
	dogsList.append(dogsListButton);

	//adding event listener to the list item
	dogsListButton.addEventListener("click", function () {
		//clearing the dog section
		dogSection.innerHTML = "";

		//creating the new title
		const dogTitle = document.createElement("h2");
		dogTitle.textContent = dog.name;

		//creating the new image
		const dogImg = document.createElement("img");
		dogImg.src = dog.image;

		//creating the description section
		const dogDesc = document.createElement("div");
		dogDesc.setAttribute("class", "main__dog-section__desc");
		const h3El = document.createElement("h3");
		h3El.textContent = "Bio";
		const pDescEl = document.createElement("p");
		pDescEl.textContent = dog.bio;
		dogDesc.append(h3El, pDescEl);

		//creating the button seciion
		const dogBtn = document.createElement("div");
		dogBtn.setAttribute("class", "main__dog-section__btn");
		const pBtnEl = document.createElement("p");
		pBtnEl.textContent = dog.isGoodDog ? " Yes!" : " No!";
		const emEl = document.createElement("em");
		emEl.textContent = "Is naughty?";
		pBtnEl.prepend(emEl);
		const btnEl = document.createElement("button");
		btnEl.textContent = dog.isGoodDog ? "Good Dog" : " Bad Dog";

		//adding event listener to the button
		btnEl.addEventListener("click", function () {
			dog.isGoodDog = !dog.isGoodDog;
			btnEl.textContent = dog.isGoodDog ? "Good Dog" : " Bad Dog";
			pBtnEl.textContent = dog.isGoodDog ? " Yes!" : " No!";
			pBtnEl.prepend(emEl);
		});
		dogBtn.append(pBtnEl, btnEl);

		//adding the created sections to the dog section
		dogSection.append(dogTitle, dogImg, dogDesc, dogBtn);
	});
}
function showForm() {
	//clearing the dog section
	dogSection.innerHTML = "";

	//creating the form title
	const dogTitle = document.createElement("h2");
	dogTitle.textContent = "Add a new dog";

	//creating the form and its elements
	const dogForm = document.createElement("form");
	dogForm.setAttribute("class", "form");
	// creating the name label and input
	const nameLabel = document.createElement("label");
	nameLabel.setAttribute("for", "name");
	nameLabel.textContent = "Dog's Name";
	const nameInput = document.createElement("input");
	nameInput.setAttribute("type", "text");
	nameInput.setAttribute("id", "name");
	nameInput.setAttribute("name", "name");
	nameInput.setAttribute("required", "true");
	//creating the image label and input
	const imageLabel = document.createElement("label");
	imageLabel.setAttribute("for", "image");
	imageLabel.textContent = "Dog's Picture";
	const imageInput = document.createElement("input");
	imageInput.setAttribute("type", "url");
	imageInput.setAttribute("id", "image");
	imageInput.setAttribute("name", "image");
	imageInput.setAttribute("required", "true");

	//creating the bio label and text area
	const bioLabel = document.createElement("label");
	bioLabel.setAttribute("for", "label");
	bioLabel.textContent = "Dog's bio";
	const bioTextarea = document.createElement("textarea");
	bioTextarea.setAttribute("rows", "5");
	bioTextarea.setAttribute("id", "bio");
	bioTextarea.setAttribute("name", "bio");
	bioTextarea.setAttribute("required", "true");

	//creating the submit "button"
	const submitBtn = document.createElement("input");
	submitBtn.setAttribute("type", "submit");
	submitBtn.setAttribute("id", "submit");
	submitBtn.setAttribute("name", "submit");
	submitBtn.setAttribute("value", "Let's add a dog!");
	submitBtn.setAttribute("class", "form__button");

	//appending the created elements to the form and the form to the dog section
	dogForm.append(nameLabel, nameInput, imageLabel, imageInput, bioLabel, bioTextarea, submitBtn);
	dogSection.append(dogTitle, dogForm);

	// adding submit event listener to add a new dog
	dogForm.addEventListener("submit", function (event) {
		event.preventDefault();
		id++;
		const newDog = {
			id: id,
			name: nameInput.value,
			bio: bioTextarea.value,
			isGoodDog: true,
			image: imageInput.value,
		};
		data.unshift(newDog);
		dogForm.reset();
		//recreating the dog list
		dogsList.innerHTML = `<li class="dogs-list__button dogs-list__button--add">+</li>`;
		const addBtn = document.querySelector(".dogs-list__button--add");
		addBtn.addEventListener("click", showForm);
		updateDogCards(data);
	});
}
function updateDogCards(data) {
	for (const dog of data) {
		updateDogCard(dog);
	}
}

const dogsList = document.querySelector(".dogs-list");
const dogSection = document.querySelector(".main__dog-section");
updateDogCards(data);
const addBtn = document.querySelector(".dogs-list__button--add");
let id = 7;
addBtn.addEventListener("click", showForm);
