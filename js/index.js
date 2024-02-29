import { header, backAmenu } from "./header.js"
import { aniWindow } from "./aniWindow.js"

// projetos
import { pess } from "./projeto/pessoal.js"
import { prof } from "./projeto/profissional.js"
const proT = document.querySelector('#projetoT')
const proD = document.querySelector('#projetoD')

pess().then((e) => {
    proT.appendChild(e)
})

prof().then((e) => {
    proD.appendChild(e)
})

// header
header()
backAmenu()

function footerProjeto(arr1,arr2){
    const footerProjeto = document.createElement('div')
    footerProjeto.classList.add("footerProjeto")

    const pro = document.createElement('div')
    pro.appendChild(seta(arr1))
    pro.appendChild(arrayProjeto(arr1))

    const pre = document.createElement('div')
    pre.appendChild(seta(arr2))
    pre.appendChild(arrayProjeto(arr2))

    footerProjeto.appendChild(pro)
    footerProjeto.appendChild(pre)
    // contador de array dividito

   return projetosDiv.appendChild(footerProjeto)
}

function showw(arr,i){
    arr[i - 1].map((e) => {
        e.classList.add('hiden')
    })
}

// forma de mostrar pela prof
// feito
function remove(){
    const array = document.querySelectorAll('[data-jobs]')
    
    array.forEach(cont => {
        cont.classList.add('hiden')
        cont.classList.add('aniimg')
        
    }
    )
}


const separar = (itens, maximo) => {
    return itens.reduce((acumulador, item, indice) => {
      const grupo = Math.floor(indice / maximo);
      acumulador[grupo] = [...(acumulador[grupo] || []), item];
      return acumulador;
    }, []);
  };

// fim

// feito
window.addEventListener('scroll', () =>{
    aniWindow()
})