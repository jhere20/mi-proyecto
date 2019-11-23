/*var Numero = new Array();

function getNumber(){
}

//Compara numero si es positivo o negativo
/*function Comparar(){
    for (var i = 10 - 1; i >= 0; i--) {
        Numero[i] = prompt("Numero " + i);
    }
    for (var i = 10 - 1; i>= 0; i--) {
        if (i>0) {
            document.write([i]+"positivo <br>");
        }else{
            document.write([i]+"negativo <br>");
        }
    }
}*/

function Login()
{
    var usuario = document.getElementById("us").value;
    var contraseña = document.getElementById("pass").value;

    if(usuario=="jere" && contraseña == "123")
    {
        alert("Bienvenido");
        {
            window.location = "./pages/Inicio.html"
        }
    }
    else
    {
        swal.fire("Usuario o contraseña incorrecto. Favor inténtalo de nuevo");
    }
}

function Inicio()
{
    window.location = "../pages/Inicio.html"
}

$("#amis").click(function(){
    window.location = "../pages/Amigos.html"
});

$("#info").click(function(){
    window.location = "../pages/Acerca de.html"
});

$("#jq").click(function(){
    window.location = "../pages/Jquery.html"
});

$("#salida").click(function(){
    window.location = "../index.html"
});

function Eliminador()
{
    Swal.fire('Usuario eliminado');
}