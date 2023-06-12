const input = document.querySelector('input')
const btn = document.querySelector('button')
const select = document.querySelector('select')
const cont = document.querySelector('.render')
function renderBlcok() {
    cont.innerHTML = ''
    
    for (let i = 0; i < input.value ; i++) {
        if (i < 10) {
            cont.innerHTML += `
<div  style="background-color: ${select.value};width:200px;height:200px;margin:20px;"></div>
`
        }
    }
}
btn.addEventListener('click', renderBlcok)
