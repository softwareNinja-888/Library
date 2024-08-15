(function Start(){

    //  SELECTING :

    const addBtn = document.querySelector(".btn")
    const submitBtn = document.querySelector(".submit")
    const form = document.querySelector(".formInput")

    const author = document.querySelector(".author")
    const title = document.querySelector(".title")
    const pages = document.querySelector(".pages")
    const read = document.querySelector(".read")
    const close = document.querySelector(".closeImg")

    const cards = document.querySelector(".cards")
    const arr = ["author","title","pages","read"]

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
       displayBook(library)
       
    }

    function displayBook(library){

        while(cards.firstChild){
            cards.removeChild(cards.firstChild)
        }

        library.forEach((e)=>{
            createCard(e)
        })
    }

    function createCard(info){
        const n = 4
        const card = document.createElement("div")
        card.classList.add("card")

        const lowArr = (arr,num)=> arr[num][0].toUpperCase()+arr[num].toLowerCase().slice(1)

        for (let i = 0; i < n; i++){
            let newDiv = document.createElement("div")
            newDiv.classList.add("displayColumn")


            let p = document.createElement("p")
            let pAns =document.createElement("p")

            p.textContent = `${lowArr(arr,i)}: `
            pAns.textContent = info[`${arr[i]}`]


            p.classList.add(`display${lowArr(arr,i)}`)
            pAns.classList.add(`${arr[i]}Ans`)


            newDiv.appendChild(p)
            newDiv.appendChild(pAns)

            card.appendChild(newDiv)
           
        }
        let btnCon = document.createElement("div")
        let rbtn = document.createElement("button")
        let tbtn = document.createElement("button")


        btnCon.classList.add("buttons")
        rbtn.classList.add("removeDisplay")
        rbtn.textContent = "Remove"
        tbtn.classList.add("ToogleDisplay")
        tbtn.textContent = "Toogle Read"


        btnCon.appendChild(rbtn)
        btnCon.appendChild(tbtn)
        card.appendChild(btnCon)
        cards.appendChild(card)

        console.log(card);

    }

    function clearFields(){
        author.value = ''
        title.value = ''
        pages.value = ''
        read.checked = false
    }

    // EVENT LISTERNERS:

    addBtn.addEventListener("click", ()=>{
        form.style.opacity = 1
        form.style.transform = 'translateY(100px)'
    })

    submitBtn.addEventListener("click",()=>{
        
        addBook(author.value,title.value,pages.value,read.checked)  
        clearFields();  
        form.style.opacity = 0;
        form.style.transform = 'translateY(-1000px)'
    })

    close.addEventListener("click", ()=>{
        clearFields();  
        form.style.opacity = 0;
        form.style.transform = 'translateY(-1000px)'
    })
    
})()

