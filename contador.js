const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const target = '1 dec 2024'

function countDown(){
    const dateTarget = new Date(target)
    const dateBase = new Date()

    const segundosTotal = (dateTarget-dateBase) / 1000
   
    const finalDias = Math.floor(segundosTotal / 60 / 60 / 24)
    const finalHoras = Math.floor(segundosTotal / 60 / 60) % 24
    const finalMinutos = Math.floor(segundosTotal / 60) % 60
    const finalSegundos = Math.floor(segundosTotal) % 60

    dia.innerHTML = finalDias +'D'
    hora.innerHTML = formatacao(finalHoras) +'H'
    minuto.innerHTML = formatacao(finalMinutos) +'M'
    segundo.innerHTML = formatacao(finalSegundos) +'S'

}

function formatacao(tempo){
    return tempo <10? `0${tempo}` : tempo 
}

countDown()
setInterval(countDown, 1000)