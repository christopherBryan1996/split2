let palabras=['MOCOS','VACA','CASA','GOMA','TOMATE']
const img=['primero.jpg','segundo.jpg','tercero.jpg','cuarto.jpg','quinto.jpg','sexto.jpg']
let palabraselc
let oportunidades=0
let cantidadAcertivas=0
document.querySelector('.div-cont-btn-seg').style.display='none'
document.querySelector('.div-cont-agregar').style.display='none'
$('.imgLogo').click(()=>{
    document.querySelector('.div-cont-btn-seg').style.display='none'
    document.querySelector('.div-cont-agregar').style.display='none'
    document.querySelector('.div-cont-btn-prin').style.display='block'
})
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
            palabras.push(palabraagregar.toUpperCase())
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
    oportunidades=0
    mostrar(oportunidades)
    juego()
})
$('.btn-Desistir').click(()=>{
    oportunidades=0
    mostrar(oportunidades)
    perdiste(palabraselc)
    juego()
})
function mostrar(n){
    if (n<img.length){
        document.getElementById('imgAhorcado').innerHTML=`<img src="img/ahorcado/${img[n]}" alt="logo">`
    }else{
        perdiste(palabraselc)
        oportunidades=0
        mostrar(oportunidades)
        for (let i = 0; i < palabraselc.length; i++) {
            document.getElementById(`${i}`).value=''
        }
    }
}
function comparar(total){
    for (let i = 0; i < total; i++) {
        $(`#${i}`).on('input',()=>{
            const value=document.getElementById(`${i}`).value
            const name=document.getElementById(`${i}`).name
            console.log(document.getElementById(`${i}`).name)
            if(value.toUpperCase()==name){
                cantidadAcertivas++
                if(cantidadAcertivas==palabraselc.length){
                    oportunidades=0
                    cantidadAcertivas=0
                    ganaste()
                    mostrar(oportunidades)
                    juego()
                }else{
                    document.getElementById(`${i}`).style.color='#50dc37'
                }
            }else if(value.toUpperCase()!=name && value.length>0){
                document.getElementById(`${i}`).style.color='#f71010'
                oportunidades++
                mostrar(oportunidades)
            }
        })
    }
}

function juego(){
    const numeroRandom=Math.floor(Math.random()*(palabras.length-0))
    palabraselc= palabras[numeroRandom]
    let html=''
    for (let i=0; i<palabraselc.length;i++){
        html=html+`<div style="width: 60px;">
            <input class="input-juego" id="${i}" name="${palabraselc[i]}" type="text" maxlength="1">
            <div style="border: 4px solid #0A3871;"></div>
        </div>`
    }
    document.querySelector('.letras').innerHTML=html
    comparar(palabraselc.length)
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
function perdiste(word){
    Swal.fire({
        title: 'Perdiste!',
        text: `Ha muerto. La palabra es: ${word}`,
        imageUrl: 'https://c.tenor.com/pvblfjJ1WYYAAAAM/dead-witch.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
}
function ganaste(){
    Swal.fire({
        title: 'Ganste!',
        text: `Felicidades has ganado`,
        imageUrl: 'https://c.tenor.com/-f6X2JYRo4cAAAAC/spongebob-rainbow.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
}