import hello from './hello.js'
const div = document.createElement('div')
div.innerHTML = hello()

document.body.appendChild(div)
