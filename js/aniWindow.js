export function  aniWindow(){
    const arrayW = document.querySelectorAll('[data-window]')

    const windowTop = window.pageYOffset + window.innerHeight * 0.8

    arrayW.forEach(element => {
        if(windowTop > element.offsetTop){
            element.classList.remove('hiden')
            element.classList.add('animacao');          
        } 
    })
}



