import { clickDiv } from "./clickDiv.js"

export function projetoDiv(data){
    const div = document.createElement('div')

    div.className = "projetoSlide"
    const texProjeto = document.createElement('div')
    texProjeto.className = "textoProjeto"
    const p = document.createElement('p')
    p.innerHTML = data.nome

    texProjeto.append(p)
    div.setAttribute('jobs', data.tipo)
    const img = document.createElement('img')
    img.src = data.foto
    img.alt = data.nome

    div.appendChild(img)
    div.appendChild(texProjeto)

    div.addEventListener('click', () => {
        click(data)
    })

    return div
}

async function click(data){
    const main = document.querySelector('main')

    main.append(clickDiv(data))
    return main

}