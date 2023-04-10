document.addEventListener("DOMContentLoaded", () => {
    let number = document.querySelector(".number").textContent;
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");
    const controls = document.querySelector(".controls");
    console.log(number);

    const storeCount = () => {
        localStorage.setItem("count", number);
    };
    
    left.addEventListener("click", () => {
        number--;
    });
    
    right.addEventListener("click", () => {
        number++;
    });
    
    controls.addEventListener("click", () => {
        document.querySelector(".number").textContent = number;
        storeCount();
        console.log(number);
    });

    if(localStorage.getItem("count")) {
        document.querySelector(".number").textContent = localStorage.getItem("count");
        number = localStorage.getItem("count");
    }
    
})





