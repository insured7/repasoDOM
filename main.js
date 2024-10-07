function agregarParrafo(){ 

        //Ejercicio 1
        //1. Seleccionar el elemento HTML donde vamos a añadir el parrafo
        let container = document.querySelector('#contenedor');
        //2. Crear el elemento HTML
        let p = document.createElement('p');
        //3. Añadir el contenido (lorem) al p
        p.innerText = 'Este es el parrafo';
        //4. Añadir el p al elemento seleccionado en el paso 1
        container.appendChild(p);

        //document.getElementById('contenedor').innerHTML='lorem'; [Forma bruta]
        }

        function addArticulo(){

            let elemento = prompt("Introduce un elemento de la lista: ", 0);
            let ul = document.querySelectorAll('ul')[0]; //devuelve un array y le decimos que queremos el primero (0)
            let li = document.createElement('li');
            li.innerHTML = elemento;
            ul.append(li);

        }

        function creaConEstilo(){
            /**
             * Creo elemento, le referencio con un nombre, le añado el texto y con el body.append lo añado a la pagina
             * */

            let div = document.createElement('div');
            div.className = "nombre";
            div.innerHTML = "Ivan Iglesias Sanchez";
            /** 
             * Añado el css
             * **/
            div.style.color = "red";
            div.style.fontWeight = "bold";
            div.style.fontSize = "xx-large";

            document.body.append(div);
        }