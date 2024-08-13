const addBtn = document.querySelector(".btn")
const submitBtn = document.querySelector(".submit")
const form = document.querySelector(".formInput")

addBtn.addEventListener("click", ()=>{
    form.style.opacity = 1
    form.style.transform = 'translateY(100px)'
})

submitBtn.addEventListener("click",()=>{
    form.style.opacity = 0
    form.style.transform = 'translateY(-10px)'
})