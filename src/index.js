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

const dogsList = document.querySelector(".dogs-list");

function updateDogCard(dog) {
	const dogsListButton = document.createElement("li");
	dogsListButton.setAttribute("class", "dogs-list__button");
	dogsListButton.textContent = dog.name;
	dogsList.append(dogsListButton);

	const dogSection = document.querySelector(".main__dog-section");

	dogsListButton.addEventListener("click", function () {
		dogSection.innerHTML = "";
		const dogTitle = document.createElement("h2");
		dogTitle.textContent = dog.name;

		const dogImg = document.createElement("img");
		dogImg.src = dog.image;

		const dogDesc = document.createElement("div");
		dogDesc.setAttribute("class", "main__dog-section__desc");
		const h3El = document.createElement("h3");
		h3El.textContent = "Bio";
		const pDescEl = document.createElement("p");
		pDescEl.textContent = dog.bio;
		dogDesc.append(h3El, pDescEl);

		const dogBtn = document.createElement("div");
		dogBtn.setAttribute("class", "main__dog-section__btn");
		const pBtnEl = document.createElement("p");

		pBtnEl.textContent = dog.isGoodDog ? " Yes!" : " No!";
		const emEl = document.createElement("em");
		emEl.textContent = "Is naughty?";
		pBtnEl.prepend(emEl);
		const btnEl = document.createElement("button");
		btnEl.textContent = dog.isGoodDog ? "Good Dog" : " Bad Dog";

		btnEl.addEventListener("click", function () {
			dog.isGoodDog = !dog.isGoodDog;
			btnEl.textContent = dog.isGoodDog ? "Good Dog" : " Bad Dog";
			pBtnEl.textContent = dog.isGoodDog ? " Yes!" : " No!";
			pBtnEl.prepend(emEl);
		});

		dogBtn.append(pBtnEl, btnEl);

		dogSection.append(dogTitle, dogImg, dogDesc, dogBtn);
	});
}

for (const dog of data) {
	updateDogCard(dog);
}
