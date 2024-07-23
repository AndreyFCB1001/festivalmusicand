document.addEventListener('DOMContentLoaded',function(){
    navegacionFija()
    crearGaleria()
    resaltarEnlace()
    scrollNav()
})

function navegacionFija (){
    const header = document.querySelector(".header")
    const sobreFESTIVAL = document.querySelector(".sobre-festival")

    document.addEventListener("scroll", function(){
        if (sobreFESTIVAL.getBoundingClientRect().bottom < 1)
        {
            header.classList.add("fixed")
        }
        else{
            header.classList.remove("fixed")
        }



        // console.log(sobreFESTIVAL.getBoundingClientRect().bottom)
    })
}



function crearGaleria(){
    const CANTIDAD_IMAGENES = 16
    const galeria = document.querySelector(".galeria-imagenes")
    for (let i = 1; i <=CANTIDAD_IMAGENES; i++){

        const imagen = document.createElement("IMG")
        imagen.src = `src/img/gallery/full/${i}.jpg`
        
        
        // eveny hundler
        imagen.onclick = function () {
            
            mostrarImagen(i)
        }
        
        
        galeria.appendChild(imagen)
    }
}
function mostrarImagen(i){

    const imagen = document.createElement("IMG")
    imagen.src = `src/img/gallery/full/${i}.jpg`

    
    ///generar modal
    
    const modal = document.createElement("DIV")
    modal.classList.add("modal")
    modal.onclick = cerrarModal
    
    //boton cerrar modal
    const cerrarModalBtn = document.createElement("BUTTON")
    cerrarModalBtn.textContent = "X"
    cerrarModalBtn.classList.add("btn-cerrar")
    cerrarModalBtn.onclick = cerrarModal


    modal.appendChild(imagen)
    modal.appendChild(cerrarModalBtn)

    //agregar al html

    const body = document.querySelector("body")
    body.classList.add("overflow-hidden")
    body.appendChild(modal)
    // console.log(modal)
}
function cerrarModal (){
    const modal = document.querySelector(".modal")
    modal.classList.add("fade-out")
    setTimeout(() => {
        modal?.remove()
        const body = document.querySelector("body")
        body.classList.remove("overflow-hidden")
    },500);
    
    
}

function resaltarEnlace (){
    document.addEventListener("scroll", function (){
        const sections = document.querySelectorAll("section")
        const navLink = document.querySelectorAll(".navegacion-principal a")

        let actual = "";
        sections.forEach ( section =>{
            const sectionsTop = section.offsetTop
            const sectionHeight = section.clientHeight

            if(window.scrollY >= ( sectionsTop - sectionHeight / 3)){
                actual = section.id
            }
        })
        navLink.forEach(link =>{
            link.classList.remove("active")

            if(link.getAttribute("href") === "#" + actual){
                link.classList.add("active")
            }
        })
    })
}

function scrollNav(){
    const navLink = document.querySelectorAll(".navegacion-principal")
    navLink.forEach(link => {
        link.addEventListener("click", e =>{
            e.preventDefault()
            const sectionScroll = e.target.getAttribute("href")
            const section = document.querySelector(sectionScroll)
            section.scrollIntoView({behavior: "smooth"})
        })
    })
}