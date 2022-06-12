let palabras=['MOCO','VACA','CASA','GOMA']
document.querySelector('.div-cont-btn-seg').style.display='none'
$('.btn-Iniciar').click(()=>{
    document.querySelector('.div-cont-btn-prin').style.display='none'
    juego()
    document.querySelector('.div-cont-btn-seg').style.display='block'
})
$('.btn-Agregar').click(()=>{
    console.log('btn-Agregar')
})
function juego(){
    const numeroRandom=Math.floor(Math.random()*(palabras.length-0))
    const palabraselc= palabras[numeroRandom]
    console.log(palabraselc)
    let html=''
    for (let i=0; i<palabraselc.length;i++){
        html=html+`<div style="width: 60px;">
            <input class="input-juego" name="${i}" type="text" maxlength="1">
            <div style="border: 4px solid #0A3871;"></div>
        </div>`
    }
    console.log(html)
    document.querySelector('.letras').innerHTML=html
}