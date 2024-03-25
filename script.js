gsap.from('.banner__chess-1', 1.5, {opacity:0, y:100, delay: .2});
gsap.from('.banner__chess-2', 1.5, {opacity:0, y:100, delay: .3});
gsap.from('.banner__chess-3', 1.5, {opacity:0, x:-300, delay: .4});
gsap.from('.banner__chess-4', 1.5, {opacity:0, x:300, delay: .5});
gsap.from('.banner__sun', 1.5, {opacity:0, y:100, delay: .1});



let stages_left_arrow = document.querySelector(".stages__switcher-left");
let stages_right_arrow = document.querySelector(".stages__switcher-right");
let stages_container = document.querySelector(".stages__container");
let stages_switcher_dots = document.querySelector(".stages__switcher__dots");

let participants_left_arrow = document.querySelector(".participants__switcher-left");
let participants_right_arrow = document.querySelector(".participants__switcher-right");
let participants_container = document.querySelector(".participants__container");
let participants_switcher_count = document.querySelector(".participants__switcher__count")
let participants_number = document.querySelector(".participants__number");

let container = document.querySelector(".container");
let participants_step_value = 0;
let participants_step_count = 0;
let participants_count

let dots_element = [];
let value_stage = 0;
let dots_number;
let dots_index = 0;
window.onload = () => {
    dots_number = stages_container.clientWidth / window.innerWidth;
    dots_number = Math.ceil(dots_number);
    for (let i = 0; i < dots_number; i++) {
       let dot_element =  document.createElement("div");
       stages_switcher_dots.appendChild(dot_element);
       dot_element.classList.add("stages__switcher_dot");
       dots_element.push(dot_element);
    }
    dots_element[dots_index].classList.add("active");

    if(window.innerWidth < 767) {
        participants_step_value = window.innerWidth
        participants_step_count = 1;
    } else {
        participants_step_value = container.clientWidth;
        participants_step_count = 3;
    }
    participants_number.innerHTML = participants_step_count;
    participants_count = participants_step_count;

}

//добавить свайп
stages_left_arrow.addEventListener('click', ()=> {
    if (value_stage < 0) {
        dots_element[dots_index].classList.remove("active")
        dots_index--;
        dots_element[dots_index].classList.add("active")
        stages_right_arrow.classList.add("active");
        stages_left_arrow.classList.remove("disabled");
        value_stage += window.innerWidth;
        stages_container.style.transform = `TranslateX(${value_stage}px)`;
        if (value_stage == 0) {
            stages_left_arrow.classList.remove("active");
            stages_left_arrow.classList.add("disabled");
        } 
    } 
})

stages_right_arrow.addEventListener('click', ()=> {
     if(Math.abs(value_stage) < Math.abs((window.innerWidth * (dots_number - 1) ))) {
        dots_element[dots_index].classList.remove("active")
        dots_index++;
        dots_element[dots_index].classList.add("active")
        stages_left_arrow.classList.add("active");
        stages_right_arrow.classList.remove("disabled");
        value_stage -= window.innerWidth;
        stages_container.style.transform = `TranslateX(${value_stage}px)`;
        if (Math.abs(value_stage) == Math.abs( window.innerWidth * (dots_number - 1) ) ) {
            stages_right_arrow.classList.add("disabled");
            stages_right_arrow.classList.remove("active");
        }
    } 
})

let participants_value = 0;

participants_left_arrow.addEventListener('click', ()=>{
    if(participants_value < 0 ) {
        participants_right_arrow.classList.add("active");
        participants_left_arrow.classList.remove("disabled");

        participants_count -=participants_step_count;
        participants_number.innerHTML = participants_count;

        participants_value += participants_step_value;
        participants_container.style.transform = `TranslateX(${participants_value}px)`;
        if (participants_value == 0) {
            participants_left_arrow.classList.remove("active");
            participants_left_arrow.classList.add("disabled");
        } 
    }
})

participants_right_arrow.addEventListener('click', ()=>{
    
    if(Math.abs(participants_value) < Math.abs((participants_container.clientWidth ) - Math.abs(participants_step_value) )) {
      
        participants_left_arrow.classList.add("active");
        participants_right_arrow.classList.remove("disabled");

        participants_count +=participants_step_count;
        participants_number.innerHTML = participants_count;

        participants_value -= participants_step_value;
        participants_container.style.transform = `TranslateX(${participants_value}px)`;
        
        if (Math.abs(participants_value) == Math.abs(participants_container.clientWidth) - Math.abs(participants_step_value) ) {
           
            participants_right_arrow.classList.add("disabled");
            participants_right_arrow.classList.remove("active");
        }
        
    } 
    
})