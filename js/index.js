const header = document.querySelector('header')
const main = document.querySelector('main')

window.addEventListener('scroll', () =>{
    console.log(window.scrollY)

    if(window.scrollY > 150){
        header.style.backgroundColor = '#141414'
        return header.style.position = 'fixed'
    }
    else{
        header.style.backgroundColor = 'transparent'
        header.style.position = 'absolute'
    }
})

const btnHeader = document.getElementById('btnHeader')
const mobileHeaderCont = document.querySelector('.btnHeaderCont')
let btnValue = false

btnHeader.addEventListener('click',() =>{
    if(btnValue == false){
        mobileHeaderCont.style.display = 'flex'

      return  btnValue = !btnValue
    }else{
        mobileHeaderCont.style.display = 'none'
        
        return btnValue = !btnValue
    }

})
