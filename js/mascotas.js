const listaMascotas=document.getElementById('lista-mascotas');
const tipo=document.getElementById('tipo');
const nombre=document.getElementById('nombre');
const dueno=document.getElementById('dueno');
const indice=document.getElementById('indice');
const btnGuardar=document.getElementById('btn-guardar');
const form=document.getElementById('form');


let mascotas=[ 
    {
        tipo: "Perro",
        nombre: "Firulais",
        dueno:"Blanca"
    },
    {
        tipo: "Gato",
        nombre: "Misifu",
        dueno:"Laura"
    }
];


function listarMascotas()
{
    const htmlMascotas = mascotas.map((mascota, index)=>`<tr>
    <th scope="row">${index}</th>
    <td>${mascota.tipo}</td>
    <td>${mascota.nombre}</td>
    <td>${mascota.dueno}</td>
    <td>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-info editar" ><i class="fas fa-edit"></i></button>
            <button type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
        </div>
    </td>
  </tr>`).join("");
listaMascotas.innerHTML=htmlMascotas;
Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index)=>botonEditar.onclick=editar(index))
}

function enviarDatos(evento)
{
    evento.preventDefault();
    const datos =
    {
        tipo: tipo.value,
        nombre: nombre.value,
        dueno: dueno.value
    };
    const accion=btnGuardar.innerHTML;
    switch(accion)
    {
        case 'Editar':
        //editar
        mascotas[indice.value]=datos;
        break;

        default:
            //crear
            mascotas.push(datos);
            break;
    }
    
    listarMascotas();
    resetModal();

}

function editar(index)
{
    return function cuandoCliqueo()
    {
        btnGuardar.innerHTML='Editar'
        $('#exampleModalCenter').modal('toggle');
        const mascota=mascotas[index];
        nombre.value=mascota.nombre;
        dueno.value=mascota.dueno;
        tipo.value=mascota.tipo;
        indice.value=index;
    } 
}

function resetModal()
{
    nombre.value='';
    dueno.value='';
    tipo.value='';
    indice.value='';
    btnGuardar.innerHTML='Crear'
}

listarMascotas();
form.onsubmit=enviarDatos;
btnGuardar.onclick=enviarDatos;