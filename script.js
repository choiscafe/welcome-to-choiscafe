const h2 = document.createElement("h2");
h2.textContent = "Get to know Cho!";
document.querySelector("body").appendChild(h2);


function show() {
  let image = document.getElementById('Aegi');
  image.src = "photo/Aegi.jpeg"

  document.getElementById('btnID')
    .style.display = "none";
}
