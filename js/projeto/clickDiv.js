function links(data){

    if(data.midia.length === 0){
        return ""
    }else{

        const divLinks = document.createElement('div')
        divLinks.className = "linkCont"
        const arrayData = data.midia

     
        if(arrayData[0].link === ''){
         false
        }else{
         const a = document.createElement('a')
             a.href = arrayData[0].link
             a.innerHTML = "Acessar o projeto"
             divLinks.appendChild(a)
        }
     
        if(arrayData[1].link === ''){
         false
        }else{
         const a = document.createElement('a')
             a.href = arrayData[0].link
             a.innerHTML = "Acessar o repositório"
             divLinks.appendChild(a)
        }
        
        return divLinks
    }

}

function tec(data){
    const div = document.createElement('div')
    const p = document.createElement('p')
    p.innerHTML = "Tecnologias"
    div.appendChild(p)
    div.className = "tecCont"

    const iconDiv = document.createElement('div')
    iconDiv.className = "iconDiv"

    data.tecnologias.map((e) => {
        let i = document.createElement('i')
        i.className = e.logo
        iconDiv.append(i)
    })

    div.appendChild(iconDiv)

    return div
}

export function clickDiv(data){
    const main = document.querySelector('main')
    const div = document.createElement('div')
    const divCont = document.createElement('div')
    const fechar = document.createElement('p')
    fechar.innerHTML = "X"
    fechar.className = "fechar"

    fechar.addEventListener('click', () => {
        main.removeChild(div)
    })

    div.className = "projetoClick"
    div.appendChild(fechar)
    divCont.className = "cont"
   
    const divTexto = document.createElement('div')
    divTexto.className = "clickTexto"

    const strong = document.createElement('strong')
    strong.innerHTML = data.nome
    divTexto.appendChild(strong)
    const p = document.createElement('p')
    p.innerHTML = data.descricao
    divTexto.appendChild(p)

    const tecDiv = document.createElement('div')
    tecDiv.className = "tecCont"

    divTexto.appendChild(tec(data))

    const divImg = document.createElement('div')
    divImg.className = "midiaCont"
    const img = document.createElement('img')
    img.src = data.foto
    divTexto.append(links(data))

    divImg.appendChild(img)
    
    divCont.appendChild(divImg)
    divCont.appendChild(divTexto)
    div.appendChild(divCont)


    return div
}