(function Start(){

    //  SELECTING :

    const addBtn = document.querySelector(".btn")
    const submitBtn = document.querySelector(".submit")
    const form = document.querySelector(".formInput")

    const author = document.querySelector(".author")
    const title = document.querySelector(".title")
    const pages = document.querySelector(".pages")
    const read = document.querySelector(".read")

    // CODE:

    let library = []

    function Book (author,title,pages,read){
        this.author = author
        this.title = title
        this.pages = pages
        this.read = read
    }

    function addBook(author,title,pages,read){
       const item = new Book(author,title,pages,read)
       library.push(item)
    }

    // addBook("James","Jeff Dun",456,false)
    // addBook("Youll","James Bond", 321, true)

    // console.log(library);

    // function displayLibrary(){

    // } 


    // EVENT LISTERNERS:

    addBtn.addEventListener("click", ()=>{
        form.style.opacity = 1
        form.style.transform = 'translateY(100px)'
    })

    submitBtn.addEventListener("click",()=>{
        
        addBook(author.value,title.value,pages.value,read.checked)       
        form.style.opacity = 0
        form.style.transform = 'translateY(-1000px)'
    })

    
})()

