let palabras=['MOCOS','VACA','CASA','GOMA','TOMATE']
document.querySelector('.div-cont-btn-seg').style.display='none'
document.querySelector('.div-cont-agregar').style.display='none'
$('.btn-Iniciar').click(()=>{
    document.querySelector('.div-cont-btn-prin').style.display='none'
    juego()
    document.querySelector('.div-cont-btn-seg').style.display='block'
})
$('.btn-Agregar').click(()=>{
    document.querySelector('.div-cont-btn-prin').style.display='none'
    document.querySelector('.div-cont-agregar').style.display='block'
})
$('.btn-guardar').click(()=>{
    let palabraagregar=document.getElementById('agregar').value
    if (palabraagregar.length<3){
        sinPalabra()
    }else{
        let existe
        for(let i=0; i<palabras.length;i++){
            if(palabras[i]==palabraagregar){
                repetido()
                existe=true
                break
            }else{
                existe=false
            }
        }
        if(existe==false){
            palabras.push(palabraagregar)
            console.log(palabras)
            document.querySelector('.div-cont-agregar').style.display='none'
            juego()
            document.querySelector('.div-cont-btn-seg').style.display='block'
        }
    }
})
$('.btn-cancelar').click(()=>{
    document.querySelector('.div-cont-agregar').style.display='none'
    document.querySelector('.div-cont-btn-prin').style.display='block'
})
$('.btn-IniciarNu').click(()=>{
    juego()
})
$('.btn-Desistir').click(()=>{
    perdiste()
    juego()
})
function comparar(id){
    
}

function juego(){
    const numeroRandom=Math.floor(Math.random()*(palabras.length-0))
    const palabraselc= palabras[numeroRandom]
    let html=''
    for (let i=0; i<palabraselc.length;i++){
        html=html+`<div style="width: 60px;">
            <input class="input-juego" id="${i}" onchenge="${comparar(i)}"  name="${i}" type="text" maxlength="1">
            <div style="border: 4px solid #0A3871;"></div>
        </div>`
    }
    document.querySelector('.letras').innerHTML=html
}

function sinPalabra(){
    Swal.fire(
        'Seguro que agregaste una palbra?',
        'agregaste algo ?',
        'question'
      )
}
function repetido(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'ya existe la palabra'
      })
}
function perdiste(){
    Swal.fire({
        title: 'Perdiste!',
        text: 'Ha muerto.',
        imageUrl: 'https://c.tenor.com/pvblfjJ1WYYAAAAM/dead-witch.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
}