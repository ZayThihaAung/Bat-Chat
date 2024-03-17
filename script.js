document.addEventListener("DOMContentLoaded", function() {
    const accordionItems = document.querySelectorAll(".accordion-item");
  
    accordionItems.forEach(item => {
      const header = item.querySelector(".accordion-header");
      const content = item.querySelector(".accordion-content");
  
      header.addEventListener("click", () => {
        item.classList.toggle("active");
        if (item.classList.contains("active")) {
          content.style.maxHeight = header.offsetHeight + "pc";
        } else {
          content.style.maxHeight = null;
        }
      });
    });
  });
const pTag = document.querySelector("p");
pTag.addEventListener("click", ()=> {
    const containerTag = document.querySelector(".container");
    containerTag.style.maxHeight = `100px`;
    console.log("Clicked");
});