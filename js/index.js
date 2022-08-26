
const toggle = document.getElementById('toggle')
const div = document.querySelector('.headerCont')

toggle.addEventListener('click', () => {

    div.classList.toggle('active')
})

backAmenu = () => {
    const headerCont = document.querySelector('.headerCont')
    const a = headerCont.querySelectorAll('a')

    for(let i = 0; i < a.length; i++){
        a[i].addEventListener('click', () => {
            headerCont.classList.remove('active')
        })
    }
}

backAmenu()

remove = () => {
    const array = document.querySelectorAll('[data-jobs]')

    array.forEach(cont => {
         cont.classList.add('hiden')
         cont.classList.add('aniimg')

    }
    )
}

show = (valor) => {
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

aniHabilidade = () => {
    const hTextos = document.querySelector('.habilidadesTextos')

    const iconsHabilidades = hTextos.querySelectorAll('i')

    for(let i = 0; i < iconsHabilidades.length; i++){
        setTimeout(() => {
            iconsHabilidades[i].classList.add("iconHabilidades")
            
        }, [i * 100] )
    }
}

aniWindow = () => {
    const arrayW = document.querySelectorAll('[data-window]')

    const windowTop = window.pageYOffset + window.innerHeight * 0.8

    arrayW.forEach(element => {
        if(windowTop > element.offsetTop){
            element.classList.remove('hiden')
            element.classList.add('animacao');
            aniHabilidade()
            
        } 
    })
}

window.addEventListener('scroll', () =>{
    aniWindow()
})
    