document.addEventListener("DOMContentLoaded", () =>{
    const leftArrow = document.querySelector(".left-arrow-testimonial");
    const rightArrow = document.querySelector(".right-arrow-testimonial");
    const dotsContainer = document.querySelector(".carousel-indicators");

    let currentIndex = 0;
    let testimonialData = [];

 fetch("js/testimonial.json")
 .then((response) => response.json ())
 .then((data)  => {
    testimonialData = data;
    createDots (testimonialData.length);
 });

 function createDots(numDots) {
    dotsContainer.innerHTML = "";


    for (let index =0; index < numDots; index++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === 0) {
            dot.classList.add("active");
        }
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot,index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateTestimonials(testimonialData, currentIndex);
            updateDots(currentIndex);
        });
    });
 }

 function updateTestimonials(testimonials, index) {
    const cardElements = [
        {
       container : document.querySelector(".testimonial-card-first"),
       data: testimonials[index %  testimonials.length],
        },
        {
       container: document.querySelector(".testimonial-card-third"),
       data: testimonials[(index + 2 ) % testimonials.length],
        },
    ];

    cardElements.forEach((card)  => {
        const {container,data} = card;


        container.querySelector(".testimonial-image img").src = data.image;
        container.querySelector(".testimonial-name").textContent = data.name;
        container.querySelector(".testimonial-role").textContent = data.role;
        container.querySelector(".testimonial-text").textContent = data.text;
    })
 }


   leftArrow.addEventListener("click"  , () => {
    currentIndex = 
    currentIndex > 0 ? currentIndex - 1 : testimonialData.length - 1;
    updateTestimonials(testimonialData , currentIndex);
    updateDots(currentIndex);
   });


   rightArrow.addEventListener("click"  , () => {
    currentIndex = 
    currentIndex < testimonialData.length - 1 ? currentIndex + 1 :0 ;
    updateTestimonials(testimonialData,currentIndex);
    updateDots(currentIndex);
   });

   function updateDots(position) {
    const dots = document.querySelectorAll(".dot");



    dots.forEach((dot,index)  => {
        if(index === position) {
            dot.classList.add("active");
         }else{
            dot.classList.remove("active");
         }
    });
   }
});