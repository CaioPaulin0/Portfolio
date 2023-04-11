import data from "../../projeto.json" assert {type: "json"}
import { projetoDiv } from "./projetoDiv.js";
const separar = (itens, maximo) => {
    return itens.reduce((acumulador, item, indice) => {
      const grupo = Math.floor(indice / maximo);
      acumulador[grupo] = [...(acumulador[grupo] || []), item];
      return acumulador;
    }, []);
  };

export async function pess(){

    let pess = []

    data.map((e) => {
        if(e.tipo === "pessoal"){
            pess.push(e)
        }
    })
 
    const ddda= document.createElement('div')
    ddda.className = "DivProjeto"

    const div = document.createElement('div')
    div.setAttribute('data-jobs', 1)
    div.appendChild(ddda)

    pess.map((v) => {
        ddda.appendChild(projetoDiv(v))
    })

    const ddmain = div.querySelectorAll('[jobs="pessoal"]')
    const s = await separar([...ddmain],3)

    div.appendChild(seta(s))

    return div
}

function seta(json){

    const divpess = document.createElement('div')
    divpess.className = "divpess"
    for(let i = 0; i < json.length; i++){
        const p  = document.createElement('p')
        p.innerHTML = "•"
        
        divpess.appendChild(p)
    }

    const ad = divpess.querySelectorAll('p')

    const div = document.createElement('div')
    
    div.className = "footerDivProjeto"
    // em baixo

    if(!json[1]){
        json[0].map((e) => {
            e.style.display = "block"
        })
    }else{
        json[1].map((e) => {
            e.style.display = "none"
        })
        json[2].map((e) => {
            e.style.display = "none"
        })
    }

    let value = 0
    ad[value].style.color = "#5C73BF"
    const es = document.createElement('p')
    es.innerHTML = `<i class="fa-solid fa-arrow-left"></i>`
    es.addEventListener('click', () => {
        
        value = value - 1
        if(value === -1){
            return value = 0
        }else{
            json[value].map((e) => {
                e.style.display = "block"
             })
         
             json[value + 1].map((e) => {
                e.style.display = "none"
             })
            }
            ad[value + 1].style.color = "#0F1528"
            ad[value].style.color = "#5C73BF"
    })

    const di = document.createElement('p')
    di.innerHTML = `<i class="fa-solid fa-arrow-right"></i>`
    di.addEventListener('click', () => {
        value = value + 1

        if(value === json.length){
            return value = value - 1
        }else{
            json[value].map((e) => {
               e.style.display = "block"
             })
         
             json[value - 1].map((e) => {
                e.style.display = "none"
            })
        }
        ad[value - 1].style.color = "#0F1528"
        ad[value].style.color = "#5C73BF"
    })

    const setasDiv = document.createElement('div')
    setasDiv.className = "seta"

    setasDiv.appendChild(es)
    setasDiv.appendChild(di)

    div.append(setasDiv)
    div.append(divpess)

    return div
}