const h2 = document.createElement("h2");
h2.textContent = "Get cozy and get to know Cho!";
document.querySelector("body").appendChild(h2);


function show() {
  let image = document.getElementById('Aegi');
  image.src = "photo/Aegi.jpeg"

  document.getElementById('btnID')
    .style.display = "none";
}

//Get the button:
function scrollToTop() {
  window.scrollTo(0, 0);
}


const input = document.getElementById('coffeeHome');
function clickAlert() {
  alert("You picked our best seller!");
}
input.addEventListener('click', clickAlert);

