"use strict";

const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dot");

//////////////////////////////////////////////////////
// Receives the value of i
const setActive = (x) => {
  // Add active class of image to respective image
  for (const slide of slides) {
    slide.classList.remove("active");
    slides[x].classList.add("active");
  }

  // Add active class to indicator/dots
  for (const dot of dots) {
    dot.classList.remove("active");
    dots[x].classList.add("active");
  }
};

/////////////////////////////////////////////////////
// When Click on each dot/indicator the event happens
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", () => {
    setActive(i);
  });
}
