function tabuada(){
    var num = parseInt(document.getElementById("num").value);
    var resposta = document.getElementById('resultado');
    var tabuada="";

    for(var multipliacacao=1; multipliacacao<=10; multipliacacao++)
       
        tabuada += num + " X " + multipliacacao + " = " + num*multipliacacao + "<br>";

        resultado.innerHTML = tabuada;
}