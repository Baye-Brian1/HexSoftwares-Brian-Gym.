  document.addEventListener('DOMContentLoaded', ()=>{
      const menuIcon = document.querySelector(".fa-bars");
  const closeIcon = document.querySelector(".fa-xmark");
  const navbar = document.querySelector(".nav-links");

   closeIcon.style.display = "none";

    menuIcon.addEventListener("click", () => {
      navbar.style.display="block"
      menuIcon.style.display = "none";
      closeIcon.style.display = "block";
    });

    closeIcon.addEventListener("click", () => {
      navbar.style.display="none";
      menuIcon.style.display = "block";
      closeIcon.style.display = "none";
    });
  });
 