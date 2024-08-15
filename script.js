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

    const overlay = document.querySelector(".modal-overlay")

    // CODE:

    let library = []

    // OBJECT CONSTRICTOR FOR BOOKS 

    function Book (author,title,pages,read){
        this.author = author
        this.title = title
        this.pages = pages
        this.read = read
    }

    // CREATE BOOK AND ADD TO LIBRARY ARRAY

    function addBook(author,title,pages,read){
       const item = new Book(author,title,pages,read)
       library.push(item)
       displayBook(library)
       
    }

    // LOOP OVER LIBRARY TO DISPLAY BOOKS

    function displayBook(library){

        while(cards.firstChild){
            cards.removeChild(cards.firstChild)
        }

        library.forEach((e)=>{
            createCard(e)
        })
    }

    // CREATES CARDS FOR EACH BOOK IN LIBRARY

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

            p.textContent = `${lowArr(arr,i)}: `;
            
            // DYNAMICALLY ADD READING STATUS

            (typeof info[`${arr[i]}`] === 'boolean') ? pAns.textContent = info[`${arr[i]}`] ? "Done Reading": "Not yet" : pAns.textContent = info[`${arr[i]}`]


            p.classList.add(`display${lowArr(arr,i)}`)
            pAns.classList.add(`${arr[i]}Ans`)
            pAns.classList.add('font-semibold')


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

    }

    // CLEAR FIELDS OF FORM 

    function clearFields(){
        author.value = ''
        title.value = ''
        pages.value = ''
        read.checked = false
    }

    // EVENT LISTERNERS:

    // ADD BOOK BUTTON POPS UP MODAL

    addBtn.addEventListener("click", ()=>{
        form.classList.add("showing")
        overlay.classList.add("showing")
        author.focus()
        author.required = true
        author.setAttribute("required","")
    })
    
    // SUBMIT BUTTON ADDBOOK AND REMOVES MODAL

    submitBtn.addEventListener("click",()=>{
        
        addBook(author.value,title.value,pages.value,read.checked)  
        clearFields();  
        form.classList.remove("showing")
        overlay.classList.remove("showing")

    })

    // CLOSES MODAL AND CLEARS FIELDS

    close.addEventListener("click", ()=>{
        clearFields();  
        form.classList.remove("showing")
        overlay.classList.remove("showing")

    })
    
})()

