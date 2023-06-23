nombre_alumno_array = [];
    
function submit()
{
    var ver_alumno_array = [];

   
        var nombre_alumno = document.getElementById("nombre_alumno_1").value;
        console.log(nombre_alumno);
        nombre_alumno_array.push(nombre_alumno);
    

    console.log(nombre_alumno_array);

    var longitud_nombre_alumnos_array = nombre_alumno_array.length;
    console.log(longitud_nombre_alumnos_array);
    document.getElementById("lista_ordenada").innerHTML=nombre.toString();
     

}

function sorting()
{
    nombre_alumno_array.sort();
    console.log(nombre_alumno_array);

    var ver_alumno_array_ordenar = [];

    var longitud_nombre_alumnos_array = nombre_alumno_array.length;
    console.log(longitud_nombre_alumnos_array);
    var i=nombre_alumno_array.join()
    document.getElementById("lista_ordenada").innerHTML=nombre.toString();
    
}


//Actividad adicional
function new_update()
{
    document.getElementById("ver_nombre_sin_comas").innerHTML = "<h1>" + nombre_alumno_array +"</h1>";
}



