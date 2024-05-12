const modal = () => {
    const modal = document.querySelector(".search-model");
const modalBtn=document.querySelector(".icon_search");
const modalClose=modal.querySelector(".search-close-switch")
const searchInput = modal.querySelector("#search-input")

modalBtn.addEventListener("click",()=>{
    modal.classList.add("active");
})

modalClose.addEventListener("click",()=>{
    modal.classList.remove("active")
})

searchInput.addEventListener("input", (event) => {
    event.preventDefault()
    console.log(event.currentTarget.value);
  });


}

modal();