function insertarnombre(event) {
 event.preventDefault();

    var nombre = document.getElementById("nombre").value;
    if(nombre == " " ){
        alert("el nombre no puede estar vacio");
    }
    else{
        var option = "<li> "+ nombre +"</li>";

        var lista = document.getElementById("lista");

        lista.innerHTML += option ;
        

        alert("se ha insertado el nombre");

    }
} 