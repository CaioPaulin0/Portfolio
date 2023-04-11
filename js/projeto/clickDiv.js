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
             a.innerHTML = "Acessar o projeto"
             divLinks.appendChild(a)
        }
        
        return divLinks
    }

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

    const divImg = document.createElement('div')
    divImg.className = "midiaCont"
    const img = document.createElement('img')
    img.src = data.foto

    divImg.appendChild(img)
    divImg.append(links(data))
    
    divCont.appendChild(divImg)
    divCont.appendChild(divTexto)
    div.appendChild(divCont)


    return div
}