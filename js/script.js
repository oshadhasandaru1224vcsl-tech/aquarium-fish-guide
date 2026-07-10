const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function(){

    navLinks.classList.toggle("active");

});

console.log("Aquarium website loaded");


const rows = document.querySelectorAll("#compatTable tbody tr");

rows.forEach(row => {
  row.addEventListener("click", () => {
    rows.forEach(r => r.style.outline = "none");
    row.style.outline = "2px solid #38bdf8";
  });
});
