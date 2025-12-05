        //1. getElementById
        // Utilizando getElementById para seleccionar un elemento por su ID
        const miElemento = document.getElementById('miElemento');

        // Haciendo algo con el elemento seleccionado, por ejemplo, cambiando su contenido
        miElemento.textContent = 'Nuevo contenido para el elemento';

        // 2. getElementsClassName()
        const miClases=document.getElementsByClassName("miclase")

        for (let i = 0; i<miClases.length; i++){
           miClases[i].textContent=`Nuevo contenido ${i + 1}`
        }


        // 3. getElementByTagName()
        let miDivs = document.getElementsByTagName("div");
        for(let div of miDivs){
            if (div.textContent.includes("div")){
                let texto = div.innerHTML;
                texto=texto.replace("div", "<b>div</b>");
                div.innerHTML=texto;
            }
            
        }

        //4. querySelector() - Me recupera wl primer elemento con la clase que se esta buscando
        const primerDiv = document.querySelector(".miclase");
        primerDiv.innerHTML = `<em>${primerDiv.innerHTML}</em>`;

        //5. querySelectorAll() - recupera todos los elementos HTML que coincidan con un selector CSS espesifico
        miDivs = document.querySelectorAll(".miclase");
        miDivs.forEach(element => {
            element.style.color = "tomato";
            element.style.fontSize = "1.2em";
            
        });
