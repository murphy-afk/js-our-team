const cardsElem = document.querySelector(".cards");
const formElem = document.querySelector(".form");
const nameInput = document.getElementById("name");
const roleInput = document.getElementById("role");
const emailInput = document.getElementById("email");
const profilePhotoInput = document.getElementById("profile-photo");

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];
let cards = "";
for (let i = 0; i < teamMembers.length; i++) {
  const { name, role, email, img } = teamMembers[i];
  const card = `
      <li class="col col-5 card p-0 bg-dark justify-content-center"> 
        <div class="card-content d-flex align-items-center h-100">
          <div class="w-30 h-100 d-flex">
            <img src="${img}" alt="foto profilo">
          </div>
          <div class="w-70 fs-7 text-light ps-2 py-1">
            <h2 class="fs-6">${name}</h2>
            <p>${role}</p>
            <p class="text-info-emphasis">${email}</p>
          </div>
        </div>
      </li>`;
  cards += card;
}

cardsElem.innerHTML = cards;

formElem.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameValue = nameInput.value;
  const roleValue = roleInput.value;
  const emailValue = emailInput.value;
  const imgValue = profilePhotoInput.value;

  teamMembers.push({
    name: nameValue,
    role: roleValue,
    email: emailValue,
    img: imgValue,
  });

  const newCard = `
      <li class="col col-5 card p-0 bg-dark justify-content-center"> 
        <div class="card-content d-flex align-items-center h-100">
          <div class="w-30 h-100 d-flex">
            <img src="img/${imgValue}" alt="foto profilo">
          </div>
          <div class="w-70 fs-7 text-light ps-2 py-1">
            <h2 class="fs-6">${nameValue}</h2>
            <p>${roleValue}</p>
            <p class="text-info-emphasis">${emailValue}</p>
          </div>
        </div>
      </li>`;

  cardsElem.innerHTML += newCard;
  console.log(teamMembers);
  formElem.reset();
});

