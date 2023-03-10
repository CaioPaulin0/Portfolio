const toggle = document.getElementById('toggle')
const div = document.querySelector('.headerCont')

export function header(){
toggle.addEventListener('click', () => {
    div.classList.toggle('active')
})
}

export function backAmenu(){
    const headerCont = document.querySelector('.headerCont')
    const a = headerCont.querySelectorAll('a')

    for(let i = 0; i < a.length; i++){
        a[i].addEventListener('click', () => {
            headerCont.classList.remove('active')
        })
    }
}

