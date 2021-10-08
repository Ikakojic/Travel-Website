//read more btn

let dots = document.getElementById("dots");
let moreText = document.getElementById("more");
let btn = document.getElementById("myBtn");

function readMoreOrLess() {
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

btn.addEventListener("click", readMoreOrLess);

//destinations

(function () {
  const places = [
    {
      place: "Spain",
      image: "url(img/sp.jpg)",
    },
    {
      place: "France",
      image: "url(img/fr.jpg)",
    },
    {
      place: "Thailand",
      image: "url(img/thailand.jpg)",
    },
    {
      place: "Egypt",
      image: "url(img/sand.jpg)",
    },
    {
      place: "Barbados",
      image: "url(img/plmtr.jpg)",
    },
    {
      place: "Turkey",
      image: "url(img/turkey.jpg)",
    },
    {
      place: "Perú",
      image: "url(img/peru.jpg)",
    },

    {
      place: "Maldives",
      image: "url(img/maldives.jpg)",
    },
  ];

  const placesBtn = document.querySelector("#destinations-btn");
  const text = document.querySelector("#place");
  const background = document.querySelector(".destinations");

  placesBtn.addEventListener("click", function () {
    let index = Math.floor(Math.random() * places.length);
    text.textContent = places[index].place;
    background.style.background = places[index].image;
  });
})();

//form validation

const fname = document.getElementById("fname");
const email = document.getElementById("email");
const txt = document.getElementById("txt");

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (fname.value.trim() === "") {
    alert("Please enter your name.");
  }
  if (email.value.trim() === "") {
    alert("Please enter email.");
  }

  if (txt.value.trim() === "") {
    alert("Please enter your message.");
  }
});
