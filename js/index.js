
import data from "../projeto.json" assert {type: "json"}



const toggle = document.getElementById('toggle')
const div = document.querySelector('.headerCont')

toggle.addEventListener('click', () => {

    div.classList.toggle('active')
})

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

        const infoDiv = document.createElement('div')


        
        infoDiv.classList.add('projetoCont')
        infoDiv.innerHTML = 
        `<div class="infProjeto">


        <img src= ${data.foto} >
        <p> ${data.nome} </p>

        <div class="tecProjeto">
        <ul>
            ${data.midia.map((data) => {
                return `<li>${data.icon}</li>`
            })}
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
            <ul id="tec">

            ${data.tecnologias.map((data) => {
                return  data.logo
            })}
            
            </ul>
            </div>
        </div>
        `
        div.appendChild(fechar)
        div.appendChild(img)
        div.appendChild(infoDiv)

        const tec = document.querySelector('#tec')

        console.log(tec)
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

    div.addEventListener('click', () => {

        const main = document.querySelector('main')
        const header = document.querySelector('header')
        const footer = document.querySelector('footer')
        const body = document.querySelector('body')
        
        main.style.display = "none"
        header.style.display = "none"
        footer.style.display = "none"
        body.appendChild(projeto(data))

        return 
    })
    return div
}

function listaProjetos(){

    const projetosDiv = document.querySelector('.projetosAll')

     data.map((data) => {
        if(data.tipo === "profissional"){
            projetosDiv.appendChild(divProjeto(data,"2"))
            
        }
    })
}

listaProjetos()

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
    