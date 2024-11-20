const btn = document.getElementById("btn");
const tareaInput = document.getElementById("Tarea");
const altoContainer = document.querySelector(".alto");
const bajoContainer = document.querySelector(".Bajo");
const checkboxes = document.querySelectorAll(".contenedor2 input[type='checkbox']");

const agregarTarea = () => {
    const tareaTexto = tareaInput.value.trim();
    
    if (tareaTexto === "") {
        alert("Por favor, ingresa una tarea.");
        return;
    }

    const prioridad = obtenerPrioridad();

    if (!prioridad) {
        alert("Por favor, selecciona la prioridad de la tarea.");
        return;
    }

    const nuevaTarea = crearTarea(tareaTexto);

    if (prioridad === "Alto") {
        altoContainer.appendChild(nuevaTarea);
    } else if (prioridad === "Bajo") {
        bajoContainer.appendChild(nuevaTarea);
    }

    tareaInput.value = "";
};

const obtenerPrioridad = () => {
    let prioridad;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            prioridad = checkbox.nextSibling.nodeValue.trim();
            checkbox.checked = false; 
        }
    });
    return prioridad;
};

function crearTarea(texto) {
    const nuevaTarea = document.createElement("div");
    nuevaTarea.classList.add("tarea");
    
    const tareatexto = document.createElement("span");
    tareatexto.textContent = texto;

    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.addEventListener("click", function() {
        nuevaTarea.remove();
    });

    const checkboxlisto = document.createElement("input");
    checkboxlisto.type = "checkbox";
    checkboxlisto.addEventListener("change", function(){
        tareatexto.classList.toggle("tachado");
    });

    const tareaActions = document.createElement("div");
    tareaActions.classList.add("tarea-actions");
    tareaActions.appendChild(checkboxlisto);
    tareaActions.appendChild(eliminarBtn);

    nuevaTarea.appendChild(tareatexto);
    nuevaTarea.appendChild(tareaActions); 

    return nuevaTarea;
}

btn.addEventListener("click", agregarTarea);
