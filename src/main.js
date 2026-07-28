import "./style.css";
const divOneEL = document.getElementById("divOne");
const divTwoEL = document.getElementById("divTwo");
const pTwoEL = document.getElementById("pTwo");
// console.log(pTwoEL);
const divThreeEL = document.getElementById("threeOne");
const divFourEL = document.getElementById("divFour");
const divFiveEL = document.getElementById("divFour");
const pOneEl = document.getElementById("pOne");
// divOneEL.addEventListener("click",()=>{
// divOneEL.classList.toggle("show");
// });
// divTwoEL.addEventListener("click",()=>{
// divTwoEL.classList.toggle("show1");

// })
const cardEL = document.querySelectorAll(".card");

cardEL.forEach((item) => {
  item.addEventListener("click", () => {
    const answerEl = item.querySelector(".answer");
    const isopenEl = answerEl.classList.contains("max-h-96");
    const plusEL = item.querySelector(".plus");

    cardEL.forEach((closeall) => {
      closeall.querySelector(".answer").classList.remove("max-h-96");
      closeall.querySelector(".answer").classList.add("max-h-0");
    //   closeall.querySelector(".plus").classList.add("rotate-45");
    });

    if (!isopenEl) {
      answerEl.classList.remove("max-h-0");
      answerEl.classList.add("max-h-96");
    //   plusEL.classList.add("rotate-45");
    }
    //  else {
    // //   item.classList.add("max-h-[66px]");
    // }
  });
});
