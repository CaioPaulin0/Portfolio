import data from "../projeto.json" assert {type: "json"}

const obj = async () => {
    const json = await data

    return json
}

obj()


const toggle = document.getElementById('toggle')
const div = document.querySelector('.headerCont')

toggle.addEventListener('click', () => {

    div.classList.toggle('active')
})

// json

function projeto(data){
        const div = document.createElement('div')   
        const img = document.createElement('img')
        const fechar = document.createElement('p')
        fechar.innerHTML = "X"
        fechar.classList.add("fechar")

        fechar.addEventListener('click', () => {
            document.querySelector('main').style.display = "block"
            document.querySelector('header').style.display = "flex"
            document.querySelector('footer').style.display = "flex"

            document.querySelector('body').removeChild(document.querySelector('.projeto'))
        })
        div.classList.add('projeto')
        
       img.setAttribute('src', data.gif)
       img.classList.add('gif')

        const infoDiv = document.createElement('div')
    
        infoDiv.classList.add('projetoCont')
        infoDiv.innerHTML = 
        `<div class="infProjeto">


        <img src= ${data.foto} >
        <p> ${data.nome} </p>

        <div class="midiaProjeto">
        <ul>
            ${data.midia.map((data) => {
                return `<li>
                <a href= ${data.link}>
                ${data.icon}
                </a>
                </li>`
            }).join('')}
            </ul>
        </div>

        </div>
        
        <div class="descProjeto">
          <span> Descrição </span>

          <p>
                ${data.descricao}
          </p>
        </div>

        <div class="tecProjeto">
            <span> Tecnologias </span>
            <div>
            <ul>

            ${data.tecnologias.map((data) => {
                return `<li>${data.logo}</li>`
                
            }).join('')}
            
            </ul>
            </div>

            
        </div>
        `
        
        div.appendChild(fechar)
        div.appendChild(img)
        div.appendChild(infoDiv)

        return div
}

function divProjeto(data,jobs){
    const div = document.createElement('div')

    div.classList.add('projetoSlide')

    div.setAttribute('data-jobs', jobs)

    const img = document.createElement('img')
    img.setAttribute("src", data.foto)

    const divNome = document.createElement('div')
    divNome.classList.add('textoProjeto')
    const p = document.createElement('p')
    p.innerHTML = data.nome

    divNome.appendChild(p)

    div.appendChild(img)
    div.appendChild(divNome)

    div.addEventListener('click', async () => {

        const main = document.querySelector('main')
        const header = document.querySelector('header')
        const footer = document.querySelector('footer')
        const body = document.querySelector('body')
        
        main.style.display = "none"
        header.style.display = "none"
        footer.style.display = "none"
        await body.appendChild(projeto(data))

        return 
    })


    return div
}

// fim json

function backAmenu(){
    const headerCont = document.querySelector('.headerCont')
    const a = headerCont.querySelectorAll('a')

    for(let i = 0; i < a.length; i++){
        a[i].addEventListener('click', () => {
            headerCont.classList.remove('active')
        })
    }
}

backAmenu()


async function listaProjetos(){

    let jsonObj = await obj()

    const projetosDiv = document.querySelector('.projetosAll')
    
        jsonObj.map((data) => {
            if(data.tipo === "profissional"){
                projetosDiv.append(divProjeto(data,"2"))
            }
            })

        jsonObj.map((data) => {
                if(data.tipo === "pessoal"){
                    projetosDiv.appendChild(divProjeto(data,"1"))
                }
            })

            const array = document.querySelectorAll(`[data-jobs="2"]`)
            let divs = [...array]
            divs.map(cont => cont.classList.add('hiden'))
}

listaProjetos()

function remove(){
    const array = document.querySelectorAll('[data-jobs]')
    
    array.forEach(cont => {
        cont.classList.add('hiden')
        cont.classList.add('aniimg')
        
    }
    )
}

function  show(valor){
    const array = document.querySelectorAll(`[data-jobs="${valor}"]`)
    
    array.forEach(cont => cont.classList.remove('hiden'))
    
}

const btnButton = document.querySelectorAll('[data-button]')

for(let i = 0; i < btnButton.length; i++){
    btnButton[i].addEventListener('click', () => {
        if(i === 0){
            remove()
            show('1')
        }
        if(i === 1){
            remove()
            show('2')
        }
    })
}


function  aniWindow(){
    const arrayW = document.querySelectorAll('[data-window]')

    const windowTop = window.pageYOffset + window.innerHeight * 0.8

    arrayW.forEach(element => {
        if(windowTop > element.offsetTop){
            element.classList.remove('hiden')
            element.classList.add('animacao');          
        } 
    })
}

window.addEventListener('scroll', () =>{
    aniWindow()
})
    