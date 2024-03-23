const hamburgerMenuContainerTag = document.querySelector(
  ".hamburgerMenuContainer"
);
const hamburgerTag1 = document.querySelector(".hamburger1");
const hamburgerTag2 = document.querySelector(".hamburger2");
const hamburgerTag3 = document.querySelector(".hamburger3");
const compound = [hamburgerTag1, hamburgerTag2, hamburgerTag3];
const hamburgerItems = document.querySelector('.hamburgerItems');

let index = true;
hamburgerMenuContainerTag.addEventListener("click", ()=> {
  if (index) {
    hamburgerTag1.style.transform = 'translateY(9px) rotate(45deg)';
    hamburgerTag2.style.opacity = '0';
    hamburgerTag3.style.transform = 'translateY(-9px) rotate(-45deg)';
    for (let i = 0; i < compound.length; i++) {
      compound[i].classList.add('transForm');
    }
    hamburgerItems.style.transform = 'translateY(0cm)';
    index = false;
  } else {
    hamburgerTag1.style.transform = "translateY(0px) rotate(0deg)";
    hamburgerTag2.style.opacity = '1';
    hamburgerTag3.style.transform = "translateY(0px) rotate(0deg)";
    hamburgerItems.style.transform = 'translateY(-18cm)';
    index = true;
  }
})

